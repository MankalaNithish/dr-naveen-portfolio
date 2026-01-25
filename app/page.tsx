import Hero from "@/components/Hero";
import About from "@/components/About";
import NgoSection from "@/components/NgoSection";
import Insights from "@/components/Insights";

import { client } from "@/sanity/lib/client";
import { ngoRolesQuery, profileQuery, insightsQuery } from "@/lib/queries";

export const metadata = {
  title: "Home",
};

export const revalidate = 60;

export default async function Home() {
  const [ngoRoles, profile, insights] = await Promise.all([
    client.fetch(ngoRolesQuery),
    client.fetch(profileQuery),
    client.fetch(insightsQuery),
  ]);

  return (
    <>
      <Hero profile={profile} />
      <About about={profile?.about}/>
      <NgoSection roles={ngoRoles} />
      <Insights insights={insights}/>
    </>
  );
}
