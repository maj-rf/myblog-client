import { ProfileBlogs } from '../components/Profile/ProfileBlogs';
import { useAppSelector } from '../store';
export const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <section className="p-4 text-cleanWhite ">
      <div className="max-w-5xl mx-auto">
        <h1>{user?.username}'s Profile</h1>
        <p>Email: {user?.email}</p>
        <ProfileBlogs />
      </div>
    </section>
  );
};
