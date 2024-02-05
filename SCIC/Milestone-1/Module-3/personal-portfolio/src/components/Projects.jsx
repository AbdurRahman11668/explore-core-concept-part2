import { FaCode } from "react-icons/fa";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <div className="px-5 lg:px-20">
      <h1 className="text-4xl font-bold text-center ">PROJECTS</h1>
      <img
        className="w-4/12 mx-auto py-5"
        src="https://i.ibb.co/D7wZhnW/title-border.png"
        alt=""
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="border p-2">
          <img
            className=""
            src="https://i.ibb.co/0Bg2WxS/tourist-club.png"
            alt=""
          />
          <div className="px-5">
            <h3 className="font-bold pt-5">
              Used: ReactJS, DaisyUI, REST API, NodeJS, Express, MongoDB
            </h3>
            <p className="text-gray-600 pt-3 ">
              A react web application project to allowing travelers to plan and
              organize their entire trip in one place.
              <ul>
                <li className="text-sm list-disc ml-5">Responsive Design.</li>
                <li className="text-sm list-disc ml-5">
                  Login and registration functionality.
                </li>
                <li className="text-sm list-disc ml-5">
                  Product listings and descriptions.
                </li>
                <li className="text-sm list-disc ml-5">
                  Shopping cart and checkout process.
                </li>
              </ul>
            </p>
          </div>
          <div className="flex justify-center gap-10 flex-wrap py-5">
            <a
              href="https://github.com/AbdurRahman11668/tourist-club-client"
              className="flex btn text-[#1ABC9C] items-center font-semibold"
            >
              Client <FaCode className="ml-2"></FaCode>
            </a>
            <a
              href="https://github.com/AbdurRahman11668/tourist-club-server"
              className="flex btn text-[#1ABC9C] items-center font-semibold"
            >
              Server <FaCode className="ml-2"></FaCode>
            </a>
            <a
              href="https://tourist-club-1222.web.app/"
              className="flex btn text-[#1ABC9C] items-center font-semibold"
            >
              Live-Site{" "}
              <GiEarthAsiaOceania className="ml-2"></GiEarthAsiaOceania>
            </a>
          </div>
        </div>

        <div className="border p-2">
          <img
            className=""
            src="https://i.ibb.co/q0Hbw4g/brand-shop.png"
            alt=""
          />
          <div className="px-5">
            <h3 className="font-bold pt-5">
              Used: ReactJS, DaisyUI, REST API, NodeJS, Express, MongoDB
            </h3>
            <p className="text-gray-600 pt-3 ">
              A react web application project to help users by their specific
              needs, interests, and preferences.
              <ul>
                <li className="text-sm list-disc ml-5">Responsive Design.</li>
                <li className="text-sm list-disc ml-5">
                  Login and registration functionality.
                </li>
                <li className="text-sm list-disc ml-5">
                  Product listings and descriptions.
                </li>
                <li className="text-sm list-disc ml-5">
                  Shopping cart and checkout process.
                </li>
              </ul>
            </p>
          </div>
          <div className="flex justify-center gap-10 flex-wrap py-5">
            <a
              href="https://github.com/AbdurRahman11668/brand-shop-client"
              className="flex btn text-[#1ABC9C] items-center font-semibold"
            >
              Client <FaCode className="ml-2"></FaCode>
            </a>
            <a
              href="https://github.com/AbdurRahman11668/brand-shop-server"
              className="flex btn text-[#1ABC9C] items-center font-semibold"
            >
              Server <FaCode className="ml-2"></FaCode>
            </a>
            <a
              href="https://resonant-cassata-46b9a1.netlify.app/"
              className="flex btn text-[#1ABC9C] items-center font-semibold"
            >
              Live-Site{" "}
              <GiEarthAsiaOceania className="ml-2"></GiEarthAsiaOceania>
            </a>
          </div>
        </div>

        <div className="border p-2">
          <img
            className=""
            src="https://i.ibb.co/RDgdvCR/go-car-service.png"
            alt=""
          />
          <div className="px-5">
            <h3 className="font-bold pt-5">
              Used: ReactJS, DaisyUI, REST API, NodeJS, Express, MongoDB
            </h3>
            <p className="text-gray-600 pt-3 ">
              A react web application project to help the users to book a car
              withous any hassle.
              <ul>
                <li className="text-sm list-disc ml-5">Responsive Design.</li>
                <li className="text-sm list-disc ml-5">
                  Login and registration functionality.
                </li>
                <li className="text-sm list-disc ml-5">
                  Product listings and descriptions.
                </li>
                <li className="text-sm list-disc ml-5">
                  Shopping cart and checkout process.
                </li>
              </ul>
            </p>
          </div>
          <div className="flex justify-center gap-10 flex-wrap py-5">
            <a
              href="https://github.com/AbdurRahman11668/go-car-service-client"
              className="flex btn text-[#1ABC9C] items-center font-semibold"
            >
              Client <FaCode className="ml-2"></FaCode>
            </a>
            <a
              href="https://github.com/AbdurRahman11668/go-car-service-server"
              className="flex btn text-[#1ABC9C] items-center font-semibold"
            >
              Server <FaCode className="ml-2"></FaCode>
            </a>
            <a
              href="https://go-car-service.web.app/"
              className="flex btn text-[#1ABC9C] items-center font-semibold"
            >
              Live-Site{" "}
              <GiEarthAsiaOceania className="ml-2"></GiEarthAsiaOceania>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
