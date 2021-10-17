-   [Contents](. "Table of Contents")
-   [GL: Enough Time](enough-time)
-   [Previous SC: Interruptions](interruptions)
-   [Next SC: Timeouts](timeouts)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)

Understanding Success Criterion 2.2.5: Re-authenticating
========================================================

> Success Criterion [2.2.5 Re-authenticating](https://www.w3.org/TR/WCAG21/#re-authenticating) (Level AAA): When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.

Intent
------

The intent of this Success Criterion is to allow all users to complete authenticated transactions that have inactivity time limits or other circumstances that would cause a user to be logged out while in the midst of completing the transaction.

For security reasons, many sites implement an authentication time limit after a certain period of inactivity. These time limits may cause problems for persons with disabilities because it may take longer for them to complete the activity.

Other sites will log a person out of a session if a person logs in on the Web site from another computer or if other activities arise that make the site suspicious of whether the person is still the same legitimate person who logged in originally. When users are logged out while still in the midst of a transaction - it is important that they be given the ability to re-authenticate and continue with the transaction without the loss of any data already entered.

Benefits
--------

-   This Success Criterion benefits people who may require additional time to complete an activity. People with cognitive limitations may read slowly and require additional time to read and respond to a questionnaire. Users interacting via a screen reader may need extra time to navigate and complete a complicated form. A person with motor impairments or who navigates with an alternative input device may require additional time to navigate through or complete input within a form.
-   In circumstances where a sign-language interpreter may be relating audio content to a user who is deaf, control over time limits is also important.

Examples
--------

-   **A shopping site checkout**

    A user with extremely limited use of the hands is logged into a shopping site. It takes so long to enter credit card information into the application that a time limit occurs while the user is performing the checkout process. When the user returns to the checkout process and submits the form, the site returns a login screen to re-authenticate. After the user logs in, the check out process is restored with the same information and at the same stage. The user did not lose any data because the server had temporarily accepted and stored the submission even though the session had timed out and restored the user to the same state after re-authentication was completed.

-   **Authentication in an email program**

    An email program has an authentication time-out after 30 minutes. The program prompts the user several minutes before the time-out occurs and provides a link to open a new window in order to re-authenticate. The original window with the in-progress email remains intact and, after re-authentication, the user may send that data.

-   **A questionnaire with a time limit**

    A long questionnaire provided within a single Web page has information at the beginning that indicates that the session will time out after 15 minutes. The user is also informed that the questionnaire can be saved at any point and completed at a later time. Within the Web page there are several buttons provided to save the partially completed form. In addition, with JavaScript in the list of accessibility-supported content technologies that are relied upon, the user can elect to be alerted via a pop-up if the session is close to timing out.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  Providing options to continue without loss of data using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G105" class="general">G105: Saving data so that it can be used after a user re-authenticates</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G181" class="general">G181: Encoding user data as hidden or encrypted data in a re-authorization page</a>

Note

Refer to <a href="timing-adjustable#techniques" class="understanding">Techniques for Addressing Success Criterion 2.2.1</a> for techniques related to providing notifications about time limits.

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F12" class="failure">F12: Failure of Success Criterion 2.2.5 due to having a session time limit without a mechanism re-authentication</a>
