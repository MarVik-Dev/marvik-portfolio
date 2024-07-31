import { PersonalDataType } from "@/app/types/useProps";

export const personalInfo: PersonalDataType = {
  name: "John Doe",
  nikname: "Jojo",
  born: 1999,
  email: "address@mail.fr",
  phone: "",
  address: "Ville, France",
  degree: "Master I",
  linkedin: "https://www.linkedin.com/in/lienDuProfil/",
  poste: (
    <p>
      TITRE <br /> du poste
    </p>
  ),
  introduction: (
    <p>
      Votre succès en ligne commence ici : développement web de qualité. <br />
      L'expertise et la passion pour le développement web vous aideront à
      transformer vos idées en réalité.
    </p>
  ),
};
