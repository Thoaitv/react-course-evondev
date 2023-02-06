import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState({
    userId: 1,
    fullName: 'Thoai',
    phone: 123,
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === 'undefined')
    throw new Error('Phai ben trong Provider');
  return context;
}

export { useAuth, AuthProvider };
