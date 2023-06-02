/* eslint-disable camelcase */
import { useAppSelector } from '../store';
import { Comments } from '../components/Comments/Comments';
import { BlogBody } from '../components/Blog/BlogBody';
import { useParams } from 'react-router-dom';
import { CommentForm } from '../components/Comments/CommentForm';

export const Blog = () => {
  const { user } = useAppSelector((state) => state.auth);
  const params = useParams();
  const id = params.id || '';

  return (
    <section className="p-4 text-cleanWhite">
      <div className="sm:w-3/4 sm:mx-auto">
        <BlogBody id={id} />
        {user && <CommentForm id={id} />}
        <Comments id={id} />
      </div>
    </section>
  );
};
