import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    // Create state
    this.state = {
      userInfo: {
        name: "",
        location: "Hyderabad",
        avatar_url: "",
      },
    };
    console.log("child-constructor" + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/manjureddy97");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("json====", json);
    console.log("  child-componentDidMount" + this.props.name);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    const { count } = this.state; // destructure
    const { count2 } = this.state; // destructure
    console.log("child-render" + this.props.name);
    return (
      <div>
        <h1>Profile class components</h1>
        <img src={this.state?.userInfo?.avatar_url} />
        <h2>Name:{this.state?.userInfo?.login}</h2>
        <h2>Location:{this.state?.userInfo?.location}</h2>

        <button
          onClick={() =>
            this.setState({
              count: count - 1,
            })
          }
        >
          classCount
        </button>
      </div>
    );
  }
}

export default Profile;
