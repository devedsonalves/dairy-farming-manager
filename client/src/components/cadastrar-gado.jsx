"use client";

import { X } from "@phosphor-icons/react";
import axios from "axios";
import { UrlBase } from "../constants/api";
import { useState } from "react";

export default function CadastrarGado({
  open,
  setOpen,
  produtor,
  setProdutor,
}) {
  const [gado, setGado] = useState({});

  async function submitUpdate(e) {
    e.preventDefault();

    await axios.post(`${UrlBase}/vaca/${produtor.id}`, gado);

    location.reload();
  }

  if (open) {
    return (
      <span className="bg-black bg-opacity-75 fixed top-0 left-0 h-screen w-screen flex justify-center items-center">
        <section className="bg-white w-[480px] p-2 rounded-lg">
          <div className="flex justify-between items-center border-b border-zinc-300 mb-4">
            <p className="flex justify-start items-center uppercase tracking-wider text-lg font-bold">
              Cadastrar Gado
            </p>
            <button
              onClick={() => setOpen(false)}
              className="flex justify-center items-center pb-2"
            >
              <X size={24} />
            </button>
          </div>
          <form
            onSubmit={submitUpdate}
            className="flex flex-col justify-center items-center"
          >
            <label className="text-sm font-semibold mb-1" htmlFor="nome">
              Raça:
            </label>
            <input
              type="name"
              onChange={(e) => setGado({ ...gado, raca: e.target.value })}
              value={gado.raca}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            <label className="text-sm font-semibold mb-1" htmlFor="nome">
              Fase:
            </label>
            <select
              required
              onChange={(e) => setGado({ ...gado, fase: e.target.value })}
              value={gado.fase}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            >
              <option value=""></option>
              <option value="Proestro">Proestro</option>
              <option value="Estro">Estro</option>
              <option value="Metaestro">Metaestro</option>
              <option value="Diestro">Diestro</option>
            </select>
            <button
              type="submit"
              className="bg-blue-500 text-white font-black mt-4 py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Cadastrar
            </button>
          </form>
        </section>
      </span>
    );
  }
}
