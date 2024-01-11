import PropTypes from "prop-types";
import React, { Component } from "react";
import CourseList from "../CourseList/CourseList.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import { Notifications } from "../Notifications/Notifications.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn || false,
    };
  }

  render() {
    return (
      <>
        <div className="App">
          <Notifications displayDrawer={false} />
          <Header />
          {this.state.isLoggedIn ? <CourseList /> : <Login />}
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;

// function App({ isLoggedIn = false }) {
//   return (
//     <>
//       <div className="App">
//         <Notifications displayDrawer={false} />
//         <Header />
//         {isLoggedIn ? <CourseList /> : <Login />}
//         <Footer />
//       </div>
//     </>
//   );
// }
