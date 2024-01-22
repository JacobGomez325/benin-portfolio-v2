type Tags = {
  name:string
}

type Socials = {
  twitter:  string,
  github:   string,
  linkedin: string,
}

export type Card = {
  name:string,
  link:string,
  linkSlug:string,
  socials:Socials,
  description:string,
  tags: string[]
}

