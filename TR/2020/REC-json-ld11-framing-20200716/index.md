<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

An Extension to the Application Programming Interface for the JSON-LD Syntax
----------------------------------------------------------------------------

W3C Recommendation 16 July 2020
-------------------------------

This version:  
<a href="https://www.w3.org/TR/2020/REC-json-ld11-framing-20200716/" class="u-url">https://www.w3.org/TR/2020/REC-json-ld11-framing-20200716/</a>

Latest published version:  
<https://www.w3.org/TR/json-ld11-framing/>

Latest editor's draft:  
<https://w3c.github.io/json-ld-framing/>

Test suite:  
<https://w3c.github.io/json-ld-framing/tests/>

Implementation report:  
<https://w3c.github.io/json-ld-api/reports/>

Previous version:  
<https://www.w3.org/TR/2020/PR-json-ld11-framing-20200507/>

Editors:  
<a href="https://digitalbazaar.com/" class="u-url url p-name fn">Dave Longley</a> (<a href="https://digitalbazaar.com/" class="p-org org h-org h-card">Digital Bazaar</a>) (v1.0 and v1.1)

<a href="https://greggkellogg.net/" class="u-url url p-name fn">Gregg Kellogg</a> (v1.0 and v1.1)

<a href="http://champin.net/" class="u-url url p-name fn">Pierre-Antoine Champin</a> (<a href="https://liris.cnrs.fr/" class="p-org org h-org h-card">LIRIS - Université de Lyon</a>) (v1.1)

 Former editors:   
<a href="http://manu.sporny.org/" class="u-url url p-name fn">Manu Sporny</a> (<a href="https://digitalbazaar.com/" class="p-org org h-org h-card">Digital Bazaar</a>) (v1.0)

<a href="https://www.markus-lanthaler.com/" class="u-url url p-name fn">Markus Lanthaler</a> (<a href="https://www.google.com/" class="p-org org h-org h-card">Google</a>) (v1.0)

 Authors:   
<a href="https://digitalbazaar.com/" class="u-url url p-name fn">Dave Longley</a> (<a href="https://digitalbazaar.com/" class="p-org org h-org h-card">Digital Bazaar</a>) (v1.0)

<a href="http://manu.sporny.org/" class="u-url url p-name fn">Manu Sporny</a> (<a href="https://digitalbazaar.com/" class="p-org org h-org h-card">Digital Bazaar</a>) (v1.0)

<a href="https://greggkellogg.net/" class="u-url url p-name fn">Gregg Kellogg</a> (v1.0 and v1.1)

<a href="https://www.markus-lanthaler.com/" class="u-url url p-name fn">Markus Lanthaler</a> (<a href="https://www.google.com/" class="p-org org h-org h-card">Google</a>) (v1.0)

<a href="http://neverspace.net/" class="u-url url p-name fn">Niklas Lindström</a> (v1.0)

