// start geth in background
var newAccessToken = function() {
	return require('crypto').randomBytes(16).toString('hex');
}
/*
var spawn = require('child_process').spawn;
var environment = {'accessToken': newAccessToken()};

var geth = spawn('geth', ['mist'], {env: environment});
geth.stderr.on('data', function(data) {
	console.log(data.toString('utf-8'));
});
*/

var mist = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('ipc');

var mainWindow = null;

mist.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		mist.quit();
	}
});

mist.on('ready', function() {
	mainWindow = new BrowserWindow({width: 800, height: 600, frame: false});
	mainWindow.loadUrl('file://' + __dirname + '/index.html');

	//mainWindow.openDevTools();

	mainWindow.on('closed', function() {
		mainWindow = null;
		if (process.platform != 'darwin') {
			mist.quit();
		}
	});
});

ipc.on('asynchronous-message', function(event, msg) {
	if (msg == 'exit-window') {
		mainWindow = null;
		mist.quit();
	} else if (msg == 'minimize-window') {
		mainWindow.minimize();
	} else if (msg == 'maximize-window') {
		mainWindow.maximize();
	} else if (msg == 'restore-window') {
		mainWindow.restore();
	}
});
