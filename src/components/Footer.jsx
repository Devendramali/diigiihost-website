import React from 'react'
import footerlog from "./../assets/footer.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerconainer">
            <h2>Craftiing viisual storiies that capture the essence of your brand.</h2>

            <ul className='footermenu'>
                <li><Link>HOME</Link></li>
                <li><Link>Portfolio</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Projects</Link></li>
                <li><Link>Blogs</Link></li>
                <li><Link>Services</Link></li>
            </ul>

            <div className="policy">
                <ul>
                    <li><Link>Privacy Policy</Link></li>
                    <li><Link>User Agreement</Link></li>
                    <li><Link>Cookie Policy</Link></li>
                </ul>
                <ul>
                    <li><Link>Instagram</Link></li>
                    <li><Link>Facebook</Link></li>
                    <li><Link>Linkedin</Link></li>
                    <li><Link>Threads</Link></li>
                </ul>
            </div>

        </div>
        <hr />
        <p className="copyright">Copyright © 2026. All Rights Reserved. Powered By : DIIGIIHOST</p>
        <div className="footerlogo">
            <img src={footerlog} alt="" />

        </div>

    </div>
  )
}

export default Footer

