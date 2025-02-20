import Adapt from 'core/js/adapt';
import React from 'react';
import ReactDOM from 'react-dom';
import GlossaryComponent from './adapt-glossaryView';

class GlossaryView extends Backbone.View {
  className() {
    return 'glossary-wrapper';
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

    // Add button
    this.$button = $(`
      <button class="glossary-btn" aria-label="Open glossary">
        <img src="${this.model.get('icon')}" alt="Glossary">
      </button>
    `).appendTo('body');

    // Bind button click
    this.$button.on('click', () => {
      Adapt.trigger(this.isOpen ? 'glossary:close' : 'glossary:open');
    });

    // Render React component
    this.renderReactComponent();

    return this;
  }

  renderReactComponent() {
    ReactDOM.render(
      <GlossaryComponent
        terms={this.model.get('terms')}
        classes={this.model.get('classes')}
        isOpen={this.isOpen}
        onClose={() => Adapt.trigger('glossary:close')}
        onTermClick={(term) => Adapt.trigger('glossary:termClicked', term)}
      />,
      this.el
    );
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

// Specify the React template
GlossaryView.template = 'glossary.jsx';
export default GlossaryView;
