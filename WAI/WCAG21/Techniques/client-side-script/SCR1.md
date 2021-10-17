-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA24](../aria/ARIA24)
-   [Next Technique: SCR2](SCR2)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Allowing the user to extend the default time limit
==================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Time limits that are controlled by client-side scripting.

This technique relates to [Success Criterion 2.2.1: Timing Adjustable](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable) (Sufficient, together with [SCR16: Providing a script that warns the user a time limit is about to expire](../client-side-script/SCR16)).

Description
-----------

The objective of this technique is to allow user to extend the default time limit by providing a mechanism to extend the time when scripts provide functionality that has default time limits. In order to allow the user to request a longer time limit, the script can provide a form (for example) allowing the user to enter a larger time limit or indicating that more time is needed. If the user is being warned that a time limit is about to expire (see [](#SCR16)), this form can be made available from the warning dialog. The user can extend the time limit to at least 10 times the default time limit, either by allowing the user to indicate how much additional time is needed or by repeatedly allowing the user to extend the time limit.

Examples
--------

-   A Web page contains current stock market statistics and is set to refresh periodically. When the user is warned prior to refreshing the first time, the user is provided with an option to extend the time period between refreshes.
-   In an online chess game, each player is given a time limit for completing each move. When the player is warned that time is almost up for this move, the user is provided with an option to increase the time.

Resources
---------

Resources are for information purposes only, no endorsement implied.

1.  [PHPBuilder Time-out Info](http://www.phpbuilder.com/tips/item.php?id=141)

Related Techniques
------------------

-   [SCR16: Providing a script that warns the user a time limit is about to expire](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR16)

Tests
-----

### Procedure

1.  On a Web page that uses scripts to enforce a time limit, wait until the time limit has expired.
2.  Determine if an option was provided to extend the time limit.

### Expected Results

-   \#2 is true and more time is provided to complete the interaction.
