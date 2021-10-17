-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA20](ARIA20)
-   [Next Technique: ARIA22](ARIA22)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using Aria-Invalid to Indicate An Error Field
=============================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

HTML with [Accessible Rich Internet Applications](https://www.w3.org/TR/wai-aria/).

This technique relates to [Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification) (Sufficient).

Description
-----------

This technique demonstrates how `aria-invalid` may be employed to specifically identify fields that have failed validation. Its use is most suitable when:

-   The error description does not programmatically identify the failed fields
-   The failed fields are identified in a manner that is not available to some users - for example by using an error-icon rendered visually by some technique that does not rely on color such as a visual cue like a border.

Note

One of the above two situations may be true for a field which has programmatically associated label and / or instructions that conveys data format, a data range, or the `required` property.

While it is always preferable to programmatically associate specific error description with the failed field, the page's design or the framework employed may sometimes constrain the author's ability to do so. In these cases, authors may programmatically set `aria-invalid` to "true" on the fields that have failed validation. This is interpretable mainly by assistive technologies (like screen readers / screen magnifiers) employed by users who are vision impaired. When a field has `aria-invalid` set to “true”, VoiceOver in Safari announces “invalid data” when the field gets focus; JAWS and NVDA notify the error as an “invalid entry”.

This ARIA attribute has to be set / turned on programmatically. It should not be set to “true” before input validation is performed or the form is submitted. Setting `aria-invalid` to “false” is the same as not placing the attribute for the form control at all. Quite understandably, nothing is conveyed by assistive technology to users in this case.

When visible text is used to programmatically identify a failed field and / or convey how the error can be corrected, setting `aria-invalid` to "true" is not required from a strict compliance standpoint but may still provide helpful information for users.

Examples
--------

### Example 1: Using aria-invalid on required fields

The `aria-invalid` attribute is used on required fields that have no input. A message above the form conveys that form submission has failed due to this.

A portion of the jQuery code and the HTML form markup follow:

    <code>
    <script>
    ...
    ...
            if ($('#first').val() === '') {
                $('#first').attr("aria-invalid", "true");
    $("label[for='first']").addClass('failed');
            }
            if ($('#last').val() === '') {
                $('#last').attr("aria-invalid", "true");
    $("label[for='last']").addClass('failed');
            } 
            if ($('#email').val() === '') {
                $('#email').attr("aria-invalid", "true");
    $("label[for='email']").addClass('failed');
            } 
    ...
    ...
    </script>
    <style type="text/css">
    label.failed {
        border: red thin solid;
    }
    </style>
    <form name="signup" id="signup" method="post" action="#">
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
    </code>            

[Working example: Using aria-invalid on required fields](../../working-examples/aria-invalid-required-fields/).

### Example 2: Identifying errors in data format

`Aria-invalid` and `aria-describedby` are used together to indicate an error when the personal identification number (PIN), email address, or start date are not in the expected format. The error message is associated with the field using `aria-describedby`, and `aria-invalid` makes it easier to programmatically find fields with errors.

Below is the rendered HTML code for the email address field in Example 1: When an invalid email address is entered by the user such as "samexample.com" (instead of sam@example.com), the HTML code is:

    <div class="control">
    <p><label for="email">Email address: [*]</label> 
    <input type="text" name="email" id="email" class="error" aria-invalid="true" aria-describedBy="err_1" /></p> 
    <span class="errtext" id="err_1">Error: Incorrect data</span></div>
                

And when no data is entered in the email field, the HTML code is:

    <div class="control">
    <p><label for="email">Email address: [*]</label> 
    <input type="text" name="email" id="email" class="error" aria-invalid="true" aria-describedBy="err_2" /></p>
    <span class="errtext" id="err_2">
     Error: Input data missing</span>
    </div>            

jQuery code: jQuery is used to add aria-invalid or aria-describedby attributes as well as the class attribute and append the error text. This is the code that inserts aria-invalid and class="error" but does not associate the error text "incorrect data" with the control programmatically:

    $(errFld).attr("aria-invalid", "true").attr("class", "error");
    // Suffix error text: 
    $(errFld).parent().append('<span class="errtext">Error: Incorrect data</span>');
                

CSS Code:

    input.error {
       border: red thin solid;}
    span.errtext {
        margin-bottom: 1em;     padding: .25em 1.4em .25em .25em;
        border: red thin solid;     background-color: #EEEEFF;
        background-image:url('images/iconError.gif');
        background-repeat:no-repeat;    background-position:right;  
    }
                

[Working example: Identifying errors in data format](../../working-examples/aria-invalid-data-format/).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Supported States and Properties: WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/#states_and_properties)
-   [Using Aria-invalid for Error Indication](http://www.deque.com/blog/aria-invalid-error-indication/)

Related Techniques
------------------

-   [G83: Providing text descriptions to identify required fields that were not completed](https://www.w3.org/WAI/WCAG21/Techniques/general/G83)
-   [G85: Providing a text description when user input falls outside the required format or values](https://www.w3.org/WAI/WCAG21/Techniques/general/G85)
-   [G139: Creating a mechanism that allows users to jump to errors](https://www.w3.org/WAI/WCAG21/Techniques/general/G139)
-   [SCR32: Providing client-side validation and adding error text via the DOM](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR32)
-   [ARIA18: Using aria-alertdialog to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA18)
-   [ARIA19: Using ARIA role=alert or Live Regions to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19)

Tests
-----

### Procedure

For each form control that relies on `aria-invalid` to convey a validation failure:

1.  Check that `aria-invalid` is not set to true when a validation failure does not exist.
2.  Check that `aria-invalid` is set to true when a validation failure does exist.
3.  Check that the programmatically associated labels / programmatically associated instructional text for the field provide enough information to understand the error.

### Expected Results

-   Checks \#1-3 are true.
