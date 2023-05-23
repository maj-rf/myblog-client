import { useGetAllBlogsQuery } from '../slice/blogsApiSlice';
import placeholderblog from '../assets/placeholderblog.jpg';
import { Link } from 'react-router-dom';

export const RecentBlogs = () => {
  const { data } = useGetAllBlogsQuery();
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <h1>Recent Blogs</h1>
      <ul className="grid sm:grid-cols-2 grid-flow-row gap-2">
        {data?.map((blog, index) => (
          <li
            key={blog.id}
            className={
              'border border-red-100 bg-slate-100' +
              (index === 0 ? ' md:col-span-2' : '')
            }
          >
            <img
              className="object-cover h-72 w-full"
              src={placeholderblog}
              alt={`placeholder image for ${blog.id}`}
            />
            <h2 className="text-2xl">{blog.title}</h2>
            <Link to={`/blogs/${blog.id}`}>View More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
