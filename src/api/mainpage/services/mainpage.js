'use strict';

/**
 * mainpage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mainpage.mainpage');
