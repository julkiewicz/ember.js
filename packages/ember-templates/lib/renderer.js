import isEnabled from 'ember-metal/features';
import require from 'require';

export const InteractiveRenderer = (function () {
  if (isEnabled('ember-glimmer')) {
    return require('ember-glimmer/ember-metal-views').InteractiveRenderer;
  } else {
    return require('ember-metal-views').InteractiveRenderer;
  }
}());

export const InertRenderer = (function () {
  if (isEnabled('ember-glimmer')) {
    return require('ember-glimmer/ember-metal-views').InertRenderer;
  } else {
    return require('ember-metal-views').InertRenderer;
  }
}());

export const Renderer = (function () {
  if (isEnabled('ember-glimmer')) {
    return require('ember-glimmer/ember-metal-views').Renderer;
  } else {
    return require('ember-metal-views').Renderer;
  }
}());
