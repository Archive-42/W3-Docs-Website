[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.1.3 \[Unusual Words\]](meaning-idioms.html "Understanding SC  3.1.3 [Unusual Words]")
-   [**Next:** SC 3.1.5 \[Reading Level\]](meaning-supplements.html "Understanding SC  3.1.5 [Reading Level]")

On this page:

-   [Intent](#meaning-located-intent-head)
-   [Examples](#meaning-located-examples-head)
-   [Related Resources](#meaning-located-resources-head)
-   [Techniques & Failures](#meaning-located-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="meaning-located"></span> **Abbreviations**<span class="screenreader">:</span> Understanding SC 3.1.4
==============================================================================================================

> **[3.1.4](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#meaning-located) Abbreviations:** A <a href="#mechanismdef" class="termref">mechanism</a> for identifying the expanded form or meaning of <a href="#abbreviationsdef" class="termref">abbreviations</a> is available. (Level AAA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that users can access the expanded form of abbreviations.

### Specific Benefits of Success Criterion 3.1.4:

This Success Criterion may help people who:

-   have difficulty decoding words;

-   rely on screen magnifiers (magnification may reduce contextual cues);

-   have limited memory;

-   have difficulty using context to aid understanding.

Abbreviations may confuse some readers in different ways:

-   Some abbreviations do not look like normal words and cannot be pronounced according to the usual rules of the language. For example, the English word "room" is abbreviated as "rm," which does not correspond to any English word or phoneme. The user has to know that "rm" is an abbreviation for the word "room" in order to say it correctly.

-   Sometimes, the same abbreviation means different things in different contexts. For example, in the English sentence "Dr. Johnson lives on Boswell Dr.," the first "Dr." is an abbreviation for "Doctor" and the second instance is an abbreviation for the word "Drive" (a word that means "street"). Users must be able to understand the context in order to know what the abbreviations mean.

-   Some acronyms spell common words but are used in different ways. For example, "JAWS" is an acronym for a screen reader whose full name is "Job Access with Speech." It is also a common English word referring to the part of the mouth that holds the teeth. The acronym is used differently than the common word.

-   Some acronyms sound like common words but are spelled differently. For example, the acronym for Synchronized Multimedia Integration Language, S M I L, is pronounced like the English word "smile."

It would also help people with visual disabilities who:

-   Lose context when zoomed-in with a screen magnifier

Examples of Success Criterion 3.1.4
-----------------------------------

-   **An abbreviation whose expansion is provided the first time the abbreviation appears in the content.**

    The name, "World Wide Web Consortium," appears as the first heading on the organization's home page. The abbreviation, "W3C," is enclosed in parentheses in the same heading.

-   **A dictionary search form.**

    A Web site includes a search form provided by an on-line acronym service. Users enter an acronym and the form returns a list of possible expansions from the sources that it searched.

-   **A medical Web site.**

    A medical Web site provides information for both doctors and patients. The site includes a set of cascading dictionaries; a very specialized medical dictionary is first, followed by a second medical dictionary for the general public. The cascade also includes a list of acronyms and abbreviations that are unique to the site, and finally there is a standard dictionary as well. The standard dictionary at the end of the list provides definitions for most words in the text. The specialized medical dictionary yields definitions of unusual medical terms. Definitions for words that appear in more than one dictionary are listed in the order of the cascade. The meaning of acronyms and abbreviations is provided by the list of acronyms and abbreviations.

-   **Expanded forms of Abbreviations.**

    The expanded form of each abbreviation is available in a programmatically determinable manner. User agents that speak the text can use the expanded form to announce the abbreviation. Other user agents might make the expanded form available as a tooltip or as contextual help for the abbreviation.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Acronym finder](http://www.acronymfinder.com/) - You can search with the exact acronym, the beginning of the acronym, wildcards and reverse lookup.

-   [Abbreviations.com](http://www.abbreviations.com/).

Techniques and Failures for Success Criterion 3.1.4 - Abbreviations
-------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="meaning-located-situation-42-head"></span> Situation A: If the abbreviation has only one meaning within the Web page:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G102" class="tech-ref">G102: Providing the expansion or explanation of an abbreviation</a> for the first occurrence of the abbreviation in a Web page using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G97" class="tech-ref">G97: Providing the first use of an abbreviation immediately before or after the expanded form</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G55" class="tech-ref">G55: Linking to definitions</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H28" class="tech-ref">H28: Providing definitions for abbreviations by using the abbr element</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF8" class="tech-ref">PDF8: Providing definitions for abbreviations via an E entry for a structure element</a> (PDF)

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G102" class="tech-ref">G102: Providing the expansion or explanation of an abbreviation</a> for all occurrences of the abbreviation in a Web page using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G55" class="tech-ref">G55: Linking to definitions</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G62" class="tech-ref">G62: Providing a glossary</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H60" class="tech-ref">H60: Using the link element to link to a glossary</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G70" class="tech-ref">G70: Providing a function to search an online dictionary</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H28" class="tech-ref">H28: Providing definitions for abbreviations by using the abbr element</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF8" class="tech-ref">PDF8: Providing definitions for abbreviations via an E entry for a structure element</a> (PDF)

#### <span id="meaning-located-situation-43-head"></span> Situation B: If the abbreviation means different things within the same Web page:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G102" class="tech-ref">G102: Providing the expansion or explanation of an abbreviation</a> for all occurrences of abbreviations in a Web page using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G55" class="tech-ref">G55: Linking to definitions</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H28" class="tech-ref">H28: Providing definitions for abbreviations by using the abbr element</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF8" class="tech-ref">PDF8: Providing definitions for abbreviations via an E entry for a structure element</a> (PDF)

### Additional Techniques (Advisory) for 3.1.4

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Using unique abbreviations in a Web page (future link)

-   Using visual formatting to help users recognize abbreviations (future link)

-   Providing access to a talking dictionary to support users who might have difficulty decoding written definitions (future link)

-   Providing a voice-enabled dictionary search so that users who have difficulty typing or spelling can speak the word whose definition they need (future link)

### Common Failures for SC 3.1.4

The following are common mistakes that are considered failures of Success Criterion 3.1.4 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="abbreviationsdef"></span> abbreviation  
shortened form of a word, phrase, or name where the abbreviation has not become part of the language

*Note 1:* This includes initialisms and acronyms where:

1.  **initialisms** are shortened forms of a name or phrase made from the initial letters of words or syllables contained in that name or phrase

    *Note 1:* Not defined in all languages.

    *Example 1:* SNCF is a French initialism that contains the initial letters of the <span lang="fr" lang="fr">Société Nationale des Chemins de Fer</span>, the French national railroad.

    *Example 2:* ESP is an initialism for extrasensory perception.

2.  **acronyms** are abbreviated forms made from the initial letters or parts of other words (in a name or phrase) which may be pronounced as a word

    *Example:* NOAA is an acronym made from the initial letters of the National Oceanic and Atmospheric Administration in the United States.

*Note 2:* Some companies have adopted what used to be an initialism as their company name. In these cases, the new name of the company is the letters (for example, Ecma) and the word is no longer considered an abbreviation.

 <span id="mechanismdef"></span> mechanism  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#processdef" class="termref">process</a> or technique for achieving a result

*Note 1:* The mechanism may be explicitly provided in the content, or may be <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#reliedupondef" class="termref">relied upon</a> to be provided by either the platform or by <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#atdef" class="termref">assistive technologies</a>.

*Note 2:* The mechanism needs to meet all success criteria for the conformance level claimed.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.1.3 \[Unusual Words\]](meaning-idioms.html "Understanding SC  3.1.3 [Unusual Words]")
-   [**Next:** SC 3.1.5 \[Reading Level\]](meaning-supplements.html "Understanding SC  3.1.5 [Reading Level]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-located.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
