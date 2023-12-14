"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";

const schema = z.object({
  id: z.string(),
  title: z.string().trim().min(1, { message: "Obrigatório*" }),
  description: z.string().optional(),
});

interface Props {
  toggle: () => void;
}

type FormDataProps = z.infer<typeof schema>;

export const Form = ({ toggle }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormDataProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      id: uuidv4(),
      title: "",
      description: "",
    },
  });

  const onSubmitForm = () => {
    toggle();
  };

  return (
    <form
      className="flex flex-col gap-3 justify-center items-center"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <div className="flex flex-col">
        <label className="font-mono text-black text-xl font-bold mb-3">
          Título
        </label>
        <input
          {...register("title")}
          type="text"
          className="w-64 h-14 rounded-sm bg-white text-black shadow-md"
          maxLength={255}
        />
        {errors.title && <p className="text-black">{errors.title.message}</p>}
      </div>
      <div className="flex flex-col">
        <label className="font-mono text-black text-xl font-bold mb-3">
          Descrição
        </label>
        <textarea
          {...register("description")}
          className="w-64 h-14 rounded-sm bg-white text-black shadow-md"
          maxLength={255}
        />
      </div>
      <div>
        <button
          className="w-56 h-14 
        rounded-xl bg-black shadow-md hover:bg-slate-500 disabled:cursor-not-allowed"
          disabled={Boolean(errors.title)}
        >
          Adicionar
        </button>
      </div>
    </form>
  );
};
