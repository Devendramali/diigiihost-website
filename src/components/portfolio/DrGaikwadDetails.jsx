import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import drg from "../../assets/soup/drg.png"
import drg1 from "../../assets/soup/drg1.png"
import drg2 from "../../assets/soup/drg2.png"
import drg3 from "../../assets/soup/drg3.png"
import drg4 from "../../assets/soup/drg4.png"
import drg5 from "../../assets/soup/drg5.png"
import drg6 from "../../assets/soup/drg6.png"
import drg7 from "../../assets/soup/drg7.png"
import drg8 from "../../assets/soup/drg8.png"
import drg9 from "../../assets/soup/drg9.png"
import drg10 from "../../assets/soup/drg10.mp4"
import drg11 from "../../assets/soup/drg11.png"
import drg12 from "../../assets/soup/drg12.png"
import drg13 from "../../assets/soup/drg13.png"
import drgvideo from "../../assets/soup/drgvideo.mp4"


import FashionSlider from "../soupherb/Slider"
// import FashionSlider from "./Slider"

gsap.registerPlugin(ScrollTrigger)

const DrGaikwadDetails = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const videoScaleRef = useRef(null)

  useEffect(() => {


    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        {
          fontSize: window.innerWidth <= 991 ? "32px" : "64px",
          x: "0%",
          y: "0%",
        },
        {
          fontSize: window.innerWidth <= 991 ? "64px" : "200px",
          x: window.innerWidth <= 991 ? "0%" : "25%",
          y: window.innerWidth <= 991 ? "20%" : "50%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "10% 40%",
            scrub: 1,
            // markers:true
          },
        }
      );

      gsap.fromTo(
        videoScaleRef.current,
        {
          scale: 0.35,
          borderRadius: "30px",
        },
        {
          scale: 1,
          borderRadius: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: ".scrilvideo",
            start: "top top",
            end: "+=1800",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            markers: false,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="detailsbody">
      <div className="container">
        <figure className="mainimg">
          <img src={drg} alt="" />
        </figure>

        <h3 className="dettext">
          A modern dental identity shaped around <br />trust, precision, and human reassurance.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>Dr Gaikwad</h2>
        </div>

        <div className="subloader h-100">
          <video
            src={drgvideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

     

        {/* Challenge */}
        <div className="thechallange">
          <h3>The Challenge</h3>

          <div className="paradiv">
            <p>Despite years of clinical excellence, <br /> the brand presence did not fully reflect <br /> the depth of expertise behind the practice.</p>
            <p>The communication felt fragmented. <br /> The visual identity lacked consistency. <br /> And the experience of modern dentistry <br /> was not being translated digitally.</p>
            <p>The challenge was not merely to market a clinic  <br /> it was to build confidence before a patient even walked in.</p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={drg1} alt="" />
                </figure>
              </div>

              {/* <div className="col-lg-4">
                <div className="maultiimg">
                  <figure>
                    <img src={s3} alt="" />
                  </figure>

                  <figure>
                    <img src={s4} alt="" />
                  </figure>

                  <figure>
                    <img src={s5} alt="" />
                  </figure>
                </div>
              </div> */}

              <div className="col-lg-6">
                <figure>
                  <img src={drg2} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={drg3} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="thechallange">
          <h3>The Approach</h3>

          <div className="paradiv">
            <p>We approached the brand from theperspective of patient psychology.</p>
            <p>Dental anxiety. <br />
             Fear of pain. <br />
             Fear of judgment. <br />
             Fear of uncertainty.</p>
            <p>Every touchpoint was redesigned <br />
             to feel calmer, clearer, and more reassuring.</p>
            <p>From the visual identity <br />
             to the website structure, <br />
             content language, <br />
             technology positioning, <br />
             and digital communication — <br />
             the goal was to make modern dentistry <br />
             feel approachable without reducing its sophistication.</p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure>
                  <img src={drg4} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={drg5} alt="" />
                </figure>
              </div>
              <div className="col-lg-12">
                <figure>
                  <img src={drg6} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3>The Identity</h3>

          <div className="paradiv">
            <p>The resulting identity balances <br />
             clinical precision with emotional warmth.</p>
            <p>Clean compositions. <br />
             Controlled typography. <br />
             Intentional whitespace. <br />
             Technology-led storytelling.</p>
            <p>A visual language designed <br />
             to communicate expertise quietly, <br />
             rather than aggressively.</p>
            <p>The brand no longer feels transactional. <br />
             It feels guided.</p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={drg7} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={drg8} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={drg9} alt="" />
                </figure>
              </div>



            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3>The Outcome</h3>

          <div className="paradiv">
            <p>Dr. Shuddhodhan Gaikwad now communicates <br />
             with stronger authority, <br />
             greater consistency, <br />
             and a far more distinctive digital presence.</p>
            <p>The practice evolved from being perceived <br />
             as simply another dental clinic <br />
             to becoming a modern dentistry experience <br />
             rooted in trust and transformation.</p>
         



          </div>


        </div>

        <div className="scrilvideo">
          <div className="videocontainer" ref={videoScaleRef}>
                 <video
                        src={drg10}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
            
          </div>
        </div>

          <div className="soupimgsgal mb-5">
            <div className="row">
              <div className="col-lg-6">
                <figure>
                  <img src={drg11} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={drg12} alt="" />
                </figure>
              </div>
              <div className="col-lg-12">
                <figure>
                  <img src={drg13} alt="" />
                </figure>
              </div>



            </div>
          </div>

       


        {/* Identity */}
        <div className="thechallange">
          <h3>Precis</h3>

          <div className="paradiv">
            <p>What strengthened the brand was not just aesthetics, but emotional alignment.</p>
            <p>Patients do not merely choose dentistry based on treatment. They choose based on how safe, <br /> understood, and confident they feel.</p>
            <p>Every part of the identity system was built around reducing hesitation and increasing trust.</p>
            <p>The result is a brand presence that feels modern, measured, and deeply patient-aware.</p>

          </div>

          {/* <div className="soupimgsgal">
              <div className="row">
                <div className="col-lg-12">
                  <figure>
                    <img src={s12} alt="" />
                  </figure>
                </div>


              </div>
            </div> */}


        </div>

        {/* <FashionSlider/> */}
        <FashionSlider />

      </div>
    </div>

  )

}

export default DrGaikwadDetails;