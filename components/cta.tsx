import { motion } from "framer-motion";

interface Props {
  cta: ICta;
}

import { fadeInLeft, fadeInRight } from "@/animate/animate";
import { ICta } from "@/types";
import Image from "next/image";

const CTA = ({ cta }: Props) => {
  const { title, desc, image, button } = cta;

  return (
    <section className="pb-6 lg:pb-20 overflow-hidden mt-26">
      <div className="container">
        <motion.div
          initial={"hidden"}
          whileInView={"animate"}
          className="bg-[#F6F6F6] lg:gap-x-8 rounded-md lg:rounded-2xl grid grid-cols-12 p-12 lg:py-12 lg:px-[98px]"
        >
          <motion.div
            variants={fadeInLeft}
            className="max-lg:order-2 col-span-full lg:col-span-7 flex flex-col justify-center"
          >
            <h1 className="section-title mb-2">{title}</h1>
            <p className="section-description mb-3">{desc}</p>
            <button className="hover:bg-white w-[183px] mr-auto py-2 hover:text-black transition-all duration-300  bg-heading text-white mt-4 border border-heading rounded-md capitalize px-4 font-medium">
              {button.label}
            </button>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="max-lg:order-1 max-lg:mb-12 col-span-full lg:col-span-5"
          >
            <Image
              width={392}
              height={390}
              src={image}
              className="mx-auto lg:ml-auto"
              alt="paltform"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
