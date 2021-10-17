[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.3.3 \[Error Suggestion\]](minimize-error-suggestions.html "Understanding SC  3.3.3 [Error Suggestion]")
-   [**Next:** SC 3.3.5 \[Help\]](minimize-error-context-help.html "Understanding SC  3.3.5 [Help]")

On this page:

-   [Intent](#minimize-error-reversible-intent-head)
-   [Examples](#minimize-error-reversible-examples-head)
-   [Related Resources](#minimize-error-reversible-resources-head)
-   [Techniques & Failures](#minimize-error-reversible-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="minimize-error-reversible"></span> **Error Prevention (Legal, Financial, Data)**<span class="screenreader">:</span> Understanding SC 3.3.4
====================================================================================================================================================

> **[3.3.4](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#minimize-error-reversible) Error Prevention (Legal, Financial, Data):** For <a href="#webpagedef" class="termref">Web pages</a> that cause <a href="#legalcommitmentsdef" class="termref">legal commitments</a> or financial transactions for the user to occur, that modify or delete <a href="#user-controllabledef" class="termref">user-controllable</a> data in data storage systems, or that submit user test responses, at least one of the following is true: (Level AA)
>
> 1.  **Reversible:** Submissions are reversible.
>
> 2.  **Checked:** Data entered by the user is checked for <a href="#input-errordef" class="termref">input errors</a> and the user is provided an opportunity to correct them.
>
> 3.  **Confirmed:** A <a href="#mechanismdef" class="termref">mechanism</a> is available for reviewing, confirming, and correcting information before finalizing the submission.
>
Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to help users with disabilities avoid serious consequences as the result of a mistake when performing an action that cannot be reversed. For example, purchasing non-refundable airline tickets or submitting an order to purchase stock in a brokerage account are financial transactions with serious consequences. If a user has made a mistake on the date of air travel, he or she could end up with a ticket for the wrong day that cannot be exchanged. If the user made a mistake on the number of stock shares to be purchased, he or she could end up purchasing more stock than intended. Both of these types of mistakes involve transactions that take place immediately and cannot be altered afterwards, and can be very costly. Likewise, it may be an unrecoverable error if users unintentionally modify or delete data stored in a database that they later need to access, such as their travel profile in a travel services Web site. Test data is included in this provision because, in order for tests to be valid, users are not allowed to modify their answers once submitted; so users need to be able to ensure that their submission is correct.

Users with disabilities may be more likely to make mistakes. People with reading disabilities may transpose numbers and letters, and those with motor disabilities may hit keys by mistake. Providing the ability to reverse actions allows users to correct a mistake that could result in serious consequences. Providing the ability to review and correct information gives the user an opportunity to detect a mistake before taking an action that has serious consequences.

User-controllable data is data that is intended to be accessed by users. (e.g., name and address for the user's account.) It does not refer such things as internet logs and search engine monitoring data.

### Specific Benefits of Success Criterion 3.3.4:

-   Providing safeguards to avoid serious consequences resulting from mistakes helps users with all disabilities who may be more likely to make mistakes.

Examples of Success Criterion 3.3.4
-----------------------------------

-   *Order confirmation.*

    A Web retailer offers on-line shopping for customers. When an order is submitted, the order information—including items ordered, quantity of each ordered item, shipping address, and payment method—are displayed so that the user can inspect the order for correctness. The user can either confirm the order or make changes.

-   *Stock sale:*

    A financial services Web site lets users buy and sell stock online. When a user submits an order to buy or sell stock, the system checks to see whether or not the market is open. If it is after hours, the user is alerted that the transaction will be an after-hours transaction, is told about the risks of trading outside of regular market hours, and given the opportunity to cancel or confirm the order.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 3.3.4 - Error Prevention (Legal, Financial, Data)
-----------------------------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="d0e10009"></span> Situation A: If an application causes a legal transaction to occur, such as making a purchase or submitting an income tax return:

1.  [G164: Providing a stated period of time after submission of the form when the order can be updated or canceled by the user](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G164)

2.  [G98: Providing the ability for the user to review and correct answers before submitting](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G98)

3.  [G155: Providing a checkbox in addition to a submit button](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G155)

#### <span id="d0e10028"></span> Situation B: If an action causes information to be deleted:

1.  [G99: Providing the ability to recover deleted information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G99)

2.  [G168: Requesting confirmation to continue with selected action](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G168)

3.  [G155: Providing a checkbox in addition to a submit button](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G155)

#### <span id="d0e10047"></span> Situation C: If the Web page includes a testing application:

1.  [G98: Providing the ability for the user to review and correct answers before submitting](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G98)

2.  [G168: Requesting confirmation to continue with selected action](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G168)

### Additional Techniques (Advisory) for 3.3.4

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Informing the user what irreversible action is about to happen (future link)

-   [SCR18: Providing client-side validation and alert](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR18) (Scripting)

-   Placing focus in the field containing the error (future link)

-   Avoiding use of the same words or letter combinations to begin each item of a drop-down list (future link)

-   Providing success feedback when data is submitted successfully (future link)

### Common Failures for SC 3.3.4

The following are common mistakes that are considered failures of Success Criterion 3.3.4 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="input-errordef"></span> input error  
information provided by the user that is not accepted

Note: This includes:

1.  Information that is required by the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web page</a> but omitted by the user

2.  Information that is provided by the user but that falls outside the required data format or values

 <span id="legalcommitmentsdef"></span> legal commitments  
transactions where the person incurs a legally binding obligation or benefit

Example: A marriage license, a stock trade (financial and legal), a will, a loan, adoption, signing up for the army, a contract of any type, etc.

 <span id="mechanismdef"></span> mechanism  
<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#processdef" class="termref">process</a> or technique for achieving a result

Note 1: The mechanism may be explicitly provided in the content, or may be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#reliedupondef" class="termref">relied upon</a> to be provided by either the platform or by <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#atdef" class="termref">assistive technologies</a>.

Note 2: The mechanism needs to meet all success criteria for the conformance level claimed.

 <span id="user-controllabledef"></span> user-controllable  
data that is intended to be accessed by users

Note: This does not refer to such things as Internet logs and search engine monitoring data.

Example: Name and address fields for a user's account.

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
-   [**Previous:** SC 3.3.3 \[Error Suggestion\]](minimize-error-suggestions.html "Understanding SC  3.3.3 [Error Suggestion]")
-   [**Next:** SC 3.3.5 \[Help\]](minimize-error-context-help.html "Understanding SC  3.3.5 [Help]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
