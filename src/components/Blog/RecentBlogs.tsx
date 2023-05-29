import { useGetRecentBlogsQuery } from '../../slice/blogsApiSlice';
import { BlogCard } from './BlogCard';

export const RecentBlogs = () => {
  const { data } = useGetRecentBlogsQuery();
  return (
    <section className="flex flex-col items-center justify-center px-4 mt-8 md:mt-0">
      <h1 className="mb-2 text-3xl text-center font-bold text-cleanWhite">
        Recent Blogs
      </h1>
      <ul className="grid grid-cols-fluid gap-2">
        {data?.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </ul>
    </section>
  );
};
