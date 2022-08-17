import Link from 'next/link';

export default function Default({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/exercises">
            <a>Excercises</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="mt-auto">All rights reserved</footer>
    </div>
  );
}
