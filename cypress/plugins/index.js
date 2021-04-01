/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
require('dotenv').config();
const  my = require('mysql2');

function queryTestDb(query, config) {
  const connection = my.createConnection({host: process.env.HOSTNAME, user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD})
  connection.connect()
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}

module.exports = (on, config) => {
  on('task', {
    queryDb: query => {
      return queryTestDb(query, config)
    }
  });

  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--disable-dev-shm-usage');
      return launchOptions;
    }
    return launchOptions;
  });
}
