import React, { Component } from "react";
import { Checkbox } from "semantic-ui-react";
import Linkify from "react-linkify";

class ToDo extends Component {
  state = { checked: false };

  onChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <div className="ui left aligned segment">
        <label>
          <Checkbox onChange={this.onChecked} checked={this.state.checked} />
          <span
            style={{
              textDecoration: this.state.checked ? "line-through" : "none"
            }}
          >
            <Linkify>{this.props.lab}</Linkify>
          </span>
          <button
            className="mini ui right floated button"
            type="submit"
            value={this.props.lab}
            onClick={e => {
              e.preventDefault();
              this.props.onDel(this.props.lab);
            }}
          >
            Delete
          </button>
        </label>
      </div>
    );
  }
}

export default ToDo;
