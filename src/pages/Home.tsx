import UserResults from "../components/users/UserResults";
import { UserSearch } from "../components/users/UserSearch";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <UserSearch />
      <UserResults />
    </div>
  );
};
