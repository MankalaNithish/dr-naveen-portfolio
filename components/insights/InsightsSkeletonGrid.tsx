import InsightSkeleton from "./InsightSkeleton";

export default function InsightsSkeletonGrid({
  count = 6,
}: {
  count?: number;
}) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <InsightSkeleton key={i} />
      ))}
    </div>
  );
}
