function checkCode() {
    var code = document.getElementById('code').value;
    if(code.toLowerCase() === 'berling') {
        window.location.href = 'success.html'; 
    } else {
        alert('Incorrect code. Please try again.\nhint: "'+code+'" is not a correct code');
    }
}

document.getElementById('code').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkCode();
    }
});