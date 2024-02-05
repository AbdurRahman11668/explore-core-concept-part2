import { Typewriter } from "react-simple-typewriter";

const About = () => {

  return (
    <div>
      <h1 className="text-4xl font-bold text-center ">ABOUT</h1>
      <img
        className="w-4/12 mx-auto py-5"
        src="https://i.ibb.co/D7wZhnW/title-border.png"
        alt=""
      />
      <div className="">
        <div className="px-5">
          <h3 className="font-semibold text-lg text-[#2C3E50] text-center">
            Hello there! I'm a passionate MERN Stack Developer with a love for
            turning ideas into reality through clean and efficient code. My
            journey in the world of web development began with a fascination for
            creating interactive and seamless user experiences.
          </h3>
        </div>
        <h2 className="text-2xl font-bold text-gray-700 pt-3 text-center">
          <span className="font-semibold text-[#1aBC9c] text-xl ">
            <Typewriter
              words={["I'm Md Abdur Rahman", "Mern Stack Developer", "Interested in Coding 🏃‍♂️", "Curious to learn new things!"]}
              loop={1000}
              cursor
              cursorStyle=" /"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default About;
