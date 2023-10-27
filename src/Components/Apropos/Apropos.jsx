import React from "react";
import Parcours from "../Parcours/Parcours";

const Apropos = () => {
  return (
    <div className="self-center w-full max-w-[993px] h-[80vh]  max-md:max-w-full">
      <h1 className="text-black text-4xl max-w-[272px] ml-11 mt-14 max-md:ml-2.5 max-md:mt-10">
        Mon Histoire
      </h1>
      
      <div className="bg-zinc-800 flex w-[283px] h-px flex-col ml-11 mt-2.5 max-md:ml-2.5" />
      <br />
      <span className="mx-6"></span> Dès que j'ai franchi les portes de l'université après le bac, mon amour
      pour la créativité et la technologie m'a guidé vers une aventure
      captivante dans le monde du multimédia. Durant ces années d'études, j'ai
      plongé tête première dans l'univers polyvalent de la conception visuelle,
      de la narration interactive, et de la fusion entre l'art et la
      technologie. Armé de connaissances fraîches et d'une passion indomptée,
      j'ai tracé ma voie en tant que photographe. À travers l'objectif, j'ai
      capturé des instants éphémères, créant des histoires visuelles qui
      transcendent le temps. Cette immersion m'a naturellement guidé vers le
      rôle de cadreur-monteur, où j'ai appris à sculpter des séquences
      cinématographiques, jouant avec la lumière et le mouvement pour donner vie
      à des récits visuels. L'aventure ne s'est pas arrêtée là. Fasciné par le
      pouvoir de l'interaction en ligne, j'ai embrassé le défi de devenir
      développeur front-end. Chaque ligne de code est devenue une nouvelle
      palette, me permettant de créer des expériences web innovantes et
      esthétiquement éblouissantes. Aujourd'hui, mon parcours est une symphonie
      harmonieuse d'expériences et d'apprentissages, façonnant un professionnel
      polyvalent qui trouve la beauté dans la diversité des disciplines. Mon
      voyage continue, alimenté par la curiosité et la passion pour
      l'intersection créative entre l'art et la technologie.
      <br />
      <br />
      <div>
        <Parcours/>
      </div>
      
    </div>
  );
};

export default Apropos;
