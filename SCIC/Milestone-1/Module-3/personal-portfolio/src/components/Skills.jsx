const Skills = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold text-center ">SKILLS</h1>
      <img
        className="w-4/12 mx-auto py-5"
        src="https://i.ibb.co/D7wZhnW/title-border.png"
        alt=""
      />

      <div className="px-10 lg:px-20">
        <h3 className="text-2xl text-[#1ABC9C] font-semibold text-center">
          Frontend
        </h3>
        <div className="flex gap-5 flex-wrap justify-center pt-3">
          <img src="https://i.ibb.co/FhBzH22/html5-E34-F26-1.png" alt="" />
          <img src="https://i.ibb.co/YLM6Txv/css3-1572-B6.png" alt="" />
          <img src="https://i.ibb.co/bH4NVJn/javascript-323330.png" alt="" />
          <img src="https://i.ibb.co/3pNNRRC/React-20232-A.png" alt="" />
        </div>
      </div>

      <div className="px-10 lg:px-20">
        <h3 className="text-2xl text-[#1ABC9C] font-semibold text-center pt-3">
          Backend
        </h3>
        <div className="flex gap-5 flex-wrap justify-center pt-5">
          <img src="https://i.ibb.co/R9gKSNS/Node.png" alt="" />
          <img src="https://i.ibb.co/NnbtQsk/Express.png" alt="" />
          <img src="https://i.ibb.co/xYJq6WF/Mongo-DB-4-EA94-B.png" alt="" />
        </div>
      </div>

      <div className="px-10 lg:px-20">
        <h3 className="text-2xl text-[#1ABC9C] font-semibold text-center pt-3">
          Tools
        </h3>
        <div className="flex gap-5 flex-wrap justify-center pt-5">
          <img src="https://i.ibb.co/fF2F83Y/Visual-Studio-5-C2-D91.png" alt="" />
          <img src="https://i.ibb.co/YhQPqYh/vercel-000000.png" alt="" />
          <img src="https://i.ibb.co/2KrzY1Z/netlify-000000.png" alt="" />
          <img src="https://i.ibb.co/qgMgSm1/Git-Hub-100000.png" alt="" />
          <img src="https://i.ibb.co/2KrzY1Z/netlify-000000.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
