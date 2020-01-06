import React from "react";

const OldResults = ({ exp, res, inputRef,ic,op }) => {
  return (
    <div className="res">
      <span
        style={{color :ic}}
        className="res__exp"
        onClick={() => {
          inputRef.current.value = exp;
        }}
      >
        {exp}
      </span>
      <span
      style={{color :op}}
        className="res__res"
        onClick={() => {
          inputRef.current.value = res;
        }}
      >
        = {res}
      </span>
    </div>
  );
};
export default OldResults;
