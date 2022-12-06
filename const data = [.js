const data = [
    {name: 'Shao-Kui', value:6},
    {name:'Wen-Yang', value:6}, {name:'Cai Yun', value:16}, {name:'Liang Yuan', value: 10}, 
    {name:'Yuan-Chen', value:6}, {name:'Rui-Long', value:10}, {name:'Dong Xin', value:12}, 
    {name:'He Yu', value:20}, {name:'Xiang-Li', value:12}, {name:'Godness', value:20}, 
    {name:'Wei-Yu', value:15}, {name:'Chen Zheng', value:14}, 
    {name:'Yu Peng', value:15}, {name:'Li Jian', value:18}
  ]; 
  
  const svg = d3.select('#mainsvg');
  const width = +svg.attr('width');
  const height = +svg.attr('height');
  const margin = {top: 60, right: 30, bottom: 60, left: 150};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  
  const g = svg.append('g').attr('id', 'maingroup')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, datum=>datum.value)])
    .range([0, innerWidth]); 
  
  const yScale = d3.scaleBand()
    .domain(data.map(datum => datum.name))
    .range([0, innerHeight])
    .padding(0.1);
  
  data.forEach(datum => {
    g.append('rect')
      .attr('width', xScale(datum.value))
      .attr('height', yScale.bandwidth())
      .attr('y', yScale(datum.name))
      .attr('fill', 'green')
      .attr('opacity', '0.8')
  });
  
  // the following four lines of code is the simplest pattern of adding axis; 
  const yAxis = d3.axisLeft(yScale);
  const xAxis = d3.axisBottom(xScale);
  g.append('g').call(yAxis);
  g.append('g').call(xAxis).attr('transform', `translate(0, ${innerHeight})`);
  
  d3.selectAll('.tick text').attr('font-size', '2em');
  
  g.append('text')
    .text('Hidden artist name and number of works')
    .attr('font-size', '3em')
    .attr('color','white')
    .attr('x', innerWidth / 2 - 200)
    .attr('x', color)
    .attr('y', -10)