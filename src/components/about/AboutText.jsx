import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ab1 from "../../assets/about/about1.png";

gsap.registerPlugin(ScrollTrigger);

const AboutText = () => {
  const textRef = useRef(null);

  const headingText = ` We did not begin by chasing trends, algorithms, or vanity metrics. We began with a quieter belief, that brands deserve clarity before visibility, trust before traction, and meaning before scale. What started as a pursuit of thoughtful design slowly evolved into a brand engineering studio helping founders, family businesses, and growing organizations build identities people don’t just notice, but remember, trust, and return to.Today, DiigiiHost works at the intersection of soul, systems, and storytelling, crafting brands that feel aligned from the inside out.`;

  useEffect(() => {
    const words = headingText.split(" ");

  textRef.current.innerHTML =
  `<span class="space-block"></span><span class="space-block"></span><span class="space-block"></span>` +
  words
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
        start: "top 50%",
        end: "30% 30%",
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
                Some businesses are built from ambition. 
                Others are built from inheritance.
              </p>
              <p>
               Both eventually arrive at the same question:
              “How do we grow without losing who we are?”
              </p>
              <p>
                That question shapes everything we do.
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