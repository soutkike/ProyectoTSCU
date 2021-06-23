import React from "react";
import { Doughnut } from "react-chartjs-2";

const Dona = ({ data }) => {
  
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Utilizado", "Libre"],
          datasets: [
            {
              label: "Aforo",
              data: [data, 100 - data],
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
              hoverOffset: 4,
            },
          ],
        }}
        width={"150"}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};
export default Dona;
