[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.2.3 \[Consistent Navigation\]](consistent-behavior-consistent-locations.html "Understanding SC  3.2.3 [Consistent Navigation]")
-   [**Next:** SC 3.2.5 \[Change on Request\]](consistent-behavior-no-extreme-changes-context.html "Understanding SC  3.2.5 [Change on Request]")

On this page:

-   [Intent](#consistent-behavior-consistent-functionality-intent-head)
-   [Examples](#consistent-behavior-consistent-functionality-examples-head)
-   [Techniques & Failures](#consistent-behavior-consistent-functionality-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="consistent-behavior-consistent-functionality"></span> **Consistent Identification**<span class="screenreader">:</span> Understanding SC 3.2.4
=======================================================================================================================================================

> **[3.2.4](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#consistent-behavior-consistent-functionality) Consistent Identification:** Components that have the <a href="#samefunctionalitydef" class="termref">same functionality</a> within a set of <a href="#webpagedef" class="termref">Web pages</a> are identified consistently. (Level AA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure consistent identification of functional components that appear repeatedly within a set of Web pages. A strategy that people who use screen readers use when operating a Web site is to rely heavily on their familiarity with functions that may appear on different Web pages. If identical functions have different labels on different Web pages, the site will be considerably more difficult to use. It may also be confusing and increase the cognitive load for people with cognitive limitations. Therefore, consistent labeling will help.

This consistency extends to the text alternatives. If icons or other non-text items have the same functionality, then their text alternatives should be consistent as well.

### Specific Benefits of Success Criterion 3.2.4:

-   People who learn functionality on one page on a site can find the desired functions on other pages if they are present.

-   When non-text content is used in a consistent way to identify components with the same functionality, people with difficulty reading text or detecting text alternatives can interact with the Web without depending on text alternatives.

-   People who depend on text alternatives can have a more predictable experience. They can also search for the component if it has a consistent label on different pages.

Examples of Success Criterion 3.2.4
-----------------------------------

-   **Example 1: Document Icon**

    A document icon is used to indicate document download throughout a site. The text alternative for the icon always begins with the word “Download," followed by a shortened form of the document title. Using different text alternatives to identify document names for different documents is a consistent use of text alternatives.

-   **Example 2: Check Mark**

    A check mark icon functions as "approved", on one page but as "included" on another. Since they serve different functions, they have different text alternatives.

-   **Example 3: Consistent references to other pages**

    A Web site publishes articles on-line. Each article spans multiple Web pages and each page contains a link to the first page, the next page and the previous page of the article. If the references to the next page read "page 1", "page 2", "page 2" etcetera, the labels are not the same but they are consistent. Therefore, these references are not failures of this Success Criterion.

-   **Example 4: Icons with similar functions**

    An e-commerce application uses a printer icon that allows the user to print receipts and invoices. In one part of the application, the printer icon is labeled "Print receipt" and is used to print receipts, while in another part it is labeled "Print invoice" and is used to print invoices. The labeling is consistent ("Print x"), but the labels are different to reflect the different functions of the icons. Therefore, this example does not fail the Success Criterion.

-   **Example 5: Save icon**

    A common "save" icon is used through out the site where page save function is provided on multiple Web pages.

-   **Example 6: Example of a Failure**

    A submit "search" button on one Web page and a "find" button on another Web page both have a field to enter a term and list topics in the Web site related to the term submitted. In this case, the buttons have the same functionality but are not labeled consistently.

Techniques and Failures for Success Criterion 3.2.4 - Consistent Identification
-------------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G197: Using labels, names, and text alternatives consistently for content that has the same functionality](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G197) **AND** following the [sufficient techniques for Success Criterion 1.1.1](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/text-equiv-all.html#text-equiv-all-techniques-head) and [sufficient techniques for Success Criterion 4.1.2](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/ensure-compat-rsv.html#ensure-compat-rsv-techniques-head) for providing labels, names, and text alternatives.

Note 1: Text alternatives that are "consistent" are not always "identical." For instance, you may have an graphical arrow at the bottom of a Web page that links to the next Web page. The text alternative may say "Go to page 4." Naturally, it would not be appropriate to repeat this exact text alternative on the next Web page. It would be more appropriate to say "Go to page 5". Although these text alternatives would not be identical, they would be consistent, and therefore would satisfy this Success Criterion.

Note 2: A single non-text-content-item may be used to serve different functions. In such cases, different text alternatives are necessary and should be used. Examples can be commonly found with the use of icons such as check marks, cross marks, and traffic signs. Their functions can be different depending on the context of the Web page. A check mark icon may function as "approved", "completed", or "included", to name a few, depending on the situation. Using "check mark" as text alternative across all Web pages does not help users understand the function of the icon. Different text alternatives can be used when the same non-text content serves multiple functions.

### Additional Techniques (Advisory) for 3.2.4

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Ensuring that the text alternative conveys the function of the component and what will happen when the user activates it (future link)

-   Using the same non-text content for a given function whenever possible (future link)

### Common Failures for SC 3.2.4

The following are common mistakes that are considered failures of Success Criterion 3.2.4 by the WCAG Working Group.

-   [F31: Failure of Success Criterion 3.2.4 due to using two different labels for the same function on different Web pages within a set of Web pages](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F31)

Key Terms
---------

 <span id="samefunctionalitydef"></span> same functionality   
same result when used

Example: A submit "search" button on one Web page and a "find" button on another Web page may both have a field to enter a term and list topics in the Web site related to the term submitted. In this case, they would have the same functionality but would not be labeled consistently.

 <span id="webpagedef"></span> Web page  
a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#useragentdef" class="termref">user agent</a>

Note 1: Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

Note 2: For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

Example 1: A Web resource including all embedded images and media.

Example 2: A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

Example 3: A customizable portal site, where users can choose content to display from a set of different content modules.

Example 4: When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.2.3 \[Consistent Navigation\]](consistent-behavior-consistent-locations.html "Understanding SC  3.2.3 [Consistent Navigation]")
-   [**Next:** SC 3.2.5 \[Change on Request\]](consistent-behavior-no-extreme-changes-context.html "Understanding SC  3.2.5 [Change on Request]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
