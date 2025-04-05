"use client"

import { AuroraText } from "@/components/magicui/aurora-text";
import { useEffect, useState } from "react";

export function BottomFooter() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    useEffect(() => {
        const updateYear = () => {
            setCurrentYear(new Date().getFullYear())
        }

        updateYear()

        const interValid = setInterval(updateYear, 1000)

        return () => clearInterval(interValid)
    }, [])

  return (
    <>
    <div className="flex flex-col mt-10 mx-5 pb-20">
      <div className="flex flex-col justify-center items-center w-full">
       <h1 className="mb-2 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
        Get in <AuroraText>Touch!</AuroraText>
      </h1>
      <p className="text-center md:!w-1/2">
        Want to chat? Just shoot me a DM on LinkedIn.
        You can also email me at <AuroraText>jatin.oomajee41@gmail.com</AuroraText>.
      </p>

      <p className="text-center md:!w-1/2">
        All rights reserved by Jatin Oomajee ©{currentYear}.
      </p>
      </div>
    </div>
    </>
  )
}