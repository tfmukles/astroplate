import { fadeInLeft, fadeInRight } from "@/animate/animate";
import Banner from "@/components/banner";
import Paltform from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Testimonial from "@/components/testimonial";
import { getPageData } from "@/lib/contentParser";
import { IData } from "@/types";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import config from "../config/config.json";

interface Props {
  data: IData;
}

export default function Home({ data }: Props) {
  const { banner, plartform, testimonial, services } = data;

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>
      <Header />
      <Banner banner={banner} />
      {services.map((item, i) => {
        const { title, desc, image, features } = item || {};
        const isEven = (i + 1) % 2 === 0;
        return (
          <section
            key={i}
            className="gradient-color py-14 lg:py-24 overflow-hidden"
          >
            <div className="container">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-12 md:gap-x-6 md:place-items-center">
                <div
                  className={`md:col-span-5 lg:col-span-5 ${
                    isEven ? "order-3" : ""
                  }`}
                >
                  <motion.div
                    variants={fadeInLeft}
                    initial={"hidden"}
                    whileInView={"animate"}
                  >
                    <Image
                      width={520}
                      height={480}
                      src={image}
                      alt="shared-img"
                      className="sm:max-w-sm mx-auto md:max-w-full"
                    />
                  </motion.div>
                </div>
                <div className="hidden lg:block"></div>
                <motion.div
                  initial={"hidden"}
                  whileInView={"animate"}
                  className={`md:col-span-7 lg:col-span-6 flex flex-col justify-center px-2 ${
                    isEven ? "order-1" : ""
                  }`}
                >
                  <motion.h1 variants={fadeInRight} className="section-title">
                    {title}
                  </motion.h1>
                  {desc && (
                    <motion.p
                      variants={fadeInRight}
                      className="section-description"
                    >
                      {desc}
                    </motion.p>
                  )}

                  <motion.ul
                    transition={{ staggerChildren: 0.2 }}
                    initial={"hidden"}
                    whileInView={"animate"}
                    className="space-y-3 mt-7"
                  >
                    {features?.map((feature, i: number) => (
                      <motion.li
                        variants={fadeInRight}
                        key={i}
                        className="flex-none text-heading text-lg flex items-center space-x-4 md:space-x-3 font-medium"
                      >
                        <AiOutlineCheck className="w-5 h-5 flex-none text-gray" />
                        <span className="leading-7">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
      <Testimonial testimonial={testimonial} />
      <Paltform plartform={plartform} />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const homePage = await getPageData("content/index.md");
  return {
    props: { ...homePage },
  };
};
