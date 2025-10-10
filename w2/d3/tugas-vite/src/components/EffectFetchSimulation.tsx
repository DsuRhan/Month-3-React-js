import { useEffect, useState } from "react";

interface DataItem {
  id: number;
  title: string;
}

const EffectFetchSimulation = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching simulated data...");
    const timer = setTimeout(() => {
      setData([
        { id: 1, title: "Data A" },
        { id: 2, title: "Data B" },
        { id: 3, title: "Data C" },
      ]);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 bg-slate-800 rounded-xl shadow-md text-slate-100">
      <h2 className="font-bold text-lg mb-2">5️⃣ Simulasi Fetch Data</h2>
      {loading ? (
        <p className="italic text-slate-400">Loading data...</p>
      ) : (
        <ul className="list-disc ml-6">
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EffectFetchSimulation;
