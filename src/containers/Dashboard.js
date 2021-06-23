import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import SideInfo from "../containers/SideInfo";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ChartCard from "../components/ChartCard";
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
    const response = await fetch("/recent");
    const datos = await response.json();

    this.setState({
      entriesCount: datos.entries,
      exitsCount: datos.exits,
      count: datos.count,
      data: datos.data.reverse(),
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row mt-5">
          <Table data={this.state.data} />
          <SideInfo>

            <ChartCard data={this.state.entriesCount - this.state.exitsCount} />
            <Card
              display={this.state.entriesCount}
              description="Entradas"
              textColor="text-success"
            />
            <Card
              display={this.state.exitsCount}
              description="Salidas"
              textColor="text-primary"
            />

            

            <Card
              display={`${this.state.entriesCount - this.state.exitsCount} / ${
                this.state.capacity
              }`}
              description="Utilizado"
              textColor="text-info"
            />
          </SideInfo>
        </div>
        <div className="row"></div>

        <Footer />
      </div>
    );
  }
}

export default Dashboard;
