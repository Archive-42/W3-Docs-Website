-   [![](/Icons/downinpage.png) Skip to content](#main)
-   [| Change text size or colors](/WAI/changedesign.html)

[<img src="/Icons/w3c_home" alt="W3C logo" width="72" height="48" />](http://www.w3.org/ "W3C Home")[<img src="/WAI/images/wai-temp" alt="Web Accessibility Initiative (WAI) logo" height="48" />](http://www.w3.org/WAI/ "WAI Home")

WAI: Strategies, guidelines, resources to make the Web accessible to people with disabilities

**Site Navigation: [W3C Home](http://www.w3.org/) &gt; [WAI Home](http://www.w3.org/WAI/) &gt; [WCAG 2.0 Implementation Report](/WAI/GL/WCAG20/implementation-report/)**

Changes to WCAG 2.0 since CR
============================

**Note:** Links to the diff-marked version of the latest Editor's draft have been included so that changes can be viewed in context.

On this page
------------

-   [Significant](#cat1)
-   [Clarifications](#cat2)
-   [Editorial](#cat3)

Significant changes
-------------------

These changes affect the normative content of WCAG 2.0. However, the Working Group believes they would not have adversely affected public review of the document, and therefore did not require the document to be re-issued as a Working Draft.

1.  Conformance - <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#conformance-partial-lang" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#conformance-partial-lang">Statement of partial conformance - language</a> - Addition
    -   A "statement of partial conformance due to language" may be made, when the page does not conform, but would conform if accessibility support existed for (all of) the language(s) used on the page. The form of that statement would be, "This page would conform to WCAG 2.0 at level X if accessibility support existed for the following language(s):"
2.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#visual-audio-contrast-scale" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#visual-audio-contrast-scale">SC 1.4.4 (Resize text)</a> - Clarification
    -   **Except for captions and images of text, text** can be resized without assistive technology up to 200 percent without loss of content or functionality.

Clarifications
--------------

These changes clarify WCAG 2.0 where implementation feedback was that the requirements were not clear. They do not consitute a change in the Working Group's *intended* meaning, even if they appear to change meaning.

1.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#media-equiv" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#media-equiv">SC 1.2.1, 1.2.3, 1.2.8, 1.2.9</a> - Alternatives for time-based media - Clarification
    -   <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#alt-time-based-mediadef" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#alt-time-based-mediadef">Replace the term</a> **A full text alternative for synchronized media including any interaction** with **An alternative for time-based media**
    -   Clarify definition
    -   Use "alternatives for time-based media" consistently for all relevant Success Criteria
2.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#visual-audio-contrast-noaudio" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#visual-audio-contrast-noaudio">SC 1.4.7 (Low or No Background Audio)</a> - Clarification:
    -   *Changed: -* For **audio** content that (1) contains speech in the foreground, (2) is not an audio CAPTCHA at least one of the following is true: (Level AAA)
        -   No Background: The audio does not contain background sounds.
        -   Turn Off: The background sounds can be turned off.
        -   20 dB: The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sound **effects**.

        *to ----* For **prerecorded audio-only content** that (1) contains **primarily** speech in the foreground, (2) is not an audio CAPTCHA **or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping**, at least one of the following is true: (Level AAA)
        -   No Background: The audio does not contain background sounds.
        -   Turn Off: The background sounds can be turned off.
        -   20 dB: The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sound**s that last for only one or two seconds**.
3.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#meaning-supplements" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#meaning-supplements">SC 3.1.5 (Reading Level)</a> - Clarification:
    -   Change to when text requires reading ability more advanced than the lower secondary education level **after removal of proper names and titles**, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.
4.  General - "Accessibility Supported Technology" changed to "Ways of using technology that are accessibility supported" - Clarification in the following locations:
    -   Introduction - "Accessibility Supported" in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#new-terms" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#new-terms">Important Terms in WCAG 2.0</a>
    -   <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#cc4" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#cc4">Conformance section</a>
    -   <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#accessibility-supporteddef" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#accessibility-supporteddef">Definition of "accessibility supported"</a>
    -   Understanding Document, Appendix B
5.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#text-altdef" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#text-altdef">Definition of "text alternative"</a> - Clarification
    -   *Change -* "**programmatically determined** text that is **used in place of** non-text content**, or text that is used in addition to non-text content and referred to from the programmatically determined (programmatically determinable) text**"  
        *to ----* "Text that is **programmatically associated with** non-text content **or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programatically determined from the non-text content.**"

Editorial changes
-----------------

These are editorial changes for clarification and to correct errors which should have no impact on the substance of WCAG 2.0.

1.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#text-equiv-all" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#text-equiv-all">SC 1.1.1 (Non-text Content)</a> - Clarification
    -   *Change -* "If non-text content is a test or exercise that **must be presented in non-text format**, then text alternatives at least provide descriptive identification of the non-text content."  
        *to ----* " If non-text content is a test or exercise that **would be invalid if presented in text**, then text alternatives at least provide descriptive identification of the non-text content."
2.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#media-equiv-extended-ad" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#media-equiv-extended-ad">SC 1.2.7 Audio Description (Extended)</a> - Clarification (Pulled text from the normative definition and put into the SC to make it clearer)
    -   **Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video,** extended audio description is provided for all prerecorded video content in synchronized media.
3.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#visual-audio-contrast-contrast" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#visual-audio-contrast-contrast">SC 1.4.3</a> and <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#visual-audio-contrast7" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#visual-audio-contrast7">1.4.6</a> (Contrast) - Clarify **Incidental** clause.
    -   *Change -* "Text or images of text that are part of an inactive user interface component, that are pure decoration, that are **incidental text in an image, or that are** not visible to anyone, have no **minimum** contrast requirement."  
        *to ----* "Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, **or that are part of a picture that contains significant other visual content,** have no contrast requirement."
4.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#visual-audio-contrast-visual-presentation" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#visual-audio-contrast-visual-presentation">SC 1.4.8 (Visual Presentation)</a> - Clarification
    -   Change "text **is** resized without assistive technology up to 200 percent ..."  
        to "text **can be** resized without assistive technology up to 200 percent ..."
5.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#keyboard-operation-trapping" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#keyboard-operation-trapping">SC 2.1.2 (No Keyboard Trap)</a> - Clarification
    -   Add additional clause "If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys **or other standard exit methods**, the user is advised of the method for moving focus away."
6.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#time-limits-required-behaviors" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#time-limits-required-behaviors">SC 2.2.1 (Timing Adjustable)</a> - Clarification
    -   Previous Note: "This success criterion acts to ensure that changes in content or context as a result of a time limit will not occur unexpectedly, which could prevent users from completing tasks. While exceptions to Success Criterion 2.2.1 where timing is essential exist, guideline 2.2 in general limits changes in content to those places where there is no other option. This success criterion should be considered in conjunction with Success Criterion 3.2.1 which puts limits on changes of content or context as a result of user action."
    -   New Note: "This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with Success Criterion 3.2.1 which puts limits on changes of content or context as a result of user action."
7.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#time-limits-pause" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#time-limits-pause">SC 2.2.2 (Pause, Stop Hide)</a> - Clarification
    -   *Change -* Auto-updating clause from "For any auto-updating information that (1) starts automatically **, (2) lasts more than three seconds, and (3)** is presented in parallel with other content, there is a mechanism ..."  
        *to ----* "For any auto-updating information that (1) starts automatically **and (2)** is presented in parallel with other content, there is a mechanism ..."
    -   *Change -* Note 3 "Content that is **updated from a process, real-time or remote stream** is not required to preserve or present information that is ..."  
        *to ----* Note 3 "Content that is **automatically updated periodically by software, or that is streamed to the user agent** is not required to preserve or present information that is ..."
8.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff.html#cc5" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff.html#cc5">Clarification of Conformance Requirement 5 (diff-marked version)</a>
    -   Note that the apparent large block of added text at the bottom is just a reformatting of the paragraph directly below it (shown as deleted in the diff-marked version)
9.  <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#cc2" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#cc2">Conformance Requirement 2</a>, Note 1 - Clarification
    -   *Change -* Note 1: For the purpose of determining conformance, **a conforming alternative** to part of a page's content **is** considered part of the page when the **alternative content is obtainable** directly from the page, e.g., a long description.  
        *to ----* Note 1: For the purpose of determining conformance, **alternatives** to part of a page's content **are** considered part of the page when the **alternatives can be obtained** directly from the page, e.g., a long description **or an alternative presentation of a video.**.
10. <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#conformance-partial" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#conformance-partial">Statement of partial conformance - third party content</a> - Clarification
    -   *Change -* A "statement of partial conformance" may be made, that the page does not conform, but could conform if certain parts were removed. The form of that statement would be, "This page would conform to WCAG 2.0 at level X if the following parts from uncontrolled sources were removed." In addition, the following would also be true of **the non-conforming content that is excluded** in the statement of partial conformance:  
        *to ----* A "statement of partial conformance" may be made, that the page does not conform, but could conform if certain parts were removed. The form of that statement would be, "This page **does not conform, but** would conform to WCAG 2.0 at level X if the following parts from uncontrolled sources were removed." In addition, the following would also be true of **uncontrolled content that is described** in the statement of partial conformance:
11. <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#context-sensitivehelpdef" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#context-sensitivehelpdef">Definition of context-sensitive help</a> - Clarification (added the note that is already in Understanding document so it also is in the definition)
    -   **Note: Clear labels can act as context-sensitive help.**
12. <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#larger-scaledef" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#larger-scaledef">Definition of large scale text</a> - Clarification of Note 3
    -   *Change: -* Note 3: The actual size of the character that a user sees is dependent both on the author-defined size and the users display or user-agent settings. **This success criterion is based on common pixel sizes available today.** Users who have low vision would be responsible for choosing appropriate settings.  
        *to ----* Note 3: The actual size of the character that a user sees is dependent both on the author-defined size and the users display or user-agent settings. **For many mainstream body text fonts, 14 and 18 point is roughly equivalent to 1.2 and 1.5 em or to 120% or 150% of the default size for body text (assuming that the body font is 100%), but authors would need to check this for the particular fonts in use. When fonts are defined in relative units, the actual point size is calculated by the user agent for display. The point size should be obtained from the user agent, or calculated based on font metrics as the user agent does, when evaluating this success criterion.** Users who have low vision would be responsible for choosing appropriate settings.
13. <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#larger-scaledef" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#larger-scaledef">Definition of large scale text</a> - Clarified by adding a Note 5 and changing definition so terms agree:
    -   **Note 5: The 18 and 14 point sizes for roman texts are taken from the minimum size for large print (14pt) and the larger standard font size (18pt). For other fonts such as CJK languages the "equivalent" sizes would the the minimum large print size used for those languages and the next larger standard large print size.**
    -   and change **"equivalent stroke width"** to **"equivalent size"** in the definition for agreement of terms
14. <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#fullscreenwindowdef" class="external text" title="http://www.w3.org/TR/2008/PR-WCAG20-20081103/Overview-diff#fullscreenwindowdef">Definition of "on a full-screen window"</a> - Clarification by adding a new note:
    -   **Note(new): Since people generally keep their computers for several years, it is best not to rely on the latest desktop/laptop display resolutions but to consider the common desktop/laptop display resolutions over the course of several years when making this evaluation.**

Document Information
--------------------

**Content last updated:** 29 October 2008

\[[Contacting WAI](/WAI/contacts)\]

[Copyright](/Consortium/Legal/ipr-notice#Copyright) © 1994-2008 [W3C](/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](/Consortium/Legal/ipr-notice#W3C_Trademarks), [document use](/Consortium/Legal/copyright-documents) and [software licensing](/Consortium/Legal/copyright-software) rules apply. Your interactions with this site are in accordance with our [public](/Consortium/Legal/privacy-statement#Public) and [Member](/Consortium/Legal/privacy-statement#Members) privacy statements.
