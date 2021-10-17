\[[contents](./#toc)\]

[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

Accessible Rich Internet Applications (WAI-ARIA) 1.0
====================================================

W3C Recommendation 20 March 2014
--------------------------------

This version:  
<http://www.w3.org/TR/2014/REC-wai-aria-20140320/>

Latest version:  
<http://www.w3.org/TR/wai-aria/>

Previous version:  
<http://www.w3.org/TR/2014/PR-wai-aria-20140206/>

Editors:  
James Craig, Apple Inc.  
Michael Cooper, W3C

Previous Editors:  
Lisa Pappas, Society for Technical Communication  
Rich Schwerdtfeger, IBM  
Lisa Seeman, UB Access  

Please check the [**errata**](http://www.w3.org/WAI/ARIA/1.0/errata/) for any errors or issues reported since publication.

This document is also available as a [single page](complete) version.

See also [**translations**](http://www.w3.org/2003/03/Translations/byTechnology?technology=wai-aria).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008-2014 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

Abstract
--------

[\#](./#abstract "Permalink for Abstract")

Accessibility of web content requires semantic information about widgets, structures, and behaviors, in order to allow assistive technologies to convey appropriate information to persons with disabilities. This specification provides an ontology of roles, states, and properties that define accessible user interface elements and can be used to improve the accessibility and interoperability of web content and applications. These semantics are designed to allow an author to properly convey user interface behaviors and structural information to assistive technologies in document-level markup. This document is part of the WAI-ARIA suite described in the [WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria.php).

Status of this Document
-----------------------

[\#](./#sotd "Permalink for Status of this Document")

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

This is the WAI-ARIA 1.0 [W3C Recommendation](http://www.w3.org/2004/02/Process-20040205/tr.html#RecsW3C) from the [Protocols & Formats Working Group](http://www.w3.org/WAI/PF/) of the [Web Accessibility Initiative](http://www.w3.org/WAI/). The Working Group created an [implementation report](http://www.w3.org/WAI/ARIA/1.0/CR/implementation-report) that shows the [exit criteria](http://www.w3.org/TR/2011/CR-wai-aria-20110118/#sotd_exit) have been met. The Director approved transition to Recommendation after reviewing this report and after Advisory Committee vote which unanimously supported publication. Some editorial changes have been made since the Proposed Recommendation: removing suggestions of "RDF ID reference", changing the spelling of "programming" to "programing", correcting the spelling of "assistive", and updating some references to latest versions.

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

To comment on this document, send email to <public-pfwg-comments@w3.org> ([comment archive](http://lists.w3.org/Archives/Public/public-pfwg-comments/)). Comments received on the WAI-ARIA 1.0 Recommendation cannot result in changes to this version of the specification, but may be addressed in errata or future versions of WAI-ARIA. The Working Group may not make formal responses to comments but future work undertaken by the Working Group may address comments received on this document.

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/). W3C maintains a [public list of any patent disclosures](http://www.w3.org/2004/01/pp-impl/32212/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

The disclosure obligations of the Participants of this group are described in the [charter](http://www.w3.org/WAI/PF/charter201006#patentpolicy).

Table of Contents
-----------------

[\#](./#toc "Permalink for Table of Contents")

1.  [Abstract](#abstract)
2.  [Status of This Document](#sotd)
3.  1. [Introduction](introduction)
    1.  1.1. [Rich Internet Application Accessibility](introduction#intro_ria_accessibility)
    2.  1.2. [Target Audience](introduction#target-audience)
    3.  1.3. [User Agent Support](introduction#ua-support)
    4.  1.4. [Co-Evolution of WAI-ARIA and Host Languages](introduction#co-evolution)
    5.  1.5. [Authoring Practices](introduction#authoring_practices)
        1.  1.5.1. [Authoring Tools](introduction#authoring_tools)
        2.  1.5.2. [Testing Practices and Tools](introduction#authoring_testing)
    6.  1.6. [Assistive Technologies](introduction#at_support)
4.  2. [Using WAI-ARIA](usage)
    1.  2.1. [WAI-ARIA Roles](usage#usage_intro)
    2.  2.2. [WAI-ARIA States and Properties](usage#introstates)
    3.  2.3. [Managing Focus](usage#managingfocus)
5.  3. [Normative Requirements for WAI-ARIA](normative)
6.  4. [Important Terms](terms)
7.  5. [The Roles Model](roles)
    1.  5.1. [Relationships Between Concepts](roles#relationshipsconcepts)
        1.  5.1.1. [Superclass Role](roles#superclassrole)
        2.  5.1.2. [Subclass Roles](roles#subclassroles)
        3.  5.1.3. [Related Concepts](roles#relatedConcept)
        4.  5.1.4. [Base Concept](roles#baseConcept)
    2.  5.2. [Characteristics of Roles](roles#Properties)
        1.  5.2.1. [Abstract Roles](roles#isAbstract)
        2.  5.2.2. [Required States and Properties](roles#requiredState)
        3.  5.2.3. [Supported States and Properties](roles#supportedState)
        4.  5.2.4. [Inherited States and Properties](roles#inheritedattributes)
        5.  5.2.5. [Required Owned Elements](roles#mustContain)
        6.  5.2.6. [Required Context Role](roles#scope)
        7.  5.2.7. [Accessible Name Calculation](roles#namecalculation)
        8.  5.2.8. [Presentational Children](roles#childrenArePresentational)
        9.  5.2.9. [Implicit Value for Role](roles#implictValueForRole)
    3.  5.3. [Categorization of Roles](roles#roles_categorization)
        1.  5.3.1. [Abstract Roles](roles#abstract_roles)
        2.  5.3.2. [Widget Roles](roles#widget_roles)
        3.  5.3.3. [Document Structure](roles#document_structure_roles)
        4.  5.3.4. [Landmark Roles](roles#landmark_roles)
    4.  5.4. [Definition of Roles](roles#role_definitions)
8.  6. [Supported States and Properties](states_and_properties)
    1.  6.1. [Clarification of States versus Properties](states_and_properties#statevsprop)
    2.  6.2. [Characteristics of States and Properties](states_and_properties#state_prop_att)
        1.  6.2.1. [Related Concepts](states_and_properties#propcharacteristic_relatedconcept)
        2.  6.2.2. [Used in Roles](states_and_properties#propcharacteristic_usedinrole)
        3.  6.2.3. [Inherits into Roles](states_and_properties#propcharacteristic_inheritsintoroles)
        4.  6.2.4. [Value](states_and_properties#propcharacteristic_value)
    3.  6.3. [Values for States and Properties](states_and_properties#state_prop_values)
    4.  6.4. [Global States and Properties](states_and_properties#global_states)
    5.  6.5. [Taxonomy of WAI-ARIA States and Properties](states_and_properties#state_prop_taxonomy)
        1.  6.5.1. [Widget Attributes](states_and_properties#attrs_widgets)
        2.  6.5.2. [Live Region Attributes](states_and_properties#attrs_liveregions)
        3.  6.5.3. [Drag-and-Drop Attributes](states_and_properties#attrs_dragdrop)
        4.  6.5.4. [Relationship Attributes](states_and_properties#attrs_relationships)
    6.  6.6. [Definitions of States and Properties (all aria-\* attributes)](states_and_properties#state_prop_def)
9.  7. [Implementation in Host Languages](host_languages)
    1.  7.1. [Role Attribute](host_languages#host_general_role)
    2.  7.2. [State and Property Attributes](host_languages#host_general_attrs)
    3.  7.3. [Focus Navigation](host_languages#host_general_focus)
    4.  7.4. [Implicit WAI-ARIA Semantics](host_languages#implicit_semantics)
    5.  7.5. [Conflicts with Host Language Semantics](host_languages#host_general_conflict)
    6.  7.6. [State and Property Attribute Processing](host_languages#state_property_processing)
10. 8. [Conformance](conformance)
    1.  8.1. [Non-interference with the Host Language](conformance#ua_noninterference)
    2.  8.2. [All WAI-ARIA in DOM](conformance#ua_dom)
    3.  8.3. [Assistive Technology Notifications Communicated to Web Applications](conformance#ua_domchanges)
    4.  8.4. [Conformance Checkers](conformance#conformance_checkers)
11. 9. [References](references)
    1.  9.1. [Normative References](references#references_normative)
    2.  9.2. [Informative References](references#references_informative)
12. 10. [Appendices](appendices)
    1.  10.1. [Schemata](appendices#a_schemata)
        1.  10.1.1. [Roles Implementation](appendices#a_impl_roles)
        2.  10.1.2. [WAI-ARIA Attributes Module](appendices#xhtml_mod)
        3.  10.1.3. [XHTML plus WAI-ARIA DTD](appendices#xhtml_dtd)
        4.  10.1.4. [SGML Open Catalog Entry for XHTML+ARIA](appendices#xhtml-aria_cat)
        5.  10.1.5. [WAI-ARIA Attributes XML Schema Module](appendices#xhtml_schema_mod)
        6.  10.1.6. [HTML 4.01 plus WAI-ARIA DTD](appendices#html_dtd)
    2.  10.2. [Mapping WAI-ARIA Value types to languages](appendices#typemapping)
    3.  10.3. [WAI-ARIA Role, State, and Property Quick Reference](appendices#quickref)
    4.  10.4. [Acknowledgments](appendices#acknowledgements)
        1.  10.4.1. [Participants active in the PFWG at the time of publication](appendices#ack_group)
        2.  10.4.2. [Other ARIA contributors, commenters, and previously active PFWG participants](appendices#ack_others)
        3.  10.4.3. [Enabling funders](appendices#ack_funders)
