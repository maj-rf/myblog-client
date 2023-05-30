import { Link } from 'react-router-dom';
import { IBlog } from '../../types/types';
import { useRef } from 'react';
import { useDeleteBlogMutation } from '../../slice/blogsApiSlice';
import { dateFormatter } from '../../helpers/dateFormatter';
import { Trash, Edit } from 'lucide-react';

export const ProfileBlogCard = ({ blog }: { blog: IBlog }) => {
  const [deleteBlog] = useDeleteBlogMutation();
  const ref = useRef<HTMLDialogElement | null>(null);

  const showModal = () => {
    ref.current?.showModal();
  };

  const closeModal = () => {
    ref.current?.close();
  };

  return (
    <div className="bg-secondary p-4 border-4 rounded-lg border-cleanWhite">
      <div className="p-2">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          {blog.title}
        </h2>
        <p className="mb-1">Status: {blog.published ? 'Published' : 'Draft'}</p>
        <p className="mb-1">Created: {dateFormatter(blog.createdAt)}</p>
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
      </div>
      <dialog ref={ref} className="" onClose={() => closeModal()}>
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
            onClick={() => deleteBlog(blog.id)}
            className="inline-flex items-center px-3 py-2 mr-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            Delete This Blog
          </button>
        </div>
      </dialog>
    </div>
  );
};
