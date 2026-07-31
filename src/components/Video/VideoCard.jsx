// import React from "react";

// export default function VideoCard({
//   thumbnail,
//   title = "",
//   active,
//   distance,
//   onClick,
// }) {
//   const positions = {
//     "-2": { x: -340, scale: 0.72, rotate: 24, opacity: 0.35, z: 1 },
//     "-1": { x: -190, scale: 0.88, rotate: 12, opacity: 0.8, z: 5 },
//     "0": { x: 0, scale: 1, rotate: 0, opacity: 1, z: 20 },
//     "1": { x: 190, scale: 0.88, rotate: -12, opacity: 0.8, z: 5 },
//     "2": { x: 340, scale: 0.72, rotate: -24, opacity: 0.35, z: 1 },
//   };
//   const config = positions[String(distance)] || positions["0"];

//   return (
//     <div
//       onClick={onClick}
      
//       className="
//         absolute
//         left-1/2
//         top-1/2
//         cursor-pointer
//         touch-manipulation
//         transition-all
//         duration-500
//         ease-in-out
//       "
//       style={{
//         zIndex: config.z,
//         opacity: config.opacity,
//         transform: `
//           translate(-50%, -50%)
//           translateX(${config.x}px)
//           scale(${config.scale})
//           rotateY(${config.rotate}deg)
//         `,
//         transformStyle: "preserve-3d",
//       }}
//     >
//       <div
//         className="
//           relative
//           overflow-hidden
//           rounded-[28px]
//           shadow-2xl
//           w-[170px]
//           h-[250px]
//           sm:w-[220px]
//           sm:h-[320px]
//           lg:w-[300px]
//           lg:h-[430px]
//         "
//       >
//         <img
//           src={thumbnail}
//           alt={title}
//           className="h-full w-full object-cover pointer-events-none select-none"
//           draggable="false"
//         />
//         <div className="absolute inset-0 bg-black/15" />
//         {active && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div
//               className="
//                 flex
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-white
//                 shadow-xl
//                 w-16
//                 h-16
//                 lg:w-20
//                 lg:h-20
//               "
//             >
//               <svg viewBox="0 0 24 24" className="w-8 h-8 fill-sky-600 ml-1">
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function VideoCard({
  image,
  thumbnail,
  title = "",
  active,
  distance,
  onClick,
}) {
  // Supports both image and thumbnail
  const displayImage = image || thumbnail;

  const positions = {
    "-2": { x: -340, scale: 0.72, rotate: 24, opacity: 0.35, z: 1 },
    "-1": { x: -190, scale: 0.88, rotate: 12, opacity: 0.8, z: 5 },
    "0": { x: 0, scale: 1, rotate: 0, opacity: 1, z: 20 },
    "1": { x: 190, scale: 0.88, rotate: -12, opacity: 0.8, z: 5 },
    "2": { x: 340, scale: 0.72, rotate: -24, opacity: 0.35, z: 1 },
  };

  const config = positions[String(distance)] || positions["0"];

  return (
    <div
      onClick={onClick}
      className="absolute left-1/2 top-1/2 cursor-pointer touch-manipulation transition-all duration-500 ease-in-out"
      style={{
        zIndex: config.z,
        opacity: config.opacity,
        transform: `
          translate(-50%, -50%)
          translateX(${config.x}px)
          scale(${config.scale})
          rotateY(${config.rotate}deg)
        `,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="
          relative overflow-hidden rounded-[28px] shadow-2xl
          w-[170px] h-[250px]
          sm:w-[220px] sm:h-[320px]
          lg:w-[300px] lg:h-[430px]
        "
      >
        <img
          src={displayImage}
          alt={title}
          className="h-full w-full object-cover pointer-events-none select-none"
          draggable={false}
        />

        <div className="absolute inset-0 bg-black/20" />

        {active && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white shadow-xl">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 lg:w-10 lg:h-10 fill-[#0096D6] ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}