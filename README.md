# javascript-notebooks
A Jekyll site for publishing JS notebooks for Cytoscape automation via js4cytoscape


## Development
In order to rebuild the site locally, e.g. for testing, you'll need to:
1. clone the repo
2. install Ruby, Jekyll and Bundler ([guide](https://jekyllrb.com/docs/installation/))
  * Try to match [these versions](https://pages.github.com/versions/) where possible in order to get the same behavior locally as via GitHub. Pay attention to Jekyll and Ruby versions in particular.
3. run `bundle install`
4. run `bundle exec jekyll serve --baseurl=""`  <-- run this each time you want to restart the local server
5. goto http://127.0.0.1:4000