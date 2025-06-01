function mincost(arr)
{ 
//write your code here
	let mini=0
	arr.sort((a,b)=>a-b)
	while(arr.length>0){
		let first=arr.shift()
		let second=arr.second()
		let cost=first+second
		mini+=cost
		arr.push(cost)
	}
	return mini
// return the min cost
	
  
}

module.exports=mincost;
