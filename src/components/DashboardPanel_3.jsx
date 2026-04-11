
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';

import worldData from '../src/world.json'; 
import * as topojson from 'topojson-client';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from '@deck.gl/layers';
import { HexagonLayer } from '@deck.gl/aggregation-layers';
// Import your local map file
import  { useMemo } from 'react'; // 1. Added useMemo import
const DashboardPanel_3 = ({ title = "User Density Distribution" }) => {
  
  // 1. Extract the KSA Polygon once
  const ksaPolygon = useMemo(() => {
    const geojson = topojson.feature(worldData, worldData.objects.countries);
    return geojson.features.find(f => String(f.id) === "682");
  }, []);
  const userData1K = generateSaudiUserData() ;
  // 2. Filter the dots so ONLY points inside KSA remain
  const cleanData = useMemo(() => {
    if (!ksaPolygon) return [];
    return userData1K.filter(point => {
      // Turf expects [lng, lat]
      return booleanPointInPolygon(point, ksaPolygon);
    });
  }, [ksaPolygon]);

  return (
    <div style={{
      backgroundColor: "#554f4fff",
      padding: '2rem',
      borderRadius: '35px',
      width: '100%', 
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      boxSizing: 'border-box'
    }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#fff', margin: 0, fontSize: '1rem', fontFamily: 'monospace' }}>{title}</h2>
        <div style={{ height: '1px', backgroundColor: '#fff', opacity: 0.2, marginTop: '10px' }} />
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