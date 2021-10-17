<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

Data Catalog Vocabulary (DCAT) - Version 2
==========================================

W3C Recommendation 04 February 2020
-----------------------------------

This version:  
<a href="https://www.w3.org/TR/2020/REC-vocab-dcat-2-20200204/" class="u-url">https://www.w3.org/TR/2020/REC-vocab-dcat-2-20200204/</a>

Latest published version:  
<https://www.w3.org/TR/vocab-dcat-2/>

Latest editor's draft:  
<https://w3c.github.io/dxwg/dcat/>

Implementation report:  
<https://w3c.github.io/dxwg/dcat-implementation-report/>

Previous version:  
<https://www.w3.org/TR/2019/PR-vocab-dcat-2-20191119/>

Previous Recommendation:  
<https://www.w3.org/TR/2014/REC-vocab-dcat-20140116/>

Editors:  
<a href="http://www.imati.cnr.it/joomla/index.php/people/8-curricula/178-riccardo-albertoni" class="u-url url p-name fn">Riccardo Albertoni</a>

(<a href="https://www.cnr.it/" class="p-org org h-org h-card">CNR - Consiglio Nazionale delle Ricerche, Italy</a>)

<span class="p-name fn">David Browning</span> (<a href="https://www.refinitiv.com" class="p-org org h-org h-card">Refinitiv</a>)

<a href="http://people.csiro.au/Simon-Cox" class="u-url url p-name fn">Simon Cox</a>

(<a href="https://www.csiro.au/" class="p-org org h-org h-card">CSIRO</a>)

<a href="https://www.scd.stfc.ac.uk/Pages/Alejandra-Gonzalez-Beltran.aspx" class="u-url url p-name fn">Alejandra Gonzalez Beltran</a>

(<a href="https://stfc.ukri.org/" class="p-org org h-org h-card">Scientific Computing Department, Science and Technology Facilities Council, UK</a>) (Previously at the University of Oxford)

<span class="p-name fn">Andrea Perego</span>

(<a href="https://ec.europa.eu/jrc/" class="p-org org h-org h-card">European Commission, Joint Research Centre</a>)

<span class="p-name fn">Peter Winstanley</span> (<a href="https://www.gov.scot/" class="p-org org h-org h-card">Scottish Government</a>)

 Former editors:   
<span class="p-name fn">Fadi Maali</span> (<a href="https://en.wikipedia.org/wiki/Digital_Enterprise_Research_Institute" class="p-org org h-org h-card">DERI</a>)

<span class="p-name fn">John Erickson</span> (<a href="http://tw.rpi.edu/" class="p-org org h-org h-card">Tetherless World Constellation (RPI)</a>)

