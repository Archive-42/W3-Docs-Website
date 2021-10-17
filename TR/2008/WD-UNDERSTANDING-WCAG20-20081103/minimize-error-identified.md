[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 3.3 \[Input Assistance\]](minimize-error.html "Understanding Guideline  3.3 [Input Assistance]")
-   [**Next:** SC 3.3.2 \[Labels or Instructions\]](minimize-error-cues.html "Understanding SC  3.3.2 [Labels or Instructions]")

On this page:

-   [Intent](#minimize-error-identified-intent-head)
-   [Examples](#minimize-error-identified-examples-head)
-   [Related Resources](#minimize-error-identified-resources-head)
-   [Techniques & Failures](#minimize-error-identified-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="minimize-error-identified"></span> **Error Identification**<span class="screenreader">:</span> Understanding SC 3.3.1
===============================================================================================================================

> **[3.3.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#minimize-error-identified) Error Identification:** If an <a href="#input-errordef" class="termref">input error</a> is automatically detected, the item that is in error is identified and the error is described to the user in text. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that users are aware that an error has occurred and can determine what is wrong. The error message should be as specific as possible. In the case of an unsuccessful form submission, re-displaying the form and indicating the fields in error is insufficient for some users to perceive that an error has occurred. Screen reader users, for example, will not know there was an error until they encounter one of the indicators. They may abandon the form altogether before encountering the error indicator, thinking that the page simply is not functional.

The identification and description of an error can be combined with programmatic information that user agents or assistive technologies can use to identify an error and provide error information to the user. For example, certain technologies can specify that the user's input must not fall outside a specific range, or that a form field is required. Currently, few technologies support this kind of programmatic information, but the Success Criterion does not require, nor prevent it.

It is perfectly acceptable to indicate the error in other ways such as image, color etc, in addition to the text description.

See also *[Understanding Success Criterion 3.3.3 Error Suggestion](minimize-error-suggestions.html)*.

### Specific Benefits of Success Criterion 3.3.1:

-   Providing information about input errors in text allows users who are blind or colorblind to perceive the fact that an error occurred.

-   This Success Criterion may help people with cognitive, language, and learning disabilities who have difficulty understanding the meaning represented by icons and other visual cues.

Examples of Success Criterion 3.3.1
-----------------------------------

-   **Identifying errors in a form submission**

    An airline Web site offers a special promotion on discounted flights. The user is asked to complete a simple form that asks for personal information such as name, address, phone number, seating preference and e-mail address. If any of the fields of the form are either not completed or completed incorrectly, an alert is displayed notifying the user which field or fields were missing or incorrect.

    Note: This Success Criterion does not mean that color or text styles cannot be used to indicate errors. It simply requires that errors also be identified using text. In this example, two asterisks are used in addition to color.

-   **Providing multiple cues**

    The user fails to fill in two fields on the form. In addition to describing the error and providing a unique character to make it easy to search for the fields, the fields are highlighted in yellow to make it easier to visually search for them as well.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [d3151 Communicating with - receiving - general signs and symbols](http://www.who.int/classifications/icf/site/onlinebrowser/icf.cfm?parentlevel=4&childlevel=5&itemslevel=5&ourdimension=d&ourchapter=3&ourblock=1&our2nd=15&our3rd=1&our4th=0). International Classification of Functioning, Disability and Health. 2001. World Health Organization.

Techniques and Failures for Success Criterion 3.3.1 - Error Identification
--------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="d0e9533"></span> Situation A: If a form contains fields for which information from the user is mandatory.

1.  [G83: Providing text descriptions to identify required fields that were not completed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G83)

2.  [SCR18: Providing client-side validation and alert](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR18) (Scripting)

#### <span id="d0e9547"></span> Situation B: If information provided by the user is required to be in a specific data format or of certain values.

1.  [G84: Providing a text description when the user provides information that is not in the list of allowed values](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G84)

2.  [G85: Providing a text description when user input falls outside the required format or values](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G85)

3.  [SCR18: Providing client-side validation and alert](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR18) (Scripting)

4.  [SCR32: Providing client-side validation and adding error text via the DOM](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR32) (Scripting)

### Additional Techniques (Advisory) for 3.3.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   [G139: Creating a mechanism that allows users to jump to errors](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G139)

-   Validating form submissions on the server (future link)

-   Re-displaying a form with a summary of errors (future link)

-   Providing error notification as the user enters information (future link)

-   Assisting the user in making corrections by providing links to each error (future link)

-   Highlighting or visually emphasizing errors where they occur (future link)

-   Supplementing text with non-text content when reporting errors (future link)

-   Providing success feedback when data is submitted successfully (future link)

### Common Failures for SC 3.3.1

The following are common mistakes that are considered failures of Success Criterion 3.3.1 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="input-errordef"></span> input error  
information provided by the user that is not accepted

Note: This includes:

1.  Information that is required by the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web page</a> but omitted by the user

2.  Information that is provided by the user but that falls outside the required data format or values

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 3.3 \[Input Assistance\]](minimize-error.html "Understanding Guideline  3.3 [Input Assistance]")
-   [**Next:** SC 3.3.2 \[Labels or Instructions\]](minimize-error-cues.html "Understanding SC  3.3.2 [Labels or Instructions]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
