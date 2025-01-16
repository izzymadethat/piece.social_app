import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const DesktopMenu = ({ menu }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasSubMenu = menu?.subMenu?.length > 0;

  const toggleMenuHover = () => setIsHovered(!isHovered);

  //   * animation variants
  const subMenuAnimation = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5
      },
      display: "none"
    }
  };

  return (
    <motion.li
      className="group/link"
      onHoverStart={toggleMenuHover}
      onHoverEnd={toggleMenuHover}
    >
      <span className="flex-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:bg-accent-secondary hover:text-background/80">
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-1 group-hover/link:rotate-180 duration-200" />
        )}
      </span>

      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHovered ? "enter" : "exit"}
          variants={subMenuAnimation}
        >
          <div
            className={`
                grid gap-7 ${
                  menu.gridCols === 3
                    ? "grid-cols-3"
                    : menu.gridCols === 2
                    ? "grid-cols-2"
                    : "grid-cols-1"
                }
            `}
          >
            {menu?.subMenu?.map((subMenu, i) => (
              <div key={i} className="relative cursor-pointer">
                <div className="flex-center gap-x-4 group/menubox">
                  <div className="bg-background/25 w-fit p-2 rounded-md group-hover/menubox:bg-accent-primary group-hover/menubox:text-background duration-300">
                    {subMenu?.icon && <subMenu.icon />}
                  </div>
                  <div>
                    <h6>
                      {subMenu?.name}
                      <p className="text-xs text-white/50">{subMenu?.desc}</p>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};
export default DesktopMenu;
