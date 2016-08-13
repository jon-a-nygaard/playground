var lines = [
  ['3xwhite', '6xyellow', '3xwhite'],
  ['2xwhite', '3xyellow', '2xgray', '3xyellow', '2xwhite'],
  ['1xwhite', '3xyellow', '1xgray', '2xwhite', '1xgray', '3xyellow', '1xwhite'],
  ['1xwhite', '2xblack', '1xgray', '1xwhite', '2xblack', '1xwhite', '1xgray', '2xblack', '1xwhite'],
['1xwhite', '2xblack', '1xgray', '1xwhite', '2xblack', '1xwhite', '1xgray', '2xblack', '1xwhite'],
  ['1xwhite', '3xyellow', '1xgray', '2xwhite', '1xgray', '3xyellow', '1xwhite'],
  ['1xwhite', '4xyellow', '2xgray', '4xyellow', '1xwhite'],
  ['1xwhite', '2xyellow', '1xblack', '4xyellow', '1xblack', '2xyellow', '1xwhite'],
  ['1xwhite', '3xyellow', '4xblack', '3xyellow', '1xwhite'],
  ['1xwhite', '1xblue', '8xyellow', '1xblue', '1xwhite'], 
  ['1xwhite', '1xyellow', '1xblue', '6xyellow', '1xblue', '1xyellow', '1xwhite'],
  ['1xwhite', '2xyellow', '6xblue', '2xyellow', '1xwhite'],
  ['1xwhite', '2xyellow', '6xblue', '2xyellow', '1xwhite'],
  ['1xwhite', '1xyellow', '8xblue', '1xyellow', '1xwhite'],
  ['1xwhite', '1xyellow', '8xblue', '1xyellow', '1xwhite'],
  ['1xwhite', '1xblack', '8xblue', '1xblack', '1xwhite'],
  ['2xblack', '1xwhite', '2xblack', '2xwhite', '2xblack', '1xwhite', '2xblack'],
  ['2xwhite', '3xblack', '2xwhite', '3xblack', '2xwhite']
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
