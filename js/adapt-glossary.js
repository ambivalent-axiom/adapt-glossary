import Adapt from 'core/js/adapt';
import React from 'react';
import ReactDOM from 'react-dom';
import { templates } from 'core/js/reactHelpers';

class GlossaryExtension extends Backbone.Controller {
  initialize() {
    this.listenTo(Adapt, 'app:dataReady', this.onDataReady);
  }

  onDataReady() {
    const config = Adapt.course.get('_glossary');
    if (!config?._isEnabled) return;

    const data = {
      terms: Adapt.course.get('_globals')?._extensions?._glossary?.terms || [],
      icon: Adapt.course.get('_globals')?._extensions?._glossary?.glossaryIcon || []
    };

    // Create container and render
    const container = $('<div class="glossary">').appendTo('body');
    ReactDOM.render(
      <templates.glossary {...data} />,
      container[0]
    );
  }
}

export default (Adapt.glossary = new GlossaryExtension());
