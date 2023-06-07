import { useGetProfileBlogsQuery } from '../../slice/blogsApiSlice';
import { Link } from 'react-router-dom';
import { ProfileBlog } from './ProfileBlog';
import { Loading } from '../Loading';
export const ProfileBlogs = () => {
  const { data, isLoading, isSuccess } = useGetProfileBlogsQuery();

  let content;
  if (isLoading) content = <Loading />;
  if (isSuccess)
    content = (
      <>
        <div className="text-center p-4">
          <Link
            to={'/profile/blogs/new'}
            className="gap-1 px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Create Blog
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-2xl sm:rounded-lg profile-list">
            <table className="min-w-full divide-y-2 divide-accent">
              <thead className="bg-primary-700">
                <tr className="text-accent">
                  <th
                    scope="col"
                    className="py-3 px-6 text-sm font-medium tracking-wider text-left uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-sm  font-medium tracking-wider text-left uppercase"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-sm  font-medium tracking-wider text-left uppercase"
                  >
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="bg-primary-600">
                {data.map((blog) => {
                  return <ProfileBlog key={blog.id} blog={blog} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  if (data?.length === 0)
    content = (
      <div className="text-center">
        <Link
          to={'/profile/blogs/new'}
          className="gap-1 px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Create Blog
        </Link>
        <p>There are no blogs.</p>
      </div>
    );
  return <>{content}</>;
};
