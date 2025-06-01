function mincost(arr)
{ 
//write your code here
	let mini=0
	arr.sort((a,b)=>a-b)
	while(arr.length>1){
		let first=arr.shift()
		let second=arr.shift()
		let cost=first+second
		mini+=cost
		arr.push(cost)
			arr.sort((a,b)=>a-b)

	}
	return mini
// return the min cost
	
  
}

module.exports=mincost;
