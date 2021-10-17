-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF8](PDF8)
-   [Next Technique: PDF10](PDF10)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Providing headings by marking content with heading tags in PDF documents
========================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents with headings

This technique relates to:

-   [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Sufficient when used with an unwritten technique)
-   [Success Criterion 2.4.1: Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks) (Sufficient when used with an unwritten technique)

Description
-----------

The purpose of this technique is to show how headings in PDF documents can be marked so that they are recognized by assistive technologies. Headings are marked up using the heading elements (H, H1, H2, ... H6) in the structure tree. This is typically accomplished by using a tool for authoring PDF.

Heading markup can be used:

-   to indicate start of main content
-   to mark up section headings within the main content area
-   to demarcate different navigational sections, such as top or main navigation, left or secondary navigation, and footer navigation
-   to mark up images (containing text) which have the appearance of headings visually.

Because headings indicate the start of important sections of content, it is possible for assistive technology users to access the list of headings and to jump directly to the appropriate heading and begin reading the content. This ability to "skim" the content through the headings and go directly to content of interest significantly speeds interaction for users who would otherwise access the content slowly.

Examples
--------

### Example 1: Adding or modifying tagged headings in PDF documents with Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

#### Using the Touchup Reading Order tool

One method of adding headings to PDF documents uses the Touchup Reading Order tool:

1.  Open the PDF document in Adobe Acrobat Pro
2.  Select Advanced &gt; Accessibility &gt; TouchUp Reading Order...
3.  Click the Show Order Panel button on the TouchUp Reading Order panel
4.  View the tags in the Show Order panel.

The following image shows a PDF document opened in Adobe Acrobat Pro. The Tags panel is open, showing heading text "Cooking techniques" tagged as H1 and "Cooking with oil" tagged as H2. The text "Cooking with butter" should be tagged as H2 but is not.

![Figure 1 PDF document opened in Adobe Acrobat. The Tags panel shows the headings in the tag tree. Text that should be tagged as H2 is incorrectly tagged as a paragraph.](img/cooking-headings1.gif)

To correct the H2 heading, use the TouchUp Reading Order panel as follows:

1.  Left click and drag a selection box over the content you want to tag.
2.  Select the Heading 2 tag from the TouchUp Reading Order panel.

The following image shows the PDF document opened in Adobe Acrobat Pro. The TouchUp Reading Order panel is visible. A selection box appears around the text "Cooking with butter," and Heading 2 on the panel is selected.

![Figure 2 PDF document opened in Adobe Acrobat. The TouchUp Reading Order panel is visible; the heading text is selected and Heading 2 on the panel is selected.](img/cooking-headings2.gif)

Finally, click the Show Order Panel button on the TouchUp Reading Order panel.

The following image shows the PDF document opened in Adobe Acrobat Pro. The Tags panel is visible, showing that the text "Cooking with butter" is now tagged as H2.

![Figure 3 PDF document opened in Adobe Acrobat. The TouchUp Reading Order panel shows the correctly tagged headings.](img/cooking-headings3.gif)

#### Using the Order and Tags panels

You can also add or change headings as follows:

1.  Bring up the Order panel.
2.  Access the context menu for the text to be changed or added as a heading.
3.  Select the correct heading tag for the text.

The following screenshot shows Order panel and the context menu for the text "Cooking with butter." "Tag as heading 2" is selected in the context menu.

![Figure 4 PDF document opened in Adobe Acrobat. The Order panel and context menu show the text to be changed to Heading 2.](img/cooking-headings4.gif)

You can then check that the correct heading is applied by opening the Tags panel, as shown in the following screenshot.

![Figure 5 PDF document opened in Adobe Acrobat. The Tags panel confirms the correct heading tags.](img/cooking-headings5.gif)

This example is shown in operation in the [working example of adding tagged headings (Word file)](../../working-examples/pdf-headings/cooking.docx) and [working example of adding tagged headings (PDF file)](../../working-examples/pdf-headings/cooking.pdf).

### Example 2: Creating documents in Microsoft Word that have correctly tagged headings when converted to PDF

This example is shown with Microsoft Word. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

Use Styles to create heading formats: Heading 1, Heading 2, Heading 3, etc. Make styles progress in a logical manner; e.g., a Heading 2 should come after a Heading 1.

#### In Microsoft Word 2003

