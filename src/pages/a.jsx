import { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { axiosUsers } from "./atom";

export default function AxiosPage() {
  const [users, setUsers] = useRecoilState(axiosUsers);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-black text-center mb-6">
        Using Axios
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
