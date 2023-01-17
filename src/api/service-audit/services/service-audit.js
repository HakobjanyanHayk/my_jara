'use strict';

/**
 * service-audit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-audit.service-audit');
