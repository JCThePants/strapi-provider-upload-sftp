const SFTP = require('ssh2-sftp-client');

/**
 * Returns the connection with a SFTP host.
 *
 * @param {object} config
 * @param {string} config.host
 * @param {string | number} config.port
 * @param {string} config.username
 * @param {string} [config.password]
 * @param {string} [config.privateKey]
 * @param {string} [config.passphrase] For an encrypted private key
 *
 * @returns {Promise}
 */

const getSFTPConnection =  async(config) => {
  const sftp = new SFTP();

  try {
    await sftp.connect(config);
  } catch (e) {
    console.error(e);
  }

  return sftp;
}

module.exports = getSFTPConnection;
