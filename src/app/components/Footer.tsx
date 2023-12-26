"use client";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Github, LinkedIn } from "../assets/logo";
import { ContactForm } from "./ContactForm";
import { useState } from "react";

const navigation = [
  {
    name: "LinkedIn",
    href: "#",
    icon: LinkedIn,
  },

  {
    name: "GitHub",
    href: "#",
    icon: Github,
  },
];

export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="bg-gradient-to-bl from-primary-300 via-dominant-50 to-secondary-200 px-2 py-6 fixed z-50 -bottom-5 -left-4 w-10 h-56 rounded-tr-md">
      <div className="-rotate-90 absolute space-x-3 -left-[70px] bottom-[90px] divide-x-2 divide-dominant-950 flex flex-row items-center justify-center">
        <button
          onClick={() => setOpen(true)}
          className="items-center space-x-1 rounded-l-full flex flex-row pl-8"
        >
          <p className="font-black">Contact</p>
          <EnvelopeIcon className="rotate-90 fill-dominant rounded-b-full size-4" />
        </button>
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-dominant-950 hover:text-gray-500 pl-2"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="rotate-90 size-4" aria-hidden="true" />
          </Link>
        ))}
      </div>
      <ContactForm open={open} setOpen={setOpen} />
    </footer>
  );
}
