-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: H98](../html/H98)
-   [Next Technique: PDF2](PDF2)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Applying text alternatives to images with the Alt entry in PDF documents
========================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents with images

This technique relates to [Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) (Sufficient).

Description
-----------

The objective of this technique is to provide text alternatives for images via an /Alt entry in the property list for a Tag. This is normally accomplished using a tool for authoring PDF.

PDF documents may be enhanced by providing alternative descriptions for images, formulas, and other items that do not translate naturally into text. In fact, such text alternatives are required for accessibility: alternate descriptions are human-readable text that can be vocalized by text-to-speech technology for the benefit of users with vision disabilities.

When an image contains words that are important to understanding the content, the text alternative should include those words. This will allow the alternative to accurately represent the image. Note that it does not necessarily describe the visual characteristics of the image itself but must convey the same meaning as the image.

Examples
--------

### Example 1: Adding an /Alt entry to an image using Adobe Acrobat 9 Pro's TouchUp Object Tool

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  Choose Tools &gt; Advanced Editing &gt; TouchUp Object Tool

    ![Figure 1 The TouchUp Object Tool in the Advanced Editing menu.](img/textalt1.gif)

2.  Access the context menu for the image and choose Properties.
3.  On the TouchUp Properties dialog, select the Tag tab.
4.  On the Tag panel, type the text alternative in the Alternate Text text box.

    ![Figure 2 The Tag Tab in the TouchUp Properties dialog.](img/textalt2.gif)

This example is shown in operation in the [working example of Adding an /Alt entry to an image](../../working-examples/pdf-alt-entry-to-an-image/alt-entry-to-an-image.pdf).

### Example 2: Adding an /Alt entry to an image using Adobe Acrobat 9 Pro's TouchUp Reading Order Tool

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  Choose Tools &gt; Advanced Editing &gt; TouchUp Reading Order Tool

    ![Figure 3 The TouchUp Reading Order Tool in the Advanced Editing menu.](img/textalt3.gif)

2.  The TouchUp Reading Order dialog will be displayed.
3.  Right-click on the image and choose Edit Alternate Text.
4.  The Alternate Text dialog will be displayed.
5.  Type the text alternative in the Alternate Text text box.

    ![Figure 4 The Alternate Text box.](img/textalt4.gif)

### Example 3: Adding an /Alt entry to an image in PDF documents generated using Microsoft Word

This example is shown with Microsoft Word. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

#### Word 2000-2003

1.  Right-click on the image and choose Format Picture
2.  Select the Web tab
3.  Type the alternative text into the text box provided and then click OK.

![Figure 5 The Web tab in the Format Picture dialog.](img/word2003alt.gif)

#### Word 2007

1.  Right-click on the image and choose Size
2.  Select the Alt Text tab
3.  Type the alternative text into the text box provided and then click OK.

![Figure 6 The Alt Text tab in the Size dialog.](img/word2007alt.gif)

### Example 4: Adding an /Alt entry to an image in PDF documents generated using OpenOffice.org Writer 2.2

This example is shown with Open Office.org Writer. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  Access the context menu for the image and choose Picture...
2.  Select the Options tab
3.  Type the alternative text into Alternate (Text Only) text box and click OK.

![Figure 7 The Options tab in the Picture... dialog.](img/ooalt.jpg)

### Example 5: Adding a text alternative to an image in a PDF document using an /Alt entry

The /Alt property used on an image of mountains with a moon and trees typically would be used like this (typically accomplished by an authoring tool):

    /Figure <</Alt (Sketch of Mountains with moon rising over trees) >>

The image might also be represented by a tag with a different name. A different name might be used because the tag name is written in a language other than English or because a specific tool uses a different name for some other reason. In this situation, it is also necessary that the RoleMap contained within the StructTreeRoot for the PDF document contain an entry which explicitly maps the name of the tag used for the image with the standard structure type used in PDF documents (in this case, Figure). If the RoleMap contains only an entry mapping Shape tags to Figure tags, the rolemap information would appear as follows:

    /RoleMap << /Shape /Figure >>

In this case, the usage of the /Alt entry as follows would also be correct:

    /Shape <</Alt (Crater Lake in the summer, with the blue sky, clouds and crater walls perfectly reflected in the lake) >>
                            

Note that the /Alt entry in property lists can be combined with other entries.

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 14.9.4 (Replacement Text) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [Acrobat and Accessibility](http://webaim.org/techniques/acrobat/acrobat)
-   [PDF Reference 1.6, 10.8.2 Alternate Descriptions](http://partners.adobe.com/public/developer/en/pdf/PDFReference16.pdf#page=892)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G94)

Tests
-----

### Procedure

For all images which need equivalents:

1.  Verify the images have /Alt entries on an enclosing tag by one of the following:

    -   Read the PDF document with a screen reader, listening to hear that the equivalent text is read when tabbing to the non-text object (if it is tabbable) or hearing the alternative text read when reading the content line-by-line.
    -   Using a PDF editor, check that a text alternative is displayed for each image.
    -   Use a tool which is capable of showing the /Alt entry value, such as aDesigner, to open the PDF document and view the GUI summary to read the text alternatives for images.
    -   Use a tool that exposes the document through the accessibility API and verify that images have required text equivalents.

### Expected Results

-   Check 1 is true.
