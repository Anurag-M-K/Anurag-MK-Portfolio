import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Iam a self taught Mern stack developer, 
My specialities include quickly learning new skills and programming languages, problem solving,
domain driven design, responsive design principles, Model view Controller (MVC) method of organising
code. So far i have HTML , CSS ,C,Java, Javascript, React, Express , Nodejs, Mongodb, Rest API , SQL,NOSQL,Datastructures and algorithms
Redux,Socket.i.o, Git/GitHub, MUI, Under my belt. Im still enthusiastically grabbing onto 
any other programming languages, frameworks, or principles i can integrate into the coding web in 
my head.
        </p>

        <br />

  
      </div>
    </div>
  );
};

export default About;
