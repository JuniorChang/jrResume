import React from "react";
import Hero from "../components/Hero";

const AboutMe = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img ">
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70   " />

      <div className="absolute top-[25%]  ">
        <div className="text-white justify-center text-center px-10">
          <h1 className="font-[1000] text-2xl ">About Me</h1>

          <p className="mt-10">
            Hello everyone, my name is Chang Jia Le and I am a web developer.
            Most of time a self taught developer who is now adept at Full stack
            web development.{" "}
          </p>

          <p>
            I have a passion for learning new things and I am always looking for
            new ways to improve my skills.
          </p>

          <p>
            Currently I am exploring into the world of game and mobile
            development, for example Unity and ReactNative. I am in the midst of
            working on a top down 2D game right now.
          </p>
        </div>

        <div className="text-white justify-center  px-10 mt-10">
          <div>
            <h1 className="text-white justify-center text-center px-10">
              Work History
            </h1>
          </div>
          <div>
            <p className="mt-3">Jan 2022 - March 2022</p>
            <p>Web Developer, REgenerations Energy Pte Ltd</p>
          </div>
          <div>
            <p className="mt-3">March 2022 - Current</p>
            <p>Web Developer, Resonance Pte Ltd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
