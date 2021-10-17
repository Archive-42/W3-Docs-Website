-   [Contents](. "Table of Contents")
-   [GL: Adaptable](adaptable)
-   [Previous SC: Audio-only (Live)](audio-only-live)
-   [Next SC: Meaningful Sequence](meaningful-sequence)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.3.1: Info and Relationships
=============================================================

> Success Criterion [1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships) (Level A): Information, [structure](#dfn-structure), and [relationships](#dfn-relationships) conveyed through [presentation](#dfn-presentation) can be [programmatically determined](#dfn-programmatically-determined) or are available in text.

Intent
------

The intent of this Success Criterion is to ensure that information and relationships that are implied by visual or auditory formatting are preserved when the presentation format changes. For example, the presentation format changes when the content is read by a screen reader or when a user style sheet is substituted for the style sheet provided by the author.

Sighted users perceive structure and relationships through various visual cues — headings are often in a larger, bold font separated from paragraphs by blank lines; list items are preceded by a bullet and perhaps indented; paragraphs are separated by a blank line; items that share a common characteristic are organized into tabular rows and columns; form fields may be positioned as groups that share text labels; a different background color may be used to indicate that several items are related to each other; words that have special status are indicated by changing the font family and /or bolding, italicizing, or underlining them; items that share a common characteristic are organized into a table where the relationship of cells sharing the same row or column and the relationship of each cell to its row and/or column header are necessary for understanding; and so on. Having these structures and these relationships programmatically determined or available in text ensures that information important for comprehension will be perceivable to all.

Auditory cues may be used as well. For example, a chime might indicate the beginning of a new section; a change in voice pitch or speech rate may be used to emphasize important information or to indicate quoted text; etc.

When such relationships are perceivable to one set of users, those relationships can be made to be perceivable to all. One method of determining whether or not information has been properly provided to all users is to access the information serially in different modalities.

If links to glossary items are implemented using anchor elements (or the proper link element for the technology in use) and identified using a different font face, a screen reader user will hear that the item is a link when the glossary term is encountered even though they may not receive information about the change in font face. An on-line catalog may indicate prices using a larger font colored red. A screen reader or person who cannot perceive red, still has the information about the price as long as it is preceded by the currency symbol.

Some technologies do not provide a means to programmatically determine some types of information and relationships. In that case then there should be a text description of the information and relationships. For instance, "all required fields are marked with an asterisk (\*)". The text description should be near the information it is describing (when the page is linearized), such as in the parent element or in the adjacent element.

There may also be cases where it may be a judgment call as to whether the relationships should be programmatically determined or be presented in text. However, when technologies support programmatic relationships, it is strongly encouraged that information and relationships be programmatically determined rather than described in text.

Note

It is not required that color values be programmatically determined. The information conveyed by color cannot be adequately presented simply by exposing the value. Therefore, <a href="use-of-color" class="guideline">Success Criterion 1.4.1</a> addresses the specific case of color, rather than Success Criterion 1.3.1.

Benefits
--------

-   This Success Criterion helps people with different disabilities by allowing user agents to adapt content according to the needs of individual users.
-   Users who are blind (using a screen reader) benefit when information conveyed through color is also available in text (including text alternatives for images that use color to convey information).
-   Users who are deaf-blind using braille (text) refreshable displays may be unable to access color-dependent information.

Examples
--------

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

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### Situation A: The technology provides semantic structure to make information and relationships conveyed through presentation programmatically determinable:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11" class="aria">ARIA11: Using ARIA landmarks to identify regions of a page</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA12" class="aria">ARIA12: Using role=heading to identify headings</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA13" class="aria">ARIA13: Using aria-labelledby to name regions and landmarks</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16" class="aria">ARIA16: Using aria-labelledby to provide a name for user interface controls</a>
5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA17" class="aria">ARIA17: Using grouping roles to identify related form controls</a>
6.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA20" class="aria">ARIA20: Using the region role to identify a region of the page</a>
7.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G115" class="general">G115: Using semantic elements to mark up structure</a> **AND** <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H49" class="html">H49: Using semantic markup to mark emphasized or special text</a>
8.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G117" class="general">G117: Using text to convey information that is conveyed by variations in presentation of text</a>
9.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G140" class="general">G140: Separating information and structure from presentation to enable different presentations</a>
10. <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24" class="aria">ARIA24: Semantically identifying a font icon with role="img"</a>
11. Making information and relationships conveyed through presentation programmatically determinable using the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G138" class="general">G138: Using semantic markup whenever color cues are used</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H51" class="html">H51: Using table markup to present tabular information</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF6" class="pdf">PDF6: Using table elements for table markup in PDF Documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF20" class="pdf">PDF20: Using Adobe Acrobat Pro's Table Editor to repair mistagged tables</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H39" class="html">H39: Using caption elements to associate data table captions with data tables</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H73" class="html">H73: Using the summary attribute of the table element to give an overview of data tables</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H63" class="html">H63: Using the scope attribute to associate header cells and data cells in data tables</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H43" class="html">H43: Using id and headers attributes to associate data cells with header cells in data tables</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H44" class="html">H44: Using label elements to associate text labels with form controls</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H65" class="html">H65: Using the title attribute to identify form controls when the label element cannot be used</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10" class="pdf">PDF10: Providing labels for interactive form controls in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF12" class="pdf">PDF12: Providing name, role, value information for form fields in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H71" class="html">H71: Providing a description for groups of form controls using fieldset and legend elements</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL20" class="silverlight">SL20: Relying on Silverlight AutomationPeer Behavior to Set AutomationProperties.Name</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL26" class="silverlight">SL26: Using LabeledBy to Associate Labels and Targets in Silverlight</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H85" class="html">H85: Using OPTGROUP to group OPTION elements inside a SELECT</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H48" class="html">H48: Using ol, ul and dl for lists or groups of links</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H42" class="html">H42: Using h1-h6 to identify headings</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF9" class="pdf">PDF9: Providing headings by marking content with heading tags in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR21" class="script">SCR21: Using functions of the Document Object Model (DOM) to add content to a page</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11" class="pdf">PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF17" class="pdf">PDF17: Specifying consistent page numbering for PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF21" class="pdf">PDF21: Using List tags for lists in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H97" class="html">H97: Grouping related links using the nav element</a>

#### Situation B: The technology in use does NOT provide the semantic structure to make the information and relationships conveyed through presentation programmatically determinable:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G117" class="general">G117: Using text to convey information that is conveyed by variations in presentation of text</a>
2.  Making information and relationships conveyed through presentation programmatically determinable or available in text using the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/text/T1" class="text">T1: Using standard text formatting conventions for paragraphs</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/text/T2" class="text">T2: Using standard text formatting conventions for lists</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/text/T3" class="text">T3: Using standard text formatting conventions for headings</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C22" class="css">C22: Using CSS to control visual presentation of text</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G162" class="general">G162: Positioning labels to maximize predictability of relationships</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1" class="aria">ARIA1: Using the aria-describedby property to provide a descriptive label for user interface controls</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA2" class="aria">ARIA2: Identifying a required field with the aria-required property</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G141" class="general">G141: Organizing a page using headings</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F2" class="failure">F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F33" class="failure">F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F34" class="failure">F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F42" class="failure">F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F43" class="failure">F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F46" class="failure">F46: Failure of Success Criterion 1.3.1 due to using th elements, layout tables</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F48" class="failure">F48: Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F87" class="failure">F87: Failure of Success Criterion 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the 'content' property in CSS</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F90" class="failure">F90: Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F91" class="failure">F91: Failure of Success Criterion 1.3.1 for not correctly marking up table headers</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F92" class="failure">F92: Failure of Success Criterion 1.3.1 due to the use of role presentation on content which conveys semantic information</a>

Key Terms
---------

assistive technology

hardware and/or software that acts as a [user agent](#dfn-user-agent), or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

Note

functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

Note

Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

Note

The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

Assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;
-   screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;
-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;
-   speech recognition software, which may be used by people who have some physical disabilities;
-   alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);
-   alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

content

information and sensory experience to be communicated to the user by means of a [user agent](#dfn-user-agent), including code or markup that defines the content's [structure](#dfn-structure), [presentation](#dfn-presentation), and interactions

presentation

rendering of the [content](#dfn-content) in a form to be perceived by users

programmatically determined

determined by software from author-supplied data provided in a way that different [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology), can extract and present this information to users in different modalities

Note

Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

Note

Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

relationships

meaningful associations between distinct pieces of content

structure

1.  The way the parts of a [Web page](#dfn-web-page) are organized in relation to each other; and
2.  The way a collection of [Web pages](#dfn-web-page) is organized

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.

web page

a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a [user agent](#dfn-user-agent)

Note

Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

Note

For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

A Web resource including all embedded images and media.

A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

A customizable portal site, where users can choose content to display from a set of different content modules.

When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.
