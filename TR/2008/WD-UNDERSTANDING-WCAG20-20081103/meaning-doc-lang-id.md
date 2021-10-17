[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 3.1 \[Readable\]](meaning.html "Understanding Guideline  3.1 [Readable]")
-   [**Next:** SC 3.1.2 \[Language of Parts\]](meaning-other-lang-id.html "Understanding SC  3.1.2 [Language of Parts]")

On this page:

-   [Intent](#meaning-doc-lang-id-intent-head)
-   [Examples](#meaning-doc-lang-id-examples-head)
-   [Related Resources](#meaning-doc-lang-id-resources-head)
-   [Techniques & Failures](#meaning-doc-lang-id-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="meaning-doc-lang-id"></span> **Language of Page**<span class="screenreader">:</span> Understanding SC 3.1.1
=====================================================================================================================

> **[3.1.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#meaning-doc-lang-id) Language of Page:** The default <a href="#human-langdef" class="termref">human language</a> of each <a href="#webpagedef" class="termref">Web page</a> can be <a href="#programmaticallydetermineddef" class="termref">programmatically determined</a>. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that content developers provide information in the Web page that user agents need to present text and other linguistic content correctly. Both assistive technologies and conventional user agents can render text more accurately when the language of the Web page is identified. Screen readers can load the correct pronunciation rules. Visual browsers can display characters and scripts correctly. Media players can show captions correctly. As a result, users with disabilities will be better able to understand the content.

The default human language of the Web page is the default text-processing language as discussed in [Internationalization Best Practices: Specifying Language in XHTML & HTML Content](http://www.w3.org/TR/i18n-html-tech-lang/). When a Web page uses several languages, the default text-processing language is the language which is used most. (If several languages are used equally, the first language used should be chosen as the default human language.)

Note: For multilingual sites targeting Conformance Level A, the Working Group strongly encourages developers to follow Success Criterion 3.1.2 as well even though that is a Level AA Success Criterion.

### Specific Benefits of Success Criterion 3.1.1:

This Success Criterion helps:

-   people who use screen readers or other technologies that convert text into synthetic speech;

-   people who find it difficult to read written material with fluency and accuracy, such as recognizing characters and alphabets or decoding words;

-   people with certain cognitive, language and learning disabilities who use text-to-speech software

-   people who rely on captions for synchronized media.

Examples of Success Criterion 3.1.1
-----------------------------------

-   **Example 1. A Web page with content in two languages**

    A Web page produced in Germany and written in HTML includes content in both German and English, but most of the content is in German. The default human language is identified as German (de) by the lang attribute on the html element.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Internationalization Best Practices: Specifying Language in XHTML & HTML Content](http://www.w3.org/TR/i18n-html-tech-lang/)

-   [d140 Learning to read](http://www.who.int/classifications/icf/site/onlinebrowser/icf.cfm?parentlevel=3&childlevel=4&itemslevel=4&ourdimension=d&ourchapter=1&ourblock=2&our2nd=40&our3rd=0&our4th=0). 2001. International Classification of Functioning, Disabilities, and Health. World Health Organization

Techniques and Failures for Success Criterion 3.1.1 - Language of Page
----------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  Identifying default human language(s) using one of the following techniques:

    -   [H57: Using language attributes on the html element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H57) (HTML)

### Additional Techniques (Advisory) for 3.1.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Specifying the default language in the HTTP header (future link)

-   using http or the Content-Language meta tag for metadata (future link)

### Common Failures for SC 3.1.1

The following are common mistakes that are considered failures of Success Criterion 3.1.1 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="human-langdef"></span> human language  
language that is spoken, written or signed (through visual or tactile means) to communicate with humans

Note: See also <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#sign-languagedef" class="termref">sign language</a>.

 <span id="programmaticallydetermineddef"></span> programmatically determined (programmatically determinable)  
determined by software from author-supplied data provided in a way that different <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#atdef" class="termref">assistive technologies</a>, can extract and present this information to users in different modalities

Example 1: Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

Example 2: Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

 <span id="webpagedef"></span> Web page  
a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#useragentdef" class="termref">user agent</a>

Note 1: Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

Note 2: For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

Example 1: A Web resource including all embedded images and media.

Example 2: A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

Example 3: A customizable portal site, where users can choose content to display from a set of different content modules.

Example 4: When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 3.1 \[Readable\]](meaning.html "Understanding Guideline  3.1 [Readable]")
-   [**Next:** SC 3.1.2 \[Language of Parts\]](meaning-other-lang-id.html "Understanding SC  3.1.2 [Language of Parts]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
