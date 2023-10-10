import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <ul>
  <li><Link to="/">FetchApiAxiosUseEffectImagesKeyGitcardComponent</Link></li>
  <li><Link to="/togglepara">TogglePara</Link></li>
  <li><Link to="/covidtable">FetchCovidStatewiseOneTable</Link></li>
  <li><Link to="/FetchApiAxiosUseEffect">FetchApiAxiosUseEffect</Link></li>
  <li><Link to="/todo">Todo2</Link></li>
</ul>
    
    </>
  )
}

export default Navbar