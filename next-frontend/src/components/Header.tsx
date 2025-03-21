import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <Image src="/gyanpedia-logo.svg" alt="Gyanpedia Logo" width={120} height={40} />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/syllabus" className="hover:text-gray-400">Syllabus</Link>
            </li>
            <li>
              <Link href="/notes" className="hover:text-gray-400">Notes</Link>
            </li>
            <li>
              <Link href="/old-questions" className="hover:text-gray-400">Old Questions</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-400">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
