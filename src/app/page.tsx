import Image from "next/image";

export default function Home() {
  return (
    <main   
      className="flex min-h-screen 
    flex-col items-center"
    >
      <header className="flex flex-col h-20 justify-center">
        <h3 className="font-mono text-4xl text-black font-extrabold">
          To do List
        </h3>
      </header>
      <div className="flex flex-col h-96 justify-center">
        <p className="font-mono text-black text-2xl font-bold mb-3">Login:</p>
        <input
          placeholder="e-mail"
          className="w-64 h-14 rounded-sm bg-white shadow-md"
        ></input>
        <button className="w-56 h-14 rounded-xl bg-black shadow-md hover:bg-slate-500">
          Entrar
        </button>
      </div>
      <footer className="flex flex-col h-96 justify-center">
        <Image
          src="/images/grupo-acert.svg"
          alt="Logo"
          width={200}
          height={100}
          loading="lazy"
        />
      </footer>
    </main>
  );
}
