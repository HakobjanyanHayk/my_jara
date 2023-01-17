'use strict';

/**
 * physical-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::physical-service.physical-service');
