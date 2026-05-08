import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import main from "../../assets/soup/main.png"
import video1 from "../../assets/soup/soupherbloader.mp4"
import s1 from "../../assets/soup/s1.png"
import s2 from "../../assets/soup/s2.png"
import s3 from "../../assets/soup/s3.png"
import s4 from "../../assets/soup/s4.png"
import s5 from "../../assets/soup/s5.png"
import s6 from "../../assets/soup/s6.png"
import s7 from "../../assets/soup/s7.png"
import s8 from "../../assets/soup/s8.png"
import s9 from "../../assets/soup/s9.png"
import s10 from "../../assets/soup/s10.png"
import s11 from "../../assets/soup/s11.png"
import s12 from "../../assets/soup/s12.png"
import img2 from "../../assets/soup/2.png"
import img3 from "../../assets/soup/3.png"
import img4 from "../../assets/soup/4.png"
import img5 from "../../assets/soup/5.png"
import FashionSlider from "./Slider"

gsap.registerPlugin(ScrollTrigger)

const Details = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const videoScaleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        {
          fontSize: "64px",
          x: "0%",
          y: "0%",
        },
        {
          fontSize: "200px",
          x: "40%",
          y: "50%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "10% 40%",
            scrub: 1,
          },
        }
      )

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
          <img src={main} alt="" />
        </figure>

        <h3 className="dettext">
          where ancient Ayurvedic wisdom meets delicious,
          nourishing soups crafted to balance your body
          and delight your taste buds.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>Soupherb</h2>
        </div>

        <div className="subloader">
          <video
            src={video1}
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
            <p>
              Despite decades of credibility, the brand presence
              no longer reflected the scale and precision of the business.
            </p>

            <p>
              The communication felt dated. The positioning lacked
              distinction. And their custom manufacturing expertise
              was getting lost in a commoditized market.
            </p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={s1} alt="" />
                </figure>
              </div>

              <div className="col-lg-4">
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
              </div>

              <div className="col-lg-8">
                <figure>
                  <img src={s2} alt="" />
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
              We approached the brand through the lens of industrial trust.
            </p>

            <p>
              Not flashy marketing. But clarity, structure, and confidence.
            </p>

            <p>
              From the website system to the visual language and communication,
              every touchpoint was redesigned to feel dependable, modern,
              and precise.
            </p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={s6} alt="" />
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
              The resulting identity balances industrial robustness
              with modern presentation.
            </p>

            <p>
              Structured layouts. Confident typography.
              Controlled visual language.
            </p>

            <p>
              A system designed to communicate capability
              without unnecessary complexity.
            </p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure>
                  <img src={s7} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={s8} alt="" />
                </figure>
              </div>


            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3>The Outcome</h3>

          <div className="paradiv">
            <p>
              Rekha Bright Steels now communicates with greater authority, clearer positioning, and stronger consistency across platforms.
            </p>

            <p>
              The business evolved from appearing like a conventional supplier to feeling like a long-term industrial partner.
            </p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={s9} alt="" />
                </figure>
              </div>

              <div className="col-lg-4">
                <figure>
                  <img src={s10} alt="" />
                </figure>
              </div>
              <div className="col-lg-8">
                <figure>
                  <img src={s11} alt="" />
                </figure>
              </div>


            </div>
          </div>


        </div>

        <div className="scrilvideo">
          <div className="videocontainer" ref={videoScaleRef}>
            <img src={img2} alt="" />
            <div className="play">
              <a href="#!"> <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                <path d="M20 20.0004C19.9996 18.5928 20.3706 17.21 21.0755 15.9916C21.7805 14.7732 22.7944 13.7624 24.015 13.0612C25.2356 12.36 26.6195 11.9933 28.0272 11.9981C29.4348 12.0029 30.8162 12.379 32.032 13.0884L80.02 41.0804C81.2311 41.7831 82.2365 42.7914 82.9358 44.0044C83.6351 45.2175 84.0037 46.5928 84.0049 47.993C84.0062 49.3931 83.6399 50.7691 82.9427 51.9833C82.2455 53.1976 81.2418 54.2076 80.032 54.9124L32.032 82.9124C30.8162 83.6219 29.4348 83.998 28.0272 84.0027C26.6195 84.0075 25.2356 83.6408 24.015 82.9396C22.7944 82.2385 21.7805 81.2276 21.0755 80.0093C20.3706 78.7909 19.9996 77.4081 20 76.0004V20.0004Z" fill="#B1EBE0" stroke="#B1EBE0" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="thechallange">


          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={img3} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={img4} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={img5} alt="" />
                </figure>
              </div>


            </div>
          </div>


        </div>


          {/* Identity */}
        <div className="thechallange">
          <h3>Precis</h3>

          <div className="paradiv">
           <p>The goal was never to redesign the legacy, but to present it with greater clarity.</p>
           <p>Every decision focused on strengthening trust, modernizing perception, and reflecting the discipline the business was already built on.</p>
           <p>The result is a brand presence that feels experienced, grounded, and future-ready.</p>

          </div>

            <div className="soupimgsgal">
              <div className="row">
                <div className="col-lg-12">
                  <figure>
                    <img src={s12} alt="" />
                  </figure>
                </div>


              </div>
            </div>


        </div>

        {/* <FashionSlider/> */}
        <FashionSlider/>

      </div>
    </div> 

    )
    
} 
      
export default Details;