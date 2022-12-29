'use strict';

/**
 * business-case service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-case.business-case');
