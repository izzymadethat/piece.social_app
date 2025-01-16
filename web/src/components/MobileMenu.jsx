import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const MobileMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
    setClicked(null)
};

  const SubMenuSettings = {
    enter: {
      height: "auto",
      overflow: "hidden"
    },
    exit: {
      height: 0,
      overflow: "hidden"
    }
  };
  return (
    <div>
      <button onClick={toggleMobileMenu} className="z-[999] relative">
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full backdrop-blur text-background bg-accent-secondary p-6 mb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus?.map(({ name, subMenu }, i) => {
            const hasSubMenu = subMenu?.length > 0;
            const isClicked = clicked === i;
            return (
              <li key={name}>
                <span
                  className="flex-center-between p-4 hover:bg-background/5 rounded-md cursor-pointer relative "
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"}`}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    className="ml-5"
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={SubMenuSettings}
                  >
                    {subMenu?.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="p-2 flex-center hover:bg-white/5 rounded-md cursor-pointer gap-x-2"
                      >
                        {Icon && <Icon size={17} />}
                        <span>{name}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};
export default MobileMenu;
