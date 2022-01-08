import { createContext ,useReducer} from "react";
import githubReducer from "./GithubReducers";

const GithubContext = createContext()



const GITHUB_URL=process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider= ({children})=>{

  const IntialState ={
    users :[],
    loading:true
  }

  const [state,dispatch] =useReducer(githubReducer,IntialState)
       

        const fetchUsers = async () => {
          const response = await fetch(
            `${GITHUB_URL}/users`,
            {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
              },
            }  
          );

          const data = await response.json();
         
          dispatch({
            type:'GET_USERS'
          })

        };

return (
  <GithubContext.Provider
    value={{
      users,
      loading,
      fetchUsers,
    }}
  >
    {children}
  </GithubContext.Provider>
);
}

export default GithubContext