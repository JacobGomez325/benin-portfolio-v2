import { Category } from '~/types/categorie.type'
import type { Card } from '~/types/card.type'
import {
  FrontendTechnology,
  BackendTechnology,
  DesignTechnology,
  MobileTechnology,
  DevOpsTechnology,
  Web3Technology,
  DataTechnology,
  CybersecurityTechnology
} from '~/types/technologies.type'



export const usersDev:Card[] = [
  {
    name: "Gomez jacob",
    link: "https://www.linkedin.com/in/jacob-ambroise-david-gomez-989b151b9/",
    linkSlug:"jacobgomez.dev",
    tags: [Category.Frontend, Category.Backend, Category.DevOps],
    technology:[FrontendTechnology.HTML,FrontendTechnology.CSS,FrontendTechnology.TailwindCSS,FrontendTechnology.VueJS,FrontendTechnology.NuxtJS, BackendTechnology.NodeJS_AdonisJS,DevOpsTechnology.Docker],
    description:"FullStack js web developer, working with #vue, #nuxt #js #ts #adonis",
    socials: {
      twitter: "gojanda325",
      github: "jacobGomez325",
      linkedin: "jacob-ambroise-david-gomez-989b151b9",
    },
  },
  {
    name: "Jivaros GBETO",
    link: "https://www.linkedin.com/in/jivaros-gbeto/",
    linkSlug:"jivaros-gbeto.dev",
    tags: [Category.Frontend, Category.Backend,Category.DevOps,Category.Mobile],
    technology:[BackendTechnology.NodeJS_AdonisJS,BackendTechnology.NodeJS_NestJS,FrontendTechnology.VueJS,FrontendTechnology.ReactJS,DevOpsTechnology.Docker,MobileTechnology.Flutter],
    description:"Software developer and code lover(Node | Nest | Adonis | React | Vue | SQL | Docker | Flutter )",
    socials: {
      twitter: "JivarosG",
      github: "MrJIvaros",
      linkedin: "jjivaros-gbeto",
    },
  },
  {
    name: "Lionel K.",
    link: "open.kattis.com/users/kitihounel",
    linkSlug:"kitihounel.dev",
    tags: [Category.Backend,],
    technology:[],
    description:"Fullstack  dev",
    socials: null,
  },
  {
    name: "DEGNON Tobi",
    link: "https://oluwatobi.dev",
    linkSlug:"oluwatobi.dev",
    tags: [Category.Frontend, Category.Backend,],
    description:"Software engineer working with #python, #django #htmx",
    technology:[BackendTechnology.Python_Django,FrontendTechnology.HTMX],
    socials: {
      twitter: "tobidegnon",
      github: "Tobi-De",
      linkedin: "",
    },
  },
  {
    name: "SAGBO Aimé",
    link: "https://www.linkedin.com/in/sagbo-aim%C3%A9-b72067171?trk=contact-info",
    linkSlug:"#",
    tags: [Category.Frontend, Category.Backend,Category.Mobile],
    technology:[FrontendTechnology.ReactJS,FrontendTechnology.VueJS,BackendTechnology.NodeJS_NestJS,MobileTechnology.Flutter],
    description:"Fullstack Web Developper (Js/Ts/VueJs/Docker/MongoDB) & Mobile Developer (Flutter)",
    socials: {
      twitter: "",
      github: "Goldy98",
      linkedin: "sagbo-aimé-b72067171",
    },
  },
  {
    name: "AINON Rhétice",
    link: "https://www.linkedin.com/in/rh%C3%A9tice-ainon-849557196/",
    linkSlug:"rheticeainon.dev",
    tags: [Category.Frontend, Category.Backend,Category.Mobile],
    technology:[BackendTechnology.Python_Django,FrontendTechnology.ReactJS,BackendTechnology.PHP_Laravel,MobileTechnology.ReactNative],
    description:"FullStack web and mobile developer, working with #js #python #php, #react #reactnative #django #laravel",
    socials: {
      twitter: "RheticeAinon",
      github: "DRhetice",
      linkedin: "rhétice-ainon-849557196",
    },
  },
  {
    name: "MEDEHOU Elikem",
    link: "https://www.linkedin.com/in/juniormedehou/",
    linkSlug:"elikemmedehou.com",
    tags: [Category.Mobile, Category.Backend,Category.DevOps],
    technology:[BackendTechnology.NodeJS_Express,FrontendTechnology.NextJS,BackendTechnology.NodeJS_Express,MobileTechnology.Flutter, DevOpsTechnology.Docker],
    description:"Flutter and Backend Developer",
    socials: {
      twitter: "elikemmedehou",
      github: "NemesisX1",
      linkedin: "juniormedehou",
    },
  },
  {
    name: "AMIDOU Cissé",
    link: "https://www.cissedev.com/",
    linkSlug: "cissedev.com",
    tags: [Category.Frontend],
    technology: [FrontendTechnology.ReactJS,FrontendTechnology.NextJS,FrontendTechnology.TailwindCSS],
    description: "Frontend Developer",
    socials: {
      twitter: "TairouT",
      github: "tcisse",
      linkedin: "taïrou-cissé-a67841281"
    }
  }

]


