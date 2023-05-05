import Image from "next/image";
import Link from "next/link";
import fotter from "../config/fotter.json";
import socialIcons from "../config/social.json";

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F6] mt-7">
      <div className="container">
        <div className="pt-14 pb-8 flex flex-wrap max-w-[84%] m-auto items-center justify-center lg:justify-between">
          <div className="py-4">
            <Image width={153} height={24} src={fotter.logoUrl} alt="logo" />
          </div>
          <ul className="flex items-center justify-center flex-wrap py-3 space-x-10">
            {fotter.fotterItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.url}
                  className="capitalize text-lg leading-[28px] py-3 px-[6px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex space-x-4 py-3">
            {socialIcons.map((icon, i) => (
              <li key={i}>
                <a
                  className="bg-heading w-8 h-8 rounded text-white flex items-center justify-center"
                  href={icon.url}
                  target="_blank"
                >
                  <Image width={32} height={32} src={icon.icon} alt="icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center text-[#999999] text-lg capitalize border-t border-t-[#EAEAEA] py-8">
        {fotter.copyWriteText}
      </p>
    </footer>
  );
};

export default Footer;
