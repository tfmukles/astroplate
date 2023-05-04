interface Props {
  plartform: IPlartform;
}

import { IPlartform } from "@/types";
import Image from "next/image";

const Paltform = ({ plartform }: Props) => {
  const { title, desc, image, button } = plartform;

  return (
    <section className="pb-20">
      <div className="container">
        <div className="bg-[#F6F6F6] p-8 md:px-[80px] md:py-[50px] flex flex-wrap items-center space-y-10 lg:space-y-0">
          <div className="lg:basis-[60%] lg:max-w-[60%] w-full">
            <h1 className="section-title mb-3">{title}</h1>
            <p className="section-description mb-3">{desc}</p>

            <button className="hover:bg-white py-2 hover:text-black transition-all duration-300  bg-black text-white mt-4 border border-heading rounded capitalize px-4 font-medium">
              {button.label}
            </button>
          </div>

          <div className="lg:basis-[40] lg:max-w-[40%] w-full pl-3 text-center">
            <Image
              width={308}
              height={306}
              src={image}
              alt="paltform"
              className="m-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paltform;
