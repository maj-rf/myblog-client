import { useNavigate } from 'react-router-dom';
import { IBlog } from '../../types/types';
import { useForm } from 'react-hook-form';
import { useCreateBlogMutation } from '../../slice/blogsApiSlice';
import { notify } from '../../helpers/notify';
import { errorCheck } from '../../helpers/errorCheck';

type BlogInput = Pick<IBlog, 'title' | 'content' | 'published'>;

export const CreateBlogForm = () => {
  const navigate = useNavigate();
  const [createBlog, { isLoading }] = useCreateBlogMutation();
  const { register, handleSubmit, reset } = useForm<BlogInput>();

  const handleCreateBlog = async (data: BlogInput) => {
    try {
      await createBlog(data).unwrap();
      notify({ type: 'success', message: 'Successfully created a blog' });
      reset();
      navigate('/profile');
    } catch (error) {
      const message = errorCheck(error);
      if (message) notify({ type: 'error', message });
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(handleCreateBlog)}
        className="max-w-5xl mx-auto p-4"
      >
        <label htmlFor="title" className="text-cleanWhite">
          Title
        </label>
        <input
          className="text-black w-full p-2 resize-none"
          id="title"
          {...register('title')}
        />
        <label htmlFor="content" className="text-cleanWhite">
          Content
        </label>
        <textarea
          className="text-black w-full p-2 resize-none"
          rows={14}
          id="content"
          {...register('content')}
        />
        <button
          disabled={isLoading}
          className="w-full sm:w-auto bg-accent text-black px-2 py-1"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};
