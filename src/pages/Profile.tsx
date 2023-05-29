import { ProfileBlogs } from '../components/Profile/ProfileBlogs';
import { useAppSelector } from '../store';
export const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <section className="flex flex-col p-4 text-cleanWhite">
      <div className="mb-8 w-full mx-auto">
        <h1>{user?.username}'s Profile</h1>
        <p>Email: {user?.email}</p>
        <button>Edit Profile</button>
      </div>
      <ProfileBlogs />
    </section>
  );
};
