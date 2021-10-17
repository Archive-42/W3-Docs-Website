-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF3](PDF3)
-   [Next Technique: PDF5](PDF5)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Tests](#tests)

Hiding decorative images with the Artifact tag in PDF documents
===============================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents

This technique relates to [Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) (Sufficient).

Description
-----------

The purpose of this technique is to show how purely decorative images in PDF documents can be marked so that they can be ignored by Assistive Technology by using the /Artifact tag. This is typically accomplished by using a tool for authoring PDF.

In PDF, artifacts are generally graphics objects or other markings that are not part of the authored content. Examples of artifacts include page header or footer information, lines or other graphics separating sections of the page, or decorative images.

Examples
--------

### Example 1: Marking a background image as an artifact using Adobe Acrobat 9 Pro's TouchUp Reading Order Tool

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

The TouchUp Reading Order Tool can be used to mark an image as "Background," which removes it from the document tag structure.

1.  Open the TouchUp Reading Order Tool in Acrobat Pro: Advanced &gt; Accessibility &gt; TouchUp Reading Order
2.  Select the decorative image in the document
3.  In the TouchUp Reading Order Tool, click the Background button to remove the selected image from the tag structure

The screenshot below illustrates this example.

![Figure 1 screen shot showing use of the TouchUp Reading Order panel to remove an image from the tag tree](img/turo_background.gif)

This example is shown in operation in the [working example of creating a decorative image (Word file)](../../working-examples/pdf-decorative-image/decorative-image.docx) and [working example of marking a background image as an artifact (PDF file)](../../working-examples/pdf-decorative-image/decorative-image.pdf).

### Example 2: Marking an image as an artifact in a PDF document using an /Artifact tag or property list

The PDF specification allows images to be marked as "artifacts" as defined in Section 14.8.2.2 (Real Content and Artifacts) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf). An artifact is explicitly distinguished from real content by enclosing it in a marked-content sequence with the /Artifact tag.

/Artifact

    BMC  ...  EMC    

or

/Artifact propertyList

    BDC  ...  EMC  

The first is used to identify a generic artifact; the second is used for artifacts that have an associated property list. Note, to aid in text reflow, artifacts should be defined with property lists whenever possible. Artifacts lacking a specified bounding box are likely to be discarded during reflow.

Property list entries for artifacts include Type, BBox, Attached, and Subtype.

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 14.8.2.2 (Real Content and Artifacts) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Tests
-----

### Procedure

1.  For an image that is purely decorative, use one of the following to verify that it is marked as an artifact:

    -   Read the PDF document with a screen reader, listening to hear that the decorative image is not announced when reading the content line-by-line.
    -   Using a PDF editor, make sure the decorative image is marked as an artifact.
    -   Reflow the document and make sure the decorative image does not appear on the page.
    -   Use a tool that is capable of showing the /Artifact entry or property list, such as aDesigner, to open the PDF document and verify that decorative images are marked as artifacts.
    -   Use a tool that exposes the document through the accessibility API and verify that the decorative image is not exposed through the API.

### Expected Results

-   \#1 is true.
