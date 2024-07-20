


async function draw () {
    const dataset = await d3.json('data.json');
    console.log(dataset)

    const xAccessor = (d) => d.currently.humidity;
    const yAccessor = (d) => d.currently.apparentTemperature;

    //Dimensions
    let dimensions = {
        width: 800,
        height: 800,
        margin: {
            top: 50,
            bottom: 50,
            left: 50,
            right: 50
        }
    }
    //Draw Image
    const svg = d3.select('#chart')
        .append('svg')
        .attr('width', dimensions.width)
        .attr('height', dimensions.height)

    const container = svg.append('g')
        .attr('transform',`translate(${dimensions.margin.left}, ${dimensions.margin.top})`)


    //Draw Circle

    container.selectAll('circle')
        .data(dataset)
        .join('circle')
        .attr('cx', xAccessor)
        .attr('cy', yAccessor)
        .attr('r', 5)
        .attr('fill', 'red')
};


draw();



// Cors Enabled CMD
// open -na "Google Chrome" --args --disable-web-security --user-data-dir="/tmp/chrome_dev"
