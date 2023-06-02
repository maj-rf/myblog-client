import { Link } from 'react-router-dom';
import { IBlog } from '../../types/types';
import placeholderblog from '../../assets/placeholderblog.jpg';

interface BlogDetailProps {
  blog: IBlog;
}

export const BlogCard = ({ blog }: BlogDetailProps) => {
  return (
    <div className="bg-primary-700 text-cleanWhite w-80 border rounded-xl hover:-translate-y-1 duration-300 hover:outline hover:outline-4 hover:outline-accent">
      <img
        className="block rounded-t-lg object-cover w-full h-auto"
        src={placeholderblog}
        alt={`picture of ${blog.title}`}
      />
      <div className="p-5">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          {blog.title}
        </h2>
        <p className="mb-3 font-normal truncate text-ellipsis">
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
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};
