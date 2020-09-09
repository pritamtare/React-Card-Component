import React from "react";

function Card(props) {
  return (
    <>
      
       <div className="cards">
             <div className="flex">
                      <div className="carding">
                            <img src={props.IMG} alt="images" />
                            <div className="cardBody">
                                  <h1 className="Heading"> {props.HEADING} </h1>
                                  <p className="desc">{props.DESC} </p>
                                  <a href={props.LINK}>
                                      <button>Watch Now</button>
                                </a>
                            </div>
                      </div>
              </div>
      </div>
       
    </>
  );
}

export default Card;
