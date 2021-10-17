[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.3.5 \[Help\]](minimize-error-context-help.html "Understanding SC  3.3.5 [Help]")
-   [**Next:** Guideline 4.1 \[Compatible\]](ensure-compat.html "Understanding Guideline  4.1 [Compatible]")

On this page:

-   [Intent](#minimize-error-reversible-all-intent-head)
-   [Examples](#minimize-error-reversible-all-examples-head)
-   [Related Resources](#minimize-error-reversible-all-resources-head)
-   [Techniques & Failures](#minimize-error-reversible-all-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="minimize-error-reversible-all"></span> **Error Prevention (All)**<span class="screenreader">:</span> Understanding SC 3.3.6
=====================================================================================================================================

> **[3.3.6](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error-reversible-all) Error Prevention (All):** For <a href="#webpagedef" class="termref">Web pages</a> that require the user to submit information, at least one of the following is true: (Level AAA)
>
> 1.  **Reversible:** Submissions are reversible.
>
> 2.  **Checked:** Data entered by the user is checked for <a href="#input-errordef" class="termref">input errors</a> and the user is provided an opportunity to correct them.
>
> 3.  **Confirmed:** A <a href="#mechanismdef" class="termref">mechanism</a> is available for reviewing, confirming, and correcting information before finalizing the submission.
>
Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to help users with disabilities avoid consequences that may result from making a mistake when submitting form data. This criterion builds on <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error-reversible" class="gl-ref">Success Criterion 3.3.4</a> in that it applies to all forms that require users to submit information.

Users with disabilities may be more likely to make mistakes and may have more difficulty detecting or recovering from mistakes. People with reading disabilities may transpose numbers and letters, and those with motor disabilities may hit keys by mistake. Providing the ability to reverse actions allows users to correct a mistake. Providing the ability to review and correct information gives the user an opportunity to detect a mistake before taking an action.

### Specific Benefits of Success Criterion 3.3.6:

-   Providing safeguards to avoid consequences resulting from mistakes helps users with all disabilities who may be more likely to make mistakes.

Examples of Success Criterion 3.3.6
-----------------------------------

(none currently documented)

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 3.3.6 - Error Prevention (All)
----------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  Following the <a href="minimize-error-reversible.html#minimize-error-reversible-techniques-head" class="understanding-ref">sufficient techniques for Success Criterion 3.3.4</a> for all forms that require the user to submit information.

Key Terms
---------

 <span id="webpagedef"></span> Web page  
a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agent</a>

*Note 1:* Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

*Note 2:* For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

*Example 1:* A Web resource including all embedded images and media.

*Example 2:* A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

*Example 3:* A customizable portal site, where users can choose content to display from a set of different content modules.

*Example 4:* When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.

 <span id="input-errordef"></span> input error  
information provided by the user that is not accepted

*Note:* This includes:

1.  Information that is required by the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#webpagedef" class="termref">Web page</a> but omitted by the user

2.  Information that is provided by the user but that falls outside the required data format or values

 <span id="mechanismdef"></span> mechanism  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#processdef" class="termref">process</a> or technique for achieving a result

*Note 1:* The mechanism may be explicitly provided in the content, or may be <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#reliedupondef" class="termref">relied upon</a> to be provided by either the platform or by <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#atdef" class="termref">assistive technologies</a>.

*Note 2:* The mechanism needs to meet all success criteria for the conformance level claimed.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.3.5 \[Help\]](minimize-error-context-help.html "Understanding SC  3.3.5 [Help]")
-   [**Next:** Guideline 4.1 \[Compatible\]](ensure-compat.html "Understanding Guideline  4.1 [Compatible]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible-all.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
