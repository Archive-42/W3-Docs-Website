-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF22](PDF22)
-   [Next Technique: SVR1](../server-side-script/SVR1)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Providing interactive form controls in PDF documents
====================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

-   Tagged PDF documents with forms.
-   PDF forms created using Adobe LiveCycle Designer.

This technique relates to [Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) (Sufficient when used with an unwritten technique).

Description
-----------

The objective of this technique is to ensure that interactive form controls in PDF documents allow keyboard operation. Interactive PDF forms are generally created using a tool for authoring PDF. Form controls are implemented in PDF documents either as described in Section 12.7 (Interactive Forms) of [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf) or as described in the [Adobe XML Forms Architecture (XFA)](http://partners.adobe.com/public/developer/xml/index_arch.html).

The types of PDF form controls are: text input field, check box, radio button, combo box, list box, and button.

Form controls allow users to interact with a PDF document by filling in information or indicating choices, which can then be submitted for processing. Users who rely on keyboard access must be able to recognize and understand the form fields, make selections, and provide input to complete the forms, and submit the form, just as sighted users can.

Interactive form controls can be provided for forms created by converting a scanned paper form to tagged PDF or by creating a form in an authoring application such as Microsoft Word or Open Office and converting it to tagged PDF.

However, documents created by authoring applications that provide form design features might not fully retain their fillable form fields on conversion to PDF. Complex forms in particular may not have properly converted form fields and labels when tagged in conversion.

Using Adobe Acrobat Pro with forms in converted documents, you can ensure that form fields are keyboard accessible and usable by:

-   Opening tagged PDF documents with form fields and creating interactive PDF form elements with the Run Form Fields Recognition tool.
-   Modifying fillable form fields, or adding form fields, using Adobe Acrobat Pro or Adobe LiveCycle Designer.

Using Adobe LiveCycle Designer, you can create forms from scratch.

Examples
--------

### Example 1: Adding interactive controls to existing forms in PDF documents using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

If you have a form in a tagged PDF document (created by scanning a paper form or using an authoring tool to generate tagged PDF), you can use Adobe Acrobat Pro to make the form elements keyboard accessible in the same page locations as the static form.

1.  Use Advanced &gt; Accessibility &gt; Run Form Field Recognition to automatically detect form fields and make them fillable.

The following image shows the Run Form Field Recognition tool is selected to detect form fields in a document converted to tagged PDF.

![Figure 1 Form fields in a PDF document in Adobe Acrobat Pro. The Advanced &gt; Accessibility menu is selected, showing the Run Form Field Recognition tool.](img/form1.jpg)

The following image shows the resulting form fields after the Run Form Recognition tool is run.

![Figure 2 Form fields in a PDF document in Adobe Acrobat Pro after running the Form Field Recognition tool.](img/form1a.jpg)

This example is shown in operation in the [working example of Interactive Controls in Acrobat](../../working-examples/pdf-interactive-form-fields/form-fields-keybd.pdf).

### Example 2: Adding form controls in PDF documents using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

You can add keyboard accessible form controls to your form as follows:

1.  Forms &gt; Add or Edit Fields... This puts the form in Form Editing mode.
2.  Open the Add New Field menu on the upper left, and select a form field to add. The image below shows the menu of fields.

![Figure 3 The Add New Field menu with the list of available form fields.](img/form1c.jpg)

The following image shows a checkbox added to the form in Example 1.

![Figure 4 A checkbox added to the form using Add or Edit Fields...](img/form1b.jpg)

This example is shown in operation in the [working example of Interactive Controls in LiveCycle Designer](../../working-examples/pdf-interactive-form-fields/form-fields-keybd-lc.pdf).

### Example 3: Editing form controls in PDF documents using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

To edit fields, select the context menu for the field and select Properties... The properties menu for that form field lets you modify it, as shown in the following image.

![Figure 5 The Text Field Properties dialog to modify a form field.](img/form5.jpg)

Note

The tooltip is not keyboard accessible but will be screen-reader accessible: see [](#PDF12).

### Example 4: Creating new interactive forms with Adobe LiveCycle Designer ES 8.2.1

This example is shown with Adobe LiveCycle Designer. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

You can use Adobe LiveCycle Designer to create new forms. In addition to invoking this standalone tool from the Windows Start menu, you can invoke it in Adobe Acrobat Pro:

1.  Forms &gt; Start Form Wizard...
2.  Select the No Existing Form radio button, as shown in the following image.

![Figure 6 The first dialog in the Form Wizard showing the No Existing Form Button selected.](img/form2.jpg)

Clicking Next invokes LiveCycle Designer and the first page of the New Form Assistant. as shown in the following image.

![Figure 7 LiveCycle Designer and the first page of the New Form Assistant.](img/form2a.jpg)

When you invoke LiveCycle Designer from the Windows Start menu, the Form Wizard is available from File &gt; New...

The New Form Assistant creates a blank form. Use the Object Library in the right pane to select form controls.

![Figure 8 A newly created blank form in LiveCycle Designer with the Object Library.](img/lc-blank.jpg)

You can also use LiveCycle Designer to create forms based on commonly used forms templates.

1.  Invoke the Template Assistant wizard from the New pulldown: ![LiveCycle Designer: New icon to select form templates.](img/lc-new.jpg).
2.  Select Forms and then select an appropriate type of form. Then, you can personalize the form by swapping out placeholder text, graphics, form fields, and properties with custom objects that you provide or define.

![Figure 9 LiveCycle Designer: list of form templates.](img/lc-templates.jpg)

### Example 5: Adding a text field in a PDF document using the /Tx field type

The following code fragment illustrates code that is typical for a simple text field such as shown in Examples 1 and 2. This is typically accomplished by an authoring tool.

    << /AP -dict-                                                   
       /DA /Helv  0 Tf 0 g
       /DR -dict-
       /F 0x4
       /FT Tx              % FT key set to Tx for Text Field
       /P -dict-
       /Rect -array-
       /StructParent 0x1
       /Subtype Widget
       /T Date you are available   % Partial field name Date
       /TU Date you are available: use mm/dd/yyyy format % TU tool tip value serves as short description
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

Related Techniques
------------------

-   [G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG21/Techniques/general/G202)
-   [PDF3: Ensuring correct tab and reading order in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3)
-   [PDF12: Providing name, role, value information for form fields in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF12)
-   [PDF15: Providing submit buttons with the submit-form action in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF15)

Tests
-----

### Procedure

1.  For each form control, verify that it is properly implemented by tabbing to each form control and checking that it can be activated or that its value can be changed from the keyboard.

### Expected Results

-   \#1 is true.
