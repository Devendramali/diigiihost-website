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

      <div className="heading1 d-flex justify-content-between">
        <h2>Milestones That Shaped Us</h2>

        <div className="btnnestprev">
           <div className="snap-btns">
            <button className="snap-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 16L2 12L6 8M2 12H22" stroke="#1A766D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></button>
                      <button className="snap-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 16L22 12L18 8M22 12H2" stroke="#1A766D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></button>
          </div>
        </div>
      </div>
      {/* YEARS */}
      <div className="timelinewrappewr">
        
   
  {milestones.map((item, i) => (
      <div  key={i} className={active === i ? " timeline-main active" : "timeline-main"}>

        
        <h1>  {item.year}</h1>

        {/* TEXT */}
        <div className="timeline-content">
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <div className="timeimg">
            <img src={timeline} alt="" />
          </div>
        </div>
      </div>
      ))}
      
      </div>
    </section>
  );
}