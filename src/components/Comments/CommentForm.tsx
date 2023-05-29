import { useForm } from 'react-hook-form';
import { useAddCommentMutation } from '../../slice/commentApiSli';
import { errorCheck } from '../../helpers/errorCheck';

type CommentInput = {
  comment_content: string;
};

export const CommentForm = ({ id }: { id: string }) => {
  const { register, handleSubmit, reset } = useForm<CommentInput>();

  const [sendComment, { error, isLoading }] = useAddCommentMutation();

  const handleSendComment = async (data: CommentInput) => {
    await sendComment({ id, data });
    reset();
  };

  return (
    <div className="mt-4 mb-4">
      <form className="" onSubmit={handleSubmit(handleSendComment)}>
        <label htmlFor="comment_content">Say Something</label>
        <textarea
          className="text-black w-full p-2 resize-none"
          rows={3}
          id="comment_content"
          {...register('comment_content')}
        />
        <button disabled={isLoading} className="bg-accent text-black px-2 py-1">
          Submit Comment
        </button>
        {error && (
          <span className="p-2 text-red-500 mt-2 text-center">
            {errorCheck(error)}
          </span>
        )}
      </form>
    </div>
  );
};
