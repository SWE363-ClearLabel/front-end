
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



const UserMapDistributor = ({ ksaFeature, cleanData }) => {
  const layers = [
    // LAYER 1: THE LAND (The Floor)
    new GeoJsonLayer({
      id: 'ksa-layer',
      data: ksaFeature,
      filled: true,
      getFillColor: [45, 45, 45], 
      stroked: true,
      getLineColor: [0, 255, 255], 
      lineWidthMinPixels: 2,
    }),

    // LAYER 2: THE DENSITY (The Bars)
    new HexagonLayer({
      id: 'hex-layer',
      data: cleanData,
      getPosition: d => d,
      radius: 8000,
      elevationScale: 200,
      extruded: true,
      colorRange: [
        [40, 40, 40], [0, 150, 255], [255, 50, 50]
      ],
    })
  ];

  return (
    <DeckGL
      initialViewState={{ longitude: 45, latitude: 24, zoom: 4.5, pitch: 45 }}
      controller={true}
      layers={layers}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    />
  );
};

export default UserMapDistributor;