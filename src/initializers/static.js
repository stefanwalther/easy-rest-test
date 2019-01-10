const express = require('express');
const path = require('path');

module.exports = {
  configure: app => {
    console.log('[middleware:static]');
    app.use(express.static('files'));
    app.use('/files', express.static(path.join(__dirname, 'files')));
  }
};

