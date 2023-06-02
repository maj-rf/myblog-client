import { useGetBlogCommentsQuery } from '../../slice/commentApiSli';
import { dateFormatter } from '../../helpers/dateFormatter';

interface CommentsProps {
  id: string;
}

export const Comments = ({ id }: CommentsProps) => {
  const { data, isLoading, isSuccess } = useGetBlogCommentsQuery(id);
  let content;
  if (isLoading) content = <div>Loading...</div>;
  if (data?.length === 0) content = <div>There are no comments.</div>;
  if (isSuccess)
    content = (
      <div>
        <h1>Comments {`(${data.length})`}</h1>
        <ul>
          {data.map((comment) => (
            <li key={comment.id}>
              <div className="flex gap-2 ">
                <p className="text-accent text-xl font-semibold">
                  {comment.user.username}
                </p>
                <p>{dateFormatter(comment.createdAt)}</p>
              </div>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  return <>{content}</>;
};
