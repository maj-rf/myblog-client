import { useGetBlogCommentsQuery } from '../../slice/commentApiSli';
import { dateFormatter } from '../../helpers/dateFormatter';
import { Loading } from '../Loading';

interface CommentsProps {
  id: string;
}

export const Comments = ({ id }: CommentsProps) => {
  const { data, isLoading, isSuccess } = useGetBlogCommentsQuery(id);
  let content;
  if (isLoading) content = <Loading />;
  if (data?.length === 0) content = <div>There are no comments.</div>;
  if (isSuccess)
    content = (
      <div>
        <h1>Comments {`(${data.length})`}</h1>
        <ul>
          {data.map((comment) => (
            <li key={comment.id} className="sm:max-w-fit">
              <div className="flex gap-2 ">
                <p className="text-accent font-semibold">
                  {comment.user.username}
                </p>
                <p>{dateFormatter(comment.createdAt)}</p>
              </div>
              <p className="speech-bubble mt-2 p-4 bg-primary-400 text-cleanWhite rounded-lg">
                {comment.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  return <>{content}</>;
};
