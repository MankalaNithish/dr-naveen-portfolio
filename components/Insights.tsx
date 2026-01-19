import InsightsGrid from "@/components/insights/InsightsGrid";
import Link from "next/link";

type Insight = {
  _id: string;
  title: string;
  summary: string;
  slug: string;
  publishedAt: string;
};

export default function Insights({ insights }: { insights: Insight[] }) {
  return (
    <section id="insights" className="px-6 md:px-12 py-24 bg-neutral-50">
      <h2 className="text-3xl font-serif mb-10">Latest Insights</h2>

      <InsightsGrid insights={insights} />

      <div className="mt-10">
        <Link
          href="/insights"
          className="text-sm underline underline-offset-4 hover:text-neutral-900"
        >
          View all insights →
        </Link>
      </div>
    </section>
  );
}