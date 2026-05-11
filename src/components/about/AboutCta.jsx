import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ctaabout from "../../assets/about/cta.png";
import ctaabout2 from "../../assets/about/cta2.png";
import img1 from "../../assets/about/img.png";
import img2 from "../../assets/about/img2.png";
import img3 from "../../assets/about/img3.png";
import img4 from "../../assets/about/img4.png";

gsap.registerPlugin(ScrollTrigger);

const AboutCta = () => {
  const sectionRef = useRef(null);

  const count1 = useRef(null);
  const count2 = useRef(null);
  const count3 = useRef(null);
  const count4 = useRef(null);

  useEffect(() => {
    const animateCounter = (ref, end, suffix = "+") => {
      let obj = { val: 0 };

      gsap.to(obj, {
        val: end,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (ref.current) {
            ref.current.innerText = Math.floor(obj.val) + suffix;
          }
        },
      });
    };

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 75%",
      once: true,
      onEnter: () => {
        animateCounter(count1, 100, "+");
        animateCounter(count2, 25, "+");
        animateCounter(count3, 98, "%");
        animateCounter(count4, 5, "+");
      },
    });
  }, []);

  return (
    <div className="aboutcta" ref={sectionRef}>
      <div className="container">
        <div className="cta">
          <div className="row">
            <div className="col-lg-3">
              <div className="ctabox">
                <figure>
                  <img src={img1} alt="" />
                </figure>
                <h3 ref={count1}>0+</h3>
                <p>
                  Projects crafted across diverse industries with a focus on
                  modern, scalable digital experiences.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <figure>
                <img src={ctaabout} alt="" />
              </figure>
            </div>

            <div className="col-lg-3">
              <div className="ctabox">
                <figure>
                  <img src={img2} alt="" />
                </figure>
                <h3 ref={count2}>0+</h3>
                <p>
                  Projects crafted across diverse industries with a focus on
                  modern, scalable digital experiences.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="ctabox">
                <figure>
                  <img src={img3} alt="" />
                </figure>
                <h3 ref={count3}>0%</h3>
                <p>
                  Client satisfaction achieved through collaborative execution,
                  transparent communication, and detail-focused project delivery.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <figure>
                <img src={ctaabout2} alt="" />
              </figure>
            </div>

            <div className="col-lg-3">
              <div className="ctabox">
                <figure>
                  <img src={img4} alt="" />
                </figure>
                <h3 ref={count4}>0+</h3>
                <p>
                  Years spent refining creative processes, development systems,
                  and premium web design standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCta;