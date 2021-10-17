<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

A JSON-based Serialization for Linked Data
------------------------------------------

W3C Recommendation 16 July 2020
-------------------------------

This version:  
<a href="https://www.w3.org/TR/2020/REC-json-ld11-20200716/" class="u-url">https://www.w3.org/TR/2020/REC-json-ld11-20200716/</a>

Latest published version:  
<https://www.w3.org/TR/json-ld11/>

Latest editor's draft:  
<https://w3c.github.io/json-ld-syntax/>

Test suite:  
<https://w3c.github.io/json-ld-api/tests/>

Implementation report:  
<https://w3c.github.io/json-ld-api/reports/>

Previous version:  
<https://www.w3.org/TR/2020/PR-json-ld11-20200507/>

Previous Recommendation:  
<https://www.w3.org/TR/2014/REC-json-ld-20140116/>

Editors:  
<a href="https://greggkellogg.net/" class="u-url url p-name fn">Gregg Kellogg</a> (v1.0 and v1.1)

<a href="http://champin.net/" class="u-url url p-name fn">Pierre-Antoine Champin</a> (<a href="https://liris.cnrs.fr/" class="p-org org h-org h-card">LIRIS - Université de Lyon</a>) (v1.1)

<a href="https://digitalbazaar.com/author/dlongley/" class="u-url url p-name fn">Dave Longley</a> (<a href="https://digitalbazaar.com/" class="p-org org h-org h-card">Digital Bazaar</a>) (v1.1)

 Former editors:   
<a href="http://manu.sporny.org/" class="u-url url p-name fn">Manu Sporny</a> (<a href="https://digitalbazaar.com/" class="p-org org h-org h-card">Digital Bazaar</a>) (v1.0)

<a href="https://www.markus-lanthaler.com/" class="u-url url p-name fn">Markus Lanthaler</a> (<a href="https://www.google.com/" class="p-org org h-org h-card">Google</a>) (v1.0)

 Authors:   
<a href="http://manu.sporny.org/" class="u-url url p-name fn">Manu Sporny</a> (<a href="https://digitalbazaar.com/" class="p-org org h-org h-card">Digital Bazaar</a>) (v1.0)

<a href="https://digitalbazaar.com/author/dlongley/" class="u-url url p-name fn">Dave Longley</a> (<a href="https://digitalbazaar.com/" class="p-org org h-org h-card">Digital Bazaar</a>) (v1.0 and v1.1)

<a href="https://greggkellogg.net/" class="u-url url p-name fn">Gregg Kellogg</a> (v1.0 and v1.1)

<a href="https://www.markus-lanthaler.com/" class="u-url url p-name fn">Markus Lanthaler</a> (<a href="https://www.google.com/" class="p-org org h-org h-card">Google</a>) (v1.0)

<a href="http://champin.net/" class="u-url url p-name fn">Pierre-Antoine Champin</a> (<a href="https://liris.cnrs.fr/" class="p-org org h-org h-card">LIRIS - Université de Lyon</a>) (v1.1)

<a href="http://neverspace.net/" class="u-url url p-name fn">Niklas Lindström</a> (v1.0)

