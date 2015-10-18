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






