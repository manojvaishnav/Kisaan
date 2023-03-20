import React from "react";

const Farmer = (props) => {
  return (
    <>
      <div className="main">
        <div className="left">
          <img
            src={props.image}
            alt="Farmer"
          />
        </div>
        <div className="right">
          <div className="intro">
            <h1>Are You A Landlord?</h1>
            <p>
              If you are a lanlord then this is the best portal for you to find
              the Farmers for your land.
            </p>
          </div>
          <div className="menu">
            <form>
              <button>Register</button>
            </form>
            <form>
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Farmer;