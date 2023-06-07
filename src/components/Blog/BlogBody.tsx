import { useGetBlogQuery } from '../../slice/blogsApiSlice';
import { dateFormatter } from '../../helpers/dateFormatter';
import { errorCheck } from '../../helpers/errorCheck';
import parse from 'html-react-parser';
import { Loading } from '../Loading';

interface BlogBodyProps {
  id: string;
}

export const BlogBody = ({ id }: BlogBodyProps) => {
  const { data, isLoading, isSuccess, error } = useGetBlogQuery(id);
  let content;
  if (error) content = <div>{errorCheck(error)}</div>;
  if (isLoading) content = <Loading />;
  if (isSuccess)
    content = (
      <div className="border border-white rounded-md p-4 container bg-primary-600">
        <h1 className="mb-2 text-3xl font-bold text-accent">{data.title}</h1>
        <h2 className="mb-4">
          Posted by{' '}
          <span className="text-accent font-semibold">
            {data.user.username}{' '}
          </span>
          on {new Date(`${data.createdAt}`).toLocaleDateString()} (
          {dateFormatter(data.createdAt)})
        </h2>
        <div>{parse(data.content)}</div>
      </div>
    );

  return <>{content}</>;
};
