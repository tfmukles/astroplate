import { ISharedEmail } from "@/types";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";

interface Props {
  sharedEmail: ISharedEmail;
}

const SharedEmail = ({ sharedEmail }: Props) => {
  const { desc, features, image, title } = sharedEmail;

  return (
    <section id="shared-inbox" className="gradient-color py-14 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap max-w-[1200px] mx-auto space-y-10 lg:space-y-0">
          <div className="lg:basis-[50%] lg:max-w-[50%] basis-full">
            <div className="max-w-[400px] mx-auto pr-2">
              <Image width={392} height={319} src={image} alt="shared-img" />
            </div>
          </div>
          <div className="lg:basis-[50%] lg:max-w-[50%] basis-full pl-2">
            <h1 className="section-title text-left">{title}</h1>
            <p className="section-description">{desc}</p>

            <ul className="space-y-3 mt-[33px]">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3 font-medium">
                  <AiOutlineCheck className="" />
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

export default SharedEmail;
