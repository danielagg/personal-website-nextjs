import React, { useEffect, useState } from "react";
import { Button } from "./button";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [hasValidationError, setHasValidationError] = useState(false);

  const [isSendingEmailInProgress, setIsSendingEmailInProgress] =
    useState(false);

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitFailure, setIsSubmitFailure] = useState(false);

  useEffect(() => {
    const anyFilled = !!(name || email || message);

    // if nothing is filled on the form, lets consider it as "initial state", it's not in error
    if (!anyFilled) {
      setHasValidationError(false);
      return;
    }

    const isValid = !!(name && email && message);
    setHasValidationError(!isValid);
  }, [name, email, message]);

  const onSubmit = async () => {
    const isValid = !!(name && email && message);
    if (!isValid) {
      setHasValidationError(true);
      return;
    }

    if (isSendingEmailInProgress) return;

    try {
      setIsSendingEmailInProgress(true);
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

      setIsSubmitSuccess(true);
      setTimeout(() => {
        setIsSubmitSuccess(false);
      }, 4000);

      // reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setIsSubmitFailure(true);
      setTimeout(() => {
        setIsSubmitFailure(false);
      }, 4000);
      console.error(error);
    }
    setIsSendingEmailInProgress(false);
  };

  const SubmitButton = () => {
    return (
      <Button
        variant="filled-gray-hover-white"
        onClick={async () => {
          await onSubmit();
        }}
      >
        <div className="w-full flex items-center justify-center space-x-2">
          {isSendingEmailInProgress && (
            <svg
              role="status"
              className="inline mr-2 w-6 h-6 text-gray-200 hover:text-green-500 animate-spin fill-gray-600 hover:fill-green-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          )}
          <div>{isSendingEmailInProgress ? "Sending..." : "Send"}</div>
        </div>
      </Button>
    );
  };

  return (
    <div
      id="contact"
      className="bg-green-500 dark:bg-[#0a101f] py-16 lg:py-32 mt-12 text-white dark:text-slate-400 w-full flex justify-center"
    >
      <div className="w-full lg:w-2/3 flex justify-center items-center px-10 lg:px-0">
        <div className="w-full">
          <div className="text-5xl font-bold">Get in Touch</div>

          <div className="flex flex-col lg:flex-row w-full lg:justify-between">
            <div className="w-full lg:w-2/5 flex flex-col space-y-8 mt-12">
              <TextInput
                id="fullname"
                label="Your name"
                value={name}
                setValue={setName}
                placeHolder="Enter your name here, please"
              />

              <TextInput
                id="email"
                label="Your email"
                value={email}
                setValue={setEmail}
                placeHolder="Enter your email address here, please"
              />

              <div className="hidden lg:inline-block">
                <SubmitButton />
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              <div className="mt-8 lg:mt-12 lg:pl-12">
                <label
                  htmlFor="message"
                  className="block font-bold dark:text-slate-400"
                >
                  Your message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here, please"
                  className="appearance-none text-gray-700 dark:text-slate-300 dark:bg-slate-900 p-2 rounded mt-1 w-full resize-none text-sm dark:placeholder:text-slate-600"
                  rows={11}
                />
              </div>
            </div>

            <div className="block lg:hidden mt-8">
              <SubmitButton />
            </div>
          </div>

          {hasValidationError && (
            <div className="mt-6">
              <ValidationError />
            </div>
          )}

          {isSubmitSuccess && (
            <div className="mt-6">
              <Success />
            </div>
          )}

          {isSubmitFailure && (
            <div className="mt-6">
              <SubmitError />
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
      <label htmlFor="fullname" className="block font-bold dark:text-slate-400">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        className="appearance-none text-gray-700 dark:text-slate-300 dark:bg-slate-900 p-2 rounded mt-1 w-full placeholder:text-sm dark:placeholder:text-slate-600"
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeHolder}
      />
    </div>
  );
};

const ValidationError = () => {
  return (
    <div className="flex items-start lg:items-center space-x-2 text-sm">
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
      <div className="w-3/4">
        Please make sure you have entered your name, email and message, before
        trying to press &apos;Send&apos;.
      </div>
    </div>
  );
};

const Success = () => {
  return (
    <div className="flex items-start lg:items-center space-x-2 text-sm">
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="w-3/4">
        Thank you! Your message was successfully sent to me.
      </div>
    </div>
  );
};

const SubmitError = () => {
  return (
    <div className="flex items-start lg:items-center space-x-2 text-sm">
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
      <div className="w-3/4">
        Sorry, your message could not be sent. Please try again later.
      </div>
    </div>
  );
};
