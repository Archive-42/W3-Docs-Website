<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

Web Content Accessibility Guidelines (WCAG) 2.1
===============================================

W3C Proposed Recommendation 24 April 2018
-----------------------------------------

This version:  
<a href="https://www.w3.org/TR/2018/PR-WCAG21-20180424/" class="u-url">https://www.w3.org/TR/2018/PR-WCAG21-20180424/</a>

Latest published version:  
<https://www.w3.org/TR/WCAG21/>

Latest editor's draft:  
<https://w3c.github.io/wcag21/guidelines/>

Implementation report:  
<https://www.w3.org/WAI/WCAG21/implementation-report/>

Previous version:  
<https://www.w3.org/TR/2018/CR-WCAG21-20180130/>

Latest Recommendation:  
<https://www.w3.org/TR/2008/REC-WCAG20-20081211/>

Editors:  
<a href="mailto:akirkpat@adobe.com" class="ed_mailto u-email email p-name">Andrew Kirkpatrick</a> (Adobe)

<a href="mailto:josh@interaccess.ie" class="ed_mailto u-email email p-name">Joshue O Connor</a> (Invited Expert, InterAccess)

<a href="mailto:cooper@w3.org" class="ed_mailto u-email email p-name">Michael Cooper</a> (W3C)

WCAG 2.0 Editors (until December 2008):  
<span class="p-name fn">Ben Caldwell</span> (Trace R&D Center, University of Wisconsin-Madison)

<span class="p-name fn">Loretta Guarino Reid</span> (Google, Inc.)

<span class="p-name fn">Gregg Vanderheiden</span> (Trace R&D Center, University of Wisconsin-Madison)

<span class="p-name fn">Wendy Chisholm</span> (W3C)

<span class="p-name fn">John Slatin</span> (Accessibility Institute, University of Texas at Austin)

