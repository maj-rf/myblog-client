import { useGetAllBlogsQuery } from '../slice/blogsApiSlice';
import placeholderblog from '../assets/placeholderblog.jpg';
import { Link } from 'react-router-dom';

export const RecentBlogs = () => {
  const { data } = useGetAllBlogsQuery();
  return (
    <section className="flex flex-col items-center justify-center px-4 mt-8 md:mt-0">
      <h1 className="mb-2 text-3xl text-center font-bold text-cleanWhite">
        Recent Blogs
      </h1>
      <ul className="grid grid-cols-2 grid-flow-row gap-2">
        {data?.map((blog, index) => (
          <div
            className={
              'bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' +
              (index === 0 ? ' md:col-span-full' : '')
            }
          >
            <img
              className="rounded-t-lg object-cover w-full h-50"
              src={placeholderblog}
              alt={`picture of ${blog.title}`}
            />
            <div className="p-5">
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                {blog.title}
              </h2>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate text-ellipsis">
                {blog.content}
              </p>
              <Link
                to={`/blogs/${blog.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
};

// <ul className="grid sm:grid-cols-2 grid-flow-row gap-2">
// {data?.map((blog, index) => (
//   <li
//     key={blog.id}
//     className={
//       'border border-red-100 bg-slate-100' +
//       (index === 0 ? ' md:col-span-2' : '')
//     }
//   >
//     <img
//       className="object-cover h-72 w-full"
//       src={placeholderblog}
//       alt={`placeholder image for ${blog.id}`}
//     />
//     <h2 className="text-2xl">{blog.title}</h2>
//     <Link to={`/blogs/${blog.id}`}>View More</Link>
//   </li>
// ))}
// </ul>
