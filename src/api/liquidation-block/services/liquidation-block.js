'use strict';

/**
 * liquidation-block service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::liquidation-block.liquidation-block');
