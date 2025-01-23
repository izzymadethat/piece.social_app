import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      {/* Main Menu Item */}
      <Link
        to={menu.route || "#"}
        className={`gap-1 px-3 py-1 cursor-pointer flex-center rounded-xl ${
          menu.comingSoon
            ? "text-gray-600 cursor-no-drop"
            : "hover:bg-accent-secondary hover:text-background/80"
        }`}
      >
        {menu.name}
        {menu.comingSoon && <span>- Coming Soon</span>}
        {hasSubMenu && (
          <ChevronDown className="mt-1 duration-200 group-hover/link:rotate-180" />
        )}
      </Link>

      {/* Submenu */}
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
                <Link
                  to={subMenu.route || "#"}
                  className="flex-center gap-x-4 group/menubox"
                >
                  <div className="p-2 duration-300 rounded-md bg-background/25 w-fit group-hover/menubox:bg-accent-primary group-hover/menubox:text-background">
                    {subMenu?.icon && <subMenu.icon />}
                  </div>
                  <div>
                    <h6>
                      {subMenu?.name}
                      <p className="text-xs text-white/50">{subMenu?.desc}</p>
                      {subMenu.comingSoon && (
                        <span className="text-sm italic font-body">
                          Coming Soon
                        </span>
                      )}
                    </h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};
export default DesktopMenu;
