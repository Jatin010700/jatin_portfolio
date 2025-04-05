import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Badge } from "@/components/ui/badge"

import getNote from "../public/note.png"
import getCarRental from "../public/carRental.png"
import getPortfolio from "../public/portfolio.png"
import getOnlineShop from "../public/onlineShop.png"
import getVercel from "../app/favicon.ico"
import getVue from "../public/vue.svg"

const features = [
  {
    Icon: (
      <Image src={getVercel} alt="" width={25} height={25} className="hidden"/>
    ),
    name: "Create Note",
    description: "To save your note or use as reminder. Note: It uses local storage, please delete notes before closing!",
    techStack: (
      <div className=" md:flex hidden gap-1 flex-wrap">
        <Badge className="rounded-full">Html</Badge>
        <Badge className="rounded-full">Css</Badge>
        <Badge className="rounded-full">Jquery</Badge>
      </div>
    ),
    href: "https://note-app-klky.onrender.com/",
    href2: "https://github.com/Jatin010700",
    cta: "Website",
    cta2: "Source",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex h-[110%] items-center justify-center overflow-hidden">
        <Image src={getNote} alt="Create Note Preview" className="group-hover:scale-150 scale-[0.9] rounded-xl transition-all duration-300 ease-in-out object-contain max-h-full" />
      </div>
    ),
  },
  {
    Icon: (
      <Image src={getVercel} alt="" width={25} height={25}/>
    ),
    name: "Car Rental",
    techStack: (
      <div className=" md:flex hidden gap-1 flex-wrap">
        <Badge className="rounded-full">Vite</Badge>
        <Badge className="rounded-full">React.js</Badge>
        <Badge className="rounded-full">Tailwind</Badge>
        <Badge className="rounded-full">Scss</Badge>
        <Badge className="rounded-full">Javascript</Badge>
        <Badge className="rounded-full">Redux</Badge>
        <Badge className="rounded-full">Typescript</Badge>
        <Badge className="rounded-full">Node.js</Badge>
        <Badge className="rounded-full">Express.js</Badge>
        <Badge className="rounded-full">Firebase</Badge>
        <Badge className="rounded-full">Jwt</Badge>
      </div>
    ),
    description: "Rent a car or put your own car for rent.",
    href: "https://car-rental-20.vercel.app/",
    href2: "https://github.com/Jatin010700/car-rental-2.0",
    cta: "Website",
    cta2: "Source",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image src={getCarRental} alt="" className="group-hover:scale-105 transition-all duration-300 ease-in-out"/>
    ),
  },
  {
    Icon: (
      <Image src={getVue} alt="" width={25} height={25}/>
    ),
    name: "Online Shop",
    description: "A simple E-commerce website. Still work in progress",
    techStack: (
      <div className=" md:flex hidden gap-1 flex-wrap">
        <Badge className="rounded-full">Vite</Badge>
        <Badge className="rounded-full">Vue</Badge>
        <Badge className="rounded-full">Scss</Badge>
        <Badge className="rounded-full">Javascript</Badge>
        <Badge className="rounded-full">Pinia</Badge>
        <Badge className="rounded-full">Typescript</Badge>
        <Badge className="rounded-full">Node.js</Badge>
        <Badge className="rounded-full">Express.js</Badge>
        <Badge className="rounded-full">MongoDb</Badge>
        <Badge className="rounded-full">Prisma</Badge>
      </div>
    ),
    href: "https://online-shop-olive-zeta.vercel.app/",
    href2: "https://github.com/Jatin010700/Online-shop",
    cta: "Website",
    cta2: "Source",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image src={getOnlineShop} alt="" className="group-hover:scale-105 transition-all duration-300 ease-in-out"/>
    ),
  },
  {
    Icon: (
      <Image src={getVercel} alt="" width={25} height={25}/>
    ),
    name: "Portfolio",
    description: "",
    techStack: (
      <div className="md:flex hidden gap-1 flex-wrap">
        <Badge className="rounded-full">Next.js</Badge>
        <Badge className="rounded-full">Tailwind</Badge>
        <Badge className="rounded-full">Typescript</Badge>
        <Badge className="rounded-full">Shadcn</Badge>
        <Badge className="rounded-full">MagicUI</Badge>
      </div>
    ),
    className: "col-span-3 lg:col-span-1",
    href: "#",
    href2: "https://github.com/Jatin010700/portfolio",
    cta: "Website",
    cta2: "Source",
    background: (
      <div className="flex h-[110%] items-center justify-center overflow-hidden">
        <Image src={getPortfolio} alt="" className="group-hover:scale-110 scale-[0.9] rounded-xl transition-all duration-300 ease-in-out object-contain max-h-full" />
      </div>
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
