"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import { useLogin } from "@/app/contexts/LoginContext";
import { useRouter } from "next/navigation";

const schema = z.object({
  id: z.string(),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .min(1, { message: "Obrigatório*" }),
  pass: z.string().trim().min(1, { message: "Obrigatório*" }),
});

type FormDataProps = z.infer<typeof schema>;

export const FormLogin = () => {
  const { handleUserSave } = useLogin();
  const router = useRouter()
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
      email: "",
      pass: "",
    },
  });

  const onSubmitForm = (data: FormDataProps) => {
    handleUserSave(data);
    router.push('/to-do-list')
  };

  return (
    <form
      className="flex flex-col max-h-[25%] p-3 mb-20 gap-3 justify-center items-center"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <div className="flex flex-col">
        <label className="font-mono text-black text-xl font-bold mb-3">
          E-mail
        </label>
        <input
          {...register("email")}
          data-testid="email"
          type="text"
          className="w-64 h-14 rounded-sm bg-white text-black shadow-md"
          maxLength={255}
        />
        {errors.email && <p className="text-black">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col">
        <label className="font-mono text-black text-xl font-bold mb-3">
          Senha
        </label>
        <input
          {...register("pass")}
          data-testid="pass"
          type="password"
          className="w-64 h-14 rounded-sm bg-white text-black shadow-md"
          maxLength={64}
        />
        {errors.pass && <p className="text-black">{errors.pass.message}</p>}
      </div>
      <div>
        <button
          className="w-56 h-14 
        rounded-xl bg-black shadow-md hover:bg-slate-500 disabled:cursor-not-allowed"
          disabled={Boolean(errors.email) || Boolean(errors.pass)}
        >
          Entrar
        </button>
      </div>
    </form>
  );
};
