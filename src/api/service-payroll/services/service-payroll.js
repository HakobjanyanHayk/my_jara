'use strict';

/**
 * service-payroll service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-payroll.service-payroll');
