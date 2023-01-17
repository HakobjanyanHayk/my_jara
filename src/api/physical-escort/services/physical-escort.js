'use strict';

/**
 * physical-escort service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::physical-escort.physical-escort');
