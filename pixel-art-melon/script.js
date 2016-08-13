var lines = [
  ['15xwhite'],
  ['10xwhite', '1xolive', '1xgreen', '3xwhite'],
  ['9xwhite', '1xred', '1xpink', '1xolive', '1xdarkgreen', '2xwhite'],
  ['8xwhite', '2xred', '2xpink', '1xolive', '1xdarkgreen', '1xwhite'],
  ['7xwhite', '2xred', '1xblack', '1xred', '1xpink', '1xolive', '1xdarkgreen', '1xwhite'],
  ['6xwhite', '5xred', '1xpink', '1xolive', '1xdarkgreen', '1xwhite'],
  ['5xwhite', '3xred', '1xblack', '2xred', '1xpink', '1xolive', '1xdarkgreen', '1xwhite'],
  ['4xwhite', '7xred', '1xpink', '1xolive', '1xdarkgreen', '1xwhite'],
  ['3xwhite', '3xred', '1xblack', '3xred', '2xpink', '1xolive', '1xdarkgreen', '1xwhite'],
  ['2xwhite', '2xred', '1xblack', '5xred', '1xpink', '1xolive', '1xdarkgreen', '2xwhite'],
  ['1xwhite', '1xolive', '2xpink', '4xred', '2xpink', '1xolive', '2xdarkgreen', '2xwhite'],
  ['1xwhite', '1xdarkgreen', '1xolive', '6xpink', '1xolive', '2xdarkgreen', '3xwhite'],
  ['2xwhite', '1xdarkgreen', '6xolive', '2xdarkgreen', '4xwhite'],
  ['4xwhite', '5xdarkgreen', '6xwhite'],
  ['15xwhite']
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
