"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";

export type ThemeName =
  | "editorial"
  | "spiritual"
  | "rugged"
  | "tropical"
  | "minimal"
  | "cta";

type ScrollThemeApi = {
  register: (el: Element, theme: ThemeName) => void;
  unregister: (el: Element) => void;
};

const ScrollThemeContext = createContext<ScrollThemeApi | null>(null);

/**
 * Wraps the section list and owns a single IntersectionObserver. When a
 * registered section is at least 40% in view, its theme name is written to
 * `data-theme` on <html>, and the CSS variables in globals.css cascade from
 * there — driving the scroll-morph.
 */
export function ScrollThemeProvider({ children }: { children: ReactNode }) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const themes = useRef<Map<Element, ThemeName>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            const theme = themes.current.get(entry.target);
            if (theme) {
              document.documentElement.setAttribute("data-theme", theme);
            }
          }
        }
      },
      { threshold: 0.4 },
    );
    observerRef.current = observer;

    // Child effects run before this parent effect, so sections may have
    // registered before the observer existed — pick them up now.
    themes.current.forEach((_theme, el) => observer.observe(el));

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, []);

  const register = useCallback((el: Element, theme: ThemeName) => {
    themes.current.set(el, theme);
    observerRef.current?.observe(el);
  }, []);

  const unregister = useCallback((el: Element) => {
    themes.current.delete(el);
    observerRef.current?.unobserve(el);
  }, []);

  return (
    <ScrollThemeContext.Provider value={{ register, unregister }}>
      {children}
    </ScrollThemeContext.Provider>
  );
}

/**
 * Section components call this with their theme name and spread the returned
 * ref onto their root <section>. The section then participates in the
 * scroll-driven theme switching.
 */
export function useThemeSection<T extends HTMLElement = HTMLElement>(
  theme: ThemeName,
): RefObject<T> {
  const ctx = useContext(ScrollThemeContext);
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !ctx) return;
    ctx.register(el, theme);
    return () => ctx.unregister(el);
  }, [ctx, theme]);

  return ref;
}
