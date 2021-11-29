import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

const drawChart = (ref, data) => {
  const w = 300;
  const h = 400;

  d3.selectAll('svg').remove();

  const svg = d3.select(ref.current)
    .append('svg')
    .attr('width', w)
    .attr('height', h)
    .style('margin-left', 100);

  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * 70)
    .attr('y', (d) => h - 10 * d)
    .attr('width', 65)
    .attr('height', (d) => d * 10)
    .attr('fill', 'green');

  svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text((d) => d)
    .attr('x', (d, i) => i * 70)
    .attr('y', (d) => h - (10 * d) - 3);
};

const BarChart = ({ id, data }) => {
  const ref = useRef();
  useEffect(() => {
    drawChart(ref, data);
  }, [id]);
  return <div ref={ref} id={`#${id}`} />;
};

BarChart.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default BarChart;
