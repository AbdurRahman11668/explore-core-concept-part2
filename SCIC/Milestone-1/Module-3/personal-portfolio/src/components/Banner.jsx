import { Link } from "react-scroll";


const Banner = () => {

  
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row   hero ">
        <div className="lg:w-1/2 hero-content grid place-items-start px-5 lg:px-32 items-center">
          <p className="text-[#1aBC9c] font-semibold text-xl pt-10 lg:pt-0">
            Hello I'm
          </p>
          <h3 className="text-[#2C3E50] font-bold text-3xl">MD ABDUR RAHMAN</h3>
          <h5 className="text-[#24313f] font-semibold text-lg">
            Junior Mern Stack Developer
          </h5>
          <p className="text-gray-600 font-medium text-sm">
            I am a passionate and creative web developer on a mission to turn
            ideas into interactive experiences.
          </p>
          <div className="flex space-x-5">
            <Link
              to="hire"
              smooth={true}
              duration={500}
              className="text-white hover:text-[#1ABC9C] text-lg font-bold"
            >
              <button className="btn border-2 px-5 border-[#1abc9c] bg-[#1aBC9c] text-white hover:bg-white hover:border-[#1abc9c] hover:text-[#1aBC9c]">
                Hire Me
              </button>
            </Link>
            <a href="https://drive.google.com/file/d/1gyY06WyptIXpFLCJ6XxPf4kEgHmBEmuk/view?usp=sharing"
              download="CV.pdf"
              className="btn border-2 px-5 border-[#1abc9c] bg-[#1aBC9c] text-white hover:bg-white hover:border-[#1abc9c] hover:text-[#1aBC9c]"
            >
              Downalod CV
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <img
            className="lg:w-1/3 mx-auto lg:mt-10 bg-white border-2 border-[#1ABC9C] p-5"
            src="https://i.ibb.co/mzDZ63c/IMG-4859-Photo-Room-png-Photo-Room.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
