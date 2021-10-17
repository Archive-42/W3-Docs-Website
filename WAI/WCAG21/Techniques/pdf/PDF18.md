-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF17](PDF17)
-   [Next Technique: PDF19](PDF19)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Specifying the document title using the Title entry in the document information dictionary of a PDF document
============================================================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents

This technique relates to [Success Criterion 2.4.2: Page Titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled) (Sufficient when used with [G88: Providing descriptive titles for Web pages](../general/G88)).

Description
-----------

The intent of this technique is to show how a descriptive title for a PDF document can be specified for assistive technology by using the /Title entry in the document information dictionary and by setting the DisplayDocTitle flag to True in a viewer preferences dictionary. This is typically accomplished by using a tool for authoring PDF.

Document titles identify the current location without requiring users to read or interpret page content. User agents make the title of the page easily available to the user for identifying the page. For instance, a user agent may display the page title in the window title bar or as the name of the tab containing the page.

Examples
--------

### Example 1: Setting the document title in the metadata and specifying that the title be displayed in the title bar using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

Open the PDF document in Adobe Acrobat Pro:

1.  Select File &gt; Properties
2.  Select the Description tab to view the metadata in the document, including the document information dictionary
3.  Modify the Title field to add or change the document's Title entry

![Figure 1 Viewing the Title field in the Description tab of the Properties dialog. The document title is entered in the field.](img/title-entry.jpg)

Note that, with Adobe Acrobat installed, you can also enter and read the data properties information from the desktop. Access the file's context menu, choose Properties, and select the PDF tab. Any information you type or edit in this dialog box also appears in the Document Properties Description when you open the file.

To display the document title in the title bar of a user agent:

1.  Select File &gt; Properties
2.  Select the Initial View tab
3.  In the Window Options section, select Document Title in the Show pull-down list.

![Figure 2 Specifying that the document title be displayed in the title bar. In the Window Options, Show Document Title is selected.](img/doc-title.jpg)

The title is displayed in the title bar, as shown in the image below.

![Figure 3 Image of the Adobe Acrobat Pro title bar with the title of the document displayed.](img/title-bar.jpg)

This example is shown in operation in the [working example of displaying document title in the title bar](../../working-examples/pdf-document-title/title-bar.pdf).

### Example 2: A /Title entry in the document information dictionary of a PDF document

The following code fragment illustrates code that is typical for providing a /Title entry in a document information dictionary that contains a document title.

    1 0 obj   
       << /Title (Applying Guerrilla Tactics to Usability Testing by People with Disabilities)    
          /Author (Mary Smith) 
          /CreationDate (D:19970915110347-08'00')    
       >>   
    endobj

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)
-   Section 14.3.3 (Document Information Dictionary) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [PDF Reference 1.6, TITLE entry of the document information dictionary](http://partners.adobe.com/public/developer/en/pdf/PDFReference16.pdf#page=794)

Related Techniques
------------------

-   [G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G88)

Tests
-----

### Procedure

1.  Verify that the title for the document is correctly specified and displayed in the user agent title bar by applying one of the following:

    -   Open the PDF document with a screen reader, listening to hear that the document title is read correctly.
    -   Using a PDF editor, check that the document title is specified. Select the Initial View tab to check that the title will be displayed.
    -   Use a tool which is capable of showing the /Title entry value in the document catalog to open the PDF document and view the /Title entry and /DisplayDocTitle flag settings.

### Expected Results

-   \#1 is true.
