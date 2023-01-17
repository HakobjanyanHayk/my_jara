'use strict';

/**
 * service-tax service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-tax.service-tax');
