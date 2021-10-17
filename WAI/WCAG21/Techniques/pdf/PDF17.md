-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF16](PDF16)
-   [Next Technique: PDF18](PDF18)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Specifying consistent page numbering for PDF documents
======================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents

This technique relates to:

-   [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Sufficient when used with an unwritten technique)
-   [Success Criterion 2.4.8: Location](https://www.w3.org/WAI/WCAG21/Understanding/location) (Advisory)
-   [Success Criterion 3.2.3: Consistent Navigation](https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation) (Advisory)

Description
-----------

The objective of this technique is to help users locate themselves in a document by ensuring that the page numbering displayed in the PDF viewer page controls has the same page numbering as the document. For example, Adobe Acrobat Pro and Reader display page numbers in the Page Navigation toolbar. The page number format is specified by the /PageLabels entry in the Document Catalog.

Many documents use specific page number formats within a document. Commonly, front matter is numbered with lowercase Roman numerals. The main content, starting on the page numbered 1, may actually be the fifth or sixth page in the document. Similarly, appendices may begin with page number 1 plus a prefix of the appendix letter (e.g., "A-1").

Authors should make sure that the page numbering of their converted documents is reflected in any page number displays in their user agent. Consistency in presenting the document's page numbers will help make navigating the document more predictable and understandable.

As an example, if /PageLabels has not been provided to describe the page number formatting, the page numbering scheme will not be reflected in the Page Navigation toolbar in Adobe Acrobat Pro or Reader. This toolbar displays the page number in a text box, which users can change to move to another page. In addition, users can select the arrows to move one page up or down in the document. The toolbar also displays the relative page number location. In the image below, the default display indicates the user is on page 1 of 4 pages.

![Figure 1 Page Navigation toolbar in Adobe Acrobat Pro, displaying the page number in a text box, which users can change to move to another page. In addition, users can select the arrows to move one page up or down in the document. The toolbar also displays the relative page number location, e.g., page 1 of 4 pages.](img/page_nos-nav.jpg)

A more direct way of going to a page is to use the shortcut for the View &gt; Page Navigation &gt; Page menu item. On Windows, this shortcut is "Ctrl + Shift + N"; on Mac OS, it is "Cmd + Shift + N". This brings up a dialog box to go to a specific page number.

Examples
--------

### Example 1: Editing PDF page number formatting specifications using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

The example document converted from Microsoft Word 2007 has 4 pages, numbered i, ii, iii, 1. The image below shows the Word document with lowercase Roman numeral page numbering specified In Word using:

-   Insert ribbon &gt; Page number &gt; Page Number Format

In this document, a new section has been created with page numbering beginning with Arabic numeral 1 on the fourth page of the document. The document was then converted to PDF from Word.

![Figure 2 The Page Number Format dialog in Word, specifying lowercase Roman page numbering.](img/pages_nos_word.jpg)

In Adobe Acrobat Pro, Select View &gt; Navigation Panels &gt; Pages. The following image shows the page thumbnails in the Pages panel and the Page Navigation toolbar. Both the thumbnails and the toolbar use Arabic page numbers.

![Figure 3 Page thumbnails in the Pages panel and the Page Navigation toolbar, both using Arabic page numbers.](img/page_nos1.jpg)

To correct the page numbers:

1.  Select the pages to be renumbered
2.  Access the context menu for the selected pages and select Number Pages
3.  In the Page Numbering dialog, select the lowercase Roman numeral style and the starting page (1 by default, which is correct in this case)
4.  Select OK

The following image shows the Page Numbering dialog and selections.

![Figure 4 Three pages selected on the Pages panel and the Page Numbering dialog specifying the new page styles. The starting page is specified as 1 (default), which is correct.](img/page_nos2.jpg)

Follow the same process to change the fourth page number to Arabic numeral 1.

The following image shows the correct page numbers for the 4 pages. Note that page iii is selected in the Pages panel and the Page Navigation toolbar shows iii in the text area. In addition, the relative location in the document is shown at the right of the toolbar: "(3 of 4)."

![Figure 5 The Pages panel in Adobe Acrobat Pro showing pages numbered i, ii, iii, 1. The Page Navigation toolbar shows iii for the third page. The relative page location is also displayed as '(3 of 4).'](img/page_nos3.jpg)

This example is shown in operation in the [working example of specifying page numbers in a document converted from Word (Word file)](../../working-examples/pdf-page-numbers/page-numbers.docx) and [working example of specifying page numbers in a document converted from Word (PDF file)](../../working-examples/pdf-page-numbers/page-numbers.pdf).

### Example 2: Specifying page numbers using the /PageLabels entry

The following code fragment illustrates code that is typical for specifying multiple page numbering schemes in a document.

The example below is for a document with pages labeled:

i, ii, iii, iv, 1, 2, 3, A-8, A-9, …

This numbering scheme requires 3 page-label dictionaries (for lowercase Roman, Arabic, and prefixed numbers)

    1 0 obj
        << /Type /Catalog
           /PageLabels << /Nums [ 0 << /S /r >>  % lowercase Roman numerals
                                  4 << /S /D >>  % Arabic numerals
                                  7 << /S /D     % Arabic numerals with ...
                          /P (A-)                % the prefix "A-"...
                          /St 8                  % starting at page 8
                                    >>
                                ]
                        >>
           …
       >>
      endobj

Page labels are specified as follows:

-   /S specifies the numbering style for page numbers:

    -   /D - Arabic numerals (1,2,3...)
    -   /r - lowercase Roman numerals (i, ii, iii,...)
    -   /R - uppercase Roman numerals (I, II, III,...)
    -   /A - uppercase letters (A-Z)
    -   /a - lowercase letters (a-z)

-   /P (optional) - page number prefix
-   /St (optional) - the value of the first page number in the range (default: 1)

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 12.4.2 (Page Labels) [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [PDF14: Providing running headers and footers in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF14)

Tests
-----

### Procedure

1.  For every section in the document that uses a different pagination format, check that the page navigation feature uses the same format used on the document pages:

    -   Select the pages that begin a new pagination format and visually verify that the same format and page number is shown in the page navigation feature.
    -   Using a screen reader, check that the page number announced in the page navigation feature is the same as the page number announced on the document page.
    -   Using a tool that is capable of showing the /PageLabels entries, open the PDF document and view the entries.
    -   Use a tool that exposes the document through the accessibility API, and verify that the /PageLabels entries are specified correctly.

### Expected Results

-   \#1 is true.
