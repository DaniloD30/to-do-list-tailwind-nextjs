import Image from "next/image";
import LayoutContainer from "./components/Layouts";

export default function Home() {
  return (
    <LayoutContainer>
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
    </LayoutContainer>
  );
}
