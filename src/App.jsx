import gsap from "gsap";
import React from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gopi from "./assets/gopi-bahu.jpg"
import ahm from "./assets/ahm-g.avif"

export default function App() {
  useGSAP(() => {
    gsap.to(".data", {
      x: 1250,
      duration: 5,
      delay: 1,
      rotate: 720,
    });
  });
  useGSAP(()=>{
    gsap.to(".gopi" ,{
        x: 1200,
        duration: 10,
        delay: 1,
        repeat: -1,
        rotate: 720,
        rotateY: 450
    })
    gsap.from(".ahm" ,{
        x: 1000,
        duration: 10,
        delay: 1,
        repeat: -1,
        rotate: 720,
        rotateY: 450
    })
  })

  return (
    <>
      {/* <div className="data"></div> */}
      <div>
        <img src={gopi} className="gopi" />
      </div>
      <div>

        <img src={ahm} className="ahm" />
      </div>
    </>
  );
}
