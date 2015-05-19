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

function enterFullscreen() {
	ipc.send('asynchronous-message', 'enter-fullscreen-window');
}

function leaveFullscreen() {
	ipc.send('asynchronous-message', 'leave-fullscreen-window');
}

