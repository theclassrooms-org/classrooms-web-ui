"use client";

import { useMemo, useState } from "react";
import DOMPurify from "dompurify";

export function PostContent({
  contentHtml,
}: {
  contentHtml: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const safeHtml = useMemo(() => {
    return DOMPurify.sanitize(contentHtml, {
      USE_PROFILES: { html: true },
    });
  }, [contentHtml]);

  return (
    <div className="space-y-4">
      <div
        className={`relative mx-auto text-[15px] leading-relaxed ${
          !expanded ? "max-h-30 overflow-hidden" : ""
        }`}
      >
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: safeHtml }}
        />

        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-white to-transparent" />
        )}
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        className="text-sm font-medium text-primary"
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}
