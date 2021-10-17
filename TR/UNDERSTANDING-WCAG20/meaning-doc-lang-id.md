[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
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

> **[3.1.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#meaning-doc-lang-id) Language of Page:** The default <a href="#human-langdef" class="termref">human language</a> of each <a href="#webpagedef" class="termref">Web page</a> can be <a href="#programmaticallydetermineddef" class="termref">programmatically determined</a>. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that content developers provide information in the Web page that user agents need to present text and other linguistic content correctly. Both assistive technologies and conventional user agents can render text more accurately when the language of the Web page is identified. Screen readers can load the correct pronunciation rules. Visual browsers can display characters and scripts correctly. Media players can show captions correctly. As a result, users with disabilities will be better able to understand the content.

The default human language of the Web page is the default text-processing language as discussed in [Internationalization Best Practices: Specifying Language in XHTML & HTML Content](http://www.w3.org/TR/i18n-html-tech-lang/). When a Web page uses several languages, the default text-processing language is the language which is used most. (If several languages are used equally, the first language used should be chosen as the default human language.)

*Note:* For multilingual sites targeting Conformance Level A, the Working Group strongly encourages developers to follow Success Criterion 3.1.2 as well even though that is a Level AA Success Criterion.

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

Techniques and Failures for Success Criterion 3.1.1 - Language of Page
----------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H57" class="tech-ref">H57: Using language attributes on the html element</a> (HTML)

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH13" class="tech-ref">FLASH13: Using HTML language attributes to specify language in Flash content</a> (Flash)

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF16" class="tech-ref">PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document</a> (PDF)

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF19" class="tech-ref">PDF19: Specifying the language for a passage or phrase with the Lang entry in PDF documents</a> (PDF)

### Additional Techniques (Advisory) for 3.1.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SVR5" class="tech-ref">SVR5: Specifying the default language in the HTTP header</a> (SERVER)

-   Using http or the Content-Language meta tag for metadata (future link)

### Common Failures for SC 3.1.1

The following are common mistakes that are considered failures of Success Criterion 3.1.1 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="webpagedef"></span> Web page  
a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agent</a>

*Note 1:* Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

*Note 2:* For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

*Example 1:* A Web resource including all embedded images and media.

*Example 2:* A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

*Example 3:* A customizable portal site, where users can choose content to display from a set of different content modules.

*Example 4:* When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.

 <span id="human-langdef"></span> human language  
language that is spoken, written or signed (through visual or tactile means) to communicate with humans

*Note:* See also <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#sign-languagedef" class="termref">sign language</a>.

 <span id="programmaticallydetermineddef"></span> programmatically determined (programmatically determinable)  
determined by software from author-supplied data provided in a way that different <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#atdef" class="termref">assistive technologies</a>, can extract and present this information to users in different modalities

*Example 1:* Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

*Example 2:* Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 3.1 \[Readable\]](meaning.html "Understanding Guideline  3.1 [Readable]")
-   [**Next:** SC 3.1.2 \[Language of Parts\]](meaning-other-lang-id.html "Understanding SC  3.1.2 [Language of Parts]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
