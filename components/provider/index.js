import { SessionProvider } from 'next-auth/react';

const Provider = ({ children }) => {
  if (typeof window !== 'undefined') {
    return <SessionProvider>{children}</SessionProvider>;
  } else {
    return <>{children}</>;
  }
};

export default Provider