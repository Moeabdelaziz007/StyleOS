import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-lg">
        <p className="text-gray-300 font-medium">{label}</p>
        <p className="text-cyan-400 font-bold">{`${payload[0].value} scans`}</p>
      </div>
    );
  }
  return null;
};

const TrafficChart = ({ data }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <h2 className="text-xl font-bold text-cyan-400 mb-6">Hourly Traffic Pattern</h2>
      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 15, right: 15, left: 15, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="hour" 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
              interval={3}
            />
            <YAxis 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#22c55e' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficChart;