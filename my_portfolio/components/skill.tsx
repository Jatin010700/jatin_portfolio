import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import getHTML from "../public/techStack/HTML.svg"
import getCSS from "../public/techStack/CSS.svg"
import getSASS from "../public/techStack/SASS.svg"
import getTAILWINDCSS from "../public/techStack/TAILWINDCSS.svg"
import getJQUERY from "../public/techStack/JQUERY.svg"
import getJAVASCRIPT from "../public/techStack/JAVASCRIPT.svg"
import getTYPESCRIPT from "../public/techStack/TYPESCRIPT.svg"
import getPYTHON from "../public/techStack/PYTHON.svg"
import getAXIOS from "../public/techStack/AXIOS.svg"
import getNODEJS from "../public/techStack/NODEJS.svg"
import getEXPRESS from "../public/techStack/EXPRESS.svg"
import getJWT from "../public/techStack/JWT.svg"
import getPOSTGRESQL from "../public/techStack/POSTGRESQL.svg"
import getMONGODB from "../public/techStack/MONGODB.svg"
import getFIREBASE from "../public/techStack/FIREBASE.svg"
import getPRISMA from "../public/techStack/PRISMA.svg"
import getVITE from "../public/techStack/VITE.svg"
import getREACT from "../public/techStack/REACT.svg"
import getNEXTJS from "../public/techStack/NEXTJS.svg"
import getVUE from "../public/techStack/VUE.svg"
import getREDUX from "../public/techStack/REDUX.svg"
import getPINIA from "../public/techStack/PINIA.svg"
import getVSCODE from "../public/techStack/VSCODE.svg"
import getGIT from "../public/techStack/GIT.svg"
import getGITHUB from "../public/techStack/GITHUB.svg"
import getGITLAB from "../public/techStack/GITLAB.svg"
import getSOURCETREE from "../public/techStack/SOURCETREE.svg"
import getVERCEL from "../public/techStack/VERCEL.svg"
import getRENDER1 from "../public/techStack/RENDER1.svg"
import getMAGICUI from "../public/techStack/MAGICUI.svg"


