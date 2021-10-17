-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR21](SCR21)
-   [Next Technique: SCR24](SCR24)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Tests](#tests)

Using scripts to control blinking and stop it in five seconds or less
=====================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support script-controlled blinking of content.

This technique relates to [Success Criterion 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide) (Sufficient).

Description
-----------

The objective of this technique is to control blinking with script so it can be set to stop in less than five seconds by the script. Script is used to start the blinking effect of content, control the toggle between visible and hidden states, and also stop the effect at five seconds or less. The setTimeout() function can be used to toggle blinking content between visible and hidden states, and stop when the number of iterations by the time between them adds up to nearly five seconds.

Examples
--------

### Example 1

This example uses JavaScript to control blinking of some HTML and XHTML content. JavaScript creates the blinking effect by changing the visibility status of the content. It controls the start of the effect and stops it within five seconds.

    ...
    <div id="blink1" class="highlight">New item!</div>
    <script type="text/javascript">
    <!--
    // blink "on" state
    function show()
    {
        if (document.getElementById)
        document.getElementById("blink1").style.visibility = "visible";
    }
    // blink "off" state
    function hide()
    {
        if (document.getElementById)
        document.getElementById("blink1").style.visibility = "hidden";
    }
    // toggle "on" and "off" states every 450 ms to achieve a blink effect
    // end after 4500 ms (less than five seconds)
    for(var i=900; i < 4500; i=i+900)
    {
        setTimeout("hide()",i);
        setTimeout("show()",i+450);
    }
    -->
    </script>
    ...
                

Working example of this code: [Using script to control blinking](../../working-examples/script-control-blink/).

Tests
-----

### Procedure

For each instance of blinking content:

1.  Start a timer for 5 seconds at the start of the blink effect.
2.  When the timer expires, determine if the blinking has stopped.

### Expected Results

-   For each instance of blinking content, \#2 is true.
