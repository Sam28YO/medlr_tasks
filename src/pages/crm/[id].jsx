import React from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { uuser } from "../atom";
import { FaArrowLeft, FaUserAlt } from "react-icons/fa";
import Link from "next/link";

export default function UserDetail({ usersData }) {
  const router = useRouter();
  const { id } = router.query;
  const users = useRecoilValue(uuser);

  const allUsers = users && users.length > 0 ? users : usersData || [];

  const user = allUsers.find((u) => u.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/crm"
          className="flex items-center gap-2 text-blue-600 mb-4"
        >
          <FaArrowLeft /> Back to Home
        </Link>
        <div className="p-6 border rounded shadow-md bg-white">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-600">
            <FaUserAlt /> {user?.name}
          </h2>
          <p className="text-lg mt-2 text-black">Email: {user?.email}</p>
          <p className="text-lg text-black">Phone: {user?.phone}</p>
          <p className="text-lg text-black">Website: {user?.website}</p>
          <p className="text-lg text-black">
            Address: {user.address.street}, {user?.address.city}
          </p>
          <p className="text-lg text-black">Company: {user?.company.name}</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await response.json();

  return {
    props: {
      usersData,
    },
  };
}
