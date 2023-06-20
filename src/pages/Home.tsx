import { RecentBlogs } from '../components/Blog/RecentBlogs';
import hero from '../assets/hero.png';
import { Link } from 'react-router-dom';
import { RecentComments } from '../components/Comments/RecentComments';
export const Home = () => {
  return (
    <section className="flex-1 pb-4">
      <div className="bg-home bg-center bg-cover px-4 aspect-video">
        <div className="min-h-screen max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 ">
          <div className=" text-center lg:text-left flex-1">
            <h1 className="mt-8 lg:mt-0 font-bold text-6xl md:text-7xl text-accent uppercase">
              Muni-muni
            </h1>
            <h2 className="my-8 text-2xl font-medium">
              A Filipino word which occasionally means{' '}
              <i>
                to <b>reflect</b>, to <b>ponder</b>, or to <b>speculate</b>.
              </i>
              <br />
              Share your thoughts and stories with the world through blogging,
              anytime and anywhere.
            </h2>

            <Link
              to="/profile"
              className=" px-4 py-3 rounded-xl text-2xl bg-cleanWhite hover:bg-accent"
            >
              Start writing today!
            </Link>
          </div>
          <div className="bg-slate-100 m-4 md:mt-0 rounded-lg">
            <img src={hero} alt="minimalistic art of a person blogging" />
          </div>
        </div>
      </div>
      <RecentBlogs />
      <RecentComments />
    </section>
  );
};
