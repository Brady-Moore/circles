import { getPosts } from "@/actions/post";
import { getDatabaseUserId } from "@/actions/user";
import CreatePost from "@/components/CreatePost";
import FollowSuggestions from "@/components/FollowSuggestions";
import PostCard from "@/components/PostCard";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const posts = await getPosts();

  try {
    const databaseUserId = await getDatabaseUserId();
    return (
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        <div className="lg:col-span-6">
          {user ? <CreatePost /> : null}

          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                databaseUserId={databaseUserId}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-4 sticky top-20">
          <FollowSuggestions />
        </div>
      </div>
    );
  } catch (error) {
    return <></>;
  }
}
