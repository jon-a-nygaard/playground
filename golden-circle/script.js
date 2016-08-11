let circles = [{
		name: 'Why',
		description: 'The single purpose, cause or belief that serves as the unifying, driving and  inspiring force for any individual or organization.',
		color: 'white'
	}, {
		name: 'How',
		description: 'Written as verbs as they are actions to be performed and not just inactionable values to be admired, e.g. Do the right thing vs. integrity.',
		color: 'black'
	}, {
		name: 'What',
		description: 'Everything tangible an organization says or does. Everything outsiders can see, hear or experience, e.g. products, services, marketing.',
		color: 'gold'
	}],
	getArrowPath = (x, y, length) => {
		let width = 5,
				side = 10,
				y2 = y + length;
		return ['M', x, y, 'L', x, y2, 'L', x - width, y2 - side, 'M', x, y2, 'L', x + width, y2 - side]
	};
Highcharts.chart('container', {
	chart: {
		type: 'pie',
		plotBorderWidth: 1
	},
	plotOptions: {
		pie: {
			borderColor: 'red',
			borderWidth: 0,
			dataLabels: {
				format: '{point.name}',
			},
			colors: ['blue', 'black', 'gold']
		}
	},
	tooltip: {
		formatter: function() {
			return '<b>' + this.point.name + '<b><br>' + this.point.description;
		},
		style: {
			width: '250px'
		}
	},
	title: {
		text: 'The Golden Circle',
		useHTML: true,
		style: {
			fontWeight: 'bold',
			borderBottom: '1px solid'
		}
	}
}, (chart) => {
	let gridColumns = chart.plotWidth / 4,
			gridRows = chart.plotHeight / 2,
			ringSize = (Math.min(gridColumns, gridRows) * 2) / 3,
			series = circles.map((c, i) => {
		let d = i === 0 ? -(ringSize / 2) + 1 : -(ringSize / 4);
		return {
			center: ['75%', '50%'],
			data: [{
				color: c.color,
				y: 1,
				name: c.name,
				description: c.description
			}],
			size: ringSize * (i + 1),
			innerSize: ringSize * i,
			dataLabels: {
				distance: d
			}
		}
	});
	series.forEach(s => chart.addSeries(s, false));
	console.log(gridColumns / 2)
	var start = (gridColumns / 2);
	chart.renderer.path(getArrowPath(start, 0, 200))
		.attr({
			'stroke-width': 2,
			stroke: 'red'
		})
		.translate(25, 150)
		.add();
	chart.redraw();
});