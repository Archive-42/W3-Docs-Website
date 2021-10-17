[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
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

> **[1.3.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-programmatic) Info and Relationships:** Information, <a href="#structuredef" class="termref">structure</a>, and <a href="#relationshipsdef" class="termref">relationships</a> conveyed through <a href="#presentationdef" class="termref">presentation</a> can be <a href="#programmaticallydetermineddef" class="termref">programmatically determined</a> or are available in text. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that information and relationships that are implied by visual or auditory formatting are preserved when the presentation format changes. For example, the presentation format changes when the content is read by a screen reader or when a user style sheet is substituted for the style sheet provided by the author.

Sighted users perceive structure and relationships through various visual cues — headings are often in a larger, bold font separated from paragraphs by blank lines; list items are preceded by a bullet and perhaps indented; paragraphs are separated by a blank line; items that share a common characteristic are organized into tabular rows and columns; form fields may be positioned as groups that share text labels; a different background color may be used to indicate that several items are related to each other; words that have special status are indicated by changing the font family and /or bolding, italicizing, or underlining them; items that share a common characteristic are organized into a table where the relationship of cells sharing the same row or column and the relationship of each cell to its row and/or column header are necessary for understanding; and so on. Having these structures and these relationships programmatically determined or available in text ensures that information important for comprehension will be perceivable to all.

Auditory cues may be used as well. For example, a chime might indicate the beginning of a new section; a change in voice pitch or speech rate may be used to emphasize important information or to indicate quoted text; etc.

When such relationships are perceivable to one set of users, those relationships can be made to be perceivable to all. One method of determining whether or not information has been properly provided to all users is to access the information serially in different modalities.

If links to glossary items are implemented using anchor elements (or the proper link element for the technology in use) and identified using a different font face, a screen reader user will hear that the item is a link when the glossary term is encountered even though they may not receive information about the change in font face. An on-line catalog may indicate prices using a larger font colored red. A screen reader or person who cannot perceive red, still has the information about the price as long as it is preceded by the currency symbol.

Some technologies do not provide a means to programmatically determine some types of information and relationships. In that case then there should be a text description of the information and relationships. For instance, "all required fields are marked with an asterisk (\*)". The text description should be near the information it is describing (when the page is linearized), such as in the parent element or in the adjacent element.

There may also be cases where it may be a judgment call as to whether the relationships should be programmatically determined or be presented in text. However, when technologies support programmatic relationships, it is strongly encouraged that information and relationships be programmatically determined rather than described in text.

*Note:* It is not required that color values be programmatically determined. The information conveyed by color cannot be adequately presented simply by exposing the value. Therefore, <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-without-color" class="gl-ref">Success Criterion 1.4.1</a> addresses the specific case of color, rather than Success Criterion 1.3.1.

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

-   [WebAIM: Semantic Structure](http://webaim.org/techniques/semanticstructure/)

-   [Heading Tags](http://accessibility.psu.edu/headingshtml/)

Techniques and Failures for Success Criterion 1.3.1 - Info and Relationships
----------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="content-structure-separation-programmatic-situation-20-head"></span> Situation A: The technology provides semantic structure to make information and relationships conveyed through presentation programmatically determinable:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA11" class="tech-ref">ARIA11: Using ARIA landmarks to identify regions of a page</a> (ARIA)

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA12" class="tech-ref">ARIA12: Using role=heading to identify headings</a> (ARIA)

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA13" class="tech-ref">ARIA13: Using aria-labelledby to name regions and landmarks</a> (ARIA)

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA16" class="tech-ref">ARIA16: Using aria-labelledby to provide a name for user interface controls</a> (ARIA)

5.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA17" class="tech-ref">ARIA17: Using grouping roles to identify related form controls</a> (ARIA)

6.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA20" class="tech-ref">ARIA20: Using the region role to identify a region of the page</a> (ARIA)

7.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G115" class="tech-ref">G115: Using semantic elements to mark up structure</a> **AND** <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H49" class="tech-ref">H49: Using semantic markup to mark emphasized or special text</a> (HTML)

8.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G117" class="tech-ref">G117: Using text to convey information that is conveyed by variations in presentation of text</a>

9.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G140" class="tech-ref">G140: Separating information and structure from presentation to enable different presentations</a>

10. Making information and relationships conveyed through presentation programmatically determinable using the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G138" class="tech-ref">G138: Using semantic markup whenever color cues are used</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H51" class="tech-ref">H51: Using table markup to present tabular information</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF6" class="tech-ref">PDF6: Using table elements for table markup in PDF Documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF20" class="tech-ref">PDF20: Using Adobe Acrobat Pro's Table Editor to repair mistagged tables</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H39" class="tech-ref">H39: Using caption elements to associate data table captions with data tables</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH31" class="tech-ref">FLASH31: Specifying caption text for a DataGrid</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H73" class="tech-ref">H73: Using the summary attribute of the table element to give an overview of data tables</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH23" class="tech-ref">FLASH23: Adding summary information to a DataGrid</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H63" class="tech-ref">H63: Using the scope attribute to associate header cells and data cells in data tables</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H43" class="tech-ref">H43: Using id and headers attributes to associate data cells with header cells in data tables</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH21" class="tech-ref">FLASH21: Using the DataGrid component to associate column headers with cells</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H44" class="tech-ref">H44: Using label elements to associate text labels with form controls</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H65" class="tech-ref">H65: Using the title attribute to identify form controls when the label element cannot be used</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF10" class="tech-ref">PDF10: Providing labels for interactive form controls in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF12" class="tech-ref">PDF12: Providing name, role, value information for form fields in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH32" class="tech-ref">FLASH32: Using auto labeling to associate text labels with form controls</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH29" class="tech-ref">FLASH29: Setting the label property for form components</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH25" class="tech-ref">FLASH25: Labeling a form control by setting its accessible name</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H71" class="tech-ref">H71: Providing a description for groups of form controls using fieldset and legend elements</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL20" class="tech-ref">SL20: Relying on Silverlight AutomationPeer Behavior to Set AutomationProperties.Name</a> (Silverlight)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL26" class="tech-ref">SL26: Using LabeledBy to Associate Labels and Targets in Silverlight</a> (Silverlight)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H85" class="tech-ref">H85: Using OPTGROUP to group OPTION elements inside a SELECT</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H48" class="tech-ref">H48: Using ol, ul and dl for lists or groups of links</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H42" class="tech-ref">H42: Using h1-h6 to identify headings</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF9" class="tech-ref">PDF9: Providing headings by marking content with heading tags in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR21" class="tech-ref">SCR21: Using functions of the Document Object Model (DOM) to add content to a page</a> (Scripting)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF11" class="tech-ref">PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF17" class="tech-ref">PDF17: Specifying consistent page numbering for PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF21" class="tech-ref">PDF21: Using List tags for lists in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H97" class="tech-ref">H97: Grouping related links using the nav element</a> (HTML)

#### <span id="content-structure-separation-programmatic-situation-21-head"></span> Situation B: The technology in use does NOT provide the semantic structure to make the information and relationships conveyed through presentation programmatically determinable:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G117" class="tech-ref">G117: Using text to convey information that is conveyed by variations in presentation of text</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH8" class="tech-ref">FLASH8: Adding a group name to the accessible name of a form control</a> (Flash)

3.  Making information and relationships conveyed through presentation programmatically determinable or available in text using the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/T1" class="tech-ref">T1: Using standard text formatting conventions for paragraphs</a> (Text)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/T2" class="tech-ref">T2: Using standard text formatting conventions for lists</a> (Text)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/T3" class="tech-ref">T3: Using standard text formatting conventions for headings</a> (Text)

### Additional Techniques (Advisory) for 1.3.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C22" class="tech-ref">C22: Using CSS to control visual presentation of text</a> (CSS)

-   Using CSS rather than tables for page layout (future link)

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G162" class="tech-ref">G162: Positioning labels to maximize predictability of relationships</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA1" class="tech-ref">ARIA1: Using the aria-describedby property to provide a descriptive label for user interface controls</a> (ARIA)

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA2" class="tech-ref">ARIA2: Identifying a required field with the aria-required property</a> (ARIA)

-   Providing labels for all form controls that do not have implicit labels (future link)

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G141" class="tech-ref">G141: Organizing a page using headings</a>

### Common Failures for SC 1.3.1

The following are common mistakes that are considered failures of Success Criterion 1.3.1 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F2" class="tech-ref">F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F33" class="tech-ref">F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F34" class="tech-ref">F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F42" class="tech-ref">F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F43" class="tech-ref">F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F46" class="tech-ref">F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F48" class="tech-ref">F48: Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F68" class="tech-ref">F68: Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F87" class="tech-ref">F87: Failure of Success Criterion 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the 'content' property in CSS</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F90" class="tech-ref">F90: Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F91" class="tech-ref">F91: Failure of Success Criterion 1.3.1 for not correctly marking up table headers</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F92" class="tech-ref">F92: Failure of Success Criterion 1.3.1 due to the use of role presentation on content which conveys semantic information</a>

Key Terms
---------

 <span id="presentationdef"></span> presentation  
rendering of the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contentdef" class="termref">content</a> in a form to be perceived by users

 <span id="programmaticallydetermineddef"></span> programmatically determined (programmatically determinable)  
determined by software from author-supplied data provided in a way that different <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#atdef" class="termref">assistive technologies</a>, can extract and present this information to users in different modalities

*Example 1:* Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

*Example 2:* Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

 <span id="relationshipsdef"></span> relationships  
meaningful associations between distinct pieces of content

 <span id="structuredef"></span> structure  
1.  The way the parts of a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#webpagedef" class="termref">Web page</a> are organized in relation to each other; and

2.  The way a collection of <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#webpagedef" class="termref">Web pages</a> is organized

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 1.3 \[Adaptable\]](content-structure-separation.html "Understanding Guideline  1.3 [Adaptable]")
-   [**Next:** SC 1.3.2 \[Meaningful Sequence\]](content-structure-separation-sequence.html "Understanding SC  1.3.2 [Meaningful Sequence]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
