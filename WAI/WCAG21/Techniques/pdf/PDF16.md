-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF15](PDF15)
-   [Next Technique: PDF17](PDF17)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Setting the default language using the /Lang entry in the document catalog of a PDF document
============================================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents

This technique relates to [Success Criterion 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page) (Sufficient).

Description
-----------

The objective of this technique is to specify a document's default language by setting the /Lang entry in the document catalog. This is normally accomplished using a tool for authoring PDF.

Both assistive technologies and conventional user agents can render text more accurately when the language of the document is identified. Screen readers can load the correct pronunciation rules. Visual browsers can display characters and scripts correctly. Media players can show captions correctly. As a result, users with disabilities are better able to understand the content.

Examples
--------

### Example 1: Adding a /Lang entry to specify the default document language using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  Open the document in Adobe Acrobat Pro
2.  From the File menu, select "Properties..."
3.  In the "Properties" dialog, select the "Advanced" tab
4.  In the "Reading Options" field, select the default language from the "Language" combo box

![Figure 1 Specifying the default language in Adobe Acrobat's Properties dialog.](img/docprop.gif)

Note

Acrobat includes 16 preset language selections. If you need to specify a language that is not on the list, such as Russian, you must type the ISO 639 code for the language, not its name.

This example is shown in operation in the [working example of adding a /Lang entry using Acrobat Pro](../../working-examples/pdf-lang/language-en.pdf).

### Example 2: Specifying the default document language in a PDF document using Microsoft Word 2007

This example is shown with Microsoft Word. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

Documents authored in Microsoft Word: "In some instances, even if the document language has been specified in the source file, the information about document language is not conveyed to the PDFMaker. Setting the language for an entire document in the Document Properties dialog box \[see Example 1\] corrects all errors related to this option."([Adobe® Acrobat® 9 Pro Accessibility Guide: Creating Accessible PDF from Microsoft® Word](http://www.adobe.com/content/dam/Adobe/en/accessibility/products/acrobat/pdfs/A9-accessible-pdf-from-word.pdf))

### Example 3: Specifying the default document language in a PDF document using a /Lang entry

The natural language used for text in a document is determined in a hierarchical fashion, based on whether an optional /Lang entry is present in any of several possible locations. At the highest level, the document's default language may be specified by a /Lang entry in the document catalog.

The following code fragment illustrates code that is typical for using the /Lang entry in the document catalog for a document's default language (in this case, US English). (This is typically accomplished by an authoring tool.)

     1 0 obj
       << /Type /Catalog
          ...
          /Lang (en-US)
          ...
       >> 
     endobj

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 14.9.2 (Natural Language Specification) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [ISO 639-2 Codes](http://www.loc.gov/standards/iso639-2/php/code_list.php)
-   [PDF Reference 1.6, 10.8.1 Natural Language Specification (PDF 8.7 Mb)](http://partners.adobe.com/public/developer/en/pdf/PDFReference16.pdf#page=886)
-   [PDF Standards: Natural Language Specification](http://pdf.editme.com/pdfua-naturalLanguageSpecification)
-   [Adobe® Acrobat® 9 Pro Accessibility Guide: Creating Accessible PDF from Microsoft® Word](http://www.adobe.com/content/dam/Adobe/en/accessibility/products/acrobat/pdfs/A9-accessible-pdf-from-word.pdf)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [PDF19: Specifying the language for a passage or phrase with the Lang entry in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF19)

Tests
-----

### Procedure

1.  Verify that the default language for the document is correctly specified by applying one of the following:

    -   Read the PDF document with a screen reader, listening to hear that the text is read in the correct natural language.
    -   Using a PDF editor, check that the language is set to the default document language.
    -   Use a tool which is capable of showing the /Lang entry value in the document catalog to open the PDF document and view the language settings.
    -   Use a tool that exposes the document through the accessibility API and verify that the language is set to the default language.

### Expected Results

-   \#1 is true.
