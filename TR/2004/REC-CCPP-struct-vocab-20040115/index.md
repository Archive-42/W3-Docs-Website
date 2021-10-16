[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

Composite Capability/Preference Profiles (CC/PP): Structure and Vocabularies 1.0
================================================================================

W3C Recommendation 15 January 2004
----------------------------------

This version:  
<http://www.w3.org/TR/2004/REC-CCPP-struct-vocab-20040115/>

Latest version:  
<http://www.w3.org/TR/CCPP-struct-vocab/>

Previous version:  
<http://www.w3.org/TR/2003/PR-CCPP-struct-vocab-20031015/>

Editors:  
Graham Klyne, <GK@acm.org>, Nine by Nine

Franklin Reynolds, <franklin.reynolds@nokia.com>, Nokia Research Center

Chris Woodrow, <woodroc@metaphoria.net>, Information Architects

Hidetaka Ohto, <ohto@w3.org>, W3C (through March 2002) / Panasonic

Johan Hjelm, [Johan.hjelm@ericsson.com](mailto:johan.hjelm@ericsson.com), Ericsson

Mark H. Butler, <mark-h_butler@hp.com>, Hewlett-Packard

Luu Tran, <luu.tran@sun.com>, Sun Microsystems

Please refer to the [**errata**](/2003/07/ccpp-SV-PR/errata/) for this document, which may include some normative corrections.

The English version of this specification is the only normative version. Non-normative [translations](/2003/07/ccpp-SV-PR/translation/) may also be available.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2004  [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.lcs.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks), [document use](http://www.w3.org/Consortium/Legal/copyright-documents), and [software licensing](http://www.w3.org/Consortium/Legal/copyright-software) rules apply.

------------------------------------------------------------------------

<span id="abstract"></span>Abstract
-----------------------------------

This document describes CC/PP (Composite Capabilities/Preference Profiles) structure and vocabularies. A CC/PP profile is a description of device capabilities and user preferences. This is often referred to as a device's delivery context and can be used to guide the adaptation of content presented to that device.

The Resource Description Framework (RDF) is used to create profiles that describe user agent capabilities and preferences. The structure of a profile is discussed. Topics include:

-   structure of client capability and preference descriptions, AND
-   use of RDF classes to distinguish different elements of a profile, so that a schema-aware RDF processor can handle CC/PP profiles embedded in other XML document types.

CC/PP vocabulary is identifiers (URIs) used to refer to specific capabilities and preferences, and covers:

-   the types of values to which CC/PP attributes may refer,
-   an appendix describing how to introduce new vocabularies,
-   an appendix giving an example small client vocabulary covering print and display capabilities, and
-   an appendix providing a survey of existing work from which new vocabularies may be derived.

<span id="DocumentStatus"></span>Status of this document
--------------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

This document is a Recommendation of the W3C. It has been reviewed by W3C Members and other interested parties, and has been endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited as a normative reference from another document.

W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web. A [test suite](http://www.w3.org/2003/07/ccpp-SV-PR/test-suite-20030827/) for has been developed, along with an [implementation report](http://www.w3.org/2003/07/ccpp-SV-PR/test-suite-20030827/implementation-report.html).

This document has been produced by the W3C Device Independence Working Group as part of the [Device Independence Activity](/2001/di/Activity) within the [W3C Interaction Domain](http://www.w3.org/Interaction/). Continued status of the work is reported on the [Device Independence Working Group Home Page](/2001/di/Group/) ([Member-only link](http://cgi.w3.org/MemberAccess/AccessRequest)).

The public is invited to send comments or reports errors to the editors at <www-mobile@w3.org>, the public forum for discussion of W3C's work on Mobile Web Access. An archive is available at <http://lists.w3.org/Archives/Public/www-mobile/>.

Patent disclosures relevant to this specification may be found on the CC/PP Working Group's [patent disclosure page](/Mobile/CCPP/disclosures.html) in conformance with W3C policy.

<span id="TableOfContents"></span>Table of contents
---------------------------------------------------

-   [**1. Introduction**](#Introduction)
    -   [1.1 Scope and normative elements](#ScopeOfDocument)
    -   [1.2 Structure of this document](#StructureOfDoc)
    -   [1.3 Document conventions](#DocumentConventions)
        -   [1.3.1 Terminology](#TerminologyConventions)
        -   [1.3.2 RDF graph notation](#RDFGraphNotation)
-   [**2. CC/PP architecture**](#CCPPArchitecture)
    -   [2.1 CC/PP profile structure](#CCPPProfileStructOverview)
        -   [2.1.1 Profile components](#xtocid-33666512)
        -   [2.1.2 Component attributes](#xtocid-33666513)
        -   [2.1.3 Defaults](#xtocid-33666514)
    -   [2.2 Extensibility and namespaces](#ExtensibilityNamespaces)
-   [**3. CC/PP structure**](#CCPPStructure)
    -   [3.1 Components](#ProfileComponents)
    -   [3.2 Attributes](#ProfileAttributes)
    -   [3.3 Defaults](#ProfileDefaults)
    -   [3.4 Distinguishing profile structure from attributes](#DistinguishStructAttrib)
    -   [3.5 Notes on RDF usage](#RDFUsage)
    -   [3.6 RDF graph composition](#xtocid-58647528)
-   [**4. Attribute vocabularies**](#AttributeVocabularies)
    -   [4.1 Attribute data](#AttributeData)
        -   [4.1.1 Simple CC/PP attribute data](#SimpleAttribute)
            -   [4.1.1.1 Strings](#xtocid-33666539)
            -   [4.1.1.2 Integer numbers](#xtocid-33666543)
            -   [4.1.1.3 Rational numbers](#xtocid-33666544)
        -   [4.1.2 Complex CC/PP attribute data](#ComplexAttribute)
            -   [4.1.2.1 Set of values](#4.1.2.1)
            -   [4.1.2.2 Sequence of values](#4.1.2.2)
    -   [4.2 Attribute identifiers](#xtocid-33666547)
    -   [4.3 RDF vocabulary schema](#xtocid-33666548)
-   [**5. Conformance**](#Conformance)
    -   [5.1 CC/PP Document Conformance](#ConformanceDocument)
    -   [5.2 CC/PP Producer Conformance](#ConformanceProducer)
    -   [5.3 CC/PP Consumer Conformance](#ConformanceConsumer)
    -   [5.4 Conformance Claims](#ConformanceClaims)
        -   [5.4.1 Validity](#ConformanceClaimsValidity)
        -   [5.4.2 Well-formed](#ConformanceClaimsWellformed)
-   [**6. Acknowledgments**](#Acknowledgements)
-   [**7. References**](#xtocid-33666550)
    -   [7.1 Normative References](#norm_refs)
    -   [7.2 Informative References](#inform_refs)
-   [**Appendix A: Terminology and abbreviations**](#Appendix_A)
    -   [A.1 Terminology](#Terminology)
    -   [A.2 Abbreviations](#Abbreviations)
-   [**Appendix B: RDF schema for structure**](#Appendix_B)
    -   [B.1 Summary of CC/PP class hierarchy](#xtocid-33666555)
    -   [B.2 Summary of CC/PP properties](#xtocid-33666556)
        -   [Structural properties (instances of `ccpp:Property`)](#xtocid-33666557)
    -   [B.3 RDF Schema](#xtocid-33666558)
        -   [CC/PP core and class structure:](#xtocid-33666559)
-   [**Appendix C: CC/PP attribute vocabulary for print and display**](#Appendix_C)
    -   [Client attribute properties (instances of `ccpp:Attribute`)](#xtocid-33666562)
    -   [Schema for client vocabulary](#xtocid-62790564)
-   [**Appendix D: Recommendations for creating a vocabulary**](#Appendix_D)
    -   [D.1 Basic format for all vocabulary items](#Basic)
    -   [D.2 Use of XML namespaces](#namespaces)
    -   [D.3 Principles for defining new attributes](#Principles)
        -   [D.3.1 If possible, reuse existing vocabularies](#xtocid-33666567)
        -   [D.3.2 Attribute value type and interpretation](#3.3.2)
        -   [D.3.3 Interpretation not dependent on other attribute values](#3.3.3)
        -   [D.3.4 Attribute naming conventions](#3.3.4)
        -   [D.3.5 Attributes should have specific applicability](#AttributeApplicability)
    -   [D.4 Protocol interactions](#ProtocolInteractions)
-   [**Appendix E: Review of applicable vocabularies**](#Appendix_E)
    -   [E.1 IETF media feature registration (CONNEG)](#IETF)
    -   [E.2 WAP UAProf](#UAPROF)
    -   [E.3 TIFF](#TIFF)
    -   [E.4 WAVE](#WAVE)
    -   [E.5 MPEG-4](#MPEG-4)
    -   [E.6 MPEG-7](#MPEG-7)
    -   [E.7 PWG](#PWG)
    -   [E.8 Salutation](#Salutation)
-   [**Appendix F: CC/PP applications**](#Appendix_F)
    -   [F.1 Outline of request processing in HTTP](#Outline)
    -   [F.2 Protocol assumptions for proxy behavior](#ProtocolAssumptions)
-   [**Appendix G: RDF Compatibility**](#Appendix_G)
    -   [G.1 Implicit datatyping](#RDFImplicitDatatyping)
    -   [G.2 Explicit datatyping](#RDFExplicitDatatyping)
-   [**Appendix W: Revision history**](#RevisionHistory)

<span id="Introduction"></span>1. Introduction
----------------------------------------------

This document describes CC/PP (Composite Capabilities/Preference Profiles) structure and vocabularies. A CC/PP profile is a description of device capabilities and user preferences that can be used to guide the adaptation of content presented to that device. Here profile does not refer to a subset of a particular specification, for example the CSS Mobile profile, but refers to the document(s) exchanged between devices that describe the capabilities of a device.

As the number and variety of devices connected to the Internet grows, there is a corresponding increase in the need to deliver content that is tailored to the capabilities of different devices. Some limited techniques, such as HTTP '`accept`' headers and HTML '`alt=`' attributes, already exist. As part of a framework for content adaptation and contextualization, a general purpose profile format is required that can describe the capabilities of a user agent and preferences of its user. CC/PP is designed to be such a format.

CC/PP is based on RDF, the Resource Description Framework, which was designed by the W3C as a general purpose metadata description language. RDF provides the framework with the basic tools for both vocabulary extensibility, via XML namespaces [\[XMLNAMESPACES\]](#2), and interoperability. There is a specification that describes how to encode RDF using XML [\[RDF\]](#3), and another that defines an RDF schema description language using RDF [\[RDFSCHEMA\]](#4). RDF was designed to describe the metadata or machine understandable properties of the Web. RDF is a natural choice for the CC/PP framework since user agent profiles are metadata intended primarily for communication between user agents and resource data providers. For an introduction to RDF, see [\[RDFPRIMER\]](#rdfprimer). Note that the [\[RDFPRIMER\]](#rdfprimer) document describes a more recent revision of the RDF specifications than the ones on which this specification is based.

A CC/PP profile contains a number of CC/PP attribute names and associated values that are used by a server to determine the most appropriate form of a resource to deliver to a client. It is structured to allow a client to describe its capabilities by reference to a standard profile, accessible to an origin server or other sender of resource data, and a smaller set of features that are in addition to or different than the standard profile. A set of CC/PP attribute names, permissible values and associated meanings constitute a CC/PP vocabulary.

Some information contained in a profile may be sensitive, and adequate trust and security mechanisms must be deployed to protect users' privacy. As a part of a wider application, CC/PP cannot fully cover such issues, but is intended to be used in conjunction with appropriate mechanisms. This topic is covered in [Appendix F](#Appendix_F), (CC/PP applications).

It is anticipated that different applications will use different vocabularies; indeed this is needed if application-specific properties are to be represented within the CC/PP framework. But for different applications to work together, some common vocabulary, or a method to convert between different vocabularies, is needed. (XML namespaces can ensure that different applications' names do not clash, but does not provide a common basis for exchanging information between different applications.) Any vocabulary that relates to the structure of a CC/PP profile must follow this specification. The appendices introduce a simple CC/PP attribute vocabulary that may be used to improve cross-application exchange of capability information, partly based on some earlier IETF work.

CC/PP is designed to be broadly compatible with the earlier UAProf specification [\[UAPROF\]](#9) from the WAP Forum. That is, we have attempted to accomodate existing UAProf profiles.

CC/PP is compatible with IETF media feature sets (CONNEG) [\[RFC2533\]](#6) in the sense that all media feature tags and values can be expressed in CC/PP. However, not all CC/PP profiles can be expressed as media feature tags and values, and CC/PP does not attempt to express relationships between attributes.

Although the examples and use to date have been focused on device capabilities, CC/PP can also convey information about user preferences that, used sensibly, should be allow web servers to improve the accessibility of web sites. A fuller discussion of web site accessibility can be found in the Web Content Accessibility Guidelines [\[WAI\]](#37).

### <span id="ScopeOfDocument"></span>1.1 Scope and normative elements

CC/PP Structure and Vocabularies (abbreviated to CC/PP in the rest of this document) defines a client profile data format, and a framework for incorporating application- and operating environment-specific features. It does not define how the profile is transferred, nor does it specify what CC/PP attributes must be generated or recognized. CC/PP is designed for use as part of a wider application framework. As such, the specification of CC/PP elements that must be supported and those which may be omitted is a matter for a specific application.

There are few protocol assumptions built into the design of CC/PP. Although it is intended to be largely protocol independent, particular consideration has been given to use of CC/PP with HTTP for retrieving Web resources. [Appendix F](#Appendix_F) contains some further discussion of CC/PP applications.

This document describes a number of features of CC/PP. Some features form part of the essential structure of CC/PP, for which conformance is REQUIRED (see section [5](#Conformance)). Others are features whose use is RECOMMENDED or OPTIONAL. There is also discussion of how new vocabularies should be introduced, directed to CC/PP application designers rather than implementers.

The architecture [section](#CCPPArchitecture) does not describe specific features, but indicates general principles that underlie the design of CC/PP. It is not normative but does contain information that should be understood for proper implementation of CC/PP.

The section on [CC/PP structure](#CCPPStructure) covers two main areas:

-   CC/PP profile components: support for these is REQUIRED.
-   CC/PP profile defaults: support for these is REQUIRED.

The [section](#AttributeVocabularies) on CC/PP attribute vocabularies describes some general features of CC/PP attributes and their values. Support for the described formats for simple attribute values is RECOMMENDED -- the actual syntax for any simple CC/PP value is defined by the corresponding attribute specification; such specifications may reference the information provided here. Support for the structured CC/PP attribute formats described, where relevant, is REQUIRED.

Support is not required for any specific vocabulary, but application designers are strongly encouraged to re-use existing vocabularies where possible.

CC/PP applications are not required to support features described in the appendices, but any new attribute vocabularies defined MUST be based on RDF classes and properties defined by the RDF schema in [Appendix B](#Appendix_B) (new CC/PP attributes are instances of `ccpp:Attribute`, new component classes are subclasses of `ccpp:Component`, etc.).

> ***NOTE:*** The reason for requiring new vocabularies to be based on the CC/PP schema is so that schema-aware applications can include CC/PP profile data along with other RDF data. Having new vocabulary terms based on the CC/PP schema means that they are clearly identifiable as part of a CC/PP profile when RDF data from multiple sources is combined. This requirement does not affect stand-alone CC/PP profile processors, but the real value of using RDF here will be in the longer term, allowing data from multiple sources (e.g. document, security and privacy related information) to be combined and processed by more general purpose handlers.

### <span id="StructureOfDoc"></span>1.2 Structure of this document

The remainder of this section covers terminology, conventions and notations used in this document.

Section 2, [**CC/PP architecture**](#CCPPArchitecture), provides an overview of the CC/PP profile structure and use of XML namespaces.

Section 3, [**CC/PP structure**](#CCPPStructure), describes the structure of a CC/PP profile, and introduces the RDF elements that are used to create the essential CC/PP elements.

Section 4, [**Attribute vocabularies**](#AttributeVocabularies), describes how attributes are used in a CC/PP profile, and presents the recommended structure of CC/PP elements used to describe specific features.

The appendices contain additional supporting material that is not essential to construct a valid CC/PP profile, but which provides additional background information useful for understanding CC/PP, its relationship with RDF, or defining attribute vocabularies for specific applications.

### <span id="DocumentConventions"></span>1.3 Document conventions

#### <span id="TerminologyConventions"></span>1.3.1 Terminology

See CC/PP terminology and abbreviations in [Appendix A](#Appendix_A) of this document.

The term "CC/PP attribute" is used here to refer to a specific capability or characteristic of a client (or other system) that appears in a CC/PP profile. The term "feature" refers to a client capability or characteristic that may or may not be the basis of a CC/PP attribute. The term "attribute name" is used to indicate an RDF property name used to identify a CC/PP attribute.

The key words "MUST", "MUST NOT", "SHOULD", "SHOULD NOT", "MAY", "MAY NOT", "REQUIRED", "RECOMMENDED" and "OPTIONAL" in this document are to be interpreted as described in RFC 2119 [\[RFC2119\]](#25).

#### <span id="RDFGraphNotation"></span>1.3.2 RDF graph notation

The underlying structure of RDF is a directed labeled graph. For communication between computer systems, RDF uses a serialization in XML to represent these graphs. This XML notation is rather bulky and difficult for human discourse, so a more visual notation is used here for describing RDF graph structures:

<table><caption>Figure 1-1: RDF graph notation</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>[Subject-resource] --propertyName--&gt; [Object-resource]</code></pre><blockquote>Indicates a graph edge labeled '<em>propertyName</em>' from an RDF resource named 'Subject-resource' to another RDF resource named '<em>Object-resource</em>'.</blockquote><pre><code>[Subject-resource] --propertyName--&gt; &quot;Property value&quot;</code></pre><blockquote>Indicates a graph edge labeled 'propertyName' from an RDF resource named 'Subject-resource' to a literal string containing the indicated value.</blockquote><pre><code>[Subject-resource] --propertyName--&gt; { &quot;Val1&quot;, &quot;Val2&quot;, ... }</code></pre><blockquote>This is a shorthand for a property whose value is an <code>rdf:Bag</code> resource containing the indicated values (see section <a href="#4.1.2.1">4.1.2.1</a>).</blockquote><pre><code>[&lt;Subject-type&gt;] --propertyName--&gt; [&lt;Object-type&gt;]</code></pre><blockquote>Names in angle brackets are used to indicate an RDF resource of the indicated type (i.e. having the indicated <code>rdf:Type</code> property value), without indicating a specific name for the resource. This is useful for showing the RDF classes that may be linked by a property.</blockquote><pre><code>[Subject-resource] --propertyName--&gt; [Object-resource]
                                      |
       -------------------------------
      |
      +--property1--&gt; (val1)
      +--property2--&gt; (val2)
      :
     (etc.)</code></pre><blockquote>Property arcs can be chained, and multiple arcs drawn from a subject resource.</blockquote></td></tr></tbody></table>

Here are some XML examples of the RDF graph structures described above:

<table><caption>Figure 1-2: RDF graph example in XML</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;!-- Any RDF graph is an RDF element
  --&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
     xmlns=&quot;http://www.example.com/schema#&quot;&gt;

  &lt;!--  [Subject-resource] -propertyName-&gt; [Object-resource]
    --&gt;
  &lt;rdf:Description
      rdf:about=&quot;http://www.example.com/profile#Subject-resource&quot;&gt;
    &lt;propertyName&gt;
      &lt;rdf:Description
          rdf:about=&quot;http://www.example.com/profile#Object-resource&quot; /&gt;
    &lt;/propertyName&gt;
  &lt;/rdf:Description&gt;

  &lt;!--  [Subject-resource] -propertyName-&gt; [Object-resource]
     -  (Alternative format)
    --&gt;
  &lt;rdf:Description
      rdf:about=&quot;http://www.example.com/profile#Subject-resource&quot;&gt;
    &lt;propertyName
        rdf:resource=&quot;http://www.example.com/schema#Object-resource&quot; /&gt;
  &lt;/rdf:Description&gt;

  &lt;!--  [Subject-resource] -propertyName-&gt; &quot;property value&quot;
    --&gt;
  &lt;rdf:Description
      rdf:about=&quot;http://www.example.com/profile#Subject-resource&quot;&gt;
    &lt;propertyName&gt;property value&lt;/propertyName&gt;
  &lt;/rdf:Description&gt;

  &lt;!--  [Subject-resource] -propertyName-&gt; { &quot;Val1&quot;, &quot;Val2&quot;, ... }
    --&gt;
  &lt;rdf:Description
      rdf:about=&quot;http://www.example.com/profile#Subject-resource&quot;&gt;
    &lt;propertyName&gt;
      &lt;rdf:Description&gt;
        &lt;rdf:type
            rdf:resource=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag&quot; /&gt;
        &lt;rdf:li&gt;Val1&lt;/rdf:li&gt;
        &lt;rdf:li&gt;Val1&lt;/rdf:li&gt;

        &lt;!-- ...etc... --&gt;

      &lt;/rdf:Description&gt;
    &lt;/propertyName&gt;
  &lt;/rdf:Description&gt;

  &lt;!--  [Subject-resource] -propertyName-&gt; { &quot;Val1&quot;, &quot;Val2&quot;, ... }
     -  (Alternative format)
    --&gt;
  &lt;rdf:Description
      rdf:about=&quot;http://www.example.com/profile#Subject-resource&quot;&gt;
    &lt;propertyName&gt;
      &lt;rdf:Bag&gt;
        &lt;rdf:li&gt;Val1&lt;/rdf:li&gt;
        &lt;rdf:li&gt;Val1&lt;/rdf:li&gt;

        &lt;!-- ...etc... --&gt;

      &lt;/rdf:Bag&gt;
    &lt;/propertyName&gt;
  &lt;/rdf:Description&gt;

  &lt;!--  [&lt;Subject-type&gt;] -propertyName-&gt; [&lt;Object-type&gt;]
    --&gt;
  &lt;rdf:Description&gt;
    &lt;rdf:type
        rdf:resource=&quot;http://www.example.com/schema#Subject-type&quot; /&gt;
    &lt;propertyName&gt;
      &lt;rdf:Description&gt;
        &lt;rdf:type
            rdf:resource=&quot;http://www.example.com/schema#Object-type&quot; /&gt;
      &lt;/rdf:Description&gt;
    &lt;/propertyName&gt;
  &lt;/rdf:Description&gt;</code></pre><pre><code>  &lt;!--  [Subject-resource] -propertyName-&gt; [Object-resource]
     -                                      |
     -                                      +-property1-&gt; (val1)
     -                                      +-property2-&gt; (val2)
     -                                      :
    --&gt;
  &lt;rdf:Description
      rdf:about=&quot;http://www.example.com/profile#Subject-resource&quot;&gt;
    &lt;propertyName&gt;
      &lt;rdf:Description
          rdf:about=&quot;http://www.example.com/profile#Object-resource&quot; &gt;
      &lt;property1&gt;val1&lt;/property1&gt;
      &lt;property2&gt;val2&lt;/property2&gt;

      &lt;!-- ...etc... --&gt;

      &lt;/rdf:Description&gt;
    &lt;/propertyName&gt;
  &lt;/rdf:Description&gt;

&lt;/rdf:RDF&gt;</code></pre></td></tr></tbody></table>

<span id="CCPPArchitecture"></span>2. CC/PP architecture
--------------------------------------------------------

This section is not normative, but provides an overview of the features of CC/PP.

### <span id="CCPPProfileStructOverview"></span>2.1 CC/PP profile structure

A CC/PP profile is broadly constructed as a 2-level hierarchy:

-   a profile having at least one or more components, and
-   each component having at least one or more attributes.

#### <span id="xtocid-33666512">2.1.1 Profile components</span>

The initial branches of the CC/PP profile tree describe major components of the client. Examples of major components are:

-   the hardware platform upon which software is executing,
-   the software platform upon which all applications are hosted, or
-   an individual application, such as a browser.

A simple, graphical representation of the bottom of a CC/PP tree based on three components (`TerminalHardware`, `TerminalSoftware` and `TerminalBrowser`) would be:

<table><caption>Figure 2-1a: CC/PP profile components</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>[example:MyProfile]
 |
 +--ccpp:component--&gt;[example:TerminalHardware]
 +--ccpp:component--&gt;[example:TerminalSoftware]
 +--ccpp:component--&gt;[example:TerminalBrowser]</code></pre></td></tr></tbody></table>

The corresponding XML might look like this:

<table><caption>Figure 2-1b: CC/PP profile components in XML</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:ccpp=&quot;http://www.w3.org/2002/11/08-ccpp-schema#&quot;
         xmlns:example=&quot;http://www.example.com/schema#&quot;&gt;

  &lt;rdf:Description rdf:about=&quot;http://www.example.com/profile#MyProfile&quot;&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description
          rdf:about=&quot;http://www.example.com/profile#TerminalHardware&quot;&gt;
        &lt;!--  TerminalHardware properties here  --&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description
          rdf:about=&quot;http://www.example.com/profile#TerminalSoftware&quot;&gt;
        &lt;!--  TerminalSoftware properties here  --&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description
          rdf:about=&quot;http://www.example.com/profile#TerminalBrowser&quot;&gt;
        &lt;!--  TerminalBrowser properties here  --&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

  &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre></td></tr></tbody></table>

#### <span id="xtocid-33666513">2.1.2 Component attributes</span>

A CC/PP profile describes client capabilities and preferences in terms of a number of "CC/PP attributes" for each component.

The description of each component is a sub-tree whose branches are the capabilities or preferences associated with that component. Though RDF makes modeling a wide range of data structures possible, including arbitrary graphs, complex data models are usually best avoided for profile attribute values. A capability can often be described using a small number of CC/PP attributes, each having a simple, atomic value. Where more complex values are needed, these can be constructed as RDF subgraphs. One useful case for complex attribute values is to represent alternative values; e.g. a browser may support multiple versions of HTML. A hypothetical profile might look like this:

<table><caption>Figure 2-2a: Complete CC/PP profile example</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>[ex:MyProfile]
 |
 +--ccpp:component--&gt;[ex:TerminalHardware]
 |                    |
 |                    +--rdf:type----&gt; [ex:HardwarePlatform]
 |                    +--ex:displayWidth--&gt; &quot;320&quot;
 |                    +--ex:displayHeight--&gt; &quot;200&quot;
 |
 +--ccpp:component--&gt;[ex:TerminalSoftware]
 |                    |
 |                    +--rdf:type----&gt; [ex:SoftwarePlatform]
 |                    +--ex:name-----&gt; &quot;EPOC&quot;
 |                    +--ex:version--&gt; &quot;2.0&quot;
 |                    +--ex:vendor---&gt; &quot;Symbian&quot;
 |
 +--ccpp:component--&gt;[ex:TerminalBrowser]
                      |
                      +--rdf:type----&gt; [ex:BrowserUA]
                      +--ex:name-----&gt; &quot;Mozilla&quot;
                      +--ex:version--&gt; &quot;5.0&quot;
                      +--ex:vendor---&gt; &quot;Symbian&quot;
                      +--ex:htmlVersionsSupported--&gt; [ ]
                                                      |
                          ----------------------------
                         |
                         +--rdf:type---&gt; [rdf:Bag]
                         +--rdf:_1-----&gt; &quot;3.2&quot;
                         +--rdf:_2-----&gt; &quot;4.0&quot;</code></pre></td></tr></tbody></table>

The corresponding XML might look like this:

<table><caption>Figure 2-2b: Complete CC/PP profile example in XML</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:ccpp=&quot;http://www.w3.org/2002/11/08-ccpp-schema#&quot;
         xmlns:ex=&quot;http://www.example.com/schema#&quot;&gt;

  &lt;rdf:Description
      rdf:about=&quot;http://www.example.com/profile#MyProfile&quot;&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description
          rdf:about=&quot;http://www.example.com/profile#TerminalHardware&quot;&gt;
        &lt;rdf:type
            rdf:resource=&quot;http://www.example.com/schema#HardwarePlatform&quot; /&gt;
        &lt;ex:displayWidth&gt;320&lt;/ex:displayWidth&gt;
        &lt;ex:displayHeight&gt;200&lt;/ex:displayHeight&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description
          rdf:about=&quot;http://www.example.com/profile#TerminalSoftware&quot;&gt;
        &lt;rdf:type
            rdf:resource=&quot;http://www.example.com/schema#SoftwarePlatform&quot; /&gt;
        &lt;ex:name&gt;EPOC&lt;/ex:name&gt;
        &lt;ex:version&gt;2.0&lt;/ex:version&gt;
        &lt;ex:vendor&gt;Symbian&lt;/ex:vendor&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description
          rdf:about=&quot;http://www.example.com/profile#TerminalBrowser&quot;&gt;
        &lt;rdf:type
            rdf:resource=&quot;http://www.example.com/schema#BrowserUA&quot; /&gt;
        &lt;ex:name&gt;Mozilla&lt;/ex:name&gt;
        &lt;ex:version&gt;5.0&lt;/ex:version&gt;
        &lt;ex:vendor&gt;Symbian&lt;/ex:vendor&gt;
        &lt;ex:htmlVersionsSupported&gt;
          &lt;rdf:Bag&gt;
            &lt;rdf:li&gt;3.2&lt;/rdf:li&gt;
            &lt;rdf:li&gt;4.0&lt;/rdf:li&gt;
          &lt;/rdf:Bag&gt;
        &lt;/ex:htmlVersionsSupported&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

  &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre></td></tr></tbody></table>

#### <span id="xtocid-33666514">2.1.3 Defaults</span>

The attributes of a component can be included directly, as in the previous example, or may be specified by reference to a default profile, which may be stored separately and accessed using its specified URI.

This use of an externally defined default profile is somewhat similar to the idea of dynamic inheritance. It makes possible some important optimizations. As a separate document, it can reside at a separate location and it can be separately cached. This is particularly useful in wireless environments such as cellular networks, where the profiles may be large and the client link slow and expensive. Using default values, only a small part of the overall profile is sent over the wireless network.

Default values for a component of a CC/PP profile are indicated by a `ccpp:defaults` arc from the component concerned to a component that describes the default values.

<table><caption>Figure 2-3a: CC/PP profile using defaults</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>[ex:MyProfile]

 |
 +--ccpp:component--&gt; [ex:TerminalHardware]
 |                     |
 |                     +--rdf:type-------&gt; [ex:HardwarePlatform]
 |                     +--ccpp:defaults--&gt; [ex:HWDefault]
 |
 +--ccpp:component--&gt; [ex:TerminalSoftware]
 |                     |
 |                     +--rdf:type-------&gt; [ex:SoftwarePlatform]
 |                     +--ccpp:defaults--&gt; [ex:SWDefault]
 |
 +--ccpp:component--&gt; [ex:TerminalBrowser]
                       |
                       +--rdf:type-------&gt; [ex:BrowserUA]
                       +--ccpp:defaults--&gt; [ex:UADefault]

[ex:HWDefault]
 |
 +--rdf:type----&gt; [ex:HardwarePlatform]
 +--ex:displayWidth--&gt; &quot;320&quot;
 +--ex:displayHeight--&gt; &quot;200&quot;

[ex:SWDefault]
 |
 +--rdf:type----&gt; [ex:SoftwarePlatform]
 +--ex:name-----&gt; &quot;EPOC&quot;
 +--ex:version--&gt; &quot;2.0&quot;
 +--ex:vendor---&gt; &quot;Symbian&quot;

[ex:UADefault]
 |
 +--rdf:type----&gt; [ex:BrowserUA]
 +--ex:name-----&gt; &quot;Mozilla&quot;
 +--ex:version--&gt; &quot;5.0&quot;
 +--ex:vendor---&gt; &quot;Symbian&quot;
 +--ex:htmlVersionsSupported--&gt; [ ]
                                 |
                                 +--rdf:type---&gt; [rdf:Bag]
                                 +--rdf:_1-----&gt; &quot;3.2&quot;
                                 +--rdf:_2-----&gt; &quot;4.0&quot;</code></pre></td></tr></tbody></table>

The corresponding XML might look like this:

<table><caption>Figure 2-3b: CC/PP profile using defaults in XML</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><strong>Device profile referencing defaults:</strong><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:ccpp=&quot;http://www.w3.org/2002/11/08-ccpp-schema#&quot;
         xmlns:ex=&quot;http://www.example.com/schema#&quot;&gt;

  &lt;rdf:Description
      rdf:about=&quot;http://www.example.com/profile#MyProfile&quot;&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description
          rdf:about=&quot;http://www.example.com/profile#TerminalHardware&quot;&gt;
        &lt;rdf:type
            rdf:resource=&quot;http://www.example.com/schema#HardwarePlatform&quot; /&gt;
        &lt;ccpp:defaults
            rdf:resource=&quot;http://www.example.com/hardwareProfile#HWDefault&quot; /&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description
          rdf:about=&quot;http://www.example.com/profile#TerminalSoftware&quot;&gt;
        &lt;rdf:type
            rdf:resource=&quot;http://www.example.com/schema#SoftwarePlatform&quot; /&gt;
        &lt;ccpp:defaults
            rdf:resource=&quot;http://www.example.com/softwareProfile#SWDefault&quot; /&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description
          rdf:about=&quot;http://www.example.com/profile#TerminalBrowser&quot;&gt;
        &lt;rdf:type
            rdf:resource=&quot;http://www.example.com/schema#BrowserUA&quot; /&gt;
        &lt;ccpp:defaults
            rdf:resource=&quot;http://www.example.com/terminalProfile#UADefault&quot; /&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

  &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre><strong>Defaults for HardwarePlatform:</strong><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:ex=&quot;http://www.example.com/schema#&quot;&gt;
  &lt;rdf:Description
      rdf:about=&quot;http://www.example.com/hardwareProfile#HWDefault&quot;&gt;
    &lt;rdf:type
        rdf:resource=&quot;http://www.example.com/schema#HardwarePlatform&quot; /&gt;
    &lt;ex:displayWidth&gt;320&lt;/ex:displayWidth&gt;
    &lt;ex:displayHeight&gt;200&lt;/ex:displayHeight&gt;
  &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre><strong>Defaults for SoftwarePlatform:</strong><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:ex=&quot;http://www.example.com/schema#&quot;&gt;
  &lt;rdf:Description
      rdf:about=&quot;http://www.example.com/softwareProfile#SWDefault&quot;&gt;
    &lt;rdf:type
        rdf:resource=&quot;http://www.example.com/schema#SoftwarePlatform&quot; /&gt;
    &lt;ex:name&gt;EPOC&lt;/ex:name&gt;
    &lt;ex:version&gt;2.0&lt;/ex:version&gt;
    &lt;ex:vendor&gt;Symbian&lt;/ex:vendor&gt;
  &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre><strong>Defaults for BrowserUA:</strong><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:ex=&quot;http://www.example.com/schema#&quot;&gt;
  &lt;rdf:Description
      rdf:about=&quot;http://www.example.com/terminalProfile#UADefault&quot;&gt;
    &lt;rdf:type
        rdf:resource=&quot;http://www.example.com/schema#BrowserUA&quot; /&gt;
    &lt;ex:name&gt;Mozilla&lt;/ex:name&gt;
    &lt;ex:version&gt;5.0&lt;/ex:version&gt;
    &lt;ex:vendor&gt;Symbian&lt;/ex:vendor&gt;
    &lt;ex:htmlVersionsSupported&gt;
      &lt;rdf:Bag&gt;
        &lt;rdf:li&gt;3.2&lt;/rdf:li&gt;
        &lt;rdf:li&gt;4.0&lt;/rdf:li&gt;
      &lt;/rdf:Bag&gt;
    &lt;/ex:htmlVersionsSupported&gt;
  &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre></td></tr></tbody></table>

If a given attribute value is applied directly to a component resource, and also appears on a resource referenced by the *`ccpp`*`:defaults` property, the directly applied value takes precedence:

<table><caption>Figure 2-4a: Overriding a default value</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>[ex:MyProfile]
 |
 +--ccpp:component--&gt; [ex:TerminalHardware]
                       |
                       +--rdf:type--------&gt; [ex:HardwarePlatform]
                       +--ccpp:defaults---&gt; [ex:HWDefault]
                       +--ex:memoryMb-------&gt; &quot;32&quot;

[ex:HWDefault]
 |
 +--rdf:type----&gt; [ex:HardwarePlatform]
 +--ex:displayWidth--&gt; &quot;320&quot;
 +--ex:displayHeight--&gt; &quot;200&quot;
 +--ex:memoryMb---&gt; &quot;16&quot;</code></pre></td></tr></tbody></table>

In this example, the default component indicates 16 Mb of memory, but this value is overridden by the `memoryMb` property applied directly to the profile component. Thus, in this profile, the `memoryMb` attribute has a value of 32.

The corresponding XML might look like this:

<table><caption>Figure 2-4b: Overriding a default value in XML</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><strong>Device profile referencing defaults:</strong><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:ccpp=&quot;http://www.w3.org/2002/11/08-ccpp-schema#&quot;
         xmlns:ex=&quot;http://www.example.com/schema#&quot;&gt;

  &lt;rdf:Description
      rdf:about=&quot;http://www.example.com/profile#MyProfile&quot;&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description
          rdf:about=&quot;http://www.example.com/profile#TerminalHardware&quot;&gt;
        &lt;rdf:type
            rdf:resource=&quot;http://www.example.com/schema#HardwarePlatform&quot; /&gt;
        &lt;ccpp:defaults
            rdf:resource=&quot;http://www.example.com/hardwareProfile#HWDefault&quot; /&gt;
        &lt;ex:memoryMb&gt;32&lt;/ex:memoryMb&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

  &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre><strong>Defaults for HardwarePlatform:</strong><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:ex=&quot;http://www.example.com/schema#&quot;&gt;
  &lt;rdf:Description
      rdf:about=&quot;http://www.example.com/hardwareProfile#HWDefault&quot;&gt;
    &lt;rdf:type
        rdf:resource=&quot;http://www.example.com/schema#HardwarePlatform&quot; /&gt;
    &lt;ex:displayWidth&gt;320&lt;/ex:displayWidth&gt;
    &lt;ex:displayHeight&gt;200&lt;/ex:displayHeight&gt;
    &lt;ex:memoryMb&gt;16&lt;/ex:memoryMb&gt;
  &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre></td></tr></tbody></table>

A resource indicated by a default property may appear in a separate document, in which case an absolute URI reference should be specified for the default resource. In such cases, the URI part of the default resource identifier (i.e. not including the fragment identifier part) is used to retrieve an RDF document containing the default resource description. Thus, if the default resource is named `http://example.com/DeviceProfile#HardwarePlatform`, the URI `http://example.com/DeviceProfile` is used to retrieve an RDF document, and a resource within that document having the local identifier `#HardwarePlatform` is taken as the default resource. (Such a resource might be defined within the target document using "`about='http://example.com/DeviceProfile#HardwarePlatform'`" or "`ID='HardwarePlatform'`". See also section [3.5.](#RDFUsage))

> ***NOTE***: Individual applications may allow relative URIs to be used. Those that do should specify exactly how the corresponding RDF document is located.

### <span id="ExtensibilityNamespaces"></span>2.2 Extensibility and namespaces

CC/PP is extended primarily through the introduction of new attribute vocabularies.

Any application or operational environment that uses CC/PP may define its own vocabulary, but wider interoperability is enhanced if vocabularies are defined that can be used more generally; e.g. a standard extension vocabulary for imaging devices, or voice messaging devices, or wireless access devices, etc. Accordingly, this specification defines a small core vocabulary of features that are applicable to range of print and display agents whose use, where appropriate, is strongly recommended. This core vocabulary is based on IETF specification RFC2534 [\[RFC2534\]](#8), and serves as an example of how CC/PP attribute vocabularies may be defined. Another such example is the WAP Forum UAProf specification [\[UAPROF\]](#9).

Any CC/PP expression can use terms drawn from an arbitrary number of different vocabularies, so there is no restriction caused by re-using terms from an existing vocabulary rather then defining new names to identify the same information. Each vocabulary is associated with an XML namespace, as are the names that describe the underlying RDF and CC/PP structures.

XML namespaces [\[XMLNAMESPACES\]](#2) define a notation for associating convenient name forms with arbitrary URIs. The RDF graph syntax does not specifically employ namespaces, but XML serializations of an RDF graph do. We also use namespace prefixes when presenting RDF in the graph notation described above.

The CC/PP framework uses the XML namespace mechanism to create identifying URIs for RDF core elements, CC/PP structural elements and CC/PP attribute vocabularies. Consider the following namespace declaration example:

<table><caption>Figure 2-7: Example namespace declarations</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
     xmlns:ccpp=&quot;http://www.w3.org/2002/11/08-ccpp-schema#&quot;
     xmlns:prf=&quot;http://www.wapforum.org/profiles/UAPROF/ccppschema-20010430#&quot;&gt;</code></pre></td></tr></tbody></table>

The first namespace declaration is for RDF usage. The second declaration names the CC/PP core structural vocabulary, which includes "`component`", "`defaults`" and other properties that are intrinsic to the CC/PP framework. The third namespace declaration names a component CC/PP properties vocabulary.

> ***NOTE:*** Remember that the namespace prefixes are quite arbitrary: applications MUST NOT assume that the prefix `rdf:` refers to the RDF vocabulary, or that `ccpp:` refers to the intrinsic CC/PP vocabulary, etc. It is the URI to which a namespace prefix is bound that matters.

> ***NOTE:*** Although namespace names are identified by URI references, there is no requirement that a schema be available at that URI. In the above example, the UAProf namespace name is "`http://www.wapforum.org/UAPROF/ccppschema-20000405#`" yet there is no schema at that URI. It is generally preferred practice that a corresponding schema exists at the URL used to identify a namespace, but this is not a requirement and CC/PP applications MUST NOT assume that such a schema will exist.

The use of multiple component property vocabularies is allowed and encouraged. Different user communities and application domains (WAP Forum, ETSI, MExE, IETF CONNEG, etc.) may define their own property vocabularies. This is an important mechanism for providing support for the needs of those communities.

The following namespaces are introduced by the CC/PP framework:

**[http://www.w3.org/2002/11/08-ccpp-schema](/2002/11/08-ccpp-schema)**\#

> Normative RDF schema defining class declarations for CC/PP, and core structural properties (listed in [Appendix B.3](#xtocid-33666558)).

**[http://www.w3.org/2002/11/08-ccpp-client](/2002/11/08-ccpp-client)**\#

> Example but non-normative vocabulary for describing simple client capabilities, with particular relevance to print and display clients (listed in [Appendix C](#Appendix_C)).

> ***NOTE:*** To retrieve these schemas it is necessary for your browser to add the header `Accept:text/xml` in the request. Browsers that do not add this accept header or use the header `Accept:*/*` or variants thereof will receive a HTML page that notes these are namespaces reserved for the CC/PP Schemas.

<span id="CCPPStructure"></span>3. CC/PP structure
--------------------------------------------------

The general structure of a CC/PP client profile is a two-level tree: components and attributes, with provision for each component to reference an externally defined set of default attribute values.

### <span id="ProfileComponents"></span>3.1 Components

A CC/PP profile contains one or more components, and each component contains one or more attributes. Each component is represented by a resource of type `ccpp:Component` (or some RDFS subclass thereof), and related to the client profile resource by a `ccpp:component` property. Here, the `ccpp` namespace is http://www.w3.org/2002/11/08-ccpp-schema\#. For compatibility with UAProf, the namespace used to qualify `component` MAY be a UAProf namespace.

The object of a `ccpp:Component` resource MAY have an `rdf:type` property (or equivalent RDF structure) indicating what kind of client component it describes. The example in figure 2-2b is of a profile with an explicit indication of component subtype. However, CC/PP processors MUST be able to handle profiles that do not contain component type indicators. As long as the CC/PP attributes used are all specific to a given component type, a processor will have sufficient information to interpret them properly. No more than one instance of a component type should be present for any given profile resource.

If a CC/PP profile uses any attribute that can appear on different component types, then the type of any component on which such an attribute appears MUST be indicated by an `rdf:type` property, or equivalent RDF. A CC/PP processor MUST be able to use this type information to disambiguate application of any attribute used.

### <span id="ProfileAttributes"></span>3.2 Attributes

CC/PP profiles are constructed using RDF [\[RDF\]](#3). The RDF data model represents CC/PP attributes as named *properties* linking a *subject* resource to an associated *object* resource or RDF literal value.

To describe client capabilities and preferences, the client being described is a resource whose features are described by labeled graph edges from that resource to corresponding object values. The graph edge labels identify the client feature (CC/PP attribute) being described, and the corresponding object values are the feature values.

<table><caption>Figure 3-1: RDF statement describing a client attribute</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>[Client component resource] --attributeName--&gt; (Attribute-value)</code></pre></td></tr></tbody></table>

CC/PP attribute labels are represented by XML name values (per XML specification [\[XML\]](#1), section 2.3), which may include a namespace prefix (i.e. a *qualified name*, per XML namespaces [\[XMLNAMESPACES\]](#2), section 3). When combined with the corresponding namespace or default namespace declaration, each label MUST be mapped to a URI. Thus, CC/PP attribute names are URIs, with XML namespace syntax used to avoid some of the RDF expressions becoming too cumbersome.

Attribute values may be of simple or structured data types.

Simple data types are discussed in the section [4.1.1](#SimpleAttribute). Each basic data type may support a range of tests that can be used in the process of determining the suitability of different resource variants for presentation by a client; e.g. equality, compatibility, less-than, greater-than, etc.

Structured data types are supported through the use of specific RDF properties that join simple RDF literal values into composites. Specific CC/PP semantics for RDF properties used in this way are discussed in the section [4.1.2](#ComplexAttribute).

### <span id="ProfileDefaults"></span>3.3 Defaults

Each component of a client profile may indicate a single separate resource that in turn indicates a subordinate collection of default attribute values. This collection of default values can be a separate RDF document that is named via a URI, or can appear in the same document as the client profile (though, in practice, there is probably little value in defaults in the same document). If an attribute in the collection of defaults is also present in the main part of the client profile, the non-default value takes precedence. The intent is that a hardware vendor or system supplier may provide default values that are common to a number of systems in a place easily accessible to an origin server, and then use the client profile to specify variations from the common profile. The owner of the product or system operator may be able to add or change options, such as additional memory, that add new capabilities or change the values of some original capabilities.

Default values are referenced by the property *`ccpp`*`:defaults`. This name conforms to the name format recommendations of the RDF model and syntax specification [\[RDF\]](#3), Appendix C.1. However, for compatibility with earlier versions of CC/PP used with UAProf, CC/PP processors SHOULD recognize the property name `ccpp:Defaults` (i.e. with capital "D") as equivalent. Here, the `ccpp` namespace is http://www.w3.org/2002/11/08-ccpp-schema\#. For compatibility with UAProf, the namespace used to qualify `defaults` or `Defaults` MAY be a UAProf namespace.

Defaults can be encoded inline or as separate documents referred to via URI. Defaults can not be encoded both inline and as a separate document. It is the responsibility of any server interpreting a CC/PP to combine profiles with any externally referenced defaults in such a way as to be able to correctly interpret the profile. A profile with defaults in the same document is logically equivalent to a profile with the same non-default data and referenced external document(s) containing the default values. Here is a simple profile graph using default values:

<table><caption>Figure 3-2a: CC/PP profile using defaults</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>[ex:MyProfile]
 |
 +--ccpp:component--&gt; [ex:TerminalHardware]
 |                     |
 |                     +--rdf:type-------&gt; [ex:HardwarePlatform]
 |                     +--ccpp:defaults--&gt; [ex:HWDefault]
 |                     +--ex:displayWidth--&gt; &quot;640&quot;
 |                     +--ex:displayHeight-&gt; &quot;400&quot;
 |
 +--ccpp:component--&gt; [ex:TerminalSoftware]
 |                     |
 |                     +--rdf:type-------&gt; [ex:SoftwarePlatform]
 |                     +--ccpp:defaults--&gt; [ex:SWDefault]
 |
 +--ccpp:component--&gt; [ex:TerminalBrowser]
                       |
           ------------
          |
          +--rdf:type-------&gt; [ex:BrowserUA]
          +--ccpp:defaults--&gt; [ex:UADefault]
          +--ex:htmlVersionsSupported--&gt; { &quot;2.0&quot;, &quot;3.2&quot;, &quot;4.0&quot; }

[ex:HWDefault]
 |
 +--rdf:type----&gt; [ex:HardwarePlatform]
 +--ex:cpu------&gt; &quot;PPC&quot;
 +--ex:displayWidth--&gt; &quot;320&quot;
 +--ex:displayHeight--&gt; &quot;200&quot;

[ex:SWDefault]
 |
 +--rdf:type----&gt; [ex:SoftwarePlatform]
 +--ex:name-----&gt; &quot;EPOC&quot;
 +--ex:version--&gt; &quot;2.0&quot;
 +--ex:vendor---&gt; &quot;Symbian&quot;

[ex:UADefault]
 |
 +--rdf:type----&gt; [ex:BrowserUA]
 +--ex:name-----&gt; &quot;Mozilla&quot;
 +--ex:version--&gt; &quot;5.0&quot;
 +--ex:vendor---&gt; &quot;Symbian&quot;
 +--ex:htmlVersionsSupported--&gt; { &quot;3.2&quot;, &quot;4.0&quot; }</code></pre></td></tr></tbody></table>

If a component referenced by `ccpp:defaults` contains an attribute that is not present on the referencing profile component, then the effect is as if the attribute value in the default component is applied directly to the profile component. For example the profile in Figure 3-2a should be interpreted as describing the same capabilities as shown in Figure 3-2b.

<table><caption>Figure 3-2b: Resolving a CC/PP profile using defaults</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>[ex:MyProfile]
 |
 +--ccpp:component--&gt; [ex:TerminalHardware]
 |                     |
 |                     +--rdf:type-------&gt; [ex:HardwarePlatform]
 |                     +--ex:displayWidth--&gt; &quot;640&quot;
 |                     +--ex:displayHeight-&gt; &quot;400&quot;
 |                     +--ex:cpu------&gt; &quot;PPC&quot;
 |
 +--ccpp:component--&gt; [ex:TerminalSoftware]
 |                     |
 |                     +--rdf:type-------&gt; [ex:SoftwarePlatform]
 |                     +--ex:name-----&gt; &quot;EPOC&quot;
 |                     +--ex:version--&gt; &quot;2.0&quot;
 |                     +--ex:vendor---&gt; &quot;Symbian&quot;
 |
 +--ccpp:component--&gt; [ex:TerminalBrowser]
                       |
           ------------
          |
          +--rdf:type-------&gt; [ex:BrowserUA]
          +--ex:htmlVersionsSupported--&gt; { &quot;2.0&quot;, &quot;3.2&quot;, &quot;4.0&quot; }
          +--ex:name-----&gt; &quot;Mozilla&quot;
          +--ex:version--&gt; &quot;5.0&quot;
          +--ex:vendor---&gt; &quot;Symbian&quot;</code></pre></td></tr></tbody></table>

And here is the corresponding XML serialization, with the default resource descriptions coded inline in the client profile description. Note that this example uses a default namespace for RDF elements, but still must use explicit namespace prefixes for RDF attributes.

<table><caption>Figure 3-2c: CC/PP profile using inline defaults, in XML</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:ccpp=&quot;http://www.w3.org/2002/11/08-ccpp-schema#&quot;
         xmlns:prf=&quot;http://example.com/Schema#&quot;&gt;

  &lt;rdf:Description rdf:about=&quot;http://example.com/MyProfile&quot;&gt;
    &lt;ccpp:component&gt;
      &lt;rdf:Description rdf:about=&quot;http://example.com/TerminalHardware&quot;&gt;
        &lt;rdf:type rdf:resource=&quot;http://example.com/Schema#HardwarePlatform&quot;/&gt;
        &lt;ccpp:defaults&gt;
          &lt;rdf:Description rdf:about=&quot;http://example.com/HWDefault&quot;&gt;
            &lt;rdf:type rdf:resource=&quot;http://example.com/Schema#HardwarePlatform&quot;/&gt;
            &lt;prf:cpu&gt;PPC&lt;/prf:cpu&gt;
            &lt;prf:displayWidth&gt;320&lt;/prf:displayWidth&gt;
            &lt;prf:displayHeight&gt;200&lt;/prf:displayHeight&gt;
          &lt;/rdf:Description&gt;
        &lt;/ccpp:defaults&gt;
        &lt;prf:displayHeight&gt;640&lt;/prf:displayHeight&gt;
        &lt;prf:displayWidth&gt;400&lt;/prf:displayWidth&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description rdf:about=&quot;http://example.com/TerminalSoftware&quot;&gt;
        &lt;rdf:type rdf:resource=&quot;http://example.com/Schema#SoftwarePlatform&quot; /&gt;
        &lt;ccpp:defaults&gt;
          &lt;rdf:Description rdf:about=&quot;http://example.com/SWDefault&quot;&gt;
            &lt;rdf:type rdf:resource=&quot;http://example.com/Schema#SoftwarePlatform&quot;/&gt;
            &lt;prf:name&gt;EPOC&lt;/prf:name&gt;
            &lt;prf:vendor&gt;Symbian&lt;/prf:vendor&gt;
            &lt;prf:version&gt;2.0&lt;/prf:version&gt;
          &lt;/rdf:Description&gt;
        &lt;/ccpp:defaults&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description rdf:about=&quot;http://example.com/Browser&quot;&gt;
        &lt;rdf:type rdf:resource=&quot;http://example.com/Schema#BrowserUA&quot; /&gt;
        &lt;ccpp:defaults&gt;
          &lt;rdf:Description rdf:about=&quot;http://example.com/UADefault&quot;&gt;
            &lt;rdf:type rdf:resource=&quot;http://example.com/Schema#BrowserUA&quot;/&gt;
            &lt;prf:name&gt;Mozilla&lt;/prf:name&gt;
            &lt;prf:vendor&gt;Symbian&lt;/prf:vendor&gt;
            &lt;prf:version&gt;5.0&lt;/prf:version&gt;
            &lt;prf:htmlVersionsSupported&gt;
              &lt;rdf:Bag&gt;
                &lt;rdf:li&gt;3.2&lt;/rdf:li&gt;
                &lt;rdf:li&gt;4.0&lt;/rdf:li&gt;
              &lt;/rdf:Bag&gt;
            &lt;/prf:htmlVersionsSupported&gt;
          &lt;/rdf:Description&gt;
        &lt;/ccpp:defaults&gt;
        &lt;prf:htmlVersionsSupported&gt;
          &lt;rdf:Bag&gt;
            &lt;rdf:li&gt;2.0&lt;/rdf:li&gt;
            &lt;rdf:li&gt;3.2&lt;/rdf:li&gt;
            &lt;rdf:li&gt;4.0&lt;/rdf:li&gt;
          &lt;/rdf:Bag&gt;
        &lt;/prf:htmlVersionsSupported&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;
  &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre></td></tr></tbody></table>

Inline defaults are logically equivalent to defaults contained in an external referenced document, and such external documents would be a normal way of providing default values. The following is the XML serialization of the same profile with references to externally defined defaults:

<table><caption>Figure 3-3: CC/PP profile referencing externally defined defaults, in XML</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:ccpp=&quot;http://www.w3.org/2002/11/08-ccpp-schema#&quot;
         xmlns:prf=&quot;http://example.com/Schema#&quot;&gt;

  &lt;rdf:Description rdf:about=&quot;http://example.com/MyProfile&quot;&gt;
    &lt;ccpp:component&gt;
      &lt;rdf:Description rdf:about=&quot;http://example.com/TerminalHardware&quot;&gt;
        &lt;rdf:type rdf:resource=&quot;http://example.com/Schema#HardwarePlatform&quot;/&gt;
        &lt;ccpp:defaults rdf:resource=&quot;http://example.com/HWDefault&quot;/&gt;
        &lt;prf:displayWidth&gt;640&lt;/prf:displayWidth&gt;
        &lt;prf:displayHeight&gt;400&lt;/prf:displayHeight&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description rdf:about=&quot;http://example.com/TerminalSoftware&quot;&gt;
        &lt;rdf:type rdf:resource=&quot;http://example.com/Schema#SoftwarePlatform&quot; /&gt;
        &lt;ccpp:defaults rdf:resource=&quot;http://example.com/SWDefault&quot;/&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description rdf:about=&quot;http://example.com/Browser&quot;&gt;
        &lt;rdf:type rdf:resource=&quot;http://example.com/Schema#BrowserUA&quot; /&gt;
        &lt;ccpp:defaults rdf:resource=&quot;http://example.com/UADefault&quot;/&gt;
        &lt;prf:htmlVersionsSupported&gt;
          &lt;rdf:Bag&gt;
            &lt;rdf:li&gt;2.0&lt;/rdf:li&gt;
            &lt;rdf:li&gt;3.2&lt;/rdf:li&gt;
            &lt;rdf:li&gt;4.0&lt;/rdf:li&gt;
          &lt;/rdf:Bag&gt;
        &lt;/prf:htmlVersionsSupported&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;
  &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre></td></tr></tbody></table>

Each external defaults resource is a separate RDF document referenced by a URI.

> ***NOTE**:* A default document uses a `<rdf:Description>` element as its root node. The `<rdf:Description>` is named using an `rdf:about` whose value is a URI. This URI MUST correspond to the value of the `rdf:resource` XML attribute in the `<ccpp:defaults>` element in the referencing document. (The default component does not need to be identified when it occurs inline, as in the first example above.) In the examples of default documents below, the URLs of the external default values documents are used. However the default resource URI does not have to be the document URL, as long as the URI is uniquely identified, the same URI is used in both the source document and the external default values document, and there is some way for the processing software to locate and retrieve the document containing the default resource.

Examples of default documents referenced by the previous example are as follows:

<table><caption>Figure 3-4: External HardwarePlatform default values</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><strong>Document: http://example.com/HWDefault</strong><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:prf=&quot;http://example.com/Schema#&quot;&gt;
   &lt;rdf:Description rdf:about=&quot;http://example.com/HWDefault&quot;&gt;
     &lt;rdf:type rdf:resource=&quot;http://example.com/Schema#HardwarePlatform&quot;/&gt;
     &lt;prf:cpu&gt;PPC&lt;/prf:cpu&gt;
     &lt;prf:displayWidth&gt;320&lt;/prf:displayWidth&gt;
     &lt;prf:displayHeight&gt;200&lt;/prf:displayHeight&gt;
   &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre></td></tr></tbody></table>

 

<table><caption>Figure 3-5: External SoftwarePlatform default values</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><strong>Document: http://example.com/SWDefault</strong><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:prf=&quot;http://example.com/Schema#&quot;&gt;
   &lt;rdf:Description rdf:about=&quot;http://example.com/SWDefault&quot;&gt;
     &lt;rdf:type rdf:resource=&quot;http://example.com/Schema#SoftwarePlatform&quot;/&gt;
     &lt;prf:name&gt;EPOC&lt;/prf:name&gt;
     &lt;prf:vendor&gt;Symbian&lt;/prf:vendor&gt;
     &lt;prf:version&gt;2.0&lt;/prf:version&gt;
   &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre></td></tr></tbody></table>

 

<table><caption>Figure 3-6: External BrowseUA default values</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><strong>Document: http://example.com/UADefault</strong><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:prf=&quot;http://example.com/Schema#&quot;&gt;
  &lt;rdf:Description rdf:about=&quot;http://example.com/UADefault&quot;&gt;
    &lt;rdf:type rdf:resource=&quot;http://example.com/Schema#BrowserUA&quot;/&gt;
    &lt;prf:name&gt;Mozilla&lt;/prf:name&gt;
    &lt;prf:vendor&gt;Symbian&lt;/prf:vendor&gt;
    &lt;prf:version&gt;5.0&lt;/prf:version&gt;
    &lt;prf:htmlVersionsSupported&gt;
      &lt;rdf:Bag&gt;
        &lt;rdf:li&gt;3.2&lt;/rdf:li&gt;
        &lt;rdf:li&gt;4.0&lt;/rdf:li&gt;
      &lt;/rdf:Bag&gt;
    &lt;/prf:htmlVersionsSupported&gt;
  &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre></td></tr></tbody></table>

### <span id="DistinguishStructAttrib"></span>3.4 Distinguishing profile structure from attributes

CC/PP uses namespaces to distinguish the vocabulary associated with the structure (e.g. `ccpp:component`) from vocabularies associated with applications (e.g. TerminalHardware, display).

In this example we use the namespace "`http://www.wapforum.org/profiles/UAPROF/ccppschema-20010430#`", associated with prefix "`prf:`", to describe properties that are not defined in the CC/PP or RDF namespaces:

<table><caption>Figure 3-7: XML serialization of CC/PP profile, with namespaces</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;rdf:RDF xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;
         xmlns:ccpp=&quot;http://www.w3.org/2002/11/08-ccpp-schema#&quot;
         xmlns:prf=&quot;http://www.wapforum.org/profiles/UAPROF/ccppschema-20010430#&quot;&gt;

  &lt;rdf:Description rdf:about=&quot;http://example.com/MyProfile&quot;&gt;
    &lt;ccpp:component&gt;
      &lt;rdf:Description rdf:about=&quot;http://example.com/TerminalHardware&quot;&gt;
        &lt;rdf:type rdf:resource=&quot;http://www.wapforum.org/profiles/UAPROF/ccppschema-20010430#HardwarePlatform&quot; /&gt;
        &lt;prf:CPU&gt;PPC&lt;/prf:CPU&gt;
        &lt;prf:ScreenSize&gt;320x200&lt;/prf:ScreenSize&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description rdf:about=&quot;http://example.com/TerminalSoftware&quot;&gt;
        &lt;rdf:type rdf:resource=&quot;http://www.wapforum.org/profiles/UAPROF/ccppschema-20010430#SoftwarePlatform&quot; /&gt;
        &lt;prf:OSName&gt;EPOC&lt;/prf:OSName&gt;
        &lt;prf:OSVendor&gt;Symbian&lt;/prf:OSVendor&gt;
        &lt;prf:OSVersion&gt;2.0&lt;/prf:OSVersion&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;

    &lt;ccpp:component&gt;
      &lt;rdf:Description rdf:about=&quot;http://example.com/Browser&quot;&gt;
        &lt;rdf:type rdf:resource=&quot;http://www.wapforum.org/profiles/UAPROF/ccppschema-20010430#BrowserUA&quot; /&gt;
        &lt;prf:BrowserName&gt;Mozilla&lt;/prf:BrowserName&gt;
        &lt;prf:BrowserVersion&gt;5.0&lt;/prf:BrowserVersion&gt;
        &lt;prf:HtmlVersion&gt;
          &lt;rdf:Bag&gt;
            &lt;rdf:li&gt;3.2&lt;/rdf:li&gt;
            &lt;rdf:li&gt;4.0&lt;/rdf:li&gt;
          &lt;/rdf:Bag&gt;
        &lt;/prf:HtmlVersion&gt;
      &lt;/rdf:Description&gt;
    &lt;/ccpp:component&gt;
  &lt;/rdf:Description&gt;
&lt;/rdf:RDF&gt;</code></pre></td></tr></tbody></table>

All RDF resources that relate to the overall structure of CC/PP are defined in the *`ccpp`*`:` namespace, and have associated schema properties that allow them to be distinguished from attribute vocabulary or other RDF statements by a schema-aware processor.

### <span id="RDFUsage"></span>3.5 Notes on RDF usage

This specification uses "`rdf:about`" to specify the URIs of resources in examples. This was a deliberate choice to ensure that such URIs are absolutely and unambiguously specified. This is also different to UAProf, which uses both "`rdf:about`" and "`rdf:ID`".

CC/PP allows "`rdf:ID`" attributes or "`rdf:about`" attributes. However, the values of "`rdf:ID`" attributes represent URIs which are relative to the base URI of the document [\[RDFFRAGMENT\]](#34). When a document is moved to another location on the web the meaning of the value of an "`rdf:ID`" attribute changes. The meaning is undefined when the RDF is contained in a document with no base URI, e.g. when encapsulated in a message. The RDFCore WG have a Working Draft [\[RDFXML\]](#36) that proposes that RDF should support "`xml:base`" attributes. If this addition to RDF achieves recommendation status, then it would be appropriate to use "`rdf:ID`" attributes in conjunction with an "`xml:base`" attribute instead of "`rdf:about`" attributes. For now we recommend that CC/PP profiles SHOULD use "`rdf:about`" and that the URIs of resources are fully specified.

The component resources in a profile are instances of components identified in the corresponding schema, which in turn MUST be subclasses of *`ccpp`*`:Component`. They may usefully be identified as such, by means of the *`rdf`*`:type` property whose value matches the name of the component type in the schema. (Sometimes this type indication MUST be present: see [section 3.1, Components](#ProfileComponents).)

### <span id="xtocid-58647528">3.6 RDF graph composition</span>

The RDF statements that make up an RDF graph do not necessarily occur in a single document. For CC/PP, the profile delivered may contain references to RDF subgraphs that are transferred separately, or are retrieved from designated Web resources.

When an external sub-graph is referenced in this way, the effect is equivalent to taking the sets of RDF statement "triples" described by the referencing document and the referenced document, and constructing a new document that describes the union of these sets. (***NOTE:*** implementations are **not** required to actually construct such a document, just to interpret the RDF statements as they would from a single document.)

This composition of multiple RDF documents presumes that the content of the referenced document is trusted to accurately represent the capabilities that are presented to the sender of some resource data. Accordingly, such composition is restricted to documents describing resources referenced by properties whose intended interpretation embodies such a notion of trust; *viz.* `ccpp:defaults`.

<span id="AttributeVocabularies"></span>4. Attribute vocabularies
-----------------------------------------------------------------

### <span id="AttributeData"></span>4.1 Attribute data

This section describes the basic data types and data structuring options that are available for the values associated with a CCPP attribute.

All CC/PP attributes should be defined with values that can be treated as one of the simple or complex data types discussed later. Support for the described formats for attribute values is RECOMMENDED; this specification does not prohibit the use of other valid RDF forms, but provides no guidance for their interpretation. (See also section [1.1](#ScopeOfDocument) and [Appendix F](#Appendix_F).)

#### <span id="SimpleAttribute">4.1.1 Simple CC/PP attribute data</span>

All simple CC/PP attribute values are represented as RDF plain literal values. In RDF/XML these may appear as character sequences either in XML elements or as XML attributes.

The acceptable plain literal values for an attribute may be constrained to the lexical space associated with a specific application data type. This section introduces some specific data types that may be associated with simple CC/PP attributes.

Base CC/PP usage defined here leaves any further interpretation of the values used to the processing application. Future versions of CC/PP may introduce additional structures that provide for standardized matching of client profiles with other resource metadata. To allow such developments, and to ease interworking with IETF media feature descriptions, it is RECOMMENDED that any simple attribute values should be defined in terms of one of the data types described below.

All attribute values are ultimately sequences of UCS (Unicode) characters. It is assumed that character coding issues in specific serializations of the RDF data are defined by the enclosing XML representation.

> ***NOTE***: Attribute comparison is beyond the scope of this document, as are specific mechanisms for determining the simple type corresponding to a given attribute value. Applications are presumed to know how to deal with any CC/PP attribute that they handle.

Where given, formal syntax expressions use the notation presented in Section 6 of the XML specification [\[XML\]](#1).

##### <span id="xtocid-33666539">4.1.1.1 Strings</span>

The data type of a CC/PP attribute value may be defined to be a case sensitive text string.

The RDF literal value is constrained to the lexical space defined in the "string" XML schema datatype [\[XMLSCHEMA-2\]](#14). Any 'lang' tag is ignored.

In general, such values may be compared for equality or inequality. When comparing text values, every character must match exactly for equality to be declared.

Some examples:

-   Browser name: "Mozilla"
-   Browser version: "5.0"

##### <span id="xtocid-33666543">4.1.1.2 Integer numbers</span>

The data type of a CC/PP attribute value may be defined to be an integer number.

The RDF literal value is constrained to the lexical space defined in the "int" XML schema datatype [\[XMLSCHEMA-2\]](#14). Any 'lang' tag is ignored.

Integer numbers may be positive, zero or negative. They are represented by a string containing a sequence of decimal digits, optionally preceded by a '`+`' or '`-`' sign. Leading zeros are permitted and are ignored. The number value is always interpreted as decimal (radix 10). It is RECOMMENDED that implementations generate and support integer values in the range -2147483648 to +2147483647, or -(2^31) to (2^31-1); i.e. integers whose absolute value can be expressed as a 31-bit unsigned binary number.

<table><caption>Figure 4-2: Syntax for integer numbers</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>Signed-integer ::= ( &#39;+&#39; | &#39;-&#39; )? Unsigned-integer


Unsigned-integer ::= Digit (Digit)*</code></pre></td></tr></tbody></table>

Some examples:

-   0
-   1
-   +0768
-   -256

    ***NOTE***: The choice of RECOMMENDED number range support was based on support from Java and other programming languages widely used for the Web.

##### <span id="xtocid-33666544">4.1.1.3 Rational numbers</span>

The data type of a CC/PP attribute value may be defined to be a rational number.

In other words, the RDF literal value is constrained to the lexical space defined below. Any 'lang' tag is ignored.

A rational number is expressed as a ratio of two integer numbers. Two positive integers are separated by a '`/`', and optionally preceded by a '`+`' or '`-`' sign.

It is RECOMMENDED that implementations generate and support numerators of a rational number (the first number, before the '`/`') in the range 0 to 2147483647 (2^31-1), and denominators (after the '`/`') in the range 1 to 2147483647.

<table><caption>Figure 4-3: Syntax for rational numbers</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>Rational-number ::= Signed-integer ( &#39;/&#39; Unsigned-integer )?</code></pre></td></tr></tbody></table>

If the denominator is omitted, a value '`1`' is assumed; i.e. treat value as an Integer.

Some examples:

-   1/2
-   768/1024
-   -254/100
-   +2000/65536

> ***NOTE***: The rational number schema described above may be defined in XML-Schema [\[XMLSCHEMA-0\]](#12) as follows:
>
> <table><caption>Figure 4-4: Possible XML-Schema for rational numbers</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
>   targetNamespace=&quot;http://www.w3.org/TR/2003/WD-CCPP-struct-vocab-20030728/&quot;&gt;
>     &lt;xs:simpleType name=&quot;rational&quot;&gt;
>       &lt;xs:annotation&gt;
>         &lt;xs:documentation&gt;
>           The canonical lexical representation of any value 
>           will be the form of the value reduced to its lowest 
>           common denominator, and with &#39;1&#39; in the denominator 
>           if applicable.
>         &lt;/xs:documentation&gt;
>       &lt;/xs:annotation&gt;
>     &lt;xs:restriction base=&quot;xs:string&quot;&gt;
>       &lt;xs:pattern value=&quot;[-+]?[0-9]+(/0*[1-9][0-9]*)?&quot;/&gt;
>     &lt;/xs:restriction&gt;
>   &lt;/xs:simpleType&gt;
> &lt;/xs:schema&gt;</code></pre></td></tr></tbody></table>
>
> Note that while the pattern above provides a lexical definition, it does so imperfectly: it strictly disallows any whitespace at all. Further, the simple type definition above does not define a numeric value space; ordering, equality, and implied support for arithmetic operations are not defined as some users of the type might expect -- processors need only recognize the definition as a string. Because of these deficiencies, use of rational numbers as defined here may be harmful to interoperability. (The XML-Schema Working Group may define a workable rational data type in the future.)

#### <span id="ComplexAttribute"></span>4.1.2 Complex CC/PP attribute data

In addition to the simple values described above, a CC/PP attribute may have a complex value expressed in the form of a resource with its own collection of RDF properties and associated values. Specific data types represented in this way are:

-   Set of values
-   Sequence of values

A profile MUST NOT have multiple occurrences of a single attribute within a single component. CC/PP attributes that need to have multiple values should use sets or sequences. Other complex CC/PP attribute values may be represented by arbitrary RDF resources. A definition of the interpretation of such values is beyond the scope of this specification.

##### <span id="4.1.2.1">4.1.2.1 Set of values</span>

A set consists of zero, one or more values, all different and whose order is not significant.

Set values are useful for representing certain types of device characteristics; e.g. the range of typefaces that can be supported by a client, or the HTML versions supported by a browser.

A set is represented as an '`rdf:Bag`', with each member of the set corresponding to a property of that resource named '`rdf:_1`', '`rdf:_2`', etc. This construct is described in section 3 of the RDF Model and Syntax specification [\[RDF\]](#3).

<table><caption>Figure 4-4: RDF representation of set values in CC/PP</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>[(Client-resource)]
  +--(attributeName)--&gt; [&lt;rdf:Bag&gt;]
                          +--rdf:_1--&gt; (set-member-value-1)
                          +--rdf:_2--&gt; (set-member-value-2)
                          :
                          +--rdf:_n--&gt; (set-member-value-n)</code></pre></td></tr></tbody></table>

> ***NOTE*:** The '`rdf:Bag`' construct does not require that every contained value be unique. A set cannot contain duplicate values, so every property of an '`rdf:Bag`' used to represent a set must have a distinct value.

There is a clear distinction drawn between an attribute that has a single value, and an attribute whose value is a set with zero, one or more elements:

<table><caption>Figure 4-5: Attribute with set value containing a single member</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>[(Client-resource)]
  +--(attributeName)--&gt; [&lt;rdf:Bag&gt;] --rdf:_1--&gt; (set-member-value)</code></pre></td></tr></tbody></table>

Compare the above attribute value, which is a set containing one element, with the following, which is a simple value:

<table><caption>Figure 4-6: Attribute with a simple value</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>[(Client-resource)]
  +--(attributeName)--&gt; (attribute-value)</code></pre></td></tr></tbody></table>

##### <span id="4.1.2.2">4.1.2.2 Sequence of values</span>

A sequence consists of zero, one or more values, whose order is significant in some way.

Sequence values are useful for a range of client features that may be ordered or ranked in some way; e.g. a list of preferences in some order of preference. This specification does not define the significance of the ordering of values. A vocabulary that defines a sequence-valued CC/PP attribute should also define the significance of the ordering of within the sequence.

A sequence is represented as an '`rdf:Seq`', with each member of the set corresponding to a property of that resource named '`rdf:_1`', '`rdf:_2`', etc. This construct is described in section 3 of the RDF Model and Syntax specification [\[RDF\]](#3).

<table><caption>Figure 4-7: RDF representation of sequence values in CC/PP</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>[(Client-resource)]
  +--(attributeName)--&gt; [&lt;rdf:Seq&gt;]
                          +--rdf:_1--&gt; (sequence-value-1)
                          +--rdf:_2--&gt; (sequence-value-2)
                          :
                          +--rdf:_n--&gt; (sequence-value-n)</code></pre></td></tr></tbody></table>

There is a clear distinction drawn between an attribute that has a single value, and an attribute whose value is a sequence with zero, one or more elements:

<table><caption>Figure 4-8: Attribute with sequence value containing a single member</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>[(Client-resource)]
  +--(attributeName)--&gt; [&lt;rdf:Seq&gt;] --rdf:_1--&gt; (sequence-value)</code></pre></td></tr></tbody></table>

Compare the above attribute value, which is a sequence containing one element, with the simple value as shown in figure 4-6 above.

### <span id="xtocid-33666547">4.2 Attribute identifiers</span>

CC/PP attribute names are in the form of a URI. Any CC/PP vocabulary is associated with an XML namespace, which combines a base URI with a local XML element name (or XML attribute name) to yield a URI corresponding to an attribute name. E.g. the namespace URI:

>     http://www.w3.org/2002/11/08-ccpp-client#

and the core vocabulary name:

>     type

are combined to yield the attribute name URI reference:

>     http://www.w3.org/2002/11/08-ccpp-client#type

Anyone can define and publish a CC/PP vocabulary extension (assuming administrative control or allocation of a URI for an XML namespace). For such a vocabulary to be useful, it must be interpreted in the same way by communicating entities. Thus, use of an existing extension vocabulary is encouraged wherever possible; failing this, publication of a new vocabulary definition containing detailed descriptions of the new CC/PP attributes.

Many extension vocabularies will be drawn from existing applications and protocols; e.g. WAP UAProf, IETF media feature registrations, etc. [Appendix E](#Appendix_E) surveys some possible sources of additional CC/PP vocabularies.

### <span id="xtocid-33666548">4.3 RDF vocabulary schema</span>

Attribute names are defined, and associated with an XML namespace, using an RDF schema.

[Appendix B](#Appendix_B) to this document contains an RDF schema describing terms for use in CC/PP profiles. [Appendix C](#Appendix_C) contains an example Schema describing a CC/PP vocabulary. [Appendix D](#Appendix_D) contains recommendations for creating a new vocabulary.

A CC/PP processor is not required to understand and process RDF Schema definitions; it merely needs to understand enough about the CC/PP profile structure and vocabulary used to perform its job. (A schema-aware processor may be able to handle CC/PP profiles in other ways, or in combination with other RDF information, but such behavior is beyond the scope of this specification.)

<span id="Conformance"></span>5. Conformance
--------------------------------------------

This section explains how to make a [valid claim](#ConformanceClaims) that a product conforms to this specification. Anyone may make a claim (e.g., vendors about their own products, third parties about those products, journalists about products, etc.). Claims may be published anywhere (e.g., on the Web or in product documentation). Claimants are solely responsible for their claims. If the subject of the claim (e.g., the software) changes after the date of the claim, the claimant is responsible for updating the claim. Claimants are expected to modify or retract a claim if it may be demonstrated that the claim is not valid. Claimants are encouraged to conform to the most recent specification available.

There are three classes of products of CC/PP:

1.  documents (e.g. a web resource)
2.  producers (e.g. a web client)
3.  consumers (e.g. a web server)

### <span id="ConformanceDocument"></span>5.1 CC/PP Document Conformance

Documents may exist as resources accessible via a URL, or may be transmitted as data in a message. A document is CC/PP conformant when it meets the following criteria:

1.  The document MUST be [valid RDF](/RDF/Validator/) serialized in XML, and be based on one or more vocabularies derived from the RDF Schema in [Appendix B](#Appendix_B). See [section 1](#Introduction).
2.  The document MUST use valid syntax for namespace declarations. See [section 2.2](#ExtensibilityNamespaces).
3.  The profile element MUST contain one or more components. See [section 2.1](#CCPPProfileStructOverview).
4.  Each component in the profile MUST contain one or more attributes. See [section 2.1](#CCPPProfileStructOverview).
5.  The component names MAY be in rdf:about or rdf:ID attributes. See [section 3.1](#ProfileComponents).
6.  Components MUST be indicated using a ccpp:component property where the namespace used to qualify component is the CC/PP namespace or a UAProf namespace. See [section 3.1](#ProfileComponents).
7.  Component names, component types, and attribute names must all refer to different URIs within a profile. See [section 3](#CCPPStructure).
8.  If a component type is given as an element name and as an rdf:type element, they MUST refer to the same URI. See [section 3.1](#ProfileComponents).
9.  Default references MUST be valid URLs. See [section 3.3](#ProfileDefaults).
10. Defaults MAY be written as ccpp:defaults or ccpp:Defaults. See [section 3.3](#ProfileDefaults).
11. Defaults MUST be indicated using a ccpp:defaults or ccpp:Defaults property where the namespace used to qualify defaults or Defaults is the CC/PP namespace or a UAProf namespace. See [section 3.3](#ProfileDefaults).
12. Component attributes MAY contain both a default value and a directly applied value, with the directly applied value taking precedence. See [section 3.3](#ProfileDefaults).
13. Components MAY contain inline defaults. See [section 3.3](#ProfileDefaults).
14. Components MUST NOT contain both inline and referenced defaults. See [section 3.3](#ProfileDefaults).
15. Components MAY reference a default document which does not have an rdf:type. See [section 3.3](#ProfileDefaults).
16. Attributes MAY have sets of values (Bags). See [section 4.1.2.1](#4.1.2.1).
17. Attributes MAY have sequences of values (Seq). See [section 4.1.2.2](#4.1.2.2).
18. Attributes MAY have string values. See [section 4.1.1.2](#xtocid-33666539).
19. Attributes MAY have Integer number values. See [section 4.1.1.3](#xtocid-33666543).
20. Attributes MAY have Rational number values. See [section 4.1.1.4](#xtocid-33666544).
21. A component MUST NOT contain more than one attribute with the same name. See [section 3.2](#ProfileAttributes).
22. Attributes of the same name MAY be in different components. See [section 3.1](#ProfileComponents).
23. Profiles MAY use multiple namespaces for attributes. See [section 2.2](#ExtensibilityNamespaces).  

### <span id="ConformanceProducer"></span>5.2 CC/PP Producer Conformance

A producer is CC/PP conformant when any CC/PP profile document generated by the producer is a CC/PP conformant document.

### <span id="ConformanceConsumer"></span>5.3 CC/PP Consumer Conformance

A consumer is CC/PP conformant when the consumer accepts any CC/PP conformant document and extracts CC/PP information. Schema-aware processing is not required, and therefore, support for the RDF Schema in [Appendix B](#Appendix_B) by CC/PP consumers is OPTIONAL (see [section 4.3](#xtocid-33666548)).

There are two categories of conformance for CC/PP consumers:

1.  **Conformant**: a CC/PP consumer can claim to be a *"CC/PP 1.0 conformant consumer"* if it accepts any valid CC/PP profile and extracts information from it.
2.  **Validating**: a CC/PP consumer can claim to be a *"CC/PP 1.0 conformant validating consumer"* if it is conformant and if it rejects all invalid CC/PP profiles.

<span style="font-weight: bold; font-style: italic;">NOTE</span>: A consumer implementation may be configurable to act as either a conformant consumer or a conformant validating consumer at different times.

### <span id="ConformanceClaims"></span>5.4 Conformance Claims

#### <span id="ConformanceClaimsValidity"></span>5.4.1 Validity

A conformance claim is valid if it is [well formed](#ConformanceClaimsWellformed) and meets the appropriate conformance criteria for the applicable product class as given above.

#### <span id="ConformanceClaimsWellformed"></span>5.4.2 Well-formed

A conformance claim is well-formed if it includes the following information:

1.  the date of the claim
2.  the product class (document, producer, or consumer)
3.  the consumer category (conformant or conformant validating) if applicable
4.  the title and dated URI of this document
5.  the product name (identity), including a version, date, or other identifier that uniquely identifies the product

<span id="Acknowledgements"></span>6. Acknowledgments
-----------------------------------------------------

This document is a distillation of many discussions of the W3C CC/PP Working Group, with final amendments introduced by the W3C Device Independence Working Group. The following were CC/PP Working Group members for some or most of the period of preparation of this specification, and its predecessors:

-   Mikael Nilsson, Ericsson Infotech
-   Ulrich Kauschke, T-Mobil
-   Ann Navarro, HTML Writers Guild
-   Brad Topol, IBM
-   Franklin Reynolds, Nokia
-   Graham Klyne, Baltimore Technologies
-   Noboru Iwayama, Fujitsu Laboratories LTD
-   Takashi Nishigaya, Fujitsu Laboratories LTD
-   Lalitha Surayanrayana, SBC Technology Resources
-   Hidetaka Ohto, W3C (through March 2002) / Panasonic
-   Simon McBride, DSTC Pty Ltd
-   Varuni Witana, DSTC Pty Ltd
-   Chris Woodrow, Information Architects
-   Johan Hjelm, Ericsson
-   Barry Briggs, Interleaf
-   Gerd Hoelzing, SAP
-   Ted Hardie, Equinix
-   Serge Rigori, Sun
-   Ted Wugofski, Phone.com
-   Kynn Bartlett, HTML Writers Guild
-   Sandeep Singhal, IBM
-   Thorsten Kassing, T-Mobil
-   Larry Masinter, Adobe

During the period when the CC/PP WG was developing the specification, useful revisions and clarifications were suggested by Yuichi Koike, Stuart Williams, Sean Palmer and Toni Penttinen. Special thanks are due to Aaron Swartz for a very thorough and revealing review of the first last call draft.

Following the handing over of the work to the DI WG, special thanks are also due to David Ezell (XML Schema WG), Brian McBride (RDF Core WG), Masayasu Ishikawa (HTML WG), and Lynne Rosenthal (QA WG) for their help in completing the specification.

The following members of the DI WG also provided assistance in completing the specification: Stephane Boyera, Roger Gimson, Kazuhiro Kitagawa, Andreas Schade.

<span id="xtocid-33666550">7. References</span>
-----------------------------------------------

### <span id="norm_refs">7.1.</span> Normative References

<span id="1"></span>\[XML\]  
Extensible Markup Language (XML) 1.0 (Second Edition); Tim Bray, Jean Paoli, C. M. Sperberg-McQueen, Eve Maler; World Wide Web Consortium Recommendation 6 October 2000: [http://www.w3.org/TR/2000/REC-xml-20001006](/TR/2000/REC-xml-20001006) As amended by: XML 1.0 Second Edition Specification Errata; [http://www.w3.org/XML/xml-V10-2e-errata](/XML/xml-V10-2e-errata), specifically [http://www.w3.org/XML/xml-V10-2e-errata\#E26](/XML/xml-V10-2e-errata#E26).

<span id="2"></span>\[XMLNAMESPACES\]  
Namespaces in XML; Tim Bray, Dave Hollander, Andrew Layman; World Wide Web Consortium Recommendation 14 January 1999: [http://www.w3.org/TR/1999/REC-xml-names-19990114/](/TR/1999/REC-xml-names-19990114/)

<span id="3"></span>\[RDF\]  
Resource Description Framework (RDF) Model and Syntax Specification; Ora Lassila, Ralph Swick; World Wide Web Consortium Recommendation 22 February 1999: [http://www.w3.org/TR/1999/REC-rdf-syntax-19990222/](/TR/1999/REC-rdf-syntax-19990222/)

<span id="4"></span>\[RDFSCHEMA\]  
Resource Description Framework (RDF) Schema Specification; Dan Brickley, R. V. Guha; World Wide Web Consortium Candidate Recommendation 27 March 2000: [http://www.w3.org/TR/2000/CR-rdf-schema-20000327/](/TR/2000/CR-rdf-schema-20000327/)

<span id="36"></span>\[RDFXML\]  
RDF/XML Syntax Specification; Dave Beckett; World Wide Web Consortium Working Draft: [http://www.w3.org/TR/2003/WD-rdf-syntax-grammar-20030123/](/TR/2003/WD-rdf-syntax-grammar-20030123/)

### <span id="inform_refs">7.2.</span> Informative References

<span id="5"></span>\[RFC2506\]  
RFC 2506: Media Feature Tag Registration Procedure; K. Holtman, A. Mutz, T. Hardie; IETF Request for Comments: <ftp://ftp.isi.edu/in-notes/rfc2506.txt>

<span id="6"></span>\[RFC2533\]  
RFC 2533: A Syntax for Describing Media Feature Sets; G. Klyne; IETF Request for Comments: <ftp://ftp.isi.edu/in-notes/rfc2533.txt>

<span id="7"></span>\[CONNEGMATCH\]  
A revised media feature set matching algorithm; G. Klyne; Internet-Draft, work in progress: [draft-klyne-conneg-feature-match-02.txt](http://lists.w3.org/Archives/Public/www-archive/2003Apr/0047.html)

<span id="8"></span>\[RFC2534\]  
RFC 2534: Media Features for Display, Print, and Fax; L. Masinter, D. Wing, A. Mutz, K. Holtman; IETF Request for Comments: <ftp://ftp.isi.edu/in-notes/rfc2534.txt>

<span id="9"></span>\[UAPROF\]  
WAP-174: [UAProf User Agent Profiling Specification (1999)](http://www.wapforum.org/what/technical/SPEC-UAProf-19991110.pdf) as amended by WAP-174\_100 User Agent Profiling Specification Information Note (2001) Wireless Application Protocol Forum available at <http://www.wapforum.org/what/technical_1_2.htm>

Also see WAP-248-UAProf Version 20-Oct-2001 available at <http://www.wapforum.org/what/technical.htm>

<span id="11"></span>\[DATASTRUCTURE\]  
Notes on Data Structuring; C. A. R. Hoare; in Structured Programming, Academic Press, 1972. ISBN 0-12-2000556-2.

<span id="12"></span>\[XMLSCHEMA-0\]  
XML Schema. Part 0: Primer; David C. Fallside; World Wide Web Consortium Recommendation 2 May 2001: [http://www.w3.org/TR/2001/REC-xmlschema-0-20010502/](/TR/2001/REC-xmlschema-0-20010502/)

<span id="13"></span>\[XMLSCHEMA-1\]  
XML Schema. Part 1: Structures; Henry S. Thompson, David Beech, Murray Maloney, Noah Mendelsohn; World Wide Web Consortium Recommendation 2 May 2001: [http://www.w3.org/TR/2001/REC-xmlschema-1-20010502/](/TR/2001/REC-xmlschema-1-20010502/)

<span id="14"></span>\[XMLSCHEMA-2\]  
XML Schema. Part 2: Datatypes; Paul V. Biron, Ashok Malhotra; World Wide Web Consortium Recommendation 2 May 2001: [http://www.w3.org/TR/2001/REC-xmlschema-2-20010502/](/TR/2001/REC-xmlschema-2-20010502/)

<span id="15"></span>\[SEMANTICTOOLBOX\]  
The Semantic Toolbox: Building Semantics on top of XML-RDF; Tim Berners-Lee; [http://www.w3.org/DesignIssues/Toolbox.html](/DesignIssues/Toolbox.html)

<span id="16"></span>\[RFC2531\]  
RFC 2531: Content Feature Schema for Internet Fax; G. Klyne, L. McIntyre; IETF Request for Comments: <ftp://ftp.isi.edu/in-notes/rfc2531.txt>

<span id="17"></span>\[TIFF\]  
TIFF (Tagged Image File Format) 6.0 Specification; Adobe Systems Inc.; <http://partners.adobe.com/asn/developer/pdfs/tn/TIFF6.pdf>

<span id="18"></span>\[RFC2301\]  
RFC 2301: File Format for Internet Fax; L. McIntyre, S. Zilles, R. Buckley, D. Venable, G. Parsons, J. Rafferty; IETF Request for Comments: <ftp://ftp.isi.edu/in-notes/rfc2301.txt>

<span id="19"></span>\[MULTIMEDIA\]  
Multimedia Programming Interface and Data Specifications 1.0 (contains WAVE file format); IBM Corporation and Microsoft Corporation; &lt;riffspec.txt&gt;

<span id="20"></span>\[RFC2361\]  
RFC 2361: WAVE and AVI Codec Registries; E. Fleischman; IETF Request for Comments: <ftp://ftp.isi.edu/in-notes/rfc2361.txt>

<span id="21"></span>\[MPEG\]  
MPEG-4 Overview - (V.14 - Geneva Version), ISO/IEC JTC1/SC29/WG11 N3444 Rob Koenen Overview of the MPEG-4 Standard: [](http://www.chiariglione.org/mpeg/standards/mpeg-4/mpeg-4.htm)

<span id="22"></span>\[PWG\]  
Printer Working Group; [http://www.pwg.org](http://www.pwg.org/)

<span id="23"></span>\[RFC2566\]  
RFC 2566: Internet Printing Protocol/1.0: Model and Semantics; R. deBry, T. Hastings, R. Herriot, S. Isaacson, P. Powell; IETF Request for Comments: <ftp://ftp.isi.edu/in-notes/rfc2566.txt>

<span id="24"></span>\[SALUTATION\]  
Salutation Consortium Specification; <http://www.salutation.org/>

<span id="25"></span>\[RFC2119\]  
RFC 2119: Key words for use in RFCs to Indicate Requirement Levels; S. Bradner; IETF Request for Comments: <ftp://ftp.isi.edu/in-notes/rfc2119.txt>.

<span id="26"></span>\[MPEG-7\]  
MPEG-7 Overview (version 8.0), ISO/IEC JTC1/SC29/WG11 N3445 Jos矍. Mart쭥z (UPM-GTI, ES) Overview of the MPEG-7 Standard: [http://mpeg.telecomitalialab.com/standards/mpeg-7/mpeg-7.htm](http://www.chiariglione.org/mpeg/standards/mpeg-7/mpeg-7.htm)

<span id="27"></span>\[RFC2277\]  
RFC 2277: IETF Policy on Character Sets and Languages; H. Alvestrand; IETF Request for Comments: [ftp://ftp.isi.edu/in-notes/rfc2277.txt](ftp://ftp.isi.edu/in-notes/rfc2566.txt)

<span id="28"></span>\[RFC2396\]  
RFC 2396: Uniform Resource Identifiers (URI): Generic Syntax; T. Berners-Lee, R. Fielding, L. Masinter; IETF Request for Comments: [ftp://ftp.isi.edu/in-notes/rfc2396.txt](ftp://ftp.isi.edu/in-notes/rfc2566.txt)

<span id="29"></span>\[RFC2278\]  
RFC 2278: IANA Charset Registration Procedures; N. Freed, J. Postel; IETF Request for Comments: [ftp://ftp.isi.edu/in-notes/rfc2278.txt](ftp://ftp.isi.edu/in-notes/rfc2566.txt)

<span id="30"></span>\[CCPPARCH\]  
Composite Capabilities/Preference Profiles: Requirements and Architecture; Mikael Nilsson, Johan Hjelm, Hidetaka Ohto; World Wide Web Consortium Working Draft 21 July 2000: [http://www.w3.org/TR/2000/WD-CCPP-ra-20000721/](/TR/2000/WD-CCPP-ra-20000721/)

<span id="31"></span>\[RFC2616\]  
RFC 2616: Hypertext Transfer Protocol -- HTTP/1.1; R. Fielding, J. Gettys, J. Mogul, H. Frystyk, L. Masinter, P. Leach, T. Berners-Lee; IETF Request for Comments: <ftp://ftp.isi.edu/in-notes/rfc2616.txt>

<span id="32"></span>\[CONCEPTUAL\]  
Conceptual Structures: Information Processing in Mind and Machine; John F. Sowa; Addison Wesley, Reading MA, 1984.

<span id="33"></span>\[KNOWLEDGE\]  
Knowledge Representation; John F. Sowa; Brooks/Cole, 2000. ISBN: 0-534-94965-7

<span id="34"></span>\[RDFFRAGMENT\]  
Re: How to address RDF fragment; Ralph R Swick; Message to World Wide Web Consortium RDF-comments mailing list: <http://lists.w3.org/Archives/Public/www-rdf-comments/2000AprJun/0014.html>.

<span id="35"></span>\[CCPPEX\]  
CC/PP exchange protocol;Hidetaka Ohto, Johan Hjelm; World Wide Web Consortium Note 24 June 1999: [http://www.w3.org/1999/06/NOTE-CCPPexchange-19990624](/1999/06/NOTE-CCPPexchange-19990624)

<span id="37"></span>\[WAI\]  
Web Content Accessibility Guidelines 2.0; Wendy Chisholm, Jason White, Gregg Vanderheiden; World Wide Web Consortium Working Draft 22 August 2002: [http://www.w3.org/TR/2002/WD-WCAG20-20020822/](/TR/2002/WD-WCAG20-20020822/)

<!-- -->

<span id="rdfprimer"></span>\[RDFPRIMER\]  
RDF Primer; Frank Manola, Eric Miller; World Wide Web Consortium Working Draft 23 January 2003: [http://www.w3.org/TR/2003/WD-rdf-primer-20030123/](/TR/2003/WD-rdf-primer-20030123/)

<span id="Appendix_A"></span>Appendix A: Terminology and abbreviations
----------------------------------------------------------------------

### <span id="Terminology"></span>A.1 Terminology

This appendix is INFORMATIVE.

Attribute, or CC/PP attribute  
A CC/PP attribute refers to the data elements describing the profile and is denoted as an RDF property. Each CC/PP attribute is associated with a value or a list of values or am RDF resource. ***NOTE***: this is quite distinct from an XML attribute; except where the meaning obvious in context, the term "CC/PP attribute" is generally used to emphasize this usage.

CC/PP Processor  
A CC/PP processor transforms a CC/PP document from its RDF format into some other format. A CC/PP processor understands CC/PP syntax and structure, including "defaults", but it does not understand application semantics associated with CC/PP attributes of CC/PP components.

CC/PP Repository  
A server that stores the user agent profile or profile segments persistently in a form that may be referenced by and incorporated into a profile. A CC/PP repository is typically a Web server that provides CC/PP profiles or profile segments in response to HTTP requests.

Cacheable  
A data resource is said to be "cacheable" if the data resource contains a property that allows a server to determine whether the cached resource matches a request for a similar resource.

Cache  
A storage area used by a server or proxy to store data resources that have been retrieved or created in response to a request. When a new request for a "cached" data resource is received, the server or proxy can respond with the cached version instead of retrieving or creating a new copy.

Capability  
An attribute of a sender or receiver (often the receiver) which indicates an ability to generate or process a particular type of message content. See also "CC/PP Attributes".

Client  
An entity that is the original compositor of a CC/PP profile.

Confidentiality  
Protecting the content of a message from unauthorized disclosure.

Content Generation  
For the purpose of this specification, "content generation" refers to generating content appropriate to the user agent profile of the request by using the user agent profile as input to a dynamic content generation engine. The XSL and style sheets of the document are used to tailor the document to the user agent profile of the request.

Content Negotiation  
The mechanism for selecting the appropriate representation when servicing a request. The representation of entities in any response can be negotiated (including error responses).

Content Selection  
For the purpose of this specification, "content selection" refers to selecting an appropriate document from a list of possible choices or variants by matching the document profile with the user agent profile of the request.

Content Provider  
A server that originates content in response to a request.

Data Resource  
A data object that can be transferred across a network. Data resources may be available in multiple representations (e.g. multiple languages, data formats, size, resolutions) or vary in other ways.

Document  
For the purpose of this specification, "document" refers to content supplied in response to a request. Using this definition, a "document" may be a collection of smaller "documents", which in turn is a part of a greater "document".

Document Profile  
Document profiles offer a means to characterize the features appropriate to given categories of user agents. For instance, one profile might include support for style sheets, vector graphics and scripting, while another might be restricted to the tags in HTML 3.2. Document profiles can be used by servers to select between document variants developed for different user agent categories. They can be used to determine what transformations to apply when such variants are not available. Content developers can use document profiles to ensure that their Web sites will be rendered as intended.

Dynamic Content  
Content that is generated in response to a request. This may be used for content that depends on changing environmental factors such as time (e.g., stock quotes) or place (e.g., nearby gas stations)

Feature  
Functional property of a device or entity.

Gateway  
Software that is capable of bridging disparate network protocols. For the purposes of this specification, "gateway" refers to protocol bridging functionality, which may exist in a stand-alone gateway or may be co-located with a proxy or origin server.

Hint  
A suggestion or preference for a particular option. While this option is strongly recommended, its use is not required.

Machine Understandable  
Data that is described with tags that associate a meaning to the data (i.e., an "author" tag would describe the author of the document), allowing data to be searched or combined and not just displayed.

Namespace  
A qualifier added to an XML tag to ensure uniqueness among XML elements.

Negotiate Content  
Message content that has been selected by content negotiation.

Negotiation Metadata  
Information which is exchanged between the sender and the receiver of a message by content negotiation in order to determine the variant which should be transferred.

Non-variant Content  
When the form/format of the content being sent does not depend on receiver's capabilities and/or preferences

Origin Server  
Software that can respond to requests by delivering appropriate content or error messages. The origin server may receive requests via either WSP or HTTP. Application programs executing on the origin server deliver content that is tailored in accordance with the CC/PP that can be found within the provided Profile. For the purpose of this specification, "origin server" refers to content generation capabilities, which may physically exist in a stand-alone Web server or may be co-located with a proxy or gateway.

Preference  
An attribute of a sender or receiver (often the receiver) which indicates a preference to generate or process one particular type of message content over another, even if both are possible.

Privacy  
Preventing the unintended or unauthorized disclosure of information about a person. Such information may be contained within a message, but may also be inferred from patterns of communication; e.g. when communications happen, the types of resource accessed, the parties with whom communication occurs, etc.

Profile  
An instance of the schema that describe capabilities for a specific device and network. A profile need not have all the attributes identified in the vocabulary/schema.

Proxy  
Software that receives HTTP requests and forwards that request toward the origin server (possibly by way of an upstream proxy) using HTTP. The proxy receives the response from the origin server and forwards it to the requesting client. In providing its forwarding functions, the proxy may modify either the request or response or provide other value-added functions. For the purposes of this specification, "proxy" refers to request/response forwarding functionality, which may exist in a stand-alone HTTP proxy or may be co-located with a gateway or origin server.

RDF Resource  
An object or element being described by RDF expressions is a resource. An RDF resource is typically identified by a URI.

Receiver  
A system component (device or program) which receives a message.

Schema, RDF Schema  
An RDF Schema denotes resources which constitute the particular unchanging versions of an RDF vocabulary at any point in time. It is used to provide information (such as organization and relationship) about the interpretation of the statements in an RDF data model. It does not include the values associated with the attributes.

Security  
Describes a set of procedures applied to data communications to ensure that information is transferred exactly as the sender and receiver intend, and in no other way. Security generally breaks down into Integrity, Authentication, Confidentiality and Privacy.

Sender  
A system component (device or program) which transmits a message.

User  
An individual or group of individuals acting as a single entity. The user is further qualified as an entity who uses a device to request content and/or resource from a server.

User agent  
A program, such as a browser, running on the device that acts on a user's behalf. Users may use different user agents at different times.

User agent profile  
Capabilities and preference information pertaining to the capabilities of the device, the operating and network environment, and users personal preferences for receiving content and/or resource.

Variant  
One of several possible representations of a data resource.

Variant Content  
When the form/format of the content being sent depends on receiver's capabilities and/or preferences

Vocabulary  
A collection of attributes that adequately describe the CC/PP. A vocabulary is associated with a schema.

### <span id="Abbreviations">A.2 Abbreviations</span>

<table><tbody><tr class="odd"><td>CC/PP</td><td>Composite Capabilities/Preferences Profile</td></tr><tr class="even"><td>CC/PPex</td><td>CC/PP Exchange Protocol</td></tr><tr class="odd"><td>CONNEG</td><td>Content Negotiation Working Group in the IETF</td></tr><tr class="even"><td>ER</td><td>Entity-Relationship</td></tr><tr class="odd"><td>HTML</td><td>HyperText Markup Language</td></tr><tr class="even"><td>HTTP</td><td>HyperText Transfer Protocol</td></tr><tr class="odd"><td>HTTPex</td><td>HTTP Extension Framework</td></tr><tr class="even"><td>IANA</td><td>Internet Assigned Numbers Authority</td></tr><tr class="odd"><td>IETF</td><td>Internet Engineering Task Force</td></tr><tr class="even"><td>IOTP</td><td>Internet Open Trading Protocol</td></tr><tr class="odd"><td>LDAP</td><td>Lightweight Directory Access Protocol</td></tr><tr class="even"><td>OTA</td><td>Over The Air, i.e. in the radio network</td></tr><tr class="odd"><td>RDF</td><td>Resource Description Framework</td></tr><tr class="even"><td>RFC</td><td>Request For Comments</td></tr><tr class="odd"><td>TBD</td><td>To Be Determined</td></tr><tr class="even"><td>TCP/IP</td><td>Transmission Control Protocol/Internet Protocol</td></tr><tr class="odd"><td>UAProf</td><td>WAP User Agent Profile</td></tr><tr class="even"><td>W3C</td><td>World Wide Web Consortium</td></tr><tr class="odd"><td>WAP</td><td>Wireless Application Protocol</td></tr><tr class="even"><td>WBXML</td><td>WAP Binary XML</td></tr><tr class="odd"><td>WML</td><td>Wireless Markup Language</td></tr><tr class="even"><td>WSP</td><td>Wireless Session Protocol</td></tr><tr class="odd"><td>XHTML</td><td>Extensible HyperText Markup Language</td></tr><tr class="even"><td>XSL</td><td>Extensible Stylesheet Language</td></tr><tr class="odd"><td>XML</td><td>Extensible Markup Language</td></tr></tbody></table>

<span id="Appendix_B"></span>Appendix B: RDF schema for structure
-----------------------------------------------------------------

This appendix is NORMATIVE, but support by CC/PP processors is OPTIONAL.

### <span id="xtocid-33666555">B.1 Summary of CC/PP class hierarchy</span>

<table><caption>Figure B-1: CC/PP class hierarchy</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>rdfs:Resource
    ccpp:Profile            {Profile deliverable to origin server}
    ccpp:Component

rdfs:Literal
  ccpp:string               {A text value of a CC/PP attribute}
  ccpp:integer              {An integer value of a CC/PP attribute}
  ccpp:rational             {A rational number CC/PP attribute value}

rdf:Bag                     {A set value for a CC/PP attribute}
rdf:Seq                     {A sequence value for a CC/PP attribute}
   
rdf:Property
  ccpp:Property             {A property applied to a CCPP:Resource}
    ccpp:Structure          {A structural property in a CC/PP profile}
    ccpp:Attribute          {A property denoting a CC/PP attribute}</code></pre></td></tr></tbody></table>

### <span id="xtocid-33666556">B.2 Summary of CC/PP properties</span>

#### <span id="xtocid-33666557">Structural properties (instances of</span> `ccpp:Structure`)

<table><caption>Figure B-2: CC/PP structural properties</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>ccpp:component      Domain=ccpp:Profile,         Range=ccpp:Component
ccpp:defaults       Domain=ccpp:Component,       Range=ccpp:Component</code></pre></td></tr></tbody></table>

### <span id="xtocid-33666558">B.3 RDF Schema</span>

#### <span id="xtocid-33666559">CC/PP core and class structure:</span>

(Schema URI: `http://www.w3.org/2002/11/08-ccpp-schema`)

<table><caption>Figure B-3: RDF schema for CC/PP classes and core properties</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>&lt;?xml version=&#39;1.0&#39;?&gt;

&lt;!DOCTYPE rdf:RDF [
  &lt;!ENTITY ns-rdf  &#39;http://www.w3.org/1999/02/22-rdf-syntax-ns#&#39;&gt;
  &lt;!ENTITY ns-rdfs &#39;http://www.w3.org/2000/01/rdf-schema#&#39;&gt;
  &lt;!ENTITY ns-ccpp &#39;http://www.w3.org/2002/11/08-ccpp-schema#&#39;&gt;
]&gt;

&lt;rdf:RDF
  xmlns:rdf  = &#39;&amp;ns-rdf;&#39;
  xmlns:rdfs = &#39;&amp;ns-rdfs;&#39;
  xmlns:ccpp = &#39;&amp;ns-ccpp;&#39;&gt;

&lt;!--  CC/PP class definitions --&gt;

  &lt;rdfs:Class rdf:about=&#39;&amp;ns-ccpp;Profile&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;CC/PP Profile&lt;/rdfs:label&gt;
    &lt;rdfs:subClassOf rdf:resource=&#39;&amp;ns-rdfs;Resource&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      This class is any complete profile that can be delivered to an
      origin server or other system that generates content for a client.
    &lt;/rdfs:comment&gt;
  &lt;/rdfs:Class&gt;

  &lt;rdfs:Class rdf:about=&#39;&amp;ns-ccpp;Component&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;CC/PP profile component&lt;/rdfs:label&gt;
    &lt;rdfs:subClassOf rdf:resource=&#39;&amp;ns-rdfs;Resource&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      A base class for any collection of CC/PP attribute values.
      A CC/PP client profile consists of one or more components,
      typically using a derived class that indicates the use of the
      component (e.g. prf:HardwarePlatform, prf:SoftwarePlatform).
    &lt;/rdfs:comment&gt;
  &lt;/rdfs:Class&gt;

  &lt;rdfs:Class rdf:about=&#39;&amp;ns-ccpp;string&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;Text value&lt;/rdfs:label&gt;
    &lt;rdfs:subClassOf rdf:resource=&#39;&amp;ns-rdfs;Literal&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      This is the class of RDF Literals that represent CC/PP
      attribute string values.
    &lt;/rdfs:comment&gt;
    &lt;rdfs:seeAlso rdf:resource=
      &#39;http://www.w3.org/TR/xmlschema-2/#string&#39;/&gt;
  &lt;/rdfs:Class&gt;

  &lt;rdfs:Class rdf:about=&#39;&amp;ns-ccpp;integer&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;Integer value&lt;/rdfs:label&gt;
    &lt;rdfs:subClassOf rdf:resource=&#39;&amp;ns-rdfs;Literal&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      This is the class of RDF Literals that represent CC/PP
      attribute integer number values.
    &lt;/rdfs:comment&gt;
    &lt;rdfs:seeAlso rdf:resource=
      &#39;http://www.w3.org/TR/xmlschema-2/#integer&#39;/&gt;
  &lt;/rdfs:Class&gt;

  &lt;rdfs:Class rdf:about=&#39;&amp;ns-ccpp;rational&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;Rational value&lt;/rdfs:label&gt;
    &lt;rdfs:subClassOf rdf:resource=&#39;&amp;ns-rdfs;Literal&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      This is the class of RDF Literals that represent CC/PP
      attribute rational number values.
    &lt;/rdfs:comment&gt;
  &lt;/rdfs:Class&gt;

  &lt;rdfs:Class rdf:about=&#39;&amp;ns-ccpp;Property&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;CC/PP Property&lt;/rdfs:label&gt;
    &lt;rdfs:subClassOf rdf:resource=&#39;&amp;ns-rdf;Property&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      ccpp:Property is the super-class for ccpp:Structure and
      ccpp:Attribute. Therefore all property arcs that are not part
      of the core RDF namespace and constitute parts of a CC/PP
      profile are defined as subclasses of ccpp:Property. This
      allows schema-validating environments with language mixing to
      isolate the CC/PP elements of an RDF graph rooted in some
      given resource from other attributes of that resource.
    &lt;/rdfs:comment&gt;
  &lt;/rdfs:Class&gt;

  &lt;rdfs:Class rdf:about=&#39;&amp;ns-ccpp;Structure&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;CC/PP structural property&lt;/rdfs:label&gt;
    &lt;rdfs:subClassOf rdf:resource=&#39;&amp;ns-ccpp;Property&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      All properties that are structural elements of a CC/PP profile
      are defined as instances of ccpp:Structure. This allows
      structural combining elements of a profile to be distinguished
      from attributes in a schema-aware environment.
    &lt;/rdfs:comment&gt;
  &lt;/rdfs:Class&gt;

  &lt;rdfs:Class rdf:about=&#39;&amp;ns-ccpp;Attribute&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;CC/PP Attribute&lt;/rdfs:label&gt;
    &lt;rdfs:subClassOf rdf:resource=&#39;&amp;ns-ccpp;Property&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      All properties that describe client capabilities or preferences
      in a CC/PP profile should be defined as instances of
      ccpp:Attribute. This allows structural combining elements
      of a profile to be distinguished from client features in a
      schema-validating environment.
    &lt;/rdfs:comment&gt;
  &lt;/rdfs:Class&gt;


&lt;!--  CC/PP structural property definitions --&gt;
&lt;!--  Basic client profile description      --&gt;

  &lt;ccpp:Structure rdf:about=&#39;&amp;ns-ccpp;component&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;CC/PP component property&lt;/rdfs:label&gt;
    &lt;rdfs:domain rdf:resource=&#39;&amp;ns-ccpp;Client-profile&#39;/&gt;
    &lt;rdfs:range  rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      Indicates a component of a top-level client profile.
    &lt;/rdfs:comment&gt;
  &lt;/ccpp:Structure&gt;

  &lt;ccpp:Structure rdf:about=&#39;&amp;ns-ccpp;defaults&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;CC/PP default properties&lt;/rdfs:label&gt;
    &lt;rdfs:domain rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:range  rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      This property indicates a Component that contains default
      properties for some other component.  That is, any attributes
      that are not found in the subject resource but are present in
      the object resource may be incorporated from the object into
      the resulting CC/PP profile.
    &lt;/rdfs:comment&gt;
  &lt;/ccpp:Structure&gt;

  &lt;ccpp:Structure rdf:about=&#39;&amp;ns-ccpp;Defaults&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;CC/PP default properties&lt;/rdfs:label&gt;
    &lt;rdfs:subPropertyOf rdf:resource=&#39;&amp;ns-ccpp;defaults&#39;/&gt;
    &lt;rdfs:domain rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:range  rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      Same as &#39;defaults&#39;.
      Defined as sub-property for backwards compatibility with UAProf

      Use of this is deprecated:  use &#39;defaults&#39; instead.
    &lt;/rdfs:comment&gt;
  &lt;/ccpp:Structure&gt;
&lt;/rdf:RDF&gt;</code></pre></td></tr></tbody></table>

<span id="Appendix_C"></span>Appendix C: CC/PP attribute vocabulary for print and display
-----------------------------------------------------------------------------------------

The appendix is OPTIONAL and INFORMATIVE.

Designers of CC/PP applications who need to describe such features are encouraged to use this vocabulary rather than define new terms. This vocabulary is based in part on work done in the IETF media feature registration (CONNEG) Working Group [\[RFC2534\]](#8).

The client attribute names defined below may be used to identify some common features associated with client devices that print or display visual information, such as text or graphics. They are described using XML namespace local parts, which are further qualified by the XML namespace identifier `http://www.w3.org/2002/11/08-ccpp-client`. (These attributes apply to presented capabilities of the client rather than to a specific internal component or aspect of a client system.)

*deviceIdentifier*:  
(Value data type: String) A URI that serves as an identifier of the client device or user agent type.

*type*:  
(Value data type: set of Strings) A MIME content type that can be accepted and presented by a client. Similar in principle to the HTTP 'accept:' header, but specifying a single MIME content-type, without associated content-type parameters. Multiple accepted content-types can be described by a value that is a set of content-type string values. Where needed, content-type parameters can be expressed by additional CC/PP attributes.

*schema*:  
(Value data type: set of Strings) A URI that identifies a schema that is recognized by the client. The schema may be an XML DTD [\[XML\]](#1), XML Schema [\[XMLSCHEMA-1\]](#13), RDF Schema [\[RDFSCHEMA\]](#4) or any other applicable document structure that can be identified by a URI. A *Schema* value refines any acceptable document type indicated by the *Type* attribute, but its meaning must not depend on the value of *Type*. Typically, this will be used to indicate specific XML DTDs or schema that are recognized within `text/xml` or `application/xml` document types.

*charWidth*:  
(Value data type: Integer) For a text display device (type="text/\*"), the width of the character display. For non-proportional font displays, the number of display cells. For non-proportional font displays as typically used in East Asia, the number of half-width display cells (ideographic characters and other full-width characters typically occupy two display cells). For proportional font displays, the width of the display in ens (where an en is the typographical unit that is the width of an en-dash/letter 'n').

*charHeight*:  
(Value data type: Integer) For a text display device (`type="text/*"`), the number of lines of text that can be displayed (i.e. the display height in characters).

*charset*:  
(Value data type: set of Strings, per [\[RFC2278\]](#29)) For a text handling device, a character encoding that can be processed (values per MIME 'charset' parameter on content-type `"text/*"`). ***NOTE:*** the term "charset" is a historical misnomer, and does not necessarily indicate a repertoire of characters that can be displayed, just an encoding. In some cases, though, the encoding may imply a repertoire.

*pix-x*:  
(Value data type: Integer) For an image display device (`type="image/*"`), the number of horizontal pixels that can be displayed.

*pix-y*:  
(Value data type: Integer) For an image display device (`type="image/*"`), the number of vertical pixels that can be displayed.

*color*:  
(Value data type: String, per [\[RFC2534\]](#8)) For text and image display devices, an indication of the color capabilities (per RFC 2534 [\[RFC2534\]](#8), possible values are "`binary`", "`grey`", "`limited`", "`mapped`" and "`full`"). ***NOTE*:** the *color* attribute provides a very coarse indication of color capabilities, sufficient for a range of simple applications, and may be refined by additional attributes where capabilities need to be described in greater detail.

#### <span id="xtocid-33666562">Client attribute properties (instances of</span> `ccpp:Attribute`)

<table><caption>Figure C-1: CC/PP client vocabulary properties</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>ccpp-client:deviceIdentifier Domain=ccpp:Component,   Range=ccpp:string
ccpp-client:type             Domain=ccpp:Component,   Range=rdf:Bag
ccpp-client:schema           Domain=ccpp:Component,   Range=ccpp:string
ccpp-client:charWidth        Domain=ccpp:Component,   Range=ccpp:integer
ccpp-client:charHeight       Domain=ccpp:Component,   Range=ccpp:integer
ccpp-client:charset          Domain=ccpp:Component,   Range=rdf:Bag
ccpp-client:pix-x            Domain=ccpp:Component,   Range=ccpp:integer
ccpp-client:pix-y            Domain=ccpp:Component,   Range=ccpp:integer
ccpp-client:color            Domain=ccpp:Component,   Range=ccpp:string</code></pre></td></tr></tbody></table>

#### <span id="xtocid-62790564">Schema for client vocabulary</span>

(Schema URI: `http://www.w3.org/2002/11/08-ccpp-client`)

<table><caption>Figure C-2: RDF schema for client vocabulary</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>&lt;?xml version=&#39;1.0&#39;?&gt;

&lt;!DOCTYPE rdf:RDF [
  &lt;!ENTITY ns-rdf  &#39;http://www.w3.org/1999/02/22-rdf-syntax-ns#&#39;&gt;
  &lt;!ENTITY ns-rdfs &#39;http://www.w3.org/2000/01/rdf-schema#&#39;&gt;
  &lt;!ENTITY ns-ccpp &#39;http://www.w3.org/2002/11/08-ccpp-schema#&#39;&gt;
  &lt;!ENTITY ns-ccpp-client &#39;http://www.w3.org/2002/11/08-ccpp-client#&#39;&gt;
]&gt;

&lt;rdf:RDF
  xmlns:rdf         = &#39;&amp;ns-rdf;&#39;
  xmlns:rdfs        = &#39;&amp;ns-rdfs;&#39;
  xmlns:ccpp        = &#39;&amp;ns-ccpp;&#39;
  xmlns:ccpp-client = &#39;&amp;ns-ccpp-client;&#39;&gt;

&lt;!--  CC/PP attribute property definitions --&gt;

  &lt;!-- These properties represent some common vocabulary that is     --&gt;
  &lt;!-- available for use by applications that need to indicate       --&gt;
  &lt;!-- the common features indicated by these attributes.  They      --&gt;
  &lt;!-- serve as an example of how a new attribute vocabulary can     --&gt;
  &lt;!-- be defined for use in a CC/PP profile.                        --&gt;

  &lt;ccpp:Attribute rdf:about=&#39;&amp;ns-ccpp-client;deviceIdentifier&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;Client device identifier&lt;/rdfs:label&gt;
    &lt;rdfs:domain rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:range  rdf:resource=&#39;&amp;ns-ccpp;string&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      A URI that identifies the type of client device or user agent.
    &lt;/rdfs:comment&gt;
  &lt;/ccpp:Attribute&gt;

  &lt;ccpp:Attribute rdf:about=&#39;&amp;ns-ccpp-client;type&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;MIME content type&lt;/rdfs:label&gt;
    &lt;rdfs:domain rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:range  rdf:resource=&#39;&amp;ns-rdf;Bag&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      A string containing a MIME content-type, or a set of such strings,
      indicating the MIME content-types that can be handled.
    &lt;/rdfs:comment&gt;
  &lt;/ccpp:Attribute&gt;

  &lt;ccpp:Attribute rdf:about=&#39;&amp;ns-ccpp-client;schema&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;Schema identifier&lt;/rdfs:label&gt;
    &lt;rdfs:domain rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:range  rdf:resource=&#39;&amp;ns-ccpp;string&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      A URI that identifies a language or DTD that is recognized by
      the client, or a set of such URIs.

      Specific values of this attribute may be applicable to certain
      MIME content types.  For example, a URI that is associated with
      a resource containing an XML DTD will generally be applicable
      only with text/xml or application/xml content types.
    &lt;/rdfs:comment&gt;
  &lt;/ccpp:Attribute&gt;

  &lt;ccpp:Attribute rdf:about=&#39;&amp;ns-ccpp-client;charWidth&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;Character display width&lt;/rdfs:label&gt;
    &lt;rdfs:domain rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:range  rdf:resource=&#39;&amp;ns-ccpp;integer&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      For character displays, the number of characters that can be
      rendered across the display.  For displays using a proportional
      font, this is the display width in typographical &#39;em&#39;s.
    &lt;/rdfs:comment&gt;
  &lt;/ccpp:Attribute&gt;

  &lt;ccpp:Attribute rdf:about=&#39;&amp;ns-ccpp-client;charHeight&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;Character display height&lt;/rdfs:label&gt;
    &lt;rdfs:domain rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:range  rdf:resource=&#39;&amp;ns-ccpp;integer&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      For character displays, the number of rows of characters that
      can be displayed.
    &lt;/rdfs:comment&gt;
  &lt;/ccpp:Attribute&gt;

  &lt;ccpp:Attribute rdf:about=&#39;&amp;ns-ccpp-client;charset&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;Character set encoding&lt;/rdfs:label&gt;
    &lt;rdfs:domain rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:range  rdf:resource=&#39;&amp;ns-rdf;Bag&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      For character displays, the MIME &#39;charset&#39; values that
      can be handled.
    &lt;/rdfs:comment&gt;
  &lt;/ccpp:Attribute&gt;

  &lt;ccpp:Attribute rdf:about=&#39;&amp;ns-ccpp-client;pix-x&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;Pixel display width&lt;/rdfs:label&gt;
    &lt;rdfs:domain rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:range  rdf:resource=&#39;&amp;ns-ccpp;integer&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      For raster displays, the width of the display in pixels.
    &lt;/rdfs:comment&gt;
  &lt;/ccpp:Attribute&gt;

  &lt;ccpp:Attribute rdf:about=&#39;&amp;ns-ccpp-client;pix-y&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;Pixel display height&lt;/rdfs:label&gt;
    &lt;rdfs:domain rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:range  rdf:resource=&#39;&amp;ns-ccpp;integer&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
       For raster displays, the height of the display in pixels.
    &lt;/rdfs:comment&gt;
  &lt;/ccpp:Attribute&gt;

  &lt;ccpp:Attribute rdf:about=&#39;&amp;ns-ccpp-client;color&#39;&gt;
    &lt;rdfs:label xml:lang=&quot;en&quot;&gt;Color display capabilities&lt;/rdfs:label&gt;
    &lt;rdfs:domain rdf:resource=&#39;&amp;ns-ccpp;Component&#39;/&gt;
    &lt;rdfs:range  rdf:resource=&#39;&amp;ns-ccpp;string&#39;/&gt;
    &lt;rdfs:comment xml:lang=&quot;en&quot;&gt;
      For display or print devices, an indication of the color
      rendering capabilities:
      binary  - indicates bi-level color (black-and-white, or similar).
      grey    - indicates gray scale capability, capable of sufficient
                distinct levels for a monochrome photograph.
      limited - indicates a limited number of distinct colors, but
                not with sufficient control for displaying a color
                photograph (e.g. a pen plotter, high-light printer or
                limited display).
      mapped  - indicates a palettized color display, with enough
                levels and control for coarse display of color
                photographs.
      full    - indicates full color display capability.
    &lt;/rdfs:comment&gt;
  &lt;/ccpp:Attribute&gt;

&lt;/rdf:RDF&gt;</code></pre></td></tr></tbody></table>

<span id="Appendix_D"></span>Appendix D: Recommendations for creating a vocabulary
----------------------------------------------------------------------------------

This appendix in INFORMATIVE.

Fundamental to the design of CC/PP is the idea that new client attributes can be defined, as needed, through the introduction of new vocabularies.

Similarly, new relationships can be introduced through new vocabulary items, though the introduction of these needs a great deal of care to ensure their semantics are adequately and consistently defined. A general principle is that application-neutral CC/PP processors should be able to understand and manipulate CC/PP relationships without necessarily understanding the CC/PP attributes to which they refer.

It is recommended that RDF Schema be used, in conjunction with supporting documentation, to define any new CC/PP vocabulary. The rest of this section assumes that RDF Schema is being used for defining any new vocabulary. The previous appendix is an example of this approach.

New vocabularies are introduced through XML namespaces. Their relationship to other CC/PP vocabulary items can be defined by new RDF schema statements (which must necessarily augment the core RDF schema for the CC/PP vocabulary given in [Appendix C](#Appendix_C) of this document).

### <span id="Basic"></span>D.1 Basic format for all vocabulary items

All vocabulary items used by CC/PP are URIs and optional fragment identifiers, used as RDF property arc identifiers. Relative URI forms should not be used. Vocabulary items used for different purposes are generally associated with different XML namespaces. Some common RDF base classes are defined so that a schema-aware RDF processor can perform improved analysis of a CC/PP profile, and separate CC/PP profile elements from other statements made about any resource that appear in the same RDF graph as a CC/PP profile.

All properties used as CC/PP attributes must be instances of the class `ccpp:Attribute`, which itself is a subclass of `rdf:Property`. (That is, the schema defining CC/PP attribute properties should define them as instances of `ccpp:Attribute`. Thus, a schema-aware processor can distinguish between properties that are part of a CC/PP profile, and properties which may be part of an attribute value.)

Each CC/PP attribute is associated with a component of a profile (e.g. HardwarePlatform, SoftwarePlatform, etc.), and is used as a property of an instance of the appropriate component resource. All such component resource types are subclasses of `ccpp:Component`. New `ccpp:Component` based classes may be introduced for new types of attribute vocabulary, but it is strongly recommended that an existing `ccpp:Component` type be used if one is applicable.

> ***NOTE***: A simple CC/PP parser is not required to be schema-aware, and its implementation does not need to have knowledge of the RDF class of any attribute or resource, nor is the profile required to carry RDF type information. The discussion of classes and schema-aware processing is in relation to possible future developments of generic RDF processors that may deal with CC/PP and other RDF vocabularies and schemas, possibly mixed in a single document. For such developments to be possible, it is important to take account of class and schema issues in the design of CC/PP, even though simple CC/PP processors need no such awareness.

### <span id="namespaces"></span>D.2 Use of XML namespaces

All CC/PP attributes must be associated with a fully resolvable namespace identifier URI. (Relative URIs, or URIs whose interpretation may depend on the context in which they are used, should not be used.)

> ***NOTE***: It is anticipated that a namespace URI used for CC/PP attributes may also be used to identify an RDF or other schema relating to those attributes. However, such usage is beyond the scope of this specification.

Typically, new CC/PP attributes will be associated with a new namespace, which serves (among other things) to distinguish between possible different uses of the same attribute name local parts. For example, `a:foo` and `b:foo` name quite distinct attributes as long as the prefixes `a:` and `b:` are associated with different namespace URIs.

### <span id="Principles"></span>D.3 Principles for defining new attributes

#### <span id="xtocid-33666567">D.3.1 If possible, reuse existing vocabularies</span>

Re-using existing vocabularies, where applicable, leverages work that has already been undertaken and reduces the opportunity for different attribute names that mean almost but not quite the same thing.

Note that names using different namespaces may be freely mixed in a profile, so requiring one additional feature is not a good reason to define a complete new vocabulary.

#### <span id="3.3.2"></span>D.3.2 Attribute value type and interpretation

Attribute definitions should indicate the type and interpretation of the associated value. Ultimately it is a matter for agreement between generating and receiving applications how any particular attribute value is to be interpreted.

Where possible, for ease of processing and compatibility with other frameworks, attribute values should be based on one of the data types described in section [4.1](#AttributeData) of this document.

Where attributes express a quantity associated with a client, the units of that quantity should be clearly associated with the attribute definition. There is no separate mechanism for indicating the units in which an attribute value is expressed.

#### <span id="3.3.3"></span>D.3.3 Interpretation not dependent on other attribute values

The meaning of every attribute must be defined in isolation from other attributes: no attribute may have a meaning that changes dependent on the value of some other attribute. E.g. an attribute called, say, page-width must always be expressed using the same units: it is not acceptable for this attribute to be expressed in characters for some class of device, millimeters for another, and inches for another. (Note that it is still allowable to define an attribute that cannot be interpreted unless some other attribute is also defined; the important principle here is that adding a new attribute should not invalidate any knowledge of a client that can be deduced from attributes previously defined.)

Attributes may be defined in "layers", so that simple capabilities (e.g. ability to handle color photographic images) can be described by a simple attribute, with additional attributes used to provide more detailed or arcane capabilities (e.g. exact color matching capabilities).

#### <span id="3.3.4"></span>D.3.4 Attribute naming conventions

Attributes are RDF properties. The RDF Model and Syntax document [\[RDF\]](#3), Appendix C, recommends the use of "interCap" name styles for RDF property names (starting with a lowercase letter, and having 2nd and subsequent words within a name started with a capital letter and no internal punctuation). We recommend such style be used for CC/PP attribute names, except where some other form is preferred for compatibility with other systems (such as some CONNEG-compatible print and display attributes described below).

RDF class names used in CC/PP profiles preferably begin with an uppercase letter.

#### <span id="AttributeApplicability"></span>D.3.5 Attributes should have specific applicability

If an attribute is defined with a broad range of applicability, problems could arise if a user tries to apply a single attribute to different parts of a profile.

An attribute defined very broadly might be subject to different privacy or security concerns when applied in different circumstances. For example, having a text-to-voice capability on a mobile phone type of device might be a generally useful feature, but a similar feature in a PC might be indicative of a personal disability. Thus a combination of text-to-voice capability and using a PC-type platform might suggest private information not necessarily associated with any of the features in isolation.

### <span id="ProtocolInteractions"></span>D.4 Protocol interactions

In some cases, there may be overlaps between CC/PP vocabularies and a particular protocol with which CC/PP is used. E.g. the client vocabulary *charset* and the HTTP `accept-charset:` header. To some extent, the protocol-independent nature of CC/PP makes this inevitable, to the extent that existing protocols may have limited content negotiation facilities.

When designing vocabularies, avoid defining features which would be expected to be part of a particular protocol behavior; anything that describes or relates to a transfer mechanism rather than what is transferred should be avoided; e.g. support for a feature like HTTP persistent connections should not be indicated in a CC/PP profile, as (a) it is a protocol-specific feature, and (b) it doesn't really help the origin server to select appropriate content for the client.

Similarly, when defining protocol bindings for using CC/PP, interaction with existing negotiation mechanisms should be considered and specified. A detailed treatment of this topic is beyond the scope of this specification.

<span id="Appendix_E"></span>Appendix E: Review of applicable vocabularies
--------------------------------------------------------------------------

This appendix is INFORMATIVE.

This section introduces some possible sources of properties to be described by CC/PP attribute vocabularies. It is not normative, and is included to give an idea of some kinds of client feature that CC/PP might be used to convey.

### <span id="IETF"></span>E.1 IETF media feature registration (CONNEG)

The IETF has defined an IANA registry for media feature tags [\[RFC2506\]](#5) and a syntax [\[RFC2533\]](#6) for relational-style expressions using these to describe client and server media features. A small common vocabulary has been defined [\[RFC2534\]](#8), which has been used as a basis for the CC/PP client common vocabulary. The IETF Internet fax Working Group has also created additional registrations to describe the capabilities of fax machines [\[RFC2531\]](#16).

RFC 2506 [\[RFC2506\]](#5) defines three kinds of media feature tags:

-   *IETF tree*: registered feature tags that are simple names, which are defined and assigned under the auspices of the IETF standards process.
-   *Global tree*: registered feature tags that are simple names preceded by `'g.'`. These are defined by groups other than the IETF, but are registered with IANA to ensure uniqueness of these names.
-   *Unregistered*: feature tags that consist of `'u.'` followed by a slightly restricted form of URI.

There is currently a proposal to create a URN namespace for IANA registries. This would create a mechanism to allow IANA-registered feature tags to be used directly as URIs in CC/PP expressions.

Unregistered feature tags may be used in CC/PP expressions by stripping off the leading '`u.`' and taking the resulting URI.

All media feature tags and values can be expressed in CC/PP, but not all CC/PP profiles can be expressed as media feature tags and values. In particular, CC/PP text values are case sensitive whereas some media feature values are case insensitive. Media feature values can be mapped to CC/PP text values by applying a case-normalization convention (e.g. convert to lowercase).

This version of CC/PP does not have mechanisms matching those in the IETF media feature framework, which can be used within CC/PP to state capabilities in terms of comparisons with fixed values (e.g. '`pix-x<=640`') and attribute values that appear in certain combinations (e.g. '`pix-x=640`' AND '`pix-y=480`' OR '`pix-x=800`' AND '`pix-y=600`'). Future work may define such mechanisms.

### <span id="UAPROF"></span>E.2 WAP UAProf

UAProf [\[UAPROF\]](#9) is a WAP Forum specification that is designed to allow wireless mobile devices to declare their capabilities to data servers and other network components.

The design of UAProf is already based on RDF. As such, its vocabulary elements use the same basic format that is used for CC/PP.

The CC/PP model follows UAProf, in that each user agent property is defined as belonging to one of a small number of components, each of which corresponds to an aspect of a user agent device; e.g.

-   Hardware platform
-   Software platform
-   WAP characteristics
-   Browser user agent
-   Network characteristics

Although its RDF schema is more prescriptive regarding class and property usage than UAProf, the design of CC/PP is backwards compatible. The goal is that valid UAProf profiles are also valid CC/PP profiles; however not all CC/PP profiles are necessarily valid UAProf profiles.

### <span id="TIFF"></span>E.3 TIFF

TIFF is a raster image encapsulation file format developed and maintained by Adobe Systems [\[TIFF\]](#17). It is also the basis for the standard file format for Internet Fax [\[RFC2301\]](#18).

As well as pixel-based image data in a variety of coding and compression formats, TIFF supports a wide range of options for different kinds of image-related information. These options might be candidate CC/PP attributes. Many of the TIFF properties relating to image handling capabilities have already been defined as tags in the CONNEG space as part of the Internet Fax work [\[RFC2531\]](#16); these might best be referenced using URIs based on their CONNEG tag names.

### <span id="WAVE"></span>E.4 WAVE

WAVE is an encapsulation format for audio data, developed and maintained by Microsoft [\[MULTIMEDIA\]](#19).

There is a registry of WAVE-supported audio codecs that might be used as CC/PP attributes [\[RFC2361\]](#20).

IETF work in progress for voice messaging (VPIM/IVM) could create IETF media feature registry tags that are usable by CC/PP profiles through the same mechanisms described in section [E.1](#IETF) above.

### <span id="MPEG-4"></span>E.5 MPEG-4

MPEG-4 is an encapsulation format for video data, possibly combined with audio data, developed and maintained by the ISO MPEG Working Group [\[MPEG\]](#21).

### <span id="MPEG-7"></span>E.6 MPEG-7

MPEG-7 is a metadata format for information associated with image, video, audio and other data, currently in development by the ISO MPEG Working Group [\[MPEG-7\]](#26).

### <span id="PWG"></span>E.7 PWG

The printer Working Group defines attributes and capabilities applicable to printing devices [\[PWG\]](#22). Some of this work is incorporated into the IETF Internet Printing Protocol (IPP) [\[RFC2566\]](#23).

### <span id="Salutation"></span>E.8 Salutation

Salutation is a protocol and identification scheme for communicating devices, mainly in a LAN environment, developed and maintained by the Salutation Consortium [\[SALUTATION\]](#24). The device capability identification mechanisms probably include many items that might be used as CC/PP attributes.

<span id="Appendix_F"></span>Appendix F: CC/PP applications
-----------------------------------------------------------

This appendix is INFORMATIVE.

CC/PP is a format framework designed to be used in the context of a wider application or operational environment. This specification does not define how to use CC/PP with any particular protocol or application.

This appendix highlights some other issues that application developers must consider in their designs. Many of these issues may be covered by an applicable protocol specification used to convey CC/PP profiles.

To make effective use of the CC/PP framework, the operating rules for the wider environment must specify:

-   Capability exchange protocol
-   Trust model
-   Vocabulary
-   Security mechanisms
-   Constraints on allowable attribute value types
-   Attribute value processing and/or matching rules
-   Proxy vocabulary and processing
-   Rules for request profile identification
-   Additional information to be included with any transmitted resource data
-   URI forms allowed for identifying referenced profile documents (e.g. defaults)
-   Mechanisms for locating and retrieving referenced profile documents
-   Interactions with any existing negotiation mechanisms in the host protocol

There are a few protocol assumptions built into the design of CC/PP. Although it is intended to be largely protocol independent, some consideration has been given to use of CC/PP with HTTP for retrieving Web resources.

### <span id="Outline"></span>F.1 Outline of request processing in HTTP

CC/PP is envisaged to be used with HTTP in the following fashion.

(This is not a protocol specification, just an indication of the kind of information flows envisaged. Defining a protocol to convey CC/PP information is a separate effort [\[CCPPEX\]](#35)).

<table><caption>Figure F-1: HTTP request processing</caption><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><pre><code>  +------+ (5)       (4) +-------+               +------+
  |Client| &lt;==response== | Proxy | &lt;==response== |Origin| &lt;====&gt; (Resource)
  |  UA  | ===request==&gt; |       | ===request==&gt; |server| (3)    (  data  )
  +------+ (1)   |       +-------+ (2)   |       +------+
                 |                       |
                 v                       v
(Client  ) &lt;--- (Client profile) &lt;----- (Request profile)
(defaults)       + local values          |
                                         v
                        (Proxy   ) &lt;--- (Proxy profile)
                        (defaults)       + local values</code></pre></td></tr></tbody></table>

1.  The client sends an HTTP request, with an accompanying CC/PP client profile. The client profile may contain references to default profiles describing a range of common capabilities for the client concerned (e.g. a particular computer/operating system/browser combination, or a particular model of mobile device), and values that are variations from the default profile.
2.  The HTTP request may pass through a firewall/proxy that (a) imposes constraints on the kinds of content that can be accessed, or (b) can adapt other forms of content to the capabilities of the requesting client. This proxy extends the CC/PP profile with a description of these constraints and adaptations, and sends this with the HTTP request on to the origin server. The request may pass through several such proxies.
3.  The origin server receives the request and interprets the CC/PP profile. It selects and/or generates content that matches the combined proxy and client capabilities described in the profile. This is sent to the last proxy in the request chain in an HTTP response.
4.  If required, the proxy applies any content adaptations, and any other functions it is designed to perform. The resulting response and content is passed back toward the requesting client.
5.  The client receives the HTTP response and presents the content it contains.

> ***NOTE***: There is some overlap between CC/PP and the various HTTP accept-\* headers. A protocol specification for using CC/PP with HTTP must indicate how HTTP 'accept-\*' headers may be used, and how they interact with CC/PP profiles.

### <span id="ProtocolAssumptions"></span>F.2 Protocol assumptions for proxy behavior

The framework for describing proxy behaviors makes some assumptions about the protocol used to convey a CC/PP profile:

-   The CC/PP profile is conveyed in one or more parts, each containing a graph fragment, which are combined to form a single RDF graph.
-   In addition to the RDF graph, the protocol must separately name the RDF resource corresponding to the root of the current request profile.
-   The current operational model is that all CC/PP profile interpretation is performed by the origin server, and none by the proxies. It may be necessary for the protocol to allow the origin server to provide information with its response that allows proxies to decide whether or not to apply any conversions that they offer; e.g. is XHTML-to-WML conversion required, or does the client have native XHTML capability?

    ***NOTE***: The "current operational model" noted above does not prohibit proxies from interpreting CC/PP profiles. Rather, it means that the framework for describing proxy behaviors does not require that proxies interpret them.

<span id="Appendix_G"></span>Appendix G: RDF Compatibility
----------------------------------------------------------

This appendix is INFORMATIVE.

This CC/PP specification is based on Resource Description Framework (RDF) Model and Syntax Specification [\[RDF\]](#3), a W3C Recommendation. That version of RDF does not have explicit datatyping of literals. The RDF specifications have been undergoing revision as this specification is being written. The revised RDF ([RDF/XML Syntax Specification (Revised)](/TR/rdf-syntax-grammar/)), which at the time of writing has not reached recommendation status, introduces support for specifying the XML Schema datatype of a literal value. This appendix outlines the implications for implementors in making their CC/PP implementations compatible with this proposed addition to RDF. It is hoped that a future version of the CC/PP specification will propose how explicit datatyping should be used in defining CC/PP profiles.

### <span id="RDFImplicitDatatyping">G.1 Implicit datatyping</span>

In this specification, a CC/PP attribute value contained in a CC/PP profile is, in RDF (Revised) [\[RDFPRIMER\]](#rdfprimer) terminology, an [RDF Plain Literal](/TR/rdf-concepts/#dfn-plain-literal). A CC/PP vocabulary schema (such as the example in [Appendix C](#Appendix_C)), that is defined in terms of the simple types introduced in the CC/PP schema (in [Appendix B](#Appendix_B)), can provide additional type information for these attributes. A CC/PP profile consumer application may use the vocabulary schema (either by directly interpreting the schema data, or, for known vocabularies, by embedding the equivalent information in the application) to check the validity of the data provided in a profile, and to map the data into programming language data types.

### <span id="RDFExplicitDatatyping">G.2 Explicit datatyping</span>

The revised RDF Working Draft supports explicit XSD ([XML Schema Datatypes](/TR/xmlschema-2/)) datatyping. When explicit datatyping is adopted, the CC/PP specification could be revised to permit an attribute value in a CC/PP profile to be represented as an [RDF Typed Literal](/TR/rdf-concepts/#dfn-typed-literal). In the [XML serialization of an RDF Typed Literal](/TR/rdf-syntax-grammar/#section-Syntax-datatyped-literals), the type of the literal value is specified as an attribute of the element containing the literal value. In this case, a CC/PP profile consumer application could use this type information to interpret the CC/PP attribute value, without requiring access to additional vocabulary schema information.

In the future it may be that, for backward compatibility, a CC/PP profile consumer should be able to handle CC/PP attributes that use either implicit or explicit datatyping.

<span id="RevisionHistory"></span>Appendix W: Revision history
--------------------------------------------------------------

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td>20001218</td><td>Document created from merge of architecture, structure and vocabulary documents.</td></tr><tr class="even"><td>20001219</td><td>Move some vocabulary and proxy material from section to into sections 3 and 4. Various small edits.</td></tr><tr class="odd"><td>20010109</td><td>Various editorial fixes. Merge appendices dealing with print and display vocabulary. Remove some vocabulary source references. Add XML examples to many of the RDF graph examples. Reorganize material in sections 2 and 3, moving some technical detail to section 3. Move discussion of CC/PP applications to a new appendix. Assign figure numbers.</td></tr><tr class="even"><td>20010112</td><td>More group review editorial comments. Fixed some schema errors. Moved client schema summary to appendix C. Updated UAProf reference and namespace URI. Added Working Group members to acknowledgments.</td></tr><tr class="odd"><td>20010116</td><td>More group review editorial comments. Added citation of RFC2119. Changed some instances of rdf:Bag to {...} notation in graph descriptions. Use ccpp:defaults consistently in examples; add note about allowing ccpp:Defaults for compatibility with UAProf. Section 2.1.3: added some additional text about references to external defaults. Added points for allowed URIs and resolution mechanisms in appendix F. Figure 3-12 notation change. Section 4.1: attempt to further clarify what is required behavior. Section 4.3, add paragraph about support of RDF schema. Appendix D: add text recommending use of RDF schema to define vocabularies. Section 3.1.1, add text about use of rdf:type properties for ccpp:Component resources. Appendix B: remove references to ccpp:Set and ccpp:Value.</td></tr><tr class="even"><td>20010118</td><td>Validate RDF examples with SiRPAC (W3C online facility) and correct errors detected. Fix up some internal links.</td></tr><tr class="odd"><td>20010129</td><td>Add hyperlinked ToC (courtesy of "htmltoc" by Earl Hood)</td></tr><tr class="even"><td>20010223</td><td>Published as First Working Draft.</td></tr><tr class="odd"><td>20010315</td><td>Added last-call section. Changed some spelling. Published as Last-call working Working Draft.</td></tr><tr class="even"><td>20010425</td><td>Fold in review comments for editorial matters. Explain use of names for URIs in examples. Remove unused terms from glossary.</td></tr><tr class="odd"><td>20010510</td><td>Remove P3P from glossary; P3P integration will be discussed in a separate security document. Review all examples to use full URIs rather than placeholder names, and qualify all RDF attributes with namespace prefixes. Added cross-reference from section 2.3 to 3.1.4 and 3.1.5 (CC/PP usage of RDF). Added NOTE saying why proxy descriptions are not linked directly. Added sequence value to data types. Remove requirement for an attribute to be unique across all components of a profile. Added restriction that a single "Proxy-behavior" must reference a single type of component, and that the component type should be specified (section 3.2.2). Clarify that 'charset' feature really indicates a character encoding. Appendix F re-worked to make it clearer that this document does not define an HTTP binding for using CC/PP. Added 'xml:lang' attributes to schemas in appendices B and C. Revise interpretation of charWidth to better cater for international characters.</td></tr><tr class="even"><td>20010511</td><td>Reference XML schema data types, and fix up some minor schema errors. Introduce new class ccpp:Structure to clearly distinguish all CC/PP structural properties from attribute properties. Editorial fix in relationship to UAProf (E.2).</td></tr><tr class="odd"><td>20010522</td><td>Revise text relating to CC/PP attributes that are represented by URI strings: preferred treatment is as RDF resources rather than literal URI strings (section 4.1.1.1 and various examples). Discussion of graph composition (new section 3.1.6). Deleted some gratuitous repetition (sections 3.1.1 and 3.1.2).</td></tr><tr class="even"><td>20010620</td><td>Revise all examples to use explicit namespace prefixes for RDF elements and attributes. Remove unused ccpp: namespace declaration from some examples.</td></tr><tr class="odd"><td>20010704</td><td>Fix small errors in examples 2-3b and 3-2c. Editorial fixes.</td></tr><tr class="even"><td>20010906</td><td>Reword text in 3.1.5 describing use of rdf:type on ccpp:Component instance. Revise description of 'charWidth' in appendix C to remove some errors with respect to international characters. Section 4.1.1.1: Added some text indicating that XML conventions must be used for encoding non-ASCII characters in URI values (per RDF spec). Section 4.1.2.2: added note that vocabularies that use sequence values should define the significance of the ordering. Add text pointing about possible protocol interactions to appendices D, F and F.1. Checked example of empty description element with RDF validator.</td></tr><tr class="odd"><td>20011102</td><td><p>Revise the wording in section 4.1.1.1 about encoding of non-ASCII characters in URI values, to reference the XML specification errata <a href="/XML/xml-V10-2e-errata#E26">http://www.w3.org/XML/xml-V10-2e-errata#E26</a>. Updated reference [XML] to cite the errata document. Revision to section 4.1.2 introduction text to clarify that arbitrary RDF resources may be used for attribute values, though their meaning is not defined here. Fix typo.</p></td></tr><tr class="even"><td>20020402</td><td>Add hyperlinks to schema documents.</td></tr><tr class="odd"><td>20020501</td><td>Added the term 'XML attributes' where necessary to distinguish between CC/PP attributes and XML attributes. Fixed the local about reference in Figure 2-1b. Added 'section' hyperlinks where necessary. Removed unnecessary angle brackets around namespace identifiers. Removed extraneous space from date of Working Group meeting. Removed the proxy hardware and software examples: there is no need for a proxy to append its processor or operating system to a CC/PP request and using this as an example will cause confusion. Removed some remaining instances of the term 'URI string'. Changed 'don't reuse existing vocabularies' heading to 'reuse existing vocabularies'. Removed an unnecessarily capitalized 'Defaults' from Section 3.1.3. Fixed the references so they work: there was a problem with the square brackets. Changed 'RDF schema' to 'RDF Schema' where it is used to refer to the W3C specification.</td></tr><tr class="even"><td>20020502</td><td>Fixed errors in RDF in Figure 1-2 and Figure 3-3 identified with W3C RDF validation service.</td></tr><tr class="odd"><td>20020507</td><td>Updated section 3.1.5 to resolve issue 16. Updated section 2.2 to resolve issue 54. Added a paragraph about WAI to resolve issue 115.</td></tr><tr class="even"><td>20020520</td><td>Updated CC/PP schema to create datatypes for anyURI, string and integer in the CC/PP namespace that reference the datatypes in the XML Schema. The previous version of the schema just referenced the XML schema datatypes. Changed CC/PP namespace to <a href="/2002/05/20-ccpp#">http://www.w3.org/2002/05/20-ccpp#</a>.</td></tr><tr class="odd"><td>20020715</td><td>Updated the reference section to distinguish between normative and informative references and use [AAAA] not [nnnn] reference label format as per W3C Style Guide to address issue 181. Removed examples using composite literals i.e. changed all instances of <code>&lt;display&gt;</code> to <code>&lt;displayWidth&gt;</code> and <code>&lt;displayHeight&gt;</code> to address issue 152. Changed example profiles so that rdf:about's point to a profile URI rather than a schema URI as this means the component applies to this particular profile instance, rather than any device using this particular schema to address issue 153. Added some text to section 3.1.1 to address issue 175. Inserted Figure 3.2b to explain default resolution to address issue 180.</td></tr><tr class="even"><td>20020717</td><td>Updated the UAProf URL, specifically in Section 2.2, and added text proposed by Art Barstow to resolve issue 54. Also updated UAProf examples so they use legal UAProf property names.</td></tr><tr class="odd"><td>20020719</td><td>Removed a remaining instance of the sentence "This is one of three properties to describe a proxy behavior." to address issue 37.</td></tr><tr class="even"><td>20020812</td><td>Added a sentence to section 3.2 and three additional paragraphs to section 3.2.2 to address issue 182.</td></tr><tr class="odd"><td>20020812</td><td>Changed a paragraph in section 3.2 to address issue 182.</td></tr><tr class="even"><td>20020924</td><td>Removed usage of ccpp:Resource to resolve issue 31.</td></tr><tr class="odd"><td>20021105</td><td>Altered text of abstract to indicate proxy vocabulary is optional. Altered text of introduction to indicate proxy vocabulary is optional. Added a preceding sentence in section 2.1.4 saying proxy support is optional. Ditto for section 2.2. Moved Client-profile, Request-profile, Proxy-profile and Proxy-Behavior from CCPP Schema to proxy Schema. Updated figures B.1 and B.2 and added two new figures, B.3 and B.4 to reflect this. Due to the data typing decision made by RDF-Core concerning interpreting literals, changed all instances of XML Schema datatypes to CC/PP data types. Removed the sentence "Note that, where available, XML schema datatypes (xsdt:) are used for literal values [XMLSCHEMA-2]." from section B.1. Updated URIs to 08 November 2002. Changed definition of CC/PP profile in Section 2.1 to "A CC/PP profile is broadly constructed as a 2-level hierarchy: a profile having a number of components, and each component having at least one or more attributes." to resolve the concern expressed by the UAProf drafting committee that the CC/PP definition of a component is incompatible with UAProf.</td></tr><tr class="even"><td>20021211</td><td>Fixed problem with Figure 2-3b described in issue 183. Clarified meaning of CC/PP profile for issue 185. Clarified the status of appendices to address issue 189. Removed the term "CC/PP expression" from section 2.2 to address issue 191. Updated the RDF Schema reference to point at the March 2000 Candidate Recommendation version. Fixed UAProf reference to address issue 198. Fixed schema in B.3 to address issue 200. Updated introductory paragraph to Appendix C to address issue 201. Added a definition of a "CC/PP processor" to appendix B to address issue 202 and replaced instance of "CC/PP parser" with CC/PP processor.</td></tr><tr class="odd"><td>20021213</td><td>Checked usage of optional and recommended so that instances are capitalized where necessary to address issue 188.</td></tr><tr class="even"><td>20030203</td><td>Fixed the use of both http://www.w3.org/2002/12/13-ccpp-schema and http://www.w3.org/2002/12/13-ccpp as CC/PP namespaces. Uniformly adopted the use of rdf:about in the schemas.</td></tr><tr class="odd"><td>20030212</td><td>Fixed problem with section 2 in toc. Fixed bold # in CC/PP namespace in section 2.2. Fixed grammatical error in section 4.1.2.2.</td></tr><tr class="even"><td>20030320</td><td>Added mention of RDF data typing and further DIWG work to status section. Added mention of compatibility with CONNEG to section 1. Removed use of compound simple types in examples in section 2.1.3. Removed section 2.1.4 (introduction to proxies), section 2.3 (rdf primer), section 3.2 (proxies). Ensured the document references the RDF specs (RDF M&amp;S, RDF/XML Syntax, RDF Primer, RDF Schema) in appropriate places. Promoted section 3.1 subsections to section 3 subsections. Removed case-insensitive text from section 4.1.1.2. Changed minimum recommended value for integer numbers and corrected the XML schema datatype in section 4.1.1.3. Described difficulty of rational numbers in section 4.1.1.4. Clarified expressive relationship with CONNEG in section E.1.</td></tr><tr class="odd"><td>20030728</td><td>Removed remnants mentioning proxy. Added note about RDF Primer referencing more recent versions of RDF specs in status section. Changed schema URL from http://www.w3.org/2002/11/08-ccpp to http://www.w3.org/2002/11/08-ccpp-schema in section 2.2. Added UAProf namespace compatibility for component and defaults in section 3.1 and 3.3. Changed HTML 3.0 to HTML 3.2 in various examples. Removed Tokens from section 4.1.1.2 and Appendix C. Fixed rational number schema in section 4.1.1.4. Clarified that multiple occurences of a single attribute within a single component are not allowed in section 4.1.2. Added section 5 Conformance. Changed references to point to dated copies in section 7. Removed anyURI from schema in Appendices B and C. Changed Rational datatype to rational in Appendix B. Added note about case normalization for CONNEG compatibility in section E.1. Added Appendix G RDF Compatibility.</td></tr><tr class="even"><td>20030915</td><td>Various editorial changes and clarifications. Added "delivery context" term to section 1. Removed redundant paragraph regarding namespace URIs in section 2.2. Removed section 4.1.1.1 "Values described by URIs" since it should have been removed when anyURI was removed.</td></tr></tbody></table>

------------------------------------------------------------------------

[<img src="http://www.w3.org/Icons/valid-html401.gif" alt="Valid HTML 4.01!" width="88" height="31" />](http://validator.w3.org/)
