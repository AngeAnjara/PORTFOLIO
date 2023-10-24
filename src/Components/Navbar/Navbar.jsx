import { Link } from "react-router-dom";
import { MobileView, BrowserView } from "react-device-detect";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [icon, setIcon] = useState(false)

  const handleClick = ()=>{
    setMenu(!menu)
    setIcon(!icon)
  }
  return (
    <>
      
        <header className="self-center flex w-full max-w-[1123px]  flex-col mt-5  max-md:max-w-full">
          <nav className="self-center flex w-full max-w-[1102px]  items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <Link to="/" className="flex item-center justify-content">
              Ange.Dev
            </Link>
            <div className="self-center flex w-[415px] max-w-full items-start justify-between gap-5 my-auto max-md:justify-center">
              <Link to="/">Acceuil</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/apropos">A propos</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="self-stretch flex flex-col w-[175px]">
            <Link to='/contact' className="justify-center items-start self-center flex w-[272px] max-w-full gap-0 md:flex sm:hidden">
                <div className='buttonS'>
                   Embauchez Moi
                </div>
              </Link>
            </div>
          </nav>
        </header>
      
     
    </>
  );
};

export default Navbar;
