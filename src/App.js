import React, { useState } from 'react'

import Repo from './Repo'
import RepoDetails from './RepoDetails'
import { Container } from 'react-bootstrap'
import Search from './Search'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {



  const [count, setCount] = useState(0)
  const [repos, setRepos] = useState([])
  // const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const getRepoRequest = async (searchValue) => {
    const url = `https://api.github.com/orgs/${searchValue}/repos`


    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      console.log("Worked!!");
      setRepos(responseJson)
      setCount(responseJson.length)
      console.log(responseJson)
    } else {
      console.log("Did not work!")
      console.log(responseJson)
    }
  };

  // useEffect (() => {
  //   getRepoRequest(searchValue)
  // }, [searchValue])
  function handleSearch(e) {
    setSearchValue(e.target.value)
  }
  function handleOnClick() {
    getRepoRequest(searchValue)
  }
  return (
    <Container>
      <Routes>
        {/* <Route exact path="/" element={<Repo />}>
       
       </Route> */}
        <Route exact path="/repo" element={<RepoDetails />}>
        </Route>
      </Routes>
      <Search handleSearch={handleSearch} handleOnClick={handleOnClick} />
      {count > 0 ? <h1>{count} repos found</h1> : <h1>No repos found</h1>}
      {repos.map((repo, index) => {
        return <Repo key={index} repo={repo} />
      })}

    </Container>
  );
}

export default App;
