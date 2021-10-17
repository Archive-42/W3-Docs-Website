-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR2](SCR2)
-   [Next Technique: SCR16](SCR16)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Tests](#tests)

Using scripts to make nonessential alerts optional
==================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Scripting technologies which use scripting alerts for non-emergency communication.

This technique relates to:

-   [Success Criterion 2.2.4: Interruptions](https://www.w3.org/WAI/WCAG21/Understanding/interruptions) (Sufficient)
-   [Success Criterion 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages) (Advisory)

Description
-----------

The objective of this technique is to display a dialog containing a message (alert) to the user. When the alert is displayed, it receives focus and the user must activate the OK button on the dialog to dismiss it. Since these alerts cause focus to change they may distract the user, especially when used for non-emergency information. Alerts for non-emergency purposes such as displaying a quote of the day, helpful usage tip, or count down to a particular event, are not presented unless the user enables them through an option provided in the Web page.

This technique assigns a global JavaScript variable to store the user preference for displaying alerts. The default value is false. A wrapper function is created to check the value of this variable before displaying an alert. All calls to display an alert are made to this wrapper function rather than calling the alert() function directly. Early in the page, a button is provided for the user to enable the display of alerts on the page. This technique works on a visit by visit basis. Each time the page is loaded, alerts will be disabled and the user must manually enable them. Alternatively, the author could use cookies to store user preferences across sessions.

Examples
--------

### Example 1

The script below will display a quote in an alert box every ten seconds, if the user selects the "Turn Alerts On" button. The user can turn the quotes off again by choosing "Turn Alerts Off".

    <script type="text/javascript">
    var bDoAlerts = false;  // global variable which specifies whether to 
                                           // display alerts or not
    /* function to enable/disable alerts.
     * param boolean bOn - true to enable alerts, false to disable them.
    */
    function modifyAlerts(isEnabled) {
       bDoAlerts = isEnabled;
    }
    /* wrapper function for displaying alerts.  Checks the value of bDoAlerts
    *and only calls the alert() function when bDoAlerts is true.
    */
    function doAlert(aMessage) {
        if (bDoAlerts) {
           alert(aMessage);
        }
    }
    // example usage - a loop to display famous quotes.
    var gCounter = -1;  // global to store counter
    // quotes variable would be initialized with famous quotations
    var quotes = new Array("quote 1", "quote 2", "quote 3", "quote 4", "quote 5");
    function showQuotes() {
       if (++gCounter &gt;= quotes.length) {
         gCounter = 0;
       }
       doAlert(quotes[gCounter]);
       setTimeout("showQuotes();", 10000);
    }
    showQuotes();
    </script>

Within the body of the page, include a way to turn the alerts on and off. Below is one example:

    <body>
    <p>Press the button below to enable the display of famous quotes 
    using an alert box<br />
    <button id="enableBtn" type="button" onclick="modifyAlerts(true);">
    Turn Alerts On</button><br />
    <button id="disableBtn" type="button" onclick="modifyAlerts(false);">
    Turn Alerts Off</button></p>

Working example of this code: [Demonstration of Alerts](../../working-examples/script-enable-alerts/).

Tests
-----

### Procedure

For a Web page that supports non-emergency interruptions using a JavaScript alert:

1.  Load the Web page and verify that no non-emergency alerts are displayed.
2.  Verify there is a mechanism to activate the non-emergency alerts.
3.  Activate the non-emergency alerts and verify that the alerts are displayed.

### Expected Results

-   For a Web page that supports non-emergency interruptions using a JavaScript alert, checks 1, 2, and 3 above are true.
