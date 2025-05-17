"use client";

import { getPosts, toggleLike } from "@/actions/post";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

type Posts = Awaited<ReturnType<typeof getPosts>>;
type Post = Posts[number];

function PostCard({
  post,
  databaseUserId,
}: {
  post: Post;
  databaseUserId: string | null;
}) {
  const { user } = useUser();
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasLiked, setHasLiked] = useState(
    post.likes.some((like) => like.userId === databaseUserId)
  );
  const [likes, setLikes] = useState(post._count.likes);

  const handleLike = async () => {
    if (isLiking) return;
    try {
      setIsLiking(true);
      setHasLiked((prev) => !prev);
      setLikes((prev) => prev + (hasLiked ? -1 : 1));
      await toggleLike(post.id);
    } catch (error) {
      setLikes(post._count.likes);
      setHasLiked(post.likes.some((like) => like.userId === databaseUserId));
    } finally {
      setIsLiking(false);
    }
  };

  const handleAddComment = async () => {};

  const handleDeletePost = async () => {};

  return <div>PostCard</div>;
}

export default PostCard;
