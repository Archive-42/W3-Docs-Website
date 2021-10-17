<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

Understanding WCAG 2.1
======================

Updated 27 July 2021
--------------------

-   **Authors:** [Accessibility Guidelines Working Group](https://www.w3.org/WAI/GL/)
-   **Editors:** [Alastair Campbell, Michael Cooper, Andrew Kirkpatrick](mailto:group-ag-chairs@w3.org)
-   **Editors' Draft:** <https://w3c.github.io/wcag/understanding/>
-   **Official Version:** <https://www.w3.org/WAI/WCAG21/Understanding/>
-   **File Issues**: <https://github.com/w3c/wcag/issues/>

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2017-2021 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](https://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

Abstract
--------

Understanding WCAG 2.1 is a guide to understanding and using [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/) \[\[WCAG21\]\]. It is part of a set of documents that support WCAG 2.1. Please note that the contents of this document are informative (they provide guidance), and not normative (they do not set requirements for conforming to WCAG 2.1). See [Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/intro/wcag.php) for an introduction to WCAG, supporting technical documents, and educational material.

Status of This Document
-----------------------

This is the official version of "Understanding WCAG 2.1", and is referenced by [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/). This resource is maintained as needed to update interpretive guidance and reference techniques to meet the guidelines.

To comment, [file an issue in the W3C WCAG GitHub repository](https://github.com/w3c/wcag/issues/new). Although the proposed Success Criteria in this document reference issues tracking discussion, the Working Group requests that public comments be filed as new issues, one issue per discrete comment. It is free to create a GitHub account to file issues. If filing issues in GitHub is not feasible, send email to [public-agwg-comments@w3.org](mailto:public-agwg-comments@w3.org?subject=WCAG%202.1%20public%20comment) ([comment archive](https://lists.w3.org/Archives/Public/public-agwg-comments/)).

Introduction
------------

Understanding WCAG 2.1 is a guide to understanding and using [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/) \[\[WCAG21\]\] Although the normative definition and requirements for WCAG 2.1 can all be found in the WCAG 2.1 document itself, the concepts and provisions may be new to some people. Understanding WCAG 2.1 provides a non-normative extended commentary on each guideline and each Success Criterion to help readers better understand the intent and how the guidelines and Success Criteria work together. It also provides examples of techniques or combinations of techniques that the Working Group has identified as being sufficient to meet each Success Criterion. Links are then provided to write-ups for each of the techniques.

### Relationship to Understanding WCAG 2.0

[Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/) \[\[UNDERSTANDING-WCAG20\]\] is a substantial resource to support [Web Content Accessibility Guidelines 2.0](https://www.w3.org/TR/WCAG20/) \[\[WCAG20\]\]. Understanding WCAG 2.1 is a parallel resource that supports the new success criteria in WCAG 2.1. At this stage, it only includes content related to new features of WCAG 2.0. Future versions *may* include content relevant to WCAG 2.0, depending on how WCAG 2.1 evolves and what structure is determined to provide optimal support.

Unlike Understanding WCAG 2.0, this document has not been published as a Technical Report. This change reduces the formality of the document and increases the ability of the Accessibility Guidelines Working Group to maintain the content and optimize the structure. The Working Group considers the content to be authoritative. If feedback indicates the need, the document could be published as a Technical Report in the future.

### Structure of Understanding WCAG 2.1

This is not an introductory document. It is a detailed technical description of the guidelines and their Success Criteria. See [Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/intro/wcag) for an introduction to WCAG, supporting technical documents, and educational material.

Understanding WCAG 2.1 is organized by guideline. There is an *Understanding Guideline X.X* section for each guideline. The intent and any advisory techniques that are related to the guideline but not specifically related to any of its Success Criteria are listed there as well.

The *Understanding Guidelines X.X* section is then followed by a *Understanding Success Criterion X.X.X* section for each Success Criterion of that guideline. These sections each contain:

-   The Success Criterion as it appears in WCAG 2.1

-   Intent of the Success Criterion

-   Benefits (how the Success Criterion helps people with disabilities)

-   Examples

-   Related Resources

-   Techniques or combinations of techniques that are sufficient to meet the guidelines

-   Failures of this Success Criterion

-   Additional advisory techniques that go beyond what is required to meet the Success Criterion but can be used to make some or all types of content more accessible. Use of advisory techniques does not impact the level of conformance claimed.

-   Key terms for this Success Criterion (taken from the WCAG 2.1 Glossary)

Links are provided from each Guideline in WCAG 2.1 directly to each *Understanding Guideline X.X* in this document. Similarly, there is a link from each Success Criterion in WCAG 2.1 to the *Understanding Success Criterion X.X.X* section in this document.

### Techniques for WCAG 2.1

Techniques specific to WCAG 2.1 are added to the the techniques for WCAG 2.0, it is one set. The [Techniques change log](../techniques/#changelog) lists the new techniques added since WCAG 2.1 was published.

Understanding Pages
-------------------

1.  <a href="intro" class="tocxref"><span class="secno"> </span>Introduction to Understanding WCAG 2.1</a>
2.  <a href="understanding-techniques" class="tocxref"><span class="secno"> </span>Understanding Techniques for WCAG Success Criteria</a>
3.  <a href="understanding-act-rules" class="tocxref"><span class="secno"> </span>Understanding Test Rules for WCAG Success Criteria</a>
4.  Perceivable
    1.  <a href="text-alternatives" class="tocxref"><span class="secno">1.1 </span>Text Alternatives</a>
        1.  <a href="non-text-content" class="tocxref"><span class="secno">1.1.1 </span>Non-text Content</a>
    2.  <a href="time-based-media" class="tocxref"><span class="secno">1.2 </span>Time-based Media</a>
        1.  <a href="audio-only-and-video-only-prerecorded" class="tocxref"><span class="secno">1.2.1 </span>Audio-only and Video-only (Prerecorded)</a>
        2.  <a href="captions-prerecorded" class="tocxref"><span class="secno">1.2.2 </span>Captions (Prerecorded)</a>
        3.  <a href="audio-description-or-media-alternative-prerecorded" class="tocxref"><span class="secno">1.2.3 </span>Audio Description or Media Alternative (Prerecorded)</a>
        4.  <a href="captions-live" class="tocxref"><span class="secno">1.2.4 </span>Captions (Live)</a>
        5.  <a href="audio-description-prerecorded" class="tocxref"><span class="secno">1.2.5 </span>Audio Description (Prerecorded)</a>
        6.  <a href="sign-language-prerecorded" class="tocxref"><span class="secno">1.2.6 </span>Sign Language (Prerecorded)</a>
        7.  <a href="extended-audio-description-prerecorded" class="tocxref"><span class="secno">1.2.7 </span>Extended Audio Description (Prerecorded)</a>
        8.  <a href="media-alternative-prerecorded" class="tocxref"><span class="secno">1.2.8 </span>Media Alternative (Prerecorded)</a>
        9.  <a href="audio-only-live" class="tocxref"><span class="secno">1.2.9 </span>Audio-only (Live)</a>
    3.  <a href="adaptable" class="tocxref"><span class="secno">1.3 </span>Adaptable</a>
        1.  <a href="info-and-relationships" class="tocxref"><span class="secno">1.3.1 </span>Info and Relationships</a>
        2.  <a href="meaningful-sequence" class="tocxref"><span class="secno">1.3.2 </span>Meaningful Sequence</a>
        3.  <a href="sensory-characteristics" class="tocxref"><span class="secno">1.3.3 </span>Sensory Characteristics</a>
        4.  <a href="orientation" class="tocxref"><span class="secno">1.3.4 </span>Orientation</a>
        5.  <a href="identify-input-purpose" class="tocxref"><span class="secno">1.3.5 </span>Identify Input Purpose</a>
        6.  <a href="identify-purpose" class="tocxref"><span class="secno">1.3.6 </span>Identify Purpose</a>
    4.  <a href="distinguishable" class="tocxref"><span class="secno">1.4 </span>Distinguishable</a>
        1.  <a href="use-of-color" class="tocxref"><span class="secno">1.4.1 </span>Use of Color</a>
        2.  <a href="audio-control" class="tocxref"><span class="secno">1.4.2 </span>Audio Control</a>
        3.  <a href="contrast-minimum" class="tocxref"><span class="secno">1.4.3 </span>Contrast (Minimum)</a>
        4.  <a href="resize-text" class="tocxref"><span class="secno">1.4.4 </span>Resize text</a>
        5.  <a href="images-of-text" class="tocxref"><span class="secno">1.4.5 </span>Images of Text</a>
        6.  <a href="contrast-enhanced" class="tocxref"><span class="secno">1.4.6 </span>Contrast (Enhanced)</a>
        7.  <a href="low-or-no-background-audio" class="tocxref"><span class="secno">1.4.7 </span>Low or No Background Audio</a>
        8.  <a href="visual-presentation" class="tocxref"><span class="secno">1.4.8 </span>Visual Presentation</a>
        9.  <a href="images-of-text-no-exception" class="tocxref"><span class="secno">1.4.9 </span>Images of Text (No Exception)</a>
        10. <a href="reflow" class="tocxref"><span class="secno">1.4.10 </span>Reflow</a>
        11. <a href="non-text-contrast" class="tocxref"><span class="secno">1.4.11 </span>Non-text Contrast</a>
        12. <a href="text-spacing" class="tocxref"><span class="secno">1.4.12 </span>Text Spacing</a>
        13. <a href="content-on-hover-or-focus" class="tocxref"><span class="secno">1.4.13 </span>Content on Hover or Focus</a>
5.  Operable
    1.  <a href="keyboard-accessible" class="tocxref"><span class="secno">2.1 </span>Keyboard Accessible</a>
        1.  <a href="keyboard" class="tocxref"><span class="secno">2.1.1 </span>Keyboard</a>
        2.  <a href="no-keyboard-trap" class="tocxref"><span class="secno">2.1.2 </span>No Keyboard Trap</a>
        3.  <a href="keyboard-no-exception" class="tocxref"><span class="secno">2.1.3 </span>Keyboard (No Exception)</a>
        4.  <a href="character-key-shortcuts" class="tocxref"><span class="secno">2.1.4 </span>Character Key Shortcuts</a>
    2.  <a href="enough-time" class="tocxref"><span class="secno">2.2 </span>Enough Time</a>
        1.  <a href="timing-adjustable" class="tocxref"><span class="secno">2.2.1 </span>Timing Adjustable</a>
        2.  <a href="pause-stop-hide" class="tocxref"><span class="secno">2.2.2 </span>Pause, Stop, Hide</a>
        3.  <a href="no-timing" class="tocxref"><span class="secno">2.2.3 </span>No Timing</a>
        4.  <a href="interruptions" class="tocxref"><span class="secno">2.2.4 </span>Interruptions</a>
        5.  <a href="re-authenticating" class="tocxref"><span class="secno">2.2.5 </span>Re-authenticating</a>
        6.  <a href="timeouts" class="tocxref"><span class="secno">2.2.6 </span>Timeouts</a>
    3.  <a href="seizures-and-physical-reactions" class="tocxref"><span class="secno">2.3 </span>Seizures and Physical Reactions</a>
        1.  <a href="three-flashes-or-below-threshold" class="tocxref"><span class="secno">2.3.1 </span>Three Flashes or Below Threshold</a>
        2.  <a href="three-flashes" class="tocxref"><span class="secno">2.3.2 </span>Three Flashes</a>
        3.  <a href="animation-from-interactions" class="tocxref"><span class="secno">2.3.3 </span>Animation from Interactions</a>
    4.  <a href="navigable" class="tocxref"><span class="secno">2.4 </span>Navigable</a>
        1.  <a href="bypass-blocks" class="tocxref"><span class="secno">2.4.1 </span>Bypass Blocks</a>
        2.  <a href="page-titled" class="tocxref"><span class="secno">2.4.2 </span>Page Titled</a>
        3.  <a href="focus-order" class="tocxref"><span class="secno">2.4.3 </span>Focus Order</a>
        4.  <a href="link-purpose-in-context" class="tocxref"><span class="secno">2.4.4 </span>Link Purpose (In Context)</a>
        5.  <a href="multiple-ways" class="tocxref"><span class="secno">2.4.5 </span>Multiple Ways</a>
        6.  <a href="headings-and-labels" class="tocxref"><span class="secno">2.4.6 </span>Headings and Labels</a>
        7.  <a href="focus-visible" class="tocxref"><span class="secno">2.4.7 </span>Focus Visible</a>
        8.  <a href="location" class="tocxref"><span class="secno">2.4.8 </span>Location</a>
        9.  <a href="link-purpose-link-only" class="tocxref"><span class="secno">2.4.9 </span>Link Purpose (Link Only)</a>
        10. <a href="section-headings" class="tocxref"><span class="secno">2.4.10 </span>Section Headings</a>
    5.  <a href="input-modalities" class="tocxref"><span class="secno">2.5 </span>Input Modalities</a>
        1.  <a href="pointer-gestures" class="tocxref"><span class="secno">2.5.1 </span>Pointer Gestures</a>
        2.  <a href="pointer-cancellation" class="tocxref"><span class="secno">2.5.2 </span>Pointer Cancellation</a>
        3.  <a href="label-in-name" class="tocxref"><span class="secno">2.5.3 </span>Label in Name</a>
        4.  <a href="motion-actuation" class="tocxref"><span class="secno">2.5.4 </span>Motion Actuation</a>
        5.  <a href="target-size" class="tocxref"><span class="secno">2.5.5 </span>Target Size</a>
        6.  <a href="concurrent-input-mechanisms" class="tocxref"><span class="secno">2.5.6 </span>Concurrent Input Mechanisms</a>
6.  Understandable
    1.  <a href="readable" class="tocxref"><span class="secno">3.1 </span>Readable</a>
        1.  <a href="language-of-page" class="tocxref"><span class="secno">3.1.1 </span>Language of Page</a>
        2.  <a href="language-of-parts" class="tocxref"><span class="secno">3.1.2 </span>Language of Parts</a>
        3.  <a href="unusual-words" class="tocxref"><span class="secno">3.1.3 </span>Unusual Words</a>
        4.  <a href="abbreviations" class="tocxref"><span class="secno">3.1.4 </span>Abbreviations</a>
        5.  <a href="reading-level" class="tocxref"><span class="secno">3.1.5 </span>Reading Level</a>
        6.  <a href="pronunciation" class="tocxref"><span class="secno">3.1.6 </span>Pronunciation</a>
    2.  <a href="predictable" class="tocxref"><span class="secno">3.2 </span>Predictable</a>
        1.  <a href="on-focus" class="tocxref"><span class="secno">3.2.1 </span>On Focus</a>
        2.  <a href="on-input" class="tocxref"><span class="secno">3.2.2 </span>On Input</a>
        3.  <a href="consistent-navigation" class="tocxref"><span class="secno">3.2.3 </span>Consistent Navigation</a>
        4.  <a href="consistent-identification" class="tocxref"><span class="secno">3.2.4 </span>Consistent Identification</a>
        5.  <a href="change-on-request" class="tocxref"><span class="secno">3.2.5 </span>Change on Request</a>
    3.  <a href="input-assistance" class="tocxref"><span class="secno">3.3 </span>Input Assistance</a>
        1.  <a href="error-identification" class="tocxref"><span class="secno">3.3.1 </span>Error Identification</a>
        2.  <a href="labels-or-instructions" class="tocxref"><span class="secno">3.3.2 </span>Labels or Instructions</a>
        3.  <a href="error-suggestion" class="tocxref"><span class="secno">3.3.3 </span>Error Suggestion</a>
        4.  <a href="error-prevention-legal-financial-data" class="tocxref"><span class="secno">3.3.4 </span>Error Prevention (Legal, Financial, Data)</a>
        5.  <a href="help" class="tocxref"><span class="secno">3.3.5 </span>Help</a>
        6.  <a href="error-prevention-all" class="tocxref"><span class="secno">3.3.6 </span>Error Prevention (All)</a>
7.  Robust
    1.  <a href="compatible" class="tocxref"><span class="secno">4.1 </span>Compatible</a>
        1.  <a href="parsing" class="tocxref"><span class="secno">4.1.1 </span>Parsing</a>
        2.  <a href="name-role-value" class="tocxref"><span class="secno">4.1.2 </span>Name, Role, Value</a>
        3.  <a href="status-messages" class="tocxref"><span class="secno">4.1.3 </span>Status Messages</a>
8.  <a href="conformance" class="tocxref"><span class="secno"> </span>Understanding Conformance</a>
9.  <a href="refer-to-wcag" class="tocxref"><span class="secno"> </span>How to Refer to WCAG 2.1 from Other Documents</a>
10. <a href="documenting-accessibility-support" class="tocxref"><span class="secno"> </span>Documenting Accessibility Support for Uses of a Web Technology</a>
11. <a href="understanding-metadata" class="tocxref"><span class="secno"> </span>Understanding Metadata</a>

Understanding documents change Log
----------------------------------

A list of significantly updated Understanding documents since WCAG 2.1 was published:

1.  Jan 18th 2019: Updated [Understanding Non-text contrast](./non-text-contrast), based on the changes from [Pull request 550](https://github.com/w3c/wcag/pull/550).

For a more detailed view of recent changes to the informative documents see the [github updates](https://github.com/w3c/wcag/commits/master).

### Acknowledgments

Additional information about participation in the Accessibility Guidelines Working Group (AG WG) can be found on the [Working Group home page](https://www.w3.org/WAI/GL/).

Participants of the AG WG active in the development of this document:
---------------------------------------------------------------------

-   Jake Abma (Invited Expert)
-   Shadi Abou-Zahra (W3C)
-   Chuck Adams (Oracle Corporation)
-   Amani Ali (Nomensa)
-   Jim Allan (Invited Expert)
-   Paul Adam (Deque Systems, Inc.)
-   Christopher Auclair (VitalSource | Ingram Content Group)
-   Jon Avila (Level Access)
-   Tom Babinszki (IBM Corporation)
-   Bruce Bailey (U.S. Access Board)
-   Renaldo Bernard (University of Southampton)
-   Chris Blouch (Level Access)
-   Denis Boudreau (Deque Systems, Inc.)
-   Judy Brewer (W3C)
-   Shari Butler (Pearson plc)
-   Thaddeus Cambron (Invited Expert)
-   Alastair Campbell (Nomensa)
-   Laura Carlson (Invited Expert)
-   Louis Cheng (Google)
-   Pietro Cirrincione (Invited Expert)
-   Vivienne Conway (Web Key IT Pty Ltd)
-   Michael Cooper (W3C)
-   Jennifer Delisi (Invited Expert)
-   Romain Deltour (DAISY Consortium)
-   Wayne Dick (Knowbility, Inc)
-   Chaohai Ding (University of Southampton)
-   Kim Dirks (Thomson Reuters)
-   Shwetank Dixit (BarrierBreak Technologies)
-   Anthony Doran (TextHelp)
-   E.A. Draffan (University of Southampton)
-   Eric Eggert (W3C)
-   Michael Elledge (Invited Expert)
-   David Fazio (Invited Expert)
-   Wilco Fiers (Deque Systems, Inc.)
-   Detlev Fischer (Invited Expert)
-   John Foliot (Deque Systems, Inc.)
-   Matt Garrish (DAISY Consortium)
-   Alistair Garrison (Level Access)
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
-   Kurt Mattes (Deque Systems, Inc.)
-   Scott McCormack (Level Access)
-   Chris McMeeking (Deque Systems, Inc.)
-   Jan McSorley (Pearson plc)
-   Neil Milliken (Unify Software and Solutions)
-   Rachael Montgomery (Invited Expert)
-   Mary Jo Mueller (IBM Corporation)
-   Brooks Newton (Thomson Reuters)
-   James Nurthen (Oracle Corporation)
-   Joshue O Connor (Invited Expert)
-   Sailesh Panchang (Deque Systems, Inc.)
-   Charu Pandhi (IBM Corporation)
-   Kim Patch (Invited Expert)
-   Melanie Philipp (Deque Systems, Inc.)
-   Mike Pluke (Invited Expert)
-   Ian Pouncey (The Paciello Group, LLC)
-   Ruoxi Ran (W3C)
-   Stephen Repsher (Invited Expert)
-   Jan Richards (Invited Expert)
-   John Rochford (Invited Expert)
-   Marla Runyan (Invited Expert)
-   Stefan Schnabel (SAP SE)
-   Ayelet Seeman (Invited Expert)
-   Lisa Seeman-Kestenbaum (Invited Expert)
-   Glenda Sims (Deque Systems, Inc.)
-   Avneesh Singh (DAISY Consortium)
-   David Sloan (The Paciello Group, LLC)
-   Alan Smith (Invited Expert)
-   Jim Smith (Unify Software and Solutions)
-   Andrew Somers (Invited Expert)
-   Adam Solomon (Invited Expert)
-   Jaeil Song (National Information Society Agency (NIA))
-   Jeanne Spellman (The Paciello Group, LLC)
-   Makoto Ueki (Invited Expert)
-   Jatin Vaishnav (Deque Systems, Inc.)
-   Gregg Vanderheiden (Raising the Floor)
-   Evangelos Vlachogiannis (Fraunhofer Gesellschaft)
-   Kathleen Wahlbin (Invited Expert)
-   Can Wang (Zhejiang University)
-   Léonie Watson (The Paciello Group, LLC)
-   Jason White (Educational Testing Service)
-   Mark Wilcock (Unify Software and Solutions)

Other previously active WCAG WG participants and other contributors to WCAG 2.0, WCAG 2.1, or supporting resources
------------------------------------------------------------------------------------------------------------------

Paul Adam, Jenae Andershonis, Wilhelm Joys Andersen, Andrew Arch, Avi Arditti, Aries Arditi, Mark Barratt, Mike Barta, Sandy Bartell, Kynn Bartlett, Chris Beer, Charles Belov, Marco Bertoni, Harvey Bingham, Chris Blouch, Paul Bohman, Frederick Boland, Denis Boudreau, Patrice Bourlon, Andy Brown, Dick Brown, Doyle Burnett, Raven Calais, Ben Caldwell, Tomas Caspers, Roberto Castaldo, Sofia Celic-Li, Sambhavi Chandrashekar, Mike Cherim, Jonathan Chetwynd, Wendy Chisholm, Alan Chuter, David M Clark, Joe Clark, Darcy Clarke, James Coltham, Earl Cousins, James Craig, Tom Croucher, Pierce Crowell, Nir Dagan, Daniel Dardailler, Geoff Deering, Sébastien Delorme, Pete DeVasto, Iyad Abu Doush, Sylvie Duchateau, Cherie Eckholm, Roberto Ellero, Don Evans, Gavin Evans, Neal Ewers, Steve Faulkner, Bengt Farre, Lainey Feingold, Wilco Fiers, Michel Fitos, Alan J. Flavell, Nikolaos Floratos, Kentarou Fukuda, Miguel Garcia, P.J. Gardner, Alistair Garrison, Greg Gay, Becky Gibson, Al Gilman, Kerstin Goldsmith, Michael Grade, Karl Groves, Loretta Guarino Reid, Jon Gunderson, Emmanuelle Gutiérrez y Restrepo, Brian Hardy, Eric Hansen, Benjamin Hawkes-Lewis, Sean Hayes, Shawn Henry, Hans Hillen, Donovan Hipke, Bjoern Hoehrmann, Allen Hoffman, Chris Hofstader, Yvette Hoitink, Martijn Houtepen, Carlos Iglesias, Richard Ishida, Jonas Jacek, Ian Jacobs, Phill Jenkins, Barry Johnson, Duff Johnson, Jyotsna Kaki, Shilpi Kapoor, Leonard R. Kasday, Kazuhito Kidachi, Ken Kipness, Johannes Koch, Marja-Riitta Koivunen, Preety Kumar, Kristjan Kure, Andrew LaHart, Gez Lemon, Chuck Letourneau, Aurélien Levy, Harry Loots, Scott Luebking, Tim Lacy, Jim Ley, Alex Li, William Loughborough, N Maffeo, Mark Magennis, Kapsi Maria, Luca Mascaro, Matt May, Sheena McCullagh, Liam McGee, Jens Oliver Meiert, Niqui Merret, Jonathan Metz, Alessandro Miele, Steven Miller, Mathew J Mirabella, Matt May, Marti McCuller, Sorcha Moore, Charles F. Munat, Robert Neff, Charles Nevile, Liddy Nevile, Dylan Nicholson, Bruno von Niman, Tim Noonan, Sebastiano Nutarelli, Graham Oliver, Sean B. Palmer, Devarshi Pant, Nigel Peck, Anne Pemberton, David Poehlman, Ian Pouncey, Charles Pritchard, Kerstin Probiesch, W Reagan, Adam Victor Reed, Chris Reeve, Chris Ridpath, Lee Roberts, Mark Rogers, Raph de Rooij, Gregory J. Rosmaita, Matthew Ross, Sharron Rush, Joel Sanda, Janina Sajka, Roberto Scano, Gordon Schantz, Tim van Schie, Wolf Schmidt, Stefan Schnabel, Cynthia Shelly, Glenda Sims, John Slatin, Becky Smith, Jared Smith, Andi Snow-Weaver, Neil Soiffer, Mike Squillace, Michael Stenitzer, Diane Stottlemyer, Christophe Strobbe, Sarah J Swierenga, Jim Thatcher, Terry Thompson, Justin Thorp, David Todd, Mary Utt, Jean Vanderdonckt, Carlos A Velasco, Eric Velleman, Gijs Veyfeyken, Dena Wainwright, Paul Walsch, Daman Wandke, Richard Warren, Elle Waters, Takayuki Watanabe, Gian Wild, David Wooley, Wu Wei, Kenny Zhang, Leona Zumbo.

Enabling funders
----------------

This publication has been funded in part with U.S. Federal funds from the Health and Human Services, National Institute on Disability, Independent Living, and Rehabilitation Research (NIDILRR), initially under contract number ED-OSE-10-C-0067 and now under contract number HHSP23301500054C. The content of this publication does not necessarily reflect the views or policies of the U.S. Department of Health and Human Services or the U.S. Department of Education, nor does mention of trade names, commercial products, or organizations imply endorsement by the U.S. Government.
