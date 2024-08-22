const con = document.getElementById("conn");
	
	
	const connect = () => {
		window.ethereum.request({method: "eth_requestAccounts"})
		// console.log("hi");
		
	}
	con.addEventListener("click", connect);
