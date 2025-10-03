import Avatar from "./Avatar";

export default function UserInfo({ user }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Avatar src={user.avatarUrl} alt={user.name} />
      <span>{user.name}</span>
    </div>
  );
}
