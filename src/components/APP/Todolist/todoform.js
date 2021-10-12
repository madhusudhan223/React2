import { Component } from "react";
import shortid from "shortid";
class TodoForm extends Component {
  state = {
    text: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      text: this.state.text,
      completed: false,
      id: shortid.generate(),
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>todolist....</h2>
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="todo..."
          />
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Add todo
          </button>
        </form>
      </>
    );
  }
}
export default TodoForm;
