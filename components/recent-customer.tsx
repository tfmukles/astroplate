import { fadeInBottom, fadeInTop, fadeInUp } from "@/animate/animate";
import { IRecentCustomer } from "@/types";
import { motion, useInView } from "framer-motion";
import { marked } from "marked";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  recentCustomer: IRecentCustomer;
}

const RecentCustomer = ({ recentCustomer }: Props) => {
  const { title, desc, features } = recentCustomer;
  const [render, setRender] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(parentRef);

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <section className="pt-5 pb-12">
      <div className="container">
        <motion.div
          initial={"hidden"}
          whileInView={"animate"}
          transition={{ staggerChildren: 0.3 }}
          className="max-w-[645px] mx-auto"
        >
          <motion.h1 variants={fadeInUp} className="section-title text-center">
            {title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="section-description text-center"
          >
            {desc}
          </motion.p>
        </motion.div>

        <div ref={parentRef}>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
          >
            {features.map((feature, i) => {
              const isEven = (i + 1) % 2 === 0;
              const variants = isEven ? fadeInBottom : fadeInTop;

              return (
                <SwiperSlide key={i} className="my-16">
                  <motion.div
                    animate={!isInView ? "hidden" : "animate"}
                    variants={variants}
                    className="rounded-xl leading-[34px] font-inter text-[20px] bg-[#F6F6F6] py-[22px] pl-[32px] pr-[31px]"
                  >
                    <Image
                      width={32}
                      height={45}
                      src={"/images/invited-comma.png"}
                      alt="invited-comma"
                      className="mt-4 mb-7"
                    />
                    {render && (
                      <p
                        className="text-lg leading-[34px]"
                        dangerouslySetInnerHTML={{
                          __html: marked.parse(feature.comment),
                        }}
                      ></p>
                    )}

                    <div className="flex space-x-6 items-center mt-8">
                      <Image
                        width={50}
                        height={50}
                        className="flex-none w-[50px] h-[50px] rounded-full"
                        src={feature.profile}
                        alt="profile"
                      />
                      <div>
                        <h3 className="text-[22px] font-semibold leading-[24px] text-heading mb-1">
                          {feature.name}
                        </h3>
                        <span className="text-lg leading-[18px]">
                          {feature.designation}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RecentCustomer;
