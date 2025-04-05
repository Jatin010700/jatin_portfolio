import { DotPatternWithGlowEffectDemo } from "@/components/backgroundPattern";
import { BottomFooter } from "@/components/bottomFooter";
import { Education } from "@/components/education";
import { Experience } from "@/components/exp";
import { Header } from "@/components/header";
import { BentoDemo } from "@/components/project";
import { OrbitingCirclesDemo } from "@/components/skill";

export default function Home() {
  return (
    <>
      <Header/>
      <Experience/>
      <BentoDemo/>
      <Education/>
      <OrbitingCirclesDemo/>
      <BottomFooter/>
      <DotPatternWithGlowEffectDemo/>
    </>
  );
}
