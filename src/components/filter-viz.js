import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

let dummyData = [
	{ slug:'stink-fish', name: 'Stinky Fish', duration: 30, radius: 6, group: 0, },
	{ slug:'stink-fish', name: 'Stinky Fish 1', duration: 30, radius: 6, group: 1, },
	{ slug:'stink-fish', name: 'Stinky Fish 2', duration: 30, radius: 6, group: 0, },
	{ slug:'stink-fish', name: 'Stinky Fish 3', duration: 60, radius: 6, group: 3, },
	{ slug:'stink-fish', name: 'Stinky Fish 4', duration: 30, radius: 6, group: 2, },
	{ slug:'stink-fish', name: 'Stinky Fish 5', duration: 10, radius: 6, group: 4, },
	{ slug:'stink-fish', name: 'Stinky Fish 6', duration: 30, radius: 6, group: 4, },
	{ slug:'stink-fish', name: 'Stinky Fish 7', duration: 90, radius: 6, group: 5, },
	{ slug:'stink-fish', name: 'Stinky Fish 8', duration: 30, radius: 6, group: 2, },
	{ slug:'stink-fish', name: 'Stinky Fish 9', duration: 10, radius: 6, group: 0 }
];

export default class FilterViz extends Component {

	moveToCat(alpha){
		return function(d){

			var center = {x: window.innerWidth/4, y: window.innerHeight/2};

			if(this.mode === 'cat'){
				center.y = d.group/5 * window.innerHeight;
			}

			//generate y
			// var y = main.height * ((d.value / main.totals[d.group])*0.1) + main.height*0.5;

			d.x = d.x + (center.x - d.x) * 0.1 * alpha * 1.5;
			d.y = d.y + (center.y - d.y) * 0.1 * alpha * 1.9;

		}.bind(this);
	}

	collide(alpha){

		var quadtree = d3.geom.quadtree(this.data);
		return function(d) {
			var r = d.radius + this.radius.domain()[1] + 50,
			// var r = d.radius + this.radius.domain()[1],
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
					r = d.radius + quad.point.radius + (d.color !== quad.point.color) + 10;
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
			.each(this.moveToCat(e.alpha).bind(this))
			.attr('r', (d,i) => {
				return d.radius;
			})
			.attr('cx', function(d,i) { return d.x; })
			.attr('cy', function(d,i) { return d.y; });

		this.texts
			.attr('x', function(d,i) { return d.x; })
			.attr('y', function(d,i) { return d.y; });

	}

	toggle(){
		this.mode = 'cat';

		this.nodes = this.data.map((row) => {
			row.radius = this.radius(row.duration) * 0.5;
			return row;
		});

		this.circles
			.transition()
			.attr('r', (d,i) => {
				return r.radius;
			})
	}

	componentDidMount(){

		const container = ReactDOM.findDOMNode(this);
		const canvas = container.querySelector('.filter-viz__canvas');
		const svg = d3.select(canvas);
		const width = window.innerWidth / 2;
		const height = window.innerHeight;

		this.radius = d3.scale.sqrt().domain([0,90]).range([40, 100]);
		this.mode = 'none';

		//prepare data
		this.nodes = dummyData.map((row) => {
			row.radius = this.radius(row.duration);
			row.x = 0;
			row.y = 0;
			return row;
		});

		this.data = [ ...this.nodes ];

		//add mouse
		this.mouse = {
			name: 'mouse',
			radius: 10
		};
		this.data.push(this.mouse);

		this.force = d3.layout.force()
			.nodes(this.data)
			// .links(this.links)
			// .friction(0.9)
			.size([width, height])
			.on('tick', this.tick.bind(this))
			.start();

		this.circles = svg.selectAll('circle')
			.data(this.nodes)
			.enter()
			.append('circle')
			.attr('r', function(d){ return d.radius; })
			.style('fill', function(d){ return '#fff'; })
			.call(this.force.drag)
			// .on('mouseover', main.tooltip)
			// .on('mouseout', main.hideTooltip);
			.on('click', (d) => {
				this.props.history.push('/' + d.slug);
			})

		this.texts = svg.selectAll('text')
			.data(this.nodes)
			.enter()
			.append('text')
			.text((d) => { return d.name });

		window.addEventListener('mousemove', (evt) => {
			this.mouse.x = evt.clientX;
			this.mouse.y = evt.clientY;
			// this.force.alpha(0.1);
		});

	}

	componentWillUnmount(){
		this.force.stop();
	}

	render() {

		return (
			<div className="filter-viz__container">
				<div className="filter-viz__button" onClick={this.toggle.bind(this)} />
				<svg className="filter-viz__canvas" />
			</div>
		);
	}
}
