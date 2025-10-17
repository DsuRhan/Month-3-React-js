export default function GachaAnimation({ active }: { active: boolean }) {
  return (
    <div className="flex justify-center items-center h-40">
      {active ? (
        <div className="w-20 h-20 border-4 border-purple-500 rounded-full animate-spin" />
      ) : (
        <p className="text-gray-500">Ready to roll 🎲</p>
      )}
    </div>
  );
}
