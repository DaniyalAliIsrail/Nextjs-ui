'use client'

import React from "react";
import Link from "next/link";
import courseData from "../data/music_Courses.json"
import { BackgroundGradient } from "./ui/background-gradient";

// custom datatypes in typescript
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {

  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
  return (
    <div className="p-12 ">
      <div className="p-4"> 
        <div className="text-center">
          <h2 className="text-xl text-teal-600 font-semibold tracking-uppercase p-3">
            FEATURED SECTION
          </h2>
          <p className="mt-2 text-4xl leading-8 font-bold tracking-tight text-white sm:text-4xl ">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

          {
            featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
             <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm item-center text-center p-4">
              <div className="p-4  sm:p-6 flex flex-col item-center text-center flex-grow">
                <p className="text-xl pb-3">{course.title}</p>
                <p>{course.description}</p>
              </div>
             </BackgroundGradient>
            </div>
            ))
          }
        </div>
      </div>
      <div className="mt-20  text-center">
        <Link
          href="/courses"
          className="px-4 py-2 mt-5 rounded border border-white-500 text-white hover:bg-white hover:text-black  transition duration-300 ">
          view a more
        </Link>
      </div>
    </div>
  );
};
export default FeaturedCourses;






















