/* eslint-disable @next/next/no-img-element */
"use Client";
import Image from "next/image";
import donation4 from "../../assets/images/donation-4.png";
const Achievement = () => {
  return (
    <div className="card w-full bg-blue-100 shadow-xl image-full">
      <figure>
        <img
          className="w-full h-64"
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D"
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-col lg:flex-row">
        <div className="mx-auto my-8 w-1/2 space-y-3">
          <p className="text-white font-bold text-xl">Ready To Contribute</p>
          <p className="text-amber-400 font-bold text-3xl">
            WE SAVE 10000+ CHILDREN FROM HUNGER
          </p>
          <p className="text-white text-lg">
            Next Donation connects nonprofits, donors, and companies in nearly
            every country in the world. We help fellow nonprofits access the
            funding, tools, training, and support they need to serve their
            communities.
          </p>
          <button className="btn btn-warning text-white font-bold">
            Donate Now
          </button>
        </div>
        <div className="stats shadow bg-transparent ">
          <div className="stat place-items-center">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-amber-300 text-xl font-bold">
              Awards
            </div>
            <div className="stat-value text-white">524</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title  text-amber-300 text-xl font-bold">
              Volunteers
            </div>
            <div className="stat-value  text-white ">4,200</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-amber-300 text-xl font-bold">
              Projects
            </div>
            <div className="stat-value  text-white">1,200</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
