-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF2](PDF2)
-   [Next Technique: PDF4](PDF4)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Ensuring correct tab and reading order in PDF documents
=======================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents

This technique relates to:

-   [Success Criterion 1.3.2: Meaningful Sequence](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence) (Sufficient)
-   [Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) (Sufficient when used with an unwritten technique)
-   [Success Criterion 2.4.3: Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) (Sufficient when used with an unwritten technique)

Description
-----------

The intent of this technique is to ensure that users can navigate through content in a logical order that is consistent with the meaning of the content. Correct tab and reading order is typically accomplished using a tool for authoring PDF.

For sighted users, the logical order of PDF content is also the visual order on the screen. For keyboard and assistive technology users, the tab order through content, including interactive elements (form fields and links), determines the order in which these users can navigate the content. The tab order must reflect the logical order of the document.

Logical structure is created when a document is saved as tagged PDF. The reading order of a PDF document is determined primarily by the tag order of document elements, including interactive elements, but the order of content within individual tags is determined by the PDF document’s content tree structure.

If the reading order is not correct, keyboard and assistive technology users may not be able to understand the content. For example, some documents use multiple columns, and the reading order is clear visually to sighted users as flowing from the top to the bottom of the first column, then to the top of the next column. But if the document is not properly tagged, a screen reader may read the document from top to bottom, across both columns, interpreting them as one column.

The simplest way to ensure correct reading order is to structure the document correctly in the authoring tool used to create the document, before conversion to tagged PDF. Note, however, that pages with complex layouts with graphics, tables, footnotes, side-bars, form fields, and other elements may not convert to tagged PDF in the correct reading order. These inconsistencies must then be corrected with repair tools such as Acrobat Pro.

When a PDF document containing form fields has a correct reading order, all form fields are contained in the tab order in the appropriate order, and in the correct order relative to other content in the PDF. Common tab-order errors include:

-   Form fields missing from the tagged content.
-   Form fields in the wrong location in the PDF content; e.g., at the end of non-interactive content.

Examples
--------

### Example 1: Creating a 2-column document using Microsoft Word 2007

This example is shown with Microsoft Word. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

Multi-column documents created using Word's Page Layout &gt; Columns... tool typically are in the correct reading order when converted to tagged PDF. The image below shows Word's Columns tool.

![Figure 1 The Columns tool in Word. Two is selected to lay out the page in 2 columns.](img/word-col-tool.jpg)

This example is shown in operation in the [working example of 2-column document using Word 2007 (Word file)](../../working-examples/pdf-reading-order/reading-order-2cols-word.docx) and [working example of 2-column document using Word 2007 (PDF file)](../../working-examples/pdf-reading-order/reading-order-2cols-word.pdf).

### Example 2: Creating a 2-column document using OpenOffice.org Writer 2.2

This example is shown with OpenOffice.org Writer. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

Multi-column documents created using OpenOffice.org Writer's Format &gt; Columns... tool typically are in the correct reading order when converted to tagged PDF. The image below shows Writer's Columns tool.

![Figure 2 The Columns tool in OpenOffice.org Writer. Two is selected to lay out the page in 2 columns.](img/oo-2col-tool.jpg)

This example is shown in operation in the [working example of 2-column document using OpenOffice Writer (OpenOffice file)](../../working-examples/pdf-reading-order/reading-order-2cols-oo.odt) and [working example of 2-column document using OpenOffice Writer (PDF file)](../../working-examples/pdf-reading-order/reading-order-2cols-oo.pdf).

### Example 3: Setting the tab order for one or more pages using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

In a tagged PDF document:

1.  Open the Pages panel by either:

    -   Clicking the Pages icon ![Pages icon in the upper left of the Adobe Acrobat Pro navigation pane](img/pages-icon.jpg)
    -   Or selecting View &gt; Navigation Panels &gt; Pages

2.  Select one or more page thumbnails.
3.  Access the context menu for the selected thumbnail(s) and select Page Properties...
4.  Select the Tab Order tab in the Page Properties dialog.
5.  If needed, select a tab order option:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Option</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><strong>Use Row Order</strong></td><td>Tabs from the upper left field, moving first left to right and then down, one table row at a time.</td></tr><tr class="even"><td><strong>Use Column Order</strong></td><td>Tabs from the upper left field, moving first from top to bottom and then across from left to right, one table column at a time.</td></tr><tr class="odd"><td><strong>Use Document Structure</strong></td><td>For tagged documents, moves in the tag order specified by the authoring application.<div class="note"><div class="note-title marker" data-role="heading" data-aria-level="4">Note</div><p>This is usually the correct reading order and will be selected by default for tagged documents.</p></div></td></tr><tr class="even"><td><strong>Unspecified</strong></td><td>If the document was created using an earlier version of Acrobat Pro, the tab order is Unspecified by default. With this setting, form fields are tabbed through first, followed by links and then comments ordered by row. This may not be correct reading order.</td></tr></tbody></table>

![Figure 3 Page properties in Adobe Acrobat Professional. The choices are Use Row Order, Use Column Order, Use Document Structure, Unspecified. Use Document Structure is selected. This is also the default.](img/page-props.jpg)

This example is shown in operation in the [working example of setting the tab order (Word file)](../../working-examples/pdf-reading-order/reading-order.docx) and [working example of setting the tab order (PDF file)](../../working-examples/pdf-reading-order/reading-order.pdf).

### Example 4: Repairing the reading order using the Tags panel in Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in PDF Authoring Tools that Provide Accessibility Support (http://trace.wisc.edu/wcag\_wiki/index.php?title=PDF\_Technology\_Notes).

To correct the reading order in Example 5, use the Tags panel, and either

-   Drag-and-drop the `H1` tag to precede the required-field text (tagged `H2`), or
-   Cut-and-paste the `H2` tag to follow the `H1` tag.

In the following image, the reading order is correct for the text and header. That is, the content elements `H1` and `H2` have been switched into the correct reading order.

![Figure 4 Image showing the corrected reading order In Adobe Acrobat Pro. The tags `H1` and `H2` have been switched and are now in the correct order.](img/tab-order.jpg)

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 14.8 (Tagged PDF) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)
-   [Making PDF documents accessible with Adobe Acrobat Pro](http://www.pdf-accessible.com/wp-content/uploads/2015/01/making-PDF-accessible-Acrobat.pdf)

Related Techniques
------------------

-   [G57: Ordering the content in a meaningful sequence](https://www.w3.org/WAI/WCAG21/Techniques/general/G57)
-   [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G59)
-   [G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG21/Techniques/general/G202)

Tests
-----

### Procedure

1.  Verify that the content is in the correct reading order by one of the following:

    -   Read the PDF document with a screen reader or a tool that reads aloud, listening to hear that each element is read in the correct order.
    -   Use a tool that exposes the document through the accessibility API, and verify that the reading order is correct.

2.  Verify that the tab order is correct for focusable content by one of the following:

    -   Use the tab key to traverse the focus order in the document.
    -   Use a tool that is capable of showing the page object entry that specifies the tab order setting to open the PDF document and view the setting.

### Expected Results

-   \#1 and Check \#2 are true.
