# adapt-glossary

A glossary extension for the Adapt framework. Provides a floating glossary widget that allows learners to review key terms and definitions throughout the course.

## Installation

This extension can be installed using the following steps:

1. Download the zip file from this repository.
2. Extract it to the `src/extensions` folder in your Adapt framework.
3. Once installed, the extension needs to be included in the `config.json` file (in the `_extensions` array).

## Usage

The glossary extension adds a floating button to your course that, when clicked, opens a searchable glossary of terms. Course authors can define terms and their definitions in the course configuration.

### Course Configuration

Add the following configuration to your course.json:

```json
{
  "_globals": {
    "_extensions": {
      "_glossary": {
        "glossaryIcon": "course/assets/glossary-icon.svg",
        "terms": [
          {
            "term": "Example Term",
            "description": "This is an example term definition."
          }
        ]
      }
    }
  },
  "_glossary": {
    "_isEnabled": true,
    "_classes": ""
  }
}
```

### Configuration Properties

#### Global Configuration (_globals._extensions._glossary)

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| glossaryIcon | String | Path to the icon image file that will be used for the glossary button | "course/assets/glossary-icon.svg" |
| terms | Array | Array of term objects containing term definitions | `[]` |

##### Term Object

| Property | Type | Description |
| -------- | ---- | ----------- |
| term | String | The term or word to be defined |
| description | String | The definition or explanation of the term |

#### Extension Configuration (_glossary)

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| _isEnabled | Boolean | Enable or disable the glossary extension | true |
| _classes | String | Custom CSS classes to be added to the glossary container | "" |

### Accessibility

The glossary extension has been built with accessibility in mind:
- Fully keyboard navigable
- Screen reader friendly
- ARIA labels and roles
- High contrast UI elements
- Customizable font sizes

### Browser Spec

This extension has been tested with the following browsers:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

### Dependencies

- Adapt Framework v5.0.0 (or higher)
- React 16.8.0 (or higher)

## Settings Overview

The attributes listed below are used in *course.json* to configure the glossary extension.

```json
{
  "_globals": {
    "_extensions": {
      "_glossary": {
        "glossaryIcon": "course/assets/glossary-icon.svg",
        "terms": [
          {
            "term": "Example Term",
            "description": "This is an example term definition."
          }
        ]
      }
    }
  },
  "_glossary": {
    "_isEnabled": true,
    "_classes": "glossary-custom-theme"
  }
}
```

### Events

| Event | Description |
| ----- | ----------- |
| 'glossary:termClicked' | Triggered when a term is clicked |
| 'glossary:showTerm' | Can be triggered to programmatically show a specific term |
| 'glossary:showSpecificTerm' | Triggered internally when showing a specific term |

## Limitations

- The glossary widget is designed to work with left-to-right languages
- Maximum recommended number of terms is 500 for optimal performance

## Known Issues

None

## Contributing

### Development

To build the extension from source:

1. Clone this repository
2. Install dependencies with `npm install`
3. Build with `npm run build`


## About

**Author:** Ambax  
**Framework Versions:** 5.0.0+  
**License:** [GNU General Public License v3.0](LICENSE)

### License

This extension is licensed under the GNU General Public License, Version 3. See the [LICENSE](LICENSE) file for details.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.