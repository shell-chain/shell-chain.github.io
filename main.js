document.getElementById('copy-ip').addEventListener('click', () => {
    const ip = "Сервер ще не відкрився";
    navigator.clipboard.writeText(ip).then(() => {
        alert('IP адресу скопійовано: ' + ip);
    });
});
