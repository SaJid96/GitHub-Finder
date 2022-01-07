import {useEffect , useState} from "react"



function Userresults() {

        const [users ,setUsers] =useState([])
        const [loading, setLoading] =useState(true)

        useEffect(()=>{
        fetchUsers()
        },[])


        const fetchUsers=async() =>{
            const response = await fetch(
              `${process.env.REACT_APP_GITHUB_URL}/users`,
              {
                headers: {
                  Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                },
              }
            )

              const data =await response.json()
              setUsers(data)
              setLoading(false)

        }


    return (
        <div>
          {users.map((user) =>(
              <h4>{user.login}</h4>
          ))}
        </div>
    )
}

export default Userresults
