# bug-grunt-karma
Project to reproduce bug in grunt-karma.

Link to bug: https://github.com/karma-runner/grunt-karma/issues/136

## Description

Chenge the format of `karma.option.files` from version `0.9.x` to `0.10.x`

## Steps for the reproduction of the bug

### clone repository and install
with version 0.9 of grunt-karma
<pre>
$ git clone https://github.com/lautarobock/bug-grunt-karma.git
$ cd bug-grunt-karma
$ npm install && bower install
</pre>

### run `grunt` successfully
<pre>
$ grunt
Running "karma:build" (karma) task
Done, without errors.
</pre>

### change grunt-karma to version 0.10.x
<pre>
$ git checkout tag-010 # update version in package.json
$ npm update grunt-karma # update package
$ grunt
WARN [config]: Invalid pattern bower_components/angular/angular.min.js,lib/forge.min.js!
Object is missing "pattern" property.
WARN [config]: Invalid pattern bower_components/angular-mocks/angular-mocks.js!
Object is missing "pattern" property.
WARN [config]: Invalid pattern src/**/*.js!
Object is missing "pattern" property.
WARN [config]: Invalid pattern test/**/*.js!
Object is missing "pattern" property.
</pre>
