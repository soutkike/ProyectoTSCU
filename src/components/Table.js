import React, { useState } from "react";

class Table extends React.Component {
  state = {};

  setDateTime = (datetime) => {
    const date = new Date(datetime);
    const hour = date.toLocaleTimeString();
    const day =
      date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    return { day, hour };
  };

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="col-9">
        <div className="w-75 mx-auto">
          <h1>Registro:</h1>
          <div className="">
            <div className="mt-4  mb-4 d-flex justify-content-around">
              <h3>Filtros:</h3>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  console.log("click");
                }}
              >
                Solo Entradas
              </button>
              <button type="button" className="btn btn-primary btn-sm">
                Solo Salidas
              </button>
            </div>
          </div>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Hora</th>
                <th scope="col">Fecha</th>
                <th scope="col">Tipo</th>
                <th scope="col">Locación</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((reg) => {
                return (
                  <tr key={reg.id}>
                    <th scope="row">{this.setDateTime(reg.time).hour}</th>
                    <td>{this.setDateTime(reg.time).day}</td>
                    <td>{reg.type === "entry" ? "Entrada" : "Salida"}</td>
                    <td>{reg.location}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
