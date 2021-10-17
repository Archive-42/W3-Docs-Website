-   [Contents](. "Table of Contents")
-   [GL: Navigable](navigable)
-   [Previous SC: Focus Visible](focus-visible)
-   [Next SC: Link Purpose (Link Only)](link-purpose-link-only)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.4.8: Location
===============================================

> Success Criterion [2.4.8 Location](https://www.w3.org/TR/WCAG21/#location) (Level AAA): Information about the user's location within a [set of Web pages](#dfn-set-of-web-pages) is available.

Intent
------

The intent of this Success Criterion is to provide a way for the user to orient herself within a set of Web pages, a Web site, or a Web application and find related information.

Benefits
--------

-   This Success Criterion is helpful for people with a short attention span who may become confused when following a long series of navigation steps to a Web page. It is also helpful when a user follows a link directly to a page deep within a set of Web pages and needs to navigate that Web site to understand the content of that page or to find more related information.

Examples
--------

-   **Links to help user determine their location in a site**

    A research group is part of an educational department at a university. The group's home page links to the department home page and the university's home page.

-   **A breadcrumb trail**

    A portal Web site organizes topics into categories. As the user navigates through categories and subcategories, a breadcrumb trail shows the current location in the hierarchy of categories. Each page also contains a link to the portal home page.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [The Sound of the Accessible Title Tag Separator](http://www.standards-schmandards.com/2004/title-text-separators/)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G65" class="general">G65: Providing a breadcrumb trail</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G63" class="general">G63: Providing a site map</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G128" class="general">G128: Indicating current location within navigation bars</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G127" class="general">G127: Identifying a Web page's relationship to a larger collection of Web pages</a> using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H59" class="html">H59: Using the link element and navigation tools</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF14" class="pdf">PDF14: Providing running headers and footers in PDF documents</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF17" class="pdf">PDF17: Specifying consistent page numbering for PDF documents</a>

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

set of web pages

collection of [web pages](#dfn-web-page) that share a common purpose and that are created by the same author, group or organization

Examples include a publication which is split across multiple Web pages, where each page contains one chapter or other significant section of the work. The publication is logically a single contiguous unit, and contains navigation features that enable access to the full set of pages.

Note

Different language versions would be considered different sets of Web pages.

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
