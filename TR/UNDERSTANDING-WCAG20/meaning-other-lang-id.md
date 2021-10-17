[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.1.1 \[Language of Page\]](meaning-doc-lang-id.html "Understanding SC  3.1.1 [Language of Page]")
-   [**Next:** SC 3.1.3 \[Unusual Words\]](meaning-idioms.html "Understanding SC  3.1.3 [Unusual Words]")

On this page:

-   [Intent](#meaning-other-lang-id-intent-head)
-   [Examples](#meaning-other-lang-id-examples-head)
-   [Related Resources](#meaning-other-lang-id-resources-head)
-   [Techniques & Failures](#meaning-other-lang-id-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="meaning-other-lang-id"></span> **Language of Parts**<span class="screenreader">:</span> Understanding SC 3.1.2
========================================================================================================================

> **[3.1.2](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#meaning-other-lang-id) Language of Parts:** The <a href="#human-langdef" class="termref">human language</a> of each passage or phrase in the content can be <a href="#programmaticallydetermineddef" class="termref">programmatically determined</a> except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. (Level AA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that user agents can correctly present content written in multiple languages. This makes it possible for user agents and assistive technologies to present content according to the presentation and pronunciation rules for that language. This applies to graphical browsers as well as screen readers, braille displays, and other voice browsers.

Both assistive technologies and conventional user agents can render text more accurately if the language of each passage of text is identified. Screen readers can use the pronunciation rules of the language of the text. Visual browsers can display characters and scripts in appropriate ways. This is especially important when switching between languages that read from left to right and languages that read from right to left, or when text is rendered in a language that uses a different alphabet. Users with disabilities who know all the languages used in the Web page will be better able to understand the content when each passage is rendered appropriately.

When no other language has been specified for a phrase or passage of text, its human language is the default human language of the Web page (see Success Criterion 3.1.1). So the human language of all content in single language documents can be programmatically determined.

Individual words or phrases in one language can become part of another language. For example, "rendezvous" is a French word that has been adopted in English, appears in English dictionaries, and is properly pronounced by English screen readers. Hence a passage of English text may contain the word "rendezvous" without specifying that its human language is French and still satisfy this Success Criterion. Frequently, when the human language of text appears to be changing for a single word, that word has become part of the language of the surrounding text. Because this is so common in some languages, single words should be considered part of the language of the surrounding text unless it is clear that a change in language was intended. If there is doubt whether a change in language is intended, consider whether the word would be pronounced the same (except for accent or intonation) in the language of the immediately surrounding text.

Most professions require frequent use of technical terms which may originate from a foreign language. Such terms are usually not translated to all languages. The universal nature of technical terms also facilitate communication between professionals.

Some common examples of technical terms include: Homo sapiens, Alpha Centauri, hertz, and habeas corpus.

Identifying changes in language is important for a number of reasons:

-   It allows braille translation software to follow changes in language, e.g., substitute control codes for accented characters, and insert control codes necessary to prevent erroneous creation of Grade 2 braille contractions.

-   Speech synthesizers that support multiple languages will be able to speak the text in the appropriate accent with proper pronunciation. If changes are not marked, the synthesizer will try its best to speak the words in the default language it works in. Thus, the French word for car, "voiture" would be pronounced "voyture" by a speech synthesizer that uses English as its default language.

-   Marking changes in language can benefit future developments in technology, for example users who are unable to translate between languages themselves will be able to use machines to translate unfamiliar languages.

-   Marking changes in language can also assist user agents in providing definitions using a dictionary.

### Specific Benefits of Success Criterion 3.1.2:

This Success Criterion helps:

-   people who use screen readers or other technologies that convert text into synthetic speech;

-   people who find it difficult to read written material with fluency and accuracy, such as recognizing characters and alphabets, decoding words, and understanding words and phrases;

-   people with certain cognitive, language and learning disabilities who use text-to-speech software;

-   people who rely on captions to recognize language changes in the soundtrack of synchronized media content.

Examples of Success Criterion 3.1.2
-----------------------------------

1.  **A German phrase in an English sentence.**

    In the sentence, "He maintained that the DDR (German Democratic Republic) was just a '<span lang="de" lang="de">Treppenwitz der Weltgeschichte</span>'," the German phrase '<span lang="de" lang="de">Treppenwitz der Weltgeschichte</span>' is marked as German. Depending on the markup language, English may either be marked as the language for the entire document except where specified, or marked at the paragraph level. When a screen reader encounters the German phrase, it changes pronunciation rules from English to German to pronounce the word correctly.

2.  **Alternative language links**

    An HTML Web page includes links to versions of the page in other languages (e.g., Deutsch, Français, Nederlands, Castellano, etc.). The text of each link is the name of the language, in that language. The language of each link is indicated via a `lang` attribute.

3.  **"Podcast" used in a French sentence.**

    Because "podcast" is part of the vernacular of the immediately surrounding text in the following excerpt, "<span lang="fr" lang="fr">À l'occasion de l'exposition "Energie éternelle. 1500 ans d'art indien", le Palais des Beaux-Arts de Bruxelles a lancé son premier podcast. Vous pouvez télécharger ce podcast au format M4A et MP3</span>," no indication of language change is required.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Language tags in HTML and XML](http://www.w3.org/International/articles/language-tags/Overview.en.php) - W3C Internationalization Working Group

-   [Internationalization Best Practices: Specifying Language in XHTML & HTML Content](http://www.w3.org/TR/i18n-html-tech-lang/)

Techniques and Failures for Success Criterion 3.1.2 - Language of Parts
-----------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H58" class="tech-ref">H58: Using language attributes to identify changes in the human language</a> (HTML)

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH13" class="tech-ref">FLASH13: Using HTML language attributes to specify language in Flash content</a> (Flash)

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF19" class="tech-ref">PDF19: Specifying the language for a passage or phrase with the Lang entry in PDF documents</a> (PDF)

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL4" class="tech-ref">SL4: Declaring Discrete Silverlight Objects to Specify Language Parts in the HTML DOM</a> (Silverlight)

### Additional Techniques (Advisory) for 3.1.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL27" class="tech-ref">SL27: Using Language/Culture Properties as Exposed by Silverlight Applications and Assistive Technologies</a> (Silverlight)

-   Making text that is not in the default human language of the Web page visually distinct (future link)

-   Giving the names of any languages used in foreign passages or phrases (future link)

-   Providing language markup on proper names to facilitate correct pronunciation by screen readers (future link)

### Common Failures for SC 3.1.2

The following are common mistakes that are considered failures of Success Criterion 3.1.2 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

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
-   [**Previous:** SC 3.1.1 \[Language of Page\]](meaning-doc-lang-id.html "Understanding SC  3.1.1 [Language of Page]")
-   [**Next:** SC 3.1.3 \[Unusual Words\]](meaning-idioms.html "Understanding SC  3.1.3 [Unusual Words]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
