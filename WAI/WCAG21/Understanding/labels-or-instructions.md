-   [Contents](. "Table of Contents")
-   [GL: Input Assistance](input-assistance)
-   [Previous SC: Error Identification](error-identification)
-   [Next SC: Error Suggestion](error-suggestion)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.3.2: Labels or Instructions
=============================================================

> Success Criterion [3.3.2 Labels or Instructions](https://www.w3.org/TR/WCAG21/#labels-or-instructions) (Level A): [Labels](#dfn-label) or instructions are provided when content requires user input.

Intent
------

The intent of this Success Criterion is to have content authors present instructions or labels that identify the controls in a form so that users know what input data is expected. Instructions or labels may also specify data formats for fields especially if they are out of the customary formats or if there are specific rules for correct input. Content authors may also choose to make such instructions available to users only when the individual control has focus especially when instructions are long and verbose.

The intent of this Success Criterion is not to clutter the page with unnecessary information but to provide important cues and instructions that will benefit people with disabilities. Too much information or instruction can be just as harmful as too little. The goal is to make certain that enough information is provided for the user to accomplish the task without undue confusion or navigation.

This Success Criterion does not require that labels or instructions be correctly marked up, identified, or associated with their respective controls - this aspect is covered separately by [1.3.1: Info and Relationships](info-and-relationships). It is possible for content to pass this Success Criterion (providing relevant labels and instructions) while failing Success Criterion 1.3.1 (if the labels or instructions aren't correctly marked up, identified, or associated).

Further, this Success Criterion does not take into consideration whether or not alternative methods of providing an accessible name or description for form controls and inputs has been used - this aspect is covered separately by [4.1.2: Name, Role and Value](name-role-value). It is possible for controls and inputs to have an appropriate accessible name or description (e.g. using `aria-label="..."`) and therefore pass Success Criterion 4.1.2, but to still fail this Success Criterion (if the labels or instructions aren't presented to all users, not just those using assistive technologies).

While this Success Criterion requires that controls and inputs have labels, whether or not these labels are sufficiently clear or descriptive is covered separately by [2.4.6: Headings and Labels](headings-and-labels).

Benefits
--------

-   Providing clear and unambiguous labels and instructions (including examples of expected data formats) helps all users - but particularly those with cognitive, language, and learning disabilities - to enter information correctly.
-   Providing clear and unambiguous labels and instructions (including clear identification of required fields) can prevent users from making incomplete or incorrect form submissions, which prevents users from having to navigate once more through a page/form in order to fix submission errors.

Examples
--------

-   A field which requires the user to enter the two character abbreviation for a US state has a link next to it which will popup an alphabetized list of state names and the correct abbreviation.
-   A field for entering a date contains initial text which indicates the correct format for the date.
-   A field for entering a given name is clearly labeled with "Given Name" and the field for family name is labeled "Family Name" to avoid confusion over which name is requested.
-   A U.S. phone number separates the area code, exchange, and number into three fields. Parentheses surround the area code field, and a dash separates the exchange and number fields. While the punctuation provides visual clues to those familiar with the U.S. telephone number format, the punctuation is not sufficient to label the fields. The single "Phone number" label also cannot label all three fields. To address this, the three fields are grouped in a fieldset with the legend "Phone number". Visual labels for the fields (beyond the punctuation) cannot be provided in the design, so invisible labels are provided with the "title" attribute to each of the three fields. The value of this attribute for the three fields are, respectively, "Area Code", "Exchange", and "Number".
-   In a form which contains both required and optional fields, the required fields and/or the optional fields are clearly labeled as such.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G131" class="general">G131: Providing descriptive labels</a> **AND** one of the following:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1" class="aria">ARIA1: Using the aria-describedby property to provide a descriptive label for user interface controls</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9" class="aria">ARIA9: Using aria-labelledby to concatenate a label from several text nodes</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA17" class="aria">ARIA17: Using grouping roles to identify related form controls</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G89" class="general">G89: Providing expected data format and example</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G184" class="general">G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G162" class="general">G162: Positioning labels to maximize predictability of relationships</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G83" class="general">G83: Providing text descriptions to identify required fields that were not completed</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H90" class="html">H90: Indicating required form controls using label or legend</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF5" class="pdf">PDF5: Indicating required form controls in PDF forms</a>

2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H44" class="html">H44: Using label elements to associate text labels with form controls</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10" class="pdf">PDF10: Providing labels for interactive form controls in PDF documents</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL26" class="silverlight">SL26: Using LabeledBy to Associate Labels and Targets in Silverlight</a>
5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H71" class="html">H71: Providing a description for groups of form controls using fieldset and legend elements</a>
6.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL8" class="silverlight">SL8: Displaying HelpText in Silverlight User Interfaces</a>
7.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G167" class="general">G167: Using an adjacent button to label the purpose of a field</a>

Note

The techniques at the end of the above list should be considered "last resort" and only used when the other techniques cannot be applied to the page. The earlier techniques are preferred because they increase accessibility to a wider user group.

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G13" class="general">G13: Describing what will happen before a change to a form control that causes a change of context to occur is made</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL19" class="silverlight">SL19: Providing User Instructions With AutomationProperties.HelpText in Silverlight</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F82" class="failure">F82: Failure of Success Criterion 3.3.2 by visually formatting a set of phone number fields but not including a text label</a>

Key Terms
---------

ascii art

picture created by a spatial arrangement of characters or glyphs (typically from the 95 printable characters defined by ASCII)

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

human language

language that is spoken, written or signed (through visual or tactile means) to communicate with humans

Note

See also [sign language](#dfn-sign-language).

label

[text](#dfn-text) or other component with a [text alternative](#dfn-text-alternative) that is presented to a user to identify a component within Web [content](#dfn-content)

Note

A label is presented to all users whereas the [name](#dfn-name) may be hidden and only exposed by assistive technology. In many (but not all) cases the name and the label are the same.

Note

The term label is not limited to the label element in HTML.

name

text by which software can identify a component within Web content to the user

Note

The name may be hidden and only exposed by assistive technology, whereas a [label](#dfn-label) is presented to all users. In many (but not all) cases, the label and the name are the same.

Note

This is unrelated to the name attribute in HTML.

non-text content

any content that is not a sequence of characters that can be [programmatically determined](#dfn-programmatically-determined) or where the sequence is not expressing something in [human language](#dfn-human-language)

Note

This includes [ASCII Art](#dfn-ascii-art) (which is a pattern of characters), emoticons, leetspeak (which uses character substitution), and images representing text

presentation

rendering of the [content](#dfn-content) in a form to be perceived by users

programmatically determined

determined by software from author-supplied data provided in a way that different [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology), can extract and present this information to users in different modalities

Note

Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

Note

Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

sign language

a language using combinations of movements of the hands and arms, facial expressions, or body positions to convey meaning

structure

1.  The way the parts of a [Web page](#dfn-web-page) are organized in relation to each other; and
2.  The way a collection of [Web pages](#dfn-web-page) is organized

text

sequence of characters that can be [programmatically determined](#dfn-programmatically-determined), where the sequence is expressing something in [human language](#dfn-human-language)

text alternative

[Text](#dfn-text) that is programmatically associated with [non-text content](#dfn-non-text-content) or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content.

An image of a chart is described in text in the paragraph after the chart. The short text alternative for the chart indicates that a description follows.

Note

Refer to [Understanding Text Alternatives](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance) for more information.

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
