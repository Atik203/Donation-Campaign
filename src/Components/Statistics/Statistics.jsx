import { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from "recharts";

const data = [
  { name: "Group A", value: 40 },
  { name: "Group B", value: 60 },
];

const COLORS = ["#FF444A", "#00C49F"];

export default class Statistics extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-in-responsive-container-qyv6t";

  calculatePercentage = (value) => {
    const total = data.reduce((acc, entry) => acc + entry.value, 0);
    return ((value / total) * 100).toFixed(2) + "%";
  };

  render() {
    return (
      <div className="mt-5">
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={data}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  value={`${this.calculatePercentage(data[0].value)}`}
                  position="Center"
                  fill="white"
                />
                <Label
                  value={`${this.calculatePercentage(data[1].value)}`}
                  position="Center"
                  fill="white"
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8">
          <p className="text-center text-lg font-normal">
            Your Donation{" "}
            <hr className="bg-[#00C49F] h-3 w-24 md:inline-block ml-3"></hr>{" "}
            Total Donation{" "}
            <hr className="bg-[#FF444A] h-3 w-24 md:inline-block ml-3"></hr>
          </p>
        </div>
      </div>
    );
  }
}
