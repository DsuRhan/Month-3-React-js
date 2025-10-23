import {type FC } from "react";

// 🧩 Interface untuk props Avatar
interface AvatarProps {
  name: string;
  avatarUrl?: string; // optional
}

/* 
  🧠 Developer Note:
  - Avatar akan memanggil gambar random dari API publik
    dengan fallback ke avatar default.
  - avatarUrl optional → menggunakan optional chaining.
*/

export const Avatar: FC<AvatarProps> = ({ name, avatarUrl }) => {
  const randomImage = avatarUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`;

  return (
    <div className="flex items-center gap-3">
      <img
        src={randomImage}
        alt={name}
        className="w-16 h-16 rounded-full border border-gray-300 shadow-sm"
      />
      <span className="font-medium text-gray-700">{name}</span>
    </div>
  );
};
