// import { useReducer, useEffect } from 'react'
// import axios from 'axios'

// const ACTIONS = {
//     MAKE_REQUEST: 'make-request',
//     GET_DATA: 'get-data',
//     ERROR: 'error'
// }

// const BASE_URL = 'https://api.github.com/users/user/repos'

// function reducer(state, action) {
//     switch (action.type) {
//         case ACTIONS.MAKE_REQUEST:
//             return { loading: true, repos: [] }
//         case ACTIONS.GET_DATA:
//             return { ...state, loading: false, repos: action.payload.repos }
//         case ACTIONS.ERROR:
//             return { ...state, loading: false, error: action.payload.error, repos: []}
//         default:
//             return state

//     }
// }

// export default function useFetchRepos(params, page) {
//     const [state, dispatch] = useReducer(reducer, { repos: [], loading: true })
    

//     useEffect(() => {
//         dispatch({ type: ACTIONS.MAKE_REQUEST })
//         axios.get(BASE_URL, {
//             params: {markdown: true, page: page, ...params}
//         }).then(res => {
//             dispatch({ type: ACTIONS.GET_DATA, payload: {jobs: res.data}})
//         }).catch(e => {
//             dispatch({ type: ACTIONS.ERROR, payload: { error: e} })
//         })

//     }, [params, page])


//     return state
    
// }
// Goal: Create a website for searching github organizations i.e. https://api.github.com/orgs/{orgName}/repos

// and their repository

// Acceptance Criteria:

// - A page where there is an input field where user can type in organizations and show list of public repositories

//     - User types in facebook

//     - Results show public repository like react, react-native, jest

// - When a repository is clicked, it should go to another page and show details like

//     - name

//     - avatar image

//     - watchers

//     - forks

//     - open issues

//     - license

