import React from "react";
import { PageContact } from "../pageContact/PageContact";

const Contact = () => {
  return (
    <div className="self-center w-full max-w-[993px] min-h-[80vh]  max-md:max-w-full">
      <h1 className="text-black text-4xl max-w-[272px] ml-11 mt-14 max-md:ml-2.5 max-md:mt-10">
        Mon Contact
      </h1>

      <div className="bg-zinc-800 flex w-[283px] h-px flex-col ml-11 mt-2.5 max-md:ml-2.5" />
      <br />
      <div>
        Prêt à collaborer sur des projets inspirants et à explorer de nouvelles
        opportunités. Contactez-moi pour discuter de la manière dont nous
        pouvons travailler ensemble et donner vie à vos concepts.
      </div>
      <div className="p-6 bg-slate-800 m-6 rounded-lg">
        <PageContact/>
      </div>
    </div>
  );
};

export default Contact;
