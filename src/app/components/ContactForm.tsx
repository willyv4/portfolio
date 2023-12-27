"use client";
import {
  Fragment,
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  FC,
  FormEventHandler,
  useContext,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { NotificationContext, NotificationContextProps } from "../context";

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
  const { setNotification } =
    useContext<NotificationContextProps>(NotificationContext);

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
    const URL = "https://api.emailjs.com/api/v1.0/email/send";
    const response = await axios.post(URL, {
      service_id: "service_uxogiui",
      template_id: "template_n4xc1va",
      user_id: "o1VIIGxnny6EGyVc0",
      template_params: formData,
    });
    if (response.status === 200) {
      setNotification({
        message: `Thanks for contacting me, ${formData.to_name}! I will get back to you within 24hrs!`,
        success: true,
      });
      setFormData(INITIAL_STATE);
    } else {
      setNotification({
        message: `Something went wrong`,
        success: false,
      });
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

        <div className="fixed top-0 sm:inset-0 z-10 w-screen overflow-y-auto">
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
              <Dialog.Panel className="relative transform overflow-hidden h-fit py-16 rounded-lg bg-dominant-950 px-4 text-left shadow-xl shadow-secondary-200/10 ring-[1px] ring-secondary-200/30 transition-all w-full max-w-full sm:max-w-lg">
                <form
                  className="flex flex-col space-y-2 sm:space-y-4 -mt-8"
                  onSubmit={handleSubmit}
                >
                  <h3 className="font-bold text-xl text-dominant-50 -mt-3 ml-0.5">
                    Contact 📧
                  </h3>
                  <div>
                    <label
                      htmlFor="from_name"
                      className="text-dominant-50 ml-0.5 text-sm hidden sm:block"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        onChange={handleChange}
                        type="from_name"
                        name="from_name"
                        id="from_name"
                        className="outline-none px-1.5 block w-full bg-dominant-900 rounded-md border-0 py-1.5 text-dominant-50 shadow-sm ring-1 ring-inset ring-dominant-800 placeholder:text-dominant-300/50 sm:text-sm sm:leading-6"
                        placeholder="Draco Malfoy"
                        value={formData.from_name}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-dominant-50 ml-0.5 text-sm hidden sm:block"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleChange}
                        required
                        type="from_email"
                        name="from_email"
                        id="from_email"
                        className="outline-none px-1.5 block w-full bg-dominant-900 rounded-md border-0 py-1.5 text-dominant-50 shadow-sm ring-1 ring-inset ring-dominant-800 placeholder:text-dominant-300/50 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        value={formData.from_email}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-dominant-50 ml-0.5 text-sm hidden sm:block"
                    >
                      Compose your message
                    </label>
                    <div className="mt-2">
                      <textarea
                        required
                        onChange={handleChange}
                        rows={4}
                        name="message"
                        id="message"
                        placeholder="Compose your message..."
                        className="outline-none px-1.5 block w-full bg-dominant-900 rounded-md border-0 py-1.5 text-dominant-50 shadow-sm ring-1 ring-inset ring-dominant-800 placeholder:text-dominant-300/50 sm:text-sm sm:leading-6"
                        value={formData.message}
                      />
                    </div>
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

export const Notification = () => {
  const { notification, setNotification } =
    useContext<NotificationContextProps>(NotificationContext);
  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={!!notification.message}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-dominant-800 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {notification.success ? (
                      <CheckCircleIcon
                        className="h-6 w-6 text-green-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <XCircleIcon
                        className="h-6 w-6 text-red-400"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-dominant-50">
                      {notification.success ? "Success!" : "Whoops!!!"}
                    </p>
                    <p className="mt-1 text-sm text-dominant-200">
                      {notification.message}
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md text-dominant-200 hover:text-dominant-500"
                      onClick={() =>
                        setNotification({ message: "", success: false })
                      }
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};
