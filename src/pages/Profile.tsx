import { useAppSelector } from '../store';
export const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <section className="flex flex-col justify-between p-4 max-w-5xl mx-auto text-cleanWhite">
      <h1>{user?.username}'s Profile</h1>
      <p>Email: {user?.email}</p>
    </section>
  );
};
