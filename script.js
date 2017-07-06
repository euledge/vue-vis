
var dates = [];
dates[0] = new Date(2017, 6, 1).getTime() / 1000;
dates[1] = new Date(2017, 6, 2).getTime() / 1000;
dates[2] = new Date(2017, 6, 3).getTime() / 1000;
dates[3] = new Date(2017, 6, 4).getTime() / 1000;
dates[4] = new Date(2017, 6, 5).getTime() / 1000;
dates[5] = new Date(2017, 6, 6).getTime() / 1000;
dates[6] = new Date(2017, 6, 7).getTime() / 1000;

console.info(dates);

var moments = [];
dates.forEach(function(element) {
	moments.push(moment(element))
}, this);
console.info(moments);

var Vue = new Vue({
	el: '#app',
	data: {
		vueState: {
			data1: [
		  { id: 1, content: 'item 1', start: moments[0] },
			{ id: 2, content: 'item 2', start: moments[1] },
			{ id: 3, content: 'item 3', start: moments[2] },
			{ id: 4, content: 'item 4', start: moments[3], end: moments[4] },
			{ id: 5, content: 'item 5', start: moments[5] },
			{ id: 6, content: 'item 6', start: moments[6] }],

			data2: [{ id: 1, content: 'item 11', start: '2017-04-20' },
			{ id: 2, content: 'item 12', start: '2017-04-14' },
			{ id: 3, content: 'item 13', start: '2017-04-18' },
			{ id: 4, content: 'item 14', start: '2017-04-16', end: '2017-04-19' },
			{ id: 5, content: 'item 15', start: '2017-04-25' },
			{ id: 6, content: 'item 16', start: '2017-04-27' }]
		}
	}
})