"use client";

import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { TextInput } from "./components/TextInput";
import { Success } from "./contact/Success";
import { ValidationError } from "./contact/ValidationError";
import { SubmitError } from "./contact/SubmitError";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

interface ContactFormState {
  hasValidationError: boolean;
  isSendingEmailInProgress: boolean;
  isSubmitSuccess: boolean;
  isSubmitFailure: boolean;
}

export const Contact = () => {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState<ContactFormState>({
    hasValidationError: false,
    isSendingEmailInProgress: false,
    isSubmitSuccess: false,
    isSubmitFailure: false,
  });

  const areAnyFieldsOnFormFilled =
    values.name.length > 0 || values.email.length > 0 || values.name.length > 0;

  const areFormValuesInvalid =
    values.name.length > 0 && values.email.length > 0 && values.name.length > 0;

  useEffect(() => {
    // if nothing is filled on the form, lets consider it as "initial state", it's not in error
    if (!areAnyFieldsOnFormFilled) {
      setFormState((prev) => ({
        ...prev,
        hasValidationError: false,
      }));
      return;
    }

    // we make sure all fields are filled
    setFormState((prev) => ({
      ...prev,
      hasValidationError: areFormValuesInvalid,
    }));
  }, [values]);

  const onSubmit = async () => {
    if (!areFormValuesInvalid) {
      setFormState((prev) => ({
        ...prev,
        hasValidationError: true,
      }));
      return;
    }

    if (formState.isSendingEmailInProgress) return;

    try {
      setFormState((prev) => ({ ...prev, isSendingEmailInProgress: true }));

      const res = await fetch(
        `/contact?name=${values.name}&email=${values.email}&message=${values.message}`,
        {
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }

      // if we succeeded, for a few sec we show a feedback to the user
      setFormState((prev) => ({ ...prev, isSubmitSuccess: true }));
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSubmitSuccess: false }));
      }, 4000);

      // reset form
      setValues({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // if we failed, again show feedback to the user for a few sec
      setFormState((prev) => ({ ...prev, isSubmitFailure: true }));
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSubmitFailure: false }));
      }, 4000);
    }
    setFormState((prev) => ({ ...prev, isSendingEmailInProgress: false }));
  };

  const SubmitButton = () => {
    return (
      <Button
        onClick={async () => {
          await onSubmit();
        }}
      >
        <div className="w-full flex items-center justify-center space-x-2">
          {formState.isSendingEmailInProgress && (
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
          <div>
            {formState.isSendingEmailInProgress ? "Sending..." : "Send"}
          </div>
        </div>
      </Button>
    );
  };

  return (
    <section id="contact" className="w-full my-40 flex justify-center">
      <div className="w-full flex justify-center items-center">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-gray-light dark:text-gray-dark text-center">
            Get in Touch
          </h1>

          <section className="flex flex-col lg:flex-row w-full lg:justify-between">
            <div className="w-full lg:w-2/5 flex flex-col space-y-8 mt-12">
              <TextInput
                id="fullname"
                label="Your name"
                value={values.name}
                setValue={(newValue) =>
                  setValues((prev) => ({ ...prev, name: newValue }))
                }
                placeHolder="Enter your name here"
              />

              <TextInput
                id="email"
                label="Your email"
                value={values.email}
                setValue={(newValue) =>
                  setValues((prev) => ({ ...prev, email: newValue }))
                }
                placeHolder="Enter your email address here"
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
                  value={values.message}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="Write your message here"
                  className="appearance-none text-gray-700 dark:text-slate-300 dark:bg-slate-900 p-2 rounded mt-1 w-full resize-none text-sm dark:placeholder:text-slate-600 border border-slate-300 dark:border-none"
                  rows={11}
                />
              </div>
            </div>

            <div className="block lg:hidden mt-8">
              <SubmitButton />
            </div>
          </section>

          {formState.hasValidationError && (
            <div className="mt-6">
              <ValidationError />
            </div>
          )}

          {formState.isSubmitSuccess && (
            <div className="mt-6">
              <Success />
            </div>
          )}

          {formState.isSubmitFailure && (
            <div className="mt-6">
              <SubmitError />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
