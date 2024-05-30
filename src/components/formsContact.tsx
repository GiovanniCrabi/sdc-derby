"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  phone: Yup.string()
    .required("Telefone/WhatsApp é obrigatório")
    .matches(/^\d+$/, "Apenas números são permitidos"),
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  message: Yup.string().required("Mensagem é obrigatória"),
});

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues: FormValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  function sendEmail(e: any) {
    e.preventDefault();
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_FORMS_ID ?? "",
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? ""
      )
      .then(
        (result) => {
          console.log("Enviado");
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="w-full flex justify-center items-center mt-8 px-4 md:px-0">
      {isSubmitted ? (
        <div className="border border-green-400 text-green-700 px-4 py-3 rounded">
          Obrigado por nos contactar!
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
        >
          {({ isSubmitting }) => (
            <Form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Nome
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="name"
                  name="from_name"
                  disabled={isSubmitting}
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="name"
                  name="email"
                  disabled={isSubmitting}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Nome
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id="phone"
                  name="phone"
                  disabled={isSubmitting}
                />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Mensagem
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="message"
                  name="message"
                  disabled={isSubmitting}
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
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
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ContactForm;
