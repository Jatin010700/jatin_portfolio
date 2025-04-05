import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  techStack: ReactNode;
  background: ReactNode;
  Icon: ReactNode;
  description: string;
  href: string;
  href2: string;
  cta: string;
  cta2: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="mb-10 mx-5 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
        Check out <AuroraText>my latest</AuroraText> project
      </h1>
      <div
        className={cn(
          "grid md:w-3/4 mx-5 auto-rows-auto grid-cols-3 gap-4",
          className,
        )}
        {...props}>
        {children}
      </div>
    </div>
  );
};

const BentoCard = ({
  techStack,
  name,
  className,
  background,
  Icon,
  description,
  href,
  href2,
  cta,
  cta2,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-black/85 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="absolute left-5  bottom-10 group-hover:hidden flex gap-2 items-center transition-all duration-300 ease-in-out">
      <div>{Icon}</div>
      <h3 className="text-xl font-semibold text-white dark:text-neutral-300">
        {name}
      </h3>
    </div>
    <div
      className={cn(
        " pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-col items-start gap-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}>

    <div className="left-5 group-hover:left-0 bottom-10 group-hover:bottom-20 flex gap-2 items-center">
      <div>{Icon}</div>
      <h3 className="text-xl font-semibold text-white dark:text-neutral-300">
        {name}
      </h3>
    </div>

    <p className="max-w-lg text-neutral-300 md:block hidden">{description}</p>
    <div>{techStack}</div>

    <div className="flex gap-2 justify-between items-center">
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto rounded-full bg-black text-white">
        <a href={href}>
          {cta}
        </a>
      </Button>
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto rounded-full bg-black text-white">
        <a href={href2} className="flex justify-between items-center">
          <GitHubLogoIcon className="h-4 w-4" />
          {cta2}
        </a>
      </Button>
    </div>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
