[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

<span id="title"></span>Web Content Accessibility Guidelines (WCAG) 2.0 Errata
==============================================================================

Last modified: $Date: 2017/05/24 13:49:22 $

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) (©) 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span id="abstract"></span>Abstract
-----------------------------------

This document records all known errors in the [Web Content Accessibility Guidelines (WCAG) 2.0](http://www.w3.org/TR/WCAG20/) specification.

The errata are numbered, classified as [Substantive](#substantive) or [Editorial](#editorial), and listed in reverse chronological order of their date of publication in each category.

Each entry has the following information:

-   A unique entry number
-   The date it was added to the errata page.
-   The section referred to.
-   A description of the problem and correction if applicable.
-   A rationale for making the change (not required for editorial errata).

Substantive corrections are proposed by the [Web Content Accessibility Guidelines Working Group](http://www.w3.org/WAI/GL/) (part of the [Web Accessibility Initiative](http://www.w3.org/WAI/)), which has consensus that they are appropriate; they are not to be considered normative until approved by a [Call for Review of Proposed Corrections](http://www.w3.org/2004/02/Process-20040205/tr.html#cfr-corrections) or a [Call for Review of an Edited Recommendation](http://www.w3.org/2004/02/Process-20040205/tr.html#cfr-edited).

Please view the [public comment instructions](/WAI/WCAG20/comments/) if you would like to comment to the Working Group. Comments submitted are publicly available in the [archive for the WCAG 2.0 public comments mailing list](http://lists.w3.org/Archives/Public/public-comments-wcag20/).

<span id="contents"></span>Table of Contents
--------------------------------------------

1 [Substantive Errata](#substantive)  
2 [Editorial Errata](#editorial)  

------------------------------------------------------------------------

<span id="substantive"></span>1 Substantive Errata
--------------------------------------------------

No substantive errata at present

<span id="editorial"></span>2 Editorial Errata
----------------------------------------------

1.  [Success Criterion 1.1.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#text-equiv-all) point "Controls, Input" has a reference to [Guideline 4.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat) for additional requirements for controls and content that accepts user input. It would be more accurate and clear if the note referred to [Success Criterion 4.1.2](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-rsv). Success Criterion 4.1.2 requires that user interface components have a name, role, state, property and value. This is closely related to the requirements that SC 1.1.1 places on user interface controls to have a name that describes its purpose.
2.  [Success Criterion 1.4.3](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast) and [Success Criterion 1.4.6](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast7) point "Logotypes" states "Text that is part of a logo or brand name has no minimum contrast requirement." The word "minimum", not used in the other points, implies a difference in meaning that is not intended. For clarity and consistency, remove the word "minimum" from this point in both Success Criteria.
3.  The definition of [idiom](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#idiomsdef) includes the Dutch phrase "<span lang="nl" lang="nl">Hij ging met de kippen op stok</span>". This phrase was incorrectly marked with the language code "ne"; it should have been marked with the language code "nl".
4.  The definition of [idiom](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#idiomsdef) includes the Japanese phrase "<span lang="ja" lang="ja">さじを投げる</span>". This phrase was incorrectly marked with the language code "jp"; it should have been marked with the language code "ja".
5.  In [WCAG 2.0 Layers of Guidance](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#intro-layers-guidance) the sentence "Note that even content that conforms at the highest level (AAA) will not be accessible to individuals with all types, degrees, or combinations of disability, particularly in the cognitive language and learning areas" lacked commas to clarify that cognitive, language, and learning were separate areas. It should read "Note that even content that conforms at the highest level (AAA) will not be accessible to individuals with all types, degrees, or combinations of disability, particularly in the cognitive, language, and learning areas".
6.  In the definition for [video-only](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#video-onlydef) the cross reference for audio linked to the definition for video instead of the proper link to [audio](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#audiodef).
7.  In [Success Criterion 3.2.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-receive-focus) the word "component" should be replaced by the term "[user interface component](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#user-interface-componentdef)" and linked to the definition of that term, to clarify that this is meant to be consistent with other success criteria that use that term.
8.  The definition for the term "[user interface component](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#user-interface-componentdef)" should have the following note to clarify its meaning: "Note: What is meant by 'component' or 'user interface component' here is also sometimes called 'user interface element'."
9.  [Success Criterion 3.2.4](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-consistent-functionality) referred to a "set of Web pages" and linked the part "[Web pages](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#webpagedef)" to the definition for that term. Instead the entire phrase should have been linked to the separate definition for "[set of Web pages](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#set-of-web-pagesdef)".
10. The definition for the term "[live](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#livedef)" should use the word "cue" instead of "queue" because it refers to the process of cuing media.
11. Success criteria [1.3.3](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-understanding) and [1.4.1](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-without-color) each refer to color and the language of the notes confuses the Working Group’s intent. Removing the notes for both and adding color to the list of sensory characteristics in 1.3.3 clarifies the success criteria and preserves the original intent.
