import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ data, setData ] = useState({});


  async function signIn({ email, password }){
    try {
      const   response = await api.post("/sessions", { email, password });
      const { token , user } = response.data

      localStorage.setItem("@foodexplorer:token", token)
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setData({ user, token});
      
    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível fazer login");
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if ( user && token){

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      

    setData({
      token,
      user: JSON.parse(user)
    })
  }
  }, [])


  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };