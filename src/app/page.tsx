"use client";
import { useEffect, useState } from "react";
import { classNames } from "../../utils/funcs";
import Image from "./assets/mypic.png";
import NextImage from "next/image";

export default function Home() {
  const [randomNum, setRandomNum] = useState(0);
  const letterArray = "Will V. Fullstack Software Engineer".split("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomNum(Math.floor(Math.random() * letterArray.length));
    }, 1800);

    return () => clearInterval(intervalId);
  }, [letterArray.length]);

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 overflow-y-hidden right-8 hidden h-full w-80 translate-x-1/2 transform fill-zinc-950 lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-32 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-16 sm:flex">
                <div className="bg-gradient-to-r from-primary-300 via-zinc-100 to-secondary-200 opacity-80 p-[1px] w-fit rounded-full absolute z-20 hover:opacity-100">
                  <div className="bg-dominant-950 rounded-full px-3 py-1 text-sm leading-6 text-gray-300">
                    Get to know me more checkout my about me section.{" "}
                    <a
                      href="#"
                      className=" whitespace-nowrap font-semibold text-secondary-200"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      About me <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight  text-primary-300/60 sm:text-6xl">
                {letterArray.map((char, i) => (
                  <span
                    key={char + i}
                    className={classNames(
                      `neon-flicker hover:text-primary-300 text-shadow-lg ${
                        randomNum % 2 === 0
                          ? i <= randomNum &&
                            "text-primary-300 neon-flicker-rand"
                          : i >= randomNum &&
                            "text-primary-300 neon-flicker-rand"
                      }`
                    )}
                  >
                    {char}
                  </span>
                ))}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Software Developer @ SoundSculpt | Fullstack: TypeScript, React,
                NodeJS, ExpressJS, NextJS, RemixJS | API Integrations | UI/UX
                Enthusiast | Python | Flask
              </p>
              <div className="mt-10 flex items-center gap-x-6 hover-orb">
                <a
                  href="#"
                  className="rounded-md bg-secondary-200 px-3.5 py-2.5 text-sm font-semibold text-dominant-950 shadow-sm hover:bg-secondary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-secondary-200"
                >
                  Blog <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <NextImage
          src={Image}
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          alt="Person coding on a macbook"
          priority
        />
      </div>
    </div>
  );
}
