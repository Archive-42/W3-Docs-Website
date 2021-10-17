[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
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

> **[2.4.7](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-focus-visible) Focus Visible:** Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. (Level AA)

Intent of this Success Criterion
--------------------------------

The purpose of this success criterion is to help a person know which element has the keyboard focus.

The purpose of this success criterion is to help a person know which element among multiple elements has the keyboard focus. If there is only one keyboard actionable control on the screen, the success criterion would be met because the visual design presents only one keyboard actionable item.

Note that a keyboard focus indicator can take different forms. One common way is a caret within the text field to indicate that the text field has the keyboard focus. Another is a visual change to a button to indicate that that button has the keyboard focus.

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

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G149" class="tech-ref">G149: Using user interface components that are highlighted by the user agent when they receive focus</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C15" class="tech-ref">C15: Using CSS to change the presentation of a user interface component when it receives focus</a> (CSS)

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G165" class="tech-ref">G165: Using the default focus indicator for the platform so that high visibility default focus indicators will carry over</a>

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G195" class="tech-ref">G195: Using an author-supplied, highly visible focus indicator</a>

5.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR31" class="tech-ref">SCR31: Using script to change the background color or border of the element with focus</a> (Scripting)

6.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH20" class="tech-ref">FLASH20: Reskinning Flash components to provide highly visible focus indication</a> (Flash)

7.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL2" class="tech-ref">SL2: Changing The Visual Focus Indicator in Silverlight</a> (Silverlight)

8.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL7" class="tech-ref">SL7: Designing a Focused Visual State for Custom Silverlight Controls</a> (Silverlight)

### Additional Techniques (Advisory) for 2.4.7

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Highlighting a link or control when the mouse hovers over it (future link)

-   Providing a highly visible highlighting mechanism for links or controls when they receive keyboard focus (future link)

### Common Failures for SC 2.4.7

The following are common mistakes that are considered failures of Success Criterion 2.4.7 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F55" class="tech-ref">F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F78" class="tech-ref">F78: Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator</a>

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.6 \[Headings and Labels\]](navigation-mechanisms-descriptive.html "Understanding SC  2.4.6 [Headings and Labels]")
-   [**Next:** SC 2.4.8 \[Location\]](navigation-mechanisms-location.html "Understanding SC  2.4.8 [Location]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
