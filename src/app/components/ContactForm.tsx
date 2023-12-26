"use client";
import {
  Fragment,
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  FC,
  FormEventHandler,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

const serviceId = "service_uxogiui";
const templateId = "template_n4xc1va";
const publicKey = "o1VIIGxnny6EGyVc0";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
  to_name: string;
}

const INITIAL_STATE = {
  from_name: "",
  from_email: "",
  to_name: "Will Valadez",
  message: "",
};

export const ContactForm: FC<Props> = ({ open, setOpen }) => {
  const [formData, setFormData] = useState<FormData>(INITIAL_STATE);
  const [data, setData] = useState<FormData>();

  const handleChange = (
    evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (evt) => {
    evt.preventDefault();
    setData(formData);
    setFormData(INITIAL_STATE);
    const URL = "https://api.emailjs.com/api/v1.0/email/send";
    const response = await axios.post(URL, {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: data,
    });
    if (response.status === 200) {
      setFormData(INITIAL_STATE);
      setData(INITIAL_STATE);
    } else {
      // add custom alert
      alert("SOMETHING WENT WRONG");
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-dominant-950 bg-opacity-90 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-90"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-90"
            >
              <Dialog.Panel className="relative transform overflow-hidden h-fit py-16 rounded-lg bg-dominant-950 px-4 text-left shadow-xl shadow-secondary-200/10 ring-[1px] ring-secondary-200/30 transition-all w-full max-w-lg">
                <form
                  className="flex flex-col space-y-4 -mt-8"
                  onSubmit={handleSubmit}
                >
                  <h3 className="font-bold text-xl text-dominant-50 -mt-3 ml-0.5">
                    Contact
                  </h3>
                  <div>
                    <label htmlFor="from_name" className="sr-only">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        onChange={handleChange}
                        type="from_name"
                        name="from_name"
                        id="from_name"
                        className="outline-none px-1.5 block w-full bg-dominant-900 rounded-md border-0 py-1.5 text-dominant-50 shadow-sm ring-1 ring-inset ring-dominant-800 placeholder:text-dominant-300/50 sm:text-sm sm:leading-6"
                        placeholder="Draco Malfoy..."
                        value={formData.from_name}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <div>
                      <input
                        onChange={handleChange}
                        required
                        type="from_email"
                        name="from_email"
                        id="from_email"
                        className="outline-none px-1.5 block w-full bg-dominant-900 rounded-md border-0 py-1.5 text-dominant-50 shadow-sm ring-1 ring-inset ring-dominant-800 placeholder:text-dominant-300/50 sm:text-sm sm:leading-6"
                        placeholder="you@example.com..."
                        value={formData.from_email}
                      />
                    </div>
                  </div>
                  <label htmlFor="message" className="sr-only">
                    Compose your message
                  </label>
                  <div className="mt-2">
                    <textarea
                      required
                      onChange={handleChange}
                      rows={4}
                      name="message"
                      id="message"
                      placeholder="Please enter your Email or a Phone number and a message 😁..."
                      className="outline-none px-1.5 block w-full bg-dominant-900 rounded-md border-0 py-1.5 text-dominant-50 shadow-sm ring-1 ring-inset ring-dominant-800 placeholder:text-dominant-300/50 sm:text-sm sm:leading-6"
                      value={formData.message}
                    />
                  </div>
                  <div className="relative w-full">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-primary-300 via-zinc-100 to-secondary-200 opacity-80 p-[1px] w-full rounded-full absolute z-20 hover:opacity-100"
                    >
                      <div className="bg-dominant-950 rounded-full px-3 py-1 text-sm leading-6 text-dominant-300">
                        Send Message
                      </div>
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
