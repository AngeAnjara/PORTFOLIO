import React from "react";
import photo1 from "../../../assets/photos1.jpg"
import photo2 from "../../../assets/photos2.jpg"
import photo3 from "../../../assets/photos3 (1).jpg"

const Studio = () => {
  return (
    <div className="self-center w-full max-w-[993px] min-h-[80vh]  max-md:max-w-full">
      <h1 className="text-black text-4xl max-w-[272px] ml-11 mt-14 max-md:ml-2.5 max-md:mt-10">
        Photo Studio
      </h1>
      <div className="bg-zinc-800 flex w-[283px] h-px flex-col ml-11 mt-2.5 max-md:ml-2.5" />
      <br />
      <span className="mx-6"></span>Dans mon portfolio, je suis ravi de vous emmener dans l'univers captivant
      de mes créations photographiques en studio. J'ai consacré mon talent et ma passion à capturer des
      moments uniques et à donner vie à des visions artistiques. Mon travail en
      studio est une exploration de la lumière, des ombres, des textures, et de
      l'esthétique qui transcende l'ordinaire. Chaque cliché est le fruit d'une
      recherche minutieuse de l'équilibre parfait entre composition, émotion et
      technicité. Que ce soit en jouant avec la lumière naturelle ou en
      manipulant des éclairages sophistiqués en studio, chaque photo révèle mon
      engagement à capturer la beauté sous toutes ses formes. Explorez mon
      portfolio pour plonger dans un monde où chaque image raconte une histoire,
      où la créativité et la technique s'entremêlent pour créer des visuels
      saisissants et intemporels.
      <div>
        <img src={photo1} alt="photos 1" />
        <br />
        <img src={photo2} alt="photos femme " />
        <br />
        <img src={photo3} alt="photos femme" />
      </div>
    </div>
  );
};

export default Studio;
