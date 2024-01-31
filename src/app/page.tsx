"use client";
import { useEffect, useMemo, useState } from "react";
import { classNames } from "../../utils/funcs";
import Image from "./assets/mypic.png";
import NextImage from "next/image";
import Link from "next/link";

const animations = [
  "animate-infinite-scroll-3",
  "animate-infinite-scroll-1",
  "animate-infinite-scroll-5",
  "animate-infinite-scroll-2",
  "animate-infinite-scroll-2",
  "animate-infinite-scroll-5",
  "animate-infinite-scroll-4",
  "animate-infinite-scroll",
  "animate-infinite-scroll-4",
  "animate-infinite-scroll-2",
  "animate-infinite-scroll",
  "animate-infinite-scroll-3",
  "animate-infinite-scroll-3",
  "animate-infinite-scroll-4",
  "animate-infinite-scroll-5",
  "animate-infinite-scroll-4",
  "animate-infinite-scroll",
  "animate-infinite-scroll",
  "animate-infinite-scroll",
  "animate-infinite-scroll-3",
  "animate-infinite-scroll-1",
  "animate-infinite-scroll-2",
  "animate-infinite-scroll",
  "animate-infinite-scroll-3",
  "animate-infinite-scroll-5",
  "animate-infinite-scroll-5",
  "animate-infinite-scroll-1",
  "animate-infinite-scroll-2",
  "animate-infinite-scroll",
  "animate-infinite-scroll",
  "animate-infinite-scroll-1",
  "animate-infinite-scroll-2",
  "animate-infinite-scroll-4",
  "animate-infinite-scroll",
  "animate-infinite-scroll-3",
  "animate-infinite-scroll-5",
  "animate-infinite-scroll-2",
  "animate-infinite-scroll-1",
];

const BinaryMarquee = () => {
  return useMemo(
    () => (
      <div className="absolute w-full flex flex-col top-0">
        {animations.map((animation, i) => (
          <div
            key={i + "outer-loop"}
            className={classNames(
              "flex items-center justify-center whitespace-nowrap",
              animation
            )}
          >
            {Array(300)
              .fill(null)
              .map((_, j) => (
                <div
                  key={j + "inner-loop"}
                  className={classNames(
                    "text-dominant-900/30 text-2xl tracking-widest",
                    j % 2 === 0 ? " text-primary-950/20" : ""
                  )}
                >
                  {Math.round(Math.random())}
                </div>
              ))}
          </div>
        ))}
      </div>
    ),
    []
  );
};

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
    <div className="relative overflow-hidden h-screen">
      <div className="fixed w-full top-16 flex flex-col">
        <BinaryMarquee />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="relative z-20 lg:w-full lg:max-w-2xl">
          <div className="relative px-8 h-screen sm:px-16 flex flex-col justify-center items-center">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight  text-primary-400/60 sm:text-6xl">
                {letterArray.map((char, i) => (
                  <span
                    key={char + i}
                    className={classNames(
                      `neon-flicker hover:text-primary-400 text-shadow-lg ${
                        randomNum % 2 === 0
                          ? i <= randomNum &&
                            "text-primary-400 neon-flicker-rand"
                          : i >= randomNum &&
                            "text-primary-400 neon-flicker-rand"
                      }`
                    )}
                  >
                    {char}
                  </span>
                ))}
              </h1>

              <p className="text-lg mt-6 font-semibold leading-8 text-white">
                Software Developer @ SoundSculpt | Fullstack: TypeScript, React,
                NodeJS, ExpressJS, NextJS, RemixJS | API Integrations | UI/UX
                Enthusiast | Python | Flask
              </p>
              <div className="mt-10 flex items-center gap-x-6 hover-orb">
                <Link
                  href="/portfolio"
                  className="rounded-md bg-primary-400 px-3.5 py-2.5 text-sm font-semibold text-dominant-950 shadow-sm hover:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Portfolio
                </Link>
                <div className="rounded-md px-3.5 py-2.5 text-xs font-semibold text-dominant-50">
                  blog & about coming soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:absolute h-full left-0 w-1/2 z-10 inset-0 bg-gradient-to-l from-dominant-950 to-transparent" />
      <div className="hidden lg:block lg:absolute -bottom-10 h-full lg:right-0 lg:w-1/2">
        <div className="absolute h-full z-10 inset-0 bg-gradient-to-r from-dominant-950 to-transparent" />
        <NextImage
          src={Image}
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full grayscale"
          alt="Person coding on a MacBook"
          priority
        />
      </div>
    </div>
  );
}
