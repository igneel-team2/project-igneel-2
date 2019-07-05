import React from 'react'
// import Membership from './membership'


class Homepage extends React.Component{

  render(){
    return(
<div>
<div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button>
          {/* <Link to='./components/membership.js'>Membership</Link> */}
         </button>
          {/* <Membership/> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
</div>
    )
  }
}


export default Homepage
