"use client";
import {
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  InformationCircleIcon,
  EllipsisHorizontalIcon,
  XMarkIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { EarthIcon } from "../assets/logo";
import { classNames } from "../../../utils/funcs";
import { marked } from "marked";
import NextImage from "next/image";
import { pieces } from "./data";
import { gsap } from "gsap";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import googleScreenShot from "../assets/google-screenshot.png";

export default function Page() {
  const convertMarkdown = async (content: string) => {
    const html = await marked(content);

    return (
      <div
        className="text-dominant-200 prose text-sm"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    );
  };

  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const elements = elementsRef.current;

    const fadeInAndScaleUp = (element: gsap.TweenTarget) => {
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power1.inOut",
        }
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fadeInAndScaleUp(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );

    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return pieces.map((obj, i) => (
    <section
      key={obj.title + i}
      className="flex w-full mx-auto max-w-7xl justify-center -my-6 sm:my-24 lg:mt-28 px-6 sm:px-10"
    >
      <div
        ref={(el) => (elementsRef.current[i] = el)}
        className={classNames(
          `flex justify-between w-full mt-28 opacity-0`,
          i % 2 === 0
            ? "flex-col-reverse lg:flex-row"
            : "flex-col-reverse lg:flex-row-reverse"
        )}
      >
        <div className="w-full mx-0 md:mx-4 mt-8 lg:mt-0">
          <article className="h-full justify-center flex flex-col mx-auto max-w-xl">
            <div className="flex flex-wrap justify-between">
              <h3 className="text-3xl font-bold leading-6 neon-flicker text-primary-300 mb-3">
                <a target="_blank" href={obj.siteLink}>
                  {obj.title}
                </a>
              </h3>
              {obj.codeLink && (
                <div className="relative mr-20 mb-3">
                  <a
                    target="_blank"
                    href={obj.codeLink}
                    className="gap-x-2 text-xs bg-gradient-to-r from-primary-300 via-zinc-100 to-secondary-200 opacity-80 p-[1px] w-fit rounded-full absolute z-20 hover:opacity-100"
                  >
                    <div className="relative z-10 flex flex-row  items-center gap-x-2 rounded-full bg-dominant-950 px-3 py-1 text-dominant-50">
                      <p className="text-white">CODE</p>
                      <CodeBracketIcon className="size-3" />
                    </div>
                  </a>
                </div>
              )}
            </div>
            <div className="prose mt-5 line-clamp-3 text-md font-semibold leading-6 text-dominant-100">
              {obj.shortDescription}
            </div>

            {convertMarkdown(obj.content)}
            <div className="relative mt-8 flex items-center gap-x-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={obj.devImg}
                alt="Portrait Image of William Valadez"
                className="h-10 w-10 rounded-full bg-dominant-50"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-secondary-200">
                  <a href="">{obj.developer}</a>
                </p>
                <p className="text-dominant-300">{obj.role}</p>
              </div>
            </div>
          </article>
        </div>
        <BrowserMockup
          title={obj.title}
          siteLink={obj.siteLink}
          img={obj.img as unknown as string}
        />
      </div>
    </section>
  ));
}

interface TypingProps {
  text: string;
  typedText: string;
  setTypedText: Dispatch<SetStateAction<string>>;
}

const TypingEffect: FC<TypingProps> = ({ text, typedText, setTypedText }) => {
  const typingRef = useRef<HTMLSpanElement>(null);

  console.log(typedText);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let currentIndex = 0;
            const interval = setInterval(() => {
              if (currentIndex <= text.length) {
                setTypedText(text.slice(0, currentIndex));
                currentIndex++;
              } else {
                clearInterval(interval);
              }
            }, 70);

            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );

    if (typingRef.current) {
      observer.observe(typingRef.current);
    }

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span ref={typingRef} className="text-ellipses text-nowrap">
      {typedText}
    </span>
  );
};

interface MockUpProps {
  title: string;
  siteLink: string;
  img: string;
}

const BrowserMockup: FC<MockUpProps> = ({ title, siteLink, img }) => {
  const [typedText, setTypedText] = useState("");
  const image = siteLink.length === typedText.length ? img : googleScreenShot;
  return (
    <div className="relative mx-auto w-full sm:max-w-xl rounded-lg">
      <div className="py-3 space-x-4 flex flex-row bg-dominant-600 rounded-t-md">
        <div className="flex flex-row space-x-2 ml-4 mt-0.5">
          <svg
            className="size-2.5 fill-red-400"
            viewBox="0 0 6 6"
            aria-hidden="true"
          >
            <circle cx={3} cy={3} r={3} />
          </svg>
          <svg
            className="size-2.5 fill-yellow-400"
            viewBox="0 0 6 6"
            aria-hidden="true"
          >
            <circle cx={3} cy={3} r={3} />
          </svg>
          <svg
            className="size-2.5 fill-green-400"
            viewBox="0 0 6 6"
            aria-hidden="true"
          >
            <circle cx={3} cy={3} r={3} />
          </svg>
        </div>
        <div className="text-sm text-white flex flex-row bg-dominant-500 px-2 rounded-t-xl pb-4 -mt-2 pt-1">
          <EarthIcon className="size-3 mt-1 fill-white ml-0.5 mr-2" />
          {title}
          <XMarkIcon
            className="size-3 mt-1 fill-white ml-8 sm:ml-16"
            strokeWidth={3}
          />
        </div>
      </div>
      <div className="bg-dominant-500 py-1.5 flex flex-row -mt-5">
        <div className="hidden sm:flex flex-row space-x-2 sm:space-x-4 px-4 mt-2 text-dominant-200">
          <ArrowLeftIcon className="size-4" strokeWidth={3} />
          <ArrowRightIcon className="size-4" strokeWidth={3} />
          <ArrowPathIcon className="size-4" strokeWidth={3} />
        </div>
        <p className="flex flex-inline align-items text-nowrap w-full mr-2 sm:mr-0 ml-2 sm:ml-0 pr-2 sm:pr-12 pl-4 py-1 bg-dominant-400 text-white overflow-x-hidden rounded-full">
          <span className="mt-0.5 -ml-3 mr-2">
            <InformationCircleIcon className="size-6 -mt-0.5 p-0.5 stroke-white bg-dominant-500 rounded-full" />
          </span>
          <TypingEffect
            text={siteLink}
            typedText={typedText}
            setTypedText={setTypedText}
          />
        </p>
        <div className="hidden sm:flex flex-row space-x-4 px-4 mt-1 text-dominant-200">
          <EllipsisHorizontalIcon
            className="size-6 stroke-dominant-200"
            strokeWidth={2}
          />
        </div>
      </div>
      <div className="flex justify-center border-t border-dominant-500">
        <NextImage
          className="object-fit rounded-b-lg h-3/4"
          alt="city night sky"
          src={image}
          priority
        />
      </div>
    </div>
  );
};
