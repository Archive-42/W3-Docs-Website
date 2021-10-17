[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 1.3 \[Adaptable\]](content-structure-separation.html "Understanding Guideline  1.3 [Adaptable]")
-   [**Next:** SC 1.3.2 \[Meaningful Sequence\]](content-structure-separation-sequence.html "Understanding SC  1.3.2 [Meaningful Sequence]")

On this page:

-   [Intent](#content-structure-separation-programmatic-intent-head)
-   [Examples](#content-structure-separation-programmatic-examples-head)
-   [Related Resources](#content-structure-separation-programmatic-resources-head)
-   [Techniques & Failures](#content-structure-separation-programmatic-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="content-structure-separation-programmatic"></span> **Info and Relationships**<span class="screenreader">:</span> Understanding SC 1.3.1
=================================================================================================================================================

> **[1.3.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#content-structure-separation-programmatic) Info and Relationships:** Information, <a href="#structuredef" class="termref">structure</a>, and <a href="#relationshipsdef" class="termref">relationships</a> conveyed through <a href="#presentationdef" class="termref">presentation</a> can be <a href="#programmaticallydetermineddef" class="termref">programmatically determined</a> or are available in text. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that information and relationships that are implied by visual or auditory formatting are preserved when the presentation format changes. For example, the presentation format changes when the content is read by a screen reader or when a user style sheet is substituted for the style sheet provided by the author.

Sighted users perceive structure through various visual cues — headings are often in a larger, bold font separated from paragraphs by blank lines; list items are preceded by a bullet and perhaps indented; paragraphs are separated by a blank line; items that share a common characteristic are organized into tabular rows and columns; form fields may be positioned as groups that share text labels; a different background color may be used to indicate that several items are related to each other; words that have special status are indicated by changing the font family and /or bolding, italicizing, or underlining them and so on.

Auditory cues may be used as well. For example, a chime might indicate the beginning of a new section; a change in voice pitch or speech rate may be used to emphasize important information or to indicate quoted text; etc.

When such relationships are perceivable to one set of users, those relationships can be made to be perceivable to all. One method of determining whether or not information has been properly provided to all users is to access the information serially in different modalities.

If links to glossary items are implemented using anchor elements (or the proper link element for the technology in use) and identified using a different font face, a screen reader user will hear that the item is a link when the glossary term is encountered even though they may not receive information about the change in font face. An on-line catalog may indicate prices using a larger font colored red. A screen reader or person who cannot perceive red, still has the information about the price as long as it is preceded by the currency symbol.

Some technologies do not provide a means to programmatically determine some types of information and relationships. In that case then there should be a text description of the information and relationships. For instance, "all required fields are marked with an asterisk (\*)". The text description should be near the information it is describing (when the page is linearized), such as in the parent element or in the adjacent element.

There may also be cases where it may be a judgment call about what information should appear in text and what would need to be directly associated, and it may be most appropriate to duplicate some information (for instance, in an HTML table, providing the summary both in the paragraph before the table and in the summary attribute of the table itself). However, wherever possible it is necessary for the information to be programmatically determined rather than providing a text description before encountering the table.

Note: It is not required that color values be programmatically determined. The information conveyed by color cannot be adequately presented simply by exposing the value. Therefore, [Success Criterion 1.4.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast-without-color) addresses the specific case of color, rather than Success Criterion 1.3.1.

### Specific Benefits of Success Criterion 1.3.1:

-   This Success Criterion helps people with different disabilities by allowing user agents to adapt content according to the needs of individual users.

-   Users who are blind (using a screen reader) benefit when information conveyed through color is also available in text (including text alternatives for images that use color to convey information).

-   Users who are deaf-blind using braille (text) refreshable displays may be unable to access color-dependent information.

Examples of Success Criterion 1.3.1
-----------------------------------

-   **A form with required fields**

    A form contains several required fields. The labels for the required fields are displayed in red. In addition, at the end of each label is an asterisk character, \*. The instructions for completing the form indicate that "all required fields are displayed in red and marked with an asterisk \*", followed by an example.

-   **A form that uses color and text to indicate required fields**

    A form contains both required and optional fields. Instructions at the top of the form explain that required fields are labeled with red text and also with an icon whose text alternative says, "Required." Both the red text and the icon are programmatically associated with the appropriate form fields so that assistive technology users can determine the required fields.

-   **A bus schedule table where the headers for each cell can be programmatically determined**

    A bus schedule consists of a table with the bus stops listed vertically in the first column and the different buses listed horizontally across the first row. Each cell contains the time when the bus will be at that bus stop. The bus stop and bus cells are identified as headers for their corresponding row or column so that assistive technology can programmatically determine which bus and which bus stop are associated with the time in each cell.

-   **A form where the labels for the checkboxes can be programmatically determined**

    In a form, the labels for each checkbox can be programmatically determined by assistive technology.

-   **A text document**

    A simple text document is formatted with double blank lines before titles, asterisks to indicate list items and other standard formatting conventions so that its structure can be programmatically determined.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Quick tips for accessible headings](http://www.rnib.org.uk/wacblog/headings/quick-tips-for-accessible-headings/)

Techniques and Failures for Success Criterion 1.3.1 - Info and Relationships
----------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="d0e2465"></span> Situation A: The technology provides semantic structure to make information and relationships conveyed through presentation programmatically determinable:

1.  [G115: Using semantic elements to mark up structure](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G115) **AND** [H49: Using semantic markup to mark emphasized or special text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H49) (HTML)

2.  [G117: Using text to convey information that is conveyed by variations in presentation of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G117)

3.  [G140: Separating information and structure from presentation to enable different presentations](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G140)

4.  Making information and relationships conveyed through presentation programmatically determinable using the following techniques:

    -   [G138: Using semantic markup whenever color cues are used](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G138)

    -   [H51: Using table markup to present tabular information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H51) (HTML)

    -   [H39: Using caption elements to associate data table captions with data tables](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H39) (HTML)

    -   [H73: Using the summary attribute of the table element to give an overview of data tables](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H73) (HTML)

    -   [H63: Using the scope attribute to associate header cells and data cells in data tables](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H63) (HTML)

    -   [H43: Using id and headers attributes to associate data cells with header cells in data tables](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H43) (HTML)

    -   [H44: Using label elements to associate text labels with form controls](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H44) (HTML)

    -   [H65: Using the title attribute to identify form controls when the label element cannot be used](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H65) (HTML)

    -   [H71: Providing a description for groups of form controls using fieldset and legend elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H71) (HTML)

    -   [H85: Using OPTGROUP to group OPTION elements inside a SELECT](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H85) (HTML)

    -   [H48: Using ol, ul and dl for lists](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H48) (HTML)

    -   [H42: Using h1-h6 to identify headings](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H42) (HTML)

    -   [SCR21: Using functions of the Document Object Model (DOM) to add content to a page](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR21) (Scripting)

#### <span id="d0e2577"></span> Situation B: The technology in use does NOT provide the semantic structure to make the information and relationships conveyed through presentation programmatically determinable:

1.  [G117: Using text to convey information that is conveyed by variations in presentation of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G117)

2.  Making information and relationships conveyed through presentation programmatically determinable or available in text using the following techniques:

    -   [T1: Using standard text formatting conventions for paragraphs](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/T1) (TXT)

    -   [T2: Using standard text formatting conventions for lists](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/T2) (TXT)

    -   [T3: Using standard text formatting conventions for headings](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/T3) (TXT)

### Additional Techniques (Advisory) for 1.3.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   [C22: Using CSS to control visual presentation of text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C22) (CSS)

-   Using CSS rather than tables for page layout (future link)

-   [G162: Positioning labels to maximize predictability of relationships](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G162)

-   [ARIA1: Using Accessible Rich Internet Application describedby property to provide a descriptive, programmatically determined label](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA1) (ARIA)

-   [ARIA4: Using Accessible Rich Internet Applications to programmatically identify form fields as required](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA4) (ARIA)

-   Providing labels for all form controls that do not have implicit labels (future link)

-   [G141: Organizing a page using headings](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G141)

### Common Failures for SC 1.3.1

The following are common mistakes that are considered failures of Success Criterion 1.3.1 by the WCAG Working Group.

-   [F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F2)

-   [F17: Failure of Success Criterion 1.3.1 and 4.1.1 due to insufficient information in DOM to determine one-to-one relationships (e.g., between labels with same id) in HTML](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F17)

-   [F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F33)

-   [F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F34)

-   [F42: Failure of Success Criterion 1.3.1 and 2.1.1 due to using scripting events to emulate links in a way that is not programmatically determinable](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F42)

-   [F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F43)

-   [F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F46)

-   [F48: Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F48)

-   [F62: Failure of Success Criterion 1.3.1 and 4.1.1 due to insufficient information in DOM to determine specific relationships in XML](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F62)

-   [F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F2)

-   [F68: Failure of Success Criterion 1.3.1 and 4.1.2 due to the association of label and user interface controls not being programmatically determinable](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F68)

-   [F87: Failure of 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the 'content' property in CSS](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F87)

Key Terms
---------

 <span id="presentationdef"></span> presentation  
rendering of the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#contentdef" class="termref">content</a> in a form to be perceived by users

 <span id="programmaticallydetermineddef"></span> programmatically determined (programmatically determinable)  
determined by software from author-supplied data provided in a way that different <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#atdef" class="termref">assistive technologies</a>, can extract and present this information to users in different modalities

Example 1: Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

Example 2: Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

 <span id="relationshipsdef"></span> relationships  
meaningful associations between distinct pieces of content

 <span id="structuredef"></span> structure  
1.  The way the parts of a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web page</a> are organized in relation to each other; and

2.  The way a collection of <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web pages</a> is organized

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 1.3 \[Adaptable\]](content-structure-separation.html "Understanding Guideline  1.3 [Adaptable]")
-   [**Next:** SC 1.3.2 \[Meaningful Sequence\]](content-structure-separation-sequence.html "Understanding SC  1.3.2 [Meaningful Sequence]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
