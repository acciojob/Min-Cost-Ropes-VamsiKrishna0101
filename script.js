function mincost(arr)
{ 
//write your code here
	let mini=0
	arr.sort((a,b)=>a-b)
	while(arr.length>0){
		let first=arr.shift()
		let second=arr.second()
		mini+=first+second
		arr.push(mini)
	}
	return mini
// return the min cost
	
  
}

module.exports=mincost;
