import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducers';

const GithubContext = createContext();


export const GithubProvider = ({ children }) => {
  const IntialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, IntialState);

  
 


  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        
        
       
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
