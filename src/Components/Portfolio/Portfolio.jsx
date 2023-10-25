import React from "react";
import Card from "../Card/Card";

export const Portfolio = () => {
  return ( <div className="self-center w-full max-w-[993px] h-[80vh]  max-md:max-w-full">
      <div>
   
        <h1 className="text-black text-4xl max-w-[272px] ml-11 mt-14 max-md:ml-2.5 max-md:mt-10">
          Mon Portfolio
        </h1>
        <div className="bg-zinc-800 flex w-[283px] h-px flex-col ml-11 mt-2.5 max-md:ml-2.5" />
        <br />
        <span className="mx-6"></span> Bienvenue dans mon monde créatif, où
        chaque pixel, chaque mot et chaque image racontent une histoire unique.
        Je vous invite à explorer mon portfolio. À travers ces pages virtuelles,
        vous découvrirez un éventail diversifié de mon travail, allant du design
        visuel à la rédaction captivante.
      </div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Card />
      </div>
      <div className="my-6">
        <span className="mx-6"></span> Mon approche artistique se nourrit de
        l'innovation, de la recherche constante de l'esthétique et de
        l'engagement à créer des expériences mémorables. Parcourez mes projets
        pour plonger dans l'univers visuel que j'ai construit avec soin et
        détermination. Chaque élément de ce portfolio est le fruit d'une
        réflexion approfondie, d'une créativité débordante et d'un engagement
        envers l'excellence. Je suis passionné par la transformation d'idées en
        réalité, et je suis ravi de partager ces réalisations avec vous.
        Bienvenue dans mon espace créatif, j'espère que cette visite sera aussi
        inspirante pour vous que chaque projet l'a été pour moi.
      </div>
    </div>
  );
};
