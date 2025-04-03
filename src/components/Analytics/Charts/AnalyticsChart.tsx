import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnalyticsChartProps, ChartData } from '@/types/analytics';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import CustomTooltip from '../../Tooltip/Tooltip';

export function AnalyticsChart({
  title,
  data,
  type,
  dataKey,
  nameKey,
  colors
}: AnalyticsChartProps) {
  const renderChart = () => {
    if (type === 'bar') {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey={nameKey}
              tick={{ fill: 'currentColor' }}
            />
            <YAxis
              tick={{ fill: 'currentColor' }}
            />
            <Tooltip
              content={<CustomTooltip />}
            />
            <Bar dataKey={dataKey}>
              {data.map((entry: ChartData) => (
                <Cell
                key={`${String(entry[nameKey])}-${entry._count[nameKey]}`}
                fill={colors[entry[nameKey] as keyof typeof colors]}
              />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      );
    }

    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({name, percent}) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {data.map((entry: ChartData) => (
              <Cell
                key={`${String(entry[nameKey])}-${entry._count[nameKey]}`}
                fill={colors[entry[nameKey] as keyof typeof colors]}
              />
            ))}
          </Pie>
          <Tooltip
            content={<CustomTooltip />}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {renderChart()}
      </CardContent>
    </Card>
  );
}
