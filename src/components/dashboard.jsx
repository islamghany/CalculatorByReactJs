import React from "react";
import OldResults from "./oldResults";
const Dashboard = ({ exp, results, inputRef,ic,op }) => {
  const renderResults = () => {
    if (results) {
      return results.map((item, idx) => {
        return (
          <OldResults
            key={idx}
            exp={item.exp}
            res={item.res}
            inputRef={inputRef}
            op={op}
            ic={ic}
          />
        );
      });
    }
  };
  return (
    <div className="calculator__body">
      <div className="calculator__oldResult">{renderResults()}</div>
      <div className="calculator__input">
        <input type="text"   style={{color:ic}}   readOnly="readonly" ref={inputRef} value={exp} />
      </div>
    </div>
  );
};

export default Dashboard;
