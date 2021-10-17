-   [Contents](. "Table of Contents")
-   [GL: Enough Time](enough-time)
-   [Previous SC: No Timing](no-timing)
-   [Next SC: Re-authenticating](re-authenticating)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.2.4: Interruptions
====================================================

> Success Criterion [2.2.4 Interruptions](https://www.w3.org/TR/WCAG21/#interruptions) (Level AAA): Interruptions can be postponed or suppressed by the user, except interruptions involving an [emergency](#dfn-emergency).

Intent
------

The intent of this Success Criterion is to allow users to turn off updates from the author/server except in emergencies. Emergencies would include civil emergency alert messages or any other messages that warn of danger to health, safety, or property, including data loss, loss of connection, etcetera.

This allows access by people with cognitive limitations or attention disorders by enabling them to focus on the content. It also allows users who are blind or have low vision to keep their "viewing" focus on the content they are currently reading.

Benefits
--------

-   Individuals with attention deficit disorders can focus on content without distraction.
-   Individuals with low vision or who use screen readers will not have content updated while they are viewing it (which can lead to discontinuity and misunderstanding if they start reading in one topic and finish in another).

Examples
--------

-   **Example 1. Setting user preferences**

    The preferences page of a Web portal includes an option to postpone all updates and alerts until the end of the current session, except for alerts concerning emergencies.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G75" class="general">G75: Providing a mechanism to postpone any updating of content</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G76" class="general">G76: Providing a mechanism to request an update of the content instead of updating automatically</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR14" class="script">SCR14: Using scripts to make nonessential alerts optional</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F40" class="failure">F40: Failure due to using meta redirect with a time limit</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F41" class="failure">F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page</a>

Key Terms
---------

emergency

a sudden, unexpected situation or occurrence that requires immediate action to preserve health, safety, or property
