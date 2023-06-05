import { useForm } from 'react-hook-form';
import { useAddCommentMutation } from '../../slice/commentApiSli';
import { errorCheck } from '../../helpers/errorCheck';
import { BaseButton } from '../BaseButton';

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
        <BaseButton
          type="submit"
          isLoading={isLoading}
          className="w-full sm:w-fit mt-2 py-1 px-4 uppercase text-slate-900 font-semibold bg-accent border-accent focus:ring-green-300"
        >
          Submit Comment
        </BaseButton>
        {error && (
          <span className="p-2 text-red-500 mt-2 text-center">
            {errorCheck(error)}
          </span>
        )}
      </form>
    </div>
  );
};
