const Education = () => {
  return (
    <div className="pt-10">
      <h1 className="text-4xl font-bold text-center ">EDUCATION</h1>
      <img
        className="w-4/12 mx-auto py-5"
        src="https://i.ibb.co/D7wZhnW/title-border.png"
        alt=""
      />
      <div>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start text-[#1ABC9C] font-semibold">2022</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-[#1ABC9C]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end border-[#1ABC9C] timeline-box">
              <h1 className="text-lg font-bold">BSc in Computer Science and Engineering</h1>
              <p className="py-2 text-sm text-[#1ABC9C] font-semibold">Daffodil International University</p>
              <p className="text-sm font-semibold text-gray-700">3.19 (out of 4.0)</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start text-[#1ABC9C] font-semibold">2017</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-[#1ABC9C]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end border-[#1ABC9C] timeline-box">
              <h1 className="text-lg font-bold">HSC</h1>
              <p className="py-2 text-sm text-[#1ABC9C] font-semibold">Kalikapur Abdul Matin Khasru College</p>
              <p className="text-sm font-semibold text-gray-700">Science</p>
              <p className="text-sm font-semibold text-gray-700">4.42 (out of 5)</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start text-[#1ABC9C] font-semibold">2015</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-[#1ABC9C]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box border-[#1ABC9C]">
              <h1 className="text-lg font-bold">SSC</h1>
              <p className="py-2 text-sm text-[#1ABC9C] font-semibold">Rose Garden International School</p>
              <p className="text-sm font-semibold text-gray-700">Science</p>
              <p className="text-sm font-semibold text-gray-700">5.00 (out of 5)</p>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
