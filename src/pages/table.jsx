// import { tableData } from "./atom";
// import { useRecoilState } from "recoil";
// import { useTable } from "@tanstack/react-table";

// const Table = ({ usersData }) => {
//   const [users, setUsers] = useRecoilState(tableData);
//   useEffect(() => {
//     if (users.length === 0) {
//       setUsers(usersData);
//     }
//   }, [users, usersData, setUsers]);

//   const columns = [
//     {
//       accessor: "name",
//       header: "Name",
//     },
//     {
//       accessor: "email",
//       header: "Email",
//     },
//     {
//       accessor: "phone",
//       header: "Phone",
//     },
//     {
//       accessor: "website",
//       header: "Website",
//     },
//   ];

//   const t = useTable({
//     users,
//     columns,
//   });
// };

// return (
//   <div>
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Website</th>
//         </tr>
//         <tr></tr>
//       </thead>
//     </table>
//   </div>
// );

// export async function getServerSideProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const usersData = await response.json();

//   return {
//     props: {
//       usersData,
//     },
//   };
// }
