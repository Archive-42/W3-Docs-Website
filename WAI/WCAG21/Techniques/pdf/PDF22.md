-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF21](PDF21)
-   [Next Technique: PDF23](PDF23)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Indicating when user input falls outside the required format or values in PDF forms
===================================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents

This technique relates to:

-   [Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification) (Sufficient)
-   [Success Criterion 3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion) (Sufficient)

Description
-----------

The objective of this technique is to notify the user when user input to a field that requires a specific, required format (e.g., date fields) is not submitted in that format.

If the required format is not used, an alert dialog describes the nature of the error in text. This may be accomplished through scripting created by the author (see, for example, [SCR18: Providing client-side validation and alert](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18)). User agents, such as Adobe LiveCycle can provide automatic alerts (as described in the examples below).

Note

Once the user dismisses the alert dialog, it may be helpful if the script positions the keyboard focus on the field where the error occurred, although some users may expect the focus to remain on the last control focused prior to the alert appearing. Authors should exercise care to ensure that any movement of the focus will be expected. For example, if the alert announces an error in a phone number format, positioning the focus on the phone number field when the alert is dismissed can be regarded as helpful and expected. In some cases, however, this may not be possible. If multiple input errors occur on the page, an alternative approach to error notification should be implemented.

Ensuring that users are aware an error has occurred, can determine what is wrong, and can correct it are key to software usability and accessibility. Meeting this objective helps ensure that all users can complete for-based transactions with ease and confidence.

### Labels for required formats in form controls

It is also important that users are aware that an error *may* occur. You can incorporate this information in labels; for example, "Date (MM/DD/YYYY)." See [](#PDF10).

Examples
--------

### Example 1: Providing validation for an input field format using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

Many fields -- telephone number, postal code, date -- must have data entered in a specific format or pattern.

1.  Access the context menu for the form control that requires a specific format.
2.  Select Properties...
3.  In the Format tab, select the Format Category (in this case, Date). The Date Options appear.
4.  Select the format for this form control (in this case, mm/dd/yyyy).
5.  In the General tab, specify "Date (mm/dd/yyyy)" for the Name and Tooltip for the control.

![Figure 1 Specifying a required format for an input field format using Adobe Acrobat 9 Pro](img/dateformat.jpg)

When a user types a recognized date format, it is converted automatically to the specified format. If the date format or value is not recognized, an error alert appears and provides further information, as shown in the image below.

![Figure 2 Error alert for date with unrecognized format or value.](img/dateerror.jpg)

This example is shown in operation in the [working example of Required Fields in Acrobat](../../working-examples/pdf-required-fields/required-fields.pdf).

### Example 2: Providing validation for an input field format using Adobe LiveCycle Designer ES 8.2.1

This example is shown with Adobe LiveCycle Designer. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  Select the form control that has a required format.
2.  In the Object palette, click the Validation Pattern... button.
3.  Because this is a date field the Patterns-Date Field dialog appears. Select the pattern or format you want users to enter. Then click OK.

    ![Figure 3 Using LiveCycle to specify form fields that require pattern validation](img/form-validation.jpg)

4.  In the Object palette, use the Validation Pattern Message box to type a warning message. Be sure to include the required pattern. This message appears when a user tries to submit the form using an invalid date format.

This example is shown in operation in the [working example of Required Fields in LiveCycle Designer](../../working-examples/pdf-required-fields/required-fields-lc.pdf).

### Example 3: Validating a required date format in a PDF form using JavaScript using Adobe Acrobat Pro 9

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

The following JavaScript code illustrates the use of a script to validate form fields, in this case, a date field. To add this script to the form field, open the Text Field Properties dialog, as shown in Example 1, and select Edit in the Validate tab:

![Figure 4 Text Field Properties dialog, with the Validate tab open to specify JavaScript validation code.](img/jscript.jpg)

    // JavaScript code for date mask format MM/DD/YYYY
    var re = /^[mdy0-9]{2}\/[mdy0-9]{2}\/[mdy0-9]{4}$/
    //Allow blank space in field
    if (event.value !="") {
      if (re.test(event.value) == false) {
        app.alert ({
           cTitle: "Incorrect Format",
           cMsg: "Please enter date using mm/dd/yyyy format"
        });
      }
    }

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [JavaScript for Acrobat](http://www.adobe.com/devnet/acrobat/javascript.html)

Related Techniques
------------------

-   [G89: Providing expected data format and example](https://www.w3.org/WAI/WCAG21/Techniques/general/G89)
-   [SCR18: Providing client-side validation and alert](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18)
-   [PDF23: Providing interactive form controls in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF23)
-   [PDF10: Providing labels for interactive form controls in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10)
-   [PDF5: Indicating required form controls in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF5)

Tests
-----

### Procedure

For each form field that requires specific input, verify that validation information and instructions are provided by applying the following:

1.  Check that the format or value that is required is indicated in the form control's label.
2.  Use an erroneous format or value and move off the field: make sure that an alert describing the error is provided.

### Expected Results

-   \#1 and \#2 are true.
