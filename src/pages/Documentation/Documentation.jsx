/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import Header from "../../assets/images/header.png";
import LatestRead from "../../assets/images/latest reading.png";
import Books from "../../assets/images/books.png";
import { Link } from "react-router-dom";
/* eslint-disable react/no-unescaped-entities */
/* ----------------------------------------------------------------------------------------------------- */
/*  @ <Documentation />
/* ----------------------------------------------------------------------------------------------------- */
const Documentation = () => {
  return (
    <div className="md:px-24 md:py-12 p-6">
      <div className="rounded-2xl bg-white p-6 sm:p-12 flex flex-col gap-4">
        <p className="italic">
          © 2024 ReadWander: ankurzac3@gmail.com. All rights reserved.
        </p>
        <Link
          to="https://github.com/AnkurNayak/readwander"
          className="bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] max-w-max rounded-lg px-8 py-2 mt-auto text-white"
        >
          Project Repository : Github
        </Link>
        <h1 className="text-lg font-bold">Images owners</h1>
        <Link
          to="https://unsplash.com/photos/green-and-red-abstract-painting-7SV4cz3UFEI"
          className="italic text-sm font-medium"
        >
          https://unsplash.com/photos/green-and-red-abstract-painting-7SV4cz3UFEI
        </Link>
        <Link
          to="https://unsplash.com/photos/a-bunch-of-different-colored-paper-with-a-pencil-in-it-zdVemwI3hbs"
          className="italic text-sm font-medium"
        >
          https://unsplash.com/photos/a-bunch-of-different-colored-paper-with-a-pencil-in-it-zdVemwI3hbs
        </Link>
        <Link
          to="https://unsplash.com/photos/blue-and-pink-balloons-with-water-droplets-s3yo0KvdQMs"
          className="italic text-sm font-medium"
        >
          https://unsplash.com/photos/blue-and-pink-balloons-with-water-droplets-s3yo0KvdQMs
        </Link>
        <Link
          to="https://unsplash.com/photos/yellow-blue-and-red-dragon-illustration-4NvhjcDeyhc"
          className="italic text-sm font-medium"
        >
          https://unsplash.com/photos/yellow-blue-and-red-dragon-illustration-4NvhjcDeyhc
        </Link>
        <Link
          to="https://unsplash.com/photos/a-painting-of-a-red-and-blue-cross-on-a-white-background-b7fa7iUVJ7I"
          className="italic text-sm font-medium"
        >
          https://unsplash.com/photos/a-painting-of-a-red-and-blue-cross-on-a-white-background-b7fa7iUVJ7I
        </Link>
        <Link
          to="https://unsplash.com/photos/green-and-red-abstract-painting-7SV4cz3UFEI"
          className="italic text-sm font-medium"
        >
          https://unsplash.com/photos/green-and-red-abstract-painting-7SV4cz3UFEI
        </Link>
        <Link
          to="https://unsplash.com/photos/red-and-black-dragon-artwork-VotSVvmJSic"
          className="italic text-sm font-medium"
        >
          https://unsplash.com/photos/red-and-black-dragon-artwork-VotSVvmJSic
        </Link>
        <Link
          to="https://unsplash.com/photos/blue-and-red-smoke-illustration-wq1BodC0TS8"
          className="italic text-sm font-medium"
        >
          https://unsplash.com/photos/blue-and-red-smoke-illustration-wq1BodC0TS8
        </Link>
        <h1 className="text-2xl font-bold">Welcome to ReadWander!</h1>
        <p className="italic text-sm font-medium">
          Welcome to ReadWander, your go-to reading app for exploring and
          enjoying your favorite books. With ReadWander, immerse yourself in a
          world of literature, discover new titles, track your reading progress,
          and much more. This document provides an overview of the key features
          and functionalities of ReadWander.
        </p>
        <h1 className="text-2xl font-bold">Key features</h1>
        <div className="px-4 flex flex-col gap-4">
          <img src={Header} alt="img-1" />
          <h1 className="text-lg font-medium">
            <span className="font-bold">Streak Tracking :</span>Stay consistent
            with your reading habits using ReadWander's streak tracking feature.
            Monitor your daily reading streak and challenge yourself to maintain
            a consistent reading routine.
          </h1>
          <h1 className="text-lg font-medium">
            <span className="font-bold">Longest Streak Calculation:</span>
            Keep track of your longest reading streak to date. ReadWander
            calculates and displays your longest streak, allowing you to
            celebrate your achievements and milestones.
          </h1>
          <h1 className="text-lg font-medium">
            <span className="font-bold">Reading Progress Tracking:</span>Keep
            track of your reading progress effortlessly. ReadWander allows you
            to mark books as "currently reading," track the number of pages
            read, and set reading goals to stay motivated.
          </h1>
          <img src={LatestRead} alt="img-1" />
          <h1 className="text-lg font-medium">
            <span className="font-bold">Book Exploration:</span>Explore a
            library of books and discover new titles to add to your reading
            list. With ReadWander's intuitive search and browse features,
            finding your next favorite book has never been easier.
          </h1>
          <img src={Books} alt="img-1" />
          <h1 className="text-lg font-medium">
            <span className="font-bold">Book Recommendation:</span>Random Book
            Recommend from the Books
          </h1>
          <img src={Books} alt="img-1" />
          <h1 className="text-lg font-medium">
            <span className="font-bold">Responsive Design:</span>Access
            ReadWander from any device, including desktops, laptops, tablets,
            and smartphones. ReadWander features a responsive design that adapts
            to different screen sizes, ensuring a consistent and optimal reading
            experience across devices.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