Participate:  
[GitHub w3c/dxwg](https://github.com/w3c/dxwg/)

[File a bug](https://github.com/w3c/dxwg/issues/)

[Commit history](https://github.com/w3c/dxwg/commits/gh-pages)

[Pull requests](https://github.com/w3c/dxwg/pulls/)

Contributors:  
[Makx Dekkers](http://www.makxdekkers.com)

Please check the [**errata**](https://w3c.github.io/dxwg/errata/) for any errors or issues reported since publication.

See also [**translations**](http://www.w3.org/2003/03/Translations/byTechnology?technology=vocab-dcat-2).

This document is also available in this non-normative format: [Turtle](https://www.w3.org/ns/dcat.ttl)

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2020 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [permissive document license](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document) rules apply.

------------------------------------------------------------------------

Note

DCAT 2 supersedes DCAT \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\], but it does not make it obsolete. DCAT 2 maintains the DCAT namespace as its terms preserve backward compatibility with DCAT \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\]. DCAT 2 relaxes constraints and adds new classes and properties, but these changes do not break the definition of previous terms.

Any new implementation is expected to adopt DCAT 2, while the existing implementations do not need to upgrade to it, unless they want to use the new features. In particular, current DCAT deployments that do not overlap with the DCAT 2 new features (e.g., data services, time and space properties qualified relations, packaging) don't need to change anything to remain in conformance with DCAT 2.

Abstract
--------

DCAT is an RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web. This document defines the schema and provides examples for its use.

DCAT enables a publisher to describe datasets and data services in a catalog using a standard model and vocabulary that facilitates the consumption and aggregation of metadata from multiple catalogs. This can increase the discoverability of datasets and data services. It also makes it possible to have a decentralized approach to publishing data catalogs and makes federated search for datasets across catalogs in multiple sites possible using the same query mechanism and structure. Aggregated DCAT metadata can serve as a manifest file as part of the digital preservation process.

The namespace for DCAT terms is `http://www.w3.org/ns/dcat#`

The suggested prefix for the DCAT namespace is `dcat`

Status of This Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This document defines a major revision of the original DCAT vocabulary (\[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\]) in response to new use cases, requirements and community experience since that publication. This revision extends the original DCAT standard in line with community practice while supporting diverse approaches to data description and dataset exchange. The main changes to the DCAT vocabulary have been:

-   loosening of constraints in class and property definitions to promote re-use of terms and modularity
-   addition of a [`dcat:Resource`](#Class:Resource) class for representing any asset than can be included in the catalog, this is now the super-class of [`dcat:Dataset`](#Class:Dataset)
-   addition of [`dcat:DataService`](#Class:Data_Service), as a sub-class of [`dcat:Resource`](#Class:Resource), to support catalog service end-points providing access to data assets
-   addition of ways to represent [loosely structured catalogs](#examples-bag-of-files), where there is no distinction between a dataset and its distributions
-   more details for the ways of representing [dataset provenance](#examples-dataset-provenance) and [quality](#quality-information)
-   an [alignment](#dcat-sdo) between the DCAT vocabulary and the schema.org vocabulary

This new version of the vocabulary updates and expands the original but preserves backward compatibility. A full list of the significant changes (with links to the relevent github issues) is described in <a href="#changes" class="sec-ref">§ D. Change history</a>.

The exit criteria for CR focussed on v2 new features that replicate features that were included in application profiles of v1 as a way of remedying missing and necessary elements. The exit criteria also included recent commitments by organisations such as EC Joinup to [adopt the DCAT v2 model](https://joinup.ec.europa.eu/solution/abr-specification-registry-registries/document/specification-registry-registries-version-meeting-september) in their work. Implementation will be evidenced by showing use of the new properties/classes (or terms with equivalent meaning) in implementations of catalogs.

[Issues, requirements, and features](https://github.com/w3c/dxwg/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Adcat+) that have been considered and discussed by the Data eXchange Working Group but have not been addressed due to lack of maturity or consensus are collected in GitHub. Those believed to be a priority for a future release are in the milestone [DCAT Future Priority Work](https://github.com/w3c/dxwg/milestone/15).

### DCAT history<a href="#dcat_history" class="self-link"></a>

The original DCAT vocabulary was developed and [hosted](http://vocab.deri.ie/dcat) at the Digital Enterprise Research Institute (DERI), then refined by the [eGov Interest Group](http://www.w3.org/egov/), and finally standardized in 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] by the [Government Linked Data (GLD)](http://www.w3.org/2011/gld/) Working Group.

This revised version of DCAT was developed by the [Dataset Exchange Working Group](https://www.w3.org/2017/dxwg/) in response to a new set of Use Cases and Requirements \[<a href="#bib-dcat-ucr" class="bibref" title="Dataset Exchange Use Cases and Requirements">DCAT-UCR</a>\] gathered from peoples' experience with the DCAT vocabulary from the time of the original version, and new applications that were not considered in the first version. A summary of the changes from \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] is provided in <a href="#changes" class="sec-ref">§ D. Change history</a>.

### External terms<a href="#external_terms" class="self-link"></a>

DCAT incorporates terms from pre-existing vocabularies where stable terms with appropriate meanings could be found, such as [`foaf:homepage`](http://xmlns.com/foaf/0.1/homepage) and [`dct:title`](http://purl.org/dc/terms/title). Informal summary definitions of the externally-defined terms are included in the DCAT vocabulary for convenience, while authoritative definitions are available in the normative references. Changes to definitions in the references, if any, supersede the summaries given in this specification. Note that conformance to DCAT (<a href="#conformance" class="sec-ref">§ 4. Conformance</a>) concerns usage of only the terms in the DCAT vocabulary specification, so possible changes to other external definitions will not affect the conformance of DCAT implementations.

### Please send comments<a href="#please_send_comments" class="self-link"></a>

The Working Group invited publishers to describe their catalogs and datasets with the revised version of DCAT described in this document and to report their implementations following [the instruction to reporting DCAT revised implementations](https://github.com/w3c/dxwg/wiki/DCAT-implementation-evidence). This information and subsequent analysis is published in the [implementation report.](https://w3c.github.io/dxwg/dcat-implementation-report/)

This document was published by the [Dataset Exchange Working Group](https://www.w3.org/2017/dxwg/) as a Recommendation.

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

[GitHub Issues](https://github.com/w3c/dxwg/issues/) are preferred for discussion of this specification. Alternatively, you can send comments to our mailing list. Please send them to <public-dxwg-comments@w3.org> ([archives](https://lists.w3.org/Archives/Public/public-dxwg-comments/)).

Please see the Working Group's [implementation report](https://w3c.github.io/dxwg/dcat-implementation-report/).

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/99375/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2019/Process-20190301/" id="w3c_process_revision">1 March 2019 W3C Process Document</a>.

Table of Contents
-----------------

1.  <a href="#introduction" class="tocxref">1. Introduction</a>
2.  <a href="#motivation" class="tocxref">2. Motivation for change</a>
3.  <a href="#namespaces" class="tocxref">3. Namespaces</a>
    1.  <a href="#normative-namespaces" class="tocxref">3.1 Normative namespaces</a>
    2.  <a href="#non-normative-namespaces" class="tocxref">3.2 Non-normative namespaces</a>
4.  <a href="#conformance" class="tocxref">4. Conformance</a>
5.  <a href="#vocabulary-overview" class="tocxref">5. Vocabulary overview</a>
    1.  <a href="#dcat-scope" class="tocxref">5.1 DCAT scope</a>
    2.  <a href="#dcat-rdf" class="tocxref">5.2 RDF considerations</a>
    3.  <a href="#basic-example" class="tocxref">5.3 Basic example</a>
    4.  <a href="#classifying-datasets" class="tocxref">5.4 Classifying datasets thematically</a>
    5.  <a href="#classifying-dataset-types" class="tocxref">5.5 Classifying dataset types</a>
    6.  <a href="#describing-catalog-records-metadata" class="tocxref">5.6 Describing catalog records metadata</a>
    7.  <a href="#example-landing-page" class="tocxref">5.7 Dataset available only behind some Web page</a>
    8.  <a href="#a-dataset-available-as-download-and-behind-some-web-page" class="tocxref">5.8 A dataset available as a download and behind some Web page</a>
    9.  <a href="#a-dataset-available-from-a-service" class="tocxref">5.9 A dataset available through a service</a>
6.  <a href="#vocabulary-specification" class="tocxref">6. Vocabulary specification</a>
    1.  <a href="#RDF-representation" class="tocxref">6.1 RDF representation</a>
    2.  <a href="#external-vocab" class="tocxref">6.2 Elements from other vocabularies</a>
        1.  <a href="#complements" class="tocxref">6.2.1 Complementary vocabularies</a>
        2.  <a href="#dependencies" class="tocxref">6.2.2 Element definitions</a>
    3.  <a href="#Class:Catalog" class="tocxref">6.3 Class: Catalog</a>
        1.  <a href="#Property:catalog_homepage" class="tocxref">6.3.1 Property: homepage</a>
        2.  <a href="#Property:catalog_themes" class="tocxref">6.3.2 Property: themes</a>
        3.  <a href="#Property:catalog_has_part" class="tocxref">6.3.3 Property: has part</a>
        4.  <a href="#Property:catalog_dataset" class="tocxref">6.3.4 Property: dataset</a>
        5.  <a href="#Property:catalog_service" class="tocxref">6.3.5 Property: service</a>
        6.  <a href="#Property:catalog_catalog" class="tocxref">6.3.6 Property: catalog</a>
        7.  <a href="#Property:catalog_catalog_record" class="tocxref">6.3.7 Property: catalog record</a>
    4.  <a href="#Class:Resource" class="tocxref">6.4 Class: Cataloged Resource</a>
        1.  <a href="#Property:resource_access_rights" class="tocxref">6.4.1 Property: access rights</a>
        2.  <a href="#Property:resource_conforms_to" class="tocxref">6.4.2 Property: conforms to</a>
        3.  <a href="#Property:resource_contact_point" class="tocxref">6.4.3 Property: contact point</a>
        4.  <a href="#Property:resource_creator" class="tocxref">6.4.4 Property: resource creator</a>
        5.  <a href="#Property:resource_description" class="tocxref">6.4.5 Property: description</a>
        6.  <a href="#Property:resource_title" class="tocxref">6.4.6 Property: title</a>
        7.  <a href="#Property:resource_release_date" class="tocxref">6.4.7 Property: release date</a>
        8.  <a href="#Property:resource_update_date" class="tocxref">6.4.8 Property: update/modification date</a>
        9.  <a href="#Property:resource_language" class="tocxref">6.4.9 Property: language</a>
        10. <a href="#Property:resource_publisher" class="tocxref">6.4.10 Property: publisher</a>
        11. <a href="#Property:resource_identifier" class="tocxref">6.4.11 Property: identifier</a>
        12. <a href="#Property:resource_theme" class="tocxref">6.4.12 Property: theme/category</a>
        13. <a href="#Property:resource_type" class="tocxref">6.4.13 Property: type/genre</a>
        14. <a href="#Property:resource_relation" class="tocxref">6.4.14 Property: resource relation</a>
        15. <a href="#Property:resource_qualified_relation" class="tocxref">6.4.15 Property: qualified relation</a>
        16. <a href="#Property:resource_keyword" class="tocxref">6.4.16 Property: keyword/tag</a>
        17. <a href="#Property:resource_landing_page" class="tocxref">6.4.17 Property: landing page</a>
        18. <a href="#Property:resource_qualified_attribution" class="tocxref">6.4.18 Property: qualified attribution</a>
        19. <a href="#Property:resource_license" class="tocxref">6.4.19 Property: license</a>
        20. <a href="#Property:resource_rights" class="tocxref">6.4.20 Property: rights</a>
        21. <a href="#Property:resource_has_policy" class="tocxref">6.4.21 Property: has policy</a>
        22. <a href="#Property:resource_is_referenced_by" class="tocxref">6.4.22 Property: is referenced by</a>
    5.  <a href="#Class:Catalog_Record" class="tocxref">6.5 Class: Catalog Record</a>
        1.  <a href="#Property:record_title" class="tocxref">6.5.1 Property: title</a>
        2.  <a href="#Property:record_description" class="tocxref">6.5.2 Property: description</a>
        3.  <a href="#Property:record_listing_date" class="tocxref">6.5.3 Property: listing date</a>
        4.  <a href="#Property:record_update_date" class="tocxref">6.5.4 Property: update/modification date</a>
        5.  <a href="#Property:record_primary_topic" class="tocxref">6.5.5 Property: primary topic</a>
        6.  <a href="#Property:record_conforms_to" class="tocxref">6.5.6 Property: conforms to</a>
    6.  <a href="#Class:Dataset" class="tocxref">6.6 Class: Dataset</a>
        1.  <a href="#Property:dataset_distribution" class="tocxref">6.6.1 Property: dataset distribution</a>
        2.  <a href="#Property:dataset_frequency" class="tocxref">6.6.2 Property: frequency</a>
        3.  <a href="#Property:dataset_spatial" class="tocxref">6.6.3 Property: spatial/geographical coverage</a>
        4.  <a href="#Property:dataset_spatial_resolution" class="tocxref">6.6.4 Property: spatial resolution</a>
        5.  <a href="#Property:dataset_temporal" class="tocxref">6.6.5 Property: temporal coverage</a>
        6.  <a href="#Property:dataset_temporal_resolution" class="tocxref">6.6.6 Property: temporal resolution</a>
        7.  <a href="#Property:dataset_was_generated_by" class="tocxref">6.6.7 Property: was generated by</a>
    7.  <a href="#Class:Distribution" class="tocxref">6.7 Class: Distribution</a>
        1.  <a href="#Property:distribution_title" class="tocxref">6.7.1 Property: title</a>
        2.  <a href="#Property:distribution_description" class="tocxref">6.7.2 Property: description</a>
        3.  <a href="#Property:distribution_release_date" class="tocxref">6.7.3 Property: release date</a>
        4.  <a href="#Property:distribution_update_date" class="tocxref">6.7.4 Property: update/modification date</a>
        5.  <a href="#Property:distribution_license" class="tocxref">6.7.5 Property: license</a>
        6.  <a href="#Property:distribution_access_rights" class="tocxref">6.7.6 Property: access rights</a>
        7.  <a href="#Property:distribution_rights" class="tocxref">6.7.7 Property: rights</a>
        8.  <a href="#Property:distribution_has_policy" class="tocxref">6.7.8 Property: has policy</a>
        9.  <a href="#Property:distribution_access_url" class="tocxref">6.7.9 Property: access URL</a>
        10. <a href="#Property:distribution_access_service" class="tocxref">6.7.10 Property: access service</a>
        11. <a href="#Property:distribution_download_url" class="tocxref">6.7.11 Property: download URL</a>
        12. <a href="#Property:distribution_size" class="tocxref">6.7.12 Property: byte size</a>
        13. <a href="#Property:distribution_spatial_resolution" class="tocxref">6.7.13 Property: spatial resolution</a>
        14. <a href="#Property:distribution_temporal_resolution" class="tocxref">6.7.14 Property: temporal resolution</a>
        15. <a href="#Property:distribution_conforms_to" class="tocxref">6.7.15 Property: conforms to</a>
        16. <a href="#Property:distribution_media_type" class="tocxref">6.7.16 Property: media type</a>
        17. <a href="#Property:distribution_format" class="tocxref">6.7.17 Property: format</a>
        18. <a href="#Property:distribution_compression_format" class="tocxref">6.7.18 Property: compression format</a>
        19. <a href="#Property:distribution_packaging_format" class="tocxref">6.7.19 Property: packaging format</a>
    8.  <a href="#Class:Data_Service" class="tocxref">6.8 Class: Data Service</a>
        1.  <a href="#Property:data_service_endpoint_url" class="tocxref">6.8.1 Property: endpoint URL</a>
        2.  <a href="#Property:data_service_endpoint_description" class="tocxref">6.8.2 Property: endpoint description</a>
        3.  <a href="#Property:data_service_serves_dataset" class="tocxref">6.8.3 Property: serves dataset</a>
    9.  <a href="#Class:Concept_Scheme" class="tocxref">6.9 Class: Concept Scheme</a>
    10. <a href="#Class:Concept" class="tocxref">6.10 Class: Concept</a>
    11. <a href="#Class:Organization_Person" class="tocxref">6.11 Class: Organization/Person</a>
    12. <a href="#Class:Relationship" class="tocxref">6.12 Class: Relationship</a>
        1.  <a href="#Property:relationship_relation" class="tocxref">6.12.1 Property: relation</a>
        2.  <a href="#Property:relationship_hadRole" class="tocxref">6.12.2 Property: had role</a>
    13. <a href="#Class:Role" class="tocxref">6.13 Class: Role</a>
    14. <a href="#Class:Period_of_Time" class="tocxref">6.14 Class: Period of Time</a>
        1.  <a href="#Property:period_start_date" class="tocxref">6.14.1 Property: start date</a>
        2.  <a href="#Property:period_end_date" class="tocxref">6.14.2 Property: end date</a>
        3.  <a href="#Property:period_has_beginning" class="tocxref">6.14.3 Property: beginning</a>
        4.  <a href="#Property:period_has_end" class="tocxref">6.14.4 Property: end</a>
    15. <a href="#Class:Location" class="tocxref">6.15 Class: Location</a>
        1.  <a href="#Property:location_geometry" class="tocxref">6.15.1 Property: geometry</a>
        2.  <a href="#Property:location_bbox" class="tocxref">6.15.2 Property: bounding box</a>
        3.  <a href="#Property:location_centroid" class="tocxref">6.15.3 Property: centroid</a>
7.  <a href="#dereferenceable-identifiers" class="tocxref">7. Dereferenceable identifiers</a>
    1.  <a href="#identifiers-type" class="tocxref">7.1 Indicating common identifier types</a>
8.  <a href="#license-rights" class="tocxref">8. License and rights statements</a>
9.  <a href="#time-and-space" class="tocxref">9. Time and space</a>
    1.  <a href="#temporal-properties" class="tocxref">9.1 Temporal properties</a>
    2.  <a href="#spatial-properties" class="tocxref">9.2 Spatial properties</a>
10. <a href="#dataset-versions" class="tocxref">10. Versioning</a>
11. <a href="#data-citation" class="tocxref">11. Data citation</a>
12. <a href="#quality-information" class="tocxref">12. Quality information</a>
    1.  <a href="#quality-example1" class="tocxref">12.1 Providing quality information</a>
    2.  <a href="#quality-conformance" class="tocxref">12.2 Documenting conformance to standards</a>
        1.  <a href="#quality-conformance-statement" class="tocxref">12.2.1 Conformance to a standard</a>
        2.  <a href="#quality-conformance-degree" class="tocxref">12.2.2 Degree of conformance</a>
        3.  <a href="#quality-conformance-test-results" class="tocxref">12.2.3 Conformance test results</a>
13. <a href="#qualified-forms" class="tocxref">13. Qualified relations</a>
    1.  <a href="#qualified-attribution" class="tocxref">13.1 Relationships between datasets and agents</a>
    2.  <a href="#qualified-relationship" class="tocxref">13.2 Relationships between datasets and other resources</a>
14. <a href="#profiles" class="tocxref">14. DCAT Profiles</a>
15. <a href="#security_and_privacy" class="tocxref">15. Security and Privacy</a>
16. <a href="#acknowledgments" class="tocxref">A. Acknowledgments</a>
17. <a href="#dcat-sdo" class="tocxref">B. Alignment with Schema.org</a>
18. <a href="#collection-of-examples" class="tocxref">C. Examples</a>
    1.  <a href="#examples-bag-of-files" class="tocxref">C.1 Loosely structured catalog</a>
    2.  <a href="#examples-dataset-provenance" class="tocxref">C.2 Dataset provenance</a>
    3.  <a href="#examples-dataset-publication" class="tocxref">C.3 Link datasets and publications</a>
    4.  <a href="#examples-data-service" class="tocxref">C.4 Data services</a>
    5.  <a href="#examples-compressed-and-packaged-distributions" class="tocxref">C.5 Compressed and packaged distributions</a>
19. <a href="#changes" class="tocxref">D. Change history</a>
    1.  <a href="#changes-since-20140116" class="tocxref">D.1 Changes since the W3C Recommendation of 16 January 2014</a>
20. <a href="#references" class="tocxref">E. References</a>
    1.  <a href="#normative-references" class="tocxref">E.1 Normative references</a>
    2.  <a href="#informative-references" class="tocxref">E.2 Informative references</a>

1. Introduction<a href="#introduction" class="self-link"></a>
-------------------------------------------------------------

*This section is non-normative.*

Sharing data resources among different organizations, researchers, governments and citizens requires the provision of metadata. This is irrespective of the data being open or not. DCAT is a vocabulary for publishing data catalogs on the Web, which was originally developed in the context of government data catalogs such as [data.gov](https://www.data.gov/) and [data.gov.uk](https://data.gov.uk), but it is also applicable and has been used in other contexts.

This revision of DCAT has extended the previous version to support further use cases and requirements \[<a href="#bib-dcat-ucr" class="bibref" title="Dataset Exchange Use Cases and Requirements">DCAT-UCR</a>\]. These include the possibility of cataloging other resources in addition to datasets, such as data services. The revision also supports describing relationships between datasets as well as between datasets and other cataloged resources. Guidance on how to document licenses and rights statements associated with the cataloged items is provided.

DCAT provides RDF classes and properties to allow datasets and data services to be described and included in a catalog. The use of a standard model and vocabulary facilitates the consumption and aggregation of metadata from multiple catalogs, which can:

1.  increase the discoverability of datasets and data services
2.  allow federated search for datasets across catalogs in multiple sites

Data described in a catalog can come in many formats, ranging from spreadsheets, through XML and RDF to various specialized formats. DCAT does not make any assumptions about these serialization formats of the datasets but it does distinguish between the abstract dataset and its different manifestations or distributions.

Data is often provided through a service which supports selection of an extract, sub-set, or combination of existing data, or of new data generated by some data processing function. DCAT allows the description of a data access service to be included in a catalog.

Complementary vocabularies can be used together with DCAT to provide more detailed format-specific information. For example, properties from the VoID vocabulary \[<a href="#bib-void" class="bibref" title="Describing Linked Datasets with the VoID Vocabulary">VOID</a>\] can be used within DCAT to express various statistics about a dataset if that dataset is in RDF format.

This document does not prescribe any particular method of deploying data catalogs expressed in DCAT. DCAT information can be presented in many forms including RDF accessible via SPARQL endpoints, embedded in HTML pages as \[<a href="#bib-html-rdfa" class="bibref" title="HTML+RDFa 1.1 - Second Edition">HTML-RDFa</a>\], or serialized as RDF/XML \[<a href="#bib-rdf-syntax-grammar" class="bibref" title="RDF 1.1 XML Syntax">RDF-SYNTAX-GRAMMAR</a>\], \[<a href="#bib-n3" class="bibref" title="Notation3 (N3): A readable RDF syntax">N3</a>\], \[<a href="#bib-turtle" class="bibref" title="RDF 1.1 Turtle">Turtle</a>\], \[<a href="#bib-json-ld" class="bibref" title="JSON-LD 1.0">JSON-LD</a>\] or other formats. Within this document the examples use \[<a href="#bib-turtle" class="bibref" title="RDF 1.1 Turtle">Turtle</a>\] because of its readability.

2. Motivation for change<a href="#motivation" class="self-link"></a>
--------------------------------------------------------------------

*This section is non-normative.*

The original Recommendation \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] published in January 2014 provided the basic framework for describing datasets. It made an important distinction between a *dataset* as an abstract idea and a *distribution* as a manifestation of the dataset. Although DCAT has been widely adopted, it has become clear that the original specification lacked a number of essential features that were added either through the mechanism of a profile, such as the European Commission's DCAT-AP \[<a href="#bib-dcat-ap" class="bibref" title="DCAT Application Profile for data portals in Europe. Version 1.2.1">DCAT-AP</a>\], or the development of larger vocabularies that to a greater or lesser extent built upon the base standard, such as the Healthcare and Life Sciences Community Profile \[<a href="#bib-hcls-dataset" class="bibref" title="Dataset Descriptions: HCLS Community Profile">HCLS-Dataset</a>\], the Data Tag Suite \[<a href="#bib-dats" class="bibref" title="Data Tag Suite">DATS</a>\] and more. This revision of DCAT has been developed to address the specific shortcomings that have come to light through the experiences of different communities, the aim being to improve interoperability between the outputs of these larger vocabularies. For example, in this new DCAT version we provide classes, properties and guidance to address [identifiers](#dereferenceable-identifiers), [dataset quality information](#quality-information), and [data citation](#data-citation) issues.

This revision includes re-writing of the specification throughout. Significant changes from the 2014 Recommendation are marked within the text using "Note" sections, as well as being described in <a href="#changes" class="sec-ref">§ D. Change history</a>.

3. Namespaces<a href="#namespaces" class="self-link"></a>
---------------------------------------------------------

The namespace for DCAT is `http://www.w3.org/ns/dcat#`. DCAT also makes extensive use of terms from other vocabularies, in particular Dublin Core \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\]. DCAT defines a minimal set of classes and properties of its own.

### 3.1 Normative namespaces<a href="#normative-namespaces" class="self-link"></a>

Namespaces and prefixes used in normative parts of this recommendation are shown in the following table.

<table><thead><tr class="header"><th>Prefix</th><th>Namespace</th></tr></thead><tbody><tr class="odd"><td><code>dc</code></td><td><code>http://purl.org/dc/elements/1.1/</code></td></tr><tr class="even"><td><code>dcat</code></td><td><code>http://www.w3.org/ns/dcat#</code></td></tr><tr class="odd"><td><code>dct</code></td><td><code>http://purl.org/dc/terms/</code></td></tr><tr class="even"><td><code>dctype</code></td><td><code>http://purl.org/dc/dcmitype/</code></td></tr><tr class="odd"><td><code>foaf</code></td><td><code>http://xmlns.com/foaf/0.1/</code></td></tr><tr class="even"><td><code>locn</code></td><td><code>http://www.w3.org/ns/locn#</code></td></tr><tr class="odd"><td><code>odrl</code></td><td><code>http://www.w3.org/ns/odrl/2/</code></td></tr><tr class="even"><td><code>owl</code></td><td><code>http://www.w3.org/2002/07/owl#</code></td></tr><tr class="odd"><td><code>prov</code></td><td><code>http://www.w3.org/ns/prov#</code></td></tr><tr class="even"><td><code>rdf</code></td><td><code>http://www.w3.org/1999/02/22-rdf-syntax-ns#</code></td></tr><tr class="odd"><td><code>rdfs</code></td><td><code>http://www.w3.org/2000/01/rdf-schema#</code></td></tr><tr class="even"><td><code>skos</code></td><td><code>http://www.w3.org/2004/02/skos/core#</code></td></tr><tr class="odd"><td><code>time</code></td><td><code>http://www.w3.org/2006/time#</code></td></tr><tr class="even"><td><code>vcard</code></td><td><code>http://www.w3.org/2006/vcard/ns#</code></td></tr><tr class="odd"><td><code>xsd</code></td><td><code>http://www.w3.org/2001/XMLSchema#</code></td></tr></tbody></table>

### 3.2 Non-normative namespaces<a href="#non-normative-namespaces" class="self-link"></a>

*This section is non-normative.*

Namespaces and prefixes used in examples and guidelines in the document and not from normative parts of the recommendation are shown in the following table.

<table><thead><tr class="header"><th>Prefix</th><th>Namespace</th></tr></thead><tbody><tr class="odd"><td><code>adms</code></td><td><code>https://www.w3.org/ns/adms#</code></td></tr><tr class="even"><td><code>dqv</code></td><td><code>http://www.w3.org/ns/dqv#</code></td></tr><tr class="odd"><td><code>earl</code></td><td><code>http://www.w3.org/ns/earl#</code></td></tr><tr class="even"><td><code>geosparql</code></td><td><code>http://www.opengis.net/ont/geosparql#</code></td></tr><tr class="odd"><td><code>oa</code></td><td><code>http://www.w3.org/ns/oa#</code></td></tr><tr class="even"><td><code>sdmx-attribute</code></td><td><code>http://purl.org/linked-data/sdmx/2009/attribute#</code></td></tr><tr class="odd"><td><code>sdo</code></td><td><code>https://schema.org/</code></td></tr><tr class="even"><td><code>w3cgeo</code></td><td><code>http://www.w3.org/2003/01/geo/wgs84_pos#</code></td></tr></tbody></table>

4. Conformance<a href="#conformance" class="self-link"></a>
-----------------------------------------------------------

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words *MAY*, *MUST*, *MUST NOT*, and *SHOULD* in this document are to be interpreted as described in [BCP 14](https://tools.ietf.org/html/bcp14) \[<a href="#bib-rfc2119" class="bibref" title="Key words for use in RFCs to Indicate Requirement Levels">RFC2119</a>\] \[<a href="#bib-rfc8174" class="bibref" title="Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words">RFC8174</a>\] when, and only when, they appear in all capitals, as shown here.

A data catalog conforms to DCAT if:

-   Access to data is organized into datasets, distributions, and data-services.
-   An RDF description of the catalog itself, the corresponding cataloged resources, and distributions is available (but the choice of RDF syntax, access protocol, and access policy are not mandated by this specification).
-   The contents of all metadata fields that are held in the catalog and that contain data about the catalog itself, the corresponding cataloged resources, and distributions are included in this RDF description and are expressed using the appropriate classes and properties from DCAT, except where no such class or property exists.
-   All classes and properties defined in DCAT are used in a way consistent with the semantics declared in this specification.

DCAT-compliant catalogs *MAY* include additional non-DCAT metadata fields and additional RDF data in the catalog's RDF description.

A **DCAT profile** is a specification for a data catalog that adds additional constraints to DCAT. A data catalog that conforms to the profile also conforms to DCAT. Additional constraints in a profile *MAY* include:

-   Cardinality constraints, including a minimum set of required metadata fields
-   Sub-classes and sub-properties of the standard DCAT classes and properties
-   Classes and properties for additional metadata fields not covered in DCAT vocabulary specification
-   Controlled vocabularies or URI sets as acceptable values for properties
-   Requirements for specific access mechanisms (RDF syntaxes, protocols) to the catalog's RDF description

Note

The notion of *profile* used in this document denotes metadata specifications that the Dublin Core community would call *application profiles* \[<a href="#bib-dcap" class="bibref" title="Guidelines for Dublin Core Application Profiles">DCAP</a>\].

5. Vocabulary overview<a href="#vocabulary-overview" class="self-link"></a>
---------------------------------------------------------------------------

*This section is non-normative.*

### 5.1 DCAT scope<a href="#dcat-scope" class="self-link"></a>

DCAT is an RDF vocabulary for representing data catalogs. DCAT is based around six main classes (<a href="#UML_DCAT_All_Attr" class="fig-ref" title="Overview of DCAT model, showing the classes of resources that can be members of a Catalog, and the relationships between them.">Figure 1</a>):

-   [`dcat:Catalog`](#Class:Catalog) represents a catalog, which is a dataset in which each individual item is a metadata record describing some resource; the scope of `dcat:Catalog` is collections of metadata about **datasets** or **data services**.
-   [`dcat:Resource`](#Class:Resource) represents a dataset, a data service or any other resource that may be described by a metadata record in a catalog. This class is not intended to be used directly, but is the parent class of [`dcat:Dataset`](#Class:Dataset), [`dcat:DataService`](#Class:Data_Service) and [`dcat:Catalog`](#Class:Catalog). Member items in a catalog should be members of one of the sub-classes, or of a sub-class of these, or of a sub-class of [`dcat:Resource`](#Class:Resource) defined in a DCAT profile or other DCAT application. [`dcat:Resource`](#Class:Resource) is effectively an extension point for defining a catalog of any kind of resource. [`dcat:Dataset`](#Class:Dataset) and [`dcat:DataService`](#Class:Data_Service) can be used for datasets and services which are not documented in any catalog.
-   [`dcat:Dataset`](#Class:Dataset) represents a dataset. A dataset is a collection of data, published or curated by a single agent. Data comes in many forms including numbers, words, pixels, imagery, sound and other multi-media, and potentially other types, any of which might be collected into a dataset.
-   [`dcat:Distribution`](#Class:Distribution) represents an accessible form of a dataset such as a downloadable file.
-   [`dcat:DataService`](#Class:Data_Service) represents a data service. A data service is a collection of operations accessible through an interface (API) that provide access to one or more datasets or data processing functions.
-   [`dcat:CatalogRecord`](#Class:Catalog_Record) represents a metadata item in the catalog, primarily concerning the registration information, such as who added the item and when.

<figure><img src="./images/DCAT-summary-all-attributes.png" alt="Figure 1  Overview of DCAT model, showing the classes of resources that can be members of a Catalog, and the relationships between them. " width="779" height="964" /><figcaption>Figure 1 <span class="fig-title"> Overview of DCAT model, showing the classes of resources that can be members of a Catalog, and the relationships between them. </span></figcaption></figure>Note

Along with the rest of <a href="#vocabulary-overview" class="sec-ref">§ 5. Vocabulary overview</a>, this diagram is **non-normative**. Furthermore, while the diagram uses UML-style class notation it should be interpreted following the usual RDF open-world assumptions around the presence/absence of properties, relationships, and their cardinality. The properties shown in each class reflect those specified in the descriptions of classes in <a href="#vocabulary-specification" class="sec-ref">§ 6. Vocabulary specification</a>. To assist in understanding the full scope of each class, properties are copied down from each '::super-class'. Cardinalities are shown in a few places to reinforce expectations, but these are not axiomatized or enforced in any way by this (normative) recommendation.

A **dataset** in DCAT is defined as a "collection of data, published or curated by a single agent, and available for access or download in one or more serializations or formats". A dataset is a conceptual entity, and can be represented by one or more **distributions** that serialize the dataset for transfer. Distributions of a dataset can be provided via **data services**.

A data service typically provides selection, extraction, combination, processing or transformation operations over datasets that might be hosted locally or remote to the service. The result of any request to a data service is a representation of a part or all of a dataset or catalog. A data service might be tied to specific datasets, or its source data might be configured at request- or run-time. A data distribution service allows selection and download of a distribution of a dataset or subset. A data discovery service allows a client to find a suitable dataset. Other kinds of data service include data transformation services, such as coordinate transformation services, re-sampling and interpolation services, and various data processing services, including simulation and modelling services. Note that a data service in DCAT is a collection of operations or **API** which provides access to data. An interactive user-interface is often available to provide convenient access to API operations, but its description is outside the scope of DCAT. The details of a particular data service endpoint will often be specified through a description conforming to a standard service type, which complement the scope of the DCAT vocabulary itself.

Descriptions of datasets and data services can be included in a **catalog**. A catalog is a kind of dataset whose member items are descriptions of datasets and data services. Other types of things might also be cataloged, but the scope of DCAT is currently limited to datasets and data services. To extend the scope of a catalog beyond datasets and data services it is recommended to define additional sub-classes of [`dcat:Resource`](#Class:Resource) in a DCAT profile or other DCAT application. To extend the scope of service descriptions beyond data distribution services it is recommended to define additional sub-classes of [`dcat:DataService`](#Class:Data_Service) in a DCAT profile or other DCAT application.

Note

The scope of DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] was limited to catalogs of datasets. A number of use cases for the revision \[<a href="#bib-dcat-ucr" class="bibref" title="Dataset Exchange Use Cases and Requirements">DCAT-UCR</a>\] involve **data services** as members of a catalog - see [§ <span class="secno">5.16 </span>DCAT Distribution to describe Web services](https://www.w3.org/TR/dcat-ucr/#ID6) and [§ <span class="secno">5.18 </span>Modeling service-based data access](https://www.w3.org/TR/dcat-ucr/#ID18). Hence, the scope of this revision of DCAT includes both datasets and data services to enable these to be part of a DCAT conformant catalog. Provision for catalogs to be composed of other catalogs is also made. See [Issue \#172](https://github.com/w3c/dxwg/issues/172).

Catalogs of other kinds of things might be designed following the DCAT pattern, e.g. dealing with facilities, instruments, samples and specimens, other physical artefacts, events or activities. These are currently out of scope for DCAT, but might be defined through further sub-classes of [`dcat:Resource`](#Class:Resource), which could be specified in a DCAT profile or other DCAT application.

A **catalog record** describes an entry in the catalog. Notice that while [`dcat:Resource`](#Class:Resource) represents the dataset or service itself, [`dcat:CatalogRecord`](#Class:Catalog_Record) is the record that describes the registration of an item in the catalog. The use of [`dcat:CatalogRecord`](#Class:Catalog_Record) is considered optional. It is used to capture provenance information about entries in a catalog explicitly. If this is not necessary then [`dcat:CatalogRecord`](#Class:Catalog_Record) can be safely ignored.

### 5.2 RDF considerations<a href="#dcat-rdf" class="self-link"></a>

The DCAT vocabulary is an OWL2 ontology \[<a href="#bib-owl2-overview" class="bibref" title="OWL 2 Web Ontology Language Document Overview (Second Edition)">OWL2-OVERVIEW</a>\] formalized using \[<a href="#bib-rdf-schema" class="bibref" title="RDF Schema 1.1">RDF-SCHEMA</a>\]. Each class and property in DCAT is denoted by an \[<a href="#bib-iri" class="bibref" title="Internationalized Resource Identifiers (IRIs)">IRI</a>\]. Locally defined elements are in the namespace [`http://www.w3.org/ns/dcat#`](http://www.w3.org/ns/dcat#). Elements are also adopted from several external vocabularies, in particular \[<a href="#bib-foaf" class="bibref" title="FOAF Vocabulary Specification 0.99 (Paddington Edition)">FOAF</a>\], \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\] and \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\]

RDF allows resources to have global identifiers (IRIs) or to be blank nodes. Blank nodes can be used to denote resources without explicitly naming them with an IRI. They can appear in the subject and object position of a triple \[<a href="#bib-rdf11-primer" class="bibref" title="RDF 1.1 Primer">RDF11-PRIMER</a>\]. For example, in many actual DCAT catalogs, distributions are represented as blank nodes nested inside the related dataset description. While blank nodes can offer flexibility for some use cases, in a Linked Data context, blank nodes limit our ability to collaboratively annotate data. A blank node resource cannot be the target of a link and it can't be annotated with new information from new sources. As one of the biggest benefits of the Linked Data approach is that "anyone can say anything anywhere", use of blank nodes undermines some of the advantages we can gain from wide adoption of the RDF model. Even within the closed world of a single application dataset, use of blank nodes can quickly become limiting when integrating new data \[<a href="#bib-linkeddatapatterns" class="bibref" title="Linked Data Patterns: A pattern catalogue for modelling, publishing, and consuming Linked Data">LinkedDataPatterns</a>\]. For these reasons, it is recommended that instances of the DCAT main classes have a global identifier, and use of blank nodes is generally discouraged when encoding DCAT in RDF.

All RDF examples in this document are written in Turtle syntax \[<a href="#bib-turtle" class="bibref" title="RDF 1.1 Turtle">Turtle</a>\] and many are available from the [DXWG code repository](https://github.com/w3c/dxwg/tree/gh-pages/dcat/examples).

Note

Each RDF example in this document is intended to demonstrate specific capabilities of DCAT, and therefore only shows a subset of all the potential properties and links which might appear in a complete DCAT resource.

### 5.3 Basic example<a href="#basic-example" class="self-link"></a>

This example provides a quick overview of how DCAT might be used to represent a government catalog and its datasets.

First, the catalog description:

<a href="#ex-catalog" class="self-link">Example 1</a>

    :catalog
      a dcat:Catalog ;
      dct:title "Imaginary Catalog"@en ;
      rdfs:label "Imaginary Catalog"@en ;
      foaf:homepage <http://example.org/catalog> ;
      dct:publisher :transparency-office ;
      dct:language <http://id.loc.gov/vocabulary/iso639-1/en>  ;
      dcat:dataset :dataset-001  , :dataset-002 , :dataset-003 ;
      .

The publisher of the catalog has the relative URI `:transparency-office`. Further description of the publisher can be provided as in <a href="#ex-publisher" class="box-ref">Example 2</a>:

<a href="#ex-publisher" class="self-link">Example 2</a>

    :transparency-office
      a foaf:Organization ;
      rdfs:label "Transparency Office"@en ;
      .

The catalog lists each of its datasets via the `dcat:dataset` property. In <a href="#ex-catalog" class="box-ref">Example 1</a>, an example dataset was mentioned with the relative URI `:dataset-001`. A possible description of it using DCAT is shown below:

<a href="#ex-dataset" class="self-link">Example 3</a>

    :dataset-001
      a dcat:Dataset ;
      dct:title "Imaginary dataset"@en ;
      dcat:keyword "accountability"@en, "transparency"@en, "payments"@en ;
      dct:creator :finance-employee-001 ;
      dct:issued "2011-12-05"^^xsd:date ;
      dct:modified "2011-12-15"^^xsd:date ;
      dcat:contactPoint <http://example.org/transparency-office/contact> ;
      dct:temporal <http://reference.data.gov.uk/id/quarter/2006-Q1> ;
      dcat:temporalResolution "P1D"^^xsd:duration ;
      dct:spatial <http://sws.geonames.org/6695072/> ;
      dcat:spatialResolutionInMeters "30.0"^^xsd:decimal ;
      dct:publisher :finance-ministry ;
      dct:language <http://id.loc.gov/vocabulary/iso639-1/en>  ;
      dct:accrualPeriodicity <http://purl.org/linked-data/sdmx/2009/code#freq-W>  ;
      dcat:distribution :dataset-001-csv ;
      .

Five distinct temporal descriptors are shown for this dataset. The dataset publication and revision dates are shown in [`dct:issued`](#Property:resource_release_date) and [`dct:modified`](#Property:resource_update_date). For the frequency of update of the dataset in [`dct:accrualPeriodicity`](#Property:dataset_frequency), we use an instance from the [content-oriented guidelines](https://www.w3.org/TR/vocab-data-cube/#dsd-cog) developed as part of the W3C Data Cube Vocabulary \[<a href="#bib-vocab-data-cube" class="bibref" title="The RDF Data Cube Vocabulary">VOCAB-DATA-CUBE</a>\] efforts. The temporal coverage or extent is given in [`dct:temporal`](#Property:dataset_temporal) using an item from the Interval dataset (originally available from `http://reference.data.gov.uk/id/interval`) from data.gov.uk. The temporal resolution, which describes the minimum spacing of items within the dataset, is given in [`dcat:temporalResolution`](#Property:dataset_temporal_resolution) using the standard datatype `xsd:duration`.

Additionally, the spatial coverage or extent is given [`dct:spatial`](#Property:dataset_spatial) using a URI from [Geonames](http://www.geonames.org/). The spatial resolution, which describes the minimum spatial separation of items within the dataset, is given in [`dcat:spatialResolutionInMeters`](#Property:dataset_spatial_resolution) using the standard datatype `xsd:decimal`.

A contact point is provided where comments and feedback about the dataset can be sent. Further details about the contact point, such as email address or telephone number, can be provided using vCard \[<a href="#bib-vcard-rdf" class="bibref" title="vCard Ontology - for describing People and Organizations">VCARD-RDF</a>\].

One representation of the dataset `:dataset-001-csv` can be downloaded as a 5kB CSV file. This is represented as an RDF resource of type `dcat:Distribution`.

<a href="#ex-distribution" class="self-link">Example 4</a>

    :dataset-001-csv
      a dcat:Distribution ;
      dcat:downloadURL <http://www.example.org/files/001.csv> ;
      dct:title "CSV distribution of imaginary dataset 001"@en ;
      dcat:mediaType <https://www.iana.org/assignments/media-types/text/csv> ;
      dcat:byteSize "5120"^^xsd:decimal ;
      .

### 5.4 Classifying datasets thematically<a href="#classifying-datasets" class="self-link"></a>

The catalog classifies its datasets according to a set of domains represented by the relative URI `:themes`. SKOS \[<a href="#bib-skos-reference" class="bibref" title="SKOS Simple Knowledge Organization System Reference">SKOS-REFERENCE</a>\] can be used to describe the domains used:

<a href="#ex-thematic-classification" class="self-link">Example 5</a>

    :catalog dcat:themeTaxonomy :themes .

    :themes
      a skos:ConceptScheme ;
      skos:prefLabel "A set of domains to classify documents"@en ;
      .

    :dataset-001 dcat:theme :accountability  .

Notice that this dataset is classified under the domain represented by the relative URI `:accountability`. It is recommended to define the concept as part of the concepts scheme identified by the URI `:themes` that was used to describe the catalog domains. An example SKOS description:

<a href="#ex-theme-accountability" class="self-link">Example 6</a>

    :accountability
      a skos:Concept ;
      skos:inScheme :themes ;
      skos:prefLabel "Accountability"@en ;
      .

### 5.5 Classifying dataset types<a href="#classifying-dataset-types" class="self-link"></a>

The type or genre of a dataset can be indicated using the [`dct:type`](http://purl.org/dc/terms/type) property. It is recommended that the value of the property is taken from a well governed and broadly recognised set of resource types, such as the [DCMI Type Vocabulary](http://dublincore.org/documents/dcmi-terms/#section-7) \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\], the [MARC Genre/Terms Scheme](https://id.loc.gov/vocabulary/marcgt.html), the \[<a href="#bib-iso-19115-1" class="bibref" title="Geographic information -- Metadata -- Part 1: Fundamentals">ISO-19115-1</a>\] [`MD_Scope codes`](https://standards.iso.org/iso/19115/resources/Codelists/gml/MD_ScopeCode.xml), the [DataCite resource types](https://schema.datacite.org/meta/kernel-4.1/include/datacite-resourceType-v4.1.xsd), or the PARSE.Insight content-types from Re3data \[<a href="#bib-re3data-schema" class="bibref" title="Metadata Schema for the Description of Research Data Repositories: version 3">RE3DATA-SCHEMA</a>\].

In the following examples, a (notional) dataset is classified separately using values from different vocabularies.

<a href="#ex-dataset-type" class="self-link">Example 7</a>

    :dataset-001
      rdf:type  dcat:Dataset ;
      dct:type  <http://purl.org/dc/dcmitype/Text> ;
      .

    :dataset-001
      rdf:type  dcat:Dataset ;
      dct:type  <http://id.loc.gov/vocabulary/marcgt/man> ;
      .

It is also possible for multiple classifications to be present in a single description.

<a href="#ex-dataset-multiple-types" class="self-link">Example 8</a>

    :dataset-001
      rdf:type  dcat:Dataset ;
      dct:type  <http://purl.org/dc/dcmitype/Text> ;
      dct:type  <http://id.loc.gov/vocabulary/marcgt/man> ;
      dct:type  <http://registry.it.csiro.au/def/datacite/resourceType/Text> ;
      dct:type  <http://registry.it.csiro.au/def/re3data/contentType/doc> ;
    .

    <http://registry.it.csiro.au/def/datacite/resourceType/Text>
      rdfs:label "Text"@en ;
      dct:source "DataCite resource types"@en ;
      .

    <http://registry.it.csiro.au/def/re3data/contentType/doc>
      rdfs:label "Standard office documents"@en ;
      dct:source "Re3data content types"@en ;
      .

### 5.6 Describing catalog records metadata<a href="#describing-catalog-records-metadata" class="self-link"></a>

If the catalog publisher decides to keep metadata describing its records (i.e. the records containing metadata describing the datasets), `dcat:CatalogRecord` can be used. For example, while `:dataset-001` was issued on 2011-12-05, its description on Imaginary Catalog was added on 2011-12-11. This can be represented by DCAT as in <a href="#ex-catalog-record" class="box-ref">Example 9</a>:

<a href="#ex-catalog-record" class="self-link">Example 9</a>

    :catalog  dcat:record :record-001  .

    :record-001
      a dcat:CatalogRecord ;
      foaf:primaryTopic :dataset-001  ;
      dct:issued "2011-12-11"^^xsd:date  ;
      .

### 5.7 Dataset available only behind some Web page<a href="#example-landing-page" class="self-link"></a>

`:dataset-002` is available as a CSV file. However `:dataset-002` can only be obtained through some Web page where the user needs to follow some links, provide some information and check some boxes before accessing the data.

<a href="#ex-landing-page" class="self-link">Example 10</a>

    :dataset-002
      a dcat:Dataset ;
      dcat:landingPage <http://example.org/dataset-002.html> ;
      dcat:distribution :dataset-002-csv ;
      .
    :dataset-002-csv
      a dcat:Distribution ;
      dcat:accessURL <http://example.org/dataset-002.html> ;
      dcat:mediaType <https://www.iana.org/assignments/media-types/text/csv> ;
      .

Notice the use of a `dcat:landingPage` and the definition of the `dcat:Distribution` instance.

### 5.8 A dataset available as a download and behind some Web page<a href="#a-dataset-available-as-download-and-behind-some-web-page" class="self-link"></a>

On the other hand, `:dataset-003` can be obtained through some landing page but also can be downloaded from a known URL.

<a href="#ex-access-and-download-url" class="self-link">Example 11</a>

    :dataset-003
      a dcat:Dataset ;
      dcat:landingPage <http://example.org/dataset-003.html> ;
      dcat:distribution :dataset-003-csv ;
      .
    :dataset-003-csv
      a dcat:Distribution ;
      dcat:downloadURL <http://example.org/dataset-003.csv> ;
      dcat:mediaType <https://www.iana.org/assignments/media-types/text/csv> ;
      .

Notice that we used `dcat:downloadURL` with the downloadable distribution and that the other distribution accessible through the landing page does not have to be defined as a separate `dcat:Distribution` instance.

### 5.9 A dataset available through a service<a href="#a-dataset-available-from-a-service" class="self-link"></a>

`:dataset-004` is distributed in different representations from different services. The `dcat:accessURL` for each `dcat:Distribution` corresponds with the `dcat:endpointURL` of the service. Each service is characterized by its general type using `dct:type` (here using values from the INSPIRE spatial data service type vocabulary), its specific API definition using `dct:conformsTo`, with the detailed description of the individual endpoint parameters and options linked using `dcat:endpointDescription`.

<a href="#ex-access-service" class="self-link">Example 12</a>

    :dataset-004
      rdf:type dcat:Dataset ;
      dcat:distribution :dataset-004-csv ;
      dcat:distribution :dataset-004-png ;
      .

    :dataset-004-csv
      rdf:type dcat:Distribution ;
      dcat:accessService :table-service-005 ;
      dcat:accessURL <http://example.org/api/table-005> ;
      dcat:mediaType <https://www.iana.org/assignments/media-types/text/csv> ;
      .

    :dataset-004-png
      rdf:type dcat:Distribution ;
      dcat:accessService :figure-service-006 ;
      dcat:accessURL <http://example.org/api/figure-006> ;
      dcat:mediaType <https://www.iana.org/assignments/media-types/image/png> ;
      .

    :figure-service-006
      rdf:type dcat:DataService ;
      dct:conformsTo <http://example.org/apidef/figure/v1.0> ;
      dct:type <https://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/view> ;
      dcat:endpointDescription <http://example.org/api/figure-006/params> ;
      dcat:endpointURL <http://example.org/api/figure-006> ;
      dcat:servesDataset :dataset-004 ;
      .

    :table-service-005
      rdf:type dcat:DataService ;
      dct:conformsTo <http://example.org/apidef/table/v2.2> ;
      dct:type <https://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/download> ;
      dcat:endpointDescription <http://example.org/api/table-005/capability> ;
      dcat:endpointURL <http://example.org/api/table-005> ;
      dcat:servesDataset :dataset-003, :dataset-004 ;
      .

6. Vocabulary specification<a href="#vocabulary-specification" class="self-link"></a>
-------------------------------------------------------------------------------------

### 6.1 RDF representation<a href="#RDF-representation" class="self-link"></a>

The (revised) DCAT vocabulary is [available in RDF](https://www.w3.org/ns/dcat#). The primary artefact [`dcat2.ttl`](https://www.w3.org/ns/dcat2.ttl) is a serialization of the core DCAT vocabulary. Alongside it are a set of other RDF files that provide additional information, including:

1.  non-normative alignments to other vocabularies, provided for guidance
2.  additional axioms, which can be useful in some contexts
3.  the files [dcat2014.ttl](https://www.w3.org/ns/dcat2014.ttl) and [dcat2014.rdf](https://www.w3.org/ns/dcat2014.rdf) that correspond to the 2014 version of DCAT \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\]

### 6.2 Elements from other vocabularies<a href="#external-vocab" class="self-link"></a>

DCAT requires use of elements from a number of other vocabularies. Furthermore, DCAT may be augmented by additional elements from external vocabularies, following the usual RDFS \[<a href="#bib-rdf-schema" class="bibref" title="RDF Schema 1.1">RDF-SCHEMA</a>\] and OWL2 \[<a href="#bib-owl2-overview" class="bibref" title="OWL 2 Web Ontology Language Document Overview (Second Edition)">OWL2-OVERVIEW</a>\] rules and patterns.

#### 6.2.1 Complementary vocabularies<a href="#complements" class="self-link"></a>

Elements from a number of complementary vocabularies *MAY* be used together with DCAT to provide more detailed information. For example: properties from the VoID vocabulary \[<a href="#bib-void" class="bibref" title="Describing Linked Datasets with the VoID Vocabulary">VOID</a>\] allow the description of various statistics about a DCAT-described dataset if that dataset is in RDF format; properties from the Provenance ontology \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\] can be used to provide more information about the workflow that generated a dataset or service and related activities and agents; classes and properties from the Organization Ontology \[<a href="#bib-vocab-org" class="bibref" title="The Organization Ontology">VOCAB-ORG</a>\] can be used to explain additional details of responsible agents.

#### 6.2.2 Element definitions<a href="#dependencies" class="self-link"></a>

The definitions (including domain and range) of terms outside the DCAT namespace are provided here only for convenience and *MUST NOT* be considered normative. The authoritative definitions of these terms are in the corresponding specifications, i.e. \[<a href="#bib-dc11" class="bibref" title="Dublin Core Metadata Element Set, Version 1.1">DC11</a>\], \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\], \[<a href="#bib-foaf" class="bibref" title="FOAF Vocabulary Specification 0.99 (Paddington Edition)">FOAF</a>\], \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\], \[<a href="#bib-rdf-schema" class="bibref" title="RDF Schema 1.1">RDF-SCHEMA</a>\], \[<a href="#bib-skos-reference" class="bibref" title="SKOS Simple Knowledge Organization System Reference">SKOS-REFERENCE</a>\], \[<a href="#bib-xmlschema11-2" class="bibref" title="W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes">XMLSCHEMA11-2</a>\] and \[<a href="#bib-vcard-rdf" class="bibref" title="vCard Ontology - for describing People and Organizations">VCARD-RDF</a>\].

### 6.3 Class: Catalog<a href="#Class:Catalog" class="self-link"></a>

Note

The scope of DCAT 2014 was catalogs of datasets \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\]. This has been generalized, and properties common to all cataloged resources are now associated with a super-class [`dcat:Resource`](#Class:Resource).

Moreover, an explicit class for [data services](#Class:Data_Service) has been added in this revision of DCAT, to enable these to be part of a catalog.

Finally, `dcat:Catalog` has been made a sub-class of `dcat:Dataset`, and provision for catalogs to be composed of other catalogs is also enabled.

See [Issue \#116](https://github.com/w3c/dxwg/issues/116) and [Issue \#172](https://github.com/w3c/dxwg/issues/172).

The following properties are specific to this class: [catalog record](#Property:catalog_catalog_record), [has part](#Property:catalog_has_part), [dataset](#Property:catalog_dataset), [service](#Property:catalog_service), [catalog](#Property:catalog_catalog), [homepage](#Property:catalog_homepage), [themes](#Property:catalog_themes).

The following properties are inherited from the super-class [`dcat:Dataset`](#Class:Dataset): [distribution](#Property:dataset_distribution), [frequency](#Property:dataset_frequency), [spatial/geographic coverage](#Property:dataset_spatial), [spatial resolution](#Property:dataset_spatial_resolution), [temporal coverage](#Property:dataset_temporal), [temporal resolution](#Property:dataset_temporal_resolution), [was generated by](#Property:dataset_was_generated_by).

The following properties are inherited from the super-class [`dcat:Resource`](#Class:Resource): [access rights](#Property:resource_access_rights), [conforms to](#Property:resource_conforms_to), [contact point](#Property:resource_contact_point), [creator](#Property:resource_creator), [description](#Property:resource_description), [has policy](#Property:resource_has_policy), [identifier](#Property:resource_identifier), [is referenced by](#Property:resource_is_referenced_by), [keyword/tag](#Property:resource_keyword), [landing page](#Property:resource_landing_page), [license](#Property:resource_license), [catalog language](#Property:resource_language), [relation](#Property:resource_relation), [rights](#Property:resource_rights), [qualified relation](#Property:resource_qualified_relation), [publisher](#Property:resource_publisher), [release date](#Property:resource_release_date), [theme/category](#Property:resource_theme), [title](#Property:resource_title), [type/genre](#Property:resource_type), [update/modification date](#Property:resource_update_date), [qualified attribution](#Property:resource_qualified_attribution).

<table><thead><tr class="header"><th>RDF Class:</th><th><a href="http://www.w3.org/ns/dcat#Catalog">dcat:Catalog</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog)</td></tr><tr class="even"><td>Sub-class of:</td><td><a href="#Class:Dataset"><code>dcat:Dataset</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>A Web-based data catalog is typically represented as a single instance of this class.</td></tr><tr class="even"><td>See also:</td><td><a href="#Class:Catalog_Record" class="sec-ref">§ 6.5 Class: Catalog Record</a>, <a href="#Class:Dataset" class="sec-ref">§ 6.6 Class: Dataset</a></td></tr></tbody></table>

#### 6.3.1 Property: homepage<a href="#Property:catalog_homepage" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://xmlns.com/foaf/0.1/homepage">foaf:homepage</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A homepage of the catalog (a public Web document usually available in HTML).</td></tr><tr class="even"><td>Range:</td><td><a href="http://xmlns.com/foaf/0.1/Document"><code>foaf:Document</code></a></td></tr><tr class="odd"><td>Usage note:</td><td><a href="http://xmlns.com/foaf/0.1/homepage"><code>foaf:homepage</code></a> is an inverse functional property (IFP) which means that it <em>MUST</em> be unique and precisely identify the Web-page for the resource. This property indicates the canonical Web-page, which might be helpful in cases where there is more than one Web-page about the resource.</td></tr></tbody></table>

#### 6.3.2 Property: themes<a href="#Property:catalog_themes" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#themeTaxonomy">dcat:themeTaxonomy</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A knowledge organization system (KOS) used to classify catalog's datasets and services.</td></tr><tr class="even"><td>Domain:</td><td><a href="#Class:Catalog"><code>dcat:Catalog</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Resource"><code>rdfs:Resource</code></a></td></tr><tr class="even"><td>Usage note:</td><td>It is recommended that the taxonomy is organized in a <a href="http://www.w3.org/2004/02/skos/core#ConceptScheme"><code>skos:ConceptScheme</code></a>, <a href="http://www.w3.org/2004/02/skos/core#Collection"><code>skos:Collection</code></a>, <a href="http://www.w3.org/2002/07/owl#Ontology"><code>owl:Ontology</code></a> or similar, which allows each member to be denoted by an IRI and published as Linked Data.</td></tr></tbody></table>

#### 6.3.3 Property: has part<a href="#Property:catalog_has_part" class="self-link"></a>

Note

Property added in this context in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/hasPart">dct:hasPart</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>An item that is listed in the catalog.</td></tr><tr class="even"><td>Domain:</td><td><a href="#Class:Catalog"><code>dcat:Catalog</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="#Class:Resource"><code>dcat:Resource</code></a></td></tr><tr class="even"><td>Usage note:</td><td>This is the most general predicate for membership of a catalog. Use of a more specific sub-property is recommended when available.</td></tr><tr class="odd"><td>See also:</td><td>Sub-properties of <code>dct:hasPart</code> in particular <a href="#Property:catalog_dataset"><code>dcat:dataset</code></a>, <a href="#Property:catalog_catalog"><code>dcat:catalog</code></a>, <a href="#Property:catalog_service"><code>dcat:service</code></a>.</td></tr></tbody></table>

#### 6.3.4 Property: dataset<a href="#Property:catalog_dataset" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#dataset">dcat:dataset</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A collection of data that is listed in the catalog.</td></tr><tr class="even"><td>Sub-property of:</td><td><a href="http://purl.org/dc/terms/hasPart"><code>dct:hasPart</code></a></td></tr><tr class="odd"><td>Domain:</td><td><a href="#Class:Catalog"><code>dcat:Catalog</code></a></td></tr><tr class="even"><td>Range:</td><td><a href="#Class:Dataset"><code>dcat:Dataset</code></a></td></tr></tbody></table>

#### 6.3.5 Property: service<a href="#Property:catalog_service" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#service">dcat:service</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A site or end-point that is listed in the catalog.</td></tr><tr class="even"><td>Sub-property of:</td><td><a href="http://purl.org/dc/terms/hasPart"><code>dct:hasPart</code></a></td></tr><tr class="odd"><td>Domain:</td><td><a href="#Class:Catalog"><code>dcat:Catalog</code></a></td></tr><tr class="even"><td>Range:</td><td><a href="#Class:Data_Service"><code>dcat:DataService</code></a></td></tr></tbody></table>

#### 6.3.6 Property: catalog<a href="#Property:catalog_catalog" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#catalog">dcat:catalog</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A catalog whose contents are of interest in the context of this catalog.</td></tr><tr class="even"><td>Sub-property of:</td><td><a href="http://purl.org/dc/terms/hasPart"><code>dct:hasPart</code></a></td></tr><tr class="odd"><td>Domain:</td><td><a href="#Class:Catalog"><code>dcat:Catalog</code></a></td></tr><tr class="even"><td>Range:</td><td><a href="#Class:Catalog"><code>dcat:Catalog</code></a></td></tr></tbody></table>

#### 6.3.7 Property: catalog record<a href="#Property:catalog_catalog_record" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#record">dcat:record</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A record describing the registration of a single dataset or data service that is part of the catalog.</td></tr><tr class="even"><td>Domain:</td><td><a href="#Class:Catalog"><code>dcat:Catalog</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="#Class:Catalog_Record"><code>dcat:CatalogRecord</code></a></td></tr></tbody></table>

### 6.4 Class: Cataloged Resource<a href="#Class:Resource" class="self-link"></a>

Note

New class added in this revision of DCAT.

The following properties are specific to this class: [access rights](#Property:resource_access_rights), [conforms to](#Property:resource_conforms_to), [contact point](#Property:resource_contact_point), [creator](#Property:resource_creator), [description](#Property:resource_description), [has policy](#Property:resource_has_policy), [identifier](#Property:resource_identifier), [is referenced by](#Property:resource_is_referenced_by), [keyword/tag](#Property:resource_keyword), [landing page](#Property:resource_landing_page), [license](#Property:resource_license), [resource language](#Property:resource_language), [relation](#Property:resource_relation), [rights](#Property:resource_rights), [qualified relation](#Property:resource_qualified_relation), [publisher](#Property:resource_publisher), [release date](#Property:resource_release_date), [theme/category](#Property:resource_theme), [title](#Property:resource_title), [type/genre](#Property:resource_type), [update/modification date](#Property:resource_update_date), [qualified attribution](#Property:resource_qualified_attribution).

<table><thead><tr class="header"><th>RDF Class:</th><th><a href="http://www.w3.org/ns/dcat#Resource">dcat:Resource</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Resource published or curated by a single agent.</td></tr><tr class="even"><td>Usage note:</td><td>The class of all cataloged resources, the super-class of <a href="#Class:Dataset"><code>dcat:Dataset</code></a>, <a href="#Class:Data_Service"><code>dcat:DataService</code></a>, <a href="#Class:Catalog"><code>dcat:Catalog</code></a> and any other member of a <a href="#Class:Catalog"><code>dcat:Catalog</code></a>. This class carries properties common to all cataloged resources, including datasets and data services. It is strongly recommended to use a more specific sub-class. When describing a resource which is not a dcat:Dataset or dcat:DataService, it is recommended to create a suitable sub-class of dcat:Resource, or use dcat:Resource with the dct:type property to indicate the specific type.</td></tr><tr class="odd"><td>Usage note:</td><td><a href="#Class:Resource"><code>dcat:Resource</code></a> is an extension point that enables the definition of any kind of catalog. Additional sub-classes may be defined in a DCAT profile or other DCAT application for catalogs of other kinds of resources.</td></tr><tr class="even"><td>See also:</td><td><a href="#Class:Catalog_Record" class="sec-ref">§ 6.5 Class: Catalog Record</a></td></tr></tbody></table>

#### 6.4.1 Property: access rights<a href="#Property:resource_access_rights" class="self-link"></a>

Note

Property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/accessRights">dct:accessRights</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Information about who can access the resource or an indication of its security status.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/RightsStatement"><code>dct:RightsStatement</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Information about licenses and rights <em>MAY</em> be provided for the Resource. See also guidance at <a href="#license-rights" class="sec-ref">§ 8. License and rights statements</a>.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:resource_rights" class="sec-ref">§ 6.4.20 Property: rights</a></td></tr></tbody></table>

#### 6.4.2 Property: conforms to<a href="#Property:resource_conforms_to" class="self-link"></a>

Note

Property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/conformsTo">dct:conformsTo</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>An established standard to which the described resource conforms.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/Standard"><code>dct:Standard</code></a> ("A basis for comparison; a reference point against which other things can be evaluated." [<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>])</td></tr><tr class="odd"><td>Usage note:</td><td>This property <em>SHOULD</em> be used to indicate the model, schema, ontology, view or profile that the cataloged resource content conforms to.</td></tr></tbody></table>

Note

[`dct:Standard`](http://purl.org/dc/terms/Standard) is defined in \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\] as "A basis for comparison; a reference point against which other things can be evaluated." The target resource is not restricted to formal standards issued by bodies like ISO and W3C. In this context, it is any resource that specifies one or more aspects of the cataloged resource content, for example schema, semantics, syntax, usage guidelines, file format, or specific serialization. The meaning of conformance is determined by provisions in the target standard.

#### 6.4.3 Property: contact point<a href="#Property:resource_contact_point" class="self-link"></a>

Note

In DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] the domain of `dcat:contactPoint` was `dcat:Dataset`, which limited use of this property in other contexts. The domain has been relaxed in this revision. See [Issue \#95](https://github.com/w3c/dxwg/issues/95).

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#contactPoint">dcat:contactPoint</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Relevant contact information for the cataloged resource. Use of vCard is recommended [<a href="#bib-vcard-rdf" class="bibref" title="vCard Ontology - for describing People and Organizations">VCARD-RDF</a>].</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/TR/vcard-rdf/#Kind"><code>vcard:Kind</code></a></td></tr></tbody></table>

#### 6.4.4 Property: resource creator<a href="#Property:resource_creator" class="self-link"></a>

Note

Property added in this revision of DCAT, specifically to address data citation requirements.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/creator">dct:creator</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The entity responsible for producing the resource.</td></tr><tr class="even"><td>Range:</td><td><a href="http://xmlns.com/foaf/0.1/Agent"><code>foaf:Agent</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Resources of type <a href="http://xmlns.com/foaf/0.1/Agent"><code>foaf:Agent</code></a> are recommended as values for this property.</td></tr><tr class="even"><td>See also:</td><td><a href="#Class:Organization_Person" class="sec-ref">§ 6.11 Class: Organization/Person</a></td></tr></tbody></table>

Note

This property is added to the [`dcat:Resource`](#Class:Resource) class, as the `dcat:Dataset` super-class. For more details, see <a href="#data-citation" class="sec-ref">§ 11. Data citation</a>.

The use of the \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\] qualified-attribution pattern is described in <a href="#qualified-attribution" class="sec-ref">§ 13.1 Relationships between datasets and agents</a>. `dct:creator` corresponds with a general attribution with the role 'creator'.

#### 6.4.5 Property: description<a href="#Property:resource_description" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/description">dct:description</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A free-text account of the item.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a></td></tr></tbody></table>

#### 6.4.6 Property: title<a href="#Property:resource_title" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/title">dct:title</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A name given to the item.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a></td></tr></tbody></table>

#### 6.4.7 Property: release date<a href="#Property:resource_release_date" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/issued">dct:issued</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Date of formal issuance (e.g., publication) of the item.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a> encoded using the relevant ISO 8601 Date and Time compliant string [<a href="#bib-datetime" class="bibref" title="Date and Time Formats">DATETIME</a>] and typed using the appropriate XML Schema datatype [<a href="#bib-xmlschema11-2" class="bibref" title="W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes">XMLSCHEMA11-2</a>] (<a href="https://www.w3.org/TR/xmlschema11-2/#gYear"><code>xsd:gYear</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#gYearMonth"><code>xsd:gYearMonth</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#date"><code>xsd:date</code></a>, or <a href="https://www.w3.org/TR/xmlschema11-2/#dateTime"><code>xsd:dateTime</code></a>).</td></tr><tr class="odd"><td>Usage note:</td><td>This property <em>SHOULD</em> be set using the first known date of issuance.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:record_listing_date" class="sec-ref">§ 6.5.3 Property: listing date</a> and <a href="#Property:distribution_release_date" class="sec-ref">§ 6.7.3 Property: release date</a></td></tr></tbody></table>

#### 6.4.8 Property: update/modification date<a href="#Property:resource_update_date" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/modified">dct:modified</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Most recent date on which the item was changed, updated or modified.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a> encoded using the relevant ISO 8601 Date and Time compliant string [<a href="#bib-datetime" class="bibref" title="Date and Time Formats">DATETIME</a>] and typed using the appropriate XML Schema datatype [<a href="#bib-xmlschema11-2" class="bibref" title="W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes">XMLSCHEMA11-2</a>] (<a href="https://www.w3.org/TR/xmlschema11-2/#gYear"><code>xsd:gYear</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#gYearMonth"><code>xsd:gYearMonth</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#date"><code>xsd:date</code></a>, or <a href="https://www.w3.org/TR/xmlschema11-2/#dateTime"><code>xsd:dateTime</code></a>).</td></tr><tr class="odd"><td>Usage note:</td><td>The value of this property indicates a change to the actual item, not a change to the catalog record. An absent value <em>MAY</em> indicate that the item has never changed after its initial publication, or that the date of last modification is not known, or that the item is continuously updated.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:dataset_frequency" class="sec-ref">§ 6.6.2 Property: frequency</a>, <a href="#Property:record_update_date" class="sec-ref">§ 6.5.4 Property: update/modification date</a> and <a href="#Property:distribution_update_date" class="sec-ref">§ 6.7.4 Property: update/modification date</a></td></tr></tbody></table>

#### 6.4.9 Property: language<a href="#Property:resource_language" class="self-link"></a>

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/language">dct:language</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A language of the item. This refers to the natural language used for textual metadata (i.e. titles, descriptions, etc) of a cataloged resource (i.e. dataset or service) or the textual values of a dataset distribution</td></tr><tr class="even"><td>Range:</td><td><p><a href="http://purl.org/dc/terms/LinguisticSystem"><code>dct:LinguisticSystem</code></a></p><p>Resources defined by the Library of Congress (<a href="http://id.loc.gov/vocabulary/iso639-1.html">ISO 639-1</a>, <a href="http://id.loc.gov/vocabulary/iso639-2.html">ISO 639-2</a>) <em>SHOULD</em> be used.</p><p>If a ISO 639-1 (two-letter) code is defined for language, then its corresponding IRI <em>SHOULD</em> be used; if no ISO 639-1 code is defined, then IRI corresponding to the ISO 639-2 (three-letter) code <em>SHOULD</em> be used.</p></td></tr><tr class="odd"><td>Usage note:</td><td>Repeat this property if the resource is available in multiple languages.</td></tr><tr class="even"><td>Usage note:</td><td>The value(s) provided for members of a catalog (i.e. dataset or service) override the value(s) provided for the catalog if they conflict.</td></tr><tr class="odd"><td>Usage note:</td><td>If representations of a dataset are available for each language separately, define an instance of <code>dcat:Distribution</code> for each language and describe the specific language of each distribution using <code>dct:language</code> (i.e. the dataset will have multiple <code>dct:language</code> values and each distribution will have just one as the value of its <code>dct:language</code> property).</td></tr></tbody></table>

#### 6.4.10 Property: publisher<a href="#Property:resource_publisher" class="self-link"></a>

Note

The use of the \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\] qualified-attribution pattern is described in <a href="#qualified-attribution" class="sec-ref">§ 13.1 Relationships between datasets and agents</a>. `dct:publisher` corresponds with a general attribution with the role 'publisher'.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/publisher">dct:publisher</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The entity responsible for making the item available.</td></tr><tr class="even"><td>Usage note:</td><td>Resources of type <a href="http://xmlns.com/foaf/0.1/Agent"><code>foaf:Agent</code></a> are recommended as values for this property.</td></tr><tr class="odd"><td>See also:</td><td><a href="#Class:Organization_Person" class="sec-ref">§ 6.11 Class: Organization/Person</a></td></tr></tbody></table>

#### 6.4.11 Property: identifier<a href="#Property:resource_identifier" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/identifier">dct:identifier</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A unique identifier of the item.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>The identifier might be used as part of the URI of the item, but still having it represented explicitly is useful.</td></tr></tbody></table>

#### 6.4.12 Property: theme/category<a href="#Property:resource_theme" class="self-link"></a>

Note

In DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] the domain of `dcat:theme` was `dcat:Dataset`, which limited use of this property in other contexts. The domain has been relaxed in this revision. See [Issue \#123](https://github.com/w3c/dxwg/issues/123).

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#theme">dcat:theme</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A main category of the resource. A resource can have multiple themes.</td></tr><tr class="even"><td>Sub-property of:</td><td><a href="http://purl.org/dc/terms/subject"><code>dct:subject</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="http://www.w3.org/2004/02/skos/core#Concept"><code>skos:Concept</code></a></td></tr><tr class="even"><td>Usage note:</td><td>The set of <a href="http://www.w3.org/2004/02/skos/core#Concept"><code>skos:Concept</code></a>s used to categorize the resources are organized in a <a href="http://www.w3.org/2004/02/skos/core#ConceptScheme"><code>skos:ConceptScheme</code></a> describing all the categories and their relations in the catalog.</td></tr><tr class="odd"><td>See also:</td><td><a href="#Property:catalog_themes" class="sec-ref">§ 6.3.2 Property: themes</a></td></tr></tbody></table>

#### 6.4.13 Property: type/genre<a href="#Property:resource_type" class="self-link"></a>

Note

Property added in this revision of DCAT. See [Issue \#64](https://github.com/w3c/dxwg/issues/64).

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/type">dct:type</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The nature or genre of the resource.</td></tr><tr class="even"><td>Sub-property of:</td><td><a href="http://purl.org/dc/elements/1.1/type"><code>dc:type</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Class"><code>rdfs:Class</code></a></td></tr><tr class="even"><td>Usage note:</td><td>The value <em>SHOULD</em> be taken from a well governed and broadly recognised controlled vocabulary, such as:<ol><li><a href="http://dublincore.org/documents/dcmi-terms/#section-7">DCMI Type vocabulary</a> [<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>]</li><li>[<a href="#bib-iso-19115-1" class="bibref" title="Geographic information -- Metadata -- Part 1: Fundamentals">ISO-19115-1</a>] <a href="https://standards.iso.org/iso/19115/resources/Codelists/gml/MD_ScopeCode.xml">scope codes</a></li><li><a href="https://schema.datacite.org/meta/kernel-4.1/include/datacite-resourceType-v4.1.xsd">Datacite resource types</a> [<a href="#bib-datacite" class="bibref" title="DataCite Metadata Schema">DataCite</a>]</li><li>PARSE.Insight content-types used by <a href="https://www.re3data.org/">re3data.org</a> [<a href="#bib-re3data-schema" class="bibref" title="Metadata Schema for the Description of Research Data Repositories: version 3">RE3DATA-SCHEMA</a>] (see item 15 contentType)</li><li><a href="http://id.loc.gov/vocabulary/marcgt.html">MARC intellectual resource types</a></li></ol>Some members of these controlled vocabularies are not strictly suitable for datasets or data services (e.g. DCMI Type <em>Event</em>, <em>PhysicalObject</em>; [<a href="#bib-iso-19115-1" class="bibref" title="Geographic information -- Metadata -- Part 1: Fundamentals">ISO-19115-1</a>] <em>CollectionHardware</em>, <em>CollectionSession</em>, <em>Initiative</em>, <em>Sample</em>, <em>Repository</em>), but might be used in the context of other kinds of catalogs defined in DCAT profiles or applications.</td></tr><tr class="odd"><td>Usage note:</td><td>To describe the file format, physical medium, or dimensions of the resource, use the <a href="http://purl.org/dc/terms/format"><code>dct:format</code></a> element.</td></tr></tbody></table>

#### 6.4.14 Property: resource relation<a href="#Property:resource_relation" class="self-link"></a>

Note

Property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/relation">dct:relation</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A resource with an unspecified relationship to the cataloged item.</td></tr><tr class="even"><td>Usage note:</td><td><a href="http://purl.org/dc/terms/relation"><code>dct:relation</code></a> <em>SHOULD</em> be used where the nature of the relationship between a cataloged item and related resources is not known. A more specific sub-property <em>SHOULD</em> be used if the nature of the relationship of the link is known. The property <a href="#Property:dataset_distribution"><code>dcat:distribution</code></a> <em>SHOULD</em> be used to link from a <a href="#Class:Dataset"><code>dcat:Dataset</code></a> to a representation of the dataset, described as a <a href="#Class:Distribution"><code>dcat:Distribution</code></a></td></tr><tr class="odd"><td>See also:</td><td>Sub-properties of <code>dct:relation</code> in particular <a href="#Property:dataset_distribution"><code>dcat:distribution</code></a>, <a href="http://purl.org/dc/terms/hasPart"><code>dct:hasPart</code></a>, (and its sub-properties <a href="#Property:catalog_catalog"><code>dcat:catalog</code></a>, <a href="#Property:catalog_dataset"><code>dcat:dataset</code></a>, <a href="#Property:catalog_service"><code>dcat:service</code></a> ), <a href="http://purl.org/dc/terms/isPartOf"><code>dct:isPartOf</code></a>, <a href="http://purl.org/dc/terms/conformsTo"><code>dct:conformsTo</code></a>, <a href="http://purl.org/dc/terms/isFormatOf"><code>dct:isFormatOf</code></a>, <a href="http://purl.org/dc/terms/hasFormat"><code>dct:hasFormat</code></a>, <a href="http://purl.org/dc/terms/isVersionOf"><code>dct:isVersionOf</code></a>, <a href="http://purl.org/dc/terms/hasVersion"><code>dct:hasVersion</code></a>, <a href="http://purl.org/dc/terms/replaces"><code>dct:replaces</code></a>, <a href="http://purl.org/dc/terms/isReplacedBy"><code>dct:isReplacedBy</code></a>, <a href="http://purl.org/dc/terms/references"><code>dct:references</code></a>, <a href="http://purl.org/dc/terms/isReferencedBy"><code>dct:isReferencedBy</code></a>, <a href="http://purl.org/dc/terms/requires"><code>dct:requires</code></a>, <a href="http://purl.org/dc/terms/isRequiredBy"><code>dct:isRequiredBy</code></a></td></tr></tbody></table>

Many existing and legacy catalogs do not distinguish between dataset components, representations, documentation, schemata and other resources that are lumped together as part of a dataset. [`dct:relation`](http://purl.org/dc/terms/relation) is a super-property of a number of more specific properties which express more precise relationships, so use of `dct:relation` is not inconsistent with a subsequent reclassification with more specific semantics, though the more specialized sub-properties *SHOULD* be used to link a dataset to component and supplementary resources if possible.

#### 6.4.15 Property: qualified relation<a href="#Property:resource_qualified_relation" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#qualifiedRelation">dcat:qualifiedRelation</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Link to a description of a relationship with another resource</td></tr><tr class="even"><td>Sub-property of:</td><td><a href="https://www.w3.org/TR/prov-o/#qualifiedInfluence"><code>prov:qualifiedInfluence</code></a></td></tr><tr class="odd"><td>Domain:</td><td><a href="#Class:Resource"><code>dcat:Resource</code></a></td></tr><tr class="even"><td>Range:</td><td><a href="#Class:Relationship"><code>dcat:Relationship</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Used to link to another resource where the nature of the relationship is known but does not match one of the standard [<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>] properties (<a href="http://purl.org/dc/terms/hasPart"><code>dct:hasPart</code></a>, <a href="http://purl.org/dc/terms/isPartOf"><code>dct:isPartOf</code></a>, <a href="http://purl.org/dc/terms/conformsTo"><code>dct:conformsTo</code></a>, <a href="http://purl.org/dc/terms/isFormatOf"><code>dct:isFormatOf</code></a>, <a href="http://purl.org/dc/terms/hasFormat"><code>dct:hasFormat</code></a>, <a href="http://purl.org/dc/terms/isVersionOf"><code>dct:isVersionOf</code></a>, <a href="http://purl.org/dc/terms/hasVersion"><code>dct:hasVersion</code></a>, <a href="http://purl.org/dc/terms/replaces"><code>dct:replaces</code></a>, <a href="http://purl.org/dc/terms/isReplacedBy"><code>dct:isReplacedBy</code></a>, <a href="http://purl.org/dc/terms/references"><code>dct:references</code></a>, <a href="http://purl.org/dc/terms/isReferencedBy"><code>dct:isReferencedBy</code></a>, <a href="http://purl.org/dc/terms/requires"><code>dct:requires</code></a>, <a href="http://purl.org/dc/terms/isRequiredBy"><code>dct:isRequiredBy</code></a>) or [<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>] properties (<a href="https://www.w3.org/TR/prov-o/#wasDerivedFrom"><code>prov:wasDerivedFrom</code></a>, <a href="https://www.w3.org/TR/prov-o/#wasInfluencedBy"><code>prov:wasInfluencedBy</code></a>, <a href="https://www.w3.org/TR/prov-o/#wasQuotedFrom"><code>prov:wasQuotedFrom</code></a>, <a href="https://www.w3.org/TR/prov-o/#wasRevisionOf"><code>prov:wasRevisionOf</code></a>, <a href="https://www.w3.org/TR/prov-o/#hadPrimarySource"><code>prov:hadPrimarySource</code></a>, <a href="https://www.w3.org/TR/prov-o/#alternateOf"><code>prov:alternateOf</code></a>, <a href="https://www.w3.org/TR/prov-o/#specializationOf"><code>prov:specializationOf</code></a>).</td></tr></tbody></table>

This DCAT property follows the common qualified relation pattern described in <a href="#qualified-forms" class="sec-ref">§ 13. Qualified relations</a> .

Note

Since this property is a sub-property of [`prov:qualifiedInfluence`](https://www.w3.org/TR/prov-o/#qualifiedInfluence), use of this property on an individual entails that the context resource is a member of the class [`prov:Entity`](https://www.w3.org/TR/prov-o/#Entity) \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\] .

#### 6.4.16 Property: keyword/tag<a href="#Property:resource_keyword" class="self-link"></a>

Note

In DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] the domain of `dcat:keyword` was `dcat:Dataset`, which limited use of this property in other contexts. The domain has been relaxed in this revision - see [Issue \#121](https://github.com/w3c/dxwg/issues/121).

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#keyword">dcat:keyword</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A keyword or tag describing the resource.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a></td></tr></tbody></table>

#### 6.4.17 Property: landing page<a href="#Property:resource_landing_page" class="self-link"></a>

Note

In DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] the domain of `dcat:landingPage` was `dcat:Dataset`, which limited use of this property in other contexts. The domain has been relaxed in this revision - see [Issue \#122](https://github.com/w3c/dxwg/issues/122).

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#landingPage">dcat:landingPage</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A Web page that can be navigated to in a Web browser to gain access to the catalog, a dataset, its distributions and/or additional information.</td></tr><tr class="even"><td>Sub-property of:</td><td><a href="http://xmlns.com/foaf/0.1/page"><code>foaf:page</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="http://xmlns.com/foaf/0.1/Document"><code>foaf:Document</code></a></td></tr><tr class="even"><td>Usage note:</td><td>If the distribution(s) are accessible only through a landing page (i.e. direct download URLs are not known), then the landing page link <em>SHOULD</em> be duplicated as <code>dcat:accessURL</code> on a distribution. (see <a href="#example-landing-page" class="sec-ref">§ 5.7 Dataset available only behind some Web page</a>)</td></tr></tbody></table>

#### 6.4.18 Property: qualified attribution<a href="#Property:resource_qualified_attribution" class="self-link"></a>

Note

Property added in this context in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="https://www.w3.org/TR/prov-o/#qualifiedAttribution">prov:qualifiedAttribution</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Link to an Agent having some form of responsibility for the resource</td></tr><tr class="even"><td>Sub-property of:</td><td><a href="https://www.w3.org/TR/prov-o/#qualifiedInfluence"><code>prov:qualifiedInfluence</code></a></td></tr><tr class="odd"><td>Domain:</td><td><a href="https://www.w3.org/TR/prov-o/#Entity"><code>prov:Entity</code></a></td></tr><tr class="even"><td>Range:</td><td><a href="https://www.w3.org/TR/prov-o/#Attribution"><code>prov:Attribution</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Used to link to an Agent where the nature of the relationship is known but does not match one of the standard [<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>] properties (<a href="http://purl.org/dc/terms/creator"><code>dct:creator</code></a>, <a href="http://purl.org/dc/terms/creator"><code>dct:publisher</code></a>). Use <code>dcat:hadRole</code> on the <a href="https://www.w3.org/TR/prov-o/#Attribution"><code>prov:Attribution</code></a> to capture the responsibility of the Agent with respect to the Resource. See <a href="#qualified-attribution" class="sec-ref">§ 13.1 Relationships between datasets and agents</a> for usage examples.</td></tr></tbody></table>

This DCAT property follows the common qualified relation pattern described in <a href="#qualified-forms" class="sec-ref">§ 13. Qualified relations</a> .

Note

Use of this property on an individual entails that the context resource is a member of the class [`prov:Entity`](https://www.w3.org/TR/prov-o/#Entity) \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\].

#### 6.4.19 Property: license<a href="#Property:resource_license" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/license">dct:license</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A legal document under which the resource is made available.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/LicenseDocument"><code>dct:LicenseDocument</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Information about licenses and rights <em>MAY</em> be provided for the Resource. See also guidance at <a href="#license-rights" class="sec-ref">§ 8. License and rights statements</a>.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:resource_rights" class="sec-ref">§ 6.4.20 Property: rights</a>, <a href="#Property:distribution_license" class="sec-ref">§ 6.7.5 Property: license</a></td></tr></tbody></table>

#### 6.4.20 Property: rights<a href="#Property:resource_rights" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/rights">dct:rights</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A statement that concerns all rights not addressed with <a href="#Property:resource_license">dct:license</a> or <a href="#Property:resource_access_rights">dct:accessRights</a>, such as copyright statements.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/RightsStatement"><code>dct:RightsStatement</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Information about licenses and rights <em>MAY</em> be provided for the Resource. See also guidance at <a href="#license-rights" class="sec-ref">§ 8. License and rights statements</a>.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:resource_license" class="sec-ref">§ 6.4.19 Property: license</a>, <a href="#Property:distribution_rights" class="sec-ref">§ 6.7.7 Property: rights</a>, <a href="#Property:resource_access_rights" class="sec-ref">§ 6.4.1 Property: access rights</a></td></tr></tbody></table>

#### 6.4.21 Property: has policy<a href="#Property:resource_has_policy" class="self-link"></a>

Note

Property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="https://www.w3.org/TR/odrl-vocab/#term-hasPolicy">odrl:hasPolicy</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>An ODRL conformant policy expressing the rights associated with the resource.</td></tr><tr class="even"><td>Range:</td><td><a href="https://www.w3.org/TR/odrl-vocab/#term-Policy"><code>odrl:Policy</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Information about rights expressed as an ODRL policy [<a href="#bib-odrl-model" class="bibref" title="ODRL Information Model 2.2">ODRL-MODEL</a>] using the ODRL vocabulary [<a href="#bib-odrl-vocab" class="bibref" title="ODRL Vocabulary &amp; Expression 2.2">ODRL-VOCAB</a>] <em>MAY</em> be provided for the resource. See also guidance at <a href="#license-rights" class="sec-ref">§ 8. License and rights statements</a>.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:resource_license" class="sec-ref">§ 6.4.19 Property: license</a>, <a href="#Property:resource_access_rights" class="sec-ref">§ 6.4.1 Property: access rights</a>, <a href="#Property:resource_rights" class="sec-ref">§ 6.4.20 Property: rights</a></td></tr></tbody></table>

#### 6.4.22 Property: is referenced by<a href="#Property:resource_is_referenced_by" class="self-link"></a>

Note

Property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/isReferencedBy">dct:isReferencedBy</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A related resource, such as a publication, that references, cites, or otherwise points to the cataloged resource.</td></tr><tr class="even"><td>Usage note:</td><td>In relation to the use case of data citation, when the cataloged resource is a dataset, the <code>dct:isReferencedBy</code> property allows to relate the dataset to the resources (such as scholarly publications) that cite or point to the dataset. Multiple <code>dct:isReferencedBy</code> properties can be used to indicate the dataset has been referenced by multiple publications, or other resources.</td></tr><tr class="odd"><td>Usage note:</td><td>This property is used to associate a resource with the resource (of type <code>dcat:Resource</code>) in question. For other relations to resources not covered with this property, the more generic property <a href="#Property:resource_qualified_relation"><code>dcat:qualifiedRelation</code></a> can be used. See also <a href="#qualified-forms" class="sec-ref">§ 13. Qualified relations</a>.</td></tr></tbody></table>

For examples on the use of this property, see <a href="#examples-dataset-publication" class="sec-ref">§ C.3 Link datasets and publications</a>.

### 6.5 Class: Catalog Record<a href="#Class:Catalog_Record" class="self-link"></a>

The following properties are specific to this class (`dcat:CatalogRecord`): [conforms to](#Property:record_conforms_to), [description](#Property:record_description), [listing date](#Property:record_listing_date), [primary topic](#Property:record_primary_topic), [title](#Property:record_title), [update/modification date](#Property:record_update_date).

<table><thead><tr class="header"><th>RDF Class:</th><th><a href="http://www.w3.org/ns/dcat#CatalogRecord">dcat:CatalogRecord</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A record in a catalog, describing the registration of a single <a href="#Class:Resource"><code>dcat:Resource</code></a>.</td></tr><tr class="even"><td>Usage note</td><td>This class is optional and not all catalogs will use it. It exists for catalogs where a distinction is made between metadata about a <em>dataset or service</em> and metadata about the <em>entry in the catalog about the dataset or service</em>. For example, the <em>publication date</em> property of the <em>dataset</em> reflects the date when the information was originally made available by the publishing agency, while the publication date of the <em>catalog record</em> is the date when the dataset was added to the catalog. In cases where both dates differ, or where only the latter is known, the <em>publication date</em> <em>SHOULD</em> only be specified for the catalog record. Notice that the W3C PROV Ontology [<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>] allows describing further provenance information such as the details of the process and the agent involved in a particular change to a dataset or its registration.</td></tr><tr class="odd"><td>See also</td><td><a href="#Class:Dataset" class="sec-ref">§ 6.6 Class: Dataset</a></td></tr></tbody></table>

If a catalog is represented as an RDF Dataset with named graphs (as defined in \[<a href="#bib-sparql11-query" class="bibref" title="SPARQL 1.1 Query Language">SPARQL11-QUERY</a>\]), then it is appropriate to place the description of each dataset (consisting of all RDF triples that mention the `dcat:Dataset`, `dcat:CatalogRecord`, and any of its `dcat:Distribution`s) into a separate named graph. The name of that graph *SHOULD* be the IRI of the catalog record.

#### 6.5.1 Property: title<a href="#Property:record_title" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/title">dct:title</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A name given to the record.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a></td></tr></tbody></table>

#### 6.5.2 Property: description<a href="#Property:record_description" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/description">dct:description</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A free-text account of the record.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a></td></tr></tbody></table>

#### 6.5.3 Property: listing date<a href="#Property:record_listing_date" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/issued">dct:issued</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The date of listing (i.e. formal recording) of the corresponding dataset or service in the catalog.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a> encoded using the relevant ISO 8601 Date and Time compliant string [<a href="#bib-datetime" class="bibref" title="Date and Time Formats">DATETIME</a>] and typed using the appropriate XML Schema datatype [<a href="#bib-xmlschema11-2" class="bibref" title="W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes">XMLSCHEMA11-2</a>] (<a href="https://www.w3.org/TR/xmlschema11-2/#gYear"><code>xsd:gYear</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#gYearMonth"><code>xsd:gYearMonth</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#date"><code>xsd:date</code></a>, or <a href="https://www.w3.org/TR/xmlschema11-2/#dateTime"><code>xsd:dateTime</code></a>).</td></tr><tr class="odd"><td>Usage note:</td><td>This indicates the date of listing the dataset in the catalog and not the publication date of the dataset itself.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:resource_release_date" class="sec-ref">§ 6.4.7 Property: release date</a></td></tr></tbody></table>

#### 6.5.4 Property: update/modification date<a href="#Property:record_update_date" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/modified">dct:modified</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Most recent date on which the catalog entry was changed, updated or modified.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a> encoded using the relevant ISO 8601 Date and Time compliant string [<a href="#bib-datetime" class="bibref" title="Date and Time Formats">DATETIME</a>] and typed using the appropriate XML Schema datatype [<a href="#bib-xmlschema11-2" class="bibref" title="W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes">XMLSCHEMA11-2</a>] (<a href="https://www.w3.org/TR/xmlschema11-2/#gYear"><code>xsd:gYear</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#gYearMonth"><code>xsd:gYearMonth</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#date"><code>xsd:date</code></a>, or <a href="https://www.w3.org/TR/xmlschema11-2/#dateTime"><code>xsd:dateTime</code></a>).</td></tr><tr class="odd"><td>Usage note:</td><td>This indicates the date of last change of a catalog entry, i.e. the catalog metadata description of the dataset, and not the date of the dataset itself.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:resource_update_date" class="sec-ref">§ 6.4.8 Property: update/modification date</a></td></tr></tbody></table>

#### 6.5.5 Property: primary topic<a href="#Property:record_primary_topic" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://xmlns.com/foaf/0.1/primaryTopic">foaf:primaryTopic</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The <a href="#Class:Resource"><code>dcat:Resource</code></a> (dataset or service) described in the record.</td></tr><tr class="even"><td>Usage note:</td><td><a href="http://xmlns.com/foaf/0.1/primaryTopic"><code>foaf:primaryTopic</code></a> property is functional: each catalog record can have at most one primary topic i.e. describes one dataset or service.</td></tr></tbody></table>

#### 6.5.6 Property: conforms to<a href="#Property:record_conforms_to" class="self-link"></a>

Note

Property added in this context in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/conformsTo">dct:conformsTo</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>An established standard to which the described resource conforms.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/Standard"><code>dct:Standard</code></a> (A basis for comparison; a reference point against which other things can be evaluated.)</td></tr><tr class="odd"><td>Usage note:</td><td>This property <em>SHOULD</em> be used to indicate the model, schema, ontology, view or profile that the catalog record metadata conforms to.</td></tr></tbody></table>

Note

[`dct:Standard`](http://purl.org/dc/terms/Standard) is defined in \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\] as "A basis for comparison; a reference point against which other things can be evaluated." The target resource is not restricted to formal standards issued by bodies like ISO and W3C. In this context, it is any resource that specifies one or more aspects of the catalog record content, for example schema, semantics, syntax, usage guidelines, file format, or specific serialization. The meaning of conformance is determined by provisions in the target standard.

### 6.6 Class: Dataset<a href="#Class:Dataset" class="self-link"></a>

Note

In DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] [`dcat:Dataset`](#Class:Dataset) was a sub-class of [`dctype:Dataset`](http://purl.org/dc/dcmitype/Dataset), which is a member of the [DCMI Types vocabulary](http://dublincore.org/documents/dcmi-terms/#section-7) \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\]. The scope of [`dcat:Dataset`](#Class:Dataset) also includes other members of the [DCMI Types vocabulary](http://dublincore.org/documents/dcmi-terms/#section-7), such as various multimedia (imagery, sound, video) and text, so the sub-class relationship from DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] has been removed in this revised DCAT vocabulary - see [Issue \#98](https://github.com/w3c/dxwg/issues/98).

Note that members of the [DCMI Types vocabulary](http://dublincore.org/documents/dcmi-terms/#section-7) may appear as the value of the [`dct:type`](#Property:resource_type) property, as shown in <a href="#classifying-dataset-types" class="sec-ref">§ 5.5 Classifying dataset types</a>.

The following properties are specific to this class: [distribution](#Property:dataset_distribution), [frequency](#Property:dataset_frequency), [spatial/geographic coverage](#Property:dataset_spatial), [spatial resolution](#Property:dataset_spatial_resolution), [temporal coverage](#Property:dataset_temporal), [temporal resolution](#Property:dataset_temporal_resolution), [was generated by](#Property:dataset_was_generated_by).

The following properties are inherited from the super-class [`dcat:Resource`](#Class:Resource): [access rights](#Property:resource_access_rights), [conforms to](#Property:resource_conforms_to), [contact point](#Property:resource_contact_point), [creator](#Property:resource_creator), [description](#Property:resource_description), [has policy](#Property:resource_has_policy), [identifier](#Property:resource_identifier), [is referenced by](#Property:resource_is_referenced_by), [keyword/tag](#Property:resource_keyword), [landing page](#Property:resource_landing_page), [license](#Property:resource_license), [resource language](#Property:resource_language), [relation](#Property:resource_relation), [rights](#Property:resource_rights), [qualified relation](#Property:resource_qualified_relation), [publisher](#Property:resource_publisher), [release date](#Property:resource_release_date), [theme/category](#Property:resource_theme), [title](#Property:resource_title), [type/genre](#Property:resource_type), [update/modification date](#Property:resource_update_date), [qualified attribution](#Property:resource_qualified_attribution).

Information about licenses and rights *SHOULD* be provided on the level of Distribution. Information about licenses and rights *MAY* be provided for a Dataset in addition to but not instead of the information provided for the Distributions of that Dataset. Providing license or rights information for a Dataset that is different from information provided for a Distribution of that Dataset *SHOULD* be avoided as this can create legal conflicts.

<table><thead><tr class="header"><th>RDF Class:</th><th><a href="http://www.w3.org/ns/dcat#Dataset">dcat:Dataset</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A collection of data, published or curated by a single agent, and available for access or download in one or more representations.</td></tr><tr class="even"><td>Sub-class of:</td><td><a href="#Class:Resource"><code>dcat:Resource</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>This class describes the conceptual dataset. One or more representations might be available, with differing schematic layouts and formats or serializations.</td></tr><tr class="even"><td>Usage note:</td><td>This class describes the actual dataset as published by the dataset provider. In cases where a distinction between the actual dataset and its entry in the catalog is necessary (because metadata such as modification date might differ), the <em><a href="#Class:Catalog_Record">catalog record</a></em> class can be used for the latter.</td></tr></tbody></table>

#### 6.6.1 Property: dataset distribution<a href="#Property:dataset_distribution" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#distribution">dcat:distribution</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>An available distribution of the dataset.</td></tr><tr class="even"><td>Sub-property of:</td><td><a href="http://purl.org/dc/terms/relation"><code>dct:relation</code></a></td></tr><tr class="odd"><td>Domain:</td><td><a href="#Class:Dataset"><code>dcat:Dataset</code></a></td></tr><tr class="even"><td>Range:</td><td><a href="#Class:Distribution"><code>dcat:Distribution</code></a></td></tr></tbody></table>

#### 6.6.2 Property: frequency<a href="#Property:dataset_frequency" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/accrualPeriodicity">dct:accrualPeriodicity</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The frequency at which dataset is published.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/Frequency"><code>dct:Frequency</code></a> (A rate at which something recurs)</td></tr><tr class="odd"><td>Usage note:</td><td>The value of <code>dct:accrualPeriodicity</code> gives the rate at which the dataset-as-a-whole is updated. This may be complemented by <a href="#Property:dataset_temporal_resolution"><code>dcat:temporalResolution</code></a> to give the time between collected data points in a time series.</td></tr></tbody></table>

Examples showing how `dct:accrualPeriodicity` and [`dcat:temporalResolution`](#Property:dataset_temporal_resolution) may be combined are given in <a href="#temporal-properties" class="sec-ref">§ 9.1 Temporal properties</a>.

#### 6.6.3 Property: spatial/geographical coverage<a href="#Property:dataset_spatial" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/spatial">dct:spatial</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The geographical area covered by the dataset.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/Location"><code>dct:Location</code></a> (A spatial region or named place)</td></tr><tr class="odd"><td>Usage note:</td><td>The spatial coverage of a dataset may be encoded as an instance of <a href="http://purl.org/dc/terms/Location"><code>dct:Location</code></a>, or may be indicated using a URI reference (link) to a resource describing a location. It is recommended that links are to entries in a well maintained gazetteer such as <a href="http://www.geonames.org/">Geonames</a>.</td></tr></tbody></table>

Options for expressing the details of a `dct:Location` are provided in <a href="#Class:Location" class="sec-ref">§ 6.15 Class: Location</a>.

#### 6.6.4 Property: spatial resolution<a href="#Property:dataset_spatial_resolution" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#spatialResolutionInMeters">dcat:spatialResolutionInMeters</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Minimum spatial separation resolvable in a dataset, measured in meters.</td></tr><tr class="even"><td>Range:</td><td><a href="https://www.w3.org/TR/xmlschema11-2/#decimal"><code>xsd:decimal</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>If the dataset is an image or grid this should correspond to the spacing of items. For other kinds of spatial datasets, this property will usually indicate the smallest distance between items in the dataset.</td></tr></tbody></table>

The range of this property is a decimal number representing a length in meters. This is intended to provide a summary indication of the spatial resolution of the data as a single number. More complex descriptions of various aspects of spatial precision, accuracy, resolution and other statistics can be provided using the Data Quality Vocabulary \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\].

#### 6.6.5 Property: temporal coverage<a href="#Property:dataset_temporal" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/temporal">dct:temporal</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The temporal period that the dataset covers.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/PeriodOfTime"><code>dct:PeriodOfTime</code></a> (An interval of time that is named or defined by its start and end dates)</td></tr><tr class="odd"><td>Usage note:</td><td>The temporal coverage of a dataset may be encoded as an instance of <a href="http://purl.org/dc/terms/PeriodOfTime"><code>dct:PeriodOfTime</code></a>, or may be indicated using a URI reference (link) to a resource describing a time period or interval.</td></tr></tbody></table>

Options for expressing the details of a `dct:PeriodOfTime` are provided in <a href="#Class:Period_of_Time" class="sec-ref">§ 6.14 Class: Period of Time</a>.

#### 6.6.6 Property: temporal resolution<a href="#Property:dataset_temporal_resolution" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#temporalResolution">dcat:temporalResolution</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Minimum time period resolvable in the dataset.</td></tr><tr class="even"><td>Range:</td><td><a href="https://www.w3.org/TR/xmlschema11-2/#duration"><code>xsd:duration</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>If the dataset is a time-series this should correspond to the spacing of items in the series. For other kinds of dataset, this property will usually indicate the smallest time difference between items in the dataset.</td></tr></tbody></table>

This is intended to provide a summary indication of the temporal resolution of the data distribution as a single value. More complex descriptions of various aspects of temporal precision, accuracy, resolution and other statistics can be provided using the Data Quality Vocabulary \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\].

The distinction between `dcat:temporalResolution` and [`dct:accrualPeriodicity`](#Property:dataset_frequency) is illustrated by examples in <a href="#temporal-properties" class="sec-ref">§ 9.1 Temporal properties</a>.

#### 6.6.7 Property: was generated by<a href="#Property:dataset_was_generated_by" class="self-link"></a>

Note

Property added in this context in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="https://www.w3.org/TR/prov-o/#wasGeneratedBy">prov:wasGeneratedBy</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>An activity that generated, or provides the business context for, the creation of the dataset.</td></tr><tr class="even"><td>Domain:</td><td><a href="https://www.w3.org/TR/prov-o/#Entity"><code>prov:Entity</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="https://www.w3.org/TR/prov-o/#Activity"><code>prov:Activity</code></a> An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.</td></tr><tr class="even"><td>Usage note:</td><td>The activity associated with generation of a dataset will typically be an initiative, project, mission, survey, on-going activity ("business as usual") etc. Multiple <code>prov:wasGeneratedBy</code> properties can be used to indicate the dataset production context at various levels of granularity.</td></tr><tr class="odd"><td>Usage note:</td><td>Use <a href="https://www.w3.org/TR/prov-o/#qualifiedGeneration"><code>prov:qualifiedGeneration</code></a> to attach additional details about the relationship between the dataset and the activity, e.g. the exact time that the dataset was produced during the lifetime of a project</td></tr></tbody></table>

Note

Use of this property on an individual entails that the context resource is a member of the class [`prov:Entity`](https://www.w3.org/TR/prov-o/#Entity) \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\] .

Details about how to describe the activity that generated a dataset, such as a project, initiative, on-going activity, mission or survey, are out of scope for this document. [`prov:Activity`](http://www.w3.org/TR/prov-o/#Activity) provides for some basic properties such as begin and end time, associated agents etc. Further details may be provided through classes defined in applications. A number of ontologies for describing projects are available, for example VIVO for academic research projects \[<a href="#bib-vivo-isf" class="bibref" title="VIVO-ISF Data Standard">VIVO-ISF</a>\], DOAP (Description of a Project) for software projects \[<a href="#bib-doap" class="bibref" title="Description of a Project">DOAP</a>\], and DBPedia for general projects \[<a href="#bib-dbpedia-ont" class="bibref" title="DBPedia ontology">DBPEDIA-ONT</a>\] which are expected to be suitable for different applications.

### 6.7 Class: Distribution<a href="#Class:Distribution" class="self-link"></a>

The following properties are specific to this class: [access rights](#Property:distribution_access_rights), [access URL](#Property:distribution_access_url), [access service](#Property:distribution_access_service), [byte size](#Property:distribution_size), [compression format](#Property:distribution_compression_format), [conforms to](#Property:distribution_conforms_to), [description](#Property:distribution_description), [download URL](#Property:distribution_download_url), [format](#Property:distribution_format), [has policy](#Property:distribution_has_policy), [license](#Property:distribution_license), [media type](#Property:distribution_media_type), [packaging format](#Property:distribution_packaging_format), [release date](#Property:distribution_release_date), [rights](#Property:distribution_rights), [spatial resolution](#Property:distribution_spatial_resolution), [temporal resolution](#Property:distribution_temporal_resolution), [title](#Property:distribution_title), [update/modification date](#Property:distribution_update_date).

<table><thead><tr class="header"><th>RDF class:</th><th><a href="http://www.w3.org/ns/dcat#Distribution">dcat:Distribution</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A specific representation of a dataset. A dataset might be available in multiple serializations that may differ in various ways, including natural language, media-type or format, schematic organization, temporal and spatial resolution, level of detail or profiles (which might specify any or all of the above).</td></tr><tr class="even"><td>Usage note:</td><td>This represents a general availability of a dataset. It implies no information about the actual access method of the data, i.e. whether by direct download, API, or through a Web page. The use of <a href="#Property:distribution_download_url"><code>dcat:downloadURL</code></a> property indicates directly downloadable distributions.</td></tr><tr class="odd"><td>See also:</td><td><a href="#Class:Data_Service" class="sec-ref">§ 6.8 Class: Data Service</a></td></tr></tbody></table>

Note

Examples of distributions include a CSV file, a \[<a href="#bib-netcdf" class="bibref" title="Network Common Data Form (NetCDF)">netCDF</a>\] file, a JSON document, or a data-cube, files made accessible according to different profiles, such as XML or JSON schemas or \[<a href="#bib-shex" class="bibref" title="Shape Expressions Language 2.1">ShEx</a>\] or \[<a href="#bib-shacl" class="bibref" title="Shapes Constraint Language (SHACL)">SHACL</a>\] expressions.

In some cases all distributions of a dataset will be fully informationally equivalent, in the sense that lossless transformations between the representations are possible. An example would be different serializations of an RDF graph using RDF/XML \[<a href="#bib-rdf-syntax-grammar" class="bibref" title="RDF 1.1 XML Syntax">RDF-SYNTAX-GRAMMAR</a>\], \[<a href="#bib-turtle" class="bibref" title="RDF 1.1 Turtle">Turtle</a>\], \[<a href="#bib-n3" class="bibref" title="Notation3 (N3): A readable RDF syntax">N3</a>\], \[<a href="#bib-json-ld" class="bibref" title="JSON-LD 1.0">JSON-LD</a>\]. However, in other cases the distributions might have different levels of fidelity to the underlying data. For example, a graphical representation about the data on a CSV file may not contain the same total information recorded in the CSV file, but they could be considered as two distributions for the same dataset as they are about the same data.

As a counter-example, budget data for different years would usually be modelled as different datasets, each with their own distributions, since all distributions of one dataset should broadly contain the same data.

Nevertheless, the question of whether different representations can be understood to be distributions of the same dataset, or distributions of different datasets, is application specific. Judgement about how to describe them is the responsibility of the provider, taking into account their understanding of the expectations of users, and practices in the relevant community.

Links between a `dcat:Distribution` and services or Web addresses where it can be accessed are expressed using [`dcat:accessURL`](#Property:distribution_access_url), [`dcat:accessService`](#Property:distribution_access_service), [`dcat:downloadURL`](#Property:distribution_download_url), as shown in <a href="#UML_DCAT_All_Attr" class="fig-ref" title="Overview of DCAT model, showing the classes of resources that can be members of a Catalog, and the relationships between them.">Figure 1</a> and described in the definitions below.

#### 6.7.1 Property: title<a href="#Property:distribution_title" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/title">dct:title</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A name given to the distribution.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a></td></tr></tbody></table>

#### 6.7.2 Property: description<a href="#Property:distribution_description" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/description">dct:description</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A free-text account of the distribution.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a></td></tr></tbody></table>

#### 6.7.3 Property: release date<a href="#Property:distribution_release_date" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/issued">dct:issued</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Date of formal issuance (e.g., publication) of the distribution.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a> encoded using the relevant ISO 8601 Date and Time compliant string [<a href="#bib-datetime" class="bibref" title="Date and Time Formats">DATETIME</a>] and typed using the appropriate XML Schema datatype [<a href="#bib-xmlschema11-2" class="bibref" title="W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes">XMLSCHEMA11-2</a>] (<a href="https://www.w3.org/TR/xmlschema11-2/#gYear"><code>xsd:gYear</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#gYearMonth"><code>xsd:gYearMonth</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#date"><code>xsd:date</code></a>, or <a href="https://www.w3.org/TR/xmlschema11-2/#dateTime"><code>xsd:dateTime</code></a>).</td></tr><tr class="odd"><td>Usage note:</td><td>This property <em>SHOULD</em> be set using the first known date of issuance.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:resource_release_date" class="sec-ref">§ 6.4.7 Property: release date</a></td></tr></tbody></table>

#### 6.7.4 Property: update/modification date<a href="#Property:distribution_update_date" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/modified">dct:modified</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Most recent date on which the distribution was changed, updated or modified.</td></tr><tr class="even"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a> encoded using the relevant ISO 8601 Date and Time compliant string [<a href="#bib-datetime" class="bibref" title="Date and Time Formats">DATETIME</a>] and typed using the appropriate XML Schema datatype [<a href="#bib-xmlschema11-2" class="bibref" title="W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes">XMLSCHEMA11-2</a>] (<a href="https://www.w3.org/TR/xmlschema11-2/#gYear"><code>xsd:gYear</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#gYearMonth"><code>xsd:gYearMonth</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#date"><code>xsd:date</code></a>, or <a href="https://www.w3.org/TR/xmlschema11-2/#dateTime"><code>xsd:dateTime</code></a>).</td></tr><tr class="odd"><td>See also:</td><td><a href="#Property:resource_update_date" class="sec-ref">§ 6.4.8 Property: update/modification date</a></td></tr></tbody></table>

#### 6.7.5 Property: license<a href="#Property:distribution_license" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/license">dct:license</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A legal document under which the distribution is made available.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/LicenseDocument"><code>dct:LicenseDocument</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Information about licenses and rights <em>SHOULD</em> be provided on the level of Distribution. Information about licenses and rights <em>MAY</em> be provided for a Dataset in addition to but not instead of the information provided for the Distributions of that Dataset. Providing license or rights information for a Dataset that is different from information provided for a Distribution of that Dataset <em>SHOULD</em> be avoided as this can create legal conflicts. See also guidance at <a href="#license-rights" class="sec-ref">§ 8. License and rights statements</a>.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:distribution_rights" class="sec-ref">§ 6.7.7 Property: rights</a> <a href="#Property:resource_license" class="sec-ref">§ 6.4.19 Property: license</a></td></tr></tbody></table>

#### 6.7.6 Property: access rights<a href="#Property:distribution_access_rights" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/accessRights">dct:accessRights</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A rights statement that concerns how the distribution is accessed.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/RightsStatement"><code>dct:RightsStatement</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Information about licenses and rights <em>MAY</em> be provided for the Distribution. See also guidance at <a href="#license-rights" class="sec-ref">§ 8. License and rights statements</a>.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:distribution_license" class="sec-ref">§ 6.7.5 Property: license</a>, <a href="#Property:distribution_rights" class="sec-ref">§ 6.7.7 Property: rights</a>, <a href="#Property:resource_access_rights" class="sec-ref">§ 6.4.1 Property: access rights</a></td></tr></tbody></table>

#### 6.7.7 Property: rights<a href="#Property:distribution_rights" class="self-link"></a>

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/rights">dct:rights</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Information about rights held in and over the distribution.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/RightsStatement"><code>dct:RightsStatement</code></a></td></tr><tr class="odd"><td>Usage note:</td><td><p><code>dct:license</code>, which is a sub-property of <code>dct:rights</code>, can be used to link a distribution to a license document. However, <code>dct:rights</code> allows linking to a rights statement that can include licensing information as well as other information that supplements the license such as attribution.</p><p>Information about licenses and rights <em>SHOULD</em> be provided on the level of Distribution. Information about licenses and rights <em>MAY</em> be provided for a Dataset in addition to but not instead of the information provided for the Distributions of that Dataset. Providing license or rights information for a Dataset that is different from information provided for a Distribution of that Dataset <em>SHOULD</em> be avoided as this can create legal conflicts. See also guidance at <a href="#license-rights" class="sec-ref">§ 8. License and rights statements</a>.</p></td></tr><tr class="even"><td>See also:</td><td><a href="#Property:distribution_license" class="sec-ref">§ 6.7.5 Property: license</a>, <a href="#Property:resource_rights" class="sec-ref">§ 6.4.20 Property: rights</a></td></tr></tbody></table>

#### 6.7.8 Property: has policy<a href="#Property:distribution_has_policy" class="self-link"></a>

Note

Property added in this context in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="https://www.w3.org/TR/odrl-vocab/#term-hasPolicy">odrl:hasPolicy</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>An ODRL conformant policy expressing the rights associated with the distribution.</td></tr><tr class="even"><td>Range:</td><td><a href="https://www.w3.org/TR/odrl-vocab/#term-Policy"><code>odrl:Policy</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Information about rights expressed as an ODRL policy [<a href="#bib-odrl-model" class="bibref" title="ODRL Information Model 2.2">ODRL-MODEL</a>] using the ODRL vocabulary [<a href="#bib-odrl-vocab" class="bibref" title="ODRL Vocabulary &amp; Expression 2.2">ODRL-VOCAB</a>] <em>MAY</em> be provided for the distribution. See also guidance at <a href="#license-rights" class="sec-ref">§ 8. License and rights statements</a>.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:resource_license" class="sec-ref">§ 6.4.19 Property: license</a>, <a href="#Property:distribution_access_rights" class="sec-ref">§ 6.7.6 Property: access rights</a>, <a href="#Property:distribution_rights" class="sec-ref">§ 6.7.7 Property: rights</a></td></tr></tbody></table>

#### 6.7.9 Property: access URL<a href="#Property:distribution_access_url" class="self-link"></a>

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#accessURL">dcat:accessURL</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A URL of the resource that gives access to a distribution of the dataset. E.g. landing page, feed, SPARQL endpoint.</td></tr><tr class="even"><td>Domain:</td><td><a href="#Class:Distribution"><code>dcat:Distribution</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Resource"><code>rdfs:Resource</code></a></td></tr><tr class="even"><td>Usage note:</td><td><p><a href="#Property:distribution_access_url"><code>dcat:accessURL</code></a> <em>SHOULD</em> be used for the URL of a service or location that can provide access to this distribution, typically through a Web form, query or API call.</p><p><a href="#Property:distribution_download_url"><code>dcat:downloadURL</code></a> is preferred for direct links to downloadable resources.</p><p>If the distribution(s) are accessible only through a landing page (i.e. direct download URLs are not known), then the landing page URL associated with the <code>dcat:Dataset</code> <em>SHOULD</em> be duplicated as access URL on a distribution (see <a href="#example-landing-page" class="sec-ref">§ 5.7 Dataset available only behind some Web page</a>).</p></td></tr><tr class="odd"><td>See also</td><td><a href="#Property:distribution_download_url" class="sec-ref">§ 6.7.11 Property: download URL</a>, <a href="#Property:distribution_access_service" class="sec-ref">§ 6.7.10 Property: access service</a></td></tr></tbody></table>

`dcat:accessURL` matches the property-chain `dcat:accessService`/`dcat:endpointURL`. In the RDF representation of DCAT this is axiomatized as an OWL property-chain axiom.

#### 6.7.10 Property: access service<a href="#Property:distribution_access_service" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#accessService">dcat:accessService</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A data service that gives access to the distribution of the dataset</td></tr><tr class="even"><td>Range:</td><td><a href="#Class:Data_Service"><code>dcat:DataService</code></a></td></tr><tr class="odd"><td>Usage note:</td><td><a href="#Property:distribution_access_service"><code>dcat:accessService</code></a> <em>SHOULD</em> be used to link to a description of a <a href="#Class:Data_Service"><code>dcat:DataService</code></a> that can provide access to this distribution.</td></tr><tr class="even"><td>See also</td><td><a href="#Property:distribution_download_url" class="sec-ref">§ 6.7.11 Property: download URL</a>, <a href="#Property:distribution_access_url" class="sec-ref">§ 6.7.9 Property: access URL</a></td></tr></tbody></table>

#### 6.7.11 Property: download URL<a href="#Property:distribution_download_url" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#downloadURL">dcat:downloadURL</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The URL of the downloadable file in a given format. E.g. CSV file or RDF file. The format is indicated by the distribution's <code>dct:format</code> and/or <code>dcat:mediaType</code></td></tr><tr class="even"><td>Domain:</td><td><a href="#Class:Distribution"><code>dcat:Distribution</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Resource"><code>rdfs:Resource</code></a></td></tr><tr class="even"><td>Usage note:</td><td><a href="#Property:distribution_download_url"><code>dcat:downloadURL</code></a> <em>SHOULD</em> be used for the URL at which this distribution is available directly, typically through a HTTP Get request.</td></tr><tr class="odd"><td>See also</td><td><a href="#Property:distribution_access_url" class="sec-ref">§ 6.7.9 Property: access URL</a>, <a href="#Property:distribution_access_service" class="sec-ref">§ 6.7.10 Property: access service</a></td></tr></tbody></table>

#### 6.7.12 Property: byte size<a href="#Property:distribution_size" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#size">dcat:byteSize</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The size of a distribution in bytes.</td></tr><tr class="even"><td>Domain:</td><td><a href="#Class:Distribution"><code>dcat:Distribution</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a> typed as <a href="https://www.w3.org/TR/xmlschema11-2/#decimal"><code>xsd:decimal</code></a>.</td></tr><tr class="even"><td>Usage note:</td><td>The size in bytes can be approximated (as a decimal) when the precise size is not known.</td></tr></tbody></table>

#### 6.7.13 Property: spatial resolution<a href="#Property:distribution_spatial_resolution" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#spatialResolutionInMeters">dcat:spatialResolutionInMeters</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The minimum spatial separation resolvable in a dataset distribution, measured in meters.</td></tr><tr class="even"><td>Range:</td><td><a href="https://www.w3.org/TR/xmlschema11-2/#decimal"><code>xsd:decimal</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>If the dataset is an image or grid this should correspond to the spacing of items. For other kinds of spatial datasets, this property will usually indicate the smallest distance between items in the dataset.</td></tr><tr class="even"><td>Usage note:</td><td>Alternative spatial resolutions might be provided as different dataset distributions</td></tr></tbody></table>

The range of this property is a decimal number representing a length in meters. This is intended to provide a summary indication of the spatial resolution of the data distribution as a single number. More complex descriptions of various aspects of spatial precision, accuracy, resolution and other statistics can be provided using the Data Quality Vocabulary \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\].

#### 6.7.14 Property: temporal resolution<a href="#Property:distribution_temporal_resolution" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#temporalResolution">dcat:temporalResolution</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Minimum time period resolvable in the dataset distribution.</td></tr><tr class="even"><td>Range:</td><td><a href="https://www.w3.org/TR/xmlschema11-2/#duration"><code>xsd:duration</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>If the dataset is a time-series this should correspond to the spacing of items in the series. For other kinds of dataset, this property will usually indicate the smallest time difference between items in the dataset.</td></tr><tr class="even"><td>Usage note:</td><td>Alternative temporal resolutions might be provided in different dataset distributions</td></tr></tbody></table>

This is intended to provide a summary indication of the temporal resolution of the data distribution as a single value. More complex descriptions of various aspects of temporal precision, accuracy, resolution and other statistics can be provided using the Data Quality Vocabulary \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\].

#### 6.7.15 Property: conforms to<a href="#Property:distribution_conforms_to" class="self-link"></a>

Note

Property added in this context in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/conformsTo">dct:conformsTo</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>An established standard to which the distribution conforms.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/Standard"><code>dct:Standard</code></a> (A basis for comparison; a reference point against which other things can be evaluated.)</td></tr><tr class="odd"><td>Usage note:</td><td>This property <em>SHOULD</em> be used to indicate the model, schema, ontology, view or profile that this representation of a dataset conforms to. This is (generally) a complementary concern to the media-type or format.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:distribution_format" class="sec-ref">§ 6.7.17 Property: format</a>, <a href="#Property:distribution_media_type" class="sec-ref">§ 6.7.16 Property: media type</a></td></tr></tbody></table>

Note

[`dct:Standard`](http://purl.org/dc/terms/Standard) is defined in \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\] as "A basis for comparison; a reference point against which other things can be evaluated." It is not restricted to formal standards issued by bodies like ISO and W3C. In this context it will usually be used for a schema, ontology, data model or profile which specifies the structure of a dataset distribution. This is not necessarily tied to a single encoding or serialization.

#### 6.7.16 Property: media type<a href="#Property:distribution_media_type" class="self-link"></a>

Note

The range of `dcat:mediaType` has been tightened from `dct:MediaTypeOrExtent` to `dct:MediaType` as part of the revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#mediaType">dcat:mediaType</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The media type of the distribution as defined by IANA [<a href="#bib-iana-media-types" class="bibref" title="Media Types">IANA-MEDIA-TYPES</a>].</td></tr><tr class="even"><td>Sub-property of:</td><td><a href="http://purl.org/dc/terms/format"><code>dct:format</code></a></td></tr><tr class="odd"><td>Domain:</td><td><a href="#Class:Distribution"><code>dcat:Distribution</code></a></td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/MediaType"><code>dct:MediaType</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>This property <em>SHOULD</em> be used when the media type of the distribution is defined in IANA [<a href="#bib-iana-media-types" class="bibref" title="Media Types">IANA-MEDIA-TYPES</a>], otherwise <code>dct:format</code> <em>MAY</em> be used with different values.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:distribution_format" class="sec-ref">§ 6.7.17 Property: format</a>, <a href="#Property:distribution_conforms_to" class="sec-ref">§ 6.7.15 Property: conforms to</a></td></tr></tbody></table>

#### 6.7.17 Property: format<a href="#Property:distribution_format" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/format">dct:format</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The file format of the distribution.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/MediaTypeOrExtent"><code>dct:MediaTypeOrExtent</code></a></td></tr><tr class="odd"><td>Usage note:</td><td><a href="#Property:distribution_media_type"><code>dcat:mediaType</code></a> <em>SHOULD</em> be used if the type of the distribution is defined by IANA [<a href="#bib-iana-media-types" class="bibref" title="Media Types">IANA-MEDIA-TYPES</a>].</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:distribution_media_type" class="sec-ref">§ 6.7.16 Property: media type</a>, <a href="#Property:distribution_conforms_to" class="sec-ref">§ 6.7.15 Property: conforms to</a></td></tr></tbody></table>

#### 6.7.18 Property: compression format<a href="#Property:distribution_compression_format" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#compressFormat">dcat:compressFormat</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The compression format of the distribution in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/MediaType"><code>dct:MediaType</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>This property to be used when the files in the distribution are compressed, e.g. in a ZIP file. The format <em>SHOULD</em> be expressed using a media type as defined by IANA [<a href="#bib-iana-media-types" class="bibref" title="Media Types">IANA-MEDIA-TYPES</a>], if available.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:distribution_packaging_format" class="sec-ref">§ 6.7.19 Property: packaging format</a>.</td></tr></tbody></table>

For examples on the use of this property, see <a href="#examples-compressed-and-packaged-distributions" class="sec-ref">§ C.5 Compressed and packaged distributions</a>.

#### 6.7.19 Property: packaging format<a href="#Property:distribution_packaging_format" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#packageFormat">dcat:packageFormat</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The package format of the distribution in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together.</td></tr><tr class="even"><td>Range:</td><td><a href="http://purl.org/dc/terms/MediaType"><code>dct:MediaType</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>This property to be used when the files in the distribution are packaged, e.g. in a <a href="https://en.wikipedia.org/wiki/Tar_(computing)">TAR file</a>, a <a href="http://frictionlessdata.io/data-packages/">Frictionless Data Package</a> or a <a href="https://tools.ietf.org/html/draft-kunze-bagit-14">Bagit</a> file. The format <em>SHOULD</em> be expressed using a media type as defined by IANA [<a href="#bib-iana-media-types" class="bibref" title="Media Types">IANA-MEDIA-TYPES</a>], if available.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:distribution_compression_format" class="sec-ref">§ 6.7.18 Property: compression format</a>.</td></tr></tbody></table>

For examples on the use of this property, see <a href="#examples-compressed-and-packaged-distributions" class="sec-ref">§ C.5 Compressed and packaged distributions</a>.

### 6.8 Class: Data Service<a href="#Class:Data_Service" class="self-link"></a>

Note

New class added in this revision of DCAT.

The following properties are specific to this class: [endpoint description](#Property:data_service_endpoint_description), [endpoint URL](#Property:data_service_endpoint_url), [serves dataset](#Property:data_service_serves_dataset).

The following properties are inherited from the super-class [`dcat:Resource`](#Class:Resource): [access rights](#Property:resource_access_rights), [conforms to](#Property:resource_conforms_to), [contact point](#Property:resource_contact_point), [creator](#Property:resource_creator), [description](#Property:resource_description), [has policy](#Property:resource_has_policy), [identifier](#Property:resource_identifier), [is referenced by](#Property:resource_is_referenced_by), [keyword/tag](#Property:resource_keyword), [landing page](#Property:resource_landing_page), [license](#Property:resource_license), [resource language](#Property:resource_language), [relation](#Property:resource_relation), [rights](#Property:resource_rights), [qualified relation](#Property:resource_qualified_relation), [publisher](#Property:resource_publisher), [release date](#Property:resource_release_date), [theme/category](#Property:resource_theme), [title](#Property:resource_title), [type/genre](#Property:resource_type), [update/modification date](#Property:resource_update_date), [qualified attribution](#Property:resource_qualified_attribution).

<table><thead><tr class="header"><th>RDF Class:</th><th><a href="http://www.w3.org/ns/dcat#DataService">dcat:DataService</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A collection of operations that provides access to one or more datasets or data processing functions.</td></tr><tr class="even"><td>Sub-class of:</td><td><a href="#Class:Resource"><code>dcat:Resource</code></a></td></tr><tr class="odd"><td>Sub-class of:</td><td><a href="http://purl.org/dc/dcmitype/Service"><code>dctype:Service</code></a></td></tr><tr class="even"><td>Usage note:</td><td>If a <a href="#Class:Data_Service"><code>dcat:DataService</code></a> is bound to one or more specified Datasets, they are indicated by the <a href="#Property:data_service_serves_dataset"><code>dcat:servesDataset</code></a> property.</td></tr><tr class="odd"><td>Usage note:</td><td>The kind of service can be indicated using the <a href="http://purl.org/dc/terms/type"><code>dct:type</code></a> property. Its value may be taken from a controlled vocabulary such as the INSPIRE spatial data service type code list [<a href="#bib-inspire-sdst" class="bibref" title="INSPIRE Registry: Spatial data service types">INSPIRE-SDST</a>].</td></tr></tbody></table>

For examples on the use of this class and related properties, see <a href="#examples-data-service" class="sec-ref">§ C.4 Data services</a>.

#### 6.8.1 Property: endpoint URL<a href="#Property:data_service_endpoint_url" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#endpointURL"><code>dcat:endpointURL</code></a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The root location or primary endpoint of the service (a Web-resolvable IRI).</td></tr><tr class="even"><td>Domain:</td><td><a href="#Class:Data_Service"><code>dcat:DataService</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Resource"><code>rdfs:Resource</code></a></td></tr></tbody></table>

#### 6.8.2 Property: endpoint description<a href="#Property:data_service_endpoint_description" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#endpointDescription">dcat:endpointDescription</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A description of the services available via the end-points, including their operations, parameters etc.</td></tr><tr class="even"><td>Domain:</td><td><a href="#Class:Data_Service"><code>dcat:DataService</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="http://www.w3.org/2000/01/rdf-schema#Resource"><code>rdfs:Resource</code></a></td></tr><tr class="even"><td>Usage note:</td><td>The endpoint description gives specific details of the actual endpoint instances, while <a href="#Property:resource_conforms_to"><code>dct:conformsTo</code></a> is used to indicate the general standard or specification that the endpoints implement.</td></tr><tr class="odd"><td>Usage note:</td><td>An endpoint description may be expressed in a machine-readable form, such as an OpenAPI (Swagger) description [<a href="#bib-openapi" class="bibref" title="OpenAPI Specification">OpenAPI</a>], an OGC <code>GetCapabilities</code> response [<a href="#bib-wfs" class="bibref" title="Web Feature Service 2.0 Interface Standard">WFS</a>], [<a href="#bib-iso-19142" class="bibref" title="Geographic information -- Web Feature Service">ISO-19142</a>], [<a href="#bib-wms" class="bibref" title="Web Map Service Implementation Specification">WMS</a>], [<a href="#bib-iso-19128" class="bibref" title="Geographic information -- Web map server interface">ISO-19128</a>], a SPARQL Service Description [<a href="#bib-sparql11-service-description" class="bibref" title="SPARQL 1.1 Service Description">SPARQL11-SERVICE-DESCRIPTION</a>], an [<a href="#bib-opensearch" class="bibref" title="OpenSearch 1.1 Draft 6">OpenSearch</a>] or [<a href="#bib-wsdl20" class="bibref" title="Web Services Description Language (WSDL) Version 2.0 Part 1: Core Language">WSDL20</a>] document, a Hydra API description [<a href="#bib-hydra" class="bibref" title="Hydra Core Vocabulary">HYDRA</a>], else in text or some other informal mode if a formal representation is not possible.</td></tr></tbody></table>

#### 6.8.3 Property: serves dataset<a href="#Property:data_service_serves_dataset" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#servesdataset">dcat:servesDataset</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A collection of data that this data service can distribute.</td></tr><tr class="even"><td>Range:</td><td><a href="#Class:Dataset"><code>dcat:Dataset</code></a></td></tr></tbody></table>

### 6.9 Class: Concept Scheme<a href="#Class:Concept_Scheme" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Class:</th><th><a href="http://www.w3.org/2004/02/skos/core#ConceptScheme">skos:ConceptScheme</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A knowledge organization system (KOS) used to represent themes/categories of datasets in the catalog.</td></tr><tr class="even"><td>See also:</td><td><a href="#Property:catalog_themes" class="sec-ref">§ 6.3.2 Property: themes</a>, <a href="#Property:resource_theme" class="sec-ref">§ 6.4.12 Property: theme/category</a></td></tr></tbody></table>

### 6.10 Class: Concept<a href="#Class:Concept" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Class:</th><th><a href="http://www.w3.org/2004/02/skos/core#Concept">skos:Concept</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A category or a theme used to describe datasets in the catalog.</td></tr><tr class="even"><td>Usage note:</td><td>It is recommended to use either <code>skos:inScheme</code> or <code>skos:topConceptOf</code> on every <code>skos:Concept</code> used to classify datasets to link it to the concept scheme it belongs to. This concept scheme is typically associated with the catalog using <code>dcat:themeTaxonomy</code>.</td></tr><tr class="odd"><td>See also:</td><td><a href="#Property:catalog_themes" class="sec-ref">§ 6.3.2 Property: themes</a>, <a href="#Property:resource_theme" class="sec-ref">§ 6.4.12 Property: theme/category</a></td></tr></tbody></table>

### 6.11 Class: Organization/Person<a href="#Class:Organization_Person" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Classes:</th><th><a href="http://xmlns.com/foaf/0.1/Person"><code>foaf:Person</code></a> for people and <a href="http://xmlns.com/foaf/0.1/Organization"><code>foaf:Organization</code></a> for government agencies or other entities.</th></tr></thead><tbody><tr class="odd"><td>Usage note:</td><td>[<a href="#bib-foaf" class="bibref" title="FOAF Vocabulary Specification 0.99 (Paddington Edition)">FOAF</a>] provides several properties to describe these entities.</td></tr></tbody></table>

### 6.12 Class: Relationship<a href="#Class:Relationship" class="self-link"></a>

Note

New class added in this revision of DCAT.

The following properties are specific to this class: [relation](#Property:relationship_relation), [had role](#Property:relationship_hadRole).

Examples illustrating use of this class and its properties are given in <a href="#qualified-forms" class="sec-ref">§ 13. Qualified relations</a>.

<table><thead><tr class="header"><th>RDF Class:</th><th><a href="http://www.w3.org/ns/dcat#Relationship">dcat:Relationship</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>An association class for attaching additional information to a relationship between DCAT Resources</td></tr><tr class="even"><td>Sub-class of:</td><td><a href="https://www.w3.org/TR/prov-o/#EntityInfluence"><code>prov:EntityInfluence</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Use to characterize a relationship between datasets, and potentially other resources, where the nature of the relationship is known but is not adequately characterized by the standard [<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>] properties (<a href="http://purl.org/dc/terms/hasPart"><code>dct:hasPart</code></a>, <a href="http://purl.org/dc/terms/isPartOf"><code>dct:isPartOf</code></a>, <a href="http://purl.org/dc/terms/conformsTo"><code>dct:conformsTo</code></a>, <a href="http://purl.org/dc/terms/isFormatOf"><code>dct:isFormatOf</code></a>, <a href="http://purl.org/dc/terms/hasFormat"><code>dct:hasFormat</code></a>, <a href="http://purl.org/dc/terms/isVersionOf"><code>dct:isVersionOf</code></a>, <a href="http://purl.org/dc/terms/hasVersion"><code>dct:hasVersion</code></a>, <a href="http://purl.org/dc/terms/replaces"><code>dct:replaces</code></a>, <a href="http://purl.org/dc/terms/isReplacedBy"><code>dct:isReplacedBy</code></a>, <a href="http://purl.org/dc/terms/references"><code>dct:references</code></a>, <a href="http://purl.org/dc/terms/isReferencedBy"><code>dct:isReferencedBy</code></a>, <a href="http://purl.org/dc/terms/requires"><code>dct:requires</code></a>, <a href="http://purl.org/dc/terms/isRequiredBy"><code>dct:isRequiredBy</code></a>) or [<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>] properties (<a href="https://www.w3.org/TR/prov-o/#wasDerivedFrom"><code>prov:wasDerivedFrom</code></a>, <a href="https://www.w3.org/TR/prov-o/#wasInfluencedBy"><code>prov:wasInfluencedBy</code></a>, <a href="https://www.w3.org/TR/prov-o/#wasQuotedFrom"><code>prov:wasQuotedFrom</code></a>, <a href="https://www.w3.org/TR/prov-o/#wasRevisionOf"><code>prov:wasRevisionOf</code></a>, <a href="https://www.w3.org/TR/prov-o/#hadPrimarySource"><code>prov:hadPrimarySource</code></a>, <a href="https://www.w3.org/TR/prov-o/#alternateOf"><code>prov:alternateOf</code></a>, <a href="https://www.w3.org/TR/prov-o/#specializationOf"><code>prov:specializationOf</code></a>)</td></tr></tbody></table>

#### 6.12.1 Property: relation<a href="#Property:relationship_relation" class="self-link"></a>

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://purl.org/dc/terms/relation">dct:relation</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The resource related to the source resource.</td></tr><tr class="even"><td>Usage note:</td><td>In the context of a <code>dcat:Relationship</code> this is expected to point to another <code>dcat:Dataset</code> or other cataloged resource.</td></tr></tbody></table>

#### 6.12.2 Property: had role<a href="#Property:relationship_hadRole" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#hadRole">dcat:hadRole</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The function of an entity or agent with respect to another entity or resource.</td></tr><tr class="even"><td>Domain:</td><td><a href="https://www.w3.org/TR/prov-o/#Attribution"><code>prov:Attribution</code></a> or <a href="#Class:Relationship"><code>dcat:Relationship</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="#Class:Role"><code>dcat:Role</code></a></td></tr><tr class="even"><td>Usage note:</td><td>May be used in a qualified-attribution to specify the role of an Agent with respect to an Entity. It is recommended that the value be taken from a controlled vocabulary of agent roles, such as [<a href="#bib-iso-19115" class="bibref" title="Geographic information -- Metadata">ISO-19115</a>] <a href="https://standards.iso.org/iso/19115/resources/Codelists/gml/CI_RoleCode.xml"><code>CI_RoleCode</code></a>.</td></tr><tr class="odd"><td>Usage note:</td><td>May be used in a qualified-relation to specify the role of an Entity with respect to another Entity. It is recommended that the value be taken from a controlled vocabulary of entity roles.</td></tr></tbody></table>

This DCAT property complements [`prov:hadRole`](https://www.w3.org/TR/prov-o/#hadRole) which provides the function of an entity or agent with respect to an activity.

### 6.13 Class: Role<a href="#Class:Role" class="self-link"></a>

Note

New class added in this revision of DCAT.

Examples illustrating use of this class are given in <a href="#qualified-forms" class="sec-ref">§ 13. Qualified relations</a>.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>RDF Class:</th><th><a href="http://www.w3.org/ns/dcat#Role">dcat:Role</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships.</td></tr><tr class="even"><td>Sub-class of:</td><td><a href="http://www.w3.org/2004/02/skos/core#Concept"><code>skos:Concept</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Used in a qualified-attribution to specify the role of an Agent with respect to an Entity. It is recommended that the values be managed as a controlled vocabulary of agent roles, such as [<a href="#bib-iso-19115-1" class="bibref" title="Geographic information -- Metadata -- Part 1: Fundamentals">ISO-19115-1</a>] <a href="https://standards.iso.org/iso/19115/resources/Codelists/gml/CI_RoleCode.xml"><code>CI_RoleCode</code></a>.</td></tr><tr class="even"><td>Usage note:</td><td><p>Used in a qualified-relation to specify the role of an Entity with respect to another Entity. It is recommended that the values be managed as a controlled vocabulary of entity roles such as</p><ul><li>[<a href="#bib-iso-19115-1" class="bibref" title="Geographic information -- Metadata -- Part 1: Fundamentals">ISO-19115-1</a>] <a href="https://standards.iso.org/iso/19115/resources/Codelists/gml/DS_AssociationTypeCode.xml"><code>DS_AssociationTypeCode</code></a></li><li>IANA Registry of Link Relations [<a href="#bib-iana-relations" class="bibref" title="Link Relations">IANA-RELATIONS</a>]</li><li>DataCite metadata schema [<a href="#bib-datacite" class="bibref" title="DataCite Metadata Schema">DataCite</a>]</li><li><a href="https://id.loc.gov/vocabulary/relators">MARC relators</a></li></ul></td></tr></tbody></table>

This DCAT class complements [`prov:Role`](https://www.w3.org/TR/prov-o/#Role) which provides the function of an entity or agent with respect to an activity.

### 6.14 Class: Period of Time<a href="#Class:Period_of_Time" class="self-link"></a>

Note

Class added in this context in this revision of DCAT.

The following properties are specific to this class: [start date](#Property:period_start_date), [end date](#Property:period_end_date). [beginning](#Property:period_has_beginning), [end](#Property:period_has_end).

Examples illustrating use of these options for the temporal coverage of a dataset are given in <a href="#temporal-properties" class="sec-ref">§ 9.1 Temporal properties</a>.

<table><thead><tr class="header"><th>RDF Class:</th><th><a href="http://dublincore.org/documents/dcmi-terms/#terms-PeriodOfTime" title="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>An interval of time that is named or defined by its start and end.</td></tr><tr class="even"><td>Usage note:</td><td>The start and end of the interval <em>SHOULD</em> be given by using properties <a href="#Property:period_start_date"><code title="http://www.w3.org/ns/dcat#startDate">dcat:startDate</code></a> or <a href="#Property:period_has_beginning"><code title="http://www.w3.org/2006/time#hasBeginning">time:hasBeginning</code></a>, and <a href="#Property:period_end_date"><code title="http://www.w3.org/ns/dcat#endDate">dcat:endDate</code></a> or <a href="#Property:period_has_end"><code title="http://www.w3.org/2006/time#hasEnd">time:hasEnd</code></a>, respectively. The interval can also be open - i.e., it can have just a start or just an end.</td></tr></tbody></table>

#### 6.14.1 Property: start date<a href="#Property:period_start_date" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#startDate" title="http://www.w3.org/ns/dcat#startDate">dcat:startDate</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The start of the period.</td></tr><tr class="even"><td>Domain:</td><td><a href="#Class:Period_of_Time"><code title="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="https://www.w3.org/TR/rdf-schema/#ch_literal" title="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a> encoded using the relevant ISO 8601 Date and Time compliant string [<a href="#bib-datetime" class="bibref" title="Date and Time Formats">DATETIME</a>] and typed using the appropriate XML Schema datatype [<a href="#bib-xmlschema11-2" class="bibref" title="W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes">XMLSCHEMA11-2</a>] (<a href="https://www.w3.org/TR/xmlschema11-2/#gYear"><code>xsd:gYear</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#gYearMonth"><code>xsd:gYearMonth</code></a>, <a href="https://www.w3.org/TR/xmlschema11-2/#date"><code>xsd:date</code></a>, or <a href="https://www.w3.org/TR/xmlschema11-2/#dateTime"><code>xsd:dateTime</code></a>).</td></tr></tbody></table>

#### 6.14.2 Property: end date<a href="#Property:period_end_date" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#endDate" title="http://www.w3.org/ns/dcat#endDate">dcat:endDate</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The end of the period.</td></tr><tr class="even"><td>Domain:</td><td><a href="#Class:Period_of_Time"><code title="http://purl.org/dc/terms/PeriodOfTime">dct:PeriodOfTime</code></a></td></tr><tr class="odd"><td>Range:</td><td><a href="https://www.w3.org/TR/rdf-schema/#ch_literal" title="http://www.w3.org/2000/01/rdf-schema#Literal"><code>rdfs:Literal</code></a> encoded using the relevant ISO 8601 Date and Time compliant string [<a href="#bib-datetime" class="bibref" title="Date and Time Formats">DATETIME</a>] and typed using the appropriate XML Schema datatype [<a href="#bib-xmlschema11-2" class="bibref" title="W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes">XMLSCHEMA11-2</a>]</td></tr></tbody></table>

#### 6.14.3 Property: beginning<a href="#Property:period_has_beginning" class="self-link"></a>

Note

Property added in this context in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="https://www.w3.org/TR/owl-time/#time:hasBeginning" title="http://www.w3.org/2006/time#hasBeginning">time:hasBeginning</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Beginning of a period or interval.</td></tr><tr class="even"><td>Range:</td><td><a href="https://www.w3.org/TR/owl-time/#time:Instant"><code title="http://www.w3.org/2006/time#Instant">time:Instant</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Use of the property <code>time:hasBeginning</code> entails that value of the <code>dct:temporal</code> property is a member of the <code>time:TemporalEntity</code> class from [<a href="#bib-owl-time" class="bibref" title="Time Ontology in OWL">OWL-TIME</a>]. In this context this could be taken to imply that <code>dct:PeriodOfTime</code> is equivalent to the sub-class <a href="https://www.w3.org/TR/owl-time/#time:ProperInterval"><code title="http://www.w3.org/2006/time#ProperInterval">time:ProperInterval</code></a></td></tr></tbody></table>

Note

The value of [`time:hasEnd`](https://www.w3.org/TR/owl-time/#time:hasBeginning) is a [`time:Instant`](https://www.w3.org/TR/owl-time/#time:Instant "http://www.w3.org/2006/time#Instant") for whose position several options are available. In particular times that do not use the conventional Gregorian calendar can be expressed, such as geological and archeological periods, and times given as numeric positions on a time-line.

#### 6.14.4 Property: end<a href="#Property:period_has_end" class="self-link"></a>

Note

Property added in this context in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="https://www.w3.org/TR/owl-time/#time:hasEnd" title="http://www.w3.org/2006/time#hasEnd">time:hasEnd</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>End of a period or interval.</td></tr><tr class="even"><td>Range:</td><td><a href="https://www.w3.org/TR/owl-time/#time:Instant"><code title="http://www.w3.org/2006/time#Instant">time:Instant</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>Use of the property <code>time:hasEnd</code> entails that value of the <code>dct:temporal</code> property is a member of the <code>time:TemporalEntity</code> class from [<a href="#bib-owl-time" class="bibref" title="Time Ontology in OWL">OWL-TIME</a>]. In this context this could be taken to imply that <code>dct:PeriodOfTime</code> is equivalent to the sub-class <a href="https://www.w3.org/TR/owl-time/#time:ProperInterval"><code title="http://www.w3.org/2006/time#ProperInterval">time:ProperInterval</code></a></td></tr></tbody></table>

Note

The value of [`time:hasEnd`](https://www.w3.org/TR/owl-time/#time:hasEnd) is a [`time:Instant`](https://www.w3.org/TR/owl-time/#time:Instant "http://www.w3.org/2006/time#Instant") for whose position several options are available. In particular times that do not use the conventional Gregorian calendar can be expressed, such as geological and archeological periods, and times given as numeric positions on a time-line.

### 6.15 Class: Location<a href="#Class:Location" class="self-link"></a>

Note

Class added in this context in this revision of DCAT.

The following properties are specific to this class: [geometry](#Property:location_geometry), [bounding box](#Property:location_bbox), [centroid](#Property:location_centroid).

Examples illustrating use of these options for the spatial coverage of a dataset are given in <a href="#spatial-properties" class="sec-ref">§ 9.2 Spatial properties</a>.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>RDF Class:</th><th><a href="http://dublincore.org/documents/dcmi-terms/#terms-Location" title="http://purl.org/dc/terms/Location">dct:Location</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>A spatial region or named place.</td></tr><tr class="even"><td>Usage note:</td><td><ul><li>For an extensive geometry (i.e., a set of coordinates denoting the vertices of the relevant geographic area), the property <a href="#Property:location_geometry"><code title="http://www.w3.org/ns/locn#geometry">locn:geometry</code></a> [<a href="#bib-locn" class="bibref" title="ISA Programme Location Core Vocabulary">LOCN</a>] <em>SHOULD</em> be used.</li><li>For a geographic bounding box delimiting a spatial area the property <a href="#Property:location_bbox"><code title="http://www.w3.org/ns/dcat#bbox">dcat:bbox</code></a> <em>SHOULD</em> be used.</li><li>For the geographic center of a spatial area, or another characteristic point, the property <a href="#Property:location_centroid"><code title="http://www.w3.org/ns/dcat#centroid">dcat:centroid</code></a> <em>SHOULD</em> be used.</li></ul></td></tr></tbody></table>

#### 6.15.1 Property: geometry<a href="#Property:location_geometry" class="self-link"></a>

Note

Property added in this context in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/locn#geometry" title="http://www.w3.org/ns/locn#geometry">locn:geometry</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>Associates any resource with the corresponding geometry. [<a href="#bib-locn" class="bibref" title="ISA Programme Location Core Vocabulary">LOCN</a>]</td></tr><tr class="even"><td>Range:</td><td><a href="https://www.w3.org/TR/rdf-schema/#ch_literal"><code title="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>The range of this property is intentionally generic, with the purpose of allowing different geometry encodings. E.g., the geometry could be encoded as WKT (<a href="http://www.opengis.net/ont/geosparql#asWKT"><code title="http://www.opengis.net/ont/geosparql#asWKT">geosparql:asWKT</code></a> [<a href="#bib-geosparql" class="bibref" title="GeoSPARQL - A Geographic Query Language for RDF Data">GeoSPARQL</a>]).</td></tr></tbody></table>

Note

The WKT encoding supports geospatial positions expressed in coordinate reference systems other than [WGS84](https://en.wikipedia.org/wiki/World_Geodetic_System#WGS84).

#### 6.15.2 Property: bounding box<a href="#Property:location_bbox" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#bbox" title="http://www.w3.org/ns/dcat#centroid">dcat:bbox</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The geographic bounding box of a resource.</td></tr><tr class="even"><td>Range:</td><td><a href="https://www.w3.org/TR/rdf-schema/#ch_literal"><code title="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>The range of this property is intentionally generic, with the purpose of allowing different geometry encodings. E.g., the geometry could be encoded as WKT (<a href="http://www.opengis.net/ont/geosparql#asWKT"><code title="http://www.opengis.net/ont/geosparql#asWKT">geosparql:asWKT</code></a> [<a href="#bib-geosparql" class="bibref" title="GeoSPARQL - A Geographic Query Language for RDF Data">GeoSPARQL</a>]).</td></tr></tbody></table>

Note

The WKT encoding supports geospatial positions expressed in coordinate reference systems other than [WGS84](https://en.wikipedia.org/wiki/World_Geodetic_System#WGS84).

#### 6.15.3 Property: centroid<a href="#Property:location_centroid" class="self-link"></a>

Note

New property added in this revision of DCAT.

<table><thead><tr class="header"><th>RDF Property:</th><th><a href="http://www.w3.org/ns/dcat#centroid" title="http://www.w3.org/ns/dcat#centroid">dcat:centroid</a></th></tr></thead><tbody><tr class="odd"><td>Definition:</td><td>The geographic center (centroid) of a resource.</td></tr><tr class="even"><td>Range:</td><td><a href="https://www.w3.org/TR/rdf-schema/#ch_literal"><code title="http://www.w3.org/2000/01/rdf-schema#Literal">rdfs:Literal</code></a></td></tr><tr class="odd"><td>Usage note:</td><td>The range of this property is intentionally generic, with the purpose of allowing different geometry encodings. E.g., the geometry could be encoded as WKT (<a href="http://www.opengis.net/ont/geosparql#asWKT"><code title="http://www.opengis.net/ont/geosparql#asWKT">geosparql:asWKT</code></a> [<a href="#bib-geosparql" class="bibref" title="GeoSPARQL - A Geographic Query Language for RDF Data">GeoSPARQL</a>]).</td></tr></tbody></table>

Note

The WKT encoding supports geospatial positions expressed in coordinate reference systems other than [WGS84](https://en.wikipedia.org/wiki/World_Geodetic_System#WGS84).

7. Dereferenceable identifiers<a href="#dereferenceable-identifiers" class="self-link"></a>
-------------------------------------------------------------------------------------------

*This section is non-normative.*

The scientific and data provider communities use a number of different identifiers for publications, authors and data. DCAT primarily relies on persistent HTTP URIs as an effective way of making identifiers actionable. Notably, quite a few identifier schemes can be encoded as dereferenceable HTTP URIs, and some of them are also returning machine-readable metadata (e.g., DOIs \[<a href="#bib-iso-26324" class="bibref" title="Information and documentation -- Digital object identifier system">ISO-26324</a>\] and [ORCIDs](https://orcid.org/)). Regardless, data providers still might need to refer to legacy identifiers, non-HTTP dereferenceable identifiers, locally minted or third-party-provided identifiers. In these cases, \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\] and \[<a href="#bib-vocab-adms" class="bibref" title="Asset Description Metadata Schema (ADMS)">VOCAB-ADMS</a>\] can be of use.

The property [`dct:identifier`](#Property:resource_identifier) explicitly indicates HTTP URIs as well as legacy identifiers. In the following examples, [`dct:identifier`](#Property:resource_identifier) identifies a dataset, but it can similarly be used with any kind of resources.

<a href="#ex-identifier" class="self-link">Example 13</a>

    <https://example.org/id> a dcat:Dataset;
      dct:identifier "https://example.org/id"^^xsd:anyURI ;
      .

Proxy dereferenceable URIs can be used when resources have not HTTP dereferenceable IDs. For example, in <a href="#ex-proxy-id" class="box-ref">Example 14</a>, `https://example.org/proxyid` is a proxy for `id`.

<a href="#ex-proxy-id" class="self-link">Example 14</a>

    <https://example.org/proxyid> a dcat:Dataset;
      dct:identifier "id"^^xsd:string ;
      .

The property [`adms:identifier`](https://www.w3.org/TR/vocab-adms/#adms-identifier) \[<a href="#bib-vocab-adms" class="bibref" title="Asset Description Metadata Schema (ADMS)">VOCAB-ADMS</a>\] can express other locally minted identifiers or external identifiers, like DOI, [ELI](https://eur-lex.europa.eu/eli-register/about.html), [arΧiv](https://arxiv.org/) for creative works and [ORCID](https://orcid.org/), [VIAF](https://viaf.org/), [ISNI](http://www.isni.org/) for actors such as authors and publishers, as long as the identifiers are globally unique and stable.

<a href="#ex-adms-identifier" class="box-ref">Example 15</a> uses [`adms:schemaAgency`](https://www.w3.org/TR/vocab-adms/#schemaAgency) and [`dct:creator`](http://dublincore.org/documents/dcmi-terms/#creator) to represent the authority that defines the identifier scheme (e.g., the [DOI foundation](https://www.doi.org/) in the example), `adms:schemaAgency` is used when the authority has no URI associated. The [CrossRef](https://www.crossref.org/display-guidelines/) and [DataCite](https://support.datacite.org/docs/datacite-doi-display-guidelines) display guidelines recommend displaying DOIs as full URL link in the form `https://doi.org/10.xxxx/xxxxx/`.

<a href="#ex-adms-identifier" class="self-link">Example 15</a>

    <https://dcat.example.org/id> a dcat:Dataset;
      adms:identifier  <https://example.org/iddoi> ;
      dct:publisher <https://example.org/PoelenJorritH> ;
      .

    <https://dcat.example.org/iddoi> a adms:Identifier ;
      # reading https://www.w3.org/TR/skos-reference/#notations more than one skos:notation can be set
      skos:notation "https://doi.org/10.5281/zenodo.1486279"^^xsd:anyURI;
      # the authority/agency defining the identifier scheme, used if the agency has no URI
      adms:schemaAgency "International DOI Foundation" ;
      # the authority/agency defining the identifier scheme, used if the agency has URI
      dct:creator  ex:InternationalDOIFundation ;
      .

    ex:InternationalDOIFundation a foaf:Organization ;
      rdfs:label "International DOI Foundation" ;
      foaf:homepage <https://www.doi.org/> ;
      .

    <https://dcat.example.org/PoelenJorritH> a foaf:Person;
      foaf:name "Jorrit H. Poelen" ;
      adms:identifier <https://example.org/PoelenJorritHID> ;
      .

    <https://dcat.example.org/PoelenJorritHID> a adms:Identifier;
      skos:notation "https://orcid.org/0000-0003-3138-4118"^^xsd:anyURI ;
      # the authority/agency defining the identifier scheme, used if the agency has no URI
      adms:schemaAgency "ORCID" ;
      .

<a href="#ex-adms-identifier" class="box-ref">Example 15</a> does not represent the authority responsible for assigning and maintaining identifiers using that scheme (e.g., [Zenodo](https://zenodo.org/)) as naming the registrant goes against the philosophy of DOI, where the sub-spaces are abstracted from the organization that registers them, with the advantage that DOIs do not change when the organization changes or the responsibility for that sub-space is handed over to someone else. <a href="#ex-adms-identifier" class="box-ref">Example 15</a> shows a locally minted identifier for the creator of the dataset (e.g., `https://example.org/PoelenJorritHID`) and its correspondent ORCID identifier (e.g., `https://orcid.org/0000-0003-3138-4118`).

When the HTTP dereferenceable ID returns an RDF/OWL description for the dataset, the use of `owl:sameAs` might be considered. For example,

<a href="#ex-owl-sameas" class="self-link">Example 16</a>

    <https://dcat.example.org/id3> a dcat:Dataset;
      ...
      owl:sameAs <https://doi.org/10.5281/zenodo.1486279> ;
      .

when dereferenced with media type `text/turtle`, `https://doi.org/10.5281/zenodo.1486279` returns a \[<a href="#bib-schema-org" class="bibref" title="Schema.org">SCHEMA-ORG</a>\] description for the dataset, which might dynamically enrich the description provided by `https://example.org/id`.

Note

Identifiers for datasets should follow the best practices in [§ <span class="secno">8.7 </span>Data Identifiers](https://www.w3.org/TR/dwbp/#DataIdentifiers) of \[<a href="#bib-dwbp" class="bibref" title="Data on the Web Best Practices">DWBP</a>\].

The need to distinguish between primary and alternative (or legacy) identifiers for a dataset within DCAT has been posed as a requirement. However, it is very much application-specific and would be better addressed in DCAT profiles rather than mandating a general approach.

Depending on the application context, specific guidelines such as ["DCAT-AP: How to manage duplicates?"](https://joinup.ec.europa.eu/release/dcat-ap-how-manage-duplicates) can be adopted for distinguishing authoritative datasets from dataset harvested by third parties catalogs.

### 7.1 Indicating common identifier types<a href="#identifiers-type" class="self-link"></a>

If identifiers are not HTTP dereferenceable, common identifier types can be served as [RDF datatypes](https://www.w3.org/TR/rdf11-concepts/#dfn-recognized-datatype-iris) \[<a href="#bib-rdf11-concepts" class="bibref" title="RDF 1.1 Concepts and Abstract Syntax">RDF11-CONCEPTS</a>\] or custom [OWL datatypes](https://www.w3.org/TR/owl2-syntax/#Datatype_Definitions) \[<a href="#bib-owl2-syntax" class="bibref" title="OWL 2 Web Ontology Language Structural Specification and Functional-Style Syntax (Second Edition)">OWL2-SYNTAX</a>\] for the sake of interoperability, see `ex:type` in <a href="#ex-identifier-type" class="box-ref">Example 17</a>.

<a href="#ex-identifier-type" class="self-link">Example 17</a>

    <https://dcat.example.org/id4> a dcat:Dataset;
      ...
      adms:identifier <https://example.org/sid> .

    <https://dcat.example.org/sid5> rdf:type adms:Identifier ;
      # the actual id
      skos:notation "PA 1-060-815"^^ex:type ;
      # Human readable schema agency
      adms:schemaAgency "US Copyright Office" ;
      dct:issued "2001-09-12"^^xsd:date ;
      .

If a registered URI type is used (following \[<a href="#bib-rfc3986" class="bibref" title="Uniform Resource Identifier (URI): Generic Syntax">RFC3986</a>\], [§ <span class="secno">3.1 </span>Scheme](https://tools.ietf.org/html/rfc3986#section-3.1)), the identifier scheme is part of the URI; thus indicating a separate identifier scheme in 'type' is redundant. For example, DOI is registered as a namespace in the `info` URI scheme \[<a href="#bib-iana-uri-schemes" class="bibref" title="Uniform Resource Identifier (URI) Schemes">IANA-URI-SCHEMES</a>\] (see [DOI FAQ \#11](https://www.doi.org/faq.html)), so according to \[<a href="#bib-rfc3986" class="bibref" title="Uniform Resource Identifier (URI): Generic Syntax">RFC3986</a>\], it should be encoded as in <a href="#ex-identifier-type-in-uri" class="box-ref">Example 18</a>.

<a href="#ex-identifier-type-in-uri" class="self-link">Example 18</a>

    <https://dcat.example.org/sid6> rdf:type adms:Identifier ;
      # the actual id
      skos:notation "info:doi/10.1109/5.771073"^^xsd:anyURI .

Otherwise, examples of common types for identifier scheme ([arXiv](https://arxiv.org/help/arxiv_identifier), etc.) are defined in [DataCite schema](https://schema.datacite.org/meta/kernel-4.1/include/datacite-relatedIdentifierType-v4.xsd) and [FAIRsharing Registry](https://fairsharing.org/standards/?q=&selected_facets=type_exact:identifier%20schema).

8. License and rights statements<a href="#license-rights" class="self-link"></a>
--------------------------------------------------------------------------------

*This section is non-normative.*

Note

DCAT 2014 handling of license and rights do not appear to satisfy all requirements \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\]. The recently completed W3C ODRL model \[<a href="#bib-odrl-model" class="bibref" title="ODRL Information Model 2.2">ODRL-MODEL</a>\] and vocabulary \[<a href="#bib-odrl-vocab" class="bibref" title="ODRL Vocabulary &amp; Expression 2.2">ODRL-VOCAB</a>\] provide a rich language for describing many kinds of rights and obligations. In this section, we describe some patterns for linking DCAT Datasets and/or Distributions to suitable license and rights expressions.

Selecting the right way to express conditions for access to and re-use of resources can be complex. Implementers should always seek legal advice before deciding which conditions apply to the resource being described.

This specification distinguishes three main situations: one where a statement is associated with a resource that is explicitly declared as a 'license'; a second, where the statement is associated with a resource denoting only access rights; a third, covering all the other cases - i.e., statements not concerning licensing conditions and/or access rights (e.g., copyright statements).

Note

The provision of licensing conditions and access rights complies with the Best Practices 4 ("[Provide data license information](https://www.w3.org/TR/dwbp/#licenses)") and 22 ("[Provide an explanation for data that is not available](https://www.w3.org/TR/dwbp/#DataUnavailabilityReference)"), respectively, from \[<a href="#bib-dwbp" class="bibref" title="Data on the Web Best Practices">DWBP</a>\].

To address these scenarios, it is recommended to use the property `dct:rights`, and its sub-properties `dct:license` and `dct:accessRights`. More precisely:

1.  use [`dct:license`](http://dublincore.org/documents/dcmi-terms/#terms-license) to refer to licenses;

    Note

    For interoperability, it is recommended to use canonical URIs of well-known licenses such as [those defined by Creative Commons](https://creativecommons.org/share-your-work/licensing-types-examples/).

2.  use [`dct:accessRights`](http://dublincore.org/documents/dcmi-terms/#terms-accessRights) to express statements concerning only access rights (e.g., whether data can be accessed by anyone or just by authorized parties);

    Note

    Access rights can also be expressed as code lists / taxonomies. Examples include the access rights code list \[<a href="#bib-mdr-ar" class="bibref" title="Named Authority List: Access rights">MDR-AR</a>\] used in \[<a href="#bib-dcat-ap" class="bibref" title="DCAT Application Profile for data portals in Europe. Version 1.2.1">DCAT-AP</a>\] and the [Eprints Access Rights Vocabulary Encoding Scheme](http://purl.org/eprint/accessRights/).

3.  use [`dct:rights`](http://dublincore.org/documents/dcmi-terms/#terms-rights) for all the other types of rights statements - those which are not covered by `dct:license` and `dct:accessRights`, such as copyright statements.

    Note

    A more sophisticated approach to express rights, based on and extending \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\], is provided by the Open Data Rights Statement Vocabulary (ODRS) \[<a href="#bib-odrs" class="bibref" title="Open Data Rights Statement Vocabulary">ODRS</a>\], which defines properties for specifying, among others, copyright statements and copyright notices.

Finally, in the particular case when rights are expressed via [ODRL policies](https://www.w3.org/TR/odrl-vocab/#term-Policy), it is recommended to use the [`odrl:hasPolicy`](https://www.w3.org/TR/odrl-vocab/#term-hasPolicy) property as the link from the description of the cataloged resource or distribution to the ODRL policy, in addition to the corresponding \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\] property that matches the same ODRL policy type.

Note

The Open Digital Rights Language (ODRL) \[<a href="#bib-odrl-vocab" class="bibref" title="ODRL Vocabulary &amp; Expression 2.2">ODRL-VOCAB</a>\] is a policy expression language that provides a flexible and interoperable information model, vocabulary, and encoding mechanisms for representing statements about usage (i.e. permissions, prohibitions, and obligations) of content and services.

Recommendations on the use of these properties on the different types of resources defined in DCAT are provided in the relevant class descriptions.

9. Time and space<a href="#time-and-space" class="self-link"></a>
-----------------------------------------------------------------

*This section is non-normative.*

### 9.1 Temporal properties<a href="#temporal-properties" class="self-link"></a>

Five temporal properties of resources may be described using DCAT.

1.  The release time of a resource is given using [`dct:issued`](#Property:resource_release_date). The value is usually encoded as a [`xsd:date`](https://www.w3.org/TR/xmlschema11-2/#date).
2.  The revision or update time of a resource is given using [`dct:modified`](#Property:resource_update_date). The value is usually encoded as a [`xsd:date`](https://www.w3.org/TR/xmlschema11-2/#date).
3.  The update schedule for a resource is indicated using [`dct:accrualPeriodicity`](#Property:dataset_frequency). The value should be taken from a controlled vocabulary such as [Dublin Core Collection Description Frequency Vocabulary](http://www.dublincore.org/specifications/dublin-core/collection-description/frequency/).
4.  The minimum temporal separation of items in a dataset is given using [`dcat:temporalResolution`](#Property:dataset_temporal_resolution). The value is encoded as a [`xsd:duration`](https://www.w3.org/TR/xmlschema11-2/#duration). The update schedule and the temporal resolution can be combined to support the description of different kinds of time-series data as shown below.
5.  The temporal extent of a dataset is given using [`dct:temporal`](#Property:dataset_temporal). The value is a [`dct:PeriodOfTime`](http://purl.org/dc/terms/PeriodOfTime). A number of options for expressing the details of a `dct:PeriodOfTime` are recommended in <a href="#Class:Period_of_Time" class="sec-ref">§ 6.14 Class: Period of Time</a>. Examples of these follow.

<a href="#ex-time-series-1" class="self-link">Example 19</a><span class="example-title">: 15-minute time-series published daily</span>

    <ds913>
      a dcat:Dataset ;
      dct:accrualPeriodicity <http://purl.org/cld/freq/daily> ;
      dcat:temporalResolution "PT15M"^^xsd:duration ;
    .

<a href="#ex-time-series-2" class="self-link">Example 20</a><span class="example-title">: Hourly data published immediately</span>

    <ds782>
      a dcat:Dataset ;
      dct:accrualPeriodicity <http://purl.org/cld/freq/continuous> ;
      dcat:temporalResolution "PT1H"^^xsd:duration ;
    .

<a href="#ex-temporal-coverage-closed-interval" class="self-link">Example 21</a><span class="example-title">: Temporal coverage as closed interval</span>

    <ds257> a dcat:Dataset ;
      dct:temporal [ a dct:PeriodOfTime ;
        dcat:startDate "2016-03-04"^^xsd:date ;
        dcat:endDate   "2018-08-05"^^xsd:date ;
      ] .

<a href="#ex-temporal-coverage-closed-proper-interval" class="self-link">Example 22</a><span class="example-title">: Temporal coverage as closed interval, using time:ProperInterval</span>

The following dataset specification is equivalent to the one in <a href="#ex-temporal-coverage-closed-interval" class="box-ref">Example 21</a>, but it uses \[<a href="#bib-owl-time" class="bibref" title="Time Ontology in OWL">OWL-TIME</a>\]:

    <ds348> a dcat:Dataset ;
      dct:temporal [ a dct:PeriodOfTime , time:ProperInterval ;
        time:hasBeginning [ a time:Instant ;
          time:inXSDDate "2016-03-04"^^xsd:date ;
        ] ;
        time:hasEnd [ a time:Instant ;
          time:inXSDDate "2018-08-05"^^xsd:date ;
        ] ;
      ] .

<a href="#ex-temporal-coverage-closed-proper-interval-gyear" class="self-link">Example 23</a><span class="example-title">: Temporal coverage as proper interval using gYear</span>

    <ds429> a dcat:Dataset ;
      dct:temporal [ a dct:PeriodOfTime , time:ProperInterval ;
        time:hasBeginning [ a time:Instant ;
          time:inXSDgYear "1914"^^xsd:gYear ;
        ] ;
        time:hasEnd [ a time:Instant ;
          time:inXSDgYear "1939"^^xsd:gYear ;
        ] ;
      ] .

<a href="#ex-temporal-coverage-geologic" class="self-link">Example 24</a><span class="example-title">: Temporal coverage for a geologic dataset</span>

    <ds850> a dcat:Dataset ;
      dct:temporal [ a dct:PeriodOfTime , time:ProperInterval ;
        time:hasBeginning [ a time:Instant ;
          time:inTimePosition [ a time:TimePosition ;
            time:hasTRS <http://resource.geosciml.org/classifier/cgi/geologicage/ma> ;
            time:numericPosition "541.0"^^xsd:decimal ;
          ] ;
        ] ;
        time:hasEnd [ a time:Instant ;
          time:inTimePosition [ a time:TimePosition ;
            time:hasTRS <http://resource.geosciml.org/classifier/cgi/geologicage/ma> ;
            time:numericPosition "251.902"^^xsd:decimal ;
          ] ;
        ] ;
      ] .

<a href="#ex-temporal-coverage-open-end-interval" class="self-link">Example 25</a><span class="example-title">: Temporal coverage as open interval (no end date)</span>

    <ds127> a dcat:Dataset ;
      dct:temporal [ a dct:PeriodOfTime ;
        dcat:startDate "2016-03-04"^^xsd:date ;
      ] .

<a href="#ex-temporal-coverage-open-begin-interval" class="self-link">Example 26</a><span class="example-title">: Temporal coverage as open interval (no beginning)</span>

    <ds586> a dcat:Dataset ;
      dct:temporal [ a dct:PeriodOfTime , time:ProperInterval ;
        time:hasEnd [ time:inXSDDate "2018-08-05"^^xsd:date ] ;
      ] .

### 9.2 Spatial properties<a href="#spatial-properties" class="self-link"></a>

Two spatial properties of datasets may be described using DCAT.

1.  The minimum spatial separation of items in a dataset is given using [`dcat:spatialResolutionInMeters`](#Property:dataset_spatial_resolution). The value is a decimal number.

    An example of the use of [`dcat:spatialResolutionInMeters`](#Property:dataset_spatial_resolution) is given in <a href="#ex-dataset" class="box-ref">Example 3</a>.

2.  The spatial extent of a dataset is given using [`dct:spatial`](#Property:dataset_spatial). The value is a [`dct:Location`](http://purl.org/dc/terms/Location). A number of options for expressing the details of a `dct:Location` are recommended in <a href="#Class:Location" class="sec-ref">§ 6.15 Class: Location</a>.

    Examples of these follow.

Note

The following examples are built on the relevant ones included in \[<a href="#bib-sdw-bp" class="bibref" title="Spatial Data on the Web Best Practices">SDW-BP</a>\] (in particular, [§ <span class="secno">12.2.2 </span>Geometries and coordinate reference systems](https://www.w3.org/TR/sdw-bp/#geometry-and-crs)).

In the examples, for properties `locn:geometry`, `dct:bbox`, and `dcat:centroid`, the geometry is always specified with WKT. As per \[<a href="#bib-geosparql" class="bibref" title="GeoSPARQL - A Geographic Query Language for RDF Data">GeoSPARQL</a>\], when the CRS specification is omitted this implies that the default CRS is used - namely CRS84 (corresponding to WGS84, but with axis order longitude/latitude).

For more details on coordinate reference systems and geometry encoding, we refer the reader to \[<a href="#bib-sdw-bp" class="bibref" title="Spatial Data on the Web Best Practices">SDW-BP</a>\], and, in particular, to the following sections:

-   [§ <span class="secno">9 </span>Coordinate Reference Systems (CRS)](https://www.w3.org/TR/sdw-bp/#CRS-background)
-   [§ <span class="secno">12.2.2 </span>Geometries and coordinate reference systems](https://www.w3.org/TR/sdw-bp/#geometry-and-crs)

<a href="#ex-spatial-coverage-geometry" class="self-link">Example 27</a><span class="example-title">: Spatial coverage as a polygon</span>

A dataset whose spatial coverage corresponds to Anne Frank's house in Amsterdam, specified as a polygon (the coordinate reference system is CRS84).

    <AnneFrank_0> a dcat:Dataset ;
      dct:spatial [
        a dct:Location ;
        locn:geometry """POLYGON ((
          4.8842353 52.375108 , 4.884276 52.375153 ,
          4.8842567 52.375159 , 4.883981 52.375254 ,
          4.8838502 52.375109 , 4.883819 52.375075 ,
          4.8841037 52.374979 , 4.884143 52.374965 ,
          4.8842069 52.375035 , 4.884263 52.375016 ,
          4.8843200 52.374996 , 4.884255 52.374926 ,
          4.8843289 52.374901 , 4.884451 52.375034 ,
          4.8842353 52.375108
        ))"""^^geosparql:asWKT ;
      ] .

![Figure 2 <span class="fig-title">Map preview of a spatial coverage specified with a geometry</span>](./images/ex-spatial-coverage-geometry-anne-frank-house.png)

<a href="#ex-spatial-coverage-geometry-with-crs" class="self-link">Example 28</a><span class="example-title">: Spatial coverage as a polygon, using a specific CRS</span>

The same dataset in <a href="#ex-spatial-coverage-geometry" class="box-ref">Example 27</a>, but where the coordinates of the polygon are specified by using the national Dutch CRS - [EPSG:28992](http://www.epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::28992) ("Amersfoort / RD New").

    <AnneFrank_1> a dcat:Dataset ;
      dct:spatial [
        a dct:Location ;
        locn:geometry """<http://www.opengis.net/def/crs/EPSG/0/28992> POLYGON ((
          120749.725 487589.422 , 120752.55 487594.375  ,
          120751.227 487595.129 , 120732.539 487605.788 ,
          120723.505 487589.745 , 120721.387 487585.939 ,
          120740.668 487575.07  , 120743.316 487573.589 ,
          120747.735 487581.337 , 120751.564 487579.154 ,
          120755.411 487576.96  , 120750.935 487569.172 ,
          120755.941 487566.288 , 120764.369 487581.066 ,
          120749.725 487589.422
        ))"""^^geosparql:asWKT ;
      ] .

<a href="#ex-spatial-coverage-centroid" class="self-link">Example 29</a><span class="example-title">: Spatial coverage as centroid</span>

The same dataset of <a href="#ex-spatial-coverage-geometry" class="box-ref">Example 27</a>, buth where spatial coverage is specified by using the centroid / representative point of Anne Frank's house.

    <AnneFrank_2> a dcat:Dataset ;
      dct:spatial [
        a dct:Location ;
        dcat:centroid "POINT(4.88412 52.37509)"^^geosparql:asWKT ;
      ] .

![Figure 3 <span class="fig-title">Map preview of a spatial coverage specified with a centroid</span>](./images/ex-spatial-coverage-centroid-anne-frank-house.png)

Note

This point location could be expressed using the \[<a href="#bib-w3c-basic-geo" class="bibref" title="Basic Geo (WGS84 lat/long) Vocabulary">W3C-BASIC-GEO</a>\] vocabulary. If it is required to provide the `w3cgeo:Point` formulation, then it should be in addition to, not in place of, a `dcat:centroid` containing a WKT literal ([`geosparql:asWKT`](http://www.opengis.net/ont/geosparql#asWKT) \[<a href="#bib-geosparql" class="bibref" title="GeoSPARQL - A Geographic Query Language for RDF Data">GeoSPARQL</a>\]). This ensures interoperability with other DCAT dataset descriptions. For example:

    <AnneFrank_3> a dcat:Dataset ;
      dct:spatial [
        a dct:Location , w3cgeo:Point ;
        dcat:centroid "POINT(4.88412 52.37509)"^^geosparql:asWKT ;
        w3cgeo:lat  "52.37509"^^xsd:decimal ;
        w3cgeo:long "4.88412"^^xsd:decimal ;
      ] .

<a href="#ex-spatial-coverage-bbox" class="self-link">Example 30</a><span class="example-title">: Spatial coverage as bounding box</span>

The Dutch dataset of postal addresses, with its spatial coverage (Netherlands) specified as a bounding box.

    <Dutch-postal> a dcat:Dataset ;
      dct:title "Adressen"@nl ;
      dct:title "Addresses"@en ;
      dct:description """INSPIRE Adressen afkomstig uit de basisregistratie Adressen,
                       beschikbaar voor heel Nederland"""@nl ;
      dct:description """INSPIRE addresses derived from the Addresses base registry,
                       available for the Netherlands"""@en ;
      dcat:theme <http://inspire.ec.europa.eu/theme/ad> ;
      dct:spatial [
        a dct:Location ;
        dcat:bbox """POLYGON((
          3.053 47.975 , 7.24  47.975 ,
          7.24  53.504 , 3.053 53.504 ,
          3.053 47.975
        ))"""^^geosparql:asWKT ;
      ] .

![Figure 4 <span class="fig-title">Map preview of a spatial coverage specified with a bounding box</span>](./images/ex-spatial-coverage-bbox-netherlands.png)

10. Versioning<a href="#dataset-versions" class="self-link"></a>
----------------------------------------------------------------

*This section is non-normative.*

Versioning can be applied to any of the first class citizens DCAT resources including Catalogs, Datasets, Distributions. The notion of version is very much related to the community practices, data management policy and the workflows in place. It is up to data providers to decide when and why a new version should be released. For this reason, DCAT refrains from providing definitions or rules about when changes in a resource should turn in a new release of it.

Versioning may be understood as involving relationships between datasets, which is supported by the [`dcat:qualifiedRelation`](#Property:resource_qualified_relation) and described in <a href="#qualified-relationship" class="sec-ref">§ 13.2 Relationships between datasets and other resources</a>. The class [`dcat:Relationship`](#Class:Relationship) supports providing information about the relationship, and could be extended for versioning information.

11. Data citation<a href="#data-citation" class="self-link"></a>
----------------------------------------------------------------

*This section is non-normative.*

[Dataset citation](https://www.w3.org/TR/dcat-ucr/#RDSC) is one of the requirements identified for this DCAT revision. Data citation is the practice of referencing data in a similar way as when providing bibliographic references, acknowledging data as a first class output in any investigative process. Data citation offers multiple benefits, such as supporting proper attribution and credit to those producing the data, facilitating data discovery, supporting tracking the impact and reuse of data, allowing for collaboration and re-use of data, and enabling the reproducibility of results based on the data.

To support data citation, the dataset description should include at a minimum: the dataset identifier, the dataset creator(s), the dataset title, the dataset publisher and the dataset publication or release date. These elements are those required by the DataCite metadata schema \[<a href="#bib-datacite" class="bibref" title="DataCite Metadata Schema">DataCite</a>\], which is the metadata associated by the persistent identifiers (Digital Object Identifiers or DOIs) assigned by \[<a href="#bib-datacite" class="bibref" title="DataCite Metadata Schema">DataCite</a>\] to research data.

In order to support data citation, this DCAT revision has added the consideration of [dereferenceable identifiers](#dereferenceable-identifiers) and support for indicating [the creators of the cataloged resources](#Property:resource_creator). The remaining properties necessary for data citation were already available in DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\].

The constraints on the availability of properties required for data citation in the dataset description can be represented as a DCAT data citation profile.

12. Quality information<a href="#quality-information" class="self-link"></a>
----------------------------------------------------------------------------

*This section is non-normative.*

Note

This section is non-normative as it provides guidance on how to document the quality of DCAT first class entities (e.g., datasets, distributions) and it does not define new DCAT terms. The guidance relies on the Data Quality Vocabulary (DQV) \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\], which is a W3C Group Note.

The Data Quality Vocabulary (DQV) \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\] offers common modelling patterns for different aspects of Data Quality. It can relate DCAT datasets and distributions with different types of quality information including:

-   [`dqv:QualityAnnotation`](https://www.w3.org/TR/vocab-dqv/#dqv:QualityAnnotation), which represents feedback and quality certificates given about the dataset or its distribution.
-   [`dqv:QualityPolicy`](https://www.w3.org/TR/vocab-dqv/#dqv:QualityPolicy), which represents a policy or agreement that is chiefly governed by data quality concerns.
-   [`dqv:QualityMeasurement`](https://www.w3.org/TR/vocab-dqv/#dqv:QualityMeasurement), which represents a metric value providing quantitative or qualitative information about the dataset or distribution.

Each type of quality information can pertain to one or more quality dimensions, namely, quality characteristics relevant to the consumer. The practice to see the quality as a multi-dimensional space is consolidated in the field of quality management to split the quality management into addressable chunks. DQV does not define a normative list of quality dimensions. It offers the quality dimensions proposed in ISO/IEC 25012 \[<a href="#bib-iso-iec-25012" class="bibref" title="ISO/IEC 25012 - Data Quality model">ISO-IEC-25012</a>\] and \[<a href="#bib-zaverietal" class="bibref" title="Quality assessment for Linked Data: A Survey">ZaveriEtAl</a>\] as two possible starting points. It also provides an [RDF representation](https://www.w3.org/2016/05/ldqd) for the quality dimensions and categories defined in the latter. Ultimately, implementers will need to choose themselves the collection of quality dimensions that best fits their needs. The following section shows how DCAT and DQV can be coupled to describe the quality of datasets and distributions. For a comprehensive introduction and further examples of use, please refer to \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\].

Note

The following examples make no comments on where the quality information would reside and how it is managed. That is out of scope for the DCAT vocabulary. The assumption made is that the quality individuals are available using the URIs indicated. Besides, the examples and more in general the \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\] is neutral to the data portal design choices on how to collect quality information. For example, data portals can collect \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\] instances by implementing specific UI to annotate data or by taking inputs from 3rd-party services.

### 12.1 Providing quality information<a href="#quality-example1" class="self-link"></a>

A data consumer (`:consumer1`) describes the quality of the dataset `:genoaBusStopsDataset` that includes a georeferenced list of bus stops in Genoa. He/she annotates the dataset with a DQV quality note (`:genoaBusStopsDatasetCompletenessNote`) about data completeness (`ldqd:completeness`) to warn that the dataset includes only 20500 out of the 30000 stops.

<a href="#ex-genoa-bus-stops-dataset-completeness-note" class="self-link">Example 31</a>

    :genoaBusStopsDataset a dcat:Dataset ;
      dqv:hasQualityAnnotation :genoaBusStopsDatasetCompletenessNote .

    :genoaBusStopsDatasetCompletenessNote a dqv:UserQualityFeedback ;
      oa:hasTarget :genoaBusStopsDataset ;
      oa:hasBody :textBody ;
      oa:motivatedBy dqv:qualityAssessment ;
      prov:wasAttributedTo :consumer1 ;
      prov:generatedAtTime "2018-05-27T02:52:02Z"^^xsd:dateTime ;
      dqv:inDimension ldqd:completeness
      .

    :textBody a oa:TextualBody ;
      rdf:value "Incomplete dataset: it contains only 20500 out of 30000 existing bus stops" ;
      dc:language "en" ;
      dc:format "text/plain"
      .

The activity `:myQualityChecking` employs the service `:myQualityChecker` to check the quality of the `:genoaBusStopsDataset` dataset. The metric `:completenessWRTExpectedNumberOfEntities` is applied to measure the dataset completeness (`ldqd:completeness`) and it results in the quality measurement `:genoaBusStopsDatasetCompletenessMeasurement`.

<a href="#ex-genoa-bus-stops-dataset-completeness-measure" class="self-link">Example 32</a>

    :genoaBusStopsDataset
      dqv:hasQualityMeasurement :genoaBusStopsDatasetCompletenessMeasurement .

    :genoaBusStopsDatasetCompletenessMeasurement a dqv:QualityMeasurement ;
      dqv:computedOn :genoaBusStopsDataset ;
      dqv:isMeasurementOf :completenessWRTExpectedNumberOfEntities ;
      dqv:value "0.6833333"^^xsd:decimal  ;
      prov:wasAttributedTo :myQualityChecker ;
      prov:generatedAtTime "2018-05-27T02:52:02Z"^^xsd:dateTime ;
      prov:wasGeneratedBy :myQualityChecking
      .

    :completenessWRTExpectedNumberOfEntities a dqv:Metric ;
      skos:definition "The degree of completeness as ratio between the actual number of entities included in the dataset and the declared expected number of entities."@en ;
      dqv:expectedDataType xsd:decimal ;
      dqv:inDimension ldqd:completeness .

    # :myQualityChecker is a service computing some quality metrics
    :myQualityChecker a prov:SoftwareAgent ;
      rdfs:label "A quality assessment service"@en .
      # Further details about quality service/software can be provided, for example,
      # deploying  vocabularies such as Dataset Usage Vocabulary (DUV), Dublin Core or ADMS.SW

    # :myQualityChecking is the activity that has generated
    # :genoaBusStopsDatasetCompletenessMeasurement from :genoaBusStopsDataset
    :myQualityChecking a prov:Activity ;
      rdfs:label "The checking of genoaBusStopsDataset's quality"@en ;
      prov:wasAssociatedWith :myQualityChecker ;
      prov:used :genoaBusStopsDataset ;
      prov:generated :genoaBusStopsDatasetCompletenessMeasurement ;
      prov:endedAtTime "2018-05-27T02:52:02Z"^^xsd:dateTime ;
      prov:startedAtTime "2018-05-27T00:52:02Z"^^xsd:dateTime .

Other examples of quality documentation are available in \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\], including examples about [how to express dataset accuracy and precision](https://www.w3.org/TR/vocab-dqv/#ExpressDatasetAccuracyPrecision).

### 12.2 Documenting conformance to standards<a href="#quality-conformance" class="self-link"></a>

This section shows different modelling patterns combining \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\] with \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\] and EARL \[<a href="#bib-earl10-schema" class="bibref" title="Evaluation and Report Language (EARL) 1.0 Schema">EARL10-Schema</a>\] to represent the conformance degree to a stated quality standard and the details about the conformance tests.

#### 12.2.1 Conformance to a standard<a href="#quality-conformance-statement" class="self-link"></a>

The use of [`dct:conformsTo`](http://dublincore.org/documents/dcmi-terms/#terms-conformsTo) and [`dct:Standard`](http://dublincore.org/documents/dcmi-terms/#terms-Standard) is a well-known pattern to represent the conformance to a standard. <a href="#ex-inspire-conformant-dataset" class="box-ref">Example 33</a>, directly borrowed from \[<a href="#bib-sdw-bp" class="bibref" title="Spatial Data on the Web Best Practices">SDW-BP</a>\] ([Example 51](https://www.w3.org/TR/sdw-bp/#ex-geodcat-ap-dataset-conformance-with-specification)), declares a fictional `a:Dataset` conformant to the EU INSPIRE Regulation on interoperability of spatial data sets and services (["Commission Regulation (EU) No 1089/2010 of 23 November 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards interoperability of spatial data sets and services"](http://data.europa.eu/eli/reg/2014/1312/oj)).

<a href="#ex-inspire-conformant-dataset" class="self-link">Example 33</a>

    :Dataset-1 a dcat:Dataset;
      dct:conformsTo <http://data.europa.eu/eli/reg/2014/1312/oj> .

    # Reference standard / specification
    <http://data.europa.eu/eli/reg/2014/1312/oj> a dct:Standard ;
      dct:title "Commission Regulation (EU) No 1089/2010 of 23 November 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards interoperability of spatial data sets and services"@en ;
      dct:issued "2010-11-23"^^xsd:date .

Another example concerns the specification of the coordinate reference system (CRS) used in a dataset - an information which is typically included in geospatial metadata. <a href="#ex-dataset-crs" class="box-ref">Example 34</a> shows how the CRS of a dataset can be specified in DCAT:

<a href="#ex-dataset-crs" class="self-link">Example 34</a>

    :Dataset-2 a dcat:Dataset;
      dct:conformsTo <http://www.opengis.net/def/crs/EPSG/0/28992> .

In <a href="#ex-dataset-crs" class="box-ref">Example 34</a>, `http://www.opengis.net/def/crs/EPSG/0/28992` is a URI from the OGC CRS Registry, corresponding to [EPSG:28992](http://www.epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::28992) ("Amersfoort / RD New") (see also <a href="#ex-spatial-coverage-geometry-with-crs" class="box-ref">Example 28</a>).

Note

The provision of a resource CRS complies with Best Practice 8 ([State how coordinate values are encoded](https://www.w3.org/TR/sdw-bp/#bp-crs)) from \[<a href="#bib-sdw-bp" class="bibref" title="Spatial Data on the Web Best Practices">SDW-BP</a>\].

#### 12.2.2 Degree of conformance<a href="#quality-conformance-degree" class="self-link"></a>

Some legal context requires to specify the degree of conformance. For example, INSPIRE metadata adopts a specific controlled vocabulary \[<a href="#bib-inspire-doc" class="bibref" title="INSPIRE Registry: Degrees of conformity">INSPIRE-DoC</a>\] to express non-conformance and non-evaluation beside the full compliance. Similar controlled vocabularies can be defined in other contexts.

<a href="#ex-conformance-degree" class="box-ref">Example 35</a> specifies some newly minted concepts representing the degree of conformance (i.e., conformant, not conformant) and declares the [`dct:type`](http://dublincore.org/documents/dcmi-terms/#terms-type) for indicating the result of conformance test. Following a pattern used in \[<a href="#bib-geodcat-ap" class="bibref" title="GeoDCAT-AP: A geospatial extension for the DCAT application profile for data portals in Europe. Version 1.0.1">GeoDCAT-AP</a>\], the example uses a `prov:Entity` to model the conformance test (e.g., `a:testResult`), a `prov:Activity` to model the testing activity (e.g., `a:testingActivity`), a `prov:Plan` derived from the Data on the Web Best Practices \[<a href="#bib-dwbp" class="bibref" title="Data on the Web Best Practices">DWBP</a>\] (e.g., `a:conformanceTest`) to check for the whole set of best practices. A qualified PROV association binds the testing activity to the conformance test.

Note

Depending of the kind of dataset, other best practices and standards, such as the FAIR Principles \[<a href="#bib-fair" class="bibref" title="The FAIR Guiding Principles for scientific data management and stewardship">FAIR</a>\] or the Spatial Data on the Web Best Practices \[<a href="#bib-sdw-bp" class="bibref" title="Spatial Data on the Web Best Practices">SDW-BP</a>\], can be considered as a replacement or used in combination with \[<a href="#bib-dwbp" class="bibref" title="Data on the Web Best Practices">DWBP</a>\].

<a href="#ex-conformance-degree" class="self-link">Example 35</a>

    :Dataset-3 a dcat:Dataset ;
      prov:wasUsedBy :testingActivity .

    :testingActivity a prov:Activity ;
      prov:generated :testResult ;
      prov:qualifiedAssociation [
        a prov:Association ;
        # http://validator.example.org/ is the agent who ran the test.
        prov:agent  <http://validator.example.org/>
        # following the plan a:conformanceTest
        prov:hadPlan :conformanceTest
      ] .

    # Conformance test result
    :testResult a prov:Entity ;
      # :notConformant belongs to a SKOS concept scheme about conformance
      dct:type :notConformant .

    :conformanceTest a prov:Plan ;
      # Here one can specify additional information on the test, which in the example is derived by the W3C Data on the Web Best Practices
      prov:wasDerivedFrom <https://www.w3.org/TR/dwbp/> .

Also, \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\] can be deployed to measure the compliance to a specific standard. In <a href="#ex-conformance-degree-percentage" class="box-ref">Example 36</a>, the `:levelOfComplianceToDWBP` is a quality metrics which measures the compliance of a dataset to \[<a href="#bib-dwbp" class="bibref" title="Data on the Web Best Practices">DWBP</a>\] in terms of the percentage of passed compliance tests. <a href="#ex-conformance-degree-percentage" class="box-ref">Example 36</a> assumes `iso` as a namespace prefix representing the quality dimensions and categories defined in the ISO/IEC 25012 \[<a href="#bib-iso-iec-25012" class="bibref" title="ISO/IEC 25012 - Data Quality model">ISO-IEC-25012</a>\].

<a href="#ex-conformance-degree-percentage" class="self-link">Example 36</a>

    :levelOfComplianceToDWBP a dqv:Metric ;
      skos:definition "The degree of compliance to DWBP defined as the percentage of passed compliance tests."@en ;
      dqv:expectedDataType xsd:double ;
      dqv:inDimension  iso:compliance .

    iso:compliance a dqv:Dimension ;
      skos:prefLabel "Compliance"@en ;
      skos:definition "The degree to which data has attributes that adhere to standards, conventions or regulations in force and similar rules relating to data quality in a specific context of use."@en ;
      dqv:inCategory iso:inherentAndSystemDependentDataQuality .

    iso:inherentAndSystemDependentDataQuality a dqv:Category ;
      skos:prefLabel "Inherent and System-Dependent Data Quality"@en .

The quality measurement `:measurement_complianceToDWBP` represents the level of compliance for dataset `a:Dataset`, namely, measurement of the metric `:levelOfComplianceToDWBP`. If only a part of the compliance tests succeeds (e.g. half of the compliance tests), the measurement would look like in <a href="#ex-conformance-test-partial-success" class="box-ref">Example 37</a>.

<a href="#ex-conformance-test-partial-success" class="self-link">Example 37</a>

    :measurement_complianceToDWBP a dqv:QualityMeasurement ;
      dqv:computedOn a:Dataset ;
      dqv:value "50"^^xsd:double ;
      sdmx-attribute:unitMeasure <http://www.wurvoc.org/vocabularies/om-1.8/Percentage> ;
      dct:date "2018-01-10"^^xsd:date ;
      dqv:isMeasurementOf :levelOfComplianceToDWBP .

#### 12.2.3 Conformance test results<a href="#quality-conformance-test-results" class="self-link"></a>

Further information about the tests can be provided using EARL \[<a href="#bib-earl10-schema" class="bibref" title="Evaluation and Report Language (EARL) 1.0 Schema">EARL10-Schema</a>\]. EARL provides specific classes to describe the testing activity, which can be adopted in conjunction with \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\]. <a href="#ex-conformance-test-results-earl" class="box-ref">Example 38</a> describes the Testing activity `a:testingActivity` as an `earl:Assertion` instead of a qualified association on the `prov:Activity`. The `earl:Assertion` states that dataset `a:Dataset` has been tested with the conformance test `a:conformanceTest`, and it has passed the test as described in `a:testResult`.

<a href="#ex-conformance-test-results-earl" class="self-link">Example 38</a>

    a:assertion a earl:Assertion ;
      earl:subject a:Dataset ;
      earl:test a:conformanceTest ;
      earl:result a:testResult ;
      # let's indicate if the test was manual, automatic, or what ..
      earl:mode earl:automatic ;
      earl:assertedBy <http://validator.example.org/> ;
      prov:wasAttributedTo  <http://validator.example.org/> .

    a:conformanceTest a earl:TestRequirement, prov:Plan ;
      dct:title "Set of conformance test derived from the W3C Data on the Web Best Practices"@en ;
      # it includes different subtests
      dct:hasPart a:testBP1, a:testBP2, ...,  a:testBP35 ;
      #It is derived  by the reference standard
      prov:wasDerivedFrom  <https://www.w3.org/TR/dwbp/> .

    a:testResult a earl:TestResult ;
      #  results in conformancy .
      dct:type  a:conformant ;
      #the overall set of tests have been passed
      earl:outcome earl:passed .

    # the description of the validator
    <http://validator.example.org/> a earl:Assertor, prov:Agent ;
      dct:description "A test execution service that runs conformance test suites."@en ;
      dct:title "Validator"@en .

    #the testing activity
    a:testingActivity a prov:Activity ;
      prov:generated a:TestAssertion, a:testResult ;
      prov:use a:Dataset ;
      prov:wasAssociatedWith <http://validator.example.org/> .

<a href="#ex-conformance-test-earl-fail" class="box-ref">Example 39</a> shows how the description would have looked like if the subtest `a:testq1` had failed. In particular, `dct:description` and `earl:info` provide additional warnings or error messages in a human-readable form.

<a href="#ex-conformance-test-earl-fail" class="self-link">Example 39</a>

    a:assertion1 a earl:Assertion ;
      earl:subject a:Dataset ;
      earl:test a:testq1 ;
      earl:result [
        a earl:TestResult ;
        #  results in no conformancy
        dct:type a:nonConformant ;
        #the overall set of tests have not been passed (!?)
        dct:date "2015-09-29T11:50:00+00:00"^^xsd:dateTime ;
        # Some XML encoding of the error
          dct:description """
            <ul xmlns="http://www.w3.org/1999/xhtml">
              <li> test 1 has failed. Some description of the errors found</li>
            </ul>"""^^rdf:HTML ;
          earl:info """
            <test-method duration-ms="47" finished-at="2015-09-29T11:50:00Z"
            name="validate" signature="validate()" started-at="2015-09-29T11:50:00Z"
            status="FAIL">
              <exception class="java.lang.AssertionError">
                <message>
                  Total validation errors found: 2
                </message>
              </exception>
            </test-method>"""^^rdf:XMLLiteral ;
         earl:outcome earl:fail .
      ];
      # we do not know if the test was manual, automatic, or what ..
      earl:mode earl:automatic.

Depending on the details required about tests, \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\] can express the testing activity and errors as well. In <a href="#ex-conformance-test-error" class="box-ref">Example 40</a>, `:error` is a quality annotation that represents the previous error, and `a:testResult` is defined as a `dqv:QualityMetadata` to collect the above annotations and the compliance measurements providing provenance information.

<a href="#ex-conformance-test-error" class="self-link">Example 40</a>

    :errors
      a dqv:QualityAnnotation ;
      #this annotation is derived by the measurement
      prov:wasGeneratedBy  a:testingActivity;
      oa:hasTarget a:Dataset ;
      oa:hasBody [
        #errors/failed test description
        a oa:TextualBody ;
        rdf:value  """
          <test-method duration-ms="47" finished-at="2015-09-29T11:50:00Z"
            name="validate" signature="validate()" started-at="2015-09-29T11:50:00Z"
            status="FAIL">
            <exception class="java.lang.AssertionError">
              <message>
                Total validation errors found: 2
              </message>
            </exception>
          </test-method>"""^^rdf:XMLLiteral ;
        #it can be in any format suppored by dc
        dc:format  "application/xml" ;
      ] ;
      oa:motivatedBy dqv:qualityAssessment , oa:assessing ;
      dqv:inDimension iso:compliance ;
      .

    a:testResult
      a dqv:QualityMetadata ;
      #  change the the dct:type according to the resulted compliance
      dct:type <http://inspire.ec.europa.eu/metadata-codelist/DegreeOfConformity/conformant> ;
      prov:wasAttributedTo <http://validator.example.org/> ;
      prov:generatedAtTime "2018-05-27T02:52:02Z"^^xsd:dateTime ;
      prov:wasGeneratedBy a:testingActivity .

    # The graph contains the rest of the statements presented in the previous examples.
    # The graph is expressed according to TRIG syntax not TTL (see https://www.w3.org/TR/trig/)
    a:testResult {
      a dcat:Dataset ;
      dqv:hasQualityMeasurement :measurement_complianceToDWBP ;
      dqv:hasQualityAnnotation :errors .
    }

    #the testing activity
    a:testingActivity a prov:Activity ;
      prov:generated  a:testResult ;
      prov:use a:Dataset ;
      prov:wasAssociatedWith <http://validator.example.org/> ;
      .

Of course, the above modelling patterns can represent any quality tests, not only conformance to standards.

13. Qualified relations<a href="#qualified-forms" class="self-link"></a>
------------------------------------------------------------------------

*This section is non-normative.*

DCAT includes elements to support description of many aspects of datasets and data-services. Nevertheless, additional information is required in order to fully express the semantics of some relationships. An example is that, while \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\] provides the standard roles **creator**, **contributor** and **publisher** for attribution of a resource to a responsible party or agent, there are many other potential roles, see for example the [`CI_RoleCode`](https://standards.iso.org/iso/19115/resources/Codelists/gml/CI_RoleCode.xml) values from \[<a href="#bib-iso-19115-1" class="bibref" title="Geographic information -- Metadata -- Part 1: Fundamentals">ISO-19115-1</a>\]. Similarly, while \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\] and \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\] provide some properties to capture relationships between resources, including **was derived from**, **was quoted from**, **is version of**, **references** and several others, many additional concerns are seen in the list of \[<a href="#bib-iso-19115-1" class="bibref" title="Geographic information -- Metadata -- Part 1: Fundamentals">ISO-19115-1</a>\] [`DS_AssociationTypeCodes`](https://standards.iso.org/iso/19115/resources/Codelists/gml/DS_AssociationTypeCode.xml), the IANA Registry of Link Relations \[<a href="#bib-iana-relations" class="bibref" title="Link Relations">IANA-RELATIONS</a>\], the DataCite metadata schema \[<a href="#bib-datacite" class="bibref" title="DataCite Metadata Schema">DataCite</a>\] and the [MARC relators](https://id.loc.gov/vocabulary/relators). While these relations could be captured with additional sub-properties of `dct:relation`, `dct:contributor`, etc, this would lead to an explosion in the number of properties, and anyway the full set of potential roles and relationships is unknown.

A common approach for meeting these kinds of requirement is to introduce an additional resource to carry parameters that qualify the relationship. Precedents are the [qualified terms](https://www.w3.org/TR/prov-o/#description-qualified-terms) in \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\] and the [sample relations](https://www.w3.org/TR/vocab-ssn/#Sample_Relations) in the Semantic Sensor Network ontology \[<a href="#bib-vocab-ssn" class="bibref" title="Semantic Sensor Network Ontology">VOCAB-SSN</a>\]. The general [Qualified Relation pattern](http://patterns.dataincubator.org/book/qualified-relation.html) is described in \[<a href="#bib-linkeddatapatterns" class="bibref" title="Linked Data Patterns: A pattern catalogue for modelling, publishing, and consuming Linked Data">LinkedDataPatterns</a>\].

Many of the qualified terms from \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\] are relevant to the description of resources in catalogs but these are incomplete due to the activity-centric viewpoint taken by PROV-O. Addressing some of the gaps, additional forms are included in the DCAT vocabulary to satisfy requirements that do not involve explicit activities. These are summarized in <a href="#UML-DCAT-Qualified-Relations" class="fig-ref" title="Qualified relationships support an extensible set of roles relating resources to agents or to other resources">Figure 5</a>:

![Figure 5 <span class="fig-title"> Qualified relationships support an extensible set of roles relating resources to agents or to other resources </span>](images/DCAT-relationships.png)

Note that, while the focus of these qualified forms is to allow for additional *roles* on a relationship, other aspect of the relationships, such as the applicable time interval, are easily attached when a specific node is used to describe the relationship like this (e.g. see the [chart of Influence relations](https://www.w3.org/TR/prov-o/#qualified-terms-figure) in \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\] for some examples).

Note

Because of the global domain constraints on [`prov:qualifiedAttribution`](https://www.w3.org/TR/prov-o/#qualifiedAttribution) and the super-property of [`dcat:qualifiedRelation`](#Property:resource_qualified_relation), use of the qualified forms entail that the context resource is a member of the class [`prov:Entity`](https://www.w3.org/TR/prov-o/#Entity) \[<a href="#bib-rdf-schema" class="bibref" title="RDF Schema 1.1">RDF-SCHEMA</a>\].

### 13.1 Relationships between datasets and agents<a href="#qualified-attribution" class="self-link"></a>

The standard \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\] properties [`dct:contributor`](http://purl.org/dc/terms/contributor), [`dct:creator`](http://purl.org/dc/terms/creator) and [`dct:publisher`](http://purl.org/dc/terms/publisher), and the generic [`prov:wasAttributedTo`](https://www.w3.org/TR/prov-o/#wasAttributedTo) from \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\], support basic associations of responsible agents with a cataloged resource. However, there are many other roles of importance in relation to datasets and services - e.g. funder, distributor, custodian, editor. Some of these roles are enumerated in the [`CI_RoleCode`](https://standards.iso.org/iso/19115/resources/Codelists/gml/CI_RoleCode.xml) values from \[<a href="#bib-iso-19115-1" class="bibref" title="Geographic information -- Metadata -- Part 1: Fundamentals">ISO-19115-1</a>\], in the \[<a href="#bib-datacite" class="bibref" title="DataCite Metadata Schema">DataCite</a>\] metadata schema, and included within the [MARC relators](https://id.loc.gov/vocabulary/relators).

A general method for assigning an agent to a resource with a specified role is provided by using the qualified form [`prov:qualifiedAttribution`](https://www.w3.org/TR/prov-o/#qualifiedAttribution) from \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\]. <a href="#ex-qualified-attribution" class="box-ref">Example 41</a> provides an illustration:

<a href="#ex-qualified-attribution" class="self-link">Example 41</a>

    ex:DS987
      a dcat:Dataset ;
      prov:qualifiedAttribution [
        a prov:Attribution ;
        prov:agent <https://www.ala.org.au/> ;
        dcat:hadRole <http://registry.it.csiro.au/def/isotc211/CI_RoleCode/distributor>
      ] ;
      prov:qualifiedAttribution [
        a prov:Attribution ;
        prov:agent <https://www.education.gov.au/> ;
        dcat:hadRole <http://registry.it.csiro.au/def/isotc211/CI_RoleCode/funder>
      ] ;
    .

In <a href="#ex-qualified-attribution" class="box-ref">Example 41</a> the roles are denoted by IRIs from a (non-normative) [linked data representation](http://registry.it.csiro.au/def/isotc211/CI_RoleCode) of the [`CI_RoleCode`](https://standards.iso.org/iso/19115/resources/Codelists/gml/CI_RoleCode.xml) codelist from \[<a href="#bib-iso-19115-1" class="bibref" title="Geographic information -- Metadata -- Part 1: Fundamentals">ISO-19115-1</a>\].

Note

The domain of [`prov:hadRole`](https://www.w3.org/TR/prov-o/#hadRole) property is [`prov:Association`](https://www.w3.org/TR/prov-o/#Association), i.e. \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\] roles relate to activities, not entities \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\]. Therefore, a new property [`dcat:hadRole`](#Property:relationship_hadRole) is used to attach a specific role to the association-class [`prov:Attribution`](https://www.w3.org/TR/prov-o/#Attribution).

### 13.2 Relationships between datasets and other resources<a href="#qualified-relationship" class="self-link"></a>

The standard \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\] properties [`dct:relation`](http://purl.org/dc/terms/relation) and sub-properties such as [`dct:hasPart`](http://purl.org/dc/terms/hasPart) / [`dct:isPartOf`](http://purl.org/dc/terms/isPartOf), [`dct:hasVersion`](http://purl.org/dc/terms/hasVersion) / [`dct:isVersionOf`](http://purl.org/dc/terms/isVersionOf), [`dct:replaces`](http://purl.org/dc/terms/replaces) / [`dct:isReplacedBy`](http://purl.org/dc/terms/isReplacedBy), [`dct:requires`](http://purl.org/dc/terms/requires) / [`dct:isRequiredBy`](http://purl.org/dc/terms/isRequiredBy), [`prov:wasDerivedFrom`](http://www.w3.org/TR/prov-o/#wasDerivedFrom), [`prov:wasQuotedFrom`](http://www.w3.org/TR/prov-o/#wasQuotedFrom), support the description of relationships between datasets and other cataloged resources. However, there are many other relationships of importance - e.g. alternate, canonical, original, preview, stereo-mate, working-copy-of. Some of these roles are enumerated in the [`DS_AssociationTypeCodes`](https://standards.iso.org/iso/19115/resources/Codelists/gml/DS_AssociationTypeCode.xml) values from \[<a href="#bib-iso-19115-1" class="bibref" title="Geographic information -- Metadata -- Part 1: Fundamentals">ISO-19115-1</a>\], the IANA Registry of Link Relations \[<a href="#bib-iana-relations" class="bibref" title="Link Relations">IANA-RELATIONS</a>\], in the \[<a href="#bib-datacite" class="bibref" title="DataCite Metadata Schema">DataCite</a>\] metadata schema, and included within the [MARC relators](https://id.loc.gov/vocabulary/relators).

A general method for relating a resource to another resource with a specified role is provided by using the qualified form [`dcat:qualifiedRelation`](#Property:resource_qualified_relation). <a href="#ex-dataset-resource" class="box-ref">Example 42</a> provides illustrations:

<a href="#ex-dataset-resource" class="self-link">Example 42</a>

    ex:Test987
      a dcat:Dataset ;
      dcat:qualifiedRelation [
        a dcat:Relationship ;
        dct:relation <http://example.org/Original987> ;
        dcat:hadRole <http://www.iana.org/assignments/relation/original>
      ] ;
    .

    ex:Test543L
      a dcat:Dataset ;
      dcat:qualifiedRelation [
        a dcat:Relationship ;
        dct:relation <http://example.org/Test543R> ;
        dcat:hadRole <http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode/stereoMate>
      ] ;
    .

In <a href="#ex-dataset-resource" class="box-ref">Example 42</a> the roles are denoted by IRIs from \[<a href="#bib-iana-relations" class="bibref" title="Link Relations">IANA-RELATIONS</a>\] and from a (non-normative) [linked data representation](http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode) of the [`DS_AssociationTypeCode`](https://standards.iso.org/iso/19115/resources/Codelists/gml/DS_AssociationTypeCode.xml) codelist from \[<a href="#bib-iso-19115-1" class="bibref" title="Geographic information -- Metadata -- Part 1: Fundamentals">ISO-19115-1</a>\].

Note

The property [`dcat:qualifiedRelation`](#Property:resource_qualified_relation) and association-class [`dcat:Relationship`](#Class:Relationship) follow the pattern established in W3C \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\] and described in [§ <span class="secno">3.3 </span>Qualified Terms](https://www.w3.org/TR/prov-o/#description-qualified-terms). However, \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\] is activity-centric, and does not support Entity-Entity relations except for the single case of 'was derived from', thus necessitating the new elements shown here to support the general case.

14. DCAT Profiles<a href="#profiles" class="self-link"></a>
-----------------------------------------------------------

*This section is non-normative.*

The DCAT-2014 vocabulary \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] has been extended for application in data catalogs in different domains. Each of these new specifications constitutes a DCAT profile, i.e. a named set of constraints based on DCAT (see <a href="#conformance" class="sec-ref">§ 4. Conformance</a>). In some cases, a profile extends one of the DCAT profiles themselves, by adding classes and properties for metadata fields not covered in the reference DCAT profile.

Some of the DCAT profiles are:

-   DCAT-AP \[<a href="#bib-dcat-ap" class="bibref" title="DCAT Application Profile for data portals in Europe. Version 1.2.1">DCAT-AP</a>\]: The DCAT application profile for data portals in Europe
-   GeoDCAT-AP \[<a href="#bib-geodcat-ap" class="bibref" title="GeoDCAT-AP: A geospatial extension for the DCAT application profile for data portals in Europe. Version 1.0.1">GeoDCAT-AP</a>\]: Geospatial profile of \[<a href="#bib-dcat-ap" class="bibref" title="DCAT Application Profile for data portals in Europe. Version 1.2.1">DCAT-AP</a>\]
-   StatDCAT-AP \[<a href="#bib-statdcat-ap" class="bibref" title="StatDCAT-AP – DCAT Application Profile for description of statistical datasets. Version 1.0.1">StatDCAT-AP</a>\]: Statistical profile of \[<a href="#bib-dcat-ap" class="bibref" title="DCAT Application Profile for data portals in Europe. Version 1.2.1">DCAT-AP</a>\]
-   DCAT-AP\_IT \[<a href="#bib-dcat-ap-it" class="bibref" title="Profilo metadatazione DCAT-AP_IT">DCAT-AP-IT</a>\]: Italian profile of \[<a href="#bib-dcat-ap" class="bibref" title="DCAT Application Profile for data portals in Europe. Version 1.2.1">DCAT-AP</a>\]
-   GeoDCAT-AP\_IT \[<a href="#bib-geodcat-ap-it" class="bibref" title="GeoDCAT-AP in Italy, the national guidelines published">GeoDCAT-AP-IT</a>\]: Italian profile of \[<a href="#bib-geodcat-ap" class="bibref" title="GeoDCAT-AP: A geospatial extension for the DCAT application profile for data portals in Europe. Version 1.0.1">GeoDCAT-AP</a>\]
-   DCAT-AP-NO \[<a href="#bib-dcat-ap-no" class="bibref" title="Standard for beskrivelse av datasett og datakataloger (DCAT-AP-NO)">DCAT-AP-NO</a>\]: Norwegian profile of \[<a href="#bib-dcat-ap" class="bibref" title="DCAT Application Profile for data portals in Europe. Version 1.2.1">DCAT-AP</a>\]
-   DCAT-AP.de \[<a href="#bib-dcat-ap.de" class="bibref" title="Vokabulare und Dokumente für DCAT-AP.de">DCAT-AP.de</a>\]: German profile of \[<a href="#bib-dcat-ap" class="bibref" title="DCAT Application Profile for data portals in Europe. Version 1.2.1">DCAT-AP</a>\]
-   DCAT-BE \[<a href="#bib-dcat-be" class="bibref" title="Linking data portals across Belgium.">DCAT-BE</a>\]: Belgian profile of \[<a href="#bib-dcat-ap" class="bibref" title="DCAT Application Profile for data portals in Europe. Version 1.2.1">DCAT-AP</a>\]
-   DCAT-AP-SE \[<a href="#bib-dcat-ap-se" class="bibref" title="DCAT-AP-SE: Swedish recommendation for DCAT-AP1.1">DCAT-AP-SE</a>\]: Swedish profile of \[<a href="#bib-dcat-ap" class="bibref" title="DCAT Application Profile for data portals in Europe. Version 1.2.1">DCAT-AP</a>\]

15. Security and Privacy<a href="#security_and_privacy" class="self-link"></a>
------------------------------------------------------------------------------

The DCAT vocabulary supports the attribution of data and metadata to various participants such as resource [creators](#Property:resource_creator), [publishers](#Property:resource_publisher) and other parties or agents via [qualified relations](#qualified-forms), and as such defines terms that may be related to personal information. In addition, it also supports the association of [rights](#Property:resource_rights) and [licenses](#Property:resource_license) with cataloged Resources and Distributions. These rights and licenses could potentially include or reference sensitive information such as user and asset identifiers as [described](https://www.w3.org/TR/odrl-vocab/#privacy-consideration) in \[<a href="#bib-odrl-vocab" class="bibref" title="ODRL Vocabulary &amp; Expression 2.2">ODRL-VOCAB</a>\]. Implementations that produce, maintain, publish or consume such vocabulary terms must take steps to ensure security and privacy considerations are addressed at the application level.

A. Acknowledgments<a href="#acknowledgments" class="self-link"></a>
-------------------------------------------------------------------

The editors gratefully acknowledge the contributions made to this document by [all members of the working group](https://www.w3.org/2000/09/dbwg/details?group=99375&public=1), especially Annette Greiner, Antoine Isaac, Armin Haller, Dan Brickley, Ine de Visser, Jaroslav Pullmann, Lars G. Svensson, Linda van den Brink, Makx Dekkers, Nicholas Car, Rob Atkinson, Tom Baker.

The editors would also like to thank the following for comments received: Addison Phillips, Andreas Kuckartz, Anna Odgaard Ingram, Armando Stellato, Bert van Nuffelen, Chris Little, Chris Sweeney, Chris Wood, Clemens Portele, Daniel Pop, Dave Reynolds, Guillaume Duffes, Ian Davis, Jakob Voß, Jakub Klímek, James Passmore, Leigh Dodds, Luca Trani, Marco Brattinga, Matthias Palmér, Melanie Barlow, Nancy Fallgren, Nuno Freire, Øystein Åsnes, Pano Maria, Peter Parslow, Renato Iannella, Ruth Duerr, Siri Jodha S. Khalsa, Stephane Fellah, Stephen Richard, Stijn Goedertier, Tom Kralidis, Vladimir Alexiev, Wouter Beek, Yves Coene.

The editors also gratefully acknowledge the chairs of this Working Group: Karen Coyle, Caroline Burle and Peter Winstanley — and staff contacts Phil Archer and Dave Raggett.

B. Alignment with Schema.org<a href="#dcat-sdo" class="self-link"></a>
----------------------------------------------------------------------

*This section is non-normative.*

Note

See the issues on [Alignments and Crosswalks](https://github.com/w3c/dxwg/labels/alignment) for more discussion.

Schema.org \[<a href="#bib-schema-org" class="bibref" title="Schema.org">SCHEMA-ORG</a>\] includes a number of types and properties based on the original DCAT work (see [sdo:Dataset](https://schema.org/Dataset) as a starting point), and the index for Google's [Dataset Search service](https://g.co/datasetsearch) relies on structured description in Web pages about datasets using both [schema.org and DCAT](https://developers.google.com/search/docs/data-types/dataset). A comparison of the DCAT backbone, shown in <a href="#UML_DCAT_All_Attr" class="fig-ref" title="Overview of DCAT model, showing the classes of resources that can be members of a Catalog, and the relationships between them.">Figure 1</a> above with the related classes from \[<a href="#bib-schema-org" class="bibref" title="Schema.org">SCHEMA-ORG</a>\] in <a href="#UML_SchemaOrg_Data_Cat" class="fig-ref" title="schema.org support for dataset catalogs, showing a selection of schema.org properties related to the classes shown">Figure 6</a> shows the similarity, in particular: .

-   the distinction between (abstract) Dataset and (concrete) DataDownload matches dcat:Dataset / dcat:Distribution
-   the relationship of Datasets to DataCatalogs

![Figure 6 <span class="fig-title"> schema.org support for dataset catalogs, showing a selection of schema.org properties related to the classes shown </span>](images/schema.org-dataset.png)

General purpose Web search services that use metadata at all rely primarily on \[<a href="#bib-schema-org" class="bibref" title="Schema.org">SCHEMA-ORG</a>\], so the relationship of DCAT to \[<a href="#bib-schema-org" class="bibref" title="Schema.org">SCHEMA-ORG</a>\] is of interest for data providers and catalog publishers who wish their datasets and services to be exposed through those indexes.

A [mapping between DCAT 2014 and schema.org](https://www.w3.org/wiki/WebSchemas/Datasets) was discussed on the original proposal to extend \[<a href="#bib-schema-org" class="bibref" title="Schema.org">SCHEMA-ORG</a>\] for describing datasets and data catalogs. Partial mappings between DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] and \[<a href="#bib-schema-org" class="bibref" title="Schema.org">SCHEMA-ORG</a>\] were provided earlier by the [Spatial Data on the Web Working Group](https://www.w3.org/2015/spatial/wiki/ISO_19115_-_DCAT_-_Schema.org_mapping), building upon previous work.

A recommended mapping from the revised DCAT (this document) to \[<a href="#bib-schema-org" class="bibref" title="Schema.org">SCHEMA-ORG</a>\] version 3.4 is [available in an RDF file](https://w3c.github.io/dxwg/dcat/rdf/dcat-schema.ttl). This mapping is axiomatized using the predicates `rdfs:subClassOf`, `rdfs:subPropertyOf`, `owl:equivalentClass`, `owl:equivalentProperty`, `skos:closeMatch`, and also using the annotation properties `sdo:domainIncludes` and `sdo:rangeIncludes` to match \[<a href="#bib-schema-org" class="bibref" title="Schema.org">SCHEMA-ORG</a>\] semantics. The alignment is summarized in the table below, considering the prefix `sdo` as `http://schema.org/`.

<table><thead><tr class="header"><th style="text-align: right;">DCAT element</th><th>target element from schema.org</th></tr></thead><tbody><tr class="odd"><td style="text-align: right;"><strong>dcat:Resource</strong></td><td><strong>sdo:Thing</strong></td></tr><tr class="even"><td style="text-align: right;">dct:title</td><td>sdo:name</td></tr><tr class="odd"><td style="text-align: right;">dct:description</td><td>sdo:description</td></tr><tr class="even"><td style="text-align: right;">dcat:keyword<br />
<em>dcat:keyword is singular, sdo:keywords is plural</em></td><td>sdo:keywords</td></tr><tr class="odd"><td style="text-align: right;">dcat:theme</td><td>sdo:about</td></tr><tr class="even"><td style="text-align: right;">dct:identifier</td><td>sdo:identifier</td></tr><tr class="odd"><td style="text-align: right;">dct:type</td><td>sdo:additionalType</td></tr><tr class="even"><td style="text-align: right;">dct:issued</td><td>sdo:datePublished</td></tr><tr class="odd"><td style="text-align: right;">dct:modified</td><td>sdo:dateModified</td></tr><tr class="even"><td style="text-align: right;">dct:language</td><td>sdo:inLanguage</td></tr><tr class="odd"><td style="text-align: right;">dct:relation</td><td>sdo:isRelatedTo</td></tr><tr class="even"><td style="text-align: right;">dcat:landingPage</td><td>sdo:url</td></tr><tr class="odd"><td style="text-align: right;">dct:publisher</td><td>sdo:publisher</td></tr><tr class="even"><td style="text-align: right;">dcat:contactPoint</td><td>sdo:contactPoint</td></tr><tr class="odd"><td style="text-align: right;"><strong>dcat:Catalog</strong></td><td><strong>sdo:DataCatalog</strong></td></tr><tr class="even"><td style="text-align: right;">dct:hasPart</td><td>sdo:hasPart</td></tr><tr class="odd"><td style="text-align: right;">dcat:dataset</td><td>sdo:dataset</td></tr><tr class="even"><td style="text-align: right;">dcat:distribution</td><td>sdo:distribution</td></tr><tr class="odd"><td style="text-align: right;"><strong>dcat:Dataset</strong></td><td><strong>sdo:Dataset</strong></td></tr><tr class="even"><td style="text-align: right;"><strong>dcat:Dataset</strong><br />
<em>dct:accrualPeriodicity fixed to<br />
&lt;http://purl.org/cld/freq/continuous&gt;</em></td><td><strong>sdo:DataFeed</strong></td></tr><tr class="odd"><td style="text-align: right;">dct:spatial</td><td>sdo:spatialCoverage</td></tr><tr class="even"><td style="text-align: right;">dct:temporal</td><td>sdo:temporalCoverage</td></tr><tr class="odd"><td style="text-align: right;">dct:accrualPeriodicity</td><td>sdo:repeatFrequency</td></tr><tr class="even"><td style="text-align: right;">prov:wasGeneratedBy</td><td>[ owl:inverseOf sdo:result ]</td></tr><tr class="odd"><td style="text-align: right;"><strong>dcat:Distribution</strong></td><td><strong>sdo:DataDownload</strong></td></tr><tr class="even"><td style="text-align: right;">dct:format</td><td>sdo:encodingFormat</td></tr><tr class="odd"><td style="text-align: right;">dcat:mediaType</td><td>sdo:encodingFormat</td></tr><tr class="even"><td style="text-align: right;">dcat:byteSize</td><td>sdo:contentSize</td></tr><tr class="odd"><td style="text-align: right;">dcat:accessURL</td><td>sdo:contentUrl</td></tr><tr class="even"><td style="text-align: right;">dcat:downloadURL</td><td>sdo:contentUrl</td></tr><tr class="odd"><td style="text-align: right;">dct:license</td><td>sdo:license</td></tr><tr class="even"><td style="text-align: right;"><strong>dcat:DataService</strong></td><td><strong>sdo:WebAPI</strong></td></tr><tr class="odd"><td style="text-align: right;">dcat:endPointURL</td><td>sdo:url</td></tr><tr class="even"><td style="text-align: right;">dcat:endPointDescription</td><td>sdo:documentation, sdo:hasOfferCatalog</td></tr><tr class="odd"><td style="text-align: right;">dct:type<br />
<em>in context of a dcat:DataService</em></td><td>sdo:serviceType</td></tr><tr class="even"><td style="text-align: right;">dcat:servesDataset</td><td>sdo:serviceOutput</td></tr><tr class="odd"><td style="text-align: right;"><strong>dcat:Relationship</strong></td><td><strong>sdo:Role</strong></td></tr></tbody></table>

C. Examples<a href="#collection-of-examples" class="self-link"></a>
-------------------------------------------------------------------

*This section is non-normative.*

### C.1 Loosely structured catalog<a href="#examples-bag-of-files" class="self-link"></a>

Note

The background to this example is discussed in [Issue \#253](https://github.com/w3c/dxwg/issues/253) ("Best practice for a loosely-structured catalog").

In many legacy catalogs and repositories (e.g. CKAN), ‘datasets’ are ‘just a bag of files’. There is no distinction made between part/whole, distribution (representation), and other kinds of relationship (e.g. documentation, schema, supporting documents) from the dataset to each of the files.

If the nature of the relationships between a dataset and component resources in a catalog, repository, or elsewhere are not known, `dct:relation` can be used:

<a href="#ex-dataset-as-bag-of-files" class="self-link">Example 43</a>

    :d33937
      dct:description "A set of RDF graphs representing the International [Chrono]stratigraphic Chart, ..."@en ;
      dct:identifier "https://doi.org/10.25919/5b4d2b83cbf2d"^^xsd:anyURI ;
      dct:creator <https://orcid.org/0000-0002-3884-3420>;
      dct:relation <https://vocabs.ands.org.au/viewById/196> ;
      dct:relation :ChronostratChart2017-02.pdf  ;
      dct:relation :ChronostratChart2017-02.jpg ;
      dct:relation :timescale.zip ;
      dct:relation :isc2017.jsonld ;
      dct:relation :isc2017.nt ;
      dct:relation :isc2017.rdf ;
      dct:relation :isc2017.ttl ;
    .

If it is clear that any of these related resources is a proper *representation* of the dataset, `dcat:distribution` should be used.

<a href="#ex-when-using-distribution" class="self-link">Example 44</a>

    :d33937
      rdf:type dcat:Dataset ;
      dct:description "A set of RDF graphs representing the International [Chrono]stratigraphic Chart, ..."@en ;
      dct:identifier "https://doi.org/10.25919/5b4d2b83cbf2d"^^xsd:anyURI ;
      dct:relation <https://vocabs.ands.org.au/viewById/196> ;
      dct:relation :ChronostratChart2017-02.pdf  ;
      dct:relation :ChronostratChart2017-02.jpg ;
      dct:relation :timescale.zip ;
      dcat:distribution :d33937-jsonld ;
      dcat:distribution :d33937-nt ;
      dcat:distribution :d33937-rdf ;
      dcat:distribution :d33937-ttl ;
    .
    :d33937-jsonld  rdf:type dcat:Distribution ;
      dcat:downloadURL :isc2017.jsonld ;
      dcat:byteSize "698039"^^xsd:decimal ;
      dcat:mediaType <https://www.iana.org/assignments/media-types/application/ld+json> ;
    .
    :d33937-nt  rdf:type dcat:Distribution ;
      dcat:downloadURL :isc2017.nt ;
      dcat:byteSize "2047874"^^xsd:decimal ;
      dcat:mediaType <https://www.iana.org/assignments/media-types/application/n-triples> ;
    .
    :d33937-rdf  rdf:type dcat:Distribution ;
      dcat:downloadURL :isc2017.rdf ;
      dcat:byteSize "1600569"^^xsd:decimal ;
      dcat:mediaType <https://www.iana.org/assignments/media-types/application/rdf+xml> ;
    .
    :d33937-ttl  rdf:type dcat:Distribution ;
      dcat:downloadURL :isc2017.ttl ;
      dcat:byteSize "531703"^^xsd:decimal ;
      dcat:mediaType <https://www.iana.org/assignments/media-types/text/turtle> ;
    .

This example is available from the [DXWG code repository](https://github.com/w3c/dxwg/tree/gh-pages/dcat/examples) at [`csiro-dap-examples.ttl`](https://w3c.github.io/dxwg/dcat/examples/csiro-dap-examples.ttl).

Additional detail about the nature of the related resources can be given using suitable elements from other RDF vocabularies, along with dataset descriptors from DCAT. For example, the example above might be more fully expressed as follows (embedded comments explain the different resources in the graph):

<a href="#ex-elaborated-bag" class="self-link">Example 45</a>

    dap:d33937
      rdf:type dcat:Dataset ;
      dct:title "The data"@en ;
      dct:conformsTo <http://resource.geosciml.org/ontology/timescale/gts> ;
      dct:description "A set of RDF graphs representing the International [Chrono]stratigraphic Chart [...]"@en ;
      dct:identifier "https://doi.org/10.25919/5b4d2b83cbf2d" ;
      dct:issued "2018-07-07"^^xsd:date ;
      dct:license <https://creativecommons.org/licenses/by/4.0/> ;
      dct:publisher <http://www.csiro.au> ;
      dct:relation <http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg> ;
      dct:relation <http://stratigraphy.org/ICSchart/ChronostratChart2017-02.pdf> ;
      dct:relation [
        rdf:type dcat:Dataset ;
        dct:conformsTo <https://www.w3.org/TR/owl2-overview/> ;
        dct:title "The ontology used for the data"@en ;
        dct:description "This is an RDF/OWL representation of the GeoSciML Geologic Timescale model ..."@en ;
        dct:issued "2011-01-01"^^xsd:date ;
        dct:modified "2017-04-28"^^xsd:date ;
        dct:title "Geologic Timescale model" ;
        dct:type <http://purl.org/adms/assettype/DomainModel> ;
        dcat:distribution [
          rdf:type dcat:Distribution ;
          dct:title "RDF/XML representation of the ontology used for the data"@en ;
          dcat:downloadURL <http://resource.geosciml.org/ontology/timescale/gts.rdf> ;
          dcat:mediaType <https://www.iana.org/assignments/media-types/application/rdf+xml> ;
        ] ;
        dcat:distribution [
          rdf:type dcat:Distribution ;
          dct:title "TTL representation of the ontology used for the data"@en ;
          dcat:downloadURL <http://resource.geosciml.org/ontology/timescale/gts.ttl> ;
          dcat:mediaType <https://www.iana.org/assignments/media-types/text/turtle> ;
        ] ;
        dcat:distribution [
          rdf:type dcat:Distribution ;
          dct:title "Webpage describing the ontology used for the data"@en ;
          dcat:downloadURL <http://resource.geosciml.org/ontology/timescale/gts.html> ;
          dcat:mediaType <https://www.iana.org/assignments/media-types/text/html> ;
        ] ;
        dcat:landingPage <http://resource.geosciml.org/ontology/timescale/gts> ;
      ] ;
      dcat:distribution [
        rdf:type dcat:Distribution ;
        dct:conformsTo <https://www.w3.org/TR/rdf-schema/> ;
        dct:title "RDF representation of the data"@en ;
        dcat:accessService [
          rdf:type dcat:DataService ;
          dct:conformsTo <https://www.w3.org/TR/sparql11-query/> ;
          dct:title "International Chronostratigraphic Chart hosted at Research Vocabularies Australia"@en ;
          dct:description "Service that supports queries to obtain RDF representations of subsets of the data"@en ;
          dcat:endpointURL <http://vocabs.ands.org.au/repository/api/sparql/csiro_international-chronostratigraphic-chart_2017> ;
          dcat:landingPage <https://vocabs.ands.org.au/viewById/196> ;
        ] ;
      ] ;
      dcat:distribution [
        rdf:type dcat:Distribution ;
        dct:identifier "isc2017.jsonld" ;
        dct:title "JSON-LD serialization of the RDF representation of the entire dataset"@en ;
        dcat:mediaType <https://www.iana.org/assignments/media-types/application/ld+json> ;
      ] ;
      dcat:distribution [
        rdf:type dcat:Distribution ;
        dct:identifier "isc2017.nt" ;
        dct:title "N-Triples serialization of the RDF representation of the entire dataset"@en ;
        dcat:mediaType <https://www.iana.org/assignments/media-types/application/n-triples> ;
      ] ;
      dcat:distribution [
        rdf:type dcat:Distribution ;
        dct:identifier "isc2017.rdf" ;
        dct:title "RDF/XML serialization of the RDF representation of the entire dataset"@en ;
        dcat:mediaType <https://www.iana.org/assignments/media-types/application/rdf+xml> ;
      ] ;
      dcat:distribution [
        rdf:type dcat:Distribution ;
        dct:identifier "isc2017.ttl" ;
        dct:title "TTL serialization of the RDF representation of the entire dataset"@en ;
        dcat:mediaType <https://www.iana.org/assignments/media-types/text/turtle> ;
      ] ;
      dcat:landingPage <https://data.csiro.au/dap/landingpage?pid=csiro:33937> ;
    .

    <http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg>
      rdf:type foaf:Document ;
      dct:type <http://purl.org/dc/dcmitype/Image> ;
      dct:format  <https://www.iana.org/assignments/media-types/img/jpeg> ;
      dct:description "Coloured image representation of the International Chronostratigraphic Chart"@en ;
      dct:issued "2017-02-01"^^xsd:date ;
      dct:title "International Chronostratigraphic Chart"@en ;
    .
    <http://stratigraphy.org/ICSchart/ChronostratChart2017-02.pdf>
      rdf:type foaf:Document ;
      dct:type <http://purl.org/dc/dcmitype/Image> ;
      dct:format <https://www.iana.org/assignments/media-types/application/pdf> ;
      dct:description "Coloured image representation of the International Chronostratigraphic Chart"@en ;
      dct:issued "2017-02-01"^^xsd:date ;
      dct:title "International Chronostratigraphic Chart"@en ;
    .

This example is available from the [DXWG code repository](https://github.com/w3c/dxwg/tree/gh-pages/dcat/examples) at [`csiro-stratchart.ttl`](https://w3c.github.io/dxwg/dcat/examples/csiro-stratchart.ttl).

### C.2 Dataset provenance<a href="#examples-dataset-provenance" class="self-link"></a>

The provenance or business context of a dataset can be described using elements from the W3C Provenance Ontology \[<a href="#bib-prov-o" class="bibref" title="PROV-O: The PROV Ontology">PROV-O</a>\].

For example, a simple link from a dataset description to the project that generated the dataset can be formalized as follows (other details elided for clarity):

<a href="#ex-dataset-project" class="self-link">Example 46</a>

    dap:atnf-P366-2003SEPT
      rdf:type dcat:Dataset ;
      dct:bibliographicCitation "Burgay, M; McLaughlin, M; Kramer, M; Lyne, A; Joshi, B; Pearce, G; D'Amico, N; Possenti, A; Manchester, R; Camilo, F (2017): Parkes observations for project P366 semester 2003SEPT. v1. CSIRO. Data Collection. https://doi.org/10.4225/08/598dc08d07bb7" ;
      dct:title "Parkes observations for project P366 semester 2003SEPT"@en ;
      dcat:landingPage <https://data.csiro.au/dap/landingpage?pid=csiro:P366-2003SEPT> ;
      prov:wasGeneratedBy dap:P366 ;
      .

    dap:P366
      rdf:type prov:Activity ;
      dct:type <http://dbpedia.org/resource/Observation> ;
      prov:startedAtTime "2000-11-01"^^xsd:date ;
      prov:used dap:Parkes-radio-telescope ;
      prov:wasInformedBy dap:ATNF ;
      rdfs:label "P366 - Parkes multibeam high-latitude pulsar survey"@en ;
      rdfs:seeAlso <https://doi.org/10.1111/j.1365-2966.2006.10100.x> ;
      .

This example is available from the [DXWG code repository](https://github.com/w3c/dxwg/tree/gh-pages/dcat/examples) at [`csiro-dap-examples.ttl`](https://w3c.github.io/dxwg/dcat/examples/csiro-dap-examples.ttl).

Several properties capture provenance information, including within the citation and title, but the primary link to a formal description of the project is through [`prov:wasGeneratedBy`](#Property:dataset_was_generated_by). A terse description of the project is shown as a [`prov:Activity`](https://www.w3.org/TR/prov-o/#Activity), though this would not necessarily be part of the same catalog. Note that as the project is ongoing, the activity has no end date.

Further provenance information might be provided using the other *starting point properties* from PROV, in particular [`prov:wasAttributedTo`](https://www.w3.org/TR/prov-o/#wasAttributedTo) (to link to an agent associated with the dataset production) and [`prov:wasDerivedFrom`](https://www.w3.org/TR/prov-o/#wasDerivedFrom) (to link to a predecessor dataset). Both of these complement Dublin Core properties already used in DCAT, as follows:

-   `prov:wasAttributedTo` provides a general link to all kinds of associated agents, such as project sponsors, managers, dataset owners, etc which are not correctly characterized using `dct:creator`, `dct:contributor` or `dct:publisher`.
-   `prov:wasDerivedFrom` supports a more specific relationship to an input or predecessor dataset compared with `dct:source`, which is not necessarily a previous dataset.

Further patterns for the use of *qualified properties* for resource attribution and interrelationships are described in <a href="#qualified-forms" class="sec-ref">§ 13. Qualified relations</a>.

### C.3 Link datasets and publications<a href="#examples-dataset-publication" class="self-link"></a>

Often datasets are associated with publications (scholarly articles, reports, etc) and this version of DCAT relies on the property `dct:isReferencedBy` to provide a way to link publications about a dataset to the dataset

The following example shows how a dataset published in the [Dryad repository](https://datadryad.org) is linked to a publication available in the [Nature Scientific Data journal]():

<a href="#dataset-publication" class="self-link">Example 47</a>

    :globtherm
      dct:title "Data from: GlobTherm, a global database on thermal tolerances for aquatic and terrestrial organisms"@en ;
      dct:description "How climate affects species distributions is a longstanding question receiving renewed interest owing to the need to predict the impacts of global warming on biodiversity. Is climate change forcing species to live near their critical thermal limits? Are these limits likely to change through natural selection? These and other important questions can be addressed with models relating geographical distributions of species with climate data, but inferences made with these models are highly contingent on non-climatic factors such as biotic interactions. Improved understanding of climate change effects on species will require extensive analysis of thermal physiological traits, but such data are scarce and scattered. To overcome current limitations, we created the GlobTherm database. The database contains experimentally derived species’ thermal tolerance data currently comprising over 2,000 species of terrestrial, freshwater, intertidal and marine multicellular algae, pl ants, fungi, and animals. The GlobTherm database will be maintained and curated by iDiv with the aim of expanding it, and enable further investigations on the effects of climate on the distribution of life on Earth."@en ;
      dct:identifier "https://doi.org/10.5061/dryad.1cv08"^^xsd:anyURI ;
      dct:creator <https://orcid.org/0000-0002-7883-3577> ;
      dct:relation <https://doi.org/10.5061/dryad.1cv08/6> ;
      dct:relation <https://doi.org/10.5061/dryad.1cv08/7> ;
      dct:isReferencedBy <https://doi.org/10.1038/sdata.2018.22>.

This examples is available from the [DXWG code repository](https://github.com/w3c/dxwg/tree/gh-pages/dcat/examples) at [`dryad-globtherm-sdata.ttl`](https://w3c.github.io/dxwg/dcat/examples/dryad-globtherm-sdata.ttl)

### C.4 Data services<a href="#examples-data-service" class="self-link"></a>

Data services may be described using DCAT. The values of the classifiers `dct:type`, `dct:conformsTo`, and `dcat:endpointDescription` provide progressively more detail about a service, whose actual endpoint is given by the `dcat:endpointURL`.

The first example describes a data catalog hosted by the European Environment Agency (EEA). This is classified as a [`dcat:DataService`](#Class:Data_Service) and has the `dct:type` set to "[discovery](http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/discovery)" from the INSPIRE classification of spatial data service types \[<a href="#bib-inspire-sdst" class="bibref" title="INSPIRE Registry: Spatial data service types">INSPIRE-SDST</a>\].

This example is available from the [DXWG code repository](https://github.com/w3c/dxwg/tree/gh-pages/dcat/examples) at [`eea-csw.ttl`](https://w3c.github.io/dxwg/dcat/examples/eea-csw.ttl)

<a href="#ex-service-eea" class="self-link">Example 48</a>

    a:EEA-CSW-Endpoint
      rdf:type dcat:DataService ;
      dct:type <http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceCategory/infoCatalogueService> ;
      dct:accessRights <http://publications.europa.eu/resource/authority/access-right/PUBLIC> ;
      dct:conformsTo <http://www.opengis.net/def/serviceType/ogc/csw> ;
      dct:description "The EEA public catalogue of spatial datasets references
        the spatial datasets used by the European Environment Agency as well as
        the spatial datasets produced by or for the EEA. In the latter case,
        when datasets are publicly available, a link to the location from where
        they can be downloaded is included in the dataset's metadata. The
        catalogue has been initially populated with the most important spatial
        datasets already available on the data&maps section of the EEA website
        and is currently updated with any newly published spatial dataset."@en ;
      dct:identifier "eea-sdi-public-catalogue" ;
      dct:issued "2012-01-01"^^xsd:date ;
      dct:license <https://creativecommons.org/licenses/by/2.5/dk/> ;
      dct:spatial [
        rdf:type dct:Location ;
        dcat:bbox "POLYGON((-180 90,180 90,180 -90,-180 -90,-180 90))"^^gsp:wktLiteral ;
      ] ;
      dct:title "European Environment Agency's public catalogue of spatial datasets."@en ;
      dct:type <http://inspire.ec.europa.eu/metadata-codelist/ResourceType/service> ;
      dct:type <http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/discovery> ;
      dcat:contactPoint a:EEA ;
      dcat:endpointDescription <https://sdi.eea.europa.eu/catalogue/srv/eng/csw?service=CSW&request=GetCapabilities> ;
      dcat:endpointURL <http://sdi.eea.europa.eu/catalogue/srv/eng/csw> ;
    .

<a href="#ex-service-gsa" class="box-ref">Example 49</a> shows a dataset hosted by Geoscience Australia, which is available from three distinct services, as indicated by the value of the [`dcat:servesDataset`](#Property:data_service_serves_dataset) property of each of the service descriptions. These are classified as a [`dcat:DataService`](#Class:Data_Service) and also have the `dct:type` set to "[download](http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/download)" and "[view](http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/view)" from the INSPIRE classification of spatial data service types \[<a href="#bib-inspire-sdst" class="bibref" title="INSPIRE Registry: Spatial data service types">INSPIRE-SDST</a>\].

<a href="#ex-service-gsa" class="box-ref">Example 49</a> is available from the [DXWG code repository](https://github.com/w3c/dxwg/tree/gh-pages/dcat/examples) at [`ga-courts.ttl`](https://w3c.github.io/dxwg/dcat/examples/ga-courts.ttl)

<a href="#ex-service-gsa" class="self-link">Example 49</a>

    ga-courts:jc
      rdf:type dcat:Dataset ;
      dct:description "The dataset contains spatial locations, in point format, of the Australian High Court, Australian Federal Courts and the Australian Magistrates Courts."@en ;
      dct:spatial [
        rdf:type dct:Location ;
          dcat:bbox """<http://www.opengis.net/def/crs/EPSG/0/4283> POLYGON((
          -42.885989 115.864566 , -12.460578 115.864566 ,
          -12.460578 153.276835 , -42.885989 153.276835 ,
          -42.885989 115.864566
        ))"""^^geosparql:wktLiteral ;
      ] ;
      dct:title "Judicial Courts"@en ;
      dct:type <http://purl.org/dc/dcmitype/Dataset> ;
      dcat:landingPage <https://ecat.ga.gov.au/geonetwork/srv/eng/catalog.search#/metadata/cc365600-294a-597d-e044-00144fdd4fa6> ;
    .

    ga-courts:jc-esri
      rdf:type dcat:DataService ;
      dct:conformsTo <https://developers.arcgis.com/rest/> ;
      dct:description "This web service provides access to the National Judicial Courts dataset and presents the spatial locations of all the known Australian High Courts, Australian Federal Courts and the Australian Federal Circuit Courts located within Australia, all complemented with feature attribution."@en ;
      dct:identifier "2b8540c8-4a43-144d-e053-12a3070a3ff7" ;
      dct:title "National Judicial Courts MapServer"@en ;
      dct:type <http://purl.org/dc/dcmitype/Service> ;
      dct:type <https://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/download> ;
      dct:type <https://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/view> ;
      dcat:endpointURL <http://services.ga.gov.au/gis/rest/services/Judicial_Courts/MapServer> ;
      dcat:landingPage <https://ecat.ga.gov.au/geonetwork/srv/eng/catalog.search#/metadata/2b8540c8-4a43-144d-e053-12a3070a3ff7> ;
      dcat:servesDataset ga-courts:jc ;
    .

    ga-courts:jc-wfs
      rdf:type dcat:DataService ;
      dct:conformsTo <http://www.opengis.net/def/serviceType/ogc/wfs/2.0.0> ;
      dct:conformsTo <http://www.opengis.net/def/serviceType/ogc/wfs/1.1.0> ;
      dct:conformsTo <http://www.opengis.net/def/serviceType/ogc/wfs/1.0.0> ;
      dct:description "This web service provides access to the National Judicial Courts dataset and presents the spatial locations of all the known Australian High Courts, Australian Federal Courts and the Australian Federal Circuit Courts located within Australia, all complemented with feature attribution."@en ;
      dct:identifier "2b8540c8-4a42-144d-e053-12a3070a3ff7" ;
      dct:title "National Judicial Courts WFS"@en ;
      dct:type <http://purl.org/dc/dcmitype/Service> ;
      dct:type <https://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/download> ;
      dcat:endpointDescription <http://services.ga.gov.au/gis/services/Judicial_Courts/MapServer/WFSServer?request=GetCapabilities&service=WFS> ;
      dcat:endpointURL <http://services.ga.gov.au/gis/services/Judicial_Courts/MapServer/WFSServer> ;
      dcat:landingPage <https://ecat.ga.gov.au/geonetwork/srv/eng/catalog.search#/metadata/2b8540c8-4a42-144d-e053-12a3070a3ff7> ;
      dcat:servesDataset ga-courts:jc ;
    .

    ga-courts:jc-wms
      rdf:type dcat:DataService ;
      dct:conformsTo <http://www.opengis.net/def/serviceType/ogc/wms/1.3> ;
      dct:description "This web service provides access to the National Judicial Courts dataset and presents the spatial locations of all the known Australian High Courts, Australian Federal Courts and the Australian Federal Circuit Courts located within Australia, all complemented with feature attribution."@en ;
      dct:identifier "2b8540c8-4a41-144d-e053-12a3070a3ff7" ;
      dct:title "National Judicial Courts WMS"@en ;
      dct:type <http://purl.org/dc/dcmitype/Service> ;
      dct:type <https://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/view> ;
      dcat:endpointDescription <http://services.ga.gov.au/gis/services/Judicial_Courts/MapServer/WMSServer?request=GetCapabilities&service=WMS> ;
      dcat:endpointURL <http://services.ga.gov.au/gis/services/Judicial_Courts/MapServer/WMSServer> ;
      dcat:landingPage <https://ecat.ga.gov.au/geonetwork/srv/eng/catalog.search#/metadata/2b8540c8-4a41-144d-e053-12a3070a3ff7> ;
      dcat:servesDataset ga-courts:jc ;
    .

### C.5 Compressed and packaged distributions<a href="#examples-compressed-and-packaged-distributions" class="self-link"></a>

The first example is for a distribution with a downloadable file that is compressed into a GZIP file.

<a href="#compressed-distribution" class="self-link">Example 50</a>

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://data.gov.cz/zdroj/datová-sada/247025684/22> a dcat:Distribution ;
      dcat:accessURL <https://mvcr1.opendata.cz/czechpoint/2007.csv.gz> ;
      dcat:downloadURL <https://mvcr1.opendata.cz/czechpoint/2007.csv.gz> ;
      dct:license <https://data.gov.cz/podmínky-užití/volný-přístup/> ;
      dct:conformsTo <https://mvcr1.opendata.cz/czechpoint/2007.json> ;
      dct:format <http://publications.europa.eu/resource/authority/file-type/CSV> ;
      dcat:mediaType <http://www.iana.org/assignments/media-types/text/csv> ;
      dcat:compressFormat <http://www.iana.org/assignments/media-types/application/gzip>
    .

The second example is for a distribution with several files packed into a TAR file.

<a href="#packaged-distribution" class="self-link">Example 51</a>

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://data.gov.cz/zdroj/datová-sada/247025684/22> a dcat:Distribution ;
      dcat:accessURL <https://mvcr1.opendata.cz/czechpoint/data.tar> ;
      dcat:downloadURL <https://mvcr1.opendata.cz/czechpoint/data.tar> ;
      dct:license <https://data.gov.cz/podmínky-užití/volný-přístup/> ;
      dct:conformsTo <https://mvcr1.opendata.cz/czechpoint/2007.json> ;
      dct:format <http://publications.europa.eu/resource/authority/file-type/CSV> ;
      dcat:mediaType <http://www.iana.org/assignments/media-types/text/csv> ;
      dcat:packageFormat <http://publications.europa.eu/resource/authority/file-type/TAR>
    .

The third example is for a distribution with several files packed into a TAR file which has been compressed into a GZIP file.

<a href="#packaged-and-compressed-distribution" class="self-link">Example 52</a>

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://data.gov.cz/zdroj/datová-sada/247025684/22> a dcat:Distribution ;
      dcat:accessURL <https://mvcr1.opendata.cz/czechpoint/data.tar.gz> ;
      dcat:downloadURL <https://mvcr1.opendata.cz/czechpoint/data.tar.gz> ;
      dct:conformsTo <https://mvcr1.opendata.cz/czechpoint/2007.json> ;
      dct:license <https://data.gov.cz/podmínky-užití/volný-přístup/> ;
      dct:format <http://publications.europa.eu/resource/authority/file-type/CSV> ;
      dcat:mediaType <http://www.iana.org/assignments/media-types/text/csv> ;
      dcat:packageFormat <http://publications.europa.eu/resource/authority/file-type/TAR> ;
      dcat:compressFormat <http://www.iana.org/assignments/media-types/application/gzip>
      .

These examples are available from the [DXWG code repository](https://github.com/w3c/dxwg/tree/gh-pages/dcat/examples) at [`compress-and-package.ttl`](https://w3c.github.io/dxwg/dcat/examples/compress-and-package.ttl)

D. Change history<a href="#changes" class="self-link"></a>
----------------------------------------------------------

A full change-log is available on [GitHub](https://github.com/w3c/dxwg/commits/gh-pages/dcat)

### D.1 Changes since the W3C Recommendation of 16 January 2014<a href="#changes-since-20140116" class="self-link"></a>

The document has undergone the following changes since the W3C Recommendation of 16 January 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\]:

-   A new property [`dct:isReferencedBy`](#Property:resource_is_referenced_by) was added to the class [`dcat:Resource`](#Class:Resource) to associate the resource described in the catalog with an external resource that references, cites, or points to the cataloged resource. In particular, in the case of datasets, this property supports the data citation use case where a publication references a dataset. For other types of relations not covered by this or other known properties, the specification provides the [qualified relations](#qualified-forms) pattern. See [Issue \#63](https://github.com/w3c/dxwg/issues/63).
-   A new section <a href="#time-and-space" class="sec-ref">§ 9. Time and space</a> was added to describe how to indicate the temporal and spatial characteristics of a resource. See [Issue \#83](https://github.com/w3c/dxwg/issues/83), [Issue \#84](https://github.com/w3c/dxwg/issues/84), [Issue \#85](https://github.com/w3c/dxwg/issues/85).
-   A new class [`dct:Location`](#Class:Location) and three new properties ([`locn:geometry`](#Property:location_geometry), [`dcat:bbox`](#Property:location_bbox), [`dcat:centroid`](#Property:location_centroid)) added to support description of the coordinates of a geographical area, to be used for specifying the spatial coverage of a resource. See [Issue \#83](https://github.com/w3c/dxwg/issues/83).
-   A new class [`dct:PeriodOftime`](#Class:Period_of_Time) and four new properties ([`dcat:startDate`](#Property:period_start_date), [`dcat:endDate`](#Property:period_end_date), [`time:hasBeginning`](#Property:period_has_beginning), [`time:hasEnd`](#Property:period_has_end)) added to support description of a temporal interval, to be used for specifying the temporal coverage of a resource. See [Issue \#85](https://github.com/w3c/dxwg/issues/85).
-   The global range of the property [`dcat:themeTaxonomy`](#Property:catalog_themes) relaxed to allow linking to a taxonomy that is not formalized as a `skos:ConceptScheme`. See [Issue \#119](https://github.com/w3c/dxwg/issues/119).
-   A new property [`dcat:spatialResolutionInMeters`](#Property:dataset_spatial_resolution) added to support description of the spatial resolution of datasets and distributions. See [Issue \#84](https://github.com/w3c/dxwg/issues/84).
-   A new property [`dcat:temporalResolution`](#Property:dataset_temporal_resolution) added to support description of the temporal resolution of datasets and distributions. See [Issue \#84](https://github.com/w3c/dxwg/issues/84).
-   Two new properties, [`dcat:packageFormat`](#Property:distribution_packaging_format) and [`dcat:compressFormat`](#Property:distribution_compression_format), were added to specify packaged and compressed distributions, respectively. See [Issue \#54](https://github.com/w3c/dxwg/issues/54).
-   A new section <a href="#qualified-relationship" class="sec-ref">§ 13.2 Relationships between datasets and other resources</a>, a new property [`dcat:qualifiedRelation`](#Property:resource_qualified_relation) and a new class [`dcat:Relationship`](#Class:Relationship) added to support relationships between datasets or other resources. See [Issue \#79](https://github.com/w3c/dxwg/issues/79).
-   A new section <a href="#dereferenceable-identifiers" class="sec-ref">§ 7. Dereferenceable identifiers</a> was added to describe how to indicate different types of identifiers by using \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\] and \[<a href="#bib-vocab-adms" class="bibref" title="Asset Description Metadata Schema (ADMS)">VOCAB-ADMS</a>\]. See [Issue \#53](https://github.com/w3c/dxwg/issues/53) and [Issue \#68](https://github.com/w3c/dxwg/issues/68).
-   A new section <a href="#qualified-attribution" class="sec-ref">§ 13.1 Relationships between datasets and agents</a> was added to recommend a pattern for assigning an agent to a cataloged resource with a qualified relationship. See [Issue \#79](https://github.com/w3c/dxwg/issues/79).
-   [Property: had role](#Property:relationship_hadRole): The property `dcat:hadRole` is added to support the use of [`prov:qualifiedAttribution`](https://www.w3.org/TR/prov-o/#qualifiedAttribution) to associate an agent with a resource, where the role of the agent with relation to the resource is specified, and is something other than the standard \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\] roles: creator, publisher or contributor. See [Issue \#79](https://github.com/w3c/dxwg/issues/79)
-   [Property: resource creator](#Property:resource_creator): The property `dct:creator` is recommended for use in the context of a dataset or other resource to allow the entity responsible for generating the resource to be recorded. See [Issue \#61](https://github.com/w3c/dxwg/issues/61)
-   [Property: was generated by](#Property:dataset_was_generated_by): The property `prov:wasGeneratedBy` is recommended for use in the context of a dataset to allow the provenance or business context to be recorded. See [Issue \#71](https://github.com/w3c/dxwg/issues/71)
-   [Property: resource relation](#Property:resource_relation): The property `dct:relation` is recommended for use in the context of a cataloged resource to capture general relationships, including the case where the package of resources associated with a cataloged item includes a mixture of representations, parts, documentation and other elements which are not strictly 'distributions' of a dataset - see [Issue \#253](https://github.com/w3c/dxwg/issues/253). The more general use of `dct:relation` is driven by the requirement documented in [Issue \#81](https://github.com/w3c/dxwg/issues/81).
-   [Property: media type](#Property:distribution_media_type): The range of `dcat:mediaType` has been tightened from `dct:MediaTypeOrExtent` to `dct:MediaType`. See [Issue \#127](https://github.com/w3c/dxwg/issues/127).
-   [Property: conforms to](#Property:distribution_conforms_to): The property `dct:conformsTo` is recommended for use in the context of a `dcat:Distribution` to allow the model or schema used for the representation to be indicated as well as the serialization (which is indicated using `dct:format` and `dcat:mediaType`). See [Issue \#55](https://github.com/w3c/dxwg/issues/55).
-   Errors in examples of [`dcat:mediaType`](#Property:distribution_media_type) usage fixed. See [Issue \#170](https://github.com/w3c/dxwg/issues/170).
-   A new section <a href="#quality-information" class="sec-ref">§ 12. Quality information</a> was added to provie recommendations for how to associate quality information to datasets using elements from the W3C DQV vocabulary \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\]. Since \[<a href="#bib-vocab-dqv" class="bibref" title="Data on the Web Best Practices: Data Quality Vocabulary">VOCAB-DQV</a>\] is not a rec-track document, these are non-normative. See [Issue \#57](https://github.com/w3c/dxwg/issues/57) and [Issue \#58](https://github.com/w3c/dxwg/issues/58).
-   [Class: Cataloged resource](#Class:Resource): In DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] the scope of a [`dcat:Catalog`](#Class:Catalog) was limited to datasets. This has been generalized, and properties common to all cataloged resources are now associated with a super-class [`dcat:Resource`](#Class:Resource). See [Issue \#172](https://github.com/w3c/dxwg/issues/172) and [Issue \#116](https://github.com/w3c/dxwg/issues/116).
-   [Class: Data service](#Class:Data_Service): In DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] the scope of a [`dcat:Catalog`](#Class:Catalog) was limited to datasets. The new class `dcat:DataService` has been added to support cataloging of various kinds of data services. See [Issue \#172](https://github.com/w3c/dxwg/issues/172), [Issue \#56](https://github.com/w3c/dxwg/issues/56), [Issue \#432](https://github.com/w3c/dxwg/issues/432), [Issue \#821](https://github.com/w3c/dxwg/issues/821).
-   [Class: Dataset](#Class:Dataset): In DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] [`dcat:Dataset`](#Class:Dataset) was a sub-class of [`dctype:Dataset`](http://purl.org/dc/dcmitype/Dataset), which is a term of the [DCMI Types vocabulary](http://dublincore.org/documents/dcmi-terms/#section-7) \[<a href="#bib-dcterms" class="bibref" title="DCMI Metadata Terms">DCTERMS</a>\]. This relationship has been removed in the revised DCAT vocabulary. See [Issue \#98](https://github.com/w3c/dxwg/issues/98).
-   [Class: Distribution](#Class:Distribution): In DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] the definition of a [`dcat:Distribution`](#Class:Distribution) allowed a number of alternative interpretations. The definition has been rephrased to clarify that distributions are primarily *representations* of datasets. See [Issue \#52](https://github.com/w3c/dxwg/issues/172) and related use cases.
-   [Property: theme/category](#Property:resource_theme): In DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] the domain of `dcat:theme` was `dcat:Dataset`, which limited use of this property in other contexts. The domain has been relaxed in this revision. See [Issue \#123](https://github.com/w3c/dxwg/issues/123).
-   [Property: type/genre](#Property:resource_type): Added in DCAT revision. See [Issue \#64](https://github.com/w3c/dxwg/issues/64), with examples of usage in overview section.
-   [Property: keyword/tag](#Property:resource_keyword): In DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] the domain of `dcat:keyword` was `dcat:Dataset`, which limited use of this property in other contexts. The domain has been relaxed in this revision. See [Issue \#121](https://github.com/w3c/dxwg/issues/121).
-   [Property: contact point](#Property:resource_contact_point): In DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] the domain of `dcat:contactPoint` was `dcat:Dataset`, which limited use of this property in other contexts. The domain has been relaxed in this revision. See [Issue \#95](https://github.com/w3c/dxwg/issues/95).
-   [Property: landing page](#Property:resource_landing_page): In DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] the domain of `dcat:landingPage` was `dcat:Dataset`, which limited use of this property in other contexts. The domain has been relaxed in this revision. See [Issue \#122](https://github.com/w3c/dxwg/issues/122).
-   [Property: `vann:usageNote`](http://vocab.org/vann/#usageNote): DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] included documentation captured as text using [`vann:usageNote`](http://vocab.org/vann/#usageNote) elements, which is a sub-property of `rdfs:seeAlso` - an `owl:ObjectProperty` that cannot have a Literal value. This revision of DCAT has fixed these issues and replaced the use of `vann:usageNote` with [`skos:scopeNote`](https://www.w3.org/TR/skos-primer/#secdocumentation). See [Issue \#233](https://github.com/w3c/dxwg/issues/233).
-   [Property: conforms to](#Property:record_conforms_to): DCAT 2014 \[<a href="#bib-vocab-dcat-20140116" class="bibref" title="Data Catalog Vocabulary (DCAT)">VOCAB-DCAT-20140116</a>\] had no way of representing the conformance of a record metadata with a metadata standard. This revision has added the property `dct:conformsTo` for `dcat:CatalogRecord` to cover this requirement. See [Issue \#502](https://github.com/w3c/dxwg/issues/502).
-   Each relevant class section was extended with properties to deal with licensing, access rights, other rights and policies associated with the classes, as recommended in <a href="#license-rights" class="sec-ref">§ 8. License and rights statements</a>.
-   A new section <a href="#license-rights" class="sec-ref">§ 8. License and rights statements</a> was added to provide guidance and recommendations for the use of [`dct:license`](http://dublincore.org/documents/dcmi-terms/#terms-license), [`dct:accessRights`](http://dublincore.org/documents/dcmi-terms/#terms-accessRights), and [`dct:rights`](http://dublincore.org/documents/dcmi-terms/#terms-rights) in the context of dcat catalogs and distributions. See [Issue \#114](https://github.com/w3c/dxwg/issues/114) for the background discussion.
-   [Class: Catalog](#Class:Catalog): This class has been made a sub-class of `dcat:Dataset`. Moreover, the following properties have been added: [`dct:hasPart`](#Property:catalog_has_part), to specify a cataloged resource, irrespective of its type; [`dcat:service`](#Property:catalog_service), to specify a cataloged data service; [`dcat:catalog`](#Property:catalog_catalog), to specify sub-catalogs. See [Issue \#172](https://github.com/w3c/dxwg/issues/172).

E. References<a href="#references" class="self-link"></a>
---------------------------------------------------------

### E.1 Normative references<a href="#normative-references" class="self-link"></a>

\[DC11\]  
[Dublin Core Metadata Element Set, Version 1.1](http://dublincore.org/documents/dces/). DCMI. 14 June 2012. DCMI Recommendation. URL: <http://dublincore.org/documents/dces/>

\[DCTERMS\]  
[DCMI Metadata Terms](http://dublincore.org/documents/dcmi-terms/). DCMI Usage Board. DCMI. 14 June 2012. DCMI Recommendation. URL: <http://dublincore.org/documents/dcmi-terms/>

\[FOAF\]  
[FOAF Vocabulary Specification 0.99 (Paddington Edition)](http://xmlns.com/foaf/spec). Dan Brickley; Libby Miller. FOAF project. 14 January 2014. URL: <http://xmlns.com/foaf/spec>

\[GeoSPARQL\]  
[GeoSPARQL - A Geographic Query Language for RDF Data](http://www.opengeospatial.org/standards/geosparql). Matthew Perry; John Herring. OGC. 10 September 2012. URL: <http://www.opengeospatial.org/standards/geosparql>

\[IANA-MEDIA-TYPES\]  
[Media Types](https://www.iana.org/assignments/media-types/). IANA. URL: <https://www.iana.org/assignments/media-types/>

\[LOCN\]  
[ISA Programme Location Core Vocabulary](http://www.w3.org/ns/locn). Andrea Perego; Michael Lutz. European Commission. 23 March 2015. Second version in w3.org/ns space. URL: <http://www.w3.org/ns/locn>

\[ODRL-MODEL\]  
[ODRL Information Model 2.2](https://www.w3.org/TR/odrl-model/). Renato Iannella; Serena Villata. W3C. 15 February 2018. W3C Recommendation. URL: <https://www.w3.org/TR/odrl-model/>

\[ODRL-VOCAB\]  
[ODRL Vocabulary & Expression 2.2](https://www.w3.org/TR/odrl-vocab/). Renato Iannella; Michael Steidl; Stuart Myles; Víctor Rodríguez-Doncel. W3C. 15 February 2018. W3C Recommendation. URL: <https://www.w3.org/TR/odrl-vocab/>

\[OWL-TIME\]  
[Time Ontology in OWL](https://www.w3.org/TR/owl-time/). Simon Cox; Chris Little. W3C. 19 October 2017. W3C Recommendation. URL: <https://www.w3.org/TR/owl-time/>

\[OWL2-OVERVIEW\]  
[OWL 2 Web Ontology Language Document Overview (Second Edition)](https://www.w3.org/TR/owl2-overview/). W3C OWL Working Group. W3C. 11 December 2012. W3C Recommendation. URL: <https://www.w3.org/TR/owl2-overview/>

\[PROV-O\]  
[PROV-O: The PROV Ontology](https://www.w3.org/TR/prov-o/). Timothy Lebo; Satya Sahoo; Deborah McGuinness. W3C. 30 April 2013. W3C Recommendation. URL: <https://www.w3.org/TR/prov-o/>

\[RDF-SCHEMA\]  
[RDF Schema 1.1](https://www.w3.org/TR/rdf-schema/). Dan Brickley; Ramanathan Guha. W3C. 25 February 2014. W3C Recommendation. URL: <https://www.w3.org/TR/rdf-schema/>

\[RFC2119\]  
[Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). S. Bradner. IETF. March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

\[RFC8174\]  
[Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words](https://tools.ietf.org/html/rfc8174). B. Leiba. IETF. May 2017. Best Current Practice. URL: <https://tools.ietf.org/html/rfc8174>

\[SKOS-REFERENCE\]  
[SKOS Simple Knowledge Organization System Reference](https://www.w3.org/TR/skos-reference/). Alistair Miles; Sean Bechhofer. W3C. 18 August 2009. W3C Recommendation. URL: <https://www.w3.org/TR/skos-reference/>

\[XMLSCHEMA11-2\]  
[W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes](https://www.w3.org/TR/xmlschema11-2/). David Peterson; Sandy Gao; Ashok Malhotra; Michael Sperberg-McQueen; Henry Thompson; Paul V. Biron et al. W3C. 5 April 2012. W3C Recommendation. URL: <https://www.w3.org/TR/xmlschema11-2/>

### E.2 Informative references<a href="#informative-references" class="self-link"></a>

\[DataCite\]  
[DataCite Metadata Schema](https://schema.datacite.org/). DataCite Metadata Working Group. DataCite e.V. 16 August 2019. URL: <https://schema.datacite.org/>

\[DATETIME\]  
[Date and Time Formats](https://www.w3.org/TR/NOTE-datetime). W3C. 27 August 1998. W3C Note. URL: <https://www.w3.org/TR/NOTE-datetime>

\[DATS\]  
[Data Tag Suite](https://datatagsuite.github.io/docs/html/). Alejandra Gonzalez-Beltran; Philippe Rocca-Serra. NIH Big Data 2 Knowledge bioCADDIE and NIH Data Commons projects. 2016. URL: <https://datatagsuite.github.io/docs/html/>

\[DBPEDIA-ONT\]  
[DBPedia ontology](http://dbpedia.org/ontology/). URL: <http://dbpedia.org/ontology/>

\[DCAP\]  
[Guidelines for Dublin Core Application Profiles](http://dublincore.org/documents/profile-guidelines/). Karen Coyle; Thomas Baker. DCMI. 18 May 2009. DCMI Recommended Resource. URL: <http://dublincore.org/documents/profile-guidelines/>

\[DCAT-AP\]  
[DCAT Application Profile for data portals in Europe. Version 1.2.1](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe). European Commission. 28 May 2019. URL: <https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe>

\[DCAT-AP-IT\]  
[Profilo metadatazione DCAT-AP\_IT](https://docs.italia.it/italia/daf/linee-guida-cataloghi-dati-dcat-ap-it/it/stabile/dcat-ap_it.html). AgID & Team Digitale. URL: <https://docs.italia.it/italia/daf/linee-guida-cataloghi-dati-dcat-ap-it/it/stabile/dcat-ap_it.html>

\[DCAT-AP-NO\]  
[Standard for beskrivelse av datasett og datakataloger (DCAT-AP-NO)](https://doc.difi.no/dcat-ap-no/). URL: <https://doc.difi.no/dcat-ap-no/>

\[DCAT-AP-SE\]  
[DCAT-AP-SE: Swedish recommendation for DCAT-AP1.1](https://lankadedata.se/spec/DCAT-AP-SE). Matthias Palmér. URL: <https://lankadedata.se/spec/DCAT-AP-SE>

\[DCAT-AP.de\]  
[Vokabulare und Dokumente für DCAT-AP.de](https://dcat-ap.de/def/). URL: <https://dcat-ap.de/def/>

\[DCAT-BE\]  
[Linking data portals across Belgium.](http://dcat.be/). URL: <http://dcat.be/>

\[DCAT-UCR\]  
[Dataset Exchange Use Cases and Requirements](https://www.w3.org/TR/dcat-ucr/). Jaroslav Pullmann; Rob Atkinson; Antoine Isaac; Ixchel Faniel. W3C. 17 January 2019. W3C Note. URL: <https://www.w3.org/TR/dcat-ucr/>

\[DOAP\]  
[Description of a Project](https://github.com/ewilderj/doap/wiki). Edd Wilder-James. URL: <https://github.com/ewilderj/doap/wiki>

\[DWBP\]  
[Data on the Web Best Practices](https://www.w3.org/TR/dwbp/). Bernadette Farias Loscio; Caroline Burle; Newton Calegari. W3C. 31 January 2017. W3C Recommendation. URL: <https://www.w3.org/TR/dwbp/>

\[EARL10-Schema\]  
[Evaluation and Report Language (EARL) 1.0 Schema](https://www.w3.org/TR/EARL10-Schema/). Shadi Abou-Zahra. W3C. 2 February 2017. W3C Note. URL: <https://www.w3.org/TR/EARL10-Schema/>

\[FAIR\]  
[The FAIR Guiding Principles for scientific data management and stewardship](https://doi.org/10.1038/sdata.2016.18). Mark D. Wilkinson et al. Nature. Scientific Data, vol. 3, Article nr. 160018. URL: <https://doi.org/10.1038/sdata.2016.18>

\[GeoDCAT-AP\]  
[GeoDCAT-AP: A geospatial extension for the DCAT application profile for data portals in Europe. Version 1.0.1](https://joinup.ec.europa.eu/solution/geodcat-application-profile-data-portals-europe). European Commission. 2 August 2016. URL: <https://joinup.ec.europa.eu/solution/geodcat-application-profile-data-portals-europe>

\[GeoDCAT-AP-IT\]  
[GeoDCAT-AP in Italy, the national guidelines published](https://joinup.ec.europa.eu/news/geodcat-apit). URL: <https://joinup.ec.europa.eu/news/geodcat-apit>

\[HCLS-Dataset\]  
[Dataset Descriptions: HCLS Community Profile](https://www.w3.org/TR/hcls-dataset/). Alasdair Gray; M. Scott Marshall; Michel Dumontier. W3C. 14 May 2015. W3C Note. URL: <https://www.w3.org/TR/hcls-dataset/>

\[HTML-RDFa\]  
[HTML+RDFa 1.1 - Second Edition](https://www.w3.org/TR/html-rdfa/). Manu Sporny. W3C. 17 March 2015. W3C Recommendation. URL: <https://www.w3.org/TR/html-rdfa/>

\[HYDRA\]  
[Hydra Core Vocabulary](https://www.hydra-cg.com/spec/latest/core/). Markus Lanthaler. Hydra W3C Community Group. 15 March 2018. Unofficial Draft. URL: <https://www.hydra-cg.com/spec/latest/core/>

\[IANA-RELATIONS\]  
[Link Relations](https://www.iana.org/assignments/link-relations/). IANA. URL: <https://www.iana.org/assignments/link-relations/>

\[IANA-URI-SCHEMES\]  
[Uniform Resource Identifier (URI) Schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml). IANA. URL: <https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml>

\[INSPIRE-DoC\]  
[INSPIRE Registry: Degrees of conformity](http://inspire.ec.europa.eu/metadata-codelist/DegreeOfConformity/). European Commission. URL: <http://inspire.ec.europa.eu/metadata-codelist/DegreeOfConformity/>

\[INSPIRE-SDST\]  
[INSPIRE Registry: Spatial data service types](http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/). European Commission. URL: <http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/>

\[IRI\]  
[Internationalized Resource Identifiers (IRIs)](https://tools.ietf.org/html/rfc3987). M. Duerst; M. Suignard. IETF. January 2005. Proposed Standard. URL: <https://tools.ietf.org/html/rfc3987>

\[ISO-19115\]  
[Geographic information -- Metadata](https://www.iso.org/standard/26020.html). ISO/TC 211. ISO. 2003. International Standard. URL: <https://www.iso.org/standard/26020.html>

\[ISO-19115-1\]  
[Geographic information -- Metadata -- Part 1: Fundamentals](https://www.iso.org/standard/53798.html). ISO/TC 211. ISO. 2014. International Standard. URL: <https://www.iso.org/standard/53798.html>

\[ISO-19128\]  
[Geographic information -- Web map server interface](https://www.iso.org/standard/32546.html). ISO/TC 211. ISO. 2005. International Standard. URL: <https://www.iso.org/standard/32546.html>

\[ISO-19142\]  
[Geographic information -- Web Feature Service](https://www.iso.org/standard/42136.html). ISO/TC 211. ISO. 2010. International Standard. URL: <https://www.iso.org/standard/42136.html>

\[ISO-26324\]  
[Information and documentation -- Digital object identifier system](https://www.iso.org/standard/43506.html). ISO/TC 46/SC 9. ISO. 2012. International Standard. URL: <https://www.iso.org/standard/43506.html>

\[ISO-IEC-25012\]  
[ISO/IEC 25012 - Data Quality model](http://iso25000.com/index.php/en/iso-25000-standards/iso-25012). URL: <http://iso25000.com/index.php/en/iso-25000-standards/iso-25012>

\[JSON-LD\]  
[JSON-LD 1.0](https://www.w3.org/TR/json-ld/). Manu Sporny; Gregg Kellogg; Markus Lanthaler. W3C. 16 January 2014. W3C Recommendation. URL: <https://www.w3.org/TR/json-ld/>

\[LinkedDataPatterns\]  
[Linked Data Patterns: A pattern catalogue for modelling, publishing, and consuming Linked Data](http://patterns.dataincubator.org/book/). Leigh Dodds; Ian Davis. 31 May 2012. URL: <http://patterns.dataincubator.org/book/>

\[MDR-AR\]  
[Named Authority List: Access rights](https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/access-right). Publications Office of the European Union. URL: <https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/access-right>

\[N3\]  
[Notation3 (N3): A readable RDF syntax](https://www.w3.org/TeamSubmission/2008/SUBM-n3-20080114/). Tim Berners-Lee; Dan Connolly. W3C. 14 January 2008. W3C Team Submission. URL: <https://www.w3.org/TeamSubmission/2008/SUBM-n3-20080114/>

\[netCDF\]  
[Network Common Data Form (NetCDF)](https://www.unidata.ucar.edu/software/netcdf/). UNIDATA. URL: <https://www.unidata.ucar.edu/software/netcdf/>

\[ODRS\]  
[Open Data Rights Statement Vocabulary](http://schema.theodi.org/odrs). Leigh Dodds. ODI. 29 July 2013. URL: <http://schema.theodi.org/odrs>

\[OpenAPI\]  
[OpenAPI Specification](https://www.openapis.org/). Darrell Miller; Jeremy Whitlock; Marsh Gardiner; Mike Ralphson; Ron Ratovsky; Uri Sarid; Tony Tam; Jason Harmon. OpenAPI Initiative. URL: <https://www.openapis.org/>

\[OpenSearch\]  
[OpenSearch 1.1 Draft 6](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md). DeWitt Clinton. OpenSearch. 17 April 2018. URL: <https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md>

\[OWL2-SYNTAX\]  
[OWL 2 Web Ontology Language Structural Specification and Functional-Style Syntax (Second Edition)](https://www.w3.org/TR/owl2-syntax/). Boris Motik; Peter Patel-Schneider; Bijan Parsia. W3C. 11 December 2012. W3C Recommendation. URL: <https://www.w3.org/TR/owl2-syntax/>

\[RDF-SYNTAX-GRAMMAR\]  
[RDF 1.1 XML Syntax](https://www.w3.org/TR/rdf-syntax-grammar/). Dave Beckett. W3C. 25 February 2014. W3C Recommendation. URL: <https://www.w3.org/TR/rdf-syntax-grammar/>

\[RDF11-CONCEPTS\]  
[RDF 1.1 Concepts and Abstract Syntax](https://www.w3.org/TR/rdf11-concepts/). Richard Cyganiak; David Wood; Markus Lanthaler. W3C. 25 February 2014. W3C Recommendation. URL: <https://www.w3.org/TR/rdf11-concepts/>

\[RDF11-PRIMER\]  
[RDF 1.1 Primer](https://www.w3.org/TR/rdf11-primer/). Guus Schreiber; Yves Raimond. W3C. 24 June 2014. W3C Note. URL: <https://www.w3.org/TR/rdf11-primer/>

\[RE3DATA-SCHEMA\]  
[Metadata Schema for the Description of Research Data Repositories: version 3](https://doi.org/10.2312/re3.008). Jessika Rücknagel et al. GFZ Potsdam. 17 December 2015. URL: <https://doi.org/10.2312/re3.008>

\[RFC3986\]  
[Uniform Resource Identifier (URI): Generic Syntax](https://tools.ietf.org/html/rfc3986). T. Berners-Lee; R. Fielding; L. Masinter. IETF. January 2005. Internet Standard. URL: <https://tools.ietf.org/html/rfc3986>

\[SCHEMA-ORG\]  
[Schema.org](https://schema.org/). URL: <https://schema.org/>

\[SDW-BP\]  
[Spatial Data on the Web Best Practices](https://www.w3.org/TR/sdw-bp/). Jeremy Tandy; Linda van den Brink; Payam Barnaghi. W3C. 28 September 2017. W3C Note. URL: <https://www.w3.org/TR/sdw-bp/>

\[SHACL\]  
[Shapes Constraint Language (SHACL)](https://www.w3.org/TR/shacl/). Holger Knublauch; Dimitris Kontokostas. W3C. 20 July 2017. W3C Recommendation. URL: <https://www.w3.org/TR/shacl/>

\[ShEx\]  
[Shape Expressions Language 2.1](http://shex.io/shex-semantics/). Shape Expressions W3C Community Group. 17 November 2018. Draft Community Group Report. URL: <http://shex.io/shex-semantics/>

\[SPARQL11-QUERY\]  
[SPARQL 1.1 Query Language](https://www.w3.org/TR/sparql11-query/). Steven Harris; Andy Seaborne. W3C. 21 March 2013. W3C Recommendation. URL: <https://www.w3.org/TR/sparql11-query/>

\[SPARQL11-SERVICE-DESCRIPTION\]  
[SPARQL 1.1 Service Description](https://www.w3.org/TR/sparql11-service-description/). Gregory Williams. W3C. 21 March 2013. W3C Recommendation. URL: <https://www.w3.org/TR/sparql11-service-description/>

\[StatDCAT-AP\]  
[StatDCAT-AP – DCAT Application Profile for description of statistical datasets. Version 1.0.1](https://joinup.ec.europa.eu/solution/statdcat-application-profile-data-portals-europe). European Commission. 28 May 2019. URL: <https://joinup.ec.europa.eu/solution/statdcat-application-profile-data-portals-europe>

\[Turtle\]  
[RDF 1.1 Turtle](https://www.w3.org/TR/turtle/). Eric Prud'hommeaux; Gavin Carothers. W3C. 25 February 2014. W3C Recommendation. URL: <https://www.w3.org/TR/turtle/>

\[VCARD-RDF\]  
[vCard Ontology - for describing People and Organizations](https://www.w3.org/TR/vcard-rdf/). Renato Iannella; James McKinney. W3C. 22 May 2014. W3C Note. URL: <https://www.w3.org/TR/vcard-rdf/>

\[VIVO-ISF\]  
[VIVO-ISF Data Standard](https://github.com/vivo-isf/vivo-isf). URL: <https://github.com/vivo-isf/vivo-isf>

\[VOCAB-ADMS\]  
[Asset Description Metadata Schema (ADMS)](https://www.w3.org/TR/vocab-adms/). Phil Archer; Gofran Shukair. W3C. 1 August 2013. W3C Note. URL: <https://www.w3.org/TR/vocab-adms/>

\[VOCAB-DATA-CUBE\]  
[The RDF Data Cube Vocabulary](https://www.w3.org/TR/vocab-data-cube/). Richard Cyganiak; Dave Reynolds. W3C. 16 January 2014. W3C Recommendation. URL: <https://www.w3.org/TR/vocab-data-cube/>

\[VOCAB-DCAT-20140116\]  
[Data Catalog Vocabulary (DCAT)](https://www.w3.org/TR/2014/REC-vocab-dcat-20140116/). Fadi Maali; John Erickson. W3C. 16 January 2014. W3C Recommendation. URL: <https://www.w3.org/TR/2014/REC-vocab-dcat-20140116/>

\[VOCAB-DQV\]  
[Data on the Web Best Practices: Data Quality Vocabulary](https://www.w3.org/TR/vocab-dqv/). Riccardo Albertoni; Antoine Isaac. W3C. 15 December 2016. W3C Note. URL: <https://www.w3.org/TR/vocab-dqv/>

\[VOCAB-ORG\]  
[The Organization Ontology](https://www.w3.org/TR/vocab-org/). Dave Reynolds. W3C. 16 January 2014. W3C Recommendation. URL: <https://www.w3.org/TR/vocab-org/>

\[VOCAB-SSN\]  
[Semantic Sensor Network Ontology](https://www.w3.org/TR/vocab-ssn/). Armin Haller; Krzysztof Janowicz; Simon Cox; Danh Le Phuoc; Kerry Taylor; Maxime Lefrançois. W3C. 19 October 2017. W3C Recommendation. URL: <https://www.w3.org/TR/vocab-ssn/>

\[VOID\]  
[Describing Linked Datasets with the VoID Vocabulary](https://www.w3.org/TR/void/). Keith Alexander; Richard Cyganiak; Michael Hausenblas; Jun Zhao. W3C. 3 March 2011. W3C Note. URL: <https://www.w3.org/TR/void/>

\[W3C-BASIC-GEO\]  
[Basic Geo (WGS84 lat/long) Vocabulary](https://www.w3.org/2003/01/geo/). Dan Brickley. W3C Semantic Web Interest Group. 1 February 2006. URL: <https://www.w3.org/2003/01/geo/>

\[WFS\]  
[Web Feature Service 2.0 Interface Standard](http://www.opengeospatial.org/standards/wfs). Panagiotis (Peter) A. Vretanos. OGC. 10 July 2014. OGC Interface Standard. URL: <http://www.opengeospatial.org/standards/wfs>

\[WMS\]  
[Web Map Service Implementation Specification](http://www.opengeospatial.org/standards/wms). Jeff de la Beaujardiere. OGC. 15 March 2006. OpenGIS Implementation Standard. URL: <http://www.opengeospatial.org/standards/wms>

\[WSDL20\]  
[Web Services Description Language (WSDL) Version 2.0 Part 1: Core Language](https://www.w3.org/TR/wsdl20/). Roberto Chinnici; Jean-Jacques Moreau; Arthur Ryman; Sanjiva Weerawarana et al. W3C. 26 June 2007. W3C Recommendation. URL: <https://www.w3.org/TR/wsdl20/>

\[ZaveriEtAl\]  
[Quality assessment for Linked Data: A Survey](https://doi.org/10.3233/SW-150175). Amrapali Zaveri et al. IOS Press. 2015. Semantic Web, vol. 7, no. 1, pp. 63-93. URL: <https://doi.org/10.3233/SW-150175>

[↑](#title)
