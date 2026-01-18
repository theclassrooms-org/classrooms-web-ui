import { Post } from "@/mocks/posts";
import { Card, CardBody, Avatar } from "@heroui/react";
import { PostContent } from "./post.content";
import { PostFooter } from "./post.footer";
import { CommentList } from "./comment.list";

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="border-none shadow-md">
      <CardBody className="px-6 py-5 space-y-5">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Avatar src={post.author.avatar} />
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-xs text-default-400">{post.createdAt}</p>
          </div>
        </div>

        {/* Content */}
        <PostContent contentHtml={post.contentHtml} />

        {/* Footer */}
        <PostFooter likes={post.stats.likes} commentCount={post.comments.length} />

        {/* Comments */}
        <CommentList comments={post.comments} />
      </CardBody>
    </Card>
  );
}
