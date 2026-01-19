import InsightCard from "./InsightCard";

type Insight = {
  _id: string;
  title: string;
  summary: string;
  slug: string;
  publishedAt: string;
};

export default function InsightsGrid({
  insights,
}: {
  insights: Insight[];
}) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {insights.map((insight) => (
        <InsightCard key={insight._id} insight={insight} />
      ))}
    </div>
  );
}
