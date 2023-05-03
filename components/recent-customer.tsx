import { IRecentCustomer } from "@/types";
import { marked } from "marked";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <section className="pt-5 pb-12">
      <div className="container">
        <div className="max-w-[645px] mx-auto">
          <h1 className="section-title text-center">{title}</h1>
          <p className="section-description text-center">{desc}</p>
        </div>

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
          {features.map((feature, i) => (
            <SwiperSlide key={i} className="my-16">
              <div className="rounded-xl leading-[34px] font-inter text-[20px] bg-[#F6F6F6] py-[22px] pl-[32px] pr-[31px]">
                <h3 className="pt-3 font-extrabold	text-[70px] leading-[70px] font-noto">
                  ‘’
                </h3>
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentCustomer;
