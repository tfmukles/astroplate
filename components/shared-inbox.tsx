import { ISharedIndex } from "@/types";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";

interface Props {
  sharedIndex: ISharedIndex;
}

const SharedInbox = ({ sharedIndex }: Props) => {
  console.log({ sharedIndex });
  const { desc, title, features, image } = sharedIndex;

  return (
    <section className="gradient-color py-14  lg:pt-28">
      <div className="container">
        <div className="flex flex-wrap mx-auto space-y-10 lg:space-y-0 items-center">
          <div className="lg:basis-1/2 basis-full">
            <div className="max-w-[420px] mx-auto pr-2">
              <Image width={412} height={382} src={image} alt="shared-img" />
            </div>
          </div>
          <div className="lg:basis-1/2 basis-full pl-2">
            <h1 className="section-title text-left">{title}</h1>
            <p className="section-description">{desc}</p>

            <ul className="space-y-3 mt-[33px]">
              {features.map((feature, i) => (
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
};

export default SharedInbox;
