\[[Table of Contents](#contents)\]  |  \[[Implementing ATAG 2.0](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/)\]

[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

<span id="title"></span>Authoring Tool Accessibility Guidelines (ATAG) 2.0
==========================================================================

<span id="w3c-doctype"></span>W3C Recommendation 24 September 2015
------------------------------------------------------------------

This version:  
<http://www.w3.org/TR/2015/REC-ATAG20-20150924/>

Latest version:  
<http://www.w3.org/TR/ATAG20/>

Previous version:  
<http://www.w3.org/TR/2015/PR-ATAG20-20150721/>

Editors:  
Jan Richards, Inclusive Design Institute, OCAD University

Jeanne Spellman, W3C

Jutta Treviranus, Inclusive Design Institute, OCAD University

Please refer to the [**errata**](http://www.w3.org/WAI/AU/errata/) for this document for any errors or issues reported since publication.

See also [**translations**](http://www.w3.org/2003/03/Translations/byTechnology?technology=ATAG20).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2015 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span id="abstract">Abstract</span>
-----------------------------------

The Authoring Tool Accessibility Guidelines (ATAG) 2.0 provides guidelines for designing web content authoring tools that are both more accessible to authors with disabilities (Part A) and designed to enable, support, and promote the production of more accessible web content by all authors (Part B). See [Authoring Tool Accessibility Guidelines (ATAG) Overview](http://www.w3.org/WAI/intro/atag.php) for an introduction and links to ATAG technical and educational material.

<span id="status">Status of This Document</span>
------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

### <span id="status-status"></span>W3C Recommendation of ATAG 2.0

This is the Authoring Tool Accessibility Guidelines (ATAG) 2.0 [W3C Recommendation](http://www.w3.org/2004/02/Process-20040205/tr.html#RecsW3C) of 24 September 2015 from the [Authoring Tool Accessibility Guidelines Working Group](http://www.w3.org/WAI/AU/). The Working Group created an [implementation report](http://www.w3.org/WAI/AU/CR20/ImplementationReport) that shows the [exit criteria](http://www.w3.org/TR/2015/CR-ATAG20-20150604/#exit) have been met. The Director approved transition to Recommendation after reviewing this report and after Advisory Committee vote which supported publication. There are no changes to the text of ATAG 2.0. There have been minor edits to the code to fix spacing and to remove superfluous or commented HTML.

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

ATAG 2.0 is supported by the associated non-normative document, [Implementing ATAG 2.0](http://www.w3.org/TR/IMPLEMENTING-ATAG20/)[](http://www.w3.org/TR/WCAG20-TECHS/). Although this document does not have the formal status that ATAG 2.0 itself has, it provides information important to understanding and implementing ATAG 2.0.

The Working Group requests that any comments sent to <public-atag2-comments@w3.org>. The [archives for the public comments list](http://lists.w3.org/Archives/Public/public-atag2-comments/) are publicly available. Comments received on the ATAG 2.0 Recommendation cannot result in changes to this version of the guidelines, but may be addressed in errata or future versions of ATAG. The Working Group does not plan to make formal responses to comments. Archives of the [ATAG WG mailing list discussions](https://lists.w3.org/Archives/Public/w3c-wai-au/) are publicly available, and future work undertaken by the Working Group or subsequent group may address comments received on this document.

### <span id="status-wai"></span>Web Accessibility Initiative

This document has been produced as part of the W3C [Web Accessibility Initiative](http://www.w3.org/WAI/) (WAI). The goals of the AUWG are discussed in the [Working Group charter](http://www.w3.org/WAI/AU/2010/auwg_charter.html).

### <span id="status-patents"></span>Patents

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/). W3C maintains a [public list of any patent disclosures](http://www.w3.org/2004/01/pp-impl/35520/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

This document is governed by the <a href="http://www.w3.org/2015/Process-20150901/" id="w3c_process_revision">1 September 2015 W3C Process Document</a>.

------------------------------------------------------------------------

<span id="contents"></span>Table of Contents
--------------------------------------------

-   [Abstract](#abstract)
-   [Status of This Document](#status)
-   [Introduction](#intro)
    -   [ATAG 2.0 Layers of Guidance](#intro-organization)
    -   [Levels of Conformance](#intro_understand_levels_conformance)
    -   [Integration of Accessibility Features](#intro-integrate_acc_features)
-   [ATAG 2.0 Guidelines](#guidelines)
    -   [A. Make the authoring tool user interface accessible](#part_a)
        -   [A.1. Authoring tool user interfaces follow applicable accessibility guidelines](#principle_a1)
            -   [A.1.1. (For the authoring tool user interface) Ensure that web-based functionality is accessible](#gl_a11)
            -   [A.1.2. (For the authoring tool user interface) Ensure that non-web-based functionality is accessible](#gl_a12)
        -   [A.2. Editing-views are perceivable](#principle_a2)
            -   [A.2.1. (For the authoring tool user interface) Make alternative content available to authors](#gl_a21)
            -   [A.2.2. (For the authoring tool user interface) Ensure that editing-view presentation can be programmatically determined](#gl_a22)
        -   [A.3. Editing-views are operable](#principle_a3)
            -   [A.3.1. (For the authoring tool user interface) Provide keyboard access to authoring features](#gl_a31)
            -   [A.3.2. (For the authoring tool user interface) Provide authors with enough time](#gl_a32)
            -   [A.3.3. (For the authoring tool user interface) Help authors avoid flashing that could cause seizures](#gl_a33)
            -   [A.3.4. (For the authoring tool user interface) Enhance navigation and editing via content structure](#gl_a34)
            -   [A.3.5. (For the authoring tool user interface) Provide text search of the content](#gl_a35)
            -   [A.3.6. (For the authoring tool user interface) Manage preference settings](#gl_a36)
            -   [A.3.7. (For the authoring tool user interface) Ensure that previews are at least as accessible as in-market user agents](#gl_a37)
        -   [A.4. Editing-views are understandable](#principle_a4)
            -   [A.4.1. (For the authoring tool user interface) Help authors avoid and correct mistakes](#gl_a41)
            -   [A.4.2. (For the authoring tool user interface) Document the user interface, including all accessibility features](#gl_a42)
    -   [B. Support the production of accessible content](#part_b)
        -   [B.1. Fully automatic processes produce accessible content](#principle_b1)
            -   [B.1.1. Ensure that automatically-specified content is accessible](#gl_b11)
            -   [B.1.2. Ensure that accessibility information is preserved](#gl_b12)
        -   [B.2. Authors are supported in producing accessible content](#principle_b2)
            -   [B.2.1. Ensure that accessible content production is possible](#gl_b21)
            -   [B.2.2. Guide authors to produce accessible content](#gl_b22)
            -   [B.2.3. Assist authors with managing alternative content for non-text content](#gl_b23)
            -   [B.2.4. Assist authors with accessible templates](#gl_b24)
            -   [B.2.5. Assist authors with accessible pre-authored content](#gl_b25)
        -   [B.3. Authors are supported in improving the accessibility of existing content](#principle_b3)
            -   [B.3.1. Assist authors in checking for accessibility problems](#gl_b31)
            -   [B.3.2. Assist authors in repairing accessibility problems](#gl_b32)
        -   [B.4. Authoring tools promote and integrate their accessibility features](#principle_b4)
            -   [B.4.1. Ensure the availability of features that support the production of accessible content](#gl_b41)
            -   [B.4.2. Ensure that documentation promotes the production of accessible content](#gl_b42)
-   [Implementing ATAG 2.0 Conformance](#Conformance)
    -   [Conformance Requirements](#conf-req)
        -   [Success Criteria Satisfaction](#conf-sc-satisfaction)
        -   [Relationship to the Web Content Accessibility Guidelines (WCAG) 2.0](#conf-rel-wcag)
        -   [Conformance Options and Levels](#conf-levels)
        -   [Web Content Technologies Produced](#conf-techs-produced)
        -   [Live Publishing Authoring Tools](#conf-live-publishing)
    -   [Conformance Claims (Optional)](#conf-claim)
        -   [Required Components of a Conformance Claim](#conf-sc-satisfaction)
        -   [Optional Components of a Conformance Claim](#conf-claim-optional-components)
    -   [Disclaimer](#conf-disclaimer)
-   [Appendix A: Glossary](#glossary)
-   [Appendix B: References](#references)
-   [Appendix C: Acknowledgments](#acknowledgments)

------------------------------------------------------------------------

<span id="intro">Introduction</span>
------------------------------------

This section is <a href="#def-Informative" class="termdef" title="definition: informative">informative</a>.

This is W3C Recommendation (standard) of the Authoring Tool Accessibility Guidelines (ATAG) version 2.0. This document includes recommendations for assisting <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">authoring tool developers</a> to make their <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> more accessible to people with disabilities, including auditory, cognitive, neurological, physical, speech, and visual disabilities.

Authoring tool accessibility addresses the needs of two overlapping user groups with disabilities:

-   <a href="#def-Author" class="termdef" title="definition: authors">authors</a> of <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a>, whose needs are met by ensuring that <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interfaces</a> are more accessible (addressed by [Part A of the Guidelines](#part_a)), and
-   <a href="#def-End-Users" class="termdef" title="definition: end user">end users</a> of web content, whose needs are met by ensuring that all authors are enabled, supported, and guided by the authoring tools that they use toward producing <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible Web content">accessible web content (WCAG)</a> (addressed by [Part B of the Guidelines](#part_b)).

It is important to note that while the requirements for meeting these two sets of user needs are separated for clarity within the guidelines, the accelerating trend toward user-produced content means that, in reality, they are deeply inter-connected. For example, when a user participates in an online forum, the user frequently authors content that is then incorporated with content authored by other users. Accessibility problems in either the authoring user interface or the content produced by the other forum users would reduce the overall accessibility of the forum.

#### <span id="intro-notes"></span>Notes:

1.  The term "<a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a>" has a specific definition in ATAG 2.0. The definition, which includes several <a href="#def-Normative" class="termdef" title="definition: normative">normative</a> notes, appears in the [Glossary](#glossary).
2.  The term "<a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible web content">accessible content (WCAG)</a>" and related terms, such as "<a href="#def-Accessible-Template" class="termdef" title="definition: accessible templates">accessible template (WCAG)</a>" is used by ATAG 2.0 to refer to "content that would conform to [WCAG 2.0](#conf-rel-wcag)", at either Level A, AA, or AAA, assuming that any <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technologies</a> relied upon to satisfy the WCAG 2.0 success criteria are accessibility supported. The definition of the term reflects the WCAG 2.0 note that even content that conforms to the highest level of WCAG 2.0 (Level AAA) may not be "accessible to individuals with all types, degrees, or combinations of disability". For more information, see "[Relationship to the Web Content Accessibility Guidelines (WCAG) 2.0](#conf-rel-wcag)".
3.  ATAG 2.0 does not include standard usability recommendations, except where they have a significantly greater impact on people with disabilities than on other people.
4.  Authoring tools are just one aspect of web accessibility. For an overview of the different components of web accessibility and how they work together see:
    -   [Essential Components of Web Accessibility](http://www.w3.org/WAI/intro/components.php)
    -   [Web Content Accessibility Guidelines (WCAG) Overview](http://www.w3.org/WAI/intro/wcag.php)
    -   [User Agent Accessibility Guidelines (UAAG) Overview](http://www.w3.org/WAI/intro/uaag.php) (This will be of special interest to developers of "<a href="#def-comb-ua-authoring-tool" class="termdef" title="definition: combined user agent/authoring tools">Combined User Agent/Authoring Tools</a>" and "<a href="#def-ua-with-authoring-tool-role" class="termdef" title="definition: user agents with authoring tool modes">User Agents with Authoring Tool Modes</a>")

### <span id="intro-organization"></span>ATAG 2.0 Layers of Guidance

The individuals and organizations that may use ATAG 2.0 vary widely and include <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">authoring tool developers</a>, <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> users (<a href="#def-Author" class="termdef" title="definition: authors">authors</a>), authoring tool purchasers, and policy makers. In order to meet the varying needs of these audiences, several layers of guidance are provided:

-   **Parts:** ATAG 2.0 is divided into two parts, each reflecting a key aspect of accessibility with respect to authoring tools. [Part A](#part_a) relates to the accessibility of <a href="#def-Authoring-Tool-Interface" class="termdef" title="defintion: authoring tool user interfaces">authoring tool user interfaces</a> to authors with disabilities. [Part B](#part_b) relates to support by authoring tools for the creation, by any author (not just those with disabilities), of <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that is more accessible to <a href="#def-End-Users" class="termdef" title="definition: end user">end users</a> with disabilities. Both parts include <a href="#def-Normative" class="termdef" title="definition: normative">normative</a> "Conformance Applicability Notes" that apply to all of the success criteria within that part: [Part A Conformance Applicability Notes](#part_a_applic_notes) and [Part B Conformance Applicability Notes](#part_b_applic_notes).
-   **Principles:** Under each part are several high-level principles that organize the guidelines.
-   **Guidelines:** Under the principles are guidelines. The guidelines provide the basic goals that authoring tool developers should work toward in order to make authoring tools more accessible to both authors and end users of web content with different disabilities. The guidelines are not testable, but provide the framework and overall objectives to help authoring tool developers understand the success criteria. Each guideline includes a brief rationale for why the guideline was included.
-   **Success Criteria:** For each guideline, testable success criteria are provided to allow ATAG 2.0 to be used where requirements and conformance testing are necessary, such as in design specification, purchasing, regulation, and contractual agreements. In order to meet the needs of different groups and different situations, multiple levels of full and partial conformance are defined (see [Levels of Conformance](#conf-levels)).
-   **Implementing ATAG 2.0 document:** The [Implementing ATAG 2.0](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/) document provides additional non-normative information for each success criterion, including a description of the intent of the success criterion, examples, and links to related resources.[](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/)

See [Authoring Tool Accessibility Guidelines (ATAG) Overview](http://www.w3.org/WAI/intro/atag.php) for links to additional ATAG technical and educational material.

### <span id="intro_understand_levels_conformance"></span>Levels of Conformance

In order to ensure that the process of using ATAG 2.0 and [WCAG 2.0](#conf-rel-wcag) together in the development of <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> is as simple as possible, ATAG 2.0 shares [WCAG 2.0](#conf-rel-wcag)'s three level conformance model: Level A (lowest), AA (middle), AAA (highest). <span class="gl-only">For more information, see [Understanding Levels of Conformance](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#intro_understand_levels_conformance). </span>

### <span id="intro-integrate_acc_features"></span>Integration of Accessibility Features

When implementing ATAG 2.0, <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">authoring tool developers</a> should carefully integrate features that support more accessible authoring into the same "look-and-feel" as other features of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>. Close integration has the potential to:

-   produce a more seamless product;
-   leverage the existing knowledge and skills of <a href="#def-Author" class="termdef" title="definition: authors">authors</a>;
-   make authors more receptive to new accessibility-related authoring requirements; and
-   reduce the likelihood of author confusion.

------------------------------------------------------------------------

<span id="guidelines"></span>Guidelines
---------------------------------------

The success criteria and the conformance applicability notes in this section are <a href="#def-Normative" class="termdef" title="definition: normative">normative</a>.

<span id="part_a"></span>Part A: Make the authoring tool user interface accessible
----------------------------------------------------------------------------------

### <span id="part_a_applic_notes"></span>Part A Conformance Applicability Notes:

1.  <span id="part_a_applic_note_1"></span>**Scope of "authoring tool user interface":** The Part A success criteria apply to all aspects of the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> that are concerned with producing the ["included" web content technologies](#conf-techs-produced). This includes <a href="#def-View" class="termdef" title="definition: view">views</a> of the <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a> and features that are independent of the content being edited (e.g. menus, button bars, status bars, user preferences, <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a>).
2.  <span id="part_a_applic_note_2"></span>**Reflected content accessibility problems:** The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> is responsible for ensuring that <a href="#def-Editing-View" class="termdef" title="definition: editing views">editing-views</a> display the <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a> in a way that is more accessible to <a href="#def-Author" class="termdef" title="definition: authors">authors</a> with disabilities (e.g. ensuring that <span class="sc-bullet"><a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives</a></span> in the content can be <a href="#def-Programmatically-Determined" class="termdef" title="definition: programmatically determined">programmatically determined</a>). However, where an <a href="#def-Authoring-Interface-Accessibility-Problem" class="termdef" title="definition: authoring tool user interface accessibility problem">authoring tool user interface accessibility problem</a> is caused directly by the content being edited (e.g. if an image in the content lacks a text alternative), then this would not be considered a deficiency in the accessibility of the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a>.  
3.  <span id="part_a_applic_note_3"></span>**Developer control:** The Part A success criteria only apply to the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> as it is provided by the <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">developer</a>. They do not apply to any subsequent modifications by parties other than the authoring tool developer (e.g. user modifications of default settings, third-party plug-ins).
4.  <span id="part_a_applic_note_4"></span>**User agent features:** <a href="#def-Web-Based-UI" class="termdef" title="definition: authoring tool user interface (Web-based)">Web-based authoring tools</a> may rely on <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a> features (e.g. keyboard navigation, find functions, display preferences, undo features) to satisfy success criteria. [Conformance claims](#conf-claim) are optional, but any claim that is made must [record the user agent(s)](#conf-user-agents).
5.  <span id="part_a_applic_note_5"></span>**Accessibility of features provided to meet Part A:** The Part A success criteria apply to the entire <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a>, including any features added to meet the success criteria in Part A (e.g. documentation, search functions). The only exemption is for <a href="#def-Preview" class="termdef" title="definition: preview">preview</a> features, as long as they meet the relevant success criteria in [Guideline A.3.7](#gl_a37). Previews are treated differently than editing-views because all authors, including those with disabilities, benefit when preview features accurately reflect the functionality of user agents that are actually in use by <span class="rationale"><a href="#def-End-Users" class="termdef" title="definition: end user">end users</a></span>.
6.  **<span id="part_a_applic_note_6"></span>Unrecognizable content:** When success criteria require authoring tools to treat web content according to semantic criteria, the success criteria only apply when these semantics are encoded programmatically (e.g. text describing an image can only be considered a <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for non-text content</a> when this role is encoded within markup).

<span id="principle_a1"></span> Principle A.1: Authoring tool user interfaces follow applicable accessibility guidelines
------------------------------------------------------------------------------------------------------------------------

### <span id="gl_a11"></span> Guideline A.1.1: (For the authoring tool user interface) Ensure that web-based functionality is accessible. <span class="gl-only"><span class="implementing-link">\[[Implementing A.1.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a11)\] </span></span>

Rationale: When <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> (or parts of authoring tools) are <a href="#def-Web-Based-UI" class="termdef" title="definition: authoring tool user interface (Web-based)">web-based</a>, conforming to [WCAG 2.0](#conf-rel-wcag) will facilitate access by all <a href="#def-Author" class="termdef" title="definition: authors">authors</a>, including those using <a href="#def-Assistive-Technology" class="termdef" title="definition: assistive technology">assistive technologies</a>.

#### <span id="sc_a111"></span>A.1.1.1 Web-Based Accessible (WCAG):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> contains <a href="#def-Web-Based-UI" class="termdef" title="definition: authoring tool user interface (Web-based)">web-based user interfaces</a>, then those web-based user interfaces meet the [WCAG 2.0](#conf-rel-wcag) success criteria. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

[Implementing A.1.1.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a111)

### <span id="gl_a12"></span> Guideline A.1.2: (For the authoring tool user interface) Ensure that non-web-based functionality is accessible. <span class="gl-only">\[[Implementing A.1.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a12)\]</span>

Rationale: When <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> (or parts of authoring tools) are <a href="#def-Non-Web-Based" class="termdef" title="definition: authoring tool user interface (non-Web-Based)">non-web-based</a>, following existing <a href="#def-Platform" class="termdef" title="definition: platform">platform</a> accessibility guidelines and implementing communication with <a href="#def-Accessibility-Platform-Service" class="termdef" title="definition: accessibility platform architecture">platform accessibility services</a> facilitates access by all <a href="#def-Author" class="termdef" title="definition: authors">authors</a>, including those using <a href="#def-Assistive-Technology" class="termdef" title="definition: assistive technology">assistive technologies</a>.

#### <span id="sc_a121"></span>A.1.2.1 Accessibility Guidelines:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> contains <a href="#def-Non-Web-Based" class="termdef" title="definition: authoring tool user interface (non-Web-Based)">non-web-based user interfaces</a>, then those non-web-based user interfaces follow user interface accessibility guidelines for the <a href="#def-Platform" class="termdef" title="definition: platform">platform</a>. <span class="level">(**Level A**)</span>

-   *Note:* The (optional) [explanation of conformance claim results](#conf-explanation-results) should record the user interface accessibility guidelines that were followed.

[Implementing A.1.2.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a121)

#### <span id="sc_a122"></span>A.1.2.2 Platform Accessibility Services:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> contains <a href="#def-Non-Web-Based" class="termdef" title="definition: authoring tool user interface (non-Web-Based)">non-web-based user interfaces</a>, then those non-web-based user interfaces expose accessibility information through <a href="#def-Accessibility-Platform-Service" class="termdef" title="definition: accessibility platform architecture">platform accessibility services</a>. <span class="level">(**Level A**)</span>

-   *Note:* The (optional) [explanation of conformance claim results](#conf-explanation-results) should record the platform accessibility service(s) that were implemented.

[Implementing A.1.2.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a122)

<span id="principle_a2"></span>Principle A.2: Editing-views are perceivable
---------------------------------------------------------------------------

### <span id="gl_a21"></span> Guideline A.2.1: (For the authoring tool user interface) Make alternative content available to authors. <span class="gl-only">\[[Implementing A.2.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a21)\] </span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> require access to <a href="#def-Alternative-Content" class="termdef" title="definition: alternative content">alternative content</a> in order to interact with the <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that they are editing.

#### <span id="sc_a211"></span>A.2.1.1 Text Alternatives for Rendered Non-Text Content:

If an <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> <a href="#def-Content-Renderings" class="termdef" title="definition: content rendering">renders</a> <a href="#def-Non-Text-Objects" class="termdef" title="definition: non-text objects">non-text content</a>, then any <a href="#def-Associated-Alternative-Content" class="termdef" title="definition: alternative content">programmatically associated</a> <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for the non-text content</a> can be <a href="#def-Programmatically-Determined" class="termdef" title="definition: programmatically determined">programmatically determined</a>. <span class="level">(**Level A**)</span>

[Implementing A.2.1.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a211)

#### <span id="sc_a212"></span>A.2.1.2 Alternatives for Rendered Time-Based Media:

If an <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> <a href="#def-Content-Renderings" class="termdef" title="definition: content rendering">renders</a> time-based media, then at least one of the following is true: <span class="level">(**Level A**)</span>

-   **(a) Option to Render:** The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides the <a href="#def-Option" class="termdef" title="definition: option">option</a> to render alternatives for the time-based media; or
-   **(b) User Agent Option:** <a href="#def-Author" class="termdef" title="definition: authors">Authors</a> have the option to <a href="#def-Preview" class="termdef" title="definition: preview">preview</a> the time-based media in a <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a> that is able to render the alternatives.

[Implementing A.2.1.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a212)

### <span id="gl_a22"></span> Guideline A.2.2: (For the authoring tool user interface) Ensure that editing-view presentation can be programmatically determined. <span class="gl-only">\[[Implementing A.2.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a22)\] </span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> need access to details about the <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> <a href="#def-Presentation" class="termdef" title="definition: presentation">presentation</a>, via their assistive technology, when that presentation is used to convey status messages (e.g. underlining misspelled words) or provide information about how the <a href="#def-End-Users" class="termdef" title="definition: end users">end user</a> will experience the <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a>.

#### **<span id="sc_a221"></span>**A.2.2.1 Editing-View Status Indicators:

If an <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> adds status indicators to the <span class="rationale"><a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">content being edited</a></span>, then the information being conveyed by the status indicators can be <a href="#def-Programmatically-Determined" class="termdef" title="definition: programmatically determined">programmatically determined</a>. <span class="level">(**Level A**)</span>

-   *Note:* Status indicators may indicate errors (e.g. spelling errors), tracked changes, hidden elements, or other information.

[Implementing A.2.2.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a221)

#### <span id="sc_a222"></span> A.2.2.2 Access to Rendered Text Properties:

If an <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> renders any text formatting <a href="#def-Web-Content-Properties" class="termdef" title="definition: content property">properties</a> that <a href="#def-Author" class="termdef" title="definition: authors">authors</a> can also edit using the editing-view, then the properties can be <a href="#def-Programmatically-Determined" class="termdef" title="definition: programmatically determined">programmatically determined</a>. <span class="level">(**Level AA**)</span>

[Implementing A.2.2.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a222)

<span id="principle_a3"></span> Principle A.3: Editing-views are operable
-------------------------------------------------------------------------

### <span id="gl_a31"></span> Guideline A.3.1: (For the authoring tool user interface) Provide keyboard access to authoring features. <span class="gl-only">\[[Implementing A.3.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a31)\] </span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> with limited mobility or visual disabilities do not use a mouse and instead require keyboard interface access to all of the functionality of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>.

#### <span id="sc_a311"></span>A.3.1.1 Keyboard Access (Minimum):

All functionality of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> is operable through a <a href="#def-Keyboard-Interface" class="termdef" title="definition: keyboard interface">keyboard interface</a> without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints. <span class="level">(**Level A**)</span>

-   *Note 1:* Keyboard interfaces are programmatic services provided by many <a href="#def-Platform" class="termdef" title="definition: platform">platforms</a> that allow operation in a device independent manner. This success criterion does not imply the presence of a hardware keyboard.
-   *Note 2:* The path exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input, but the underlying function (text input) does not. The path exception encompasses other input variables that are continuously sampled from pointing devices, including pressure, speed, and angle.
-   *Note 3:* This success criterion does not forbid and should not discourage other input methods (e.g. mouse, touch) in addition to keyboard operation.

[Implementing A.3.1.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a311)

#### <span id="sc_a312"></span>A.3.1.2 No Keyboard Traps:

If keyboard focus can be moved to a <a href="#def-UI-Component" class="termdef" title="definition: user interface component">component</a> using a <a href="#def-Keyboard-Interface" class="termdef" title="definition: keyboard interface">keyboard interface</a>, then focus can be moved away from that component using only a keyboard interface. If it requires more than unmodified arrow or tab keys or other standard exit methods, <span class="sc-bullet"><a href="#def-Author" class="termdef" title="definition: authors">authors</a></span> are advised of the method for moving focus away. <span class="level">(**Level A**)</span>

[Implementing A.3.1.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a312)

#### <span id="sc_a313"></span>A.3.1.3 Efficient Keyboard Access:

The <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> includes mechanisms to make keyboard access more efficient than <a href="#def-Sequential-Keyboard-Access" class="termdef" title="definition: sequential keyboard navigation">sequential keyboard access</a>. <span class="level">(**Level AA**)</span>

[Implementing A.3.1.3](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a313)

#### <span id="sc_a314"></span> A.3.1.4 Keyboard Access (Enhanced):

All functionality of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> is operable through a <a href="#def-Keyboard-Interface" class="termdef" title="definition: keyboard interface">keyboard interface</a> without requiring specific timings for individual keystrokes. <span class="level">(**Level AAA**)</span>

[Implementing A.3.1.4](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a314)

#### <span id="sc_a315"></span> A.3.1.5 Customize Keyboard Access:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes keyboard commands, then those keyboard commands can be customized. <span class="level">(**Level AAA**)</span>

[Implementing A.3.1.5](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a315)

#### <span id="sc_a316"></span> A.3.1.6 Present Keyboard Commands:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes keyboard commands,

then the authoring tool provides a way for <a href="#def-Author" class="termdef" title="definition: authors">authors</a> to determine the keyboard commands associated with <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> <a href="#def-UI-Component" class="termdef" title="definition: user interface component">components</a>. <span class="level">(**Level AAA**)</span>

[Implementing A.3.1.6](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a316)

### <span id="gl_a32"></span> Guideline A.3.2: (For the authoring tool user interface) Provide authors with enough time. <span class="gl-only">\[[Implementing A.3.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a32)\] </span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> who have difficulty typing, operating the mouse, or processing information can be prevented from using systems with short <a href="#def-Time-Limit" class="termdef" title="definition: time limit">time limits</a> or that require fast reaction speeds, such as clicking on a moving target.

#### <span id="sc_a321"></span> A.3.2.1 Auto-Save (Minimum):

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not include <a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">session</a> <a href="#def-Time-Limit" class="termdef" title="definition: time limit">time limits</a> or the authoring tool can automatically save edits made before the session time limits are reached. <span class="level">(**Level A**)</span>

[Implementing A.3.2.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a321)

#### <span id="sc_a322"></span> A.3.2.2 Timing Adjustable:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not include <a href="#def-Time-Limit" class="termdef" title="definition: time limit">time limits</a> or at least one of the following is true: <span class="level">(**Level A**)</span>

-   **(a) Turn Off:** <a href="#def-Author" class="termdef" title="definition: authors">Authors</a> are allowed to turn off the time limit before encountering it; or
-   **(b) Adjust:** Authors are allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or
-   **(c) Extend:** Authors are warned before time expires and given at least 20 seconds to extend the time limit with a simple action (e.g. "press the space bar"), and authors are allowed to extend the time limit at least ten times; or
-   **(d) Real-time Exception:** The time limit is a required part of a real-time event (e.g. a collaborative authoring system), and no alternative to the time limit is possible; or
-   **(e) Essential Exception:** The time limit is essential and extending it would invalidate the activity; or
-   **(f) 20 Hour Exception:** The time limit is longer than 20 hours.

[Implementing A.3.2.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a322)

#### <span id="sc_a323"></span> A.3.2.3 Static Input Components:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not include moving <a href="#def-UI-Component" class="termdef" title="definition: user interface component">user interface components</a> that accept input where the movement of these components cannot be paused by <a href="#def-Author" class="termdef" title="definition: authors">authors</a>. <span class="level">(**Level A**)</span>

[Implementing A.3.2.3](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a323)

#### <span id="sc_a324"></span> A.3.2.4 Content Edits Saved (Extended):

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> can be set to automatically save <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> edits made using the authoring tool. <span class="level">(**Level AAA**)</span>

[Implementing A.3.2.4](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a324)

### <span id="gl_a33"></span> Guideline A.3.3: (For the authoring tool user interface) Help authors avoid flashing that could cause seizures. <span class="gl-only"> \[[Implementing A.3.3](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a33)\] </span>

Rationale: Flashing can cause seizures in <a href="#def-Author" class="termdef" title="definition: authors">authors</a> with photosensitive seizure disorder.

#### <span id="sc_a331"></span> A.3.3.1 Static View Option:

If an <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> can play visual time-based content, then playing is not necessarily automatic upon loading the content and playing can be paused. <span class="level">(**Level A**)</span>

[Implementing A.3.3.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a331)

### <span id="gl_a34"></span> Guideline A.3.4: (For the authoring tool user interface) Enhance navigation and editing via content structure. <span class="gl-only">\[[Implementing A.3.4](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a34)\] </span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> who have difficulty typing or operating the mouse benefit when <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> make use of the structure present in <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> to simplify navigating and editing the content.

#### <span id="sc_a341"></span> A.3.4.1 Navigate By Structure:

If <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-views</a> expose the <a href="#def-Markup" class="termdef" title="definition: markup">markup</a> <a href="#def-Element" class="termdef" title="definition: element">elements</a> in the <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a>, then the markup elements (e.g. source code, content renderings) are selectable and navigation mechanisms are provided to move the selection focus between elements. <span class="level">(**Level AA**)</span>

[Implementing A.3.4.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a341)

#### <span id="sc_a342"></span> A.3.4.2 Navigate by Programmatic Relationships:

If <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-views</a> allow editing of programmatic <a href="#def-Relationships" class="termdef" title="definition: relationships">relationships</a> within <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a>, then mechanisms are provided that support navigation between the related content. <span class="level">(**Level AAA**)</span>

-   *Note:*<span class="sc-title"> Depending on the <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technology</a> and the nature of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, relationships may include, but are not limited to, element nesting, headings, labeling, programmatic definitions, and ID relationships.</span>

[Implementing A.3.4.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a342)

### <span id="gl_a35"></span> Guideline A.3.5: (For the authoring tool user interface) Provide text search of the content. <span class="gl-only">\[[Implementing A.3.5](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a35)\] </span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> who have difficulty typing or operating the mouse benefit from the ability to use text search to navigate to arbitrary points within the <span class="sc-title"><a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a></span>.

#### <span id="sc_a351"></span> A.3.5.1 Text Search:

If the authoring tool provides an <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> of text-based content, then the <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> enables text search, such that all of the following are true: <span class="level">(**Level AA**)</span>

-   **(a) All Editable Text:** Any text content that is editable by the editing-view is searchable (including <a href="#def-Alternative-Content" class="termdef" title="definition: alternative content">alternative content</a>); and
-   **(b) Match:** Matching results can be presented to authors and given focus; and
-   **(c) No Match:** Authors are informed when no results are found; and
-   **(d) Two-way:** The search can be made forwards or backwards.

[Implementing A.3.5.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a351)

### <span id="gl_a36"></span> Guideline A.3.6: (For the authoring tool user interface) Manage preference settings. <span class="gl-only">\[[Implementing A.3.6](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a36)\] </span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> need to set their own <a href="#def-Display-Settings" class="termdef" title="definition: display settings">display settings</a> in a way that differs from the <a href="#def-Presentation" class="termdef" title="definition: presentation">presentation</a> that they want to define for the <a href="#def-Publishing" class="termdef" title="definition: publishing">published</a> <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a>. Providing the ability to save and reload sets of keyboard and display preference settings benefits <a href="#def-Author" class="termdef" title="definition: authors">authors</a> who have needs that differ over time (e.g. due to fatigue).

#### <span id="sc_a361"></span>A.3.6.1 Independence of Display:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes <a href="#def-Display-Settings" class="termdef" title="definition: display settings">display settings</a> for <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-views</a>, then the authoring tool allows <a href="#def-Author" class="termdef" title="definition: authors">authors</a> to adjust these settings without modifying the <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a>. <span class="level">(**Level A**)</span>

[Implementing A.3.6.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a361)

#### **<span id="sc_a362"></span>** A.3.6.2 Save Settings:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes <a href="#def-Display-Settings" class="termdef" title="definition: display settings">display</a> and/or <a href="#def-Control-Settings" class="termdef" title="definition: control settings">control settings</a>, then these settings can be saved between <a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">authoring sessions</a>. <span class="level">(**Level AA**)</span>

[Implementing A.3.6.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a362)

#### **<span id="sc_a363"></span>** A.3.6.3 Apply Platform Settings:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> respects changes in <a href="#def-Platform" class="termdef" title="definition: platform">platform</a> <a href="#def-Display-Settings" class="termdef" title="definition: display settings">display</a> and <a href="#def-Control-Settings" class="termdef" title="definition: control settings">control settings</a>, unless <a href="#def-Author" class="termdef" title="definition: authors">authors</a> select more specific display and control settings using the authoring tool. <span class="level">(**Level AA**)</span>

[Implementing A.3.6.3](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a363)

### <span id="gl_a37"></span> Guideline A.3.7: (For the authoring tool user interface) Ensure that previews are at least as accessible as in-market user agents. <span class="gl-only">\[[Implementing A.3.7](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a37)\] </span>

Rationale: <a href="#def-Preview" class="termdef" title="definition: preview">Preview</a> features are provided by many <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> because the <a href="#def-Workflow" class="termdef" title="definition: workflow">workflow</a> of <a href="#def-Author" class="termdef" title="definition: authors">authors</a> often includes periodically checking how <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agents</a> will display the <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> to <a href="#def-End-Users" class="termdef" title="definition: end user">end users</a>. Authors with disabilities need the same opportunity to check their work.

#### <span id="sc_a371"></span> A.3.7.1 Preview (Minimum):

If a <a href="#def-Preview" class="termdef" title="definition: preview">preview</a> is provided, then at least one of the following is true: <span class="level">(**Level A**)</span>

-   **(a) In-Market User Agent:** The preview renders content using a <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a> that is <a href="#def-Inmarket-User-Agent" class="termdef" title="definition: in-market user agent">in-market</a>; or
-   **(b) UAAG (Level A):** The preview conforms to the User Agent Accessibility Guidelines 1.0 Level A [\[UAAG10\]](#ref-UAAG10).

[Implementing A.3.7.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a371)

#### <span id="sc_a372"></span> A.3.7.2 Preview (Enhanced):

If a <a href="#def-Preview" class="termdef" title="definition: preview">preview</a> is provided, then <a href="#def-Author" class="termdef" title="definition: authors">authors</a> can specify which <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a> performs the preview. <span class="level">(**Level AAA**)</span>

[Implementing A.3.7.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a372)

<span id="principle_a4"></span> Principle A.4: Editing-views are understandable
-------------------------------------------------------------------------------

### <span id="gl_a41"></span> Guideline A.4.1: (For the authoring tool user interface) Help authors avoid and correct mistakes. <span class="gl-only">\[[Implementing A.4.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a41)\]</span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> with disabilities may be more susceptible to input errors due to factors such as difficulty making fine movements and speech recognition system errors.

#### <span id="sc_a411"></span> A.4.1.1 Content Changes Reversible (Minimum):

All <a href="#def-Authoring-Action" class="termdef" title="definition: authoring actions">authoring actions</a> are either <a href="#def-Reversible-Action" class="termdef" title="definition: reversible authoring action">reversible</a> or the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> requires <a href="#def-Author" class="termdef" title="definition: authors">author</a> confirmation to proceed. (**<span class="level">Level A</span>**)

[Implementing A.4.1.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a411)

#### <span id="sc_a412"></span> A.4.1.2 Settings Change Confirmation:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides mechanisms for changing <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> settings, then those mechanisms can reverse the setting changes, or the authoring tool requires <a href="#def-Author" class="termdef" title="definition: authors">author</a> confirmation to proceed. (**<span class="level">Level A</span>**)

[Implementing A.4.1.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a412)

#### <span id="sc_a413"></span> A.4.1.3 Content Changes Reversible (Enhanced):

<a href="#def-Author" class="termdef" title="definition: authors">Authors</a> can sequentially reverse a series of <a href="#def-Reversible-Action" class="termdef" title="definition: reversible authoring action">reversible authoring actions</a>. <span class="level">(**Level AAA**)</span>

-   *Note:* It is acceptable to clear the authoring action history at the <a href="#def-End-Auth-Session" class="termdef" title="definition: end of an authoring session">end of authoring sessions</a>.

[Implementing A.4.1.3](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a413)

### <span id="gl_a42"></span> Guideline A.4.2: (For the authoring tool user interface) Document the user interface, including all accessibility features. <span class="gl-only">\[[Implementing A.4.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_a42)\] </span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> may not be able to understand or operate the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> without <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a>.

#### <span id="sc_a421"></span> A.4.2.1 Describe Accessibility Features:

For each <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> feature that is used to meet [Part A](#part_a) of ATAG 2.0, at least one of the following is true: <span class="level">(**Level A**)</span>

-   **(a) Described in the Documentation:** Use of the feature is explained in the authoring tool's <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a>; or
-   **(b) Described in the Interface:** Use of the feature is explained in the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a>; or
-   **(c) Platform Service:** The feature is a service provided by an underlying platform; or
-   **(d) Not Used by Authors:** The feature is not used directly by <a href="#def-Author" class="termdef" title="definition: authors">authors</a> (e.g. passing information to a <a href="#def-Accessibility-Platform-Service" class="termdef" title="definition: accessibility platform architecture">platform accessibility service</a>).

<!-- -->

-   *Note:* The accessibility of the documentation is covered by [Guideline A.1.1](#gl_a11) and [Guideline A.1.2](#gl_a11).

[Implementing A.4.2.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a421)

#### <span id="sc_a422"></span> A.4.2.2 Document All Features:

For each <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> feature, at least one of the following is true: <span class="level">(**Level AA**)</span>

-   **(a) Described in the Documentation:** Use of the feature is explained in the authoring tool's <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a>; or
-   **(b) Described in the Interface:** Use of the feature is explained in the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a>; or
-   **(c) Platform Service:** The feature is a service provided by an underlying platform; or
-   **(d) Not Used by Authors:** The feature is not used directly by <a href="#def-Author" class="termdef" title="definition: authors">authors</a> (e.g. passing information to a <a href="#def-Accessibility-Platform-Service" class="termdef" title="definition: accessibility platform architecture">platform accessibility service</a>).

<!-- -->

-   *Note:* The accessibility of the documentation is covered by [Guideline A.1.1](#gl_a11) and [Guideline A.1.2](#gl_a11).

[Implementing A.4.2.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_a422)

<span id="part_b"></span> Part B: Support the production of accessible content
------------------------------------------------------------------------------

### <span id="part_b_applic_notes"></span>Part B Conformance Applicability Notes:

1.  <span id="part_b_applic_note_1"></span>**Author availability:** Any Part B success criteria that refer to <a href="#def-Author" class="termdef" title="definition: authors">authors</a> only apply during <a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">authoring sessions</a>.
2.  **<span id="part_b_applic_note_2"></span>Developer control:** The Part B success criteria only apply to the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> as it is provided by the <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">developer</a>. This does not include subsequent modifications by parties other than the authoring tool developer (e.g. third-party plug-ins, user-defined <a href="#def-Template" class="termdef" title="definition: template">templates</a>, user modifications of default settings).
3.  **<span id="part_b_applic_note_3"></span>Applicability after the end of an authoring session:** <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">Authoring tools</a> are responsible for the <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible web content">web content accessibility (WCAG)</a> of <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that they <span class="sc"><a href="#def-Content-Auto-Gen" class="termdef" title="definition: automatically-generated content">automatically generate</a></span> after the <a href="#def-End-Auth-Session" class="termdef" title="definition: end of an authoring session">end of an author's authoring session</a> (see [Success Criterion B.1.1.1](#sc_b111)). For example, if the developer changes the site-wide <a href="#def-Template" class="termdef" title="definition: template">templates</a> of a content management system, these would be required to meet the accessibility requirements for automatically-generated content. Authoring tools are not responsible for changes to the accessibility of content that the author causes, whether it is <a href="#def-Content-Author-Gen" class="termdef" title="definition: author generated content">author-generated</a> or automatically-generated by another system that the author has specified (e.g. a third-party feed).  
4.  **<span id="part_b_applic_note_4"></span>Authoring systems:** As per the ATAG 2.0 definition of <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, several software tools (identified in any [conformance claim](#conf-claim)) can be used in conjunction to meet the requirements of Part B (e.g. an authoring tool could make use of a third-party software accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> tool).
5.  **<span id="part_b_applic_note_5"></span>Accessibility of features provided to meet Part B:** The [Part A](#part_a) success criteria apply to the entire <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a>, including any features that must be present to meet the success criteria in Part B (e.g. checking tools, repair tools, tutorials, documentation).
6.  **<span id="part_b_applic_note_6"></span>Multiple authoring roles:** Some <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> include multiple <a href="#def-Author" class="termdef" title="definition: authors">author</a> roles, each with different views and content editing <a href="#def-Authoring-Permission" class="termdef" title="definition: author permission">permissions</a> (e.g. a content management system may separate the roles of designers, content authors, and quality assurers). In these cases, the Part B success criteria apply to the authoring tool as a whole, not to the view provided to any particular authoring role. <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">Accessible content support features</a> should be made available to any authoring role where it would be useful.
7.  **<span id="part_a_applic_note_7"></span>Unrecognizable content:** When success criteria require authoring tools to treat web content according to semantic criteria, the success criteria only apply when these semantics are encoded programmatically (e.g. text describing an image can only be considered a <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for non-text content</a> when this role is encoded within markup).

<span id="principle_b1"></span>Principle B.1: Fully automatic processes produce accessible content
--------------------------------------------------------------------------------------------------

### <span id="gl_b11"></span> Guideline B.1.1: Ensure that automatically-specified content is accessible. <span class="gl-only">\[[Implementing B.1.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_b11)\] </span>

Rationale: If <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> <span class="sc"><a href="#def-Content-Auto-Gen" class="termdef" title="definition: automatically-generated content">automatically</a></span> produce <span class="sc"><a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a></span> that includes <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: web content accessibility problems">accessibility problems (WCAG)</a>, then this will impose additional <a href="#def-Repairing" class="termdef" title="definition: repairing">repair</a> tasks on <a href="#def-Author" class="termdef" title="definition: authors">authors</a>.

#### <span id="sc_b111"></span> B.1.1.1 Content Auto-Generation After Authoring Sessions (WCAG):

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not <a href="#def-Content-Auto-Gen" class="termdef" title="definition: automatically-generated content">automatically generate</a> <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> after the <a href="#def-End-Auth-Session" class="termdef" title="definition: end of an authoring session">end of an authoring session,</a> or, <a href="#def-Author" class="termdef" title="definition: authors">authors</a> can specify that the content be <span class="rationale"><a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible Web content">accessible web content (WCAG)</a></span>. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   *Note:* This success criterion applies only to automatic processes specified by the <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">authoring tool developer</a>. It does not apply when <a href="#def-Author-Actions-Prevent" class="termdef" title="definition: author actions prevent generation of accessible web content">author actions prevent generation of accessible web content (WCAG)</a>.

[Implementing B.1.1.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b111)

#### <span id="sc_b112"></span> B.1.1.2 Content Auto-Generation During Authoring Sessions (WCAG):

If the <span class="sc-title"><a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a></span> provides the functionality for <span class="sc-title"><a href="#def-Content-Auto-Gen" class="termdef" title="definition: automatically-generated content">automatically generating</a></span> <span class="sc-title"><a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a></span> during an <a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">authoring session</a>, then at least one of the following is true: <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   **(a) Accessible:** The content is <span class="rationale"><a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible Web content">accessible web content (WCAG)</a> </span> without author input; or
-   **(b) Prompting:** During the automatic generation process, <span class="sc-title"><a href="#def-Author" class="termdef" title="definition: authors">authors</a></span> are <a href="#def-Prompt" class="termdef" title="definition: prompt">prompted</a> for any required <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">accessibility information (WCAG)</a>; or
-   **(c) Automatic Checking:** After the automatic generation process, accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> is automatically performed; or
-   **(d) Checking Suggested:** After the automatic generation process, the authoring tool prompts authors to perform accessibility checking.

<!-- -->

-   *Note 1:* Automatic generation includes automatically selecting <a href="#def-Template" class="termdef" title="definition: template">templates</a> for authors.
-   *Note 2:* This success criterion applies only to automatic processes specified by the <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">authoring tool developer</a>. It does not apply when <a href="#def-Author-Actions-Prevent" class="termdef" title="definition: author actions prevent generation of accessible web content">author actions prevent generation of accessible web content (WCAG)</a>.

[Implementing B.1.1.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b112)

### <span id="gl_b12"></span> Guideline B.1.2: Ensure that accessibility information is preserved. <span class="gl-only">\[[Implementing B.1.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_b12)\] </span>

Rationale: <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">Accessibility information (WCAG)</a> is critical to maintaining comparable levels of <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible Web content">web content accessibility (WCAG)</a> between the input and output of <a href="#def-Transformation" class="termdef" title="definition: transformation">web content transformations</a>.

#### <span id="sc_b121"></span> B.1.2.1 Restructuring and Recoding Transformations (WCAG):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Restructuring-Transformation" class="termdef" title="definition: restructuring transformations">restructuring transformations</a> or <a href="#def-Recoding-Transformation" class="termdef" title="definition: recoding transformations">re-coding transformations</a>, and if equivalent mechanisms exist in the web content technology of the output, then at least one of the following is true: <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   **(a) Preserve:** <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">Accessibility information (WCAG)</a> is preserved in the output; or
-   **(b) Warning:** Authors have the <span class="sc-title"><a href="#def-Default-Option" class="termdef" title="definition: default option">default option</a></span> to be warned that accessibility information (WCAG) may be lost (e.g. when saving a vector graphic into a raster image format); or
-   **(c) Automatic Checking:** After the transformation, accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> is automatically performed; or
-   **(d) Checking Suggested:** After the transformation, the authoring tool <a href="#def-Prompt" class="termdef" title="definition: prompt">prompts</a> authors to perform accessibility checking.

<!-- -->

-   *Note 1:* For <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for non-text content</a>, see [Success Criterion B.1.2.4](#sc_b124).
-   *Note 2:* This success criteria only applies when the output technology is ["included"](#conf-techs-produced) for conformance.

[Implementing B.1.2.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b121)

#### <span id="sc_b122"></span> B.1.2.2 Copy-Paste Inside Authoring Tool (WCAG):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> supports copy and paste of <a href="#def-Structured-Web-Content" class="termdef" title="definition: structured content">structured content</a>, then any <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">accessibility information (WCAG)</a> in the copied content is preserved when the authoring tool is both the source and destination of the copy-paste and the source and destination use the same <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technology</a>. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

[Implementing B.1.2.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b122)

#### <span id="sc_b123"></span> B.1.2.3 Optimizations Preserve Accessibility:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Optimizing-Transformation" class="termdef" title="definition: authoring tool">optimizing web content transformations</a>, then any <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">accessibility information (WCAG)</a> in the input is preserved in the output. <span class="level">(**Level A**)</span>.

[Implementing B.1.2.3](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b123)

#### <span id="sc_b124"></span> B.1.2.4 Text Alternatives for Non-Text Content are Preserved:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Transformation" class="termdef" title="definition: transformation">web content transformations</a> that preserve <a href="#def-Non-Text-Objects" class="termdef" title="definition: non-text content">non-text content</a> in the output, then any <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for that non-text content</a> are also preserved, if equivalent mechanisms exist in the <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technology</a> of the output. <span class="level">(**Level A**)</span>.

-   *Note:* This success criterion only applies when the output technology is ["included"](#conf-techs-produced) for conformance.

[Implementing B.1.2.4](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b124)

<span id="principle_b2"></span> Principle B.2: Authors are supported in producing accessible content
----------------------------------------------------------------------------------------------------

### <span id="gl_b21"></span> Guideline B.2.1: Ensure that accessible content production is possible. <span class="gl-only">\[[Implementing B.2.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_b21)\] </span>

**<span id="gl_b11-rationale"></span>** Rationale: To support <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible Web content">accessible web content (WCAG)</a> production, at minimum, it is possible to produce <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that conforms with [WCAG 2.0](#conf-rel-wcag) using the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>.

#### <span id="sc_b211"></span> B.2.1.1 Accessible Content Possible (WCAG):

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not place <a href="#def-Restrictions" class="termdef" title="definition: web content authoring restrictions">restrictions</a> on the <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that <a href="#def-Author" class="termdef" title="definition: authors">authors</a> can specify or those restrictions do not prevent <span class="rationale">[WCAG 2.0](#conf-rel-wcag)</span> success criteria from being met. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

[Implementing B.2.1.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b211)

### <span id="gl_b22"></span> Guideline B.2.2: Guide authors to produce accessible content. <span class="gl-only">\[[Implementing B.2.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_b22)\] </span>

Rationale: By guiding <a href="#def-Author" class="termdef" title="definition: author">authors</a> from the outset toward the creation and maintenance of <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible Web content">accessible web content (WCAG)</a>, <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: Web content accessibility problem">web content accessibility problems (WCAG)</a> are mitigated and less <a href="#def-Repairing" class="termdef" title="definition: repairing">repair</a> effort is required.

#### <span id="sc_b221"></span> B.2.2.1 Accessible Option Prominence (WCAG):

If <a href="#def-Author" class="termdef" title="definition: authors">authors</a> are provided with a choice of <a href="#def-Authoring-Action" class="termdef" title="definition: authoring action">authoring actions</a> for achieving the same <a href="#def-Authoring-Outcome" class="termdef" title="definition: authoring outcome">authoring outcome</a> (e.g. styling text), then <a href="#def-Option" class="termdef" title="definition: options">options</a> that will result in <a href="#def-Web-Content" class="termdef" title="definition: web content">accessible web content (WCAG)</a> are <a href="#def-At-Least-As-Prominent" class="termdef" title="definition: At Least As Prominent">at least as prominent</a> as options that will not. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

[Implementing B.2.2.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b221)

#### <span id="sc_b222"></span> B.2.2.2 Setting Accessibility Properties (WCAG):

If the authoring tool provides mechanisms to set <a href="#def-Web-Content-Properties" class="termdef" title="definition: web content properties">web content properties</a> (e.g. attribute values), then mechanisms are also provided to set web content properties related to <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">accessibility information (WCAG)</a>. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   *Note:* For the prominence of the mechanisms, see [Success Criterion B.4.1.4](#sc_b414).

[Implementing B.2.2.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b222)

### <span id="gl_b23"></span> Guideline B.2.3: Assist authors with managing alternative content for non-text content. <span class="gl-only">\[[Implementing B.2.3](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_b23)\]</span>

Rationale: Improperly generated <a href="#def-Alternative-Content" class="termdef" title="definition: alternative content">alternative content</a> can create <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: web content accessibility problem">web content accessibility problems (WCAG)</a> and interfere with accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a>.  
*Note:* This guideline only applies when <a href="#def-Non-Text-Objects" class="termdef" title="definition: non-text content">non-text content</a> is specified by <a href="#def-Author" class="termdef" title="definition: authors">authors</a> (e.g. inserting an image). When non-text content is <span class="sc"><a href="#def-Content-Auto-Gen" class="termdef" title="definition: automatically-generated content">automatically</a></span> added by the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, see [Guideline B.1.1](#gl_b11).

#### <span id="sc_b231"></span> B.2.3.1 Alternative Content is Editable (WCAG):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides functionality for adding non-text content, then <a href="#def-Author" class="termdef" title="definition: authors">authors</a> are able to modify <a href="#def-Associated-Alternative-Content" class="termdef" title="definition: alternative content">programmatically associated</a> <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for non-text content</a>. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   *Note:* An exception can be made when the non-text content is known to be decoration, formatting, invisible or a CAPTCHA.

[Implementing B.2.3.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b231)

#### <span id="sc_b232"></span> B.2.3.2 Automating Repair of Text Alternatives:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not attempt to <a href="#def-Repairing" class="termdef" title="definition: repairing">repair</a> <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for non-text content</a> or the following are all true: <span class="level">(**Level A**)</span>

-   **(a) No Generic or Irrelevant Strings:** Generic strings (e.g. "image") and irrelevant strings (e.g. the file name, file format) are not used as text alternatives; and
-   **(b) In-Session Repairs:** If the repair attempt occurs during an authoring session, <a href="#def-Author" class="termdef" title="definition: authors">authors</a> have the opportunity to accept, modify, or reject the repair attempt prior to insertion of the text alternative into the content; and
-   **(c) Out-of-Session Repairs:** If the repair attempt occurs after an <span class="sc-title"><a href="#def-End-Auth-Session" class="termdef" title="definition: end of an authoring session">authoring session has ended</a></span>, the repaired text alternatives are indicated during subsequent authoring sessions (if any) and authors have the opportunity to accept, modify, or reject the repair strings prior to insertion in the content.

[Implementing B.2.3.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b232)

#### <span id="sc_b233"></span> B.2.3.3 Save for Reuse:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides the functionality for adding non-text content, when <a href="#def-Author" class="termdef" title="definition: authors">authors</a> enter <a href="#def-Associated-Alternative-Content" class="termdef" title="definition: alternative content">programmatically associated</a> <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for non-text content</a>, then both of the following are true: <span class="level">(**Level AAA**)</span>

-   **(a) Save and Suggest:** The text alternatives are automatically saved and suggested by the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, if the same non-text content is reused; and
-   **(b) Edit Option:** The author has the <a href="#def-Option" class="termdef" title="definition: options">option</a> to edit or delete the saved text alternatives.

[Implementing B.2.3.3](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b233)

### <span id="gl_b24"></span> Guideline B.2.4: Assist authors with accessible templates. <span class="gl-only">\[[Implementing B.2.4](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_b24)\]</span>

Rationale: Providing <a href="#def-Accessible-Template" class="termdef" title="definition: accessible templates">accessible templates (WCAG)</a> can have several benefits, including: immediately improving the <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible web content">accessibility of the web content (WCAG)</a> of <span class="sc">being edited</span>, reducing the effort required of <a href="#def-Author" class="termdef" title="definition: author">authors</a>, and demonstrating the importance of accessible web content (WCAG).

#### <span id="sc_b241"></span> B.2.4.1 Accessible Template Options (WCAG):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Template" class="termdef" title="definition: template">templates</a>, then there are <a href="#def-Accessible-Template" class="termdef" title="definition: accessible templates">accessible template (WCAG)</a> <a href="#def-Option" class="termdef" title="definition: options">options</a> for a <a href="#def-Range" class="termdef" title="definition: range">range</a> of template uses. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

[Implementing B.2.4.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b241)

#### <span id="sc_b242"></span> B.2.4.2 Identify Template Accessibility:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes a <a href="#def-Template-Selection-Mechanism" class="termdef" title="definition: template selection mechanism">template selection mechanism</a> and provides any non-<a href="#def-Accessible-Template" class="termdef" title="definition: accessible templates">accessible template (WCAG)</a> <a href="#def-Option" class="termdef" title="definition: options">options</a>, then the template selection mechanism can display distinctions between the accessible and non-accessible options. <span class="level">(**Level AA**)</span>

-   *Note:* The distinction can involve providing information for the accessible templates, the non-accessible templates or both.

[Implementing B.2.4.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b242)

#### <span id="sc_b243"></span> B.2.4.3 Author-Created Templates:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes a <a href="#def-Template-Selection-Mechanism" class="termdef" title="definition: template selection mechanism">template selection mechanism</a> and allows <a href="#def-Author" class="termdef" title="definition: authors">authors</a> to create new non-<a href="#def-Accessible-Template" class="termdef" title="definition: accessible templates">accessible templates (WCAG)</a>, then authors can enable the template selection mechanism to display distinctions between accessible and non-accessible templates that they create. <span class="level">(**Level AA**)</span>

-   *Note:* The distinction can involve providing information for the accessible templates (WCAG), the non-accessible templates or both.

[Implementing B.2.4.3](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b243)

#### <span id="sc_b244"></span> B.2.4.4 Accessible Template Options (Enhanced):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Template" class="termdef" title="definition: template">templates</a>, then all of the templates are <a href="#def-Accessible-Template" class="termdef" title="definition: accessible templates">accessible template (to WCAG Level AA)</a>. <span class="level">(**Level AAA**)</span>

[Implementing B.2.4.4](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b244)

### <span id="gl_b25"></span> Guideline B.2.5: Assist authors with accessible pre-authored content. <span class="gl-only">\[[Implementing B.2.5](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_b25)\]</span>

Rationale: Providing <a href="#def-Accessible-Preauthored-Content" class="termdef" title="definition: accessible pre-authored content">accessible pre-authored content (WCAG)</a> (e.g. clip art, synchronized media, widgets) can have several benefits, including: immediately improving the <span class="sc"><a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">accessibility of web content (WCAG)</a></span> being edited, reducing the effort required of <a href="#def-Author" class="termdef" title="definition: author">authors</a>, and demonstrating the importance of accessibility.

#### <span id="sc_b251"></span> B.2.5.1 Accessible Pre-Authored Content Options:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Preauthored-Content" class="termdef" title="definition: pre-authored content">pre-authored content</a>, then a range of <span class="rationale"><a href="#def-Accessible-Preauthored-Content" class="termdef" title="definition: accessible pre-authored content">accessible pre-authored content (to WCAG Level AA)</a></span> <a href="#def-Option" class="termdef" title="definition: options">options</a> are provided. <span class="level">(**Level AA**)</span>

[Implementing B.2.5.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b251)

#### <span id="sc_b252"></span> B.2.5.2 Identify Pre-Authored Content Accessibility:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes a <a href="#def-Preauthored-Content-Selection-Mechanism" class="termdef" title="definition: pre-authored content selection mechanism">pre-authored content selection mechanism</a> and provides any non-<a href="#def-Accessible-Preauthored-Content" class="termdef" title="definition: accessible pre-authored content">accessible pre-authored content (WCAG Level AA)</a> <a href="#def-Option" class="termdef" title="definition: options">options</a>, then the selection mechanism can display distinctions between the accessible and non-accessible options. <span class="level">(**Level AA**)</span>

-   *Note:* The distinction can involve providing information for the accessible pre-authored content, the non-accessible pre-authored content or both.

[Implementing B.2.5.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b252)

<span id="principle_b3"></span> Principle B.3: Authors are supported in improving the accessibility of existing content
-----------------------------------------------------------------------------------------------------------------------

### <span id="gl_b31"></span> Guideline B.3.1: Assist authors in checking for accessibility problems. <span class="gl-only">\[[Implementing B.3.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_b31)\]</span>

Rationale: When <a href="#def-Checking" class="termdef" title="definition: checking">accessibility checking</a> is an integrated function of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, it helps make <a href="#def-Author" class="termdef" title="definition: author">authors</a> aware of <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: Web content accessibility problem">web content accessibility problems (WCAG)</a> during the authoring process, so they can be immediately addressed.

#### <span id="sc_b311"></span> B.3.1.1 Checking Assistance (WCAG):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Author" class="termdef" title="definition: authors">authors</a> with the ability to add or modify <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> in such a way that a [WCAG 2.0](#conf-rel-wcag) success criterion can be violated, then accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> for that success criterion is provided (e.g. an HTML authoring tool that inserts images should check for alternative text; a <a href="#def-Video" class="termdef" title="definition: video">video</a> authoring tool with the ability to edit text tracks should check for captions). <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   *Note:* <a href="#def-Automated-Checking" class="termdef" title="definition: automated checking">Automated</a> and <a href="#def-Semi-Automated-Checking" class="termdef" title="definition: semi-automated checking">semi-automated checking</a> is possible (and encouraged) for many types of <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: Web content accessibility problem">web content accessibility problems (WCAG)</a>. However, <a href="#def-Manual-Checking" class="termdef" title="definition: manual checking">manual checking</a> is the minimum requirement to meet this success criterion. In manual checking, the authoring tool provides <a href="#def-Author" class="termdef" title="definition: author">authors</a> with instructions for detecting problems, which authors carry out by themselves. For more information on checking, see [Implementing ATAG 2.0 - Appendix B: Levels of Checking Automation](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#checking-types).

[Implementing B.3.1.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b311)

#### <span id="sc_b312"></span> B.3.1.2 Help Authors Decide:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Checking" class="termdef" title="definition: checking">accessibility checking</a> that relies on <a href="#def-Author" class="termdef" title="definition: authors">authors</a> to decide whether potential web content accessibility problems (WCAG) are correctly identified (i.e. <a href="#def-Manual-Checking" class="termdef" title="definition: manual checking">manual checking</a> and <a href="#def-Semi-Automated-Checking" class="termdef" title="definition: semi-automated checking">semi-automated checking</a>), then the accessibility checking process provides instructions that describe how to decide. <span class="level">(**Level A**)</span>

[Implementing B.3.1.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b312)

#### <span id="sc_b313"></span> B.3.1.3 Help Authors Locate:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Checking" class="termdef" title="definition: checking">checks</a> that require <a href="#def-Author" class="termdef" title="definition: author">authors</a> to decide whether a potential <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: Web content accessibility problem">web content accessibility problem (WCAG)</a> is correctly identified (i.e. <a href="#def-Manual-Checking" class="termdef" title="definition: manual checking">manual checking</a> and <a href="#def-Semi-Automated-Checking" class="termdef" title="definition: semi-automated checking">semi-automated checking</a>), then the relevant content is identified to the authors. <span class="level">(**Level A**)</span>

-   *Note:* Depending on the nature of the <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> and the scope of the potential web content accessibility problem (WCAG), identification might involve highlighting elements or renderings of elements, displaying line numbers, or providing instructions.

[Implementing B.3.1.3](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b313)

#### <span id="sc_b314"></span> B.3.1.4 Status Report:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Checking" class="termdef" title="definition: checking">checks</a>, then <a href="#def-Author" class="termdef" title="definition: authors">authors</a> can receive an accessibility status report based on the results of the accessibility checks. <span class="level">(**Level AA**)</span>

-   *Note:* The format of the accessibility status report is not specified and they might include a listing of <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: Web content accessibility problem">problems</a> detected or a [WCAG 2.0](#conf-rel-wcag) conformance level, etc.

[Implementing B.3.1.4](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b314)

#### <span id="sc_b315"></span> B.3.1.5 Programmatic Association of Results:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Checking" class="termdef" title="definition: checking">checks</a>, then the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> can <a href="#def-Associated-Alternative-Content" class="termdef" title="definition: alternative content">programmatically associate</a> accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> results with the <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that was checked. <span class="level">(**Level AA**)</span>

[Implementing B.3.1.5](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b315)

### <span id="gl_b32"></span> Guideline B.3.2: Assist authors in repairing accessibility problems. <span class="gl-only"> \[[Implementing B.2.3](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_b32)\] </span>

Rationale: When <a href="#def-Repairing" class="termdef" title="definition: repairing">repair</a> is an integral part of the authoring process, it greatly enhances the utility of <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> and increases the likelihood that <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: web content accessibility problems">web content accessibility problems (WCAG)</a> will be properly addressed.

#### <span id="sc_b321"></span> B.3.2.1 Repair Assistance (WCAG):

If <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> (see [Success Criterion B.3.1.1](#sc_b311)) can detect that a [WCAG 2.0](#conf-rel-wcag) success criterion is not met, then <a href="#def-Repairing" class="termdef" title="definition: repairing">repair</a> suggestion(s) are provided: <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   *Note:* <a href="#def-Automated-Repairing" class="termdef" title="definition: automated checking">Automated</a> <a href="#def-Automated-Checking" class="termdef" title="definition: automated checking">and</a> <a href="#def-Semi-Automated-Repairing" class="termdef" title="definition: semi-automated checking">semi-automated repair</a> is possible (and encouraged) for many types of <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: web content accessibility problems">web content accessibility problems (WCAG)</a>. However, <a href="#def-Manual-Repairing" class="termdef" title="definition: manual repairing">manual repair</a> is the minimum requirement to meet this success criterion. In manual repair, the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Author" class="termdef" title="definition: author">authors</a> with instructions for repairing problems, which authors carry out by themselves. For more information on repair, see [Implementing ATAG 2.0 - Appendix C: Levels of Repair Automation](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#repair-types).

[Implementing B.3.2.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b321)

<span id="principle_b4"></span> Principle B.4: Authoring tools promote and integrate their accessibility features
-----------------------------------------------------------------------------------------------------------------

### <span id="gl_b41"></span> Guideline B.4.1: Ensure the availability of features that support the production of accessible content. <span class="gl-only"> \[[Implementing B.4.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_b41)\]</span>

Rationale: The <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a> will be more likely to be used, if they are turned on and are afforded reasonable <a href="#def-Prominence" class="termdef" title="definition: prominence">prominence</a> within the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a>.

#### <span id="sc_b411"></span> B.4.1.1 Features Active by Default:

All <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a> are turned on by default. <span class="level">(**Level A**)</span>

[Implementing B.4.1.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b411)

#### <span id="sc_b412"></span> B.4.1.2 Option to Reactivate Features:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not include the <span class="sc-bullet"><a href="#def-Option" class="termdef" title="definition: option">option</a></span> to turn off its <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a> or features which have been turned off can be turned back on. <span class="level">(**Level A**)</span>

[Implementing B.4.1.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b412)

#### <span id="sc_b413"></span> B.4.1.3 Feature Deactivation Warning:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not include the <span class="sc-bullet"><a href="#def-Option" class="termdef" title="definition: option">option</a></span> to turn off its <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a> or, if these features can be turned off, <a href="#def-Author" class="termdef" title="definition: authors">authors</a> are informed that this may increase the risk of <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: web content accessibility problem">content accessibility problems (WCAG)</a>. <span class="level">(**Level AA**)</span>

[Implementing B.4.1.3](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b413)

#### <span id="sc_b414"></span> B.4.1.4 Feature Prominence:

All <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a> are <a href="#def-At-Least-As-Prominent" class="termdef" title="definition: At Least As Prominent">at least as prominent</a> as features related to either invalid <a href="#def-Markup" class="termdef" title="definition: markup">markup</a>, syntax errors, spelling errors or grammar errors. <span class="level">(**Level AA**)</span>

[Implementing B.4.1.4](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b414)

### <span id="gl_b42"></span> Guideline B.4.2: Ensure that documentation promotes the production of accessible content. <span class="gl-only">\[[Implementing B.4.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#gl_b42)\]</span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: author">authors</a> need support in determining how to use <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content production features</a> (e.g. how to respond to <a href="#def-Prompt" class="termdef" title="definition: prompt">prompts</a> for <span class="sc-bullet"><a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives</a></span>, how to use accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> tools). Demonstrating accessible authoring as routine practice, or at least not demonstrating inaccessible practices, will help to encourage acceptance of accessibility by some authors.

#### <span id="sc_b421"></span> B.4.2.1 Model Practice (WCAG):

A <a href="#def-Range" class="termdef" title="definition: range">range</a> of examples in the <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a> (e.g. <a href="#def-Markup" class="termdef" title="definition: markup">markup</a>, screen shots of <a href="#def-WYSIWYG" class="termdef" title="definition: WYSIWYG">WYSIWYG</a> <a href="#def-Editing-View" class="termdef" title="definition: editing views">editing-views</a>) demonstrate <a href="#def-Acc-Auth-Practice" class="termdef" title="definition: accessible authoring practices">accessible authoring practices (WCAG)</a>. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

[Implementing B.4.2.1](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b421)

#### <span id="sc_b422"></span> B.4.2.2 Feature Instructions:

Instructions for using any <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a> appear in the <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a>. <span class="level">(**Level A**)</span>

[Implementing B.4.2.2](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b422)

#### <span id="sc_b423"></span> B.4.2.3 Tutorial:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides a <a href="#def-Tutorial" class="termdef" title="definition: tutorial">tutorial</a> for an accessible authoring process that is specific to that authoring tool. <span class="level">(**Level AAA**)</span>

[Implementing B.4.2.3](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b423)

#### <span id="sc_b424"></span> B.4.2.4 Instruction Index:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a> contains an index to the instructions for using any <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a>. <span class="level">(**Level AAA**)</span>

[Implementing B.4.2.4](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#sc_b424)

------------------------------------------------------------------------

<span id="Conformance"></span> Conformance
------------------------------------------

This section is <a href="#def-Normative" class="termdef" title="definition: normative">normative</a>.

Conformance means that the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> satisfies the [applicable](#conf-applic) success criteria defined in the [guidelines](#guidelines) section. This conformance section describes conformance and lists the conformance requirements.

### <span id="conf-req"></span>Conformance Requirements

#### <span id="conf-sc-satisfaction"></span>Success Criteria Satisfaction

The first step in determining ATAG 2.0 conformance is to assess whether the Success Criteria have been satisfied. The potential answers are:

-   **<span id="conf-applic"></span>Not Applicable:** The ATAG 2.0 [definition of authoring tool](#def-Authoring-Tool) is inclusive and, as such, it covers software with a wide range of capabilities and contexts of operation. In order to take into account authoring tools with limited feature sets (e.g. a photo editor, a CSS editor, a status update field in a social networking application), many of the ATAG 2.0 success criteria are conditional, applying only to authoring tools with the given features(s). If a conformance claim is made, an explanation of why the success criterion is not applicable is **required**.
-   **Yes:** In the case of some success criteria, this will include a [Level](#conf-levels) (A, AA, or AAA) with reference to WCAG 2.0. If a [conformance claim](#conf-claim) is made, an explanation is **optional**, yet strongly recommended.
-   **No:** If a conformance claim is made, an explanation is **optional**, yet strongly recommended.

#### <span id="conf-rel-wcag"></span> Relationship to the Web Content Accessibility Guidelines (WCAG) 2.0

At the time of publishing, WCAG 2.0 \[[WCAG20](#ref-WCAG20)\] is the current W3C Recommendation regarding web content accessibility. For this reason, ATAG 2.0 refers to WCAG 2.0 when setting requirements for (1) the accessibility of <a href="#def-Web-Based-UI" class="termdef" title="definition: authoring tool user interface (Web-based)">web-based authoring tool user interfaces</a> (in [Part A](#part_a)) and (2) how <a href="#def-Author" class="termdef" title="definition: authors">authors</a> should be enabled, supported, and guided toward producing web content that is more accessible to <a href="#def-End-Users" class="termdef" title="definition: end user">end users</a> with disabilities (in [Part B](#part_b)).

In particular, ATAG 2.0 refers to WCAG 2.0 within its definition of the term "<a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible web content">accessible content</a>" (and related terms, such as "<a href="#def-Accessible-Template" class="termdef" title="definition: accessible templates">accessible template</a>"). The definition of "accessible content" is content that would conform to WCAG 2.0, at either Level A, AA, or AAA, under the assumption that any web content technologies that are relied upon to satisfy the WCAG 2.0 success criteria are accessibility supported. The phrase "at either Level A, AA, or AAA" takes into account that the definition of "accessible content" can differ depending on the context of use (e.g. in a Level A success criterion of ATAG 2.0 versus in a Level AAA success criterion). The definition also includes two notes:

-   The first is "If accessibility support for the relied upon technologies is lacking, then the content will not conform to WCAG 2.0 and one or more groups of end-users with disabilities will likely experience difficulty accessing the content."
-   The second is "Conformance to WCAG 2.0, even at the highest level (i.e. Level AAA), still may not make content 'accessible to individuals with all types, degrees, or combinations of disability'." In order to highlight success criteria or defined terms in ATAG 2.0 that depend on WCAG 2.0, they are marked with the parenthetical: "(WCAG)".

##### <span id="conf-note"></span>Note on "accessibility-supported ways of using technologies":

Part of conformance to WCAG 2.0 is the requirement that "only accessibility-supported ways of using technologies are relied upon to satisfy the WCAG 2.0 success criteria. Any information or functionality that is provided in a way that is not accessibility supported is also available in a way that is *accessibility supported*." In broad terms, WCAG 2.0 considers a <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technology</a> to be "accessibility supported" when (1) the way that the web content technology is used is supported by users' <a href="#def-Assistive-Technology" class="termdef" title="definition: assistive technology">assistive technology</a> and (2) the web content technology has accessibility-supported <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agents</a> that are available to end users.

This concept is not easily extended to <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> because many authoring tools can be installed and used in a variety of environments with differing availabilities for assistive technologies and user agents (e.g. private intranets versus public websites, monolingual sites versus multilingual sites). Therefore:

> **ATAG 2.0 does not include the accessibility-supported requirement. As a result, ATAG 2.0 success criteria do not refer to WCAG 2.0 "conformance", and instead refer to "meeting WCAG 2.0 success criteria".**

Once an authoring tool has been installed and put into use, it would be possible to assess the WCAG 2.0 conformance of the <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that the authoring tool produces, including whether the WCAG 2.0 accessibility-supported requirement is met. However, this WCAG 2.0 conformance assessment would be completely independent of the authoring tool's conformance with ATAG 2.0.

#### <span id="conf-levels"></span> Conformance Options and Levels

There are two types of conformance, each with three levels:

##### <span id="conf-atag-conf"></span> ATAG 2.0 Conformance (Level A, AA, or AAA)

This conformance option *may* be selected when an <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> can be used to produce <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible web content">accessible web content (WCAG)</a> without additional tools or components. The level of conformance is determined as follows:

-   **Level A:** The authoring tool satisfies all of the [applicable](#conf-applic) Level A success criteria.
-   **Level AA:** The authoring tool satisfies all of the applicable Level A and Level AA success criteria.
-   **Level AAA:** The authoring tool satisfies all of the applicable success criteria.

*Note 1:* The [Part A Conformance Applicability Notes](#part_a_applic_notes) and [Part B Conformance Applicability Notes](#part_b_applic_notes) must be applied.  
*Note 2:* If the minimum conformance level (Level A) has not been achieved (i.e. at least one applicable Level A success criterion has not been met), it is still beneficial to publish a statement specifying which success criteria were met.

##### <span id="conf-partial-component"></span>Partial ATAG 2.0 Conformance - Process Component (Level A, AA, or AAA)

This conformance option *may* be selected when an <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> would require additional tools or components in order to conform as a complete authoring system. This option may be used for components with very limited functionality (e.g. a plug-in) up to nearly complete systems (e.g. a markup editor that only lacks accessibility checking functionality).

The level of conformance (A, AA, or AAA) is determined as above except that, for any "no" answers, the tool must not prevent the success criteria from being met by another authoring process component as part of a complete authoring system.

*Note 1:* Authoring tools would not be able to meet partial conformance if they prevent additional authoring process components from meeting the failed success criteria (e.g. for security reasons).  
*Note 2:* The [Part A Conformance Applicability Notes](#part_a_applic_notes) and [Part B Conformance Applicability Notes](#part_b_applic_notes) must be applied.

##### <span id="conf-partial-platform-limits"></span>Partial ATAG 2.0 Conformance - Platform Limitations (Level A, AA, or AAA)

This conformance option may be selected when an <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> is unable to meet one or more success criteria because of intrinsic limitations of the <a href="#def-Platform" class="termdef" title="definition: platform">platform</a> (e.g. lacking a <a href="#def-Accessibility-Platform-Service" class="termdef" title="definition: accessibility platform architecture">platform accessibility service</a>). The (optional) explanation of conformance claim results should explain what platform features are missing.

#### <span id="conf-techs-produced"></span> Web Content Technologies Produced:

<a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">Authoring tools</a> conform to ATAG 2.0 with respect to the production of specific <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technologies</a> (e.g. Level A Conformance with respect to the production of XHTML 1.0).

If an authoring tool is capable of producing multiple web content technologies, then the conformance may include only a subset of these technologies as long as the subset includes both any technologies that the <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">developer</a> sets for <a href="#def-Content-Auto-Gen" class="termdef" title="definition: automatically-generated content">automatically-generated content</a> or that the developer sets as the default for <a href="#def-Content-Author-Gen" class="termdef" title="definition: author generated content">author-generated content</a>. The subset may include "interim" formats that are not intended for <a href="#def-Publishing" class="termdef" title="definition: publishing">publishing</a> to <a href="#def-End-Users" class="termdef" title="definition: end user">end users</a>, though this is not required.

#### <span id="conf-live-publishing"></span>Live publishing authoring tools:

ATAG 2.0 may be applied to authoring tools with workflows that involve live authoring of web content (e.g. some collaborative tools). Due to the challenges inherent in real-time publishing, conformance to [Part B](#part_b) of ATAG 2.0 for these authoring tools may involve some combination of support before (e.g. support in preparing accessible slides), during (e.g. live captioning as WCAG 2.0 requires at Level AA) and after the live <span class="sc"><a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">authoring session</a></span> (e.g. the ability to add a transcript to the archive of a presentation that was initially published in real-time). For more information, see [Implementing ATAG 2.0 - Appendix E: Authoring Tools for Live Web Content](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#realtime-production).

### <span id="conf-claim"></span> Conformance Claims (Optional)

*Note:* As with any software application, authoring tools can be collections of components. A conformance claim can only be made by a responsible entity. Any other attempted "claims" are, in fact, reviews.

#### <span id="conf-claim-req-components"></span> Required Components of a Conformance Claim

1.  **Date** of the claim.
2.  **ATAG 2.0** **version** and **URI**
3.  [**Conformance level**](#conf-levels) satisfied.
4.  **Authoring tool information:** The name of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> and sufficient additional information to specify the version (e.g. vendor name, version number (or version range), required patches or updates, <a href="#def-Human-Language" class="termdef" title="definition: human language">human language</a> of the user interface or <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a>).
    -   *Note:* If the authoring tool is a collection of software applications (e.g. a <a href="#def-Markup" class="termdef" title="definition: markup">markup</a> editor, an image editor, and a validation tool), then information must be provided separately for each application, although the conformance claim will treat them as a whole.
5.  **Platform(s):** The <a href="#def-Platform" class="termdef" title="definition: platform">platform(s)</a> upon which the authoring tool operates:
    -   <span id="conf-user-agents"></span>For **<a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a> platform(s)** (used to evaluate <a href="#def-Web-Based-UI" class="termdef" title="definition: authoring tool user interface (Web-based)">web-based authoring tool user interfaces</a>): provide the name and version information of the user agent(s).
    -   <span id="conf-not-user-agents"></span>For **platforms that are not <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agents</a>** (used to evaluate <a href="#def-Non-Web-Based" class="termdef" title="definition: authoring tool user interface (non-Web-Based)">non-web-based authoring tool user interfaces</a>): provide the name and version information of the platform(s) (e.g. desktop operating system, mobile operating system, cross-OS environment) and the name and version of the <a href="#def-Accessibility-Platform-Service" class="termdef" title="definition: platform accessibility architectur">platform accessibility service(s)</a> employed.
6.  A list of the **web content technologies produced by the authoring tool that are included in the claim**. If there are any <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technologies</a> [produced](#conf-techs-produced) by the authoring tool that are not included in the conformance claim, these must be listed separately. If the authoring tool produces any web content technologies by default, then these must be included.
7.  **Results for each of the success criteria:** Yes, No, [Not Applicable](#conf-applic)

#### <span id="conf-claim-optional-components"></span> Optional Components of a Conformance Claim

In addition to the required components of a conformance claim above, consider providing additional information to assist authors. Recommended additional information includes:

1.  <span id="conf-explanation-results"></span> An **explanation of the success criteria results** (Yes, No). (strongly recommended)
2.  Information about how the web content technologies produced can be used to create <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible Web content">accessible web content</a> (e.g. links to technology-specific WCAG 2.0 techniques).
3.  Information about any additional steps taken that go beyond the success criteria to enhance accessibility.
4.  A machine-readable metadata version of the conformance claim.
5.  A description of the authoring tool that identifies the types of editing-views that it includes.

### <span id="conf-disclaimer"></span> Disclaimer

Neither W3C, WAI, nor AUWG take any responsibility for any aspect or result of any ATAG 2.0 [conformance claim](#conf-claim) that has not been published under the authority of the W3C, WAI, or AUWG.

------------------------------------------------------------------------

<span id="glossary"></span>Appendix <span class="gl-only">A</span>: Glossary
----------------------------------------------------------------------------

This section is <a href="#def-Normative" class="termdef" title="definition: normative">normative</a>.

This appendix contains definitions for all of the significant/important/unfamiliar terms used in the normative parts of this standard, including terms used in the [Conformance](#Conformance) section. Please consult <http://www.w3.org/TR/qaframe-spec/> for more information on the role of definitions in standards quality.

<span id="def-Accessibility-Problem"></span>accessibility problems  
ATAG 2.0 recognizes two types of accessibility problems:

-   <span id="def-Authoring-Interface-Accessibility-Problem"></span>authoring tool user interface accessibility problems: Aspects of an <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> that does not meet a success criterion in [Part A](#part_a) of ATAG 2.0.
-   <span id="def-Web-Content-Accessibility-Problem"></span>web content accessibility problems (WCAG): Aspects of <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that does not meet a [WCAG 2.0](#conf-rel-wcag) success criterion (Level A, AA or AAA).

<span id="def-Accessibility-Information">accessibility information (WCAG)</span>   
Information that <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> must contain in order to meet a [WCAG 2.0](#conf-rel-wcag) success criterion (Level A, AA or AAA). Examples include: <a href="#def-Associated-Alternative-Content" class="termdef" title="definition: alternative content">programmatically associated alternative content</a> (e.g. text alternatives for images), <a href="#def-Role" class="termdef" title="definition: role">role</a>, and state information for widgets, <a href="#def-Relationships" class="termdef" title="definition: relationships">relationships</a> within complex tables).  
*Note:* For the purposes of ATAG 2.0, only <a href="#def-Programmatically-Determined" class="termdef" title="definition: programmatically determined">programmatically determinable</a> accessibility information qualifies. For additional examples, see [Appendix A of the Implementing ATAG 2.0 document](http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/#prompting-types).

<span id="def-Accessible-Content-Support-Features">accessible content support features</span>  
Any features of an <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> that directly support <a href="#def-Author" class="termdef" title="definition: authors">authors</a> in increasing the accessibility of the <a href="#def-Web-Content" class="termdef" title="definition: web content"></a> <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a>. These are features that must be present to meet the success criteria in [Part B](#part_b) of ATAG 2.0.

<span id="def-Alternative-Content"></span>alternative content  
<a href="#def-Web-Content" class="termdef" title="definition: web content">Web content</a> that is used in place of other content that some people are not able to access. Alternative content fulfills essentially the same function or purpose as the original content. [WCAG 2.0](#conf-rel-wcag) recognizes several general types of alternative content:

-   <span id="def-Text-Alternatives"></span>text alternatives for non-text content: Text that is <a href="#def-Associated-Alternative-Content" class="termdef" title="definition: alternative content">programmatically associated</a> with <a href="#def-Non-Text-Objects" class="termdef" title="definition: non-text objects">non-text content</a> or referred to from text that is programmatically associated with non-text content. For example, an image of a chart might have two text alternatives: a description in the paragraph after the chart and a short text alternative for the chart indicating in words that a description follows.
-   <span id="def-Time-Based-Alternatives"></span>alternatives for time-based media: <a href="#def-Web-Content" class="termdef" title="definition: web content">Web content</a> that serves the same function or purpose as one or more tracks in a time-based media presentation. This includes: captions, audio descriptions, extended audio descriptions, sign language interpretation as well as correctly sequenced text descriptions of time-based visual and auditory information that also is capable of achieving the outcomes of any interactivity in the time-based presentation.
-   <span id="def-Media-Alternatives"></span>media alternative for text: Media that presents no more information than is already presented in text (directly or via text alternatives). A media alternative for text is provided for people who benefit from alternate representations of text. Media alternatives for text may be audio-only, video-only (including sign-language video), or audio-video.

Importantly, from the perspective of authoring tools, alternative content may or may not be:

-   <span id="def-Associated-Alternative-Content"></span>programmatically associated alternative content: Alternative content whose location and purpose can be <a href="#def-Programmatically-Determined" class="termdef" title="definition: programmatically determined">programmatically determined</a> from the original content for which it is serving as an alternative. For example, a paragraph might serve as a text alternative for an image, but it is only programmatically associated if this relationship is properly encoded (e.g. by "aria-labeledby").  
    *Note:* ATAG 2.0 typically refers to programmatically associated alternative content.

<span id="def-Assistive-Technology">assistive technology</span>   
Software (or hardware), separate from the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, that provides functionality to meet the requirements of people with disabilities (<a href="#def-Author" class="termdef" title="definition: authors">authors</a> and <a href="#def-End-Users" class="termdef" title="definition: end user">end users</a>). Some authoring tools may also provide <a href="#def-Direct-Accessibility" class="termdef" title="definition: direct accessibility features">direct accessibility features</a>. Examples include:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual, and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order improve the visual readability of rendered text and images;
-   screen readers, which are used by people who are blind to read textual information through synthesized speech or Braille;
-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;
-   speech recognition software, which are used by some people who have some physical disabilities;
-   alternative keyboards, which are used by some people with physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff, and other special input devices);
-   alternative pointing devices, which are used by some people with physical disabilities to simulate mouse pointing and button activations.

<span id="def-Audio">audio</span>   
The technology of sound reproduction. Audio can be created synthetically (including speech synthesis), recorded from real-world sounds, or both.

<span id="def-Author-Actions-Prevent">author actions preventing generation of accessible web content</span>  
When the actions of <a href="#def-Author" class="termdef" title="definition: authors">authors</a> prevent <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> from generating <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible web content">accessible web content (WCAG)</a>. Examples include: turning off <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a>, ignoring <a href="#def-Prompt" class="termdef" title="definition: prompt">prompts</a> for <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">accessibility information (WCAG)</a>, providing faulty accessibility information (WCAG) at prompts, modifying the authoring tool (e.g. via scripting, macros), and installing <a href="#def-Plugin" class="termdef" title="definition: plug-in">plug-ins</a>.

<span id="def-Author"></span>authors  
People who use <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> to create or modify <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a>. The term may cover roles such as content authors, designers, programmers, publishers, testers, etc. (see [Part B Conformance Applicability Note 6: Multiple authoring roles](#part_b_applic_note_6)). Some authoring tools control who may be an author by managing <a href="#def-Authoring-Permission" class="termdef" title="definition: author permission">author permissions</a>.

<span id="def-Authoring-Permission">author permission</span>  
Authorization that allows modification of given <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a>.

<span id="def-Authoring-Action"></span>authoring action  
Any action that <a href="#def-Author" class="termdef" title="definition: author">authors</a> can take using the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> that results in editing <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> (e.g. typing text, deleting, inserting an <a href="#def-Element" class="termdef" title="definition: element">element</a>, applying a <a href="#def-Template" class="termdef" title="definition: template">template</a>). In contrast, most authoring tool user interfaces also enable actions that do not edit content (e.g. saving, <a href="#def-Publishing" class="termdef" title="definition: publishing">publishing</a>, setting preferences, viewing <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a>).

-   <span id="def-Reversible-Action"></span>reversible authoring action: An <a href="#def-Authoring-Action" class="termdef" title="definition: authoring action">authoring action</a> that can be immediately and completely undone by the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> upon a cancel request by an <a href="#def-Author" class="termdef" title="definition: author">author</a>. Examples of cancel requests include: "cancel", "undo", "redo" (when it used to reverse "undo"), "revert", and "roll-back"  
    *Note:* It is acceptable for an authoring tool to collect a series of text entry actions (e.g. typed words, a series of backspaces) into a single reversible authoring action.

<span id="def-Authoring-Outcome"></span>authoring outcome  
The <a href="#def-Web-Content" class="termdef" title="definition: web content">content</a> or content modifications that result from <a href="#def-Authoring-Action" class="termdef" title="definition: authoring action">authoring actions</a>. Authoring outcomes are cumulative (e.g. text is entered, then styled, then made into a link, then given a title).

<span id="def-Authoring-Practice"></span>authoring practice  
An approach that <a href="#def-Author" class="termdef" title="definition: authors">authors</a> follow to achieve a given <a href="#def-Authoring-Outcome" class="termdef" title="definition: authoring outcome">authoring outcome</a> (e.g. controlling <a href="#def-Presentation" class="termdef" title="definition: presentation">presentation</a> with style sheets). Depending on the design of an <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, authoring practices may be chosen by authors or by the authoring tool. Authoring practices may or may not be:

-   <span id="def-Acc-Auth-Practice"></span>accessible authoring practices (WCAG): An authoring practice in which the <a href="#def-Authoring-Outcome" class="termdef" title="definition: authoring outcome">authoring outcome</a> conforms to [WCAG 2.0](#conf-rel-wcag) at Level A, AA, or AAA. Some accessible authoring practices require <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">accessibility information (WCAG)</a>.

<span id="def-Authoring-Session"></span>authoring session  
A state of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> in which <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> can be edited by an <a href="#def-Author" class="termdef" title="definition: authors">author</a>.

-   <span id="def-End-Auth-Session"></span>end of an authoring session: The point at which the <a href="#def-Author" class="termdef" title="definition: authors">author</a> has no further opportunity to make <a href="#def-Authoring-Action" class="termdef" title="definition: authoring action">authoring actions</a> without starting another <a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">session</a>. The end of an authoring session may be determined by authors (e.g. closing a document, <a href="#def-Publishing" class="termdef" title="definition: publishing">publishing</a>) or by the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> (e.g. when the authoring tool transfers editing permission to another author on a collaborative system).  
    *Note:* The end of the authoring session is distinct from <a href="#def-Publishing" class="termdef" title="definition: publishing">publishing</a>. <a href="#def-Content-Auto-Gen" class="termdef" title="definition: automatically-generated content">Automatic content generation</a> may continue after the end of both the authoring session and initial publishing (e.g. content management system updates).

<span id="def-Authoring-Tool">authoring tool</span>  
Any web-based or non-web-based application(s) that can be used by <a href="#def-Author" class="termdef" title="definition: author">authors</a> (alone or collaboratively) to create or modify <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> for use by other people (other authors or <a href="#def-End-Users" class="termdef" title="definition: end user">end user</a>s).  
*Note 1: "application(s)":* ATAG 2.0 may be conformed to by stand-alone applications or by collections of applications. If a conformance claim is made, then the claim must provide identifying information for each application and also for any required extensions, plug-ins, etc.*  
Note 2: "alone or collaboratively":* Multiple authors may contribute to the creation of web content and, depending on the authoring tool, each author may work with different views of the content and different <a href="#def-Authoring-Permission" class="termdef" title="definition: author permission">author permissions</a>.*  
Note 3: "to create or modify web content":* This clause rules out software that collects data from a person for other purposes (e.g. online grocery order form) and then creates web content from that data (e.g. a web-based warehouse order) without informing the person (however, [WCAG 2.0](#conf-rel-wcag) would still apply). This clause also rules out software used to create content exclusively in non-web content technologies.*  
Note 4: "for use by other people":* This clause rules out the many web applications that allow people to modify web content that only they themselves experience (e.g. web-based email display settings) or that only provide input to automated processes (e.g. library catalog search page).*  
*Examples of software that are generally considered authoring tools under ATAG 2.0:

-   web page authoring tools (e.g. <a href="#def-WYSIWYG" class="termdef" title="definition: WYSIWYG">WYSIWYG</a> HTML editors)
-   software for directly editing source code
-   software for converting to <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technologies</a> (e.g. "Save as HTML" features in office document applications)
-   integrated development environments (e.g. for web application development)
-   software that generates web content on the basis of <a href="#def-Template" class="termdef" title="definition: template">templates</a>, scripts, command-line input or "wizard"-type processes
-   software for rapidly updating portions of web pages (e.g. blogging, wikis, online forums)
-   software for generating/managing entire websites (e.g. content management systems, courseware tools, content aggregators)
-   email clients that send messages using web content technologies
-   multimedia authoring tools
-   software for creating mobile web applications

Examples of software that are not considered authoring tools under ATAG 2.0 (in all cases, WCAG 2.0 still applies if the software is web-based):

-   customizable personal portals: ATAG 2.0 does not apply because the web content being edited is only available to the owner of the portal
-   e-commerce order forms: ATAG 2.0 does not apply because the purpose of an e-commerce order form is to order a product, not communicate with other people via web content, even if the data collected by the form actually does result in web content (e.g. online tracking pages)
-   stand-alone accessibility checkers: ATAG 2.0 does not apply because a stand-alone accessibility checker with no automated or semi-automated repair functionality does not actually modify web content. An accessibility checker with repair functionality or that is considered as part of a larger authoring process would be considered an authoring tool.  

<span id="def-Authoring-Tool-Interface"></span>authoring tool user interface  
The display and control mechanism that <a href="#def-Author" class="termdef" title="definition: authors">authors</a> use to operate the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> software. User interfaces may be non-web-based or web-based or a combination (e.g. a non-web-based authoring tool might have web-based help pages):

-   <span id="def-Non-Web-Based"></span>authoring tool user interface (non-web-based): Any parts of an authoring tool user interface that are not implemented as <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> and instead run directly on a <a href="#def-Platform" class="termdef" title="definition: platform">platform</a> that is not a <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a> (e.g. Windows, Mac OS, Java Virtual Machine, iOS, Android).
-   <span id="def-Web-Based-UI"></span>authoring tool user interface (web-based): Any parts of an authoring tool user interface that are implemented using <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technologies</a> and are accessed by <a href="#def-Author" class="termdef" title="definition: authors">authors</a> via a <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a>.

Authoring tool user interfaces may or may not be:

-   <span id="def-Accessible-Authoring-Interface"></span>accessible authoring tool user interfaces: Authoring tool user interfaces that meet the success criteria of a level in [Part A](#part_a) of ATAG 2.0.

<span id="def-Checking">checking, accessibility</span>   
The process by which <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> is evaluated for <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: web content accessibility problem">web content accessibility problems (WCAG)</a>. ATAG 2.0 recognizes three types of checking, based on increasing levels of automation of the tests:

-   <span id="def-Manual-Checking"></span>manual checking: Checking in which the tests are carried out by <a href="#def-Author" class="termdef" title="definition: authors">authors</a>. This includes the case where authors are aided by instructions or guidance provided by the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, but where authors must carry out the actual test procedure.
-   <span id="def-Semi-Automated-Checking"></span>semi-automated checking: Checking in which the tests are partially carried out by the authoring tool, but where authors' input or judgment is still required to decide or help decide the outcome of the tests.
-   <span id="def-Automated-Checking"></span>automated checking: Checking in which the tests are carried out automatically by the authoring tool without any intervention by authors.

An authoring tool may support any combination of checking types.

<span id="def-Web-Content"></span>content (web content)   
Information and sensory experience to be communicated to the <a href="#def-End-Users" class="termdef" title="definition: end user">end user</a> by means of a <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a>, including code or <a href="#def-Markup" class="termdef" title="definition: markup">markup</a> that defines the content's structure, presentation, and interactions. In ATAG 2.0, the term is primarily used to refer to the output that is produced by the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>. Content produced by authoring tools may include web applications, including those that act as <a href="#def-Web-Based-UI" class="termdef" title="definition: authoring tool user interface (Web-based)">web-based</a> authoring tools. Content may or may not be:

-   <span id="def-Accessible-Web-Content">accessible content (WCAG):</span> Content that would conform to [WCAG 2.0](#conf-rel-wcag), at either Level A, AA, or AAA, assuming that any <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technologies</a> relied upon to satisfy the WCAG 2.0 success criteria are accessibility supported.
    -   *Note 1:* If accessibility support for the relied upon technologies is lacking, then the content will not conform to WCAG 2.0 and one or more groups of end users with disabilities will likely experience difficulty accessing the content.
    -   *Note 2:* Conformance to WCAG 2.0, even at the highest level (i.e. Level AAA), still may not make content "accessible to individuals with all types, degrees, or combinations of disability".
-   <span id="def-Content-Being-Edited">content being edited:</span> The web content that an <a href="#def-Author" class="termdef" title="definition: author">author</a> can modify during an <a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">authoring session</a>. The content being edited may be a complete piece of content (e.g. image, style sheet) or only part of a larger piece of content (e.g. a status update). The content being edited only includes content in <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technologies</a> that the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> supports (e.g. a WYSIWYG HTML editor allows editing of the HTML content of a web page editable, but not the images).

<span id="def-Web-Content-Properties"></span>content properties  
The individual pieces of information that make up the <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> (e.g. the attributes and contents of elements, style sheet information).

<span id="def-Structured-Web-Content"></span>content (structured)   
<a href="#def-Web-Content" class="termdef" title="definition: web content">Web content</a> that includes machine-readable internal structure (e.g. <a href="#def-Markup" class="termdef" title="definition: markup">markup</a> <a href="#def-Element" class="termdef" title="definition: element">elements</a>), as opposed to unstructured content, such as raster image formats or plain <a href="#def-Human-Language" class="termdef" title="definition: human language">human language</a> text.

<span id="def-Content-Generation"></span>content generation (content authoring, content editing)  
The act of specifying the actual <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that will be rendered, played or executed by the <a href="#def-End-Users" class="termdef" title="definition: end user">end user's</a> <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a>. While the precise details of how content is created in any given system may vary widely, responsibility for the generation of content can be any combination of the following:

-   <span id="def-Content-Author-Gen"></span>author generated content: <a href="#def-Web-Content" class="termdef" title="definition: web content">Web content</a> for which <a href="#def-Author" class="termdef" title="definition: author">author</a>s are fully responsible. The author may only be responsible down to a particular level (e.g. when asked to type a text label, the author is responsible for the text, but not for how the label is marked up; when typing <a href="#def-Markup" class="termdef" title="definition: markup">markup</a> in a source <a href="#def-Editing-View" class="termdef" title="definition: editing views">editing-view</a>, the author is not responsible for the fact that UNICODE is used to encode the text ).
-   <span id="def-Content-Auto-Gen"></span>automatically-generated content: Web content for which <a href="#def-Developer" class="termdef" title="definition: authoring tool developer">developer</a>-programmed functionality is fully responsible (e.g. what markup to output when an author requests to start a new document, automatically correcting markup errors).
-   third-party content generation: Web content for which a third-party author is responsible (e.g. community shared <a href="#def-Template" class="termdef" title="definition: template">templates</a>).

<span id="def-Content-Renderings">content rendering</span>  
<a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">User interface</a> functionality that <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> present if they render, play or execute the <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a>. ATAG 2.0 recognizes several types of content renderings:

-   <span id="def-WYSIWYG"></span>conventional renderings (or "WYSIWYG"): When content is rendered in a way that is similar to the default rendering a <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a> would create from the same content. While "WYSIWYG", standing for "What-you-see-is-what-you-get" is the common term, differences between user agents and end user settings mean that in reality there is no single typical <a href="#def-End-Users" class="termdef" title="definition: end user">end user</a> experience; or
-   <span id="def-Unconventional-Renderings"></span>unconventional renderings: When content is rendered differently than it would be in a typical user agent (e.g. rendering an audio file as a graphical waveform); or
-   <span id="def-Partial-Rendering"></span>partial renderings: When some aspects of the content are rendered, played, or executed, but not others (e.g. a frame-by-frame <a href="#def-Video" class="termdef" title="definition: video">video</a> editor renders the graphical, but not the timing aspects, of a video).

<span id="def-Transformation">content transformations</span>  
Processes that take <a href="#def-Web-Content" class="termdef" title="definition: web content">content</a> in one <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technology</a> or non-web content technology (e.g. a word processing format) as input and produce content that has been optimized, restructured or recoded:

-   <span id="def-Optimizing-Transformation">Optimizing Content Transformations:</span> Transformations in which the content technology is not changed and the structural features of the content technology that are employed also stay the same. Changes would not be expected to result in information loss (e.g. removing whitespace, replacing in-line styles with an external style sheet).
-   <span id="def-Restructuring-Transformation">Restructuring Content Transformations:</span> Transformations in which the content technology stays the same, but the structural features of the technology used to markup the content are changed (e.g. linearizing tables, splitting a document into pages.
-   <span id="def-Recoding-Transformation">Recoding Content Transformations:</span> Transformations in which the content technology used to encode the content is changed (e.g. HTML to XHTML, a word processing format to HTML).

*Note:* Clipboard operations, in which content is copied to or pasted from the platform clipboard, are not considered content transformations.

<span id="def-Control-Settings">control settings</span>  
Settings that relate to how <a href="#def-Author" class="termdef" title="definition: author">authors</a> operate the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, for example using the keyboard or mouse.

<span id="def-Developer">developer</span>  
Any entities or individuals responsible for programming the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>. This includes the programmers of any additional software components included by the Claimant in the [conformance claim](#conf-claim). In some cases, development of the authoring tool is complete before <a href="#def-Author" class="termdef" title="definition: authors">authors</a> can use it to <a href="#def-Publishing" class="termdef" title="definition: publishing">publish</a> <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a>. However, in other cases (e.g. some <a href="#def-Web-Based-UI" class="termdef" title="definition: Web-based authoring tool user interface">web-based authoring tools</a>), the developer may continue to modify the authoring tool even after content has been published, such that the content experienced by the <a href="#def-End-Users" class="termdef" title="definition: end user">end user</a> is modified.

<span id="def-Direct-Accessibility">direct accessibility features</span>   
Features of an <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> that provide functionality to meet the requirements of <a href="#def-Author" class="termdef" title="definition: authors">authors</a> with disabilities (e.g. keyboard navigation, zoom features, text-to-speech). Additional or specialized functionality may still be provided by external <a href="#def-Assistive-Technology" class="termdef" title="definition: assistive technology">assistive technology</a>.

<span id="def-Display-Settings">display settings</span>  
Settings that relate to how <a href="#def-Author" class="termdef" title="definition: author">authors</a> perceive the authoring tool. These include:

-   <span id="def-Display-Settings-Audio">audio display settings:</span> the characteristics of <a href="#def-Audio" class="termdef" title="definition: audio">audio</a> output of music, sounds, and speech. Examples include volume, speech voices, voice speed, and voice emphasis.
-   <span id="def-Display-Settings-Visual">visual display settings:</span> the characteristics of the on-screen rendering of text and graphics. Examples include fonts, sizes, colors, spacing, positioning, and contrast.
-   <span id="def-Display-Settings-Tactile">tactile display settings:</span> the characteristics of haptic output. Examples include the magnitude of the haptic forces and the types of vibration.

<span id="def-Documentation"></span>documentation  
Any information that supports the use of an <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>. This information may be provided electronically or otherwise and includes help, manuals, installation instructions, sample <a href="#def-Workflow" class="termdef" title="definition: workflow">work flows</a>, <a href="#def-Tutorial" class="termdef" title="definition: tutorial">tutorials</a>, etc.

<span id="def-Document-Object"></span>document object  
The internal representation of data in the <a href="#def-Instruction-Level" class="termdef" title="definition: source content">source</a> by a <a href="#def-Non-Web-Based" class="termdef" title="definition: authoring tool user interface (non-Web-Based)">non-web based authoring tool</a> or <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a>. The document object may form part of a <a href="#def-Accessibility-Platform-Service" class="termdef" title="definition: platform accessibility architecture">platform accessibility service</a> that enables communication with <a href="#def-Assistive-Technology" class="termdef" title="definition: assistive technology">assistive technologies</a>. <a href="#def-Web-Based-UI" class="termdef" title="definition: authoring tool user interface (Web-based)">Web-based authoring tools</a> are considered to make use of the document object that is maintained by the <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a>.

<span id="def-Element">element</span>  
A pair of <a href="#def-Markup" class="termdef" title="definition: markup">markup</a> tags and its content, or an "empty tag" (one that requires no closing tag or content).

<span id="def-End-Users"></span>end user  
A person who interacts with <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> once it has been authored. This includes people using <a href="#def-Assistive-Technology" class="termdef" title="definition: assistive technology">assistive technologies</a>.

<span id="def-Human-Language">human language</span>   
Language that is spoken, written or signed (through visual or tactile means) to communicate with humans.

<span id="def-Informative"></span>informative   
For information purposes and not required for conformance.

<span id="def-Keyboard-Interface"></span>keyboard interface   
Keyboard interfaces are programmatic services provided by many platforms that allow operation in a device independent manner. A keyboard interface can allow keystroke input even if particular devices do not contain a hardware keyboard (e.g. a touchscreen-controlled device can have a keyboard interface built into its operating system to support onscreen keyboards as well as external keyboards that may be connected).  
*Note:* Keyboard-operated mouse emulators, such as MouseKeys, do not qualify as operation through a keyboard interface because these emulators use pointing device interfaces, not keyboard interfaces.

<span id="def-Keyboard-Trap"></span>keyboard trap  
A user interface situation in which a <a href="#def-Keyboard-Interface" class="termdef" title="definition: keyboard interface">keyboard interface</a> may be used to move focus to, but not from, a <a href="#def-UI-Component" class="termdef" title="definition: user interface component">user interface component</a> or group of components.

<span id="def-Label"></span>label   
Text or other <a href="#def-UI-Component" class="termdef" title="definition: user interface component">component</a> with a text alternative that is presented to users to identify a component. A label is presented to all users whereas the <a href="#def-Name" class="termdef" title="definition: name">name</a> may be hidden and only exposed by <a href="#def-Assistive-Technology" class="termdef" title="definition: assistive technology">assistive technology</a>. In many (but not all) cases the name and the label are the same.

<span id="def-Live"></span>live   
Information captured from a real-world event that is <a href="#def-Publishing" class="termdef" title="definition: publishing">published</a> with no more than a broadcast delay.  
*Note:* A broadcast delay is a short (usually automated) delay, for example used in order to give the broadcaster time to queue or censor the audio (or video) feed, but not sufficient to allow significant editing.

<span id="def-Markup-Language"></span>markup language  
A system of text annotations (e.g. <a href="#def-Element" class="termdef" title="definition: element">elements</a> in HTML) and processing rules that may be used to specify the structure, presentation or semantics of <a href="#def-Web-Content" class="termdef" title="definition: web content">content</a>. Examples of markup languages include HTML and SVG.

-   <span id="def-Markup"></span>markup of some content is the set of annotations that appear in the content.

<span id="def-Name"></span>name   
Text by which software can identify a <a href="#def-UI-Component" class="termdef" title="definition: user interface component">user interface component</a> to the <a href="#def-Author" class="termdef" title="definition: authors">author</a> or <a href="#def-End-Users" class="termdef" title="definition: end user">end user</a>. The name may be hidden and only exposed by <a href="#def-Assistive-Technology" class="termdef" title="definition: assistive technology">assistive technology</a>, whereas a <a href="#def-Label" class="termdef" title="definition: label">label</a> is presented to all users. In many (but not all) cases, the label and the name are the same.

<span id="def-Non-Text-Objects"></span>non-text content   
Any <a href="#def-Web-Content" class="termdef" title="definition: web content">content</a> that is not a sequence of characters that can be <a href="#def-Programmatically-Determined" class="termdef" title="definition: programmatically determined">programmatically determined</a> or where the sequence is not expressing something in <a href="#def-Human-Language" class="termdef" title="definition: human language">human language</a>. This includes ASCII Art (which is a pattern of characters), emoticons, and images representing text.

<span id="def-Normative"></span>normative   
Required for conformance. One may conform in a variety of well-defined ways to ATAG 2.0. Content identified as "<a href="#def-Informative" class="termdef" title="definition: informative">informative</a>" or "non-normative" is never required for conformance.

<span id="def-Option"></span>option  
When an <a href="#def-Author" class="termdef" title="definition: authors">author</a> is presented with choices.

-   <span id="def-Default-Option"></span>default option: A setting or value for an <a href="#def-Option" class="termdef" title="definition: option">option</a> that is assigned automatically by the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> and remains in effect unless canceled or changed by the <a href="#def-Author" class="termdef" title="definition: authors">author</a>.

<span id="def-Platform"></span>platform  
The software environment within which the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> operates. Platforms provide a consistent operational environment on top of lower level software platforms or hardware. For <a href="#def-Web-Based-UI" class="termdef" title="definition: authoring tool user interface (Web-based)">web-based authoring user interfaces</a>, the most relevant platform will be a <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a> (e.g. browser). For <a href="#def-Non-Web-Based" class="termdef" title="definition: authoring tool user interface (non-Web-Based)">non-web-based user interfaces</a>, the range of platforms includes, but may not be limited to, desktop operating systems (e.g. GNOME desktop on Linux, Mac OS, Windows), mobile operating systems (e.g. Android, BlackBerry, iOS, Windows Phone), or cross-OS environments (e.g. Java), etc.  
*Note 1:* Many platforms mediate communication between applications operating on the platform and assistive technology via a <a href="#def-Accessibility-Platform-Service" class="termdef" title="definition: accessibility platform architecture">platform accessibility service</a>.  
*Note 2:* Accessibility guidelines for <a href="#def-Developer" class="termdef" title="definition: authoring tool developer">developers</a> exist for many platforms.

<span id="def-Accessibility-Platform-Service"></span>platform accessibility service  
A programmatic interface that is specifically engineered to provide communication between applications and <a href="#def-Assistive-Technology" class="termdef" title="definition: assistive technology">assistive technologies</a> (e.g. MSAA, IAccessible2 and UI Automation for Windows applications, AXAPI for Mac OS X applications, GNOME Accessibility Toolkit API for GNOME applications, Java Access for Java applications). On some <a href="#def-Platform" class="termdef" title="definition: platform">platforms</a>, it may be conventional to enhance communication further by implementing a <a href="#def-Document-Object" class="termdef" title="definition: document object">document object</a>.

<span id="def-Plugin"></span>plug-in   
A program that runs as part of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> (e.g. a third-party checking and <a href="#def-Repairing" class="termdef" title="definition: repairing">repair</a> tool) and that is not part of <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a>. <a href="#def-Author" class="termdef" title="definition: authors">Authors</a> generally choose to include or exclude plug-ins from their authoring tool.

<span id="def-Preauthored-Content">pre-authored content</span>  
Pieces of <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a>, created prior to an <a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">authoring session</a>, that the authoring tool <a href="#def-Developer" class="termdef" title="definition: authoring tool developer">developer</a> makes available to <a href="#def-Author" class="termdef" title="definition: authors">authors</a> to use in the <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">content being edited</a>. Examples include clip art, sample videos, user interface widgets.  
*Note 1:* For <a href="#def-Template" class="termdef" title="definition: template">templates</a>, an incomplete form of pre-authored content, see [Guideline B.2.4](#gl_b24).  
*Note 2:* If the authoring tool uses pre-authored content automatically, see [Guideline B.1.1](#gl_b11).

-   <span id="def-Accessible-Preauthored-Content"></span>accessible pre-authored content (WCAG): <a href="#def-Preauthored-Content" class="termdef" title="definition: pre-authored content">Pre-authored content</a> that is either already <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible Web content">accessible web content (WCAG)</a> or would be accessible, if it was appropriately inserted into an empty document.  
    *Note:* If extensive <a href="#def-Author" class="termdef" title="definition: authors">author</a> input is required to make use of pre-authored content, then the content may in fact be a <a href="#def-Template" class="termdef" title="definition: template">template</a>.

<span id="def-Preauthored-Content-Selection-Mechanism">pre-authored content selection mechanism</span>  
A function beyond standard file selection that allows <a href="#def-Author" class="termdef" title="definition: authors">authors</a> to select <a href="#def-Preauthored-Content" class="termdef" title="definition: pre-authored content">pre-authored content</a> to use in an <a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">authoring session</a> (e.g. clip art gallery, widget palette).

<span id="def-Presentation"></span>presentation   
Rendering of the <a href="#def-Web-Content" class="termdef" title="definition: web content">content</a> in a form to be perceived by <a href="#def-Author" class="termdef" title="definition: authors">authors</a> or <a href="#def-End-Users" class="termdef" title="definition: end user">end users</a>.

<span id="def-Programmatically-Determined"></span>programmatically determined (programmatically determinable)   
Information that is encoded in a way that allows different software, including <a href="#def-Assistive-Technology" class="termdef" title="definition: assistive technology">assistive technologies</a>, to extract and present the information in different modalities. ATAG 2.0 uses this term in two contexts:  

-   Processing content: Whether the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> is able to extract information from the <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> (e.g. to extract the language of content from the <a href="#def-Markup" class="termdef" title="definition: markup">markup</a>).
-   Communication between the authoring tool and assistive technology: For <a href="#def-Non-Web-Based" class="termdef" title="definition: authoring tool user interface (non-Web-Based)">non-web-based user interfaces</a>, this means making use of <a href="#def-Accessibility-Platform-Service" class="termdef" title="definition: accessibility platform architecture">platform accessibility services</a>, APIs, and, in some cases, document object models. For <a href="#def-Web-Based-UI" class="termdef" title="definition: Web-based authoring tool user interface">web-based user interfaces</a>, this means ensuring that the <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a> can pass on the information (e.g. through the use of WAI-ARIA).  

<span id="def-Prominence"></span>prominence  
A heuristic measure of how likely <a href="#def-Author" class="termdef" title="definition: authors">authors</a> are to notice a <a href="#def-UI-Component" class="termdef" title="definition: user interface component">user interface component</a> in a user interface that they are operating. Prominence is affected by numerous factors, including: the number of navigation steps required, the reading order position, visual properties (e.g. size, spacing, color), and even the modality of use (e.g. mouse vs. keyboard use).

-   <span id="def-At-Least-As-Prominent"></span>at least as prominent: For ATAG 2.0, a <a href="#def-UI-Component" class="termdef" title="definition: user interface component">user interface component</a> A is considered to be "at least as prominent" as another component B when, from a default state, component A becomes displayed (and enabled) with the same number or less "opening" actions than are required for component B to become displayed (and enabled).  
    *Note 1:* When a container is open, all of the enabled components in the container (e.g. items in a list, items in a menu, buttons in a toolbar, all components in a dialog box) are considered to be displayed (and therefore are at least as prominent as each other), even if the container must be scrolled for them to become visible. This takes into account that different screen sizes and <a href="#def-Author" class="termdef" title="definition: authors">author</a> settings will affect which components are visible at a given time.  
    *Note 2:* "Opening actions" are actions made by authors on components within the user interface that result in new components becoming displayed or enabled. For example: (a) keyboard shortcut to a top-level menu item to display a sub-menu, (b) keyboard selection on a button to display a dialog box, (c) mouse click on a checkbox to enable previously disabled sub-items, etc. Actions that do not cause new components to become actionable (e.g. moving focus, scrolling a list), are not counted as "opening actions".  
    *Note 3:* Keyboard shortcuts to components in closed containers are not counted as "opening actions" because the components have no prominence when they are not displayed. The same is true when authors must use "search" to reveal components in closed containers.  
    *Note 4:* The "default state" is the state of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> at the beginning of an authoring session as set by the developer. The default state of many document authoring tools is an <a href="#def-Editing-View" class="termdef" title="definition: editing views">editing-view</a>.

<span id="def-Prompt">prompt</span>  
Any <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> initiated request for a decision or piece of information from <a href="#def-Author" class="termdef" title="definition: authors">authors</a>. The term covers both requests that must be responded to immediately (e.g. modal dialog boxes) as well as less urgent requests (e.g. underlining a misspelled word).

<span id="def-Publishing"></span>publishing  
Any point at which the <a href="#def-Author" class="termdef" title="definition: authors">authors</a> or <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> make <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> available to <a href="#def-End-Users" class="termdef" title="definition: end user">end users</a> (e.g. uploading a web page, committing a change in a wiki, live streaming).

<span id="def-Range"></span>range  
More than one item within a multi-item set.  
*Informative Note:* ATAG 2.0 uses the term "range" where absolute measurements may not be practical (e.g. the set of all help <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a> examples, the set of all <a href="#def-Template" class="termdef" title="definition: template">templates</a>). While the strict testable requirement is the definition "More than one item within a multi-item set", implementers are strongly encouraged to implement the success criteria more broadly.

<span id="def-Relationships"></span>relationships   
Meaningful associations between distinct pieces of <a href="#def-Web-Content" class="termdef" title="definition: web content">content</a>.

<span id="def-Repairing"></span>repair (accessibility)   
The process by which <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: web content accessibility problem">web content accessibility problems</a> that have been identified within <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> are resolved. ATAG 2.0 recognizes three types of repair, based on increasing levels of automation:

-   <span id="def-Manual-Repairing"></span>manual repair: Where the repairs are carried out by <a href="#def-Author" class="termdef" title="definition: authors">authors</a>. This includes the case where authors are aided by instructions or guidance provided by the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, but where authors carry out the actual repair procedure;
-   <span id="def-Semi-Automated-Repairing"></span>semi-automated repair: Where the repairs are partially carried out by the authoring tool, but where authors' input or judgment is still required to complete the repair; and
-   <span id="def-Automated-Repairing"></span>automated repair: Where the repairs are carried out automatically by the authoring tool without any intervention by authors.

<span id="def-Restrictions"></span>restrictions, restricted web content authoring  
When the <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that <a href="#def-Author" class="termdef" title="definition: authors">authors</a> can specify with an <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> either must include or must not include certain content (e.g. elements, attributes, widgets). Many authoring tools restrict authoring in some way, which can either benefit accessibility (e.g. if text alternatives for non-text content are required) or detract from accessibility (e.g. if attributes for defining text alternatives are not available). In contrast, authoring tools that allow unrestricted web content authoring do not require any particular content to be included or not included (e.g. many <a href="#def-Instruction-Level" class="termdef" title="definition: View - Source view">source editing-views</a>).

<span id="def-Role"></span>role   
Text or a number by which software can identify the function of a component within <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> (e.g. a string that indicates whether an image functions as a hyperlink, command button, or check box).

<span id="def-Sequential-Keyboard-Access"></span>sequential keyboard access   
Using a <a href="#def-Keyboard-Interface" class="termdef" title="definition: keyboard interface">keyboard interface</a> to navigate the focus one-by-one through all of the items in an ordered set (e.g. menu items, form fields) until the desired item is reached and activated. This is in contrast to direct keyboard access methods such as keyboard shortcuts and the use of bypass links.

<span id="def-Web-Content-Technology">technology (web content)</span>   
A mechanism for encoding instructions to be rendered, played or executed by <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agents</a>. Web content technologies may include <a href="#def-Markup-Language" class="termdef" title="definition: markup language">markup languages</a>, data formats, or programming languages that <a href="#def-Author" class="termdef" title="definition: authors">authors</a> may use alone or in combination to create <a href="#def-End-Users" class="termdef" title="definition: end user">end user</a> experiences that range from static web pages to multimedia presentations to dynamic web applications. Some common examples of web content technologies include HTML, CSS, SVG, PNG, PDF, Flash, Silverlight, Flex, and JavaScript.

<span id="def-Template">template</span>  
Content patterns that are filled in by <a href="#def-Author" class="termdef" title="definition: authors">authors</a> or the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> to produce <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> for <a href="#def-End-Users" class="termdef" title="definition: end user">end users</a> (e.g. document templates, content management templates, presentation themes). Often templates will pre-specify at least some authoring decisions.

-   <span id="def-Accessible-Template"></span>accessible templates (WCAG): Templates that can be filled in to create web content that meets the [WCAG 2.0](#conf-rel-wcag) success criteria (Level A, AA or AAA), when both of the following are true:
    1.  The author correctly follows any instructions provided (e.g. correctly responding to <a href="#def-Prompt" class="termdef" title="definition: prompt">prompts</a>, correctly replacing highlighted placeholders); and
    2.  No further authoring occurs

    *Note:* Under these conditions, some templates will result in completely empty documents, which are considered accessible by default.

<span id="def-Template-Selection-Mechanism">template selection mechanism</span>  
A function beyond standard file selection that allows <a href="#def-Author" class="termdef" title="definition: authors">authors</a> to select <a href="#def-Template" class="termdef" title="definition: template">templates</a> to use as the basis for new <a href="#def-Web-Content" class="termdef" title="definition: web content">content</a> or to apply to existing content.

<span id="def-Time-Limit"></span>time limit  
The amount of time that an <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides to <a href="#def-Author" class="termdef" title="definition: authors">authors</a> to perform a task (e.g. read a message, select an item, save a change). Examples include: authoring session timeouts, time-based presentations (e.g. tutorial video).

<span id="def-Tutorial"></span>tutorial  
A type of <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a> that provides step-by-step instructions for performing multi-part tasks.

<span id="def-User-Agent">user agent</span>   
Any software that retrieves, renders and facilitates <a href="#def-End-Users" class="termdef" title="definition: end user">end user</a> interaction with <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> (e.g. web browsers, browser plug-ins, media players)

-   <span id="def-Inmarket-User-Agent"></span>In-Market User Agent: A user agent that can be procured by members of the public (free or otherwise). Usually, an in-market user agent will be a separate software from the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>; however, sometimes a software may combine user agent and authoring tool functionality. These cases include:
    -   Preview-Only: If the user agent can only render web content that it receives from the associated authoring functionality, then the software is an authoring tool with a <a href="#def-Preview" class="termdef" title="definition: preview">preview</a> feature. Such preview-only features are *not considered in-market user agents*.
    -   <span id="def-ua-with-authoring-tool-role"></span>User Agent with Authoring Tool Mode: If the user agent functionality must retrieve and open web content before it can be sent to the authoring tool functionality, then the software is a user agent with an authoring tool mode. If the user agent is used to preview content produced by the authoring tool mode, then it is to be considered an in-market user agent.
    -   <span id="def-comb-ua-authoring-tool"></span>Combined User Agent/Authoring Tool: A user agent in which the default mode of user interaction enables editing the web content. These tools do not need previews because the author is already experiencing the content in the same way as end users.

<span id="def-UI-Component">user interface component</span>   
A part of the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">user interface</a> or content display (including <a href="#def-Content-Renderings" class="termdef" title="definition: content rendering">content renderings</a>) that is perceived by <a href="#def-Author" class="termdef" title="definition: authors">authors</a> as a single control for a distinct function.

<span id="def-Video">video</span>   
The technology of moving pictures or images. Video can be made up of animated or photographic images, or both.

<span id="def-View">view</span>  
A user interface function that <a href="#def-Author" class="termdef" title="definition: authors">authors</a> use to interact with the <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a>. ATAG 2.0 categorizes views according to whether they support editing:

-   <span id="def-Editing-View"></span>editing-views: Views in which some or all of the content is editable; or
-   <span id="def-Preview"></span>previews: Views in which no <a href="#def-Authoring-Action" class="termdef" title="definition: authoring actions">authoring actions</a> are provided (i.e. the view is not editable). Previews are provided to present the web content being edited by the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> as it would appear to <a href="#def-End-Users" class="termdef" title="definition: end user">end users</a> of <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agents</a>. Previews may be implemented using actual <a href="#def-Inmarket-User-Agent" class="termdef" title="definition: in-market user agent">in-market user agents</a>, but this is not necessary.

ATAG 2.0 also recognizes several approaches to presenting the content in a view:

-   <span id="def-Instruction-Level"></span>source views: The content is presented in unrendered form (e.g. plain text editors); or
-   <span id="def-Rendered-View"></span>rendered views: <a href="#def-Content-Renderings" class="termdef" title="definition: content rendering">Content renderings</a> (conventional, unconventional or partial) are presented; or
-   <span id="def-Meta-Content"></span>property views: Only properties of the content are presented. The authoring tool then uses these properties to <a href="#def-Content-Auto-Gen" class="termdef" title="definition: content generation">automatically generate</a> the content to be <a href="#def-Publishing" class="termdef" title="definition: publishing">published</a> (e.g. CMS calendar widget that generates a calendar from the numeric month and year).

<span id="def-Workflow"></span>workflow  
A customary sequence of steps or tasks that <a href="#def-Author" class="termdef" title="definition: authors">authors</a> follow to produce a <a href="#def-Web-Content" class="termdef" title="definition: web content">content</a> deliverable. If an <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> is composed of a collection of applications (e.g. <a href="#def-Markup" class="termdef" title="definition: markup">markup</a> editor, image editor, and validation tool), then its workflows may include use of one or more of the applications.

------------------------------------------------------------------------

<span id="references"></span>Appendix <span class="gl-only">B</span>: References
--------------------------------------------------------------------------------

For the **latest version** of any W3C standards please consult the list of [W3C Technical Reports](http://www.w3.org/TR/) at http://www.w3.org/TR/. Some documents listed below may have been superseded since the publication of this document.

This section is <a href="#def-Normative" class="termdef" title="definition: normative">normative</a>

<span id="ref-UAAG10">\[UAAG10\]</span>  
"[User Agent Accessibility Guidelines 1.0](http://www.w3.org/TR/2002/REC-UAAG10-20021217/),", I. Jacobs, J. Gunderson, and E. Hansen, eds.17 December 2002.

<span id="ref-WCAG20"></span>\[WCAG20\]  
"[Web Content Accessibility Guidelines 2.0](http://www.w3.org/TR/2008/REC-WCAG20-20081211/) ", B. Caldwell, M. Cooper, L. Guarino Reid, and G. Vanderheiden, eds. 11 December 2008.

This section is <a href="#def-Informative" class="termdef" title="definition: informative">informative</a>.

<span id="ref-ATAG10">\[ATAG10\]</span>  
"[Authoring Tool Accessibility Guidelines 1.0](http://www.w3.org/TR/2000/REC-ATAG10-20000203/)", J. Treviranus, C. McCathieNevile, I. Jacobs, and J. Richards, eds., 3 February 2000.

------------------------------------------------------------------------

<span id="acknowledgments"></span>Appendix <span class="gl-only">C</span>: Acknowledgments
------------------------------------------------------------------------------------------

### <span id="active-participants"></span>Participants active in the AUWG at the time of publication:

-   Tom Babinszki (IBM)
-   Tim Boland (National Institute for Standards and Technology)
-   Alastair Campbell (Nomensa)
-   Alessandro Miele (Invited Expert)
-   Jan Richards (Inclusive Design Institute, OCAD University)
-   Jeanne Spellman (W3C)
-   Jutta Treviranus (WG Chair; Inclusive Design Institute, OCAD University)

### ATAG Candidate Recommendation Testing Volunteers

-   Victoria Clark
-   Maria Carmen C. Cruz
-   Emanuela Gorla
-   Michael Gower
-   Anne Jackson
-   Taliesin Love Smith

### <span id="previous-participants"></span>Other previously active AUWG participants and other contributors to ATAG 2.0:

Previous Editors:  
Tim Boland, NIST

Matt May (until June 2005 while at W3C)

Kynn Bartlett, Giorgio Brajnik, Judy Brewer, Wendy Chisholm, Daniel Dardailler, Geoff Deering, Cherie Ekholm, Barry A. Feigenbaum, Katie Haritos-Shea, Kip Harris, Phill Jenkins, Len Kasday, Marjolein Katsma, Alex Li, William Loughborough, Karen Mardahl, Matt May, Charles McCathieNevile, Ann McMeekin, Matthias Müller-Prove, Liddy Nevile, Sueann Nichols, Graham Oliver, Greg Pisocky, Wendy Porch, Sarah Pulis, Bob Regan, Chris Ridpath, Andrew Ronksley, Gregory Rosmaita, Roberto Scano, Dana Simberkoff, Reed Shaffner, Michael Squillace, Heather Swayne, Gregg Vanderheiden, Carlos Velasco, and Jason White.

This document would not have been possible without the work of [those who contributed to ATAG 1.0](http://www.w3.org/TR/ATAG10/#acknowledgments).

This publication has been funded in part with Federal funds from the U.S. Department of Education, National Institute on Disability and Rehabilitation Research (NIDRR) under contract number ED-OSE-10-C-0067. The content of this publication does not necessarily reflect the views or policies of the U.S. Department of Education, nor does mention of trade names, commercial products, or organizations imply endorsement by the U.S. Government.

------------------------------------------------------------------------

\[[Contents](#contents)\]
