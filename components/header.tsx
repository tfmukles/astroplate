import { useWindowSize } from "@/hooks/useWidth";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import menu from "../config/menu.json";
import LargeMenu from "./large-menu";
import Sidebar from "./sidebar";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowSize();

  if (isOpen && width && width >= 1024) {
    setOpen(false);
  }

  return (
    <header className="bg-white ">
      <div className="container">
        <div className="flex items-center py-4 justify-between">
          <Image width={135} height={24} src={menu.logoUrl} alt="logo" />

          <button onClick={() => setOpen(true)} className="lg:hidden">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.2 }}
                className="fixed max-w-[330px] top-0 space-y-5 right-0 w-full h-full p-5 bg-white shadow-lg z-50"
              >
                <Sidebar setOpen={setOpen} />
              </motion.div>
            )}
          </AnimatePresence>

          {width && width >= 1024 && <LargeMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
