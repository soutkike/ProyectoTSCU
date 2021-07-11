import React from "react";
import TableRework from "../components/TableRework";
import Header from "../components/Header";
import SideInfo from "../containers/SideInfo";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ChartCard from "../components/ChartCard";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
class Dashboard extends React.Component {
  state = {
    capacity: 100,
    entriesCount: 0,
    exitsCount: 0,
    count: 0,
    data: undefined,
    loading: true,
    error: null,
  };
  componentDidMount() {
    this.refreshInterval = setInterval(this.fetchData, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch("/recent");
      const datos = await response.json();
      this.setState({
        entriesCount: datos.entries,
        exitsCount: datos.exits,
        count: datos.count,
        data: datos.data.reverse(),
        loading: false,
      });
    } catch (Error) {
      this.setState({ loading: false, error: Error });
    }
  };
  render() {
    if (this.state.loading === true && this.state.data === undefined) {
      return <PageLoading />;
    }
    if (this.state.data.length === 0) {
    }

    if (this.state.data.error) {
      return <PageError />;
    }
    return (
      <div className="container-fluid">
        <Header />
        <div className="row mt-5">
          {this.state.data.length !== 0 && (
            <TableRework tableData={this.state.data} />
          )}
          {this.state.data.length === 0 && (
            <div className="col-9">
              <div className="w-75 mx-auto">
                <h1 className>Nadie nos ha visitado recientemente 😔👍🏻</h1>
              </div>
            </div>
          )}

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
