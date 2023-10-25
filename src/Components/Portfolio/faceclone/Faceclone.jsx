import React from "react";
import facedark from "../../../assets/facedark.png"
import { Link } from "@mui/material";
const Faceclone = () => {
  return (
    <div className="self-center w-full max-w-[993px]  max-md:max-w-full">
      <div>
        <h1 className="text-black text-4xl max-w-[272px] ml-11 mt-14 max-md:ml-2.5 max-md:mt-10">
          FaceClone
        </h1>
        <div className="bg-zinc-800 flex w-[283px] h-px flex-col ml-11 mt-2.5 max-md:ml-2.5" />
        <br />
        
        <div>
          <span className="mx-6"></span>Plongez dans mon portfolio où
          l'innovation visuelle et la fonctionnalité harmonieuse prennent vie.
          Parmi mes réalisations notables, je suis particulièrement fier de
          présenter mon travail sur le site web FaceClone. J'ai conçu une plateforme numérique qui allie
          une conception responsive impeccable, un design captivant, et une
          fonctionnalité avant-gardiste. L'expérience utilisateur a été au cœur
          de mon processus de création, garantissant que le site s'adapte de
          manière fluide à divers appareils, offrant une navigation intuitive et
          une esthétique visuelle cohérente. De plus, pour répondre aux
          préférences individuelles, j'ai intégré une fonctionnalité de mode
          sombre, offrant aux utilisateurs une option élégante et confortable.
          Explorez mon portfolio pour plonger dans le monde de FaceClone et
          découvrir comment j'ai donné vie à ces concepts innovants avec une
          esthétique soignée et des fonctionnalités modernes. <Link color="inherit" sx={{textDecoration:"none",color:"red"}} href="https://fb-clone-react-mui-tailwind-css.vercel.app/" >
        Voir le site
      </Link>
        </div>
       
        <br />
        <div>
          <img src={facedark} alt="" />
        </div>
       
      </div>
    </div>
  );
};

export default Faceclone;
