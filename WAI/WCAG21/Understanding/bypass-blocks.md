-   [Contents](. "Table of Contents")
-   [GL: Navigable](navigable)
-   [Previous SC: Animation from Interactions](animation-from-interactions)
-   [Next SC: Page Titled](page-titled)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.4.1: Bypass Blocks
====================================================

> Success Criterion [2.4.1 Bypass Blocks](https://www.w3.org/TR/WCAG21/#bypass-blocks) (Level A): A [mechanism](#dfn-mechanism) is available to bypass blocks of content that are repeated on multiple [Web pages](#dfn-web-page).

Intent
------

The intent of this Success Criterion is to allow people who navigate sequentially through content more direct access to the primary content of the Web page. Web pages and applications often have content that appears on other pages or screens. Examples of repeated blocks of content include but are not limited to navigation links, heading graphics, and advertising frames. Small repeated sections such as individual words, phrases or single links are not considered blocks for the purposes of this provision.

This is in contrast to a sighted user's ability to ignore the repeated material either by focusing on the center of the screen (where main content usually appears) or a mouse user's ability to select a link with a single mouse click rather than encountering every link or form control that comes before the item they want.

It is not the intent of this Success Criterion to require authors to provide methods that are redundant to functionality provided by the user agent. Most web browsers provide keyboard shortcuts to move the user focus to the top of the page, so if a set of navigation links is provided at the bottom of a web page providing a "skip" link may be unnecessary.

Note

Although this Success Criterion deals with blocks of content that are repeated on multiple pages, we also strongly promote structural markup on individual pages as per Success Criteria 1.3.1.

Although the success criterion does not specifically use the term “within a set of web pages”, the concept of the pages belonging to a set is implied. An author would not be expected to avoid any possible duplication of content in any two pages that are not in some way related to each other; that are not "Web pages that share a common purpose and that are created by the same author, group or organization” (the definition of set of web pages).

Note

Even for web pages that are not in a set, if a web page has blocks of text that are repeated within the page it may be helpful (but not required) to provide a means to skip over them.

Benefits
--------

When this Success Criterion is not satisfied, it may be difficult for people with some disabilities to reach the main content of a Web page quickly and easily:

-   Screen reader users who visit several pages on the same site can avoid having to hear all heading graphics and dozens of navigation links on every page before the main content is spoken.
-   People who use only the keyboard or a keyboard interface can reach content with fewer keystrokes. Otherwise, they might have to make dozens of keystrokes before reaching a link in the main content area. This can take a long time and may cause severe physical pain for some users.
-   People who use screen magnifiers do not have to search through the same headings or other blocks of information to find where the content begins each time they enter a new page.
-   People with cognitive limitations as well as people who use screen readers may benefit when links are grouped into lists

Examples
--------

-   A news organization's home page contains a main story in the middle of the page, surrounded by many blocks and sidebars for advertising, searching, and other services. There is a link at the top of the page that jumps to the main story. Without using this link, a keyboard user needs to tab through approximately 40 links to reach the main story; the screen reader user has to listen to 200 words; and the screen magnifier user must search around for the location of the main body.
-   An e-commerce website includes a long list of filters prior to the search results listing. A link above the list enables users to skip the filters and get to the product results quickly.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [WebAIM: Semantic Structure](http://webaim.org/techniques/semanticstructure/)
-   [Heading Tags](http://accessibility.psu.edu/headingshtml/)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  Creating links to skip blocks of repeated material using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G1" class="general">G1: Adding a link at the top of each page that goes directly to the main content area</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G123" class="general">G123: Adding a link at the beginning of a block of repeated content to go to the end of the block</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G124" class="general">G124: Adding links at the top of the page to each area of the content</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL25" class="silverlight">SL25: Using Controls and Programmatic Focus to Bypass Blocks of Content in Silverlight</a>

2.  Grouping blocks of repeated material in a way that can be skipped, using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11" class="aria">ARIA11: Using ARIA landmarks to identify regions of a page</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H69" class="html">H69: Providing heading elements at the beginning of each section of content</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF9" class="pdf">PDF9: Providing headings by marking content with heading tags in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H70" class="html">H70: Using frame elements to group blocks of repeated material</a> **AND** <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H64" class="html">H64: Using the title attribute of the frame and iframe elements</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28" class="script">SCR28: Using an expandable and collapsible menu to bypass block of content</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL29" class="silverlight">SL29: Using Silverlight "List" Controls to Define Blocks that can be Bypassed</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C6" class="css">C6: Positioning content based on structural markup</a>

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

conformance

satisfying all the requirements of a given standard, guideline or specification

mechanism

[process](#dfn-process) or technique for achieving a result

Note

The mechanism may be explicitly provided in the content, or may be [relied upon](#dfn-relied-upon) to be provided by either the platform or by [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology).

Note

The mechanism needs to meet all success criteria for the conformance level claimed.

process

series of user actions where each action is required in order to complete an activity

Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

An account registration page requires successful completion of a Turing test before the registration form can be accessed.

relied upon

the content would not [conform](#dfn-conformance) if that [technology](#dfn-technology) is turned off or is not supported

technology

[mechanism](#dfn-mechanism) for encoding instructions to be rendered, played or executed by [user agents](#dfn-user-agent)

Note

As used in these guidelines "Web Technology" and the word "technology" (when used alone) both refer to Web Content Technologies.

Note

Web content technologies may include markup languages, data formats, or programming languages that authors may use alone or in combination to create end-user experiences that range from static Web pages to synchronized media presentations to dynamic Web applications.

Some common examples of Web content technologies include HTML, CSS, SVG, PNG, PDF, Flash, and JavaScript.

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
