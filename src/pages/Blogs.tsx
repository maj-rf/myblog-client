import { useQuery } from '@tanstack/react-query';
import { getAllBlogs } from '../services/blogService';
import { AxiosError } from 'axios';

export const Blogs = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['blogs'],
    queryFn: getAllBlogs,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        {error instanceof AxiosError ? error.response?.data.message : ''}
      </div>
    );
  return (
    <div>
      <h1>RandomBlog</h1>
      <ul>
        {data?.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};
