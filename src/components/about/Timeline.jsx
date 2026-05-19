import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import timeline from "../../assets/about/timeline.png"

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2012",
    title: "The Beginning",
    description:
      "What started as a small creative pursuit slowly evolved into a studio built on clarity, craft, and meaningful digital experiences — shaped project by project, milestone by milestone.",
  },
  {
    year: "2016",
    title: "Growth Phase",
    description: "What started as a small creative pursuit slowly evolved into a studio built on clarity, craft, and meaningful digital experiences — shaped project by project, milestone by milestone.",
  },
  {
    year: "2018",
    title: "Recognition",
    description: "What started as a small creative pursuit slowly evolved into a studio built on clarity, craft, and meaningful digital experiences — shaped project by project, milestone by milestone.",
  },
  {
    year: "2022",
    title: "Global Reach",
    description: "What started as a small creative pursuit slowly evolved into a studio built on clarity, craft, and meaningful digital experiences — shaped project by project, milestone by milestone.",
  },
  {
    year: "2024",
    title: "Innovation",
    description: "What started as a small creative pursuit slowly evolved into a studio built on clarity, craft, and meaningful digital experiences — shaped project by project, milestone by milestone.",
  },
  {
    year: "2025",
    title: "Future Vision",
    description: "What started as a small creative pursuit slowly evolved into a studio built on clarity, craft, and meaningful digital experiences — shaped project by project, milestone by milestone.",
  },
];

export default function Timeline() {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = wrapRef.current;
    const total = milestones.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "10% top",
        end: `+=${total * 700} bottom`,
        scrub: 1, 
        pin: true,
        markers:true,
        onUpdate: (self) => {
          const index = Math.min(
            total - 1,
            Math.floor(self.progress * total)
          );
          setActive(index);
        },
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="timeline-wrapper" ref={wrapRef}>

      <div className="heading1">
        <h2>Milestones That Shaped Us</h2>

        <div className="btnnestprev">
          <button>Next</button>
          <button>prev</button>
        </div>
      </div>
      {/* YEARS */}
      <div className="timeline-years">
        {milestones.map((item, i) => (
          <span key={i} className={active === i ? "active" : ""}>
            {item.year}
          </span>
        ))}
      </div>

      {/* CONTENT */}
      <div className="timeline-main">
        {/* LEFT LINE */}
        <div className="timeline-line">
          <span
            className="line-dot"
            style={{
              top: `${active * 52}px`,
            }}
          ></span>
        </div>

        {/* TEXT */}
        <div className="timeline-content">
          <h2>{milestones[active].title}</h2>
          <p>{milestones[active].description}</p>

          <div className="timeimg">
            <img src={timeline} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}