import React from "react";
import { Doughnut } from "react-chartjs-2";

const Dona = ({ data }) => {
  let colorUtilizado = "#00B8A9";
  if (data > 100) {
    data = 100;
  }
  if (data < 50) {
    colorUtilizado = "#00B8A9";
  }
  if (data > 50 && data < 75) {
    colorUtilizado = "#F9ED69";
  }
  if (data > 75 && data < 100) {
    colorUtilizado = "#EA5455";
  }
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Utilizado", "Libre"],
          datasets: [
            {
              label: "Aforo",
              data: [data, 100 - data],
              backgroundColor: [colorUtilizado, "#EFEFEF"],
              hoverOffset: 4,
            },
          ],
        }}
        width={"150"}
        options={
          ({ maintainAspectRatio: false }, { animation: { duration: 0 } })
        }
      />
    </div>
  );
};
export default Dona;
