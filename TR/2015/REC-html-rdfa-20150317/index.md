[<img src="https://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

HTML+RDFa 1.1 - Second Edition
==============================

Support for RDFa in HTML4 and HTML5
-----------------------------------

W3C Recommendation 17 March 2015
--------------------------------

This version:  
<a href="http://www.w3.org/TR/2015/REC-html-rdfa-20150317/" class="u-url">http://www.w3.org/TR/2015/REC-html-rdfa-20150317/</a>

Latest published version:  
<http://www.w3.org/TR/html-rdfa/>

Implementation report:  
<http://www.w3.org/2010/02/rdfa/wiki/HTML5-ImplementationReport>

Previous version:  
<http://www.w3.org/TR/2014/PER-html-rdfa-20141216/>

Previous Recommendation:  
<http://www.w3.org/TR/2013/REC-html-rdfa-20130822/>

Editor:  
<span property="rdf:first" typeof="foaf:Person"></span>

<a href="mailto:msporny@digitalbazaar.com" class="u-url url p-name fn">Manu Sporny</a>, <a href="http://blog.digitalbazaar.com" class="p-org org h-org h-card">Digital Bazaar, Inc.</a> <span property="rdf:rest" resource="rdf:nil"></span>

Authors:  
<span property="dc:contributor" typeof="foaf:Person"></span>

<a href="mailto:shane@aptest.com" class="u-url url p-name fn">Shane McCarron</a>, <a href="http://www.aptest.com/" class="p-org org h-org h-card">Applied Testing and Technology, Inc.</a>

<span property="dc:contributor" typeof="foaf:Person"></span>

<a href="http://adida.net/" class="u-url url p-name fn">Ben Adida</a>, <a href="http://creativecommons.org/" class="p-org org h-org h-card">Creative Commons</a>

<span property="dc:contributor" typeof="foaf:Person"></span>

<a href="http://markbirbeck.com/" class="u-url url p-name fn">Mark Birbeck</a>, <a href="https://github.com/sidewinderlabs" class="p-org org h-org h-card">Sidewinder Labs</a>

<span property="dc:contributor" typeof="foaf:Person"></span>

<a href="http://greggkellogg.net/pages/about" class="u-url url p-name fn">Gregg Kellogg</a>, <a href="http://kellogg-assoc.com/" class="p-org org h-org h-card">Kellogg Associates</a>

<span property="dc:contributor" typeof="foaf:Person"></span>

<a href="http://www.ivan-herman.net/foaf#me" class="u-url url p-name fn">Ivan Herman</a>, <a href="http://www.w3.org/" class="p-org org h-org h-card">W3C</a>

<span property="dc:contributor" typeof="foaf:Person"></span>

<a href="http://homepages.cwi.nl/~steven/" class="u-url url p-name fn">Steven Pemberton</a>, <a href="http://www.cwi.nl/" class="p-org org h-org h-card">CWI</a>

Please check the [**errata**](http://www.w3.org/2015/rdfa1.1-errata) for any errors or issues reported since publication.

This document is also available in this non-normative format: [diff to previous version](diff-20150317.html)

The English version of this specification is the only normative version. Non-normative [translations](http://www.w3.org/Consortium/Translation/) may also be available.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2009-2015 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span property="xhv:role" resource="xhv:heading">Abstract</span>
----------------------------------------------------------------

This specification defines rules and guidelines for adapting the RDFa Core 1.1 and RDFa Lite 1.1 specifications for use in HTML5 and XHTML5. The rules defined in this specification not only apply to HTML5 documents in non-XML and XML mode, but also to HTML4 and XHTML documents interpreted through the HTML5 parsing rules.

<span property="xhv:role" resource="xhv:heading">Status of This Document</span>
-------------------------------------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

This is an Editorial Revision of the [Recommendation published on the 22nd of August, 2013](http://www.w3.org/TR/2013/REC-html-rdfa-20130822/). See [the separate section](#changes) for the changes.

This specification is an extension to the HTML5 language. All normative content in the HTML5 specification, unless specifically overridden by this specification, is intended to be the basis for this specification.

The specification [makes use of the `rdf:HTML` datatype](#rdfhtml). This feature is non-normative, because the equality of the literal values depend on DOM4 \[<a href="#bib-dom4" class="bibref">dom4</a>\], a specification that has not yet reached W3C Recommendation status. See the relevant RDF 1.1 specification \[<a href="#bib-rdf11-concepts" class="bibref">rdf11-concepts</a>\] for further details.

A [sample test harness](http://rdfa.info/test-suite/) is available for software developers. This set of tests is not intended to be exhaustive. A [community-maintained website](http://rdfa.info/) contains more information on further reading, developer tools, and software libraries that can be used to extract and process RDFa data from web documents.

This document was published by the [RDFa Working Group](http://www.w3.org/2010/02/rdfa/) as a Recommendation. If you wish to make comments regarding this document, please send them to <public-rdfa-wg@w3.org> ([subscribe](mailto:public-rdfa-wg-request@w3.org?subject=subscribe), [archives](http://lists.w3.org/Archives/Public/public-rdfa-wg/)). All comments are welcome.

Please see the Working Group's [implementation report](http://www.w3.org/2010/02/rdfa/wiki/HTML5-ImplementationReport).

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

This document was produced by a group operating under the <a href="http://www.w3.org/Consortium/Patent-Policy-20040205/" id="sotd_patent">5 February 2004 W3C Patent Policy</a>. W3C maintains a [public list of any patent disclosures](http://www.w3.org/2004/01/pp-impl/44350/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

This document is governed by the <a href="http://www.w3.org/2005/10/Process-20051014/" id="w3c_process_revision">14 October 2005 W3C Process Document</a>.

<span property="xhv:role" resource="xhv:heading">Table of Contents</span>
-------------------------------------------------------------------------

-   <a href="#introduction" class="tocxref"><span class="secno">1. </span>Introduction</a>
-   <a href="#conformance" class="tocxref"><span class="secno">2. </span>Conformance</a>
    -   <a href="#document-conformance" class="tocxref"><span class="secno">2.1 </span>Document Conformance</a>
    -   <a href="#rdfa-processor-conformance" class="tocxref"><span class="secno">2.2 </span>RDFa Processor Conformance</a>
    -   <a href="#user-agent-conformance" class="tocxref"><span class="secno">2.3 </span>User Agent Conformance</a>
-   <a href="#extensions-to-rdfa-core-1.1" class="tocxref"><span class="secno">3. </span>Extensions to RDFa Core 1.1</a>
    -   <a href="#additional-rules" class="tocxref"><span class="secno">3.1 </span>Additional RDFa Processing Rules</a>
    -   <a href="#modifying-the-input-document" class="tocxref"><span class="secno">3.2 </span>Modifying the Input Document</a>
    -   <a href="#specifying-the-language-for-a-literal" class="tocxref"><span class="secno">3.3 </span>Specifying the Language for a Literal</a>
    -   <a href="#invalid-xmlliteral-values" class="tocxref"><span class="secno">3.4 </span>Invalid XMLLiteral Values</a>
    -   <a href="#property-copying" class="tocxref"><span class="secno">3.5 </span>Property Copying</a>
        -   <a href="#implementing-property-copying" class="tocxref"><span class="secno">3.5.1 </span>Implementing Property Copying</a>
-   <a href="#extensions-to-the-html5-syntax" class="tocxref"><span class="secno">4. </span>Extensions to the HTML5 Syntax</a>
-   <a href="#backwards-compatibility" class="tocxref"><span class="secno">5. </span>Backwards Compatibility</a>
    -   <a href="#xmlns--prefixed-attributes" class="tocxref"><span class="secno">5.1 </span><code>@xmlns:</code>-Prefixed Attributes</a>
    -   <a href="#conformance-criteria-for-xmlns--prefixed-attributes" class="tocxref"><span class="secno">5.2 </span>Conformance Criteria for <code>@xmlns:</code>-Prefixed Attributes</a>
    -   <a href="#preserving-namespaces-via-coercion-to-infoset" class="tocxref"><span class="secno">5.3 </span>Preserving Namespaces via Coercion to Infoset</a>
    -   <a href="#infoset-based-processors" class="tocxref"><span class="secno">5.4 </span>Infoset-based Processors</a>
        -   <a href="#extracting-uri-mappings-from-infosets" class="tocxref"><span class="secno">5.4.1 </span>Extracting URI Mappings from Infosets</a>
        -   <a href="#processing-rdfa-attributes" class="tocxref"><span class="secno">5.4.2 </span>Processing RDFa Attributes</a>
    -   <a href="#dom-level-1-and-level-2-based-processors" class="tocxref"><span class="secno">5.5 </span>DOM Level 1 and Level 2-based Processors</a>
        -   <a href="#extracting-uri-mappings-via-dom-level-2" class="tocxref"><span class="secno">5.5.1 </span>Extracting URI Mappings via DOM Level 2</a>
        -   <a href="#processing-rdfa-attributes-1" class="tocxref"><span class="secno">5.5.2 </span>Processing RDFa Attributes</a>
-   <a href="#about-this-document" class="tocxref"><span class="secno">A. </span>About this Document</a>
    -   <a href="#history" class="tocxref"><span class="secno">A.1 </span>History</a>
    -   <a href="#change-history-since-the-last-published-recommendation" class="tocxref"><span class="secno">A.2 </span>Change History Since the Last Published Recommendation</a>
    -   <a href="#acknowledgments" class="tocxref"><span class="secno">A.3 </span>Acknowledgments</a>
-   <a href="#references" class="tocxref"><span class="secno">B. </span>References</a>
    -   <a href="#normative-references" class="tocxref"><span class="secno">B.1 </span>Normative references</a>
    -   <a href="#informative-references" class="tocxref"><span class="secno">B.2 </span>Informative references</a>

<span property="xhv:role" resource="xhv:heading"><span class="secno">1. </span>Introduction</span>
--------------------------------------------------------------------------------------------------

*This section is non-normative.*

Today's web is built predominantly for human readers. Even as machine-readable data begins to permeate the web, it is typically distributed in a separate file, with a separate format, and very limited correspondence between the human and machine versions. As a result, web browsers can provide only minimal assistance to humans in parsing and processing web pages: browsers only see presentation information. RDFa is intended to solve the problem of marking up machine-readable data in HTML documents. RDFa provides a set of HTML attributes to augment visual data with machine-readable hints. Using RDFa, authors may turn their existing human-visible text and links into machine-readable data without repeating content.

<span property="xhv:role" resource="xhv:heading"><span class="secno">2. </span>Conformance</span>
-------------------------------------------------------------------------------------------------

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words *MAY*, *MUST*, *MUST NOT*, *RECOMMENDED*, *SHOULD*, and *SHOULD NOT* are to be interpreted as described in \[<a href="#bib-RFC2119" class="bibref">RFC2119</a>\].

### <span property="xhv:role" resource="xhv:heading"><span class="secno">2.1 </span>Document Conformance</span>

There are two types of document conformance criteria for HTML documents containing RDFa semantics; **HTML+RDFa** and **HTML+RDFa Lite**.

The following conformance criteria apply to any HTML document including RDFa markup:

-   All document conformance requirements stated as mandatory in the HTML5 specification *MUST* be met.
-   The appropriate [Extensions to the HTML5 Syntax](#extensions-to-the-html5-syntax), as described in this document, *MUST* be considered valid and conforming. Note that there are fewer supported attributes if the RDFa Lite syntax \[<a href="#bib-rdfa-lite" class="bibref">rdfa-lite</a>\] is desired over the more advanced set of RDFa attributes outlined in RDFa Core.
-   All HTML5 elements and attributes *SHOULD* be used in a way that conforms to \[<a href="#bib-html5" class="bibref">html5</a>\]. All RDFa attributes *SHOULD* be used in a way that is conforms to \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\] and this document.

An example of a conforming HTML+RDFa document, with the RDFa portions highlighted in green:

Example 1: Example of an HTML+RDFa 1.1 document

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Example Document</title>
      </head>
      <body vocab="http://schema.org/">
        <p typeof="Blog">
          Welcome to my <a property="url" href="http://example.org/">blog</a>.
        </p>
      </body>
    </html>

The following data will be extracted by a conforming RDFa processor, shown in Turtle format \[<a href="#bib-turtle" class="bibref">turtle</a>\]:

Example 2: Turtle output of Example Document

    [] a <http://schema.org/Blog>;
       <http://schema.org/url> <http://example.org/> .

Non-XML mode HTML+RDFa 1.1 documents *SHOULD* be labeled with the Internet Media Type `text/html` as defined in [section 12.1](http://www.w3.org/TR/html5/iana.html#text/html) of the HTML5 specification \[<a href="#bib-html5" class="bibref">html5</a>\].

XML mode XHTML5+RDFa 1.1 documents *SHOULD* be labeled with the Internet Media Type `application/xhtml+xml` as defined in [section 12.3](http://www.w3.org/TR/html5/iana.html#application/xhtml+xml) of the HTML5 specification \[<a href="#bib-html5" class="bibref">html5</a>\], *MUST NOT* use a `DOCTYPE` declaration for XHTML+RDFa 1.0 or XHTML+RDFa 1.1, and *SHOULD NOT* use the `@version` attribute.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">2.2 </span>RDFa Processor Conformance</span>

The RDFa processor conformance criteria are listed below, all of which are mandatory:

-   An RDFa processor *MUST* implement all of the mandatory features specified in the RDFa Core 1.1 specification \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\].
-   An RDFa processor *MUST* support any mandatory features described in this specification.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">2.3 </span>User Agent Conformance</span>

A user agent is considered to be a type of RDFa processor when the user agent stores or processes RDFa attributes and their values. The reason there are separate *RDFa Processor Conformance* and a *User Agent Conformance* sections is because one can be a valid HTML5 RDFa processor but not a valid HTML5 user agent (for example, by only providing a very small subset of rendering functionality).

The user agent conformance criteria are listed below, all of which are mandatory:

-   A user agent *MUST* conform to all requirements listed in [Section 2.2: Conformance Requirements](http://www.w3.org/TR/html5/infrastructure.html#conformance-requirements) of the HTML5 specification.
-   A user agent *MUST* implement all of the features required by this specification.
-   A user agent *MUST* implement all of the features required in the RDFa Core 1.1 specification, excluding those features which are specifically overridden by this specification as detailed in the [Extensions to RDFa Core 1.1](#extensions-to-rdfa-core-1.1).

<span property="xhv:role" resource="xhv:heading"><span class="secno">3. </span>Extensions to RDFa Core 1.1</span>
-----------------------------------------------------------------------------------------------------------------

The RDFa Core 1.1 \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\] specification is the base document on which this specification builds. RDFa Core 1.1 specifies the attributes and syntax, in [Section 5: Attributes and Syntax](http://www.w3.org/TR/rdfa-core/#s_syntax), and processing model, in [Section 7: Processing Model](http://www.w3.org/TR/rdfa-core/#s_model), for extracting RDF from a web document. This section specifies changes to the attributes and processing model defined in RDFa Core 1.1 in order to support extracting RDF from HTML documents.

The requirements and rules, as specified in RDFa Core and further extended in this document, apply to all HTML5 documents. An RDFa processor operating on both HTML and XHTML documents, specifically on their resulting DOMs or infosets, *MUST* apply these processing rules for HTML4, HTML5 and XHTML5 serializations, DOMs and/or infosets.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">3.1 </span>Additional RDFa Processing Rules</span>

Documents conforming to the rules in this specification are processed according to \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\] with the following extensions:

1.  The default vocabulary URI is undefined.
2.  HTML+RDFa uses an additional initial context by default, `http://www.w3.org/2011/rdfa-context/html-rdfa-1.1`, which must be applied after the initial context for \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\] (`http://www.w3.org/2011/rdfa-context/rdfa-1.1`).
3.  The <a href="http://www.w3.org/TR/rdfa-core/#T-base" class="tref" title="base">base</a> can be set using the `base` element. For XHTML5+RDFa 1.1 documents, <a href="http://www.w3.org/TR/rdfa-core/#T-base" class="tref" title="base">base</a> can also be set using the `@xml:base` attribute.
4.  The <a href="http://www.w3.org/TR/rdfa-core/#T-current-language" class="tref" title="current-language">current language</a> can be set using either the `@lang` or `@xml:lang` attributes. When the `@lang` attribute and the `@xml:lang` attribute are specified on the same element, the `@xml:lang` attribute takes precedence. When both `@lang` and `@xml:lang` are specified on the same element, they *MUST* have the same value. Further details related to setting the <a href="http://www.w3.org/TR/rdfa-core/#T-current-language" class="tref" title="current-language">current language</a> can be found in section <a href="#specifying-the-language-for-a-literal" class="sec-ref"><span class="secno">3.3</span> <span class="sec-title">Specifying the Language for a Literal</span></a>.
5.  When determining which set of RDFa processing rules to use for documents served with the `application/xhtml+xml` media type, a conforming RDFa processor *MUST* look at the value in the DOCTYPE declaration of the document. If a DOCTYPE declaration exists, then the processing rules are:
    -   XHTML1+RDFa 1.0 for a DOCTYPE of `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN" "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">`, or
    -   XHTML1+RDFa 1.1 for a DOCTYPE of `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.1//EN" "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-2.dtd">`, or
    -   XHTML5+RDFa 1.1 for all other values of DOCTYPE.

    Documents served as `application/xhtml+xml`, that don't contain a DOCTYPE declaration, and don't specify a `@version` attribute *MUST* be interpreted as XHTML5+RDFa 1.1 documents.
6.  In [Section 7.5: Sequence, processing step 3](http://www.w3.org/TR/rdfa-core/#PS-IRI-mappings), if the [processor graph](http://www.w3.org/TR/rdfa-core/#T-processor-graph) feature is supported and if an [IRI mapping](http://www.w3.org/TR/rdfa-core/#T-iri-mapping) overwrites a previously existing mapping in the [local list of IRI mappings](http://www.w3.org/TR/rdfa-core/#T-local-list-of-iri-mappings) with a different value, the processor *MUST* generate an appropriate [rdfa:PrefixRedefinition](http://www.w3.org/ns/rdfa.html) warning and place the associated triples into the [processor graph](http://www.w3.org/TR/rdfa-core/#T-processor-graph).
7.  In [Section 7.5: Sequence, immediately after processing step 4](http://www.w3.org/TR/rdfa-core/#PS-new-subject), if the `@property` attribute and the `@rel` and/or `@rev` attribute exists on the same element, the non-CURIE and non-URI `@rel` and `@rev` values are ignored. If, after this, the value of `@rel` and/or `@rev` becomes empty, then the processor *MUST* act as if the respective attribute is not present.
8.  In [Section 7.5, processing step 5](http://www.w3.org/TR/rdfa-core/#PS-new-subject), and [processing step 6](http://www.w3.org/TR/rdfa-core/#PS-new-subject-and-object), if no IRI is provided by a resource attribute (e.g., `@about`, `@href`, `@resource`, or `@src`), then first check to see if the element is the `head` or `body` element. If it is, then set [new subject](http://www.w3.org/TR/rdfa-core/#T-new-subject) to [parent object](http://www.w3.org/TR/rdfa-core/#T-parent-object).
9.  In [Section 7.5: Sequence, processing step 11](http://www.w3.org/TR/rdfa-core/#PS-current-object-literal), the [HTML5 `@datetime` attribute](http://www.w3.org/TR/html5/text-level-semantics.html#the-time-element) *MUST* be utilized when generating the current property value, unless `@content` is also present on the same element. Otherwise, if `@datetime` is present, the current property value must be generated as follows. The literal value is the value contained in the `@datetime` attribute. If `@datatype` is present, it is to be used as defined in the RDFa Core \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\] processing rules. Otherwise, if the value of `@datetime` lexically matches a valid `xsd:date`, `xsd:time`, `xsd:dateTime`, `xsd:duration`, `xsd:gYear`, or `xsd:gYearMonth` a typed literal must be generated, with its datatype set to the matching xsd datatype. Otherwise, a plain literal *MUST* be generated, taking into account the [current language](http://www.w3.org/TR/rdfa-core/#T-current-language). Implementers may want to use the following order of match testing: `xsd:duration`, `xsd:dateTime`, `xsd:date`, `xsd:time`, `xsd:gYearMonth`, and `xsd:gYear`.
10. In [Section 7.5: Sequence, processing step 11](http://www.w3.org/TR/rdfa-core/#PS-current-object-literal), if the element is `time`, and the element does not have `@datetime` or `@content` attributes, the processor *MUST* act as if there is a `@datetime` attribute containing exactly the element's text value.
11. <span id="rdfhtml">In [Section 7.5: Sequence, step 11, immediately after sub-step 2](http://www.w3.org/TR/rdfa-core/#PS-new-subject), if the `@datatype` attribute is present and evaluates to `http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML`, the value of the HTML Literal is a string created by serializing all child nodes to text. This applies to all nodes that are descendants of the [current element](http://www.w3.org/TR/rdfa-core/#T-current-element "current-element"), not including the element itself. The HTML Literal is given a datatype of `http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML` as defined in [Section 5.2: The rdf:HTML Datatype](http://www.w3.org/TR/rdf11-concepts/#section-html) of \[<a href="#bib-rdf11-concepts" class="bibref">rdf11-concepts</a>\]. This feature is non-normative, because the equality of the literal values depend on DOM4 \[<a href="#bib-dom4" class="bibref">dom4</a>\], a specification that has not yet reached W3C Recommendation status. See \[<a href="#bib-rdf11-concepts" class="bibref">rdf11-concepts</a>\] for further details.</span>
12. Once the <a href="http://www.w3.org/TR/rdfa-core/#T-output-graph" class="tref" title="output-graph">output graph</a> is generated following the processing steps defined in [Section 7.5: Sequence](http://www.w3.org/TR/rdfa-core/#s_sequence) of the RDFa Core 1.1 specification \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\], and the steps in this section, perform the operations defined in [Implementing Property Copying](#implementing-property-copying).

The `@version` attribute is not supported in HTML5 and is non-conforming. However, if an HTML+RDFa document contains the `@version` attribute on the `html` element, a conforming RDFa processor *MUST* examine the value of this attribute. If the value matches that of a defined version of RDFa, then the processing rules for that version *MUST* be used. If the value does not match a defined version, or there is no `@version` attribute, then the processing rules for the most recent version of RDFa 1.1 *MUST* be used.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">3.2 </span>Modifying the Input Document</span>

RDFa's tree-based processing rules, outlined in [Section 7.5: Sequence](http://www.w3.org/TR/rdfa-core/#s_sequence) of the RDFa Core 1.1 specification \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\], allow an input document to be automatically corrected, cleaned-up, re-arranged, or modified in any way that is approved by the host language prior to processing. Element nesting issues in HTML documents *SHOULD* be corrected before the input document is translated into the DOM, a valid tree-based model, on which the RDFa processing rules will operate.

Any mechanism that generates a data structure equivalent to the HTML5 or XHTML5 DOM, such as the html5lib library, *MAY* be used as the mechanism to construct the tree-based model provided as input to the RDFa processing rules.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">3.3 </span>Specifying the Language for a Literal</span>

According to RDFa Core 1.1 the <a href="http://www.w3.org/TR/rdfa-core/#T-current-language" class="tref" title="current-language">current language</a> *MAY* be specified by the host language. In order to conform to this specification, RDFa processors *MUST* use the mechanism described in *The lang and xml:lang attributes* section of the \[<a href="#bib-html5" class="bibref">html5</a>\] specification to determine the <a href="http://www.w3.org/TR/html5/dom.html#global-attributes" class="tref" title="language">language</a> of a node.

If the final encapsulating MIME type for an HTML fragment is not decided on while editing, it is *RECOMMENDED* that the author specify both `@lang` and `@xml:lang` where the value in both attributes is exactly the same.

Note

The HTML5 specification takes the `Content-Language` HTTP header into account when determining the language of an element. Some RDFa processor implementations, like those written in JavaScript, may not have access to this header and will be non-conforming in the edge case where the language is only specified in the `Content-Language` HTTP header. In these instances, RDFa document authors are urged to set the language in the document via the `@lang` attribute on the `html` element in order to ensure that the document is interpreted correctly across all RDFa processors.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">3.4 </span>Invalid XMLLiteral Values</span>

When generating literals of type XMLLiteral, the processor *MUST* ensure that the output XMLLiteral is a namespace well-formed XML fragment. A namespace well-formed XML fragment has the following properties:

-   The XML fragment, when placed inside of a single root element, *MUST* validate as well-formed XML. The normative language that describes a well-formed XML document is specified in [Section 2.1 "Well-Formed XML Documents"](http://www.w3.org/TR/REC-xml/#sec-well-formed) of the XML specification.
-   The XML fragment, when placed inside of a single root element, *MUST* retain all active namespace information. The currently active attributes declared using `@xmlns` and `@xmlns:` that are stored in the RDFa processor's current <a href="http://www.w3.org/TR/rdfa-core/#T-evaluation-context" class="tref" title="evaluation-context">evaluation context</a> in the <a href="http://www.w3.org/TR/rdfa-core/#T-iri-mapping" class="tref" title="iri-mappings">IRI mappings</a> *MUST* be preserved in the generated XMLLiteral. The *PREFIX* value for `@xmlns:PREFIX` *MUST* be entirely transformed into lower-case characters when preserving the value in the XMLLiteral. All active namespaces declared via `@xmlns`, `@xmlns:`, and `@prefix` *MUST* be placed in each top-level element in the generated XMLLiteral, taking care to not overwrite pre-existing namespace values.

An RDFa processor that transforms the XML fragment *MUST* use the [Coercing an HTML DOM into an infoset](http://www.w3.org/TR/html5/syntax.html#coercing-an-html-dom-into-an-infoset) algorithm, as specified in the HTML5 specification, followed by the algorithm defined in the [Serializing XHTML Fragments](http://www.w3.org/TR/html5/the-xhtml-syntax.html#serializing-xhtml-fragments) section of the HTML5 specification. If an error or exception occurs at any point during the transformation, the triple containing the XMLLiteral *MUST NOT* be generated.

Transformation to a namespace well-formed XML fragment is required because an application that consumes XMLLiteral data expects that data to be a namespace well-formed XML fragment.

The transformation requirement does not apply to plain text input data that are text-only, such as literals that contain a `@datatype` attribute with an empty value (`""`), or input data that contain only text nodes.

An example transformation demonstrating the preservation of namespace values is provided below. The → symbol is used to denote that the line is a continuation of the previous line and is included purely for the purposes of readability:

Example 3: Namespace preservation markup

    <p xmlns:ex="http://example.org/vocab#"
       xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
     Two rectangles (the example markup for them are stored in a triple):
     <svg xmlns="http://www.w3.org/2000/svg"
          property="ex:markup" datatype="rdf:XMLLiteral">
     →<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:1; stroke:rgb(0,0,0)"/>
     →<rect width="50" height="50" style="fill:rgb(255,0,0);stroke-width:2;stroke:rgb(0,0,0)"/></svg>
    </p>

The markup above *SHOULD* produce the following triple, which preserves the xmlns declaration in the markup by injecting the `@xmlns` attribute in the `rect` elements:

Example 4: Namespace preservation triple

    <>
       <http://example.org/vocab#markup>
          """<rect xmlns="http://www.w3.org/2000/svg" width="300"
    →height="100" style="fill:rgb(0,0,255);stroke-width:1; stroke:rgb(0,0,0)"/>
    →<rect xmlns="http://www.w3.org/2000/svg" width="50"
    →height="50" style="fill:rgb(255,0,0);stroke-width:2;
    →stroke:rgb(0,0,0)"/>"""^^<http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral> .

Since the `ex` and `rdf` namespaces are not used in either `rect` element, they are not preserved in the XMLLiteral.

Similarly, compound document elements that reside in different namespaces must have their namespace declarations preserved:

Example 5: Namespace preservation for compound document elements

    <p xmlns:ex="http://example.org/vocab#"
       xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
       xmlns:fb="http://www.facebook.com/2008/fbml">
     This is how you markup a user in FBML:
     <span property="ex:markup" datatype="rdf:XMLLiteral">
    →<span><fb:user uid="12345">The User</fb:user></span>
    →</span>
    </p>

The markup above *SHOULD* produce the following triple, which preserves the `fb` namespace in the corresponding triple:

Example 6: Namespace element preservation triple

    <>
       <http://example.org/vocab#markup>
          """<span xmlns:fb="http://www.facebook.com/2008/fbml">
    →<fb:user uid="12345"></fb:user>
    →</span>"""^^<http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral> .

### <span property="xhv:role" resource="xhv:heading"><span class="secno">3.5 </span>Property Copying</span>

There are times when authors will find that they have many resources on a page that share a common set of properties. For example, several music events may have different performance times, but use the same location, band, and ticket prices. In this particular case, it is beneficial to have a short-hand notation to instruct the RDFa processor to include the location, band, and ticket price information without having to repeat all of the markup that expresses the data.

HTML+RDFa defines a *property copying* mechanism which allows properties associated with a resource to be copied to another resource. This mechanism can be activated by using the `rdfa:copy` predicate. The feature is illustrated in the following two examples:

Example 7: Events with duplicate properties

    <div vocab="http://schema.org/">
      <p typeof="MusicEvent">
       <link property="image" href="Muse1.jpg"/>
       <link property="image" href="Muse2.jpg"/>
       <link property="image" href="Muse3.jpg"/>
       <span property="name">Muse</span> at the United Center.
       <time property="startDate" datetime="2013-03-03">March 3rd 2013</time>, 
       <a property="location" href="#united">United Center, Chicago, Illinois</a>
       ...
      </p>

      <p typeof="MusicEvent">
       <link property="image" href="Muse1.jpg"/>
       <link property="image" href="Muse2.jpg"/>
       <link property="image" href="Muse3.jpg"/>
       <span property="name">Muse</span> at the Target Center.
       <time property="startDate" datetime="2013-03-07">March 7th 2013</time>, 
       <a property="location" href="#target">Target Center, Minneapolis, Minnesota</a>
       ...
      </p>
    </div>

In this case, two music events are defined with *image*, *name*, *startDate*, and *location* properties. The *image* and *name* values are identical for the two events and are unnecessarily duplicated in the markup. Using RDFa's *property copying* feature, a *pattern* can be declared that expresses the common properties. This pattern can then be copied into other resources within the document:

Example 8: Copying common properties

    <div vocab="http://schema.org/">
      <div resource="#muse" typeof="rdfa:Pattern">
        <link property="image" href="Muse1.jpg"/>
        <link property="image" href="Muse2.jpg"/>
        <link property="image" href="Muse3.jpg"/>
        <span property="name">Muse</span>
      </div>

      <p typeof="MusicEvent">
        <link property="rdfa:copy" href="#muse"/>
        Muse at the United Center.
        <time property="startDate" datetime="2013-03-03">March 3rd 2013</time>, 
        <a property="location" href="#united">United Center, Chicago, Illinois</a>
        ...
      </p>

      <p typeof="MusicEvent">
        <link property="rdfa:copy" href="#muse"/>
        Muse at the Target Center.
        <time property="startDate" datetime="2013-03-07">March 7th 2013</time>, 
        <a property="location" href="#target">Target Center, Minneapolis, Minnesota</a>
        ...
      </p>
    </div>

In this case, the common properties for all of the events are expressed in the first `div`. The common properties are copied into each event resource via the `rdfa:copy` predicate. The output for the previous two examples is the same:

Example 9: Turtle output of property copying example

    @prefix schema: <http://schema.org/> .
    @prefix xsd: http://www.w3.org/2001/XMLSchema#> .

    [] a schema:MusicEvent;
       schema:image <Muse1.jpg>, <Muse2.jpg>, <Muse3.jpg>;
       schema:name "Muse";
       schema:startDate "2013-03-03"^^xsd:date;
       schema:location <#united> .

    [] a schema:MusicEvent;
       schema:image <Muse1.jpg>, <Muse2.jpg>, <Muse3.jpg>;
       schema:name "Muse";
       schema:startDate "2013-03-07"^^xsd:date;
       schema:location <#target> .

The copy process is iterative, so that resources may copy other resources that copy other resources. For example:

Example 10: Resources may copy other resources that copy other resources

    <div vocab="http://schema.org/">
      <div typeof="Person">
        <link property="rdfa:copy" href="#lennon"/>
        <link property="rdfa:copy" href="#band"/>
      </div>
      <p resource="#lennon" typeof="rdfa:Pattern"> 
        Name: <span property="name">John Lennon</span>
      <p>
      <div resource="#band" typeof="rdfa:Pattern">
        <div property="band" typeof="MusicGroup">
          <link property="rdfa:copy" href="#beatles"/>
        </div>
      </div>
      <div resource="#beatles" typeof="rdfa:Pattern">
        <p>Band: <span property="name">The Beatles</span></p>
        <p>Size: <span property="size">4</span> players</p>
      </div>
    </div>

In the example above, the properties from `#lennon` and `#band` are copied into the first resource. Then the properties from `#beatles` are copied into `#band`. Subsequently, those properties are again copied into the first resource yielding the following output:

Example 11: Iterative copying example output in Turtle

    @prefix schema: <http://schema.org/> .

    [ a schema:Person;
      schema:name "John Lennon" ;
      schema:band [
        a schema:MusicGroup;
        schema:name "The Beatles";
        schema:size "4"
      ]
    ] .

Similar to [Vocabulary Expansion](http://www.w3.org/TR/rdfa-core/#s_vocab_expansion) as defined in \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\], RDFa Property Copying operates on the <a href="http://www.w3.org/TR/rdfa-core/#T-output-graph" class="tref" title="output-graph">output graph</a> after document processing is complete.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">3.5.1 </span>Implementing Property Copying</span>

Once the <a href="http://www.w3.org/TR/rdfa-core/#T-output-graph" class="tref" title="output-graph">output graph</a> is generated following the processing steps defined in [Section 7.5: Sequence](http://www.w3.org/TR/rdfa-core/#s_sequence) of the RDFa Core 1.1 specification \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\], and the [Extensions to the HTML5 Syntax](#extensions-to-the-html5-syntax) defined in this specification, processors *MUST* update the <a href="http://www.w3.org/TR/rdfa-core/#T-output-graph" class="tref" title="output-graph">output graph</a> using the following rules:

1.  Run the following rule for each `rdfa:copy` statement in the <a href="http://www.w3.org/TR/rdfa-core/#T-output-graph" class="tref" title="output-graph">output graph</a>, and for each new `rdfa:copy` statement added as a result of property copying until no new triples are added to the <a href="http://www.w3.org/TR/rdfa-core/#T-output-graph" class="tref" title="output-graph">output graph</a>:
    <table><thead><tr class="header"><th>Rule name</th><th>If output graph contains</th><th>then add</th></tr></thead><tbody><tr class="odd"><td>pattern-copy</td><td>?subject rdfa:copy ?target<br />
    ?target rdf:type rdfa:Pattern<br />
    ?target ?predicate ?object</td><td>?subject ?predicate ?object</td></tr></tbody></table>

2.  Finally, run this rule to remove utilized `rdfa:copy` statements and `rdfa:Pattern` resources from the <a href="http://www.w3.org/TR/rdfa-core/#T-output-graph" class="tref" title="output-graph">output graph</a>:
    <table><thead><tr class="header"><th>Rule name</th><th>If output graph contains</th><th>then remove</th></tr></thead><tbody><tr class="odd"><td>pattern-clean</td><td>?subject rdfa:copy ?target<br />
    ?target rdf:type rdfa:Pattern<br />
    ?target ?predicate ?object</td><td>?subject rdfa:copy ?target<br />
    ?subject rdf:type rdfa:Pattern<br />
    ?target ?predicate ?object</td></tr></tbody></table>

Note

Implementers should be aware that a simplistic implementation of the *pattern-copy* rule may lead to an infinite loop when handling circular dependencies. A processor should cease the *pattern-copy* rule when no unique triples are generated.

Note

Alternate rules may be used to update the output graph as long as the end result is the same.

<span property="xhv:role" resource="xhv:heading"><span class="secno">4. </span>Extensions to the HTML5 Syntax</span>
--------------------------------------------------------------------------------------------------------------------

There are a few attributes that are added as extensions to the HTML5 syntax in order to fully support RDFa:

-   If HTML+RDFa Lite document conformance is desired, all RDFa attributes and valid values (including CURIEs), as listed in [RDFa Lite 1.1, Section 2: The Attributes](http://www.w3.org/TR/rdfa-lite/#the-attributes), *MUST* be allowed and validate as conforming when used in an HTML4, HTML5 or XHTML5 document. For the avoidance of doubt, the following RDFa attributes are allowed on all elements in the HTML5 content model: `@vocab`, `@typeof`, `@property`, `@resource`, and `@prefix`. All other attributes that RDFa may process, such as `@href` and `@src`, are only allowed when consistent with the content model for that element, as defined in the HTML5 specification.
-   If HTML+RDFa document conformance is desired, all RDFa attributes and valid values (including CURIEs), as listed in [RDFa Core 1.1, Section 2.1: The RDFa Attributes](http://www.w3.org/TR/rdfa-core/#rdfa-attributes), *MUST* be allowed and validate as conforming when used in an HTML4, HTML5 or XHTML5 document. For the avoidance of doubt, the following RDFa attributes are allowed on all elements in the HTML5 content model: `@vocab`, `@typeof`, `@property`, `@resource`, `@prefix`, `@content`, `@about`, `@rel`, `@rev`, `@datatype`, and `@inlist`. All other attributes that RDFa may process, such as `@href` and `@src`, are only allowed when consistent with the content model for that element, as defined in the HTML5 specification.
-   If the `@property` RDFa attribute is present on the `link` or `meta` elements, they *MUST* be viewed as conforming if used in the `body` of the document. More specifically, when `link` or `meta` elements contain the RDFa `@property` attribute and are used in the `body` of an HTML5 document, they *MUST* be considered [flow content](http://www.w3.org/TR/html5/dom.html#flow-content).
-   If the RDFa `@property` attribute is present on the `link` element, the `@rel` attribute is not required.
-   If the RDFa `@resource` attribute is present on the `link` element, the `@href` attribute is not required.
-   If the RDFa `@property` attribute is present on the `meta` element, neither the `@name`, `@http-equiv`, nor `@charset` attributes are required and the `@content` attribute *MUST* be specified.

<span property="xhv:role" resource="xhv:heading"><span class="secno">5. </span>Backwards Compatibility</span>
-------------------------------------------------------------------------------------------------------------

RDFa Core 1.1 deprecates the usage of `@xmlns:` in RDFa 1.1 documents. Web page authors *SHOULD NOT* use `@xmlns:` to express prefix mappings in RDFa 1.1 documents. Web page authors *SHOULD* use the `@prefix` attribute to specify prefix mappings.

However, there are times when XHTML+RDFa 1.0 documents are served by web servers using the `text/html` MIME type. In these instances, the HTML5 specification asserts that the document is processed according to the non-XML mode HTML5 processing rules. In these particular cases, it is important that the prefixes declared via `@xmlns:` are preserved for the RDFa processors to ensure backwards-compatibility with RDFa 1.0 documents. The following sections elaborate upon the backwards compatibility requirements for RDFa processor implementations.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.1 </span>`@xmlns:`-Prefixed Attributes</span>

The RDFa Core 1.1 \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\] specification deprecates the use of the `@xmlns:` mechanism to declare CURIE prefix mappings in favor of the `@prefix` attribute. However, there are instances where its use is unavoidable. For example, publishing legacy documents as HTML5 or supporting older XHTML+RDFa 1.0 documents that rely on the `@xmlns:` attribute.

CURIE prefix mappings specified using attributes prepended with `@xmlns:` *MUST* be processed using the algorithm defined in section 4.4.1: [Extracting URI Mappings from Infosets](#extracting-uri-mappings-from-infosets) for infoset-based processors, or section 4.5.1: [Extracting URI Mappings from DOMs](#extracting-uri-mappings-via-dom-level-2) for DOM Level 2-based processors. For CURIE prefix mappings using the `@prefix` attribute, [Section 7.5: Sequence, step 3](http://www.w3.org/TR/rdfa-core/#PS-IRI-mappings) *MUST* be used to process namespace values.

Since CURIE prefix mappings have been specified using `@xmlns:`, and since HTML attribute names are case-insensitive, CURIE prefix names declared using the `@xmlns:`attribute-name pattern `xmlns:<PREFIX>="<URI>"` *SHOULD* be specified using only lower-case characters. For example, the text "`@xmlns:`" and the text in `"<PREFIX>"` *SHOULD* be lower-case only. This is to ensure that prefix mappings are interpreted in the same way between HTML (case-insensitive attribute names) and XHTML (case-sensitive attribute names) document types.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2 </span>Conformance Criteria for `@xmlns:`-Prefixed Attributes</span>

Since RDFa 1.0 documents may contain attributes starting with `@xmlns:` to specify CURIE prefixes, any attribute starting with a case-insensitive match on the text string "`@xmlns:`" *MUST* be preserved in the DOM or other tree-like model that is passed to the RDFa Processor. For documents conforming to this specification, attributes with names that have a case insensitive prefix matching "`@xmlns:`" *MUST* be considered conforming. Conformance checkers *SHOULD* accept attribute names that have a case insensitive prefix matching "`@xmlns:`" as conforming. Conformance checkers *SHOULD* generate warnings noting that the use of `@xmlns:` is deprecated. Conformance checkers *MAY* report the use of xmlns: as an error.

All attributes starting with a case insensitive prefix matching "`@xmlns:`" *MUST* conform to the production rules outlined in Namespaces in XML \[<a href="#bib-xml-names11" class="bibref">xml-names11</a>\], [Section 3: Declaring Namespaces](http://www.w3.org/TR/xml-names11/#ns-decl). Documents that contain `@xmlns:` attributes that do not conform to Namespaces in XML *MUST NOT* be accepted as conforming.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.3 </span>Preserving Namespaces via Coercion to Infoset</span>

RDFa 1.0 documents may contain the `@xmlns:` pattern to declare prefix mappings, it is important that namespace information that is declared in non-XML mode HTML5 documents are mapped to an infoset correctly. In order to ensure this mapping is performed correctly, the "Coercing an HTML DOM into an infoset" rules defined in \[<a href="#bib-html5" class="bibref">html5</a>\] must be extended to include the following rule:

If the XML API is namespace-aware, the tool must ensure that (\[[namespace name](http://www.w3.org/TR/xml-infoset/#infoitem.attribute)\], \[[local name](http://www.w3.org/TR/xml-infoset/#infoitem.attribute)\], \[[normalized value](http://www.w3.org/TR/xml-infoset/#infoitem.attribute)\]) namespace tuples are created when converting the non-XML mode DOM into an infoset. Given a standard `@xmlns:` definition, `xmlns:foo="http://example.org/bar#"`, the \[namespace name\] is `http://www.w3.org/2000/xmlns/`, the \[local name\] is `foo`, and the \[normalized value\] is `http://example.org/bar#`, thus the namespace tuple would be (`http://www.w3.org/2000/xmlns/`, `foo`, `http://example.org/bar#`).

For example, given the following input text:

Example 12

    <div xmlns:com="https://w3id.org/commerce#">

The `div` element above, when coerced from an HTML DOM into an infoset, should contain an attribute in the \[[namespace attributes](http://www.w3.org/TR/xml-infoset/#infoitem.element)\] list with a \[namespace name\] set to "`http://www.w3.org/2000/xmlns/`", a \[local name\] set to `com`, and a \[normalized value\] of "`https://w3id.org/commerce#`".

### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.4 </span>Infoset-based Processors</span>

While the intent of the RDFa processing instructions is to provide a set of rules that are as language and toolchain independent as possible, for the sake of clarity, detailed methods of extracting RDFa content from processors operating on an XML Information Set are provided below.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.4.1 </span>Extracting URI Mappings from Infosets</span>

Extracting URI Mappings declared via `@xmlns:` while operating from within an infoset-based RDFa processor can be achieved using the following algorithm:

While processing an element as described in \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\], [Section 7.5: Sequence](http://www.w3.org/TR/rdfa-core/#s_sequence), Step \#2:

1.  For each attribute in the \[[namespace attributes](http://www.w3.org/TR/xml-infoset/#infoitem.element)\] list that has a \[[prefix](http://www.w3.org/TR/xml-infoset/#infoitem.attribute)\] value, create an \[[IRI mapping](http://www.w3.org/TR/rdfa-core/#T-iri-mapping)\] by storing the \[prefix\] as the value to be mapped, and the \[[normalized value](http://www.w3.org/TR/xml-infoset/#infoitem.attribute)\] as the value to map.
2.  For each attribute in the \[[attributes](http://www.w3.org/TR/xml-infoset/#infoitem.element)\] list that has no value for \[[prefix](http://www.w3.org/TR/xml-infoset/#infoitem.attribute)\] and a \[[local name](http://www.w3.org/TR/xml-infoset/#infoitem.attribute)\] that starts with `@xmlns:`, create an \[[IRI mapping](http://www.w3.org/TR/rdfa-core/#T-iri-mapping)\] by storing the \[local name\] part with the `@xmlns:` characters removed as the value to be mapped, and the \[[normalized value](http://www.w3.org/TR/xml-infoset/#infoitem.attribute)\] as the value to map.
    Note

    This step is unnecessary if the infoset coercion rules preserve namespaces specified in non-XML mode.

For example, assume that the following markup is processed by an infoset-based RDFa processor:

Example 13

    <div xmlns:ps="https://w3id.org/payswarm#" ...

After the markup is processed, there should exist a \[URI mapping\] in the \[local list of URI mappings\] that contains a mapping from `ps` to `https://w3id.org/payswarm#`.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.4.2 </span>Processing RDFa Attributes</span>

There are a number of non-prefixed attributes that are associated with RDFa Processing in HTML5. If an XML Information Set based RDFa processor is used to process these attributes, the following algorithm should be used to detect and extract the values of the attributes.

While processing Infoset Attribute Information Items in Element Information Items as described in \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\], [Section 7.5: Sequence, Step \#4 through Step \#9](http://www.w3.org/TR/rdfa-core/#s_sequence):

1.  For each Attribute Information Item specific to RDFa in the infoset \[[attributes](http://www.w3.org/TR/xml-infoset/#infoitem.attribute)\] list that has a \[[prefix](http://www.w3.org/TR/xml-infoset/#infoitem.attribute)\] with no value, extract and use the \[[normalized value](http://www.w3.org/TR/xml-infoset/#infoitem.attribute)\].

### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.5 </span>DOM Level 1 and Level 2-based Processors</span>

Most DOM-aware RDFa processors are capable of accessing DOM Level 1 \[<a href="#bib-dom-level-1" class="bibref">dom-level-1</a>\] methods to process attributes on elements. To discover all `@xmlns:`-specified CURIE prefix mappings, the [Node.attributes](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-1950641247) [NamedNodeMap](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-1780488922) can be iterated over. Each [Attr.name](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-637646024) that starts with the text string `@xmlns:` specifies a CURIE prefix mapping. The value to be mapped is the string after the `@xmlns:` substring in the Attr.name variable and the value to be mapped is the value of the Attr.value variable.

The intent of the RDFa processing instructions are to provide a set of rules that are as language and toolchain independent as possible. If a developer chooses to not use the DOM1 environment mechanism outlined in the previous paragraph, they may use the following DOM2 \[<a href="#bib-dom-level-2-core" class="bibref">dom-level-2-core</a>\] environment mechanism.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.5.1 </span>Extracting URI Mappings via DOM Level 2</span>

Extracting URI Mappings declared via `@xmlns:` while operating from within a DOM Level 2 based RDFa processor can be achieved using the following algorithm:

While processing each DOM2 \[[Element](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-745549614)\] as described in \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\], [Section 7.5: Sequence, Step \#2](http://www.w3.org/TR/rdfa-core/#s_sequence):

1.  For each \[[Attr](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-745549614)\] in the \[[Node.attributes](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247)\] list that has a \[[namespace prefix](http://www.w3.org/TR/DOM-Level-2-Core/glossary.html#dt-namespaceprefix)\] value of `@xmlns`, create an \[[IRI mapping](http://www.w3.org/TR/rdfa-core/#T-iri-mapping)\] by storing the \[[local name](http://www.w3.org/TR/DOM-Level-2-Core/glossary.html#dt-localname)\] as the value to be mapped, and the \[[Node.nodeValue](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D080)\] as the value to map.
2.  For each \[[Attr](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-745549614)\] in the \[[Node.attributes](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247)\] list that has a \[[namespace prefix](http://www.w3.org/TR/DOM-Level-2-Core/glossary.html#dt-namespaceprefix)\] value of null and a \[[local name](http://www.w3.org/TR/DOM-Level-2-Core/glossary.html#dt-localname)\] that starts with `@xmlns:`, create an \[[IRI mapping](http://www.w3.org/TR/rdfa-core/#T-iri-mapping)\] by storing the \[local name\] part with the `@xmlns:` characters removed as the value to be mapped, and the \[[Node.nodeValue](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D080)\] as the value to map.
    Note

    This step is unnecessary if the XML and non-XML mode DOMs are namespace consistent.

For example, assume that the following markup is processed by a DOM2-based RDFa processor:

Example 14

    <div xmlns:com="https://w3id.org/commerce#" ...

After the markup is processed, there should exist a \[URI mapping\] in the \[local list of URI mappings\] that contains a mapping from `com` to `https://w3id.org/commerce#`.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.5.2 </span>Processing RDFa Attributes</span>

There are a number of non-prefixed attributes that are associated with RDFa processing in HTML5. If an DOM2-based RDFa processor is used to process these attributes, the following algorithm should be used to detect and extract the values of the attributes.

While processing an element as described in \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\], [Section 5.5: Sequence, Step \#3 through Step \#9](http://www.w3.org/TR/rdfa-core/#PS-IRI-mappings):

1.  For each RDFa attribute in the \[[Node.attributes](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247)\] list that has a \[[namespace prefix](http://www.w3.org/TR/DOM-Level-2-Core/glossary.html#dt-namespaceprefix)\] that is null, extract and use \[[Node.nodeValue](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D080)\] as the value.

Note

When extracting values from `@href` and `@src`, web authors and developers should note that certain values *MAY* be transformed if accessed via the DOM versus a non-DOM processor. The rules for modification of URL values can be found in the main HTML5 specification under [Section 2.5: URLs](http://www.w3.org/TR/html5/infrastructure.html#urls).

<span property="xhv:role" resource="xhv:heading"><span class="secno">A. </span>About this Document</span>
---------------------------------------------------------------------------------------------------------

### <span property="xhv:role" resource="xhv:heading"><span class="secno">A.1 </span>History</span>

*This section is non-normative.*

In early 2004, Mark Birbeck published a document named "RDF in XHTML" via the XHTML2 Working Group wherein he laid the groundwork for what would eventually become RDFa (The Resource Description Framework in Attributes).

In 2006, the work was co-sponsored by the Semantic Web Deployment Working Group, which began to formalize a technology to express semantic data in XHTML. This technology was successfully developed and reached consensus at the W3C, later published as an official W3C Recommendation. While HTML provides a mechanism to express the structure of a document (title, paragraphs, links), RDFa provides a mechanism to express the meaning in a document (people, places, events).

The document, titled "RDF in XHTML: Syntax and Processing" \[xhtml-rdfa\], defined a set of attributes and rules for processing those attributes that resulted in the output of machine-readable semantic data. While the document applied to XHTML, the attributes and rules were always intended to operate across any tree-based structure containing attributes on tree nodes (such as HTML4, SVG and ODF).

While RDFa was initially specified for use in XHTML, adoption by a number of large organizations on the web spurred RDFa's use in non-XHTML languages. Its use in HTML4, before an official specification was developed for those languages, caused concern regarding document conformance.

Over the years, the members of the [RDFa Community](http://rdfa.info/) had discussed the possibility of applying the same attributes and processing rules outlined in the XHTML+RDFa specification to all HTML family documents. By design, the possibility of a unified semantic data expression mechanism between all HTML and XHTML family documents was squarely in the realm of possibility.

An RDFa Working Group was created in 2010 to address the issues concerning multiple language implementations of RDFa. The XHTML+RDFa document was split into a base specification, called RDFa Core 1.1 \[<a href="#bib-rdfa-core" class="bibref">rdfa-core</a>\], and *thin* specifications that layer above RDFa Core 1.1. The XHTML+RDFa 1.1 specification \[<a href="#bib-xhtml-rdfa" class="bibref">xhtml-rdfa</a>\] is an example of such a *thin* specification. This document, also a *thin* specification, is targeted at HTML4, HTML5 and XHTML5.

This document describes the extensions to the RDFa Core 1.1 specification that permits the use of RDFa in all HTML family documents. By using the attributes and processing rules described in the RDFa Core 1.1 specification and heeding the minor changes in this document, authors can generate markup that produces the same semantic data output in HTML4, HTML5 and XHTML5.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">A.2 </span>Change History Since the Last Published Recommendation</span>

*This section is non-normative.*

2014-12-16: With the publication of \[<a href="#bib-html5" class="bibref">html5</a>\] as a Recommendation, the usage of `@datetime` is now normative. The corresponding note in the processing steps have been removed.

2014-12-16: With the publication of \[<a href="#bib-rdf11-concepts" class="bibref">rdf11-concepts</a>\] as a Recommendation, the usage of `rdf:HTML` remains non-normative. The corresponding note about a possible normative status in the processing steps has been removed; a clarification note has been added to the usage of the datatype, referring to the dependecy on \[<a href="#bib-dom4" class="bibref">dom4</a>\].

2014-12-16: The note in the Status Section on the non-normative nature of `@datetime` and `rdf:HTML` has been removed, but a paragraph on the non-normative nature of `rdf:HTML` and a clarification has been added.

2014-12-16: References to \[<a href="#bib-html5" class="bibref">html5</a>\] and \[<a href="#bib-rdf11-concepts" class="bibref">rdf11-concepts</a>\], as well as to the other RDFa documents, have been updated to the latest (PER) versions.

2014-12-16: The style of the references have been updated to the latest `respec` style

### <span property="xhv:role" resource="xhv:heading"><span class="secno">A.3 </span>Acknowledgments</span>

*This section is non-normative.*

At the time of publication, the members of the RDFa Working Group were:

Ivan Herman (staff contact), Shane McCarron, Gregg Kellogg, Niklas Lindström, Steven Pemberton, Manu Sporny (chair), Ted Thibodeau, and Stéphane Corlosquet.

A great deal of thanks to everyone that provided feedback on the specification (most of whom are listed below):

Adam Powell, Alex Milowski, Andy Seaborne, Arto Bendiken, Austin William, BAI Xi, Benjamin Adrian, Benjamin Nowack, Bjoern Hoehrmann, Christian Langanke, Christoph Lange, Cindy Lewis, Corey Mwamba, Crisfer Inmobiliaria, Dan Brickley, Daniel Friesen, Dave Beckett, David Wood, D. Grant, Dominik Tomaszuk, Dominique Hazael-Massieux, Doug Schepers, Dr. Olaf , Theresa O'Connor, Faye Harris, Felix Sasaki, Gavin Carothers, Grant Robertson, Guus Schreiber, Harry Halpin, Michael Hausenblas, Henri Bergius, Henri Sivonen, Henry Story, Holger Knublauch, Ian Hickson, Irene Celino, Alexander Kroener, Knud Möller, Philip Jägenstedt, Reto Bachmann-Gmür, Ivan Mikhailov, James Leigh, Jeff Sonstein, Jeni Tennison, Jens Haupert, Jochen Rau, John Breslin, John Cowan, John O'Donovan, Jonathan Rees, Julian Reschke, KANZAKI Masahide, Kingsley Idehen, Knud Hinnerk, Landong Zuo, Leif Halvard Silli, Liam R., Lin Clark, Maciej Stachowiak, Mark Nottingham, Markus Gylling, Martin Hepp, Martin McEvoy, Matthias Tylkowski, Darin McBeath, Melvin Carvalho, Michael Chan, Michael Hausenblas, Michael Steidl, Michael™ Smith, Mischa Tuffield, Misha Wolf, Nathan Rixham, Nathan Yergler, Nicholas Stimpson, Noah Mendelsohn, Paul Cotton, Paul Sparrow, Pete Cordell, Peter Frederick, Peter Mika, Peter Occil, Phil Archer, Reece Dunn, Richard Cyganiak, Robert Leif, Robert Weir, Ramanathan V. Guha, Sami Korhonen, Sam Ruby, Sandro Hawke, Sebastian Germesin, Sebastian Heath, Shelley Powers, Simon Grant, Simon Reinhardt, Stefan Schumacher, Tab Atkins Jr., Thomas Adamich, Thomas Baker, Thomas Roessler, Thomas Steiner, Tim Berners-Lee, Toby Inkster, Tom Adamich, Tantek Çelik, Ville Skyttä, Wayne Smith, and Will Clark

<span property="xhv:role" resource="xhv:heading"><span class="secno">B. </span>References</span>
------------------------------------------------------------------------------------------------

### <span property="xhv:role" resource="xhv:heading"><span class="secno">B.1 </span>Normative references</span>

\[RFC2119\]  
S. Bradner. [Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

\[dom-level-1\]  
Scott Isaacson; Steven B Byrne; Mike Champion; Ian Jacobs; Arnaud Le Hors; Gavin Nicol; Jonathan Robie; Robert S Sutor; Chris Wilson; Lauren Wood et al. [Document Object Model (DOM) Level 1](http://www.w3.org/TR/DOM-Level-1/). 29 September 2000. W3C Working Draft. URL: <http://www.w3.org/TR/DOM-Level-1/>

\[dom-level-2-core\]  
Arnaud Le Hors; Philippe Le Hégaret; Lauren Wood; Gavin Nicol; Jonathan Robie; Mike Champion; Steven B Byrne et al. [Document Object Model (DOM) Level 2 Core Specification](http://www.w3.org/TR/DOM-Level-2-Core/). 13 November 2000. W3C Recommendation. URL: <http://www.w3.org/TR/DOM-Level-2-Core/>

\[html5\]  
Ian Hickson; Robin Berjon; Steve Faulkner; Travis Leithead; Erika Doyle Navara; Theresa O'Connor; Silvia Pfeiffer. [HTML5](http://www.w3.org/TR/html5/). 28 October 2014. W3C Recommendation. URL: <http://www.w3.org/TR/html5/>

\[rdfa-core\]  
Ben Adida; Mark Birbeck; Shane McCarron; Ivan Herman et al. [RDFa Core 1.1 - Third Edition: Syntax and processing rules for embedding RDF through attributes](http://www.w3.org/TR/rdfa-core). 17 March 2015. W3C Recommendation. URL: <http://www.w3.org/TR/rdfa-core/>

\[rdfa-lite\]  
Manu Sporny. [RDFa Lite 1.1 - Second Edition](http://www.w3.org/TR/rdfa-lite). 17 March 2015. W3C Recommendation. URL: <http://www.w3.org/TR/rdfa-lite/>

\[xml-names11\]  
Tim Bray; Dave Hollander; Andrew Layman; Richard Tobin et al. [Namespaces in XML 1.1 (Second Edition)](http://www.w3.org/TR/xml-names11/). 16 August 2006. W3C Recommendation. URL: <http://www.w3.org/TR/xml-names11/>

### <span property="xhv:role" resource="xhv:heading"><span class="secno">B.2 </span>Informative references</span>

\[dom4\]  
Anne van Kesteren; Aryeh Gregor; Ms2ger; Alex Russell; Robin Berjon. [W3C DOM4](http://www.w3.org/TR/dom/). 10 July 2014. W3C Last Call Working Draft. URL: <http://www.w3.org/TR/dom/>

\[rdf11-concepts\]  
Richard Cyganiak; David Wood; Markus Lanthaler. [RDF 1.1 Concepts and Abstract Syntax](http://www.w3.org/TR/rdf11-concepts/). 25 February 2014. W3C Recommendation. URL: <http://www.w3.org/TR/rdf11-concepts/>

\[turtle\]  
Eric Prud'hommeaux; Gavin Carothers. [RDF 1.1 Turtle](http://www.w3.org/TR/turtle/). 25 February 2014. W3C Recommendation. URL: <http://www.w3.org/TR/turtle/>

\[xhtml-rdfa\]  
Shane McCarron. [XHTML+RDFa 1.1 - Third Edition](http://www.w3.org/TR/xhtml-rdfa/). 17 March 2015. W3C Recommendation. URL: <http://www.w3.org/TR/xhtml-rdfa/>
