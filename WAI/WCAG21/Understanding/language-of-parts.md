-   [Contents](. "Table of Contents")
-   [GL: Readable](readable)
-   [Previous SC: Language of Page](language-of-page)
-   [Next SC: Unusual Words](unusual-words)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.1.2: Language of Parts
========================================================

> Success Criterion [3.1.2 Language of Parts](https://www.w3.org/TR/WCAG21/#language-of-parts) (Level AA): The [human language](#dfn-human-language) of each passage or phrase in the content can be [programmatically determined](#dfn-programmatically-determined) except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.

Intent
------

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

Benefits
--------

This Success Criterion helps:

-   people who use screen readers or other technologies that convert text into synthetic speech;
-   people who find it difficult to read written material with fluency and accuracy, such as recognizing characters and alphabets, decoding words, and understanding words and phrases;
-   people with certain cognitive, language and learning disabilities who use text-to-speech software;
-   people who rely on captions to recognize language changes in the soundtrack of synchronized media content.

Examples
--------

1.  **A German phrase in an English sentence.**

    In the sentence, "He maintained that the DDR (German Democratic Republic) was just a 'Treppenwitz der Weltgeschichte'," the German phrase 'Treppenwitz der Weltgeschichte' is marked as German. Depending on the markup language, English may either be marked as the language for the entire document except where specified, or marked at the paragraph level. When a screen reader encounters the German phrase, it changes pronunciation rules from English to German to pronounce the word correctly.

2.  **Alternative language links**

    An HTML Web page includes links to versions of the page in other languages (e.g., Deutsch, Français, Nederlands, Castellano, etc.). The text of each link is the name of the language, in that language. The language of each link is indicated via a lang attribute.

3.  **"Podcast" used in a French sentence.**

    Because "podcast" is part of the vernacular of the immediately surrounding text in the following excerpt, "À l'occasion de l'exposition "Energie éternelle. 1500 ans d'art indien", le Palais des Beaux-Arts de Bruxelles a lancé son premier podcast. Vous pouvez télécharger ce podcast au format M4A et MP3," no indication of language change is required.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/Overview.en.php) - W3C Internationalization Working Group
-   [Internationalization Best Practices: Specifying Language in XHTML & HTML Content](https://www.w3.org/TR/i18n-html-tech-lang/)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H58" class="html">H58: Using language attributes to identify changes in the human language</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF19" class="pdf">PDF19: Specifying the language for a passage or phrase with the Lang entry in PDF documents</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL4" class="silverlight">SL4: Declaring Discrete Silverlight Objects to Specify Language Parts in the HTML DOM</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL27" class="silverlight">SL27: Using Language/Culture Properties as Exposed by Silverlight Applications and Assistive Technologies</a>

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
