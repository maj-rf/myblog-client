import { useAppSelector } from '../store';
export const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div>
      <h1>{user?.username}'s Profile</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
};
