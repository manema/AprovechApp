import { useSelector } from 'react-redux';

const useSession = () =>
  useSelector(({ session: { user, info, authenticated } }) => ({
    user,
    info,
    authenticated
  }));

export default useSession;