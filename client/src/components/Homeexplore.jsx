import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import gsap from 'gsap';
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Homeexplore = () => {
  useEffect(() => {
    // GSAP ScrollTrigger animation setup
    gsap.fromTo(
      ".animate-arrow", // Target the arrow text for animation
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".animate-arrow", // Element that triggers the animation
          start: "top 80%", // Start animation when the element reaches 80% of the viewport height
          end: "top 30%", // End animation when the element reaches 30% of the viewport height
          scrub: 1, // Make animation "scrubbed" with scrolling (smooth scroll-linked animation)
        },
      }
    );

    gsap.fromTo(
      ".animate-image", // Target the image container for animation
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".animate-image",
          start: "top 75%",
          end: "top 25%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".animate-text", // Target the text (title and description) for animation
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".animate-text",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".animate-button", // Target the Explore button for animation
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: ".animate-button",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="bg-yellow-200 p-4 h-screen">
      <p className="w-screen font-semibold flex justify-center items-center gap-2 animate-arrow">
        Here’s how it works <IoIosArrowDown />{" "}
      </p>

      <div className="w-screen h-full flex justify-around items-center">
        <div className="relative flex items-center animate-image">
          <img
            src="https://s.pinimg.com/webapp/center-2d76a691.png"
            className="w-56"
            alt=""
          />
          <div className="absolute flex items-center justify-center font-semibold text-2xl w-80 gap-2 h-20 right-6 rounded-full bg-white text-red-700">
            <IoMdSearch className="mt-3" /> easy chicken dinner
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 animate-text">
          <h1 className="text-6xl font-bold text-red-700">
            Search for an idea
          </h1>

          <p className="w-96 font-semibold text-red-800">
            What do you want to try next? Think of something you’re into—like
            “easy chicken dinner”—and see what you find.
          </p>

          <button className="px-9 py-5 bg-red-700 text-white rounded-full animate-button">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homeexplore;
