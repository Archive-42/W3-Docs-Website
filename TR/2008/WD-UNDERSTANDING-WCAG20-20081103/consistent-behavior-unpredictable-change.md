[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.2.1 \[On Focus\]](consistent-behavior-receive-focus.html "Understanding SC  3.2.1 [On Focus]")
-   [**Next:** SC 3.2.3 \[Consistent Navigation\]](consistent-behavior-consistent-locations.html "Understanding SC  3.2.3 [Consistent Navigation]")

On this page:

-   [Intent](#consistent-behavior-unpredictable-change-intent-head)
-   [Examples](#consistent-behavior-unpredictable-change-examples-head)
-   [Techniques & Failures](#consistent-behavior-unpredictable-change-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="consistent-behavior-unpredictable-change"></span> **On Input**<span class="screenreader">:</span> Understanding SC 3.2.2
==================================================================================================================================

> **[3.2.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#consistent-behavior-unpredictable-change) On Input:** Changing the setting of any <a href="#user-interface-componentdef" class="termref">user interface component</a> does not automatically cause a <a href="#context-changedef" class="termref">change of context</a> unless the user has been advised of the behavior before using the component. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that entering data or selecting a form control has predictable effects. Changing the setting of any user interface component is changing some state in the control that will persist when the user is no longer interacting with it. So checking a checkbox or entering text into a text field changes its setting, but activating a link or a button does not. Changes in context can confuse users who do not easily perceive the change or are easily distracted by changes. Changes of context are appropriate only when it is clear that such a change will happen in response to the user's action.

Note: This Success Criterion covers changes in context due to changing the setting of a control. Clicking on links or tabs in a tab control is activating the control, not changing the setting of that control.

### Specific Benefits of Success Criterion 3.2.2:

-   This Success Criterion helps users with disabilities by making interactive content more predictable. Unexpected changes of context can be so disorienting for users with visual disabilities or cognitive limitations that they are unable to use the content.

-   Individuals who are unable to detect changes of context are less likely to become disoriented while navigating a site. For example:

    -   Individuals who are blind or have low vision may have difficulty knowing when a visual context change has occurred, such as a new window popping up. In this case, warning users of context changes in advance minimizes confusion when the user discovers that the back button no longer behaves as expected.

-   Some individuals with low vision, with reading and intellectual disabilities, and others who have difficulty interpreting visual cues may benefit from additional cues in order to detect changes of context.

Examples of Success Criterion 3.2.2
-----------------------------------

-   A form is provided for creating calendar entries in a Web based calendaring and scheduling application. Along with the standard fields for subject, time and location, there is a set of radio buttons to select the type of calendar entry to create. The calendar entry type can be meeting, appointment or reminder. If the user selects the radio for meeting, additional fields are displayed on the page for entering the meeting participants. Different fields appear if the reminder button is chosen. Because only parts of the entry change and the overall structure remains the same the basic context remains for the user.

-   A form contains fields representing US phone numbers. All of the numbers have a three digit area code followed by a three digit prefix and finally a four digit number, and each part of the phone number is entered into a separate field. When the user completes the entry of one field and enter the first digit of the next field, the focus automatically moves to the next field of the phone number. This behavior of phone fields is described for the user at the beginning of the form.

Techniques and Failures for Success Criterion 3.2.2 - On Input
--------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G80: Providing a submit button to initiate a change of context](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G80) using a technology-specific technique listed below

    -   [H32: Providing submit buttons](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H32) (HTML)

    -   [H84: Using a button with a select element to perform an action](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H84) (HTML)

2.  [G13: Describing what will happen before a change to a form control that causes a change of context to occur is made](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G13)

Note: A change of content is not always a [change of context](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#context-changedef). This success criterion is automatically met if changes in content are not also changes of context.

### Additional Techniques (Advisory) for 3.2.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Giving users advanced warning when opening a new window. (future link)

### Common Failures for SC 3.2.2

The following are common mistakes that are considered failures of Success Criterion 3.2.2 by the WCAG Working Group.

-   [F36: Failure of Success Criterion 3.2.2 due to automatically submitting a form and presenting new content without prior warning when the last field in the form is given a value](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F36)

-   [F37: Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the status of a radio button, check box or select list is changed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F37)

-   [F76: Failure of 3.2.2 due to providing instruction material about the change of context by change of setting in a user interface element at a location that users may bypass](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F76)

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

 <span id="user-interface-componentdef"></span> user interface component  
a part of the content that is perceived by users as a single control for a distinct function

Note 1: Multiple user interface components may be implemented as a single programmatic element. Components here is not tied to programming techniques, but rather to what the user perceives as separate controls.

Note 2: User interface components include form elements and links as well as components generated by scripts.

Example: An applet has a "control" that can be used to move through content by line or page or random access. Since each of these would need to have a name and be setable independently, they would each be a "user interface component."

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.2.1 \[On Focus\]](consistent-behavior-receive-focus.html "Understanding SC  3.2.1 [On Focus]")
-   [**Next:** SC 3.2.3 \[Consistent Navigation\]](consistent-behavior-consistent-locations.html "Understanding SC  3.2.3 [Consistent Navigation]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
