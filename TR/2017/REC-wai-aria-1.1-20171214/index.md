<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

Accessible Rich Internet Applications (WAI-ARIA) 1.1
====================================================

W3C Recommendation 14 December 2017
-----------------------------------

This version:  
<a href="https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/" class="u-url">https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/</a>

Latest published version:  
<https://www.w3.org/TR/wai-aria-1.1/>

Latest editor's draft:  
<https://w3c.github.io/aria/>

Implementation report:  
<https://w3c.github.io/test-results/wai-aria/>

Previous version:  
<https://www.w3.org/TR/2017/PR-wai-aria-1.1-20171102/>

Previous Recommendation:  
<https://www.w3.org/TR/wai-aria-1.0/>

Editors:  
<span property="rdf:first" typeof="foaf:Person"></span>

<a href="https://www.igalia.com" class="u-url url p-name fn">Joanmarie Diggs</a>, Igalia, S.L., <span class="ed_mailto"><a href="mailto:jdiggs@igalia.com" class="u-email email">jdiggs@igalia.com</a></span> <span property="rdf:rest" resource="_:editor1"></span>

<span property="rdf:first" typeof="foaf:Person"></span>

<a href="http://blog.halindrome.com" class="u-url url p-name fn">Shane McCarron</a>, Spec-Ops, <span class="ed_mailto"><a href="mailto:shane@spec-ops.io" class="u-email email">shane@spec-ops.io</a></span> <span property="rdf:rest" resource="_:editor2"></span>

<span property="rdf:first" typeof="foaf:Person"></span>

<a href="http://www.w3.org" class="u-url url p-name fn">Michael Cooper</a>, W3C, <span class="ed_mailto"><a href="mailto:cooper@w3.org" class="u-email email">cooper@w3.org</a></span> <span property="rdf:rest" resource="_:editor3"></span>

<span property="rdf:first" typeof="foaf:Person"><span class="p-name fn" property="foaf:name">Richard Schwerdtfeger</span>, IBM Corporation, <span class="ed_mailto"><a href="mailto:schwer@us.ibm.com" class="u-email email">schwer@us.ibm.com</a></span> (until October 2017)</span> <span property="rdf:rest" resource="_:editor4"></span>

<span property="rdf:first" typeof="foaf:Person"></span>

<a href="https://www.apple.com" class="u-url url p-name fn">James Craig</a>, Apple Inc., <span class="ed_mailto"><a href="mailto:jcraig@apple.com" class="u-email email">jcraig@apple.com</a></span> (until May 2016) <span property="rdf:rest" resource="rdf:nil"></span>

Please check the [**errata**](https://www.w3.org/WAI/ARIA/1.1/errata/aria) for any errors or issues reported since publication.

See also [**translations**](http://www.w3.org/2003/03/Translations/byTechnology?technology=wai-aria-1.1).

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2013-2017 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](https://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span property="xhv:role" resource="xhv:heading">Abstract</span>
----------------------------------------------------------------

Accessibility of web content requires semantic information about widgets, structures, and behaviors, in order to allow assistive technologies to convey appropriate information to persons with disabilities. This specification provides an ontology of roles, states, and properties that define accessible user interface elements and can be used to improve the accessibility and interoperability of web content and applications. These semantics are designed to allow an author to properly convey user interface behaviors and structural information to assistive technologies in document-level markup. This version adds features new since WAI-ARIA 1.0 \[<a href="#bib-wai-aria-1.0" class="bibref">wai-aria-1.0</a>\] to improve interoperability with assistive technologies to form a more consistent accessibility model for \[<a href="#bib-html5" class="bibref">html5</a>\] and \[<a href="#bib-SVG2" class="bibref">SVG2</a>\]. This specification complements both \[<a href="#bib-html5" class="bibref">html5</a>\] and \[<a href="#bib-SVG2" class="bibref">SVG2</a>\].

This document is part of the WAI-ARIA suite described in the [WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria.php).

<span property="xhv:role" resource="xhv:heading">Status of This Document</span>
-------------------------------------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This is the WAI-ARIA 1.1 [W3C Recommendation](https://www.w3.org/2017/Process-20170301/#RecsW3C) by the [Accessible Rich Internet Applications Working Group](https://www.w3.org/WAI/ARIA/). The Working Group created a [WAI-ARIA 1.1 Implementation Report](https://w3c.github.io/test-results/wai-aria/) to demonstrate that the specification is implementable. A [history of changes to WAI-ARIA 1.1](#changelog) is available in the appendix.

To comment on this document, [file an issue in the W3C aria GitHub repository](https://github.com/w3c/aria/issues/new). If this is not feasible, send email to [public-aria@w3.org](mailto:public-aria@w3.org?subject=Comment%20on%20WAI-ARIA%201.1) ([comment archive](http://lists.w3.org/Archives/Public/public-aria/)). Comments received on the WAI-ARIA 1.1 Recommendation cannot result in changes to this version of the specification, but may be addressed in errata or future versions of WAI-ARIA. The Working Group may not make formal responses to comments but future work undertaken by the Working Group may address comments received on this document. In-progress updates to the technology may be viewed in the [publicly visible editors' draft](https://w3c.github.io/aria/).

This document was published by the [Accessible Rich Internet Applications Working Group](https://www.w3.org/WAI/ARIA/) as a Recommendation.

Please see the Working Group's [implementation report](https://w3c.github.io/test-results/wai-aria/).

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

This document was produced by a group operating under the <a href="https://www.w3.org/Consortium/Patent-Policy/" id="sotd_patent">W3C Patent Policy</a>. W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/83726/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2017/Process-20170301/" id="w3c_process_revision">1 March 2017 W3C Process Document</a>.

<span property="xhv:role" resource="xhv:heading">Table of Contents</span>
-------------------------------------------------------------------------

1.  <a href="#introduction" class="tocxref"><span class="secno">1. </span>Introduction</a>
    1.  <a href="#intro_ria_accessibility" class="tocxref"><span class="secno">1.1 </span>Rich Internet Application Accessibility</a>
    2.  <a href="#target-audience" class="tocxref"><span class="secno">1.2 </span>Target Audience</a>
    3.  <a href="#ua-support" class="tocxref"><span class="secno">1.3 </span>User Agent Support</a>
    4.  <a href="#co-evolution" class="tocxref"><span class="secno">1.4 </span>Co-Evolution of WAI-ARIA and Host Languages</a>
    5.  <a href="#authoring_practices" class="tocxref"><span class="secno">1.5 </span>Authoring Practices</a>
        1.  <a href="#authoring_tools" class="tocxref"><span class="secno">1.5.1 </span>Authoring Tools</a>
        2.  <a href="#authoring_testing" class="tocxref"><span class="secno">1.5.2 </span>Testing Practices and Tools</a>
    6.  <a href="#at_support" class="tocxref"><span class="secno">1.6 </span>Assistive Technologies</a>
2.  <a href="#usage" class="tocxref"><span class="secno">2. </span>Using WAI-ARIA</a>
    1.  <a href="#usage_intro" class="tocxref"><span class="secno">2.1 </span>WAI-ARIA Roles</a>
    2.  <a href="#introstates" class="tocxref"><span class="secno">2.2 </span>WAI-ARIA States and Properties</a>
    3.  <a href="#managingfocus" class="tocxref"><span class="secno">2.3 </span>Managing Focus</a>
3.  <a href="#conformance" class="tocxref"><span class="secno">3. </span>Conformance</a>
    1.  <a href="#ua_noninterference" class="tocxref"><span class="secno">3.1 </span>Non-interference with the Host Language</a>
    2.  <a href="#ua_dom" class="tocxref"><span class="secno">3.2 </span>All WAI-ARIA in DOM</a>
    3.  <a href="#ua_domchanges" class="tocxref"><span class="secno">3.3 </span>Assistive Technology Notifications Communicated to Web Applications</a>
    4.  <a href="#conformance_checkers" class="tocxref"><span class="secno">3.4 </span>Conformance Checkers</a>
    5.  <a href="#deprecated" class="tocxref"><span class="secno">3.5 </span>Deprecated Requirements</a>
4.  <a href="#terms" class="tocxref"><span class="secno">4. </span>Important Terms</a>
5.  <a href="#roles" class="tocxref"><span class="secno">5. </span>The Roles Model</a>
    1.  <a href="#relationshipsconcepts" class="tocxref"><span class="secno">5.1 </span>Relationships Between Concepts</a>
        1.  <a href="#superclassrole" class="tocxref"><span class="secno">5.1.1 </span>Superclass Role</a>
        2.  <a href="#subclassroles" class="tocxref"><span class="secno">5.1.2 </span>Subclass Roles</a>
        3.  <a href="#relatedConcept" class="tocxref"><span class="secno">5.1.3 </span>Related Concepts</a>
        4.  <a href="#baseConcept" class="tocxref"><span class="secno">5.1.4 </span>Base Concept</a>
    2.  <a href="#Properties" class="tocxref"><span class="secno">5.2 </span>Characteristics of Roles</a>
        1.  <a href="#isAbstract" class="tocxref"><span class="secno">5.2.1 </span>Abstract Roles</a>
        2.  <a href="#requiredState" class="tocxref"><span class="secno">5.2.2 </span>Required States and Properties</a>
        3.  <a href="#supportedState" class="tocxref"><span class="secno">5.2.3 </span>Supported States and Properties</a>
        4.  <a href="#inheritedattributes" class="tocxref"><span class="secno">5.2.4 </span>Inherited States and Properties</a>
        5.  <a href="#mustContain" class="tocxref"><span class="secno">5.2.5 </span>Required Owned Elements</a>
        6.  <a href="#scope" class="tocxref"><span class="secno">5.2.6 </span>Required Context Role</a>
        7.  <a href="#namecalculation" class="tocxref"><span class="secno">5.2.7 </span>Accessible Name Calculation</a>
            1.  <a href="#namecomputation" class="tocxref"><span class="secno">5.2.7.1 </span>Name Computation</a>
            2.  <a href="#descriptioncomputation" class="tocxref"><span class="secno">5.2.7.2 </span>Description Computation</a>
            3.  <a href="#textalternativecomputation" class="tocxref"><span class="secno">5.2.7.3 </span>Text Alternative Computation</a>
            4.  <a href="#namefromauthor" class="tocxref"><span class="secno">5.2.7.4 </span>Roles Supporting Name from Author</a>
            5.  <a href="#namefromcontent" class="tocxref"><span class="secno">5.2.7.5 </span>Roles Supporting Name from Content</a>
        8.  <a href="#childrenArePresentational" class="tocxref"><span class="secno">5.2.8 </span>Presentational Children</a>
        9.  <a href="#implictValueForRole" class="tocxref"><span class="secno">5.2.9 </span>Implicit Value for Role</a>
    3.  <a href="#roles_categorization" class="tocxref"><span class="secno">5.3 </span>Categorization of Roles</a>
        1.  <a href="#abstract_roles" class="tocxref"><span class="secno">5.3.1 </span>Abstract Roles</a>
        2.  <a href="#widget_roles" class="tocxref"><span class="secno">5.3.2 </span>Widget Roles</a>
        3.  <a href="#document_structure_roles" class="tocxref"><span class="secno">5.3.3 </span>Document Structure</a>
        4.  <a href="#landmark_roles" class="tocxref"><span class="secno">5.3.4 </span>Landmark Roles</a>
        5.  <a href="#live_region_roles" class="tocxref"><span class="secno">5.3.5 </span>Live Region Roles</a>
        6.  <a href="#window_roles" class="tocxref"><span class="secno">5.3.6 </span>Window Roles</a>
    4.  <a href="#role_definitions" class="tocxref"><span class="secno">5.4 </span>Definition of Roles</a>
6.  <a href="#states_and_properties" class="tocxref"><span class="secno">6. </span>Supported States and Properties</a>
    1.  <a href="#statevsprop" class="tocxref"><span class="secno">6.1 </span>Clarification of States versus Properties</a>
    2.  <a href="#state_prop_att" class="tocxref"><span class="secno">6.2 </span>Characteristics of States and Properties</a>
        1.  <a href="#propcharacteristic_relatedconcept" class="tocxref"><span class="secno">6.2.1 </span>Related Concepts</a>
        2.  <a href="#propcharacteristic_usedinrole" class="tocxref"><span class="secno">6.2.2 </span>Used in Roles</a>
        3.  <a href="#propcharacteristic_inheritsintoroles" class="tocxref"><span class="secno">6.2.3 </span>Inherits into Roles</a>
        4.  <a href="#propcharacteristic_value" class="tocxref"><span class="secno">6.2.4 </span>Value</a>
    3.  <a href="#state_prop_values" class="tocxref"><span class="secno">6.3 </span>Values for States and Properties</a>
    4.  <a href="#global_states" class="tocxref"><span class="secno">6.4 </span>Global States and Properties</a>
    5.  <a href="#state_prop_taxonomy" class="tocxref"><span class="secno">6.5 </span>Taxonomy of WAI-ARIA States and Properties</a>
        1.  <a href="#attrs_widgets" class="tocxref"><span class="secno">6.5.1 </span>Widget Attributes</a>
        2.  <a href="#attrs_liveregions" class="tocxref"><span class="secno">6.5.2 </span>Live Region Attributes</a>
        3.  <a href="#attrs_dragdrop" class="tocxref"><span class="secno">6.5.3 </span>Drag-and-Drop Attributes</a>
        4.  <a href="#attrs_relationships" class="tocxref"><span class="secno">6.5.4 </span>Relationship Attributes</a>
    6.  <a href="#state_prop_def" class="tocxref"><span class="secno">6.6 </span>Definitions of States and Properties (all aria-* attributes)</a>
7.  <a href="#host_languages" class="tocxref"><span class="secno">7. </span>Implementation in Host Languages</a>
    1.  <a href="#host_general_role" class="tocxref"><span class="secno">7.1 </span>Role Attribute</a>
    2.  <a href="#host_general_attrs" class="tocxref"><span class="secno">7.2 </span>State and Property Attributes</a>
    3.  <a href="#host_general_focus" class="tocxref"><span class="secno">7.3 </span>Focus Navigation</a>
    4.  <a href="#implicit_semantics" class="tocxref"><span class="secno">7.4 </span>Implicit WAI-ARIA Semantics</a>
    5.  <a href="#host_general_conflict" class="tocxref"><span class="secno">7.5 </span>Conflicts with Host Language Semantics</a>
    6.  <a href="#state_property_processing" class="tocxref"><span class="secno">7.6 </span>State and Property Attribute Processing</a>
8.  <a href="#a_schemata" class="tocxref"><span class="secno">A. </span>Schemata</a>
    1.  <a href="#a_impl_roles" class="tocxref"><span class="secno">A.1 </span>Roles Implementation</a>
    2.  <a href="#xhtml_mod" class="tocxref"><span class="secno">A.2 </span>WAI-ARIA Attributes Module</a>
    3.  <a href="#xhtml_dtd" class="tocxref"><span class="secno">A.3 </span>XHTML plus WAI-ARIA DTD</a>
    4.  <a href="#xhtml-aria_cat" class="tocxref"><span class="secno">A.4 </span>SGML Open Catalog Entry for XHTML+ARIA</a>
    5.  <a href="#xhtml_schema_mod" class="tocxref"><span class="secno">A.5 </span>WAI-ARIA Attributes XML Schema Module</a>
    6.  <a href="#html_dtd" class="tocxref"><span class="secno">A.6 </span>HTML 4.01 plus WAI-ARIA DTD</a>
9.  <a href="#typemapping" class="tocxref"><span class="secno">B. </span>Mapping WAI-ARIA Value types to languages</a>
10. <a href="#changelog" class="tocxref"><span class="secno">C. </span>Change Log: substantive changes since the <span class="formerLink">WAI-ARIA 1.0 Recommendation</span></a>
11. <a href="#acknowledgements" class="tocxref"><span class="secno">D. </span>Acknowledgments</a>
    1.  <a href="#ack_group" class="tocxref"><span class="secno">D.1 </span>Participants active in the ARIA WG at the time of publication</a>
    2.  <a href="#ack_others" class="tocxref"><span class="secno">D.2 </span>Other ARIA contributors, commenters, and previously active participants</a>
    3.  <a href="#ack_funders" class="tocxref"><span class="secno">D.3 </span>Enabling funders</a>
12. <a href="#references" class="tocxref"><span class="secno">E. </span>References</a>
    1.  <a href="#normative-references" class="tocxref"><span class="secno">E.1 </span>Normative references</a>
    2.  <a href="#informative-references" class="tocxref"><span class="secno">E.2 </span>Informative references</a>

<span property="xhv:role" resource="xhv:heading"><span class="secno">1. </span>Introduction<span class="permalink" typeof="bookmark">[<span property="title" content="1. Introduction">§</span>](#introduction "Permalink for 1. Introduction")</span></span>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is non-normative.*

The goals of this specification include:

-   expanding the accessibility information that may be supplied by the author;
-   requiring that supporting host languages provide full keyboard support that may be implemented in a device-independent way, for example, by telephones, handheld devices, e-book readers, and televisions;
-   improving the accessibility of dynamic content generated by scripts; and
-   providing for interoperability with <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>.

WAI-ARIA is a technical specification that provides a framework to improve the accessibility and interoperability of web content and applications. This document is primarily for developers creating custom widgets and other web application components. Please see the [WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria) for links to related documents for other audiences, such as [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\] that introduces developers to the accessibility problems that WAI-ARIA is intended to solve, the fundamental concepts, and the technical approach of WAI-ARIA.

This draft currently handles two aspects of <a href="#dfn-role" class="internalDFN">roles</a>: user interface functionality and structural <a href="#dfn-relationship" class="internalDFN">relationships</a>. For more information and use cases, see \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\] for the use of roles in making interactive content accessible.

The role <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a> is designed in part to support the common roles found in platform <a href="#dfn-accessibility-api" class="internalDFN">accessibility APIs</a>. Reference to roles found in this taxonomy by dynamic web content may be used to support interoperability with assistive technologies.

The schema to support this standard has been designed to be extensible so that custom roles can be created by extending base roles. This allows <a href="#dfn-user-agent" class="internalDFN">user agents</a> to support at least the base role, and user agents that support the custom role can provide enhanced access. Note that much of this could be formalized in \[<a href="#bib-xmlschema-2" class="bibref">xmlschema-2</a>\]. However, being able to define similarities between roles, such as [baseConcepts](#baseConcept) and more descriptive definitions, would not be available in XSD.

WAI-ARIA 1.1 is a member of the [WAI-ARIA 1.1 suite](https://www.w3.org/WAI/intro/aria#wai-aria-1_1) that defines how to expose semantics of WAI-ARIA and other web content languages to <a href="#dfn-accessibility-api" class="internalDFN">accessibility APIs</a>.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">1.1 </span>Rich Internet Application Accessibility<span class="permalink" typeof="bookmark">[<span property="title" content="1.1 Rich Internet Application Accessibility">§</span>](#intro_ria_accessibility "Permalink for 1.1 Rich Internet Application Accessibility")</span></span>

The domain of web accessibility defines how to make web content usable by persons with disabilities. Persons with certain types of disabilities use <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> (AT) to interact with content. Assistive technologies can transform the presentation of content into a format more suitable to the user, and can allow the user to interact in different ways. For example, the user may need to, or choose to, interact with a slider widget via arrow keys, instead of dragging and dropping with a mouse. In order to accomplish this effectively, the software needs to understand the <a href="#dfn-semantics" class="internalDFN">semantics</a> of the content. Semantics is the science of meaning; in this case, used to assign roles, states, and properties that apply to user interface and content elements as a human would understand. For instance, if a paragraph is semantically identified as such, assistive technologies can interact with it as a unit separable from the rest of the content, knowing the exact boundaries of that paragraph. An adjustable range slider or collapsible list (a.k.a. a tree <a href="#dfn-widget" class="internalDFN">widget</a>) are more complex examples, in which various parts of the widget have semantics that need to be properly identified for assistive technologies to support effective interaction.

New technologies often overlook semantics required for accessibility, and new authoring practices often misuse the intended semantics of those technologies. <a href="#dfn-element" class="internalDFN">Elements</a> that have one defined meaning in the language are used with a different meaning intended to be understood by the user.

For example, web application developers create collapsible tree widgets in HTML using CSS and JavaScript even though HTML has no semantic `tree` element. To a non-disabled user, it may look and act like a collapsible tree widget, but without appropriate semantics, the tree widget may not be <a href="#dfn-perceivable" class="internalDFN">perceivable</a> to, or <a href="#dfn-operable" class="internalDFN">operable</a> by, a person with a disability because assistive technologies may not recognize the role. Similarly, web application developers create interactive button widgets in SVG using JavaScript even though SVG has no semantic `button` element. To a non-disabled user, it may look and act like a button widget, but without appropriate semantics, the button widget may not be <a href="#dfn-perceivable" class="internalDFN">perceivable</a> to, or <a href="#dfn-operable" class="internalDFN">operable</a> by, a person with a disability because assistive technologies may not recognize the role.

The incorporation of WAI-ARIA is a way for an author to provide proper semantics for custom widgets to make these widgets accessible, usable, and interoperable with assistive technologies. This specification identifies the types of widgets and structures that are commonly recognized by accessibility products, by providing an <a href="#dfn-ontology" class="internalDFN">ontology</a> of corresponding <a href="#dfn-role" class="internalDFN">roles</a> that can be attached to content. This allows elements with a given role to be understood as a particular widget or structural type regardless of any semantics inherited from the implementing host language. Roles are a common property of platform <a href="#dfn-accessibility-api" class="internalDFN">accessibility APIs</a> which assistive technologies use to provide the user with effective presentation and interaction.

This role <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a> includes interaction <a href="#dfn-widget" class="internalDFN">widgets</a> and elements denoting document structure. The role taxonomy describes inheritance and details the <a href="#dfn-attribute" class="internalDFN">attributes</a> each role supports. Information about mapping of roles to accessibility APIs is provided by the [Core Accessibility API Mappings 1.1](https://www.w3.org/TR/core-aam-1.1/) \[<a href="#bib-core-aam-1.1" class="bibref">core-aam-1.1</a>\].

Roles are element types and will not change with time or user actions. Role information is used by assistive technologies, through interaction with the user agent, to provide normal processing of the specified element type.

States and properties are used to declare important attributes of an element that affect and describe interaction. They enable the <a href="#dfn-user-agent" class="internalDFN">user agent</a> and operating system to properly handle the element even when the attributes are dynamically changed by client-side scripts. For example, alternative input and output technology, such as screen readers and speech dictation software, need to be able to recognize and effectively manipulate and communicate various interaction states (e.g., disabled, checked) to the user.

While it is possible for assistive technologies to access these properties directly through the [Document Object Model](https://www.w3.org/TR/dom/) \[<a href="#bib-dom" class="bibref">dom</a>\], the preferred mechanism is for the user agent to map the states and properties to the accessibility API of the operating system. See the [Core Accessibility API Mappings 1.1](https://www.w3.org/TR/core-aam-1.1/) \[<a href="#bib-core-aam-1.1" class="bibref">core-aam-1.1</a>\] and the [Accessible Name and Description: Computation and API Mappings 1.1](https://www.w3.org/TR/accname-aam-1.1/) \[<a href="#bib-accname-aam-1.1" class="bibref">accname-aam-1.1</a>\] for details.

Figure 1.0 illustrates the relationship between user agents (e.g., browsers), accessibility APIs, and assistive technologies. It describes the "contract" provided by the user agent to assistive technologies, which includes typical accessibility information found in the accessibility API for many of our accessible platforms for GUIs (role, state, selection, <a href="#dfn-event" class="internalDFN">event</a> notification, <a href="#dfn-relationship" class="internalDFN">relationship</a> information, and descriptions). The DOM, usually HTML, acts as the data model and view in a typical model-view-controller relationship, and JavaScript acts as the controller by manipulating the style and content of the displayed data. The user agent conveys relevant information to the operating system's accessibility API, which can be used by any assistive technologies, such as screen readers.

<img src="img/accessibleelement.png" alt="The contract model with accessibility APIs" id="contractmodel" width="723" height="389" />

Figure 1: The contract model with accessibility APIs

For more information see [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\] for the use of roles in making interactive content accessible.

In addition to the prose documentation, the role taxonomy is provided in [Web Ontology Language (OWL)](https://www.w3.org/TR/2004/REC-owl-features-20040210/) \[<a href="#bib-owl-features" class="bibref">owl-features</a>\], which is expressed in [Resource Description Framework (RDF)](https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/) \[<a href="#bib-rdf-concepts" class="bibref">rdf-concepts</a>\]. Tools can use these to validate the implementation of roles in a given content document. For example, instances of some roles are expected to be children of a specific parent role. Also, some roles may support a specific <a href="#dfn-state" class="internalDFN">state</a> or <a href="#dfn-property" class="internalDFN">property</a> that another role does not support.

Note

The use of RDF/OWL as a formal representation of roles may be used to support future extensibility. Standard RDF/OWL mechanisms can be used to define new roles that inherit from the roles defined in this specification. The mechanism to define and use role extensions in an interoperable manner, however, is not defined by this specification, and RDF/OWL processing is not essential to interoperable implementation of this specification. A future version of WAI-ARIA is expected to define how to extend roles.

Users of alternate input devices need <a href="#dfn-keyboard-accessible" class="internalDFN">keyboard accessible</a> content. The new semantics, when combined with the recommended keyboard interactions provided in [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\], will allow alternate input solutions to facilitate command and control via an alternate input solution.

WAI-ARIA introduces navigational <a href="#dfn-landmark" class="internalDFN">landmarks</a> through its taxonomy and the XHTML role landmarks, which can help persons with dexterity and vision impairments by providing for improved keyboard navigation. WAI-ARIA may also be used to assist persons with cognitive learning disabilities. The additional semantics allow authors to restructure and substitute alternative content as needed.

<a href="#dfn-assistive-technology" class="internalDFN">Assistive technologies</a> need the ability to support alternative inputs by getting and setting the current value of <a href="#dfn-widget" class="internalDFN">widget</a> states and properties. Assistive technologies also need to determine what <a href="#dfn-object" class="internalDFN">objects</a> are selected and manage widgets that allow multiple selections, such as list boxes and grids.

Speech-based command and control systems can benefit from WAI-ARIA semantics like the `role` attribute to assist in conveying audio information to the user. For example, upon encountering an element with a role of <a href="#menu" class="role-reference"><code>menu</code></a> with child elements of role <a href="#menuitem" class="role-reference"><code>menuitem</code></a> each containing text content representing a different flavor, a speech system might state to the user, "Select one of three choices: chocolate, strawberry, or vanilla."

WAI-ARIA is intended to be used as a supplement for native language semantics, not a replacement. When the host language provides a feature that provides equivalent accessibility to the WAI-ARIA feature, use the host language feature. WAI-ARIA should only be used in cases where the host language lacks the needed <a href="#dfn-role" class="internalDFN">role</a>, <a href="#dfn-state" class="internalDFN">state</a>, and <a href="#dfn-property" class="internalDFN">property</a> indicators. Use a host language feature that is as similar as possible to the WAI-ARIA feature, then refine the meaning by adding WAI-ARIA. For instance, a multi-selectable grid could be implemented as a table, and then WAI-ARIA used to clarify that it is an interactive grid, not just a static data table. This allows for the best possible fallback for user agents that do not support WAI-ARIA and preserves the integrity of the host language semantics.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">1.2 </span>Target Audience<span class="permalink" typeof="bookmark">[<span property="title" content="1.2 Target Audience">§</span>](#target-audience "Permalink for 1.2 Target Audience")</span></span>

This specification defines the basic model for WAI-ARIA, including roles, states, properties, and values. It impacts several audiences:

-   <a href="#dfn-user-agent" class="internalDFN">User agents</a> that process content containing WAI-ARIA features;
-   <a href="#dfn-assistive-technology" class="internalDFN">Assistive technologies</a> that present content in special ways to user with disabilities;
-   Authors who create content;
-   Authoring tools that help authors create conforming content; and
-   Conformance checkers that verify appropriate use of WAI-ARIA.

Each conformance requirement indicates the audience to which it applies.

Although this specification is applicable to the above audiences, it is not specifically targeted to, nor is it intended to be the sole source of information for, any of these audiences. The following documents provide important supporting information:

-   [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/) addresses authoring recommendations for HTML, and is also of interest to developers of authoring tools and conformance checkers.
-   [Core Accessibility API Mappings 1.1](https://www.w3.org/TR/core-aam-1.1/) addresses developers of <a href="#dfn-user-agent" class="termref internalDFN">user agents</a> and <a href="#dfn-assistive-technology" class="termref internalDFN">assistive technologies</a>.
-   [Accessible Name and Description: Computation and API Mappings 1.1](https://www.w3.org/TR/accname-aam-1.1/) also addresses developers of <a href="#dfn-user-agent" class="termref internalDFN">user agents</a> and <a href="#dfn-assistive-technology" class="termref internalDFN">assistive technologies</a>.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">1.3 </span>User Agent Support<span class="permalink" typeof="bookmark">[<span property="title" content="1.3 User Agent Support">§</span>](#ua-support "Permalink for 1.3 User Agent Support")</span></span>

WAI-ARIA relies on user agent support for its features in two ways:

-   Mainstream <a href="#dfn-user-agent" class="internalDFN">user agents</a> use WAI-ARIA to alter how host language features are exposed to <a href="#dfn-accessibility-api" class="internalDFN">accessibility APIs</a> in order to improve accessibility. The mechanism for this is defined in the [Core Accessibility API Mappings](https://www.w3.org/TR/core-aam-1.1/) \[<a href="#bib-core-aam-1.1" class="bibref">core-aam-1.1</a>\].
-   <a href="#dfn-assistive-technology" class="internalDFN">Assistive technologies</a> use the enhanced information available in an accessibility API, or uses the WAI-ARIA markup directly via the DOM, to convey semantic and interaction information to the user.

Aside from using WAI-ARIA markup to improve what is exposed to accessibility APIs, user agents behave as they would natively. Assistive technologies react to the extra information in the accessibility API as they already do for the same information on non-web content. User agents that are not assistive technologies, however, need do nothing beyond providing appropriate updates to the accessibility API.

The WAI-ARIA specification neither requires nor forbids user agents from enhancing native presentation and interaction behaviors on the basis of WAI-ARIA markup. Mainstream user agents might expose WAI-ARIA navigational landmarks (for example, as a dialog box or through a keyboard command) with the intention to facilitate navigation for all users. User agents are encouraged to maximize their usefulness to users, including users without disabilities.

WAI-ARIA is intended to provide missing semantics so that the intent of the author may be conveyed to assistive technologies. Generally, authors using WAI-ARIA will provide the appropriate presentation and interaction features. Over time, host languages may add WAI-ARIA equivalents, such as new form controls, that are implemented as standard accessible user interface controls by the user agent. This allows authors to use them instead of custom WAI-ARIA enabled user interface components. In this case the user agent would support the native host language feature. Developers of host languages that implement WAI-ARIA are advised to continue supporting WAI-ARIA semantics when they do not adversely conflict with implicit host language semantics, as WAI-ARIA semantics more clearly reflect the intent of the author if the host language features are inadequate to meet the author's needs.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">1.4 </span>Co-Evolution of WAI-ARIA and Host Languages<span class="permalink" typeof="bookmark">[<span property="title" content="1.4 Co-Evolution of WAI-ARIA and Host Languages">§</span>](#co-evolution "Permalink for 1.4 Co-Evolution of WAI-ARIA and Host Languages")</span></span>

WAI-ARIA is intended to augment semantics in supporting languages like \[<a href="#bib-html5" class="bibref">html5</a>\] and \[<a href="#bib-SVG2" class="bibref">SVG2</a>\], or to be used as an accessibility enhancement technology in other markup-based languages that do not explicitly include support for ARIA. It clarifies semantics to assistive technologies when authors create new types of objects, via style and script, that are not yet directly supported by the language of the page, because the invention of new types of objects is faster than standardized support for them appears in web languages.

It is not appropriate to create objects with style and script when the host language provides a semantic element for that type of object. While WAI-ARIA can improve the accessibility of these objects, accessibility is best provided by allowing the user agent to handle the object natively. For example, it's better to use an `h1` element in HTML than to use the <a href="#heading" class="role-reference"><code>heading</code></a> role on a `div` element.

It is expected that, over time, host languages will evolve to provide semantics for objects that currently can only be declared with WAI-ARIA. This is natural and desirable, as one goal of WAI-ARIA is to help stimulate the emergence of more semantic and accessible markup. When native semantics for a given feature become available, it is appropriate for authors to use the native feature and stop using WAI-ARIA for that feature. Legacy content may continue to use WAI-ARIA, however, so the need for user agents to support WAI-ARIA remains.

While specific features of WAI-ARIA may lose importance over time, the general possibility of WAI-ARIA to add semantics to web pages is expected to be a persistent need. Host languages may not implement all the semantics WAI-ARIA provides, and various host languages may implement different subsets of the features. New types of objects are continually being developed, and one goal of WAI-ARIA is to provide a way to make such objects accessible, because web authoring practices often advance faster than host language standards. In this way, WAI-ARIA and host languages both evolve together but at different rates.

Some host languages exist to create semantics for features other than the user interface. For example, SVG expresses the semantics behind production of graphical objects, not of user interface components that those objects may represent; XForms provides semantics for form controls and does not provide wider user interface features. Host languages such as these might, by design, not provide native semantics that map to WAI-ARIA features. In these cases, WAI-ARIA could be adopted as a long-term approach to add semantic information to user interface components.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">1.5 </span>Authoring Practices<span class="permalink" typeof="bookmark">[<span property="title" content="1.5 Authoring Practices">§</span>](#authoring_practices "Permalink for 1.5 Authoring Practices")</span></span>

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">1.5.1 </span>Authoring Tools<span class="permalink" typeof="bookmark">[<span property="title" content="1.5.1 Authoring Tools">§</span>](#authoring_tools "Permalink for 1.5.1 Authoring Tools")</span></span>

Many of the requirements in the definitions of WAI-ARIA <a href="#dfn-role" class="internalDFN">roles</a>, <a href="#dfn-state" class="internalDFN">states</a>, and <a href="#dfn-property" class="internalDFN">properties</a> can be checked automatically during the development process, similar to other quality control processes used for validating code. To assist authors who are creating custom widgets, authoring tools may compare widget roles, states, and properties to those supported in WAI-ARIA as well as those supported in related and cross-referenced roles, states, and properties. Authoring tools may notify authors of errors in widget design patterns, and may also prompt developers for information that cannot be determined from context alone. For example, a scripting library can determine the labels for the tree items in a tree view, but would need to prompt the author to label the entire tree. To help authors visualize a logical accessibility structure, an authoring environment might provide an outline view of a web resource based on the WAI-ARIA markup.

In both HTML and SVG, `tabindex` is an important way browsers support keyboard [focus navigation](#host_general_focus) for implementations of WAI-ARIA; authoring and debugging tools may check to make sure `tabindex` values are properly set. For example, error conditions may include cases where more than one treeitem in a tree has a `tabindex` value greater than or equal to 0, where `tabindex` is not set on any treeitem, or where <a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a> is not defined when the element with the role tree has a `tabindex` value of greater than or equal to 0.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">1.5.2 </span>Testing Practices and Tools<span class="permalink" typeof="bookmark">[<span property="title" content="1.5.2 Testing Practices and Tools">§</span>](#authoring_testing "Permalink for 1.5.2 Testing Practices and Tools")</span></span>

The accessibility of interactive content cannot be confirmed by static checks alone. Developers of interactive content should test for device-independent access to <a href="#dfn-widget" class="internalDFN">widgets</a> and applications, and should verify accessibility API access to all content and changes during user interaction.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">1.6 </span>Assistive Technologies<span class="permalink" typeof="bookmark">[<span property="title" content="1.6 Assistive Technologies">§</span>](#at_support "Permalink for 1.6 Assistive Technologies")</span></span>

Programmatic access to accessibility semantics is essential for assistive technologies. Most assistive technologies interact with user agents, like other applications, through a recognized accessibility API. Perceivable objects in the user interface are exposed to assistive technologies as accessible objects, defined by the accessibility API interfaces. To do this properly, accessibility information – role, states, properties as well as contextual information – needs to be accurately conveyed to the assistive technologies through the accessibility API. When a state change occurs, the user agent provides the appropriate event notification to the accessibility API. Contextual information, in many host languages like HTML, can be determined from the DOM itself as it provides a contextual tree hierarchy.

While some assistive technologies interact with these accessibility APIs, others may access the content directly from the DOM. These technologies can restructure, simplify, style, or reflow the content to help a different set of users. Common use cases for these types of adaptations may be the aging population, persons with cognitive impairments, or persons in environments that interfere with use of their tools. For example, the availability of regional navigational landmarks may allow for a mobile device adaptation that shows only portions of the content at any one time based on its semantics. This could reduce the amount of information the user needs to process at any one time. In other situations it may be appropriate to replace a custom user interface control with something that is easier to navigate with a keyboard, or touch screen device.

<span property="xhv:role" resource="xhv:heading"><span class="secno">2. </span>Using WAI-ARIA<span class="permalink" typeof="bookmark">[<span property="title" content="2. Using WAI-ARIA">§</span>](#usage "Permalink for 2. Using WAI-ARIA")</span></span>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is non-normative.*

Complex web applications become inaccessible when <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> cannot determine the <a href="#dfn-semantics" class="internalDFN">semantics</a> behind portions of a document or when the user is unable to effectively navigate to all parts of it in a usable way (see [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\]). WAI-ARIA divides the semantics into <a href="#dfn-role" class="internalDFN">roles</a> (the type defining a user interface element) and <a href="#dfn-state" class="internalDFN">states</a> and <a href="#dfn-property" class="internalDFN">properties</a> supported by the roles.

Authors need to associate <a href="#dfn-element" class="internalDFN">elements</a> in the document to a WAI-ARIA role and the appropriate states and properties (aria-\* <a href="#dfn-attribute" class="internalDFN">attributes</a>) during its life-cycle, unless the elements already have the appropriate [implicit WAI-ARIA semantics](#implicit_semantics) for states and properties. In these instances the equivalent host language states and properties take precedence to avoid a conflict while the role attribute will take precedence over the implicit role of the host language element.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">2.1 </span>WAI-ARIA Roles<span class="permalink" typeof="bookmark">[<span property="title" content="2.1 WAI-ARIA Roles">§</span>](#usage_intro "Permalink for 2.1 WAI-ARIA Roles")</span></span>

A WAI-ARIA <a href="#dfn-role" class="internalDFN">role</a> is set on an <a href="#dfn-element" class="internalDFN">element</a> using a `role` <a href="#dfn-attribute" class="internalDFN">attribute</a>, similar to the `role` attribute defined in [Role Attribute](https://www.w3.org/TR/role-attribute/) \[<a href="#bib-role-attribute" class="bibref">role-attribute</a>\].

Example 1

    <li role="menuitem">Open file…</li>

The roles defined in this specification include a collection of [document landmarks](#landmark_roles) and the [WAI-ARIA role taxonomy](#role_definitions).

The roles in this <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a> and their expected behaviors are modeled using [RDF/OWL](https://www.w3.org/TR/2004/REC-owl-features-20040210/) \[<a href="#bib-owl-features" class="bibref">owl-features</a>\]. Features of the role taxonomy provide the following information for each role:

-   an informative description of the role;
-   hierarchical information about related roles (e.g., a <a href="#directory" class="role-reference"><code>directory</code></a> is a type of <a href="#list" class="role-reference"><code>list</code></a>);
-   context of the role (e.g., a <a href="#listitem" class="role-reference"><code>listitem</code></a> is contained inside a `list`);
-   references to related concepts in other specifications;
-   use of OWL to provide a type hierarchy allowing for <a href="#dfn-semantics" class="internalDFN">semantic</a> inheritance (similar to a <a href="#dfn-class" class="internalDFN">class</a> hierarchy); and
-   supported <a href="#dfn-state" class="internalDFN">states</a> and <a href="#dfn-property" class="internalDFN">properties</a> for each role (e.g., a <a href="#checkbox" class="role-reference"><code>checkbox</code></a> supports being checked via <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a>).

Attaching a role gives <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> information about how to handle each element.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">2.2 </span>WAI-ARIA States and Properties<span class="permalink" typeof="bookmark">[<span property="title" content="2.2 WAI-ARIA States and Properties">§</span>](#introstates "Permalink for 2.2 WAI-ARIA States and Properties")</span></span>

WAI-ARIA provides a collection of accessibility <a href="#dfn-state" class="internalDFN">states</a> and <a href="#dfn-property" class="internalDFN">properties</a> which are used to support platform <a href="#dfn-accessibility-api" class="internalDFN">accessibility APIs</a> on various operating system platforms. <a href="#dfn-assistive-technology" class="internalDFN">Assistive technologies</a> may access this information through an exposed <a href="#dfn-user-agent" class="internalDFN">user agent</a> DOM or through a mapping to the platform accessibility API. When combined with <a href="#dfn-role" class="internalDFN">roles</a>, the user agent can supply the assistive technologies with user interface information to convey to the user at any time. Changes in states or properties will result in a notification to assistive technologies, which could alert the user that a change has occurred.

In the following example, a list item (`html:li`) has been used to create a checkable menu item, and JavaScript <a href="#dfn-event" class="internalDFN">events</a> will capture mouse and keyboard events to toggle the value of <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a>. A role is used to make the behavior of this simple <a href="#dfn-widget" class="internalDFN">widget</a> known to the user agent. <a href="#dfn-attribute" class="internalDFN">Attributes</a> that change with user actions (such as `aria-checked`) are defined in the [states and properties](#states_and_properties) section.

Example 2

    <li role="menuitemcheckbox" aria-checked="true">Sort by Last Modified</li>

Some accessibility states, called *<a href="#dfn-managed-state" class="internalDFN">managed states</a>*, are controlled by the user agent. Examples of managed state include keyboard focus and selection. Managed states often have corresponding CSS pseudo-classes (such as `:focus` and `::selection`) to define style changes. In contrast, the states in this specification are typically controlled by the author and are called *unmanaged states.* Some states are managed by the user agent, such as <a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a> and <a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a>, but the author can override them if the DOM is incomplete and would cause the user agent calculation to be incorrect. User agents map both managed and unmanaged states to the platform accessibility APIs.

Most modern user agents support [CSS attribute selectors](https://www.w3.org/TR/css3-selectors/#attribute-selectors) (\[<a href="#bib-css3-selectors" class="bibref">css3-selectors</a>\]), and can allow the author to create UI changes based on WAI-ARIA attribute information, reducing the amount of scripts necessary to achieve equivalent functionality. In the following example, a CSS selector is used to determine whether or not the text is bold and an image of a check mark is shown, based on the value of the `aria-checked` attribute.

Example 3

    [aria-checked="true"] { font-weight: bold; }
    [aria-checked="true"]::before { background-image: url(checked.gif); }

If CSS is not used to toggle the visual representation of the check mark, the author could include additional markup and scripts to manage an image that represents whether or not the <a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a> is checked.

Example 4

    <li role="menuitemcheckbox" aria-checked="true">
      <img src="checked.gif" role="presentation" alt="">
      <!-- note: additional scripts required to toggle image source -->
      Sort by Last Modified
    </li>

### <span property="xhv:role" resource="xhv:heading"><span class="secno">2.3 </span>Managing Focus<span class="permalink" typeof="bookmark">[<span property="title" content="2.3 Managing Focus">§</span>](#managingfocus "Permalink for 2.3 Managing Focus")</span></span>

An <a href="#application" class="role-reference"><code>application</code></a> should always have an <a href="#dfn-element" class="internalDFN">element</a> with focus when in use, as applications require users to have a place to provide user input. Authors are advised to *not* destroy the element with focus or scroll it off-screen unless through user intervention. All interactive <a href="#dfn-object" class="internalDFN">objects</a> should be focusable. All parts of composite interactive controls need to be focusable or have a documented alternative method to achieve their function, such as a keyboard shortcut. Authors are advised to maintain an obvious, discoverable way, either through tabbing or other standard navigation techniques, for keyboard users to move the focus to any interactive element. See [User Agent Accessibility Guidelines, Guideline 9](https://www.w3.org/TR/2002/REC-UAAG10-20021217/guidelines.html#gl-navigation) (\[<a href="#bib-UAAG10" class="bibref">UAAG10</a>\], Guideline 9).

When using standard HTML and basic WAI-ARIA <a href="#dfn-widget" class="internalDFN">widgets</a>, application developers can simply manipulate the tab order or use a script to create keyboard shortcuts to elements in the document. Use of more complex widgets requires the author to manage focus within them. SVG Tiny provides a similar navigation "ring" mechanism that by default follows document order and which should be implemented using system dependent input facilities (the TAB key on most desktop computers). SVG authors may place elements in the navigation order by manipulating the [focusable](https://www.w3.org/TR/SVGTiny12/interact.html#FocusableAttribute) attribute and they may dynamically [specify the navigation order](https://www.w3.org/TR/SVGTiny12/interact.html#specifyingnavigation) by modifying elements' [navigation attributes](https://www.w3.org/TR/SVGTiny12/intro.html#TermNavigationAttribute).

WAI-ARIA includes a number of "managing container" widgets, also known as "composite" widgets. When appropriate, the container is responsible for tracking the last descendant that was active (the default is usually the first item in the container). It is essential that a container maintain a usable and consistent strategy when focus leaves a container and is then later refocused. While there may be exceptions, it is recommended that when a previously focused container is refocused, the active descendant be the same element as the active descendant when the container was last focused. Exceptions include cases where the contents of a container widget have changed, and widgets like a menubar where the user expects to always return to the first item when focus leaves the menu bar. For example, if the second item of a tree group was the active descendant when the user tabbed out of the tree group, then the second item of the tree group remains the active descendant when the tree group gets focus again. The user may also activate the container by clicking on one of the descendants within it.

When the container or its active descendant has focus, the user may navigate through the container by pressing additional keys, such as the arrow keys, to change the currently active descendant. Any additional press of the main navigation key (generally the TAB key) will move out of the container to the next widget.

For example, a <a href="#grid" class="role-reference"><code>grid</code></a> may be used as a spreadsheet with thousands of <a href="#gridcell" class="role-reference"><code>gridcell</code></a> elements, all of which may not be present in the document at one time. This requires focus to be managed by the container using the <a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> on the managing container element, or by the container managing the `tabindex` of its child elements and setting focus on the appropriate child.

Content authors are required to manage focus on the following container roles:

-   <a href="#combobox" class="role-reference"><code>combobox</code></a>
-   `grid`
-   <a href="#listbox" class="role-reference"><code>listbox</code></a>
-   <a href="#menu" class="role-reference"><code>menu</code></a>
-   <a href="#menubar" class="role-reference"><code>menubar</code></a>
-   <a href="#radiogroup" class="role-reference"><code>radiogroup</code></a>
-   <a href="#tree" class="role-reference"><code>tree</code></a>
-   <a href="#treegrid" class="role-reference"><code>treegrid</code></a>
-   <a href="#tablist" class="role-reference"><code>tablist</code></a>

More information on managing focus can be found in the [Developing a Keyboard Interface](https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard) section of the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\].

<span property="xhv:role" resource="xhv:heading"><span class="secno">3. </span>Conformance<span class="permalink" typeof="bookmark">[<span property="title" content="3. Conformance">§</span>](#conformance "Permalink for 3. Conformance")</span></span>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words *MAY*, *MUST*, *MUST NOT*, *SHOULD*, and *SHOULD NOT* are to be interpreted as described in \[<a href="#bib-RFC2119" class="bibref">RFC2119</a>\].

This specification indicates whether a section is <a href="#dfn-normative" class="internalDFN">normative</a> or <a href="#dfn-informative" class="internalDFN">informative</a>. Classifying a section as normative or informative applies to the entire section. A statement "This section is normative" or "This section is informative" applies to all sub-sections of that section.

Normative sections provide requirements that authors, user agents, and assistive technologies *MUST* follow for an implementation to conform to this specification.

Informative sections provide information useful to understanding the specification. Such sections may contain examples of recommended practice, but it is not required to follow such recommendations in order to conform to this specification.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">3.1 </span>Non-interference with the Host Language<span class="permalink" typeof="bookmark">[<span property="title" content="3.1 Non-interference with the Host Language">§</span>](#ua_noninterference "Permalink for 3.1 Non-interference with the Host Language")</span></span>

WAI-ARIA processing by the <a href="#dfn-user-agent" class="internalDFN">user agent</a> *MUST NOT* interfere with the normal operation of the built-in features of the host language.

If a CSS selector includes a WAI-ARIA attribute (e.g., `input[aria-invalid="true"]`), user agents *MUST* update the visual display of any elements matching (or no longer matching) the selector any time the attribute is added/changed/removed in the DOM. The user agent *MAY* alter the mapping of the host language features into an <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a>, but the user agent *MUST NOT* alter the DOM in order to remap WAI-ARIA markup into host language features.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">3.2 </span>All WAI-ARIA in DOM<span class="permalink" typeof="bookmark">[<span property="title" content="3.2 All WAI-ARIA in DOM">§</span>](#ua_dom "Permalink for 3.2 All WAI-ARIA in DOM")</span></span>

A conforming <a href="#dfn-user-agent" class="internalDFN">user agent</a> which implements a document object model that does not conform to the W3C DOM specification *MUST* include the content attribute for role and its [WAI-ARIA role values](#roles_categorization), as well as the [WAI-ARIA States and Properties](#states_and_properties) in the DOM as specified by the author, even though processing may affect how the elements are exposed to accessibility APIs. Doing so ensures that each role attribute and all WAI-ARIA states and properties, including their values, are in the document in an unmodified form so other tools, such as assistive technologies, can access them. A conforming W3C DOM meets this criterion.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">3.3 </span>Assistive Technology Notifications Communicated to Web Applications<span class="permalink" typeof="bookmark">[<span property="title" content="3.3 Assistive Technology Notifications Communicated to Web Applications">§</span>](#ua_domchanges "Permalink for 3.3 Assistive Technology Notifications Communicated to Web Applications")</span></span>

<a href="#dfn-assistive-technology" class="internalDFN">Assistive technologies</a>, such as speech recognition systems and alternate input devices for users with mobility impairments, require the ability to control a web application in a device-independent way. WAI-ARIA <a href="#dfn-state" class="internalDFN">states</a> and <a href="#dfn-property" class="internalDFN">properties</a> reflect the current state of rich internet application components. The ability for assistive technologies to notify web applications of necessary changes is essential because it allows these alternative input solutions to control an application without being dependent on the standard input device which the user is unable to effectively control directly.

User agents *MUST* provide a method to notify the web application when a change occurs to states or properties in the system accessibility API. Likewise, web application authors *SHOULD* update the web application accordingly when notified of a change request from the user agent or assistive technology.

Note

Many state and properties can be changed by assistive technologies through existing accessibility APIs by responding to a default action event. For example, the <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a> state of a <a href="#tab" class="role-reference"><code>tab</code></a> in a <a href="#tabpanel" class="role-reference"><code>tabpanel</code></a> can be changed by triggering the default action on the element.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">3.4 </span>Conformance Checkers<span class="permalink" typeof="bookmark">[<span property="title" content="3.4 Conformance Checkers">§</span>](#conformance_checkers "Permalink for 3.4 Conformance Checkers")</span></span>

Any application or script verifying document conformance or validity *SHOULD* include a test for all of the [normative](#dfn-normative) author requirements in this specification. If testing for a given requirement, conformance checkers *MUST* issue an error if an author "*MUST*" requirement isn't met, and *MUST* issue a warning if an author "*SHOULD*" requirement isn't met.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">3.5 </span>Deprecated Requirements<span class="permalink" typeof="bookmark">[<span property="title" content="3.5 Deprecated Requirements">§</span>](#deprecated "Permalink for 3.5 Deprecated Requirements")</span></span>

As the technology evolves, sometimes new ways to meet a use case become available, that work better than a feature that was previously defined. But because of existing implementation of the older feature, that feature cannot be removed from the conformance model without rendering formerly conforming content non-conforming. In this case, the older feature is marked as "deprecated". This indicates that the feature is allowed in the conformance model and expected to be supported by user agents, but it is recommended that authors do not use it for new content. In future versions of the specification, if the feature is no longer widely used, the feature could be removed and no longer expected to be supported by user agents.

<span property="xhv:role" resource="xhv:heading"><span class="secno">4. </span>Important Terms<span class="permalink" typeof="bookmark">[<span property="title" content="4. Important Terms">§</span>](#terms "Permalink for 4. Important Terms")</span></span>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is non-normative.*

While some terms are defined in place, the following definitions are used throughout this document.

Accessibility API  
Operating systems and other platforms provide a set of interfaces that expose information about <a href="#dfn-object" class="termref internalDFN">objects</a> and <a href="#dfn-event" class="termref internalDFN">events</a> to <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>. Assistive technologies use these interfaces to get information about and interact with those <a href="#dfn-widget" class="termref internalDFN">widgets</a>. Examples of accessibility APIs are [Microsoft Active Accessibility](https://msdn.microsoft.com/en-us/library/ms697270(VS.85).aspx) \[<a href="#bib-MSAA" class="bibref">MSAA</a>\], [Microsoft User Interface Automation](https://msdn.microsoft.com/en-us/library/ee684013%28VS.85%29.aspx) \[<a href="#bib-UI-AUTOMATION" class="bibref">UI-AUTOMATION</a>\], MSAA with [UIA Express](https://msdn.microsoft.com/en-us/library/windows/desktop/dd561898(v=vs.85).aspx) \[<a href="#bib-UIA-EXPRESS" class="bibref">UIA-EXPRESS</a>\], the [Mac OS X Accessibility Protocol](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/ApplicationKit/Protocols/NSAccessibility_Protocol/index.html) \[<a href="#bib-AXAPI" class="bibref">AXAPI</a>\], the [Linux/Unix Accessibility Toolkit](https://developer.gnome.org/atk/unstable/) \[<a href="#bib-ATK" class="bibref">ATK</a>\] and [Assistive Technology Service Provider Interface](https://developer.gnome.org/libatspi/stable/) \[<a href="#bib-AT-SPI" class="bibref">AT-SPI</a>\], and [IAccessible2](https://wiki.linuxfoundation.org/accessibility/iaccessible2/start) \[<a href="#bib-IAccessible2" class="bibref">IAccessible2</a>\].

Accessible Description  
An accessible description provides additional information, related to an interface element, that complements the <a href="#dfn-accessible-name" class="internalDFN">accessible name</a>. The accessible description might or might not be visually perceivable.

Accessible Name  
The accessible name is the name of a user interface element. Each platform <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a> provides the accessible name property. The value of the accessible name may be derived from a visible (e.g., the visible text on a button) or invisible (e.g., the text alternative that describes an icon) property of the user interface element. See related <a href="#dfn-accessible-description" class="internalDFN">accessible description</a>.

A simple use for the accessible name property may be illustrated by an "OK" button. The text "OK" is the accessible name. When the button receives focus, assistive technologies may concatenate the platform's role description with the accessible name. For example, a screen reader may speak "push-button OK" or "OK button". The order of concatenation and specifics of the role description (e.g., "button", "push-button", "clickable button") are determined by platform <a href="#dfn-accessibility-api" class="termref internalDFN">accessibility API</a>s or <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>.

Assistive Technologies  
Hardware and/or software that:

-   relies on services provided by a <a href="#dfn-user-agent" class="internalDFN">user agent</a> to retrieve and render Web content
-   works with a user agent or web content itself through the use of APIs, and
-   provides services beyond those offered by the user agent to facilitate user interaction with web content by people with disabilities

This definition may differ from that used in other documents.

Examples of assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, which are used to enlarge and improve the visual readability of rendered text and images;
-   screen readers, which are most-often used to convey information through synthesized speech or a refreshable Braille display;
-   text-to-speech software, which is used to convert text into synthetic speech;
-   speech recognition software, which is used to allow spoken control and dictation;
-   alternate input technologies (including head pointers, on-screen keyboards, single switches, and sip/puff devices), which are used to simulate the keyboard;
-   alternate pointing devices, which are used to simulate mouse pointing and clicking.

Attribute  
In this specification, attribute is used as it is in markup languages. Attributes are structural features added to <a href="#dfn-element" class="termref">elements</a> to provide information about the <a href="#dfn-state" class="termref">states</a> and <a href="#dfn-property" class="termref">properties</a> of the <a href="#dfn-object" class="termref">object</a> represented by the element.

Class  
A set of instance <a href="#dfn-object" class="termref">objects</a> that share similar characteristics.

Deprecated  
A deprecated <a href="#dfn-role" class="termref">role</a>, <a href="#dfn-state" class="termref">state</a>, or <a href="#dfn-property" class="termref">property</a> is one which has been outdated by newer constructs or changed circumstances, and which may be removed in future versions of the WAI-ARIA specification. <a href="#dfn-user-agent" class="termref internalDFN">User agents</a> are encouraged to continue to support items identified as deprecated for backward compatibility. For more information, see [Deprecated Requirements](#deprecated) in the Conformance section.

Element  
In this specification, element is used as it is in markup languages. Elements are the structural elements in markup language that contains the data profile for <a href="#dfn-object" class="termref internalDFN">objects</a>.

Event  
A programmatic message used to communicate discrete changes in the <a href="#dfn-state" class="internalDFN">state</a> of an <a href="#dfn-object" class="internalDFN">object</a> to other objects in a computational system. User input to a web page is commonly mediated through abstract events that describe the interaction and can provide notice of changes to the state of a document object. In some programming languages, events are more commonly known as notifications.

Graphical Document  
A document containing graphic representations with user-navigable parts. Charts, maps, diagrams, blueprints, and dashboards are examples of graphical documents. A graphical document is composed using any combination of symbols, images, text, and graphic primitives (shapes such as circles, points, lines, paths, rectangles, etc).

Hidden  
Indicates that the <a href="#dfn-element" class="internalDFN">element</a> is not visible, <a href="#dfn-perceivable" class="internalDFN">perceivable</a>, or interactive to *any* user. An element is considered *hidden* if it or any one of its ancestor elements is not rendered or is explicitly hidden.

Informative  
Content provided for information purposes and not required for conformance. Content required for conformance is referred to as <a href="#dfn-normative" class="internalDFN">normative</a>.

Keyboard Accessible  
Accessible to the user using a keyboard or <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> that mimic keyboard input, such as a sip and puff tube. References in this document relate to [WCAG 2.0 Guideline 2.1: Make all functionality available from a keyboard](http://www.w3.org/TR/WCAG20/#keyboard-operation) \[<a href="#bib-WCAG20" class="bibref">WCAG20</a>\].

Landmark  
A type of region on a page to which the user may want quick access. Content in such a region is different from that of other regions on the page and relevant to a specific user purpose, such as navigating, searching, perusing the primary content, etc.

Live Region  
Live regions are perceivable regions of a web page that are typically updated as a result of an external event when user focus may be elsewhere. These regions are not always updated as a result of a user interaction. This practice has become commonplace with the growing use of Ajax. Examples of live regions include a chat log, stock ticker, or a sport scoring section that updates periodically to reflect game statistics. Since these asynchronous areas are expected to update outside the user's area of focus, assistive technologies such as screen readers have either been unaware of their existence or unable to process them for the user. WAI-ARIA has provided a collection of properties that allow the author to identify these live regions and process them: aria-live, aria-relevant, aria-atomic, and aria-busy.

Managed State  
<a href="#dfn-accessibility-api" class="internalDFN">Accessibility API</a> <a href="#dfn-state" class="internalDFN">state</a> that is controlled by the user agent, such as focus and selection. These are contrasted with "unmanaged states" that are typically controlled by the author. Nevertheless, authors can override some managed states, such as aria-posinset and aria-setsize. Many managed states have corresponding CSS pseudo-classes, such as :focus, and pseudo-elements, such as ::selection, that are also updated by the user agent.

Nemeth Braille  
The Nemeth Braille Code for Mathematics is a braille code for encoding mathematical and scientific notation. See [Nemeth Braille on Wikipedia](https://en.wikipedia.org/wiki/Nemeth_Braille).

Normative  
Required for conformance. By contrast, content identified as <a href="#dfn-informative" class="internalDFN">informative</a> or "non-normative" is not required for conformance.

Object  
In the context of user interfaces, an item in the perceptual user experience, represented in markup languages by one or more <a href="#dfn-element" class="termref internalDFN">elements</a>, and rendered by <a href="#dfn-user-agent" class="termref internalDFN">user agents</a>.

In the context of programming, the instantiation of one or more <a href="#dfn-class" class="termref internalDFN">classes</a> and interfaces which define the general characteristics of similar objects. An object in an <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a> may represent one or more DOM objects. <a href="#dfn-accessibility-api" class="termref internalDFN">Accessibility APIs</a> have defined interfaces that are distinct from DOM interfaces.

Ontology  
A description of the characteristics of <a href="#dfn-class" class="termref internalDFN">classes</a> and how they relate to each other.

Operable  
Usable by users in ways they can control. References in this document relate to [WCAG 2.0 Principle 2: Content must be operable](http://www.w3.org/TR/WCAG20/#operable) \[<a href="#bib-WCAG20" class="bibref">WCAG20</a>\]. See <a href="#dfn-keyboard-accessible" class="internalDFN">Keyboard Accessible</a>.

Owned Element  
An 'owned element' is any DOM descendant of the <a href="#dfn-element" class="internalDFN">element</a>, any element specified as a child via <a href="#aria-owns" class="property-reference"><code>aria-owns</code></a>, or any DOM descendant of the owned child.

Perceivable  
Presentable to users in ways they can sense. References in this document relate to [WCAG 2.0 Principle 1: Content must be perceivable](http://www.w3.org/TR/WCAG20/#perceivable) \[<a href="#bib-WCAG20" class="bibref">WCAG20</a>\].

Property  
<a href="#dfn-attribute" class="termref internalDFN">Attributes</a> that are essential to the nature of a given <a href="#dfn-object" class="internalDFN">object</a>, or that represent a data value associated with the object. A change of a property may significantly impact the meaning or presentation of an object. Certain properties (for example, <a href="#aria-multiline" class="property-reference"><code>aria-multiline</code></a>) are less likely to change than <a href="#dfn-state" class="termref">states</a>, but note that the frequency of change difference is not a rule. A few properties, such as <a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a>, <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a>, and <a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a> are expected to change often. See [clarification of states versus properties](#statevsprop).

Relationship  
A connection between two distinct things. Relationships may be of various types to indicate which <a href="#dfn-object" class="internalDFN">object</a> labels another, controls another, etc.

Role  
Main indicator of type. This <a href="#dfn-semantics" class="termref internalDFN">semantic</a> association allows tools to present and support interaction with the object in a manner that is consistent with user expectations about other objects of that type.

Semantics  
The meaning of something as understood by a human, defined in a way that computers can process a representation of an <a href="#dfn-object" class="internalDFN">object</a>, such as <a href="#dfn-element" class="termref internalDFN">elements</a> and <a href="#dfn-attribute" class="termref internalDFN">attributes</a>, and reliably represent the object in a way that various humans will achieve a mutually consistent understanding of the object.

State  
A state is a dynamic <a href="#dfn-property" class="termref">property</a> expressing characteristics of an <a href="#dfn-object" class="internalDFN">object</a> that may change in response to user action or automated processes. States do not affect the essential nature of the object, but represent data associated with the object or user interaction possibilities. See [clarification of states versus properties](#statevsprop).

Taxonomy  
A hierarchical definition of how the characteristics of various <a href="#dfn-class" class="termref internalDFN">classes</a> relate to each other, in which classes inherit the properties of superclasses in the hierarchy. A taxonomy can comprise part of the formal definition of an <a href="#dfn-ontology" class="internalDFN">ontology</a>.

Understandable  
Presentable to users in ways they can construct an appropriate meaning. References in this document relate to [WCAG 2.0 Principle 3: Information and the operation of user interface must be understandable](http://www.w3.org/TR/WCAG20/#understandable) \[<a href="#bib-WCAG20" class="bibref">WCAG20</a>\].

User Agent  
Any software that retrieves, renders and facilitates end user interaction with Web content. This definition may differ from that used in other documents.

Widget  
Discrete user interface <a href="#dfn-object" class="termref">object</a> with which the user can interact. Widgets range from simple objects that have one value or operation (e.g., check boxes and menu items), to complex objects that contain many managed sub-objects (e.g., trees and grids).

<span property="xhv:role" resource="xhv:heading"><span class="secno">5. </span>The Roles Model<span class="permalink" typeof="bookmark">[<span property="title" content="5. The Roles Model">§</span>](#roles "Permalink for 5. The Roles Model")</span></span>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This section defines the WAI-ARIA <a href="#dfn-role" class="internalDFN">role</a> <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a> and describes the characteristics and properties of all <a href="#dfn-role" class="internalDFN">roles</a>. A formal RDF/OWL representation of all the information presented here is available in [Schemata Appendix](#a_schemata).

The roles, their characteristics, the states and properties they support, and specification of how they may be used in markup, shall be considered normative. The RDF/OWL representation used to model the taxonomy shall be considered informative. The RDF/OWL taxonomy may be used as a vehicle to extend WAI-ARIA in the future or by tool manufacturers to validate states and properties applicable to roles per this specification.

Roles are element types and authors *MUST NOT* change role values over time or with user actions. Authors wishing to change a role *MUST* do so by deleting the associated element and its children and replacing it with a new element with the appropriate role. Typically, platform accessibility APIs do not provide a vehicle to notify assistive technologies of a role value change, and consequently, assistive technologies may not update their cache with the new role attribute value.

In order to reflect the content in the DOM, user agents *SHOULD* map the role attribute to the appropriate value in the implemented accessibility API, and user agents *SHOULD* update the mapping when the role attribute changes.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.1 </span>Relationships Between Concepts<span class="permalink" typeof="bookmark">[<span property="title" content="5.1 Relationships Between Concepts">§</span>](#relationshipsconcepts "Permalink for 5.1 Relationships Between Concepts")</span></span>

The <a href="#dfn-role" class="internalDFN">role</a> <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a> uses the following relationships to relate WAI-ARIA roles to each other and to concepts from other specifications, such as HTML and XForms.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.1.1 </span>Superclass Role<span class="permalink" typeof="bookmark">[<span property="title" content="5.1.1 Superclass Role">§</span>](#superclassrole "Permalink for 5.1.1 Superclass Role")</span></span>

Inheritance is expressed in RDF using the RDF Schema 1.1 [subClassOf](https://www.w3.org/TR/2014/REC-rdf-schema-20140225/#ch_subclassof) (\[<a href="#bib-rdf-schema" class="bibref">rdf-schema</a>\]) property.

RDF Property  
rdfs:subClassOf

The <a href="#dfn-role" class="internalDFN">role</a> that the current subclassed role extends in the <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a>. This extension causes all the properties and constraints of the superclass role to propagate to the subclass role. Other than well known stable specifications, inheritance may be restricted to items defined inside this specification, so that external items cannot be changed and affect inherited <a href="#dfn-class" class="internalDFN">classes</a>.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.1.2 </span>Subclass Roles<span class="permalink" typeof="bookmark">[<span property="title" content="5.1.2 Subclass Roles">§</span>](#subclassroles "Permalink for 5.1.2 Subclass Roles")</span></span>

RDF Property  
&lt;none&gt;

Informative list of <a href="#dfn-role" class="internalDFN">roles</a> for which this role is the superclass. This is provided to facilitate reading of the specification but adds no new information.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.1.3 </span>Related Concepts<span class="permalink" typeof="bookmark">[<span property="title" content="5.1.3 Related Concepts">§</span>](#relatedConcept "Permalink for 5.1.3 Related Concepts")</span></span>

RDF Property  
role:relatedConcept

Informative data about a similar or related idea from other specifications. Concepts that are related are not necessarily identical. Related concepts do not inherit properties from each other. Hence if the definition of one concept changes, the properties, behavior, and definition of its related concept is not affected.

For example, a progress bar is like a status indicator. Therefore, the <a href="#progressbar" class="role-reference"><code>progressbar</code></a> <a href="#dfn-widget" class="internalDFN">widget</a> has a `relatedConcept` value which includes <a href="#status" class="role-reference"><code>status</code></a>. However, if the definition of `status` is modified, the definition of a `progressbar` is not affected.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.1.4 </span>Base Concept<span class="permalink" typeof="bookmark">[<span property="title" content="5.1.4 Base Concept">§</span>](#baseConcept "Permalink for 5.1.4 Base Concept")</span></span>

RDF Property  
role:baseConcept

Informative data about <a href="#dfn-object" class="internalDFN">objects</a> that are considered prototypes for the <a href="#dfn-role" class="internalDFN">role</a>. Base concept is similar to type, but without inheritance of limitations and properties. Base concepts are designed as a substitute for inheritance for external concepts. A base concept is like a [related concept](#relatedConcept) except that the base concept is almost identical to the role definition.

For example, the <a href="#checkbox" class="role-reference"><code>checkbox</code></a> defined in this document has similar functionality and anticipated behavior to a [checkbox defined in HTML](https://www.w3.org/TR/html5/sec-forms.html#checkbox-state-typecheckbox). Therefore, a `checkbox` has an HTML `checkbox` as a `baseConcept`. However, if the original HTML checkbox baseConcept definition is modified, the definition of a `checkbox` in this document will not be affected, because there is no actual inheritance of the respective type.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2 </span>Characteristics of Roles<span class="permalink" typeof="bookmark">[<span property="title" content="5.2 Characteristics of Roles">§</span>](#Properties "Permalink for 5.2 Characteristics of Roles")</span></span>

Roles are defined and described by their characteristics. Characteristics define the structural function of a role, such as what a role is, concepts behind it, and what instances the role can or must contain. In the case of <a href="#dfn-widget" class="internalDFN">widgets</a> this also includes how it interacts with the <a href="#dfn-user-agent" class="internalDFN">user agent</a> based on mapping to HTML forms and XForms. States and properties from WAI-ARIA that are supported by the role are also indicated.

The roles <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a> defines the following characteristics. These characteristics are implemented in RDF as properties of the OWL <a href="#dfn-class" class="internalDFN">classes</a> that describe the roles.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.1 </span>Abstract Roles<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.1 Abstract Roles">§</span>](#isAbstract "Permalink for 5.2.1 Abstract Roles")</span></span>

RDF Property  
N/A

Values  
Boolean

Abstract <a href="#dfn-role" class="internalDFN">roles</a> are the foundation upon which all other WAI-ARIA roles are built. Content authors *MUST NOT* use abstract roles because they are not implemented in the API binding. User agents *MUST NOT* map abstract roles to the standard role mechanism of the accessibility API. Abstract roles are provided to help with the following:

1.  Organize the role <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a> and provide roles with a meaning in the context of known concepts.
2.  Streamline the addition of roles that include necessary features.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.2 </span>Required States and Properties<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.2 Required States and Properties">§</span>](#requiredState "Permalink for 5.2.2 Required States and Properties")</span></span>

RDF Property  
role:requiredState

Values  
Any valid RDF object reference, such as a URI.

<a href="#dfn-state" class="internalDFN">States</a> and <a href="#dfn-property" class="internalDFN">properties</a> specifically required for the <a href="#dfn-role" class="internalDFN">role</a> and subclass roles. Content authors *MUST* provide a non-empty value for required states and properties. Content authors *MUST NOT* use the value `undefined` for required states and properties, unless `undefined` is an explicitly-supported value of that state or property.

When an <a href="#dfn-object" class="internalDFN">object</a> inherits from multiple ancestors and one ancestor indicates that property is supported while another ancestor indicates that it is required, the property is required in the inheriting object.

Note

A host language attribute with the appropriate [implicit WAI-ARIA semantic](#implicit_semantics) fulfills this requirement.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.3 </span>Supported States and Properties<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.3 Supported States and Properties">§</span>](#supportedState "Permalink for 5.2.3 Supported States and Properties")</span></span>

RDF Property  
role:supportedState

Values  
Any valid RDF object reference, such as a URI.

<a href="#dfn-state" class="internalDFN">States</a> and <a href="#dfn-property" class="internalDFN">properties</a> specifically applicable to the <a href="#dfn-role" class="internalDFN">role</a> and child roles. <a href="#dfn-user-agent" class="internalDFN">User agents</a> *MUST* map all supported states and properties for the role to an accessibility API. Content authors *MAY* provide values for supported states and properties, but need not in some cases where default values are sufficient.

Note

A host language attribute with the appropriate [implicit WAI-ARIA semantic](#implicit_semantics) fulfills this requirement.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.4 </span>Inherited States and Properties<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.4 Inherited States and Properties">§</span>](#inheritedattributes "Permalink for 5.2.4 Inherited States and Properties")</span></span>

Informative list of properties that are inherited onto a <a href="#dfn-role" class="internalDFN">role</a> from superclass roles. <a href="#dfn-state" class="internalDFN">States</a> and <a href="#dfn-property" class="internalDFN">properties</a> are inherited from superclass roles in the role <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a>, not from ancestor <a href="#dfn-element" class="internalDFN">elements</a> in the DOM tree. These properties are not explicitly defined on the role, as the inheritance of properties is automatic. This information is provided to facilitate reading of the specification. The set of supported states and properties combined with inherited states and properties forms the full set of states and properties supported by the role.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.5 </span>Required Owned Elements<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.5 Required Owned Elements">§</span>](#mustContain "Permalink for 5.2.5 Required Owned Elements")</span></span>

RDF Property  
role:mustContain

Values  
Any valid RDF object reference, such as a URI.

Any <a href="#dfn-element" class="internalDFN">element</a> that will be <a href="#dfn-owned-element" class="internalDFN">owned</a> by the element with this <a href="#dfn-role" class="internalDFN">role</a>. For example, an element with the role <a href="#list" class="role-reference"><code>list</code></a> will own at least one element with the role <a href="#group" class="role-reference"><code>group</code></a> or <a href="#listitem" class="role-reference"><code>listitem</code></a>.

When multiple roles are specified as *required owned elements* for a role, at least one instance of one required owned element is expected. This specification does *not* require an instance of each of the listed owned roles. For example, a `menu` should have at least one instance of a `menuitem`, `menuitemcheckbox`, *or* `menuitemradio`. The `menu` role does not require one instance of each.

There may be times that required owned elements are missing, for example, while editing or while loading a data set. When a widget is missing *required owned elements* due to script execution or loading, authors *MUST* mark a containing element with <a href="#aria-busy" class="state-reference"><code>aria-busy</code></a> equal to `true`. For example, until a page is fully initialized and complete, an author could mark the document element as busy.

Note

A role that has 'required owned elements' does not imply the reverse relationship. While processing of a role may be incomplete without elements of given roles present as descendants, elements with roles in this list do not always have to be found within elements of the given role. See [required context role](#scope) for requirements about the context where elements of a given role will be contained.

Note

An element with a [subclass role](#subclassroles) of the 'required owned element' does not fulfill this requirement. For example, the `list` role requires ownership of an element using either the `listitem` or `group` role. Although the `group` role is the superclass of <a href="#row" class="role-reference"><code>row</code></a>, adding a owned element with a role of `row` will not fulfill the requirement that `list` must own a `listitem` or a `group`.

Note

An element with the appropriate [implicit WAI-ARIA semantic](#implicit_semantics) fulfills this requirement.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.6 </span>Required Context Role<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.6 Required Context Role">§</span>](#scope "Permalink for 5.2.6 Required Context Role")</span></span>

RDF Property  
role:scope

Values  
Any valid RDF object reference, such as a URI.

The required context role defines the owning container where this <a href="#dfn-role" class="internalDFN">role</a> is allowed. If a role has a required context, authors *MUST* ensure that an element with the role is contained inside (or <a href="#dfn-owned-element" class="internalDFN">owned</a> by) an element with the required context role. For example, an element with role `listitem` is only meaningful when contained inside (or owned by) an element with role `list`.

Note

A role that has 'required context role' does not imply the reverse relationship. While an element with the given role needs to appear within an element of the listed role(s) in order to be meaningful, elements of the listed roles do not always need descendant elements of the given role in order to be meaningful. See [required owned elements](#mustContain) for requirements about elements that require presence of a given descendant to be processed properly.

Note

An element with the appropriate [implicit WAI-ARIA semantic](#implicit_semantics) fulfills this requirement.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.7 </span>Accessible Name Calculation<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.7 Accessible Name Calculation">§</span>](#namecalculation "Permalink for 5.2.7 Accessible Name Calculation")</span></span>

RDF Property  
role:nameFrom

Values  
One of the following values:

1.  author: name comes from values provided by the author in explicit markup features such as the <a href="#aria-label" class="property-reference"><code>aria-label</code></a> attribute, the <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a> attribute, or the host language labeling mechanism, such as the `alt` or `title` attributes in HTML, with HTML `title` attribute having the lowest precedence for specifying a text alternative.
2.  contents: name comes from the text value of the <a href="#dfn-element" class="internalDFN">element</a> node. Although this may be allowed in addition to "author" in some <a href="#dfn-role" class="internalDFN">roles</a>, this is used in content only if higher priority "author" features are not provided. Priority is defined by the [text alternative computation](https://www.w3.org/TR/accname-aam-1.1/#mapping_additional_nd_te) algorithm.

##### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.7.1 </span>Name Computation<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.7.1 Name Computation">§</span>](#namecomputation "Permalink for 5.2.7.1 Name Computation")</span></span>

[Name Computation](https://www.w3.org/TR/accname-aam-1.1/#mapping_additional_nd_name) is defined in the Accessible Name and Description specification \[<a href="#bib-accname-aam-1.1" class="bibref">accname-aam-1.1</a>\].

##### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.7.2 </span>Description Computation<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.7.2 Description Computation">§</span>](#descriptioncomputation "Permalink for 5.2.7.2 Description Computation")</span></span>

[Description Computation](https://www.w3.org/TR/accname-aam-1.1/#mapping_additional_nd_description) is defined in the Accessible Name and Description specification \[<a href="#bib-accname-aam-1.1" class="bibref">accname-aam-1.1</a>\].

##### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.7.3 </span>Text Alternative Computation<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.7.3 Text Alternative Computation">§</span>](#textalternativecomputation "Permalink for 5.2.7.3 Text Alternative Computation")</span></span>

[Text Alternative Computation](https://www.w3.org/TR/accname-aam-1.1/#mapping_additional_nd_te) is defined in the Accessible Name and Description specification \[<a href="#bib-accname-aam-1.1" class="bibref">accname-aam-1.1</a>\].

##### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.7.4 </span>Roles Supporting Name from Author<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.7.4 Roles Supporting Name from Author">§</span>](#namefromauthor "Permalink for 5.2.7.4 Roles Supporting Name from Author")</span></span>

All roles support name from author with two exceptions. The roles that do not support name from author are <a href="#presentation" class="role-reference"><code>presentation</code></a> and <a href="#none" class="role-reference"><code>none</code></a>.

##### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.7.5 </span>Roles Supporting Name from Content<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.7.5 Roles Supporting Name from Content">§</span>](#namefromcontent "Permalink for 5.2.7.5 Roles Supporting Name from Content")</span></span>

-   <a href="#button" class="role-reference"><code>button</code></a>
-   <a href="#cell" class="role-reference"><code>cell</code></a>
-   <a href="#checkbox" class="role-reference"><code>checkbox</code></a>
-   <a href="#columnheader" class="role-reference"><code>columnheader</code></a>
-   <a href="#gridcell" class="role-reference"><code>gridcell</code></a>
-   <a href="#heading" class="role-reference"><code>heading</code></a>
-   <a href="#link" class="role-reference"><code>link</code></a>
-   <a href="#menuitem" class="role-reference"><code>menuitem</code></a>
-   <a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a>
-   <a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a>
-   <a href="#option" class="role-reference"><code>option</code></a>
-   <a href="#radio" class="role-reference"><code>radio</code></a>
-   <a href="#row" class="role-reference"><code>row</code></a>
-   <a href="#rowgroup" class="role-reference"><code>rowgroup</code></a>
-   <a href="#rowheader" class="role-reference"><code>rowheader</code></a>
-   <a href="#switch" class="role-reference"><code>switch</code></a>
-   <a href="#tab" class="role-reference"><code>tab</code></a>
-   <a href="#tooltip" class="role-reference"><code>tooltip</code></a>
-   <a href="#tree" class="role-reference"><code>tree</code></a>
-   <a href="#treeitem" class="role-reference"><code>treeitem</code></a>

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.8 </span>Presentational Children<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.8 Presentational Children">§</span>](#childrenArePresentational "Permalink for 5.2.8 Presentational Children")</span></span>

RDF Property  
role:childrenArePresentational

Values  
Boolean (`true` | `false`)

The DOM descendants are presentational. <a href="#dfn-user-agent" class="internalDFN">User agents</a> *SHOULD NOT* expose descendants of this <a href="#dfn-element" class="internalDFN">element</a> through the platform <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a>. If <a href="#dfn-user-agent" class="internalDFN">user agents</a> do not hide the descendant nodes, some information may be read twice.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.2.9 </span>Implicit Value for Role<span class="permalink" typeof="bookmark">[<span property="title" content="5.2.9 Implicit Value for Role">§</span>](#implictValueForRole "Permalink for 5.2.9 Implicit Value for Role")</span></span>

Many states and properties have default values. Occasionally, the default value when used on a given role should be different from the usual default. Roles that require a state or property to have a non-standard default value indicate this in the "Implicit Value for Role". This is expressed in the form "`state or property name` is `new default value`". Roles that define this have the new default value for the state or property if the author does not provide an explicit value.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.3 </span>Categorization of Roles<span class="permalink" typeof="bookmark">[<span property="title" content="5.3 Categorization of Roles">§</span>](#roles_categorization "Permalink for 5.3 Categorization of Roles")</span></span>

To support the current user scenario, this specification categorizes <a href="#dfn-role" class="internalDFN">roles</a> that define user interface <a href="#dfn-widget" class="internalDFN">widgets</a> (sliders, tree controls, etc.) and those that define page structure (sections, navigation, etc.). Note that some assistive technologies provide special modes of interaction for regions marked with role `application` or `document`.

[<img src="img/rdf_model_sm.png" alt="Class diagram of the relationships described in the role data model" width="600" height="269" />](img/rdf_model)

Class diagram of the relationships described in the role data model.

[SVG class diagram](img/rdf_model.svg) | [PNG class diagram](img/rdf_model.png) | [Class diagram description](img/rdf_model.html)

Roles are categorized as follows:

1.  [Abstract Roles](#abstract_roles)
2.  [Widget Roles](#widget_roles)
3.  [Document Structure Roles](#document_structure_roles)
4.  [Landmark Roles](#landmark_roles)
5.  [Live Region Roles](#live_region_roles)
6.  [Window Roles](#window_roles)

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.3.1 </span>Abstract Roles<span class="permalink" typeof="bookmark">[<span property="title" content="5.3.1 Abstract Roles">§</span>](#abstract_roles "Permalink for 5.3.1 Abstract Roles")</span></span>

The following <a href="#dfn-role" class="internalDFN">roles</a> are used to support the WAI-ARIA role <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a> for the purpose of defining general role concepts.

Abstract roles are used for the ontology. Authors *MUST NOT* use abstract roles in content.

-   <a href="#command" class="role-reference"><code>command</code></a>
-   <a href="#composite" class="role-reference"><code>composite</code></a>
-   <a href="#input" class="role-reference"><code>input</code></a>
-   <a href="#landmark" class="role-reference"><code>landmark</code></a>
-   <a href="#range" class="role-reference"><code>range</code></a>
-   <a href="#roletype" class="role-reference"><code>roletype</code></a>
-   <a href="#section" class="role-reference"><code>section</code></a>
-   <a href="#sectionhead" class="role-reference"><code>sectionhead</code></a>
-   <a href="#select" class="role-reference"><code>select</code></a>
-   <a href="#structure" class="role-reference"><code>structure</code></a>
-   <a href="#widget" class="role-reference"><code>widget</code></a>
-   <a href="#window" class="role-reference"><code>window</code></a>

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.3.2 </span>Widget Roles<span class="permalink" typeof="bookmark">[<span property="title" content="5.3.2 Widget Roles">§</span>](#widget_roles "Permalink for 5.3.2 Widget Roles")</span></span>

The following roles act as standalone user interface widgets or as part of larger, composite widgets.

-   <a href="#button" class="role-reference"><code>button</code></a>
-   <a href="#checkbox" class="role-reference"><code>checkbox</code></a>
-   <a href="#gridcell" class="role-reference"><code>gridcell</code></a>
-   <a href="#link" class="role-reference"><code>link</code></a>
-   <a href="#menuitem" class="role-reference"><code>menuitem</code></a>
-   <a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a>
-   <a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a>
-   <a href="#option" class="role-reference"><code>option</code></a>
-   <a href="#progressbar" class="role-reference"><code>progressbar</code></a>
-   <a href="#radio" class="role-reference"><code>radio</code></a>
-   <a href="#scrollbar" class="role-reference"><code>scrollbar</code></a>
-   <a href="#searchbox" class="role-reference"><code>searchbox</code></a>
-   <a href="#separator" class="role-reference"><code>separator</code></a> (when focusable)
-   <a href="#slider" class="role-reference"><code>slider</code></a>
-   <a href="#spinbutton" class="role-reference"><code>spinbutton</code></a>
-   <a href="#switch" class="role-reference"><code>switch</code></a>
-   <a href="#tab" class="role-reference"><code>tab</code></a>
-   <a href="#tabpanel" class="role-reference"><code>tabpanel</code></a>
-   <a href="#textbox" class="role-reference"><code>textbox</code></a>
-   <a href="#treeitem" class="role-reference"><code>treeitem</code></a>

The following roles act as composite user interface widgets. These roles typically act as containers that manage other, contained widgets.

-   <a href="#combobox" class="role-reference"><code>combobox</code></a>
-   <a href="#grid" class="role-reference"><code>grid</code></a>
-   <a href="#listbox" class="role-reference"><code>listbox</code></a>
-   <a href="#menu" class="role-reference"><code>menu</code></a>
-   <a href="#menubar" class="role-reference"><code>menubar</code></a>
-   <a href="#radiogroup" class="role-reference"><code>radiogroup</code></a>
-   <a href="#tablist" class="role-reference"><code>tablist</code></a>
-   <a href="#tree" class="role-reference"><code>tree</code></a>
-   <a href="#treegrid" class="role-reference"><code>treegrid</code></a>

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.3.3 </span>Document Structure<span class="permalink" typeof="bookmark">[<span property="title" content="5.3.3 Document Structure">§</span>](#document_structure_roles "Permalink for 5.3.3 Document Structure")</span></span>

The following <a href="#dfn-role" class="internalDFN">roles</a> describe structures that organize content in a page. Document structures are not usually interactive.

-   <a href="#application" class="role-reference"><code>application</code></a>
-   <a href="#article" class="role-reference"><code>article</code></a>
-   <a href="#cell" class="role-reference"><code>cell</code></a>
-   <a href="#columnheader" class="role-reference"><code>columnheader</code></a>
-   <a href="#definition" class="role-reference"><code>definition</code></a>
-   <a href="#directory" class="role-reference"><code>directory</code></a>
-   <a href="#document" class="role-reference"><code>document</code></a>
-   <a href="#feed" class="role-reference"><code>feed</code></a>
-   <a href="#figure" class="role-reference"><code>figure</code></a>
-   <a href="#group" class="role-reference"><code>group</code></a>
-   <a href="#heading" class="role-reference"><code>heading</code></a>
-   <a href="#img" class="role-reference"><code>img</code></a>
-   <a href="#list" class="role-reference"><code>list</code></a>
-   <a href="#listitem" class="role-reference"><code>listitem</code></a>
-   <a href="#math" class="role-reference"><code>math</code></a>
-   <a href="#none" class="role-reference"><code>none</code></a>
-   <a href="#note" class="role-reference"><code>note</code></a>
-   <a href="#presentation" class="role-reference"><code>presentation</code></a>
-   <a href="#row" class="role-reference"><code>row</code></a>
-   <a href="#rowgroup" class="role-reference"><code>rowgroup</code></a>
-   <a href="#rowheader" class="role-reference"><code>rowheader</code></a>
-   <a href="#separator" class="role-reference"><code>separator</code></a> (when not focusable)
-   <a href="#table" class="role-reference"><code>table</code></a>
-   <a href="#term" class="role-reference"><code>term</code></a>
-   <a href="#toolbar" class="role-reference"><code>toolbar</code></a>
-   <a href="#tooltip" class="role-reference"><code>tooltip</code></a>

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.3.4 </span>Landmark Roles<span class="permalink" typeof="bookmark">[<span property="title" content="5.3.4 Landmark Roles">§</span>](#landmark_roles "Permalink for 5.3.4 Landmark Roles")</span></span>

The following <a href="#dfn-role" class="internalDFN">roles</a> are regions of the page intended as navigational <a href="#dfn-landmark" class="internalDFN">landmarks</a>. All of these roles inherit from the `landmark` base type and all are imported from the [Role Attribute](https://www.w3.org/TR/role-attribute/#s_role_module_attributes) \[<a href="#bib-role-attribute" class="bibref">role-attribute</a>\]. The roles are included here in order to make them clearly part of the WAI-ARIA Role <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a>.

-   <a href="#banner" class="role-reference"><code>banner</code></a>
-   <a href="#complementary" class="role-reference"><code>complementary</code></a>
-   <a href="#contentinfo" class="role-reference"><code>contentinfo</code></a>
-   <a href="#form" class="role-reference"><code>form</code></a>
-   <a href="#main" class="role-reference"><code>main</code></a>
-   <a href="#navigation" class="role-reference"><code>navigation</code></a>
-   <a href="#region" class="role-reference"><code>region</code></a>
-   <a href="#search" class="role-reference"><code>search</code></a>

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.3.5 </span>Live Region Roles<span class="permalink" typeof="bookmark">[<span property="title" content="5.3.5 Live Region Roles">§</span>](#live_region_roles "Permalink for 5.3.5 Live Region Roles")</span></span>

The following <a href="#dfn-role" class="internalDFN">roles</a> are <a href="#dfn-live-region" class="internalDFN">live regions</a> and may be modified by [live region attributes](#attrs_liveregions).

-   <a href="#alert" class="role-reference"><code>alert</code></a>
-   <a href="#log" class="role-reference"><code>log</code></a>
-   <a href="#marquee" class="role-reference"><code>marquee</code></a>
-   <a href="#status" class="role-reference"><code>status</code></a>
-   <a href="#timer" class="role-reference"><code>timer</code></a>

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.3.6 </span>Window Roles<span class="permalink" typeof="bookmark">[<span property="title" content="5.3.6 Window Roles">§</span>](#window_roles "Permalink for 5.3.6 Window Roles")</span></span>

The following <a href="#dfn-role" class="internalDFN">roles</a> act as windows within the browser or application.

-   <a href="#alertdialog" class="role-reference"><code>alertdialog</code></a>
-   <a href="#dialog" class="role-reference"><code>dialog</code></a>

### <span property="xhv:role" resource="xhv:heading"><span class="secno">5.4 </span>Definition of Roles<span class="permalink" typeof="bookmark">[<span property="title" content="5.4 Definition of Roles">§</span>](#role_definitions "Permalink for 5.4 Definition of Roles")</span></span>

Below is an alphabetical list of WAI-ARIA <a href="#dfn-role" class="internalDFN">roles</a> to be used by rich internet application authors.

Abstract roles are used for the ontology. Authors *MUST NOT* use abstract roles in content.

<a href="#alert" class="role-reference"><code>alert</code></a>  
A type of <a href="#dfn-live-region" class="internalDFN">live region</a> with important, and usually time-sensitive, information. See related <a href="#alertdialog" class="role-reference"><code>alertdialog</code></a> and <a href="#status" class="role-reference"><code>status</code></a>.

<a href="#alertdialog" class="role-reference"><code>alertdialog</code></a>  
A type of dialog that contains an alert message, where initial focus goes to an <a href="#dfn-element" class="internalDFN">element</a> within the dialog. See related <a href="#alert" class="role-reference"><code>alert</code></a> and <a href="#dialog" class="role-reference"><code>dialog</code></a>.

<a href="#application" class="role-reference"><code>application</code></a>  
A <a href="#structure" class="role-reference"><code>structure</code></a> containing one or more focusable elements requiring user input, such as keyboard or gesture events, that do not follow a standard interaction pattern supported by a <a href="#widget" class="role-reference"><code>widget</code></a> role.

<a href="#article" class="role-reference"><code>article</code></a>  
A section of a page that consists of a composition that forms an independent part of a document, page, or site.

<a href="#banner" class="role-reference"><code>banner</code></a>  
A region that contains mostly site-oriented content, rather than page-specific content.

<a href="#button" class="role-reference"><code>button</code></a>  
An input that allows for user-triggered actions when clicked or pressed. See related <a href="#link" class="role-reference"><code>link</code></a>.

<a href="#cell" class="role-reference"><code>cell</code></a>  
A cell in a tabular container. See related <a href="#gridcell" class="role-reference"><code>gridcell</code></a>.

<a href="#checkbox" class="role-reference"><code>checkbox</code></a>  
A checkable input that has three possible values: `true`, `false`, or `mixed`.

<a href="#columnheader" class="role-reference"><code>columnheader</code></a>  
A cell containing header information for a column.

<a href="#combobox" class="role-reference"><code>combobox</code></a>  
A composite <a href="#widget" class="role-reference"><code>widget</code></a> containing a single-line <a href="#textbox" class="role-reference"><code>textbox</code></a> and another element, such as a <a href="#listbox" class="role-reference"><code>listbox</code></a> or <a href="#grid" class="role-reference"><code>grid</code></a>, that can dynamically pop up to help the user set the value of the <a href="#textbox" class="role-reference"><code>textbox</code></a>.

<a href="#command" class="role-reference"><code>command</code> (abstract role)</a>   
A form of widget that performs an action but does not receive input data.

<a href="#complementary" class="role-reference"><code>complementary</code></a>  
A supporting section of the document, designed to be complementary to the main content at a similar level in the DOM hierarchy, but remains meaningful when separated from the main content.

<a href="#composite" class="role-reference"><code>composite</code> (abstract role)</a>   
A <a href="#dfn-widget" class="internalDFN">widget</a> that may contain navigable descendants or owned children.

<a href="#contentinfo" class="role-reference"><code>contentinfo</code></a>  
A large perceivable region that contains information about the parent document.

<a href="#definition" class="role-reference"><code>definition</code></a>  
A definition of a term or concept. See related <a href="#term" class="role-reference"><code>term</code></a>.

<a href="#dialog" class="role-reference"><code>dialog</code></a>  
A dialog is a descendant window of the primary window of a web application. For HTML pages, the primary application window is the entire web document, i.e., the `body` element.

<a href="#directory" class="role-reference"><code>directory</code></a>  
A list of references to members of a group, such as a static table of contents.

<a href="#document" class="role-reference"><code>document</code></a>  
An <a href="#dfn-element" class="internalDFN">element</a> containing content that <a href="#dfn-assistive-technology" class="internalDFN">assistive technology</a> users may want to browse in a reading mode.

<a href="#feed" class="role-reference"><code>feed</code></a>  
A scrollable <a href="#list" class="role-reference"><code>list</code></a> of <a href="#article" class="role-reference"><code>articles</code></a> where scrolling may cause <a href="#article" class="role-reference"><code>articles</code></a> to be added to or removed from either end of the list.

<a href="#figure" class="role-reference"><code>figure</code></a>  
A perceivable <a href="#section" class="role-reference"><code>section</code></a> of content that typically contains a <a href="#dfn-graphical-document" class="internalDFN">graphical document</a>, images, code snippets, or example text. The parts of a `figure` *MAY* be user-navigable.

<a href="#form" class="role-reference"><code>form</code></a>  
A <a href="#landmark" class="role-reference"><code>landmark</code></a> region that contains a collection of items and objects that, as a whole, combine to create a form. See related <a href="#search" class="role-reference"><code>search</code></a>.

<a href="#grid" class="role-reference"><code>grid</code></a>  
A composite <a href="#widget" class="role-reference"><code>widget</code></a> containing a collection of one or more rows with one or more cells where some or all cells in the grid are focusable by using methods of two-dimensional navigation, such as directional arrow keys.

<a href="#gridcell" class="role-reference"><code>gridcell</code></a>  
A <a href="#cell" class="role-reference"><code>cell</code></a> in a <a href="#grid" class="role-reference"><code>grid</code></a> or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>.

<a href="#group" class="role-reference"><code>group</code></a>  
A set of user interface <a href="#dfn-object" class="internalDFN">objects</a> which are not intended to be included in a page summary or table of contents by <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>.

<a href="#heading" class="role-reference"><code>heading</code></a>  
A heading for a section of the page.

<a href="#img" class="role-reference"><code>img</code></a>  
A container for a collection of <a href="#dfn-element" class="internalDFN">elements</a> that form an image.

<a href="#input" class="role-reference"><code>input</code> (abstract role)</a>   
A generic type of <a href="#dfn-widget" class="internalDFN">widget</a> that allows user input.

<a href="#landmark" class="role-reference"><code>landmark</code> (abstract role)</a>   
A perceivable <a href="#section" class="role-reference"><code>section</code></a> containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page. Such a page summary could be generated dynamically by a user agent or assistive technology.

<a href="#link" class="role-reference"><code>link</code></a>  
An interactive reference to an internal or external resource that, when activated, causes the user agent to navigate to that resource. See related <a href="#button" class="role-reference"><code>button</code></a>.

<a href="#list" class="role-reference"><code>list</code></a>  
A <a href="#section" class="role-reference"><code>section</code></a> containing <a href="#listitem" class="role-reference"><code>listitem</code></a> elements. See related <a href="#listbox" class="role-reference"><code>listbox</code></a>.

<a href="#listbox" class="role-reference"><code>listbox</code></a>  
A <a href="#dfn-widget" class="internalDFN">widget</a> that allows the user to select one or more items from a list of choices. See related <a href="#combobox" class="role-reference"><code>combobox</code></a> and <a href="#list" class="role-reference"><code>list</code></a>.

<a href="#listitem" class="role-reference"><code>listitem</code></a>  
A single item in a list or directory.

<a href="#log" class="role-reference"><code>log</code></a>  
A type of <a href="#dfn-live-region" class="internalDFN">live region</a> where new information is added in meaningful order and old information may disappear. See related <a href="#marquee" class="role-reference"><code>marquee</code></a>.

<a href="#main" class="role-reference"><code>main</code></a>  
The main content of a document.

<a href="#marquee" class="role-reference"><code>marquee</code></a>  
A type of <a href="#dfn-live-region" class="internalDFN">live region</a> where non-essential information changes frequently. See related <a href="#log" class="role-reference"><code>log</code></a>.

<a href="#math" class="role-reference"><code>math</code></a>  
Content that represents a mathematical expression.

<a href="#menu" class="role-reference"><code>menu</code></a>  
A type of <a href="#dfn-widget" class="internalDFN">widget</a> that offers a list of choices to the user.

<a href="#menubar" class="role-reference"><code>menubar</code></a>  
A presentation of <a href="#menu" class="role-reference"><code>menu</code></a> that usually remains visible and is usually presented horizontally.

<a href="#menuitem" class="role-reference"><code>menuitem</code></a>  
An option in a set of choices contained by a <a href="#menu" class="role-reference"><code>menu</code></a> or <a href="#menubar" class="role-reference"><code>menubar</code></a>.

<a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a>  
A <a href="#menuitem" class="role-reference"><code>menuitem</code></a> with a checkable state whose possible values are `true`, `false`, or `mixed`.

<a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a>  
A checkable <a href="#menuitem" class="role-reference"><code>menuitem</code></a> in a set of elements with the same role, only one of which can be checked at a time.

<a href="#navigation" class="role-reference"><code>navigation</code></a>  
A collection of navigational <a href="#dfn-element" class="internalDFN">elements</a> (usually links) for navigating the document or related documents.

<a href="#none" class="role-reference"><code>none</code></a>  
An <a href="#dfn-element" class="internalDFN">element</a> whose implicit native role semantics will not be mapped to the <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a>. See synonym <a href="#presentation" class="role-reference"><code>presentation</code></a>.

<a href="#note" class="role-reference"><code>note</code></a>  
A section whose content is parenthetic or ancillary to the main content of the resource.

<a href="#option" class="role-reference"><code>option</code></a>  
A selectable item in a <a href="#select" class="role-reference"><code>select</code></a> list.

<a href="#presentation" class="role-reference"><code>presentation</code></a>  
An <a href="#dfn-element" class="internalDFN">element</a> whose implicit native role semantics will not be mapped to the <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a>. See synonym <a href="#none" class="role-reference"><code>none</code></a>.

<a href="#progressbar" class="role-reference"><code>progressbar</code></a>  
An <a href="#dfn-element" class="internalDFN">element</a> that displays the progress status for tasks that take a long time.

<a href="#radio" class="role-reference"><code>radio</code></a>  
A checkable input in a group of elements with the same role, only one of which can be checked at a time.

<a href="#radiogroup" class="role-reference"><code>radiogroup</code></a>  
A group of <a href="#radio" class="role-reference"><code>radio</code></a> buttons.

<a href="#range" class="role-reference"><code>range</code> (abstract role)</a>   
An input representing a range of values that can be set by the user.

<a href="#region" class="role-reference"><code>region</code></a>  
A perceivable <a href="#section" class="role-reference"><code>section</code></a> containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page. Such a page summary could be generated dynamically by a user agent or assistive technology.

<a href="#roletype" class="role-reference"><code>roletype</code> (abstract role)</a>   
The base <a href="#dfn-role" class="internalDFN">role</a> from which all other roles in this <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a> inherit.

<a href="#row" class="role-reference"><code>row</code></a>  
A row of cells in a tabular container.

<a href="#rowgroup" class="role-reference"><code>rowgroup</code></a>  
A structure containing one or more row elements in a tabular container.

<a href="#rowheader" class="role-reference"><code>rowheader</code></a>  
A cell containing header information for a row in a grid.

<a href="#scrollbar" class="role-reference"><code>scrollbar</code></a>  
A graphical object that controls the scrolling of content within a viewing area, regardless of whether the content is fully displayed within the viewing area.

<a href="#search" class="role-reference"><code>search</code></a>  
A <a href="#landmark" class="role-reference"><code>landmark</code></a> region that contains a collection of items and objects that, as a whole, combine to create a search facility. See related <a href="#form" class="role-reference"><code>form</code></a> and <a href="#searchbox" class="role-reference"><code>searchbox</code></a>.

<a href="#searchbox" class="role-reference"><code>searchbox</code></a>  
A type of textbox intended for specifying search criteria. See related <a href="#textbox" class="role-reference"><code>textbox</code></a> and <a href="#search" class="role-reference"><code>search</code></a>.

<a href="#section" class="role-reference"><code>section</code> (abstract role)</a>   
A renderable structural containment unit in a document or application.

<a href="#sectionhead" class="role-reference"><code>sectionhead</code> (abstract role)</a>   
A structure that labels or summarizes the topic of its related section.

<a href="#select" class="role-reference"><code>select</code> (abstract role)</a>   
A form widget that allows the user to make selections from a set of choices.

<a href="#separator" class="role-reference"><code>separator</code></a>  
A divider that separates and distinguishes sections of content or groups of menuitems.

<a href="#slider" class="role-reference"><code>slider</code></a>  
A user input where the user selects a value from within a given range.

<a href="#spinbutton" class="role-reference"><code>spinbutton</code></a>  
A form of <a href="#range" class="role-reference"><code>range</code></a> that expects the user to select from among discrete choices.

<a href="#status" class="role-reference"><code>status</code></a>  
A type of <a href="#dfn-live-region" class="internalDFN">live region</a> whose content is advisory information for the user but is not important enough to justify an <a href="#alert" class="role-reference"><code>alert</code></a>, often but not necessarily presented as a status bar.

<a href="#structure" class="role-reference"><code>structure</code> (abstract role)</a>   
A document structural <a href="#dfn-element" class="internalDFN">element</a>.

<a href="#switch" class="role-reference"><code>switch</code></a>  
A type of checkbox that represents on/off values, as opposed to checked/unchecked values. See related <a href="#checkbox" class="role-reference"><code>checkbox</code></a>.

<a href="#tab" class="role-reference"><code>tab</code></a>  
A grouping label providing a mechanism for selecting the tab content that is to be rendered to the user.

<a href="#table" class="role-reference"><code>table</code></a>  
A <a href="#section" class="role-reference"><code>section</code></a> containing data arranged in rows and columns. See related <a href="#grid" class="role-reference"><code>grid</code></a>.

<a href="#tablist" class="role-reference"><code>tablist</code></a>  
A list of <a href="#tab" class="role-reference"><code>tab</code></a> <a href="#dfn-element" class="internalDFN">elements</a>, which are references to <a href="#tabpanel" class="role-reference"><code>tabpanel</code></a> elements.

<a href="#tabpanel" class="role-reference"><code>tabpanel</code></a>  
A container for the resources associated with a <a href="#tab" class="role-reference"><code>tab</code></a>, where each <a href="#tab" class="role-reference"><code>tab</code></a> is contained in a <a href="#tablist" class="role-reference"><code>tablist</code></a>.

<a href="#term" class="role-reference"><code>term</code></a>  
A word or phrase with a corresponding definition. See related <a href="#definition" class="role-reference"><code>definition</code></a>.

<a href="#textbox" class="role-reference"><code>textbox</code></a>  
A type of input that allows free-form text as its value.

<a href="#timer" class="role-reference"><code>timer</code></a>  
A type of <a href="#dfn-live-region" class="internalDFN">live region</a> containing a numerical counter which indicates an amount of elapsed time from a start point, or the time remaining until an end point.

<a href="#toolbar" class="role-reference"><code>toolbar</code></a>  
A collection of commonly used function buttons or controls represented in compact visual form.

<a href="#tooltip" class="role-reference"><code>tooltip</code></a>  
A contextual popup that displays a description for an element.

<a href="#tree" class="role-reference"><code>tree</code></a>  
A type of <a href="#list" class="role-reference"><code>list</code></a> that may contain sub-level nested groups that can be collapsed and expanded.

<a href="#treegrid" class="role-reference"><code>treegrid</code></a>  
A <a href="#grid" class="role-reference"><code>grid</code></a> whose rows can be expanded and collapsed in the same manner as for a <a href="#tree" class="role-reference"><code>tree</code></a>.

<a href="#treeitem" class="role-reference"><code>treeitem</code></a>  
An option item of a <a href="#tree" class="role-reference"><code>tree</code></a>. This is an <a href="#dfn-element" class="internalDFN">element</a> within a tree that may be expanded or collapsed if it contains a sub-level group of tree item elements.

<a href="#widget" class="role-reference"><code>widget</code> (abstract role)</a>   
An interactive component of a graphical user interface (GUI).

<a href="#window" class="role-reference"><code>window</code> (abstract role)</a>   
A browser or application window.

#### <span property="xhv:role" resource="xhv:heading">`alert` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="alert (role)">§</span>](#alert "Permalink for alert (role)")</span></span>

A type of <a href="#dfn-live-region" class="internalDFN">live region</a> with important, and usually time-sensitive, information. See related <a href="#alertdialog" class="role-reference"><code>alertdialog</code></a> and <a href="#status" class="role-reference"><code>status</code></a>.

Alerts are used to convey messages to alert the user. In the case of audio warnings this is an accessible alternative for a hearing-impaired user. The `alert` <a href="#dfn-role" class="internalDFN">role</a> goes on the node containing the alert message. Alerts are specialized forms of the `status` role, which will be processed as an atomic <a href="#dfn-live-region" class="internalDFN">live region</a>.

Alerts are assertive live regions and will be processed as such by assistive technologies. Neither authors nor user agents are required to set or manage focus to them in order for them to be processed. Since alerts are not required to receive focus, content authors *SHOULD NOT* require users to close an alert. If the operating system allows, the <a href="#dfn-user-agent" class="internalDFN">user agent</a> *SHOULD* fire a system alert <a href="#dfn-event" class="internalDFN">event</a> through the accessibility API when the WAI-ARIA alert is created. If an alert requires focus to close the alert, then content authors *SHOULD* use `alertdialog` instead.

Elements with the role `alert` have an implicit <a href="#aria-live" class="property-reference"><code>aria-live</code></a> value of `assertive`, and an implicit <a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a> value of `true`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#alertdialog" class="role-reference"><code>alertdialog</code></a></li></ul></td></tr><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/#ui-common-elements-alert">XForms alert</a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-live" class="property-reference"><code>aria-live</code></a> is <code class="sourceCode default">assertive</code>.<br />
Default for <a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a> is <code class="sourceCode default">true</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`alertdialog` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="alertdialog (role)">§</span>](#alertdialog "Permalink for alertdialog (role)")</span></span>

A type of dialog that contains an alert message, where initial focus goes to an <a href="#dfn-element" class="internalDFN">element</a> within the dialog. See related <a href="#alert" class="role-reference"><code>alert</code></a> and <a href="#dialog" class="role-reference"><code>dialog</code></a>.

Alert dialogs are used to convey messages to alert the user. The `alertdialog` <a href="#dfn-role" class="internalDFN">role</a> goes on the node containing both the alert message and the rest of the dialog. Content authors *SHOULD* make alert dialogs modal by ensuring that, while the `alertdialog` is shown, keyboard and mouse interactions only operate within the dialog. See <a href="#aria-modal" class="property-reference"><code>aria-modal</code></a>.

Unlike `alert`, `alertdialog` can receive a response from the user. For example, to confirm that the user understands the alert being generated. When the alert dialog is displayed, authors *SHOULD* set focus to an active element within the alert dialog, such as a form edit field or an OK button. The <a href="#dfn-user-agent" class="internalDFN">user agent</a> *SHOULD* fire a system alert <a href="#dfn-event" class="internalDFN">event</a> through the accessibility API when the alert is created, provided one is specified by the intended <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a>.

Authors *SHOULD* use <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a> on an `alertdialog` to reference the alert message element in the dialog. If they do not, an <a href="#dfn-assistive-technology" class="internalDFN">assistive technology</a> can resort to its internal recovery mechanism to determine the contents of the alert message.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#alert" class="role-reference"><code>alert</code></a></li><li><a href="#dialog" class="role-reference"><code>dialog</code></a></li></ul></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/#ui-common-elements-alert">XForms alert</a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-modal" class="property-reference"><code>aria-modal</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`application` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="application (role)">§</span>](#application "Permalink for application (role)")</span></span>

A <a href="#structure" class="role-reference"><code>structure</code></a> containing one or more focusable elements requiring user input, such as keyboard or gesture events, that do not follow a standard interaction pattern supported by a <a href="#widget" class="role-reference"><code>widget</code></a> role.

Some <a href="#dfn-user-agent" class="internalDFN">user agents</a> and <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> have a browse mode where standard input events, such as up and down arrow key events, are intercepted and used to control a reading cursor. This browse mode behavior prevents elements that do not have a `widget` role from receiving and using such keyboard and gesture events to provide interactive functionality.

When there is a need to create an element with an interaction model that is not supported by any of the WAI-ARIA `widget` roles, authors *MAY* give that element role `application`. And, when a user navigates into an element with role `application`, <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> that intercept standard input events *SHOULD* switch to a mode that passes most or all standard input events through to the web application.

For example, a presentation slide editor uses arrow keys to change the positions of textbox and image elements on the slide. There are not any WAI-ARIA `widget` roles that correspond to such an interaction model so an author could give the slide container role `application`, an <a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a> of "Slide Editor", and use <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a> to provide instructions.

Because only the focusable elements contained in an `application` element are accessible to users of some assistive technologies, authors *MUST* use one of the following techniques to ensure all non-decorative static text or image content inside an application is accessible:

1.  Associate the content with a focusable element using <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a> or `aria-describedby`.
2.  Place the content in a focusable element that has role <a href="#document" class="role-reference"><code>document</code></a> or <a href="#article" class="role-reference"><code>article</code></a>.
3.  Manage focus of descendants as described in [Managing Focus](#managingfocus), updating the value of <a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a> to reference the <a href="#dfn-element" class="internalDFN">element</a> containing the focused content.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#structure" class="role-reference"><code>structure</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/di-gloss/#def-delivery-unit">Device Independence Delivery Unit</a></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`article` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="article (role)">§</span>](#article "Permalink for article (role)")</span></span>

A section of a page that consists of a composition that forms an independent part of a document, page, or site.

An article is not a navigational <a href="#dfn-landmark" class="internalDFN">landmark</a>, but may be nested to form a discussion where assistive technologies could pay attention to article nesting to assist the user in following the discussion. An article could be a forum post, a magazine or newspaper article, a web log entry, a user-submitted comment, or any other independent item of content. It is *independent* in that its contents could stand alone, for example in syndication. However, the <a href="#dfn-element" class="internalDFN">element</a> is still associated with its ancestors; for instance, contact information that applies to a parent body element still covers the article as well. When nesting articles, the child articles represent content that is related to the content of the parent article. For instance, a web log entry on a site that accepts user-submitted comments could represent the comments as articles nested within the article for the web log entry. Author, heading, date, or other information associated with an article does not apply to nested articles.

When the user navigates to an element assigned the role of `article`, <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> that typically intercept standard keyboard events *SHOULD* switch to document browsing mode, as opposed to passing keyboard events through to the web application. Assistive technologies *MAY* provide a feature allowing the user to navigate the hierarchy of any nested `article` elements.

When an `article` is in the context of a <a href="#feed" class="role-reference"><code>feed</code></a>, the author *MAY* specify values for <a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a> and <a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a>.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#document" class="role-reference"><code>document</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/html5/sections.html#the-article-element">HTML <code>article</code></a></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a></li><li><a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`banner` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="banner (role)">§</span>](#banner "Permalink for banner (role)")</span></span>

A region that contains mostly site-oriented content, rather than page-specific content.

Site-oriented content typically includes things such as the logo or identity of the site sponsor, and a site-specific search tool. A banner usually appears at the top of the page and typically spans the full width.

User agents *SHOULD* treat elements with the role of `banner` as navigational <a href="#dfn-landmark" class="internalDFN">landmarks</a>.

Within any <a href="#document" class="role-reference"><code>document</code></a> or <a href="#application" class="role-reference"><code>application</code></a>, the author *SHOULD* mark no more than one <a href="#dfn-element" class="internalDFN">element</a> with the `banner` <a href="#dfn-role" class="internalDFN">role</a>.

Note

Because `document` and `application` elements can be nested in the DOM, they may have multiple `banner` elements as DOM descendants, assuming each of those is associated with different document nodes, either by a DOM nesting (e.g., `document` within `document`) or by use of the <a href="#aria-owns" class="property-reference"><code>aria-owns</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a>.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#landmark" class="role-reference"><code>landmark</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`button` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="button (role)">§</span>](#button "Permalink for button (role)")</span></span>

An input that allows for user-triggered actions when clicked or pressed. See related <a href="#link" class="role-reference"><code>link</code></a>.

Buttons are mostly used for discrete actions. Standardizing the appearance of buttons enhances the user's recognition of the <a href="#dfn-widget" class="internalDFN">widgets</a> as buttons and allows for a more compact display in toolbars.

Buttons support the optional <a href="#dfn-attribute" class="internalDFN">attribute</a> <a href="#aria-pressed" class="state-reference"><code>aria-pressed</code></a>. Buttons with a non-empty `aria-pressed` attribute are toggle buttons. When `aria-pressed` is `true` the button is in a "pressed" <a href="#dfn-state" class="internalDFN">state</a>, when `aria-pressed` is `false` it is not pressed. If the attribute is not present, the button is a simple command button.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#command" class="role-reference"><code>command</code></a></td></tr><tr class="even"><td>Base Concept:</td><td><a href="https://www.w3.org/TR/html5/sec-forms.html#the-button-element">HTML <code>button</code></a></td></tr><tr class="odd"><td>Related Concepts:</td><td><ul><li><a href="#link" class="role-reference"><code>link</code></a></li><li><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/#ui-button">XForms trigger</a></li></ul></td></tr><tr class="even"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a></li><li><a href="#aria-pressed" class="state-reference"><code>aria-pressed</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr><tr class="even"><td>Children Presentational:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`cell` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="cell (role)">§</span>](#cell "Permalink for cell (role)")</span></span>

A cell in a tabular container. See related <a href="#gridcell" class="role-reference"><code>gridcell</code></a>.

Authors *MUST* ensure <a href="#dfn-element" class="internalDFN">elements</a> with <a href="#dfn-role" class="internalDFN">role</a> cell are contained in, or owned by, an element with the <a href="#dfn-role" class="internalDFN">role</a> <a href="#row" class="role-reference"><code>row</code></a>.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#columnheader" class="role-reference"><code>columnheader</code></a></li><li><a href="#gridcell" class="role-reference"><code>gridcell</code></a></li><li><a href="#rowheader" class="role-reference"><code>rowheader</code></a></li></ul></td></tr><tr class="odd"><td>Base Concept:</td><td><a href="https://www.w3.org/TR/html5/tabular-data.html#the-td-element">HTML <code>td</code></a></td></tr><tr class="even"><td>Required Context Role:</td><td><a href="#row" class="role-reference"><code>row</code></a></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-colindex" class="property-reference"><code>aria-colindex</code></a></li><li><a href="#aria-colspan" class="property-reference"><code>aria-colspan</code></a></li><li><a href="#aria-rowindex" class="property-reference"><code>aria-rowindex</code></a></li><li><a href="#aria-rowspan" class="property-reference"><code>aria-rowspan</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`checkbox` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="checkbox (role)">§</span>](#checkbox "Permalink for checkbox (role)")</span></span>

A checkable input that has three possible values: `true`, `false`, or `mixed`.

The <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> of a `checkbox` indicates whether the input is checked (`true`), unchecked (`false`), or represents a group of <a href="#dfn-element" class="internalDFN">elements</a> that have a mixture of checked and unchecked values (`mixed`). Many checkboxes do not use the `mixed` value, and thus are effectively boolean checkboxes.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#input" class="role-reference"><code>input</code></a></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a></li><li><a href="#switch" class="role-reference"><code>switch</code></a></li></ul></td></tr><tr class="odd"><td>Related Concepts:</td><td><ul><li><a href="https://www.w3.org/TR/html5/sec-forms.html#checkbox-state-typecheckbox">HTML <code>input[type="checkbox"]</code></a></li><li><a href="#option" class="role-reference"><code>option</code></a></li></ul></td></tr><tr class="even"><td>Required States and Properties:</td><td><ul><li><a href="#aria-checked" class="state-reference"><code>aria-checked</code></a></li></ul></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr><tr class="odd"><td>Children Presentational:</td><td>True</td></tr><tr class="even"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> is <code class="sourceCode default">false</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`columnheader` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="columnheader (role)">§</span>](#columnheader "Permalink for columnheader (role)")</span></span>

A cell containing header information for a column.

`columnheader` can be used as a column header in a table or grid. It could also be used in a pie chart to show a similar <a href="#dfn-relationship" class="internalDFN">relationship</a> in the data.

The `columnheader` establishes a relationship between it and all cells in the corresponding column. It is the structural equivalent to an HTML `th` <a href="#dfn-element" class="internalDFN">element</a> with a column scope.

Authors *MUST* ensure <a href="#dfn-element" class="internalDFN">elements</a> with <a href="#dfn-role" class="internalDFN">role</a> `columnheader` are contained in, or owned by, an element with the role <a href="#row" class="role-reference"><code>row</code></a>.

Applying the <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a> state on a columnheader *MUST* not cause the user agent to automatically propagate the `aria-selected` state to all the cells in the corresponding column. An author *MAY* choose to propagate selection in this manner depending on the specific application.

While the `columnheader` role can be used in both interactive grids and non-interactive tables, the use of <a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a> and <a href="#aria-required" class="property-reference"><code>aria-required</code></a> is only applicable to interactive elements. Therefore, authors *SHOULD NOT* use `aria-required` or `aria-readonly` in a `columnheader` that descends from a <a href="#table" class="role-reference"><code>table</code></a>, and user agents *SHOULD NOT* expose either property to <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> unless the `columnheader` descends from a <a href="#grid" class="role-reference"><code>grid</code></a>.

Note

Because cells are organized into rows, there is not a single container element for the column. The column is the set of <a href="#gridcell" class="role-reference"><code>gridcell</code></a> elements in a particular position within their respective `row` containers.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#cell" class="role-reference"><code>cell</code></a></li><li><a href="#gridcell" class="role-reference"><code>gridcell</code></a></li><li><a href="#sectionhead" class="role-reference"><code>sectionhead</code></a></li></ul></td></tr><tr class="even"><td>Base Concept:</td><td><a href="https://www.w3.org/TR/html5/tabular-data.html#element-attrdef-th-scope">HTML <code>th[scope="col"]</code></a></td></tr><tr class="odd"><td>Required Context Role:</td><td><a href="#row" class="role-reference"><code>row</code></a></td></tr><tr class="even"><td>Supported States and Properties:</td><td><a href="#aria-sort" class="property-reference"><code>aria-sort</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-colindex" class="property-reference"><code>aria-colindex</code></a></li><li><a href="#aria-colspan" class="property-reference"><code>aria-colspan</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-required" class="property-reference"><code>aria-required</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li><li><a href="#aria-rowindex" class="property-reference"><code>aria-rowindex</code></a></li><li><a href="#aria-rowspan" class="property-reference"><code>aria-rowspan</code></a></li><li><a href="#aria-selected" class="state-reference"><code>aria-selected (state)</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`combobox` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="combobox (role)">§</span>](#combobox "Permalink for combobox (role)")</span></span>

A composite <a href="#widget" class="role-reference"><code>widget</code></a> containing a single-line <a href="#textbox" class="role-reference"><code>textbox</code></a> and another element, such as a <a href="#listbox" class="role-reference"><code>listbox</code></a> or <a href="#grid" class="role-reference"><code>grid</code></a>, that can dynamically pop up to help the user set the value of the `textbox`.

Authors *MUST* ensure an element with role `combobox` contains or owns a text input element with role `textbox` or <a href="#searchbox" class="role-reference"><code>searchbox</code></a> and that the text input has <a href="#aria-multiline" class="property-reference"><code>aria-multiline</code></a> set to `false`. If the `combobox` provides autocompletion behavior for the text input as described in <a href="#aria-autocomplete" class="property-reference"><code>aria-autocomplete</code></a>, authors *MUST* set `aria-autocomplete` on the `textbox` element to the value that corresponds to the provided behavior.

Typically, the default state of a `combobox` is collapsed. In the collapsed state, only the `textbox` element of a `combobox` is visible. A `combobox` is said to be expanded when both the `textbox` and a secondary element that serves as its popup are visible. Authors *MUST* set <a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a> to `true` on an element with role `combobox` when it is expanded and `false` when it is collapsed. Elements with the role `combobox` have an implicit `aria-expanded` value of `false`.

When a `combobox` is expanded, authors *MUST* ensure it contains or owns an element that has a role of `listbox`, <a href="#tree" class="role-reference"><code>tree</code></a>, `grid`, or <a href="#dialog" class="role-reference"><code>dialog</code></a>. This element is the `combobox` popup. When the `combobox` is expanded, authors *MUST* set <a href="#aria-controls" class="property-reference"><code>aria-controls</code></a> on the `textbox` element to a value that refers to the `combobox` popup element.

Elements with the role `combobox` have an implicit <a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a> value of `listbox`. If the `combobox` popup element has a role other than `listbox`, authors *MUST* specify a value for `aria-haspopup` that corresponds to the type of its popup.

To be <a href="#dfn-keyboard-accessible" class="internalDFN">keyboard accessible</a>, authors *SHOULD* manage focus of descendants for all instances of this <a href="#dfn-role" class="internalDFN">role</a>, as described in [Managing Focus](#managingfocus). When a `combobox` receives focus, authors *SHOULD* ensure focus is placed on the `textbox` element.

Authors *SHOULD* provide keyboard mechanisms for moving focus between the `textbox` element and the elements contained in the popup. For example, one common convention is that Down Arrow moves focus from the text input to the first focusable descendant of the popup element. If the popup element supports <a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a>, in lieu of moving focus, such keyboard mechanisms can control the value of `aria-activedescendant` on the `textbox` element. When a descendant of the popup element is active, authors *MAY* set `aria-activedescendant` on the `textbox` to a value that refers to the active element within the popup while focus remains on the `textbox` element.

Example 5

    <div aria-label="Tag" role="combobox" aria-expanded="true" aria-owns="owned_listbox" aria-haspopup="listbox">
        <input type="text" aria-autocomplete="list" aria-controls="owned_listbox" aria-activedescendant="selected_option">
    </div>
    <ul role="listbox" id="owned_listbox">
        <li role="option">Zebra</li>
        <li role="option" id="selected_option">Zoom</li>
    </ul>

The ARIA 1.0 specification describes a `combobox` pattern where a text input element has the `combobox` role and owns a `listbox` element. <a href="#dfn-user-agent" class="internalDFN">User agents</a>, <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>, and conformance checkers *SHOULD* continue to support the ARIA 1.0 pattern so that existing implementations of the ARIA 1.0 pattern remain functional.

The features and behaviors of combobox implementations vary widely. Consequently, there are many important authoring considerations. See the [WAI-ARIA Authoring Practices Guide](https://www.w3.org/TR/wai-aria-practices/) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\] for additional details on implementing combobox design patterns.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#select" class="role-reference"><code>select</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><ul><li><a href="https://www.w3.org/TR/html5/sec-forms.html#the-select-element">HTML <code>select</code></a></li><li><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/#ui-selectMany">XForms select</a></li></ul></td></tr><tr class="odd"><td>Required Owned Elements:</td><td><a href="#textbox" class="role-reference"><code>textbox</code></a> and, when expanded, one of:<ul><li><a href="#listbox" class="role-reference"><code>listbox</code></a></li><li><a href="#tree" class="role-reference"><code>tree</code></a></li><li><a href="#grid" class="role-reference"><code>grid</code></a></li><li><a href="#dialog" class="role-reference"><code>dialog</code></a></li></ul></td></tr><tr class="even"><td>Required States and Properties:</td><td><ul><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a></li></ul></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-autocomplete" class="property-reference"><code>aria-autocomplete</code></a></li><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li><li><a href="#aria-required" class="property-reference"><code>aria-required</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr><tr class="odd"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a> is <code class="sourceCode default">false</code>.<br />
Default for <a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a> is <code class="sourceCode default">listbox</code>.<br />
</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`command` <span class="type-indicator">(abstract role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="command (abstract role)">§</span>](#command "Permalink for command (abstract role)")</span></span>

A form of widget that performs an action but does not receive input data.

Note

`command` is an abstract role used for the ontology. Authors should not use this role in content.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Is Abstract:</td><td>True</td></tr><tr class="even"><td>Superclass Role:</td><td><a href="#widget" class="role-reference"><code>widget</code></a></td></tr><tr class="odd"><td>Subclass Roles:</td><td><ul><li><a href="#button" class="role-reference"><code>button</code></a></li><li><a href="#link" class="role-reference"><code>link</code></a></li><li><a href="#menuitem" class="role-reference"><code>menuitem</code></a></li></ul></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/html51/interactive-elements.html#the-menuitem-element"><code>menuitem</code></a> in [<a href="#bib-html51" class="bibref">html51</a>]</td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`complementary` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="complementary (role)">§</span>](#complementary "Permalink for complementary (role)")</span></span>

A supporting section of the document, designed to be complementary to the main content at a similar level in the DOM hierarchy, but remains meaningful when separated from the main content.

There are various types of content that would appropriately have this <a href="#dfn-role" class="internalDFN">role</a>. For example, in the case of a portal, this may include but not be limited to show times, current weather, related articles, or stocks to watch. The complementary role indicates that contained content is relevant to the main content. If the complementary content is completely separable from the main content, it may be appropriate to use a more general role.

User agents *SHOULD* treat elements with the role of `complementary` as navigational <a href="#dfn-landmark" class="internalDFN">landmarks</a>.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#landmark" class="role-reference"><code>landmark</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`composite` <span class="type-indicator">(abstract role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="composite (abstract role)">§</span>](#composite "Permalink for composite (abstract role)")</span></span>

A <a href="#dfn-widget" class="internalDFN">widget</a> that may contain navigable descendants or owned children.

Authors *SHOULD* ensure that a composite widget exists as a single navigation stop within the larger navigation system of the web page. Once the composite widget has focus, authors *SHOULD* provide a separate navigation mechanism for users to navigate to <a href="#dfn-element" class="internalDFN">elements</a> that are descendants or owned children of the composite element.

Note

`composite` is an abstract role used for the ontology. Authors should not use this role in content.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Is Abstract:</td><td>True</td></tr><tr class="even"><td>Superclass Role:</td><td><a href="#widget" class="role-reference"><code>widget</code></a></td></tr><tr class="odd"><td>Subclass Roles:</td><td><ul><li><a href="#grid" class="role-reference"><code>grid</code></a></li><li><a href="#select" class="role-reference"><code>select</code></a></li><li><a href="#spinbutton" class="role-reference"><code>spinbutton</code></a></li><li><a href="#tablist" class="role-reference"><code>tablist</code></a></li></ul></td></tr><tr class="even"><td>Supported States and Properties:</td><td><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`contentinfo` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="contentinfo (role)">§</span>](#contentinfo "Permalink for contentinfo (role)")</span></span>

A large perceivable region that contains information about the parent document.

Examples of information included in this region of the page are copyrights and links to privacy statements.

User agents *SHOULD* treat elements with the role of `contentinfo` as navigational <a href="#dfn-landmark" class="internalDFN">landmarks</a>.

Within any <a href="#document" class="role-reference"><code>document</code></a> or <a href="#application" class="role-reference"><code>application</code></a>, the author *SHOULD* mark no more than one <a href="#dfn-element" class="internalDFN">element</a> with the `contentinfo` role.

Note

Because `document` and `application` elements can be nested in the DOM, they may have multiple `contentinfo` elements as DOM descendants, assuming each of those is associated with different document nodes, either by a DOM nesting (e.g., `document` within `document`) or by use of the <a href="#aria-owns" class="property-reference"><code>aria-owns</code></a> attribute.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#landmark" class="role-reference"><code>landmark</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`definition` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="definition (role)">§</span>](#definition "Permalink for definition (role)")</span></span>

A definition of a term or concept. See related <a href="#term" class="role-reference"><code>term</code></a>.

Authors *SHOULD* identify the <a href="#dfn-element" class="internalDFN">element</a> being defined by giving that element a role of `term` and referencing it with the <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a>.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><ul><li><a href="https://www.w3.org/TR/html5/grouping-content.html#the-dd-element">HTML <code>dd</code></a></li><li><a href="https://www.w3.org/TR/html5/textlevel-semantics.html#the-dfn-element">HTML <code>dfn</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`dialog` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="dialog (role)">§</span>](#dialog "Permalink for dialog (role)")</span></span>

A dialog is a descendant window of the primary window of a web application. For HTML pages, the primary application window is the entire web document, i.e., the `body` element.

Dialogs are most often used to prompt the user to enter or respond to information. A dialog that is designed to interrupt workflow is usually modal. See related <a href="#alertdialog" class="role-reference"><code>alertdialog</code></a>.

Authors *SHOULD* provide a dialog label, which can be done with the <a href="#aria-label" class="property-reference"><code>aria-label</code></a> or <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a> attribute.

Authors *SHOULD* ensure that all dialogs (both modal and non-modal) have at least one focusable descendant element. Authors *SHOULD* focus an element in the modal dialog when it is displayed, and authors *SHOULD* manage focus of modal dialogs.

Note

In the description of this role, the term "web application" does not refer to the <a href="#application" class="role-reference"><code>application</code></a> role, which specifies specific assistive technology behaviors.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#window" class="role-reference"><code>window</code></a></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#alertdialog" class="role-reference"><code>alertdialog</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-modal" class="property-reference"><code>aria-modal</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`directory` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="directory (role)">§</span>](#directory "Permalink for directory (role)")</span></span>

A list of references to members of a group, such as a static table of contents.

Authors *SHOULD* use this <a href="#dfn-role" class="internalDFN">role</a> for a static table of contents, whether linked or unlinked. This includes tables of contents built with lists, including nested lists. Dynamic tables of contents, however, might use a <a href="#tree" class="role-reference"><code>tree</code></a> role instead.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#list" class="role-reference"><code>list</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="http://www.daisy.org/z3986/2005/Z3986-2005.html#Guide">DAISY Guide</a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`document` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="document (role)">§</span>](#document "Permalink for document (role)")</span></span>

An <a href="#dfn-element" class="internalDFN">element</a> containing content that <a href="#dfn-assistive-technology" class="internalDFN">assistive technology</a> users may want to browse in a reading mode.

When <a href="#dfn-user-agent" class="internalDFN">user agent</a> focus moves to an element assigned the role of `document`, <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> having a reading mode for browsing static content *MAY* switch to that reading mode and intercept standard input events, such as Up or Down arrow keyboard events, to control the reading cursor.

Because <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> that have a reading mode default to that mode for all elements except for those with either a <a href="#widget" class="role-reference"><code>widget</code></a> or <a href="#application" class="role-reference"><code>application</code></a> role, the only circumstance where the `document` role is useful for changing assistive technology behavior is when the element with role `document` is a focusable child element of a `widget` or `application`. For example, given an `application` element which contains some static rich text, the author can apply role `document` to the element containing the text and give it a `tabindex` of `0`. When a screen reader user presses the Tab key and places focus on the `document` element, the user will be able to read the text with the screen reader's reading cursor.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#structure" class="role-reference"><code>structure</code></a></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#article" class="role-reference"><code>article</code></a></li></ul></td></tr><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/di-gloss/#def-delivery-unit">Device Independence Delivery Unit</a></td></tr><tr class="even"><td>Supported States and Properties:</td><td><a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>False</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`feed` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="feed (role)">§</span>](#feed "Permalink for feed (role)")</span></span>

A scrollable <a href="#list" class="role-reference"><code>list</code></a> of <a href="#article" class="role-reference"><code>articles</code></a> where scrolling may cause articles to be added to or removed from either end of the list.

A `feed` enables users of <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> that have a document browse mode, such as screen readers, to use the browse mode reading cursor to both read and scroll through a stream of rich content that may continue scrolling infinitely by loading more content as the user reads. In a `feed`, <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> provide a web application with signals of the user's reading cursor movement by moving <a href="#dfn-user-agent" class="internalDFN">user agent</a> focus, enabling the application to both add new content and visually position content as the user browses the page. The `feed` also lets authors inform assistive technologies when additions and removals are occurring so assistive technologies can more reliably update their reading view without disrupting reading or degrading performance.

For example, a `feed` could be used to present a stream of news stories where each `article` contains a story with text, links, images, and comments as well as widgets for sharing and commenting. As a screen reader user reads and interacts with each story and moves the screen reader reading cursor from story to story, each story scrolls into view and, as needed, new stories are loaded.

A `feed` is a container element whose children have role `article`. When articles are added or removed from either or both ends of a `feed`, authors *SHOULD* set <a href="#aria-busy" class="state-reference"><code>aria-busy</code></a> to `true` on the `feed` element before the changes are made and set it to `false` after the changes are complete. Authors *SHOULD* avoid inserting or removing articles in the middle of a `feed`. These requirements help <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> gracefully respond to changes in the `feed` content that occur simultaneously with user commands to move the reading cursor within the `feed`.

Authors *SHOULD* make each `article` in a `feed` focusable and ensure that the application scrolls an `article` into view when <a href="#dfn-user-agent" class="internalDFN">user agent</a> focus is set on the `article` or one of its descendant elements. For example, in HTML, each `article` element should have a `tabindex` value of either `-1` or `0`.

When an <a href="#dfn-assistive-technology" class="internalDFN">assistive technology</a> reading cursor moves from one `article` to another, <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> *SHOULD* set user agent focus on the `article` that contains the reading cursor. If the reading cursor lands on a focusable element inside the `article`, the assistive technology *MAY* set focus on that element in lieu of setting focus on the containing `article`.

Because the ability to scroll to another `article` with an <a href="#dfn-assistive-technology" class="internalDFN">assistive technology</a> reading cursor depends on the presence of another `article` in the page, authors *SHOULD* attempt to load additional articles before <a href="#dfn-user-agent" class="internalDFN">user agent</a> focus reaches an `article` at either end of the set of articles that has been loaded. Alternatively, authors *MAY* include an `article` at either or both ends of the loaded set of articles that includes an element, such as a <a href="#button" class="role-reference"><code>button</code></a>, that lets the user request more articles to be loaded.

In addition to providing a brief label, authors *MAY* apply <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a> to `article` elements in a `feed` to suggest to screen readers which elements to speak after the label when users navigate by `article`. Screen readers *MAY* provide users with a way to quickly scan `feed` content by speaking both the label and accessible description when navigating by `article`, enabling the user to ignore repetitive or less important elements, such as embedded interaction widgets, that the author has left out of the description.

Authors *SHOULD* provide keyboard commands for moving focus among articles in a `feed` so users who do not utilize an assistive technology that provides `article` navigation features can use the keyboard to navigate the `feed`.

If the number of articles available in a `feed` supply is static, authors *MAY* specify <a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a> on `article` elements in that `feed`. However, if the total number is extremely large, indefinite, or changes often, authors *MAY* set `aria-setsize` to `-1` to communicate the unknown size of the set.

See the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\] for additional details on implementing a feed design pattern.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#list" class="role-reference"><code>list</code></a></td></tr><tr class="even"><td>Required Owned Elements:</td><td><a href="#article" class="role-reference"><code>article</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>False</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`figure` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="figure (role)">§</span>](#figure "Permalink for figure (role)")</span></span>

A perceivable <a href="#section" class="role-reference"><code>section</code></a> of content that typically contains a <a href="#dfn-graphical-document" class="internalDFN">graphical document</a>, images, code snippets, or example text. The parts of a `figure` *MAY* be user-navigable.

Authors *SHOULD* provide a reference to the `figure` from the main text, but the `figure` need not be displayed at the same location as the referencing element. Authors *MAY* reference text serving as a caption using <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a>. Authors *MAY* provide a label using <a href="#aria-label" class="property-reference"><code>aria-label</code></a> or *MAY* reference text serving as a label using <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a>.

<a href="#dfn-assistive-technology" class="internalDFN">Assistive technologies</a> *SHOULD* enable users to quickly navigate to figures. Mainstream <a href="#dfn-user-agent" class="internalDFN">user agents</a> *MAY* enable users to quickly navigate to figures.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/html5/grouping-content.html#the-figure-element">HTML <code>figure</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>False</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`form` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="form (role)">§</span>](#form "Permalink for form (role)")</span></span>

A <a href="#landmark" class="role-reference"><code>landmark</code></a> region that contains a collection of items and objects that, as a whole, combine to create a form. See related <a href="#search" class="role-reference"><code>search</code></a>.

A form may be a mix of host language form controls, scripted controls, and hyperlinks. Authors are reminded to use native host language semantics to create form controls, whenever possible. For search facilities, authors *SHOULD* use the `search` role and not the generic `form` role. Authors *SHOULD* provide a visible label for the form referenced with <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a>. If an author uses a script to submit a form based on a user action that would otherwise not trigger an `onsubmit` event (for example, a form submission triggered by the user changing a form element's value), the author *SHOULD* provide the user with advance notification of the behavior.

User agents *SHOULD* treat elements with the role of `form` as navigational <a href="#dfn-landmark" class="internalDFN">landmarks</a>.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#landmark" class="role-reference"><code>landmark</code></a></td></tr><tr class="even"><td>Base Concept:</td><td><a href="https://www.w3.org/TR/html5/sec-forms.html#the-form-element">HTML <code>form</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`grid` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="grid (role)">§</span>](#grid "Permalink for grid (role)")</span></span>

A composite <a href="#widget" class="role-reference"><code>widget</code></a> containing a collection of one or more rows with one or more cells where some or all cells in the grid are focusable by using methods of two-dimensional navigation, such as directional arrow keys.

The `grid` role does not imply a specific visual, e.g., tabular, presentation. It describes <a href="#dfn-relationship" class="internalDFN">relationships</a> among <a href="#dfn-element" class="internalDFN">elements</a>. It may be used for purposes as simple as grouping a collection of checkboxes or navigation links or as complex as creating a full-featured spreadsheet application.

The cell elements of a `grid` have role <a href="#gridcell" class="role-reference"><code>gridcell</code></a>. Authors *MAY* designate a cell as a row or column header by using either the <a href="#rowheader" class="role-reference"><code>rowheader</code></a> or <a href="#columnheader" class="role-reference"><code>columnheader</code></a> <a href="#dfn-role" class="internalDFN">role</a> in lieu of the `gridcell` role. Authors *MUST* ensure elements with role `gridcell`, `columnheader`, or `rowheader` are <a href="#dfn-owned-element" class="internalDFN">owned</a> by elements with role <a href="#row" class="role-reference"><code>row</code></a>, which are in turn owned by an element with role <a href="#rowgroup" class="role-reference"><code>rowgroup</code></a>, or `grid`.

To be <a href="#dfn-keyboard-accessible" class="internalDFN">keyboard accessible</a>, authors *SHOULD* manage focus of descendants of a `grid` as described in [Managing Focus](#managingfocus). When a user is navigating the `grid` content with a keyboard, authors *SHOULD* set focus as follows:

-   If a `gridcell` contains a single interactive `widget` that will not consume arrow key presses when it receives focus, such as a <a href="#checkbox" class="role-reference"><code>checkbox</code></a>, <a href="#button" class="role-reference"><code>button</code></a>, or <a href="#link" class="role-reference"><code>link</code></a>, authors *MAY* set focus on the interactive element contained in that cell. This allows the contained widget to be directly operable.
-   Otherwise, authors *SHOULD* ensure the element that receives focus is a `gridcell`, `rowheader`, or `columnheader` element.

Authors *SHOULD* provide a mechanism for changing to an interaction or edit mode that allows users to navigate and interact with content contained inside a focusable cell if that focusable cell contains any of the following:

-   a widget that requires arrow keys to operate, e.g., a <a href="#combobox" class="role-reference"><code>combobox</code></a> or <a href="#radiogroup" class="role-reference"><code>radiogroup</code></a>
-   multiple interactive elements
-   editable content

For example, if a cell in a spreadsheet contains a `combobox` or editable text, the Enter key might be used to activate a cell interaction or editing mode when that cell has focus so the directional arrow keys can be used to operate the contained `combobox` or <a href="#textbox" class="role-reference"><code>textbox</code></a>. Depending on the implementation, pressing Enter again, Tab, Escape, or another key may switch the application back to the grid navigation mode.

Authors *MAY* use a `gridcell` to display the result of a formula, which could be editable by the user. In a spreadsheet application, for example, a `gridcell` may show a value calculated from a formula until the user activates the `gridcell` for editing when a `textbox` appears in the `gridcell` containing the formula in an editable state.

If <a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a> is set on an element with role `grid`, <a href="#dfn-user-agent" class="internalDFN">user agents</a> *MUST* propagate the value to all `gridcell` elements owned by the `grid` and expose the value in the accessibility API. An author *MAY* override the propagated value of `aria-readonly` for an individual `gridcell` element.

In a `grid` that provides cell content editing functions, if the content of a focusable `gridcell` element is not editable, authors *MAY* set `aria-readonly` to `true` on the `gridcell` element. However, the value of `aria-readonly`, whether specified for a `grid` or individual cells, only indicates whether the content contained in cells is editable. It does not represent availability of functions for navigating or manipulating the `grid` itself.

An unspecified value for `aria-readonly` does not imply that a `grid` or a `gridcell` contains editable content. For example, if a `grid` presents a collection of elements that are not editable, such as a collection of `link` elements representing dates in a datepicker, it is not necessary for the author to specify a value for `aria-readonly`.

Authors *MAY* indicate that a focusable `gridcell` is selectable as the object of an action with the <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a> attribute. If the `grid` allows multiple `gridcell`s to be selected, the author *SHOULD* set <a href="#aria-multiselectable" class="property-reference"><code>aria-multiselectable</code></a> to `true` on the element with role `grid`.

Since WAI-ARIA can augment an element of the host language, a `grid` can reuse the elements and attributes of a native table, such as an HTML `table` element. For example, if an author applies the `grid` role to an HTML `table` element, the author does not need to apply the `row` and `gridcell` roles to the descendant HTML `tr` and `td` elements because the <a href="#dfn-user-agent" class="internalDFN">user agent</a> will automatically make the appropriate translations. When the author is reusing a native host language table element and needs a `gridcell` element to span multiple rows or columns, the author *SHOULD* apply the appropriate host language attributes instead of WAI-ARIA <a href="#aria-rowspan" class="property-reference"><code>aria-rowspan</code></a> or <a href="#aria-colspan" class="property-reference"><code>aria-colspan</code></a> properties.

See the [WAI-ARIA Authoring Practices Guide](https://www.w3.org/TR/wai-aria-practices-1.1/) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\] for additional details on implementing grid design patterns.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#composite" class="role-reference"><code>composite</code></a></li><li><a href="#table" class="role-reference"><code>table</code></a></li></ul></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#treegrid" class="role-reference"><code>treegrid</code></a></li></ul></td></tr><tr class="odd"><td>Base Concept:</td><td><a href="https://www.w3.org/TR/html5/tabular-data.html#the-table-element">HTML <code>table</code></a></td></tr><tr class="even"><td>Required Owned Elements:</td><td><ul><li><a href="#row" class="role-reference"><code>row</code></a></li><li><a href="#rowgroup" class="role-reference"><code>rowgroup</code></a> → <a href="#row" class="role-reference"><code>row</code></a></li></ul></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-level" class="property-reference"><code>aria-level</code></a></li><li><a href="#aria-multiselectable" class="property-reference"><code>aria-multiselectable</code></a></li><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-colcount" class="property-reference"><code>aria-colcount</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li><li><a href="#aria-rowcount" class="property-reference"><code>aria-rowcount</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`gridcell` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="gridcell (role)">§</span>](#gridcell "Permalink for gridcell (role)")</span></span>

A <a href="#cell" class="role-reference"><code>cell</code></a> in a <a href="#grid" class="role-reference"><code>grid</code></a> or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>.

A `gridcell` may be focusable, editable, and selectable. A `gridcell` may have <a href="#dfn-relationship" class="internalDFN">relationships</a> such as <a href="#aria-controls" class="property-reference"><code>aria-controls</code></a> to address the application of functional relationships.

If an author intends a `gridcell` to have a row header, column header, or both, and if the relevant headers cannot be determined from the DOM structure, authors *SHOULD* explicitly indicate which header cells are relevant to the `gridcell` by applying <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a> on the `gridcell` and referencing <a href="#dfn-element" class="internalDFN">elements</a> with <a href="#dfn-role" class="internalDFN">role</a> <a href="#rowheader" class="role-reference"><code>rowheader</code></a> or <a href="#columnheader" class="role-reference"><code>columnheader</code></a>.

In a `treegrid`, authors *MAY* define a `gridcell` as expandable by using the <a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a> attribute. If the `aria-expanded` attribute is provided, it applies only to the individual cell. It is not a proxy for the container <a href="#row" class="role-reference"><code>row</code></a>, which also can be expanded. The main use case for providing this attribute on a `gridcell` is pivot table behavior.

Authors *MUST* ensure <a href="#dfn-element" class="internalDFN">elements</a> with <a href="#dfn-role" class="internalDFN">role</a> gridcell are contained in, or owned by, an element with the <a href="#dfn-role" class="internalDFN">role</a> `row`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#cell" class="role-reference"><code>cell</code></a></li><li><a href="#widget" class="role-reference"><code>widget</code></a></li></ul></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#columnheader" class="role-reference"><code>columnheader</code></a></li><li><a href="#rowheader" class="role-reference"><code>rowheader</code></a></li></ul></td></tr><tr class="odd"><td>Base Concept:</td><td><a href="https://www.w3.org/TR/html5/tabular-data.html#the-td-element">HTML <code>td</code></a></td></tr><tr class="even"><td>Required Context Role:</td><td><a href="#row" class="role-reference"><code>row</code></a></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li><li><a href="#aria-required" class="property-reference"><code>aria-required</code></a></li><li><a href="#aria-selected" class="state-reference"><code>aria-selected</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-colindex" class="property-reference"><code>aria-colindex</code></a></li><li><a href="#aria-colspan" class="property-reference"><code>aria-colspan</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li><li><a href="#aria-rowindex" class="property-reference"><code>aria-rowindex</code></a></li><li><a href="#aria-rowspan" class="property-reference"><code>aria-rowspan</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`group` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="group (role)">§</span>](#group "Permalink for group (role)")</span></span>

A set of user interface <a href="#dfn-object" class="internalDFN">objects</a> which are not intended to be included in a page summary or table of contents by <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>.

Contrast with <a href="#region" class="role-reference"><code>region</code></a> which is a grouping of user interface objects that will be included in a page summary or table of contents.

Authors *SHOULD* use a `group` to form logical collection of items in a <a href="#dfn-widget" class="internalDFN">widget</a> such as children in a tree widget forming a collection of siblings in a hierarchy, or a collection of items having the same container in a directory. However, when a `group` is used in the context of list, authors *MUST* limit its children to <a href="#listitem" class="role-reference"><code>listitem</code></a> elements. Therefore, proper handling of `group` by authors and assistive technologies is determined by the context in which it is provided.

Authors *MAY* nest `group` elements. If a section is significant enough to warrant inclusion in the web page's table of contents, the author *SHOULD* assign the section a <a href="#dfn-role" class="internalDFN">role</a> of `region` or a [standard landmark role](#landmark_roles).

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#row" class="role-reference"><code>row</code></a></li><li><a href="#select" class="role-reference"><code>select</code></a></li><li><a href="#toolbar" class="role-reference"><code>toolbar</code></a></li></ul></td></tr><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/html5/sec-forms.html#the-fieldset-element">HTML <code>fieldset</code></a></td></tr><tr class="even"><td>Supported States and Properties:</td><td><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`heading` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="heading (role)">§</span>](#heading "Permalink for heading (role)")</span></span>

A heading for a section of the page.

Often, `heading` elements will be referenced with the <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> of the section for which they serve as a heading. If headings are organized into a logical outline, the <a href="#aria-level" class="property-reference"><code>aria-level</code></a> attribute is used to indicate the nesting level.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#sectionhead" class="role-reference"><code>sectionhead</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements">HTML <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code>, and <code>h6</code></a></td></tr><tr class="odd"><td>Required States and Properties:</td><td><a href="#aria-level" class="property-reference"><code>aria-level</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr><tr class="odd"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-level" class="property-reference"><code>aria-level</code></a> is <code class="sourceCode default">2</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`img` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="img (role)">§</span>](#img "Permalink for img (role)")</span></span>

A container for a collection of <a href="#dfn-element" class="internalDFN">elements</a> that form an image.

An `img` can contain captions and descriptive text, as well as multiple image files that when viewed together give the impression of a single image. An `img` represents a single graphic within a document, whether or not it is formed by a collection of drawing <a href="#dfn-object" class="internalDFN">objects</a>. In order for elements with a <a href="#dfn-role" class="internalDFN">role</a> of `img` be <a href="#dfn-perceivable" class="internalDFN">perceivable</a>, authors *MUST* provide alternative text or a label determined by the [accessible name calculation](#namecalculation).

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><ul><li><a href="https://www.w3.org/TR/html5/semantics-embedded-content.html#the-img-element">HTML <code>img</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr><tr class="even"><td>Children Presentational:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`input` <span class="type-indicator">(abstract role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="input (abstract role)">§</span>](#input "Permalink for input (abstract role)")</span></span>

A generic type of <a href="#dfn-widget" class="internalDFN">widget</a> that allows user input.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Is Abstract:</td><td>True</td></tr><tr class="even"><td>Superclass Role:</td><td><a href="#widget" class="role-reference"><code>widget</code></a></td></tr><tr class="odd"><td>Subclass Roles:</td><td><ul><li><a href="#checkbox" class="role-reference"><code>checkbox</code></a></li><li><a href="#option" class="role-reference"><code>option</code></a></li><li><a href="#radio" class="role-reference"><code>radio</code></a></li><li><a href="#slider" class="role-reference"><code>slider</code></a></li><li><a href="#spinbutton" class="role-reference"><code>spinbutton</code></a></li><li><a href="#textbox" class="role-reference"><code>textbox</code></a></li></ul></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/#ui-input">XForms input</a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`landmark` <span class="type-indicator">(abstract role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="landmark (abstract role)">§</span>](#landmark "Permalink for landmark (abstract role)")</span></span>

A perceivable <a href="#section" class="role-reference"><code>section</code></a> containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page. Such a page summary could be generated dynamically by a user agent or assistive technology.

Authors designate the purpose of the content by assigning a role that is a subclass of the landmark role and, when needed, by providing a brief, descriptive label.

Elements with a role that is a subclass of the landmark role are known as landmark regions or navigational landmark regions. <a href="#dfn-assistive-technology" class="internalDFN">Assistive technologies</a> *SHOULD* enable users to quickly navigate to landmark regions. Mainstream <a href="#dfn-user-agent" class="internalDFN">user agents</a> *MAY* enable users to quickly navigate to landmark regions.

Note

`landmark` is an abstract role used for the ontology. Authors should not use this role in content.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Is Abstract:</td><td>True</td></tr><tr class="even"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="odd"><td>Subclass Roles:</td><td><ul><li><a href="#banner" class="role-reference"><code>banner</code></a></li><li><a href="#complementary" class="role-reference"><code>complementary</code></a></li><li><a href="#contentinfo" class="role-reference"><code>contentinfo</code></a></li><li><a href="#form" class="role-reference"><code>form</code></a></li><li><a href="#main" class="role-reference"><code>main</code></a></li><li><a href="#navigation" class="role-reference"><code>navigation</code></a></li><li><a href="#region" class="role-reference"><code>region</code></a></li><li><a href="#search" class="role-reference"><code>search</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Accessible Name Required:</td><td>False</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`link` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="link (role)">§</span>](#link "Permalink for link (role)")</span></span>

An interactive reference to an internal or external resource that, when activated, causes the user agent to navigate to that resource. See related <a href="#button" class="role-reference"><code>button</code></a>.

If this is a native link in the host language (such as an HTML anchor with an `href` value), activating the link causes the <a href="#dfn-user-agent" class="internalDFN">user agent</a> to navigate to that resource. If this is a simulated link, the web application author is responsible for managing navigation.

Note

If pressing the link triggers an action but does not change browser focus or page location, authors are advised to consider using the `button` role instead of the `link` role.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#command" class="role-reference"><code>command</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><ul><li><a href="https://www.w3.org/TR/html5/textlevel-semantics.html#the-a-element">HTML <code>a</code></a></li><li><a href="https://www.w3.org/TR/html5/document-metadata.html#the-link-element">HTML <code>link</code></a></li></ul></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`list` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="list (role)">§</span>](#list "Permalink for list (role)")</span></span>

A <a href="#section" class="role-reference"><code>section</code></a> containing <a href="#listitem" class="role-reference"><code>listitem</code></a> elements. See related <a href="#listbox" class="role-reference"><code>listbox</code></a>.

Lists contain children whose <a href="#dfn-role" class="internalDFN">role</a> is `listitem`, or elements whose <a href="#dfn-role" class="internalDFN">role</a> is <a href="#group" class="role-reference"><code>group</code></a> which in turn contains children whose <a href="#dfn-role" class="internalDFN">role</a> is `listitem`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#directory" class="role-reference"><code>directory</code></a></li><li><a href="#feed" class="role-reference"><code>feed</code></a></li></ul></td></tr><tr class="odd"><td>Base Concept:</td><td><ul><li><a href="https://www.w3.org/TR/html5/grouping-content.html#the-ol-element">HTML <code>ol</code></a></li><li><a href="https://www.w3.org/TR/html5/grouping-content.html#the-ul-element">HTML <code>ul</code></a></li></ul></td></tr><tr class="even"><td>Required Owned Elements:</td><td><ul><li><a href="#group" class="role-reference"><code>group</code></a> → <a href="#listitem" class="role-reference"><code>listitem</code></a></li><li><a href="#listitem" class="role-reference"><code>listitem</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`listbox` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="listbox (role)">§</span>](#listbox "Permalink for listbox (role)")</span></span>

A <a href="#dfn-widget" class="internalDFN">widget</a> that allows the user to select one or more items from a list of choices. See related <a href="#combobox" class="role-reference"><code>combobox</code></a> and <a href="#list" class="role-reference"><code>list</code></a>.

Items within the list are static and, unlike standard HTML `select` <a href="#dfn-element" class="internalDFN">elements</a>, may contain images. List boxes contain children whose <a href="#dfn-role" class="internalDFN">role</a> is <a href="#option" class="role-reference"><code>option</code></a>.

To be <a href="#dfn-keyboard-accessible" class="internalDFN">keyboard accessible</a>, authors *SHOULD* manage focus of descendants for all instances of this <a href="#dfn-role" class="internalDFN">role</a>, as described in [Managing Focus](#managingfocus).

Elements with the role `listbox` have an implicit <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> value of `vertical`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#select" class="role-reference"><code>select</code></a></li></ul></td></tr><tr class="even"><td>Related Concepts:</td><td><ul><li><a href="#list" class="role-reference"><code>list</code></a></li><li><a href="https://www.w3.org/TR/html5/sec-forms.html#the-select-element">HTML <code>select</code></a></li><li><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/#ui-selectMany">XForms select</a></li></ul></td></tr><tr class="odd"><td>Required Owned Elements:</td><td><a href="#option" class="role-reference"><code>option</code></a></td></tr><tr class="even"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-multiselectable" class="property-reference"><code>aria-multiselectable</code></a></li><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li><li><a href="#aria-required" class="property-reference"><code>aria-required</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr><tr class="even"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> is <code class="sourceCode default">vertical</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`listitem` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="listitem (role)">§</span>](#listitem "Permalink for listitem (role)")</span></span>

A single item in a list or directory.

Authors *MUST* ensure <a href="#dfn-element" class="internalDFN">elements</a> with <a href="#dfn-role" class="internalDFN">role</a> `listitem` are contained in, or owned by, an <a href="#dfn-element" class="internalDFN">element</a> with the <a href="#dfn-role" class="internalDFN">role</a> <a href="#list" class="role-reference"><code>list</code></a> or <a href="#group" class="role-reference"><code>group</code></a>.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#treeitem" class="role-reference"><code>treeitem</code></a></li></ul></td></tr><tr class="odd"><td>Base Concept:</td><td><a href="https://www.w3.org/TR/html5/grouping-content.html#the-li-element">HTML <code>li</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/#ui-common-elements-item">XForms item</a></td></tr><tr class="odd"><td>Required Context Role:</td><td><ul><li><a href="#group" class="role-reference"><code>group</code></a></li><li><a href="#list" class="role-reference"><code>list</code></a></li></ul></td></tr><tr class="even"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-level" class="property-reference"><code>aria-level</code></a></li><li><a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a></li><li><a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`log` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="log (role)">§</span>](#log "Permalink for log (role)")</span></span>

A type of <a href="#dfn-live-region" class="internalDFN">live region</a> where new information is added in meaningful order and old information may disappear. See related <a href="#marquee" class="role-reference"><code>marquee</code></a>.

Examples include chat logs, messaging history, game log, or an error log. In contrast to other live regions, in this <a href="#dfn-role" class="internalDFN">role</a> there is a <a href="#dfn-relationship" class="internalDFN">relationship</a> between the arrival of new items in the log and the reading order. The log contains a meaningful sequence and new information is added only to the end of the log, not at arbitrary points.

Elements with the role `log` have an implicit <a href="#aria-live" class="property-reference"><code>aria-live</code></a> value of `polite`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr><tr class="odd"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-live" class="property-reference"><code>aria-live</code></a> is <code class="sourceCode default">polite</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`main` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="main (role)">§</span>](#main "Permalink for main (role)")</span></span>

The main content of a document.

This marks the content that is directly related to or expands upon the central topic of the document. The `main` <a href="#dfn-role" class="internalDFN">role</a> is a non-obtrusive alternative for "skip to main content" links, where the navigation option to go to the main content (or other <a href="#dfn-landmark" class="internalDFN">landmarks</a>) is provided by the <a href="#dfn-user-agent" class="internalDFN">user agent</a> through a dialog or by <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>.

User agents *SHOULD* treat elements with the role of `main` as navigational landmarks.

Within any <a href="#document" class="role-reference"><code>document</code></a> or <a href="#application" class="role-reference"><code>application</code></a>, the author *SHOULD* mark no more than one <a href="#dfn-element" class="internalDFN">element</a> with the `main` role.

Note

Because `document` and `application` elements can be nested in the DOM, they may have multiple `main` elements as DOM descendants, assuming each of those is associated with different document nodes, either by a DOM nesting (e.g., `document` within `document`) or by use of the <a href="#aria-owns" class="property-reference"><code>aria-owns</code></a> attribute.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#landmark" class="role-reference"><code>landmark</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`marquee` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="marquee (role)">§</span>](#marquee "Permalink for marquee (role)")</span></span>

A type of <a href="#dfn-live-region" class="internalDFN">live region</a> where non-essential information changes frequently. See related <a href="#log" class="role-reference"><code>log</code></a>.

Common usages of `marquee` include stock tickers and ad banners. The primary difference between a `marquee` and a `log` is that logs usually have a meaningful order or sequence of important content changes.

Elements with the role `marquee` have an implicit <a href="#aria-live" class="property-reference"><code>aria-live</code></a> value of `off`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`math` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="math (role)">§</span>](#math "Permalink for math (role)")</span></span>

Content that represents a mathematical expression.

Content with the role `math` is intended to be marked up in an accessible format such as [MathML](https://www.w3.org/TR/MathML3/) \[<a href="#bib-MathML3" class="bibref">MathML3</a>\], or with another type of textual representation such as TeX or LaTeX, which can be converted to an accessible format by native browser implementations or a polyfill library.

While it is not ideal to use an image of a mathematical expression, there exists a significant amount of legacy content where images are used to represent mathematical expressions. Authors *SHOULD* ensure that images of math are labeled by text that describes the mathematical expression as it might be spoken.

Note

Browsers that support native implementations of MathML are able to provide a more robust, accessible math experience than can be accomplished with plain text approximations of math. Some rendering engines have close integration with screen readers that allow spacial touch exploration of the formula and refreshable braille display output in the <a href="#dfn-nemeth-braille" class="internalDFN">Nemeth Braille</a> format. This level of integration is not supported with images of mathematical formulas, even if the author provides a plain text approximation.

At the time of this writing, some mainstream browsers do not support MathML natively, and must be retrofit using a JavaScript polyfill library. When authoring math content, use native MathML wherever possible, and test thoroughly. Use a polyfill library or provide a fallback image with a text alternative approximation if necessary.

#### MathML Example with Embedded TeX Annotation<span class="permalink" typeof="bookmark">[<span property="title" content="MathML Example with Embedded TeX Annotation">§</span>](#desc-math "Permalink for MathML Example with Embedded TeX Annotation")</span>

Example 6

    <!-- Note: Use a JavaScript polyfill library to ensure
         this renders in user agents that do not support MathML. -->
    <!-- The math element has an implicit role="math". -->
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mrow>
        <mi>x</mi>
        <mo>=</mo>
        <mfrac>
          <mrow>
            <mo form="prefix">−</mo>
            <mi>b</mi>
            <mo>±</mo>
            <msqrt>
              <msup>
                <mi>b</mi>
                <mn>2</mn>
              </msup>
              <mo>−</mo>
              <mn>4</mn>
              <mo>&#x2062;<!-- &InvisibleTimes; --></mo>
              <mi>a</mi>
              <mo>&#x2062;<!-- &InvisibleTimes; --></mo>
              <mi>c</mi>
            </msqrt>
          </mrow>
          <mrow>
            <mn>2</mn>
            <mo>&#x2062;<!-- &InvisibleTimes; --></mo>
            <mi>a</mi>
          </mrow>
        </mfrac>
      </mrow>
      <annotation encoding="TeX">
        x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
      </annotation>
    </math>

#### Plain HTML or Polyfill DOM Result of the MathML Quadratic Formula<span class="permalink" typeof="bookmark">[<span property="title" content="Plain HTML or Polyfill DOM Result of the MathML Quadratic Formula">§</span>](#desc-math "Permalink for Plain HTML or Polyfill DOM Result of the MathML Quadratic Formula")</span>

If a rendering engine does not support a native math format such as MathML, authors *MAY* use JavaScript to downgrade the content to a format the browser can display, such as this HTML image using a data URI and plain text alternative.

Example 7

    <img role="math" src="..." alt="x=⟮−b±√⟮b²−4ac⟯⟯÷2a">

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Children Presentational:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`menu` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="menu (role)">§</span>](#menu "Permalink for menu (role)")</span></span>

A type of <a href="#dfn-widget" class="internalDFN">widget</a> that offers a list of choices to the user.

A menu is often a list of common actions or functions that the user can invoke. The `menu` <a href="#dfn-role" class="internalDFN">role</a> is appropriate when a list of menu items is presented in a manner similar to a menu on a desktop application.

To be <a href="#dfn-keyboard-accessible" class="internalDFN">keyboard accessible</a>, authors *SHOULD* manage focus of descendants for all instances of this <a href="#dfn-role" class="internalDFN">role</a>, as described in [Managing Focus](#managingfocus).

Elements with the role `menu` have an implicit <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> value of `vertical`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#select" class="role-reference"><code>select</code></a></li></ul></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#menubar" class="role-reference"><code>menubar</code></a></li></ul></td></tr><tr class="odd"><td>Related Concepts:</td><td><ul><li><a href="#list" class="role-reference"><code>list</code></a></li><li><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/#ui-selectMany">XForms select</a></li><li><a href="http://docs.oracle.com/javase/6/docs/api/javax/accessibility/AccessibleRole.html#MENU">JAPI MENU</a></li></ul></td></tr><tr class="even"><td>Required Owned Elements:</td><td><ul><li><a href="#group" class="role-reference"><code>group</code></a> → <a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a></li><li><a href="#menuitem" class="role-reference"><code>menuitem</code></a></li><li><a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a></li><li><a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> is <code class="sourceCode default">vertical</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`menubar` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="menubar (role)">§</span>](#menubar "Permalink for menubar (role)")</span></span>

A presentation of <a href="#menu" class="role-reference"><code>menu</code></a> that usually remains visible and is usually presented horizontally.

The `menubar` <a href="#dfn-role" class="internalDFN">role</a> is used to create a menu bar similar to those found in Windows, Mac, and Gnome desktop applications. A menu bar is used to create a consistent set of frequently used commands. Authors *SHOULD* ensure that `menubar` interaction is similar to the typical menu bar interaction in a desktop graphical user interface.

To be <a href="#dfn-keyboard-accessible" class="internalDFN">keyboard accessible</a>, authors *SHOULD* manage focus of descendants for all instances of this <a href="#dfn-role" class="internalDFN">role</a>, as described in [Managing Focus](#managingfocus).

Elements with the role `menubar` have an implicit <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> value of `horizontal`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#menu" class="role-reference"><code>menu</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="#toolbar" class="role-reference"><code>toolbar</code></a></td></tr><tr class="odd"><td>Required Owned Elements:</td><td><ul><li><a href="#group" class="role-reference"><code>group</code></a> → <a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a></li><li><a href="#menuitem" class="role-reference"><code>menuitem</code></a></li><li><a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a></li><li><a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> is <code class="sourceCode default">horizontal</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`menuitem` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="menuitem (role)">§</span>](#menuitem "Permalink for menuitem (role)")</span></span>

An option in a set of choices contained by a <a href="#menu" class="role-reference"><code>menu</code></a> or <a href="#menubar" class="role-reference"><code>menubar</code></a>.

Authors *MAY* disable a menu item with the <a href="#aria-disabled" class="state-reference"><code>aria-disabled</code></a> attribute. If the menu item has its <a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a> attribute set to `true`, it indicates that the menu item may be used to launch a sub-level menu, and authors *SHOULD* display a new sub-level menu when the menu item is activated.

Authors *MUST* ensure that menu items are <a href="#dfn-owned-element" class="internalDFN">owned</a> by an element with role `menu` or `menubar` in order to identify that they are related <a href="#dfn-widget" class="internalDFN">widgets</a>. Authors *MAY* separate menu items into sets by use of a <a href="#separator" class="role-reference"><code>separator</code></a> or an element with an equivalent role from the native markup language.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#command" class="role-reference"><code>command</code></a></li></ul></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a></li></ul></td></tr><tr class="odd"><td>Related Concepts:</td><td><ul><li><a href="http://docs.oracle.com/javase/6/docs/api/javax/accessibility/AccessibleRole.html#MENU_ITEM">JAPI MENU_ITEM</a></li><li><a href="https://www.w3.org/TR/html51/interactive-elements.html#the-menuitem-element"><code>menuitem</code></a> in [<a href="#bib-html51" class="bibref">html51</a>]</li><li><a href="#listitem" class="role-reference"><code>listitem</code></a></li><li><a href="#option" class="role-reference"><code>option</code></a></li></ul></td></tr><tr class="even"><td>Required Context Role:</td><td><ul><li><a href="#group" class="role-reference"><code>group</code></a></li><li><a href="#menu" class="role-reference"><code>menu</code></a></li><li><a href="#menubar" class="role-reference"><code>menubar</code></a></li></ul></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a></li><li><a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`menuitemcheckbox` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="menuitemcheckbox (role)">§</span>](#menuitemcheckbox "Permalink for menuitemcheckbox (role)")</span></span>

A <a href="#menuitem" class="role-reference"><code>menuitem</code></a> with a checkable state whose possible values are `true`, `false`, or `mixed`.

The <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> of a `menuitemcheckbox` indicates whether the menu item is checked (`true`), unchecked (`false`), or represents a sub-level menu of other menu items that have a mixture of checked and unchecked values (`mixed`).

Authors *MUST* ensure that menu item checkboxes are <a href="#dfn-owned-element" class="internalDFN">owned</a> by an element with role <a href="#menu" class="role-reference"><code>menu</code></a> or <a href="#menubar" class="role-reference"><code>menubar</code></a> in order to identify that they are related widgets. Authors *MAY* separate menu items into sets by use of a <a href="#separator" class="role-reference"><code>separator</code></a> or an element with an equivalent role from the native markup language.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#checkbox" class="role-reference"><code>checkbox</code></a></li><li><a href="#menuitem" class="role-reference"><code>menuitem</code></a></li></ul></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a></li></ul></td></tr><tr class="odd"><td>Related Concepts:</td><td><a href="#menuitem" class="role-reference"><code>menuitem</code></a></td></tr><tr class="even"><td>Required Context Role:</td><td><ul><li><a href="#menu" class="role-reference"><code>menu</code></a></li><li><a href="#menubar" class="role-reference"><code>menubar</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-checked" class="state-reference"><code>aria-checked (state)</code></a> <strong>(required)</strong></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a></li><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li><li><a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr><tr class="even"><td>Children Presentational:</td><td>True</td></tr><tr class="odd"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> is <code class="sourceCode default">false</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`menuitemradio` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="menuitemradio (role)">§</span>](#menuitemradio "Permalink for menuitemradio (role)")</span></span>

A checkable <a href="#menuitem" class="role-reference"><code>menuitem</code></a> in a set of elements with the same role, only one of which can be checked at a time.

Authors *SHOULD* enforce that only one `menuitemradio` in a group can be checked at the same time. When one item in the group is checked, the previously checked item becomes unchecked (its <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> becomes `false`).

Authors *MUST* ensure that menu item radios are <a href="#dfn-owned-element" class="internalDFN">owned</a> by an element with role <a href="#group" class="role-reference"><code>group</code></a>, <a href="#menu" class="role-reference"><code>menu</code></a>, or <a href="#menubar" class="role-reference"><code>menubar</code></a> in order to identify that they are related widgets. Authors *MAY* separate menu items into sets by use of a <a href="#separator" class="role-reference"><code>separator</code></a> or an element with an equivalent role from the native markup language.

If a `menu` or `menubar` contains more than one group of `menuitemradio` elements, or if the menu contains one group and other, unrelated menu items, authors *SHOULD* nest each set of related `menuitemradio` elements in an element using the `group` role, and authors *SHOULD* delimit the group from other menu items with an element using the `separator` role.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a> (see structure)</li><li><a href="#radio" class="role-reference"><code>radio</code></a></li></ul></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="#menuitem" class="role-reference"><code>menuitem</code></a></td></tr><tr class="odd"><td>Required Context Role:</td><td><ul><li><a href="#group" class="role-reference"><code>group</code></a></li><li><a href="#menu" class="role-reference"><code>menu</code></a></li><li><a href="#menubar" class="role-reference"><code>menubar</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-checked" class="state-reference"><code>aria-checked (state)</code></a> <strong>(required)</strong></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a></li><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li><li><a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr><tr class="odd"><td>Children Presentational:</td><td>True</td></tr><tr class="even"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> is <code class="sourceCode default">false</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`navigation` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="navigation (role)">§</span>](#navigation "Permalink for navigation (role)")</span></span>

A collection of navigational <a href="#dfn-element" class="internalDFN">elements</a> (usually links) for navigating the document or related documents.

User agents *SHOULD* treat elements with the role of `navigation` as navigational <a href="#dfn-landmark" class="internalDFN">landmarks</a>.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#landmark" class="role-reference"><code>landmark</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/html5/sections.html#the-nav-element">HTML <code>nav</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`none` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="none (role)">§</span>](#none "Permalink for none (role)")</span></span>

An <a href="#dfn-element" class="internalDFN">element</a> whose implicit native role semantics will not be mapped to the <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a>. See synonym <a href="#presentation" class="role-reference"><code>presentation</code></a>.

Note

#### Note regarding the ARIA 1.1 `none` role.<span class="permalink" typeof="bookmark">[<span property="title" content="Note regarding the ARIA 1.1 none role.">§</span>](#role-none-note-none "Permalink for Note regarding the ARIA 1.1 none role.")</span>

In ARIA 1.1, the working group introduced `none` as a synonym to the `presentation` role, due to author confusion surrounding the intended meaning of the word "presentation" or "presentational." Many individuals erroneously consider `role="presentation"` to be synonymous with `aria-hidden="true"`, and we believe `role="none"` conveys the actual meaning more unambiguously.

Until implementations include sufficient support for `role="none"`, web authors are advised to use the `presentation` role alone `role="presentation"` or redundantly as a fallback to the `none` role `role="none presentation"`.

#### <span property="xhv:role" resource="xhv:heading">`note` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="note (role)">§</span>](#note "Permalink for note (role)")</span></span>

A section whose content is parenthetic or ancillary to the main content of the resource.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`option` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="option (role)">§</span>](#option "Permalink for option (role)")</span></span>

A selectable item in a <a href="#select" class="role-reference"><code>select</code></a> list.

Authors *MUST* ensure <a href="#dfn-element" class="internalDFN">elements</a> with <a href="#dfn-role" class="internalDFN">role</a> `option` are contained in, or owned by, an element with the <a href="#dfn-role" class="internalDFN">role</a> <a href="#listbox" class="role-reference"><code>listbox</code></a>. Options not associated with a `listbox` might not be correctly mapped to an <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a>.

Elements with the role `option` have an implicit <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a> value of `false`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#input" class="role-reference"><code>input</code></a></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#treeitem" class="role-reference"><code>treeitem</code></a></li></ul></td></tr><tr class="odd"><td>Base Concept:</td><td><a href="https://www.w3.org/TR/html5/sec-forms.html#the-option-element">HTML <code>option</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><ul><li><a href="#listitem" class="role-reference"><code>listitem</code></a></li><li><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/#ui-common-elements-item">XForms item</a></li></ul></td></tr><tr class="odd"><td>Required Context Role:</td><td><a href="#listbox" class="role-reference"><code>listbox</code></a></td></tr><tr class="even"><td>Required States and Properties:</td><td><ul><li><a href="#aria-selected" class="state-reference"><code>aria-selected</code></a></li></ul></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-checked" class="state-reference"><code>aria-checked</code></a></li><li><a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a></li><li><a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr><tr class="odd"><td>Children Presentational:</td><td>True</td></tr><tr class="even"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a> is <code class="sourceCode default">false</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`presentation` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="presentation (role)">§</span>](#presentation "Permalink for presentation (role)")</span></span>

An <a href="#dfn-element" class="internalDFN">element</a> whose implicit native role semantics will not be mapped to the <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a>. See synonym <a href="#none" class="role-reference"><code>none</code></a>.

Note

#### Note regarding the ARIA 1.1 `none` role.<span class="permalink" typeof="bookmark">[<span property="title" content="Note regarding the ARIA 1.1 none role.">§</span>](#role-presentation-note-none "Permalink for Note regarding the ARIA 1.1 none role.")</span>

In ARIA 1.1, the working group introduced `none` as a synonym to the `presentation` role, due to author confusion surrounding the intended meaning of the word "presentation" or "presentational." Many individuals erroneously consider `role="presentation"` to be synonymous with `aria-hidden="true"`, and we believe `role="none"` conveys the actual meaning more unambiguously.

Until implementations include sufficient support for `role="none"`, web authors are advised to use the `presentation` role alone `role="presentation"` or redundantly as a fallback to the `none` role `role="none presentation"`.

The intended use is when an element is used to change the look of the page but does not have all the functional, interactive, or structural relevance implied by the element type, or may be used to provide for an accessible fallback in older browsers that do not support WAI-ARIA.

Example use cases:

-   An element whose content is completely presentational (like a spacer image, decorative graphic, or clearing element);
-   An image that is in a container with the <a href="#img" class="role-reference"><code>img</code></a> <a href="#dfn-role" class="internalDFN">role</a> and where the full text alternative is available and is marked up with <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a> and (if needed) <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a>;
-   An element used as an additional markup "hook" for CSS; or
-   A layout table and/or any of its associated rows, cells, etc.

For any element with a role of presentation and which is not focusable, the user agent *MUST NOT* expose the implicit native semantics of the element (the role and its states and properties) to accessibility APIs. However, the user agent *MUST* expose content and descendant elements that do not have an explicit or inherited role of presentation. Thus, the `presentation` role causes a given element to be treated as having no role or to be removed from the accessibility tree, but does not cause the content contained within the element to be removed from the accessibility tree.

For example, according to an accessibility API, the following markup elements would appear to have identical role semantics (no role) and identical content.

Example 8

    <!-- 1. [role="presentation"] negates the implicit 'heading' role semantics but does not affect the contents. -->
    <h1 role="presentation"> Sample Content </h1>

    <!-- 2. There is no implicit role for span, so only the contents are exposed. -->
    <span> Sample Content </span>

    <!-- 3. Depending on styling and other factors, this role declaration is redundant in some implementations. -->
    <span role="presentation"> Sample Content </span>

    <!-- 4. In all cases, the element contents are exposed to accessibility APIs without any implied role semantics. -->
    <!-- <> --> Sample Content <!-- </> -->

The `presentation` role is used on an element that has implicit native semantics, meaning that there is a default accessibility API role for the element. Some elements are only complete when additional descendant elements are provided. For example, in HTML, table elements (matching the <a href="#grid" class="role-reference"><code>grid</code></a> role) require `tr` descendants (the <a href="#row" class="role-reference"><code>row</code></a> <a href="#dfn-role" class="internalDFN">role</a>), which in turn require `th` or `td` children (the <a href="#gridcell" class="role-reference"><code>gridcell</code></a>, <a href="#columnheader" class="role-reference"><code>columnheader</code></a>, <a href="#rowheader" class="role-reference"><code>rowheader</code></a> roles). Similarly, lists require list item children. The descendant elements that complete the semantics of an element are described in WAI-ARIA as [required owned elements](#mustContain).

When an explicit or inherited role of `presentation` is applied to an element with the implicit semantic of a WAI-ARIA role that has [required owned elements](#mustContain), in addition to the element with the explicit role of `presentation`, the user agent *MUST* apply an inherited role of presentation to any owned elements that do not have an explicit role defined. Also, when an explicit or inherited role of presentation is applied to a host language element which has required children as defined by the host language specification, in addition to the element with the explicit role of presentation, the user agent *MUST* apply an inherited role of presentation to any required children that do not have an explicit role defined.

In HTML, the [`img`](https://www.w3.org/TR/html5/semantics-embedded-content.html#the-img-element) <a href="#dfn-element" class="internalDFN">element</a> is treated as a single entity regardless of the type of image file. Consequently, using `role="presentation"` or `role="none"` on an HTML `img` is equivalent to using `aria-hidden="true"`. In order to make the image contents accessible, authors can embed the object using an [`object`](https://www.w3.org/TR/html5/semantics-embedded-content.html#the-object-element) or [`iframe`](https://www.w3.org/TR/html5/semantics-embedded-content.html#the-iframe-element) <a href="#dfn-element" class="internalDFN">element</a>, or use inline SVG code, and follow the accessibility guidelines for the image content.

For any element with an explicit or inherited role of presentation and which is not focusable, user agents *MUST* ignore role-specific WAI-ARIA states and properties for that element. For example, in HTML, a `ul` or `ol` element with a role of `presentation` will have the implicit native semantics of its `li` elements removed because the <a href="#list" class="role-reference"><code>list</code></a> role to which the `ul` or `ol` corresponds has a [required owned element](#mustContain) of <a href="#listitem" class="role-reference"><code>listitem</code></a>. Likewise, although an HTML `table` element does not have an implicit native semantic role corresponding directly to a WAI-ARIA role, the implicit native semantics of its `thead`/`tbody`/`tfoot`/`tr`/`th`/`td` descendants will also be removed, because the HTML specification indicates that these are required structural descendants of the `table` element.

Note

Only the implicit native semantics of elements that correspond to WAI-ARIA [required owned elements](#mustContain) are removed. All other content remains intact, including nested tables or lists, unless those elements also have a explicit role of `presentation` applied.

For example, according to an accessibility API, the following markup elements would appear to have identical role semantics (no roles) and identical content.

Example 9

    <!-- 1. [role="presentation"] negates the implicit 'list' and 'listitem' role semantics but does not affect the contents. -->
    <ul role="presentation">
      <li> Sample Content </li>
      <li> More Sample Content </li>
    </ul>

    <!-- 2. There is no implicit role for "foo", so only the contents are exposed. -->
    <foo>
      <foo> Sample Content </foo>
      <foo> More Sample Content </foo>
    </foo>

Note

There are other WAI-ARIA roles with required children for which this situation is applicable (e.g., radiogroups and listboxes), but tables and lists are the most common real-world cases in which the presentation inheritance is likely to apply.

For any element with an explicit or inherited role of `presentation`, user agents *MUST* apply an inherited role of `presentation` to all host-language-specific labeling elements for the presentational element. For example, a `table` element with a role of `presentation` will have the implicit native semantics of its `caption` element removed, because the caption is merely a label for the presentational table.

Authors *SHOULD NOT* provide meaningful alternative text (for example, use `alt=""` in HTML) when the `presentation` role is applied to an image.

In the following code sample, the containing `img` and is appropriately labeled by the caption paragraph. In this example the `img` element can be marked as presentation because the role and the text alternatives are provided by the containing element.

Example 10

    <div role="img" aria-labelledby="caption">
      <img src="example.png" role="presentation" alt="">
      <p id="caption">A visible text caption labeling the image.</p>
    </div>

In the following code sample, because the anchor (HTML `a` element) is acting as the treeitem, the list item (HTML `li` element) is assigned an explicit WAI-ARIA role of presentation to override the user agent's implicit native semantics for list items.

Example 11

    <ul role="tree">
      <li role="presentation">
        <a role="treeitem" aria-expanded="true">An expanded tree node</a>
      </li>
      …
    </ul>

##### <span property="xhv:role" resource="xhv:heading">Presentational Roles Conflict Resolution<span class="permalink" typeof="bookmark">[<span property="title" content="Presentational Roles Conflict Resolution">§</span>](#conflict_resolution_presentation_none "Permalink for Presentational Roles Conflict Resolution")</span></span>

There are a number of ways presentational role conflicts are resolved.

Host languages elements, having implicit presentational roles for which no roles, may be applied, *MUST* never be exposed to in the accessibility tree. With this exception, user agents *MUST* always expose global WAI-ARIA states and properties to accessibility APIs. In this case, the user agent ignores the `presentation` role and exposes the element according to its implicit native semantics. However, user agents *MUST* ignore any non-global, role-specific WAI-ARIA states and properties, unless it is on an inherited presentational role where an explicit role is applied.

For example, <a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a> is a global attribute and would always be applied; <a href="#aria-level" class="property-reference"><code>aria-level</code></a> is not a global attribute and would therefore only apply if the element was not in a presentational state.

Example 12

    <!-- 1. [role="presentation"] is ignored due to the global aria-haspopup property. -->
    <h1 role="presentation" aria-haspopup="true"> Sample Content </h1>
    <!-- 2. [role="presentation"] negates the both the implicit 'heading' and the non-global level. -->
    <h1 role="presentation" aria-level="2"> Sample Content </h1>

Explicit roles on a descendant or <a href="#dfn-owned-element" class="internalDFN">owned</a> element override the inherited role of `presentation`, and cause the owned element to behave as any other element with an explicit role. If the action of exposing the implicit role causes the accessibility tree to be malformed, the expected results are undefined and the user agent *MAY* resort to an internal recovery mechanism to repair the accessibility tree.

If an element with a role of presentation is focusable, or otherwise interactive, user agents *MUST* ignore the normal effect of the role and expose the element with implicit native semantics, in order to ensure that the element is both <a href="#dfn-understandable" class="internalDFN">understandable</a> and <a href="#dfn-operable" class="internalDFN">operable</a>.

User agents *MUST* always expose global WAI-ARIA states and properties to accessibility APIs, even if an element has an explicit or inherited role of presentation. In this case, the user agent ignores the `presentation` role and exposes the element according to its implicit native semantics. However, user agents *MUST* ignore any non-global, role-specific WAI-ARIA states and properties, unless it is on an inherited presentational role where an explicit role is applied.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#structure" class="role-reference"><code>structure</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author (if role discarded by error conditions)</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`progressbar` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="progressbar (role)">§</span>](#progressbar "Permalink for progressbar (role)")</span></span>

An <a href="#dfn-element" class="internalDFN">element</a> that displays the progress status for tasks that take a long time.

A progressbar indicates that the user's request has been received and the application is making progress toward completing the requested action. The author *SHOULD* supply values for <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a>, <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a>, and <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a>, unless the value is indeterminate, in which case the author *SHOULD* omit the `aria-valuenow` attribute. Authors *SHOULD* update these values when the visual progress indicator is updated. If the `progressbar` is describing the loading progress of a particular region of a page, the author *SHOULD* use <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a> to point to the status, and set the <a href="#aria-busy" class="state-reference"><code>aria-busy</code></a> attribute to `true` on the region until it is finished loading. It is not possible for the user to alter the value of a `progressbar` because it is always readonly.

Note

Assistive technologies generally will render the value of `aria-valuenow` as a percent of a range between the value of `aria-valuemin` and `aria-valuemax`, unless <a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a> is specified. It is best to set the values for `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` in a manner that is appropriate for this calculation.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#range" class="role-reference"><code>range</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><span class="role-parent"><a href="#status" class="role-reference"><code>status</code></a></span></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li><li><a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a></li><li><a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a></li><li><a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a></li><li><a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr><tr class="even"><td>Children Presentational:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`radio` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="radio (role)">§</span>](#radio "Permalink for radio (role)")</span></span>

A checkable input in a group of elements with the same role, only one of which can be checked at a time.

Authors *SHOULD* ensure that <a href="#dfn-element" class="internalDFN">elements</a> with role `radio` are explicitly grouped in order to indicate which ones affect the same value. This is achieved by enclosing the radio elements in an element with role <a href="#radiogroup" class="role-reference"><code>radiogroup</code></a>. If it is not possible to make the radio buttons DOM children of the `radiogroup`, authors *SHOULD* use the <a href="#aria-owns" class="property-reference"><code>aria-owns</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> on the `radiogroup` element to indicate the <a href="#dfn-relationship" class="internalDFN">relationship</a> to its children.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#input" class="role-reference"><code>input</code></a></li></ul></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a></li></ul></td></tr><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/html5/sec-forms.html#radio-button-state-typeradio">HTML <code>input[type="radio"]</code></a></td></tr><tr class="even"><td>Required States and Properties:</td><td><ul><li><a href="#aria-checked" class="state-reference"><code>aria-checked</code></a></li></ul></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a></li><li><a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr><tr class="odd"><td>Children Presentational:</td><td>True</td></tr><tr class="even"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> is <code class="sourceCode default">false</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`radiogroup` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="radiogroup (role)">§</span>](#radiogroup "Permalink for radiogroup (role)")</span></span>

A group of <a href="#radio" class="role-reference"><code>radio</code></a> buttons.

A `radiogroup` is a type of <a href="#select" class="role-reference"><code>select</code></a> list that can only have a single entry checked at any one time. Authors *SHOULD* enforce that only one radio button in a group can be checked at the same time. When one item in the group is checked, the previously checked item becomes unchecked (its <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> becomes `false`).

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#select" class="role-reference"><code>select</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="#list" class="role-reference"><code>list</code></a></td></tr><tr class="odd"><td>Required Owned Elements:</td><td><a href="#radio" class="role-reference"><code>radio</code></a></td></tr><tr class="even"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li><li><a href="#aria-required" class="property-reference"><code>aria-required</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`range` <span class="type-indicator">(abstract role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="range (abstract role)">§</span>](#range "Permalink for range (abstract role)")</span></span>

An input representing a range of values that can be set by the user.

Note

`range` is an abstract role used for the ontology. Authors should not use this role in content.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Is Abstract:</td><td>True</td></tr><tr class="even"><td>Superclass Role:</td><td><a href="#widget" class="role-reference"><code>widget</code></a></td></tr><tr class="odd"><td>Subclass Roles:</td><td><ul><li><a href="#progressbar" class="role-reference"><code>progressbar</code></a></li><li><a href="#scrollbar" class="role-reference"><code>scrollbar</code></a></li><li><a href="#slider" class="role-reference"><code>slider</code></a></li><li><a href="#spinbutton" class="role-reference"><code>spinbutton</code></a></li></ul></td></tr><tr class="even"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a></li><li><a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a></li><li><a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a></li></ul><a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`region` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="region (role)">§</span>](#region "Permalink for region (role)")</span></span>

A perceivable <a href="#section" class="role-reference"><code>section</code></a> containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page. Such a page summary could be generated dynamically by a user agent or assistive technology.

Authors *SHOULD* limit use of the region role to sections containing content with a purpose that is not accurately described by one of the other <a href="#landmark" class="role-reference"><code>landmark</code></a> roles, such as <a href="#main" class="role-reference"><code>main</code></a>, <a href="#complementary" class="role-reference"><code>complementary</code></a>, or <a href="#navigation" class="role-reference"><code>navigation</code></a>.

Authors *MUST* give each element with role region a brief label that describes the purpose of the content in the region. Authors *SHOULD* reference a visible label with <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a> if a visible label is present. Authors *SHOULD* include the label inside of a heading whenever possible. The heading *MAY* be an instance of the standard host language heading element or an instance of an element with role <a href="#heading" class="role-reference"><code>heading</code></a>.

<a href="#dfn-assistive-technology" class="internalDFN">Assistive technologies</a> *SHOULD* enable users to quickly navigate to elements with role region. Mainstream <a href="#dfn-user-agent" class="internalDFN">user agents</a> *MAY* enable users to quickly navigate to elements with role region.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#landmark" class="role-reference"><code>landmark</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><ul><li><a href="https://www.w3.org/TR/html5/obsolete.html#frames">HTML <code>frame</code></a></li><li><a href="https://www.w3.org/TR/di-gloss/#def-perceivable-unit">Device Independence Glossary perceivable unit</a></li><li><a href="#section" class="role-reference"><code>section</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`roletype` <span class="type-indicator">(abstract role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="roletype (abstract role)">§</span>](#roletype "Permalink for roletype (abstract role)")</span></span>

The base <a href="#dfn-role" class="internalDFN">role</a> from which all other roles in this <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a> inherit.

Properties of this role describe the structural and functional purpose of <a href="#dfn-object" class="internalDFN">objects</a> that are assigned this role (known in RDF terms as "instances"). A role is a concept that can be used to understand and operate instances.

Note

`roletype` is an abstract role used for the ontology. Authors should not use this role in content.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Is Abstract:</td><td>True</td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#structure" class="role-reference"><code>structure</code></a></li><li><a href="#widget" class="role-reference"><code>widget</code></a></li><li><a href="#window" class="role-reference"><code>window</code></a></li></ul></td></tr><tr class="odd"><td>Related Concepts:</td><td><ul><li><a href="https://www.w3.org/TR/xhtml-role/#s_role_module_attributes">XHTML role</a></li><li><a href="https://www.w3.org/TR/html5/document-metadata.html#element-attrdef-link-rel">HTML <code>rel</code></a></li><li><a href="http://dublincore.org/documents/2012/06/14/dcmi-terms/">Dublin Core type</a></li></ul></td></tr><tr class="even"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>n/a</li></ul></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`row` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="row (role)">§</span>](#row "Permalink for row (role)")</span></span>

A row of cells in a tabular container.

Rows contain <a href="#cell" class="role-reference"><code>cell</code></a> or <a href="#gridcell" class="role-reference"><code>gridcell</code></a> <a href="#dfn-element" class="internalDFN">elements</a>, and thus serve to organize the <a href="#table" class="role-reference"><code>table</code></a> or <a href="#grid" class="role-reference"><code>grid</code></a>.

In a <a href="#treegrid" class="role-reference"><code>treegrid</code></a>, authors *MAY* mark rows as expandable, using the <a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> to indicate the present status. This is not the case for an ordinary `table` or `grid`, in which the `aria-expanded` attribute is not present.

Authors *MUST* ensure <a href="#dfn-element" class="internalDFN">elements</a> with <a href="#dfn-role" class="internalDFN">role</a> `row` are contained in, or <a href="#dfn-owned-element" class="internalDFN">owned</a> by, an element with the role `table`, `grid`, <a href="#rowgroup" class="role-reference"><code>rowgroup</code></a>, or `treegrid`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#group" class="role-reference"><code>group</code></a></li><li><a href="#widget" class="role-reference"><code>widget</code></a></li></ul></td></tr><tr class="even"><td>Base Concept:</td><td><a href="https://www.w3.org/TR/html5/tabular-data.html#the-tr-element">HTML <code>tr</code></a></td></tr><tr class="odd"><td>Required Context Role:</td><td><ul><li><a href="#grid" class="role-reference"><code>grid</code></a></li><li><a href="#rowgroup" class="role-reference"><code>rowgroup</code></a></li><li><a href="#table" class="role-reference"><code>table</code></a></li><li><a href="#treegrid" class="role-reference"><code>treegrid</code></a></li></ul></td></tr><tr class="even"><td>Required Owned Elements:</td><td><ul><li><a href="#cell" class="role-reference"><code>cell</code></a></li><li><a href="#columnheader" class="role-reference"><code>columnheader</code></a></li><li><a href="#gridcell" class="role-reference"><code>gridcell</code></a></li><li><a href="#rowheader" class="role-reference"><code>rowheader</code></a></li></ul></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-colindex" class="property-reference"><code>aria-colindex</code></a></li><li><a href="#aria-level" class="property-reference"><code>aria-level</code></a></li><li><a href="#aria-rowindex" class="property-reference"><code>aria-rowindex</code></a></li><li><a href="#aria-selected" class="state-reference"><code>aria-selected</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`rowgroup` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="rowgroup (role)">§</span>](#rowgroup "Permalink for rowgroup (role)")</span></span>

A structure containing one or more row elements in a tabular container.

The `rowgroup` role establishes a <a href="#dfn-relationship" class="internalDFN">relationship</a> between <a href="#dfn-owned-element" class="internalDFN">owned</a> <a href="#row" class="role-reference"><code>row</code></a> elements. It is a structural equivalent to the `thead`, `tfoot`, and `tbody` elements in an HTML `table` <a href="#dfn-element" class="internalDFN">element</a>.

Authors *MUST* ensure <a href="#dfn-element" class="internalDFN">elements</a> with <a href="#dfn-role" class="internalDFN">role</a> `rowgroup` are contained in, or <a href="#dfn-owned-element" class="internalDFN">owned</a> by, an element with the role <a href="#table" class="role-reference"><code>table</code></a> or <a href="#grid" class="role-reference"><code>grid</code></a>.

Note

The `rowgroup` role exists, in part, to support role symmetry in HTML, and allows for the propagation of presentation inheritance on HTML `table` elements with an explicit `presentation` role applied.

Note

This role does not differentiate between types of row groups (e.g., `thead` vs. `tbody`), but an issue has been raised for WAI-ARIA 2.0.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#structure" class="role-reference"><code>structure</code></a></td></tr><tr class="even"><td>Base Concept:</td><td><ul><li><a href="https://www.w3.org/TR/html5/tabular-data.html#the-tbody-element">HTML <code>tbody</code></a></li><li><a href="https://www.w3.org/TR/html5/tabular-data.html#the-tfoot-element">HTML <code>tfoot</code></a></li><li><a href="https://www.w3.org/TR/html5/tabular-data.html#the-thead-element">HTML <code>thead</code></a></li></ul></td></tr><tr class="odd"><td>Required Context Role:</td><td><ul><li><a href="#grid" class="role-reference"><code>grid</code></a></li><li><a href="#table" class="role-reference"><code>table</code></a></li><li><a href="#treegrid" class="role-reference"><code>treegrid</code></a></li></ul></td></tr><tr class="even"><td>Required Owned Elements:</td><td><a href="#row" class="role-reference"><code>row</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`rowheader` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="rowheader (role)">§</span>](#rowheader "Permalink for rowheader (role)")</span></span>

A cell containing header information for a row in a grid.

Rowheader can be used as a row header in a table or grid. The rowheader establishes a <a href="#dfn-relationship" class="internalDFN">relationship</a> between it and all cells in the corresponding row. It is a structural equivalent to setting `scope="row"` on an HTML `th` <a href="#dfn-element" class="internalDFN">element</a>.

Authors *MUST* ensure <a href="#dfn-element" class="internalDFN">elements</a> with <a href="#dfn-role" class="internalDFN">role</a> `rowheader` are contained in, or <a href="#dfn-owned-element" class="internalDFN">owned</a> by, an element with the role <a href="#grid" class="role-reference"><code>grid</code></a>.

Applying the <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a> state on a rowheader *MUST* not cause the user agent to automatically propagate the `aria-selected` state to all the cells in the corresponding row. An author *MAY* choose to propagate selection in this manner depending on the specific application.

While the `rowheader` role can be used in both interactive grids and non-interactive tables, the use of <a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a> and <a href="#aria-required" class="property-reference"><code>aria-required</code></a> is only applicable to interactive elements. Therefore, authors *SHOULD NOT* use `aria-required` or `aria-readonly` in a `rowheader` that descends from a <a href="#table" class="role-reference"><code>table</code></a>, and user agents *SHOULD NOT* expose either property to <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> unless the `rowheader` descends from a `grid`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#cell" class="role-reference"><code>cell</code></a></li><li><a href="#gridcell" class="role-reference"><code>gridcell</code></a></li><li><a href="#sectionhead" class="role-reference"><code>sectionhead</code></a></li></ul></td></tr><tr class="even"><td>Base Concept:</td><td><a href="https://www.w3.org/TR/html5/tabular-data.html#element-attrdef-th-scope">HTML <code>th[scope="row"]</code></a></td></tr><tr class="odd"><td>Required Context Role:</td><td><a href="#row" class="role-reference"><code>row</code></a></td></tr><tr class="even"><td>Supported States and Properties:</td><td><a href="#aria-sort" class="property-reference"><code>aria-sort</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-colindex" class="property-reference"><code>aria-colindex</code></a></li><li><a href="#aria-colspan" class="property-reference"><code>aria-colspan</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-required" class="property-reference"><code>aria-required</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li><li><a href="#aria-rowindex" class="property-reference"><code>aria-rowindex</code></a></li><li><a href="#aria-rowspan" class="property-reference"><code>aria-rowspan</code></a></li><li><a href="#aria-selected" class="state-reference"><code>aria-selected (state)</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`scrollbar` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="scrollbar (role)">§</span>](#scrollbar "Permalink for scrollbar (role)")</span></span>

A graphical object that controls the scrolling of content within a viewing area, regardless of whether the content is fully displayed within the viewing area.

A scrollbar represents the current value and range of possible values via the size of the scrollbar and position of the thumb with respect to the visible range of the orientation (horizontal or vertical) it controls. Its orientation represents the orientation of the scrollbar and the scrolling effect on the viewing area controlled by the scrollbar. It is typically possible to add or subtract to the current value by using directional keys such as arrow keys.

Authors *MUST* set the <a href="#aria-controls" class="property-reference"><code>aria-controls</code></a> attribute on the scrollbar element to reference the scrollable area it controls.

Authors *MUST* set the <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a>, <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a>, and <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> attributes. If missing, their implicit values follow the same rules as the [HTML range input type](https://www.w3.org/TR/html5/sec-forms.html#range-state-typerange "Range state"):

-   If `aria-valuemin` is missing or not a [number](#valuetype_number), it defaults to 0 (zero).
-   If `aria-valuemax` is missing or not a [number](#valuetype_number), it defaults to 100.
-   If `aria-valuenow` is missing or not a [number](#valuetype_number), it defaults to the value half way between `aria-valuemin` and `aria-valuemax`.
-   If `aria-valuenow` is present but less than `aria-valuemin`, it defaults to the value of `aria-valuemin`.
-   If `aria-valuenow` is present but greater than `aria-valuemax`, it defaults to the value of `aria-valuemax`.

Elements with the role `scrollbar` have an implicit <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> value of `vertical`.

Note

Assistive technologies generally will render the value of `aria-valuenow` as a percent of a range between the value of `aria-valuemin` and `aria-valuemax`, unless <a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a> is specified. It is best to set the values for `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` in a manner that is appropriate for this calculation.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#range" class="role-reference"><code>range</code></a></li></ul></td></tr><tr class="even"><td>Required States and Properties:</td><td><ul><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a></li><li><a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a></li><li><a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a></li><li><a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li><li><a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>False</td></tr><tr class="even"><td>Children Presentational:</td><td>True</td></tr><tr class="odd"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> is <code class="sourceCode default">vertical</code>.<br />
Default for <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a> is <code class="sourceCode default">0</code>.<br />
Default for <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a> is <code class="sourceCode default">100</code>.<br />
Default for <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> is half way between <code class="sourceCode default">aria-valuemax</code> and <code class="sourceCode default">aria-valuemin</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`search` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="search (role)">§</span>](#search "Permalink for search (role)")</span></span>

A <a href="#landmark" class="role-reference"><code>landmark</code></a> region that contains a collection of items and objects that, as a whole, combine to create a search facility. See related <a href="#form" class="role-reference"><code>form</code></a> and <a href="#searchbox" class="role-reference"><code>searchbox</code></a>.

A search region may be a mix of host language form controls, scripted controls, and hyperlinks.

User agents *SHOULD* treat elements with the role of `search` as navigational <a href="#dfn-landmark" class="internalDFN">landmarks</a>.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#landmark" class="role-reference"><code>landmark</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`searchbox` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="searchbox (role)">§</span>](#searchbox "Permalink for searchbox (role)")</span></span>

A type of textbox intended for specifying search criteria. See related <a href="#textbox" class="role-reference"><code>textbox</code></a> and <a href="#search" class="role-reference"><code>search</code></a>.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#textbox" class="role-reference"><code>textbox</code></a></td></tr><tr class="even"><td>Base Concept:</td><td><a href="https://www.w3.org/TR/html5/sec-forms.html#text-typetext-state-and-search-state-typesearch">HTML <code>input[type="search"]</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-autocomplete" class="property-reference"><code>aria-autocomplete</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-multiline" class="property-reference"><code>aria-multiline</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-placeholder" class="property-reference"><code>aria-placeholder</code></a></li><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-required" class="property-reference"><code>aria-required</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`section` <span class="type-indicator">(abstract role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="section (abstract role)">§</span>](#section "Permalink for section (abstract role)")</span></span>

A renderable structural containment unit in a document or application.

Note

`section` is an abstract role used for the ontology. Authors should not use this role in content.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Is Abstract:</td><td>True</td></tr><tr class="even"><td>Superclass Role:</td><td><a href="#structure" class="role-reference"><code>structure</code></a></td></tr><tr class="odd"><td>Subclass Roles:</td><td><ul><li><a href="#alert" class="role-reference"><code>alert</code></a></li><li><a href="#cell" class="role-reference"><code>cell</code></a></li><li><a href="#definition" class="role-reference"><code>definition</code></a></li><li><a href="#figure" class="role-reference"><code>figure</code></a></li><li><a href="#group" class="role-reference"><code>group</code></a></li><li><a href="#img" class="role-reference"><code>img</code></a></li><li><a href="#landmark" class="role-reference"><code>landmark</code></a></li><li><a href="#list" class="role-reference"><code>list</code></a></li><li><a href="#listitem" class="role-reference"><code>listitem</code></a></li><li><a href="#log" class="role-reference"><code>log</code></a></li><li><a href="#marquee" class="role-reference"><code>marquee</code></a></li><li><a href="#math" class="role-reference"><code>math</code></a></li><li><a href="#note" class="role-reference"><code>note</code></a></li><li><a href="#status" class="role-reference"><code>status</code></a></li><li><a href="#table" class="role-reference"><code>table</code></a></li><li><a href="#tabpanel" class="role-reference"><code>tabpanel</code></a></li><li><a href="#term" class="role-reference"><code>term</code></a></li><li><a href="#tooltip" class="role-reference"><code>tooltip</code></a></li></ul></td></tr><tr class="even"><td>Related Concepts:</td><td><ul><li><a href="https://www.w3.org/TR/SMIL3/smil-timing.html#edef-par">SMIL par</a></li></ul></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>n/a</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`sectionhead` <span class="type-indicator">(abstract role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="sectionhead (abstract role)">§</span>](#sectionhead "Permalink for sectionhead (abstract role)")</span></span>

A structure that labels or summarizes the topic of its related section.

Note

`sectionhead` is an abstract role used for the ontology. Authors should not use this role in content.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Is Abstract:</td><td>True</td></tr><tr class="even"><td>Superclass Role:</td><td><a href="#structure" class="role-reference"><code>structure</code></a></td></tr><tr class="odd"><td>Subclass Roles:</td><td><ul><li><a href="#columnheader" class="role-reference"><code>columnheader</code></a></li><li><a href="#heading" class="role-reference"><code>heading</code></a></li><li><a href="#rowheader" class="role-reference"><code>rowheader</code></a></li><li><a href="#tab" class="role-reference"><code>tab</code></a></li></ul></td></tr><tr class="even"><td>Supported States and Properties:</td><td><a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`select` <span class="type-indicator">(abstract role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="select (abstract role)">§</span>](#select "Permalink for select (abstract role)")</span></span>

A form widget that allows the user to make selections from a set of choices.

Note

`select` is an abstract role used for the ontology. Authors should not use this role in content.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Is Abstract:</td><td>True</td></tr><tr class="even"><td>Superclass Role:</td><td><ul><li><a href="#composite" class="role-reference"><code>composite</code></a></li><li><a href="#group" class="role-reference"><code>group</code></a></li></ul></td></tr><tr class="odd"><td>Subclass Roles:</td><td><ul><li><a href="#combobox" class="role-reference"><code>combobox</code></a></li><li><a href="#listbox" class="role-reference"><code>listbox</code></a></li><li><a href="#menu" class="role-reference"><code>menu</code></a></li><li><a href="#radiogroup" class="role-reference"><code>radiogroup</code></a></li><li><a href="#tree" class="role-reference"><code>tree</code></a></li></ul></td></tr><tr class="even"><td>Supported States and Properties:</td><td><a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`separator` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="separator (role)">§</span>](#separator "Permalink for separator (role)")</span></span>

A divider that separates and distinguishes sections of content or groups of menuitems.

There are two types of separators: a static <a href="#structure" class="role-reference"><code>structure</code></a> that provides only a visible boundary and a focusable, interactive <a href="#widget" class="role-reference"><code>widget</code></a> that is also moveable. If a `separator` is not focusable, it is revealed to <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> as a static structural element. For example, a static `separator` can be used to help visually divide two groups of menu items in a menu or to provide a horizontal rule between two sections of a page.

Authors *MAY* make a `separator` focusable to create a `widget` that both provides a visible boundary between two sections of content and enables the user to change the relative size of the sections by changing the position of the `separator`. A variable `separator` widget can be moved continuously within a range, whereas a fixed `separator` widget supports only two discrete positions. Typically, a fixed `separator` widget is used to toggle one of the sections between expanded and collapsed states.

If the `separator` is focusable, authors *MUST* set the value of <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> to a [number](#valuetype_number) reflecting the current position of the `separator` and update that value when it changes. Authors *SHOULD* also provide the value of <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a> if it is not `0` and the value of <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a> if it is not `100`. If missing or not a number, the implicit values of these attributes are as follows:

-   The implicit value of `aria-valuemin` is `0`.
-   The implicit value of `aria-valuemax` is `100`.
-   The implicit value of `aria-valuenow` is `50`.

In applications where there is more than one focusable `separator`, authors *SHOULD* provide an accessible name for each one.

Elements with the role `separator` have an implicit <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> value of `horizontal`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#structure" class="role-reference"><code>structure</code></a> (if not focusable)</li><li><a href="#widget" class="role-reference"><code>widget</code></a> (if focusable)</li></ul></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/html5/grouping-content.html#the-hr-element">HTML <code>hr</code></a></td></tr><tr class="odd"><td>Required States and Properties:</td><td><ul><li><a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a> (if focusable)</li><li><a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a> (if focusable)</li><li><a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> (if focusable)</li></ul></td></tr><tr class="even"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a></li><li><a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a> (if focusable)</li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Children Presentational:</td><td>True</td></tr><tr class="even"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> is <code class="sourceCode default">horizontal</code>.<br />
Default for <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a> is <code>0</code>.<br />
Default for <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a> is <code>100</code>.<br />
Default for <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> is <code>50</code>.<br />
</td></tr><tr class="odd"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> is <code class="sourceCode default">horizontal</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`slider` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="slider (role)">§</span>](#slider "Permalink for slider (role)")</span></span>

A user input where the user selects a value from within a given range.

A slider represents the current value and range of possible values via the size of the slider and position of the thumb. It is typically possible to add or subtract to the value by using directional keys such as arrow keys.

Authors *MUST* set the <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a>, <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a>, and <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> attributes. If missing, their implicit values follow the same rules as the [HTML range input type](https://www.w3.org/TR/html5/sec-forms.html#range-state-typerange "Range state"):

-   If `aria-valuemin` is missing or not a [number](#valuetype_number), it defaults to 0 (zero).
-   If `aria-valuemax` is missing or not a [number](#valuetype_number), it defaults to 100.
-   If `aria-valuenow` is missing or not a [number](#valuetype_number), it defaults to the value half way between `aria-valuemin` and `aria-valuemax`.
-   If `aria-valuenow` is present but less than `aria-valuemin`, it defaults to the value of `aria-valuemin`.
-   If `aria-valuenow` is present but greater than `aria-valuemax`, it defaults to the value of `aria-valuemax`.

Elements with the role `slider` have an implicit <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> value of `horizontal`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#input" class="role-reference"><code>input</code></a></li><li><a href="#range" class="role-reference"><code>range</code></a></li></ul></td></tr><tr class="even"><td>Required States and Properties:</td><td><ul><li><a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a></li><li><a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a></li><li><a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a></li></ul></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a></li><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li><li><a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr><tr class="odd"><td>Children Presentational:</td><td>True</td></tr><tr class="even"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> is <code class="sourceCode default">horizontal</code>.<br />
Default for <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a> is <code class="sourceCode default">0</code>.<br />
Default for <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a> is <code class="sourceCode default">100</code>.<br />
Default for <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> is half way between <code class="sourceCode default">aria-valuemax</code> and <code class="sourceCode default">aria-valuemin</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`spinbutton` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="spinbutton (role)">§</span>](#spinbutton "Permalink for spinbutton (role)")</span></span>

A form of <a href="#range" class="role-reference"><code>range</code></a> that expects the user to select from among discrete choices.

A `spinbutton` typically allows the user to select from the given range through the use of an up and down button on the keyboard. Visibly, the current value is incremented or decremented until a maximum or minimum value is reached. Authors *SHOULD* ensure this functionality is accomplished programmatically through the use of up and down arrows on the keyboard.

Although a `spinbutton` is similar in appearance to many presentations of `select`, it is advisable to use `spinbutton` when working with known ranges (especially in the case of large ranges) as opposed to distinct options. For example, a `spinbutton` representing a range from 1 to 1,000,000 would provide much better performance than a `select` <a href="#dfn-widget" class="internalDFN">widget</a> representing the same values.

Authors *MAY* create a `spinbutton` with children or owned elements, but *MUST* limit those elements to a <a href="#textbox" class="role-reference"><code>textbox</code></a> and/or two <a href="#button" class="role-reference"><code>buttons</code></a>.

To be <a href="#dfn-keyboard-accessible" class="internalDFN">keyboard accessible</a>, authors *SHOULD* manage focus of descendants for all instances of this <a href="#dfn-role" class="internalDFN">role</a>, as described in [Managing Focus](#managingfocus). When a `spinbutton` receives focus, authors *SHOULD* ensure focus is placed on the `textbox` element if one is present, and on the `spinbutton` itself otherwise. Authors *SHOULD NOT* include contained `button` elements in the primary navigation ring, e.g., the Tab ring in HTML, because they are superfluous for people using keyboard devices.

Authors *MUST* set the <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> attribute. Authors *SHOULD* set the <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a> attribute when there is a minimum value, and the <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a> attribute when there is a maximum value. If missing or not a [number](#valuetype_number), the implicit values of these attributes are as follows:

-   The implicit value of `aria-valuemin` is that there is no minimum value.
-   The implicit value of `aria-valuemax` is that there is no maximum value.
-   The implicit value of `aria-valuenow` is `0`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#composite" class="role-reference"><code>composite</code></a></li><li><a href="#input" class="role-reference"><code>input</code></a></li><li><a href="#range" class="role-reference"><code>range</code></a></li></ul></td></tr><tr class="even"><td>Required States and Properties:</td><td><ul><li><a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a></li><li><a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a></li><li><a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a></li></ul></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li><li><a href="#aria-required" class="property-reference"><code>aria-required</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li><li><a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr><tr class="odd"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a> is that there is no minimum value.<br />
Default for <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a> is that there is no maximum value.<br />
Default for <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> is <code>0</code>.<br />
</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`status` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="status (role)">§</span>](#status "Permalink for status (role)")</span></span>

A type of <a href="#dfn-live-region" class="internalDFN">live region</a> whose content is advisory information for the user but is not important enough to justify an <a href="#alert" class="role-reference"><code>alert</code></a>, often but not necessarily presented as a status bar.

Authors *SHOULD* ensure an element with role `status` does not receive focus as a result of change in status.

Status is a form of <a href="#dfn-live-region" class="internalDFN">live region</a>. If another part of the page controls what appears in the status, authors *SHOULD* make the <a href="#dfn-relationship" class="internalDFN">relationship</a> explicit with the <a href="#aria-controls" class="property-reference"><code>aria-controls</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a>.

<a href="#dfn-assistive-technology" class="internalDFN">Assistive technologies</a> *MAY* reserve some cells of a Braille display to render the status.

Elements with the role `status` have an implicit <a href="#aria-live" class="property-reference"><code>aria-live</code></a> value of `polite` and an implicit <a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a> value of `true`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#progressbar" class="role-reference"><code>progressbar</code></a></li><li><a href="#timer" class="role-reference"><code>timer</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-live" class="property-reference"><code>aria-live</code></a> is <code class="sourceCode default">polite</code>.<br />
Default for <a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a> is <code class="sourceCode default">true</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`structure` <span class="type-indicator">(abstract role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="structure (abstract role)">§</span>](#structure "Permalink for structure (abstract role)")</span></span>

A document structural <a href="#dfn-element" class="internalDFN">element</a>.

<a href="#dfn-role" class="internalDFN">Roles</a> for document structure support the accessibility of dynamic web content by helping <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> determine active content versus static document content. Structural roles by themselves do not all map to <a href="#dfn-accessibility-api" class="internalDFN">accessibility APIs</a>, but are used to create <a href="#dfn-widget" class="internalDFN">widget</a> roles or assist content adaptation for assistive technologies.

Note

`structure` is an abstract role used for the ontology. Authors should not use this role in content.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Is Abstract:</td><td>True</td></tr><tr class="even"><td>Superclass Role:</td><td><a href="#roletype" class="role-reference"><code>roletype</code></a></td></tr><tr class="odd"><td>Subclass Roles:</td><td><ul><li><a href="#application" class="role-reference"><code>application</code></a></li><li><a href="#document" class="role-reference"><code>document</code></a></li><li><a href="#presentation" class="role-reference"><code>presentation</code></a></li><li><a href="#rowgroup" class="role-reference"><code>rowgroup</code></a></li><li><a href="#section" class="role-reference"><code>section</code></a></li><li><a href="#sectionhead" class="role-reference"><code>sectionhead</code></a></li><li><a href="#separator" class="role-reference"><code>separator</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>n/a</li></ul></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`switch` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="switch (role)">§</span>](#switch "Permalink for switch (role)")</span></span>

A type of checkbox that represents on/off values, as opposed to checked/unchecked values. See related <a href="#checkbox" class="role-reference"><code>checkbox</code></a>.

The <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> of a `switch` indicates whether the input is on (`true`) or off (`false`). The `mixed` value is invalid, and user agents *MUST* treat a `mixed` value as equivalent to `false` for this role.

Note

A `switch` provides approximately the same functionality as a `checkbox` and toggle `button`, but makes it possible for assistive technologies to present the widget in a fashion consistent with its on-screen appearance.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#checkbox" class="role-reference"><code>checkbox</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="#button" class="role-reference"><code>button</code></a></td></tr><tr class="odd"><td>Required States and Properties:</td><td><ul><li><a href="#aria-checked" class="state-reference"><code>aria-checked</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr><tr class="odd"><td>Children Presentational:</td><td>True</td></tr><tr class="even"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> is <code class="sourceCode default">false</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`tab` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="tab (role)">§</span>](#tab "Permalink for tab (role)")</span></span>

A grouping label providing a mechanism for selecting the tab content that is to be rendered to the user.

If a <a href="#tabpanel" class="role-reference"><code>tabpanel</code></a> or item in a `tabpanel` has focus, the associated `tab` is the currently active tab in the <a href="#tablist" class="role-reference"><code>tablist</code></a>, as defined in [Managing Focus](#managingfocus). `tablist` elements, which contain a set of associated <a href="#tab" class="role-reference"><code>tab</code></a> elements, are typically placed near a series of `tabpanel` elements, usually preceding it. See the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\] for details on implementing a tab set design pattern.

Authors *MUST* ensure <a href="#dfn-element" class="internalDFN">elements</a> with <a href="#dfn-role" class="internalDFN">role</a> `tab` are contained in, or <a href="#dfn-owned-element" class="internalDFN">owned</a> by, an element with the role `tablist`.

Authors *SHOULD* ensure the `tabpanel` associated with the currently active tab is <a href="#dfn-perceivable" class="internalDFN">perceivable</a> to the user.

For a single-selectable `tablist`, authors *SHOULD* hide other `tabpanel` <a href="#dfn-element" class="internalDFN">elements</a> from the user until the user selects the tab associated with that tabpanel. For a multi-selectable `tablist`, authors *SHOULD* ensure each visible `tabpanel` has its <a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> set to `true`, and that the remaining hidden `tabpanel` elements have their `aria-expanded` attributes set to `false`.

In either case, authors *SHOULD* ensure that a selected tab has its <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a> attribute set to `true`, that inactive tab elements have their `aria-selected` attribute set to `false`, and that the currently selected tab provides a visual indication that it is selected. In the absence of an `aria-selected` attribute on the current tab, <a href="#dfn-user-agent" class="internalDFN">user agents</a> *SHOULD* indicate to <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> through the platform <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a> that the currently focused tab is selected.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#sectionhead" class="role-reference"><code>sectionhead</code></a></li><li><a href="#widget" class="role-reference"><code>widget</code></a></li></ul></td></tr><tr class="even"><td>Required Context Role:</td><td><a href="#tablist" class="role-reference"><code>tablist</code></a></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a></li><li><a href="#aria-selected" class="state-reference"><code>aria-selected</code></a></li><li><a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="even"><td>Children Presentational:</td><td>True</td></tr><tr class="odd"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a> is <code class="sourceCode default">false</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`table` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="table (role)">§</span>](#table "Permalink for table (role)")</span></span>

A <a href="#section" class="role-reference"><code>section</code></a> containing data arranged in rows and columns. See related <a href="#grid" class="role-reference"><code>grid</code></a>.

The `table` role is intended for tabular containers which are not interactive. If the tabular container maintains a selection state, provides its own two-dimensional navigation, or allows the user to rearrange or otherwise manipulate its contents or the display thereof, authors *SHOULD* use `grid` or <a href="#treegrid" class="role-reference"><code>treegrid</code></a> instead.

Authors *SHOULD* prefer the use of the host language's semantics for table whenever possible, such as the [HTML `table`](https://www.w3.org/TR/html5/tabular-data.html#the-table-element) element.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#grid" class="role-reference"><code>grid</code></a></li></ul></td></tr><tr class="odd"><td>Base Concept:</td><td><a href="https://www.w3.org/TR/html5/tabular-data.html#the-table-element">HTML <code>table</code></a></td></tr><tr class="even"><td>Required Owned Elements:</td><td><ul><li><a href="#row" class="role-reference"><code>row</code></a></li><li><a href="#rowgroup" class="role-reference"><code>rowgroup</code></a> → <a href="#row" class="role-reference"><code>row</code></a></li></ul></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-colcount" class="property-reference"><code>aria-colcount</code></a></li><li><a href="#aria-rowcount" class="property-reference"><code>aria-rowcount</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`tablist` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="tablist (role)">§</span>](#tablist "Permalink for tablist (role)")</span></span>

A list of <a href="#tab" class="role-reference"><code>tab</code></a> <a href="#dfn-element" class="internalDFN">elements</a>, which are references to <a href="#tabpanel" class="role-reference"><code>tabpanel</code></a> elements.

To be <a href="#dfn-keyboard-accessible" class="internalDFN">keyboard accessible</a>, authors *SHOULD* manage focus of descendants for all instances of this <a href="#dfn-role" class="internalDFN">role</a>, as described in [Managing Focus](#managingfocus).

For a single-selectable `tablist`, authors *SHOULD* hide other `tabpanel` <a href="#dfn-element" class="internalDFN">elements</a> from the user until the user selects the tab associated with that tabpanel. For a multi-selectable <a href="#tablist" class="role-reference"><code>tablist</code></a>, authors *SHOULD* ensure each visible `tabpanel` has its <a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> set to `true`, and that the remaining hidden `tabpanel` elements have their `aria-expanded` attributes set to `false`.

`tablist` elements are typically placed near usually preceding, a series of `tabpanel` elements. See the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\] for details on implementing a tab set design pattern.

Elements with the role `tablist` have an implicit <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> value of `horizontal`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#composite" class="role-reference"><code>composite</code></a></li></ul></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="http://www.daisy.org/z3986/2005/Z3986-2005.html#Guide">DAISY Guide</a></td></tr><tr class="odd"><td>Required Owned Elements:</td><td><a href="#tab" class="role-reference"><code>tab</code></a></td></tr><tr class="even"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-level" class="property-reference"><code>aria-level</code></a></li><li><a href="#aria-multiselectable" class="property-reference"><code>aria-multiselectable</code></a></li><li><a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> is <code class="sourceCode default">horizontal</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`tabpanel` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="tabpanel (role)">§</span>](#tabpanel "Permalink for tabpanel (role)")</span></span>

A container for the resources associated with a <a href="#tab" class="role-reference"><code>tab</code></a>, where each `tab` is contained in a <a href="#tablist" class="role-reference"><code>tablist</code></a>.

Authors *SHOULD* associate a `tabpanel` <a href="#dfn-element" class="internalDFN">element</a> with its `tab`, either by using the <a href="#aria-controls" class="property-reference"><code>aria-controls</code></a> attribute on the tab to reference the tab panel, or by using the <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a> attribute on the tab panel to reference the tab.

`tablist` elements are typically placed near, usually preceding, a series of <a href="#tabpanel" class="role-reference"><code>tabpanel</code></a> elements. See the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\] for details on implementing a tab set design pattern.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`term` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="term (role)">§</span>](#term "Permalink for term (role)")</span></span>

A word or phrase with a corresponding definition. See related <a href="#definition" class="role-reference"><code>definition</code></a>.

The `term` role is used to explicitly identify a word or phrase for which a `definition` has been provided by the author or is expected to be provided by the user.

Authors *SHOULD NOT* use the `term` role on interactive elements such as links because doing so could prevent users of <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> from interacting with those elements.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/html5/grouping-content.html#the-dt-element">HTML <code>dt</code></a></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`textbox` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="textbox (role)">§</span>](#textbox "Permalink for textbox (role)")</span></span>

A type of input that allows free-form text as its value.

If the <a href="#aria-multiline" class="property-reference"><code>aria-multiline</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> is `true`, the <a href="#dfn-widget" class="internalDFN">widget</a> accepts line breaks within the input, as in an HTML `textarea`. Otherwise, this is a simple text box. The intended use is for languages that do not have a text input <a href="#dfn-element" class="internalDFN">element</a>, or cases in which an element with different <a href="#dfn-semantics" class="internalDFN">semantics</a> is repurposed as a text field.

Note

In most user agent implementations, the default behavior of the ENTER or RETURN key is different between the single-line and multi-line text fields in HTML. When user has focus in a single-line `<input type="text">` element, the keystroke usually submits the form. When user has focus in a multi-line `<textarea>` element, the keystroke inserts a line break. The WAI-ARIA `textbox` role differentiates these types of boxes with the `aria-multiline` attribute, so authors are advised to be aware of this distinction when designing the field.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#input" class="role-reference"><code>input</code></a></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#searchbox" class="role-reference"><code>searchbox</code></a></li></ul></td></tr><tr class="odd"><td>Related Concepts:</td><td><ul><li><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/#ui-input">XForms input</a></li><li><a href="https://www.w3.org/TR/html5/sec-forms.html#the-textarea-element">HTML <code>textarea</code></a></li><li><a href="https://www.w3.org/TR/html5/sec-forms.html#text-typetext-state-and-search-state-typesearch">HTML <code>input[type="text"]</code></a></li></ul></td></tr><tr class="even"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-autocomplete" class="property-reference"><code>aria-autocomplete</code></a></li><li><a href="#aria-multiline" class="property-reference"><code>aria-multiline</code></a></li><li><a href="#aria-placeholder" class="property-reference"><code>aria-placeholder</code></a></li><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li><li><a href="#aria-required" class="property-reference"><code>aria-required</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`timer` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="timer (role)">§</span>](#timer "Permalink for timer (role)")</span></span>

A type of <a href="#dfn-live-region" class="internalDFN">live region</a> containing a numerical counter which indicates an amount of elapsed time from a start point, or the time remaining until an end point.

The text contents of the timer <a href="#dfn-object" class="internalDFN">object</a> indicate the current time measurement, and are updated as that amount changes. The timer value is not necessarily machine parsable, but authors *SHOULD* update the text contents at fixed intervals, except when the timer is paused or reaches an end-point.

Elements with the role `timer` have an implicit <a href="#aria-live" class="property-reference"><code>aria-live</code></a> value of `off`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#status" class="role-reference"><code>status</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`toolbar` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="toolbar (role)">§</span>](#toolbar "Permalink for toolbar (role)")</span></span>

A collection of commonly used function buttons or controls represented in compact visual form.

The toolbar is often a subset of functions found in a <a href="#menubar" class="role-reference"><code>menubar</code></a>, designed to reduce user effort in using these functions. Authors *MUST* supply a label on each toolbar when the application contains more than one toolbar.

Authors *MAY* manage focus of descendants for all instances of this <a href="#dfn-role" class="internalDFN">role</a>, as described in [Managing Focus](#managingfocus).

Elements with the role `toolbar` have an implicit <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> value of `horizontal`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#group" class="role-reference"><code>group</code></a></td></tr><tr class="even"><td>Related Concepts:</td><td><a href="#menubar" class="role-reference"><code>menubar</code></a></td></tr><tr class="odd"><td>Supported States and Properties:</td><td><a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td>author</td></tr><tr class="even"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> is <code class="sourceCode default">horizontal</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`tooltip` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="tooltip (role)">§</span>](#tooltip "Permalink for tooltip (role)")</span></span>

A contextual popup that displays a description for an element.

The `tooltip` typically becomes visible in response to a mouse hover, or after the owning element receives keyboard focus. In each of these cases, authors *SHOULD* display the tooltip after a short delay. The use of a WAI-ARIA tooltip is a supplement to the normal tooltip behavior of the user agent.

Note

Typical tooltip delays last from one to five seconds.

Authors *SHOULD* ensure that elements with the <a href="#dfn-role" class="internalDFN">role</a> `tooltip` are referenced through the use of <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a> before or at the time the tooltip is displayed.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#section" class="role-reference"><code>section</code></a></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="even"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`tree` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="tree (role)">§</span>](#tree "Permalink for tree (role)")</span></span>

A type of <a href="#list" class="role-reference"><code>list</code></a> that may contain sub-level nested groups that can be collapsed and expanded.

To be <a href="#dfn-keyboard-accessible" class="internalDFN">keyboard accessible</a>, authors *SHOULD* manage focus of descendants for all instances of this <a href="#dfn-role" class="internalDFN">role</a>, as described in [Managing Focus](#managingfocus).

Elements with the role `tree` have an implicit <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> value of `vertical`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><a href="#select" class="role-reference"><code>select</code></a></td></tr><tr class="even"><td>Subclass Roles:</td><td><ul><li><a href="#treegrid" class="role-reference"><code>treegrid</code></a></li></ul></td></tr><tr class="odd"><td>Required Owned Elements:</td><td><ul><li><a href="#group" class="role-reference"><code>group</code></a> → <a href="#treeitem" class="role-reference"><code>treeitem</code></a></li><li><a href="#treeitem" class="role-reference"><code>treeitem</code></a></li></ul></td></tr><tr class="even"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-multiselectable" class="property-reference"><code>aria-multiselectable</code></a></li><li><a href="#aria-required" class="property-reference"><code>aria-required</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td><ul><li>author</li></ul></td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr><tr class="even"><td>Implicit Value for Role:</td><td>Default for <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> is <code class="sourceCode default">vertical</code>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`treegrid` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="treegrid (role)">§</span>](#treegrid "Permalink for treegrid (role)")</span></span>

A <a href="#grid" class="role-reference"><code>grid</code></a> whose rows can be expanded and collapsed in the same manner as for a <a href="#tree" class="role-reference"><code>tree</code></a>.

If <a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a> is set on an <a href="#dfn-element" class="internalDFN">element</a> with <a href="#dfn-role" class="internalDFN">role</a> `treegrid`, <a href="#dfn-user-agent" class="internalDFN">user agents</a> *MUST* propagate the value to all <a href="#gridcell" class="role-reference"><code>gridcell</code></a> elements owned by the `treegrid` and expose the value in the accessibility API. An author *MAY* override the propagated value of `aria-readonly` for an individual `gridcell` element.

When the `aria-readonly` attribute is applied to a focusable `gridcell`, it indicates whether the content contained in the `gridcell` is editable. The `aria-readonly` attribute does not represent availability of functions for navigating or manipulating the `treegrid` itself.

In a `treegrid` that provides content editing functions, if the content of a focusable `gridcell` element is not editable, authors *MAY* set `aria-readonly` to `true` on the `gridcell` element. However, if a `treegrid` presents a collection of elements that do not support `aria-readonly`, such as a collection of <a href="#link" class="role-reference"><code>link</code></a> elements, it is not necessary for the author to specify a value for `aria-readonly`.

To be <a href="#dfn-keyboard-accessible" class="internalDFN">keyboard accessible</a>, authors *SHOULD* manage focus of descendants for all instances of this <a href="#dfn-role" class="internalDFN">role</a>, as described in [Managing Focus](#managingfocus).

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#grid" class="role-reference"><code>grid</code></a></li><li><a href="#tree" class="role-reference"><code>tree</code></a></li></ul></td></tr><tr class="even"><td>Required Owned Elements:</td><td><ul><li><a href="#row" class="role-reference"><code>row</code></a></li><li><a href="#rowgroup" class="role-reference"><code>rowgroup</code></a> → <a href="#row" class="role-reference"><code>row</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a></li><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-colcount" class="property-reference"><code>aria-colcount</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-level" class="property-reference"><code>aria-level</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-multiselectable" class="property-reference"><code>aria-multiselectable</code></a></li><li><a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-required" class="property-reference"><code>aria-required</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li><li><a href="#aria-rowcount" class="property-reference"><code>aria-rowcount</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`treeitem` <span class="type-indicator">(role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="treeitem (role)">§</span>](#treeitem "Permalink for treeitem (role)")</span></span>

An option item of a <a href="#tree" class="role-reference"><code>tree</code></a>. This is an <a href="#dfn-element" class="internalDFN">element</a> within a tree that may be expanded or collapsed if it contains a sub-level group of tree item elements.

A collection of `treeitem` elements to be expanded and collapsed are enclosed in an element with the <a href="#group" class="role-reference"><code>group</code></a> <a href="#dfn-role" class="internalDFN">role</a>.

Authors *MUST* ensure <a href="#dfn-element" class="internalDFN">elements</a> with <a href="#dfn-role" class="internalDFN">role</a> `treeitem` are contained in, or <a href="#dfn-owned-element" class="internalDFN">owned</a> by, an element with the role `group` or `tree`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Superclass Role:</td><td><ul><li><a href="#listitem" class="role-reference"><code>listitem</code></a></li><li><a href="#option" class="role-reference"><code>option</code></a></li></ul></td></tr><tr class="even"><td>Required Context Role:</td><td><ul><li><a href="#group" class="role-reference"><code>group</code></a></li><li><a href="#tree" class="role-reference"><code>tree</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-checked" class="state-reference"><code>aria-checked (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded (state)</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-level" class="property-reference"><code>aria-level</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li><li><a href="#aria-selected" class="state-reference"><code>aria-selected (state)</code></a> <strong>(required)</strong></li><li><a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td><ul><li>contents</li><li>author</li></ul></td></tr><tr class="odd"><td>Accessible Name Required:</td><td>True</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`widget` <span class="type-indicator">(abstract role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="widget (abstract role)">§</span>](#widget "Permalink for widget (abstract role)")</span></span>

An interactive component of a graphical user interface (GUI).

Widgets are discrete user interface objects with which the user can interact. Widget <a href="#dfn-role" class="internalDFN">roles</a> map to standard features in <a href="#dfn-accessibility-api" class="internalDFN">accessibility APIs</a>. When the user navigates an element assigned any of the non-abstract subclass roles of `widget`, <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> that typically intercept standard keyboard events *SHOULD* switch to an application browsing mode, and pass keyboard events through to the web application. The intent is to hint to certain <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> to switch from normal browsing mode into a mode more appropriate for interacting with a web application; some <a href="#dfn-user-agent" class="internalDFN">user agents</a> have a browse navigation mode where keys, such as up and down arrows, are used to browse the document, and this native behavior prevents the use of these keys by a web application.

Note

`widget` is an abstract role used for the ontology. Authors should not use this role in content.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Is Abstract:</td><td>True</td></tr><tr class="even"><td>Superclass Role:</td><td><a href="#roletype" class="role-reference"><code>roletype</code></a></td></tr><tr class="odd"><td>Subclass Roles:</td><td><ul><li><a href="#command" class="role-reference"><code>command</code></a></li><li><a href="#composite" class="role-reference"><code>composite</code></a></li><li><a href="#gridcell" class="role-reference"><code>gridcell</code></a></li><li><a href="#input" class="role-reference"><code>input</code></a></li><li><a href="#range" class="role-reference"><code>range</code></a></li><li><a href="#row" class="role-reference"><code>row</code></a></li><li><a href="#separator" class="role-reference"><code>separator</code></a></li><li><a href="#tab" class="role-reference"><code>tab</code></a></li></ul></td></tr><tr class="even"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="odd"><td>Name From:</td><td><ul><li>n/a</li></ul></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">`window` <span class="type-indicator">(abstract role)</span><span class="permalink" typeof="bookmark">[<span property="title" content="window (abstract role)">§</span>](#window "Permalink for window (abstract role)")</span></span>

A browser or application window.

<a href="#dfn-element" class="internalDFN">Elements</a> with this <a href="#dfn-role" class="internalDFN">role</a> have a window-like behavior in a graphical user interface (GUI) context, regardless of whether they are implemented as a native window in the operating system, or merely as a section of the document styled to look like a window.

Note

In the description of this role, the term "application" does not refer to the <a href="#application" class="role-reference"><code>application</code></a> role, which specifies specific assistive technology behaviors.

Note

`window` is an abstract role used for the ontology. Authors should not use this role in content.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Is Abstract:</td><td>True</td></tr><tr class="even"><td>Superclass Role:</td><td><a href="#roletype" class="role-reference"><code>roletype</code></a></td></tr><tr class="odd"><td>Subclass Roles:</td><td><ul><li><a href="#dialog" class="role-reference"><code>dialog</code></a></li></ul></td></tr><tr class="even"><td>Supported States and Properties:</td><td><ul><li><a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a></li><li><a href="#aria-modal" class="property-reference"><code>aria-modal</code></a></li></ul></td></tr><tr class="odd"><td>Inherited States and Properties:</td><td><ul><li><a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a></li><li><a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a></li><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a></li><li><a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a></li><li><a href="#aria-details" class="property-reference"><code>aria-details</code></a></li><li><a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a></li><li><a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a></li><li><a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a></li><li><a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a></li><li><a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a></li><li><a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a></li><li><a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a></li><li><a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a></li><li><a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a></li><li><a href="#aria-label" class="property-reference"><code>aria-label</code></a></li><li><a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a></li><li><a href="#aria-live" class="property-reference"><code>aria-live</code></a></li><li><a href="#aria-owns" class="property-reference"><code>aria-owns</code></a></li><li><a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a></li><li><a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a></li></ul></td></tr><tr class="even"><td>Name From:</td><td>author</td></tr></tbody></table>

<span property="xhv:role" resource="xhv:heading"><span class="secno">6. </span>Supported States and Properties<span class="permalink" typeof="bookmark">[<span property="title" content="6. Supported States and Properties">§</span>](#states_and_properties "Permalink for 6. Supported States and Properties")</span></span>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.1 </span>Clarification of States versus Properties<span class="permalink" typeof="bookmark">[<span property="title" content="6.1 Clarification of States versus Properties">§</span>](#statevsprop "Permalink for 6.1 Clarification of States versus Properties")</span></span>

The terms "states" and "properties" refer to similar features. Both provide specific information about an <a href="#dfn-object" class="internalDFN">object</a>, and both form part of the definition of the nature of <a href="#dfn-role" class="internalDFN">roles</a>. In this document, states and properties are both treated as aria-prefixed markup <a href="#dfn-attribute" class="internalDFN">attributes</a>. However, they are maintained conceptually distinct to clarify subtle differences in their meaning. One major difference is that the values of properties (such as <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a>) are often less likely to change throughout the application life-cycle than the values of states (such as <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a>) which may change frequently due to user interaction. Note that the frequency of change difference is not a rule; a few properties, such as <a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a> are expected to change often. Because the distinction between states and properties is of little consequence to most web content authors, this specification refers to both "states" and "properties" simply as "attributes" whenever possible. See the definitions of <a href="#dfn-state" class="termref">state</a> and <a href="#dfn-property" class="termref">property</a> for more information.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.2 </span>Characteristics of States and Properties<span class="permalink" typeof="bookmark">[<span property="title" content="6.2 Characteristics of States and Properties">§</span>](#state_prop_att "Permalink for 6.2 Characteristics of States and Properties")</span></span>

States and properties have the characteristics described in the following sections.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.2.1 </span>Related Concepts<span class="permalink" typeof="bookmark">[<span property="title" content="6.2.1 Related Concepts">§</span>](#propcharacteristic_relatedconcept "Permalink for 6.2.1 Related Concepts")</span></span>

Advisory information about features from this or other languages that correspond to this <a href="#dfn-state" class="internalDFN">state</a> or <a href="#dfn-property" class="internalDFN">property</a>. While the correspondence may not be exact, it is useful to help understand the intent of the state or property.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.2.2 </span>Used in Roles<span class="permalink" typeof="bookmark">[<span property="title" content="6.2.2 Used in Roles">§</span>](#propcharacteristic_usedinrole "Permalink for 6.2.2 Used in Roles")</span></span>

Advisory information about [roles](#role_definitions) that use this <a href="#dfn-state" class="internalDFN">state</a> or <a href="#dfn-property" class="internalDFN">property</a>. This information is provided to help understand the appropriate usage of the state or property. Use of a given state or property is not defined when used on roles other than those listed.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.2.3 </span>Inherits into Roles<span class="permalink" typeof="bookmark">[<span property="title" content="6.2.3 Inherits into Roles">§</span>](#propcharacteristic_inheritsintoroles "Permalink for 6.2.3 Inherits into Roles")</span></span>

Advisory information about [roles](#role_definitions) that inherit the <a href="#dfn-state" class="internalDFN">state</a> or <a href="#dfn-property" class="internalDFN">property</a> from an ancestor role.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.2.4 </span>Value<span class="permalink" typeof="bookmark">[<span property="title" content="6.2.4 Value">§</span>](#propcharacteristic_value "Permalink for 6.2.4 Value")</span></span>

Value type of the <a href="#dfn-state" class="internalDFN">state</a> or <a href="#dfn-property" class="internalDFN">property</a>. The value may be one of the following types:

true/false  
Value representing either true or false. The default value for this value type is `false` unless otherwise specified.

tristate  
Value representing true or false, with an intermediate "mixed" value. The default value for this value type is `false` unless otherwise specified.

true/false/undefined  
Value representing true, false, or not applicable. For example, an element with <a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a> set to `false` is not currently expanded; an element with <a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a> set to `undefined` is not expandable. The default value for this value type is `undefined` unless otherwise specified.

ID reference  
Reference to the ID of another <a href="#dfn-element" class="internalDFN">element</a> in the same document

ID reference list  
A list of one or more ID references.

integer  
A numerical value without a fractional component.

number  
Any real numerical value.

string  
Unconstrained value type.

token  
One of a limited set of allowed values. An explicit value of `undefined` for this type is the equivalent of providing no value.

token list  
A list of one or more tokens.

URI  
A Uniform Resource Identifier as defined by [RFC 3986](http://www.ietf.org/rfc/rfc3986.txt) \[<a href="#bib-RFC3986" class="bibref">RFC3986</a>\]. It may reference a separate document, or a content fragment identifier in a separate document, or a content fragment identifier within the same document.

These are generic types for states and properties, but do not define specific representation. See [State and Property Attribute Processing](#state_property_processing) for details on how these values are expressed and handled in host languages.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.3 </span>Values for States and Properties<span class="permalink" typeof="bookmark">[<span property="title" content="6.3 Values for States and Properties">§</span>](#state_prop_values "Permalink for 6.3 Values for States and Properties")</span></span>

Many <a href="#dfn-state" class="internalDFN">states</a> and <a href="#dfn-property" class="internalDFN">properties</a> accept a specific set of tokens as values. The allowed values and explanation of their meaning is shown after the table of characteristics. The default value, if defined, is shown in **strong** type, followed by the parenthetical term 'default'. When a value is indicated as the default, the user agent *MUST* follow the behavior prescribed by this value when the state or property is empty or unspecified. Some <a href="#dfn-role" class="internalDFN">roles</a> also define what behavior to use when certain states or properties, that do not have default values, are not provided.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.4 </span>Global States and Properties<span class="permalink" typeof="bookmark">[<span property="title" content="6.4 Global States and Properties">§</span>](#global_states "Permalink for 6.4 Global States and Properties")</span></span>

Some <a href="#dfn-state" class="internalDFN">states</a> and <a href="#dfn-property" class="internalDFN">properties</a> are applicable to all host language <a href="#dfn-element" class="internalDFN">elements</a> regardless of whether a <a href="#dfn-role" class="internalDFN">role</a> is applied. The following global states and properties are supported by all roles and by all base markup elements.

-   <a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a>
-   <a href="#aria-busy" class="state-reference"><code>aria-busy (state)</code></a>
-   <a href="#aria-controls" class="property-reference"><code>aria-controls</code></a>
-   <a href="#aria-current" class="state-reference"><code>aria-current (state)</code></a>
-   <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a>
-   <a href="#aria-details" class="property-reference"><code>aria-details</code></a>
-   <a href="#aria-disabled" class="state-reference"><code>aria-disabled (state)</code></a>
-   <a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a>
-   <a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a>
-   <a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a>
-   <a href="#aria-grabbed" class="state-reference"><code>aria-grabbed (state)</code></a>
-   <a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a>
-   <a href="#aria-hidden" class="state-reference"><code>aria-hidden (state)</code></a>
-   <a href="#aria-invalid" class="state-reference"><code>aria-invalid (state)</code></a>
-   <a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a>
-   <a href="#aria-label" class="property-reference"><code>aria-label</code></a>
-   <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a>
-   <a href="#aria-live" class="property-reference"><code>aria-live</code></a>
-   <a href="#aria-owns" class="property-reference"><code>aria-owns</code></a>
-   <a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a>
-   <a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a>

Global states and properties are applied to the role <a href="#roletype" class="role-reference"><code>roletype</code></a>, which is the base role, and therefore inherit into all roles. To facilitate reading, they are not explicitly identified as either supported or inherited states and properties in the specification. Instead, the inheritance is indicated by a link to this section.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.5 </span>Taxonomy of WAI-ARIA States and Properties<span class="permalink" typeof="bookmark">[<span property="title" content="6.5 Taxonomy of WAI-ARIA States and Properties">§</span>](#state_prop_taxonomy "Permalink for 6.5 Taxonomy of WAI-ARIA States and Properties")</span></span>

States and properties are categorized as follows:

1.  [Widget Attributes](#attrs_widgets)
2.  [Live Region Attributes](#attrs_liveregions)
3.  [Drag-and-Drop Attributes](#attrs_dragdrop)
4.  [Relationship Attributes](#attrs_relationships)

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.5.1 </span>Widget Attributes<span class="permalink" typeof="bookmark">[<span property="title" content="6.5.1 Widget Attributes">§</span>](#attrs_widgets "Permalink for 6.5.1 Widget Attributes")</span></span>

This section contains <a href="#dfn-attribute" class="internalDFN">attributes</a> specific to common user interface <a href="#dfn-element" class="internalDFN">elements</a> found on GUI systems or in rich internet applications which receive user input and process user actions. These attributes are used to support the [widget roles](#widget_roles).

-   <a href="#aria-autocomplete" class="property-reference"><code>aria-autocomplete</code></a>
-   <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a>
-   <a href="#aria-disabled" class="state-reference"><code>aria-disabled</code></a>
-   <a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a>
-   <a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a>
-   <a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a>
-   <a href="#aria-hidden" class="state-reference"><code>aria-hidden</code></a>
-   <a href="#aria-invalid" class="state-reference"><code>aria-invalid</code></a>
-   <a href="#aria-label" class="property-reference"><code>aria-label</code></a>
-   <a href="#aria-level" class="property-reference"><code>aria-level</code></a>
-   <a href="#aria-modal" class="property-reference"><code>aria-modal</code></a>
-   <a href="#aria-multiline" class="property-reference"><code>aria-multiline</code></a>
-   <a href="#aria-multiselectable" class="property-reference"><code>aria-multiselectable</code></a>
-   <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a>
-   <a href="#aria-placeholder" class="property-reference"><code>aria-placeholder</code></a>
-   <a href="#aria-pressed" class="state-reference"><code>aria-pressed</code></a>
-   <a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a>
-   <a href="#aria-required" class="property-reference"><code>aria-required</code></a>
-   <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a>
-   <a href="#aria-sort" class="property-reference"><code>aria-sort</code></a>
-   <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a>
-   <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a>
-   <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a>
-   <a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a>

Widget attributes might be mapped by a <a href="#dfn-user-agent" class="internalDFN">user agent</a> to platform <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a> <a href="#dfn-state" class="internalDFN">state</a>, for access by <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>, or they might be accessed directly from the DOM. User agents *MUST* provide a way for assistive technologies to be notified when states change, either through DOM attribute change <a href="#dfn-event" class="internalDFN">events</a> or platform accessibility API events.

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.5.2 </span>Live Region Attributes<span class="permalink" typeof="bookmark">[<span property="title" content="6.5.2 Live Region Attributes">§</span>](#attrs_liveregions "Permalink for 6.5.2 Live Region Attributes")</span></span>

This section contains <a href="#dfn-attribute" class="internalDFN">attributes</a> specific to <a href="#dfn-live-region" class="internalDFN">live regions</a> in rich internet applications. These attributes may be applied to any <a href="#dfn-element" class="internalDFN">element</a>. The purpose of these attributes is to indicate that content changes may occur without the element having focus, and to provide <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> with information on how to process those content updates. Some <a href="#dfn-role" class="internalDFN">roles</a> specify a default value for the <a href="#aria-live" class="property-reference"><code>aria-live</code></a> attribute specific to that role. An example of a live region is a ticker section that lists updating stock quotes.

-   <a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a>
-   <a href="#aria-busy" class="state-reference"><code>aria-busy</code></a>
-   `aria-live`
-   <a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a>

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.5.3 </span>Drag-and-Drop Attributes<span class="permalink" typeof="bookmark">[<span property="title" content="6.5.3 Drag-and-Drop Attributes">§</span>](#attrs_dragdrop "Permalink for 6.5.3 Drag-and-Drop Attributes")</span></span>

This section lists <a href="#dfn-attribute" class="internalDFN">attributes</a> which indicate information about drag-and-drop interface <a href="#dfn-element" class="internalDFN">elements</a>, such as draggable elements and their drop targets. Drop target information will be rendered visually by the author and provided to <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> through an alternate modality.

-   <a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a>
-   <a href="#aria-grabbed" class="state-reference"><code>aria-grabbed</code></a>

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.5.4 </span>Relationship Attributes<span class="permalink" typeof="bookmark">[<span property="title" content="6.5.4 Relationship Attributes">§</span>](#attrs_relationships "Permalink for 6.5.4 Relationship Attributes")</span></span>

This section lists <a href="#dfn-attribute" class="internalDFN">attributes</a> that indicate <a href="#dfn-relationship" class="internalDFN">relationships</a> or associations between <a href="#dfn-element" class="internalDFN">elements</a> which cannot be readily determined from the document structure.

-   <a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a>
-   <a href="#aria-colcount" class="property-reference"><code>aria-colcount</code></a>
-   <a href="#aria-colindex" class="property-reference"><code>aria-colindex</code></a>
-   <a href="#aria-colspan" class="property-reference"><code>aria-colspan</code></a>
-   <a href="#aria-controls" class="property-reference"><code>aria-controls</code></a>
-   <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a>
-   <a href="#aria-details" class="property-reference"><code>aria-details</code></a>
-   <a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a>
-   <a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a>
-   <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a>
-   <a href="#aria-owns" class="property-reference"><code>aria-owns</code></a>
-   <a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a>
-   <a href="#aria-rowcount" class="property-reference"><code>aria-rowcount</code></a>
-   <a href="#aria-rowindex" class="property-reference"><code>aria-rowindex</code></a>
-   <a href="#aria-rowspan" class="property-reference"><code>aria-rowspan</code></a>
-   <a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a>

### <span property="xhv:role" resource="xhv:heading"><span class="secno">6.6 </span>Definitions of States and Properties (all aria-\* attributes)<span class="permalink" typeof="bookmark">[<span property="title" content="6.6 Definitions of States and Properties (all aria-* attributes)">§</span>](#state_prop_def "Permalink for 6.6 Definitions of States and Properties (all aria-* attributes)")</span></span>

Below is an alphabetical list of WAI-ARIA <a href="#dfn-state" class="internalDFN">states</a> and <a href="#dfn-property" class="internalDFN">properties</a> to be used by rich internet application authors. A detailed definition of each WAI-ARIA state and <a href="#dfn-property" class="internalDFN">property</a> follows this compact list.

<a href="#aria-activedescendant" class="property-reference">aria-activedescendant</a>  
Identifies the currently active element when DOM focus is on a <a href="#composite" class="role-reference"><code>composite</code></a> widget, <a href="#textbox" class="role-reference"><code>textbox</code></a>, <a href="#group" class="role-reference"><code>group</code></a>, or <a href="#application" class="role-reference"><code>application</code></a>.

<a href="#aria-atomic" class="property-reference">aria-atomic</a>  
Indicates whether <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> will present all, or only parts of, the changed region based on the change notifications defined by the <a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a> attribute.

<a href="#aria-autocomplete" class="property-reference">aria-autocomplete</a>  
Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.

<a href="#aria-busy" class="state-reference">aria-busy</a>  
Indicates an element is being modified and that assistive technologies *MAY* want to wait until the modifications are complete before exposing them to the user.

<a href="#aria-checked" class="state-reference">aria-checked</a>  
Indicates the current "checked" <a href="#dfn-state" class="internalDFN">state</a> of checkboxes, radio buttons, and other <a href="#dfn-widget" class="internalDFN">widgets</a>. See related <a href="#aria-pressed" class="state-reference"><code>aria-pressed</code></a> and <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a>.

<a href="#aria-colcount" class="property-reference">aria-colcount</a>  
Defines the total number of columns in a <a href="#table" class="role-reference"><code>table</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>. See related <a href="#aria-colindex" class="property-reference"><code>aria-colindex</code></a>.

<a href="#aria-colindex" class="property-reference">aria-colindex</a>  
Defines an <a href="#dfn-element" class="internalDFN">element's</a> column index or position with respect to the total number of columns within a <a href="#table" class="role-reference"><code>table</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>. See related <a href="#aria-colcount" class="property-reference"><code>aria-colcount</code></a> and <a href="#aria-colspan" class="property-reference"><code>aria-colspan</code></a>.

<a href="#aria-colspan" class="property-reference">aria-colspan</a>  
Defines the number of columns spanned by a cell or gridcell within a <a href="#table" class="role-reference"><code>table</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>. See related <a href="#aria-colindex" class="property-reference"><code>aria-colindex</code></a> and <a href="#aria-rowspan" class="property-reference"><code>aria-rowspan</code></a>.

<a href="#aria-controls" class="property-reference">aria-controls</a>  
Identifies the <a href="#dfn-element" class="internalDFN">element</a> (or elements) whose contents or presence are controlled by the current element. See related <a href="#aria-owns" class="property-reference"><code>aria-owns</code></a>.

<a href="#aria-current" class="state-reference">aria-current</a>  
Indicates the <a href="#dfn-element" class="internalDFN">element</a> that represents the current item within a container or set of related elements.

<a href="#aria-describedby" class="property-reference">aria-describedby</a>  
Identifies the <a href="#dfn-element" class="internalDFN">element</a> (or elements) that describes the <a href="#dfn-object" class="internalDFN">object</a>. See related <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a>.

<a href="#aria-details" class="property-reference">aria-details</a>  
Identifies the <a href="#dfn-element" class="internalDFN">element</a> that provides a detailed, extended description for the <a href="#dfn-object" class="internalDFN">object</a>. See related <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a>.

<a href="#aria-disabled" class="state-reference">aria-disabled</a>  
Indicates that the <a href="#dfn-element" class="internalDFN">element</a> is <a href="#dfn-perceivable" class="internalDFN">perceivable</a> but disabled, so it is not editable or otherwise <a href="#dfn-operable" class="internalDFN">operable</a>. See related <a href="#aria-hidden" class="state-reference"><code>aria-hidden</code></a> and <a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a>.

<a href="#aria-dropeffect" class="property-reference">aria-dropeffect</a>  
\[Deprecated in ARIA 1.1\] Indicates what functions can be performed when a dragged object is released on the drop target.

<a href="#aria-errormessage" class="property-reference">aria-errormessage</a>  
Identifies the <a href="#dfn-element" class="internalDFN">element</a> that provides an error message for the <a href="#dfn-object" class="internalDFN">object</a>. See related <a href="#aria-invalid" class="state-reference"><code>aria-invalid</code></a> and <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a>.

<a href="#aria-expanded" class="state-reference">aria-expanded</a>  
Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

<a href="#aria-flowto" class="property-reference">aria-flowto</a>  
Identifies the next <a href="#dfn-element" class="internalDFN">element</a> (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.

<a href="#aria-grabbed" class="state-reference">aria-grabbed</a>  
\[Deprecated in ARIA 1.1\] Indicates an element's "grabbed" <a href="#dfn-state" class="internalDFN">state</a> in a drag-and-drop operation.

<a href="#aria-haspopup" class="property-reference">aria-haspopup</a>  
Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an <a href="#dfn-element" class="internalDFN">element</a>.

<a href="#aria-hidden" class="state-reference">aria-hidden</a>  
Indicates whether the <a href="#dfn-element" class="internalDFN">element</a> is exposed to an accessibility API. See related <a href="#aria-disabled" class="state-reference"><code>aria-disabled</code></a>.

<a href="#aria-invalid" class="state-reference">aria-invalid</a>  
Indicates the entered value does not conform to the format expected by the application. See related <a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a>.

<a href="#aria-keyshortcuts" class="property-reference">aria-keyshortcuts</a>  
Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

<a href="#aria-label" class="property-reference">aria-label</a>  
Defines a string value that labels the current element. See related <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a>.

<a href="#aria-labelledby" class="property-reference">aria-labelledby</a>  
Identifies the <a href="#dfn-element" class="internalDFN">element</a> (or elements) that labels the current element. See related <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a>.

<a href="#aria-level" class="property-reference">aria-level</a>  
Defines the hierarchical level of an <a href="#dfn-element" class="internalDFN">element</a> within a structure.

<a href="#aria-live" class="property-reference">aria-live</a>  
Indicates that an <a href="#dfn-element" class="internalDFN">element</a> will be updated, and describes the types of updates the <a href="#dfn-user-agent" class="internalDFN">user agents</a>, <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>, and user can expect from the <a href="#dfn-live-region" class="internalDFN">live region</a>.

<a href="#aria-modal" class="property-reference">aria-modal</a>  
Indicates whether an <a href="#dfn-element" class="internalDFN">element</a> is modal when displayed.

<a href="#aria-multiline" class="property-reference">aria-multiline</a>  
Indicates whether a text box accepts multiple lines of input or only a single line.

<a href="#aria-multiselectable" class="property-reference">aria-multiselectable</a>  
Indicates that the user may select more than one item from the current selectable descendants.

<a href="#aria-orientation" class="property-reference">aria-orientation</a>  
Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

<a href="#aria-owns" class="property-reference">aria-owns</a>  
Identifies an <a href="#dfn-element" class="internalDFN">element</a> (or elements) in order to define a visual, functional, or contextual parent/child <a href="#dfn-relationship" class="internalDFN">relationship</a> between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related <a href="#aria-controls" class="property-reference"><code>aria-controls</code></a>.

<a href="#aria-placeholder" class="property-reference">aria-placeholder</a>  
Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.

<a href="#aria-posinset" class="property-reference">aria-posinset</a>  
Defines an <a href="#dfn-element" class="internalDFN">element</a>'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related <a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a>.

<a href="#aria-pressed" class="state-reference">aria-pressed</a>  
Indicates the current "pressed" <a href="#dfn-state" class="internalDFN">state</a> of toggle buttons. See related <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> and <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a>.

<a href="#aria-readonly" class="property-reference">aria-readonly</a>  
Indicates that the <a href="#dfn-element" class="internalDFN">element</a> is not editable, but is otherwise <a href="#dfn-operable" class="internalDFN">operable</a>. See related <a href="#aria-disabled" class="state-reference"><code>aria-disabled</code></a>.

<a href="#aria-relevant" class="property-reference">aria-relevant</a>  
Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related <a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a>.

<a href="#aria-required" class="property-reference">aria-required</a>  
Indicates that user input is required on the <a href="#dfn-element" class="internalDFN">element</a> before a form may be submitted.

<a href="#aria-roledescription" class="property-reference">aria-roledescription</a>  
Defines a human-readable, author-localized description for the <a href="#dfn-role" class="internalDFN">role</a> of an <a href="#dfn-element" class="internalDFN">element</a>.

<a href="#aria-rowcount" class="property-reference">aria-rowcount</a>  
Defines the total number of rows in a <a href="#table" class="role-reference"><code>table</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>. See related <a href="#aria-rowindex" class="property-reference"><code>aria-rowindex</code></a>.

<a href="#aria-rowindex" class="property-reference">aria-rowindex</a>  
Defines an <a href="#dfn-element" class="internalDFN">element's</a> row index or position with respect to the total number of rows within a <a href="#table" class="role-reference"><code>table</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>. See related <a href="#aria-rowcount" class="property-reference"><code>aria-rowcount</code></a> and <a href="#aria-rowspan" class="property-reference"><code>aria-rowspan</code></a>.

<a href="#aria-rowspan" class="property-reference">aria-rowspan</a>  
Defines the number of rows spanned by a cell or gridcell within a <a href="#table" class="role-reference"><code>table</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>. See related <a href="#aria-rowindex" class="property-reference"><code>aria-rowindex</code></a> and <a href="#aria-colspan" class="property-reference"><code>aria-colspan</code></a>.

<a href="#aria-selected" class="state-reference">aria-selected</a>  
Indicates the current "selected" <a href="#dfn-state" class="internalDFN">state</a> of various <a href="#dfn-widget" class="internalDFN">widgets</a>. See related <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> and <a href="#aria-pressed" class="state-reference"><code>aria-pressed</code></a>.

<a href="#aria-setsize" class="property-reference">aria-setsize</a>  
Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related <a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a>.

<a href="#aria-sort" class="property-reference">aria-sort</a>  
Indicates if items in a table or grid are sorted in ascending or descending order.

<a href="#aria-valuemax" class="property-reference">aria-valuemax</a>  
Defines the maximum allowed value for a range <a href="#dfn-widget" class="internalDFN">widget</a>.

<a href="#aria-valuemin" class="property-reference">aria-valuemin</a>  
Defines the minimum allowed value for a range <a href="#dfn-widget" class="internalDFN">widget</a>.

<a href="#aria-valuenow" class="property-reference">aria-valuenow</a>  
Defines the current value for a range <a href="#dfn-widget" class="internalDFN">widget</a>. See related <a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a>.

<a href="#aria-valuetext" class="property-reference">aria-valuetext</a>  
Defines the human readable text alternative of <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> for a range <a href="#dfn-widget" class="internalDFN">widget</a>.

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-activedescendant" aria-describedby="desc-aria-activedescendant">`aria-activedescendant` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-activedescendant (property)">§</span>](#aria-activedescendant "Permalink for aria-activedescendant (property)")</span></span>

Identifies the currently active element when DOM focus is on a <a href="#composite" class="role-reference"><code>composite</code></a> widget, <a href="#textbox" class="role-reference"><code>textbox</code></a>, <a href="#group" class="role-reference"><code>group</code></a>, or <a href="#application" class="role-reference"><code>application</code></a>.

The `aria-activedescendant` property provides an alternative method of managing focus for interactive elements that may contain multiple focusable descendants, such as menus, grids, and toolbars. Instead of moving DOM focus among descendant elements, authors *MAY* set DOM focus on an <a href="#dfn-element" class="internalDFN">element</a> that supports `aria-activedescendant` and then use `aria-activedescendant` to refer to the element that is active.

Authors *MUST* ensure that one of the following two sets of conditions is met when setting the value of `aria-activedescendant` on an element with DOM focus:

1.  The value of `aria-activedescendant` refers to an element that is either a descendant of the element with DOM focus or is a logical descendant as indicated by the <a href="#aria-owns" class="property-reference"><code>aria-owns</code></a> attribute.
2.  The element with DOM focus is a `textbox` with <a href="#aria-controls" class="property-reference"><code>aria-controls</code></a> referring to an element that supports `aria-activedescendant`, and the value of `aria-activedescendant` specified for the `textbox` refers to either a descendant of the element controlled by the `textbox` or is a logical descendant of that controlled element as indicated by the `aria-owns` attribute. For example, in a <a href="#combobox" class="role-reference"><code>combobox</code></a>, focus may remain on the `textbox` while the value of `aria-activedescendant` on the `textbox` element refers to a descendant of a popup <a href="#listbox" class="role-reference"><code>listbox</code></a> that is controlled by the `textbox`.

Authors *SHOULD* also ensure that the currently active descendant is visible and in view (or scrolls into view) when focused.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/SVG2/">SVG</a> [<a href="#bib-SVG2" class="bibref">SVG2</a>] and <a href="https://www.w3.org/TR/dom/">DOM</a> [<a href="#bib-dom" class="bibref">dom</a>] active</td></tr><tr class="even"><td>Used in Roles:</td><td><ul><li><a href="#application" class="role-reference"><code>application</code></a></li><li><a href="#composite" class="role-reference"><code>composite</code></a></li><li><a href="#group" class="role-reference"><code>group</code></a></li><li><a href="#textbox" class="role-reference"><code>textbox</code></a></li></ul></td></tr><tr class="odd"><td>Inherits into Roles:</td><td><ul><li><a href="#combobox" class="role-reference"><code>combobox</code></a></li><li><a href="#grid" class="role-reference"><code>grid</code></a></li><li><a href="#listbox" class="role-reference"><code>listbox</code></a></li><li><a href="#menu" class="role-reference"><code>menu</code></a></li><li><a href="#menubar" class="role-reference"><code>menubar</code></a></li><li><a href="#radiogroup" class="role-reference"><code>radiogroup</code></a></li><li><a href="#row" class="role-reference"><code>row</code></a></li><li><a href="#searchbox" class="role-reference"><code>searchbox</code></a></li><li><a href="#select" class="role-reference"><code>select</code></a></li><li><a href="#spinbutton" class="role-reference"><code>spinbutton</code></a></li><li><a href="#tablist" class="role-reference"><code>tablist</code></a></li><li><a href="#toolbar" class="role-reference"><code>toolbar</code></a></li><li><a href="#tree" class="role-reference"><code>tree</code></a></li><li><a href="#treegrid" class="role-reference"><code>treegrid</code></a></li></ul></td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_idref">ID reference</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-atomic" aria-describedby="desc-aria-atomic">`aria-atomic` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-atomic (property)">§</span>](#aria-atomic "Permalink for aria-atomic (property)")</span></span>

Indicates whether <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> will present all, or only parts of, the changed region based on the change notifications defined by the <a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a> attribute.

Both <a href="#dfn-accessibility-api" class="internalDFN">accessibility APIs</a> and the [Document Object Model](https://www.w3.org/TR/dom/) \[<a href="#bib-dom" class="bibref">dom</a>\] provide events to allow the assistive technologies to determine changed areas of the document.

When the content of a <a href="#dfn-live-region" class="internalDFN">live region</a> changes, user agents *SHOULD* examine the changed <a href="#dfn-element" class="internalDFN">element</a> and traverse the ancestors to find the first element with <a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a> set, and apply the appropriate behavior for the cases below.

1.  If none of the ancestors have explicitly set `aria-atomic`, the default is that `aria-atomic` is `false`, and assistive technologies will only present the changed node to the user.
2.  If `aria-atomic` is explicitly set to `false`, assistive technologies will stop searching up the ancestor chain and present only the changed node to the user.
3.  If `aria-atomic` is explicitly set to `true`, assistive technologies will present the entire contents of the element, including the author-defined live region label if one exists.

When `aria-atomic` is `true`, assistive technologies *MAY* choose to combine several changes and present the entire changed region at once.

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_true-false">true/false</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><strong>false (default)</strong></td><td>Assistive technologies will present only the changed node or nodes.</td></tr><tr class="even"><td>true</td><td>Assistive technologies will present the entire changed region as a whole, including the author-defined label if one exists.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-autocomplete" aria-describedby="desc-aria-autocomplete">`aria-autocomplete` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-autocomplete (property)">§</span>](#aria-autocomplete "Permalink for aria-autocomplete (property)")</span></span>

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.

The `aria-autocomplete` property describes the type of interaction model a <a href="#textbox" class="role-reference"><code>textbox</code></a>, <a href="#searchbox" class="role-reference"><code>searchbox</code></a>, or <a href="#combobox" class="role-reference"><code>combobox</code></a> employs when dynamically helping users complete text input. It distinguishes between two models: the inline model (`aria-autocomplete="inline"`) that presents a value completion prediction inside the text input and the list model (`aria-autocomplete="list"`) that presents a collection of possible values in a separate element that pops up adjacent to the text input. It is possible for an input to offer both models at the same time (`aria-autocomplete="both"`).

The `aria-autocomplete` property is limited to describing predictive behaviors of an input element. Authors *SHOULD* either omit specifying a value for `aria-autocomplete` or set `aria-autocomplete` to `none` if an input element provides one or more input proposals where none of the proposals are dependent on the specific input provided by the user. For instance, a combobox where the value of `aria-autocomplete` would be `none` is a search field that displays suggested values by listing the 5 most recently used search terms without any filtering of the list based on the user's input. Elements with a role that supports `aria-autocomplete` have a default value for `aria-autocomplete` of `none`.

When an inline suggestion is made as a user types in an input, suggested text for completing the value of the field dynamically appears in the field after the input cursor, and the suggested value is accepted as the value of the input if the user performs an action that causes focus to leave the field. When an element has `aria-autocomplete` set to `inline` or `both`, authors *SHOULD* ensure that the automatically suggested portion of the text is presented as selected text. This enables assistive technologies to distinguish between a user's input and the automatic suggestion and, in the event that the suggestion is not the desired value, enables the user to easily delete the suggestion or replace it by continuing to type.

If an element has `aria-autocomplete` set to `list` or `both`, authors *MUST* ensure both of the following conditions are met:

1.  The element has a value specified for <a href="#aria-controls" class="property-reference"><code>aria-controls</code></a> that refers to the element that contains the collection of suggested values.
2.  Either the element or a containing element with role `combobox` has a value for <a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a> that matches the role of the element that contains the collection of suggested values.

Some implementations of the list model require the user to perform an action, such as moving focus to the suggestion with the Down Arrow or clicking on the suggestion, in order to choose the suggestion. In such implementations, authors *MAY* manage focus by either using <a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a> if the collection container supports it or by moving DOM focus to the suggestion. However, other implementations of the list model automatically highlight one suggestion as the selected value that will be accepted when the field loses focus, e.g., when the user presses the Tab key or clicks on a different field. If an element has `aria-autocomplete` set to `list` or `both`, and if a suggestion is automatically selected as the user provides input, authors *MUST* ensure all the following conditions are met:

1.  The collection of suggestions is presented in an element with a role that supports `aria-activedescendant`.
2.  The value of `aria-activedescendant` set on the input field is dynamically adjusted to refer to the element containing the selected suggestion as described in the definition of `aria-activedescendant`.
3.  DOM focus remains on the text input while the suggestions are displayed.

The `aria-autocomplete` property is not intended to indicate the presence of a completion suggestion, and authors *SHOULD NOT* dynamically change its value in order to communicate the presence of a suggestion. When an element has `aria-autocomplete` set to `list` or `both`, authors *SHOULD* use the <a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a> state to communicate whether the element that presents the suggestion collection is displayed.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td>XForms selection attribute in <a href="https://www.w3.org/TR/2006/REC-xforms-20060314/slice8.html#ui-selectMany">select</a></td></tr><tr class="even"><td>Used in Roles:</td><td><ul><li><a href="#combobox" class="role-reference"><code>combobox</code></a></li><li><a href="#textbox" class="role-reference"><code>textbox</code></a></li></ul></td></tr><tr class="odd"><td>Inherits into Roles:</td><td><ul><li><a href="#searchbox" class="role-reference"><code>searchbox</code></a></li></ul></td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_token">token</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>inline</td><td>When a user is providing input, text suggesting one way to complete the provided input may be dynamically inserted after the caret.</td></tr><tr class="even"><td>list</td><td>When a user is providing input, an element containing a collection of values that could complete the provided input may be displayed.</td></tr><tr class="odd"><td>both</td><td>When a user is providing input, an element containing a collection of values that could complete the provided input may be displayed. If displayed, one value in the collection is automatically selected, and the text needed to complete the automatically selected value appears after the caret in the input.</td></tr><tr class="even"><td><strong>none (default)</strong></td><td>When a user is providing input, an automatic suggestion that attempts to predict how the user intends to complete the input is not displayed.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="state-name" title="aria-busy" aria-describedby="desc-aria-busy">`aria-busy` <span class="type-indicator">(state)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-busy (state)">§</span>](#aria-busy "Permalink for aria-busy (state)")</span></span>

Indicates an element is being modified and that assistive technologies *MAY* want to wait until the modifications are complete before exposing them to the user.

The default value of `aria-busy` is `false` for all elements. When `aria-busy` is `true` for an element, assistive technologies *MAY* ignore changes to content owned by that element and then process all changes made during the busy period as a single, atomic update when `aria-busy` becomes `false`.

If it is necessary to make multiple additions, modifications, or removals within a container element that is already either partially or fully rendered, authors *MAY* set `aria-busy` to `true` on the container element before the first change, and then set it to `false` when the last change is complete. For example, if multiple changes to a <a href="#dfn-live-region" class="internalDFN">live region</a> should be spoken as a single unit of speech, authors *MAY* set `aria-busy` to `true` while the changes are being made and then set it to `false` when the changes are complete and ready to be spoken.

If an element with role <a href="#feed" class="role-reference"><code>feed</code></a> is marked busy, assistive technologies *MAY* defer rendering changes that occur inside the `feed` with the exception of user-initiated changes that occur inside the <a href="#article" class="role-reference"><code>article</code></a> that the user is reading during the busy period.

If changes to a rendered <a href="#widget" class="role-reference"><code>widget</code></a> would create a state where the `widget` is missing [required owned elements](#mustContain) during script execution, authors *MUST* set `aria-busy` to `true` on the `widget` during the update process. For example, if a rendered tree grid required a set of simultaneous updates to multiple discontiguous branches, an alternative to replacing the complete tree element with a single update would be to mark the tree busy while each of the branches are modified.

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_true-false">true/false</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><strong>false (default)</strong>:</td><td>There are no expected updates for the element.</td></tr><tr class="even"><td>true</td><td>The element is being updated.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="state-name" title="aria-checked" aria-describedby="desc-aria-checked">`aria-checked` <span class="type-indicator">(state)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-checked (state)">§</span>](#aria-checked "Permalink for aria-checked (state)")</span></span>

Indicates the current "checked" <a href="#dfn-state" class="internalDFN">state</a> of checkboxes, radio buttons, and other <a href="#dfn-widget" class="internalDFN">widgets</a>. See related <a href="#aria-pressed" class="state-reference"><code>aria-pressed</code></a> and <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a>.

The <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> indicates whether the <a href="#dfn-element" class="internalDFN">element</a> is checked (`true`), unchecked (`false`), or represents a group of other elements that have a mixture of checked and unchecked values (`mixed`). Most inputs only support values of `true` and `false`, but the `mixed` value is supported by certain tri-state inputs such as a <a href="#checkbox" class="role-reference"><code>checkbox</code></a> or <a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a>.

The `mixed` value is *not* supported on <a href="#radio" class="role-reference"><code>radio</code></a>, <a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a>, <a href="#switch" class="role-reference"><code>switch</code></a> or any element that inherits from these in the <a href="#dfn-taxonomy" class="internalDFN">taxonomy</a>, and <a href="#dfn-user-agent" class="internalDFN">user agents</a> *MUST* treat a `mixed` value as equivalent to `false` for those <a href="#dfn-role" class="internalDFN">roles</a>.

Examples using the `mixed` value of tri-state inputs are covered in [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\]

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#checkbox" class="role-reference"><code>checkbox</code></a></li><li><a href="#option" class="role-reference"><code>option</code></a></li><li><a href="#radio" class="role-reference"><code>radio</code></a></li><li><a href="#switch" class="role-reference"><code>switch</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a></li><li><a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a></li><li><a href="#treeitem" class="role-reference"><code>treeitem</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_tristate">tristate</a></td></tr></tbody></table>

Values:

Value

Description

false

The element supports being checked but is not currently checked.

mixed

Indicates a mixed mode value for a tri-state checkbox or menuitemcheckbox.

true

The element is checked.

**undefined (default)**

The element does not support being checked.

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-colcount" aria-describedby="desc-aria-colcount">`aria-colcount` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-colcount (property)">§</span>](#aria-colcount "Permalink for aria-colcount (property)")</span></span>

Defines the total number of columns in a <a href="#table" class="role-reference"><code>table</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>. See related <a href="#aria-colindex" class="property-reference"><code>aria-colindex</code></a>.

If all of the columns are present in the DOM, it is not necessary to set this <a href="#dfn-attribute" class="internalDFN">attribute</a> as the <a href="#dfn-user-agent" class="internalDFN">user agent</a> can automatically calculate the total number of columns. However, if only a portion of the columns is present in the DOM at a given moment, this attribute is needed to provide an explicit indication of the number of columns in the full table.

Authors *MUST* set the value of <a href="#aria-colcount" class="property-reference"><code>aria-colcount</code></a> to an integer equal to the number of columns in the full table. If the total number of columns is unknown, authors *MUST* set the value of `aria-colcount` to `-1` to indicate that the value should not be calculated by the user agent.

The following example shows a grid with 16 columns, of which columns 2, 3, 4, and 9 are displayed to the user.

Example 13

    <div role="grid" aria-colcount="16">
      <div role="rowgroup">
        <div role="row">
          <span role="columnheader" aria-colindex="2">First Name</span>
          <span role="columnheader" aria-colindex="3">Last Name</span>
          <span role="columnheader" aria-colindex="4">Company</span>
          <span role="columnheader" aria-colindex="9">Phone</span>
        </div>
      </div>
      <div role="rowgroup">
        <div role="row">
          <span role="gridcell" aria-colindex="2">Fred</span>
          <span role="gridcell" aria-colindex="3">Jackson</span>
          <span role="gridcell" aria-colindex="4">Acme, Inc.</span>
          <span role="gridcell" aria-colindex="9">555-1234</span>
        </div>
        <div role="row">
          <span role="gridcell" aria-colindex="2">Sara</span>
          <span role="gridcell" aria-colindex="3">James</span>
          <span role="gridcell" aria-colindex="4">Acme, Inc.</span>
          <span role="gridcell" aria-colindex="9">555-1235</span>
        </div>
       …
      </div>
    </div>

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#table" class="role-reference"><code>table</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#grid" class="role-reference"><code>grid</code></a></li><li><a href="#treegrid" class="role-reference"><code>treegrid</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_integer">integer</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-colindex" aria-describedby="desc-aria-colindex">`aria-colindex` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-colindex (property)">§</span>](#aria-colindex "Permalink for aria-colindex (property)")</span></span>

Defines an <a href="#dfn-element" class="internalDFN">element's</a> column index or position with respect to the total number of columns within a <a href="#table" class="role-reference"><code>table</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>. See related <a href="#aria-colcount" class="property-reference"><code>aria-colcount</code></a> and <a href="#aria-colspan" class="property-reference"><code>aria-colspan</code></a>.

If all of the columns are present in the DOM, it is not necessary to set this <a href="#dfn-attribute" class="internalDFN">attribute</a> as the <a href="#dfn-user-agent" class="internalDFN">user agent</a> can automatically calculate the column index of each cell or <a href="#gridcell" class="role-reference"><code>gridcell</code></a>. However, if only a portion of the columns is present in the DOM at a given moment, this attribute is needed to provide an explicit indication of the column of each cell or gridcell with respect to the full table.

Authors *MUST* set the value for <a href="#aria-colindex" class="property-reference"><code>aria-colindex</code></a> to an integer greater than or equal to 1, greater than the `aria-colindex` value of any previous elements within the same row, and less than or equal to the number of columns in the full table. For a cell or gridcell which spans multiple columns, authors *MUST* set the value of `aria-colindex` to the start of the span.

If the set of columns which is present in the DOM is contiguous, and if there are no cells which span more than one row or column in that set, then authors *MAY* place `aria-colindex` on each row, setting the value to the index of the first column of the set. Otherwise, authors *SHOULD* place `aria-colindex` on all of the children or <a href="#dfn-owned-element" class="internalDFN">owned</a> elements of each row.

The following example shows a grid with 16 columns, of which columns 2 through 5 are displayed to the user. Because the set of columns is contiguous, `aria-colindex` can be placed on each row.

Example 14

    <div role="grid" aria-colcount="16">
      <div role="rowgroup">
        <div role="row" aria-colindex="2">
          <span role="columnheader">First Name</span>
          <span role="columnheader">Last Name</span>
          <span role="columnheader">Company</span>
          <span role="columnheader">Address</span>
        </div>
      </div>
      <div role="rowgroup">
        <div role="row" aria-colindex="2">
          <span role="gridcell">Fred</span>
          <span role="gridcell">Jackson</span>
          <span role="gridcell">Acme, Inc.</span>
          <span role="gridcell">123 Broad St.</span>
        </div>
        <div role="row" aria-colindex="2">
          <span role="gridcell">Sara</span>
          <span role="gridcell">James</span>
          <span role="gridcell">Acme, Inc.</span>
          <span role="gridcell">123 Broad St.</span>
        </div>
       …
      </div>
    </div>

The following example shows a grid with 16 columns, of which columns 2 through 5 are displayed to the user. While the set of columns is contiguous, some of the cells span multiple rows. As a result, `aria-colindex` needs to be placed on all of the owned elements of each row.

Example 15

    <div role="grid" aria-colcount="16">
      <div role="rowgroup">
        <div role="row">
          <span role="columnheader" aria-colindex="2">First Name</span>
          <span role="columnheader" aria-colindex="3">Last Name</span>
          <span role="columnheader" aria-colindex="4">Company</span>
          <span role="columnheader" aria-colindex="5">Address</span>
        </div>
      </div>
      <div role="rowgroup">
        <div role="row">
          <span role="gridcell" aria-colindex="2">Fred</span>
          <span role="gridcell" aria-colindex="3">Jackson</span>
          <span role="gridcell" aria-colindex="4" aria-rowspan="2">Acme, Inc.</span>
          <span role="gridcell" aria-colindex="5" aria-rowspan="2">123 Broad St.</span>
        </div>
        <div role="row">
          <span role="gridcell" aria-colindex="2">Sara</span>
          <span role="gridcell" aria-colindex="3">James</span>
        </div>
       …
      </div>
    </div>

The following example shows a grid with 16 columns, of which columns 2, 3, 4, and 9 are displayed to the user. Because the set of columns is non-contiguous, `aria-colindex` needs to be placed on all of the owned elements of each row.

Example 16

    <div role="grid" aria-colcount="16">
      <div role="rowgroup">
        <div role="row">
          <span role="columnheader" aria-colindex="2">First Name</span>
          <span role="columnheader" aria-colindex="3">Last Name</span>
          <span role="columnheader" aria-colindex="4">Company</span>
          <span role="columnheader" aria-colindex="9">Phone</span>
        </div>
      </div>
      <div role="rowgroup">
        <div role="row">
          <span role="gridcell" aria-colindex="2">Fred</span>
          <span role="gridcell" aria-colindex="3">Jackson</span>
          <span role="gridcell" aria-colindex="4">Acme, Inc.</span>
          <span role="gridcell" aria-colindex="9">555-1234</span>
        </div>
        <div role="row">
          <span role="gridcell" aria-colindex="2">Sara</span>
          <span role="gridcell" aria-colindex="3">James</span>
          <span role="gridcell" aria-colindex="4">Acme, Inc.</span>
          <span role="gridcell" aria-colindex="9">555-1235</span>
        </div>
       …
      </div>
    </div>

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#cell" class="role-reference"><code>cell</code></a></li><li><a href="#row" class="role-reference"><code>row</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#columnheader" class="role-reference"><code>columnheader</code></a></li><li><a href="#gridcell" class="role-reference"><code>gridcell</code></a></li><li><a href="#rowheader" class="role-reference"><code>rowheader</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_integer">integer</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-colspan" aria-describedby="desc-aria-colspan">`aria-colspan` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-colspan (property)">§</span>](#aria-colspan "Permalink for aria-colspan (property)")</span></span>

Defines the number of columns spanned by a cell or gridcell within a <a href="#table" class="role-reference"><code>table</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>. See related <a href="#aria-colindex" class="property-reference"><code>aria-colindex</code></a> and <a href="#aria-rowspan" class="property-reference"><code>aria-rowspan</code></a>.

This <a href="#dfn-attribute" class="internalDFN">attribute</a> is intended for cells and gridcells which are not contained in a native table. When defining the column span of cells or gridcells in a native table, authors *SHOULD* use the host language's attribute instead of <a href="#aria-colspan" class="property-reference"><code>aria-colspan</code></a>. If `aria-colspan` is used on an element for which the host language provides an equivalent attribute, <a href="#dfn-user-agent" class="internalDFN">user agents</a> *MUST* ignore the value of `aria-colspan` and instead expose the value of the host language's attribute to <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>.

Authors *MUST* set the value of `aria-colspan` to an integer greater than or equal to 1 and less than the value which would cause the cell or gridcell to overlap the next cell or gridcell in the same row.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#cell" class="role-reference"><code>cell</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#columnheader" class="role-reference"><code>columnheader</code></a></li><li><a href="#gridcell" class="role-reference"><code>gridcell</code></a></li><li><a href="#rowheader" class="role-reference"><code>rowheader</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_integer">integer</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-controls" aria-describedby="desc-aria-controls">`aria-controls` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-controls (property)">§</span>](#aria-controls "Permalink for aria-controls (property)")</span></span>

Identifies the <a href="#dfn-element" class="internalDFN">element</a> (or elements) whose contents or presence are controlled by the current element. See related <a href="#aria-owns" class="property-reference"><code>aria-owns</code></a>.

For example:

-   A table of contents tree view may control the content of a neighboring document pane.
-   A group of checkboxes may control what commodity prices are tracked live in a table or graph.
-   A tab controls the display of its associated tab panel.

Characteristics:

Characteristic

Value

Used in Roles:

All elements of the base markup

Value:

[ID reference list](#valuetype_idref_list)

#### <span property="xhv:role" resource="xhv:heading"><span class="state-name" title="aria-current" aria-describedby="desc-aria-current">`aria-current` <span class="type-indicator">(state)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-current (state)">§</span>](#aria-current "Permalink for aria-current (state)")</span></span>

Indicates the <a href="#dfn-element" class="internalDFN">element</a> that represents the current item within a container or set of related elements.

The <a href="#aria-current" class="state-reference"><code>aria-current</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> is an enumerated type. Any value not included in the list of allowed values *SHOULD* be treated by <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> as if the value `true` had been provided. If the attribute is not present or its value is an empty string or `undefined`, the default value of `false` applies and the `aria-current` <a href="#dfn-state" class="internalDFN">state</a> *MUST NOT* be exposed by user agents or assistive technologies.

The `aria-current` attribute is used when an element within a set of related elements is visually styled to indicate it is the current item in the set. For example:

-   A `page` token used to indicate a link within a set of pagination links, where the link is visually styled to represent the currently-displayed page.
-   A `step` token used to indicate a link within a step indicator for a step-based process, where the link is visually styled to represent the current step.
-   A `location` token used to indicate the image that is visually highlighted as the current component of a flow chart.
-   A `date` token used to indicate the current date within a calendar.
-   A `time` token used to indicate the current time within a timetable.

Authors *SHOULD* only mark one element in a set of elements as current with `aria-current`.

Authors *SHOULD NOT* use the `aria-current` attribute as a substitute for <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a> in widgets where `aria-selected` has the same meaning. For example, in a <a href="#tablist" class="role-reference"><code>tablist</code></a>, `aria-selected` is used on a <a href="#tab" class="role-reference"><code>tab</code></a> to indicate the currently-displayed <a href="#tabpanel" class="role-reference"><code>tabpanel</code></a>.

Note

In some use cases for widgets that support `aria-selected`, current and selected can have different meanings and can both be used within the same set of elements. For example, `aria-current="page"` can be used in a navigation <a href="#tree" class="role-reference"><code>tree</code></a> to indicate which page is currently displayed, while `aria-selected="true"` indicates which page will be displayed if the user activates the <a href="#treeitem" class="role-reference"><code>treeitem</code></a>. Furthermore, the same tree may support operating on one or more selected pages (treeitems) by way of a context menu containing options such as "delete" and "move."

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_token">token</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>page</td><td>Represents the current page within a set of pages.</td></tr><tr class="even"><td>step</td><td>Represents the current step within a process.</td></tr><tr class="odd"><td>location</td><td>Represents the current location within an environment or context.</td></tr><tr class="even"><td>date</td><td>Represents the current date within a collection of dates.</td></tr><tr class="odd"><td>time</td><td>Represents the current time within a set of times.</td></tr><tr class="even"><td>true</td><td>Represents the current item within a set.</td></tr><tr class="odd"><td><strong>false (default)</strong></td><td>Does not represent the current item within a set.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-describedby" aria-describedby="desc-aria-describedby">`aria-describedby` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-describedby (property)">§</span>](#aria-describedby "Permalink for aria-describedby (property)")</span></span>

Identifies the <a href="#dfn-element" class="internalDFN">element</a> (or elements) that describes the <a href="#dfn-object" class="internalDFN">object</a>. See related <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a>.

The `aria-labelledby` attribute is similar to the <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a> in that both reference other elements to calculate a text alternative, but a label should be concise, where a description is intended to provide more verbose information.

The element or elements referenced by the aria-describedby comprise the entire description. Include ID references to multiple elements if necessary, or enclose a set of elements (e.g., paragraphs) with the element referenced by the ID.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><ul><li>Hint or Help in <a href="https://www.w3.org/TR/2007/REC-xforms-20071029/">XForms</a> [<a href="#bib-XFORMS10" class="bibref">XFORMS10</a>]</li><li>Label in XForms</li><li>Label in <a href="https://www.w3.org/TR/2002/REC-xhtml1-20020801/">HTML</a> [<a href="#bib-xhtml11" class="bibref">xhtml11</a>]</li><li>online help</li><li>HTML table cell headers</li></ul></td></tr><tr class="even"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_idref_list">ID reference list</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-details" aria-describedby="desc-aria-details">`aria-details` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-details (property)">§</span>](#aria-details "Permalink for aria-details (property)")</span></span>

Identifies the <a href="#dfn-element" class="internalDFN">element</a> that provides a detailed, extended description for the <a href="#dfn-object" class="internalDFN">object</a>. See related <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a>.

The `aria-details` attribute references a single element that provides more detailed information than would normally be provided by `aria-describedby`. It enables <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> to make users aware of the availability of an extended description as well as navigate to it. Authors *SHOULD* ensure the element referenced by `aria-details` is visible to all users.

Unlike elements referenced by `aria-describedby`, the element referenced by `aria-details` is not used in either the Accessible [Name Computation](https://www.w3.org/TR/accname-aam-1.1/#mapping_additional_nd_name) or the Accessible [Description Computation](https://www.w3.org/TR/accname-aam-1.1/#mapping_additional_nd_description) as defined in the Accessible Name and Description specification \[<a href="#bib-accname-aam-1.1" class="bibref">accname-aam-1.1</a>\]. Thus, the content of an element referenced by `aria-details` is not flattened to a string when presented to assistive technology users. This makes `aria-details` particularly useful when converting the information to a string would cause a loss of information or make the extended description more difficult to understand.

In some user agents, multiple reference relationships for descriptive information are not supported by the accessibility API. In such cases, if both `aria-describedby` and `aria-details` are provided on an element, `aria-details` takes precedence.

A common use for `aria-details` is in digital publishing where an extended description needs to be conveyed in a book that requires structural markup or the embedding of other technology to provide illustrative content. The following example demonstrates this scenario.

Example 17

    <!-- Provision of an extended description -->
    <img src="pythagorean.jpg" alt="Pythagorean Theorem" aria-details="det">
    <details id="det">
      <summary>Example</summary>
      <p>
        The Pythagorean Theorem is a relationship in Euclidean Geometry between the three sides of
        a right triangle, where the square of the hypotenuse is the sum of the squares of the two
        opposing sides.
      </p>
      <p>
        The following drawing illustrates an application of the Pythagorean Theorem when used to
        construct a skateboard ramp.
      </p>
      <object data="skatebd-ramp.svg"  type="image/svg+xml"/>
      <p>
        In this example you will notice a skateboard with a base and vertical board whose width
        is the width of the ramp. To compute how long the ramp must be, simply calculate the
        base length, square it, sum it with the square of the height of the ramp, and take the
        square root of the sum.
      </p>
    </details>

Alternatively, `aria-details` may refer to a link to a web page having the extended description, as shown in the following example.

Example 18

    <!-- Provision of an extended description -->
    <img src="pythagorean.jpg" alt="Pythagorean Theorem" aria-details="det">
    <p>
      See an <a href="http://foo.com/pt.html" id="det">Application of the Pythagorean Theorem</a>.
    </p>

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_idref">ID reference</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="state-name" title="aria-disabled" aria-describedby="desc-aria-disabled">`aria-disabled` <span class="type-indicator">(state)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-disabled (state)">§</span>](#aria-disabled "Permalink for aria-disabled (state)")</span></span>

Indicates that the <a href="#dfn-element" class="internalDFN">element</a> is <a href="#dfn-perceivable" class="internalDFN">perceivable</a> but disabled, so it is not editable or otherwise <a href="#dfn-operable" class="internalDFN">operable</a>. See related <a href="#aria-hidden" class="state-reference"><code>aria-hidden</code></a> and <a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a>.

For example, irrelevant options in a radio group may be disabled. Disabled elements might not receive focus from the tab order. For some disabled elements, applications might choose not to support navigation to descendants. In addition to setting the <a href="#aria-disabled" class="state-reference"><code>aria-disabled</code></a> attribute, authors *SHOULD* change the appearance (grayed out, etc.) to indicate that the item has been disabled.

The <a href="#dfn-state" class="internalDFN">state</a> of being disabled applies to the current element and all focusable descendant elements of the element on which the `aria-disabled` <a href="#dfn-attribute" class="internalDFN">attribute</a> is applied.

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_true-false">true/false</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><strong>false (default)</strong></td><td>The element is enabled.</td></tr><tr class="even"><td>true</td><td>The element and all focusable descendants are disabled and its value cannot be changed by the user.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-dropeffect" aria-describedby="desc-aria-dropeffect">`aria-dropeffect` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-dropeffect (property)">§</span>](#aria-dropeffect "Permalink for aria-dropeffect (property)")</span></span>

\[Deprecated in ARIA 1.1\] Indicates what functions can be performed when a dragged object is released on the drop target.

Note

The `aria-dropeffect` property is expected to be replaced by a new feature in a future version of WAI-ARIA. Authors are therefore advised to treat `aria-dropeffect` as <a href="#dfn-deprecated" class="internalDFN">deprecated</a>.

This <a href="#dfn-property" class="internalDFN">property</a> allows assistive technologies to convey the possible drag options available to users, including whether a pop-up menu of choices is provided by the application. Typically, drop effect functions can only be provided once an object has been grabbed for a drag operation as the drop effect functions available are dependent on the object being dragged.

More than one drop effect may be supported for a given <a href="#dfn-element" class="internalDFN">element</a>. Therefore, the value of this <a href="#dfn-attribute" class="internalDFN">attribute</a> is a space-delimited set of tokens indicating the possible effects, or `none` if there is no supported operation. In addition to setting the <a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a> attribute, authors *SHOULD* show a visual indication of potential drop targets.

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_token_list">token list</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>copy</td><td>A duplicate of the source object will be dropped into the target.</td></tr><tr class="even"><td>execute</td><td>A function supported by the drop target is executed, using the drag source as an input.</td></tr><tr class="odd"><td>link</td><td>A reference or shortcut to the dragged object will be created in the target object.</td></tr><tr class="even"><td>move</td><td>The source object will be removed from its current location and dropped into the target.</td></tr><tr class="odd"><td><strong>none (default)</strong></td><td>No operation can be performed; effectively cancels the drag operation if an attempt is made to drop on this object. Ignored if combined with any other token value. e.g., 'none copy' is equivalent to a 'copy' value.</td></tr><tr class="even"><td>popup</td><td>There is a popup menu or dialog that allows the user to choose one of the drag operations (copy, move, link, execute) and any other drag functionality, such as cancel.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-errormessage" aria-describedby="desc-aria-errormessage">`aria-errormessage` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-errormessage (property)">§</span>](#aria-errormessage "Permalink for aria-errormessage (property)")</span></span>

Identifies the <a href="#dfn-element" class="internalDFN">element</a> that provides an error message for the <a href="#dfn-object" class="internalDFN">object</a>. See related <a href="#aria-invalid" class="state-reference"><code>aria-invalid</code></a> and <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a>.

The `aria-errormessage` attribute references another element that contains custom error message text. Authors *MUST* use `aria-invalid` in conjunction with `aria-errormessage`. Initially, the object is in a valid state and either has `aria-invalid` set to `false` or no `aria-invalid` attribute, and the element referenced by `aria-errormessage` is not applicable. If the user enters an invalid value for the object, `aria-invalid` is set to `true` to indicate that `aria-errormessage` is now pertinent. When `aria-errormessage` is pertinent, authors *MUST* ensure the content is not hidden and is included in a container that exposes the content to the user as it is expected that the assistive technology user will navigate to the content in order to access it.

Authors *MAY* use live regions for the error message <a href="#dfn-element" class="internalDFN">element</a> applying either an <a href="#aria-live" class="property-reference"><code>aria-live</code></a> property or using one of the [live region roles](#live_region_roles), for example, <a href="#alert" class="role-reference"><code>alert</code></a>. A live region scenario is when an error message is displayed to users only after they have provided invalid information. The message describes what is wrong and advises users as to what is required. For example, an error message might be, "Invalid time: the time must be between 9:00 AM and 5:00 PM". The following example shows the markup for the initial valid state and for the subsequent invalid state. Note the changes to `aria-invalid` on the text input <a href="#dfn-object" class="internalDFN">object</a>, and to `aria-live` on the <a href="#dfn-element" class="internalDFN">element</a> containing the text of the error message:

Example 19

    <!-- Initial valid state -->
    <label for="startTime"> Please enter a start time for the meeting: </label>
    <input id="startTime" type="text" aria-errormessage="msgID" value="" aria-invalid="false">
    <span id="msgID" aria-live="off" style="visibility:hidden"> Invalid time:  the time must be between 9:00 AM and 5:00 PM" </span>

    <!-- User has input an invalid value -->
    <label for="startTime"> Please enter a start time for the meeting: </label>
    <input id="startTime" type="text" aria-errormessage="msgID" aria-invalid="true" value="11:30 PM" >
    <span id="msgID" aria-live="assertive" style="visibility:visible"> Invalid time:  the time must be between 9:00 AM and 5:00 PM" </span>

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_idref">ID reference</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="state-name" title="aria-expanded" aria-describedby="desc-aria-expanded">`aria-expanded` <span class="type-indicator">(state)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-expanded (state)">§</span>](#aria-expanded "Permalink for aria-expanded (state)")</span></span>

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

For example, this indicates whether a portion of a tree is expanded or collapsed. In other instances, this may be applied to page sections to mark expandable and collapsible regions that are flexible for managing content density. Simplifying the user interface by collapsing sections may improve usability for all, including those with cognitive or developmental disabilities.

If the element with the <a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a> attribute controls the expansion of another grouping container that is not 'owned by' the element, the author *SHOULD* reference the container by using the <a href="#aria-controls" class="property-reference"><code>aria-controls</code></a> attribute.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td>Tapered prompts in voice browsing. Switch in <a href="https://www.w3.org/TR/SMIL3/">SMIL</a> [<a href="#bib-SMIL3" class="bibref">SMIL3</a>].</td></tr><tr class="even"><td>Used in Roles:</td><td><ul><li><a href="#button" class="role-reference"><code>button</code></a></li><li><a href="#combobox" class="role-reference"><code>combobox</code></a></li><li><a href="#document" class="role-reference"><code>document</code></a></li><li><a href="#link" class="role-reference"><code>link</code></a></li><li><a href="#section" class="role-reference"><code>section</code></a></li><li><a href="#sectionhead" class="role-reference"><code>sectionhead</code></a></li><li><a href="#window" class="role-reference"><code>window</code></a></li></ul></td></tr><tr class="odd"><td>Inherits into Roles:</td><td><ul><li><a href="#alert" class="role-reference"><code>alert</code></a></li><li><a href="#alertdialog" class="role-reference"><code>alertdialog</code></a></li><li><a href="#article" class="role-reference"><code>article</code></a></li><li><a href="#banner" class="role-reference"><code>banner</code></a></li><li><a href="#cell" class="role-reference"><code>cell</code></a></li><li><a href="#columnheader" class="role-reference"><code>columnheader</code></a></li><li><a href="#complementary" class="role-reference"><code>complementary</code></a></li><li><a href="#contentinfo" class="role-reference"><code>contentinfo</code></a></li><li><a href="#definition" class="role-reference"><code>definition</code></a></li><li><a href="#dialog" class="role-reference"><code>dialog</code></a></li><li><a href="#directory" class="role-reference"><code>directory</code></a></li><li><a href="#feed" class="role-reference"><code>feed</code></a></li><li><a href="#figure" class="role-reference"><code>figure</code></a></li><li><a href="#form" class="role-reference"><code>form</code></a></li><li><a href="#grid" class="role-reference"><code>grid</code></a></li><li><a href="#gridcell" class="role-reference"><code>gridcell</code></a></li><li><a href="#group" class="role-reference"><code>group</code></a></li><li><a href="#heading" class="role-reference"><code>heading</code></a></li><li><a href="#img" class="role-reference"><code>img</code></a></li><li><a href="#landmark" class="role-reference"><code>landmark</code></a></li><li><a href="#list" class="role-reference"><code>list</code></a></li><li><a href="#listbox" class="role-reference"><code>listbox</code></a></li><li><a href="#listitem" class="role-reference"><code>listitem</code></a></li><li><a href="#log" class="role-reference"><code>log</code></a></li><li><a href="#main" class="role-reference"><code>main</code></a></li><li><a href="#marquee" class="role-reference"><code>marquee</code></a></li><li><a href="#math" class="role-reference"><code>math</code></a></li><li><a href="#menu" class="role-reference"><code>menu</code></a></li><li><a href="#menubar" class="role-reference"><code>menubar</code></a></li><li><a href="#navigation" class="role-reference"><code>navigation</code></a></li><li><a href="#note" class="role-reference"><code>note</code></a></li><li><a href="#progressbar" class="role-reference"><code>progressbar</code></a></li><li><a href="#radiogroup" class="role-reference"><code>radiogroup</code></a></li><li><a href="#region" class="role-reference"><code>region</code></a></li><li><a href="#row" class="role-reference"><code>row</code></a></li><li><a href="#rowheader" class="role-reference"><code>rowheader</code></a></li><li><a href="#search" class="role-reference"><code>search</code></a></li><li><a href="#select" class="role-reference"><code>select</code></a></li><li><a href="#status" class="role-reference"><code>status</code></a></li><li><a href="#tab" class="role-reference"><code>tab</code></a></li><li><a href="#table" class="role-reference"><code>table</code></a></li><li><a href="#tabpanel" class="role-reference"><code>tabpanel</code></a></li><li><a href="#term" class="role-reference"><code>term</code></a></li><li><a href="#timer" class="role-reference"><code>timer</code></a></li><li><a href="#toolbar" class="role-reference"><code>toolbar</code></a></li><li><a href="#tooltip" class="role-reference"><code>tooltip</code></a></li><li><a href="#tree" class="role-reference"><code>tree</code></a></li><li><a href="#treegrid" class="role-reference"><code>treegrid</code></a></li><li><a href="#treeitem" class="role-reference"><code>treeitem</code></a></li></ul></td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_true-false-undefined">true/false/undefined</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>false</td><td>The element, or another grouping element it controls, is collapsed.</td></tr><tr class="even"><td>true</td><td>The element, or another grouping element it controls, is expanded.</td></tr><tr class="odd"><td><strong>undefined (default)</strong></td><td>The element, or another grouping element it controls, is neither expandable nor collapsible; all its child elements are shown or there are no child elements.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-flowto" aria-describedby="desc-aria-flowto">`aria-flowto` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-flowto (property)">§</span>](#aria-flowto "Permalink for aria-flowto (property)")</span></span>

Identifies the next <a href="#dfn-element" class="internalDFN">element</a> (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.

When <a href="#aria-flowto" class="property-reference"><code>aria-flowto</code></a> has a single IDREF, it allows <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> to, at the user's request, forego normal document reading order and go to the targeted <a href="#dfn-object" class="internalDFN">object</a>. However, when `aria-flowto` is provided with multiple IDREFS, assistive technologies *SHOULD* present the referenced elements as path choices.

In the case of one or more IDREFS, <a href="#dfn-user-agent" class="internalDFN">user agents</a> or assistive technologies *SHOULD* give the user the option of navigating to any of the targeted elements. The name of the path can be determined by the name of the target element of the `aria-flowto` <a href="#dfn-attribute" class="internalDFN">attribute</a>. <a href="#dfn-accessibility-api" class="internalDFN">Accessibility APIs</a> can provide named path <a href="#dfn-relationship" class="internalDFN">relationships</a>.

Characteristics:

Characteristic

Value

Used in Roles:

All elements of the base markup

Value:

[ID reference list](#valuetype_idref_list)

#### <span property="xhv:role" resource="xhv:heading"><span class="state-name" title="aria-grabbed" aria-describedby="desc-aria-grabbed">`aria-grabbed` <span class="type-indicator">(state)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-grabbed (state)">§</span>](#aria-grabbed "Permalink for aria-grabbed (state)")</span></span>

\[Deprecated in ARIA 1.1\] Indicates an element's "grabbed" <a href="#dfn-state" class="internalDFN">state</a> in a drag-and-drop operation.

Note

The `aria-grabbed` state is expected to be replaced by a new feature in a future version of WAI-ARIA. Authors are therefore advised to treat `aria-grabbed` as <a href="#dfn-deprecated" class="internalDFN">deprecated</a>.

Setting `aria-grabbed` to `true` indicates that the <a href="#dfn-element" class="internalDFN">element</a> has been selected for dragging. Setting `aria-grabbed` to `false` indicates that the element can be grabbed for a drag-and-drop operation, but is not currently grabbed. If `aria-grabbed` is unspecified or set to `undefined` (default), the element cannot be grabbed.

When <a href="#aria-grabbed" class="state-reference"><code>aria-grabbed</code></a> is set to `true`, authors *SHOULD* update the <a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> of all potential drop targets. When an element is not grabbed (the value is set to `false` or `undefined`, or the attribute is removed), authors *SHOULD* revert the `aria-dropeffect` attributes of the associated drop targets to `none`.

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_true-false-undefined">true/false/undefined</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>false</td><td>Indicates that the element supports being dragged.</td></tr><tr class="even"><td>true</td><td>Indicates that the element has been "grabbed" for dragging.</td></tr><tr class="odd"><td><strong>undefined (default)</strong></td><td>Indicates that the element does not support being dragged.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-haspopup" aria-describedby="desc-aria-haspopup">`aria-haspopup` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-haspopup (property)">§</span>](#aria-haspopup "Permalink for aria-haspopup (property)")</span></span>

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an <a href="#dfn-element" class="internalDFN">element</a>.

A popup element usually appears as a block of content that is on top of other content. Authors *MUST* ensure that the role of the element that serves as the container for the popup content is <a href="#menu" class="role-reference"><code>menu</code></a>, <a href="#listbox" class="role-reference"><code>listbox</code></a>, <a href="#tree" class="role-reference"><code>tree</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, or <a href="#dialog" class="role-reference"><code>dialog</code></a>, and that the value of `aria-haspopup` matches the role of the popup container.

For the popup element to be keyboard accessible, authors *SHOULD* ensure that the element that can trigger the popup is focusable, that there is a keyboard mechanism for opening the popup, and that the popup element manages focus of all its descendants as described in [Managing Focus](#managingfocus).

The `aria-haspopup` property is an enumerated type. <a href="#dfn-user-agent" class="internalDFN">User agents</a> *MUST* treat any value of `aria-haspopup` that is not included in the list of allowed values, including an empty string, as if the value `false` had been provided. To provide backward compatibility with ARIA 1.0 content, user agents *MUST* treat an `aria-haspopup` value of `true` as equivalent to a value of `menu`.

<a href="#dfn-assistive-technology" class="internalDFN">Assistive technologies</a> *SHOULD NOT* expose the `aria-haspopup` property if it has a value of `false`.

Note

A <a href="#tooltip" class="role-reference"><code>tooltip</code></a> is not considered to be a popup in this context.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><ul><li><a href="#aria-controls" class="property-reference"><code>aria-controls</code></a></li><li><a href="https://www.w3.org/TR/2002/REC-UAAG10-20021217/">User Agent Accessibility Guidelines</a> [<a href="#bib-UAAG10" class="bibref">UAAG10</a>] conditional content</li></ul></td></tr><tr class="even"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_token">token</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><strong>false (default)</strong></td><td>Indicates the element does not have a popup.</td></tr><tr class="even"><td>true</td><td>Indicates the popup is a <a href="#menu" class="role-reference"><code>menu</code></a>.</td></tr><tr class="odd"><td>menu</td><td>Indicates the popup is a <a href="#menu" class="role-reference"><code>menu</code></a>.</td></tr><tr class="even"><td>listbox</td><td>Indicates the popup is a <a href="#listbox" class="role-reference"><code>listbox</code></a>.</td></tr><tr class="odd"><td>tree</td><td>Indicates the popup is a <a href="#tree" class="role-reference"><code>tree</code></a>.</td></tr><tr class="even"><td>grid</td><td>Indicates the popup is a <a href="#grid" class="role-reference"><code>grid</code></a>.</td></tr><tr class="odd"><td>dialog</td><td>Indicates the popup is a <a href="#dialog" class="role-reference"><code>dialog</code></a>.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="state-name" title="aria-hidden" aria-describedby="desc-aria-hidden">`aria-hidden` <span class="type-indicator">(state)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-hidden (state)">§</span>](#aria-hidden "Permalink for aria-hidden (state)")</span></span>

Indicates whether the <a href="#dfn-element" class="internalDFN">element</a> is exposed to an accessibility API. See related <a href="#aria-disabled" class="state-reference"><code>aria-disabled</code></a>.

User agents determine an element's <a href="#dfn-hidden" class="internalDFN">hidden</a> status based on whether it is rendered, and the rendering is usually controlled by CSS. For example, an element whose `display` property is set to `none` is not rendered. An element is considered <a href="#dfn-hidden" class="internalDFN">hidden</a> if it, or any of its ancestors are not rendered or have their `aria-hidden` attribute value set to `true`.

Example 20

    [aria-hidden="true"] { visibility: hidden; }

Authors *MAY*, with caution, use aria-hidden to hide visibly rendered content from assistive technologies *only* if the act of hiding this content is intended to improve the experience for users of assistive technologies by removing redundant or extraneous content. Authors using aria-hidden to hide visible content from screen readers *MUST* ensure that identical or equivalent meaning and functionality is exposed to assistive technologies.

Note

Authors are advised to use extreme caution and consider a wide range of disabilities when hiding visibly rendered content from assistive technologies. For example, a sighted, dexterity-impaired individual may use voice-controlled assistive technologies to access a visual interface. If an author hides visible link text "Go to checkout" and exposes similar, yet non-identical link text "Check out now" to the accessibility API, the user may be unable to access the interface they perceive using voice control. Similar problems may also arise for screen reader users. For example, a sighted telephone support technician may attempt to have the blind screen reader user click the "Go to checkout" link, which they may be unable to find using a type-ahead item search ("Go to…").

Note

At the time of this writing, `aria-hidden`="false" is known to work inconsistently in browsers. As future implementations improve, use caution and test thoroughly before relying on this approach.

Note

It is recommended that authors key visibility of elements off this attribute, rather than change visibility and separately update this <a href="#dfn-property" class="internalDFN">property</a>. CSS 2 introduced a way to [select on attribute values](https://www.w3.org/TR/css3-selectors/#attribute-selectors) (\[<a href="#bib-css3-selectors" class="bibref">css3-selectors</a>\]). The following CSS declaration makes content visible unless the `aria-hidden` attribute is `true`; scripts need only update the value of this attribute to change visibility:

Example 21

    [aria-hidden="true"] { visibility: hidden; }

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_true-false-undefined">true/false/undefined</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>false</td><td>The element is exposed to the accessibility API as if it was rendered.</td></tr><tr class="even"><td>true</td><td>The element is hidden from the accessibility API.</td></tr><tr class="odd"><td><strong>undefined (default)</strong></td><td>The element's hidden state is determined by the user agent based on whether it is rendered.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="state-name" title="aria-invalid" aria-describedby="desc-aria-invalid">`aria-invalid` <span class="type-indicator">(state)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-invalid (state)">§</span>](#aria-invalid "Permalink for aria-invalid (state)")</span></span>

Indicates the entered value does not conform to the format expected by the application. See related <a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a>.

If the value is computed to be invalid or out-of-range, the application author *SHOULD* set this <a href="#dfn-attribute" class="internalDFN">attribute</a> to `true`. <a href="#dfn-user-agent" class="internalDFN">User agents</a> *SHOULD* inform the user of the error. Application authors *SHOULD* provide suggestions for corrections if they are known.

When the user attempts to submit data involving a field for which <a href="#aria-required" class="property-reference"><code>aria-required</code></a> is `true`, authors *MAY* use the <a href="#aria-invalid" class="state-reference"><code>aria-invalid</code></a> attribute to signal there is an error. However, if the user has not attempted to submit the form, authors *SHOULD NOT* set the `aria-invalid` attribute on required <a href="#dfn-widget" class="internalDFN">widgets</a> simply because the user has not yet entered data.

For future expansion, the `aria-invalid` attribute is an enumerated type. Any value not recognized in the list of allowed values *MUST* be treated by user agents as if the value `true` had been provided. If the attribute is not present, or its value is `false`, or its value is an empty string, the default value of `false` applies.

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/xforms/">XForms</a> [<a href="#bib-XFORMS11" class="bibref">XFORMS11</a>] <a href="https://www.w3.org/TR/xforms/#evt-invalid">'invalid' event</a>. This state is <code>true</code> if a form field is required but empty. However, the XForms <code>valid</code> property would be set to <code>false</code>.</td></tr><tr class="even"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_token">token</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>grammar</td><td>A grammatical error was detected.</td></tr><tr class="even"><td><strong>false (default)</strong></td><td>There are no detected errors in the value.</td></tr><tr class="odd"><td>spelling</td><td>A spelling error was detected.</td></tr><tr class="even"><td>true</td><td>The value entered by the user has failed validation.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-keyshortcuts" aria-describedby="desc-aria-keyshortcuts">`aria-keyshortcuts` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-keyshortcuts (property)">§</span>](#aria-keyshortcuts "Permalink for aria-keyshortcuts (property)")</span></span>

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

The value of the `aria-keyshortcuts` attribute is a space-delimited list of keyboard shortcuts that can be pressed to activate a command or textbox widget. The keys defined in the shortcuts represent the physical keys pressed and not the actual characters generated. Each keyboard shortcut consists of one or more tokens delimited by the plus sign ("+") representing zero or more modifier keys and exactly one non-modifier key that must be pressed simultaneously to activate the given shortcut.

Authors *MUST* specify modifier keys exactly according to the [UI Events KeyboardEvent key Values](https://www.w3.org/TR/uievents-key/) spec \[<a href="#bib-uievents-key" class="bibref">uievents-key</a>\] - for example, "Alt", "Control", "Shift", "Meta", or "AltGraph". Note that Meta corresponds to the Command key, and Alt to the Option key, on Apple computers.

The valid names for non-modifier keys are any printable character such as "A", "B", "1", "2", "$", "Plus" for a plus sign, "Space" for the spacebar, or the names of any other non-modifier key specified in the [UI Events KeyboardEvent key Values](https://www.w3.org/TR/uievents-key/) spec \[<a href="#bib-uievents-key" class="bibref">uievents-key</a>\] - for example, "Enter", "Tab", "ArrowRight", "PageDown", "Escape", or "F1". The use of "Space" for the spacebar is an exception to the [UI Events KeyboardEvent key Values](https://www.w3.org/TR/uievents-key/) spec \[<a href="#bib-uievents-key" class="bibref">uievents-key</a>\] as the space or spacebar key is encoded as `' '` and would be treated as a whitespace character.

Authors *MUST* ensure modifier keys come first when they are part of a keyboard shortcut. Authors *MUST* ensure that required non-modifier keys come last when they are part of a shortcut. The order of the modifier keys is not otherwise significant, so "Alt+Shift+T" and "Shift+Alt+T" are equivalent, but "T+Shift+Alt" is not valid because all of the modifier keys don't come first, and "Alt" is not valid because it doesn't include at least one non-modifier key.

When specifying an alphabetic key, both the uppercase and lowercase variants are considered equivalent: "a" and "A" are the same.

When implementing keyboard shortcuts authors should consider the keyboards they intend to support to avoid unintended results. Keyboard designs vary significantly based on the device used and the languages supported. For example, many modifier keys are used in conjunction with other keys to create common punctuation symbols, create number characters, swap keyboard sides on bilingual keyboards to switch languages, and perform a number of other functions.

For many supported keyboards, authors can prevent conflicts by avoiding keys other than ASCII letters, as number characters and common punctuation often require modifiers. Here, the keyboard shortcut entered does not equate to the key generated. For example, in French keyboard layouts, the number characters are not available until you press the Control key, so a keyboard shortcut defined as "Control+2" would be ambiguous as this is how one would type the "2" character on a French keyboard.

If the character used is determined by a modifier key, the author *MUST* specify the actual key used to generate the character, that is generated by the key, and not the resulting character. This convention enables the assistive technology to accurately convey what keys must be used to generate the shortcut. For example, on most U.S. English keyboards, the percent sign "%" can be input by pressing Shift+5. The correct way to specify this shortcut is "Shift+5". It is incorrect to specify "%" or "Shift+%". However, note that on some international keyboards the percent sign may be an unmodified key, in which case "%" and "Shift+%" could be correct on those keyboards.

If the key that needs to be specified is illegal in the host language or would cause a string to be terminated, authors *MUST* use the string escaping sequence of the host language to specify it. For example, the double-quote character can be encoded as "Shift+&\#39;" in HTML.

Examples of valid keyboard shortcuts include:

-   "A"
-   "Shift+Space"
-   "Control+Alt+."
-   "Control+Shift+&\#39;"
-   "Alt+Shift+P Control+F"
-   "Meta+C Meta+Shift+C"

User agents *MUST NOT* change keyboard behavior in response to the `aria-keyshortcuts` attribute. Authors *MUST* handle scripted keyboard events to process `aria-keyshortcuts`. The `aria-keyshortcuts` attribute exposes the existence of these shortcuts so that assistive technologies can communicate this information to users.

Authors *SHOULD* provide a way to expose keyboard shortcuts so that all users may discover them, such as through the use of a tooltip. Authors *MUST* ensure that `aria-keyshortcuts` applied to disabled elements are unavailable.

Authors *SHOULD* avoid implementing shortcut keys that inhibit operating system, user agent, or assistive technology functionality. This requires the author to carefully consider both which keys to assign and the contexts and conditions in which the keys are available to the user. For guidance, see the keyboard shortcuts section of the [WAI-ARIA Authoring Practices Guide](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_shortcuts) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\].

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><a href="https://en.wikipedia.org/wiki/Keyboard_shortcut">Keyboard shortcut</a></td></tr><tr class="even"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_string">string</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-label" aria-describedby="desc-aria-label">`aria-label` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-label (property)">§</span>](#aria-label "Permalink for aria-label (property)")</span></span>

Defines a string value that labels the current element. See related <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a>.

The purpose of <a href="#aria-label" class="property-reference"><code>aria-label</code></a> is the same as that of `aria-labelledby`. It provides the user with a recognizable name of the object. The most common <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a> mapping for a label is the <a href="#dfn-accessible-name" class="internalDFN">accessible name</a> property.

If the label text is visible on screen, authors *SHOULD* use `aria-labelledby` and *SHOULD NOT* use `aria-label`. There may be instances where the name of an element cannot be determined programmatically from the content of the element, and there are cases where providing a visible label is not the desired user experience. Most host languages provide an attribute that could be used to name the element (e.g., the [`title` attribute in HTML](https://www.w3.org/TR/html5/dom.html#the-title-attribute)), yet this could present a browser tooltip. In the cases where a visible label or visible tooltip is undesirable, authors *MAY* set the accessible name of the element using `aria-label`. As required by the [text alternative computation](#textalternativecomputation), user agents give precedence to `aria-labelledby` over `aria-label` when computing the accessible name property.

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/html5/dom.html#the-title-attribute">HTML <code>title</code></a></td></tr><tr class="even"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_string">string</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-labelledby" aria-describedby="desc-aria-labelledby">`aria-labelledby` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-labelledby (property)">§</span>](#aria-labelledby "Permalink for aria-labelledby (property)")</span></span>

Identifies the <a href="#dfn-element" class="internalDFN">element</a> (or elements) that labels the current element. See related <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a>.

The purpose of <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a> is the same as that of <a href="#aria-label" class="property-reference"><code>aria-label</code></a>. It provides the user with a recognizable name of the object. The most common <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a> mapping for a label is the <a href="#dfn-accessible-name" class="internalDFN">accessible name</a> property.

If the interface is such that it is not possible to have a visible label on the screen, authors *SHOULD* use `aria-label` and *SHOULD NOT* use `aria-labelledby`. As required by the [text alternative computation](#textalternativecomputation), user agents give precedence to `aria-labelledby` over `aria-label` when computing the accessible name property.

The `aria-labelledby` attribute is similar to `aria-describedby` in that both reference other elements to calculate a text alternative, but a label should be concise, where a description is intended to provide more verbose information.

Note

The expected spelling of this property in U.S. English is "labeledby." However, the <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a> features to which this property is mapped have established the "labelledby" spelling. This property is spelled that way to match the convention and minimize the difficulty for developers.

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/html5/sec-forms.html#the-label-element">HTML <code>label</code></a></td></tr><tr class="even"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_idref_list">ID reference list</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-level" aria-describedby="desc-aria-level">`aria-level` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-level (property)">§</span>](#aria-level "Permalink for aria-level (property)")</span></span>

Defines the hierarchical level of an <a href="#dfn-element" class="internalDFN">element</a> within a structure.

This can be applied inside trees to tree items, to headings inside a document, to nested grids, nested tablists and to other structural items that may appear inside a container or participate in an ownership hierarchy. The value for <a href="#aria-level" class="property-reference"><code>aria-level</code></a> is an integer greater than or equal to 1.

Levels increase with depth. If the DOM ancestry does not accurately represent the level, authors *SHOULD* explicitly define the `aria-level` <a href="#dfn-attribute" class="internalDFN">attribute</a>.

This attribute is applied to elements that act as leaf nodes within the orientation of the set, for example, on elements with role <a href="#treeitem" class="role-reference"><code>treeitem</code></a> rather than elements with role <a href="#group" class="role-reference"><code>group</code></a>. This means that multiple elements in a set may have the same value for this attribute. Although it would be less repetitive to provide a single value on the container, restricting this to leaf nodes ensures that there is a single way for <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> to use the attribute.

If the DOM ancestry accurately represents the level, the <a href="#dfn-user-agent" class="internalDFN">user agent</a> can calculate the level of an item from the document structure. This attribute can be used to provide an explicit indication of the level when that is not possible to calculate from the document structure or the <a href="#aria-owns" class="property-reference"><code>aria-owns</code></a> attribute. User agent support for automatic calculation of level may vary; authors *SHOULD* test with <a href="#dfn-user-agent" class="internalDFN">user agents</a> and assistive technologies to determine whether this attribute is needed. If the author intends for the user agent to calculate the level, the author *SHOULD* omit this attribute.

Note

In the case of a <a href="#treegrid" class="role-reference"><code>treegrid</code></a>, `aria-level` is supported on elements with the role <a href="#row" class="role-reference"><code>row</code></a>, not elements with role <a href="#gridcell" class="role-reference"><code>gridcell</code></a>. At first glance, this may seem inconsistent with the application of `aria-level` on `treeitem` elements, but it is consistent in that the `row` acts as the leaf node within the vertical orientation of the <a href="#grid" class="role-reference"><code>grid</code></a>, whereas the `gridcell` is a leaf node within the horizontal orientation of each `row`. Level is not supported on sets of cells within rows, so the `aria-level` attribute is applied to the element with the role `row`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#grid" class="role-reference"><code>grid</code></a></li><li><a href="#heading" class="role-reference"><code>heading</code></a></li><li><a href="#listitem" class="role-reference"><code>listitem</code></a></li><li><a href="#row" class="role-reference"><code>row</code></a></li><li><a href="#tablist" class="role-reference"><code>tablist</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#treegrid" class="role-reference"><code>treegrid</code></a></li><li><a href="#treeitem" class="role-reference"><code>treeitem</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_integer">integer</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-live" aria-describedby="desc-aria-live">`aria-live` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-live (property)">§</span>](#aria-live "Permalink for aria-live (property)")</span></span>

Indicates that an <a href="#dfn-element" class="internalDFN">element</a> will be updated, and describes the types of updates the <a href="#dfn-user-agent" class="internalDFN">user agents</a>, <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>, and user can expect from the <a href="#dfn-live-region" class="internalDFN">live region</a>.

The values of this <a href="#dfn-attribute" class="internalDFN">attribute</a> are expressed in degrees of importance. When regions are specified as `polite`, assistive technologies will notify users of updates but generally do not interrupt the current task, and updates take low priority. When regions are specified as `assertive`, assistive technologies will immediately notify the user, and could potentially clear the speech queue of previous updates.

Politeness levels are essentially an ordering mechanism for updates and serve as a strong suggestion to user agents or assistive technologies. The value may be overridden by user agents, assistive technologies, or the user. For example, if assistive technologies can determine that a change occurred in response to a key press or a mouse click, the assistive technologies may present that change immediately even if the value of the <a href="#aria-live" class="property-reference"><code>aria-live</code></a> attribute states otherwise.

Since different users have different needs, it is up to the user to tweak his or her assistive technologies' response to a live region with a certain politeness level from the commonly defined baseline. Assistive technologies may choose to implement increasing and decreasing levels of granularity so that the user can exercise control over queues and interruptions.

When the <a href="#dfn-property" class="internalDFN">property</a> is not set on an <a href="#dfn-object" class="internalDFN">object</a> that needs to send updates, the politeness level is the value of the nearest ancestor that sets the `aria-live` attribute.

The `aria-live` attribute is the primary determination for the order of presentation of changes to live regions. Implementations will also consider the default level of politeness in a <a href="#dfn-role" class="internalDFN">role</a> when the `aria-live` attribute is not set in the ancestor chain (e.g., <a href="#log" class="role-reference"><code>log</code></a> changes are `polite` by default). Items which are `assertive` will be presented immediately, followed by `polite` items. User agents or assistive technologies *MAY* choose to clear queued changes when an assertive change occurs. (e.g., changes in an assertive region may remove all currently queued changes)

When live regions are marked as `polite`, assistive technologies *SHOULD* announce updates at the next graceful opportunity, such as at the end of speaking the current sentence or when the user pauses typing. When live regions are marked as `assertive`, assistive technologies *SHOULD* notify the user immediately. Because an interruption may disorient users or cause them to not complete their current task, authors *SHOULD NOT* use the assertive value unless the interruption is imperative.

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_token">token</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>assertive</td><td>Indicates that updates to the region have the highest priority and should be presented the user immediately.</td></tr><tr class="even"><td><strong>off (default)</strong></td><td>Indicates that updates to the region should not be presented to the user unless the used is currently focused on that region.</td></tr><tr class="odd"><td>polite</td><td>Indicates that updates to the region should be presented at the next graceful opportunity, such as at the end of speaking the current sentence or when the user pauses typing.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-modal" aria-describedby="desc-aria-modal">`aria-modal` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-modal (property)">§</span>](#aria-modal "Permalink for aria-modal (property)")</span></span>

Indicates whether an <a href="#dfn-element" class="internalDFN">element</a> is modal when displayed.

The <a href="#aria-modal" class="property-reference"><code>aria-modal</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> is used to indicate that the presence of a "modal" element precludes usage of other content on the page. For example, when a modal dialog is displayed, it is expected that the user's interaction is limited to the contents of the dialog, until the modal dialog loses focus or is no longer displayed.

When a modal element is displayed, assistive technologies *SHOULD* navigate to the element unless focus has explicitly been set elsewhere. Assistive technologies *MAY* limit navigation to the modal element's contents. If focus moves to an element outside the modal element, assistive technologies *SHOULD NOT* limit navigation to the modal element.

When a modal element is displayed, authors *MUST* ensure the interface can be controlled using only descendants of the modal element. In other words, if a modal dialog has a close button, the button should be a descendant of the dialog. When a modal element is displayed, authors *SHOULD* mark all other contents as inert (such as "inert subtrees" in HTML) if the ability to do so exists in the host language.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#window" class="role-reference"><code>window</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#alertdialog" class="role-reference"><code>alertdialog</code></a></li><li><a href="#dialog" class="role-reference"><code>dialog</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_true-false">true/false</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><strong>false (default)</strong></td><td>Element is not modal.</td></tr><tr class="even"><td>true</td><td>Element is modal.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-multiline" aria-describedby="desc-aria-multiline">`aria-multiline` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-multiline (property)">§</span>](#aria-multiline "Permalink for aria-multiline (property)")</span></span>

Indicates whether a text box accepts multiple lines of input or only a single line.

Note

In most user agent implementations, the default behavior of the ENTER or RETURN key is different between the single-line and multi-line text fields in HTML. When user has focus in a single-line `<input type="text">` element, the keystroke usually submits the form. When user has focus in a multi-line `<textarea>` element, the keystroke inserts a line break. The WAI-ARIA `textbox` role differentiates these types of boxes with the <a href="#aria-multiline" class="property-reference"><code>aria-multiline</code></a> attribute, so authors are advised to be aware of this distinction when designing the field.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#textbox" class="role-reference"><code>textbox</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#searchbox" class="role-reference"><code>searchbox</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_true-false">true/false</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><strong>false (default)</strong></td><td>This is a single-line text box.</td></tr><tr class="even"><td>true</td><td>This is a multi-line text box.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-multiselectable" aria-describedby="desc-aria-multiselectable">`aria-multiselectable` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-multiselectable (property)">§</span>](#aria-multiselectable "Permalink for aria-multiselectable (property)")</span></span>

Indicates that the user may select more than one item from the current selectable descendants.

Authors *SHOULD* ensure that selected descendants have the <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> set to `true`, and selectable descendant have the `aria-selected` attribute set to `false`. Authors *SHOULD NOT* use the `aria-selected` attribute on descendants that are not selectable.

Note

Lists and trees are examples of roles that might allow users to select more than one item at a time.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#grid" class="role-reference"><code>grid</code></a></li><li><a href="#listbox" class="role-reference"><code>listbox</code></a></li><li><a href="#tablist" class="role-reference"><code>tablist</code></a></li><li><a href="#tree" class="role-reference"><code>tree</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#treegrid" class="role-reference"><code>treegrid</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_true-false">true/false</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><strong>false (default)</strong></td><td>Only one item can be selected.</td></tr><tr class="even"><td>true</td><td>More than one item in the widget may be selected at a time.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-orientation" aria-describedby="desc-aria-orientation">`aria-orientation` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-orientation (property)">§</span>](#aria-orientation "Permalink for aria-orientation (property)")</span></span>

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

Note

In ARIA 1.1, the default value for <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> changed from `horizontal` to `undefined`. Implicit defaults are defined on some roles (e.g., <a href="#slider" class="role-reference"><code>slider</code></a> defaults to horizontal; <a href="#scrollbar" class="role-reference"><code>scrollbar</code></a> defaults to vertical) but remain undefined on roles where an expected default orientation is ambiguous (e.g., <a href="#radiogroup" class="role-reference"><code>radiogroup</code></a>).

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#scrollbar" class="role-reference"><code>scrollbar</code></a></li><li><a href="#select" class="role-reference"><code>select</code></a></li><li><a href="#separator" class="role-reference"><code>separator</code></a></li><li><a href="#slider" class="role-reference"><code>slider</code></a></li><li><a href="#tablist" class="role-reference"><code>tablist</code></a></li><li><a href="#toolbar" class="role-reference"><code>toolbar</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#combobox" class="role-reference"><code>combobox</code></a></li><li><a href="#listbox" class="role-reference"><code>listbox</code></a></li><li><a href="#menu" class="role-reference"><code>menu</code></a></li><li><a href="#menubar" class="role-reference"><code>menubar</code></a></li><li><a href="#radiogroup" class="role-reference"><code>radiogroup</code></a></li><li><a href="#tree" class="role-reference"><code>tree</code></a></li><li><a href="#treegrid" class="role-reference"><code>treegrid</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_token">token</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>horizontal</td><td>The element is oriented horizontally.</td></tr><tr class="even"><td><strong>undefined (default)</strong></td><td>The element's orientation is unknown/ambiguous.</td></tr><tr class="odd"><td>vertical</td><td>The element is oriented vertically.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-owns" aria-describedby="desc-aria-owns">`aria-owns` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-owns (property)">§</span>](#aria-owns "Permalink for aria-owns (property)")</span></span>

Identifies an <a href="#dfn-element" class="internalDFN">element</a> (or elements) in order to define a visual, functional, or contextual parent/child <a href="#dfn-relationship" class="internalDFN">relationship</a> between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related <a href="#aria-controls" class="property-reference"><code>aria-controls</code></a>.

The value of the <a href="#aria-owns" class="property-reference"><code>aria-owns</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a> is a space-separated list of IDREFS that reference one or more elements in the document by ID. The reason for adding `aria-owns` is to expose a parent/child contextual relationship to <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> that is otherwise impossible to infer from the DOM.

If an element has both `aria-owns` and DOM children then the order of the child elements with respect to the parent/child relationship is the DOM children first, then the elements referenced in `aria-owns`. If the author intends that the DOM children are not first, then list the DOM children in `aria-owns` in the desired order. Authors *SHOULD NOT* use `aria-owns` as a replacement for the DOM hierarchy. If the relationship is represented in the DOM, do not use `aria-owns`. Authors *MUST* ensure that an element's ID is not specified in more than one other element's `aria-owns` attribute at any time. In other words, an element can have only one explicit owner.

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_idref_list">ID reference list</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-placeholder" aria-describedby="desc-aria-placeholder">`aria-placeholder` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-placeholder (property)">§</span>](#aria-placeholder "Permalink for aria-placeholder (property)")</span></span>

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.

Authors *SHOULD NOT* use <a href="#aria-placeholder" class="property-reference"><code>aria-placeholder</code></a> instead of a label as their purposes are different: The label indicates what kind of information is expected. The placeholder text is a hint about the expected value. See related <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a> and <a href="#aria-label" class="property-reference"><code>aria-label</code></a>.

Authors *SHOULD* present this hint to the user by displaying the hint text at any time the control's value is the empty string. This includes cases where the control first receives focus, and when users remove a previously-entered value.

Note

As is the case with the related [HTML `placeholder`](https://www.w3.org/TR/html5/sec-forms.html#the-placeholder-attribute) attribute, use of placeholder text as a replacement for a displayed label can reduce the accessibility and usability of the control for a range of users including older users and users with cognitive, mobility, fine motor skill or vision impairments. While the hint given by the control's label is shown at all times, the short hint given in the placeholder attribute is only shown before the user enters a value. Furthermore, placeholder text may be mistaken for a pre-filled value, and as commonly implemented the default color of the placeholder text provides insufficient contrast and the lack of a separate visible label reduces the size of the hit region available for setting focus on the control.

The following example shows a <a href="#searchbox" class="role-reference"><code>searchbox</code></a> in which the user has entered a value:

Example 22

    <span id="label">Birthday:</span>
    <div contenteditable role="searchbox" aria-labelledby="label" aria-placeholder="MM-DD-YYYY">03-14-1879</div>

The following example shows the same `searchbox` in which the user has not yet entered a value or has removed a previously-entered value:

Example 23

    <span id="label">Birthday:</span>
    <div contenteditable role="searchbox" aria-labelledby="label" aria-placeholder="MM-DD-YYYY">MM-DD-YYYY</div>

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/html5/sec-forms.html#the-placeholder-attribute">HTML <code>placeholder</code></a></td></tr><tr class="even"><td>Used in Roles:</td><td><ul><li><a href="#textbox" class="role-reference"><code>textbox</code></a></li></ul></td></tr><tr class="odd"><td>Inherits into Roles:</td><td><ul><li><a href="#searchbox" class="role-reference"><code>searchbox</code></a></li></ul></td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_string">string</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-posinset" aria-describedby="desc-aria-posinset">`aria-posinset` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-posinset (property)">§</span>](#aria-posinset "Permalink for aria-posinset (property)")</span></span>

Defines an <a href="#dfn-element" class="internalDFN">element</a>'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related <a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a>.

If all items in a set are present in the document structure, it is not necessary to set this <a href="#dfn-attribute" class="internalDFN">attribute</a>, as the <a href="#dfn-user-agent" class="internalDFN">user agent</a> can automatically calculate the set size and position for each item. However, if only a portion of the set is present in the document structure at a given moment, this <a href="#dfn-property" class="internalDFN">property</a> is needed to provide an explicit indication of an element's position.

The following example shows items 5 through 8 in a set of 16.

Example 24

    <h2 id="label_fruit"> Available Fruit </h2>
    <ul role="listbox" aria-labelledby="label_fruit">
      <li role="option" aria-setsize="16" aria-posinset="5"> apples </li>
      <li role="option" aria-setsize="16" aria-posinset="6"> bananas </li>
      <li role="option" aria-setsize="16" aria-posinset="7"> cantaloupes </li>
      <li role="option" aria-setsize="16" aria-posinset="8"> dates </li>
    </ul>

Authors *MUST* set the value for <a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a> to an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known. Authors *SHOULD* use `aria-setsize`.

When exposing `aria-posinset` on a <a href="#menuitem" class="role-reference"><code>menuitem</code></a>, <a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a>, or <a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a>, authors *SHOULD* set the value of `aria-posinset` with respect to the total number of items in the <a href="#menu" class="role-reference"><code>menu</code></a>, excluding any separators.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#article" class="role-reference"><code>article</code></a></li><li><a href="#listitem" class="role-reference"><code>listitem</code></a></li><li><a href="#menuitem" class="role-reference"><code>menuitem</code></a></li><li><a href="#option" class="role-reference"><code>option</code></a></li><li><a href="#radio" class="role-reference"><code>radio</code></a></li><li><a href="#tab" class="role-reference"><code>tab</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a></li><li><a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a></li><li><a href="#treeitem" class="role-reference"><code>treeitem</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_integer">integer</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="state-name" title="aria-pressed" aria-describedby="desc-aria-pressed">`aria-pressed` <span class="type-indicator">(state)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-pressed (state)">§</span>](#aria-pressed "Permalink for aria-pressed (state)")</span></span>

Indicates the current "pressed" <a href="#dfn-state" class="internalDFN">state</a> of toggle buttons. See related <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> and <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a>.

Toggle buttons require a full press-and-release cycle to change their value. Activating it once changes the value to `true`, and activating it another time changes the value back to `false`. A value of `mixed` means that the values of more than one item controlled by the button do not all share the same value. Examples of mixed-state buttons are described in [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) \[<a href="#bib-wai-aria-practices-1.1" class="bibref">wai-aria-practices-1.1</a>\]. If the <a href="#dfn-attribute" class="internalDFN">attribute</a> is not present, the button is not a toggle button.

The <a href="#aria-pressed" class="state-reference"><code>aria-pressed</code></a> attribute is similar but not identical to the `aria-checked` attribute. Operating systems support `pressed` on buttons and `checked` on checkboxes.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#button" class="role-reference"><code>button</code></a></li></ul></td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_tristate">tristate</a></td></tr></tbody></table>

Values:

Value

Description

false

The element supports being pressed but is not currently pressed.

mixed

Indicates a mixed mode value for a tri-state toggle button.

true

The element is pressed.

**undefined (default)**

The element does not support being pressed.

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-readonly" aria-describedby="desc-aria-readonly">`aria-readonly` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-readonly (property)">§</span>](#aria-readonly "Permalink for aria-readonly (property)")</span></span>

Indicates that the <a href="#dfn-element" class="internalDFN">element</a> is not editable, but is otherwise <a href="#dfn-operable" class="internalDFN">operable</a>. See related <a href="#aria-disabled" class="state-reference"><code>aria-disabled</code></a>.

This means the user can read but not set the value of the <a href="#dfn-widget" class="internalDFN">widget</a>. Readonly elements are relevant to the user, and application authors *SHOULD NOT* restrict navigation to the element or its focusable descendants. Other actions such as copying the value of the element are also supported. This is in contrast to disabled elements, to which applications might not allow user navigation to descendants.

Examples include:

-   A form element which represents a constant.
-   Row or column headers in a spreadsheet grid.
-   The result of a calculation such as a shopping cart total.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/">XForms</a> [<a href="#bib-XFORMS10" class="bibref">XFORMS10</a>] Readonly</td></tr><tr class="even"><td>Used in Roles:</td><td><ul><li><a href="#checkbox" class="role-reference"><code>checkbox</code></a></li><li><a href="#combobox" class="role-reference"><code>combobox</code></a></li><li><a href="#grid" class="role-reference"><code>grid</code></a></li><li><a href="#gridcell" class="role-reference"><code>gridcell</code></a></li><li><a href="#listbox" class="role-reference"><code>listbox</code></a></li><li><a href="#radiogroup" class="role-reference"><code>radiogroup</code></a></li><li><a href="#slider" class="role-reference"><code>slider</code></a></li><li><a href="#spinbutton" class="role-reference"><code>spinbutton</code></a></li><li><a href="#textbox" class="role-reference"><code>textbox</code></a></li></ul></td></tr><tr class="odd"><td>Inherits into Roles:</td><td><ul><li><a href="#columnheader" class="role-reference"><code>columnheader</code></a></li><li><a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a></li><li><a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a></li><li><a href="#rowheader" class="role-reference"><code>rowheader</code></a></li><li><a href="#searchbox" class="role-reference"><code>searchbox</code></a></li><li><a href="#switch" class="role-reference"><code>switch</code></a></li><li><a href="#treegrid" class="role-reference"><code>treegrid</code></a></li></ul></td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_true-false">true/false</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><strong>false (default)</strong></td><td>The user can set the value of the element.</td></tr><tr class="even"><td>true</td><td>The user cannot change the value of the element.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-relevant" aria-describedby="desc-aria-relevant">`aria-relevant` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-relevant (property)">§</span>](#aria-relevant "Permalink for aria-relevant (property)")</span></span>

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related <a href="#aria-atomic" class="property-reference"><code>aria-atomic</code></a>.

The <a href="#dfn-attribute" class="internalDFN">attribute</a> is represented as a space delimited list of the following values: `additions`, `removals`, `text`; or a single catch-all value `all`.

This is used to describe <a href="#dfn-semantics" class="internalDFN">semantically</a> meaningful changes, as opposed to merely presentational ones. For example, nodes that are removed from the top of a log are merely removed for purposes of creating room for other entries, and the removal of them does not have meaning. However, in the case of a buddy list, removal of a buddy name indicates that they are no longer online, and this is a meaningful <a href="#dfn-event" class="internalDFN">event</a>. In that case <a href="#aria-relevant" class="property-reference"><code>aria-relevant</code></a> will be set to `all`. When the `aria-relevant` attribute is not provided, the default value, `additions text`, indicates that text modifications and node additions are relevant, but that node removals are irrelevant.

Note

`aria-relevant` values of removals or all are to be used sparingly. Assistive technologies only need to be informed of content removal when its removal represents an important change, such as a buddy leaving a chat room.

Note

Text removals should only be considered relevant if one of the specified values is 'removals' or 'all'. For example, for a text change from 'foo' to 'bar' in a live region with a default `aria-relevant` value, the text addition ('bar') would be spoken, but the text removal ('foo') would not.

`aria-relevant` is an optional attribute of live regions. This is a suggestion to <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>, but assistive technologies are not required to present changes of all the relevant types.

When `aria-relevant` is not defined, an element's value is inherited from the nearest ancestor with a defined value. Although the value is a [token list](#valuetype_token_list), inherited values are not additive; the value provided on a descendant element completely overrides any inherited value from an ancestor element.

When text changes are denoted as relevant, user agents *MUST* monitor any descendant node change that affects the [text alternative computation](#textalternativecomputation) of the live region as if the accessible name were determined from contents ([nameFrom: contents](#namecalculation)). For example, a text change would be triggered if the HTML `alt` attribute of a contained image changed. However, no change would be triggered if there was a text change to a node outside the live region, even if that node was referenced (via <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a>) by an element contained in the live region.

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_token_list">token list</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>additions</td><td>Element nodes are added to the accessibility tree within the live region.</td></tr><tr class="even"><td><strong>additions text</strong></td><td>Equivalent to the combination of values, "additions text".</td></tr><tr class="odd"><td>all</td><td>Equivalent to the combination of all values, "additions removals text".</td></tr><tr class="even"><td>removals</td><td>Text content, a text alternative, or an element node within the live region is removed from the accessibility tree.</td></tr><tr class="odd"><td>text</td><td>Text content or a text alternative is added to any descendant in the accessibility tree of the live region.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-required" aria-describedby="desc-aria-required">`aria-required` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-required (property)">§</span>](#aria-required "Permalink for aria-required (property)")</span></span>

Indicates that user input is required on the <a href="#dfn-element" class="internalDFN">element</a> before a form may be submitted.

For example, if the user needs to fill in an address field, the author will need to set the field's <a href="#aria-required" class="property-reference"><code>aria-required</code></a> attribute to `true`.

Note

The fact that the element is required is often presented visually (such as a sign or symbol after the <a href="#dfn-widget" class="internalDFN">widget</a>). Using the `aria-required` <a href="#dfn-attribute" class="internalDFN">attribute</a> allows the author to explicitly convey to <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> that an element is required.

Unless an exactly equivalent native attribute is available, host languages *SHOULD* allow authors to use the `aria-required` attribute on host language form elements that require input or selection by the user.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/html5/sec-forms.html#the-required-attribute">HTML <code>required</code></a></td></tr><tr class="even"><td>Used in Roles:</td><td><ul><li><a href="#combobox" class="role-reference"><code>combobox</code></a></li><li><a href="#gridcell" class="role-reference"><code>gridcell</code></a></li><li><a href="#listbox" class="role-reference"><code>listbox</code></a></li><li><a href="#radiogroup" class="role-reference"><code>radiogroup</code></a></li><li><a href="#spinbutton" class="role-reference"><code>spinbutton</code></a></li><li><a href="#textbox" class="role-reference"><code>textbox</code></a></li><li><a href="#tree" class="role-reference"><code>tree</code></a></li></ul></td></tr><tr class="odd"><td>Inherits into Roles:</td><td><ul><li><a href="#columnheader" class="role-reference"><code>columnheader</code></a></li><li><a href="#rowheader" class="role-reference"><code>rowheader</code></a></li><li><a href="#searchbox" class="role-reference"><code>searchbox</code></a></li><li><a href="#treegrid" class="role-reference"><code>treegrid</code></a></li></ul></td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_true-false">true/false</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><strong>false (default)</strong></td><td>User input is not necessary to submit the form.</td></tr><tr class="even"><td>true</td><td>Users need to provide input on an element before a form is submitted.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-roledescription" aria-describedby="desc-aria-roledescription">`aria-roledescription` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-roledescription (property)">§</span>](#aria-roledescription "Permalink for aria-roledescription (property)")</span></span>

Defines a human-readable, author-localized description for the <a href="#dfn-role" class="internalDFN">role</a> of an <a href="#dfn-element" class="internalDFN">element</a>.

Some <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>, such as screen readers, present the role of an element as part of the user experience. Such assistive technologies typically localize the name of the role, and they may customize it as well. Users of these assistive technologies depend on the presentation of the role name, such as "region," "button," or "slider," for an understanding of the purpose of the element and, if it is a widget, how to interact with it.

The `aria-roledescription` property gives authors the ability to override how assistive technologies localize and express the name of a role. Thus inappropriately using `aria-roledescription` may inhibit users' ability to understand or interact with an element. Authors *SHOULD* limit use of `aria-roledescription` to clarifying the purpose of non-interactive container roles like <a href="#group" class="role-reference"><code>group</code></a> or <a href="#region" class="role-reference"><code>region</code></a>, or to providing a *more specific* description of a <a href="#widget" class="role-reference"><code>widget</code></a>.

When using `aria-roledescription`, authors *SHOULD* also ensure that:

1.  The element to which `aria-roledescription` is applied has a valid WAI-ARIA role or has an implicit WAI-ARIA role semantic.
2.  The value of `aria-roledescription` is not empty or does not contain only whitespace characters.

User agents *MUST NOT* expose the `aria-roledescription` property if any of the following conditions exist:

1.  The element to which `aria-roledescription` is applied does not have a valid WAI-ARIA role or does not have an implicit WAI-ARIA role semantic.
2.  The value of aria-roledescription is empty or contains only whitespace characters.

<a href="#dfn-assistive-technology" class="internalDFN">Assistive technologies</a> *SHOULD* use the value of `aria-roledescription` when presenting the role of an element, but *SHOULD NOT* change other functionality based on the role of an element that has a value for `aria-roledescription`. For example, an assistive technology that provides functions for navigating to the next `region` or <a href="#button" class="role-reference"><code>button</code></a> *SHOULD* allow those functions to navigate to regions and buttons that have an `aria-roledescription`.

The following two examples show the use of `aria-roledescription` to indicate that a non-interactive container is a "slide" in a web-based presentation application.

Example 25

    <div role="region" aria-roledescription="slide" id="slide42" aria-labelledby="slide42heading">
    <h1 id="slide42heading">Quarterly Report</h1>
    <!-- remaining slide contents -->
    </div>

Example 26

    <section aria-roledescription="slide" id="slide42" aria-labelledby="slide42heading">
    <h1 id="slide42heading">Quarterly Report</h1>
    <!-- remaining slide contents -->
    </section>

In the previous examples, a screen reader user may hear "Quarterly Report, slide" rather than the more vague "Quarterly Report, region" or "Quarterly Report, group."

The following examples show the use of `aria-roledescription` to indicate that a `button` in a web-based email client is associated with an "attachment."

Example 27

    <div role="button" tabindex="0" aria-roledescription="attachment button">family_reunion.jpg</div>

Example 28

    <button aria-roledescription="attachment button">family_reunion.jpg</button>

In the previous two examples, because "button" is part of the localized description, a screen reader user should still understand how to interact with that control.

<table><caption>Characteristics:</caption><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td>All elements of the base markup</td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_string">string</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-rowcount" aria-describedby="desc-aria-rowcount">`aria-rowcount` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-rowcount (property)">§</span>](#aria-rowcount "Permalink for aria-rowcount (property)")</span></span>

Defines the total number of rows in a <a href="#table" class="role-reference"><code>table</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>. See related <a href="#aria-rowindex" class="property-reference"><code>aria-rowindex</code></a>.

If all of the rows are present in the DOM, it is not necessary to set this <a href="#dfn-attribute" class="internalDFN">attribute</a> as the <a href="#dfn-user-agent" class="internalDFN">user agent</a> can automatically calculate the total number of rows. However, if only a portion of the rows is present in the DOM at a given moment, this attribute is needed to provide an explicit indication of the number of rows in the full table.

Authors *MUST* set the value of <a href="#aria-rowcount" class="property-reference"><code>aria-rowcount</code></a> to an integer equal to the number of rows in the full table. If the total number of rows is unknown, authors *MUST* set the value of `aria-rowcount` to `-1` to indicate that the value should not be calculated by the user agent.

The following example shows a grid with 2000 rows, of which the first row and rows 100 through 102 are displayed to the user.

Example 29

    <div role="grid" aria-rowcount="2000">
      <div role="rowgroup">
        <div role="row" aria-rowindex="1">
          <span role="columnheader">First Name</span>
          <span role="columnheader">Last Name</span>
          <span role="columnheader">Company</span>
          <span role="columnheader">Phone</span>
        </div>
      </div>
      <div role="rowgroup">
        <div role="row" aria-rowindex="100">
          <span role="gridcell">Fred</span>
          <span role="gridcell">Jackson</span>
          <span role="gridcell">Acme, Inc.</span>
          <span role="gridcell">555-1234</span>
        </div>
        <div role="row" aria-rowindex="101">
          <span role="gridcell">Sara</span>
          <span role="gridcell">James</span>
          <span role="gridcell">Acme, Inc.</span>
          <span role="gridcell">555-1235</span>
        </div>
        <div role="row" aria-rowindex="102">
          <span role="gridcell">Taylor</span>
          <span role="gridcell">Johnson</span>
          <span role="gridcell">Acme, Inc.</span>
          <span role="gridcell">555-1236</span>
        </div>
      </div>
    </div>

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#table" class="role-reference"><code>table</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#grid" class="role-reference"><code>grid</code></a></li><li><a href="#treegrid" class="role-reference"><code>treegrid</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_integer">integer</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-rowindex" aria-describedby="desc-aria-rowindex">`aria-rowindex` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-rowindex (property)">§</span>](#aria-rowindex "Permalink for aria-rowindex (property)")</span></span>

Defines an <a href="#dfn-element" class="internalDFN">element's</a> row index or position with respect to the total number of rows within a <a href="#table" class="role-reference"><code>table</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>. See related <a href="#aria-rowcount" class="property-reference"><code>aria-rowcount</code></a> and <a href="#aria-rowspan" class="property-reference"><code>aria-rowspan</code></a>.

If all of the rows are present in the DOM, it is not necessary to set this <a href="#dfn-attribute" class="internalDFN">attribute</a> as the <a href="#dfn-user-agent" class="internalDFN">user agent</a> can automatically calculate the index of each row. However, if only a portion of the rows is present in the DOM at a given moment, this attribute is needed to provide an explicit indication of each row's position with respect to the full table.

Authors *MUST* set the value for <a href="#aria-rowindex" class="property-reference"><code>aria-rowindex</code></a> to an integer greater than or equal to 1, greater than the `aria-rowindex` value of any previous rows, and less than or equal to the number of rows in the full table. For a cell or gridcell which spans multiple rows, authors *MUST* set the value of `aria-rowindex` to the start of the span.

Authors *SHOULD* place `aria-rowindex` on each row. Authors *MAY* also place `aria-rowindex` on all of the children or <a href="#dfn-owned-element" class="internalDFN">owned elements</a> of each row.

The following example shows a grid with 2000 rows, of which the first row and rows 100 through 102 are displayed to the user.

Example 30

    <div role="grid" aria-rowcount="2000">
      <div role="rowgroup">
        <div role="row" aria-rowindex="1">
          <span role="columnheader">First Name</span>
          <span role="columnheader">Last Name</span>
          <span role="columnheader">Company</span>
          <span role="columnheader">Phone</span>
        </div>
      </div>
      <div role="rowgroup">
        <div role="row" aria-rowindex="100">
          <span role="gridcell">Fred</span>
          <span role="gridcell">Jackson</span>
          <span role="gridcell">Acme, Inc.</span>
          <span role="gridcell">555-1234</span>
        </div>
        <div role="row" aria-rowindex="101">
          <span role="gridcell">Sara</span>
          <span role="gridcell">James</span>
          <span role="gridcell">Acme, Inc.</span>
          <span role="gridcell">555-1235</span>
        </div>
        <div role="row" aria-rowindex="102">
          <span role="gridcell">Taylor</span>
          <span role="gridcell">Johnson</span>
          <span role="gridcell">Acme, Inc.</span>
          <span role="gridcell">555-1236</span>
        </div>
      </div>
    </div>

The following example shows the grid from the previous example with `aria-rowindex` also placed on all of the owned elements of each row.

Example 31

    <div role="grid" aria-rowcount="2000">
      <div role="rowgroup">
        <div role="row" aria-rowindex="1">
          <span role="columnheader" aria-rowindex="1">First Name</span>
          <span role="columnheader" aria-rowindex="1">Last Name</span>
          <span role="columnheader" aria-rowindex="1">Company</span>
          <span role="columnheader" aria-rowindex="1">Phone</span>
        </div>
      </div>
      <div role="rowgroup">
        <div role="row" aria-rowindex="100">
          <span role="gridcell" aria-rowindex="100">Fred</span>
          <span role="gridcell" aria-rowindex="100">Jackson</span>
          <span role="gridcell" aria-rowindex="100">Acme, Inc.</span>
          <span role="gridcell" aria-rowindex="100">555-1234</span>
        </div>
        <div role="row" aria-rowindex="101">
          <span role="gridcell" aria-rowindex="101">Sara</span>
          <span role="gridcell" aria-rowindex="101">James</span>
          <span role="gridcell" aria-rowindex="101">Acme, Inc.</span>
          <span role="gridcell" aria-rowindex="101">555-1235</span>
        </div>
        <div role="row" aria-rowindex="102">
          <span role="gridcell" aria-rowindex="102">Taylor</span>
          <span role="gridcell" aria-rowindex="102">Johnson</span>
          <span role="gridcell" aria-rowindex="102">Acme, Inc.</span>
          <span role="gridcell" aria-rowindex="102">555-1236</span>
        </div>
      </div>
    </div>

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#cell" class="role-reference"><code>cell</code></a></li><li><a href="#row" class="role-reference"><code>row</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#columnheader" class="role-reference"><code>columnheader</code></a></li><li><a href="#gridcell" class="role-reference"><code>gridcell</code></a></li><li><a href="#rowheader" class="role-reference"><code>rowheader</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_integer">integer</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-rowspan" aria-describedby="desc-aria-rowspan">`aria-rowspan` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-rowspan (property)">§</span>](#aria-rowspan "Permalink for aria-rowspan (property)")</span></span>

Defines the number of rows spanned by a cell or gridcell within a <a href="#table" class="role-reference"><code>table</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, or <a href="#treegrid" class="role-reference"><code>treegrid</code></a>. See related <a href="#aria-rowindex" class="property-reference"><code>aria-rowindex</code></a> and <a href="#aria-colspan" class="property-reference"><code>aria-colspan</code></a>.

This <a href="#dfn-attribute" class="internalDFN">attribute</a> is intended for cells and gridcells which are not contained in a native table. When defining the row span of cells or gridcells in a native table, authors *SHOULD* use the host language's attribute instead of <a href="#aria-rowspan" class="property-reference"><code>aria-rowspan</code></a>. If `aria-rowspan` is used on an element for which the host language provides an equivalent attribute, <a href="#dfn-user-agent" class="internalDFN">user agents</a> *MUST* ignore the value of `aria-rowspan` and instead expose the value of the host language's attribute to <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>.

Authors *MUST* set the value of `aria-rowspan` to an integer greater than or equal to 0 and less than the value which would cause the cell or gridcell to overlap the next cell or gridcell in the same column. Setting the value to 0 indicates that the cell or gridcell is to span all the remaining rows in the row group.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#cell" class="role-reference"><code>cell</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#columnheader" class="role-reference"><code>columnheader</code></a></li><li><a href="#gridcell" class="role-reference"><code>gridcell</code></a></li><li><a href="#rowheader" class="role-reference"><code>rowheader</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_integer">integer</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="state-name" title="aria-selected" aria-describedby="desc-aria-selected">`aria-selected` <span class="type-indicator">(state)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-selected (state)">§</span>](#aria-selected "Permalink for aria-selected (state)")</span></span>

Indicates the current "selected" <a href="#dfn-state" class="internalDFN">state</a> of various <a href="#dfn-widget" class="internalDFN">widgets</a>. See related <a href="#aria-checked" class="state-reference"><code>aria-checked</code></a> and <a href="#aria-pressed" class="state-reference"><code>aria-pressed</code></a>.

This <a href="#dfn-attribute" class="internalDFN">attribute</a> is used with single-selection and multiple-selection widgets:

1.  Single-selection containers where the currently focused item is not selected. The selection normally follows the focus, and is managed by the <a href="#dfn-user-agent" class="internalDFN">user agent</a>.
2.  Multiple-selection containers. Authors *SHOULD* ensure that any selectable descendant of a container in which the <a href="#aria-multiselectable" class="property-reference"><code>aria-multiselectable</code></a> attribute is `true` specifies a value of either `true` or `false` for the <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a> attribute.

Any explicit assignment of `aria-selected` takes precedence over the implicit selection based on focus. If no DOM element in the widget is explicitly marked as selected, assistive technologies *MAY* convey implicit selection which follows the keyboard focus of the [managed focus](#managingfocus) widget. If any DOM element in the widget is explicitly marked as selected, the user agent *MUST NOT* convey implicit selection for the widget.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#gridcell" class="role-reference"><code>gridcell</code></a></li><li><a href="#option" class="role-reference"><code>option</code></a></li><li><a href="#row" class="role-reference"><code>row</code></a></li><li><a href="#tab" class="role-reference"><code>tab</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#columnheader" class="role-reference"><code>columnheader</code></a></li><li><a href="#rowheader" class="role-reference"><code>rowheader</code></a></li><li><a href="#treeitem" class="role-reference"><code>treeitem</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_true-false-undefined">true/false/undefined</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>false</td><td>The selectable element is not selected.</td></tr><tr class="even"><td>true</td><td>The selectable element is selected.</td></tr><tr class="odd"><td><strong>undefined (default)</strong></td><td>The element is not selectable.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-setsize" aria-describedby="desc-aria-setsize">`aria-setsize` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-setsize (property)">§</span>](#aria-setsize "Permalink for aria-setsize (property)")</span></span>

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related <a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a>.

This <a href="#dfn-property" class="internalDFN">property</a> is marked on the members of a set, not the container element that collects the members of the set. To orient the user by saying an element is "item X out of Y," the <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> would use X equal to the `aria-posinset` <a href="#dfn-attribute" class="internalDFN">attribute</a> and Y equal to the `aria-setsize` attribute.

If all items in a set are present in the document structure, it is not necessary to set this property, as the <a href="#dfn-user-agent" class="internalDFN">user agent</a> can automatically calculate the set size and position for each item. However, if only a portion of the set is present in the document structure at a given moment (in order to reduce document size), this property is needed to provide an explicit indication of set size.

Authors *MUST* set the value of `aria-setsize` to an integer equal to the number of items in the set. If the total number of items is unknown, authors *SHOULD* set the value of `aria-setsize` to `-1`.

When exposing `aria-setsize` on a <a href="#menuitem" class="role-reference"><code>menuitem</code></a>, <a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a>, or <a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a>, authors *SHOULD* set the value of `aria-setsize` based on the total number of items in the <a href="#menu" class="role-reference"><code>menu</code></a>, excluding any separators.

The following example shows items 5 through 8 in a set of 16.

Example 32

    <h2 id="label_fruit"> Available Fruit </h2>
    <ul role="listbox" aria-labelledby="label_fruit">
      <li role="option" aria-setsize="16" aria-posinset="5"> apples </li>
      <li role="option" aria-setsize="16" aria-posinset="6"> bananas </li>
      <li role="option" aria-setsize="16" aria-posinset="7"> cantaloupes </li>
      <li role="option" aria-setsize="16" aria-posinset="8"> dates </li>
    </ul>

The following example shows items 5 through 8 in a set whose total size is unknown.

Example 33

    <h2 id="label_fruit"> Available Fruit </h2>
    <ul role="listbox" aria-labelledby="label_fruit">
      <li role="option" aria-setsize="-1" aria-posinset="5"> apples </li>
      <li role="option" aria-setsize="-1" aria-posinset="6"> bananas </li>
      <li role="option" aria-setsize="-1" aria-posinset="7"> cantaloupes </li>
      <li role="option" aria-setsize="-1" aria-posinset="8"> dates </li>
    </ul>

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#article" class="role-reference"><code>article</code></a></li><li><a href="#listitem" class="role-reference"><code>listitem</code></a></li><li><a href="#menuitem" class="role-reference"><code>menuitem</code></a></li><li><a href="#option" class="role-reference"><code>option</code></a></li><li><a href="#radio" class="role-reference"><code>radio</code></a></li><li><a href="#tab" class="role-reference"><code>tab</code></a></li></ul></td></tr><tr class="even"><td>Inherits into Roles:</td><td><ul><li><a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a></li><li><a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a></li><li><a href="#treeitem" class="role-reference"><code>treeitem</code></a></li></ul></td></tr><tr class="odd"><td>Value:</td><td><a href="#valuetype_integer">integer</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-sort" aria-describedby="desc-aria-sort">`aria-sort` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-sort (property)">§</span>](#aria-sort "Permalink for aria-sort (property)")</span></span>

Indicates if items in a table or grid are sorted in ascending or descending order.

Authors *SHOULD* only apply this <a href="#dfn-property" class="internalDFN">property</a> to table headers or grid headers. If the property is not provided, there is no defined sort order. For each table or grid, authors *SHOULD* apply <a href="#aria-sort" class="property-reference"><code>aria-sort</code></a> to only one header at a time.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Used in Roles:</td><td><ul><li><a href="#columnheader" class="role-reference"><code>columnheader</code></a></li><li><a href="#rowheader" class="role-reference"><code>rowheader</code></a></li></ul></td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_token">token</a></td></tr></tbody></table>

<table><caption>Values:</caption><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>ascending</td><td>Items are sorted in ascending order by this column.</td></tr><tr class="even"><td>descending</td><td>Items are sorted in descending order by this column.</td></tr><tr class="odd"><td><strong>none (default)</strong></td><td>There is no defined sort applied to the column.</td></tr><tr class="even"><td>other</td><td>A sort algorithm other than ascending or descending has been applied.</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-valuemax" aria-describedby="desc-aria-valuemax">`aria-valuemax` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-valuemax (property)">§</span>](#aria-valuemax "Permalink for aria-valuemax (property)")</span></span>

Defines the maximum allowed value for a range <a href="#dfn-widget" class="internalDFN">widget</a>.

Authors *MUST* ensure the value of <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a> is greater than or equal to the value of <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a>. If the <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> has a known maximum and minimum, the author *SHOULD* provide properties for `aria-valuemax` and `aria-valuemin`.

Note

A range widget starts with a given value, which can be increased until reaching the maximum value, defined by this <a href="#dfn-property" class="internalDFN">property</a>. Declaring the minimum and maximum values allows assistive technology to convey the size of the range to users.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/">XForms</a> [<a href="#bib-XFORMS10" class="bibref">XFORMS10</a>] range</td></tr><tr class="even"><td>Used in Roles:</td><td><ul><li><a href="#range" class="role-reference"><code>range</code></a></li><li><a href="#scrollbar" class="role-reference"><code>scrollbar</code></a></li><li><a href="#separator" class="role-reference"><code>separator</code></a></li><li><a href="#slider" class="role-reference"><code>slider</code></a></li><li><a href="#spinbutton" class="role-reference"><code>spinbutton</code></a></li></ul></td></tr><tr class="odd"><td>Inherits into Roles:</td><td><ul><li><a href="#progressbar" class="role-reference"><code>progressbar</code></a></li></ul></td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_number">number</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-valuemin" aria-describedby="desc-aria-valuemin">`aria-valuemin` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-valuemin (property)">§</span>](#aria-valuemin "Permalink for aria-valuemin (property)")</span></span>

Defines the minimum allowed value for a range <a href="#dfn-widget" class="internalDFN">widget</a>.

Authors *MUST* ensure the value of <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a> is less than or equal to the value of <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a>. If the <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> has a known maximum and minimum, the author *SHOULD* provide properties for `aria-valuemax` and `aria-valuemin`.

Note

A range widget starts with a given value, which can be decreased until reaching the minimum value, defined by this <a href="#dfn-property" class="internalDFN">property</a>. Declaring the minimum and maximum values allows assistive technology to convey the size of the range to users.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/">XForms</a> [<a href="#bib-XFORMS10" class="bibref">XFORMS10</a>] range</td></tr><tr class="even"><td>Used in Roles:</td><td><ul><li><a href="#range" class="role-reference"><code>range</code></a></li><li><a href="#scrollbar" class="role-reference"><code>scrollbar</code></a></li><li><a href="#separator" class="role-reference"><code>separator</code></a></li><li><a href="#slider" class="role-reference"><code>slider</code></a></li><li><a href="#spinbutton" class="role-reference"><code>spinbutton</code></a></li></ul></td></tr><tr class="odd"><td>Inherits into Roles:</td><td><ul><li><a href="#progressbar" class="role-reference"><code>progressbar</code></a></li></ul></td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_number">number</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-valuenow" aria-describedby="desc-aria-valuenow">`aria-valuenow` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-valuenow (property)">§</span>](#aria-valuenow "Permalink for aria-valuenow (property)")</span></span>

Defines the current value for a range <a href="#dfn-widget" class="internalDFN">widget</a>. See related <a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a>.

This property is used, for example, on a range widget such as a slider or progress bar.

If the current value is not known (for example, an indeterminate progress bar), the author *SHOULD NOT* set the <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> <a href="#dfn-attribute" class="internalDFN">attribute</a>. If the `aria-valuenow` attribute is absent, no information is implied about the current value. If the `aria-valuenow` has a known maximum and minimum, the author *SHOULD* provide properties for <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a> and <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a>.

The value of `aria-valuenow` is a decimal number. If the range is a set of numeric values, then `aria-valuenow` is one of those values. For example, if the range is \[0, 1\], a valid `aria-valuenow` is 0.5. A value outside the range, such as -2.5 or 1.1, is invalid.

For <a href="#progressbar" class="role-reference"><code>progressbar</code></a> elements and <a href="#scrollbar" class="role-reference"><code>scrollbar</code></a> elements, assistive technologies *SHOULD* render the value to users as a percent, calculated as a position on the range from `aria-valuemin` to `aria-valuemax` if both are defined, otherwise the actual value with a percent indicator. For elements with role <a href="#slider" class="role-reference"><code>slider</code></a> and <a href="#spinbutton" class="role-reference"><code>spinbutton</code></a>, assistive technologies *SHOULD* render the actual value to users.

When the rendered value cannot be accurately represented as a number, authors *SHOULD* use the `aria-valuetext` attribute in conjunction with `aria-valuenow` to provide a user-friendly representation of the range's current value. For example, a slider may have rendered values of `small`, `medium`, and `large`. In this case, the values of `aria-valuetext` would be one of the strings: `small`, `medium`, or `large`.

Note

If `aria-valuetext` is specified, assistive technologies render that instead of the value of `aria-valuenow`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/">XForms</a> [<a href="#bib-XFORMS10" class="bibref">XFORMS10</a>] range, start</td></tr><tr class="even"><td>Used in Roles:</td><td><ul><li><a href="#range" class="role-reference"><code>range</code></a></li><li><a href="#scrollbar" class="role-reference"><code>scrollbar</code></a></li><li><a href="#separator" class="role-reference"><code>separator</code></a></li><li><a href="#slider" class="role-reference"><code>slider</code></a></li><li><a href="#spinbutton" class="role-reference"><code>spinbutton</code></a></li></ul></td></tr><tr class="odd"><td>Inherits into Roles:</td><td><ul><li><a href="#progressbar" class="role-reference"><code>progressbar</code></a></li></ul></td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_number">number</a></td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading"><span class="property-name" title="aria-valuetext" aria-describedby="desc-aria-valuetext">`aria-valuetext` <span class="type-indicator">(property)</span></span><span class="permalink" typeof="bookmark">[<span property="title" content="aria-valuetext (property)">§</span>](#aria-valuetext "Permalink for aria-valuetext (property)")</span></span>

Defines the human readable text alternative of <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> for a range <a href="#dfn-widget" class="internalDFN">widget</a>.

This property is used, for example, on a range widget such as a slider or progress bar.

If the <a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a> attribute is set, authors *SHOULD* also set the `aria-valuenow` attribute, unless that value is unknown (for example, on an indeterminate <a href="#progressbar" class="role-reference"><code>progressbar</code></a>).

Authors *SHOULD* only set the `aria-valuetext` attribute when the rendered value cannot be meaningfully represented as a number. For example, a slider may have rendered values of `small`, `medium`, and `large`. In this case, the values of `aria-valuenow` could range from 1 through 3, which indicate the position of each value in the value space, but the `aria-valuetext` would be one of the strings: `small`, `medium`, or `large`. If the `aria-valuetext` attribute is absent, the <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a> will rely solely on the `aria-valuenow` attribute for the current value.

If aria-valuetext is specified, assistive technologies *SHOULD* render that value instead of the value of `aria-valuenow`.

<table><caption>Characteristics:</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Characteristic</th><th>Value</th></tr></thead><tbody><tr class="odd"><td>Related Concepts:</td><td><a href="https://www.w3.org/TR/2007/REC-xforms-20071029/">XForms</a> [<a href="#bib-XFORMS10" class="bibref">XFORMS10</a>] range, start</td></tr><tr class="even"><td>Used in Roles:</td><td><ul><li><a href="#range" class="role-reference"><code>range</code></a></li><li><a href="#separator" class="role-reference"><code>separator</code></a></li></ul></td></tr><tr class="odd"><td>Inherits into Roles:</td><td><ul><li><a href="#progressbar" class="role-reference"><code>progressbar</code></a></li><li><a href="#scrollbar" class="role-reference"><code>scrollbar</code></a></li><li><a href="#slider" class="role-reference"><code>slider</code></a></li><li><a href="#spinbutton" class="role-reference"><code>spinbutton</code></a></li></ul></td></tr><tr class="even"><td>Value:</td><td><a href="#valuetype_string">string</a></td></tr></tbody></table>

<span property="xhv:role" resource="xhv:heading"><span class="secno">7. </span>Implementation in Host Languages<span class="permalink" typeof="bookmark">[<span property="title" content="7. Implementation in Host Languages">§</span>](#host_languages "Permalink for 7. Implementation in Host Languages")</span></span>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The <a href="#dfn-role" class="internalDFN">roles</a>, <a href="#dfn-state" class="internalDFN">state</a>, and <a href="#dfn-property" class="internalDFN">properties</a> defined in this specification do not form a complete web language or format. They are intended to be used in the context of a host language. This section discusses how host languages are to implement WAI-ARIA, to ensure that the markup specified here will integrate smoothly and effectively with the host language markup.

Although markup languages look alike superficially, they do not share language definition infrastructure. To accommodate differences in language-building approaches, the requirements are both general and modularization-specific. While allowing for differences in how the specifications are written, the intent is to maintain consistency in how the WAI-ARIA information looks to authors and how it is manipulated in the DOM by scripts.

WAI-ARIA roles, states, and properties are implemented as <a href="#dfn-attribute" class="internalDFN">attributes</a> of <a href="#dfn-element" class="internalDFN">elements</a>. Roles are applied by placing their names among the tokens appearing in the value of a host-language-provided `role` attribute. States and properties each get their own attribute, with values as defined for each particular state or property in this specification. The name of the attribute is the aria-prefixed name of the state or property.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">7.1 </span>Role Attribute<span class="permalink" typeof="bookmark">[<span property="title" content="7.1 Role Attribute">§</span>](#host_general_role "Permalink for 7.1 Role Attribute")</span></span>

An implementing host language will provide an <a href="#dfn-attribute" class="internalDFN">attribute</a> with the following characteristics:

-   The attribute name *MUST* be `role`;
-   The attribute value *MUST* allow a token list as the value;
-   The appearance of the name literal of any concrete WAI-ARIA <a href="#dfn-role" class="internalDFN">role</a> as one of these tokens *MUST NOT* in and of itself make the attribute value illegal in the host-language syntax; and
-   The first name literal of a non-abstract WAI-ARIA role in the list of tokens in the role attribute defines the role according to which the user agent *MUST* process the element. User Agent processing for roles is defined in the [Core Accessibility API Mappings](https://www.w3.org/TR/core-aam-1.1/) \[<a href="#bib-core-aam-1.1" class="bibref">core-aam-1.1</a>\].

### <span property="xhv:role" resource="xhv:heading"><span class="secno">7.2 </span>State and Property Attributes<span class="permalink" typeof="bookmark">[<span property="title" content="7.2 State and Property Attributes">§</span>](#host_general_attrs "Permalink for 7.2 State and Property Attributes")</span></span>

An implementing host language *MUST* allow <a href="#dfn-attribute" class="internalDFN">attributes</a> with the following characteristics:

-   The attribute name is the name of any state or property identified in the [Supported States and Properties](#states_and_properties) section, such as <a href="#aria-busy" class="state-reference"><code>aria-busy</code></a>, <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a>, <a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a>, <a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a>;
-   The syntax does **NOT** prevent the attribute from appearing anywhere that it is applicable, as specified in this specification;
-   When these attributes appear in a document instance, the attributes will be processed as defined in this specification.

Host languages that support [XML Namespaces](https://www.w3.org/TR/2006/REC-xml-names-20060816/) \[<a href="#bib-xml-names" class="bibref">xml-names</a>\] ***MAY*** require that WAI-ARIA attributes be used with a namespace. In this case, the namespace for WAI-ARIA state and property attributes ***MUST*** be `http://www.w3.org/ns/wai-aria/`. To use WAI-ARIA in host languages that do not explicitly describe support for it, authors ***SHOULD*** use this namespace as well, if the host language supports namespaces and there is expectation that user agents will recognize the WAI-ARIA namespace. The namespace prefix is not defined by this specification but generally is expected to be "`aria`".

Note

The WAI-ARIA state and property attributes have a naming convention such that they all begin with the string "`aria-`". This is *not* a namespace prefix, it is a part of the state or property name. Therefore, when using WAI-ARIA states and properties with namespace prefixes, the complete attribute name will be like "`aria:aria-foo`".

Some host languages do not use namespaces with WAI-ARIA state and property attributes, either because the host language does not support namespaces or because the designers wish to incorporate WAI-ARIA into the core feature set. In these host languages, the namespace name for these attributes has no value. The names of these attributes do not have a prefix offset by a colon; in the terms of namespaces they are unprefixed attribute names. The ECMAScript binding of the DOM interface `getAttributeNS` for example, treats an empty string (`""`) as representing this condition, so that both `getAttribute("aria-busy")` and `getAttributeNS("", "aria-busy")` access the same `aria-busy` attribute in the DOM.

Note

According to the requirements of this section, some user agents recognize WAI-ARIA state and property attributes *with* namespaces, some *without* namespaces, and some might recognize both. Authors are advised to be aware of which form is supported for the host language they are using. Unless the host language and supporting user agents explicitly indicate that the namespace is required, authors are advised to use the attribute without namespaces. Even user agents that support namespaces generally do not publish namespaced WAI-ARIA states and properties to accessibility APIs. In particular, current implementations of HTML, including XHTML, do not support this namespace.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">7.3 </span>Focus Navigation<span class="permalink" typeof="bookmark">[<span property="title" content="7.3 Focus Navigation">§</span>](#host_general_focus "Permalink for 7.3 Focus Navigation")</span></span>

An implementing host language *MUST* provide support for the author to make all interactive elements focusable, that is, any renderable or event-receiving elements. An implementing host language *MUST* provide a facility to allow web authors to define whether these focusable, interactive elements appear in the default tab navigation order. The `tabindex` <a href="#dfn-attribute" class="internalDFN">attribute</a> in HTML 5 is an example of one implementation.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">7.4 </span>Implicit WAI-ARIA Semantics<span class="permalink" typeof="bookmark">[<span property="title" content="7.4 Implicit WAI-ARIA Semantics">§</span>](#implicit_semantics "Permalink for 7.4 Implicit WAI-ARIA Semantics")</span></span>

WAI-ARIA is designed to provide <a href="#dfn-semantics" class="internalDFN">semantic</a> information about objects when host languages lack native semantics for the object. WAI-ARIA is designed, however, to provide additional semantics for many host languages. Furthermore, host languages over time can evolve and provide new native features that correspond to WAI-ARIA features. Therefore, there are many situations in which WAI-ARIA semantics are redundant with host language semantics.

These host language features can be viewed as having "implicit WAI-ARIA semantics". User agent processing of features with implicit WAI-ARIA semantics would be similar to the processing for the WAI-ARIA feature. The processing might not be identical because of lexical differences between the host language feature and the WAI-ARIA feature, but generally the user agent would expose the same information to the accessibility API. Features with implicit WAI-ARIA semantics satisfy WAI-ARIA structural requirements such as required owned elements, required states and properties, etc. and do not require explicit WAI-ARIA semantics to be provided. On elements with implicit WAI-ARIA roles, authors can also use WAI-ARIA states and properties supported by those roles *without* requiring explicit indication of the WAI-ARIA role.

For example, if an element with the functionality already exists, such as a checkbox or radio button, use the native semantics of the host language. WAI-ARIA markup is only intended to be used to enhance the native semantics (e.g., indicating that the element is required with <a href="#aria-required" class="property-reference"><code>aria-required</code></a>), or to change the semantics to a different purpose from the standard functionality of the element.

Implicit WAI-ARIA semantics affect the conflict resolution procedures in the following section, Conflicts with Host Language Semantics. Therefore, implicit WAI-ARIA semantics need to be defined in a normative specification, such as the host language specification or the [Core Accessibility API Mappings](https://www.w3.org/TR/core-aam-1.1/) \[<a href="#bib-core-aam-1.1" class="bibref">core-aam-1.1</a>\].

### <span property="xhv:role" resource="xhv:heading"><span class="secno">7.5 </span>Conflicts with Host Language Semantics<span class="permalink" typeof="bookmark">[<span property="title" content="7.5 Conflicts with Host Language Semantics">§</span>](#host_general_conflict "Permalink for 7.5 Conflicts with Host Language Semantics")</span></span>

WAI-ARIA roles, states, and properties are intended to add <a href="#dfn-semantics" class="internalDFN">semantic</a> information when native host language elements with these semantics are not available, and are generally used on elements that have no native semantics of their own. They can also be used on elements that have similar but non-identical semantics (for example, a nested list could be used to represent a tree structure). This method can be part of a fallback strategy for older browsers that have no WAI-ARIA implementation, or because native presentation of the repurposed element reduces the amount of style and/or script needed. Except for the cases outlined below, user agents *MUST* always use the WAI-ARIA semantics to define how it exposes the element to accessibility APIs, rather than using the host language semantics.

In addition to these normal situations in which WAI-ARIA is expected to override native semantics, there are elements that are inappropriate to override with WAI-ARIA. This could be because identical host language semantics exist, so WAI-ARIA is not needed, or because semantics from WAI-ARIA directly conflict with host language semantics. When a feature in the host language with identical role semantics and values is available, and the author has no compelling reason to avoid using the host language feature, authors *SHOULD* use the host language features rather than repurpose other elements with WAI-ARIA.

Host languages can have features that have implicit WAI-ARIA semantics corresponding to roles. When a WAI-ARIA role is provided, user agents *MUST* use the semantic of the WAI-ARIA role for processing, not the native semantic, unless the role requires WAI-ARIA states and properties whose attributes are explicitly forbidden on the native element by the host language. Values for roles do not conflict in the same way as values for states and properties (for example, the HTML 'checked' attribute and the 'aria-checked' attribute could have conflicting values), and authors are expected to have valid reason to provide a WAI-ARIA role even on elements that would not normally be repurposed.

When WAI-ARIA states and properties correspond to host language features that have the same [implicit WAI-ARIA semantic](#implicit_semantics), it can be particularly problematic to use the WAI-ARIA feature. If the WAI-ARIA feature and the host language feature are both provided but their values are not kept in sync, user agents and assistive technologies cannot know which value to use. Therefore, to prevent providing conflicting states and properties to assistive technologies, host languages *MUST* explicitly declare where the use of WAI-ARIA attributes on each host language element conflicts with native attributes for that element. When a host language declares a WAI-ARIA attribute to be in direct semantic conflict with a native attribute for a given element, user agents *MUST* ignore the WAI-ARIA attribute and instead use the host language attribute with the same implicit semantic.

Host languages *MAY* document features that cannot be overridden with WAI-ARIA (these are called "strong native semantics"). These can be features that have implicit WAI-ARIA semantics, as well as features where the processing would be uncertain if the semantics were changed with WAI-ARIA. Conformance checkers *MAY* signal an error or warning when a WAI-ARIA role is used on elements with strong native semantics, but as described above, user agents *MUST* still use the value of the semantic of the WAI-ARIA role when exposing the element to accessibility APIs unless the native host language semantic is permanently presentational.

The opportunity for host languages to create exceptions to the WAI-ARIA override of native features is meant to avoid potential author errors or problems with intrinsic processing of host language features. Author errors could happen when a host language and WAI-ARIA provide similar but not identical features, where it might not be clear how changing one but not the other affects the accessibility API. Intrinsic processing refers to the way a feature is processed, beyond simple rendering and exposure to the Accessibility API, that cannot reasonably be changed in response to a ARIA feature, and would lead to unpredictable results were ARIA allowed. In these situations, there is good reason for host languages to limit the scope of WAI-ARIA. However, this provision does not give blanket permission for host languages to forbid the use of WAI-ARIA simply by documenting, feature by feature, that it may not be used. Host languages should create restrictions on the use of ARIA only when it is critical to effective processing of content.

Certain ARIA features are critical to building a complete model in the accessibility API. Such features are not expected to conflict with native host language semantics (though they may complement them). Therefore, host languages *MUST NOT* declare strong native semantics that prevent use of the following ARIA features:

-   <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a>
-   <a href="#aria-label" class="property-reference"><code>aria-label</code></a>
-   <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a>

### <span property="xhv:role" resource="xhv:heading"><span class="secno">7.6 </span>State and Property Attribute Processing<span class="permalink" typeof="bookmark">[<span property="title" content="7.6 State and Property Attribute Processing">§</span>](#state_property_processing "Permalink for 7.6 State and Property Attribute Processing")</span></span>

State and property attributes are included in host languages, and therefore syntax for representation of their value types is governed by the host language. For each of the value types defined in [Value](#propcharacteristic_value), an appropriate value type from the host language is used. Recommended correspondences between WAI-ARIA value types and various host language value types are listed in [Mapping WAI-ARIA Value types to languages](#typemapping). This is a non-normative mapping in order to accommodate new host languages supporting WAI-ARIA.

The list value types—ID reference list and token list—allow more than one value of the given type to be provided. The values are separated by delimiter characters recognized by the host language for list attributes, such as space characters, commas, etc. Some languages may require a specific, single delimiter, while others may allow various delimiters.

Global states and properties are supported on any element in the host language. However, authors *MUST* only use non-global states and properties on elements with a role supporting the state or property; either defined as an explicit WAI-ARIA role, or as defined by the host language implicit WAI-ARIA semantic matching an appropriate WAI-ARIA role. When a role attribute is added to an element, the <a href="#dfn-semantics" class="internalDFN">semantics</a> and behavior of the element, including support for WAI-ARIA states and properties, are augmented or overridden by the role behavior. User agents ***MUST*** ignore non-global states and properties used on an element without a role supporting the state or property; either defined as an explicit WAI-ARIA role, or as defined by the host language WAI-ARIA semantic matching an appropriate WAI-ARIA role. For example, the <a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a> attribute may be used on a <a href="#progressbar" class="role-reference"><code>progressbar</code></a>.

WAI-ARIA roles have associated states and properties that are qualified as "supported" or "required". An example of a property *supported* by the <a href="#combobox" class="role-reference">combobox</a> role is <a href="#aria-autocomplete" class="property-reference">aria-autocomplete</a>. The property is designated "supported" in this case because a given `combobox` might or might not implement auto completion. In contrast, the `combobox` role *requires* the <a href="#aria-expanded" class="state-reference">aria-expanded</a> state in order to indicate that it is expandable. Comboboxes have a descendant `listbox` that is either open or closed. If the `listbox` is open, the `combobox` is in its expanded state; otherwise it is collapsed.

When WAI-ARIA roles are used, *supported* states and properties that are not present in the DOM are treated according to their default value. Keeping with the `combobox` example, a missing `aria-autocomplete` attribute is equivalent to `aria-autocomplete="none"`, meaning the `combobox` does not offer auto completion.

However, *required* states and properties that are absent are an author error. Missing required states and properties are treated as if they were present and have an implicit neutral value that is not necessarily their default value. For example, the default value of `aria-expanded` is `undefined`, meaning neither expandable nor collapsible. But that does not apply to the case of a `combobox`. In this case, `aria-expanded` is needed to convey the expandable/collapsible nature of the `combobox`. Thus, the implicit value of `aria-expanded` for the `combobox` role is `false`, meaning expandable (and currently collapsed). The characteristics table associated with each WAI-ARIA role has an "[Implicit Value for Role](#implictValueForRole)" entry that specifies the value of a state or property to use in the context of that role when the state or property is missing.

Elements that have implicit WAI-ARIA semantics support the full set of WAI-ARIA states and properties supported by the corresponding role. Therefore, authors *MAY* omit the role when setting states and properties. The role is only needed when the implicit WAI-ARIA role of the element needs to be changed.

Sometimes states and properties are present in the DOM but have a zero-length string ("") as their value. This is equivalent to their absence. User agents *SHOULD* treat state and property attributes with a value of "" the same as they treat an absent attribute. For supported states and properties, this corresponds to the default value, but if it is a required attribute, it signals an author error, and the implicit value for the role is used.

<span property="xhv:role" resource="xhv:heading"><span class="secno">A. </span>Schemata<span class="permalink" typeof="bookmark">[<span property="title" content="A. Schemata">§</span>](#a_schemata "Permalink for A. Schemata")</span></span>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is non-normative.*

WAI-ARIA roles, states, and properties are available in a number of machine-readable formats to support validation of content using WAI-ARIA attributes. WAI-ARIA is not finalized, however, so these files are subject to change without notice. <span class="todo">Todo: Remove disclaimers about not final at rec.</span>

It is not appropriate to use these document types for live content. These are made available only for download, to support local use in development, evaluation, and validation tools. Using these versions directly from the W3C server could cause automatic blockage, preventing them from loading.

If it is necessary to use schemata in content, follow [guidelines to avoid excessive DTD traffic](http://www.w3.org/blog/systeam/2008/02/08/w3c_s_excessive_dtd_traffic/). For instance, use caching proxies to avoid fetching the schema each time it is used, or ensure software uses a local cache, such as with [XML catalogs](http://nwalsh.com/docs/articles/xml2003/).

### <span property="xhv:role" resource="xhv:heading"><span class="secno">A.1 </span>Roles Implementation<span class="permalink" typeof="bookmark">[<span property="title" content="A.1 Roles Implementation">§</span>](#a_impl_roles "Permalink for A.1 Roles Implementation")</span></span>

The taxonomy for WAI-ARIA expressed in RDF is available from <http://www.w3.org/WAI/ARIA/schemata/aria-1.rdf>.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">A.2 </span>WAI-ARIA Attributes Module<span class="permalink" typeof="bookmark">[<span property="title" content="A.2 WAI-ARIA Attributes Module">§</span>](#xhtml_mod "Permalink for A.2 WAI-ARIA Attributes Module")</span></span>

This module declares the WAI-ARIA <a href="#dfn-attribute" class="internalDFN">attributes</a> as a module that can be included in a modularized DTD. A sample XHTML DTD using this module follows. Note the WAI-ARIA attributes are in no namespace, and the attribute name begins with "aria-" to reduce the likelihood of collision with existing attributes.

This module is available from <http://www.w3.org/MarkUp/DTD/aria-attributes-1.mod>.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">A.3 </span>XHTML plus WAI-ARIA DTD<span class="permalink" typeof="bookmark">[<span property="title" content="A.3 XHTML plus WAI-ARIA DTD">§</span>](#xhtml_dtd "Permalink for A.3 XHTML plus WAI-ARIA DTD")</span></span>

This DTD extends XHTML 1.1 and adds the WAI-ARIA <a href="#dfn-state" class="internalDFN">state</a> and <a href="#dfn-property" class="internalDFN">property</a> <a href="#dfn-attribute" class="internalDFN">attributes</a> to all its <a href="#dfn-element" class="internalDFN">elements</a>. In order to provide broader keyboard support and conform with the Focus Navigation section above, it also adds the `tabindex` attribute to a wider set of elements.

This is not a formal document type and may be obsoleted by future formal XHTML DTDs that support WAI-ARIA.

The XHTML 1.1 plus WAI-ARIA DTD is available from <http://www.w3.org/WAI/ARIA/schemata/xhtml-aria-1.dtd>.

Documents written using this XHTML Family markup language can be validated using the above DTD. If a document author wants to facilitate such validation, they can include the following declaration at the top of their document:

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+ARIA 1.0//EN"
      "http://www.w3.org/WAI/ARIA/schemata/xhtml-aria-1.dtd">

However, note that when this DOCTYPE is present in a document, most user agents treat the document as generic XML rather than HTML. This causes them to be unable to support named character entities defined by the DTD (e.g., &copy;). Therefore, authors need to avoid use of named entities outside of the [predefined entities in XML](https://www.w3.org/TR/xml11/#sec-predefined-ent) (\[<a href="#bib-xml11" class="bibref">xml11</a>\], Section 4.6).

To avoid the above problem, authors can omit the above DOCTYPE statement. This causes user agents to treat the document as generic HTML with named character entity support as well as built-in ARIA support. However, it causes user agents to enter "quirks" mode which affects CSS rendering, and causes conformance checkers to fail the document due to the added ARIA attributes.

To avoid the issues of named character entity support and quirks mode, authors can instead use the following generic DOCTYPE declaration for HTML:

    <!DOCTYPE html>

However, this still does not guarantee that documents will be validated by conformance checkers.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">A.4 </span>SGML Open Catalog Entry for XHTML+ARIA<span class="permalink" typeof="bookmark">[<span property="title" content="A.4 SGML Open Catalog Entry for XHTML+ARIA">§</span>](#xhtml-aria_cat "Permalink for A.4 SGML Open Catalog Entry for XHTML+ARIA")</span></span>

This section contains the SGML Open Catalog-format definition \[<a href="#bib-SGML-CATALOG" class="bibref">SGML-CATALOG</a>\] of the public identifiers for XHTML+ARIA 1.0.

    -- .......................................................................... --
    -- File catalog  ............................................................ --

    --  XHTML+ARIA Catalog Data File

        Revision:  $Revision: 1.40 $

        See "Entity Management", SGML Open Technical Resolution 9401 for detailed
        information on supplying and using catalog data. This document is available
        from OASIS at URL:

            <http://www.oasis-open.org/html/tr9401.html>

    --

    -- .......................................................................... --
    -- SGML declaration associated with XHTML  .................................. --

    OVERRIDE YES

    SGMLDECL "xml1.dcl"

    -- :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: --

    -- XHTML+ARIA modules          .............................................. --


    PUBLIC "-//W3C//DTD XHTML+ARIA 1.0//EN" "xhtml-aria-1.dtd"


    PUBLIC "-//W3C//ENTITIES XHTML ARIA Attributes 1.0//EN" "aria-attributes-1.mod"

    -- End of catalog data  ..................................................... --
    -- .......................................................................... --

### <span property="xhv:role" resource="xhv:heading"><span class="secno">A.5 </span>WAI-ARIA Attributes XML Schema Module<span class="permalink" typeof="bookmark">[<span property="title" content="A.5 WAI-ARIA Attributes XML Schema Module">§</span>](#xhtml_schema_mod "Permalink for A.5 WAI-ARIA Attributes XML Schema Module")</span></span>

This module declares the WAI-ARIA <a href="#dfn-attribute" class="internalDFN">attributes</a> as an XML Schema module that can be included in a modularized schema. Note the WAI-ARIA attributes are in no namespace, and the attribute name begins with "aria-" to reduce the likelihood of collision with existing attributes.

This module is available from <http://www.w3.org/MarkUp/SCHEMA/aria-attributes-1.xsd>.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">A.6 </span>HTML 4.01 plus WAI-ARIA DTD<span class="permalink" typeof="bookmark">[<span property="title" content="A.6 HTML 4.01 plus WAI-ARIA DTD">§</span>](#html_dtd "Permalink for A.6 HTML 4.01 plus WAI-ARIA DTD")</span></span>

This standalone DTD adds WAI-ARIA <a href="#dfn-state" class="internalDFN">state</a> and <a href="#dfn-property" class="internalDFN">property</a> <a href="#dfn-attribute" class="internalDFN">attributes</a> to all <a href="#dfn-element" class="internalDFN">elements</a> in HTML 4.01, as well as a `role` attribute. In order to provide broader keyboard support, it also adds the `tabindex` attribute to a wider set of elements.

The DTD is based on the HTML 4.01 Transitional DTD, and includes all entity references needed to make it a standalone file. *This is not an official W3C DTD* and should be considered a derivative work of HTML 4.01.

Documents written using this markup language can be validated using the above DTD. If a document author wants to facilitate such validation, they can include the following declaration at the top of their document:

    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML+ARIA 1.0//EN"
        "http://www.w3.org/WAI/ARIA/schemata/html4-aria-1.dtd">

However, note that when this DOCTYPE is present in a document, most user agents treat the document as generic XML rather than HTML. This causes them to be unable to support named character entities defined by the DTD (e.g., &copy;). Therefore, authors need to avoid use of named entities outside of the [predefined entities in XML](https://www.w3.org/TR/xml/#sec-predefined-ent) (\[<a href="#bib-xml11" class="bibref">xml11</a>\], Section 4.6).

To avoid the above problem, authors can omit the above DOCTYPE statement. This causes user agents to treat the document as generic HTML with named character entity support as well as built-in ARIA support. However, it causes user agents to enter "quirks" mode which affects CSS rendering, and causes conformance checkers to fail the document due to the added ARIA attributes.

To avoid the issues of named character entity support and quirks mode, authors can instead use the following generic DOCTYPE declaration for HTML:

    <!DOCTYPE html>

However, this still does not guarantee that documents will be validated by conformance checkers.

The [HTML Working Group](http://www.w3.org/html/wg/) is incorporating WAI-ARIA into [HTML5](https://www.w3.org/TR/html5/). Official support for WAI-ARIA in HTML will be provided in that specification. This DTD is made available *only* as a bridging solution for applications requiring DTD validation but not using HTML 5.

This module is available from <http://www.w3.org/WAI/ARIA/schemata/html4-aria-1.dtd>.

<span property="xhv:role" resource="xhv:heading"><span class="secno">B. </span>Mapping WAI-ARIA Value types to languages<span class="permalink" typeof="bookmark">[<span property="title" content="B. Mapping WAI-ARIA Value types to languages">§</span>](#typemapping "Permalink for B. Mapping WAI-ARIA Value types to languages")</span></span>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is non-normative.*

Note

The HTML 5 column of the table below is advisory. Guidance on use of WAI-ARIA state and properties in HTML 5 is provided in [State and Property Attributes](https://www.w3.org/TR/html51/dom.html#state-and-property-attributes) (\[<a href="#bib-html51" class="bibref">html51</a>\], section 3.2.7.3.2).

Note

The suggested mappings for true/false values in HTML 5 use [Keyword and enumerated attributes](https://www.w3.org/TR/html5/infrastructure.html#keywords-and-enumerated-attributes) with allowed values of `true` and `false`, instead of using the HTML 5 boolean value type.

The table below provides recommended mappings between WAI-ARIA state and property types and attribute types from HTML 5, [XML Schema Datatypes](https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/) \[<a href="#bib-xmlschema-2" class="bibref">xmlschema-2</a>\], SVG, and SGML.

Languages not listed below might have appropriate value types defined in the language. If they do not, we recommend XML Schema Datatypes for general purpose XML languages. Documents using DTDs instead of schemas will not be able to validate automatically and require additional processing on WAI-ARIA attributes.

<table><thead><tr class="header"><th>WAI-ARIA type</th><th>HTML 5</th><th>XML Schema</th></tr></thead><tbody><tr class="odd"><td>true/false</td><td><a href="https://www.w3.org/TR/html5/infrastructure.html#keywords-and-enumerated-attributes">Keyword and enumerated attributes</a> with allowed values of "true" and "false"</td><td><a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#boolean">boolean</a></td></tr><tr class="even"><td>true/false/undefined</td><td><a href="https://www.w3.org/TR/html5/infrastructure.html#keywords-and-enumerated-attributes">Keyword and enumerated attributes</a> with allowed values of <code>true</code>, <code>false</code>, and <code>undefined</code></td><td><a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#NMTOKEN">NMTOKEN</a> with an <a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#NMTOKEN">enumeration constraint</a> allowing values of <code>true</code>, <code>false</code>, and <code>undefined</code></td></tr><tr class="odd"><td>tristate</td><td><a href="https://www.w3.org/TR/html5/infrastructure.html#keywords-and-enumerated-attributes">Keyword and enumerated attributes</a> with allowed values of "true", "false", and "mixed"</td><td><a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#NMTOKEN">NMTOKEN</a> with an <a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#NMTOKEN">enumeration constraint</a> allowing values of "true", "false", and "mixed"</td></tr><tr class="even"><td>number</td><td><a href="https://www.w3.org/TR/html5/infrastructure.html#floating-point-numbers">Floating-point numbers</a></td><td><a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#decimal">decimal</a></td></tr><tr class="odd"><td>integer</td><td><a href="https://www.w3.org/TR/html5/infrastructure.html#non-negative-integers">Non-negative integer</a></td><td><a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#integer">integer</a></td></tr><tr class="even"><td>token</td><td><a href="https://www.w3.org/TR/html5/infrastructure.html#keywords-and-enumerated-attributes">Keyword and enumerated attributes</a></td><td><a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#NMTOKEN">NMTOKEN</a> with an <a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#NMTOKEN">enumeration constraint</a> allowing values listed in the state or property definition</td></tr><tr class="odd"><td>token list</td><td><a href="https://www.w3.org/TR/html5/infrastructure.html#space-separated-tokens">Space-separated tokens</a></td><td><a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#NMTOKENS">NMTOKENS</a> with an <a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#NMTOKEN">enumeration constraint</a>allowing values listed in the state or property definition</td></tr><tr class="even"><td>ID reference</td><td>The value of a defined <a href="https://www.w3.org/TR/html5/dom.html#the-id-attribute">id attribute</a> on another element</td><td><a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#IDREF">IDREF</a></td></tr><tr class="odd"><td>ID reference list</td><td>The value of one or more defined <a href="https://www.w3.org/TR/html5/dom.html#the-id-attribute">id attributes</a> on other element(s), represented as <a href="https://www.w3.org/TR/html5/infrastructure.html#space-separated-tokens">Space-separated tokens</a></td><td><a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#IDREFS">IDREFS</a></td></tr><tr class="even"><td>string</td><td>No value constraints</td><td><a href="https://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#string">string</a></td></tr></tbody></table>

<span property="xhv:role" resource="xhv:heading"><span class="secno">C. </span>Change Log: substantive changes since the [WAI-ARIA 1.0 Recommendation](https://www.w3.org/TR/2014/REC-wai-aria-20140320/complete)<span class="permalink" typeof="bookmark">[<span property="title" content="C. Change Log: substantive changes since the WAI-ARIA 1.0 Recommendation">§</span>](#changelog "Permalink for C. Change Log: substantive changes since the WAI-ARIA 1.0 Recommendation")</span></span>
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   17-Sept-2013: Added first draft of `aria-describedat` after much group deliberation.
-   17-Sept-2013: Added [URI](#valuetype_uri) value type.
-   24-Apr-2014: <a href="#aria-orientation" class="property-reference"><code>aria-orientation</code></a> now defaults to undefined, and is allowed on more roles with implicit defaults defined per role.
-   19-May-2014: <a href="#radio" class="role-reference"><code>radio</code></a> no longer inherits from <a href="#option" class="role-reference"><code>option</code></a>, just from <a href="#checkbox" class="role-reference"><code>checkbox</code></a>. `radio` now adds <a href="#aria-posinset" class="property-reference"><code>aria-posinset</code></a> and <a href="#aria-setsize" class="property-reference"><code>aria-setsize</code></a>.
-   19-May-2014: Added `aria-posinset` and `aria-setsize` to <a href="#tab" class="role-reference"><code>tab</code></a>.
-   27-May-2014: Added placeholder for <a href="#none" class="role-reference"><code>none</code></a> role.
-   03-Aug-2014: Moved <a href="#aria-selected" class="state-reference"><code>aria-selected</code></a> from "supported" to "required" attribute list for `option` role.
-   05-Aug-2014: Changed <a href="#rowgroup" class="role-reference"><code>rowgroup</code></a> to subclass <a href="#structure" class="role-reference"><code>structure</code></a> instead of <a href="#group" class="role-reference"><code>group</code></a>.
-   10-Nov-2014: Added <a href="#aria-modal" class="property-reference"><code>aria-modal</code></a> attribute.
-   10-Nov-2014: Added `text` role.
-   9-Dec-2014: Removed legacy author requirements from aria-hidden that were once relevant to DOM-based screen readers.
-   14-Jan-2015: Added <a href="#searchbox" class="role-reference"><code>searchbox</code></a> role.
-   15-Jan-2015: Added <a href="#switch" class="role-reference"><code>switch</code></a> role.
-   22-Jan-2015: Added <a href="#aria-current" class="state-reference"><code>aria-current</code></a> attribute.
-   29-Jan-2015: Made <a href="#region" class="role-reference"><code>region</code></a> a type of <a href="#landmark" class="role-reference"><code>landmark</code></a>. Add requirement that authors *MUST* give a `region` a brief label that describes the purpose of the content it contains. Remove the <a href="#dfn-accessible-name" class="internalDFN">accessible name</a> property from the <a href="#section" class="role-reference"><code>section</code></a> role. Change the superclass role from `region` to `section` for the following roles: <a href="#alert" class="role-reference"><code>alert</code></a>, <a href="#grid" class="role-reference"><code>grid</code></a>, `landmark`, <a href="#list" class="role-reference"><code>list</code></a>, <a href="#log" class="role-reference"><code>log</code></a>, <a href="#status" class="role-reference"><code>status</code></a>, and <a href="#tabpanel" class="role-reference"><code>tabpanel</code></a>. Remove `region` as a superclass role of <a href="#article" class="role-reference"><code>article</code></a>, making <a href="#document" class="role-reference"><code>document</code></a> the only superclass role of `article`.
-   09-Apr-2015: Added <a href="#aria-placeholder" class="property-reference"><code>aria-placeholder</code></a> attribute.
-   23-Apr-2015: Added <a href="#aria-colcount" class="property-reference"><code>aria-colcount</code></a>, <a href="#aria-rowcount" class="property-reference"><code>aria-rowcount</code></a>, <a href="#aria-colindex" class="property-reference"><code>aria-colindex</code></a>, <a href="#aria-rowindex" class="property-reference"><code>aria-rowindex</code></a>, <a href="#aria-colspan" class="property-reference"><code>aria-colspan</code></a>, and <a href="#aria-rowspan" class="property-reference"><code>aria-rowspan</code></a>.
-   05-Jun-2015: Added <a href="#cell" class="role-reference"><code>cell</code></a> and <a href="#table" class="role-reference"><code>table</code></a> roles for non-interactive tables. Made <a href="#gridcell" class="role-reference"><code>gridcell</code></a> and `grid` subclasses of `cell` and `table` respectively. Removed <a href="#widget" class="role-reference"><code>widget</code></a> as one of the immediate superclasses of <a href="#columnheader" class="role-reference"><code>columnheader</code></a> and <a href="#rowheader" class="role-reference"><code>rowheader</code></a>. Headers that subclass `gridcell` will still inherit the supported properties of `widget`.
-   12-Jun-2015: Added `aria-kbdshortcuts`. Note that his has subsequently been replaced by <a href="#aria-keyshortcuts" class="property-reference"><code>aria-keyshortcuts</code></a>.
-   23-Jun-2015: Added <a href="#aria-roledescription" class="property-reference"><code>aria-roledescription</code></a> attribute.
-   03-Jul-2015: Added <a href="#aria-readonly" class="property-reference"><code>aria-readonly</code></a> as a supported property of `checkbox`, <a href="#menuitemcheckbox" class="role-reference"><code>menuitemcheckbox</code></a>, <a href="#menuitemradio" class="role-reference"><code>menuitemradio</code></a>, and `switch`. Because this property should not apply to `radio`, `radio` was made a subclass of <a href="#input" class="role-reference"><code>input</code></a>.
-   03-Jul-2015: Expanded explanation of "supported" vs. "required" states and properties. Added implicit default values of <a href="#aria-valuemin" class="property-reference"><code>aria-valuemin</code></a>, <a href="#aria-valuemax" class="property-reference"><code>aria-valuemax</code></a>, and <a href="#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a> when they are required for roles <a href="#scrollbar" class="role-reference"><code>scrollbar</code></a>, <a href="#slider" class="role-reference"><code>slider</code></a>, and <a href="#spinbutton" class="role-reference"><code>spinbutton</code></a>.
-   03-Jul-2015: Made <a href="#aria-level" class="property-reference"><code>aria-level</code></a> a required attribute for <a href="#heading" class="role-reference"><code>heading</code></a> with an implicit value of 2.
-   08-Jul-2015: Added `aria-readonly` as a supported property of: <a href="#combobox" class="role-reference"><code>combobox</code></a>, <a href="#listbox" class="role-reference"><code>listbox</code></a>, <a href="#radiogroup" class="role-reference"><code>radiogroup</code></a>, `slider`, and `spinbutton`.
-   23-Jul-2015: Added <a href="#aria-errormessage" class="property-reference"><code>aria-errormessage</code></a> attribute.
-   31-Jul-2015: Added `-1` as a valid value for `aria-setsize` as a means to indicate that the set size is unknown and should not be calculated by user agents.
-   31-Jul-2015: Added <a href="#term" class="role-reference"><code>term</code></a> role.
-   27-Aug-2015: Added statement that `aria-readonly` and <a href="#aria-required" class="property-reference"><code>aria-required</code></a> *SHOULD NOT* be used or exposed on `columnheader` or `rowheader` when those headers descend from a non-interactive `table`.
-   15-Oct-2015: Added <a href="#figure" class="role-reference"><code>figure</code></a> role.
-   12-Nov-2015: Added <a href="#feed" class="role-reference"><code>feed</code></a> role; made `aria-posinset` and `aria-setsize` supported properties of `article`; changed <a href="#aria-busy" class="state-reference"><code>aria-busy</code></a> so that it could be applied to all elements rather than limited to <a href="#dfn-live-region" class="internalDFN">live regions</a>; added normative requirement that authors *MUST* set `aria-busy` to `true` if changes to a rendered `widget` would result in that `widget` missing required owned elements during the update process.
-   12-Nov-2015: Changed the superclass of <a href="#application" class="role-reference"><code>application</code></a> from `landmark` to `structure`; removed the accessible name requirement from `document`.
-   28-Jan-2016: Removed `list` as a superclass of <a href="#menu" class="role-reference"><code>menu</code></a> and `listbox`, making it a related concept of each. Removed <a href="#directory" class="role-reference"><code>directory</code></a> as a superclass of <a href="#tablist" class="role-reference"><code>tablist</code></a>.
-   28-Jan-2016: Removed `input` as a superclass of `scrollbar` and <a href="#select" class="role-reference"><code>select</code></a>.
-   04-Feb-2016: Marked <a href="#aria-grabbed" class="state-reference"><code>aria-grabbed</code></a> and <a href="#aria-dropeffect" class="property-reference"><code>aria-dropeffect</code></a> as planned for deprecation.
-   04-Feb-2016: Removed the implicit value for `aria-orientation` on `combobox`.
-   25-Feb-2016: Added <a href="#aria-details" class="property-reference"><code>aria-details</code></a> attribute.
-   25-Feb-2016: Removed `aria-describedat` which has been made obsolete by `aria-details`.
-   29-Feb-2016: Added statement that authors *MUST* ensure `aria-errormessage` content is not hidden and is included in a container that exposes the content to the user.
-   10-Mar-2016: Updated text regarding implicit values for `spinbutton`: Default for `aria-valuenow` is `0`. There is no minimum value for `aria-valuemin` and no maximum value for `aria-valuemax`.
-   23-Jun-2016: Remove children-presentational `true` from `spinbutton`; make `spinbutton` a subclass of <a href="#composite" class="role-reference"><code>composite</code></a>.
-   24-Jun-2016: Add `widget` as a (possible) superclass of <a href="#separator" class="role-reference"><code>separator</code></a>. Add `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, and <a href="#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a> as supported properties of `separator`.
-   30-Jun-2016: Remove children-presentational `true` from <a href="#menuitem" class="role-reference"><code>menuitem</code></a> and <a href="#treeitem" class="role-reference"><code>treeitem</code></a>.
-   07-Jul-2016: Remove `password`. The ARIA Working Group agreed to [move the password role to ARIA 2.0](https://lists.w3.org/Archives/Public/public-aria-admin/2016Jun/0068.html). Note that the content is currently only commented out until we branch for ARIA 1.1.
-   07-Jul-2016: Make `aria-valuenow` a required property, and remove <a href="#aria-expanded" class="state-reference"><code>aria-expanded</code></a> as a supported state, of focusable `separator` elements.
-   15-Jul-2016: Explicitly prohibit use of empty and whitespace-only values for `aria-roledescription`. Add several normative requirements for authors, user agents, and assistive technologies.
-   11-Aug-2016: Change author requirement in `aria-details` regarding exposure of content from a *MUST* to a *SHOULD*.
-   28-Apr-2016: Added `aria-keyshortcuts` (as a replacement for the `aria-kbdshortcuts` which was introduced on 12-Jun-2015.
-   02-May-2016: Added `password` role.
-   05-May-2016: Changed the value type of <a href="#aria-haspopup" class="property-reference"><code>aria-haspopup</code></a> from boolean to token. Supported values are: `true`, `false`, `menu`, `listbox`, `tree`, `grid`, and `dialog`.
-   05-May-2016: Expanded the roles which can be owned by a `combobox` to include <a href="#tree" class="role-reference"><code>tree</code></a>, `grid`, and <a href="#dialog" class="role-reference"><code>dialog</code></a>. In addition, the implicit value for `aria-haspopup` for role `combobox` was changed from `true` to `listbox`.
-   12-May-2016: Added normative statement that user agents *MUST NOT* declare strong native semantics that prevent the use of: <a href="#aria-describedby" class="property-reference"><code>aria-describedby</code></a>, <a href="#aria-label" class="property-reference"><code>aria-label</code></a>, <a href="#aria-labelledby" class="property-reference"><code>aria-labelledby</code></a>.
-   19-May-2016: Added `aria-posinset` and `aria-setsize` as supported properties of `menuitem`.
-   19-May-2016: Added <a href="#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a> as a supported property of `application`.
-   27-May-2016: Remove `text`. The ARIA Working Group agreed to [move the text role to ARIA 2.0](https://lists.w3.org/Archives/Public/public-aria-admin/2016Apr/0030.html). Note that the content is currently only commented out until we branch for ARIA 1.1.
-   02-Jun-2016: Add children-presentational `true` to `checkbox`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `spinbutton`, `switch`, `tab`, and `treeitem`. (N.B. See subsequent items as some of this is being undone as the result of further discussions within the working group.)

<span property="xhv:role" resource="xhv:heading"><span class="secno">D. </span>Acknowledgments<span class="permalink" typeof="bookmark">[<span property="title" content="D. Acknowledgments">§</span>](#acknowledgements "Permalink for D. Acknowledgments")</span></span>
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is non-normative.*

The following people contributed to the development of this document.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">D.1 </span>Participants active in the ARIA WG at the time of publication<span class="permalink" typeof="bookmark">[<span property="title" content="D.1 Participants active in the ARIA WG at the time of publication">§</span>](#ack_group "Permalink for D.1 Participants active in the ARIA WG at the time of publication")</span></span>

-   Ann Abbott (IBM Corporation)
-   Irfan Ali (Educational Testing Service)
-   Amelia Bellamy-Royds (Invited Expert)
-   Michiel Bijl (Invited Expert)
-   Christy Blew (University of Illinois at Urbana-Champaign)
-   David Bolter (Mozilla Foundation)
-   Bogdan Brinza (Microsoft Corporation)
-   Michael Cooper (W3C/MIT)
-   James Craig (Apple Inc.)
-   Joanmarie Diggs (Igalia)
-   Steve Faulkner (The Paciello Group, LLC)
-   John Foliot (Deque Systems, Inc.)
-   Bryan Garaventa (SSB BART Group)
-   Matt Garrish (DAISY Consortium)
-   Jon Gunderson (University of Illinois at Urbana-Champaign)
-   Markus Gylling (DAISY Consortium)
-   Markku Hakkinen (Educational Testing Service)
-   Matthew King (Facebook)
-   JaEun Jemma Ku (University of Illinois at Urbana-Champaign)
-   Dominic Mazzoni (Google, Inc.)
-   Shane McCarron (Invited Expert, Aptest)
-   James Nurthen (Oracle Corporation)
-   Ian Pouncey (The Paciello Group, LLC)
-   Janina Sajka (Invited Expert, The Linux Foundation)
-   Joseph Scheuhammer (Invited Expert, Inclusive Design Research Centre, OCAD University)
-   Stefan Schnabel (SAP SE)
-   Richard Schwerdtfeger (Knowbility)
-   Lisa Seeman-Kestenbaum (Invited Expert)
-   Tzviya Siegman (Wiley)
-   Alexander Surkov (Mozilla Foundation)
-   Job van Achterberg (Invited Expert)
-   Léonie Watson (The Paciello Group, LLC)
-   Evan Yamanishi (W. W. Norton)
-   Jason White (Educational Testing Service)

### <span property="xhv:role" resource="xhv:heading"><span class="secno">D.2 </span>Other ARIA contributors, commenters, and previously active participants<span class="permalink" typeof="bookmark">[<span property="title" content="D.2 Other ARIA contributors, commenters, and previously active participants">§</span>](#ack_others "Permalink for D.2 Other ARIA contributors, commenters, and previously active participants")</span></span>

-   Shadi Abou-Zahra (W3C)
-   Jim Allan (TSB)
-   Jonny Axelsson (Opera Software)
-   David Baron (Mozilla Foundation)
-   Art Barstow (Nokia Corporation)
-   Simon Bates
-   Chris Blouch (AOL)
-   Judy Brewer (W3C/MIT)
-   Mark Birbeck (Sidewinder Labs)
-   Sally Cain (Royal National Institute of Blind People (RNIB))
-   Gerardo Capiel (Benetech)
-   Ben Caldwell (Trace)
-   Sofia Celic-Li
-   Jaesik Chang (Samsung Electronics Co., Ltd.)
-   Alex Qiang Chen (University of Manchester)
-   Charles Chen (Google, Inc.)
-   Christian Cohrs
-   Deborah Dahl
-   Erik Dahlström (Opera Software)
-   Dimitar Denev (Frauenhofer Gesellschaft)
-   Micah Dubinko (Invited Expert)
-   Mandana Eibegger
-   Beth Epperson (Websense)
-   Fred Esch (IBM Corporation)
-   Donald Evans (AOL)
-   Chris Fleizach (Apple Inc.)
-   Kelly Ford (Microsoft Corporation)
-   Geoff Freed (Invited Expert, NCAM)
-   Christopher Gallelo (Microsoft Corporation)
-   Billy Gregory (The Paciello Group, LLC)
-   Karl Groves (The Paciello Group, LLC)
-   Birkir Gunnarsson (Deque Systems, Inc.)
-   Kentarou Fukuda (IBM Corporation)
-   Bryan Garaventa
-   Guido Geloso
-   Ali Ghassemi
-   Becky Gibson (IBM)
-   Alfred S. Gilman
-   Andres Gonzalez (Adobe Systems Inc.)
-   Scott González (JQuery Foundation)
-   James Graham
-   Georgios Grigoriadis (SAP AG)
-   Jeff Grimes (Oracle)
-   Loretta Guarino Reid (Google, Inc.)
-   Katie Haritos-Shea (Knowbility)
-   Barbara Hartel
-   James Hawkins (Google, Inc.)
-   Benjamin Hawkes-Lewis
-   Sean Hayes (Microsoft Corporation)
-   Mona Heath (University of Illinois at Urbana-Champaign)
-   Jan Heck
-   Shawn Henry
-   Tina Homboe
-   Nicholas Hoyt
-   John Hrvatin (Microsoft Corporation)
-   Takahiro Inada
-   Masayasu Ishikawa (W3C)
-   Jim Jewitt
-   Kenny Johar (Microsoft Corporation)
-   Shilpi Kapoor (BarrierBreak Technologies)
-   Masahiko Kaneko (Microsoft Corporation)
-   Marjolein Katsma
-   Susann Keohane (IBM Corporation)
-   George Kerscher (International Digital Publishing Forum)
-   Jason Kiss (Department of Internal Affairs, New Zealand Government)
-   Todd Kloots
-   Jamie Knight (British Broadcasting Corporation)
-   Johannes Koch
-   Gerard K. Cohen
-   Sam Kuper
-   Earl Johnson (Sun)
-   Jael Kurz
-   Rajesh Lal (Nokia Corporation)
-   Diego La Monica (International Webmasters Association / HTML Writers Guild (IWA-HWG))
-   Aaron Leventhal (IBM Corporation)
-   Gez Lemon (International Webmasters Association / HTML Writers Guild (IWA-HWG))
-   Alex Li (SAP)
-   Chris Lilley
-   Thomas Logan (HiSoftware Inc.)
-   Brian Loh
-   William Loughborough (Invited Expert)
-   Linda Mao (Microsoft)
-   David MacDonald (Invited Expert, CanAdapt Solutions Inc.)
-   Carolyn MacLeod
-   Anders Markussen (Opera Software)
-   Krzysztof Maczyński
-   Matthew May (Adobe Systems Inc.)
-   Mark McCarthy
-   Charles McCathie Nevile (Yandex)
-   Mary Jo Mueller (IBM Corporation)
-   Alexandre Morgaut (4D)
-   Ann Navarro (Invited Expert)
-   Joshue O Connor (Invited Expert, CFIT)
-   Artur Ortega (Microsoft Corporation)
-   Sailesh Panchang (Deque)
-   Lisa Pappas (Society for Technical Communication (STC))
-   Marta Pawlowlska (Samsung Electronics Co., Ltd.)
-   Dave Pawson (RNIB)
-   Steven Pemberton (CWI Amsterdam)
-   Simon Pieters (Opera Software)
-   Jean-Bernard Piot (4D)
-   David Poehlman, Simon Pieters (Opera Software)
-   Sarah Pulis (Media Access Australia)
-   T.V. Raman (Google, Inc.)
-   Jan Richards
-   Gregory Rosmaita (Invited Expert)
-   Tony Ross (Microsoft Corporation)
-   Alex Russell (Dojo Foundation) (
-   Mark Sadecki (Invited Expert)
-   Mario Sánchez Prada (Samsung Electronics Co., Ltd. and Gnome Foundation)
-   Martin Schaus (SAP AG)
-   Doug Schepers (W3C)
-   Cynthia Shelly (Microsoft Corporation)
-   Matthias Schmitt
-   Marc Silbey (Microsoft Corporation)
-   Leif Halvard Sili
-   Henri Sivonen (Mozilla)
-   Michael Smith (W3C)
-   Andi Snow-Weaver (IBM Corporation)
-   Ville Skyttä
-   Henny Swan (BBC)
-   Neil Soiffer (Design Science)
-   Vitaly Sourikov
-   Mike Squillace (IBM)
-   Maciej Stachowiak (Apple Inc.)
-   Christophe Strobbe
-   Suzanne Taylor (Pearson plc)
-   Terrill Thompson
-   David Todd
-   Gregg Vanderheiden (Invited Expert, Trace)
-   Anne van Kesteren
-   Wen He (Tencent)
-   Wu Wei (W3C / RITT)
-   Ryan Williams (Oracle)
-   Tom Wlodkowski
-   Sam White (Apple Inc.)
-   Marco Zehe (Mozilla Foundation)
-   Gottfried Zimmermann (Invited Expert, Access Technologies Group)

### <span property="xhv:role" resource="xhv:heading"><span class="secno">D.3 </span>Enabling funders<span class="permalink" typeof="bookmark">[<span property="title" content="D.3 Enabling funders">§</span>](#ack_funders "Permalink for D.3 Enabling funders")</span></span>

This publication has been funded in part with U.S. Federal funds from the Department of Education, National Institute on Disability, Independent Living, and Rehabilitation Research (NIDILRR), initially under contract number ED-OSE-10-C-0067 and currently under contract number HHSP23301500054C. The content of this publication does not necessarily reflect the views or policies of the U.S. Department of Education, nor does mention of trade names, commercial products, or organizations imply endorsement by the U.S. Government.

<span property="xhv:role" resource="xhv:heading"><span class="secno">E. </span>References<span class="permalink" typeof="bookmark">[<span property="title" content="E. References">§</span>](#references "Permalink for E. References")</span></span>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### <span property="xhv:role" resource="xhv:heading"><span class="secno">E.1 </span>Normative references<span class="permalink" typeof="bookmark">[<span property="title" content="E.1 Normative references">§</span>](#normative-references "Permalink for E.1 Normative references")</span></span>

\[RFC2119\]  
[Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). S. Bradner. IETF. March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

\[uievents-key\]  
[UI Events KeyboardEvent key Values](https://www.w3.org/TR/uievents-key/). Gary Kacmarcik; Travis Leithead. W3C. 1 June 2017. W3C Candidate Recommendation. URL: <https://www.w3.org/TR/uievents-key/>

### <span property="xhv:role" resource="xhv:heading"><span class="secno">E.2 </span>Informative references<span class="permalink" typeof="bookmark">[<span property="title" content="E.2 Informative references">§</span>](#informative-references "Permalink for E.2 Informative references")</span></span>

\[accname-aam-1.1\]  
[Accessible Name and Description: Computation and API Mappings 1.1](https://www.w3.org/TR/accname-aam-1.1/). Joseph Scheuhammer; James Craig; Andi Snow-Weaver; Aaron Leventhal. W3C. 17 March 2016. W3C Working Draft. URL: <https://www.w3.org/TR/accname-aam-1.1/>

\[AT-SPI\]  
[Assistive Technology Service Provider Interface](https://developer.gnome.org/libatspi/stable/). The GNOME Project. URL: <https://developer.gnome.org/libatspi/stable/>

\[ATK\]  
[ATK - Accessibility Toolkit](https://developer.gnome.org/atk/stable/). The GNOME Project. URL: <https://developer.gnome.org/atk/stable/>

\[AXAPI\]  
[The NSAccessibility Protocol for macOS](https://developer.apple.com/documentation/appkit/nsaccessibility). Apple, Inc. URL: <https://developer.apple.com/documentation/appkit/nsaccessibility>

\[core-aam-1.1\]  
[Core Accessibility API Mappings 1.1](https://www.w3.org/TR/core-aam-1.1/). Joanmarie Diggs; Joseph Scheuhammer; Richard Schwerdtfeger; Michael Cooper; Andi Snow-Weaver; Aaron Leventhal. W3C. 14 December 2017. W3C Recommendation. URL: <https://www.w3.org/TR/core-aam-1.1/>

\[css3-selectors\]  
[Selectors Level 3](https://www.w3.org/TR/css3-selectors/). Tantek Çelik; Elika Etemad; Daniel Glazman; Ian Hickson; Peter Linss; John Williams et al. W3C. 29 September 2011. W3C Recommendation. URL: <https://www.w3.org/TR/css3-selectors/>

\[dom\]  
[DOM Standard](https://dom.spec.whatwg.org/). Anne van Kesteren. WHATWG. Living Standard. URL: <https://dom.spec.whatwg.org/>

\[html5\]  
[HTML5](https://www.w3.org/TR/html5/). Ian Hickson; Robin Berjon; Steve Faulkner; Travis Leithead; Erika Doyle Navara; Theresa O'Connor; Silvia Pfeiffer. W3C. 28 October 2014. W3C Recommendation. URL: <https://www.w3.org/TR/html5/>

\[html51\]  
[HTML 5.1 2nd Edition](https://www.w3.org/TR/html51/). Steve Faulkner; Arron Eicholz; Travis Leithead; Alex Danilo. W3C. 3 October 2017. W3C Recommendation. URL: <https://www.w3.org/TR/html51/>

\[IAccessible2\]  
[IAccessible2](https://www.linuxfoundation.org/collaborate/workgroups/accessibility/iaccessible2). Linux Foundation. URL: <https://www.linuxfoundation.org/collaborate/workgroups/accessibility/iaccessible2>

\[MathML3\]  
[Mathematical Markup Language (MathML) Version 3.0 2nd Edition](https://www.w3.org/TR/MathML3/). David Carlisle; Patrick D F Ion; Robert R Miner. W3C. 10 April 2014. W3C Recommendation. URL: <https://www.w3.org/TR/MathML3/>

\[MSAA\]  
[Microsoft Active Accessibility (MSAA) 2.0](https://msdn.microsoft.com/en-us/library/ms697707.aspx). Microsoft Corporation. URL: <https://msdn.microsoft.com/en-us/library/ms697707.aspx>

\[owl-features\]  
[OWL Web Ontology Language Overview](https://www.w3.org/TR/owl-features/). Deborah McGuinness; Frank van Harmelen. W3C. 10 February 2004. W3C Recommendation. URL: <https://www.w3.org/TR/owl-features/>

\[rdf-concepts\]  
[Resource Description Framework (RDF): Concepts and Abstract Syntax](https://www.w3.org/TR/rdf-concepts/). Graham Klyne; Jeremy Carroll. W3C. 10 February 2004. W3C Recommendation. URL: <https://www.w3.org/TR/rdf-concepts/>

\[rdf-schema\]  
[RDF Schema 1.1](https://www.w3.org/TR/rdf-schema/). Dan Brickley; Ramanathan Guha. W3C. 25 February 2014. W3C Recommendation. URL: <https://www.w3.org/TR/rdf-schema/>

\[RFC3986\]  
[Uniform Resource Identifier (URI): Generic Syntax](https://tools.ietf.org/html/rfc3986). T. Berners-Lee; R. Fielding; L. Masinter. IETF. January 2005. Internet Standard. URL: <https://tools.ietf.org/html/rfc3986>

\[role-attribute\]  
[Role Attribute 1.0](https://www.w3.org/TR/role-attribute/). Shane McCarron et al. W3C. 28 March 2013. W3C Recommendation. URL: <https://www.w3.org/TR/role-attribute/>

\[SGML-CATALOG\]  
[Entity Management: OASIS Technical Resolution 9401:1997 (Amendment 2 to TR 9401)](https://www.oasis-open.org/specs/tr9401.html). Paul Grosso. Entity Management Subcommittee, SGML Open. 10 September 2007. URL: <https://www.oasis-open.org/specs/tr9401.html>

\[SMIL3\]  
[Synchronized Multimedia Integration Language (SMIL 3.0)](https://www.w3.org/TR/SMIL3/). Dick Bulterman. W3C. 1 December 2008. W3C Recommendation. URL: <https://www.w3.org/TR/SMIL3/>

\[SVG2\]  
[Scalable Vector Graphics (SVG) 2](http://www.w3.org/TR/2015/WD-SVG2-20150915/). Nikos Andronikos; Rossen Atanassov; Tavmjong Bah; Amelia Bellamy-Royds; Brian Birtles; Cyril Concolato; Erik Dahlström; Chris Lilley; Cameron McCormack; Doug Schepers; Dirk Schulze; Richard Schwerdtfeger; Satoru Takagi; Jonathan Watt et al. W3C. W3C Working Draft. URL: <http://www.w3.org/TR/2015/WD-SVG2-20150915/>

\[UAAG10\]  
[User Agent Accessibility Guidelines 1.0](https://www.w3.org/TR/UAAG10/). Ian Jacobs; Jon Gunderson; Eric Hansen. W3C. 17 December 2002. W3C Recommendation. URL: <https://www.w3.org/TR/UAAG10/>

\[UI-AUTOMATION\]  
[UI Automation](https://msdn.microsoft.com/en-us/library/ee684009%28v=vs.85%29.aspx). Microsoft Corporation. URL: <https://msdn.microsoft.com/en-us/library/ee684009%28v=vs.85%29.aspx>

\[UIA-EXPRESS\]  
[The IAccessibleEx Interface](https://msdn.microsoft.com/en-us/library/windows/desktop/dd561898%28v=vs.85%29.aspx). Microsoft Corporation. URL: <https://msdn.microsoft.com/en-us/library/windows/desktop/dd561898%28v=vs.85%29.aspx>

\[wai-aria-1.0\]  
[Accessible Rich Internet Applications (WAI-ARIA) 1.0](https://www.w3.org/TR/wai-aria/). James Craig; Michael Cooper et al. W3C. 20 March 2014. W3C Recommendation. URL: <https://www.w3.org/TR/wai-aria/>

\[wai-aria-practices-1.1\]  
[WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/). Matthew King; James Nurthen; Michiel Bijl; Michael Cooper; Joseph Scheuhammer; Lisa Pappas; Richard Schwerdtfeger. W3C. 14 December 2017. W3C Note. URL: <https://www.w3.org/TR/wai-aria-practices-1.1/>

\[WCAG20\]  
[Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/). Ben Caldwell; Michael Cooper; Loretta Guarino Reid; Gregg Vanderheiden et al. W3C. 11 December 2008. W3C Recommendation. URL: <https://www.w3.org/TR/WCAG20/>

\[XFORMS10\]  
[XForms 1.0 (Third Edition)](https://www.w3.org/TR/xforms/). John Boyer. W3C. 29 October 2007. W3C Recommendation. URL: <https://www.w3.org/TR/xforms/>

\[XFORMS11\]  
[XForms 1.1](https://www.w3.org/TR/xforms11/). John Boyer. W3C. 20 October 2009. W3C Recommendation. URL: <https://www.w3.org/TR/xforms11/>

\[xhtml11\]  
[XHTML™ 1.1 - Module-based XHTML - Second Edition](https://www.w3.org/TR/xhtml11/). Shane McCarron; Masayasu Ishikawa. W3C. 23 November 2010. W3C Recommendation. URL: <https://www.w3.org/TR/xhtml11/>

\[xml-names\]  
[Namespaces in XML 1.0 (Third Edition)](https://www.w3.org/TR/xml-names/). Tim Bray; Dave Hollander; Andrew Layman; Richard Tobin; Henry Thompson et al. W3C. 8 December 2009. W3C Recommendation. URL: <https://www.w3.org/TR/xml-names/>

\[xml11\]  
[Extensible Markup Language (XML) 1.1 (Second Edition)](https://www.w3.org/TR/xml11/). Tim Bray; Jean Paoli; Michael Sperberg-McQueen; Eve Maler; François Yergeau; John Cowan et al. W3C. 16 August 2006. W3C Recommendation. URL: <https://www.w3.org/TR/xml11/>

\[xmlschema-2\]  
[XML Schema Part 2: Datatypes Second Edition](https://www.w3.org/TR/xmlschema-2/). Paul V. Biron; Ashok Malhotra. W3C. 28 October 2004. W3C Recommendation. URL: <https://www.w3.org/TR/xmlschema-2/>

[↑](#toc)
