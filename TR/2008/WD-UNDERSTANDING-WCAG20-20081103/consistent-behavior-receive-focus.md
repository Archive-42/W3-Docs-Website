[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 3.2 \[Predictable\]](consistent-behavior.html "Understanding Guideline  3.2 [Predictable]")
-   [**Next:** SC 3.2.2 \[On Input\]](consistent-behavior-unpredictable-change.html "Understanding SC  3.2.2 [On Input]")

On this page:

-   [Intent](#consistent-behavior-receive-focus-intent-head)
-   [Examples](#consistent-behavior-receive-focus-examples-head)
-   [Techniques & Failures](#consistent-behavior-receive-focus-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="consistent-behavior-receive-focus"></span> **On Focus**<span class="screenreader">:</span> Understanding SC 3.2.1
===========================================================================================================================

> **[3.2.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#consistent-behavior-receive-focus) On Focus:** When any component receives focus, it does not initiate a <a href="#context-changedef" class="termref">change of context</a>. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that functionality is predictable as visitors navigate their way through a document. Any component that is able to trigger an event when it receives focus must not change the context. Examples of changing context when a component receives focus include, but are not limited to:

-   forms submitted automatically when a component receives focus;

-   new windows launched when a component receives focus;

-   focus is changed to another component when that component receives focus;

### Specific Benefits of Success Criterion 3.2.1:

-   This Success Criterion helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.

Examples of Success Criterion 3.2.1
-----------------------------------

-   **Example 1: A dropdown menu**

    A dropdown menu on a page allows users to choose between jump destinations. If the person uses the keyboard to move down to a choice and activates it (with a spacebar or enter key) it will jump to a new page. However, if the person moves down to a choice and either hits the escape or the tab key to move out of the pulldown menu – it does not jump to a new screen as the focus shifts out of the dropdown menu.

-   **Example of a Failure: A help dialog**

    When a field receives focus, a help dialog window describing the field and providing options opens. As a keyboard user tabs through the Web page, the dialog opens, moving the keyboard focus away from the control every time the user attempts to tab past the field.

Techniques and Failures for Success Criterion 3.2.1 - On Focus
--------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G107: Using "activate" rather than "focus" as a trigger for changes of context](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G107)

Note: A change of content is not always a [change of context](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#context-changedef). This success criterion is automatically met if changes in content are not also changes of context.

### Additional Techniques (Advisory) for 3.2.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Not causing persistent changes of state or value when a component receives focus, or providing an alternate means to reset any changes (future link)

-   Opening new windows only when best from an accessibility perspective (future link)

-   Giving users advanced warning when opening a new window. (future link)

### Common Failures for SC 3.2.1

The following are common mistakes that are considered failures of Success Criterion 3.2.1 by the WCAG Working Group.

-   [F52: Failure of Success Criterion 3.2.1 due to opening a new window as soon as a new page is loaded](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F52)

-   [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F55)

Key Terms
---------

 <span id="context-changedef"></span> changes of context  
major changes in the content of the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web page</a> that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously

Changes in context include changes of:

1.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#useragentdef" class="termref">user agent</a>;

2.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#viewportdef" class="termref">viewport</a>;

3.  focus;

4.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#contentdef" class="termref">content</a> that changes the meaning of the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web page</a>.

Note: A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g. focus).

Example: Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 3.2 \[Predictable\]](consistent-behavior.html "Understanding Guideline  3.2 [Predictable]")
-   [**Next:** SC 3.2.2 \[On Input\]](consistent-behavior-unpredictable-change.html "Understanding SC  3.2.2 [On Input]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
