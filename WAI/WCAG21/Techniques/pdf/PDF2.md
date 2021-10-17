-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF1](PDF1)
-   [Next Technique: PDF3](PDF3)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Creating bookmarks in PDF documents
===================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents

This technique relates to [Success Criterion 2.4.5: Multiple Ways](https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways) (Sufficient when used with an unwritten technique).

Description
-----------

The intent of this technique is to make it possible for users to locate content using bookmarks (*outline entries* in an Outline dictionary) in long documents.

A person with cognitive disabilities may prefer a hierarchical outline that provides an overview of the document rather than reading and traversing through many pages. This is also a conventional means of navigating a document that benefits all users.

Examples
--------

### Example 1: Converting a table of contents created with Microsoft Word 2007 and creating bookmarks for Adobe Reader 9 and Acrobat 9 Pro

This example is shown with Microsoft Word and Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  Create a table of contents at the beginning of the Word document.

    ![Figure 1 Reference tab on Word ribbon, showing Table of Contents tool.](img/word-toc.jpg)

2.  Use Save as... &gt; Adobe PDF to convert the Word document to PDF, specifying both of the following:

    -   Enable Accessibility and Reflow with Tagged Adobe PDF
    -   Convert Word Headings into Bookmarks

The table-of-contents entries in the converted document will be linked to the headings in the document.

In addition, the headings will appear as PDF Bookmarks in the left-hand Navigation pane.

![Figure 2 PDF document showing the Table of Contents and Bookmarks created from the headings in a Word document.](img/bookmarks.jpg)

If the document provides a glossary and/or index, these sections should have headings that appear in the table of contents (and thus as bookmarks in the Navigation pane). The table of contents also should be marked up with a heading so it is bookmarked as well.

If this markup has not been done in the authoring tool, Adobe Acrobat Pro can be used to provide the tags. See [](#PDF9) if you need to modify converted headings or add new ones.

This example is shown in operation in the [working example of creating bookmarks with Word 2007](../../working-examples/pdf-bookmarks/bookmarks.docx).

### Example 2: Converting a table of contents created with OpenOffice.org Writer 2.2 and creating bookmarks for Adobe Reader 9 and Acrobat 9 Pro

This example is shown with OpenOffice.org Writer and Adobe Acrobat Pro and Reader. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  Create a table of contents at the beginning of the OpenOffice.org Writer document:

    -   Insert &gt; Indexes and Tables... &gt; Indexes and Tables &gt; Insert Index/Table

2.  Use File &gt; Export as PDF... to convert the document to PDF, specifying Tagged PDF in the Options dialog.

![Figure 3 Image of the Insert Index/Table dialog in OpenOffice.org Writer.](img/oo-toc.jpg)

The table-of-contents entries in the converted document will be linked to the headings in the document, and will appear as PDF Bookmarks in the left-hand Navigation pane. The OpenOffice.org Table of Contents and Bookmarks look the same as they appeared in Example 1.

This example is shown in operation in the [working example of creating bookmarks with OpenOffice Writer](../../working-examples/pdf-bookmarks/bookmarks.odt).

### Example 3: Adding bookmarks using Adobe Acrobat 9 Pro after conversion

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

After conversion to tagged PDF, you may decide to add bookmarks that were not automatically generated. Like the converted bookmarks, tagged bookmarks use the underlying structural information in the document.

1.  In the Bookmarks panel, choose the options menu, then choose New Bookmarks From Structure...
2.  From the Structure Elements dialog, select the elements you want specified as tagged bookmarks.

The image below shows the Bookmarks options menu.

![Figure 4 The Bookmarks options menu.](img/bookmark1.jpg)

The next image shows the selection of links in the document for bookmarking.

![Figure 5 The tagged elements that can be used for bookmarking, with 'links' selected.](img/bookmark2.jpg)

The tagged bookmarks are nested under a new, untitled bookmark. Access the context menu for the new bookmark and select the Rename option to rename the new bookmark, as shown in the following image.

![Figure 6 The bookmarks for the hyperlink in the document.](img/link-bookmark.jpg)

This example is shown in operation in the [working example of creating bookmarks with Acrobat Pro](../../working-examples/pdf-bookmarks/bookmarks.pdf).

### Example 4: Creating bookmarks with the outline hierarchy

The following code fragment illustrates part of an outline hierarchy used to create bookmarks This is typically accomplished by an authoring tool.

    121 0 obj
     << /Type /Outlines
        /First 22 0 R
        /Last 29 0 R
        /Count 6
     >>
    endobj
    22 0 obj
     << /Title (Applying Guerrilla Tactics to Usability Testing by People with Disabilities)
        /Parent 21 0 R
        /Next 29 0 R
        /First 25 0 R
        /Last 28 0 R
        /Count 4
        /Dest [3 0 R /XYZ 0 792 0]
     >>
    endobj
    25 0 obj
     << /Title (Getting started)
        /Parent 22 0 R
        /Next 26 0 R
        /Dest [3 0 R /XYZ null 701 null]
     >>
    endobj

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 12.3.3 (Document Outline) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [G64: Providing a Table of Contents](https://www.w3.org/WAI/WCAG21/Techniques/general/G64)

Tests
-----

### Procedure

1.  Check that the Bookmarks panel displays bookmarks.
2.  Check that the bookmarks link to the correct sections in the document.

### Expected Results

-   Check \#1 and Check \#2 are true.
