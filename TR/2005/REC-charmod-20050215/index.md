[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

<span id="title"></span>Character Model for the World Wide Web 1.0: Fundamentals
================================================================================

<span id="w3c-doctype"></span>W3C Recommendation 15 February 2005
-----------------------------------------------------------------

This version:  
<http://www.w3.org/TR/2005/REC-charmod-20050215/>

Latest version:  
<http://www.w3.org/TR/charmod/>

Previous version:  
<http://www.w3.org/TR/2004/PR-charmod-20041122/>

Editors:  
Martin J. Dürst, W3C [&lt;duerst@w3.org&gt;](mailto:duerst@w3.org)

François Yergeau (Invited Expert)

Richard Ishida, W3C [&lt;ishida@w3.org&gt;](mailto:ishida@w3.org)

Misha Wolf (until Dec 2002), Reuters Ltd. [&lt;misha.wolf@reuters.com&gt;](mailto:misha.wolf@reuters.com)

Tex Texin (Invited Expert), XenCraft [&lt;tex@XenCraft.com&gt;](mailto:tex@XenCraft.com)

Please refer to the [**errata**](http://www.w3.org/2005/02/charmod-fundamentals-errata.html) for this document, which may include some normative corrections.

See also [**translations**](http://www.w3.org/2003/03/Translations/byTechnology?technology=charmod).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2005 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span id="abstract"></span>Abstract
-----------------------------------

This Architectural Specification provides authors of specifications, software developers, and content developers with a common reference for interoperable text manipulation on the World Wide Web, building on the Universal Character Set, defined jointly by the Unicode Standard and ISO/IEC 10646. Topics addressed include use of the terms '<span class="qterm">character</span>', '<span class="qterm">encoding</span>' and '<span class="qterm">string</span>', a reference processing model, choice and identification of character encodings, character escaping, and string indexing.

For normalization and string identity matching, see the companion document Character Model for the World Wide Web 1.0: Normalization [\[CharNorm\]](#charnorm). For resource identifiers, see the companion document Character Model for the World Wide Web 1.0: Resource Identifiers [\[CharIRI\]](#charmod3).

<span id="status"></span>Status of this Document
------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

This document contains the Character Model for the World Wide Web 1.0: Fundamentals specification, and is a [W3C Recommendation](http://www.w3.org/2003/06/Process-20030618/tr.html#RecsW3C). It has been reviewed by W3C Members and other interested parties and has been endorsed by the Director. It is a stable document and may be used as reference material or cited as a normative reference from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

This document was developed as part of the [W3C Internationalization Activity](http://www.w3.org/International/Activity) by the [W3C Internationalization Core Working Group](http://www.w3.org/International/core/), with the help of the Internationalization Interest Group.

If you have comments on this document, send them to <www-i18n-comments@w3.org> ([public archive](http://lists.w3.org/Archives/Public/www-i18n-comments/)). Last Call dispositions are available in a [public version](http://www.w3.org/2004/02/charmod1-lastcall/) and a [Members-only version](http://www.w3.org/International/Group/2004/charmod1-lc/). There is also an [implementation report](/2004/11/charmod-implementation/). Changes to this document since the Proposed Recommendation version are detailed in [**E Changes since the Proposed Recommendation**](#sec-Changes).

This document was produced under the [24 January 2002 CPP](http://www.w3.org/TR/2002/NOTE-patent-practice-20020124) as amended by the [W3C Patent Policy Transition Procedure](http://www.w3.org/2004/02/05-pp-transition). The Working Group maintains a [public list of patent disclosures](http://www.w3.org/2004/01/pp-impl/32113/status) relevant to this document; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains Essential Claim(s) with respect to this specification should disclose the information in accordance with [section 6 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

<span id="contents"></span>Table of Contents
--------------------------------------------

1 [Introduction](#sec-Intro)  
    1.1 [Goals and Scope](#sec-GoalsScope)  
    1.2 [Background](#sec-Background)  
    1.3 [Terminology and Notation](#sec-Notation)  
2 [Conformance](#sec-Conformance)  
3 [Perceptions of Characters](#sec-Perceptions)  
    3.1 [Introduction](#sec-PerceptionsIntro)  
    3.2 [Units of aural rendering](#sec-WritingSystem)  
    3.3 [Units of visual rendering](#sec-VisualRenderingUnits)  
        3.3.1 [Visual Rendering and Logical Order](#sec-LogicalOrder)  
    3.4 [Units of input](#sec-InputUnits)  
    3.5 [Units of collation](#sec-CollationUnits)  
    3.6 [Units of storage](#sec-Storage)  
    3.7 [Summary](#sec-PerceptionsOutro)  
4 [Digital Encoding of Characters](#sec-Characters)  
    4.1 [Character Encoding](#sec-Digital)  
    4.2 [Transcoding](#sec-Transcoding)  
    4.3 [Reference Processing Model](#sec-RefProcModel)  
    4.4 [Choice and Identification of Character Encodings](#sec-Encodings)  
        4.4.1 [Mandating a unique character encoding](#sec-UniqueEncoding)  
        4.4.2 [Character encoding identification](#sec-EncodingIdent)  
    4.5 [Private use code points](#sec-PrivateUse)  
    4.6 [Character Escaping](#sec-Escaping)  
5 [Compatibility and Formatting Characters](#sec-Compatibility)  
6 [Strings](#sec-Indexing)  
    6.1 [String concepts](#sec-Strings)  
    6.2 [String indexing](#sec-stringIndexing)  
7 [Referencing the Unicode Standard and ISO/IEC 10646](#sec-RefUnicode)  

### <span id="appendices"></span>Appendices

A [References](#sec-References)  
    A.1 [Normative References](#sec-NormativeReferences)  
    A.2 [Other References](#sec-OtherReferences)  
B [Examples of Characters, Keystrokes and Glyphs](#sec-CharExamples) (Non-Normative)  
C [Example text](#sec-ExampleText) (Non-Normative)  
D [List of conformance criteria](#sec-Checklist) (Non-Normative)  
E [Changes since the Proposed Recommendation](#sec-Changes) (Non-Normative)  
F [Acknowledgements](#sec-Acknowledgements) (Non-Normative)  

------------------------------------------------------------------------

<span id="sec-Intro"></span>1 Introduction
------------------------------------------

### <span id="sec-GoalsScope"></span>1.1 Goals and Scope

The goal of the Character Model for the World Wide Web is to facilitate use of the Web by all people, regardless of their language, script, writing system, and cultural conventions, in accordance with the [W3C goal of universal access](%20http://www.w3.org/Consortium/mission.html). One basic prerequisite to achieve this goal is to be able to transmit and process the characters used around the world in a well-defined and well-understood way.

The main target audience of this specification is W3C specification developers. This specification and parts of it can be referenced from other W3C specifications. It defines conformance criteria for W3C specifications as well as other specifications.

Other audiences of this specification include software developers, content developers, and authors of specifications outside the W3C. Software developers and content developers implement and use W3C specifications. This specification defines some conformance criteria for implementations (software) and content that implement and use W3C specifications. It also helps software developers and content developers to understand the character-related provisions in W3C specifications.

The character model described in this specification provides authors of specifications, software developers, and content developers with a common reference for consistent, interoperable text manipulation on the World Wide Web. Working together, these three groups can build a more international Web.

Topics addressed in this part of the Character Model for the World Wide Web include use of the terms '<span class="qterm">character</span>', '<span class="qterm">encoding</span>' and '<span class="qterm">string</span>', a reference processing model, choice and identification of character encodings, character escaping, and string indexing.

Other parts of the Character Model address normalization and string identity matching ([\[CharNorm\]](#charnorm)) and Internationalized Resource Identifiers (IRI) conventions ([\[CharIRI\]](#charmod3)).

Topics as yet not addressed or barely touched include fuzzy matching, and language tagging. Some of these topics may be addressed in a future version of this specification.

At the core of the model is the Universal Character Set (UCS), defined jointly by the Unicode Standard [\[Unicode\]](#unicode) and ISO/IEC 10646 [\[ISO/IEC 10646\]](#iso10646). In this document, <span class="new-term"> Unicode</span> is used as a synonym for the Universal Character Set. The model will allow Web documents authored in the world's scripts (and on different platforms) to be exchanged, read, and searched by Web users around the world.

### <span id="sec-Background"></span>1.2 Background

This section provides some historical background on the topics addressed in this specification.

Starting with Internationalization of the Hypertext Markup Language [\[RFC 2070\]](#rfc2070), the Web community has recognized the need for a character model for the World Wide Web. The first step towards building this model was the adoption of Unicode as the document character set for HTML.

The choice of Unicode was motivated by the fact that Unicode:

-   is the only universal character repertoire available,

-   provides a way of referencing characters independent of the encoding of the text,

-   is being updated/completed carefully,

-   is widely accepted and implemented by industry.

W3C adopted Unicode as the document character set for HTML in [\[HTML 4.0\]](#html40). The same approach was later used for specifications such as XML 1.0 [\[XML 1.0\]](#xml10) and CSS2 [\[CSS2\]](#css2). W3C specifications and applications now use Unicode as the common reference character set.

When data transfer on the Web remained mostly unidirectional (from server to browser), and where the main purpose was to render documents, the use of Unicode without specifying additional details was sufficient. However, the Web has grown:

-   Data transfers among servers, proxies, and clients, in all directions, have increased.

-   Characters outside the US-ASCII [\[ISO/IEC 646\]](#iso646)[\[MIME-charset\]](#MIME-charset) repertoire are being used in more and more places.

-   Data transfers between different protocol/format elements (such as element/attribute names, URI components, and textual content) have increased.

-   More and more APIs are defined, not just protocols and formats.

In short, the Web may be seen as a single, very large application (see [\[Nicol\]](#Nicol)), rather than as a collection of small independent applications.

While these developments strengthen the requirement that Unicode be the basis of a character model for the Web, they also create the need for additional specifications on the application of Unicode to the Web. Some aspects of Unicode that require additional specification for the Web include:

-   Choice of Unicode encoding forms (UTF-8, UTF-16, UTF-32).

-   Counting characters, measuring string length in the presence of variable-length character encodings and combining characters.

-   Duplicate encodings of characters (e.g. precomposed vs decomposed).

-   Use of control codes for various purposes (e.g. bidirectionality control, symmetric swapping, etc.).

It should be noted that such aspects also exist in various encodings, and in many cases have been inherited by Unicode in one way or another from these encodings.

The remainder of this specification presents additional requirements to ensure an interoperable character model for the Web, taking into account earlier work (from W3C, ISO and IETF).

The first few chapters of the Unicode Standard [\[Unicode\]](#unicode) provide very useful background reading. The policies adopted by the IETF for on the use of character sets on the Internet are documented in [\[RFC 2277\]](#rfc2277).

### <span id="sec-Notation"></span>1.3 Terminology and Notation

Unicode code points are denoted as U+hhhh, where "hhhh" is a sequence of at least four, and at most six hexadecimal digits.

Text has been used for examples to allow them to be cut and pasted by the reader. Characters used will not appear as intended unless you have the appropriate font, but care has been taken to annotate the examples so that they remain understandable even if you do not. In some cases it is important to see the result of an example, so images have been used; by clicking on the image it is possible to link to the text for these examples in [**C Example text**](#sec-ExampleText).

<span id="sec-Conformance"></span>2 Conformance
-----------------------------------------------

This section explains the conditions that specifications, software, and Web content have to fulfill to be able to claim conformance to this specification.

The key words "<span class="rfc2119">MUST</span>", "<span class="rfc2119">MUST NOT</span>", "<span class="rfc2119">REQUIRED</span>", "<span class="rfc2119">SHALL</span>", "<span class="rfc2119">SHALL NOT</span>", <span class="rfc2119">SHOULD</span>", "<span class="rfc2119">SHOULD NOT</span>", "<span class="rfc2119">RECOMMENDED</span>", "<span class="rfc2119">MAY</span>" and "<span class="rfc2119">OPTIONAL</span>" in this document are to be interpreted as described in RFC 2119 [\[RFC 2119\]](#rfc2119).

<span class="note-head">NOTE: </span>RFC 2119 makes it clear that requirements that use <span class="rfc2119">SHOULD</span> are not optional and must be complied with unless there are specific reasons not to: "<span class="quote">This word, or the adjective "RECOMMENDED", mean that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.</span>"

This specification defines conformance criteria for specifications, for software, and for Web content. To aid the reader, all conformance criteria are preceded by '<span class="qterm">\[X\]</span>' where '<span class="qchar">X</span>' is one of '<span class="qchar">S</span>' for specifications, '<span class="qchar">I</span>' for software implementations, and '<span class="qchar">C</span>' for Web content. These markers indicate the relevance of the conformance criteria and allow the reader to quickly locate relevant conformance criteria by searching through this document.

A specification conforms to this document if it:

1.  does not violate any conformance criteria preceded by \[S\],

2.  documents the reason for any deviation from criteria where the imperative is <span class="rfc2119">SHOULD</span>, <span class="rfc2119">SHOULD NOT</span>, or <span class="rfc2119">RECOMMENDED</span>,

3.  where applicable, requires implementations conforming to the specification to conform to this document,

4.  where applicable, requires content conforming to the specification to conform to this document.

An implementation (software) conforms to this document if it does not violate any conformance criteria preceded by \[I\].

Content conforms to this document if it does not violate any conformance criteria preceded by \[C\].

<span class="note-head">NOTE: </span>Requirements placed on specifications might indirectly cause requirements to be placed on implementations or content that claim to conform to those specifications. Likewise, requirements placed on content may affect implementations designed to produce such content, and so on.

Where this specification places requirements on processing, it is to be understood as a way to specify the desired external behavior. Implementations can use other means of achieving the same results, as long as observable behavior is not affected.

<span id="sec-Perceptions"></span>3 Perceptions of Characters
-------------------------------------------------------------

### <span id="sec-PerceptionsIntro"></span>3.1 Introduction

The glossary entry in the Unicode Standard [\[Unicode 4.0\]](#unicode40) gives:

"<span class="quote">Character. (1) The smallest component of written language that has semantic value; refers to the abstract meaning and/or shape ...</span>"

The word '<span class="qterm">character</span>' is used in many contexts, with different meanings. Human cultures have radically differing writing systems, leading to radically differing concepts of a character. Such wide variation in end user experience can, and often does, result in misunderstanding. This variation is sometimes mistakenly seen as the consequence of imperfect technology. Instead, it derives from the great flexibility and creativity of the human mind and the long tradition of writing as an important part of the human cultural heritage. The alphabetic approach used by scripts such as Latin, Cyrillic and Greek is only one of several possibilities.

<span class="example-head">EXAMPLE: </span>A character in Japanese hiragana and katakana scripts corresponds to a syllable (usually a combination of consonant plus vowel).

<span class="example-head">EXAMPLE: </span>Korean Hangul combines symbols for individual sounds of the language into square blocks, each of which represents a syllable. Depending on the user and the application, either the individual symbols or the syllabic clusters can be considered to be characters.

<span class="example-head">EXAMPLE: </span>In Indic scripts each consonant letter carries an inherent vowel that is eliminated or replaced using semi-regular or irregular ways to combine consonants and vowels into clusters. Depending on the user and the application, either individual consonants or vowels, or the consonant or consonant-vowel clusters can be perceived as characters.

<span class="example-head">EXAMPLE: </span>In Arabic and Hebrew vowel sounds are typically not written at all. When they are written they are indicated by the use of combining marks placed above and below the consonantal letters.

The developers of specifications, and the developers of software based on those specifications, are likely to be more familiar with usages of the term '<span class="qterm">character</span>' they have experienced and less familiar with the wide variety of usages in an international context. Furthermore, within a computing context, characters are often confused with related concepts, resulting in incomplete or inappropriate specifications and software.

This section examines some of these contexts, meanings and confusions.

### <span id="sec-WritingSystem"></span>3.2 Units of aural rendering

In some scripts, characters have a close relationship to phonemes (a <span class="new-term">phoneme</span> is a minimally distinct sound in the context of a particular spoken language), while in others they are closely related to meanings. Even when characters (loosely) correspond to phonemes, this relationship may not be simple, and there is rarely a one-to-one correspondence between character and phoneme.

<span class="example-head">EXAMPLE: </span>In the English sentence, "<span class="quote">They were too close to the door to close it.</span>" the same character '<span class="qchar">s</span>' is used to represent both /s/ and /z/ phonemes.

<span class="example-head">EXAMPLE: </span>In the English language the phoneme /k/ of "<span class="quote">cool</span>" is like the phoneme /k/ of "<span class="quote">keel</span>".

<span class="example-head">EXAMPLE: </span>In many scripts a single character may represent a sequence of phonemes, such as the syllabic characters of Japanese hiragana.

<span class="example-head">EXAMPLE: </span>In many writing systems a sequence of characters may represent a single phoneme, for example '<span class="qchar">th</span>' and '<span class="qchar">ng</span>' in "<span class="quote">thing</span>".

<a href="#C001" id="C001"><span class="reqId">C001</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  <span class="requirement-type">\[C\]</span>  Specifications, software and content <span class="rfc2119">MUST NOT</span> require or depend on a one-to-one correspondence between characters and the sounds of a language. </span>

### <span id="sec-VisualRenderingUnits"></span>3.3 Units of visual rendering

Visual rendering introduces the notion of a *glyph*. <span class="new-term">Glyphs</span> are defined by ISO/IEC 9541-1 [\[ISO/IEC 9541-1\]](#iso9541) as "<span class="quote">a recognizable abstract graphic symbol which is independent of a specific design</span>". There is *not* a one-to-one correspondence between characters and glyphs:

-   A single character can be represented by multiple glyphs (each glyph is then part of the representation of that character). These glyphs may be physically separated from one another.

-   A single glyph may represent a sequence of characters (this is the case with ligatures, among others).

-   A character may be rendered with very different glyphs depending on the context.

-   A single glyph may represent different characters (e.g. capital Latin A, capital Greek A and capital Cyrillic A).

A set of glyphs makes up a <span class="new-term">font</span>. Glyphs can be construed as the basic units of organization of the visual rendering of text, just as characters are the basic unit of organization of encoded text.

<a href="#C002" id="C002"><span class="reqId">C002</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  <span class="requirement-type">\[C\]</span>  Specifications, software and content <span class="rfc2119">MUST NOT</span> require or depend on a one-to-one mapping between characters and units of displayed text. </span>

See the appendix [**B Examples of Characters, Keystrokes and Glyphs**](#sec-CharExamples) for examples of the complexities of character to glyph mapping.

#### <span id="sec-LogicalOrder"></span>3.3.1 Visual Rendering and Logical Order

Some scripts, in particular Arabic and Hebrew, are written from right to left. Text including characters from these scripts can run in both directions and is therefore called bidirectional text. The Unicode Standard [\[Unicode\]](#unicode) requires that characters be stored and interchanged in <span class="new-term">logical order</span>, i.e. roughly corresponding to the order in which text is typed in via the keyboard or spoken (for a more detailed definition see [\[Unicode 4.0\]](#unicode40), Section 2.2). Logical ordering is important to ensure interoperability of data, and also benefits accessibility, searching, and collation.

<a href="#C003" id="C003"><span class="reqId">C003</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  <span class="requirement-type">\[C\]</span>  Protocols, data formats and APIs <span class="rfc2119">MUST</span> store, interchange or process text data in logical order. </span>

In the presence of bidirectional text, two possible selection modes can be considered. The first is <span class="new-term">logical selection mode</span>, which selects all the characters *logically* located between the end-points of the user's mouse gesture. Here the user selects from between the first and second letters of the second word to the middle of the number. Logical selection looks like this:

<table><tbody><tr class="odd"><td>Visual display</td><td style="text-align: center;"><a href="#arabic-select"><img src="images/logSelScreen.gif" alt="The same example, showing how the text would look on-screen when highlighted, showing two separate highlighted character ranges." width="144" height="32" /></a></td></tr><tr class="even"><td>Logical order</td><td style="text-align: center;"><a href="#arabic-select"><img src="images/logSelMemory.gif" alt="An example showing the logical order of characters in a string containing two Arabic words followed by a year number. In logical selection mode, the range of characters selected by starting the selection in the middle of the second word and ending in the middle of the year number is depicted using highlighting. The highlighting covers a single block of contiguous characters." width="323" height="27" /></a></td></tr></tbody></table>

Logical selection resulting in discontiguous visual ranges

It is a consequence of the bidirectionality of the text that a single, continuous logical selection in memory results in a *discontinuous selection appearing on the screen*. This discontinuity makes some users prefer a <span class="new-term">visual selection mode</span>, which selects all the characters *visually* located between the end-points of the user's mouse gesture. With the same mouse gesture as before, we now obtain:

<table><tbody><tr class="odd"><td>Visual display</td><td style="text-align: center;"><a href="#arabic-select"><img src="images/visSelScreen.gif" alt=" The same example, showing how the text would look on-screen when highlighted, showing a single highlighted block of contiguous characters." width="141" height="33" /></a></td></tr><tr class="even"><td>Logical order</td><td style="text-align: center;"><a href="#arabic-select"><img src="images/visSelMemory.gif" alt=" An example showing the logical order of characters in a string containing two Arabic words followed by a year number. In visual selection mode, the range of characters selected by starting the selection in the middle of the second word and ending in the middle of the year number is depicted using highlighting. The highlighting covers two separate blocks of characters." width="343" height="27" /></a></td></tr></tbody></table>

Visual selection resulting in discontiguous logical ranges

In visual selection mode, as seen in the example above, a single visual selection range may result in *two or more* logical ranges, which may have to be accommodated by protocols, APIs and implementations. Other, related aspects of a user interface for bidirectional text include caret movement, behavior of backspace/delete keys, and so on.

Currently, most implementations provide logical selection, while only very few provide visual selection.

<a href="#C075" id="C075"><span class="reqId">C075</span></a> <span class="req"><span class="requirement-type">\[I\]</span> Independent of whether some implementation uses logical selection or visual selection, characters selected <span class="rfc2119">MUST</span> be kept in logical order in storage.</span>

<a href="#C004" id="C004"><span class="reqId">C004</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications of protocols and APIs that involve selection of ranges <span class="rfc2119">SHOULD</span> provide for discontiguous logical selections, at least to the extent necessary to support implementation of visual selection on screen on top of those protocols and APIs. </span>

### <span id="sec-InputUnits"></span>3.4 Units of input

In keyboard input, it is *not* always the case that keystrokes and input characters correspond one-to-one. A limited number of keys can fit on a keyboard. Some keyboards will generate multiple characters from a single keypress. In other cases ('<span class="qterm">dead keys</span>') a key will generate no characters, but affect the results of subsequent keypresses. Many writing systems have far too many characters to fit on a keyboard and must rely on more complex <span class="new-term">input methods</span>, which transform keystroke sequences into character sequences. Other languages may make it necessary to input some characters with special modifier keys. See [**B Examples of Characters, Keystrokes and Glyphs**](#sec-CharExamples) for examples of non-trivial input.

<a href="#C005" id="C005"><span class="reqId">C005</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  Specifications and software <span class="rfc2119">MUST NOT</span> require nor depend on a single keystroke resulting in a single character, nor that a single character be input with a single keystroke (even with modifiers), nor that keyboards are the same all over the world. </span>

### <span id="sec-CollationUnits"></span>3.5 Units of collation

String comparison as used in sorting and searching is based on units which do not in general have a one-to-one relationship to encoded characters. Such string comparison can aggregate a character sequence into a single <span class="new-term">collation unit</span> with its own position in the sorting order, can separate a single character into multiple collation units, and can distinguish various aspects of a character (case, presence of diacritics, etc.) to be sorted separately (multi-level sorting).

In addition, a certain amount of pre-processing may also be required, and in some languages (such as Japanese and Arabic) sort order may be governed by higher order factors such as phonetics or word roots. Collation methods may also vary by application.

<span class="example-head">EXAMPLE: </span>In traditional Spanish sorting, the character sequences 'ch' and 'll' are treated as atomic collation units. Although Spanish sorting, and to some extent Spanish everyday use, treat '<span class="qchar">ch</span>' as a single unit, current digital encodings treat it as two characters, and keyboards do the same (the user types '<span class="qchar">c</span>', then '<span class="qchar">h</span>').

<span class="example-head">EXAMPLE: </span>In some languages, the letter '<span class="qchar">æ</span>' is sorted as two consecutive collation units: '<span class="qchar">a</span>' and '<span class="qchar">e</span>'.

<span class="example-head">EXAMPLE: </span>The sorting of text written in a bicameral script (i.e. a script which has distinct upper and lower case letters) is usually required to ignore case differences in a first pass; case is then used to break ties in a later pass.

<span class="example-head">EXAMPLE: </span>Treatment of accented letters in sorting is dependent on the script or language in question. The letter '<span class="qchar">ö</span>' is treated as a modified '<span class="qchar">o</span>' in French, but as a letter completely independent from '<span class="qchar">o</span>' (and sorting after '<span class="qchar">z</span>') in Swedish. In German certain applications treat the letter '<span class="qchar">ö</span>' as if it were the sequence '<span class="qchar">oe</span>'.

<span class="example-head">EXAMPLE: </span>In Thai the sequence '<span class="qchar">ไก</span>' (U+0E44 U+0E01) must be sorted as if it were written '<span class="qchar">กไ</span>' (U+0E01 U+0E44). Reordering is typically done during an initial pre-processing stage.

<span class="example-head">EXAMPLE: </span>German dictionaries typically sort '<span class="qchar">ä</span>', '<span class="qchar">ö</span>' and '<span class="qchar">ü</span>' together with '<span class="qchar">a</span>', '<span class="qchar">o</span>' and '<span class="qchar">u</span>' respectively. On the other hand, German telephone books typically sort '<span class="qchar">ä</span>', '<span class="qchar">ö</span>' and '<span class="qchar">ü</span>' as if they were spelled '<span class="qchar">ae</span>', '<span class="qchar">oe</span>' and '<span class="qchar">ue</span>'. Here the application is affecting the collation algorithm used.

<a href="#C006" id="C006"><span class="reqId">C006</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  Software that sorts or searches text for users <span class="rfc2119">SHOULD</span> do so on the basis of appropriate collation units and ordering rules for the relevant language and/or application. </span>

<a href="#C007" id="C007"><span class="reqId">C007</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  Where searching or sorting is done dynamically, particularly in a multilingual environment, the 'relevant language' <span class="rfc2119">SHOULD</span> be determined to be that of the current user, and may thus differ from user to user. </span>

<a href="#C066" id="C066"><span class="reqId">C066</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  Software that allows users to sort or search text <span class="rfc2119">SHOULD</span> allow the user to select alternative rules for collation units and ordering. </span>

<a href="#C008" id="C008"><span class="reqId">C008</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  Specifications and implementations of sorting and searching algorithms <span class="rfc2119">SHOULD</span> accommodate text that contains any character in Unicode. </span>

Note that this requires, as a minimum, that a collation algorithm does not break down if the text contains Unicode characters that are not covered by its rules. It does not necessarily require full implementation of complex algorithms for all scripts. One useful way of satisfying the requirement is to apply a default collation algorithm that covers all Unicode characters.

ISO/IEC 14651 [\[ISO/IEC 14651\]](#iso14651) and Unicode Technical Report \#10, the Unicode Collation Algorithm [\[UTR \#10\]](#UTR10), describe a model for collation that accommodates most languages and provide a default collation order. They are appropriate references for collation and provide implementation guidelines. The default collation order can be used in conjunction with rules tailored for a particular locale to ensure a predictable ordering and comparison of strings, whatever characters they include.

### <span id="sec-Storage"></span>3.6 Units of storage

Computer storage and communication rely on units of physical storage and information interchange, such as bits and bytes (8-bit units, also called octets). A frequent error in specifications and implementations is the equating of characters with units of physical storage. The mapping between characters and such units of storage is actually quite complex, and is discussed in the next section, [**4.1 Character Encoding**](#sec-Digital).

<a href="#C009" id="C009"><span class="reqId">C009</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  Specifications, software and content <span class="rfc2119">MUST NOT</span> require or depend on a one-to-one relationship between characters and units of physical storage. </span>

### <span id="sec-PerceptionsOutro"></span>3.7 Summary

The term character is used differently in a variety of contexts and often leads to confusion when used outside of these contexts. In the context of the digital representations of text, a <span class="new-term">character</span> can be defined as a small logical unit of text. <span class="new-term">Text</span> is then defined as sequences of characters. While such an informal definition is sufficient to create or capture a common understanding in many cases, it is also sufficiently open to create misunderstandings as soon as details start to matter. In order to write effective specifications, protocol implementations, and software for end users, it is very important to understand that these misunderstandings can occur.

This section, [**3 Perceptions of Characters**](#sec-Perceptions), has discussed terms for units that do not necessarily overlap with the term '<span class="qterm">character</span>', such as phoneme, glyph, and collation unit. The next section, [**4.1 Character Encoding**](#sec-Digital), lists terms that should be used rather than '<span class="qterm">character</span>' to precisely define <span class="new-term">units of encoding</span> (code point, code unit, and byte).

<a href="#C010" id="C010"><span class="reqId">C010</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  When specifications use the term '<span class="qterm">character</span>' the specifications <span class="rfc2119">MUST</span> define which meaning they intend. </span>

<a href="#C067" id="C067"><span class="reqId">C067</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">SHOULD</span> use specific terms, when available, instead of the general term 'character'. </span>

<span id="sec-Characters"></span>4 Digital Encoding of Characters
-----------------------------------------------------------------

### <span id="sec-Digital"></span>4.1 Character Encoding

On the WWW, as in any computing environment, characters must be encoded to be of any use. To achieve text encoding, a large variety of character encodings have been devised. Character encodings can loosely be explained as mappings between the character sequences that users manipulate and the sequences of bits that computers manipulate.

Given the complexity of text encoding and the large variety of mechanisms for character encoding invented throughout the computer age, a more formal description of the encoding process is useful. The process of defining a text encoding can be described as follows (see Unicode Technical Report \#17: Character Encoding Model [\[UTR \#17\]](#UTR17) for a more detailed description):

1.  <span id="def-repertoire"></span>

    A set of characters to be encoded is identified. The characters are pragmatically chosen to express text and to efficiently allow various text processes in one or more target languages. They may not correspond precisely to what users perceive as letters and other characters. The set of characters is called a <span class="new-term">repertoire</span>.

2.  <span id="def-CCS"></span>

    Each character in the repertoire is then associated with a (mathematical, abstract) non-negative integer, the <span class="new-term">code point</span> (also known as a <span class="new-term">character number</span> or <span class="new-term">code position</span>). The result, a mapping from the repertoire to the set of non-negative integers, is called a <span class="new-term">coded character set (CCS)</span>.

3.  <span id="def-CEF"></span>

    To enable use in computers, a suitable base datatype is identified (such as a byte, a 16-bit unit of storage or other) and a <span class="new-term">character encoding form (CEF)</span> is used, which encodes the abstract integers of a coded character set (CCS) into sequences of the <span class="new-term">code units</span> of the base datatype. The character encoding form can be extremely simple (for instance, one which encodes the integers of the CCS into the natural representation of integers of the chosen datatype of the computing platform) or arbitrarily complex (a variable number of code units, where the value of each unit is a non-trivial function of the encoded integer).

4.  <span id="def-CES"></span>

    To enable transmission or storage using byte-oriented devices, a <span class="new-term">serialization scheme</span> or <span class="new-term">character encoding scheme (CES)</span> is next used. A character encoding scheme is a mapping of the code units of a character encoding form (CEF) into well-defined sequences of bytes, taking into account the necessary specification of byte-order for multi-byte base datatypes and including in some cases switching schemes between the code units of multiple character encoding schemes (an example is ISO 2022). A character encoding scheme, together with the coded character sets it is used with, is called a <span class="new-term">character encoding</span>, and is identified by a unique identifier, such as an IANA charset identifier. Given a sequence of bytes representing text and a character encoding identified by a `charset` identifier, one can in principle unambiguously recover the sequence of characters of the text.

<span class="note-head">NOTE: </span>See [**4.4.2 Character encoding identification**](#sec-EncodingIdent) for a discussion of the term '<span class="qterm">charset</span>' and further details on character encodings.

<span class="note-head">NOTE: </span>The term '<span class="qterm">character encoding</span>' is somewhat ambiguous, as it is sometimes used to describe the actual process of encoding characters and sometimes to denote a particular way to perform that process (as in "<span class="quote">this file is in the X character encoding</span>"). Context normally allows the distinction of those uses, once one is aware of the ambiguity.

<span class="note-head">NOTE: </span>Given a sequence of characters, a given '<span class="qterm">character encoding</span>' may not always produce the same sequence of bytes. In particular for encodings based on ISO 2022, there may be choices available during the encoding process.

In very simple cases, the whole encoding process can be collapsed to a single step, a trivial one-to-one mapping from characters to bytes; this is the case, for instance, for US-ASCII [\[ISO/IEC 646\]](#iso646) and ISO-8859-1.

Text is said to be in a <span class="new-term">Unicode encoding form</span> if it is encoded in UTF-8, UTF-16 or UTF-32.

### <span id="sec-Transcoding"></span>4.2 Transcoding

<span class="new-term">Transcoding</span> is the process of converting text from one [character encoding](#def-CES) to another. Transcoders work only at the level of character encoding and do not parse the text; consequently, they do not deal with [character escapes](#sec-Escaping) such as numeric character references (see [**4.6 Character Escaping**](#sec-Escaping)) and do not adjust embedded character encoding information (for instance in an XML declaration or in an HTML `meta` element).

<span class="note-head">NOTE: </span>Transcoding may involve one-to-one, many-to-one, one-to-many or many-to-many mappings. In addition, the storage order of characters varies between encodings: some, such as the Unicode encoding forms, prescribe logical ordering, while others use visual ordering; among encodings that have separate diacritics, some prescribe that they be placed before the base character, some after. Because of these differences in sequencing characters, transcoding may involve reordering: thus XYZ may map to yxz.

<span class="example-head">EXAMPLE: </span>This first example shows the transcoding of the Russian word '<span class="qterm">Русский</span>' meaning '<span class="qterm">Russian</span>' (language), from the UTF-16 encoding of Unicode to the ISO 8859-5 encoding:

UTF-16

ISO 8859-5

Code unit

Char. name (abbreviated)

Code unit

Char. name (abbreviated)

0420

CAPITAL ER

C0

CAPITAL ER

0443

SMALL U

E3

SMALL U

0441

SMALL ES

E1

SMALL ES

0441

SMALL ES

E1

SMALL ES

043A

SMALL KA

DA

SMALL KA

0438

SMALL I

D8

SMALL I

0439

SMALL SHORT I

D9

SMALL SHORT I

<span class="example-head">EXAMPLE: </span>This second example shows a much more complex case, where the Arabic word '<span class="qterm">السلام</span>', meaning '<span class="qterm">peace</span>', is transcoded from the visually-ordered, contextualized encoding IBM CP864 to the UTF-16 encoding of Unicode:

IBM CP864

UTF-16

Code unit

Char. name (abbreviated)

Code unit

Char. name (abbreviated)

EF

FINAL MEEM

0627

ALEF

9E

MEDIAN LAM-ALEF

0644

LAM

D3

MEDIAN SEEN

0633

SEEN

E4

MEDIAN LAM

0644

LAM

C7

INITIAL ALEF

0627

ALEF

0645

MEEM

Notice that the order of the characters has been reversed, that the single LAM-ALEF in CP864 has been converted to a LAM ALEF sequence in UTF-16, and that the contextual variants (initial, median or final) in the source encoding have been converted to generic characters in the target encoding.

### <span id="sec-RefProcModel"></span>4.3 Reference Processing Model

Many Internet protocols and data formats, most notably the very important Web formats HTML, CSS and XML, are based on text. In those formats, everything is text but the relevant specifications impose a structure on the text, giving meaning to certain constructs so as to obtain functionality in addition to that provided by <span class="new-term">plain text</span> (text that is not in the context of markup or a programming language). HTML and XML are <span class="new-term">markup languages</span>, defining documents entirely composed of text but with conventions allowing the separation of this text into <span class="new-term">markup</span> and <span class="new-term">character data</span>. Citing from the XML 1.0 specification [\[XML 1.0\]](#xml10), [section 2.4](http://www.w3.org/TR/2004/REC-xml-20040204/#syntax):

"<span class="quote">Text consists of intermingled character data and markup. \[...\] All text that is not markup constitutes the character data of the document.</span>"

For the purposes of this section, the important aspect is that everything is [text](#def-text), that is, a sequence of characters.

A <span class="new-term">textual data object</span> is a whole text protocol message or a whole text document, or a part of it that is treated separately for purposes of external storage and retrieval. Examples include external parsed entities in XML and textual MIME entity bodies [\[MIME-entity\]](#MIME-entity).

<a href="#C013" id="C013"><span class="reqId">C013</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[C\]</span>  Textual data objects defined by protocol or format specifications <span class="rfc2119">MUST</span> be in a *single* character encoding. </span>

Note that this does not imply that character set switching schemes such as ISO 2022 cannot be used, since such schemes perform character set switching within a single character encoding.

Since its early days, the Web has seen the development of a <span class="new-term">Reference Processing Model</span>, first described for HTML in RFC 2070 [\[RFC 2070\]](#rfc2070). This model was later embraced by XML and CSS. It is applicable to any data format or protocol that is text-based as described above. The essence of the Reference Processing Model is the use of Unicode as a common reference. Use of the Reference Processing Model by a specification does not, however, require that implementations actually use Unicode. The requirement is only that the implementations behave as if the processing took place as described by the Model. Also, while this document uses the term Reference *Processing* Model and describes its properties in terms of processing, the model also applies to specifications that do not explicitly define a processing model.

<a href="#C014" id="C014"><span class="reqId">C014</span></a><span class="req"><span class="requirement-type">\[S\]</span> </span><span class="req">All specifications that involve processing of text <span class="rfc2119">MUST</span> specify the processing of text according to the [Reference Processing Model](#sec-RefProcModel), namely:</span>

1.  Specifications <span class="rfc2119">MUST</span> define text in terms of Unicode characters, not bytes or [glyphs](#def-glyph).

2.  For their textual data objects specifications <span class="rfc2119">MAY</span> allow use of any character encoding which can be transcoded to a Unicode encoding form.

3.  Specifications <span class="rfc2119">MAY</span> choose to disallow or deprecate some character encodings and to make others mandatory. Independent of the actual character encoding, the specified behavior <span class="rfc2119">MUST</span> be the same *as if* the processing happened as follows:

    -   The character encoding of any textual data object received by the application implementing the specification <span class="rfc2119">MUST</span> be determined and the data object <span class="rfc2119">MUST</span> be interpreted as a sequence of Unicode characters - this <span class="rfc2119">MUST</span> be equivalent to [transcoding](#def-transcoding) the data object to some [Unicode encoding form](#Unicode_Encoding_Form), adjusting any character encoding label if necessary, and receiving it in that Unicode encoding form.

    -   All processing <span class="rfc2119">MUST</span> take place on this sequence of Unicode characters.

    -   If text is output by the application, the sequence of Unicode characters <span class="rfc2119">MUST</span> be encoded using a character encoding chosen among those allowed by the specification.

4.  If a specification is such that multiple textual data objects are involved (such as an XML document referring to external parsed entities), it <span class="rfc2119">MAY</span> choose to allow these data objects to be in different character encodings. In all cases, the [Reference Processing Model](#sec-RefProcModel) <span class="rfc2119">MUST</span> be applied to all textual data objects.

<span class="note-head">NOTE: </span>All specifications which define applications of the XML 1.0 specification [\[XML 1.0\]](#xml10) automatically inherit this Reference Processing Model. XML is entirely defined in terms of Unicode characters and requires the UTF-8 and UTF-16 character encodings while allowing any other character encoding for parsed entities.

<span class="note-head">NOTE: </span>When specifications choose to allow character encodings other than Unicode encoding forms, implementers should be aware that the correspondence between the characters of such encodings and Unicode characters may in practice depend on the software used for [transcoding](#def-transcoding). See the Japanese XML Profile [\[XML Japanese Profile\]](#XML_Japanese_profile) for examples of such inconsistencies.

<a href="#C070" id="C070"><span class="reqId">C070</span></a> <span class="req"><span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">SHOULD NOT</span> *arbitrarily* exclude code points from the full range of Unicode [code points](#def-CCS) from U+0000 to U+10FFFF inclusive.</span>

<a href="#C077" id="C077"><span class="reqId">C077</span></a> <span class="req"><span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">MUST NOT</span> allow code points above U+10FFFF. </span>

Unicode contains some code points for internal use (such as noncharacters) or special functions (such as surrogate code points).

<a href="#C079" id="C079"><span class="reqId">C079</span></a> <span class="req"><span class="requirement-type">\[S\]</span> Specifications <span class="rfc2119">SHOULD NOT</span> allow the use of codepoints reserved by Unicode for internal use.</span>

<a href="#C078" id="C078"><span class="reqId">C078</span></a> <span class="req"><span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">MUST NOT</span> allow the use of surrogate code points.</span>

Excluding code points without good reason conflicts with the W3C goal of universal accessibility. Excluding code points would prevent some scripts from being used which may be important to a user community or communities. For example, without strong reasons to do so, decisions to exclude code points above the Basic Multilingual Plane or to limit code points to the US-ASCII or Latin-1 repertoire are inappropriate. Also, please note that the Unicode Standard requires software to not corrupt any code points.

Other examples of legitimate and non-arbitrary reasons to exclude characters can be seen in Unicode in XML and other Markup Languages [\[UXML\]](#UXML), where the use of certain characters is discouraged for reasons such as:

-   They are deprecated in the Unicode Standard.

-   They cannot be supported without additional data.

-   They are better handled by markup.

-   They conflict with equivalent markup.

### <span id="sec-Encodings"></span>4.4 Choice and Identification of Character Encodings

Because encoded text *cannot* be interpreted and processed without knowing the encoding, it is vitally important that the character encoding (see [**4.1 Character Encoding**](#sec-Digital)) is known at all times and places where text is exchanged, stored or processed. In what follows we use '<span class="qterm">character encoding</span>' to mean either [character encoding form (CEF)](#def-CEF) or [character encoding scheme (CES)](#def-CES) depending on the context. When text is transmitted or stored as a byte stream, for instance in a protocol or file system, specification of a [CES](#def-CES) is required to ensure proper interpretation. In contexts such as an API, where the environment (typically the processor architecture) specifies the byte order of multibyte quantities, specification of a [CEF](#def-CEF) suffices.

<a href="#C015" id="C015"><span class="reqId">C015</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">MUST</span> either specify a unique character encoding, or provide character encoding identification mechanisms such that the encoding of text can be reliably identified. </span>

<a href="#C016" id="C016"><span class="reqId">C016</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  When designing a new protocol, format or API, specifications <span class="rfc2119">SHOULD</span> require a unique character encoding. </span>

<a href="#C017" id="C017"><span class="reqId">C017</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  When basing a protocol, format, or API on a protocol, format, or API that already has rules for character encoding, specifications <span class="rfc2119">SHOULD</span> use rather than change these rules. </span>

<span class="example-head">EXAMPLE: </span>An XML-based format should use the existing XML rules for choosing and determining the character encoding of external entities, rather than invent new ones.

#### <span id="sec-UniqueEncoding"></span>4.4.1 Mandating a unique character encoding

Mandating a unique character encoding is simple, efficient, and robust. There is no need for specifying, producing, transmitting, and interpreting encoding tags. At the receiver, the character encoding will always be understood. There is also no ambiguity as to which character encoding to use if data is transferred non-electronically and later has to be converted back to a digital representation. Even when there is a need for compatibility with existing data, systems, protocols and applications, multiple character encodings can often be dealt with at the boundaries or outside a protocol, format, or API. The DOM [\[DOM Level 1\]](#dom1) is an example of where this was done. The advantages of choosing a unique character encoding are greater when text sizes are small or the specification is close to the actual processing.

<a href="#C018" id="C018"><span class="reqId">C018</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  When a unique character encoding is required, the character encoding <span class="rfc2119">MUST</span> be UTF-8, UTF-16 or UTF-32. </span>

US-ASCII is upwards-compatible with UTF-8 (an US-ASCII string is also a UTF-8 string, see [\[RFC 3629\]](#rfc3629)), and UTF-8 is therefore appropriate if compatibility with US-ASCII is desired. In other situations, such as for APIs, UTF-16 or UTF-32 may be more appropriate. Possible reasons for choosing one of these include efficiency of internal processing and interoperability with other processes.

<span class="note-head">NOTE: </span>The IETF Charset Policy [\[RFC 2277\]](#rfc2277) specifies that on the Internet "<span class="quote">Protocols MUST be able to use the UTF-8 charset</span>".

<span class="note-head">NOTE: </span>The XML 1.0 specification [\[XML 1.0\]](#xml10) requires all conforming XML processors to accept both UTF-16 and UTF-8.

#### <span id="sec-EncodingIdent"></span>4.4.2 Character encoding identification

The MIME Internet specification provides a good example of a mechanism for character encoding identification [\[MIME-charset\]](#MIME-charset)[\[RFC 2978\]](#RFC2978). The MIME `charset` parameter definition is intended to supply sufficient information to uniquely decode the sequence of bytes of the received data into a sequence of characters. The values are drawn from the IANA charset registry [\[IANA\]](#iana).

<span class="note-head">NOTE: </span>Unfortunately, some charset identifiers do not represent a single, unique character encoding. Instead, these identifiers denote a number of small variations. Even though small, the differences may be crucial and may vary over time. For these identifiers, recovery of the character sequence from a byte sequence is ambiguous. For example, the character encoded as 0x5C in Shift\_JIS is ambiguous. This code point sometimes represents a <span class="uname">YEN SIGN</span> and sometimes represents a <span class="uname">REVERSE SOLIDUS</span>. See the [\[XML Japanese Profile\]](#XML_Japanese_profile) for more detail on this example and for additional examples of such ambiguous charset identifiers.

<span id="def-charset"></span>

<span class="note-head">NOTE: </span>The term <span class="new-term">charset</span> derives from '<span class="qterm">character set</span>', an expression with a long and tortured history (see [\[Connolly\]](#connolly) for a discussion).

<a href="#C020" id="C020"><span class="reqId">C020</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">SHOULD</span> avoid using the terms '<span class="qterm">character set</span>' and '<span class="qterm">charset</span>' to refer to a character encoding, except when the latter is used to refer to the MIME `charset` parameter or its IANA-registered values. The term '<span class="qterm">character encoding</span>', or in specific cases the terms '<span class="qterm">character encoding form</span>' or '<span class="qterm">character encoding scheme</span>', are <span class="rfc2119">RECOMMENDED</span>. </span>

<span class="note-head">NOTE: </span>In XML, the XML declaration or the text declaration contains the `encoding` pseudo-attribute which identifies the character encoding using the IANA charset.

The IANA charset registry is the official list of names and aliases for character encoding schemes on the Internet.

<a href="#C021" id="C021"><span class="reqId">C021</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  If the unique encoding approach is not taken, specifications <span class="rfc2119">SHOULD</span> require the use of the IANA charset registry names, and in particular the names identified in the registry as '<span class="qterm">MIME preferred names</span>', to designate character encodings in protocols, data formats and APIs. </span>

<a href="#C022" id="C022"><span class="reqId">C022</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  <span class="requirement-type">\[C\]</span>  Character encodings that are not in the IANA registry <span class="rfc2119">SHOULD NOT</span> be used, except by private agreement. </span>

<a href="#C023" id="C023"><span class="reqId">C023</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  <span class="requirement-type">\[C\]</span>  If an unregistered character encoding is used, the convention of using '<span class="qterm">x-</span>' at the beginning of the name <span class="rfc2119">MUST</span> be followed. </span>

<a href="#C049" id="C049"><span class="reqId">C049</span></a> <span class="req"> <span class="requirement-type">\[I\]</span>  <span class="requirement-type">\[C\]</span>  The character encoding of content <span class="rfc2119">SHOULD</span> be chosen so that it maximizes the opportunity to directly represent characters (ie. minimizes the need to represent characters by [markup](#def-char-data) means such as [character escapes](#def-char-escape)) while avoiding obscure encodings that are unlikely to be understood by recipients. </span>

<span class="note-head">NOTE: </span>Due to Unicode's large repertoire and wide base of support, a character encoding based on Unicode is a good choice to encode a document.

<a href="#C034" id="C034"><span class="reqId">C034</span></a> <span class="req"> <span class="requirement-type">\[C\]</span>  If facilities are offered for identifying character encoding, content MUST make use of them; where the facilities offered for character encoding identification include defaults (e.g. in XML 1.0 [\[XML 1.0\]](#xml10)), relying on such defaults is sufficient to satisfy this identification requirement. </span>

<a href="#C024" id="C024"><span class="reqId">C024</span></a> <span class="req"> <span class="requirement-type">\[I\]</span>  <span class="requirement-type">\[C\]</span>  Content and software that label text data <span class="rfc2119">MUST</span> use one of the names required by the appropriate specification (e.g. the XML specification when editing XML text) and <span class="rfc2119">SHOULD</span> use the MIME preferred name of a character encoding to label data in that character encoding. </span>

<a href="#C025" id="C025"><span class="reqId">C025</span></a> <span class="req"> <span class="requirement-type">\[I\]</span>  <span class="requirement-type">\[C\]</span>  An IANA-registered `charset` name <span class="rfc2119">MUST NOT</span> be used to label text data in a character encoding other than the one identified in the IANA registration of that name. </span>

<a href="#C026" id="C026"><span class="reqId">C026</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  If the unique encoding approach is not chosen, specifications <span class="rfc2119">MUST</span> designate at least one of the UTF-8 and UTF-16 encoding forms of Unicode as admissible character encodings and <span class="rfc2119">SHOULD</span> choose at least one of UTF-8 or UTF-16 as required encoding forms (encoding forms that <span class="rfc2119">MUST</span> be supported by implementations of the specification). </span>

<a href="#C027" id="C027"><span class="reqId">C027</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications that require a default encoding <span class="rfc2119">MUST</span> define either UTF-8 or UTF-16 as the default, or both if they define suitable means of distinguishing them. </span>

<a href="#C028" id="C028"><span class="reqId">C028</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">MUST NOT</span> propose the use of heuristics to determine the encoding of data. </span>

Examples of heuristics include the use of statistical analysis of byte (pattern) frequencies or character (pattern) frequencies. Heuristics are bad because they will not work consistently across different implementations. Well-defined instructions of how to unambiguously determine a character encoding, such as those given in XML 1.0 [\[XML 1.0\]](#xml10), [Appendix F](http://www.w3.org/TR/2004/REC-xml-20040204/#sec-guessing), are not considered heuristics.

<a href="#C029" id="C029"><span class="reqId">C029</span></a> <span class="req"> <span class="requirement-type">\[I\]</span>  *Receiving* software <span class="rfc2119">MUST</span> determine the encoding of data from available information according to appropriate specifications. </span>

<a href="#C030" id="C030"><span class="reqId">C030</span></a> <span class="req"> <span class="requirement-type">\[I\]</span>  When an IANA-registered `charset` name is recognized, receiving software <span class="rfc2119">MUST</span> interpret the received data according to the encoding associated with the name in the IANA registry. </span>

<a href="#C031" id="C031"><span class="reqId">C031</span></a> <span class="req"> <span class="requirement-type">\[I\]</span>  When no charset is provided receiving software <span class="rfc2119">MUST</span> adhere to the default character encoding(s) specified in the specification. </span>

Receiving software may recognize as many character encodings and as many charset names and aliases for them as appropriate.

A field-upgradeable mechanism may be appropriate for this purpose. Certain character encodings are more or less associated with certain languages (e.g. Shift\_JIS with Japanese). Trying to support a given language or set of customers may mean that certain character encodings have to be supported. However, one cannot assume universal support for a favoured but non-required encoding. The character encodings that need to be supported may change over time. This document does not give any advice on which character encoding may be appropriate or necessary for the support of any given language.

Because of the layered Web architecture (e.g. formats used over protocols), there may be multiple and at times conflicting information about character encoding.

<a href="#C035" id="C035"><span class="reqId">C035</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">MUST</span> define conflict-resolution mechanisms (e.g. priorities) for cases where there is multiple or conflicting information about character encoding. </span>

<a href="#C033" id="C033"><span class="reqId">C033</span></a> <span class="req"> <span class="requirement-type">\[I\]</span>  Software <span class="rfc2119">MUST</span> completely implement the mechanisms for character encoding identification and conflict resolution. </span>

### <span id="sec-PrivateUse"></span>4.5 Private use code points

Certain ranges of Unicode [code points](#def-CCS) are designated for private use: the Private Use Area (PUA) (U+E000-F8FF) and planes 15 and 16 (U+F0000-FFFFD and U+100000-10FFFD). These code points are guaranteed to never be allocated to standard characters, and are available for use by private agreement. However, private agreements do not scale on the Web. Code points from different private agreements may collide. Also, a private agreement, and therefore the meaning of the code points, can quickly become lost.

<a href="#C073" id="C073"><span class="reqId">C073</span></a> <span class="req"> <span class="requirement-type">\[C\]</span>  Publicly interchanged content <span class="rfc2119">SHOULD NOT</span> use codepoints in the private use area. </span>

<span class="note-head">NOTE: </span>A typical exception would be the use of the PUA to design and test the encoding of not yet encoded (e.g. historic or rare) scripts.

<a href="#C076" id="C076"><span class="reqId">C076</span></a> <span class="req"><span class="requirement-type">\[C\]</span> Content <span class="rfc2119">MUST NOT</span> use a code point for any purpose other than that defined by its coded character set.</span>

This prohibits, for example, the construction of fonts that misuse the codepoints in the ISO Latin 1 character set to represent different scripts, characters, or symbols than those actually encoded in iso-8859-1.

<a href="#C038" id="C038"><span class="reqId">C038</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">MUST NOT</span> require the use of private use area characters with particular assignments. </span>

<a href="#C039" id="C039"><span class="reqId">C039</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">MUST NOT</span> require the use of mechanisms for defining agreements of private use code points. </span>

<a href="#C040" id="C040"><span class="reqId">C040</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  Specifications and implementations <span class="rfc2119">SHOULD NOT</span> disallow the use of private use code points by private agreement. </span>

As an example, XML does not disallow the use of private use code points.

<a href="#C041" id="C041"><span class="reqId">C041</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">MAY</span> define [markup](#def-char-data) to allow the transmission of symbols not in Unicode or to identify specific variants of Unicode characters. </span>

<span class="example-head">EXAMPLE: </span>MathML (see [\[MathML2\]](#mathml2) [section 3.2.9](http://www.w3.org/TR/2003/REC-MathML2-20031021/chapter3.html#presm.mglyph)) defines an element `mglyph` for mathematical symbols not in Unicode.

<span class="example-head">EXAMPLE: </span>SVG (see [\[SVG\]](#svg) [section 10.14](http://www.w3.org/TR/2003/REC-SVG11-20030114/text.html#AlternateGlyphs)) defines an element `altglyph` which allows the identification of specific display variants of Unicode characters.

<a href="#C068" id="C068"><span class="reqId">C068</span></a> <span class="req"><span class="requirement-type">\[S\]</span> Specifications <span class="rfc2119">SHOULD</span> allow the inclusion of or reference to pictures and graphics where appropriate, to eliminate the need to (mis)use character-oriented mechanisms for pictures or graphics.</span>

### <span id="sec-Escaping"></span>4.6 Character Escaping

Markup languages or programming languages often designate certain characters as <span class="new-term">syntax-significant</span>, giving them specific functions within the language (e.g. '<span class="qchar">&lt;</span>' and '<span class="qchar">&</span>' serve as markup delimiters in HTML and XML). As a consequence, these syntax-significant characters cannot be used to represent themselves in text in the same way as all other characters do, creating the need for a mechanism to "<span class="quote">escape</span>" their syntax-significance. There is also a need, often satisfied by the same or similar mechanisms, to express characters not directly representable in the character encoding chosen for a particular document or program (an instance of the markup or programming language).

Formally, a <span class="new-term">character escape</span> is a syntactic device defined in a markup or programming language that allows one or more of:

1.  expressing syntax-significant characters while disregarding their significance in the syntax of the language, or

2.  expressing characters not representable in the character encoding chosen for an instance of the language, or

3.  expressing characters in general, without use of the corresponding encoded characters.

Escaping a character means expressing it using such a syntactic device, appropriate to the format or protocol in which the character appears; <span class="new-term">expanding a character escape</span> (or <span class="new-term">unescaping</span>) means replacing it with the character that it represents.

<span class="example-head">EXAMPLE: </span>HTML and XML define '<span class="qterm">Numeric Character References</span>' which allow both the escaping of syntax-significance and the expression of arbitrary Unicode characters. Expressed as &\#x3C; or &\#60; the character '<span class="qchar">&lt;</span>' will not be parsed as a markup delimiter.

<span class="example-head">EXAMPLE: </span>The programming language Java uses '<span class="qchar">"</span>' to delimit strings. To express '<span class="qchar">"</span>' within a string, one may escape it as '<span class="qchar">\\"</span>'.

<span class="example-head">EXAMPLE: </span>XML defines '<span class="qterm">CDATA sections</span>' which allow escaping the syntax-significance of all characters between the CDATA section delimiters. CDATA sections prevent the expression of characters using numeric character references.

The following guidelines apply to the way specifications define character escapes.

-   <a href="#C042" id="C042"><span class="reqId">C042</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">SHOULD NOT</span> invent a new escaping mechanism if an appropriate one already exists. </span>

-   <a href="#C043" id="C043"><span class="reqId">C043</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  The number of different ways to escape a character <span class="rfc2119">SHOULD</span> be minimized (ideally to one). </span>

    A well-known counter-example is that for historical reasons, both HTML and XML have redundant decimal (&\#ddddd;) and hexadecimal (&\#xhhhh;) character escapes.

-   <a href="#C044" id="C044"><span class="reqId">C044</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Escape syntax <span class="rfc2119">SHOULD</span> require either explicit end delimiters or a fixed number of characters in each character escape. Escape syntaxes where the end is determined by any character outside the set of characters admissible in the character escape itself <span class="rfc2119">SHOULD</span> be avoided. </span>

    These character escapes are not clear visually, and can cause an editor to insert spurious line-breaks when word-wrapping on spaces. Forms like SPREAD's &UABCD; [\[SPREAD\]](#spread) or XML's &\#xhhhh;, where the character escape is explicitly terminated by a semicolon, are much better.

-   <a href="#C045" id="C045"><span class="reqId">C045</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Whenever specifications define character escapes that allow the representation of characters using a number, the number <span class="rfc2119">MUST</span> represent the Unicode code point of the character and <span class="rfc2119">SHOULD</span> be in hexadecimal notation. </span>

-   <a href="#C046" id="C046"><span class="reqId">C046</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Escaped characters <span class="rfc2119">SHOULD</span> be acceptable wherever their unescaped forms are; this does not preclude that [syntax-significant](#def-syntax-significant) characters, when escaped, lose their significance in the syntax. In particular, if a character is acceptable in identifiers and comments, then its escaped form should also be acceptable. </span>

The following guidelines apply to content developers, as well as to software that generates content:

-   <a href="#C047" id="C047"><span class="reqId">C047</span></a> <span class="req"> <span class="requirement-type">\[I\]</span>  <span class="requirement-type">\[C\]</span>  Escapes <span class="rfc2119">SHOULD</span> only be used when the characters to be expressed are not directly representable in the format or the character encoding of the document, or when the visual representation of the character is unclear. </span>

    <span class="note-head">NOTE: </span>An example of when the visual representation of the character is unclear is the use of &nbsp; to distinguish a non-breaking space from a normal space.

-   <a href="#C048" id="C048"><span class="reqId">C048</span></a> <span class="req"> <span class="requirement-type">\[I\]</span>  <span class="requirement-type">\[C\]</span>  Content <span class="rfc2119">SHOULD</span> use the hexadecimal form of character escapes rather than the decimal form when there are both. </span>

    <span class="note-head">NOTE: </span>The hexadecimal form is preferred because character encoding standards (in particular Unicode) usually list character numbers as hexadecimal, making lookup easier.

<span id="sec-Compatibility"></span>5 Compatibility and Formatting Characters
-----------------------------------------------------------------------------

This specification does not address the suitability of particular characters for use in [markup languages](#def-char-data), in particular formatting characters and compatibility equivalents. For detailed recommendations about the use of compatibility and formatting characters, see Unicode in XML and other Markup Languages [\[UXML\]](#UXML).

<a href="#C050" id="C050"><span class="reqId">C050</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">SHOULD</span> exclude compatibility characters in the syntactic elements (markup, delimiters, identifiers) of the formats they define. </span>

<span id="sec-Indexing"></span>6 Strings
----------------------------------------

### <span id="sec-Strings"></span>6.1 String concepts

Various specifications use the notion of a '<span class="qterm">string</span>', sometimes without defining precisely what is meant and sometimes defining it differently from other specifications. The reason for this variability is that there are in fact multiple reasonable definitions for a string, depending on one's intended use of the notion; the term '<span class="qterm">string</span>' is used for all these different notions because these are actually just different views of the same reality: a piece of text stored inside a computer.

<span class="new-term">Byte string</span>: A string viewed as a sequence of bytes representing characters in a particular character encoding. This corresponds to a [character encoding scheme (CES)](#def-CES). Text processing of a byte string is dependent on the particular encoding used. When the encoding changes the processing must also be changed to reflect the stucture of the new encoding. Such a change could require significant redesign of the functions or API used to process the byte strings as text. Therefore, this definition is only useful in specifications when the textual nature of a string is unimportant and the string is considered only as a piece of opaque data with a length in bytes (such as when copying a buffer).

<a href="#C011" id="C011"><span class="reqId">C011</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">SHOULD NOT</span> define a string as a '<span class="qterm">byte string</span>'. </span>

<span class="example-head">EXAMPLE: </span>This is a counter-example, illustrating one reason why considering strings as byte strings may be problematic. Consider text containing the character U+233B4 (a Chinese character meaning 'stump of tree') encoded as UTF-16 in big-endian byte order (UTF-16BE). The text will contain the bytes D8 4C DF B4. If one searches this text, considered as a byte string, for the character U+4CDF (another Chinese character meaning 'phoenix'), an erroneous match will be found on the bytes 4C DF that are the UTF-16BE representation of U+4CDF.

<span class="new-term">Code unit string</span>: A string viewed as a sequence of [code units](#def-CEF) representing characters in a particular character encoding. This corresponds to a [character encoding form (CEF)](#def-CEF). A definition of a code unit string needs to include the size of the code units (e.g. 16 bits) and the character encoding used (e.g. UTF-16). Code unit strings are useful in APIs that expose a physical representation of string data based on reliable knowledge of the encoding forms that are likely candidates for implementation. Example: For the DOM [\[DOM Level 1\]](#dom1), UTF-16 was chosen based on widespread implementation practice. In general, 'code unit string' is only useful if the implementation candidates are likely to be either UTF-16 or UTF-32.

<span class="new-term">Character string</span>: A string viewed as a sequence of characters, each represented by a [code point](#def-CCS) in Unicode [\[Unicode\]](#unicode). This is usually what programmers consider to be a string, although it may not match exactly what most users perceive as characters. This is the highest layer of abstraction that ensures interoperability with very low implementation effort. The 'character string' definition of a string is generally the most useful. Good examples using this definition include the Production \[2\] of XML 1.0 [\[XML 1.0\]](#xml10), the SGML declaration of HTML 4.0 [\[HTML 4.01\]](#html401), and the character model of RFC 2070 [\[RFC 2070\]](#rfc2070).

<a href="#C012" id="C012"><span class="reqId">C012</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  The '<span class="qterm">character string</span>' definition <span class="rfc2119">SHOULD</span> be used by most specifications. </span>

<span class="example-head">EXAMPLE: </span>Consider the string comprising the characters U+233B4 (a Chinese character meaning 'stump of tree'), U+2260 <span class="uname">NOT EQUAL TO</span>, U+0071 <span class="uname">LATIN SMALL LETTER Q</span> and U+030C <span class="uname">COMBINING CARON</span>, encoded in UTF-16 in big-endian byte order. The rows of the following table show the string viewed as a [character string](#def-character-string), [code unit string](#def-physical-string) and [byte string](#def-byte-string), respectively:

Glyphs

[<img src="images/chineseSurrogate.gif" alt="Ideographic supplementary character: Archaic Chinese character meaning &quot;the stump of a tree&quot; (still in current use in Cantonese)" width="24" height="25" />](#stumpOfTree)

[<img src="images/not_equal.gif" alt="NOT EQUAL TO" width="25" height="26" />](#stumpOfTree)

[<img src="images/Q.gif" alt="LATIN SMALL LETTER Q" width="14" height="21" />](#stumpOfTree)

[<img src="images/caron.gif" alt="COMBINING CARON" width="14" height="21" />](#stumpOfTree)

Character string

U+233B4

U+2260

U+0071

U+030C

Code unit string

D84C

DFB4

2260

0071

030C

Byte string

D8

4C

DF

B4

22

60

00

71

03

0C

<span id="def-grapheme-string"></span>

<span class="note-head">NOTE: </span>It is also possible to view a string as a sequence of <span class="new-term">grapheme clusters</span>. Grapheme clusters divide the text into units that correspond more closely than [character strings](#def-character-string) to the user's perception of where character boundaries occur in a visually rendered text. A discussion of grapheme clusters is given at the end of Section 2.10 of the Unicode Standard, Version 4 [\[Unicode 4.0\]](#unicode40); a formal definition is given in Unicode Standard Annex \#29 [\[UTR \#29\]](#UTR29). The Unicode Standard defines *default* grapheme clustering. Some languages require tailoring to this default. For example, a Slovak user might wish to treat the default pair of grapheme clusters "ch" as a single grapheme cluster. Note that the interaction between the language of string content and the end-user's preferences may be complex.

### <span id="sec-stringIndexing"></span>6.2 String indexing

There are many situations where a software process needs to access a substring or to point within a string and does so by the use of <span class="new-term">indices</span>, i.e. numeric "<span class="quote">positions</span>" within a string. Where such indices are exchanged between components of the Web, there is a need for an agreed-upon definition of string indexing in order to ensure consistent behavior. The requirements for string indexing are discussed in Requirements for String Identity Matching [\[CharReq\]](#CharReq), [section 4](http://www.w3.org/TR/WD-charreq#4). The two main questions that arise are: "<span class="quote">What is the unit of counting?</span>" and "<span class="quote">Do we start counting at 0 or 1?</span>".

The example in the previous section, [**6.1 String concepts**](#sec-Strings), shows a string viewed as a [character string](#def-character-string), [code unit string](#def-physical-string) and [byte string](#def-byte-string), respectively, each of which involves different units for indexing.

Depending on the particular requirements of a process, the unit of counting may correspond to definitions of a string provided in section [**6.1 String concepts**](#sec-Strings). In particular:

-   <a href="#C051" id="C051"><span class="reqId">C051</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  The [character string](#def-character-string) is <span class="rfc2119">RECOMMENDED</span> as a basis for string indexing. </span>

    (Example: the XML Path Language [\[XPath\]](#xpath)).

-   <a href="#C052" id="C052"><span class="reqId">C052</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  A [code unit string](#def-physical-string) <span class="rfc2119">MAY</span> be used as a basis for string indexing if this results in a significant improvement in the efficiency of internal operations when compared to the use of [character string](#def-character-string). </span>

    (Example: the use of UTF-16 in [\[DOM Level 1\]](#dom1)).

-   <a href="#C071" id="C071"><span class="reqId">C071</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  [Grapheme clusters](#def-grapheme-string) <span class="rfc2119">MAY</span> be used as a basis for string indexing in applications where user interaction is the primary concern. </span>

    See Unicode Standard Annex \#29, Text Boundaries [\[UTR \#29\]](#UTR29).

    <a href="#C074" id="C074"><span class="reqId">C074</span></a> <span class="req"><span class="requirement-type">\[S\]</span> Specifications that define indexing in terms of grapheme clusters <span class="rfc2119">MUST</span> either: a) define grapheme clusters in terms of default grapheme clusters as defined in Unicode Standard Annex \#29, Text Boundaries [\[UTR \#29\]](#UTR29), or b) define specifically how tailoring is applied to the indexing operation.</span>

-   <a href="#C072" id="C072"><span class="reqId">C072</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  <span class="requirement-type">\[I\]</span>  The use of [byte strings](#def-byte-string) for indexing is <span class="rfc2119">NOT RECOMMENDED</span>. </span>

It is noteworthy that there exist other, non-numeric ways of identifying substrings which have favorable properties. For instance, substrings based on string matching are quite robust against small edits; substrings based on document structure (in structured formats such as XML) are even more robust against edits and even against translation of a document from one human language to another.

<a href="#C053" id="C053"><span class="reqId">C053</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications that need a way to identify substrings or point within a string <span class="rfc2119">SHOULD</span> provide ways other than string indexing to perform this operation. </span>

<a href="#C054" id="C054"><span class="reqId">C054</span></a> <span class="req"> <span class="requirement-type">\[I\]</span>  <span class="requirement-type">\[C\]</span>  Users of specifications (software developers, content developers) <span class="rfc2119">SHOULD</span> whenever possible prefer ways other than string indexing to identify substrings or point within a string. </span>

Experience shows that more general, flexible and robust specifications result when individual characters are understood and processed as substrings, identified by a position before and a position after the substring. Understanding indices as boundary positions *between* the counting units also makes it easier to relate the indices resulting from the different string definitions.

<a href="#C055" id="C055"><span class="reqId">C055</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications <span class="rfc2119">SHOULD</span> understand and process single characters as substrings, and treat indices as boundary positions *between* counting units, regardless of the choice of counting units. </span>

<a href="#C056" id="C056"><span class="reqId">C056</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Specifications of APIs <span class="rfc2119">SHOULD NOT</span> specify single characters or single '<span class="qterm">units of encoding</span>' as argument or return types. </span>

<span class="example-head">EXAMPLE: </span> The function `uppercase("ß")` cannot return the proper result (the two-character string '<span class="qchar">SS</span>') if the return type of the `uppercase` function is defined to be a single character. Note, also, that there is not necessarily a one-to-one mapping between characters and units of sound, input, etc. as described in [**3 Perceptions of Characters**](#sec-Perceptions).

The issue of index origin, i.e. whether we count from 0 or 1, actually arises only after a decision has been made on whether it is the units themselves that are counted or the positions between the units.

<a href="#C057" id="C057"><span class="reqId">C057</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  When the positions between the units are counted for string indexing, starting with an index of 0 for the position at the start of the string is the <span class="rfc2119">RECOMMENDED</span> solution, with the last index then being equal to the number of counting units in the string. </span>

<span id="sec-RefUnicode"></span>7 Referencing the Unicode Standard and ISO/IEC 10646
-------------------------------------------------------------------------------------

Specifications often need to make references to the Unicode Standard or International Standard ISO/IEC 10646. Such references must be made with care, especially when normative. The questions to be considered are:

-   Which standard should be referenced?

-   How to reference a particular version?

-   When to use versioned vs. unversioned references?

ISO/IEC 10646 is developed and published jointly by [ISO](http://www.iso.org/iso/en/ISOOnline.openerpage) (the International Organization for Standardization) and [IEC](http://www.iec.ch/) (the International Electrotechnical Commission). The Unicode Standard is developed and published by the [Unicode Consortium](http://www.unicode.org/), an organization of major computer corporations, software producers, database vendors, national governments, research institutions, international agencies, various user groups, and interested individuals. The Unicode Standard is comparable in standing to W3C Recommendations.

ISO/IEC 10646 and the Unicode Standard define exactly the same [coded character set (CCS)](#def-CCS) (same [repertoire](#def-repertoire), same [code points](#def-CCS)) and encoding forms. They are actively maintained in synchrony by liaisons and overlapping membership between the respective technical committees. In addition to the jointly defined CCS and encoding forms, the Unicode Standard adds normative and informative lists of character properties, normative character equivalence and normalization specifications, a normative algorithm for bidirectional text and a large amount of useful implementation information. In short, the Unicode Standard adds semantics to the characters that ISO/IEC 10646 merely enumerates. Conformance to the Unicode Standard implies conformance to ISO/IEC 10646, see [\[Unicode 4.0\]](#unicode40) Appendix C.

<a href="#C062" id="C062"><span class="reqId">C062</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  Since specifications in general need both a definition for their characters and the semantics associated with these characters, specifications <span class="rfc2119">SHOULD</span> include a reference to the Unicode Standard, whether or not they include a reference to ISO/IEC 10646. </span>

By providing a reference to the Unicode Standard implementers can benefit from the wealth of information provided in the standard and on the Unicode Consortium Web site.

The fact that both ISO/IEC 10646 and the Unicode Standard are evolving (in synchrony) raises the issue of versioning: should a specification refer to a specific version of the standard, or should it make a generic reference, so that the normative reference is to the version current at the time of *reading* the specification? In general the answer is *both*.

<a href="#C063" id="C063"><span class="reqId">C063</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  A generic reference to the Unicode Standard <span class="rfc2119">MUST</span> be made if it is desired that characters allocated after a specification is published are usable with that specification. A specific reference to the Unicode Standard <span class="rfc2119">MAY</span> be included to ensure that functionality depending on a particular version is available and will not change over time. </span>

An example would be the set of characters acceptable as Name characters in XML 1.0 [\[XML 1.0\]](#xml10), which is an enumerated list that parsers must implement to validate names.

<span class="note-head">NOTE: </span>See <http://www.unicode.org/unicode/standard/versions/#Citations> for guidance on referring to specific versions of the Unicode Standard.

A generic reference can be formulated in two ways:

1.  By explicitly including a *generic* entry in the bibliography section of a specification and simply referring to that entry in the body of the specification. Such a generic entry contains text such as "<span class="quote">... as it may from time to time be revised or amended</span>".

2.  By including a *specific* entry in the bibliography and adding text such as "<span class="quote">... as it may from time to time be revised or amended</span>" at the point of reference in the body of the specification.

It is an editorial matter, best left to each specification, which of these two formulations is used. Examples of the first formulation can be found in the bibliography of this specification (see the entries for [\[ISO/IEC 10646\]](#iso10646) and [\[Unicode\]](#unicode)). Examples of the latter, as well as a discussion of the versioning issue with respect to MIME `charset` parameters for UCS encodings, can be found in [\[RFC 3629\]](#rfc3629) and [\[RFC 2781\]](#rfc2781).

<a href="#C064" id="C064"><span class="reqId">C064</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  All *generic* references to the Unicode Standard [\[Unicode\]](#unicode) <span class="rfc2119">MUST</span> refer to the latest version of the Unicode Standard available at the date of publication of the containing specification. </span>

<a href="#C065" id="C065"><span class="reqId">C065</span></a> <span class="req"> <span class="requirement-type">\[S\]</span>  All *generic* references to ISO/IEC 10646 [\[ISO/IEC 10646\]](#iso10646) <span class="rfc2119">MUST</span> refer to the latest version of ISO/IEC 10646 available at the date of publication of the containing specification. </span>

<span id="sec-References"></span>A References
---------------------------------------------

### <span id="sec-NormativeReferences"></span>A.1 Normative References

<span id="iana"></span>IANA  
Internet Assigned Numbers Authority, [Official Names for Character Sets](http://www.iana.org/assignments/character-sets). (See <http://www.iana.org/assignments/character-sets>.)

<span id="iso10646"></span>ISO/IEC 10646  
ISO/IEC 10646:2003, [Information technology -- Universal Multiple-Octet Coded Character Set (UCS)](http://www.iso.ch/iso/en/CatalogueDetailPage.CatalogueDetail?CSNUMBER=39921), as, from time to time, amended, replaced by a new edition or expanded by the addition of new parts. (See <http://www.iso.org/iso/en/ISOOnline.openerpage> for the latest version.)

<span id="MIME-entity"></span>MIME-entity  
N. Freed, N. Borenstein, [Multipurpose Internet Mail Extensions (MIME). Part One: Format of Internet Message Bodies](http://www.ietf.org/rfc/rfc2045.txt), RFC 2045, November 1996, <http://www.ietf.org/rfc/rfc2045.txt>.

<span id="MIME-charset"></span>MIME-charset  
[Multipurpose Internet Mail Extensions (MIME). Part Two: Media Types](http://www.ietf.org/rfc/rfc2045.txt), N. Freed, N. Borenstein, RFC 2046, November 1996, <http://www.ietf.org/rfc/rfc2046.txt>.

<span id="rfc2119"></span>RFC 2119  
S. Bradner, [Key words for use in RFCs to Indicate Requirement Levels](http://www.ietf.org/rfc/rfc2119.txt), IETF RFC 2119. (See <http://www.ietf.org/rfc/rfc2119.txt>.)

<span id="unicode"></span>Unicode  
The Unicode Consortium, [The Unicode Standard, Version 4](http://www.unicode.org/unicode/standard/versions/), ISBN 0-321-18578-1, as updated from time to time by the publication of new versions. (See [http://www.unicode.org/unicode/standard/versions](http://www.unicode.org/unicode/standard/versions/) for the latest version and additional information on versions of the standard and of the Unicode Character Database).

<span id="unicode32"></span>Unicode 3.2  
The Unicode Consortium, [The Unicode Standard, Version 3.2.0](http://www.unicode.org/unicode/standard/versions/enumeratedversions.html#Unicode_3_2_0) is defined by [The Unicode Standard, Version 3.0](http://www.unicode.org/unicode/standard/versions/enumeratedversions.html#Unicode_3_0_0) (Reading, MA, Addison-Wesley, 2000. ISBN 0-201-61633-5), as amended by the [Unicode Standard Annex \#27: Unicode 3.1](http://www.unicode.org/reports/tr27/) (see [http://www.unicode.org/reports/tr27](http://www.unicode.org/reports/tr27/)) and by the [Unicode Standard Annex \#28: Unicode 3.2](http://www.unicode.org/reports/tr28/) (see [http://www.unicode.org/reports/tr28](http://www.unicode.org/reports/tr28/)).

<span id="unicode40"></span>Unicode 4.0  
The Unicode Consortium. [The Unicode Standard, Version 4.0](http://www.unicode.org/versions/Unicode4.0.0/), Reading, MA, Addison-Wesley, 2003. ISBN 0-321-18578-1. (See <http://www.unicode.org/versions/Unicode4.0.0/>)

### <span id="sec-OtherReferences"></span>A.2 Other References

<span id="charnorm"></span>CharNorm  
Martin J. Dürst, François Yergeau, Richard Ishida, Misha Wolf, Tex Texin, Addison Phillips [Character Model for the World Wide Web 1.0: Normalization](http://www.w3.org/TR/charmod-norm/), W3C Working Draft. (See [http://www.w3.org/TR/charmod-norm](http://www.w3.org/TR/charmod-norm/).)

<span id="charmod3"></span>CharIRI  
Martin J. Dürst, François Yergeau, Richard Ishida, Misha Wolf, Tex Texin, [Character Model for the World Wide Web 1.0: Resource Identifiers](http://www.w3.org/TR/charmod-resid/), W3C Candidate Recommendation. (See [http://www.w3.org/TR/charmod-resid](http://www.w3.org/TR/charmod-resid/).)

<span id="CharReq"></span>CharReq  
Martin J. Dürst, [Requirements for String Identity Matching and String Indexing](http://www.w3.org/TR/WD-charreq), W3C Working Draft. (See <http://www.w3.org/TR/WD-charreq>.)

<span id="connolly"></span>Connolly  
D. Connolly, [Character Set Considered Harmful](http://www.w3.org/MarkUp/html-spec/charset-harmful), W3C Note. (See <http://www.w3.org/MarkUp/html-spec/charset-harmful>.)

<span id="css2"></span>CSS2  
Bert Bos, Håkon Wium Lie, Chris Lilley, Ian Jacobs, Eds., [Cascading Style Sheets, level 2](http://www.w3.org/TR/REC-CSS2/) (CSS2 Specification), W3C Recommendation. (See [http://www.w3.org/TR/REC-CSS2](http://www.w3.org/TR/REC-CSS2/).)

<span id="dom1"></span>DOM Level 1  
Vidur Apparao et al., [Document Object Model (DOM) Level 1 Specification](http://www.w3.org/TR/REC-DOM-Level-1/), W3C Recommendation. (See [http://www.w3.org/TR/REC-DOM-Level-1](http://www.w3.org/TR/REC-DOM-Level-1/).)

<span id="html40"></span>HTML 4.0  
Dave Raggett, Arnaud Le Hors, Ian Jacobs, Eds., [HTML 4.0 Specification](http://www.w3.org/TR/REC-html40-971218/), W3C Recommendation, 18-Dec-1997 (See [http://www.w3.org/TR/REC-html40-971218](http://www.w3.org/TR/REC-html40-971218/).)

<span id="html401"></span>HTML 4.01  
Dave Raggett, Arnaud Le Hors, Ian Jacobs, Eds., [HTML 4.01 Specification](http://www.w3.org/TR/html401/), W3C Recommendation. (See [http://www.w3.org/TR/html401](http://www.w3.org/TR/html401/).)

<span id="iso646"></span>ISO/IEC 646  
ISO/IEC 646:1991, Information technology -- ISO 7-bit coded character set for information interchange. This standard defines an International Reference Version (IRV) which corresponds exactly to what is widely known as ASCII or US-ASCII. ISO/IEC 646 was based on the earlier standard ECMA-6. ECMA has maintained its standard up to date with respect to ISO/IEC 646 and makes an electronic copy available at <http://www.ecma-international.org/publications/standards/Ecma-006.htm>

<span id="iso9541"></span>ISO/IEC 9541-1  
ISO/IEC 9541-1:1991, [Information technology -- Font information interchange -- Part 1: Architecture](http://www.iso.ch/iso/en/CatalogueDetailPage.CatalogueDetail?CSNUMBER=17277). (See <http://www.iso.ch/iso/en/CatalogueDetailPage.CatalogueDetail?CSNUMBER=17277> for the latest version.)

<span id="iso14651"></span>ISO/IEC 14651  
ISO/IEC 14651:2000, [Information technology -- International string ordering and comparison -- Method for comparing character strings and description of the common template tailorable ordering](http://www.iso.org/iso/en/ISOOnline.openerpage) as, from time to time, amended, replaced by a new edition or expanded by the addition of new parts. (See <http://www.iso.org/iso/en/ISOOnline.openerpage> for the latest version.)

<span id="mathml2"></span>MathML2  
David Carlisle, Patrick Ion, Robert Miner, Nico Poppelier, Eds., [Mathematical Markup Language (MathML) Version 2.0](http://www.w3.org/TR/MathML2/), W3C Recommendation. (See [http://www.w3.org/TR/MathML2](http://www.w3.org/TR/MathML2/).)

<span id="Nicol"></span>Nicol  
Gavin Nicol, [The Multilingual World Wide Web](http://www.mind-to-mind.com/library/papers/multilingual/multilingual-www.html), Chapter 2: The WWW As A Multilingual Application. (See <http://www.mind-to-mind.com/library/papers/multilingual/multilingual-www.html>.)

<span id="rfc2070"></span>RFC 2070  
F. Yergeau, G. Nicol, G. Adams, M. Dürst, [Internationalization of the Hypertext Markup Language](http://www.ietf.org/rfc/rfc2070.txt), IETF RFC 2070, January 1997. (See <http://www.ietf.org/rfc/rfc2070.txt>.)

<span id="rfc2277"></span>RFC 2277  
H. Alvestrand, [IETF Policy on Character Sets and Languages](http://www.ietf.org/rfc/rfc2277.txt), IETF RFC 2277, BCP 18, January 1998. (See <http://www.ietf.org/rfc/rfc2277.txt>.)

<span id="RFC2978"></span>RFC 2978  
N. Freed, J. Postel, [IANA Charset Registration Procedures](http://www.ietf.org/rfc/rfc3629.txt), IETF RFC 2978, BCP 19, October 2000. (See <http://www.ietf.org/rfc/rfc2978.txt>.)

<span id="rfc3629"></span>RFC 3629  
F. Yergeau, [UTF-8, a transformation format of ISO 10646](http://www.ietf.org/rfc/rfc3629.txt), IETF RFC 3629, STD 63, November 2003. (See <http://www.ietf.org/rfc/rfc3629.txt>.)

<span id="rfc2781"></span>RFC 2781  
P. Hoffman, F. Yergeau, [UTF-16, an encoding of ISO 10646](http://www.ietf.org/rfc/rfc2781.txt), IETF RFC 2781, February 2000. (See <http://www.ietf.org/rfc/rfc2781.txt>.)

<span id="spread"></span>SPREAD  
[SPREAD - Standardization Project for East Asian Documents Universal Public Entity Set](http://xml.ascc.net/resource/entities/index.html). (See [http://www.ascc.net/xml/resource/entities/index.html](http://xml.ascc.net/resource/entities/index.html))

<span id="svg"></span>SVG  
Jon Ferraiolo, 藤沢 淳 (FUJISAWA Jun), Dean Jackson, Ed., [Scalable Vector Graphics (SVG) 1.1 Specification](http://www.w3.org/TR/SVG/), W3C Recommendation. (See [http://www.w3.org/TR/SVG](http://www.w3.org/TR/SVG/).)

<span id="UTR10"></span>UTR \#10  
Mark Davis, Ken Whistler, [Unicode Collation Algorithm](http://www.unicode.org/unicode/reports/tr10/), Unicode Technical Report \#10. (See [http://www.unicode.org/unicode/reports/tr10](http://www.unicode.org/unicode/reports/tr10/).)

<span id="UTR17"></span>UTR \#17  
Ken Whistler, Mark Davis, [Character Encoding Model](http://www.unicode.org/unicode/reports/tr17/), Unicode Technical Report \#17. (See [http://www.unicode.org/unicode/reports/tr17](http://www.unicode.org/unicode/reports/tr17/).)

<span id="UTR29"></span>UTR \#29  
Mark Davis, [Text Boundaries](http://www.unicode.org/unicode/reports/tr29/), Unicode Standard Annex \#29. (See [http://www.unicode.org/unicode/reports/tr29](http://www.unicode.org/unicode/reports/tr29/) for the latest version).

<span id="UXML"></span>UXML  
Martin Dürst and Asmus Freytag, [Unicode in XML and other Markup Languages](http://www.w3.org/TR/unicode-xml/), Unicode Technical Report \#20 and W3C Note. (See [http://www.w3.org/TR/unicode-xml](http://www.w3.org/TR/unicode-xml/).)

<span id="xml10"></span>XML 1.0  
Tim Bray, Jean Paoli, C. M. Sperberg-McQueen, Eve Maler, François Yergeau, Eds., [Extensible Markup Language (XML) 1.0](http://www.w3.org/TR/REC-xml/), W3C Recommendation. (See [http://www.w3.org/TR/REC-xml](http://www.w3.org/TR/REC-xml/).)

<span id="XML_Japanese_profile"></span>XML Japanese Profile  
MURATA Makoto Ed., [XML Japanese Profile](http://www.w3.org/TR/japanese-xml/), W3C Note. (See [http://www.w3.org/TR/japanese-xml](http://www.w3.org/TR/japanese-xml/).)

<span id="xpath"></span>XPath  
James Clark, Steve DeRose, Eds, [XML Path Language (XPath) Version 1.0](http://www.w3.org/TR/xpath), W3C Recommendation. (See <http://www.w3.org/TR/xpath>.)

<span id="sec-CharExamples"></span>B Examples of Characters, Keystrokes and Glyphs (Non-Normative)
--------------------------------------------------------------------------------------------------

A few examples will help make sense all this complexity of text in computers (which is mostly a reflection of the complexity of human writing systems). Let us start with a very simple example: a user, equipped with a US-English keyboard, types "<span class="quote">Foo</span>", which the computer encodes as 16-bit values (the UTF-16 encoding of Unicode) and displays on the screen.

Keystrokes

Shift-f

o

o

Input characters

F

o

o

Encoded characters (byte values in hex)

0046

006F

006F

Display

Foo

Example: Basic Latin

The only complexity here is the use of a modifier (Shift) to input the capital '<span class="qchar">F</span>'.

A slightly more complex example is a user typing '<span class="qchar">çé</span>' on a traditional French-Canadian keyboard, which the computer again encodes in UTF-16 and displays. We assume that this particular computer uses a fully composed form of UTF-16.

Keystrokes

¸

c

é

Input characters

ç

é

Encoded characters (byte values in hex)

00E7

00E9

Display

çé

Example: Latin with diacritics

A few interesting things are happening here: when the user types the cedilla ('<span class="qchar">¸</span>'), nothing happens except for a change of state of the keyboard driver; the cedilla is a <span class="new-term">dead key</span>. When the driver gets the c keystroke, it provides a complete '<span class="qchar">ç</span>' character to the system, which represents it as a single 16-bit [code unit](#def-CEF) and displays a '<span class="qchar">ç</span>' [glyph](#def-glyph). The user then presses the dedicated '<span class="qchar">é</span>' key, which results in, again, a character represented by two bytes. Most systems will display this as one glyph, but it is also possible to combine two glyphs (the base letter and the accent) to obtain the same rendering.

On to a Japanese example: our user employs a <span class="new-term">romaji input method</span> to type '<span class="qterm">日本語</span>' (U+65E5, U+672C, U+8A9E), which the computer encodes in UTF-16 and displays.

Keystrokes

n i h o n g o &lt;space&gt; &lt;return&gt;

Input characters

日

本

語

Encoded characters (byte values in hex)

65E5

672C

8A9E

Display

[<img src="images/nihongo.gif" alt="Three Kanji characters, U+65E5, U+672C, U+8A9E, pronounced &#39;nihongo&#39;." width="47" height="16" />](#nihongo)

Example: Japanese

The interesting aspect here is input: the user types Latin characters, which are converted on the fly to kana (not shown here), and then to kanji when the user requests conversion by pressing &lt;space&gt;; the kanji characters are finally sent to the application when the user presses &lt;return&gt;. The user has to type a total of nine keystrokes before the three characters are produced, which are then encoded and displayed rather trivially.

A Persian example, using Arabic script, will show different phenomena:

Keystrokes

<img src="images/fa-lam.gif" alt="ARABIC LETTER LAM" width="16" height="23" />

<img src="images/fa-alif.gif" alt="ARABIC LETTER ALEF" width="7" height="23" />

<img src="images/fa-lamalif.gif" alt="Arabic ligature &#39;lam-alef&#39;." width="16" height="23" />

<img src="images/fa-yeh.gif" alt="ARABIC LETTER FARSI YEH" width="20" height="23" />

<img src="images/fa-yeh.gif" alt="ARABIC LETTER FARSI YEH" width="20" height="23" />

Input characters

ل

ا

ل

ا

ی

ی

Encoded characters (byte values in hex)

0644

0627

0644

0627

06CC

06CC

Display

[<img src="images/fa-laalaayee.gif" alt="The displayed output appears, from right to left, as: two lam-alef ligatures, and initial farsi yeh glyph attached to a final farsi yeh glyph." width="53" height="23" />](#arabicLigature)

Example: Persian

Here the first two keystrokes each produce an input character and an encoded character, but the pair is displayed as a single glyph ('<img src="images/fa-lamalif.gif" alt="Arabic ligature &#39;lam-alef&#39;." width="16" height="23" />', a lam-alef ligature). The next keystroke is a lam-alef, which some Arabic script keyboards have; it produces the same two characters which are displayed similarly, but this second lam-alef is placed to the *left* of the first one when displayed. The last two keystrokes produce two identical characters which are rendered by two different glyphs (a medial form followed to its left by a final form). We thus have 5 keystrokes producing 6 characters and 4 glyphs laid out right-to-left.

A final example in Tamil, typed with an ISCII keyboard, will illustrate some additional phenomena:

Keystrokes

<img src="images/ta-tm.gif" alt="TAMIL LETTER TTA" width="22" height="14" />

<img src="images/a-tm.gif" alt="TAMIL VOWEL SIGN AA" width="26" height="15" />

<img src="images/nga-tm.gif" alt="TAMIL LETTER NGA" width="21" height="14" />

<img src="images/virama-tm.gif" alt="TAMIL SIGN VIRAMA" width="17" height="16" />

<img src="images/ka-tm.gif" alt="TAMIL LETTER KA" width="17" height="14" />

<img src="images/o-tm.gif" alt="TAMIL VOWEL SIGN OO" width="40" height="17" />

Input characters

ட

ா

ங

்

க

ோ

Encoded characters (byte values in hex)

0B9F

0BBE

0B99

0BCD

0B95

0BCB

Display

[<img src="images/tango.gif" alt="&#39;Tango&#39; in Tamil letters." width="82" height="17" />](#tamil)

Example: Tamil

Here input is straightforward, but note that contrary to the preceding accented Latin example, the virama diacritic '<span class="qchar"> ்</span>' (U+0BCD) is entered *after* the '<span class="qchar">ங</span>' (U+0B99) to which it applies. Rendering is interesting for the last two characters. The last one '<span class="qchar"> ோ</span>' (U+0BCB) clearly consists of two glyphs which *surround* the glyph of the next to last character '<span class="qchar">க</span>' (U+0B95).

<span id="sec-ExampleText"></span>C Example text (Non-Normative)
----------------------------------------------------------------

The following are textual versions of strings or characters used in image-based examples in this document. They are provided here for the benefit of those who want to cut and paste the text for their own testing.

1.  Section: [**3.3 Units of visual rendering**](#sec-VisualRenderingUnits)

    Example: <img src="images/logSelMemory.gif" alt="An example showing the logical order of characters in a string containing two Arabic words followed by a year number. In logical selection mode, the range of characters selected by starting the selection in the middle of the second word and ending in the middle of the year number is depicted using highlighting. The highlighting covers a single block of contiguous characters." width="323" height="27" />

    Text: عدد مارس ١٩٩٨

2.  Section: [**6.1 String concepts**](#sec-Strings)

    Example: <img src="images/chineseSurrogate.gif" alt="Ideographic supplementary character: Archaic Chinese character meaning &quot;the stump of a tree&quot; (still in current use in Cantonese)" width="24" height="25" /><img src="images/not_equal.gif" alt="NOT EQUAL TO" width="25" height="26" /><img src="images/Q.gif" alt="LATIN SMALL LETTER Q" width="14" height="21" /><img src="images/caron.gif" alt="COMBINING CARON" width="14" height="21" />

    Text: 𣎴≠q̌

3.  Section: [**B Examples of Characters, Keystrokes and Glyphs**](#sec-CharExamples)

    Example: <img src="images/nihongo.gif" alt="Three Kanji characters, U+65E5, U+672C, U+8A9E, pronounced &#39;nihongo&#39;." width="47" height="16" />

    Text: 日本語

4.  Section: [**B Examples of Characters, Keystrokes and Glyphs**](#sec-CharExamples)

    Example: <img src="images/arabe.gif" alt="The displayed output appears, from right to left, as: two lam-alef ligatures, and initial ghayn glyph attached to a final ghayn glyph." width="42" height="26" />

    Text: لالاغغ

5.  Section: [**B Examples of Characters, Keystrokes and Glyphs**](#sec-CharExamples)

    Example: <img src="images/tango.gif" alt="&#39;Tango&#39; in Tamil letters." width="82" height="17" />

    Text: டாங்கோ

<span id="sec-Checklist"></span>D List of conformance criteria (Non-Normative)
------------------------------------------------------------------------------

This is a list of the conformance criteria in this specification, in document order. This list can be used to check specifications, implementations, and content for conformance to this specification.

When doing so, the following points should be kept in mind:

-   To ensure that you understand the meaning, read the whole document first. Use this list as a quick reference only after having first read the conformance criteria in context in the main body of the text.

-   If the meaning of a conformance criterion in this list is still unclear after referring back to the surrounding text in the main body of the document, consider sending a comment to www-i18n-comments@w3.org ([publicly archived](http://lists.w3.org/Archives/Public/www-i18n-comments/)).

-   Not all conformance criteria apply to all specifications, implementations, or content. Before checking for actual conformance, applicability should be checked. As an example, C010 only applies to specifications. As another example, C002 applies to specifications, implementations, and content, but only if it deals with mapping between characters and units of displayed text.

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><tbody><tr class="odd"><td><a href="#C001">C001</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> <span class="requirement-type">[C]</span> </td><td>Specifications, software and content <span class="rfc2119">MUST NOT</span> require or depend on a one-to-one correspondence between characters and the sounds of a language.</td></tr><tr class="even"><td><a href="#C002">C002</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> <span class="requirement-type">[C]</span> </td><td>Specifications, software and content <span class="rfc2119">MUST NOT</span> require or depend on a one-to-one mapping between characters and units of displayed text.</td></tr><tr class="odd"><td><a href="#C003">C003</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> <span class="requirement-type">[C]</span> </td><td>Protocols, data formats and APIs <span class="rfc2119">MUST</span> store, interchange or process text data in logical order.</td></tr><tr class="even"><td><a href="#C075">C075</a></td><td><span class="requirement-type">[I]</span> </td><td>Independent of whether some implementation uses logical selection or visual selection, characters selected <span class="rfc2119">MUST</span> be kept in logical order in storage.</td></tr><tr class="odd"><td><a href="#C004">C004</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications of protocols and APIs that involve selection of ranges <span class="rfc2119">SHOULD</span> provide for discontiguous logical selections, at least to the extent necessary to support implementation of visual selection on screen on top of those protocols and APIs.</td></tr><tr class="even"><td><a href="#C005">C005</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> </td><td>Specifications and software <span class="rfc2119">MUST NOT</span> require nor depend on a single keystroke resulting in a single character, nor that a single character be input with a single keystroke (even with modifiers), nor that keyboards are the same all over the world.</td></tr><tr class="odd"><td><a href="#C006">C006</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> </td><td>Software that sorts or searches text for users <span class="rfc2119">SHOULD</span> do so on the basis of appropriate collation units and ordering rules for the relevant language and/or application.</td></tr><tr class="even"><td><a href="#C007">C007</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> </td><td>Where searching or sorting is done dynamically, particularly in a multilingual environment, the 'relevant language' <span class="rfc2119">SHOULD</span> be determined to be that of the current user, and may thus differ from user to user.</td></tr><tr class="odd"><td><a href="#C066">C066</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> </td><td>Software that allows users to sort or search text <span class="rfc2119">SHOULD</span> allow the user to select alternative rules for collation units and ordering.</td></tr><tr class="even"><td><a href="#C008">C008</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> </td><td>Specifications and implementations of sorting and searching algorithms <span class="rfc2119">SHOULD</span> accommodate text that contains any character in Unicode.</td></tr><tr class="odd"><td><a href="#C009">C009</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> </td><td>Specifications, software and content <span class="rfc2119">MUST NOT</span> require or depend on a one-to-one relationship between characters and units of physical storage.</td></tr><tr class="even"><td><a href="#C010">C010</a></td><td><span class="requirement-type">[S]</span> </td><td>When specifications use the term '<span class="qterm">character</span>' the specifications <span class="rfc2119">MUST</span> define which meaning they intend.</td></tr><tr class="odd"><td><a href="#C067">C067</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">SHOULD</span> use specific terms, when available, instead of the general term 'character'.</td></tr><tr class="even"><td><a href="#C013">C013</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[C]</span> </td><td>Textual data objects defined by protocol or format specifications <span class="rfc2119">MUST</span> be in a <em>single</em> character encoding.</td></tr><tr class="odd"><td><a href="#C014">C014</a></td><td><span class="requirement-type">[S]</span> </td><td>All specifications that involve processing of text <span class="rfc2119">MUST</span> specify the processing of text according to the <a href="#sec-RefProcModel">Reference Processing Model</a>, namely:<ol type="1"><li><p>Specifications <span class="rfc2119">MUST</span> define text in terms of Unicode characters, not bytes or <a href="#def-glyph">glyphs</a>.</p></li><li><p>For their textual data objects specifications <span class="rfc2119">MAY</span> allow use of any character encoding which can be transcoded to a Unicode encoding form.</p></li><li><p>Specifications <span class="rfc2119">MAY</span> choose to disallow or deprecate some character encodings and to make others mandatory. Independent of the actual character encoding, the specified behavior <span class="rfc2119">MUST</span> be the same <em>as if</em> the processing happened as follows:</p><ul><li><p>The character encoding of any textual data object received by the application implementing the specification <span class="rfc2119">MUST</span> be determined and the data object <span class="rfc2119">MUST</span> be interpreted as a sequence of Unicode characters - this <span class="rfc2119">MUST</span> be equivalent to <a href="#def-transcoding">transcoding</a> the data object to some <a href="#Unicode_Encoding_Form">Unicode encoding form</a>, adjusting any character encoding label if necessary, and receiving it in that Unicode encoding form.</p></li><li><p>All processing <span class="rfc2119">MUST</span> take place on this sequence of Unicode characters.</p></li><li><p>If text is output by the application, the sequence of Unicode characters <span class="rfc2119">MUST</span> be encoded using a character encoding chosen among those allowed by the specification.</p></li></ul></li><li><p>If a specification is such that multiple textual data objects are involved (such as an XML document referring to external parsed entities), it <span class="rfc2119">MAY</span> choose to allow these data objects to be in different character encodings. In all cases, the <a href="#sec-RefProcModel">Reference Processing Model</a> <span class="rfc2119">MUST</span> be applied to all textual data objects.</p></li></ol></td></tr><tr class="even"><td><a href="#C070">C070</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">SHOULD NOT</span> <em>arbitrarily</em> exclude code points from the full range of Unicode <a href="#def-CCS">code points</a> from U+0000 to U+10FFFF inclusive.</td></tr><tr class="odd"><td><a href="#C077">C077</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">MUST NOT</span> allow code points above U+10FFFF.</td></tr><tr class="even"><td><a href="#C079">C079</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">SHOULD NOT</span> allow the use of codepoints reserved by Unicode for internal use.</td></tr><tr class="odd"><td><a href="#C078">C078</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">MUST NOT</span> allow the use of surrogate code points.</td></tr><tr class="even"><td><a href="#C015">C015</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">MUST</span> either specify a unique character encoding, or provide character encoding identification mechanisms such that the encoding of text can be reliably identified.</td></tr><tr class="odd"><td><a href="#C016">C016</a></td><td><span class="requirement-type">[S]</span> </td><td>When designing a new protocol, format or API, specifications <span class="rfc2119">SHOULD</span> require a unique character encoding.</td></tr><tr class="even"><td><a href="#C017">C017</a></td><td><span class="requirement-type">[S]</span> </td><td>When basing a protocol, format, or API on a protocol, format, or API that already has rules for character encoding, specifications <span class="rfc2119">SHOULD</span> use rather than change these rules.</td></tr><tr class="odd"><td><a href="#C018">C018</a></td><td><span class="requirement-type">[S]</span> </td><td>When a unique character encoding is required, the character encoding <span class="rfc2119">MUST</span> be UTF-8, UTF-16 or UTF-32.</td></tr><tr class="even"><td><a href="#C020">C020</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">SHOULD</span> avoid using the terms '<span class="qterm">character set</span>' and '<span class="qterm">charset</span>' to refer to a character encoding, except when the latter is used to refer to the MIME <code class="keyword">charset</code> parameter or its IANA-registered values. The term '<span class="qterm">character encoding</span>', or in specific cases the terms '<span class="qterm">character encoding form</span>' or '<span class="qterm">character encoding scheme</span>', are <span class="rfc2119">RECOMMENDED</span>.</td></tr><tr class="odd"><td><a href="#C021">C021</a></td><td><span class="requirement-type">[S]</span> </td><td>If the unique encoding approach is not taken, specifications <span class="rfc2119">SHOULD</span> require the use of the IANA charset registry names, and in particular the names identified in the registry as '<span class="qterm">MIME preferred names</span>', to designate character encodings in protocols, data formats and APIs.</td></tr><tr class="even"><td><a href="#C022">C022</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> <span class="requirement-type">[C]</span> </td><td>Character encodings that are not in the IANA registry <span class="rfc2119">SHOULD NOT</span> be used, except by private agreement.</td></tr><tr class="odd"><td><a href="#C023">C023</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> <span class="requirement-type">[C]</span> </td><td>If an unregistered character encoding is used, the convention of using '<span class="qterm">x-</span>' at the beginning of the name <span class="rfc2119">MUST</span> be followed.</td></tr><tr class="even"><td><a href="#C049">C049</a></td><td><span class="requirement-type">[I]</span> <span class="requirement-type">[C]</span> </td><td>The character encoding of content <span class="rfc2119">SHOULD</span> be chosen so that it maximizes the opportunity to directly represent characters (ie. minimizes the need to represent characters by <a href="#def-char-data">markup</a> means such as <a href="#def-char-escape">character escapes</a>) while avoiding obscure encodings that are unlikely to be understood by recipients.</td></tr><tr class="odd"><td><a href="#C034">C034</a></td><td><span class="requirement-type">[C]</span> </td><td>If facilities are offered for identifying character encoding, content MUST make use of them; where the facilities offered for character encoding identification include defaults (e.g. in XML 1.0 <a href="#xml10">[XML 1.0]</a>), relying on such defaults is sufficient to satisfy this identification requirement.</td></tr><tr class="even"><td><a href="#C024">C024</a></td><td><span class="requirement-type">[I]</span> <span class="requirement-type">[C]</span> </td><td>Content and software that label text data <span class="rfc2119">MUST</span> use one of the names required by the appropriate specification (e.g. the XML specification when editing XML text) and <span class="rfc2119">SHOULD</span> use the MIME preferred name of a character encoding to label data in that character encoding.</td></tr><tr class="odd"><td><a href="#C025">C025</a></td><td><span class="requirement-type">[I]</span> <span class="requirement-type">[C]</span> </td><td>An IANA-registered <code class="keyword">charset</code> name <span class="rfc2119">MUST NOT</span> be used to label text data in a character encoding other than the one identified in the IANA registration of that name.</td></tr><tr class="even"><td><a href="#C026">C026</a></td><td><span class="requirement-type">[S]</span> </td><td>If the unique encoding approach is not chosen, specifications <span class="rfc2119">MUST</span> designate at least one of the UTF-8 and UTF-16 encoding forms of Unicode as admissible character encodings and <span class="rfc2119">SHOULD</span> choose at least one of UTF-8 or UTF-16 as required encoding forms (encoding forms that <span class="rfc2119">MUST</span> be supported by implementations of the specification).</td></tr><tr class="odd"><td><a href="#C027">C027</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications that require a default encoding <span class="rfc2119">MUST</span> define either UTF-8 or UTF-16 as the default, or both if they define suitable means of distinguishing them.</td></tr><tr class="even"><td><a href="#C028">C028</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">MUST NOT</span> propose the use of heuristics to determine the encoding of data.</td></tr><tr class="odd"><td><a href="#C029">C029</a></td><td><span class="requirement-type">[I]</span> </td><td><em>Receiving</em> software <span class="rfc2119">MUST</span> determine the encoding of data from available information according to appropriate specifications.</td></tr><tr class="even"><td><a href="#C030">C030</a></td><td><span class="requirement-type">[I]</span> </td><td>When an IANA-registered <code class="keyword">charset</code> name is recognized, receiving software <span class="rfc2119">MUST</span> interpret the received data according to the encoding associated with the name in the IANA registry.</td></tr><tr class="odd"><td><a href="#C031">C031</a></td><td><span class="requirement-type">[I]</span> </td><td>When no charset is provided receiving software <span class="rfc2119">MUST</span> adhere to the default character encoding(s) specified in the specification.</td></tr><tr class="even"><td><a href="#C035">C035</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">MUST</span> define conflict-resolution mechanisms (e.g. priorities) for cases where there is multiple or conflicting information about character encoding.</td></tr><tr class="odd"><td><a href="#C033">C033</a></td><td><span class="requirement-type">[I]</span> </td><td>Software <span class="rfc2119">MUST</span> completely implement the mechanisms for character encoding identification and conflict resolution.</td></tr><tr class="even"><td><a href="#C073">C073</a></td><td><span class="requirement-type">[C]</span> </td><td>Publicly interchanged content <span class="rfc2119">SHOULD NOT</span> use codepoints in the private use area.</td></tr><tr class="odd"><td><a href="#C076">C076</a></td><td><span class="requirement-type">[C]</span> </td><td>Content <span class="rfc2119">MUST NOT</span> use a code point for any purpose other than that defined by its coded character set.</td></tr><tr class="even"><td><a href="#C038">C038</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">MUST NOT</span> require the use of private use area characters with particular assignments.</td></tr><tr class="odd"><td><a href="#C039">C039</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">MUST NOT</span> require the use of mechanisms for defining agreements of private use code points.</td></tr><tr class="even"><td><a href="#C040">C040</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> </td><td>Specifications and implementations <span class="rfc2119">SHOULD NOT</span> disallow the use of private use code points by private agreement.</td></tr><tr class="odd"><td><a href="#C041">C041</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">MAY</span> define <a href="#def-char-data">markup</a> to allow the transmission of symbols not in Unicode or to identify specific variants of Unicode characters.</td></tr><tr class="even"><td><a href="#C068">C068</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">SHOULD</span> allow the inclusion of or reference to pictures and graphics where appropriate, to eliminate the need to (mis)use character-oriented mechanisms for pictures or graphics.</td></tr><tr class="odd"><td><a href="#C042">C042</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">SHOULD NOT</span> invent a new escaping mechanism if an appropriate one already exists.</td></tr><tr class="even"><td><a href="#C043">C043</a></td><td><span class="requirement-type">[S]</span> </td><td>The number of different ways to escape a character <span class="rfc2119">SHOULD</span> be minimized (ideally to one).</td></tr><tr class="odd"><td><a href="#C044">C044</a></td><td><span class="requirement-type">[S]</span> </td><td>Escape syntax <span class="rfc2119">SHOULD</span> require either explicit end delimiters or a fixed number of characters in each character escape. Escape syntaxes where the end is determined by any character outside the set of characters admissible in the character escape itself <span class="rfc2119">SHOULD</span> be avoided.</td></tr><tr class="even"><td><a href="#C045">C045</a></td><td><span class="requirement-type">[S]</span> </td><td>Whenever specifications define character escapes that allow the representation of characters using a number, the number <span class="rfc2119">MUST</span> represent the Unicode code point of the character and <span class="rfc2119">SHOULD</span> be in hexadecimal notation.</td></tr><tr class="odd"><td><a href="#C046">C046</a></td><td><span class="requirement-type">[S]</span> </td><td>Escaped characters <span class="rfc2119">SHOULD</span> be acceptable wherever their unescaped forms are; this does not preclude that <a href="#def-syntax-significant">syntax-significant</a> characters, when escaped, lose their significance in the syntax. In particular, if a character is acceptable in identifiers and comments, then its escaped form should also be acceptable.</td></tr><tr class="even"><td><a href="#C047">C047</a></td><td><span class="requirement-type">[I]</span> <span class="requirement-type">[C]</span> </td><td>Escapes <span class="rfc2119">SHOULD</span> only be used when the characters to be expressed are not directly representable in the format or the character encoding of the document, or when the visual representation of the character is unclear.</td></tr><tr class="odd"><td><a href="#C048">C048</a></td><td><span class="requirement-type">[I]</span> <span class="requirement-type">[C]</span> </td><td>Content <span class="rfc2119">SHOULD</span> use the hexadecimal form of character escapes rather than the decimal form when there are both.</td></tr><tr class="even"><td><a href="#C050">C050</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">SHOULD</span> exclude compatibility characters in the syntactic elements (markup, delimiters, identifiers) of the formats they define.</td></tr><tr class="odd"><td><a href="#C011">C011</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">SHOULD NOT</span> define a string as a '<span class="qterm">byte string</span>'.</td></tr><tr class="even"><td><a href="#C012">C012</a></td><td><span class="requirement-type">[S]</span> </td><td>The '<span class="qterm">character string</span>' definition <span class="rfc2119">SHOULD</span> be used by most specifications.</td></tr><tr class="odd"><td><a href="#C051">C051</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> </td><td>The <a href="#def-character-string">character string</a> is <span class="rfc2119">RECOMMENDED</span> as a basis for string indexing.</td></tr><tr class="even"><td><a href="#C052">C052</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> </td><td>A <a href="#def-physical-string">code unit string</a> <span class="rfc2119">MAY</span> be used as a basis for string indexing if this results in a significant improvement in the efficiency of internal operations when compared to the use of <a href="#def-character-string">character string</a>.</td></tr><tr class="odd"><td><a href="#C071">C071</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> </td><td><a href="#def-grapheme-string">Grapheme clusters</a> <span class="rfc2119">MAY</span> be used as a basis for string indexing in applications where user interaction is the primary concern.</td></tr><tr class="even"><td><a href="#C074">C074</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications that define indexing in terms of grapheme clusters <span class="rfc2119">MUST</span> either: a) define grapheme clusters in terms of default grapheme clusters as defined in Unicode Standard Annex #29, Text Boundaries <a href="#UTR29">[UTR #29]</a>, or b) define specifically how tailoring is applied to the indexing operation.</td></tr><tr class="odd"><td><a href="#C072">C072</a></td><td><span class="requirement-type">[S]</span> <span class="requirement-type">[I]</span> </td><td>The use of <a href="#def-byte-string">byte strings</a> for indexing is <span class="rfc2119">NOT RECOMMENDED</span>.</td></tr><tr class="even"><td><a href="#C053">C053</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications that need a way to identify substrings or point within a string <span class="rfc2119">SHOULD</span> provide ways other than string indexing to perform this operation.</td></tr><tr class="odd"><td><a href="#C054">C054</a></td><td><span class="requirement-type">[I]</span> <span class="requirement-type">[C]</span> </td><td>Users of specifications (software developers, content developers) <span class="rfc2119">SHOULD</span> whenever possible prefer ways other than string indexing to identify substrings or point within a string.</td></tr><tr class="even"><td><a href="#C055">C055</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications <span class="rfc2119">SHOULD</span> understand and process single characters as substrings, and treat indices as boundary positions <em>between</em> counting units, regardless of the choice of counting units.</td></tr><tr class="odd"><td><a href="#C056">C056</a></td><td><span class="requirement-type">[S]</span> </td><td>Specifications of APIs <span class="rfc2119">SHOULD NOT</span> specify single characters or single '<span class="qterm">units of encoding</span>' as argument or return types.</td></tr><tr class="even"><td><a href="#C057">C057</a></td><td><span class="requirement-type">[S]</span> </td><td>When the positions between the units are counted for string indexing, starting with an index of 0 for the position at the start of the string is the <span class="rfc2119">RECOMMENDED</span> solution, with the last index then being equal to the number of counting units in the string.</td></tr><tr class="odd"><td><a href="#C062">C062</a></td><td><span class="requirement-type">[S]</span> </td><td>Since specifications in general need both a definition for their characters and the semantics associated with these characters, specifications <span class="rfc2119">SHOULD</span> include a reference to the Unicode Standard, whether or not they include a reference to ISO/IEC 10646.</td></tr><tr class="even"><td><a href="#C063">C063</a></td><td><span class="requirement-type">[S]</span> </td><td>A generic reference to the Unicode Standard <span class="rfc2119">MUST</span> be made if it is desired that characters allocated after a specification is published are usable with that specification. A specific reference to the Unicode Standard <span class="rfc2119">MAY</span> be included to ensure that functionality depending on a particular version is available and will not change over time.</td></tr><tr class="odd"><td><a href="#C064">C064</a></td><td><span class="requirement-type">[S]</span> </td><td>All <em>generic</em> references to the Unicode Standard <a href="#unicode">[Unicode]</a> <span class="rfc2119">MUST</span> refer to the latest version of the Unicode Standard available at the date of publication of the containing specification.</td></tr><tr class="even"><td><a href="#C065">C065</a></td><td><span class="requirement-type">[S]</span> </td><td>All <em>generic</em> references to ISO/IEC 10646 <a href="#iso10646">[ISO/IEC 10646]</a> <span class="rfc2119">MUST</span> refer to the latest version of ISO/IEC 10646 available at the date of publication of the containing specification.</td></tr></tbody></table>

<span id="sec-Changes"></span>E Changes since the Proposed Recommendation (Non-Normative)
-----------------------------------------------------------------------------------------

-   A small number of links and references were updated in the references section.

-   Minor editorial change to paragraph after C076 to clarify: "This prohibits, for example, the construction of fonts that misuse the repertoire encoded by iso-8859-1 to represent different scripts, characters, or symbols than what is actually encoded in iso-8859-1." changed to "This prohibits, for example, the construction of fonts that misuse the codepoints in the ISO Latin 1 character set to represent different scripts, characters, or symbols than those actually encoded in iso-8859-1.".

<span id="sec-Acknowledgements"></span>F Acknowledgements (Non-Normative)
-------------------------------------------------------------------------

Tim Berners-Lee and James Clark provided important details in the section on URIs. Asmus Freytag , Addison Phillips, and in early stages Ian Jacobs, provided significant help in the authoring and editing process. The W3C I18N WG and IG, as well as many others, provided many helpful comments and suggestions.