-   [Contents](. "Table of Contents")
-   [GL: Navigable](navigable)
-   [Previous SC: Bypass Blocks](bypass-blocks)
-   [Next SC: Focus Order](focus-order)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Test Rules](#test-rules)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.4.2: Page Titled
==================================================

> Success Criterion [2.4.2 Page Titled](https://www.w3.org/TR/WCAG21/#page-titled) (Level A): [Web pages](#dfn-web-page) have titles that describe topic or purpose.

Intent
------

The intent of this Success Criterion is to help users find content and orient themselves within it by ensuring that each Web page has a descriptive title. Titles identify the current location without requiring users to read or interpret page content. When titles appear in site maps or lists of search results, users can more quickly identify the content they need. User agents make the title of the page easily available to the user for identifying the page. For instance, a user agent may display the page title in the window title bar or as the name of the tab containing the page.

In cases where the page is a document or a web application, the name of the document or web application would be sufficient to describe the purpose of the page. Note that it is not required to use the name of the document or web application; other things may also describe the purpose or the topic of the page.

<a href="link-purpose-in-context" class="understanding">Success Criteria 2.4.4</a> and <a href="link-purpose-link-only" class="understanding">2.4.9</a> deal with the purpose of links, many of which are links to web pages. Here also, the name of a document or web application being linked to would be sufficient to describe the purpose of the link. Having the link and the title agree, or be very similar, is good practice and provides continuity between the link 'clicked on' and the web page that the user lands on.

Benefits
--------

-   This criterion benefits all users in allowing users to quickly and easily identify whether the information contained in the Web page is relevant to their needs.
-   People with visual disabilities will benefit from being able to differentiate content when multiple Web pages are open.
-   People with cognitive disabilities, limited short-term memory and reading disabilities also benefit from the ability to identify content by its title.
-   This criterion also benefits people with severe mobility impairments whose mode of operation relies on audio when navigating between Web pages.

Examples
--------

-   **An HTML Web page**

    The descriptive title of an HTML Web page is marked up with the &lt;title&gt; element so that it will be displayed in the title bar of the user agent.

-   **A document collection.**

    The title of [Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/) is "Understanding WCAG 2.1."

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
-   [Guidelines for Accessible and Usable Web Sites: Observing Users Who Work With Screen Readers](http://redish.net/images/stories/PDF/interactions.html) . Theofanos, M.F., and Redish, J. (2003). Interactions, Volume X, Issue 6, November-December 2003, pages 38-51, <http://dl.acm.org/citation.cfm?doid=947226.947227>

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G88" class="general">G88: Providing descriptive titles for Web pages</a> **AND** associating a title with a Web page using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H25" class="html">H25: Providing a title using the title element</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF18" class="pdf">PDF18: Specifying the document title using the Title entry in the document information dictionary of a PDF document</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G127" class="general">G127: Identifying a Web page's relationship to a larger collection of Web pages</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F25" class="failure">F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents</a>

Test Rules
----------

The following are Test Rules for certain aspects of this Success Criterion. It is not necessary to use these particular Test Rules to check for conformance with WCAG, but they are defined and approved test methods. For information on using Test Rules, see [Understanding Test Rules for WCAG Success Criteria](understanding-act-rules.html).

-   [HTML page has non-empty title](/WAI/standards-guidelines/act/rules/html-page-non-empty-title-2779a5/)

Key Terms
---------

assistive technology

hardware and/or software that acts as a [user agent](#dfn-user-agent), or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

Note

functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

Note

Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

Note

The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

Assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;
-   screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;
-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;
-   speech recognition software, which may be used by people who have some physical disabilities;
-   alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);
-   alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.

web page

a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a [user agent](#dfn-user-agent)

Note

Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

Note

For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

A Web resource including all embedded images and media.

A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

A customizable portal site, where users can choose content to display from a set of different content modules.

When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.
