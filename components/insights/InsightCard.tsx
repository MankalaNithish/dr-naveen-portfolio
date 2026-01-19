import Link from "next/link";

type Insight = {
  _id: string;
  title: string;
  summary: string;
  slug: string;
  publishedAt: string;
};

export default function InsightCard({
  insight,
}: {
  insight: Insight;
}) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="
        block p-6 bg-white border rounded-2xl
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg
        motion-safe:animate-fadeIn
        "
    >
      <h3 className="font-serif text-xl mb-2">
        {insight.title}
      </h3>
      <p className="text-sm text-neutral-600 line-clamp-3">
        {insight.summary}
      </p>
    </Link>
  );
}
