import { createClient } from "next-sanity";

const client = createClient({
  projectId: "0ojkfuyb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-03-20",
});

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await client.fetch(`*[_type == "blog" && _id == $id][0]`, { id: params.id });

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600 mt-4">{post.body}</p>
    </div>
  );
}
