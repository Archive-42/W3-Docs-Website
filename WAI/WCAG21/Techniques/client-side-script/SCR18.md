-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR16](SCR16)
-   [Next Technique: SCR19](SCR19)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Techniques](#related)
-   [Tests](#tests)

Providing client-side validation and alert
==========================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Content that validates user input.

This technique relates to:

-   [Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification) (Sufficient)
-   [Success Criterion 3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion) (Sufficient)
-   [Success Criterion 3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion) (Advisory)
-   [Success Criterion 3.3.4: Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data) (Advisory)

Description
-----------

The objective of this technique is to validate user input as values are entered for each field, by means of client-side scripting. If errors are found, an alert dialog describes the nature of the error in text. Once the user dismisses the alert dialog, it is helpful if the script positions the keyboard focus on the field where the error occurred.

Examples
--------

### Example 1: Checking a single control with an event handler

The following script will check that a valid date has been entered in the form control.

    <label for="date">Date:</label>
    <input type="text" name="date" id="date" 
    onchange="if(isNaN(Date.parse(this.value))) 
    alert('This control is not a valid date. 
    Please re-enter the value.');" />

### Example 2: Checking multiple controls when the user submits the form

The following sample shows multiple controls in a form. The `form` element uses the `onsubmit` attribute which creates an event handler to execute the validation script when the user attempts to submit the form. If the validation is successful, the event returns `true` and the form submission proceeds; if the validation finds errors, it displays an error message and returns `false` to cancel the submit attempt so the user can fix the problems.

Note

This example demonstrates an alert for simplicity. A more helpful notification to the user would be to highlight the controls with problems and add information to the page about the nature of the errors and how to navigate to the controls that require data fixes.

Although this example uses an `onsubmit` attribute on the `form` element for brevity, normal practice is to create a submit event listener when the page is loaded.

Script code:

    function validate() {
        // initialize error message
        var msg = "";
        
        //validate name
        var pattern = /^[a-zA-Z\s]+$/;
        var el = document.getElementById("name");
        if (!pattern.test(el.value))  msg += "Name can only have letters and spaces. ";
        
        // validate number
        var pattern = /^[\d\-+\.\s]+$/;
        var el = document.getElementById("tel");
        if (!pattern.test(el.value))  msg += "Telephone number can only have digits and separators. ";
        
        if (msg != "") {
            alert(msg);
            return false;
        } else return true;
    }

Form code:

    <form action="multiple-controls.html" onsubmit="return validate()">
        <p>
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" />
        </p>
        <p>
            <label for="tel">Telephone number: </label>
            <input type="text" name="tel" id="tel" />             
        </p>
        <p>
            <input type="submit" />
        </p>
    </form>

This is demonstrated in the [working example of checking multiple controls when the user submits the form](../../working-examples/script-check-multiple-controls/).

Related Techniques
------------------

-   [G89: Providing expected data format and example](https://www.w3.org/WAI/WCAG21/Techniques/general/G89)

Tests
-----

### Procedure

For form fields that require specific input:

1.  enter invalid data
2.  determine if an alert describing the error is provided.

### Expected Results

-   \#2 is true
