import React, { useState } from "react";

import img1 from "../../assets/blog/blog- (1).png";
import img2 from "../../assets/blog/blog- (2).png";
import img3 from "../../assets/blog/blog- (3).png";
import blog1 from "../../assets/blog/blogd.png"

const BlogDetails = () => {

      const blogData = [
        {
          id: 1,
          category: "Latest",
          tag: "Artificial Intelligence",
          date: "Feb 3 2026",
          title:
            "Discover how AI is transforming industries by enhancing efficiency, accuracy, and innovation across various sectors.",
          button: "Read Blog",
          img: img1,
          large: true,
        },
        {
          id: 2,
          category: "Trending",
          tag: "Blockchain Technology",
          date: "Feb 3 2026",
          title:
            "Explore the decentralized ledger system that ensures transparency and security in digital transactions.",
          button: "Read Blog",
          img: img2,
        },
        {
          id: 3,
          category: "Steel",
          tag: "Cybersecurity",
          date: "Feb 3 2026",
          title:
            "Explore the decentralized ledger system that ensures transparency and security in digital transactions.",
          button: "Read Blog",
          img: img3,
        },
    ]
    return (
        <div className='blogdetails'>
            <div className="container">
                <div className="row hedsmall">
                    <div className="col-lg-9">
                        <div className="bloadhead">
                            <ul>
                                <li>Artificial Intelligence</li>
                                <li>AI</li>
                            </ul>
                            <h2>Discover how AI is transforming industries by enhancing efficiency, accuracy, and innovation across various fields.</h2>
                            <p>Learn about the latest AI technologies that are revolutionizing the way we work, solve problems, and create new opportunities.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="leftdetaisl">
                            <div className="sidecon">
                                <p>Published Date</p>
                                <h4>April 27, 2024</h4>
                            </div>
                            <div className="sidecon">
                                <p>Author</p>
                                <h3>Alkesh Gupta</h3>
                            </div>
                            <div className="sidecon">
                                <p>Share Blog</p>
                                <ul>
                                    <li><button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 9V3H15M21 3L10 14M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="#B1EBE0" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></button></li>
                                    <li><button><svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                                        <path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="#B1EBE0" />
                                    </svg></button></li>
                                    <li><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6.94141 5.00002C6.94114 5.53046 6.73017 6.03906 6.35491 6.41394C5.97965 6.78883 5.47084 6.99929 4.94041 6.99902C4.40997 6.99876 3.90137 6.78779 3.52649 6.41253C3.1516 6.03727 2.94114 5.52846 2.94141 4.99802C2.94167 4.46759 3.15264 3.95899 3.5279 3.5841C3.90316 3.20922 4.41197 2.99876 4.94241 2.99902C5.47284 2.99929 5.98144 3.21026 6.35633 3.58552C6.73121 3.96078 6.94167 4.46959 6.94141 5.00002ZM7.00141 8.48002H3.00141V21H7.00141V8.48002ZM13.3214 8.48002H9.34141V21H13.2814V14.43C13.2814 10.77 18.0514 10.43 18.0514 14.43V21H22.0014V13.07C22.0014 6.90002 14.9414 7.13002 13.2814 10.16L13.3214 8.48002Z" fill="#B1EBE0"/>
                                    </svg></button></li>
                                    <li><button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <mask id="mask0_346_573" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                            <path d="M0 0H19.2V19.2H0V0Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_346_573)">
                                            <path d="M15.12 0.899658H18.0645L11.6325 8.26971L19.2 18.3003H13.2754L8.63177 12.2181L3.32434 18.3003H0.377143L7.25623 10.4146L0 0.90103H6.07543L10.2665 6.45943L15.12 0.899658ZM14.0846 16.5339H15.7166L5.184 2.57417H3.43406L14.0846 16.5339Z" fill="#B1EBE0" />
                                        </g>
                                    </svg></button></li>
                                    <li><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.003 8.4966 21.5353 6.97002 20.645L2.00402 22L3.35602 17.032C2.46497 15.5049 1.99692 13.768 2.00002 12C2.00002 6.477 6.47702 2 12 2ZM8.59202 7.3L8.39201 7.308C8.26271 7.31691 8.13636 7.35087 8.02002 7.408C7.91159 7.46951 7.81258 7.5463 7.72602 7.636C7.60602 7.749 7.53802 7.847 7.46502 7.942C7.09514 8.4229 6.89599 9.01331 6.89902 9.62C6.90102 10.11 7.02902 10.587 7.22902 11.033C7.63802 11.935 8.31102 12.89 9.19902 13.775C9.41302 13.988 9.62302 14.202 9.84902 14.401C10.9524 15.3724 12.2673 16.073 13.689 16.447L14.257 16.534C14.442 16.544 14.627 16.53 14.813 16.521C15.1042 16.5056 15.3885 16.4268 15.646 16.29C15.7769 16.2223 15.9047 16.1489 16.029 16.07C16.029 16.07 16.0714 16.0413 16.154 15.98C16.289 15.88 16.372 15.809 16.484 15.692C16.568 15.6053 16.638 15.5047 16.694 15.39C16.772 15.227 16.85 14.916 16.882 14.657C16.906 14.459 16.899 14.351 16.896 14.284C16.892 14.177 16.803 14.066 16.706 14.019L16.124 13.758C16.124 13.758 15.254 13.379 14.722 13.137C14.6663 13.1128 14.6067 13.0989 14.546 13.096C14.4776 13.0888 14.4084 13.0965 14.3432 13.1184C14.278 13.1403 14.2182 13.176 14.168 13.223C14.163 13.221 14.096 13.278 13.373 14.154C13.3315 14.2098 13.2744 14.2519 13.2088 14.2751C13.1433 14.2982 13.0723 14.3013 13.005 14.284C12.9398 14.2666 12.876 14.2446 12.814 14.218C12.69 14.166 12.647 14.146 12.562 14.11C11.9879 13.8599 11.4565 13.5215 10.987 13.107C10.861 12.997 10.744 12.877 10.624 12.761C10.2306 12.3842 9.88777 11.958 9.60401 11.493L9.54501 11.398C9.50328 11.3338 9.46905 11.265 9.44302 11.193C9.40502 11.046 9.50402 10.928 9.50402 10.928C9.50402 10.928 9.74702 10.662 9.86002 10.518C9.97002 10.378 10.063 10.242 10.123 10.145C10.241 9.955 10.278 9.76 10.216 9.609C9.93602 8.925 9.64668 8.24467 9.34802 7.568C9.28902 7.434 9.11402 7.338 8.95502 7.319C8.90102 7.31233 8.84701 7.307 8.79302 7.303C8.65874 7.2953 8.52411 7.29664 8.39002 7.307L8.59202 7.3Z" fill="#B1EBE0" />
                                    </svg></button></li>
                                    <li><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.24 2H11.346C9.582 2 8.184 2 7.091 2.148C5.965 2.3 5.054 2.62 4.336 3.341C3.617 4.062 3.298 4.977 3.147 6.107C3 7.205 3 8.608 3 10.379V16.217C3 17.725 3.92 19.017 5.227 19.559C5.16 18.649 5.16 17.374 5.16 16.312V11.302C5.16 10.021 5.16 8.916 5.278 8.032C5.405 7.084 5.691 6.176 6.425 5.439C7.159 4.702 8.064 4.415 9.008 4.287C9.888 4.169 10.988 4.169 12.265 4.169H15.335C16.611 4.169 17.709 4.169 18.59 4.287C18.3261 3.61329 17.8653 3.03474 17.2678 2.62678C16.6702 2.21883 15.9635 2.00041 15.24 2Z" fill="#B1EBE0" />
                                        <path d="M6.60156 11.397C6.60156 8.67101 6.60156 7.30801 7.44556 6.46101C8.28856 5.61401 9.64556 5.61401 12.3616 5.61401H15.2416C17.9566 5.61401 19.3146 5.61401 20.1586 6.46101C21.0026 7.30801 21.0016 8.67101 21.0016 11.397V16.217C21.0016 18.943 21.0016 20.306 20.1586 21.153C19.3146 22 17.9566 22 15.2416 22H12.3616C9.64656 22 8.28856 22 7.44556 21.153C6.60156 20.306 6.60156 18.943 6.60156 16.217V11.397Z" fill="#B1EBE0" />
                                    </svg></button></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <figure>
                    <img src={blog1} alt="" />
                </figure>

                <div className="detaicontent">
                    <div className="row">
                        <div className="col-lg-9">
                            <p>Artificial intelligence is reshaping the world around us, driving major changes in how industries operate. From healthcare to finance, AI boosts efficiency by automating routine tasks and improving accuracy in data analysis. It enables businesses to solve complex problems faster and unlock new opportunities for innovation. By learning from vast amounts of data, AI systems can predict trends, personalize experiences, and optimize processes. This transformation is not just about technology but also about empowering people to work smarter and create value in ways never before possible. As AI continues to evolve, it promises to revolutionize sectors like education, manufacturing, and customer service, making them more responsive and adaptive to changing needs. Embracing AI means embracing a future where creativity and technology work hand in hand to build a better world.</p>
                    <h2>Discover how AI is transforming industries by enhancing efficiency, accuracy, and innovation across various fields.</h2>
                    <p>Artificial intelligence is reshaping the world around us, driving major changes in how industries operate. From healthcare to finance, AI boosts efficiency by automating routine tasks and improving accuracy in data analysis. It enables businesses to solve complex problems faster and unlock new opportunities for innovation. By learning from vast amounts of data, AI systems can predict trends, personalize experiences, and optimize processes. This transformation is not just about technology but also about empowering people to work smarter and create value in ways never before possible. As AI continues to evolve, it promises to revolutionize sectors like education, manufacturing, and customer service, making them more responsive and adaptive to changing needs. Embracing AI means embracing a future where creativity and technology work hand in hand to build a better world.</p>
                        </div>
                    </div>
                </div>

                <div className="relatedblog">
                    <h2>Related Blogs</h2>
                     <div className="row">
                        {blogData.map((item) => (
                            <a href="#!"
                            key={item.id}
                            className={`blog-card col-lg-4 ${item.large ? "large-card" : ""}`}
                            >
                            <span className="blog-tag">{item.tag}</span>

                            <div className="blog-img">
                                <img src={item.img} alt="" />
                            </div>

                            <p className="blog-date">Published On : {item.date}</p>

                            <h3>{item.title}</h3>
                            <p>Understand how blockchain is disrupting finance, supply chain, and digital identity verification with its immutable records.</p>

                            <a href="" className="btn2">
                                {item.button}
                            </a>
                            </a>
                        ))}
                        </div>
                </div>

            </div>
        </div>
    )
}

export default BlogDetails