'use strict';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColDef, ICellRendererParams, ModuleRegistry } from '@ag-grid-community/core';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from '@ag-grid-community/react';
import React, { useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import DaysFrostRenderer, {
  ImageCellRendererParams,
} from './daysFrostRenderer';
import './styles.css';

// Register the required feature modules with the Grid
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const createImageArr = (imageMultiplier: number, image: string) => {
  const arr = [];
  for (let i = 0; i < imageMultiplier; i++) {
    const imgSrc = 'https://www.ag-grid.com/example-assets/weather/' + image;
    arr.push(imgSrc);
  }
  return arr;
}

const DeltaRenderer = (params: ICellRendererParams) => {
  const imgSrc = params.value > 15 ? 'https://www.ag-grid.com/example-assets/weather/fire-plus.png' : 'https://www.ag-grid.com/example-assets/weather/fire-minus.png';
  return (
    <span>
      <img src={imgSrc} />
        {params.value}
    </span>
  )
};

const SunshineRenderer = (params: ImageCellRendererParams) => {
  const daysSunshine = params.value / 24;
  const sunshineImage = createImageArr(daysSunshine, params.rendererImage);
  return (
    <span>
        {sunshineImage.map((image, index) => (
          <img key={index} src={image} />)
    )}
    </span>
  )
};

const RainRenderer = (params: ImageCellRendererParams) => {
  const rainPerTenMm = params.value / 10;
  const rainImg = createImageArr(rainPerTenMm, params.rendererImage);
  return (
    <span>
        {rainImg.map((image, index) => (
          <img key={index} src={image} />)
    )}
    </span>
  )
};

const GridExample = () => {
  const [rowData, setRowData] = useState<any[]>();
  const [frostPrefix, setFrostPrefix] = useState(false);

  const columnDefs = useMemo<ColDef[]>(
    () => [
      {
        headerName: 'Month',
        field: 'Month',
        width: 75,
      },
      {
        headerName: 'Max Temp',
        field: 'Max temp (C)',
        width: 120,
        cellRenderer: DeltaRenderer,
      },
      {
        headerName: 'Min Temp',
        field: 'Min temp (C)',
        width: 120,
        cellRenderer: DeltaRenderer,
      },
      {
        headerName: 'Frost',
        field: 'Days of air frost (days)',
        width: 233,
        cellRenderer: DaysFrostRenderer,
        cellRendererParams: {
          rendererImage: 'frost.png',
          showPrefix: frostPrefix,
        },
      },
      {
        headerName: 'Sunshine',
        field: 'Sunshine (hours)',
        width: 190,
        cellRenderer: SunshineRenderer,
        cellRendererParams: { rendererImage: 'sun.png' },
      },
      {
        headerName: 'Rainfall',
        field: 'Rainfall (mm)',
        width: 180,
        cellRenderer: RainRenderer,
        cellRendererParams: { rendererImage: 'rain.png' },
      },
    ],
    [frostPrefix]
  );

  const gridRef = useRef<AgGridReact>(null);

  const onGridReady = () => {
    fetch('https://www.ag-grid.com/example-assets/weather-se-england.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  };

  /**
   * Updates the Frost column - adjusts the value which in turn will demonstrate the Component refresh functionality
   * After a data update, cellRenderer Components.refresh method will be called to re-render the altered Cells
   */
  const frostierYear = () => {
    const extraDaysFrost = Math.floor(Math.random() * 2) + 1;

    // iterate over the rows and make each "days of air frost"
    gridRef.current!.api.forEachNode((rowNode) => {
      rowNode.setDataValue(
        'Days of air frost (days)',
        rowNode.data['Days of air frost (days)'] + extraDaysFrost
      );
    });
  };

  const defaultColDef = useMemo(
    () => ({
      editable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
    }),
    []
  );

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="example-wrapper">
        <div style={{ marginBottom: '5px' }}>
          <button onClick={frostierYear}>Frostier Year</button>
          <button
            style={{ marginLeft: '5px' }}
            onClick={() => setFrostPrefix((oldFrostPrefix) => !oldFrostPrefix)}
          >
            Toggle Frost Prefix
          </button>
        </div>

        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className={
            "ag-theme-quartz"
          }
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            reactiveCustomComponents
            onGridReady={onGridReady}
          />
        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<GridExample />);
