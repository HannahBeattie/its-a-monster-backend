'use strict';

/**
 * worry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::worry.worry');
