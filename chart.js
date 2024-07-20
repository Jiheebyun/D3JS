


async function draw () {
    const dataset = await d3.json('data.json');
    console.log(dataset)
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

    container.append('circle')
        .attr('r', 15)
};


draw();



// Cors Enabled CMD
// open -na "Google Chrome" --args --disable-web-security --user-data-dir="/tmp/chrome_dev"
