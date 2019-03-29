// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	
	if(currency<=10000)
	{
		let array={'H':50,'Q':25,'D':10,'N':5,'P':1};

        let result ={};

		for (let key in array)
		{
			let num = Math.floor(currency/array[key]);
			if(num>0)
			{
				result[key] = num;
				currency= currency - num*array[key];
			}
		}
		return result;
	}
	else
		return {error: "You are rich, my friend! We don't have so much coins for exchange"}
}
