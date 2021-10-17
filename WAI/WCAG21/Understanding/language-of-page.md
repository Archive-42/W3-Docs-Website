-   [Contents](. "Table of Contents")
-   [GL: Readable](readable)
-   [Previous SC: Concurrent Input Mechanisms](concurrent-input-mechanisms)
-   [Next SC: Language of Parts](language-of-parts)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Test Rules](#test-rules)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.1.1: Language of Page
=======================================================

> Success Criterion [3.1.1 Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page) (Level A): The default [human language](#dfn-human-language) of each [Web page](#dfn-web-page) can be [programmatically determined](#dfn-programmatically-determined).

Intent
------

The intent of this Success Criterion is to ensure that content developers provide information in the Web page that user agents need to present text and other linguistic content correctly. Both assistive technologies and conventional user agents can render text more accurately when the language of the Web page is identified. Screen readers can load the correct pronunciation rules. Visual browsers can display characters and scripts correctly. Media players can show captions correctly. As a result, users with disabilities will be better able to understand the content.

The default human language of the Web page is the default text-processing language as discussed in [Internationalization Best Practices: Specifying Language in XHTML & HTML Content](https://www.w3.org/TR/i18n-html-tech-lang/). When a Web page uses several languages, the default text-processing language is the language which is used most. (If several languages are used equally, the first language used should be chosen as the default human language.)

Note

For multilingual sites targeting Conformance Level A, the Working Group strongly encourages developers to follow Success Criterion 3.1.2 as well even though that is a Level AA Success Criterion.

Benefits
--------

This Success Criterion helps:

-   people who use screen readers or other technologies that convert text into synthetic speech;
-   people who find it difficult to read written material with fluency and accuracy, such as recognizing characters and alphabets or decoding words;
-   people with certain cognitive, language and learning disabilities who use text-to-speech software
-   people who rely on captions for synchronized media.

Examples
--------

-   **Example 1. A Web page with content in two languages**

    A Web page produced in Germany and written in HTML includes content in both German and English, but most of the content is in German. The default human language is identified as German (de) by the lang attribute on the html element.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Internationalization Best Practices: Specifying Language in XHTML & HTML Content](https://www.w3.org/TR/i18n-html-tech-lang/)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H57" class="html">H57: Using the language attribute on the HTML element</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF16" class="pdf">PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF19" class="pdf">PDF19: Specifying the language for a passage or phrase with the Lang entry in PDF documents</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/server-side-script/SVR5" class="server">SVR5: Specifying the default language in the HTTP header</a>

Test Rules
----------

The following are Test Rules for certain aspects of this Success Criterion. It is not necessary to use these particular Test Rules to check for conformance with WCAG, but they are defined and approved test methods. For information on using Test Rules, see [Understanding Test Rules for WCAG Success Criteria](understanding-act-rules.html).

-   [HTML page has lang attribute](/WAI/standards-guidelines/act/rules/html-page-lang-b5c3f8/)
-   [HTML page lang attribute has valid language tag](/WAI/standards-guidelines/act/rules/html-page-lang-valid-bf051a/)
-   [HTML page lang and xml:lang attributes have matching values](/WAI/standards-guidelines/act/rules/html-page-lang-xml-lang-match-5b7ae0/)

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

human language

language that is spoken, written or signed (through visual or tactile means) to communicate with humans

Note

See also [sign language](#dfn-sign-language).

programmatically determined

determined by software from author-supplied data provided in a way that different [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology), can extract and present this information to users in different modalities

Note

Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

Note

Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

sign language

a language using combinations of movements of the hands and arms, facial expressions, or body positions to convey meaning

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
