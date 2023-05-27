import { useGetBlogCommentsQuery } from '../slice/commentApiSli';
import { dateFormatter } from '../helpers/dateFormatter';

interface CommentsProps {
  id: string;
}

export const Comments = ({ id }: CommentsProps) => {
  const { data, isLoading } = useGetBlogCommentsQuery(id);

  if (!data) return <div>Invalid comments</div>;
  if (isLoading) return <div>Loading...</div>;
  if (data.length === 0) return <div>There are no comments.</div>;
  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {data.map((comment) => (
          <li key={comment.id}>
            <div className="flex gap-2 ">
              <p>{comment.user.username}</p>
              <p>{dateFormatter(comment.createdAt)}</p>
            </div>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
