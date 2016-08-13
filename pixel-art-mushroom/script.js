var lines = [
['6xgray', '4xorange', '6xgray'],
['5xgray', '6xorange', '5xgray'],
['4xgray', '8xorange', '4xgray'],
['3xgray', '10xorange', '3xgray'],
['2xgray', '1xorange', '2xblack', '6xorange', '2xblack', '1xorange', '2xgray'],
['1xgray', '3xorange', '1xwhite', '1xblack', '4xorange', '1xblack', '1xwhite', '3xorange', '1xgray'],
['1xgray', '3xorange', '1xwhite', '6xblack', '1xwhite', '3xorange', '1xgray'],
['4xorange', '1xwhite', '1xblack', '1xwhite', '2xorange', '1xwhite', '1xblack', '1xwhite', '4xorange'],
['4xorange', '3xwhite', '2xorange', '3xwhite', '4xorange'],
['16xorange'],
['1xgray', '4xorange', '6xwhite', '4xorange', '1xgray'],
['4xgray', '8xwhite', '4xgray'],
['2xgray', '2xblack', '8xwhite', '4xgray'],
['1xgray', '5xblack', '5xwhite', '2xblack', '3xgray'],
['1xgray', '6xblack', '3xwhite', '3xblack', '3xgray'],
['2xgray', '5xblack', '2xgray', '3xblack', '4xgray'],
].reverse();
let data = lines.reduce((data, line, i) => {
  let pixels = line.reduce((pixels, e) => {
    let [n, c] = e.split('x');
    let additional = Array.from({
      length: n
    }, (v, k) => ({
      x: k + pixels.length,
      y: i,
      color: c
    }));
    return pixels.concat(additional)
  }, [])
  return data.concat(pixels);
}, []);

Highcharts.chart('container', {
  chart: {
    type: 'heatmap',
    
  },
  title: {
  	text: 'Highcharts Pixel Art'
  },
  plotOptions: {
  	heatmap: {
    	borderColor: 'black',
      borderWidth: 1
    }
  },
  legend: {
  	enabled: false
  },
  tooltip: {
  	enabled: false
  },
  xAxis: {
    labels: {
      enabled: false
    },
    lineWidth: 0,
    tickWidth: 0
  },
  yAxis: {
  	title: null,
    labels: {
      enabled: false
    }
  },
  series: [{
    data: data
  }]
});
