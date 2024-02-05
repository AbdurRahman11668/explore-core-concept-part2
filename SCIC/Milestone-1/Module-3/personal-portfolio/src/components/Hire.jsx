const Hire = () => {
  return (
    <div className=" bg-base-200 py-10">
        <h1 className="text-4xl font-bold text-center ">WANT TO HIRE ME?</h1>
      <img
        className="w-4/12 mx-auto py-5"
        src="https://i.ibb.co/D7wZhnW/title-border.png"
        alt=""
      />
      <div className="">
        <div className="max-w-xl mx-auto">
          <div className=" shrink-0 w-full shadow-2xl bg-base-100  rounded-lg">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message*</span>
                </label>
                <textarea
                  type="text"
                  placeholder="message"
                  className="textarea textarea-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#1aBC9c] border border-[#1aBC9c] text-white hover:bg-white hover:text-[#1aBC9c] hover:border-[#1aBC9c]">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
