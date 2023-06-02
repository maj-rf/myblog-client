import { useGetBlogQuery } from '../../slice/blogsApiSlice';
import { dateFormatter } from '../../helpers/dateFormatter';
import { errorCheck } from '../../helpers/errorCheck';

interface BlogBodyProps {
  id: string;
}

export const BlogBody = ({ id }: BlogBodyProps) => {
  const { data, isLoading, isSuccess, error } = useGetBlogQuery(id);
  let content;
  if (error) content = <div>{errorCheck(error)}</div>;
  if (isLoading) content = <div>Loading..</div>;
  if (isSuccess)
    content = (
      <div className="border border-white rounded-md p-2 container bg-primary-600">
        <h1 className="mb-2 text-3xl font-bold text-accent">{data.title}</h1>
        <h2 className="mb-1 text-xl font-medium text-gray-300">
          by {data.user.username}, {dateFormatter(data.createdAt)}
          {new Date(`${data.createdAt}`).toLocaleDateString()}
        </h2>
        <p>{decodeURI(data.content)}</p>
      </div>
    );

  return <>{content}</>;
};
