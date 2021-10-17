-   [Contents](. "Table of Contents")
-   [GL: Navigable](navigable)
-   [Previous SC: Link Purpose (In Context)](link-purpose-in-context)
-   [Next SC: Headings and Labels](headings-and-labels)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.4.5: Multiple Ways
====================================================

> Success Criterion [2.4.5 Multiple Ways](https://www.w3.org/TR/WCAG21/#multiple-ways) (Level AA): More than one way is available to locate a [Web page](#dfn-web-page) within a [set of Web pages](#dfn-set-of-web-pages) except where the Web Page is the result of, or a step in, a [process](#dfn-process).

Intent
------

The intent of this Success Criterion is to make it possible for users to locate content in a manner that best meets their needs. Users may find one technique easier or more comprehensible to use than another.

Even small sites should provide users some means of orientation. For a three or four page site, with all pages linked from the home page, it may be sufficient simply to provide links from and to the home page where the links on the home page can also serve as a site map.

Benefits
--------

-   Providing an opportunity to navigate sites in more than one manner can help people find information faster. Users with visual impairments may find it easier to navigate to the correct part of the site by using a search, rather than scrolling through a large navigation bar using a screen magnifier or screen reader. A person with cognitive disabilities may prefer a table of contents or site map that provides an overview of the site rather than reading and traversing through several Web pages. Some users may prefer to explore the site in a sequential manner, moving from Web page to Web page in order to best understand the concepts and layout.
-   Individuals with cognitive limitations may find it easier to use search features than to use a hierarchical navigation scheme that is difficult to understand.

Examples
--------

-   **A search mechanism.**

    A large food processing company provides a site containing recipes created using its products. The site provides a search mechanism to search for recipes using a particular ingredient. In addition, it provides a list box that lists several categories of foods. A user may type "soup" in to the search engine or may select "soup" from the list box to go to a page with a list of recipes made from the company's soup products

-   **Links between Web pages.**

    A local hair salon has created a Web site to promote its services. The site contains only five Web pages. There are links on each Web page to sequentially move forward or backward through the Web pages. In addition, each Web page contains a list of links to reach each of the other Web pages.

-   **Where content is a result of a process or task - Funds transfer confirmation.**

    An on-line banking site allows fund transfer between accounts via the Web. There is no other way to locate the confirmation of fund transfer until the account owner completes the transfer.

-   **Where content is a result of a process or task - Search engine results.**

    A search engine provides the search results based on user input. There is no other way to locate the search results except to perform the search process itself.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  Using two or more of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G125" class="general">G125: Providing links to navigate to related Web pages</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G64" class="general">G64: Providing a Table of Contents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF2" class="pdf">PDF2: Creating bookmarks in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G63" class="general">G63: Providing a site map</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G161" class="general">G161: Providing a search function to help users find content</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G126" class="general">G126: Providing a list of links to all other Web pages</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G185" class="general">G185: Linking to all of the pages on the site from the home page</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H59" class="html">H59: Using the link element and navigation tools</a>

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

process

series of user actions where each action is required in order to complete an activity

Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

An account registration page requires successful completion of a Turing test before the registration form can be accessed.

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
