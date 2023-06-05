import { useLocation, useNavigate } from 'react-router-dom';
import { IBlog } from '../../types/types';
import { useForm } from 'react-hook-form';
import { useUpdateBlogMutation } from '../../slice/blogsApiSlice';
import { errorCheck } from '../../helpers/errorCheck';
import { notify } from '../../helpers/notify';
import { BaseButton } from '../BaseButton';

type BlogInput = Pick<IBlog, 'title' | 'content' | 'published'>;

export const UpdateBlogForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog as IBlog;
  const [updateBlog, { isLoading }] = useUpdateBlogMutation();
  const { register, handleSubmit, reset } = useForm<BlogInput>();

  const handleUpdateBlog = async (data: BlogInput) => {
    try {
      const res = await updateBlog({ id: blog.id, data }).unwrap();
      notify({ type: 'success', message: res.message });
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
        onSubmit={handleSubmit(handleUpdateBlog)}
        className="max-w-5xl mx-auto p-4"
      >
        <label htmlFor="title" className="text-cleanWhite">
          Title
        </label>
        <input
          className="text-black w-full p-2 resize-none"
          defaultValue={blog.title}
          id="title"
          {...register('title')}
        />
        <label htmlFor="content" className="text-cleanWhite">
          Content
        </label>
        <textarea
          className="text-black w-full p-2 resize-none"
          rows={14}
          defaultValue={blog.content}
          id="content"
          {...register('content')}
        />
        <BaseButton
          type="submit"
          isLoading={isLoading}
          className="w-full sm:w-fit mt-2 py-1 px-4 uppercase text-slate-900 font-semibold bg-accent border-accent focus:ring-green-300"
        >
          Update Blog
        </BaseButton>
      </form>
    </div>
  );
};
