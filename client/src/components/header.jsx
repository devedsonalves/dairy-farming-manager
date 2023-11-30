"use client";

export default function Header({ src }) {
  return (
    <header className="bg-white flex justify-between items-center px-12 shadow-md shadow-black">
      <span className="flex justify-center items-center gap-8 text-[1.05rem] font-serif">
        <a href="/" className="hover:underline">
          PRODUTORES
        </a>
        <a href="/cadastrar" className="hover:underline">
          CADASTRAR
        </a>
      </span>
      <a className="cursor-pointer" href="/">
        <img src={src} alt="" className="w-28" />
      </a>
    </header>
  );
}
