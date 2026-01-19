import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default function Hero({ profile }: { profile: any }) {
  if (!profile) return null;

  return (
    <section className="px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
          {profile.name}
        </h1>
        <p className="text-lg text-neutral-600">
          {profile.headline}
        </p>
      </div>

      {profile.heroImage && (
        <Image
          src={urlFor(profile.heroImage).width(600).height(400).url()}
          alt={profile.name}
          width={600}
          height={400}
          placeholder={profile.heroImage?.asset?.metadata?.lqip ? "blur" : "empty"}
          blurDataURL={profile.heroImage?.asset?.metadata?.lqip}
          className="rounded-2xl shadow-sm"
        />
      )}
    </section>
  );
}
