const handleForm = () => {

    const url = "http://localhost:3000/contact";
    fetch(url, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fname: document.getElementById("fname").value,
            lname: document.getElementById("lname").value,
            email: document.getElementById("email").value,
            textarea: document.getElementById("textarea").value
        })
        })
        .then(  response => 
            alert("Ti-am primit mesajul"+response)
    )
    }