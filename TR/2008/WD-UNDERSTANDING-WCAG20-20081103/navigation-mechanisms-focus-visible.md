[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.6 \[Headings and Labels\]](navigation-mechanisms-descriptive.html "Understanding SC  2.4.6 [Headings and Labels]")
-   [**Next:** SC 2.4.8 \[Location\]](navigation-mechanisms-location.html "Understanding SC  2.4.8 [Location]")

On this page:

-   [Intent](#navigation-mechanisms-focus-visible-intent-head)
-   [Examples](#navigation-mechanisms-focus-visible-examples-head)
-   [Related Resources](#navigation-mechanisms-focus-visible-resources-head)
-   [Techniques & Failures](#navigation-mechanisms-focus-visible-techniques-head)

<span id="maincontent">-</span>

<span id="navigation-mechanisms-focus-visible"></span> **Focus Visible**<span class="screenreader">:</span> Understanding SC 2.4.7
==================================================================================================================================

> **[2.4.7](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-focus-visible) Focus Visible:** Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. (Level AA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that there is at least one mode of operation where the keyboard focus indicator can be visually located.

### Specific Benefits of Success Criterion 2.4.7:

-   This Success Criterion helps anyone who relies on the keyboard to operate the page, by letting them visually determine the component on which keyboard operations will interact at any point in time.

-   People with attention limitations, short term memory limitations, or limitations in executive processes benefit by being able to discover where the focus is located.

Examples of Success Criterion 2.4.7
-----------------------------------

-   When text fields receive focus, a vertical bar is displayed in the field, indicating that the user can insert text, OR all of the text is highlighted, indicating that the user can type over the text.

-   When a user interface control receives focus, a visible border is displayed around it.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Styling form controls with CSS, revisited](http://www.456bereastreet.com/archive/200701/styling_form_controls_with_css_revisited/)

Techniques and Failures for Success Criterion 2.4.7 - Focus Visible
-------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G149: Using user interface components that are highlighted by the user agent when they receive focus](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G149)

2.  [C15: Using CSS to change the presentation of a user interface component when it receives focus](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C15) (CSS)

3.  [G165: Using the default focus indicator for the platform so that high visibility default focus indicators will carry over](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G165)

4.  [G195: Using an author-supplied, highly visible focus indicator](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G195)

5.  [SCR31: Using script to change the background color or border of the element with focus](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR31) (Scripting)

### Additional Techniques (Advisory) for 2.4.7

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Highlighting a link or control when the mouse hovers over it (future link)

-   Providing a highly visible highlighting mechanism for links or controls when they receive keyboard focus (future link)

### Common Failures for SC 2.4.7

The following are common mistakes that are considered failures of Success Criterion 2.4.7 by the WCAG Working Group.

-   [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F55)

-   [F78: Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F78)

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.6 \[Headings and Labels\]](navigation-mechanisms-descriptive.html "Understanding SC  2.4.6 [Headings and Labels]")
-   [**Next:** SC 2.4.8 \[Location\]](navigation-mechanisms-location.html "Understanding SC  2.4.8 [Location]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
