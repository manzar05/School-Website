// import React from 'react';
// // import CardButton from './CardButton';
// import CardButton from '../Buttons/CardButton';

// const PopularCards = ({ title, description, image, tableData }) => {
//   const tableStyle = {
//     borderCollapse: 'collapse',
//     width: '100%', // Ensure the table takes full width if needed
//   };

//   const cellStyleHeader = {
//     borderRight: '1px solid #d5d5d5bf',
//     fontWeight: 'bold',
//     padding: '0.25rem 1rem',
//     textAlign: 'right',
    
//   };

//   const cellStyle = {
//     padding: '0.25rem 1rem',
//     borderBottom: '1px solid #d5d5d5bf',
//   };

//   const rowStyle = {
//     borderBottom: '1px solid #d5d5d5bf',
//   };

//   return (
//     <div className="card_container max-w-sm rounded overflow-hidden shadow-lg">
//       <div className="header_card">
//         <img src={image} alt="classroom img" className="w-full" />
//       </div>

//       <div className="flex items-center justify-center flex-col gap-4 py-4 px-2">
//         <h2 className="font-bold text-2xl">{title}</h2>
//         <p className="text-gray-700 px-3 text-center">
//           {description}
//         </p>
//       </div>
//       <hr />
//       <div className="flex flex-col justify-center items-center py-4">
//         <div className="table-container flex justify-center items-center py-5 px-4">
//         <table style={tableStyle}>
//             <tbody>
//               <tr style={rowStyle}>
//                     <td style={cellStyleHeader}>{tableData.firstHeader}</td>
//                     <td style={cellStyle}>{tableData.firstData}</td>
//               </tr>
//               <tr style={rowStyle}>
//                     <td style={cellStyleHeader}>{tableData.secondHeader}</td>
//                     <td style={cellStyle}>{tableData.secondData}</td>
//               </tr>
//               <tr style={rowStyle}>
//                     <td style={cellStyleHeader}>{tableData.thirdHeader}</td>
//                     <td style={cellStyle}>{tableData.thirdData}</td>
//               </tr>
//               <tr style={rowStyle}>
//                     <td style={cellStyleHeader}>{tableData.forthHeader}</td>
//                     <td style={cellStyle}>{tableData.forthData}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <CardButton title="Join Now"/>
//       </div>
//     </div>
//   );
// };

// export default PopularCards;
import React from 'react';
import CardButton from '../Buttons/CardButton';

const PopularCards = ({ title, description, image, tableData }) => {
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const cellStyleHeader = {
    borderRight: '1px solid #d5d5d5bf',
    fontWeight: 'bold',
    padding: '0.25rem 1rem',
    textAlign: 'right',
  };

  const cellStyle = {
    padding: '0.25rem 1rem',
    borderBottom: '1px solid #d5d5d5bf',
  };

  const rowStyle = {
    borderBottom: '1px solid #d5d5d5bf',
  };

  return (
    <div className="card_container max-w-sm rounded overflow-hidden shadow-lg">
      <div className="header_card">
        <img src={image} alt="classroom img" className="w-full" />
      </div>

      <div className="flex items-center justify-center flex-col gap-4 py-4 px-2">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-gray-700 px-3 text-center">
          {description}
        </p>
      </div>
      <hr />
      <div className="flex flex-col justify-center items-center py-4">
        <div className="table-container flex justify-center items-center py-5 px-4">
          <table style={tableStyle}>
            <tbody>
              <tr style={rowStyle}>
                <td style={cellStyleHeader}>{tableData?.firstHeader}</td>
                <td style={cellStyle}>{tableData?.firstData}</td>
              </tr>
              <tr style={rowStyle}>
                <td style={cellStyleHeader}>{tableData?.secondHeader}</td>
                <td style={cellStyle}>{tableData?.secondData}</td>
              </tr>
              <tr style={rowStyle}>
                <td style={cellStyleHeader}>{tableData?.thirdHeader}</td>
                <td style={cellStyle}>{tableData?.thirdData}</td>
              </tr>
              <tr style={rowStyle}>
                <td style={cellStyleHeader}>{tableData?.forthHeader}</td>
                <td style={cellStyle}>{tableData?.forthData}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CardButton title="Join Now" />
      </div>
    </div>
  );
};

export default PopularCards;
