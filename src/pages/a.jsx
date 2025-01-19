import { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { axiosUsers, axiosError } from "./atom";

export default function AxiosPage() {
  const [users, setUsers] = useRecoilState(axiosUsers);
  const [error, setError] = useRecoilState(axiosError);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUsers([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-black text-center mb-6">
        Using Axios
      </h1>
      {error ? (
        <h2 className="text-red-500 md:text-2xl text-center">{error}</h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="bg-black p-4 rounded shadow">
              <h2 className="text-xl md:text-xl font-semibold mb-2">
                {user.name}
              </h2>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Company: {user.company.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
