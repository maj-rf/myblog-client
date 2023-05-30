import { useGetBlogQuery } from '../../slice/blogsApiSlice';
import { dateFormatter } from '../../helpers/dateFormatter';
import { errorCheck } from '../../helpers/errorCheck';

interface BlogBodyProps {
  id: string;
}

export const BlogBody = ({ id }: BlogBodyProps) => {
  const { data, isLoading, error } = useGetBlogQuery(id);
  const dateCreated = dateFormatter(data?.createdAt);
  if (error) return <div>{errorCheck(error)}</div>;
  if (isLoading) return <div>Loading..</div>;

  return (
    <div className="border border-white p-2 container">
      <h1 className="mb-2 text-3xl font-bold text-accent">{data?.title}</h1>
      <h2 className="mb-1 text-xl font-medium text-gray-300">
        by {data?.user.username}, {dateCreated},{' '}
        {new Date(`${data?.createdAt}`).toLocaleDateString()}
      </h2>
      <p>{data?.content}</p>
    </div>
  );
};
