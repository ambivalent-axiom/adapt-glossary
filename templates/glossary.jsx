import React, { useState } from 'react';

export default function Glossary(props) {
  const {
    terms,
    icon
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [expandedTerms, setExpandedTerms] = useState(new Set());

  const toggleTerm = (index) => {
    const newExpanded = new Set(expandedTerms);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedTerms(newExpanded);
  };

  return (
    <>
      <button
        className="glossary-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle glossary"
      >
        G
      </button>

      {isOpen && (
        <div className="glossary__panel">
          <div className="glossary__content">
            <button
              className="glossary__close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            <div className="glossary__terms">
              {terms.map((term, index) => (
                <div
                  key={index}
                  className="glossary__term"
                  onClick={() => toggleTerm(index)}
                >
                  <h3 className="glossary__term-title">
                    {term.term}
                  </h3>
                  {expandedTerms.has(index) && (
                    <p className="glossary__term-description">
                      {term.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
