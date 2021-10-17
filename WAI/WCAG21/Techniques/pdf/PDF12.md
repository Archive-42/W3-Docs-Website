-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF11](PDF11)
-   [Next Technique: PDF13](PDF13)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Providing name, role, value information for form fields in PDF documents
========================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents with interactive form fields.

This technique relates to:

-   [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Sufficient when used with an unwritten technique)
-   [Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) (Sufficient when used with [G135: Using the accessibility API features of a technology to expose names and notification of changes](../general/G135))

Description
-----------

The objective of this technique is to ensure that assistive technologies can gather information about and interact with form controls in PDF content.

The types of PDF form controls are: text input field, check box, radio button, combo box, list box, and button.

Providing name, role, state, and value information for all form components enables compatibility with assistive technology, such as screen readers, screen magnifiers, and speech recognition software used by people with disabilities.

The PDF specification defines how name, role, and value are set for form controls in Section 12.7.4 (Field Types) of [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf), as shown in the following table. The Comments column explains how Adobe Acrobat Pro displays the corresponding information.

<table><thead><tr class="header"><th>Interactive Form Dictionary Entries</th><th>Used to Define</th><th>Comments</th></tr></thead><tbody><tr class="odd"><td>FT</td><td>Role</td><td>Controls that share field type also use field flags to set the appropriate role. In Adobe Acrobat the role for form controls is set automatically.</td></tr><tr class="even"><td>TU</td><td>Name</td><td>In Adobe Acrobat the TU entry value is provided via the Tooltip field in the form control's Properties dialog. This should not be confused with the T entry which is defined as the Name in Acrobat's form control properties dialog - the name field in the Properties dialog is not used to provide the name for a control when read by assistive technologies.</td></tr><tr class="odd"><td>CA</td><td>Name (Pushbuttons only)</td><td>In Adobe Acrobat the CA entry value is provided via the label field in the form control's Properties dialog.</td></tr><tr class="even"><td>V</td><td>Value</td><td>The Value entry is set by the user interacting with the control, where a value is needed.</td></tr><tr class="odd"><td>DV</td><td>Default Value</td><td>In Adobe Acrobat the DV entry value can be set in the form control's Properties dialog.</td></tr></tbody></table>

The following table describes how the role, name, value, and state are defined for PDF form controls created using Adobe Acrobat Pro. Adobe LiveCycle Designer provides the same controls as well as several additional ones: see Example 2 below.

<table><thead><tr class="header"><th>PDF form element</th><th>Role (FT entry)</th><th>Name (TU entry)</th><th>Value (V entry)</th><th>Configurable States</th></tr></thead><tbody><tr class="odd"><td>Text field</td><td>Text <code>/Tx</code></td><td>Tooltip</td><td>Default value (DV entry in field dictionary) can be set in the Properties dialog. Value is entered by user.</td><td>Read Only, Required, Multiline, Password</td></tr><tr class="even"><td>Check box</td><td>Check box <code>/Btn</code></td><td>Tooltip</td><td>V entry is set to 'Yes' or 'No' depending on Checked state.</td><td>Read Only, Required, Checked</td></tr><tr class="odd"><td>Radio button</td><td>Radio button <code>/Btn</code> (Field Flag set to 'Radio')</td><td>Tooltip</td><td>V entry is set to 'Yes' or 'No' depending on Checked state.</td><td>Read Only, Required, Checked</td></tr><tr class="even"><td>Combo box</td><td>Combo box <code>/Ch</code> (Field Flag set to 'Combo')</td><td>Tooltip</td><td>Default value (/DV) can be set in the Properties dialog. Value is determined by user selection.</td><td>Read Only, Required</td></tr><tr class="odd"><td>List box</td><td>Drop-down list <code>/Ch</code></td><td>Tooltip</td><td>Default value (/DV) can be set in the Properties dialog. Value is determined by user selection.</td><td>Read Only, Required</td></tr><tr class="even"><td>Button</td><td>Push button <code>/Btn</code> (Field Flag set to 'Pushbutton')</td><td>Label (CA entry instead of TU entry)</td><td>Push buttons do not have or require a value.</td><td>Read Only, Required</td></tr><tr class="odd"><td>Signature field</td><td>Text <code>/Sig</code></td><td>Tooltip</td><td>Default value (DV entry in field dictionary) can be set in the Properties dialog. Value is entered by user.</td><td>Read Only, Required</td></tr></tbody></table>

