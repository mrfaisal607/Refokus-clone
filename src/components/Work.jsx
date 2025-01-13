import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
function Work() {
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1515703817793-511cee221bb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1509479200622-4503f27f12ef?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "41%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1519575706483-221027bfbb31?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1520520688967-7bdc16e77dc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1549728662-1499eff84059?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "75%",
      left: "48%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    const imageShow = (arr) => {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    };
    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 2:
        imageShow([0, 1]);
        break;
      case 3:
        imageShow([0, 1, 2]);
        break;
      case 4:
        imageShow([0, 1, 2, 3]);
        break;
      case 6:
        imageShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imageShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full px-4">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[18vw] md:text-[36vw] select-none tracking-tight leading-none font-sans font-medium">
          work
        </h1>
        <div className="absolute top-0 w-full h-full"></div>
        {images.map(
          (elem, idx) =>
            elem.isActive && (
              <img
                key={idx}
                className="absolute w-20 md:w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                style={{ top: elem.top, left: elem.left }}
                src={elem.url}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
}

export default Work;
