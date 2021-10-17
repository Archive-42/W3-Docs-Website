[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Forms</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Multi-page Forms</span></span> </span>

Multi-page Forms
================

Where possible, divide long forms into multiple smaller forms that constitute a series of logical steps or stages. This helps make long forms less daunting and easier to understand, particularly for people who are less experienced using computers or who have various cognitive disabilities. The following basic principles should apply for multi-step forms:

-   Repeat [overall instructions](../instructions/#overall-instructions) on every page.
-   Split the form up according to its logical groups of controls. For example, in an online shop, shipping and payment information are typically separated.
-   Make it easy to recognize and to skip optional stages. For example, highlight optional steps in the main heading of the web page and provide an option to skip.
-   If possible, don’t set a time limit to fill out the form. If a time limit is required, provide a feature that allows the user to adjust or extend the time limit.

Indicating progress
-------------------

If possible, the first step of a form should explain how many steps will follow. Each step should inform the user about the progress they are making.

### Using the page title

The `<title>` element is the first item read by many people, such as screen reader users. Changing the title of the page to include the progress gives immediate feedback. This information should precede other information provided in the title, such as the name of the step or any error notifications.

Example:

Step 2 of 4: Shipping Address – Complete Purchase – Galactic Teddy Bears Shop

Code snippet:

    <title>Step 2 of 4: Shipping Address – Complete Purchase – Galactic Teddy Bears Shop</title>

### Using the main heading

Using the main heading to inform users is a good way to provide the same information for people scanning the page visually, as the main heading usually is prominent in the document.

Example:

Shipping Address (Step 2 of 4)
==============================

Code snippet:

    <h1>Shipping Address (Step 2 of 4)</h1>

### Using the HTML5 progress element

HTML5 provides a `progress` element that can be used to inform users about the progress. This can be particularly useful in situations where the number of steps depends on user input, such as in a survey where steps are skipped depending on how questions were answered.

Example:

Survey

(Step 1 of circa 7)

  
Survey

(Step 2 of circa 7)

  
\[…\] Survey

(Step 6 of circa 7)

  
Survey

(Finished)

Code snippet:

    Survey <progress max="7" value="1">(Step 1 of circa 7)</progress><br>

    Survey <progress max="7" value="2">(Step 2 of circa 7)</progress><br>

    […]

    Survey <progress max="7" value="6">(Step 6 of circa 7)</progress><br>

    Survey <progress max="7" value="7">(Finished)</progress>

The progress element, like other form elements, is a component from the operating system rendered directly on the website. Those components are animated in some operating systems which would violate WCAG’s [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide) success criterion that requires that users are able to disable an animation that starts automatically, lasts more than 5 seconds and is presented in parallel with other content.

The animation can be stopped by using custom styling with browser-specific CSS as shown below.

Code snippet:

    /* Microsoft IE */
    progress {
      color: #036;
    }

    /* Apple Safari and Google Chrome */
    progress::-webkit-progress-bar {
        background-color: #036;
    }

    /* Mozilla Firefox */
    progress::-moz-progress-bar {
        background-color: #036;
    }

### Using step-by-step indicator

If a form has a known number of steps to be completed, a step-by-step indicator can help users orient themselves. In the example below, we use an ordered list with a list item for every step. Visually hidden text is used to indicate the current and completed steps. If possible, provide a link to steps already completed, so the user can review them. In this case, any data already entered in the current step should be saved.

Example:

1.  <span class="visuallyhidden">Completed: </span> [Billing Address](billing.html)
2.  <span class="visuallyhidden">Current: </span> Shipping Address
3.  Review Order
4.  Payment
5.  Finish Purchase

Code snippet: HTML

    <div class="tlwrapper">
        <ol class="timeline">
            <li class="timeline-past">
                    <span class="visuallyhidden">Completed: </span>
                    <a href="billing.html">Billing Address</a>
            </li>
            <li class="timeline-current">
                <span class="visuallyhidden">Current: </span>
                <span>Shipping Address</span>
            </li>
            <li><span>Review Order</span></li>
            <li><span>Payment</span></li>
            <li><span>Finish Purchase</span></li>
        </ol>
    </div>

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [1.3.1 Info and Relationships:](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)

-   [2.2.1 Timing Adjustable:](https://www.w3.org/WAI/WCAG21/quickref/#timing-adjustable) For each time limit that is set by the content, at least one of the following is true:

    -   Turn off: The user is allowed to turn off the time limit before encountering it; or
    -   Extend: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or
    -   Real-time Exception: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or
    -   Essential Exception: The time limit is essential and extending it would invalidate the activity; or
    -   20 Hour Exception: The time limit is longer than 20 hours.

    (Level A)

-   [2.2.2 Pause, Stop, Hide:](https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide) For moving, blinking, scrolling, or auto-updating information, all of the following are true:

    -   **Moving, blinking, scrolling:** For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and

    -   **Auto-updating:** For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

    (Level A)

-   [3.3.2 Labels or Instructions:](https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions) Labels or instructions are provided when content requires user input. (Level A)

**Techniques:**

-   [G133: Providing a checkbox on the first page of a multipart form that allows users to ask for longer session time limit or no session time limit](https://www.w3.org/WAI/WCAG21/Techniques/general/G133)
-   [G180: Providing the user with a means to set the time limit to 10 times the default time limit](https://www.w3.org/WAI/WCAG21/Techniques/general/G180)
-   [G198: Providing a way for the user to turn the time limit off](https://www.w3.org/WAI/WCAG21/Techniques/general/G198)
-   [H71: Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H71)
-   [SCR1: Allowing the user to extend the default time limit](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR1)
-   [SCR16: Providing a script that warns the user a time limit is about to expire](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR16)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">User Notifications</span></span>](../notifications/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Custom Controls</span></span>](../custom-controls/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/forms/multi-page.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Forms Tutorial
--------------

-   [<span class="count"></span><span class="txt">Forms Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Labeling Controls</span>](../labels/)
-   [<span class="count"></span><span class="txt">Grouping Controls</span>](../grouping/)
-   [<span class="count"></span><span class="txt">Form Instructions</span>](../instructions/)
-   [<span class="count"></span><span class="txt">Validating Input</span>](../validation/)
-   [<span class="count"></span><span class="txt">User Notifications</span>](../notifications/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Multi-page Forms</span></span>
-   [<span class="count"></span><span class="txt">Custom Controls</span>](../custom-controls/)

All Tutorials
-------------

-   [<span class="count"></span><span class="txt">Page Structure</span>](../../page-structure/)
-   [<span class="count"></span><span class="txt">Menus</span>](../../menus/)
-   [<span class="count"></span><span class="txt">Images</span>](../../images/)
-   [<span class="count"></span><span class="txt">Tables</span>](../../tables/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Forms</span></span>
-   [<span class="count"></span><span class="txt">Carousels</span>](../../carousels/)

Document Information
--------------------

**Feedback: We welcome ideas for improvements, bug reports, and comments** via [GitHub](https://github.com/w3c/wai-tutorials) or e-mail to <wai-eo-editors@w3.org> (a publicly archived list) or <wai@w3.org> (a WAI staff-only list).

-   **Status:** Updated 27 July 2019 (first published September 2014)
-   Editors:
    -   [Eric Eggert](https://www.w3.org/People/yatil/)
    -   [Shadi Abou-Zahra](https://www.w3.org/People/shadi/)

    Contributors:
    -   The Web Content Accessibility Guidelines Working Group ([WCAG WG](https://www.w3.org/WAI/GL/))
    -   the Education and Outreach Working Group ([EOWG](https://www.w3.org/WAI/EO/))

-   Developed with support from the [WAI-ACT project](https://www.w3.org/WAI/ACT/), co-funded by the **European Commission IST Programme**.
-   \[[<span class="count"></span><span class="txt">Attributions</span>](../../attributions/)\] \[[<span class="count"></span><span class="txt">Changelog</span>](../../changelog/)\]

\[[WAI Site Map](https://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)\] \[[Search](https://www.w3.org/WAI/search.php)\] \[[Contacting WAI](https://www.w3.org/WAI/contacts)\]

Copyright © 2019 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
