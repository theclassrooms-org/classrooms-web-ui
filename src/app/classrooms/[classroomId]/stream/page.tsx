"use client";

import { LeftWidgets } from "@/components/classrooms/classroom.left-widget";
import { RightMembers } from "@/components/classrooms/classroom.right-member";
import { StreamPosts } from "@/components/posts/post.stream";
import { use } from "react";

interface StreamPageProps {
  params: Promise<{ classroomId: string }>
}

export default function StreamPage({ params }: StreamPageProps) {

  const { classroomId } = use(params);
  console.log("classroomId", classroomId);

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* LEFT */}
      <aside className="col-span-12 lg:col-span-3 order-1">
        <div className="sticky top-24 space-y-4">
          <LeftWidgets />
        </div>
      </aside>

      {/* CENTER */}
      <main className="col-span-12 lg:col-span-6 space-y-6 order-3 lg:order-2">
        <StreamPosts />
      </main>

      {/* RIGHT */}
      <aside className="col-span-12 lg:col-span-3 order-2 lg:order-3">
        <div className="sticky top-24 space-y-4">
          <RightMembers />
        </div>
      </aside>
    </div>
  );
}
