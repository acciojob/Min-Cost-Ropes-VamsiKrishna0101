function mincost(arr)
{ 
//write your code here
	let mini=0
	arr.forEach((value)=>{
		mini+=value
	})
	return mini
// return the min cost
	
  
}

module.exports=mincost;
