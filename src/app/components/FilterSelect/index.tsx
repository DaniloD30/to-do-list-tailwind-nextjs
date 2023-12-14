"use client";
export default function FilterSelect() {
  return (
    <>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
         focus:border-blue-500 block  p-2.5
          dark:bg-black dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500"
      >
        <option selected>Todas as tarefas</option>
        <option value="done">Concluídas</option>
        <option value="pending">Pendentes</option>
      </select>
    </>
  );
}
