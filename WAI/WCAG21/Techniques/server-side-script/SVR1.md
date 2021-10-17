-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF23](../pdf/PDF23)
-   [Next Technique: SVR2](SVR2)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Tests](#tests)

Implementing automatic redirects on the server side instead of on the client side
=================================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Server-side technologies, including server-side scripting languages and server configuration files with URLs or URL patterns for redirects.

This technique relates to [Success Criterion 3.2.5: Change on Request](https://www.w3.org/WAI/WCAG21/Understanding/change-on-request) (Sufficient).

Description
-----------

The objective of this technique is to avoid confusion that may be caused when two new pages are loaded in quick succession because one page (the one requested by the user) redirects to another. Some user agents support the use of the HTML meta element to redirect the user to another page after a specified number of seconds. This makes a page inaccessible to some users, especially users with screen readers. Server-side technologies provide methods to implement redirects in a way that does not confuse users. A server-side script or configuration file can cause the server to send an appropriate HTTP response with a status code in the 3xx range and a Location header with another URL. When the browser receives this response, the location bar changes and the browser makes a request with the new URL.

Examples
--------

### Example 1: JSP/Servlets

In Java Servlets or JavaServer Pages (JSP), developers can use HttpServletResponse.sendRedirect(String url).

    …
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    …
      response.sendRedirect("/newUserLogin.do");
    }

This sends a response with a 302 status code ("Found") and a Location header with the new URL to the user agent. It is also possible to set another status code with response.sendError(int code, String message) with one of the constants defined in the interface javax.servlet.http.HttpServletResponse as status code.

    …
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    …
      response.sendError(response.SC_MOVED_PERMANENTLY, "/newUserLogin.do");
    }

If an application uses HttpServletResponse.encodeURL(String url) for URL rewriting because the application depends on sessions, the method HttpServletResponse.encodeRedirectURL(String url) should be used instead of HttpServletResponse.sendRedirect(String url). It is also possible to rewrite a URL with HttpServletResponse.encodeURL(String url) and then pass this URL to HttpServletResponse.sendRedirect(String url).

### Example 2: ASP

In Active Server Page (ASP) with VBScript, developers can use Response.Redirect.

      Response.Redirect "newUserLogin.asp"

or

    Response.Redirect("newUserLogin.asp")

The code below is a more complete example with a specific HTTP status code.

    Response.Clear
    Response.Status = 301
    Response.AddHeader "Location", "newUserLogin.asp"
    Response.Flush
    Response.End

### Example 3: PHP

In PHP, developers can send a raw HTTP header with the header method. The code below sends a 301 status code and a new location. If the status is not explicitly set, the redirect response sends an HTTP status code 302.

     <?php
    header("HTTP/1.1 301 Moved Permanently);
    header("Location: http://www.example.com/newUserLogin.php");
    ?>

### Example 4: Apache

Developers can configure the Apache Web server to handle redirects, as in the following example.

    redirect 301 /oldUserLogin.jsp http://www.example.com/newUserLogin.do

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Use standard redirects: do not break the back button!](https://www.w3.org/QA/Tips/reback) (W3C QA Tip).
-   [HTTP/1.1 Status Code Definitions: Redirection 3xx](https://tools.ietf.org/html/rfc7231#section-6.4).
-   [HTTP 301 Permanent Redirection Techniques](http://www.somacon.com/p145.php) by Shailesh N. Humbad.
-   [Interface javax.servlet.http.HttpServletResponse](http://docs.oracle.com/cd/E17802_01/products/products/servlet/2.3/javadoc/javax/servlet/http/HttpServletResponse.html) in the Java Servlets 2.3 API documentation.
-   [header](http://php.net/manual/en/function.header.php) in the PHP Manual.
-   [Apache Module mod\_alias](http://httpd.apache.org/docs/2.2/mod/mod_alias.html) in the [Apache HTTP Server Version 2.2 Documentation](http://httpd.apache.org/docs/2.2/) describes how redirects can be specified in Apache 2.2.
-   [Module mod\_alias](http://httpd.apache.org/docs/1.3/mod/mod_alias.html) in the [Apache HTTP Server Version 1.3 Documentation](http://httpd.apache.org/docs/1.3/) describes how redirects can be specified in Apache 1.3.

Tests
-----

### Procedure

1.  Find each link or programmatic reference to another page or Web page.
2.  For each link or programmatic reference to a URI in the set of Web pages being evaluated, check if the referenced Web page contains code (e.g., meta element or script) that causes a client-side redirect.
3.  For each link or programmatic reference to a URI in the set of Web pages being evaluated, check if the referenced URI does not cause a redirect OR causes a server-side redirect without a time-out.

### Expected Results

-   Step 2 is false AND step 3 is true.
