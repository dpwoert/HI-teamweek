import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

let dummyData = [
	{ name: 'Stinky Fish', duration: 30, radius: 6 },
	{ name: 'Stinky Fish 1', duration: 30, radius: 6 },
	{ name: 'Stinky Fish 2', duration: 30, radius: 6 },
	{ name: 'Stinky Fish 3', duration: 60, radius: 6 },
	{ name: 'Stinky Fish 4', duration: 30, radius: 6 },
	{ name: 'Stinky Fish 5', duration: 10, radius: 6 },
	{ name: 'Stinky Fish 6', duration: 30, radius: 6 },
	{ name: 'Stinky Fish 7', duration: 90, radius: 6 },
	{ name: 'Stinky Fish 8', duration: 30, radius: 6 },
	{ name: 'Stinky Fish 9', duration: 10, radius: 6 }
];

export default class FilterViz extends Component {

	collide(alpha){

		var quadtree = d3.geom.quadtree(this.data);
		return function(d) {
			// var r = d.radius + radius.domain()[1] + padding,
			var r = d.radius + this.radius.domain()[1],
			nx1 = d.x - r,
			nx2 = d.x + r,
			ny1 = d.y - r,
			ny2 = d.y + r;
			quadtree.visit(function(quad, x1, y1, x2, y2) {
				if (quad.point && (quad.point !== d)) {
					var x = d.x - quad.point.x,
					y = d.y - quad.point.y,
					l = Math.sqrt(x * x + y * y),
					// r = d.radius + quad.point.radius + (d.color !== quad.point.color) * padding;
					r = d.radius + quad.point.radius + (d.color !== quad.point.color);
					if (l < r) {
						l = (l - r) / l * alpha;
						d.x -= x *= l;
						d.y -= y *= l;
						quad.point.x += x;
						quad.point.y += y;
					}
				}
				return x1 > nx2
					|| x2 < nx1
					|| y1 > ny2
					|| y2 < ny1;
			});
		}
	}

	tick(e){

		this.circles
			.each(this.collide(e.alpha).bind(this))
			// .each(this.moveToCat(e.alpha))
			.attr('cx', function(d,i) { return d.x; })
			.attr('cy', function(d,i) { return d.y; });

	}

	componentDidMount(){

		const container = ReactDOM.findDOMNode(this);
		const canvas = container.querySelector('.filter-viz__canvas');
		const svg = d3.select(canvas);
		const width = window.innerWidth / 2;
		const height = window.innerHeight;

		this.radius = d3.scale.sqrt().domain([0,90]).range([0, 90]);

		//prepare data
		this.data = dummyData.map((row) => {
			row.radius = this.radius(row.duration);
			row.x = 0;
			row.y = 0;
			return row;
		});

		this.force = d3.layout.force()
			.nodes(this.data)
			// .links(this.links)
			.friction(0.9)
			.size([width, height])
			.on('tick', this.tick.bind(this))
			.start();

		this.circles = svg.selectAll('circle')
			.data(this.force.nodes())
			.enter()
			.append('circle')
			.attr('r', function(d){ return d.radius; })
			.style('fill', function(d){ return '#fff'; })
			// .call(this.force.drag)
			// .on('mouseover', main.tooltip)
			// .on('mouseout', main.hideTooltip);

	}

	componentWillUnmount(){
		this.force.stop();
	}

	render() {

		return (
			<div className="filter-viz__container">
				<svg className="filter-viz__canvas" />
			</div>
		);
	}
}
