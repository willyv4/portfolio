"use client";
import {
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  InformationCircleIcon,
  EllipsisHorizontalIcon,
  XMarkIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
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
import meImage from "../assets/meImage.png";
import Link from "next/link";

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

  return (
    <div className="py-10">
      {" "}
      {pieces.map((obj, i) => (
        <section
          key={obj.title + i}
          className="flex items-center w-full mx-auto max-w-7xl justify-center -mt-12 mb-16 sm:my-24 lg:mt-28 px-6 sm:px-10"
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
                <div className="flex flex-wrap items-center space-x-3 divide-x-2 mb-3">
                  <h3 className="text-3xl font-bold leading-6 text-white">
                    <Link target="_blank" href={obj.siteLink}>
                      {obj.title}
                    </Link>
                  </h3>
                  {obj.siteLink && (
                    <h3 className="text-3xl font-bold leading-6 neon-flicker pl-3 text-primary-300">
                      <Link
                        href={obj.siteLink}
                        target="_blank"
                        className="relative z-10 flex flex-row items-center"
                      >
                        Site
                      </Link>
                    </h3>
                  )}
                  {obj.codeLink && (
                    <h3 className="text-3xl font-bold leading-6 neon-flicker text-primary-300 pl-3">
                      <Link
                        href={obj.codeLink}
                        target="_blank"
                        className="relative z-10 flex flex-row items-center"
                      >
                        Code
                      </Link>
                    </h3>
                  )}
                </div>
                <div className="prose mt-5 line-clamp-3 text-md font-semibold leading-6 text-dominant-100">
                  {obj.shortDescription}
                </div>

                {convertMarkdown(obj.content)}
                <div className="relative mt-8 flex items-center gap-x-4 transition ease-in-out duration-500">
                  <NextImage
                    src={meImage}
                    alt="Portrait Image of William Valadez"
                    className="h-10 w-10 object-fit rounded-full bg-dominant-50"
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
      ))}
    </div>
  );
}

interface TypingProps {
  text: string;
  typedText: string;
  setTypedText: Dispatch<SetStateAction<string>>;
}

const TypingEffect: FC<TypingProps> = ({ text, typedText, setTypedText }) => {
  const typingRef = useRef<HTMLSpanElement>(null);

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
            }, 40);

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
    <span
      ref={typingRef}
      className="tracking-tighter text-ellipses text-nowrap"
    >
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
    <div className="relative  mx-auto h-fit w-full sm:max-w-xl rounded-xl overflow-hidden ring-1 ring-white">
      <div className="py-3 flex flex-row items-center bg-dominant pb-4 px-4">
        <div className="flex flex-row space-x-2">
          <svg
            className="size-2.5 stroke-white rounded-full"
            viewBox="0 0 6 6"
            aria-hidden="true"
          >
            <circle cx={3} cy={3} r={3} />
          </svg>
          <svg
            className="size-2.5 stroke-white rounded-full"
            viewBox="0 0 6 6"
            aria-hidden="true"
          >
            <circle cx={3} cy={3} r={3} />
          </svg>
          <svg
            className="size-2.5 stroke-white rounded-full"
            viewBox="0 0 6 6"
            aria-hidden="true"
          >
            <circle cx={3} cy={3} r={3} />
          </svg>
        </div>
        <div className="text-sm text-white flex flex-row bg-dominant px-2 pl-12">
          {siteLink.length === typedText.length ? (
            <EarthIcon className="size-3 mt-1 fill-white ml-0.5 mr-2" />
          ) : (
            <ArrowPathIcon className="animate-spin size-3 mt-1 stroke-blue-300 ml-0.5 mr-2" />
          )}
          {siteLink.length === typedText.length ? title : "Google"}
          <XMarkIcon
            className="size-3 mt-1 fill-white ml-8 sm:ml-16"
            strokeWidth={3}
          />
        </div>
      </div>
      <div className="bg-dominant pb-3 flex flex-row px-4">
        <div className="hidden sm:flex flex-row space-x-3 mt-2 mr-5 text-dominant-200">
          <ArrowLeftIcon className="size-4" strokeWidth={3} />
          <ArrowRightIcon className="size-4" strokeWidth={3} />
          <ArrowPathIcon className="size-4" strokeWidth={3} />
        </div>
        <p className="flex flex-inline align-items text-nowrap w-full pl-4 py-1 bg-dominant ring-1 ring-white text-white overflow-x-hidden rounded-full">
          <span className="mt-0.5 -ml-3 mr-2">
            <InformationCircleIcon className="size-6 -mt-0.5  stroke-white bg-dominant rounded-full" />
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
      <div className="flex justify-center ">
        <NextImage
          className="object-fit opacity-80 rounded-b-lg h-3/4"
          alt="image of a website"
          src={image}
          priority
        />
      </div>
    </div>
  );
};
