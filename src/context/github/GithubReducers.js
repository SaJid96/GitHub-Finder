const githubReducer =(state,action)=>{

    switch (action.type) {
       
        case 'GET_USERS':
            return{
                ...state
            }
    
        default: state
    }
}


export default githubReducer