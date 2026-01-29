import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicDynamicCategory extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_dynamic_categories';
  info: {
    displayName: 'Dynamic-Category';
  };
  attributes: {
    Types: Schema.Attribute.Relation<
      'oneToOne',
      'api::component-category.component-category'
    >;
  };
}

export interface DynamicDynamicHeading extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_dynamic_headings';
  info: {
    displayName: 'Dynamic-Heading';
  };
  attributes: {
    component_heading: Schema.Attribute.Relation<
      'oneToOne',
      'api::component-heading.component-heading'
    >;
  };
}

export interface DynamicDynamicPageLabel extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_dynamic_page_labels';
  info: {
    displayName: 'Dynamic-PageLabel';
  };
  attributes: {
    component_page_name: Schema.Attribute.Relation<
      'oneToOne',
      'api::component-page-name.component-page-name'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic.dynamic-category': DynamicDynamicCategory;
      'dynamic.dynamic-heading': DynamicDynamicHeading;
      'dynamic.dynamic-page-label': DynamicDynamicPageLabel;
    }
  }
}
