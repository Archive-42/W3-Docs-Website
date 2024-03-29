-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF18](PDF18)
-   [Next Technique: PDF20](PDF20)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Specifying the language for a passage or phrase with the Lang entry in PDF documents
====================================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents

This technique relates to:

-   [Success Criterion 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page) (Sufficient)
-   [Success Criterion 3.1.2: Language of Parts](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts) (Sufficient)

Description
-----------

The objective of this technique is to specify the language of a passage, phrase, or word using the /Lang entry to provide information in the PDF document that user agents need to present text and other linguistic content correctly. This is normally accomplished using a tool for authoring PDF.

Both assistive technologies and conventional user agents can render text more accurately when the language is identified. Screen readers can load the correct pronunciation rules. As a result, users with disabilities are better able to understand the content.

Note

This technique can be used to set the default language for the entire document if the entire document is contained in the container or tag. In this case, this technique would apply to Success Criterion 3.1.1.

Examples
--------

### Example 1: Adding a /Lang entry to specify the language for a paragraph using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  In the Tools menu, select Advanced Editing.
2.  Select the TouchUp Reading Order Tool.
3.  Click the Show Order Panel button in the TouchUp Reading Order Tool
4.  Select the Tags tab in the Show Order Panel and select the paragraph that is in the different language. You can also use the Options menu in the Tags tab: select Find Tag from Selection.
5.  Right-click the selection and select Properties in the context menu.
6.  In the Tags tab in the Properties dialog, select the language from the drop-down list.

Note

Acrobat includes 16 preset language selections. If you need to specify a language that is not on the list, such as Russian, you must type the ISO 639 code for the language, not its name.

### Example 2: Adding a /Lang entry to specify the language for a specific word or phrase using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  Select the word or phrase that is in a different language and create a tag for it in the Reading Order Panel (e.g., Text).
2.  Open the Tags tab in the Show Order Panel and select the tagged word or phrase that is in the different language. You can also use the Options menu in the Tags tab: select Create Tag from Selection.
3.  Right-click the selection and select Properties in the context menu.
4.  In the Tags tab in the Properties dialog, select the language from the drop-down list.

When you tag a word or phrase, Acrobat splits the original content into three document content tags: one for the text that precedes your selection, one for the selection, and one for the text that follows the selection. As needed, drag the document content tag for the selected text into position between the other two tags, so that the text reads in the proper order. All three tags must also be at the same level beneath their parent tag. Drag them into place if they are not.

![Figure 1 Specifying the language for a word in text using the Show Order Panel of the TouchUp Reading Order tool.](img/language.jpg)

This example is shown in operation in the [working example of marking a specific word or phrase in Acrobat Pro](../../working-examples/pdf-lang-phrase/lang-of-phrase.pdf).

### Example 3: Specifying the language for a word or phrase in a PDF document using a /Lang entry

Below the level of the default document language, the language for a passage may be specified for the following items:

-   Marked-content sequences that are not in the structure hierarchy, through a /Lang entry in a property list attached to the marked-content sequence with a Span tag.
-   Structure elements of any type, through a /Lang entry in the structure element dictionary.

The following code fragment illustrates code that is typical for using the /Lang entry to override the default document language by specifying a marked-content sequence within a page's content stream:

       /P % Start of marked-content sequence
       BDC
          (See you later, or in Spanish you would say, ) Tj
          /Span << /Lang (es-MX) >>% Start of nested marked-content sequence
         BDC
          (Hasta la vista.) Tj
         EMC% End of nested marked-content sequence
       EMC% End of marked-content sequence

The following code fragment illustrates code that is typical for using the /Lang entry in the structure element dictionary. In this case, the /Lang entry applies to the marked-content sequence having an MCID (marked-content identifier) value of 0 within the indicated page's content stream.

    1 0 obj% Structure element
      << /Type /StructElem
        /S /Span% Structure type
        /P /P% Parent in structure hierarchy
        /K<< /Type /MCR
          /Pg 2 0 R% Page containing marked-content sequence
          /MCID 0% Marked-content identifier
         >>
       /Lang (es-MX)% Language specification for this element
       >>
    endobj
    2 0 obj% Page object
      << /Type /Page
         /Contents 3 0 R% Content stream
       …
       >>
       endobj
    3 0 obj% Page's content stream
      << /Length … >>
        stream
         BT
          /P % Start of marked-content sequence
          BDC
         (See you later, or in Spanish you would say, ) Tj
         /Span << /MCID 0 >>% Start of nested marked-content sequence
        BDC
         (Hasta la vista.) Tj
        EMC% End of nested marked-content sequence
      EMC% End of marked-content sequence
     ET
     endstream
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

-   [PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF16)

Tests
-----

### Procedure

1.  Verify that the language of a passage, phrase, or word that differs from the language of the surrounding text is correctly specified by a /Lang entry on an enclosing tag or container:

    -   Read the PDF document with a screen reader that supports the language of the phrase and the language of the surrounding text, listening to hear that the text is read in the correct natural language.
    -   Using a PDF editor, select the word or phrase that is in the different language and check that the language is set correctly.
    -   Use a tool which is capable of showing the /Lang entry value to open the PDF document and view the language settings.
    -   Use a tool that exposes the document through the accessibility API and verify that the language for the passage or phrase is set correctly.

2.  Verify that if the container or tag contains the entire document, the language setting is the language intended as the default for the document.

### Expected Results

-   \#1 and \#2 are true.
