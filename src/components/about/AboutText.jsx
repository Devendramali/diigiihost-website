import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ab1 from "../../assets/about/about1.png";

gsap.registerPlugin(ScrollTrigger);

const AboutText = () => {
  const textRef = useRef(null);

  const headingText = `We started with a simple belief — great websites should do more than just exist online. They should communicate clearly, build trust instantly, and create experiences people remember. What began as a passion for design and digital storytelling evolved into a creative studio focused on crafting modern websites that help brands grow with clarity and confidence.`;

  useEffect(() => {
    const words = headingText.split(" ");

    textRef.current.innerHTML = words
      .map(
        (word) =>
          `<span class="word"><span class="inner-word">${word}</span></span>`
      )
      .join(" ");

    const allWords = textRef.current.querySelectorAll(".inner-word");

    gsap.set(allWords, {
      opacity: 0.15,
    });

    gsap.to(allWords, {
      opacity: 1,
      stagger: 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 30%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="aboutttext">
      <div className="container">
        <div className="textscroll">
          <p ref={textRef}></p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="abtxt">
              <p>
                What started as a small creative pursuit slowly evolved into a
                studio built on clarity, craft, and meaningful digital
                experiences shaped project by project, milestone by milestone.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <figure>
              <img src={ab1} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutText;