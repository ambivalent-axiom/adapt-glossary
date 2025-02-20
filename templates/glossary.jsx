import React, { useState, useEffect } from 'react';
import Adapt from 'core/js/adapt';

export default function GlossaryView(props) {
  const {
    terms,
    classes,
    onTermClick,
    isOpen = false,
    onClose
  } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTerms, setFilteredTerms] = useState(terms);

  useEffect(() => {
    // Listen for requests to show specific terms
    const handleShowTerm = (termId) => {
      const term = terms.find(t => t.term === termId);
      if (term) {
        setSearchTerm(term.term);
        filterTerms(term.term);
      }
    };

    Adapt.on('glossary:showSpecificTerm', handleShowTerm);
    return () => Adapt.off('glossary:showSpecificTerm', handleShowTerm);
  }, [terms]);

  const filterTerms = (search) => {
    const filtered = terms.filter(term =>
      term.term.toLowerCase().includes(search.toLowerCase()) ||
      term.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTerms(filtered);
  };

  const handleSearch = (event) => {
    const search = event.target.value;
    setSearchTerm(search);
    filterTerms(search);
  };

  if (!isOpen) return null;

  return (
    <div className={`glossary ${classes}`}>
      <div className="glossary__overlay">
        <div className="glossary__content">
          <div className="glossary__header">
            <input
              type="search"
              className="glossary__search"
              placeholder="Search terms..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <button
              className="glossary__close"
              onClick={onClose}
              aria-label="Close glossary"
            >
              ×
            </button>
          </div>

          <div className="glossary__terms">
            {filteredTerms.length > 0
              ? (
                filteredTerms.map((term, index) => (
                  <div
                    key={index}
                    className="glossary__term"
                    onClick={() => onTermClick(term)}
                  >
                    <h3 className="glossary__term-title">{term.term}</h3>
                    <p className="glossary__term-description">{term.description}</p>
                  </div>
                ))
              )
              : (
                <p className="glossary__no-results">No matching terms found</p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
