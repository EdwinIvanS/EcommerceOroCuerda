import React from "react";
import Guitar from "../components/Guitar";
import { useCartContext } from "../context/CartContext";

export default function Home() {

  const { state, dispatch } = useCartContext();

  return (
    <>
      <div className="diplay-flex-container">
        <img className="img-fluid" src={`${import.meta.env.BASE_URL}/img/ESP.png`} alt="imagen logo" />
        <img className="img-fluid" src={`${import.meta.env.BASE_URL}/img/Fender.png`} alt="imagen logo" />
        <img className="img-fluid" src={`${import.meta.env.BASE_URL}/img/Gibson.png`} alt="imagen logo" />
         <img className="img-fluid" src={`${import.meta.env.BASE_URL}/img/Tailor.png`} alt="imagen logo" />
      </div>
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="display-flex mt-5">
          {state.data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} dispatch={dispatch} />
          ))}
        </div>
      </main>
    </>
  );
}
