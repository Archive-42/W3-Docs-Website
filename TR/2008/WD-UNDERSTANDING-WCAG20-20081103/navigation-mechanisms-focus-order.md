[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.2 \[Page Titled\]](navigation-mechanisms-title.html "Understanding SC  2.4.2 [Page Titled]")
-   [**Next:** SC 2.4.4 \[Link Purpose (In Context)\]](navigation-mechanisms-refs.html "Understanding SC  2.4.4 [Link Purpose (In Context)]")

On this page:

-   [Intent](#navigation-mechanisms-focus-order-intent-head)
-   [Examples](#navigation-mechanisms-focus-order-examples-head)
-   [Related Resources](#navigation-mechanisms-focus-order-resources-head)
-   [Techniques & Failures](#navigation-mechanisms-focus-order-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="navigation-mechanisms-focus-order"></span> **Focus Order**<span class="screenreader">:</span> Understanding SC 2.4.3
==============================================================================================================================

> **[2.4.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-focus-order) Focus Order:** If a <a href="#webpagedef" class="termref">Web page</a> can be <a href="#nav-seqdef" class="termref">navigated sequentially</a> and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that when users navigate sequentially through content, they encounter information in an order that is consistent with the meaning of the content and can be operated from the keyboard. This reduces confusion by letting users form a consistent mental model of the content. There may be different orders that reflect logical relationships in the content. For example, move through components in a table one row at a time or one column at a time both reflect the logical relationships in the content. Either order may satisfy this Success Criterion.

The way that sequential navigation order is determined in Web content is defined by the technology of the content. For example, simple HTML defines sequential navigation via the notion of tabbing order. Dynamic HTML may modify the navigation sequence using scripting along with the addition of a tabindex attribute to allow focus to additional elements. If no scripting or tabindex attributes are used, the navigation order is the order that components appear in the content stream. (See HTML 4.01 Specification, section 17.11, "Giving focus to an element").

An example of keyboard navigation that is not the sequential navigation addressed by this Success Criterion is using arrow key navigation to traverse a tree component. The user can use the up and down arrow keys to move from tree node to tree node. Pressing the left arrow key may expand a node, then using the down arrow key, will move into the newly expanded nodes. This navigation sequence follows the expected sequence for a tree control - as additional items get expanded or collapsed, they are added or removed from the navigation sequence.

The focus order may not be identical to the programmatically determined reading order (see Success Criterion 1.3.2) as long as the user can still understand and operate the Web page. Since there may be several possible logical reading orders for the content, the focus order may match any of them. However, when the order of a particular presentation differs from the programmatically determined reading order, users of one of these presentations may find it difficult to understand or operate the Web page. Authors should carefully consider all these users as they design their Web pages.

For example, a screen reader user interacts with the programmatically determined reading order, while a sighted keyboard user interacts with the visual presentation of the Web page. Care should be taken so that the focus order makes sense to both of these sets of users and does not appear to either of them to jump around randomly.

### Specific Benefits of Success Criterion 2.4.3:

These techniques benefit keyboard users who navigate documents sequentially and expect the focus order to be consistent with the sequential reading order.

-   People with mobility impairments who must rely on keyboard access for operating a page benefit from a logical, usable focus order.

-   People with disabilities that make reading difficult can become disoriented when tabbing takes focus someplace unexpected. They benefit from a logical focus order.

-   People with visual impairments can become disoriented when tabbing takes focus someplace unexpected or when they cannot easily find the content surrounding an interactive element.

-   Only a small portion of the page may be visible to an individual using a screen magnifier at a high level of magnification. Such a user may interpret a field in the wrong context if the focus order is not logical.

Examples of Success Criterion 2.4.3
-----------------------------------

1.  The way that sequential navigation order is determined in Web content is defined by the technology of the content. For example, simple HTML defines sequential navigation via the notion of tabbing order. Dynamic HTML may modify the navigation sequence using scripting along with the addition of a tabindex attribute to allow focus to additional elements. In this case, the navigation should follow relationships and sequences in the content. If no scripting or tabindex attributes are used, the navigation order is the order that components appear in the content stream. (See HTML 4.01 Specification, section 17.11, "Giving focus to an element").

2.  Using arrow key navigation to traverse a tree component. The user can use the up and down arrow keys to move from tree node to tree node. Pressing the left arrow key may expand a node, then using the down arrow key, will move into the newly expanded nodes. This navigation sequence follows the expected sequence for a tree control - as additional items get expanded or collapsed, they are added or removed from the navigation sequence.

3.  A Web page implements modeless dialogs via scripting. When the trigger button is activated, a dialog opens. The interactive elements in the dialog are inserted in the focus order immediately after the button. When the dialog is open, the focus order goes from the button to the elements of the dialog, then to the interactive element following the button. When the dialog is closed, the focus order goes from the button to the following element.

4.  A Web page implements modal dialogs via scripting. When the trigger button is activated, a dialog opens and focus is set to the first interactive element in the dialog. As long as the dialog is open, focus is limited to the elements of the dialog. When the dialog is dismissed, focus returns to the button or the element following the button.

5.  An HTML Web page is created with the left hand navigation occurring in the HTML after the main body content, and styled with CSS to appear on the left hand side of the page. This is done to allow focus to move to the main body content first without requiring tabIndex attributes or JavaScript.

    Note: While this example passes the Success Criterion, it is not necessarily true that all CSS positioning would. More complex positioning examples may or may not preserve meaning and operability

6.  The following example **fails to meet the Success Criterion**:

    A company's Web site includes a form that collects marketing data and allows users to subscribe to several newsletters published by the company. The section of the form for collecting marketing data includes fields such as name, street address, city, state or province, and postal code. Another section of the form includes several checkboxes so that users can indicate newsletters they want to receive. However, the tab order for the form skips between fields in different sections of the form, so that focus moves from the name field to a checkbox, then to the street address, then to another checkbox.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 2.4.3 - Focus Order
-----------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G59)

2.  Giving focus to elements in an order that follows sequences and relationships within the content using one of the following techniques:

    -   [H4: Creating a logical tab order through links, form controls, and objects](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H4) (HTML)

    -   [C27: Making the DOM order match the visual order](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C27) (CSS)

3.  Changing a Web page dynamically using one of the following techniques:

    -   [SCR26: Inserting dynamic content into the Document Object Model immediately following its trigger element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR26) (Scripting)

    -   [SCR37: Creating Custom Dialogs in a Device Independent Way](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR37) (Scripting)

    -   [SCR27: Reordering page sections using the Document Object Model](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR27) (Scripting)

### Additional Techniques (Advisory) for 2.4.3

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Providing a highly visible highlighting mechanism for links or controls when they receive keyboard focus (future link)

-   Creating alternative presentation orders (future link)

### Common Failures for SC 2.4.3

The following are common mistakes that are considered failures of Success Criterion 2.4.3 by the WCAG Working Group.

-   [F44: Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F44)

-   [F85: Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F85)

Key Terms
---------

 <span id="nav-seqdef"></span> navigated sequentially  
navigated in the order defined for advancing focus (from one element to the next) using a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#keybrd-interfacedef" class="termref">keyboard interface</a>

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
-   [**Previous:** SC 2.4.2 \[Page Titled\]](navigation-mechanisms-title.html "Understanding SC  2.4.2 [Page Titled]")
-   [**Next:** SC 2.4.4 \[Link Purpose (In Context)\]](navigation-mechanisms-refs.html "Understanding SC  2.4.4 [Link Purpose (In Context)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
