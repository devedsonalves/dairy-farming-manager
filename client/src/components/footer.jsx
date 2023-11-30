"use client";

export default function Footer({ src }) {
  return (
    <footer className="bg-white font-serif flex flex-col justify-center items-center gap-4">
      <section className="bg-white shadow-inner py-6 w-full flex justify-evenly items-start">
        <div className="flex flex-col justify-start items-center">
          <h1 className="font-bold">DESENVOLVIDO POR</h1>
          <p>Carlos Eduardo Franco de Sá</p>
          <p>Edson Alves da Silva</p>
          <p>Wedne Morais de Araújo</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-black">LINKS</h1>
          <p>Código Fonte</p>
        </div>
      </section>
      <section className="bg-zinc-100 py-6 w-full flex flex-col justify-center items-center gap-2 shadow-inner">
        <img
          className="w-24 rounded-full border border-black"
          src={src}
          alt=""
        />
        <span className="flex justify-center items-center gap-1">
          <p className="text-xl flex justify-center items-center">©️</p>
          <p>Gerenciador de Pecuária Leiteira - Todos os direitos reservados</p>
        </span>
      </section>
    </footer>
  );
}
