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
    <section className="flex flex-col justify-between p-4 max-w-5xl mx-auto text-cleanWhite">
      <BlogBody id={id} />
      {user && <CommentForm id={id} />}
      <Comments id={id} />
    </section>
  );
};
