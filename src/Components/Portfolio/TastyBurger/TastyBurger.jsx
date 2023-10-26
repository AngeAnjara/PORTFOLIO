import React from "react";
import imgTastyBurger from "../../../assets/facebookPost.jpg"
const TastyBurger = () => {
  return (
    <div className="self-center w-full max-w-[993px]  max-md:max-w-full">
      <div>
        <h1 className="text-black text-4xl max-w-[272px] ml-11 mt-14 max-md:ml-2.5 max-md:mt-10">
          Tasty Burger
        </h1>
        <div className="bg-zinc-800 flex w-[283px] h-px flex-col ml-11 mt-2.5 max-md:ml-2.5" />
        <br />
        <div>
         <span className="mx-6"></span>Parmi mes réalisations marquantes, j'ai eu le privilège de travailler
          avec la société Tasty Burger, où j'ai eu l'opportunité de
          donner vie à leur identité visuelle. Ma contribution à la conception
          du logo de Tasty Burger a été une aventure captivante, alliant
          innovation et esthétique pour représenter au mieux l'esprit délicieux
          et dynamique de la marque. En parallèle, j'ai également dirigé la
          création de leur contenu sur les réseaux sociaux, façonnant une
          présence numérique engageante et cohérente qui a renforcé leur impact
          en ligne. Explorez mon portfolio pour découvrir de près ces projets
          passionnants et d'autres encore, témoignant de mon engagement à créer
          des expériences visuelles mémorables et percutantes.
        </div>
        <br />
        <div>
          <img src={imgTastyBurger} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TastyBurger;
