import React, { Component } from "react";
import { connect } from "react-redux";

import ToDo from "./ToDo";
import { createTodo, fetchTodos, deleteTodo } from "../actions";

class ToDos extends Component {
  state = {
    formValue: "",
    placeholder: "Enter a TODO"
  };

  componentDidMount = () => {
    this.props.fetchTodos();
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createTodo(this.state.formValue);
    this.reset();
  };
  onChange = event => {
    this.setState({
      formValue: event.target.value
    });
  };
  reset = () => {
    this.setState({ formValue: "" });
  };
  onDeleteClick = value => {
    this.props.deleteTodo(value);
  };

  render() {
    if (!this.props.items) {
      return <div>Loading</div>;
    }
    const items = this.props.items.map(item => {
      return (
        <div className="field" key={`field${item.id}`}>
          <form>
            <label>
              <ToDo
                key={item.id}
                lab={item.toro}
                onDel={() => this.onDeleteClick(item.id)}
              />
            </label>
          </form>
        </div>
      );
    });

    return (
      <div className="inline fields ui stacked segments">
        {items}
        <form className="ui center aligned segment">
          <input
            type="text"
            placeholder={this.state.placeholder}
            value={this.state.formValue}
            onChange={this.onChange}
            name="toro"
          />
          <button
            className="mini ui button right aligned"
            type="submit"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: Object.values(state.todos) };
};
export default connect(
  mapStateToProps,
  { createTodo, fetchTodos, deleteTodo }
)(ToDos);
