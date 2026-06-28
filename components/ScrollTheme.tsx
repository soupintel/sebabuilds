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

export function ScrollThemeProvider({ children }: { children: ReactNode }) {
  const sections = useRef<Map<Element, ThemeName>>(new Map());
  const rafId = useRef<number | null>(null);

  const applyTheme = useCallback(() => {
    const mid = window.innerHeight / 2;
    let closest: ThemeName | null = null;
    let closestDist = Infinity;

    sections.current.forEach((theme, el) => {
      const rect = el.getBoundingClientRect();
      const sectionMid = rect.top + rect.height / 2;
      const dist = Math.abs(sectionMid - mid);
      if (dist < closestDist) {
        closestDist = dist;
        closest = theme;
      }
    });

    if (closest) document.documentElement.setAttribute("data-theme", closest);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        applyTheme();
        rafId.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    applyTheme();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [applyTheme]);

  const register = useCallback(
    (el: Element, theme: ThemeName) => {
      sections.current.set(el, theme);
      applyTheme();
    },
    [applyTheme],
  );

  const unregister = useCallback((el: Element) => {
    sections.current.delete(el);
  }, []);

  return (
    <ScrollThemeContext.Provider value={{ register, unregister }}>
      {children}
    </ScrollThemeContext.Provider>
  );
}

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
