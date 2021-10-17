-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF9](PDF9)
-   [Next Technique: PDF11](PDF11)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Providing labels for interactive form controls in PDF documents
===============================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

-   Tagged PDF documents with forms.
-   PDF forms created using Adobe LiveCycle Designer.

This technique relates to:

-   [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Sufficient when used with an unwritten technique)
-   [Success Criterion 3.3.2: Labels or Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions) (Sufficient)
-   [Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) (Sufficient when used with [G135: Using the accessibility API features of a technology to expose names and notification of changes](../general/G135))

Description
-----------

The objective of this technique is to ensure that users of assistive technology are able to perceive form control labels and understand how form controls are used.

Form controls allow users to interact with a PDF document by filling in information or indicating choices which can then be submitted for processing. Assistive technology users must be able to recognize and understand the form fields, make selections, and provide input to complete the forms, and submit the form, just as sighted users can. Understandable labels that convey the purpose of each form control are essential to form accessibility.

Form inputs generally have labels and instructions to help users understand what information is required and how to fill in the form. Unless these labels are programmatically associated with the relevant fields, assistive technology might not be able to associate them correctly, and thus users might not understand how to complete the form.

Using Adobe Acrobat Pro with documents with interactive forms, you can make sure that the forms are accessible and usable by making sure that programmatically associated labels that convey the purpose of the fields are provided.

The heuristics used by assistive technology will sometimes use the text label if a programmatically associated label cannot be found. The TU entry (which is the tooltip) of the field dictionary is the programmatically associated label (see Example 3 below and Table 220 in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)). Therefore, add a tooltip to each field to provide a label that assistive technology can interpret.

### Placement rules

The table below lists the placement rules governing where Adobe LiveCycle positions labels by default. Note that these rules assume left-to-right text directionality. If your form requires different positioning (e.g., to accommodate PDF documents in languages that use right-to-left text directionality), see *Repositioning form labels* in Example 2 below. In general, authors should review label positioning to make sure it meets the requirements of their particular form.

<table><thead><tr class="header"><th>Control Type</th><th>LiveCycle Placement Rules</th></tr></thead><tbody><tr class="odd"><td>Text input (including date/time and password fields)</td><td>Default placement for the label is to the left of the control. If this is not possible, LiveCycle will attempt to place it immediately above the control.</td></tr><tr class="even"><td>Checkbox</td><td>Default placement for the label is to the right of the check box.</td></tr><tr class="odd"><td>Radio button group</td><td>Default placement for the label for each individual radio button is to the right of the button. Create a visible caption for the radio button group by creating static text and placing it to the left of or above the group. (See <em>Labeling radio buttons</em> below.)</td></tr><tr class="even"><td>Combo box</td><td>Default placement for the label is to the left of the drop-down list. If this is not possible, LiveCycle will attempt to place it immediately above the control..</td></tr><tr class="odd"><td>List box</td><td>Default placement for the label is above the list box.</td></tr><tr class="even"><td>Button</td><td>LiveCycle automatically places the label on the button; it does not have to be positioned manually. Ensure that the button's purpose is properly described in the label text.</td></tr></tbody></table>

Examples
--------

### Example 1: Providing labels using the Forms tool in Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

As noted in the Description, text labels added in an authoring tool and then converted to PDF might be visually associated with the fields but are not programmatically associated, and you should provide a tooltip.

1.  In the Forms menu, select Add or Edit Fields...
2.  For the field you want to edit, access the context menu and select the Properties dialog.
3.  In the General tab of the Properties dialog, type a description for the form field in the Tooltip field.
4.  Repeat for all form fields.

The following image shows the Properties dialog with a description in the Tooltip field.

![Figure 1 The Properties dialog for a form field. A short description, including the format required for the field, is added and will appear as a tooltip.](img/form5.jpg)

This example is shown in operation in the [working example of providing labels using the forms tool](../../working-examples/pdf-form-labels/form.pdf).

### Example 2: Providing labels to form controls in Adobe LiveCycle Designer ES 8.2.1

This example is shown with Adobe LiveCycle Designer. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

LiveCycle Designer provides several options for associating descriptive text and labels with form elements.

For sighted or low-vision users, it is important to properly position the label adjacent to the control. For screen reader users, you should also ensure that the label is programmatically associated with the form control and that sufficient information is provided so that screen reader users can readily complete and submit the form.

This example is shown in operation in the [working example of providing labels in LiveCycle Designer](../../working-examples/pdf-form-labels/form-lc.pdf).

