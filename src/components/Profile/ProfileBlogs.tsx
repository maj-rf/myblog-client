import { useGetProfileBlogsQuery } from '../../slice/blogsApiSlice';
import { ProfileBlogCard } from './ProfileBlogCard';

export const ProfileBlogs = () => {
  const { data } = useGetProfileBlogsQuery();

  return (
    <>
      <h1>Your Blogs</h1>
      <ul className="grid grid-cols-fluid gap-2">
        {data?.map((blog) => (
          <ProfileBlogCard key={blog.id} blog={blog} />
        ))}
      </ul>
    </>
  );
};
