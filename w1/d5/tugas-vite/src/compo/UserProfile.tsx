import { useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState({ name: "Dio", age: 25 });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>User Profile</h2>
      {isEditing ? (
        <>
          <input name="name" value={user.name} onChange={handleChange} />
          <input name="age" value={user.age} onChange={handleChange} />
          <button onClick={() => setIsEditing(false)}>Simpan</button>
        </>
      ) : (
        <>
          <p>Nama: {user.name}</p>
          <p>Usia: {user.age}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
