import { IToolsTogether } from "@/types";
import Image from "next/image";

interface Props {
  toolsTogether: IToolsTogether;
}

const ToolTogether = ({ toolsTogether }: Props) => {
  const { title, image, features } = toolsTogether;

  return (
    <section className="gradient-color py-14 lg:py-28">
      <div className="container">
        <div className="flex flex-row-reverse flex-wrap mx-auto space-y-10 lg:space-y-0 items-center">
          <div className="lg:basis-[48%] basis-full">
            <div className="max-w-[420px] mx-auto pr-2">
              <Image width={412} height={395} src={image} alt="shared-img" />
            </div>
          </div>
          <div className="lg:basis-[52%] basis-full pl-2">
            <h1 className="section-title text-left">{title}</h1>
            <ul className="space-y-3 mt-[33px] max-w-[440px]">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-3 font-medium">
                  <div className="w-9 h-9 flex-none flex items-center justify-center rounded-full bg-[#EAEAEA]">
                    <Image
                      width={24}
                      height={24}
                      className="w-5 h-5"
                      src={feature.icon}
                      alt="icon"
                    />
                  </div>
                  <span>{feature.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolTogether;
