export default function About({ about }: { about?: string }) {
  if (!about) return null;

  return (
    <section id="about" className="px-6 md:px-12 py-24 max-w-4xl">
      <h2 className="text-3xl font-serif mb-6">About Me</h2>
      <p className="text-neutral-700 leading-relaxed">
        {about}
      </p>
    </section>
  );
}
