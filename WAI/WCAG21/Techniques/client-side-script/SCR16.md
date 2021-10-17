-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR14](SCR14)
-   [Next Technique: SCR18](SCR18)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Techniques](#related)
-   [Tests](#tests)

Providing a script that warns the user a time limit is about to expire
======================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Time limits exist that are controlled by script.

This technique relates to [Success Criterion 2.2.1: Timing Adjustable](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable) (Sufficient, together with [SCR1: Allowing the user to extend the default time limit](../client-side-script/SCR1) ).

Description
-----------

The objective of this technique is to notify users that they are almost out of time to complete an interaction. When scripts provide functionality that has time limits, the script can include functionality to warn the user of imminent time limits and provide a mechanism to request more time. 20 seconds or more before the time limit occurs, the script provides a confirm dialog that states that a time limit is imminent and asks if the user needs more time. If the user answers "yes" then the time limit is reset. If the user answers "no" or does not respond, the time limit is allowed to expire.

This technique involves time limits set with the window.setTimeout() method. If, for example, the time limit is set to expire in 60 seconds, you can set the time limit for 40 seconds and provide the confirm dialog. When the confirm dialog appears, a new time limit is set for the remaining 20 seconds. Upon expiry of the "grace period time limit" the action that would have been taken at the expiry of the 60 second time limit in the original design is taken.

Examples
--------

### Example 1

A page of stock market quotes uses script to refresh the page every five minutes in order to ensure the latest statistics remain available. 20 seconds before the five minute period expires, a confirm dialog appears asking if the user needs more time before the page refreshes. This allows the user to be aware of the impending refresh and to avoid it if desired.

    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
       "https://www.w3.org/TR/html4/loose.dtd">
    <html lang="en">
    <head>
    <title>Stock Market Quotes</title>
    <script type="text/javascript">
    <!--
    function timeControl() {
        // set timer for 4 min 40 sec, then ask user to confirm.
        setTimeout('userCheck()', 280000);
    }
    function userCheck() {
        // set page refresh for 20 sec
        var id=setTimeout('pageReload()', 20000);
        // If user selects "OK" the timer is reset 
        // else the page will refresh from the server.
        if (confirm("This page is set to refresh in 20 seconds. 
        Would you like more time?"))
        {
        clearTimeout(id);
        timeControl();
        }
    }
    function pageReload() {
        window.location.reload(true);
    }
    timeControl();
    -->
    </script>
    </head>
    <body>
    <h1>Stock Market Quotes</h1>
    ...etc...
    </body>
    </html>

Related Techniques
------------------

-   [SCR1: Allowing the user to extend the default time limit](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR1)

Tests
-----

### Procedure

On a Web page that has a time limit controlled by a script:

1.  load the page and start a timer that is 20 seconds less than the time limit.
2.  when the timer expires, check that a confirmation dialog is displayed warning of the impending time limit.

### Expected Results

-   \#2 is true.
