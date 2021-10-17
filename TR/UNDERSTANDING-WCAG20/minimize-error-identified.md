[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
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

> **[3.3.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error-identified) Error Identification:** If an <a href="#input-errordef" class="termref">input error</a> is automatically detected, the item that is in error is identified and the error is described to the user in text. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that users are aware that an error has occurred and can determine what is wrong. The error message should be as specific as possible. In the case of an unsuccessful form submission, re-displaying the form and indicating the fields in error is insufficient for some users to perceive that an error has occurred. Screen reader users, for example, will not know there was an error until they encounter one of the indicators. They may abandon the form altogether before encountering the error indicator, thinking that the page simply is not functional. Per the definition in WCAG 2.0, an "input error" is information provided by the user that is not accepted. This includes:

-   information that is required by the web page but omitted by the user, or

-   information that is provided by the user but that falls outside the required data format or allowed values.

For example:

-   the user fails to enter the proper abbreviation in to state, province, region, etc. field;

-   the user enters a state abbreviation that is not a valid state;

-   the user enters a non existent zip or postal code;

-   the user enters a birth date 2 years in the future;

-   the user enters alphabetic characters or parentheses into their phone number field that only accepts numbers;

-   the user enters a bid that is below the previous bid or the minimum bid increment.

*Note:* If a user enters a value that is too high or too low, and the coding on the page automatically changes that value to fall within the allowed range, the user's error would still need to be described to them as required by the success criterion. Such an error description telling the person of the changed value would meet both this success criterion (Error Identification) and <a href="minimize-error-suggestions.html" class="understanding-ref">Success Criterion 3.3.3 (Error Suggestion)</a>.

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

    *Note:* This Success Criterion does not mean that color or text styles cannot be used to indicate errors. It simply requires that errors also be identified using text. In this example, two asterisks are used in addition to color.

-   **Providing multiple cues**

    The user fails to fill in two fields on the form. In addition to describing the error and providing a unique character to make it easy to search for the fields, the fields are highlighted in yellow to make it easier to visually search for them as well.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 3.3.1 - Error Identification
--------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="minimize-error-identified-situation-48-head"></span> Situation A: If a form contains fields for which information from the user is mandatory.

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G83" class="tech-ref">G83: Providing text descriptions to identify required fields that were not completed</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA21" class="tech-ref">ARIA21: Using Aria-Invalid to Indicate An Error Field</a> (ARIA)

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR18" class="tech-ref">SCR18: Providing client-side validation and alert</a> (Scripting)

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF5" class="tech-ref">PDF5: Indicating required form controls in PDF forms</a> (PDF)

5.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL35" class="tech-ref">SL35: Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight</a> (Silverlight)

#### <span id="minimize-error-identified-situation-49-head"></span> Situation B: If information provided by the user is required to be in a specific data format or of certain values.

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA18" class="tech-ref">ARIA18: Using aria-alertdialog to Identify Errors</a> (ARIA)

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA19" class="tech-ref">ARIA19: Using ARIA role=alert or Live Regions to Identify Errors</a> (ARIA)

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA21" class="tech-ref">ARIA21: Using Aria-Invalid to Indicate An Error Field</a> (ARIA)

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G84" class="tech-ref">G84: Providing a text description when the user provides information that is not in the list of allowed values</a>

5.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G85" class="tech-ref">G85: Providing a text description when user input falls outside the required format or values</a>

6.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR18" class="tech-ref">SCR18: Providing client-side validation and alert</a> (Scripting)

7.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR32" class="tech-ref">SCR32: Providing client-side validation and adding error text via the DOM</a> (Scripting)

8.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH12" class="tech-ref">FLASH12: Providing client-side validation and adding error text via the accessible description</a> (Flash)

9.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF22" class="tech-ref">PDF22: Indicating when user input falls outside the required format or values in PDF forms</a> (PDF)

10. <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL35" class="tech-ref">SL35: Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight</a> (Silverlight)

### Additional Techniques (Advisory) for 3.3.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G139" class="tech-ref">G139: Creating a mechanism that allows users to jump to errors</a>

-   Validating form submissions on the server (future link)

-   Re-displaying a form with a summary of errors (future link)

-   Providing error notification as the user enters information (future link)

-   Including error notification information in the page title (future link)

-   Highlighting or visually emphasizing errors where they occur (future link)

-   Supplementing text with non-text content when reporting errors (future link)

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G199" class="tech-ref">G199: Providing success feedback when data is submitted successfully</a>

-   Using sounds to focus user's attention (future link)

### Common Failures for SC 3.3.1

The following are common mistakes that are considered failures of Success Criterion 3.3.1 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="input-errordef"></span> input error  
information provided by the user that is not accepted

*Note:* This includes:

1.  Information that is required by the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#webpagedef" class="termref">Web page</a> but omitted by the user

2.  Information that is provided by the user but that falls outside the required data format or values

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 3.3 \[Input Assistance\]](minimize-error.html "Understanding Guideline  3.3 [Input Assistance]")
-   [**Next:** SC 3.3.2 \[Labels or Instructions\]](minimize-error-cues.html "Understanding SC  3.3.2 [Labels or Instructions]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
