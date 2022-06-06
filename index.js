#!/usr/bin/env node
const prompts = require('prompts')

const theNum = Number(process.env.value || Math.round(Math.random() * 1000))
let count = 0
!(async () => {
	let answer = await prompts([
		{
			type: 'number',
			name: 'value',
			message: '输入一个数字开始?'
		}
	], { onCancel: () => process.exit() })
	while (true) {
		count++
		if (answer.value === theNum) {
			console.log('答对了, 一共猜了', count, '次')
			process.exit()
		} else {
			answer = await prompts([
				{
					type: 'number',
					name: 'value',
					message: `${ answer.value > theNum ? '太大了' : '太小了' }, 重新输入试试`
				}
			], { onCancel: () => process.exit() })
		}
	}
})()



