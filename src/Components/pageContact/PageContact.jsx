import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, AlertTitle } from "@mui/material";

export const PageContact = () => {
  const [emailSend, setEmailSend] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        form.current,
        import.meta.env.VITE_KEY
      )
      .then(
        () => {
          setEmailSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col m-6 ">
      <label className="m-2 text-slate-50">Name</label>
      <input
        type="text"
        name="to_name"
        className="py-3 px-6 rounded-md border-y-2  border-slate-700"
      />
      <label className="m-2 text-slate-50">Email</label>
      <input
        type="email"
        name="from_name"
        className="py-3 px-6 rounded-md border-y-2  border-slate-700"
      />
      <label className="m-2 text-slate-50">Message</label>
      <textarea
        name="message"
        className="py-3 px-6 rounded-md border-y-2  border-slate-700"
      />
      <div className="flex items-center justify-end">
        <button className="w-48 text-slate-50 py-3 flex justify-center items-center px-6 bg-[#30d13e] my-4 rounded-md hover:bg-[#86f78f]">
          Send
        </button>
        {emailSend && (
          <Alert severity="success" className="flex">
            <AlertTitle>Success</AlertTitle>
            Ton message a été envoyé correctement.
          </Alert>
        )}
      </div>
    </form>
  );
};
