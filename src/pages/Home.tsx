import { RecentBlogs } from '../components/RecentBlogs';

export const Home = () => {
  return (
    <section className="flex-1 max-w-5xl mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full sm:w-2/3 rounded-lg border-4 border-b-8 border-r-8 border-slate-800 bg-white shadow-2xl shadow-black">
          <h1 className="text-7xl text-orange-400 uppercase">Sulat</h1>
          <p className="text-2xl">
            Filipino word for <i>write</i>. Share your thoughts, anytime and
            anywhere.
          </p>
        </div>
      </div>
      <RecentBlogs />
    </section>
  );
};
