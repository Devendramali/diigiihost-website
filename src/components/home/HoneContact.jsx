import React from 'react'
import { Link } from 'react-router-dom'

const HoneContact = () => {
  return (
    <div className='homecontact'>
        <div className="container">
            <h2>Partneriing with cliients iIs <br /> cruciial for success.</h2>

            <div className="mail">
                <a href="mainto:digihost@gmail.com">digihost@gmail.com</a>
                <a href="tel:+91 8945786321">+91 8945786321</a>
            </div>
            <div className="social">
                <p>Connect with Us on Social Media!</p>

                <ul>
                    <li><Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#1A766D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></Link></li>
                                        <li><Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#B1EBE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></Link></li>
                                        <li><Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#B1EBE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="#B1EBE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#B1EBE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></Link></li>
                                        <li><Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z" stroke="#B1EBE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></Link></li>
                </ul>
            </div>
            <div className="contactform">
                <h2>Drop A message</h2>
                <form action="">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contt">
                                <input type="text"  placeholder='First name'/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contt">
                                <input type="text"  placeholder='Last name'/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contt">
                                <input type="text"  placeholder='company'/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contt">
                                <input type="text"  placeholder='Phone'/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="contt custon select position-relative">
                            <select className="form-select">
                                <option value="">Select</option>
                            </select>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="select-arrow"
                            >
                                <path
                                d="M6 9L12 15L18 9"
                                stroke="#444444"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                            </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="contt custon select position-relative">
                            <select className="form-select">
                                <option value="">Select</option>
                            </select>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="select-arrow"
                            >
                                <path
                                d="M6 9L12 15L18 9"
                                stroke="#444444"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contt">
                                <textarea type="text" rows={6}  placeholder='Message'/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                           <button className='btn1'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    </div>
  )
}

export default HoneContact