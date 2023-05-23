import { useParams } from 'react-router-dom';
import { useGetBlogQuery } from '../slice/blogsApiSlice';

export const Blog = () => {
  const params = useParams();
  const id = params.id || '';

  const { data, isLoading } = useGetBlogQuery(id);

  if (isLoading) return <div>Loading..</div>;
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>Created at: {data?.createdAt}</p>
      <p>{data?.content}</p>
    </div>
  );
};
