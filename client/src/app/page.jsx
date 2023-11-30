"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import Loading from "../components/loading";
import Editar from "../components/edit-produtor";
import Detalhes from "../components/details-produtor";
import ConfirmDelete from "../components/confirm-delete";

import { getAll } from "../functions/getAll";
import { useEffect, useState } from "react";

export default function Home() {
  const [isEmpty, setIsEmpty] = useState(false);

  const [selectDelete, setSelectDelete] = useState(null);
  const [selectDetails, setSelectDetails] = useState(null);
  const [selectEdit, setSelectEdit] = useState(null);

  const [produtores, setProdutores] = useState([]);

  async function getAllProdutores() {
    const request = await getAll();

    setProdutores(request);

    setIsEmpty(!produtores[0]);
  }

  useEffect(() => {
    getAllProdutores();
  }, []);

  return (
    <>
      <Header src="LogoGPL.png" />
      <main className="w-full bg-zinc-100 flex justify-center items-center py-16 px-2 font-serif">
        {produtores.length == 0 ? (
          isEmpty ? (
            <span className="flex flex-col justify-center items-center gap-4">
              <h1>NENHUM PRODUTOR CADASTRADO</h1>
              <a
                href="/cadastrar"
                className="bg-black text-white  text-lg font-black px-4 py-2 rounded-md"
              >
                Cadastrar
              </a>
            </span>
          ) : (
            <Loading />
          )
        ) : (
          <section className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Lista de Produtores</h1>
            <div className="overflow-x-auto">
              <table className="min-w-full shadow-md">
                <thead>
                  <tr className="w-full bg-zinc-200">
                    <th className="border-b-2 border-gray-300 text-left p-3 px-5">
                      Nome
                    </th>
                    <th className="border-b-2 border-gray-300 text-left p-3 px-5">
                      Idade
                    </th>
                    <th className="border-b-2 border-gray-300 text-left p-3 px-5">
                      Endereço
                    </th>
                    <th className="border-b-2 border-gray-300 text-left p-3 px-5">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-zinc-100">
                  {produtores.map((produtor) => (
                    <>
                      <tr key={produtor.id} className="bg-white">
                        <td className="border-b border-gray-300 p-3 px-5">
                          {produtor.nome}
                        </td>
                        <td className="border-b border-gray-300 p-3 px-5">
                          {produtor.idade}
                        </td>
                        <td className="border-b border-gray-300 p-3 px-5">
                          {produtor.endereco}
                        </td>
                        <td className="border-b border-gray-300 p-3">
                          <button
                            onClick={() => setSelectEdit(produtor)}
                            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 mx-2 rounded-md"
                          >
                            Editar
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-1 px-2 mx-2 rounded-md"
                            onClick={() => setSelectDelete(produtor)}
                          >
                            Excluir
                          </button>
                          <button
                            className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-1 px-2 mx-2 rounded-md"
                            onClick={() => setSelectDetails(produtor)}
                          >
                            Detalhes
                          </button>
                        </td>
                      </tr>
                      <Editar
                        produtorData={produtor}
                        isOpen={selectEdit === produtor}
                        setSelectedProdutor={setSelectEdit}
                      />
                      <ConfirmDelete
                        id={produtor.id}
                        produtores={produtores}
                        isOpen={selectDelete === produtor}
                        setSelectedProdutor={setSelectDelete}
                      />
                      <Detalhes
                        produtorData={produtor}
                        isOpen={selectDetails === produtor}
                        setSelectedProdutor={setSelectDetails}
                      />
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
      <Footer src={"LogoGPL2.png"} />
    </>
  );
}
