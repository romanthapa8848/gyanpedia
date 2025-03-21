import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Gyanpedia. All rights reserved.</p>
        <nav className="mt-3">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-gray-400">Terms of Service</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
