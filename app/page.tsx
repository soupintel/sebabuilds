import { ScrollThemeProvider } from "@/components/ScrollTheme";
import Hero from "@/components/sections/Hero";
import WorkMilo from "@/components/sections/WorkMilo";
import WorkASAP from "@/components/sections/WorkASAP";
import WorkDulce from "@/components/sections/WorkDulce";
import Services from "@/components/sections/Services";
import BookCall from "@/components/sections/BookCall";

export default function Home() {
  return (
    <ScrollThemeProvider>
      <main>
        <Hero />
        <WorkMilo />
        <WorkASAP />
        <WorkDulce />
        <Services />
        <BookCall />
      </main>
    </ScrollThemeProvider>
  );
}
