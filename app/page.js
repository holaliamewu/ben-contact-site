import Image from "next/image";
import { InstagramIcon, Linkedin01Icon, Behance02Icon } from "hugeicons-react";

export default function Home() {
  return (
      <div className=" bg-white w-screen h-screen " >
        <main className="flex  items-center justify-center relative w-1/2 aspect-square mx-auto  " >
        <span 
        className="flex flex-col items-center justify-center w-[226px] aspect-square bg-red-100 
        shadow-lg rounded-[24px]  top-1/3 left-1/3 rotate-[26deg] " 
        >box 6</span>
          <span 
          className="flex flex-col items-center justify-center w-[226px] aspect-square bg-yellow-100 
          shadow-lg rounded-[24px]  top-1/3 left-1/3 rotate-[22deg]  " 
          >box 5</span>
          <span 
          className="flex flex-col items-center justify-center w-[226px] aspect-square bg-teal-100 
          shadow-lg rounded-[24px]  top-1/3 left-1/3 rotate-[18deg]  " 
          >box 3</span>
          <span 
          className="flex flex-col items-center justify-center w-[226px] aspect-square bg-blue-100 
          shadow-lg rounded-[24px]  top-1/3 left-1/3 rotate-[14deg] " 
          >box 4</span>
          <span 
          className="flex flex-col items-center justify-center w-[226px] aspect-square bg-orange-100 
          shadow-lg rounded-[24px]  top-1/3 left-1/3 rotate-[10deg] " 
          >box 2</span>
          <span 
          className="flex flex-col items-center justify-center w-[226px] aspect-square 
          shadow-lg rounded-[24px]  top-1/3 left-1/3 rotate-[6deg] bg-linear-to-bl from-violet-500 to-fuchsia-500  " 
          >
            <p className="absolute top-2 left-4 text-[20px] font-bold" >Benjamin<br/> Kankam</p>
            <p className="absolute bottom-2 right-4 text-[14px] font-light " >Graphic<br/> Designer</p>
          </span>
          <div className="h-14 bg-linear-65 from-purple-500 to-pink-500"></div>
        </main>
        <footer className="flex flex-col items-center absolute bottom-12 w-full text-[14px] text-[#848884]  " >
          <p className="" >benjaminkankamboadu@gmail.com</p>
          <p className="" >+233 249 027 640</p>
          <span className="flex items-center gap-4 mt-4  " >
            <a href="https://www.behance.net/princekankam-" target="_blank"><Behance02Icon /></a>
            <a href="https://www.linkedin.com/in/prince-benjamin-kankam-boadu-61786a235/" target="_blank"><Linkedin01Icon /></a>
            <a href="https://www.instagram.com/mrbenjaminkankam/" target="_blank"><InstagramIcon /></a>
          </span>
        </footer>
      </div>
  );
}
