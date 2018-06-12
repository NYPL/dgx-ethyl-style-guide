# NYPL Web Standards & Styleguide
> This document represents our ongoing efforts to standardize basic design patterns used across nypl.org.

## Current Version
Version 0.0.9

## Installing Locally

    $ bundle install
    $ npm install
    $ bundle exec gulp watch

Once it is running, visit http://localhost:3001.

## Production
Use `gulp styleguide` instead of `gulp watch`.

**Useful commands:**

*   `gulp watch`      - to build the styleguide and watch for file changes (auto-build).
*   `gulp styleguide` - to build the styleguide.

### Sass / Compass
> This is not needed for work with the online style guide generator.

**Useful commands:**
*   __Compile:__
    *   `compass compile`  - or -  `compass watch`
    *   `sass --watch sass/application.scss:css/application.css`



### This Web Standards Styleguide uses the SC5 style guide generator

> Style guide generator is a handy little tool that helps you generate good looking style guides from style sheets using KSS notation. It can be used as a command line utility, gulp task or Grunt task (needs grunt-gulp) with minimal effort. More info: [https://github.com/SC5/sc5-styleguide].
