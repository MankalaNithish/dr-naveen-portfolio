import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-6 md:px-12 py-6 flex justify-between items-center border-b">
      <h1 className="font-serif text-xl">Dr. Naveen Kumar</h1>
      <div className="space-x-6 text-sm">
        <Link className="hover:text-neutral-900 transition" href="/#about">About</Link>
        <Link className="hover:text-neutral-900 transition" href="/#ngos">NGOs</Link>
        <Link className="hover:text-neutral-900 transition" href="/#insights">Insights</Link>
      </div>
    </nav>
  );
}