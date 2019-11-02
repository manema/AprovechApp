import { useEffect } from 'react';
import useSession from 'hooks/useSession';

const useSessionChangeEffect = effect => {
  const { user, info, authenticated } = useSession();
  debugger;
  useEffect(() => effect({ user, info, authenticated }), [effect, user, info]);
};

export default useSessionChangeEffect;