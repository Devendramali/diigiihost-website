import React, { useState } from "react";

import img1 from "../../assets/blog/blog- (1).png";
import img2 from "../../assets/blog/blog- (2).png";
import img3 from "../../assets/blog/blog- (3).png";
import img4 from "../../assets/blog/blog- (4).png";
import img5 from "../../assets/blog/blog- (5).png";
import img6 from "../../assets/blog/blog- (6).png";
import img7 from "../../assets/blog/blog- (7).png";
import img8 from "../../assets/blog/blog- (8).png";
import img9 from "../../assets/blog/blog- (9).png";
import img10 from "../../assets/blog/blog- (10).png";
import img11 from "../../assets/blog/blog- (11).png";
import img12 from "../../assets/blog/blog- (12).png";
import img13 from "../../assets/blog/blog- (13).png";

const BlogList = () => {
  const [active, setActive] = useState("All");

  const filters = [
    "All",
    "Latest",
    "Trending",
    "Steel",
    "Construction",
    "Material",
  ];

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
    {
      id: 4,
      category: "Construction",
      tag: "Machine Learning",
      date: "Feb 3 2026",
      title:
        "Explore the decentralized ledger system that ensures transparency and security in digital transactions.",
      button: "Read Blog",
      img: img4,
    },
    {
      id: 5,
      category: "Material",
      tag: "Automation",
      date: "Feb 3 2026",
      title:
        "Explore the decentralized ledger system that ensures transparency and security in digital transactions.",
      button: "Read Blog",
      img: img5,
    },
    {
      id: 6,
      category: "Latest",
      tag: "Renewable Energy",
      date: "Feb 3 2026",
      title:
        "Dive into sustainable energy sources like solar, wind, and hydro that are reshaping the global energy landscape.",
      button: "Read Blog",
      img: img6,
    },
    {
      id: 7,
      category: "Trending",
      tag: "Smart Homes",
      date: "Feb 3 2026",
      title:
        "Dive into sustainable energy sources like solar, wind, and hydro that are reshaping the global energy landscape.",
      button: "Read Blog",
      img: img7,
    },
    {
      id: 8,
      category: "Steel",
      tag: "Electric Vehicles",
      date: "Feb 3 2026",
      title:
        "Explore the rapid growth of electric vehicles transforming transport and reducing fossil fuel dependence.",
      button: "Learn More",
      img: img8,
    },
    {
      id: 9,
      category: "Construction",
      tag: "Robotics",
      date: "Feb 3 2026",
      title:
        "Discover how AI is transforming industries by enhancing efficiency, accuracy, and innovation across various fields.",
      button: "Read Blog",
      img: img9,
    },
    {
      id: 10,
      category: "Material",
      tag: "3D Printing",
      date: "Feb 3 2026",
      title:
        "Explore the decentralized ledger system that ensures transparency and security in digital transactions.",
      button: "Read Blog",
      img: img10,
    },
    {
      id: 11,
      category: "Latest",
      tag: "IoT",
      date: "Feb 3 2026",
      title:
        "Delve into the integration of IoT, AI, and automation to create smarter, more connected spaces.",
      button: "Read Blog",
      img: img11,
    },
    {
      id: 12,
      category: "Trending",
      tag: "Product Design",
      date: "Feb 3 2026",
      title:
        "Understand the principles of modern value-driven design in technology products.",
      button: "Read Blog",
      img: img12,
    },
    {
      id: 13,
      category: "Steel",
      tag: "Future Tech",
      date: "Feb 3 2026",
      title:
        "Dive into sustainable energy sources like solar, wind, and hydro reshaping the digital energy landscape.",
      button: "Read Blog",
      img: img13,
    },
  ];

  const filteredBlogs =
    active === "All"
      ? blogData
      : blogData.filter((item) => item.category === active);

  return (
    <div className="bloglist">
      <div className="container">
        <div className="blog-filter">
          {filters.map((item, index) => (
            <a
              key={index}
              className={active === item ? "btn1" : "btn2"}
              onClick={() => setActive(item)}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="blog-grid">
          {filteredBlogs.map((item) => (
            <a href="#!"
              key={item.id}
              className={`blog-card ${item.large ? "large-card" : ""}`}
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
  );
};

export default BlogList;