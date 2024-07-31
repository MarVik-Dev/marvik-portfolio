import { EmblaOptionsType } from "embla-carousel";

// export type UseThemeProps = {
//   theme: string | undefined;
//   toggleTheme: () => void;
// };

export type UseThemeProviderProps = {
  children: React.ReactNode;
  attribute: string;
  defaultTheme: string;
  enableSystem: boolean;
  disableTransitionOnChange: boolean;
};

export type ItemsType = {
  items: {
    quote?: string;
    name?: string | undefined;
    title?: string;
    item?: string;
    logo?: string;
    picture?: string;
    alt?: string;
    url?: string;
  }[];
  title?: string;
  className?: string;
  options?: EmblaOptionsType;
};

export type ItemType = {
  quote?: string;
  name: string;
  title: string;
  logo?: string;
  picture?: string;
  url?: string;
};

export type ToolType = {
  id: number;
  name: string;
  url: string;
  title?: string;
  category?: string;
};

export type NavType = { name: string; link: string };

export type AboutType = {
  title: string;
  description: string;
  content: React.ReactNode; // Can be a React component or a string (change FAQ-DATAS type to string if you don"t want to use a <p> tag)
};

export type FAQType = {
  question: string;
  answer: React.ReactNode; // Can be a React component or a string (change FAQ-DATAS type to string if you don"t want to use a <p> tag)
};

export type PersonalDataType = {
  poste: React.ReactNode;
  introduction: React.ReactNode;
  name: string;
  nikname: string;
  born: number;
  email: string;
  phone: string;
  address: string;
  degree: string;
  linkedin: string;
};

export type ProjectType = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
};

export type SpecialityType = {
  description: React.ReactNode;
  domains: SpecialityDomain[];
};
type SpecialityDomain = {
  title: string;
  description: string;
  color: string;
};