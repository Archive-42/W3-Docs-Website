-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF14](PDF14)
-   [Next Technique: PDF16](PDF16)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Providing submit buttons with the submit-form action in PDF forms
=================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents with forms.

This technique relates to [Success Criterion 3.2.2: On Input](https://www.w3.org/WAI/WCAG21/Understanding/on-input) (Sufficient when used with [G80: Providing a submit button to initiate a change of context](../general/G80)).

Description
-----------

The objective of this technique is to provide a mechanism that allows users to explicitly request a change of context using the submit-form action in a PDF form. The intended use of a submit button is to generate an HTTP request that submits data entered in a form, so it is an appropriate control to use for causing a change of context. In PDF documents, submit buttons are normally implemented using a tool for authoring PDF.

Examples 1 and 2 demonstrate how to add a submit button using specific authoring tools. There are other PDF tools that perform similar functions. Check the functionality provided by [](#pdf_notes_acc-sup_files_applications).

Examples
--------

### Example 1: Adding a submit button using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  From the toolbar, select Forms &gt; Form Tools &gt; Button and create a button on the form.
2.  Access the context menu for the button and select Properties... to open the Button Properties dialog.
3.  In the General tab, provide a tooltip for the button.
4.  In the Options tab, choose an option in the Layout menu for the button label, icon image, or both. Then, type text in the Label box to identify the button as a submit button and/or click Choose Icon and locate the image file you want to use.
5.  In the Actions tab:

    -   For Select Trigger, choose Mouse Up. (The Mouse Up event is keyboard accessible and, in addition, ensures that the button will not change context unexpectedly, as it might with, e.g., a Mouse Enter event.)
    -   For Select Action, choose Submit A Form.
    -   Click Add.

6.  In the Add dialog, enter a URL to collect data on a server or collect form data as e-mail attachments.

The following image shows the Options tab on the Button Properties dialog.

![Figure 1 The Options tab in the Button Properties dialog, showing the layout and label button properties.](img/submit-button2.jpg)

The following image shows the Actions tab on the Button Properties dialog.

![Figure 2 The Action tab in the Button Properties dialog with the Select Action option specified.](img/submit-button.jpg)

### Example 2: Adding a submit button using Adobe LiveCycle Designer ES 8.2.1

This example is shown with Adobe LiveCycle Designer. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  On the Insert &gt; Standard menu, select the HTTP Submit Button item.
2.  On the Object panel for the HTTP Submit Button, insert the URL for form-submission processing.

The following image shows the Standard menu with the list of form controls.

![Figure 3 The Standard menu showing the list of form controls, including the selection of the HTTP Submit Button.](img/http.gif)

The following image shows the Object panel with the URL and other fields for button appearance.

![Figure 4 The Object panel showing the URL and other fields for specifying the submit button's appearance and action.](img/submit-panel.gif)

### Example 3: Adding a script action to a submit button in a PDF document using JavaScript

The following JavaScript code illustrates the use of a script to specify the submit-form action. To add this script to the form field:

1.  Open the Button Properties dialog, as shown in Example 1, and select the Actions tab
2.  Select Run a JavaScript from the drop-down list, and select the Add button
3.  Enter JavaScript code in the JavaScript Editor dialog, for example:

<!-- -->

    var aSubmitFields = new Array( "name", "id", "juser" );
    this.submitForm({
      cURL: "http://www.example.com/cgi-bin/myscript.cgi#FDF",
      aFields: aSubmitFields,
      cSubmitAs: "FDF" // the default, not needed here
    });

The following images illustrate this process:

![Figure 5 The Button Properties dialog for a submit button.](img/submit-button1.jpg)

![Figure 6 The JavaScript added to the Action tab of the Button Properties dialog.](img/submit-button3.jpg)

This example is shown in operation in the [working example of adding a script action to a submit button](../../working-examples/pdf-submit-button/submit-button-js.pdf).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 12.7.5.2 (Submit-Form Action) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [Create submission forms in LiveCycle Designer](http://kb2.adobe.com/cps/332/332289.html)
-   [XML Forms Architecture (XFA) Specification Version 2.5](http://partners.adobe.com/public/developer/en/xml/xfa_spec_2_5.pdf)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [G80: Providing a submit button to initiate a change of context](https://www.w3.org/WAI/WCAG21/Techniques/general/G80)
-   [PDF23: Providing interactive form controls in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF23)
-   [PDF12: Providing name, role, value information for form fields in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF12)

Tests
-----

### Procedure

1.  For each page that submits a form, visually verify that the form contains a submit button and check one of the following:

    -   Tab to the button and check that it submits the form in response to user action to select the button.
    -   Open the PDF document with a tool that is capable of showing the submit-form action and check that the button action is to submit the form.

### Expected Results

-   \#1 is true for each page that contains a form.
