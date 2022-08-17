import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Malha A',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Malha B',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Malha C',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Malha D',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Malha E',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Malha F',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#ca3e47" fill="#ca3e47" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
