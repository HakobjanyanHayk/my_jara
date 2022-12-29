'use strict';

/**
 * freelancer-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::freelancer-service.freelancer-service');
