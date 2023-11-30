"use client";

import { CaretLeft } from "@phosphor-icons/react";
import { useState } from "react";

export default function Detalhes({
  produtorData,
  isOpen,
  setSelectedProdutor,
}) {
  const [produtor, setProdutor] = useState(produtorData);

  console.log(produtor);

  if (isOpen) {
    return (
      <>
        <span className="bg-zinc-100 fixed h-screen w-screen top-0 left-0 flex justify-center items-center py-16">
          <button
            className="fixed top-6 left-6 p-2 flex justify-center items-center bg-white border border-black rounded-full"
            onClick={() => setSelectedProdutor(null)}
          >
            <CaretLeft size={24} />
          </button>
          <section className="bg-white shadow-lg flex flex-col justify-center items-start  font-serif p-4 rounded-md w-[640px] max-h-[90vh]">
            <div className="w-full flex justify-center items-center border-b border-zinc-300 pb-2">
              <p className="font-semibold text-xl uppercase tracking-wider">
                Detalhes do produtor
              </p>
            </div>
            <div className="w-full my-8 overflow-y-auto">
              <p>Id: {produtor?.id}</p>
              <p>Nome: {produtor?.nome}</p>
              <p>Idade: {produtor?.idade}</p>
              <p>Endereço: {produtor?.endereco}</p>
              <p>Preço do leite: {produtor?.precoLeite} R$</p>
              <p className="text-xl mt-4 mb-2">Gado:</p>
              {produtor?.gado.length == 0 ? (
                <p>Nenhum gado cadastrado</p>
              ) : (
                <>
                  {produtor?.gado.map((vaca, index) => (
                    <div key={index} className="mb-2">
                      <details>
                        <summary>
                          {vaca.raca} ({vaca.fase})
                        </summary>
                        <p className="font-semibold my-1">
                          Registro de produção:
                        </p>
                        <div className="flex flex-col gap-4">
                          {vaca.producao.length == 0 ? (
                            <p className="ml-4">Nenhuma produção registrada</p>
                          ) : (
                            <>
                              {vaca.producao.map((producao, indexProducao) => (
                                <details key={indexProducao} className="ml-4">
                                  <summary>Data: {producao?.data} </summary>
                                  <p className="ml-4">
                                    Litros produzidos: {producao?.litros} L
                                  </p>
                                  <p className="ml-4">
                                    Receita:{" "}
                                    {Number(producao?.receita).toFixed(2)} R$
                                  </p>
                                </details>
                              ))}
                            </>
                          )}
                        </div>
                      </details>
                    </div>
                  ))}
                </>
              )}
            </div>
          </section>
        </span>
      </>
    );
  }
}
