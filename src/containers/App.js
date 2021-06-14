import React from "react";

import Header from "../components/Header";
import Table from "../components/Table";
import SideInfo from "../containers/SideInfo";
import Card from "../components/Card";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row mt-5">
        <Table />
        <SideInfo>
          <Card display="100" description="Entradas" />
          <Card display="100" description="Entradas" />
          <Card display="100" description="Entradas" />
          <Card display="100" description="Entradas" />
        </SideInfo>
      </div>
    </div>
  );
}

export default App;
