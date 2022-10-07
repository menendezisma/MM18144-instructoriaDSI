
function comando_echo(){
	const stdin = process.openStdin();
	stdin.addListener("data", (data) => {
		console.log(data.toString());
		process.exit()
	})
}

comando_echo()

/** para ejecutar
 * npm run --silent echo
 * 
 */