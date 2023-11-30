"use client";

import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useRouter } from "next/navigation";
import { UrlBase } from "../../constants/api";
import axios from "axios";

export default function Cadastrar() {
  const { push } = useRouter();

  const [produtor, setProdutor] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    await axios.post(`${UrlBase}/produtores`, produtor);

    push("/");
  }

  useEffect(() => {
    console.log(produtor);
  }, [produtor]);

  return (
    <>
      <Header src="../LogoGPL.png" />
      <main className="flex justify-center items-center py-12 px-4 font-serif">
        <form
          className="bg-white w-[480px] p-4 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <label className="text-sm font-semibold mb-1" htmlFor="nome">
            Nome:
          </label>
          <input
            required
            type="text"
            id="nome"
            name="nome"
            onChange={(e) => setProdutor({ ...produtor, nome: e.target.value })}
            value={produtor.nome}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <label className="text-sm font-semibold mb-1" htmlFor="idade">
            Idade:
          </label>
          <input
            required
            type="number"
            id="idade"
            name="idade"
            onChange={(e) =>
              setProdutor({ ...produtor, idade: e.target.value })
            }
            value={produtor?.idade}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <label className="text-sm font-semibold mb-1" htmlFor="endereco">
            Endereço:
          </label>
          <input
            required
            type="text"
            id="endereco"
            name="endereco"
            onChange={(e) =>
              setProdutor({ ...produtor, endereco: e.target.value })
            }
            value={produtor?.endereco}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <label className="text-sm font-semibold mb-1" htmlFor="endereco">
            Preço do leite:
          </label>
          <input
            required
            type="number"
            id="endereco"
            name="endereco"
            onChange={(e) =>
              setProdutor({ ...produtor, precoLeite: e.target.value })
            }
            value={produtor?.precoLeite}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-black mt-4 py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Cadastrar
          </button>
        </form>
      </main>
      <Footer src="../LogoGPL2.png" />
    </>
  );
}
