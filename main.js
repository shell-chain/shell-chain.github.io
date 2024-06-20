document.getElementById('copy-ip').addEventListener('click', () => {
    const ip = "142.132.134.223:25618";
    navigator.clipboard.writeText(ip).then(() => {
        alert('IP адресу скопійовано: ' + ip);
    });
});
