
console.log("imported")

const data = [10,20,30,40,50];


const body = d3.select('ul')
                .selectAll('li')
                .data(data)
                .text('hi')

console.log(body)

//## data()와 enter() : 보여줄 데이터 준비
//
//data() ->  반환 결과에 enter(), exit()라는 메서드 추가됨
//           enter()[0] -> 바인드된 데이터중 실제 요소를 가지지 못한 것을 찾아내 가상객체로 반환
//
// enter()의 동작
//기존에 p요소가 3개의 요소가 있다고 가정하에
//이미  p요소가 있을 경우, selectAll()의 결과는 더이상 빈 객체가 아니므로
//이미 존재하는 P요소 3개가 선택된 상태가 된다.
//D3는 우선적으로 이 요소들에 데이터가 연결이 되어있다고 가정하여
//나머지  아직 연결이 된 문서 요소가 없는 데이터에 대해서만 가상의 객체를 생성하게된다.
//즉, 미리 존재하는 요소들은 무시된다.
//
//그렇다면 이미 존재하는 요소에 대해서는 조작이 불가능 한것일까??? 
//NO,  data()바인드 이후로 반환되는 결과를 바로 조작하면 조작이 가능한다.
//ex) 
//const dataset = [5,10,15,20,25]
//d3.select("body")
//  .selectAll("p")
//  .data(dataset)
//  .text(function( d )){return d }) // 조작이 가능하다.

// exit() 메서드는 데이터보다 요소가 많을떄 데이터와 연결되지 않은 요소는 제거된다.

//
{/* <ul id = "list">
   <li></li>
   <li></li>
</ul>  */}
// d3.select("#list").selectAll("li")
//    .data([10, 20, 30, 25, 15])
//    .text(function(d) { return "전에 존재하던 요소들: " + d; })
//    .enter()
//    .append("li")
//    .text(function(d) 
//       { return "새롭게 동적으로 추가된 요소들: " + d; });






