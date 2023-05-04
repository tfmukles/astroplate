import { fadeInLeft, fadeInRight } from "@/animate/animate";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import Paltform from "@/components/palartform";
import RecentCustomer from "@/components/recent-customer";
import { getPageData } from "@/lib/contentParser";
import { IData } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";

interface Props {
  data: IData;
}

export default function Home({ data }: Props) {
  const { heroBanner, plartform, recentCustomer, componetList } = data;

  return (
    <>
      <Header />
      <HeroBanner heroBanner={heroBanner} />
      {componetList.map(({ component }: any, i: number) => {
        const { title, desc, image, features } = component || {};
        const isEven = (i + 1) % 2 === 0;
        return (
          <section
            key={i}
            className="gradient-color py-14 lg:py-24 overflow-hidden"
          >
            <div className="container">
              <div className="grid gap-y-10 place-content-center grid-cols-12 lg:gap-20">
                <div
                  className={`lg:col-span-5 col-span-12 ${
                    isEven ? "order-2" : ""
                  }`}
                >
                  <motion.div
                    variants={fadeInLeft}
                    initial={"hidden"}
                    whileInView={"animate"}
                  >
                    <Image
                      layout="responsive"
                      width={500}
                      height={400}
                      src={image}
                      alt="shared-img"
                      className="max-w-[430px] lg:max-w-full mx-auto"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={"hidden"}
                  whileInView={"animate"}
                  className={`lg:col-span-7 col-span-12 ${
                    isEven ? "order-1" : ""
                  }`}
                >
                  <motion.h1
                    variants={fadeInRight}
                    className="section-title text-left"
                  >
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
                    transition={{ staggerChildren: 0.5 }}
                    initial={"hidden"}
                    whileInView={"animate"}
                    className="space-y-3 mt-[33px]"
                  >
                    {features?.map((feature: any, i: number) => (
                      <motion.li
                        variants={fadeInRight}
                        key={i}
                        className="flex-none flex items-center space-x-4 md:space-x-3 font-medium"
                      >
                        <AiOutlineCheck className="w-5 h-5 flex-none" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      <RecentCustomer recentCustomer={recentCustomer} />
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
