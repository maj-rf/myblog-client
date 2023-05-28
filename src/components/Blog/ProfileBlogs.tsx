import { useGetProfileBlogsQuery } from '../../slice/blogsApiSlice';
import { BlogCard } from './BlogCard';
import { useLocation } from 'react-router-dom';
export const ProfileBlogs = () => {
  const { data } = useGetProfileBlogsQuery();
  const location = useLocation();
  return (
    <>
      <h1>Your Blogs</h1>
      <ul className="grid grid-cols-fluid gap-2">
        {data?.map((blog, index) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            index={index}
            path={location.pathname}
          />
        ))}
      </ul>
    </>
  );
};
