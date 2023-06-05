import { Link } from 'react-router-dom';
import { IBlog } from '../../types/types';
import { useRef } from 'react';
import { useDeleteBlogMutation } from '../../slice/blogsApiSlice';
import { Trash, Edit } from 'lucide-react';
import { notify } from '../../helpers/notify';
import { errorCheck } from '../../helpers/errorCheck';

export const ProfileBlog = ({ blog }: { blog: IBlog }) => {
  const [deleteBlog] = useDeleteBlogMutation();
  const ref = useRef<HTMLDialogElement | null>(null);

  const showModal = () => {
    ref.current?.showModal();
  };

  const closeModal = () => {
    ref.current?.close();
  };

  const handleDeleteBlog = async () => {
    try {
      await deleteBlog(blog.id).unwrap();
      notify({
        type: 'success',
        message: `Successfully deleted ${blog.title}`,
      });
    } catch (error) {
      const message = errorCheck(error);
      if (message) notify({ type: 'error', message });
    }
  };

  return (
    <>
      <tr key={blog.id} className="hover:bg-primary-300 text-cleanWhite">
        <td className="py-6 px-6 text-sm font-medium whitespace-nowrap">
          <Link
            to={`/blogs/${blog.id}`}
            className="underline hover:text-accent"
          >
            {blog.title}
          </Link>
        </td>
        <td className="py-6 px-6 text-sm font-medium whitespace-nowrap ">
          {blog.published ? 'Published' : 'Draft'}
        </td>
        <td className=" text-sm px-6 font-medium whitespace-nowrap">
          <Link
            to={`/profile/blogs/${blog.id}/edit`}
            state={{ blog: blog }}
            className="inline-flex items-center gap-1 px-3 py-2 mr-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <Edit />
            Update
          </Link>
          <button
            onClick={() => showModal()}
            className="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            <Trash />
            Delete
          </button>
        </td>
        <td className="w-0">
          <dialog
            ref={ref}
            className="bg-primary-200"
            onClose={() => closeModal()}
          >
            <h2>
              You are about to delete <b>{blog.title}</b>.
            </h2>
            <div>
              <button
                className="inline-flex items-center px-3 py-2 mr-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                onClick={() => closeModal()}
                value="cancel"
                formMethod="dialog"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteBlog}
                className="inline-flex items-center px-3 py-2 mr-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
              >
                Delete This Blog
              </button>
            </div>
          </dialog>
        </td>
      </tr>
    </>
  );
};
