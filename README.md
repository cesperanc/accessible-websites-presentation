# DAWS - Development of (+) accessible web sites

This is a HTML5 presentation with an introduction to the Development of (+) Accessibile Web Sites. View it action: 

[cesperanc.github.io/daws/](https://cesperanc.github.io/daws/) 
(please use Google Chrome/Chromium or Mozilla Firefox to view the presentation)

## Topics covered in the presentation
 - Motivation
 - Accessibility definition
 - Users with disabilities
 - Disability types
 - Accessibility as a tool
 - Field of action
 - Web pages: HTML, CSS and JavaScript
 - Practical tips:
  - Language definition
  - Page titles
  - Headings
  - Font size
  - Text spacing and alignment
  - Links
  - Skip links
  - Link focus outline
  - Menus
  - Alternative navigation methods
  - Tables
  - Images
  - Color contrast
  - Labels for form fields
  - Grouping in forms
  - Size of interactive elements
 - Accessibility tools
 - Progressive Enhancement and Graceful Degradation
 - Tests and validation
 - Some important standards

## Tech
DAWS uses some technologies and tools to work:
 - [ImpressJS](https://github.com/bartaz/impress.js/) - customized to our needs. We added things slide numbers, position of slides in relation to the previous slide (with +/- chars), enable/disable visual effects on request, support for cookies (to keep some preferences between sessions), support for multi-language (with grunt), etc.
 - Nodejs
 - Grunt
 - Bower
 - SASS
 - ...

### How to build
```sh
$ git clone [git-repo-url] DAWS
$ cd DAWS
$ npm install
$ grunt build
```


### Grunt tasks
Watch for changes and update files accordingly:
```sh
$ grunt watch
```
Build for distribution:
```sh
$ grunt build
```

### Publish to GitHub pages
```sh
$ git subtree push --prefix dist origin gh-pages
```