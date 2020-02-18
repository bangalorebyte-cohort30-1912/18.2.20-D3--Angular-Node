const canvas = d3.select(".canvas")

const dataArray = [4, 20, 35, 40, 16, 27, 10]

const svg = canvas.append("svg")
                  .attr("width", 600)
                  .attr("height", 300)

const rect = svg.selectAll("rect")

rect.data(dataArray)
    .enter().append("rect")
    .attr("fill","blue")
    .attr("height", function(d){
        return d*20
    })
    .attr("width", 45)
    .attr("x",function(d,i){
        return i*50
    })
    .attr("y", function(d,i){
        return 300 - d*5
    })
    .attr('')

// svg.append()

// console.log(svg)

// const canvas = d3.select(".canvas")
// console.log(canvas)

// const dataArray = [10, 20, 15, 25, 45, 35, 30,50,25, 35, 5, 15]

// const newDataArray = [
//     { 'height': 10, "fill": "red" },
//     { 'height': 30, "fill": "yellow" },
//     { 'height': 20, "fill": "blue" },
//     { 'height': 50, "fill": "green" }

// ]

// const svg = canvas.append("svg")
//                    .attr('width',600)
//                    .attr("height",600)

// const rect = svg.selectAll("rect")

// const temp = rect.data(newDataArray)
//                  .enter().append("rect")
//                  .attr("height",function(d,i){
//                      return d.height*10
//                  })
//                  .attr("width",25)
//                  .attr("fill",function(d,i){
//                      return d.fill
//                  })
//                  .attr("x",function(d,i){
//                      return i*30
//                  })
//                  .attr("y", function(d,i){
//                      return 600-d.height*10
//                  })

// console.log(temp)


