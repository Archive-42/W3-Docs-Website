-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF19](PDF19)
-   [Next Technique: PDF21](PDF21)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using Adobe Acrobat Pro's Table Editor to repair mistagged tables
=================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents with tables.

This technique relates to [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Sufficient when used with an unwritten technique).

Description
-----------

The purpose of this technique is to show how table cells in PDF documents can be marked up so that the logical relationships among rows and columns are preserved and recognized by assistive technology. This is typically accomplished by using a tool for authoring PDF.

However, tables converted to PDF may have incorrectly merged or split table cells, even if they were marked up correctly in the authoring tool. Authors can ensure that table cells are structured properly by using the Table Editor in Adobe Acrobat Pro's TouchUp Reading Order tool.

Examples
--------

### Example 1: Repairing table cells using the Table Editor in the TouchUp Reading Order tool in Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

This example uses a table that was marked up correctly when it was created in Microsoft Word. Some table headers span two rows in the header row; one table header spans two columns.

![Figure 1 A correctly marked up table in Word, with complex headers, before conversion to PDF.](img/table-word.jpg)

To check the table in the PDF document:

1.  Advanced &gt; Accessibility &gt; TouchUp Reading Order...
2.  Select the table by clicking the number in the top left hand corner of the table (3 in the reading order in the image below).
3.  Select the Table Editor button on the TouchUp Reading Order panel. The table cells will be outlined in red and labeled with their tags. The red outlines may not exactly match up to the table cells but you should be able to determine if the cells are tagged correctly.

The following image shows the example table in the TouchUp Reading Order tool. Note that the Results header appears to span two sub-headers and the other headers to the left span the two rows in the Results header.

![Figure 2 Table in the TouchUp Reading Order tool. As in Word, the table Results header appears to span two sub-headers and the other headers to the left span the two rows in the Results header.](img/table-1.jpg)

The following images shows the example table in the Table Editor. The cells are outlined in red, and the tab for each cell is displayed. Upon conversion, the Results header was incorrectly split and does not span its two sub-headers. The headers to the right were incorrectly split into 2 cells each and do not span the Results headers. In addition, the incorrectly split cells were merged into one cell.

![Figure 3 Example table in the Table Editor, showing table cells and the tag for each cell. The Table Editor shows the Results header was incorrectly split and does not span its two sub-headers; and other headers were also incorrectly split and merged.](img/table-2.jpg)

To repair the Results header:

1.  Select the header in the table (it will be outlined in blue when selected)
2.  Access the context menu
3.  Select Table Cell Properties...
4.  In the Table Cell Properties dialog, change the Column Span from 1 to 2
5.  Press OK. You'll get a warning that the change might result in a malformed table structure. In this case, the change is correct. The cell you changed should change color to show the new span, as shown in the following image.

![Figure 4 The Table Cells Properties dialog showing the Column Span changed to 2 to repair a mistagged header in this example.](img/table-2a.jpg)

Similarly, to repair the incorrectly split header cells to the left of Results header:

1.  Select the top cell in the column (it will be outlined in blue when selected)
2.  Access the context menu
3.  Select Table Cell Properties...
4.  In the Table Cell Properties dialog, change the Row Span from 1 to 2
5.  Press OK. The following image shows the correction being made to the last header cell, with the corrected header cells to its left.

![Figure 5 The Table Cells Properties dialog showing the Row Span changed to 2 to repair a mistagged header in this example.](img/table-2b.jpg)

The following image shows the repaired example table.

![Figure 6 The repaired example table in the Table Editor. It now has the same table structure as the original Word table.](img/table-3a.jpg)

This example is shown in operation in the [working example of repairing table structure (Word file)](../../working-examples/pdf-table/table.docx) and [working example of repairing table structure (PDF file)](../../working-examples/pdf-table/table.pdf).

### Example 2: Marking up a table using table structure elements

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

-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)
-   14.8.4.3.4 (Table Elements) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)

Related Techniques
------------------

-   [H51: Using table markup to present tabular information](https://www.w3.org/WAI/WCAG21/Techniques/html/H51)
-   [PDF6: Using table elements for table markup in PDF Documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF6)

Tests
-----

### Procedure

1.  For a table that has been repaired with the Table Editor, confirm one of the following:

    -   Read the PDF document with a screen reader, listening to hear that the tabular information is presented in a way that preserves logical relationships among the table header and data cells. (Configure the screen reader to not use heuristics to read table header cells.)
    -   Using a PDF editor, verify that the appropriate *TR*, *TH*, and *TD* tags are in the proper reading order and hierarchy in the table tree.
    -   Use a tool which is capable of showing the table elements to open the PDF document, view the table structure, and verify that it contains the appropriate TR, TH, and TD structures.
    -   Use a tool that exposes the document through the accessibility API, and verify that the table structure contains the appropriate TR, TH, and TD structures, and that they are in the proper reading order and hierarchy.

### Expected Results

-   \#1 is true.
