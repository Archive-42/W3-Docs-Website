-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: PDF7](PDF7)
-   [Next Technique: PDF9](PDF9)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Providing definitions for abbreviations via an E entry for a structure element
==============================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Tagged PDF documents containing abbreviations or acronyms

This technique relates to [Success Criterion 3.1.4: Abbreviations](https://www.w3.org/WAI/WCAG21/Understanding/abbreviations) (Sufficient when used with [G102: Providing the expansion or explanation of an abbreviation](../general/G102)).

Description
-----------

The objective of this technique is to provide an expansion or definition of an abbreviation for the first occurrence of the abbreviation. For example, a reference to an abbreviation, such as "WCAG," should be available as "Web Content Accessibility Guidelines (WCAG)" on its first occurrence in a document.

This is done by setting expansion text using an /E entry for a structure element, and is normally accomplished using a tool for authoring PDF. A Span structure element is typically used to tag the abbreviation, but the /E entry is valid with any structure element.

This technique is applicable for any abbreviation, including acronyms and initialisms. Note that on the first occurrence of the abbreviation, both the abbreviation and the expansion text must be provided. This will aid recognition of later use of the abbreviation.

PDF documents may be enhanced by providing expansions for abbreviations. In fact, such expansions are required for accessibility to ensure understanding by people who have difficulty decoding words; rely on screen magnification (which may obscure context); have limited memory; or who have difficulty using context to aid understanding.

Examples
--------

### Example 1: Adding an /E entry to an abbreviation using Adobe Acrobat 9 Pro's Tags panel

This example is shown with Adobe Acrobat Pro. There are other software tools that perform similar functions. See the list of other software tools in [](#pdf_notes_acc-sup_files_applications).

In a tagged PDF document:

1.  Select the Tags panel, using Views &gt; Navigation Panes &gt; Tags
2.  Select the first instance of the abbreviated text that needs to be expanded. If the selected text is part of a larger tag, access the Tags panel options menu, select Create Tag from Selection, and create a new Span tag. In this example, the text "WCAG2" (within the LBody tag) has been enclosed in a Span tag.
3.  In the Tags panel, access the context menu for the spanned text and select Properties... to open the TouchUp Properties dialog for the Span tag.
4.  On the Content tab of the TouchUp Properties dialog, enter the expansion text, followed by the originally selected text.

The following image illustrates this technique:

![Figure 1 The addition of expansion text to an abbreviation using the Tags panel. The text 'WCAG2.0' has been selected and a Span tag created for it. The expansion text 'Web Content Accessibility Guidelines (WCAG) 2.0' is entered as the expansion of 'WCAG2.0' using the TouchUp Properties dialog](img/abbr.jpg)

This example is shown in operation in the [working example of Providing definitions for Abbreviations (Word document)](../../working-examples/pdf-abbreviation-definitions/headers-definitions.docx), [working example of Providing definitions for Abbreviations (OpenOffice document)](../../working-examples/headers-definitions.odt), and [working example of Providing definitions for Abbreviations (PDF document)](../../working-examples/pdf-abbreviation-definitions/headers-definitions.pdf).

### Example 2: Using a /Span structure element with an /E entry to define an abbreviation

The following code fragment illustrates code that is typical for using the /Span structure element to define an abbreviation.

This example uses the sentence "Sugar is commonly sold in 5 lb bags." The abbreviation "lb" is tagged as a /Span structure element with an /E entry (typically accomplished by an authoring tool).

     1 0 obj                                  % structure element
       << /Type /StructElemen
                /S /Span                      % element type
                /P ...                        % Parent in structure hierarchy
                /K << /Type /MCR
                            /Page 2 0 R       % Page containing marked-content sequence
                            /MCID 0           % Marked content identifier for "lb"
                   >>
                /E  (pound, lb)
        >>
     endobj

### Example 3: Using a /TH structure element with an /E entry to define an abbreviation

As noted in the Description, the /E entry is valid with any structure element.

The following code fragment illustrates code that is typical for using an /E entry to define an abbreviation.

A table that contains columns for each month uses abbreviations as the values of column headers. The expansion for each abbreviation is provided as the /E entry of the /TH structure element (typically accomplished by an authoring tool).

     1 0 obj                                  % structure element
       << /Type /StructElemen
                /S /TH                        % element type
                /P ...                        % Parent in structure hierarchy
                /K << /Type /MCR
                            /Page 2 0 R       % Page containing marked-content sequence
                            /MCID 0           % Marked content identifier for "Dec"
                   >>
                /E  (December, Dec)
        >>
     endobj

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Section 14.9.5 (Expansion of Abbreviations and Acronyms) in [PDF 1.7 (ISO 32000-1)](http://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf)
-   [Microsoft Inspect.exe tool](https://msdn.microsoft.com/en-us/library/dd318521%28VS.85%29.aspx)
-   [PDF and Accessibility](http://www.adobe.com/accessibility/products/acrobat.html)

Related Techniques
------------------

-   [G102: Providing the expansion or explanation of an abbreviation](https://www.w3.org/WAI/WCAG21/Techniques/general/G102)
-   [G55: Linking to definitions](https://www.w3.org/WAI/WCAG21/Techniques/general/G55)
-   [G62: Providing a glossary](https://www.w3.org/WAI/WCAG21/Techniques/general/G62)
-   [G70: Providing a function to search an online dictionary](https://www.w3.org/WAI/WCAG21/Techniques/general/G70)
-   [G97: Providing the first use of an abbreviation immediately before or after the expanded form](https://www.w3.org/WAI/WCAG21/Techniques/general/G97)

Tests
-----

### Procedure

1.  Verify that the first occurrence of abbreviations that require expansion text have /E entries on an enclosing tag by one of the following and that both the abbreviation and the expansion text are provided:

    -   In Windows, use Microsoft's Inspect.exe tool, or some other tool that allows inspection of the MSAA interface, to locate the text of the abbreviation in the document tree and ensure that the value of the abbreviation is in the expansion text.
    -   In a PDF editor, locate the tag for the text that is the abbreviation, and check that an expansion or definition is provided for each abbreviation in the Expansion Text field in the corresponding tag's properties.
    -   Read the PDF document with a screen reader, listening to hear that on the first occurrence, the abbreviation and expansion are read when the screen reader reads the content line-by-line.
    -   Use a tool that is capable of showing the /E entry value, such as aDesigner to open the PDF document and view the GUI summary to read the text expansions for abbreviations.
    -   Use a tool that exposes the document through the accessibility API and verify that the text expansion of the abbreviation is properly implemented.

### Expected Results

-   Check \#1 is true.
