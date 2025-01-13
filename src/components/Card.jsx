import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width,start,para,hover="false"}) {
  
  return (
    <motion.div whileHover={{backgroundColor: hover=== "true" && "#7443ff" , padding:"30px"}} className={`${width} bg-zinc-700 p-5 rounded-xl hover:${hover} min-h-[65vh] flex flex-col justify-between`}>
      <div className="w-full ">
        <div className="w-full flex justify-between items-center">
          <h3>One hading </h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-semibold font-sans">Whatever heading...</h1>
      </div>
      <div className="down  w-full">
        {
            start && (
                <>
                <h1 className="text-6xl font-sans font-bold tracking-tight leading-none"  >start a project</h1>
                <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-100">Contact Us</button>
                </>
            )
        }
        {
            para && (
                <p className="text-sm text-zinc-400 font-medium " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam.</p>
            )
        }
        {/* <p className="text-sm text-zinc-400 font-medium " >Lorem ipsum dolor sit amet consectetur adipisicing.</p> */}
      </div>
    </motion.div>
  );
}

export default Card;
  