export function OrbitingCirclesDemo() {
  return (
    <>
    <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden">
      <h1 className="mb-2 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
        <AuroraText>Tech Stack</AuroraText>
      </h1>
      <OrbitingCircles iconSize={40} speed={0.5}>
        <Icons.gitHub />
        <Icons.magicUi />
        <Icons.gitlab />
        <Icons.openai />
        <Icons.react />
        <Icons.redux />
        <Icons.vite />
        <Icons.nextJS />
        <Icons.vue />
        <Icons.pinia />
      </OrbitingCircles>

      <OrbitingCircles iconSize={40}  radius={200} reverse speed={1}>
        <Icons.postgreSQL />
        <Icons.firebase />
        <Icons.mongoDB />
        <Icons.prisma />
        <Icons.git />
        <Icons.nodeJS />
        <Icons.expressJS />
        <Icons.JWT />
        <Icons.sourcetree />
      </OrbitingCircles>

      <OrbitingCircles iconSize={40} radius={150}>
        <Icons.jquery />
        <Icons.javascript />
        <Icons.typescript />
        <Icons.python />
        <Icons.VScode />
        <Icons.axios />
      </OrbitingCircles>

      <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
        <Icons.html />
        <Icons.css />
        <Icons.scss />
        <Icons.tailwind />
      </OrbitingCircles>
    </div>

    <div className="flex flex-col  mt-10 w-auto mx-5">
      <div className="flex flex-col justify-center items-start md:items-center w-full">
        <div className="md:!w-1/2">
        <h2 className="mb-5 font-bold tracking-tighter text-2xl">Skills</h2>
            <div className="relative flex items-center justify-between w-full py-4">
              <div className="flex gap-1 flex-wrap">
                <Badge className="rounded-full">PHP</Badge>
                <Badge className="rounded-full">Twig</Badge>
                <Badge className="rounded-full">Bootstrap</Badge>
                <Badge className="rounded-full">Vuetify</Badge>
                <Badge className="rounded-full">Shadcn</Badge>
                <Badge className="rounded-full">Jira</Badge>
                <Badge className="rounded-full">Xano</Badge>
                <Badge className="rounded-full">Weweb</Badge>
                <Badge className="rounded-full">figma</Badge>
                <Badge className="rounded-full">Flask</Badge>
                <Badge className="rounded-full">Bitbucket</Badge>
                <Badge className="rounded-full">Gulp </Badge>
                <Badge className="rounded-full">Problem solving</Badge>
                <Badge className="rounded-full">Hard Working</Badge>
                <Badge className="rounded-full">Time Management</Badge>
                <Badge className="rounded-full">Fast Learner</Badge>
                <Badge className="rounded-full">Attention to detail</Badge>
                <Badge className="rounded-full">Creative</Badge>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

const Icons = {
  html: () => (
    <Image src={getHTML} alt="" width={50} height={50}/>
  ),
  css: () => (
    <Image src={getCSS} alt="" width={50} height={50}/>
  ),
  tailwind: () => (
    <Image src={getTAILWINDCSS} alt="" width={50} height={50}/>
  ),
  scss: () => (
    <Image src={getSASS} alt="" width={50} height={50}/>
  ),
  jquery: () => (
    <Image src={getJQUERY} alt="" width={50} height={50}/>
  ),
  javascript: () => (
    <Image src={getJAVASCRIPT} alt="" width={50} height={50}/>
  ),
  typescript: () => (
    <Image src={getTYPESCRIPT} alt="" width={50} height={50}/>
  ),
  python: () => (
    <Image src={getPYTHON} alt="" width={50} height={50}/>
  ),
  axios: () => (
    <Image src={getAXIOS} alt="" width={50} height={50}/>
  ),
  nodeJS: () => (
    <Image src={getNODEJS} alt="" width={50} height={50}/>
  ),
  expressJS: () => (
    <Image src={getEXPRESS} alt="" width={50} height={50}/>
  ),
  JWT: () => (
    <Image src={getJWT} alt="" width={50} height={50}/>
  ),
  postgreSQL: () => (
    <Image src={getPOSTGRESQL} alt="" width={50} height={50}/>
  ),
  mongoDB: () => (
    <Image src={getMONGODB} alt="" width={50} height={50}/>
  ),
  firebase: () => (
    <Image src={getFIREBASE} alt="" width={50} height={50}/>
  ),
  prisma: () => (
    <Image src={getPRISMA} alt="" width={50} height={50}/>
  ),
  react: () => (
    <Image src={getREACT} alt="" width={50} height={50}/>
  ),
  nextJS: () => (
    <Image src={getNEXTJS} alt="" width={50} height={50}/>
  ),
  vue: () => (
    <Image src={getVUE} alt="" width={50} height={50}/>
  ),
  vite: () => (
    <Image src={getVITE} alt="" width={50} height={50}/>
  ),
  redux: () => (
    <Image src={getREDUX} alt="" width={50} height={50}/>
  ),
  pinia: () => (
    <Image src={getPINIA} alt="" width={50} height={50}/>
  ),
  VScode: () => (
    <Image src={getVSCODE} alt="" width={50} height={50}/>
  ),
  git: () => (
    <Image src={getGIT} alt="" width={50} height={50}/>
  ),
  gitHub: () => (
    <Image src={getGITHUB} alt="" width={50} height={50}/>
  ),
  gitlab: () => (
    <Image src={getGITLAB} alt="" width={50} height={50}/>
  ),
  sourcetree: () => (
    <Image src={getSOURCETREE} alt="" width={50} height={50}/>
  ),
  vercel: () => (
    <Image src={getVERCEL} alt="" width={50} height={50}/>
  ),
  render: () => (
    <Image src={getRENDER1} alt="" width={50} height={50}/>
  ),
  magicUi: () => (
    <Image src={getMAGICUI} alt="" width={50} height={50}/>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-black dark:fill-white"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
};
