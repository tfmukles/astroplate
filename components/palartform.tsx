import { motion } from "framer-motion";

interface Props {
  plartform: IPlartform;
}

import { fadeInLeft, fadeInRight } from "@/animate/animate";
import { IPlartform } from "@/types";
import Image from "next/image";

const Paltform = ({ plartform }: Props) => {
  const { title, desc, image, button } = plartform;

  return (
    <section className="pb-6 lg:pb-20  overflow-hidden">
      <div className="container">
        <motion.div
          initial={"hidden"}
          whileInView={"animate"}
          className="bg-[#F6F6F6] space-y-12 lg:space-y-0 lg:gap-x-8 rounded-md lg:rounded-2xl lg:grid grid-cols-12 p-12 lg:py-12 lg:px-[98px]"
        >
          <motion.div
            variants={fadeInLeft}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h1 className="section-title mb-2">{title}</h1>
            <p className="section-description mb-3">{desc}</p>
            <button className="hover:bg-white w-[183px] mr-auto py-2 hover:text-black transition-all duration-300  bg-heading text-white mt-4 border border-heading rounded-md capitalize px-4 font-medium">
              {button.label}
            </button>
          </motion.div>

          <motion.div variants={fadeInRight} className="lg:col-span-5">
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

export default Paltform;
