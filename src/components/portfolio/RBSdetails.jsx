import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import rbs from "../../assets/soup/rbs.png"
import rbsvideo from "../../assets/soup/rbsvideo.mp4"
import rbhvideo1 from "../../assets/soup/rbhvideo1.mp4"
import rbs1 from "../../assets/soup/rbs1.png"
import rbs2 from "../../assets/soup/rbs2.png"
import rbs3 from "../../assets/soup/rbs3.png"
import rbs4 from "../../assets/soup/rbs4.png"
import rbs5 from "../../assets/soup/rbs5.png"
import rbs6 from "../../assets/soup/rbs6.png"
import rbs7 from "../../assets/soup/rbs7.png"
import rbs8 from "../../assets/soup/rbs8.png"
import rbs9 from "../../assets/soup/rbs9.png"
import rbs10 from "../../assets/soup/rbs10.png"
import rbs11 from "../../assets/soup/rbs11.png"

import FashionSlider from "../soupherb/Slider"
// import FashionSlider from "./Slider"

gsap.registerPlugin(ScrollTrigger)

const RBSdetails = () => {
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
          fontSize: window.innerWidth <= 991 ? "54px" : "130px",
          x: window.innerWidth <= 991 ? "0%" : "5%",
          y: window.innerWidth <= 991 ? "20%" : "100%",
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
          <img src={rbs} alt="" />
        </figure>

        <h3 className="dettext">
         A legacy industrial brand rebuilt with <br /> greater clarity, structure, and modern relevance.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>Rekha Bright Steels</h2>
        </div>

        <div className="subloader h-100">
          <video
            src={rbsvideo}
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
            <p>Despite decades of credibility, <br /> the brand presence no longer reflected <br /> the scale and precision of the business.</p>
            <p>The communication felt dated. <br /> The positioning lacked distinction. <br /> And their custom manufacturing expertise <br /> was getting lost in a commoditized market.</p>
          
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={rbs1} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={rbs2} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={rbs3} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="thechallange">
          <h3>The Approach</h3>

          <div className="paradiv">
            <p>
We approached the brand <br /> through the lens of industrial trust.
            </p>
            <p>
Not flashy marketing. <br /> But clarity, structure, and confidence.
            </p>
            <p>
From the website system <br /> to the visual language and communication  <br /> every touchpoint was redesigned <br /> to feel dependable, modern, and precise.
            </p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure>
                  <img src={rbs4} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={rbs5} alt="" />
                </figure>
              </div>
              <div className="col-lg-12">
                <figure>
                  <img src={rbs6} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3>The Identity</h3>

          <div className="paradiv">
            <p>
            The resulting identity balances <br /> industrial robustness with modern presentation.
            </p>
            <p>
            Structured layouts. <br /> Confident typography. <br /> Controlled visual language.
            </p>
            <p>
            A system designed to communicate capability <br /> without unnecessary complexity.
            </p>

        
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={rbs7} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={rbs8} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={rbs9} alt="" />
                </figure>
              </div>



            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3>The Outcome</h3>

          <div className="paradiv">
            <p>Rekha Bright Steels now communicates <br /> with greater authority, <br /> clearer positioning, <br /> and stronger consistency across platforms.</p>
            <p>The business evolved from appearing <br /> like a conventional supplier <br /> to feeling like a long-term industrial partner.</p>



          </div>

          {/* <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={wefanss12} alt="" />
                </figure>
              </div>




            </div>
          </div> */}


        </div>

        <div className="scrilvideo">
          <div className="videocontainer" ref={videoScaleRef}>
                 <video
                        src={rbhvideo1}
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
                  <img src={rbs10} alt="" />
                </figure>
              </div>
              <div className="col-lg-7">
                <figure>
                  <img src={rbs11} alt="" />
                </figure>
              </div>




            </div>
          </div>

       


        {/* Identity */}
        <div className="thechallange">
          <h3>Precis</h3>

          <div className="paradiv">
            <p>The goal was never to redesign the legacy, <br /> but to present it with greater clarity.</p>
            <p>Every decision focused on strengthening trust, <br /> modernizing perception, <br /> and reflecting the discipline <br /> the business was already built on.</p>
            <p>The result is a brand presence <br /> that feels experienced, <br /> grounded, <br /> and future-ready.</p>

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

export default RBSdetails;