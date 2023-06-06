import { useGetRecentCommentsQuery } from '../../slice/commentApiSli';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading';

export const RecentComments = () => {
  const { data, isLoading, isSuccess } = useGetRecentCommentsQuery();

  let content;
  if (isLoading) content = <Loading />;
  if (isSuccess)
    content = (
      <section className="px-4 py-8 mt-8 md:mt-0">
        <div className=" max-w-5xl mx-auto">
          <h1 className="mb-2 text-3xl text-center font-bold text-cleanWhite">
            Users' Thoughts
          </h1>
          <ul className="grid grid-cols-fluid gap-2">
            {data.map((comment) => (
              <li key={comment.id} className="py-5">
                <h2 className="text-cleanWhite p-4">
                  {comment.user.username} on{' '}
                  <Link
                    to={`/blogs/${comment.blog.id}`}
                    className="font-bold underline text-accent"
                  >
                    {comment.blog.title}
                  </Link>
                </h2>
                <p className="speech-bubble mt-2 p-4 bg-primary-400 text-cleanWhite rounded-lg">
                  {comment.content}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  return <>{content}</>;
};
