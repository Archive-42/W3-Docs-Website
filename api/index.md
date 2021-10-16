W3C API Overview

W3C API Overview
================

Introduction
------------

This page describes the resources forming the W3C API. If you have any problems or requests, please submit an [issue](https://github.com/w3c/w3c-api/issues).

Anyone with a [W3C Account](https://www.w3.org/accounts/request) and an [API key](https://www.w3.org/users/myprofile/apikeys) can use W3C API.

Schema
------

All API access is over HTTPS, and accessed from the `api.w3.org` domain. All data is sent and received as JSON.

The details about the different API endpoints are documented at <https://api.w3.org/doc>.

    $ curl -i https://api.w3.org/groups?apikey=xxx
    HTTP/1.1 200 OK
    Content-Type: application/json
    Cache-Control: public, s-maxage=900
    Date: Mon, 23 Nov 2015 12:10:43 GMT
    Last-Modified: Wed, 18 Nov 2015 22:39:10 GMT
    X-RateLimit-Limit: 1000
    X-RateLimit-Remaining: 998
    X-RateLimit-Reset: 1448284222
    Transfer-Encoding: chunked
    Accept-Ranges: bytes
    {...}

All timestamps are returned in ISO 8601 format:

    YYYY-MM-DDTHH:MM:SSZ

API Keys
--------

### Generate API Keys

To generate API keys, head to your [W3C API keys management page](https://www.w3.org/users/myprofile/apikeys). This page can also be reached from your main [W3C profile page](http://www.w3.org/users/myprofile).

You can create several keys (five by default, ask [W3C Systems Team](mailto:sysreq@w3.org)) to help maintain multiple applications.  
Each key must have a label, and may [specify a list of domain names allowed to make requests to the API](#restrictions) (more about this below).

### Restricting API Keys

If API keys are going to be publicly visible (for example in some client-side Javascript code), it is **highly recommended** to specify allowed domains when creating or editing them.

Requests made with such keys will then be authorized **only** if the origin domain (using [CORS](https://www.w3.org/TR/cors/) [Origin header](https://www.w3.org/TR/cors/#origin-request-header)) matches one of this key's domains.

If the key is not associated with a domain, the `Origin` header is not mandatory.

### Use an API Key

To successfully get data from W3C API, you need to include an API key in every request. There are two ways to do that:

-   Using the `apikey` query parameter: `https://api.w3.org/groups?apikey=mgug2t7fylcksswc4gcs08s4gooo0ok`
-   Using the HTTP Authorization header: `Authorization: W3C-API         apikey="mgug2t7fylcksswc4gcs08s4gooo0ok"`

Failing to provide a (valid) key, you will get one of the following HTTP errors:

-   401 Missing API key
-   403 Invalid API key

### Rate limiting

By default, each key can make up to 5000 requests per hour. [W3C Systems team](mailto:sysreq@w3.org) can increase that limit.

You can check the status of a key in response headers after any request:

    X-RateLimit-Limit: 5000
    X-RateLimit-Remaining: 4524
    X-RateLimit-Reset: 1439472737

Alternatively, the `/rate_limit` endpoint will give the same information in both JSON and headers, without increasing the number of hits.

If this limit is reached, you will get a 429 HTTP Error.

Parameters
----------

The W3C API takes optional parameters that can be passed as an HTTP query string parameter.

List of parameters:

<table><thead><tr class="header"><th>Name</th><th>Value</th><th>Purpose</th><th>Example</th></tr></thead><tbody><tr class="odd"><td><code>embed</code></td><td>boolean</td><td>By default, resources will be represented by links. On specific routes, the <code>embed</code> parameter allows to additionnaly embed related resources (see the <a href="http://stateless.co/hal_specification.html">HAL model</a> for more details)</td><td>https://api.w3.org/groups?embed=1</td></tr><tr class="even"><td><code>_doc</code></td><td>1</td><td>Show the documentation for a specific endpoint</td><td>https://api.w3.org/groups?_doc=1</td></tr><tr class="odd"><td><code>items</code></td><td>Integer</td><td>Specify how many items should be listed on a page. Default value: 100, max value: 1000</td><td>https://api.w3.org/groups?items=10</td></tr><tr class="even"><td><code>page</code></td><td>Integer</td><td>Specify which page should be displayed, Default value: 1</td><td>https://api.w3.org/groups?page=2</td></tr></tbody></table>

HTTP verbs
----------

For now, the W3C API is read-only. Therefore the only HTTP verb we support is `GET`.

Pagination
----------

As mentioned in the [parameters section](#parameters), requests that return multiple items will be paginated to 100 items by default. You can specify further pages with the `?page` parameter. For some resources, you can also set a custom page size up to 1000 with the `?items` parameter.

Note that page numbering is 1-based and that omitting the `?page` parameter will return the first page.

Cross Origin Resource Sharing
-----------------------------

The API supports Cross Origin Resource Sharing (CORS) for AJAX requests from any origin. You can read the [CORS W3C Recommendation](http://www.w3.org/TR/cors).

Here’s a sample request sent from a browser hitting `http://example.com`:

    $ curl -i https://api.w3.org -H "Origin: http://example.com"

    HTTP/1.1 200 OK
    Server: nginx/1.2.1
    Content-Type: application/json
    Access-Control-Allow-Origin: http://example.com
    Access-Control-Allow-Credentials: true
