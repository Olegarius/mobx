import React, { useContext } from 'react';
import { observer } from "mobx-react";
import Chart from "react-google-charts";
import { StoreContext } from '../../stores/MainStore';

const SearchResults = observer(() => {
  const store = useContext(StoreContext);
  const calculatedLetters = store.counters();

  const chartData = [
    ['letters count', 'calculations'],
    ['startWithCount', calculatedLetters.startWithCount],
    ['endWithCount', calculatedLetters.endWithCount],
    ['appearCount', calculatedLetters.appearCount],
    ['doubleAppearCount', calculatedLetters.doubleAppearCount],
  ];
  const chartOptions = {
    title: 'Letters Count',
    is3D: true
  };
  const isShowChart = calculatedLetters.startWithCount
    || calculatedLetters.endWithCount
    || calculatedLetters.appearCount
    || calculatedLetters.doubleAppearCount;

  return (
    <>
      {isShowChart ? (
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="PieChart"
          loader={<div>Loading Chart...</div>}
          data={chartData}
          options={chartOptions}
        />
      ) : (
        <div>No data</div>
      )}
    </>
  );
});

export default SearchResults;
