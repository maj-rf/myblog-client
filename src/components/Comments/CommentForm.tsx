import { useForm } from 'react-hook-form';
import { useAddCommentMutation } from '../../slice/commentApiSli';
import { errorCheck } from '../../helpers/errorCheck';

type CommentInput = {
  comment_content: string;
};

export const CommentForm = ({ id }: { id: string }) => {
  const { register, handleSubmit, reset } = useForm<CommentInput>();

  const [sendComment, { error }] = useAddCommentMutation();

  const handleSendComment = async (data: CommentInput) => {
    await sendComment({ id, data });
    reset();
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit(handleSendComment)}>
        <label htmlFor="comment_content" />
        <input
          className="text-black"
          type="text"
          id="comment_content"
          {...register('comment_content')}
        />
        <button>Submit Comment</button>
        {error && (
          <p className="text-red-500 mt-2 text-center">{errorCheck(error)}</p>
        )}
      </form>
    </div>
  );
};
