import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Education() {
  return (
    <>
    <div className="flex flex-col  mt-10 w-auto mx-5">
      <div className="flex flex-col justify-center items-start md:items-center w-full">
        <Accordion type="single" collapsible  className="md:!w-1/2">
        <h2 className="mb-5 font-bold tracking-tighter text-2xl">Education</h2>
          <AccordionItem value="item-1">
            <AccordionTrigger className="relative">
              <div className="flex flex-col">
                <h3 className="text-lg">Developers Institute Mauritius</h3>
                <p>FullStack Developer
                  <br/><span className="text-neutral-400 md:hidden">April 2023</span>
                </p>
              </div>
              <span className="absolute right-0 hidden md:block text-neutral-400">April 2023</span>
              </AccordionTrigger>
            <AccordionContent>
              HTML, CSS, JS, Databases(PostgreSQl), Node.JS, Git, Express, Npm. React, Redux, VsCode, GitHub
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="relative">
              <div className="flex flex-col">
                <h3 className="text-lg">HRDC course at UOM</h3>
                <p>Design and Multimedia with 3D
                  <br/><span className="text-neutral-400 md:hidden">September 2021 - December 2021</span>
                </p>
              </div>
              <span className="absolute right-0 hidden md:block text-neutral-400">September 2021 - December 2021</span>
              </AccordionTrigger>
              <AccordionContent>
                Web development, Autodesk Maya 3D, Adobe illustrator, photoshop, after effect and dreamweaver
              </AccordionContent>
          </AccordionItem>

            <div className="relative flex items-center justify-between w-full py-4">
              <div className="flex flex-col">

                <h3 className="text-lg font-[500]">Sir Abdool Raman Osman State College (SARO)</h3>
                <p className="text-neutral-400 md:hidden text-[14px] font-[500]">2012 - 2017</p>
              </div>
                <span className="absolute right-0 hidden md:block text-neutral-400  text-[14px] font-[500]">2012 - 2017</span>
            </div>
        </Accordion>
      </div>
    </div>
    </>
  )

}