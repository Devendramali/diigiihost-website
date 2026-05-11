import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import side1 from "../../assets/about/mission.svg";
import side2 from "../../assets/about/eye.png";

gsap.registerPlugin(ScrollTrigger);

const AboutMissionVision = () => {
  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: true,
          pin: true,
        },
      });

      gsap.set(visionRef.current, {
        opacity: 0,
        y: 100,
      });

      tl.fromTo(
        missionRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2 }
      )
        .to(missionRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
        })
        .to(missionRef.current, {
          opacity: 0,
          y: -100,
          duration: 1,
        })
        .to(
          visionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
          },
          "-=0.2"
        )
        .to(visionRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="missionvision" >
      <div className="container">

        <div className="mission-wrap" ref={sectionRef}>
          <div className="left-content">
            {/* Mission */}
            <div className="box mission-box" ref={missionRef}>
              <div className="iconx">
                <img src={side1} alt="" />
              </div>

              <div className="line">
                <svg viewBox="0 0 224 465" fill="none">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="99"
                    height="464"
                    rx="49.5"
                    stroke="#1A766D"
                  />
                  <rect
                    x="124.5"
                    y="0.5"
                    width="99"
                    height="464"
                    rx="49.5"
                    stroke="#1A766D"
                  />
                </svg>
              </div>

              <div className="text">
                <h3>Mission</h3>
                <p>
                  To craft thoughtful digital experiences that help brands
                  communicate clearly, grow confidently, and stand out
                  meaningfully online.
                </p>
                <p>To craft thoughtful digital experiences that help brands communicate clearly, grow confidently, and stand out meaningfully online.</p>
              </div>
            </div>

            {/* Vision */}
            <div className="box vision-box" ref={visionRef}>
              <div className="iconx">
               <svg xmlns="http://www.w3.org/2000/svg" width="263" height="186" viewBox="0 0 263 186" fill="none">
  <path d="M3.99929 97.2467C2.93253 94.3729 2.93253 91.2117 3.99929 88.3379C14.389 63.1456 32.0251 41.6056 54.6716 26.4486C77.318 11.2916 103.955 3.2002 131.206 3.2002C158.456 3.2002 185.093 11.2916 207.74 26.4486C230.386 41.6056 248.022 63.1456 258.412 88.3379C259.479 91.2117 259.479 94.3729 258.412 97.2467C248.022 122.439 230.386 143.979 207.74 159.136C185.093 174.293 158.456 182.384 131.206 182.384C103.955 182.384 77.318 174.293 54.6716 159.136C32.0251 143.979 14.389 122.439 3.99929 97.2467Z" stroke="#B1EBE0" stroke-width="6.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M131.206 131.192C152.413 131.192 169.606 114 169.606 92.7923C169.606 71.5846 152.413 54.3923 131.206 54.3923C109.998 54.3923 92.8057 71.5846 92.8057 92.7923C92.8057 114 109.998 131.192 131.206 131.192Z" stroke="#B1EBE0" stroke-width="6.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>

              <div className="line">
                <svg viewBox="0 0 224 465" fill="none">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="99"
                    height="464"
                    rx="49.5"
                    stroke="#1A766D"
                  />
                  <rect
                    x="124.5"
                    y="0.5"
                    width="99"
                    height="464"
                    rx="49.5"
                    stroke="#1A766D"
                  />
                </svg>
              </div>

              <div className="text">
                <h3>Vision</h3>
                <p>
                  To become a creative partner known for clarity, innovation,
                  and building websites people remember.
                </p>
                <p>To craft thoughtful digital experiences that help brands communicate clearly, grow confidently, and stand out meaningfully online.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMissionVision;