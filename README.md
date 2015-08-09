# Server and Client-side Templating in Express

This is an attempt to make express model a service-based architecture. A hybrid of server-side templating (with layouts, and partials) while at the same time having client-side templating for data to be loaded through ajax requests from the API.

Why would one want to do this?

1. Learn a client-side service-architecture
2. Learn about APIs
3. Preserve common-sense templating patterns like layouts and partials

## First Attempt Express-EJS-Mustache

At first I tried EJS with Mustache, but this had various pros and cons

### Pros
1. EJS resembles rails, Mustache resembles AngularJS
2. EJS and Mustache are 'closest to the metal' with regards JS and HTML.


### Cons
1. EJS does not allow a layout template or partials


## Second Attempt