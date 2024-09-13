// import React from 'react';
// import Loader from 'react-loader-spinner';

// export const Loading = () => {
//   return (
//     <div className="flex justify-center items-center">
//         <Loader type="puff" color="#00BFFF" height={550} width={80}/>
//     </div>
//   )
// }


// import React from 'react';
// import { Puff } from 'react-loader-spinner';

// export const Loading = () => {
//   return (
//     <div className="flex justify-center items-center">
//       <Puff color="#00BFFF" height={550} width={80} />
//     </div>
//   );
// }


import React from 'react';
import { Puff as Loader } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader color="#00BFFF" height={550} width={80} />
    </div>
  );
}

export default Loading;
