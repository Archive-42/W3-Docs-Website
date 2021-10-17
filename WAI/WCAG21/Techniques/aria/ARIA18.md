-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA17](ARIA17)
-   [Next Technique: ARIA19](ARIA19)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Tests](#tests)

Using aria-alertdialog to Identify Errors
=========================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to:

-   [Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification) (Sufficient)
-   [Success Criterion 3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion) (Sufficient)
-   [Success Criterion 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages) (Advisory)

Description
-----------

The purpose of this technique is to alert people that an input error has occured. Using role="alertdialog" creates a notification. This notification should be modal with the following characteristics:

-   `aria-label` or `aria-labelledby` attribute gives the alertdialog an accessible name.
-   `aria-describedby` provides a reference to the text of the alert.
-   The alertdialog contains at least one focusable control, and the focus should move to that control when the alertdialog opens.
-   The tab order is constrained within the alertdialog whilst it is open.
-   When the dialog is dismissed, the focus moves back to the position it had before the dialog opened, if possible.

Note that the alertdialog should not be present in a way that it will be accessed by AT until it is needed. One way to do this is not to include it in the static HTML and instead to insert it into the DOM via script when the error condition is triggered. The insertion would correspond to the following HTML sample.

Examples
--------

### Example 1: Alert dialog

This example shows how a notification using role="alertdialog" can be used to notify someone they have entered invalid information.

    <div role="alertdialog" aria-labelledby="alertHeading" aria-describedby="alertText">
    <h1 id="alertHeading">Error</h1>
    <div id="alertText">Employee's Birth Date is after their hire date. Please verify the birth date and hire date.</div>
    <button>Save and Continue</button>
    <button>Return to page and correct error</button>
    </div>

Working example: [Alert dialog](../../working-examples/aria-alertdialog-identify-errors/).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/)

Tests
-----

### Procedure

1.  Trigger the error that causes the alertdialog to appear.
2.  Determine that the alertdialog contains at least one focusable control, and the focus moves to that control when the alertdialog opens.
3.  Determine that the tab order is constrained within the alertdialog while it is open, and when the dialog is dismissed, the focus moves back to the position it had before the dialog opene, if possible.
4.  Examine the element with role="alertdialog" applied.
5.  Determine that either the `aria-label` or `aria-labelledby` attribute has been correctly used to give the alertdialog an accessible name.
6.  Determine that the contents of the alertdialog identifies the input error.
7.  Determine whether contents of the alertdialog suggests how to fix the error.

### Expected Results

-   Checks 2, 3, 5 and 6 are true. For SC 3.3.3, Check 7 is also true.
