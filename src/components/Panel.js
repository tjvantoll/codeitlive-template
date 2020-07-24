import React from 'react';
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from '@progress/kendo-react-charts';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import 'hammerjs';

export function Panel({ region }) {
  const fakeData = [
    { one: 1, two: 2, three: 3, four: 4 },
    { one: 1, two: 2, three: 3, four: 4 },
    { one: 1, two: 2, three: 3, four: 4 },
    { one: 1, two: 2, three: 3, four: 4 },
  ]

  const chartCategories = [
    'Customer Rating', 'Staff Satisfaction Rating', 'Sales Rating', 'Cleanliness Rating'
  ];

  console.log("Why is this rendered three times?");

  return (
    <>
      <Chart>
        <ChartTitle text={region} />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={chartCategories} />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem type="line" data={[123, 276, 310, 212]} />
        </ChartSeries>
      </Chart>

      {/* Temporary padding. Delete this when you start */}
      <div style={{ marginBottom: '3rem'}}></div>

      <Grid
        data={fakeData}>
        <Column field="one" title="One" />
        <Column field="two" title="Two" />
        <Column field="three" title="Three" />
        <Column field="four" title="Four" />
      </Grid>
    </>
  )
}
