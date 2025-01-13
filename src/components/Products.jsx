import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "../assets/arqitel.mp4";
import ttr from "../assets/ttr.mp4";
import yir from "../assets/yir.mp4";
import yahoo from "../assets/yahoo.mp4";
import rainfall from "../assets/rainfall.mp4";

function Products() {
  const products = [
    {
      title: "Ariqitel",
      description: "Innovative solutions for your next project.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description: "Collaborative tools to empower your business.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2023",
      description: "Year In Review: A reflection on this year's achievements.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description: "Streamline your online interactions with Yahoo tools.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description: "Efficient weather analysis at your fingertips.",
      live: true,
      case: true,
    },
  ];
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };
  return (
    <div className="mt-32 relative">
      {products.map((productData, index) => (
        <Product key={index} idx={index} mover={mover} val={productData} />
      ))}
      <div className="w-full h-full pointer-events-none absolute top-0">
        <motion.div
          initial={{ y: pos, x: "50%" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          animate={{ y: pos + `rem` }}
          className="window absolute left-[20%]  w-[23rem] h-[23rem]  overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="left-[20%] w-full h-full "
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={arqitel}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="left-[20%] w-full h-full "
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={ttr}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="left-[20%] w-full h-full "
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yir}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="left-[20%] w-full h-full "
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yahoo}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="left-[20%] w-full h-full"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={rainfall}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
