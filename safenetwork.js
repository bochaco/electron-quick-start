const electron = require('electron');
const app = require('electron').remote.app;

const customExecPath = [process.execPath, app.getAppPath()];

async function sendAuthRequest() {
}

async function uponAuthResponse(resAuthUri) {
}

async function getItems() {
  return [];
};

async function insertItem(key, value) {
};

async function updateItem(key, value, version) {
};

async function removeItems(items) {
};

module.exports = {
  sendAuthRequest,
  uponAuthResponse,
  getItems,
  insertItem,
  updateItem,
  removeItems
};
