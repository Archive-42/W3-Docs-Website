[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

GRDDL Use Cases: Scenarios of extracting RDF data from XML documents
====================================================================

W3C Working Group Note 6 April 2007
-----------------------------------

This Version:  
<http://www.w3.org/TR/2007/NOTE-grddl-scenarios-20070406/>

Latest Version:  
<http://www.w3.org/TR/grddl-scenarios/>

Previous Version:  
<http://www.w3.org/TR/2006/WD-grddl-scenarios-20061002/>

Editors:  
[Fabien Gandon](http://www-sop.inria.fr/acacia/personnel/Fabien.Gandon/), [INRIA](http://www.inria.fr/index.en.html)

Authors and Contributors:  
see [Acknowledgments](#acks)

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2007 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

Abstract
--------

GRDDL is a mechanism for **G**leaning **R**esource **D**escriptions from **D**ialects of **L**anguages. The GRDDL specification introduces markup for declaring that an XML document includes gleanable data and for linking to an algorithm, typically represented in XSLT, for gleaning the RDF data from the document.

The markup includes a namespace-qualified attribute for use in general-purpose XML documents and a profile-qualified link relationship for use in valid XHTML documents. The GRDDL mechanism also allows an XML namespace document (or XHTML profile document) to declare that every document associated with that namespace (or profile) includes gleanable data and for linking to an algorithm for gleaning the data.

A corresponding [GRDDL specification](#GRDDL-Draft) provides complete technical details. A [GRDDL Primer](http://www.w3.org/TR/grddl-primer/) demonstrates the mechanism on XHTML documents which include widely-deployed dialects, more recently known as microformats.

Status of this Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

This document is a Working Group Note, developed by the [GRDDL Working Group](http://www.w3.org/2001/sw/grddl-wg/).

As of the publication of this Working Group Note the [GRDDL Working Group](http://www.w3.org/2001/sw/grddl-wg/) has completed work on this document. Changes from the previous Working Draft are indicated in a [log of changes](#changes). Comments on this document may be sent to <public-grddl-comments@w3.org> (with [public archive](http://lists.w3.org/Archives/Public/public-grddl-comments/)). Further discussion on this material may be sent to the Semantic Web Interest Group mailing list, <semantic-web@w3.org> (also with [public archive](http://lists.w3.org/Archives/Public/semantic-web/)).

Publication as a Working Group Note does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/). W3C maintains a [public list of any patent disclosures](http://www.w3.org/2004/01/pp-impl/39407/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

------------------------------------------------------------------------

Table of Contents
-----------------

-   [Introduction.](#introduction)
-   [Use case \#1 - Scheduling : Jane is trying to coordinate a meeting.](#scheduling_use_case)
-   [Use case \#2 - Health Care: Kayode wants to query clinical data.](#health_care_use_case)
-   [Use case \#3 - Web Aggregation: Stephan wants a synthetic review before buying a guitar.](#guitar_use_case)
-   [Use case \#4 - Querying sites and digital libraries: DC4Plus Corp. wants to automate the publication of its electronic documents.](#digital_libraries_use_case)
-   [Use case \#5 - Wikis and e-learning: The Technical University of Marcilly decided to use wikis to foster knowledge exchanges between lecturers and students.](#wiki_use_case)
-   [Use case \#6 - Web syndication : extracting form descriptions to push entries to Voltaire's blog.](#xform_use_case)
-   [Use case \#7 - Validated Documents: the OAI would like to be able to specify document licenses in the schema they share.](#xml_schema_use_case)
-   [Use case \#8 - Pulling data from the Web: Steffen wants to build a directory of the people he works with.](#html_tidy_use_case)
-   [Use case \#9 - Pushing a transformation: Oceanic Consortium wants to provide transformations for their files without altering them or their schema.](#header_use_case)
-   [Glossary](#glossary)
-   [References](#References)

Introduction: Data and Documents
--------------------------------

There are many dialects of XML in use by documents on the web. There are dialects of XHTML, XML and [RDF](#RDF04) that are used to represent everything from poetry to prose, purchase orders to invoices, spreadsheets to databases, schemas to scripts, and linked lists to ontologies. Some are formally defined and others allow for more freedom of interpretation. Recently, two progressive encoding techniques, RDFa and microformats, have emerged to overlay additional semantics onto valid XHTML documents. These techniques offer simple, open data formats built upon existing and widely adopted standards.

While this breadth of expression is quite liberating, inspiring new dialects to codify both common and customized meanings, it can prove to be a barrier to understanding across different domains or fields. How, for example, does software discover the author of a poem, a spreadsheet, or an ontology? And how can software determine whether any two of these authors in fact refer to the same person?

Any number of the XML documents on the web may contain data whose value would increase dramatically if they were accessible to systems which might not directly support such a wide variety of dialects but which do support RDF.

The Resource Description Framework[\[RDFC04\]](#RDFC04) provides a standard for making statements about resources in the form of a subject-predicate-object expression. One way to represent the fact "The Stand's author is Stephen King" in RDF would be as a triple whose subject is "The Stand," whose predicate is "has the author," and whose object is "Stephen King". The predicate, "has the author" expresses a relationship between the subject (The Stand) and the object (Stephen King). Using URIs to uniquely identify the book, the author and even the relationship would facilitate software design because not everyone knows Stephen King or even spells his name consistently. (see [RDF primer](#RDF04))

RDF includes an [abstract syntax](http://www.w3.org/TR/rdf-concepts/#section-Graph-syntax) and an XML concrete syntax (RDF/XML). Software tools that use RDFS can generally read data encoded as RDF/XML

GRDDL is a mechanism for **G**leaning **R**esource **D**escriptions from **D**ialects of **L**anguages; that is, for extracting RDF data from XML documents by way of transformation algorithms, typically represented in XSLT. The results of the transformations will usually be RDF/XML documents, although other RDF syntaxes may be used.

For example, Dublin Core metadata can be written in an HTML dialect[\[RFC2731\]](#RFC2731) that has a clear correspondence to an encoding in RDF/XML[\[DCRDF\]](#DCRDF). The following HTML and RDF excerpts illustrate the correspondence.

**HTML :**

    <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
         <title>Some Document</title>
         <meta name="DC.Subject"
            content="ADAM; Simple Search; Index+; prototype" />
         ...
       </head>
       ...
    </html>

**RDF/XML :**

    <rdf:RDF
       xmlns:dc="http://purl.org/dc/elements/1.1/"
       xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" >
       <rdf:Description rdf:about="">
         <dc:subject>ADAM; Simple Search; Index+; prototype</dc:subject>
       </rdf:Description>
    </rdf:RDF>

The transformation algorithm to convert between the different formats can be specified using XSLT, in this case [dc-extract.xsl](http://www.w3.org/2000/06/dc-extract/dc-extract.xsl).

This document collects a number of motivating use cases together with their goals and requirements for extracting [RDF](#RDFC04) data from XML documents. These use cases also illustrate how XML and XHTML documents can be decorated with [microformats](#microformats), [Embedded RDF](#EmbeddedRDF) or [RDFa](#RDFa) statements to support [GRDDL transformations](#GRDDLTransformation) in charge of extracting valuable data that can then be used to automate a variety of tasks.

The companion [GRDDL Working Draft](#GRDDL-Draft) is a concise technical specification of the GRDDL mechanism and its XML syntax. It specifies the GRDDL syntax to use in valid XHTML and well-formed XML documents, as well as how to encode GRDDL into namespaces and HTML profiles.

The companion document, the [GRDDL Primer Working Draft](#GRDDL-Primer-Draft), is a progressive tutorial on the GRDDL mechanism with illustrated examples taken from the GRDDL Use Cases Working Draft.

The seven use cases detailed below could be summarized as:

-   [Use case \#1](#scheduling_use_case): Jane is trying to coordinate a meeting with friends. She uses GRDDL to extract data from each of their calendar pages and combine it in a single model. She then writes a query to filter the events down to those dates when all of them are in the same city.
-   [Use case \#2](#health_care_use_case): Kayode uses a single-purpose XML vocabulary as the main representation format for a computer-based patient record. He uses GRDDL to be able to query these records both in their XML vocabulary and as RDF, without managing a dual representation.
-   [Use case \#3](#guitar_use_case): Stephan wishes to buy a guitar and visits a site offering a review service. He uses GRDDL to aggregate reviews and profiles of the reviewers in order to select the reviews he can trust.
-   [Use case \#4](#digital_libraries_use_case): Adeline designs a system to allow her company to streamline the publication of Technical Reports. The system relies on shared templates for publishing documents and a GRDDL transformation for building an up-to-date RDF index used to create an authoritative repository.
-   [Use case \#5](#wiki_use_case): The Technical University of Marcilly decides to use a wiki with metadata embedded in its pages to tag, structure, navigate and query the resources of the wiki. GRDDL is used to extract these metadata as RDF to feed the different tools of the system.
-   [Use case \#6](#xform_use_case): Voltaire has setup a weblog engine that utilizes XForms for editing entries. He also provides a GRDDL transformation that extracts an RDF description of the XForms that other client applications can use to update existing entries using the identified service URIs, and perform other such services.
-   [Use case \#7](#xml_schema_use_case): The Open Archives Initiative (OAI) publishes an XML schema that universities can use to publish their archived documents. This schema also identifies a GRDDL transform to apply to all its instance documents in order to extract their Creative Commons license.
-   [Use case \#8](#html_tidy_use_case): Whenever he gets in touch with someone, Steffen starts a simple script that aims at gathering as much metadata about this person as possible. Because most of these web pages are not even valid HTML, the script calls an HTML-tidying tool and if the tidying is complex some of the metadata is likely to be no longer coherent.
-   [Use case \#9](#header_use_case): Oceanic wishes to also publish RDF descriptions of their parts reusing the AirPartML documents produced for an arrangement with a consortium of airlines. The AirPartML schemas are strict and therefore Oceanic cannot alter their XML documents to specify a transformation. Yet using the HTTP Headers, Oceanic can specify link and profiles for transformation when serving their AirPartML documents.

This collection of use cases only considers cases where the initial sources are well-formed XML documents. Other kinds of sources are outside the scope of the GRDDL working group.

Use case <span id="use_case_1">\#1</span> - Scheduling : Jane is trying to coordinate a meeting.
------------------------------------------------------------------------------------------------

Jane is trying to coordinate a meeting with her friends Robin, David and Kate. They each live in separate cities but often bump into each other at different conferences throughout the year. Jane wants to find a time when all of her friends are in the same city.

-   Robin publishes his schedule on his home page using the [hCalendar](http://microformats.org/wiki/hcalendar) [microformat](#microformats).
-   David publishes his in [Embedded RDF](#EmbeddedRDF) using some RDF calendar properties.
-   Kate uses a blog engine that encodes her diary as [RDFa](#RDFa).
-   Jane uses an online calendaring service that publishes an [RSS 1.0](http://purl.org/rss/1.0/spec) feed of her schedule.

Despite their different formats, the calendars of all four friends can be used as [GRDDL source documents](#SourceDocument) and converted to RDF. Once expressed as RDF the data can be merged and queried using tools such as the [SPARQL](#SPARQL) query language.

![Using GRDDL for extracting calendar data](Calendar.png "Using GRDDL for extracting calendar data")

Jane uses a [GRDDL-aware agent](#GRDDLAwareAgent) to automatically extract data from each page, load this data in an RDF store and combine it in a single model. She then writes a query to filter the events down to those dates when all four friends are in the same city.

Jane is delighted to find that all four of them will be at conferences in LA at the beginning of September and she immediately starts looking for restaurants to book for their night out.

Browsing the calendar of her friends, Jane noticed various conferences, talks, and other gatherings of social groups in her area. These groups publish their calendars in various HTML-based formats: microformats, eRDF, RDFa, or some home-grown ways of expressing calendar information.

These calendars are source documents and thus Jane could easily add all of these events to her own calendar. However, Jane does not want to add all these events to her calendar. She wants to pick and choose which events to attend. She wants to browse this list of events and each time she finds an event she is interested in, she wants to be able to select it and copy-paste it to her calendar.

To enable this copy-paste, Jane's browser includes a GRDDL-aware agent and supports a default RDF-in-HTML embedding scheme called RDFa. The GRDDL transformation specified in the page indicates how to transform this XHTML into XHTML+RDFa, while preserving the style and layout of the page.

![Using GRDDL for selecting an item](select_item.png "Using GRDDL for selecting an item")

Thus, Jane's RDFa-aware browser can perform the transform even before rendering the XHTML. The rendered XHTML+RDFa provides a copy- paste functionality via, right-clicking on an event right in the rendered XHTML+RDFa.

**See also:** [microformat](#microformats), [Embedded RDF](#EmbeddedRDF), [RDFa](#RDFa), [RSS 1.0](http://purl.org/rss/1.0/spec).

Use case <span id="use_case_2">\#2</span> - Health Care: Kayode wants to query clinical data.
---------------------------------------------------------------------------------------------

![Using GRDDL for extracting clinical data](clinical.png "Using GRDDL for extracting clinical data") Kayode, a developer for a clinical research data management system, uses XML as the main representation format for their computer-based patient record. He currently edits the XML remotely via forms and submits the XML document to a unique URI for each such record over HTTP. But elsewhere Kayode has found RDF queries useful for investigative querying.

He wants to use a content management system which includes a mechanism to automatically replicate an XML document into equivalent, named RDF graphs for persistence in synchrony with any changes to the document.

The expense of dual representation as single-purpose XML vocabulary and RDF includes space and synchrony problems, but the primary value is being able to query both as XML and as RDF. The corresponding XML documents can be transformed into other non-RDF formats, evaluated by XPath and XPointer expressions, cross-linked by XLink or XInclude, and structurally validated by RELAX NG (or XML Schema). With the RDF query facility Kayode can ask speculative questions using standard healthcare ontologies for patient records, such as the [HL7 OWL ontology](http://esw.w3.org/topic/HCLS/ACPPTaskForce?action=AttachFile&do=get&target=RIMV3OWL.zip).

Kayode realizes a [GRDDL](#GRDDL-Draft) approach can alleviate the expense of maintaining a dual representation by allowing a computer-based patient record or any XML-based collection of clinical research data to be queried semantically by associating a GRDDL profile to the specific XML vocabulary.

Using RDF helps manage research projects assigned to residents. Kayode finds RDF especially helpful while trying to determine an initial search criteria for a patient population relevant to a particular study. Each study has a set of classifications specific to the study that they express in an ontology or using rules.

Kayode designs a web-based user interface that works with a [GRDDL-aware agent](#GRDDLAwareAgent) which picks computer-based patient records from a remote server. Each is a [source document](#SourceDocument) associated with transforms that extract clinical data as RDF expressed in a universally supported vocabulary for a computer-based patient record.

The resident physicians then ask speculative questions of the resulting RDF graph or apply the study-specific rules on the resulting RDF to classify the data according to his domain of interest, such as specific diagnoses and pathological observations.

For Kayode, having an RDF representation of the clinical data provides him advantages over just using a single-purpose XML vocabulary, in particular an additional level of interpretation and ability to integrate data from diverse sources. The inherent difficulties of using multiple XML vocabularies over domains such as clinical data make the mapping to a unified ontology even more valuable.

**See also:** [GALEN / Open GALEN](http://www.opengalen.org/), [4Suite](http://4suite.org), [HCLSIG HL7 OWL Ontology](http://esw.w3.org/topic/HCLS/ACPPTaskForce?action=AttachFile&do=get&target=RIMV3OWL.zip)

Use case <span id="use_case_3">\#3</span> - Web Aggregation: Stephan wants a synthetic review before buying a guitar.
---------------------------------------------------------------------------------------------------------------------

![Using GRDDL for hReview extraction](review.png "Using GRDDL for hReview extraction") Stephan wishes to buy a guitar, so he decides to check reviews. There are various special interest publications online which feature musical instrument reviews. There are also blogs which contain reviews by individuals. Among the reviewers there may be friends of Stephan, people whose opinion Stephan values (e.g. well-known musicians and people whose reviews Stephan has found useful in the past). There may also be reviews purposively planted by instrument manufacturers which offer very biased views.

Stephan visits a site offering a review service and enters his preference for guitar reviews which gave a high rating for the instrument. This initial request is answered with a list of all the relevant review titles/summaries together with information about the reviewers.

From this list Stephan chooses only the reviewers he trusts, and on submitting these preferences is finally presented with a set of full reviews which match his criteria.

Reviews published using [hReview](http://microformats.org/wiki/hreview) [microformats](#microformats) can be discovered using existing search services. These [source documents](#SourceDocument) can be consumed by a [GRDDL-aware agent](#GRDDLAwareAgent) to extract the RDF which is then aggregated together in a store. Information about the reviewers can also be aggregated from various sources including hCard and XFN microformats and autodiscovered FOAF profiles possibly harvested through links in Stephan's own profile. The filtering may be achieved by running [SPARQL](#SPARQL) queries against the aggregated data, presented to the user through regular HTML form interfaces.

**See also:** [hReview](http://microformats.org/wiki/hreview), [hCard](http://microformats.org/wiki/hcard), [XFN](http://gmpg.org/xfn/).

Use case <span id="use_case_4">\#4</span> - Querying sites and digital libraries: DC4Plus Corp. wants to automate the publication of its electronic documents.
--------------------------------------------------------------------------------------------------------------------------------------------------------------

The Company DC4Plus uses its web site to publish its catalogue of products and services as well as a number of digital documents both on their public web site (white papers, user guides and technical manuals of products and brochures) and on their intranet (internal reports and administrative forms). Product after product, DC4Plus is growing a digital library as part of its web site.

Adeline is an IT manager at DC4Plus. She is concerned by the tension between, on one hand, the natural heterogeneity and distribution of all these electronic documents and, on the other hand, the need to have an integrated and unified view of all these productions. She believes there is a need to automate the detection, indexing and search capabilities for these documents. Moreover several corporate documents follow a standard process before being published and there is a growing demand from users and managers to be able to automate this process and follow the status of each document.

![Using GRDDL for digital libraries](w3clibrary.png "Using GRDDL for digital libraries") Adeline first focuses on the Technical Reports published by the different divisions of DC4Plus. These reports are published following a well-defined process. She proposes a system that relies on Semantic Web technologies to allow her company to streamline the publication paper trail of Technical Reports, to maintain an RDF-formalized index of these specifications and to create a number of tools using this newly available data.

Adeline's implementation of this vision at DC4Plus can be given in five steps:

1.  XHTML templates including RDFa annotations are proposed for every type of document; users edit these templates to create new documents without even noticing that some parts are annotated in RDFa and thus they produce [source documents](#SourceDocument).
2.  one or more [GRDDL transformations](#GRDDLTransformation) are generated for these templates; the embedded annotations are used to identify the elements to extract (title, author, editor, status, related product, department) and make the extraction resistant to changes of structure in the document.
3.  the web site of DC4Plus is crawled on a regular basis and the [GRDDL transformations](#GRDDLTransformation) are used by a [GRDDL-aware agent](#GRDDLAwareAgent) to feed an RDF store containing all the annotations of the documents.
4.  several new pages are added to the site to generate automatic indexes from the RDF store showing different views of the documents (a catalogue in alphabetic order, a list of documents by status, a list of publications of a given department)
5.  more complex tools are developed to assist both internal processes (document workflow monitoring tools, activity reporting tools, document review management system) and external processes (a SPARQL web service for partners to query the catalogue, an RSS feed to notify new publications)

This system relies on shared templates for publishing documents and including RDFa annotations to mark important data. A [GRDDL-aware agent](#GRDDLAwareAgent) extracts this metadata as RDF. By crawling the published reports and applying the associated [GRDDL transformations](#GRDDLTransformation) to them, a complete and up-to-date RDF index is built from resources distributed over the organization's website. This RDF index is then used to create a central yet flexible authoritative repository.

Adeline believes that this scenario can be generalized to any organization interested in maintaining a portal to a digital library with customized indexes, dedicated search forms, navigation widgets. In particular she appreciates that in such an architecture the simple fact that the XHTML documents put online following official templates allow [GRDDL-aware agents](#GRDDLAwareAgent) to extract corresponding RDF annotations that can then be used to generate portals, feed workflow engines and run queries directly against the site.

**See also:** [Automating the publication of Technical Reports](http://www.w3.org/2002/01/tr-automation/)

Use case <span id="use_case_5">\#5</span> - Wikis and e-learning: The Technical University of Marcilly decided to use wikis to foster knowledge exchanges between lecturers and students.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The Technical University of Marcilly (TMU) decided to use [wikis](http://en.wikipedia.org/wiki/Wiki) to foster knowledge exchanges between lecturers and students. They tested several wikis over the years and they want to experiment with novel ways of structuring the wiki to improve navigation and retrieval and they also want to make it easier to reuse [learning objects](http://en.wikipedia.org/wiki/Learning_Object) in different contexts. Ideally TMU wants the information structuring the wiki to be:

1.  easy to add, edit and enrich. All this should be done at the same time a user edits a page to avoid multiplying interfaces and manipulations.
2.  explicit and understandable to machines so that the wiki engine can rely on it to propose related pages, to perform precise search, to generate browsing interfaces, to build dynamic indexes based on customized queries and to provide customized sorting and filtering for them.
3.  accessible to other applications to allow integration with other information systems, links or migration to other wiki engines, extension of its functionalities.

In this context TMU uses metadata embedded in the wikipages to:

-   store the results of social tagging on the pages: tags suggested by users are inserted in the page itself and may reuse data from the page (e.g. the authors name) or annotate specific portions of the page (e.g. type a paragraph as a definition, categorize an image);
-   generate navigation widgets: lists of forward and back links to navigate the wiki, lists of similar pages, list of all pages tagged with a specific topic, view of the clusters of pages.
-   enrich them with schemata to restructure the wiki (declare equivalent tags, broader/narrower tags, add synonymous labels to existing tags) and enrich the navigation with these links;
-   include queries on the metadata in the wikipages to dynamically generate tailored indexes for the different departments, the different years, the different topics.
-   import learning objects edited in classical word processing application by using the styles of the different sections to extract annotations for each section and recompose new documents (e.g. transform a handout into a web site for practical sessions).

Let us consider the case of Michel, a lecturer in engines and thermodynamics. He used the wiki to publish the handouts of his course. He initially tagged each handout with the main concepts it introduces (e.g. "RenewableEnergies", "Ethanol", "Diesel"). In addition, Michel automatically typed each section of the document using predefined styles (e.g. definitions, formula, example.). The next practical session will involve knowledge on classical Diesel engines and Ethanol-based engines. In order to generate a mnemonic card for this session Michel runs a query to extract definitions and formulas of the courses tagged with "Diesel" or "Ethanol". He also uses these tags to generate dynamic "see also" sections at the end of his sections suggesting other sections to read.

Students edit the online handouts, to add pointers, to insert comments on parts they found difficult to understand,and to recall pieces of previous courses useful for understanding a new course. Students also tagged the pages with their own tags to organize their reading and bookmark important parts for them; they use tags to create transversal thematic tracks (e.g. "LiquidFlow"), to give feedback on the content (e.g. "Difficult"), to prioritise reading (e.g. "NiceToKnow", "Vital"). These tags allow them to have transversal navigation and reorganize the content depending on the task they are doing (e.g. preparing an exam, writing a report, running an experiment). These tags are also used by Michel to evaluate the understanding and the shortcomings of his course.

Finally the mass of the course material and tags is such that it needs to be reorganised. Using the tag editor Michel groups "Ethanol" and "Methanol" as sub tags of a new tag he calls "Alcohol". Doing so the pages tagged with "Ethanol" or "Methanol" are grouped and accessible through "Alcohol". He repeats this with other tags (e.g. "Alcohol" and "Hydrogen" becomes sub- tags of "NewEngineEnergy"). This reorganizes the wiki seamlessly e.g. suggestion of navigation in the pages automatically propose narrower, broader and brother tags thus when viewing a page tagged with "Ethanol", the system suggest other pages tagged with "Methanol". Later when a student posts his report on an engine using "CopraOil", his new tag can be placed under the existing one "NewEngineEnergy"; he or anyone else can do it and the result will immediately benefit the whole community of the users. Using these tags and their organization, thematic indexes are dynamically generated for the materials of the course and automatically updated.

From the technical stand point, TMU designed a wiki that stores its pages directly in XHTML and [RDF](#RDFC04) annotations are used to represent the wiki structure and annotate the wikipages and the objects it contains (images, uploaded files.). The RDF structure allows refactoring the wiki structure by editing the RDF annotations and the [RDFS](#RDFS) schemas they are based on. RDF annotations are embedded in the wiki pages themselves using the [RDFa](#RDFa) and microformats. Some of the learning objects can be saved in XML formats and an XSLT stylesheet exploits the styles used for the session to tag the different parts (e.g. definition, exercise, example) and these annotation can then be used to generate new views on this resource (e.g. list of definition, hypertext support for practical sessions.).

![Using RDFa and GRDDL in wikis](wiki.png "Using RDFa and GRDDL in wikis")

The embedded RDF is extracted by a [GRDDL-aware agent](#GRDDLAwareAgent) using [GRDDL transformations](#GRDDLTransformation) available online as [XSLT](http://www.w3.org/TR/xslt) stylesheets to provide semantic annotations directly to the application that needs to extract the embedded metadata:

-   if someone sends a wiki page to someone else the annotations follow it and can be processed by applications of the recipient;
-   if another application crawls (e.g. the crawler of a search engine) the wiki site it can extract the metadata and reuse them just by applying the same [GRDDL transformation](#GRDDLTransformation);
-   if a new community of practice of TMU (e.g. the accountants) wants a dedicated index of its working document, it can be embedding the corresponding SPARQL query in a wikipage: the search engine fed with the result documents solves this query and the result is rendered by an XSLT stylesheet and embedded in the page;
-   if the wiki engine is to be changed, the migration transformations can exploit the embedded metadata;
-   if a division wants to setup access rules to some documents, they can be based on these metadata merged with others (e.g. only lecturer can access document tagged as "tests").
-   if some users are interested in being informed on any new information on a topic (e.g. chemists want to be informed on any new norm for the environment) they can use notification systems monitoring the wiki by querying its metadata (e.g. recurrent SPARQL queries on pages tagged with "environment")

**See also:** [Sweet Wiki](http://www-sop.inria.fr/acacia/soft/sweetwiki.html), [Semantic Wikis](http://www.semwiki.org/)

Use case <span id="use_case_6">\#6</span> - Web syndication : extracting form descriptions to push entries to Voltaire's blog.
------------------------------------------------------------------------------------------------------------------------------

Voltaire's blog is pretty popular and encompasses many major areas of interest, one of which is bird watching. Voltaire has so many areas of interests and spends so much time watching birds that he doesn't want to surf the net and find each and every site he might want to syndicate. Rather than 'manually' subscribing to third-party blogs that are appropriate to the themes he covers, he wants to reverse the subscription model to be push-based i.e. people who want their blogs to be included can push the appropriate entries to his blog; his blog becomes somewhat of a magnet for similar entries of interest.

Voltaire has setup a weblog engine that utilizes [XForms](http://www.w3.org/TR/xforms/) for editing entries remotely using the [Atom Publishing Protocol](http://www.ietf.org/html.charters/atompub-charter.html). Voltaire has found the use of [XForms](http://www.w3.org/TR/xforms/) for authoring fragments of Atom quite useful for a variety of reasons. In particular, the Atom Publishing Protocol uses HTTP and a single-purpose XML vocabulary as its primary remote messaging mechanism, which allows Voltaire to easily author various XForm documents that use XForm [submission](http://www.w3.org/TR/xforms/slice3.html#structure-model-submission) elements to dispatch operations on web resources.

As a result, the XForms for dispatching these operations each contain a rather rich set of information about transport-level services in the form of service URIs, media-types and HTTP methods. These are completely encapsulated in an XForms submission element. It so happens that there is an RDF vocabulary for expressing transport metadata called RDF Forms.

Somewhere else on the planet, the professional ornithologist Johan Bos, who recently spotted a red kite (Milvus milvus) far from their breeding ground in central Wales, is planning to post blog entries about his observations. To make his results visible he wants his entries to be included in Voltaire's blog.

![Using GRDDL for XForm extraction and Atom clients](xform.png "Using GRDDL for XForm extraction and Atom clients")

Voltaire's site provides a general [GRDDL transformation](#GRDDLTransformation) that extracts an RDF Form graph from the XForms submission elements employed in the various web forms for editing, deleting, and updating Atom entries on his weblog. Such a transformation can uniformly extract an RDF description of the transport mechanisms for a software agent to interpret. Johan's client can automatically retrieve an Introspection Document (via the Atom Publishing Protocol), update existing entries using the identified service URIs, and perform other such services.

Thus Johan's client relies on a [GRDDL-aware agent](#GRDDLAwareAgent) to periodically extract the service URIs, transform the content at these URIs to Atom/OWL and query the resulting RDF to determine if the topics match. Doing so, he will replicate his entries at the matching URIs by POSTing them there.

Voltaire does not need to manage the subscriptions, all he might want to do is perhaps grant accounts for Johan for HTTP-level authentication (as a deterrent for spam - as you can imagine, reversing the subscription model in this way opens up Voltaire's system for lots of spam).

**See also:** [XForms 1.1 specification](http://www.w3.org/TR/xforms/), [Atom Publishing Format and Procotol (atompub)](http://www.ietf.org/html.charters/atompub-charter.html).

Use case <span id="use_case_7">\#7</span> - Validated Documents: the OAI would like to be able to specify document licenses in the schema they share.
-----------------------------------------------------------------------------------------------------------------------------------------------------

The Open Archives Initiative (OAI) publishes an XML schema that universities can use to publish their archived documents. They include [guidelines](http://www.openarchives.org/OAI/2.0/guidelines-rights.htm) for expressing the rights of these documents, including the possibility of referencing a license, like a [creative commons license](http://creativecommons.org/).

More than 800 universities implement this schema. Creative Commons would like to deploy tools, like the [MozCC browser extension](http://wiki.creativecommons.org/MozCC) which provides a convenient way to examine licenses embedded in web pages and interpret them.

It is unreasonable to expect to interpret everyone's favorite XML schema, yet communities like the OAI would like to be able to include licensing information in their XML shema.

On the other hand, Creative Commons would like to be able to make a generic recommendation to anyone with XML instance documents, allowing them to do what they want with their XML schemata, as long as they include a transformation of the instance documents to RDF.

![Using GRDDL with an XML Schema to indicate the profile and transformations](schema_oai.png "Using GRDDL with an XML Schema to indicate the profile and transformations")

Since the XML instance documents are often distributed, as in the OAI case, the XML schema itself could embed RDF descriptions identifying a transform to [apply](http://www.w3.org/2004/01/rdxh/spec#ns-bind) to all its instance documents. So doing, for each source document, the transformation is indirectly referenced by the XML Schema it follows.

The XML schema is served from the namespace location and is a source document which includes descriptions associating a GRDDL transform with its instances. Thus it serves a dual purpose for its instances: (1) validation and (2) identifying transforms to glean meaning.

**See also:** [Open Archives Initiative](http://www.openarchives.org/), [Creative Commons](http://creativecommons.org/), [MozCC](http://wiki.creativecommons.org/MozCC).

Use case <span id="use_case_8">\#8</span> - Pulling Data from the Web: Steffen wants to build a directory of the people he works with.
--------------------------------------------------------------------------------------------------------------------------------------

Steffen is interested in maintaining a directory of people he works with. Whenever he gets in touch with someone, he starts a simple script that aims at gathering as much metadata about this person as possible. The script first calls a search engine with keywords he has chosen e.g. "Jean-Paul Haton LORIA". The script receives a list of URL of web pages considered relevant by the search engine.

Because most of these web pages are non-XHTML HTML and because most of the time they are not even valid HTML, the script first checks if each page is a well-formed XML document. If the page is indeed a well-formed XML document the script just calls a GRDDL-aware agent on this page to extract metadata it may contain.

If the page is not a well-formed XML document the script proceeds with calling an HTML-tidying tool that retrieves the page, cleans the page the best it can, and so outputs an XHTML version. The script saves these XHTML versions locally making sure that the base URI of each local copy is specified and if not the script sets it to the URI of the initial HTML page. Finally the script calls a GRDDL agent on each local copy to extract the metadata they may contain.

![Using GRDDL with tidied HTML](tidy.png "Using GRDDL with tidied HTML")

Using his script Steffen found that several cases occur:

-   If the tidying is simple (e.g. a &lt;BR&gt; is replaced by a &lt;BR/&gt;) then a page can be tidied in XHTML and GRDDL successfully.
-   If the tidying is complex (e.g. the page was heavily restructured) some of the metadata is likely to be no longer coherent because the transformation relied on specific positions of elements in the document that are not the same after the tidying process converted HTML to XHTML. For example, the transformation could rely on absolute XPaths and a &lt;UL&gt; was added around a list of &lt;LI&gt;. therefore rendering all the XPaths invalid and so making the transformation unable to convert information in the source document to RDF.
-   If a page used extensions of HTML that the tidying tool did not recognized (e.g. the "link" element used outside the "head" section in RDFa), these extensions were removed during the cleaning-up and thus lost for the GRDDL transformation.

While one can use GRDDL to extract RDF from non-XHTML HTML source documents, unless there is good reason otherwise, the authors of content should deploy GRDDL with valid XML such as XHTML. Simply put, it is easier for authors to explicitly license a transformation from XML documents where there is no dependency on any other algorithms (such as a tidying algorithm). Although tidying of source documents can be part of a pragmatic approach to gathering data, the consumer of the RDF can only trust GRDDL transformations when they have been explicitly licensed by the author of the documents.

**See also:** [JTidy](http://jtidy.sourceforge.net/), [TagSoup](http://home.ccil.org/~cowan/XML/tagsoup/).

Use case <span id="use_case_9">\#9</span> - Pushing a transformation: Oceanic Consortium wants to provide transformations for their files without altering them or their schema.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="small">This use-case uses a feature that is not, and will not be, included in the GRDDL Working Draft. It should be addressable in the future using the mechanims described in the [HTTP Header Linking Draft](http://www.mnot.net/drafts/draft-nottingham-http-link-header-00.txt) once that is accepted by the IETF as an RFC.</span>

Oceanic is part of a consortium of airlines that have a group arrangement for the shared supply and use of aircraft spares. The availability and nature of parts at any location are described by AirPartML, an internationally-agreed XML dialect constrained by a series of detailed XML Schema. Each member of the consortium publishes the availability of their spares on the web using AirPartML. These descriptions can subsequently be searched and retrieved by other consortium members when seeking parts for maintenance. The protocol for use of the descriptions requires invalid documents to be rejected. Oceanic wishes to also publish RDF descriptions of their parts and would prefer to reuse the AirPartML documents which are produced by systems that have undergone exhaustive testing for correctness. There is no provision in the existing schemas for extension elements and changing the schemas to accommodate RDF would require an extended international standardisation effort, likely to take many years. This means they cannot alter their XML documents to use GRDDL.

![Using GRDDL with profiles and transformations linked from the HTTP header.](header.png "Using GRDDL with profiles and transformations linked from the HTTP header.")

Using the ability of [HTTP Header Linking Draft](http://www.mnot.net/drafts/draft-nottingham-http-link-header-00.txt) to specify *Link* and *Profile*s for GRDDL transformation in HTTP Headers, Oceanic Consortium can serve RDF via GRDDL without altering their XML documents.

**See also:** [HTTP Header Linking](http://www.mnot.net/drafts/draft-nottingham-http-link-header-00.txt)

------------------------------------------------------------------------

Glossary
--------

Embedded RDF  
a subset of RDF that can be embedded into XHTML or HTML by using common idioms and attributes.

<span id="GRDDLAwareAgent"></span>GRDDL-aware agent  
a GRDDL-aware agent isa software agent able to identify the [GRDDL transformations](#GRDDLTransformation) specified in a [source document](#SourceDocument) and run them to extract RDF.

<span id="SourceDocument"></span>Source Document  
an XML document which references at least one [GRDDL transformation](#GRDDLTransformation) for a [GRDDL-aware agent](#GRDDLAwareAgent) to use to extract RDF from it.

<span id="GRDDLTransformation"></span>GRDDL Transformation  
a GRDDL transformation is an algorithm which, when applied to a compliant [source document](#SourceDocument), allows a [GRDDL-aware agent](#GRDDLAwareAgent) to extract RDF from this document.

Microformats  
a set of simple, open data formats built upon existing and widely adopted standards.

RDFa  
a syntax for expressing RDF metadata in XHTML.

<span id="ResultDocument"></span>Result Document  
a document obtained by applying a [GRDDL transformation](#GRDDLTransformation) to a source document.

SPARQL  
the SPARQL Protocol And RDF Query Language for accessing RDF stores.

------------------------------------------------------------------------

Acknowledgements
----------------

The editor greatfully acknowledges the contributions of the following Working Group members:

-   [Ben Adida](http://ben.adida.net/), Creative Commons
-   [Danny Ayers](http://dannyayers.com/), Independent
-   [Dan Connolly](http://www.w3.org/People/Connolly/), W3C
-   [Ian Davis](http://purl.org/NET/iand), Talis
-   [Harry Halpin](http://www.ibiblio.org/hhalpin/), University of Edinburgh
-   [Murray Maloney](http://www.muzmo.com/), Muzmo Inc.
-   [Chimezie Ogbuji](http://copia.ogbuji.net/), Cleveland Clinic Foundation

------------------------------------------------------------------------

<span id="References"></span>References
---------------------------------------

<span id="AutomatingTR"></span>\[Automating TR\]  
*[Automating the publication of Technical Reports](http://www.w3.org/2002/01/tr-automation/)*, Dominique Hazaël-Massieux, 2006/01/05 20:34:13, http://www.w3.org/2002/01/tr-automation/.

<span id="DCRDF"></span>\[DCRDF\]  
*[Expressing Simple Dublin Core in RDF/XML](http://dublincore.org/documents/dcmes-xml/)*, Eric Miller, Dan Brickley, 2002-07-31, http://dublincore.org/documents/dcmes-xml/.

<span id="EmbeddedRDF"></span>\[Embedded RDF\]  
*[Embedded RDF](http://research.talis.com/2005/erdf/)* , 27 August, 2006 at 03:19 PM, http://research.talis.com/2005/erdf/.

<span id="GRDDL-Draft"></span>\[GRDDL Draft\]  
[Gleaning Resource Descriptions from Dialects of Languages (GRDDL)](http://www.w3.org/TR/2006/WD-grddl-20061024/), Dan Connolly, W3C Working Draft 24 October 2006, [Latest version](http://www.w3.org/TR/grddl/) available at http://www.w3.org/TR/grddl/.

<span id="GRDDL-Primer-Draft"></span>\[GRDDL Primer Draft\]  
[GRDDL Primer](http://www.w3.org/TR/2006/WD-grddl-primer-20061002/), Ian Davis, W3C Working Draft 2 October 2006, [Latest version](http://www.w3.org/TR/grddl-primer/) available at http://www.w3.org/TR/grddl-primer/.

<span id="microformats"></span>\[Microformats\]  
*[Microformat](http://microformats.org/)*, 2006/08/30 11:05:31, http://microformats.org/ .

<span id="ref-OWL-Overview"></span>\[OWL Overview\]  
*[OWL Web Ontology Language Overview](http://www.w3.org/TR/2004/REC-owl-features-20040210/)*, Deborah L. McGuinness and Frank van Harmelen, Editors, W3C Recommendation, 10 February 2004, http://www.w3.org/TR/2004/REC-owl-features-20040210/. [Latest version](http://www.w3.org/TR/owl-features/) available at http://www.w3.org/TR/owl-features/.

<span id="RDF04">\[RDF04\]</span>  
[RDF Primer](http://www.w3.org/TR/2004/REC-rdf-primer-20040210/) , Frank Manola, Eric Miller, Editors, W3C Recommendation, 10 February 2004, http://www.w3.org/TR/2004/REC-rdf-primer-20040210/. [Latest version](http://www.w3.org/TR/rdf-primer/) available at http://www.w3.org/TR/rdf-primer/ .

<span id="RDFC04">\[RDFC04\]</span>  
[Resource Description Framework (RDF): Concepts and Abstract Syntax](http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/) , G. Klyne, J. J. Carroll, Editors, W3C Recommendation, 10 February 2004, http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/ . [Latest version](http://www.w3.org/TR/rdf-concepts/) available at http://www.w3.org/TR/rdf-concepts/ .

<span id="RDFa">\[RDFa\]</span>  
[RDFa Primer 1.0](http://www.w3.org/TR/2006/WD-xhtml-rdfa-primer-20060516/) 16 May 2006, Ben Adida, Mark Birbeck. [Latest version](http://www.w3.org/TR/xhtml-rdfa-primer/) available at `http://www.w3.org/TR/xhtml-rdfa-primer/`

<span id="RDFS">\[RDFS\]</span>  
[RDF Vocabulary Description Language 1.0: RDF Schema](http://www.w3.org/TR/2004/REC-rdf-schema-20040210/), Dan Brickley and R.V. Guha, Editors. W3C Recommendation, 10 February 2004,  
http://www.w3.org/TR/2004/REC-rdf-schema-20040210/ .  
[Latest version](http://www.w3.org/TR/rdf-schema/) available at http://www.w3.org/TR/rdf-schema/.

<span id="RFC2731">\[RFC2731\]</span>  
[RFC2731: Encoding Dublin Core Metadata in HTML](http://www.ietf.org/rfc/rfc2731.txt), J. Kunze, December 1999, http://www.ietf.org/rfc/rfc2731.txt.

<span id="SPARQL">\[SPARQL\]</span>  
[SPARQL Query Language for RDF](http://www.w3.org/TR/2006/CR-rdf-sparql-query-20060406/), Eric Prud'hommeaux and Andy Seaborne, Editors. W3C Candidate Recommendation 6 April 2006,  
http://www.w3.org/TR/2006/CR-rdf-sparql-query-20060406/ .  
[Latest version](http://www.w3.org/TR/rdf-sparql-query/) available at http://www.w3.org/TR/rdf-sparql-query/.

------------------------------------------------------------------------

### Change Log

Changes since the [2 October 2006 Working Draft](http://www.w3.org/TR/2006/WD-grddl-scenarios-20061002/%20) include:

-   updated introduction
-   added scenarios for Pulling data from the web and HTTP Header
-   added schemas to OAI, Pulling data and Header use cases

------------------------------------------------------------------------

This document is a product of the [GRDDL Working Group](http://www.w3.org/2001/sw/grddl-wg/).

------------------------------------------------------------------------

[<img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" width="88" height="31" />](http://validator.w3.org/check?uri=referer) [![Valid CSS!](http://jigsaw.w3.org/css-validator/images/vcss)](http://jigsaw.w3.org/css-validator/)
