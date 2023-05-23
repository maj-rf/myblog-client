import { RecentBlogs } from '../components/RecentBlogs';

export const Home = () => {
  return (
    <div className="bg-slate-500 flex-1">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full sm:w-96 mx-4 rounded-lg border-4 border-b-8 border-r-8 border-slate-800 bg-white shadow-2xl shadow-black">
          <h1 className="text-7xl text-orange-400 uppercase">Sulat</h1>
          <p className="text-2xl">
            Filipino word for <i>write</i>. Share your thoughts, anytime and
            anywhere.
          </p>
        </div>
      </div>
      <RecentBlogs />
    </div>
  );
};
