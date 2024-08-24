// Select the button element using getElementById (GEBId)
const con = document.getElementById('conn');

// Function to request wallet connection
const connect = () => {
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
            console.log('Connected', accounts[0]);
            con.textContent = `Wallet Connected ${accounts[0]}`;
            con.disabled = false;
        })
        .catch(error => {
            console.error('Error connecting to wallet:', error);
        });
    } else {
        alert('No Web3 wallet detected. Please use a wallet like MetaMask.');
    }
	console.log("hi");
};

// Add an event listener to the button for click events
con.addEventListener('click', connect);