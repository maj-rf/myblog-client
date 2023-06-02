import { useGetRecentBlogsQuery } from '../../slice/blogsApiSlice';
import { BlogCard } from './BlogCard';

export const RecentBlogs = () => {
  const { data, isLoading } = useGetRecentBlogsQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="p-4 mt-8 md:mt-0">
      <div className=" max-w-5xl mx-auto">
        <h1 className="mb-2 text-3xl text-center font-bold text-cleanWhite">
          Recent Blogs
        </h1>
        <ul className="grid grid-flow-col gap-2 overflow-x-auto p-4 blog-list">
          {data?.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};
