import HamburgerMenu from "./HamburgerMenu";
import DesktopMenu from "./DesktopMenu";
import CartBar from "./cart/CartBar";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 bg-neutral-800">
      <HamburgerMenu />
      <DesktopMenu />
    </header>
  );
};
