import { Home } from "lucide-react";
import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";
import { Menus } from "./utils/menu";

function App() {
  return (
    <div>
      <header className="h-16 text-[15px] flex-center fixed inset-0 bg-accent-secondary/10 shadow-sm">
        <nav className="px-3.5 w-full flex-center-between mx-auto">
          <div className="flex-center gap-x-2 z-[999] relative">
            <Home size={32} />
            <h3 className="text-lg">Piece.Social</h3>
          </div>

          {/* Desktop menu */}
          <ul className="hidden lg:flex-center gap-x-1">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <button className="bg-primary hover:bg-accent-secondary duration-200 text-background z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center">
              Investor Network Login
            </button>
          </div>
          <div className="lg:hidden">
            <MobileMenu Menus={Menus} />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
