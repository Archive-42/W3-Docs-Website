[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.1.5 \[Reading Level\]](meaning-supplements.html "Understanding SC  3.1.5 [Reading Level]")
-   [**Next:** Guideline 3.2 \[Predictable\]](consistent-behavior.html "Understanding Guideline  3.2 [Predictable]")

On this page:

-   [Intent](#meaning-pronunciation-intent-head)
-   [Examples](#meaning-pronunciation-examples-head)
-   [Related Resources](#meaning-pronunciation-resources-head)
-   [Techniques & Failures](#meaning-pronunciation-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="meaning-pronunciation"></span> **Pronunciation**<span class="screenreader">:</span> Understanding SC 3.1.6
====================================================================================================================

> **[3.1.6](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#meaning-pronunciation) Pronunciation:** A <a href="#mechanismdef" class="termref">mechanism</a> is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation. (Level AAA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to help people who are blind, people who have low vision, and people with reading disabilities to understand content in cases where meaning depends on pronunciation. Often words or characters have different meanings, each with its own pronunciation. The meaning of such words or characters can usually be determined from the context of the sentence. However, for more complex or ambiguous sentences, or for some languages, the meaning of the word cannot be easily determined or determined at all without knowing the pronunciation. When the sentence is read aloud and the screen reader reads the word using the wrong pronunciation, it can be even more difficult to understand than when read visually. When words are ambiguous or indeterminate unless the pronunciation is known, then providing some means of determining the pronunciation is needed.

For example, in the English language heteronyms are words that are spelled the same but have different pronunciations and meanings, such as the words desert (abandon) and desert (arid region). If the proper pronunciation can be determined from the context of the sentence, then nothing is required. If it cannot then some mechanism for determining the proper pronunciation would be required. Additionally, in some languages certain characters can be pronounced in different ways. In Japanese, for example, there are characters like Han characters(Kanji) that have multiple pronunciations. Screen readers may speak the characters incorrectly without the information on pronunciation. When read incorrectly, the content will not make sense to users.

### Specific Benefits of Success Criterion 3.1.6:

This Success Criterion may help people who:

-   have difficulty decoding words

-   have difficulty using context to aid understanding

-   use technologies that read the words aloud

Examples of Success Criterion 3.1.6
-----------------------------------

-   **Giving the reading of a person's name.**

    Web content in Japanese provides kana (Japanese phonetic syllabary characters) written next to Han characters (Kanji) show the pronunciation of a person's name. The kana is provided to users in parentheses right after the word. Giving the reading of the words written in Han characters (Kanji) allows both sighted users and screen readers to read/pronounce the words correctly. Note that screen readers will speak the word twice: the Han characters (Kanji) that can be pronounced in a wrong way are read first and then kana is spoken in order to provide the correct reading.

-   **Showing the reading of the words by `ruby` element.**

    Web content using XHTML 1.1 provides kana (phonetic syllabary characters) written above the characters to show the reading (pronunciation) of the words by using the `ruby` element.

-   **Providing sound files of the pronunciation.**

    A document includes some words whose meaning cannot be determined without knowing the correct pronunciation. Each word is linked to a sound file that gives the correct pronunciation. Users can select these links to find out how to pronounce the words.

-   **Including pronunciation information in the glossary.**

    A Web page includes a glossary section. Some items in the glossary include pronunciation information as well as definitions. Words in the content whose meaning cannot be determined without knowing their pronunciation are linked to the appropriate entries in the glossary.

-   **Text that includes pronunciation information for characters shared by several languages but pronounced differently in each language**

    A Japanese university Web site includes several short phrases quoted from scholarly texts in Chinese and Korean. The quotations are written using the same script as the Japanese text. Pronunciation information is provided to show the correct reading of the Chinese and Korean characters.

Note: For Japanese, the `ruby` element is used for showing the "reading" rather than "pronunciation."

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 3.1.6 - Pronunciation
-------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G120: Providing the pronunciation immediately following the word](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G120)

2.  [G121: Linking to pronunciations](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G121)

3.  [G62: Providing a glossary](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G62) that includes pronunciation information for words that have a unique pronunciation in the content and have meaning that depends on pronunciation

4.  Providing pronunciation information using a technology-specific technique below

    -   [H62: Using the ruby element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H62) (HTML) (XHTML 1.1)

    -   [G163: Using standard diacritical marks that can be turned off](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G163)

### Additional Techniques (Advisory) for 3.1.6

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Providing pronunciations in a sound file, so that users can listen to the pronunciations of the word (future link)

-   Providing a mechanism for finding pronunciations for all foreign words in text content (future link)

-   Providing a mechanism to determine the pronunciations of each word or phrase in text content (future link)

### Common Failures for SC 3.1.6

The following are common mistakes that are considered failures of Success Criterion 3.1.6 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="mechanismdef"></span> mechanism  
<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#processdef" class="termref">process</a> or technique for achieving a result

Note 1: The mechanism may be explicitly provided in the content, or may be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#reliedupondef" class="termref">relied upon</a> to be provided by either the platform or by <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#atdef" class="termref">assistive technologies</a>.

Note 2: The mechanism needs to meet all success criteria for the conformance level claimed.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.1.5 \[Reading Level\]](meaning-supplements.html "Understanding SC  3.1.5 [Reading Level]")
-   [**Next:** Guideline 3.2 \[Predictable\]](consistent-behavior.html "Understanding Guideline  3.2 [Predictable]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
