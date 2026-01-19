"use client";

import { useEffect, useRef, useState } from "react";
import { client } from "@/sanity/lib/client";
import { allInsightsQuery } from "@/lib/queries";
import InsightsSkeletonGrid from "@/components/insights/InsightsSkeletonGrid";
import InsightsGrid from "@/components/insights/InsightsGrid";

const PAGE_SIZE = 6;

type Insight = {
  _id: string;
  title: string;
  summary: string;
  slug: string;
  publishedAt: string;
};

export default function InsightsList() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const fetchingRef = useRef(false); // prevents duplicate calls

  // Fetch data when page changes
  useEffect(() => {
    fetchInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  async function fetchInsights() {
    if (!hasMore || fetchingRef.current) return;

    fetchingRef.current = true;
    setLoading(true);

    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const data = await client.fetch(allInsightsQuery, {
      start,
      end,
    });

    if (data.length === 0) {
      setHasMore(false);
      setLoading(false);
      fetchingRef.current = false;
      return;
    }

    setInsights((prev) => {
      const map = new Map<string, Insight>();
      [...prev, ...data].forEach((item) => map.set(item._id, item));
      return Array.from(map.values());
    });

    setLoading(false);
    fetchingRef.current = false;
  }

  // Intersection Observer
  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((p) => p + 1);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <>

        <InsightsGrid insights={insights} />
        { loading && <InsightsSkeletonGrid count={PAGE_SIZE} /> }

        {/* Infinite scroll trigger */}
        {hasMore && (
            <div
            ref={loaderRef}
            className="h-16 mt-12 flex justify-center items-center text-sm text-neutral-500"
            >
            {loading && "Loading more insights…"}
            </div>
        )}
    </>
  );
}