#### Specifying accessible label text using the accessibility palette

In LiveCycle Designer, create or import a form. Then:

1.  Enable the palette by selecting Window &gt; Accessibility or by pressing shift + F6.
2.  The palette appears in LiveCycle Designer's right-hand panel.
3.  Select an object in your form. The palette shows the object's accessibility properties.

![Figure 2 Image of Adobe LiveCycle Accessibility Palette showing the Precedence drop down list. Text is announced in the order shown in the list: custom text, tool tip, caption, and name.](img/access-palette-dropdown.jpg)

The label that a screen reader uses does not necessarily have to be the same as the visual caption. In some cases, you may want to provide more information about a form element's purpose.

To specify what text should be announced by the screen reader for a particular object, you can use the Accessibility Palette's Screen Reader Precedence drop down list. Text is announced in the order shown in the list: custom text, tool tip, caption, and name.

Depending on the complexity and difficulty of your form, you must decide which option best suits the requirements for your form.

By default, a screen reader searches for an object's text in order shown in the image. Once descriptive text has been found for a control, the search stops.

The image below shows an example of a text field with a visual caption that might be unclear for screen reader users. One of the fields has a caption of "Date" but screen reader users may want to know the preferred date format (shown as screen text). So this text is provided in the tooltip. Because a tooltip has a higher precedence than the visual caption, the screen reader uses the tooltip.

![Figure 3 Image of a date form field in LiveCycle Designer showing tooltip text for a date format.](img/livecycledatefield.jpg)

#### Labeling radio buttons

When a screen reader user tabs into a radio button, the screen reader needs to announce two items:

-   A general description of the purpose of the *group* of buttons
-   A meaningful description for the purpose of *each* radio button

To make radio buttons accessible:

1.  In the Hierarchy palette, select the radio button group.
2.  Select the Accessibility palette and in the Custom Screen Reader Text box, type the speak text for the group. For example, type "Select a method of payment."
3.  In the Hierarchy palette, select the first radio button in the group.
4.  In the Object palette, select the Field tab. In the Item area, select the item and type a meaningful value for the selected radio button. For example, type "Cash."
5.  Repeat steps 3 and 4 for each radio button in the group.

![Figure 4 Image of Custom Screen Reader Text for radio buttons in LiveCycle Designer.](img/radiobuttongroup.jpg)

#### Repositioning form labels

The placement of a caption, or label, is important because users expect them to be found at a particular location adjacent to the control. For screen magnification users this is even more important, as they might not be able to view both the control and the label at the same time.

When you create an object, Adobe LiveCycle Designer automatically positions the label as specified by the control type (see the table in the Description above). For example, for a text field, the label is positioned to the left of the control.

If you need to change the position of the label text (for example, to accommodate right-to-left text directionality):

1.  Select the object by moving the focus to it.
2.  In the Layout palette, under Caption at the bottom of the palette, select the position of your object from the Position drop-down list.

![Figure 5 The Layout palette and the new Caption position.](img/captionposition.jpg)

The resulting repositioned label is shown below. The label for the Date text field has been moved from the left of the field to the line above the field.

![Figure 6 A form label repositioned above the field; also shown are default label positions to the left of text fields.](img/formlabeltop.jpg)

### Example 3: Adding a tooltip to interactive form controls

The following code fragment illustrates the use of the TU entry to provide a tooltip (or programmatically associated text label) for a form field. This is typically accomplished by an authoring tool.

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
       /TU Date you are available: use MM/DD/YYYY format % TU tool tip value serves as short description
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

-   [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [Adobe XML Forms Architecture (XFA)](http://partners.adobe.com/public/developer/xml/index_arch.html)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G131)
-   [G162: Positioning labels to maximize predictability of relationships](https://www.w3.org/WAI/WCAG21/Techniques/general/G162)
-   [PDF23: Providing interactive form controls in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF23)
-   [PDF5: Indicating required form controls in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF5)
-   [PDF22: Indicating when user input falls outside the required format or values in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22)

Tests
-----

### Procedure

1.  For each form control, verify visually that the label is positioned correctly in relation to the control.
2.  For each form control, verify that the name is programmatically associated with the control by one of the following:

    -   Open the PDF document with a tool that is capable of showing the name associated with the control and verify that the name is associated correctly with the control.
    -   Use a tool that exposes the document through the accessibility API, and verify that the name is associated correctly with the control.

### Expected Results

-   \#1 and \#2 are true.
