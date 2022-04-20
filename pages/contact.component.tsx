import React, { useState } from "react";
import { Button } from "./button";
// import axios from "axios";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userTriedSubmittingAtLeastOnce, setUserTriedSubmittingAtLeastOnce] =
    useState(false);

  const onSubmit = async () => {
    try {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email,
          name,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
      // console.log(fullname, email, subject, message);

      //   const response = await axios.post(
      //     `https://api.sendgrid.com/v3/mail/send`,
      //     {
      //       personalizations: [
      //         {
      //           to: [
      //             {
      //               email: "daniel.agg@outlook.com",
      //             },
      //           ],
      //         },
      //       ],
      //       from: {
      //         email: email,
      //       },
      //       subject: "Contact from Personal Site",
      //       content: [
      //         {
      //           type: "text/plain",
      //           value: `${name}, said: ${message}`,
      //         },
      //       ],
      //     },
      //     {
      //       headers: {
      //         "Content-Type": "application/json",
      //         Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
      //       },
      //     }
      //   );
      //   return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      id="contact"
      className="bg-green-500 py-32 mt-12 text-white w-full flex justify-center"
    >
      <div className="w-full lg:w-2/3 flex justify-center items-center">
        <div className="w-full">
          <div className="text-5xl font-bold">Get in Touch</div>

          <div className="flex w-full justify-between">
            <div className="w-2/5 flex flex-col space-y-8 mt-12">
              <TextInput
                id="fullname"
                label="Your name"
                value={name}
                setValue={setName}
                placeHolder="Please, enter your name here"
              />

              <TextInput
                id="email"
                label="Your email"
                value={email}
                setValue={setEmail}
                placeHolder="Please, enter your email address here"
              />

              <Button
                variant="filled-gray-hover-white"
                text="Send"
                className="inline-block"
                onClick={async () => {
                  setUserTriedSubmittingAtLeastOnce(true);

                  const res = await onSubmit();
                  console.log(res);
                }}
              />
            </div>
            <div className="w-3/5">
              <div className="mt-12 pl-12">
                <label htmlFor="message" className="block font-bold">
                  Your message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please, enter your message here"
                  className="appearance-none text-gray-700 p-2 rounded mt-1 w-full resize-none text-sm"
                  rows={11}
                />
              </div>
            </div>
          </div>

          {!name && !email && !message && userTriedSubmittingAtLeastOnce && (
            <div className="mt-6">
              <Error />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TextInput = ({
  id,
  label,
  value,
  setValue,
  placeHolder,
}: {
  id: string;
  label: string;
  value: string;
  setValue: (newValue: string) => void;
  placeHolder: string;
}) => {
  return (
    <div>
      <label htmlFor="fullname" className="block font-bold">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        className="appearance-none text-gray-700 p-2 rounded mt-1 w-full"
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeHolder}
      />
    </div>
  );
};

const Error = () => {
  return (
    <div className="flex items-center space-x-2 text-sm font-bold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <div className="">
        Please make sure you have entered your name, email and your message,
        before trying to press 'Send' again.
      </div>
    </div>
  );
};
