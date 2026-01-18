"use client";

import { useState } from "react";
import { Avatar } from "@heroui/react";
import { Comment } from "@/mocks/posts";

export function CommentList({ comments }: { comments: Comment[] }) {
  const [open, setOpen] = useState(false);

  if (!comments.length) return null;

  return (
    <div className="pt-2 space-y-3">
      <button
        onClick={() => setOpen((v) => !v)}
        className="text-sm text-primary"
      >
        {open ? "Hide comments" : `View ${comments.length} comments`}
      </button>

      {open &&
        comments.map((c) => (
          <div key={c.id} className="flex gap-3">
            <Avatar src={c.author.avatar} size="sm" />
            <div className="bg-default-100 rounded-lg px-3 py-2">
              <p className="text-sm font-medium">{c.author.name}</p>
              <p className="text-sm">{c.content}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
