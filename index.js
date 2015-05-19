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

function restore() {
	ipc.send('asynchronous-message', 'restore-window');
}