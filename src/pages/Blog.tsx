import { useParams } from 'react-router-dom';
import { useGetBlogQuery } from '../slice/blogsApiSlice';
import { dateFormatter } from '../helpers/dateFormatter';
import { useAppSelector } from '../store';
export const Blog = () => {
  const params = useParams();
  const id = params.id || '';
  const { data, isLoading } = useGetBlogQuery(id);
  const { user } = useAppSelector((state) => state.auth);

  if (isLoading) return <div>Loading..</div>;

  const dateCreated = dateFormatter(data?.createdAt);
  return (
    <section className="flex flex-col justify-between p-4 max-w-5xl mx-auto text-cleanWhite">
      <div className="border border-white p-2">
        <h1 className="mb-2 text-3xl font-bold text-accent">{data?.title}</h1>
        <h2 className="mb-1 text-xl font-medium text-gray-300">
          by {data?.user.username}, {dateCreated}
        </h2>
        <p>{data?.content}</p>
      </div>
      {user && (
        <div className="mt-4">
          <form>
            <label htmlFor="comment" />
            <input type="text" name="comment" id="comment" />
            <button>Submit Comment</button>
          </form>
        </div>
      )}
    </section>
  );
};
