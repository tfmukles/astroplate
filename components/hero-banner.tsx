import { IHeroBanner } from "@/types";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  heroBanner: IHeroBanner;
}

const HeroBanner = ({ heroBanner }: Props) => {
  const { button, content, title, image } = heroBanner;

  return (
    <section
      id="hero-banner"
      className="pt-[60px] pb-[45px] sm:pb-[80px] lg:pb-[109px]"
    >
      <div className="container">
        <div>
          <div className="max-w-[623px] text-center mx-auto">
            <h1 className="section-title md:text-[50px] md:leading-[60px] lg:text-[64px] mb-4 text-center">
              {title}
            </h1>
            <p className="section-description mb-[26px]">{content}</p>

            <button className="border border-heading rounded capitalize px-6 py-3 font-medium font-pera flex mx-auto bg-black text-white items-center">
              {button?.label}
              <BsArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className="mt-[50px]">
            <figure>
              <Image
                width={960}
                height={305}
                className="max-w-[100%] mx-auto"
                src={image}
                alt="banner"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
