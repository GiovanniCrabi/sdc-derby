"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  phone: z
    .string()
    .min(1, "Telefone/WhatsApp é obrigatório")
    .refine((val) => /^\d+$/.test(val), "Apenas números são permitidos"),
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log(data);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="w-full flex justify-center items-center mt-8 px-4 md:px-0">
      {isSubmitted ? (
        <div className="border border-green-400  text-green-700 px-4 py-3 rounded">
          Obrigado por enviar o formulário!
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Nome
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              {...register("name")}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Telefone/WhatsApp
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="phone"
              {...register("phone")}
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              {...register("email")}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Sua mensagem
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full h-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              {...register("message")}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-red-500 text-xs italic">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
