[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

<span id="title"></span>Extensible Markup Language (XML) 1.1 (Second Edition)
=============================================================================

<span id="w3c-doctype"></span>W3C Recommendation 16 August 2006, edited in place 29 September 2006
--------------------------------------------------------------------------------------------------

This version:  
<http://www.w3.org/TR/2006/REC-xml11-20060816>

Latest version:  
<http://www.w3.org/TR/xml11>

Previous version:  
<http://www.w3.org/TR/2006/PER-xml11-20060614>

Editors:  
Tim Bray, Textuality and Netscape [&lt;tbray@textuality.com&gt;](mailto:tbray@textuality.com)

Jean Paoli, Microsoft [&lt;jeanpa@microsoft.com&gt;](mailto:jeanpa@microsoft.com)

C. M. Sperberg-McQueen, W3C [&lt;cmsmcq@w3.org&gt;](mailto:cmsmcq@w3.org)

Eve Maler, Sun Microsystems, Inc. [&lt;eve.maler@east.sun.com&gt;](mailto:elm@east.sun.com)

François Yergeau

John Cowan [&lt;cowan@ccil.org&gt;](mailto:cowan@ccil.org)

Please refer to the [**errata**](http://www.w3.org/XML/xml-V11-2e-errata) for this document, which may include some normative corrections.

The [previous errata](http://www.w3.org/XML/xml-V11-1e-errata) for this document, are also available.

See also [**translations**](http://www.w3.org/2003/03/Translations/byTechnology?technology=xml11).

This document is also available in these non-normative formats: [XML](REC-xml11-20060816.xml) and [XHTML with color-coded revision indicators](REC-xml11-20060816-review.html).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2006 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span id="abstract"></span>Abstract
-----------------------------------

The Extensible Markup Language (XML) is a subset of SGML that is completely described in this document. Its goal is to enable generic SGML to be served, received, and processed on the Web in the way that is now possible with HTML. XML has been designed for ease of implementation and for interoperability with both SGML and HTML.

<span id="status"></span>Status of this Document
------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

This document specifies a syntax created by subsetting an existing, widely used international text processing standard (Standard Generalized Markup Language, ISO 8879:1986(E) as amended and corrected) for use on the World Wide Web. It is a product of the [XML Core Working Group](http://www.w3.org/XML/Core/) as part of the [XML Activity](http://www.w3.org/XML/Activity).

On 29 September 2006 this document was edited in place to remove a number of spurious and potentially misleading spaces.

The English version of this specification is the only normative version. However, for translations of this document, see <http://www.w3.org/2003/03/Translations/byTechnology?technology=xml11>.

This document is a [W3C Recommendation](http://www.w3.org/2005/10/Process-20051014/tr.html#q74). This second edition is *not* a new version of XML. As a convenience to readers, it incorporates the changes dictated by the accumulated errata (available at <http://www.w3.org/XML/xml-V11-1e-errata>) to the [First Edition of XML 1.1, dated 4 February 2004](http://www.w3.org/TR/2004/REC-xml11-20040204/). In addition, the markup introduced to clarify when prescriptive keywords are used in the formal sense defined in [\[IETF RFC 2119\]](#rfc2119), has been modified to better match the intent of [\[IETF RFC 2119\]](#rfc2119). This edition supersedes the previous [W3C Recommendation of 4 February 2004](http://www.w3.org/TR/2004/REC-xml11-20040204).

Please report errors in this document to the public <xml-editor@w3.org> mailing list; [archives](http://lists.w3.org/Archives/Public/xml-editor/) are available. For the convenience of readers, an [XHTML version with color-coded revision indicators](REC-xml11-20060816-review.html) is also provided; this version highlights each change due to an erratum published in the [errata list](http://www.w3.org/XML/xml-V11-1e-errata), together with a link to the particular erratum in that list. Most of the errata in the list provide a rationale for the change. The errata list for this second edition is available at <http://www.w3.org/XML/xml-V11-2e-errata>.

An implementation report is available at <http://www.w3.org/XML/2006/06/xml11-2e-implementation.html>. A [Test Suite](http://www.w3.org/XML/Test/) is maintained to help assessing conformance to this specification.

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

This document is governed by the [24 January 2002 CPP](http://www.w3.org/TR/2002/NOTE-patent-practice-20020124) as amended by the [W3C Patent Policy Transition Procedure](http://www.w3.org/2004/02/05-pp-transition). W3C maintains a [public list of any patent disclosures](http://www.w3.org/2002/08/xmlcore-IPR-statements) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

<span id="contents"></span>Table of Contents
--------------------------------------------

1 [Introduction](#sec-intro)  
    1.1 [Origin and Goals](#sec-origin-goals)  
    1.2 [Terminology](#sec-terminology)  
    1.3 [Rationale and list of changes for XML 1.1](#sec-xml11)  
2 [Documents](#sec-documents)  
    2.1 [Well-Formed XML Documents](#sec-well-formed)  
    2.2 [Characters](#charsets)  
    2.3 [Common Syntactic Constructs](#sec-common-syn)  
    2.4 [Character Data and Markup](#syntax)  
    2.5 [Comments](#sec-comments)  
    2.6 [Processing Instructions](#sec-pi)  
    2.7 [CDATA Sections](#sec-cdata-sect)  
    2.8 [Prolog and Document Type Declaration](#sec-prolog-dtd)  
    2.9 [Standalone Document Declaration](#sec-rmd)  
    2.10 [White Space Handling](#sec-white-space)  
    2.11 [End-of-Line Handling](#sec-line-ends)  
    2.12 [Language Identification](#sec-lang-tag)  
    2.13 [Normalization Checking](#sec-normalization-checking)  
3 [Logical Structures](#sec-logical-struct)  
    3.1 [Start-Tags, End-Tags, and Empty-Element Tags](#sec-starttags)  
    3.2 [Element Type Declarations](#elemdecls)  
        3.2.1 [Element Content](#sec-element-content)  
        3.2.2 [Mixed Content](#sec-mixed-content)  
    3.3 [Attribute-List Declarations](#attdecls)  
        3.3.1 [Attribute Types](#sec-attribute-types)  
        3.3.2 [Attribute Defaults](#sec-attr-defaults)  
        3.3.3 [Attribute-Value Normalization](#AVNormalize)  
    3.4 [Conditional Sections](#sec-condition-sect)  
4 [Physical Structures](#sec-physical-struct)  
    4.1 [Character and Entity References](#sec-references)  
    4.2 [Entity Declarations](#sec-entity-decl)  
        4.2.1 [Internal Entities](#sec-internal-ent)  
        4.2.2 [External Entities](#sec-external-ent)  
    4.3 [Parsed Entities](#TextEntities)  
        4.3.1 [The Text Declaration](#sec-TextDecl)  
        4.3.2 [Well-Formed Parsed Entities](#wf-entities)  
        4.3.3 [Character Encoding in Entities](#charencoding)  
        4.3.4 [Version Information in Entities](#sec-version-info)  
    4.4 [XML Processor Treatment of Entities and References](#entproc)  
        4.4.1 [Not Recognized](#not-recognized)  
        4.4.2 [Included](#included)  
        4.4.3 [Included If Validating](#include-if-valid)  
        4.4.4 [Forbidden](#forbidden)  
        4.4.5 [Included in Literal](#inliteral)  
        4.4.6 [Notify](#notify)  
        4.4.7 [Bypassed](#bypass)  
        4.4.8 [Included as PE](#as-PE)  
        4.4.9 [Error](#error)  
    4.5 [Construction of Entity Replacement Text](#intern-replacement)  
    4.6 [Predefined Entities](#sec-predefined-ent)  
    4.7 [Notation Declarations](#Notations)  
    4.8 [Document Entity](#sec-doc-entity)  
5 [Conformance](#sec-conformance)  
    5.1 [Validating and Non-Validating Processors](#proc-types)  
    5.2 [Using XML Processors](#safe-behavior)  
6 [Notation](#sec-notation)  

### <span id="appendices"></span>Appendices

A [References](#sec-bibliography)  
    A.1 [Normative References](#sec-existing-stds)  
    A.2 [Other References](#null)  
B [Definitions for Character Normalization](#sec-CharNorm)  
C [Expansion of Entity and Character References](#sec-entexpand) (Non-Normative)  
D [Deterministic Content Models](#determinism) (Non-Normative)  
E [Autodetection of Character Encodings](#sec-guessing) (Non-Normative)  
    E.1 [Detection Without External Encoding Information](#sec-guessing-no-ext-info)  
    E.2 [Priorities in the Presence of External Encoding Information](#sec-guessing-with-ext-info)  
F [W3C XML Working Group](#sec-xml-wg) (Non-Normative)  
G [W3C XML Core Working Group](#sec-core-wg) (Non-Normative)  
H [Production Notes](#prod-notes) (Non-Normative)  
I [Suggestions for XML Names](#sec-suggested-names) (Non-Normative)  

------------------------------------------------------------------------

<span id="sec-intro"></span>1 Introduction
------------------------------------------

Extensible Markup Language, abbreviated XML, describes a class of data objects called [XML documents](#dt-xml-doc "XML Document") and partially describes the behavior of computer programs which process them. XML is an application profile or restricted form of SGML, the Standard Generalized Markup Language [\[ISO 8879\]](#ISO8879). By construction, XML documents are conforming SGML documents.

XML documents are made up of storage units called [entities](#dt-entity "Entity"), which contain either parsed or unparsed data. Parsed data is made up of [characters](#dt-character "Character"), some of which form [character data](#dt-chardata "Character Data"), and some of which form [markup](#dt-markup "Markup"). Markup encodes a description of the document's storage layout and logical structure. XML provides a mechanism to impose constraints on the storage layout and logical structure.

\[<span id="dt-xml-proc">Definition</span>: A software module called an **XML processor** is used to read XML documents and provide access to their content and structure.\] \[<span id="dt-app">Definition</span>: It is assumed that an XML processor is doing its work on behalf of another module, called the **application**.\] This specification describes the required behavior of an XML processor in terms of how it must read XML data and the information it must provide to the application.

### <span id="sec-origin-goals"></span>1.1 Origin and Goals

XML was developed by an XML Working Group (originally known as the SGML Editorial Review Board) formed under the auspices of the World Wide Web Consortium (W3C) in 1996. It was chaired by Jon Bosak of Sun Microsystems with the active participation of an XML Special Interest Group (previously known as the SGML Working Group) also organized by the W3C. The membership of the XML Working Group is given in an appendix. Dan Connolly served as the Working Group's contact with the W3C.

The design goals for XML are:

1.  XML shall be straightforwardly usable over the Internet.

2.  XML shall support a wide variety of applications.

3.  XML shall be compatible with SGML.

4.  It shall be easy to write programs which process XML documents.

5.  The number of optional features in XML is to be kept to the absolute minimum, ideally zero.

6.  XML documents should be human-legible and reasonably clear.

7.  The XML design should be prepared quickly.

8.  The design of XML shall be formal and concise.

9.  XML documents shall be easy to create.

10. Terseness in XML markup is of minimal importance.

This specification, together with associated standards (Unicode [\[Unicode\]](#Unicode) and ISO/IEC 10646 [\[ISO/IEC 10646\]](#ISO10646) for characters, Internet RFC 3066 [\[IETF RFC 3066\]](#RFC1766) for language identification tags, ISO 639 [\[ISO 639\]](#ISO639) for language name codes, and ISO 3166 [\[ISO 3166\]](#ISO3166) for country name codes), provides all the information necessary to understand XML Version 1.1 and construct computer programs to process it.

This version of the XML specification may be distributed freely, as long as all text and legal notices remain intact.

### <span id="sec-terminology"></span>1.2 Terminology

The terminology used to describe XML documents is defined in the body of this specification. The key words *MUST*, *MUST NOT*, *REQUIRED*, *SHALL*, *SHALL NOT*, *SHOULD*, *SHOULD NOT*, *RECOMMENDED*, *MAY*, and *OPTIONAL*, when *EMPHASIZED*, are to be interpreted as described in [\[IETF RFC 2119\]](#rfc2119). In addition, the terms defined in the following list are used in building those definitions and in describing the actions of an XML processor:

error  
\[<span id="dt-error">Definition</span>: A violation of the rules of this specification; results are undefined. Unless otherwise specified, failure to observe a prescription of this specification indicated by one of the keywords *MUST*, *REQUIRED*, *MUST NOT*, *SHALL* and *SHALL NOT* is an error. Conforming software *MAY* detect and report an error and *MAY* recover from it.\]

fatal error  
\[<span id="dt-fatal">Definition</span>: An error which a conforming [XML processor](#dt-xml-proc "XML Processor") *MUST* detect and report to the application. After encountering a fatal error, the processor *MAY* continue processing the data to search for further errors and *MAY* report such errors to the application. In order to support correction of errors, the processor *MAY* make unprocessed data from the document (with intermingled character data and markup) available to the application. Once a fatal error is detected, however, the processor *MUST NOT* continue normal processing (i.e., it *MUST NOT* continue to pass character data and information about the document's logical structure to the application in the normal way).\]

at user option  
\[<span id="dt-atuseroption">Definition</span>: Conforming software *MAY* or *MUST* (depending on the modal verb in the sentence) behave as described; if it does, it *MUST* provide users a means to enable or disable the behavior described.\]

validity constraint  
\[<span id="dt-vc">Definition</span>: A rule which applies to all [valid](#dt-valid "Validity") XML documents. Violations of validity constraints are errors; they *MUST*, at user option, be reported by [validating XML processors](#dt-validating "Validating Processor").\]

well-formedness constraint  
\[<span id="dt-wfc">Definition</span>: A rule which applies to all [well-formed](#dt-wellformed "Well-Formed") XML documents. Violations of well-formedness constraints are [fatal errors](#dt-fatal "Fatal Error").\]

match  
\[<span id="dt-match">Definition</span>: (Of strings or names:) Two strings or names being compared are identical. Characters with multiple possible representations in Unicode (e.g. characters with both precomposed and base+diacritic forms) match only if they have the same representation in both strings. No case folding is performed. (Of strings and rules in the grammar:) A string matches a grammatical production if it belongs to the language generated by that production. (Of content and content models:) An element matches its declaration when it conforms in the fashion described in the constraint **\[VC: [Element Valid](#elementvalid)\]**.\]

for compatibility  
\[<span id="dt-compat">Definition</span>: Marks a sentence describing a feature of XML included solely to ensure that XML remains compatible with SGML.\]

for interoperability  
\[<span id="dt-interop">Definition</span>: Marks a sentence describing a non-binding recommendation included to increase the chances that XML documents can be processed by the existing installed base of SGML processors which predate the WebSGML Adaptations Annex to ISO 8879.\]

### <span id="sec-xml11"></span>1.3 Rationale and list of changes for XML 1.1

The W3C's XML 1.0 Recommendation was first issued in 1998, and despite the issuance of many errata culminating in a Third Edition of 2004, has remained (by intention) unchanged with respect to what is well-formed XML and what is not. This stability has been extremely useful for interoperability. However, the Unicode Standard on which XML 1.0 relies for character specifications has not remained static, evolving from version 2.0 to version 4.0 and beyond. Characters not present in Unicode 2.0 may already be used in XML 1.0 character data. However, they are not allowed in XML names such as element type names, attribute names, enumerated attribute values, processing instruction targets, and so on. In addition, some characters that should have been permitted in XML names were not, due to oversights and inconsistencies in Unicode 2.0.

The overall philosophy of names has changed since XML 1.0. Whereas XML 1.0 provided a rigid definition of names, wherein everything that was not permitted was forbidden, XML 1.1 names are designed so that everything that is not forbidden (for a specific reason) is permitted. Since Unicode will continue to grow past version 4.0, further changes to XML can be avoided by allowing almost any character, including those not yet assigned, in names.

In addition, XML 1.0 attempts to adapt to the line-end conventions of various modern operating systems, but discriminates against the conventions used on IBM and IBM-compatible mainframes. As a result, XML documents on mainframes are not plain text files according to the local conventions. XML 1.0 documents generated on mainframes must either violate the local line-end conventions, or employ otherwise unnecessary translation phases before parsing and after generation. Allowing straightforward interoperability is particularly important when data stores are shared between mainframe and non-mainframe systems (as opposed to being copied from one to the other). Therefore XML 1.1 adds NEL (\#x85) to the list of line-end characters. For completeness, the Unicode line separator character, \#x2028, is also supported.

Finally, there is considerable demand to define a standard representation of arbitrary Unicode characters in XML documents. Therefore, XML 1.1 allows the use of character references to the control characters \#x1 through \#x1F, most of which are forbidden in XML 1.0. For reasons of robustness, however, these characters still cannot be used directly in documents. In order to improve the robustness of character encoding detection, the additional control characters \#x7F through \#x9F, which were freely allowed in XML 1.0 documents, now must also appear only as character references. (Whitespace characters are of course exempt.) The minor sacrifice of backward compatibility is considered not significant. Due to potential problems with APIs, \#x0 is still forbidden both directly and as a character reference.

Finally, XML 1.1 defines a set of constraints called "full normalization" on XML documents, which document creators *SHOULD* adhere to, and document processors *SHOULD* verify. Using fully normalized documents ensures that identity comparisons of names, attribute values, and character content can be made correctly by simple binary comparison of Unicode strings.

A new XML version, rather than a set of errata to XML 1.0, is being created because the changes affect the definition of well-formed documents. XML 1.0 processors must continue to reject documents that contain new characters in XML names, new line-end conventions, and references to control characters. The distinction between XML 1.0 and XML 1.1 documents is indicated by the version number information in the XML declaration at the start of each document.

<span id="sec-documents"></span>2 Documents
-------------------------------------------

\[<span id="dt-xml-doc">Definition</span>: A data object is an **XML document** if it is [well-formed](#dt-wellformed "Well-Formed"), as defined in this specification. In addition, the XML document is [valid](#dt-valid "Validity") if it meets certain further constraints.\]

Each XML document has both a logical and a physical structure. Physically, the document is composed of units called [entities](#dt-entity "Entity"). An entity may [refer](#dt-entref "Entity Reference") to other entities to cause their inclusion in the document. A document begins in a "root" or [document entity](#dt-docent "Document Entity"). Logically, the document is composed of declarations, elements, comments, character references, and processing instructions, all of which are indicated in the document by explicit markup. The logical and physical structures *MUST* nest properly, as described in [**4.3.2 Well-Formed Parsed Entities**](#wf-entities).

### <span id="sec-well-formed"></span>2.1 Well-Formed XML Documents

\[<span id="dt-wellformed">Definition</span>: A textual object is a **well-formed** XML document if:\]

1.  Taken as a whole, it matches the production labeled [document](#NT-document).

2.  It meets all the well-formedness constraints given in this specification.

3.  Each of the [parsed entities](#dt-parsedent "Text Entity") which is referenced directly or indirectly within the document is [well-formed](#dt-wellformed "Well-Formed").

##### <span id="document"></span>Document

<table><tbody><tr class="odd"><td><span id="NT-document"></span>[1]   </td><td><code>document</code></td><td>   ::=   </td><td><code>                                                              (                             prolog                             element                             Misc*                                 )                                                                                           -                                  (                             Char* RestrictedChar                                                                                                                        Char*                                 )                         </code></td></tr></tbody></table>

Matching the [document](#NT-document) production implies that:

1.  It contains one or more [elements](#dt-element "Element").

2.  \[<span id="dt-root">Definition</span>: There is exactly one element, called the **root**, or document element, no part of which appears in the [content](#dt-content "Content") of any other element.\] For all other elements, if the [start-tag](#dt-stag "Start-Tag") is in the content of another element, the [end-tag](#dt-etag "End Tag") is in the content of the same element. More simply stated, the elements, delimited by start- and end-tags, nest properly within each other.

\[<span id="dt-parentchild">Definition</span>: As a consequence of this, for each non-root element `C` in the document, there is one other element `P` in the document such that `C` is in the content of `P`, but is not in the content of any other element that is in the content of `P`. `P` is referred to as the **parent** of `C`, and `C` as a **child** of `P`.\]

### <span id="charsets"></span>2.2 Characters

\[<span id="dt-text">Definition</span>: A parsed entity contains **text**, a sequence of [characters](#dt-character "Character"), which may represent markup or character data.\] \[<span id="dt-character">Definition</span>: A **character** is an atomic unit of text as specified by ISO/IEC 10646 [\[ISO/IEC 10646\]](#ISO10646). Legal characters are tab, carriage return, line feed, and the legal characters of Unicode and ISO/IEC 10646. The versions of these standards cited in [**A.1 Normative References**](#sec-existing-stds) were current at the time this document was prepared. New characters may be added to these standards by amendments or new editions. Consequently, XML processors *MUST* accept any character in the range specified for [Char](#NT-Char).\]

##### <span id="char32"></span>Character Range

<table><tbody><tr class="odd"><td><span id="NT-Char"></span>[2]   </td><td><code>Char</code></td><td>   ::=   </td><td><code>[#x1-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]</code></td><td><em>/* any Unicode character, excluding the surrogate blocks, FFFE, and FFFF. */</em></td></tr><tr class="even"><td><span id="NT-RestrictedChar"></span>[2a]   </td><td><code>RestrictedChar</code></td><td>   ::=   </td><td><code>[#x1-#x8] | [#xB-#xC] | [#xE-#x1F] | [#x7F-#x84] | [#x86-#x9F]</code></td><td></td></tr></tbody></table>

The mechanism for encoding character code points into bit patterns may vary from entity to entity. All XML processors *MUST* accept the UTF-8 and UTF-16 encodings of Unicode [\[Unicode\]](#Unicode); the mechanisms for signaling which of the two is in use, or for bringing other encodings into play, are discussed later, in [**4.3.3 Character Encoding in Entities**](#charencoding).

**Note:**

Document authors are encouraged to avoid "compatibility characters", as defined in Unicode [\[Unicode\]](#Unicode). The characters defined in the following ranges are also discouraged. They are either control characters or permanently undefined Unicode characters:

    [#x1-#x8], [#xB-#xC], [#xE-#x1F], [#x7F-#x84], [#x86-#x9F], [#xFDD0-#xFDDF],
    [#x1FFFE-#x1FFFF], [#x2FFFE-#x2FFFF], [#x3FFFE-#x3FFFF],
    [#x4FFFE-#x4FFFF], [#x5FFFE-#x5FFFF], [#x6FFFE-#x6FFFF],
    [#x7FFFE-#x7FFFF], [#x8FFFE-#x8FFFF], [#x9FFFE-#x9FFFF],
    [#xAFFFE-#xAFFFF], [#xBFFFE-#xBFFFF], [#xCFFFE-#xCFFFF],
    [#xDFFFE-#xDFFFF], [#xEFFFE-#xEFFFF], [#xFFFFE-#xFFFFF],
    [#x10FFFE-#x10FFFF].

### <span id="sec-common-syn"></span>2.3 Common Syntactic Constructs

This section defines some symbols used widely in the grammar.

[S](#NT-S) (white space) consists of one or more space (\#x20) characters, carriage returns, line feeds, or tabs.

##### <span id="white"></span>White Space

<table><tbody><tr class="odd"><td><span id="NT-S"></span>[3]   </td><td><code>S</code></td><td>   ::=   </td><td><code>(#x20 | #x9 | #xD | #xA)+</code></td></tr></tbody></table>

**Note:**

The presence of \#xD in the above production is maintained purely for backward compatibility with the [First Edition](http://www.w3.org/TR/1998/REC-xml-19980210). As explained in [**2.11 End-of-Line Handling**](#sec-line-ends), all \#xD characters literally present in an XML document are either removed or replaced by \#xA characters before any other processing is done. The only way to get a \#xD character to match this production is to use a character reference in an entity value literal.

\[<span id="dt-name">Definition</span>: A **Name** is a token beginning with a letter or one of a few punctuation characters, and continuing with letters, digits, hyphens, underscores, colons, or full stops, together known as name characters.\] Names beginning with the string "`xml`", or with any string which would match `(('X'|'x') ('M'|'m') ('L'|'l'))`, are reserved for standardization in this or future versions of this specification.

**Note:**

The Namespaces in XML Recommendation [\[XML Names\]](#xml-names) assigns a meaning to names containing colon characters. Therefore, authors should not use the colon in XML names except for namespace purposes, but XML processors must accept the colon as a name character.

An [Nmtoken](#NT-Nmtoken) (name token) is any mixture of name characters.

The first character of a Name *MUST* be a NameStartChar, and any other characters *MUST* be NameChars; this mechanism is used to prevent names from beginning with European (ASCII) digits or with basic combining characters. Almost all characters are permitted in names, except those which either are or reasonably could be used as delimiters. The intention is to be inclusive rather than exclusive, so that writing systems not yet encoded in Unicode can be used in XML names. See [**I Suggestions for XML Names**](#sec-suggested-names) for suggestions on the creation of names.

Document authors are encouraged to use names which are meaningful words or combinations of words in natural languages, and to avoid symbolic or white space characters in names. Note that COLON, HYPHEN-MINUS, FULL STOP (period), LOW LINE (underscore), and MIDDLE DOT are explicitly permitted.

The ASCII symbols and punctuation marks, along with a fairly large group of Unicode symbol characters, are excluded from names because they are more useful as delimiters in contexts where XML names are used outside XML documents; providing this group gives those contexts hard guarantees about what *cannot* be part of an XML name. The character \#x037E, GREEK QUESTION MARK, is excluded because when normalized it becomes a semicolon, which could change the meaning of entity references.

##### <span id="IDAKUDS"></span>Names and Tokens

<table><tbody><tr class="odd"><td><span id="NT-NameStartChar"></span>[4]   </td><td><code>NameStartChar</code></td><td>   ::=   </td><td><code>":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]</code></td></tr><tr class="even"><td><span id="NT-NameChar"></span>[4a]   </td><td><code>NameChar</code></td><td>   ::=   </td><td><code>                             NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]</code></td></tr><tr class="odd"><td><span id="NT-Name"></span>[5]   </td><td><code>Name</code></td><td>   ::=   </td><td><code>                             NameStartChar (NameChar)*</code></td></tr><tr class="even"><td><span id="NT-Names"></span>[6]   </td><td><code>Names</code></td><td>   ::=   </td><td><code>                             Name (#x20 Name)*</code></td></tr><tr class="odd"><td><span id="NT-Nmtoken"></span>[7]   </td><td><code>Nmtoken</code></td><td>   ::=   </td><td><code>(NameChar)+</code></td></tr><tr class="even"><td><span id="NT-Nmtokens"></span>[8]   </td><td><code>Nmtokens</code></td><td>   ::=   </td><td><code>                             Nmtoken (#x20 Nmtoken)*</code></td></tr></tbody></table>

**Note:**

The [Names](#NT-Names) and [Nmtokens](#NT-Nmtokens) productions are used to define the validity of tokenized attribute values after normalization (see [**3.3.1 Attribute Types**](#sec-attribute-types)).

Literal data is any quoted string not containing the quotation mark used as a delimiter for that string. Literals are used for specifying the content of internal entities ([EntityValue](#NT-EntityValue)), the values of attributes ([AttValue](#NT-AttValue)), and external identifiers ([SystemLiteral](#NT-SystemLiteral)). Note that a [SystemLiteral](#NT-SystemLiteral) can be parsed without scanning for markup.

##### <span id="IDAKYDS"></span>Literals

<table><tbody><tr class="odd"><td><span id="NT-EntityValue"></span>[9]   </td><td><code>EntityValue</code></td><td>   ::=   </td><td><code>'"' ([^%&amp;"] | PEReference | Reference)* '"' </code></td></tr><tr class="even"><td></td><td></td><td></td><td><code>|  "'" ([^%&amp;'] | PEReference | Reference)* "'"</code></td></tr><tr class="odd"><td><span id="NT-AttValue"></span>[10]   </td><td><code>AttValue</code></td><td>   ::=   </td><td><code>'"' ([^&lt;&amp;"] | Reference)* '"' </code></td></tr><tr class="even"><td></td><td></td><td></td><td><code>|  "'" ([^&lt;&amp;'] | Reference)* "'"</code></td></tr><tr class="odd"><td><span id="NT-SystemLiteral"></span>[11]   </td><td><code>SystemLiteral</code></td><td>   ::=   </td><td><code>('"' [^"]* '"') | ("'" [^']* "'") </code></td></tr><tr class="even"><td><span id="NT-PubidLiteral"></span>[12]   </td><td><code>PubidLiteral</code></td><td>   ::=   </td><td><code>'"' PubidChar* '"' | "'" (PubidChar - "'")* "'"</code></td></tr><tr class="odd"><td><span id="NT-PubidChar"></span>[13]   </td><td><code>PubidChar</code></td><td>   ::=   </td><td><code>#x20 | #xD | #xA | [a-zA-Z0-9] | [-'()+,./:=?;!*#@$_%]</code></td></tr></tbody></table>

**Note:**

Although the [EntityValue](#NT-EntityValue) production allows the definition of a general entity consisting of a single explicit `<` in the literal (e.g., `<!ENTITY mylt "<">`), it is strongly advised to avoid this practice since any reference to that entity will cause a well-formedness error.

### <span id="syntax"></span>2.4 Character Data and Markup

[Text](#dt-text "Text") consists of intermingled [character data](#dt-chardata "Character Data") and markup. \[<span id="dt-markup">Definition</span>: **Markup** takes the form of [start-tags](#dt-stag "Start-Tag"), [end-tags](#dt-etag "End Tag"), [empty-element tags](#dt-empty "Empty"), [entity references](#dt-entref "Entity Reference"), [character references](#dt-charref "Character Reference"), [comments](#dt-comment "Comment"), [CDATA section](#dt-cdsection "CDATA Section") delimiters, [document type declarations](#dt-doctype "Document Type Declaration"), [processing instructions](#dt-pi "Processing instruction"), [XML declarations](#NT-XMLDecl), [text declarations](#NT-TextDecl), and any white space that is at the top level of the document entity (that is, outside the document element and not inside any other markup).\]

\[<span id="dt-chardata">Definition</span>: All text that is not markup constitutes the **character data** of the document.\]

The ampersand character (&) and the left angle bracket (&lt;) *MUST NOT* appear in their literal form, except when used as markup delimiters, or within a [comment](#dt-comment "Comment"), a [processing instruction](#dt-pi "Processing instruction"), or a [CDATA section](#dt-cdsection "CDATA Section"). If they are needed elsewhere, they *MUST* be [escaped](#dt-escape "escape") using either [numeric character references](#dt-charref "Character Reference") or the strings "`&amp;`" and "`&lt;`" respectively. The right angle bracket (&gt;) may be represented using the string "`&gt;`", and *MUST*, [for compatibility](#dt-compat "For Compatibility"), be escaped using either "`&gt;`" or a character reference when it appears in the string "`]]>`" in content, when that string is not marking the end of a [CDATA section](#dt-cdsection "CDATA Section").

In the content of elements, character data is any string of characters which does not contain the start-delimiter of any markup or the CDATA-section-close delimiter, "`]]>`". In a CDATA section, character data is any string of characters not including the CDATA-section-close delimiter.

To allow attribute values to contain both single and double quotes, the apostrophe or single-quote character (') may be represented as "`&apos;`", and the double-quote character (") as "`&quot;`".

##### <span id="IDAABES"></span>Character Data

<table><tbody><tr class="odd"><td><span id="NT-CharData"></span>[14]   </td><td><code>CharData</code></td><td>   ::=   </td><td><code>[^&lt;&amp;]* - ([^&lt;&amp;]* ']]&gt;' [^&lt;&amp;]*)</code></td></tr></tbody></table>

### <span id="sec-comments"></span>2.5 Comments

\[<span id="dt-comment">Definition</span>: **Comments** may appear anywhere in a document outside other [markup](#dt-markup "Markup"); in addition, they may appear within the document type declaration at places allowed by the grammar. They are not part of the document's [character data](#dt-chardata "Character Data"); an XML processor *MAY*, but need not, make it possible for an application to retrieve the text of comments. [For compatibility](#dt-compat "For Compatibility"), the string "`--`" (double-hyphen) *MUST NOT* occur within comments.\] Parameter entity references *MUST NOT* be recognized within comments.

##### <span id="IDA5CES"></span>Comments

<table><tbody><tr class="odd"><td><span id="NT-Comment"></span>[15]   </td><td><code>Comment</code></td><td>   ::=   </td><td><code>'&lt;!--' ((Char - '-') | ('-' (Char - '-')))* '--&gt;'</code></td></tr></tbody></table>

An example of a comment:

    <!-- declarations for <head> & <body> -->

Note that the grammar does not allow a comment ending in `--->`. The following example is *not* well-formed.

    <!-- B+, B, or B--->

### <span id="sec-pi"></span>2.6 Processing Instructions

\[<span id="dt-pi">Definition</span>: **Processing instructions** (PIs) allow documents to contain instructions for applications.\]

##### <span id="IDAREES"></span>Processing Instructions

<table><tbody><tr class="odd"><td><span id="NT-PI"></span>[16]   </td><td><code>PI</code></td><td>   ::=   </td><td><code>'&lt;?' PITarget (S (Char* - (Char* '?&gt;' Char*)))? '?&gt;'</code></td></tr><tr class="even"><td><span id="NT-PITarget"></span>[17]   </td><td><code>PITarget</code></td><td>   ::=   </td><td><code>                             Name - (('X' | 'x') ('M' | 'm') ('L' | 'l'))</code></td></tr></tbody></table>

PIs are not part of the document's [character data](#dt-chardata "Character Data"), but *MUST* be passed through to the application. The PI begins with a target ([PITarget](#NT-PITarget)) used to identify the application to which the instruction is directed. The target names "`XML`", "`xml`", and so on are reserved for standardization in this or future versions of this specification. The XML [Notation](#dt-notation "Notation") mechanism may be used for formal declaration of PI targets. Parameter entity references *MUST NOT* be recognized within processing instructions.

### <span id="sec-cdata-sect"></span>2.7 CDATA Sections

\[<span id="dt-cdsection">Definition</span>: **CDATA sections** may occur anywhere character data may occur; they are used to escape blocks of text containing characters which would otherwise be recognized as markup. CDATA sections begin with the string "`<![CDATA[`" and end with the string "`]]>`":\]

##### <span id="IDA2HES"></span>CDATA Sections

<table><tbody><tr class="odd"><td><span id="NT-CDSect"></span>[18]   </td><td><code>CDSect</code></td><td>   ::=   </td><td><code>                             CDStart                             CData                             CDEnd                         </code></td></tr><tr class="even"><td><span id="NT-CDStart"></span>[19]   </td><td><code>CDStart</code></td><td>   ::=   </td><td><code>'&lt;![CDATA['</code></td></tr><tr class="odd"><td><span id="NT-CData"></span>[20]   </td><td><code>CData</code></td><td>   ::=   </td><td><code>(Char* - (Char* ']]&gt;' Char*)) </code></td></tr><tr class="even"><td><span id="NT-CDEnd"></span>[21]   </td><td><code>CDEnd</code></td><td>   ::=   </td><td><code>']]&gt;'</code></td></tr></tbody></table>

Within a CDATA section, only the [CDEnd](#NT-CDEnd) string is recognized as markup, so that left angle brackets and ampersands may occur in their literal form; they need not (and cannot) be escaped using "`&lt;`" and "`&amp;`". CDATA sections cannot nest.

An example of a CDATA section, in which "`<greeting>`" and "`</greeting>`" are recognized as [character data](#dt-chardata "Character Data"), not [markup](#dt-markup "Markup"):

    <![CDATA[<greeting>Hello, world!</greeting>]]> 

### <span id="sec-prolog-dtd"></span>2.8 Prolog and Document Type Declaration

\[<span id="dt-xmldecl">Definition</span>: XML 1.1 documents *MUST* begin with an **XML declaration** which specifies the version of XML being used.\] For example, the following is a complete XML 1.1 document, [well-formed](#dt-wellformed "Well-Formed") but not [valid](#dt-valid "Validity"):

    <?xml version="1.1"?>
    <greeting>Hello, world!</greeting> 

but the following is an XML 1.0 document because it does not have an XML declaration:

    <greeting>Hello, world!</greeting>

The function of the markup in an XML document is to describe its storage and logical structure and to associate attribute name-value pairs with its logical structures. XML provides a mechanism, the [document type declaration](#dt-doctype "Document Type Declaration"), to define constraints on the logical structure and to support the use of predefined storage units. \[<span id="dt-valid">Definition</span>: An XML document is **valid** if it has an associated document type declaration and if the document complies with the constraints expressed in it.\]

The document type declaration *MUST* appear before the first [element](#dt-element "Element") in the document.

##### <span id="xmldoc"></span>Prolog

<table><tbody><tr class="odd"><td><span id="NT-prolog"></span>[22]   </td><td><code>prolog</code></td><td>   ::=   </td><td><code>                                 XMLDecl                                 Misc* (doctypedecl                                 Misc*)?</code></td></tr><tr class="even"><td><span id="NT-XMLDecl"></span>[23]   </td><td><code>XMLDecl</code></td><td>   ::=   </td><td><code>'&lt;?xml' VersionInfo                                 EncodingDecl? SDDecl? S? '?&gt;'</code></td></tr><tr class="odd"><td><span id="NT-VersionInfo"></span>[24]   </td><td><code>VersionInfo</code></td><td>   ::=   </td><td><code>                                 S 'version' Eq ("'" VersionNum "'" | '"' VersionNum '"')</code></td></tr><tr class="even"><td><span id="NT-Eq"></span>[25]   </td><td><code>Eq</code></td><td>   ::=   </td><td><code>                                 S? '=' S?</code></td></tr><tr class="odd"><td><span id="NT-VersionNum"></span>[26]   </td><td><code>VersionNum</code></td><td>   ::=   </td><td><code>'1.1'</code></td></tr><tr class="even"><td><span id="NT-Misc"></span>[27]   </td><td><code>Misc</code></td><td>   ::=   </td><td><code>                                 Comment | PI | S                             </code></td></tr></tbody></table>

\[<span id="dt-doctype">Definition</span>: The XML **document type declaration** contains or points to [markup declarations](#dt-markupdecl "markup declaration") that provide a grammar for a class of documents. This grammar is known as a document type definition, or **DTD**. The document type declaration can point to an external subset (a special kind of [external entity](#dt-extent "External Entity")) containing markup declarations, or can contain the markup declarations directly in an internal subset, or can do both. The DTD for a document consists of both subsets taken together.\]

\[<span id="dt-markupdecl">Definition</span>: A **markup declaration** is an [element type declaration](#dt-eldecl "Element Type declaration"), an [attribute-list declaration](#dt-attdecl "Attribute-List Declaration"), an [entity declaration](#dt-entdecl "entity declaration"), or a [notation declaration](#dt-notdecl "Notation Declaration").\] These declarations may be contained in whole or in part within [parameter entities](#dt-PE "Parameter entity"), as described in the well-formedness and validity constraints below. For further information, see [**4 Physical Structures**](#sec-physical-struct).

##### <span id="dtd"></span>Document Type Definition

<table><tbody><tr class="odd"><td><span id="NT-doctypedecl"></span>[28]   </td><td><code>doctypedecl</code></td><td>   ::=   </td><td><code>'&lt;!DOCTYPE' S                                 Name (S                                 ExternalID)? S? ('[' intSubset ']' S?)? '&gt;'</code></td><td><a href="#vc-roottype">[VC: Root Element Type]</a></td></tr><tr class="even"><td></td><td></td><td></td><td></td><td><a href="#ExtSubset">[WFC: External Subset]</a></td></tr><tr class="odd"><td><span id="NT-DeclSep"></span>[28a]   </td><td><code>DeclSep</code></td><td>   ::=   </td><td><code>                                 PEReference | S                             </code></td><td><a href="#PE-between-Decls">[WFC: PE Between Declarations]</a></td></tr><tr class="even"><td><span id="NT-intSubset"></span>[28b]   </td><td><code>intSubset</code></td><td>   ::=   </td><td><code>(markupdecl | DeclSep)*</code></td><td></td></tr><tr class="odd"><td><span id="NT-markupdecl"></span>[29]   </td><td><code>markupdecl</code></td><td>   ::=   </td><td><code>                                 elementdecl | AttlistDecl | EntityDecl | NotationDecl | PI | Comment                             </code></td><td><a href="#vc-PEinMarkupDecl">[VC: Proper Declaration/PE Nesting]</a></td></tr><tr class="even"><td></td><td></td><td></td><td></td><td><a href="#wfc-PEinInternalSubset">[WFC: PEs in Internal Subset]</a></td></tr></tbody></table>

Note that it is possible to construct a well-formed document containing a [doctypedecl](#NT-doctypedecl) that neither points to an external subset nor contains an internal subset.

The markup declarations may be made up in whole or in part of the [replacement text](#dt-repltext "Replacement Text") of [parameter entities](#dt-PE "Parameter entity"). The productions later in this specification for individual nonterminals ([elementdecl](#NT-elementdecl), [AttlistDecl](#NT-AttlistDecl), and so on) describe the declarations *after* all the parameter entities have been [included](#dt-include "Include").

Parameter entity references are recognized anywhere in the DTD (internal and external subsets and external parameter entities), except in literals, processing instructions, comments, and the contents of ignored conditional sections (see [**3.4 Conditional Sections**](#sec-condition-sect)). They are also recognized in entity value literals. The use of parameter entities in the internal subset is restricted as described below.

<span id="vc-roottype"></span>**Validity constraint: Root Element Type**

The [Name](#NT-Name) in the document type declaration *MUST* match the element type of the [root element](#dt-root "Root Element").

<span id="vc-PEinMarkupDecl"></span>**Validity constraint: Proper Declaration/PE Nesting**

Parameter-entity [replacement text](#dt-repltext "Replacement Text") *MUST* be properly nested with markup declarations. That is to say, if either the first character or the last character of a markup declaration ([markupdecl](#NT-markupdecl) above) is contained in the replacement text for a [parameter-entity reference](#dt-PERef "Parameter-entity reference"), both *MUST* be contained in the same replacement text.

<span id="wfc-PEinInternalSubset"></span>**Well-formedness constraint: PEs in Internal Subset**

In the internal DTD subset, [parameter-entity references](#dt-PERef "Parameter-entity reference") *MUST NOT* occur within markup declarations; they may occur where markup declarations can occur. (This does not apply to references that occur in external parameter entities or to the external subset.)

<span id="ExtSubset"></span>**Well-formedness constraint: External Subset**

The external subset, if any, *MUST* match the production for [extSubset](#NT-extSubset).

<span id="PE-between-Decls"></span>**Well-formedness constraint: PE Between Declarations**

The replacement text of a parameter entity reference in a [DeclSep](#NT-DeclSep) *MUST* match the production [extSubsetDecl](#NT-extSubsetDecl).

Like the internal subset, the external subset and any external parameter entities referenced in a [DeclSep](#NT-DeclSep) *MUST* consist of a series of complete markup declarations of the types allowed by the non-terminal symbol [markupdecl](#NT-markupdecl), interspersed with white space or [parameter-entity references](#dt-PERef "Parameter-entity reference"). However, portions of the contents of the external subset or of these external parameter entities may conditionally be ignored by using the [conditional section](#dt-cond-section "conditional section") construct; this is not allowed in the internal subset but is allowed in external parameter entities referenced in the internal subset.

##### <span id="ext-Subset"></span>External Subset

<table><tbody><tr class="odd"><td><span id="NT-extSubset"></span>[30]   </td><td><code>extSubset</code></td><td>   ::=   </td><td><code>                                 TextDecl? extSubsetDecl                             </code></td></tr><tr class="even"><td><span id="NT-extSubsetDecl"></span>[31]   </td><td><code>extSubsetDecl</code></td><td>   ::=   </td><td><code>( markupdecl | conditionalSect | DeclSep)*</code></td></tr></tbody></table>

The external subset and external parameter entities also differ from the internal subset in that in them, [parameter-entity references](#dt-PERef "Parameter-entity reference") are permitted *within* markup declarations, not only *between* markup declarations.

An example of an XML document with a document type declaration:

    <?xml version="1.1"?>
    <!DOCTYPE greeting SYSTEM "hello.dtd">
    <greeting>Hello, world!</greeting> 

The [system identifier](#dt-sysid "System Identifier") "`hello.dtd`" gives the address (a URI reference) of a DTD for the document.

The declarations can also be given locally, as in this example:

    <?xml version="1.1" encoding="UTF-8" ?>
    <!DOCTYPE greeting [
    <!ELEMENT greeting (#PCDATA)>
    ]>
    <greeting>Hello, world!</greeting>

If both the external and internal subsets are used, the internal subset *MUST* be considered to occur before the external subset. This has the effect that entity and attribute-list declarations in the internal subset take precedence over those in the external subset.

If a document is well-formed or valid XML 1.0, and provided it does not contain any control characters in the range \[\#x7F-\#x9F\] other than as character escapes, it may be made well-formed or valid XML 1.1 respectively simply by changing the version number.

### <span id="sec-rmd"></span>2.9 Standalone Document Declaration

Markup declarations can affect the content of the document, as passed from an [XML processor](#dt-xml-proc "XML Processor") to an application; examples are attribute defaults and entity declarations. The standalone document declaration, which may appear as a component of the XML declaration, signals whether or not there are such declarations which appear external to the [document entity](#dt-docent "Document Entity") or in parameter entities. \[<span id="dt-extmkpdecl">Definition</span>: An **external markup declaration** is defined as a markup declaration occurring in the external subset or in a parameter entity (external or internal, the latter being included because non-validating processors are not required to read them).\]

##### <span id="fulldtd"></span>Standalone Document Declaration

<table><tbody><tr class="odd"><td><span id="NT-SDDecl"></span>[32]   </td><td><code>SDDecl</code></td><td>   ::=   </td><td><code>                                                                                                           S                                  'standalone' Eq (("'" ('yes' | 'no') "'") | ('"' ('yes' | 'no') '"')) </code></td><td><a href="#vc-check-rmd">[VC: Standalone Document Declaration]</a></td></tr></tbody></table>

In a standalone document declaration, the value "yes" indicates that there are no [external markup declarations](#dt-extmkpdecl "External Markup Declaration") which affect the information passed from the XML processor to the application. The value "no" indicates that there are or may be such external markup declarations. Note that the standalone document declaration only denotes the presence of external *declarations*; the presence, in a document, of references to external *entities*, when those entities are internally declared, does not change its standalone status.

If there are no external markup declarations, the standalone document declaration has no meaning. If there are external markup declarations but there is no standalone document declaration, the value "no" is assumed.

Any XML document for which `standalone="no"` holds can be converted algorithmically to a standalone document, which may be desirable for some network delivery applications.

<span id="vc-check-rmd"></span>**Validity constraint: Standalone Document Declaration**

The standalone document declaration *MUST* have the value "no" if any external markup declarations contain declarations of:

-   attributes with [default](#dt-default "Attribute Default") values, if elements to which these attributes apply appear in the document without specifications of values for these attributes, or

-   entities (other than `amp`, `lt`, `gt`, `apos`, `quot`), if [references](#dt-entref "Entity Reference") to those entities appear in the document, or

-   attributes with tokenized types, where the attribute appears in the document with a value such that [normalization](#AVNormalize) will produce a different value from that which would be produced in the absence of the declaration, or

-   element types with [element content](#dt-elemcontent "Element content"), if white space occurs directly within any instance of those types.

An example XML declaration with a standalone document declaration:

    <?xml version="1.1" standalone='yes'?>

### <span id="sec-white-space"></span>2.10 White Space Handling

In editing XML documents, it is often convenient to use "white space" (spaces, tabs, and blank lines) to set apart the markup for greater readability. Such white space is typically not intended for inclusion in the delivered version of the document. On the other hand, "significant" white space that should be preserved in the delivered version is common, for example in poetry and source code.

An [XML processor](#dt-xml-proc "XML Processor") *MUST* always pass all characters in a document that are not markup through to the application. A [validating XML processor](#dt-validating "Validating Processor") *MUST* also inform the application which of these characters constitute white space appearing in [element content](#dt-elemcontent "Element content").

A special [attribute](#dt-attr "Attribute") named `xml:space` may be attached to an element to signal an intention that in that element, white space should be preserved by applications. In valid documents, this attribute, like any other, *MUST* be [declared](#dt-attdecl "Attribute-List Declaration") if it is used. When declared, it *MUST* be given as an [enumerated type](#dt-enumerated "Enumerated Attribute
Values") whose values are one or both of "default" and "preserve". For example:

    <!ATTLIST poem  xml:space (default|preserve) 'preserve'>
    <!ATTLIST pre xml:space (preserve) #FIXED 'preserve'>

The value "default" signals that applications' default white-space processing modes are acceptable for this element; the value "preserve" indicates the intent that applications preserve all the white space. This declared intent is considered to apply to all elements within the content of the element where it is specified, unless overridden with another instance of the `xml:space` attribute. This specification does not give meaning to any value of `xml:space` other than "default" and "preserve". It is an error for other values to be specified; the XML processor *MAY* report the error or *MAY* recover by ignoring the attribute specification or by reporting the (erroneous) value to the application. Applications may ignore or reject erroneous values.

The [root element](#dt-root "Root Element") of any document is considered to have signaled no intentions as regards application space handling, unless it provides a value for this attribute or the attribute is declared with a default value.

### <span id="sec-line-ends"></span>2.11 End-of-Line Handling

XML [parsed entities](#dt-parsedent "Text Entity") are often stored in computer files which, for editing convenience, are organized into lines. These lines are typically separated by some combination of the characters CARRIAGE RETURN (\#xD) and LINE FEED (\#xA).

To simplify the tasks of [applications](#dt-app "Application"), the [XML processor](#dt-xml-proc "XML Processor") *MUST* behave as if it normalized all line breaks in external parsed entities (including the document entity) on input, before parsing, by translating all of the following to a single \#xA character:

1.  the two-character sequence \#xD \#xA

2.  the two-character sequence \#xD \#x85

3.  the single character \#x85

4.  the single character \#x2028

5.  any \#xD character that is not immediately followed by \#xA or \#x85.

The characters \#x85 and \#x2028 cannot be reliably recognized and translated until an entity's encoding declaration (if present) has been read. Therefore, it is a fatal error to use them within the XML declaration or text declaration.

### <span id="sec-lang-tag"></span>2.12 Language Identification

In document processing, it is often useful to identify the natural or formal language in which the content is written. A special [attribute](#dt-attr "Attribute") named `xml:lang` may be inserted in documents to specify the language used in the contents and attribute values of any element in an XML document. In valid documents, this attribute, like any other, *MUST* be [declared](#dt-attdecl "Attribute-List Declaration") if it is used. The values of the attribute are language identifiers as defined by [\[IETF RFC 3066\]](#RFC1766), Tags for the Identification of Languages, or its successor; in addition, the empty string may be specified.

(Productions 33 through 38 have been removed.)

For example:

    <p xml:lang="en">The quick brown fox jumps over the lazy dog.</p>
    <p xml:lang="en-GB">What colour is it?</p>
    <p xml:lang="en-US">What color is it?</p>
    <sp who="Faust" desc='leise' xml:lang="de">
    <l>Habe nun, ach! Philosophie,</l>
    <l>Juristerei, und Medizin</l>
    <l>und leider auch Theologie</l>
    <l>durchaus studiert mit hei&#xDF;em Bem&#xFC;h'n.</l>
    </sp>

The language specified by `xml:lang` applies to the element where it is specified (including the values of its attributes), and to all elements in its content unless overridden with another instance of `xml:lang`. In particular, the empty value of `xml:lang` is used on an element B to override a specification of `xml:lang` on an enclosing element A, without specifying another language. Within B, it is considered that there is no language information available, just as if `xml:lang` had not been specified on B or any of its ancestors. Applications determine which of an element's attribute values and which parts of its character content, if any, are treated as language-dependent values described by `xml:lang`.

**Note:**

Language information may also be provided by external transport protocols (e.g. HTTP or MIME). When available, this information may be used by XML applications, but the more local information provided by `xml:lang` should be considered to override it.

A simple declaration for `xml:lang` might take the form

    xml:lang CDATA #IMPLIED

but specific default values may also be given, if appropriate. In a collection of French poems for English students, with glosses and notes in English, the `xml:lang` attribute might be declared this way:

    <!ATTLIST poem   xml:lang CDATA 'fr'>
    <!ATTLIST gloss  xml:lang CDATA 'en'>
    <!ATTLIST note   xml:lang CDATA 'en'>

### <span id="sec-normalization-checking"></span>2.13 Normalization Checking

All XML [parsed entities](#dt-parsedent "Text Entity") (including [document entities](#dt-docent "Document Entity")) *SHOULD* be [fully normalized](#dt-fullnorm "fully normalized") as per the definition of [**B Definitions for Character Normalization**](#sec-CharNorm) supplemented by the following definitions of *<span id="dt-relconst"></span>relevant constructs* for XML:

1.  The [replacement text](#dt-repltext "Replacement Text") of all [parsed entities](#dt-parsedent "Text Entity")

2.  All text matching, in context, one of the following productions:

    1.  [CData](#NT-CData)

    2.  [CharData](#NT-CharData)

    3.  [content](#NT-content)

    4.  [Name](#NT-Name)

    5.  [Nmtoken](#NT-Nmtoken)

However, a document is still well-formed even if it is not [fully normalized](#dt-fullnorm "fully normalized"). XML processors *SHOULD* provide a user option to verify that the document being processed is in [fully normalized](#dt-fullnorm "fully normalized") form, and report to the application whether it is or not. The option to not verify *SHOULD* be chosen only when the input text is [certified](#dt-certified "certified"), as defined by [**B Definitions for Character Normalization**](#sec-CharNorm).

The verification of full normalization *MUST* be carried out as if by first verifying that the entity is in [include-normalized](#dt-inclnorm "include-normalized") form as defined by [**B Definitions for Character Normalization**](#sec-CharNorm) and by then verifying that none of the relevant constructs listed above begins (after character references are expanded) with a [composing character](#dt-compchar "composing character") as defined by [**B Definitions for Character Normalization**](#sec-CharNorm). Non-validating processors *MUST* ignore possible denormalizations that would be caused by inclusion of external entities that they do not read.

**Note:**

The [composing character](#dt-compchar "composing character") are all Unicode characters of non-zero combining class, plus a small number of class-zero characters that nevertheless take part as a non-initial character in certain Unicode canonical decompositions. Since these characters are meant to follow base characters, restricting relevant constructs (including content) from beginning with a [composing character](#dt-compchar "composing character") does not meaningfully diminish the expressiveness of XML.

If, while verifying full normalization, a processor encounters characters for which it cannot determine the normalization properties (i.e., characters introduced in a version of Unicode [\[Unicode\]](#Unicode) later than the one used in the implementation of the processor), then the processor *MAY*, at user option, ignore any possible denormalizations caused by these characters. The option to ignore those denormalizations *SHOULD NOT* be chosen by applications when reliability or security are critical.

XML processors *MUST NOT* transform the input to be in [fully normalized](#dt-fullnorm "fully normalized") form. XML applications that create XML 1.1 output from either XML 1.1 or XML 1.0 input *SHOULD* ensure that the output is [fully normalized](#dt-fullnorm "fully normalized"); it is not necessary for internal processing forms to be [fully normalized](#dt-fullnorm "fully normalized").

The purpose of this section is to strongly encourage XML processors to ensure that the creators of XML documents have properly normalized them, so that XML applications can make tests such as identity comparisons of strings without having to worry about the different possible "spellings" of strings which Unicode allows.

When entities are in a non-Unicode encoding, if the processor transcodes them to Unicode, it *SHOULD* use a normalizing transcoder.

<span id="sec-logical-struct"></span>3 Logical Structures
---------------------------------------------------------

\[<span id="dt-element">Definition</span>: Each [XML document](#dt-xml-doc "XML Document") contains one or more **elements**, the boundaries of which are either delimited by [start-tags](#dt-stag "Start-Tag") and [end-tags](#dt-etag "End Tag"), or, for [empty](#dt-empty "Empty") elements, by an [empty-element tag](#dt-eetag "empty-element tag"). Each element has a type, identified by name, sometimes called its "generic identifier" (GI), and may have a set of attribute specifications.\] Each attribute specification has a [name](#dt-attrname "Attribute Name") and a [value](#dt-attrval "Attribute Value").

##### <span id="IDALUFS"></span>Element

<table><tbody><tr class="odd"><td><span id="NT-element"></span>[39]   </td><td><code>element</code></td><td>   ::=   </td><td><code>                         EmptyElemTag                     </code></td><td></td></tr><tr class="even"><td></td><td></td><td></td><td><code>| STag                         content                         ETag                     </code></td><td><a href="#GIMatch">[WFC: Element Type Match]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td></td><td><a href="#elementvalid">[VC: Element Valid]</a></td></tr></tbody></table>

This specification does not constrain the application semantics, use, or (beyond syntax) names of the element types and attributes, except that names beginning with a match to `(('X'|'x')('M'|'m')('L'|'l'))` are reserved for standardization in this or future versions of this specification.

<span id="GIMatch"></span>**Well-formedness constraint: Element Type Match**

The [Name](#NT-Name) in an element's end-tag *MUST* match the element type in the start-tag.

<span id="elementvalid"></span>**Validity constraint: Element Valid**

An element is valid if there is a declaration matching [elementdecl](#NT-elementdecl) where the [Name](#NT-Name) matches the element type, and one of the following holds:

1.  The declaration matches **EMPTY** and the element has no [content](#dt-content "Content") (not even entity references, comments, PIs or white space).

2.  The declaration matches [children](#NT-children) and the sequence of [child elements](#dt-parentchild "Parent/Child") belongs to the language generated by the regular expression in the content model, with optional white space, comments and PIs (i.e. markup matching production \[27\] [Misc](#NT-Misc)) between the start-tag and the first child element, between child elements, or between the last child element and the end-tag. Note that a CDATA section containing only white space or a reference to an entity whose replacement text is character references expanding to white space do not match the nonterminal [S](#NT-S), and hence cannot appear in these positions; however, a reference to an internal entity with a literal value consisting of character references expanding to white space does match [S](#NT-S), since its replacement text is the white space resulting from expansion of the character references.

3.  The declaration matches [Mixed](#NT-Mixed) , and the content (after replacing any entity references with their replacement text) consists of [character data](#dt-chardata "Character Data") (including [CDATA sections](#dt-cdsection "CDATA Section")), [comments](#dt-comment "Comment"), [PIs](#dt-pi "Processing instruction") and [child elements](#dt-parentchild "Parent/Child") whose types match names in the content model.

4.  The declaration matches **ANY**, and the content (after replacing any entity references with their replacement text) consists of character data , [CDATA sections](#dt-cdsection "CDATA Section"), [comments](#dt-comment "Comment"), [PIs](#dt-pi "Processing instruction") and [child elements](#dt-parentchild "Parent/Child") whose types have been declared.

### <span id="sec-starttags"></span>3.1 Start-Tags, End-Tags, and Empty-Element Tags

\[<span id="dt-stag">Definition</span>: The beginning of every non-empty XML element is marked by a **start-tag**.\]

##### <span id="IDA10FS"></span>Start-tag

<table><tbody><tr class="odd"><td><span id="NT-STag"></span>[40]   </td><td><code>STag</code></td><td>   ::=   </td><td><code>'&lt;' Name (S                                 Attribute)* S? '&gt;'</code></td><td><a href="#uniqattspec">[WFC: Unique Att Spec]</a></td></tr><tr class="even"><td><span id="NT-Attribute"></span>[41]   </td><td><code>Attribute</code></td><td>   ::=   </td><td><code>                                 Name                                 Eq                                 AttValue                             </code></td><td><a href="#ValueType">[VC: Attribute Value Type]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td></td><td><a href="#NoExternalRefs">[WFC: No External Entity References]</a></td></tr><tr class="even"><td></td><td></td><td></td><td></td><td><a href="#CleanAttrVals">[WFC: No &lt; in Attribute Values]</a></td></tr></tbody></table>

The [Name](#NT-Name) in the start- and end-tags gives the element's **type**. \[<span id="dt-attr">Definition</span>: The [Name](#NT-Name)-[AttValue](#NT-AttValue) pairs are referred to as the **attribute specifications** of the element\], \[<span id="dt-attrname">Definition</span>: with the [Name](#NT-Name) in each pair referred to as the **attribute name** \] and \[<span id="dt-attrval">Definition</span>: the content of the [AttValue](#NT-AttValue) (the text between the `'` or `"` delimiters) as the **attribute value**.\] Note that the order of attribute specifications in a start-tag or empty-element tag is not significant.

<span id="uniqattspec"></span>**Well-formedness constraint: Unique Att Spec**

An attribute name *MUST NOT* appear more than once in the same start-tag or empty-element tag.

<span id="ValueType"></span>**Validity constraint: Attribute Value Type**

The attribute *MUST* have been declared; the value *MUST* be of the type declared for it. (For attribute types, see [**3.3 Attribute-List Declarations**](#attdecls).)

<span id="NoExternalRefs"></span>**Well-formedness constraint: No External Entity References**

Attribute values *MUST NOT* contain direct or indirect entity references to external entities.

<span id="CleanAttrVals"></span>**Well-formedness constraint: No `<` in Attribute Values**

The [replacement text](#dt-repltext "Replacement Text") of any entity referred to directly or indirectly in an attribute value *MUST NOT* contain a `<`.

An example of a start-tag:

    <termdef id="dt-dog" term="dog">

\[<span id="dt-etag">Definition</span>: The end of every element that begins with a start-tag *MUST* be marked by an **end-tag** containing a name that echoes the element's type as given in the start-tag:\]

##### <span id="IDAZIIS"></span>End-tag

<table><tbody><tr class="odd"><td><span id="NT-ETag"></span>[42]   </td><td><code>ETag</code></td><td>   ::=   </td><td><code>'&lt;/' Name                                 S? '&gt;'</code></td></tr></tbody></table>

An example of an end-tag:

    </termdef>

\[<span id="dt-content">Definition</span>: The [text](#dt-text "Text") between the start-tag and end-tag is called the element's **content**:\]

##### <span id="IDAHKIS"></span>Content of Elements

<table><tbody><tr class="odd"><td><span id="NT-content"></span>[43]   </td><td><code>content</code></td><td>   ::=   </td><td><code>                                 CharData? ((element | Reference | CDSect | PI | Comment) CharData?)*</code></td></tr></tbody></table>

\[<span id="dt-empty">Definition</span>: An element with no [content](#NT-content) is said to be **empty**.\] The representation of an empty element is either a start-tag immediately followed by an end-tag, or an empty-element tag. \[<span id="dt-eetag">Definition</span>: An **empty-element tag** takes a special form:\]

##### <span id="IDAMMIS"></span>Tags for Empty Elements

<table><tbody><tr class="odd"><td><span id="NT-EmptyElemTag"></span>[44]   </td><td><code>EmptyElemTag</code></td><td>   ::=   </td><td><code>'&lt;' Name (S                                 Attribute)* S? '/&gt;'</code></td><td><a href="#uniqattspec">[WFC: Unique Att Spec]</a></td></tr></tbody></table>

Empty-element tags may be used for any element which has no content, whether or not it is declared using the keyword **EMPTY**. [For interoperability](#dt-interop "For interoperability"), the empty-element tag *SHOULD* be used, and *SHOULD* only be used, for elements which are declared EMPTY.

Examples of empty elements:

    <IMG align="left"
    src="http://www.w3.org/Icons/WWW/w3c_home" />
    <br></br>
    <br/>

### <span id="elemdecls"></span>3.2 Element Type Declarations

The [element](#dt-element "Element") structure of an [XML document](#dt-xml-doc "XML Document") may, for [validation](#dt-valid "Validity") purposes, be constrained using element type and attribute-list declarations. An element type declaration constrains the element's [content](#dt-content "Content").

Element type declarations often constrain which element types can appear as [children](#dt-parentchild "Parent/Child") of the element. At user option, an XML processor *MAY* issue a warning when a declaration mentions an element type for which no declaration is provided, but this is not an error.

\[<span id="dt-eldecl">Definition</span>: An **element type declaration** takes the form:\]

##### <span id="IDAYPIS"></span>Element Type Declaration

<table><tbody><tr class="odd"><td><span id="NT-elementdecl"></span>[45]   </td><td><code>elementdecl</code></td><td>   ::=   </td><td><code>'&lt;!ELEMENT' S                                 Name                                 S                                 contentspec                                 S? '&gt;'</code></td><td><a href="#EDUnique">[VC: Unique Element Type Declaration]</a></td></tr><tr class="even"><td><span id="NT-contentspec"></span>[46]   </td><td><code>contentspec</code></td><td>   ::=   </td><td><code>'EMPTY' | 'ANY' | Mixed | children                             </code></td><td></td></tr></tbody></table>

where the [Name](#NT-Name) gives the element type being declared.

<span id="EDUnique"></span>**Validity constraint: Unique Element Type Declaration**

An element type *MUST NOT* be declared more than once.

Examples of element type declarations:

    <!ELEMENT br EMPTY>
    <!ELEMENT p (#PCDATA|emph)* >
    <!ELEMENT %name.para; %content.para; >
    <!ELEMENT container ANY>

#### <span id="sec-element-content"></span>3.2.1 Element Content

\[<span id="dt-elemcontent">Definition</span>: An element [type](#dt-stag "Start-Tag") has **element content** when elements of that type *MUST* contain only [child](#dt-parentchild "Parent/Child") elements (no character data), optionally separated by white space (characters matching the nonterminal [S](#NT-S)).\] \[<span id="dt-content-model">Definition</span>: In this case, the constraint includes a **content model**, a simple grammar governing the allowed types of the child elements and the order in which they are allowed to appear.\] The grammar is built on content particles ([cp](#NT-cp)s), which consist of names, choice lists of content particles, or sequence lists of content particles:

##### <span id="IDATTIS"></span>Element-content Models

<table><tbody><tr class="odd"><td><span id="NT-children"></span>[47]   </td><td><code>children</code></td><td>   ::=   </td><td><code>(choice | seq) ('?' | '*' | '+')?</code></td><td></td></tr><tr class="even"><td><span id="NT-cp"></span>[48]   </td><td><code>cp</code></td><td>   ::=   </td><td><code>(Name | choice | seq) ('?' | '*' | '+')?</code></td><td></td></tr><tr class="odd"><td><span id="NT-choice"></span>[49]   </td><td><code>choice</code></td><td>   ::=   </td><td><code>'(' S? cp ( S? '|' S? cp )+ S? ')'</code></td><td><a href="#vc-PEinGroup">[VC: Proper Group/PE Nesting]</a></td></tr><tr class="even"><td><span id="NT-seq"></span>[50]   </td><td><code>seq</code></td><td>   ::=   </td><td><code>'(' S? cp ( S? ',' S? cp )* S? ')'</code></td><td><a href="#vc-PEinGroup">[VC: Proper Group/PE Nesting]</a></td></tr></tbody></table>

where each [Name](#NT-Name) is the type of an element which may appear as a [child](#dt-parentchild "Parent/Child"). Any content particle in a choice list may appear in the [element content](#dt-elemcontent "Element content") at the location where the choice list appears in the grammar; content particles occurring in a sequence list *MUST* each appear in the [element content](#dt-elemcontent "Element content") in the order given in the list. The optional character following a name or list governs whether the element or the content particles in the list may occur one or more (`+`), zero or more (`*`), or zero or one times (`?`). The absence of such an operator means that the element or content particle *MUST* appear exactly once. This syntax and meaning are identical to those used in the productions in this specification.

The content of an element matches a content model if and only if it is possible to trace out a path through the content model, obeying the sequence, choice, and repetition operators and matching each element in the content against an element type in the content model. [For compatibility](#dt-compat "For Compatibility"), it is an error if the content model allows an element to match more than one occurrence of an element type in the content model. For more information, see [**D Deterministic Content Models**](#determinism).

<span id="vc-PEinGroup"></span>**Validity constraint: Proper Group/PE Nesting**

Parameter-entity [replacement text](#dt-repltext "Replacement Text") *MUST* be properly nested with parenthesized groups. That is to say, if either of the opening or closing parentheses in a [choice](#NT-choice), [seq](#NT-seq), or [Mixed](#NT-Mixed) construct is contained in the replacement text for a [parameter entity](#dt-PERef "Parameter-entity reference"), both *MUST* be contained in the same replacement text.

[For interoperability](#dt-interop "For interoperability"), if a parameter-entity reference appears in a [choice](#NT-choice), [seq](#NT-seq), or [Mixed](#NT-Mixed) construct, its replacement text *SHOULD* contain at least one non-blank character, and neither the first nor last non-blank character of the replacement text *SHOULD* be a connector (`|` or `,`).

Examples of element-content models:

    <!ELEMENT spec (front, body, back?)>
    <!ELEMENT div1 (head, (p | list | note)*, div2*)>
    <!ELEMENT dictionary-body (%div.mix; | %dict.mix;)*>

#### <span id="sec-mixed-content"></span>3.2.2 Mixed Content

\[<span id="dt-mixed">Definition</span>: An element [type](#dt-stag "Start-Tag") has **mixed content** when elements of that type may contain character data, optionally interspersed with [child](#dt-parentchild "Parent/Child") elements.\] In this case, the types of the child elements may be constrained, but not their order or their number of occurrences:

##### <span id="IDAC2IS"></span>Mixed-content Declaration

<table><tbody><tr class="odd"><td><span id="NT-Mixed"></span>[51]   </td><td><code>Mixed</code></td><td>   ::=   </td><td><code>'(' S? '#PCDATA' (S? '|' S? Name)* S? ')*' </code></td><td></td></tr><tr class="even"><td></td><td></td><td></td><td><code>| '(' S? '#PCDATA' S? ')' </code></td><td><a href="#vc-PEinGroup">[VC: Proper Group/PE Nesting]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td></td><td><a href="#vc-MixedChildrenUnique">[VC: No Duplicate Types]</a></td></tr></tbody></table>

where the [Name](#NT-Name)s give the types of elements that may appear as children. The keyword **\#PCDATA** derives historically from the term "parsed character data."

<span id="vc-MixedChildrenUnique"></span>**Validity constraint: No Duplicate Types**

The same name *MUST NOT* appear more than once in a single mixed-content declaration.

Examples of mixed content declarations:

    <!ELEMENT p (#PCDATA|a|ul|b|i|em)*>
    <!ELEMENT p (#PCDATA | %font; | %phrase; | %special; | %form;)* >
    <!ELEMENT b (#PCDATA)>

### <span id="attdecls"></span>3.3 Attribute-List Declarations

[Attributes](#dt-attr "Attribute") are used to associate name-value pairs with [elements](#dt-element "Element"). Attribute specifications *MUST NOT* appear outside of [start-tags](#dt-stag "Start-Tag") and [empty-element tags](#dt-eetag "empty-element tag"); thus, the productions used to recognize them appear in [**3.1 Start-Tags, End-Tags, and Empty-Element Tags**](#sec-starttags). Attribute-list declarations may be used:

-   To define the set of attributes pertaining to a given element type.

-   To establish type constraints for these attributes.

-   To provide [default values](#dt-default "Attribute Default") for attributes.

\[<span id="dt-attdecl">Definition</span>: **Attribute-list declarations** specify the name, data type, and default value (if any) of each attribute associated with a given element type:\]

##### <span id="IDAUAJS"></span>Attribute-list Declaration

<table><tbody><tr class="odd"><td><span id="NT-AttlistDecl"></span>[52]   </td><td><code>AttlistDecl</code></td><td>   ::=   </td><td><code>'&lt;!ATTLIST' S                             Name                             AttDef* S? '&gt;'</code></td></tr><tr class="even"><td><span id="NT-AttDef"></span>[53]   </td><td><code>AttDef</code></td><td>   ::=   </td><td><code>                             S                             Name                             S                             AttType                             S                             DefaultDecl                         </code></td></tr></tbody></table>

The [Name](#NT-Name) in the [AttlistDecl](#NT-AttlistDecl) rule is the type of an element. At user option, an XML processor *MAY* issue a warning if attributes are declared for an element type not itself declared, but this is not an error. The [Name](#NT-Name) in the [AttDef](#NT-AttDef) rule is the name of the attribute.

When more than one [AttlistDecl](#NT-AttlistDecl) is provided for a given element type, the contents of all those provided are merged. When more than one definition is provided for the same attribute of a given element type, the first declaration is binding and later declarations are ignored. [For interoperability,](#dt-interop "For interoperability") writers of DTDs may choose to provide at most one attribute-list declaration for a given element type, at most one attribute definition for a given attribute name in an attribute-list declaration, and at least one attribute definition in each attribute-list declaration. For interoperability, an XML processor *MAY* at user option issue a warning when more than one attribute-list declaration is provided for a given element type, or more than one attribute definition is provided for a given attribute, but this is not an error.

#### <span id="sec-attribute-types"></span>3.3.1 Attribute Types

XML attribute types are of three kinds: a string type, a set of tokenized types, and enumerated types. The string type may take any literal string as a value; the tokenized types are more constrained. The validity constraints noted in the grammar are applied after the attribute value has been normalized as described in [**3.3.3 Attribute-Value Normalization**](#AVNormalize).

##### <span id="IDAVEJS"></span>Attribute Types

<table><tbody><tr class="odd"><td><span id="NT-AttType"></span>[54]   </td><td><code>AttType</code></td><td>   ::=   </td><td><code>                                     StringType | TokenizedType | EnumeratedType                                 </code></td><td></td></tr><tr class="even"><td><span id="NT-StringType"></span>[55]   </td><td><code>StringType</code></td><td>   ::=   </td><td><code>'CDATA'</code></td><td></td></tr><tr class="odd"><td><span id="NT-TokenizedType"></span>[56]   </td><td><code>TokenizedType</code></td><td>   ::=   </td><td><code>'ID'</code></td><td><a href="#id">[VC: ID]</a></td></tr><tr class="even"><td></td><td></td><td></td><td></td><td><a href="#one-id-per-el">[VC: One ID per Element Type]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td></td><td><a href="#id-default">[VC: ID Attribute Default]</a></td></tr><tr class="even"><td></td><td></td><td></td><td><code>| 'IDREF'</code></td><td><a href="#idref">[VC: IDREF]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td><code>| 'IDREFS'</code></td><td><a href="#idref">[VC: IDREF]</a></td></tr><tr class="even"><td></td><td></td><td></td><td><code>| 'ENTITY'</code></td><td><a href="#entname">[VC: Entity Name]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td><code>| 'ENTITIES'</code></td><td><a href="#entname">[VC: Entity Name]</a></td></tr><tr class="even"><td></td><td></td><td></td><td><code>| 'NMTOKEN'</code></td><td><a href="#nmtok">[VC: Name Token]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td><code>| 'NMTOKENS'</code></td><td><a href="#nmtok">[VC: Name Token]</a></td></tr></tbody></table>

<span id="id"></span>**Validity constraint: ID**

Values of type **ID** *MUST* match the [Name](#NT-Name) production. A name *MUST NOT* appear more than once in an XML document as a value of this type; i.e., ID values *MUST* uniquely identify the elements which bear them.

<span id="one-id-per-el"></span>**Validity constraint: One ID per Element Type**

An element type *MUST NOT* have more than one ID attribute specified.

<span id="id-default"></span>**Validity constraint: ID Attribute Default**

An ID attribute *MUST* have a declared default of **\#IMPLIED** or **\#REQUIRED**.

<span id="idref"></span>**Validity constraint: IDREF**

Values of type **IDREF** *MUST* match the [Name](#NT-Name) production, and values of type **IDREFS** *MUST* match [Names](#NT-Names); each [Name](#NT-Name) *MUST* match the value of an ID attribute on some element in the XML document; i.e. **IDREF** values *MUST* match the value of some ID attribute.

<span id="entname"></span>**Validity constraint: Entity Name**

Values of type **ENTITY** *MUST* match the [Name](#NT-Name) production, values of type **ENTITIES** *MUST* match [Names](#NT-Names); each [Name](#NT-Name) *MUST* match the name of an [unparsed entity](#dt-unparsed "Unparsed Entity") declared in the [DTD](#dt-doctype "Document Type Declaration").

<span id="nmtok"></span>**Validity constraint: Name Token**

Values of type **NMTOKEN** *MUST* match the [Nmtoken](#NT-Nmtoken) production; values of type **NMTOKENS** *MUST* match [Nmtokens](#NT-Nmtokens).

\[<span id="dt-enumerated">Definition</span>: **Enumerated attributes** have a list of allowed values in their declaration \]. They *MUST* take one of those values. There are two kinds of enumerated attribute types:

##### <span id="IDAANJS"></span>Enumerated Attribute Types

<table><tbody><tr class="odd"><td><span id="NT-EnumeratedType"></span>[57]   </td><td><code>EnumeratedType</code></td><td>   ::=   </td><td><code>                                 NotationType | Enumeration                             </code></td><td></td></tr><tr class="even"><td><span id="NT-NotationType"></span>[58]   </td><td><code>NotationType</code></td><td>   ::=   </td><td><code>'NOTATION' S '(' S? Name (S? '|' S? Name)* S? ')' </code></td><td><a href="#notatn">[VC: Notation Attributes]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td></td><td><a href="#OneNotationPer">[VC: One Notation Per Element Type]</a></td></tr><tr class="even"><td></td><td></td><td></td><td></td><td><a href="#NoNotationEmpty">[VC: No Notation on Empty Element]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td></td><td><a href="#NoDuplicateTokens">[VC: No Duplicate Tokens]</a></td></tr><tr class="even"><td><span id="NT-Enumeration"></span>[59]   </td><td><code>Enumeration</code></td><td>   ::=   </td><td><code>'(' S? Nmtoken (S? '|' S? Nmtoken)* S? ')'</code></td><td><a href="#enum">[VC: Enumeration]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td></td><td><a href="#NoDuplicateTokens">[VC: No Duplicate Tokens]</a></td></tr></tbody></table>

A **NOTATION** attribute identifies a [notation](#dt-notation "Notation"), declared in the DTD with associated system and/or public identifiers, to be used in interpreting the element to which the attribute is attached.

<span id="notatn"></span>**Validity constraint: Notation Attributes**

Values of this type *MUST* match one of the [notation](#Notations) names included in the declaration; all notation names in the declaration *MUST* be declared.

<span id="OneNotationPer"></span>**Validity constraint: One Notation Per Element Type**

An element type *MUST NOT* have more than one **NOTATION** attribute specified.

<span id="NoNotationEmpty"></span>**Validity constraint: No Notation on Empty Element**

[For compatibility](#dt-compat "For Compatibility"), an attribute of type **NOTATION** *MUST NOT* be declared on an element declared **EMPTY**.

<span id="NoDuplicateTokens"></span>**Validity constraint: No Duplicate Tokens**

The notation names in a single [NotationType](#NT-NotationType) attribute declaration, as well as the [NmToken](#NT-Nmtoken)s in a single [Enumeration](#NT-Enumeration) attribute declaration, *MUST* all be distinct.

<span id="enum"></span>**Validity constraint: Enumeration**

Values of this type *MUST* match one of the [Nmtoken](#NT-Nmtoken) tokens in the declaration.

[For interoperability,](#dt-interop "For interoperability") the same [Nmtoken](#NT-Nmtoken) *SHOULD NOT* occur more than once in the enumerated attribute types of a single element type.

#### <span id="sec-attr-defaults"></span>3.3.2 Attribute Defaults

An [attribute declaration](#dt-attdecl "Attribute-List Declaration") provides information on whether the attribute's presence is *REQUIRED*, and if not, how an XML processor is to react if a declared attribute is absent in a document.

##### <span id="IDAGUJS"></span>Attribute Defaults

<table><tbody><tr class="odd"><td><span id="NT-DefaultDecl"></span>[60]   </td><td><code>DefaultDecl</code></td><td>   ::=   </td><td><code>'#REQUIRED' | '#IMPLIED' </code></td><td></td></tr><tr class="even"><td></td><td></td><td></td><td><code>| (('#FIXED' S)? AttValue)</code></td><td><a href="#RequiredAttr">[VC: Required Attribute]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td></td><td><a href="#defattrvalid">[VC: Attribute Default Value Syntactically Correct]</a></td></tr><tr class="even"><td></td><td></td><td></td><td></td><td><a href="#CleanAttrVals">[WFC: No &lt; in Attribute Values]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td></td><td><a href="#FixedAttr">[VC: Fixed Attribute Default]</a></td></tr><tr class="even"><td></td><td></td><td></td><td></td><td><a href="#NoExternalRefs">[WFC: No External Entity References]</a></td></tr></tbody></table>

In an attribute declaration, **\#REQUIRED** means that the attribute *MUST* always be provided, **\#IMPLIED** that no default value is provided. \[<span id="dt-default">Definition</span>: If the declaration is neither **\#REQUIRED** nor **\#IMPLIED**, then the [AttValue](#NT-AttValue) value contains the declared **default** value; the **\#FIXED** keyword states that the attribute *MUST* always have the default value. When an XML processor encounters an element without a specification for an attribute for which it has read a default value declaration, it *MUST* report the attribute with the declared default value to the application.\]

<span id="RequiredAttr"></span>**Validity constraint: Required Attribute**

If the default declaration is the keyword **\#REQUIRED**, then the attribute *MUST* be specified for all elements of the type in the attribute-list declaration.

<span id="defattrvalid"></span>**Validity constraint: Attribute Default Value Syntactically Correct**

The declared default value *MUST* meet the syntactic constraints of the declared attribute type. That is, the default value of an attribute:

-   of type IDREF or ENTITY must match the [Name](#NT-Name) production;

-   of type IDREFS or ENTITIES must match the [Names](#NT-Names) production;

-   of type NMTOKEN must match the [Nmtoken](#NT-Nmtoken) production;

-   of type NMTOKENS must match the [Nmtokens](#NT-Nmtokens) production;

-   of an [enumerated type](#NT-EnumeratedType) (either a [NOTATION](#NT-NotationType) type or an [enumeration](#NT-Enumeration)) must match one of the enumerated values.

Note that only the syntactic constraints of the type are required here; other constraints (e.g. that the value be the name of a declared unparsed entity, for an attribute of type ENTITY) will be reported by a validating parser only if an element without a specification for this attribute actually occurs.

<span id="FixedAttr"></span>**Validity constraint: Fixed Attribute Default**

If an attribute has a default value declared with the **\#FIXED** keyword, instances of that attribute *MUST* match the default value.

Examples of attribute-list declarations:

    <!ATTLIST termdef
    id      ID      #REQUIRED
    name    CDATA   #IMPLIED>
    <!ATTLIST list
    type    (bullets|ordered|glossary)  "ordered">
    <!ATTLIST form
    method  CDATA   #FIXED "POST">

#### <span id="AVNormalize"></span>3.3.3 Attribute-Value Normalization

Before the value of an attribute is passed to the application or checked for validity, the XML processor *MUST* normalize the attribute value by applying the algorithm below, or by using some other method such that the value passed to the application is the same as that produced by the algorithm.

1.  All line breaks *MUST* have been normalized on input to \#xA as described in [**2.11 End-of-Line Handling**](#sec-line-ends), so the rest of this algorithm operates on text normalized in this way.

2.  Begin with a normalized value consisting of the empty string.

3.  For each character, entity reference, or character reference in the unnormalized attribute value, beginning with the first and continuing to the last, do the following:

    -   For a character reference, append the referenced character to the normalized value.

    -   For an entity reference, recursively apply step 3 of this algorithm to the replacement text of the entity.

    -   For a white space character (\#x20, \#xD, \#xA, \#x9), append a space character (\#x20) to the normalized value.

    -   For another character, append the character to the normalized value.

If the attribute type is not CDATA, then the XML processor *MUST* further process the normalized attribute value by discarding any leading and trailing space (\#x20) characters, and by replacing sequences of space (\#x20) characters by a single space (\#x20) character.

Note that if the unnormalized attribute value contains a character reference to a white space character other than space (\#x20), the normalized value contains the referenced character itself (\#xD, \#xA or \#x9). This contrasts with the case where the unnormalized value contains a white space character (not a reference), which is replaced with a space character (\#x20) in the normalized value and also contrasts with the case where the unnormalized value contains an entity reference whose replacement text contains a white space character; being recursively processed, the white space character is replaced with a space character (\#x20) in the normalized value.

All attributes for which no declaration has been read *SHOULD* be treated by a non-validating processor as if declared **CDATA**.

It is an error if an [attribute value](#dt-attrval "Attribute Value") contains a [reference](#dt-entref "Entity Reference") to an entity for which no declaration has been read.

Following are examples of attribute normalization. Given the following declarations:

    <!ENTITY d "&#xD;">
    <!ENTITY a "&#xA;">
    <!ENTITY da "&#xD;&#xA;">

the attribute specifications in the left column below would be normalized to the character sequences of the middle column if the attribute `a` is declared **NMTOKENS** and to those of the right columns if `a` is declared **CDATA**.

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Attribute specification</th><th>a is NMTOKENS</th><th>a is CDATA</th></tr></thead><tbody><tr class="odd"><td><div class="exampleInner"><pre><code>a=&quot;
xyz&quot;</code></pre></div></td><td><div class="exampleInner"><pre><code>x y z</code></pre></div></td><td><div class="exampleInner"><pre><code>#x20 #x20 x y z</code></pre></div></td></tr><tr class="even"><td><div class="exampleInner"><pre><code>a=&quot;&amp;d;&amp;d;A&amp;a;&amp;#x20;&amp;a;B&amp;da;&quot;</code></pre></div></td><td><div class="exampleInner"><pre><code>A #x20 B</code></pre></div></td><td><div class="exampleInner"><pre><code>#x20 #x20 A #x20 #x20 #x20 B #x20 #x20</code></pre></div></td></tr><tr class="odd"><td><div class="exampleInner"><pre><code>a=
&quot;&amp;#xd;&amp;#xd;A&amp;#xa;&amp;#xa;B&amp;#xd;&amp;#xa;&quot;</code></pre></div></td><td><div class="exampleInner"><pre><code>#xD #xD A #xA #xA B #xD #xA</code></pre></div></td><td><div class="exampleInner"><pre><code>#xD #xD A #xA #xA B #xD #xA</code></pre></div></td></tr></tbody></table>

Note that the last example is invalid (but well-formed) if `a` is declared to be of type **NMTOKENS**.

### <span id="sec-condition-sect"></span>3.4 Conditional Sections

\[<span id="dt-cond-section">Definition</span>: **Conditional sections** are portions of the [document type declaration external subset](#dt-doctype "Document Type Declaration") or of external parameter entities which are included in, or excluded from, the logical structure of the DTD based on the keyword which governs them.\]

##### <span id="IDA1AKS"></span>Conditional Section

<table><tbody><tr class="odd"><td><span id="NT-conditionalSect"></span>[61]   </td><td><code>conditionalSect</code></td><td>   ::=   </td><td><code>                                 includeSect | ignoreSect                             </code></td><td></td></tr><tr class="even"><td><span id="NT-includeSect"></span>[62]   </td><td><code>includeSect</code></td><td>   ::=   </td><td><code>'&lt;![' S? 'INCLUDE' S? '[' extSubsetDecl ']]&gt;' </code></td><td><a href="#condsec-nesting">[VC: Proper Conditional Section/PE Nesting]</a></td></tr><tr class="odd"><td><span id="NT-ignoreSect"></span>[63]   </td><td><code>ignoreSect</code></td><td>   ::=   </td><td><code>'&lt;![' S? 'IGNORE' S? '[' ignoreSectContents* ']]&gt;'</code></td><td><a href="#condsec-nesting">[VC: Proper Conditional Section/PE Nesting]</a></td></tr><tr class="even"><td><span id="NT-ignoreSectContents"></span>[64]   </td><td><code>ignoreSectContents</code></td><td>   ::=   </td><td><code>                                 Ignore ('&lt;![' ignoreSectContents ']]&gt;' Ignore)*</code></td><td></td></tr><tr class="odd"><td><span id="NT-Ignore"></span>[65]   </td><td><code>Ignore</code></td><td>   ::=   </td><td><code>                                 Char* - (Char* ('&lt;![' | ']]&gt;') Char*) </code></td><td></td></tr></tbody></table>

<span id="condsec-nesting"></span>**Validity constraint: Proper Conditional Section/PE Nesting**

If any of the "`<![`", "`[`", or "`]]>`" of a conditional section is contained in the replacement text for a parameter-entity reference, all of them *MUST* be contained in the same replacement text.

Like the internal and external DTD subsets, a conditional section may contain one or more complete declarations, comments, processing instructions, or nested conditional sections, intermingled with white space.

If the keyword of the conditional section is **INCLUDE**, then the contents of the conditional section *MUST* be processed as part of the DTD. If the keyword of the conditional section is **IGNORE**, then the contents of the conditional section *MUST* *NOT* be processed as part of the DTD. If a conditional section with a keyword of **INCLUDE** occurs within a larger conditional section with a keyword of **IGNORE**, both the outer and the inner conditional sections *MUST* be ignored. The contents of an ignored conditional section *MUST* be parsed by ignoring all characters after the "`[`" following the keyword, except conditional section starts "`<![`" and ends "`]]>`", until the matching conditional section end is found. Parameter entity references *MUST NOT* be recognized in this process.

If the keyword of the conditional section is a parameter-entity reference, the parameter entity *MUST* be replaced by its content before the processor decides whether to include or ignore the conditional section.

An example:

    <!ENTITY % draft 'INCLUDE' >
    <!ENTITY % final 'IGNORE' >
    <![%draft;[
    <!ELEMENT book (comments*, title, body, supplements?)>
    ]]>
    <![%final;[
    <!ELEMENT book (title, body, supplements?)>
    ]]>

<span id="sec-physical-struct"></span>4 Physical Structures
-----------------------------------------------------------

\[<span id="dt-entity">Definition</span>: An XML document may consist of one or many storage units. These are called **entities**; they all have **content** and are all (except for the [document entity](#dt-docent "Document Entity") and the [external DTD subset](#dt-doctype "Document Type Declaration")) identified by entity **name**.\] Each XML document has one entity called the [document entity](#dt-docent "Document Entity"), which serves as the starting point for the [XML processor](#dt-xml-proc "XML Processor") and may contain the whole document.

Entities may be either parsed or unparsed. \[<span id="dt-parsedent">Definition</span>: The contents of a **parsed entity** are referred to as its [replacement text](#dt-repltext "Replacement Text"); this [text](#dt-text "Text") is considered an integral part of the document.\]

\[<span id="dt-unparsed">Definition</span>: An **unparsed entity** is a resource whose contents may or may not be [text](#dt-text "Text"), and if text, may be other than XML. Each unparsed entity has an associated [notation](#dt-notation "Notation"), identified by name. Beyond a requirement that an XML processor make the identifiers for the entity and notation available to the application, XML places no constraints on the contents of unparsed entities.\]

Parsed entities are invoked by name using entity references; unparsed entities by name, given in the value of **ENTITY** or **ENTITIES** attributes.

\[<span id="gen-entity">Definition</span>: **General entities** are entities for use within the document content. In this specification, general entities are sometimes referred to with the unqualified term *entity* when this leads to no ambiguity.\] \[<span id="dt-PE">Definition</span>: **Parameter entities** are parsed entities for use within the DTD.\] These two types of entities use different forms of reference and are recognized in different contexts. Furthermore, they occupy different namespaces; a parameter entity and a general entity with the same name are two distinct entities.

### <span id="sec-references"></span>4.1 Character and Entity References

\[<span id="dt-charref">Definition</span>: A **character reference** refers to a specific character in the ISO/IEC 10646 character set, for example one not directly accessible from available input devices.\]

##### <span id="IDAOKKS"></span>Character Reference

<table><tbody><tr class="odd"><td><span id="NT-CharRef"></span>[66]   </td><td><code>CharRef</code></td><td>   ::=   </td><td><code>'&amp;#' [0-9]+ ';' </code></td><td></td></tr><tr class="even"><td></td><td></td><td></td><td><code>| '&amp;#x' [0-9a-fA-F]+ ';'</code></td><td><a href="#wf-Legalchar">[WFC: Legal Character]</a></td></tr></tbody></table>

<span id="wf-Legalchar"></span>**Well-formedness constraint: Legal Character**

Characters referred to using character references *MUST* match the production for [Char](#NT-Char).

If the character reference begins with "`&#x`", the digits and letters up to the terminating `;` provide a hexadecimal representation of the character's code point in ISO/IEC 10646. If it begins just with "`&#`", the digits up to the terminating `;` provide a decimal representation of the character's code point.

\[<span id="dt-entref">Definition</span>: An **entity reference** refers to the content of a named entity.\] \[<span id="dt-GERef">Definition</span>: References to parsed general entities use ampersand (`&`) and semicolon (`;`) as delimiters.\] \[<span id="dt-PERef">Definition</span>: **Parameter-entity references** use percent-sign (`%`) and semicolon (`;`) as delimiters.\]

##### <span id="IDA1MKS"></span>Entity Reference

<table><tbody><tr class="odd"><td><span id="NT-Reference"></span>[67]   </td><td><code>Reference</code></td><td>   ::=   </td><td><code>                             EntityRef | CharRef                         </code></td><td></td></tr><tr class="even"><td><span id="NT-EntityRef"></span>[68]   </td><td><code>EntityRef</code></td><td>   ::=   </td><td><code>'&amp;' Name ';'</code></td><td><a href="#wf-entdeclared">[WFC: Entity Declared]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td></td><td><a href="#vc-entdeclared">[VC: Entity Declared]</a></td></tr><tr class="even"><td></td><td></td><td></td><td></td><td><a href="#textent">[WFC: Parsed Entity]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td></td><td><a href="#norecursion">[WFC: No Recursion]</a></td></tr><tr class="even"><td><span id="NT-PEReference"></span>[69]   </td><td><code>PEReference</code></td><td>   ::=   </td><td><code>'%' Name ';'</code></td><td><a href="#vc-entdeclared">[VC: Entity Declared]</a></td></tr><tr class="odd"><td></td><td></td><td></td><td></td><td><a href="#norecursion">[WFC: No Recursion]</a></td></tr><tr class="even"><td></td><td></td><td></td><td></td><td><a href="#indtd">[WFC: In DTD]</a></td></tr></tbody></table>

<span id="wf-entdeclared"></span>**Well-formedness constraint: Entity Declared**

In a document without any DTD, a document with only an internal DTD subset which contains no parameter entity references, or a document with "`standalone='yes'`", for an entity reference that does not occur within the external subset or a parameter entity, the [Name](#NT-Name) given in the entity reference *MUST* [match](#dt-match "match") that in an [entity declaration](#sec-entity-decl) that does not occur within the external subset or a parameter entity, except that well-formed documents need not declare any of the following entities: `amp`, `lt`, `gt`, `apos`, `quot`. The declaration of a general entity *MUST* precede any reference to it which appears in a default value in an attribute-list declaration.

Note that non-validating processors are [not obligated to](#include-if-valid) to read and process entity declarations occurring in parameter entities or in the external subset; for such documents, the rule that an entity must be declared is a well-formedness constraint only if [standalone='yes'](#sec-rmd).

<span id="vc-entdeclared"></span>**Validity constraint: Entity Declared**

In a document with an external subset or parameter entity references with "`standalone='no'`", the [Name](#NT-Name) given in the entity reference *MUST* [match](#dt-match "match") that in an [entity declaration](#sec-entity-decl). For interoperability, valid documents *SHOULD* declare the entities `amp`, `lt`, `gt`, `apos`, `quot`, in the form specified in [**4.6 Predefined Entities**](#sec-predefined-ent). The declaration of a parameter entity *MUST* precede any reference to it. Similarly, the declaration of a general entity *MUST* precede any attribute-list declaration containing a default value with a direct or indirect reference to that general entity.

<span id="textent"></span>**Well-formedness constraint: Parsed Entity**

An entity reference *MUST NOT* contain the name of an [unparsed entity](#dt-unparsed "Unparsed Entity"). Unparsed entities may be referred to only in [attribute values](#dt-attrval "Attribute Value") declared to be of type **ENTITY** or **ENTITIES**.

<span id="norecursion"></span>**Well-formedness constraint: No Recursion**

A parsed entity *MUST NOT* contain a recursive reference to itself, either directly or indirectly.

<span id="indtd"></span>**Well-formedness constraint: In DTD**

Parameter-entity references *MUST NOT* appear outside the [DTD](#dt-doctype "Document Type Declaration").

Examples of character and entity references:

    Type <key>less-than</key> (&#x3C;) to save options.
    This document was prepared on &docdate; and
    is classified &security-level;.

Example of a parameter-entity reference:

    <!-- declare the parameter entity "ISOLat2"... -->
    <!ENTITY % ISOLat2
    SYSTEM "http://www.xml.com/iso/isolat2-xml.entities" >
    <!-- ... now reference it. -->
    %ISOLat2;

### <span id="sec-entity-decl"></span>4.2 Entity Declarations

\[<span id="dt-entdecl">Definition</span>: Entities are declared thus:\]

##### <span id="IDABVKS"></span>Entity Declaration

<table><tbody><tr class="odd"><td><span id="NT-EntityDecl"></span>[70]   </td><td><code>EntityDecl</code></td><td>   ::=   </td><td><code>                                 GEDecl                                  | PEDecl                             </code></td></tr><tr class="even"><td><span id="NT-GEDecl"></span>[71]   </td><td><code>GEDecl</code></td><td>   ::=   </td><td><code>'&lt;!ENTITY' S                                 Name                                 S                                 EntityDef                                 S? '&gt;'</code></td></tr><tr class="odd"><td><span id="NT-PEDecl"></span>[72]   </td><td><code>PEDecl</code></td><td>   ::=   </td><td><code>'&lt;!ENTITY' S '%' S                                 Name                                 S                                 PEDef                                 S? '&gt;'</code></td></tr><tr class="even"><td><span id="NT-EntityDef"></span>[73]   </td><td><code>EntityDef</code></td><td>   ::=   </td><td><code>                                 EntityValue                                 | (ExternalID                                 NDataDecl?)</code></td></tr><tr class="odd"><td><span id="NT-PEDef"></span>[74]   </td><td><code>PEDef</code></td><td>   ::=   </td><td><code>                                 EntityValue | ExternalID                             </code></td></tr></tbody></table>

The [Name](#NT-Name) identifies the entity in an [entity reference](#dt-entref "Entity Reference") or, in the case of an unparsed entity, in the value of an **ENTITY** or **ENTITIES** attribute. If the same entity is declared more than once, the first declaration encountered is binding; at user option, an XML processor *MAY* issue a warning if entities are declared multiple times.

#### <span id="sec-internal-ent"></span>4.2.1 Internal Entities

\[<span id="dt-internent">Definition</span>: If the entity definition is an [EntityValue](#NT-EntityValue), the defined entity is called an **internal entity**. There is no separate physical storage object, and the content of the entity is given in the declaration.\] Note that some processing of entity and character references in the [literal entity value](#dt-litentval "Literal Entity Value") may be required to produce the correct [replacement text](#dt-repltext "Replacement Text"): see [**4.5 Construction of Entity Replacement Text**](#intern-replacement).

An internal entity is a [parsed entity](#dt-parsedent "Text Entity").

Example of an internal entity declaration:

    <!ENTITY Pub-Status "This is a pre-release of the
    specification.">

#### <span id="sec-external-ent"></span>4.2.2 External Entities

\[<span id="dt-extent">Definition</span>: If the entity is not internal, it is an **external entity**, declared as follows:\]

##### <span id="IDAX1KS"></span>External Entity Declaration

<table><tbody><tr class="odd"><td><span id="NT-ExternalID"></span>[75]   </td><td><code>ExternalID</code></td><td>   ::=   </td><td><code>'SYSTEM' S                                 SystemLiteral                             </code></td><td></td></tr><tr class="even"><td></td><td></td><td></td><td><code>| 'PUBLIC' S                                 PubidLiteral                                 S                                 SystemLiteral                             </code></td><td></td></tr><tr class="odd"><td><span id="NT-NDataDecl"></span>[76]   </td><td><code>NDataDecl</code></td><td>   ::=   </td><td><code>                                 S 'NDATA' S                                 Name                             </code></td><td><a href="#not-declared">[VC: Notation Declared]</a></td></tr></tbody></table>

If the [NDataDecl](#NT-NDataDecl) is present, this is a general [unparsed entity](#dt-unparsed "Unparsed Entity"); otherwise it is a parsed entity.

<span id="not-declared"></span>**Validity constraint: Notation Declared**

The [Name](#NT-Name) *MUST* match the declared name of a [notation](#dt-notation "Notation").

\[<span id="dt-sysid">Definition</span>: The [SystemLiteral](#NT-SystemLiteral) is called the entity's **system identifier**. It is meant to be converted to a URI reference (as defined in [\[IETF RFC 3986\]](#rfc3986)), as part of the process of dereferencing it to obtain input for the XML processor to construct the entity's replacement text.\] It is an error for a fragment identifier (beginning with a `#` character) to be part of a system identifier. Unless otherwise provided by information outside the scope of this specification (e.g. a special XML element type defined by a particular DTD, or a processing instruction defined by a particular application specification), relative URIs are relative to the location of the resource within which the entity declaration occurs. This is defined to be the external entity containing the '&lt;' which starts the declaration, at the point when it is parsed as a declaration. A URI might thus be relative to the [document entity](#dt-docent "Document Entity"), to the entity containing the [external DTD subset](#dt-doctype "Document Type Declaration"), or to some other [external parameter entity](#dt-extent "External Entity"). Attempts to retrieve the resource identified by a URI may be redirected at the parser level (for example, in an entity resolver) or below (at the protocol level, for example, via an HTTP `Location:` header). In the absence of additional information outside the scope of this specification within the resource, the base URI of a resource is always the URI of the actual resource returned. In other words, it is the URI of the resource retrieved after all redirection has occurred.

System identifiers (and other XML strings meant to be used as URI references) may contain characters that, according to [\[IETF RFC 3986\]](#rfc3986), must be escaped before a URI can be used to retrieve the referenced resource. The characters to be escaped are the control characters \#x0 to \#x1F and \#x7F (most of which cannot appear in XML), space \#x20, the delimiters '&lt;' \#x3C, '&gt;' \#x3E and '"' \#x22, the *unwise* characters '{' \#x7B, '}' \#x7D, '|' \#x7C, '\\' \#x5C, '^' \#x5E and '\`' \#x60, as well as all characters above \#x7F. Since escaping is not always a fully reversible process, it *MUST* be performed only when absolutely necessary and as late as possible in a processing chain. In particular, neither the process of converting a relative URI to an absolute one nor the process of passing a URI reference to a process or software component responsible for dereferencing it *SHOULD* trigger escaping. When escaping does occur, it *MUST* be performed as follows:

1.  Each character to be escaped is represented in UTF-8 [\[Unicode\]](#Unicode) as one or more bytes.

2.  The resulting bytes are escaped with the URI escaping mechanism (that is, converted to `%`HH, where HH is the hexadecimal notation of the byte value).

3.  The original character is replaced by the resulting character sequence.

\[<span id="dt-pubid">Definition</span>: In addition to a system identifier, an external identifier may include a **public identifier**.\] An XML processor attempting to retrieve the entity's content may use any combination of the public and system identifiers as well as additional information outside the scope of this specification to try to generate an alternative URI reference. If the processor is unable to do so, it *MUST* use the URI reference specified in the system literal. Before a match is attempted, all strings of white space in the public identifier *MUST* be normalized to single space characters (\#x20), and leading and trailing white space *MUST* be removed.

Examples of external entity declarations:

    <!ENTITY open-hatch
    SYSTEM "http://www.textuality.com/boilerplate/OpenHatch.xml">
    <!ENTITY open-hatch
    PUBLIC "-//Textuality//TEXT Standard open-hatch boilerplate//EN"
    "http://www.textuality.com/boilerplate/OpenHatch.xml">
    <!ENTITY hatch-pic
    SYSTEM "../grafix/OpenHatch.gif"
    NDATA gif >

### <span id="TextEntities"></span>4.3 Parsed Entities

#### <span id="sec-TextDecl"></span>4.3.1 The Text Declaration

External parsed entities *SHOULD* each begin with a **text declaration**.

##### <span id="IDAGDLS"></span>Text Declaration

<table><tbody><tr class="odd"><td><span id="NT-TextDecl"></span>[77]   </td><td><code>TextDecl</code></td><td>   ::=   </td><td><code>'&lt;?xml' VersionInfo? EncodingDecl                                     S? '?&gt;'</code></td></tr></tbody></table>

The text declaration *MUST* be provided literally, not by reference to a parsed entity. The text declaration *MUST NOT* appear at any position other than the beginning of an external parsed entity. The text declaration in an external parsed entity is not considered part of its [replacement text](#dt-repltext "Replacement Text").

#### <span id="wf-entities"></span>4.3.2 Well-Formed Parsed Entities

The document entity is well-formed if it matches the production labeled [document](#NT-document). An external general parsed entity is well-formed if it matches the production labeled [extParsedEnt](#NT-extParsedEnt). All external parameter entities are well-formed by definition.

**Note:**

Only parsed entities that are referenced directly or indirectly within the document are required to be well-formed.

##### <span id="IDAKFLS"></span>Well-Formed External Parsed Entity

<table><tbody><tr class="odd"><td><span id="NT-extParsedEnt"></span>[78]   </td><td><code>extParsedEnt</code></td><td>   ::=   </td><td><code>                                                                      (                                 TextDecl? content                                                                      ) -                                      (                                 Char* RestrictedChar                                 Char*                                     )                             </code></td></tr></tbody></table>

An internal general parsed entity is well-formed if its replacement text matches the production labeled [content](#NT-content). All internal parameter entities are well-formed by definition.

A consequence of well-formedness in general entities is that the logical and physical structures in an XML document are properly nested; no [start-tag](#dt-stag "Start-Tag"), [end-tag](#dt-etag "End Tag"), [empty-element tag](#dt-empty "Empty"), [element](#dt-element "Element"), [comment](#dt-comment "Comment"), [processing instruction](#dt-pi "Processing instruction"), [character reference](#dt-charref "Character Reference"), or [entity reference](#dt-entref "Entity Reference") can begin in one entity and end in another.

#### <span id="charencoding"></span>4.3.3 Character Encoding in Entities

Each external parsed entity in an XML document may use a different encoding for its characters. All XML processors *MUST* be able to read entities in both the UTF-8 and UTF-16 encodings. The terms "UTF-8" and "UTF-16" in this specification do not apply to character encodings with any other labels, even if the encodings or labels are very similar to UTF-8 or UTF-16.

Entities encoded in UTF-16 *MUST* and entities encoded in UTF-8 *MAY* begin with the Byte Order Mark described in ISO/IEC 10646 [\[ISO/IEC 10646\]](#ISO10646) or Unicode [\[Unicode\]](#Unicode) (the ZERO WIDTH NO-BREAK SPACE character, \#xFEFF). This is an encoding signature, not part of either the markup or the character data of the XML document. XML processors *MUST* be able to use this character to differentiate between UTF-8 and UTF-16 encoded documents.

Although an XML processor is required to read only entities in the UTF-8 and UTF-16 encodings, it is recognized that other encodings are used around the world, and it may be desired for XML processors to read entities that use them. In the absence of external character encoding information (such as MIME headers), parsed entities which are stored in an encoding other than UTF-8 or UTF-16 *MUST* begin with a text declaration (see [**4.3.1 The Text Declaration**](#sec-TextDecl)) containing an encoding declaration:

##### <span id="IDABKLS"></span>Encoding Declaration

<table><tbody><tr class="odd"><td><span id="NT-EncodingDecl"></span>[80]   </td><td><code>EncodingDecl</code></td><td>   ::=   </td><td><code>                                 S 'encoding' Eq ('"' EncName '"' | "'" EncName "'" ) </code></td><td></td></tr><tr class="even"><td><span id="NT-EncName"></span>[81]   </td><td><code>EncName</code></td><td>   ::=   </td><td><code>[A-Za-z] ([A-Za-z0-9._] | '-')*</code></td><td><em>/* Encoding name contains only Latin characters */</em></td></tr></tbody></table>

In the [document entity](#dt-docent "Document Entity"), the encoding declaration is part of the [XML declaration](#dt-xmldecl "XML Declaration"). The [EncName](#NT-EncName) is the name of the encoding used.

In an encoding declaration, the values "`UTF-8`", "`UTF-16`", "`ISO-10646-UCS-2`", and "`ISO-10646-UCS-4`" *SHOULD* be used for the various encodings and transformations of Unicode / ISO/IEC 10646, the values "`ISO-8859-1`", "`ISO-8859-2`", ... "`ISO-8859-`n" (where n is the part number) *SHOULD* be used for the parts of ISO 8859, and the values "`ISO-2022-JP`", "`Shift_JIS`", and "`EUC-JP`" *SHOULD* be used for the various encoded forms of JIS X-0208-1997. It is *RECOMMENDED* that character encodings registered (as *charset*s) with the Internet Assigned Numbers Authority [\[IANA-CHARSETS\]](#IANA), other than those just listed, be referred to using their registered names; other encodings *SHOULD* use names starting with an "x-" prefix. XML processors *SHOULD* match character encoding names in a case-insensitive way and *SHOULD* either interpret an IANA-registered name as the encoding registered at IANA for that name or treat it as unknown (processors are, of course, not required to support all IANA-registered encodings).

In the absence of information provided by an external transport protocol (e.g. HTTP or MIME), it is a [fatal error](#dt-fatal "Fatal Error") for an entity including an encoding declaration to be presented to the XML processor in an encoding other than that named in the declaration, or for an entity which begins with neither a Byte Order Mark nor an encoding declaration to use an encoding other than UTF-8. Note that since ASCII is a subset of UTF-8, ordinary ASCII entities do not strictly need an encoding declaration.

It is a [fatal error](#dt-fatal "Fatal Error") for a [TextDecl](#NT-TextDecl) to occur other than at the beginning of an external entity.

It is a [fatal error](#dt-fatal "Fatal Error") when an XML processor encounters an entity with an encoding that it is unable to process. It is a [fatal error](#dt-fatal "Fatal Error") if an XML entity is determined (via default, encoding declaration, or higher-level protocol) to be in a certain encoding but contains byte sequences that are not legal in that encoding. Specifically, it is a fatal error if an entity encoded in UTF-8 contains any irregular code unit sequences, as defined in Unicode [\[Unicode\]](#Unicode). Unless an encoding is determined by a higher-level protocol, it is also a [fatal error](#dt-fatal "Fatal Error") if an XML entity contains no encoding declaration and its content is not legal UTF-8 or UTF-16.

Examples of text declarations containing encoding declarations:

    <?xml encoding='UTF-8'?>
    <?xml encoding='EUC-JP'?>

#### <span id="sec-version-info"></span>4.3.4 Version Information in Entities

Each entity, including the [document entity](#dt-docent "Document Entity"), can be separately declared as XML 1.0 or XML 1.1. The version declaration appearing in the document entity determines the version of the document as a whole. An XML 1.1 document may invoke XML 1.0 external entities, so that otherwise duplicated versions of external entities, particularly DTD external subsets, need not be maintained. However, in such a case the rules of XML 1.1 are applied to the entire document.

If an entity (including the document entity) is not labeled with a version number, it is treated as if labeled as version 1.0.

### <span id="entproc"></span>4.4 XML Processor Treatment of Entities and References

The table below summarizes the contexts in which character references, entity references, and invocations of unparsed entities might appear and the *REQUIRED* behavior of an [XML processor](#dt-xml-proc "XML Processor") in each case. The labels in the leftmost column describe the recognition context:

Reference in Content  
as a reference anywhere after the [start-tag](#dt-stag "Start-Tag") and before the [end-tag](#dt-etag "End Tag") of an element; corresponds to the nonterminal [content](#NT-content).

Reference in Attribute Value  
as a reference within either the value of an attribute in a [start-tag](#dt-stag "Start-Tag"), or a default value in an [attribute declaration](#dt-attdecl "Attribute-List Declaration"); corresponds to the nonterminal [AttValue](#NT-AttValue).

Occurs as Attribute Value  
as a [Name](#NT-Name), not a reference, appearing either as the value of an attribute which has been declared as type **ENTITY**, or as one of the space-separated tokens in the value of an attribute which has been declared as type **ENTITIES**.

Reference in Entity Value  
as a reference within a parameter or internal entity's [literal entity value](#dt-litentval "Literal Entity Value") in the entity's declaration; corresponds to the nonterminal [EntityValue](#NT-EntityValue).

Reference in DTD  
as a reference within either the internal or external subsets of the [DTD](#dt-doctype "Document Type Declaration"), but outside of an [EntityValue](#NT-EntityValue), [AttValue](#NT-AttValue), [PI](#NT-PI), [Comment](#NT-Comment), [SystemLiteral](#NT-SystemLiteral), [PubidLiteral](#NT-PubidLiteral), or the contents of an ignored conditional section (see [**3.4 Conditional Sections**](#sec-condition-sect)).

.

Entity Type

Character

Parameter

Internal General

External Parsed General

Unparsed

Reference in Content

[Not recognized](#not-recognized)

[Included](#included)

[Included if validating](#include-if-valid)

[Forbidden](#forbidden)

[Included](#included)

Reference in Attribute Value

[Not recognized](#not-recognized)

[Included in literal](#inliteral)

[Forbidden](#forbidden)

[Forbidden](#forbidden)

[Included](#included)

Occurs as Attribute Value

[Not recognized](#not-recognized)

[Forbidden](#forbidden)

[Forbidden](#forbidden)

[Notify](#notify)

[Not recognized](#not-recognized)

Reference in EntityValue

[Included in literal](#inliteral)

[Bypassed](#bypass)

[Bypassed](#bypass)

[Error](#error)

[Included](#included)

Reference in DTD

[Included as PE](#as-PE)

[Forbidden](#forbidden)

[Forbidden](#forbidden)

[Forbidden](#forbidden)

[Forbidden](#forbidden)

#### <span id="not-recognized"></span>4.4.1 Not Recognized

Outside the DTD, the `%` character has no special significance; thus, what would be parameter entity references in the DTD are not recognized as markup in [content](#NT-content). Similarly, the names of unparsed entities are not recognized except when they appear in the value of an appropriately declared attribute.

#### <span id="included"></span>4.4.2 Included

\[<span id="dt-include">Definition</span>: An entity is **included** when its [replacement text](#dt-repltext "Replacement Text") is retrieved and processed, in place of the reference itself, as though it were part of the document at the location the reference was recognized.\] The replacement text may contain both [character data](#dt-chardata "Character Data") and (except for parameter entities) [markup](#dt-markup "Markup"), which *MUST* be recognized in the usual way. (The string "`AT&amp;T;`" expands to "`AT&T;`" and the remaining ampersand is not recognized as an entity-reference delimiter.) A character reference is **included** when the indicated character is processed in place of the reference itself.

#### <span id="include-if-valid"></span>4.4.3 Included If Validating

When an XML processor recognizes a reference to a parsed entity, in order to [validate](#dt-valid "Validity") the document, the processor *MUST* [include](#dt-include "Include") its replacement text. If the entity is external, and the processor is not attempting to validate the XML document, the processor *MAY*, but need not, include the entity's replacement text. If a non-validating processor does not include the replacement text, it *MUST* inform the application that it recognized, but did not read, the entity.

This rule is based on the recognition that the automatic inclusion provided by the SGML and XML entity mechanism, primarily designed to support modularity in authoring, is not necessarily appropriate for other applications, in particular document browsing. Browsers, for example, when encountering an external parsed entity reference, might choose to provide a visual indication of the entity's presence and retrieve it for display only on demand.

#### <span id="forbidden"></span>4.4.4 Forbidden

The following are forbidden, and constitute [fatal errors](#dt-fatal "Fatal Error"):

-   the appearance of a reference to an [unparsed entity](#dt-unparsed "Unparsed Entity"), except in the [EntityValue](#NT-EntityValue) in an entity declaration.

-   the appearance of any character or general-entity reference in the DTD except within an [EntityValue](#NT-EntityValue) or [AttValue](#NT-AttValue).

-   a reference to an external entity in an attribute value.

#### <span id="inliteral"></span>4.4.5 Included in Literal

When an [entity reference](#dt-entref "Entity Reference") appears in an attribute value, or a parameter entity reference appears in a literal entity value, its [replacement text](#dt-repltext "Replacement Text") *MUST* be processed in place of the reference itself as though it were part of the document at the location the reference was recognized, except that a single or double quote character in the replacement text *MUST* always be treated as a normal data character and *MUST NOT* terminate the literal. For example, this is well-formed:

    <!ENTITY % YN '"Yes"' >
    <!ENTITY WhatHeSaid "He said %YN;" >

while this is not:

    <!ENTITY EndAttr "27'" >
    <element attribute='a-&EndAttr;>

#### <span id="notify"></span>4.4.6 Notify

When the name of an [unparsed entity](#dt-unparsed "Unparsed Entity") appears as a token in the value of an attribute of declared type **ENTITY** or **ENTITIES**, a validating processor *MUST* inform the application of the [system](#dt-sysid "System Identifier") and [public](#dt-pubid "Public identifier") (if any) identifiers for both the entity and its associated [notation](#dt-notation "Notation").

#### <span id="bypass"></span>4.4.7 Bypassed

When a general entity reference appears in the [EntityValue](#NT-EntityValue) in an entity declaration, it *MUST* be bypassed and left as is.

#### <span id="as-PE"></span>4.4.8 Included as PE

Just as with external parsed entities, parameter entities need only be [included if validating](#include-if-valid). When a parameter-entity reference is recognized in the DTD and included, its [replacement text](#dt-repltext "Replacement Text") *MUST* be enlarged by the attachment of one leading and one following space (\#x20) character; the intent is to constrain the replacement text of parameter entities to contain an integral number of grammatical tokens in the DTD. This behavior *MUST NOT* apply to parameter entity references within entity values; these are described in [**4.4.5 Included in Literal**](#inliteral).

#### <span id="error"></span>4.4.9 Error

It is an [error](#dt-error "Error") for a reference to an unparsed entity to appear in the [EntityValue](#NT-EntityValue) in an entity declaration.

### <span id="intern-replacement"></span>4.5 Construction of Entity Replacement Text

In discussing the treatment of entities, it is useful to distinguish two forms of the entity's value. \[<span id="dt-litentval">Definition</span>: For an internal entity, the **literal entity value** is the quoted string actually present in the entity declaration, corresponding to the non-terminal [EntityValue](#NT-EntityValue).\] \[<span id="dt-extlitentval">Definition</span>: For an external entity, the **literal entity value** is the exact text contained in the entity.\] \[<span id="dt-repltext">Definition</span>: For an internal entity, the **replacement text** is the content of the entity, after replacement of character references and parameter-entity references.\] \[<span id="dt-extrepltext">Definition</span>: For an external entity, the **replacement text** is the content of the entity, after stripping the text declaration (leaving any surrounding white space) if there is one but without any replacement of character references or parameter-entity references.\]

The literal entity value as given in an internal entity declaration ([EntityValue](#NT-EntityValue)) may contain character, parameter-entity, and general-entity references. Such references *MUST* be contained entirely within the literal entity value. The actual replacement text that is [included](#dt-include "Include") (or [included in literal](#inliteral)) as described above *MUST* contain the *replacement text* of any parameter entities referred to, and *MUST* contain the character referred to, in place of any character references in the literal entity value; however, general-entity references *MUST* be left as-is, unexpanded. For example, given the following declarations:

    <!ENTITY % pub    "&#xc9;ditions Gallimard" >
    <!ENTITY   rights "All rights reserved" >
    <!ENTITY   book   "La Peste: Albert Camus,
    &#xA9; 1947 %pub;. &rights;" >

then the replacement text for the entity "`book`" is:

    La Peste: Albert Camus,
    © 1947 Éditions Gallimard. &rights;

The general-entity reference "`&rights;`" would be expanded should the reference "`&book;`" appear in the document's content or an attribute value.

These simple rules may have complex interactions; for a detailed discussion of a difficult example, see [**C Expansion of Entity and Character References**](#sec-entexpand).

### <span id="sec-predefined-ent"></span>4.6 Predefined Entities

\[<span id="dt-escape">Definition</span>: Entity and character references may both be used to **escape** the left angle bracket, ampersand, and other delimiters. A set of general entities (`amp`, `lt`, `gt`, `apos`, `quot`) is specified for this purpose. Numeric character references may also be used; they are expanded immediately when recognized and *MUST* be treated as character data, so the numeric character references "`&#60;`" and "`&#38;`" may be used to escape `<` and `&` when they occur in character data.\]

All XML processors *MUST* recognize these entities whether they are declared or not. [For interoperability](#dt-interop "For interoperability"), valid XML documents *SHOULD* declare these entities, like any others, before using them. If the entities `lt` or `amp` are declared, they *MUST* be declared as internal entities whose replacement text is a character reference to the respective character (less-than sign or ampersand) being escaped; the double escaping is *REQUIRED* for these entities so that references to them produce a well-formed result. If the entities `gt`, `apos`, or `quot` are declared, they *MUST* be declared as internal entities whose replacement text is the single character being escaped (or a character reference to that character; the double escaping here is *OPTIONAL* but harmless). For example:

    <!ENTITY lt     "&#38;#60;">
    <!ENTITY gt     "&#62;">
    <!ENTITY amp    "&#38;#38;">
    <!ENTITY apos   "&#39;">
    <!ENTITY quot   "&#34;">

### <span id="Notations"></span>4.7 Notation Declarations

\[<span id="dt-notation">Definition</span>: **Notations** identify by name the format of [unparsed entities](#dt-unparsed "Unparsed Entity"), the format of elements which bear a notation attribute, or the application to which a [processing instruction](#dt-pi "Processing instruction") is addressed.\]

\[<span id="dt-notdecl">Definition</span>: **Notation declarations** provide a name for the notation, for use in entity and attribute-list declarations and in attribute specifications, and an external identifier for the notation which may allow an XML processor or its client application to locate a helper application capable of processing data in the given notation.\]

##### <span id="IDANRMS"></span>Notation Declarations

<table><tbody><tr class="odd"><td><span id="NT-NotationDecl"></span>[82]   </td><td><code>NotationDecl</code></td><td>   ::=   </td><td><code>'&lt;!NOTATION' S                             Name                             S (ExternalID | PublicID) S? '&gt;'</code></td><td><a href="#UniqueNotationName">[VC: Unique Notation Name]</a></td></tr><tr class="even"><td><span id="NT-PublicID"></span>[83]   </td><td><code>PublicID</code></td><td>   ::=   </td><td><code>'PUBLIC' S                             PubidLiteral                         </code></td><td></td></tr></tbody></table>

<span id="UniqueNotationName"></span>**Validity constraint: Unique Notation Name**

A given [Name](#NT-Name) *MUST NOT* be declared in more than one notation declaration.

XML processors *MUST* provide applications with the name and external identifier(s) of any notation declared and referred to in an attribute value, attribute definition, or entity declaration. They *MAY* additionally resolve the external identifier into the [system identifier](#dt-sysid "System Identifier"), file name, or other information needed to allow the application to call a processor for data in the notation described. (It is not an error, however, for XML documents to declare and refer to notations for which notation-specific applications are not available on the system where the XML processor or application is running.)

### <span id="sec-doc-entity"></span>4.8 Document Entity

\[<span id="dt-docent">Definition</span>: The **document entity** serves as the root of the entity tree and a starting-point for an [XML processor](#dt-xml-proc "XML Processor").\] This specification does not specify how the document entity is to be located by an XML processor; unlike other entities, the document entity has no name and might well appear on a processor input stream without any identification at all.

<span id="sec-conformance"></span>5 Conformance
-----------------------------------------------

### <span id="proc-types"></span>5.1 Validating and Non-Validating Processors

Conforming [XML processors](#dt-xml-proc "XML Processor") fall into two classes: validating and non-validating.

Validating and non-validating processors alike *MUST* report violations of this specification's well-formedness constraints in the content of the [document entity](#dt-docent "Document Entity") and any other [parsed entities](#dt-parsedent "Text Entity") that they read.

\[<span id="dt-validating">Definition</span>: **Validating processors** *MUST*, at user option, report violations of the constraints expressed by the declarations in the [DTD](#dt-doctype "Document Type Declaration"), and failures to fulfill the validity constraints given in this specification.\] To accomplish this, validating XML processors *MUST* read and process the entire DTD and all external parsed entities referenced in the document.

Non-validating processors are *REQUIRED* to check only the [document entity](#dt-docent "Document Entity"), including the entire internal DTD subset, for well-formedness. \[<span id="dt-use-mdecl">Definition</span>: While they are not required to check the document for validity, they are *REQUIRED* to **process** all the declarations they read in the internal DTD subset and in any parameter entity that they read, up to the first reference to a parameter entity that they do *not* read; that is to say, they *MUST* use the information in those declarations to [normalize](#AVNormalize) attribute values, [include](#included) the replacement text of internal entities, and supply [default attribute values](#sec-attr-defaults).\] Except when `standalone="yes"`, they *MUST NOT* [process](#dt-use-mdecl "Process Declarations") [entity declarations](#dt-entdecl "entity declaration") or [attribute-list declarations](#dt-attdecl "Attribute-List Declaration") encountered after a reference to a parameter entity that is not read, since the entity may have contained overriding declarations; when `standalone="yes"`, processors *MUST* process these declarations.

Note that when processing invalid documents with a non-validating processor the application may not be presented with consistent information. For example, several requirements for uniqueness within the document may not be met, including more than one element with the same id, duplicate declarations of elements or notations with the same name, etc. In these cases the behavior of the parser with respect to reporting such information to the application is undefined.

XML 1.1 processors *MUST* be able to process both XML 1.0 and XML 1.1 documents. Programs which generate XML *SHOULD* generate XML 1.0, unless one of the specific features of XML 1.1 is required.

### <span id="safe-behavior"></span>5.2 Using XML Processors

The behavior of a validating XML processor is highly predictable; it must read every piece of a document and report all well-formedness and validity violations. Less is required of a non-validating processor; it need not read any part of the document other than the document entity. This has two effects that may be important to users of XML processors:

-   Certain well-formedness errors, specifically those that require reading external entities, may fail to be detected by a non-validating processor. Examples include the constraints entitled [Entity Declared](#wf-entdeclared), [Parsed Entity](#textent), and [No Recursion](#norecursion), as well as some of the cases described as [forbidden](#forbidden) in [**4.4 XML Processor Treatment of Entities and References**](#entproc).

-   The information passed from the processor to the application may vary, depending on whether the processor reads parameter and external entities. For example, a non-validating processor may fail to [normalize](#AVNormalize) attribute values, [include](#included) the replacement text of internal entities, or supply [default attribute values](#sec-attr-defaults), where doing so depends on having read declarations in external or parameter entities.

For maximum reliability in interoperating between different XML processors, applications which use non-validating processors *SHOULD NOT* rely on any behaviors not required of such processors. Applications which require DTD facilities not related to validation (such as the declaration of default attributes and internal entities that are or may be specified in external entities ) *SHOULD* use validating XML processors.

<span id="sec-notation"></span>6 Notation
-----------------------------------------

The formal grammar of XML is given in this specification using a simple Extended Backus-Naur Form (EBNF) notation. Each rule in the grammar defines one symbol, in the form

    symbol ::= expression

Symbols are written with an initial capital letter if they are the start symbol of a regular language, otherwise with an initial lowercase letter. Literal strings are quoted.

Within the expression on the right-hand side of a rule, the following expressions are used to match strings of one or more characters:

 `#xN`   
where `N` is a hexadecimal integer, the expression matches the character whose number (code point) in ISO/IEC 10646 is `N`. The number of leading zeros in the `#xN` form is insignificant.

 `[a-zA-Z]`, `[#xN-#xN]`   
matches any [Char](#NT-Char) with a value in the range(s) indicated (inclusive).

 `[abc]`, `[#xN#xN#xN]`   
matches any [Char](#NT-Char) with a value among the characters enumerated. Enumerations and ranges can be mixed in one set of brackets.

 `[^a-z]`, `[^#xN-#xN]`   
matches any [Char](#NT-Char) with a value *outside* the range indicated.

 `[^abc]`, `[^#xN#xN#xN]`   
matches any [Char](#NT-Char) with a value not among the characters given. Enumerations and ranges of forbidden values can be mixed in one set of brackets.

 `"string"`   
matches a literal string [matching](#dt-match "match") that given inside the double quotes.

 `'string'`   
matches a literal string [matching](#dt-match "match") that given inside the single quotes.

These symbols may be combined to match more complex patterns as follows, where `A` and `B` represent simple expressions:

(`expression`)  
`expression` is treated as a unit and may be combined as described in this list.

 `A?`   
matches `A` or nothing; optional `A`.

 `A B`   
matches `A` followed by `B`. This operator has higher precedence than alternation; thus `A B | C D` is identical to `(A B) | (C D)`.

 `A | B`   
matches `A` or `B`.

 `A - B`   
matches any string that matches `A` but does not match `B`.

 `A+`   
matches one or more occurrences of `A`. Concatenation has higher precedence than alternation; thus `A+ | B+` is identical to `(A+) | (B+)`.

 `A*`   
matches zero or more occurrences of `A`. Concatenation has higher precedence than alternation; thus `A* | B*` is identical to `(A*) | (B*)`.

Other notations used in the productions are:

 `/* ... */`   
comment.

 `[ wfc: ... ]`   
well-formedness constraint; this identifies by name a constraint on [well-formed](#dt-wellformed "Well-Formed") documents associated with a production.

 `[ vc: ... ]`   
validity constraint; this identifies by name a constraint on [valid](#dt-valid "Validity") documents associated with a production.

<span id="sec-bibliography"></span>A References
-----------------------------------------------

### <span id="sec-existing-stds"></span>A.1 Normative References

<span id="IANA"></span>IANA-CHARSETS  
(Internet Assigned Numbers Authority) [Official Names for Character Sets](http://www.iana.org/assignments/character-sets), ed. Keld Simonsen et al. (See http://www.iana.org/assignments/character-sets.)

<span id="rfc2119"></span>IETF RFC 2119  
IETF (Internet Engineering Task Force). [RFC 2119: Key words for use in RFCs to Indicate Requirement Levels](http://www.ietf.org/rfc/rfc2119.txt). Scott Bradner, 1997. (See http://www.ietf.org/rfc/rfc2119.txt.)

<span id="RFC1766"></span>IETF RFC 3066  
IETF (Internet Engineering Task Force). [RFC 3066: Tags for the Identification of Languages](http://www.ietf.org/rfc/rfc3066.txt), ed. H. Alvestrand. 2001. (See http://www.ietf.org/rfc/rfc3066.txt.)

<span id="rfc3986"></span>IETF RFC 3986  
IETF (Internet Engineering Task Force). [RFC 3986: Uniform Resource Identifier (URI): Generic Syntax](http://www.ietf.org/rfc/rfc3986.txt). T. Berners-Lee, R. Fielding, L. Masinter. 2005. (See http://www.ietf.org/rfc/rfc3986.txt.)

<span id="ISO10646"></span>ISO/IEC 10646  
ISO (International Organization for Standardization). ISO/IEC 10646-1:2000. Information technology — Universal Multiple-Octet Coded Character Set (UCS) — Part 1: Architecture and Basic Multilingual Plane and ISO/IEC 10646-2:2001. Information technology — Universal Multiple-Octet Coded Character Set (UCS) — Part 2: Supplementary Planes, as, from time to time, amended, replaced by a new edition or expanded by the addition of new parts. \[Geneva\]: International Organization for Standardization. (See <http://www.iso.ch> for the latest version.)

<span id="Unicode"></span>Unicode  
The Unicode Consortium. *The Unicode Standard, Version 4.0.* Reading, Mass.: Addison-Wesley, 2003, as updated from time to time by the publication of new versions. (See <http://www.unicode.org/unicode/standard/versions> for the latest version and additional information on versions of the standard and of the Unicode Character Database).

<span id="XML1.0"></span>XML-1.0  
W3C. [Extensible Markup Language (XML) 1.0 (Fourth Edition)](http://www.w3.org/TR/xml). Tim Bray, Jean Paoli, C.M. Sperberg-McQueen, Eve Maler, François Yergeau (editors) (See http://www.w3.org/TR/xml.)

### <span id="null"></span>A.2 Other References

<span id="Aho"></span>Aho/Ullman  
Aho, Alfred V., Ravi Sethi, and Jeffrey D. Ullman. Compilers: Principles, Techniques, and Tools. Reading: Addison-Wesley, 1986, rpt. corr. 1988.

<span id="ABK"></span>Brüggemann-Klein  
Brüggemann-Klein, Anne. [Formal Models in Document Processing](ftp://ftp.informatik.uni-freiburg.de/documents/papers/brueggem/habil.ps). Habilitationsschrift. Faculty of Mathematics at the University of Freiburg, 1993. (See ftp://ftp.informatik.uni-freiburg.de/documents/papers/brueggem/habil.ps.)

<span id="ABKDW"></span>Brüggemann-Klein and Wood  
Brüggemann-Klein, Anne, and Derick Wood. Deterministic Regular Languages. Universität Freiburg, Institut für Informatik, Bericht 38, Oktober 1991. Extended abstract in A. Finkel, M. Jantzen, Hrsg., STACS 1992, S. 173-184. Springer-Verlag, Berlin 1992. Lecture Notes in Computer Science 577. Full version titled One-Unambiguous Regular Languages in Information and Computation 140 (2): 229-253, February 1998.

<span id="Charmod"></span>Charmod  
W3C Working Draft. [Character Model for the World Wide Web 1.0](http://www.w3.org/TR/2003/WD-charmod-20030822/). Martin J. Dürst, François Yergeau, Richard Ishida, Misha Wolf, Tex Texin. (See http://www.w3.org/TR/2003/WD-charmod-20030822/.)

<span id="Clark"></span>Clark  
James Clark. [Comparison of SGML and XML](http://www.w3.org/TR/NOTE-sgml-xml-971215). (See http://www.w3.org/TR/NOTE-sgml-xml-971215.)

<span id="IANA-LANGCODES"></span>IANA-LANGCODES  
(Internet Assigned Numbers Authority) [Registry of Language Tags](http://www.iana.org/assignments/language-tags), ed. Keld Simonsen et al. (See http://www.iana.org/assignments/language-tags.)

<span id="RFC2141"></span>IETF RFC 2141  
IETF (Internet Engineering Task Force). [RFC 2141: URN Syntax](http://www.ietf.org/rfc/rfc2141.txt), ed. R. Moats. 1997. (See http://www.ietf.org/rfc/rfc2141.txt.)

<span id="rfc2376"></span>IETF RFC 3023  
IETF (Internet Engineering Task Force). [RFC 3023: XML Media Types](http://www.ietf.org/rfc/rfc3023.txt). eds. M. Murata, S. St.Laurent, D. Kohn. 2001. (See http://www.ietf.org/rfc/rfc3023.txt.)

<span id="rfc2781"></span>IETF RFC 2781  
IETF (Internet Engineering Task Force). [RFC 2781: UTF-16, an encoding of ISO 10646](http://www.ietf.org/rfc/rfc2781.txt), ed. P. Hoffman, F. Yergeau. 2000. (See http://www.ietf.org/rfc/rfc2781.txt.)

<span id="ISO639"></span>ISO 639  
(International Organization for Standardization). ISO 639:1988 (E). Code for the representation of names of languages. \[Geneva\]: International Organization for Standardization, 1988.

<span id="ISO3166"></span>ISO 3166  
(International Organization for Standardization). ISO 3166-1:1997 (E). Codes for the representation of names of countries and their subdivisions — Part 1: Country codes \[Geneva\]: International Organization for Standardization, 1997.

<span id="ISO8879"></span>ISO 8879  
ISO (International Organization for Standardization). ISO 8879:1986(E). Information processing — Text and Office Systems — Standard Generalized Markup Language (SGML). First edition — 1986-10-15. \[Geneva\]: International Organization for Standardization, 1986.

<span id="ISO10744"></span>ISO/IEC 10744  
ISO (International Organization for Standardization). ISO/IEC 10744-1992 (E). Information technology — Hypermedia/Time-based Structuring Language (HyTime). \[Geneva\]: International Organization for Standardization, 1992. *Extended Facilities Annexe.* \[Geneva\]: International Organization for Standardization, 1996.

<span id="websgml"></span>WEBSGML  
ISO (International Organization for Standardization). [ISO 8879:1986 TC2. Information technology — Document Description and Processing Languages](http://www.sgmlsource.com/8879/n0029.htm). \[Geneva\]: International Organization for Standardization, 1998. (See http://www.sgmlsource.com/8879/n0029.htm.)

<span id="xml-names"></span>XML Names  
Tim Bray, Dave Hollander, and Andrew Layman, editors. [Namespaces in XML](http://www.w3.org/TR/REC-xml-names/). Textuality, Hewlett-Packard, and Microsoft. World Wide Web Consortium, 1999. (See http://www.w3.org/TR/REC-xml-names/.)

<span id="sec-CharNorm"></span>B Definitions for Character Normalization
------------------------------------------------------------------------

This appendix contains the necessary definitions for character normalization. For additional background information and examples, see [\[Charmod\]](#Charmod).

\[<span id="dt-Uni-encform">Definition</span>: Text is said to be in a **Unicode encoding form** if it is encoded in UTF-8, UTF-16 or UTF-32.\]

\[<span id="dt-legacyenc">Definition</span>: **Legacy encoding** is taken to mean any character encoding not based on Unicode.\]

\[<span id="dt-normtransc">Definition</span>: A **normalizing transcoder** is a transcoder that converts from a [legacy encoding](#dt-legacyenc "legacy encoding") to a [Unicode encoding form](#dt-Uni-encform "Unicode encoding form") and ensures that the result is in Unicode Normalization Form C (see UAX \#15 [\[Unicode\]](#Unicode)).\]

\[<span id="dt-charesc">Definition</span>: A **character escape** is a syntactic device defined in a markup or programming language that allows one or more of:\]

1.  expressing syntax-significant characters while disregarding their significance in the syntax of the language, or

2.  expressing characters not representable in the character encoding chosen for an instance of the language, or

3.  expressing characters in general, without use of the corresponding character codes.

\[<span id="dt-certified">Definition</span>: **Certified** text is text which satisfies at least one of the following conditions:\]

1.  it has been confirmed through inspection that the text is in normalized form

2.  the source text-processing component is identified and is known to produce only normalized text.

\[<span id="dt-uninorm">Definition</span>: Text is, for the purposes of this specification, **Unicode-normalized** if it is in a [Unicode encoding form](#dt-Uni-encform "Unicode encoding form") and is in Unicode Normalization Form C, according to a version of Unicode Standard Annex \#15: Unicode Normalization Forms [\[Unicode\]](#Unicode) at least as recent as the oldest version of the Unicode Standard that contains all the characters actually present in the text, but no earlier than version 3.2.\]

\[<span id="dt-inclnorm">Definition</span>: Text is **include-normalized** if:\]

1.  the text is [Unicode-normalized](#dt-uninorm "Unicode-normalized") and does not contain any [character escapes](#dt-charesc "character escape") or [includes](#dt-include "Include") whose expansion would cause the text to become no longer [Unicode-normalized](#dt-uninorm "Unicode-normalized"); or

2.  the text is in a [legacy encoding](#dt-legacyenc "legacy encoding") and, if it were transcoded to a [Unicode encoding form](#dt-Uni-encform "Unicode encoding form") by a [normalizing transcoder](#dt-normtransc "normalizing transcoder"), the resulting text would satisfy clause 1 above.

\[<span id="dt-compchar">Definition</span>: A **composing character** is a character that is one or both of the following:\]

1.  the second character in the canonical decomposition mapping of some primary composite (as defined in D3 of UAX \#15 [\[Unicode\]](#Unicode)), or

2.  of non-zero canonical combining class (as defined in Unicode [\[Unicode\]](#Unicode)).

\[<span id="dt-fullnorm">Definition</span>: Text is **fully-normalized** if:\]

1.  the text is in a [Unicode encoding form](#dt-Uni-encform "Unicode encoding form"), is [include-normalized](#dt-inclnorm "include-normalized") and none of the [relevant constructs](#dt-relconst) comprising the text begin with a [composing character](#dt-compchar "composing character") or a character escape representing a [composing character](#dt-compchar "composing character"); or

2.  the text is in a [legacy encoding](#dt-legacyenc "legacy encoding") and, if it were transcoded to a [Unicode encoding form](#dt-Uni-encform "Unicode encoding form") by a [normalizing transcoder](#dt-normtransc "normalizing transcoder"), the resulting text would satisfy clause 1 above.

<span id="sec-entexpand"></span>C Expansion of Entity and Character References (Non-Normative)
----------------------------------------------------------------------------------------------

This appendix contains some examples illustrating the sequence of entity- and character-reference recognition and expansion, as specified in [**4.4 XML Processor Treatment of Entities and References**](#entproc).

If the DTD contains the declaration

    <!ENTITY example "<p>An ampersand (&#38;#38;) may be escaped
    numerically (&#38;#38;#38;) or with a general entity
    (&amp;amp;).</p>" >

then the XML processor will recognize the character references when it parses the entity declaration, and resolve them before storing the following string as the value of the entity "`example`":

    <p>An ampersand (&#38;) may be escaped
    numerically (&#38;#38;) or with a general entity
    (&amp;amp;).</p>

A reference in the document to "`&example;`" will cause the text to be reparsed, at which time the start- and end-tags of the `p` element will be recognized and the three references will be recognized and expanded, resulting in a `p` element with the following content (all data, no delimiters or markup):

    An ampersand (&) may be escaped
    numerically (&#38;) or with a general entity
    (&amp;).

A more complex example will illustrate the rules and their effects fully. In the following example, the line numbers are solely for reference.

    1 <?xml version='1.1'?>
    2 <!DOCTYPE test [
    3 <!ELEMENT test (#PCDATA) >
    4 <!ENTITY % xx '&#37;zz;'>
    5 <!ENTITY % zz '&#60;!ENTITY tricky "error-prone" >' >
    6 %xx;
    7 ]>
    8 <test>This sample shows a &tricky; method.</test>

This produces the following:

-   in line 4, the reference to character 37 is expanded immediately, and the parameter entity "`xx`" is stored in the symbol table with the value "`%zz;`". Since the replacement text is not rescanned, the reference to parameter entity "`zz`" is not recognized. (And it would be an error if it were, since "`zz`" is not yet declared.)

-   in line 5, the character reference "`&#60;`" is expanded immediately and the parameter entity "`zz`" is stored with the replacement text "`<!ENTITY tricky "error-prone">`", which is a well-formed entity declaration.

-   in line 6, the reference to "`xx`" is recognized, and the replacement text of "`xx`" (namely "`%zz;`") is parsed. The reference to "`zz`" is recognized in its turn, and its replacement text ("`<!ENTITY tricky "error-prone">`") is parsed. The general entity "`tricky`" has now been declared, with the replacement text "`error-prone`".

-   in line 8, the reference to the general entity "`tricky`" is recognized, and it is expanded, so the full content of the `test` element is the self-describing (and ungrammatical) string *This sample shows a error-prone method.*

<span id="determinism"></span>D Deterministic Content Models (Non-Normative)
----------------------------------------------------------------------------

As noted in [**3.2.1 Element Content**](#sec-element-content), it is required that content models in element type declarations be deterministic. This requirement is [for compatibility](#dt-compat "For Compatibility") with SGML (which calls deterministic content models "unambiguous"); XML processors built using SGML systems may flag non-deterministic content models as errors.

For example, the content model `((b, c) | (b, d))` is non-deterministic, because given an initial `b` the XML processor cannot know which `b` in the model is being matched without looking ahead to see which element follows the `b`. In this case, the two references to `b` can be collapsed into a single reference, making the model read `(b, (c | d))`. An initial `b` now clearly matches only a single name in the content model. The processor doesn't need to look ahead to see what follows; either `c` or `d` would be accepted.

More formally: a finite state automaton may be constructed from the content model using the standard algorithms, e.g. algorithm 3.5 in section 3.9 of Aho, Sethi, and Ullman [\[Aho/Ullman\]](#Aho). In many such algorithms, a follow set is constructed for each position in the regular expression (i.e., each leaf node in the syntax tree for the regular expression); if any position has a follow set in which more than one following position is labeled with the same element type name, then the content model is in error and may be reported as an error.

Algorithms exist which allow many but not all non-deterministic content models to be reduced automatically to equivalent deterministic models; see Brüggemann-Klein 1991 [\[Brüggemann-Klein\]](#ABK).

<span id="sec-guessing"></span>E Autodetection of Character Encodings (Non-Normative)
-------------------------------------------------------------------------------------

The XML encoding declaration functions as an internal label on each entity, indicating which character encoding is in use. Before an XML processor can read the internal label, however, it apparently has to know what character encoding is in use — which is what the internal label is trying to indicate. In the general case, this is a hopeless situation. It is not entirely hopeless in XML, however, because XML limits the general case in two ways: each implementation is assumed to support only a finite set of character encodings, and the XML encoding declaration is restricted in position and content in order to make it feasible to autodetect the character encoding in use in each entity in normal cases. Also, in many cases other sources of information are available in addition to the XML data stream itself. Two cases may be distinguished, depending on whether the XML entity is presented to the processor without, or with, any accompanying (external) information. We consider the first case first.

### <span id="sec-guessing-no-ext-info"></span>E.1 Detection Without External Encoding Information

Because each XML entity not accompanied by external encoding information and not in UTF-8 or UTF-16 encoding must begin with an XML encoding declaration, in which the first characters must be '`<?xml`', any conforming processor can detect, after two to four octets of input, which of the following cases apply. In reading this list, it may help to know that in UCS-4, '&lt;' is "`#x0000003C`" and '?' is "`#x0000003F`", and the Byte Order Mark required of UTF-16 data streams is "`#xFEFF`". The notation \#\# is used to denote any byte value except that two consecutive \#\#s cannot be both 00.

With a Byte Order Mark:

<table><tbody><tr class="odd"><td><code>00 00 FE FF</code></td><td>UCS-4, big-endian machine (1234 order)</td></tr><tr class="even"><td><code>FF FE 00 00</code></td><td>UCS-4, little-endian machine (4321 order)</td></tr><tr class="odd"><td><code>00 00 FF FE</code></td><td>UCS-4, unusual octet order (2143)</td></tr><tr class="even"><td><code>FE FF 00 00</code></td><td>UCS-4, unusual octet order (3412)</td></tr><tr class="odd"><td><code>FE FF ## ##</code></td><td>UTF-16, big-endian</td></tr><tr class="even"><td><code>FF FE ## ##</code></td><td>UTF-16, little-endian</td></tr><tr class="odd"><td><code>EF BB BF</code></td><td>UTF-8</td></tr></tbody></table>

Without a Byte Order Mark:

`00 00 00 3C`

UCS-4 or other encoding with a 32-bit code unit and ASCII characters encoded as ASCII values, in respectively big-endian (1234), little-endian (4321) and two unusual byte orders (2143 and 3412). The encoding declaration must be read to determine which of UCS-4 or other supported 32-bit encodings applies.

`3C 00 00 00`

`00 00 3C 00`

`00 3C 00 00`

`00 3C 00 3F`

UTF-16BE or big-endian ISO-10646-UCS-2 or other encoding with a 16-bit code unit in big-endian order and ASCII characters encoded as ASCII values (the encoding declaration must be read to determine which)

`3C 00 3F 00`

UTF-16LE or little-endian ISO-10646-UCS-2 or other encoding with a 16-bit code unit in little-endian order and ASCII characters encoded as ASCII values (the encoding declaration must be read to determine which)

`3C 3F 78 6D`

UTF-8, ISO 646, ASCII, some part of ISO 8859, Shift-JIS, EUC, or any other 7-bit, 8-bit, or mixed-width encoding which ensures that the characters of ASCII have their normal positions, width, and values; the actual encoding declaration must be read to detect which of these applies, but since all of these encodings use the same bit patterns for the relevant ASCII characters, the encoding declaration itself may be read reliably

`4C 6F A7 94`

EBCDIC (in some flavor; the full encoding declaration must be read to tell which code page is in use)

Other

UTF-8 without an encoding declaration, or else the data stream is mislabeled (lacking a required encoding declaration), corrupt, fragmentary, or enclosed in a wrapper of some kind

**Note:**

In cases above which do not require reading the encoding declaration to determine the encoding, section 4.3.3 still requires that the encoding declaration, if present, be read and that the encoding name be checked to match the actual encoding of the entity. Also, it is possible that new character encodings will be invented that will make it necessary to use the encoding declaration to determine the encoding, in cases where this is not required at present.

This level of autodetection is enough to read the XML encoding declaration and parse the character-encoding identifier, which is still necessary to distinguish the individual members of each family of encodings (e.g. to tell UTF-8 from 8859, and the parts of 8859 from each other, or to distinguish the specific EBCDIC code page in use, and so on).

Because the contents of the encoding declaration are restricted to characters from the ASCII repertoire (however encoded), a processor can reliably read the entire encoding declaration as soon as it has detected which family of encodings is in use. Since in practice, all widely used character encodings fall into one of the categories above, the XML encoding declaration allows reasonably reliable in-band labeling of character encodings, even when external sources of information at the operating-system or transport-protocol level are unreliable. Character encodings such as UTF-7 that make overloaded usage of ASCII-valued bytes may fail to be reliably detected.

Once the processor has detected the character encoding in use, it can act appropriately, whether by invoking a separate input routine for each case, or by calling the proper conversion function on each character of input.

Like any self-labeling system, the XML encoding declaration will not work if any software changes the entity's character set or encoding without updating the encoding declaration. Implementors of character-encoding routines should be careful to ensure the accuracy of the internal and external information used to label the entity.

### <span id="sec-guessing-with-ext-info"></span>E.2 Priorities in the Presence of External Encoding Information

The second possible case occurs when the XML entity is accompanied by encoding information, as in some file systems and some network protocols. When multiple sources of information are available, their relative priority and the preferred method of handling conflict should be specified as part of the higher-level protocol used to deliver XML. In particular, please refer to [\[IETF RFC 3023\]](#rfc2376) or its successor, which defines the `text/xml` and `application/xml` MIME types and provides some useful guidance. In the interests of interoperability, however, the following rule is recommended.

-   If an XML entity is in a file, the Byte-Order Mark and encoding declaration are used (if present) to determine the character encoding.

<span id="sec-xml-wg"></span>F W3C XML Working Group (Non-Normative)
--------------------------------------------------------------------

This specification was prepared and approved for publication by the W3C XML Working Group (WG). WG approval of this specification does not necessarily imply that all WG participants voted for its approval. The current and former members in the XML WG are:

-   Jon Bosak, Sun (*Chair*)
-   James Clark (*Technical Lead*)
-   Tim Bray, Textuality and Netscape (*XML Co-editor*)
-   Jean Paoli, Microsoft (*XML Co-editor*)
-   C. M. Sperberg-McQueen, U. of Ill. (*XML Co-editor*)
-   Dan Connolly, W3C (*W3C Liaison*)
-   Paula Angerstein, Texcel
-   Steve DeRose, INSO
-   Dave Hollander, HP
-   Eliot Kimber, ISOGEN
-   Eve Maler, ArborText
-   Tom Magliery, NCSA
-   Murray Maloney, SoftQuad, Grif SA, Muzmo and Veo Systems
-   MURATA Makoto (FAMILY Given), Fuji Xerox Information Systems
-   Joel Nava, Adobe
-   Conleth O'Connell, Vignette
-   Peter Sharpe, SoftQuad
-   John Tigue, DataChannel

<span id="sec-core-wg"></span>G W3C XML Core Working Group (Non-Normative)
--------------------------------------------------------------------------

The second edition of this specification was prepared by the W3C XML Core Working Group (WG). The participants in the WG at the time of publication of this edition were:

-   Leonid Arbouzov, Sun Microsystems
-   John Cowan
-   Andrew Fang, PTC-Arbortext
-   Paul Grosso, PTC-Arbortext (*Co-Chair*)
-   Konrad Lanz, A-SIT
-   Philippe Le Hégaret, W3C (*Staff Contact*)
-   Glenn Marcy, IBM
-   Sandra Martinez, NIST
-   Ravindrakumar R, CDAC
-   Lew Shannon
-   Henry Thompson, W3C (*Staff Contact*)
-   Richard Tobin, University of Edinburgh
-   Daniel Veillard
-   Norman Walsh, Sun Microsystems (*Co-Chair*)
-   François Yergeau

<span id="prod-notes"></span>H Production Notes (Non-Normative)
---------------------------------------------------------------

This edition was encoded in a slightly modified version of the [XMLspec DTD, 2.10](http://www.w3.org/2002/xmlspec/dtd/2.10/xmlspec.dtd). The XHTML versions were produced with a combination of the [xmlspec.xsl](http://www.w3.org/2002/xmlspec/xhtml/1.13/xmlspec.xsl), [diffspec.xsl](http://www.w3.org/2002/xmlspec/xhtml/1.13/diffspec.xsl), and [REC-xml.xsl](REC-xml.xsl) XSLT stylesheets.

<span id="sec-suggested-names"></span>I Suggestions for XML Names (Non-Normative)
---------------------------------------------------------------------------------

The following suggestions define what is believed to be best practice in the construction of XML names used as element names, attribute names, processing instruction targets, entity names, notation names, and the values of attributes of type ID, and are intended as guidance for document authors and schema designers. All references to Unicode are understood with respect to a particular version of the Unicode Standard greater than or equal to 3.0; which version should be used is left to the discretion of the document author or schema designer.

The first two suggestions are directly derived from the rules given for identifiers in the Unicode Standard, version 3.0, and exclude all control characters, enclosing nonspacing marks, non-decimal numbers, private-use characters, punctuation characters (with the noted exceptions), symbol characters, unassigned codepoints, and white space characters. The other suggestions are mostly derived from [\[XML-1.0\]](#XML1.0) Appendix B.

1.  The first character of any name should have a Unicode General Category of Ll, Lu, Lo, Lm, Lt, or Nl, or else be '\_' \#x5F.

2.  Characters other than the first should have a Unicode General Category of Ll, Lu, Lo, Lm, Lt, Mc, Mn, Nl, Nd, Pc, or Cf, or else be one of the following: '-' \#x2D, '.' \#x2E, ':' \#x3A or '·' \#xB7 (middle dot). Since Cf characters are not directly visible, they should be employed with caution and only when necessary, to avoid creating names which are distinct to XML processors but look the same to human beings.

3.  Ideographic characters which have a canonical decomposition (including those in the ranges \[\#xF900-\#xFAFF\] and \[\#x2F800-\#x2FFFD\], with 12 exceptions) should not be used in names.

4.  Characters which have a compatibility decomposition (those with a "compatibility formatting tag" in field 5 of the Unicode Character Database -- marked by field 5 beginning with a "&lt;") should not be used in names. This suggestion does not apply to \#x0E33 THAI CHARACTER SARA AM or \#x0EB3 LAO CHARACTER AM, which despite their compatibility decompositions are in regular use in those scripts.

5.  Combining characters meant for use with symbols only (including those in the ranges \[\#x20D0-\#x20EF\] and \[\#x1D165-\#x1D1AD\]) should not be used in names.

6.  The interlinear annotation characters (\[\#xFFF9-\#xFFFB \]) should not be used in names.

7.  Variation selector characters should not be used in names.

8.  Names which are nonsensical, unpronounceable, hard to read, or easily confusable with other names should not be employed.
