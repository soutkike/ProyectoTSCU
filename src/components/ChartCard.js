import React from "react";
import Dona from "../components/Dona";
class CardChart extends React.Component {
  render() {
    return (
      <div className="card mx-auto shadow p-3 mb-5 bg-white rounded">
        <h1 className="display-6 text-center">Aforo:</h1>
        <Dona data={this.props.data} />
      </div>
    );
  }
}

export default CardChart;
