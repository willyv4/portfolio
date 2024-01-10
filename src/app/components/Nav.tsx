"use client";
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../../utils/funcs";
import Link from "next/link";
import { PersonalLogo } from "../assets/logo";
import meImage from "../assets/meImage.png";
import NextImage from "next/image";

const navigation = [
  { name: "Portfolio", href: "portfolio" },
  // { name: "Blog", href: "blog" },
  // { name: "About", href: "about" },
];

export default function Navbar() {
  const [current, setCurrent] = useState("");

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div
            className={classNames(
              "lg:fixed top-0 z-50 overflow-hidden w-full px-2 sm:px-6 lg:px-8 lg:bg-dominant-950 border-b border-dominant-800"
            )}
          >
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-dominant-400 hover:bg-dominant-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <Link
                className="flex flex-row items-center"
                href="/"
                onClick={() => setCurrent("/")}
              >
                <NextImage
                  src={meImage}
                  alt="Portrait Image of William Valadez"
                  className="size-10 rounded-full object-cover bg-dominant-50 filter grayscale flex-shrink-0"
                />
                <PersonalLogo
                  className="size-32 h-fit gap-x-4"
                  aria-hidden="true"
                />
              </Link>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center"></div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        onClick={() => setCurrent(item.name)}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.name === current
                            ? " text-primary-300"
                            : "text-dominant-300 hover:bg-dominant-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium bg-dominant-950"
                        )}
                        aria-current={
                          current === item.name ? "page" : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.name === current
                      ? "bg-dominant-900 text-white"
                      : "text-dominant-300 hover:bg-dominant-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.name === current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
