-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF13](PDF13)
-   [Next Technique: PDF15](PDF15)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Providing running headers and footers in PDF documents
======================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents

This technique relates to:

-   [Success Criterion 2.4.8: Location](https://www.w3.org/WAI/WCAG21/Understanding/location) (Advisory)
-   [Success Criterion 3.2.3: Consistent Navigation](https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation) (Advisory)

Description
-----------

The objective of this technique is to help users locate themselves in a document by providing running headers and footers via pagination artifacts. This is normally accomplished using a tool for authoring PDF.

Running headers and footers help make content easier to use and understandable by providing repeated information in a consistent and predictable way. The content of headers and footers will vary widely depending on the document scope and content, the audience, and design decisions. Some examples of location information that may be used in headers and footers are listed below. Whether the information appears in a header or a footer is often a design decision; page numbers often appear in footers but they may alternatively appear in headers.

-   Document title
-   Current chapter and/or section in the document
-   Page numbers with location information such as, "Page 3-4" or "Page 9 of 15."
-   Author and/or date information.

Consistency helps users with cognitive limitations, screen-reader users and low-vision magnifier users, and users with intellectual disabilities understand content more readily.

The easiest way to provide page headers and footers is in the authoring tool for the document. Authoring tools typically provide features for creating header and footer text and information (such as page numbers). However, if after converting your document to PDF, you need to add or modify page headers and footers, authoring or repair tools like Adobe Acrobat Pro's Header & Footer tools can be used. In all cases, the tools generate page headers and footers in consistent and predictable layout, format, and text.

Examples
--------

### Example 1: Adding running headers and footers using Microsoft Word 2007

This example is shown with Microsoft Word. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

In Microsoft Word, use the Insert ribbon, which allows you to specify header, footer, and page number information and layout, as shown in the following images.

![Figure 1 Header and Footer tools on the Word Insert ribbon](img/word-headerfootertools.jpg)

You can use these tools to specify headers and footers as shown in the following images:

![Figure 2 Page headers in a Word document](img/header-word.jpg)

![Figure 3 Page footers in a Word document.](img/footer-word.jpg)

When converted to PDF, the page headers and footers appear in the document.

![Figure 4 Page headers converted from Word.](img/pdf-page-header.jpg)

![Figure 5 Page footers converted from Word.](img/pdf-page-footer.jpg)

This example is shown in operation in the [working example of adding running headers using Word (Word file)](../../working-examples/pdf-headers-footers/headers-footers.docx) and [working example of adding running headers using Word (PDF file)](../../working-examples/pdf-headers-footers/headers-footers-word.pdf).

### Example 2: Adding running headers and footers using OpenOffice.org Writer 2.2

This example is shown with OpenOffice.org Writer. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

In OpenOffice.org Writer, use the Insert &gt; Header and Insert &gt; Footer tools, which allow you to specify header and footer information and layout, as shown in the following images.

![Figure 6 Header and Footer tools in OpenOffice.org Writer.](img/ooheaderfootertools.jpg)

![Figure 7 Page headers in an OpenOffice.org Writer document.](img/header-oo.jpg)

![Figure 8 Page footers in an OpenOffice.org Writer document.](img/footer-oo.jpg)

When converted to PDF, the page headers and footers appear in the document as they do in the converted Word document in Example 1.

This example is shown in operation in the [working example of adding running headers using OpenOffice Writer (OpenOffice file)](../../working-examples/pdf-headers-footers/headers-footers.odt) and [working example of adding running headers using OpenOffice Writer (PDF file)](../../working-examples/pdf-headers-footers/headers-footers-oo.pdf).

### Example 3: Adding running headers and footers to PDF documents using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

In Adobe Acrobat Pro, you can add or modify headers and footers:

1.  Select Document &gt; Header & Footer &gt; Add...
2.  In the Add Header and Footer tool, specify text and formats for headers and footers in your document.
3.  Use the Previews to make sure the text, fonts, and layout are as you want them for your document.

The image below shows Acrobat Pro's Add Header and Footer tool.

![Figure 9 Add Header and Footer tool in Adobe Acrobat Pro](img/pro-header-footer-tool.jpg)

### Example 4: Marking a running header or footer as a pagination artifact in a PDF document using an /Artifact tag or property list

The PDF specification allows running headers and footers to be marked as "pagination artifacts" as defined in section 14.8.2.2 "Real Content and Artifacts," of [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf).

An artifact is explicitly distinguished from real content by enclosing it in a marked-content sequence with the /Artifact tag.

    /Artifact
    BMC
    ...
    EMC

or

    /Artifact propertyList
    BDC
    ...
    EMC

The first is used to identify a generic artifact; the second is used for artifacts that have an associated property list. Note: to aid in text reflow, artifacts should be defined with property lists whenever possible. Artifacts lacking a specified bounding box are likely to be discarded during reflow.

Property list entries for artifacts include Type, BBox, Attached, and Subtype.

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 14.8.2.2 (Real Content and Artifacts) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [G61: Presenting repeated components in the same relative order each time they appear](https://www.w3.org/WAI/WCAG21/Techniques/general/G61)
-   [PDF9: Providing headings by marking content with heading tags in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF9)
-   [PDF2: Creating bookmarks in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF2)

Tests
-----

### Procedure

1.  Check that running headers and/or footers are provided and contain information to help users locate themselves within the document (such as page numbers or chapter numbers).
2.  If section headers are used in the running header or footer, check that the section header and the running header or footer are consistent.

### Expected Results

-   \#1 and \#2 are true.
