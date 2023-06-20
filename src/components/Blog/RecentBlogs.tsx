import { useGetRecentBlogsQuery } from '../../slice/blogsApiSlice';
import { Loading } from '../Loading';
import { BlogCard } from './BlogCard';

export const RecentBlogs = () => {
  const { data, isLoading, isSuccess } = useGetRecentBlogsQuery();
  let content;
  if (isLoading) content = <Loading />;
  if (isSuccess)
    content = (
      <section className="p-4 mt-8">
        <div className=" max-w-5xl mx-auto">
          <h1 className="mb-2 text-3xl text-center font-bold text-cleanWhite">
            Recent Blogs
          </h1>
          <ul className="grid grid-flow-col gap-2 overflow-x-auto p-4 blog-list">
            {data.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </ul>
        </div>
      </section>
    );
  return <>{content}</>;
};
