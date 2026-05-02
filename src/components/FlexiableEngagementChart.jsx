import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'; 
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

// Sample data for months 1-12
/*
const defaultData = [
  { month: 1, value: 20 }, { month: 2, value: 35 }, { month: 3, value: 45 },
  { month: 4, value: 60 }, { month: 5, value: 55 }, { month: 6, value: 80 },
  { month: 7, value: 95 }, { month: 8, value: 70 }, { month: 9, value: 85 },
  { month: 10, value: 110 }, { month: 11, value: 100 }, { month: 12, value: 120 }
];

*/

const FlexibleEngagementChart = ({ 
  // Text & Content Props
  title = "MONTHLY ENGAGEMENT GROWTH",
  growthValue = "+12.5%",
  monthData = [],  //<<-------------   Pass your array of {month: 1, value: 10} here
  
  // Style "Injections"
  width = "100%",               // <<<-------- inject dimentions
  height = "400px",
  backgroundColor = "#8b8b8b",
  barColor = "#b0b0b0",
  textColor = "#d1d1d1",
  fontFamily = "monospace"
}) => {
const [data, setData] = useState({ growthValue: 0, monthData: [] });


useEffect(() => {
    fetch('http://localhost:5000/dashBoardPanel_1/flexiableEngagementChart')
      .then(res => res.json())
      .then(json => setData(json))
      .then( () => console.log("FlexiableEngagementChart has got it from server !") )
      .catch(err => console.error("API Linkage Failed"));
  }, []);



  const containerStyle = {
    backgroundColor: backgroundColor,
    width: width,
    height: height,
    padding: '20px',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: fontFamily,
    color: textColor,
    boxSizing: 'border-box',
    overflow: 'hidden' // Keeps everything tidy if shrunk very small
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textTransform: 'uppercase', fontSize: '1.1rem', textAlign: 'center' }}>
        {title}
      </h2>
      
      <div style={{ fontSize: '1.5rem', margin: '10px 0', fontWeight: 'bold' }}>
       {data.growthValue > 0 ? `+${data.growthValue}%` : `${data.growthValue}%`}
      </div>


      {/* This container handles the resizing logic */}
      <div style={{ width: '100%', flexGrow: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.monthData} margin={{ top: 5, right: 5, left: -35, bottom: 5 }}>
            <CartesianGrid vertical={false} stroke={textColor} strokeOpacity={0.2} />
            <XAxis 
              dataKey="month" 
              interval={0} // Forces all months to show
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: textColor, fontSize: 10 }} 
            />
            <YAxis hide />
            <Bar 
              dataKey="value" 
              fill={barColor} 
              barSize={undefined} //<<<--------  Removing fixed size allows bars to scale/move closer
              radius={[2, 2, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default FlexibleEngagementChart;
