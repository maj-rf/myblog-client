import { RecentBlogs } from '../components/Blog/RecentBlogs';
import hero from '../assets/hero.png';
import { Link } from 'react-router-dom';
import { RecentComments } from '../components/Comments/RecentComments';
export const Home = () => {
  return (
    <section className="flex-1 pb-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 min-h-screen px-4 max-w-5xl mx-auto ">
        <div className="w-full md:w-2/3 text-center lg:text-left">
          <h1 className="mb-2 mt-8 md:mt-0 font-bold text-6xl md:text-7xl text-accent">
            Muni-muni
          </h1>
          <h2 className="my-8 text-2xl font-medium text-cleanWhite">
            A Filipino word which occasionally means{' '}
            <i>to reflect, to ponder, or to speculate.</i>
            <br />
            Share your thoughts and stories with the world through blogging,
            anytime and anywhere.
          </h2>

          <Link
            to="/profile"
            className="px-2 py-1 rounded-xl text-2xl bg-cleanWhite hover:bg-accent"
          >
            Start writing today!
          </Link>
        </div>
        <div className="bg-slate-200 mt-4 md:mt-0 rounded-lg">
          <img src={hero} alt="minimalistic art of a person blogging" />
        </div>
      </div>
      <RecentBlogs />
      <RecentComments />
    </section>
  );
};
