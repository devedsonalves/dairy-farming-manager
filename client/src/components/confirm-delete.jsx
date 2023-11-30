"use client";

import { X } from "@phosphor-icons/react";
import { deleteById } from "../functions/deleteById";

export default function ConfirmDelete({
  id,
  produtores,
  isOpen,
  setSelectedProdutor,
}) {
  async function deletar() {
    await deleteById(id);

    const index = produtores.findIndex((produtor) => produtor.id == id);

    if (index != -1) produtores.splice(index, 1);

    setSelectedProdutor(null);

    location.reload();
  }

  if (isOpen) {
    return (
      <span className="bg-black bg-opacity-75 h-screen w-screen fixed top-0 left-0 flex justify-center items-center">
        <section className="bg-white min-w-[360px] p-4 rounded-md">
          <div className="flex justify-between items-cente border-b border-black pb-2">
            <p className="text-lg">ATENÇÃO</p>
            <button onClick={() => setSelectedProdutor(null)}>
              <X size={24} />
            </button>
          </div>
          <div className="pt-12">
            <p className="text-lg font-sans font-thin">
              Você tem certeza que deseja deletar esse produtor?
            </p>
            <div className="w-full flex justify-between items-center pt-8">
              <button
                onClick={() => setSelectedProdutor(null)}
                className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded-md"
              >
                Não
              </button>
              <button
                onClick={async () => await deletar()}
                className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded-md"
              >
                Sim
              </button>
            </div>
          </div>
        </section>
      </span>
    );
  }
}
