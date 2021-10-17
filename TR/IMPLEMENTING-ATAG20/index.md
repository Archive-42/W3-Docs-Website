\[[Contents](#contents)\] \[[Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html)\]

[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

<span id="title"></span>Implementing ATAG 2.0
=============================================

<span id="subtitle"></span>A guide to understanding and implementing Authoring Tool Accessibility Guidelines 2.0
----------------------------------------------------------------------------------------------------------------

<span id="w3c-doctype"></span>W3C Working Group Note 24 September 2015
----------------------------------------------------------------------

This version:  
<http://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/>

Latest version:  
<http://www.w3.org/TR/IMPLEMENTING-ATAG20/>

Previous version:  
<http://www.w3.org/TR/2015/WD-IMPLEMENTING-ATAG20-20150721/>[](http://www.w3.org/TR/2015/WD-IMPLEMENTING-ATAG20-20150604/)

Editors:  
Jan Richards, Inclusive Design Institute, OCAD University

Jeanne Spellman, W3C

Jutta Treviranus, Inclusive Design Institute, OCAD University

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2015 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span id="abstract">Abstract</span>
-----------------------------------

This document provides non-normative information to authoring tool developers who wish to satisfy the success criteria in the [Authoring Tool Accessibility Guidelines (ATAG) 2.0](http://www.w3.org/TR/ATAG20/) [\[ATAG20\]](#ref-ATAG20 "reference: ATAG20"). This document includes additional information about the intent of the success criteria, examples of how the success criteria might be satisfied, and references to other related resources. See [Authoring Tool Accessibility Guidelines (ATAG) Overview](http://www.w3.org/WAI/intro/atag.php) for an introduction and links to ATAG technical and educational material.

<span id="status">Status of This Document</span>
------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

### <span id="status-status"></span>W3C Working Group Note "Implementing ATAG 2.0"

This is the W3C Working Group Note "Implementing ATAG 2.0" of 24 September 2015. The [Authoring Tool Accessibility Guidelines Working Group](http://www.w3.org/WAI/AU/) (ATAG WG) considers this document to be important to understanding the success criteria of the [Authoring Tool Accessibility Guidelines (ATAG) 2.0](http://www.w3.org/TR/ATAG20/). It provides additional explanation of the intent of each success criteria, examples of the ways that people with disabilities use each success criteria and links to additional resources. Please note that the contents of this document are informative (they provide guidance), and not normative (they do not set requirements for conforming to ATAG 2.0).

The ATAG WG has developed this document in parallel with the [Authoring Tool Accessibility Guidelines (ATAG) 2.0](http://www.w3.org/TR/ATAG20/) and considers this document complete. There are no changes to the text of "Implementing ATAG 2.0" from the [previous working draft](http://www.w3.org/TR/2015/WD-IMPLEMENTING-ATAG20-20150721/). A broken link was updated, and minor code corrections were made.

Comments can be sent to <public-atag2-comments@w3.org> ([Public Archive](http://lists.w3.org/Archives/Public/public-atag2-comments/)). ATAG WG does not anticipate responding to comments. Comments received on this document may be addressed in future versions of this document, or future work undertaken by a W3C Working Group may address comments received on this document. Archives of the [ATAG WG mailing list discussions](https://lists.w3.org/Archives/Public/w3c-wai-au/) are also publicly available.

### <span id="status-wai"></span>Web Accessibility Initiative

This document has been produced as part of the W3C [Web Accessibility Initiative](http://www.w3.org/WAI/) (WAI). The goals of the AUWG are discussed in the [Working Group charter](http://www.w3.org/WAI/AU/charter4.html). The AUWG is part of the [WAI Technical Activity](http://www.w3.org/WAI/Technical/Activity).

### <span id="status-endorsement"></span>Endorsement

Publication as a Working Group Note does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.

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
    -   [Understanding Levels of Conformance](#intro_understand_levels_conformance)
    -   [Integration of Accessibility Features](#intro-integrate_acc_features)
-   [Implementing ATAG 2.0 Guidelines](#guidelines)
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
-   [Appendix A: Gathering Accessibility Information from Authors](#prompting-types)
-   [Appendix B: Levels of Checking Automation](#checking-types)
-   [Appendix C: Levels of Repair Automation](#repair-types)
-   [Appendix D: Author Interruption Timing Options](#timing-options)
-   [Appendix E: Authoring Tools for Live Web Content](#realtime-production)
-   [Appendix F: Glossary](#glossary)
-   [Appendix G: References](#references)
-   -   -   [Appendix H: Acknowledgments](#acknowledgments)

------------------------------------------------------------------------

<span id="intro">Introduction</span>
------------------------------------

Implementing ATAG 2.0 is an essential guide to understanding and using [Authoring Tool Accessibility Guidelines (ATAG) 2.0](http://www.w3.org/TR/ATAG20/) [\[ATAG20\]](#ref-ATAG20 "reference: ATAG20"). Although the normative definitions and requirements for ATAG 2.0 can all be found in the ATAG 2.0 document itself, the concepts and provisions may be new to some people. Implementing ATAG 2.0 provides a non-normative extended commentary on each guideline and each success criterion to help readers better understand the intent and how the guidelines and success criteria work together. It also provides illustrative examples for each success criterion.

This is not an introductory document. It is a detailed technical description of the guidelines and their success criteria. See [Authoring Tool Accessibility Guidelines (ATAG) Overview](http://www.w3.org/WAI/intro/atag.php) for an introduction to ATAG 2.0, supporting technical documents, and educational material.

Implementing ATAG 2.0 is organized by guideline. There is an *Implementing Guideline X.X.X* section for each guideline. The rationale for the guideline is listed there.

Each *Implementing Guideline X.X.X* section is then followed by an *Implementing Success Criterion X.X.X.X* section for each success criterion of that guideline. Each of these sections contains:

-   Success criterion as it appears in ATAG 2.0
-   Intent of the success criterion
-   Examples
-   Related resources

Links are provided from each Guideline in ATAG 2.0 directly to each *Implementing Guideline X.X.X* in this document. Similarly, there is a link from each success criterion in ATAG 2.0 to the *Implementing Success Criterion X.X.X.X* section in this document.

#### <span id="intro-notes"></span>Notes:

1.  The Working Group encourages <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">authoring tool developers</a> to carefully consider the examples provided, where appropriate. However, these examples do not provide a final definition of ATAG 2.0 conformance and it is possible to meet the guideline requirements without implementing these examples. **The Working Group encourages implementers to submit example implementations. These examples will be considered for inclusion in future versions of this document.**
2.  Some "Examples" include "mock ups". These are for informative purposes only and do not imply any endorsement of similar tools and they do not imply that the mock ups represent the best or only implementations.
3.  "Related Resources" are for information purposes only, no endorsement is implied.
4.  For links to information on different disabilities and assistive technologies, see [Disabilities on Wikipedia](http://en.wikipedia.org/wiki/Disabilities).

### <span id="intro-organization"></span>ATAG 2.0 Layers of Guidance

The individuals and organizations that may use ATAG 2.0 vary widely and include <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">authoring tool developers</a>, <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> users (<a href="#def-Author" class="termdef" title="definition: authors">authors</a>), authoring tool purchasers, and policy makers. In order to meet the varying needs of these audiences, several layers of guidance are provided:

-   **Parts:** ATAG 2.0 is divided into two parts, each reflecting a key aspect of accessibility with respect to authoring tools. [Part A](#part_a) relates to the accessibility of <a href="#def-Authoring-Tool-Interface" class="termdef" title="defintion: authoring tool user interfaces">authoring tool user interfaces</a> to authors with disabilities. [Part B](#part_b) relates to support by authoring tools for the creation, by any author (not just those with disabilities), of <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that is more accessible to <a href="#def-End-Users" class="termdef" title="definition: end user">end users</a> with disabilities. Both parts include <a href="#def-Normative" class="termdef" title="definition: normative">normative</a> "Conformance Applicability Notes" that apply to all of the success criteria within that part: [Part A Conformance Applicability Notes](#part_a_applic_notes) and [Part B Conformance Applicability Notes](#part_b_applic_notes).
-   **Principles:** Under each part are several high-level principles that organize the guidelines.
-   **Guidelines:** Under the principles are guidelines. The guidelines provide the basic goals that authoring tool developers should work toward in order to make authoring tools more accessible to both authors and end users of web content with different disabilities. The guidelines are not testable, but provide the framework and overall objectives to help authoring tool developers understand the success criteria. Each guideline includes a brief rationale for why the guideline was included.
-   **Success Criteria:** For each guideline, testable success criteria are provided to allow ATAG 2.0 to be used where requirements and conformance testing are necessary, such as in design specification, purchasing, regulation, and contractual agreements. In order to meet the needs of different groups and different situations, multiple levels of full and partial conformance are defined (see [Levels of Conformance](#conf-levels)).
-   **Implementing ATAG 2.0 document:** The [Implementing ATAG 2.0](http://www.w3.org/TR/2015/WD-IMPLEMENTING-ATAG20-20150721/) document provides additional non-normative information for each success criterion, including a description of the intent of the success criterion, examples, and links to related resources.[](http://www.w3.org/TR/2015/WD-IMPLEMENTING-ATAG20-20150721/)

See [Authoring Tool Accessibility Guidelines (ATAG) Overview](http://www.w3.org/WAI/intro/atag.php) for links to additional ATAG technical and educational material.

### <span id="intro_understand_levels_conformance"></span><span class="techs-only">Understanding </span>Levels of Conformance

In order to ensure that the process of using ATAG 2.0 and [WCAG 2.0](#conf-rel-wcag) together in the development of <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> is as simple as possible, ATAG 2.0 shares [WCAG 2.0](#conf-rel-wcag)'s three level conformance model: Level A (lowest), AA (middle), AAA (highest).

As with [WCAG 2.0](#conf-rel-wcag), there are a number of conditions that must be met for a success criterion to be included in ATAG 2.0. These include:

1.  For [Part A](#part_a), all success criteria must present **authoring tool user interface-related accessibility issues**. In other words, the user interface issue must cause a proportionately greater problem for <a href="#def-Author" class="termdef" title="definition: author">authors</a> with disabilities than it causes authors without disabilities and must be specific to authoring tool software, as opposed to software in general.
2.  For [Part B](#part_b), all success criteria must present **accessible web content production issues**. In other words, the issue must be specific to the production of <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible web content">accessible web content (WCAG)</a> by authoring tools, as opposed to the production of <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> in general.
3.  All success criteria must also be **testable**. This is important since otherwise it would not be possible to determine whether an authoring tool met or failed to meet the success criteria. The success criteria can be tested by a combination of machine and human evaluation as long as it is possible to determine whether a success criterion has been satisfied with a high level of confidence.

The success criteria were assigned to one of the three levels of conformance by the Working Group after taking into consideration a wide range of interacting issues. Some of the common factors evaluated when setting the level in [Part A](#part_a) included:

-   whether the success criterion is **essential** (in other words, if the success criterion is not met, then even <a href="#def-Assistive-Technology" class="termdef" title="definition: assistive technology">assistive technology</a> cannot make the authoring tool user interface accessible)
-   whether it is possible to satisfy the success criterion for **all types of authoring tools** that the success criteria would apply to (e.g. <a href="#def-WYSIWYG" class="termdef" title="definition: WYSIWYG">WYSIWYG</a> editors, wikis, content management systems)
-   whether the success criterion would impose limits on the "look-and-feel" and/or function of authoring tools (e.g. limits on the function, design, aesthetic or freedom of expression of <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">authoring tool developers</a>)
-   whether there are workarounds for authors with disabilities if the success criterion is not met

Some of the common factors evaluated when setting the level in [Part B](#part_b) included:

-   whether the success criterion is **essential** (in other words, if the success criterion is not met, then even authors with a high degree of accessibility expertise would be unlikely to produce <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible web content">accessible content (WCAG)</a> using an authoring tool)
-   whether it is possible to satisfy the success criterion for the production of **all <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technologies</a>** that the success criteria would apply to.
-   whether the success criterion requires features that would **reasonably be used by authors**.
-   whether the success criterion would impose limits on the "look-and-feel" and/or function of authoring tools (e.g. limits on the function, design, aesthetic or freedom of expression of <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">authoring tool developers</a>)

### <span id="intro-integrate_acc_features"></span>Integration of Accessibility Features

When implementing ATAG 2.0, <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">authoring tool developers</a> should carefully integrate features that support more accessible authoring into the same "look-and-feel" as other features of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>. Close integration has the potential to:

-   produce a more seamless product;
-   leverage the existing knowledge and skills of <a href="#def-Author" class="termdef" title="definition: authors">authors</a>;
-   make authors more receptive to new accessibility-related authoring requirements; and
-   reduce the likelihood of author confusion.

------------------------------------------------------------------------

<span id="guidelines"></span><span class="techs-only">Implementing ATAG 2.0 </span>Guidelines
---------------------------------------------------------------------------------------------

The success criteria and the conformance applicability notes are included here for <a href="#def-Informative" class="termdef" title="definition: informative">informative</a> purposes. See Authoring Tool Accessibility Guidelines 2.0 [\[ATAG20\]](#ref-ATAG20 "reference: ATAG20") for the normative version of this information.

<span id="part_a"></span><span class="techs-only">Implementing </span>Part A: Make the authoring tool user interface accessible
-------------------------------------------------------------------------------------------------------------------------------

### <span id="part_a_applic_notes"></span>Part A Conformance Applicability Notes:

1.  <span id="part_a_applic_note_1"></span>**Scope of "authoring tool user interface":** The Part A success criteria apply to all aspects of the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> that are concerned with producing the ["included" web content technologies](#conf-techs-produced). This includes <a href="#def-View" class="termdef" title="definition: view">views</a> of the <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a> and features that are independent of the content being edited (e.g. menus, button bars, status bars, user preferences, <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a>).
2.  <span id="part_a_applic_note_2"></span>**Reflected content accessibility problems:** The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> is responsible for ensuring that <a href="#def-Editing-View" class="termdef" title="definition: editing views">editing-views</a> display the <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a> in a way that is more accessible to <a href="#def-Author" class="termdef" title="definition: authors">authors</a> with disabilities (e.g. ensuring that <span class="sc-bullet"><a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives</a></span> in the content can be <a href="#def-Programmatically-Determined" class="termdef" title="definition: programmatically determined">programmatically determined</a>). However, where an <a href="#def-Authoring-Interface-Accessibility-Problem" class="termdef" title="definition: authoring tool user interface accessibility problem">authoring tool user interface accessibility problem</a> is caused directly by the content being edited (e.g. if an image in the content lacks a text alternative), then this would not be considered a deficiency in the accessibility of the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a>.  
3.  <span id="part_a_applic_note_3"></span>**Developer control:** The Part A success criteria only apply to the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> as it is provided by the <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">developer</a>. They do not apply to any subsequent modifications by parties other than the authoring tool developer (e.g. user modifications of default settings, third-party plug-ins).
4.  <span id="part_a_applic_note_4"></span>**User agent features:** <a href="#def-Web-Based-UI" class="termdef" title="definition: authoring tool user interface (Web-based)">Web-based authoring tools</a> may rely on <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a> features (e.g. keyboard navigation, find functions, display preferences, undo features) to satisfy success criteria. [Conformance claims](#conf-claim) are optional, but any claim that is made must [record the user agent(s)](#conf-user-agents).
5.  <span id="part_a_applic_note_5"></span>**Accessibility of features provided to meet Part A:** The Part A success criteria apply to the entire <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a>, including any features added to meet the success criteria in Part A (e.g. documentation, search functions). The only exemption is for <a href="#def-Preview" class="termdef" title="definition: preview">preview</a> features, as long as they meet the relevant success criteria in [Guideline A.3.7](#gl_a37). Previews are treated differently than editing-views because all authors, including those with disabilities, benefit when preview features accurately reflect the functionality of user agents that are actually in use by <span class="rationale"><a href="#def-End-Users" class="termdef" title="definition: end user">end users</a></span>.
6.  **<span id="part_a_applic_note_6"></span>Unrecognizable content:** When success criteria require authoring tools to treat web content according to semantic criteria, the success criteria only apply when these semantics are encoded programmatically (e.g. text describing an image can only be considered a <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for non-text content</a> when this role is encoded within markup).

<span id="principle_a1"></span> <span class="techs-only">Implementing </span>Principle A.1: Authoring tool user interfaces follow applicable accessibility guidelines
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

### <span id="gl_a11"></span> <span class="techs-only">Implementing</span> Guideline A.1.1: (For the authoring tool user interface) Ensure that web-based functionality is accessible. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_a11)\]</span>

Rationale: When <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> (or parts of authoring tools) are <a href="#def-Web-Based-UI" class="termdef" title="definition: authoring tool user interface (Web-based)">web-based</a>, conforming to [WCAG 2.0](#conf-rel-wcag) will facilitate access by all <a href="#def-Author" class="termdef" title="definition: authors">authors</a>, including those using <a href="#def-Assistive-Technology" class="termdef" title="definition: assistive technology">assistive technologies</a>.

#### <span id="sc_a111"></span><span class="techs-only">Implementing Success Criterion </span>A.1.1.1 Web-Based Accessible (WCAG):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> contains <a href="#def-Web-Based-UI" class="termdef" title="definition: authoring tool user interface (Web-based)">web-based user interfaces</a>, then those web-based user interfaces meet the [WCAG 2.0](#conf-rel-wcag) success criteria. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

[Return to A.1.1.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a111)

##### <span id="sc_a111-i"></span>Intent of Success Criterion A.1.1.1:

The intent of this success criterion is to ensure that authoring tool user interfaces that are fully or partially web-based are more accessible to authors with disabilities. Since WCAG 2.0 already provides requirements for the accessibility of web content, including web applications, those guidelines are referenced to avoid duplication of requirements.

*Note:* Even when a web-based user interface has met the requirements of WCAG 2.0, many factors will determine the accessibility of any particular end-user's experience, including (but not limited to): the features and settings of the end-user's user agent, platform, and assistive technology (if any). It is recommended, therefore, that developers of web-based authoring tools be familiar with the accessibility guidance that the User Agent Accessibility Guidelines (UAAG) [\[UAAG10\]](#ref-UAAG10) provides to the developers of user agents. At the time of publication, UAAG version 1.0 is a W3C Recommendation and version 2.0 is under development.

##### <span id="sc_a111-e"></span>Examples of Success Criterion A.1.1.1:

-   **Wiki:** A web-based wiki application is designed to conform to WCAG 2.0 Level A. During development, all parts of the user interface (including editing-views rendering test content) are tested by the developer using an accessibility evaluation harness for web applications. Periodically, the application is also tested by authors using assistive technologies.
-   **Web-based help system:** A non-web-based authoring tool includes a web-based help system. Each page in the help system is based on a template that was designed to conform to WCAG 2.0 Level A (when used) and the developer ensures that each help page passes an accessibility checker before being published. The developer confirms the accessibility of the final help system by spot-checking sample pages.

##### <span id="sc_a111-r"></span>Related Resources for Success Criterion A.1.1.1:

-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

### <span id="gl_a12"></span> <span class="techs-only">Implementing</span> Guideline A.1.2: (For the authoring tool user interface) Ensure that non-web-based functionality is accessible. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_a12)\]</span>

Rationale: When <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> (or parts of authoring tools) are <a href="#def-Non-Web-Based" class="termdef" title="definition: authoring tool user interface (non-Web-Based)">non-web-based</a>, following existing <a href="#def-Platform" class="termdef" title="definition: platform">platform</a> accessibility guidelines and implementing communication with <a href="#def-Accessibility-Platform-Service" class="termdef" title="definition: accessibility platform architecture">platform accessibility services</a> facilitates access by all <a href="#def-Author" class="termdef" title="definition: authors">authors</a>, including those using <a href="#def-Assistive-Technology" class="termdef" title="definition: assistive technology">assistive technologies</a>.

#### <span id="sc_a121"></span><span class="techs-only">Implementing Success Criterion </span>A.1.2.1 Accessibility Guidelines:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> contains <a href="#def-Non-Web-Based" class="termdef" title="definition: authoring tool user interface (non-Web-Based)">non-web-based user interfaces</a>, then those non-web-based user interfaces follow user interface accessibility guidelines for the <a href="#def-Platform" class="termdef" title="definition: platform">platform</a>. <span class="level">(**Level A**)</span>

-   *Note:* The (optional) [explanation of conformance claim results](#conf-explanation-results) should record the user interface accessibility guidelines that were followed.

[Return to A.1.2.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a121)

##### <span id="sc_a121-i"></span>Intent of Success Criterion A.1.2.1:

The intent of this success criterion is to ensure that authoring tool user interfaces that are not web applications are more accessible to authors with disabilities. Existing platform accessibility guidelines are referenced because accessibility guidelines already exist for many platforms and this wording allows developers the flexibility to conform with accessibility legislation in their markets.

The note regarding documenting the guidelines that were followed in the conformance claim should encourage developers to follow the appropriate guidelines.

*Note 1:* Developers should refer to the documents listed in the "[Related Resources for Success Criterion A.1.2.1](#sc_a121-r)" section. Unless special circumstances exist (e.g. a document has been superseded, the platform has undergone major architectural changes), the listed resources should be assumed to be relevant to the platforms listed. Several general software accessibility guidelines are also referenced. It is acceptable to follow one of these sources of general guidance, and in most cases, the techniques for implementing the general guidance on a platform will entail following the same platform accessibility guidelines.

*Note 2:* Even when a non-web-based user interface has followed the relevant user interface accessibility guidelines for the platform, many factors will determine the accessibility of any particular end-user's experience, including (but not limited to): the features and settings of the platform and assistive technology (if any).

##### <span id="sc_a121-e"></span>Examples of Success Criterion A.1.2.1:

-   **Mobile authoring tool:** The developer of an authoring tool app for the iPhone platform follows the guidance provided in the "Accessibility Programming Guide for iPhone OS".

##### <span id="sc_a121-r"></span>Related Resources for Success Criterion A.1.2.1:

-   The following is a non-exhaustive list of accessibility guidelines for various platforms (for additional information related to keyboard shortcuts on various platforms, see the Related Resources for [Success Criterion A.3.1.3](#sc_a313)):
    -   Desktop OS
        -   **GNOME Desktop on Linux:** [GNOME Accessibility Developers Guide](http://developer.gnome.org/accessibility-devel-guide/)
        -   **KDE Desktop on Linux:** [Developer's Information](http://accessibility.kde.org/developer/)
        -   **Mac OS:** [Accessibility Overview](https://developer.apple.com/library/mac/samplecode/OSXAccessibilityExamples/Introduction/Intro.html) (may require account)
        -   **Microsoft Windows:** [Accessibility Overview](http://msdn.microsoft.com/en-us/windows/bb735024.aspx)
    -   Mobile OS
        -   **Android:** [Android Developers: Designing for Accessibility](http://developer.android.com/guide/practices/design/accessibility.html)
        -   **BlackBerry:** [BlackBerry Accessibility](http://us.blackberry.com/support/devices/blackberry_accessibility/)
        -   **iPhone OS:** [Accessibility Programming Guide for iPhone OS](http://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/iPhoneAccessibility/Accessibility_on_iPhone/Accessibility_on_iPhone.html) (may require account)
    -   Cross-OS environments
        -   **Eclipse:** [Designing Accessible Plug-ins in Eclipse](http://www.eclipse.org/articles/article.php?file=Article-Accessibility/index.html)
        -   **Java SE:** [Java SE Desktop Accessibility](http://java.sun.com/javase/technologies/accessibility/index.jsp)
        -   **Lotus Notes:** [Lotus Notes Checklist](http://www-03.ibm.com/able/guidelines/notes/accessr5.html)
-   The following is a non-exhaustive list of general software accessibility guidelines:
    -   [ISO 9241-171:2008 Ergonomics of human-system interaction - Part 171: Guidance on software accessibility](http://www.iso.org/iso/iso_catalogue/catalogue_ics/catalogue_detail_ics.htm?csnumber=39080)
    -   [Software Checklist (IBM)](http://www-03.ibm.com/able/guidelines/software/accesssoftware.html)
    -   [Section 508 §1194.21 Software applications and operating systems](http://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/section-508-standards)
    -   The WAI [International Policies Relating to Web Accessibility](http://www.w3.org/WAI/Policy/) resource includes links to various international legislation and other policies that may include applicable accessibility guidelines for non-web-based functionality.

#### <span id="sc_a122"></span><span class="techs-only">Implementing Success Criterion </span>A.1.2.2 Platform Accessibility Services:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> contains <a href="#def-Non-Web-Based" class="termdef" title="definition: authoring tool user interface (non-Web-Based)">non-web-based user interfaces</a>, then those non-web-based user interfaces expose accessibility information through <a href="#def-Accessibility-Platform-Service" class="termdef" title="definition: accessibility platform architecture">platform accessibility services</a>. <span class="level">(**Level A**)</span>

-   *Note:* The (optional) [explanation of conformance claim results](#conf-explanation-results) should record the platform accessibility service(s) that were implemented.

[Return to A.1.2.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a122)

##### <span id="sc_a122-i"></span>Intent of Success Criterion A.1.2.2:

The intent of this success criterion is to ensure that authoring tool user interfaces that are not web applications are more accessible to authors with disabilities who use assistive technologies that communicate with software via platform accessibility services. The requirement is stated generally because the specifics of what constitutes a platform accessibility service will differ on each platform.

The note regarding documenting the platform accessibility service(s) that were implemented in the conformance claim should encourage developers to implement services that are well supported by assistive technologies.

*Note:* Even when a non-web-based user interface has been designed to expose accessibility information through platform accessibility services, many factors will determine the accessibility of any particular end-user's experience, including (but not limited to): the features and settings of the platform and assistive technology (if any).

##### <span id="sc_a122-e"></span>Examples of Success Criterion A.1.2.2:

-   **WYSIWYG editor on Mac OS:** A WYSIWYG text editor is designed in Cocoa following the Mac OS X accessibility framework including using Accessibility Objects setting attributes for Role, Role Description, Description, Title, Relationship, and Value. The conformance claim includes links to the Accessibility Programming Guidelines for Cocoa.  
-   **Content management system on Windows:** Content management system on Windows: A content management system is written to operate on the Windows operating systems following Microsoft Windows' accessibility API, UI Automation, Microsoft Active Accessibility, or IAccessible2. The conformance claim includes links to the applicable Microsoft Developer Network documents.

##### <span id="sc_a122-r"></span>Related Resources for Success Criterion A.1.2.2:

-   The following is a non-exhaustive list of documents related to communication with platform accessibility services for various platforms:
    -   Desktop OS
        -   **GNOME Desktop on Linux:** [GNOME Accessibility Developers Guide](http://developer.gnome.org/accessibility-devel-guide/)
        -   **KDE Desktop on Linux:** [Developer's Information](http://accessibility.kde.org/developer/)
        -   **Mac OS:** [Accessibility Overview](https://developer.apple.com/library/mac/samplecode/OSXAccessibilityExamples/Introduction/Intro.html) (may require account)
        -   **Microsoft Windows:** [Accessibility Overview](http://msdn.microsoft.com/en-us/windows/bb735024.aspx)
    -   Mobile OS
        -   **Android:** [Example from Android Developer Reference](http://developer.android.com/reference/android/accessibilityservice/package-summary.html)[](http://developer.android.com/guide/practices/design/accessibility.html)
        -   **BlackBerry:** [BlackBerry Accessibility](http://us.blackberry.com/support/devices/blackberry_accessibility/)
        -   **iPhone OS:** [Accessibility Programming Guide for iPhone OS](http://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/iPhoneAccessibility/Accessibility_on_iPhone/Accessibility_on_iPhone.html) (may require account)
    -   Cross-OS environments
        -   **Java SE:** [Java SE Desktop Accessibility](http://java.sun.com/javase/technologies/accessibility/index.jsp)

<span id="principle_a2"></span><span class="techs-only">Implementing </span>Principle A.2: Editing-views are perceivable
------------------------------------------------------------------------------------------------------------------------

### <span id="gl_a21"></span> <span class="techs-only">Implementing</span> Guideline A.2.1: (For the authoring tool user interface) Make alternative content available to authors. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_a21)\]</span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> require access to <a href="#def-Alternative-Content" class="termdef" title="definition: alternative content">alternative content</a> in order to interact with the <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that they are editing.

#### <span id="sc_a211"></span><span class="techs-only">Implementing Success Criterion </span>A.2.1.1 Text Alternatives for Rendered Non-Text Content:

If an <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> <a href="#def-Content-Renderings" class="termdef" title="definition: content rendering">renders</a> <a href="#def-Non-Text-Objects" class="termdef" title="definition: non-text objects">non-text content</a>, then any <a href="#def-Associated-Alternative-Content" class="termdef" title="definition: alternative content">programmatically associated</a> <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for the non-text content</a> can be <a href="#def-Programmatically-Determined" class="termdef" title="definition: programmatically determined">programmatically determined</a>. <span class="level">(**Level A**)</span>

[Return to A.2.1.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a211)

##### <span id="sc_a211-i"></span>Intent of Success Criterion A.2.1.1:

The intent of this success criterion is to ensure that authors with disabilities have access to text alternatives for non-text content within the web content that they are editing, because this information can help authors orient and navigate as they edit.

The term "programmatically associated" is used to take into account that text alternatives may sometimes appear within web content in ways that authoring tools are not able to detect (e.g. when the information conveyed by an image is described in an adjacent paragraph without the relationship appearing in the markup).

##### <span id="sc_a211-e"></span>Examples of Success Criterion A.2.1.1:

-   **Non-web-based editor:** If an image in the content being edited includes alternative text, this is exposed to assistive technologies via the platform accessibility service.
-   **Web-based editor:** If an image in the content being edited includes alternative text, this is included in the markup of the editing-view, so that the alternative text will be made available to the user agent.

##### <span id="sc_a211-r"></span>Related Resources for Success Criterion A.2.1.1:

-   [User Agent Accessibility Guidelines (UAAG) 1.0](http://www.w3.org/TR/UAAG10/).
-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php)), especially [WCAG 2.0 Guideline 1.1](http://www.w3.org/TR/WCAG20/#text-equiv) and the section [Understanding "Text Alternatives"](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-text-alternatives-head).

#### <span id="sc_a212"></span><span class="techs-only">Implementing Success Criterion </span>A.2.1.2 Alternatives for Rendered Time-Based Media:

If an <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> <a href="#def-Content-Renderings" class="termdef" title="definition: content rendering">renders</a> time-based media, then at least one of the following is true: <span class="level">(**Level A**)</span>

-   **(a) Option to Render:** The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides the <a href="#def-Option" class="termdef" title="definition: option">option</a> to render alternatives for the time-based media; or
-   **(b) User Agent Option:** <a href="#def-Author" class="termdef" title="definition: authors">Authors</a> have the option to <a href="#def-Preview" class="termdef" title="definition: preview">preview</a> the time-based media in a <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a> that is able to render the alternatives.

[Return to A.2.1.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a212)

##### <span id="sc_a212-i"></span>Intent of Success Criterion A.2.1.2:

The intent of this success criterion is to ensure that authors with disabilities have access to alternatives for rendered time-based media in the web content that they are editing, because this information can help authors orient and navigate as they edit.

There are two ways to meet this success criterion:

-   Option (a) is to render the alternatives in conjunction with the rendered time-based content within the authoring tool's editing-view. For example, a captioned video would have its captions displayed when it played. This approach is preferable, since it does not require authors to switch applications.
-   Option (b) is to instead provide authors with the option of rendering their content in a user agent that is able to render the alternatives. While this is not ideal from a usability perspective, it is necessary because alternatives are sometimes provided in different modalities that authoring tools are not equipped to render. For example, an audio editor might allow authors to edit the waveform of the audio file and render (i.e. play) the resulting audio files. However, the audio editor might not be equipped to render video, so if an audio file includes an alternative that is a sign language file in video format, the audio editor will need assistance in rendering the file.

##### <span id="sc_a212-e"></span>Examples of Success Criterion A.2.1.2:

-   **Web-based WYSIWYG:** A web-based WYSIWYG editing-view is implemented so that videos placed into the content are rendered. If the videos include captions these are displayed, meeting (a).
-   **Audio editor:** An audio editor allows authors to edit audio tracks using the audio waveform. At any time, authors can play the audio file. Sometimes the audio files include a link to a video file that contains an alternative version (e.g. sign language). Although the audio editor does not include the functionality to natively render the video, it provides the option to launch the video in a user agent specified by the author, meeting (b).

##### <span id="sc_a212-r"></span>Related Resources for Success Criterion A.2.1.2:

-   [User Agent Accessibility Guidelines (UAAG) 1.0](http://www.w3.org/TR/UAAG10/).
-   [](#conf-rel-wcag)[WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php)), especially [WCAG 2.0 Guideline 1.2](http://www.w3.org/TR/WCAG20/#media-equiv).

### <span id="gl_a22"></span> <span class="techs-only">Implementing</span> Guideline A.2.2: (For the authoring tool user interface) Ensure that editing-view presentation can be programmatically determined. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_a22)\]</span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> need access to details about the <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> <a href="#def-Presentation" class="termdef" title="definition: presentation">presentation</a>, via their assistive technology, when that presentation is used to convey status messages (e.g. underlining misspelled words) or provide information about how the <a href="#def-End-Users" class="termdef" title="definition: end users">end user</a> will experience the <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a>.

#### **<span id="sc_a221"></span>**<span class="techs-only">Implementing Success Criterion </span>A.2.2.1 Editing-View Status Indicators:

If an <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> adds status indicators to the <span class="rationale"><a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">content being edited</a></span>, then the information being conveyed by the status indicators can be <a href="#def-Programmatically-Determined" class="termdef" title="definition: programmatically determined">programmatically determined</a>. <span class="level">(**Level A**)</span>

-   *Note:* Status indicators may indicate errors (e.g. spelling errors), tracked changes, hidden elements, or other information.

[Return to A.2.2.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a221)

##### <span id="sc_a221-i"></span>Intent of Success Criterion A.2.2.1:

The intent of this success criterion is to ensure that, if the authoring tool makes changes to the display of the web content being edited in order to communicate status messages to authors, then authors with disabilities will have the same access to the status messages as other authors.

The note provides some examples of status indicators that are relatively common in authoring tools. For example, many WYSIWYG editors include an option to display an icon to indicate the location of anchor tags and comments, both of which would otherwise be hidden from view. Another common status indicator is underlining spelling errors in red.

##### <span id="sc_a221-e"></span>Examples of Success Criterion A.2.2.1:

-   **Change tracking feature:** A web-based authoring tool includes a change tracking feature that displays inserted text in green and deleted text in red with a strike-through style. Instead of implementing this using simple CSS selectors, the authoring tool uses the XHTML elements `<ins>` and `<del>`, since these have semantic meaning.

##### <span id="sc_a221-r"></span>Related Resources for Success Criterion A.2.2.1:

-   For web-based authoring tools, see [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php)), especially [WCAG 2.0 Success Criterion 1.3.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-programmatic).

#### <span id="sc_a222"></span> <span class="techs-only">Implementing Success Criterion </span>A.2.2.2 Access to Rendered Text Properties:

If an <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> renders any text formatting <a href="#def-Web-Content-Properties" class="termdef" title="definition: content property">properties</a> that <a href="#def-Author" class="termdef" title="definition: authors">authors</a> can also edit using the editing-view, then the properties can be <a href="#def-Programmatically-Determined" class="termdef" title="definition: programmatically determined">programmatically determined</a>. <span class="level">(**Level AA**)</span>

[Return to A.2.2.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a222)

##### <span id="sc_a222-i"></span>Intent of Success Criterion A.2.2.2:

The intent of this success criterion is to ensure that authors with disabilities have access to text presentation information when this information is already made available to other authors by editing-views. This is important because this type of rendering acts as a type of preview to help authors understand how their content may appear to end users, once it is published. Authors who cannot see also need to understand how their web content will be experienced by end users who can see.

*Note:* This success criterion pertains to the rendered properties of text on the screen, even if the properties differ from the content being edited (e.g. when authors chose custom display settings as per [Success Criterion A.3.6.1](#sc_a361)). In this way, the views provided on screen and via any assistive technologies can remain synchronized.

##### <span id="sc_a222-e"></span>Examples of Success Criterion A.2.2.2:

-   **Non-web-based authoring tool:** A non-web-based authoring tool includes a WYSIWYG editing-view that implements the appropriate platform accessibility service. Included in the information passed to the platform accessibility service is information on the size, font, foreground, background color, font weight, and position of any rendered text.
-   **Web-based authoring tool:** A web-based WYSIWYG authoring tool uses style sheets to control text presentation, enabling the presentation information to be programmatically determined by the user agent, which then passes it on to the appropriate platform accessibility service. The user agent would be cited in any [conformance claim](#conf-claim).

##### <span id="sc_a222-r"></span>Related Resources for Success Criterion A.2.2.2:

-   N/A

<span id="principle_a3"></span> <span class="techs-only">Implementing </span>Principle A.3: Editing-views are operable
----------------------------------------------------------------------------------------------------------------------

### <span id="gl_a31"></span> <span class="techs-only">Implementing</span> Guideline A.3.1: (For the authoring tool user interface) Provide keyboard access to authoring features. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_a31)\]</span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> with limited mobility or visual disabilities do not use a mouse and instead require keyboard interface access to all of the functionality of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>.

#### <span id="sc_a311"></span><span class="techs-only">Implementing Success Criterion </span>A.3.1.1 Keyboard Access (Minimum):

All functionality of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> is operable through a <a href="#def-Keyboard-Interface" class="termdef" title="definition: keyboard interface">keyboard interface</a> without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints. <span class="level">(**Level A**)</span>

-   *Note 1:* Keyboard interfaces are programmatic services provided by many <a href="#def-Platform" class="termdef" title="definition: platform">platforms</a> that allow operation in a device independent manner. This success criterion does not imply the presence of a hardware keyboard.
-   *Note 2:* The path exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input, but the underlying function (text input) does not. The path exception encompasses other input variables that are continuously sampled from pointing devices, including pressure, speed, and angle.
-   *Note 3:* This success criterion does not forbid and should not discourage other input methods (e.g. mouse, touch) in addition to keyboard operation.

[Return to A.3.1.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a311)

##### <span id="sc_a311-i"></span>Intent of Success Criterion A.3.1.1 (Based on WCAG 2.0, Success Criterion 2.1.1):

The intent of this success criterion is to ensure that almost all authoring tool functionality can be operated using a keyboard or an assistive technology that makes use of a keyboard interface, such as onscreen scanning keyboards and voice recognition systems.

The only exemption at Level A to this requirement involves functions that require input that depends on the path of the user's movement and not just the endpoints. This is a very narrow exception that relates to authoring web content properties that contain hundreds or thousands of numerical values. The exception exists because it is not reasonable to expect that authors using only a keyboard would be prepared to hand-code so many data points. The exception does not apply simply because the developers of an authoring tool have decided to use mouse input to control functionality in the past (e.g. setting the endpoints for straight lines, rectangles, and circles). The exception also does not apply simply because a functionality is related to graphics. Also, the exception applies to the editing of particular properties. While editing the path of a freehand curve may be exempt, setting the line color and thickness likely would not be exempt. Finally, this is a Level A exception only. There is no exception for the Level AAA requirement ([Success Criterion A.3.1.4](#sc_a314)).

Note 1 clarifies that the success criterion does not require a hardware keyboard to be present. Many mobile platforms lack hardware keyboards, but nonetheless provide "keyboard interfaces".

Note 2 clarifies that the exception applies to the underlying function and that pointing device input variables, such as pressure, speed and angle, are also covered.

Note 3 clarifies that rather than replacing other types of interaction, the keyboard access requirement is to provide an alternative.

Web-based authoring tools will already be required to meet this success criterion as part of [Success Criterion A.1.1.1](#sc_a111).

##### <span id="sc_a311-e"></span>Examples of Success Criterion A.3.1.1:

-   **Drag-and-drop feature:** An authoring tool allows authors to open documents by dragging them into the authoring tool window. The same operation can be performed from the menus using the keyboard.
-   **Keyboard manipulation of drawing objects:** A multimedia authoring tool allows authors to navigate the selection focus between all of the drawing objects on the canvas. Once an object is selected, it can be manipulated with keyboard-driven menu commands, some of which have keyboard shortcuts (e.g. arrow keys to move the object). New drawing objects can also be added from the keyboard-driven menus.
-   **Keyboard manipulation of drawing object properties:** A multimedia authoring tool does not include keyboard access to the drawing canvas directly, but instead provides a keyboard accessible list of drawing objects that allows a keyboard editable property page to be brought up. The property pages include properties such as "top", "left", "width", "height", "rotation", and "label". When these properties are adjusted, the objects on the canvas are updated accordingly. New drawing objects can be added from the keyboard-driven menus.
-   **Select and operate:** An authoring tool provides editing functionality in which authors can select content in the editing-view (e.g. select text) and then perform an operation (i.e. authoring action) on that selection (e.g. formatting, deletion). Keyboard access to this functionality is enabled by the fact that the selection can be made using the keyboard and that the selection is maintained while the author uses the keyboard to navigate the authoring tool user interface to arrive at the operation they want to perform.
-   **Touchscreen:** An authoring tool designed to be used on a touchscreen-equipped device based  

##### <span id="sc_a311-r"></span>Related Resources for Success Criterion A.3.1.1:

-   For web-based authoring tools, see [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php)), especially [WCAG 20 Success Criterion 2.1.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#keyboard-operation-keyboard-operable).

#### <span id="sc_a312"></span><span class="techs-only">Implementing Success Criterion </span>A.3.1.2 No Keyboard Traps:

If keyboard focus can be moved to a <a href="#def-UI-Component" class="termdef" title="definition: user interface component">component</a> using a <a href="#def-Keyboard-Interface" class="termdef" title="definition: keyboard interface">keyboard interface</a>, then focus can be moved away from that component using only a keyboard interface. If it requires more than unmodified arrow or tab keys or other standard exit methods, <span class="sc-bullet"><a href="#def-Author" class="termdef" title="definition: authors">authors</a></span> are advised of the method for moving focus away. <span class="level">(**Level A**)</span>

[Return to A.3.1.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a312)

##### <span id="sc_a312-i"></span>Intent of Success Criterion A.3.1.2 (Modified from WCAG 2.0, Success Criterion 2.1.2):

The intent of this success criterion is to ensure that neither the authoring tool's own user interface nor any rendered web content within editing-views "traps" keyboard focus.

The case of keyboard traps in rendered content within an editing-view (e.g. WYSIWYG) is the more challenging because authors may open content for editing that violate the WCAG 2.0 requirement against keyboard traps in content. The success criterion requires authoring tools to handle these cases.

##### <span id="sc_a312-e"></span>Examples of Success Criterion A.3.1.2:

-   **Non-web-based authoring tool:** A non-web-based authoring tool has a user interface that has been thoroughly tested by the developer to ensure that no keyboard traps exist. If authors open web content containing keyboard traps for editing in the WYSIWYG editing-view, the authoring tool allows authors to restore keyboard focus to the top of the editing-view at any time by pressing the "Home" key, which the authoring tool never passes to the content being edited.
-   **Web-based authoring tool:** A web-based authoring tool has a user interface that has been thoroughly tested by the developer to ensure that no keyboard traps exist. If authors open content containing keyboard traps, the authoring tool relies on a feature in the authors' user agent that always restores keyboard focus to the address bar. The user agent would be cited in any [conformance claim](#conf-claim).

##### <span id="sc_a312-r"></span>Related Resources for Success Criterion A.3.1.2:

-   For web-based authoring tools, see [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php)), especially [WCAG 2.0 Success Criterion 2.1.2](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#keyboard-operation-trapping).

#### <span id="sc_a313"></span><span class="techs-only">Implementing Success Criterion </span>A.3.1.3 Efficient Keyboard Access:

The <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> includes mechanisms to make keyboard access more efficient than <a href="#def-Sequential-Keyboard-Access" class="termdef" title="definition: sequential keyboard navigation">sequential keyboard access</a>. <span class="level">(**Level AA**)</span>

[Return to A.3.1.3 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a313)

##### <span id="sc_a313-i"></span>Intent of Success Criterion A.3.1.3:

The intent of this success criterion is to introduce a Level AA requirement to strengthen the requirement of Success Criterion A.3.1.1. That success criterion would be met even by a keyboard access mechanism in which users had to sequentially navigate through every available user interface component in order to reach their intended destination. This success criterion (A.3.1.3) introduces the additional requirement that keyboard access must include mechanisms to make it more efficient that this type of purely sequential keyboard access.

The wording is intentionally general because the appropriate mechanisms available for increasing the efficiency of keyboard access vary according to the operating environment and the design of the authoring tool:

1.  In desktop environments with a full keyboard, there is generally some set of keys available for developers to use as shortcut keys that directly link to particular functionality (e.g. the "ctrl" + "S" key combination can be directly mapped to the "Save" function).
2.  In web-based environments very few direct shortcut keys are available, once the potential keys used by the various operating systems, user agents, and assistive technologies are taken into account. In this case, bypass links are useful mechanisms for making keyboard access more efficient.
3.  In mobile environments, the situation is variable. Some mobile environments include physical keyboards and support keyboard shortcuts. Other mobile environments do not enable keyboard shortcuts, but often increase keyboard navigation efficiency via recommending the use of tabs and other organizational mechanisms.

##### <span id="sc_a313-e"></span>Examples of Success Criterion A.3.1.3:

-   **In a desktop environment:** A non-web-based authoring tool provides keyboard shortcuts for its menu functions as well as access keys in the design of its menus and dialog boxes. The choice of shortcut keys follows platform conventions where applicable (e.g. for open document, save document, cut, copy, paste).
-   **In a mobile environment:** A social networking application on a mobile device has only a very few keyboard shortcuts available on its targeted devices. These few keyboard shortcuts are used for the most commonly accessed functions of the application (e.g. home, list of friends).
-   **In a web-based environment:** A web-based CMS uses WAI-ARIA landmarks (e.g. `banner`, `main`, `navigation`, `search`) to allow authors to navigate more quickly.

##### <span id="sc_a313-r"></span>Related Resources for Success Criterion A.3.1.3:

-   The following is a non-exhaustive list of keyboard shortcut conventions for various platforms:
    -   Desktop OS
        -   **GNOME Desktop on Linux:** [GNOME Human Interface Guidelines 3.4 - Keyboard Interaction](https://developer.gnome.org/hig-book/3.4/input-keyboard.html.en)[](http://developer.gnome.org/accessibility-devel-guide/)
        -   **Mac OS:** [Mac OS X keyboard shortcuts](https://support.apple.com/en-us/HT201236)
        -   **Microsoft Windows:** [Keyboard Shortcuts for Windows](http://windows.microsoft.com/en-us/windows/keyboard-shortcuts)[](http://msdn.microsoft.com/en-us/windows/bb735024.aspx)
    -   Mobile OS
        -   **BlackBerry:** [UI Guidelines - BlackBerry Smartphones - Best practice: Implementing shortcut keys](http://docs.blackberry.com/en/developers/deliverables/17965/Shortcut_keys_1152021_11.jsp#BP_Implementing_shortcut_keys_1152022_11)[](http://us.blackberry.com/support/devices/blackberry_accessibility/)
    -   Cross-OS environments
        -   **Eclipse:** [Eclipse Keyboard Shortcuts](http://eclipse-tools.sourceforge.net/shortcuts.html)[](http://www.eclipse.org/articles/article.php?file=Article-Accessibility/index.html)
        -   **Java SE:** [Java Look and Feel Design Guidelines: Keyboard Operations](http://java.sun.com/products/jlf/ed2/book/HIG.Behavior3.html)[](http://java.sun.com/javase/technologies/accessibility/index.jsp)
        -   **Lotus Notes:** [Keyboard shortcuts in Notes 6.x and Notes 7.x](http://www-01.ibm.com/support/docview.wss?uid=swg21164659)[](http://www-03.ibm.com/able/guidelines/notes/accessr5.html)

#### <span id="sc_a314"></span> <span class="techs-only">Implementing Success Criterion </span>A.3.1.4 Keyboard Access (Enhanced):

All functionality of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> is operable through a <a href="#def-Keyboard-Interface" class="termdef" title="definition: keyboard interface">keyboard interface</a> without requiring specific timings for individual keystrokes. <span class="level">(**Level AAA**)</span>

[Return to A.3.1.4 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a314)

##### <span id="sc_a314-i"></span>Intent of Success Criterion A.3.1.4 (Based on WCAG 2.0, Success Criterion 2.1.3):

The intent of this success criterion is to establish an enhanced requirement for keyboard access at Level AAA, without any exceptions. While some "high-end" drawing features, such as a "watercolor painting" tool that continuously sampled the path, pressure, and angle of a stylus would be very challenging to make fully keyboard accessible, other less complex functions might be practical.

Web-based authoring tools will already be required to meet this success criterion as part of [Success Criterion A.1.1.1](#sc_a111).

##### <span id="sc_a314-e"></span>Examples of Success Criterion A.3.1.4:

-   **Keyboard-driven "freehand" drawing:** A multimedia authoring tool has a mode that allows "freehand" lines to be drawn in increments, letting authors use the keyboard to choose the angle and length of the next increment, after which the shape is smoothed.

##### <span id="sc_a314-r"></span>Related Resources for Success Criterion A.3.1.4:

-   N/A

#### <span id="sc_a315"></span> <span class="techs-only">Implementing Success Criterion </span>A.3.1.5 Customize Keyboard Access:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes keyboard commands, then those keyboard commands can be customized. <span class="level">(**Level AAA**)</span>

[Return to A.3.1.5 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a315)

##### <span id="sc_a315-i"></span>Intent of Success Criterion A.3.1.5:

The intent of this success criterion is to ensure that authors using a keyboard interface on platforms that support keyboard commands have the ability to remap the authoring tool's default keyboard shortcuts in order to avoid keystroke conflicts, use familiar keystroke combinations and optimize keyboard layout (e.g. for one-handed use).

This success criterion only applies to keyboard commands provided by the authoring tool, not keyboard commands provided by the platform on which the authoring tool is based.

##### <span id="sc_a315-e"></span>Examples of Success Criterion A.3.1.5:

-   **Non-web-based authoring tool:** A non-web-based authoring tool has a keyboard setup utility that lists all of the available keyboard shortcuts and allows authors to associate each shortcut with any of the authoring tool's commands (e.g. all of the menu commands).
-   **Web-based content management system:** A web-based content management system has a keyboard setup utility that allows authors to change the access keys that are available during authoring. These access key rebindings are for the authors' use only and do not affect the web content being edited.
-   **Social networking application on a mobile device:** A social networking application has a keyboard setup utility that allows authors to change their keyboard shortcuts for the site. The remapping is saved in site cookies.

##### <span id="sc_a315-r"></span>Related Resources for Success Criterion A.3.1.5:

-   N/A

#### <span id="sc_a316"></span> <span class="techs-only">Implementing Success Criterion</span> A.3.1.6 Present Keyboard Commands:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes keyboard commands, then the authoring tool provides a way for <a href="#def-Author" class="termdef" title="definition: authors">authors</a> to determine the keyboard commands associated with <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> <a href="#def-UI-Component" class="termdef" title="definition: user interface component">components</a>. <span class="level">(**Level AAA**)</span>

[Return to A.3.1.6 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a316)

##### <span id="sc_a316-i"></span>Intent of Success Criterion A.3.1.6:

The intent of this success criterion is to ensure that authors using a keyboard interface on platforms that support keyboard commands have the ability to both discover and be reminded of keyboard shortcuts, while they are using the authoring tool.

##### <span id="sc_a316-e"></span>Examples of Success Criterion A.3.1.6:

-   **Non-web-based authoring tool:** An authoring tool on Windows includes a feature that allows authors to press a modifier key (e.g. the "Alt" key) to display all of the keyboard shortcuts in the current authoring tool user interface on top of the components to which they relate.

##### <span id="sc_a316-r"></span>Related Resources for Success Criterion A.3.1.6:

-   N/A

### <span id="gl_a32"></span> <span class="techs-only">Implementing</span> Guideline A.3.2: (For the authoring tool user interface) Provide authors with enough time. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_a32)\]</span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> who have difficulty typing, operating the mouse, or processing information can be prevented from using systems with short <a href="#def-Time-Limit" class="termdef" title="definition: time limit">time limits</a> or that require fast reaction speeds, such as clicking on a moving target.

#### <span id="sc_a321"></span> <span class="techs-only">Implementing Success Criterion </span>A.3.2.1 Auto-Save (Minimum):

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not include <a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">session</a> <a href="#def-Time-Limit" class="termdef" title="definition: time limit">time limits</a> or the authoring tool can automatically save edits made before the session time limits are reached. <span class="level">(**Level A**)</span>

[Return to A.3.2.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a321)

##### <span id="sc_a321-i"></span>Intent of Success Criterion A.3.2.1:

The intent of this success criterion is to ensure that the work of authors is saved in the event that an authoring session is ended due to a time limit (e.g. the timeout of an authenticated authoring session). Reducing the likelihood of lost content edits will benefit all authors, but especially authors with disabilities who may take longer to accomplish authoring tasks.

For web-based authoring tools, this applies to any web content that has already been submitted to the server by the user agent.

##### <span id="sc_a321-e"></span>Examples of Success Criterion A.3.2.1:

-   **No time limits:** An authoring tool does not include any time limits.
-   **Save and continue:** A web-based content management system automatically logs the author out after 15 minutes of inactivity. Five minutes before this occurs a "Save and Continue" button is displayed to the author.
-   **Wiki:** A wiki has an auto-save feature that can be turned on by authors. The auto-save feature always saves before a system timeout.

##### <span id="sc_a321-r"></span>Related Resources for Success Criterion A.3.2.1:

-   N/A

#### <span id="sc_a322"></span> <span class="techs-only">Implementing Success Criterion </span>A.3.2.2 Timing Adjustable:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not include <a href="#def-Time-Limit" class="termdef" title="definition: time limit">time limits</a> or at least one of the following is true: <span class="level">(**Level A**)</span>

-   **(a) Turn Off:** <a href="#def-Author" class="termdef" title="definition: authors">Authors</a> are allowed to turn off the time limit before encountering it; or
-   **(b) Adjust:** Authors are allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or
-   **(c) Extend:** Authors are warned before time expires and given at least 20 seconds to extend the time limit with a simple action (e.g. "press the space bar"), and authors are allowed to extend the time limit at least ten times; or
-   **(d) Real-time Exception:** The time limit is a required part of a real-time event (e.g. a collaborative authoring system), and no alternative to the time limit is possible; or
-   **(e) Essential Exception:** The time limit is essential and extending it would invalidate the activity; or
-   **(f) 20 Hour Exception:** The time limit is longer than 20 hours.

[Return to A.3.2.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a322)

##### <span id="sc_a322-i"></span>Intent of Success Criterion A.3.2.2 (Based on WCAG 2.0, Success Criterion 2.2.1):

The intent of this success criterion is to ensure that authoring tools provide authors with disabilities adequate time to perform their tasks. Any process that happens without author initiation after a set time or on a periodic basis is a time limit. This includes partial or full updates of the screen (for example, page refresh), or the expiration of a window of opportunity for authors to react to a request for input. It also includes user interface functionality that is advancing or updating at a rate beyond the ability of authors to read and/or understand it. In other words, animated, moving or scrolling information introduces a time limit.

Generally, turning off time limits is better than customizing the length of time limits, which is better than requesting more time before a time limit occurs. In some cases, however, it is not possible to change the time limit (e.g. a collaborative authoring session) and exceptions are therefore provided for those cases.

Web-based authoring tools will already be required to meet this success criterion as part of a [Success Criterion A.1.1.1](#sc_a111).

##### <span id="sc_a322-e"></span>Examples of Success Criterion A.3.2.2:

-   **No time limits:** An authoring tool does not include any time limits.
-   **Web-based content management system:** A web-based content management system has a login timeout function that automatically logs authors out after 20 minutes of inactivity. One minute before the automatic log out, the system notifies authors that they will be logged out unless they cancel the notification, meeting (c). The system also includes a preference setting that lets authors set the timing of the notification up to 10 minutes before the automatic logout, meeting (b).
-   **Real-time collaborative editing system:** A real-time collaborative editing system allows multiple authors to edit the same web content simultaneously. An integral part of the real-time collaborative activity is that any author may edit or delete what others have just authored, meeting (d).

##### <span id="sc_a322-r"></span>Related Resources for Success Criterion A.3.2.2:

-   For web-based authoring tools, see [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php)), especially [WCAG 2.0 Success Criterion 2.2.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#time-limits-required-behaviors).

#### <span id="sc_a323"></span> <span class="techs-only">Implementing Success Criterion </span>A.3.2.3 Static Input Components:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not include moving <a href="#def-UI-Component" class="termdef" title="definition: user interface component">user interface components</a> that accept input where the movement of these components cannot be paused by <a href="#def-Author" class="termdef" title="definition: authors">authors</a>. <span class="level">(**Level A**)</span>

[Return to A.3.2.3 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a323)

##### <span id="sc_a323-i"></span>Intent of Success Criterion A.3.2.3:

The intent of this success criterion is to ensure that authors are not prevented from using the authoring tool by a requirement for either fast reactions (i.e. to click on an object in motion) or the ability to track movement.

##### <span id="sc_a323-e"></span>Examples of Success Criterion A.3.2.3:

-   **No moving user interface controls:** An authoring tool does not include any moving user interface controls.
-   **Timeline-based authoring tool:** A timeline-based interactive web content editor has an indicator of the current position on the timeline that authors can click and drag. When the interactive content is being previewed, the indicator moves along the timeline, which can make it difficult to target with the mouse. Authors can stop the indicator from moving by selecting the "Stop" or "Pause" buttons.

##### <span id="sc_a323-r"></span>Related Resources for Success Criterion A.3.2.3:

-   For web-based authoring tools, see [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php)), especially [WCAG 2.0 Success Criterion 2.2.2](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#time-limits-pause).

#### <span id="sc_a324"></span> <span class="techs-only">Implementing Success Criterion </span>A.3.2.4 Content Edits Saved (Extended):

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> can be set to automatically save <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> edits made using the authoring tool. <span class="level">(**Level AAA**)</span>

[Return to A.3.2.4 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a324)

##### <span id="sc_a324-i"></span>Intent of Success Criterion A.3.2.4:

The intent of this success criterion is to ensure that the work of authors is saved in the event that an authoring session is ended due to a time limit. Reducing the likelihood of lost content edits will benefit all authors, but especially authors with disabilities who may take longer to accomplish authoring tasks. Increasing the frequency with which content edits are saved also helps authors recover more easily from inadvertent actions.

##### <span id="sc_a324-e"></span>Examples of Success Criterion A.3.2.4:

-   **Web-based content management system:** The system includes an option to turn on asynchronous server communication to constantly save authoring actions into a backup file. If the authoring session ends unexpectedly, authors can retrieve backups during their next authoring session.

##### <span id="sc_a324-r"></span>Related Resources for Success Criterion A.3.2.4:

-   N/A

### <span id="gl_a33"></span> <span class="techs-only">Implementing</span> Guideline A.3.3: (For the authoring tool user interface) Help authors avoid flashing that could cause seizures. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_a33)\]</span>

Rationale: Flashing can cause seizures in <a href="#def-Author" class="termdef" title="definition: authors">authors</a> with photosensitive seizure disorder.

#### <span id="sc_a331"></span> <span class="techs-only">Implementing Success Criterion </span>A.3.3.1 Static View Option:

If an <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> can play visual time-based content, then playing is not necessarily automatic upon loading the content and playing can be paused. <span class="level">(**Level A**)</span>

[Return to A.3.3.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a331)

##### <span id="sc_a331-i"></span>Intent of Success Criterion A.3.3.1:

The intent of this success criterion is to ensure that authors with photosensitive seizure disorder can use the authoring tool to open visual time-based web content (e.g. animations) without risk. Some people with seizure disorders can have a seizure triggered by flashing visual content.

##### <span id="sc_a331-e"></span>Examples of Success Criterion A.3.3.1:

-   **Blog:** A blogging tool allows authors to import video files. Authors have the option to turn off an auto-play feature, so that the video files are not played until a "Play" button is activated. Once playing, a pause button is always available.
-   **WYSIWYG web page editor:** A WYSIWYG editing-view is capable of rendering JavaScript in real-time. Authors have the option to turn off the real-time rendering feature, so that the JavaScript is not rendered until a "Play" button is activated. Once playing, a pause button is always available.

##### <span id="sc_a331-r"></span>Related Resources for Success Criterion A.3.3.1:

-   For web-based authoring tools, see [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php)), especially [WCAG 2.0 Guideline 2.3](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#seizure).

### <span id="gl_a34"></span> <span class="techs-only">Implementing</span> Guideline A.3.4: (For the authoring tool user interface) Enhance navigation and editing via content structure. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_a34)\]</span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> who have difficulty typing or operating the mouse benefit when <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> make use of the structure present in <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> to simplify navigating and editing the content.

#### <span id="sc_a341"></span> <span class="techs-only">Implementing Success Criterion </span>A.3.4.1 Navigate By Structure:

If <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-views</a> expose the <a href="#def-Markup" class="termdef" title="definition: markup">markup</a> <a href="#def-Element" class="termdef" title="definition: element">elements</a> in the <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a>, then the markup elements (e.g. source code, content renderings) are selectable and navigation mechanisms are provided to move the selection focus between elements. <span class="level">(**Level AA**)</span>

[Return to A.3.4.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a341)

##### <span id="sc_a341-i"></span>Intent of Success Criterion A.3.4.1:

The intent of this success criterion is to help authors using keyboard interfaces to navigate more efficiently using the structure of the web content being edited in cases where that structure is already exposed to the author.

##### <span id="sc_a341-e"></span>Examples of Success Criterion A.3.4.1:

-   **Source editing-view:** A source editing-view supports authors by providing the ability to use keyboard shortcuts to select the current element (e.g. table row) and other keyboard shortcuts to move the focus to:
    -   the element immediately above (e.g. table),
    -   the first element immediately below (e.g. table data cell),
    -   the element immediately preceding it at the same level (e.g. previous table row), and
    -   the element immediately following it at the same level (e.g. next table row).
-   **Search by headings:** An authoring tool includes a search function mode that enables authors to search forwards or backwards by "any header element". For example, in HTML4 this would be `<h1>`...&lt;`h6>`. When a searched-for header element exists, it is selected in the editing-view, enabling authors to immediately edit the element.
-   **Search by element:** An authoring tool includes a search function mode that enables authors to search forwards or backwards by the names of elements. When a searched-for element exists, it is selected in the editing-view, enabling authors to immediately edit the element. In addition, the search can be customized to search by attributes.  
    <span class="figure">**Figure:** A "Find and Replace" dialog box is shown configured to find the "element" with the name "img", "with attribute" "height" "=" "100" (where each value in quotation marks is editable). The replacement action is to "set attribute" "height" to "50". The following checkbox options are available "match case", "ignore white space", and "search text alternatives". The dialog box also includes the following buttons "Find Next", "Find all", "Replace", "Replace All", "Close", and "Help". (Source: mock up by AUWG)  
    <img src="tech_images/a_3.png" alt="See the example caption above for description." width="504" height="254" /></span>
-   **Outline view:** An "outline" or "structure" editing-view is provided that organizes structured element sets being edited into a document tree. In this editing-view, only the arrow keys are required for navigation between the parent, child, and sibling elements.
-   **Customizing widgets:** An authoring tool enables authors to add and customize JavaScript widgets in its WYSIWYG editing-view. Authors can use the keyboard to navigate through the elements that make up the widget in order to set the properties or appearance of the widget. For example, in a slider widget, the keyboard can be used to select the background, the line, the line ticks or the thumb marker of the slider.
-   **WYSIWYG web page editor:** A WYSIWYG editing-view allows authors to select and manipulate elements as objects. When an element is selected, any content (including sub-elements) of the element are also selected. When authors perform a function on a selected element, the scope of the function and the resulting outcome depends on the nature of the function.
    -   Some functions target the entire selection (i.e. the element, content, and sub-elements). For example, when a `<table>` element is selected and the "delete" operation is performed, the entire table is deleted, including sub-elements (`<tr>` and `<td>` elements), and any content, such as text or images, within the table.
    -   Some functions only target the top level element of the selection. For example, the "strip element tag" function deletes the markup of the top level element without affecting its sub-elements or content.
    -   Some functions only target the content, including sub-elements of the top level element of the selection without having any effect on the markup of that top level element. For example, the “replace contents” function is a variant of "paste" in which the sub-elements and content of the selected element are replaced.

##### <span id="sc_a341-r"></span>Related Resources for Success Criterion A.3.4.1:

-   N/A

#### <span id="sc_a342"></span> <span class="techs-only">Implementing Success Criterion </span>A.3.4.2 Navigate by Programmatic Relationships:

If <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-views</a> allow editing of programmatic <a href="#def-Relationships" class="termdef" title="definition: relationships">relationships</a> within <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a>, then mechanisms are provided that support navigation between the related content. <span class="level">(**Level AAA**)</span>

-   *Note:*<span class="sc-title"> Depending on the <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technology</a> and the nature of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, relationships may include, but are not limited to, element nesting, headings, labeling, programmatic definitions, and ID relationships.</span>

[Return to A.3.4.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a342)

##### <span id="sc_a342-i"></span>Intent of Success Criterion A.3.4.2:

The intent of this success criterion is to help authors using keyboard interfaces to navigate more efficiently using the programmatic relationships that may exist in many types of web content.

##### <span id="sc_a342-e"></span>Examples of Success Criterion A.3.4.2:

-   **JavaScript editor:** When a method is used, authors can navigate directly to where that method is defined.
-   **HTML/CSS editor:** When a style is used in content being edited, authors can navigate directly to where that style is defined, even if an external style sheet must be opened.
-   **HTML editor:** When an `id` is used in content being edited, authors can navigate directly to where that `id` is defined.
-   **WAI-ARIA editor:** Authors can navigate directly via WAI-ARIA relationships, such as `aria-labeledby` and `aria-describedby`.

##### <span id="sc_a342-r"></span>Related Resources for Success Criterion A.3.4.2:

-   N/A

### <span id="gl_a35"></span> <span class="techs-only">Implementing</span> Guideline A.3.5: (For the authoring tool user interface) Provide text search of the content. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_a35)\]</span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> who have difficulty typing or operating the mouse benefit from the ability to use text search to navigate to arbitrary points within the <span class="sc-title"><a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a></span>.

#### <span id="sc_a351"></span> <span class="techs-only">Implementing Success Criterion </span>A.3.5.1 Text Search:

If the authoring tool provides an <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> of text-based content, then the <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> enables text search, such that all of the following are true: <span class="level">(**Level AA**)</span>

-   **(a) All Editable Text:** Any text content that is editable by the editing-view is searchable (including <a href="#def-Alternative-Content" class="termdef" title="definition: alternative content">alternative content</a>); and
-   **(b) Match:** Matching results can be presented to authors and given focus; and
-   **(c) No Match:** Authors are informed when no results are found; and
-   **(d) Two-way:** The search can be made forwards or backwards.

[Return to A.3.5.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a351)

##### <span id="sc_a351-i"></span>Intent of Success Criterion A.3.5.1:

The intent of this success criterion is to ensure that authors can efficiently find the web content that they wish to edit.

##### <span id="sc_a351-e"></span>Examples of Success Criterion A.3.5.1:

-   **Basic text search:** An authoring tool provides both WYSIWYG and source editing-views. The authoring tool provides two-way searching for plain text sequences within both editing-views. The default search option is to search only within the editing-view that the author is currently working within. However, there is an option to search both editing-views simultaneously. When this option is selected, the search results are all displayed in a selectable list that labels each as "Text" or "Source Code", reflecting which editing-view will become active when the author selects the search result.
-   **Advanced text search:** An authoring tool's basic text search feature is augmented by more advanced search options, such as:
    -   replacement,
    -   wildcard characters,
    -   whole word matching,
    -   search repetition, and
    -   highlighting of all occurrences.
-   **Metadata editor:** A metadata editor provides two-way searching for plain text sequences within textual metadata fields (e.g. title, description, and author fields).

##### <span id="sc_a351-r"></span>Related Resources for Success Criterion A.3.5.1:

-   N/A

### <span id="gl_a36"></span> <span class="techs-only">Implementing</span> Guideline A.3.6: (For the authoring tool user interface) Manage preference settings. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_a36)\]</span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> need to set their own <a href="#def-Display-Settings" class="termdef" title="definition: display settings">display settings</a> in a way that differs from the <a href="#def-Presentation" class="termdef" title="definition: presentation">presentation</a> that they want to define for the <a href="#def-Publishing" class="termdef" title="definition: publishing">published</a> <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a>. Providing the ability to save and reload sets of keyboard and display preference settings benefits <a href="#def-Author" class="termdef" title="definition: authors">authors</a> who have needs that differ over time (e.g. due to fatigue).

#### <span id="sc_a361"></span><span class="techs-only">Implementing Success Criterion </span>A.3.6.1 Independence of Display:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes <a href="#def-Display-Settings" class="termdef" title="definition: display settings">display settings</a> for <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-views</a>, then the authoring tool allows <a href="#def-Author" class="termdef" title="definition: authors">authors</a> to adjust these settings without modifying the <a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">web content being edited</a>. <span class="level">(**Level A**)</span>

[Return to A.3.6.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a361)

##### <span id="sc_a361-i"></span>Intent of Success Criterion A.3.6.1:

The intent of this success criterion is to ensure that the preference display settings that authors set for their own use while they are editing web content are independent of the display settings that are encoded (and eventually published) in the content being edited.

When "WYSIWYG authoring tools" are referred to in the examples, it is with the understanding that browsers will differ in rendering of the same content and that end users are often free to override the default presentation of web content.

##### <span id="sc_a361-e"></span>Examples of Success Criterion A.3.6.1:

-   **Editing-view preferences:** A non-web-based WYSIWYG authoring tool has preference settings that enable authors to override the default rendering styles used in the WYSIWYG editing-view with the display settings that they have already set in the operating system (e.g. large fonts, high contrast mode). The preference settings have absolutely no effect on the web content being edited.
-   **Setting an authoring style sheet:** A WYSIWYG authoring tool has preference settings that enable authors to set an "authoring" style sheet. This style sheet is only used to control the rendering of the web content in the author's editing-view. The style sheet does not make changes to the content markup being edited and is not published to end users.
-   **Web-based authoring tool:** A web-based authoring tool lets authors customize the appearance of editing-views using the preference display settings of the user agent. The user agent would be cited in any [conformance claim](#conf-claim).

##### <span id="sc_a361-r"></span>Related Resources for Success Criterion A.3.6.1:

-   N/A

#### **<span id="sc_a362"></span>** <span class="techs-only">Implementing Success Criterion </span>A.3.6.2 Save Settings:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes <a href="#def-Display-Settings" class="termdef" title="definition: display settings">display</a> and/or <a href="#def-Control-Settings" class="termdef" title="definition: control settings">control settings</a>, then these settings can be saved between <a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">authoring sessions</a>. <span class="level">(**Level AA**)</span>

[Return to A.3.6.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a362)

##### <span id="sc_a362-i"></span>Intent of Success Criterion A.3.6.2:

The intent of this success criterion is to ensure that authors' preference settings for keyboard and display settings do not need to be re-entered at the beginning of each authoring session.

##### <span id="sc_a362-e"></span>Examples of Success Criterion A.3.6.2:

-   **Storing preferences with author account:** A web-based authoring tool requires that authors log in to their accounts before authoring sessions can begin. Because preference settings are associated with author accounts, the settings are applied as soon as authors log in.

##### <span id="sc_a362-r"></span>Related Resources for Success Criterion A.3.6.2:

-   N/A

#### **<span id="sc_a363"></span>** <span class="techs-only">Implementing Success Criterion </span>A.3.6.3 Apply Platform Settings:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> respects changes in <a href="#def-Platform" class="termdef" title="definition: platform">platform</a> <a href="#def-Display-Settings" class="termdef" title="definition: display settings">display</a> and <a href="#def-Control-Settings" class="termdef" title="definition: control settings">control settings</a>, unless <a href="#def-Author" class="termdef" title="definition: authors">authors</a> select more specific display and control settings using the authoring tool. <span class="level">(**Level AA**)</span>

[Return to A.3.6.3 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a363)

##### <span id="sc_a363-i"></span>Intent of Success Criterion A.3.6.3:

The intent of this success criterion is to encourage authoring tools to respect the display and control settings that authors have already specified at the platform level unless the author has specifically selected different settings at the level of the authoring tool. This reduces the need for authors to repeatedly specify the same preferences. It also means that when authors first open the authoring tool, they can more easily use the tool.

##### <span id="sc_a363-e"></span>Examples of Success Criterion A.3.6.3:

-   **Desktop high contrast mode:** A non-web-based authoring tool defaults to high contrast mode when it detects that the platform is set to high contrast mode.
-   **Web-based authoring tool:** A web-based authoring tool respects the display and control settings of the user agent on which it is running.

##### <span id="sc_a363-r"></span>Related Resources for Success Criterion A.3.6.3:

-   For web-based authoring tools, see Related Resources for [Success Criteria A.1.1.1](#sc_a111-r).
-   For non-web-based authoring tools, see Related Resources for [Success Criterion A.1.2.1](#sc_a121-r).

### <span id="gl_a37"></span> <span class="techs-only">Implementing</span> Guideline A.3.7: (For the authoring tool user interface) Ensure that previews are at least as accessible as in-market user agents. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_a37)\]</span>

Rationale: <a href="#def-Preview" class="termdef" title="definition: preview">Preview</a> features are provided by many <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> because the <a href="#def-Workflow" class="termdef" title="definition: workflow">workflow</a> of <a href="#def-Author" class="termdef" title="definition: authors">authors</a> often includes periodically checking how <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agents</a> will display the <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> to <a href="#def-End-Users" class="termdef" title="definition: end user">end users</a>. Authors with disabilities need the same opportunity to check their work.

#### <span id="sc_a371"></span> <span class="techs-only">Implementing Success Criterion </span>A.3.7.1 Preview (Minimum):

If a <a href="#def-Preview" class="termdef" title="definition: preview">preview</a> is provided, then at least one of the following is true: <span class="level">(**Level A**)</span>

-   **(a) In-Market User Agent:** The preview renders content using a <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a> that is <a href="#def-Inmarket-User-Agent" class="termdef" title="definition: in-market user agent">in-market</a>; or
-   **(b) UAAG (Level A):** The preview conforms to the User Agent Accessibility Guidelines 1.0 Level A [\[UAAG10\]](#ref-UAAG10).

[Return to A.3.7.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a371)

##### <span id="sc_a371-i"></span>Intent of Success Criterion A.3.7.1:

The intent of this success criterion is to ensure that preview features strike a balance between giving authors with disabilities a more accessible means of previewing the web content that they are editing and not giving those authors an unrealistic impression of how end users with similar disabilities will actually experience that content in their own user agents (e.g. browser, video player) used in the market. In other words, it is not necessarily useful to present a user experience with content as a "preview" when it is much more accessible than the actual end user experience of the content would be in an in-market user agent.

There are two ways to meet this success criterion:

Option (a) is to implement preview features using user agents that are already in use by end users, which is the most straightforward way to meet this success criterion. This might be done in several ways, including by opening the content in the author's default user agent or by making use of an in-market user agent widget nested within the authoring tool's own user interface. The user agent would be cited in any [conformance claim](#conf-claim).

Option (b) requires that, if a preview is being developed that is already a departure from existing in-market user agents, then the W3C User Agent Accessibility Guidelines (UAAG) must be followed. At the time of publication, UAAG version 1.0 is a W3C Recommendation and version 2.0 is under development.

*Note:* Developers may create a preview feature from scratch that does not meet (b), as long as authors retain the option to preview using their own user agent, since this meets (a).

##### <span id="sc_a371-e"></span>Examples of Success Criterion A.3.7.1:

-   **Preview in a user agent:** A web-based authoring tool performs previews by opening the web content in a new user agent tab or window, meeting (a).
-   **Preview in an external user agent:** A non-web-based authoring tool performs previews by opening the web content to be previewed in the user's default browser, meeting (a).
-   **Preview in a user agent component:** A non-web-based authoring tool performs previews using a user agent component that is built directly into the authoring tool, meeting (a).
-   **Custom built preview:** An authoring tool makes use of a custom built preview feature. The preview feature conforms to User Agent Accessibility Guidelines (UAAG) 1.0 at Level "A", meeting (b).

##### <span id="sc_a371-r"></span>Related Resources for Success Criterion A.3.7.1:

-   [User Agent Accessibility Guidelines (UAAG) 1.0](http://www.w3.org/TR/UAAG10/).

#### <span id="sc_a372"></span> <span class="techs-only">Implementing Success Criterion </span>A.3.7.2 Preview (Enhanced):

If a <a href="#def-Preview" class="termdef" title="definition: preview">preview</a> is provided, then <a href="#def-Author" class="termdef" title="definition: authors">authors</a> can specify which <a href="#def-User-Agent" class="termdef" title="definition: user agent">user agent</a> performs the preview. <span class="level">(**Level AAA**)</span>

[Return to A.3.7.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a372)

##### <span id="sc_a372-i"></span>Intent of Success Criterion A.3.7.2:

The intent of this success criterion is to provide an enhanced Level AAA requirement for preview features, in which authors have the flexibility to choose their preferred user agent for performing previews.

##### <span id="sc_a372-e"></span>Examples of Success Criterion A.3.7.2:

-   **Non-web-based authoring tool:** A non-web-based authoring tool gives authors the option of choosing from any of the user agents installed on their computer to perform the preview.
-   **Web-based authoring tool:** A web-based authoring tool provides authors with a URI that can be entered into another user agent to perform the preview.

##### <span id="sc_a372-r"></span>Related Resources for Success Criterion A.3.7.2:

-   N/A

<span id="principle_a4"></span> <span class="techs-only">Implementing </span>Principle A.4: Editing-views are understandable
----------------------------------------------------------------------------------------------------------------------------

### <span id="gl_a41"></span> <span class="techs-only">Implementing</span> Guideline A.4.1: (For the authoring tool user interface) Help authors avoid and correct mistakes. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_a41)\]</span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> with disabilities may be more susceptible to input errors due to factors such as difficulty making fine movements and speech recognition system errors.

#### <span id="sc_a411"></span> <span class="techs-only">Implementing Success Criterion </span>A.4.1.1 Content Changes Reversible (Minimum):

All <a href="#def-Authoring-Action" class="termdef" title="definition: authoring actions">authoring actions</a> are either <a href="#def-Reversible-Action" class="termdef" title="definition: reversible authoring action">reversible</a> or the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> requires <a href="#def-Author" class="termdef" title="definition: authors">author</a> confirmation to proceed. (**<span class="level">Level A</span>**)

[Return to A.4.1.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a411)

##### <span id="sc_a411-i"></span>Intent of Success Criterion A.4.1.1:

The intent of this success criterion is to help authors with disabilities avoid serious consequences in the web content that they are editing as the result of a mistake while performing authoring actions. Everyone makes mistakes, but people with some disabilities have more difficulty creating error-free input.

##### <span id="sc_a411-e"></span>Examples of Success Criterion A.4.1.1:

-   **Non-web-based authoring tool:** An authoring tool has an "Undo" action under the "Edit" menu. Activating the "Undo" action reverses the previous authoring action. Activating "Undo" again undoes the previous authoring action and so on.
-   **Web-based content management system:** A web-based content management system supports two types of reversible actions. Firstly, text entry actions in text fields can be reversed using the "Undo" feature of the user agent. Secondly, "Cancel" buttons are available that allow authors to reverse changes that have already been committed. However, to avoid the "Cancel" button being pressed accidentally, authors have the option of having confirmation dialogs displayed when "Cancel" is activated (see [Success Criterion A.4.1.3](#sc_a413)). The user agent would be cited in any [conformance claim](#conf-claim).

##### <span id="sc_a411-r"></span>Related Resources for Success Criterion A.4.1.1:

-   For web-based authoring tools, see [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php)), especially [WCAG 2.0 Guideline 3.3](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error).

#### <span id="sc_a412"></span> <span class="techs-only">Implementing Success Criterion </span>A.4.1.2 Settings Change Confirmation:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides mechanisms for changing <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> settings, then those mechanisms can reverse the setting changes, or the authoring tool requires <a href="#def-Author" class="termdef" title="definition: authors">author</a> confirmation to proceed. (**<span class="level">Level A</span>**)

[Return to A.4.1.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a412)

##### <span id="sc_a412-i"></span>Intent of Success Criterion A.4.1.2:

The intent of this success criterion is to help authors with disabilities avoid making the authoring tool unusable to them as the result of making a mistake while installing the program or modifying preference settings. The success criterion, therefore, requires that mechanisms for changing settings can also be used by authors to return the settings to their original values or, if the setting is not reversible with the same mechanism, the author will have had to confirm the setting. Everyone makes mistakes, but people with some disabilities have more difficulty creating error-free input. In addition, it may be harder for some people with disabilities to detect that they have made an error.

##### <span id="sc_a412-e"></span>Examples of Success Criterion A.4.1.2:

-   **All reversible:** All of the preference setting changes in an authoring tool can be reversed by revisiting the preference setting utility and adjusting the settings.
-   **Restore defaults:** In a preference setting utility, a "restore default settings" button is always available.
-   **Upgrade confirmation:** An authoring tool has a setting that allows the author to upgrade to the newest version free of charge. However, once the upgrade is made it will not be possible to reverse the installer for the previous version is no longer available. When the author selects the setting, they receive a warning that the upgrade will not be reversible and they must confirm that they wish to upgrade.

##### <span id="sc_a412-r"></span>Related Resources for Success Criterion A.4.1.2:

-   For web-based authoring tools, see [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php)), especially [Guideline 3.3](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error).

#### <span id="sc_a413"></span> <span class="techs-only">Implementing Success Criterion </span>A.4.1.3 Content Changes Reversible (Enhanced):

<a href="#def-Author" class="termdef" title="definition: authors">Authors</a> can sequentially reverse a series of <a href="#def-Reversible-Action" class="termdef" title="definition: reversible authoring action">reversible authoring actions</a>. <span class="level">(**Level AAA**)</span>

-   *Note:* It is acceptable to clear the authoring action history at the <a href="#def-End-Auth-Session" class="termdef" title="definition: end of an authoring session">end of authoring sessions</a>.

[Return to A.4.1.3 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a413)

##### <span id="sc_a413-i"></span>Intent of Success Criterion A.4.1.3:

The intent of this success criterion is to establish an enhanced Level AAA requirement for reversing inadvertent actions that modify the content being edited. Everyone makes mistakes, but some people with some disabilities have more difficulty creating error-free input. In addition, it may be harder for some people with disabilities to detect and rectify errors, so it is more likely that they will benefit from the ability to reverse a series of actions once an error is discovered.

The note makes it clear that this success criterion does not require authoring actions made in one authoring session to be reversible in subsequent authoring sessions.

##### <span id="sc_a413-e"></span>Examples of Success Criterion A.4.1.3:

-   **Undo queue:** An authoring tool saves author actions in a "last-in-last-out" queue.

##### <span id="sc_a413-r"></span>Related Resources for Success Criterion A.4.1.3:

-   N/A

### <span id="gl_a42"></span> <span class="techs-only">Implementing</span> Guideline A.4.2: (For the authoring tool user interface) Document the user interface, including all accessibility features. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_a42)\]</span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: authors">authors</a> may not be able to understand or operate the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> without <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a>.

#### <span id="sc_a421"></span> <span class="techs-only">Implementing Success Criterion </span>A.4.2.1 Describe Accessibility Features:

For each <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> feature that is used to meet [Part A](#part_a) of ATAG 2.0, at least one of the following is true: <span class="level">(**Level A**)</span>

-   **(a) Described in the Documentation:** Use of the feature is explained in the authoring tool's <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a>; or
-   **(b) Described in the Interface:** Use of the feature is explained in the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a>; or
-   **(c) Platform Service:** The feature is a service provided by an underlying platform; or
-   **(d) Not Used by Authors:** The feature is not used directly by <a href="#def-Author" class="termdef" title="definition: authors">authors</a> (e.g. passing information to a <a href="#def-Accessibility-Platform-Service" class="termdef" title="definition: accessibility platform architecture">platform accessibility service</a>).

<!-- -->

-   *Note:* The accessibility of the documentation is covered by [Guideline A.1.1](#gl_a11) and [Guideline A.1.2](#gl_a11).

[Return to A.4.2.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a421)

##### <span id="sc_a421-i"></span>Intent of Success Criterion A.4.2.1:

The intent of this success criterion is to ensure that authors with disabilities that need to use the accessibility features of the authoring tool user interface can easily find descriptions of how to use the features. These descriptions can be provided in the documentation or user interface of the authoring tool or by the underlying platform, if the feature is in fact a service of that platform.

The note is a reminder that the accessibility of the documentation is covered by [Guideline A.1.1](#gl_a11) and [Guideline A.1.2](#gl_a11).

##### <span id="sc_a421-e"></span>Examples of Success Criterion A.4.2.1:

-   **Accessibility features documented:** An authoring tool includes a help system that is always available to authors, is searchable by keyword and is also linked in context from the various features within the authoring tool. The documentation conforms to WCAG 2.0 Level A and includes the following topics grouped together into an "Accessibility Features" chapter in the help system:
    -   how to customize display settings
    -   what keyboard shortcuts are available, including navigation keys
    -   how to customize keyboard shortcuts
    -   how to avoid keyboard traps in content
    -   how to extend time limits
    -   how to use the search features
    -   how to undo/redo
    -   how to set accessibility-related options, such as turning off auto-play

##### <span id="sc_a421-r"></span>Related Resources for Success Criterion A.4.2.1:

-   N/A

#### <span id="sc_a422"></span> <span class="techs-only">Implementing Success Criterion </span>A.4.2.2 Document All Features:

For each <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> feature, at least one of the following is true: <span class="level">(**Level AA**)</span>

-   **(a) Described in the Documentation:** Use of the feature is explained in the authoring tool's <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a>; or
-   **(b) Described in the Interface:** Use of the feature is explained in the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a>; or
-   **(c) Platform Service:** The feature is a service provided by an underlying platform; or
-   **(d) Not Used by Authors:** The feature is not used directly by <a href="#def-Author" class="termdef" title="definition: authors">authors</a> (e.g. passing information to a <a href="#def-Accessibility-Platform-Service" class="termdef" title="definition: accessibility platform architecture">platform accessibility service</a>).

<!-- -->

-   *Note:* The accessibility of the documentation is covered by [Guideline A.1.1](#gl_a11) and [Guideline A.1.2](#gl_a11).

[Return to A.4.2.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_a422)

##### <span id="sc_a422-i"></span>Intent of Success Criterion A.4.2.2:

The intent of this success criterion is to ensure that authors who need additional support to learn to operate an authoring tool can easily find descriptions of the authoring tool's features. These descriptions can be provided in the documentation or user interface of the authoring tool or by the underlying platform, if the feature is in fact a service of that platform.

The note is a reminder that the accessibility of the documentation is covered by [Guideline A.1.1](#gl_a11) and [Guideline A.1.2](#gl_a11).

##### <span id="sc_a422-e"></span>Examples of Success Criterion A.4.2.2:

-   **All features documented:** An authoring tool includes documentation for all of its available features. The documentation conforms to WCAG 2.0 Level A.

##### <span id="sc_a422-r"></span>Related Resources for Success Criterion A.4.2.2:

-   ["Software Documentation" on Wikipedia](http://en.wikipedia.org/wiki/Software_documentation)

<span id="part_b"></span> <span class="techs-only">Implementing </span>Part B: Support the production of accessible content
---------------------------------------------------------------------------------------------------------------------------

### <span id="part_b_applic_notes"></span>Part B Conformance Applicability Notes:

1.  <span id="part_b_applic_note_1"></span>**Author availability:** Any Part B success criteria that refer to <a href="#def-Author" class="termdef" title="definition: authors">authors</a> only apply during <a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">authoring sessions</a>.
2.  **<span id="part_b_applic_note_2"></span>Developer control:** The Part B success criteria only apply to the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> as it is provided by the <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">developer</a>. This does not include subsequent modifications by parties other than the authoring tool developer (e.g. third-party plug-ins, user-defined <a href="#def-Template" class="termdef" title="definition: template">templates</a>, user modifications of default settings).
3.  **<span id="part_b_applic_note_3"></span>Applicability after the end of an authoring session:** <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">Authoring tools</a> are responsible for the <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible web content">web content accessibility (WCAG)</a> of <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that they <span class="sc"><a href="#def-Content-Auto-Gen" class="termdef" title="definition: automatically-generated content">automatically generate</a></span> after the <a href="#def-End-Auth-Session" class="termdef" title="definition: end of an authoring session">end of an author's authoring session</a> (see [Success Criterion B.1.1.1](#sc_b111)). For example, if the developer changes the site-wide <a href="#def-Template" class="termdef" title="definition: template">templates</a> of a content management system, these would be required to meet the accessibility requirements for automatically-generated content. Authoring tools are not responsible for changes to the accessibility of content that the author causes, whether it is <a href="#def-Content-Author-Gen" class="termdef" title="definition: author generated content">author-generated</a> or automatically-generated by another system that the author has specified (e.g. a third-party feed).  
4.  **<span id="part_b_applic_note_4"></span>Authoring systems:** As per the ATAG 2.0 definition of <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, several software tools (identified in any [conformance claim](#conf-claim)) can be used in conjunction to meet the requirements of Part B (e.g. an authoring tool could make use of a third-party software accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> tool).
5.  **<span id="part_b_applic_note_5"></span>Accessibility of features provided to meet Part B:** The [Part A](#part_a) success criteria apply to the entire <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a>, including any features that must be present to meet the success criteria in Part B (e.g. checking tools, repair tools, tutorials, documentation).
6.  **<span id="part_b_applic_note_6"></span>Multiple authoring roles:** Some <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> include multiple <a href="#def-Author" class="termdef" title="definition: authors">author</a> roles, each with different views and content editing <a href="#def-Authoring-Permission" class="termdef" title="definition: author permission">permissions</a> (e.g. a content management system may separate the roles of designers, content authors, and quality assurers). In these cases, the Part B success criteria apply to the authoring tool as a whole, not to the view provided to any particular authoring role. <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">Accessible content support features</a> should be made available to any authoring role where it would be useful.
7.  **<span id="part_a_applic_note_7"></span>Unrecognizable content:** When success criteria require authoring tools to treat web content according to semantic criteria, the success criteria only apply when these semantics are encoded programmatically (e.g. text describing an image can only be considered a <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for non-text content</a> when this role is encoded within markup).

<span id="principle_b1"></span><span class="techs-only">Implementing </span>Principle B.1: Fully automatic processes produce accessible content
-----------------------------------------------------------------------------------------------------------------------------------------------

### <span id="gl_b11"></span> <span class="techs-only">Implementing</span> Guideline B.1.1: Ensure that automatically-specified content is accessible. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_b11)\]</span>

Rationale: If <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tools</a> <span class="sc"><a href="#def-Content-Auto-Gen" class="termdef" title="definition: automatically-generated content">automatically</a></span> produce <span class="sc"><a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a></span> that includes <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: web content accessibility problems">accessibility problems (WCAG)</a>, then this will impose additional <a href="#def-Repairing" class="termdef" title="definition: repairing">repair</a> tasks on <a href="#def-Author" class="termdef" title="definition: authors">authors</a>.

#### <span id="sc_b111"></span> <span class="techs-only">Implementing Success Criterion </span>B.1.1.1 Content Auto-Generation After Authoring Sessions (WCAG):

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not <a href="#def-Content-Auto-Gen" class="termdef" title="definition: automatically-generated content">automatically generate</a> <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> after the <a href="#def-End-Auth-Session" class="termdef" title="definition: end of an authoring session">end of an authoring session,</a> or, <a href="#def-Author" class="termdef" title="definition: authors">authors</a> can specify that the content be <span class="rationale"><a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible Web content">accessible web content (WCAG)</a></span>. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   *Note:* This success criterion applies only to automatic processes specified by the <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">authoring tool developer</a>. It does not apply when <a href="#def-Author-Actions-Prevent" class="termdef" title="definition: author actions prevent generation of accessible web content">author actions prevent generation of accessible web content (WCAG)</a>.

[Return to B.1.1.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b111)

##### <span id="sc_b111-i"></span>Intent of Success Criterion B.1.1.1:

The intent of this success criterion is to ensure that when authoring tools have been designed to generate web content that is published directly to end users without an opportunity for author action, the default option should be for that web content to be accessible (WCAG).

The note acknowledges that there are automatic behaviors that may be specified by other parties and that author actions may purposefully or inadvertently affect the accessibility of the content generated later.

[WCAG 2.0](#conf-rel-wcag) is referenced because it provides testable success criteria to measure web content accessibility.

##### <span id="sc_b111-e"></span>Examples of Success Criterion B.1.1.1:

-   **No automatic content generation after authoring sessions:** An authoring tool only makes edits to content as directed by the author when the content file is open for authoring (i.e. during an authoring session)
-   **Email archive:** An automatic email archiving system automatically creates web pages from each email message that it receives. It has been designed to generate accessible markup, but if email messages contain accessibility problems, the archiving system is not able to rectify them.
-   **Social networking application:** A social networking application collects some limited information from authors (e.g. name, gender, status updates), which the application uses to personalize an automatically-generated web application that meets the requirements of WCAG.

##### <span id="sc_b111-r"></span>Related Resources for Success Criterion B.1.1.1:

-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

#### <span id="sc_b112"></span> <span class="techs-only">Implementing Success Criterion </span>B.1.1.2 Content Auto-Generation During Authoring Sessions (WCAG):

If the <span class="sc-title"><a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a></span> provides the functionality for <span class="sc-title"><a href="#def-Content-Auto-Gen" class="termdef" title="definition: automatically-generated content">automatically generating</a></span> <span class="sc-title"><a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a></span> during an <a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">authoring session</a>, then at least one of the following is true: <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   **(a) Accessible:** The content is <span class="rationale"><a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible Web content">accessible web content (WCAG)</a> </span> without author input; or
-   **(b) Prompting:** During the automatic generation process, <span class="sc-title"><a href="#def-Author" class="termdef" title="definition: authors">authors</a></span> are <a href="#def-Prompt" class="termdef" title="definition: prompt">prompted</a> for any required <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">accessibility information (WCAG)</a>; or
-   **(c) Automatic Checking:** After the automatic generation process, accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> is automatically performed; or
-   **(d) Checking Suggested:** After the automatic generation process, the authoring tool prompts authors to perform accessibility checking.

<!-- -->

-   *Note 1:* Automatic generation includes automatically selecting <a href="#def-Template" class="termdef" title="definition: template">templates</a> for authors.
-   *Note 2:* This success criterion applies only to automatic processes specified by the <a href="#def-Developer" class="termdef" title="definition: authoring tool developers">authoring tool developer</a>. It does not apply when <a href="#def-Author-Actions-Prevent" class="termdef" title="definition: author actions prevent generation of accessible web content">author actions prevent generation of accessible web content (WCAG)</a>.

[Return to B.1.1.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b112)

##### <span id="sc_b112-i"></span>Intent of Success Criterion B.1.1.2:

The intent of this success criterion is to provide more flexible developer guidance in cases where authors are available to assist in increasing the accessibility of content. The guidance recognizes that authors may often not be able to assist, if they are not made aware that web content accessibility problems do or may exist.

Note 1 highlights the fact that when an authoring tool automatically selects a template for the author to use, the authoring tool is considered to be auto-generating the content in the template.

Note 2 acknowledges that there are many ways in which the automatic behavior of authoring tools can be modified that are not under the control of the developer.

There are four ways to meet this success criterion:

Option (a) is the most straightforward. It requires the authoring tool to generate only accessible content.

Option (b) takes into account that even more access-aware authoring tools may need to query the author regarding issues that require human judgment, such as whether alternative text is suited to the context.

Option (c) takes into account that prompting during the generation process may be contrary to the workflow. Instead, the authoring tool can run a checker on the output.

Option (d) is similar to (c) but takes into account that ATAG 2.0 allows the option of manual checking.

[WCAG 2.0](#conf-rel-wcag) is referenced because it provides testable success criteria to measure web content accessibility.

##### <span id="sc_b112-e"></span>Examples of Success Criterion B.1.1.2:

-   **Markup behind WYSIWYG:** A WYSIWYG web page authoring tool provides authors with a toolbar of options for formatting text. Following the WYSIWYG (what-you-see-is-what-you-get) paradigm, the options are labeled with the visual result (e.g. a bold "B" to represent bold, an italicized "I" to represent italics) of performing the action however, the content that is automatically-generated from those actions actually conforms to [WCAG 2.0](#conf-rel-wcag) (e.g. using `strong` for bold and `em` for emphasis), meeting (a).
-   **Automatic generation with author input:** An online photo album allows authors to upload images and then automatically generates content to display the images. Since the album application is not able to automatically generate alternative content for the images that meets [WCAG 2.0](#conf-rel-wcag), authors are prompted for this information, meeting (b).
-   **Automatic accessibility checking:** An authoring tool allows images, videos, and other multimedia files to be dragged into documents. When this happens, markup is automatically-generated that contains accessibility problems. However, the authoring tool includes an "as-you-type" accessibility checker that unobtrusively highlights the problems for author attention, meeting (c).
-   **Manual accessibility checking:** An authoring tool allows images, videos, and other multimedia files to be dragged into documents. When this happens, markup is automatically-generated that contains accessibility problems. Since the authoring tool includes a manual checking wizard instead of an automatic checker, a message appears in a status area of the user interface stating that the author should use the wizard before publishing, meeting (d).
-   **Documentation:** An authoring tool that employs automatic content generation documents the accessibility of this functionality with reference to particular [WCAG 2.0](#conf-rel-wcag) techniques.

##### <span id="sc_b112-r"></span>Related Resources for Success Criterion B.1.1.2:

-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

### <span id="gl_b12"></span> <span class="techs-only">Implementing</span> Guideline B.1.2: Ensure that accessibility information is preserved. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_b12)\]</span>

Rationale: <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">Accessibility information (WCAG)</a> is critical to maintaining comparable levels of <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible Web content">web content accessibility (WCAG)</a> between the input and output of <a href="#def-Transformation" class="termdef" title="definition: transformation">web content transformations</a>.

#### <span id="sc_b121"></span> <span class="techs-only">Implementing Success Criterion </span>B.1.2.1 Restructuring and Recoding Transformations (WCAG):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Restructuring-Transformation" class="termdef" title="definition: restructuring transformations">restructuring transformations</a> or <a href="#def-Recoding-Transformation" class="termdef" title="definition: recoding transformations">re-coding transformations</a>, and if equivalent mechanisms exist in the web content technology of the output, then at least one of the following is true: <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   **(a) Preserve:** <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">Accessibility information (WCAG)</a> is preserved in the output; or
-   **(b) Warning:** Authors have the <span class="sc-title"><a href="#def-Default-Option" class="termdef" title="definition: default option">default option</a></span> to be warned that accessibility information (WCAG) may be lost (e.g. when saving a vector graphic into a raster image format); or
-   **(c) Automatic Checking:** After the transformation, accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> is automatically performed; or
-   **(d) Checking Suggested:** After the transformation, the authoring tool <a href="#def-Prompt" class="termdef" title="definition: prompt">prompts</a> authors to perform accessibility checking.

<!-- -->

-   *Note 1:* For <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for non-text content</a>, see [Success Criterion B.1.2.4](#sc_b124).
-   *Note 2:* This success criteria only applies when the output technology is ["included"](#conf-techs-produced) for conformance.

[Return to B.1.2.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b121)

##### <span id="sc_b121-i"></span>Intent of Success Criterion B.1.2.1:

The intent of this success criterion is to encourage authoring tools to preserve accessibility information (WCAG) during restructuring or recoding transformations and to ensure that authors are made aware when the authoring tool is unable to preserve accessibility information. This may occur when the output format does not support the same accessibility features as the input format (i.e. the example of a vector graphic being saved as a raster image format) or when an authoring tool has not implemented the necessary data mapping. There is no negative connotation intended here. In some cases, the number of source technology possibilities is simply too large to ensure that complete mappings are in place for all of them.

The options available partially mirror the options for [Success Criterion B.1.1.2](#sc_b112), reflecting the similarities between automatic generation and restructuring/re-coding web content transformations:

Option (a) is the most straightforward. It requires the authoring tool to preserve accessibility information during transformations.

Option (b) is to warn the author directly that accessibility information may be lost, allowing them to decide whether or not to proceed.

Option (c) takes into account that prompting during the transformation process may be contrary to the workflow. Instead, the authoring tool can run a checker on the output.

Option (d) is similar to (c) but takes into account that ATAG 2.0 allows the option of manual checking.

ATAG 2.0 identifies other types of transformations in which the expectation for preserving accessibility information is higher. These are optimizing transformations ([Success Criterion B.1.2.3](#sc_b123)) and transformations in which non-text content is preserved ([Success Criterion B.1.2.4](#sc_b124)).

[WCAG 2.0](#conf-rel-wcag) is referenced because it provides testable success criteria to measure web content accessibility.

##### <span id="sc_b121-e"></span>Examples of Success Criterion B.1.2.1:

-   **Similar data structures:** A "Save As" feature preserves accessibility information in similar data structures, meeting (a). For example:
    -   when converting between HTML and SVG, the contents of `alt` attributes are stored in `desc` attributes
    -   when saving a word-processor format to markup, headings, and list items are transformed into appropriate structural markup
-   **Dissimilar but accessible:** A "Save As" feature preserves accessibility information in a dissimilar, but accessible way, when similar data structures are not available, meeting (a). For example:
    -   when transforming a SMIL presentation with a closed-caption text track into a video-only format, authors have the option of converting the closed captions into open-captions encoded in the video file
    -   when transforming a table to a list, table headings are transformed into headings and summary or caption information is retained as rendered text content
    -   when saving a word-processing format to markup, specialized document features (i.e. footnotes, endnotes, call-outs, annotations, references) are retained as rendered text content with two-way linking.
-   **Warning when text is converted to graphics):** A "Save As" feature includes the ability to convert textual formats into graphics. However, if this option is selected by authors, they are warned that the output will have web content accessibility problems. They are also advised that style sheets are preferable for presentation control. If authors continue, there is a suggestion to retain the original text as alternative content for the graphical output, meeting (b).
-   **Option to cancel:** A markup editor has a feature that automatically removes any attributes or elements that do not appear in the defined DTD when content is opened for editing. Upon activation, the feature notifies authors that content will be deleted with unknown effects for end users. The author has the option to cancel the operation, in which case the content will not be opened for editing, meeting (b).
-   **Automatic accessibility checking:** An authoring tool allows content to be imported from another format. When this happens, the source content is recoded into the technology of the current document. While accessibility was considered in the design of the feature, web content accessibility problems may still occur. However, the authoring tool includes an "as-you-type" accessibility checker, meeting (c).
-   **Manual accessibility checking:** An authoring tool allows content to be imported from another format. When this happens, the source content is recoded into the technology of the current document. While accessibility was considered in the design of the feature, web content accessibility problems may still occur. Since the authoring tool includes a manual checking wizard instead of an automatic checker, a message appears in a status area of the user interface stating that the author should use the wizard before publishing, meeting (d).

##### <span id="sc_b121-r"></span>Related Resources for Success Criterion B.1.2.1:

-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

#### <span id="sc_b122"></span> <span class="techs-only">Implementing Success Criterion </span>B.1.2.2 Copy-Paste Inside Authoring Tool (WCAG):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> supports copy and paste of <a href="#def-Structured-Web-Content" class="termdef" title="definition: structured content">structured content</a>, then any <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">accessibility information (WCAG)</a> in the copied content is preserved when the authoring tool is both the source and destination of the copy-paste and the source and destination use the same <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technology</a>. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

[Return to B.1.2.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b122)

##### <span id="sc_b122-i"></span>Intent of Success Criterion B.1.2.2:

The intent of this success criterion is to encourage authoring tools to preserve accessibility information during copy-paste operations. Due to differences in how data is encoded by different applications and the differences between clipboard mechanisms on various platforms, the wording is limited to the case in which both the copy and paste sides of the operation are performed by the same authoring tool. The wording also excludes cases in which documents

However, on platforms with clipboard mechanisms that support structured web content, as many do, it is likely that implementation of this success criterion by multiple authoring tools will also increase the probability of accessibility information being preserved during copy-paste operations between different authoring tools.

The wording of the success criterion does not require that all structured content be preserved, as this can sometimes raise security issues, especially when the copy source is another site.

##### <span id="sc_b122-e"></span>Examples of Success Criterion B.1.2.2:

-   **Plain text clipboard format:** A WYSIWYG HTML authoring tool is running on a platform that only provides a plain text clipboard. On copy, the authoring tool places markup, including any textual accessibility information, directly into clipboard as a block of text. On paste, the text is then parsed and placed back into the document, including any accessibility information, and rendered for the author.
-   **HTML clipboard format:** A WYSIWYG HTML authoring tool is running on a platform that provides an HTML clipboard format. On copy, the authoring tool converts its internal document representation into HTML and places that on the clipboard, including any accessibility information. On paste, the markup is then parsed and placed back into the document, including any accessibility information, and rendered for the author.

##### <span id="sc_b122-r"></span>Related Resources for Success Criterion B.1.2.2:

-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

#### <span id="sc_b123"></span> <span class="techs-only">Implementing Success Criterion </span>B.1.2.3 Optimizations Preserve Accessibility:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Optimizing-Transformation" class="termdef" title="definition: authoring tool">optimizing web content transformations</a>, then any <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">accessibility information (WCAG)</a> in the input is preserved in the output. <span class="level">(**Level A**)</span>.

[Return to B.1.2.3 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b123)

##### <span id="sc_b123-i"></span>Intent of Success Criterion B.1.2.3:

The intent of this success criterion is to ensure that web content transformations intended only to optimize content do not result in the introduction of web content accessibility problems.

##### <span id="sc_b123-e"></span>Examples of Success Criterion B.1.2.2:

-   **Pretty-print:** A "pretty-print" tool reformats markup code to make it easier to read by programmers. The tool never makes changes to the markup tags.
-   **Video compression:** A tool that compresses video does not automatically delete text tracks or secondary audio tracks, since these may contain accessibility information.

##### <span id="sc_b123-r"></span>Related Resources for Success Criterion B.1.2.3:

-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

#### <span id="sc_b124"></span> <span class="techs-only">Implementing Success Criterion </span>B.1.2.4 Text Alternatives for Non-Text Content are Preserved:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Transformation" class="termdef" title="definition: transformation">web content transformations</a> that preserve <a href="#def-Non-Text-Objects" class="termdef" title="definition: non-text content">non-text content</a> in the output, then any <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for that non-text content</a> are also preserved, if equivalent mechanisms exist in the <a href="#def-Web-Content-Technology" class="termdef" title="definition: technology (Web content)">web content technology</a> of the output. <span class="level">(**Level A**)</span>.

-   *Note:* This success criterion only applies when the output technology is ["included"](#conf-techs-produced) for conformance.

[Return to B.1.2.4 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b124)

##### <span id="sc_b124-i"></span>Intent of Success Criterion B.1.2.4:

The intent of this success criterion is to increase the likelihood that text alternatives will be preserved by web content transformations. This is especially important because text alternatives, such as labels and long descriptions, can represent substantial investments of author effort.

##### <span id="sc_b124-e"></span>Examples of Success Criterion B.1.2.4:

-   **Save as HTML:** A word processor includes a "Save as Simple HTML" feature that recodes word processor files into HTML where there is a one-to-one correspondence between elements. As a result, some word processor-specific content is lost (e.g. change tracking, footnotes). However, because of the existence of the `<img>` element in HTML, images are preserved and, in order to meet this success criterion, the text alternatives associated with the image are also preserved in HTML.

##### <span id="sc_b124-r"></span>Related Resources for Success Criterion B.1.2.4:

-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

<span id="principle_b2"></span> <span class="techs-only">Implementing </span>Principle B.2: Authors are supported in producing accessible content
-------------------------------------------------------------------------------------------------------------------------------------------------

### <span id="gl_b21"></span> <span class="techs-only">Implementing</span> Guideline B.2.1: Ensure that accessible content production is possible. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_b21)\]</span>

**<span id="gl_b11-rationale"></span>** Rationale: To support <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible Web content">accessible web content (WCAG)</a> production, at minimum, it is possible to produce <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that conforms with [WCAG 2.0](#conf-rel-wcag) using the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>.

#### <span id="sc_b211"></span> <span class="techs-only">Implementing Success Criterion </span>B.2.1.1 Accessible Content Possible (WCAG):

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not place <a href="#def-Restrictions" class="termdef" title="definition: web content authoring restrictions">restrictions</a> on the <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that <a href="#def-Author" class="termdef" title="definition: authors">authors</a> can specify or those restrictions do not prevent <span class="rationale">[WCAG 2.0](#conf-rel-wcag)</span> success criteria from being met. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

[Return to B.2.1.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b211)

##### <span id="sc_b211-i"></span>Intent of Success Criterion B.2.1.1:

The intent of this success criterion is to ensure that authors who have the motivation and knowledge to create more accessible web content using an authoring tool are not prevented from doing so by restrictions in the actions that the authoring tool allows them to perform. The subsequent success criteria in Part B will build on this minimal requirement.

Note that the term "restricted" is not intended to have any negative connotation. Authoring tools usually restrict web content authoring in order to simplify the production of content that is in fact complex and technical. The accessibility implications of the restrictions may be positive or negative and need to be considered case by case:

Examples of unrestricted authoring:

1.  source code editor: authors can type whatever they like (e.g. `<img src="..." alt="..." longdesc="..." />`)
2.  WYSIWYG editor for HTML4: the "Insert Image" dialog includes all of the HTML4 attributes for `<img>`.

Examples of restricted authoring that does not prevent WCAG 2.0 success criteria from being met:

1.  WYSIWYG editor for HTML4: the "Insert Image" dialog includes just some of the HTML4 attributes for `<img>`, but `alt` and `longdesc` are included in the subset.
2.  CMS: authors can only add images that they have previously uploaded to their "Asset Manager". While alternate text and long description do not appear as options when they choose images from the "Asset Manager" to include on a page, they can add/edit these values at any time within the "Asset Manager".

Examples of restricted authoring that prevents WCAG 2.0 success criteria from being met:

1.  WYSIWYG editor for HTML4: the "Insert Image" dialog has only one field "source". There is no possible way to add other attribute values, including for the `alt` and `longdesc` attributes.
2.  CMS: to be saved, each page of content must have a main title, but when the author provides text for the title it is marked up with presentation markup rather than appropriate header markup.

Unrestricted authoring tools entail less author guidance and therefore may allow the introduction of more accessibility problems than authoring tools with restrictions that encourage accessibility. ATAG 2.0 addresses this issue with other success criteria, including [B.3.1.1 Checking Assistance (WCAG)](#sc_b311), which requires an accessibility checking feature.

Restrictions on authors may also be related to automatically-generated content. ATAG 2.0 addresses the accessibility of automatically-generated content in [Guideline B.1.1: Ensure that automatically-specified content is accessible](#gl_b11).

[WCAG 2.0](#conf-rel-wcag) is referenced because it provides testable success criteria to measure web content accessibility.

##### <span id="sc_b211-e"></span>Examples of Success Criterion B.2.1.1:

-   **No restrictions (source content editing-view):** An authoring tool is designed around a source editing-view, allowing motivated and knowledgeable authors to control every detail of the content produced, including following accessible authoring practices.
-   **Accessible workflow exists:** An authoring tool is designed such that accessible web content (in this case conforming to [WCAG 2.0](#conf-rel-wcag) Level A) will result if authors do all of the following:
    -   turn on all features that support the production of accessible content;
    -   correctly follow all prompts by features that support the production of accessible content;
    -   uses the accessibility checker, including a final check prior to publishing;
    -   correctly perform any manual checks suggested by the accessibility checker; and
    -   correctly repair all of the automatically, semi-automatically, or manually identified web content accessibility problems using the automated, semi-automated, and manual repair assistance that the authoring tool provides.

##### <span id="sc_b211-r"></span>Related Resources for Success Criterion B.2.1.1:

-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

### <span id="gl_b22"></span> <span class="techs-only">Implementing</span> Guideline B.2.2: Guide authors to produce accessible content. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_b22)\]</span>

Rationale: By guiding <a href="#def-Author" class="termdef" title="definition: author">authors</a> from the outset toward the creation and maintenance of <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible Web content">accessible web content (WCAG)</a>, <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: Web content accessibility problem">web content accessibility problems (WCAG)</a> are mitigated and less <a href="#def-Repairing" class="termdef" title="definition: repairing">repair</a> effort is required.

#### <span id="sc_b221"></span> <span class="techs-only">Implementing Success Criterion </span>B.2.2.1 Accessible Option Prominence (WCAG):

If <a href="#def-Author" class="termdef" title="definition: authors">authors</a> are provided with a choice of <a href="#def-Authoring-Action" class="termdef" title="definition: authoring action">authoring actions</a> for achieving the same <a href="#def-Authoring-Outcome" class="termdef" title="definition: authoring outcome">authoring outcome</a> (e.g. styling text), then <a href="#def-Option" class="termdef" title="definition: options">options</a> that will result in <a href="#def-Web-Content" class="termdef" title="definition: web content">accessible web content (WCAG)</a> are <a href="#def-At-Least-As-Prominent" class="termdef" title="definition: At Least As Prominent">at least as prominent</a> as options that will not. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

[Return to B.2.2.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b221)

##### <span id="sc_b221-i"></span>Intent of Success Criterion B.2.2.1:

The intent of this success criterion is to help ensure that accessible authoring practices are part of the default workflow of authoring tools. This requirement applies when the authoring outcome is predictable by the authoring tool. For example, a generic "insert table" command would not be applicable, despite the fact that an author might misuse it for layout, because the author might be seeking the outcome of adding tabular information. In contrast, a page layout editor is covered by the requirement because the purpose of the feature is to edit the page layout.

[WCAG 2.0](#conf-rel-wcag) is referenced because it provides testable success criteria to measure web content accessibility.

##### <span id="sc_b221-e"></span>Examples of Success Criterion B.2.2.1:

-   **Structural markup:** A WYSIWYG HTML editor does not include any authoring action options that will necessarily result in web content that will not meet the [WCAG 2.0](#conf-rel-wcag) Level A success criteria. For example:
    -   a toolbar button that allows text to be marked as bold does so by adding a `<strong>` element rather than a `<span> `element with a bold style.
    -   a the toolbar button for placing text into a bulleted list does so with list markup (e.g. `<ul>` and `<li>` elements) rather than a `<span>` element-based implementation.
    -   a page layout view makes use of CSS positioning rather than table markup.
-   **De-emphasizing problematic options:** A WYSIWYG editing-view emphasizes more accessible choices with a higher position in the menus and a position in user interface shortcuts, such as toolbars. Choices that always lead to less accessible web content are de-emphasized with lower menu positions.  
    <span class="figure">**Figure:** An authoring tool that supports two methods for setting text color: using CSS and using `font`. Since using CSS is the more accessible option, it is given a higher prominence within the authoring interface by: (1) the "CSS Styling" option appearing above the "FONT Styling" option in the drop down Text menu, and (2) the CSS styling option being used to implement the one-click text color formatting button in the tool bar. The association is made clear because the toolbar button has the same icon (an "A" beside a color spectrum) as the "Color" sub-menu item under the "CSS Styling" menu option.). (Source: mock up by AUWG)  
    <img src="tech_images/b_30.png" alt="See the example caption above for description." width="417" height="171" /></span>

##### <span id="sc_b221-r"></span>Related Resources for Success Criterion B.2.2.1:

-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

#### <span id="sc_b222"></span> <span class="techs-only">Implementing Success Criterion </span>B.2.2.2 Setting Accessibility Properties (WCAG):

If the authoring tool provides mechanisms to set <a href="#def-Web-Content-Properties" class="termdef" title="definition: web content properties">web content properties</a> (e.g. attribute values), then mechanisms are also provided to set web content properties related to <a href="#def-Accessibility-Information" class="termdef" title="definition: accessibility information">accessibility information (WCAG)</a>. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   *Note:* For the prominence of the mechanisms, see [Success Criterion B.4.1.4](#sc_b414).

[Return to B.2.2.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b222)

##### <span id="sc_b222-i"></span>Intent of Success Criterion B.2.2.2:

The intent of this success criterion is to ensure that if authoring tools provide authors with content authoring support that goes beyond source editing (e.g. property dialogs) then accessibility information that is required for the content are similarly supported. In many cases, authoring tools support a subset of all of the possible properties that technologies might offer. This success criterion requires that the subset of supported properties must include properties required for conformance to [WCAG 2.0](#conf-rel-wcag).

The note is a reminder that the mechanisms for adding accessibility information properties must have prominence that is at least comparable with the other mechanisms for other properties.

##### <span id="sc_b222-e"></span>Examples of Success Criterion B.2.2.2:

-   **Context sensitive properties:** A markup authoring tool includes a context sensitive properties pane that displays property fields for the most common subset of attributes associated with the markup element that currently has focus in the editing-view. The attributes that are required for [WCAG 2.0](#conf-rel-wcag) are included in the subset.  
    <span class="figure">**Figure:** An "Image Properties" dialog box in which the input fields are ordered (from top to bottom, left to right): source ("src"), short label ("alt"), long description ("longdesc"), height, and width. The buttons at the bottom are "More...", "OK", and "Cancel". (Source: mock up by AUWG)  
    <img src="tech_images/b_33.png" alt="See the example caption above for description." width="333" height="171" /></span>
-   **Time-based media alternatives:** A SMIL authoring tool lets authors create multimedia presentations by pulling together video, audio, and timed text objects on to a timeline, even though the tool has no built-in ability to edit these objects. When authors specify information about video to be inserted, they are also provided with the opportunity to associate a timed text object (for captions), an audio object (for audio description), and a secondary video (for sign language interpretation). When authors specify information about audio to be inserted, they are also provided with the opportunity to associate a timed text object (for captions) and a video (for sign language interpretation).
-   **Data table for a bar graph:** A learning content management system has a feature that lets authors insert figures. The feature accepts images, even though the authoring tool has no built-in ability to edit images, but as part of the "figure properties" the authors can identify the figure as a graph. If they choose this option, then the system assists them in creating an accompanying data table using the values used to create the graph.

##### <span id="sc_b222-r"></span>Related Resources for Success Criterion B.2.2.2:

-   [Appendix A: Gathering Accessibility Information from Authors](http://www.w3.org/TR/2015/WD-IMPLEMENTING-ATAG20-20150721/#prompting-types)
-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

### <span id="gl_b23"></span> <span class="techs-only">Implementing</span> Guideline B.2.3: Assist authors with managing alternative content for non-text content. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_b23)\]</span>

Rationale: Improperly generated <a href="#def-Alternative-Content" class="termdef" title="definition: alternative content">alternative content</a> can create <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: web content accessibility problem">web content accessibility problems (WCAG)</a> and interfere with accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a>.  
*Note:* This guideline only applies when <a href="#def-Non-Text-Objects" class="termdef" title="definition: non-text content">non-text content</a> is specified by <a href="#def-Author" class="termdef" title="definition: authors">authors</a> (e.g. inserting an image). When non-text content is <span class="sc"><a href="#def-Content-Auto-Gen" class="termdef" title="definition: automatically-generated content">automatically</a></span> added by the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, see [Guideline B.1.1](#gl_b11).

#### <span id="sc_b231"></span> <span class="techs-only">Implementing Success Criterion </span>B.2.3.1 Alternative Content is Editable (WCAG):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides functionality for adding non-text content, then <a href="#def-Author" class="termdef" title="definition: authors">authors</a> are able to modify <a href="#def-Associated-Alternative-Content" class="termdef" title="definition: alternative content">programmatically associated</a> <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for non-text content</a>. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   *Note:* An exception can be made when the non-text content is known to be decoration, formatting, invisible or a CAPTCHA.

[Return to B.2.3.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b231)

##### <span id="sc_b231-i"></span>Intent of Success Criterion B.2.3.1:

The intent of this success criterion is to ensure that authors can add alternative content for non-text content and modify that alternative content in the future.

If the type of alternative content (e.g. alternative text) is not typically displayed on screen by user agents, then WYSIWYG editing-views may not display it. This is acceptable as long as another mechanism is provided for modifying that alternative content (e.g. an "Image Properties" dialog).

##### <span id="sc_b231-e"></span>Examples of Success Criterion B.2.3.1:

-   **Source content editing-view:** In a source editing-view, alternative content within the source is always available, regardless of what user agents might render. If alternative content is referenced from an external location (e.g. HTML4 `longdesc`), then that resource can be opened for editing.
-   **Properties dialog:** In a WYSIWYG editing-view, alternative content is not displayed, since the editing-view is designed to mimic typical user agents. However, the alternative content can be accessed and edited via a properties editor that displays the properties for the content that currently has focus.

##### <span id="sc_b231-r"></span>Related Resources for Success Criterion B.2.3.1:

-   [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/), especially the section [Understanding "Text Alternatives"](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-text-alternatives-head).

#### <span id="sc_b232"></span> <span class="techs-only">Implementing Success Criterion </span>B.2.3.2 Automating Repair of Text Alternatives:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not attempt to <a href="#def-Repairing" class="termdef" title="definition: repairing">repair</a> <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for non-text content</a> or the following are all true: <span class="level">(**Level A**)</span>

-   **(a) No Generic or Irrelevant Strings:** Generic strings (e.g. "image") and irrelevant strings (e.g. the file name, file format) are not used as text alternatives; and
-   **(b) In-Session Repairs:** If the repair attempt occurs during an authoring session, <a href="#def-Author" class="termdef" title="definition: authors">authors</a> have the opportunity to accept, modify, or reject the repair attempt prior to insertion of the text alternative into the content; and
-   **(c) Out-of-Session Repairs:** If the repair attempt occurs after an <span class="sc-title"><a href="#def-End-Auth-Session" class="termdef" title="definition: end of an authoring session">authoring session has ended</a></span>, the repaired text alternatives are indicated during subsequent authoring sessions (if any) and authors have the opportunity to accept, modify, or reject the repair strings prior to insertion in the content.

[Return to B.2.3.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b232)

##### <span id="sc_b232-i"></span>Intent of Success Criterion B.2.3.2:

The intent of this success criterion is to prevent the production of text alternatives that are not useful to end users because they have not been approved by authors and/or are derived from improper sources.

The limitation against generic or irrelevant strings (a) is intended to reduce the possibility that authors who are unfamiliar with accessibility may approve suggestions that do not properly serve as text alternatives (e.g. the file name, file format) without realizing the problems these can cause for end users. Potentially relevant strings include those derived from:

-   alternative content databases (see [Success Criterion B.2.3.3](#sc_b233)),
-   contextual information (e.g. the image is the author's profile picture), and
-   image processing. (while not as dependable as a human describer, the intent here is to encourage progress in this rapidly advancing field)

The in-session repair requirement (b) enables knowledgeable authors to have the final say on text alternatives suggested by authoring tools.

The out-of-session repair requirement (c) governs situations in which authors have either not noticed or ignored opportunities for adding text alternatives and have ended their authoring sessions. Because the author is absent, the text alternatives can be inserted into the content without author approval, but only on the condition that they will be indicated to the author if and when a subsequent authoring session occurs. This involves some degree of record-keeping, but this is reasonable considering the accessibility problems that uncontrolled automatic generation of text alternatives could cause.

##### <span id="sc_b232-e"></span>Examples of Success Criterion B.2.3.2:

-   **No repair:** An authoring tool does not make any attempt to automatically fill any fields prompting authors for text alternatives.
-   **Metadata on an archive:** A content management system includes a feature that allows authors to make use of images from an extensive photographic archive. The photographic archive includes metadata for each photograph with title and description fields. The values in these fields are neither generic nor irrelevant (meeting (a). The title field is always filled, but the description field is sometimes lacking. When authors select an image for insertion, the metadata title is suggested as the alternative text label and the metadata description (if any) is suggested as the long description. In both cases, some basic guidance on what constitutes correct alternative content is provided to help authors judge the appropriateness of the suggestions. The authors are still given the opportunity to accept, modify, or reject the suggested alternative content prior to insertion, in case the non-text content is being used in a different context (meeting (b)).
-   **Alternative content registry:** A web page authoring tool implements an alternative content registry (see [Success Criterion B.2.3.3](#sc_b233)). Since the alternative content was gathered from authors' previous entries into the same fields for the same objects, these are acceptable as relevant sources (meeting (a)). The authors are still given the opportunity to accept, modify, or reject the suggested alternative content prior to insertion (meeting (b)), in case the non-text content is being used in a different context.
-   **Contextual information is known:** A social networking authoring tool allows authors to add a description for images that they upload. If authors chooses not to provide a description, the authoring tool automatically labels images using the name of the album and geo-tagging metadata (meeting (a)). When the author logs in again, the images are unobtrusively highlighted as having been labeled automatically (meeting (c)).
-   **Auto-generated transcript:** An on-line video editing and hosting authoring tool has a feature that allows authors to create transcripts or captions for their videos. Authors can begin by copying in a transcript, if one is available, or the authoring tool can use speech recognition technology to generate a transcript (meeting (a)) for the authors to correct (meeting (b)). While this is preferred, if no captions or transcript has been added by the authors, then end-users can request an auto-generated transcript (meeting (a)). When, the author logs in again, the uncaptioned videos are unobtrusively highlighted as having been transcribed automatically (meeting (c)).

##### <span id="sc_b232-r"></span>Related Resources for Success Criterion B.2.3.2:

-   [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/), especially the section [Understanding "Text Alternatives"](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-text-alternatives-head).

#### <span id="sc_b233"></span> <span class="techs-only">Implementing Success Criterion </span> B.2.3.3 Save for Reuse:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides the functionality for adding non-text content, when <a href="#def-Author" class="termdef" title="definition: authors">authors</a> enter <a href="#def-Associated-Alternative-Content" class="termdef" title="definition: alternative content">programmatically associated</a> <a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives for non-text content</a>, then both of the following are true: <span class="level">(**Level AAA**)</span>

-   **(a) Save and Suggest:** The text alternatives are automatically saved and suggested by the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, if the same non-text content is reused; and
-   **(b) Edit Option:** The author has the <a href="#def-Option" class="termdef" title="definition: options">option</a> to edit or delete the saved text alternatives.

[Return to B.2.3.3 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b233)

##### <span id="sc_b233-i"></span>Intent of Success Criterion B.2.3.3:

The intent of this success criterion is to ensure that when authors spend effort providing alternative content, this content is retained by the authoring tool in a form that allows it to be easily reused.

The editing requirement (b) allows authors to correct or remove alternatives in case of content inaccuracies (e.g. out of date, spelling errors).

##### <span id="sc_b233-e"></span>Examples of Success Criterion B.2.3.3:

-   **Alternative content registry:** An authoring tool includes a registry that associates object identity information with alternative content (i.e. text, URIs). Whenever an object is used and any alternative content is collected, the object's identifying information and the alternative content is added to the registry. The stored alternative content is suggested as alternative content for author approval whenever the associated object is inserted. The alternative content registry allows several different versions of alternative content to be associated with a single object (e.g. various translations, various contexts).  
    <span class="figure">**Figure:** The interface of a sample alternative content registry viewer is shown. The design takes into account multiple non-text content objects of the same name, multiple types of text equivalents for each non-text content object, and multiple versions of each text equivalent type. In the viewer shown here, the author has selected "image" as the "media type" and then selected pic123.gif as the "content" to edit. This has brought up a rendering of the "earthrise" image. The viewer also shows that the content has three text labels. The author has selected one ("An earth rise as seen from the moon") in order to edit it. In addition some authoring tips are included ("Alternate text should be 10 words or less and should include any text in the image", "Image buttons should have alternate text that describes the button function.", and "Image bullets should have "bullet" as alternate text."(Source: mock up by AUWG)  
    <img src="tech_images/b_28.png" alt="See the example caption above for description." width="562" height="373" /></span>
-   **Interoperability with pre-authored content:** An enterprise authoring tool's clip art system is integrated with an alternative content registry so that new alternative content created by any author on the enterprise system is stored along with the pre-authored alternative content for the images in the system. The keyword search feature of the clip art system makes use of any alternative content to retrieve matches.

##### <span id="sc_b233-r"></span>Related Resources for Success Criterion B.2.3.3:

-   [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/), especially the section [Understanding "Text Alternatives"](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-text-alternatives-head).

### <span id="gl_b24"></span> <span class="techs-only">Implementing</span> Guideline B.2.4: Assist authors with accessible templates. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_b24)\]</span>

Rationale: Providing <a href="#def-Accessible-Template" class="termdef" title="definition: accessible templates">accessible templates (WCAG)</a> can have several benefits, including: immediately improving the <a href="#def-Accessible-Web-Content" class="termdef" title="definition: accessible web content">accessibility of the web content (WCAG)</a> of <span class="sc">being edited</span>, reducing the effort required of <a href="#def-Author" class="termdef" title="definition: author">authors</a>, and demonstrating the importance of accessible web content (WCAG).

#### <span id="sc_b241"></span> <span class="techs-only">Implementing Success Criterion </span>B.2.4.1 Accessible Template Options (WCAG):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Template" class="termdef" title="definition: template">templates</a>, then there are <a href="#def-Accessible-Template" class="termdef" title="definition: accessible templates">accessible template (WCAG)</a> <a href="#def-Option" class="termdef" title="definition: options">options</a> for a <a href="#def-Range" class="termdef" title="definition: range">range</a> of template uses. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

[Return to B.2.4.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b241)

##### <span id="sc_b241-i"></span>Intent of Success Criterion B.2.4.1:

The intent of this success criterion is to reduce the possibility that authors will be forced to use templates that are not accessible to create web content because accessible templates do not exist. It is recommended that the accessible options be identified, but this is not required at Level A. Identification is required at Level AA, by [Success Criterion B.2.4.2](#sc_b242).

*Note:* ATAG 2.0 uses the term "range" where absolute measurements may not be practical (e.g. the set of all help documentation examples, the set of all templates). While the strict testable requirement is the definition "More than one item within a multi-item set", implementers are strongly encouraged to implement the success criteria more broadly.

##### <span id="sc_b241-e"></span>Examples of Success Criterion B.2.4.1:

-   **Variety of accessible templates:** A web page authoring tool provides several template choices for home pages, guest books, and on-line albums. For each type of functionality, the basic template option is accessible (see the definition of "[accessible template (WCAG)](#def-Accessible-Template)").
-   **Content management system:** A content management system offers a variety of templates to authors for different purposes (e.g. information page, interactive form page, registration page). All of the templates are accessible.

##### <span id="sc_b241-r"></span>Related Resources for Success Criterion B.2.4.1:

-   N/A

#### <span id="sc_b242"></span> <span class="techs-only">Implementing Success Criterion </span>B.2.4.2 Identify Template Accessibility:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes a <a href="#def-Template-Selection-Mechanism" class="termdef" title="definition: template selection mechanism">template selection mechanism</a> and provides any non-<a href="#def-Accessible-Template" class="termdef" title="definition: accessible templates">accessible template (WCAG)</a> <a href="#def-Option" class="termdef" title="definition: options">options</a>, then the template selection mechanism can display distinctions between the accessible and non-accessible options. <span class="level">(**Level AA**)</span>

-   *Note:* The distinction can involve providing information for the accessible templates, the non-accessible templates or both.

[Return to B.2.4.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b242)

##### <span id="sc_b242-i"></span>Intent of Success Criterion B.2.4.2:

The intent of this success criterion is to ensure that when faced with template options that differ in terms of accessibility, authors can more easily determine the accessibility status of templates prior to selecting them.

The note makes it clear that developers have flexibility with respect to implementation. If only a few inaccessible templates exist, it may be preferable to mark the inaccessible ones. If only a few accessible options exist, it may be preferable to mark those. In other cases, the accessibility of every template might be indicated.

The mechanism is not specified and might include: data in dedicated metadata fields (e.g. a WCAG conformance level), plain text in a description field (e.g. "5-day week calendar template. Meets WCAG Level A"), or on-the-fly checkers, once the technology exists.

##### <span id="sc_b242-e"></span>Examples of Success Criterion B.2.4.2:

-   **Accessibility status as metadata:** An HTML editor includes a template selection mechanism that consists of selecting templates from a list. The template list has several sortable fields that are populated from the templates' metadata: the template name, date, popularity, and accessibility status. The accessibility status values are: "Level A", "Level AA", "Level AAA", "None", and "Not Available". By default, the list of templates is sorted alphabetically, but the author has the option to sort by accessibility status instead. The accessibility status values of the developer-provided templates are based on the degree to which [WCAG 2.0](#conf-rel-wcag) success criteria are met when the template is used (see the definition of "[accessible template (WCAG)](#def-Accessible-Template)"). This may have been assessed manually or semi-automatically with an accessibility checker.
-   **Accessibility status included in template names/descriptions:** In a wiki system, creating a new page brings up a list of available templates. Each template is only displayed as a name and a short description. When the developer has ensured that a template is accessible, this is indicated by the template name (e.g. "slide show template (accessible)") and/or information in the description ("This template meets WCAG 2.0 Level A as provided and should result in an accessible page, if accessible authoring practices are followed.").

##### <span id="sc_b242-r"></span>Related Resources for Success Criterion B.2.4.2:

-   N/A

#### <span id="sc_b243"></span> <span class="techs-only">Implementing Success Criterion </span>B.2.4.3 Author-Created Templates:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes a <a href="#def-Template-Selection-Mechanism" class="termdef" title="definition: template selection mechanism">template selection mechanism</a> and allows <a href="#def-Author" class="termdef" title="definition: authors">authors</a> to create new non-<a href="#def-Accessible-Template" class="termdef" title="definition: accessible templates">accessible templates (WCAG)</a>, then authors can enable the template selection mechanism to display distinctions between accessible and non-accessible templates that they create. <span class="level">(**Level AA**)</span>

-   *Note:* The distinction can involve providing information for the accessible templates (WCAG), the non-accessible templates or both.

[Return to B.2.4.3 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b243)

##### <span id="sc_b243-i"></span>Intent of Success Criterion B.2.4.3:

The intent of this success criterion is to ensure that new templates that authors create, and which might be used by subsequent authors, interoperate with the relevant template selection identification mechanism (see [Success Criterion B.2.4.2](#sc_b242)).

##### <span id="sc_b243-e"></span>Examples of Success Criterion B.2.4.3:

-   **Save as template:** An authoring tool provides a "save as template" feature. When authors activate this feature, the authoring tool automatically runs an accessibility checker on the template with sample data. Once the checker returns a resulting accessibility status, authors have the option of labeling the template with this status. If the template fails to conform to [WCAG 2.0](#conf-rel-wcag) with sample data, then authors are advised that templates should be held to a high accessibility standard, since they will be repeatedly reused.
-   **Edit template name/description:** When saving templates, an authoring tool provides authors with the ability to add their own name and description, which could potentially include accessibility status information.

##### <span id="sc_b243-r"></span>Related Resources for Success Criterion B.2.4.3:

-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

#### <span id="sc_b244"></span> <span class="techs-only">Implementing Success Criterion </span>B.2.4.4 Accessible Template Options (Enhanced):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Template" class="termdef" title="definition: template">templates</a>, then all of the templates are <a href="#def-Accessible-Template" class="termdef" title="definition: accessible templates">accessible template (to WCAG Level AA)</a>. <span class="level">(**Level AAA**)</span>

[Return to B.2.4.4 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b244)

##### <span id="sc_b244-i"></span>Intent of Success Criterion B.2.4.4:

The intent of this success criterion is to establish an enhanced requirement for accessible templates at Level AAA, without any exceptions, so that authors do not need to be concerned with checking the accessibility status of templates before using them. The target WCAG level is AA because this success criteria is intended to be applicable to a wide range of authoring tool types and, as WCAG 2.0 states, "it is not possible to satisfy all Level AAA Success Criteria for some content".

##### <span id="sc_b244-e"></span>Examples of Success Criterion B.2.4.4:

-   **Courseware system:** In order to serve educational institutions that have adopted strict accessibility requirements, a courseware system is deployed that only offers templates that, when used properly, result in accessible content.

##### <span id="sc_b244-r"></span>Related Resources for Success Criterion B.2.4.4:

-   N/A

### <span id="gl_b25"></span> <span class="techs-only">Implementing</span> Guideline B.2.5: Assist authors with accessible pre-authored content. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_b25)\]</span>

Rationale: Providing <a href="#def-Accessible-Preauthored-Content" class="termdef" title="definition: accessible pre-authored content">accessible pre-authored content (WCAG)</a> (e.g. clip art, synchronized media, widgets) can have several benefits, including: immediately improving the <span class="sc"><a href="#def-Content-Being-Edited" class="termdef" title="definition: web content being edited">accessibility of web content (WCAG)</a></span> being edited, reducing the effort required of <a href="#def-Author" class="termdef" title="definition: author">authors</a>, and demonstrating the importance of accessibility.

#### <span id="sc_b251"></span> <span class="techs-only">Implementing Success Criterion </span>B.2.5.1 Accessible Pre-Authored Content Options:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Preauthored-Content" class="termdef" title="definition: pre-authored content">pre-authored content</a>, then a range of <span class="rationale"><a href="#def-Accessible-Preauthored-Content" class="termdef" title="definition: accessible pre-authored content">accessible pre-authored content (to WCAG Level AA)</a></span> <a href="#def-Option" class="termdef" title="definition: options">options</a> are provided. <span class="level">(**Level AA**)</span>

[Return to B.2.5.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b251)

##### <span id="sc_b251-i"></span>Intent of Success Criterion B.2.5.1:

The intent of this success criterion is to reduce the possibility that authors will be forced to use pre-authored content that is not accessible to create web content because accessible pre-authored content does not exist.

*Note:* ATAG 2.0 uses the term "range" where absolute measurements may not be practical (e.g. the set of all help documentation examples, the set of all templates). While the strict testable requirement is the definition "More than one item within a multi-item set", implementers are strongly encouraged to implement the success criteria more broadly.

##### <span id="sc_b251-e"></span>Examples of Success Criterion B.2.5.1:

-   **Clip art collection:** An authoring tool is shipped with a clip art collection. Each image in the collection has a short text label and long text description and the system is interoperable with the alternative content registry, so that whenever authors insert an image from the clip art collection, its alternative content is automatically retrieved.

##### <span id="sc_b251-r"></span>Related Resources for Success Criterion B.2.5.1:

-   N/A

#### <span id="sc_b252"></span> <span class="techs-only">Implementing Success Criterion </span>B.2.5.2 Identify Pre-Authored Content Accessibility:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> includes a <a href="#def-Preauthored-Content-Selection-Mechanism" class="termdef" title="definition: pre-authored content selection mechanism">pre-authored content selection mechanism</a> and provides any non-<a href="#def-Accessible-Preauthored-Content" class="termdef" title="definition: accessible pre-authored content">accessible pre-authored content (WCAG Level AA)</a> <a href="#def-Option" class="termdef" title="definition: options">options</a>, then the selection mechanism can display distinctions between the accessible and non-accessible options. <span class="level">(**Level AA**)</span>

-   *Note:* The distinction can involve providing information for the accessible pre-authored content, the non-accessible pre-authored content or both.

[Return to B.2.5.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b252)

##### <span id="sc_b252-i"></span>Intent of Success Criterion B.2.5.2:

The intent of this success criterion is to ensure that when faced with pre-authored content options that differ in terms of accessibility, authors can more easily determine the accessibility status of the pre-authored content prior to selecting them.

The note makes it clear that developers have flexibility with respect to implementation. If only a few inaccessible pre-authored content options exist, it may be preferable to mark the inaccessible ones. If only a few accessible options exist, it may be preferable to mark those. In other cases, the accessibility of every option might be indicated.

The mechanism is not specified and might include: data in dedicated metadata fields (e.g. a WCAG conformance level), plain text in a description field (e.g. "Progress widget. Meets WCAG Level AA"), or on-the-fly checkers, once the technology exists.

##### <span id="sc_b252-e"></span>Examples of Success Criterion B.2.5.2:

-   **Clip art collection:** A clip-art repository lists the available images and provides the alternative text associated with the images in a sortable field. Lack of alternative text is therefore easy to determine.
-   Widget palette: A user interface widget palette is provided to allow authors to easily add these controls to their content. Widgets that have been designed according to WAI-ARIA 1.0 Authoring Practices are denoted by an icon.

##### <span id="sc_b252-r"></span>Related Resources for Success Criterion B.2.5.2:

-   N/A

<span id="principle_b3"></span> <span class="techs-only">Implementing </span>Principle B.3: Authors are supported in improving the accessibility of existing content
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

### <span id="gl_b31"></span> <span class="techs-only">Implementing</span> Guideline B.3.1: Assist authors in checking for accessibility problems. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_b31)\]</span>

Rationale: When <a href="#def-Checking" class="termdef" title="definition: checking">accessibility checking</a> is an integrated function of the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a>, it helps make <a href="#def-Author" class="termdef" title="definition: author">authors</a> aware of <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: Web content accessibility problem">web content accessibility problems (WCAG)</a> during the authoring process, so they can be immediately addressed.

#### <span id="sc_b311"></span> <span class="techs-only">Implementing Success Criterion </span>B.3.1.1 Checking Assistance (WCAG):

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Author" class="termdef" title="definition: authors">authors</a> with the ability to add or modify <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> in such a way that a [WCAG 2.0](#conf-rel-wcag) success criterion can be violated, then accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> for that success criterion is provided (e.g. an HTML authoring tool that inserts images should check for alternative text; a <a href="#def-Video" class="termdef" title="definition: video">video</a> authoring tool with the ability to edit text tracks should check for captions). <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   *Note:* <a href="#def-Automated-Checking" class="termdef" title="definition: automated checking">Automated</a> and <a href="#def-Semi-Automated-Checking" class="termdef" title="definition: semi-automated checking">semi-automated checking</a> is possible (and encouraged) for many types of <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: Web content accessibility problem">web content accessibility problems (WCAG)</a>. However, <a href="#def-Manual-Checking" class="termdef" title="definition: manual checking">manual checking</a> is the minimum requirement to meet this success criterion. In manual checking, the authoring tool provides <a href="#def-Author" class="termdef" title="definition: author">authors</a> with instructions for detecting problems, which authors carry out by themselves. For more information on checking, see [Implementing ATAG 2.0 - Appendix B: Levels of Checking Automation](http://www.w3.org/TR/2015/WD-IMPLEMENTING-ATAG20-20150721/#checking-types).

[Return to B.3.1.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b311)

##### <span id="sc_b311-i"></span>Intent of Success Criterion B.3.1.1:

The intent of this success criterion is to ensure that authors are supported in discovering web content accessibility problems in the content that they are editing. This is critical if these issues are to be addressed prior to publishing. The requirement to individually check [WCAG 2.0](#conf-rel-wcag) success criteria is intended to prevent manual checks from being worded in excessively general ways (e.g. "does the page meet all of the requirements?").

The success criterion does not specify how multiple instances of the same problem should be handled, because this will usually depend on the nature of the problem and the degree of automation in the checking and repair features of the authoring tool. Some problems are limited to one or just a few elements and lend themselves to automated or semi-automated reporting of each instance (e.g. missing labels), while other problems extend across many elements and are sometimes best checked globally (e.g. reading level).

The note about manual checking acknowledges that the current state of technology does not allow every web content accessibility problem to be identified automatically.

[WCAG 2.0](#conf-rel-wcag) is referenced because it provides testable success criteria to measure web content accessibility.

##### <span id="sc_b311-e"></span>Examples of Success Criterion B.3.1.1:

-   **Markup processing checker:** An accessibility checking tool includes automated checking for web content accessibility problems that can be detected from markup alone. The tool includes semi-automated checking where potential instances can be detected from the markup, but where the author's assessment of the content is required to make a final decision. In cases where markup processing is of little or no use in detecting problems, manual instructions are included for authors to follow in identifying whether the relevant [WCAG 2.0](#conf-rel-wcag) success criterion has been met.
-   **Content processing checker:** An accessibility checking tool goes beyond markup processing by applying content processing heuristics, such as:
    -   Image processing to detect whether foreground and background contrast levels are sufficient or whether images are blank.
    -   Text processing to calculate reading levels and detect changes in human language.

##### <span id="sc_b311-r"></span>Related Resources for Success Criterion B.3.1.1:

-   [Appendix B: Levels of Checking Automation](http://www.w3.org/TR/2015/WD-IMPLEMENTING-ATAG20-20150721/#checking-types).
-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

#### <span id="sc_b312"></span> <span class="techs-only">Implementing Success Criterion </span>B.3.1.2 Help Authors Decide:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Checking" class="termdef" title="definition: checking">accessibility checking</a> that relies on <a href="#def-Author" class="termdef" title="definition: authors">authors</a> to decide whether potential web content accessibility problems (WCAG) are correctly identified (i.e. <a href="#def-Manual-Checking" class="termdef" title="definition: manual checking">manual checking</a> and <a href="#def-Semi-Automated-Checking" class="termdef" title="definition: semi-automated checking">semi-automated checking</a>), then the accessibility checking process provides instructions that describe how to decide. <span class="level">(**Level A**)</span>

[Return to B.3.1.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b312)

##### <span id="sc_b312-i"></span>Intent of Success Criterion B.3.1.2:

The intent of this success criterion is to ensure that authors, who in many cases will lack accessibility knowledge, will be able to make adequate judgments. If this is not the case, authors may miss web content accessibility problems that do exist and/or mistakenly identify problems that do not exist.

##### <span id="sc_b312-e"></span>Examples of Success Criterion B.3.1.2:

-   **Questions answered:** Instructions are formulated to answer the questions: "What part of the content should be examined?" and "What is present or absent that is causing the problem?".
-   **Variety of views:** When author judgment would be enhanced by modified views of the web content being edited, an accessibility browser toolbar is used to provide various previews, such as:
    -   an alternative content view (with images and other multimedia replaced by any alternative content)
    -   a monochrome view (to test contrast)
    -   a text to speech view (to test the availability of text alternatives)
    -   no scripts view
    -   no frames view
    -   no style sheet view
-   **Judgments saved:** An authoring tool saves author judgments for manual checks and only prompts for new judgments after authors have made substantial changes.

##### <span id="sc_b312-r"></span>Related Resources for Success Criterion B.3.1.2:

-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

#### <span id="sc_b313"></span> <span class="techs-only">Implementing Success Criterion </span>B.3.1.3 Help Authors Locate:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Checking" class="termdef" title="definition: checking">checks</a> that require <a href="#def-Author" class="termdef" title="definition: author">authors</a> to decide whether a potential <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: Web content accessibility problem">web content accessibility problem (WCAG)</a> is correctly identified (i.e. <a href="#def-Manual-Checking" class="termdef" title="definition: manual checking">manual checking</a> and <a href="#def-Semi-Automated-Checking" class="termdef" title="definition: semi-automated checking">semi-automated checking</a>), then the relevant content is identified to the authors. <span class="level">(**Level A**)</span>

-   *Note:* Depending on the nature of the <a href="#def-Editing-View" class="termdef" title="definition: editing view">editing-view</a> and the scope of the potential web content accessibility problem (WCAG), identification might involve highlighting elements or renderings of elements, displaying line numbers, or providing instructions.

[Return to B.3.1.3 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b313)

##### <span id="sc_b313-i"></span>Intent of Success Criterion B.3.1.3:

The intent of this success criterion is to increase the accuracy of author judgments by identifying the location of suspected web content accessibility problems as precisely as possible.

The note acknowledges that there are many ways that this success criterion may be met.

##### <span id="sc_b313-e"></span>Examples of Success Criterion B.3.1.3:

-   **By line number:** An authoring tool displays potential problems in a separate list by the line number of the first element involved.
-   **Underlining:** A source editing-view displays potential problems in-line by underlining all of the markup for the affected span of elements.
-   **Outlining:** A WYSIWYG editing-view displays potential problems in-line with the rendered content as blue outlining around the affected span of elements.
-   **Site-wide checking:** A website management software is designed to identify issues on a site-wide scale (e.g. broken links, outdated information). The software also includes a feature to detect site-wide accessibility problems. The feature is able to identify faulty templates, widgets, and other content that can cause systematic problems.

##### <span id="sc_b313-r"></span>Related Resources for Success Criterion B.3.1.3:

-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

#### <span id="sc_b314"></span> <span class="techs-only">Implementing Success Criterion </span>B.3.1.4 Status Report:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Checking" class="termdef" title="definition: checking">checks</a>, then <a href="#def-Author" class="termdef" title="definition: authors">authors</a> can receive an accessibility status report based on the results of the accessibility checks. <span class="level">(**Level AA**)</span>

-   *Note:* The format of the accessibility status report is not specified and they might include a listing of <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: Web content accessibility problem">problems</a> detected or a [WCAG 2.0](#conf-rel-wcag) conformance level, etc.

[Return to B.3.1.4 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b314)

##### <span id="sc_b314-i"></span>Intent of Success Criterion B.3.1.4:

The intent of this success criterion is to ensure that authors are able to obtain an overview of the accessibility status of their web content. This information has many uses, including the assessment of repair options, progress monitoring, and performance reporting.

The note highlights that no particular format is required, since this will depend on the nature of the authoring tool and its checking feature.

##### <span id="sc_b314-e"></span>Examples of Success Criterion B.3.1.4:

-   **List of accessibility problems:** A step-by-step checking feature provides a single consolidated list of all of the web content accessibility problems that were detected. Direct links are provided to additional help and repair assistance for each type of accessibility problem.
-   **Conformance level report:** A check-as-you-type checking feature highlights accessibility problems that can be automatically detected directly within a WYSIWYG editing-view. The author controls the strictness of the automatic checking from a preferences screen, where they select the target WCAG 2.0 level. The overall status of accessibility checking is available on the application status bar, which lists the target WCAG 2.0 level and the number of outstanding problems that can be automatically detected. A link to the remaining manual checks is also provided.

##### <span id="sc_b314-r"></span>Related Resources for Success Criterion B.3.1.4:

-   N/A

#### <span id="sc_b315"></span> <span class="techs-only">Implementing Success Criterion </span>B.3.1.5 Programmatic Association of Results:

If the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Checking" class="termdef" title="definition: checking">checks</a>, then the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> can <a href="#def-Associated-Alternative-Content" class="termdef" title="definition: alternative content">programmatically associate</a> accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> results with the <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that was checked. <span class="level">(**Level AA**)</span>

[Return to B.3.1.5 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b315)

##### <span id="sc_b315-i"></span>Intent of Success Criterion B.3.1.5:

The intent of this success criterion is to facilitate and encourage automated use of accessibility checking results, which can benefit both authors and end users in multiple ways:

-   Supports author choice of tools: Programmatic association of checking results enables independent checking and repair tools to interoperate, so authors can choose the tools that meet their own needs.
-   Supports diverse workflows: Programmatic association of checking results enables accessibility evaluation and repair processes to be separated, supporting a wide variety of workflows including those necessary in complex and multi-stakeholder environments. For example, a complex CMS with a continuously running website accessibility checker might automatically queue up certain issues to be repaired later by a different author within a quality assurance view.
-   Supports evaluation result aggregation: Programmatic association of checking results enables systems that can aggregate evaluation results for large-scale monitoring, auditing, ranking, and research purposes. Aggregation of manual and semi-automated evaluation results are especially important, since they cannot be produced on-demand as is the case for fully automated evaluations.
-   Supports accessible resource discovery: Systems that support accessible resource discovery take the accessibility preferences of end users into account when fetching content. This allows authors to offer multiple versions of content with differing accessibility levels while still enabling end users to receive versions that are accessible to them.

The success criterion does not specify the format of the programmatic association, which may be specific (e.g. individual check results) or more general (e.g. WCAG 2.0 conformance level). However, formats that include specific checking results are typically more useful for accessible resource discovery because individual end users may have preferences for certain types of accessibility information (e.g. captions), but not for others (e.g. audio descriptions).

##### <span id="sc_b315-e"></span>Examples of Success Criterion B.3.1.5:

-   **Saving EARL:** An authoring tool includes an automated/semi-automated accessibility checker, but only manual repair guidance. In order to give authors additional repair options, the checker includes the option of storing the listing of web content accessibility problems using the Evaluation and Repair Language (EARL). This allows the author to use an external automated/semi-automated repair service.
-   **Saving AccessForAll:** A learning content management system (LCMS) is implemented with a personalized approach to accessibility. Instead of every version of every web content resource being fully conformant (e.g. every video including captions), several versions of each web content resource are produced (e.g. one with captions and one without) and AccessForAll metadata is associated with each. Then when an end user attempts to access a web content resource, their personal preferences are used by the LCMS to locate and serve out the version of the web content resource that is appropriate to that end user's preferences.
-   **Accessibility of legacy web content:** A content management system includes the ability to inventory issues within legacy web content. Running automated checking on legacy web content and storing the results provides decision-makers with potentially useful information.

##### <span id="sc_b315-r"></span>Related Resources for Success Criterion B.3.1.5:

-   The [IMS AccessForAll Meta-data](http://www.imsglobal.org/accessibility/accmdv1p0/imsaccmd_oviewv1p0.html) standard is one way to store the accessibility attributes of web content in order to match them with the preferences of users. This system is also the basis for [ISO 24571 (Individualized adaptability and accessibility in e-learning, education, and training)](http://www.iso.org/iso/iso_catalogue/catalogue_tc/catalogue_detail.htm?csnumber=41521).
-   The [Evaluation and Report Language (EARL)](http://www.w3.org/WAI/intro/earl.php) is a machine-readable format for expressing test results.
-   [Google Accessible Search](http://labs.google.com/accessible/) is an example of accessible resource discovery.

### <span id="gl_b32"></span> <span class="techs-only">Implementing</span> Guideline B.3.2: Assist authors in repairing accessibility problems. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_b32)\]</span>

Rationale: When <a href="#def-Repairing" class="termdef" title="definition: repairing">repair</a> is an integral part of the authoring process, it greatly enhances the utility of <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> and increases the likelihood that <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: web content accessibility problems">web content accessibility problems (WCAG)</a> will be properly addressed.

#### <span id="sc_b321"></span> <span class="techs-only">Implementing Success Criterion </span>B.3.2.1 Repair Assistance (WCAG):

If <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> (see [Success Criterion B.3.1.1](#sc_b311)) can detect that a [WCAG 2.0](#conf-rel-wcag) success criterion is not met, then <a href="#def-Repairing" class="termdef" title="definition: repairing">repair</a> suggestion(s) are provided: <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

-   *Note:* <a href="#def-Automated-Repairing" class="termdef" title="definition: automated checking">Automated</a> <a href="#def-Automated-Checking" class="termdef" title="definition: automated checking">and</a> <a href="#def-Semi-Automated-Repairing" class="termdef" title="definition: semi-automated checking">semi-automated repair</a> is possible (and encouraged) for many types of <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: web content accessibility problems">web content accessibility problems (WCAG)</a>. However, <a href="#def-Manual-Repairing" class="termdef" title="definition: manual repairing">manual repair</a> is the minimum requirement to meet this success criterion. In manual repair, the <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides <a href="#def-Author" class="termdef" title="definition: author">authors</a> with instructions for repairing problems, which authors carry out by themselves. For more information on repair, see [Implementing ATAG 2.0 - Appendix C: Levels of Repair Automation](http://www.w3.org/TR/2015/WD-IMPLEMENTING-ATAG20-20150721/#repair-types).

[Return to B.3.2.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b321)

##### <span id="sc_b321-i"></span>Intent of Success Criterion B.3.2.1:

The intent of this success criterion is to ensure that authors are aided in repairing content accessibility problems that are detectable via the authoring tools own checking system.

The note allows manual repair assistance to meet this success criterion in order to acknowledge the difficulty of automatically or semi-automatically repairing certain types of accessibility problems.

[WCAG 2.0](#conf-rel-wcag) is referenced because it provides testable success criteria to measure web content accessibility.

##### <span id="sc_b321-e"></span>Examples of Success Criterion B.3.2.1:

-   **Check-as-you-type:** An authoring tool includes a check-as-you-type feature that provides context sensitive repair.  
    <span class="figure">**Figure:** A WYSIWYG editing-view is shown, in which a table is being edited. The first row of the table is highlighted in blue "squiggly" lines because a checking heuristic has detected that it might actually be a header row. The author has right clicked on the outlined area and a pop-up menu gives them several repair options: "Repair: Set as header row", "Skip", "Ignore", "Check Accessibility...", and "Help...".  
    <img src="tech_images/b_13.png" alt="See the example caption above for description." width="417" height="162" /></span>
-   **Combined check-repair feature:** A WYSIWYG web page authoring tool includes an accessibility checking and repair feature that presents web content accessibility problems and repair options in a sequential manner analogous to a typical spelling or grammar checking "wizard". Each screen provides input field(s) for the information required to address the issue as well as additional information and tips that authors may require in order to properly provide the requested information.  
    <span class="figure">**Figure:** A correction interface is shown for repairing missing alternate text label for an image. The interface includes (1) a short description of the problem (here: "Missing Alternate Text Label for an Image"), (2) a preview (here: the "earthrise" image that is missing a label), (3) tips for performing the repair (here: "Alternate text should be 10 words or less and should include any text in the image."; "Image buttons should have alternate text that describes the button function."; and "Image bullets should have "bullet" as alternate text."), and (4) an offered semi-automated repair in an editable drop-down box (here: "An earth rise as seen from the moon"). The global checker controls include a progress indicator ("5 of 25") and navigation buttons to move backwards ("back") and forwards ("skip") through the list of repair tasks. Buttons to "repair", get "help" and "cancel" are also provided. (Source: mock up by AUWG)  
    <img src="tech_images/b_24.png" alt="See the example caption above for description." width="398" height="275" /></span>
-   **Manual repair instructions:** For each potential accessibility problem identified by the checking function (as required by [Success Criterion B.3.1.1](#sc_b311)), documentation with repair instructions is provided that authors (with sufficient skill and knowledge to use the rest of the tool) could follow to correct the problem.

##### <span id="sc_b321-r"></span>Related Resources for Success Criterion B.2.3.1:

-   [Techniques For Accessibility Evaluation And Repair Tools (AERT)](http://www.w3.org/TR/2000/WD-AERT-20000426)
-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

<span id="principle_b4"></span> <span class="techs-only">Implementing </span>Principle B.4: Authoring tools promote and integrate their accessibility features
--------------------------------------------------------------------------------------------------------------------------------------------------------------

### <span id="gl_b41"></span> <span class="techs-only">Implementing</span> Guideline B.4.1: Ensure the availability of features that support the production of accessible content. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_b41)\]</span>

Rationale: The <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a> will be more likely to be used, if they are turned on and are afforded reasonable <a href="#def-Prominence" class="termdef" title="definition: prominence">prominence</a> within the <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a>.

#### <span id="sc_b411"></span> <span class="techs-only">Implementing Success Criterion </span>B.4.1.1 Features Active by Default:

All <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a> are turned on by default. <span class="level">(**Level A**)</span>

[Return to B.4.1.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b411)

##### <span id="sc_b411-i"></span>Intent of Success Criterion B.4.1.1:

The intent of this success criterion is to help ensure that the accessible content support features are perceived by authors (and developers) as a natural and expected part of the authoring tool workflow, just as features for addressing spelling, grammar, and syntax errors already are.

*Note:* This success criterion requires that features be on by default, but allows developers to provide authors with the option to turn them off or modify their settings.

##### <span id="sc_b411-e"></span>Examples of Success Criterion B.4.1.1:

-   **On by default:** A web page authoring tool has all accessible content support features turned on by default within the "Accessibility" tab of its preferences area.  
    <span class="figure">**Figure:** The preference setting area of an authoring tool, open to an "Accessibility" section, shows the default settings. "W3C-WCAG" and a level (e.g. "Double-A") are selected as are the following options: "Check accessibility as you type", "Check accessibility after saving", "Auto-correct when possible", "Highlight accessibility related fields", "Prompt when highlighted fields are left blank", and "Provide accessibility 'Quick Tips'". (Source: mock up by AUWG)</span>  
    <img src="tech_images/b_31.png" alt="See the example caption above for description." width="284" height="315" />

##### <span id="sc_b411-r"></span>Related Resources for Success Criterion B.4.1.1:

-   N/A

#### <span id="sc_b412"></span> <span class="techs-only">Implementing Success Criterion </span>B.4.1.2 Option to Reactivate Features:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not include the <span class="sc-bullet"><a href="#def-Option" class="termdef" title="definition: option">option</a></span> to turn off its <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a> or features which have been turned off can be turned back on. <span class="level">(**Level A**)</span>

[Return to B.4.1.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b412)

##### <span id="sc_b412-i"></span>Intent of Success Criterion B.4.1.2:

The intent of this success criterion is to ensure that if authors turn off accessible content support features for any reason, they can easily turn them back on.

##### <span id="sc_b412-e"></span>Examples of Success Criterion B.4.1.2:

-   **Toggle in preferences area:** A web page authoring tool provides an "Accessibility" tab in its preferences area where any deactivated features can be reactivated.
-   **Reminders:** An authoring tool has a "wizard"-style accessibility checker and a "check-as-you-type"-style accessibility checker. If the "check-as-you-type"-style checker has been turned off, then authors are reminded about the feature and provided with an option to turn it back on whenever they run the "wizard"-style checker.

##### <span id="sc_b412-r"></span>Related Resources for Success Criterion B.4.1.2:

-   N/A

#### <span id="sc_b413"></span> <span class="techs-only">Implementing Success Criterion </span>B.4.1.3 Feature Deactivation Warning:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> does not include the <span class="sc-bullet"><a href="#def-Option" class="termdef" title="definition: option">option</a></span> to turn off its <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a> or, if these features can be turned off, <a href="#def-Author" class="termdef" title="definition: authors">authors</a> are informed that this may increase the risk of <a href="#def-Web-Content-Accessibility-Problem" class="termdef" title="definition: web content accessibility problem">content accessibility problems (WCAG)</a>. <span class="level">(**Level AA**)</span>

[Return to B.4.1.3 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b413)

##### <span id="sc_b413-i"></span>Intent of Success Criterion B.4.1.3:

The intent of this success criterion is to ensure that if authors attempt to turn off an accessible content support feature for any reason, they will have the opportunity to understand the effect this will have on the accessibility of the web content that they produce.

##### <span id="sc_b413-e"></span>Examples of Success Criterion B.4.1.3:

-   **Warning:** An authoring tool provides authors with a warning whenever an accessible content support feature is turned off (e.g. from the authoring tool preferences area).  
    <span class="figure">**Figure:** In an authoring tool, the author has unchecked a "highlighting accessibility related fields" feature the tool. As a result the tool displays a warning that reads "You have just turned off the highlighting accessibility related fields feature. This feature is designed to inform you when information must be provided in order for your documents to comply with your target accessibility setting. Turning this feature off could cause your documents to be less accessible to many users. In some jurisdictions accessibility is a legal requirement. Are you sure you want to proceed?". The author has the option to answer "Yes", "No" or "Cancel". (Source: mock up by AUWG)  
    <img src="tech_images/b_32.png" alt="See the example caption above for description." width="402" height="216" /></span>

##### <span id="sc_b413-r"></span>Related Resources for Success Criterion B.4.1.3:

-   N/A

#### <span id="sc_b414"></span> <span class="techs-only">Implementing Success Criterion </span>B.4.1.4 Feature Prominence:

All <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a> are <a href="#def-At-Least-As-Prominent" class="termdef" title="definition: At Least As Prominent">at least as prominent</a> as features related to either invalid <a href="#def-Markup" class="termdef" title="definition: markup">markup</a>, syntax errors, spelling errors or grammar errors. <span class="level">(**Level AA**)</span>

[Return to B.4.1.4 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b414)

##### <span id="sc_b414-i"></span>Intent of Success Criterion B.4.1.4:

The intent of this success criterion is to help ensure that authors are as likely to notice and use functions for addressing accessibility problems as functions for addressing other web content issues (e.g. invalid markup, syntax errors, spelling errors, and grammar errors).

##### <span id="sc_b414-e"></span>Examples of Success Criterion B.4.1.4:

-   **Prominence of checking and repair:** An authoring tool includes a pane dedicated to content "Evaluation and Repair". The pane lists accessibility, grammar, link checking, spelling, and syntax validation. When the various utilities are run, their results are displayed in similar ways within the pane.
-   **Prominence of documentation:** An authoring tool includes documentation of its accessibility checker as part of the main documentation of an authoring tool, with very similar prominence to that of the spelling-related features.  
    <span class="figure">**Figure:** A help system is shown. In the right pane is the documentation table of contents, where "Accessibility Features" appears as a top level topic just below "Spelling Features". In the left panel is the help text, demonstrating a style typical of the rest of the help system: "Checking for Accessibility: A variety of accessibility checking options are available: Accessibility verifier, Check accessibility as you type, Manual test support materials. These are suitable for use at different times during the authoring process and all have options that can be changed with the accessibility preferences. To get more information on accessible web content, see the References.". (Source: mock up by AUWG)  
    <img src="tech_images/b_35.png" alt="See the example caption above for description." width="617" height="209" /></span>
-   **Check-as-you-type:** An authoring tool continuously checks the web content being edited and highlights problems as the authors work.  
    <span class="figure">**Figure:** A WYSIWYG authoring tool is shown with check-as-you-type accessibility checking activated. Two elements on the page have been highlighted as having problems: an image is surrounded by a blue squiggly line and a line of text is underlined by the same style of blue squiggly line. (Source: mock up by AUWG)  
    <img src="tech_images/b_19.png" alt="See the example caption above for description." width="417" height="194" /></span>  
-   **Checking on demand:** An authoring tool provides accessibility checking from a menu item that is always available.
-   **Prompt to check before publishing:** An authoring tool automatically performs an accessibility check if authors choose a publishing option and informs authors of the results.

##### <span id="sc_b414-r"></span>Related Resources for Success Criterion B.4.1.4:

-   [Appendix B: Levels of Checking Automation](http://www.w3.org/TR/2015/WD-IMPLEMENTING-ATAG20-20150721/#checking-types)

### <span id="gl_b42"></span> <span class="techs-only">Implementing</span> Guideline B.4.2: Ensure that documentation promotes the production of accessible content. <span class="techs-only">\[[Return to Guideline](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html#gl_b42)\]</span>

Rationale: Some <a href="#def-Author" class="termdef" title="definition: author">authors</a> need support in determining how to use <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content production features</a> (e.g. how to respond to <a href="#def-Prompt" class="termdef" title="definition: prompt">prompts</a> for <span class="sc-bullet"><a href="#def-Text-Alternatives" class="termdef" title="text alternatives for non-text content">text alternatives</a></span>, how to use accessibility <a href="#def-Checking" class="termdef" title="definition: checking">checking</a> tools). Demonstrating accessible authoring as routine practice, or at least not demonstrating inaccessible practices, will help to encourage acceptance of accessibility by some authors.

#### <span id="sc_b421"></span> <span class="techs-only">Implementing Success Criterion </span>B.4.2.1 Model Practice (WCAG):

A <a href="#def-Range" class="termdef" title="definition: range">range</a> of examples in the <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a> (e.g. <a href="#def-Markup" class="termdef" title="definition: markup">markup</a>, screen shots of <a href="#def-WYSIWYG" class="termdef" title="definition: WYSIWYG">WYSIWYG</a> <a href="#def-Editing-View" class="termdef" title="definition: editing views">editing-views</a>) demonstrate <a href="#def-Acc-Auth-Practice" class="termdef" title="definition: accessible authoring practices">accessible authoring practices (WCAG)</a>. <span class="level">(**Level A** to meet WCAG 2.0 Level A success criteria; **Level AA** to meet WCAG 2.0 Level A and AA success criteria; **Level AAA** to meet all WCAG 2.0 success criteria)</span>

[Return to B.4.2.1 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b421)

##### <span id="sc_b421-i"></span>Intent of Success Criterion B.4.2.1:

The intent of this success criterion is to have accessible authoring practices introduced to authors as naturally integrated common practice. The success criterion is also intended to reduce the chance that authors will copy inaccessible authoring practices from examples in the documentation. Essentially, modeling inaccessible authoring practices in the documentation should be viewed in the same way as modeling invalid markup or spelling/grammar errors.

*Note:* ATAG 2.0 uses the term "range" where absolute measurements may not be practical (e.g. the set of all help documentation examples, the set of all templates). While the strict testable requirement is the definition "More than one item within a multi-item set", implementers are strongly encouraged to implement the success criteria more broadly.

[WCAG 2.0](#conf-rel-wcag) is referenced because it provides testable success criteria to measure web content accessibility.

##### <span id="sc_b421-e"></span>Examples of Success Criterion B.4.2.1:

-   **Reference examples are accessible:** An HTML authoring tool includes an on-line HTML reference guide. Markup examples within the reference guide are all valid code and they all meet the [WCAG 2.0](#conf-rel-wcag) Level A success criteria.
-   **Screen shots show accessibility features in use:** A content management system has a help system that includes screen shots of various aspects of the system's user interface. When screen shots show examples of the user interfaces as content is being produced, the user interface is always shown such that the content produced would meet the [WCAG 2.0](#conf-rel-wcag) Level A success criteria (e.g. prompts filled in, optional accessibility features turned on).

##### <span id="sc_b421-r"></span>Related Resources for Success Criterion B.4.2.1:

-   [WCAG 2.0](#conf-rel-wcag) (including [Understanding WCAG 2.0](http://www.w3.org/TR/2008/NOTE-UNDERSTANDING-WCAG20-20081211/) and [How to Meet WCAG 2.0](http://www.w3.org/WAI/WCAG20/quickref/Overview.php))

#### <span id="sc_b422"></span> <span class="techs-only">Implementing Success Criterion </span>B.4.2.2 Feature Instructions:

Instructions for using any <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a> appear in the <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a>. <span class="level">(**Level A**)</span>

[Return to B.4.2.2 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b422)

##### <span id="sc_b422-i"></span>Intent of Success Criterion B.4.2.2:

The intent of this success criterion is to help ensure that authors are able to find help on how to use the accessible content support features effectively.

##### <span id="sc_b422-e"></span>Examples of Success Criterion B.4.2.2:

-   **Documentation of accessible content support features:** An authoring tool's help system documents the accessible content support features as it would other features of the authoring tool. Since the authoring tool includes context-sensitive help, this is also provided for the accessible content support features.
-   **Short and long versions of help:** During prompting and repairs, an authoring tool provides authors with immediate access to some basic accessibility documentation and one-step access to more comprehensive documentation.  
    <span class="figure">**Figure:** An accessibility checker includes some limited tips for authoring short text labels listed beneath the text entry area as well as a "Help" button linking to the full documentation. The tips are: "Alternate text should be 10 words or less and should include any text in the image.", "Image buttons should have alternate text that describes the button function.", and "Image bullets should have 'bullet' as alternate text.". The screen shot also includes the name of the problem ("Missing Alternate Text Label for an Image"), a field for adding the short text label and a preview rendering of the image ("earthrise"). At the bottom are five buttons: "Help", "&lt; Back", "Repair", "Skip", and "Cancel". (Source: mock up by AUWG)  
    <img src="tech_images/b_42.png" alt="See the example caption above for description." width="398" height="247" /></span>

##### <span id="sc_b422-r"></span>Related Resources for Success Criterion B.4.2.2:

-   N/A

#### <span id="sc_b423"></span> <span class="techs-only">Implementing Success Criterion </span>B.4.2.3 Tutorial:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> provides a <a href="#def-Tutorial" class="termdef" title="definition: tutorial">tutorial</a> for an accessible authoring process that is specific to that authoring tool. <span class="level">(**Level AAA**)</span>

[Return to B.4.2.3 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b423)

##### <span id="sc_b423-i"></span>Intent of Success Criterion B.4.2.3:

The intent of this success criterion is to ensure that authors that learn best through tutorials are exposed to accessibility best practices specific to the authoring tool.

##### <span id="sc_b423-e"></span>Examples of Success Criterion B.4.2.3:

-   **Accessibility tutorial:** A web page authoring tool includes built-in tutorials demonstrating several multi-step tasks (e.g. setting up the folders and files for the local version of a website, formatting with CSS). One of the tutorials describes how to use the accessible content support features of the authoring tool to increase the accessibility of the web content produced. The tutorial begins at the typical starting point for the tool (e.g. empty document). The tutorial also covers when and how checking and repair should be performed. The tutorial includes some basic rationales for accessible content production. These rationales emphasize the importance of accessibility for a wide range of content consumers, from those with disabilities to those with alternative viewers (see ["Auxiliary Benefits of Accessibility Features"](http://www.w3.org/WAI/bcase/benefits.html), a W3C-WAI resource).

##### <span id="sc_b423-r"></span>Related Resources for Success Criterion B.4.2.3:

-   [Auxiliary Benefits of Accessibility Features](http://www.w3.org/WAI/bcase/benefits.html)

#### <span id="sc_b424"></span> <span class="techs-only">Implementing Success Criterion </span>B.4.2.4 Instruction Index:

The <a href="#def-Authoring-Tool" class="termdef" title="definition: authoring tool">authoring tool</a> <a href="#def-Documentation" class="termdef" title="definition: documentation">documentation</a> contains an index to the instructions for using any <a href="#def-Accessible-Content-Support-Features" class="termdef" title="definition: accessible content support features">accessible content support features</a>. <span class="level">(**Level AAA**)</span>

[Return to B.4.2.4 in Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/#sc_b424)

##### <span id="sc_b424-i"></span>Intent of Success Criterion B.4.2.4:

The intent is to help authors discover instructions related to features provided to support the authoring of accessible web content.

##### <span id="sc_b424-e"></span>Examples of Success Criterion B.4.2.4:

-   **Help chapter:** An authoring tool includes documentation of its accessible content support features (needed to meet [Success Criterion B.4.2.2](#sc_b422)). This documentation appears in a chapter of the documentation on accessibility. The documentation is also available via other mechanisms, including context sensitive help from the features themselves and from a help search function.
-   **Help index:** An authoring tool includes documentation of its accessible content support features (needed to meet [Success Criterion B.4.2.2](#sc_b422)). This documentation is spread throughout the other documentation topics as applicable. In addition, there is a help topic on accessible authoring that includes links to the various pieces of distributed documentation. The documentation is also available via other mechanisms, including context sensitive help from the features themselves and from a help search function.

##### <span id="sc_b424-r"></span>Related Resources for Success Criterion B.4.2.4:

-   N/A

------------------------------------------------------------------------

<span id="Conformance"></span> <span class="techs-only">Implementing ATAG 2.0 </span>Conformance
------------------------------------------------------------------------------------------------

This section is included here for <a href="#def-Informative" class="termdef" title="definition: informative">informative</a> purposes. The <a href="#def-Normative" class="termdef" title="definition: normative">normative</a> version appears in the Authoring Tool Accessibility Guidelines 2.0 [\[ATAG20\]](#ref-ATAG20 "reference: ATAG20").

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

ATAG 2.0 may be applied to authoring tools with workflows that involve live authoring of web content (e.g. some collaborative tools). Due to the challenges inherent in real-time publishing, conformance to [Part B](#part_b) of ATAG 2.0 for these authoring tools may involve some combination of support before (e.g. support in preparing accessible slides), during (e.g. live captioning as WCAG 2.0 requires at Level AA) and after the live <span class="sc"><a href="#def-Authoring-Session" class="termdef" title="definition: authoring session">authoring session</a></span> (e.g. the ability to add a transcript to the archive of a presentation that was initially published in real-time). For more information, see [Implementing ATAG 2.0 - Appendix E: Authoring Tools for Live Web Content](http://www.w3.org/TR/2015/WD-IMPLEMENTING-ATAG20-20150721/#realtime-production).

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

<span id="prompting-types"></span> Appendix A: Gathering Accessibility Information from Authors:
------------------------------------------------------------------------------------------------

This section is <a href="#def-Informative" class="termdef" title="definition: informative">informative</a>.

In order to produce more accessible web content, authoring tools often need authors to provide accessibility information such as text alternatives for images, role. and state information for widgets, relationships within complex tables, and captions for audio. The following informative table links the WCAG 2.0 success criteria with examples of accessibility information:

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>WCAG 2.0 Success Criteria</th><th>WCAG 2.0 Level</th><th><p>Examples of "Accessibility Information" <span id="wai-aria-note"></span>(**indicates certain WAI-ARIA 1.0 markup may qualify)<br />
</p></th></tr></thead><tbody><tr class="odd"><td><strong>1.1.1 Non-text Content</strong></td><td>Level A</td><td>Alternative text, long descriptions, indicators that non-text is pure decoration <a href="#wai-aria-note" title="WAI-ARIA markup may apply">**</a></td></tr><tr class="even"><td><strong>1.2.1 Audio-only and Video-only (Prerecorded)</strong></td><td>Level AA</td><td>Audio tracks (in case it contains equivalent information for video), alternative for time-based media <a href="#wai-aria-note" title="WAI-ARIA markup may apply">**</a></td></tr><tr class="odd"><td><strong>1.2.2 Captions (Prerecorded)</strong></td><td>Level AA</td><td>Captions (text tracks in video; marked up captions)</td></tr><tr class="even"><td><strong>1.2.3 Audio Description or Media Alternative (Prerecorded)</strong></td><td>Level AA</td><td>Alternative for time-based media, audio descriptions (secondary audio tracks, marked up audio descriptions)</td></tr><tr class="odd"><td><strong>1.2.4 Captions (Live)</strong></td><td>Level AAA</td><td>Captions (text tracks in video; marked up captions)</td></tr><tr class="even"><td><strong>1.2.5 Audio Description (Prerecorded)</strong></td><td>Level AAA</td><td>Audio descriptions (secondary audio tracks, marked up audio descriptions)</td></tr><tr class="odd"><td><strong>1.2.6 Sign Language (Prerecorded)</strong></td><td>Level AAA</td><td>Sign language interpretation (secondary video tracks; marked up sign language interpretation)</td></tr><tr class="even"><td><strong>1.2.7 Extended Audio Description (Prerecorded)</strong></td><td>Level AAA</td><td>Secondary audio descriptions (secondary audio tracks, marked up audio descriptions)</td></tr><tr class="odd"><td><strong>1.2.8 Media Alternative (Prerecorded)</strong></td><td>Level AAA</td><td>Alternative for time-based media <a href="#wai-aria-note" title="WAI-ARIA markup may apply">**</a></td></tr><tr class="even"><td><strong>1.2.9 Audio-only (Live)</strong></td><td>Level AAA</td><td>Alternative for time-based media <a href="#wai-aria-note" title="WAI-ARIA markup may apply">**</a></td></tr><tr class="odd"><td><strong>1.3.1 Info and Relationships</strong></td><td>Level A</td><td><p>Labels for other elements that lack them (e.g. for form controls, table cells)<a href="#wai-aria-note" title="WAI-ARIA markup may apply">**</a></p></td></tr><tr class="even"><td><strong>1.3.2 Meaningful Sequence</strong></td><td>Level A</td><td>Navigation (e.g. tab) order</td></tr><tr class="odd"><td><strong>1.3.3 Sensory Characteristics</strong></td><td>Level A</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>1.4.1 Use of Color</strong></td><td>Level A</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>1.4.2 Audio Control</strong></td><td>Level A</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>1.4.3 Contrast (Minimum)</strong></td><td>Level AA</td><td><em>N/A (contrast is a calculated value not stored information)</em></td></tr><tr class="odd"><td><strong>1.4.4 Resize text</strong></td><td>Level AA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>1.4.5 Images of Text</strong></td><td>Level AA</td><td>Text can considered its own accessibility information (so it is not acceptable to automatically convert text into images and discard the text)</td></tr><tr class="odd"><td><strong>1.4.6 Contrast (Enhanced)</strong></td><td>Level AAA</td><td><em>N/A (contrast is a calculated value not stored information)</em></td></tr><tr class="even"><td><strong>1.4.7 Low or No Background Audio</strong></td><td>Level AAA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>1.4.8 Visual Presentation</strong></td><td>Level AAA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>1.4.9 Images of Text (No Exception)</strong></td><td>Level AAA</td><td>Text can considered its own accessibility information (so it is not acceptable to automatically convert text into images and discard the text)</td></tr><tr class="odd"><td><strong>2.1.1 Keyboard</strong></td><td>Level A</td><td>Keyboard handlers, navigation (tab) order.</td></tr><tr class="even"><td><strong>2.1.2 No Keyboard Trap</strong></td><td>Level A</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>2.1.3 Keyboard (No Exception)</strong></td><td>Level AAA</td><td>Removing keyboard handlers or elements from the navigation (tab) order.</td></tr><tr class="even"><td><strong>2.2.1 Timing Adjustable</strong></td><td>Level A</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>2.2.2 Pause, Stop, Hide</strong></td><td>Level A</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>2.2.3 No Timing</strong></td><td>Level AAA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>2.2.4 Interruptions</strong></td><td>Level AAA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>2.2.5 Re-authenticating</strong></td><td>Level AAA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>2.3.1 Three Flashes or Below Threshold</strong></td><td>Level A</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>2.3.2 Three Flashes</strong></td><td>Level AAA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>2.4.1 Bypass Blocks</strong></td><td>Level A</td><td>Intra-page links</td></tr><tr class="even"><td><strong>2.4.2 Page Titled</strong></td><td>Level A</td><td>Page title</td></tr><tr class="odd"><td><strong>2.4.3 Focus Order</strong></td><td>Level A</td><td>Navigation (e.g. tab) order</td></tr><tr class="even"><td><strong>2.4.4 Link Purpose (In Context)</strong></td><td>Level A</td><td><p><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></p></td></tr><tr class="odd"><td><strong>2.4.5 Multiple Ways</strong></td><td>Level AA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>2.4.6 Headings and Labels</strong></td><td>Level AA</td><td>Heading markup, label markup <a href="#wai-aria-note" title="WAI-ARIA markup may apply">**</a></td></tr><tr class="odd"><td><strong>2.4.7 Focus Visible</strong></td><td>Level AA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><p><strong>2.4.8 Location</strong></p></td><td>Level AAA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>2.4.9 Link Purpose (Link Only)</strong></td><td>Level AAA</td><td>Link text</td></tr><tr class="even"><td><strong>2.4.10 Section Headings</strong></td><td>Level AAA</td><td>Section heading markup <a href="#wai-aria-note" title="WAI-ARIA markup may apply">**</a></td></tr><tr class="odd"><td><strong>3.1.1 Language of Page</strong></td><td>Level A</td><td>Page language markup</td></tr><tr class="even"><td><strong>3.1.2 Language of Parts</strong></td><td>Level AA</td><td><p>Sub-page language markup</p></td></tr><tr class="odd"><td><strong>3.1.3 Unusual Words</strong></td><td>Level AAA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>3.1.4 Abbreviations</strong></td><td>Level AAA</td><td>Abbreviation markup</td></tr><tr class="odd"><td><strong>3.1.5 Reading Level</strong></td><td>Level AAA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>3.1.6 Pronunciation</strong></td><td>Level AAA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>3.2.1 On Focus</strong></td><td>Level A</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>3.2.2 On Input</strong></td><td>Level A</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>3.2.3 Consistent Navigation</strong></td><td>Level AA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>3.2.4 Consistent Identification</strong></td><td>Level AA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>3.2.5 Change on Request</strong></td><td>Level AAA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>3.3.1 Error Identification</strong></td><td>Level A</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>3.3.2 Labels or Instructions</strong></td><td>Level A</td><td>Label markup <a href="#wai-aria-note" title="WAI-ARIA markup may apply">**</a></td></tr><tr class="even"><td><strong>3.3.3 Error Suggestion</strong></td><td>Level AA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>3.3.4 Error Prevention (Legal, Financial, Data)</strong></td><td>Level AA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>3.3.5 Help</strong></td><td>Level AAA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>3.3.6 Error Prevention (All)</strong></td><td>Level AAA</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="even"><td><strong>4.1.1 Parsing</strong></td><td>Level A</td><td><em>N/A (success criterion can be met by a variety of mechanism, not any particular stored information)</em></td></tr><tr class="odd"><td><strong>4.1.2 Name, Role, Value</strong></td><td>Level A</td><td><strong><span id="name-role-value"></span></strong>WAI-ARIA markup</td></tr></tbody></table>

As for any information to be gathered from authors, there are a range of approaches that a developer might take for gathering accessibility information, from voluntary unobtrusive reminders to intrusive mandatory prompts. While ATAG 2.0 does **not** require any particular approach, author cooperation and goodwill are important considerations in ensuring that the accessibility information that is gathered is *correct* and *complete*.

The following are some techniques that may assist in gathering different types of accessibility information, along with some example implementations.

### <span id="prompt-short-text-labels"></span> 1. Short text labels (e.g. alternate text, titles, short text metadata fields, rubies for ideograms):

-   Prompts may be kept short because short text strings are usually entries of ten words or less. (Example A-1a)
-   Provide a rendered view of the object being labeled for the authors to consult. (Example A-1a)
-   Provide the option of automatically retrieving previously used labels as suggestions. (Example A-1a, Success Criterion B.2.4.2 for more information)
-   If the tool offers authors previously used labels or special function label text, then editable text entry boxes with drop-down lists should be used to allow authors the option of entering different text (Example A-1a).
-   In source editing-views, suggest short text labels that are already marked up appropriately (Example A-1b).

> <span id="Example_B.2_1a"></span> **Example A-1a:** A dialog box offers short text labels for reuse. It shows an "Insert Image" dialog box a thumbnail image of the "earthrise" graphic along with entry fields for "src", "alt", "longdesc", "height", and "width". The "alt" entry field is drop-down list that is shown with several short labels for the same image. The first is a visual description in English ("An earth rise as seen from the moon"), the second is a visual description in French ("Une vue do la terre de la lune"), and the third is an English functional label used if the image serves as a link ("Go to pictures of the earth"). (Source: mock up by AUWG)  
> <img src="tech_images/b_2.png" alt="See the example caption above for description." width="331" height="171" />
>
> <span id="Example-ShortTextLabels-b"></span>**Example A-1b:** A source editing-view offers short text labels for reuse. It shows the author midway through adding markup for an image. After adding the `src` attribute value the author has pressed the spacebar, causing the tool to prompt them with the `alt` attribute along with several attribute values, including a visual description in English (alt="An earth rise as seen from the moon"), a visual description in French (alt="Une vue de la terre de la lune"), and an English functional label used if the image serves as a link (alt="Go to pictures of the earth"). (Source: mock up by AUWG)  
> <img src="tech_images/b_3.png" alt="See the example caption above for description." width="417" height="123" />

### <span id="prompt-multiple-text-labels"></span>2. Multiple text labels (e.g. image map area labels):

-   Prompts for multiple text labels may be similar to those for [short text labels](#prompt-short-text-labels), with allowance made for rapidly adding several labels (e.g. a spreadsheet type of component). (Example A-2)
-   Provide a rendered view of the various objects being labeled for authors to consult
-   If the objects have URIs (e.g. image map areas), display these as a hint for the labels. (Example A-2)
-   If the objects have URIs (e.g. image map areas), offer to automatically generate a set of plain text links from the labels that the user completes. (Example A-2)

> <span id="Example-MultipleShortTextLabels"></span>**Example A-2:** An interface for image map area text labels. It is comprised of a list with two columns. In the right-hand column is the URL for each image map area. This can be used as a hint by the author as they fill in the text labels (left-hand column). A checkbox at the bottom provides the option of using the text labels to create a set of text links below the image map. (Source: mock up by AUWG)  
> <img src="tech_images/b_4.png" alt="See the example caption above for description." width="362" height="124" />

### <span id="prompt-long-description"></span>(3): Long text descriptions (e.g. longdesc text, table summaries, site information, long text metadata fields):

-   Begin by asking authors whether the inserted object is adequately described with an existing short text label. Providing a view of the page with rendering of the object turned off may help authors decide. (Example A-3)
-   If the short text label is determined to be inadequate, prompt authors for the location of a pre-existing description. (Example A-3)
-   If authors need to create a description, provide a special writing utility that includes a rendered view of the object and description writing advice.
-   Ensure that checking can ignore objects that do not require long text descriptions (e.g. bullets, spacers, horizontal rules) or objects that authors have previously stated do not require long text descriptions.

> <span id="Exampe-LongTextDesc"></span>**Example A-3:** An interface for long text descriptions. A "description required" checkbox controls whether the rest of the interface is available. If a description is required, the author then has the choice of opening an existing description file or writing (and saving) a new one. If they choose to use an existing file, there is a text entry area for the name along with a button to browse the file system. If they choose to compose a new description, there is a text entry area for the description followed by a text field for the file name and a button to save it to that location. In the situation shown, the author chooses to use an existing description of "earthrise" so the file name containing the description is shown. In addition, the text of the description from the file is loaded into the compose area ("The earth hangs in the pitch black sky above the gray horizon of the moon. The dazzling blue sphere is covered with creamy white streamers of cloud.") in case the author would like to use this text as a basis for a new description. (Source: mock up by AUWG)  
> <img src="tech_images/b_5.png" alt="See the example caption above for description." width="440" height="162" />

### <span id="prompt-form-control-labels"></span>(4): Form component labels:

-   Prompts for form components may be similar to those for [short text labels](#prompt-short-text-labels) and/or [multiple text labels](#prompt-multiple-text-labels).
-   For web content technologies in which form component labels are external to the actual form component elements (e.g. HTML), allow authors to either directly add a form component label or identify pre-existing text strings that are already serving implicitly as labels.
-   It may be helpful to render the form components with indicators of label associations or missing labels.
-   It may be helpful to re-display the components in spreadsheet form to assist authors in determining which components are lacking labels. (Example A-4)

> <span id="Example-FormFieldLabels"></span>**Example A-4:** A form properties list with five columns that allows the author to simultaneously decide the following for each field: the tab order, form name, field label, component type, and accesskey. In this example, two form field labels are missing, causing yellow highlighting of the cells and red icons to be displayed. "Move up" and "move down" buttons are provided. (Source: mock up by AUWG)  
> <img src="tech_images/b_6.png" alt="See the example caption above for description." width="519" height="133" />

### <span id="prompt-form-placeholders"></span>(5): Form field place-holders:

-   Prompts for form field place-holders may be similar to those for [short text labels](#prompt-short-text-labels), [multiple text labels](#prompt-multiple-text-labels), and/or [form component labels](#prompt-form-control-labels).
-   Provide authors with the option of directly selecting nearby text strings that are serving implicitly as labels and use the text as place-holders.

### <span id="prompt-tab-sequence"></span>(6): Tab orders:

-   At the very least, provide a field for entering the tab order number for any element that can appear in the tab order.
-   Manage the tab order to prevent duplicate tab order indices and to reduce the need for manual renumbering.
-   Provide contextual information to supplement the basic tab order numbers, such as the label or name of components.
-   Provide authors with a point-and-click numbering tool that they can use to select components to quickly create a tab order
-   Provide a list of links and components to check the tab order.
-   Where there are only a few links that change in each page of a collection, ask authors to confirm whether these links receive focus first. If so, then the tool can appropriately update the tab order.

### <span id="prompt-nav-shortcuts"></span>(7): Navigational shortcuts (e.g. keyboard shortcuts, bypass blocks):

-   Suggest repetitive blocks of content that might be candidates for bypass.
-   Prompt authors with a list of links that are candidates for accesskeys, because they are common to a number of pages in a site.
-   Manage accesskey lists to ensure consistency across sites and to prevent conflicts within pages. (Example A-7)

> <span id="Example-Navshortcuts-b"></span> **Example A-7:** A source editing-view that suggests accesskey values. The following markup can be seen: "`<body><p>Here is one of the most famous photographs taken from the <a href="moon.html" > moon.</a></p><It was taken with a special <a href="camera.html" accesskey="c">camera.</p>"`. A pop-up menu, centered on the word "moon" suggest accesskey="m", because "moon" begins with "m", followed by the rest of the alphabet in order. Accesskey="c" is missing, however, since it is already used as an accesskey later in the document (for the "camera" link). (Source: mock up by AUWG)  
> <img src="tech_images/b_9.png" alt="See the example caption above for description." width="417" height="142" />

### <span id="prompt-contrasting-colors"></span>(8): Contrasting colors:

-   Assemble color palettes with insufficiently contrasting colors excluded or identified. (Example A-8)
-   To help authors test contrast, provide gray scale and black and white views or suggest that they activate the operating system high contrast mode.

> <span id="Example-ContrastColors"></span>**Example A-8:** A dialog box for choosing sufficiently contrasting color combinations. The dialog box has two tabs: one for text color and one for background color. A "hide low contrast choices" checkbox has been selected, so the palette of colors has been pre-screened so that sufficient contrast between the text and the current background color is assured. All other colors have been grayed out. (Source: mock up by AUWG)  
> <img src="tech_images/b_10.png" alt="See the example caption above for description." width="190" height="220" />

### <span id="prompt-alt-multimedia"></span>(9): Alternative content for multimedia (transcripts, captions, video transcripts, audio descriptions, signed translations, still images):

-   Prompt authors for the location of pre-existing alternative resources for multimedia.
-   Provide a single utility where the various alternative resources can be managed at the same time.
-   Although producing alternative resource for multimedia can be a complex process for long media files, production suites do exist or authoring tools can include simple utilities, with built-in media players, for producing simple alternative resources.
-   The tool should make an attempt to access existing alternative resources for multimedia, which may be incorporated into media (e.g. as text or secondary audio tracks) or be located separately but nearby within content.

### <span id="prompt-metadata"></span>(10): Metadata:

-   For metadata information fields requiring information similar to that discussed in the other sections of this Appendix, see the relevant section. For example: [short text labels](#prompt-short-text-labels), [long text descriptions](#prompt-long-description), and [alternative resources for multimedia](#prompt-alt-multimedia).
-   When prompting for terms in a controlled vocabulary, allow authors to choose from lists to prevent spelling errors.
-   Provide the option of automating the insertion of information that easily stored and reused (e.g. author name, author organization, date).
-   Automate metadata discovery where possible.
-   Provide the option of storing licensing conditions within metadata (e.g. by Creative Commons licenses, GPL, BSD)

### <span id="Prompt-DocStructure"></span>(11): Document structure:

-   Alert authors to the occurrence of unstructured content in a way that is appropriate to the workflow of the tool.
-   Provide authors with options for creating new content that is structured, such as:
    -   templates (with pre-defined structure),
    -   wizards (that introduce structure to content through a series of system-generated queries), or
    -   real-time validators (that may be set by authors to prevent the creation of improperly structured content)
-   Provide authors with options for imposing structure on existing unstructured content.
    -   For tools that support explicit structural mechanisms offer authors the opportunity to use those mechanisms. For example, for DTD or schema based structures, provide validation in accordance to the applicable DTD or schema.
    -   For tools that do not support explicit structural mechanisms, offer authors the option of deriving structure from format styles. For example, provide authors a mechanism to map presentation markup that follows formatting conventions into structural elements. For example, patterns of text formatting may be interpreted as headings (Example A-11) and multiple lines of text beginning items with certain typographical symbols, such as "\*" or "-", may be interpreted as list items.
-   Provide structure-based editing features, such as:
    -   hide/show content blocks according to structure,
    -   shift content blocks up, down, and sideways through the document structure, or
    -   hierarchical representation or network diagram view of the document structure, as appropriate.
-   Provide validation for structure.
-   It is not necessary to prohibit editing in an unstructured mode. However, the tool should alert authors to the fact that they are working in an unstructured mode.

> <span id="Example-DocStructure"></span>**Example A-11:** A WYSIWYG editing-view that detects opportunities for enhancing structure and alerts the author. On the left side is the WYSIWYG editing-view with the title of the page ("Mars") displayed with a blue underline. The author has brought up a pop-up menu for the title and sees the following options: "Repair: Mark as heading (a sub-menu displays the different levels of header (i.e. h1, h2, h3, h4, h5, h6) for the author to choose", "Skip", "Ignore", "Check Accessibility...", and "Help...". On the right, an element inspector makes clear that the title is currently marked up as a paragraph. (Source: mock up by AUWG)  
> <img src="tech_images/b_12.png" alt="See the example caption above for description." width="628" height="188" />

### <span id="Prompt-TableStructure"></span>(12): Tabular structure:

-   Prompt authors to identify tables as used for layout or data or implement automated detection mechanisms.
-   Differentiate utilities for table structure from utilities for document layout - use this when tables are identified as being for layout.
-   Prompt authors to provide header information. (Example A-12)
-   Prompt authors to group and split columns, rows, or blocks of cells that are related.
-   Provide authors with a linearized view of tables (as [tablin](http://www.w3.org/WAI/References/Tablin/) does).

> <span id="Example-TableStructure"></span> **Example A-12:** A WYSIWYG editing-view that prompts the author to decide whether the top row of a table contains the table header cells. The top row of the rendered table is outlined in blue to indicate an accessibility problem. The author has brought up a pop-up menu for one of the cells in the top row and sees the following options: "Repair: Set as header row", "Skip", "Ignore", "Check Accessibility...", and "Help...". (Source: mock up by AUWG)  
> <img src="tech_images/b_13.png" alt="See the example caption above for description." width="417" height="162" />

### <span id="Prompt-stylesheets"></span>(13): Style sheets:

-   Use style sheets, according to specification, as the default mechanism for presentation formatting and layout.
-   If content is created with a style sheet format, along with a content format, the use of that style format must also meet the requirements of WCAG.
-   Conceal the technical details of style sheet usage to a similar degree as for usage of other markup formats supported by the tool.
-   Assist authors by detecting structural markup (e.g. header tags) that has been misused to achieve presentation formatting and, with author permission, transforming it to use style sheets.
-   Prompt authors to create style classes and rules within and across document, rather than using more limited in-line styling.
-   Assist authors by recognizing patterns in style sheet use and converting them into style classes and rules.
-   Provide the option of editing text content independently of style sheet layout and presentation formatting.
-   Assist authors with the issue of style sheet browser compatibility by guiding them toward standard practices and detecting the existence of non-standard practices.
-   Assist authors by providing a style sheet validation function.
-   Maintain a registry of styles for ease of re-use.
-   For prompting and assisting with specific types of information required by style sheets, see the other sections in this Appendix. For example: (8) font/background colors and (11) document structure.
-   Consult [Accessibility Features of CSS](http://www.w3.org/1999/08/NOTE-CSS-access-19990804).

### <span id="Prompt-ClearText"></span>(14): Clearly written text:

-   Prompt authors to specify a default language of a document.
-   Provide a thesaurus function.
-   Provide a dictionary lookup system that can recognize changes of language, terms outside a controlled vocabulary as well as known abbreviation or acronym expansions.
-   Provide an automated reading level status. (Example A-14a)
-   Prompt authors for expansions of unknown acronyms, recognizable in some languages as collections of uppercase letters. (Example A-14b)

> <span id="Example-ClearText-a"></span> **Example A-14a:** A source editing-view that indicates the reading level of a page and whether it exceeds a limit determined by the author's preference settings. The editing-view includes the following markup: `<body><h1>Mars</h1><p>Mars is the fourth planet in the solar system, orbiting at a distance of 1.5 AU, with a period of 687 days.</p></body></html>`. Then in a status bar below the text entry area, is a reading level display: "Reading Level: 11.2 (target&lt;8)". The 11.2 is highlighted with a yellow background and bold text to indicate that the target is exceeded. (Source: mock up by AUWG)  
> <img src="tech_images/b_15.png" alt="See the example caption above for description." width="417" height="164" />
>
> <span id="Example-ClearText-b"></span> **Example A-14b:** An authoring interface that prompts the author to enter an acronym expansion. The rendered text reads: "The 'habitable zone' around a star is the region of that star’s solar system in which liquid water is possible. The continuous habitable zone (CHZ) is the region of the solar system which has remained in the zone, even during changes in the star’s radiation pattern." The acronym "CHZ" is identified with a blue underline as an accessibility problem. The author has brought up a pop-up menu for the acronym and sees the following options: "Repair: Enter acronym expansion…", "Check Accessibility...", and "Help...". (Source: mock up by AUWG)  
> <img src="tech_images/b_16.png" alt="See the example caption above for description." width="417" height="208" />

### <span id="Prompt-DIhandlers"></span>(15): Device-independent events:

-   Detect mouse-specific events.
-   If paired keyboard events (e.g. `onfocus` for `onmouseover`,) exist, suggest they be added.

### <span id="Prompt-NonTextSupp"></span>(16): Non-text supplements to text:

-   Prompt authors to provide icons for buttons, illustrations for text, graphs for numeric comparisons. (Example A-16)
-   Where subject metadata is available, look up appropriate illustrations.
-   If authors have identified content as instructions, then provide templates or automated utilities for extracting flow charts.

> <span id="Example-NonTextSupp"></span> **Example A-16:** An authoring interface for prompting the author about whether a paragraph that contains many numbers might be made more clear with the addition of a chart or graph. On the left side of the interface is the rendered text: " Planet Orbits: The inner planets orbit the sun relatively quickly with Mercury orbiting the sun in 88 days, Venus in 224 days, Earth in 365 days, and Mars in 687 days. Compare this to Jupiter’s, 4332 day orbit." This text is marked with a yellow exclamation mark icon. On the right side is the following explanation of the error icon: "This paragraph contains 5 numbers. Would readers benefit if a chart or graph of this information was added?". "Yes" and "no" buttons are provided. (Source: mock up by AUWG)  
> <img src="tech_images/b_17.png" alt="See the example caption above for description." width="417" height="175" />

------------------------------------------------------------------------

<span id="checking-types"></span>Appendix B: Levels of Checking Automation
--------------------------------------------------------------------------

This section is <a href="#def-Informative" class="termdef" title="definition: informative">informative</a>.

This list is representative, though not necessarily complete.

### <span id="checking-type-automated"></span>(a) Automated Checking:

In automated checking, the tool is able to check for accessibility problems automatically, with no human intervention required. This type of check is usually appropriate for checks of a syntactic nature, such as the use of deprecated elements or a missing attribute, in which the meaning of text or images does not play a role.

> <span class="figure">**Example B-1:** A summary interface for a code-based authoring tool that displays the results of an automated check. The display is a tree-view where the leftmost nodes are the names of problems ("Image missing alternate text" and "Text boxes missing labels) with number of problems appended (e.g. "\[6\]") and the sub-items are the problem instances with line numbers appended (e.g. "(Line:45)"). (Source: mock up by AUWG)  
> <img src="tech_images/b_18.png" alt="See the example caption above for description." width="294" height="209" /></span>
>
> **Example B-2:** A WYSIWYG interface that displays the results of an automated check in a WYSIWYG authoring view using blue highlighting around or under rendered elements (in this case, the "earthrise" image and some "blinking text"), identifying accessibility problems for the author to correct. (Source: mock up by AUWG)  
> <img src="tech_images/b_19.png" alt="See the example caption above for description." width="417" height="194" />
>
> **Example B-3:** An authoring interface of an automated check in an instruction-level authoring view. The text is: "`<body><p>Image:</p><img href="pic123.gif"/><hr/><blink>Blinking text</blink></body></html>`".In this view, the text of elements with accessibility problems (`img` and `blink`) is shown in a blue font, instead of the default black font. (Source: mock up by AUWG)  
> <img src="tech_images/b_20.png" alt="See the example caption above for description." width="417" height="145" />

### <span id="checking-type-semi"></span>(b) Semi-Automated Checking:

In semi-automated checking, the tool is able to identify potential problems, but still requires human judgment by authors to make a final decision on whether an actual problem exists. Semi-automated checks are usually most appropriate for problems that are semantic in nature, such as descriptions of non-text objects, as opposed to purely syntactic problems, such as missing attributes, that lend themselves more readily to full automation.

> **Example B-4:** A dialog box that appears once the tool has detected an image without a description attribute. However, since not all images require description, the author is prompted to make the final decision ("Does this image require descriptive text?"). The author can confirm that this is indeed an accessibility problem by choosing and move on to the repair stage by choosing "Yes" or press "No" to mark the potential problem, as not a problem at all. Additional help is available in the form of a tip: "An image requires descriptive text when the information it contains cannot be conveyed in 10 words or less using an alternate text label." (Source: mock up by AUWG)  
> <img src="tech_images/b_21.png" alt="See the example caption above for description." width="464" height="171" />

### <span id="checking-type-manual"></span>(c) Manual Checking:

In manual checking, the tool provides authors with instructions for detecting a problem, but does not automate the task of detecting the problem in any other way. As a result, authors must decide on their own whether or not a problem exists. Manual checks are discouraged because they are prone to human error, especially when the type of problem in question may be easily detected by a more automated utility, such as an element missing a particular attribute.

> **Example B-5:** A dialog box that reminds the author to check if there are any words in other languages in the document with the message: "Does this document contain any words or phrases in a different language than the main content?". The author can move on to the repair stage by pressing "Yes" or press "No" to mark the potential problem, as not a problem at all. (Source: mock up by AUWG)  
> <img src="tech_images/b_22.png" alt="See the example caption above for description." width="334" height="117" />

------------------------------------------------------------------------

<span id="repair-types"></span>Appendix C: Levels of Repair Automation
----------------------------------------------------------------------

This section is <a href="#def-Informative" class="termdef" title="definition: informative">informative</a>.

This list is representative, though not necessarily complete.

### <span id="repairing-type-manual"></span>(a) Repair Instructions:

In manual repair, the tool provides authors with instructions for making the necessary correction, but does not automate the task in any other way. For example, the tool may move the cursor to start of the problem, but since this is not a substantial automation, the repair would still be considered "manual". Manual correction tools leave it up to authors to follow the instructions and make the repair by themselves. This is the most time consuming option for authors and allows the most opportunity for human error.

> <span class="figure">**Example C-1:** Repair instructions in a code level editing-view. In this case, the following markup is being edited: `<body><p>Image:</p><img href="pic123.gif"/><hr/><blink>Blinking text</blink></body></html>`. Since the problems have already been detected in the checking step and the selected offending elements in a code view (`<img href="pic123.gif"/>` and `<blink>Blinking text</blink>`) have been highlighted in blue text. When the author puts focus on the highlighted text, a short repair instruction ("Repair: Add 'alt' attribute") appears in a status bar with a button than will open a longer explanation in the help system. (Source: mock up by AUWG)  
> <img src="tech_images/b_25.png" alt="See the example caption above for description." width="417" height="193" /></span>

### <span id="repairing-type-semi"></span>(b) Semi-Automated:

In semi-automated repair, the tool can provide some automated assistance to authors in performing corrections, but author input is still required before the repair can be complete. For example, the tool may prompt authors for a plain text string, but then be capable of handling all of the markup required to add the text string to the content. In other cases, the tool may be able to narrow the choice of repair options, but still rely on authors to make the final selection. This type of repair is usually appropriate for corrections of a semantic nature.

> <span class="figure">**Example C-2:** A semi-automated repair in a WYSIWYG editing-view. The author has right-clicked on an image of the "earthrise" that has been highlighted with a blue outline by the automated checker system. This has brought up a pop-up menu with the following choices: "Repair: Set Alt -Text: 'An earth rise as seen from the moon'", "Enter different alt-text…", " Skip", "Ignore", "Check Accessibility...", "Help...". The author must decide whether the label text that the tool suggests is appropriate. Whichever option the author chooses, the tool will handle the details of updating the content. (Source: mock up by AUWG)  
> <img src="tech_images/b_26.png" alt="See the example caption above for description." width="417" height="194" /></span>

### <span id="repairing-type-automated"></span>(c) Automated:

In automated repair, the tool is able to make repairs automatically, with no author input required. For example, a tool may be capable of automatically adding a document type to the header of a file that lacks this information. In these cases, very little, if any, author notification is required. This type of repair is usually appropriate for corrections of a syntactic or repetitive nature.

> <span class="figure">**Example C-3:** An announcement that an automated repair has been completed ("All instances of &lt;blink&gt; have been replaced with CSS styling according to your preferences."). The author selects an "ok" to proceed. An "undo" button is provided in case the author wishes to reverse the operation. In some cases, automated repairs might be completed with no author notification at all. (Source: mock up by AUWG)  
> <img src="tech_images/b_27.png" alt="See the example caption above for description." width="334" height="117" /></span>

------------------------------------------------------------------------

<span id="timing-options"></span>Appendix D: Author Interruption Timing Options
-------------------------------------------------------------------------------

This section is <a href="#def-Informative" class="termdef" title="definition: informative">informative</a>.

This list is representative, though not necessarily complete.

<span id="timing-type-negotiated"></span>**(a) Negotiated Interruption:** A negotiated interruption is caused by interface mechanisms (e.g. icons or highlighting of the element, audio feedback) that alert the author to a problem, but remain flexible enough to allow the author to decide whether to take immediate action or address the issue at a later time. Since negotiated interruptions are less intrusive than immediate or scheduled interruptions, they can often be better integrated into the design workflow and have the added benefit of informing the author about the distribution of problems within the document. Although some authors may choose to ignore the alerts completely, it is *not* recommended that authors be forced to fix problems as they occur. Instead, it is recommended that negotiated interruption be supplemented by [scheduled interruptions at major editing events](#timing-type-scheduled) (e.g. when publishing), when the tool should alert the author to the outstanding accessibility problems.

> <img src="icons/rendered.gif" alt="Applicable to content-rendering authoring functions" width="16" height="16" />**Example D-1:** A WYSIWYG editing-view makes the author of problems detected automatically by means of a blue line under text or around rendered objects with accessibility problems. Here, red lines are also visible, highlighting spelling errors in the text. The author can decide to address the problems at a later time. (Source: mock up by AUWG)  
> <img src="tech_images/b_38.png" alt="See the example caption above for description." width="417" height="194" />

<span id="timing-type-scheduled"></span>**(b) Scheduled Interruption:** A scheduled interruption is one in which the author has set the tool to alert them of accessibility issues on a configurable schedule. One option for the schedule might be to have prompts associated with the interface mechanisms for significant authoring events, such as opening, saving, closing, committing, or publishing files. At the significant authoring event, the author would be informed of the problem, while at the same time they would *not* be prevented from saving, publishing, printing, etc. A potential downside of postponing corrective actions is that by the time the prompt is displayed, the author may not have sufficient time or inclination to make the required changes, especially if they are extensive.

> **Example D-2:** A "Publish" dialog box allows the author to publish multiple files at once, however in the case shown here, two of the files have uncorrected accessibility problems which causes them not to meet a "standard of publishing" the author has set for themselves in the options. As a result the files are selected, a message is displayed ("The selected files do not meet your specified standard for publishing.") and the "publishing" button is grayed out. This standard is referred to generally since it is assumed that it might include spelling and grammar standards as well as accessibility issues. (Source: mock up by AUWG)  
> <img src="tech_images/b_39.png" alt="See the example caption above for description." width="377" height="185" />

<span id="timing-type-immediate"></span>**(c) Immediate Interruption:** An immediate interruption is the most intrusive timing option because the attention of the author is actively diverted from the current editing task by the notification of some issue. This might be achieved, for instance, by an alert dialog. This type of alert presents multiple usability problems and should be used sparingly because it interferes with the normal design workflow. Intrusive warnings are probably only appropriate when the window of opportunity for correcting a serious accessibility problem is about to close, such as when an author decides to publish the content in question. In general, negotiated and scheduled interruptions are preferred.

> **Example D-3:** A modal dialog box contains the message: "This image is missing alternate text". The author must press the "OK" button to continue. (Source: mock up by AUWG)  
> <img src="tech_images/b_40.png" alt="See the example caption above for description." width="266" height="107" />

 

<span id="realtime-production"></span>Appendix E: Authoring Tools for Live Web Content
--------------------------------------------------------------------------------------

This section is <a href="#def-Informative" class="termdef" title="definition: informative">informative</a>.

Supporting the production of <a href="#def-Live" class="termdef" title="definition: live">live</a> web content that is also accessible is a challenge. The immediate and continuous time pressures will limit what can reasonably expect from authors. However, there are potential approaches that developers may take to increase the accessibility of the live content produced by their authoring tools:

> **<span id="need"></span>(a) Determine Participant Requirements:** Sometimes it may be possible to determine beforehand the accessibility requirements of the end user audience. In other cases, polling the participants (e.g. "Request whiteboard descriptions" checkbox in the figure) or matching participant profiles might help determine which types of accessibility practices would offer the greatest advantage in the short time available. However, usually it is impossible to know all of the needs of the actual or potential participants.
>
> **<span id="assistant"></span>(b) Assistant/Peer Author:** Consider designating one or more secondary authors, who can receive and respond to prompts for supplemental information generated as the primary author proceeds uninterrupted. The secondary author(s) might be an unrelated specialist, analogous to a sign language interpreter, a co-author, or in some situations a member of the session audience (e.g. peer descriptions).
>
> **<span id="preptime"></span>(c) Preparation Time:** Consider allowing authors time to pre-assemble materials for a live presentation (e.g. a professor preparing for an online class).
>
> **<span id="archiving"></span>(d) Archiving:** If the session will be archived, there may be other opportunities to increase the accessibility of the content of the archive by guiding authors through a process to check for and repair accessibility problems after the live session has ended, but prior to archiving.

> **Example E-1:** A live presentation in a whiteboard/chat client environment that has been enhanced to provide real-time descriptions. The example has five panes. On the far left is a list of participants ("Presenter", "John (You)", "Jane", and "Alice"). In the upper-middle is the chat "Presenter&gt; I suggest a space theme for the slide presentation.", "Image File Inserted (by Presenter) Description: An earthrise as seen from the surface of the moon.", "Presenter&gt; The white text would go...", "Marker (by Presenter) Description&gt; Draws a red box..., and "Presenter&gt; in this area." Notice that descriptions are appearing here. The lower-middle is the message composition area for this user and is blank. The upper-right is the whiteboard. So far there is an image of "earthrise" and a red hand-drawn rectangle on the "canvas". The whiteboard tools are "select box", "text tool", "marker", "eraser", "insert image", "line tool", "rectangle tool", and an "ellipse tool". In the lower-right is an area for describing a drawing action - in this case the "Presenter' use of the Marker". Notice that any participant can describe the events on the whiteboard even as the dialog continues. (Source: mock up by AUWG).  
> <img src="tech_images/b_41.png" alt="See the example caption above for description." width="558" height="322" />

------------------------------------------------------------------------

<span id="glossary"></span>Appendix <span class="techs-only">F</span>: Glossary
-------------------------------------------------------------------------------

This section is included here for <a href="#def-Informative" class="termdef" title="definition: informative">informative</a> purposes. The <a href="#def-Normative" class="termdef" title="definition: normative">normative</a> version appears in the Authoring Tool Accessibility Guidelines 2.0 [\[ATAG20\]](#ref-ATAG20 "reference: ATAG20").

<span id="def-Accessibility-Problem"></span>accessibility problems  
ATAG 2.0 recognizes two types of accessibility problems:

-   <span id="def-Authoring-Interface-Accessibility-Problem"></span>authoring tool user interface accessibility problems: Aspects of an <a href="#def-Authoring-Tool-Interface" class="termdef" title="definition: authoring tool user interface">authoring tool user interface</a> that does not meet a success criterion in [Part A](#part_a) of ATAG 2.0.
-   <span id="def-Web-Content-Accessibility-Problem"></span>web content accessibility problems (WCAG): Aspects of <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> that does not meet a [WCAG 2.0](#conf-rel-wcag) success criterion (Level A, AA or AAA).

<span id="def-Accessibility-Information">accessibility information (WCAG)</span>   
Information that <a href="#def-Web-Content" class="termdef" title="definition: web content">web content</a> must contain in order to meet a [WCAG 2.0](#conf-rel-wcag) success criterion (Level A, AA or AAA). Examples include: <a href="#def-Associated-Alternative-Content" class="termdef" title="definition: alternative content">programmatically associated alternative content</a> (e.g. text alternatives for images), <a href="#def-Role" class="termdef" title="definition: role">role</a>, and state information for widgets, <a href="#def-Relationships" class="termdef" title="definition: relationships">relationships</a> within complex tables).  
*Note:* For the purposes of ATAG 2.0, only <a href="#def-Programmatically-Determined" class="termdef" title="definition: programmatically determined">programmatically determinable</a> accessibility information qualifies. For additional examples, see [Appendix A of the Implementing ATAG 2.0 document](http://www.w3.org/TR/2015/WD-IMPLEMENTING-ATAG20-20150721/#prompting-types).

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

<span id="references"></span>Appendix <span class="techs-only">G</span>: References
-----------------------------------------------------------------------------------

For the **latest version** of any W3C standards please consult the list of [W3C Technical Reports](http://www.w3.org/TR/) at http://www.w3.org/TR/. Some documents listed below may have been superseded since the publication of this document.

This section is <a href="#def-Normative" class="termdef" title="definition: normative">normative</a>

<span id="ref-ATAG20">\[ATAG20\]</span>  
"[Authoring Tool Accessibility Guidelines 2.0](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html),", J. Richards, J. Spellman, and J. Treviranus, eds. The latest version is available at http://www.w3.org/TR/ATAG20.

<span id="ref-UAAG10">\[UAAG10\]</span>  
"[User Agent Accessibility Guidelines 1.0](http://www.w3.org/TR/2002/REC-UAAG10-20021217/),", I. Jacobs, J. Gunderson, and E. Hansen, eds.17 December 2002.

<span id="ref-WCAG20"></span>\[WCAG20\]  
"[Web Content Accessibility Guidelines 2.0](http://www.w3.org/TR/2008/REC-WCAG20-20081211/) ", B. Caldwell, M. Cooper, L. Guarino Reid, and G. Vanderheiden, eds. 11 December 2008.

This section is <a href="#def-Informative" class="termdef" title="definition: informative">informative</a>.

<span id="ref-ATAG10">\[ATAG10\]</span>

"[Authoring Tool Accessibility Guidelines 1.0](http://www.w3.org/TR/2000/REC-ATAG10-20000203/)", J. Treviranus, C. McCathieNevile, I. Jacobs, and J. Richards, eds., 3 February 2000.

 

------------------------------------------------------------------------

<span id="acknowledgments"></span>Appendix <span class="techs-only">H</span>: Acknowledgments
---------------------------------------------------------------------------------------------

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

\[[Contents](#contents)\] \[[Guidelines](http://www.w3.org/TR/2015/REC-ATAG20-20150924/Overview.html)\]
