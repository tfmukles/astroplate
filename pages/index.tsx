import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import Paltform from "@/components/palartform";
import RecentCustomer from "@/components/recent-customer";
import { getPageData } from "@/lib/contentParser";
import { IData } from "@/types";
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
          <section key={i} className="gradient-color py-14 lg:py-24">
            <div className="container">
              <div className="grid gap-y-10 lg:gap-20 place-content-center grid-cols-12 lg:gap-20">
                <div
                  className={`lg:col-span-5 col-span-12 ${
                    isEven ? "order-2" : ""
                  }`}
                >
                  <div>
                    <Image
                      layout="responsive"
                      width={500}
                      height={400}
                      src={image}
                      alt="shared-img"
                      className="max-w-[430px] lg:max-w-full mx-auto"
                    />
                  </div>
                </div>
                <div
                  className={`lg:col-span-7 col-span-12 ${
                    isEven ? "order-1" : ""
                  }`}
                >
                  <h1 className="section-title text-left">{title}</h1>
                  {desc && <p className="section-description">{desc}</p>}

                  <ul className="space-y-3 mt-[33px]">
                    {features?.map((feature: any, i: number) => (
                      <li
                        key={i}
                        className="flex-none flex items-center space-x-4 md:space-x-3 font-medium"
                      >
                        <AiOutlineCheck className="w-5 h-5 flex-none" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
