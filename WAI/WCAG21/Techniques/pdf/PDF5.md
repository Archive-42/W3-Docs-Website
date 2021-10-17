-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF4](PDF4)
-   [Next Technique: PDF6](PDF6)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Indicating required form controls in PDF forms
==============================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents with forms

This technique relates to:

-   [Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification) (Sufficient)
-   [Success Criterion 3.3.2: Labels or Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions) (Sufficient when used with [G131: Providing descriptive labels](../general/G131))
-   [Success Criterion 3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion) (Sufficient)

Description
-----------

The objective of this technique is to notify the user when a field that must be completed has not been completed in a PDF form. Required fields are implemented using the /Ff entry in the form field's dictionary (see Table 220 in Section 12.7 (Interactive Forms) of [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf). This is normally accomplished using a tool for authoring PDF.

If errors are found, an alert dialog describes the nature of the error in text. This may be accomplished through scripting created by the author (see, for example, [SCR18: Providing client-side validation and alert](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18)). User agents, such as Adobe Acrobat Pro and LiveCycle, can provide automatic alerts (as described in the examples below).

*Note*: once the user dismisses the alert dialog, it may be helpful if the script positions the keyboard focus on the field where the error occurred, although some users may expect the focus to remain on the last control focused prior to the alert appearing. Authors should exercise care to ensure that any movement of the focus will be expected. For example, if the alert announces a missing required phone number, positioning the focus on the phone number field when the alert is dismissed can be regarded as helpful and expected. In some cases, however, this may not be possible. If multiple input errors occur on the page, another approach must be taken to error reporting. (See, for example, the [Adobe scripting resources.](http://www.adobe.com/devnet/acrobat/javascript.html))

Ensuring that users are aware an error has occurred, can determine what is wrong, and can correct it are keys to software usability and accessibility. Meeting this objective helps ensure that all users can complete transactions with ease and confidence.

### Labels for required form controls

It is also important that users are aware that an error *may* occur. You can incorporate this information in labels; for example, "Date (required)" or the use of a red asterisk to indicate required fields. (Make sure that a legend appears on each form with required fields, e.g., "\* = required field".) See [](#PDF10).

Examples
--------

### Example 1: Creating a required field in a PDF form using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  Access the context menu of the field and select the Properties dialog.
2.  If the field is required, check the Required box. This checkbox forces the user to fill in the selected form field. If the user attempts to submit the form while a required field is blank, an error message appears and the empty required form field is highlighted.

![Figure 1 The Properties dialog for a form field. The Required box is checked.](img/form4.jpg)

This example is shown in operation in the [working example of creating a required field in Acrobat](../../working-examples/pdf-required-fields/required-fields.pdf).

### Example 2: Creating a required field in a PDF form using Adobe LiveCycle Designer ES 8.2.1

This example is shown with Adobe LiveCycle Designer. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  Access the context menu of the form control, select Palettes, and select Object.
2.  Select "User entered - Required" from the Type pulldown.
3.  Enter an error message in the "Empty Message" field. This message appears when a user tries to submit the form without entering a value in the required field.

If the user attempts to submit the form with a required field left blank, the Empty Message text appears and the empty required field is highlighted.

The image below shows the Adobe LiveCycle Object palette with the required selection.

![Figure 2 Image of Adobe LiveCycle Object palette showing the 'User entered - Required' selection.](img/lc-required2.gif)

You can also add explicit text to the form label to indicate required fields (e.g., "(Required)").

This example is shown in operation in the [working example of creating a required field in LiveCycle Designer](../../working-examples/pdf-required-fields/required-fields-lc.pdf).

### Example 3: Adding a required text field in a PDF form using the /Tx field type and Ff flag

The following code fragment illustrates code that is typical for the object definitions for a typical text field. Note that the text field is required, using the Ff flag. This is typically accomplished by an authoring tool.

    << /AP -dict-                                                   
       /DA /Helv  0 Tf 0 g
       /DR -dict-
       /F 0x4
       /FT Tx              % FT key set to Tx for Text Field
       /Ff 0x2             % Ff integer 0x2 value indicates required
       /P -dict-
       /Rect -array-
       /StructParent 0x1
       /Subtype Widget
       /T First            % Partial field name First
       /TU First name (required)  % TU tool tip value serves as short description
       /Type Annot
       /V Pat Jones
    >>
    ...
    <Start Stream>
     BT
      /P <</MCID 0 >>BDC
      /CS0 cs 0  scn 
      /TT0 1 Tf
        -0.001 Tc 0.003 Tw 11.04 0 0 11.04 72 709.56 Tm
        [(P)-6(le)-3(as)10(e)-3( )11(P)-6(rin)2(t)-3( Y)8(o)-7(u)2(r N)4(a)11(m)-6(e)]TJ
      0 Tc 0 Tw 9.533 0 Td
      ( )Tj
      -0.004 Tc 0.004 Tw 0.217 0 Td
      [(\()-5(R)-4(e)5(q)-1(u)-1(i)-3(r)-3(e)-6(d)-1(\))]TJ
     EMC
      /P <</MCID 1 >>BDC
      0 Tc 0 Tw 4.283 0 Td
      [( )-2( )]TJ
       EMC
       /ArtifactSpan <</MCID 2 >>BDC
       0.002 Tc -0.002 Tw 0.456 0 Td
      [(__)11(___)11(___)11(___)11(___)11(_)11(____)11(___)11(___)11(__)]TJ
      0 Tc 0 Tw 13.391 0 Td
      ( )Tj
      EMC
     ET
    <End Stream>

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 12.7 (Interactive Forms) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [Adobe XML Forms Architecture (XFA)](http://partners.adobe.com/public/developer/xml/index_arch.html)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [G83: Providing text descriptions to identify required fields that were not completed](https://www.w3.org/WAI/WCAG21/Techniques/general/G83)
-   [H90: Indicating required form controls using label or legend](https://www.w3.org/WAI/WCAG21/Techniques/html/H90)
-   [SCR18: Providing client-side validation and alert](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18)
-   [PDF23: Providing interactive form controls in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF23)
-   [PDF10: Providing labels for interactive form controls in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10)
-   [PDF22: Indicating when user input falls outside the required format or values in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22)

Tests
-----

### Procedure

For each form field that is required, verify that validation information and instructions are provided by applying the following:

1.  Check that the required status is indicated in the form control's label.
2.  Leave the field blank and submit the form. Check that an alert describing the error is provided.
3.  Use a tool that exposes the document through the accessibility API, and verify that the required property is indicated.

### Expected Results

-   \#1, \#2, and \#3 are true.
