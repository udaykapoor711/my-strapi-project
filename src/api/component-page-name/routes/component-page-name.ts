/**
 * component-page-name router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::component-page-name.component-page-name');

export const routes = {
  'GET /blog/category/:categorySlug': 'api::component-page-name.component-page-name.findByCategory',
};
