import React, { useEffect, useState } from "react";
import { Button } from "./button";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userTriedSubmittingAtLeastOnce, setUserTriedSubmittingAtLeastOnce] =
    useState(false);

  const [trackingErrors, setTrackingErrors] = useState(true);

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitFailure, setIsSubmitFailure] = useState(false);

  useEffect(() => {
    setTrackingErrors(!!(name || email || message));
  }, [name, email, message]);

  const hasValidationErrors =
    (!name || !email || !message) &&
    userTriedSubmittingAtLeastOnce &&
    trackingErrors;

  const onSubmit = async () => {
    if (name && email && message) {
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

        setIsSubmitSuccess(true);
        setTimeout(() => {
          setIsSubmitSuccess(false);
        }, 4000);

        // reset form
        setName("");
        setEmail("");
        setMessage("");

        // reset validation handling
        setUserTriedSubmittingAtLeastOnce(false);
        setTrackingErrors(false);
      } catch (error) {
        setIsSubmitFailure(true);
        setTimeout(() => {
          setIsSubmitFailure(false);
        }, 4000);
        console.error(error);
      }
    }
  };

  const SubmitButton = () => {
    return (
      <Button
        variant="filled-gray-hover-white"
        text="Send"
        onClick={async () => {
          setUserTriedSubmittingAtLeastOnce(true);
          await onSubmit();
        }}
      />
    );
  };

  return (
    <div
      id="contact"
      className="bg-green-500 py-16 lg:py-32 mt-12 text-white w-full flex justify-center"
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
                placeHolder="Please, enter your name here"
              />

              <TextInput
                id="email"
                label="Your email"
                value={email}
                setValue={setEmail}
                placeHolder="Please, enter your email address here"
              />

              <div className="hidden lg:inline-block">
                <SubmitButton />
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              <div className="mt-8 lg:mt-12 lg:pl-12">
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

            <div className="block lg:hidden mt-8">
              <SubmitButton />
            </div>
          </div>

          {hasValidationErrors && (
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
        Please make sure you have entered your name, email and your message,
        before trying to press &apos;Send&apos; again.
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
