import React from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { fetchUsers } from "./atom";
import PropTypes from "prop-types";

export default function FetchPage({ usersData }) {
  const [users, setUsers] = useRecoilState(fetchUsers);
  useEffect(() => {
    if (users.length === 0) {
      setUsers(usersData);
    }
  }, [users, usersData, setUsers]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const result = await response.json();
  //     setUsers(result);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-black text-center mb-6">
        Using Fetch Command
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-black p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Company: {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await response.json();

  return {
    props: {
      usersData,
    },
  };
}

FetchPage.propTypes = {
  usersData: PropTypes.array.isRequired,
};
