-   [Contents](. "Table of Contents")
-   [GL: Input Assistance](input-assistance)
-   [Previous SC: Error Suggestion](error-suggestion)
-   [Next SC: Help](help)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.3.4: Error Prevention (Legal, Financial, Data)
================================================================================

> Success Criterion [3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data) (Level AA): For [Web pages](#dfn-web-page) that cause [legal commitments](#dfn-legal-commitments) or financial transactions for the user to occur, that modify or delete [user-controllable](#dfn-user-controllable) data in data storage systems, or that submit user test responses, at least one of the following is true:
>
> Reversible  
> Submissions are reversible.
>
> Checked  
> Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
>
> Confirmed  
> A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

Intent
------

The intent of this Success Criterion is to help users with disabilities avoid serious consequences as the result of a mistake when performing an action that cannot be reversed. For example, purchasing non-refundable airline tickets or submitting an order to purchase stock in a brokerage account are financial transactions with serious consequences. If a user has made a mistake on the date of air travel, he or she could end up with a ticket for the wrong day that cannot be exchanged. If the user made a mistake on the number of stock shares to be purchased, he or she could end up purchasing more stock than intended. Both of these types of mistakes involve transactions that take place immediately and cannot be altered afterwards, and can be very costly. Likewise, it may be an unrecoverable error if users unintentionally modify or delete data stored in a database that they later need to access, such as their entire travel profile in a travel services web site. When referring to modification or deletion of 'user controllable' data, the intent is to prevent mass loss of data such as deleting a file or record. It is not the intent to require a confirmation for each save command or the simple creation or editing of documents, records or other data.

Users with disabilities may be more likely to make mistakes. People with reading disabilities may transpose numbers and letters, and those with motor disabilities may hit keys by mistake. Providing the ability to reverse actions allows users to correct a mistake that could result in serious consequences. Providing the ability to review and correct information gives the user an opportunity to detect a mistake before taking an action that has serious consequences.

User-controllable data is user-viewable data that the user can change and/or delete through an intentional action. Examples of the user controlling such data would be updating the phone number and address for the user's account, or deleting a record of past invoices from a website. It does not refer such things as internet logs and search engine monitoring data that the user can't view or interact with directly.

Benefits
--------

-   Providing safeguards to avoid serious consequences resulting from mistakes helps users with all disabilities who may be more likely to make mistakes.

Examples
--------

-   *Order confirmation.*

    A Web retailer offers on-line shopping for customers. When an order is submitted, the order information—including items ordered, quantity of each ordered item, shipping address, and payment method—are displayed so that the user can inspect the order for correctness. The user can either confirm the order or make changes.

-   *Stock sale:*

    A financial services Web site lets users buy and sell stock online. When a user submits an order to buy or sell stock, the system checks to see whether or not the market is open. If it is after hours, the user is alerted that the transaction will be an after-hours transaction, is told about the risks of trading outside of regular market hours, and given the opportunity to cancel or confirm the order.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### Situation A: If an application causes a legal transaction to occur, such as making a purchase or submitting an income tax return:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G164" class="general">G164: Providing a stated time within which an online request (or transaction) may be amended or canceled by the user after making the request</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G98" class="general">G98: Providing the ability for the user to review and correct answers before submitting</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G155" class="general">G155: Providing a checkbox in addition to a submit button</a>

#### Situation B: If an action causes information to be deleted:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G99" class="general">G99: Providing the ability to recover deleted information</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G168" class="general">G168: Requesting confirmation to continue with selected action</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G155" class="general">G155: Providing a checkbox in addition to a submit button</a>

#### Situation C: If the Web page includes a testing application:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G98" class="general">G98: Providing the ability for the user to review and correct answers before submitting</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G168" class="general">G168: Requesting confirmation to continue with selected action</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18" class="script">SCR18: Providing client-side validation and alert</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL35" class="silverlight">SL35: Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G199" class="general">G199: Providing success feedback when data is submitted successfully</a>

Key Terms
---------

assistive technology

hardware and/or software that acts as a [user agent](#dfn-user-agent), or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

Note

functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

Note

Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

Note

The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

Assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;
-   screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;
-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;
-   speech recognition software, which may be used by people who have some physical disabilities;
-   alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);
-   alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

legal commitments

transactions where the person incurs a legally binding obligation or benefit

A marriage license, a stock trade (financial and legal), a will, a loan, adoption, signing up for the army, a contract of any type, etc.

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.

user-controllable

data that is intended to be accessed by users

Note

This does not refer to such things as Internet logs and search engine monitoring data.

Name and address fields for a user's account.

web page

a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a [user agent](#dfn-user-agent)

Note

Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

Note

For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

A Web resource including all embedded images and media.

A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

A customizable portal site, where users can choose content to display from a set of different content modules.

When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.
