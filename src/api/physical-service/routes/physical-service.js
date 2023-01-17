'use strict';

/**
 * physical-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::physical-service.physical-service');
