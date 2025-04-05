import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { AuroraText } from "@/components/magicui/aurora-text";

export function Header() {
  return (
    <>
    <div className="flex flex-col justify-center items-center pt-20 mx-5">
      <h1 className="mb-2 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
        Hi, I'm <AuroraText>Jatin Oomajee</AuroraText>
      </h1>
      <p className="md:w-2/4">
      Passionate Front-End/FullStack developer. I have independently pursued learning opportunities to enhance my capabilities in IT and development. 
      I am a fast learner, detail-oriented, and adaptable, with a genuine desire to contribute to any organization through hard work and perseverance.
      I am eager to learn and grow in new technologies.
      </p>
      <a href="/CV_2025.pdf" target="_blank" className="rounded-full mt-2">
        <InteractiveHoverButton>Resume</InteractiveHoverButton>
      </a>
    </div>
    </>
  )
}