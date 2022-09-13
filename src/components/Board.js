// import React, { useEffect, useState } from "react";

// export default function Board(props) {

//     return (<></>)
// }

import React, { useEffect, useState } from "react";

export default function Board(props) {
  const array = new Array(props.GridSize);
  array.fill(0);
  return (
    <>
      <div className="board">
        {array.map(() => {
          return (
            <div className="board-row">
              {array.map((index) => {
                return <div key={index} className="board-box"></div>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

