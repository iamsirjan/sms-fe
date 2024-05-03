import { BrowserRouter } from 'react-router-dom';
import Provider from './providers';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from '@codehimalaya/authentication_service';
import { CONFIG } from './config';

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <AuthProvider
          CLIENT_ID={CONFIG.CLIENT_ID}
          CODE_CHALLENGE={CONFIG.CODE_CHALLENGE}
          CODE_CHALLENGE_METHOD={CONFIG.CODE_CHALLENGE_METHOD}
          REDIRECT_URI={CONFIG.REDIRECT_URI}
          BASE_URL={CONFIG.AUTH_SERVER}
        >
          <AppRoutes />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
