declare module '@codehimalaya/authentication_service' {
  import { ReactNode } from 'react';

  // Declare the props interface for AuthProvider
  interface AuthProviderProps {
    CLIENT_ID: any;
    CODE_CHALLENGE: any;
    CODE_CHALLENGE_METHOD: any;
    REDIRECT_URI: any;
    BASE_URL: any;
    children: ReactNode;
    // Add other props as needed
  }

  // Declare the AuthProvider component
  export function AuthProvider(props: AuthProviderProps): JSX.Element;

  // Declare the useAuthProvider hook
  export function useAuthProvider(): any;

  // Add other types or exports as needed
}
