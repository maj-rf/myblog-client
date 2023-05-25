import { ProfileBlogs } from '../components/ProfileBlogs';
import { useAppSelector } from '../store';
export const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <section className="flex flex-col items-center justify-between p-4 max-w-5xl mx-auto text-cleanWhite">
      <div className="mb-8">
        <h1>{user?.username}'s Profile</h1>
        <p>Email: {user?.email}</p>
        <button>Edit Profile</button>
      </div>
      <ProfileBlogs />
    </section>
  );
};
