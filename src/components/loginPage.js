import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Segment, Responsive } from "semantic-ui-react";
import "./loginPage.css";
// import { Button } from 'semantic-ui-react'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      console.log(this.state)
    );
    console.log(event.target);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Segment className="AllSide">
        <h2>WELCOME TO Q & A SITE</h2>
        <Grid columns={2} relaxed="very" className="AllSide">
          {/* ISI DARI SISI KIRI */}
          <Grid.Column className="LeftSide">
            <Responsive as={Segment}>
              {" "}
                <div className="App">
                <h1>LOGIN</h1>
                <form onSubmit={this.handleSubmit} className="formLogin">
                  <fieldset>
                    <label htmlFor="userName" className="formLogin">
                      User Name :{" "}
                    </label>
                    <input
                      type="text"
                      name="userName"
                      value={this.state.userName}
                      onChange={this.handleChange}
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="password">Password : </label>
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </fieldset>

                  {/* <fieldset>
                    <select>
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option selected value="coconut">
                        Coconut
                      </option>
                      <option value="mango">Mango</option>
                    </select>
                  </fieldset> */}
                  <button type="submit">
                    <Link to="/dashboard">Login</Link>
                  </button>
                </form>
              </div>
            </Responsive>
          </Grid.Column>

          {/* ISI DARI SISI KANAN */}
          <Grid.Column className="RightSide">
            <div className="AppRightSide">
              <p>the best answer for your question</p>
              <p>come and join QnA for solve all your problem</p>
            </div>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default Login;