import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import akirhs from "../../assets/soup/akirhs.png"
import akirhs1 from "../../assets/soup/akirhs1.png"
import akirhs2 from "../../assets/soup/akirhs2.png"
import akirhs3 from "../../assets/soup/akirhs3.png"
import akirhs4 from "../../assets/soup/akirhs4.png"
import akirhs5 from "../../assets/soup/akirhs5.png"
import akirhs6 from "../../assets/soup/akirhs6.png"
import akirhs7 from "../../assets/soup/akirhs7.png"
import akirhs8 from "../../assets/soup/akirhs8.mp4"
import akirhs9 from "../../assets/soup/akirhs9.png"
import akirhs10 from "../../assets/soup/akirhs10.png"
import akirhs11 from "../../assets/soup/akirhs11.png"
import akirhs12 from "../../assets/soup/akirhs12.png"
import akirhsvideo from "../../assets/soup/akirhsvideo.mp4"

import FashionSlider from "../soupherb/Slider"
// import FashionSlider from "./Slider"

gsap.registerPlugin(ScrollTrigger)

const AkirhsDetails = () => {
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
          x: window.innerWidth <= 991 ? "0%" : "50%",
          y: window.innerWidth <= 991 ? "80%" : "70%",
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
          <img src={akirhs} alt="" />
        </figure>

        <h3 className="dettext">
         A technology identity designed to feel <br /> globally capable, structured, and future-facing.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>Akirhs</h2>
        </div>

        <div className="subloader">
          <video
            src={akirhsvideo}
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
            <p>AKIRHS had the technical capability, team strength, and operational depth but the brand lacked the perception of a modern technology partner.</p>
            <p>The communication felt functional, not differentiated.</p>
            <p>The challenge was to build an identity that reflected intelligence, scale, and long-term confidence.</p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={akirhs1} alt="" />
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
                  <img src={akirhs2} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={akirhs3} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="thechallange">
          <h3>The Approach</h3>

          <div className="paradiv">
            <p>We approached the brand through clarity and structure.</p>
            <p>Not innovation for appearance but systems designed to feel focused, dependable, and modern.</p>
            <p>From identity design <br /> to website architecture and communication, <br /> every touchpoint was built <br /> to simplify sophistication.</p>
          


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={akirhs4} alt="" />
                </figure>
              </div>
              
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3>The Identity</h3>

          <div className="paradiv">
            <p>The identity balances precision with restraint.</p>
            <p>Minimal layouts. <br /> Confident typography. <br /> Structured visual rhythm. <br /> Controlled contrast and motion.</p>
            <p>A system designed to feel credible, scalable, and globally relevant.</p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-5">
                <figure>
                  <img src={akirhs5} alt="" />
                </figure>
              </div>

              <div className="col-lg-7">
                <figure>
                  <img src={akirhs6} alt="" />
                </figure>
              </div>
              <div className="col-lg-12">
                <figure>
                  <img src={akirhs7} alt="" />
                </figure>
              </div>



            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3>The Outcome</h3>

          <div className="paradiv">
            <p>AKIRHS now communicates with stronger authority and clearer positioning.</p>
            <p>The brand evolved from appearing like a development vendor to feeling like a strategic technology partner.</p>
            <p>A more contemporary presence <br /> built for long-term growth.</p>
          </div>


        </div>

        <div className="scrilvideo">
          <div className="videocontainer" ref={videoScaleRef}>
                 <video
                        src={akirhs8}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
            
          </div>
        </div>

          <div className="soupimgsgal mb-5">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={akirhs9} alt="" />
                </figure>
              </div>

                 <div className="col-lg-6">
                <div className="maultiimg">
                  <figure>
                    <img src={akirhs10} alt="" />
                  </figure>

                  <figure>
                    <img src={akirhs11} alt="" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={akirhs12} alt="" />
                </figure>
              </div>



            </div>
          </div>

       


        {/* Identity */}
        <div className="thechallange">
          <h3>Precis</h3>

          <div className="paradiv">
            <p>Strong technology brands do not just communicate innovation.</p>
            <p>They communicate clarity.</p>
            <p>Every decision across the system<br /> was designed to reduce noise,<br /> strengthen perception,<br /> and reflect organizational maturity.</p>
            <p>The result is a brand presence that feels intelligent, composed, and built for scale.</p>

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

export default AkirhsDetails;