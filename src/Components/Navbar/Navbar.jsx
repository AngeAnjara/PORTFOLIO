import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="self-center flex w-full max-w-[1123px]  flex-col mt-5  max-md:max-w-full">
        <nav className="self-center flex w-full max-w-[1102px]  items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <Link to="/" className="flex item-center justify-content">
            Ange.Dev
          </Link>
          <div className="self-center flex w-[415px] max-w-full items-start justify-between gap-5 my-auto max-md:justify-center">
            <Link
              to="/"
              className="transition-all border-b-2 hover:border-b-2 hover:border-slate-900"
            >
              Acceuil
            </Link>
            <Link
              to="/portfolio"
              className="transition-all border-b-2 hover:border-b-2 hover:border-slate-900"
            >
              Portfolio
            </Link>
            <Link
              to="/apropos"
              className="transition-all border-b-2 hover:border-b-2 hover:border-slate-900"
            >
              A propos
            </Link>
            <Link
              to="/contact"
              className="transition-all border-b-2 hover:border-b-2 hover:border-slate-900"
            >
              Contact
            </Link>
          </div>
          <div className="self-stretch flex flex-col w-[175px]">
            <Link
              to="/contact"
              className="justify-center items-start self-center flex w-[272px] max-w-full gap-0 md:flex sm:hidden"
            >
              <div className="buttonS">Embauchez Moi</div>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
