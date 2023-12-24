import {
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  InformationCircleIcon,
  EllipsisHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { EarthIcon } from "../assets/logo";

const pieces = [
  {
    role: "Contributer",
    title: "SoundSculpt",
    shortDescription: "Realtime customizable music for video creators.",
    type: "web",
    img: "",
    siteLink: "https://soundsculpt.app/",
    codeLink: "",
    content: "",
    techStack: "",
    creationDate: "",
  },
  {
    role: "Project",
    title: "DevHead",
    shortDescription:
      "Social Media app for developers - integrate github and leetcode - streamline your portfolio site.",
    type: "web",
    img: "",
    siteLink: "https://dev-head-willyv4.vercel.app",
    codeLink: "",
    content: "",
    techStack: "",
    creationDate: "",
  },
  {
    role: "Project",
    title: "CrimeScope",
    shortDescription: "AI safety tips according to crime data.",
    type: "web",
    img: "",
    siteLink: "https://crime-scope.herokuapp.com/signup",
    codeLink: "",
    content: "",
    techStack: "",
    creationDate: "",
  },
  {
    role: "Project",
    title: "Jobly",
    shortDescription: "A job search web clone.",
    type: "web",
    img: "",
    siteLink: " https://jobly-bywillv.onrender.com/",
    codeLink: "",
    content: "",
    techStack: "",
    creationDate: "",
  },
  {
    role: "Project",
    title: "SnapShuflle",
    shortDescription: "An image search website.",
    type: "web",
    img: "",
    siteLink: "https://snapshuffle.netlify.app/",
    codeLink: "",
    content: "",
    techStack: "",
    creationDate: "",
  },
  {
    role: "Project",
    title: "Boggle",
    shortDescription: "An image search website.",
    type: "web",
    img: "",
    siteLink: "https://boggle-ecru.vercel.app/",
    codeLink: "",
    content: "",
    techStack: "",
    creationDate: "",
  },
  {
    role: "Project",
    title: "Weather App",
    shortDescription: "every developers first website.",
    type: "web",
    img: "",
    siteLink: "https://weathered300.netlify.app/",
    codeLink: "",
    content: "",
    techStack: "",
    creationDate: "",
  },
  {
    role: "Project",
    title: "Connect4",
    shortDescription: "Get four in a row and you win!",
    type: "web",
    img: "",
    siteLink: "https://connect4-3000.netlify.app/",
    codeLink: "",
    content: "",
    techStack: "",
    creationDate: "",
  },
  {
    role: "Project",
    title: "Dank Memez",
    shortDescription: "Create some crazy memes and troll the internet!",
    type: "web",
    img: "",
    siteLink: "https://dankmemegenerator.netlify.app/",
    codeLink: "",
    content: "",
    techStack: "",
    creationDate: "",
  },
];

// https://jobly-bywillv.onrender.com/

export default function Page() {
  return (
    <section className="mt-16 px-6 sm:px-10">
      {/* {pieces.map((piece) => (
        <div>{}</div>
      ))} */}
      <div className="relative last:border border-dominant-500 mx-auto w-full sm:max-w-3xl rounded-lg">
        <div className="py-3 space-x-4 flex flex-row bg-dominant-600 rounded-t-md">
          <div className="flex flex-row space-x-2 ml-4 mt-0.5">
            <svg
              className="size-2.5 fill-green-400"
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
              className="size-2.5 fill-red-400"
              viewBox="0 0 6 6"
              aria-hidden="true"
            >
              <circle cx={3} cy={3} r={3} />
            </svg>
          </div>
          <div className="text-sm text-white flex flex-row bg-dominant-500 px-2 rounded-t-xl pb-4 -mt-2 pt-1">
            <EarthIcon className="size-3 mt-1 fill-white ml-0.5 mr-2" />
            DaisyUI
            <XMarkIcon
              className="size-3 mt-1 fill-white ml-16"
              strokeWidth={3}
            />
          </div>
        </div>
        <div className="bg-dominant-500 py-1.5 flex flex-row -mt-5">
          <div className="flex flex-row space-x-2 sm:space-x-4 px-4 mt-2 text-dominant-200">
            <ArrowLeftIcon className="size-4" strokeWidth={3} />
            <ArrowRightIcon className="size-4" strokeWidth={3} />
            <ArrowPathIcon className="size-4" strokeWidth={3} />
          </div>
          <p className="flex flex-row align-items w-full input pr-2 sm:pr-12 pl-4 py-1 bg-dominant-400 text-white text-ellipsis rounded-full overflow-hidden">
            <span className="mt-0.5 -ml-3 mr-2">
              <InformationCircleIcon className="size-6 -mt-0.5 p-0.5 stroke-white bg-dominant-500 rounded-full" />
            </span>{" "}
            https://daisyui.comadfvfdvs
          </p>
          <div className="flex flex-row space-x-4 px-4 mt-1 text-dominant-200">
            <EllipsisHorizontalIcon
              className="size-6 stroke-dominant-200"
              strokeWidth={2}
            />
          </div>
        </div>
        <div className="flex justify-center border-t h-3/5 border-dominant-500">
          <img
            className="object-fit rounded-b-lg"
            alt="city night sky"
            src="https://images.pexels.com/photos/22794/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </div>
    </section>
  );
}
