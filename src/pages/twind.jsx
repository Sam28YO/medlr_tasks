import Link from "next/link";

const Twind = () => {
  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      <nav className="mb-8">
        <Link
          href="/"
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Home
        </Link>
      </nav>

      <section>
        <h2 className="text-2xl mb-4 text-black">Flex Elements</h2>
        <div className="flex gap-4 border border-black rounded p-4 mb-4">
          <div className="flex-1 bg-red-400 p-6 text-center hover:bg-red-600">
            1
          </div>
          <div className="flex-1 bg-green-400 p-6 text-center hover:bg-green-600">
            2
          </div>
          <div className="flex-1 bg-blue-400 p-6 text-center hover:bg-blue-600">
            3
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4 text-black">Grid Elements</h2>
        <div className="grid grid-cols-3 gap-4 border border-black rounded p-4">
          <div className="bg-pink-400 p-6 text-center hover:bg-pink-600">1</div>
          <div className="bg-purple-400 p-6 text-center hover:bg-purple-600">
            2
          </div>
          <div className="bg-indigo-400 p-6 text-center hover:bg-indigo-600">
            3
          </div>
          <div className="bg-yellow-400 p-6 text-center hover:bg-yellow-600">
            4
          </div>
          <div className="bg-orange-400 p-6 text-center hover:bg-orange-600">
            5
          </div>
          <div className="bg-teal-400 p-6 text-center hover:bg-teal-600">6</div>
        </div>
      </section>
    </div>
  );
};

export default Twind;
