import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-lg">
        <p className="text-gray-300 font-medium">{label}</p>
        <p className="text-cyan-400 font-bold">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const PopularStylesChart = ({ data }) => {
  const COLORS = ['#06b6d4', '#22c55e', '#8b5cf6', '#f59e0b'];

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <h2 className="text-xl font-bold text-cyan-400 mb-6">Popular Styles Distribution</h2>
      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 15, right: 15, left: 15, bottom: 30 }}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="name" 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
            />
            <YAxis 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PopularStylesChart;