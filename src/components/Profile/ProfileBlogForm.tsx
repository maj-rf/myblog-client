import { useLocation, useNavigate } from 'react-router-dom';
import { IBlog } from '../../types/types';
import { useForm } from 'react-hook-form';
import { useUpdateBlogMutation } from '../../slice/blogsApiSlice';
import { errorCheck } from '../../helpers/errorCheck';

type BlogInput = Pick<IBlog, 'title' | 'content' | 'published'>;

export const ProfileBlogForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog as IBlog;
  const [updateBlog, { error, isLoading }] = useUpdateBlogMutation();
  const { register, handleSubmit, reset } = useForm<BlogInput>();

  const handleUpdateBlog = async (data: BlogInput) => {
    await updateBlog({ id: blog.id, data });
    reset();
    navigate('/profile');
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdateBlog)}>
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
          rows={3}
          defaultValue={blog.content}
          id="content"
          {...register('content')}
        />
        <button
          disabled={isLoading}
          className="w-full sm:w-auto bg-accent text-black px-2 py-1"
        >
          Update Blog
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
