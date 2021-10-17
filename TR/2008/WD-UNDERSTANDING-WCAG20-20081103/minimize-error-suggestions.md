[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.3.2 \[Labels or Instructions\]](minimize-error-cues.html "Understanding SC  3.3.2 [Labels or Instructions]")
-   [**Next:** SC 3.3.4 \[Error Prevention (Legal, Financial, Data)\]](minimize-error-reversible.html "Understanding SC  3.3.4 [Error Prevention (Legal, Financial, Data)]")

On this page:

-   [Intent](#minimize-error-suggestions-intent-head)
-   [Examples](#minimize-error-suggestions-examples-head)
-   [Related Resources](#minimize-error-suggestions-resources-head)
-   [Techniques & Failures](#minimize-error-suggestions-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="minimize-error-suggestions"></span> **Error Suggestion**<span class="screenreader">:</span> Understanding SC 3.3.3
============================================================================================================================

> **[3.3.3](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#minimize-error-suggestions) Error Suggestion:** If an <a href="#input-errordef" class="termref">input error</a> is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content. (Level AA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that users receive appropriate suggestions for correction of an input error if it is possible.

Success Criterion 3.3.1 provides for notification of errors. However, persons with cognitive limitations may find it difficult to understand how to correct the errors. People with visual disabilities may not be able to figure out exactly how to correct the error. In the case of an unsuccessful form submission, users may abandon the form because although they may be aware that an error has occurred, they may be unsure of how to correct the error even though they are aware that it has occurred.

The content author may provide the description of the error, or the user agent may provide the description of the error based on technology-specific, programmatically determined information.

### Specific Benefits of Success Criterion 3.3.3:

-   Providing information about how to correct input errors allows users who have learning disabilities to fill in a form successfully. Users who are blind or have impaired vision understand more easily the nature of the input error and how to correct it. People with motion impairment can reduce the number of times they need to change an input value.

Examples of Success Criterion 3.3.3
-----------------------------------

-   **Additional Help for Correcting An Input Error**

    The result of a form that was not successfully submitted describes an input error in place in the page along with the correct input and offers additional help for the form field that caused the input error.

-   **Suggestions from a Limited Set of Values**

    An input field requires that a month name be entered. If the user enters "12," suggestions for correction may include

    -   A list of the acceptable values, e.g., "Choose one of: January, February, March, April, May, June, July, August, September, October, November, December."

    -   A description of the set of values, e.g., "Please provide the name of the month."

    -   The conversion of the input data interpreted as a different month format, e.g., "Do you mean 'December'?"

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 3.3.3 - Error Suggestion
----------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

Note: In some cases, more than one of these situations may apply. For example, when a mandatory field also requires the data to be in a specific format.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="d0e9810"></span> Situation A: If a mandatory field contains no information:

1.  [G83: Providing text descriptions to identify required fields that were not completed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G83)

#### <span id="d0e9820"></span> Situation B: If information for a field is required to be in a specific data format:

1.  [G85: Providing a text description when user input falls outside the required format or values](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G85)

2.  [G177: Providing suggested correction text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G177)

3.  [SCR18: Providing client-side validation and alert](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR18) (Scripting)

4.  [SCR32: Providing client-side validation and adding error text via the DOM](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR32) (Scripting)

#### <span id="d0e9845"></span> Situation C: Information provided by the user is required to be one of a limited set of values:

1.  [G84: Providing a text description when the user provides information that is not in the list of allowed values](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G84)

2.  [G177: Providing suggested correction text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G177)

3.  [SCR18: Providing client-side validation and alert](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR18) (Scripting)

4.  [SCR32: Providing client-side validation and adding error text via the DOM](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR32) (Scripting)

### Additional Techniques (Advisory) for 3.3.3

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   [G139: Creating a mechanism that allows users to jump to errors](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G139)

-   Making error messages easy to understand and distinguishable from other text in the Web page (future link)

-   Validating form submissions on the server (future link)

-   When mandatory information has not been provided, including descriptions or examples of correct information in addition to identifying the field as mandatory (future link)

-   Repeating and emphasizing suggestions for correcting each input error in the context of its form field (future link)

-   Providing a way for the user to skip from each item in a list of suggestions to its corresponding form field (future link)

-   Providing additional contextual help for the form field requiring change (future link)

-   Accepting input data in a variety of formats (future link)

-   Providing success feedback when data is submitted successfully (future link)

#### <span id="d0e9907"></span> Techniques for providing suggestions to the user (Advisory)

-   Providing a text description that contains information about the number of input errors, suggestions for corrections to each item, and instructions on how to proceed (future link)

-   Providing a text description that contains suggestions for correction as the first item (or one of the first items) of content, or emphasizing this information in the content (future link)

-   Displaying errors and suggestions in the context of the original form (for example, re-displaying a form where input errors and suggestions for correction are highlighted and displayed in the context of the original form) (future link)

#### <span id="d0e9920"></span> HTML Techniques (Advisory)

-   Providing "correct examples" for data and data formats as initial text in mandatory form fields (future link)

-   Providing links to suggested correction text "close to" form fields, or providing the suggested correction text itself directly on the Web page "next to" form fields (future link)

#### <span id="d0e9930"></span> Client-Side Scripting Techniques (Advisory)

-   [SCR18: Providing client-side validation and alert](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR18) (Scripting)

-   Providing client-side validation and adding error text via the DOM (future link)

-   Calling a function from the submit action of a form to perform client side validation (future link)

#### <span id="d0e9946"></span> ARIA Techniques (Advisory)

-   [ARIA2: Identifying required fields with the "required" property](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA2) (ARIA)

-   [ARIA3: Identifying valid range information with the "valuemin" and "valuemax" properties](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA3) (ARIA)

### Common Failures for SC 3.3.3

The following are common mistakes that are considered failures of Success Criterion 3.3.3 by the WCAG Working Group.

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
-   [**Previous:** SC 3.3.2 \[Labels or Instructions\]](minimize-error-cues.html "Understanding SC  3.3.2 [Labels or Instructions]")
-   [**Next:** SC 3.3.4 \[Error Prevention (Legal, Financial, Data)\]](minimize-error-reversible.html "Understanding SC  3.3.4 [Error Prevention (Legal, Financial, Data)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
