import { ProfileBlogs } from '../components/Profile/ProfileBlogs';
import { useAppSelector } from '../store';
export const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <section className="p-4 text-cleanWhite">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold text-center mb-10">
          {user?.username}'s Profile
        </h1>
        <div className="text-center">Your Blogs</div>
        <ProfileBlogs />
      </div>
    </section>
  );
};
