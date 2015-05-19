var ipc = require('ipc');

function exit() {
	ipc.send('asynchronous-message', 'exit-window');
}

function minimize() {
	ipc.send('asynchronous-message', 'minimize-window');
}

function maximize() {
	ipc.send('asynchronous-message', 'maximize-window');
}

function unmaximize() {
	ipc.send('asynchronous-message', 'unmaximize-window');
}