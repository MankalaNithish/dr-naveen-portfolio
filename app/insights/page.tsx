import InsightsList from "@/components/InsightsList";

export const metadata = {
  title: "Insights",
};

export const revalidate = 60;

export default function InsightsPage() {
  return (
    <section className="px-6 md:px-12 py-24">
      <h1 className="text-4xl font-serif mb-12">All Insights</h1>
      <InsightsList />
    </section>
  );
}
