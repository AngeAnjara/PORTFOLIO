import React from "react";
import burger from  'https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-homme-animal-debout-cheval.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
import { Link } from "react-router-dom";
const Card = () => {
    const liste = [
        {
          id: 1,
          nom: "tasty Burger",
          desc: "une affiche",
          photo: "./src/assets/burger.jpg",
          lien: "/burger",
        },
        {
          id: 2,
          nom: "FaceClone",
          desc: "Une Site Clone de Facebook ",
          photo: "./src/assets/burger.jpg",
          lien: "/faceclone",
        },
        {
          id: 3,
          nom: "Shout Studio ",
          desc: "Une Collection des Photos studios",
          photo:burger,
          lien: "/shout",
        },
      ];
  return (
  <>
   {
    liste.map((item)=>{
        return  <div className="m-4" key={item.id}>
        <div className="cardS">
          <img src={item.photo} alt="" />
          <div className="cardS__content">
            <p className="cardS__title">{item.nom}</p>
            <p className="cardS__description">{item.desc}</p>
            <Link to={item.lien}>Voir Plus...</Link>
          </div>
        </div>
      </div>
    })
   }
  </>
  );
};

export default Card;
