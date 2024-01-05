import React, { useEffect, useState } from "react";

const UseEffect = () => {
  //const initialData = 15;
  const [myNum, setMyNum] = useState(0);
  //console.log(myNum);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
