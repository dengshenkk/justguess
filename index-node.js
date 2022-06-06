const answer = Math.round(Math.random() * 1000)


const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})
console.log('answer :', answer)
readline.question(`输入一个数字开始?`, name => {
	if (name > answer) {
		tooLarge()
	}else if (name < answer) {
		tooSmall()
	}else {
		right()
	}
})


function tooLarge() {
	readline.question(`太大了, 重新输入试试\n`, name => {
		if (name > answer) {
			tooLarge()
		}else if (name < answer) {
			tooSmall()
		}else {
			right()
		}
	})
}

function tooSmall() {
	readline.question(`太小了, 重新输入试试\n`, name => {
		if (name > answer) {
			tooLarge()
		}else if (name < answer) {
			tooSmall()
		}else {
			right()
		}
	})
}

function right() {
	console.log('答对了')
	readline.close()
}
