import React, { useState } from "react";
import { useDb } from "../context/dbContext";

const FormAnime = () => {
    const {saveAnimeFunction} = useDb();
  const [anime, setAnime] = useState({
    name: "",
    description: "",
    img: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setAnime({
      ...anime,
      [name]: value,
    });
  };

  const onSubmitAnime = (e) => {
    e.preventDefault();
    try {
        saveAnimeFunction(anime)
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitAnime}>
        <div className=" p-4 shadow-md m-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm text-gray-600">Nombre</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                required
                placeholder="Escribe un nombre"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-600">Imagen</label>
              <input
                onChange={handleChange}
                type="text"
                name="img"
                id="img"
                required
                placeholder="copia una URL"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-sm text-gray-600">
                Descripción
              </label>
              <textarea
                onChange={handleChange}
                type="text"
                name="description"
                id="description"
                required
                placeholder="Escribe una descripción"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-auto m-2 px-4 py-2 traking-white text-white transition-colors duration-200 transform bg-[#664494] rounded-md hover:bg-[#9B71B0] "
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAnime;
