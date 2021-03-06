import React, { useCallback } from 'react';
import { observer } from "mobx-react";
import Chart from "react-google-charts";

const SearchResults = observer(({ store }) => {
  const letter = store.letter;
  const letterCounts = useCallback((store) => ({
    startWithCount: store.startWithCount(letter),
    endWithCount: store.endWithCount(letter),
    appearCount: store.appearCount(letter),
    doubleAppearCount: store.doubleAppearCount(letter)
  }), [letter]);
  const calculatedLetters = letterCounts(store);

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

  return (
    <Chart
      width={'100%'}
      height={'500px'}
      chartType="PieChart"
      loader={<div>Loading Chart...</div>}
      data={chartData}
      options={chartOptions}
    />
  );
});

export default SearchResults;
