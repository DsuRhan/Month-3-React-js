import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function FetchPost() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2 text-sky-400">
        1️⃣ Fetch API - Mengambil Data Post
      </h2>
      {post ? (
        <>
          <h3 className="text-lg font-medium mb-1">{post.title}</h3>
          <p className="text-slate-300">{post.body}</p>
        </>
      ) : (
        <p className="text-slate-400 italic">Memuat data...</p>
      )}
    </section>
  );
}