<span class="p-name fn">Jason White</span> (University of Melbourne)

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2017-2018 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](https://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

Abstract
--------

Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more accessible. Following these guidelines will make content more accessible to a wider range of people with disabilities, including blindness and low vision, deafness and hearing loss, limited movement, speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines will also often make Web content more usable to users in general.

WCAG 2.1 success criteria are written as testable statements that are not technology-specific. Guidance about satisfying the success criteria in specific technologies, as well as general information about interpreting the success criteria, is provided in separate documents. See [Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/intro/wcag.php) for an introduction and links to WCAG technical and educational material.

WCAG 2.1 extends [Web Content Accessibility Guidelines 2.0](https://www.w3.org/TR/WCAG20/) \[<a href="#bib-WCAG20" class="bibref">WCAG20</a>\], which was published as a W3C Recommendation December 2008. Content that conforms to WCAG 2.1 also conforms to WCAG 2.0, and therefore to policies that reference WCAG 2.0.

Until WCAG 2.1 advances to W3C Recommendation, the current and referenceable document is Web Content Accessibility Guidelines 2.0 \[<a href="#bib-WCAG20" class="bibref">WCAG20</a>\], published as a W3C Recommendation December 2008.

Status of This Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This is a [Proposed Recommendation](https://www.w3.org/2018/Process-20180201/#RecsPR) of WCAG 2.1 by the [Accessibility Guidelines Working Group](https://www.w3.org/WAI/GL/). WCAG 2.1 was published as a [Candidate Recommendation on 30 January 2018](https://www.w3.org/TR/2018/CR-WCAG21-20180130/). Since then the Working Group has collected [implementation experience](https://www.w3.org/WAI/WCAG21/implementation-report/) for the guidelines. No items at risk were removed, but some success criteria were renamed or moved in a manner that does not impact conformance. A [history of changes to WCAG 2.1](#changelog) is available in the appendix.

The primary purpose of the Proposed Recommendation is to collect feedback from the Advisory Committee. W3C Advisory Committee Members are invited to send formal review comments to the W3C Team until **22 May 2018**. Comments should be made using the [Call for Review WBS](https://www.w3.org/2002/09/wbs/33280/2018-04_PR_WCAG21/) form. To comment, aside from Advisory Committee comments, [file an issue in the W3C WCAG 2.1 GitHub repository](https://github.com/w3c/wcag21/issues/new). The Working Group requests that public comments be filed as new issues, one issue per discrete comment. It is free to create a GitHub account to file issues. If filing issues in GitHub is not feasible, send email to [public-agwg-comments@w3.org](mailto:public-agwg-comments@w3.org?subject=WCAG%202.1%20public%20comment) ([comment archive](https://lists.w3.org/Archives/Public/public-agwg-comments/)). Comments are requested by **22 May 2018**. In-progress updates to the document may be viewed in the [publicly visible editors' draft](https://w3c.github.io/wcag21/guidelines/).

This document was published by the [Accessibility Guidelines Working Group](https://www.w3.org/WAI/GL/) as a Proposed Recommendation. This document is intended to become a W3C Recommendation. The W3C Membership and other interested parties are invited to review the document and send comments to <public-comments-wcag20@w3.org> ([subscribe](mailto:public-comments-wcag20-request@w3.org?subject=subscribe), [archives](https://lists.w3.org/Archives/Public/public-comments-wcag20/)) through 22 May 2018. Advisory Committee Representatives should consult their [WBS questionnaires](https://www.w3.org/2002/09/wbs/myQuestionnaires). Note that substantive technical comments were expected during the Candidate Recommendation review period that ended 30 March 2018.

Please see the Working Group's [implementation report](https://www.w3.org/WAI/WCAG21/implementation-report/).

Publication as a Proposed Recommendation does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/35422/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2018/Process-20180201/" id="w3c_process_revision">1 February 2018 W3C Process Document</a>.

Table of Contents
-----------------

1.  <a href="#abstract" class="tocxref">Abstract</a>
2.  <a href="#sotd" class="tocxref">Status of This Document</a>
3.  <a href="#intro" class="tocxref">Introduction</a>
    1.  <a href="#background-on-wcag-2" class="tocxref"><span class="secno">0.1 </span>Background on WCAG 2</a>
    2.  <a href="#wcag-2-layers-of-guidance" class="tocxref"><span class="secno">0.2 </span>WCAG 2 Layers of Guidance</a>
    3.  <a href="#wcag-2-1-supporting-documents" class="tocxref"><span class="secno">0.3 </span>WCAG 2.1 Supporting Documents</a>
    4.  <a href="#requirements-for-wcag-2-1" class="tocxref"><span class="secno">0.4 </span>Requirements for WCAG 2.1</a>
    5.  <a href="#comparison-with-wcag-2-0" class="tocxref"><span class="secno">0.5 </span>Comparison with WCAG 2.0</a>
        1.  <a href="#new-features-in-wcag-2-1" class="tocxref"><span class="secno">0.5.1 </span>New Features in WCAG 2.1</a>
        2.  <a href="#numbering-in-wcag-2-1" class="tocxref"><span class="secno">0.5.2 </span>Numbering in WCAG 2.1</a>
        3.  <a href="#conformance-to-wcag-2-1" class="tocxref"><span class="secno">0.5.3 </span>Conformance to WCAG 2.1</a>
    6.  <a href="#later-versions-of-accessibility-guidelines" class="tocxref"><span class="secno">0.6 </span>Later Versions of Accessibility Guidelines</a>
4.  <a href="#perceivable" class="tocxref"><span class="secno">1. </span> Perceivable</a>
    1.  <a href="#text-alternatives" class="tocxref"><span class="secno">1.1 </span>Text Alternatives</a>
        1.  <a href="#non-text-content" class="tocxref"><span class="secno">1.1.1 </span>Non-text Content</a>
    2.  <a href="#time-based-media" class="tocxref"><span class="secno">1.2 </span>Time-based Media</a>
        1.  <a href="#audio-only-and-video-only-prerecorded" class="tocxref"><span class="secno">1.2.1 </span>Audio-only and Video-only (Prerecorded)</a>
        2.  <a href="#captions-prerecorded" class="tocxref"><span class="secno">1.2.2 </span>Captions (Prerecorded)</a>
        3.  <a href="#audio-description-or-media-alternative-prerecorded" class="tocxref"><span class="secno">1.2.3 </span>Audio Description or Media Alternative (Prerecorded)</a>
        4.  <a href="#captions-live" class="tocxref"><span class="secno">1.2.4 </span>Captions (Live)</a>
        5.  <a href="#audio-description-prerecorded" class="tocxref"><span class="secno">1.2.5 </span>Audio Description (Prerecorded)</a>
        6.  <a href="#sign-language-prerecorded" class="tocxref"><span class="secno">1.2.6 </span>Sign Language (Prerecorded)</a>
        7.  <a href="#extended-audio-description-prerecorded" class="tocxref"><span class="secno">1.2.7 </span>Extended Audio Description (Prerecorded)</a>
        8.  <a href="#media-alternative-prerecorded" class="tocxref"><span class="secno">1.2.8 </span>Media Alternative (Prerecorded)</a>
        9.  <a href="#audio-only-live" class="tocxref"><span class="secno">1.2.9 </span>Audio-only (Live)</a>
    3.  <a href="#adaptable" class="tocxref"><span class="secno">1.3 </span>Adaptable</a>
        1.  <a href="#info-and-relationships" class="tocxref"><span class="secno">1.3.1 </span>Info and Relationships</a>
        2.  <a href="#meaningful-sequence" class="tocxref"><span class="secno">1.3.2 </span>Meaningful Sequence</a>
        3.  <a href="#sensory-characteristics" class="tocxref"><span class="secno">1.3.3 </span>Sensory Characteristics</a>
        4.  <a href="#orientation" class="tocxref"><span class="secno">1.3.4 </span>Orientation</a>
        5.  <a href="#identify-input-purpose" class="tocxref"><span class="secno">1.3.5 </span>Identify Input Purpose</a>
        6.  <a href="#identify-purpose" class="tocxref"><span class="secno">1.3.6 </span>Identify Purpose</a>
    4.  <a href="#distinguishable" class="tocxref"><span class="secno">1.4 </span>Distinguishable</a>
        1.  <a href="#use-of-color" class="tocxref"><span class="secno">1.4.1 </span>Use of Color</a>
        2.  <a href="#audio-control" class="tocxref"><span class="secno">1.4.2 </span>Audio Control</a>
        3.  <a href="#contrast-minimum" class="tocxref"><span class="secno">1.4.3 </span>Contrast (Minimum)</a>
        4.  <a href="#resize-text" class="tocxref"><span class="secno">1.4.4 </span>Resize text</a>
        5.  <a href="#images-of-text" class="tocxref"><span class="secno">1.4.5 </span>Images of Text</a>
        6.  <a href="#contrast-enhanced" class="tocxref"><span class="secno">1.4.6 </span>Contrast (Enhanced)</a>
        7.  <a href="#low-or-no-background-audio" class="tocxref"><span class="secno">1.4.7 </span>Low or No Background Audio</a>
        8.  <a href="#visual-presentation" class="tocxref"><span class="secno">1.4.8 </span>Visual Presentation</a>
        9.  <a href="#images-of-text-no-exception" class="tocxref"><span class="secno">1.4.9 </span>Images of Text (No Exception)</a>
        10. <a href="#reflow" class="tocxref"><span class="secno">1.4.10 </span>Reflow</a>
        11. <a href="#non-text-contrast" class="tocxref"><span class="secno">1.4.11 </span>Non-text Contrast</a>
        12. <a href="#text-spacing" class="tocxref"><span class="secno">1.4.12 </span>Text Spacing</a>
        13. <a href="#content-on-hover-or-focus" class="tocxref"><span class="secno">1.4.13 </span>Content on Hover or Focus</a>
5.  <a href="#operable" class="tocxref"><span class="secno">2. </span>Operable</a>
    1.  <a href="#keyboard-accessible" class="tocxref"><span class="secno">2.1 </span>Keyboard Accessible</a>
        1.  <a href="#keyboard" class="tocxref"><span class="secno">2.1.1 </span>Keyboard</a>
        2.  <a href="#no-keyboard-trap" class="tocxref"><span class="secno">2.1.2 </span>No Keyboard Trap</a>
        3.  <a href="#keyboard-no-exception" class="tocxref"><span class="secno">2.1.3 </span>Keyboard (No Exception)</a>
        4.  <a href="#character-key-shortcuts" class="tocxref"><span class="secno">2.1.4 </span>Character Key Shortcuts</a>
    2.  <a href="#enough-time" class="tocxref"><span class="secno">2.2 </span>Enough Time</a>
        1.  <a href="#timing-adjustable" class="tocxref"><span class="secno">2.2.1 </span>Timing Adjustable</a>
        2.  <a href="#pause-stop-hide" class="tocxref"><span class="secno">2.2.2 </span>Pause, Stop, Hide</a>
        3.  <a href="#no-timing" class="tocxref"><span class="secno">2.2.3 </span>No Timing</a>
        4.  <a href="#interruptions" class="tocxref"><span class="secno">2.2.4 </span>Interruptions</a>
        5.  <a href="#re-authenticating" class="tocxref"><span class="secno">2.2.5 </span>Re-authenticating</a>
        6.  <a href="#timeouts" class="tocxref"><span class="secno">2.2.6 </span>Timeouts</a>
    3.  <a href="#seizures-and-physical-reactions" class="tocxref"><span class="secno">2.3 </span>Seizures and Physical Reactions</a>
        1.  <a href="#three-flashes-or-below-threshold" class="tocxref"><span class="secno">2.3.1 </span>Three Flashes or Below Threshold</a>
        2.  <a href="#three-flashes" class="tocxref"><span class="secno">2.3.2 </span>Three Flashes</a>
        3.  <a href="#animation-from-interactions" class="tocxref"><span class="secno">2.3.3 </span>Animation from Interactions</a>
    4.  <a href="#navigable" class="tocxref"><span class="secno">2.4 </span>Navigable</a>
        1.  <a href="#bypass-blocks" class="tocxref"><span class="secno">2.4.1 </span>Bypass Blocks</a>
        2.  <a href="#page-titled" class="tocxref"><span class="secno">2.4.2 </span>Page Titled</a>
        3.  <a href="#focus-order" class="tocxref"><span class="secno">2.4.3 </span>Focus Order</a>
        4.  <a href="#link-purpose-in-context" class="tocxref"><span class="secno">2.4.4 </span>Link Purpose (In Context)</a>
        5.  <a href="#multiple-ways" class="tocxref"><span class="secno">2.4.5 </span>Multiple Ways</a>
        6.  <a href="#headings-and-labels" class="tocxref"><span class="secno">2.4.6 </span>Headings and Labels</a>
        7.  <a href="#focus-visible" class="tocxref"><span class="secno">2.4.7 </span>Focus Visible</a>
        8.  <a href="#location" class="tocxref"><span class="secno">2.4.8 </span>Location</a>
        9.  <a href="#link-purpose-link-only" class="tocxref"><span class="secno">2.4.9 </span>Link Purpose (Link Only)</a>
        10. <a href="#section-headings" class="tocxref"><span class="secno">2.4.10 </span>Section Headings</a>
    5.  <a href="#input-modalities" class="tocxref"><span class="secno">2.5 </span>Input Modalities</a>
        1.  <a href="#pointer-gestures" class="tocxref"><span class="secno">2.5.1 </span>Pointer Gestures</a>
        2.  <a href="#pointer-cancellation" class="tocxref"><span class="secno">2.5.2 </span>Pointer Cancellation</a>
        3.  <a href="#label-in-name" class="tocxref"><span class="secno">2.5.3 </span>Label in Name</a>
        4.  <a href="#motion-actuation" class="tocxref"><span class="secno">2.5.4 </span>Motion Actuation</a>
        5.  <a href="#target-size" class="tocxref"><span class="secno">2.5.5 </span>Target Size</a>
        6.  <a href="#concurrent-input-mechanisms" class="tocxref"><span class="secno">2.5.6 </span>Concurrent Input Mechanisms</a>
6.  <a href="#understandable" class="tocxref"><span class="secno">3. </span> Understandable</a>
    1.  <a href="#readable" class="tocxref"><span class="secno">3.1 </span>Readable</a>
        1.  <a href="#language-of-page" class="tocxref"><span class="secno">3.1.1 </span>Language of Page</a>
        2.  <a href="#language-of-parts" class="tocxref"><span class="secno">3.1.2 </span>Language of Parts</a>
        3.  <a href="#unusual-words" class="tocxref"><span class="secno">3.1.3 </span>Unusual Words</a>
        4.  <a href="#abbreviations" class="tocxref"><span class="secno">3.1.4 </span>Abbreviations</a>
        5.  <a href="#reading-level" class="tocxref"><span class="secno">3.1.5 </span>Reading Level</a>
        6.  <a href="#pronunciation" class="tocxref"><span class="secno">3.1.6 </span>Pronunciation</a>
    2.  <a href="#predictable" class="tocxref"><span class="secno">3.2 </span>Predictable</a>
        1.  <a href="#on-focus" class="tocxref"><span class="secno">3.2.1 </span>On Focus</a>
        2.  <a href="#on-input" class="tocxref"><span class="secno">3.2.2 </span>On Input</a>
        3.  <a href="#consistent-navigation" class="tocxref"><span class="secno">3.2.3 </span>Consistent Navigation</a>
        4.  <a href="#consistent-identification" class="tocxref"><span class="secno">3.2.4 </span>Consistent Identification</a>
        5.  <a href="#change-on-request" class="tocxref"><span class="secno">3.2.5 </span>Change on Request</a>
    3.  <a href="#input-assistance" class="tocxref"><span class="secno">3.3 </span>Input Assistance</a>
        1.  <a href="#error-identification" class="tocxref"><span class="secno">3.3.1 </span>Error Identification</a>
        2.  <a href="#labels-or-instructions" class="tocxref"><span class="secno">3.3.2 </span>Labels or Instructions</a>
        3.  <a href="#error-suggestion" class="tocxref"><span class="secno">3.3.3 </span>Error Suggestion</a>
        4.  <a href="#error-prevention-legal-financial-data" class="tocxref"><span class="secno">3.3.4 </span>Error Prevention (Legal, Financial, Data)</a>
        5.  <a href="#help" class="tocxref"><span class="secno">3.3.5 </span>Help</a>
        6.  <a href="#error-prevention-all" class="tocxref"><span class="secno">3.3.6 </span>Error Prevention (All)</a>
7.  <a href="#robust" class="tocxref"><span class="secno">4. </span> Robust</a>
    1.  <a href="#compatible" class="tocxref"><span class="secno">4.1 </span>Compatible</a>
        1.  <a href="#parsing" class="tocxref"><span class="secno">4.1.1 </span>Parsing</a>
        2.  <a href="#name-role-value" class="tocxref"><span class="secno">4.1.2 </span>Name, Role, Value</a>
        3.  <a href="#status-messages" class="tocxref"><span class="secno">4.1.3 </span>Status Messages</a>
8.  <a href="#conformance" class="tocxref"><span class="secno">5. </span>Conformance</a>
    1.  <a href="#interpreting-normative-requirements" class="tocxref"><span class="secno">5.1 </span>Interpreting Normative Requirements</a>
    2.  <a href="#conformance-reqs" class="tocxref"><span class="secno">5.2 </span>Conformance Requirements</a>
        1.  <a href="#cc1" class="tocxref"><span class="secno">5.2.1 </span>Conformance Level</a>
        2.  <a href="#cc2" class="tocxref"><span class="secno">5.2.2 </span>Full pages</a>
        3.  <a href="#cc3" class="tocxref"><span class="secno">5.2.3 </span>Complete processes</a>
        4.  <a href="#cc4" class="tocxref"><span class="secno">5.2.4 </span>Only Accessibility-Supported Ways of Using Technologies</a>
        5.  <a href="#cc5" class="tocxref"><span class="secno">5.2.5 </span>Non-Interference</a>
    3.  <a href="#conformance-claims" class="tocxref"><span class="secno">5.3 </span>Conformance Claims (Optional)</a>
        1.  <a href="#conformance-required" class="tocxref"><span class="secno">5.3.1 </span>Required Components of a Conformance Claim</a>
        2.  <a href="#conformance-optional" class="tocxref"><span class="secno">5.3.2 </span>Optional Components of a Conformance Claim</a>
    4.  <a href="#conformance-partial" class="tocxref"><span class="secno">5.4 </span>Statement of Partial Conformance - Third Party Content</a>
    5.  <a href="#conformance-partial-lang" class="tocxref"><span class="secno">5.5 </span>Statement of Partial Conformance - Language</a>
9.  <a href="#glossary" class="tocxref"><span class="secno">6. </span>Glossary</a>
10. <a href="#input-purposes" class="tocxref"><span class="secno">7. </span>Input Purposes for User Interface Components</a>
11. <a href="#changelog" class="tocxref"><span class="secno">A. </span>Change Log</a>
    1.  <a href="#significant-editorial-changes-since-the-candidate-recommendation" class="tocxref"><span class="secno">A.1 </span>Significant editorial changes since the <span class="formerLink">Candidate Recommendation</span></a>
    2.  <a href="#other-substantive-changes-since-the-first-public-working-draft" class="tocxref"><span class="secno">A.2 </span>Other substantive changes since the <span class="formerLink">first public working draft</span></a>
12. <a href="#acknowledgments" class="tocxref"><span class="secno">B. </span>Acknowledgments</a>
    1.  <a href="#ack_participants-active" class="tocxref"><span class="secno">B.1 </span>Participants of the WCAG WG active in the development of this document:</a>
    2.  <a href="#ack_participants-previous" class="tocxref"><span class="secno">B.2 </span>Other previously active WCAG WG participants and other contributors to WCAG 2.0, WCAG 2.1, or supporting resources</a>
    3.  <a href="#enabling-funders" class="tocxref"><span class="secno">B.3 </span>Enabling funders</a>
13. <a href="#references" class="tocxref"><span class="secno">C. </span>References</a>
    1.  <a href="#normative-references" class="tocxref"><span class="secno">C.1 </span>Normative references</a>
    2.  <a href="#informative-references" class="tocxref"><span class="secno">C.2 </span>Informative references</a>

Introduction
------------

*This section is non-normative.*

### <span class="secno">0.1 </span>Background on WCAG 2<span class="permalink">[§](#background-on-wcag-2 "Permalink for 0.1 Background on WCAG 2")</span>

Web Content Accessibility Guidelines (WCAG) 2.1 defines how to make Web content more accessible to people with disabilities. Accessibility involves a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities. Although these guidelines cover a wide range of issues, they are not able to address the needs of people with all types, degrees, and combinations of disability. These guidelines also make Web content more usable by older individuals with changing abilities due to aging and often improve usability for users in general.

WCAG 2.1 is developed through the [W3C process](https://www.w3.org/WAI/intro/w3c-process) in cooperation with individuals and organizations around the world, with a goal of providing a shared standard for Web content accessibility that meets the needs of individuals, organizations, and governments internationally. WCAG 2.1 builds on WCAG 2.0 \[<a href="#bib-WCAG20" class="bibref">WCAG20</a>\], which in turn built on WCAG 1.0 \[<a href="#bib-WAI-WEBCONTENT" class="bibref">WAI-WEBCONTENT</a>\] and is designed to apply broadly to different Web technologies now and in the future, and to be testable with a combination of automated testing and human evaluation. For an introduction to WCAG, see the [Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/intro/wcag).

Significant challenges were encountered in defining additional criteria to address cognitive, language, and learning disabilities, including a short timeline for development as well as challenges in reaching consensus on testability, implementability, and international considerations of proposals. Work will carry on in this area in future versions of WCAG. We encourage authors to refer to our supplemental guidance on [improving inclusion for people with disabilities, including learning and cognitive disabilities, people with low-vision, and more](https://www.w3.org/WAI/intro/wcag#supplement).

Web accessibility depends not only on accessible content but also on accessible Web browsers and other user agents. Authoring tools also have an important role in Web accessibility. For an overview of how these components of Web development and interaction work together, see:

-   **[Essential Components of Web Accessibility](https://www.w3.org/WAI/intro/components)**
-   **[User Agent Accessibility Guidelines (UAAG) Overview](https://www.w3.org/WAI/intro/uaag)**
-   **[Authoring Tool Accessibility Guidelines (ATAG) Overview](https://www.w3.org/WAI/intro/atag)**

### <span class="secno">0.2 </span>WCAG 2 Layers of Guidance<span class="permalink">[§](#wcag-2-layers-of-guidance "Permalink for 0.2 WCAG 2 Layers of Guidance")</span>

The individuals and organizations that use WCAG vary widely and include Web designers and developers, policy makers, purchasing agents, teachers, and students. In order to meet the varying needs of this audience, several layers of guidance are provided including overall *principles*, general *guidelines*, testable *success criteria* and a rich collection of *sufficient techniques*, *advisory techniques*, and *documented common failures* with examples, resource links and code.

-   **Principles** - At the top are four principles that provide the foundation for Web accessibility: *perceivable, operable, understandable, and robust*. See also [Understanding the Four Principles of Accessibility](https://www.w3.org/WAI/WCAG21/Understanding/intro#understanding-the-four-principles-of-accessibility).

-   **Guidelines** - Under the principles are guidelines. The 12 guidelines provide the basic goals that authors should work toward in order to make content more accessible to users with different disabilities. The guidelines are not testable, but provide the framework and overall objectives to help authors understand the success criteria and better implement the techniques.

-   **Success Criteria** - For each guideline, testable success criteria are provided to allow WCAG 2.0 to be used where requirements and conformance testing are necessary such as in design specification, purchasing, regulation, and contractual agreements. In order to meet the needs of different groups and different situations, three levels of conformance are defined: A (lowest), AA, and AAA (highest). Additional information on WCAG levels can be found in [Understanding Levels of Conformance](https://www.w3.org/WAI/WCAG21/Understanding/conformance#levels).

-   **Sufficient and Advisory Techniques** - For each of the *guidelines* and *success criteria* in the WCAG 2.0 document itself, the working group has also documented a wide variety of *techniques*. The techniques are informative and fall into two categories: those that are *sufficient* for meeting the success criteria and those that are *advisory*. The advisory techniques go beyond what is required by the individual success criteria and allow authors to better address the guidelines. Some advisory techniques address accessibility barriers that are not covered by the testable success criteria. Where common failures are known, these are also documented. See also [Sufficient and Advisory Techniques in Understanding WCAG 2.0](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques).

All of these layers of guidance (principles, guidelines, success criteria, and sufficient and advisory techniques) work together to provide guidance on how to make content more accessible. Authors are encouraged to view and apply all layers that they are able to, including the advisory techniques, in order to best address the needs of the widest possible range of users.

Note that even content that conforms at the highest level (AAA) will not be accessible to individuals with all types, degrees, or combinations of disability, particularly in the cognitive language and learning areas. Authors are encouraged to consider the full range of techniques, including the advisory techniques, as well as to seek relevant advice about current best practice to ensure that Web content is accessible, as far as possible, to this community. [Metadata](https://www.w3.org/WAI/WCAG21/Understanding/understanding-metadata) may assist users in finding content most suitable for their needs.

### <span class="secno">0.3 </span>WCAG 2.1 Supporting Documents<span class="permalink">[§](#wcag-2-1-supporting-documents "Permalink for 0.3 WCAG 2.1 Supporting Documents")</span>

The WCAG 2.0 document is designed to meet the needs of those who need a stable, referenceable technical standard. Other documents, called supporting documents, are based on the WCAG 2.0 document and address other important purposes, including the ability to be updated to describe how WCAG would be applied with new technologies. Supporting documents include:

1.  **[How to Meet WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)** - A customizable quick reference to WCAG 2.1 that includes all of the guidelines, success criteria, and techniques for authors to use as they are developing and evaluating Web content. This includes content from WCAG 2.0 and WCAG 2.1 and can be filtered in many ways to help authors focus on relevant content.

2.  **[Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/)** - A guide to understanding and implementing WCAG 2.1. There is a short "Understanding" document for each guideline and success criterion in WCAG 2.1 as well as key topics.

3.  **[Techniques for WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/)** - A collection of techniques and common failures, each in a separate document that includes a description, examples, code and tests.

4.  **[The WCAG Documents](https://www.w3.org/WAI/intro/wcag20)** - A diagram and description of how the technical documents are related and linked.

See [Web Content Accessibility Guidelines (WCAG) Overview](http://www.w3.org/WAI/intro/wcag.php) for a description of the WCAG 2.0 supporting material, including education resources related to WCAG 2. Additional resources covering topics such as the business case for Web accessibility, planning implementation to improve the accessibility of Web sites, and accessibility policies are listed in [WAI Resources](http://www.w3.org/WAI/Resources/Overview).

### <span class="secno">0.4 </span>Requirements for WCAG 2.1<span class="permalink">[§](#requirements-for-wcag-2-1 "Permalink for 0.4 Requirements for WCAG 2.1")</span>

WCAG 2.1 meets a set of [requirements for WCAG 2.1](https://w3c.github.io/wcag21/requirements/) which, in turn, inherit requirements from WCAG 2.0. Requirements structure the overall framework of guidelines and ensure backwards compatibility. The Working Group also used a less formal set of acceptance criteria for success criteria, to help ensure success criteria are similar in style and quality to those in WCAG 2.0. These requirements constrained what could be included in WCAG 2.1. This constraint was important to preserve its nature as a dot-release of WCAG 2.

### <span class="secno">0.5 </span>Comparison with WCAG 2.0<span class="permalink">[§](#comparison-with-wcag-2-0 "Permalink for 0.5 Comparison with WCAG 2.0")</span>

WCAG 2.1 was initiated with the goal to improve accessibility guidance for three major groups: users with cognitive or learning disabilities, users with low vision, and users with disabilities on mobile devices. Many ways to meet these needs were proposed and evaluated, and a set of these were refined by the Working Group. Structural requirements inherited from WCAG 2.0, clarity and impact of proposals, and timeline led to the final set of success criteria included in this version. The Working Group considers that WCAG 2.1 incrementally advances web content accessibility guidance for all these areas, but underscores that not all user needs are met by these guidelines.

WCAG 2.1 builds on and is backwards compatible with WCAG 2.0, meaning web pages that conform to WCAG 2.1 also conform to WCAG 2.0. Authors that are required by policy to conform with WCAG 2.0 will be able to update content to WCAG 2.1 without losing conformance with WCAG 2.0. Authors following both sets of guidelines should be aware of the following differences:

#### <span class="secno">0.5.1 </span>New Features in WCAG 2.1<span class="permalink">[§](#new-features-in-wcag-2-1 "Permalink for 0.5.1 New Features in WCAG 2.1")</span>

WCAG 2.1 extends WCAG 2.0 by adding new success criteria, definitions to support them, guidelines to organize the additions, and a couple additions to the conformance section. This additive approach helps to make it clear that sites which conform to WCAG 2.1 also conform to WCAG 2.0, thereby meeting conformance obligations that are specific to WCAG 2.0. The Accessibility Guidelines Working Group recommends that sites adopt WCAG 2.1 as their new conformance target, even if formal obligations mention WCAG 2.0, to provide improved accessibility and to anticipate future policy changes.

The following Success Criteria are new in WCAG 2.1:

-   1.3.4 [Orientation](#orientation) (AA)
-   1.3.5 [Identify Input Purpose](#identify-input-purpose) (AA)
-   1.3.6 [Identify Purpose](#identify-purpose) (AAA)
-   1.4.10 [Reflow](#reflow) (AA)
-   1.4.11 [Non-Text Contrast](#non-text-contrast) (AA)
-   1.4.12 [Text Spacing](#text-spacing) (AA)
-   1.4.13 [Content on Hover or Focus](#content-on-hover-or-focus) (AA)
-   2.2.6 [Timeouts](#timeouts) (AAA)
-   2.3.3 [Animation from Interactions](#animation-from-interactions) (AAA)
-   2.5.1 [Pointer Gestures](#pointer-gestures) (A)
-   2.5.2 [Pointer Cancellation](#pointer-cancellation) (A)
-   2.5.3 [Character Key Shortcuts](#character-key-shortcuts) (A)
-   2.5.4 [Label in Name](#label-in-name) (A)
-   2.5.5 [Target Size](#target-size) (AAA)
-   2.5.6 [Concurrent Input Mechanisms](#concurrent-input-mechanisms) (AAA)
-   2.5.7 [Motion Actuation](#motion-actuation) (A)
-   4.1.3 [Status Messages](#status-messages) (AA)

Many of these success criteria reference new terms that have also been added to the glossary and form part of the normative requirements of the success criteria.

In the Conformance section, a third note about page variants has been added to [Full Pages](#cc2), and an option for machine-readable metadata added to [Optional Components of a Conformance Claim](#conformance-optional).

#### <span class="secno">0.5.2 </span>Numbering in WCAG 2.1<span class="permalink">[§](#numbering-in-wcag-2-1 "Permalink for 0.5.2 Numbering in WCAG 2.1")</span>

In order to avoid confusion for implementers for whom backwards compatibility to WCAG 2.0 is important, new success criteria in WCAG 2.1 have been appended to the end of the set of success criteria within their guideline. This avoids the need to change the section number of success criteria from WCAG 2.0, which would be caused by inserting new success critera between existing success ccriteria in the guideline, but it means success criteria in each guideline are no longer grouped by conformance level. The order of success criteria within each guideline does not imply information about conformance level; only the conformance level indicator (A / AA / AAA) on the success criterion itself indicates this. The [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/) provides ways to view success criteria grouped by conformance level, along with many other filter and sort options.

#### <span class="secno">0.5.3 </span>Conformance to WCAG 2.1<span class="permalink">[§](#conformance-to-wcag-2-1 "Permalink for 0.5.3 Conformance to WCAG 2.1")</span>

WCAG 2.1 uses the same conformance model as WCAG 2.0 with a couple additions, which is described in the [Conformance](#conformance) section. It is intended that sites that conform to WCAG 2.1 also conform to WCAG 2.0, which means they meet the requirements of any policies that reference WCAG 2.0, while also better meeting the needs of users on the current Web.

### <span class="secno">0.6 </span>Later Versions of Accessibility Guidelines<span class="permalink">[§](#later-versions-of-accessibility-guidelines "Permalink for 0.6 Later Versions of Accessibility Guidelines")</span>

In parallel with WCAG 2.1, the Accessibility Guidelines Working Group is developing another major version of accessibility guidelines. The result of this work is expected to be a more substantial restructuring of web accessibility guidance than would be realistic for dot-releases of WCAG 2. The work follows a research-focused, user-centered design methodology to produce the most effective and flexible outcome, including the roles of content authoring, user agent support, and authoring tool support. This is a multi-year effort, so WCAG 2.1 is needed as an interim measure to provide updated web accessibility guidance to reflect changes on the web since the publication of WCAG 2.0. The Working Group might also develop additional interim versions, continuing with WCAG 2.2, on a similar short timeline to provide additional support while the major version is completed.

<span class="secno">1. </span> Perceivable <span class="permalink">[§](#perceivable "Permalink for 1.  Perceivable ")</span>
----------------------------------------------------------------------------------------------------------------------------

Information and user interface components must be presentable to users in ways they can perceive.

### <span class="secno">Guideline 1.1 </span>Text Alternatives<span class="permalink">[§](#text-alternatives "Permalink for 1.1 Text Alternatives")</span>

Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.

#### <span class="secno">Success Criterion 1.1.1 </span>Non-text Content<span class="permalink">[§](#non-text-content "Permalink for 1.1.1 Non-text Content")</span>

[How to Meet Non-text Content](https://www.w3.org/WAI/WCAG21/quickref/#non-text-content) <span class="screenreader">|</span>  
[Understanding Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)

(Level A)

All <a href="#dfn-non-text-content" class="internalDFN">non-text content</a> that is presented to the user has a <a href="#dfn-text-alternative" class="internalDFN">text alternative</a> that serves the equivalent purpose, except for the situations listed below.

Controls, Input  
If non-text content is a control or accepts user input, then it has a <a href="#dfn-name" class="internalDFN">name</a> that describes its purpose. (Refer to [Success Criterion 4.1.2](#name-role-value) for additional requirements for controls and content that accepts user input.)

Time-Based Media  
If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to [Guideline 1.2](#time-based-media) for additional requirements for media.)

Test  
If non-text content is a test or exercise that would be invalid if presented in <a href="#dfn-text" class="internalDFN">text</a>, then text alternatives at least provide descriptive identification of the non-text content.

Sensory  
If non-text content is primarily intended to create a <a href="#dfn-specific-sensory-experience" class="internalDFN">specific sensory experience</a>, then text alternatives at least provide descriptive identification of the non-text content.

<a href="#dfn-captcha" class="internalDFN">CAPTCHA</a>  
If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.

Decoration, Formatting, Invisible  
If non-text content is <a href="#dfn-pure-decoration" class="internalDFN">pure decoration</a>, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by <a href="#dfn-assistive-technologies" class="internalDFN">assistive technology</a>.

### <span class="secno">Guideline 1.2 </span>Time-based Media<span class="permalink">[§](#time-based-media "Permalink for 1.2 Time-based Media")</span>

Provide alternatives for time-based media.

#### <span class="secno">Success Criterion 1.2.1 </span>Audio-only and Video-only (Prerecorded)<span class="permalink">[§](#audio-only-and-video-only-prerecorded "Permalink for 1.2.1 Audio-only and Video-only (Prerecorded)")</span>

[How to Meet Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded) <span class="screenreader">|</span>  
[Understanding Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html)

(Level A)

For <a href="#dfn-prerecorded" class="internalDFN">prerecorded</a> <a href="#dfn-audio-only" class="internalDFN">audio-only</a> and prerecorded <a href="#dfn-video-only" class="internalDFN">video-only</a> media, the following are true, except when the audio or video is a <a href="#dfn-media-alternative-for-text" class="internalDFN">media alternative for text</a> and is clearly labeled as such:

Prerecorded Audio-only  
An <a href="#dfn-alternative-for-time-based-media" class="internalDFN">alternative for time-based media</a> is provided that presents equivalent information for prerecorded audio-only content.

Prerecorded Video-only  
Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

#### <span class="secno">Success Criterion 1.2.2 </span>Captions (Prerecorded)<span class="permalink">[§](#captions-prerecorded "Permalink for 1.2.2 Captions (Prerecorded)")</span>

[How to Meet Captions (Prerecorded)](https://www.w3.org/WAI/WCAG21/quickref/#captions-prerecorded) <span class="screenreader">|</span>  
[Understanding Captions (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html)

(Level A)

<a href="#dfn-captions" class="internalDFN">Captions</a> are provided for all <a href="#dfn-prerecorded" class="internalDFN">prerecorded</a> <a href="#dfn-audio" class="internalDFN">audio</a> content in <a href="#dfn-synchronized-media" class="internalDFN">synchronized media</a>, except when the media is a <a href="#dfn-media-alternative-for-text" class="internalDFN">media alternative for text</a> and is clearly labeled as such.

#### <span class="secno">Success Criterion 1.2.3 </span>Audio Description or Media Alternative (Prerecorded)<span class="permalink">[§](#audio-description-or-media-alternative-prerecorded "Permalink for 1.2.3 Audio Description or Media Alternative (Prerecorded)")</span>

[How to Meet Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/quickref/#audio-description-or-media-alternative-prerecorded) <span class="screenreader">|</span>  
[Understanding Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html)

(Level A)

An <a href="#dfn-alternative-for-time-based-media" class="internalDFN">alternative for time-based media</a> or <a href="#dfn-audio-descriptions" class="internalDFN">audio description</a> of the <a href="#dfn-prerecorded" class="internalDFN">prerecorded</a> <a href="#dfn-video" class="internalDFN">video</a> content is provided for <a href="#dfn-synchronized-media" class="internalDFN">synchronized media</a>, except when the media is a <a href="#dfn-media-alternative-for-text" class="internalDFN">media alternative for text</a> and is clearly labeled as such.

#### <span class="secno">Success Criterion 1.2.4 </span>Captions (Live)<span class="permalink">[§](#captions-live "Permalink for 1.2.4 Captions (Live)")</span>

[How to Meet Captions (Live)](https://www.w3.org/WAI/WCAG21/quickref/#captions-live) <span class="screenreader">|</span>  
[Understanding Captions (Live)](https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html)

(Level AA)

<a href="#dfn-captions" class="internalDFN">Captions</a> are provided for all <a href="#dfn-live" class="internalDFN">live</a> <a href="#dfn-audio" class="internalDFN">audio</a> content in <a href="#dfn-synchronized-media" class="internalDFN">synchronized media</a>.

#### <span class="secno">Success Criterion 1.2.5 </span>Audio Description (Prerecorded)<span class="permalink">[§](#audio-description-prerecorded "Permalink for 1.2.5 Audio Description (Prerecorded)")</span>

[How to Meet Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/quickref/#audio-description-prerecorded) <span class="screenreader">|</span>  
[Understanding Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html)

(Level AA)

<a href="#dfn-audio-descriptions" class="internalDFN">Audio description</a> is provided for all <a href="#dfn-prerecorded" class="internalDFN">prerecorded</a> <a href="#dfn-video" class="internalDFN">video</a> content in <a href="#dfn-synchronized-media" class="internalDFN">synchronized media</a>.

#### <span class="secno">Success Criterion 1.2.6 </span>Sign Language (Prerecorded)<span class="permalink">[§](#sign-language-prerecorded "Permalink for 1.2.6 Sign Language (Prerecorded)")</span>

[How to Meet Sign Language (Prerecorded)](https://www.w3.org/WAI/WCAG21/quickref/#sign-language-prerecorded) <span class="screenreader">|</span>  
[Understanding Sign Language (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded.html)

(Level AAA)

<a href="#dfn-sign-language-interpretation" class="internalDFN">Sign language interpretation</a> is provided for all <a href="#dfn-prerecorded" class="internalDFN">prerecorded</a> <a href="#dfn-audio" class="internalDFN">audio</a> content in <a href="#dfn-synchronized-media" class="internalDFN">synchronized media</a>.

#### <span class="secno">Success Criterion 1.2.7 </span>Extended Audio Description (Prerecorded)<span class="permalink">[§](#extended-audio-description-prerecorded "Permalink for 1.2.7 Extended Audio Description (Prerecorded)")</span>

[How to Meet Extended Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/quickref/#extended-audio-description-prerecorded) <span class="screenreader">|</span>  
[Understanding Extended Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded.html)

(Level AAA)

Where pauses in foreground audio are insufficient to allow <a href="#dfn-audio-descriptions" class="internalDFN">audio descriptions</a> to convey the sense of the video, <a href="#dfn-extended-audio-description" class="internalDFN">extended audio description</a> is provided for all <a href="#dfn-prerecorded" class="internalDFN">prerecorded</a> <a href="#dfn-video" class="internalDFN">video</a> content in <a href="#dfn-synchronized-media" class="internalDFN">synchronized media</a>.

#### <span class="secno">Success Criterion 1.2.8 </span>Media Alternative (Prerecorded)<span class="permalink">[§](#media-alternative-prerecorded "Permalink for 1.2.8 Media Alternative (Prerecorded)")</span>

[How to Meet Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/quickref/#media-alternative-prerecorded) <span class="screenreader">|</span>  
[Understanding Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded.html)

(Level AAA)

An <a href="#dfn-alternative-for-time-based-media" class="internalDFN">alternative for time-based media</a> is provided for all <a href="#dfn-prerecorded" class="internalDFN">prerecorded</a> <a href="#dfn-synchronized-media" class="internalDFN">synchronized media</a> and for all prerecorded <a href="#dfn-video-only" class="internalDFN">video-only</a> media.

#### <span class="secno">Success Criterion 1.2.9 </span>Audio-only (Live)<span class="permalink">[§](#audio-only-live "Permalink for 1.2.9 Audio-only (Live)")</span>

[How to Meet Audio-only (Live)](https://www.w3.org/WAI/WCAG21/quickref/#audio-only-live) <span class="screenreader">|</span>  
[Understanding Audio-only (Live)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live.html)

(Level AAA)

An <a href="#dfn-alternative-for-time-based-media" class="internalDFN">alternative for time-based media</a> that presents equivalent information for <a href="#dfn-live" class="internalDFN">live</a> <a href="#dfn-audio-only" class="internalDFN">audio-only</a> content is provided.

### <span class="secno">Guideline 1.3 </span>Adaptable<span class="permalink">[§](#adaptable "Permalink for 1.3 Adaptable")</span>

Create content that can be presented in different ways (for example simpler layout) without losing information or structure.

#### <span class="secno">Success Criterion 1.3.1 </span>Info and Relationships<span class="permalink">[§](#info-and-relationships "Permalink for 1.3.1 Info and Relationships")</span>

[How to Meet Info and Relationships](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) <span class="screenreader">|</span>  
[Understanding Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

(Level A)

Information, <a href="#dfn-structure" class="internalDFN">structure</a>, and <a href="#dfn-relationships" class="internalDFN">relationships</a> conveyed through <a href="#dfn-presentation" class="internalDFN">presentation</a> can be <a href="#dfn-programmatically-determinable" class="internalDFN">programmatically determined</a> or are available in text.

#### <span class="secno">Success Criterion 1.3.2 </span>Meaningful Sequence<span class="permalink">[§](#meaningful-sequence "Permalink for 1.3.2 Meaningful Sequence")</span>

[How to Meet Meaningful Sequence](https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence) <span class="screenreader">|</span>  
[Understanding Meaningful Sequence](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html)

(Level A)

When the sequence in which content is presented affects its meaning, a <a href="#dfn-correct-reading-sequence" class="internalDFN">correct reading sequence</a> can be <a href="#dfn-programmatically-determinable" class="internalDFN">programmatically determined</a>.

#### <span class="secno">Success Criterion 1.3.3 </span>Sensory Characteristics<span class="permalink">[§](#sensory-characteristics "Permalink for 1.3.3 Sensory Characteristics")</span>

[How to Meet Sensory Characteristics](https://www.w3.org/WAI/WCAG21/quickref/#sensory-characteristics) <span class="screenreader">|</span>  
[Understanding Sensory Characteristics](https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html)

(Level A)

Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound.

Note

For requirements related to color, refer to [Guideline 1.4](#distinguishable).

#### <span class="secno">Success Criterion 1.3.4 </span>Orientation<span class="permalink">[§](#orientation "Permalink for 1.3.4 Orientation")</span>

[How to Meet Orientation](https://www.w3.org/WAI/WCAG21/quickref/#orientation) <span class="screenreader">|</span>  
[Understanding Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)

(Level AA)

Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is <a href="#dfn-essential" class="internalDFN">essential</a>.

Note

Examples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where binary display orientation is not applicable.

#### <span class="secno">Success Criterion 1.3.5 </span>Identify Input Purpose<span class="permalink">[§](#identify-input-purpose "Permalink for 1.3.5 Identify Input Purpose")</span>

[How to Meet Identify Input Purpose](https://www.w3.org/WAI/WCAG21/quickref/#identify-input-purpose) <span class="screenreader">|</span>  
[Understanding Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)

(Level AA)

The purpose of each input field collecting information about the user can be <a href="#dfn-programmatically-determinable" class="internalDFN">programmatically determined</a> when:

-   The input field serves a purpose identified in the [Input Purposes for User Interface Components section](#input-purposes); and
-   The content is implemented using technologies with support for identifying the expected meaning for form input data.

#### <span class="secno">Success Criterion 1.3.6 </span>Identify Purpose<span class="permalink">[§](#identify-purpose "Permalink for 1.3.6 Identify Purpose")</span>

[How to Meet Identify Purpose](https://www.w3.org/WAI/WCAG21/quickref/#identify-purpose) <span class="screenreader">|</span>  
[Understanding Identify Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html)

(Level AAA)

In content implemented using markup languages, the purpose of <a href="#dfn-user-interface-components" class="internalDFN">User Interface Components</a>, icons, and <a href="#dfn-regions" class="internalDFN">regions</a> can be <a href="#dfn-programmatically-determinable" class="internalDFN">programmatically determined</a>.

### <span class="secno">Guideline 1.4 </span>Distinguishable<span class="permalink">[§](#distinguishable "Permalink for 1.4 Distinguishable")</span>

Make it easier for users to see and hear content including separating foreground from background.

#### <span class="secno">Success Criterion 1.4.1 </span>Use of Color<span class="permalink">[§](#use-of-color "Permalink for 1.4.1 Use of Color")</span>

[How to Meet Use of Color](https://www.w3.org/WAI/WCAG21/quickref/#use-of-color) <span class="screenreader">|</span>  
[Understanding Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)

(Level A)

Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

Note

This success criterion addresses color perception specifically. Other forms of perception are covered in [Guideline 1.3](#adaptable) including programmatic access to color and other visual presentation coding.

#### <span class="secno">Success Criterion 1.4.2 </span>Audio Control<span class="permalink">[§](#audio-control "Permalink for 1.4.2 Audio Control")</span>

[How to Meet Audio Control](https://www.w3.org/WAI/WCAG21/quickref/#audio-control) <span class="screenreader">|</span>  
[Understanding Audio Control](https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html)

(Level A)

If any audio on a Web page plays automatically for more than 3 seconds, either a <a href="#dfn-mechanism" class="internalDFN">mechanism</a> is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.

Note

Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](#cc5).

#### <span class="secno">Success Criterion 1.4.3 </span>Contrast (Minimum)<span class="permalink">[§](#contrast-minimum "Permalink for 1.4.3 Contrast (Minimum)")</span>

[How to Meet Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum) <span class="screenreader">|</span>  
[Understanding Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)

(Level AA)

The visual presentation of <a href="#dfn-text" class="internalDFN">text</a> and <a href="#dfn-images-of-text" class="internalDFN">images of text</a> has a <a href="#dfn-contrast-ratio" class="internalDFN">contrast ratio</a> of at least 4.5:1, except for the following:

Large Text  
<a href="#dfn-large-scale" class="internalDFN">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 3:1;

Incidental  
Text or images of text that are part of an inactive <a href="#dfn-user-interface-components" class="internalDFN">user interface component</a>, that are <a href="#dfn-pure-decoration" class="internalDFN">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.

Logotypes  
Text that is part of a logo or brand name has no contrast requirement.

#### <span class="secno">Success Criterion 1.4.4 </span>Resize text<span class="permalink">[§](#resize-text "Permalink for 1.4.4 Resize text")</span>

[How to Meet Resize text](https://www.w3.org/WAI/WCAG21/quickref/#resize-text) <span class="screenreader">|</span>  
[Understanding Resize text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html)

(Level AA)

Except for <a href="#dfn-captions" class="internalDFN">captions</a> and <a href="#dfn-images-of-text" class="internalDFN">images of text</a>, <a href="#dfn-text" class="internalDFN">text</a> can be resized without <a href="#dfn-assistive-technologies" class="internalDFN">assistive technology</a> up to 200 percent without loss of content or functionality.

#### <span class="secno">Success Criterion 1.4.5 </span>Images of Text<span class="permalink">[§](#images-of-text "Permalink for 1.4.5 Images of Text")</span>

[How to Meet Images of Text](https://www.w3.org/WAI/WCAG21/quickref/#images-of-text) <span class="screenreader">|</span>  
[Understanding Images of Text](https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html)

(Level AA)

If the technologies being used can achieve the visual presentation, <a href="#dfn-text" class="internalDFN">text</a> is used to convey information rather than <a href="#dfn-images-of-text" class="internalDFN">images of text</a> except for the following:

Customizable  
The image of text can be <a href="#dfn-visually-customized" class="internalDFN">visually customized</a> to the user's requirements;

Essential  
A particular presentation of text is <a href="#dfn-essential" class="internalDFN">essential</a> to the information being conveyed.

Note

Logotypes (text that is part of a logo or brand name) are considered essential.

#### <span class="secno">Success Criterion 1.4.6 </span>Contrast (Enhanced)<span class="permalink">[§](#contrast-enhanced "Permalink for 1.4.6 Contrast (Enhanced)")</span>

[How to Meet Contrast (Enhanced)](https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced) <span class="screenreader">|</span>  
[Understanding Contrast (Enhanced)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)

(Level AAA)

The visual presentation of <a href="#dfn-text" class="internalDFN">text</a> and <a href="#dfn-images-of-text" class="internalDFN">images of text</a> has a <a href="#dfn-contrast-ratio" class="internalDFN">contrast ratio</a> of at least 7:1, except for the following:

Large Text  
<a href="#dfn-large-scale" class="internalDFN">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 4.5:1;

Incidental  
Text or images of text that are part of an inactive <a href="#dfn-user-interface-components" class="internalDFN">user interface component</a>, that are <a href="#dfn-pure-decoration" class="internalDFN">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.

Logotypes  
Text that is part of a logo or brand name has no contrast requirement.

#### <span class="secno">Success Criterion 1.4.7 </span>Low or No Background Audio<span class="permalink">[§](#low-or-no-background-audio "Permalink for 1.4.7 Low or No Background Audio")</span>

[How to Meet Low or No Background Audio](https://www.w3.org/WAI/WCAG21/quickref/#low-or-no-background-audio) <span class="screenreader">|</span>  
[Understanding Low or No Background Audio](https://www.w3.org/WAI/WCAG21/Understanding/low-or-no-background-audio.html)

(Level AAA)

For <a href="#dfn-prerecorded" class="internalDFN">prerecorded</a> <a href="#dfn-audio-only" class="internalDFN">audio-only</a> content that (1) contains primarily speech in the foreground, (2) is not an audio <a href="#dfn-captcha" class="internalDFN">CAPTCHA</a> or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true:

No Background  
The audio does not contain background sounds.

Turn Off  
The background sounds can be turned off.

20 dB  
The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds.

Note

Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content.

#### <span class="secno">Success Criterion 1.4.8 </span>Visual Presentation<span class="permalink">[§](#visual-presentation "Permalink for 1.4.8 Visual Presentation")</span>

[How to Meet Visual Presentation](https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation) <span class="screenreader">|</span>  
[Understanding Visual Presentation](https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html)

(Level AAA)

For the visual presentation of <a href="#dfn-blocks-of-text" class="internalDFN">blocks of text</a>, a <a href="#dfn-mechanism" class="internalDFN">mechanism</a> is available to achieve the following:

-   Foreground and background colors can be selected by the user.
-   Width is no more than 80 characters or glyphs (40 if CJK).
-   Text is not justified (aligned to both the left and the right margins).
-   Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.
-   Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text <a href="#dfn-on-a-full-screen-window" class="internalDFN">on a full-screen window</a>.

#### <span class="secno">Success Criterion 1.4.9 </span>Images of Text (No Exception)<span class="permalink">[§](#images-of-text-no-exception "Permalink for 1.4.9 Images of Text (No Exception)")</span>

[How to Meet Images of Text (No Exception)](https://www.w3.org/WAI/WCAG21/quickref/#images-of-text-no-exception) <span class="screenreader">|</span>  
[Understanding Images of Text (No Exception)](https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html)

(Level AAA)

<a href="#dfn-images-of-text" class="internalDFN">Images of text</a> are only used for <a href="#dfn-pure-decoration" class="internalDFN">pure decoration</a> or where a particular presentation of <a href="#dfn-text" class="internalDFN">text</a> is <a href="#dfn-essential" class="internalDFN">essential</a> to the information being conveyed.

Note

Logotypes (text that is part of a logo or brand name) are considered essential.

#### <span class="secno">Success Criterion 1.4.10 </span>Reflow<span class="permalink">[§](#reflow "Permalink for 1.4.10 Reflow")</span>

[How to Meet Reflow](https://www.w3.org/WAI/WCAG21/quickref/#reflow) <span class="screenreader">|</span>  
[Understanding Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)

(Level AA)

Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:

-   Vertical scrolling content at a width equivalent to 320 <a href="#dfn-css-pixels" class="internalDFN">CSS pixels</a>;
-   Horizontal scrolling content at a height equivalent to 256 <a href="#dfn-css-pixels" class="internalDFN">CSS pixels</a>;

Except for parts of the content which require two-dimensional layout for usage or meaning.

Note

Note: 320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom. For web content which are designed to scroll horizontally (e.g. with vertical text), the 256 CSS pixels is equivalent to a starting viewport height of 1024px at 400% zoom.

Note

Examples of content which require two-dimensional layout are images, maps, diagrams, video, games, presentations, data tables, and interfaces where it is necessary to keep toolbars in view while manipulating content.

#### <span class="secno">Success Criterion 1.4.11 </span>Non-text Contrast<span class="permalink">[§](#non-text-contrast "Permalink for 1.4.11 Non-text Contrast")</span>

[How to Meet Non-text Contrast](https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast) <span class="screenreader">|</span>  
[Understanding Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)

(Level AA)

The visual <a href="#dfn-presentation" class="internalDFN">presentation</a> of the following have a <a href="#dfn-contrast-ratio" class="internalDFN">contrast ratio</a> of at least 3:1 against adjacent color(s):

User Interface Components  
Visual information used to indicate <a href="#dfn-states" class="internalDFN">states</a> and boundaries of <a href="#dfn-user-interface-components" class="internalDFN">user interface components</a>, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;

Graphical Objects  
Parts of graphics required to understand the content, except when a particular presentation of graphics is <a href="#dfn-essential" class="internalDFN">essential</a> to the information being conveyed.

#### <span class="secno">Success Criterion 1.4.12 </span>Text Spacing<span class="permalink">[§](#text-spacing "Permalink for 1.4.12 Text Spacing")</span>

[How to Meet Text Spacing](https://www.w3.org/WAI/WCAG21/quickref/#text-spacing) <span class="screenreader">|</span>  
[Understanding Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)

(Level AA)

In content implemented using markup languages that support the following <a href="#dfn-text" class="internalDFN">text</a> <a href="#dfn-style-properties" class="internalDFN">style properties</a>, no loss of content or functionality occurs by setting all of the following and by changing no other style property:

-   Line height (line spacing) to at least 1.5 times the font size;
-   Spacing following paragraphs to at least 2 times the font size;
-   Letter spacing (tracking) to at least 0.12 times the font size;
-   Word spacing to at least 0.16 times the font size.

Exception: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.

#### <span class="secno">Success Criterion 1.4.13 </span>Content on Hover or Focus<span class="permalink">[§](#content-on-hover-or-focus "Permalink for 1.4.13 Content on Hover or Focus")</span>

[How to Meet Content on Hover or Focus](https://www.w3.org/WAI/WCAG21/quickref/#content-on-hover-or-focus) <span class="screenreader">|</span>  
[Understanding Content on Hover or Focus](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)

(Level AA)

Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:

Dismissable  
A <a href="#dfn-mechanism" class="internalDFN">mechanism</a> is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an <a href="#dfn-input-error" class="internalDFN">input error</a> or does not obscure or replace other content;

Hoverable  
If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;

Persistent  
The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.

Exception: The visual presentation of the additional content is controlled by the user agent and is not modified by the author.

Note

Examples of additional content controlled by the user agent include browser tooltips created through use of the HTML [`title` attribute](https://www.w3.org/TR/html/dom.html#the-title-attribute).

Note

Custom tooltips, sub-menus, and other nonmodal popups that display on hover and focus are examples of additional content covered by this criterion.

<span class="secno">2. </span>Operable <span class="permalink">[§](#operable "Permalink for 2. Operable ")</span>
-----------------------------------------------------------------------------------------------------------------

User interface components and navigation must be operable.

### <span class="secno">Guideline 2.1 </span>Keyboard Accessible<span class="permalink">[§](#keyboard-accessible "Permalink for 2.1 Keyboard Accessible")</span>

Make all functionality available from a keyboard.

#### <span class="secno">Success Criterion 2.1.1 </span>Keyboard<span class="permalink">[§](#keyboard "Permalink for 2.1.1 Keyboard")</span>

[How to Meet Keyboard](https://www.w3.org/WAI/WCAG21/quickref/#keyboard) <span class="screenreader">|</span>  
[Understanding Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html)

(Level A)

All <a href="#dfn-functionality" class="internalDFN">functionality</a> of the content is operable through a <a href="#dfn-keyboard-interface" class="internalDFN">keyboard interface</a> without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

Note

This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.

Note

This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.

#### <span class="secno">Success Criterion 2.1.2 </span>No Keyboard Trap<span class="permalink">[§](#no-keyboard-trap "Permalink for 2.1.2 No Keyboard Trap")</span>

[How to Meet No Keyboard Trap](https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap) <span class="screenreader">|</span>  
[Understanding No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html)

(Level A)

If keyboard focus can be moved to a component of the page using a <a href="#dfn-keyboard-interface" class="internalDFN">keyboard interface</a>, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.

Note

Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](#cc5).

#### <span class="secno">Success Criterion 2.1.3 </span>Keyboard (No Exception)<span class="permalink">[§](#keyboard-no-exception "Permalink for 2.1.3 Keyboard (No Exception)")</span>

[How to Meet Keyboard (No Exception)](https://www.w3.org/WAI/WCAG21/quickref/#keyboard-no-exception) <span class="screenreader">|</span>  
[Understanding Keyboard (No Exception)](https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html)

(Level AAA)

All <a href="#dfn-functionality" class="internalDFN">functionality</a> of the content is operable through a <a href="#dfn-keyboard-interface" class="internalDFN">keyboard interface</a> without requiring specific timings for individual keystrokes.

#### <span class="secno">Success Criterion 2.1.4 </span>Character Key Shortcuts<span class="permalink">[§](#character-key-shortcuts "Permalink for 2.1.4 Character Key Shortcuts")</span>

[How to Meet Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/quickref/#character-key-shortcuts) <span class="screenreader">|</span>  
[Understanding Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html)

(Level A)

If a <a href="#dfn-keyboard-shortcuts" class="internalDFN">keyboard shortcut</a> is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:

Turn off  
A <a href="#dfn-mechanism" class="internalDFN">mechanism</a> is available to turn the shortcut off;

Remap  
A mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc).

Active only on focus  
The keyboard shortcut for a <a href="#dfn-user-interface-components" class="internalDFN">user interface component</a> is only active when that component has focus.

### <span class="secno">Guideline 2.2 </span>Enough Time<span class="permalink">[§](#enough-time "Permalink for 2.2 Enough Time")</span>

Provide users enough time to read and use content.

#### <span class="secno">Success Criterion 2.2.1 </span>Timing Adjustable<span class="permalink">[§](#timing-adjustable "Permalink for 2.2.1 Timing Adjustable")</span>

[How to Meet Timing Adjustable](https://www.w3.org/WAI/WCAG21/quickref/#timing-adjustable) <span class="screenreader">|</span>  
[Understanding Timing Adjustable](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html)

(Level A)

For each time limit that is set by the content, at least one of the following is true:

Turn off  
The user is allowed to turn off the time limit before encountering it; or

Adjust  
The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or

Extend  
The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or

Real-time Exception  
The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or

Essential Exception  
The time limit is <a href="#dfn-essential" class="internalDFN">essential</a> and extending it would invalidate the activity; or

20 Hour Exception  
The time limit is longer than 20 hours.

Note

This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with [Success Criterion 3.2.1](#on-focus), which puts limits on changes of content or context as a result of user action.

#### <span class="secno">Success Criterion 2.2.2 </span>Pause, Stop, Hide<span class="permalink">[§](#pause-stop-hide "Permalink for 2.2.2 Pause, Stop, Hide")</span>

[How to Meet Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide) <span class="screenreader">|</span>  
[Understanding Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html)

(Level A)

For moving, <a href="#dfn-blinking" class="internalDFN">blinking</a>, scrolling, or auto-updating information, all of the following are true:

Moving, blinking, scrolling  
For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to <a href="#dfn-pause" class="internalDFN">pause</a>, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is <a href="#dfn-essential" class="internalDFN">essential</a>; and

Auto-updating  
For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

Note

For requirements related to flickering or flashing content, refer to [Guideline 2.3](#seizures-and-physical-reactions).

Note

Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](#cc5).

Note

Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.

Note

An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.

#### <span class="secno">Success Criterion 2.2.3 </span>No Timing<span class="permalink">[§](#no-timing "Permalink for 2.2.3 No Timing")</span>

[How to Meet No Timing](https://www.w3.org/WAI/WCAG21/quickref/#no-timing) <span class="screenreader">|</span>  
[Understanding No Timing](https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html)

(Level AAA)

Timing is not an <a href="#dfn-essential" class="internalDFN">essential</a> part of the event or activity presented by the content, except for non-interactive <a href="#dfn-synchronized-media" class="internalDFN">synchronized media</a> and <a href="#dfn-real-time-events" class="internalDFN">real-time events</a>.

#### <span class="secno">Success Criterion 2.2.4 </span>Interruptions<span class="permalink">[§](#interruptions "Permalink for 2.2.4 Interruptions")</span>

[How to Meet Interruptions](https://www.w3.org/WAI/WCAG21/quickref/#interruptions) <span class="screenreader">|</span>  
[Understanding Interruptions](https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html)

(Level AAA)

Interruptions can be postponed or suppressed by the user, except interruptions involving an <a href="#dfn-emergency" class="internalDFN">emergency</a>.

#### <span class="secno">Success Criterion 2.2.5 </span>Re-authenticating<span class="permalink">[§](#re-authenticating "Permalink for 2.2.5 Re-authenticating")</span>

[How to Meet Re-authenticating](https://www.w3.org/WAI/WCAG21/quickref/#re-authenticating) <span class="screenreader">|</span>  
[Understanding Re-authenticating](https://www.w3.org/WAI/WCAG21/Understanding/re-authenticating.html)

(Level AAA)

When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.

#### <span class="secno">Success Criterion 2.2.6 </span>Timeouts<span class="permalink">[§](#timeouts "Permalink for 2.2.6 Timeouts")</span>

[How to Meet Timeouts](https://www.w3.org/WAI/WCAG21/quickref/#timeouts) <span class="screenreader">|</span>  
[Understanding Timeouts](https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html)

(Level AAA)

Users are warned of the duration of any <a href="#dfn-user-inactivity" class="internalDFN">user inactivity</a> that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.

Note

Privacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion.

### <span class="secno">Guideline 2.3 </span>Seizures and Physical Reactions<span class="permalink">[§](#seizures-and-physical-reactions "Permalink for 2.3 Seizures and Physical Reactions")</span>

Do not design content in a way that is known to cause seizures or physical reactions.

#### <span class="secno">Success Criterion 2.3.1 </span>Three Flashes or Below Threshold<span class="permalink">[§](#three-flashes-or-below-threshold "Permalink for 2.3.1 Three Flashes or Below Threshold")</span>

[How to Meet Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/quickref/#three-flashes-or-below-threshold) <span class="screenreader">|</span>  
[Understanding Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)

(Level A)

<a href="#dfn-web-page-s" class="internalDFN">Web pages</a> do not contain anything that flashes more than three times in any one second period, or the <a href="#dfn-flashes" class="internalDFN">flash</a> is below the <a href="#dfn-general-flash-and-red-flash-thresholds" class="internalDFN">general flash and red flash thresholds</a>.

Note

Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](#cc5).

#### <span class="secno">Success Criterion 2.3.2 </span>Three Flashes<span class="permalink">[§](#three-flashes "Permalink for 2.3.2 Three Flashes")</span>

[How to Meet Three Flashes](https://www.w3.org/WAI/WCAG21/quickref/#three-flashes) <span class="screenreader">|</span>  
[Understanding Three Flashes](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html)

(Level AAA)

<a href="#dfn-web-page-s" class="internalDFN">Web pages</a> do not contain anything that <a href="#dfn-flashes" class="internalDFN">flashes</a> more than three times in any one second period.

#### <span class="secno">Success Criterion 2.3.3 </span>Animation from Interactions<span class="permalink">[§](#animation-from-interactions "Permalink for 2.3.3 Animation from Interactions")</span>

[How to Meet Animation from Interactions](https://www.w3.org/WAI/WCAG21/quickref/#animation-from-interactions) <span class="screenreader">|</span>  
[Understanding Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)

(Level AAA)

<a href="#dfn-motion-animation" class="internalDFN">Motion animation</a> triggered by interaction can be disabled, unless the animation is <a href="#dfn-essential" class="internalDFN">essential</a> to the functionality or the information being conveyed.

### <span class="secno">Guideline 2.4 </span>Navigable<span class="permalink">[§](#navigable "Permalink for 2.4 Navigable")</span>

Provide ways to help users navigate, find content, and determine where they are.

#### <span class="secno">Success Criterion 2.4.1 </span>Bypass Blocks<span class="permalink">[§](#bypass-blocks "Permalink for 2.4.1 Bypass Blocks")</span>

[How to Meet Bypass Blocks](https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks) <span class="screenreader">|</span>  
[Understanding Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html)

(Level A)

A <a href="#dfn-mechanism" class="internalDFN">mechanism</a> is available to bypass blocks of content that are repeated on multiple <a href="#dfn-web-page-s" class="internalDFN">Web pages</a>.

#### <span class="secno">Success Criterion 2.4.2 </span>Page Titled<span class="permalink">[§](#page-titled "Permalink for 2.4.2 Page Titled")</span>

[How to Meet Page Titled](https://www.w3.org/WAI/WCAG21/quickref/#page-titled) <span class="screenreader">|</span>  
[Understanding Page Titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

(Level A)

<a href="#dfn-web-page-s" class="internalDFN">Web pages</a> have titles that describe topic or purpose.

#### <span class="secno">Success Criterion 2.4.3 </span>Focus Order<span class="permalink">[§](#focus-order "Permalink for 2.4.3 Focus Order")</span>

[How to Meet Focus Order](https://www.w3.org/WAI/WCAG21/quickref/#focus-order) <span class="screenreader">|</span>  
[Understanding Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)

(Level A)

If a <a href="#dfn-web-page-s" class="internalDFN">Web page</a> can be <a href="#dfn-navigated-sequentially" class="internalDFN">navigated sequentially</a> and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

#### <span class="secno">Success Criterion 2.4.4 </span>Link Purpose (In Context)<span class="permalink">[§](#link-purpose-in-context "Permalink for 2.4.4 Link Purpose (In Context)")</span>

[How to Meet Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context) <span class="screenreader">|</span>  
[Understanding Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html)

(Level A)

The <a href="#dfn-purpose-of-each-link" class="internalDFN">purpose of each link</a> can be determined from the link text alone or from the link text together with its <a href="#dfn-programmatically-determined-link-context" class="internalDFN">programmatically determined link context</a>, except where the purpose of the link would be <a href="#dfn-ambiguous-to-users-in-general" class="internalDFN">ambiguous to users in general</a>.

#### <span class="secno">Success Criterion 2.4.5 </span>Multiple Ways<span class="permalink">[§](#multiple-ways "Permalink for 2.4.5 Multiple Ways")</span>

[How to Meet Multiple Ways](https://www.w3.org/WAI/WCAG21/quickref/#multiple-ways) <span class="screenreader">|</span>  
[Understanding Multiple Ways](https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html)

(Level AA)

More than one way is available to locate a <a href="#dfn-web-page-s" class="internalDFN">Web page</a> within a <a href="#dfn-set-of-web-pages" class="internalDFN">set of Web pages</a> except where the Web Page is the result of, or a step in, a <a href="#dfn-processes" class="internalDFN">process</a>.

#### <span class="secno">Success Criterion 2.4.6 </span>Headings and Labels<span class="permalink">[§](#headings-and-labels "Permalink for 2.4.6 Headings and Labels")</span>

[How to Meet Headings and Labels](https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels) <span class="screenreader">|</span>  
[Understanding Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html)

(Level AA)

Headings and <a href="#dfn-labels" class="internalDFN">labels</a> describe topic or purpose.

#### <span class="secno">Success Criterion 2.4.7 </span>Focus Visible<span class="permalink">[§](#focus-visible "Permalink for 2.4.7 Focus Visible")</span>

[How to Meet Focus Visible](https://www.w3.org/WAI/WCAG21/quickref/#focus-visible) <span class="screenreader">|</span>  
[Understanding Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

(Level AA)

Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

#### <span class="secno">Success Criterion 2.4.8 </span>Location<span class="permalink">[§](#location "Permalink for 2.4.8 Location")</span>

[How to Meet Location](https://www.w3.org/WAI/WCAG21/quickref/#location) <span class="screenreader">|</span>  
[Understanding Location](https://www.w3.org/WAI/WCAG21/Understanding/location.html)

(Level AAA)

Information about the user's location within a <a href="#dfn-set-of-web-pages" class="internalDFN">set of Web pages</a> is available.

#### <span class="secno">Success Criterion 2.4.9 </span>Link Purpose (Link Only)<span class="permalink">[§](#link-purpose-link-only "Permalink for 2.4.9 Link Purpose (Link Only)")</span>

[How to Meet Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-link-only) <span class="screenreader">|</span>  
[Understanding Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html)

(Level AAA)

A <a href="#dfn-mechanism" class="internalDFN">mechanism</a> is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be <a href="#dfn-ambiguous-to-users-in-general" class="internalDFN">ambiguous to users in general</a>.

#### <span class="secno">Success Criterion 2.4.10 </span>Section Headings<span class="permalink">[§](#section-headings "Permalink for 2.4.10 Section Headings")</span>

[How to Meet Section Headings](https://www.w3.org/WAI/WCAG21/quickref/#section-headings) <span class="screenreader">|</span>  
[Understanding Section Headings](https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html)

(Level AAA)

<a href="#dfn-section" class="internalDFN">Section</a> headings are used to organize the content.

Note

"Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content.

Note

This success criterion covers sections within writing, not <a href="#dfn-user-interface-components" class="internalDFN">user interface components</a>. User Interface components are covered under [Success Criterion 4.1.2](#name-role-value).

### <span class="secno">Guideline 2.5 </span>Input Modalities<span class="permalink">[§](#input-modalities "Permalink for 2.5 Input Modalities")</span>

Make it easier for users to operate functionality through various inputs beyond keyboard

#### <span class="secno">Success Criterion 2.5.1 </span>Pointer Gestures<span class="permalink">[§](#pointer-gestures "Permalink for 2.5.1 Pointer Gestures")</span>

[How to Meet Pointer Gestures](https://www.w3.org/WAI/WCAG21/quickref/#pointer-gestures) <span class="screenreader">|</span>  
[Understanding Pointer Gestures](https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html)

(Level A)

All <a href="#dfn-functionality" class="internalDFN">functionality</a> that uses multipoint or path-based gestures for operation can be operated with a <a href="#dfn-single-pointer" class="internalDFN">single pointer</a> without a path-based gesture, unless a multipoint or path-based gesture is <a href="#dfn-essential" class="internalDFN">essential</a>.

Note

This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).

#### <span class="secno">Success Criterion 2.5.2 </span>Pointer Cancellation<span class="permalink">[§](#pointer-cancellation "Permalink for 2.5.2 Pointer Cancellation")</span>

[How to Meet Pointer Cancellation](https://www.w3.org/WAI/WCAG21/quickref/#pointer-cancellation) <span class="screenreader">|</span>  
[Understanding Pointer Cancellation](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)

(Level A)

For <a href="#dfn-functionality" class="internalDFN">functionality</a> that can be operated using a <a href="#dfn-single-pointer" class="internalDFN">single pointer</a>, at least one of the following is true:

No Down-Event  
The <a href="#dfn-down-event" class="internalDFN">down-event</a> of the pointer is not used to execute any part of the function;

Abort or Undo  
Completion of the function is on the <a href="#dfn-up-event" class="internalDFN">up-event</a>, and a <a href="#dfn-mechanism" class="internalDFN">mechanism</a> is available to abort the function before completion or to undo the function after completion;

Up Reversal  
The up-event reverses any outcome of the preceding down-event;

Essential  
Completing the function on the down-event is <a href="#dfn-essential" class="internalDFN">essential</a>.

Note

Functions that emulate a keyboard or numeric keypad key press are considered essential.

Note

This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).

#### <span class="secno">Success Criterion 2.5.3 </span>Label in Name<span class="permalink">[§](#label-in-name "Permalink for 2.5.3 Label in Name")</span>

[How to Meet Label in Name](https://www.w3.org/WAI/WCAG21/quickref/#label-in-name) <span class="screenreader">|</span>  
[Understanding Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)

(Level A)

For <a href="#dfn-user-interface-components" class="internalDFN">user interface components</a> with <a href="#dfn-labels" class="internalDFN">labels</a> that include <a href="#dfn-text" class="internalDFN">text</a> or <a href="#dfn-images-of-text" class="internalDFN">images of text</a>, the <a href="#dfn-name" class="internalDFN">name</a> contains the text that is presented visually.

Note

A best practice is to have the text of the label at the start of the name.

#### <span class="secno">Success Criterion 2.5.4 </span>Motion Actuation<span class="permalink">[§](#motion-actuation "Permalink for 2.5.4 Motion Actuation")</span>

[How to Meet Motion Actuation](https://www.w3.org/WAI/WCAG21/quickref/#motion-actuation) <span class="screenreader">|</span>  
[Understanding Motion Actuation](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html)

(Level A)

<a href="#dfn-functionality" class="internalDFN">Functionality</a> that can be operated by device motion or user motion can also be operated by <a href="#dfn-user-interface-components" class="internalDFN">user interface components</a> and responding to the motion can be disabled to prevent accidental actuation, except when:

Supported Interface  
The motion is used to operate functionality through an <a href="#dfn-accessibility-supported" class="internalDFN">accessibility supported</a> interface;

Essential  
The motion is <a href="#dfn-essential" class="internalDFN">essential</a> for the function and doing so would invalidate the activity.

#### <span class="secno">Success Criterion 2.5.5 </span>Target Size<span class="permalink">[§](#target-size "Permalink for 2.5.5 Target Size")</span>

[How to Meet Target Size](https://www.w3.org/WAI/WCAG21/quickref/#target-size) <span class="screenreader">|</span>  
[Understanding Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

(Level AAA)

The size of the <a href="#dfn-target" class="internalDFN">target</a> for <a href="#dfn-pointer-inputs" class="internalDFN">pointer inputs</a> is at least 44 by 44 <a href="#dfn-css-pixels" class="internalDFN">CSS pixels</a> except when:

Equivalent  
The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;

Inline  
The target is in a sentence or block of text;

User Agent Control  
The size of the target is determined by the user agent and is not modified by the author;

Essential  
A particular presentation of the target is <a href="#dfn-essential" class="internalDFN">essential</a> to the information being conveyed.

#### <span class="secno">Success Criterion 2.5.6 </span>Concurrent Input Mechanisms<span class="permalink">[§](#concurrent-input-mechanisms "Permalink for 2.5.6 Concurrent Input Mechanisms")</span>

[How to Meet Concurrent Input Mechanisms](https://www.w3.org/WAI/WCAG21/quickref/#concurrent-input-mechanisms) <span class="screenreader">|</span>  
[Understanding Concurrent Input Mechanisms](https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html)

(Level AAA)

Web content does not restrict use of input modalities available on a platform except where the restriction is <a href="#dfn-essential" class="internalDFN">essential</a>, required to ensure the security of the content, or required to respect user settings.

<span class="secno">3. </span> Understandable <span class="permalink">[§](#understandable "Permalink for 3.  Understandable ")</span>
-------------------------------------------------------------------------------------------------------------------------------------

Information and the operation of user interface must be understandable.

### <span class="secno">Guideline 3.1 </span>Readable<span class="permalink">[§](#readable "Permalink for 3.1 Readable")</span>

Make text content readable and understandable.

#### <span class="secno">Success Criterion 3.1.1 </span>Language of Page<span class="permalink">[§](#language-of-page "Permalink for 3.1.1 Language of Page")</span>

[How to Meet Language of Page](https://www.w3.org/WAI/WCAG21/quickref/#language-of-page) <span class="screenreader">|</span>  
[Understanding Language of Page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

(Level A)

The default <a href="#dfn-human-language-s" class="internalDFN">human language</a> of each <a href="#dfn-web-page-s" class="internalDFN">Web page</a> can be <a href="#dfn-programmatically-determinable" class="internalDFN">programmatically determined</a>.

#### <span class="secno">Success Criterion 3.1.2 </span>Language of Parts<span class="permalink">[§](#language-of-parts "Permalink for 3.1.2 Language of Parts")</span>

[How to Meet Language of Parts](https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts) <span class="screenreader">|</span>  
[Understanding Language of Parts](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html)

(Level AA)

The <a href="#dfn-human-language-s" class="internalDFN">human language</a> of each passage or phrase in the content can be <a href="#dfn-programmatically-determinable" class="internalDFN">programmatically determined</a> except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.

#### <span class="secno">Success Criterion 3.1.3 </span>Unusual Words<span class="permalink">[§](#unusual-words "Permalink for 3.1.3 Unusual Words")</span>

[How to Meet Unusual Words](https://www.w3.org/WAI/WCAG21/quickref/#unusual-words) <span class="screenreader">|</span>  
[Understanding Unusual Words](https://www.w3.org/WAI/WCAG21/Understanding/unusual-words.html)

(Level AAA)

A <a href="#dfn-mechanism" class="internalDFN">mechanism</a> is available for identifying specific definitions of words or phrases <a href="#dfn-used-in-an-unusual-or-restricted-way" class="internalDFN">used in an unusual or restricted way</a>, including <a href="#dfn-idioms" class="internalDFN">idioms</a> and <a href="#dfn-jargon" class="internalDFN">jargon</a>.

#### <span class="secno">Success Criterion 3.1.4 </span>Abbreviations<span class="permalink">[§](#abbreviations "Permalink for 3.1.4 Abbreviations")</span>

[How to Meet Abbreviations](https://www.w3.org/WAI/WCAG21/quickref/#abbreviations) <span class="screenreader">|</span>  
[Understanding Abbreviations](https://www.w3.org/WAI/WCAG21/Understanding/abbreviations.html)

(Level AAA)

A <a href="#dfn-mechanism" class="internalDFN">mechanism</a> for identifying the expanded form or meaning of <a href="#dfn-abbreviations" class="internalDFN">abbreviations</a> is available.

#### <span class="secno">Success Criterion 3.1.5 </span>Reading Level<span class="permalink">[§](#reading-level "Permalink for 3.1.5 Reading Level")</span>

[How to Meet Reading Level](https://www.w3.org/WAI/WCAG21/quickref/#reading-level) <span class="screenreader">|</span>  
[Understanding Reading Level](https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html)

(Level AAA)

When text requires reading ability more advanced than the <a href="#dfn-lower-secondary-education-level" class="internalDFN">lower secondary education level</a> after removal of proper names and titles, <a href="#dfn-supplementary-content" class="internalDFN">supplemental content</a>, or a version that does not require reading ability more advanced than the lower secondary education level, is available.

#### <span class="secno">Success Criterion 3.1.6 </span>Pronunciation<span class="permalink">[§](#pronunciation "Permalink for 3.1.6 Pronunciation")</span>

[How to Meet Pronunciation](https://www.w3.org/WAI/WCAG21/quickref/#pronunciation) <span class="screenreader">|</span>  
[Understanding Pronunciation](https://www.w3.org/WAI/WCAG21/Understanding/pronunciation.html)

(Level AAA)

A <a href="#dfn-mechanism" class="internalDFN">mechanism</a> is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.

### <span class="secno">Guideline 3.2 </span>Predictable<span class="permalink">[§](#predictable "Permalink for 3.2 Predictable")</span>

Make Web pages appear and operate in predictable ways.

#### <span class="secno">Success Criterion 3.2.1 </span>On Focus<span class="permalink">[§](#on-focus "Permalink for 3.2.1 On Focus")</span>

[How to Meet On Focus](https://www.w3.org/WAI/WCAG21/quickref/#on-focus) <span class="screenreader">|</span>  
[Understanding On Focus](https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html)

(Level A)

When any <a href="#dfn-user-interface-components" class="internalDFN">user interface component</a> receives focus, it does not initiate a <a href="#dfn-change-of-context" class="internalDFN">change of context</a>.

#### <span class="secno">Success Criterion 3.2.2 </span>On Input<span class="permalink">[§](#on-input "Permalink for 3.2.2 On Input")</span>

[How to Meet On Input](https://www.w3.org/WAI/WCAG21/quickref/#on-input) <span class="screenreader">|</span>  
[Understanding On Input](https://www.w3.org/WAI/WCAG21/Understanding/on-input.html)

(Level A)

Changing the setting of any <a href="#dfn-user-interface-components" class="internalDFN">user interface component</a> does not automatically cause a <a href="#dfn-change-of-context" class="internalDFN">change of context</a> unless the user has been advised of the behavior before using the component.

#### <span class="secno">Success Criterion 3.2.3 </span>Consistent Navigation<span class="permalink">[§](#consistent-navigation "Permalink for 3.2.3 Consistent Navigation")</span>

[How to Meet Consistent Navigation](https://www.w3.org/WAI/WCAG21/quickref/#consistent-navigation) <span class="screenreader">|</span>  
[Understanding Consistent Navigation](https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html)

(Level AA)

Navigational mechanisms that are repeated on multiple <a href="#dfn-web-page-s" class="internalDFN">Web pages</a> within a <a href="#dfn-set-of-web-pages" class="internalDFN">set of Web pages</a> occur in the <a href="#dfn-same-relative-order" class="internalDFN">same relative order</a> each time they are repeated, unless a change is initiated by the user.

#### <span class="secno">Success Criterion 3.2.4 </span>Consistent Identification<span class="permalink">[§](#consistent-identification "Permalink for 3.2.4 Consistent Identification")</span>

[How to Meet Consistent Identification](https://www.w3.org/WAI/WCAG21/quickref/#consistent-identification) <span class="screenreader">|</span>  
[Understanding Consistent Identification](https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html)

(Level AA)

Components that have the <a href="#dfn-same-functionality" class="internalDFN">same functionality</a> within a <a href="#dfn-set-of-web-pages" class="internalDFN">set of Web pages</a> are identified consistently.

#### <span class="secno">Success Criterion 3.2.5 </span>Change on Request<span class="permalink">[§](#change-on-request "Permalink for 3.2.5 Change on Request")</span>

[How to Meet Change on Request](https://www.w3.org/WAI/WCAG21/quickref/#change-on-request) <span class="screenreader">|</span>  
[Understanding Change on Request](https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html)

(Level AAA)

<a href="#dfn-change-of-context" class="internalDFN">Changes of context</a> are initiated only by user request or a <a href="#dfn-mechanism" class="internalDFN">mechanism</a> is available to turn off such changes.

### <span class="secno">Guideline 3.3 </span>Input Assistance<span class="permalink">[§](#input-assistance "Permalink for 3.3 Input Assistance")</span>

Help users avoid and correct mistakes.

#### <span class="secno">Success Criterion 3.3.1 </span>Error Identification<span class="permalink">[§](#error-identification "Permalink for 3.3.1 Error Identification")</span>

[How to Meet Error Identification](https://www.w3.org/WAI/WCAG21/quickref/#error-identification) <span class="screenreader">|</span>  
[Understanding Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html)

(Level A)

If an <a href="#dfn-input-error" class="internalDFN">input error</a> is automatically detected, the item that is in error is identified and the error is described to the user in text.

#### <span class="secno">Success Criterion 3.3.2 </span>Labels or Instructions<span class="permalink">[§](#labels-or-instructions "Permalink for 3.3.2 Labels or Instructions")</span>

[How to Meet Labels or Instructions](https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions) <span class="screenreader">|</span>  
[Understanding Labels or Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html)

(Level A)

<a href="#dfn-labels" class="internalDFN">Labels</a> or instructions are provided when content requires user input.

#### <span class="secno">Success Criterion 3.3.3 </span>Error Suggestion<span class="permalink">[§](#error-suggestion "Permalink for 3.3.3 Error Suggestion")</span>

[How to Meet Error Suggestion](https://www.w3.org/WAI/WCAG21/quickref/#error-suggestion) <span class="screenreader">|</span>  
[Understanding Error Suggestion](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html)

(Level AA)

If an <a href="#dfn-input-error" class="internalDFN">input error</a> is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.

#### <span class="secno">Success Criterion 3.3.4 </span>Error Prevention (Legal, Financial, Data)<span class="permalink">[§](#error-prevention-legal-financial-data "Permalink for 3.3.4 Error Prevention (Legal, Financial, Data)")</span>

[How to Meet Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG21/quickref/#error-prevention-legal-financial-data) <span class="screenreader">|</span>  
[Understanding Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html)

(Level AA)

For <a href="#dfn-web-page-s" class="internalDFN">Web pages</a> that cause <a href="#dfn-legal-commitments" class="internalDFN">legal commitments</a> or financial transactions for the user to occur, that modify or delete <a href="#dfn-user-controllable" class="internalDFN">user-controllable</a> data in data storage systems, or that submit user test responses, at least one of the following is true:

Reversible  
Submissions are reversible.

Checked  
Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.

Confirmed  
A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

#### <span class="secno">Success Criterion 3.3.5 </span>Help<span class="permalink">[§](#help "Permalink for 3.3.5 Help")</span>

[How to Meet Help](https://www.w3.org/WAI/WCAG21/quickref/#help) <span class="screenreader">|</span>  
[Understanding Help](https://www.w3.org/WAI/WCAG21/Understanding/help.html)

(Level AAA)

<a href="#dfn-context-sensitive-help" class="internalDFN">Context-sensitive help</a> is available.

#### <span class="secno">Success Criterion 3.3.6 </span>Error Prevention (All)<span class="permalink">[§](#error-prevention-all "Permalink for 3.3.6 Error Prevention (All)")</span>

[How to Meet Error Prevention (All)](https://www.w3.org/WAI/WCAG21/quickref/#error-prevention-all) <span class="screenreader">|</span>  
[Understanding Error Prevention (All)](https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-all.html)

(Level AAA)

For <a href="#dfn-web-page-s" class="internalDFN">Web pages</a> that require the user to submit information, at least one of the following is true:

Reversible  
Submissions are reversible.

Checked  
Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.

Confirmed  
A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

<span class="secno">4. </span> Robust <span class="permalink">[§](#robust "Permalink for 4.  Robust ")</span>
-------------------------------------------------------------------------------------------------------------

Content must be robust enough that it can be interpreted by by a wide variety of user agents, including assistive technologies.

### <span class="secno">Guideline 4.1 </span>Compatible<span class="permalink">[§](#compatible "Permalink for 4.1 Compatible")</span>

Maximize compatibility with current and future user agents, including assistive technologies.

#### <span class="secno">Success Criterion 4.1.1 </span>Parsing<span class="permalink">[§](#parsing "Permalink for 4.1.1 Parsing")</span>

[How to Meet Parsing](https://www.w3.org/WAI/WCAG21/quickref/#parsing) <span class="screenreader">|</span>  
[Understanding Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing.html)

(Level A)

In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.

Note

Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.

#### <span class="secno">Success Criterion 4.1.2 </span>Name, Role, Value<span class="permalink">[§](#name-role-value "Permalink for 4.1.2 Name, Role, Value")</span>

[How to Meet Name, Role, Value](https://www.w3.org/WAI/WCAG21/quickref/#name-role-value) <span class="screenreader">|</span>  
[Understanding Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)

(Level A)

For all <a href="#dfn-user-interface-components" class="internalDFN">user interface components</a> (including but not limited to: form elements, links and components generated by scripts), the <a href="#dfn-name" class="internalDFN">name</a> and <a href="#dfn-role" class="internalDFN">role</a> can be <a href="#dfn-programmatically-determinable" class="internalDFN">programmatically determined</a>; states, properties, and values that can be set by the user can be <a href="#dfn-programmatically-set" class="internalDFN">programmatically set</a>; and notification of changes to these items is available to <a href="#dfn-user-agents" class="internalDFN">user agents</a>, including <a href="#dfn-assistive-technologies" class="internalDFN">assistive technologies</a>.

Note

This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.

#### <span class="secno">Success Criterion 4.1.3 </span>Status Messages<span class="permalink">[§](#status-messages "Permalink for 4.1.3 Status Messages")</span>

[How to Meet Status Messages](https://www.w3.org/WAI/WCAG21/quickref/#status-messages) <span class="screenreader">|</span>  
[Understanding Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html)

(Level AA)

In content implemented using markup languages, <a href="#dfn-status-messages" class="internalDFN">status messages</a> can be <a href="#dfn-programmatically-determinable" class="internalDFN">programmatically determined</a> through <a href="#dfn-role" class="internalDFN">role</a> or properties such that they can be presented to the user by <a href="#dfn-assistive-technologies" class="internalDFN">assistive technologies</a> without receiving focus.

<span class="secno">5. </span>Conformance<span class="permalink">[§](#conformance "Permalink for 5. Conformance")</span>
------------------------------------------------------------------------------------------------------------------------

This section lists requirements for <a href="#dfn-conform" class="internalDFN">conformance</a> to WCAG 2.1. It also gives information about how to make conformance claims, which are optional. Finally, it describes what it means to be <a href="#dfn-accessibility-supported" class="internalDFN">accessibility supported</a>, since only accessibility-supported ways of using technologies can be <a href="#dfn-relied-upon" class="internalDFN">relied upon</a> for conformance. [Understanding Conformance](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance) includes further explanation of the accessibility-supported concept.

### <span class="secno">5.1 </span>Interpreting Normative Requirements<span class="permalink">[§](#interpreting-normative-requirements "Permalink for 5.1 Interpreting Normative Requirements")</span>

The main content of WCAG 2.1 is <a href="#dfn-normative" class="internalDFN">normative</a> and defines requirements that impact conformance claims. Introductory material, appendices, sections marked as "non-normative", diagrams, examples, and notes are <a href="#dfn-informative" class="internalDFN">informative</a> (non-normative). Non-normative material provides advisory information to help interpret the guidelines but does not create requirements that impact a conformance claim.

The key words *MAY*, *MUST*, *MUST NOT*, *NOT RECOMMENDED*, *RECOMMENDED*, *SHOULD*, and *SHOULD NOT* are to be interpreted as described in \[<a href="#bib-RFC2119" class="bibref">RFC2119</a>\].

### <span class="secno">5.2 </span>Conformance Requirements<span class="permalink">[§](#conformance-reqs "Permalink for 5.2 Conformance Requirements")</span>

In order for a Web page to conform to WCAG 2.1, all of the following conformance requirements must be satisfied:

#### <span class="secno">5.2.1 </span>Conformance Level<span class="permalink">[§](#cc1 "Permalink for 5.2.1 Conformance Level")</span>

One of the following levels of conformance is met in full.

-   For Level A conformance (the minimum level of conformance), the <a href="#dfn-web-page-s" class="internalDFN">Web page</a> <a href="#dfn-satisfies" class="internalDFN">satisfies</a> all the Level A Success Criteria, or a <a href="#dfn-conforming-alternate-version" class="internalDFN">conforming alternate version</a> is provided.
-   For Level AA conformance, the Web page satisfies all the Level A and Level AA Success Criteria, or a Level AA conforming alternate version is provided.
-   For Level AAA conformance, the Web page satisfies all the Level A, Level AA and Level AAA Success Criteria, or a Level AAA conforming alternate version is provided.

Note

Although conformance can only be achieved at the stated levels, authors are encouraged to report (in their claim) any progress toward meeting success criteria from all levels beyond the achieved level of conformance.

Note

It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA Success Criteria for some content.

#### <span class="secno">5.2.2 </span>Full pages<span class="permalink">[§](#cc2 "Permalink for 5.2.2 Full pages")</span>

<a href="#dfn-conform" class="internalDFN">Conformance</a> (and conformance level) is for full <a href="#dfn-web-page-s" class="internalDFN">Web page(s)</a> only, and cannot be achieved if part of a Web page is excluded.

Note

For the purpose of determining conformance, alternatives to part of a page's content are considered part of the page when the alternatives can be obtained directly from the page, e.g., a long description or an alternative presentation of a video.

Note

Authors of Web pages that cannot conform due to content outside of the author's control may consider a [Statement of Partial Conformance](#conformance-partial).

Note

<span class="change">New</span> A full page includes each variation of the page that is automatically presented by the page for various screen sizes (e.g. variations in a responsive Web page). Each of these variations needs to conform (or needs to have a conforming alternate version) in order for the entire page to conform.

#### <span class="secno">5.2.3 </span>Complete processes<span class="permalink">[§](#cc3 "Permalink for 5.2.3 Complete processes")</span>

When a <a href="#dfn-web-page-s" class="internalDFN">Web page</a> is one of a series of Web pages presenting a <a href="#dfn-processes" class="internalDFN">process</a> (i.e., a sequence of steps that need to be completed in order to accomplish an activity), all Web pages in the process conform at the specified level or better. (Conformance is not possible at a particular level if any page in the process does not conform at that level or better.)

An online store has a series of pages that are used to select and purchase products. All pages in the series from start to finish (checkout) conform in order for any page that is part of the process to conform.

#### <span class="secno">5.2.4 </span>Only Accessibility-Supported Ways of Using Technologies<span class="permalink">[§](#cc4 "Permalink for 5.2.4 Only Accessibility-Supported Ways of Using Technologies")</span>

Only <a href="#dfn-accessibility-supported" class="internalDFN">accessibility-supported</a> ways of using <a href="#dfn-technologies" class="internalDFN">technologies</a> are <a href="#dfn-relied-upon" class="internalDFN">relied upon</a> to satisfy the success criteria. Any information or functionality that is provided in a way that is not accessibility supported is also available in a way that is accessibility supported. (See [Understanding accessibility support](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance).)

#### <span class="secno">5.2.5 </span>Non-Interference<span class="permalink">[§](#cc5 "Permalink for 5.2.5 Non-Interference")</span>

If <a href="#dfn-technologies" class="internalDFN">technologies</a> are used in a way that is not <a href="#dfn-accessibility-supported" class="internalDFN">accessibility supported</a>, or if they are used in a non-conforming way, then they do not block the ability of users to access the rest of the page. In addition, the <a href="#dfn-web-page-s" class="internalDFN">Web page</a> as a whole continues to meet the conformance requirements under each of the following conditions:

1.  when any technology that is not <a href="#dfn-relied-upon" class="internalDFN">relied upon</a> is turned on in a user agent,
2.  when any technology that is not relied upon is turned off in a user agent, and
3.  when any technology that is not relied upon is not supported by a user agent

In addition, the following success criteria apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page:

-   **1.4.2 - Audio Control**,
-   **2.1.2 - No Keyboard Trap**,
-   **2.3.1 - Three Flashes or Below Threshold**, and
-   **2.2.2 - Pause, Stop, Hide**.

Note

If a page cannot conform (for example, a conformance test page or an example page), it cannot be included in the scope of conformance or in a conformance claim.

For more information, including examples, see [Understanding Conformance Requirements](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance).

### <span class="secno">5.3 </span>Conformance Claims (Optional) <span class="permalink">[§](#conformance-claims "Permalink for 5.3 Conformance Claims (Optional) ")</span>

Conformance is defined only for <a href="#dfn-web-page-s" class="internalDFN">Web pages</a>. However, a conformance claim may be made to cover one page, a series of pages, or multiple related Web pages.

#### <span class="secno">5.3.1 </span>Required Components of a Conformance Claim<span class="permalink">[§](#conformance-required "Permalink for 5.3.1 Required Components of a Conformance Claim")</span>

Conformance claims are **not required**. Authors can conform to WCAG 2.1 without making a claim. However, if a conformance claim is made, then the conformance claim **must** include the following information:

1.  **Date** of the claim
2.  **Guidelines title, version and URI** "Web Content Accessibility Guidelines 2.1 at <https://www.w3.org/TR/WCAG21/>" <span class="ednote">In WCAG 2.0 this was a dated URI, which may need to be adjusted when this becomes a Rec.</span>
3.  **Conformance level** satisfied: (Level A, AA or AAA)
4.  **A concise description of the Web pages**, such as a list of URIs for which the claim is made, including whether subdomains are included in the claim.

    Note

    The Web pages may be described by list or by an expression that describes all of the URIs included in the claim.

    Note

    Web-based products that do not have a URI prior to installation on the customer's Web site may have a statement that the product would conform when installed.

5.  A list of the **<a href="#dfn-technologies" class="internalDFN">Web content technologies</a> <a href="#dfn-relied-upon" class="internalDFN">relied upon</a>**.

Note

If a conformance logo is used, it would constitute a claim and must be accompanied by the required components of a conformance claim listed above.

#### <span class="secno">5.3.2 </span>Optional Components of a Conformance Claim <span class="permalink">[§](#conformance-optional "Permalink for 5.3.2 Optional Components of a Conformance Claim ")</span>

In addition to the required components of a conformance claim above, consider providing additional information to assist users. Recommended additional information includes:

-   A list of success criteria beyond the level of conformance claimed that have been met. This information should be provided in a form that users can use, preferably machine-readable metadata.
-   A list of the specific technologies that are " *used but not <a href="#dfn-relied-upon" class="internalDFN">relied upon</a>*."
-   A list of user agents, including assistive technologies that were used to test the content.
-   A list of specific accessibility characteristics of the content, provided in machine-readable metadata.
-   Information about any additional steps taken that go beyond the success criteria to enhance accessibility.
-   A machine-readable metadata version of the list of specific technologies that are <a href="#dfn-relied-upon" class="internalDFN">relied upon</a>.
-   A machine-readable metadata version of the conformance claim.

Note

Refer to [Understanding Conformance Claims](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance) for more information and example conformance claims.

Note

Refer to [Understanding Metadata](https://www.w3.org/TR/UNDERSTANDING-WCAG20/appendixC) for more information about the use of metadata in conformance claims.

### <span class="secno">5.4 </span>Statement of Partial Conformance - Third Party Content<span class="permalink">[§](#conformance-partial "Permalink for 5.4 Statement of Partial Conformance - Third Party Content")</span>

Sometimes, Web pages are created that will later have additional content added to them. For example, an email program, a blog, an article that allows users to add comments, or applications supporting user-contributed content. Another example would be a page, such as a portal or news site, composed of content aggregated from multiple contributors, or sites that automatically insert content from other sources over time, such as when advertisements are inserted dynamically.

In these cases, it is not possible to know at the time of original posting what the uncontrolled content of the pages will be. It is important to note that the uncontrolled content can affect the accessibility of the controlled content as well. Two options are available:

1.  A determination of conformance can be made based on best knowledge. If a page of this type is monitored and repaired (non-conforming content is removed or brought into conformance) within two business days, then a determination or claim of conformance can be made since, except for errors in externally contributed content which are corrected or removed when encountered, the page conforms. No conformance claim can be made if it is not possible to monitor or correct non-conforming content;

    **OR**

2.  A "statement of partial conformance" may be made that the page does not conform, but could conform if certain parts were removed. The form of that statement would be, "This page does not conform, but would conform to WCAG 2.1 at level X if the following parts from uncontrolled sources were removed." In addition, the following would also be true of uncontrolled content that is described in the statement of partial conformance:

    1.  It is not content that is under the author's control.
    2.  It is described in a way that users can identify (e.g., they cannot be described as "all parts that we do not control" unless they are clearly marked as such.)

### <span class="secno">5.5 </span>Statement of Partial Conformance - Language<span class="permalink">[§](#conformance-partial-lang "Permalink for 5.5 Statement of Partial Conformance - Language")</span>

A "statement of partial conformance due to language" may be made when the page does not conform, but would conform if <a href="#dfn-accessibility-supported" class="internalDFN">accessibility support</a> existed for (all of) the language(s) used on the page. The form of that statement would be, "This page does not conform, but would conform to WCAG 2.1 at level X if accessibility support existed for the following language(s):"

<span class="secno">6. </span>Glossary<span class="permalink">[§](#glossary "Permalink for 6. Glossary")</span>
---------------------------------------------------------------------------------------------------------------

abbreviation  
shortened form of a word, phrase, or name where the abbreviation has not become part of the language

Note

This includes initialisms and acronyms where:

1.  **initialisms** are shortened forms of a name or phrase made from the initial letters of words or syllables contained in that name or phrase

    Note

    Not defined in all languages.

    SNCF is a French initialism that contains the initial letters of the <span lang="fr">Société Nationale des Chemins de Fer</span>, the French national railroad.

    ESP is an initialism for extrasensory perception.

2.  **acronyms** are abbreviated forms made from the initial letters or parts of other words (in a name or phrase) which may be pronounced as a word

    NOAA is an acronym made from the initial letters of the National Oceanic and Atmospheric Administration in the United States.

Note

Some companies have adopted what used to be an initialism as their company name. In these cases, the new name of the company is the letters (for example, Ecma) and the word is no longer considered an abbreviation.

accessibility supported  
supported by users' <a href="#dfn-assistive-technologies" class="internalDFN">assistive technologies</a> as well as the accessibility features in browsers and other <a href="#dfn-user-agents" class="internalDFN">user agents</a>

To qualify as an accessibility-supported use of a Web content technology (or feature of a technology), both 1 and 2 must be satisfied for a Web content technology (or feature):

1.  **The way that the <a href="#dfn-technologies" class="internalDFN">Web content technology</a> is used must be supported by users' assistive technology (AT).** This means that the way that the technology is used has been tested for interoperability with users' assistive technology in the <a href="#dfn-human-language-s" class="internalDFN">human language(s)</a> of the content,

    **AND**

2.  **The Web content technology must have accessibility-supported user agents that are available to users.** This means that at least one of the following four statements is true:

    1.  The technology is supported natively in widely-distributed user agents that are also accessibility supported (such as HTML and CSS);

        **OR**

    2.  The technology is supported in a widely-distributed plug-in that is also accessibility supported;

        **OR**

    3.  The content is available in a closed environment, such as a university or corporate network, where the user agent required by the technology and used by the organization is also accessibility supported;

        **OR**

    4.  The user agent(s) that support the technology are accessibility supported and are available for download or purchase in a way that:

        -   does not cost a person with a disability any more than a person without a disability **and**
        -   is as easy to find and obtain for a person with a disability as it is for a person without disabilities.

Note

The WCAG Working group and the W3C do not specify which or how much support by assistive technologies there must be for a particular use of a Web technology in order for it to be classified as accessibility supported. (See [Level of Assistive Technology Support Needed for "Accessibility Support"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance).)

Note

Web technologies can be used in ways that are not accessibility supported as long as they are not <a href="#dfn-relied-upon" class="internalDFN">relied upon</a> and the page as a whole meets the conformance requirements, including [Conformance Criterion 4](#cc4) and [Conformance Criterion 5](#cc5), are met.

Note

When a <a href="#dfn-technologies" class="internalDFN">Web Technology</a> is used in a way that is "accessibility supported," it does not imply that the entire technology or all uses of the technology are supported. Most technologies, including HTML, lack support for at least one feature or use. Pages conform to WCAG only if the uses of the technology that are accessibility supported can be relied upon to meet WCAG requirements.

Note

When citing Web content technologies that have multiple versions, the version(s) supported should be specified.

Note

One way for authors to locate uses of a technology that are accessibility supported would be to consult compilations of uses that are documented to be accessibility supported. (See [Understanding Accessibility-Supported Web Technology Uses](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance).) Authors, companies, technology vendors, or others may document accessibility-supported ways of using Web content technologies. However, all ways of using technologies in the documentation would need to meet the definition of accessibility-supported Web content technologies above.

alternative for time-based media  
document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction

Note

A screenplay used to create the synchronized media content would meet this definition only if it was corrected to accurately represent the final synchronized media after editing.

ambiguous to users in general  
the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)

The word guava in the following sentence "One of the notable exports is guava" is a link. The link could lead to a definition of guava, a chart listing the quantity of guava exported or a photograph of people harvesting guava. Until the link is activated, all readers are unsure and the person with a disability is not at any disadvantage.

ASCII art  
picture created by a spatial arrangement of characters or glyphs (typically from the 95 printable characters defined by ASCII)

assistive technology (as used in this document)   
hardware and/or software that acts as a <a href="#dfn-user-agents" class="internalDFN">user agent</a>, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

Note

functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

Note

Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

Note

The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

Assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;
-   screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;
-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;
-   speech recognition software, which may be used by people who have some physical disabilities;
-   alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);
-   alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

audio  
the technology of sound reproduction

Note

Audio can be created synthetically (including speech synthesis), recorded from real world sounds, or both.

audio description  
narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone

Note

Audio description of <a href="#dfn-video" class="internalDFN">video</a> provides information about actions, characters, scene changes, on-screen text, and other visual content.

Note

In standard audio description, narration is added during existing pauses in dialogue. (See also <a href="#dfn-extended-audio-description" class="internalDFN">extended audio description</a>.)

Note

Where all of the <a href="#dfn-video" class="internalDFN">video</a> information is already provided in existing <a href="#dfn-audio" class="internalDFN">audio</a>, no additional audio description is necessary.

Note

Also called "video description" and "descriptive narration."

audio-only  
a time-based presentation that contains only <a href="#dfn-audio" class="internalDFN">audio</a> (no <a href="#dfn-video" class="internalDFN">video</a> and no interaction)

blinking  
switch back and forth between two visual states in a way that is meant to draw attention

Note

See also <a href="#dfn-flashes" class="internalDFN">flash</a>. It is possible for something to be large enough and blink brightly enough at the right frequency to be also classified as a flash.

blocks of text  
more than one sentence of text

CAPTCHA  
initialism for "Completely Automated Public Turing test to tell Computers and Humans Apart"

Note

CAPTCHA tests often involve asking the user to type in text that is displayed in an obscured image or audio file.

Note

A Turing test is any system of tests designed to differentiate a human from a computer. It is named after famed computer scientist Alan Turing. The term was coined by researchers at Carnegie Mellon University.

captions  
synchronized visual and/or <a href="#dfn-text-alternative" class="internalDFN">text alternative</a> for both speech and non-speech audio information needed to understand the media content

Note

Captions are similar to dialogue-only subtitles except captions convey not only the content of spoken dialogue, but also equivalents for non-dialogue audio information needed to understand the program content, including sound effects, music, laughter, speaker identification and location.

Note

Closed Captions are equivalents that can be turned on and off with some players.

Note

Open Captions are any captions that cannot be turned off. For example, if the captions are visual equivalent <a href="#dfn-images-of-text" class="internalDFN">images of text</a> embedded in <a href="#dfn-video" class="internalDFN">video</a>.

Note

Captions should not obscure or obstruct relevant information in the video.

Note

In some countries, captions are called subtitles.

Note

<a href="#dfn-audio-descriptions" class="internalDFN">Audio descriptions</a> can be, but do not need to be, captioned since they are descriptions of information that is already presented visually.

changes of context  
major changes in the content of the <a href="#dfn-web-page-s" class="internalDFN">Web page</a> that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously

Changes in context include changes of:

1.  <a href="#dfn-user-agents" class="internalDFN">user agent</a>;
2.  <a href="#dfn-viewport" class="internalDFN">viewport</a>;
3.  focus;
4.  <a href="#dfn-content" class="internalDFN">content</a> that changes the meaning of the <a href="#dfn-web-page-s" class="internalDFN">Web page</a>

Note

A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).

Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.

conformance  
satisfying all the requirements of a given standard, guideline or specification

conforming alternate version  
version that

1.  conforms at the designated level, and
2.  provides all of the same information and <a href="#dfn-functionality" class="internalDFN">functionality</a> in the same <a href="#dfn-human-language-s" class="internalDFN">human language</a>, and
3.  is as up to date as the non-conforming content, and
4.  for which at least one of the following is true:

    1.  the conforming version can be reached from the non-conforming page via an <a href="#dfn-accessibility-supported" class="internalDFN">accessibility-supported</a> <a href="#dfn-mechanism" class="internalDFN">mechanism</a>, or
    2.  the non-conforming version can only be reached from the conforming version, or
    3.  the non-conforming version can only be reached from a conforming page that also provides a mechanism to reach the conforming version

Note

In this definition, "can only be reached" means that there is some mechanism, such as a conditional redirect, that prevents a user from "reaching" (loading) the non-conforming page unless the user had just come from the conforming version.

Note

The alternate version does not need to be matched page for page with the original (e.g., the conforming alternate version may consist of multiple pages).

Note

If multiple language versions are available, then conforming alternate versions are required for each language offered.

Note

Alternate versions may be provided to accommodate different technology environments or user groups. Each version should be as conformant as possible. One version would need to be fully conformant in order to meet [conformance requirement 1](#cc1).

Note

The conforming alternative version does not need to reside within the scope of conformance, or even on the same Web site, as long as it is as freely available as the non-conforming version.

Note

Alternate versions should not be confused with <a href="#dfn-supplementary-content" class="internalDFN">supplementary content</a>, which support the original page and enhance comprehension.

Note

Setting user preferences within the content to produce a conforming version is an acceptable mechanism for reaching another version as long as the method used to set the preferences is accessibility supported.

See [Understanding Conforming Alternate Versions](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance)

content (Web content)   
information and sensory experience to be communicated to the user by means of a <a href="#dfn-user-agents" class="internalDFN">user agent</a>, including code or markup that defines the content's <a href="#dfn-structure" class="internalDFN">structure</a>, <a href="#dfn-presentation" class="internalDFN">presentation</a>, and interactions

context-sensitive help  
help text that provides information related to the function currently being performed

Note

Clear labels can act as context-sensitive help.

contrast ratio  
(L1 + 0.05) / (L2 + 0.05), where

-   L1 is the <a href="#dfn-relative-luminance" class="internalDFN">relative luminance</a> of the lighter of the colors, and
-   L2 is the <a href="#dfn-relative-luminance" class="internalDFN">relative luminance</a> of the darker of the colors.

Note

Contrast ratios can range from 1 to 21 (commonly written 1:1 to 21:1).

Note

Because authors do not have control over user settings as to how text is rendered (for example font smoothing or anti-aliasing), the contrast ratio for text can be evaluated with anti-aliasing turned off.

Note

For the purpose of Success Criteria 1.4.3 and 1.4.6, contrast is measured with respect to the specified background over which the text is rendered in normal usage. If no background color is specified, then white is assumed.

Note

Background color is the specified color of content over which the text is to be rendered in normal usage. It is a failure if no background color is specified when the text color is specified, because the user's default background color is unknown and cannot be evaluated for sufficient contrast. For the same reason, it is a failure if no text color is specified when a background color is specified.

Note

When there is a border around the letter, the border can add contrast and would be used in calculating the contrast between the letter and its background. A narrow border around the letter would be used as the letter. A wide border around the letter that fills in the inner details of the letters acts as a halo and would be considered background.

Note

WCAG conformance should be evaluated for color pairs specified in the content that an author would expect to appear adjacent in typical presentation. Authors need not consider unusual presentations, such as color changes made by the user agent, except where caused by authors' code.

correct reading sequence  
any sequence where words and paragraphs are presented in an order that does not change the meaning of the content

CSS pixel  
visual angle of about 0.0213 degrees

A CSS pixel is the canonical unit of measure for all lengths and measurements in CSS. This unit is density-independent, and distinct from actual hardware pixels present in a display. User agents and operating systems should ensure that a CSS pixel is set as closely as possible to the [CSS Values and Units Module Level 3 reference pixel](https://www.w3.org/TR/css3-values/#reference-pixel) \[<a href="#bib-css3-values" class="bibref">css3-values</a>\], which takes into account the physical dimensions of the display and the assumed viewing distance (factors that cannot be determined by content authors).

down-event  
platform event that occurs when the trigger stimulus of a pointer is depressed

The down-event may have different names on different platforms, such as "touchstart" or "mousedown".

emergency  
a sudden, unexpected situation or occurrence that requires immediate action to preserve health, safety, or property

essential  
if removed, would fundamentally change the information or functionality of the content, **and** information and functionality cannot be achieved in another way that would conform

extended audio description  
audio description that is added to an audiovisual presentation by pausing the <a href="#dfn-video" class="internalDFN">video</a> so that there is time to add additional description

Note

This technique is only used when the sense of the <a href="#dfn-video" class="internalDFN">video</a> would be lost without the additional <a href="#dfn-audio-descriptions" class="internalDFN">audio description</a> and the pauses between dialogue/narration are too short.

flash  
a pair of opposing changes in <a href="#dfn-relative-luminance" class="internalDFN">relative luminance</a> that can cause seizures in some people if it is large enough and in the right frequency range

Note

See <a href="#dfn-general-flash-and-red-flash-thresholds" class="internalDFN">general flash and red flash thresholds</a> for information about types of flash that are not allowed.

Note

See also <a href="#dfn-blinking" class="internalDFN">blinking</a>.

functionality  
<a href="#dfn-processes" class="internalDFN">processes</a> and outcomes achievable through user action

general flash and red flash thresholds  
a <a href="#dfn-flashes" class="internalDFN">flash</a> or rapidly changing image sequence is below the threshold (i.e., content **passes**) if any of the following are true:

1.  there are no more than three **general flashes** and / or no more than three **red flashes** within any one-second period; or
2.  the combined area of flashes occurring concurrently occupies no more than a total of .006 steradians within any 10 degree visual field on the screen (25% of any 10 degree visual field on the screen) at typical viewing distance

where:

-   A **general flash** is defined as a pair of opposing changes in <a href="#dfn-relative-luminance" class="internalDFN">relative luminance</a> of 10% or more of the maximum relative luminance where the relative luminance of the darker image is below 0.80; and where "a pair of opposing changes" is an increase followed by a decrease, or a decrease followed by an increase, and
-   A **red flash** is defined as any pair of opposing transitions involving a saturated red

*Exception:* Flashing that is a fine, balanced, pattern such as white noise or an alternating checkerboard pattern with "squares" smaller than 0.1 degree (of visual field at typical viewing distance) on a side does not violate the thresholds.

Note

For general software or Web content, using a 341 x 256 pixel rectangle anywhere on the displayed screen area when the content is viewed at 1024 x 768 pixels will provide a good estimate of a 10 degree visual field for standard screen sizes and viewing distances (e.g., 15-17 inch screen at 22-26 inches). (Higher resolutions displays showing the same rendering of the content yield smaller and safer images so it is lower resolutions that are used to define the thresholds.)

Note

A transition is the change in relative luminance (or relative luminance/color for red flashing) between adjacent peaks and valleys in a plot of relative luminance (or relative luminance/color for red flashing) measurement against time. A flash consists of two opposing transitions.

Note

The current working definition in the field for **"pair of opposing transitions involving a saturated red"** is where, for either or both states involved in each transition, R/(R+ G + B) &gt;= 0.8, and the change in the value of (R-G-B)x320 is &gt; 20 (negative values of (R-G-B)x320 are set to zero) for both transitions. R, G, B values range from 0-1 as specified in “relative luminance” definition. \[<a href="#bib-HARDING-BINNIE" class="bibref">HARDING-BINNIE</a>\]

Note

Tools are available that will carry out analysis from video screen capture. However, no tool is necessary to evaluate for this condition if flashing is less than or equal to 3 flashes in any one second. Content automatically passes (see \#1 and \#2 above).

human language  
language that is spoken, written or signed (through visual or tactile means) to communicate with humans

Note

See also <a href="#dfn-sign-language" class="internalDFN">sign language</a>.

idiom  
phrase whose meaning cannot be deduced from the meaning of the individual words and the specific words cannot be changed without losing the meaning

Note

idioms cannot be translated directly, word for word, without losing their (cultural or language-dependent) meaning.

In English, "spilling the beans" means "revealing a secret." However, "knocking over the beans" or "spilling the vegetables" does not mean the same thing.

In Japanese, the phrase "<span lang="ja">さじを投げる</span>" literally translates into "he throws a spoon," but it means that there is nothing he can do and finally he gives up.

In Dutch, "<span lang="nl">Hij ging met de kippen op stok</span>" literally translates into "He went to roost with the chickens," but it means that he went to bed early.

image of text  
text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect

Note

This does not include <a href="#dfn-text" class="internalDFN">text</a> that is part of a picture that contains significant other visual content.

A person's name on a nametag in a photograph.

informative  
for information purposes and not required for conformance

Note

Content required for <a href="#dfn-conform" class="internalDFN">conformance</a> is referred to as "<a href="#dfn-normative" class="internalDFN">normative</a>."

input error  
information provided by the user that is not accepted

Note

This includes:

1.  Information that is required by the <a href="#dfn-web-page-s" class="internalDFN">Web page</a> but omitted by the user
2.  Information that is provided by the user but that falls outside the required data format or values

jargon  
words used in a particular way by people in a particular field

The word StickyKeys is jargon from the field of assistive technology/accessibility.

keyboard interface  
interface used by software to obtain keystroke input

Note

A keyboard interface allows users to provide keystroke input to programs even if the native technology does not contain a keyboard.

Note

A touchscreen PDA has a keyboard interface built into its operating system as well as a connector for external keyboards. Applications on the PDA can use the interface to obtain keyboard input either from an external keyboard or from other applications that provide simulated keyboard output, such as handwriting interpreters or speech-to-text applications with "keyboard emulation" functionality.

Note

Operation of the application (or parts of the application) through a keyboard-operated mouse emulator, such as MouseKeys, does not qualify as operation through a keyboard interface because operation of the program is through its pointing device interface, not through its keyboard interface.

keyboard shortcut  
alternative means of triggering an action by the pressing of one or more keys

label  
<a href="#dfn-text" class="internalDFN">text</a> or other component with a <a href="#dfn-text-alternative" class="internalDFN">text alternative</a> that is presented to a user to identify a component within Web <a href="#dfn-content" class="internalDFN">content</a>

Note

A label is presented to all users whereas the <a href="#dfn-name" class="internalDFN">name</a> may be hidden and only exposed by assistive technology. In many (but not all) cases the name and the label are the same.

Note

The term label is not limited to the label element in HTML.

large scale (text)   
with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts

Note

Fonts with extraordinarily thin strokes or unusual features and characteristics that reduce the familiarity of their letter forms are harder to read, especially at lower contrast levels.

Note

Font size is the size when the content is delivered. It does not include resizing that may be done by a user.

Note

The actual size of the character that a user sees is dependent both on the author-defined size and the user's display or user-agent settings. For many mainstream body text fonts, 14 and 18 point is roughly equivalent to 1.2 and 1.5 em or to 120% or 150% of the default size for body text (assuming that the body font is 100%), but authors would need to check this for the particular fonts in use. When fonts are defined in relative units, the actual point size is calculated by the user agent for display. The point size should be obtained from the user agent, or calculated based on font metrics as the user agent does, when evaluating this success criterion. Users who have low vision would be responsible for choosing appropriate settings.

Note

When using text without specifying the font size, the smallest font size used on major browsers for unspecified text would be a reasonable size to assume for the font. If a level 1 heading is rendered in 14pt bold or higher on major browsers, then it would be reasonable to assume it is large text. Relative scaling can be calculated from the default sizes in a similar fashion.

Note

The 18 and 14 point sizes for roman texts are taken from the minimum size for large print (14pt) and the larger standard font size (18pt). For other fonts such as CJK languages, the "equivalent" sizes would be the minimum large print size used for those languages and the next larger standard large print size.

legal commitments  
transactions where the person incurs a legally binding obligation or benefit

A marriage license, a stock trade (financial and legal), a will, a loan, adoption, signing up for the army, a contract of any type, etc.

link purpose  
nature of the result obtained by activating a hyperlink

live  
information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay

Note

A broadcast delay is a short (usually automated) delay, for example used in order to give the broadcaster time to cue or censor the audio (or video) feed, but not sufficient to allow significant editing.

Note

If information is completely computer generated, it is not live.

lower secondary education level  
the two or three year period of education that begins after completion of six years of school and ends nine years after the beginning of <a href="#dfn-primary-education" class="internalDFN">primary education</a>

Note

This definition is based on the International Standard Classification of Education \[<a href="#bib-UNESCO" class="bibref">UNESCO</a>\].

mechanism  
<a href="#dfn-processes" class="internalDFN">process</a> or technique for achieving a result

Note

The mechanism may be explicitly provided in the content, or may be <a href="#dfn-relied-upon" class="internalDFN">relied upon</a> to be provided by either the platform or by <a href="#dfn-user-agents" class="internalDFN">user agents</a>, including <a href="#dfn-assistive-technologies" class="internalDFN">assistive technologies</a>.

Note

The mechanism needs to meet all success criteria for the conformance level claimed.

media alternative for text  
media that presents no more information than is already presented in text (directly or via text alternatives)

Note

A media alternative for text is provided for those who benefit from alternate representations of text. Media alternatives for text may be audio-only, video-only (including sign-language video), or audio-video.

motion animation  
addition of steps between conditions to create the illusion of movement or to give a sense of a smooth transition

For example, an element which moves into place or changes size while appearing is considered to be animated. An element which appears instantly without transitioning is not using animation. Motion animation does not include changes of color, blurring or opacity.

name  
text by which software can identify a component within Web content to the user

Note

The name may be hidden and only exposed by assistive technology, whereas a <a href="#dfn-labels" class="internalDFN">label</a> is presented to all users. In many (but not all) cases, the label and the name are the same.

Note

This is unrelated to the name attribute in HTML.

navigated sequentially  
navigated in the order defined for advancing focus (from one element to the next) using a <a href="#dfn-keyboard-interface" class="internalDFN">keyboard interface</a>

non-text content  
any content that is not a sequence of characters that can be <a href="#dfn-programmatically-determinable" class="internalDFN">programmatically determined</a> or where the sequence is not expressing something in <a href="#dfn-human-language-s" class="internalDFN">human language</a>

Note

This includes <a href="#dfn-ascii-art" class="internalDFN">ASCII Art</a> (which is a pattern of characters), emoticons, leetspeak (which uses character substitution), and images representing text

normative  
required for conformance

Note

One may conform in a variety of well-defined ways to this document.

Note

Content identified as "<a href="#dfn-informative" class="internalDFN">informative</a>" or "non-normative" is never required for <a href="#dfn-conform" class="internalDFN">conformance</a>.

on a full-screen window  
on the most common sized desktop/laptop display with the viewport maximized

Note

Since people generally keep their computers for several years, it is best not to rely on the latest desktop/laptop display resolutions but to consider the common desktop/laptop display resolutions over the course of several years when making this evaluation.

paused  
stopped by user request and not resumed until requested by user

pointer input  
input device that can target a specific coordinate (or set of coordinates) on a screen, such as a mouse, pen, or touch contact

See also [Pointer Events pointer definition](https://www.w3.org/TR/pointerevents/#dfn-pointer) \[<a href="#bib-pointerevents" class="bibref">pointerevents</a>\].

prerecorded  
information that is not <a href="#dfn-live" class="internalDFN">live</a>

presentation  
rendering of the <a href="#dfn-content" class="internalDFN">content</a> in a form to be perceived by users

primary education level  
six year time period that begins between the ages of five and seven, possibly without any previous education

Note

This definition is based on the International Standard Classification of Education \[<a href="#bib-UNESCO" class="bibref">UNESCO</a>\].

process  
series of user actions where each action is required in order to complete an activity

Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

An account registration page requires successful completion of a Turing test before the registration form can be accessed.

programmatically determined (programmatically determinable)   
determined by software from author-supplied data provided in a way that different <a href="#dfn-user-agents" class="internalDFN">user agents</a>, including <a href="#dfn-assistive-technologies" class="internalDFN">assistive technologies</a>, can extract and present this information to users in different modalities

Note

Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

Note

Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

programmatically determined link context  
additional information that can be <a href="#dfn-programmatically-determinable" class="internalDFN">programmatically determined</a> from <a href="#dfn-relationships" class="internalDFN">relationships</a> with a link, combined with the link text, and presented to users in different modalities

In HTML, information that is programmatically determinable from a link in English includes text that is in the same paragraph, list, or table cell as the link or in a table header cell that is associated with the table cell that contains the link.

Note

Since screen readers interpret punctuation, they can also provide the context from the current sentence, when the focus is on a link in that sentence.

programmatically set  
set by software using methods that are supported by user agents, including assistive technologies

pure decoration  
serving only an aesthetic purpose, providing no information, and having no functionality

Note

Text is only purely decorative if the words can be rearranged or substituted without changing their purpose.

The cover page of a dictionary has random words in very light text in the background.

real-time event  
event that a) occurs at the same time as the viewing and b) is not completely generated by the content

A Webcast of a live performance (occurs at the same time as the viewing and is not prerecorded).

An on-line auction with people bidding (occurs at the same time as the viewing).

Live humans interacting in a virtual world using avatars (is not completely generated by the content and occurs at the same time as the viewing).

region  
perceivable, programmatically determined section of content

Note

In HTML, any area designated with a landmark role would be a region.

relationships  
meaningful associations between distinct pieces of content

relative luminance  
the relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white

Note

For the sRGB colorspace, the relative luminance of a color is defined as L = 0.2126 \* **R** + 0.7152 \* **G** + 0.0722 \* **B** where **R**, **G** and **B** are defined as:

-   if RsRGB &lt;= 0.03928 then **R** = RsRGB/12.92 else **R** = ((RsRGB+0.055)/1.055) ^ 2.4
-   if GsRGB &lt;= 0.03928 then **G** = GsRGB/12.92 else **G** = ((GsRGB+0.055)/1.055) ^ 2.4
-   if BsRGB &lt;= 0.03928 then **B** = BsRGB/12.92 else **B** = ((BsRGB+0.055)/1.055) ^ 2.4

and RsRGB, GsRGB, and BsRGB are defined as:

-   RsRGB = R8bit/255
-   GsRGB = G8bit/255
-   BsRGB = B8bit/255

The "^" character is the exponentiation operator. (Formula taken from \[<a href="#bib-sRGB" class="bibref">sRGB</a>\] and \[<a href="#bib-IEC-4WD" class="bibref">IEC-4WD</a>\]).

Note

Almost all systems used today to view Web content assume sRGB encoding. Unless it is known that another color space will be used to process and display the content, authors should evaluate using sRGB colorspace. If using other color spaces, see [Understanding Success Criterion 1.4.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast).

Note

If dithering occurs after delivery, then the source color value is used. For colors that are dithered at the source, the average values of the colors that are dithered should be used (average R, average G, and average B).

Note

Tools are available that automatically do the calculations when testing contrast and flash.

Note

A [MathML version of the relative luminance definition](relative-luminance.xml) is available.

relied upon (technologies that are)   
the content would not <a href="#dfn-conform" class="internalDFN">conform</a> if that <a href="#dfn-technologies" class="internalDFN">technology</a> is turned off or is not supported

role  
text or number by which software can identify the function of a component within Web content

A number that indicates whether an image functions as a hyperlink, command button, or check box.

same functionality  
same result when used

A submit "search" button on one Web page and a "find" button on another Web page may both have a field to enter a term and list topics in the Web site related to the term submitted. In this case, they would have the same functionality but would not be labeled consistently.

same relative order  
same position relative to other items

Note

Items are considered to be in the same relative order even if other items are inserted or removed from the original order. For example, expanding navigation menus may insert an additional level of detail or a secondary navigation section may be inserted into the reading order.

satisfies a success criterion  
the success criterion does not evaluate to 'false' when applied to the page

section  
a self-contained portion of written content that deals with one or more related topics or thoughts

Note

A section may consist of one or more paragraphs and include graphics, tables, lists and sub-sections.

set of web pages  
collection of <a href="#dfn-web-page-s" class="internalDFN">web pages</a> that share a common purpose and that are created by the same author, group or organization

Examples include a publication which is split across multiple Web pages, where each page contains one chapter or other significant section of the work. The publication is logically a single contiguous unit, and contains navigation features that enable access to the full set of pages.

Note

Different language versions would be considered different sets of Web pages.

sign language  
a language using combinations of movements of the hands and arms, facial expressions, or body positions to convey meaning

sign language interpretation  
translation of one language, generally a spoken language, into a <a href="#dfn-sign-language" class="internalDFN">sign language</a>

Note

True sign languages are independent languages that are unrelated to the spoken language(s) of the same country or region.

single pointer  
pointer input that operates with one point of contact with the screen, including single taps and clicks, double-taps and clicks, long presses, and path-based gestures

specific sensory experience  
a sensory experience that is not purely decorative and does not primarily convey important information or perform a function

Examples include a performance of a flute solo, works of visual art etc.

state  
dynamic property expressing characteristics of a user interface component that may change in response to user action or automated processes

States do not affect the nature of the component, but represent data associated with the component or user interaction possibilities. Examples include focus, hover, select, press, check, visited/unvisited, and expand/collapse.

status message  
change in content that is not a <a href="#dfn-change-of-context" class="internalDFN">change of context</a>, and that provides information to the user on the success or results of an action, on the waiting state of an application, on the progress of a process, or on the existence of errors

structure  
1.  The way the parts of a <a href="#dfn-web-page-s" class="internalDFN">Web page</a> are organized in relation to each other; and
2.  The way a collection of <a href="#dfn-web-page-s" class="internalDFN">Web pages</a> is organized

style property  
property whose value determines the presentation (e.g. font, color, size, location, padding, volume, synthesized speech prosody) of content elements as they are rendered (e.g. onscreen, via loudspeaker, via braille display) by user agents

Style properties can have several origins:

-   User agent default styles: The default style property values applied in the absence of any author or user styles. Some web content technologies specify a default rendering, others do not;
-   Author styles: Style property values that are set by the author as part of the content (e.g. in-line styles, author style sheets);
-   User styles: Style property values that are set by the user (e.g. via user agent interface settings, user style sheets)

supplemental content  
additional <a href="#dfn-content" class="internalDFN">content</a> that illustrates or clarifies the primary content

An audio version of a <a href="#dfn-web-page-s" class="internalDFN">Web page</a>.

An illustration of a complex <a href="#dfn-processes" class="internalDFN">process</a>.

A paragraph summarizing the major outcomes and recommendations made in a research study.

synchronized media  
<a href="#dfn-audio" class="internalDFN">audio</a> or <a href="#dfn-video" class="internalDFN">video</a> synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a <a href="#dfn-media-alternative-for-text" class="internalDFN">media alternative for text</a> that is clearly labeled as such

target  
region of the display that will accept a pointer action, such as the interactive area of a user interface component

Note

If two or more touch targets are overlapping, the overlapping area should not be included in the measurement of the target size, except when the overlapping targets perform the same action or open the same page.

technology (Web content)   
<a href="#dfn-mechanism" class="internalDFN">mechanism</a> for encoding instructions to be rendered, played or executed by <a href="#dfn-user-agents" class="internalDFN">user agents</a>

Note

As used in these guidelines "Web Technology" and the word "technology" (when used alone) both refer to Web Content Technologies.

Note

Web content technologies may include markup languages, data formats, or programming languages that authors may use alone or in combination to create end-user experiences that range from static Web pages to synchronized media presentations to dynamic Web applications.

Note

Some common examples of Web content technologies include HTML, CSS, SVG, PNG, PDF, Flash, and JavaScript.

text  
sequence of characters that can be <a href="#dfn-programmatically-determinable" class="internalDFN">programmatically determined</a>, where the sequence is expressing something in <a href="#dfn-human-language-s" class="internalDFN">human language</a>

text alternative  
<a href="#dfn-text" class="internalDFN">Text</a> that is programmatically associated with <a href="#dfn-non-text-content" class="internalDFN">non-text content</a> or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content.

An image of a chart is described in text in the paragraph after the chart. The short text alternative for the chart indicates that a description follows.

Note

Refer to [Understanding Text Alternatives](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance) for more information.

up-event  
platform event that occurs when the trigger stimulus of a pointer is released

The up-event may have different names on different platforms, such as "touchend" or "mouseup".

used in an unusual or restricted way  
words used in such a way that requires users to know exactly which definition to apply in order to understand the content correctly

The term "gig" means something different if it occurs in a discussion of music concerts than it does in article about computer hard drive space, but the appropriate definition can be determined from context. By contrast, the word "text" is used in a very specific way in WCAG 2.1, so a definition is supplied in the glossary.

user agent  
any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including <a href="#dfn-assistive-technologies" class="internalDFN">assistive technologies</a> — that help in retrieving, rendering, and interacting with Web content.

user-controllable  
data that is intended to be accessed by users

Note

This does not refer to such things as Internet logs and search engine monitoring data.

Name and address fields for a user's account.

user interface component  
a part of the content that is perceived by users as a single control for a distinct function

Note

Multiple user interface components may be implemented as a single programmatic element. Components here is not tied to programming techniques, but rather to what the user perceives as separate controls.

Note

User interface components include form elements and links as well as components generated by scripts.

Note

What is meant by "component" or "user interface component" here is also sometimes called "user interface element".

An applet has a "control" that can be used to move through content by line or page or random access. Since each of these would need to have a name and be settable independently, they would each be a "user interface component."

user inactivity  
any continuous period of time where no user actions occur

The method of tracking will be determined by the web site or application.

video  
the technology of moving or sequenced pictures or images

Note

Video can be made up of animated or photographic images, or both.

video-only  
a time-based presentation that contains only <a href="#dfn-video" class="internalDFN">video</a> (no <a href="#dfn-audio" class="internalDFN">audio</a> and no interaction)

viewport  
object in which the user agent presents content

Note

The <a href="#dfn-user-agents" class="internalDFN">user agent</a> presents content through one or more viewports. Viewports include windows, frames, loudspeakers, and virtual magnifying glasses. A viewport may contain another viewport (e.g., nested frames). Interface components created by the user agent such as prompts, menus, and alerts are not viewports.

Note

This definition is based on [User Agent Accessibility Guidelines 1.0 Glossary](https://www.w3.org/TR/WAI-USERAGENT/glossary.html) \[<a href="#bib-UAAG10" class="bibref">UAAG10</a>\].

visually customized  
the font, size, color, and background can be set

Web page  
a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a <a href="#dfn-user-agents" class="internalDFN">user agent</a>

Note

Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

Note

For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

A Web resource including all embedded images and media.

A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

A customizable portal site, where users can choose content to display from a set of different content modules.

When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.

<span class="secno">7. </span>Input Purposes for User Interface Components<span class="permalink">[§](#input-purposes "Permalink for 7. Input Purposes for User Interface Components")</span>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This section contains a listing of common <a href="#dfn-user-interface-components" class="internalDFN">user interface component</a> input purposes. The terms below are not keywords that must be used, but instead represent purposes that must be captured in the taxonomy adopted by a webpage. Where applicable, authors mark up controls with the chosen taxonomy to indicate the semantic purpose. This provides the potential for user agents and assistive technologies to apply personalized presentations that can enable more people to understand and use the content.

Note

The list of input type purposes is based on the control purposes defined in the [HTML 5.2 Autofill field section](https://www.w3.org/TR/html52/sec-forms.html#sec-autofill), but it is important to understand that a different technology may have some or all of the same concepts defined in its specification and only the concepts that are mapped to the meanings below are required.

The following input control purposes are intended to relate to the user of the content and pertain only to information related to that individual.

-   **name** - Full name
-   **honorific-prefix** - Prefix or title (e.g., "Mr.", "Ms.", "Dr.", "M<sup>lle</sup>")
-   **given-name** - Given name (in some Western cultures, also known as the *first name*)
-   **additional-name** - Additional names (in some Western cultures, also known as *middle names*, forenames other than the first name)
-   **family-name** - Family name (in some Western cultures, also known as the *last name* or *surname*)
-   **honorific-suffix** - Suffix (e.g., "Jr.", "B.Sc.", "MBASW", "II")
-   **nickname** - Nickname, screen name, handle: a typically short name used instead of the full name
-   **organization-title** - Job title (e.g., "Software Engineer", "Senior Vice President", "Deputy Managing Director")
-   **username** - A username
-   **new-password** - A new password (e.g., when creating an account or changing a password)
-   **current-password** - The current password for the account identified by the **username** field (e.g., when logging in)
-   **organization** - Company name corresponding to the person, address, or contact information in the other fields associated with this field
-   **street-address** - Street address (multiple lines, newlines preserved)
-   **address-line1** - Street address (one line per field, line 1)
-   **address-line2** - Street address (one line per field, line 2)
-   **address-line3** - Street address (one line per field, line 3)
-   **address-level4** - The most fine-grained administrative level, in addresses with four administrative levels
-   **address-level3** - The third administrative level, in addresses with three or more administrative levels
-   **address-level2** - The second administrative level, in addresses with two or more administrative levels; in the countries with two administrative levels, this would typically be the city, town, village, or other locality within which the relevant street address is found
-   **address-level1** - The broadest administrative level in the address, i.e., the province within which the locality is found; for example, in the US, this would be the state; in Switzerland it would be the canton; in the UK, the post town
-   **country** - Country code
-   **country-name** - Country name
-   **postal-code** - Postal code, post code, ZIP code, CEDEX code (if CEDEX, append "CEDEX", and the *dissement*, if relevant, to the **address-level2** field)
-   **cc-name** - Full name as given on the payment instrument
-   **cc-given-name** - Given name as given on the payment instrument (in some Western cultures, also known as the *first name*)
-   **cc-additional-name** - Additional names given on the payment instrument (in some Western cultures, also known as *middle names*, forenames other than the first name)
-   **cc-family-name** - Family name given on the payment instrument (in some Western cultures, also known as the *last name* or *surname*)
-   **cc-number** - Code identifying the payment instrument (e.g., the credit card number)
-   **cc-exp** - Expiration date of the payment instrument
-   **cc-exp-month** - Month component of the expiration date of the payment instrument
-   **cc-exp-year** - Year component of the expiration date of the payment instrument
-   **cc-csc** - Security code for the payment instrument (also known as the card security code (CSC), card validation code (CVC), card verification value (CVV), signature panel code (SPC), credit card ID (CCID), etc)
-   **cc-type** - Type of payment instrument
-   **transaction-currency** - The currency that the user would prefer the transaction to use
-   **transaction-amount** - The amount that the user would like for the transaction (e.g., when entering a bid or sale price)
-   **language** - Preferred language
-   **bday** - Birthday
-   **bday-day** - Day component of birthday
-   **bday-month** - Month component of birthday
-   **bday-year** - Year component of birthday
-   **sex** - Gender identity (e.g., Female, Fa’afafine)
-   **url** - Home page or other Web page corresponding to the company, person, address, or contact information in the other fields associated with this field
-   **photo** - Photograph, icon, or other image corresponding to the company, person, address, or contact information in the other fields associated with this field
-   **tel** - Full telephone number, including country code
-   **tel-country-code** - Country code component of the telephone number
-   **tel-national** - Telephone number without the county code component, with a country-internal prefix applied if applicable
-   **tel-area-code** - Area code component of the telephone number, with a country-internal prefix applied if applicable
-   **tel-local** - Telephone number without the country code and area code components
-   **tel-local-prefix** - First part of the component of the telephone number that follows the area code, when that component is split into two components
-   **tel-local-suffix** - Second part of the component of the telephone number that follows the area code, when that component is split into two components
-   **tel-extension** - Telephone number internal extension code
-   **email** - E-mail address
-   **impp** - URL representing an instant messaging protocol endpoint (for example, "**aim:goim?screenname=example**" or "**xmpp:fred@example.net**")

<span class="secno">A. </span>Change Log<span class="permalink">[§](#changelog "Permalink for A. Change Log")</span>
--------------------------------------------------------------------------------------------------------------------

The full [commit history to WCAG 2.1](https://github.com/w3c/wcag21/commits/master/guidelines) is available.

### <span class="secno">A.1 </span>Significant editorial changes since the [Candidate Recommendation](https://www.w3.org/TR/2018/CR-WCAG21-20180130/)<span class="permalink">[§](#significant-editorial-changes-since-the-candidate-recommendation "Permalink for A.1 Significant editorial changes since the Candidate Recommendation")</span>

-   2018-04-03: Change WCAG 2.0 Guideline "Seizures" to "Seizures and Physical Reactions" and reword guideline text; move [Animation from Interactions](#animation-from-interactions) to this guideline.
-   2018-04-05: Rewrote Introduction to incorporate introductory content from WCAG 2.0, describe changes from WCAG 2.0, clarify level of user support provided by the guidelines, and reference additional guidance and future work.
-   2018-04-05: Change "Status Changes" to "[Status Messages](#status-messages)" and move to "Input Assistance" guideline.
-   2018-04-11: Restore section "[Input Purposes for User Interface Components](#input-purposes)" from an earlier draft, with a reduced set of values, and change [Identify Input Purpose](#identify-input-purpose) to reference this list instead of an external resource.
-   2018-04-12: Rename Identify Common Purpose as [Identify Input Purpose](#identify-input-purpose).
-   2018-04-16: Move [Orientation](#orientation) and [Character Key Shortcuts](#adaptable) to Adaptable guideline.
-   2018-04-16: Rename Pointer Accessible guideline to Input Modalities and move [Motion Actuation](#motion-actuation), [Label in Name](#label-in-name), and [Concurrent Input Mechanisms](#concurrent-input-mechanisms) to this guideline.
-   2018-04-16: Remove Additional Sensor Inputs guideline (its success criteria having been moved to other guidelines).

In addition to these changes, some success criteria had minor wording changes to clarify intent. These are noted in the change log.

### <span class="secno">A.2 </span>Other substantive changes since the [first public working draft](https://www.w3.org/TR/2017/WD-WCAG21-20170228/)<span class="permalink">[§](#other-substantive-changes-since-the-first-public-working-draft "Permalink for A.2 Other substantive changes since the first public working draft")</span>

-   2017-03-16: Remove Success Criteria that were listed as "proposals" in the First Public Working Draft but not yet past the Working Group consensus process.
-   2017-04-13: Added definition of easily available (since removed).
-   2017-04-14: Accepted new version of Accidental Activation (since renamed [Pointer Cancellation](#pointer-cancellation)), changing "Timing of event is essential..." to "Down-event activation event is essential..." and removing note about applicability when AT that remaps touch gestures is not turned on.
-   2017-04-14: Added content that had been omitted from WCAG 2.0 Success Criteria [Error Prevention (Legal, Financial, Data)](#error-prevention-legal-financial-data), [Error Prevention (All)](#error-prevention-all), and [Visual Presentation](#visual-presentation).
-   2017-04-19: Added definition of <a href="#dfn-essential" class="internalDFN">essential</a> (which had been omitted from WCAG 2.0 terms) and <a href="#dfn-css-pixels" class="internalDFN">css pixel</a>.
-   2017-05-24: Added "color" to WCAG 2.0 [1.3.3 Sensory Characteristics](#sensory-characteristics), and removed note about color from that and [1.4.1 Use of Color](#use-of-color), to reflect a [WCAG 2.0 erratum](https://www.w3.org/WAI/WCAG20/errata/).
-   2017-06-06: Added Change of Content (since renamed [Status Messages](#status-messages)) and definition primary purpose of the page.
-   2017-06-09: Added [Character Key Shortcuts](#character-key-shortcuts) (which was in the First Public Working Draft as "Single-key Shortcuts").
-   2017-06-23: Added Zoom Content (which was in the First Public Working Draft as "Resize Content" and since renamed [Reflow](#reflow)), Accessible Authentication (since removed), User Interface Component Contrast (Minimum) (later removed).
-   2017-06-27: Added [Orientation](#orientation), changed term "orientation" to display orientation (since removed), and added examples to definition of <a href="#dfn-essential" class="internalDFN">essential</a>.
-   2017-07-18: Added Accessible Name (since renamed [Label in Name](#label-in-name)).
-   2017-07-25: Added Adapting Text (since renamed [Text Spacing](#text-spacing)), with definitions for adapt (since removed) and <a href="#dfn-style-properties" class="internalDFN">style properties</a>.
-   2017-07-25: Added note to [Conformance Criterion 2](#cc2) about full page variants.
-   2017-08-04: Clarified examples in the <a href="#dfn-set-of-web-pages" class="internalDFN">set of web pages</a> term.
-   2017-08-09: Added Target Size (since removed) and Target Size (no exceptions) (since renamed Target Size (Enhanced)) (since renamed [Target Size](#target-size)), along with term for <a href="#dfn-target" class="internalDFN">target</a>.
-   2017-08-15: Added [Content on Hover or Focus](#content-on-hover-or-focus) and Contextual Information (since renamed [Identify Input Purpose](#identify-input-purpose)) along with definition for contextual information.
-   2017-08-18: Added [Concurrent Input Mechanisms](#concurrent-input-mechanisms), [Timeouts](#timeouts), [Pointer Gestures](#pointer-gestures), and a reference to machine-readable metadata about accessibility characteristics of the content in [Optional Components of a Conformance Claim](#conformance-optional).
-   2017-08-24: Added Purpose of Controls (later renamed [Identify Input Purpose](#identify-input-purpose)).
-   2017-08-28: Added [Animation from Interactions](#animation-from-interactions).
-   2017-09-05: Added Device Sensors (since renamed [Motion Actuation](#motion-actuation)), along with term for device sensor.
-   2017-09-26: Editorial clarifications to Accessible Authentication (since removed).
-   2017-09-29: Restored original WCAG 2.0 definition of <a href="#dfn-essential" class="internalDFN">essential</a> and added note to [Orientation](#orientation) to clarify aspects that had been in the definition.
-   2017-10-10: Changed Accessible Name to [Label in Name](#label-in-name) and reworded.
-   2017-10-20: Wording clarifications in Change of Content (later renamed [Status Messages](#status-messages)).
-   2017-10-31: Reworded note about examples in User Interface Component Contrast (Minimum) (later removed).
-   2017-11-05: Reworded [Label in Name](#label-in-name).
-   2017-11-15: Reworded [Character Key Shortcuts](#character-key-shortcuts).
-   2017-11-29: Changed Adapting Text to [Text Spacing](#text-spacing) and made some rewording. Moved [Concurrent Input Mechanisms](#concurrent-input-mechanisms) from AA to AAA and made editorial clarification. Reworded [Orientation](#orientation). Expanded wording of [Pointer Gestures](#pointer-gestures). Restructured Graphics Contrast (since renamed [Non-Text Contrast](#non-text-contrast)). Removed User Interface Component Contrast (Minimum). Rename Zoom Content to [Reflow](#reflow) with corresponding wording changes.
-   2017-12-01: Adjusted values and conditions of Target Size and changed Target Size (No Exception) to Target Size (Enhanced) (since renamed [Target Size](#target-size)) with less exceptions.
-   2017-12-05: Reworded [Timeouts](#timeouts) with definition for <a href="#dfn-user-inactivity" class="internalDFN">user inactivity</a> and changed maximum time limit. Renamed Purpose of Controls to Identify Common Purpose (later renamed [Identify Input Purpose](#identify-input-purpose)) and restructured to remove definitions for conventional buttons or controls, fields and links, and instead reference a new section Common Control Purposes (since removed). Restructured [Content on Hover or Focus](#content-on-hover-or-focus). Changed Device Sensors to [Motion Actuation](#motion-actuation), restructured, and removed term for device sensor. Changed Accidental Activation to [Pointer Cancellation](#pointer-cancellation), restructured, added term for <a href="#dfn-down-event" class="internalDFN">down-event</a> and <a href="#dfn-single-pointer" class="internalDFN">single pointer</a>, and removed term for single pointer activation. Changed Change of Content to [Status Messages](#status-messages), simplified wording, added term for <a href="#dfn-status-messages" class="internalDFN">status messages</a>, and removed terms for change of content and primary purpose of the page.
-   2017-12-06: Reworded Graphics Contrast (since renamed [Non-Text Contrast](#non-text-contrast)) and added definition for <a href="#dfn-states" class="internalDFN">state</a>. Removed terms for adapt and display orientation.
-   2017-12-11: Remove redundant "Credit Card" value and changed "Name on Credit Card" to "Credit Card Holder Name" in Common Input Control Purposes (since removed).
-   2017-12-14: Changed reference to Pointer Events to reference the W3C Recommendation version.
-   2017-12-21: Removed Interruptions (Minimum) and term for easily available.
-   2018-01-03: Removed Accessible Authentication, changed Contextual Information to [Identify Purpose](#identify-purpose) with rewording and removed term contextual information, and reworded [Animation from Interactions](#animation-from-interactions).
-   2018-01-08: Reworded Graphics Contrast (since renamed [Non-Text Contrast](#non-text-contrast)), added "Main content" to Common Control Purposes (since removed).
-   2018-01-11: Reworded [Text Spacing](#text-spacing).
-   2018-01-13: Reworded term <a href="#dfn-target" class="internalDFN">target</a> and added guideline text for Additional Sensor Inputs (since removed).
-   2018-01-14: Clarified which sections of spec participate in the conformance model.
-   2018-01-17: Reworded [Timeouts](#timeouts), [Motion Actuation](#motion-actuation), clarified "visually" in [Label in Name](#label-in-name).
-   2018-01-19: Clarified "without a path-based gesture" in [Pointer Gestures](#pointer-gestures) and reworded term <a href="#dfn-single-pointer" class="internalDFN">single pointer</a>, added exception to [Text Spacing](#text-spacing), removed Target Size, reworded Identify Common Purpose (later renamed [Identify Input Purpose](#identify-input-purpose)) and removed Common Control Purposes section, reworded [Reflow](#reflow), reworded [Animation from Interactions](#animation-from-interactions) and added definition for <a href="#dfn-motion-animation" class="internalDFN">motion animation</a>, reworded [Character Key Shortcuts](#character-key-shortcuts) and removed definition for character key, reworded [Content on Hover or Focus](#content-on-hover-or-focus), changed Graphics Contrast to [Non-Text Contrast](#non-text-contrast) and reworded.
-   2018-01-23: Renamed Target Size (Enhanced) to [Target Size](#target-size).

<span class="secno">B. </span>Acknowledgments<span class="permalink">[§](#acknowledgments "Permalink for B. Acknowledgments")</span>
------------------------------------------------------------------------------------------------------------------------------------

Additional information about participation in the Web Content Accessibility Guidelines Working Group (WCAG WG) can be found on the [Working Group home page](https://www.w3.org/WAI/GL/).

### <span class="secno">B.1 </span>Participants of the WCAG WG active in the development of this document:<span class="permalink">[§](#ack_participants-active "Permalink for B.1 Participants of the WCAG WG active in the development of this document:")</span>

-   Jake Abma (Invited Expert)
-   Shadi Abou-Zahra (W3C)
-   Jim Allan (Invited Expert)
-   Paul Adam (Deque Systems, Inc.)
-   Jon Avila (SSB Bart Group)
-   Tom Babinszki (IBM Corporation)
-   Bruce Bailey (U.S. Access Board)
-   Renaldo Bernard (University of Southampton)
-   Judy Brewer (W3c)
-   Shari Butler (Pearson plc)
-   Thaddeus Cambron (Invited Expert)
-   Alastair Campbell (Nomensa)
-   Laura Carlson (Invited Expert)
-   Louis Cheng (Google)
-   Pietro Cirrincione (Invited Expert)
-   Vivienne Conway (Web Key IT Pty Ltd)
-   Michael Cooper (W3C)
-   Romain Deltour (DAISY Consortium)
-   Wayne Dick (Knowbility, Inc)
-   Chaohai Ding (University of Southampton)
-   Kim Dirks (Thompson Reuters)
-   Shwetank Dixit (BarrierBreak Technologies)
-   Anthony Doran (TextHelp)
-   E.A. Draffan (University of Southampton)
-   Eric Eggert (W3C)
-   Michael Elledge (Invited Expert)
-   Wilco Fiers (Deque Systems, Inc.)
-   Detlev Fischer (Invited Expert)
-   John Foliot (Deque Systems, Inc.)
-   Matt Garrish (DAISY Consortium)
-   Alistair Garrison (SSB Bart Group)
-   Michael Gower (IBM Corporation)
-   Jon Gunderson
-   Markku Hakkinen (Educational Testing Service)
-   Katie Haritos-Shea (Knowbility, Inc)
-   Andy Heath (Invited Expert)
-   Shawn Henry (W3C)
-   Thomas Hoffman (Educational Testing Service)
-   Sarah Horton (The Paciello Group, LLC)
-   Stefan Johansson (Invited Expert)
-   Marc Johlic (IBM Corporation)
-   Barry Johnson (Deque Systems, Inc.)
-   Rick Johnson (VitalSource | Ingram Content Group)
-   Crystal Jones (Microsoft Corporation)
-   Andrew Kirkpatrick (Adobe)
-   John Kirkwood (Invited Expert)
-   Jason Kiss (Department of Internal Affairs, New Zealand Government)
-   Maureen Kraft (IBM Corporation)
-   JaEun Ku (University of Illinois at Urbana-Champaign)
-   Patrick Lauke (The Paciello Group, LLC)
-   Shawn Lauriat (Google, Inc.)
-   Steve Lee (Invited Expert)
-   Alex Li (Microsoft Corporation)
-   Chris Loiselle (Invited Expert)
-   Greg Lowney (Invited Expert)
-   Adam Lund (Thomson Reuters)
-   David MacDonald (Invited Expert)
-   Erich Manser (IBM Corporation)
-   Scott McCormack (SSB Bart Group)
-   Chris McMeeking (Deque Systems, Inc.)
-   Jan McSorley (Pearson plc)
-   Neil Milliken (Unify Software and Solutions)
-   Rachael Montgomery (MITRE Corporation)
-   Mary Jo Mueller (IBM Corporation)
-   Brooks Newton (Thomson Reuters)
-   James Nurthen (Oracle Corporation)
-   Joshue O Connor (Invited Expert)
-   Sailesh Panchang (Deque Systems, Inc.)
-   Charu Pandhi (IBM Corporation)
-   Kim Patch (Invited Expert)
-   Mike Pluke (Invited Expert)
-   Ian Pouncey (The Paciello Group, LLC)
-   Ruoxi Ran (W3C)
-   Stephen Repsher (The Boeing Company)
-   Jan Richards (Invited Expert)
-   John Rochford (Invited Expert)
-   Marla Runyan (Invited Expert)
-   Ayelet Seeman (Invited Expert)
-   Lisa Seeman-Kestenbaum (Invited Expert)
-   Glenda Sims (Deque Systems, Inc.)
-   Avneesh Singh (DAISY Consortium)
-   David Sloan (The Paciello Group, LLC)
-   Alan Smith (Invited Expert)
-   Jim Smith (Unify Software and Solutions)
-   Adam Solomon (Invited Expert)
-   Jaeil Song (National Information Society Agency (NIA))
-   Jeanne Spellman (The Paciello Group, LLC)
-   Makoto Ueki (Invited Expert)
-   Gregg Vanderheiden (Raising the Floor)
-   Evangelos Vlachogiannis (Fraunhofer Gesellschaft)
-   Kathleen Wahlbin (Invited Expert)
-   Can Wang (Zhejiang University)
-   Léonie Watson (The Paciello Group, LLC)
-   Jason White (Educational Testing Service)

### <span class="secno">B.2 </span>Other previously active WCAG WG participants and other contributors to WCAG 2.0, WCAG 2.1, or supporting resources <span class="permalink">[§](#ack_participants-previous "Permalink for B.2 Other previously active WCAG WG participants and other contributors to WCAG 2.0, WCAG 2.1, or supporting resources ")</span>

Paul Adam, Jenae Andershonis, Wilhelm Joys Andersen, Andrew Arch, Avi Arditti, Aries Arditi, Mark Barratt, Mike Barta, Sandy Bartell, Kynn Bartlett, Chris Beer, Charles Belov, Marco Bertoni, Harvey Bingham, Chris Blouch, Paul Bohman, Frederick Boland, Denis Boudreau, Patrice Bourlon, Andy Brown, Dick Brown, Doyle Burnett, Raven Calais, Ben Caldwell, Tomas Caspers, Roberto Castaldo, Sofia Celic-Li, Sambhavi Chandrashekar, Mike Cherim, Jonathan Chetwynd, Wendy Chisholm, Alan Chuter, David M Clark, Joe Clark, Darcy Clarke, James Coltham, Earl Cousins, James Craig, Tom Croucher, Pierce Crowell, Nir Dagan, Daniel Dardailler, Geoff Deering, Sébastien Delorme, Pete DeVasto, Iyad Abu Doush, Sylvie Duchateau, Cherie Eckholm, Roberto Ellero, Don Evans, Gavin Evans, Neal Ewers, Steve Faulkner, Bengt Farre, Lainey Feingold, Wilco Fiers, Michel Fitos, Alan J. Flavell, Nikolaos Floratos, Kentarou Fukuda, Miguel Garcia, P.J. Gardner, Alistair Garrison, Greg Gay, Becky Gibson, Al Gilman, Kerstin Goldsmith, Michael Grade, Karl Groves, Loretta Guarino Reid, Jon Gunderson, Emmanuelle Gutiérrez y Restrepo, Brian Hardy, Eric Hansen, Benjamin Hawkes-Lewis, Sean Hayes, Shawn Henry, Hans Hillen, Donovan Hipke, Bjoern Hoehrmann, Allen Hoffman, Chris Hofstader, Yvette Hoitink, Martijn Houtepen, Carlos Iglesias, Richard Ishida, Jonas Jacek, Ian Jacobs, Phill Jenkins, Duff Johnson, Jyotsna Kaki, Shilpi Kapoor, Leonard R. Kasday, Kazuhito Kidachi, Ken Kipness, Johannes Koch, Marja-Riitta Koivunen, Preety Kumar, Kristjan Kure, Andrew LaHart, Gez Lemon, Chuck Letourneau, Aurélien Levy, Harry Loots, Scott Luebking, Tim Lacy, Jim Ley, Alex Li, William Loughborough, N Maffeo, Mark Magennis, Kapsi Maria, Luca Mascaro, Matt May, Sheena McCullagh, Liam McGee, Jens Oliver Meiert, Niqui Merret, Jonathan Metz, Alessandro Miele, Steven Miller, Mathew J Mirabella, Matt May, Marti McCuller, Sorcha Moore, Charles F. Munat, Robert Neff, Charles Nevile, Liddy Nevile, Dylan Nicholson, Bruno von Niman, Tim Noonan, Sebastiano Nutarelli, Graham Oliver, Sean B. Palmer, Devarshi Pant, Nigel Peck, Anne Pemberton, David Poehlman, Ian Pouncey, Charles Pritchard, Kerstin Probiesch, W Reagan, Adam Victor Reed, Chris Reeve, Chris Ridpath, Lee Roberts, Mark Rogers, Raph de Rooij, Gregory J. Rosmaita, Matthew Ross, Sharron Rush, Joel Sanda, Janina Sajka, Roberto Scano, Gordon Schantz, Tim van Schie, Wolf Schmidt, Stefan Schnabel, Cynthia Shelly, Glenda Sims, John Slatin, Becky Smith, Jared Smith, Andi Snow-Weaver, Neil Soiffer, Mike Squillace, Michael Stenitzer, Diane Stottlemyer, Christophe Strobbe, Sarah J Swierenga, Jim Thatcher, Terry Thompson, Justin Thorp, David Todd, Mary Utt, Jean Vanderdonckt, Carlos A Velasco, Eric Velleman, Gijs Veyfeyken, Dena Wainwright, Paul Walsch, Daman Wandke, Richard Warren, Elle Waters, Takayuki Watanabe, Gian Wild, David Wooley, Wu Wei, Kenny Zhang, Leona Zumbo.

### <span class="secno">B.3 </span>Enabling funders<span class="permalink">[§](#enabling-funders "Permalink for B.3 Enabling funders")</span>

This publication has been funded in part with U.S. Federal funds from the Health and Human Services, National Institute on Disability, Independent Living, and Rehabilitation Research (NIDILRR), initially under contract number ED-OSE-10-C-0067 and now under contract number HHSP23301500054C. The content of this publication does not necessarily reflect the views or policies of the U.S. Department of Health and Human Services or the U.S. Department of Education, nor does mention of trade names, commercial products, or organizations imply endorsement by the U.S. Government.

<span class="secno">C. </span>References<span class="permalink">[§](#references "Permalink for C. References")</span>
---------------------------------------------------------------------------------------------------------------------

### <span class="secno">C.1 </span>Normative references<span class="permalink">[§](#normative-references "Permalink for C.1 Normative references")</span>

\[css3-values\]  
[CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/). Tab Atkins Jr.; Elika Etemad. W3C. 29 September 2016. W3C Candidate Recommendation. URL: <https://www.w3.org/TR/css-values-3/>

\[pointerevents\]  
[Pointer Events](https://www.w3.org/TR/pointerevents/). Jacob Rossi; Matt Brubeck. W3C. 24 February 2015. W3C Recommendation. URL: <https://www.w3.org/TR/pointerevents/>

\[WCAG20\]  
[Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/). Ben Caldwell; Michael Cooper; Loretta Guarino Reid; Gregg Vanderheiden et al. W3C. 11 December 2008. W3C Recommendation. URL: <https://www.w3.org/TR/WCAG20/>

### <span class="secno">C.2 </span>Informative references<span class="permalink">[§](#informative-references "Permalink for C.2 Informative references")</span>

\[HARDING-BINNIE\]  
Independent Analysis of the ITC Photosensitive Epilepsy Calibration Test TapeHarding G. F. A.; Binnie, C.D..2002.

\[IEC-4WD\]  
IEC/4WD 61966-2-1: Colour Measurement and Management in Multimedia Systems and Equipment - Part 2.1: Default Colour Space - sRGBMay 5, 1998.

\[RFC2119\]  
[Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). S. Bradner. IETF. March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

\[sRGB\]  
[A Standard Default Color Space for the Internet - sRGB, Version 1.10](https://www.w3.org/Graphics/Color/sRGB.html). M. Stokes; M. Anderson; S. Chandrasekar; R. Motta.November 5, 1996. URL: <https://www.w3.org/Graphics/Color/sRGB.html>

\[UAAG10\]  
[User Agent Accessibility Guidelines 1.0](https://www.w3.org/TR/UAAG10/). Ian Jacobs; Jon Gunderson; Eric Hansen. W3C. 17 December 2002. W3C Recommendation. URL: <https://www.w3.org/TR/UAAG10/>

\[UNESCO\]  
[International Standard Classification of Education](http://www.unesco.org/education/information/nfsunesco/doc/isced_1997.htm). 1997. URL: <http://www.unesco.org/education/information/nfsunesco/doc/isced_1997.htm>

\[WAI-WEBCONTENT\]  
[Web Content Accessibility Guidelines 1.0](https://www.w3.org/TR/WAI-WEBCONTENT/). Wendy Chisholm; Gregg Vanderheiden; Ian Jacobs. W3C. 5 May 1999. W3C Recommendation. URL: <https://www.w3.org/TR/WAI-WEBCONTENT/>

[↑](#title)
