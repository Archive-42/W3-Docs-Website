\[[contents](#toc)\]   \[[tabular checklist](atag10-chktable.html)\]   \[[linear checklist](atag10-chklist.html)\]  

------------------------------------------------------------------------

[![W3C](http://www.w3.org/Icons/w3c_home)](http://www.w3.org/)

Authoring Tool Accessibility Guidelines 1.0
===========================================

W3C Recommendation 3 February 2000
----------------------------------

This version:  
<http://www.w3.org/TR/2000/REC-ATAG10-20000203>

([plain text](atag10.txt), [HTML gzip tar archive](atag10.tgz), [HTML zip archive](atag10.zip), [PostScript](atag10.ps), [PDF](atag10.pdf))

Latest version:  
<http://www.w3.org/TR/ATAG10>

Previous version:  
[http://www.w3.org/TR/1999/PR-WAI-AUTOOLS-19991026](http://www.w3.org/TR/1999/PR-WAI-AUTOOLS-19991026%20)

<!-- -->

Editors:  
Jutta Treviranus - ATRC, University of Toronto

Charles McCathieNevile - [W3C](http://www.w3.org/)

Ian Jacobs - [W3C](http://www.w3.org/)

Jan Richards - University of Toronto

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) ©2000 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.lcs.mit.edu/), [INRIA](http://www.inria.fr/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks), [document use](http://www.w3.org/Consortium/Legal/copyright-documents-19990405) and [software licensing](http://www.w3.org/Consortium/Legal/copyright-software-19980720) rules apply.

------------------------------------------------------------------------

<span id="abstract">Abstract</span>
-----------------------------------

This specification provides guidelines for Web authoring tool developers. Its purpose is two-fold: to assist developers in designing authoring tools that produce accessible Web content and to assist developers in creating an accessible authoring interface.

Authoring tools can enable, encourage, and assist users ("authors") in the creation of accessible Web content through prompts, alerts, checking and repair functions, help files and automated tools. It is just as important that all people be able to author content as it is for all people to have access to it. The tools used to create this information must therefore be accessible themselves. Adoption of these guidelines will contribute to the proliferation of Web content that can be read by a broader range of readers and authoring tools that can be used by a broader range of authors.

This document is part of a series of accessibility documents published by the W3C [Web Accessibility Initiative](http://www.w3.org/WAI/) (WAI).

<span id="status">Status of this document</span>
------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. The latest status of this document series is maintained at the W3C.*

This document has been reviewed by W3C Members and other interested parties and has been endorsed by the Director as a [W3C Recommendation](http://www.w3.org/Consortium/Process/#RecsW3C). It is a stable document and may be used as reference material or cited as a normative reference from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

A [log of changes between successive Working Drafts](http://www.w3.org/WAI/AU/changes.html) is available.

For further information about Working Group decisions, please consult the [minutes of AUWG Meetings](http://www.w3.org/WAI/AU/#Minutes).

This document has been produced by the [Authoring Tool Accessibility Guidelines Working Group (AUWG)](http://www.w3.org/WAI/AU/) as part of the [Web Accessibility Initiative (WAI)](http://www.w3.org/WAI). The goals of the Working Group are discussed in the [AUWG charter](http://www.w3.org/WAI/AU/charter.html).

Please send general comments about this document to the public mailing list: <w3c-wai-au@w3.org> ([public archives](http://lists.w3.org/Archives/Public/w3c-wai-au)).

The English version of this specification is the only normative version. Information about translations of this document is available at <http://www.w3.org/WAI/AU/ATAG-TRANSLATIONS>.

The list of known errors in this document is available at <http://www.w3.org/WAI/AU/ATAG-ERRATA>. Please report errors in this document to <wai-atag-editor@w3.org>.

A list of current W3C Recommendations and other technical documents including Working Drafts and Notes can be found at <http://www.w3.org/TR>.

<span id="toc">Table of Contents</span>
---------------------------------------

-   <a href="#abstract" class="tocxref">Abstract</a>
-   <a href="#status" class="tocxref">Status of this document</a>
-   <a href="#Introduction" class="tocxref">1. Introduction</a>
    -   <a href="#organized" class="tocxref">1.1 How the Guidelines are organized</a>
    -   <a href="#priorities" class="tocxref">1.2 Checkpoint Priorities</a>
    -   <a href="#conformance" class="tocxref">1.3 Conformance to these Guidelines</a>
-   <a href="#guidelines" class="tocxref">2. Guidelines</a>
    -   <a href="#gl-access-support" class="tocxref">1. Support accessible authoring practices.</a>
    -   <a href="#gl-language-support" class="tocxref">2. Generate standard markup.</a>
    -   <a href="#gl-prewritten-descs" class="tocxref">3. Support the creation of accessible content.</a>
    -   <a href="#gl-identify-markup" class="tocxref">4. Provide ways of checking and correcting inaccessible content.</a>
    -   <a href="#gl-integrate-naturally" class="tocxref">5. Integrate accessibility solutions into the overall "look and feel".</a>
    -   <a href="#gl-provide-help" class="tocxref">6. Promote accessibility in help and documentation.</a>
    -   <a href="#gl-make-accessible" class="tocxref">7. Ensure that the authoring tool is accessible to authors with disabilities.</a>
-   <a href="#definitions" class="tocxref">3. Glossary of Terms and Definitions</a>
-   <a href="#acknowledgments" class="tocxref">4. Acknowledgments</a>
-   <a href="#references" class="tocxref">5. References</a>

An appendix to this document [\[ATAG10-CHECKLIST\]](#ref-ATAG10-CHECKLIST "Link to 
reference ATAG10-CHECKLIST") lists all checkpoints for convenient reference.

------------------------------------------------------------------------

1. <span id="Introduction">Introduction</span>
----------------------------------------------

In these guidelines, the term "[<span class="dfn-instance">authoring tool</span>](#def-authoring-tool "Definition of Authoring Tool")" refers to the wide range of software used for creating Web content, including:

-   Editing tools specifically designed to produce Web content (e.g., WYSIWYG HTML and XML editors);
-   Tools that offer the option of saving material in a Web format (e.g., word processors or desktop publishing packages);
-   Tools that transform documents into Web formats (e.g., filters to transform desktop publishing formats to HTML);
-   Tools that produce multimedia, especially where it is intended for use on the Web (e.g., video production and editing suites, SMIL authoring packages);
-   Tools for site management or site publication, including tools that automatically generate Web sites dynamically from a database, on-the-fly conversion tools, and Web site publishing tools;
-   Tools for management of layout (e.g., CSS formatting tools).

The goals of this document can be stated as follows: that the authoring tool be accessible to authors regardless of disability, that it produce accessible content by default, and that it support and encourage the author in creating accessible content. Because most of the content of the Web is created using authoring tools, they play a critical role in ensuring the [<span class="dfn-instance">accessibility</span>](#def-Accessibility "Definition of Accessibility") of the Web. Since the Web is both a means of receiving information and communicating information, it is important that both the Web content produced and the authoring tool itself be accessible.

To achieve these goals, authoring tool developers must take steps such as ensuring conformance to accessible standards (e.g., HTML 4), checking and correcting accessibility problems, prompting, and providing appropriate documentation and help. For detailed information about what constitutes accessible content, these guidelines rely on the Web Content Accessibility Guidelines 1.0 [\[WCAG10\]](#ref-WCAG10 "Link to reference WCAG10"). Similarly, rather than directly reproducing existing specifications that address general accessible software design, these guidelines rely on other sources. The present guidelines do address accessible design considerations specific to Web authoring tools such as providing flexible editing views, navigation aids and access to display properties for authors.

The principles set forth in these guidelines will benefit many people who do not have a disability but who have similar needs. This includes people who work in noisy or quiet environments where the use of sound is not practical, people who need to use their eyes for another task and are unable to view a screen, and people who use small mobile devices that have a small screen, no keyboard, and no mouse.

A separate document, entitled "Techniques for Authoring Tool Accessibility Guidelines 1.0" [\[ATAG10-TECHS\]](#ref-ATAG10-TECHS "Link to reference ATAG10-TECHS"), provides suggestions and examples of how each checkpoint might be satisfied. It also includes references to other accessibility resources (such as platform-specific software accessibility guidelines) that provide additional information on how a tool may satisfy each checkpoint. Readers are strongly encouraged to become familiar with the Techniques Document as well as "Techniques for Web Content Accessibility Guidelines 1.0" [\[WCAG10-TECHS\]](#ref-WCAG10-TECHS "Link to 
reference WCAG10-TECHS") and "Techniques for User Agent Accessibility Guidelines 1.0" [\[UAAG10-TECHS\]](#ref-UAAG10-TECHS "Link to 
reference UAAG10-TECHS").

**Note:** The techniques in [\[ATAG10-TECHS\]](#ref-ATAG10-TECHS "Link to reference ATAG10-TECHS") are informative examples only. Other strategies may be used to satisfy the checkpoints in addition to, or in place of, those discussed in [\[ATAG10-TECHS\]](#ref-ATAG10-TECHS "Link to 
reference ATAG10-TECHS").

**Note:** Authoring tools that conform to this document will propagate accessible Web content and be useful to anyone regardless of disability. There will also be authoring tools that produce accessible content in favorable circumstances (e.g., a text editor used by a motivated author), or provide an accessible interface to authors with certain disabilities, but that do not conform to these guidelines.

### 1.1 <span id="organized">How the Guidelines are organized</span>

The seven guidelines in this document are general principles for accessible design. Each guideline includes:

-   The guideline number;
-   The statement of the guideline;
-   The rationale behind the guideline;
-   A list of checkpoint definitions.

The checkpoint definitions in each guideline specify requirements for authoring tools to follow the guideline. Each checkpoint definition includes:

-   The checkpoint number;
-   The statement of the checkpoint;
-   The priority of the checkpoint;
-   In some cases informative notes, clarifying examples, or cross references to related guidelines or checkpoints;
-   A link to a section of "Techniques for Authoring Tool Accessibility Guidelines 1.0" [\[ATAG10-TECHS\]](#ref-ATAG10-TECHS "Link to reference ATAG10-TECHS") where implementations and examples of the checkpoint are discussed.

Each checkpoint is intended to be specific enough that it can be verified, while being sufficiently general to allow developers the freedom to use the most appropriate strategies to satisfy it.

An appendix to this specification [\[ATAG10-CHECKLIST\]](#ref-ATAG10-CHECKLIST "Link to reference ATAG10-CHECKLIST") lists all checkpoints for convenient reference.

### 1.2 <span id="priorities">Checkpoint Priorities</span>

Each checkpoint has a priority level. The priority level reflects the impact of the checkpoint in meeting the goals of this specification. These goals are:

-   That the authoring tool be accessible;
-   That the authoring tool produce accessible content by default;
-   That the authoring tool encourage the creation of accessible content.

The priority levels are assigned as follows:

<span id="priority-1">\[Priority 1\]</span>  
If the checkpoint is essential to meeting the goals.

<span id="priority-2">\[Priority 2\]</span>  
If the checkpoint is important to meeting the goals.

\[<span id="priority-3">Priority 3\]</span>  
If the checkpoint is beneficial to meeting the goals.

<span id="priority-rel">\[Relative Priority\]</span>  
Some checkpoints that refer to generating, authoring, or checking Web content have multiple priorities. The priority depends on the corresponding priority in the Web Content Accessibility Guidelines (WCAG) 1.0 [\[WCAG10\]](#ref-WCAG10 "Link to 
reference WCAG10").

-   It is priority 1 to satisfy the checkpoint for content features that are a priority 1 requirement in WCAG 1.0.
-   It is priority 2 to satisfy the checkpoint for content features that are a priority 2 requirement in WCAG 1.0.
-   It is priority 3 to satisfy the checkpoint for content features that are a priority 3 requirement in WCAG 1.0.

For example:

-   Providing [<span class="dfn-instance">text equivalents</span>](#def-alt-eq "Definition of 
    Alternative Information") for images and audio is a priority 1 requirement in WCAG 1.0 since without it one or more groups will find it impossible to access the information. Therefore, it is a priority 1 requirement for the authoring tool to check for (<a href="#check-notify-on-schedule" class="noxref">4.1</a>) or ask the author for (<a href="#check-provide-missing-alt" class="noxref">3.1</a>) equivalent alternatives for these types of content.
-   Grouping links in navigation bars is a priority 3 in WCAG 1.0. Therefore, it is only priority 3 for the authoring tool to check for (<a href="#check-notify-on-schedule" class="noxref">4.1</a>) or ask the author for (<a href="#check-help-provide-structure" class="noxref">3.2</a>) groups of links that are not grouped in the markup as a navigation mechanism.

When a checkpoint in this document refers to the WCAG 1.0 [\[WCAG10\]](#ref-WCAG10 "Link to 
reference WCAG10"), only the WCAG 1.0 checkpoints that refer to content supported or automatically generated by the authoring tool apply. Some of the applicable WCAG 1.0 checkpoints may be satisfied automatically (without author participation) while others require human judgment and support from the tool in the form of prompts and documentation. Different tools may satisfy the same checkpoint differently.

The priority level for each checkpoint has been chosen based on the assumption that the author is a competent, but not necessarily expert, user of the authoring tool, and that the author has little or no knowledge of accessibility. For example, the author is not expected to have read all of the documentation, but is expected to know how to turn to the documentation for assistance.

### 1.3 <span id="conformance">Conformance to these Guidelines</span>

This section explains how to make a [valid claim](#claim-validation) that an authoring tool conforms to this document. Anyone may make a claim (e.g., vendors about their own products, third parties about those products, journalists about products, etc.). Claims may be published anywhere (e.g., on the Web or in product documentation).

Claimants are solely responsible for their claims and the use of the [conformance icons](#conformance-icons). If the subject of the claim (i.e., the software) changes after the date of the claim, the claimant is responsible for updating the claim. Claimants are encouraged to conform to the most recent guidelines available.

Details about the [conformance icons](#conformance-icons) are provided on the Web (refer to [\[CONFORMANCE\]](#ref-CONFORMANCE "Link to 
reference CONFORMANCE")).

#### <span id="conformance-levels">Conformance levels</span>

A conformance claim must indicate what conformance level is met:

-   **Conformance Level "A"**: all Priority 1 checkpoints (including Relative Priority checkpoints) are satisfied.
-   **Conformance Level "Double-A"**: all Priority 1 and 2 checkpoints (including Relative Priority checkpoints) are satisfied.
-   **Conformance Level "Triple-A"**: all Priority 1, 2, and 3 checkpoints (including Relative Priority checkpoints) are satisfied.

**Note:** Conformance levels are spelled out in text (e.g., "Double-A" rather than "AA") so they may be understood when rendered as speech.

#### <span id="well-formed-claim">Well-formed conformance claims</span>

A well-formed claim must include the following information:

1.  The guidelines title/version: "Authoring Tool Accessibility Guidelines 1.0";
2.  The URI of the guidelines: http://www.w3.org/TR/2000/REC-ATAG10-20000203;
3.  The [conformance level](#conformance-levels) satisfied: "A", "Double-A", or "Triple-A";
4.  The version number and operating system of the software covered by the claim. Also indicate whether any upgrades or plug-ins are required;
5.  The date of the claim;
6.  The checkpoints of the chosen conformance level considered not applicable. Claimants should use the checklist [\[ATAG10-CHECKLIST\]](#ref-ATAG10-CHECKLIST "Link 
    to reference ATAG10-CHECKLIST") for this purpose.

This information may be provided in text or metadata markup (e.g., using the Resource Description Framework (RDF) [\[RDF10\]](#ref-RDF10 "Link to reference RDF10") and an RDF schema designed for WAI conformance claims). All content in the claim must be accessible according to the Web Content Accessibility Guidelines 1.0 [\[WCAG10\]](#ref-WCAG10 "Link to reference WCAG10").

Here is an example of a claim expressed in HTML:

> &lt;p&gt;MyAuthoringTool version 2.3 on MyOperatingSystem conforms to &lt;abbr title="the World Wide Web Consortium"&gt;W3C&lt;/abbr&gt;'s "Authoring Tool Accessibility Guidelines 1.0", available at http://www.w3.org/TR/2000/REC-ATAG10-20000203, level Double-A. Details of this claim are provided at &lt;a href="http://somewhere.com/details"&gt; http://somewhere.com/details&lt;/a&gt;.&lt;/p&gt;

#### <span id="claim-validation">Validity of a claim</span>

A conformance claim is valid for a given [conformance level](#conformance-levels) if:

1.  The claim is [well-formed](#well-formed-claim), and
2.  The authoring tool satisfies all the checkpoints for that level.

Claimants (or relevant assuring parties) are responsible for the validity of a claim. As of the publication of this document, W3C does not act as an assuring party, but it may do so in the future, or establish recommendations for assuring parties.

Claimants are expected to modify or retract a claim if it may be demonstrated that the claim is not valid. Please note that it is not currently possible to validate claims completely automatically.

#### <span id="conformance-icons">Conformance Icons</span>

As part of a conformance claim, people may use a conformance icon on a Web site, on product packaging, in documentation, etc. Each conformance icon (chosen according to the appropriate [conformance level](#conformance-levels)) must link to the W3C explanation of the icon. The appearance of a conformance icon does not imply that W3C has reviewed or validated the claim. An icon must be accompanied by a [well-formed claim](#well-formed-claim).

2. <span id="guidelines">Guidelines</span>
------------------------------------------

### Guideline 1. <span id="gl-access-support">Support accessible authoring practices.</span>

If the tool automatically generates markup, many authors will be unaware of the accessibility status of the final content unless they expend extra effort to review it and make appropriate corrections by hand. Since many authors are unfamiliar with accessibility, authoring tools are responsible for automatically generating accessible markup, and where appropriate, for guiding the author in producing accessible content.

Many applications feature the ability to convert [<span class="dfn-instance"> documents</span>](#def-document "Definition of Document") from other formats (e.g., Rich Text Format) into a markup format specifically intended for the Web such as HTML. Markup changes may also be made to facilitate efficient editing and manipulation. It is essential that these processes do not introduce [<span class="dfn-instance">inaccessible markup</span>](#def-inaccessible-markup "Definition of Inaccessible Markup") or remove accessibility content, particularly when a tool hides the markup changes from the author's view.

#### Checkpoints:

<span class="checkpoint"><span id="check-support-access-features">1.1</span></span> Ensure that the author can produce [accessible content](atag10.html#def-Accessible) in the [markup language(s)](atag10.html#def-Markup-Language) supported by the tool. <span class="priority1">\[Priority 1\]</span>  
<span class="noprint">[Techniques for checkpoint 1.1](http://www.w3.org/TR/ATAG10-TECHS/#check-support-access-features)</span>

<span class="checkpoint"><span id="check-leave-access-content">1.2</span></span> Ensure that the tool preserves all [accessibility information](atag10.html#def-Access-info) during authoring, [transformations](atag10.html#def-Transformation), and [conversions](atag10.html#def-conversion-tool). <span class="priority1">\[Priority 1\]</span>  
<span class="noprint">[Techniques for checkpoint 1.2](http://www.w3.org/TR/ATAG10-TECHS/#check-leave-access-content)</span>

<span class="checkpoint"><span id="check-generate-access-markup">1.3</span></span> Ensure that when the tool automatically generates markup it conforms to the W3C's Web Content Accessibility Guidelines 1.0 [\[WCAG10\]](#ref-WCAG10 "Link to reference WCAG10"). <span class="priorityR">\[Relative Priority\]</span>  
<span class="noprint">[Techniques for checkpoint 1.3](http://www.w3.org/TR/ATAG10-TECHS/#check-generate-access-markup)</span>

<span class="checkpoint"><span id="check-use-accessible-templates">1.4</span></span> Ensure that templates provided by the tool conform to the Web Content Accessibility Guidelines 1.0 [\[WCAG10\]](#ref-WCAG10 "Link to reference WCAG10"). <span class="priorityR">\[Relative Priority\]</span>  
<span class="noprint">[Techniques for checkpoint 1.4](http://www.w3.org/TR/ATAG10-TECHS/#check-use-accessible-templates)</span>

### Guideline 2. <span id="gl-language-support">Generate standard markup.</span>

Conformance with standards promotes interoperability and accessibility by making it easier to create specialized [<span class="dfn-instance">user agents</span>](#def-User-Agent "Definition of User Agent") that address the needs of users with disabilities. In particular, many assistive technologies used with browsers and multimedia players are only able to provide access to Web [<span class="dfn-instance"> documents</span>](#def-document "Definition of Document") that use valid markup. Therefore, valid markup is an essential aspect of authoring tool accessibility.

Where applicable use W3C Recommendations, which have been reviewed to ensure accessibility and interoperability. If there are no applicable W3C Recommendations, use a published standard that enables accessibility.

#### Checkpoints:

<span class="checkpoint"> <span id="check-prefer-w3c">2.1</span></span> Use the latest versions of W3C Recommendations when they are available and appropriate for a task. <span class="priority2">\[Priority 2\]</span>  
W3C specifications have undergone review specifically to ensure that they do not compromise accessibility, and where possible, they enhance it.

<span class="noprint">[Techniques for checkpoint 2.1](http://www.w3.org/TR/ATAG10-TECHS/#check-prefer-w3c)</span>

<span class="checkpoint"><span id="check-ensure-published-DTD">2.2</span></span> Ensure that the tool automatically generates valid markup. <span class="priority1">\[Priority 1\]</span>  
This is necessary for [<span class="dfn-instance">user agents</span>](#def-User-Agent "Definition of User Agent") to be able to render Web content in a manner appropriate to a particular user's needs.

<span class="noprint">[Techniques for checkpoint 2.2](http://www.w3.org/TR/ATAG10-TECHS/#check-ensure-published-DTD)</span>

<span class="checkpoint"><span id="check-declare-extended-DTD">2.3</span></span> If markup produced by the tool does not conform to W3C specifications, [inform](atag10.html#def-inform) the author. <span class="priority3">\[Priority 3\]</span>  
<span class="noprint">[Techniques for checkpoint 2.3](http://www.w3.org/TR/ATAG10-TECHS/#check-declare-extended-DTD)</span>

### Guideline 3. <span id="gl-prewritten-descs">Support the creation of accessible content.</span>

Well-structured information and [<span class="dfn-instance">equivalent alternative information</span>](#def-alt-eq "Definition of Alternative Information") are cornerstones of accessible design, allowing information to be presented in a way most appropriate for the needs of the user without constraining the creativity of the author. Yet producing equivalent information, such as text alternatives for images and auditory descriptions of video, can be one of the most challenging aspects of Web design, and authoring tool developers should attempt to facilitate and automate the mechanics of this process. For example, prompting authors to include equivalent alternative information such as [<span class="dfn-instance">text equivalents</span>](#def-alt-eq "Definition of Alternative Information"), [<span class="dfn-instance">captions</span>](#def-video-captions "Definition of Captions"), and [<span class="dfn-instance">auditory descriptions</span>](#def-Auditory "Definition of Auditory Description") at appropriate times can greatly ease the burden for authors. Where such information can be mechanically determined and offered as a choice for the author (e.g., the function of icons in an automatically-generated navigation bar, or expansion of acronyms from a dictionary), the tool can assist the author. At the same time, the tool can reinforce the need for such information and the author's role in ensuring that it is used appropriately in each instance.

#### Checkpoints:

<span class="checkpoint"><span id="check-provide-missing-alt">3.1</span></span> [Prompt](atag10.html#def-prompt) the author to provide [equivalent alternative information](atag10.html#def-alt-eq) (e.g., [captions](atag10.html#def-video-captions), [auditory descriptions](atag10.html#def-Auditory), and [collated text transcripts](atag10.html#def-transcript) for video). <span class="priorityR">\[Relative Priority\]</span>  
**Note:** Some checkpoints in the Web Content Accessibility Guidelines 1.0 [\[WCAG10\]](#ref-WCAG10 "Link to reference WCAG10") may not apply.

<span class="noprint">[Techniques for checkpoint 3.1](http://www.w3.org/TR/ATAG10-TECHS/#check-provide-missing-alt)</span>

<span class="checkpoint"><span id="check-help-provide-structure">3.2</span></span> Help the author create structured content and separate information from its presentation. <span class="priorityR">\[Relative Priority\]</span>  
**Note:** Some checkpoints in Web Content Accessibility Guidelines 1.0 [\[WCAG10\]](#ref-WCAG10 "Link to reference 
WCAG10") may not apply.

<span class="noprint">[Techniques for checkpoint 3.2](http://www.w3.org/TR/ATAG10-TECHS/#check-help-provide-structure)</span>

<span class="checkpoint"><span id="check-include-pro-descs">3.3</span></span> Ensure that prepackaged content conforms to the Web Content Accessibility Guidelines 1.0 [\[WCAG10\]](#ref-WCAG10 "Link to reference WCAG10"). <span class="priorityR"> \[Relative Priority\]</span>  
For example, include [<span class="dfn-instance">captions</span>](#def-video-captions "Definition of Captions"), an [<span class="dfn-instance">auditory description</span>](#def-Auditory "Definition of Auditory Description"), and a [<span class="dfn-instance">collated text transcript</span>](#def-transcript "Definition of Transcript") with prepackaged movies. <a href="#check-no-default-alt" class="noxref">Refer also to checkpoint 3.4</a>.

<span class="noprint">[Techniques for checkpoint 3.3](http://www.w3.org/TR/ATAG10-TECHS/#check-include-pro-descs)</span>

<span class="checkpoint"> <span id="check-no-default-alt">3.4</span></span> Do not automatically generate [equivalent alternatives](atag10.html#def-alt-eq). Do not reuse previously authored alternatives without author confirmation, except when the function is known with certainty. <span class="priority1"> \[Priority 1\]</span>  
For example, [<span class="dfn-instance">prompt</span>](#def-prompt "Definition of Prompt") the author for a [<span class="dfn-instance">text equivalent</span>](#def-alt-eq "Definition of Alternative 
Information") of an image. If the author has already provided a text equivalent for the same image used in another document, offer to reuse that text and prompt the author for confirmation. If the tool automatically generates a "Search" icon, it would be appropriate to automatically reuse the previously authored text equivalent for that icon. Refer also to <a href="#check-include-pro-descs" class="noxref">checkpoint 3.3</a> and <a href="#check-have-alt-registry" class="noxref">checkpoint 3.5</a>.

**Note:** Human-authored equivalent alternatives may be available for an object (for example, through <a href="#check-have-alt-registry" class="noxref">checkpoint 3.5</a> and/or <a href="#check-include-pro-descs" class="noxref">checkpoint 3.3</a>). It is appropriate for the tool to offer these to the author as defaults.

<span class="noprint">[Techniques for checkpoint 3.4](http://www.w3.org/TR/ATAG10-TECHS/#check-no-default-alt)</span>

<span class="checkpoint"><span id="check-have-alt-registry">3.5</span></span> Provide functionality for managing, editing, and reusing [alternative equivalents](atag10.html#def-alt-eq) for multimedia objects. <span class="priority3"> \[Priority 3\]</span>  
**Note:** These alternative equivalents may be packaged with the tool, written by the author, retrieved from the Web, etc.

<span class="noprint">[Techniques for checkpoint 3.5](http://www.w3.org/TR/ATAG10-TECHS/#check-have-alt-registry)</span>

### Guideline 4. <span id="gl-identify-markup">Provide ways of checking and correcting inaccessible content.</span>

Many authoring tools allow authors to create documents with little or no knowledge about the underlying markup. To ensure accessibility, authoring tools must be designed so that they can (where possible, automatically) identify [<span class="dfn-instance">inaccessible markup</span>](#def-inaccessible-markup "Definition of 
Inaccessible Markup"), and enable its correction even when the markup itself is hidden from the author.

Authoring tool support for the creation of accessible Web content should account for different authoring styles. Authors who can configure the tool's accessibility features to support their regular work patterns are more likely to accept accessible authoring practices (refer to [guideline 5](http://www.w3.org/TR/ATAG10#gl-integrate-naturally)). For example, some authors may prefer to be alerted to [<span class="dfn-instance">accessibility problems</span>](#def-accessibility-problem "Definition of Accessibility Problem") when they occur, whereas others may prefer to perform a check at the end of an editing session. This is analogous to programming environments that allow users to decide whether to check for correct code during editing or at compilation.

**Note:** Validation of markup is an essential aspect of checking the accessibility of content.

#### Checkpoints:

<span class="checkpoint"><span id="check-notify-on-schedule">4.1</span></span> [Check for](atag10.html#def-check-for) and [inform](atag10.html#def-inform) the author of [accessibility problems](atag10.html#def-accessibility-problem). <span class="priorityR">\[Relative Priority\]</span>  
**Note:** Accessibility problems should be detected automatically where possible. Where this is not possible, the tool may need to [<span class="dfn-instance">prompt</span>](#def-prompt "Definition of Prompt") the author to make decisions or to manually check for certain types of problems.

<span class="noprint">[Techniques for checkpoint 4.1](http://www.w3.org/TR/ATAG10-TECHS/#check-notify-on-schedule)</span>

<span class="checkpoint"><span id="check-dont-require-knowledge">4.2</span></span> Assist authors in correcting [accessibility problems](atag10.html#def-accessibility-problem). <span class="priorityR">\[Relative Priority\]</span>  
At a minimum, provide context-sensitive help with the accessibility checking required by <a href="#check-notify-on-schedule" class="noxref">checkpoint 4.1</a>

<span class="noprint">[Techniques for checkpoint 4.2](http://www.w3.org/TR/ATAG10-TECHS/#check-dont-require-knowledge)</span>

<span class="checkpoint"> <span id="check-notify-changes">4.3</span></span> Allow the author to preserve markup not recognized by the tool. <span class="priority2">\[Priority 2\]</span>  
**Note:** The author may have included or imported markup that enhances accessibility but is not recognized by the tool.

<span class="noprint">[Techniques for checkpoint 4.3](http://www.w3.org/TR/ATAG10-TECHS/#check-notify-changes)</span>

<span class="checkpoint"><span id="check-progress-feedback">4.4</span></span> Provide the author with a summary of the document's accessibility status. <span class="priority3"> \[Priority 3\]</span>  
<span class="noprint">[Techniques for checkpoint 4.4](http://www.w3.org/TR/ATAG10-TECHS/#check-progress-feedback)</span>

<span class="checkpoint"><span id="check-allow-transformation">4.5</span></span> Allow the author to transform [presentation markup](atag10.html#def-presentation-markup) that is misused to convey structure into [structural markup](atag10.html#def-structural-markup), and to transform presentation markup used for style into style sheets. <span class="priority3">\[Priority 3\]</span>  
<span class="noprint">[Techniques for checkpoint 4.5](http://www.w3.org/TR/ATAG10-TECHS/#check-allow-transformation)</span>

### Guideline 5. <span id="gl-integrate-naturally">Integrate accessibility solutions into the overall "look and feel".</span>

When a new feature is added to an existing software tool without proper integration, the result is often an obvious discontinuity. Differing color schemes, fonts, interaction styles, and even software stability can be factors affecting author acceptance of the new feature. In addition, the relative prominence of different ways to accomplish the same task can influence which one the author chooses. Therefore, it is important that creating accessible content be a natural process when using an authoring tool.

#### Checkpoints:

<span class="checkpoint"><span id="check-integrate-features">5.1</span></span> Ensure that functionality related to [accessible authoring practices](atag10.html#def-accessible-au-practice) is naturally integrated into the overall look and feel of the tool. <span class="priority2">\[Priority 2\]</span>  
<span class="noprint">[Techniques for checkpoint 5.1](http://www.w3.org/TR/ATAG10-TECHS/#check-integrate-features)</span>

<span class="checkpoint"> <span id="check-visible-means">5.2</span></span> Ensure that [accessible authoring practices](atag10.html#def-accessible-au-practice) supporting Web Content Accessibility Guidelines 1.0 [\[WCAG10\]](#ref-WCAG10 "Link to reference WCAG10") Priority 1 checkpoints are among the most obvious and easily initiated by the author. <span class="priority2">\[Priority 2\]</span>  
<span class="noprint">[Techniques for checkpoint 5.2](http://www.w3.org/TR/ATAG10-TECHS/#check-visible-means)</span>

### Guideline 6. <span id="gl-provide-help">Promote accessibility in help and documentation.</span>

Web authors may not be familiar with accessibility issues that arise when creating Web content. Therefore, help and documentation must include explanations of [<span class="dfn-instance">accessibility problems</span>](#def-accessibility-problem "Definition of Accessibility Problem"), and should demonstrate solutions with examples.

#### Checkpoints:

<span class="checkpoint"><span id="check-document-features">6.1</span></span> Document all features that promote the production of accessible content. <span class="priority1"> \[Priority 1\]</span>  
<span class="noprint">[Techniques for checkpoint 6.1](http://www.w3.org/TR/ATAG10-TECHS/#check-document-features)</span>

<span class="checkpoint"><span id="check-accessibility-everywhere">6.2</span></span> Ensure that creating accessible content is a naturally integrated part of the documentation, including examples. <span class="priority2">\[Priority 2\]</span>  
<span class="noprint">[Techniques for checkpoint 6.2](http://www.w3.org/TR/ATAG10-TECHS/#check-accessibility-everywhere)</span>

<span class="checkpoint"><span id="check-emphasize-universal-benefit">6.3</span></span> In a dedicated section, document all features of the tool that promote the production of accessible content. <span class="priority3">\[Priority 3\]</span>  
<span class="noprint"> [Techniques for checkpoint 6.3](http://www.w3.org/TR/ATAG10-TECHS/#check-emphasize-universal-benefit)</span>

### Guideline 7. <span id="gl-make-accessible">Ensure that the authoring tool is accessible to authors with disabilities.</span>

The authoring tool is a software program with standard user interface elements and as such must be designed according to relevant user interface accessibility guidelines. When custom interface components are created, it is essential that they be accessible through the standard access mechanisms for the relevant platform so that assistive technologies can be used with them.

Some additional user interface design considerations apply specifically to [<span class="dfn-instance">Web authoring tools.</span>](#def-authoring-tool "Definition of Authoring
Tool") For instance, authoring tools must ensure that the author can edit (in an [<span class="dfn-instance">editing view</span>](#def-Editing "Definition of Editing View")) using one set of stylistic preferences and publish using different styles. Authors with low vision may need large text when editing but want to publish with a smaller default text size. The style preferences of the editing view must not affect the markup of the published document.

Authoring tools must also ensure that the author can navigate a document efficiently while editing, regardless of disability. Authors who use screen readers, refreshable braille displays, or screen magnifiers can make limited use (if at all) of graphical artifacts that communicate the structure of the document and act as signposts when traversing it. Authors who cannot use a mouse (e.g., people with physical disabilities or who are blind) must use the slow and tiring process of moving one step at a time through the document to access the desired content, unless more efficient navigation methods are available. Authoring tools should therefore provide an [<span class="dfn-instance"> editing view</span>](#def-Editing "Definition of Editing View") that conveys a sense of the overall structure and allows structured navigation.

**Note:** Documentation, help files, and installation are part of the software and need to be available in an [<span class="dfn-instance"> accessible</span>](#def-Accessible "Definition of Accessible") form.

#### Checkpoints:

<span class="checkpoint"><span id="check-use-system-conventions">7.1</span></span> Use all applicable operating system and accessibility standards and conventions (Priority 1 for standards and conventions that are essential to accessibility; Priority 2 for those that are important to accessibility; Priority 3 for those that are beneficial to accessibility).  
The techniques for this checkpoint include references to checklists and guidelines for a number of platforms and to general guidelines for [<span class="dfn-instance">accessible</span>](#def-Accessible "Definition of Accessible") applications.

<span class="noprint">[Techniques for checkpoint 7.1](http://www.w3.org/TR/ATAG10-TECHS/#check-use-system-conventions)</span>

<span class="checkpoint"><span id="check-independent-styles">7.2</span></span> Allow the author to change the presentation within [editing views](atag10.html#def-Editing) without affecting the document markup. <span class="priority1"> \[Priority 1\]</span>  
This allows the author to edit the document according to personal requirements, without changing the way the document is rendered when published.

<span class="noprint">[Techniques for checkpoint 7.2](http://www.w3.org/TR/ATAG10-TECHS/#check-independent-styles)</span>

<span class="checkpoint"> <span id="check-edit-elements">7.3</span></span> Allow the author to edit all [properties](atag10.html#def-Property) of each [element](atag10.html#def-element) and object in an accessible fashion. <span class="priority1">\[Priority 1\]</span>  
<span class="noprint">[Techniques for checkpoint 7.3](http://www.w3.org/TR/ATAG10-TECHS/#check-edit-elements)</span>

<span class="checkpoint"><span id="check-navigation-access">7.4</span></span> Ensure that the [editing view](atag10.html#def-Editing) allows navigation via the structure of the document in an accessible fashion. <span class="priority1"> \[Priority 1\]</span>  
<span class="noprint">[Techniques for checkpoint 7.4](http://www.w3.org/TR/ATAG10-TECHS/#check-navigation-access)</span>

<span class="checkpoint"> <span id="check-edit-structure">7.5</span></span> Enable editing of the structure of the document in an accessible fashion. <span class="priority2">\[Priority 2\]</span>  
<span class="noprint">[Techniques for checkpoint 7.5](http://www.w3.org/TR/ATAG10-TECHS/#check-edit-structure)</span>

<span class="checkpoint"> <span id="check-have-search">7.6</span></span> Allow the author to search within [editing views](atag10.html#def-Editing). <span class="priority2"> \[Priority 2\]</span>  
<span class="noprint">[Techniques for checkpoint 7.6](http://www.w3.org/TR/ATAG10-TECHS/#check-have-search)</span>

3. <span id="definitions">Glossary of Terms and Definitions</span>
------------------------------------------------------------------

<span id="def-Accessibility">**Accessibility**</span> (Also: <span id="def-Accessible">**Accessible**</span>)  
Within these guidelines, "accessible Web content" and "accessible authoring tool" mean that the content and tool can be used by people regardless of disability.

To understand the accessibility issues relevant to authoring tool design, consider that many authors may be creating content in contexts very different from your own:

-   They may not be able to see, hear, move, or may not be able to process some types of information easily or at all;
-   They may have difficulty reading or comprehending text;
-   They may not have or be able to use a keyboard or mouse;
-   They may have a text-only display, or a small screen.

Accessible design will benefit people in these different authoring scenarios and also many people who do not have a physical disability but who have similar needs. For example, someone may be working in a noisy environment and thus require an alternative representation of audio information. Similarly, someone may be working in an eyes-busy environment and thus require an audio equivalent to information they cannot view. Users of small mobile devices (with small screens, no keyboard, and no mouse) have similar functional needs as some users with disabilities.

<span id="def-Access-info">**Accessibility Information**</span>  
"Accessibility information" is content, including information and markup, that is used to improve the accessibility of a document. Accessibility information includes, but is not limited to, [<span class="dfn-instance">equivalent alternative information</span>](#def-alt-eq "Definition of Alternative Information").

<span id="def-accessibility-problem">**Accessibility Problem**</span> (Also: <span id="def-inaccessible-markup">**Inaccessible Markup**</span>)  
Inaccessible Web content or authoring tools cannot be used by some people with disabilities. The Web Content Accessibility Guidelines 1.0 [\[WCAG10\]](#ref-WCAG10 "Link to reference WCAG10") describes how to create accessible Web content.

<span id="def-accessible-au-practice">**Accessible Authoring Practice**</span>  
"Accessible authoring practices" improve the accessibility of Web content. Both authors and tools engage in accessible authoring practices. For example, authors write clearly, structure their content, and provide navigation aids. Tools automatically generate valid markup and assist authors in providing and managing appropriate equivalent alternatives.

<span id="def-alert">**Alert**</span>  
An "alert" draws the author's attention to an event or situation. It may require a response from the author.

<span id="def-alt-eq">**Alternative Information**</span> (Also: <span id="def-equivalent-alternative">**Equivalent Alternative**</span>)  
Content is "equivalent" to other content when both fulfill essentially the same function or purpose upon presentation to the user. Equivalent alternatives play an important role in accessible authoring practices since certain types of content may not be accessible to all users (e.g., video, images, audio, etc.). Authors are encouraged to provide text equivalents for non-text content since text may be rendered as synthesized speech for individuals who have visual or learning disabilities, as braille for individuals who are blind, or as graphical text for individuals who are deaf or do not have a disability. For more information about equivalent alternatives, please refer to the Web Content Accessibility Guidelines WCAG 1.0 [\[WCAG10\]](#ref-WCAG10 "Link to reference WCAG10").

<span id="def-attribute">**Attribute**</span>  
This document uses the term "attribute" as used in SGML and XML ([\[XML\]](#ref-XML "Link to reference XML")): Element types may be defined as having any number of attributes. Some attributes are integral to the accessibility of content (e.g., the `"alt"`, `"title"`, and `"longdesc"` attributes in HTML).

<span id="def-Auditory">**Auditory Description**</span>  
An "auditory description" provides information about actions, body language, graphics, and scene changes in a video. Auditory descriptions are commonly used by people who are blind or have low vision, although they may also be used as a low-bandwidth equivalent on the Web. An auditory description is either a pre-recorded human voice or a synthesized voice (recorded or automatically generated in real time). The auditory description must be synchronized with the auditory track of a video presentation, usually during natural pauses in the auditory track.

<span id="def-authoring-tool">**Authoring Tool**</span>  
An "authoring tool" is any software that is used to produce content for publishing on the Web. Authoring tools include:

-   Editing tools specifically designed to produce Web content (e.g., WYSIWYG HTML and XML editors);
-   Tools that offer the option of saving material in a Web format (e.g., word processors or desktop publishing packages);
-   Tools that transform documents into Web formats (e.g., filters to transform desktop publishing formats to HTML);
-   Tools that produce multimedia, especially where it is intended for use on the Web (e.g., video production and editing suites, SMIL authoring packages);
-   Tools for site management or site publication, including tools that automatically generate Web sites dynamically from a database, on-the-fly conversion and Web site publishing tools;
-   Tools for management of layout (e.g., CSS formatting tools).

<span id="def-video-captions">**Captions**</span>  
"Captions" are essential [<span class="dfn-instance">text equivalents</span>](#def-equivalent-alternative "Definition of Equivalent Alternative") for movie audio. Captions consist of a [<span class="dfn-instance">text transcript</span>](#def-transcript "Definition of Transcript") of the auditory track of the movie (or other video presentation) that is synchronized with the video and auditory tracks. Captions are generally rendered graphically and benefit people who can see but are deaf, hard-of-hearing, or cannot hear the audio.

<span id="def-conversion-tool">**Conversion Tool**</span>  
A "conversion tool" is any application or application feature (e.g., "Save as HTML") that transforms convent in one format to another format (such as a markup language).

<span id="def-check-for">**Check for**</span>  
As used in <a href="#check-notify-on-schedule" class="noxref">checkpoint 4.1</a>, "check for" can refer to three types of checking:

1.  In some instances, an authoring tool will be able to check for accessibility problems automatically. For example, checking for validity (<a href="#check-ensure-published-DTD" class="noxref">checkpoint 2.2</a>) or testing whether an image is the only content of a link.
2.  In some cases, the tool will be able to "suspect" or "guess" that there is a problem, but will need confirmation from the author. For example, in making sure that a sensible reading order is preserved a tool can present a linearized version of a page to the author.
3.  In some cases, a tool must rely mostly on the author, and can only ask the author to check. For example, the tool may prompt the author to verify that equivalent alternatives for multimedia are appropriate. This is the minimal standard to be satisfied. Subtle, rather than extensive, prompting is more likely to be effective in encouraging the author to verify accessibility where it cannot be done automatically.

<span id="def-document">**Document**</span>  
A "document" is a series of elements that are defined by a [<span class="dfn-instance">markup language</span>](#def-Markup-Language "Definition of Markup Language") (e.g., HTML 4 or an XML application).

<span id="def-Editing">**Editing View**</span>  
An "editing view" is a [<span class="dfn-instance">view</span>](#def-view "Definition 
of View") provided by the authoring tool that allows editing.

<span id="def-element">**Element**</span>  
An "element" is any identifiable object within a document, for example, a character, word, image, paragraph or spreadsheet cell. In [\[HTML4\]](#ref-HTML4 "Link to reference HTML4") and [\[XML\]](#ref-XML "Link 
to reference XML"), an element refers to a pair of tags and their content, or an "empty" tag - one that requires no closing tag or content.

<span id="def-inform">**Inform**</span>  
To "inform" is to make the author aware of an event or situation through [<span class="dfn-instance">alert</span>](#def-alert "Definition of Alert"), [<span class="dfn-instance">prompt</span>](#def-prompt "Definition of Prompt"), sound, flash, or other means.

<span id="def-Markup-Language">**Markup Language**</span>  
Authors encode information using a "markup language" such as HTML [\[HTML4\]](#ref-HTML4 "Link to reference HTML4"), SVG [\[SVG\]](#ref-SVG "Link to reference SVG"), or MathML [\[MATHML\]](#ref-MATHML "Link to reference MATHML").

<span id="def-presentation-markup">**Presentation Markup**</span>  
"Presentation markup" is [<span class="dfn-instance">markup language</span>](#def-Markup-Language "Definition of Markup Language") that encodes information about the desired presentation or layout of the content. For example, Cascading Style Sheets ([\[CSS1\]](#ref-CSS1 "Link to reference CSS1"), [\[CSS2\]](#ref-CSS2 "Link to 
reference CSS2")) can be used to control fonts, colors, aural rendering, and graphical positioning. Presentation markup should not be used in place of [<span class="dfn-instance">structural markup</span>](#def-structural-markup "Definition of 
Structural Markup") to convey structure. For example, authors should mark up lists in HTML with proper list markup and style them with CSS (e.g., to control spacing, bullets, numbering, etc.). Authors should not use other CSS or HTML incorrectly to lay out content graphically so that it resembles a list.

<span id="def-prompt">**Prompt**</span>  
A "prompt" is a request for author input, either information or a decision. A prompt requires author response. For example, a [<span class="dfn-instance">text equivalent</span>](#def-alt-eq "Definition of Alternative Information") entry field prominently displayed in an image insertion dialog would constitute a prompt. Prompts can be used to encourage authors to provide information needed to make content accessible (such as [<span class="dfn-instance">alternative text equivalents</span>](#def-alt-eq "Definition of Alternative 
Information")).

<span id="def-Property">**Property**</span>  
A "property" is a piece of information about an element, for example structural information (e.g., it is item number 7 in a list, or plain text) or presentation information (e.g., that it is marked as bold, its font size is 14). In XML and HTML, properties of an element include the type of the element (e.g., `IMG` or `DL`), the values of its [<span class="dfn-instance">attributes</span>](#def-attribute "Definition of Attribute"), and information associated by means of a style sheet. In a database, properties of a particular element may include values of the entry, and acceptable data types for that entry.

<span id="def-structural-markup">**Structural Markup**</span>  
"Structural markup" is [<span class="dfn-instance">markup language</span>](#def-Markup-Language "Definition of Markup Language") that encodes information about the structural role of elements of the content. For example, headings, sections, members of a list, and components of a complex diagram can be identified using structural markup. Structural markup should not be used incorrectly to control presentation or layout. For example, authors should not use the `BLOCKQUOTE` element in HTML [\[HTML4\]](#ref-HTML4 "Link to reference HTML4") to achieve an indentation visual layout effect. Structural markup should be used correctly to communicate the roles of the elements of the content and [<span class="dfn-instance">presentation markup</span>](#def-presentation-markup "Definition of Presentation 
Markup") should be used separately to control the presentation and layout.

<span id="def-transcript">**Transcript**</span>  
A "transcript" is a text representation of sounds in an audio clip or an auditory track of a multimedia presentation. A "collated text transcript" for a video combines (collates) caption text with text descriptions of video information (descriptions of the actions, body language, graphics, and scene changes of the visual track). Collated text transcripts are essential for individuals who are deaf-blind and rely on braille for access to movies and other content.

<span id="def-Transformation">**Transformation**</span>  
A "transformation" is a process that changes a document or object into another, equivalent, object according to a discrete set of rules. This includes [<span class="dfn-instance">conversion tools</span>](#def-conversion-tool "Definition of Conversion 
Tool"), software that allows the author to change the DTD defined for the original document to another DTD, and the ability to change the markup of lists and convert them into tables.

<span id="def-User-Agent">**User Agent**</span>  
A "user agent" is software that retrieves and renders Web content. User agents include browsers, plug-ins for a particular media type, and some assistive technologies.

<span id="def-view">**View**</span>  
Authoring tools may render the same content in a variety of ways; each rendering is called a "view." Some authoring tools will have several different types of view, and some allow views of several documents at once. For instance, one view may show raw markup, a second may show a structured tree, a third may show markup with rendered objects while a final view shows an example of how the document may appear if it were to be rendered by a particular browser. A typical way to distinguish views in a graphic environment is to place each in a separate window.

4. <span id="acknowledgments">Acknowledgments</span>
----------------------------------------------------

Many thanks to the following people who have contributed through review and comment: Jim Allan, Denis Anson, Kitch Barnicle, Kynn Bartlett, Harvey Bingham, Judy Brewer, Carl Brown, Dick Brown, Wendy Chisholm, Aaron Cohen, Rob Cumming, Daniel Dardailler, Mark Day, BK Delong, Martin Dürst, Kelly Ford, Jamie Fox, Edna French, Sylvain Galineau, Al Gilman, Jon Gunderson, Eric Hansen, Phill Jenkins, Len Kasday, Brian Kelly, Marja-Riitta Koivunen, Sho Kuwamoto, Jaap van Lelieveld, Susan Lesch, William Loughborough, Greg Lowney, Karen McCall, Thierry Michel, Charles Oppermann, Dave Pawson, Dave Poehlman, Loretta Reid, Bruce Roberts, Chris Ridpath, Gregory Rosmaita, Bridie Saccocio, Janina Sajka, John Slatin, Jim Thatcher, Irène Vatton, Gregg Vanderheiden, Pawan Vora, Jason White, and Lauren Wood.

5. <span id="references">References</span>
------------------------------------------

For the latest version of any W3C specification please consult the list of [W3C Technical Reports](http://www.w3.org/TR) at http://www.w3.org/TR.

<span id="ref-ATAG10-CHECKLIST">**\[ATAG10-CHECKLIST\]**</span>  
An appendix to this document lists all of the checkpoints, sorted by priority. The checklist is available in either [tabular form](atag10-chktable.html "Tabular 
form of ATAG Checklist") (at http://www.w3.org/TR/2000/REC-ATAG10-20000203/atag10-chktable) or [list form](atag10-chklist.html "List 
form of ATAG Checklist") (at http://www.w3.org/TR/2000/REC-ATAG10-20000203/atag10-chklist).

<span id="ref-ATAG10-TECHS">**\[ATAG10-TECHS\]**</span>  
"[Techniques for Authoring Tool Accessibility Guidelines 1.0](http://www.w3.org/TR/ATAG10-TECHS)," J. Treviranus, J. Richards, I. Jacobs, and C. McCathieNevile eds. The latest version is available at http://www.w3.org/TR/ATAG10-TECHS.

<span id="ref-CONFORMANCE">**\[CONFORMANCE\]**</span>  
"[Conformance icons for ATAG 1.0](http://www.w3.org/WAI/ATAG10-Conformance.html)." Information about ATAG 1.0 conformance icons is available at http://www.w3.org/WAI/ATAG10-Conformance.

<span id="ref-CSS1">**\[CSS1\]**</span>  
"[CSS, level 1 Recommendation](http://www.w3.org/TR/1999/REC-CSS1-19990111)," B. Bos and H. Wium Lie, eds., 17 December 1996, revised 11 January 1999. This CSS1 Recommendation is http://www.w3.org/TR/1999/REC-CSS1-19990111. The [latest version of CSS1](http://www.w3.org/TR/REC-CSS1) is available at http://www.w3.org/TR/REC-CSS1. **Note:** CSS1 has been superseded by CSS2. Tools should implement the CSS2 cascade.

<span id="ref-CSS2">**\[CSS2\]**</span>  
"[CSS, level 2 Recommendation](http://www.w3.org/TR/1998/REC-CSS2-19980512)," B. Bos, H. Wium Lie, C. Lilley, and I. Jacobs, eds., 12 May 1998. This CSS2 Recommendation is http://www.w3.org/TR/1998/REC-CSS2-19980512. The [latest version of CSS2](http://www.w3.org/TR/REC-CSS2) is available at http://www.w3.org/TR/REC-CSS2.

<span id="ref-HTML4">**\[HTML4\]**</span>  
"[HTML 4.01 Recommendation](http://www.w3.org/TR/1999/REC-html401-19991224)," D. Raggett, A. Le Hors, and I. Jacobs, eds., 24 December 1999. This HTML 4.01 Recommendation is http://www.w3.org/TR/1999/REC-html401-19991224. The [latest version of HTML 4](http://www.w3.org/TR/html4) is available at http://www.w3.org/TR/html4.

<span id="ref-MATHML">**\[MATHML\]**</span>  
"[Mathematical Markup Language](http://www.w3.org/1999/07/REC-MathML-19990707)," P. Ion and R. Miner, eds., 7 April 1998, revised 7 July 1999. This MathML 1.0 Recommendation is http://www.w3.org/TR/1998/REC-MathML-19990707. The [latest version of MathML 1.0](http://www.w3.org/TR/REC-MathML) is available at http://www.w3.org/TR/REC-MathML.

<span id="ref-RDF10">**\[RDF10\]**</span>  
"[Resource Description Framework (RDF) Model and Syntax Specification](http://www.w3.org/TR/1999/REC-rdf-syntax-19990222)," O. Lassila, R. Swick, eds. The 22 February 1999 Recommendation is http://www.w3.org/TR/1999/REC-rdf-syntax-19990222. The [latest version of RDF 1.0](http://www.w3.org/TR/REC-rdf-syntax) is available at http://www.w3.org/TR/REC-rdf-syntax.

<span id="ref-SVG">**\[SVG\]**</span>  
"[Scalable Vector Graphics (SVG) 1.0 Specification (Working Draft)](http://www.w3.org/TR/SVG)," J. Ferraiolo, ed. The latest version of the SVG specification is available at http://www.w3.org/TR/SVG.

<span id="ref-UAAG10-TECHS">**\[UAAG10-TECHS\]**</span>  
"[Techniques for User Agent Accessibility Guidelines 1.0](http://www.w3.org/TR/UAAG10-TECHS/)," J. Gunderson, and I. Jacobs, eds. The [latest version of Techniques for User Agent Accessibility Guidelines 1.0](http://www.w3.org/TR/UAAG10-TECHS/) is available at http://www.w3.org/TR/UAAG10-TECHS/.

<span id="ref-WCAG10">**\[WCAG10\]**</span>  
"[Web Content Accessibility Guidelines 1.0](http://www.w3.org/TR/1999/WAI-WEBCONTENT-19990505)," W. Chisholm, G. Vanderheiden, and I. Jacobs, eds., 5 May 1999. This Recommendation is http://www.w3.org/TR/1999/WAI-WEBCONTENT-19990505. The latest version of the [Web Content Accessibility Guidelines 1.0"](http://www.w3.org/TR/WCAG10/) is available at http://www.w3.org/TR/WCAG10/.

<span id="ref-WCAG10-TECHS">**\[WCAG10-TECHS\]**</span>  
"[Techniques for Web Content Accessibility Guidelines 1.0](http://www.w3.org/TR/WCAG10-TECHS/)," W. Chisholm, G. Vanderheiden, and I. Jacobs, eds. The [latest version of Techniques for Web Content Accessibility Guidelines 1.0](http://www.w3.org/TR/WCAG10-TECHS/) is available at http://www.w3.org/TR/WCAG10-TECHS/.

<span id="ref-XML">**\[XML\]**</span>  
"[The Extensible Markup Language (XML) 1.0](http://www.w3.org/TR/1998/REC-xml-19980210)," T. Bray, J. Paoli, C. M. Sperberg-McQueen, eds., 10 February 1998. This XML 1.0 Recommendation is http://www.w3.org/TR/1998/REC-xml-19980210. The [latest version of the XML specification](http://www.w3.org/TR/REC-xml) is available at http://www.w3.org/TR/REC-xml.

[<img src="http://www.w3.org/WAI/wcag1AA" alt="Level Double-A conformance icon, W3C-WAI Web Content Accessibility Guidelines 1.0" class="conform" width="88" height="32" />](http://www.w3.org/WAI/WCAG1AA-Conformance "Explanation of 
Level Double-A Conformance")

------------------------------------------------------------------------

\[[contents](#toc)\]   \[[tabular checklist](atag10-chktable.html)\]   \[[linear checklist](atag10-chklist.html)\]  
