import Link from "next/link";
import Styles from './page.module.css'; // Import your CSS module

const Navbar = () => {
    return (
        <div className="w-full h-20 bg-gray-800 sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              {/* <Logo /> */}
              <div className = {Styles.logo}>CoherentSystems</div>
              <ul className="hidden md:flex gap-x-6 text-white">
                <li>
                  <Link href="/">
                    <p className={Styles.aboutLink}>Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <p className={Styles.aboutLink}>About Us</p>
                  </Link>
                </li>
                <li>
                  <Link href="/papers">
                    <p className={Styles.aboutLink}>Paper</p>
                  </Link>
                </li>
              </ul>
              {/* <Button /> */}
            </div>
          </div>
        </div>
    );
  };
  
  export default Navbar;