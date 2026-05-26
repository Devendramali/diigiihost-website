import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import canair from "../../assets/soup/canair.png"
import canair1 from "../../assets/soup/canair1.png"
import canair2 from "../../assets/soup/canair2.png"
import canair3 from "../../assets/soup/canair3.png"
import canair4 from "../../assets/soup/canair4.png"
import canair5 from "../../assets/soup/canair5.png"
import canair6 from "../../assets/soup/canair6.png"
import canair7 from "../../assets/soup/canair7.png"
import canair8 from "../../assets/soup/canair8.png"
import canair9 from "../../assets/soup/canair9.mp4"
import canair10 from "../../assets/soup/canair10.png"
import canair11 from "../../assets/soup/canair11.png"
import canairvideo from "../../assets/soup/canairvideo.mp4"

import FashionSlider from "../soupherb/Slider"
// import FashionSlider from "./Slider"

gsap.registerPlugin(ScrollTrigger)

const CaNairDetails = () => {
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
          <img src={canair} alt="" />
        </figure>

        <h3 className="dettext">
         A technology identity designed to feel <br /> globally capable, structured, and future-facing.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>Ca Nair</h2>
        </div>

        <div className="subloader">
          <video
            src={canairvideo}
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
            <p>CA Nair had years of expertise, <br />
             but the brand presence did not reflect <br />
             the level of professionalism behind the practice.</p>
            <p>The communication felt traditional. <br />
             The identity lacked distinction. <br />
             And the digital experience <br />
             did not build immediate trust.</p>
            <p>The challenge was not to appear louder — <br />
             but to appear clearer and more credible.</p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={canair1} alt="" />
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

              <div className="col-lg-5">
                <figure>
                  <img src={canair2} alt="" />
                </figure>
              </div>
              <div className="col-lg-7">
                <figure>
                  <img src={canair3} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="thechallange">
          <h3>The Approach</h3>

          <div className="paradiv">
            <p>We approached the brand <br /> through the lens of financial reassurance.</p>
            <p>Clients seek expertise, <br /> but they also seek confidence, <br /> stability, <br /> and clarity.</p>
            <p>From the visual identity <br /> to the website structure, <br /> service communication, <br /> and overall tone — <br /> every touchpoint was redesigned <br /> to feel composed, structured, and dependable.</p>
   
          


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure>
                  <img src={canair4} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={canair5} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={canair6} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={canair7} alt="" />
                </figure>
              </div>
              
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3>The Identity</h3>

          <div className="paradiv">
            <p>The resulting identity balances <br /> professional precision with modern simplicity.</p>
            <p>Minimal layouts. <br /> Controlled typography. <br /> Structured communication. <br /> Clean visual hierarchy.</p>
            <p>A system designed to communicate trust <br /> without unnecessary complexity.</p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={canair8} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3>The Outcome</h3>

          <div className="paradiv">
            <p>CA Nair now communicates <br /> with stronger authority, <br /> greater consistency, <br /> and a far more contemporary presence.</p>
            <p>The brand evolved <br /> from appearing like a conventional accounting practice <br /> to feeling like a modern financial advisory partner.</p>

          </div>


        </div>

        <div className="scrilvideo">
          <div className="videocontainer" ref={videoScaleRef}>
                 <video
                        src={canair9}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
            
          </div>
        </div>

          <div className="soupimgsgal mb-5">
            <div className="row">
              <div className="col-lg-5">
                <figure>
                  <img src={canair10} alt="" />
                </figure>
              </div>

               
              <div className="col-lg-7">
                <figure>
                  <img src={canair11} alt="" />
                </figure>
              </div>



            </div>
          </div>

       


        {/* Identity */}
        <div className="thechallange">
          <h3>Precis</h3>

          <div className="paradiv">
            <p>Professional service brands <br />
             are built on perception long before interaction.</p>
            <p>Every decision across the system <br />
             was designed to strengthen trust, <br />
             reduce friction, <br />
             and create a clearer sense of confidence.</p>
            <p>The result is a brand presence <br />
             that feels measured, <br />
             credible, <br />
             and quietly authoritative.</p>

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

export default CaNairDetails;