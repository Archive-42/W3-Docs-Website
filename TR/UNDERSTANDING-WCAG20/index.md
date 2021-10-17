[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](https://www.w3.org/)

<span id="title"></span> Understanding WCAG 2.0
===============================================

<span id="subtitle"></span> A guide to understanding and implementing Web Content Accessibility Guidelines 2.0
--------------------------------------------------------------------------------------------------------------

<span id="w3c-doctype"></span> W3C Working Group Note 7 October 2016
--------------------------------------------------------------------

This version:  
<https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/>

Latest version:  
<https://www.w3.org/TR/UNDERSTANDING-WCAG20/>

Previous version:  
<https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20160317/>

Editors:  
Michael Cooper, W3C

Andrew Kirkpatrick, Adobe Systems Inc.

Joshue O Connor, InterAccess

Previous Editors:  
Loretta Guarino Reid (until May 2013 while at Google, Inc.)

Gregg Vanderheiden (until May 2013 while at Trace R&D Center, University of Wisconsin-Madison)

Ben Caldwell (until September 2010 while at Trace R&D Center, University of Wisconsin-Madison)

Wendy Chisholm (until July 2006 while at W3C)

John Slatin (until June 2006 while at Accessibility Institute, University of Texas at Austin)

This document is also available in these non-normative formats:

-   [Single file version](complete.html)
-   [Single file diff-marked version showing revisions since 17 March 2015](complete-diff.html), and 
-   [Alternate Versions of Understanding WCAG 2.0](/WAI/WCAG20/versions/understanding/),

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](https://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span id="abstract"></span> Abstract
------------------------------------

This document, "Understanding WCAG 2.0," is an essential guide to understanding and using [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/) [\[WCAG20\]](appendixE.html#WCAG20). It is part of a series of documents that support WCAG 2.0. Please note that the contents of this document are informative (they provide guidance), and not normative (they do not set requirements for conforming to WCAG 2.0). See [Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/intro/wcag.php) for an introduction to WCAG, supporting technical documents, and educational material.

WCAG 2.0 establishes a set of Success Criteria to define conformance to the WCAG 2.0 Guidelines. A Success Criterion is a testable statement that will be either true or false when applied to specific Web content. "Understanding WCAG 2.0" provides detailed information about each Success Criterion, including its intent, the key terms that are used in the Success Criterion, and how the Success Criteria in WCAG 2.0 help people with different types of disabilities. This document also provides examples of Web content that meet the success criterion using various Web technologies (for instance, HTML, CSS, XML), and common examples of Web content that does not meet the success criterion.

This document indicates specific techniques to meet each Success Criterion. Details for how to implement each technique are available in [Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/), but "Understanding WCAG 2.0" provides the information about the relationship of each technique to the Success Criteria. Techniques are categorized by the level of support they provide for the Success Criteria. "Sufficient techniques" are *sufficient* to meet a particular Success Criterion (either by themselves or in combination with other techniques), while other techniques are advisory and therefore optional. None of the techniques are *required* to meet WCAG 2.0, although some may be the only known method if a particular technology is used. "Advisory techniques" are not sufficient to meet the Success Criteria on their own (because they are not testable or provide incomplete support) but it is encouraged that authors follow them when possible to provide enhanced accessibility.

In addition to techniques for addressing the success criteria, "Common Failures" are also documented. These "Common Failures" are authoring practices that are known to cause Web content to fail to conform to WCAG 2.0. Authors must avoid those practices in order to meet the WCAG 2.0 Success Criteria.

This document is part of a series of documents published by the W3C Web Accessibility Initiative (WAI) to support WCAG 2.0. This document was published as a Working Group Note at the same time WCAG 2.0 was published as a W3C Recommendation. Unlike WCAG 2.0, is expected that the information in Understanding WCAG 2.0 will be updated from time to time. See [Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/intro/wcag.php) for an introduction to WCAG, supporting technical documents, and educational material.

<span id="status"></span> Status of This Document
-------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at <https://www.w3.org/TR/>.*

This is a <span class="final">Working Group Note</span> "Understanding WCAG 2.0". The [Web Content Accessibility Guidelines Working Group](https://www.w3.org/WAI/GL/) considers this document to be important for understanding the success criteria in the [Web Content Accessibility Guidelines (WCAG) 2.0 Recommendation](https://www.w3.org/TR/2008/REC-WCAG20-20081211/). Please note that the contents of this document are informative (they provide guidance), and not normative (they do not set requirements for conforming to WCAG 2.0).

Understanding WCAG 2.0 was previously published on 11 December 2008 as a Working Group Note and updated 14 October 2010, 3 January 2012, 5 September 2013, 3 March 2014, 8 April 2014, 16 September 2014, 26 February 2015, and 17 March 2016. This new version updates the support information provided for WCAG 2.0. Note that WCAG 2.0 itself remains unchanged, only the informative support materials have been updated. The only change in this version is to [add explanation about partial conformance claims due to third-party content](conformance.html#uc-partial-third-head).

The changes are highlighted in the [diff-marked version](complete-diff).

The Working Group requests that any comments be made using the options documented in [Instructions for Commenting on WCAG 2.0 Documents](https://www.w3.org/WAI/WCAG20/comments/). If this is not possible, comments can also be sent to <public-comments-wcag20@w3.org>. The [archives for the public comments list](http://lists.w3.org/Archives/Public/public-comments-wcag20/) are publicly available. <span class="final">Comments received on this document may be addressed in future versions of this document, or in another manner. </span> Archives of the [WCAG WG mailing list discussions](http://lists.w3.org/Archives/Public/w3c-wai-gl/) are also publicly available, and future work undertaken by the Working Group may address comments received on this document.

This document has been produced as part of the W3C [Web Accessibility Initiative](https://www.w3.org/WAI/) (WAI). The goals of the WCAG Working Group are discussed in the [WCAG Working Group charter](https://www.w3.org/WAI/GL/charter). The WCAG Working Group is part of the [WAI Technical Activity](https://www.w3.org/WAI/Technical/Activity).

Publication as a <span class="final">Working Group Note</span> does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy-20040205/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/35422/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2015/Process-20150901/" id="w3c_process_revision">1 September 2015 W3C Process Document</a>.

------------------------------------------------------------------------

<span id="contents"></span> Table of Contents
---------------------------------------------

-   [Abstract](#abstract)
-   [Status of This Document](#status)
-   [Introduction to Understanding WCAG 2.0](intro.html)
-   [Understanding Techniques for WCAG Success Criteria](understanding-techniques.html)
-   [Understanding Guideline 1.1 \[Text Alternatives\]](text-equiv.html)
    -   [Understanding Success Criterion 1.1.1 \[Non-text Content\]](text-equiv-all.html)
-   [Understanding Guideline 1.2 \[Time-based Media\]](media-equiv.html)
    -   [Understanding Success Criterion 1.2.1 \[Audio-only and Video-only (Prerecorded)\]](media-equiv-av-only-alt.html)
    -   [Understanding Success Criterion 1.2.2 \[Captions (Prerecorded)\]](media-equiv-captions.html)
    -   [Understanding Success Criterion 1.2.3 \[Audio Description or Media Alternative (Prerecorded)\]](media-equiv-audio-desc.html)
    -   [Understanding Success Criterion 1.2.4 \[Captions (Live)\]](media-equiv-real-time-captions.html)
    -   [Understanding Success Criterion 1.2.5 \[Audio Description (Prerecorded)\]](media-equiv-audio-desc-only.html)
    -   [Understanding Success Criterion 1.2.6 \[Sign Language (Prerecorded)\]](media-equiv-sign.html)
    -   [Understanding Success Criterion 1.2.7 \[Extended Audio Description (Prerecorded)\]](media-equiv-extended-ad.html)
    -   [Understanding Success Criterion 1.2.8 \[Media Alternative (Prerecorded)\]](media-equiv-text-doc.html)
    -   [Understanding Success Criterion 1.2.9 \[Audio-only (Live)\]](media-equiv-live-audio-only.html)
-   [Understanding Guideline 1.3 \[Adaptable\]](content-structure-separation.html)
    -   [Understanding Success Criterion 1.3.1 \[Info and Relationships\]](content-structure-separation-programmatic.html)
    -   [Understanding Success Criterion 1.3.2 \[Meaningful Sequence\]](content-structure-separation-sequence.html)
    -   [Understanding Success Criterion 1.3.3 \[Sensory Characteristics\]](content-structure-separation-understanding.html)
-   [Understanding Guideline 1.4 \[Distinguishable\]](visual-audio-contrast.html)
    -   [Understanding Success Criterion 1.4.1 \[Use of Color\]](visual-audio-contrast-without-color.html)
    -   [Understanding Success Criterion 1.4.2 \[Audio Control\]](visual-audio-contrast-dis-audio.html)
    -   [Understanding Success Criterion 1.4.3 \[Contrast (Minimum)\]](visual-audio-contrast-contrast.html)
    -   [Understanding Success Criterion 1.4.4 \[Resize text\]](visual-audio-contrast-scale.html)
    -   [Understanding Success Criterion 1.4.5 \[Images of Text\]](visual-audio-contrast-text-presentation.html)
    -   [Understanding Success Criterion 1.4.6 \[Contrast (Enhanced)\]](visual-audio-contrast7.html)
    -   [Understanding Success Criterion 1.4.7 \[Low or No Background Audio\]](visual-audio-contrast-noaudio.html)
    -   [Understanding Success Criterion 1.4.8 \[Visual Presentation\]](visual-audio-contrast-visual-presentation.html)
    -   [Understanding Success Criterion 1.4.9 \[Images of Text (No Exception)\]](visual-audio-contrast-text-images.html)
-   [Understanding Guideline 2.1 \[Keyboard Accessible\]](keyboard-operation.html)
    -   [Understanding Success Criterion 2.1.1 \[Keyboard\]](keyboard-operation-keyboard-operable.html)
    -   [Understanding Success Criterion 2.1.2 \[No Keyboard Trap\]](keyboard-operation-trapping.html)
    -   [Understanding Success Criterion 2.1.3 \[Keyboard (No Exception)\]](keyboard-operation-all-funcs.html)
-   [Understanding Guideline 2.2 \[Enough Time\]](time-limits.html)
    -   [Understanding Success Criterion 2.2.1 \[Timing Adjustable\]](time-limits-required-behaviors.html)
    -   [Understanding Success Criterion 2.2.2 \[Pause, Stop, Hide\]](time-limits-pause.html)
    -   [Understanding Success Criterion 2.2.3 \[No Timing\]](time-limits-no-exceptions.html)
    -   [Understanding Success Criterion 2.2.4 \[Interruptions\]](time-limits-postponed.html)
    -   [Understanding Success Criterion 2.2.5 \[Re-authenticating\]](time-limits-server-timeout.html)
-   [Understanding Guideline 2.3 \[Seizures\]](seizure.html)
    -   [Understanding Success Criterion 2.3.1 \[Three Flashes or Below Threshold\]](seizure-does-not-violate.html)
    -   [Understanding Success Criterion 2.3.2 \[Three Flashes\]](seizure-three-times.html)
-   [Understanding Guideline 2.4 \[Navigable\]](navigation-mechanisms.html)
    -   [Understanding Success Criterion 2.4.1 \[Bypass Blocks\]](navigation-mechanisms-skip.html)
    -   [Understanding Success Criterion 2.4.2 \[Page Titled\]](navigation-mechanisms-title.html)
    -   [Understanding Success Criterion 2.4.3 \[Focus Order\]](navigation-mechanisms-focus-order.html)
    -   [Understanding Success Criterion 2.4.4 \[Link Purpose (In Context)\]](navigation-mechanisms-refs.html)
    -   [Understanding Success Criterion 2.4.5 \[Multiple Ways\]](navigation-mechanisms-mult-loc.html)
    -   [Understanding Success Criterion 2.4.6 \[Headings and Labels\]](navigation-mechanisms-descriptive.html)
    -   [Understanding Success Criterion 2.4.7 \[Focus Visible\]](navigation-mechanisms-focus-visible.html)
    -   [Understanding Success Criterion 2.4.8 \[Location\]](navigation-mechanisms-location.html)
    -   [Understanding Success Criterion 2.4.9 \[Link Purpose (Link Only)\]](navigation-mechanisms-link.html)
    -   [Understanding Success Criterion 2.4.10 \[Section Headings\]](navigation-mechanisms-headings.html)
-   [Understanding Guideline 3.1 \[Readable\]](meaning.html)
    -   [Understanding Success Criterion 3.1.1 \[Language of Page\]](meaning-doc-lang-id.html)
    -   [Understanding Success Criterion 3.1.2 \[Language of Parts\]](meaning-other-lang-id.html)
    -   [Understanding Success Criterion 3.1.3 \[Unusual Words\]](meaning-idioms.html)
    -   [Understanding Success Criterion 3.1.4 \[Abbreviations\]](meaning-located.html)
    -   [Understanding Success Criterion 3.1.5 \[Reading Level\]](meaning-supplements.html)
    -   [Understanding Success Criterion 3.1.6 \[Pronunciation\]](meaning-pronunciation.html)
-   [Understanding Guideline 3.2 \[Predictable\]](consistent-behavior.html)
    -   [Understanding Success Criterion 3.2.1 \[On Focus\]](consistent-behavior-receive-focus.html)
    -   [Understanding Success Criterion 3.2.2 \[On Input\]](consistent-behavior-unpredictable-change.html)
    -   [Understanding Success Criterion 3.2.3 \[Consistent Navigation\]](consistent-behavior-consistent-locations.html)
    -   [Understanding Success Criterion 3.2.4 \[Consistent Identification\]](consistent-behavior-consistent-functionality.html)
    -   [Understanding Success Criterion 3.2.5 \[Change on Request\]](consistent-behavior-no-extreme-changes-context.html)
-   [Understanding Guideline 3.3 \[Input Assistance\]](minimize-error.html)
    -   [Understanding Success Criterion 3.3.1 \[Error Identification\]](minimize-error-identified.html)
    -   [Understanding Success Criterion 3.3.2 \[Labels or Instructions\]](minimize-error-cues.html)
    -   [Understanding Success Criterion 3.3.3 \[Error Suggestion\]](minimize-error-suggestions.html)
    -   [Understanding Success Criterion 3.3.4 \[Error Prevention (Legal, Financial, Data)\]](minimize-error-reversible.html)
    -   [Understanding Success Criterion 3.3.5 \[Help\]](minimize-error-context-help.html)
    -   [Understanding Success Criterion 3.3.6 \[Error Prevention (All)\]](minimize-error-reversible-all.html)
-   [Understanding Guideline 4.1 \[Compatible\]](ensure-compat.html)
    -   [Understanding Success Criterion 4.1.1 \[Parsing\]](ensure-compat-parses.html)
    -   [Understanding Success Criterion 4.1.2 \[Name, Role, Value\]](ensure-compat-rsv.html)
-   [Understanding Conformance](conformance.html)

//

### <span id="appendices"></span> Appendices

-   Appendix A [How to refer to WCAG 2.0 from other documents](appendixA.html)
-   Appendix B [Documenting Accessibility Support for Uses of a Web Technology](appendixB.html)
-   Appendix C [Understanding Metadata](appendixC.html)
-   Appendix D [Acknowledgements](appendixD.html)
-   Appendix E [References](appendixE.html)

------------------------------------------------------------------------

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Next:** Introduction to Understanding WCAG 2.0](intro.html "Understanding Introduction to Understanding WCAG 2.0")
