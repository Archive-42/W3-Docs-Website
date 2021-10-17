<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

W3C Recommendation 10 November 2020
-----------------------------------

This version:  
<a href="https://www.w3.org/TR/2020/REC-audiobooks-20201110/" class="u-url">https://www.w3.org/TR/2020/REC-audiobooks-20201110/</a>

Latest published version:  
<https://www.w3.org/TR/audiobooks/>

Latest editor's draft:  
<https://w3c.github.io/audiobooks/>

Implementation report:  
<https://www.w3.org/publishing/groups/publ-wg/implementation/results.html>

Previous version:  
<https://www.w3.org/TR/2020/PR-audiobooks-20201001/>

Editors:  
<span class="p-name fn">Wendy Reid</span> (<a href="https://www.kobo.com/" class="p-org org h-org h-card">Rakuten/Kobo</a>)

<span class="p-name fn">Matt Garrish</span> (<a href="https://daisy.org" class="p-org org h-org h-card">DAISY Consortium</a>)

Participate:  
[GitHub w3c/audiobooks](https://github.com/w3c/audiobooks/)

[File a bug](https://github.com/w3c/audiobooks/issues/)

[Commit history](https://github.com/w3c/audiobooks/commits/master)

[Pull requests](https://github.com/w3c/audiobooks/pulls/)

Please check the [**errata**](https://w3c.github.io/audiobooks/errata/) for any errors or issues reported since publication.

See also [**translations**](http://www.w3.org/2003/03/Translations/byTechnology?technology=audiobooks).

This document is also available in this non-normative format: [EPUB](audiobooks.epub)

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2019-2020 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [permissive document license](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document) rules apply.

------------------------------------------------------------------------

Abstract
--------

This specification describes the requirements for the creation of audiobooks, using a profile of the Publication Manifest specification.

Status of This Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This document was published by the [Publishing Working Group](https://www.w3.org/publishing/groups/publ-wg/) as a Recommendation.

[GitHub Issues](https://github.com/w3c/audiobooks/issues/) are preferred for discussion of this specification. Alternatively, you can send comments to our mailing list. Please send them to <public-publ-wg@w3.org> ([archives](https://lists.w3.org/Archives/Public/public-publ-wg/)).

A W3C Recommendation is a specification that, after extensive consensus-building, has received the endorsement of the W3C and its Members. W3C recommends the wide deployment of this specification as a standard for the Web. Future updates to this Recommendation may incorporate [new features](https://www.w3.org/2020/Process-20200915/#allow-new-features).

This document was produced by a group operating under the [1 August 2017 W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy-20170801/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/100074/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy-20170801/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy-20170801/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2020/Process-20200915/" id="w3c_process_revision">15 September 2020 W3C Process Document</a>.

Table of Contents
-----------------

1.  <a href="#intro" class="tocxref">1. Introduction</a>
2.  <a href="#audio-terminology" class="tocxref">2. Terminology</a>
3.  <a href="#conformance" class="tocxref">3. Conformance</a>
4.  <a href="#audio-construction" class="tocxref">4. Construction</a>
    1.  <a href="#audio-pep" class="tocxref">4.1 Primary Entry Page</a>
    2.  <a href="#audio-toc" class="tocxref">4.2 Table of Contents</a>
5.  <a href="#audio-manifest" class="tocxref">5. Manifest</a>
    1.  <a href="#audio-properties-intro" class="tocxref">5.1 Introduction</a>
    2.  <a href="#audio-requirements" class="tocxref">5.2 Requirements</a>
    3.  <a href="#audio-context" class="tocxref">5.3 Manifest Contexts</a>
    4.  <a href="#audio-conformance" class="tocxref">5.4 Publication Conformance</a>
    5.  <a href="#audio-type" class="tocxref">5.5 Publication Type</a>
    6.  <a href="#audio-properties" class="tocxref">5.6 Properties</a>
        1.  <a href="#audio-creators" class="tocxref">5.6.1 Creators</a>
        2.  <a href="#audio-duration" class="tocxref">5.6.2 Duration</a>
    7.  <a href="#audio-readingorder" class="tocxref">5.7 Default Reading Order</a>
    8.  <a href="#audio-resourcelist" class="tocxref">5.8 Resource List</a>
    9.  <a href="#audio-preview" class="tocxref">5.9 Audiobook Previews</a>
    10. <a href="#audio-packaging" class="tocxref">5.10 Packaging</a>
    11. <a href="#audio-accessibility" class="tocxref">5.11 Accessibility</a>
6.  <a href="#audio-manifest-processing" class="tocxref">6. Manifest Processing</a>
7.  <a href="#toc-algorithm-extension" class="tocxref">7. User Agent Processing of Machine-Processable Table of Contents</a>
8.  <a href="#security-privacy" class="tocxref">8. Security and Privacy Considerations</a>
9.  <a href="#audio-ua-behaviour" class="tocxref">9. User Agent Behaviors for Audiobooks</a>
    1.  <a href="#audio-ua-navigation" class="tocxref">9.1 Opening and Navigating the Contents of an Audiobook</a>
    2.  <a href="#audio-ua-playback" class="tocxref">9.2 Audiobook Playability</a>
    3.  <a href="#audio-ua-packaging" class="tocxref">9.3 Audiobook Packaging and Offlining</a>
    4.  <a href="#audio-ua-accessibility" class="tocxref">9.4 Audiobooks Accessibility</a>
10. <a href="#change-log" class="tocxref">10. Change Log</a>
11. <a href="#audio-manifest-examples" class="tocxref">A. Manifest Examples</a>
    1.  <a href="#audio-simple" class="tocxref">A.1 Simple Audiobook</a>
    2.  <a href="#audio-supplemental" class="tocxref">A.2 Audiobook with Supplemental Content</a>
12. <a href="#audio-toc-examples" class="tocxref">B. Table of Contents Examples</a>
    1.  <a href="#toc-pep" class="tocxref">B.1 Primary Entry Page with a Table of Contents</a>
    2.  <a href="#toc-simple" class="tocxref">B.2 Simple Table of Contents</a>
    3.  <a href="#toc-mediafragments" class="tocxref">B.3 Table of Contents with Media Fragments</a>
13. <a href="#ack" class="tocxref">C. Acknowledgements</a>
14. <a href="#references" class="tocxref">D. References</a>
    1.  <a href="#normative-references" class="tocxref">D.1 Normative references</a>
    2.  <a href="#informative-references" class="tocxref">D.2 Informative references</a>

1. Introduction<a href="#intro" class="self-link"></a>
------------------------------------------------------

*This section is non-normative.*

An Audiobook is a collection of audio resources grouped together by a reading order, metadata, and resources, all contained in a manifest. This Audiobook can live on the Open Web Platform, or as a packaged entity.

This specification is intended to standardize the audiobooks distribution model on the web and between businesses. It should facilitate different user agent architectures for the consumption of Audiobooks. The primary goal is to bring clarity to a part of the publishing industry currently underserved by standards, while opening Audiobooks to the Open Web Platform and new user agents. This specification does not outline what file types or formats should be used by content creators, only a manifest format for delivering them.

This specification does not define how user agents are expected to render Audiobooks. Details about the types of affordances that user agents can provide to enhance the reading experience for users are instead defined in \[<a href="#bib-pwp-ucr" class="bibref" title="Web Publications Use Cases and Requirements">pwp-ucr</a>\].

2. Terminology<a href="#audio-terminology" class="self-link"></a>
-----------------------------------------------------------------

Terms with meanings specific to the publishing industry are capitalized in this document (e.g., "Reading System"). A complete list of these [terms and definitions](https://www.w3.org/TR/pub-manifest/#terminology) is provided in \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\].

Only the first instance of a term in a section is linked to its definition.

In addition, the following terminology is defined for use in this specification:

 Supplemental Content   
Supplemental content is any content relating to the audiobook content but not required for the full experience of the publication. Examples of supplemental content include photographs, charts, or data relating to topics mentioned in the audiobook.

3. Conformance<a href="#conformance" class="self-link"></a>
-----------------------------------------------------------

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words *MAY*, *MUST*, *MUST NOT*, *RECOMMENDED*, *REQUIRED*, and *SHOULD* in this document are to be interpreted as described in [BCP 14](https://tools.ietf.org/html/bcp14) \[<a href="#bib-rfc2119" class="bibref" title="Key words for use in RFCs to Indicate Requirement Levels">RFC2119</a>\] \[<a href="#bib-rfc8174" class="bibref" title="Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words">RFC8174</a>\] when, and only when, they appear in all capitals, as shown here.

4. Construction<a href="#audio-construction" class="self-link"></a>
-------------------------------------------------------------------

### 4.1 Primary Entry Page<a href="#audio-pep" class="self-link"></a>

The primary entry page is an HTML [resource](#audio-resourcelist) that represents the preferred starting resource of an Audiobook and enables discovery of its manifest. It typically introduces the audiobook and provides access to the content.

The primary entry page *MUST* include either a [link to the manifest](https://www.w3.org/TR/pub-manifest/#manifest-link) or [embed the manifest](https://www.w3.org/TR/pub-manifest/#manifest-embed) \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\]. It also *SHOULD* contain the [table of contents](#audio-toc).

An Audiobook *MUST* include a primary entry page except when [packaging](https://www.w3.org/TR/audiobooks/#audio-packaging) allows alternative discovery of the manifest. When present, the page *MUST* be included in the [resource list](#audio-resourcelist).

### 4.2 Table of Contents<a href="#audio-toc" class="self-link"></a>

The table of contents provides a hierarchical list of links that reflects the structural outline of the major sections of the Audiobook and any supplemental content it may contain.

The table of contents is expressed via an \[<a href="#bib-html" class="bibref" title="HTML Standard">html</a>\] element (typically a nav element) in one of the resources. This element *MUST* be identified by the role attribute \[<a href="#bib-html" class="bibref" title="HTML Standard">html</a>\] value `"doc-toc"` \[<a href="#bib-dpub-aria-1.0" class="bibref" title="Digital Publishing WAI-ARIA Module 1.0">dpub-aria-1.0</a>\].

If the table of contents is located in the [primary entry page](#audio-pep), the table of contents *MUST* be the first element in the document — in document tree order \[<a href="#bib-dom" class="bibref" title="DOM Standard">dom</a>\] — with that role value. Otherwise, the manifest *SHOULD* identify the resource that contains the structure.

If the table of contents is not located in the [primary entry page](#audio-pep), the manifest *SHOULD* identify the resource that contains the structure.

When an Audiobook contains additional resources (i.e. supplemental content):

-   a table of contents *SHOULD* be included;

-   the table of contents *SHOULD* include a link to any of the [resources](#audio-resourcelist); and

-   all links *SHOULD* refer to [publication resources](https://www.w3.org/TR/pub-manifest/#publication-resources) \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\].

Note

When including supplemental content, be aware that users might not have access to this content unless it is linked to from the table of contents. It is strongly advised to provide links to all content that is not in the default reading order.

Note

For more guidance on the structure and formatting for tables of contents, consult [Publication Manifest - Machine-Processable Table of Contents](https://w3c.github.io/pub-manifest/#app-toc-structure) \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\].

5. Manifest<a href="#audio-manifest" class="self-link"></a>
-----------------------------------------------------------

### 5.1 Introduction<a href="#audio-properties-intro" class="self-link"></a>

*This section is non-normative.*

The Audiobook manifest is defined by a set of properties that describe the basic information a user agent requires to process and render an Audiobook. These properties are categorized in the Publication Manifest \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\]. Where these properties are extended from the Publication Manifest is specified in this section.

Note

The Audiobook manifest is defined as a specific "shape" of \[<a href="#bib-json-ld11" class="bibref" title="JSON-LD 1.1">json-ld11</a>\]. This shape is also defined, informally, through a JSON schema \[<a href="#bib-json-schema" class="bibref" title="JSON Schema: core definitions and terminology">json-schema</a>\] that expresses the constraints defined in this specification. This schema is maintained at <https://www.w3.org/ns/pub-schema/audiobooks/>.

### 5.2 Requirements<a href="#audio-requirements" class="self-link"></a>

The requirements for the expression of Audiobook properties and resource relations are defined as follows:

Note

The list of properties uses the formal names for each property as described in \[<a href="#bib-schema.org" class="bibref" title="Schema.org">schema.org</a>\] and \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\]. A descriptive label is included in parentheses where the purpose of these properties might be unclear.

*REQUIRED*:  
-   [`conformsTo`](https://www.w3.org/TR/pub-manifest/#profile-conformance)
-   [`@context`](https://www.w3.org/TR/pub-manifest/#manifest-context)
-   [`readingOrder`](https://www.w3.org/TR/pub-manifest/#default-reading-order)
-   [`name`](https://www.w3.org/TR/pub-manifest/#pub-title) (publication title)

*RECOMMENDED*:  
-   [`abridged`](https://www.w3.org/TR/pub-manifest/#abridged)
-   [`accessibilityFeature`](https://www.w3.org/TR/pub-manifest/#accessibilityFeature)
-   [`accessibilityHazard`](https://www.w3.org/TR/pub-manifest/#accessibilityHazard)
-   [`accessibilitySummary`](https://www.w3.org/TR/pub-manifest/#accessibilitySummary)
-   [`accessMode`](https://www.w3.org/TR/pub-manifest/#accessMode)
-   [`accessModeSufficient`](https://www.w3.org/TR/pub-manifest/#accessModeSufficient)
-   [`author`](#audio-creators)
-   [`cover`](https://www.w3.org/TR/pub-manifest/#cover)
-   [`duration`](#audio-duration)
-   [`dateModified`](https://www.w3.org/TR/pub-manifest/#last-modification-date)
-   [`datePublished`](https://www.w3.org/TR/pub-manifest/#publication-date)
-   [`id`](https://www.w3.org/TR/pub-manifest/#canonical-identifier) (canonical identifier)
-   [`inLanguage`](https://www.w3.org/TR/pub-manifest/#inLanguage) (publication language)
-   [`readBy`](#audio-creators)
-   [`readingProgression`](https://www.w3.org/TR/pub-manifest/#reading-progression-direction)
-   [`resources`](https://www.w3.org/TR/pub-manifest/#resource-list)
-   [`type`](https://www.w3.org/TR/pub-manifest/#publication-types)
-   [`url`](https://www.w3.org/TR/pub-manifest/#address) (address)

Note

Some properties are implicitly required, as they are compiled from alternative information when not explicitly authored. Refer to the [internal representation data models](https://www.w3.org/TR/pub-manifest/#app-internal-rep-data-model) \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\] for more information (the Audiobooks representation only differs in the default value for the `type` term).

### 5.3 Manifest Contexts<a href="#audio-context" class="self-link"></a>

An Audiobook manifest has to start by setting the JSON-LD context \[<a href="#bib-json-ld" class="bibref" title="JSON-LD 1.0">json-ld</a>\]. The context has the following two major components:

-   the \[<a href="#bib-schema.org" class="bibref" title="Schema.org">schema.org</a>\] context: `https://schema.org`
-   the publication context: `https://www.w3.org/ns/pub-context`

<a href="#example-1-the-context-declaration" class="self-link">Example 1</a> <span class="example-title">: The context declaration.</span>

    {
        "@context" : ["https://schema.org", "https://www.w3.org/ns/pub-context"],
        …
    }

To add the global language and direction of the manifest metadata, [language and direction](https://www.w3.org/TR/pub-manifest/#manifest-lang-dir) declaration \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\] can also be added to the context:

<a href="#example-2-declaring-french-as-the-default-language-for-the-manifest" class="self-link">Example 2</a> <span class="example-title">: Declaring French as the default language for the manifest</span>

    {
        "@context" : [
            "https://schema.org",
            "https://www.w3.org/ns/pub-context",
            {"language":"fr"}
        ]
        …
    }

### 5.4 Publication Conformance<a href="#audio-conformance" class="self-link"></a>

The conformance URL expressed in the [`conformsTo` term](https://www.w3.org/TR/pub-manifest/#profile-conformance) \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\] *MUST* be "`https://www.w3.org/TR/audiobooks/`".

<a href="#example-3-setting-a-publication-s-conformance-to-audiobook" class="self-link">Example 3</a> <span class="example-title">: Setting a publication's conformance to Audiobook.</span>

    {
        "@context" : ["https://schema.org", "https://www.w3.org/ns/pub-context"],
        "conformsTo" : "https://www.w3.org/TR/audiobooks/"
        …
    }

### 5.5 Publication Type<a href="#audio-type" class="self-link"></a>

The Publication Type is defined using the `type` term \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\].

<a href="#example-4-setting-a-publication-s-type-to-audiobook" class="self-link">Example 4</a> <span class="example-title">: Setting a publication's type to Audiobook.</span>

    {
        "@context" : ["https://schema.org", "https://www.w3.org/ns/pub-context"],
        "type"     : "Audiobook"
            …
    }

If a `type` is not specified, [`Audiobook`](https://schema.org/Audiobook) \[<a href="#bib-schema.org" class="bibref" title="Schema.org">schema.org</a>\] is assumed as the default.

### 5.6 Properties<a href="#audio-properties" class="self-link"></a>

#### 5.6.1 Creators<a href="#audio-creators" class="self-link"></a>

A creator is an individual or entity responsible for the creation of the Audiobook. The Audiobooks profile can use the full list of [creators](https://www.w3.org/TR/pub-manifest/#creators) defined in \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\].

The creators list includes two recommended creators for Audiobooks:

-   [author](https://schema.org/author)
-   [readBy](https://schema.org/readBy)

<a href="#example-5-author-of-a-book" class="self-link">Example 5</a> <span class="example-title">: Author of a book</span>

    {
        "conformsTo" : "https://www.w3.org/TR/audiobooks/",
        "@context" : ["https://schema.org","https://www.w3.org/ns/pub-context"],
        "type" : "Audiobook",
        …
        "url" : "https://publisher.example.org/janeeyre",
        "author" : {
            "type" : "Person",
            "name" : "Charlotte Bronte"
        }
    }

<a href="#example-6-author-and-narrator-of-an-audiobook" class="self-link">Example 6</a> <span class="example-title">: Author and Narrator of an Audiobook</span>

    {
        "conformsTo" : "https://www.w3.org/TR/audiobooks/";
        "@context": ["https://schema.org", "https://www.w3.org/ns/pub-context"],
        …
        "url"  : "https://publisher.example.org/janeeyre",
        "author" : {
            "type": "Person",
            "name": "Charlotte Bronte"
        }
        "readBy" : {
            "type": "Person",
            "name": "Ivan Herman",
            "id"   : "https://www.w3.org/People/Ivan/"
        }
    }

#### 5.6.2 Duration<a href="#audio-duration" class="self-link"></a>

A duration is the length of the audio resources in an Audiobook. The duration property is fully defined in [Publication Manifest](https://www.w3.org/TR/pub-manifest/#duration) \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\].

Duration *SHOULD* be expressed for the entirety of the audiobook as part of the manifest, and *SHOULD* be present at the item level in the [default reading order](#audio-readingorder).

When a content creator specifies both the duration for the audiobook and item-level duration in the [default reading order](#audio-readingorder) the resource-level duration *SHOULD* be equal to the sum of the durations of the items in the reading order.

<a href="#example-7-duration-of-an-audiobook-in-seconds" class="self-link">Example 7</a> <span class="example-title">: Duration of an Audiobook in Seconds</span>

    {
        "conformsTo" : "https://www.w3.org/TR/audiobooks/",
        "@context" : ["https://schema.org","https://www.w3.org/ns/pub-context"],
        …
        "url" : "https://publisher.example.org/janeeyre",
        "author" : {
             "type"  : "Person",
             "name"  : "Charlotte Bronte"
        },
        "duration" : "PT12345.235S"
    }

### 5.7 Default Reading Order<a href="#audio-readingorder" class="self-link"></a>

The [default reading order](https://www.w3.org/TR/pub-manifest/#default-reading-order) \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\] is a specific progression through the audio resources in the audiobook.

The default reading order *MUST* contain at least one audio resource, which *MAY* be identified by the `type` of [`LinkedResource`](https://www.w3.org/TR/pub-manifest/#value-linked-resource) \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\]. The default reading order *MUST NOT* contain non-audio resources.

An audio resource can be referenced in its entirety via a URL \[<a href="#bib-url" class="bibref" title="URL Standard">url</a>\], or for content where multiple chapters occupy a single file by using [media fragments](https://www.w3.org/TR/media-frags/) \[<a href="#bib-media-frags" class="bibref" title="Media Fragments URI 1.0 (basic)">media-frags</a>\] to locate the exact starting and end points.

Note

It is important to note that a resource cannot be referenced more than once in the reading order. In the case where an audio file represents the content of multiple chapters or sections of the book, the [table of contents](#audio-toc) can be used to specify the starting and ending points of those chapters in the larger audio file, as demonstrated in [this example](#toc-mediafragments).

Note

Annotations can also use media fragments to identify the location of the annotation in the resource, and are compatible with the [Web Annotations](https://www.w3.org/TR/annotation-model/) model. This method will only apply to audiobook manifests that are not packaged.

<a href="#example-8-audiobook-reading-order-for-a-single-resource" class="self-link">Example 8</a> <span class="example-title">: Audiobook Reading Order for a Single Resource</span>

    {
        "@context" : ["https://schema.org", "https://www.w3.org/ns/pub-context"],
        "conformsTo" : "https://www.w3.org/TR/audiobooks/",
        "url" : "https://publisher.example.org/janeeyre",
        "name" : "Jane Eyre",
        "readingOrder" : [{
            "type" : "LinkedResource",
            "url" : "audio/janeeyre.mp3",
            "encodingFormat" : "audio/mp3",
            "name" : "Jane Eyre",
            "duration" : "PT124503.123S"
        }]
    }

<a href="#example-9-audiobook-reading-order-for-multiple-resources-using-media-fragments" class="self-link">Example 9</a> <span class="example-title">: Audiobook Reading Order for Multiple Resources using Media Fragments</span>

    {
        "@context" : ["https://schema.org", "https://www.w3.org/ns/pub-context"],
        "conformsTo" : "https://www.w3.org/TR/audiobooks/",
        "url" : "https://publisher.example.org/janeeyre",
        "name" : "Jane Eyre",
        "readingOrder" : [{
            "type": "LinkedResource",
            "url" : "audio/part001.wav#t=0,457.931",
            "encodingFormat" : "audio/vnd-wav",
            "name" : "Chapter 1",
            "duration" : "PT457.931S"
        }, {
            "type" : "LinkedResource",
            "url" : "audio/part002.wav#t=12.741",
            "encodingFormat" : "audio/vnd-wav",
            "name" : "Chapter 2",
            "duration" : "PT234.245S"
        }]
    }

### 5.8 Resource List<a href="#audio-resourcelist" class="self-link"></a>

The resource list enumerates any additional resources used in the processing and rendering of an audiobook that are not listed in the reading order. It is expressed using the `resources` property.

If an audiobook includes supplemental content it *MUST* be referenced in the resource list.

<a href="#example-10-audiobook-with-supplemental-content" class="self-link">Example 10</a> <span class="example-title">: Audiobook with Supplemental Content</span>

    {
        "@context" : ["https://schema.org", "https://www.w3.org/ns/pub-context"],
        "conformsTo" : "https://www.w3.org/TR/audiobooks/",
        "url" : "https://publisher.example.org/janeeyre",
        "name" : "Jane Eyre",
        "resources" : [
            "cover.jpg",
            "portrait_CB.jpg",
            "supplement.pdf"
        ]
    }

### 5.9 Audiobook Previews<a href="#audio-preview" class="self-link"></a>

Previews are a common way to provide users an experience of the full content before purchasing or downloading the full audiobook.

A [preview](https://www.w3.org/TR/pub-manifest/#preview) is identified using the `preview` link relation, as defined in \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\].

Previews *MAY* be located externally or included as a resource of the audiobook.

<a href="#example-11-audiobook-with-an-external-preview" class="self-link">Example 11</a> <span class="example-title">: Audiobook with an External Preview</span>

    {
        "@context" : ["https://schema.org", "https://www.w3.org/ns/pub-context"],
        "conformsTo" : "https://www.w3.org/TR/audiobooks/",
        "url"    : "https://publisher.example.org/janeeyre",
        "name" : "Jane Eyre",
        "resources" : [{
            "type" : "LinkedResource",
            "url" : "https://publisher.example.org/jane-eyre-preview.wav",
            "encodingFormat" : "audio/wav",
            "rel" : "preview"
        }]
    }

<a href="#example-12-audiobook-with-an-internal-preview" class="self-link">Example 12</a> <span class="example-title">: Audiobook with an Internal Preview</span>

    {
        "@context" : ["https://schema.org", "https://www.w3.org/ns/pub-context"],
        "conformsTo" : "https://www.w3.org/TR/audiobooks/",
        "url"    : "https://publisher.example.org/janeeyre",
        "name" : "Jane Eyre",
        "resources" : [{
            "type" : "LinkedResource",
            "url"    : "preview.wav",
            "encodingFormat" : "audio/wav",
            "rel"    : "preview"
        }]
    }

### 5.10 Packaging<a href="#audio-packaging" class="self-link"></a>

*This section is non-normative.*

Audiobooks will be packaged using the method described in the [Lightweight Packaging Format](https://www.w3.org/TR/lpf/) \[<a href="#bib-lpf" class="bibref" title="Lightweight Packaging Format (LPF)">lpf</a>\] note.

### 5.11 Accessibility<a href="#audio-accessibility" class="self-link"></a>

*This section is non-normative.*

The history of the audiobook is rooted in the world of accessibility. Both purely audio publications and publications that synchronize text and audio playback have long been used to assist users with alternative reading needs and preferences.

An approach for accessible synchronized media in publications is currently being done by the [Synchronized Multimedia for Publications Community Group](https://www.w3.org/community/sync-media-pub/). Refer to the work of that group for more information about creating such content and incorporating it into an Audiobook.

Alternatively, a content creator can provide the text equivalent as HTML \[<a href="#bib-html" class="bibref" title="HTML Standard">html</a>\] resources in the [resources](#audio-resourcelist).

<a href="#example-13-audiobook-with-alternate-text" class="self-link">Example 13</a> <span class="example-title">: Audiobook with Alternate Text</span>

    {
        "@context" : ["https://schema.org", "https://www.w3.org/ns/pub-context"],
        "conformsTo" : "https://www.w3.org/TR/audiobooks/",
        "url" : "https://publisher.example.org/janeeyre",
        "name" : "Jane Eyre",
        "readingOrder" : {
            "type" : "LinkedResource",
            "url" : "audio/part001.wav#t=0",
            "encodingFormat" : "audio/vnd-wav",
            "name" : "Chapter 1",
            "duration" : "PT457.931S",
            "alternate" : {
                "type" : "LinkedResource",
                "url" : "text/part001-1.html",
                "encodingFormat" : "text/html"},
        },
        "resources" : [{
             "type": "LinkedResource",
             "url": "text/part001-1.html",
             "encodingFormat" : "text/html"
         }…
        ]
    }

6. Manifest Processing<a href="#audio-manifest-processing" class="self-link"></a>
---------------------------------------------------------------------------------

*This section depends on the Infra Standard \[<a href="#bib-infra" class="bibref" title="Infra Standard">infra</a>\].*

The specification extends the Publication Manifest [processing algorithms](https://www.w3.org/TR/pub-manifest/#manifest-processing) \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\] as follows:

Generating the Internal Representation  
The following [extension steps](https://www.w3.org/TR/pub-manifest/#processing-extension) are added for Audiobook manifests:

1.  (<a href="#audio-duration" class="sec-ref">§ 5.6.2 Duration</a>) Check the duration of the publication as follows:

    1.  Let resourceDuration hold the total duration of individual resources.

    2.  [For each](https://infra.spec.whatwg.org/#list-iterate) resource of data\["readingOrder"\]:

        1.  if resource\["duration"\] is not defined, [validation error](https://www.w3.org/TR/pub-manifest/#dfn-validation-errors).

        2.  otherwise, if resource\["duration"\], add resource\["duration"\] to resourceDuration.

    3.  If the values cannot be compared because data\["duration"\] is not set, [validation error](https://www.w3.org/TR/pub-manifest/#dfn-validation-errors).

        Otherwise, if resourceDuration does not specify the same total duration as data\["duration"\], [validation error](https://www.w3.org/TR/pub-manifest/#dfn-validation-errors).

    Explanation
    This step checks both that all resources in the reading order specify a duration and that the sum of all those durations matches the total duration for the publication.

    A validation error is only emitted while checking each resource if the resource does not specify a duration. The [validity of the durations](https://www.w3.org/TR/pub-manifest/#validate-duration) \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\] is already checked in the publication manifest algorithm so does not need to be repeated.

Data Validation  
The following [extension steps](https://www.w3.org/TR/pub-manifest/#validate-extension) are added for Audiobook manifests:

1.  (<a href="#audio-readingorder" class="sec-ref">§ 5.7 Default Reading Order</a>) Check the reading order as follows:

    1.  If data\["readingOrder"\] is not set, [fatal error](https://www.w3.org/TR/pub-manifest/#dfn-fatal-errors).

    2.  [For each](https://infra.spec.whatwg.org/#list-iterate) resource in data\["readingOrder"\], if resource is not an audio resource, [validation error](https://www.w3.org/TR/pub-manifest/#dfn-validation-errors), [remove](https://infra.spec.whatwg.org/#list-remove) resource from data\["readingOrder"\].

    3.  If data\["readingOrder"\] is an empty [list](https://infra.spec.whatwg.org/#list), [fatal error](https://www.w3.org/TR/pub-manifest/#dfn-fatal-errors).

    Explanation
    This step ensures that only audio resources are listed in the reading order and removes any that are not.

    If the reading order does not contain any entries after checking each resource, a fatal error is returned as the publication is not a valid audiobook.

2.  (<a href="#audio-type" class="sec-ref">§ 5.5 Publication Type</a>) If data\["type"\] is not set or is an empty [list](https://infra.spec.whatwg.org/#list), [validation error](https://www.w3.org/TR/pub-manifest/#dfn-validation-errors), set to `« "Audiobook" »`.

    Explanation
    This step sets the default type of the publication to `Audiobook` when a type property has not been specified.

3.  (<a href="#audio-requirements" class="sec-ref">§ 5.2 Requirements</a>) Check that each of the following properties is set. If not, issue a [validation error](https://www.w3.org/TR/pub-manifest/#dfn-validation-errors) for each one.

    -   data\["abridged"\]
    -   data\["accessMode"\]
    -   data\["accessModeSufficient"\]
    -   data\["accessibilityFeature"\]
    -   data\["accessibilityHazard"\]
    -   data\["accessibilitySummary"\]
    -   data\["author"\]
    -   data\["dateModified"\]
    -   data\["datePublished"\]
    -   data\["id"\]
    -   data\["inLanguage"\]
    -   data\["name"\]
    -   data\["readBy"\]
    -   data\["readingProgression"\]
    -   data\["resources"\]
    -   data\["url"\]

    Explanation
    This step checks that all the recommended properties have been set. For more information about these, refer to <a href="#audio-requirements" class="sec-ref">§ 5.2 Requirements</a>.

4.  (<a href="#audio-requirements" class="sec-ref">§ 5.2 Requirements</a>) If no resource in data\["readingOrder"\] or data\["resources"\] has a rel [entry](https://infra.spec.whatwg.org/#map-entry) that [contains](https://infra.spec.whatwg.org/#list-contain) the relation `cover`, [validation error](https://www.w3.org/TR/pub-manifest/#dfn-validation-errors).

    Explanation
    This step checks the reading order and resource list to verify that a cover has been specified (i.e., an resource has the value `cover` in its `rel` property).

7. User Agent Processing of Machine-Processable Table of Contents<a href="#toc-algorithm-extension" class="self-link"></a>
--------------------------------------------------------------------------------------------------------------------------

*This section is non-normative.*

This specification extends the Publication Manifest’s [User Agent Processing Algorithm](https://www.w3.org/TR/pub-manifest/#app-toc-ua) for Machine-Processable Table of Contents \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\] to locate a table of content element as follows:

1.  If the <a href="#dfn-primary-entry-page" id="ref-for-dfn-primary-entry-page-1" class="internalDFN">primary entry page</a> is available, then execute the algorithm locating the table of content element on the primary entry page.
2.  If the previous step is not successful, locate the relevant resource, if available, in the manifest as described in [§ 4.8.1.3 Table of Contents](https://www.w3.org/TR/pub-manifest/#contents) in \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\], and execute the same algorithm on that resource.

See also <a href="#audio-toc" class="sec-ref">§ 4.2 Table of Contents</a> for further details.

8. Security and Privacy Considerations<a href="#security-privacy" class="self-link"></a>
----------------------------------------------------------------------------------------

As Audiobooks is a profile of Publication Manifest \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\], all [security and privacy](https://www.w3.org/TR/pub-manifest/#security-privacy) considerations detailed in that specification are applicable to this profile.

This profile acknowledges the following considerations:

-   References within the [Reading Order](#audio-readingorder) and [Resource List](#audio-resourcelist) can be references to both remote and local resources.

9. User Agent Behaviors for Audiobooks<a href="#audio-ua-behaviour" class="self-link"></a>
------------------------------------------------------------------------------------------

*This section is non-normative.*

This section outlines the expected user agent behaviors for implementation of audiobooks. For processing instructions, user agents should refer to the [`Processing a                     Manifest`](https://www.w3.org/TR/pub-manifest/#manifest-processing) section of the Publication Manifest \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\] specification, and conform to any behavior described there.

All user agent behaviors described in this section are intended to provide implementors with guidance, not strict requirements. Behaviors in this document are taken mainly from the [Use Cases and Requirements](https://www.w3.org/TR/pwp-ucr/) \[<a href="#bib-pwp-ucr" class="bibref" title="Web Publications Use Cases and Requirements">pwp-ucr</a>\] note published by the working group.

### 9.1 Opening and Navigating the Contents of an Audiobook<a href="#audio-ua-navigation" class="self-link"></a>

When a user agent opens an Audiobook, and the manifest processes according to the rules laid out in [Publication Manifest](https://www.w3.org/TR/pub-manifest/#manifest-processing) \[<a href="#bib-pub-manifest" class="bibref" title="Publication Manifest">pub-manifest</a>\], it should be opened by the User Agent. The [Reading Order](#audio-readingorder) or, if available, [Table of Contents](#audio-toc) should be accessible to the user. A User Agent should be able to provide a list of the contents of the audiobook available to the user when requested. If a non-audio resource is present in the Reading Order, the User Agent can choose to present it to the user or skip it.

User agents should provide a means of rendering non-audio resources within the Reading Order and Resource list. If the content cannot be rendered by the user agent, it is recommended that the user agent inform the user that the content is present but cannot be rendered.

The [Primary Entry Page](#audio-pep) is intended to be, when available, the entry point to the audiobook. If a content creator has provided a primary entry page, and the User Agent is capable of rendering or processing HTML content, it should be the first thing presented to the user. The Primary Entry Page may or may not contain a Table of Contents, if included using the `role="doc-toc"` it should be treated as the Table of Contents. If the Table of Contents is a separate document, it can be rendered however the User Agent chooses as long as it meets the requirements laid out above. If no Table of Contents is included in the Primary Entry Page or elsewhere, the User Agent should refer to the Reading Order.

### 9.2 Audiobook Playability<a href="#audio-ua-playback" class="self-link"></a>

As outlined in the [Use Cases and Requirements](https://www.w3.org/TR/pwp-ucr/) \[<a href="#bib-pwp-ucr" class="bibref" title="Web Publications Use Cases and Requirements">pwp-ucr</a>\] note, an audiobook must be navigable in the User Agent. This means that a User Agent must provide methods for the user to move through the audiobook in a linear or non-linear fashion by either moving through the [Reading Order](#audio-readingorder) seamlessly or by accessing the [Table of Contents](#audio-toc). The User Agent should also allow the user to move through individual audio files in short time increments.

For an audiobook, the User Agent should provide a [player interface](https://www.w3.org/TR/pwp-ucr/#player) \[<a href="#bib-pwp-ucr" class="bibref" title="Web Publications Use Cases and Requirements">pwp-ucr</a>\] that will allow the user to navigate, play, or pause the audiobook. This interface can be represented to the user in any way (i.e. physical buttons, visual interface, keyboard input, or voice commands), but should be accessible at any point in the listening experience.

### 9.3 Audiobook Packaging and Offlining<a href="#audio-ua-packaging" class="self-link"></a>

The [Use Cases and Requirements](https://www.w3.org/TR/pwp-ucr/) \[<a href="#bib-pwp-ucr" class="bibref" title="Web Publications Use Cases and Requirements">pwp-ucr</a>\] note recommends that content be available offline and that any packaged formats should not affect the iterations of the publications. This means that even if the content is copied many times to many users via multiple User Agents, the core manifest and its identifier are never changed.

This specification recommends the [Lightweight Packaging Format](https://www.w3.org/TR/lpf/) \[<a href="#bib-lpf" class="bibref" title="Lightweight Packaging Format (LPF)">lpf</a>\] for packaging audiobook content, but this is not a requirement. Audiobook User Agents should be able to ingest LPF files for play, and should display content according to the requirements and recommendations in this document.

If a User Agent is serving the content directly from their service (i.e. as a retailer or repository of content), it is recommended that they provide a method for offlining or downloading the content to the user. This can be in any format they choose, but the audiobook should be complete and valid and the contents listed in the manifest should be served in their entirety. Even if a User Agent does not support the display of a certain resource (i.e. an image file or data table), it should still be available to the user for download.

This specification does not provide a method for content creators to protect or watermark their content, as there are existing methods available in the market today. User Agents who work with content creators that wish to protect or limit the distribution of their content can choose a method that works best for their requirements.

### 9.4 Audiobooks Accessibility<a href="#audio-ua-accessibility" class="self-link"></a>

This specification recommends and provides a method for content creators to create fully [accessible audiobooks](#audio-accessibility). User Agents should use this information, in the section on Accessibility, to implement accessible audiobook interfaces. It is recommended that User Agents provide accessible player interfaces, as well as a method for content creators who have provided `alternate` content to have that content displayed.

10. Change Log<a href="#change-log" class="self-link"></a>
----------------------------------------------------------

Substantive changes since the [First Public Working Draft](https://www.w3.org/TR/2019/WD-audiobooks-20190620/):

-   14-Sept-2020: Added a note that informative information about the table of contents structure and formatting information is available in the Publication Manifest specification. See [issue 97](https://github.com/w3c/audiobooks/issues/97).
-   12-Sept-2020: Removed the manifest processing step that warns if a table of contents is not found as the requirement is dependent on the presence of supplementary resources which cannot be reliably tested. See [issue 93](https://github.com/w3c/audiobooks/issues/93).
-   8-Sept-2020: Clarified that the primary entry page is only required when the packaging does not provide an alternative method. See [issue 61](https://github.com/w3c/audiobooks/issues/61).
-   26-Aug-2020: Removed the example of synchronized narration and updated reference to the work of the Synchronized Multimedia for Publications Community Group to reflect the early nature of that work. See [issue 87](https://github.com/w3c/audiobooks/issues/87).
-   27-July-2020: Updated the reference schema URL to a W3C address. See [issue 226 in Publication Manifest](https://github.com/w3c/pub-manifest/issues/226).
-   2-July-2020: Added a note about the shape of the manifest being defined by the JSON schema to the manifest introduction. See [issue 71](https://github.com/w3c/audiobooks/issues/71).
-   12-Feb-2020: The algorithm step to check and compare resource durations to the total audiobook duration was moved to avoid duplicate validity checks. The algorithm step to warn about the primary entry page not being listed in the unique resources has been removed as it is no checked in the publication manifest algorithm. See [issue 71](https://github.com/w3c/audiobooks/issues/71).
-   12-Feb-2020: The use of fragments in the reading order was clarified to also include end position. A number of examples were also fixed. See [pull request 69](https://github.com/w3c/audiobooks/pull/69).
-   07-Feb-2020: The manifest requirements section was moved out of the properties section as it also includes resource relations. See [issue 70](https://github.com/w3c/audiobooks/issues/70).
-   03-Jan-2020: A new (informative) section <a href="#toc-algorithm-extension" class="sec-ref">§ 7. User Agent Processing of Machine-Processable Table of Contents</a> has been added defining, the extension of the table of contents processing algorithm. See [issue \#63](https://github.com/w3c/audiobooks/issues/63).
-   03-Jan-2020: Extra step in <a href="#audio-manifest-processing" class="sec-ref">§ 6. Manifest Processing</a> adding the PEP’s URL to the collection of unique resources in the manifest. See [issue \#7 for the test-suite](https://github.com/w3c/publ-tests/issues/7).

For a complete list of issues addressed, refer to the [GitHub tracker](https://github.com/w3c/audiobooks/issues?q=is%3Aissue+is%3Aclosed+sort%3Aupdated-desc).

A. Manifest Examples<a href="#audio-manifest-examples" class="self-link"></a>
-----------------------------------------------------------------------------

*This section is non-normative.*

### A.1 Simple Audiobook<a href="#audio-simple" class="self-link"></a>

A manifest for an audiobook. The [canonical version](https://github.com/w3c/pub-manifest/blob/master/experiments/audiobook/flatland-canonical.json) of this manifest is also available.

<a href="#example-14" class="self-link">Example 14</a>

    {
      "@context": ["https://schema.org", "https://www.w3.org/ns/pub-context"],
      "conformsTo" : "https://www.w3.org/TR/audiobooks/",
      "type": "Audiobook",
      "id": "https://librivox.org/flatland-a-romance-of-many-dimensions-by-edwin-abbott-abbott/",
      "url": "https://w3c.github.io/wpub/experiments/audiobook/",
      "name": "Flatland: A Romance of Many Dimensions",
      "author": "Edwin Abbott Abbott",
      "readBy": "Ruth Golding",
      "publisher": "Librivox",
      "inLanguage": "en",
      "dateModified": "2018-06-14T19:32:18Z",
      "datePublished": "2008-10-12",
      "duration": "PT15153S",
      "license": "https://creativecommons.org/publicdomain/zero/1.0/",

      "resources": [
        {
          "rel": "cover",
          "url": "http://ia800704.us.archive.org/9/items/LibrivoxCdCoverArt12/Flatland_1109.jpg",
          "encodingFormat": "image/jpeg"
        },{
          "rel": "contents",
          "url": "toc.html",
          "encodingFormat": "text/html"
        }
      ],

      "readingOrder": [
        {
          "url": "http://www.archive.org/download/flatland_rg_librivox/flatland_1_abbott.mp3",
          "encodingFormat": "audio/mpeg",
          "duration": 1371,
          "name": "Part 1, Sections 1 - 3"
        },{
          "url": "http://www.archive.org/download/flatland_rg_librivox/flatland_2_abbott.mp3",
          "encodingFormat": "audio/mpeg",
          "duration": 1669,
          "name": "Part 1, Sections 4 - 5"
        },{
          "url": "http://www.archive.org/download/flatland_rg_librivox/flatland_3_abbott.mp3",
          "encodingFormat": "audio/mpeg",
          "duration": 1506,
          "name": "Part 1, Sections 6 - 7"
        },{
          "url": "http://www.archive.org/download/flatland_rg_librivox/flatland_4_abbott.mp3",
          "encodingFormat": "audio/mpeg",
          "duration": 1669,
          "name": "Part 1, Sections 8 - 10"
        },{
          "url": "http://www.archive.org/download/flatland_rg_librivox/flatland_5_abbott.mp3",
          "encodingFormat": "audio/mpeg",
          "duration": 1506,
          "name": "Part 1, Sections 11 - 12"
        },{
          "url": "http://www.archive.org/download/flatland_rg_librivox/flatland_6_abbott.mp3",
          "encodingFormat": "audio/mpeg",
          "duration": 1798,
          "name": "Part 2, Sections 13 - 14"
        },{
          "url": "http://www.archive.org/download/flatland_rg_librivox/flatland_7_abbott.mp3",
          "encodingFormat": "audio/mpeg",
          "duration": 1225,
          "name": "Part 2, Sections 15 - 17"
        },{
          "url": "http://www.archive.org/download/flatland_rg_librivox/flatland_8_abbott.mp3",
          "encodingFormat": "audio/mpeg",
          "duration": 1371,
          "name": "Part 2, Sections 18 - 20"
        },{
          "url": "http://www.archive.org/download/flatland_rg_librivox/flatland_9_abbott.mp3",
          "encodingFormat": "audio/mpeg",
          "duration": 1659,
          "name": "Part 2, Sections 21 - 22"
        }
      ]
    }

### A.2 Audiobook with Supplemental Content<a href="#audio-supplemental" class="self-link"></a>

A manifest for an audiobook with supplemental content.

<a href="#example-15" class="self-link">Example 15</a>

    {
        "@context" : ["https://schema.org", "https://www.w3/org/ns/pub-context"],
        "conformsTo" : "https://www.w3.org/TR/audiobooks/",
        "id" : "https://publisher.example.com/janeeyre",
        "url" : "https://publisher.example.com/janeeyre",
        "name" : "Jane Eyre",
        "author" : "Charlotte Bronte",
        "readBy" : "Jane Doe",
        "duration" : "PT123456.789S",
        "abridged" : false,
        "inLanguage" : "en",
        "dateModified" : "2019-03-29T15:59:00Z",
        "datePublished" : "2019-03-29",

        "readingOrder": [
            {"url": "audio/chapter001.aac", "encodingFormat": "audio/aac", "name": "Chapter 1", "duration": "PT1234.567S"},
            {"url": "audio/chapter002.aac", "encodingFormat": "audio/aac", "name": "Chapter 2", "duration": "PT890.123S"},
            {"url": "audio/chapter003.aac", "encodingFormat": "audio/aac", "name": "Chapter 3", "duration": "PT456.789S"},
            {"url": "audio/chapter004.aac", "encodingFormat": "audio/aac", "name": "Chapter 4", "duration": "PT987.654S"},
            {"url": "audio/chapter005.aac", "encodingFormat": "audio/aac", "name": "Chapter 5", "duration": "PT321.987S"}
        ],

         "resources": [
            {"rel": "cover", "url": "images/cover.jpg", "encordingFormat": "image/jpeg"},
            {"rel": "contents", "url": "toc.html", "encodingFormat": "text/html"},
            {"url": "haworth_house.pdf", "encodingFormat": "application/pdf"}
        ]
    }

B. Table of Contents Examples<a href="#audio-toc-examples" class="self-link"></a>
---------------------------------------------------------------------------------

*This section is non-normative.*

### B.1 Primary Entry Page with a Table of Contents<a href="#toc-pep" class="self-link"></a>

A primary entry page with a simple table of contents for an audiobook.

<a href="#example-16" class="self-link">Example 16</a>

        <head>
            …
            <script type="application/ld+json">
        {
            "@context" : ["https://schema.org","https://www.w3.org/ns/pub-context"],
            "conformsTo" : "https://www.w3.org/TR/audiobooks/",
            …
            "url" : "https://publisher.example.org/janeeyre",
            …
        }
        </script>
        …
    </head>
    <body>
        …
        <section role="doc-toc">
            <ol>
                <li><a href="audio/chapter001.wav">Chapter 1. There was no possibility of taking a walk that day...</a></li>
                <li><a href="audio/chapter002.wav">Chapter 2. I resisted all the way:...</a></li>
                <li><a href="audio/chapter003.wav">Chapter 3. The next thing I remember is,...</a></li>
                …
             </ol>
        </section>
        …
    </body>

### B.2 Simple Table of Contents<a href="#toc-simple" class="self-link"></a>

A table of contents for a simple audiobook.

<a href="#example-17" class="self-link">Example 17</a>

    <nav role="doc-toc">
        <h2>JANE EYRE</h2>

        <ol>
            <li><a href="audio/chapter001.mp3">Chapter 1. There was no possibility of taking a walk that day...</a></li>
            <li><a href="audio/chapter002.mp3">Chapter 2. I resisted all the way:...</a></li>
            <li><a href="audio/chapter003.mp3">Chapter 3. The next thing I remember is,...</a></li>
            …
        </ol>
    </nav>

### B.3 Table of Contents with Media Fragments<a href="#toc-mediafragments" class="self-link"></a>

A table of contents using media fragment references to locations in a single audio track.

<a href="#example-18" class="self-link">Example 18</a>

    <nav role="doc-toc">
        <h2>JANE EYRE</h2>

        <ol>
            <li><a href="https://example.publisher.org/janeeyre/part001.mp3#t=0,456.788">Chapter 1</a></li>
            <li><a href="https://example.publisher.org/janeeyre/part001.mp3#t=456.789,1234.566">Chapter 2</a></li>
            <li><a href="https://example.publisher.org/janeeyre/part001.mp3#t=1234.567">Chapter 3</a></li>
        </ol>
    </nav>

C. Acknowledgements<a href="#ack" class="self-link"></a>
--------------------------------------------------------

*This section is non-normative.*

The editor would like to thank the members of the Publishing Working Group for their contributions to this specification:

-   Greg Albers (J. Paul Getty Trust)
-   Franco Alvarado (Macmillan Learning)
-   Boris Anthony (The Rebus Foundation)
-   Luc Audrain (Hachette Livre)
-   Baldur Bjarnason (The Rebus Foundation)
-   Laura Brady (W3C Invited Expert)
-   Steve Breault (Scenarex Inc.)
-   Don Brutzman (Web3D Consortium)
-   Kaylin Bugbee (Earth Science Data Systems Program)
-   Yu-Wei Chang (Taiwan Digital Publishing Forum)
-   Fred Chasen (W3C Invited Expert)
-   Timothy Cole (University of Illinois at Urbana-Champaign)
-   Simon Collinson (Rakuten, Inc.)
-   Rachel Comerford (Macmillan Learning)
-   Garth Conboy (Google, Inc., chair)
-   Juan Corona (Evident Point Software)
-   Christopher Cosner (Stanford University)
-   Dave Cramer (Hachette Livre)
-   Greg Davis (Pearson plc)
-   Romain Deltour (DAISY Consortium)
-   Marisa DeMeglio (DAISY Consortium)
-   Vagner Diniz (NIC.br - Brazilian Network Information Center)
-   Kenneth Dougherty (Pearson plc)
-   Brady Duga (Google, Inc.)
-   Ben Dugas (Rakuten, Inc.)
-   Roger Espinosa (University of Michigan)
-   Reinaldo Ferraz (NIC.br - Brazilian Network Information Center)
-   Teenya Franklin (Pearson plc)
-   Jun Gamo (Voyager Japan, Inc.)
-   Matt Garrish (DAISY Consortium)
-   Michael Goodman (Wiley)
-   Markku Hakkinen (Educational Testing Service)
-   Katie Haritos-Shea (Knowbility)
-   Ivan Herman (W3C Staff)
-   Geoff Jukes (Blackstone Audio, Inc.)
-   Deborah Kaplan (W3C Invited Expert)
-   Bill Kasdorf (Book Industry Study Group)
-   George Kerscher (DAISY Consortium)
-   Yuri Khramov (Evident Point Software)
-   Masakazu Kitahara (Voyager Japan, Inc.)
-   Toshiaki Koike (Voyager Japan, Inc.)
-   Charles LaPierre (Benetech)
-   Mustapha Lazrek (Microsoft Corporation)
-   Laurent Le Meur (EDRLab)
-   Vladimir Levantovsky (Monotype)
-   Mia Lipner (Pearson plc)
-   Phil Madans (Hachette Livre)
-   Christopher Maden (University of Illinois at Urbana-Champaign)
-   Dmitry Markushevich (Evident Point Software)
-   Keith McFarland (Blackstone Audio, Inc.)
-   Jonathan McGlone (University of Michigan)
-   Hugh McGuire (The Rebus Foundation)
-   Nellie McKesson (W3C Invited Expert)
-   Selma Morais (NIC.br - Brazilian Network Information Center)
-   Jasmine Mulliken (Stanford University)
-   Cristina Mussinelli (Fondazione LIA)
-   Christos Nikolakakos (Wiley)
-   Gregorio Pellegrino (Fondazione LIA)
-   Fernando Pinto da Silva (EDRLab)
-   Nicholas Polys (Web3D Consortium)
-   Chris Powell (University of Michigan)
-   Jeff Printy (Macmillan Learning)
-   Ryan Pugatch (Hachette Livre)
-   Joshua Pyle (Wiley)
-   Florian Rivoal (W3C Invited Expert)
-   Leonard Rosenthol (Adobe)
-   Robert Sanderson (J. Paul Getty Trust)
-   Jodi Schneider (University of Illinois at Urbana-Champaign)
-   Ben Schroeter (Pearson plc)
-   Tzviya Siegman (Wiley, chair)
-   Avneesh Singh (DAISY Consortium)
-   Adam Sisco (Earth Science Data Systems Program)
-   David Stroup (Pearson plc)
-   Mateus Teixeira (W. W. Norton & Company)
-   Jonathan Thurston (Pearson plc)
-   Yukio Tomikura (Kodansha, Publishers, Ltd.)
-   Ben Walters (Microsoft Corporation)
-   Daniel Weck (EDRLab, DAISY Consortium)
-   John Weise (University of Michigan)
-   Jason White (Educational Testing Service)
-   Richard Wright (EDRLab)
-   Jeff Xu (Rakuten, Inc.)
-   Evan Yamanishi (W. W. Norton & Company)
-   Maurice York (University of Michigan)
-   Junichi Yoshii (Kodansha, Publishers, Ltd.)
-   Benjamin Young (Wiley)
-   Mohamed ZERGAOUI (INNOVIMAX)

The Working Group would also like to thank the members of the [Digital Publishing Interest Group](https://www.w3.org/dpub/IG/) for all the hard work they did paving the road for this specification.

D. References<a href="#references" class="self-link"></a>
---------------------------------------------------------

### D.1 Normative references<a href="#normative-references" class="self-link"></a>

\[dom\]  
[DOM Standard](https://dom.spec.whatwg.org/). Anne van Kesteren. WHATWG. Living Standard. URL: <https://dom.spec.whatwg.org/>

\[dpub-aria-1.0\]  
[Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/). Matt Garrish; Tzviya Siegman; Markus Gylling; Shane McCarron. W3C. 14 December 2017. W3C Recommendation. URL: <https://www.w3.org/TR/dpub-aria-1.0/>

\[html\]  
[HTML Standard](https://html.spec.whatwg.org/multipage/). Anne van Kesteren; Domenic Denicola; Ian Hickson; Philip Jägenstedt; Simon Pieters. WHATWG. Living Standard. URL: <https://html.spec.whatwg.org/multipage/>

\[infra\]  
[Infra Standard](https://infra.spec.whatwg.org/). Anne van Kesteren; Domenic Denicola. WHATWG. Living Standard. URL: <https://infra.spec.whatwg.org/>

\[json-ld\]  
[JSON-LD 1.0](https://www.w3.org/TR/json-ld/). Manu Sporny; Gregg Kellogg; Markus Lanthaler. W3C. 16 January 2014. W3C Recommendation. URL: <https://www.w3.org/TR/json-ld/>

\[media-frags\]  
[Media Fragments URI 1.0 (basic)](https://www.w3.org/TR/media-frags/). Raphaël Troncy; Erik Mannens; Silvia Pfeiffer; Davy Van Deursen. W3C. 25 September 2012. W3C Recommendation. URL: <https://www.w3.org/TR/media-frags/>

\[pub-manifest\]  
[Publication Manifest](https://www.w3.org/TR/pub-manifest/). Matt Garrish; Ivan Herman. W3C. 10 November 2020. W3C Recommendation. URL: <https://www.w3.org/TR/pub-manifest/>

\[RFC2119\]  
[Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). S. Bradner. IETF. March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

\[RFC8174\]  
[Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words](https://tools.ietf.org/html/rfc8174). B. Leiba. IETF. May 2017. Best Current Practice. URL: <https://tools.ietf.org/html/rfc8174>

\[schema.org\]  
[Schema.org](https://schema.org). URL: <https://schema.org>

\[url\]  
[URL Standard](https://url.spec.whatwg.org/). Anne van Kesteren. WHATWG. Living Standard. URL: <https://url.spec.whatwg.org/>

### D.2 Informative references<a href="#informative-references" class="self-link"></a>

\[json-ld11\]  
[JSON-LD 1.1](https://www.w3.org/TR/json-ld11/). Gregg Kellogg; Pierre-Antoine Champin; Dave Longley. W3C. 7 May 2020. W3C Proposed Recommendation. URL: <https://www.w3.org/TR/json-ld11/>

\[json-schema\]  
[JSON Schema: core definitions and terminology](https://tools.ietf.org/html/draft-zyp-json-schema). K. Zyp. Internet Engineering Task Force (IETF). 31 January 2013. Internet-Draft. URL: <https://tools.ietf.org/html/draft-zyp-json-schema>

\[lpf\]  
[Lightweight Packaging Format (LPF)](https://w3c.github.io/lpf/). Laurent Le Meur. 2018-08-07. URL: <https://w3c.github.io/lpf/>

\[pwp-ucr\]  
[Web Publications Use Cases and Requirements](https://www.w3.org/TR/pwp-ucr/). Franco Alvarado; Joshua Pyle. W3C. 13 August 2019. W3C Note. URL: <https://www.w3.org/TR/pwp-ucr/>

[↑](#title)

<span class="caret"></span>

<a href="#dfn-publication-manifest" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dfn-file-name" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dfn-primary-entry-page" class="self-link">Permalink</a>

**Referenced in:**

-   [7. User Agent Processing of Machine-Processable Table of Contents](#ref-for-dfn-primary-entry-page-1)

<span class="caret"></span>

<a href="#dfn-publication-type" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dfn-creator" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dfn-duration" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dfn-default-reading-order" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.

<span class="caret"></span>

<a href="#dfn-resource-list" class="self-link">Permalink</a>

**Referenced in:**

-   Not referenced in this document.
