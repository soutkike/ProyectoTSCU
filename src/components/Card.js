import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card mx-auto shadow p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h1 className="display-5 text-danger text-center">
            {this.props.display}
          </h1>
          <h1 className="display-6 text-center">{this.props.description}</h1>
        </div>
      </div>
    );
  }
}

export default Card;
