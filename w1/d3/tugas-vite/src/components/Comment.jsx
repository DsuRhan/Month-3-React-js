import UserInfo from "./UserInfo";
import CommentText from "./CommentText";

export default function Comment({ user, text }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "10px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <UserInfo user={user} />
      <CommentText text={text} />
    </div>
  );
}
