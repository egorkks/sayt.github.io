

document.getElementById('accessButton').addEventListener('click', function () {
    var userCode = document.getElementById('accessCode').value;

  
    if (userCode === '1111') {
    
        document.getElementById('mainFunctionality').style.display = 'block';
        document.getElementById('accessForm').style.display = 'none';
    } else {
        alert('Неверный код доступа');
    }
});
