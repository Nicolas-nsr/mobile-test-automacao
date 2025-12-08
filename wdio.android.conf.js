const baseConfig = require('./wdio.conf.js');
const androidCaps = require('./configs/capabilities-android');

exports.config = {
    ...baseConfig,
    port: 4723,
    capabilities: [androidCaps],
};