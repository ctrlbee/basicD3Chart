var temps = [89, 78, 48, 30, 50, 48];
var temps2 = [101, 130, 156, 254, 95, 95, 165, 65];
var temps3 = [38,42,54]

d3.json('weather.json', function(error, data){
    console.log(data);
    var tempsAndConds = []; //[[40, "sunny"], [88, "partly cloudy"]]
    var forecast = data.query.results.channel.item.forecast;
    for (var i = 0; i < forecast.length; i++) {
        var tuple = [parseInt(forecast[i].high), forecast[i].text]
        tempsAndConds.push(tuple);
    }
    console.log(tempsAndConds);
    update(tempsAndConds);
});


var update = function (data) {

var chart = d3.selectAll('div').data(data);

    chart.enter().append('div')
                .attr('class', 'bar')
                .style('width', function(d, i){return d[0] +"px";})
                .text(function(d, i){return d[1];});
    chart.attr('class', 'bar')
                .style('width', function(d, i){return d[0] +"px";})
                .text(function(d, i){return d[1];});

    chart.exit().remove();
};


// $('.bar').click(function() {
//     update(temps3);
// });


// d3.csv('data.csv', function (csv) {
//     // Sort the data
//     csv.sort(function (a, b) {
//         return b.population - a.population;
//     });

//     // Create the marks with an initial position
//     svg.selectAll('circle').data(csv).enter()
//         .append('circle')
//         .attr('cx', function (d) {return x(0);})
//         .attr('cy', function (d) {return y(0);})
//         .attr ('r', function (d) {return r(0);})

//         .style('fill', function(d) { return c(d.continent);})
//         .style('opacity', function(d) { return o(+d.GDPcap);})
//         .append('title')
//         .text(function(d) {return d.country;})
// });





