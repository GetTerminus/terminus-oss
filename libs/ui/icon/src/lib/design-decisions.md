<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Icon Design Decisions](#icon-design-decisions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Icon Design Decisions

1. The underlying Angular library we are using from FontAwesome does allow icons to be passed in by reference or by
   passing in the string names. Using strings only works if we add all the icons we want to use to the library ahead of
   time. We opted against this so teams would not be waiting on releases to get access to new icons during feature work.
