import { useProfileContext } from "@/context/sharedProfile";
import { Avatar } from "@/components/Avatar";
import { EditableField } from "@/components/EditableField";

/*
  🧠 Developer Note:
  - Sekarang data profile sudah otomatis disinkronkan dengan user login.
  - EditableField langsung membaca dari ProfileContext.
*/
export default function ProfilePage() {
  const { profile, updateProfile } = useProfileContext();

  if (!profile) return <p>Loading profile...</p>;

  return (
    <section className="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <div className="flex flex-col items-center mb-6">
        <Avatar name={profile.name} avatarUrl={profile.avatar} />
        <h2 className="text-2xl font-semibold mt-3">{profile.name}</h2>
        <p className="text-gray-500">{profile.email}</p>
      </div>

      <EditableField
        label="Phone"
        value={profile.phone ?? ""}
        onChange={(val) => updateProfile({ phone: val })}
      />
      <EditableField
        label="Bio"
        value={profile.bio ?? ""}
        onChange={(val) => updateProfile({ bio: val })}
      />

      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          Changes are kept locally (context only).
        </p>
      </div>
    </section>
  );
}
