import React from "react";

import Header from "../components/Header";
import Table from "../components/Table";
import SideInfo from "../containers/SideInfo";
import Card from "../components/Card";
import Footer from "../components/Footer";

class Dashboard extends React.Component {
  state = {
    capacity: 100,
    entriesCount: 0,
    exitsCount: 0,
    count: 0,
    data: [],
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const response = await fetch("/getRecent");
    const datos = await response.json();

    this.setState({
      entriesCount: datos.entries,
      exitsCount: datos.exits,
      count: datos.count,
      data: datos.data,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row mt-5">
          <Table data={this.state.data} />
          <SideInfo>
            <Card display={this.state.entriesCount} description="Entradas" />
            <Card display={this.state.exitsCount} description="Salidas" />
            <Card
              display={`${this.state.entriesCount - this.state.exitsCount} / ${
                this.state.capacity
              }`}
              description="Aforo"
            />
            <Card display="100" description="Entradas" />
          </SideInfo>
        </div>
        <div className="row"></div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
