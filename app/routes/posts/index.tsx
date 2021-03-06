import { Link, json, useLoaderData } from 'remix';

import { getPosts } from '~/models/post.server';

interface LoaderData {
  posts: Awaited<ReturnType<typeof getPosts>>;
}

export const loader = async () => json<LoaderData>({
  posts: await getPosts(),
});

export default function Posts() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <main>
      <h1>Posts</h1>
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
