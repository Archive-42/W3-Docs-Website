[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.2.4 \[Interruptions\]](time-limits-postponed.html "Understanding SC  2.2.4 [Interruptions]")
-   [**Next:** Guideline 2.3 \[Seizures\]](seizure.html "Understanding Guideline  2.3 [Seizures]")

On this page:

-   [Intent](#time-limits-server-timeout-intent-head)
-   [Examples](#time-limits-server-timeout-examples-head)
-   [Related Resources](#time-limits-server-timeout-resources-head)
-   [Techniques & Failures](#time-limits-server-timeout-techniques-head)

<span id="maincontent">-</span>

<span id="time-limits-server-timeout"></span> **Re-authenticating**<span class="screenreader">:</span> Understanding SC 2.2.5
=============================================================================================================================

> **[2.2.5](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#time-limits-server-timeout) Re-authenticating:** When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating. (Level AAA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to allow all users to complete authenticated transactions that have inactivity time limits or other circumstances that would cause a user to be logged out while in the midst of completing the transaction.

For security reasons, many sites implement an authentication time limit after a certain period of inactivity. These time limits may cause problems for persons with disabilities because it may take longer for them to complete the activity.

Other sites will log a person out of a session if a person logs in on the Web site from another computer or if other activities arise that make the site suspicious of whether the person is still the same legitimate person who logged in originally. When users are logged out while still in the midst of a transaction - it is important that they be given the ability to re-authenticate and continue with the transaction without the loss of any data already entered.

### Specific Benefits of Success Criterion 2.2.5:

-   This Success Criterion benefits people who may require additional time to complete an activity. People with cognitive limitations may read slowly and require additional time to read and respond to a questionnaire. Users interacting via a screen reader may need extra time to navigate and complete a complicated form. A person with motor impairments or who navigates with an alternative input device may require additional time to navigate through or complete input within a form.

-   In circumstances where a sign-language interpreter may be relating audio content to a user who is deaf, control over time limits is also important.

Examples of Success Criterion 2.2.5
-----------------------------------

-   **A shopping site checkout**

    A user with extremely limited use of the hands is logged into a shopping site. It takes so long to enter credit card information into the application that a time limit occurs while the user is performing the checkout process. When the user returns to the checkout process and submits the form, the site returns a login screen to re-authenticate. After the user logs in, the check out process is restored with the same information and at the same stage. The user did not lose any data because the server had temporarily accepted and stored the submission even though the session had timed out and restored the user to the same state after re-authentication was completed.

-   **Authentication in an email program**

    An email program has an authentication time-out after 30 minutes. The program prompts the user several minutes before the time-out occurs and provides a link to open a new window in order to re-authenticate. The original window with the in-progress email remains intact and, after re-authentication, the user may send that data.

-   **A questionnaire with a time limit**

    A long questionnaire provided within a single Web page has information at the beginning that indicates that the session will time out after 15 minutes. The user is also informed that the questionnaire can be saved at any point and completed at a later time. Within the Web page there are several buttons provided to save the partially completed form. In addition, with JavaScript in the list of accessibility-supported content technologies that are relied upon, the user can elect to be alerted via a pop-up if the session is close to timing out.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 2.2.5 - Re-authenticating
-----------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  Providing options to continue without loss of data using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G105" class="tech-ref">G105: Saving data so that it can be used after a user re-authenticates</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G181" class="tech-ref">G181: Encoding user data as hidden or encrypted data in a re-authorization page</a>

*Note:* Refer to <a href="time-limits-required-behaviors.html#time-limits-required-behaviors-techniques-head" class="understanding-ref">Techniques for Addressing Success Criterion 2.2.1</a> for techniques related to providing notifications about time limits.

### Additional Techniques (Advisory) for 2.2.5

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

(none currently documented)

### Common Failures for SC 2.2.5

The following are common mistakes that are considered failures of Success Criterion 2.2.5 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F12" class="tech-ref">F12: Failure of Success Criterion 2.2.5 due to having a session time limit without a mechanism for saving user's input and re-establishing that information upon re-authentication</a>

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.2.4 \[Interruptions\]](time-limits-postponed.html "Understanding SC  2.2.4 [Interruptions]")
-   [**Next:** Guideline 2.3 \[Seizures\]](seizure.html "Understanding Guideline  2.3 [Seizures]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-server-timeout.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
