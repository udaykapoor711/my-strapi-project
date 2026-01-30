/**
 * blog-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::blog-page.blog-page",
  ({ strapi }) => ({
    async find(ctx) {
      // Set deep populate with explicit nested relations
      if (!ctx.query.populate) {
        ctx.query = {
          ...ctx.query,
          populate: {
            meta_seo: true,
            sections_hero: {
              populate: "*",
            },
            component_category: {
              populate: "*",
            },
          },
        };
      }

      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },
  })
);
