import React from "react";

const Marchant=(props)=>{
    return(
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
            <h1>Are You A Merchant?</h1>
            <p>
              If you are a merchant then this is the best portal for you to sell Machines and Tools.
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
    )
}

export default Marchant;