Examples
--------

### Example 1: Specifying name, role, value and/or state for a form field using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

This example uses a check box for illustration; the procedure is the same for other form controls. In Form Editing mode:

1.  Access the context menu for the form field you are creating or modifying.
2.  Select the Properties... dialog for the form field.
3.  Specify the name by adding a value to the tool tip field. This will used by the accessibility API as the Name for the control and should usually be set to match the text used as a visual label for the control.
4.  Select the Options tab.
5.  Specify the default value and the default state, if appropriate.

The image below shows the Check Box Properties dialog, open in the General tab. (The Name field in the dialog is not needed for accessibility.)

![Figure 1 General tab on the Check Box Properties dialog, showing name and tool tip fields for a check box](img/nrv1.jpg)

The image below shows the Check Box Properties dialog, open in the Options tab.

![Figure 2 Options tab on the Check Box Properties dialog, showing value and state fields for a check box.](img/nrv2.jpg)

This example is shown in operation in the [working example of specifying name, role, value using Acrobat Pro](../../working-examples/pdf-form-labels/form.pdf).

### Example 2: Specifying name, value, and state for a form field using Adobe LiveCycle Designer ES 8.2.1

This example is shown with Adobe LiveCycle Designer. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

In Adobe LiveCycle Designer, you use the Object Library to create form objects and the Object Palette to specify name, role, state or value for the object.

The following image shows the Object Palette.

![Figure 3 LiveCycle Designer Object Library showing the form objects available for form creation.](img/lc-objlib.jpg)

The following three images show the tabs in the Object palette. In the first the Field tab is open for specifying the type (or role) of the field.

![Figure 4 LiveCycle Designer Object palette, Field tab.](img/lc-objpal-t.jpg)

The next image shows the Value tab, with options that can be applied to the field.

![Figure 5 LiveCycle Designer Object palette, Value tab options.](img/lc-objpal-v.jpg)

The third images shows the Binding tab, specifying the name of the field.

![Figure 6 LiveCycle Designer Object palette, Binding tab.](img/lc-objpal-b.jpg)

This example is shown in operation in the [working example of specifying name, role, value using LiveCycle Designer](../../working-examples/pdf-form-labels/form-lc.pdf).

### Example 3: Adding a checkbox in a PDF document using the /Btn field type

The following code fragment illustrates code that is typical for a simple check box field such as shown in Examples 1 and 2. This is typically accomplished by an authoring tool.

    1 0 obj
      << /FT /Btn     % Role
         /TU Retiree  % Name
         /V /Yes      % Value
         /AS /Yes
         /AP << /N << /Yes 2 0 R /Off 3 0 R>>
      >>
    endobj

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 12.7.4 (Field Types) of [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [Adobe XML Forms Architecture (XFA)](http://partners.adobe.com/public/developer/xml/index_arch.html)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [PDF23: Providing interactive form controls in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF23)
-   [PDF5: Indicating required form controls in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF5)
-   [PDF22: Indicating when user input falls outside the required format or values in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22)

Tests
-----

### Procedure

1.  For the form control, verify that name, role, and value/state are specified by one of the following:

    -   Use a screen reader to navigate to the form control and check that it can be activated or that its value can be changed. Verify that the name (tooltip) and role are announced.
    -   Use a tool capable of showing the form field information to open the PDF document and verify that the form control has the correct name, role, value, and state (if appropriate) information.
    -   Use a tool that exposes the document through the accessibility API, and verify that the form control has the correct name, role, value, and state (if appropriate) information.

### Expected Results

-   \#1 is true.
