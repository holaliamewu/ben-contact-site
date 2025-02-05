"use client";

import { useState } from "react";
import * as motion from "motion/react-client"
import Image from "next/image";
import { InstagramIcon, Linkedin01Icon, Behance02Icon } from "hugeicons-react";
import profile  from "./../public/profile.jpg";

export default function Home() {

  const [ status, setStatus ] = useState("absolute")
  const cardVariants = {
    hovered: {
      
    }
  }
  return (
      <div className="flex flex-col items-center justify-center bg-white w-screen h-screen " >
        <div className="flex flex-col items-center justify-center w-screen h-[60%] relative " >
        <motion.main 
        className="grid grid-cols-4 grid-rows-3 gap-2 relative w-[90%] md:w-[60%] h-fit mx-auto "
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
        <motion.div className="flex flex-col items-center justify-center col-span-1 row-span-2 bg-red-100 
        shadow-lg rounded-[24px]  top-0 left-1/3" 
        initial={{rotate: 26, }}          
        whileHover={{y: status === "absolute" ? -16 : -4, rotate: 0}}
        animate={{position: status, rotate: status === "static" ? 0 : 26, width:status === "absolute" ? 226 : "", height: status === "absolute" ? 226 : ""}}
        layout
        >box 6</motion.div>
          <motion.div 
          className="flex flex-col items-center justify-center col-span-2 row-span-2 bg-yellow-100 
          shadow-lg rounded-[24px]  top-0 left-1/3  " 
          initial={{rotate: 22, width: 226, height: 226}}          
          whileHover={{y: status === "absolute" ? -16 : -4, rotate: 0}}
          animate={{position: status, rotate: status === "static" ? 0 : 22, width:status === "absolute" ? 226 : "", height: status === "absolute" ? 226 : "" }}
          layout
          >box 5</motion.div>
          <motion.div 
          className="flex flex-col items-center justify-center cols-span-1 row-span-1 bg-blue-100 
          shadow-lg rounded-[24px]  top-0 left-1/3  " 
          initial={{rotate: 18, width: 226, height: 226 }}          
          whileHover={{y: status === "absolute" ? -16 : -4, rotate: 0}}
          animate={{position: status, rotate: status === "static" ? 0 : 18, width:status === "absolute" ? 226 : "", height: status === "absolute" ? 226 : ""}}
          layout
          >box 4</motion.div>
          <motion.div 
          className="flex flex-col items-center justify-center col-span-1 row-span-2 bg-teal-100 
          shadow-lg rounded-[24px]  top-0 left-1/3 " 
          initial={{rotate:14 , width: 226, height: 226}}          
          whileHover={{y: status === "absolute" ? -16 : -4, rotate: 0}}
          animate={{position: status, rotate: status === "static" ? 0 : 14, width:status === "absolute" ? 226 : "", height: status === "absolute" ? 226 : ""}}
          layout
          >box 3</motion.div>
          <motion.div 
          className="flex flex-col items-center justify-center col-span-1 row-span-1 bg-orange-100 
          shadow-lg rounded-[24px]  top-0 left-1/3 " 
          initial={{rotate:10, width: 226, height: 226}}
          whileHover={{y: status === "absolute" ? -16 : -4, rotate: 0}}
          animate={{position: status, rotate: status === "static" ? 0 : 10, width:status === "absolute" ? 226 : "", height: status === "absolute" ? 226 : ""}}
          layout
          >
            <Image src={profile} className="rounded-[24px] w-[226px] aspect-square" />
          </motion.div>
          <motion.div 
          className="flex flex-col items-center justify-between col-span-2 row-span-1
          shadow-lg rounded-[24px]  top-0 left-1/3 p-2 bg-white absolute cursor-pointer " 
          onClick={()=> setStatus("static")}
          initial={{rotate: 6, width: 226, height: 226}}          
          whileHover={{y: status === "absolute" ? -16 : -4, rotate: 0}}
          animate={{position: status, rotate: status === "static" ? 0 : 6, width:status === "absolute" ? 226 : "", height: status === "absolute" ? 226 : ""}}
          >
            <p className="text-[20px] font-bold mr-auto" >Benjamin<br/> Kankam</p>
            <p className="text-[14px] font-light ml-auto  " >Graphic<br/> Designer</p>
          </motion.div>
          <div className="h-14 bg-linear-65 from-purple-500 to-pink-500"></div>
        </motion.main>
        </div>
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
