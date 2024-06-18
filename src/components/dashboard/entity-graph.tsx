import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface EntityGraphProps {
  data: {
    name: string;
    total: number;
  }[];
}

const EntityGraph = ({ data }: EntityGraphProps) => {
  return (
    <ResponsiveContainer width="100%" height={575}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <CartesianGrid color="" strokeDasharray="3 3" />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EntityGraph;
