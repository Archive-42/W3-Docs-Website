[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.4 \[Link Purpose (In Context)\]](navigation-mechanisms-refs.html "Understanding SC  2.4.4 [Link Purpose (In Context)]")
-   [**Next:** SC 2.4.6 \[Headings and Labels\]](navigation-mechanisms-descriptive.html "Understanding SC  2.4.6 [Headings and Labels]")

On this page:

-   [Intent](#navigation-mechanisms-mult-loc-intent-head)
-   [Examples](#navigation-mechanisms-mult-loc-examples-head)
-   [Related Resources](#navigation-mechanisms-mult-loc-resources-head)
-   [Techniques & Failures](#navigation-mechanisms-mult-loc-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="navigation-mechanisms-mult-loc"></span> **Multiple Ways**<span class="screenreader">:</span> Understanding SC 2.4.5
=============================================================================================================================

> **[2.4.5](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-mult-loc) Multiple Ways:** More than one way is available to locate a <a href="#webpagedef" class="termref">Web page</a> within a <a href="#set-of-web-pagesdef" class="termref">set of Web pages</a> except where the Web Page is the result of, or a step in, a <a href="#processdef" class="termref">process</a>. (Level AA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to make it possible for users to locate content in a manner that best meets their needs. Users may find one technique easier or more comprehensible to use than another.

Even small sites should provide users some means of orientation. For a three or four page site, with all pages linked from the home page, it may be sufficient simply to provide links from and to the home page where the links on the home page can also serve as a site map.

### Specific Benefits of Success Criterion 2.4.5:

-   Providing an opportunity to navigate sites in more than one manner can help people find information faster. Users with visual impairments may find it easier to navigate to the correct part of the site by using a search, rather than scrolling through a large navigation bar using a screen magnifier or screen reader. A person with cognitive disabilities may prefer a table of contents or site map that provides an overview of the site rather than reading and traversing through several Web pages. Some users may prefer to explore the site in a sequential manner, moving from Web page to Web page in order to best understand the concepts and layout.

-   Individuals with cognitive limitations may find it easier to use search features than to use a hierarchical navigation scheme that be difficult to understand.

Examples of Success Criterion 2.4.5
-----------------------------------

-   **A search mechanism.**

    A large food processing company provides a site containing recipes created using its products. The site provides a search mechanism to search for recipes using a particular ingredient. In addition, it provides a list box that lists several categories of foods. A user may type "soup" in to the search engine or may select "soup" from the list box to go to a page with a list of recipes made from the company's soup products

-   **Links between Web pages.**

    A local hair salon has created a Web site to promote its services. The site contains only five Web pages. There are links on each Web page to sequentially move forward or backward through the Web pages. In addition, each Web page contains a list of links to reach each of the other Web pages.

-   **Where content is a result of a process or task - Funds transfer confirmation.**

    An on-line banking site allows fund transfer between accounts via the Web. There is no other way to locate the confirmation of fund transfer until the account owner completes the transfer.

-   **Where content is a result of a process or task - Search engine results.**

    A search engine provides the search results based on user input. There is no other way to locate the search results except to perform the search process itself.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 2.4.5 - Multiple Ways
-------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  Using two or more of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G125" class="tech-ref">G125: Providing links to navigate to related Web pages</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G64" class="tech-ref">G64: Providing a Table of Contents</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF2" class="tech-ref">PDF2: Creating bookmarks in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G63" class="tech-ref">G63: Providing a site map</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G161" class="tech-ref">G161: Providing a search function to help users find content</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G126" class="tech-ref">G126: Providing a list of links to all other Web pages</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G185" class="tech-ref">G185: Linking to all of the pages on the site from the home page</a>

### Additional Techniques (Advisory) for 2.4.5

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H59" class="tech-ref">H59: Using the link element and navigation tools</a> (HTML)

-   Including information about presentation modes in tables of contents and concept maps (future link)

### Common Failures for SC 2.4.5

The following are common mistakes that are considered failures of Success Criterion 2.4.5 by the WCAG Working Group.

(No failures currently documented)

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

 <span id="processdef"></span> process  
series of user actions where each action is required in order to complete an activity

*Example 1:* Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

*Example 2:* An account registration page requires successful completion of a Turing test before the registration form can be accessed.

 <span id="set-of-web-pagesdef"></span> set of Web pages  
collection of <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#webpagedef" class="termref">Web pages</a> that share a common purpose and that are created by the same author, group or organization

*Note:* Different language versions would be considered different sets of Web pages.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.4 \[Link Purpose (In Context)\]](navigation-mechanisms-refs.html "Understanding SC  2.4.4 [Link Purpose (In Context)]")
-   [**Next:** SC 2.4.6 \[Headings and Labels\]](navigation-mechanisms-descriptive.html "Understanding SC  2.4.6 [Headings and Labels]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
