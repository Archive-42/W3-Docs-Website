[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 2.4 \[Navigable\]](navigation-mechanisms.html "Understanding Guideline  2.4 [Navigable]")
-   [**Next:** SC 2.4.2 \[Page Titled\]](navigation-mechanisms-title.html "Understanding SC  2.4.2 [Page Titled]")

On this page:

-   [Intent](#navigation-mechanisms-skip-intent-head)
-   [Examples](#navigation-mechanisms-skip-examples-head)
-   [Related Resources](#navigation-mechanisms-skip-resources-head)
-   [Techniques & Failures](#navigation-mechanisms-skip-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="navigation-mechanisms-skip"></span> **Bypass Blocks**<span class="screenreader">:</span> Understanding SC 2.4.1
=========================================================================================================================

> **[2.4.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-skip) Bypass Blocks:** A <a href="#mechanismdef" class="termref">mechanism</a> is available to bypass blocks of content that are repeated on multiple <a href="#webpagedef" class="termref">Web pages</a>. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to allow people who navigate sequentially through content more direct access to the primary content of the Web page. Web pages and applications often have content that appears on other pages or screens. Examples of repeated blocks of content include but are not limited to navigation links, heading graphics, and advertising frames. Small repeated sections such as individual words, phrases or single links are not considered blocks for the purposes of this provision.

This is in contrast to a sighted user's ability to ignore the repeated material either by focusing on the center of the screen (where main content usually appears) or a mouse user's ability to select a link with a single mouse click rather than encountering every link or form control that comes before the item they want.

It is not the intent of this Success Criterion to require authors to provide methods that are redundant to functionality provided by the user agent. Most web browsers provide keyboard shortcuts to move the user focus to the top of the page, so if a set of navigation links is provided at the bottom of a web page providing a "skip" link may be unnecessary.

Note 1: Although this Success Criteria deals with blocks of content that are repeated on multiple pages, we also strongly promote structural markup on individual pages as per Success Criteria 1.3.1.

Note 2:

### Specific Benefits of Success Criterion 2.4.1:

-   When this Success Criterion is not satisfied, it may be difficult for people with some disabilities to reach the main content of a Web page quickly and easily.

-   Screen reader users who visit several pages on the same site can avoid having to hear all heading graphics and dozens of navigation links on every page before the main content is spoken.

-   People who use only the keyboard or a keyboard interface can reach content with fewer keystrokes. Otherwise, they might have to make dozens of keystrokes before reaching a link in the main content area. This can take a long time and may cause severe physical pain for some users.

-   People who use screen magnifiers do not have to search through the same headings or other blocks of information to find where the content begins each time they enter a new page.

-   People with cognitive limitations as well as people who use screen readers may benefit when links are grouped into lists

Examples of Success Criterion 2.4.1
-----------------------------------

-   A news organization's home page contains a main story in the middle of the page, surrounded by many blocks and sidebars for advertising, searching, and other services. There is a link at the top of the page that jumps to the main story. Without using this link, a keyboard user needs to tab through approximately 40 links to reach the main story; the screen reader user has to listen to 200 words; and the screen magnifier user must search around for the location of the main body.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Quick tips for accessible headings](http://www.rnib.org.uk/wacblog/headings/quick-tips-for-accessible-headings/)

Techniques and Failures for Success Criterion 2.4.1 - Bypass Blocks
-------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  Creating links to skip blocks of repeated material using one of the following techniques:

    -   [G1: Adding a link at the top of each page that goes directly to the main content area](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G1)

    -   [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G123)

    -   [G124: Adding links at the top of the page to each area of the content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G124)

2.  Grouping blocks of repeated material in a way that can be skipped, using one of the following techniques:

    -   [H69: Providing heading elements at the beginning of each section of content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H69) (HTML)

    -   [H50: Using structural elements to group links](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H50) (HTML)

    -   [H70: Using frame elements to group blocks of repeated material](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H70) (HTML) **AND** [H64: Using the title attribute of the frame and iframe elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H64) (HTML)

    -   [SCR28: Using an expandable and collapsible menu to bypass block of content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR28) (Scripting)

### Additional Techniques (Advisory) for 2.4.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Providing keyboard access to important links and form controls (future link)

-   Providing skip links to enhance page navigation (future link)

-   Providing access keys (future link)

-   Using accessibility supported technologies which allow structured navigation by user agents and assistive technologies (future link)

-   [C6: Positioning content based on structural markup](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C6) (CSS)

### Common Failures for SC 2.4.1

The following are common mistakes that are considered failures of Success Criterion 2.4.1 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="mechanismdef"></span> mechanism  
<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#processdef" class="termref">process</a> or technique for achieving a result

Note 1: The mechanism may be explicitly provided in the content, or may be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#reliedupondef" class="termref">relied upon</a> to be provided by either the platform or by <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#atdef" class="termref">assistive technologies</a>.

Note 2: The mechanism needs to meet all success criteria for the conformance level claimed.

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
-   [**Previous:** Guideline 2.4 \[Navigable\]](navigation-mechanisms.html "Understanding Guideline  2.4 [Navigable]")
-   [**Next:** SC 2.4.2 \[Page Titled\]](navigation-mechanisms-title.html "Understanding SC  2.4.2 [Page Titled]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
