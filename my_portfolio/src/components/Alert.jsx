// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AlertComponent = () => {
//   const showToast = () => {
//     toast("***Welcome to my Portfolio***");
//   };

//   const buttonStyle = {
//     backgroundColor: 'pink',
//     color: 'black',
//     border: 'inset',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     position:'relative',
//     left:'1350px',
//     bottom:'250px',
//   };

//   return (
//     <div>
//       <button onClick={showToast} style={buttonStyle}>Click here</button>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AlertComponent;

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AlertComponent.css';

const AlertComponent = () => {
  const handleAction = () => {
    // First Alert at the Start
    toast("***Welcome to my Portfolio***");

    // Simulate an action delay
    setTimeout(() => {
      // Second Alert at the End
      toast("Thank you for visiting");
    }, 25000); // Delay of 25 seconds
  };

  return (
    <div>
      <button onClick={handleAction} className="button">Click Here</button>
      <ToastContainer />
    </div>
  );
};

export default AlertComponent;
