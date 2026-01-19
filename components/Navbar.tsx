export default function Navbar() {
  return (
    <nav className="px-6 md:px-12 py-6 flex justify-between items-center border-b">
      <h1 className="font-serif text-xl">Dr. Naveen Kumar</h1>
      <div className="space-x-6 text-sm">
        <a className="hover:text-neutral-900 transition" href="/#about">About</a>
        <a className="hover:text-neutral-900 transition" href="/#ngos">NGOs</a>
        <a className="hover:text-neutral-900 transition" href="/#insights">Insights</a>
      </div>
    </nav>
  );
}