-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF5](PDF5)
-   [Next Technique: PDF7](PDF7)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using table elements for table markup in PDF Documents
======================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents with tables

This technique relates to [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Sufficient when used with an unwritten technique).

Description
-----------

The purpose of this technique is to show how tables in PDF documents can be marked up so that they are recognized by assistive technology. This is typically accomplished by using a tool for authoring PDF.

Tabular information must be presented in a way that preserves relationships within the information even when users cannot see the table or the presentation format is changed. Information is considered tabular when logical relationships among text, numbers, images, or other data exist in two dimensions (vertical and horizontal). These relationships are represented in columns and rows, and the columns and rows must be recognizable in order for the logical relationships to be perceived.

Tagged tables can be created using the Add Tags to Document feature in Adobe Acrobat, using the Object Library in Adobe LiveCycle, or converting tables to PDF from a third-party application, such as Microsoft Word. However, the resulting tables may not be tagged correctly and you should ensure that table tagging issues are resolved.

Within PDF documents, a table uses the following structure types for table elements:

-   A table element (*Table*).
-   One or more table row elements(*TR*) which define each row of table cells as immediate children of the *Table* element.
-   One or more table header elements (*TH*) or table data elements (*TD*) as the immediate children of each table row element.
-   Cells that span two or more rows or columns should use the *RowSpan* or *ColSpan* attribute.
-   For tables that contain blank cells, you may need to add empty *TD* cells so that each row or column has the same number of cells.

Examples
--------

### Example 1: Creating tables in Microsoft Word 2007 that have correctly tagged headings when converted to PDF

This example is shown with Microsoft Word. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  Access the table header row's context menu and select Table Properties...
2.  Select the Row tab.
3.  Check "Repeat as header at the top of each page" as shown in the following image.

![Figure 1 Image of Table properties dialog for the first table row in Word, with the Row tab selected. 'Repeat as header at the top of each page' is checked to ensure that the first row is marked as header cells.](img/word-table.jpg)

This example is shown in operation in the [working example of tagged table headings in Word 2007](../../working-examples/pdf-tables/table-example-noheaderrow.docx).

Note

Microsoft Word can only mark up cells as column headings, not as row headings. Only the first row can be marked as heading for all table columns. When the table has row headings or a more complex heading structure, this mark-up must be added in a PDF editor such as Acrobat Pro.

### Example 2: Creating tables in OpenOffice.org Writer 2.2 that have correctly tagged headings when converted to PDF

This example is shown with OpenOffice.org Writer. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  Access the table's context menu and select Table...
2.  Select the Table Format tab.
3.  Check Repeat Heading and select "1" in the First Rows listbox as shown in the following image.

![Figure 2 Image of Table dialog in OpenOffice.org Writer with Table Format tab selected. Repeat Heading is checked and 1 is selected in the First Rows listbox to ensure that the first row is marked as header cells.](img/openofficetableheads.jpg)

This example is shown in operation in the [working example of tagged table headings in OpenOffice Writer](../../working-examples/pdf-tables/table-example-noheaderrow.odt).

Note

OpenOffice.org Writer can only mark up cells as column headings, not as row headings. Only the first row can be marked as heading for all table columns. When the table has row headings or a more complex heading structure, this mark-up must be added in a PDF editor such as Acrobat Pro.

### Example 3: Modifying table tags using the Tags tab in Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

To check that a converted document with tables has correct table tagging:

-   In the View menu, select Navigation Panel, then select Tags.

![Figure 3 Table in Adobe Acrobat Pro showing the Tags tab opened to display the table tags. All table cells are marked TD.](img/table-example.jpg)

Note that in this case, the table headers were not formatted as illustrated in Examples 1 and 2, and are marked as data cells (*TD*). To change these to *TH* tags:

1.  On the Tags tab, open the table row that contains the header cells, as shown on the image above.
2.  Select on the first data cell and select Properties...
3.  On the Tags tab in the Properties dialog, use the Type dropdown to change Table Data Cell to Table Header Cell.
4.  Repeat for all the table header cells in the first table row.

![Figure 4 Table in Adobe Acrobat Pro showing the use of the Tag Properties dialog to change data cells to header cells](img/table-example2.jpg)

This example is shown in operation in the [working example of tagged table headings in Acrobat](../../working-examples/pdf-tables/table-example-repaired.pdf).

### Example 4: Marking up a table using table structure elements

The following code fragment illustrates code that is typical for a simple table (header row and data row) such as shown in Examples 1-3:

    95 0 obj                %Structure element for a table
     << 
      /A 39 0 R
      /K[96 0 R 101 0 R 106 0 R 111 0 R]
      /P 93 0 R
      /S/Table              %standard structure type is table
     >> 
     endobj
    96 0 obj                %Structure element for a table row
     << 
      /K[97 0 R 98 0 R 99 0 R 100 0 R]
      /P 95 0 R
      /S/TR                 %standard structure type is table row
     >> 
     endobj
    97 0 obj                %Structure element for a table header
     <</A[23 0 R 120 0 R]
       /K 1
       /P 96 0 R
       /S/TH                 %standard structure type is table head
       /Pg 8 0 R
     >> 
    endobj
    104 0 obj                %Structure element for table data (cell contents)
     << 
      /A 29 0 R
      /K 7
      /P 101 0 R
      /S/TD                  %standard structure type is table data
      /Pg 8 0 R
     >> 
    endobj

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 14.8.4.3.4 (Table Elements) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [H51: Using table markup to present tabular information](https://www.w3.org/WAI/WCAG21/Techniques/html/H51)
-   [PDF20: Using Adobe Acrobat Pro's Table Editor to repair mistagged tables](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF20)

Tests
-----

### Procedure

1.  For each table, confirm one of the following:

    -   Read the PDF document with a screen reader, listening to hear that the tabular information is presented in a way that preserves logical relationships among the table header and data cells.
    -   Using a PDF editor, verify that the appropriate *TR*, *TH*, and *TD* tags are in the proper reading order and hierarchy in the table tree.
    -   Use a tool which is capable of showing the table elements to open the PDF document, view the table structure, and verify that it contains the appropriate TR, TH, and TD structures.
    -   Use a tool that exposes the document through the accessibility API, and verify that the table structure contains the appropriate TR, TH, and TD structures, and that they are in the proper reading order and hierarchy.

### Expected Results

-   \#1 is true.
