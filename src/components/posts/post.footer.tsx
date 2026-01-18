import { Heart, MessageCircle, Link2 } from "lucide-react";

export function PostFooter({
  likes,
  commentCount,
}: {
  likes: number;
  commentCount: number;
}) {
  return (
    <div className="flex justify-between items-center pt-2">
      <div className="flex gap-6">
        <button className="flex items-center gap-2 text-default-500 hover:text-danger">
          <Heart size={20} /> {likes}
        </button>
        <button className="flex items-center gap-2 text-default-500">
          <MessageCircle size={20} /> {commentCount}
        </button>
      </div>

      <button className="text-default-400 hover:text-default-600">
        <Link2 size={18} />
      </button>
    </div>
  );
}
