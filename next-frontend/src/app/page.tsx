"use client";

import Image from "next/image";
import Link from "next/link";
import { createClient } from "next-sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SyllabusSection from "@/components/SyllabusSection";
import NotesSection from "@/components/NotesSection";
import OldQuestionsSection from "@/components/OldQuestionsSection";

const client = createClient({
  projectId: "0ojkfuyb", // Replace with your actual project ID
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-03-20",
});

interface Post {
  _id: string;
  title: string;
  excerpt: string;
}

export default async function Home() {
  const posts: Post[] = await client.fetch(`*[_type == "blog"]{_id, title, excerpt}`);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <SyllabusSection />
      <NotesSection />
      <OldQuestionsSection />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-2xl font-semibold mb-4">Latest Articles</h2>
        {posts.length > 0 ? (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post._id} className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No articles available here.</p>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
