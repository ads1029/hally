import Link from "next/link";

export default function Navigation() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {['', 'work', 'contact'].map((page) => (
            <li key={page}>
              <Link href={`/${page}`} className="capitalize text-blue-600 dark:text-blue-400 hover:font-bold text-lg">
                {page || 'home'}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}