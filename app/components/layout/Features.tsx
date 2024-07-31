import Feature from "./Feature";
import { specialityItems } from "@/app/data/personal/specialityItems";

type Props = {};

const Features = (props: Props) => {
  return (
    <div
      id="features"
      className=" bg-gradient-to-b from-[#5D2CA8] to-transparent py-24 "
    >
      <div className="container">
        <h2 className="text-center text-white font-bold text-3xl sm:text-4xl tracking-tighter ">
          C&apos;est quoi,
        </h2>
        <h2 className="text-center text-white font-bold text-5xl sm:text-6xl tracking-tighter ">
          Développeur ?
        </h2>
        <div className="max-w-2xl mx-auto">{specialityItems.description}</div>

        <div className="mt-16 flex flex-col lg:grid lg:grid-cols-3 gap-4 ">
          {specialityItems.domains.map(
            (domain: {
              title: string;
              description: any;
              color: string | undefined;
            }) => (
              <Feature key={domain.title} domain={domain} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;
