import React from "react";
import Fade from "react-reveal";
import img from "../../Assets/tasks.jpg";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="flex justify-center h-screen items-center flex-col p-5 mb-[50px] md:flex-row md:justify-evenly">
          <div className="lg:w-1/2 2xl:w-[800px] 4xl:w-[800px]">
            <Fade left>
              <h1 className="mb-[10px] text-black text-2xl font-bold md:text-3xl 4xl:text-4xl 16xl:text-5xl">
                Simple-Todo-App
              </h1>
              <p className="lg:text-[20px] 2xl:text-[20px] w-[300px] md:w-[400px] lg:w-[450px]">
                Welcome to my React-Todo-App where simplicity meets
                productivity! Stay Organized: Easily manage your tasks with a
                clean and simple interface. Boost Productivity: Prioritize your
                to-dos and get things done efficiently. Anytime, Anywhere:
                Access your tasks on the go with our mobile-friendly design.
                Ready to make life simpler? Start organizing with React-Todo-App
                today.
              </p>
            </Fade>
          </div>
          <div>
            <Fade left>
              <img
                className="mt-[30px] w-[300px] h-[200px] object-cover rounded-xl sm:w-[300px] sm:h-[300px] lg:w-[400px] xl:w-[500px] 4xl:h-[400px] 16xl:w-[600px]"
                src={img}
                alt="img"
              />
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
