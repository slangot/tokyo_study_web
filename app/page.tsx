"use client"

// Next
import Image from "next/image"

// Packages
import { FiArrowDown } from "react-icons/fi"

export default function Home() {

  return (
    <section className="flex flex-col items-center justify-between" style={{ minHeight: '100dvh' }}>

      {/* PAGE 1 */}
      <div className="relative z-10 flex justify-center items-center  h-screen w-screen">
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <div className="flex flex-col p-10">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-5 text-center">Tokyo Study</h1>
            <h2 className="text-2xl md:text-3xl text-center md:text-left">Learn Japanese</h2>
            <p className="text-center md:text-left mt-3">A simple and very effective method to learn while having fun</p>
            <button className="flex bg-secondary h-20 w-full mt-5 justify-center items-center rounded-lg">
              <span className="text-2xl md:text-3xl mr-3">Discover</span> <FiArrowDown size={40} className="home-arrow" />
            </button>
          </div>
          <div className="relative z-50 p-10 rounded-full w-[300px] h-[300px]">
            <Image src="/tsw-home-logo-2.png" alt="Tokyo City" width={300} height={300} className="relative z-40 object-contain" />
            <div className="absolute top-0 left-0 z-30 w-[300px] h-[300px] bg-primary rounded-full" />
          </div>
        </div>
        <div className="absolute -bottom-52 -left-52 -z-1 w-[500px] h-[500px] bg-fourth rounded-full" />
      </div>

      {/* PAGE 2 */}
      <div className="relative z-20 flex flex-col md:flex-row items-center w-screen px-10 h-screen justify-evenly">
        <button className="home-button">
          <h3 className="home-button-text">Lessons</h3>
          <p>Let's learn grammar and structures</p>
        </button>
        <button className="home-button">
          <h3 className="home-button-text">Exercices</h3>
          <p>Enjoy our various exercices to practice</p>
        </button>
        <button className="home-button">
          <h3 className="home-button-text">Dictionnary</h3>
          <p>Use our search tool to look for many things</p>
        </button>
        <div className="absolute -z-10 bottom-1/4 w-screen h-4 bg-third shadow-md shadow-fourth" />
        <div className="absolute -z-10 bottom-[30%] w-screen h-4 bg-fourth shadow-md shadow-fourth" />
      </div>
    </section >
  );
}
