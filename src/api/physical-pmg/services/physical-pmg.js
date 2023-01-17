'use strict';

/**
 * physical-pmg service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::physical-pmg.physical-pmg');
