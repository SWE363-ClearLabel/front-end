import React, { useMemo } from 'react';
import * as topojson from 'topojson-client';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import worldData from './world.json'; 


 const generateSaudiUserData = (count = 1000) => {
  const points = [];
  for (let i = 0; i < count; i++) {
    // Saudi Lat/Long bounds approx:
    // Lat: 16 to 32, Long: 34 to 55
    const lat = 16 + Math.random() * (32 - 16);
    const lng = 34 + Math.random() * (55 - 34);
    points.push([lng, lat]);
  }
  return points;
};
import UserMapDistributor from './UserMapDistributor' ; 
// Note: Ensure UserMapDistributor and generateSaudiUserData are available/imported
const DashboardPanel_3 = ({ 
  title = "User Density Distribution",
  // INJECTION PARAMETERS
  backgroundColor = "#554f4fff", 
  textColor = "#FFFFFF",
  fontFamily = "monospace"
}) => {
  
  const ksaPolygon = useMemo(() => {
    const geojson = topojson.feature(worldData, worldData.objects.countries);
    return geojson.features.find(f => String(f.id) === "682");
  }, []);

  const userData1K = useMemo(() => generateSaudiUserData(), []);

  const cleanData = useMemo(() => {
    if (!ksaPolygon) return [];
    return userData1K.filter(point => {
      return booleanPointInPolygon(point, ksaPolygon);
    });
  }, [ksaPolygon, userData1K]);

  return (
    <div style={{
      backgroundColor: backgroundColor, // INJECTED
      padding: '2rem',
      borderRadius: '35px',
      width: '100%', 
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      boxSizing: 'border-box',
      fontFamily: fontFamily // INJECTED
    }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ 
          color: textColor,          // INJECTED
          margin: 0, 
          fontSize: '1rem', 
          fontFamily: fontFamily     // INJECTED
        }}>
          {title}
        </h2>
        <div style={{ 
          height: '1px', 
          backgroundColor: textColor, // INJECTED
          opacity: 0.2, 
          marginTop: '10px' 
        }} />
      </div>

      <div style={{ flexGrow: 1, position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
        <UserMapDistributor 
          ksaFeature={{ type: "FeatureCollection", features: [ksaPolygon] }} 
          cleanData={cleanData} 
        />
      </div>
    </div>
  );
};

export default DashboardPanel_3;
