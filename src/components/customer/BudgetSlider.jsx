const BudgetSlider = ({ value, onChange }) => {
  const minValue = 50;
  const maxValue = 500;
  
  const handleChange = (e) => {
    onChange(Number(e.target.value));
  };

  const getBackgroundSize = () => {
    return { backgroundSize: `${((value - minValue) * 100) / (maxValue - minValue)}% 100%` };
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-mono text-cyber-primary mb-2">
          SET BUDGET
        </h2>
        <p className="text-gray-400">
          Adjust your spending range
        </p>
      </div>
      
      <div className="px-2">
        <div className="relative">
          {/* Slider track */}
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={value}
            onChange={handleChange}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            style={getBackgroundSize()}
          />
          
          {/* Custom slider thumb styling */}
          <style jsx>{`
            .slider::-webkit-slider-thumb {
              appearance: none;
              height: 20px;
              width: 20px;
              border-radius: 50%;
              background: #06b6d4;
              cursor: pointer;
              box-shadow: 0 0 10px rgba(6, 182, 212, 0.8);
              border: 2px solid #09090b;
            }
            
            .slider::-moz-range-thumb {
              height: 20px;
              width: 20px;
              border-radius: 50%;
              background: #06b6d4;
              cursor: pointer;
              box-shadow: 0 0 10px rgba(6, 182, 212, 0.8);
              border: 2px solid #09090b;
            }
            
            .slider {
              background: linear-gradient(to right, #06b6d4 0%, #06b6d4 ${((value - minValue) * 100) / (maxValue - minValue)}%, #374151 ${((value - minValue) * 100) / (maxValue - minValue)}%, #374151 100%);
            }
          `}</style>
        </div>
        
        {/* Value display */}
        <div className="flex justify-between mt-4 font-mono">
          <span className="text-gray-400">${minValue}</span>
          <span className="text-2xl text-cyber-primary font-bold">${value}</span>
          <span className="text-gray-400">${maxValue}</span>
        </div>
        
        {/* Labels */}
        <div className="flex justify-between mt-2 text-sm text-gray-500 font-mono">
          <span>MIN</span>
          <span>CURRENT</span>
          <span>MAX</span>
        </div>
      </div>
    </div>
  );
};

export default BudgetSlider;