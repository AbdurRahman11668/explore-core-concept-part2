import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold text-center ">CONTACT</h1>
      <img
        className="w-4/12 mx-auto py-5"
        src="https://i.ibb.co/D7wZhnW/title-border.png"
        alt=""
      />
      <div className="flex justify-center flex-wrap gap-10">
        <div className="">
          <FaPhone className="mx-auto mb-3 w-6 h-6"></FaPhone>
          <h3 className="text-xl font-semibold">+8801795-649223</h3>
        </div>
        <div className="">
          <IoMdMail className="mx-auto mb-3 w-6 h-6"></IoMdMail>
          <h3 className="text-xl font-semibold">+8801795-649223</h3>
        </div>
        <div className="">
          <FaLocationDot className="mx-auto mb-3 w-6 h-6"></FaLocationDot>
          <h3 className="text-xl font-semibold">+8801795-649223</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
