import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Timeline } from "@/components/timeline";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";
import { BgDecorations } from "@/components/bg-decorations";

export default function Home() {
  return (
    <>
      <BgDecorations />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Timeline />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
