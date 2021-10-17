-   [Contents](. "Table of Contents")
-   [GL: Navigable](navigable)
-   [Previous SC: Multiple Ways](multiple-ways)
-   [Next SC: Focus Visible](focus-visible)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.4.6: Headings and Labels
==========================================================

> Success Criterion [2.4.6 Headings and Labels](https://www.w3.org/TR/WCAG21/#headings-and-labels) (Level AA): Headings and [labels](#dfn-label) describe topic or purpose.

Intent
------

The intent of this Success Criterion is to help users understand what information is contained in Web pages and how that information is organized. When headings are clear and descriptive, users can find the information they seek more easily, and they can understand the relationships between different parts of the content more easily. Descriptive labels help users identify specific components within the content.

Labels and headings do not need to be lengthy. A word, or even a single character, may suffice if it provides an appropriate cue to finding and navigating content.

This Success Criterion does not require headings or labels. This Success Criterion requires that if headings or labels are provided, they be descriptive. This Success Criterion also does not require that content acting as a heading or label be correctly marked up or identified - this aspect is covered separately by [1.3.1: Info and Relationships](info-and-relationships). It is possible for content to pass this Success Criterion (providing descriptive content that acts as headings or labels) while failing Success Criterion 1.3.1 (if the headings or labels aren't correctly marked up/identified). Conversely, it is also possible for content to pass Success Criterion 1.3.1 (with headings or labels correctly marked up or identified), while failing this Success Criterion (if those headings or labels are not sufficiently clear or descriptive).

Further, in the case of labels, this Success Criterion does not take into consideration whether or not alternative methods of providing an accessible name for form controls and inputs has been used - this aspect is covered separately by [4.1.2: Name, Role and Value](name-role-value). It is possible for controls and inputs to have an appropriate accessible name (e.g. using `aria-label="..."`) and therefore pass Success Criterion 4.1.2, but to still fail this Success Criterion (if the label is not sufficiently clear or descriptive).

This success criteria does not require the use of labels; however, it does require that if labels are present, they must be sufficiently clear or descriptive. Please see [3.3.2: Labels or Instructions](labels-or-instructions) for more information on the use of labels.

Benefits
--------

-   Descriptive headings are especially helpful for users who have disabilities that make reading slow and for people with limited short-term memory. These people benefit when section titles make it possible to predict what each section contains.
-   Form input controls with labels that clearly describe the content that is expected to be entered helps users know how to successfully complete the form.
-   When headings and labels are also correctly marked up and identified in accordance with [1.3.1: Info and Relationships](info-and-relationships), this Success Criterion helps people who use screen readers by ensuring that labels and headings are meaningful when read out of context, for example, in an automatically generated list of headings/table of contents, or when jumping from heading to heading within a page.

Examples
--------

-   **A news site.**

    The home page of a news site lists the headlines for the top stories of the hour. Under each heading are the first 35 words of the story and a link to the full article. Each headline gives a clear idea of the article's subject.

-   **A guide on how to write well**

    A guide on writing contains the following section titles: How To Write Well, Cut Out Useless Words, Identify Unnecessary Words, etc. The section headings are clear and concise and the structure of the information is reflected in the structure of the headings.

-   **Consistent headings in different articles**

    A Web site contains papers from a conference. Submissions to the conference are required to have the following organization: Summary, Introduction, \[other sections unique to this article\], Conclusion, Author Biography, Glossary, and Bibliography. The title of each Web page clearly identifies the article it contains, creating a useful balance between the uniqueness of the articles and the consistency of the section headings.

-   **A form asking the name of the user**

    A form asks the name of the user. It consists of two input fields to ask for the first and last name. The first field is labeled "First name", the second is labeled "Last name"."

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/) A study showing that most users scan Web pages rather than reading them word by word.
-   [Applying Writing Guidelines to Web Pages](https://www.nngroup.com/articles/applying-writing-guidelines-web-pages/) A report on the effects of making Web sites concise, easy to scan, and objective.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G130" class="general">G130: Providing descriptive headings</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G131" class="general">G131: Providing descriptive labels</a>

Note

Headings and labels must be programmatically determined, per <a href="info-and-relationships" class="guideline">Success Criterion 1.3.1</a> .

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
