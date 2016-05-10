import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';
import data from '../../data/data.js';

export default class FilterViz extends Component {

	moveToCat(alpha){
		return function(d){

			var center = {x: window.innerWidth/4, y: window.innerHeight/2};
			const columns = 2;
			const rows = 3

			if(this.mode === 'cat'){
				center.x = (d.category % 2)/2 * window.innerWidth;
				center.y = (d.category - (d.category % 2))/3 * (window.innerHeight - 120);
			}

			if(this.mode === 'time'){
				center.y = this.timeScale(d.avgDuration);
			}

			if(this.mode === 'persons'){
				center.y = this.personScale(d.persons);
			}

			if(this.mode === 'comfort'){

				var p1 = {
					x: window.innerWidth/4,
					y: window.innerHeight*0.25
				};
				var p2 = {
					x: (window.innerWidth/2) * 0.1,
					y: window.innerHeight*0.8
				};
				var p3 = {
					x: (window.innerWidth/2) * 0.8,
					y: window.innerHeight*0.8
				};

				switch(d.comfortZone){
					case 1: center = p1; break;
					case 2: center = p2; break;
					case 3: center = p3; break;
				}

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
			.attr('cy', function(d,i) { return d.y; })
			.style('fill', (d) => {
				return this.props.params.tool === d.slug ? '#FFFFFF' : '#FE9F80';
			});

		this.texts
			.attr('x', function(d,i) { return d.x; })
			.attr('y', function(d,i) { return d.y; })
			.style('fill', (d) => {
				return this.props.params.tool === d.slug ? '#000' : '#FFF';
			});

	}

	toggle(mode){
		this.mode = mode;
		let scaling = 1;
		let alpha = 0.1;

		if(this.mode === 'cat' || this.mode === 'time' || this.mode === 'persons' || this.mode === 'comfort'){
			scaling = 0.5;
		}

		if(this.mode === 'persons'){
			alpha = 0.2;
		}

		this.nodes = this.data.map((row) => {

			row.radius = this.radius(row.avgDuration) * scaling;

			if(this.mode === 'persons'){
				row.radius = this.radius2(row.persons);
			}

			return row;
		});

		this.circles
			.transition()
			.attr('r', (d,i) => {
				return d.radius;
			});

		this.force.alpha(alpha);

		//legends
		document.querySelector('.filter-viz__legend').style.opacity = 0;
		if(this.mode === 'time'){
			document.querySelector('.filter-viz__legend').style.opacity = 1;
		}
		document.querySelector('.filter-viz__comfort-zone').style.opacity = 0;
		if(this.mode === 'comfort'){
			document.querySelector('.filter-viz__comfort-zone').style.opacity = 1;
		}


	}

	componentDidMount(){

		const container = ReactDOM.findDOMNode(this);
		const canvas = container.querySelector('.filter-viz__canvas');
		const svg = d3.select(canvas);
		const width = window.innerWidth / 2;
		const height = window.innerHeight;

		this.radius = d3.scale.sqrt().domain([15,45]).range([40, 100]);
		this.radius2 = d3.scale.sqrt().domain([5,15]).range([40, 80]);
		this.timeScale = d3.scale.linear().domain([15,45]).range([0, window.innerHeight])
		this.personScale = d3.scale.linear().domain([5,15]).range([50, window.innerHeight])
		this.mode = 'none';

		//prepare data
		this.nodes = data.map((row) => {
			row.avgDuration = row.time[0]/2 + row.time[1]/2;
			row.radius = this.radius(row.avgDuration);
			row.x = 0;
			row.y = 0;
			return row;
		});

		var extendDuration = d3.extent(this.nodes, (d) => { return d.avgDuration; });
		console.log(extendDuration)

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
				this.force.resume();
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

		window.addEventListener('resize', (evt) => {
			this.force.size([window.innerWidth/2, window.innerHeight]).resume();
		});

	}

	componentWillUnmount(){
		this.force.stop();
	}

	render() {

		return (
			<div className="filter-viz__container">

				<div className="filter-viz__button" onClick={this.toggle.bind(this, 'none')}><div>no filter</div></div>
				<div className="filter-viz__button filter-viz__button--2" onClick={this.toggle.bind(this, 'cat')}><div>categories</div></div>
				<div className="filter-viz__button filter-viz__button--3" onClick={this.toggle.bind(this, 'time')}><div>duration</div></div>
				<div className="filter-viz__button filter-viz__button--4" onClick={this.toggle.bind(this, 'comfort')}><div>comfort zone</div></div>

				<div className="filter-viz__legend">
					<div className="filter-viz__legend__start">15min</div>
					<div className="filter-viz__legend__end">45min</div>
					<div className="filter-viz__legend__line"></div>
				</div>

				<div className="filter-viz__comfort-zone">
					<div className="filter-viz__comfort-zone--1">low</div>
					<div className="filter-viz__comfort-zone--2">medium</div>
					<div className="filter-viz__comfort-zone--3">high</div>
				</div>

				<svg className="filter-viz__canvas" />
			</div>
		);
	}
}
