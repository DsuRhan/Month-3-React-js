
interface User {
  name: string;
}

function Child({ user }: { user: User }) {
  return (
    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <p className="text-gray-800 dark:text-gray-200">
        Halo, {user.name}! (Komponen paling bawah)
      </p>
    </div>
  );
}

function Middle({ user }: { user: User }) {
  return (
    <div className="p-3 border border-gray-300 rounded-md mb-3">
      <p className="text-gray-700 dark:text-gray-300 mb-2">Ini komponen tengah</p>
      <Child user={user} />
    </div>
  );
}

export default function PropDrillingExample() {
  const user = { name: "Master" };
  return (
    <div className="max-w-sm mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Prop Drilling
      </h2>
      <Middle user={user} />
    </div>
  );
}
