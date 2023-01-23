const checkLogin = () => {
    var userName = document.getElementById('userName').value
    var password = document.getElementById('password').value

    if (userName === password) {
        localStorage.setItem("userName", userName);
        localStorage.setItem("password", password);
        alert("Login Successful");
        // location.href = "\orders.html";
    }
    else if (userName !== password) {
        alert("Please enter valid credentials!");
    }



}