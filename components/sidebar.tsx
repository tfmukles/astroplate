import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { RefObject, useEffect, useRef, useState } from "react";
import { BiSearch, BiSun } from "react-icons/bi";
import menu from "../config/menu.json";

interface Props {
  setOpen: any;
  buttonRef: RefObject<HTMLButtonElement>;
}

const Sidebar = ({ setOpen, buttonRef }: Props) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClose = ({ target }: MouseEvent) => {
    if (
      sidebarRef.current &&
      buttonRef.current &&
      !buttonRef.current.contains(target as Node) &&
      !sidebarRef.current.contains(target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);

    return () => {
      return window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.2 }}
      className="absolute max-w-[330px] top-0 space-y-5 right-0 w-full h-full p-5 bg-white shadow-lg z-50"
      ref={sidebarRef}
    >
      <div className="flex justify-between">
        <button className="bg-black rounded-full p-1 shadow-sm w-8 h-8 justify-center flex items-center">
          <BiSun className="w-5 h-5 text-white" />
        </button>
        <button onClick={() => setOpen(false)} className="text-whtie">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>

      <div className="flex border items-center px-2 py-1 border-black rounded-2xl overflow-hidden">
        <BiSearch className="w-5 h-5" />
        <input
          className="pl-1 outline-none flex-1"
          type="search"
          name="search"
        />
      </div>

      <ul className="space-y-5">
        {menu.navigationItems.map((item, i) =>
          item.subItems?.length ? (
            <ListItem
              key={i}
              label={"jfdlaj"}
              url="jsdlkfjlad"
              subItems={item.subItems}
            />
          ) : (
            <li key={i} className="border-b border-b-[#EAEAEA] pb-2">
              <Link
                className="text-lg font-semibold leading-[26px]"
                href={item.url}
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </motion.div>
  );
};

export default Sidebar;

interface ListProps {
  label: string;
  url: string;
  subItems: { label: string; url: string }[];
}

const ListItem = ({ label, url, subItems }: ListProps) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <motion.li layout>
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center cursor-pointer  "
      >
        <span className="text-lg font-semibold leading-[26px]">{label}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-4 h-4 ml-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="w-full mt-4 space-y-3 ml-4"
          >
            {subItems.map((item, i) => (
              <li key={i}>
                <Link
                  className="text-lg font-semibold leading-[26px]"
                  href={item.url}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
};
