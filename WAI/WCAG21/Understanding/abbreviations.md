-   [Contents](. "Table of Contents")
-   [GL: Readable](readable)
-   [Previous SC: Unusual Words](unusual-words)
-   [Next SC: Reading Level](reading-level)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.1.4: Abbreviations
====================================================

> Success Criterion [3.1.4 Abbreviations](https://www.w3.org/TR/WCAG21/#abbreviations) (Level AAA): A [mechanism](#dfn-mechanism) for identifying the expanded form or meaning of [abbreviations](#dfn-abbreviation) is available.

Intent
------

The intent of this Success Criterion is to ensure that users can access the expanded form of abbreviations.

Benefits
--------

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

Examples
--------

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

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### Situation A: If the abbreviation has only one meaning within the Web page:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G102" class="general">G102: Providing the expansion or explanation of an abbreviation</a> for the first occurrence of the abbreviation in a Web page using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G97" class="general">G97: Providing the first use of an abbreviation immediately before or after the expanded form</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G55" class="general">G55: Linking to definitions</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H28" class="html">H28: Providing definitions for abbreviations by using the abbr element</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF8" class="pdf">PDF8: Providing definitions for abbreviations via an E entry for a structure element</a>

2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G102" class="general">G102: Providing the expansion or explanation of an abbreviation</a> for all occurrences of the abbreviation in a Web page using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G55" class="general">G55: Linking to definitions</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G62" class="general">G62: Providing a glossary</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H60" class="html">H60: Using the link element to link to a glossary</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G70" class="general">G70: Providing a function to search an online dictionary</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H28" class="html">H28: Providing definitions for abbreviations by using the abbr element</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF8" class="pdf">PDF8: Providing definitions for abbreviations via an E entry for a structure element</a>

#### Situation B: If the abbreviation means different things within the same Web page:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G102" class="general">G102: Providing the expansion or explanation of an abbreviation</a> for all occurrences of abbreviations in a Web page using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G55" class="general">G55: Linking to definitions</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H28" class="html">H28: Providing definitions for abbreviations by using the abbr element</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF8" class="pdf">PDF8: Providing definitions for abbreviations via an E entry for a structure element</a>

Key Terms
---------

abbreviation

shortened form of a word, phrase, or name where the abbreviation has not become part of the language

Note

This includes initialisms and acronyms where:

1.  **initialisms** are shortened forms of a name or phrase made from the initial letters of words or syllables contained in that name or phrase

    Note

    Not defined in all languages.

    SNCF is a French initialism that contains the initial letters of the <span lang="fr">Société Nationale des Chemins de Fer</span>, the French national railroad.

    ESP is an initialism for extrasensory perception.

2.  **acronyms** are abbreviated forms made from the initial letters or parts of other words (in a name or phrase) which may be pronounced as a word

    NOAA is an acronym made from the initial letters of the National Oceanic and Atmospheric Administration in the United States.

Note

Some companies have adopted what used to be an initialism as their company name. In these cases, the new name of the company is the letters (for example, Ecma) and the word is no longer considered an abbreviation.

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

conformance

satisfying all the requirements of a given standard, guideline or specification

mechanism

[process](#dfn-process) or technique for achieving a result

Note

The mechanism may be explicitly provided in the content, or may be [relied upon](#dfn-relied-upon) to be provided by either the platform or by [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology).

Note

The mechanism needs to meet all success criteria for the conformance level claimed.

process

series of user actions where each action is required in order to complete an activity

Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

An account registration page requires successful completion of a Turing test before the registration form can be accessed.

relied upon

the content would not [conform](#dfn-conformance) if that [technology](#dfn-technology) is turned off or is not supported

technology

[mechanism](#dfn-mechanism) for encoding instructions to be rendered, played or executed by [user agents](#dfn-user-agent)

Note

As used in these guidelines "Web Technology" and the word "technology" (when used alone) both refer to Web Content Technologies.

Note

Web content technologies may include markup languages, data formats, or programming languages that authors may use alone or in combination to create end-user experiences that range from static Web pages to synchronized media presentations to dynamic Web applications.

Some common examples of Web content technologies include HTML, CSS, SVG, PNG, PDF, Flash, and JavaScript.

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.
