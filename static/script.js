function calculate(){

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operation = document.getElementById("operation").value;

    fetch("/calculate",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            num1:num1,
            num2:num2,
            operation:operation
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML =
        "Result: " + data.result;
    });
}
