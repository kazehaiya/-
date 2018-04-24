(function() {
	// Number.prototype.toLocalString

	// const num = 10000;
	// console.log(num.toLocaleString());	// 10,000

	// console.log(num.toLocaleString('zh', {style: 'decimal'}));	// 10,000
	// console.log(num.toLocaleString('zh', { style: 'percent' }));	// 1,000,000%
	// console.log(num.toLocaleString('zh', { style: 'currency' }));	// 报错


	const num = 123.456;
	// 最少5位整数
	console.log(num.toLocaleString('zh', {minimumIntegerDigits: 5}));	 // 00,123.456
	// 最少5位整数，不带分隔符
	console.log(num.toLocaleString('zh', {minimumIntegerDigits: 5, useGrouping: false}));	 // 00123.456
	// 最少5位小数，不带分隔符
	console.log(num.toLocaleString('zh', {minimumFractionDigits: 5, useGrouping: false}));	// 123.45600
	// 最多2位小数，不带分隔符
	console.log(num.toLocaleString('zh', {maximumFractionDigits: 2, useGrouping: false}));	// 123.46

	
})();
