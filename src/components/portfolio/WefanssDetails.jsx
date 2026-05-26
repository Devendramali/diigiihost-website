import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import wefanss from "../../assets/soup/wefanss.png"
// import lomavideo from "../../assets/soup/lomavideo.mp4"
import wefanss1 from "../../assets/soup/wefanss1.png"
import wefanss2 from "../../assets/soup/wefanss2.png"
import wefanss3 from "../../assets/soup/wefanss3.png"
import wefanss4 from "../../assets/soup/wefanss4.png"
import wefanss5 from "../../assets/soup/wefanss5.png"
import wefanss6 from "../../assets/soup/wefanss6.png"
import wefanss7 from "../../assets/soup/wefanss7.png"
import wefanss8 from "../../assets/soup/wefanss8.png"
import wefanss9 from "../../assets/soup/wefanss9.png"
import wefanss10 from "../../assets/soup/wefanss10.png"
import wefanss11 from "../../assets/soup/wefanss11.png"
import wefanss12 from "../../assets/soup/wefanss12.png"

import FashionSlider from "../soupherb/Slider"
// import FashionSlider from "./Slider"

gsap.registerPlugin(ScrollTrigger)

const WefanssDetails = () => {
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
          x: window.innerWidth <= 991 ? "0%" : "40%",
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
          <img src={wefanss} alt="" />
        </figure>

        <h3 className="dettext">
          A youth-driven identity designed around <br /> energy, culture, and digital engagement.
        </h3>

        <div className="bigtextcontainer" ref={sectionRef}>
          <h2 ref={textRef}>Wefanss</h2>
        </div>

        {/* <div className="subloader">
          <video
            src={lomavideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div> */}

        <div className="soupimgsgal mb-5 mt-0">
          <div className="row">
            <div className="col-lg-12">
              <figure>
                <img src={wefanss1} alt="" />
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
                <img src={wefanss2} alt="" />
              </figure>
            </div>
            <div className="col-lg-6">
              <figure>
                <img src={wefanss3} alt="" />
              </figure>
            </div>
          </div>
        </div>

        {/* Challenge */}
        <div className="thechallange">
          <h3>The Challenge</h3>

          <div className="paradiv">
            <p>
              We Fanss needed a presence <br /> that could immediately connect <br /> with a younger, digitally native audience.
            </p>
            <p>
              The communication lacked consistency. <br /> The identity felt fragmented. <br /> And the brand personality <br /> was not translating effectively across platforms.
            </p>
            <p>
              The challenge was to create a system <br /> that felt expressive, <br /> recognizable, <br /> and culturally relevant.
            </p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={wefanss4} alt="" />
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
                  <img src={wefanss5} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={wefanss6} alt="" />
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
              We approached the brand <br /> through the rhythm of online communities.
            </p>
            <p>
              Fast-moving. <br /> Interactive. <br /> Emotionally driven.
            </p>
            <p>
              From the identity system <br /> to social communication, <br /> visual storytelling, <br /> and digital execution  <br /> every touchpoint was designed <br /> to feel energetic, social, and highly engaging.
            </p>


          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure>
                  <img src={wefanss7} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={wefanss8} alt="" />
                </figure>
              </div>
              <div className="col-lg-12">
                <figure>
                  <img src={wefanss9} alt="" />
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
              The resulting identity balances <br /> boldness with structure.
            </p>

            <p>
              Expressive visuals. <br /> Dynamic layouts. <br /> Youth-centric communication. <br /> High-energy digital language.
            </p>

            <p>
              A system designed to feel vibrant <br /> without becoming chaotic.
            </p>
          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-6">
                <figure>
                  <img src={wefanss10} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={wefanss11} alt="" />
                </figure>
              </div>



            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="thechallange">
          <h3>The Outcome</h3>

          <div className="paradiv">
            <p>We Fanss now communicates<br /> with greater consistency,<br /> stronger audience recall,<br /> and a far more engaging digital presence.</p>
            <p>The brand evolved<br /> from appearing like a content page<br /> to feeling like a digital-first community brand.</p>



          </div>

          <div className="soupimgsgal">
            <div className="row">
              <div className="col-lg-12">
                <figure>
                  <img src={wefanss12} alt="" />
                </figure>
              </div>




            </div>
          </div>


        </div>

        {/* <div className="scrilvideo">
          <div className="videocontainer" ref={videoScaleRef}>
                 <video
                        src={loma9}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
            
          </div>
        </div> */}

       


        {/* Identity */}
        <div className="thechallange">
          <h3>Precis</h3>

          <div className="paradiv">
            <p>Youth brands survive on relevance, <br /> but they grow through consistency.</p>
            <p>Every decision across the system <br /> was designed to strengthen engagement, <br /> improve recognition, <br /> and create a more connected audience experience.</p>
            <p>The result is a brand presence <br /> that feels current, <br /> interactive, <br /> and culturally aware.</p>

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

export default WefanssDetails;