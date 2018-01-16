# NgI18nDemo

When writing your source text in html, just add the `i18n` html attribute to the element. See the demo for examples.

## Generating Translation Files

Run `yarn i18n` to generate a source translation file. This file should not be committed to source control.

## Using Translated Files

Ensure that the translated file(s) are in the path `src/i18n/messages.TARGET_LANGUAGE.xlf`. This file should be committed to source control.

## Development server

Run `yarn start` to serve the app in the source language.

Run `yarn start:fr` to serve the app in the target language.

## Build

Run `yarn build` to build the project in the source language.

Run `yarn build:fr` to build the project in the target language.
  
