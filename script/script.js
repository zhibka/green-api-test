async function fetchAPI(method, body) {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    if (!idInstance || !apiTokenInstance) {
        alert('Please enter both ID Instance and API Token Instance');
        return;
    }

    const url = `https://api.green-api.com/waInstance${idInstance}/${method}/${apiTokenInstance}`;
    console.log('Fetching URL:', url);
    console.log('Request body:', body);

    const response = await fetch(url, {
        method: body ? 'POST' : 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : null
    });

    const result = await response.json();
    document.getElementById('output').value = JSON.stringify(result, null, 2);
}

function getSettings() {
    fetchAPI('getSettings');
}

function getStateInstance() {
    fetchAPI('getStateInstance');
}

function sendMessage() {
    const chatId = document.getElementById('chatId').value;
    const message = document.getElementById('message').value;
    if (!chatId || !message) {
        alert('Please enter both Chat ID and Message');
        return;
    }
    const body = {
        "chatId": chatId,
        "message": message
    };
    fetchAPI('sendMessage', body);
}

function sendFileByUrl() {
    const chatId = document.getElementById('chatIdFile').value;
    const urlFile = document.getElementById('urlFile').value;
    const fileName = document.getElementById('fileName').value;
    if (!chatId || !urlFile || !fileName) {
        alert('Please enter Chat ID, File URL, and File Name');
        return;
    }
    const body = {
        "chatId": chatId,
        "urlFile": urlFile,
        "fileName": fileName
    };
    fetchAPI('sendFileByUrl', body);
}