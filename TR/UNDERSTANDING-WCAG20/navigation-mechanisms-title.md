[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.1 \[Bypass Blocks\]](navigation-mechanisms-skip.html "Understanding SC  2.4.1 [Bypass Blocks]")
-   [**Next:** SC 2.4.3 \[Focus Order\]](navigation-mechanisms-focus-order.html "Understanding SC  2.4.3 [Focus Order]")

On this page:

-   [Intent](#navigation-mechanisms-title-intent-head)
-   [Examples](#navigation-mechanisms-title-examples-head)
-   [Related Resources](#navigation-mechanisms-title-resources-head)
-   [Techniques & Failures](#navigation-mechanisms-title-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="navigation-mechanisms-title"></span> **Page Titled**<span class="screenreader">:</span> Understanding SC 2.4.2
========================================================================================================================

> **[2.4.2](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-title) Page Titled:** <a href="#webpagedef" class="termref">Web pages</a> have titles that describe topic or purpose. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to help users find content and orient themselves within it by ensuring that each Web page has a descriptive title. Titles identify the current location without requiring users to read or interpret page content. When titles appear in site maps or lists of search results, users can more quickly identify the content they need. User agents make the title of the page easily available to the user for identifying the page. For instance, a user agent may display the page title in the window title bar or as the name of the tab containing the page.

In cases where the page is a document or a web application, the name of the document or web application would be sufficient to describe the purpose of the page. Note that it is not required to use the name of the document or web application; other things may also describe the purpose or the topic of the page.

<a href="navigation-mechanisms-refs.html" class="understanding-ref">Success Criteria 2.4.4</a> and <a href="navigation-mechanisms-link.html" class="understanding-ref">2.4.9</a> deal with the purpose of links, many of which are links to web pages. Here also, the name of a document or web application being linked to would be sufficient to describe the purpose of the link. Having the link and the title agree, or be very similar, is good practice and provides continuity between the link 'clicked on' and the web page that the user lands on.

### Specific Benefits of Success Criterion 2.4.2:

-   This criterion benefits all users in allowing users to quickly and easily identify whether the information contained in the Web page is relevant to their needs.

-   People with visual disabilities will benefit from being able to differentiate content when multiple Web pages are open.

-   People with cognitive disabilities, limited short-term memory and reading disabilities also benefit from the ability to identify content by its title.

-   This criterion also benefits people with severe mobility impairments whose mode of operation relies on audio when navigating between Web pages.

Examples of Success Criterion 2.4.2
-----------------------------------

-   **An HTML Web page**

    The descriptive title of an HTML Web page is marked up with the &lt;title&gt; element so that it will be displayed in the title bar of the user agent.

-   **A document collection.**

    The title of [Understanding WCAG 2.0](http://www.w3.org/TR/UNDERSTANDING-WCAG20/) is "Understanding WCAG 2.0."

    -   The introduction page has the title "Introduction to Understanding WCAG 2.0."

    -   Major sections of the document are pages titled "Understanding Guideline X" and "Understanding Success Criterion X."

    -   Appendix A has the title "Glossary."

    -   Appendix B has the title "Acknowledgements."

    -   Appendix C has the title "References."

-   **A Web application.**

    A banking application lets a user inspect his bank accounts, view past statements, and perform transactions. The Web application dynamically generates titles for each Web page, e.g., "Bank XYZ, accounts for John Smith" "Bank XYZ, December 2005 statement for Account 1234-5678".

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Writing Better Web Page Titles](http://www.socialpatterns.com/search-engine-optimization/writing-better-web-page-titles/) How to write titles for Web pages that will enhance search engine effectiveness.

-   [Guidelines for Accessible and Usable Web Sites: Observing Users Who Work With Screen Readers](http://redish.net/images/stories/PDF/interactions.html). Theofanos, M.F., and Redish, J. (2003). Interactions, Volume X, Issue 6, November-December 2003, pages 38-51, <http://dl.acm.org/citation.cfm?doid=947226.947227>

Techniques and Failures for Success Criterion 2.4.2 - Page Titled
-----------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G88" class="tech-ref">G88: Providing descriptive titles for Web pages</a> **AND** associating a title with a Web page using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H25" class="tech-ref">H25: Providing a title using the title element</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF18" class="tech-ref">PDF18: Specifying the document title using the Title entry in the document information dictionary of a PDF document</a> (PDF)

### Additional Techniques (Advisory) for 2.4.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G127" class="tech-ref">G127: Identifying a Web page's relationship to a larger collection of Web pages</a>

-   Identifying the subject of the Web page (future link)

-   Providing a meaningful name for identifying frames (future link)

-   Using unique titles for Web pages (future link)

-   Providing a descriptive top-level page heading (future link)

### Common Failures for SC 2.4.2

The following are common mistakes that are considered failures of Success Criterion 2.4.2 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F25" class="tech-ref">F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents</a>

Key Terms
---------

 <span id="webpagedef"></span> Web page  
a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agent</a>

*Note 1:* Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

*Note 2:* For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

*Example 1:* A Web resource including all embedded images and media.

*Example 2:* A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

*Example 3:* A customizable portal site, where users can choose content to display from a set of different content modules.

*Example 4:* When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.1 \[Bypass Blocks\]](navigation-mechanisms-skip.html "Understanding SC  2.4.1 [Bypass Blocks]")
-   [**Next:** SC 2.4.3 \[Focus Order\]](navigation-mechanisms-focus-order.html "Understanding SC  2.4.3 [Focus Order]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
