import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class SearchBox extends Component {
  render() {
    return (
      <div className="d-flex mx-5 mt-3 row">
        <form
          onSubmit={(event) => this.props.onSubmit(event)}
          className="form-inline"
        >
          <input
            type="text"
            value={this.props.searchValue}
            onChange={(event) => this.props.onChange(event)}
            placeholder="Search Movies ..."
            className="form-control"
          ></input>
          <div className="d-flex mx-2">
            <button type="submit" className="btn btn-success">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
