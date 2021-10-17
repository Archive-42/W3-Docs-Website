-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF12](PDF12)
-   [Next Technique: PDF14](PDF14)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Providing replacement text using the /Alt entry for links in PDF documents
==========================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents that contain links.

This technique relates to:

-   [Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context) (Sufficient when used with [G91: Providing link text that describes the purpose of a link](../general/G91))
-   [Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only) (Sufficient when used with an unwritten technique)

Description
-----------

The objective of this technique is to provide replacement link text via the /Alt entry in the property list for a tag. This is usually not necessary, but in some situations, additional information beyond the visible link text is needed, particularly for screen reader users. Screen readers can read visible link text, but replacing the screen text with meaningful alternate text for links in a PDF document can make links more accessible.

Links in PDF documents are represented by a Link tag and objects in its sub-tree, consisting of a link object reference (or Link annotation) and one or more text objects. The text object or objects inside the Link tag are used by assistive technologies to provide a name for the link.

Authors can replace the default link text by providing an /Alt entry for the Link tag. When the Link tag has an /Alt entry, screen readers ignore the value of any visible text objects in the Link tag and use the /Alt entry value for the link text.

The simplest way to provide context-independent link text that complies with the WCAG 2.0 success criteria is to create them when authoring the document, before conversion to PDF. In some cases, it may not be possible to create the links using the original authoring tool. When editing PDF documents with Adobe Acrobat Pro, the best way to create accessible links is to use the Create Link command.

Authors should make sure that the alternate text makes sense in context of the screen text before and after the link.

Examples
--------

### Example 1: Adding alternate link text using Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

The image below shows a document converted to PDF from Oracle Open Office. Note that the visible link text is the URL for the link target. A screen reader will read the entire URI as the link text.

![Figure 1 A document with the link URI as the link text.](img/link-alt1.jpg)

To create more accessible link text for assistive technology:

1.  In the View menu, open the Tag panel by selecting Navigation Panels &gt; Tags.
2.  Locate the Link tag in the tag tree, access the context menu for the link, and select Properties.
3.  In the TouchUp Properties dialog, in the Tags tab, enter replacement text in the Alternate Text field. Screen readers will read this text instead of the entire URI.

The next image shows the Link tag structure in the Tag panel.

![Figure 2 The Link tag structure in the tag panel.](img/link-alt2.jpg)

The last image shows the Alternate Text specified in the Link tag's TouchUp Properties dialog. A screen reader will read the Alternate Text as the link text.

![Figure 3 The new Alternate Text: 'Boston Globe technology page'](img/link-alt3.jpg)

This example is shown in operation in the [working example of adding alternate link text (OpenOffice file)](../../working-examples/pdf-link-alt-text/link-text.odt) and [working example of adding alternate link text (PDF file)](../../working-examples/pdf-link-alt-text/link-text-oo.pdf).

### Example 2: Adding alternate link text in a PDF document using the /Alt entry

The following code fragment illustrates code that is typical for alternative text for a link. This is typically accomplished by an authoring tool.

    32 0 obj
    <<
      /S/URI                                       %Action type (required), must be URI for a URI action
      /URI(http://www.boston.com/business/technology/)  %Uniform resource identifier(required), the URI to be resolved
    >>
    endobj

The following illustrates how to specify alternate text for the URL in the above link:

    11 0 obj
    <<
      /Alt(Boston Globe technology page)    %Alternate text entry
      /K [ 1                                                      
           <<
             /Obj 27 0 R
             /Type /OBJR            %Object reference to the link
           >>
           ]                       
      /P 12 0 R
      /Pg 18 0 R
      /S
      /Link
    >>
    endobj

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 14.9.4 (Replacement Text) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence](https://www.w3.org/WAI/WCAG21/Techniques/general/G53)
-   [G91: Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG21/Techniques/general/G91)
-   [G149: Using user interface components that are highlighted by the user agent when they receive focus](https://www.w3.org/WAI/WCAG21/Techniques/general/G149)
-   [PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11)

Tests
-----

### Procedure

1.  For the hyperlink, verify that the alternate link text is properly coded by one of the following:

    -   Read the PDF document with a screen reader, listening to hear that the alternate link text is read correctly.
    -   Use a tool that is capable of showing the /Alt entry to open the PDF document and view the hyperlink and alternate link text.
    -   Use a tool that exposes the document through the accessibility API and verify that the alternate link text is the text for the link.

### Expected Results

-   \#1 is true.
