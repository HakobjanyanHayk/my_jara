'use strict';

/**
 * service-accounting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-accounting.service-accounting');