Participate:  
[GitHub w3c/json-ld-framing](https://github.com/w3c/json-ld-framing/)

[File a bug](https://github.com/w3c/json-ld-framing/issues/)

[Commit history](https://github.com/w3c/json-ld-framing/commits/master)

[Pull requests](https://github.com/w3c/json-ld-framing/pulls/)

Please check the [**errata**](https://w3c.github.io/json-ld-framing/errata/) for any errors or issues reported since publication.

See also [**translations**](http://www.w3.org/2003/03/Translations/byTechnology?technology=json-ld11-framing).

This document is also available in this non-normative format: [EPUB](json-ld11-framing.epub)

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2010-2020 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [permissive document license](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document) rules apply.

------------------------------------------------------------------------

Abstract
--------

JSON-LD Framing allows developers to query by example and force a specific tree layout to a JSON-LD document.

This specification describes a superset of the features defined in [JSON-LD Framing 1.0](https://json-ld.org/spec/ED/json-ld-framing/20120830/) \[<a href="#bib-json-ld10-framing" class="bibref" title="JSON-LD Framing 1.0">JSON-LD10-FRAMING</a>\] and, except where noted, the algorithms described in this specification are fully compatible with documents created using the previous community standard.

Status of This Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This document has been developed by the [JSON-LD Working Group](https://www.w3.org/2018/json-ld-wg/) and was derived from the [JSON-LD Community Group's](https://www.w3.org/community/json-ld/) [Final Report](https://www.w3.org/2018/jsonld-cg-reports/json-ld-framing/).

There is a [live JSON-LD playground](https://json-ld.org/playground/) that is capable of demonstrating the features described in this document.

This document was published by the [JSON-LD Working Group](https://www.w3.org/2018/json-ld-wg/) as a Recommendation.

[GitHub Issues](https://github.com/w3c/json-ld-framing/issues/) are preferred for discussion of this specification. Alternatively, you can send comments to our mailing list. Please send them to <public-json-ld-wg@w3.org> ([archives](https://lists.w3.org/Archives/Public/public-json-ld-wg/)).

Please see the Working Group's [implementation report](https://w3c.github.io/json-ld-api/reports/).

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/107714/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2019/Process-20190301/" id="w3c_process_revision">1 March 2019 W3C Process Document</a>.

### Set of Documents<a href="#set-of-documents" class="self-link"></a>

This document is one of three JSON-LD 1.1 Recommendations produced by the [JSON-LD Working Group](https://www.w3.org/2018/json-ld-wg/):

-   [JSON-LD 1.1](https://www.w3.org/TR/json-ld11/)
-   [JSON-LD 1.1 Processing Algorithms and API](https://www.w3.org/TR/json-ld11-api/)
-   [JSON-LD 1.1 Framing]()

Table of Contents
-----------------

1.  <a href="#introduction" class="tocxref">1. Introduction</a>
    1.  <a href="#how-to-read-this-document" class="tocxref">1.1 How to Read this Document</a>
    2.  <a href="#contributing" class="tocxref">1.2 Contributing</a>
    3.  <a href="#typographical-conventions" class="tocxref">1.3 Typographical conventions</a>
    4.  <a href="#terminology" class="tocxref">1.4 Terminology</a>
        1.  <a href="#algorithm-terms" class="tocxref">1.4.1 Algorithm Terms</a>
    5.  <a href="#framing-keywords" class="tocxref">1.5 Syntax Tokens and Keywords</a>
2.  <a href="#features" class="tocxref">2. Features</a>
    1.  <a href="#framing" class="tocxref">2.1 Framing</a>
        1.  <a href="#matching-on-properties" class="tocxref">2.1.1 Matching on Properties</a>
        2.  <a href="#wildcard-matching" class="tocxref">2.1.2 Wildcard Matching</a>
        3.  <a href="#match-on-the-absence-of-a-property" class="tocxref">2.1.3 Match on the Absence of a Property</a>
        4.  <a href="#matching-on-values" class="tocxref">2.1.4 Matching on Values</a>
        5.  <a href="#matching-on-id" class="tocxref">2.1.5 Matching on <code>@id</code></a>
        6.  <a href="#empty-frame-0" class="tocxref">2.1.6 Empty Frame</a>
    2.  <a href="#default-content" class="tocxref">2.2 Default content</a>
    3.  <a href="#framing-flags" class="tocxref">2.3 Framing Flags</a>
        1.  <a href="#object-embed-flag" class="tocxref">2.3.1 Object Embed Flag</a>
        2.  <a href="#explicit-inclusion-flag" class="tocxref">2.3.2 Explicit inclusion flag</a>
        3.  <a href="#omit-default-flag" class="tocxref">2.3.3 Omit default flag</a>
        4.  <a href="#omit-graph-flag" class="tocxref">2.3.4 Omit graph flag</a>
        5.  <a href="#require-all-flag" class="tocxref">2.3.5 Require all flag</a>
    4.  <a href="#reverse-framing" class="tocxref">2.4 Reverse Framing</a>
    5.  <a href="#framing-named-graphs" class="tocxref">2.5 Framing Named Graphs</a>
3.  <a href="#conformance" class="tocxref">3. Conformance</a>
4.  <a href="#framing-0" class="tocxref">4. Framing</a>
    1.  <a href="#framing-algorithm" class="tocxref">4.1 Framing Algorithm</a>
        1.  <a href="#overview" class="tocxref">4.1.1 Overview</a>
        2.  <a href="#algorithm" class="tocxref">4.1.2 Algorithm</a>
    2.  <a href="#frame-matching" class="tocxref">4.2 Frame Matching Algorithm</a>
    3.  <a href="#value-matching" class="tocxref">4.3 Value Pattern Matching Algorithm</a>
5.  <a href="#the-application-programming-interface" class="tocxref">5. The Application Programming Interface</a>
    1.  <a href="#jsonldprocessor" class="tocxref">5.1 JsonLdProcessor</a>
    2.  <a href="#error-handling" class="tocxref">5.2 Error Handling</a>
    3.  <a href="#data-structures" class="tocxref">5.3 Data Structures</a>
        1.  <a href="#jsonldcontext" class="tocxref">5.3.1 JsonLdContext</a>
        2.  <a href="#jsonldoptions" class="tocxref">5.3.2 JsonLdOptions</a>
6.  <a href="#security" class="tocxref">6. Security Considerations</a>
7.  <a href="#privacy" class="tocxref">7. Privacy Considerations</a>
8.  <a href="#internationalization" class="tocxref">8. Internationalization Considerations</a>
9.  <a href="#iana-considerations" class="tocxref">A. IANA Considerations</a>
10. <a href="#idl-index" class="tocxref">B. IDL Index</a>
11. <a href="#open-issues" class="tocxref">C. Open Issues</a>
12. <a href="#changes-since-1-0-draft-of-30-august-2012" class="tocxref">D. Changes since 1.0 Draft of 30 August 2012</a>
13. <a href="#changes-from-cg" class="tocxref">E. Changes since JSON-LD Community Group Final Report</a>
14. <a href="#changes-from-cr" class="tocxref">F. Changes since Candidate Release of 12 December 2019</a>
15. <a href="#changes-from-pr" class="tocxref">G. Changes since Proposed Recommendation Release of 7 May 2020</a>
16. <a href="#ack" class="tocxref">H. Acknowledgements</a>
17. <a href="#references" class="tocxref">I. References</a>
    1.  <a href="#normative-references" class="tocxref">I.1 Normative references</a>
    2.  <a href="#informative-references" class="tocxref">I.2 Informative references</a>

1. Introduction<a href="#introduction" class="self-link"></a>
-------------------------------------------------------------

*This section is non-normative.*

JSON-LD is a lightweight syntax to serialize Linked Data \[<a href="#bib-linked-data" class="bibref" title="Linked Data Design Issues">LINKED-DATA</a>\] in JSON \[<a href="#bib-rfc8259" class="bibref" title="The JavaScript Object Notation (JSON) Data Interchange Format">RFC8259</a>\]. Its design allows existing JSON to be interpreted as Linked Data with minimal changes. As with other representations of Linked Data which describe directed graphs, a single directed graph can have many different serializations, each expressing exactly the same information. Developers typically work with trees, represented as [JSON objects](https://tools.ietf.org/html/rfc8259#section-4). While mapping a graph to a tree can be done, the layout of the end result must be specified in advance. A <a href="#dfn-frame" class="internalDFN">Frame</a> can be used by a developer on a JSON-LD document to specify a deterministic layout for a graph.

Using delimiters around a chunk of data is known as "framing". JSON-LD uses JSON delimiters such as `{` and `}` to separate statements about a particular subject. JSON-LD also allows subjects to reference other subjects through the use of their identifiers, expressed as strings.

However, given that JSON-LD represents one or more [graphs](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph) of information, there is more than one way to frame the statements about several related subjects into a whole document. In fact, a graph of information can be thought of as a long list of independent statements (aka [triples](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-triple)) that are not bundled together in any way.

The <a href="#the-application-programming-interface" class="sectionRef">JSON-LD Framing API</a> enables a developer to specify exactly how they would like data to be framed, such that statements about a particular subject are bundled together, delimited via `{` and `}`, and such that the subjects they relate to "nest" into a particular tree structure that matches what their application expects.

### 1.1 How to Read this Document<a href="#how-to-read-this-document" class="self-link"></a>

*This section is non-normative.*

This document is a detailed specification for a serialization of Linked Data in JSON. The document is primarily intended for the following audiences:

-   Authors who want to query JSON-LD documents to create representations more appropriate for a given use case.
-   Software developers that want to implement [processors](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-processor) and APIs for JSON-LD.

A companion document, the JSON-LD 1.1 specification \[<a href="#bib-json-ld11" class="bibref" title="JSON-LD 1.1">JSON-LD11</a>\], specifies the grammar of JSON-LD documents.

To understand the basics in this specification you must first be familiar with [JSON](https://tools.ietf.org/html/rfc8259), which is detailed in \[<a href="#bib-rfc8259" class="bibref" title="The JavaScript Object Notation (JSON) Data Interchange Format">RFC8259</a>\]. You must also understand the JSON-LD 1.1 Syntax specification \[<a href="#bib-json-ld11" class="bibref" title="JSON-LD 1.1">JSON-LD11</a>\], which is the base syntax used by all of the algorithms in this document, and the JSON-LD 1.1 API \[<a href="#bib-json-ld11-api" class="bibref" title="JSON-LD 1.1 Processing Algorithms and API">JSON-LD11-API</a>\]. To understand the API and how it is intended to operate in a programming environment, it is useful to have working knowledge of the JavaScript programming language \[<a href="#bib-ecmascript" class="bibref" title="ECMAScript Language Specification">ECMASCRIPT</a>\] and WebIDL \[<a href="#bib-webidl" class="bibref" title="Web IDL">WEBIDL</a>\]. To understand how JSON-LD maps to RDF, it is helpful to be familiar with the basic RDF concepts \[<a href="#bib-rdf11-concepts" class="bibref" title="RDF 1.1 Concepts and Abstract Syntax">RDF11-CONCEPTS</a>\].

This document can highlight changes since the [JSON-LD 1.0](https://www.w3.org/TR/2014/REC-json-ld-20140116/) version. Select to changes.

### 1.2 Contributing<a href="#contributing" class="self-link"></a>

*This section is non-normative.*

There are a number of ways that one may participate in the development of this specification:

-   Technical discussion typically occurs on the public mailing list: [public-json-ld-wg@w3.org](https://lists.w3.org/Archives/Public/public-json-ld-wg/)
-   The working group uses [\#json-ld](http://irc.w3.org/?channels=json-ld) IRC channel is available for real-time discussion on [irc.w3.org](http://irc.w3.org).
-   The [\#json-ld](https://webchat.freenode.net/?channels=json-ld) IRC channel is also available for real-time discussion on irc.freenode.net.

### 1.3 Typographical conventions<a href="#typographical-conventions" class="self-link"></a>

*This section is non-normative.*

The following typographic conventions are used in this specification:

`markup`  
Markup (elements, attributes, properties), machine processable values (string, characters, media types), property name, or a file name is in red-orange monospace font.

variable  
A variable in pseudo-code or in an algorithm description is in italics.

definition  
A definition of a term, to be used elsewhere in this or other specifications, is in bold and italics.

<a href="#dfn-definition" class="internalDFN">definition reference</a>  
A reference to a definition *in this document* is underlined and is also an active link to the definition itself.

<a href="#dfn-definition" class="internalDFN"><code>markup definition reference</code></a>  
A references to a definition *in this document*, when the reference itself is also a markup, is underlined, red-orange monospace font, and is also an active link to the definition itself.

<span class="externalDFN">external definition reference</span>  
A reference to a definition *in another document* is underlined, in italics, and is also an active link to the definition itself.

<span class="externalDFN">` markup external definition reference`</span>  
A reference to a definition *in another document*, when the reference itself is also a markup, is underlined, in italics red-orange monospace font, and is also an active link to the definition itself.

[hyperlink]()  
A hyperlink is underlined and in blue.

\[[reference]()\]  
A document reference (normative or informative) is enclosed in square brackets and links to the references section.

Changes from Recommendation  
Sections or phrases changed from the previous Recommendation may be <span class="changed">highlighted</span> using a control in <a href="#how-to-read-this-document" class="sectionRef sec-ref">§ 1.1 How to Read this Document</a>.

Note

Notes are in light green boxes with a green left border and with a "Note" header in green. Notes are always informative.

<a href="#example-1" class="self-link">Example 1</a>

    Examples are in light khaki boxes, with khaki left border,
    and with a numbered "Example" header in khaki.
    Examples are always informative. The content of the example is in monospace font and may be syntax colored.

    Examples may have tabbed navigation buttons
    to show the results of transforming an example into other representations.

### 1.4 Terminology<a href="#terminology" class="self-link"></a>

This document uses the following terms as defined in external specifications and defines terms specific to JSON-LD.

#### Terms imported from Other Specifications<a href="#terms-imported-from-other-specifications" class="self-link"></a>

Terms imported from [ECMAScript Language Specification](https://tc39.es/ecma262/) \[<a href="#bib-ecmascript" class="bibref" title="ECMAScript Language Specification">ECMASCRIPT</a>\], [The JavaScript Object Notation (JSON) Data Interchange Format](https://tools.ietf.org/html/rfc8259) \[<a href="#bib-rfc8259" class="bibref" title="The JavaScript Object Notation (JSON) Data Interchange Format">RFC8259</a>\], [Infra Standard](https://infra.spec.whatwg.org/) \[<a href="#bib-infra" class="bibref" title="Infra Standard">INFRA</a>\], and [Web IDL](https://heycam.github.io/webidl/) \[<a href="#bib-webidl" class="bibref" title="Web IDL">WEBIDL</a>\]

[array](https://infra.spec.whatwg.org/#list)  
In the JSON serialization, an [array](https://infra.spec.whatwg.org/#list) structure is represented as square brackets surrounding zero or more values. Values are separated by commas. In the [internal representation](https://www.w3.org/TR/json-ld11-api/#dfn-internal-representation), a [list](https://www.w3.org/TR/rdf-schema/#ch_collectionvocab) (also called an [array](https://infra.spec.whatwg.org/#list)) is an *ordered* collection of zero or more values. While JSON-LD uses the same array representation as JSON, the collection is *unordered* by default. While order is preserved in regular JSON arrays, it is not in regular JSON-LD arrays unless specifically defined (see the [Sets and Lists](https://www.w3.org/TR/json-ld11/#sets-and-lists) section of JSON-LD 1.1.

[boolean](https://infra.spec.whatwg.org/#boolean)  
The values `true` and `false` that are used to express one of two possible states.

[JSON object](https://tools.ietf.org/html/rfc8259#section-4)  
In the JSON serialization, an [object](https://www.w3.org/TR/rdf11-concepts/#dfn-object) structure is represented as a pair of curly brackets surrounding zero or more name/value pairs (or members). A name is a [string](https://infra.spec.whatwg.org/#javascript-string). A single colon comes after each name, separating the name from the value. A single comma separates a value from a following name. In JSON-LD the names in an object must be unique.

In the [internal representation](https://www.w3.org/TR/json-ld11-api/#dfn-internal-representation) a [JSON object](https://tools.ietf.org/html/rfc8259#section-4) is described as a [map](https://infra.spec.whatwg.org/#ordered-map) (see \[<a href="#bib-infra" class="bibref" title="Infra Standard">INFRA</a>\]), composed of [entries](https://infra.spec.whatwg.org/#map-entry) with key/value pairs.

In the [Application Programming Interface](https://www.w3.org/TR/json-ld11-api/#the-application-programming-interface), a [map](https://infra.spec.whatwg.org/#ordered-map) is described using a \[<a href="#bib-webidl" class="bibref" title="Web IDL">WEBIDL</a>\] [record](https://heycam.github.io/webidl/#idl-record).

[null](https://infra.spec.whatwg.org/#nulls)  
The use of the [null](https://infra.spec.whatwg.org/#nulls) value within JSON-LD is used to ignore or reset values. A [map entry](https://infra.spec.whatwg.org/#map-entry) in the `@context` where the value, or the `@id` of the value, is `null`, explicitly decouples a term's association with an IRI. A [map entry](https://infra.spec.whatwg.org/#map-entry) in the body of a [JSON-LD document](https://www.w3.org/TR/json-ld11/#dfn-json-ld-document) whose value is `null` has the same meaning as if the [map entry](https://infra.spec.whatwg.org/#map-entry) was not defined. If `@value`, `@list`, or `@set` is set to `null` in expanded form, then the entire [JSON object](https://tools.ietf.org/html/rfc8259#section-4) is ignored.

[number](https://tc39.es/ecma262/#sec-terms-and-definitions-number-value)  
In the JSON serialization, a [number](https://tc39.es/ecma262/#sec-terms-and-definitions-number-value) is similar to that used in most programming languages, except that the octal and hexadecimal formats are not used and that leading zeros are not allowed. In the [internal representation](https://www.w3.org/TR/json-ld11-api/#dfn-internal-representation), a [number](https://tc39.es/ecma262/#sec-terms-and-definitions-number-value) is equivalent to either a [long](https://heycam.github.io/webidl/#idl-long) or [double](https://heycam.github.io/webidl/#idl-double), depending on if the number has a non-zero fractional part (see \[<a href="#bib-webidl" class="bibref" title="Web IDL">WEBIDL</a>\]).

[scalar](https://infra.spec.whatwg.org/#primitive-data-types)  
A scalar is either a [string](https://infra.spec.whatwg.org/#javascript-string), [number](https://tc39.es/ecma262/#sec-terms-and-definitions-number-value), `true`, or `false`.

[string](https://infra.spec.whatwg.org/#javascript-string)  
A [string](https://infra.spec.whatwg.org/#javascript-string) is a sequence of zero or more Unicode (UTF-8) characters, wrapped in double quotes, using backslash escapes (if necessary). A character is represented as a single character string.

Terms imported from [Internationalized Resource Identifiers (IRIs)](https://tools.ietf.org/html/rfc3987) \[<a href="#bib-rfc3987" class="bibref" title="Internationalized Resource Identifiers (IRIs)">RFC3987</a>\]

[IRI](https://tools.ietf.org/html/rfc3987#section-2)  
The absolute form of an [IRI](https://tools.ietf.org/html/rfc3987#section-2) containing a *scheme* along with a *path* and optional *query* and *fragment* segments.

[IRI reference](https://tools.ietf.org/html/rfc3987#section-1.3)  
Denotes the common usage of an [Internationalized Resource Identifier](https://tools.ietf.org/html/rfc3987#section-2). An [IRI reference](https://tools.ietf.org/html/rfc3987#section-1.3) may be absolute or [relative](https://tools.ietf.org/html/rfc3987#section-6.5). However, the "IRI" that results from such a reference only includes absolute [IRIs](https://tools.ietf.org/html/rfc3987#section-2); any [relative IRI references](https://tools.ietf.org/html/rfc3987#section-6.5) are resolved to their absolute form.

[relative IRI reference](https://tools.ietf.org/html/rfc3987#section-6.5)  
A relative IRI reference is an [IRI reference](https://tools.ietf.org/html/rfc3987#section-1.3) that is relative to some other [IRI](https://tools.ietf.org/html/rfc3987#section-2), typically the [base IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-base-iri) of the document. Note that [properties](https://www.w3.org/TR/rdf11-concepts/#dfn-property), values of `@type`, and values of [terms](https://www.w3.org/TR/json-ld11/#dfn-term) defined to be *vocabulary relative* are resolved relative to the [vocabulary mapping](https://www.w3.org/TR/json-ld11/#dfn-vocabulary-mapping), not the [base IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-base-iri).

Terms imported from [RDF 1.1 Concepts and Abstract Syntax](https://www.w3.org/TR/rdf11-concepts/) \[<a href="#bib-rdf11-concepts" class="bibref" title="RDF 1.1 Concepts and Abstract Syntax">RDF11-CONCEPTS</a>\], [RDF Schema 1.1](https://www.w3.org/TR/rdf-schema/) \[<a href="#bib-rdf-schema" class="bibref" title="RDF Schema 1.1">RDF-SCHEMA</a>\], and [Linked Data Design Issues](https://www.w3.org/DesignIssues/LinkedData.html) \[<a href="#bib-linked-data" class="bibref" title="Linked Data Design Issues">LINKED-DATA</a>\]

[base IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-base-iri)  
The [base IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-base-iri) is an [IRI](https://tools.ietf.org/html/rfc3987#section-2) established in the [context](https://www.w3.org/TR/json-ld11/#dfn-context), or is based on the [JSON-LD document](https://www.w3.org/TR/json-ld11/#dfn-json-ld-document) location. The [base IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-base-iri) is used to turn [relative IRI references](https://tools.ietf.org/html/rfc3987#section-6.5) into [IRIs](https://tools.ietf.org/html/rfc3987#section-2).

[blank node](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node)  
A [node](https://www.w3.org/TR/rdf11-concepts/#dfn-node) in a [graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph) that is neither an [IRI](https://tools.ietf.org/html/rfc3987#section-2), nor a [literal](https://www.w3.org/TR/rdf11-concepts/#dfn-literal). A [blank node](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node) does not contain a de-referenceable identifier because it is either ephemeral in nature or does not contain information that needs to be linked to from outside of the [linked data graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph). In JSON-LD, a blank node is assigned an identifier starting with the prefix `_:`.

[blank node identifier](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node-identifier)  
A [blank node identifier](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node-identifier) is a string that can be used as an identifier for a [blank node](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node) within the scope of a JSON-LD document. Blank node identifiers begin with `_:`.

[dataset](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-dataset)  
A [dataset](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-dataset) representing a collection of [RDF graphs](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph) including exactly one [default graph](https://www.w3.org/TR/rdf11-concepts/#dfn-default-graph) and zero or more [named graphs](https://www.w3.org/TR/rdf11-concepts/#dfn-named-graph).

[datatype IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-datatype-iri)  
A [datatype IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-datatype-iri) is an [IRI](https://tools.ietf.org/html/rfc3987#section-2) identifying a datatype that determines how the lexical form maps to a [literal value](https://www.w3.org/TR/rdf11-concepts/#dfn-literal-value).

[default graph](https://www.w3.org/TR/rdf11-concepts/#dfn-default-graph)  
The [default graph](https://www.w3.org/TR/rdf11-concepts/#dfn-default-graph) of a [dataset](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-dataset) is an [RDF graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph) having no [name](https://www.w3.org/TR/rdf11-concepts/#dfn-graph-name), which may be empty.

[graph name](https://www.w3.org/TR/rdf11-concepts/#dfn-graph-name)  
The [IRI](https://tools.ietf.org/html/rfc3987#section-2) or [blank node](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node) identifying a [named graph](https://www.w3.org/TR/rdf11-concepts/#dfn-named-graph).

[language-tagged string](https://www.w3.org/TR/rdf11-concepts/#dfn-language-tagged-string)  
A [language-tagged string](https://www.w3.org/TR/rdf11-concepts/#dfn-language-tagged-string) consists of a string and a non-empty language tag as defined by \[<a href="#bib-bcp47" class="bibref" title="Tags for Identifying Languages">BCP47</a>\]. The [language tag](https://www.w3.org/TR/rdf11-concepts/#dfn-language-tag) must be well-formed according to [section 2.2.9 Classes of Conformance](https://tools.ietf.org/html/bcp47#section-2.2.9) of \[<a href="#bib-bcp47" class="bibref" title="Tags for Identifying Languages">BCP47</a>\]. <span class="changed note">Processors may normalize [language tags](https://www.w3.org/TR/rdf11-concepts/#dfn-language-tag) to lowercase.</span>

[Linked Data](https://www.w3.org/DesignIssues/LinkedData.html)  
A set of documents, each containing a representation of a [linked data graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph) or [dataset](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-dataset).

[list](https://www.w3.org/TR/rdf-schema/#ch_collectionvocab)  
A [list](https://www.w3.org/TR/rdf-schema/#ch_collectionvocab) is an ordered sequence of [IRIs](https://tools.ietf.org/html/rfc3987#section-2), [blank nodes](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node), and [literals](https://www.w3.org/TR/rdf11-concepts/#dfn-literal).

[literal](https://www.w3.org/TR/rdf11-concepts/#dfn-literal)  
An [object](https://www.w3.org/TR/rdf11-concepts/#dfn-object) expressed as a value such as a [string](https://infra.spec.whatwg.org/#javascript-string) or [number](https://tc39.es/ecma262/#sec-terms-and-definitions-number-value). Implicitly or explicitly includes a [datatype IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-datatype-iri) and, if the datatype is `rdf:langString`, an optional [language tag](https://www.w3.org/TR/rdf11-concepts/#dfn-language-tag).

[named graph](https://www.w3.org/TR/rdf11-concepts/#dfn-named-graph)  
A [named graph](https://www.w3.org/TR/rdf11-concepts/#dfn-named-graph) is a [linked data graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph) that is identified by an [IRI](https://tools.ietf.org/html/rfc3987#section-2) or [blank node](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node).

[node](https://www.w3.org/TR/rdf11-concepts/#dfn-node)  
A [node](https://www.w3.org/TR/rdf11-concepts/#dfn-node) in an [RDF graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph), either the [subject](https://www.w3.org/TR/rdf11-concepts/#dfn-subject) and [object](https://www.w3.org/TR/rdf11-concepts/#dfn-object) of at least one [triple](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-triple). Note that a [node](https://www.w3.org/TR/rdf11-concepts/#dfn-node) can play both roles ([subject](https://www.w3.org/TR/rdf11-concepts/#dfn-subject) and [object](https://www.w3.org/TR/rdf11-concepts/#dfn-object)) in a [graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph), even in the same [triple](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-triple).

[object](https://www.w3.org/TR/rdf11-concepts/#dfn-object)  
An [object](https://www.w3.org/TR/rdf11-concepts/#dfn-object) is a [node](https://www.w3.org/TR/rdf11-concepts/#dfn-node) in a [linked data graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph) with at least one incoming edge.

[property](https://www.w3.org/TR/rdf11-concepts/#dfn-property)  
The name of a directed-arc in a [linked data graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph). Every [property](https://www.w3.org/TR/rdf11-concepts/#dfn-property) is directional and is labeled with an [IRI](https://tools.ietf.org/html/rfc3987#section-2) or a [blank node identifier](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node-identifier). Whenever possible, a [property](https://www.w3.org/TR/rdf11-concepts/#dfn-property) should be labeled with an [IRI](https://tools.ietf.org/html/rfc3987#section-2).

Note

The use of [blank node identifiers](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node-identifier) to label properties is obsolete, and may be removed in a future version of JSON-LD.

Also, see [predicate](https://www.w3.org/TR/rdf11-concepts/#dfn-predicate) in \[<a href="#bib-rdf11-concepts" class="bibref" title="RDF 1.1 Concepts and Abstract Syntax">RDF11-CONCEPTS</a>\].

[RDF graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph)  
A labeled directed [graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph), i.e., a set of [nodes](https://www.w3.org/TR/rdf11-concepts/#dfn-node) connected by directed-arcs. Also called [linked data graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph).

[resource](https://www.w3.org/TR/rdf11-concepts/#dfn-resource)  
A [resource](https://www.w3.org/TR/rdf11-concepts/#dfn-resource) denoted by an [IRI](https://tools.ietf.org/html/rfc3987#section-2), a [blank node](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node) or [literal](https://www.w3.org/TR/rdf11-concepts/#dfn-literal) representing something in the world (the "universe of discourse").

[subject](https://www.w3.org/TR/rdf11-concepts/#dfn-subject)  
A [subject](https://www.w3.org/TR/rdf11-concepts/#dfn-subject) is a [node](https://www.w3.org/TR/rdf11-concepts/#dfn-node) in a [linked data graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph) with at least one outgoing edge, related to an [object](https://www.w3.org/TR/rdf11-concepts/#dfn-object) node through a [property](https://www.w3.org/TR/rdf11-concepts/#dfn-property).

[triple](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-triple)  
A component of an [RDF graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph) including a [subject](https://www.w3.org/TR/rdf11-concepts/#dfn-subject), [predicate](https://www.w3.org/TR/rdf11-concepts/#dfn-predicate), and [object](https://www.w3.org/TR/rdf11-concepts/#dfn-object), which represents a node-arc-node segment of an [RDF graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph).

#### JSON-LD Specific Term Definitions<a href="#json-ld-specific-term-definitions" class="self-link"></a>

[active context](https://www.w3.org/TR/json-ld11/#dfn-active-context)  
A [context](https://www.w3.org/TR/json-ld11/#dfn-context) that is used to resolve [terms](https://www.w3.org/TR/json-ld11/#dfn-term) while the processing algorithm is running.

[base direction](https://www.w3.org/TR/json-ld11/#dfn-base-direction)  
The [base direction](https://www.w3.org/TR/json-ld11/#dfn-base-direction) is the direction used when a string does not have a direction associated with it directly. It can be set in the [context](https://www.w3.org/TR/json-ld11/#dfn-context) using the `@direction` key whose value must be one of the strings `"ltr"`, `"rtl"`, or `null`. See the [Context Definitions](https://www.w3.org/TR/json-ld11/#context-definitions) section of JSON-LD 1.1 for a normative description.

[context](https://www.w3.org/TR/json-ld11/#dfn-context)  
A set of rules for interpreting a [JSON-LD document](https://www.w3.org/TR/json-ld11/#dfn-json-ld-document) as described in the [The Context](https://www.w3.org/TR/json-ld11/#the-context) section of JSON-LD 1.1, and normatively specified in the [Context Definitions](https://www.w3.org/TR/json-ld11/#context-definitions) section of JSON-LD 1.1.

[default object](https://www.w3.org/TR/json-ld11/#dfn-default-object)  
A [default object](https://www.w3.org/TR/json-ld11/#dfn-default-object) is a [map](https://infra.spec.whatwg.org/#ordered-map) that has a `@default` key.

frame  
A [JSON-LD document](https://www.w3.org/TR/json-ld11/#dfn-json-ld-document), which describes the form for transforming another [JSON-LD document](https://www.w3.org/TR/json-ld11/#dfn-json-ld-document) using matching and embedding rules. A frame document allows additional keywords and certain [map entries](https://infra.spec.whatwg.org/#map-entry) to describe the matching and transforming process.

frame object  
A frame object is a [map](https://infra.spec.whatwg.org/#ordered-map) element within a <a href="#dfn-frame" class="internalDFN">frame</a> which represents a specific portion of the <a href="#dfn-frame" class="internalDFN">frame</a> matching either a [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) or a [value object](https://www.w3.org/TR/json-ld11/#dfn-value-object) in the input. See the [Frame Objects](https://www.w3.org/TR/json-ld11/#frame-objects) section of JSON-LD 1.1 for a normative description.

[JSON-LD document](https://www.w3.org/TR/json-ld11/#dfn-json-ld-document)  
A [JSON-LD document](https://www.w3.org/TR/json-ld11/#dfn-json-ld-document) is a serialization of an [RDF dataset](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-dataset). See the [JSON-LD Grammar](https://www.w3.org/TR/json-ld11/#json-ld-grammar) section in JSON-LD 1.1 for a formal description.

[JSON-LD internal representation](https://www.w3.org/TR/json-ld11-api/#dfn-internal-representation)  
The JSON-LD internal representation is the result of transforming a JSON syntactic structure into the core data structures suitable for direct processing: [arrays](https://infra.spec.whatwg.org/#list), [maps](https://infra.spec.whatwg.org/#ordered-map), [strings](https://infra.spec.whatwg.org/#javascript-string), [numbers](https://tc39.es/ecma262/#sec-terms-and-definitions-number-value), [booleans](https://infra.spec.whatwg.org/#boolean), and [null](https://infra.spec.whatwg.org/#nulls).

[JSON-LD Processor](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-processor)  
A [JSON-LD Processor](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-processor) is a system which can perform the algorithms defined in JSON-LD 1.1 Processing Algorithms and API. See the [Conformance](https://www.w3.org/TR/json-ld11-api/#conformance) section in JSON-LD 1.1 API for a formal description.

[JSON-LD value](https://www.w3.org/TR/json-ld11/#dfn-json-ld-value)  
A [JSON-LD value](https://www.w3.org/TR/json-ld11/#dfn-json-ld-value) is a [string](https://infra.spec.whatwg.org/#javascript-string), a [number](https://tc39.es/ecma262/#sec-terms-and-definitions-number-value), `true` or `false`, a [typed value](https://www.w3.org/TR/json-ld11/#dfn-typed-value), or a [language-tagged string](https://www.w3.org/TR/rdf11-concepts/#dfn-language-tagged-string). It represents an [RDF literal](https://www.w3.org/TR/rdf11-concepts/#dfn-literal).

[keyword](https://www.w3.org/TR/json-ld11/#dfn-keyword)  
A [string](https://infra.spec.whatwg.org/#javascript-string) that is specific to JSON-LD, described in the [Syntax Tokens and Keywords](https://www.w3.org/TR/json-ld11/#syntax-tokens-and-keywords) section of JSON-LD 1.1, and normatively specified in the [Keywords](https://www.w3.org/TR/json-ld11/#keywords) section of JSON-LD 1.1,

[node object](https://www.w3.org/TR/json-ld11/#dfn-node-object)  
A [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) represents zero or more [properties](https://www.w3.org/TR/rdf11-concepts/#dfn-property) of a [node](https://www.w3.org/TR/rdf11-concepts/#dfn-node) in the [graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph) serialized by the [JSON-LD document](https://www.w3.org/TR/json-ld11/#dfn-json-ld-document). A [map](https://infra.spec.whatwg.org/#ordered-map) is a [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) if it exists outside of the JSON-LD [context](https://www.w3.org/TR/json-ld11/#dfn-context) and:

-   it does not contain the `@value`, `@list`, or `@set` keywords, or
-   it is not the top-most [map](https://infra.spec.whatwg.org/#ordered-map) in the JSON-LD document consisting of no other [entries](https://infra.spec.whatwg.org/#map-entry) than `@graph` and `@context`.

The [entries](https://infra.spec.whatwg.org/#map-entry) of a [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) whose keys are not keywords are also called [properties](https://www.w3.org/TR/rdf11-concepts/#dfn-property) of the [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object). See the [Node Objects](https://www.w3.org/TR/json-ld11/#node-objects) section of JSON-LD 1.1 for a normative description.

[node reference](https://www.w3.org/TR/json-ld11/#dfn-node-reference)  
A [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) used to reference a node having only the `@id` key.

[processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode)  
The [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode) defines how a [JSON-LD document](https://www.w3.org/TR/json-ld11/#dfn-json-ld-document) is processed. By default, all documents are assumed to be conformant with this specification. By defining a different version using the `@version` [entry](https://infra.spec.whatwg.org/#map-entry) in a [context](https://www.w3.org/TR/json-ld11/#dfn-context), publishers can ensure that processors conformant with [JSON-LD 1.0](https://www.w3.org/TR/2014/REC-json-ld-20140116/) \[<a href="#bib-json-ld10" class="bibref" title="JSON-LD 1.0">JSON-LD10</a>\] will not accidentally process JSON-LD 1.1 documents, possibly creating a different output. The API provides an option for setting the [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode) to `json-ld-1.0`, which will prevent JSON-LD 1.1 features from being activated, or error if `@version` [entry](https://infra.spec.whatwg.org/#map-entry) in a [context](https://www.w3.org/TR/json-ld11/#dfn-context) is explicitly set to `1.1`. This specification extends [JSON-LD 1.0](https://www.w3.org/TR/2014/REC-json-ld-20140116/) via the `json-ld-1.1` [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode).

[scoped context](https://www.w3.org/TR/json-ld11/#dfn-scoped-context)  
A [scoped context](https://www.w3.org/TR/json-ld11/#dfn-scoped-context) is part of an [expanded term definition](https://www.w3.org/TR/json-ld11/#dfn-expanded-term-definition) using the `@context` [entry](https://infra.spec.whatwg.org/#map-entry). It has the same form as an [embedded context](https://www.w3.org/TR/json-ld11/#dfn-embedded-context). When the term is used as a type, it defines a [type-scoped context](https://www.w3.org/TR/json-ld11/#dfn-type-scoped-context), when used as a property it defines a [property-scoped context](https://www.w3.org/TR/json-ld11/#dfn-property-scoped-context).

[typed value](https://www.w3.org/TR/json-ld11/#dfn-typed-value)  
A [typed value](https://www.w3.org/TR/json-ld11/#dfn-typed-value) consists of a value, which is a [string](https://infra.spec.whatwg.org/#javascript-string), and a type, which is an [IRI](https://tools.ietf.org/html/rfc3987#section-2).

[value object](https://www.w3.org/TR/json-ld11/#dfn-value-object)  
A [value object](https://www.w3.org/TR/json-ld11/#dfn-value-object) is a [map](https://infra.spec.whatwg.org/#ordered-map) that has an `@value` [entry](https://infra.spec.whatwg.org/#map-entry). See the [Value Objects](https://www.w3.org/TR/json-ld11/#value-objects) section of JSON-LD 1.1 for a normative description.

[vocabulary mapping](https://www.w3.org/TR/json-ld11/#dfn-vocabulary-mapping)  
The vocabulary mapping is set in the [context](https://www.w3.org/TR/json-ld11/#dfn-context) using the `@vocab` key whose value must be an [IRI](https://tools.ietf.org/html/rfc3987#section-2), a [compact IRI](https://www.w3.org/TR/json-ld11/#dfn-compact-iri), a [term](https://www.w3.org/TR/json-ld11/#dfn-term), or `null`. See the [Context Definitions](https://www.w3.org/TR/json-ld11/#context-definitions) section of JSON-LD 1.1 for a normative description.

#### 1.4.1 Algorithm Terms<a href="#algorithm-terms" class="self-link"></a>

The Following terms are used within specific algorithms.

[active property](https://www.w3.org/TR/json-ld11-api/#dfn-active-property)  
The currently active [property](https://www.w3.org/TR/rdf11-concepts/#dfn-property) or [keyword](https://www.w3.org/TR/json-ld11/#dfn-keyword) that the processor should use when processing. The [active property](https://www.w3.org/TR/json-ld11-api/#dfn-active-property) is represented in the original lexical form, which is used for finding coercion mappings in the [active context](https://www.w3.org/TR/json-ld11/#dfn-active-context).

explicit inclusion flag  
A flag specifying that for [properties](https://www.w3.org/TR/rdf11-concepts/#dfn-property) to be included in the output, they must be explicitly declared in the matching <a href="#dfn-frame" class="internalDFN">frame</a>.

framing state  
A [map](https://infra.spec.whatwg.org/#ordered-map) containing values for the <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a>, the <a href="#dfn-require-all-flag" class="internalDFN">require all flag</a>, <span class="changed">the [embedded flag](#dfn-embedded-flag), used internally to help determine if object embedding is appropriate,</span> the <a href="#dfn-explicit-inclusion-flag" class="internalDFN">explicit inclusion flag</a>, and the <a href="#dfn-omit-default-flag" class="internalDFN">omit default flag</a>.

input frame  
The initial <a href="#dfn-frame" class="internalDFN">Frame</a> provided to the framing algorithm.

[IRI compacting](https://www.w3.org/TR/json-ld11-api/#dfn-iri-compacting)  
Used as a macro within various algorithms as to reduce the language used to describe the process of compacting a [string](https://infra.spec.whatwg.org/#javascript-string) var representing an [IRI](https://tools.ietf.org/html/rfc3987#section-2) or [keyword](https://www.w3.org/TR/json-ld11/#dfn-keyword) using an active context either specified directly, or coming from the scope of the algorithm step using this term. An optional value is used, if explicitly provided. Unless specified, the vocab flag defaults to `true`, and the reverse flag defaults to `false`.

1.  Return the result of using the [IRI Compaction algorithm](https://www.w3.org/TR/json-ld11-api/#iri-compaction), passing active context, var, value (if supplied), vocab, and result.

[JSON-LD input](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-input)  
The JSON-LD data structure that is provided as input to the algorithm.

map of flattened subjects  
A map of subjects that is the result of the [Node Map Generation algorithm](https://www.w3.org/TR/json-ld11-api/#node-map-generation).

object embed flag  
A flag specifying that [node objects](https://www.w3.org/TR/json-ld11/#dfn-node-object) should be directly embedded in the output, instead of being referred to by their [IRI](https://tools.ietf.org/html/rfc3987#section-2).

omit default flag  
A flag specifying that properties that are missing from the [JSON-LD input](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-input), but present in the <a href="#dfn-input-frame" class="internalDFN">input frame</a>, should be omitted from the output.

omit graph flag  
A flag that determines if framing output is always contained within a `@graph` [entry](https://infra.spec.whatwg.org/#map-entry), or only if required to represent multiple [node objects](https://www.w3.org/TR/json-ld11/#dfn-node-object).

require all flag  
A flag specifying that all properties present in the <a href="#dfn-input-frame" class="internalDFN">input frame</a> must either have a default value or be present in the [JSON-LD input](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-input) for the frame to match.

### 1.5 Syntax Tokens and Keywords<a href="#framing-keywords" class="self-link"></a>

This specification adds a number of [keywords](https://www.w3.org/TR/json-ld11/#dfn-keyword) (framing keywords) to the ones defined in the JSON-LD 1.1 Syntax specification \[<a href="#bib-json-ld11" class="bibref" title="JSON-LD 1.1">JSON-LD11</a>\]:

`@default`  
Used in [Framing](#framing) to set the default value for an output property when the framed [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) does not include such a property.

`@embed`  
Used in [Framing](#framing) to override the value of <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a> within a specific frame. Valid values for `@embed` as the following:

`@always`  
Always embed [node objects](https://www.w3.org/TR/json-ld11/#dfn-node-object) as property values, unless this would cause a circular reference.

`@once`  
Just a single value within a given [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) should be embedded, other values of other properties use a [node reference](https://www.w3.org/TR/json-ld11/#dfn-node-reference). This is the default value if neither `@embed` nor <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a> is specified.

Note

The specific [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) chosen to embed depends on ordering. If the <a href="#dom-jsonldoptions-ordered" class="internalDFN"><code>ordered</code></a> flag is `true`, this will be the first [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) encountered, otherwise, it may be any node object.

`@never`  
Always use a [node reference](https://www.w3.org/TR/json-ld11/#dfn-node-reference) when serializing matching values.

Any other value for `@embed` is invalid and indicates that an <a href="#dom-jsonldframingerrorcode-invalid-@embed-value" class="internalDFN"><code>invalid @embed value</code></a> error has been detected and processing is aborted.

`@explicit`  
Used in [Framing](#framing) to override the value of <a href="#dfn-explicit-inclusion-flag" class="internalDFN">explicit inclusion flag</a> within a specific frame.

`@null`  
Used in [Framing](#framing) when a value of `null` should be returned, which would otherwise be removed when [Compacting](https://www.w3.org/TR/json-ld11-api/#compaction).

`@omitDefault`  
Used in [Framing](#framing) to override the value of <a href="#dfn-omit-default-flag" class="internalDFN">omit default flag</a> within a specific frame.

`@requireAll`  
Used in [Framing](#framing) to override the value of <a href="#dfn-require-all-flag" class="internalDFN">require all flag</a> within a specific frame.

All JSON-LD tokens and keywords are case-sensitive.

2. Features<a href="#features" class="self-link"></a>
-----------------------------------------------------

*This section is non-normative.*

JSON-LD 1.1 introduces new features that are compatible with [JSON-LD 1.0](https://www.w3.org/TR/2014/REC-json-ld-20140116/) \[<a href="#bib-json-ld10" class="bibref" title="JSON-LD 1.0">JSON-LD10</a>\], but if processed by a JSON-LD 1.0 processor may produce different results. Processors default to `json-ld-1.1`, unless the [processingMode](https://www.w3.org/TR/json-ld11-api/#dom-jsonldoptions-processingmode) API option is explicitly set to `json-ld-1.0`. Publishers are encouraged to use the `@version` [map entry](https://infra.spec.whatwg.org/#map-entry) within a [context](https://www.w3.org/TR/json-ld11/#dfn-context) set to `1.1` to ensure that JSON-LD 1.0 processors will not misinterpret JSON-LD 1.1 features.

### 2.1 Framing<a href="#framing" class="self-link"></a>

*This section is non-normative.*

Framing is used to shape the data in a [JSON-LD document](https://www.w3.org/TR/json-ld11/#dfn-json-ld-document), using an example <a href="#dfn-frame" class="internalDFN">frame</a> document which is used to both match the [flattened](https://www.w3.org/TR/json-ld11-api/#dfn-flattened) data and show an example of how the resulting data should be shaped. Matching is performed by using [properties](https://www.w3.org/TR/rdf11-concepts/#dfn-property) present in in the <a href="#dfn-frame" class="internalDFN">frame</a> to find objects in the data that share common values. Matching can be done either using all properties present in the frame, or any property in the frame. By chaining together objects using matched property values, objects can be embedded within one another.

A <a href="#dfn-frame" class="internalDFN">frame</a> also includes a [context](https://www.w3.org/TR/json-ld11/#dfn-context), which is used for compacting the resulting framed output.

For example, assume the following JSON-LD frame:

<a href="#sample-library-frame" class="self-link">Example 2</a><span class="example-title">: Sample library frame</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@type": "Library",
      "contains": {
        "@type": "Book",
        "contains": {
          "@type": "Chapter"
        }
      }
    }

This <a href="#dfn-frame" class="internalDFN">frame</a> document describes an embedding structure that would place objects with type *Library* at the top, with objects of type *Book* that were linked to the library object using the *contains* property embedded as property values. It also places objects of type *Chapter* within the referencing *Book* object as embedded values of the *Book* object.

When using a flattened set of objects that match the frame components:

<a href="#flattened-library-objects" class="self-link">Example 3</a><span class="example-title">: Flattened library objects</span>

    {
      "@context": {
        "@vocab": "http://example.org/",
        "contains": {"@type": "@id"}
      },
      "@graph": [{
        "@id": "http://example.org/library",
        "@type": "Library",
        "location": "Athens",
        "contains": "http://example.org/library/the-republic"
      }, {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": "http://example.org/library/the-republic#introduction"
      }, {
        "@id": "http://example.org/library/the-republic#introduction",
        "@type": "Chapter",
        "description": "An introductory chapter on The Republic.",
        "title": "The Introduction"
      }]
    }

The Frame Algorithm can create a new document which follows the structure of the frame:

<a href="#framed-library-objects" class="self-link">Example 4</a><span class="example-title">: Framed library objects</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%20%20%22%40type%22%3A%20%22Chapter%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "location": "Athens",
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }
    }

If [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode) is not `json-ld-1.0`, or the <a href="#dfn-omit-graph-flag" class="internalDFN">omit graph flag</a> is `true`, the top-level `@graph` [entry](https://infra.spec.whatwg.org/#map-entry) may be omitted.

<a href="#example-5-framed-library-objects" class="self-link">Example 5</a><span class="example-title">: Framed library objects</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "location": "Athens",
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }
    }

The [Framing Algorithm](#framing-algorithm) does this by first expanding both the input frame and document. It then creates a <a href="#dfn-map-of-flattened-subjects" class="internalDFN">map of flattened subjects</a>. The outer-most [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) within the frame is used to match objects in the map, in this case looking for [node objects](https://www.w3.org/TR/json-ld11/#dfn-node-object) which have an `@type` of `Library`, and a `contains` property with another frame used to match values of that property. The input document contains exactly one such [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object). The value of contains also has a [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object), which is then treated as a frame to match the set of [subjects](https://www.w3.org/TR/rdf11-concepts/#dfn-subject) which are `contains` values of the `Library` object, and so forth.

#### 2.1.1 Matching on Properties<a href="#matching-on-properties" class="self-link"></a>

*This section is non-normative.*

In addition to matching on types, a frame can match on one or more properties.

For example, the following frame selects object based on property values, rather than `@type`.

<a href="#library-frame-with-property-selection" class="self-link">Example 6</a><span class="example-title">: Library frame with property matching</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "location": "Athens",
      "contains": {
        "title": "The Republic",
        "contains": {
          "title": "The Introduction"
        }
      }
    }

This will generate the same framed results as when selecting on `@type`, as the property values are unique to each node [object](https://www.w3.org/TR/rdf11-concepts/#dfn-object).

<a href="#example-7-framed-library-objects-with-property-matching" class="self-link">Example 7</a><span class="example-title">: Framed library objects with property matching</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "location": "Athens",
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }
    }

See <a href="#require-all-flag" class="sectionRef sec-ref">§ 2.3.5 Require all flag</a> to see how matching can be restricted to match [node objects](https://www.w3.org/TR/json-ld11/#dfn-node-object) containing all, versus any such listed property.

#### 2.1.2 Wildcard Matching<a href="#wildcard-matching" class="self-link"></a>

*This section is non-normative.*

The empty [map](https://infra.spec.whatwg.org/#ordered-map) (`{}`) is used as a <a href="#dfn-wildcard" class="internalDFN"><code>wildcard</code></a>, which will match a property if it exists in a target [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object), independent of any specific value.

For example, the following frame selects object based on property wildcarding, rather than `@type`.

<a href="#library-frame-with-wildcards" class="self-link">Example 8</a><span class="example-title">: Library frame with wildcard matching</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "location": {},
      "contains": {
        "creator": {},
        "contains": {
          "description": {}
        }
      }
    }

This will generate the same framed results as when selecting on `@type`, as the matched properties are distinct to each [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object).

<a href="#example-9-framed-library-objects-with-wildcard-matching" class="self-link">Example 9</a><span class="example-title">: Framed library objects with wildcard matching</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22location%22%3A%20%7B%7D%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22creator%22%3A%20%7B%7D%2C%0A%20%20%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%20%20%22description%22%3A%20%7B%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "location": "Athens",
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }
    }

#### 2.1.3 Match on the Absence of a Property<a href="#match-on-the-absence-of-a-property" class="self-link"></a>

*This section is non-normative.*

The empty [array](https://infra.spec.whatwg.org/#list) (`[]`) is used for <a href="#dfn-match-none" class="internalDFN"><code>match none</code></a>, which will match a node object only if a property does not exist in a target [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object).

For example, the following frame selects object based on the absence of properties, rather than `@type`.

<a href="#library-frame-with-absent-property" class="self-link">Example 10</a><span class="example-title">: Library frame with absent matching</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "creator": [],
      "title": [],
      "contains": {
        "location": [],
        "description": [],
        "contains": {
          "location": []
        }
      }
    }

This will generate the same framed results as when selecting on `@type`, the property that is excluded uniquely identifies each [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object). Note that additional properties with the value `null` are added for those properties explicitly excluded.

<a href="#example-11-framed-library-objects-with-wildcard-matching" class="self-link">Example 11</a><span class="example-title">: Framed library objects with wildcard matching</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22creator%22%3A%20%5B%5D%2C%0A%20%20%22title%22%3A%20%5B%5D%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22location%22%3A%20%5B%5D%2C%0A%20%20%20%20%22description%22%3A%20%5B%5D%2C%0A%20%20%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%20%20%22location%22%3A%20%5B%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "location": "Athens",
      "creator": null, ← This property is added
      "title": null, ← This property is added
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "description": null, ← This property is added
        "location": null, ← This property is added
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "location": null, ← This property is added
          "title": "The Introduction"
        }
      }
    }

#### 2.1.4 Matching on Values<a href="#matching-on-values" class="self-link"></a>

*This section is non-normative.*

Frames can be matched based on the presence of specific property values. These values can themselves use <a href="#dfn-wildcard" class="internalDFN"><code>wildcards</code></a>, to match on a specific or set of values, [language tags](https://www.w3.org/TR/rdf11-concepts/#dfn-language-tag), types, or [base direction](https://www.w3.org/TR/json-ld11/#dfn-base-direction).

For an example, we'll use an multilingual version of the library example with more complex value representations.

<a href="#multilingual-library-objects" class="self-link">Example 12</a><span class="example-title">: Multilingual library objects</span>

    {
      "@context": {
        "@vocab": "http://example.org/",
        "contains": {"@type": "@id"}
      },
      "@graph": [{
        "@id": "http://example.org/library",
        "@type": "Library",
        "location": [
          {"@value": "Athens", "@language": "en"},
          {"@value": "Αθήνα", "@language": "grc"},
          {"@value": "Athína", "@language": "el-Latn"}
        ],
        "contains": "http://example.org/library/the-republic"
      }, {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": [
          {"@value": "Plato", "@language": "en"},
          {"@value": "Πλάτων", "@language": "grc"},
          {"@value": "Plátōn", "@language": "el-Latn"}
        ],
        "title": [
          {"@value": "The Republic", "@language": "en"},
          {"@value": "Πολιτεία", "@language": "grc"},
          {"@value": "Res Publica", "@language": "el-Latn"}
        ],
        "contains": "http://example.org/library/the-republic#introduction"
      }, {
        "@id": "http://example.org/library/the-republic#introduction",
        "@type": "Chapter",
        "description": "An introductory chapter on The Republic.",
        "title": "The Introduction"
      }]
    }

By matching on an attribute of a value, we can match frames having that attribute, and limit results to property values that match. In this case, we'll frame the Library and Book objects on values only in latinized Greek (`el-Latn`):

<a href="#library-frame-with-language-matching" class="self-link">Example 13</a><span class="example-title">: Library frame with language matching</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "location": {"@value": {}, "@language": "el-Latn"},
      "contains": {
        "creator": {"@value": {}, "@language": "el-Latn"},
        "title": {"@value": {}, "@language": "el-Latn"},
        "contains": {
          "title": "The Introduction"
        }
      }
    }

This generates the following framed results:

<a href="#example-14-framed-library-objects-with-wildcard-matching" class="self-link">Example 14</a><span class="example-title">: Framed library objects with wildcard matching</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%5B%0A%20%20%20%20%20%20%7B%22%40value%22%3A%20%22Athens%22%2C%20%22%40language%22%3A%20%22en%22%7D%2C%0A%20%20%20%20%20%20%7B%22%40value%22%3A%20%22%CE%91%CE%B8%CE%AE%CE%BD%CE%B1%22%2C%20%22%40language%22%3A%20%22grc%22%7D%2C%0A%20%20%20%20%20%20%7B%22%40value%22%3A%20%22Ath%C3%ADna%22%2C%20%22%40language%22%3A%20%22el-Latn%22%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%5B%0A%20%20%20%20%20%20%7B%22%40value%22%3A%20%22Plato%22%2C%20%22%40language%22%3A%20%22en%22%7D%2C%0A%20%20%20%20%20%20%7B%22%40value%22%3A%20%22%CE%A0%CE%BB%CE%AC%CF%84%CF%89%CE%BD%22%2C%20%22%40language%22%3A%20%22grc%22%7D%2C%0A%20%20%20%20%20%20%7B%22%40value%22%3A%20%22Pl%C3%A1t%C5%8Dn%22%2C%20%22%40language%22%3A%20%22el-Latn%22%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22title%22%3A%20%5B%0A%20%20%20%20%20%20%7B%22%40value%22%3A%20%22The%20Republic%22%2C%20%22%40language%22%3A%20%22en%22%7D%2C%0A%20%20%20%20%20%20%7B%22%40value%22%3A%20%22%CE%A0%CE%BF%CE%BB%CE%B9%CF%84%CE%B5%CE%AF%CE%B1%22%2C%20%22%40language%22%3A%20%22grc%22%7D%2C%0A%20%20%20%20%20%20%7B%22%40value%22%3A%20%22Res%20Publica%22%2C%20%22%40language%22%3A%20%22el-Latn%22%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22location%22%3A%20%7B%22%40value%22%3A%20%7B%7D%2C%20%22%40language%22%3A%20%22el-Latn%22%7D%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22creator%22%3A%20%7B%22%40value%22%3A%20%7B%7D%2C%20%22%40language%22%3A%20%22el-Latn%22%7D%2C%0A%20%20%20%20%22title%22%3A%20%7B%22%40value%22%3A%20%7B%7D%2C%20%22%40language%22%3A%20%22el-Latn%22%7D%2C%0A%20%20%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "location": {"@value": "Athína", "@language": "el-Latn"},
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": {"@value": "Plátōn", "@language": "el-Latn"},
        "title": {"@value": "Res Publica", "@language": "el-Latn"},
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }
    }

#### 2.1.5 Matching on `@id`<a href="#matching-on-id" class="self-link"></a>

*This section is non-normative.*

Frames can be matched if they match a specific identifier (`@id`). This can be illustrated with the original [Flattened library objects](#flattened-library-objects) input using a frame which matches on specific `@id` values:

<a href="#library-frame-with-id-matching" class="self-link">Example 15</a><span class="example-title">: Library frame with @id matching</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction"
        }
      }
    }

This generates the following framed results:

<a href="#example-16-framed-library-objects-with-id-matching" class="self-link">Example 16</a><span class="example-title">: Framed library objects with @id matching</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {
        "@vocab": "http://example.org/"
      },
      "@id": "http://example.org/library",
      "@type": "Library",
      "location": "Athens",
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }
    }

Frames can also be matched from an array of identifiers. Within a frame, it is acceptable for `@id` to have an [array](https://infra.spec.whatwg.org/#list) value, where the individual values are treated as [IRIs](https://tools.ietf.org/html/rfc3987#section-2).

<a href="#library-frame-with-array-id-matching" class="self-link">Example 17</a><span class="example-title">: Library frame with array @id matching</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": ["http://example.org/home", "http://example.org/library"],
      "contains": {
        "@id": ["http://example.org/library/the-republic"],
        "contains": {
          "@id": ["http://example.org/library/the-republic#introduction"]
        }
      }
    }

This generates the following framed results:

<a href="#example-18-framed-library-objects-with-id-matching" class="self-link">Example 18</a><span class="example-title">: Framed library objects with @id matching</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40id%22%3A%20%5B%22http%3A%2F%2Fexample.org%2Fhome%22%2C%20%22http%3A%2F%2Fexample.org%2Flibrary%22%5D%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22%40id%22%3A%20%5B%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%5D%2C%0A%20%20%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%20%20%22%40id%22%3A%20%5B%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "location": "Athens",
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }
    }

#### 2.1.6 Empty Frame<a href="#empty-frame-0" class="self-link"></a>

*This section is non-normative.*

An empty frame matches any node object, even if those objects are embedded elsewhere, causing them to be serialized at the top level.

<a href="#empty-frame" class="self-link">Example 19</a><span class="example-title">: Empty frame</span>

    {
      "@context": {"@vocab": "http://example.org/"}
    }

This generates the following framed results:

<a href="#example-20-framed-library-objects-with-empty-frame" class="self-link">Example 20</a><span class="example-title">: Framed library objects with empty frame</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@graph": [{
        "@id": "http://example.org/library",
        "@type": "Library",
        "location": "Athens",
        "contains": {
          "@id": "http://example.org/library/the-republic",
          "@type": "Book",
          "creator": "Plato",
          "title": "The Republic",
          "contains": {
            "@id": "http://example.org/library/the-republic#introduction",
            "@type": "Chapter",
            "description": "An introductory chapter on The Republic.",
            "title": "The Introduction"
          }
        }
      }, {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }, {
        "@id": "http://example.org/library/the-republic#introduction",
        "@type": "Chapter",
        "description": "An introductory chapter on The Republic.",
        "title": "The Introduction"
      }]
    }

### 2.2 Default content<a href="#default-content" class="self-link"></a>

*This section is non-normative.*

A frame may specify properties that don't exist in an input file. If the <a href="#dfn-explicit-inclusion-flag" class="internalDFN">explicit inclusion flag</a> is `false`, the framing algorithm will add a property and value to the result. The `@default` property in a [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) or [value object](https://www.w3.org/TR/json-ld11/#dfn-value-object), <span class="changed">or as a value of `@type`</span>, provides a default value to use in the resulting output document. If there is no `@default` value, the property will be output with a `null` value. (See <a href="#omit-default-flag" class="sectionRef sec-ref">§ 2.3.3 Omit default flag</a> for ways to avoid this).

Note

The value of the property in the frame is not otherwise used in the output document. It's purpose is for frame matching and finding default values. Note the *description* value for *Library* in the following example.

<a href="#sample-library-frame-with-default-value" class="self-link">Example 21</a><span class="example-title">: Sample library frame with @default value</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@type": "Library",
      "description": "A great Library.",
      "contains": {
        "@type": "Book",
        "description": {"@default": "A great book."},
        "contains": {
          "@type": "Chapter"
        }
      }
    }

<a href="#example-22-sample-library-output-with-default-value" class="self-link">Example 22</a><span class="example-title">: Sample library output with @default value</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%22description%22%3A%20%22A%20great%20Library.%22%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22description%22%3A%20%7B%22%40default%22%3A%20%22A%20great%20book.%22%7D%2C%0A%20%20%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%20%20%22%40type%22%3A%20%22Chapter%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "description": null,
      "location": "Athens",
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "description": "A great book.",
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }
    }

Default values may also be used for `@type`, similar to other properties. In this case, a matched [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) without an `@type` will take the value of the [default object](https://www.w3.org/TR/json-ld11/#dfn-default-object) from the <a href="#dfn-frame" class="internalDFN">frame</a>. The [default object](https://www.w3.org/TR/json-ld11/#dfn-default-object) has a value which is a single [IRI](https://tools.ietf.org/html/rfc3987#section-2). If multiple [IRIs](https://tools.ietf.org/html/rfc3987#section-2) are specified, only the first will be used as the default type.

The frame matches objects having specific property values, and provides defaults for `@type` for matched objects.

<a href="#sample-library-frame-with-default-type" class="self-link">Example 23</a><span class="example-title">: Sample library frame with @default type</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@type": "Library",
      "contains": {
        "@type": {"@default": "Book"},
        "creator": "Plato",
        "contains": {
          "@type": {"@default": "Chapter"},
          "description": "An introductory chapter on The Republic."
        }
      }
    }

Data missing specific values for `@type`, but which matches based on other property values.

<a href="#flattened-library-objects-without-type" class="self-link">Example 24</a><span class="example-title">: Typeless library objects</span>

    {
      "@context": {
        "@vocab": "http://example.org/",
        "contains": {"@type": "@id"}
      },
      "@graph": [{
        "@id": "http://example.org/library",
        "@type": "Library",
        "contains": "http://example.org/library/the-republic"
      }, {
        "@id": "http://example.org/library/the-republic",
        "creator": "Plato",
        "title": "The Republic",
        "contains": "http://example.org/library/the-republic#introduction"
      }, {
        "@id": "http://example.org/library/the-republic#introduction",
        "description": "An introductory chapter on The Republic.",
        "title": "The Introduction"
      }]
    }

<a href="#example-25-sample-library-output-with-default-type" class="self-link">Example 25</a><span class="example-title">: Sample library output with @default type</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22%40type%22%3A%20%7B%22%40default%22%3A%20%22Book%22%7D%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%20%20%22%40type%22%3A%20%7B%22%40default%22%3A%20%22Chapter%22%7D%2C%0A%20%20%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@graph": [{
        "@id": "http://example.org/library",
        "@type": "Library",
        "contains": {
          "@id": "http://example.org/library/the-republic",
          "@type": "Book",
          "contains": {
            "@id": "http://example.org/library/the-republic#introduction",
            "@type": "Chapter",
            "description": "An introductory chapter on The Republic.",
            "title": "The Introduction"
          },
          "creator": "Plato",
          "description": "A great book.",
          "title": "The Republic"
        }
      }]
    }

### 2.3 Framing Flags<a href="#framing-flags" class="self-link"></a>

*This section is non-normative.*

Framing can be controlled using <a href="#dom-jsonldoptions" class="internalDFN">API options</a>, or by adding framing [keywords](https://www.w3.org/TR/json-ld11/#dfn-keyword) within the <a href="#dfn-frame" class="internalDFN">frame</a> as described in <a href="#framing-keywords" class="sectionRef sec-ref">§ 1.5 Syntax Tokens and Keywords</a>.

Note

Framing flags set using keywords have effect only for the frame in which they appear, and for implicit frames which are created for objects where no frame object exists.

#### 2.3.1 Object Embed Flag<a href="#object-embed-flag" class="self-link"></a>

*This section is non-normative.*

The <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a> determines if a referenced [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) is embedded as a property value of a referencing object, or kept as a [node reference](https://www.w3.org/TR/json-ld11/#dfn-node-reference). The initial value for the <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a> is set using the <a href="#dom-jsonldoptions-embed" class="internalDFN"><code>embed</code></a> option. Consider the following frame based on the default `@once` value of the <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a>:

<a href="#sample-library-frame-with-implicit-embed-set-to-once" class="self-link">Example 26</a><span class="example-title">: Sample library frame with implicit @embed set to @once</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@type": "Library"
    }

<a href="#example-27-framed-library-objects-with-embed-set-to-once" class="self-link">Example 27</a><span class="example-title">: Framed library objects with @embed set to @once</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40type%22%3A%20%22Library%22%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "location": "Athens",
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }
    }

Because, the default for the <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a> is `@once` (in addition to the <a href="#dfn-explicit-inclusion-flag" class="internalDFN">explicit inclusion flag</a> being `false`), non-listed properties are added to the output, and implicitly embedded using a default empty frame. As a result, the same output used in the [Framed library objects](#framed-library-objects) above is generated, assuming that the <a href="#dom-jsonldoptions-ordered" class="internalDFN"><code>ordered</code></a> flag is `true`.

However, if the `@embed` property is added explicitly with a value of `@never`, the values for *Book* and *Chapter* will be excluded.

<a href="#sample-library-frame-with-explicit-embed-set-to-never" class="self-link">Example 28</a><span class="example-title">: Sample library frame with explicit @embed set to @never</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@type": "Library",
      "contains": {
        "@type": "Book",
        "@embed": "@never"
      }
    }

<a href="#example-29-framed-library-objects-with-embed-set-to-never" class="self-link">Example 29</a><span class="example-title">: Framed library objects with @embed set to @never</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22%40embed%22%3A%20%22%40never%22%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "location": "Athens",
      "contains": {
        "@id": "http://example.org/library/the-republic"
      }
    }

To illustrate the case where `@once` does not expand values, consider an alternate library example where books are doubly indexed.

<a href="#flattened-library-objects-with-double-index" class="self-link">Example 30</a><span class="example-title">: Flattened library objects with double index</span>

    {
      "@context": {
        "@vocab": "http://example.org/",
        "books": {"@type": "@id"},
        "contains": {"@type": "@id"}
      },
      "@graph": [{
        "@id": "http://example.org/library",
        "@type": "Library",
        "books": "http://example.org/library/the-republic",
        "contains": "http://example.org/library/the-republic"
      }, {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": "http://example.org/library/the-republic#introduction"
      }, {
        "@id": "http://example.org/library/the-republic#introduction",
        "@type": "Chapter",
        "description": "An introductory chapter on The Republic.",
        "title": "The Introduction"
      }]
    }

<a href="#example-31-framed-library-objects-with-double-index" class="self-link">Example 31</a><span class="example-title">: Framed library objects with double index</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22books%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22books%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40type%22%3A%20%22Library%22%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "contains": {"@id": "http://example.org/library/the-republic"},
      "books": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }
    }

When framed using the same frame with the default `@embed` of `@once`, only the *"books"* property will have content, if the <a href="#dom-jsonldoptions-ordered" class="internalDFN"><code>ordered</code></a> flag is `true`, and the *"contains"* property will use a reference.

If we use a frame using `"@embed": "@always"`, both properties will include expanded values.

<a href="#sample-library-frame-with-explicit-embed-set-to-always" class="self-link">Example 32</a><span class="example-title">: Sample library frame with explicit @embed set to @always</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@type": "Library",
      "@embed": "@always"
    }

<a href="#example-33-framed-library-objects-with-double-index-and-always" class="self-link">Example 33</a><span class="example-title">: Framed library objects with double index and @always</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22books%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22books%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%22%40embed%22%3A%20%22%40always%22%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "books": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      },
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }
    }

#### 2.3.2 Explicit inclusion flag<a href="#explicit-inclusion-flag" class="self-link"></a>

*This section is non-normative.*

The <a href="#dfn-explicit-inclusion-flag" class="internalDFN">explicit inclusion flag</a> used to determine properties which will be included in the output document. The default value is `false`, which means that properties present in an input [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) that are not in the associated frame will be included in the output object. If `true`, only properties present in the input frame will be placed into the output. The initial value for the <a href="#dfn-explicit-inclusion-flag" class="internalDFN">explicit inclusion flag</a> is set using the <a href="#dom-jsonldoptions-explicit" class="internalDFN"><code>explicit</code></a> option.

For example, take an expanded version of the library frame which include some properties from the input, but omit others.

<a href="#sample-library-frame-with-explicit-set-to-true" class="self-link">Example 34</a><span class="example-title">: Sample library frame with @explicit set to true</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@type": "Library",
      "description": {},
      "contains": {
        "@type": "Book",
        "@explicit": true,
        "title": {},
        "contains": {
          "@type": "Chapter"
        }
      }
    }

The resulting output will exclude properties for Book which are not explicitly listed in the <a href="#dfn-frame-object" class="internalDFN">frame object</a>:

<a href="#example-35-framed-library-objects-with-explicit-set-to-true" class="self-link">Example 35</a><span class="example-title">: Framed library objects with @explicit set to true</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%22description%22%3A%20%7B%7D%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22%40explicit%22%3A%20true%2C%0A%20%20%20%20%22title%22%3A%20%7B%7D%2C%0A%20%20%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%20%20%22%40type%22%3A%20%22Chapter%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "description": null ← This property is explicit,
      "location": "Athens",
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato", ← This property is omitted
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }
    }

Note that the *Library* object contains a `null` *description* property, as it is explicitly called for in the frame using `"description": {}`. The *creator* property does not exist in the output, because it is not explicit.

#### 2.3.3 Omit default flag<a href="#omit-default-flag" class="self-link"></a>

*This section is non-normative.*

The <a href="#dfn-omit-default-flag" class="internalDFN">omit default flag</a> changes the way framing generates output when a property described in the frame is not present in the input document. The initial value for the <a href="#dfn-omit-default-flag" class="internalDFN">omit default flag</a> is set using the <a href="#dom-jsonldoptions-omitdefault" class="internalDFN"><code>omitDefault</code></a> option. See <a href="#default-content" class="sectionRef sec-ref">§ 2.2 Default content</a> for a further discussion.

Consider the following input document:

<a href="#sample-input-for-omitDefault" class="self-link">Example 36</a><span class="example-title">: Sample parent/child relationship data</span>

    {
      "@context": {
        "@vocab": "http://example.org/",
        "child": {"@type": "@id"}
      },
      "@graph": [{
        "@id": "http://example.org#John",
        "@type": "Person",
        "name": "John",
        "child": "http://example.org#Jane"
      }, {
        "@id": "http://example.org#Jane",
        "@type": "Person",
        "name": "Jane"
      }]
    }

To illustrate where the <a href="#dfn-omit-default-flag" class="internalDFN">omit default flag</a> is useful, consider the following frame, which does *not* use `@omitDefault`:

<a href="#sample-library-frame-without-omitDefault" class="self-link">Example 37</a><span class="example-title">: Sample parent/child relationship frame without @omitDefault</span>

    {
      "@context": {
        "@vocab": "http://example.org/",
        "child": {"@type": "@id"}
      },
      "@type": "Person",
      "child": {
        "@embed": "@always"
      }
    }

The resulting output will include a "child" property with the value `null`, which may not always be desired:

<a href="#example-38-sample-parent-child-relationship-output-without-omitdefault" class="self-link">Example 38</a><span class="example-title">: Sample parent/child relationship output without @omitDefault</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22child%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%23John%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Person%22%2C%0A%20%20%20%20%22name%22%3A%20%22John%22%2C%0A%20%20%20%20%22child%22%3A%20%22http%3A%2F%2Fexample.org%23Jane%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%23Jane%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Person%22%2C%0A%20%20%20%20%22name%22%3A%20%22Jane%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22child%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40type%22%3A%20%22Person%22%2C%0A%20%20%22child%22%3A%20%7B%0A%20%20%20%20%22%40embed%22%3A%20%22%40always%22%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {
        "@vocab": "http://example.org/",
        "child": {"@type": "@id"}
      },
      "@graph": [{
        "@id": "http://example.org#John",
        "@type": "Person",
        "name": "John",
        "child": {
          "@id": "http://example.org#Jane",
          "@type": "Person",
          "name": "Jane"
        }
      }, {
        "@id": "http://example.org#Jane",
        "@type": "Person",
        "name": "Jane",
        "child": null
      }]
    }

Note that because the option `"@embed": "@always"` is specified in the frame under the child property, that `"child": null` appears in the output for matches that do not have that property, which may be undesirable. To prevent this default `null` output from occurring, the `@omitDefault` may be set to true like so:

<a href="#sample-library-frame-with-omitDefault" class="self-link">Example 39</a><span class="example-title">: Sample parent/child relationship frame with @omitDefault</span>

    {
      "@context": {
        "@vocab": "http://example.org/",
        "child": {"@type": "@id"}
      },
      "@type": "Person",
      "child": {
        "@embed": "@always",
        "@omitDefault": true
      }
    }

Which yields this (desirable) output:

<a href="#example-40-sample-parent-child-relationship-output-with-omitdefault" class="self-link">Example 40</a><span class="example-title">: Sample parent/child relationship output with @omitDefault</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22child%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%23John%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Person%22%2C%0A%20%20%20%20%22name%22%3A%20%22John%22%2C%0A%20%20%20%20%22child%22%3A%20%22http%3A%2F%2Fexample.org%23Jane%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%23Jane%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Person%22%2C%0A%20%20%20%20%22name%22%3A%20%22Jane%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22child%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40type%22%3A%20%22Person%22%2C%0A%20%20%22child%22%3A%20%7B%0A%20%20%20%20%22%40embed%22%3A%20%22%40always%22%2C%0A%20%20%20%20%22%40omitDefault%22%3A%20true%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {
        "@vocab": "http://example.org/",
        "child": {"@type": "@id"}
      },
      "@graph": [{
        "@id": "http://example.org#John",
        "@type": "Person",
        "name": "John",
        "child": {
          "@id": "http://example.org#Jane",
          "@type": "Person",
          "name": "Jane"
        }
      }, {
        "@id": "http://example.org#Jane",
        "@type": "Person",
        "name": "Jane"
        ↑ Does not include "child" property
      }]
    }

#### 2.3.4 Omit graph flag<a href="#omit-graph-flag" class="self-link"></a>

*This section is non-normative.*

The <a href="#dfn-omit-graph-flag" class="internalDFN">omit graph flag</a> determines if framed output containing a single [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) is contained within `@graph`, or not. The initial value for the <a href="#dfn-omit-graph-flag" class="internalDFN">omit graph flag</a> is set using the <a href="#dom-jsonldoptions-omitgraph" class="internalDFN"><code>omitGraph</code></a> option, or based on the [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode); if [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode) is `json-ld-1.0`, the output always includes a `@graph` [entry](https://infra.spec.whatwg.org/#map-entry), otherwise, the `@graph` [entry](https://infra.spec.whatwg.org/#map-entry) is used only to describe multiple [node objects](https://www.w3.org/TR/json-ld11/#dfn-node-object), consistent with compaction. See <a href="#framing-algorithm" class="sectionRef sec-ref">§ 4.1 Framing Algorithm</a> for a further discussion.

The result is the same as the original [Flattened library objects](#flattened-library-objects) example, but a `@graph` at the top-level. [Example 5](#example-5-framed-library-objects) shows the results with the <a href="#dfn-omit-graph-flag" class="internalDFN">omit graph flag</a> set to `true`, which is the default value when the [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode) is set to the default `json-ld-1.1`. The top-level object can be enclosed within `@graph` by setting the [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode) to `json-ld-1.0`, or by setting the <a href="#dfn-omit-graph-flag" class="internalDFN">omit graph flag</a> to `false`.

<a href="#example-41-framed-library-objects-with-omitgraph-set-to-false" class="self-link">Example 41</a><span class="example-title">: Framed library objects with @omitGraph set to false</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%20%20%22%40type%22%3A%20%22Chapter%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@graph": [{
        "@id": "http://example.org/library",
        "@type": "Library",
        "location": "Athens",
        "contains": {
          "@id": "http://example.org/library/the-republic",
          "@type": "Book",
          "creator": "Plato",
          "title": "The Republic",
          "contains": {
            "@id": "http://example.org/library/the-republic#introduction",
            "@type": "Chapter",
            "description": "An introductory chapter on The Republic.",
            "title": "The Introduction"
          }
        }
      }]
    }

#### 2.3.5 Require all flag<a href="#require-all-flag" class="self-link"></a>

*This section is non-normative.*

The <a href="#dfn-require-all-flag" class="internalDFN">require all flag</a> is used in frame matching to determine when a [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) from an input document matches a frame. When matching, an object may include `@type` and other properties, a match is made when *any* property value in the object matches the <a href="#dfn-node-pattern" class="internalDFN"><code>node pattern</code></a> in the <a href="#dfn-frame-object" class="internalDFN">frame object</a> if the value of the <a href="#dfn-require-all-flag" class="internalDFN">require all flag</a> is `false` (the default). If the flag value is `true`, then *all* properties in the <a href="#dfn-frame-object" class="internalDFN">frame object</a> must be present in the [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) for the node to match.

The following frame matches on multiple properties, including the absence of a property. Using the [Flattened library objects](#flattened-library-objects) example, we can match on an object containing both the title and description or title and creator properties. If we were to use `@requireAll` set to `false`, then we could match on the presence of any property, not all properties.

<a href="#frame-with-requireAll" class="self-link">Example 42</a><span class="example-title">: Frame with @requireAll</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@type": "Library",
      "contains": {
        "@requireAll": true,
        "creator": {},
        "title": {},
        "contains": {
          "@requireAll": true,
          "description": {},
          "title": {}
        }
      }
    }

This will, again, reproduce the desired framed output:

<a href="#example-43-framed-library-objects-with-requireall-set-to-true" class="self-link">Example 43</a><span class="example-title">: Framed library objects with @requireAll set to true</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22%40requireAll%22%3A%20true%2C%0A%20%20%20%20%22creator%22%3A%20%7B%7D%2C%0A%20%20%20%20%22title%22%3A%20%7B%7D%2C%0A%20%20%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%20%20%22%40requireAll%22%3A%20true%2C%0A%20%20%20%20%20%20%22description%22%3A%20%7B%7D%2C%0A%20%20%20%20%20%20%22title%22%3A%20%7B%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "location": "Athens",
      "contains": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "creator": "Plato",
        "title": "The Republic",
        "contains": {
          "@id": "http://example.org/library/the-republic#introduction",
          "@type": "Chapter",
          "description": "An introductory chapter on The Republic.",
          "title": "The Introduction"
        }
      }
    }

### 2.4 Reverse Framing<a href="#reverse-framing" class="self-link"></a>

*This section is non-normative.*

A frame may include `@reverse`, or a value of a term defined using `@reverse` to invert the relationships in the output object. For example, the Library example can be inverted using the following frame:

<a href="#inverted-library-frame" class="self-link">Example 44</a><span class="example-title">: Inverted library frame</span>

    {
      "@context": {
        "@vocab": "http://example.org/",
        "within": {"@reverse": "contains"}
      },
      "@type": "Chapter",
      "within": {
        "@type": "Book",
        "within": {
          "@type": "Library"
        }
      }
    }

Using the flattened library example above, results in the following:

<a href="#example-45-inverted-library-output" class="self-link">Example 45</a><span class="example-title">: Inverted library output</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22contains%22%3A%20%7B%22%40type%22%3A%20%22%40id%22%7D%0A%20%20%7D%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%20%20%22location%22%3A%20%22Athens%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22creator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Republic%22%2C%0A%20%20%20%20%22contains%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%20%20%22description%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22title%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%2C%0A%20%20%20%20%22within%22%3A%20%7B%22%40reverse%22%3A%20%22contains%22%7D%0A%20%20%7D%2C%0A%20%20%22%40type%22%3A%20%22Chapter%22%2C%0A%20%20%22within%22%3A%20%7B%0A%20%20%20%20%22%40type%22%3A%20%22Book%22%2C%0A%20%20%20%20%22within%22%3A%20%7B%0A%20%20%20%20%20%20%22%40type%22%3A%20%22Library%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {
        "@vocab": "http://example.org/",
        "within": {"@reverse": "contains"}
      },
      "@id": "http://example.org/library/the-republic#introduction",
      "@type": "Chapter",
      "description": "An introductory chapter on The Republic.",
      "title": "The Introduction",
      "within": {
        "@id": "http://example.org/library/the-republic",
        "@type": "Book",
        "contains": {"@id": "http://example.org/library/the-republic#introduction"},
        "creator": "Plato",
        "title": "The Republic",
        "within": {
          "@id": "http://example.org/library",
          "@type": "Library",
          "location": "Athens",
          "contains": {"@id": "http://example.org/library/the-republic"}
        }
      }
    }

Note

There is an asymmetry between regular properties and reverse properties. Normally, when framing a [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object), unless the <a href="#dfn-explicit-inclusion-flag" class="internalDFN">explicit inclusion flag</a> is set, all properties of the node are included in the output, but reverse properties are not, as they are not actually properties of the node.

To include reverse properties in the output, add them explicitly to the frame. Note that if the reverse relationship does not exist, it will simply be left out of the output.

### 2.5 Framing Named Graphs<a href="#framing-named-graphs" class="self-link"></a>

*This section is non-normative.*

Frames can include `@graph`, which allows information from [named graphs](https://www.w3.org/TR/rdf11-concepts/#dfn-named-graph) contained within a [JSON-LD document](https://www.w3.org/TR/json-ld11/#dfn-json-ld-document) to be exposed within it's proper graph context. By default, framing uses a merged graph, composed of all the [node objects](https://www.w3.org/TR/json-ld11/#dfn-node-object) across all graphs within the input. By using `@graph` within a frame, the output document can include information specifically from [named graphs](https://www.w3.org/TR/rdf11-concepts/#dfn-named-graph) contained within the input document.

The following example uses a variation on our library theme where information is split between the [default graph](https://www.w3.org/TR/rdf11-concepts/#dfn-default-graph), and a graph named `http://example.org/graphs/books`:

<a href="#frame-with-named-graphs" class="self-link">Example 46</a><span class="example-title">: Frame with named graphs</span>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@type": "Library",
      "contains": {
        "@id": "http://example.org/graphs/books",
        "@graph": {
          "@type": "Book"
        }
      }
    }

<a href="#flattened-input-with-named-graphs" class="self-link">Example 47</a><span class="example-title">: Flattened Input with named graphs</span>

    [{
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/graphs/books",
      "@graph": [{
        "@id": "http://example.org/library/the-republic",
        "@type": "http://example.org/Book",
        "http://example.org/contains": {
          "@id": "http://example.org/library/the-republic#introduction"
        },
        "http://example.org/creator": "Plato",
        "http://example.org/title": "The Republic"
      }, {
        "@id": "http://example.org/library/the-republic#introduction",
        "@type": "http://example.org/Chapter",
        "http://example.org/description": "An introductory chapter on The Republic.",
        "http://example.org/title": "The Introduction"
      }]
    }, {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "http://example.org/Library",
      "http://example.org/contains": {"@id": "http://example.org/graphs/books"},
      "http://example.org/name": "Library"
    }]

<a href="#example-48-framed-output-with-named-graphs" class="self-link">Example 48</a><span class="example-title">: Framed output with named graphs</span>

<a href="https://json-ld.org/playground/#startTab=tab-framed&amp;json-ld=%5B%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Fgraphs%2Fbooks%22%2C%0A%20%20%22%40graph%22%3A%20%5B%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22http%3A%2F%2Fexample.org%2FBook%22%2C%0A%20%20%20%20%22http%3A%2F%2Fexample.org%2Fcontains%22%3A%20%7B%0A%20%20%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22http%3A%2F%2Fexample.org%2Fcreator%22%3A%20%22Plato%22%2C%0A%20%20%20%20%22http%3A%2F%2Fexample.org%2Ftitle%22%3A%20%22The%20Republic%22%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%2Fthe-republic%23introduction%22%2C%0A%20%20%20%20%22%40type%22%3A%20%22http%3A%2F%2Fexample.org%2FChapter%22%2C%0A%20%20%20%20%22http%3A%2F%2Fexample.org%2Fdescription%22%3A%20%22An%20introductory%20chapter%20on%20The%20Republic.%22%2C%0A%20%20%20%20%22http%3A%2F%2Fexample.org%2Ftitle%22%3A%20%22The%20Introduction%22%0A%20%20%7D%5D%0A%7D%2C%20%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Flibrary%22%2C%0A%20%20%22%40type%22%3A%20%22http%3A%2F%2Fexample.org%2FLibrary%22%2C%0A%20%20%22http%3A%2F%2Fexample.org%2Fcontains%22%3A%20%7B%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Fgraphs%2Fbooks%22%7D%2C%0A%20%20%22http%3A%2F%2Fexample.org%2Fname%22%3A%20%22Library%22%0A%7D%5D&amp;frame=%7B%0A%20%20%22%40context%22%3A%20%7B%22%40vocab%22%3A%20%22http%3A%2F%2Fexample.org%2F%22%7D%2C%0A%20%20%22%40type%22%3A%20%22Library%22%2C%0A%20%20%22contains%22%3A%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fexample.org%2Fgraphs%2Fbooks%22%2C%0A%20%20%20%20%22%40graph%22%3A%20%7B%0A%20%20%20%20%20%20%22%40type%22%3A%20%22Book%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {"@vocab": "http://example.org/"},
      "@id": "http://example.org/library",
      "@type": "Library",
      "name": "Library",
      "contains": {
        "@id": "http://example.org/graphs/books",
        "@graph": {
          "@id": "http://example.org/library/the-republic",
          "@type": "Book",
          "creator": "Plato",
          "title": "The Republic",
          "contains": {
            "@id": "http://example.org/library/the-republic#introduction",
            "@type": "Chapter",
            "description": "An introductory chapter on The Republic.",
            "title": "The Introduction"
          }
        }
      }
    }

3. Conformance<a href="#conformance" class="self-link"></a>
-----------------------------------------------------------

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words *MAY*, *MUST*, *MUST NOT*, *SHOULD*, and *SHOULD NOT* in this document are to be interpreted as described in [BCP 14](https://tools.ietf.org/html/bcp14) \[<a href="#bib-rfc2119" class="bibref" title="Key words for use in RFCs to Indicate Requirement Levels">RFC2119</a>\] \[<a href="#bib-rfc8174" class="bibref" title="Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words">RFC8174</a>\] when, and only when, they appear in all capitals, as shown here.

There is one class of products that can claim conformance to this specification: [JSON-LD Processors](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-processor).

A conforming [JSON-LD Processor](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-processor) is a system which can perform the [Framing](#framing-algorithm) operation in a manner consistent with the algorithms defined in this specification.

[JSON-LD Processors](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-processor) *MUST NOT* attempt to correct malformed [IRIs](https://tools.ietf.org/html/rfc3987#section-2) or language tags; however, they *MAY* issue validation warnings. IRIs are not modified other than conversion between [relative](https://tools.ietf.org/html/rfc3987#section-6.5) and absolute [IRIs](https://tools.ietf.org/html/rfc3987#section-2).

Unless specified using [processingMode](https://www.w3.org/TR/json-ld11-api/#dom-jsonldoptions-processingmode) API option, the [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode) is set using the `@version` [entry](https://infra.spec.whatwg.org/#map-entry) in a local [context](https://www.w3.org/TR/json-ld11/#dfn-context) and affects the behavior of algorithms including [expansion](https://www.w3.org/TR/json-ld11-api/#dfn-expanded) and [compaction](https://www.w3.org/TR/json-ld11-api/#dfn-compact). Once set, it is an error to attempt to change to a different processing mode, and processors *MUST* generate, a [processing mode conflict](https://www.w3.org/TR/json-ld11-api/#dom-jsonlderrorcode-processing-mode-conflict) error and abort further processing.

The algorithms in this specification are generally written with more concern for clarity than efficiency. Thus, [JSON-LD Processors](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-processor) *MAY* implement the algorithms given in this specification in any way desired, so long as the end result is indistinguishable from the result that would be obtained by the specification's algorithms.

In algorithm steps that describe operations on [keywords](https://www.w3.org/TR/json-ld11/#dfn-keyword), those steps also apply to [keyword](https://www.w3.org/TR/json-ld11/#dfn-keyword) aliases.

Note

Implementers can partially check their level of conformance to this specification by successfully passing the test cases of the [JSON-LD framing test suite](https://w3c.github.io/json-ld-framing/tests/). Note, however, that passing all the tests in the test suite does not imply complete conformance to this specification. It only implies that the implementation conforms to aspects tested by the test suite.

4. Framing<a href="#framing-0" class="self-link"></a>
-----------------------------------------------------

The following sections describe algorithms for framing JSON-LD documents. Framing is the process of taking a JSON-LD document, which expresses a graph of information, and applying a specific graph layout (called a <a href="#dfn-frame" class="internalDFN">Frame</a>).

Framing makes use of the [Node Map Generation](https://www.w3.org/TR/json-ld11-api/#node-map-generation) algorithm to place each object defined in the JSON-LD document into a <a href="#dfn-map-of-flattened-subjects" class="internalDFN">map of flattened subjects</a>, allowing them to be operated upon by the [Framing algorithm](#framing-algorithm).

All algorithms described in this section are intended to operate on language-native data structures. That is, the serialization to a text-based JSON document isn't required as input or output to any of these algorithms.

Reference to JSON data structures are interpreted using their *internal representation* for the purpose of describing algorithms.

### 4.1 Framing Algorithm<a href="#framing-algorithm" class="self-link"></a>

#### 4.1.1 Overview<a href="#overview" class="self-link"></a>

A valid <a href="#dfn-frame" class="internalDFN">JSON-LD Frame</a> is a superset of a valid [JSON-LD document](https://www.w3.org/TR/json-ld11/#dfn-json-ld-document), allowing additional content, which is preserved through expansion. The [Grammar](https://www.w3.org/TR/json-ld11/#json-ld-grammar) defined in the JSON-LD 1.1 Syntax specification \[<a href="#bib-json-ld11" class="bibref" title="JSON-LD 1.1">JSON-LD11</a>\] is extended as follows:

-   Framing adds <a href="#dfn-framing-keywords" class="internalDFN">framing keywords</a> which may be used as [entries](https://infra.spec.whatwg.org/#map-entry) of a [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object), which *MUST* be preserved when expanding.
-   Values of [entries](https://infra.spec.whatwg.org/#map-entry) in a <a href="#dfn-frame-object" class="internalDFN">frame object</a> that are not [keyword](https://www.w3.org/TR/json-ld11/#dfn-keyword) *MAY* also include a [default object](https://www.w3.org/TR/json-ld11/#dfn-default-object). Values of `@default` *MAY* include the value `@null`, or an [array](https://infra.spec.whatwg.org/#list) containing only `@null`, in addition to other values allowed in the grammar for values of [entry](https://infra.spec.whatwg.org/#map-entry) keys expanding to [IRIs](https://tools.ietf.org/html/rfc3987#section-2). [Processors](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-processor) *MUST* preserve this value when expanding. All other [entries](https://infra.spec.whatwg.org/#map-entry) of a [default object](https://www.w3.org/TR/json-ld11/#dfn-default-object) *MUST* be ignored.
-   The values of `@id` and `@type` may also be an empty [map](https://infra.spec.whatwg.org/#ordered-map), <span class="changed">an [IRI reference](https://tools.ietf.org/html/rfc3987#section-1.3)</span>, [array](https://infra.spec.whatwg.org/#list) containing only an empty [map](https://infra.spec.whatwg.org/#ordered-map), <span class="changed">or an array of [IRI references](https://tools.ietf.org/html/rfc3987#section-1.3)</span>. <span class="changed">Values of `@type` *MAY* also be a [map](https://infra.spec.whatwg.org/#ordered-map) with a `@default` entry, whose values are restricted by be [IRIs](https://tools.ietf.org/html/rfc3987#section-2)</span>. [Processors](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-processor) *MUST* preserve this value when expanding.
-   Framing either operates on the merged node definitions contained in the input document, or on the [default graph](https://www.w3.org/TR/rdf11-concepts/#dfn-default-graph) depending on if the input frame contains the `@graph` [entry](https://infra.spec.whatwg.org/#map-entry) at the top level. Nodes with a [subject](https://www.w3.org/TR/rdf11-concepts/#dfn-subject) that is also a [named graph](https://www.w3.org/TR/rdf11-concepts/#dfn-named-graph), where the <a href="#dfn-frame-object" class="internalDFN">frame object</a> contains `@graph`, extend framing to [node objects](https://www.w3.org/TR/json-ld11/#dfn-node-object) from the associated [named graph](https://www.w3.org/TR/rdf11-concepts/#dfn-named-graph).

#### 4.1.2 Algorithm<a href="#algorithm" class="self-link"></a>

The framing algorithm takes five required input variables and one optional input variable. The required inputs are a <a href="#dfn-framing-state" class="internalDFN">framing state</a> (state), a list of subjects to frame, an <a href="#dfn-input-frame" class="internalDFN">input frame</a> (expanded frame), a parent used to collect partial frame results, and an active property. The optional input variable is the <a href="#dom-jsonldoptions-ordered" class="internalDFN"><code>ordered</code></a> flag.

The algorithm adds elements to parent either by appending the element to parent, if it is an [array](https://infra.spec.whatwg.org/#list), or by appending it to an array associated with active property in parent, if it is a [map](https://infra.spec.whatwg.org/#ordered-map). Note that if parent is an [array](https://infra.spec.whatwg.org/#list), active property *MUST* be `null`, and if it is a [map](https://infra.spec.whatwg.org/#ordered-map), it *MUST NOT* be `null`.

1.  If frame is an [array](https://infra.spec.whatwg.org/#list), set frame to the value of the [array](https://infra.spec.whatwg.org/#list), which *MUST* be a valid <a href="#dfn-frame" class="internalDFN">frame</a>. If frame is determined to be invalid, an <a href="#dom-jsonldframingerrorcode-invalid-frame" class="internalDFN"><code>invalid frame</code></a> error has been detected and processing is aborted.
    1.  Frame *MUST* be a [map](https://infra.spec.whatwg.org/#ordered-map).
    2.  If frame has an `@id` [entry](https://infra.spec.whatwg.org/#map-entry), its value *MUST* be either an [array](https://infra.spec.whatwg.org/#list) containing a single empty [map](https://infra.spec.whatwg.org/#ordered-map) as a value, a valid [IRI](https://tools.ietf.org/html/rfc3987#section-2) or an [array](https://infra.spec.whatwg.org/#list) where all values are valid [IRIs](https://tools.ietf.org/html/rfc3987#section-2).
    3.  If frame has a `@type` [entry](https://infra.spec.whatwg.org/#map-entry), its value *MUST* be either an [array](https://infra.spec.whatwg.org/#list) containing a single empty [map](https://infra.spec.whatwg.org/#ordered-map) as a value, an [array](https://infra.spec.whatwg.org/#list) containing a [map](https://infra.spec.whatwg.org/#ordered-map) with a [entry](https://infra.spec.whatwg.org/#map-entry) whose key is `@default`, a valid [IRI](https://tools.ietf.org/html/rfc3987#section-2) or an [array](https://infra.spec.whatwg.org/#list) where all values are valid [IRIs](https://tools.ietf.org/html/rfc3987#section-2).
2.  Initialize flags embed, explicit, and requireAll from <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a>, <a href="#dfn-explicit-inclusion-flag" class="internalDFN">explicit inclusion flag</a>, and <a href="#dfn-require-all-flag" class="internalDFN">require all flag</a> in state overriding from any property values for `@embed`, `@explicit`, and `@requireAll` in frame.
3.  Create a list of matched subjects by filtering subjects against frame using the [Frame Matching algorithm](#frame-matching) with state, subjects, frame, and requireAll.
4.  For each id and associated [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) node from the set of matched subjects, ordered lexicographically by id <span class="changed">if the optional <a href="#dom-jsonldoptions-ordered" class="internalDFN"><code>ordered</code></a> flag is `true`</span>:
    1.  Initialize output to a new [map](https://infra.spec.whatwg.org/#ordered-map) with `@id` and id.
    2.  If the <a href="#dfn-embedded-flag" class="internalDFN">embedded flag</a> in state is `false` and there is an existing embedded node in parent associated with graph name and id in state, do not perform additional processing for this node.
    3.  Otherwise, if the <a href="#dfn-embedded-flag" class="internalDFN">embedded flag</a> in state is `true` and either embed is `@never` or if a circular reference would be created by an embed, add output to parent and do not perform additional processing for this node.
    4.  Otherwise, if the <a href="#dfn-embedded-flag" class="internalDFN">embedded flag</a> in state is `true`, embed is `@once`, and there is an existing embedded node in parent associated with graph name and id in state, add output to parent and do not perform additional processing for this node.
    5.  If graph map in state has an entry for id:
        1.  If frame does not have a `@graph` [entry](https://infra.spec.whatwg.org/#map-entry), set recurse to `true`, unless graph name in state is `@merged` and set subframe to a new empty [map](https://infra.spec.whatwg.org/#ordered-map).
        2.  Otherwise, set subframe to the first entry for `@graph` in frame, or a new empty [map](https://infra.spec.whatwg.org/#ordered-map), if it does not exist, and set recurse to `true`, unless id is `@merged` or `@default`.
        3.  If recurse is `true`:
            1.  Set the value of graph name in state to id.
            2.  Set the value of <a href="#dfn-embedded-flag" class="internalDFN">embedded flag</a> in state to `false`.
            3.  Invoke the algorithm using a copy of state with the value of graph name set to id and the value of <a href="#dfn-embedded-flag" class="internalDFN">embedded flag</a> set to `false`, the keys from the graph map in state associated with id as subjects, subframe as frame, output as parent, and `@graph` as active property.
    6.  If frame has an `@included` [entry](https://infra.spec.whatwg.org/#map-entry), invoke the algorithm using a copy of state with the value of <a href="#dfn-embedded-flag" class="internalDFN">embedded flag</a> set to `false`, subjects, frame, output as parent, and `@included` as active property.
    7.  For each property and objects in node, ordered lexicographically by property <span class="changed">if the optional <a href="#dom-jsonldoptions-ordered" class="internalDFN"><code>ordered</code></a> flag is `true`</span>:
        1.  If property is a [keyword](https://www.w3.org/TR/json-ld11/#dfn-keyword), add property and objects to output.
        2.  Otherwise, if property is not in frame, and explicit is `true`, [processors](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-processor) *MUST NOT* add any values for property to output, and the following steps are skipped.
        3.  For each item in objects:
            1.  If item is a [map](https://infra.spec.whatwg.org/#ordered-map) with the property `@list`, then each listitem in the list is processed in sequence and added to a new list [map](https://infra.spec.whatwg.org/#ordered-map) in output:
                1.  If listitem is a [node reference](https://www.w3.org/TR/json-ld11/#dfn-node-reference), invoke the algorithm <span class="changed">using a copy of state with the value of <a href="#dfn-embedded-flag" class="internalDFN">embedded flag</a> set to `true`</span>, the value of `@id` from listitem as the sole item in a new subjects [array](https://infra.spec.whatwg.org/#list), the first value from `@list` in frame as frame, list as parent, and `@list` as active property. If frame does not exist, create a new frame using a new [map](https://infra.spec.whatwg.org/#ordered-map) with properties for `@embed`, `@explicit` and `@requireAll` taken from embed, explicit and requireAll.
                2.  Otherwise, append a copy of listitem to `@list` in list.
            2.  If item is a [node reference](https://www.w3.org/TR/json-ld11/#dfn-node-reference), invoke the algorithm <span class="changed">using a copy of state with the value of <a href="#dfn-embedded-flag" class="internalDFN">embedded flag</a> set to `true`</span>, the value of `@id` from item as the sole item in a new subjects [array](https://infra.spec.whatwg.org/#list), the first value from property in frame as frame, output as parent, and property as active property. If frame does not exist, create a new frame using a new [map](https://infra.spec.whatwg.org/#ordered-map) with properties for `@embed`, `@explicit` and `@requireAll` taken from embed, explicit and requireAll.
            3.  Otherwise, append a copy of item to [active property](https://www.w3.org/TR/json-ld11-api/#dfn-active-property) in output.
        4.  For each non-[keyword](https://www.w3.org/TR/json-ld11/#dfn-keyword) property and objects in frame <span class="changed">(other than \`@type)</span> that is not in output:
            1.  Let item be the first value in objects, which *MUST* be a <a href="#dfn-frame-object" class="internalDFN">frame object</a>.
            2.  Set property frame to the first value in objects or a newly created <a href="#dfn-frame-object" class="internalDFN">frame object</a> if value is objects. property frame *MUST* be a [map](https://infra.spec.whatwg.org/#ordered-map).
            3.  Skip property and property frame if property frame contains `@omitDefault` with a value of `true`, or does not contain `@omitDefault` and the value of the <a href="#dfn-omit-default-flag" class="internalDFN">omit default flag</a> in state is `true`.
            4.  Add property to output with a new [map](https://infra.spec.whatwg.org/#ordered-map) having a property `@preserve` and a value that is a copy of the value of `@default` in frame if it exists, or the string `@null` otherwise.
        5.  If frame has the property `@reverse`, then for each reverse property and sub frame that are the values of `@reverse` in frame:
            1.  Create a `@reverse` property in output with a new [map](https://infra.spec.whatwg.org/#ordered-map) reverse dict as its value.
            2.  For each reverse id and node in the <a href="#dfn-map-of-flattened-subjects" class="internalDFN">map of flattened subjects</a> that has the property reverse property containing a [node reference](https://www.w3.org/TR/json-ld11/#dfn-node-reference) with an `@id` of id:
                1.  Add reverse property to reverse dict with a new empty [array](https://infra.spec.whatwg.org/#list) as its value.
                2.  Invoke the algorithm <span class="changed">using a copy of state with the value of <a href="#dfn-embedded-flag" class="internalDFN">embedded flag</a> set to `true`</span>, the reverse id as the sole item in a new subjects [array](https://infra.spec.whatwg.org/#list), sub frame as frame, `null` as active property, and the [array](https://infra.spec.whatwg.org/#list) value of reverse property in reverse dict as parent.
        6.  Once output has been set are required in the previous steps, add output to parent.

### 4.2 Frame Matching Algorithm<a href="#frame-matching" class="self-link"></a>

The Frame Matching Algorithm is used as part of the [Framing algorithm](#framing-algorithm) to determine if a particular [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) matches the criteria set in a <a href="#dfn-frame" class="internalDFN">frame</a>. In general, a node object matches a frame if it meets the matches on `@type`, `@id`, or if it matches given one of several different properties. If the <a href="#dfn-require-all-flag" class="internalDFN">require all flag</a> is `true`, all properties must have defaults or match for the frame to match.

Note

As matching is performed on expanded node objects, all values will be in the form of an array.

Node matching uses a combination of JSON constructs to match *any*, *zero*, or *some* specific values:

`[]` (`match none`)  
An empty array matches no values, or a value which is, itself, an empty array.

`[frame object]` (`node pattern`)  
A non-empty <a href="#dfn-frame-object" class="internalDFN">frame object</a>, used to match specific values using recursive node matching.

`[IRI+]`  
One or more strings in the form of an [IRI](https://tools.ietf.org/html/rfc3987#section-2), used for matching on `@type` and `@id`, which allows a match on *any* of the listed IRIs.

`[value object]` (`value pattern`)  
A [value object](https://www.w3.org/TR/json-ld11/#dfn-value-object), used to match a specific value. Within a [value object](https://www.w3.org/TR/json-ld11/#dfn-value-object), the values for `@value`, `@type`, and `@language` may also be an array of one or more [string](https://infra.spec.whatwg.org/#javascript-string) values, <span class="changed">values of `@language` are compared without regard to case.</span>.

`{}` (`wildcard`)  
An array containing an empty object (after excluding any properties which are <a href="#dfn-framing-keywords" class="internalDFN">framing keywords</a>) matches any value that is present, and does not match if there are no values.

The frame matching algorithm takes the <a href="#dfn-framing-state" class="internalDFN">framing state</a> (state), a list of subjects to match from the <a href="#dfn-map-of-flattened-subjects" class="internalDFN">map of flattened subjects</a> (subjects), a <a href="#dfn-frame" class="internalDFN">frame</a> to match against (frame), and the requireAll flag and returns a list of matched subjects by filtering each node in subjects as follows:

All properties, including `@id` and `@type`, but no other [keywords](https://www.w3.org/TR/json-ld11/#dfn-keyword) are considered when matching a frame.

1.  node matches if frame has no properties.
2.  If requireAll is **true**, node matches if all properties (property) in frame match any of the following conditions. Or, if requireAll is **false**, if any of the properties (property) in frame match any of the following conditions. For the values of each property from frame in node:
    1.  If property is `@id`:
        1.  property matches if the `@id` property in frame includes any [IRI](https://tools.ietf.org/html/rfc3987#section-2) in values.
        2.  Otherwise, property matches if the `@type` property in frame is `wildcard` or `match none`.

        Note

        Framing works on <a href="#dfn-map-of-flattened-subjects" class="internalDFN">map of flattened subjects</a>, and the act of flattening ensures that all subjects have an `@id` property; thus the `"@id": []` pattern would never match any [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object). The `"@id": [{}]` pattern would match any [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) and is equivalent to not specifying a `@id` property in frame at all

    2.  Otherwise, if property is `@type`:
        1.  property matches if the `@type` property in frame includes any [IRI](https://tools.ietf.org/html/rfc3987#section-2) in values.
        2.  Otherwise, property matches if values is not empty and the `@type` property in frame is `wildcard`.
        3.  Otherwise, property matches if values is empty and the `@type` property in frame is `match none`.
        4.  Otherwise, property matches if the `@type` property in frame is a [default object](https://www.w3.org/TR/json-ld11/#dfn-default-object).
        5.  Otherwise, property does not match.
    3.  If property is `@id` or `@type` and does not match, node does not match, and processing is terminated.
    4.  Otherwise, the value of property in frame *MUST* be empty, or an array containing a valid <a href="#dfn-frame" class="internalDFN">frame</a>.
    5.  property matches if values is empty, or non existent, the value of property in frame is a [map](https://infra.spec.whatwg.org/#ordered-map) containing only the `@default` [entry](https://infra.spec.whatwg.org/#map-entry) with any value, and any other property in node has a non-default match.
    6.  node does not match if values is not empty and the value of property in frame is `match none`, and further matching is aborted.
    7.  Otherwise, property matches if values is not empty and the value of property in frame is `wildcard`.
    8.  Otherwise, if the value of property in frame is a <a href="#dfn-value-pattern" class="internalDFN"><code>value pattern</code></a> (value pattern): property matching is determined using the [Value matching algorithm](#value-matching).
    9.  Otherwise, for any **node pattern** (node pattern) which is one of the values of property in frame:
        1.  Let value subjects be the list of subjects from the <a href="#dfn-map-of-flattened-subjects" class="internalDFN">map of flattened subjects</a> matching the [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) values from values.
        2.  Let matched subjects be the result of calling this algorithm recursively using state, value subjects for subjects, node pattern for frame, and the requireAll flag.
        3.  property matches if matched subjects is not empty.
    10. Otherwise, property does not match.

### 4.3 Value Pattern Matching Algorithm<a href="#value-matching" class="self-link"></a>

The Value Pattern Matching Algorithm is used as part of the [Framing](#framing-algorithm) and [Frame Matching](#frame-matching) algorithms. A value object matches a value pattern using the `match none` and `wildcard` patterns on `@value`, `@type`, and `@language`, in addition to allowing a specific value to match a set of values defined using the [array](https://infra.spec.whatwg.org/#list) form for each [value object](https://www.w3.org/TR/json-ld11/#dfn-value-object) property.

The algorithm takes a <a href="#dfn-value-pattern" class="internalDFN"><code>value pattern</code></a> (pattern) and [value object](https://www.w3.org/TR/json-ld11/#dfn-value-object) (value) as parameters. Value matches pattern using the following algorithm:

1.  Let v1, t1, and l1 be the values of `@value`, `@type`, and `@language` in value, or **null** if none exists, <span class="changed">where values of `@language` are normalized to lower case.</span>.
2.  Let v2, t2, and l2 be the values of `@value`, `@type`, and `@language` in value pattern, or **null** if none exists, <span class="changed">where string values of `@language` are normalized to lower case.</span>.
3.  Value matches pattern when pattern is `wildcard`, or:
    1.  v1 is in v2, or v1 is not **null** and v2 is `wildcard`, and
    2.  t1 is in t2, or t1 is not **null** and t2 is `wildcard`, or **null**, or t1 is `null` and t2 is **null** or `match none`, and
    3.  l1 is in l2, or l1 is not **null** and l2 is `wildcard`, or **null**, or l1 is `null` and l2 is **null** or `match none`.

5. The Application Programming Interface<a href="#the-application-programming-interface" class="self-link"></a>
---------------------------------------------------------------------------------------------------------------

This API provides a clean mechanism that enables developers to convert JSON-LD data into a variety of output formats that are easier to work with in various programming languages. If a JSON-LD API is provided in a programming environment, the entirety of the following API *MUST* be implemented.

The JSON-LD API uses [Promises](https://tc39.es/ecma262/#sec-promise-objects) to represent the result of the various deferred operations. [Promises](https://tc39.es/ecma262/#sec-promise-objects) are defined in \[<a href="#bib-ecmascript" class="bibref" title="ECMAScript Language Specification">ECMASCRIPT</a>\]. General use within specifications can be found in \[<a href="#bib-promises-guide" class="bibref" title="Writing Promise-Using Specifications">promises-guide</a>\]. <span class="changed">Implementations *MAY* chose to implement in an appropriate way for their native environments as long as they generally use the same methods, arguments, and options and return the same results.</span>

Note

Interfaces are marked `[Exposed=JsonLd]`, which creates a global interface. The use of WebIDL in JSON-LD, while appropriate for use within browsers, is not limited to such use.

### 5.1 JsonLdProcessor<a href="#jsonldprocessor" class="self-link"></a>

The [JSON-LD Processor](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-processor) interface is the high-level programming structure that developers use to access the JSON-LD transformation methods. The definition below is an experimental extension of the interface defined in the JSON-LD 1.1 API \[<a href="#bib-json-ld11-api" class="bibref" title="JSON-LD 1.1 Processing Algorithms and API">JSON-LD11-API</a>\].

It is important to highlight that implementations do not modify the input parameters. If an error is detected, the [`Promise`](https://heycam.github.io/webidl/#idl-promise) is rejected with a <a href="#dom-jsonldframingerror" class="internalDFN"><code>JsonLdFramingError</code></a> having an appropriate <a href="#dom-jsonldframingerror-code" class="internalDFN"><code>code</code></a> and processing is stopped.

    WebIDL/*
     * The JsonLd interface is created to expose the JsonLdProcessor interface.
     */
    [Global=JsonLd, Exposed=JsonLd]
    interface JsonLd {};

    [Exposed=JsonLd]
    interface JsonLdProcessor {
      constructor();
      static Promise<JsonLdRecord> frame(
        JsonLdInput input,
        JsonLdInput frame,
        optional JsonLdOptions options = {});
    };

The `JsonLdProcessor` interface `frame()` method [Frames](#framing) the given `input` using <a href="#dfn-jsonldprocessor-frame-frame" class="internalDFN">frame</a> according to the steps in the [Framing Algorithm](#framing-algorithm):

1.  Create a new [`Promise`](https://heycam.github.io/webidl/#idl-promise) promise and return it. The following steps are then executed asynchronously.
2.  If the provided <a href="#dfn-jsonldprocessor-frame-input" class="internalDFN">input</a> is a [RemoteDocument](https://www.w3.org/TR/json-ld11-api/#dom-remotedocument), initialize remote document to <a href="#dfn-jsonldprocessor-frame-input" class="internalDFN">input</a>.
3.  Otherwise, if the provided <a href="#dfn-jsonldprocessor-frame-input" class="internalDFN">input</a> is a [string](https://infra.spec.whatwg.org/#javascript-string) representing the [IRI](https://tools.ietf.org/html/rfc3987#section-2) of a remote document, await and dereference it as remote document using [LoadDocumentCallback](https://www.w3.org/TR/json-ld11-api/#dom-loaddocumentcallback), passing <a href="#dfn-jsonldprocessor-frame-input" class="internalDFN">input</a> for url, and the [extractAllScripts](https://www.w3.org/TR/json-ld11-api/#dom-loaddocumentoptions-extractallscripts) option from <a href="#dfn-jsonldprocessor-frame-options" class="internalDFN">options</a> for extractAllScripts.
4.  Set expanded input to the result of using the [expand](https://www.w3.org/TR/json-ld11-api/#dom-jsonldprocessor-expand) method either remote document or <a href="#dfn-jsonldprocessor-frame-input" class="internalDFN">input</a> if there is no remote document for [input](https://www.w3.org/TR/json-ld11-api/#dfn-jsonldprocessor-expand-input) and <a href="#dfn-jsonldprocessor-frame-options" class="internalDFN">options</a> <span class="changed">with <a href="#dom-jsonldoptions-ordered" class="internalDFN"><code>ordered</code></a> set to `false`</span>.
5.  If the provided <a href="#dfn-jsonldprocessor-frame-frame" class="internalDFN">frame</a> is a [RemoteDocument](https://www.w3.org/TR/json-ld11-api/#dom-remotedocument), initialize remote frame to <a href="#dfn-jsonldprocessor-frame-frame" class="internalDFN">frame</a>.
6.  Otherwise, if the provided <a href="#dfn-jsonldprocessor-frame-frame" class="internalDFN">frame</a> is a [string](https://infra.spec.whatwg.org/#javascript-string) representing the [IRI](https://tools.ietf.org/html/rfc3987#section-2) of a remote document, await and dereference it as remote frame using [LoadDocumentCallback](https://www.w3.org/TR/json-ld11-api/#dom-loaddocumentcallback), passing <a href="#dfn-jsonldprocessor-frame-frame" class="internalDFN">frame</a> for url, and the [extractAllScripts](https://www.w3.org/TR/json-ld11-api/#dom-loaddocumentoptions-extractallscripts) option from <a href="#dfn-jsonldprocessor-frame-options" class="internalDFN">options</a> for extractAllScripts.
7.  Set expanded frame to the result of using the [expand](https://www.w3.org/TR/json-ld11-api/#dom-jsonldprocessor-expand) method either remote frame or <a href="#dfn-jsonldprocessor-frame-frame" class="internalDFN">frame</a> if there is no remote frame for [input](https://www.w3.org/TR/json-ld11-api/#dfn-jsonldprocessor-expand-input) <a href="#dfn-jsonldprocessor-frame-options" class="internalDFN">options</a> the [frameExpansion](https://www.w3.org/TR/json-ld11-api/#dom-jsonldoptions-frameexpansion) option set to `true`, <span class="changed">and the<a href="#dom-jsonldoptions-ordered" class="internalDFN"><code>ordered</code></a> set to `false`</span>.
8.  Set context to the value of `@context` from remote frame or <a href="#dfn-jsonldprocessor-frame-frame" class="internalDFN">frame</a>, if it exists, or to a new empty [context](https://www.w3.org/TR/json-ld11/#dfn-context), otherwise.
9.  Set context base to the [`documentUrl`](https://www.w3.org/TR/json-ld11-api/#dom-remotedocument-documenturl) from remote frame, if available, otherwise to the [`base`](https://www.w3.org/TR/json-ld11-api/#dom-jsonldoptions-base) option from <a href="#dfn-jsonldprocessor-frame-options" class="internalDFN">options</a>.
10. Initialize active context to the result of the [Context Processing algorithm](https://www.w3.org/TR/json-ld11-api/#context-processing-algorithm) passing a new empty [context](https://www.w3.org/TR/json-ld11/#dfn-context) as active context context as local context, and context base as base URL.
11. Initialize an [active context](https://www.w3.org/TR/json-ld11/#dfn-active-context) using context; the [base IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-base-iri) is set to the [base](https://www.w3.org/TR/json-ld11-api/#dom-jsonldoptions-base) option from <a href="#dfn-jsonldprocessor-frame-options" class="internalDFN">options</a>, if set; otherwise, if the [compactToRelative](https://www.w3.org/TR/json-ld11-api/#dom-jsonldoptions-compacttorelative) option is **true**, to the IRI of the currently being processed document, if available; otherwise to `null`.
12. Initialize inverse context to the result of performing the [Inverse Context Creation algorithm](https://www.w3.org/TR/json-ld11-api/#inverse-context-creation).
13. If <a href="#dfn-jsonldprocessor-frame-frame" class="internalDFN">frame</a> has a top-level property which expands to `@graph` set the <a href="#dom-jsonldoptions-framedefault" class="internalDFN"><code>frameDefault</code></a> option to <a href="#dfn-jsonldprocessor-frame-options" class="internalDFN">options</a> with the value `true`.
14. Initialize a new <a href="#dfn-framing-state" class="internalDFN">framing state</a> (state) to an empty [map](https://infra.spec.whatwg.org/#ordered-map).
    1.  Set <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a> in state to <a href="#dom-jsonldoptions-embed" class="internalDFN"><code>embed</code></a> with the default value `@once`.
    2.  Set the embedded flag in state to `false`
    3.  Set <a href="#dfn-explicit-inclusion-flag" class="internalDFN">explicit inclusion flag</a> in state to <a href="#dom-jsonldoptions-explicit" class="internalDFN"><code>explicit</code></a> with the default value `false`.
    4.  Set <a href="#dfn-require-all-flag" class="internalDFN">require all flag</a> in state to <a href="#dom-jsonldoptions-requireall" class="internalDFN"><code>requireAll</code></a> with the default value `false`.
    5.  Set <a href="#dfn-omit-default-flag" class="internalDFN">omit default flag</a> in state to <a href="#dom-jsonldoptions-omitdefault" class="internalDFN"><code>omitDefault</code></a> with the default value `false`.
    6.  Set the graph name in state to either `@default` if <a href="#dom-jsonldoptions-framedefault" class="internalDFN"><code>frameDefault</code></a> is `true`, otherwise to `false`.
    7.  Set the graph map in state to the result of performing the [Node Map Generation](https://www.w3.org/TR/json-ld11-api/#node-map-generation) algorithm on expanded input.
        1.  If graph name in state is `@merged`, add en entry for `@merged` in graph map set to the result of the [Merge Node Maps](https://www.w3.org/TR/json-ld11-api/#merge-node-maps) algorithm passing graph map.
    8.  Set subject map in state to the <a href="#dfn-map-of-flattened-subjects" class="internalDFN">map of flattened subjects</a> which is the value of graph name in graph map.
    9.  

15. Initialize results as an empty [array](https://infra.spec.whatwg.org/#list).
16. Invoke the [Framing algorithm](#framing-algorithm), passing state, the keys from subject map in state for subjects, expanded frame, results for parent, and `null` as active property.
17. If the [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode) is not `json-ld-1.0`, remove the `@id` [entry](https://infra.spec.whatwg.org/#map-entry) of each [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) in results where the [entry](https://infra.spec.whatwg.org/#map-entry) value is a [blank node identifier](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node-identifier) which appears only once in any property value within results.
18. Recursively, replace all [entries](https://infra.spec.whatwg.org/#map-entry) in results where the key is `@preserve` with the first value of that [entry](https://infra.spec.whatwg.org/#map-entry).
    Note

    The value of the entry will be an array with a single value; this will effectively replace the map containing `@preserve` with that value.

19. Set compacted results to the result of using the `compact` method using active context, inverse context, `null` for active property, results as element,, and the [`compactArrays`](https://www.w3.org/TR/json-ld11-api/#dom-jsonldoptions-compactarrays) <span class="changed">and <a href="#dom-jsonldoptions-ordered" class="internalDFN"><code>ordered</code></a></span> flags from <a href="#dfn-jsonldprocessor-frame-options" class="internalDFN">options</a>.
    1.  If compacted results is an empty [array](https://infra.spec.whatwg.org/#list), replace it with a new [map](https://infra.spec.whatwg.org/#ordered-map).
    2.  Otherwise, if compacted results is an [array](https://infra.spec.whatwg.org/#list), replace it with a new [map](https://infra.spec.whatwg.org/#ordered-map) with a single [entry](https://infra.spec.whatwg.org/#map-entry) whose key is the result of <span class="changed">[IRI compacting](https://www.w3.org/TR/json-ld11-api/#dfn-iri-compacting) `@graph`</span> and value is compacted results.
    3.  Add an `@context` [entry](https://infra.spec.whatwg.org/#map-entry) to compacted results and set its value to the provided context.
20. Recursively, replace all `@null` values in compacted results with `null`. If, after replacement, an [array](https://infra.spec.whatwg.org/#list) contains only the value `null` remove that value, leaving an empty array.
21. If <span class="changed"><a href="#dom-jsonldoptions-omitgraph" class="internalDFN"><code>omitGraph</code></a> is `false` and</span> compacted results does not have a top-level `@graph` [entry](https://infra.spec.whatwg.org/#map-entry), or its value is not an [array](https://infra.spec.whatwg.org/#list), modify compacted results to place the non `@context` [entry](https://infra.spec.whatwg.org/#map-entry) of compacted results into a [map](https://infra.spec.whatwg.org/#ordered-map) contained within the [array](https://infra.spec.whatwg.org/#list) value of `@graph`. If <a href="#dom-jsonldoptions-omitgraph" class="internalDFN"><code>omitGraph</code></a> is `true`, a top-level `@graph` [entry](https://infra.spec.whatwg.org/#map-entry) is used only to contain multiple [node objects](https://www.w3.org/TR/json-ld11/#dfn-node-object).
22. Resolve the promise with compacted results, transforming compacted results from the [internal representation](https://www.w3.org/TR/json-ld11-api/#dfn-internal-representation) to a JSON serialization.

input  
The JSON-LD object or array of JSON-LD objects to perform the framing upon or an [IRI](https://tools.ietf.org/html/rfc3987#section-2) referencing the JSON-LD document to frame.

frame  
The frame to use when re-arranging the data of `input`; either in the form of an [map](https://infra.spec.whatwg.org/#ordered-map) or as [IRI](https://tools.ietf.org/html/rfc3987#section-2).

options  
A set of options that *MAY* affect the framing algorithm such as, e.g., the input document's base [IRI](https://tools.ietf.org/html/rfc3987#section-2). <span class="changed">The <a href="#dom-jsonldoptions" class="internalDFN"><code>JsonLdOptions</code></a> type defines default option values.</span>

<!-- -->

    WebIDLtypedef record<USVString, any> JsonLdRecord;

The `JsonLdRecord` is the definition of a [map](https://infra.spec.whatwg.org/#ordered-map) used to contain arbitrary [map entries](https://infra.spec.whatwg.org/#map-entry) which are the result of parsing a [JSON Object](https://tools.ietf.org/html/rfc8259#section-4).

    WebIDLtypedef (JsonLdRecord or sequence<JsonLdRecord> or USVString or RemoteDocument) JsonLdInput;

The `JsonLdInput` interface is used to refer to an input value that that may be a <a href="#dom-jsonldrecord" class="internalDFN"><code>JsonLdRecord</code></a>, a `sequence` of <a href="#dom-jsonldrecord" class="internalDFN">JsonLdRecords</a>, a [string](https://infra.spec.whatwg.org/#javascript-string) representing an [IRI](https://tools.ietf.org/html/rfc3987#section-2), which can be dereferenced to retrieve a valid JSON document, <span class="changed">or an already dereferenced [RemoteDocument](https://www.w3.org/TR/json-ld11-api/#dom-remotedocument)</span>.

When the value is a <a href="#dom-jsonldrecord" class="internalDFN"><code>JsonLdRecord</code></a> or sequence of <a href="#dom-jsonldrecord" class="internalDFN">JsonLdRecords</a>, the values are taken as their equivalent internal representation values, where a <a href="#dom-jsonldrecord" class="internalDFN"><code>JsonLdRecord</code></a> is equivalent to a [map](https://infra.spec.whatwg.org/#ordered-map), and a sequence of <a href="#dom-jsonldrecord" class="internalDFN">JsonLdRecords</a> is equivalent to an [array](https://infra.spec.whatwg.org/#list) of [maps](https://infra.spec.whatwg.org/#ordered-map). The [map entries](https://infra.spec.whatwg.org/#map-entry) are converted to their equivalents in \[<a href="#bib-infra" class="bibref" title="Infra Standard">INFRA</a>\].

### 5.2 Error Handling<a href="#error-handling" class="self-link"></a>

The `JsonLdFramingError` type is used to report processing errors.

    WebIDLdictionary JsonLdFramingError {
      JsonLdFramingErrorCode code;
      USVString? message = null;
    };
    enum JsonLdFramingErrorCode {
      "invalid frame",
      "invalid @embed value"
    };

JSON-LD Framing extends the error interface and codes defined in [JSON-LD 1.1 Processing Algorithms and API](https://www.w3.org/TR/json-ld11-api/#error-handling) the JSON-LD 1.1 API \[<a href="#bib-json-ld11-api" class="bibref" title="JSON-LD 1.1 Processing Algorithms and API">JSON-LD11-API</a>\].

`code`  
a string representing the particular error type, as described in the various algorithms in this document.

`message`  
an optional error message containing additional debugging information. The specific contents of error messages are outside the scope of this specification.

The `JsonLdFramingErrorCode` represents the collection of valid JSON-LD Framing error codes.

`invalid @embed value`  
The value for `@embed` is not one recognized for the <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a>.

`invalid frame`  
The frame is invalid.

### 5.3 Data Structures<a href="#data-structures" class="self-link"></a>

This section describes datatype definitions used within the JSON-LD API.

#### 5.3.1 JsonLdContext<a href="#jsonldcontext" class="self-link"></a>

The [JsonLdContext](https://www.w3.org/TR/json-ld11-api/#dom-jsonldcontext) type is used to refer to a value that that may be a [map](https://infra.spec.whatwg.org/#ordered-map), a [string](https://infra.spec.whatwg.org/#javascript-string) representing an [IRI](https://tools.ietf.org/html/rfc3987#section-2), or an array of <a href="https://infra.spec.whatwg.org/#ordered-map" class="changed">maps</a> and [strings](https://infra.spec.whatwg.org/#javascript-string).

See [JsonLdContext](https://www.w3.org/TR/json-ld11-api/#dom-jsonldcontext) definition in the JSON-LD 1.1 API \[<a href="#bib-json-ld11-api" class="bibref" title="JSON-LD 1.1 Processing Algorithms and API">JSON-LD11-API</a>\].

#### 5.3.2 JsonLdOptions<a href="#jsonldoptions" class="self-link"></a>

The `JsonLdOptions` type is used to pass various options to the <a href="#dom-jsonldprocessor" class="internalDFN"><code>JsonLdProcessor</code></a> methods.

    WebIDLdictionary JsonLdOptions {
      (JsonLdEmbed or boolean)  embed         = "@once";
      boolean                   explicit      = false;
      boolean                   omitDefault   = false;
      boolean                   omitGraph;
      boolean                   requireAll    = false;
      boolean                   frameDefault  = false;
      boolean                   ordered       = false;
    };

    enum JsonLdEmbed {
      "@always",
      "@once",
      "@never"
    };

In addition to those options defined in the JSON-LD 1.1 API \[<a href="#bib-json-ld11-api" class="bibref" title="JSON-LD 1.1 Processing Algorithms and API">JSON-LD11-API</a>\], framing defines these additional options:

`embed`  
Sets the value <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a> used in the [Framing Algorithm](#framing-algorithm). A boolean value of `true` sets the flag to `@once`, while a value of `false` sets the flag to `@never`.

`explicit`  
Sets the value <a href="#dfn-explicit-inclusion-flag" class="internalDFN">explicit inclusion flag</a> used in the [Framing Algorithm](#framing-algorithm).

`frameDefault`  
Instead of framing a merged graph, frame only the [default graph](https://www.w3.org/TR/rdf11-concepts/#dfn-default-graph).

`omitDefault`  
Sets the value <a href="#dfn-omit-default-flag" class="internalDFN">omit default flag</a> used in the [Framing Algorithm](#framing-algorithm)

`omitGraph`  
Sets the value <a href="#dfn-omit-graph-flag" class="internalDFN">omit graph flag</a> used in the [Framing Algorithm](#framing-algorithm). If not set explicitly, it is set to `false` if [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode) is `json-ld-1.0`, `true` otherwise.

`ordered`  
If set to `true`, certain algorithm processing steps where indicated are ordered lexicographically. If `false`, order is not considered in processing.

`requireAll`  
Sets the value <a href="#dfn-require-all-flag" class="internalDFN">require all flag</a> used in the [Framing Algorithm](#framing-algorithm).

`JsonLdEmbed` enumerates the values of the <a href="#dom-jsonldoptions-embed" class="internalDFN"><code>embed</code></a> option:

`@always`  
Always embed [node objects](https://www.w3.org/TR/json-ld11/#dfn-node-object) as property values, unless this would cause a circular reference.

`@never`  
Always use a [node reference](https://www.w3.org/TR/json-ld11/#dfn-node-reference) when serializing matching values.

`@once`  
Only a single value within a given [node object](https://www.w3.org/TR/json-ld11/#dfn-node-object) should be embedded, other values of other properties use a [node reference](https://www.w3.org/TR/json-ld11/#dfn-node-reference). This is the default value if neither `@embed` nor <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a> is specified.

See [JsonLdOptions](https://www.w3.org/TR/json-ld11-api/#dom-jsonldoptions) definition in the JSON-LD 1.1 API \[<a href="#bib-json-ld11-api" class="bibref" title="JSON-LD 1.1 Processing Algorithms and API">JSON-LD11-API</a>\].

6. Security Considerations<a href="#security" class="self-link"></a>
--------------------------------------------------------------------

See, [Security Considerations](#iana-security) in <a href="#iana-considerations" class="sectionRef sec-ref">§ A. IANA Considerations</a>.

7. Privacy Considerations<a href="#privacy" class="self-link"></a>
------------------------------------------------------------------

See, [Privacy Considerations](https://www.w3.org/TR/json-ld11/#privacy) in \[<a href="#bib-json-ld11" class="bibref" title="JSON-LD 1.1">JSON-LD11</a>\].

8. Internationalization Considerations<a href="#internationalization" class="self-link"></a>
--------------------------------------------------------------------------------------------

See, [Internationalization Considerations](https://www.w3.org/TR/json-ld11/#internationalization) in \[<a href="#bib-json-ld11" class="bibref" title="JSON-LD 1.1">JSON-LD11</a>\].

A. IANA Considerations<a href="#iana-considerations" class="self-link"></a>
---------------------------------------------------------------------------

This section is included merely for standards community review and will be submitted to the Internet Engineering Steering Group if this specification becomes a W3C Recommendation.

A JSON-LD Frame uses the same MIME media type described in \[<a href="#bib-json-ld11" class="bibref" title="JSON-LD 1.1">JSON-LD11</a>\] along with a required `profile` parameter.

### application/ld+json<a href="#iana-considerations" class="self-link"></a>

Type name:  
application

Subtype name:  
ld+json

Required parameters:  
None

Optional parameters:  
`profile`  
A single URI identifying the resource as a JSON-LD <a href="#dfn-frame" class="internalDFN">Frame</a>. A profile does not change the semantics of the resource representation when processed without profile knowledge, so that clients both with and without knowledge of a profiled resource can safely use the same representation.

`http://www.w3.org/ns/json-ld#framed`  
To specify a JSON-LD <a href="#dfn-frame" class="internalDFN">Frame</a>.

The `http://www.w3.org/ns/json-ld#framed` *SHOULD* be used when serving and requesting a JSON-LD frame document.

Encoding considerations:  
See [RFC 8259, section 11](https://tools.ietf.org/html/rfc8259#section-11).

Security considerations:  
See [RFC 8259, section 12](https://tools.ietf.org/html/rfc8259#section-12) \[<a href="#bib-rfc8259" class="bibref" title="The JavaScript Object Notation (JSON) Data Interchange Format">RFC8259</a>\]

Since JSON-LD is intended to be a pure data exchange format for directed graphs, the serialization *SHOULD NOT* be passed through a code execution mechanism such as JavaScript's `eval()` function to be parsed. An (invalid) document may contain code that, when executed, could lead to unexpected side effects compromising the security of a system.

When processing JSON-LD documents, links to remote contexts are typically followed automatically, resulting in the transfer of files without the explicit request of the user for each one. If remote contexts are served by third parties, it may allow them to gather usage patterns or similar information leading to privacy concerns. Specific implementations, such as the API defined in the JSON-LD 1.1 Processing Algorithms and API specification \[<a href="#bib-json-ld11-api" class="bibref" title="JSON-LD 1.1 Processing Algorithms and API">JSON-LD11-API</a>\], may provide fine-grained mechanisms to control this behavior.

JSON-LD contexts that are loaded from the Web over non-secure connections, such as HTTP, run the risk of being altered by an attacker such that they may modify the JSON-LD [active context](https://www.w3.org/TR/json-ld11/#dfn-active-context) in a way that could compromise security. It is advised that any application that depends on a remote context for mission critical purposes vet and cache the remote context before allowing the system to use it.

Given that JSON-LD allows the substitution of long IRIs with short terms, JSON-LD documents may expand considerably when processed and, in the worst case, the resulting data might consume all of the recipient's resources. Applications should treat any data with due skepticism.

As JSON-LD places no limits on the IRI schemes that may be used, and vocabulary-relative IRIs use string concatenation rather than IRI resolution, it is possible to construct IRIs that may be used maliciously, if dereferenced.

Interoperability considerations:  
Not Applicable

Published specification:  
https://www.w3.org/TR/json-ld11-framing

Applications that use this media type:  
Any programming environment that requires the exchange of directed graphs. Implementations of JSON-LD have been created for JavaScript, Python, Ruby, PHP, and C++.

Additional information:  
Magic number(s):  
Not Applicable

File extension(s):  
.jsonld

Macintosh file type code(s):  
TEXT

Person & email address to contact for further information:  
Ivan Herman &lt;ivan@w3.org&gt;

Intended usage:  
Common

Restrictions on usage:  
None

Author(s):  
Manu Sporny, Gregg Kellogg, Markus Lanthaler, Dave Longley

Change controller:  
W3C

Fragment identifiers used with [application/ld+json](#application-ld-json) are treated as in RDF syntaxes, as per [RDF 1.1 Concepts and Abstract Syntax](https://www.w3.org/TR/rdf11-concepts/#section-fragID) \[<a href="#bib-rdf11-concepts" class="bibref" title="RDF 1.1 Concepts and Abstract Syntax">RDF11-CONCEPTS</a>\].

B. IDL Index<a href="#idl-index" class="self-link"></a>
-------------------------------------------------------

*This section is non-normative.*

    WebIDL/*
     * The JsonLd interface is created to expose the JsonLdProcessor interface.
     */
    [Global=JsonLd, Exposed=JsonLd]
    interface JsonLd {};

    [Exposed=JsonLd]
    interface JsonLdProcessor {
      constructor();
      static Promise<JsonLdRecord> frame(
        JsonLdInput input,
        JsonLdInput frame,
        optional JsonLdOptions options = {});
    };

    typedef record<USVString, any> JsonLdRecord;

    typedef (JsonLdRecord or sequence<JsonLdRecord> or USVString or RemoteDocument) JsonLdInput;

    dictionary JsonLdFramingError {
      JsonLdFramingErrorCode code;
      USVString? message = null;
    };
    enum JsonLdFramingErrorCode {
      "invalid frame",
      "invalid @embed value"
    };

    dictionary JsonLdOptions {
      (JsonLdEmbed or boolean)  embed         = "@once";
      boolean                   explicit      = false;
      boolean                   omitDefault   = false;
      boolean                   omitGraph;
      boolean                   requireAll    = false;
      boolean                   frameDefault  = false;
      boolean                   ordered       = false;
    };

    enum JsonLdEmbed {
      "@always",
      "@once",
      "@never"
    };

C. Open Issues<a href="#open-issues" class="self-link"></a>
-----------------------------------------------------------

*This section is non-normative.*

The following is a list of issues open at the time of publication.

[<span class="issue-number">Issue 29</span>](https://github.com/w3c/json-ld-framing/issues/29)<span class="issue-label" aria-label="This issue is labelled as defer-future-version and spec:enhancement.">: Allow class-scoped framing <a href="https://github.com/w3c/json-ld-framing/issues/?q=is%3Aissue+is%3Aopen+label%3A%22defer-future-version%22" class="respec-gh-label">defer-future-version</a><a href="https://github.com/w3c/json-ld-framing/issues/?q=is%3Aissue+is%3Aopen+label%3A%22spec%3Aenhancement%22" class="respec-gh-label">spec:enhancement</a></span>

Allow class-scoped framing.

[<span class="issue-number">Issue 38</span>](https://github.com/w3c/json-ld-framing/issues/38)<span class="issue-label" aria-label="This issue is labelled as defer-future-version, spec:enhancement, and spec:substantive.">: Several frames in the same frame document? <a href="https://github.com/w3c/json-ld-framing/issues/?q=is%3Aissue+is%3Aopen+label%3A%22defer-future-version%22" class="respec-gh-label">defer-future-version</a><a href="https://github.com/w3c/json-ld-framing/issues/?q=is%3Aissue+is%3Aopen+label%3A%22spec%3Aenhancement%22" class="respec-gh-label">spec:enhancement</a><a href="https://github.com/w3c/json-ld-framing/issues/?q=is%3Aissue+is%3Aopen+label%3A%22spec%3Asubstantive%22" class="respec-gh-label">spec:substantive</a></span>

Several frames in the same frame document?

[<span class="issue-number">Issue 73</span>](https://github.com/w3c/json-ld-framing/issues/73)<span class="issue-label" aria-label="This issue is labelled as defer-future-version.">: Reframing Relationships <a href="https://github.com/w3c/json-ld-framing/issues/?q=is%3Aissue+is%3Aopen+label%3A%22defer-future-version%22" class="respec-gh-label">defer-future-version</a></span>

Reframing Relationships.

D. Changes since 1.0 Draft of 30 August 2012<a href="#changes-since-1-0-draft-of-30-august-2012" class="self-link"></a>
-----------------------------------------------------------------------------------------------------------------------

*This section is non-normative.*

-   There are numerous formatting and terminology changes intended to align with the 1.0 Recommendations of JSON-LD and JSON-LD-API in addition to the use of common term definition sections.
-   The <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a> (`@embed`) can take on different values to better control object embedding.
-   Framing supports *More specific frame matching*, where general `wildcard` and `match none` can be used for type and property values.
-   Frame matching also supports value object matching, where values for `@value`, `@type`, and `@language` can use `wildcard` and `match none` and may also use a set of specific strings to match (e.g., a set of specific languages).
-   Framing allows specific graphs to be matched, and the outer-most frame can either come from the merged graph or the [default graph](https://www.w3.org/TR/rdf11-concepts/#dfn-default-graph).
-   Framing supports `@reverse`.
-   Through the use of *scoped contexts*, parts of a frame can be compacted using a different context than is used for the outer-most object.
-   Frames can use one or more values for `@id` to allow for matching specific objects in a frame.
-   If [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode) is not `json-ld-1.0`, `@id` [entries](https://infra.spec.whatwg.org/#map-entry) with [blank node identifiers](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node-identifier) used only for that `@id` are removed.
-   The JSON syntax has been abstracted into an [internal representation](https://www.w3.org/TR/json-ld11-api/#dfn-internal-representation) to allow for other serialization formats that are functionally equivalent to JSON.
-   Preserved values are compacted using the properties of the referencing term.
-   Removed support for `@link` and in-memory object linking.
-   Added the <a href="#dfn-omit-default-flag" class="internalDFN">omit default flag</a>, controlled via the <a href="#dom-jsonldoptions-omitdefault" class="internalDFN"><code>omitDefault</code></a> API option and/or the current [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode).
-   The API now adds an <a href="#dom-jsonldoptions-ordered" class="internalDFN"><code>ordered</code></a> option, defaulting to `false` This is used in algorithms to control iteration of [map entry](https://infra.spec.whatwg.org/#map-entry) keys. Previously, the algorithms always required such an order. The instructions for evaluating test results have been updated accordingly.
-   Frames may include reverse properties using `@reverse`, or a term defined with `@reverse`, which can cause nodes referencing a node targeted by a frame to have a reverse reference created.

E. Changes since JSON-LD Community Group Final Report<a href="#changes-from-cg" class="self-link"></a>
------------------------------------------------------------------------------------------------------

*This section is non-normative.*

-   The API now adds an <a href="#dom-jsonldoptions-ordered" class="internalDFN"><code>ordered</code></a> option, defaulting to `false` This is used in algorithms to control iteration of [map entry](https://infra.spec.whatwg.org/#map-entry) keys. Previously, the algorithms always required such an order. The instructions for evaluating test results have been updated accordingly.
-   The IANA registration is changed from `application/ld-frame+json` to `application/ld+json` with a required `profile` parameter.
-   The <a href="#dfn-require-all-flag" class="internalDFN">require all flag</a> now needs all properties to be present, including `@id` and `@type`.
-   Removed `@first` and `@last` values for the <a href="#dfn-object-embed-flag" class="internalDFN">object embed flag</a> in favor of `@once`.
-   The [processing mode](https://www.w3.org/TR/json-ld11/#dfn-processing-mode) is now implicitly `json-ld-1.1`, unless set explicitly to `json-ld-1.0`.
-   In a frame `@type` can have a default value, which is not used for frame matching purposes.

F. Changes since Candidate Release of 12 December 2019<a href="#changes-from-cr" class="self-link"></a>
-------------------------------------------------------------------------------------------------------

*This section is non-normative.*

-   Removed duplicate <a href="#how-to-read-this-document" class="sectionRef sec-ref">§ 1.1 How to Read this Document</a>. This is in response to [Issue 92](https://github.com/w3c/json-ld-framing/issues/92).
-   Improved algorithms in <a href="#framing-algorithm" class="sectionRef sec-ref">§ 4.1 Framing Algorithm</a>.
-   Moved non-recursive portions algorithms into the <a href="#dom-jsonldprocessor" class="internalDFN"><code>JsonLdProcessor</code></a> processing steps.
-   Remove the graph stack from <a href="#dfn-framing-state" class="internalDFN">framing state</a> as being unnecessary.

G. Changes since Proposed Recommendation Release of 7 May 2020<a href="#changes-from-pr" class="self-link"></a>
---------------------------------------------------------------------------------------------------------------

*This section is non-normative.*

-   Changed `[Exposed=(Window,Worker)]` to `[Exposed=JsonLd]`, which is declared as a global interface in order to expose the <a href="#dom-jsonldprocessor" class="internalDFN"><code>JsonLdProcessor</code></a> interface for non-browser usage to address review suggestions.

H. Acknowledgements<a href="#ack" class="self-link"></a>
--------------------------------------------------------

*This section is non-normative.*

The editors would like to specially thank the following individuals for making significant contributions to the authoring and editing of this specification:

-   Timothy Cole (University of Illinois at Urbana-Champaign)
-   Gregory Todd Williams (J. Paul Getty Trust)
-   Ivan Herman (W3C Staff)
-   Jeff Mixter (OCLC (Online Computer Library Center, Inc.))
-   David Lehn (Digital Bazaar)
-   David Newbury (J. Paul Getty Trust)
-   Robert Sanderson (J. Paul Getty Trust, chair)
-   Harold Solbrig (Johns Hopkins Institute for Clinical and Translational Research)
-   Simon Steyskal (WU (Wirschaftsuniversität Wien) - Vienna University of Economics and Business)
-   A Soroka (Apache Software Foundation)
-   Ruben Taelman (Imec vzw)
-   Benjamin Young (Wiley, chair)

Additionally, the following people were members of the Working Group at the time of publication:

-   Steve Blackmon (Apache Software Foundation)
-   Dan Brickley (Google, Inc.)
-   Newton Calegari (NIC.br - Brazilian Network Information Center)
-   Victor Charpenay (Siemens AG)
-   Sebastian Käbisch (Siemens AG)
-   Axel Polleres (WU (Wirschaftsuniversität Wien) - Vienna University of Economics and Business)
-   Leonard Rosenthol (Adobe)
-   Jean-Yves ROSSI (CANTON CONSULTING)
-   Antoine Roulin (CANTON CONSULTING)
-   Manu Sporny (Digital Bazaar)
-   Clément Warnier de Wailly (CANTON CONSULTING)

A large amount of thanks goes out to the [JSON-LD Community Group](https://www.w3.org/community/json-ld/) participants who worked through many of the technical issues on the mailing list and the weekly telecons: Chris Webber, David Wood, Drummond Reed, Eleanor Joslin, Fabien Gandon, Herm Fisher, Jamie Pitts, Kim Hamilton Duffy, Niklas Lindström, Paolo Ciccarese, Paul Frazze, Paul Warren, Reto Gmür, Rob Trainer, Ted Thibodeau Jr., and Victor Charpenay.

I. References<a href="#references" class="self-link"></a>
---------------------------------------------------------

### I.1 Normative references <a href="#normative-references" class="self-link"></a>

\[BCP47\]  
[Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). A. Phillips; M. Davis. IETF. September 2009. IETF Best Current Practice. URL: <https://tools.ietf.org/html/bcp47>

\[ECMASCRIPT\]  
[ECMAScript Language Specification](https://tc39.es/ecma262/). Ecma International. URL: <https://tc39.es/ecma262/>

\[INFRA\]  
[Infra Standard](https://infra.spec.whatwg.org/). Anne van Kesteren; Domenic Denicola. WHATWG. Living Standard. URL: <https://infra.spec.whatwg.org/>

\[JSON-LD10\]  
[JSON-LD 1.0](https://www.w3.org/TR/2014/REC-json-ld-20140116/). Manu Sporny; Gregg Kellogg; Marcus Langhaler. W3C. 16 January 2014. W3C Recommendation. URL: <https://www.w3.org/TR/2014/REC-json-ld-20140116/>

\[JSON-LD11\]  
[JSON-LD 1.1](https://www.w3.org/TR/json-ld11/). Gregg Kellogg; Pierre-Antoine Champin; Dave Longley. W3C. 7 May 2020. W3C Proposed Recommendation. URL: <https://www.w3.org/TR/json-ld11/>

\[JSON-LD11-API\]  
[JSON-LD 1.1 Processing Algorithms and API](https://www.w3.org/TR/json-ld11-api/). Gregg Kellogg; Dave Longley; Pierre-Antoine Champin. W3C. 7 May 2020. W3C Proposed Recommendation. URL: <https://www.w3.org/TR/json-ld11-api/>

\[LINKED-DATA\]  
[Linked Data Design Issues](https://www.w3.org/DesignIssues/LinkedData.html). Tim Berners-Lee. W3C. 27 July 2006. W3C-Internal Document. URL: <https://www.w3.org/DesignIssues/LinkedData.html>

\[promises-guide\]  
[Writing Promise-Using Specifications](https://www.w3.org/2001/tag/doc/promises-guide). Domenic Denicola. W3C. 9 November 2018. TAG Finding. URL: <https://www.w3.org/2001/tag/doc/promises-guide>

\[RDF-SCHEMA\]  
[RDF Schema 1.1](https://www.w3.org/TR/rdf-schema/). Dan Brickley; Ramanathan Guha. W3C. 25 February 2014. W3C Recommendation. URL: <https://www.w3.org/TR/rdf-schema/>

\[RDF11-CONCEPTS\]  
[RDF 1.1 Concepts and Abstract Syntax](https://www.w3.org/TR/rdf11-concepts/). Richard Cyganiak; David Wood; Markus Lanthaler. W3C. 25 February 2014. W3C Recommendation. URL: <https://www.w3.org/TR/rdf11-concepts/>

\[RFC2119\]  
[Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). S. Bradner. IETF. March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

\[RFC3987\]  
[Internationalized Resource Identifiers (IRIs)](https://tools.ietf.org/html/rfc3987). M. Duerst; M. Suignard. IETF. January 2005. Proposed Standard. URL: <https://tools.ietf.org/html/rfc3987>

\[RFC8174\]  
[Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words](https://tools.ietf.org/html/rfc8174). B. Leiba. IETF. May 2017. Best Current Practice. URL: <https://tools.ietf.org/html/rfc8174>

\[RFC8259\]  
[The JavaScript Object Notation (JSON) Data Interchange Format](https://tools.ietf.org/html/rfc8259). T. Bray, Ed.. IETF. December 2017. Internet Standard. URL: <https://tools.ietf.org/html/rfc8259>

\[WEBIDL\]  
[Web IDL](https://heycam.github.io/webidl/). Boris Zbarsky. W3C. 15 December 2016. W3C Editor's Draft. URL: <https://heycam.github.io/webidl/>

### I.2 Informative references <a href="#informative-references" class="self-link"></a>

\[JSON-LD10-FRAMING\]  
[JSON-LD Framing 1.0](https://json-ld.org/spec/ED/json-ld-framing/20120830/). Manu Sporny; Gregg Kellogg; David Longley; Marcus Langhaler. W3C. 30 August 2012. Unofficial Draft. URL: <https://json-ld.org/spec/ED/json-ld-framing/20120830/>

[↑](#title)
