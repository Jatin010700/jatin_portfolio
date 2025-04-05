import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Experience() {
  return (
    <>
    <div className="flex flex-col  mt-10 w-auto mx-5">
      <div className="flex flex-col justify-center items-start md:items-center w-full">
        <Accordion type="single" collapsible  className="md:!w-1/2">
        <h2 className="mb-5 font-bold tracking-tighter text-2xl">Work Experience</h2>
          <AccordionItem value="item-1">
            <AccordionTrigger className="relative">
              <div className="flex flex-col">
                <h3 className="text-lg">Wshop Cloud Commerce LTD</h3>
                <p>Front End Web Developer
                  <br/>
                <span className="text-neutral-400 md:hidden">April 2024 - November 2024</span>
                </p>
              </div>
              <span className="absolute right-0 hidden md:block text-neutral-400">April 2024 - November 2024</span>
              </AccordionTrigger>
            <AccordionContent>
              Scss, Jquery, Jira, Sourcetree, Figma, Gitlab, Bitbucket, Gulp, PHP and Twig
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
    </>
  )

}