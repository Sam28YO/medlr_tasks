import { useEffect } from "react";
import Select from "react-select";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { uuser, fformData, hydration1 } from "../atom";
import { FaUserAlt } from "react-icons/fa";

export default function Home({ usersData }) {
  const [users, setUsers] = useRecoilState(uuser);
  const [formData, setFormData] = useRecoilState(fformData);
  const [hydrated, setHydrated] = useRecoilState(hydration1);

  useEffect(() => {
    if (users.length === 0) {
      setUsers(usersData);
    }
  }, [users, usersData, setUsers]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  const handleAddUser = (newUser) => {
    if (newUser.name && newUser.email && newUser.phone) {
      const existingUser = users.find((user) => user.email === newUser.email);

      if (existingUser) {
        alert("A user with this email already exists");
      } else {
        const userAdd = {
          id: users.length + 1,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          address: newUser.address || {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: { lat: "", lng: "" },
          },
          company: newUser.company || { name: "", catchPhrase: "", bs: "" },
        };
        setUsers([...users, userAdd]);
        setFormData({});
      }
    }
  };

  const handleRemoveUser = (name) => {
    if (name) {
      const updatedUsers = users.filter((user) => user.name !== name);
      setUsers(updatedUsers);
      setFormData({});
    }
  };

  const custom = {
    control: (base) => ({
      ...base,
      padding: "5px",
      borderRadius: "8px",
      borderColor: "#1E40AF",
    }),
    singleValue: (base) => ({
      ...base,
      color: "black",
    }),
    option: (base) => ({
      ...base,
      color: "black",
    }),
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">CRM</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <Select
          options={users.map((user) => ({ value: user.id, label: user.name }))}
          onChange={(option) => (window.location.href = `/crm/${option.value}`)}
          placeholder="Select a user..."
          styles={custom}
        />

        <div>
          <h2 className="text-xl font-semibold text-center mb-4 text-black">
            Add New User
          </h2>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mb-2 p-2 w-full border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mb-2 p-2 w-full border rounded"
          />
          <input
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="mb-2 p-2 w-full border rounded"
          />
          <input
            type="text"
            placeholder="Street"
            value={formData.address?.street || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, street: e.target.value },
              })
            }
            className="mb-2 p-2 w-full border rounded"
          />
          <input
            type="text"
            placeholder="Suite"
            value={formData.address?.suite || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, suite: e.target.value },
              })
            }
            className="mb-2 p-2 w-full border rounded"
          />
          <input
            type="text"
            placeholder="City"
            value={formData.address?.city || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, city: e.target.value },
              })
            }
            className="mb-2 p-2 w-full border rounded"
          />
          <input
            type="text"
            placeholder="Zipcode"
            value={formData.address?.zipcode || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, zipcode: e.target.value },
              })
            }
            className="mb-2 p-2 w-full border rounded"
          />
          <input
            type="text"
            placeholder="Company Name"
            value={formData.company?.name || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                company: { ...formData.company, name: e.target.value },
              })
            }
            className="mb-2 p-2 w-full border rounded"
          />
          <input
            type="text"
            placeholder="Company CatchPhrase"
            value={formData.company?.catchPhrase || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                company: { ...formData.company, catchPhrase: e.target.value },
              })
            }
            className="mb-2 p-2 w-full border rounded"
          />
          <input
            type="text"
            placeholder="Company BS"
            value={formData.company?.bs || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                company: { ...formData.company, bs: e.target.value },
              })
            }
            className="mb-2 p-2 w-full border rounded"
          />
          <button
            onClick={() => handleAddUser(formData)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 w-full"
          >
            Add User
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-center text-black mb-4">
            Remove User
          </h2>
          <input
            type="text"
            placeholder="Enter user name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mb-2 p-2 w-full border rounded"
          />
          <button
            onClick={() => handleRemoveUser(formData.name)}
            className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 w-full"
          >
            Remove User
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <Link key={user.id} href={`/crm/${user.id}`}>
              <div className="p-4 border rounded shadow-md cursor-pointer bg-white hover:bg-gray-100 transition transform hover:-translate-y-1 h-48">
                <h2 className="text-lg font-semibold text-black">
                  <FaUserAlt className="inline mr-2 text-blue-600" />
                  {user.name}
                </h2>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-600">{user.phone}</p>
              </div>
            </Link>
          ))}
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
