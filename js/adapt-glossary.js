import Adapt from 'core/js/adapt';
import GlossaryView from './adapt-glossaryView';

class GlossaryExtension extends Backbone.Controller {
  initialize() {
    this.listenTo(Adapt, 'app:dataReady', this.onDataReady);
  }

  onDataReady() {
    if (!this.checkIsEnabled()) return;
    this.setupGlossary();
  }

  checkIsEnabled() {
    const config = Adapt.course.get('_glossary');
    return config?._isEnabled ?? false;
  }

  setupGlossary() {
    const globals = Adapt.course.get('_globals')?._extensions?._glossary;
    const config = Adapt.course.get('_glossary');

    // Add button directly to body
    $('body').append(`
      <button class="glossary-btn" aria-label="Open glossary">
        <img src="${globals?.glossaryIcon}" alt="Glossary">
      </button>
    `);

    // Create glossary view
    this.view = new GlossaryView({
      model: new Backbone.Model({
        terms: globals?.terms || []
      })
    });

    // Add click handler
    $('.glossary-btn').on('click', () => {
      Adapt.trigger('glossary:toggle');
    });

    this.listenTo(Adapt, 'remove', this.onRemove);
  }

  onRemove() {
    $('.glossary-btn').remove();
    this.view?.remove();
    this.stopListening();
  }
}

export default (Adapt.glossary = new GlossaryExtension());
