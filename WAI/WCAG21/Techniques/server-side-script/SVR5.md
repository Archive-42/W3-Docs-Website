-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SVR4](SVR4)
-   [Next Technique: SL1](../silverlight/SL1)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Specifying the default language in the HTTP header
==================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Server-side technologies, including server-side scripting languages and server configuration files for setting HTTP headers.

This technique relates to [Success Criterion 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page) (Advisory).

Description
-----------

The objective of this technique is to provide information on the primary language or languages in a Web Page, in order to identify the audience of the content. The Content-Language HTTP header can contain a list of one or more language codes, which can be used for language negotiation between a user agent and a server. If the language preferences in a user agent are set correctly, language negotiation can help the user to find a language version of the content that suits his/her preferences.

Note that the Content-Language HTTP header does not serve to identify the language used for processing the content. The content processing language can be identified by means of other techniques, such as the attributes lang and xml:lang in markup languages.

This technique ensures that the primary language of the document, as specified for example in the lang or xml:lang attribute, is listed in the Content-Language HTTP header.

Examples
--------

### Example 1: Setting content language in Java Servlet and JSP

In Java Servlet or JavaServer Pages (JSP), developers can use response.setHeader("Content-Language", lang), in which "lang" stands for a language tag (for example, "en" for English):

    …
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException 
    {
    …
      response.setHeader("Content-Language", "en");
      PrintWriter out = response.getWriter();
    …
    }

### Example 2: Setting content language in PHP

In PHP, developers can send a raw HTTP header with the header method. The following example sets the language to French:

    <?php  header('Content-language: fr');  …  ?>  

Resources
---------

Resources are for information purposes only, no endorsement implied.

[W3C Internationalization FAQ: HTTP and meta for language information](https://www.w3.org/International/questions/qa-http-and-lang)

[Declaring metadata about the language(s) of the intended audience](https://www.w3.org/TR/2014/NOTE-i18n-html-tech-lang-20140603/#metadata) in Authoring HTML: Language declarations - W3C Working Group Note 3 June 2014.

[RFC 7321 3.1.3.2. Content-Language](https://tools.ietf.org/html/rfc7231#section-3.1.3.2)

[header](http://php.net/manual/en/function.header.php) in the PHP Manual.

Related Techniques
------------------

-   [H57: Using the language attribute on the HTML element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)

Tests
-----

### Procedure

1.  Use a Live HTTP Header viewer to find the value of the "Content-Language" header.
2.  Check that this value matches the default language of the Web page.

### Expected Results

-   Step \#2 is true.
