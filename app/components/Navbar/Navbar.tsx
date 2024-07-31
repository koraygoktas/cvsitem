import Contact from "./Contact";
import Logo from "./Logo";
import Meslek from "./Meslek";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-400 text-black">
            <Logo />
            <Meslek />
            <Contact />
        </nav>
    );
};

export default Navbar;
