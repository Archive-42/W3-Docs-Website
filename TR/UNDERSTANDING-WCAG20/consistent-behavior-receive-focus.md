[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 3.2 \[Predictable\]](consistent-behavior.html "Understanding Guideline  3.2 [Predictable]")
-   [**Next:** SC 3.2.2 \[On Input\]](consistent-behavior-unpredictable-change.html "Understanding SC  3.2.2 [On Input]")

On this page:

-   [Intent](#consistent-behavior-receive-focus-intent-head)
-   [Examples](#consistent-behavior-receive-focus-examples-head)
-   [Related Resources](#consistent-behavior-receive-focus-resources-head)
-   [Techniques & Failures](#consistent-behavior-receive-focus-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="consistent-behavior-receive-focus"></span> **On Focus**<span class="screenreader">:</span> Understanding SC 3.2.1
===========================================================================================================================

> **[3.2.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-receive-focus) On Focus:** When any component receives focus, it does not initiate a <a href="#context-changedef" class="termref">change of context</a>. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that functionality is predictable as visitors navigate their way through a document. Any component that is able to trigger an event when it receives focus must not change the context. Examples of changing context when a component receives focus include, but are not limited to:

-   forms submitted automatically when a component receives focus;

-   new windows launched when a component receives focus;

-   focus is changed to another component when that component receives focus;

Focus may be moved to a control either via the keyboard (e.g. tabbing to a control) or the mouse (e.g. clicking on a text field). Moving the mouse over a control does not move the focus unless scripting implements this behavior. Note that for some types of controls, clicking on a control may also activate the control (e.g. button), which may, in turn, initiate a change in context.

*Note:* What is meant by "component" here is also sometimes called "user interface element" or "user interface component''.

### Specific Benefits of Success Criterion 3.2.1:

-   This Success Criterion helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.

Examples of Success Criterion 3.2.1
-----------------------------------

-   **Example 1: A dropdown menu**

    A dropdown menu on a page allows users to choose between jump destinations. If the person uses the keyboard to move down to a choice and activates it (with a spacebar or enter key) it will jump to a new page. However, if the person moves down to a choice and either hits the escape or the tab key to move out of the pulldown menu – it does not jump to a new screen as the focus shifts out of the dropdown menu.

-   **Example of a Failure: A help dialog**

    When a field receives focus, a help dialog window describing the field and providing options opens. As a keyboard user tabs through the Web page, the dialog opens, moving the keyboard focus away from the control every time the user attempts to tab past the field.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 3.2.1 - On Focus
--------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G107" class="tech-ref">G107: Using "activate" rather than "focus" as a trigger for changes of context</a>

*Note:* A change of content is not always a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#context-changedef" class="gl-ref">change of context</a>. This success criterion is automatically met if changes in content are not also changes of context.

### Additional Techniques (Advisory) for 3.2.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Not causing persistent changes of state or value when a component receives focus, or providing an alternate means to reset any changes (future link)

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G200" class="tech-ref">G200: Opening new windows and tabs from a link only when necessary</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G201" class="tech-ref">G201: Giving users advanced warning when opening a new window</a>

### Common Failures for SC 3.2.1

The following are common mistakes that are considered failures of Success Criterion 3.2.1 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F52" class="tech-ref">F52: Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F55" class="tech-ref">F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received</a>

Key Terms
---------

 <span id="context-changedef"></span> changes of context  
major changes in the content of the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#webpagedef" class="termref">Web page</a> that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously

Changes in context include changes of:

1.  <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agent</a>;

2.  <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#viewportdef" class="termref">viewport</a>;

3.  focus;

4.  <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contentdef" class="termref">content</a> that changes the meaning of the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#webpagedef" class="termref">Web page</a>.

*Note:* A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).

*Example:* Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 3.2 \[Predictable\]](consistent-behavior.html "Understanding Guideline  3.2 [Predictable]")
-   [**Next:** SC 3.2.2 \[On Input\]](consistent-behavior-unpredictable-change.html "Understanding SC  3.2.2 [On Input]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
