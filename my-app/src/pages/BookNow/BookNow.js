import React from "react";

import "../../pages/BookNow/BookNow.scss";

export const BookNow = () => {
  return (
    <>
      <div className="Heading">Select Services</div>
      <div className="Service-Container">
        <div className="Style-heading">Cutting + styling</div>
        <div className="StyleListCont">
          <div className="StyleListCont2">
            <input type="checkbox" />
            <div className="Style-List">Ladies, Wash - Cut + Blowdry</div>
            <span className="StylePrice">Price: $30</span>
          </div>
        </div>

        <div className="StyleListCont">
          <div className="StyleListCont2">
            <input type="checkbox" className="check-input" />
            <div className="Style-List">Ladies, Wash - Cut + Blowdry</div>
            <span className="StylePrice">Price: $30</span>
          </div>
        </div>
        <div className="StyleListCont">
          <div className="StyleListCont2">
            <input type="checkbox" className="check-input" />
            <div className="Style-List">Ladies, Wash - Cut + Blowdry</div>
            <span className="StylePrice">Price: $30</span>
          </div>
        </div>
        <div className="StyleListCont">
          <div className="StyleListCont2">
            <input type="checkbox" className="check-input" />
            <div className="Style-List">Ladies, Wash - Cut + Blowdry</div>
            <span className="StylePrice">Price: $30</span>
          </div>
        </div>
        <div className="StyleListCont">
          <div className="StyleListCont2">
            <input type="checkbox" className="check-input" />
            <div className="Style-List">Ladies, Wash - Cut + Blowdry</div>
            <span className="StylePrice">Price: $30</span>
          </div>
        </div>
      </div>
      <div className="CountCartCont">
        <div className="ServiceTot">
          <div className="ServiceTotal">5 services</div>
          <div className="TotPrice">From $30</div>
        </div>

        <button className="SubmitTot">Book</button>
      </div>
    </>
  );
};

export default BookNow;
