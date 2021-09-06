import React, { useState } from "react";

const TableRework = ({ tableData }) => {
  const unfiltredRows = tableData;
  const [filteredRows, setFilteredRows] = useState(0);

  const entryRows = tableData.filter((r) => r.type === "entry");
  const exitRows = tableData.filter((r) => r.type === "exit");

  const showEntries = () => {
    setFilteredRows(entryRows);
  };

  const showExits = () => {
    setFilteredRows(exitRows);
  };

  const showAll = () => {
    setFilteredRows(unfiltredRows);
  };

  const renderSome = () => {};

  const setDateTime = (datetime) => {
    const date = new Date(datetime);
    const hour = date.toLocaleTimeString();
    const day =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    return { day, hour };
  };

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
                showAll();
              }}
            >
              Mostrar Todos
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                showEntries();
              }}
            >
              Solo Entradas
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                showExits();
              }}
            >
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
            {filteredRows === 0 &&
              unfiltredRows.map((reg) => {
                return (
                  <tr key={reg.id}>
                    <th scope="row">{setDateTime(reg.time).hour}</th>
                    <td>{setDateTime(reg.time).day}</td>
                    <td>{reg.type === "entry" ? "Entrada" : "Salida"}</td>
                    <td>{reg.location}</td>
                  </tr>
                );
              })}
            {filteredRows !== 0 &&
              filteredRows.map((reg) => {
                return (
                  <tr key={reg.id}>
                    <th scope="row">{setDateTime(reg.time).hour}</th>
                    <td>{setDateTime(reg.time).day}</td>
                    <td>{reg.type === "entry" ? "Entrada" : "Salida"}</td>
                    <td>{reg.location}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {renderSome()}
      </div>
    </div>
  );
};

export default TableRework;