-   Select the "Format &gt; Styles and Formatting" menu item to reveal the styles and formatting task pane.
-   Use the Heading 1 to Heading 6 styles provided in the "Styles and Formatting" panel.

![Figure 6 Selecting heading styles in Word 2003.](img/word2003.gif)

#### In Microsoft Word 2007/2010

Select the Home Ribbon in Word 2007/2010 and select the appropriate heading (Heading 1 to Heading 6) from the Styles group.

![Figure 7 Selecting heading styles in Word 2007/2010.](img/word2007.gif)

### Example 3: Creating documents in OpenOffice.org Writer 2.2 that have correctly tagged headings when converted to PDF

This example is shown with OpenOffice.org Writer. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

Use Styles to create heading formats: Heading 1, Heading 2, Heading 3, etc. Make styles progress in a logical manner; e.g., a Heading 2 should come after a Heading 1.

Export to PDF as follows:

1.  From the File menu, select Export as PDF...
2.  The first time you export as PDF, an Options Dialog appears.
3.  Select Tagged PDF, then select Export.

Selecting heading styles and exporting to PDF in OpenOffice.org Writer.

### Example 4: Marking up headings using /H*n* elements

Headings within PDF documents can be marked up using /H*n* elements in the structure tree, where *n* is numeral 1 through 6 (for example /H1, /H2, etc.).

The following code fragment illustrates code that is typical for using the /H*n* elements to mark content. Note that /H1 has been role-mapped to /Head1 in this example. This is typically accomplished by an authoring tool.

    0 obj% Document catalog
      << /Type /Catalog
         /Pages 100 0 R                  % Page tree
         /StructTreeRoot 300 0 R         % Structure tree root
      >>
    endobj
     ...
    300 0 obj% Structure tree root
      << /Type /StructTreeRoot
         /K [ 301 0 R                    % Two children: a chapter
            304 0 R                      % and a paragraph
            ]
         /RoleMap << /Chap /Sect         % Mapping to standard structure types
                     /Head1 /H
                     /Para /P
                  >>
        /ClassMap << /Normal 305 0 R >>  % Class map containing one attribute class
        /ParentTree 400 0 R              % Number tree for parent elements
        /ParentTreeNextKey 2             % Next key to use in parent tree
        /IDTree 403 0 R                  % Name tree for element identifiers
      >>
    endobj
    301 0 obj                            % Structure element for a chapter
      << /Type /StructElem
         /S /Chap
         /ID (Chap1)                     % Element identifier
         /T (Chapter 1)                  % Human-readable title
         /P 300 0 R                      % Parent is the structure tree root
         /K [ 302 0 R                    % Two children: a section head
              303 0 R                    % and a paragraph
            ]
      >>
    endobj
    302 0 obj                            % Structure element for a section head
      << /Type /StructElem
         /S /Head1
         /ID (Sec1.1)                    % Element identifier
         /T (Section 1.1)                % Human-readable title
         /P 301 0 R                      % Parent is the chapter
         /Pg 101 1 R                     % Page containing content items
         /A << /O /Layout                % Attribute owned by Layout
               /SpaceAfter 25
               /SpaceBefore 0
               /TextIndent 12.5
            >>
        /K 0                             % Marked-content sequence 0
      >>
    endobj
    ...

Within marked content containers, headings can be marked up using /Head*n* elements as follows for a first-level heading in a PDF document:

    BT             % Start of text object
      /Head1 <</MCID 0 >>       % Start of marked-content sequence
         BDC
            ...
            (This is a first level heading. Hello world: ) Tj
            ...
         EMC            % End of marked-content sequence
         ...
    ET              % End of text object

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 14.8.4.3.2 (Paragraphlike Elements) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [PDF Accessibility Documentation:headings](https://accessdp.wordpress.com/fixing-pdfs-for-accessibility/headings/)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [G141: Organizing a page using headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G141)

Tests
-----

### Procedure

1.  For all PDF content that is divided into separate sections, use one of the following to verify that headings are tagged correctly:

    -   Read the PDF document with a screen reader, listening to hear that the list of headings is announced correctly.
    -   Using a PDF editor, make sure the headings are tagged correctly.
    -   Use a tool that is capable of showing the /Head*n* entries to open the PDF document and verify that headings are tagged correctly.
    -   Use a tool that exposes the document through the accessibility API and verify that the headings are tagged correctly.

### Expected Results

-   \#1 is true.
