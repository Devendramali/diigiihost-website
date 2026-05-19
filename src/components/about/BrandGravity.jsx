import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import c1 from "../../assets/about/cd1.png";
import c2 from "../../assets/about/cd2.png";
import c3 from "../../assets/about/cd3.png";

gsap.registerPlugin(ScrollTrigger);

const BrandGravity = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth <= 991) return;

      const cards = gsap.utils.toArray(".movecard");
      const title = sectionRef.current.querySelector(".brandbox1 h2");
      const sub = sectionRef.current.querySelector(".brandbox1 h4");
      const mainhead = sectionRef.current.querySelector(".soultext h2");

      /* initial state */
      gsap.set(cards[0], {
        opacity: 0,
        y: -700,
        x: -150,
        scale: 0.6,
        rotate: 8,
      });
      gsap.set(cards[1], {
        opacity: 0,
       y: -250,
          x: -80,
        scale: 0.6,
        rotate: 8,
      });
      gsap.set(cards[2], {
        opacity: 0,
       y: -500,
          x: 200,
        scale: 0.6,
        rotate: 8,
      });

      gsap.set([title, sub, mainhead], {
        opacity: 0,
        y: 50,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=350%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(mainhead, {
        opacity: 0.8,
        y: 0,
        duration: 1,
      })

        /* show cards one by one from top */
        .to(cards[0], {
          opacity: 1,
        y: -700,
        x: -150,
          duration: 1,
        })

        .to(cards[1], {
          opacity: 1,
          y: -250,
          x: -80,
          duration: 1,
        })

        .to(cards[2], {
          opacity: 1,
          y: -500,
          x: 200,
          duration: 1,
        })

        /* bring all center */
        .to(
          cards,
          {
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            stagger: 0.15,
            duration: 1.5,
          }
        )

        /* show text */
        .to(title, {
          opacity: 1,
          y: 0,
          duration: 1,
        })

        .to(sub, {
          opacity: 1,
          y: 0,
          duration: 1,
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="gravitysection">
      <div className="container">
        <div className="gravitycontainer" ref={sectionRef}>
          <div className="soultext">
            <h2>
              When Soul shapes positioning, <br />
              Science structures execution,<br />
              And Scale is approached consciously, <br />
              brands stop chasing attention. <br />
              They start building trust, recognition, <br />
              and long-term recall.
            </h2>
          </div>

          <div className="brandbox1">
            <h2>The</h2>

            <div className="topstage">
              <div className="movecard card1">
                <img src={c2} alt="" />
              </div>

              <div className="movecard card2">
                <img src={c3} alt="" />
              </div>

              <div className="movecard card3">
                <img src={c1} alt="" />
              </div>
            </div>

            <h4>
              philosophy is not a method.
              <br />
              It is a way of thinking.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandGravity;