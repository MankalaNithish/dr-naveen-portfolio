type NGORole = {
  _id: string;
  organization: string;
  role: string;
  duration: string;
};

export default function NgoSection({ roles }: { roles: NGORole[] }) {
  return (
    <section id="ngos" className="px-6 md:px-12 py-24 bg-white">
      <h2 className="text-3xl font-serif mb-10">NGO Involvement</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {roles.map((ngo) => (
          <div
            key={ngo._id}
            className="p-6 border rounded-2xl bg-white hover:shadow-md transition"
          >
            <h3 className="font-medium text-lg mb-1">{ngo.organization}</h3>
            <p className="text-sm text-neutral-600">
              {ngo.role} • {ngo.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
