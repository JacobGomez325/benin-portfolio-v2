import { Category } from "~/types/categorie.type";
import type { Card } from "~/types/card.type";
import {
  FrontendTechnology,
  BackendTechnology,
  DesignTechnology,
  MobileTechnology,
  DevOpsTechnology,
  Web3Technology,
  DataTechnology,
  CybersecurityTechnology,
  CloudTechnology,
  SystemsTechnology,
} from "~/types/technologies.type";

import Link from "../components/icons/Link.vue";

export const usersDev: Card[] = [
  {
    name: "Gomez jacob",
    link: "https://www.linkedin.com/in/jacob-ambroise-david-gomez-989b151b9/",
    linkSlug: "jacobgomez.dev",
    tags: [Category.Frontend, Category.Backend, Category.DevOps],
    technology: [
      FrontendTechnology.HTML,
      FrontendTechnology.CSS,
      FrontendTechnology.TailwindCSS,
      FrontendTechnology.VueJS,
      FrontendTechnology.NuxtJS,
      BackendTechnology.NodeJS_AdonisJS,
      DevOpsTechnology.Docker,
    ],
    description:
      "FullStack js web developer, working with #vue, #nuxt #js #ts #adonis",
    socials: {
      twitter: "gojanda325",
      github: "jacobGomez325",
      linkedin: "jacob-ambroise-david-gomez-989b151b9",
    },
  },
  {
    name: "Jivaros GBETO",
    link: "https://www.linkedin.com/in/jivaros-gbeto/",
    linkSlug: "jivaros-gbeto.dev",
    tags: [
      Category.Frontend,
      Category.Backend,
      Category.DevOps,
      Category.Mobile,
    ],
    technology: [
      BackendTechnology.NodeJS_AdonisJS,
      BackendTechnology.NodeJS_NestJS,
      FrontendTechnology.VueJS,
      FrontendTechnology.ReactJS,
      DevOpsTechnology.Docker,
      MobileTechnology.Flutter,
    ],
    description:
      "Software developer and code lover(Node | Nest | Adonis | React | Vue | SQL | Docker | Flutter )",
    socials: {
      twitter: "JivarosG",
      github: "MrJIvaros",
      linkedin: "jjivaros-gbeto",
    },
  },
  {
    name: "Lionel K.",
    link: "open.kattis.com/users/kitihounel",
    linkSlug: "kitihounel.dev",
    tags: [Category.Backend],
    technology: [],
    description: "Fullstack  dev",
    socials: null,
  },
  {
    name: "Loïc HACHEME",
    link: "www.linkedin.com/in/loic-hacheme",
    linkSlug: "loic.dev",
    tags: [Category.Mobile, Category.Backend],
    technology: [
      MobileTechnology.Flutter,
      MobileTechnology.Java_Android,
      MobileTechnology.Kotlin_Android,
      BackendTechnology.Java_SpringBoot,

    ],
    description: "Backend and mobile developer, working with #java,#kotlin,#flutter",
    socials: {
      twitter: "spencer2k21",
      github: "spencer2k19",
      linkedin: "loic-hacheme",
    },
  },
  {
    name: "DEGNON Tobi",
    link: "https://oluwatobi.dev",
    linkSlug: "oluwatobi.dev",
    tags: [Category.Backend],
    description: "Software engineer working with #python, #django, #htmx and #postgresql",
    technology: [BackendTechnology.Python_Django, FrontendTechnology.HTMX, DataTechnology.PostgreSQL, DevOpsTechnology.Docker],
    socials: {
      twitter: "tobidegnon",
      github: "Tobi-De",
      linkedin: "",
    },
  },
  {
    name: "SAGBO Aimé",
    link: "https://www.linkedin.com/in/sagbo-aim%C3%A9-b72067171?trk=contact-info",
    linkSlug: "sagbo-aime.dev",
    tags: [Category.Frontend, Category.Backend, Category.Mobile],
    technology: [
      FrontendTechnology.ReactJS,
      FrontendTechnology.VueJS,
      BackendTechnology.NodeJS_NestJS,
      MobileTechnology.Flutter,
    ],
    description:
      "Fullstack Web Developper (Js/Ts/VueJs/Docker/MongoDB) & Mobile Developer (Flutter)",
    socials: {
      twitter: "",
      github: "Goldy98",
      linkedin: "sagbo-aimé-b72067171",
    },
  },
  {
    name: "AINON Rhétice",
    link: "https://www.linkedin.com/in/rh%C3%A9tice-ainon-849557196/",
    linkSlug: "rheticeainon.dev",
    tags: [Category.Frontend, Category.Backend, Category.Mobile],
    technology: [
      BackendTechnology.Python_Django,
      FrontendTechnology.ReactJS,
      BackendTechnology.PHP_Laravel,
      MobileTechnology.ReactNative,
    ],
    description:
      "FullStack web and mobile developer, working with #js #python #php, #react #reactnative #django #laravel",
    socials: {
      twitter: "RheticeAinon",
      github: "DRhetice",
      linkedin: "rhétice-ainon-849557196",
    },
  },
  {
    name: "Judicaël AHYI",
    link: "https://www.judicael-ahyi.com",
    linkSlug: "judicael-ahyi.com",
    tags: [
      Category.SWE,
      Category.Backend,
      Category.DevOps,
      Category.Cybersecurity,
    ],
    technology: [
      BackendTechnology.PHP_Laravel,
      BackendTechnology.Python,
      BackendTechnology.Python_Flask,
      BackendTechnology.NodeJS_Koa,
      BackendTechnology.NodeJS_Express,
      BackendTechnology.Java_SpringBoot,
      FrontendTechnology.HTML,
      FrontendTechnology.CSS,
      FrontendTechnology.TailwindCSS,
      DataTechnology.MySQL,
      DataTechnology.PostgreSQL,
      DataTechnology.MongoDB,
      DataTechnology.Redis,
      DevOpsTechnology.Docker,
      DevOpsTechnology.Terraform,
    ],
    description:
      "Software Engineer (#PHP #Laravel #Python #Java) & DevSecOps (Junior).",
    socials: {
      twitter: "JudicaelAhyi",
      github: "ludndev",
      linkedin: "judicael-ahyi",
    },
  },
  {
    name: "MEDEHOU Elikem",
    link: "https://www.linkedin.com/in/juniormedehou/",
    linkSlug: "elikemmedehou.com",
    tags: [Category.Mobile, Category.Backend, Category.DevOps],
    technology: [
      BackendTechnology.NodeJS_Express,
      FrontendTechnology.NextJS,
      BackendTechnology.NodeJS_Express,
      MobileTechnology.Flutter,
      DevOpsTechnology.Docker,
    ],
    description: "Flutter and Backend Developer",
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
    technology: [FrontendTechnology.ReactJS, FrontendTechnology.NextJS, FrontendTechnology.TailwindCSS],
    description: "Frontend Developer",
    socials: {
      twitter: "TairouT",
      github: "tcisse",
      linkedin: "taïrou-cissé-a67841281"
    }
  },
  {
    name: "DOSSEH Shalom",
    link: "https://www.linkedin.com/in/shalom-dosseh-4a484a262/",
    linkSlug: "dossehshalom.dev",
    tags: [Category.Data, Category.DevOps, Category.Web3],
    technology: [
      DevOpsTechnology.Docker,
      DataTechnology.Pandas,
      DataTechnology.NumPy,
      DataTechnology.ScikitLearn,
      DataTechnology.TensorFlow,
      DataTechnology.SQL,
      DevOpsTechnology.Git_versionControl,
      DevOpsTechnology.Jenkins,
      DevOpsTechnology.Ansible,
      DevOpsTechnology.Kubernetes,
      Web3Technology.Solidity,
    ],
    description: "Problem Solver and Data Driven Innovator",
    socials: {
      twitter: "",
      github: "AnalyticAce",
      linkedin: "shalom-dosseh-4a484a262",
    },
  },

  {
    name: "Loïc Farel",
    link: "http://loicfarel.netlify.app/",
    linkSlug: "loicfarel.dev",
    tags: [Category.Frontend, Category.Backend],
    technology: [
      FrontendTechnology.VueJS,
      FrontendTechnology.NuxtJS,
      FrontendTechnology.TailwindCSS,
    ],
    description:
      "Web Developer (Js/Ts/VueJs/NuxtJS/MongoDB). I build exceptional and accessible digital solutions for the web.",
    socials: {
      twitter: "loicfarel",
      github: "loicfarel",
      linkedin: "loicfarele",
    },
  },
  {
    name: "Freddy Agbona",
    link: "https://fredthedev.com",
    linkSlug: "fredthedev.com",
    tags: [
      Category.Frontend,
      Category.Backend,
      Category.DataTechnology,
      Category.DevOps,
    ],
    technology: [
      FrontendTechnology.HTML,
      FrontendTechnology.CSS,
      FrontendTechnology.Bootstrap,
      FrontendTechnology.TailwindCSS,
      FrontendTechnology.JavaScript,
      FrontendTechnology.VueJS,
      FrontendTechnology.NuxtJS,
      BackendTechnology.PHP,
      BackendTechnology.PHP_Laravel,
      BackendTechnology.Java_SpringBoot,
      DataTechnology.SQL,
      DataTechnology.MySQL,
      DataTechnology.PostgreSQL,
      DevOpsTechnology.Docker,
      DevOpsTechnology.Git_versionControl,
    ],
    description:
      "Software Developer who thrives on tackling stimulating challenges in web application design. My core strength lies in my problem-solving abilities and collaborative teamwork, allowing me to make substantial contributions to high-impact projects.My stacks are : Php, Java, Spring Boot, VueJS, Nuxt, Docker.",
    socials: {
      twitter: "fredthedev",
      github: "fredagbona",
      linkedin: "fredthedev",
    },
  },
  {
    name: "JOSIAS DADY Lauryne",
    link: "https://www.linkedin.com/in/lauryne-josias-dady-3a4b051b4/",
    linkSlug: "josiaslauryne.dev",
    tags: [Category.Frontend],
    technology: [
      FrontendTechnology.VueJS,
      FrontendTechnology.TailwindCSS,
      FrontendTechnology.HTML,
      FrontendTechnology.CSS,
    ],
    description:
      "Frontend web developer, working with #vuejs, and learning #react",
    socials: {
      twitter: "",
      github: "lauryne1",
      linkedin: "lauryne-josias-dady-3a4b051b4",
    },
  },
  {
    name: "Arnaud ADJOVI",
    link: "https://www.linkedin.com/in/arnaud-adjovi/",
    linkSlug: "arnaudadjovi.dev",
    tags: [
      Category.Frontend,
      Category.Backend,
      Category.DevOps,
      Category.Design,
    ],
    technology: [
      FrontendTechnology.HTML,
      FrontendTechnology.CSS,
      FrontendTechnology.JavaScript,
      FrontendTechnology.ReactJS,
      FrontendTechnology.JSX,
      BackendTechnology.PHP,
      BackendTechnology.PHP_Laravel,
      BackendTechnology.NodeJS_Express,

      DataTechnology.SQL,
      DataTechnology.MySQL,

      DevOpsTechnology.Git_versionControl,
    ],
    description: "FullStack web developer, working with #react #Laravel #PHP",
    socials: {
      twitter: "_aploon",
      github: "aploon",
      linkedin: "arnaud-adjovi",
    },
  },

  {
    name: "GAFFAN Renaud",
    link: "https://www.renaudhorace.tech",
    linkSlug: "renaudhorace.tech",
    tags: [Category.Mobile, Category.Frontend, Category.DevOps],
    technology: [FrontendTechnology.ReactJS, FrontendTechnology.NextJS, FrontendTechnology.Astro, FrontendTechnology.TailwindCSS, BackendTechnology.PHP_Laravel, BackendTechnology.PHP_Symfony, MobileTechnology.Flutter, DevOpsTechnology.Docker],
    description: "Flutter and Frontend Developer",
    socials: {
      twitter: "renaudhorace",
      github: "renaudhorace",
      linkedin: "renaud-horacio-gaffan-b73778193/",
    },
  },
  {
    name: "AHOUANSE Jean-Louis",
    link: "https://www.linkedin.com/in/jeanlouis-ahs/",
    linkSlug: "jeanlouisahs.dev",
    tags: [Category.SWE, Category.Frontend, Category.Backend],
    technology: [FrontendTechnology.Angular, FrontendTechnology.VueJS, FrontendTechnology.Astro, BackendTechnology.PHP_Symfony, BackendTechnology.Java_SpringBoot],
    description: "Software engineer",
    socials: {
      twitter: "JeanlouisAhs",
      github: "JeanlouisAhs",
      linkedin: "jeanlouis-ahs",
    },
  },
  {
    name: "Thomas BOKO",
    link: "https://www.linkedin.com/in/okobsamoht",
    linkSlug: "okobsamoht",
    tags: [Category.Frontend, Category.Backend, Category.Mobile, Category.Web3],
    technology: [
      FrontendTechnology.ReactJS,
      FrontendTechnology.Bootstrap,
      BackendTechnology.GoLang,
      BackendTechnology.NodeJS_Express,
      MobileTechnology.ReactNative,
      Web3Technology.Web3JS
    ],
    description:
      "",
    socials: {
      twitter: "okobsamoht",
      github: "okobsamoht",
      linkedin: "okobsamoht",
    },
  },
  {
    name: "VEGBA Lux",
    link: "https://bento.me/vegbalux",
    linkSlug: "vegbalux.dev",
    tags: [Category.Frontend, Category.Backend, Category.Mobile],
    technology: [
      FrontendTechnology.HTML,
      FrontendTechnology.CSS,
      FrontendTechnology.Bootstrap,
      FrontendTechnology.Javascript,
      FrontendTechnology.NextJS,
      BackendTechnology.PHP_Symfony,
      BackendTechnology.PHP,
      DesignTechnology.Figma,
      MobileTechnology.Flutter
    ],
    description:
      " I'm a Full Stack Developer based in Paris, France, passionate about crafting digital experiences ",
    socials: {
      twitter: "LuxVegba",
      github: "iimAtomic",
      linkedin: "vegbalux",
    },
  }
  {

    name: "Juliana OTENIA",
    link: "https://www.linkedin.com/in/juliana-otenia-7b0140236/",
    linkSlug: "dominiatrix.dev",
    tags: [Category.Frontend, Category.Design],
    technology: [
      FrontendTechnology.ReactJS,
      FrontendTechnology.Bootstrap,
      DesignTechnology.Figma,
    ],
    description:
      "Frontend web developer and UI/UX Designer, working with #react #js #ts #figma",
    socials: {
      twitter: "TrixDomini33551",
      github: "dominiatrix",
      linkedin: "juliana-otenia-7b0140236",
    }
  },
  {
    name: "Edouard HINVI",
    link: "https://www.linkedin.com/in/edouardhinvi",
    linkSlug: "edouardhinvi",
    tags: [Category.Frontend, Category.Backend, Category.DevOps, Category.Cloud],
    technology: [
      DevOpsTechnology.Docker,
      DevOpsTechnology.Ansible,
      DevOpsTechnology.Kubernetes,
      CloudTechnology.Openshift,
      SystemsTechnology.Linux_RedHat,
      DevOpsTechnology.Terraform,
      CloudTechnology.GCP,
      CloudTechnology.AWS,
      CloudTechnology.VMWare,
      CloudTechnology.BareMetal,
      CloudTechnology.OnPremises,
      FrontendTechnology.ReactJS,
      FrontendTechnology.Bootstrap,
      BackendTechnology.Python,
      BackendTechnology.Python_Flask,
      BackendTechnology.Python_FastAPI,
      MobileTechnology.ReactNative,
      BackendTechnology.NodeJS_Express,
    ],
    description:
      "Ingénieur DevOps @ Crédit Agricole Group Infrastructure Platform | Ansible, AAP, RedHat, Docker, Kubernetes, Openshift, AWS, Linux, Python, JS, ReactJS",
    socials: {
      twitter: "douardoInc",
      github: "edouardhinvi",
      linkedin: "edouardhinvi",
    },
  },
  {
    name: "Jonathan KPEYI",
    description: "Software Engineer from a perpective of who i want to be | Python, Javascript, Go, Scila",
    link: "https://www.linkedin.com/in/jonathan-kpeyi",
    linkSlug: "jonathan-kpeyi",
    tags: [Category.SWE, Category.Backend, Category.Web3],
    technology: [
      BackendTechnology.Python, BackendTechnology.GoLang, FrontendTechnology.JavaScript, "Scila"
    ],
    socials: {
      github: "jkpeyi",
      linkedin: "jonathan-kpeyi",
      twitter: "jkpeyi"
    }
  },
  {
    name: "Nathan GNANKADJA",
    link: "https://www.linkedin.com/in/nathan-gnankadja/",
    linkSlug: "Linkedin",
    tags: [Category.WordPress],
    technology: [FrontendTechnology.HTML, FrontendTechnology.CSS, FrontendTechnology.JS],
    description: "Web Developer",
    socials: {
      github: "nahtandev",
      linkedin: "nathan-gnankadja",
    },
  },
  {
  name: "Orphéric ALLAGBE",
  link: "https://orphericallagbe.carrd.co/",
  linkSlug: "orpheric_codeur",
  tags: [Category.Frontend, Category.Backend, Category.DevOps, Category.Cloud, Category.Data, Category.Technical_Writing],
  technology: [
    FrontendTechnology.HTML,
    FrontendTechnology.CSS,
    FrontendTechnology.TailwindCSS,
    FrontendTechnology.AlpineJS,
    BackendTechnology.PHP_Laravel,
    BackendTechnology.Laravel_Livewire,
    DevOpsTechnology.AWS,
    DevOpsTechnology.Kubernetes,
    DevOpsTechnology.Docker,
    DevOpsTechnology.Docker_Swarm,
    DevOpsTechnology.Docker_Compose,
    DevOpsTechnology.Serverless,
    DevOpsTechnology.IaaS,
    DevOpsTechnology.PaaS,
    DevOpsTechnology.Grafana,
    DevOpsTechnology.Ansible,
    DevOpsTechnology.Terraform,
  ],
  description: "FullStack Laravel Software Developer and Data Infrastructure Engineer.",
  socials: {
    twitter: "Orpheric_Codeur",
    github: "OrphericCodeur04",
    linkedin: "orpheric-allagbe-1863961b6",
  },
},

{
  name: "Marie-Christ SAGBO",
  link: "https://www.linkedin.com/in/marie-christ-sagbo/",
  linkSlug: "mariechrist-sagbo",
  tags: [Category.Frontend],
  technology: [FrontendTechnology.ReactJS, FrontendTechnology.NextJS, FrontendTechnology.TailwindCSS],
  description: "Frontend Developer",
  socials: {
    github: "mariechristsagbo",
    linkedin: "marie-christ-sagbo",
  },
},

];
