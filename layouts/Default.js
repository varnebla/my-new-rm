import Link from 'next/link';
import { TheBottomBar } from '../components/TheBottomBar';

export default function Default({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative md:pb-0">
      <header className=" w-full px-3 py-2 mb-4 flex justify-between">
        <h1>My rms</h1>
        <nav className="flex gap-x-2">
          <Link href="/">
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/exercises">
            <a className="hover:underline">Excercises</a>
          </Link>
          <Link href="/my-rms">
            <a className="hover:underline">My rms</a>
          </Link>
        </nav>
      </header>
      <main className="w-full max-w-3xl mx-auto px-4 md:px-0">{children}</main>
      <TheBottomBar></TheBottomBar>
      <footer className="mt-auto mb-32">All rights reserved</footer>
    </div>
  );
}
