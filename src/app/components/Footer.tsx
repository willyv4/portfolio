"use client";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Github, LinkedIn } from "../assets/logo";
import { ContactForm } from "./ContactForm";
import { useState } from "react";

const navigation = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/williamvaladez/",
    icon: LinkedIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/willyv4",
    icon: Github,
  },
];

export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="fixed z-50 bottom-0 w-full flex justify-center">
      <div className="relative w-fit bg-gradient-to-bl px-2 py-1 from-primary-300 via-dominant-50 to-secondary-200 rounded-t">
        <div className="space-x-3 divide-x-2 px-2 divide-dominant-950 flex flex-row items-center justify-center">
          <button
            onClick={() => setOpen(true)}
            className="items-center space-x-1 rounded-l-full flex flex-row "
          >
            <p className="font-black">Contact</p>
            <EnvelopeIcon className="fill-dominant rounded-b-full size-5" />
          </button>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-dominant-950 hover:text-gray-900 pl-2"
            >
              <item.icon className="size-5" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <ContactForm open={open} setOpen={setOpen} />
      </div>
    </footer>
  );
}
