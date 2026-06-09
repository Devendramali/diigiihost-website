import React from 'react'
import footerlog from "./../assets/footer.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerconainer">
            <h2 data-gsap>Craftiing viisual storiies that capture the essence of your brand.</h2>

            <ul className='footermenu'>
                <li data-gsap><Link>HOME</Link></li>
                <li data-gsap><Link>Portfolio</Link></li>
                <li data-gsap><Link>About</Link></li>
                <li data-gsap><Link>Projects</Link></li>
                <li data-gsap><Link>Blogs</Link></li>
                <li data-gsap><Link>Services</Link></li>
            </ul>

            <div className="policy">
                <ul>
                    <li data-gsap><Link>Privacy Policy</Link></li>
                    <li data-gsap><Link>User Agreement</Link></li>
                    <li data-gsap><Link>Cookie Policy</Link></li>
                </ul>
                <ul>
                    <li data-gsap><Link>Instagram</Link></li>
                    <li data-gsap><Link>Facebook</Link></li>
                    <li data-gsap><Link>Linkedin</Link></li>
                    <li data-gsap><Link>Threads</Link></li>
                </ul>
            </div>

        </div>
        <hr />
        <p className="copyright" data-gsap>Copyright © 2026. All Rights Reserved. Powered By : DIIGIIHOST</p>
        <div className="footerlogo" data-gsap>
            <img src={footerlog} alt="" />

        </div>

    </div>
  )
}

export default Footer

