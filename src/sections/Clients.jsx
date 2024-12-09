import React from "react";
import { clientReviews } from "../../constants/constants.js";

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear from my clients</h3>
      <div className="client-container">
        {clientReviews.map(({ id, name, review, img, position }) => {
          return (
            <div key={id} className={"client-review"}>
              <div>
                <p className="text-white font-light">{review}</p>
                <div className="flex gap-3 mt-4">
                  {/* <img
                    src={img}
                    alt={name}
                    className={"w-12 h-12 rounded-full"}
                  /> */}
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {position}
                    </p>
                  </div>
                </div>
                <div className="flex self-end items-center gap-2 mt-5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <img
                      key={i}
                      src="/assets/star.png"
                      alt="star"
                      className="w-6 h-6"
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Clients;
