[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

Discussion of Alternative Schema Languages and Type System Support in WSDL 2.0
==============================================================================

W3C Working Group Note 17 August 2005
-------------------------------------

This version:  
<http://www.w3.org/TR/2005/NOTE-wsdl20-altschemalangs-20050817>

Latest version:  
<http://www.w3.org/TR/wsdl20-altschemalangs>

Editors:  
Amelia A. Lewis, TIBCO Software, Inc.

Bijan Parsia, Maryland Information and Network Dynamics Laboratory at the University of Maryland at College Park

This document is also available in these non-normative formats: [PDF](wsdl20-altschemalangs.pdf), [PostScript](wsdl20-altschemalangs.ps), [XML](wsdl20-altschemalangs.xml), and [plain text](wsdl20-altschemalangs.txt).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2005 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span id="abstract">Abstract</span>
-----------------------------------

This document captures the result of discussions by the Web Services Description Working Group regarding WSDL 2.0 type system extensibilty at the time of its publication. The Working Group normatively defines the use of XML Schema 1.0 as a type system in the WSDL 2.0 Core specification. This document sketches out the basics of extensions for Document Type Definitions (DTDs) and Relax NG.

<span id="status">Status of this Document</span>
------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

This document is a [W3C Working Group Note](http://www.w3.org/2004/02/Process-20040205/tr.html#q74). It has been produced by the [Web Services Description Working Group](http://www.w3.org/2002/ws/desc/), which is part of the [Web Services Activity](http://www.w3.org/2002/ws/Activity).

The material in this note was previously published as an Appendix of the [Web Services Description Language (WSDL) 2.0: Core Language Last Call](http://www.w3.org/TR/2005/WD-wsdl20-20050510) specification. In response to Last Call comments, the Working Group agreed to remove this material from that specification and publish it separately as a Working Group Note. Current versions of [WSDL 2.0 Core](http://www.w3.org/TR/wsdl20) no longer contain this material. This publication differs from the previous material in that it also includes some expanded discussion of issues that should be given consideration by type system extension designers.

No further work on this topic is planned at this point. Errors in this document can be reported to the public <public-ws-desc-comments@w3.org> mailing list ([public archive](http://lists.w3.org/Archives/Public/public-ws-desc-comments/)).

Publication as a Working Group Note does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.

------------------------------------------------------------------------

<span id="shortcontents">Short Table of Contents</span>
-------------------------------------------------------

1. [Introduction](#intro)  
2. [Issues facing multiple schema languages/type systems](#multipleschemalangs)  
3. [Examples of Specifications of Extension Elements for Alternative Schema Language Support](#examples)  
A. [References](#References)  
B. [Acknowledgements](#acknowledgments) (Non-Normative)  

------------------------------------------------------------------------

<span id="contents">Table of Contents</span>
--------------------------------------------

1. [Introduction](#intro)  
2. [Issues facing multiple schema languages/type systems](#multipleschemalangs)  
3. [Examples of Specifications of Extension Elements for Alternative Schema Language Support](#examples)  
    3.1 [DTD](#dtd)  
        3.1.1 [namespace attribute information item](#dtd-namespaceaii)  
        3.1.2 [location attribute information item](#dtd-locationaii)  
        3.1.3 [References to Element Definitions](#dtd-ref)  
    3.2 [RELAX NG](#relax)  
        3.2.1 [Importing RELAX NG](#import-relax)  
            3.2.1.1 [ns attribute information item](#relax-import-nsaii)  
            3.2.1.2 [href attribute information item](#relax-import-hrefaii)  
        3.2.2 [Embedding RELAX NG](#relax-embed)  
            3.2.2.1 [ns attribute information item](#relax-embed-nsaii)  
        3.2.3 [References to Element Declarations](#relax-ref)  

### <span id="appendix">Appendices</span>

A. [References](#References)  
B. [Acknowledgements](#acknowledgments) (Non-Normative)  

------------------------------------------------------------------------

<span id="intro"></span>1. Introduction
---------------------------------------

WSDL 2.0: Core Language \[[WSDL 2.0 Core](#WSDL)\] describes Web Service interaction in terms of exchanges of typed messages. WSDL only provides general support for type systems based on the XML Infoset \[[XML Information Set](#XMLInfoSet)\] and specific support for the W3C XML Schema Description Language \[[XML Schema: Structures](#XMLSchemaP1)\]. Describing messages with WSDL using schema languages other than XML Schema or non-XML Infoset type systems requires extending the WSDL component model. While the Web Services Description Working Group has not defined any such extensions, there were discussions in the Working Group about how those extensions might be defined and used. This document is the result of those disucussions and captures part of the Working Group's thinking about schema language and type system extensibilty at the time of its publication.

<span id="multipleschemalangs"></span>2. Issues facing multiple schema languages/type systems
---------------------------------------------------------------------------------------------

Without the use of an extension, a WSDL document can only use a single type system, XML Schema. If extensions are defined to support alternative schema languages or non-XML type systems, then issues regarding the *mixing* of type systems in a single document arise. Part 1 does *not* define the behavior of mixed type system documents, so it is incumbent on extension authors to do so.

For example, suppose a WSDL author used a extension supporting Relax NG alongside the native support for XML Schema. Further suppose that there is an element component which has a definition in both the referenced XML Schema and Relax NG schema. There are several possibilities for interpreting such a document:

-   Multiple definitions in distinct type systems is always an error

-   Multiple definitions must be in some sense equivalent, for example, if XML Schema type and an Relax NG production validate exactly the same set of Infoset fragments, otherwise, an error

-   Multiple definitions are legal, and are interpreted as a union type constraint

The last interpretation suggests a further general possibility: being able to define a union type (or other compound type) that spans distinct type systems (and, to further generalize, where the unioned types had distinct QName identifiers). The [Data Access Working Group](http://www.w3.org/2001/sw/DataAccess/) had a use case wherein their return message could either be in [RDF/XML](http://www.w3.org/TR/rdf-syntax-grammar/), which cannot have an interesting XML Schema but does have an interesting Relax NG schema, and their [other results format](http://www.w3.org/TR/rdf-sparql-XMLres/), which they would prefer to specify with an XML Schema. This example is little artificial, as the Data Access Working Group could easily describe the entire results format in Relax NG.

The first interpretation is most in the spirit of WSDL and was strongly preferred by the Working Group. Since WSDL extensibility points are generally quite unrestricted, the Working Group did not try to enforce the first option, but the general belief of the Working Group was that the other options were confusing and unwise.

<span id="examples"></span>3. Examples of Specifications of Extension Elements for Alternative Schema Language Support
----------------------------------------------------------------------------------------------------------------------

This section contains two examples of specifications of extension elements for alternative schema language support. Please note that those examples did not receive any implementation testing.

### <span id="dtd"></span>3.1 DTD

A Document Type Definition (DTD) as defined in \[[XML 1.0](#XML10)\] may be used as the schema language for WSDL. It may not be embedded; it must be imported. A namespace must be assigned. DTD types appear in the {[element declarations](http://www.w3.org/TR/2005/WD-wsdl20-20050803#property-Description.elementdeclarations)} property of the [Description](http://www.w3.org/TR/2005/WD-wsdl20-20050803#component-Description) component and may be referenced from the `wsdl:input` , `wsdl:output` and `wsdl:fault` elements using the `element` *attribute information item*.

The prefix, dtd, used throughout the following is mapped to the namespace URI "http://www.w3.org/2005/08/wsdl/dtd-import".

The `dtd:import` *element information item* references an external Document Type Definition, and has the following Infoset properties:

-   A \[local name\] of import.

-   A \[namespace name\] of "http://www.w3.org/2005/08/wsdl/dtd-import".

-   One or two *attribute information item*s, as follows:

    -   A REQUIRED `namespace` *attribute information item* as described below.

    -   An OPTIONAL `location` *attribute information item* as described below.

#### <span id="dtd-namespaceaii"></span>3.1.1 `namespace` *attribute information item*

The `namespace` *attribute information item* sets the namespace to be used with all imported element definitions described in the DTD. It has the following Infoset properties:

-   A \[local name\] of namespace.

-   A \[namespace name\] which has no value.

The type of the `namespace` *attribute information item* is *xs:anyURI*.

The WSDL author should ensure that a prefix is associated with the namespace at the proper scope (probably document scope).

#### <span id="dtd-locationaii"></span>3.1.2 `location` *attribute information item*

The `location` *attribute information item*, if present, provides a hint to the processor as to where the DTD may be located. Caching and cataloging technologies may provide better information than this hint. The `location` *attribute information item* has the following Infoset properties:

-   A \[local name\] of location.

-   A \[namespace name\] which has no value.

The type of the `location` *attribute information item* is *xs:anyURI*.

#### <span id="dtd-ref"></span>3.1.3 References to Element Definitions

The `element` *attribute information item* MUST be used when referring to an element definition (&lt;!ELEMENT&gt;) from a [Interface Message Reference](http://www.w3.org/TR/2005/WD-wsdl20-20050803#component-InterfaceMessageReference) component; referring to an element definition from a [Interface Fault](http://www.w3.org/TR/2005/WD-wsdl20-20050803#component-InterfaceFault) component is similar. The value of the element definition MUST correspond to the content of the `namespace` *attribute information item* of the `dtd:import` *element information item*. The local name part must correspond to an element defined in the DTD.

Note that this pattern does not attempt to make DTDs namespace-aware. It applies namespaces externally, in the import phase.

### <span id="relax"></span>3.2 RELAX NG

A RELAX NG \[[Relax NG](#RelaxNG)\] schema may be used as the schema language for WSDL. It may be embedded or imported; import is preferred. A namespace must be specified; if an imported schema specifies one, then the \[actual value\] of the `namespace` *attribute information item* in the `import` *element information item* must match the specified namespace. RELAX NG provides both type definitions and element declarations, the latter appears in the {[element declarations](http://www.w3.org/TR/2005/WD-wsdl20-20050803#property-Description.elementdeclarations)} property of [Description](http://www.w3.org/TR/2005/WD-wsdl20-20050803#component-Description) component respectively. The following discussion supplies the prefix rng which is mapped to the URI "http://www.relaxng.org/ns/structure/1.0".

#### <span id="import-relax"></span>3.2.1 Importing RELAX NG

Importing a RELAX NG schema uses the rng:include mechanism defined by RNG, with restrictions on its syntax and semantics. A child *element information item* of the `types` *element information item* is defined with the Infoset properties as follows:

-   A \[local name\] of include.

-   A \[namespace name\] of "http://www.relaxng.org/ns/structure/1.0".

-   Two *attribute information item*s as follows:

    -   A REQUIRED `ns` *attribute information item* as described below.

    -   An OPTIONAL `href` *attribute information item* as described below.

    -   Additional *attribute information item*s as defined by the RNG specification.

Note that WSDL restricts the `rng:include` *element information item* to be empty. That is, it cannot redefine `rng:start` and `rng:define` *element information item*s; it may be used solely to import a schema.

##### <span id="relax-import-nsaii"></span>3.2.1.1 `ns` *attribute information item*

The `ns` *attribute information item* defines the namespace of the type and element definitions imported from the referenced schema. If the referenced schema contains an `ns` *attribute information item* on its `grammar` *element information item*, then the values of these two *attribute information item*s must be identical. If the imported grammar does not have an `ns` *attribute information item* then the namespace specified here is applied to all components of the schema as if it did contain such an *attribute information item*. The `ns` *attribute information item* contains the following Infoset properties:

-   A \[local name\] of ns.

-   A \[namespace name\] which has no value.

The type of the `ns` *attribute information item* is *xs:anyURI*.

##### <span id="relax-import-hrefaii"></span>3.2.1.2 `href` *attribute information item*

The `href` *attribute information item* must be present, according to the rules of the RNG specification. However, WSDL allows it to be empty, and considers it only a hint. Caching and cataloging technologies may provide better information that this hint. The `href` *attribute information item* has the following Infoset properties:

-   A \[local name\] of href.

-   A \[namespace name\] which has no value.

The type of the `href` *attribute information item* is *xs:anyURI*.

#### <span id="relax-embed"></span>3.2.2 Embedding RELAX NG

Embedding an RNG schema uses the existing top-level `rng:grammar` *element information item*. It may be viewed as simply cutting and pasting an existing, stand-alone schema to a location inside the `wsdl:types` *element information item*. The `rng:grammar` *element information item* has the following Infoset properties:

-   A \[local name\] of grammar.

-   A \[namespace name\] of "http://www.relaxng.org/ns/structure/1.0".

-   A REQUIRED `ns` *attribute information item*s as described below.

-   Additional *attribute information item*s as specified for the `rng:grammar` *element information item* in the RNG specification.

-   Child *element information item*s as specified for the `rng:grammar` *element information item* in the RNG specification.

##### <span id="relax-embed-nsaii"></span>3.2.2.1 `ns` *attribute information item*

The `ns` *attribute information item* defines the namespace of the type and element definitions embedded in this schema. WSDL modifies the RNG definition of the `rng:grammar` *element information item* to make this *attribute information item* required. The `ns` *attribute information item* has the following Infoset properties:

-   A \[local name\] of ns.

-   A \[namespace name\] which has no value.

The type of the `ns` *attribute information item* is *xs:anyURI*.

#### <span id="relax-ref"></span>3.2.3 References to Element Declarations

Whether embedded or imported, the element definitions present in a schema may be referenced from a [Interface Message Reference](http://www.w3.org/TR/2005/WD-wsdl20-20050803#component-InterfaceMessageReference) or [Interface Fault](http://www.w3.org/TR/2005/WD-wsdl20-20050803#component-InterfaceFault) component.

A named rng:define definition MUST NOT be referenced from the [Interface Message Reference](http://www.w3.org/TR/2005/WD-wsdl20-20050803#component-InterfaceMessageReference) or [Interface Fault](http://www.w3.org/TR/2005/WD-wsdl20-20050803#component-InterfaceFault) components.

A named Relax NG element declaration MAY be referenced from a [Interface Message Reference](http://www.w3.org/TR/2005/WD-wsdl20-20050803#component-InterfaceMessageReference) or [Interface Fault](http://www.w3.org/TR/2005/WD-wsdl20-20050803#component-InterfaceFault) component. The QName is constructed from the namespace (`ns` *attribute information item*) of the schema and the content of the `name` *attribute information item* of the `element` *element information item* An `element` *attribute information item* MUST NOT be used to refer to an `rng:define` *element information item*.

<span id="References"></span>A. References
------------------------------------------

<span id="RelaxNG"></span>\[Relax NG\]  
[RELAX NG Specification](http://www.relaxng.org/spec-20011203.html), J. Clark, MURATA Makoto, editors. OASIS Committee Specification, 3 December 2001.

<span id="WSDL"></span>\[WSDL 2.0 Core\]  
[Web Services Description Language (WSDL) Version 2.0 Part 1: Core Language](http://www.w3.org/TR/2005/WD-wsdl20-20050803), R. Chinnici, J-J. Moreau, A. Ryman, S. Weerawarana, Editors. World Wide Web Consortium, 3 August 2005. This version of the Web Services Description Language Version 2.0 Core specification is http://www.w3.org/TR/2005/WD-wsdl20-20050803. The [latest version of "Web Services Description Language (WSDL) Version 2.0 Part 1: Core Language"](http://www.w3.org/TR/wsdl20) is available at http://www.w3.org/TR/wsdl20.

<span id="XML10"></span>\[XML 1.0\]  
[Extensible Markup Language (XML) 1.0 (Third Edition)](http://www.w3.org/TR/2004/REC-xml-20040204/), T. Bray, J. Paoli, C. M. Sperberg-McQueen, E. Maler, and F. Yergeau, Editors. World Wide Web Consortium, 4 February 2004. This version of the XML 1.0 Recommendation is http://www.w3.org/TR/2004/REC-xml-20040204/. The [latest version of "Extensible Markup Language (XML) 1.0"](http://www.w3.org/TR/REC-xml) is available at http://www.w3.org/TR/REC-xml.

<span id="XMLInfoSet"></span>\[XML Information Set\]  
[XML Information Set (Second Edition)](http://www.w3.org/TR/2004/REC-xml-infoset-20040204), J. Cowan and R. Tobin, Editors. World Wide Web Consortium, 4 February 2004. This version of the XML Information Set Recommendation is http://www.w3.org/TR/2004/REC-xml-infoset-20040204. The [latest version of "XML Information Set"](http://www.w3.org/TR/xml-infoset) is available at http://www.w3.org/TR/xml-infoset.

<span id="XMLSchemaP1"></span>\[XML Schema: Structures\]  
[XML Schema Part 1: Structures (Second Edition)](http://www.w3.org/TR/2004/REC-xmlschema-1-20041028/), H. Thompson, D. Beech, M. Maloney, and N. Mendelsohn, Editors. World Wide Web Consortium, 28 October 2004. This version of the XML Schema Part 1 Recommendation is http://www.w3.org/TR/2004/REC-xmlschema-1-20041028. The [latest version of "XML Schema Part 1: Structures"](http://www.w3.org/TR/xmlschema-1/) is available at http://www.w3.org/TR/xmlschema-1.

<span id="acknowledgments"></span>B. Acknowledgements (Non-Normative)
---------------------------------------------------------------------

This document is the work of the [W3C Web Service Description Working Group](http://www.w3.org/2002/ws/desc/).

Members of the Working Group are (at the time of writing, and by alphabetical order): Allen Brookes (Rogue Wave Softwave), Dave Chappell (Sonic Software), Helen Chen (Agfa-Gevaert N. V.), Roberto Chinnici (Sun Microsystems), Kendall Clark (University of Maryland), Ugo Corda (SeeBeyond), Glen Daniels (Sonic Software), Paul Downey (British Telecommunications), Youenn Fablet (Canon), Hugo Haas (W3C), Tom Jordahl (Macromedia), Anish Karmarkar (Oracle Corporation), Jacek Kopecky (DERI Innsbruck at the Leopold-Franzens-Universität Innsbruck, Austria), Amelia Lewis (TIBCO Software, Inc.), Michael Liddy (Education.au Ltd.), Kevin Canyang Liu (SAP AG), Jonathan Marsh (Microsoft Corporation), Josephine Micallef (SAIC - Telcordia Technologies), Jeff Mischkinsky (Oracle Corporation), Dale Moberg (Cyclone Commerce), Jean-Jacques Moreau (Canon), Mark Nottingham (BEA Systems, Inc.), David Orchard (BEA Systems, Inc.), Bijan Parsia (University of Maryland), Tony Rogers (Computer Associates), Arthur Ryman (IBM), Adi Sakala (IONA Technologies), Asir Vedamuthu (Microsoft Corporation), Sanjiva Weerawarana (Independent), Ümit Yalçınalp (SAP AG).

Previous members were: Lily Liu (webMethods, Inc.), Don Wright (Lexmark), Joyce Yang (Oracle Corporation), Daniel Schutzer (Citigroup), Dave Solo (Citigroup), Stefano Pogliani (Sun Microsystems), William Stumbo (Xerox), Stephen White (SeeBeyond), Barbara Zengler (DaimlerChrysler Research and Technology), Tim Finin (University of Maryland), Laurent De Teneuille (L'Echangeur), Johan Pauhlsson (L'Echangeur), Mark Jones (AT&T), Steve Lind (AT&T), Sandra Swearingen (U.S. Department of Defense, U.S. Air Force), Philippe Le Hégaret (W3C), Jim Hendler (University of Maryland), Dietmar Gaertner (Software AG), Michael Champion (Software AG), Don Mullen (TIBCO Software, Inc.), Steve Graham (Global Grid Forum), Steve Tuecke (Global Grid Forum), Michael Mahan (Nokia), Bryan Thompson (Hicks & Associates), Ingo Melzer (DaimlerChrysler Research and Technology), Sandeep Kumar (Cisco Systems), Alan Davies (SeeBeyond), Jacek Kopecky (Systinet), Mike Ballantyne (Electronic Data Systems), Mike Davoren (W. W. Grainger), Dan Kulp (IONA Technologies), Mike McHugh (W. W. Grainger), Michael Mealling (Verisign), Waqar Sadiq (Electronic Data Systems), Yaron Goland (BEA Systems, Inc.), Ümit Yalçınalp (Oracle Corporation), Peter Madziak (Agfa-Gevaert N. V.), Jeffrey Schlimmer (Microsoft Corporation), Hao He (The Thomson Corporation), Erik Ackerman (Lexmark), Jerry Thrasher (Lexmark), Prasad Yendluri (webMethods, Inc.), William Vambenepe (Hewlett-Packard Company), David Booth (W3C), Sanjiva Weerawarana (IBM), Charlton Barreto (webMethods, Inc.), Asir Vedamuthu (webMethods, Inc.), Igor Sedukhin (Computer Associates), Martin Gudgin (Microsoft Corporation).

The people who have contributed to [discussions on www-ws-desc@w3.org](http://lists.w3.org/Archives/Public/www-ws-desc/) are also gratefully acknowledged.
