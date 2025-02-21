# adapt-glossary

A simple glossary extension for the Adapt framework. Adds a floating button that opens a panel containing expandable glossary terms.

## Installation

1. Download the ZIP archive from the repository releases page
2. Extract the ZIP archive into the `src/extensions` directory in your Adapt framework
3. From your framework directory, run these commands in the terminal:
   ```bash
   npm run build
   npm start
   ```

## Usage

The glossary extension adds a floating button to your course that, when clicked, opens a panel containing all glossary terms. Terms can be clicked to expand and view their definitions.

## Configuration

The extension can be configured in course.json. Here's an example:

```json
{
  "_globals": {
    "_extensions": {
      "_glossary": {
        "_isEnabled": true,
        "terms": [
          {
            "term": "Example Term",
            "description": "This is an example term definition."
          },
          {
            "term": "Example Term 2",
            "description": "This is an example term definition."
          }
        ],
        "_classes": ""
      }
    }
  },
  "_glossary": {
    "_isEnabled": true,
    "_classes": "",
    "buttonPosition": "left",
    "panelPosition": "right",
    "buttonText": "",
    "glossaryIcon": "course/en/images/correct.svg"
  }
}
```

### Attributes

**\_globals.\_extensions.\_glossary** (object): Configuration settings for the glossary extension.
- **\_isEnabled** (boolean): Enables/disables the glossary extension.
- **terms** (array): Array of glossary terms and their definitions.
  - **term** (string): The term to be defined.
  - **description** (string): The definition of the term.
- **\_classes** (string): Additional CSS classes to be applied.

**\_glossary** (object): Additional configuration settings.
- **\_isEnabled** (boolean): Enables/disables the glossary extension.
- **\_classes** (string): Additional CSS classes to be applied.
- **buttonPosition** (string): Position of the glossary button ("left" or "right").
- **panelPosition** (string): Position of the glossary panel ("left" or "right").
- **buttonText** (string): Text to display on button if no icon is provided (defaults to "G").
- **glossaryIcon** (string): Path to the icon to be displayed on the glossary button.

## Limitations

- The glossary panel is always 300px wide
- Icon must be provided as an SVG file
- Button positions are limited to left or right side of the screen

## Browser Spec

This extension has been tested to work with the latest versions of Chrome, Firefox, Safari, and Edge.

---

**Framework versions:** 5+  
**Author / Maintainer:** Ambax@Digify arturs@digify.lv 
**License:** [MIT](https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE)