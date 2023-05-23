import { useParams } from 'react-router-dom';
import { useGetBlogQuery } from '../slice/blogsApiSlice';
import { dateFormatter } from '../helpers/dateFormatter';

export const Blog = () => {
  const params = useParams();
  const id = params.id || '';

  const { data, isLoading } = useGetBlogQuery(id);

  if (isLoading) return <div>Loading..</div>;
  const dateCreated = dateFormatter(data?.createdAt);
  return (
    <section className="flex flex-col justify-between p-4 max-w-5xl mx-auto text-cleanWhite">
      <div className="border border-white p-2">
        <h1 className="text-accent">{data?.title}</h1>
        <p className="text-gray-300">
          by {data?.user.username}, {dateCreated}
        </p>
        <p>{data?.content}</p>
      </div>
      <div className="mt-4">
        <form>
          <label htmlFor="comment" />
          <input type="text" name="comment" id="comment" />
          <button>Submit Comment</button>
        </form>
      </div>
    </section>
  );
};
