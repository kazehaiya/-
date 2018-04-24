(function () {
	// Number.prototype.toLocalString

	// const num = 10000;
	// console.log(num.toLocaleString());	// 10,000

	// console.log(num.toLocaleString('zh', { style: 'decimal'  })); // 10,000
	// console.log(num.toLocaleString('zh', { style: 'percent' }));	// 1,000,000%
	// console.log(num.toLocaleString('zh', { style: 'currency' })); // 报错


	// const num = 123.456;
	// // 最少5位整数
	// console.log(num.toLocaleString('zh', { minimumIntegerDigits: 5 }));	// 00,123.456
	// // 最少5位整数，不带分隔符
	// console.log(num.toLocaleString('zh', { minimumIntegerDigits: 5, useGrouping: false }));	// 00123.456
	// // 最少5位小数，不带分隔符
	// console.log(num.toLocaleString('zh', { minimumFractionDigits: 5, useGrouping: false })); // 123.45600
	// // 最多2位小数，不带分隔符
	// console.log(num.toLocaleString('zh', { maximumFractionDigits: 2, useGrouping: false })); // 123.46
	// // 有效数字最小为9位
	// console.log(num.toLocaleString('zh', { minimumSignificantDigits: 9, useGrouping: false }));	// 123.456000
	// // 有效数字最大为4位
	// console.log(num.toLocaleString('zh', { maximumSignificantDigits: 4, useGrouping: false }));	// 123.5
	// // 对比
	// let strNum = num.toString();
	// console.log(strNum.padStart(9, '0'));	// 00123.456
	// console.log(strNum.padEnd(9, '0'));	// 123.45600
})();
