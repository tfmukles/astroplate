import { fadeInUp } from "@/animate/animate";
import { IHeroBanner } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  heroBanner: IHeroBanner;
}

const HeroBanner = ({ heroBanner }: Props) => {
  const { button, content, title, image } = heroBanner;

  return (
    <section className="pt-[60px] pb-[45px] sm:pb-[80px] lg:pb-[109px]">
      <div className="container">
        <motion.div
          initial={"hidden"}
          whileInView={"animate"}
          transition={{ staggerChildren: 0.3 }}
          className="max-w-[623px] text-center mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="section-title md:text-[50px] md:leading-[60px] lg:text-[64px] mb-4 text-center"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="section-description mb-[26px]"
          >
            {content}
          </motion.p>

          <motion.button
            variants={fadeInUp}
            className="border border-heading rounded capitalize px-6 py-3 font-medium font-pera flex mx-auto bg-black text-white items-center"
          >
            {button?.label}
            <BsArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial={"hidden"}
          whileInView={"animate"}
          className="mt-[50px]"
        >
          <Image
            width={960}
            height={305}
            className="max-w-[100%] mx-auto"
            src={image}
            alt="banner"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