Participate:  
[GitHub w3c/json-ld-syntax](https://github.com/w3c/json-ld-syntax/)

[File a bug](https://github.com/w3c/json-ld-syntax/issues/)

[Commit history](https://github.com/w3c/json-ld-syntax/commits/master)

[Pull requests](https://github.com/w3c/json-ld-syntax/pulls/)

Please check the [**errata**](https://w3c.github.io/json-ld-syntax/errata/) for any errors or issues reported since publication.

See also [**translations**](http://www.w3.org/2003/03/Translations/byTechnology?technology=json-ld11).

This document is also available in this non-normative format: [EPUB](json-ld11.epub)

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2010-2020 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [permissive document license](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document) rules apply.

------------------------------------------------------------------------

Abstract
--------

JSON is a useful data serialization and messaging format. This specification defines JSON-LD 1.1, a JSON-based format to serialize Linked Data. The syntax is designed to easily integrate into deployed systems that already use JSON, and provides a smooth upgrade path from JSON to JSON-LD. It is primarily intended to be a way to use Linked Data in Web-based programming environments, to build interoperable Web services, and to store Linked Data in JSON-based storage engines.

This specification describes a superset of the features defined in [JSON-LD 1.0](https://www.w3.org/TR/2014/REC-json-ld-20140116/) \[<a href="#bib-json-ld10" class="bibref" title="JSON-LD 1.0">JSON-LD10</a>\] and, except where noted, documents created using the 1.0 version of this specification remain compatible with JSON-LD 1.1.

Status of This Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This document has been developed by the [JSON-LD Working Group](https://www.w3.org/2018/json-ld-wg/) and was derived from the [JSON-LD Community Group's](https://www.w3.org/community/json-ld/) [Final Report](https://www.w3.org/2018/jsonld-cg-reports/json-ld/).

There is a [live JSON-LD playground](https://json-ld.org/playground/) that is capable of demonstrating the features described in this document.

This specification is intended to [supersede](https://www.w3.org/2019/Process-20190301/#rec-rescind) the [JSON-LD 1.0](https://www.w3.org/TR/2014/REC-json-ld-20140116/) \[<a href="#bib-json-ld10" class="bibref" title="JSON-LD 1.0">JSON-LD10</a>\] specification.

This document was published by the [JSON-LD Working Group](https://www.w3.org/2018/json-ld-wg/) as a Recommendation.

[GitHub Issues](https://github.com/w3c/json-ld-syntax/issues/) are preferred for discussion of this specification. Alternatively, you can send comments to our mailing list. Please send them to <public-json-ld-wg@w3.org> ([archives](https://lists.w3.org/Archives/Public/public-json-ld-wg/)).

Please see the Working Group's [implementation report](https://w3c.github.io/json-ld-api/reports/).

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/107714/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2019/Process-20190301/" id="w3c_process_revision">1 March 2019 W3C Process Document</a>.

### Set of Documents<a href="#set-of-documents" class="self-link"></a>

This document is one of three JSON-LD 1.1 Recommendations produced by the [JSON-LD Working Group](https://www.w3.org/2018/json-ld-wg/):

-   [JSON-LD 1.1]()
-   [JSON-LD 1.1 Processing Algorithms and API](https://www.w3.org/TR/json-ld11-api/)
-   [JSON-LD 1.1 Framing](https://www.w3.org/TR/json-ld11-framing/)

Table of Contents
-----------------

1.  <a href="#introduction" class="tocxref">1. Introduction</a>
    1.  <a href="#how-to-read-this-document" class="tocxref">1.1 How to Read this Document</a>
    2.  <a href="#contributing" class="tocxref">1.2 Contributing</a>
    3.  <a href="#typographical-conventions" class="tocxref">1.3 Typographical conventions</a>
    4.  <a href="#terminology" class="tocxref">1.4 Terminology</a>
    5.  <a href="#design-goals-and-rationale" class="tocxref">1.5 Design Goals and Rationale</a>
    6.  <a href="#data-model-overview" class="tocxref">1.6 Data Model Overview</a>
    7.  <a href="#syntax-tokens-and-keywords" class="tocxref">1.7 Syntax Tokens and Keywords</a>
2.  <a href="#conformance" class="tocxref">2. Conformance</a>
3.  <a href="#basic-concepts" class="tocxref">3. Basic Concepts</a>
    1.  <a href="#the-context" class="tocxref">3.1 The Context</a>
    2.  <a href="#iris" class="tocxref">3.2 IRIs</a>
    3.  <a href="#node-identifiers" class="tocxref">3.3 Node Identifiers</a>
    4.  <a href="#uses-of-json-objects" class="tocxref">3.4 Uses of JSON Objects</a>
    5.  <a href="#specifying-the-type" class="tocxref">3.5 Specifying the Type</a>
4.  <a href="#advanced-concepts" class="tocxref">4. Advanced Concepts</a>
    1.  <a href="#advanced-context-usage" class="tocxref">4.1 Advanced Context Usage</a>
        1.  <a href="#json-ld-1-1-processing-mode" class="tocxref">4.1.1 JSON-LD 1.1 Processing Mode</a>
        2.  <a href="#default-vocabulary" class="tocxref">4.1.2 Default Vocabulary</a>
        3.  <a href="#base-iri" class="tocxref">4.1.3 Base IRI</a>
        4.  <a href="#document-relative-vocabulary-mapping" class="tocxref">4.1.4 Using the Document Base for the Default Vocabulary</a>
        5.  <a href="#compact-iris" class="tocxref">4.1.5 Compact IRIs</a>
        6.  <a href="#aliasing-keywords" class="tocxref">4.1.6 Aliasing Keywords</a>
        7.  <a href="#iri-expansion-within-a-context" class="tocxref">4.1.7 IRI Expansion within a Context</a>
        8.  <a href="#scoped-contexts" class="tocxref">4.1.8 Scoped Contexts</a>
        9.  <a href="#context-propagation" class="tocxref">4.1.9 Context Propagation</a>
        10. <a href="#imported-contexts" class="tocxref">4.1.10 Imported Contexts</a>
        11. <a href="#protected-term-definitions" class="tocxref">4.1.11 Protected Term Definitions</a>
    2.  <a href="#describing-values" class="tocxref">4.2 Describing Values</a>
        1.  <a href="#typed-values" class="tocxref">4.2.1 Typed Values</a>
        2.  <a href="#json-literals" class="tocxref">4.2.2 JSON Literals</a>
        3.  <a href="#type-coercion" class="tocxref">4.2.3 Type Coercion</a>
        4.  <a href="#string-internationalization" class="tocxref">4.2.4 String Internationalization</a>
            1.  <a href="#base-direction" class="tocxref">4.2.4.1 Base Direction</a>
    3.  <a href="#sets-and-lists" class="tocxref">4.3 Value Ordering</a>
        1.  <a href="#lists" class="tocxref">4.3.1 Lists</a>
        2.  <a href="#sets" class="tocxref">4.3.2 Sets</a>
        3.  <a href="#using-set-with-type" class="tocxref">4.3.3 Using <code>@set</code> with <code>@type</code></a>
    4.  <a href="#nested-properties" class="tocxref">4.4 Nested Properties</a>
    5.  <a href="#embedding" class="tocxref">4.5 Embedding</a>
        1.  <a href="#identifying-blank-nodes" class="tocxref">4.5.1 Identifying Blank Nodes</a>
    6.  <a href="#indexed-values" class="tocxref">4.6 Indexed Values</a>
        1.  <a href="#data-indexing" class="tocxref">4.6.1 Data Indexing</a>
            1.  <a href="#property-based-data-indexing" class="tocxref">4.6.1.1 Property-based data indexing</a>
        2.  <a href="#language-indexing" class="tocxref">4.6.2 Language Indexing</a>
        3.  <a href="#node-identifier-indexing" class="tocxref">4.6.3 Node Identifier Indexing</a>
        4.  <a href="#node-type-indexing" class="tocxref">4.6.4 Node Type Indexing</a>
    7.  <a href="#included-nodes" class="tocxref">4.7 Included Nodes</a>
    8.  <a href="#reverse-properties" class="tocxref">4.8 Reverse Properties</a>
    9.  <a href="#named-graphs" class="tocxref">4.9 Named Graphs</a>
        1.  <a href="#graph-containers" class="tocxref">4.9.1 Graph Containers</a>
        2.  <a href="#named-graph-data-indexing" class="tocxref">4.9.2 Named Graph Data Indexing</a>
        3.  <a href="#named-graph-indexing" class="tocxref">4.9.3 Named Graph Indexing</a>
    10. <a href="#loading-documents" class="tocxref">4.10 Loading Documents</a>
5.  <a href="#forms-of-json-ld" class="tocxref">5. Forms of JSON-LD</a>
    1.  <a href="#expanded-document-form" class="tocxref">5.1 Expanded Document Form</a>
    2.  <a href="#compacted-document-form" class="tocxref">5.2 Compacted Document Form</a>
        1.  <a href="#shortening-iris" class="tocxref">5.2.1 Shortening IRIs</a>
        2.  <a href="#representing-values-as-strings" class="tocxref">5.2.2 Representing Values as Strings</a>
        3.  <a href="#representing-lists-as-arrays" class="tocxref">5.2.3 Representing Lists as Arrays</a>
        4.  <a href="#reversing-node-relationships" class="tocxref">5.2.4 Reversing Node Relationships</a>
        5.  <a href="#indexing-values" class="tocxref">5.2.5 Indexing Values</a>
        6.  <a href="#normalizing-values-as-objects" class="tocxref">5.2.6 Normalizing Values as Objects</a>
        7.  <a href="#representing-singular-values-as-arrays" class="tocxref">5.2.7 Representing Singular Values as Arrays</a>
        8.  <a href="#term-selection" class="tocxref">5.2.8 Term Selection</a>
    3.  <a href="#flattened-document-form" class="tocxref">5.3 Flattened Document Form</a>
    4.  <a href="#framed-document-form" class="tocxref">5.4 Framed Document Form</a>
6.  <a href="#modifying-behavior-with-link-relationships" class="tocxref">6. Modifying Behavior with Link Relationships</a>
    1.  <a href="#interpreting-json-as-json-ld" class="tocxref">6.1 Interpreting JSON as JSON-LD</a>
    2.  <a href="#alternate-document-location" class="tocxref">6.2 Alternate Document Location</a>
7.  <a href="#embedding-json-ld-in-html-documents" class="tocxref">7. Embedding JSON-LD in HTML Documents</a>
    1.  <a href="#inheriting-base-iri-from-html-s-base-element" class="tocxref">7.1 Inheriting base IRI from HTML's <code>base</code> element</a>
    2.  <a href="#restrictions-for-contents-of-json-ld-script-elements" class="tocxref">7.2 Restrictions for contents of JSON-LD <code>script</code> elements</a>
    3.  <a href="#locating-a-specific-json-ld-script-element" class="tocxref">7.3 Locating a Specific JSON-LD Script Element</a>
8.  <a href="#data-model" class="tocxref">8. Data Model</a>
9.  <a href="#json-ld-grammar" class="tocxref">9. JSON-LD Grammar</a>
    1.  <a href="#terms" class="tocxref">9.1 Terms</a>
    2.  <a href="#node-objects" class="tocxref">9.2 Node Objects</a>
    3.  <a href="#frame-objects" class="tocxref">9.3 Frame Objects</a>
    4.  <a href="#graph-objects" class="tocxref">9.4 Graph Objects</a>
    5.  <a href="#value-objects" class="tocxref">9.5 Value Objects</a>
    6.  <a href="#value-patterns" class="tocxref">9.6 Value Patterns</a>
    7.  <a href="#lists-and-sets" class="tocxref">9.7 Lists and Sets</a>
    8.  <a href="#language-maps" class="tocxref">9.8 Language Maps</a>
    9.  <a href="#index-maps" class="tocxref">9.9 Index Maps</a>
    10. <a href="#property-based-index-maps" class="tocxref">9.10 Property-based Index Maps</a>
    11. <a href="#id-maps" class="tocxref">9.11 Id Maps</a>
    12. <a href="#type-maps" class="tocxref">9.12 Type Maps</a>
    13. <a href="#included-blocks" class="tocxref">9.13 Included Blocks</a>
    14. <a href="#property-nesting" class="tocxref">9.14 Property Nesting</a>
    15. <a href="#context-definitions" class="tocxref">9.15 Context Definitions</a>
        1.  <a href="#expanded-term-definition" class="tocxref">9.15.1 Expanded term definition</a>
    16. <a href="#keywords" class="tocxref">9.16 Keywords</a>
10. <a href="#relationship-to-rdf" class="tocxref">10. Relationship to RDF</a>
    1.  <a href="#serializing-deserializing-rdf" class="tocxref">10.1 Serializing/Deserializing RDF</a>
    2.  <a href="#the-rdf-json-datatype" class="tocxref">10.2 The <code>rdf:JSON</code> Datatype</a>
    3.  <a href="#the-i18n-namespace" class="tocxref">10.3 The <code>i18n</code> Namespace</a>
    4.  <a href="#the-rdf-compoundliteral-class-and-the-rdf-language-and-rdf-direction-properties" class="tocxref">10.4 The <code>rdf:CompoundLiteral</code> class and the <code>rdf:language</code> and <code>rdf:direction</code> properties</a>
11. <a href="#security" class="tocxref">11. Security Considerations</a>
12. <a href="#privacy" class="tocxref">12. Privacy Considerations</a>
13. <a href="#internationalization" class="tocxref">13. Internationalization Considerations</a>
14. <a href="#image-descriptions" class="tocxref">A. Image Descriptions</a>
    1.  <a href="#fig-linked-data-graph-descr" class="tocxref">A.1 Linked Data Dataset</a>
15. <a href="#relationship-to-other-linked-data-formats" class="tocxref">B. Relationship to Other Linked Data Formats</a>
    1.  <a href="#turtle" class="tocxref">B.1 Turtle</a>
        1.  <a href="#prefix-definitions" class="tocxref">B.1.1 Prefix definitions</a>
        2.  <a href="#embedding-0" class="tocxref">B.1.2 Embedding</a>
        3.  <a href="#conversion-of-native-data-types" class="tocxref">B.1.3 Conversion of native data types</a>
        4.  <a href="#lists-0" class="tocxref">B.1.4 Lists</a>
    2.  <a href="#rdfa" class="tocxref">B.2 RDFa</a>
    3.  <a href="#microdata" class="tocxref">B.3 Microdata</a>
16. <a href="#iana-considerations" class="tocxref">C. IANA Considerations</a>
    1.  <a href="#iana-examples" class="tocxref">C.1 Examples</a>
17. <a href="#open-issues" class="tocxref">D. Open Issues</a>
18. <a href="#changes-from-10" class="tocxref">E. Changes since 1.0 Recommendation of 16 January 2014</a>
19. <a href="#changes-from-cg" class="tocxref">F. Changes since JSON-LD Community Group Final Report</a>
20. <a href="#changes-from-cr" class="tocxref">G. Changes since Candidate Release of 12 December 2019</a>
21. <a href="#changes-from-pr" class="tocxref">H. Changes since Proposed Recommendation Release of 7 May 2020</a>
22. <a href="#ack" class="tocxref">I. Acknowledgements</a>
23. <a href="#references" class="tocxref">J. References</a>
    1.  <a href="#normative-references" class="tocxref">J.1 Normative references</a>
    2.  <a href="#informative-references" class="tocxref">J.2 Informative references</a>

1. Introduction<a href="#introduction" class="self-link"></a>
-------------------------------------------------------------

*This section is non-normative.*

Linked Data \[<a href="#bib-linked-data" class="bibref" title="Linked Data Design Issues">LINKED-DATA</a>\] is a way to create a network of standards-based machine interpretable data across different documents and Web sites. It allows an application to start at one piece of Linked Data, and follow embedded links to other pieces of Linked Data that are hosted on different sites across the Web.

JSON-LD is a lightweight syntax to serialize Linked Data in JSON \[<a href="#bib-rfc8259" class="bibref" title="The JavaScript Object Notation (JSON) Data Interchange Format">RFC8259</a>\]. Its design allows existing JSON to be interpreted as Linked Data with minimal changes. JSON-LD is primarily intended to be a way to use Linked Data in Web-based programming environments, to build interoperable Web services, and to store Linked Data in JSON-based storage engines. Since JSON-LD is 100% compatible with JSON, the large number of JSON parsers and libraries available today can be reused. In addition to all the features JSON provides, JSON-LD introduces:

-   a universal identifier mechanism for [JSON objects](https://tools.ietf.org/html/rfc8259#section-4) via the use of [IRIs](https://tools.ietf.org/html/rfc3987#section-2),
-   a way to disambiguate keys shared among different JSON documents by mapping them to [IRIs](https://tools.ietf.org/html/rfc3987#section-2) via a <a href="#dfn-context" class="internalDFN">context</a>,
-   a mechanism in which a value in a [JSON object](https://tools.ietf.org/html/rfc8259#section-4) may refer to a [resource](https://www.w3.org/TR/rdf11-concepts/#dfn-resource) on a different site on the Web,
-   the ability to annotate [strings](https://infra.spec.whatwg.org/#javascript-string) with their language,
-   a way to associate datatypes with values such as dates and times,
-   and a facility to express one or more directed graphs, such as a social network, in a single document.

JSON-LD is designed to be usable directly as JSON, with no knowledge of RDF \[<a href="#bib-rdf11-concepts" class="bibref" title="RDF 1.1 Concepts and Abstract Syntax">RDF11-CONCEPTS</a>\]. It is also designed to be usable as RDF in conjunction with other Linked Data technologies like SPARQL \[<a href="#bib-sparql11-overview" class="bibref" title="SPARQL 1.1 Overview">SPARQL11-OVERVIEW</a>\]. Developers who require any of the facilities listed above or need to serialize an [RDF graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph) or [Dataset](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-dataset) in a JSON-based syntax will find JSON-LD of interest. People intending to use JSON-LD with RDF tools will find it can be used as another RDF syntax, as with \[<a href="#bib-turtle" class="bibref" title="RDF 1.1 Turtle">Turtle</a>\] and \[<a href="#bib-trig" class="bibref" title="RDF 1.1 TriG">TriG</a>\]. Complete details of how JSON-LD relates to RDF are in section <a href="#relationship-to-rdf" class="sec-ref">§ 10. Relationship to RDF</a>.

The syntax is designed to not disturb already deployed systems running on JSON, but provide a smooth upgrade path from JSON to JSON-LD. Since the shape of such data varies wildly, JSON-LD features mechanisms to reshape documents into a deterministic structure which simplifies their processing.

### 1.1 How to Read this Document<a href="#how-to-read-this-document" class="self-link"></a>

*This section is non-normative.*

This document is a detailed specification for a serialization of Linked Data in JSON. The document is primarily intended for the following audiences:

-   Software developers who want to encode Linked Data in a variety of programming languages that can use JSON
-   Software developers who want to convert existing JSON to JSON-LD
-   Software developers who want to understand the design decisions and language syntax for JSON-LD
-   Software developers who want to implement processors and APIs for JSON-LD
-   Software developers who want to generate or consume Linked Data, an [RDF graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph), or an [RDF Dataset](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-dataset) in a JSON syntax

A companion document, the JSON-LD 1.1 Processing Algorithms and API specification \[<a href="#bib-json-ld11-api" class="bibref" title="JSON-LD 1.1 Processing Algorithms and API">JSON-LD11-API</a>\], specifies how to work with JSON-LD at a higher level by providing a standard library interface for common JSON-LD operations.

To understand the basics in this specification you must first be familiar with [JSON](https://tools.ietf.org/html/rfc8259), which is detailed in \[<a href="#bib-rfc8259" class="bibref" title="The JavaScript Object Notation (JSON) Data Interchange Format">RFC8259</a>\].

This document almost exclusively uses the term IRI ([Internationalized Resource Indicator](https://www.w3.org/TR/ld-glossary/#internationalized-resource-identifier)) when discussing hyperlinks. Many Web developers are more familiar with the URL ([Uniform Resource Locator](https://www.w3.org/TR/ld-glossary/#uniform-resource-locator)) terminology. The document also uses, albeit rarely, the URI ([Uniform Resource Indicator](https://www.w3.org/TR/ld-glossary/#uniform-resource-identifier)) terminology. While these terms are often used interchangeably among technical communities, they do have important distinctions from one another and the specification goes to great lengths to try and use the proper terminology at all times.

This document can highlight changes since the [JSON-LD 1.0](https://www.w3.org/TR/2014/REC-json-ld-20140116/) version. Select to changes.

### 1.2 Contributing<a href="#contributing" class="self-link"></a>

*This section is non-normative.*

There are a number of ways that one may participate in the development of this specification:

-   Technical discussion typically occurs on the working group mailing list: [public-json-ld-wg@w3.org](https://lists.w3.org/Archives/Public/public-json-ld-wg/)
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

*This section is non-normative.*

This document uses the following terms as defined in external specifications and defines terms specific to JSON-LD.

#### Terms imported from Other Specifications<a href="#terms-imported-from-other-specifications" class="self-link"></a>

Terms imported from [ECMAScript Language Specification](https://tc39.es/ecma262/) \[<a href="#bib-ecmascript" class="bibref" title="ECMAScript Language Specification">ECMASCRIPT</a>\], [The JavaScript Object Notation (JSON) Data Interchange Format](https://tools.ietf.org/html/rfc8259) \[<a href="#bib-rfc8259" class="bibref" title="The JavaScript Object Notation (JSON) Data Interchange Format">RFC8259</a>\], [Infra Standard](https://infra.spec.whatwg.org/) \[<a href="#bib-infra" class="bibref" title="Infra Standard">INFRA</a>\], and [Web IDL](https://heycam.github.io/webidl/) \[<a href="#bib-webidl" class="bibref" title="Web IDL">WEBIDL</a>\]

[array](https://infra.spec.whatwg.org/#list)  
In the JSON serialization, an [array](https://infra.spec.whatwg.org/#list) structure is represented as square brackets surrounding zero or more values. Values are separated by commas. In the [internal representation](https://www.w3.org/TR/json-ld11-api/#dfn-internal-representation), a [list](https://www.w3.org/TR/rdf-schema/#ch_collectionvocab) (also called an [array](https://infra.spec.whatwg.org/#list)) is an *ordered* collection of zero or more values. While JSON-LD uses the same array representation as JSON, the collection is *unordered* by default. While order is preserved in regular JSON arrays, it is not in regular JSON-LD arrays unless specifically defined (see the [Sets and Lists](#sets-and-lists) section of JSON-LD 1.1.

[boolean](https://infra.spec.whatwg.org/#boolean)  
The values `true` and `false` that are used to express one of two possible states.

[JSON object](https://tools.ietf.org/html/rfc8259#section-4)  
In the JSON serialization, an [object](https://www.w3.org/TR/rdf11-concepts/#dfn-object) structure is represented as a pair of curly brackets surrounding zero or more name/value pairs (or members). A name is a [string](https://infra.spec.whatwg.org/#javascript-string). A single colon comes after each name, separating the name from the value. A single comma separates a value from a following name. In JSON-LD the names in an object must be unique.

In the [internal representation](https://www.w3.org/TR/json-ld11-api/#dfn-internal-representation) a [JSON object](https://tools.ietf.org/html/rfc8259#section-4) is described as a [map](https://infra.spec.whatwg.org/#ordered-map) (see \[<a href="#bib-infra" class="bibref" title="Infra Standard">INFRA</a>\]), composed of [entries](https://infra.spec.whatwg.org/#map-entry) with key/value pairs.

In the [Application Programming Interface](https://www.w3.org/TR/json-ld11-api/#the-application-programming-interface), a [map](https://infra.spec.whatwg.org/#ordered-map) is described using a \[<a href="#bib-webidl" class="bibref" title="Web IDL">WEBIDL</a>\] [record](https://heycam.github.io/webidl/#idl-record).

[null](https://infra.spec.whatwg.org/#nulls)  
The use of the [null](https://infra.spec.whatwg.org/#nulls) value within JSON-LD is used to ignore or reset values. A [map entry](https://infra.spec.whatwg.org/#map-entry) in the `@context` where the value, or the `@id` of the value, is `null`, explicitly decouples a term's association with an IRI. A [map entry](https://infra.spec.whatwg.org/#map-entry) in the body of a <a href="#dfn-json-ld-document" class="internalDFN">JSON-LD document</a> whose value is `null` has the same meaning as if the [map entry](https://infra.spec.whatwg.org/#map-entry) was not defined. If `@value`, `@list`, or `@set` is set to `null` in expanded form, then the entire [JSON object](https://tools.ietf.org/html/rfc8259#section-4) is ignored.

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
A relative IRI reference is an [IRI reference](https://tools.ietf.org/html/rfc3987#section-1.3) that is relative to some other [IRI](https://tools.ietf.org/html/rfc3987#section-2), typically the [base IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-base-iri) of the document. Note that [properties](https://www.w3.org/TR/rdf11-concepts/#dfn-property), values of `@type`, and values of <a href="#dfn-term" class="internalDFN">terms</a> defined to be *vocabulary relative* are resolved relative to the <a href="#dfn-vocabulary-mapping" class="internalDFN">vocabulary mapping</a>, not the [base IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-base-iri).

Terms imported from [RDF 1.1 Concepts and Abstract Syntax](https://www.w3.org/TR/rdf11-concepts/) \[<a href="#bib-rdf11-concepts" class="bibref" title="RDF 1.1 Concepts and Abstract Syntax">RDF11-CONCEPTS</a>\], [RDF Schema 1.1](https://www.w3.org/TR/rdf-schema/) \[<a href="#bib-rdf-schema" class="bibref" title="RDF Schema 1.1">RDF-SCHEMA</a>\], and [Linked Data Design Issues](https://www.w3.org/DesignIssues/LinkedData.html) \[<a href="#bib-linked-data" class="bibref" title="Linked Data Design Issues">LINKED-DATA</a>\]

[base IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-base-iri)  
The [base IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-base-iri) is an [IRI](https://tools.ietf.org/html/rfc3987#section-2) established in the <a href="#dfn-context" class="internalDFN">context</a>, or is based on the <a href="#dfn-json-ld-document" class="internalDFN">JSON-LD document</a> location. The [base IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-base-iri) is used to turn [relative IRI references](https://tools.ietf.org/html/rfc3987#section-6.5) into [IRIs](https://tools.ietf.org/html/rfc3987#section-2).

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

active context  
A <a href="#dfn-context" class="internalDFN">context</a> that is used to resolve <a href="#dfn-term" class="internalDFN">terms</a> while the processing algorithm is running.

base direction  
The <a href="#dfn-base-direction" class="internalDFN">base direction</a> is the direction used when a string does not have a direction associated with it directly. It can be set in the <a href="#dfn-context" class="internalDFN">context</a> using the `@direction` key whose value must be one of the strings `"ltr"`, `"rtl"`, or `null`. See the [Context Definitions](#context-definitions) section of JSON-LD 1.1 for a normative description.

compact IRI  
A compact IRI has the form of <a href="#dfn-prefix" class="internalDFN">prefix</a>:*suffix* and is used as a way of expressing an [IRI](https://tools.ietf.org/html/rfc3987#section-2) without needing to define separate <a href="#dfn-term" class="internalDFN">term</a> definitions for each IRI contained within a common vocabulary identified by <a href="#dfn-prefix" class="internalDFN">prefix</a>.

context  
A set of rules for interpreting a <a href="#dfn-json-ld-document" class="internalDFN">JSON-LD document</a> as described in the [The Context](#the-context) section of JSON-LD 1.1, and normatively specified in the [Context Definitions](#context-definitions) section of JSON-LD 1.1.

default language  
The <a href="#dfn-default-language" class="internalDFN">default language</a> is the language used when a string does not have a language associated with it directly. It can be set in the <a href="#dfn-context" class="internalDFN">context</a> using the `@language` key whose value must be a [string](https://infra.spec.whatwg.org/#javascript-string) representing a \[<a href="#bib-bcp47" class="bibref" title="Tags for Identifying Languages">BCP47</a>\] language code or `null`. See the [Context Definitions](#context-definitions) section of JSON-LD 1.1 for a normative description.

default object  
A <a href="#dfn-default-object" class="internalDFN">default object</a> is a [map](https://infra.spec.whatwg.org/#ordered-map) that has a `@default` key.

embedded context  
An embedded <a href="#dfn-context" class="internalDFN">context</a> is a context which appears as the `@context` [entry](https://infra.spec.whatwg.org/#map-entry) of one of the following: a <a href="#dfn-node-object" class="internalDFN">node object</a>, a <a href="#dfn-value-object" class="internalDFN">value object</a>, a <a href="#dfn-graph-object" class="internalDFN">graph object</a>, a <a href="#dfn-list-object" class="internalDFN">list object</a>, a <a href="#dfn-set-object" class="internalDFN">set object</a>, the value of a <a href="#dfn-nested-property" class="internalDFN">nested properties</a>, or the value of an <a href="#dfn-expanded-term-definition" class="internalDFN">expanded term definition</a>. Its value may be a [map](https://infra.spec.whatwg.org/#ordered-map) for a [context definition](#dfn-context-definition), as an [IRI](https://tools.ietf.org/html/rfc3987#section-2), or as an [array](https://infra.spec.whatwg.org/#list) combining either of the above.

expanded term definition  
An expanded term definition is a <a href="#dfn-term-definition" class="internalDFN">term definition</a> where the value is a [map](https://infra.spec.whatwg.org/#ordered-map) containing one or more <a href="#dfn-keyword" class="internalDFN">keyword</a> keys to define the associated [IRI](https://tools.ietf.org/html/rfc3987#section-2), if this is a reverse property, the type associated with string values, and a container mapping. See the [Expanded Term Definition](#expanded-term-definition) section of JSON-LD 1.1 for a normative description.

[frame](https://www.w3.org/TR/json-ld11-framing/#dfn-frame)  
A <a href="#dfn-json-ld-document" class="internalDFN">JSON-LD document</a>, which describes the form for transforming another <a href="#dfn-json-ld-document" class="internalDFN">JSON-LD document</a> using matching and embedding rules. A frame document allows additional keywords and certain [map entries](https://infra.spec.whatwg.org/#map-entry) to describe the matching and transforming process.

[frame object](https://www.w3.org/TR/json-ld11-framing/#dfn-frame-object)  
A frame object is a [map](https://infra.spec.whatwg.org/#ordered-map) element within a [frame](https://www.w3.org/TR/json-ld11-framing/#dfn-frame) which represents a specific portion of the [frame](https://www.w3.org/TR/json-ld11-framing/#dfn-frame) matching either a <a href="#dfn-node-object" class="internalDFN">node object</a> or a <a href="#dfn-value-object" class="internalDFN">value object</a> in the input. See the [Frame Objects](#frame-objects) section of JSON-LD 1.1 for a normative description.

graph object  
A <a href="#dfn-graph-object" class="internalDFN">graph object</a> represents a [named graph](https://www.w3.org/TR/rdf11-concepts/#dfn-named-graph) as the value of a [map entry](https://infra.spec.whatwg.org/#map-entry) within a <a href="#dfn-node-object" class="internalDFN">node object</a>. When expanded, a graph object must have an `@graph` [entry](https://infra.spec.whatwg.org/#map-entry), and may also have `@id`, and `@index` [entries](https://infra.spec.whatwg.org/#map-entry). A simple graph object is a <a href="#dfn-graph-object" class="internalDFN">graph object</a> which does not have an `@id` [entry](https://infra.spec.whatwg.org/#map-entry). Note that <a href="#dfn-node-object" class="internalDFN">node objects</a> may have a `@graph` [entry](https://infra.spec.whatwg.org/#map-entry), but are not considered <a href="#dfn-graph-object" class="internalDFN">graph objects</a> if they include any other [entries](https://infra.spec.whatwg.org/#map-entry). A top-level object consisting of `@graph` is also not a <a href="#dfn-graph-object" class="internalDFN">graph object</a>. Note that a <a href="#dfn-node-object" class="internalDFN">node object</a> may also represent a [named graph](https://www.w3.org/TR/rdf11-concepts/#dfn-named-graph) it it includes other properties. See the [Graph Objects](#graph-objects) section of JSON-LD 1.1 for a normative description.

id map  
An <a href="#dfn-id-map" class="internalDFN">id map</a> is a [map](https://infra.spec.whatwg.org/#ordered-map) value of a <a href="#dfn-term" class="internalDFN">term</a> defined with `@container` set to `@id`. The values of the <a href="#dfn-id-map" class="internalDFN">id map</a> must be <a href="#dfn-node-object" class="internalDFN">node objects</a>, and its keys are interpreted as [IRIs](https://tools.ietf.org/html/rfc3987#section-2) representing the `@id` of the associated <a href="#dfn-node-object" class="internalDFN">node object</a>. If a value in the <a href="#dfn-id-map" class="internalDFN">id map</a> contains a key expanding to `@id`, its value must be equivalent to the referencing key in the <a href="#dfn-id-map" class="internalDFN">id map</a>. See the [Id Maps](#id-maps) section of JSON-LD 1.1 for a normative description.

implicitly named graph  
A [named graph](https://www.w3.org/TR/rdf11-concepts/#dfn-named-graph) created from the value of a [map entry](https://infra.spec.whatwg.org/#map-entry) having an <a href="#dfn-expanded-term-definition" class="internalDFN">expanded term definition</a> where `@container` is set to `@graph`.

included block  
An <a href="#dfn-included-block" class="internalDFN">included block</a> is an [entry](https://infra.spec.whatwg.org/#map-entry) in a <a href="#dfn-node-object" class="internalDFN">node object</a> where the key is either `@included` or an alias of `@included` and the value is one or more <a href="#dfn-node-object" class="internalDFN">node objects</a>. See the [Included Blocks](#included-blocks) section of JSON-LD 1.1 for a normative description.

index map  
An <a href="#dfn-index-map" class="internalDFN">index map</a> is a [map](https://infra.spec.whatwg.org/#ordered-map) value of a <a href="#dfn-term" class="internalDFN">term</a> defined with `@container` set to `@index`, whose values must be any of the following types: [string](https://infra.spec.whatwg.org/#javascript-string), [number](https://tc39.es/ecma262/#sec-terms-and-definitions-number-value), `true`, `false`, [null](https://infra.spec.whatwg.org/#nulls), <a href="#dfn-node-object" class="internalDFN">node object</a>, <a href="#dfn-value-object" class="internalDFN">value object</a>, <a href="#dfn-list-object" class="internalDFN">list object</a>, <a href="#dfn-set-object" class="internalDFN">set object</a>, or an [array](https://infra.spec.whatwg.org/#list) of zero or more of the above possibilities. See the [Index Maps](#index-maps) section in JSON-LD 1.1 for a formal description.

JSON literal  
A <a href="#dfn-json-literal" class="internalDFN">JSON literal</a> is a [literal](https://www.w3.org/TR/rdf11-concepts/#dfn-literal) where the associated [datatype IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-datatype-iri) is `rdf:JSON`. In the <a href="#dfn-value-object" class="internalDFN">value object</a> representation, the value of `@type` is `@json`. JSON literals represent values which are valid JSON \[<a href="#bib-rfc8259" class="bibref" title="The JavaScript Object Notation (JSON) Data Interchange Format">RFC8259</a>\]. See the [The `rdf:JSON` Datatype](#the-rdf-json-datatype) section in JSON-LD 1.1 for a normative description.

JSON-LD document  
A <a href="#dfn-json-ld-document" class="internalDFN">JSON-LD document</a> is a serialization of an [RDF dataset](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-dataset). See the [JSON-LD Grammar](#json-ld-grammar) section in JSON-LD 1.1 for a formal description.

[JSON-LD internal representation](https://www.w3.org/TR/json-ld11-api/#dfn-internal-representation)  
The JSON-LD internal representation is the result of transforming a JSON syntactic structure into the core data structures suitable for direct processing: [arrays](https://infra.spec.whatwg.org/#list), [maps](https://infra.spec.whatwg.org/#ordered-map), [strings](https://infra.spec.whatwg.org/#javascript-string), [numbers](https://tc39.es/ecma262/#sec-terms-and-definitions-number-value), [booleans](https://infra.spec.whatwg.org/#boolean), and [null](https://infra.spec.whatwg.org/#nulls).

[JSON-LD Processor](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-processor)  
A [JSON-LD Processor](https://www.w3.org/TR/json-ld11-api/#dfn-json-ld-processor) is a system which can perform the algorithms defined in JSON-LD 1.1 Processing Algorithms and API. See the [Conformance](https://www.w3.org/TR/json-ld11-api/#conformance) section in JSON-LD 1.1 API for a formal description.

JSON-LD value  
A <a href="#dfn-json-ld-value" class="internalDFN">JSON-LD value</a> is a [string](https://infra.spec.whatwg.org/#javascript-string), a [number](https://tc39.es/ecma262/#sec-terms-and-definitions-number-value), `true` or `false`, a <a href="#dfn-typed-value" class="internalDFN">typed value</a>, or a [language-tagged string](https://www.w3.org/TR/rdf11-concepts/#dfn-language-tagged-string). It represents an [RDF literal](https://www.w3.org/TR/rdf11-concepts/#dfn-literal).

keyword  
A [string](https://infra.spec.whatwg.org/#javascript-string) that is specific to JSON-LD, described in the [Syntax Tokens and Keywords](#syntax-tokens-and-keywords) section of JSON-LD 1.1, and normatively specified in the [Keywords](#keywords) section of JSON-LD 1.1,

language map  
An <a href="#dfn-language-map" class="internalDFN">language map</a> is a [map](https://infra.spec.whatwg.org/#ordered-map) value of a <a href="#dfn-term" class="internalDFN">term</a> defined with `@container` set to `@language`, whose keys must be [strings](https://infra.spec.whatwg.org/#javascript-string) representing \[<a href="#bib-bcp47" class="bibref" title="Tags for Identifying Languages">BCP47</a>\] language codes and the values must be any of the following types: [null](https://infra.spec.whatwg.org/#nulls), [string](https://infra.spec.whatwg.org/#javascript-string), or an [array](https://infra.spec.whatwg.org/#list) of zero or more of the above possibilities. See the [Language Maps](#language-maps) section of JSON-LD 1.1 for a normative description.

list object  
A <a href="#dfn-list-object" class="internalDFN">list object</a> is a [map](https://infra.spec.whatwg.org/#ordered-map) that has a `@list` key. It may also have an `@index` key, but no other [entries](https://infra.spec.whatwg.org/#map-entry). See the [Lists and Sets](#lists-and-sets) section of JSON-LD 1.1 for a normative description.

local context  
A <a href="#dfn-context" class="internalDFN">context</a> that is specified with a [map](https://infra.spec.whatwg.org/#ordered-map), specified via the `@context` <a href="#dfn-keyword" class="internalDFN">keyword</a>.

nested property  
A <a href="#dfn-nested-property" class="internalDFN">nested property</a> is a key in a <a href="#dfn-node-object" class="internalDFN">node object</a> whose value is a [map](https://infra.spec.whatwg.org/#ordered-map) containing [entries](https://infra.spec.whatwg.org/#map-entry) which are treated as if they were values of the <a href="#dfn-node-object" class="internalDFN">node object</a>. The <a href="#dfn-nested-property" class="internalDFN">nested property</a> itself is semantically meaningless and used only to create a sub-structure within a <a href="#dfn-node-object" class="internalDFN">node object</a>. See the [Property Nesting](#property-nesting) section of JSON-LD 1.1 for a normative description.

node object  
A <a href="#dfn-node-object" class="internalDFN">node object</a> represents zero or more [properties](https://www.w3.org/TR/rdf11-concepts/#dfn-property) of a [node](https://www.w3.org/TR/rdf11-concepts/#dfn-node) in the [graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph) serialized by the <a href="#dfn-json-ld-document" class="internalDFN">JSON-LD document</a>. A [map](https://infra.spec.whatwg.org/#ordered-map) is a <a href="#dfn-node-object" class="internalDFN">node object</a> if it exists outside of the JSON-LD <a href="#dfn-context" class="internalDFN">context</a> and:

-   it does not contain the `@value`, `@list`, or `@set` keywords, or
-   it is not the top-most [map](https://infra.spec.whatwg.org/#ordered-map) in the JSON-LD document consisting of no other [entries](https://infra.spec.whatwg.org/#map-entry) than `@graph` and `@context`.

The [entries](https://infra.spec.whatwg.org/#map-entry) of a <a href="#dfn-node-object" class="internalDFN">node object</a> whose keys are not keywords are also called [properties](https://www.w3.org/TR/rdf11-concepts/#dfn-property) of the <a href="#dfn-node-object" class="internalDFN">node object</a>. See the [Node Objects](#node-objects) section of JSON-LD 1.1 for a normative description.

node reference  
A <a href="#dfn-node-object" class="internalDFN">node object</a> used to reference a node having only the `@id` key.

prefix  
A <a href="#dfn-prefix" class="internalDFN">prefix</a> is the first component of a <a href="#dfn-compact-iri" class="internalDFN">compact IRI</a> which comes from a <a href="#dfn-term" class="internalDFN">term</a> that maps to a string that, when prepended to the suffix of the <a href="#dfn-compact-iri" class="internalDFN">compact IRI</a>, results in an [IRI](https://tools.ietf.org/html/rfc3987#section-2).

processing mode  
The <a href="#dfn-processing-mode" class="internalDFN">processing mode</a> defines how a <a href="#dfn-json-ld-document" class="internalDFN">JSON-LD document</a> is processed. By default, all documents are assumed to be conformant with this specification. By defining a different version using the `@version` [entry](https://infra.spec.whatwg.org/#map-entry) in a <a href="#dfn-context" class="internalDFN">context</a>, publishers can ensure that processors conformant with [JSON-LD 1.0](https://www.w3.org/TR/2014/REC-json-ld-20140116/) \[<a href="#bib-json-ld10" class="bibref" title="JSON-LD 1.0">JSON-LD10</a>\] will not accidentally process JSON-LD 1.1 documents, possibly creating a different output. The API provides an option for setting the <a href="#dfn-processing-mode" class="internalDFN">processing mode</a> to `json-ld-1.0`, which will prevent JSON-LD 1.1 features from being activated, or error if `@version` [entry](https://infra.spec.whatwg.org/#map-entry) in a <a href="#dfn-context" class="internalDFN">context</a> is explicitly set to `1.1`. This specification extends [JSON-LD 1.0](https://www.w3.org/TR/2014/REC-json-ld-20140116/) via the `json-ld-1.1` <a href="#dfn-processing-mode" class="internalDFN">processing mode</a>.

scoped context  
A <a href="#dfn-scoped-context" class="internalDFN">scoped context</a> is part of an <a href="#dfn-expanded-term-definition" class="internalDFN">expanded term definition</a> using the `@context` [entry](https://infra.spec.whatwg.org/#map-entry). It has the same form as an <a href="#dfn-embedded-context" class="internalDFN">embedded context</a>. When the term is used as a type, it defines a type-scoped context, when used as a property it defines a property-scoped context.

set object  
A <a href="#dfn-set-object" class="internalDFN">set object</a> is a [map](https://infra.spec.whatwg.org/#ordered-map) that has an `@set` [entry](https://infra.spec.whatwg.org/#map-entry). It may also have an `@index` key, but no other [entries](https://infra.spec.whatwg.org/#map-entry). See the [Lists and Sets](#lists-and-sets) section of JSON-LD 1.1 for a normative description.

term  
A <a href="#dfn-term" class="internalDFN">term</a> is a short word defined in a <a href="#dfn-context" class="internalDFN">context</a> that may be expanded to an [IRI](https://tools.ietf.org/html/rfc3987#section-2). See the [Terms](#terms) section of JSON-LD 1.1 for a normative description.

term definition  
A term definition is an entry in a <a href="#dfn-context" class="internalDFN">context</a>, where the key defines a <a href="#dfn-term" class="internalDFN">term</a> which may be used within a [map](https://infra.spec.whatwg.org/#ordered-map) as a key, type, or elsewhere that a string is interpreted as a vocabulary item. Its value is either a string (simple term definition), expanding to an [IRI](https://tools.ietf.org/html/rfc3987#section-2), or a map (<a href="#dfn-expanded-term-definition" class="internalDFN">expanded term definition</a>).

type map  
A <a href="#dfn-type-map" class="internalDFN">type map</a> is a [map](https://infra.spec.whatwg.org/#ordered-map) value of a <a href="#dfn-term" class="internalDFN">term</a> defined with `@container` set to `@type`, whose keys are interpreted as [IRIs](https://tools.ietf.org/html/rfc3987#section-2) representing the `@type` of the associated <a href="#dfn-node-object" class="internalDFN">node object</a>; the value must be a <a href="#dfn-node-object" class="internalDFN">node object</a>, or [array](https://infra.spec.whatwg.org/#list) of node objects. If the value contains a <a href="#dfn-term" class="internalDFN">term</a> expanding to `@type`, its values are merged with the map value when expanding. See the [Type Maps](#type-maps) section of JSON-LD 1.1 for a normative description.

typed value  
A <a href="#dfn-typed-value" class="internalDFN">typed value</a> consists of a value, which is a [string](https://infra.spec.whatwg.org/#javascript-string), and a type, which is an [IRI](https://tools.ietf.org/html/rfc3987#section-2).

value object  
A <a href="#dfn-value-object" class="internalDFN">value object</a> is a [map](https://infra.spec.whatwg.org/#ordered-map) that has an `@value` [entry](https://infra.spec.whatwg.org/#map-entry). See the [Value Objects](#value-objects) section of JSON-LD 1.1 for a normative description.

vocabulary mapping  
The vocabulary mapping is set in the <a href="#dfn-context" class="internalDFN">context</a> using the `@vocab` key whose value must be an [IRI](https://tools.ietf.org/html/rfc3987#section-2), a <a href="#dfn-compact-iri" class="internalDFN">compact IRI</a>, a <a href="#dfn-term" class="internalDFN">term</a>, or `null`. See the [Context Definitions](#context-definitions) section of JSON-LD 1.1 for a normative description.

### 1.5 Design Goals and Rationale<a href="#design-goals-and-rationale" class="self-link"></a>

*This section is non-normative.*

JSON-LD satisfies the following design goals:

Simplicity  
No extra processors or software libraries are necessary to use JSON-LD in its most basic form. The language provides developers with a very easy learning curve. Developers not concerned with Linked Data only need to understand JSON, and know to include but ignore the `@context` property, to use the basic functionality in JSON-LD.

Compatibility  
A JSON-LD document is always a valid JSON document. This ensures that all of the standard JSON libraries work seamlessly with JSON-LD documents.

Expressiveness  
The syntax serializes labeled directed graphs. This ensures that almost every real world data model can be expressed.

Terseness  
The JSON-LD syntax is very terse and human readable, requiring as little effort as possible from the developer.

Zero Edits, most of the time  
JSON-LD ensures a smooth and simple transition from existing JSON-based systems. In many cases, zero edits to the JSON document and the addition of one line to the HTTP response should suffice (see <a href="#interpreting-json-as-json-ld" class="sectionRef sec-ref">§ 6.1 Interpreting JSON as JSON-LD</a>). This allows organizations that have already deployed large JSON-based infrastructure to use JSON-LD's features in a way that is not disruptive to their day-to-day operations and is transparent to their current customers. However, there are times where mapping JSON to a graph representation is a complex undertaking. In these instances, rather than extending JSON-LD to support esoteric use cases, we chose not to support the use case. While Zero Edits is a design goal, it is not always possible without adding great complexity to the language. JSON-LD focuses on simplicity when possible.

Usable as RDF  
JSON-LD is usable by developers as idiomatic JSON, with no need to understand RDF \[<a href="#bib-rdf11-concepts" class="bibref" title="RDF 1.1 Concepts and Abstract Syntax">RDF11-CONCEPTS</a>\]. JSON-LD is also usable as RDF, so people intending to use JSON-LD with RDF tools will find it can be used like any other RDF syntax. Complete details of how JSON-LD relates to RDF are in section <a href="#relationship-to-rdf" class="sec-ref">§ 10. Relationship to RDF</a>.

### 1.6 Data Model Overview<a href="#data-model-overview" class="self-link"></a>

*This section is non-normative.*

Generally speaking, the data model described by a <a href="#dfn-json-ld-document" class="internalDFN">JSON-LD document</a> is a labeled, directed [graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph). The graph contains [nodes](https://www.w3.org/TR/rdf11-concepts/#dfn-node), which are connected by directed-arcs. A node is either a [resource](https://www.w3.org/TR/rdf11-concepts/#dfn-resource) with [properties](https://www.w3.org/TR/rdf11-concepts/#dfn-property), or the data values of those properties including [strings](https://infra.spec.whatwg.org/#javascript-string), [numbers](https://tc39.es/ecma262/#sec-terms-and-definitions-number-value), <a href="#dfn-typed-value" class="internalDFN">typed values</a> (like dates and times) and [IRIs](https://tools.ietf.org/html/rfc3987#section-2).

Within a directed graph, nodes are [resources](https://www.w3.org/TR/rdf11-concepts/#dfn-resource), and may be *unnamed*, i.e., not identified by an [IRI](https://tools.ietf.org/html/rfc3987#section-2); which are called [blank nodes](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node), and may be identified using a [blank node identifier](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node-identifier). These identifiers may be required to represent a fully connected graph using a tree structure, such as JSON, but otherwise have no intrinsic meaning. Literal values, such as [strings](https://infra.spec.whatwg.org/#javascript-string) and [numbers](https://tc39.es/ecma262/#sec-terms-and-definitions-number-value), are also considered [resources](https://www.w3.org/TR/rdf11-concepts/#dfn-resource), and JSON-LD distinguishes between <a href="#dfn-node-object" class="internalDFN">node objects</a> and <a href="#dfn-value-object" class="internalDFN">value objects</a> to distinguish between the different kinds of [resource](https://www.w3.org/TR/rdf11-concepts/#dfn-resource).

This simple data model is incredibly flexible and powerful, capable of modeling almost any kind of data. For a deeper explanation of the data model, see section <a href="#data-model" class="sec-ref">§ 8. Data Model</a>.

Developers who are familiar with Linked Data technologies will recognize the data model as the RDF Data Model. To dive deeper into how JSON-LD and RDF are related, see section <a href="#relationship-to-rdf" class="sec-ref">§ 10. Relationship to RDF</a>.

At the surface level, a <a href="#dfn-json-ld-document" class="internalDFN">JSON-LD document</a> is simply [JSON](https://tools.ietf.org/html/rfc8259), detailed in \[<a href="#bib-rfc8259" class="bibref" title="The JavaScript Object Notation (JSON) Data Interchange Format">RFC8259</a>\]. For the purpose of describing the core data structures, this is limited to [arrays](https://infra.spec.whatwg.org/#list), [maps](https://infra.spec.whatwg.org/#ordered-map) (the parsed version of a [JSON Object](https://tools.ietf.org/html/rfc8259#section-4)), [strings](https://infra.spec.whatwg.org/#javascript-string), [numbers](https://tc39.es/ecma262/#sec-terms-and-definitions-number-value), [booleans](https://infra.spec.whatwg.org/#boolean), and [null](https://infra.spec.whatwg.org/#nulls), <span class="changed">called the [JSON-LD internal representation](https://www.w3.org/TR/json-ld11-api/#dfn-internal-representation). This allows surface syntaxes other than JSON to be manipulated using the same algorithms, when the syntax maps to equivalent core data structures</span>.

Note

Although not discussed in this specification, parallel work using [YAML Ain’t Markup Language (YAML™) Version 1.2](http://yaml.org/spec/1.2/spec.html) \[<a href="#bib-yaml" class="bibref" title="YAML Ain’t Markup Language (YAML™) Version 1.2">YAML</a>\] and binary representations such as [Concise Binary Object Representation (CBOR)](https://tools.ietf.org/html/rfc7049) \[<a href="#bib-rfc7049" class="bibref" title="Concise Binary Object Representation (CBOR)">RFC7049</a>\] could be used to map into the [internal representation](https://www.w3.org/TR/json-ld11-api/#dfn-internal-representation), allowing the JSON-LD 1.1 API \[<a href="#bib-json-ld11-api" class="bibref" title="JSON-LD 1.1 Processing Algorithms and API">JSON-LD11-API</a>\] to operate as if the source was a JSON document.

### 1.7 Syntax Tokens and Keywords<a href="#syntax-tokens-and-keywords" class="self-link"></a>

*This section is non-normative.*

JSON-LD specifies a number of syntax tokens and <a href="#dfn-keyword" class="internalDFN">keywords</a> that are a core part of the language. A normative description of the <a href="#dfn-keyword" class="internalDFN">keywords</a> is given in <a href="#keywords" class="sectionRef sec-ref">§ 9.16 Keywords</a>.

`:`  
The separator for JSON keys and values that use <a href="#dfn-compact-iri" class="internalDFN">compact IRIs</a>.

`@base`  
Used to set the [base IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-base-iri) against which to resolve those [relative IRI references](https://tools.ietf.org/html/rfc3987#section-6.5) which are otherwise interpreted relative to the document. This keyword is described in <a href="#base-iri" class="sectionRef sec-ref">§ 4.1.3 Base IRI</a>.

`@container`  
Used to set the default container type for a <a href="#dfn-term" class="internalDFN">term</a>. This keyword is described in the following sections:

-   <a href="#sets-and-lists" class="sectionRef sec-ref">§ 4.3 Value Ordering</a>,
-   <a href="#data-indexing" class="sectionRef sec-ref">§ 4.6.1 Data Indexing</a>,
-   <a href="#language-indexing" class="sectionRef sec-ref">§ 4.6.2 Language Indexing</a>,
-   <a href="#node-identifier-indexing" class="sectionRef sec-ref">§ 4.6.3 Node Identifier Indexing</a>,
-   <a href="#node-type-indexing" class="sectionRef sec-ref">§ 4.6.4 Node Type Indexing</a>
-   <a href="#named-graphs" class="sectionRef sec-ref">§ 4.9 Named Graphs</a>,
-   <a href="#named-graph-indexing" class="sectionRef sec-ref">§ 4.9.3 Named Graph Indexing</a>, and
-   <a href="#named-graph-data-indexing" class="sectionRef sec-ref">§ 4.9.2 Named Graph Data Indexing</a>

`@context`  
Used to define the short-hand names that are used throughout a JSON-LD document. These short-hand names are called <a href="#dfn-term" class="internalDFN">terms</a> and help developers to express specific identifiers in a compact manner. The `@context` keyword is described in detail in <a href="#the-context" class="sectionRef sec-ref">§ 3.1 The Context</a>.

`@direction`  
Used to set the <a href="#dfn-base-direction" class="internalDFN">base direction</a> of a <a href="#dfn-json-ld-value" class="internalDFN">JSON-LD value</a>, which are not <a href="#dfn-typed-value" class="internalDFN">typed values</a> (e.g. [strings](https://infra.spec.whatwg.org/#javascript-string), or [language-tagged strings](https://www.w3.org/TR/rdf11-concepts/#dfn-language-tagged-string)). This keyword is described in <a href="#string-internationalization" class="sectionRef sec-ref">§ 4.2.4 String Internationalization</a>.

`@graph`  
Used to express a [graph](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-graph). This keyword is described in <a href="#named-graphs" class="sectionRef sec-ref">§ 4.9 Named Graphs</a>.

`@id`  
Used to uniquely identify <a href="#dfn-node-object" class="internalDFN">node objects</a> that are being described in the document with [IRIs](https://tools.ietf.org/html/rfc3987#section-2) or [blank node identifiers](https://www.w3.org/TR/rdf11-concepts/#dfn-blank-node-identifier). This keyword is described in <a href="#node-identifiers" class="sectionRef sec-ref">§ 3.3 Node Identifiers</a>. A <a href="#dfn-node-reference" class="internalDFN">node reference</a> is a <a href="#dfn-node-object" class="internalDFN">node object</a> containing only the `@id` property, which may represent a reference to a <a href="#dfn-node-object" class="internalDFN">node object</a> found elsewhere in the document.

`@import`  
Used in a <a href="#dfn-context-definition" class="internalDFN">context definition</a> to load an external context within which the containing <a href="#dfn-context-definition" class="internalDFN">context definition</a> is merged. This can be useful to add JSON-LD 1.1 features to JSON-LD 1.0 contexts.

`@included`  
Used in a top-level <a href="#dfn-node-object" class="internalDFN">node object</a> to define an <a href="#dfn-included-block" class="internalDFN">included block</a>, for including secondary <a href="#dfn-node-object" class="internalDFN">node objects</a> within another <a href="#dfn-node-object" class="internalDFN">node object</a>.

`@index`  
Used to specify that a container is used to index information and that processing should continue deeper into a JSON data structure. This keyword is described in <a href="#data-indexing" class="sectionRef sec-ref">§ 4.6.1 Data Indexing</a>.

`@json`  
Used as the `@type` value of a <a href="#dfn-json-literal" class="internalDFN">JSON literal</a>. This keyword is described in <a href="#json-literals" class="sectionRef sec-ref">§ 4.2.2 JSON Literals</a>.

`@language`  
Used to specify the language for a particular string value or the default language of a JSON-LD document. This keyword is described in <a href="#string-internationalization" class="sectionRef sec-ref">§ 4.2.4 String Internationalization</a>.

`@list`  
Used to express an ordered set of data. This keyword is described in <a href="#lists" class="sectionRef sec-ref">§ 4.3.1 Lists</a>.

`@nest`  
Used to define a [property](https://www.w3.org/TR/rdf11-concepts/#dfn-property) of a <a href="#dfn-node-object" class="internalDFN">node object</a> that groups together properties of that node, but is not an edge in the graph.

`@none`  
Used as an index value in an <a href="#dfn-index-map" class="internalDFN">index map</a>, <a href="#dfn-id-map" class="internalDFN">id map</a>, <a href="#dfn-language-map" class="internalDFN">language map</a>, <a href="#dfn-type-map" class="internalDFN">type map</a>, or elsewhere where a [map](https://infra.spec.whatwg.org/#ordered-map) is used to index into other values, when the indexed node does not have the feature being indexed.

`@prefix`  
With the value `true`, allows this <a href="#dfn-term" class="internalDFN">term</a> to be used to construct a <a href="#dfn-compact-iri" class="internalDFN">compact IRI</a> when compacting. With the value `false` prevents the term from being used to construct a <a href="#dfn-compact-iri" class="internalDFN">compact IRI</a>. Also determines if the term will be considered when expanding <a href="#dfn-compact-iri" class="internalDFN">compact IRIs</a>.

`@propagate`  
Used in a <a href="#dfn-context-definition" class="internalDFN">context definition</a> to change the scope of that context. By default, it is `true`, meaning that contexts propagate across <a href="#dfn-node-object" class="internalDFN">node objects</a> (other than for <a href="#dfn-type-scoped-context" class="internalDFN">type-scoped contexts</a>, which default to `false`). Setting this to `false` causes term definitions created within that context to be removed when entering a new <a href="#dfn-node-object" class="internalDFN">node object</a>.

`@protected`  
Used to prevent <a href="#dfn-term-definition" class="internalDFN">term definitions</a> of a context to be overridden by other contexts. This keyword is described in <a href="#protected-term-definitions" class="sectionRef sec-ref">§ 4.1.11 Protected Term Definitions</a>.

`@reverse`  
Used to express reverse properties. This keyword is described in <a href="#reverse-properties" class="sectionRef sec-ref">§ 4.8 Reverse Properties</a>.

`@set`  
Used to express an unordered set of data and to ensure that values are always represented as arrays. This keyword is described in <a href="#sets" class="sectionRef sec-ref">§ 4.3.2 Sets</a>.

`@type`  
Used to set the type of a [node](https://www.w3.org/TR/rdf11-concepts/#dfn-node) or the datatype of a <a href="#dfn-typed-value" class="internalDFN">typed value</a>. This keyword is described further in <a href="#specifying-the-type" class="sectionRef sec-ref">§ 3.5 Specifying the Type</a> and <a href="#typed-values" class="sectionRef sec-ref">§ 4.2.1 Typed Values</a>.

Note

The use of `@type` to define a type for both <a href="#dfn-node-object" class="internalDFN">node objects</a> and <a href="#dfn-value-object" class="internalDFN">value objects</a> addresses the basic need to type data, be it a literal value or a more complicated resource. Experts may find the overloaded use of the `@type` keyword for both purposes concerning, but should note that Web developer usage of this feature over multiple years has not resulted in its misuse due to the far less frequent use of `@type` to express typed literal values.

`@value`  
Used to specify the data that is associated with a particular [property](https://www.w3.org/TR/rdf11-concepts/#dfn-property) in the graph. This keyword is described in <a href="#string-internationalization" class="sectionRef sec-ref">§ 4.2.4 String Internationalization</a> and <a href="#typed-values" class="sectionRef sec-ref">§ 4.2.1 Typed Values</a>.

`@version`  
Used in a <a href="#dfn-context-definition" class="internalDFN">context definition</a> to set the <a href="#dfn-processing-mode" class="internalDFN">processing mode</a>. New features since [JSON-LD 1.0](https://www.w3.org/TR/2014/REC-json-ld-20140116/) \[<a href="#bib-json-ld10" class="bibref" title="JSON-LD 1.0">JSON-LD10</a>\] described in this specification are not available when <a href="#dfn-processing-mode" class="internalDFN">processing mode</a> has been explicitly set to `json-ld-1.0`.

Note

Within a <a href="#dfn-context-definition" class="internalDFN">context definition</a> `@version` takes the specific value `1.1`, not `"json-ld-1.1"`, as a JSON-LD 1.0 processor may accept a string value for `@version`, but will reject a numeric value.

Note

The use of `1.1` for the value of `@version` is intended to cause a JSON-LD 1.0 processor to stop processing. Although it is clearly meant to be related to JSON-LD 1.1, it does not otherwise adhere to the requirements for [Semantic Versioning](https://semver.org/).

`@vocab`  
Used to expand properties and values in `@type` with a common prefix [IRI](https://tools.ietf.org/html/rfc3987#section-2). This keyword is described in <a href="#default-vocabulary" class="sectionRef sec-ref">§ 4.1.2 Default Vocabulary</a>.

All keys, <a href="#dfn-keyword" class="internalDFN">keywords</a>, and values in JSON-LD are case-sensitive.

2. Conformance<a href="#conformance" class="self-link"></a>
-----------------------------------------------------------

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words *MAY*, *MUST*, *MUST NOT*, *RECOMMENDED*, *SHOULD*, and *SHOULD NOT* in this document are to be interpreted as described in [BCP 14](https://tools.ietf.org/html/bcp14) \[<a href="#bib-rfc2119" class="bibref" title="Key words for use in RFCs to Indicate Requirement Levels">RFC2119</a>\] \[<a href="#bib-rfc8174" class="bibref" title="Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words">RFC8174</a>\] when, and only when, they appear in all capitals, as shown here.

A <a href="#dfn-json-ld-document" class="internalDFN">JSON-LD document</a> complies with this specification if it follows the normative statements in appendix <a href="#json-ld-grammar" class="sec-ref">§ 9. JSON-LD Grammar</a>. JSON documents can be interpreted as JSON-LD by following the normative statements in <a href="#interpreting-json-as-json-ld" class="sectionRef sec-ref">§ 6.1 Interpreting JSON as JSON-LD</a>. For convenience, normative statements for documents are often phrased as statements on the properties of the document.

This specification makes use of the following namespace prefixes:

<table><thead><tr class="header"><th>Prefix</th><th>IRI</th></tr></thead><tbody><tr class="odd"><td>dc11</td><td>http://purl.org/dc/elements/1.1/</td></tr><tr class="even"><td>dcterms</td><td>http://purl.org/dc/terms/</td></tr><tr class="odd"><td>cred</td><td>https://w3id.org/credentials#</td></tr><tr class="even"><td>foaf</td><td>http://xmlns.com/foaf/0.1/</td></tr><tr class="odd"><td>geojson</td><td>https://purl.org/geojson/vocab#</td></tr><tr class="even"><td>prov</td><td>http://www.w3.org/ns/prov#</td></tr><tr class="odd"><td>i18n</td><td>https://www.w3.org/ns/i18n#</td></tr><tr class="even"><td>rdf</td><td>http://www.w3.org/1999/02/22-rdf-syntax-ns#</td></tr><tr class="odd"><td>schema</td><td>http://schema.org/</td></tr><tr class="even"><td>skos</td><td>http://www.w3.org/2004/02/skos/core#</td></tr><tr class="odd"><td>xsd</td><td>http://www.w3.org/2001/XMLSchema#</td></tr></tbody></table>

These are used within this document as part of a <a href="#dfn-compact-iri" class="internalDFN">compact IRI</a> as a shorthand for the resulting [IRI](https://tools.ietf.org/html/rfc3987#section-2), such as `dcterms:title` used to represent `http://purl.org/dc/terms/title`.

3. Basic Concepts<a href="#basic-concepts" class="self-link"></a>
-----------------------------------------------------------------

*This section is non-normative.*

JSON \[<a href="#bib-rfc8259" class="bibref" title="The JavaScript Object Notation (JSON) Data Interchange Format">RFC8259</a>\] is a lightweight, language-independent data interchange format. It is easy to parse and easy to generate. However, it is difficult to integrate JSON from different sources as the data may contain keys that conflict with other data sources. Furthermore, JSON has no built-in support for hyperlinks, which are a fundamental building block on the Web. Let's start by looking at an example that we will be using for the rest of this section:

<a href="#example-2-sample-json-document" class="self-link">Example 2</a><span class="example-title">: Sample JSON document</span>

    {
      "name": "Manu Sporny",
      "homepage": "http://manu.sporny.org/",
      "image": "http://manu.sporny.org/images/manu.png"
    }

It's obvious to humans that the data is about a person whose `name` is "Manu Sporny" and that the `homepage` property contains the URL of that person's homepage. A machine doesn't have such an intuitive understanding and sometimes, even for humans, it is difficult to resolve ambiguities in such representations. This problem can be solved by using unambiguous identifiers to denote the different concepts instead of tokens such as "name", "homepage", etc.

Linked Data, and the Web in general, uses [IRIs](https://tools.ietf.org/html/rfc3987#section-2) ([Internationalized Resource Identifiers](https://tools.ietf.org/html/rfc3987#section-2) as described in \[<a href="#bib-rfc3987" class="bibref" title="Internationalized Resource Identifiers (IRIs)">RFC3987</a>\]) for unambiguous identification. The idea is to use [IRIs](https://tools.ietf.org/html/rfc3987#section-2) to assign unambiguous identifiers to data that may be of use to other developers. It is useful for <a href="#dfn-term" class="internalDFN">terms</a>, like `name` and `homepage`, to expand to [IRIs](https://tools.ietf.org/html/rfc3987#section-2) so that developers don't accidentally step on each other's terms. Furthermore, developers and machines are able to use this [IRI](https://tools.ietf.org/html/rfc3987#section-2) (by using a web browser, for instance) to go to the term and get a definition of what the term means. This process is known as [IRI](https://tools.ietf.org/html/rfc3987#section-2) dereferencing.

Leveraging the popular [schema.org vocabulary](http://schema.org/), the example above could be unambiguously expressed as follows:

<a href="#example-3-sample-json-ld-document-using-full-iris-instead-of-terms" class="self-link">Example 3</a><span class="example-title">: Sample JSON-LD document using full IRIs instead of terms</span>

Expanded (Input)

Statements

Turtle (Result)

<a href="https://json-ld.org/playground/#startTab=tab-expand&amp;json-ld=%7B%0A%20%20%22http%3A%2F%2Fschema.org%2Fname%22%3A%20%22Manu%20Sporny%22%2C%0A%20%20%22http%3A%2F%2Fschema.org%2Furl%22%3A%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fmanu.sporny.org%2F%22%0A%20%20%20%20%0A%20%20%7D%2C%0A%20%20%22http%3A%2F%2Fschema.org%2Fimage%22%3A%20%7B%0A%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fmanu.sporny.org%2Fimages%2Fmanu.png%22%0A%20%20%7D%0A%7D" class="playground">Open in playground</a>

    {
      "http://schema.org/name": "Manu Sporny",
      "http://schema.org/url": {
        "@id": "http://manu.sporny.org/"
        ↑ The '@id' keyword means 'This value is an identifier that is an IRI'
      },
      "http://schema.org/image": {
        "@id": "http://manu.sporny.org/images/manu.png"
      }
    }

<table><thead><tr class="header"><th>Subject</th><th>Property</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>_:b0</td><td>schema:image</td><td>http://manu.sporny.org/images/manu.png</td></tr><tr class="even"><td>_:b0</td><td>schema:name</td><td>Manu Sporny</td></tr><tr class="odd"><td>_:b0</td><td>schema:url</td><td>http://manu.sporny.org/</td></tr></tbody></table>

    @prefix schema: <http://schema.org/> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

     [
       schema:image <http://manu.sporny.org/images/manu.png>;
       schema:name "Manu Sporny";
       schema:url <http://manu.sporny.org/>
     ] .

In the example above, every property is unambiguously identified by an [IRI](https://tools.ietf.org/html/rfc3987#section-2) and all values representing [IRIs](https://tools.ietf.org/html/rfc3987#section-2) are explicitly marked as such by the `@id` <a href="#dfn-keyword" class="internalDFN">keyword</a>. While this is a valid JSON-LD document that is very specific about its data, the document is also overly verbose and difficult to work with for human developers. To address this issue, JSON-LD introduces the notion of a <a href="#dfn-context" class="internalDFN">context</a> as described in the next section.

This section only covers the most basic features of JSON-LD. More advanced features, including <a href="#dfn-typed-value" class="internalDFN">typed values</a>, [indexed values](#indexed-values), and [named graphs](https://www.w3.org/TR/rdf11-concepts/#dfn-named-graph), can be found in <a href="#advanced-concepts" class="sectionRef sec-ref">§ 4. Advanced Concepts</a>.

### 3.1 The Context<a href="#the-context" class="self-link"></a>

*This section is non-normative.*

When two people communicate with one another, the conversation takes place in a shared environment, typically called "the context of the conversation". This shared context allows the individuals to use shortcut terms, like the first name of a mutual friend, to communicate more quickly but without losing accuracy. A context in JSON-LD works in the same way. It allows two applications to use shortcut terms to communicate with one another more efficiently, but without losing accuracy.

Simply speaking, a <a href="#dfn-context" class="internalDFN">context</a> is used to map <a href="#dfn-term" class="internalDFN">terms</a> to [IRIs](https://tools.ietf.org/html/rfc3987#section-2). <a href="#dfn-term" class="internalDFN">Terms</a> are case sensitive and most valid [strings](https://infra.spec.whatwg.org/#javascript-string) that are not reserved JSON-LD <a href="#dfn-keyword" class="internalDFN">keywords</a> can be used as a <a href="#dfn-term" class="internalDFN">term</a>. <span class="changed">Exceptions are the empty string `""` and strings that have the form of a keyword (i.e., starting with `"@"` followed exclusively by one or more *ALPHA* characters (see \[<a href="#bib-rfc5234" class="bibref" title="Augmented BNF for Syntax Specifications: ABNF">RFC5234</a>\])), which must not be used as terms. Strings that have the form of an [IRI](https://tools.ietf.org/html/rfc3987#section-2) (e.g., containing a `":"`) should not be used as terms.</span>

For the sample document in the previous section, a <a href="#dfn-context" class="internalDFN">context</a> would look something like this:

<a href="#example-4-context-for-the-sample-document-in-the-previous-section" class="self-link">Example 4</a><span class="example-title">: Context for the sample document in the previous section</span>

    {
      "@context": {
        "name": "http://schema.org/name",
        ↑ This means that 'name' is shorthand for 'http://schema.org/name'
        "image": {
          "@id": "http://schema.org/image",
          ↑ This means that 'image' is shorthand for 'http://schema.org/image'
          "@type": "@id"
          ↑ This means that a string value associated with 'image'
            should be interpreted as an identifier that is an IRI
        },
        "homepage": {
          "@id": "http://schema.org/url",
          ↑ This means that 'homepage' is shorthand for 'http://schema.org/url'
          "@type": "@id"
          ↑ This means that a string value associated with 'homepage'
            should be interpreted as an identifier that is an IRI 
        }
      }
    }

As the <a href="#dfn-context" class="internalDFN">context</a> above shows, the value of a <a href="#dfn-term-definition" class="internalDFN">term definition</a> can either be a simple string, mapping the <a href="#dfn-term" class="internalDFN">term</a> to an [IRI](https://tools.ietf.org/html/rfc3987#section-2), or a [map](https://infra.spec.whatwg.org/#ordered-map).

A <a href="#dfn-context" class="internalDFN">context</a> is introduced using an [entry](https://infra.spec.whatwg.org/#map-entry) with the key `@context` and may appear within a <a href="#dfn-node-object" class="internalDFN">node object</a> or a <a href="#dfn-value-object" class="internalDFN">value object</a>.

When an [entry](https://infra.spec.whatwg.org/#map-entry) with a <a href="#dfn-term" class="internalDFN">term</a> key has a [map](https://infra.spec.whatwg.org/#ordered-map) value, the [map](https://infra.spec.whatwg.org/#ordered-map) is called an <a href="#dfn-expanded-term-definition" class="internalDFN">expanded term definition</a>. The example above specifies that the values of `image` and `homepage`, if they are strings, are to be interpreted as [IRIs](https://tools.ietf.org/html/rfc3987#section-2). <a href="#dfn-expanded-term-definition" class="internalDFN">Expanded term definitions</a> also allow terms to be used for [index maps](#data-indexing) and to specify whether [array](https://infra.spec.whatwg.org/#list) values are to be interpreted as [sets](#sets) or [lists](#lists). <a href="#dfn-expanded-term-definition" class="internalDFN">Expanded term definitions</a> may be defined using [IRIs](https://tools.ietf.org/html/rfc3987#section-2) or <a href="#dfn-compact-iri" class="internalDFN">compact IRIs</a> as keys, which is mainly used to associate type or language information with an [IRIs](https://tools.ietf.org/html/rfc3987#section-2) or <a href="#dfn-compact-iri" class="internalDFN">compact IRI</a>.

<a href="#dfn-context" class="internalDFN">Contexts</a> can either be directly embedded into the document (an <a href="#dfn-embedded-context" class="internalDFN">embedded context</a>) or be referenced using a URL. Assuming the context document in the previous example can be retrieved at `https://json-ld.org/contexts/person.jsonld`, it can be referenced by adding a single line and allows a JSON-LD document to be expressed much more concisely as shown in the example below:

<a href="#example-5-referencing-a-json-ld-context" class="self-link">Example 5</a><span class="example-title">: Referencing a JSON-LD context</span>

Compacted (Input)

Expanded (Result)

Statements

Turtle

<a href="https://json-ld.org/playground/#startTab=tab-expand&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%22https%3A%2F%2Fjson-ld.org%2Fcontexts%2Fperson.jsonld%22%2C%0A%20%20%22name%22%3A%20%22Manu%20Sporny%22%2C%0A%20%20%22homepage%22%3A%20%22http%3A%2F%2Fmanu.sporny.org%2F%22%2C%0A%20%20%22image%22%3A%20%22http%3A%2F%2Fmanu.sporny.org%2Fimages%2Fmanu.png%22%0A%7D" class="playground">Open in playground</a>

    {
      "@context": "https://json-ld.org/contexts/person.jsonld",
      "name": "Manu Sporny",
      "homepage": "http://manu.sporny.org/",
      "image": "http://manu.sporny.org/images/manu.png"
    }

    [{
      "http://xmlns.com/foaf/0.1/name": [{"@value": "Manu Sporny"}],
      "http://xmlns.com/foaf/0.1/homepage": [{ "@id": "http://manu.sporny.org/" }],
      "http://xmlns.com/foaf/0.1/img": [{ "@id": "http://manu.sporny.org/images/manu.png" }]
    }]

<table><thead><tr class="header"><th>Subject</th><th>Property</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>_:b0</td><td>foaf:name</td><td>Manu Sporny</td></tr><tr class="even"><td>_:b0</td><td>foaf:homepage</td><td>http://manu.sporny.org/</td></tr><tr class="odd"><td>_:b0</td><td>foaf:img</td><td>http://manu.sporny.org/images/manu.png</td></tr></tbody></table>

    @prefix foaf: <http://xmlns.com/foaf/0.1/> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

     [
       foaf:name "Manu Sporny";
       foaf:homepage <http://manu.sporny.org/>;
       foaf:img <http://manu.sporny.org/images/manu.png>
     ] .

The referenced context not only specifies how the terms map to [IRIs](https://tools.ietf.org/html/rfc3987#section-2) in the Schema.org vocabulary but also specifies that string values associated with the `homepage` and `image` property can be interpreted as an [IRI](https://tools.ietf.org/html/rfc3987#section-2) (`"@type": "@id"`, see <a href="#iris" class="sectionRef sec-ref">§ 3.2 IRIs</a> for more details). This information allows developers to re-use each other's data without having to agree to how their data will interoperate on a site-by-site basis. External JSON-LD context documents may contain extra information located outside of the `@context` key, such as documentation about the <a href="#dfn-term" class="internalDFN">terms</a> declared in the document. Information contained outside of the `@context` value is ignored when the document is used as an external JSON-LD context document.

A remote context may also be referenced using a relative URL, which is resolved relative to the location of the document containing the reference. For example, if a document were located at `http://example.org/document.jsonld` and contained a relative reference to `context.jsonld`, the referenced context document would be found relative at `http://example.org/context.jsonld`.

<a href="#example-6-loading-a-relative-context" class="self-link">Example 6</a><span class="example-title">: Loading a relative context</span>

    {
      "@context": "context.jsonld",
      "name": "Manu Sporny",
      "homepage": "http://manu.sporny.org/",
      "image": "http://manu.sporny.org/images/manu.png"
    }

Note

Resolution of relative references to context URLs also applies to remote context documents, as they may themselves contain references to other contexts.

JSON documents can be interpreted as JSON-LD without having to be modified by referencing a <a href="#dfn-context" class="internalDFN">context</a> via an [HTTP Link Header](https://tools.ietf.org/html/rfc8288#section-3) as described in <a href="#interpreting-json-as-json-ld" class="sectionRef sec-ref">§ 6.1 Interpreting JSON as JSON-LD</a>. It is also possible to apply a custom context using the JSON-LD 1.1 API \[<a href="#bib-json-ld11-api" class="bibref" title="JSON-LD 1.1 Processing Algorithms and API">JSON-LD11-API</a>\].

In <a href="#dfn-json-ld-document" class="internalDFN">JSON-LD documents</a>, <a href="#dfn-context" class="internalDFN">contexts</a> may also be specified inline. This has the advantage that documents can be processed even in the absence of a connection to the Web. Ultimately, this is a modeling decision and different use cases may require different handling. See [Security Considerations](#iana-security) in <a href="#iana-considerations" class="sectionRef sec-ref">§ C. IANA Considerations</a> for a discussion on using remote contexts.

<a href="#example-7-in-line-context-definition" class="self-link">Example 7</a><span class="example-title">: In-line context definition</span>

Compacted (Input)

Expanded (Result)

Statements

Turtle

<a href="https://json-ld.org/playground/#startTab=tab-expand&amp;json-ld=%7B%0A%20%20%22%40context%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22http%3A%2F%2Fschema.org%2Fname%22%2C%0A%20%20%20%20%22image%22%3A%20%7B%0A%20%20%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fschema.org%2Fimage%22%2C%0A%20%20%20%20%20%20%22%40type%22%3A%20%22%40id%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22homepage%22%3A%20%7B%0A%20%20%20%20%20%20%22%40id%22%3A%20%22http%3A%2F%2Fschema.org%2Furl%22%2C%0A%20%20%20%20%20%20%22%40type%22%3A%20%22%40id%22%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%22name%22%3A%20%22Manu%20Sporny%22%2C%0A%20%20%22homepage%22%3A%20%22http%3A%2F%2Fmanu.sporny.org%2F%22%2C%0A%20%20%22image%22%3A%20%22http%3A%2F%2Fmanu.sporny.org%2Fimages%2Fmanu.png%22%0A%7D" class="playground">Open in playground</a>

    {
      "@context": {
        "name": "http://schema.org/name",
        "image": {
          "@id": "http://schema.org/image",
          "@type": "@id"
        },
        "homepage": {
          "@id": "http://schema.org/url",
          "@type": "@id"
        }
      },
      "name": "Manu Sporny",
      "homepage": "http://manu.sporny.org/",
      "image": "http://manu.sporny.org/images/manu.png"
    }

    [{
      "http://schema.org/name": [{"@value": "Manu Sporny"}],
      "http://schema.org/url": [{ "@id": "http://manu.sporny.org/" }],
      "http://schema.org/image": [{ "@id": "http://manu.sporny.org/images/manu.png" }]
    }]

<table><thead><tr class="header"><th>Subject</th><th>Property</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>_:b0</td><td>schema:image</td><td>http://manu.sporny.org/images/manu.png</td></tr><tr class="even"><td>_:b0</td><td>schema:name</td><td>Manu Sporny</td></tr><tr class="odd"><td>_:b0</td><td>schema:url</td><td>http://manu.sporny.org/</td></tr></tbody></table>

    @prefix schema: <http://schema.org/> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

     [
       schema:image <http://manu.sporny.org/images/manu.png>;
       schema:name "Manu Sporny";
       schema:url <http://manu.sporny.org/>
     ] .

This section only covers the most basic features of the JSON-LD Context. The Context can also be used to help interpret other more complex JSON data structures, such as [indexed values](#indexed-values), [ordered values](#sets-and-lists), and [nested properties](#nested-properties). More advanced features related to the JSON-LD Context are covered in <a href="#advanced-concepts" class="sectionRef sec-ref">§ 4. Advanced Concepts</a>.

### 3.2 IRIs<a href="#iris" class="self-link"></a>

*This section is non-normative.*

[IRIs](https://tools.ietf.org/html/rfc3987#section-2) ([Internationalized Resource Identifiers](https://tools.ietf.org/html/rfc3987#section-2) \[<a href="#bib-rfc3987" class="bibref" title="Internationalized Resource Identifiers (IRIs)">RFC3987</a>\]) are fundamental to Linked Data as that is how most [nodes](https://www.w3.org/TR/rdf11-concepts/#dfn-node) and [properties](https://www.w3.org/TR/rdf11-concepts/#dfn-property) are identified. In JSON-LD, IRIs may be represented as an [IRI reference](https://tools.ietf.org/html/rfc3987#section-1.3). An [IRI](https://tools.ietf.org/html/rfc3987#section-2) is defined in \[<a href="#bib-rfc3987" class="bibref" title="Internationalized Resource Identifiers (IRIs)">RFC3987</a>\] as containing a *scheme* along with *path* and optional *query* and *fragment* segments. A [relative IRI reference](https://tools.ietf.org/html/rfc3987#section-6.5) is an IRI that is relative to some other [IRI](https://tools.ietf.org/html/rfc3987#section-2). In JSON-LD, with exceptions that are as described below, all [relative IRI references](https://tools.ietf.org/html/rfc3987#section-6.5) are resolved relative to the [base IRI](https://www.w3.org/TR/rdf11-concepts/#dfn-base-iri).

Note

As noted in <a href="#how-to-read-this-document" class="sectionRef sec-ref">§ 1.1 How to Read this Document</a>, IRIs can often be confused with URLs ([Uniform Resource Locators](https://www.w3.org/TR/ld-glossary/#uniform-resource-locator)), the primary distinction is that a URL *locates* a resource on the web, an IRI *identifies* a resource. While it is a good practice for resource identifiers to be dereferenceable, sometimes this is not practical. In particular, note the \[<a href="#bib-urn" class="bibref" title="URN Syntax">URN</a>\] scheme for Uniform Resource Names, such as [UUID](https://tools.ietf.org/html/rfc4122). An example UUID is `urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6`.

Note

[Properties](https://www.w3.org/TR/rdf11-concepts/#dfn-property), values of `@type`, and values of
