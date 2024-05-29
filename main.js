document.getElementById('copy-ip').addEventListener('click', () => {
    const ip = "Сервер еще не открылся";
    navigator.clipboard.writeText(ip).then(() => {
        alert('IP адрес скопирован: ' + ip);
    });
});
