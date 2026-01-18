"use client";

import { useCallback, useEffect, useState } from "react";
import { Spinner } from "@heroui/react";
import { MOCK_POSTS, Post } from "@/mocks/posts";
import { PostCard } from "./post.card";

const PAGE_SIZE = 3;

export function StreamPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(() => {
    const next = MOCK_POSTS.slice(0, page * PAGE_SIZE);
    setPosts(next);
    setPage((p) => p + 1);

    if (next.length >= MOCK_POSTS.length) {
      setHasMore(false);
    }
  }, [page]);

  useEffect(() => {
    loadMore();
  }, [loadMore]);

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      {hasMore ? (
        <div className="flex justify-center py-6">
          <Spinner />
          <button onClick={loadMore} className="sr-only" />
        </div>
      ) : (
        <p className="text-center text-sm text-default-400">
          This class has no more posts
        </p>
      )}
    </div>
  );
}
