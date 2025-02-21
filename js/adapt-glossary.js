import Adapt from 'core/js/adapt';
import React from 'react';
import ReactDOM from 'react-dom';
import { templates } from 'core/js/reactHelpers';

class GlossaryExtension extends Backbone.Controller {
  initialize() {
    this.listenTo(Adapt, 'app:dataReady', this.onDataReady);
  }

  onDataReady() {
    const config = Adapt.course.get('_glossary'); // Get configuration
    if (!config?._isEnabled) return; // Exit in case if glossary is not present in course.
    let terms = config?.terms || [];
    const icon = config.glossaryIcon;
    const buttonText = config.buttonText || 'G';
    const buttonPosition = config.buttonPosition || 'right';
    const panelPosition = config.panelPosition || 'right';
    const sort = config.sort || false;

    if (sort) { // sort terms alphabetically if required
      terms = terms.sort((a, b) => a.term.localeCompare(b.term));
    };

    // preprare props
    const data = {
      terms,
      icon,
      buttonText,
      buttonPosition,
      panelPosition
    };

    // Create container and render
    const container = $('<div class="glossary">').appendTo('body');
    ReactDOM.render(
      <templates.glossary {...data} />, // take template and pass props
      container[0]
    );
  }
}

export default (Adapt.glossary = new GlossaryExtension());
