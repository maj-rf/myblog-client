import { useGetProfileBlogsQuery } from '../../slice/blogsApiSlice';
import { ProfileBlogCard } from './ProfileBlogCard';
import { Link } from 'react-router-dom';

export const ProfileBlogs = () => {
  const { data, isLoading } = useGetProfileBlogsQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="text-center p-4">
        <h1>Your Blogs</h1>
        <Link
          to={'/profile/blogs/new'}
          className="gap-1 px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Create Blog
        </Link>
      </div>
      <ul className="grid grid-cols-fluid gap-2">
        {data?.length === 0 ? (
          <div className="text-center p-4">There are no blogs.</div>
        ) : (
          data?.map((blog) => <ProfileBlogCard key={blog.id} blog={blog} />)
        )}
      </ul>
    </>
  );
};
