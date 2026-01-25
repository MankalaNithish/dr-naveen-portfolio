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
        block p-6 bg-medium-brown border border-accent-brown/50 rounded-2xl
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-2xl hover:bg-hover-brown/80 hover:border-accent-brown
        motion-safe:animate-fadeIn
        "
    >
      <h3 className="font-serif text-xl mb-2 text-neutral-100">
        {insight.title}
      </h3>
      <p className="text-sm text-neutral-400 line-clamp-3">
        {insight.summary}
      </p>
    </Link>
  );
}
