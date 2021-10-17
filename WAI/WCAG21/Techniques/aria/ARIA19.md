-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA18](ARIA18)
-   [Next Technique: ARIA20](ARIA20)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Tests](#tests)

Using ARIA role=alert or Live Regions to Identify Errors
========================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to:

-   [Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification) (Sufficient)
-   [Success Criterion 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages) (Sufficient using a more specific technique)

Description
-----------

The purpose of this technique is to notify Assistive Technologies (AT) when an input error occurs. The `aria-live` attribute makes it possible for an AT (such as a screen reader) to be notified when error messages are injected into a Live Region container. The content within the `aria-live` region is automatically read by the AT, without the AT having to focus on the place where the text is displayed.

There are also a number of [special case live region roles](https://www.w3.org/WAI/PF/aria-practices/#chobet) which can be used instead of applying live region properties directly.

Examples
--------

### Example 1: Injecting error messages into a container with role=alert already present in the DOM

The following example uses role=alert which is equivalent to using aria-live=assertive.

In the example there is an empty error message container element with aria-atomic=true and an aria-live property or alert role present in the DOM on page load. The error container must be present in the DOM on page load for the error message to be spoken by most screen readers. aria-atomic=true is necessary to make Voiceover on iOS read the error messages after more than one invalid submission.

jQuery is used to test if the inputs are empty on submit and inject error messages into the live region containers if so. Each time a new submit is attempted the previous error messages are removed from the container and new error messages injected.

    <script src="http://code.jquery.com/jquery.js"></script>
    <script>
    $(document).ready(function(e) {
        $('#signup').submit(function() {
            $('#errors').html('');
            if ($('#first').val() === '') {
                $('#errors').append('<p>Please enter your first name.</p>');
            }
            if ($('#last').val() === '') {
                $('#errors').append('<p>Please enter your last name.</p>');
            } 
            if ($('#email').val() === '') {
                $('#errors').append('<p>Please enter your email address.</p>');
            } 
            return false;
        });
    });
    </script>

    <form name="signup" id="signup" method="post" action="">
      <p id="errors" role="alert" aria-atomic="true"></p>
      <p>
        <label for="first">First Name (required)</label><br>
        <input type="text" name="first" id="first">
      </p>
      <p>
        <label for="last">Last Name (required)</label><br>
        <input type="text" name="last" id="last">
      </p>
      <p>
        <label for="email">Email (required)</label><br>
        <input type="text" name="email" id="email">
      </p>
      <p>
        <input type="submit" name="button" id="button" value="Submit">
      </p>
    </form>

Working example: [Using role=alert to identify errors](../../working-examples/aria-alert-identify-errors/).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/)
-   [HTML5 Accessibility Chops: ARIA role=alert browser support](https://www.paciellogroup.com/blog/2012/06/html5-accessibility-chops-aria-rolealert-browser-support/)
-   [Form Labels, ARIA Examples (Experimental)](http://html.cita.illinois.edu/nav/form/aria/)
-   [MSF&W Accessibility](http://www.msfw.com/accessibility/)
-   [WAI-ARIA, Supported States and Properties, aria-describedby](https://www.w3.org/TR/wai-aria/#aria-describedby)
-   [WAI-ARIA, The Roles model, alert](https://www.w3.org/TR/wai-aria/#alert)
-   [HTML5, A vocabulary and associated APIs for HTML and XHTML](https://www.w3.org/TR/html5/)

Tests
-----

### Procedure

1.  Determine that an empty error container role=alert or aria-live=assertive attribute is present in the DOM at page load.
2.  Trigger the error that causes the content in the live region to appear or update.
3.  Determine that the error message was injected into the already present error container.

### Expected Results

-   \#1 and \#3 are true.
