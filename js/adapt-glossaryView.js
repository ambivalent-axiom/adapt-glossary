import Adapt from 'core/js/adapt';
import React from 'react';
import ReactDOM from 'react-dom';
import { templates } from 'core/js/reactHelpers';

class GlossaryView extends Backbone.View {
  className() {
    return 'glossary';
  }

  initialize() {
    this.listenTo(Adapt, {
      remove: this.remove,
      'glossary:open': this.openGlossary,
      'glossary:close': this.closeGlossary
    });

    this.isOpen = false;
    this.render();
  }

  render() {
    this.$el.appendTo('body');

    const data = {
      ...this,
      model: this.model.toJSON()
    };

    ReactDOM.render(<templates.glossary {...data} />, this.el);

    return this;
  }

  openGlossary() {
    this.isOpen = true;
    this.renderReactComponent();
    this.$button.addClass('is-active');
  }

  closeGlossary() {
    this.isOpen = false;
    this.renderReactComponent();
    this.$button.removeClass('is-active');
  }

  remove() {
    ReactDOM.unmountComponentAtNode(this.el);
    this.$button?.remove();
    Backbone.View.prototype.remove.call(this);
  }
}

export default GlossaryView;
