import { RecentBlogs } from '../components/RecentBlogs';
import hero from '../assets/hero.png';
export const Home = () => {
  return (
    <section className="flex-1 max-w-5xl mx-auto mb-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 min-h-screen px-4">
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="mb-2 mt-8 md:mt-0 font-bold text-7xl text-accent">
            Muni-muni
          </h1>
          <h2 className="mb-1 text-2xl font-medium text-cleanWhite">
            A Filipino word which occasionally means{' '}
            <i>to reflect, to ponder, or to speculate.</i>.
            <br />
            Share your thoughts and stories with the world through blogging,
            anytime and anywhere.
          </h2>

          <button className="px-2 py-1 mt-4 rounded-xl text-2xl bg-cleanWhite hover:bg-accent">
            Start writing today!
          </button>
        </div>
        <div className="bg-white border border-accent mt-2 box">
          <img src={hero} alt="minimalistic art of a person blogging" />
        </div>
      </div>
      <RecentBlogs />
    </section>
  );
};
