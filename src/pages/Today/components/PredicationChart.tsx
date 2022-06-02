import React from 'react';
import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts';
import { _s } from '@/utils';

const Tick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill={'#999390'} fontSize={_s(14)}>
        {payload.value}
      </text>
    </g>
  );
};

function PredicationChart(props: { data: { name: string; val: number }[] }): JSX.Element {
  const { data } = props;
  const chartConfig = {
    data,
    margin: { top: 10, bottom: 0, left: 0, right: 0 },
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart {...chartConfig}>
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={Tick} />
        <Area type="monotone" dataKey="val" stroke="#E9C939" fill="#E9C93940" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default PredicationChart;
