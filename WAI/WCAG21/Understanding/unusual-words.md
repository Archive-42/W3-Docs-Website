-   [Contents](. "Table of Contents")
-   [GL: Readable](readable)
-   [Previous SC: Language of Parts](language-of-parts)
-   [Next SC: Abbreviations](abbreviations)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 3.1.3: Unusual Words
====================================================

> Success Criterion [3.1.3 Unusual Words](https://www.w3.org/TR/WCAG21/#unusual-words) (Level AAA): A [mechanism](#dfn-mechanism) is available for identifying specific definitions of words or phrases [used in an unusual or restricted way](#dfn-used-in-an-unusual-or-restricted-way), including [idioms](#dfn-idiom) and [jargon](#dfn-jargon).

Intent
------

Certain disabilities make it difficult to understand nonliteral word usage and specialized words or usage. Certain disabilities make it difficult to understand figurative language or specialized usage. Providing such mechanisms is vital for these audiences. Specialized information intended for non-specialist readers is encouraged to satisfy this Success Criterion, even when claiming only Single-A or Double-A conformance.

Benefits
--------

This Success Criterion may help people with cognitive, language and learning disabilities who:

-   have difficulty decoding words
-   have difficulty understanding words and phrases
-   have difficulty using context to aid understanding

It would also help people with visual disabilities who:

-   lose context when zoomed-in with a screen magnifier

Examples
--------

-   **Text that includes a definition for a word used in an unusual way.**

    Organize the list or "cascade" of dictionaries and other resources so that the definition search will find the intended definitions instead of displaying definitions from other sources in the "cascade." (The "cascade" lists the dictionaries and other reference materials in the order most likely to bring up the right definition. This controls the order to follow when searching for definitions.)

-   **Including definitions in the glossary.**

    WCAG 2.0 uses the word "text" in a specific way. Thus, when the word "text" is used within WCAG 2.0 it is linked to the definition of "text" provided in a glossary within the same Web page.

-   **The specific definition of a word is provided at the bottom of the page.**

    The internal link from the word to the corresponding definition is also provided within the page.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

Note

The inclusion of a product or vendor name in the list below does not constitute an endorsement by the Web Content Accessibility Guidelines Working Group or the Web Accessibility Initiative of the World Wide Web Consortium. This list is provided simply for convenience and to give users an idea of what resources may be available

-   Free bilingual dictionaries for a number of languages are available from the [Freedict.org Web site](http://www.freedict.org/). The dictionaries are of uneven quality and size as noted on the site. Retrieved 9 April 2005.
-   [The WorldStar Free Dictionaries, Translators and Search Engines](http://www.stars21.com/index.html?lang=en&pname=african) site provides access to free on-line dictionaries and search engines in many languages. Retrieved 18 November 2005.
-   More dictionaries are at [your dictionary](http://www.yourdictionary.com), [freelang.com](http://www.freelang.com) (in English, Spanish and French!) and many other places.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### Situation A: If the word or phrase has a unique meaning within the Web page:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G101" class="general">G101: Providing the definition of a word or phrase used in an unusual or restricted way</a> for the first occurrence of the word or phrase in a Web page using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G55" class="general">G55: Linking to definitions</a>

        -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H40" class="html">H40: Using description lists</a>
        -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H60" class="html">H60: Using the link element to link to a glossary</a>

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G112" class="general">G112: Using inline definitions</a>

        -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H54" class="html">H54: Using the dfn element to identify the defining instance of a word</a>

2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G101" class="general">G101: Providing the definition of a word or phrase used in an unusual or restricted way</a> for each occurrence of the word or phrase in a Web page using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G55" class="general">G55: Linking to definitions</a>

        -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H40" class="html">H40: Using description lists</a>
        -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H60" class="html">H60: Using the link element to link to a glossary</a>

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G62" class="general">G62: Providing a glossary</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G70" class="general">G70: Providing a function to search an online dictionary</a>

#### Situation B: If the word or phrase means different things within the same Web page:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G101" class="general">G101: Providing the definition of a word or phrase used in an unusual or restricted way</a> for each occurrence of the word or phrase in a Web page using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G55" class="general">G55: Linking to definitions</a>

        -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H40" class="html">H40: Using description lists</a>
        -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H60" class="html">H60: Using the link element to link to a glossary</a>

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G112" class="general">G112: Using inline definitions</a>

        -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H54" class="html">H54: Using the dfn element to identify the defining instance of a word</a>

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

idiom

phrase whose meaning cannot be deduced from the meaning of the individual words and the specific words cannot be changed without losing the meaning

Note

idioms cannot be translated directly, word for word, without losing their (cultural or language-dependent) meaning.

In English, "spilling the beans" means "revealing a secret." However, "knocking over the beans" or "spilling the vegetables" does not mean the same thing.

In Japanese, the phrase "<span lang="ja">さじを投げる</span>" literally translates into "he throws a spoon," but it means that there is nothing he can do and finally he gives up.

In Dutch, "<span lang="nl">Hij ging met de kippen op stok</span>" literally translates into "He went to roost with the chickens," but it means that he went to bed early.

jargon

words used in a particular way by people in a particular field

The word StickyKeys is jargon from the field of assistive technology/accessibility.

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

used in an unusual or restricted way

words used in such a way that requires users to know exactly which definition to apply in order to understand the content correctly

The term "gig" means something different if it occurs in a discussion of music concerts than it does in article about computer hard drive space, but the appropriate definition can be determined from context. By contrast, the word "text" is used in a very specific way in WCAG 2.1, so a definition is supplied in the glossary.

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.
