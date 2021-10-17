-   [Contents](. "Table of Contents")
-   [GL: Readable](readable)
-   [Previous SC: Reading Level](reading-level)
-   [Next SC: On Focus](on-focus)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.1.6: Pronunciation
====================================================

> Success Criterion [3.1.6 Pronunciation](https://www.w3.org/TR/WCAG21/#pronunciation) (Level AAA): A [mechanism](#dfn-mechanism) is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.

Intent
------

The intent of this Success Criterion is to help people who are blind, people who have low vision, and people with reading disabilities to understand content in cases where meaning depends on pronunciation. Often words or characters have different meanings, each with its own pronunciation. The meaning of such words or characters can usually be determined from the context of the sentence. However, for more complex or ambiguous sentences, or for some languages, the meaning of the word cannot be easily determined or determined at all without knowing the pronunciation. When the sentence is read aloud and the screen reader reads the word using the wrong pronunciation, it can be even more difficult to understand than when read visually. When words are ambiguous or indeterminate unless the pronunciation is known, then providing some means of determining the pronunciation is needed.

For example, in the English language heteronyms are words that are spelled the same but have different pronunciations and meanings, such as the words desert (abandon) and desert (arid region). If the proper pronunciation can be determined from the context of the sentence, then nothing is required. If it cannot then some mechanism for determining the proper pronunciation would be required. Additionally, in some languages certain characters can be pronounced in different ways. In Japanese, for example, there are characters like Han characters(Kanji) that have multiple pronunciations. Screen readers may speak the characters incorrectly without the information on pronunciation. When read incorrectly, the content will not make sense to users.

Benefits
--------

This Success Criterion may help people who:

-   have difficulty decoding words
-   have difficulty using context to aid understanding
-   use technologies that read the words aloud

Examples
--------

-   **Giving the reading of a person's name.**

    Web content in Japanese provides kana (Japanese phonetic syllabary characters) written next to Han characters (Kanji) show the pronunciation of a person's name. The kana is provided to users in parentheses right after the word. Giving the reading of the words written in Han characters (Kanji) allows both sighted users and screen readers to read/pronounce the words correctly. Note that screen readers will speak the word twice: the Han characters (Kanji) that can be pronounced in a wrong way are read first and then kana is spoken in order to provide the correct reading.

-   **Showing the reading of the words by ruby element.**

    Web content using XHTML 1.1 provides kana (phonetic syllabary characters) written above the characters to show the reading (pronunciation) of the words by using the ruby element.

-   **Providing sound files of the pronunciation.**

    A document includes some words whose meaning cannot be determined without knowing the correct pronunciation. Each word is linked to a sound file that gives the correct pronunciation. Users can select these links to find out how to pronounce the words.

-   **Including pronunciation information in the glossary.**

    A Web page includes a glossary section. Some items in the glossary include pronunciation information as well as definitions. Words in the content whose meaning cannot be determined without knowing their pronunciation are linked to the appropriate entries in the glossary.

-   **Text that includes pronunciation information for characters shared by several languages but pronounced differently in each language**

    A Japanese university Web site includes several short phrases quoted from scholarly texts in Chinese and Korean. The quotations are written using the same script as the Japanese text. Pronunciation information is provided to show the correct reading of the Chinese and Korean characters.

Note

For Japanese, the ruby element is used for showing the "reading" rather than "pronunciation."

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G120" class="general">G120: Providing the pronunciation immediately following the word</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G121" class="general">G121: Linking to pronunciations</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G62" class="general">G62: Providing a glossary</a> that includes pronunciation information for words that have a unique pronunciation in the content and have meaning that depends on pronunciation
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G163" class="general">G163: Using standard diacritical marks that can be turned off</a>
5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H62" class="html">H62: Using the ruby element</a> (XHTML 1.1)

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
