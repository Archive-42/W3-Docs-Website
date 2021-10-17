<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

CSS Basic User Interface Module Level 3 (CSS3 UI)
=================================================

<span class="content">W3C Recommendation, 21 June 2018</span>
-------------------------------------------------------------

This version:   
<a href="https://www.w3.org/TR/2018/REC-css-ui-3-20180621/" class="u-url">https://www.w3.org/TR/2018/REC-css-ui-3-20180621/</a>

Latest published version:   
<https://www.w3.org/TR/css-ui-3/>

Editor's Draft:   
<https://drafts.csswg.org/css-ui/>

Previous Versions:   
<https://www.w3.org/TR/2017/PR-css-ui-3-20171214/>

Test Suite:   
<http://test.csswg.org/suites/css-ui-3_dev/nightly-unstable/>

Editors:   
<a href="http://tantek.com" class="p-name fn u-url url">Tantek Çelik</a> (<a href="https://www.mozilla.org/" class="p-org org">Mozilla</a>) <a href="mailto:tantek@cs.stanford.edu" class="u-email email">tantek@cs.stanford.edu</a>

<a href="http://florian.rivoal.net/" class="p-name fn u-url url">Florian Rivoal</a> (<span class="p-org org">On behalf of Bloomberg</span>)

Issue Tracking:   
[GitHub Issues](https://github.com/w3c/csswg-drafts/labels/css-ui-3)

Please check the [**errata**](https://www.w3.org/Style/2018/REC-css-ui-3-20180621-errata.html) for any errors or issues reported since publication.

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2018 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [permissive document license](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document) rules apply.

------------------------------------------------------------------------

<span class="content">Abstract</span>
-------------------------------------

This specification describes user interface related properties and values that are proposed for CSS level 3 to style HTML and XML (including XHTML). It includes and extends user interface related features from the properties and values of CSS level 2 revision 1. It uses various properties and values to style basic user interface elements in a document.

[CSS](https://www.w3.org/TR/CSS/) is a language for describing the rendering of structured documents (such as HTML and XML) on screen, on paper, in speech, etc.

<span class="content">Status of this document</span>
----------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

This document was produced by the [CSS Working Group](https://www.w3.org/Style/CSS/members).

A W3C Recommendation is a document that has been widely reviewed and is ready for implementation. W3C encourages everybody to implement this specification and return comments to [GitHub issues](https://github.com/w3c/csswg-drafts/issues).

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/32061/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2018/Process-20180201/" id="w3c_process_revision">1 February 2018 W3C Process Document</a>.

A separate [implementation report](https://test.csswg.org/harness/results/css-ui-3_dev/grouped/) shows that each required test in the [test suite](https://test.csswg.org/harness/suite/css-ui-3_dev/) was passed by at least two independent implementations. Please also see the [detailed implementation report](https://drafts.csswg.org/css-ui-3/implementation-report) for this specification.

A complete [list of changes](#changes) to this document is available.

Table of Contents
-----------------

1.  [<span class="secno">1</span> <span class="content">Introduction</span>](#intro)
    1.  [<span class="secno">1.1</span> <span class="content">Purpose</span>](#purpose)
2.  [<span class="secno">2</span> <span class="content">Module Interactions</span>](#interaction)
3.  [<span class="secno">3</span> <span class="content">Box Model addition</span>](#box-model)
    1.  [<span class="secno">3.1</span> <span class="content">Changing the Box Model: the <span class="property">box-sizing</span> property</span>](#box-sizing)
4.  [<span class="secno">4</span> <span class="content">Outline properties</span>](#outline-props)
    1.  [<span class="secno">4.1</span> <span class="content">Outlines Shorthand: the <span class="property">outline</span> property</span>](#outline)
    2.  [<span class="secno">4.2</span> <span class="content">Outline Thickness: the <span class="property">outline-width</span> property</span>](#outline-width)
    3.  [<span class="secno">4.3</span> <span class="content">Outline Patterns: the <span class="property">outline-style</span> property</span>](#outline-style)
    4.  [<span class="secno">4.4</span> <span class="content">Outline Colors: the <span class="property">outline-color</span> property</span>](#outline-color)
    5.  [<span class="secno">4.5</span> <span class="content">Offsetting the Outline: the <span class="property">outline-offset</span> property</span>](#outline-offset)
5.  [<span class="secno">5</span> <span class="content">Resizing & Overflow</span>](#resizing-and-overflow)
    1.  [<span class="secno">5.1</span> <span class="content">Resizing Boxes: the <span class="property">resize</span> property</span>](#resize)
    2.  [<span class="secno">5.2</span> <span class="content"> Overflow Ellipsis: the <span class="property">text-overflow</span> property</span>](#text-overflow)
6.  [<span class="secno">6</span> <span class="content">Pointing Devices and Keyboards</span>](#pointing-keyboard)
    1.  [<span class="secno">6.1</span> <span class="content">Pointer interaction</span>](#pointer-interaction)
        1.  [<span class="secno">6.1.1</span> <span class="content">Styling the Cursor: the <span class="property">cursor</span> property</span>](#cursor)
            1.  [<span class="secno">6.1.1.1</span> <span class="content">Cursor of the canvas</span>](#canvas_cursor)
    2.  [<span class="secno">6.2</span> <span class="content">Insertion caret</span>](#insertion-caret)
        1.  [<span class="secno">6.2.1</span> <span class="content">Coloring the Insertion Caret: the <span class="property">caret-color</span> property</span>](#caret-color)
    3.  [<span class="secno">6.3</span> <span class="content">Keyboard control</span>](#keyboard)
        1.  [<span class="secno">6.3.1</span> <span class="content">Obsolete: the ime-mode property</span>](#input-method-editor)
7.  [<span class="secno"></span> <span class="content">Appendix A. Acknowledgments</span>](#acknowledgments)
8.  [<span class="secno"></span> <span class="content">Appendix B. Changes</span>](#changes)
9.  [<span class="secno"></span> <span class="content">Appendix C. Considerations for Security and Privacy</span>](#security-privacy-considerations)
10. [<span class="secno"></span> <span class="content">Appendix D. Default style sheet additions for HTML</span>](#default-style-sheet)
11. [<span class="secno"></span> <span class="content"> Conformance</span>](#conformance)
    1.  [<span class="secno"></span> <span class="content"> Document conventions</span>](#document-conventions)
    2.  [<span class="secno"></span> <span class="content"> Conformance classes</span>](#conform-classes)
    3.  [<span class="secno"></span> <span class="content"> Requirements for Responsible Implementation of CSS</span>](#conform-responsible)
        1.  [<span class="secno"></span> <span class="content"> Partial Implementations</span>](#conform-partial)
        2.  [<span class="secno"></span> <span class="content"> Implementations of Unstable and Proprietary Features</span>](#conform-future-proofing)
        3.  [<span class="secno"></span> <span class="content"> Implementations of CR-level Features</span>](#conform-testing)
12. [<span class="secno"></span> <span class="content">Index</span>](#index)
    1.  [<span class="secno"></span> <span class="content">Terms defined by this specification</span>](#index-defined-here)
    2.  [<span class="secno"></span> <span class="content">Terms defined by reference</span>](#index-defined-elsewhere)
13. [<span class="secno"></span> <span class="content">References</span>](#references)
    1.  [<span class="secno"></span> <span class="content">Normative References</span>](#normative)
    2.  [<span class="secno"></span> <span class="content">Informative References</span>](#informative)
14. [<span class="secno"></span> <span class="content">Property Index</span>](#property-index)

<span class="secno">1. </span><span class="content">Introduction</span><a href="#intro" class="self-link"></a>
--------------------------------------------------------------------------------------------------------------

This module describes CSS properties which enable authors to style user interface related properties and values.

[Section 2.1 of CSS1](https://www.w3.org/TR/REC-CSS1#anchor-pseudo-classes) [\[CSS1\]](#biblio-css1) and [Chapter 18 of CSS2](https://www.w3.org/TR/CSS2/ui.html) [\[CSS2\]](#biblio-css2) introduced several user interface related properties and values. [User Interface for CSS3 (16 February 2000)](https://www.w3.org/TR/2000/WD-css3-userint-20000216) introduced several new user interface related features.

This Working Draft incorporates, extends, and supersedes them.

### <span class="secno">1.1. </span><span class="content">Purpose</span><a href="#purpose" class="self-link"></a>

The purpose of this specification is to achieve the following objectives:

-   Extend the user interface features in CSS2.1.
-   Provide additional CSS mechanisms to augment or replace other dynamic presentation related features in HTML.

<span class="secno">2. </span><span class="content">Module Interactions</span><a href="#interaction" class="self-link"></a>
---------------------------------------------------------------------------------------------------------------------------

This document defines new features not present in earlier specifications. In addition, it replaces and supersedes the following:

-   [Section 18.1](https://www.w3.org/TR/CSS2/ui.html#cursor-props), [section 18.4](https://www.w3.org/TR/CSS2/ui.html#dynamic-outlines), and Information on the stacking of outlines defined in [Appendix E](https://www.w3.org/TR/CSS2/zindex.html) of Cascading Style Sheets, level 2, revision 1 [\[CSS2\]](#biblio-css2)
-   [User Interface for CSS3 (16 February 2000)](https://www.w3.org/TR/2000/WD-css3-userint-20000216)

Note: The semantics of property definition tables were first introduced in [Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification §property-defs](https://www.w3.org/TR/CSS2/propidx.html#q24.0). More up-to-date definitions can be found in [\[css-transitions-1\]](#biblio-css-transitions-1), [\[css-values-3\]](#biblio-css-values-3), and [\[css-cascade-4\]](#biblio-css-cascade-4). For the reader’s convenience, this specification links directly to these terms where relevant.

<span class="secno">3. </span><span class="content">Box Model addition</span><a href="#box-model" class="self-link"></a>
------------------------------------------------------------------------------------------------------------------------

### <span class="secno">3.1. </span><span class="content">Changing the Box Model: the <a href="#propdef-box-sizing" id="ref-for-propdef-box-sizing" class="property">box-sizing</a> property</span><a href="#box-sizing" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>box-sizing</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td>content-box <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one">|</a> border-box</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>content-box</td></tr><tr class="even"><td>Applies to:</td><td>all elements that accept width or height</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td>Media:</td><td>visual</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>specified value</td></tr><tr class="odd"><td>Canonical order:</td><td>per grammar</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-transitions/#animatable-properties">Animation type:</a></td><td>discrete</td></tr></tbody></table>

content-box<a href="#valdef-box-sizing-content-box" class="self-link"></a>   
This is the behavior of width and height as specified by CSS2.1. The specified width and height (and respective min/max properties) apply to the width and height respectively of the content box of the element. The padding and border of the element are laid out and drawn outside the specified width and height.

border-box<a href="#valdef-box-sizing-border-box" class="self-link"></a>   
Length and percentages values for width and height (and respective min/max properties) on this element determine the border box of the element. That is, any padding or border specified on the element is laid out and drawn inside this specified width and height. The content width and height are calculated by subtracting the border and padding widths of the respective sides from the specified <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width" class="property">width</a> and <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-height" id="ref-for-propdef-height" class="property">height</a> properties. As the content width and height [cannot be negative](https://www.w3.org/TR/CSS2/visudet.html#the-width-property) ([\[CSS2\]](#biblio-css2), section 10.2), this computation is floored at 0. Used values, as exposed for instance through getComputedStyle(), also refer to the border box.

Note: This is the behavior of width and height as commonly implemented by legacy HTML user agents for replaced elements and input elements.

Note: In contrast to the length and percentage values, the <a href="https://www.w3.org/TR/CSS2/visudet.html#the-width-property" id="ref-for-the-width-property" class="css">auto</a> value of the <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width①" class="property">width</a> and <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-height" id="ref-for-propdef-height①" class="property">height</a> properties (as well as other keyword values introduced by later specifications, unless otherwise specified) is not influenced by the <a href="#propdef-box-sizing" id="ref-for-propdef-box-sizing①" class="property">box-sizing</a> property, and always sets the size of the content box.

The following terms, whose definitions vary based on the computed value of <a href="#propdef-box-sizing" id="ref-for-propdef-box-sizing②" class="property">box-sizing</a> are introduced:

<table><thead><tr class="header"><th></th><th><a href="#propdef-box-sizing" id="ref-for-propdef-box-sizing③" class="css">box-sizing: content-box</a></th><th><a href="#propdef-box-sizing" id="ref-for-propdef-box-sizing④" class="css">box-sizing: border-box</a></th></tr></thead><tbody><tr class="odd"><td>min inner width</td><td><a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-min-width" id="ref-for-propdef-min-width" class="property">min-width</a></td><td>max(0, <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-min-width" id="ref-for-propdef-min-width①" class="property">min-width</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-padding-left" id="ref-for-propdef-padding-left" class="property">padding-left</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-padding-right" id="ref-for-propdef-padding-right" class="property">padding-right</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-left-width" id="ref-for-propdef-border-left-width" class="property">border-left-width</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-right-width" id="ref-for-propdef-border-right-width" class="property">border-right-width</a>)</td></tr><tr class="even"><td>max inner width</td><td><a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-max-width" id="ref-for-propdef-max-width" class="property">max-width</a></td><td>max(0, <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-max-width" id="ref-for-propdef-max-width①" class="property">max-width</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-padding-left" id="ref-for-propdef-padding-left①" class="property">padding-left</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-padding-right" id="ref-for-propdef-padding-right①" class="property">padding-right</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-left-width" id="ref-for-propdef-border-left-width①" class="property">border-left-width</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-right-width" id="ref-for-propdef-border-right-width①" class="property">border-right-width</a>)</td></tr><tr class="odd"><td>min inner height</td><td><a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-min-height" id="ref-for-propdef-min-height" class="property">min-height</a></td><td>max(0, <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-min-height" id="ref-for-propdef-min-height①" class="property">min-height</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-padding-top" id="ref-for-propdef-padding-top" class="property">padding-top</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-padding-bottom" id="ref-for-propdef-padding-bottom" class="property">padding-bottom</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-top-width" id="ref-for-propdef-border-top-width" class="property">border-top-width</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-bottom-width" id="ref-for-propdef-border-bottom-width" class="property">border-bottom-width</a>)</td></tr><tr class="even"><td>max inner height</td><td><a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-max-height" id="ref-for-propdef-max-height" class="property">max-height</a></td><td>max(0, <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-max-height" id="ref-for-propdef-max-height①" class="property">max-height</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-padding-top" id="ref-for-propdef-padding-top①" class="property">padding-top</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-padding-bottom" id="ref-for-propdef-padding-bottom①" class="property">padding-bottom</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-top-width" id="ref-for-propdef-border-top-width①" class="property">border-top-width</a> − <a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-bottom-width" id="ref-for-propdef-border-bottom-width①" class="property">border-bottom-width</a>)</td></tr></tbody></table>

The [Visual formatting model details](https://www.w3.org/TR/CSS2/visudet.html) of [\[CSS2\]](#biblio-css2) are written assuming <a href="#propdef-box-sizing" id="ref-for-propdef-box-sizing⑤" class="css">box-sizing: content-box</a>. The following disambiguations are made to clarify the behavior for all values of <a href="#propdef-box-sizing" id="ref-for-propdef-box-sizing⑥" class="property">box-sizing</a>:

1.  In [10.3.3](https://www.w3.org/TR/CSS2/visudet.html#blockwidth), the second “width” in the following phrase is to be interpreted as <a href="https://www.w3.org/TR/CSS21/box.html#content-width" id="ref-for-content-width">content width</a>: “If <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width②" class="property">width</a> is not <a href="https://www.w3.org/TR/CSS2/visudet.html#the-width-property" id="ref-for-the-width-property①" class="css">auto</a> and <a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-left-width" id="ref-for-propdef-border-left-width②" class="property">border-left-width</a> + <a href="https://www.w3.org/TR/CSS21/box.html#propdef-padding-left" id="ref-for-propdef-padding-left②" class="property">padding-left</a> + <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width③" class="property">width</a> + \[...\]”
2.  In [10.3.7](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-width), “width” is to be interpreted as <a href="https://www.w3.org/TR/CSS21/box.html#content-width" id="ref-for-content-width①">content width</a> in the following equation: “<a href="https://www.w3.org/TR/CSS2/visuren.html#position-props" id="ref-for-position-props" class="property">left</a> + <a href="https://www.w3.org/TR/CSS21/box.html#propdef-margin-left" id="ref-for-propdef-margin-left" class="property">margin-left</a> + <a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-left-width" id="ref-for-propdef-border-left-width③" class="property">border-left-width</a> + <a href="https://www.w3.org/TR/CSS21/box.html#propdef-padding-left" id="ref-for-propdef-padding-left③" class="property">padding-left</a> + <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width④" class="property">width</a> + \[...\]”
3.  In [10.4](https://www.w3.org/TR/CSS2/visudet.html#min-max-widths), “width”, “height”, “min-width”, “max-width”, “min-height” and “max-height” are respectively to be interpreted as <a href="https://www.w3.org/TR/CSS21/box.html#content-width" id="ref-for-content-width②">content width</a>, <a href="https://www.w3.org/TR/CSS21/box.html#content-height" id="ref-for-content-height">content height</a>, <a href="#min-inner-width" id="ref-for-min-inner-width">min inner width</a>, <a href="#max-inner-width" id="ref-for-max-inner-width">max inner width</a>, <a href="#min-inner-height" id="ref-for-min-inner-height">min inner height</a> and <a href="#max-inner-height" id="ref-for-max-inner-height">max inner height</a> in the following phrases:
    1.  “The tentative used width is calculated \[...\]”
    2.  “If the tentative used width is greater than <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-max-width" id="ref-for-propdef-max-width②" class="property">max-width</a>, the rules above are applied again, but this time using the computed value of <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-max-width" id="ref-for-propdef-max-width③" class="property">max-width</a> as the computed value for <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width⑤" class="property">width</a>.”
    3.  “If the resulting width is smaller than <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-min-width" id="ref-for-propdef-min-width②" class="property">min-width</a>, the rules above are applied again, but this time using the value of <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-min-width" id="ref-for-propdef-min-width③" class="property">min-width</a> as the computed value for <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width⑥" class="property">width</a>.”
    4.  “Select from the table the resolved height and width values for the appropriate constraint violation. Take the max-width and max-height as max(min, max) so that min ≤ max holds true. In this table w and h stand for the results of the width and height computations \[...\]”
    5.  All instances of these words in the table
    6.  “Then apply the rules under "Calculating widths and margins" above, as if <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width⑦" class="property">width</a> were computed as this value.”
4.  In [10.6.4](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-height), “height” is to be interpreted as <a href="https://www.w3.org/TR/CSS21/box.html#content-height" id="ref-for-content-height①">content height</a> in the following equation: “<a href="https://www.w3.org/TR/CSS2/visuren.html#position-props" id="ref-for-position-props①" class="property">top</a> + <a href="https://www.w3.org/TR/CSS21/box.html#propdef-margin-top" id="ref-for-propdef-margin-top" class="property">margin-top</a> + <a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-top-width" id="ref-for-propdef-border-top-width②" class="property">border-top-width</a> + <a href="https://www.w3.org/TR/CSS21/box.html#propdef-padding-top" id="ref-for-propdef-padding-top②" class="property">padding-top</a> + <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-height" id="ref-for-propdef-height②" class="property">height</a> + \[...\]”
5.  In [10.7](https://www.w3.org/TR/CSS2/visudet.html#min-max-heights), “width”, “height”, “min-height” and “max-height” are respectively to be interpreted as <a href="https://www.w3.org/TR/CSS21/box.html#content-width" id="ref-for-content-width③">content width</a>, <a href="https://www.w3.org/TR/CSS21/box.html#content-height" id="ref-for-content-height②">content height</a>, <a href="#min-inner-height" id="ref-for-min-inner-height①">min inner height</a> and <a href="#max-inner-height" id="ref-for-max-inner-height①">max inner height</a> in the following phrases:
    1.  “The tentative used height is calculated \[...\]”
    2.  “If this tentative height is greater than <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-max-height" id="ref-for-propdef-max-height②" class="property">max-height</a>, the rules above are applied again, but this time using the value of <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-max-height" id="ref-for-propdef-max-height③" class="property">max-height</a> as the computed value for <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-height" id="ref-for-propdef-height③" class="property">height</a>.”
    3.  “If the resulting height is smaller than <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-min-height" id="ref-for-propdef-min-height②" class="property">min-height</a>, the rules above are applied again, but this time using the value of <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-min-height" id="ref-for-propdef-min-height③" class="property">min-height</a> as the computed value for <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-height" id="ref-for-propdef-height④" class="property">height</a>.”
    4.  “\[...\] use the algorithm under Minimum and maximum widths above to find the used width and height. Then apply the rules under "Computing heights and margins" above, using the resulting width and height as if they were the computed values.”

<a href="#example-1f49a1a3" class="self-link"></a>

Example(s):

#### <span class="content">Using box-sizing to evenly share space</span><a href="#box-sizing-example" class="self-link"></a>

This example uses box-sizing to evenly horizontally split two divs with fixed size borders inside a div container, which would otherwise require additional markup.

sample CSS:

    div.container {
      width:38em;
      border:1em solid black;
    }

    div.split {
      box-sizing:border-box;
      width:50%;
      border:1em silver ridge;
      float:left;
    }

sample HTML fragment:

    <div class="container">
    <div class="split">This div occupies the left half.</div>
    <div class="split">This div occupies the right half.</div>
    </div>

demonstration of sample CSS and HTML:

This div should occupy the left half.

This div should occupy the right half.

The two divs above should appear side by side, each (including borders) 50% of the content width of their container. If instead they are stacked one on top of the other then your browser does not support <a href="#propdef-box-sizing" id="ref-for-propdef-box-sizing⑦" class="property">box-sizing</a>.

<span class="secno">4. </span><span class="content">Outline properties</span><a href="#outline-props" class="self-link"></a>
----------------------------------------------------------------------------------------------------------------------------

At times, style sheet authors may want to create outlines around visual objects such as buttons, active form fields, image maps, etc., to make them stand out. Outlines differ from borders in the following ways:

1.  Outlines do not take up space.
2.  Outlines may be non-rectangular.
3.  UAs often render outlines on elements in the :focus state.

The outline properties control the style of these dynamic outlines.

The stacking of the rendering of these outlines is explicitly left up to implementations to provide a better user experience per platform. This supersedes the stacking of outlines as defined in [Appendix E of CSS 2.1](https://www.w3.org/TR/CSS2/zindex.html) [\[CSS2\]](#biblio-css2).

**Keyboard users, in particular people with disabilities who may not be able to interact with the page in any other fashion, depend on the outline being visible on elements in the :focus state, thus authors must not make the outline invisible on such elements without making sure an alternative highlighting mechanism is provided.**

The rendering of applying transforms to outlines is left explicitly undefined in CSS3-UI.

### <span class="secno">4.1. </span><span class="content">Outlines Shorthand: the <a href="#propdef-outline" id="ref-for-propdef-outline" class="property">outline</a> property</span><a href="#outline" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>outline</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td>[ &lt;<a href="#propdef-outline-color" id="ref-for-propdef-outline-color" class="property">outline-color</a>&gt; <a href="https://www.w3.org/TR/css3-values/#comb-any" id="ref-for-comb-any">||</a> &lt;<a href="#propdef-outline-style" id="ref-for-propdef-outline-style" class="property">outline-style</a>&gt; <a href="https://www.w3.org/TR/css3-values/#comb-any" id="ref-for-comb-any①">||</a> &lt;<a href="#propdef-outline-width" id="ref-for-propdef-outline-width" class="property">outline-width</a>&gt; ]</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>see individual properties</td></tr><tr class="even"><td>Applies to:</td><td><a href="https://drafts.csswg.org/css-pseudo/#generated-content" title="Includes ::before and ::after pseudo-elements.">all elements</a></td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td>Media:</td><td>visual</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>see individual properties</td></tr><tr class="odd"><td>Canonical order:</td><td>per grammar</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-transitions/#animatable-properties">Animation type:</a></td><td>see individual properties</td></tr></tbody></table>

### <span class="secno">4.2. </span><span class="content">Outline Thickness: the <a href="#propdef-outline-width" id="ref-for-propdef-outline-width①" class="property">outline-width</a> property</span><a href="#outline-width" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>outline-width</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td><a href="https://www.w3.org/TR/css3-background/#typedef-line-width" id="ref-for-typedef-line-width" class="production css" title="Expands to: thick | medium | thin">&lt;line-width&gt;</a></td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>medium</td></tr><tr class="even"><td>Applies to:</td><td><a href="https://drafts.csswg.org/css-pseudo/#generated-content" title="Includes ::before and ::after pseudo-elements.">all elements</a></td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td>Media:</td><td>visual</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>absolute length; <span class="css">0</span> if the outline style is <a href="https://www.w3.org/TR/css3-background/#valdef-line-style-none" id="ref-for-valdef-line-style-none" class="css">none</a>.</td></tr><tr class="odd"><td>Canonical order:</td><td>per grammar</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-transitions/#animatable-properties">Animation type:</a></td><td><a href="https://drafts.csswg.org/css3-transitions/#animtype-length">length</a></td></tr></tbody></table>

### <span class="secno">4.3. </span><span class="content">Outline Patterns: the <a href="#propdef-outline-style" id="ref-for-propdef-outline-style①" class="property">outline-style</a> property</span><a href="#outline-style" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>outline-style</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td>auto <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one①">|</a> &lt;<a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-style" id="ref-for-propdef-border-style" class="property">border-style</a>&gt;</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>none</td></tr><tr class="even"><td>Applies to:</td><td><a href="https://drafts.csswg.org/css-pseudo/#generated-content" title="Includes ::before and ::after pseudo-elements.">all elements</a></td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td>Media:</td><td>visual</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>as specified</td></tr><tr class="odd"><td>Canonical order:</td><td>per grammar</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-transitions/#animatable-properties">Animation type:</a></td><td>discrete</td></tr></tbody></table>

### <span class="secno">4.4. </span><span class="content">Outline Colors: the <a href="#propdef-outline-color" id="ref-for-propdef-outline-color①" class="property">outline-color</a> property</span><a href="#outline-color" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>outline-color</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td><a href="https://www.w3.org/TR/css3-color/#valuea-def-color" id="ref-for-valuea-def-color" class="production css" title="Expands to: indigo | gold | firebrick | indianred | yellow | darkolivegreen | darkseagreen | slategrey | chocolate | darkslategrey | mediumvioletred | mediumorchid | silver | chartreuse | mediumblue | black | springgreen | crimson | lightsalmon | brown | turquoise | olivedrab | lawngreen | cyan | transparent | skyblue | gray | darkturquoise | goldenrod | darkgreen | darkviolet | darkgray | lightpink | teal | darkmagenta | lightgoldenrodyellow | lavender | yellowgreen | thistle | violet | navy | darkblue | dimgrey | orchid | blue | ghostwhite | honeydew | cornflowerblue | purple | darkkhaki | mediumpurple | cornsilk | red | bisque | slategray | darkcyan | khaki | wheat | deepskyblue | rebeccapurple | darkred | steelblue | aliceblue | lightslategrey | gainsboro | mediumturquoise | floralwhite | coral | aqua | lightcyan | darksalmon | beige | azure | lightsteelblue | greenyellow | fuchsia | lightseagreen | sienna | lightcoral | orangered | navajowhite | lime | palegreen | mistyrose | seashell | mediumspringgreen | royalblue | papayawhip | blanchedalmond | peru | aquamarine | white | darkslategray | lightgray | ivory | darkgoldenrod | currentcolor | lemonchiffon | burlywood | orange | forestgreen | darkgrey | olive | mintcream | antiquewhite | darkorange | hotpink | moccasin | limegreen | saddlebrown | grey | darkslateblue | lightskyblue | deeppink | plum | lightgrey | dodgerblue | maroon | sandybrown | magenta | tan | rosybrown | pink | lightblue | palevioletred | mediumseagreen | slateblue | dimgray | powderblue | seagreen | snow | mediumslateblue | midnightblue | paleturquoise | palegoldenrod | whitesmoke | darkorchid | salmon | lightslategray | oldlace | lightgreen | tomato | cadetblue | lightyellow | lavenderblush | linen | mediumaquamarine | green | blueviolet | peachpuff">&lt;color&gt;</a> <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one②">|</a> invert</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>invert</td></tr><tr class="even"><td>Applies to:</td><td><a href="https://drafts.csswg.org/css-pseudo/#generated-content" title="Includes ::before and ::after pseudo-elements.">all elements</a></td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td>Media:</td><td>visual</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>The computed value for <a href="#valdef-outline-color-invert" id="ref-for-valdef-outline-color-invert" class="css">invert</a> is <a href="#valdef-outline-color-invert" id="ref-for-valdef-outline-color-invert①" class="css">invert</a>; the computed value of <span class="css">currentColor</span> is <span class="css">currentColor</span> (See <a href="https://www.w3.org/TR/css-color-3/#currentColor">CSS Color Module Level 3 §#currentColor</a>); see the <a href="https://www.w3.org/TR/css3-color/#color0" id="ref-for-color0" class="property">color</a> property for other <a href="https://www.w3.org/TR/css3-color/#valuea-def-color" id="ref-for-valuea-def-color①" class="production css" title="Expands to: indigo | gold | firebrick | indianred | yellow | darkolivegreen | darkseagreen | slategrey | chocolate | darkslategrey | mediumvioletred | mediumorchid | silver | chartreuse | mediumblue | black | springgreen | crimson | lightsalmon | brown | turquoise | olivedrab | lawngreen | cyan | transparent | skyblue | gray | darkturquoise | goldenrod | darkgreen | darkviolet | darkgray | lightpink | teal | darkmagenta | lightgoldenrodyellow | lavender | yellowgreen | thistle | violet | navy | darkblue | dimgrey | orchid | blue | ghostwhite | honeydew | cornflowerblue | purple | darkkhaki | mediumpurple | cornsilk | red | bisque | slategray | darkcyan | khaki | wheat | deepskyblue | rebeccapurple | darkred | steelblue | aliceblue | lightslategrey | gainsboro | mediumturquoise | floralwhite | coral | aqua | lightcyan | darksalmon | beige | azure | lightsteelblue | greenyellow | fuchsia | lightseagreen | sienna | lightcoral | orangered | navajowhite | lime | palegreen | mistyrose | seashell | mediumspringgreen | royalblue | papayawhip | blanchedalmond | peru | aquamarine | white | darkslategray | lightgray | ivory | darkgoldenrod | currentcolor | lemonchiffon | burlywood | orange | forestgreen | darkgrey | olive | mintcream | antiquewhite | darkorange | hotpink | moccasin | limegreen | saddlebrown | grey | darkslateblue | lightskyblue | deeppink | plum | lightgrey | dodgerblue | maroon | sandybrown | magenta | tan | rosybrown | pink | lightblue | palevioletred | mediumseagreen | slateblue | dimgray | powderblue | seagreen | snow | mediumslateblue | midnightblue | paleturquoise | palegoldenrod | whitesmoke | darkorchid | salmon | lightslategray | oldlace | lightgreen | tomato | cadetblue | lightyellow | lavenderblush | linen | mediumaquamarine | green | blueviolet | peachpuff">&lt;color&gt;</a> values.</td></tr><tr class="odd"><td>Canonical order:</td><td>per grammar</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-transitions/#animatable-properties">Animation type:</a></td><td><a href="https://drafts.csswg.org/css3-transitions/#animtype-color">color</a></td></tr></tbody></table>

The outline created with the outline properties is drawn "over" a box, i.e., the outline is always on top, and doesn’t influence the position or size of the box, or of any other boxes. Therefore, displaying or suppressing outlines does not cause reflow.

Outlines may be non-rectangular. For example, if the element is broken across several lines, the outline should be an outline or minimum set of outlines that encloses all the element’s boxes.

Each part of the outline should be fully connected rather than open on some sides (as borders on inline elements are when lines are broken).

The parts of the outline are not required to be rectangular. To the extent that the outline follows the <a href="https://www.w3.org/TR/CSS2/box.html#border-edge" id="ref-for-border-edge">border edge</a>, it should follow the <a href="https://www.w3.org/TR/css3-background/#propdef-border-radius" id="ref-for-propdef-border-radius" class="property">border-radius</a> curve.

The position of the outline may be affected by descendant boxes.

User agents should use an algorithm for determining the outline that encloses a region appropriate for conveying the concept of focus to the user.

Note: This specification does not define the exact position or shape of the outline, but it is typically drawn immediately outside the border box.

The <a href="#propdef-outline-width" id="ref-for-propdef-outline-width②" class="property">outline-width</a> property accepts the same values as <a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-width" id="ref-for-propdef-border-width" class="property">border-width</a> ([CSS Backgrounds 3 §4.3 Line Thickness: the border-width properties](https://www.w3.org/TR/css3-background/#the-border-width)).

The <a href="#propdef-outline-style" id="ref-for-propdef-outline-style②" class="property">outline-style</a> property accepts the same values as <a href="https://www.w3.org/TR/CSS21/box.html#propdef-border-style" id="ref-for-propdef-border-style①" class="property">border-style</a> ([CSS Backgrounds 3 §4.2 Line Patterns: the border-style properties](https://www.w3.org/TR/css3-background/#the-border-style)), except that <span class="css">hidden</span> is not a legal outline style. In addition, in CSS3, <a href="#propdef-outline-style" id="ref-for-propdef-outline-style③" class="property">outline-style</a> accepts the value <span class="css">auto</span>. The <span class="css">auto</span> value permits the user agent to render a custom outline style, typically a style which is either a user interface default for the platform, or perhaps a style that is richer than can be described in detail in CSS, e.g. a rounded edge outline with semi-translucent outer pixels that appears to glow. As such, this specification does not define how the <a href="#propdef-outline-color" id="ref-for-propdef-outline-color②" class="property">outline-color</a> is incorporated or used (if at all) when rendering <span class="css">auto</span> style outlines. User agents may treat <span class="css">auto</span> as <span class="css">solid</span>.

The <a href="#propdef-outline-color" id="ref-for-propdef-outline-color③" class="property">outline-color</a> property accepts all colors, as well as the keyword invert. <a href="#valdef-outline-color-invert" id="ref-for-valdef-outline-color-invert②" class="css">Invert</a> is expected to perform a color inversion on the pixels on the screen. This is a common trick to ensure the focus border is visible, regardless of color background.

Conformant UAs may ignore the <a href="#valdef-outline-color-invert" id="ref-for-valdef-outline-color-invert③" class="css">invert</a> value on platforms that do not support color inversion of the pixels on the screen.

If the UA does not support the <a href="#valdef-outline-color-invert" id="ref-for-valdef-outline-color-invert④" class="css">invert</a> value then it must reject that value at parse-time, and the initial value of the <a href="#propdef-outline-color" id="ref-for-propdef-outline-color④" class="property">outline-color</a> property is the <span class="css">currentColor</span> keyword.

The <a href="#propdef-outline" id="ref-for-propdef-outline①" class="property">outline</a> property is a shorthand property, and sets all three of <a href="#propdef-outline-style" id="ref-for-propdef-outline-style④" class="property">outline-style</a>, <a href="#propdef-outline-width" id="ref-for-propdef-outline-width③" class="property">outline-width</a>, and <a href="#propdef-outline-color" id="ref-for-propdef-outline-color⑤" class="property">outline-color</a>.

Note: The outline is the same on all sides. In contrast to borders, there are no <span class="property">outline-top</span> or <span class="property">outline-left</span> etc. properties.

This specification does not define how multiple overlapping outlines are drawn, or how outlines are drawn for boxes that are partially obscured behind other elements.

<a href="#example-bcd0e0d3" class="self-link"></a>

Example(s):

Here’s an example of drawing a thick outline around a BUTTON element:

    button { outline: thick solid }

Graphical user interfaces may use outlines around elements to tell the user which element on the page has the focus. These outlines are in addition to any borders, and switching outlines on and off should not cause the document to reflow. The focus is the subject of user interaction in a document (e.g. for entering text or selecting a button).

<a href="#example-4b3084c1" class="self-link"></a>

Example(s):

For example, to draw a thick black line around an element when it has the focus, and a thick red line when it is active, the following rules can be used:

    :focus  { outline: thick solid black }
    :active { outline: thick solid red }

Note: Since the outline does not affect formatting (i.e., no space is left for it in the box model), it may well overlap other elements on the page.

### <span class="secno">4.5. </span><span class="content">Offsetting the Outline: the <a href="#propdef-outline-offset" id="ref-for-propdef-outline-offset" class="property">outline-offset</a> property</span><a href="#outline-offset" class="self-link"></a>

By default, the outline is drawn starting just outside the <a href="https://www.w3.org/TR/CSS2/box.html#border-edge" id="ref-for-border-edge①">border edge</a>. However, it is possible to offset the outline and draw it beyond the <a href="https://www.w3.org/TR/CSS2/box.html#border-edge" id="ref-for-border-edge②">border edge</a>.

<table><tbody><tr class="odd"><td>Name:</td><td>outline-offset</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td><a href="https://www.w3.org/TR/css3-values/#length-value" id="ref-for-length-value" class="production css" title="Expands to: em | vb | ch | cm | vh | vi | vw | ex | in | ic | pt | px | lh | pc | rem | rlh | vmax | advance measure | vmin | mm | cap | q">&lt;length&gt;</a></td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>0</td></tr><tr class="even"><td>Applies to:</td><td><a href="https://drafts.csswg.org/css-pseudo/#generated-content" title="Includes ::before and ::after pseudo-elements.">all elements</a></td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td>Media:</td><td>visual</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td><a href="https://www.w3.org/TR/css3-values/#length-value" id="ref-for-length-value①" class="production css" title="Expands to: em | vb | ch | cm | vh | vi | vw | ex | in | ic | pt | px | lh | pc | rem | rlh | vmax | advance measure | vmin | mm | cap | q">&lt;length&gt;</a> value in absolute units (px or physical).</td></tr><tr class="odd"><td>Canonical order:</td><td>per grammar</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-transitions/#animatable-properties">Animation type:</a></td><td><a href="https://drafts.csswg.org/css3-transitions/#animtype-length">length</a></td></tr></tbody></table>

If the computed value of <a href="#propdef-outline-offset" id="ref-for-propdef-outline-offset①" class="property">outline-offset</a> is anything other than 0, then the outline is outset from the <a href="https://www.w3.org/TR/CSS2/box.html#border-edge" id="ref-for-border-edge③">border edge</a> by that amount.

<a href="#example-8c7e0106" class="self-link"></a>

Example(s):

For example, to leave 2 pixels of space between a focus outline and the element that has the focus or is active, the following rule can be used:

    :focus,:active  { outline-offset: 2px }

Negative values must cause the outline to shrink into the border box. Both the height and the width of outside of the shape drawn by the outline should not become smaller than twice the computed value of the <a href="#propdef-outline-width" id="ref-for-propdef-outline-width④" class="property">outline-width</a> property, to make sure that an outline can be rendered even with large negative values. User Agents should apply this constraint independently in each dimension. If the outline is drawn as multiple disconnected shapes, this constraint applies to each shape separately.

<span class="secno">5. </span><span class="content">Resizing & Overflow</span><a href="#resizing-and-overflow" class="self-link"></a>
-------------------------------------------------------------------------------------------------------------------------------------

CSS2.1 provides a mechanism for controlling the appearance of a scrolling mechanism (e.g. scrollbars) on block container elements. This specification adds to that a mechanism for controlling user resizability of elements as well as the ability to specify text overflow behavior.

### <span class="secno">5.1. </span><span class="content">Resizing Boxes: the <a href="#propdef-resize" id="ref-for-propdef-resize" class="property">resize</a> property</span><a href="#resize" class="self-link"></a>

The <a href="#propdef-resize" id="ref-for-propdef-resize①" class="property">resize</a> property allows the author to specify whether or not an element is resizable by the user, and if so, along which axis/axes.

<table><tbody><tr class="odd"><td>Name:</td><td>resize</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td>none <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one③">|</a> both <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one④">|</a> horizontal <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one⑤">|</a> vertical</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>none</td></tr><tr class="even"><td>Applies to:</td><td>elements with <a href="https://www.w3.org/TR/CSS2/visufx.html#propdef-overflow" id="ref-for-propdef-overflow" class="property">overflow</a> other than visible, and optionally replaced elements such as images, videos, and iframes</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td>Media:</td><td>visual</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>as specified</td></tr><tr class="odd"><td>Canonical order:</td><td>per grammar</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-transitions/#animatable-properties">Animation type:</a></td><td>discrete</td></tr></tbody></table>

none   
The UA does not present a resizing mechanism on the element, and the user is given no direct manipulation mechanism to resize the element.

both   
The UA presents a bidirectional resizing mechanism to allow the user to adjust both the height and the width of the element.

horizontal   
The UA presents a unidirectional horizontal resizing mechanism to allow the user to adjust only the width of the element.

vertical   
The UA presents a unidirectional vertical resizing mechanism to allow the user to adjust only the height of the element.

Currently it is possible to control the appearance of the scrolling mechanism (if any) on an element using the <a href="https://www.w3.org/TR/CSS2/visufx.html#propdef-overflow" id="ref-for-propdef-overflow①" class="property">overflow</a> property (e.g. `overflow: scroll` vs. `overflow: hidden` etc.). The purpose of the <a href="#propdef-resize" id="ref-for-propdef-resize②" class="property">resize</a> property is to allow control over the appearance and function of the resizing mechanism (e.g. a resize box or widget) on the element.

Note: The resizing mechanism is NOT the same as the scrolling mechanism, nor is it related to any UA mechanism for zooming. The scrolling mechanism allows the user to determine which portion of the contents of an element is shown. The resizing mechanism allows the user to determine the size of the element.

The <a href="#propdef-resize" id="ref-for-propdef-resize③" class="property">resize</a> property applies to elements whose computed <a href="https://www.w3.org/TR/CSS2/visufx.html#propdef-overflow" id="ref-for-propdef-overflow②" class="property">overflow</a> value is something other than <a href="https://www.w3.org/TR/CSS2/visufx.html#propdef-overflow" id="ref-for-propdef-overflow③" class="css">visible</a>. UAs may also apply it, regardless of the value of the <a href="https://www.w3.org/TR/CSS2/visufx.html#propdef-overflow" id="ref-for-propdef-overflow④" class="property">overflow</a> property, to:

-   Replaced elements representing images or videos, such as `img`, `video`, `picture`, `svg`, `object`, or `canvas`.
-   The `iframe` element.

The effect of the <a href="#propdef-resize" id="ref-for-propdef-resize④" class="property">resize</a> property on generated content is undefined. Implementations should not apply the <a href="#propdef-resize" id="ref-for-propdef-resize⑤" class="property">resize</a> property to generated content.

Note: the <a href="#propdef-resize" id="ref-for-propdef-resize⑥" class="property">resize</a> property may apply to generated content in the future if there is implementation of [Interface CSSPseudoElement](https://drafts.csswg.org/css-pseudo/#CSSPseudoElement-interface) (See [\[css-pseudo-4\]](#biblio-css-pseudo-4)).

When an element is resized by the user, the user agent sets the <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width⑧" class="property">width</a> and <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-height" id="ref-for-propdef-height⑤" class="property">height</a> properties to px unit length values of the size indicated by the user, in the element’s [style attribute](https://www.w3.org/TR/css-style-attr/#style-attribute) DOM, replacing existing property declaration(s), if any, without <span class="css">!important</span>, if any.

If an element is resized in only one dimension, only the corresponding property is set, not both.

The precise direction of resizing (i.e. altering the top left of the element or altering the bottom right) may depend on a number of CSS layout factors including whether the element is absolutely positioned, whether it is positioned using the <a href="https://www.w3.org/TR/CSS2/visuren.html#position-props" id="ref-for-position-props②" class="property">right</a> and <a href="https://www.w3.org/TR/CSS2/visuren.html#position-props" id="ref-for-position-props③" class="property">bottom</a> properties, whether the language of the element is right-to-left etc. The UA should consider the direction of resizing (as determined by CSS layout), as well as platform conventions and constraints when deciding how to convey the resizing mechanism to the user.

The user agent must allow the user to resize the element with no other constraints than what is imposed by <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-min-width" id="ref-for-propdef-min-width④" class="property">min-width</a>, <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-max-width" id="ref-for-propdef-max-width④" class="property">max-width</a>, <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-min-height" id="ref-for-propdef-min-height④" class="property">min-height</a>, and <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-max-height" id="ref-for-propdef-max-height④" class="property">max-height</a>.

Note: There may be situations where user attempts to resize an element appear to be overriden or ignored, e.g. because of <span class="css">!important</span> cascading declarations that supersede that element’s [style attribute](https://www.w3.org/TR/css-style-attr/#style-attribute) <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width⑨" class="property">width</a> and <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-height" id="ref-for-propdef-height⑥" class="property">height</a> properties in the DOM.

Changes to the computed value of an element’s <a href="#propdef-resize" id="ref-for-propdef-resize⑦" class="property">resize</a> property do not reset changes to the [style attribute](https://www.w3.org/TR/css-style-attr/#style-attribute) made due to user resizing of that element.

<a href="#example-0ff410a0" class="self-link"></a>

Example(s):

For example, to make iframes scrollable *and* resizable, the following rule can be used:

    iframe,object[type^="text/"],
    object[type$="+xml"],object[type="application/xml"]
    {
      overflow:auto;
      resize:both;
    }

### <span class="secno">5.2. </span><span class="content"> Overflow Ellipsis: the <a href="#propdef-text-overflow" id="ref-for-propdef-text-overflow" class="property">text-overflow</a> property</span><a href="#text-overflow" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>text-overflow</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td>clip <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one⑥">|</a> ellipsis</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>clip</td></tr><tr class="even"><td>Applies to:</td><td>block containers</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td>Media:</td><td>visual</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>as specified</td></tr><tr class="odd"><td>Canonical order:</td><td>per grammar</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-transitions/#animatable-properties">Animation type:</a></td><td>discrete</td></tr></tbody></table>

This property specifies rendering when inline content overflows its <a href="https://www.w3.org/TR/css-writing-modes-3/#end" id="ref-for-end">end</a> line box edge in the inline progression direction of its block container element ("the block") that has <a href="https://www.w3.org/TR/CSS2/visufx.html#propdef-overflow" id="ref-for-propdef-overflow⑤" class="property">overflow</a> other than <a href="https://www.w3.org/TR/CSS2/visufx.html#propdef-overflow" id="ref-for-propdef-overflow⑥" class="css">visible</a>.

Text can overflow for example when it is prevented from wrapping (e.g. due to `white-space: nowrap` or a single word is too long to fit). Values have the following meanings:

clip<a href="#overflow-clip" class="self-link"></a>   
Clip inline content that overflows its block container element. Characters may be only partially rendered.

ellipsis<a href="#overflow-ellipsis" class="self-link"></a>   
Render an ellipsis character (U+2026) to represent clipped inline content. Implementations may substitute a more language, script, or writing-mode appropriate ellipsis character, or three dots "..." if the ellipsis character is unavailable.

The term "character" is used in this property definition for better readability and means "grapheme cluster" [\[UAX29\]](#biblio-uax29) for implementation purposes.

For the ellipsis value implementations must hide characters and [atomic inline-level elements](https://www.w3.org/TR/CSS2/visuren.html#inline-boxes) at the <a href="https://www.w3.org/TR/css-writing-modes-3/#end" id="ref-for-end①">end</a> edge of the line as necessary to fit the ellipsis, and place the ellipsis immediately adjacent to the <a href="https://www.w3.org/TR/css-writing-modes-3/#end" id="ref-for-end②">end</a> edge of the remaining inline content. The first character or [atomic inline-level element](https://www.w3.org/TR/CSS2/visuren.html#inline-boxes) on a line must be clipped rather than ellipsed.

<a href="#example-c13845d9" class="self-link"></a>

#### <span class="content">Bidi ellipsis examples</span><a href="#bidi-ellipsis" class="self-link"></a>

These examples demonstrate which characters get hidden to make room for the ellipsis in a bidi situation: those visually at the end edge of the line.

Sample CSS:

    div {
      font-family: monospace;
      white-space: pre;
      overflow: hidden;
      width: 9ch;
      text-overflow: ellipsis;
    }

Sample HTML fragments, renderings, and your browser:

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>HTML</th><th>Reference rendering</th><th>Your Browser</th></tr></thead><tbody><tr class="odd"><td><code class="highlight">&lt;div&gt;שלום 123456&lt;/div&gt;</code></td><td><div style="font-family:monospace">123456 ם…</div></td><td><div style="font-family: monospace; white-space: pre; overflow: hidden; width: 9ch; text-overflow: ellipsis">שלום 123456</div></td></tr><tr class="even"><td><code class="highlight">&lt;div dir=rtl&gt;שלום 123456&lt;/div&gt;</code></td><td><div style="font-family:monospace">…456 שלום</div></td><td><div dir="rtl" style="font-family: monospace; white-space: pre; overflow: hidden; width: 9ch; text-overflow: ellipsis">שלום 123456</div></td></tr></tbody></table>

#### <span class="content">ellipsing details</span><a href="#ellipsing-details" class="self-link"></a>

-   Ellipsing only affects rendering and must not affect layout nor dispatching of pointer events: The UA should dispatch any pointer event on the ellipsis to the elided element, as if <a href="#propdef-text-overflow" id="ref-for-propdef-text-overflow①" class="property">text-overflow</a> had been <span class="css">none</span>.
-   The ellipsis is styled and baseline-aligned according to the block.
-   Ellipsing occurs after relative positioning and other graphical transformations.
-   If there is insufficient space for the ellipsis, then clip the rendering of the ellipsis itself (on the same side that neutral characters on the line would have otherwise been clipped with the <span class="css">text-overflow:clip</span> value).

#### <span class="content">user interaction with ellipsis</span><a href="#ellipsis-interaction" class="self-link"></a>

-   When the user is interacting with content (e.g. editing, selecting, scrolling), the user agent may treat <a href="#propdef-text-overflow" id="ref-for-propdef-text-overflow②" class="css">text-overflow: ellipsis</a> as <a href="#propdef-text-overflow" id="ref-for-propdef-text-overflow③" class="css">text-overflow: clip</a>.
-   Selecting the ellipsis should select the ellipsed text. If all of the ellipsed text is selected, UAs should show selection of the ellipsis. Behavior of partially-selected ellipsed text is up to the UA.

<a href="#example-eea89238" class="self-link"></a>

Example(s):

#### <span class="content">text-overflow examples</span><a href="#text-overflow-examples" class="self-link"></a>

These examples demonstrate setting the text-overflow of a block container element that has text which overflows its dimensions:

sample CSS for a div:

    div {  font-family:Helvetica,sans-serif; line-height:1.1;
      width:3.1em; padding:.2em; border:solid .1em black; margin:1em 0;
    }

sample HTML fragments, renderings, and your browser:

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>HTML</th><th>sample rendering</th><th>your browser</th></tr></thead><tbody><tr class="odd"><td><pre><code>&lt;div&gt;
CSS IS AWESOME, YES
&lt;/div&gt;</code></pre></td><td>First, a box with text drawing outside of it.</td><td><div style="width:3.1em; border:solid .1em black; margin:1em 0; padding:.2em; font-family:Helvetica,sans-serif; line-height:1.1;">CSS IS AWESOME, YES</div></td></tr><tr class="even"><td><pre><code>&lt;div style=&quot;text-overflow:clip; overflow:hidden&quot;&gt;
CSS IS AWESOME, YES
&lt;/div&gt;</code></pre></td><td>Second, a similar box with the text clipped outside the box.</td><td><div style="width:3.1em; border:solid .1em black; margin:1em 0; padding:.2em; font-family:Helvetica,sans-serif; line-height:1.1; overflow:hidden;text-overflow:clip;">CSS IS AWESOME, YES</div></td></tr><tr class="odd"><td><pre><code>&lt;div style=&quot;text-overflow:ellipsis; overflow:hidden&quot;&gt;
CSS IS AWESOME, YES
&lt;/div&gt;</code></pre></td><td>Third, a similar box with an ellipsis representing the clipped text.</td><td><div style="width:3.1em; border:solid .1em black; margin:1em 0; padding:.2em;  font-family:Helvetica,sans-serif; line-height:1.1; overflow:hidden;text-overflow:ellipsis;">CSS IS AWESOME, YES</div></td></tr><tr class="even"><td><pre><code>&lt;div style=&quot;text-overflow:ellipsis; overflow:hidden&quot;&gt;
NESTED
 &lt;p&gt;PARAGRAPH&lt;/p&gt;
WON’T ELLIPSE.
&lt;/div&gt;</code></pre></td><td>Fourth, a box with a nested paragraph demonstrating anonymous block boxes equivalency and non-inheritance into a nested element.</td><td><div style="width:3.1em; border:solid .1em black; margin:1em 0; padding:.2em;  font-family:Helvetica,sans-serif; line-height:1.1; overflow:hidden;text-overflow:ellipsis;">NESTED<p>PARAGRAPH</p>WON’T ELLIPSE.</div></td></tr></tbody></table>

Note: the side of the line that the ellipsis is placed depends on the <a href="https://www.w3.org/TR/css-writing-modes-3/#propdef-direction" id="ref-for-propdef-direction" class="property">direction</a> of the block. E.g. an overflow hidden right-to-left (`direction: rtl`) block clips inline content on the <a href="https://www.w3.org/TR/css-writing-modes-3/#physical-left" id="ref-for-physical-left">left</a> side, thus would place a text-overflow ellipsis on the <a href="https://www.w3.org/TR/css-writing-modes-3/#physical-left" id="ref-for-physical-left①">left</a> to represent that clipped content.

#### <span class="content">ellipsis interaction with scrolling interfaces</span><a href="#ellipsis-scrolling" class="self-link"></a>

This section applies to elements with text-overflow other than <span class="css">text-overflow:clip</span> (non-clip text-overflow) and overflow:scroll.

When an element with non-clip text-overflow has overflow of scroll in the inline progression dimension of the text, and the browser provides a mechanism for scrolling (e.g. a scrollbar on the element, or a touch interface to swipe-scroll, etc.), there are additional implementation details that provide a better user experience:

When an element is scrolled (e.g. by the user, DOM manipulation), more of the element’s content is shown. The value of text-overflow should not affect whether more of the element’s content is shown or not. If a non-clip text-overflow is set, then as more content is scrolled into view, implementations should show whatever additional content fits, only truncating content which would otherwise be clipped (or is necessary to make room for the ellipsis/string), until the element is scrolled far enough to display the edge of the content at which point that content should be displayed rather than an ellipsis/string.

<a href="#example-79d781ff" class="self-link"></a>

Example(s):

This example uses text-overflow on an element with overflow scroll to demonstrate the above described behavior.

sample CSS:

    div.crawlbar {
      text-overflow: ellipsis;
      height: 2em;
      overflow: scroll;
      white-space: nowrap;
      width: 15em;
      border:1em solid black;
    }

sample HTML fragment:

    <div class="crawlbar">
    CSS is awesome, especially when you can scroll
    to see extra text instead of just
    having it overlap other text by default.
    </div>

demonstration of sample CSS and HTML:

CSS is awesome, especially when you can scroll to see extra text instead of just having it overlap other text by default.

While the content is being scrolled, implementations may adjust their rendering of ellipses (e.g. align to the box edge rather than line edge).

<span class="secno">6. </span><span class="content">Pointing Devices and Keyboards</span><a href="#pointing-keyboard" class="self-link"></a>
--------------------------------------------------------------------------------------------------------------------------------------------

### <span class="secno">6.1. </span><span class="content">Pointer interaction</span><a href="#pointer-interaction" class="self-link"></a>

#### <span class="secno">6.1.1. </span><span class="content">Styling the Cursor: the <a href="#propdef-cursor" id="ref-for-propdef-cursor" class="property">cursor</a> property</span><a href="#cursor" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>cursor</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td>[ [<a href="https://www.w3.org/TR/css3-values/#url-value" id="ref-for-url-value" class="production css">&lt;url&gt;</a> [&lt;x&gt; &lt;y&gt;]<a href="https://www.w3.org/TR/css3-values/#mult-opt" id="ref-for-mult-opt">?</a><a href="https://www.w3.org/TR/css3-values/#comb-comma" id="ref-for-comb-comma">,</a>]<a href="https://www.w3.org/TR/css3-values/#mult-zero-plus" id="ref-for-mult-zero-plus">*</a><br />
[ auto <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one⑦">|</a> default <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one⑧">|</a> none <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one⑨">|</a><br />
context-menu <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one①⓪">|</a> help <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one①①">|</a> pointer <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one①②">|</a> progress <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one①③">|</a> wait <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one①④">|</a><br />
cell <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one①⑤">|</a> crosshair <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one①⑥">|</a> text <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one①⑦">|</a> vertical-text <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one①⑧">|</a><br />
alias <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one①⑨">|</a> copy <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one②⓪">|</a> move <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one②①">|</a> no-drop <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one②②">|</a> not-allowed <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one②③">|</a> grab <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one②④">|</a> grabbing <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one②⑤">|</a><br />
e-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one②⑥">|</a> n-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one②⑦">|</a> ne-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one②⑧">|</a> nw-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one②⑨">|</a> s-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one③⓪">|</a> se-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one③①">|</a> sw-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one③②">|</a> w-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one③③">|</a> ew-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one③④">|</a> ns-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one③⑤">|</a> nesw-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one③⑥">|</a> nwse-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one③⑦">|</a> col-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one③⑧">|</a> row-resize <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one③⑨">|</a> all-scroll <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one④⓪">|</a><br />
zoom-in <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one④①">|</a> zoom-out<br />
] ]</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>auto</td></tr><tr class="even"><td>Applies to:</td><td><a href="https://drafts.csswg.org/css-pseudo/#generated-content" title="Includes ::before and ::after pseudo-elements.">all elements</a></td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>yes</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td>Media:</td><td>visual, interactive</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>as specified, except with any relative URLs converted to absolute</td></tr><tr class="odd"><td>Canonical order:</td><td>per grammar</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-transitions/#animatable-properties">Animation type:</a></td><td>discrete</td></tr></tbody></table>

This property specifies the type of cursor to be displayed for the pointing device when the cursor’s hotspot is within the element’s <a href="https://www.w3.org/TR/CSS2/box.html#border-edge" id="ref-for-border-edge④">border edge</a>.

Note: As per [CSS Backgrounds 3 §5.1 Curve Radii: the border-radius properties](https://www.w3.org/TR/css3-background/#the-border-radius), the <a href="https://www.w3.org/TR/CSS2/box.html#border-edge" id="ref-for-border-edge⑤">border edge</a> is affected by <a href="https://www.w3.org/TR/css3-background/#propdef-border-radius" id="ref-for-propdef-border-radius①" class="property">border-radius</a>.

In the case of overlapping elements, which element determines the type of cursor is based on hit testing: the element determining the cursor is the one that would receive a click initiated from this position.

Note: The specifics of hit testing are out of scope of this specification. Hit testing will hopefully be defined in a future revision of CSS or HTML.

User agents may ignore the cursor property over native user-agent controls such as scrollbars, resizers, or other native UI widgets e.g. those that may be used inside some user agent specific implementations of form elements. User agents may also ignore the cursor property and display a cursor of their choice to indicate various states of the UA’s user interface, such as a busy cursor when the page is not responding, or a text cursor when the user is performing text selection.

Note: [\[HTML\]](#biblio-html) defines [special handling of image maps](https://html.spec.whatwg.org/multipage/rendering.html#image-maps-2) for the <a href="#propdef-cursor" id="ref-for-propdef-cursor①" class="property">cursor</a> property.

Values have the following meanings:

image cursors   
<a href="https://www.w3.org/TR/css3-values/#url-value" id="ref-for-url-value①" class="production css">&lt;url&gt;</a>   
The user agent retrieves the cursor from the resource designated by the URI. If the user agent cannot handle the first cursor of a list of cursors, it must attempt to handle the second, etc. If the user agent cannot handle any user-defined cursor, it must use the cursor keyword at the end of the list. Conforming User Agents may, instead of <a href="https://www.w3.org/TR/css3-values/#url-value" id="ref-for-url-value②" class="production css">&lt;url&gt;</a>, support <a href="https://www.w3.org/TR/css3-images/#image-type" id="ref-for-image-type" class="production css">&lt;image&gt;</a> which is a superset.

The UA must support the following image file formats:

-   PNG, as defined in [\[PNG\]](#biblio-png)
-   SVG, as defined in [\[SVG11\]](#biblio-svg11), in [secure static mode](https://www.w3.org/TR/SVG2/conform.html#secure-static-mode) [\[SVG2\]](#biblio-svg2), if it has an intrinsic size.
-   any other non-animated image file format that they support for <a href="https://www.w3.org/TR/css3-images/#image-type" id="ref-for-image-type①" class="production css">&lt;image&gt;</a> in other properties, such as the the <a href="https://www.w3.org/TR/CSS21/colors.html#propdef-background-image" id="ref-for-propdef-background-image" class="property">background-image</a> property

In addition, the UA should support the following image file formats:

-   SVG, as defined in [\[SVG11\]](#biblio-svg11), in [secure animated mode](https://www.w3.org/TR/SVG2/conform.html#secure-animated-mode) [\[SVG2\]](#biblio-svg2), if it has an intrinsic size.
-   any other animated image file format that they support for <a href="https://www.w3.org/TR/css3-images/#image-type" id="ref-for-image-type②" class="production css">&lt;image&gt;</a> in other properties, such as the the <a href="https://www.w3.org/TR/CSS21/colors.html#propdef-background-image" id="ref-for-propdef-background-image①" class="property">background-image</a> property

The UA may also support additional file formats, including SVG, as defined in [\[SVG11\]](#biblio-svg11), in secure static mode or secure animated mode [\[SVG2\]](#biblio-svg2), even if it does not have an intrinsic size.

Note: The CSS Working group initially intended support for all SVG, intrinsically sized or not. Support for non intrinsically sized SVG was downgraded from mandatory to optional due to lack of implementations.

Note: At the time of writing this specification (spring 2015), the only file formats supported for cursors in common desktop browsers are the .ico and .cur file formats, as designed by Microsoft. For compatibility with legacy content, UAs are encouraged to support these, even though the lack of an open specification makes it impossible to have a normative requirement about these formats. Some information on these formats can be found [on Wikipedia](https://en.wikipedia.org/wiki/ICO_%28file_format%29).

The <a href="https://drafts.csswg.org/css-images-3/#default-object-size" id="ref-for-default-object-size">default object size</a> for cursor images is a UA-defined size that should be based on the size of a typical cursor on the UA’s operating system.

The <a href="https://drafts.csswg.org/css-images-3/#concrete-object-size" id="ref-for-concrete-object-size">concrete object size</a> is determined using the <a href="https://drafts.csswg.org/css-images-3/#default-sizing-algorithm" id="ref-for-default-sizing-algorithm">default sizing algorithm</a>. If an operating system is **incapable** of rendering a cursor above a given size, cursors larger than that size must be shrunk to within the OS-supported size bounds, while maintaining the cursor image’s intrinsic ratio, if any.

The optional &lt;x&gt; and &lt;y&gt; coordinates identify the exact position within the image which is the pointer position (i.e., the hotspot).

&lt;x&gt;  
&lt;y&gt;   
Each is a <a href="https://www.w3.org/TR/css3-values/#number-value" id="ref-for-number-value" class="production css">&lt;number&gt;</a>. The x-coordinate and y-coordinate of the position in the cursor’s coordinate system (left/top relative) which represents the precise position that is being pointed to.

Note: This specification does not define how the coordinate systems of the various types of <a href="https://www.w3.org/TR/css3-images/#image-type" id="ref-for-image-type③" class="production css">&lt;image&gt;</a> are established, and defers these definitions to [\[CSS4-IMAGES\]](#biblio-css4-images).

If the values are unspecified, then the intrinsic hotspot defined inside the image resource itself is used. If both the values are unspecific and the referenced cursor has no defined hotspot, the effect is as if a value of "0 0" were specified.

If the coordinates of the hotspot, as specified either inside the image resource or by &lt;x&gt; and &lt;y&gt; values, fall outside of the cursor image, they must be clamped (independently) to fit.

general purpose cursors   
auto   
The UA determines the cursor to display based on the current context, specifically: auto behaves as <a href="#valdef-cursor-text" id="ref-for-valdef-cursor-text" class="css">text</a> over selectable text or editable elements, and <a href="#valdef-cursor-default" id="ref-for-valdef-cursor-default" class="css">default</a> otherwise.

default   
The platform-dependent default cursor. Often rendered as an arrow.

none<a href="#valdef-cursor-none" class="self-link"></a>   
No cursor is rendered for the element.

links and status cursors   
context-menu<a href="#valdef-cursor-context-menu" class="self-link"></a>   
A context menu is available for the object under the cursor. Often rendered as an arrow with a small menu-like graphic next to it.

help<a href="#valdef-cursor-help" class="self-link"></a>   
Help is available for the object under the cursor. Often rendered as a question mark or a balloon.

pointer   
The cursor is a pointer that indicates a link.

progress<a href="#valdef-cursor-progress" class="self-link"></a>   
A progress indicator. The program is performing some processing, but is different from <a href="#valdef-cursor-wait" id="ref-for-valdef-cursor-wait" class="css">wait</a> in that the user may still interact with the program. Often rendered as a spinning beach ball, or an arrow with a watch or hourglass.

wait   
Indicates that the program is busy and the user should wait. Often rendered as a watch or hourglass.

selection cursors   
cell<a href="#valdef-cursor-cell" class="self-link"></a>   
Indicates that a cell or set of cells may be selected. Often rendered as a thick plus-sign with a dot in the middle.

crosshair<a href="#valdef-cursor-crosshair" class="self-link"></a>   
A simple crosshair (e.g., short line segments resembling a "+" sign). Often used to indicate a two dimensional bitmap selection mode.

text   
Indicates text that may be selected. Often rendered as a vertical I-beam. User agents may automatically display a horizontal I-beam/cursor (e.g. same as the <a href="#valdef-cursor-vertical-text" id="ref-for-valdef-cursor-vertical-text" class="css">vertical-text</a> keyword) for vertical text, or for that matter, any angle of I-beam/cursor for text that is rendered at any particular angle.

vertical-text   
Indicates vertical-text that may be selected. Often rendered as a horizontal I-beam.

drag and drop cursors   
alias<a href="#valdef-cursor-alias" class="self-link"></a>   
Indicates an alias of/shortcut to something is to be created. Often rendered as an arrow with a small curved arrow next to it.

copy<a href="#valdef-cursor-copy" class="self-link"></a>   
Indicates something is to be copied. Often rendered as an arrow with a small plus sign next to it.

move<a href="#valdef-cursor-move" class="self-link"></a>   
Indicates something is to be moved.

no-drop<a href="#valdef-cursor-no-drop" class="self-link"></a>   
Indicates that the dragged item cannot be dropped at the current cursor location. Often rendered as a hand or pointer with a small circle with a line through it.

not-allowed<a href="#valdef-cursor-not-allowed" class="self-link"></a>   
Indicates that the requested action will not be carried out. Often rendered as a circle with a line through it.

grab<a href="#valdef-cursor-grab" class="self-link"></a>   
Indicates that something can be grabbed (dragged to be moved). Often rendered as the backside of an open hand.

grabbing<a href="#valdef-cursor-grabbing" class="self-link"></a>   
Indicates that something is being grabbed (dragged to be moved). Often rendered as the backside of a hand with fingers closed mostly out of view.

resizing and scrolling cursors   
 <span style="cursor:e-resize">e-resize<a href="#valdef-cursor-e-resize" class="self-link"></a></span>, <span style="cursor:n-resize">n-resize<a href="#valdef-cursor-n-resize" class="self-link"></a></span>, <span style="cursor:ne-resize">ne-resize<a href="#valdef-cursor-ne-resize" class="self-link"></a></span>, <span style="cursor:nw-resize">nw-resize<a href="#valdef-cursor-nw-resize" class="self-link"></a></span>, <span style="cursor:s-resize">s-resize<a href="#valdef-cursor-s-resize" class="self-link"></a></span>, <span style="cursor:se-resize">se-resize</span>, <span style="cursor:sw-resize">sw-resize<a href="#valdef-cursor-sw-resize" class="self-link"></a></span>, <span style="cursor:w-resize">w-resize<a href="#valdef-cursor-w-resize" class="self-link"></a></span>   
Indicates that some edge is to be moved. For example, the <a href="#valdef-cursor-se-resize" id="ref-for-valdef-cursor-se-resize" class="css">se-resize</a> cursor is used when the movement starts from the south-east corner of the box.

 <span style="cursor:ew-resize">ew-resize<a href="#valdef-cursor-ew-resize" class="self-link"></a></span>, <span style="cursor:ns-resize">ns-resize<a href="#valdef-cursor-ns-resize" class="self-link"></a></span>, <span style="cursor:nesw-resize">nesw-resize<a href="#valdef-cursor-nesw-resize" class="self-link"></a></span>, <span style="cursor:nwse-resize">nwse-resize<a href="#valdef-cursor-nwse-resize" class="self-link"></a></span>   
Indicates a bidirectional resize cursor.

col-resize<a href="#valdef-cursor-col-resize" class="self-link"></a>   
Indicates that the item/column can be resized horizontally. Often rendered as arrows pointing left and right with a vertical bar separating them.

row-resize<a href="#valdef-cursor-row-resize" class="self-link"></a>   
Indicates that the item/row can be resized vertically. Often rendered as arrows pointing up and down with a horizontal bar separating them.

all-scroll<a href="#valdef-cursor-all-scroll" class="self-link"></a>   
Indicates that the something can be scrolled in any direction. Often rendered as arrows pointing up, down, left, and right with a dot in the middle.

<a href="#zooming-cursors" class="self-link"></a>zooming cursors   
 <span style="cursor:zoom-in"> zoom-in</span>, <span style="cursor:zoom-out"> zoom-out</span>   
Indicates that something can be zoomed (magnified) in or out, and often rendered as a magnifying glass with a "+" or "-" in the center of the glass, for <a href="#valdef-cursor-zoom-in" id="ref-for-valdef-cursor-zoom-in" class="css">zoom-in</a> and <a href="#valdef-cursor-zoom-out" id="ref-for-valdef-cursor-zoom-out" class="css">zoom-out</a> respectively.

<a href="#example-dac6aeac" class="self-link"></a>

Example: cursor fallback

Here is an example of using several cursor values.

    :link,:visited {
        cursor: url(example.svg#linkcursor),
                url(hyper.cur),
                url(hyper.png) 2 3,
                pointer
    }

This example sets the cursor on all hyperlinks (whether visited or not) to an external [SVG cursor](https://www.w3.org/TR/SVG/interact.html#CursorElement) ([\[SVG11\]](#biblio-svg11), section 16.8.3). User agents that don’t support SVG cursors would simply skip to the next value and attempt to use the "hyper.cur" cursor. If that cursor format was also not supported, the UA could attempt to use the "hyper.png" cursor with the explicit hotspot. Finally if the UA does not support any of those image cursor formats, the UA would skip to the last value and render the <a href="#valdef-cursor-pointer" id="ref-for-valdef-cursor-pointer" class="css">pointer</a> cursor.

##### <span class="secno">6.1.1.1. </span><span class="content">Cursor of the canvas</span><a href="#canvas_cursor" class="self-link"></a>

The document [canvas](https://www.w3.org/TR/CSS2/intro.html#the-canvas) is the infinite surface over which the document is rendered [\[CSS2\]](#biblio-css2). Since no element corresponds to the canvas, in order to allow styling of the cursor when not over any element, the canvas cursor re-uses the root element’s cursor. However, if no boxes are generated for the root element (for example, if the root element has <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-display" id="ref-for-propdef-display" class="css">display: none</a>), then the canvas cursor is the platform-dependent default cursor.

Note: An element might be invisible, but still generate boxes. For example, if the element has <a href="https://www.w3.org/TR/CSS21/visufx.html#propdef-visibility" id="ref-for-propdef-visibility" class="css">visibility: hidden</a> but not <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-display" id="ref-for-propdef-display①" class="css">display: none</a>, boxes are generated for it and its cursor is used for the canvas.

### <span class="secno">6.2. </span><span class="content">Insertion caret</span><a href="#insertion-caret" class="self-link"></a>

#### <span class="secno">6.2.1. </span><span class="content">Coloring the Insertion Caret: the <a href="#propdef-caret-color" id="ref-for-propdef-caret-color" class="property">caret-color</a> property</span><a href="#caret-color" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>caret-color</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td>auto <a href="https://www.w3.org/TR/css3-values/#comb-one" id="ref-for-comb-one④②">|</a> <a href="https://www.w3.org/TR/css3-color/#valuea-def-color" id="ref-for-valuea-def-color②" class="production css" title="Expands to: indigo | gold | firebrick | indianred | yellow | darkolivegreen | darkseagreen | slategrey | chocolate | darkslategrey | mediumvioletred | mediumorchid | silver | chartreuse | mediumblue | black | springgreen | crimson | lightsalmon | brown | turquoise | olivedrab | lawngreen | cyan | transparent | skyblue | gray | darkturquoise | goldenrod | darkgreen | darkviolet | darkgray | lightpink | teal | darkmagenta | lightgoldenrodyellow | lavender | yellowgreen | thistle | violet | navy | darkblue | dimgrey | orchid | blue | ghostwhite | honeydew | cornflowerblue | purple | darkkhaki | mediumpurple | cornsilk | red | bisque | slategray | darkcyan | khaki | wheat | deepskyblue | rebeccapurple | darkred | steelblue | aliceblue | lightslategrey | gainsboro | mediumturquoise | floralwhite | coral | aqua | lightcyan | darksalmon | beige | azure | lightsteelblue | greenyellow | fuchsia | lightseagreen | sienna | lightcoral | orangered | navajowhite | lime | palegreen | mistyrose | seashell | mediumspringgreen | royalblue | papayawhip | blanchedalmond | peru | aquamarine | white | darkslategray | lightgray | ivory | darkgoldenrod | currentcolor | lemonchiffon | burlywood | orange | forestgreen | darkgrey | olive | mintcream | antiquewhite | darkorange | hotpink | moccasin | limegreen | saddlebrown | grey | darkslateblue | lightskyblue | deeppink | plum | lightgrey | dodgerblue | maroon | sandybrown | magenta | tan | rosybrown | pink | lightblue | palevioletred | mediumseagreen | slateblue | dimgray | powderblue | seagreen | snow | mediumslateblue | midnightblue | paleturquoise | palegoldenrod | whitesmoke | darkorchid | salmon | lightslategray | oldlace | lightgreen | tomato | cadetblue | lightyellow | lavenderblush | linen | mediumaquamarine | green | blueviolet | peachpuff">&lt;color&gt;</a></td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>auto</td></tr><tr class="even"><td>Applies to:</td><td><a href="https://drafts.csswg.org/css-pseudo/#generated-content" title="Includes ::before and ::after pseudo-elements.">all elements</a></td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>yes</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td>Media:</td><td>interactive</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>The computed value for <a href="#valdef-caret-color-auto" id="ref-for-valdef-caret-color-auto" class="css">auto</a> is <a href="#valdef-caret-color-auto" id="ref-for-valdef-caret-color-auto①" class="css">auto</a>; the computed value of <span class="css">currentColor</span> is <span class="css">currentColor</span> (See <a href="https://www.w3.org/TR/css-color-3//#currentColor">CSS Color Module Level 3 §#currentColor</a>); see the <a href="https://www.w3.org/TR/css3-color/#color0" id="ref-for-color0①" class="property">color</a> property for other <a href="https://www.w3.org/TR/css3-color/#valuea-def-color" id="ref-for-valuea-def-color③" class="production css" title="Expands to: indigo | gold | firebrick | indianred | yellow | darkolivegreen | darkseagreen | slategrey | chocolate | darkslategrey | mediumvioletred | mediumorchid | silver | chartreuse | mediumblue | black | springgreen | crimson | lightsalmon | brown | turquoise | olivedrab | lawngreen | cyan | transparent | skyblue | gray | darkturquoise | goldenrod | darkgreen | darkviolet | darkgray | lightpink | teal | darkmagenta | lightgoldenrodyellow | lavender | yellowgreen | thistle | violet | navy | darkblue | dimgrey | orchid | blue | ghostwhite | honeydew | cornflowerblue | purple | darkkhaki | mediumpurple | cornsilk | red | bisque | slategray | darkcyan | khaki | wheat | deepskyblue | rebeccapurple | darkred | steelblue | aliceblue | lightslategrey | gainsboro | mediumturquoise | floralwhite | coral | aqua | lightcyan | darksalmon | beige | azure | lightsteelblue | greenyellow | fuchsia | lightseagreen | sienna | lightcoral | orangered | navajowhite | lime | palegreen | mistyrose | seashell | mediumspringgreen | royalblue | papayawhip | blanchedalmond | peru | aquamarine | white | darkslategray | lightgray | ivory | darkgoldenrod | currentcolor | lemonchiffon | burlywood | orange | forestgreen | darkgrey | olive | mintcream | antiquewhite | darkorange | hotpink | moccasin | limegreen | saddlebrown | grey | darkslateblue | lightskyblue | deeppink | plum | lightgrey | dodgerblue | maroon | sandybrown | magenta | tan | rosybrown | pink | lightblue | palevioletred | mediumseagreen | slateblue | dimgray | powderblue | seagreen | snow | mediumslateblue | midnightblue | paleturquoise | palegoldenrod | whitesmoke | darkorchid | salmon | lightslategray | oldlace | lightgreen | tomato | cadetblue | lightyellow | lavenderblush | linen | mediumaquamarine | green | blueviolet | peachpuff">&lt;color&gt;</a> values.</td></tr><tr class="odd"><td>Canonical order:</td><td>per grammar</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-transitions/#animatable-properties">Animation type:</a></td><td><a href="https://drafts.csswg.org/css3-transitions/#animtype-color">color</a></td></tr></tbody></table>

auto   
User agents should use currentColor. User agents may automatically adjust the color of caret to ensure good visibility and contrast with the surrounding content, possibly based on the currentColor, background, shadows, etc.

<a href="https://www.w3.org/TR/css3-color/#valuea-def-color" id="ref-for-valuea-def-color④" class="production css" title="Expands to: indigo | gold | firebrick | indianred | yellow | darkolivegreen | darkseagreen | slategrey | chocolate | darkslategrey | mediumvioletred | mediumorchid | silver | chartreuse | mediumblue | black | springgreen | crimson | lightsalmon | brown | turquoise | olivedrab | lawngreen | cyan | transparent | skyblue | gray | darkturquoise | goldenrod | darkgreen | darkviolet | darkgray | lightpink | teal | darkmagenta | lightgoldenrodyellow | lavender | yellowgreen | thistle | violet | navy | darkblue | dimgrey | orchid | blue | ghostwhite | honeydew | cornflowerblue | purple | darkkhaki | mediumpurple | cornsilk | red | bisque | slategray | darkcyan | khaki | wheat | deepskyblue | rebeccapurple | darkred | steelblue | aliceblue | lightslategrey | gainsboro | mediumturquoise | floralwhite | coral | aqua | lightcyan | darksalmon | beige | azure | lightsteelblue | greenyellow | fuchsia | lightseagreen | sienna | lightcoral | orangered | navajowhite | lime | palegreen | mistyrose | seashell | mediumspringgreen | royalblue | papayawhip | blanchedalmond | peru | aquamarine | white | darkslategray | lightgray | ivory | darkgoldenrod | currentcolor | lemonchiffon | burlywood | orange | forestgreen | darkgrey | olive | mintcream | antiquewhite | darkorange | hotpink | moccasin | limegreen | saddlebrown | grey | darkslateblue | lightskyblue | deeppink | plum | lightgrey | dodgerblue | maroon | sandybrown | magenta | tan | rosybrown | pink | lightblue | palevioletred | mediumseagreen | slateblue | dimgray | powderblue | seagreen | snow | mediumslateblue | midnightblue | paleturquoise | palegoldenrod | whitesmoke | darkorchid | salmon | lightslategray | oldlace | lightgreen | tomato | cadetblue | lightyellow | lavenderblush | linen | mediumaquamarine | green | blueviolet | peachpuff">&lt;color&gt;</a>   
The insertion caret is colored with the specified color.

The caret is a visible indicator of the insertion point in an element where text (and potentially other content) is inserted by the user. This property controls the color of that visible indicator.

Note: caret shape and blinking is outside the scope of this feature and thus unspecified.

Note: UAs might have additional things that count as “carets”. For example, some UAs can show a “navigation caret”, which acts similarly to an insertion caret but can be moved around in non-editable text, and is functionally a caret. On the other hand, the cursor image shown when hovering over text when the <a href="#propdef-cursor" id="ref-for-propdef-cursor②" class="property">cursor</a> property is <a href="#valdef-cursor-auto" id="ref-for-valdef-cursor-auto" class="css">auto</a>, or when hovering over an element where the <a href="#propdef-cursor" id="ref-for-propdef-cursor③" class="property">cursor</a> property is <a href="#valdef-cursor-text" id="ref-for-valdef-cursor-text①" class="css">text</a> or <a href="#valdef-cursor-vertical-text" id="ref-for-valdef-cursor-vertical-text①" class="css">vertical-text</a>, though it sometimes resembles a caret, is not a caret (it’s a cursor).

<a href="#example-24147f22" class="self-link"></a> Example: a textarea with `caret-color:#00aacc;`

caret-color:\#00aacc

### <span class="secno">6.3. </span><span class="content">Keyboard control</span><a href="#keyboard" class="self-link"></a>

#### <span class="secno">6.3.1. </span><span class="content">Obsolete: the ime-mode property</span><a href="#input-method-editor" class="self-link"></a>

"ime-mode" is a property somewhat implemented in some browsers, that is problematic and officially obsoleted by this specification.

There is documentation of [non-interoperability of these implementations.](https://developer.mozilla.org/en-US/docs/Web/CSS/ime-mode)

User agents should not support the <span class="css">ime-mode</span> property.

Authors must not use the ime-mode property.

Users may use the ime-mode property only for repair use-cases where they have to work around bad sites and legacy implementations, e.g. with a user style sheet rule like:

<a href="#example-8592b31b" class="self-link"></a>

Example: user preference

    input[type=password] {    ime-mode: auto !important;
    }

This example CSS may be placed into a user style sheet file to force password input fields to behave in a default manner.

This specification deliberately does not attempt to document the functionality of legacy ime-mode implementations nor what they specifically support because it does not make sense to pursue or recommend any such path.

Note: there are several [\[HTML\]](#biblio-html) features which authors should use to provide information to user agents that allow them to provide a better input user experience:

-   The global `lang` attribute
-   The `inputmode`, `pattern`, and `type` attributes of the input element

------------------------------------------------------------------------

<span class="content">Appendix A. Acknowledgments</span><a href="#acknowledgments" class="self-link"></a>
---------------------------------------------------------------------------------------------------------

This appendix is *informative*.

This specification was edited and written for the most part by Tantek Çelik from 1999 to the present, first while representing Microsoft, then as an Invited Expert, and most recently while representing Mozilla.

Thanks to <span class="h-card">Florian Rivoal</span>, working on this specification on behalf of Bloomberg, for his recent work documenting issues from www-style emails, proposing resolutions & changes, and in particular for researching & writing greatly improved details for the <a href="#propdef-box-sizing" id="ref-for-propdef-box-sizing⑧" class="property">box-sizing</a> property.

Thanks to feedback and contributions from <span class="h-card">Rossen Atanassov</span>, <span class="h-card">Tab Atkins</span>, <span class="h-card">L. David Baron</span>, <span class="h-card">Bert Bos</span>, <span class="h-card">Matthew Brealey</span>, <span class="h-card">Rick Byers</span>, <span class="h-card">Ada Chan</span>, <span class="h-card">James Craig</span>, <span class="h-card">Michael Cooper</span>, <span class="h-card">Axel Dahmen</span>, <span class="h-card">Michael Day</span>, <span class="h-card">Micah Dubinko</span>, <span class="h-card">Elika E.</span>, <span class="h-card">Steve Falkenburg</span>, <span class="h-card">Andrew Fedoniouk</span>, <span class="h-card">Al Gilman</span>, <span class="h-card">Ian Hickson</span>, <span class="h-card">Bjoern Hoehrmann</span>, <span class="h-card">Alan Hogan</span>, <span class="h-card">David Hyatt</span>, <span class="h-card">Richard Ishida</span>, <span class="h-card">Sho Kuwamoto</span>, <span class="h-card">Yves Lafon</span>, <span class="h-card">Stuart Langridge</span>, <span class="h-card">Susan Lesch</span>, <span class="h-card">Peter Linss</span>, <span class="h-card">Kang-Hao Lu</span>, <span class="h-card">Masayuki Nakano</span>, <span class="h-card">Mats Palmgren</span>, <span class="h-card">Brad Pettit</span>, <span class="h-card">Chris Rebert</span>, <span class="h-card">François Remy</span>, <span class="h-card">Andrey Rybka</span>, <span class="h-card">Simon Sapin</span>, <span class="h-card">Alexander Savenkov</span>, <span class="h-card">Sebastian Schnitzenbaumer</span>, <span class="h-card">Lea Verou</span>, <span class="h-card">Etan Wexler</span>, <span class="h-card">David Woolley</span>, <span class="h-card">Frank Yan</span>, <span class="h-card">Boris Zbarsky</span>, and <span class="h-card">Domel</span>.

<span class="content">Appendix B. Changes</span><a href="#changes" class="self-link"></a>
-----------------------------------------------------------------------------------------

This appendix is *informative*.

### Since Proposed Recommendation

This portion of the appendix describes changes from the [Proposed Recommendation (PR) of 14 December 2017](https://www.w3.org/TR/2017/PR-css-ui-3-20171214/).

-   Updated references to latest versions
-   Date and boilerplate changes for W3C Recommendation
-   Link to errata document added
-   Updated this changes section

### Since Candidate Recommendation

This portion of the appendix describes changes from the [Candidate Recommendation (CR) of 2 March 2017](https://www.w3.org/TR/2017/CR-css-ui-3-20170302/).

-   Updated references to latest versions
-   Editorial Clarification about the resize property
-   Move (at risk) directional focus navigation properties from level 3 to level 4
-   Add informative link to HTML about special handling of <a href="#propdef-cursor" id="ref-for-propdef-cursor④" class="property">cursor</a> over image maps
-   Clarify (as a SHOULD) the implications of text-overflow on pointer events to capture implementor consensus ([corresponding test](https://github.com/web-platform-tests/wpt/commit/b749ca84fe5474adb4473c35a3da5788e5b6cfd7#diff-8667b2cb07cf6ee064b9f2a74e221e8f)).
-   Clarify that UAs may ignore the cursor property to reflect the UA’s UI state
-   Allow, but stop requiring support for SVG images without intrinsic sizes for cursors ([corresponding test update](https://github.com/web-platform-tests/wpt/commit/92770f655298aa72b0c0ee9238377d6b04d2e3e6)).
-   Align the spec with implementations, and make <a href="#propdef-cursor" id="ref-for-propdef-cursor⑤" class="css">cursor: auto</a> look like <a href="#valdef-cursor-text" id="ref-for-valdef-cursor-text②" class="css">text</a> over **selectable** text, and over editable elements ([corresponding tests](https://github.com/web-platform-tests/wpt/commit/34c61eff5eab4ebe9ff271e46658f73f18858c4f)).

<span class="content">Appendix C. Considerations for Security and Privacy</span><a href="#security-privacy-considerations" class="self-link"></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

This appendix is *informative*.

The W3C TAG is developing a [Self-Review Questionnaire: Security and Privacy](https://w3ctag.github.io/security-questionnaire/) for editors of specifications to informatively answer.

Per the [Questions to Consider](https://w3ctag.github.io/security-questionnaire/#questions)

1.  Does this specification deal with personally-identifiable information?

    No.

2.  Does this specification deal with high-value data?

    No.

3.  Does this specification introduce new state for an origin that persists across browsing sessions?

    No.

4.  Does this specification expose persistent, cross-origin state to the web?

    No.

5.  Does this specification expose any other data to an origin that it doesn’t currently have access to?

    No.

6.  Does this specification enable new script execution/loading mechanisms?

    Yes to loading, but not to execution. The <a href="#propdef-cursor" id="ref-for-propdef-cursor⑥" class="property">cursor</a> property accepts <a href="https://www.w3.org/TR/css3-images/#image-type" id="ref-for-image-type④" class="production css">&lt;image&gt;</a> values which may include URLs to be loaded. These may be SVG documents which may contain scripts, but this specification requires that scripts must not be run.

7.  Does this specification allow an origin access to a user’s location?

    No.

8.  Does this specification allow an origin access to sensors on a user’s device?

    No.

9.  Does this specification allow an origin access to aspects of a user’s local computing environment?

    No.

10. Does this specification allow an origin access to other devices?

    No.

11. Does this specification allow an origin some measure of control over a user agent’s native UI?

    Yes. The <a href="#propdef-cursor" id="ref-for-propdef-cursor⑦" class="property">cursor</a> and <a href="#propdef-caret-color" id="ref-for-propdef-caret-color①" class="property">caret-color</a> properties enable the page to change the display of the cursor and text insertion caret of the user agent’s native UI. In addition the <a href="#propdef-outline-style" id="ref-for-propdef-outline-style⑤" class="property">outline-style</a> property’s <span class="css">auto</span> value (and thus <a href="#propdef-outline" id="ref-for-propdef-outline②" class="property">outline</a> shorthand) enable the page to potentially display a native focused element outline presentation around any element.

12. Does this specification expose temporary identifiers to the web?

    No.

13. Does this specification distinguish between behavior in first-party and third-party contexts?

    No.

14. How should this specification work in the context of a user agent’s "incognito" mode?

    No differently.

15. Does this specification persist data to a user’s local device?

    No.

16. Does this specification have a "Security Considerations" and "Privacy Considerations" section?

    Yes.

17. Does this specification allow downgrading default security characteristics?

    No.

<span class="content">Appendix D. Default style sheet additions for HTML</span><a href="#default-style-sheet" class="self-link"></a>
------------------------------------------------------------------------------------------------------------------------------------

This appendix is *informative*.

Potential additions to the base style sheet to express HTML form controls, and a few dynamic presentation attributes:

    :enabled:focus {
     outline: 2px inset;
    }

    button,
    input[type=button],
    input[type=reset],
    input[type=submit],
    input[type=checkbox],
    input[type=radio],
    textarea,
    input,
    input[type=text],
    input[type=password],
    input[type=image]
    {
     display: inline-block;
    }

    input[type=button],
    input[type=reset],
    input[type=submit],
    input[type=checkbox],
    input[type=radio],
    input,
    input[type=text],
    input[type=password],
    input[type=image]
    {
     white-space: nowrap;
    }

    button
    {
    /* white space handling of BUTTON tags in particular */
     white-space:normal;
    }

    input[type=reset]:lang(en)
    {
    /* default content of HTML input type=reset button, per language */
     content: "Reset";
    }

    input[type=submit]:lang(en)
    {
    /* default content of HTML input type=submit button, per language */
     content: "Submit";
    }

    /* UAs should use language-specific Reset/Submit rules for others. */

    input[type=button],
    input[type=reset][value],
    input[type=submit][value]
    {
    /* text content/labels of HTML "input" buttons */
     content: attr(value);
    }

    textarea
    {
    /* white space handling of TEXTAREA tags in particular */
     white-space:pre-wrap;
     resize: both;
    }

    input[type=hidden]
    {
    /* appearance of the HTML hidden text field in particular */
     display: none !important;
    }

    input[type=image]
    {
     content: attr(src,url);
     border: none;
    }

    select[size]
    {
    /* HTML4/XHTML1 <select> w/ size more than 1 - appearance of list */
     display: inline-block;
     height: attr(size,em);
    }

    select,select[size=1]
    {
    /* HTML4/XHTML1 <select> without size, or size=1 - popup-menu */
     display: inline-block;
     height: 1em;
     overflow: hidden;
    }

    select[size]:active
    {
    /* active HTML <select> w/ size more than 1 - appearance of active list */
     display: inline-block;
    }

    optgroup,option
    {
     display: block;
     white-space: nowrap;
    }

    optgroup[label],option[label]
    {
     content: attr(label);
    }

    option[selected]::before
    {
     display: inline;
     content: check;
    }

    /* Though FRAME resizing is not directly addressed by this specification,
       the following rules may provide an approximation of reasonable behavior. */

    /*

    frame { resize:both }
    frame[noresize] { resize:none }

    */

<span class="content"> Conformance</span><a href="#conformance" class="self-link"></a>
--------------------------------------------------------------------------------------

### <span class="content"> Document conventions</span><a href="#document-conventions" class="self-link"></a>

Conformance requirements are expressed with a combination of descriptive assertions and RFC 2119 terminology. The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in the normative parts of this document are to be interpreted as described in RFC 2119. However, for readability, these words do not appear in all uppercase letters in this specification.

All of the text of this specification is normative except sections explicitly marked as non-normative, examples, and notes. [\[RFC2119\]](#biblio-rfc2119)

Examples in this specification are introduced with the words “for example” or are set apart from the normative text with `class="example"`, like this:

<a href="#example-52448c84" class="self-link"></a>

This is an example of an informative example.

Informative notes begin with the word “Note” and are set apart from the normative text with `class="note"`, like this:

Note, this is an informative note.

Advisements are normative sections styled to evoke special attention and are set apart from other normative text with `<strong class="advisement">`, like this: **UAs MUST provide an accessible alternative.**

### <span class="content"> Conformance classes</span><a href="#conform-classes" class="self-link"></a>

Conformance to this specification is defined for three conformance classes:

style sheet   
A [CSS style sheet](https://www.w3.org/TR/CSS2/conform.html#style-sheet).

renderer   
A [UA](https://www.w3.org/TR/CSS2/conform.html#user-agent) that interprets the semantics of a style sheet and renders documents that use them.

authoring tool   
A [UA](https://www.w3.org/TR/CSS2/conform.html#user-agent) that writes a style sheet.

A style sheet is conformant to this specification if all of its statements that use syntax defined in this module are valid according to the generic CSS grammar and the individual grammars of each feature defined in this module.

A renderer is conformant to this specification if, in addition to interpreting the style sheet as defined by the appropriate specifications, it supports all the features defined by this specification by parsing them correctly and rendering the document accordingly. However, the inability of a UA to correctly render a document due to limitations of the device does not make the UA non-conformant. (For example, a UA is not required to render color on a monochrome monitor.)

An authoring tool is conformant to this specification if it writes style sheets that are syntactically correct according to the generic CSS grammar and the individual grammars of each feature in this module, and meet all other conformance requirements of style sheets as described in this module.

### <span class="content"> Requirements for Responsible Implementation of CSS</span><a href="#conform-responsible" class="self-link"></a>

The following sections define several conformance requirements for implementing CSS responsibly, in a way that promotes interoperability in the present and future.

#### <span class="content"> Partial Implementations</span><a href="#conform-partial" class="self-link"></a>

So that authors can exploit the forward-compatible parsing rules to assign fallback values, **CSS renderers *must* treat as invalid (and [ignore as appropriate](https://www.w3.org/TR/CSS2/conform.html#ignore)) any at-rules, properties, property values, keywords, and other syntactic constructs for which they have no usable level of support**. In particular, user agents *must not* selectively ignore unsupported property values and honor supported values in a single multi-value property declaration: if any value is considered invalid (as unsupported values must be), CSS requires that the entire declaration be ignored.

#### <span class="content"> Implementations of Unstable and Proprietary Features</span><a href="#conform-future-proofing" class="self-link"></a>

To avoid clashes with future stable CSS features, the CSSWG recommends [following best practices](https://www.w3.org/TR/CSS/#future-proofing) for the implementation of [unstable](https://www.w3.org/TR/CSS/#unstable) features and [proprietary extensions](https://www.w3.org/TR/CSS/#proprietary-extension) to CSS.

#### <span class="content"> Implementations of CR-level Features</span><a href="#conform-testing" class="self-link"></a>

Once a specification reaches the Candidate Recommendation stage, implementers should release an [unprefixed](https://www.w3.org/TR/CSS/#vendor-prefix) implementation of any CR-level feature they can demonstrate to be correctly implemented according to spec, and should avoid exposing a prefixed variant of that feature.

To establish and maintain the interoperability of CSS across implementations, the CSS Working Group requests that non-experimental CSS renderers submit an implementation report (and, if necessary, the testcases used for that implementation report) to the W3C before releasing an unprefixed implementation of any CSS features. Testcases submitted to W3C are subject to review and correction by the CSS Working Group.

Further information on submitting testcases and implementation reports can be found from on the CSS Working Group’s website at <https://www.w3.org/Style/CSS/Test/>. Questions should be directed to the [public-css-testsuite@w3.org](https://lists.w3.org/Archives/Public/public-css-testsuite) mailing list.

<span class="content">Index</span><a href="#index" class="self-link"></a>
-------------------------------------------------------------------------

### <span class="content">Terms defined by this specification</span><a href="#index-defined-here" class="self-link"></a>

-   [alias](#valdef-cursor-alias), in §6.1.1
-   [all-scroll](#valdef-cursor-all-scroll), in §6.1.1
-   auto
    -   [value for cursor](#valdef-cursor-auto), in §6.1.1
    -   [value for caret-color](#valdef-caret-color-auto), in §6.2.1
-   [border-box](#valdef-box-sizing-border-box), in §3.1
-   [box-sizing](#propdef-box-sizing), in §3.1
-   [caret-color](#propdef-caret-color), in §6.2.1
-   [cell](#valdef-cursor-cell), in §6.1.1
-   [clip](#overflow-clip), in §5.2
-   [col-resize](#valdef-cursor-col-resize), in §6.1.1
-   [content-box](#valdef-box-sizing-content-box), in §3.1
-   [context-menu](#valdef-cursor-context-menu), in §6.1.1
-   [copy](#valdef-cursor-copy), in §6.1.1
-   [crosshair](#valdef-cursor-crosshair), in §6.1.1
-   [cursor](#propdef-cursor), in §6.1.1
-   [default](#valdef-cursor-default), in §6.1.1
-   [ellipsis](#overflow-ellipsis), in §5.2
-   [e-resize](#valdef-cursor-e-resize), in §6.1.1
-   [ew-resize](#valdef-cursor-ew-resize), in §6.1.1
-   [grab](#valdef-cursor-grab), in §6.1.1
-   [grabbing](#valdef-cursor-grabbing), in §6.1.1
-   [help](#valdef-cursor-help), in §6.1.1
-   [invert](#valdef-outline-color-invert), in §4.4
-   [max inner height](#max-inner-height), in §3.1
-   [max inner width](#max-inner-width), in §3.1
-   [min inner height](#min-inner-height), in §3.1
-   [min inner width](#min-inner-width), in §3.1
-   [move](#valdef-cursor-move), in §6.1.1
-   [ne-resize](#valdef-cursor-ne-resize), in §6.1.1
-   [nesw-resize](#valdef-cursor-nesw-resize), in §6.1.1
-   [no-drop](#valdef-cursor-no-drop), in §6.1.1
-   [none](#valdef-cursor-none), in §6.1.1
-   [not-allowed](#valdef-cursor-not-allowed), in §6.1.1
-   [n-resize](#valdef-cursor-n-resize), in §6.1.1
-   [ns-resize](#valdef-cursor-ns-resize), in §6.1.1
-   [nw-resize](#valdef-cursor-nw-resize), in §6.1.1
-   [nwse-resize](#valdef-cursor-nwse-resize), in §6.1.1
-   [outline](#propdef-outline), in §4.1
-   [outline-color](#propdef-outline-color), in §4.4
-   [outline-offset](#propdef-outline-offset), in §4.5
-   [outline-style](#propdef-outline-style), in §4.3
-   [outline-width](#propdef-outline-width), in §4.2
-   [pointer](#valdef-cursor-pointer), in §6.1.1
-   [progress](#valdef-cursor-progress), in §6.1.1
-   [resize](#propdef-resize), in §5.1
-   [row-resize](#valdef-cursor-row-resize), in §6.1.1
-   [se-resize](#valdef-cursor-se-resize), in §6.1.1
-   [s-resize](#valdef-cursor-s-resize), in §6.1.1
-   [sw-resize](#valdef-cursor-sw-resize), in §6.1.1
-   [text](#valdef-cursor-text), in §6.1.1
-   [text-overflow](#propdef-text-overflow), in §5.2
-   [vertical-text](#valdef-cursor-vertical-text), in §6.1.1
-   [wait](#valdef-cursor-wait), in §6.1.1
-   [w-resize](#valdef-cursor-w-resize), in §6.1.1
-   [zoom-in](#valdef-cursor-zoom-in), in §6.1.1
-   [zoom-out](#valdef-cursor-zoom-out), in §6.1.1

### <span class="content">Terms defined by reference</span><a href="#index-defined-elsewhere" class="self-link"></a>

-   \[css-backgrounds-3\] defines the following terms:
    -   [&lt;line-width&gt;](https://www.w3.org/TR/css3-background/#typedef-line-width)
    -   [border-radius](https://www.w3.org/TR/css3-background/#propdef-border-radius)
    -   [none](https://www.w3.org/TR/css3-background/#valdef-line-style-none)
-   \[css-color-3\] defines the following terms:
    -   [&lt;color&gt;](https://www.w3.org/TR/css3-color/#valuea-def-color)
    -   [color](https://www.w3.org/TR/css3-color/#color0)
-   \[css-values-3\] defines the following terms:
    -   [\*](https://www.w3.org/TR/css3-values/#mult-zero-plus)
    -   [,](https://www.w3.org/TR/css3-values/#comb-comma)
    -   [&lt;length&gt;](https://www.w3.org/TR/css3-values/#length-value)
    -   [&lt;number&gt;](https://www.w3.org/TR/css3-values/#number-value)
    -   [&lt;url&gt;](https://www.w3.org/TR/css3-values/#url-value)
    -   [?](https://www.w3.org/TR/css3-values/#mult-opt)
    -   [|](https://www.w3.org/TR/css3-values/#comb-one)
    -   [||](https://www.w3.org/TR/css3-values/#comb-any)
-   \[css-writing-modes-3\] defines the following terms:
    -   [direction](https://www.w3.org/TR/css-writing-modes-3/#propdef-direction)
    -   [end](https://www.w3.org/TR/css-writing-modes-3/#end)
    -   [left](https://www.w3.org/TR/css-writing-modes-3/#physical-left)
-   \[CSS2\] defines the following terms:
    -   [auto](https://www.w3.org/TR/CSS2/visudet.html#the-width-property)
    -   [background-image](https://www.w3.org/TR/CSS21/colors.html#propdef-background-image)
    -   [border edge](https://www.w3.org/TR/CSS2/box.html#border-edge)
    -   [border-bottom-width](https://www.w3.org/TR/CSS21/box.html#propdef-border-bottom-width)
    -   [border-left-width](https://www.w3.org/TR/CSS21/box.html#propdef-border-left-width)
    -   [border-right-width](https://www.w3.org/TR/CSS21/box.html#propdef-border-right-width)
    -   [border-style](https://www.w3.org/TR/CSS21/box.html#propdef-border-style)
    -   [border-top-width](https://www.w3.org/TR/CSS21/box.html#propdef-border-top-width)
    -   [border-width](https://www.w3.org/TR/CSS21/box.html#propdef-border-width)
    -   [bottom](https://www.w3.org/TR/CSS2/visuren.html#position-props)
    -   [content height](https://www.w3.org/TR/CSS21/box.html#content-height)
    -   [content width](https://www.w3.org/TR/CSS21/box.html#content-width)
    -   [display](https://www.w3.org/TR/CSS21/visuren.html#propdef-display)
    -   [height](https://www.w3.org/TR/CSS21/visudet.html#propdef-height)
    -   [left](https://www.w3.org/TR/CSS2/visuren.html#position-props)
    -   [margin-left](https://www.w3.org/TR/CSS21/box.html#propdef-margin-left)
    -   [margin-top](https://www.w3.org/TR/CSS21/box.html#propdef-margin-top)
    -   [max-height](https://www.w3.org/TR/CSS21/visudet.html#propdef-max-height)
    -   [max-width](https://www.w3.org/TR/CSS21/visudet.html#propdef-max-width)
    -   [min-height](https://www.w3.org/TR/CSS21/visudet.html#propdef-min-height)
    -   [min-width](https://www.w3.org/TR/CSS21/visudet.html#propdef-min-width)
    -   [overflow](https://www.w3.org/TR/CSS2/visufx.html#propdef-overflow)
    -   [padding-bottom](https://www.w3.org/TR/CSS21/box.html#propdef-padding-bottom)
    -   [padding-left](https://www.w3.org/TR/CSS21/box.html#propdef-padding-left)
    -   [padding-right](https://www.w3.org/TR/CSS21/box.html#propdef-padding-right)
    -   [padding-top](https://www.w3.org/TR/CSS21/box.html#propdef-padding-top)
    -   [right](https://www.w3.org/TR/CSS2/visuren.html#position-props)
    -   [top](https://www.w3.org/TR/CSS2/visuren.html#position-props)
    -   [visibility](https://www.w3.org/TR/CSS21/visufx.html#propdef-visibility)
    -   [visible](https://www.w3.org/TR/CSS2/visufx.html#propdef-overflow)
    -   [width](https://www.w3.org/TR/CSS21/visudet.html#propdef-width)
-   \[css3-images\] defines the following terms:
    -   [&lt;image&gt;](https://www.w3.org/TR/css3-images/#image-type)
    -   [concrete object size](https://drafts.csswg.org/css-images-3/#concrete-object-size)
    -   [default object size](https://drafts.csswg.org/css-images-3/#default-object-size)
    -   [default sizing algorithm](https://drafts.csswg.org/css-images-3/#default-sizing-algorithm)
-   \[HTML\] defines the following terms:
    -   [canvas](https://html.spec.whatwg.org/multipage/canvas.html#canvas)
    -   [iframe](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)
    -   [img](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)
    -   [object](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element)
    -   [picture](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)
    -   [video](https://html.spec.whatwg.org/multipage/media.html#video)
-   \[SVG2\] defines the following terms:
    -   [svg](https://www.w3.org/TR/svg2/struct.html#elementdef-svg)

<span class="content">References</span><a href="#references" class="self-link"></a>
-----------------------------------------------------------------------------------

### <span class="content">Normative References</span><a href="#normative" class="self-link"></a>

\[CSS-BACKGROUNDS-3\]   
Bert Bos; Elika Etemad; Brad Kemper. [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/css-backgrounds-3/). 17 October 2017. CR. URL: <https://www.w3.org/TR/css-backgrounds-3/>

\[CSS-COLOR-3\]   
Tantek Çelik; Chris Lilley; David Baron. [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/). 15 March 2018. PR. URL: <https://www.w3.org/TR/css-color-3/>

\[CSS-VALUES-3\]   
Tab Atkins Jr.; Elika Etemad. [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/). 29 September 2016. CR. URL: <https://www.w3.org/TR/css-values-3/>

\[CSS-WRITING-MODES-3\]   
Elika Etemad; Koji Ishii. [CSS Writing Modes Level 3](https://www.w3.org/TR/css-writing-modes-3/). 24 May 2018. CR. URL: <https://www.w3.org/TR/css-writing-modes-3/>

\[CSS2\]   
Bert Bos; et al. [Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification](https://www.w3.org/TR/CSS2/). 7 June 2011. REC. URL: <https://www.w3.org/TR/CSS2/>

\[CSS3-IMAGES\]   
Elika Etemad; Tab Atkins Jr.. [CSS Image Values and Replaced Content Module Level 3](https://www.w3.org/TR/css3-images/). 17 April 2012. CR. URL: <https://www.w3.org/TR/css3-images/>

\[HTML\]   
Anne van Kesteren; et al. [HTML Standard](https://html.spec.whatwg.org/multipage/). Living Standard. URL: <https://html.spec.whatwg.org/multipage/>

\[PNG\]   
Tom Lane. [Portable Network Graphics (PNG) Specification (Second Edition)](https://www.w3.org/TR/PNG/). 10 November 2003. REC. URL: <https://www.w3.org/TR/PNG/>

\[RFC2119\]   
S. Bradner. [Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

\[SVG11\]   
Erik Dahlström; et al. [Scalable Vector Graphics (SVG) 1.1 (Second Edition)](https://www.w3.org/TR/SVG11/). 16 August 2011. REC. URL: <https://www.w3.org/TR/SVG11/>

\[SVG2\]   
Nikos Andronikos; et al. [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/SVG2/). 15 September 2016. CR. URL: <https://www.w3.org/TR/SVG2/>

\[UAX29\]   
Mark Davis; Laurențiu Iancu. [Unicode Text Segmentation](https://www.unicode.org/reports/tr29/tr29-31.html). 13 June 2017. Unicode Standard Annex \#29. URL: <https://www.unicode.org/reports/tr29/tr29-31.html>

### <span class="content">Informative References</span><a href="#informative" class="self-link"></a>

\[CSS-CASCADE-4\]   
Elika Etemad; Tab Atkins Jr.. [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/css-cascade-4/). 14 January 2016. CR. URL: <https://www.w3.org/TR/css-cascade-4/>

\[CSS-PSEUDO-4\]   
Daniel Glazman; Elika Etemad; Alan Stearns. [CSS Pseudo-Elements Module Level 4](https://www.w3.org/TR/css-pseudo-4/). 7 June 2016. WD. URL: <https://www.w3.org/TR/css-pseudo-4/>

\[CSS-TRANSITIONS-1\]   
David Baron; Dean Jackson; Brian Birtles. [CSS Transitions](https://www.w3.org/TR/css-transitions-1/). 30 November 2017. WD. URL: <https://www.w3.org/TR/css-transitions-1/>

\[CSS1\]   
Håkon Wium Lie; Bert Bos. [Cascading Style Sheets (CSS1) Level 1 Specification](https://www.w3.org/TR/REC-CSS1/). 11 April 2008. REC. URL: <https://www.w3.org/TR/REC-CSS1/>

\[CSS4-IMAGES\]   
Tab Atkins Jr.; Elika Etemad; Lea Verou. [CSS Image Values and Replaced Content Module Level 4](https://www.w3.org/TR/css-images-4/). 13 April 2017. WD. URL: <https://www.w3.org/TR/css-images-4/>

<span class="content">Property Index</span><a href="#property-index" class="self-link"></a>
-------------------------------------------------------------------------------------------

<table><thead><tr class="header"><th>Name</th><th>Value</th><th>Initial</th><th>Applies to</th><th>Inh.</th><th>%ages</th><th>Media</th><th>Anim­ation type</th><th>Canonical order</th><th>Com­puted value</th></tr></thead><tbody><tr class="odd"><td><a href="#propdef-box-sizing" id="ref-for-propdef-box-sizing⑨" class="css">box-sizing</a></td><td>content-box | border-box</td><td>content-box</td><td>all elements that accept width or height</td><td>no</td><td>N/A</td><td>visual</td><td>discrete</td><td>per grammar</td><td>specified value</td></tr><tr class="even"><td><a href="#propdef-caret-color" id="ref-for-propdef-caret-color②" class="css">caret-color</a></td><td>auto | &lt;color&gt;</td><td>auto</td><td>all elements</td><td>yes</td><td>N/A</td><td>interactive</td><td>color</td><td>per grammar</td><td>The computed value for auto is auto; the computed value of currentColor is currentColor (See ); see the color property for other &lt;color&gt; values.</td></tr><tr class="odd"><td><a href="#propdef-cursor" id="ref-for-propdef-cursor⑧" class="css">cursor</a></td><td>[ [&lt;url&gt; [&lt;x&gt; &lt;y&gt;]?,]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | grab | grabbing | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out ] ]</td><td>auto</td><td>all elements</td><td>yes</td><td>N/A</td><td>visual, interactive</td><td>discrete</td><td>per grammar</td><td>as specified, except with any relative URLs converted to absolute</td></tr><tr class="even"><td><a href="#propdef-outline" id="ref-for-propdef-outline③" class="css">outline</a></td><td>[ &lt;outline-color&gt; || &lt;outline-style&gt; || &lt;outline-width&gt; ]</td><td>see individual properties</td><td>all elements</td><td>no</td><td>N/A</td><td>visual</td><td>see individual properties</td><td>per grammar</td><td>see individual properties</td></tr><tr class="odd"><td><a href="#propdef-outline-color" id="ref-for-propdef-outline-color⑥" class="css">outline-color</a></td><td>&lt;color&gt; | invert</td><td>invert</td><td>all elements</td><td>no</td><td>N/A</td><td>visual</td><td>color</td><td>per grammar</td><td>The computed value for invert is invert; the computed value of currentColor is currentColor (See ); see the color property for other &lt;color&gt; values.</td></tr><tr class="even"><td><a href="#propdef-outline-offset" id="ref-for-propdef-outline-offset②" class="css">outline-offset</a></td><td>&lt;length&gt;</td><td>0</td><td>all elements</td><td>no</td><td>N/A</td><td>visual</td><td>length</td><td>per grammar</td><td>&lt;length&gt; value in absolute units (px or physical).</td></tr><tr class="odd"><td><a href="#propdef-outline-style" id="ref-for-propdef-outline-style⑥" class="css">outline-style</a></td><td>auto | &lt;border-style&gt;</td><td>none</td><td>all elements</td><td>no</td><td>N/A</td><td>visual</td><td>discrete</td><td>per grammar</td><td>as specified</td></tr><tr class="even"><td><a href="#propdef-outline-width" id="ref-for-propdef-outline-width⑤" class="css">outline-width</a></td><td>&lt;line-width&gt;</td><td>medium</td><td>all elements</td><td>no</td><td>N/A</td><td>visual</td><td>length</td><td>per grammar</td><td>absolute length; 0 if the outline style is none.</td></tr><tr class="odd"><td><a href="#propdef-resize" id="ref-for-propdef-resize⑧" class="css">resize</a></td><td>none | both | horizontal | vertical</td><td>none</td><td>elements with overflow other than visible, and optionally replaced elements such as images, videos, and iframes</td><td>no</td><td>N/A</td><td>visual</td><td>discrete</td><td>per grammar</td><td>as specified</td></tr><tr class="even"><td><a href="#propdef-text-overflow" id="ref-for-propdef-text-overflow④" class="css">text-overflow</a></td><td>clip | ellipsis</td><td>clip</td><td>block containers</td><td>no</td><td>N/A</td><td>visual</td><td>discrete</td><td>per grammar</td><td>as specified</td></tr></tbody></table>

**[\#propdef-box-sizing](#propdef-box-sizing)Referenced in:**

-   [3.1. Changing the Box Model: the box-sizing property](#ref-for-propdef-box-sizing) [(2)](#ref-for-propdef-box-sizing①) [(3)](#ref-for-propdef-box-sizing②) [(4)](#ref-for-propdef-box-sizing③) [(5)](#ref-for-propdef-box-sizing④) [(6)](#ref-for-propdef-box-sizing⑤) [(7)](#ref-for-propdef-box-sizing⑥)
-   [Using box-sizing to evenly share space](#ref-for-propdef-box-sizing⑦)
-   [Appendix A. Acknowledgments](#ref-for-propdef-box-sizing⑧)

**[\#min-inner-width](#min-inner-width)Referenced in:**

-   [3.1. Changing the Box Model: the box-sizing property](#ref-for-min-inner-width)

**[\#max-inner-width](#max-inner-width)Referenced in:**

-   [3.1. Changing the Box Model: the box-sizing property](#ref-for-max-inner-width)

**[\#min-inner-height](#min-inner-height)Referenced in:**

-   [3.1. Changing the Box Model: the box-sizing property](#ref-for-min-inner-height) [(2)](#ref-for-min-inner-height①)

**[\#max-inner-height](#max-inner-height)Referenced in:**

-   [3.1. Changing the Box Model: the box-sizing property](#ref-for-max-inner-height) [(2)](#ref-for-max-inner-height①)

**[\#propdef-outline](#propdef-outline)Referenced in:**

-   [4.1. Outlines Shorthand: the outline property](#ref-for-propdef-outline)
-   [4.4. Outline Colors: the outline-color property](#ref-for-propdef-outline①)
-   [Appendix C. Considerations for Security and Privacy](#ref-for-propdef-outline②)

**[\#propdef-outline-width](#propdef-outline-width)Referenced in:**

-   [4.1. Outlines Shorthand: the outline property](#ref-for-propdef-outline-width)
-   [4.2. Outline Thickness: the outline-width property](#ref-for-propdef-outline-width①)
-   [4.4. Outline Colors: the outline-color property](#ref-for-propdef-outline-width②) [(2)](#ref-for-propdef-outline-width③)
-   [4.5. Offsetting the Outline: the outline-offset property](#ref-for-propdef-outline-width④)

**[\#propdef-outline-style](#propdef-outline-style)Referenced in:**

-   [4.1. Outlines Shorthand: the outline property](#ref-for-propdef-outline-style)
-   [4.3. Outline Patterns: the outline-style property](#ref-for-propdef-outline-style①)
-   [4.4. Outline Colors: the outline-color property](#ref-for-propdef-outline-style②) [(2)](#ref-for-propdef-outline-style③) [(3)](#ref-for-propdef-outline-style④)
-   [Appendix C. Considerations for Security and Privacy](#ref-for-propdef-outline-style⑤)

**[\#propdef-outline-color](#propdef-outline-color)Referenced in:**

-   [4.1. Outlines Shorthand: the outline property](#ref-for-propdef-outline-color)
-   [4.4. Outline Colors: the outline-color property](#ref-for-propdef-outline-color①) [(2)](#ref-for-propdef-outline-color②) [(3)](#ref-for-propdef-outline-color③) [(4)](#ref-for-propdef-outline-color④) [(5)](#ref-for-propdef-outline-color⑤)

**[\#valdef-outline-color-invert](#valdef-outline-color-invert)Referenced in:**

-   [4.4. Outline Colors: the outline-color property](#ref-for-valdef-outline-color-invert) [(2)](#ref-for-valdef-outline-color-invert①) [(3)](#ref-for-valdef-outline-color-invert②) [(4)](#ref-for-valdef-outline-color-invert③) [(5)](#ref-for-valdef-outline-color-invert④)

**[\#propdef-outline-offset](#propdef-outline-offset)Referenced in:**

-   [4.5. Offsetting the Outline: the outline-offset property](#ref-for-propdef-outline-offset) [(2)](#ref-for-propdef-outline-offset①)

**[\#propdef-resize](#propdef-resize)Referenced in:**

-   [5.1. Resizing Boxes: the resize property](#ref-for-propdef-resize) [(2)](#ref-for-propdef-resize①) [(3)](#ref-for-propdef-resize②) [(4)](#ref-for-propdef-resize③) [(5)](#ref-for-propdef-resize④) [(6)](#ref-for-propdef-resize⑤) [(7)](#ref-for-propdef-resize⑥) [(8)](#ref-for-propdef-resize⑦)

**[\#propdef-text-overflow](#propdef-text-overflow)Referenced in:**

-   [5.2. Overflow Ellipsis: the text-overflow property](#ref-for-propdef-text-overflow)
-   [ellipsing details](#ref-for-propdef-text-overflow①)
-   [user interaction with ellipsis](#ref-for-propdef-text-overflow②) [(2)](#ref-for-propdef-text-overflow③)

**[\#propdef-cursor](#propdef-cursor)Referenced in:**

-   [6.1.1. Styling the Cursor: the cursor property](#ref-for-propdef-cursor) [(2)](#ref-for-propdef-cursor①)
-   [6.2.1. Coloring the Insertion Caret: the caret-color property](#ref-for-propdef-cursor②) [(2)](#ref-for-propdef-cursor③)
-   [Appendix B. Changes](#ref-for-propdef-cursor④) [(2)](#ref-for-propdef-cursor⑤)
-   [Appendix C. Considerations for Security and Privacy](#ref-for-propdef-cursor⑥) [(2)](#ref-for-propdef-cursor⑦)

**[\#valdef-cursor-auto](#valdef-cursor-auto)Referenced in:**

-   [6.2.1. Coloring the Insertion Caret: the caret-color property](#ref-for-valdef-cursor-auto)

**[\#valdef-cursor-default](#valdef-cursor-default)Referenced in:**

-   [6.1.1. Styling the Cursor: the cursor property](#ref-for-valdef-cursor-default)

**[\#valdef-cursor-pointer](#valdef-cursor-pointer)Referenced in:**

-   [6.1.1. Styling the Cursor: the cursor property](#ref-for-valdef-cursor-pointer)

**[\#valdef-cursor-wait](#valdef-cursor-wait)Referenced in:**

-   [6.1.1. Styling the Cursor: the cursor property](#ref-for-valdef-cursor-wait)

**[\#valdef-cursor-text](#valdef-cursor-text)Referenced in:**

-   [6.1.1. Styling the Cursor: the cursor property](#ref-for-valdef-cursor-text)
-   [6.2.1. Coloring the Insertion Caret: the caret-color property](#ref-for-valdef-cursor-text①)
-   [Appendix B. Changes](#ref-for-valdef-cursor-text②)

**[\#valdef-cursor-vertical-text](#valdef-cursor-vertical-text)Referenced in:**

-   [6.1.1. Styling the Cursor: the cursor property](#ref-for-valdef-cursor-vertical-text)
-   [6.2.1. Coloring the Insertion Caret: the caret-color property](#ref-for-valdef-cursor-vertical-text①)

**[\#valdef-cursor-se-resize](#valdef-cursor-se-resize)Referenced in:**

-   [6.1.1. Styling the Cursor: the cursor property](#ref-for-valdef-cursor-se-resize)

**[\#valdef-cursor-zoom-in](#valdef-cursor-zoom-in)Referenced in:**

-   [6.1.1. Styling the Cursor: the cursor property](#ref-for-valdef-cursor-zoom-in)

**[\#valdef-cursor-zoom-out](#valdef-cursor-zoom-out)Referenced in:**

-   [6.1.1. Styling the Cursor: the cursor property](#ref-for-valdef-cursor-zoom-out)

**[\#propdef-caret-color](#propdef-caret-color)Referenced in:**

-   [6.2.1. Coloring the Insertion Caret: the caret-color property](#ref-for-propdef-caret-color)
-   [Appendix C. Considerations for Security and Privacy](#ref-for-propdef-caret-color①)

**[\#valdef-caret-color-auto](#valdef-caret-color-auto)Referenced in:**

-   [6.2.1. Coloring the Insertion Caret: the caret-color property](#ref-for-valdef-caret-color-auto) [(2)](#ref-for-valdef-caret-color-auto①)

[↑](#toc)
