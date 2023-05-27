import React from "react";
import ds from "../assets/portfolio/ds.png";
import olx2 from "../assets/portfolio/olx2.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import bugfixer from "../assets/portfolio/bugfixer.png";
import todo from "../assets/portfolio/new.png";
import netflix from "../assets/portfolio/netflix.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ds,
      link:"https://github.com/Anurag-M-K/data-structure---javascript"
    },
    {
      id: 2,
      src: bugfixer,
      link:"bugfixer-micro.netlify.app"
    },
    {
      id: 3,
      src: ecommerce,
      link:"https://github.com/Anurag-M-K/Ecommerce"
    },
    {
      id: 4,
      src: todo,
      link:"https://github.com/Anurag-M-K/Todo-App-"
    },
    {
      id: 5,
      src: olx2,
      link:""
    },
    {
      id: 6,
      src: netflix,
      link:"https://github.com/Anurag-M-K/netflix-react"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img style={{minHeight:"179px",maxHeight:"1790px"}}
                src={src}
                alt=""
                className="rounded-md duration-200 min-h-179 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href={link} target="_blank" rel="noreferrer">
                <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
