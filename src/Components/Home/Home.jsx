import React from "react";
import logo from "../../assets/ange.jpg";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Parcours from "../Parcours/Parcours";
import { PageContact } from "../pageContact/PageContact";
import Widget from "../utils/Widget";

const Home = () => {
 
  return (
    <section className="self-stretch flex grow flex-col max-md:max-w-full ">
      <div className="self-stretch flex flex-col max-md:max-w-full">
        <div className="self-stretch flex grow flex-col pt-16 pb-14 px-5 rounded-[3.125rem] max-md:max-w-full">
          <div className="self-stretch flex flex-col ml-3 mr-5 max-md:max-w-full max-md:mr-2.5">
            <div className="self-stretch max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
                  <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                    <h1 className="text-black text-4xl max-w-[515px] max-md:max-w-full">
                      ANGELO ANJARATIAVINA
                    </h1>
                    <div className="flex w-[512px] max-w-full items-start justify-between gap-5 mt-7 max-md:flex-wrap">
                      <h2 className="text-black text-xl">
                        DEVELOPPEUR WEB--GRAPHISTE--PHOTOGRAPHE
                      </h2>
                      
                    </div>
                    <p className="text-black text-base mt-20 max-md:max-w-full max-md:mt-10">
                      En tant que professionnel passionné, mon parcours dans le
                      monde du design et du développement web est marqué par une
                      fusion harmonieuse entre créativité et expertise
                      technique. En tant que designer, j'ai façonné des
                      expériences visuelles captivantes, mettant l'accent sur
                      l'esthétique et l'utilisabilité. Mon engagement envers
                      l'innovation m'a permis de créer des designs uniques qui
                      transcendent les attentes.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1e14c1da-5b8c-4109-980c-733208d0dae3?apiKey=62d99b40414e4471a91c3a153e1fef21&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e14c1da-5b8c-4109-980c-733208d0dae3?apiKey=62d99b40414e4471a91c3a153e1fef21&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e14c1da-5b8c-4109-980c-733208d0dae3?apiKey=62d99b40414e4471a91c3a153e1fef21&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e14c1da-5b8c-4109-980c-733208d0dae3?apiKey=62d99b40414e4471a91c3a153e1fef21&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e14c1da-5b8c-4109-980c-733208d0dae3?apiKey=62d99b40414e4471a91c3a153e1fef21&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e14c1da-5b8c-4109-980c-733208d0dae3?apiKey=62d99b40414e4471a91c3a153e1fef21&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e14c1da-5b8c-4109-980c-733208d0dae3?apiKey=62d99b40414e4471a91c3a153e1fef21&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e14c1da-5b8c-4109-980c-733208d0dae3?apiKey=62d99b40414e4471a91c3a153e1fef21&"
                    className="aspect-[0.91] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                  />
                </div>
              </div>
            </div>
            <Link
              to="/portfolio"
              className="justify-center items-start self-center flex w-[272px] max-w-full gap-0"
            >
              <div className="buttonS">Mes Portfolio</div>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-black text-4xl ml-12 mt-20 max-md:ml-2.5 max-md:mt-10">
        Sur Moi
      </h1>
      <div className="bg-zinc-800 flex w-[153px] h-px flex-col ml-12 mt-3 max-md:ml-2.5" />
      <p className="text-black text-base self-center max-w-[1066px] mt-12 max-md:max-w-full max-md:mt-10">
        <span className="mx-4"></span> Mon parcours professionnel s'est façonné à travers les lentilles de la
        créativité, de la conception visuelle, du cadrage cinématographique, et
        enfin, du développement web. En tant que photographe, j'ai capturé des
        moments intemporels, développant un sens aigu de la composition et de la
        narration visuelle. Mon œil artistique s'est ensuite étendu à la
        conception graphique, où j'ai traduit mes visions en visuels percutants.{" "}
        <br /> <br />  <span className="mx-4"></span> En m'immergeant dans l'univers cinématographique en tant
        que cadreur et monteur, j'ai affiné mes compétences narratives, jouant
        avec la lumière, les mouvements de caméra, et les séquences pour créer
        des histoires visuelles captivantes. La transition vers le développement
        web a été une évolution naturelle, où j'ai canalisé ma passion pour la
        créativité dans la construction d'expériences en ligne exceptionnelles.
      </p>
      <div>
        <br/>
        <Parcours/>

      </div>
      <div>
        <Widget/>
      </div>
      <h1 className="text-black text-4xl max-w-[283px] ml-11 mt-16 max-md:ml-2.5 max-md:mt-10">
        Mes Portfolios
      </h1>
      <div className="bg-zinc-800 flex w-[283px] h-px flex-col ml-11 mt-3 max-md:ml-2.5" />
      <p className="text-black text-base self-center max-w-[1048px] mt-11 max-md:max-w-full max-md:mt-10">
        Passionné par l'art visuel, du cadre de la photographie à l'esthétique
        du design, en passant par l'émotion du cinéma. Enrichi par des années
        d'expérience en tant que photographe, designer, et cadreur-monteur, j'ai
        tissé un parcours créatif unique.
      </p>
      <div className="self-center w-full max-w-[993px] mt-7 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
         
              <Card
               
              />
            
        </div>
      </div>
      <h1 className="text-black text-4xl max-w-[272px] ml-11 mt-14 max-md:ml-2.5 max-md:mt-10">
        Me Contacter
      </h1>
      <div className="bg-zinc-800 flex w-[283px] h-px flex-col ml-11 mt-2.5 max-md:ml-2.5" />
      <p className="text-black text-base self-center max-w-[1052px] mt-11 max-md:max-w-full max-md:mt-10">
        Prêt à explorer de nouvelles opportunités passionnantes et à collaborer
        sur des projets captivants. Rencontrons-nous et créons quelque chose
        d'extraordinaire ensemble !
      </p>
      <div className="bg-slate-700 self-center flex w-[1018px] h-[444px] my-2 flex-col mt-8 rounded-3xl max-md:max-w-full">
        <PageContact/>
      </div>
    </section>
  );
};

export default Home;
