import React from "react";

// const Counter = () => <div>counter</div>;

// const Counter = (props) => {
//   console.log(props);

//   return (
//     <div>
//       <div>counter</div>
//     </div>
//   );
// };

const Counter = ({ count, increment, decrement }) => (
  <>
    <div>{count}</div>
    <button onClick={() => increment(1)}>+</button>
    <button onClick={() => decrement(1)}>-</button>
  </>
);

export default Counter;
