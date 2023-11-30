"use client";

import { CaretLeft, Plus, TrashSimple } from "@phosphor-icons/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateProdutor } from "../functions/updateProdutor";

import CadastrarProducao from "./cadastrar-producao";
import CadastrarGado from "./cadastrar-gado";
import axios from "axios";
import { UrlBase } from "../constants/api";

export default function Editar({ produtorData, isOpen, setSelectedProdutor }) {
  const { push } = useRouter();

  const [formData, setFormData] = useState(produtorData);
  const [openGado, setOpenGado] = useState(false);
  const [openProducao, setOpenProducao] = useState(false);
  const [vacaIndex, setVacaIndex] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    updateProdutor(formData);

    location.reload();
  }

  async function deletarVaca(index) {
    await axios.delete(`${UrlBase}/vaca/${formData.id}/${index}`);

    location.reload();
  }

  async function deletarProducao(vaca, index) {
    await axios.delete(`${UrlBase}/vaca/${formData.id}/${vaca}/${index}`);

    location.reload();
  }

  if (isOpen) {
    return (
      <>
        <span className="bg-zinc-100 fixed h-screen w-screen top-0 left-0 flex justify-center items-center py-16 font-serif">
          <button
            className="fixed top-6 left-6 p-2 flex justify-center items-center bg-white border border-black rounded-full"
            onClick={() => setSelectedProdutor(null)}
          >
            <CaretLeft size={24} />
          </button>
          <section className="w-[640px] max-h-[90vh] shadow-lg p-4 bg-white rounded-lg overflow-y-auto">
            <p className="uppercase tracking-wider w-full text-xl font-bold pb-2 mb-3 flex justify-center items-center border-b border-zinc-300">
              Editar Produtor
            </p>
            <form className="mt-2" onSubmit={handleSubmit}>
              <label className="text-sm font-semibold mb-1" htmlFor="nome">
                Nome:
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
                value={formData?.nome}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
              <label className="text-sm font-semibold mb-1" htmlFor="idade">
                Idade:
              </label>
              <input
                type="number"
                id="idade"
                name="idade"
                onChange={(e) =>
                  setFormData({ ...formData, idade: e.target.value })
                }
                value={formData?.idade}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
              <label className="text-sm font-semibold mb-1" htmlFor="endereco">
                Endereço:
              </label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                onChange={(e) =>
                  setFormData({ ...formData, endereco: e.target.value })
                }
                value={formData?.endereco}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
              <label className="text-sm font-semibold mb-1" htmlFor="endereco">
                Preço do leite:
              </label>
              <input
                type="number"
                id="endereco"
                name="endereco"
                value={formData?.precoLeite}
                onChange={(e) =>
                  setFormData({ ...formData, precoLeite: e.target.value })
                }
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
              <div className="mb-4">
                <span className="text-xl font-semibold mt-4 mb-2 flex justify-between items-center">
                  <p>Gado:</p>
                  <button
                    onClick={() => setOpenGado(true)}
                    type="button"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-md"
                  >
                    <Plus size={18} />
                  </button>
                </span>
                <hr className="mb-2" />
                {formData?.gado?.length == 0 ? (
                  <p className="mb-2">Nenhum gado cadastrado</p>
                ) : (
                  <>
                    {formData?.gado?.map((vaca, indexVaca) => (
                      <details key={indexVaca}>
                        <summary className="pb-3 flex justify-between items-center cursor-pointer">
                          <p className="font-black ">
                            Vaca ( {indexVaca + 1} )
                          </p>
                          <div className="flex justify-items-end items-center gap-2">
                            <button
                              type="button"
                              onClick={() => deletarVaca(indexVaca)}
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
                            >
                              <TrashSimple size={18} />
                            </button>
                          </div>
                        </summary>
                        <p className="mb-1">Raça: {vaca.raca}</p>
                        <p className="mb-1">Fase: {vaca.fase}</p>
                        <span className="font-black flex justify-start items-center gap-4">
                          <p>Produção:</p>
                          <button
                            onClick={() => {
                              setVacaIndex(indexVaca);
                              setOpenProducao(true);
                            }}
                            type="button"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-md"
                          >
                            <Plus size={18} />
                          </button>
                        </span>
                        <div>
                          {vaca?.producao.length == 0 ? (
                            <p className="ml-4 mb-4 mt-2">
                              Nenhuma produção registrada
                            </p>
                          ) : (
                            <>
                              {vaca?.producao.map((producao, indexProducao) => (
                                <>
                                  <details
                                    key={indexProducao}
                                    className="py-2 ml-4"
                                  >
                                    <summary className="flex justify-start items-center gap-4 cursor-pointer">
                                      <p className="font-black">
                                        Data: {producao.data}
                                      </p>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          deletarProducao(
                                            indexVaca,
                                            indexProducao
                                          )
                                        }
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
                                      >
                                        <TrashSimple size={18} />
                                      </button>
                                    </summary>
                                    <p>Litros: {producao.litros} L</p>
                                    <p>
                                      Receita:{" "}
                                      {Number(producao.receita).toFixed(2)} R$
                                    </p>
                                  </details>
                                </>
                              ))}
                            </>
                          )}
                        </div>
                      </details>
                    ))}
                  </>
                )}
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-black py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              >
                Salvar
              </button>
            </form>
            <CadastrarProducao
              vacaIndex={vacaIndex}
              open={openProducao}
              setOpen={setOpenProducao}
              produtor={formData}
              setProdutor={setFormData}
            />
            <CadastrarGado
              open={openGado}
              setOpen={setOpenGado}
              produtor={formData}
              setProdutor={setFormData}
            />
          </section>
        </span>
      </>
    );
  }
}
