-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF10](PDF10)
-   [Next Technique: PDF12](PDF12)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Providing links and link text using the Link annotation and the /Link structure element in PDF documents
========================================================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

PDF documents that contain links

This technique relates to:

-   [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Sufficient when used with an unwritten technique)
-   [Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) (Sufficient when used with an unwritten technique)
-   [Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context) (Sufficient when used with [G91: Providing link text that describes the purpose of a link](../general/G91))
-   [Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only) (Sufficient when used with an unwritten technique)

Description
-----------

The purpose of this technique is to show how link text in PDF documents can be marked up to be recognizable by keyboard and assistive technology users. That is, the link information is programmatically available to user agents so that links are recognizable when presented in a different format. This is typically accomplished by using a tool for authoring PDF.

Links in PDF documents are represented by a Link tag and objects in its sub-tree, consisting of a link object reference (or Link annotation) and one or more text objects. The text object or objects inside the Link tag are used by assistive technologies to provide a name for the link.

The simplest way to provide links that comply with the WCAG success criteria is to create them when authoring the document, before conversion to PDF.

However, in some cases, it may not be possible to create the links using the original authoring tool. In these cases, Adobe Acrobat Pro can be used to create the link. But, because the tooltip created using the Link dialog in Adobe Acrobat Pro is not accessible to screen readers, be sure that the link text or the link context makes the purpose clear.

In all cases, link purpose should be made clear as described in the general techniques:

