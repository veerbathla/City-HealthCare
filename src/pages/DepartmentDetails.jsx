// import React from "react";
// import { useParams, Navigate } from "react-router-dom";

// import { departments } from "../data/departments";
// import DepartmentTemplate from "../components/Department/DepartmentTemplate";

// const DepartmentDetails = () => {
//   const { slug } = useParams();

//   const department = departments.find(
//     (item) => item.slug === slug
//   );

//   if (!department) {
//     return <Navigate to="/404" replace />;
//   }

//   return (
//     <main className="bg-white">
//       <DepartmentTemplate department={department} />
//     </main>
//   );
// };

// export default DepartmentDetails;


import { useParams, Navigate } from "react-router-dom";
import { departments } from "../data/departments";
import DepartmentTemplate from "../components/Department/DepartmentTemplate";

export default function DepartmentDetails() {
  
  const { slug } = useParams();
  const department = departments.find(
    d => d.slug === slug
  );

  if (!department) {
    return <Navigate to="/" replace />;
  }

  return (
    <DepartmentTemplate department={department} />
  );
}