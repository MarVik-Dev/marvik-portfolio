import { AboutType } from "@/app/types/useProps";
import Image from "next/image";

export const aboutItems: AboutType[] = [
  {
    title: "Qui suis-je ?",
    description:
      "John Doe est un développeur passionné avec plus de 10 ans d'expérience dans le domaine de la programmation. Spécialisé dans le développement web et mobile, John a travaillé sur une variété de projets allant des applications de commerce électronique aux plateformes de réseaux sociaux. Il maîtrise plusieurs langages de programmation, notamment JavaScript, Python et Java, et est toujours à la recherche de nouvelles technologies pour améliorer ses compétences. John est également un fervent défenseur des pratiques de développement agile et de l'intégration continue, ce qui lui permet de livrer des produits de haute qualité de manière efficace. En dehors du travail, John aime explorer de nouveaux endroits, jouer de la guitare et participer à des hackathons pour rester à la pointe de l'innovation technologique..",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/about/tete1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="photo - 1"
        />
      </div>
    ),
  },
  {
    title: "Mes origines",
    description:
      "Au fil de mes années d'expérience dans le domaine de l'IT, j'ai eu l'opportunité d'occuper différents postes et d'acquérir des compétences techniques et humaines solides. Il y a trois ans, j'ai décidé de me spécialiser dans le développement JavaScript, car j'étais attiré par les nombreuses possibilités créatives qu'offre ce langage de programmation. Cette décision s'inscrivant dans la contiJane Smith a toujours été fascinée par la technologie et les ordinateurs depuis son plus jeune âge. À l'âge de 10 ans, elle a reçu son premier ordinateur et a rapidement commencé à explorer les possibilités infinies qu'il offrait. Inspirée par les jeux vidéo et les sites web qu'elle découvrait, Jane a commencé à apprendre les bases de la programmation en autodidacte. 🐠.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/about/tete2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Marvik photo - 2"
        />
      </div>
    ),
  },
  {
    title: "Mes objectifs",
    description:
      "Elle passait des heures à coder de petits programmes et à créer des pages web simples, ce qui a nourri sa passion pour le développement. Cette curiosité et cette détermination l'ont conduite à suivre des cours de programmation au lycée, où elle a découvert le langage Python. Cette expérience a renforcé son désir de poursuivre une carrière dans le développement logiciel. Aujourd'hui, Jane est une développeuse accomplie, toujours animée par cette même passion et cette même curiosité qui l'ont guidée dès le début.nuité de mon parcours professionnel et m'a permis de m'épanouir pleinement dans mon travail, même si avec autant de possibilités qu'offre le domaine de developpeur, j'ai parfois été tel un poisson dans l'eau qui, avale la tasse. Mais C’est ainsi que de projet en péripétie et de péripétie en projet, les fondations d'une stack JavaScript orientée TypeScript s’est dessinée. 💪🏻",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/about/tete3.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Marvik photo - 4"
        />
      </div>
    ),
  },
];

export const gridContactItems = [
  {
    id: 1,
    title: "Ma stack :",
    description: "Ma passion,",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center text-sm ",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "En un clique !",
    description: "Où que vous soyez !",
    className:
      "w-full flex items-center justify-between lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName:
      "justify-between items-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