-   [G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence](https://www.w3.org/WAI/WCAG21/Techniques/general/G53)
-   [G91: Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG21/Techniques/general/G91)

Examples
--------

### Example 1: Creating a hyperlink in Microsoft Word 2007 before conversion to PDF

This example is shown with Microsoft Word. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

To create a hyperlink in Microsoft Word, first locate the item (e.g., web page) to link to. Then:

1.  Either

    -   Select Insert on the ribbon and select Hyperlink in the Links tools
    -   Or, use the CTRL+K keyboard shortcut

2.  On the Insert Hyperlink dialog, add the link destination and link text.
3.  Save the file as tagged PDF. (See the [](#pdf_notes).)

### Example 2: Creating a hyperlink in OpenOffice.org Writer 2.2 before conversion to PDF

This example is shown with OpenOffice.org Writer. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  On the Insert menu, select Hyperlink.
2.  In the Hyperlink dialog, insert the target URI in the Target field under Hyperlink Type.
3.  Insert the link text in the Text field under Further Settings. (You can also select the link text from the document text before bringing up the dialog. The Text field will be filled in with the selected text.)
4.  Save the file as tagged PDF. (See the [](#pdf_notes).)

### Example 3: Creating a hyperlink using the Create Link dialog in Adobe Acrobat 9 Pro

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

1.  Select the text that will become the link text.
2.  Access the context menu and select Create Link.

![Figure 1 Image of a PDF document with text selected to create a hyperlink. The context menu shows Create Link selected.](img/capelink1.jpg)

3. Follow the instructions in the Create Link dialog to specify the link appearance, as shown below.

![Figure 2 Image of a PDF document with the Create Link dialog open and link appearance options selected.](img/capelink2.jpg)

Then select Next and specify the URI. The image below shows the resulting hyperlink and tooltip.

![Figure 3 Image of a PDF document with a hyperlink created using the Create Link dialog, including the resulting tooltip on mouseover.](img/capelink3.jpg)

This example is shown in operation in the [working example of creating a hyperlink in PDF](../../working-examples/pdf-links/links.pdf).

### Example 4: Marking up link text using a /Link structure element

Link annotations in PDF documents are associated with a geometric region of a page rather than a particular object in a content stream. For this reason, link annotations alone are not useful for users with visual impairments, or to applications that must determine which content can be activated to invoke a hypertext link.

Tagged PDF /Link elements use PDF's logical structure to establish the association between content items and link annotations, providing functionality comparable to HTML hypertext links.

In HTML, the following example produces text containing a hypertext link:

    Here is some text <a href="https://www.w3.org/WAI/"> with a link </a> inside.

In PDF the page must be painted first and then a link annotation placed over the area where the object action will occur.

The following code fragment shows PDF equivalent to the HTML above; it uses link text displayed in blue and underlined. A second code fragment follows, indicating the associated logical structure hierarchy. This is typically accomplished by an authoring tool.

     /P <</MCID 0>>                                                %Marked Content Sequence 0 (paragraph)
      BDC                                                          %Begin marked content sequence
       BT                                                          %Begin text object
        /F1 11.04 Tf                                               %set text font and size
        1 0 0 1 72.024 709.54 Tm                                   %set text matrix
        0 g                                                        %set non stroking color to black
        0 G                                                        %set stroke color to black
       [(H)3(ere )-4(is s)10(o)5(m)-4(e)9( t)-3(e)9(xt)-3( )] TJ   %Show text preceding the link" Here is some text"
       ET                                                          %end text object
      EMC                                                          %end marked content sequence
     
     /Span <</MCID 1>>                                             %Marked Content Sequence 1 (underlined link text)
      BDC                                                          %Begin marked content sequence
       BT                                                          %Begin text object
        1 0 0 1 152.42 709.54 Tm                                   %set text matrix
        0 0 1 rg                                                   %set non-stroking color to blue
        0 0 1 RG                                                   %set stroke color to blue
        [(with a )-2(li)3(n)14(k)] TJ                              %Show link text " with a link"
       ET                                                          %end text object
        0 0 1 rg                                                   %set stroke color to blue
        152.42 707.62 45.984 0.72 re                               %rectangle operator - target area for the link
        f*                                                         %fill the path using the even-odd rule
      EMC                                                          %end marked content sequence
     
     /P <</MCID 2>>                                                %Marked Content Sequence 2 (paragraph)
      BDC                                                          %Begin marked content sequence
       BT                                                          %begin text object
        1 0 0 1 198.41 709.54 Tm                                   %set text matrix                                            
        0 g                                                        %set non stroking color to black
        0 G                                                        %set stroke color to black
        [( )] TJ                                                   %empty text string showing white space
       ET                                                          %end text object
       BT                                                          %begin text object
        1 0 0 1 200.93 709.54 Tm                                   %set text matrix
        [(in)5(sid)5(e.)] TJ                                       %show text following the link "inside."
       ET                                                          %end text
       BT                                                          %begin text object
        1 0 0 1 229.97 709.54 Tm                                   %set text matrix
        [( )] TJ                                                   %empty text string showing white space
       ET                                                          %end text object
      EMC                                                          %end marked content sequence 
      

The following code fragment is an excerpt from the logical structure that establishes the association between the content items and the link annotation:

     11 0 obj                                              %Object ID 11, generation   0, obj keyword
      <</K[1                                               %immediate child of the structure tree root
       <<
        /Obj 26 0 R                                        %reference to Object 26
        /Type/OBJR                                         %this object describes an indirect object reference
       >>]
        /P 12 0 R
        /Pg 17 0 R
        /S/Link
      >>
     endobj
     
     26 0 obj                                              %object ID 26 which is referenced by the OBJR in Object 11
      <</A 31 0 R
       /BS
       <</S/S
         /Type/Border
         /W 0
       >>
       /Border[0 0 0]                                      %a colorless border
       /H/I
       /Rect[150.128 694.558 200.551 720.0]                %the boundaries defining target area where link annotation is active
       /StructParent 1
       /Type/Annot                                         %Structure element is an annotation
       /Subtype/Link
      >>                                                   %It is a link annotation                                                 
     endobj     
     31 0 obj                                              %Object 31, gen 0, obj
      <</S/URI                                             %Object type is URI action
        /URI(https://www.w3.org/WAI)                        %The Uniform resource identifier to resolve
      >>   
     endobj

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 14.8.4.4.2 (Link Elements) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence](https://www.w3.org/WAI/WCAG21/Techniques/general/G53)
-   [G91: Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG21/Techniques/general/G91)
-   [PDF13: Providing replacement text using the /Alt entry for links in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF13)

Tests
-----

### Procedure

For each hyperlink, verify that the link is correctly tagged and the link text is properly exposed:

1.  Read the PDF document with a screen reader, listening to hear that the link is read correctly and that it describes the purpose of the link (i.e., its destination).
2.  Visually scan the tag tree to verify that the link is tagged correctly and the link text is exposed (for screen magnifier users and sighted users with cognitive disabilities).
3.  Use a tool that is capable of showing the /Link entry value to open the PDF document and view the hyperlink and link text.
4.  Use a tool that exposes the document through the accessibility API and verify that the link has the correct link text.
5.  Tab to each link and check that it can be followed to its target by pressing Enter.

### Expected Results

-   \#1 or \#2 or \#3 or \#4 is true.
-   \#5 is true.
