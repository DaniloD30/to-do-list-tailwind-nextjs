export default function ToDoList() {
  return (
    <div
      className="flex min-h-screen 
    flex-col items-center"
    >
      <header className="flex flex-col h-20 justify-center min-w-full bg-yellow-200 items-center">
        <h3 className="font-mono text-4xl text-black font-extrabold">
          To do List
        </h3>
      </header>
      <hr className=" h-1 border-slate-950 min-w-full" />
      <div className="flex min-w-full p-4 gap-4 items-center justify-center">
        <button className="w-56 h-10 rounded-xl bg-black shadow-md hover:bg-slate-500">
          Adicionar Tarefa +
        </button>
        <button className="w-56 h-10 rounded-xl bg-black shadow-md hover:bg-slate-500">
          Tarefas Concluidas
        </button>
        <button className="w-56 h-10 rounded-xl bg-black shadow-md hover:bg-slate-500">
          Tarefas Pendentes
        </button>
      </div>
      <hr className="border-x-orange-200 min-w-full" />
      <div className="flex min-w-full p-8 gap-5">
        <div className="w-64 h-48 rounded-sm bg-white shadow-md">
          <div className="text-2xl font-extrabold text-black">Tarefa 1</div>
          <div className="text-xl font-bold text-black">Descrição</div>
        </div>
        <div className="w-64 h-48 rounded-sm bg-white shadow-md">
          <div className="text-2xl font-extrabold text-black">Tarefa 1</div>
          <div className="text-xl font-bold text-black">Descrição</div>
        </div>
        <div className="w-64 h-48 rounded-sm bg-white shadow-md">
          <div className="text-2xl font-extrabold text-black">Tarefa 1</div>
          <div className="text-xl font-bold text-black">Descrição</div>
        </div>
      </div>
    </div>
  );
}
