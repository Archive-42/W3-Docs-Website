[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.2.2 \[On Input\]](consistent-behavior-unpredictable-change.html "Understanding SC  3.2.2 [On Input]")
-   [**Next:** SC 3.2.4 \[Consistent Identification\]](consistent-behavior-consistent-functionality.html "Understanding SC  3.2.4 [Consistent Identification]")

On this page:

-   [Intent](#consistent-behavior-consistent-locations-intent-head)
-   [Examples](#consistent-behavior-consistent-locations-examples-head)
-   [Related Resources](#consistent-behavior-consistent-locations-resources-head)
-   [Techniques & Failures](#consistent-behavior-consistent-locations-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="consistent-behavior-consistent-locations"></span> **Consistent Navigation**<span class="screenreader">:</span> Understanding SC 3.2.3
===============================================================================================================================================

> **[3.2.3](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-consistent-locations) Consistent Navigation:** Navigational mechanisms that are repeated on multiple <a href="#webpagedef" class="termref">Web pages</a> within a <a href="#set-of-web-pagesdef" class="termref">set of Web pages</a> occur in the <a href="#samerelorderdef" class="termref">same relative order</a> each time they are repeated, unless a change is initiated by the user. (Level AA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to encourage the use of consistent presentation and layout for users who interact with repeated content within a set of Web pages and need to locate specific information or functionality more than once. Individuals with low vision who use screen magnification to display a small portion of the screen at a time often use visual cues and page boundaries to quickly locate repeated content. Presenting repeated content in the same order is also important for visual users who use spatial memory or visual cues within the design to locate repeated content.

It is important to note that the use of the phrase "same order" in this section is not meant to imply that subnavigation menus cannot be used or that blocks of secondary navigation or page structure cannot be used. Instead, this Success Criterion is intended to assist users who interact with repeated content across Web pages to be able to predict the location of the content they are looking for and find it more quickly when they encounter it again.

Users may initiate a change in the order by using adaptive user agents or by setting preferences so that the information is presented in a way that is most useful to them.

### Specific Benefits of Success Criterion 3.2.3:

-   Ensuring that repeated components occur in the same order on each page of a site helps users become comfortable that they will able to predict where they can find things on each page. This helps users with **cognitive limitations**, users with **low vision**, users with **intellectual disabilities**, and also those who are **blind**.

Examples of Success Criterion 3.2.3
-----------------------------------

-   **A consistently located control**

    A search field is the last item on every Web page in a site. users can quickly locate the search function.

-   **An expanding navigation menu**

    A navigation menu includes a list of seven items with links to the main sections of a site. When a user selects one of these items, a list of subnavigation items is inserted into the top-level navigation menu.

-   **Consistently positioned skip navigation controls**

    A "skip navigation" (or "skip to main content") link is included as the first link on every page in a Web site. The link allows users to quickly bypass heading information and navigational content and begin interacting with the main content of a page.

-   **Skip to navigation link**

    Navigational content is consistently located at the end of each page in a set of Web pages. A "skip to navigation" link is consistently located at the beginning of each page so that keyboard users can easily locate it when needed.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   Detweiler, M.C. and Omanson, R.C. (1996), Ameritech Web Page User Interface Standards and Design Guidelines.

-   [Understanding disability issues when designing Web sites](http://www-03.ibm.com/able/access_ibm/disability.html).

Techniques and Failures for Success Criterion 3.2.3 - Consistent Navigation
---------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G61" class="tech-ref">G61: Presenting repeated components in the same relative order each time they appear</a>

### Additional Techniques (Advisory) for 3.2.3

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF14" class="tech-ref">PDF14: Providing running headers and footers in PDF documents</a> (PDF)

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF17" class="tech-ref">PDF17: Specifying consistent page numbering for PDF documents</a> (PDF)

-   Using templates to ensure consistency across multiple Web pages (future link)

-   Creating layout, positioning, layering, and alignment (future link)

### Common Failures for SC 3.2.3

The following are common mistakes that are considered failures of Success Criterion 3.2.3 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F66" class="tech-ref">F66: Failure of Success Criterion 3.2.3 due to presenting navigation links in a different relative order on different pages</a>

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

 <span id="samerelorderdef"></span> same relative order  
same position relative to other items

*Note:* Items are considered to be in the same relative order even if other items are inserted or removed from the original order. For example, expanding navigation menus may insert an additional level of detail or a secondary navigation section may be inserted into the reading order.

 <span id="set-of-web-pagesdef"></span> set of Web pages  
collection of <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#webpagedef" class="termref">Web pages</a> that share a common purpose and that are created by the same author, group or organization

*Note:* Different language versions would be considered different sets of Web pages.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.2.2 \[On Input\]](consistent-behavior-unpredictable-change.html "Understanding SC  3.2.2 [On Input]")
-   [**Next:** SC 3.2.4 \[Consistent Identification\]](consistent-behavior-consistent-functionality.html "Understanding SC  3.2.4 [Consistent Identification]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
