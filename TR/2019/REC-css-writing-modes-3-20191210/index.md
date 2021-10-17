<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

CSS Writing Modes Level 3
=========================

<span class="content">W3C Recommendation, 10 December 2019</span>
-----------------------------------------------------------------

This version:   
<a href="https://www.w3.org/TR/2019/REC-css-writing-modes-3-20191210/" class="u-url">https://www.w3.org/TR/2019/REC-css-writing-modes-3-20191210/</a>

Latest published version:   
<https://www.w3.org/TR/css-writing-modes-3/>

Editor's Draft:   
<https://drafts.csswg.org/css-writing-modes-3/>

Previous Versions:   
<https://www.w3.org/TR/2019/PR-css-writing-modes-3-20191024/>

<https://www.w3.org/TR/2019/CR-css-writing-modes-3-20190903/>

<https://www.w3.org/TR/2019/CR-css-writing-modes-3-20190730/>

<https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/>

<https://www.w3.org/TR/2017/CR-css-writing-modes-3-20171207/>

<https://www.w3.org/TR/2015/CR-css-writing-modes-3-20151215/>

Test Suite:   
<http://test.csswg.org/suites/css-writing-modes-3_dev/nightly-unstable/>

Issue Tracking:   
[Tracker](https://www.w3.org/Style/CSS/Tracker/products/30)

[GitHub Issues](https://github.com/w3c/csswg-drafts/labels/css-writing-modes-3)

Editors:   
<a href="http://fantasai.inkedblade.net/contact" class="p-name fn u-url url">Elika J. Etemad / fantasai</a> (<span class="p-org org">Invited Expert</span>)

<a href="mailto:kojiishi@gmail.com" class="p-name fn u-email email">Koji Ishii</a> (<span class="p-org org">Google</span>)

Former Editors:   
<a href="mailto:murakami@antenna.co.jp" class="p-name fn u-email email">Shinyu Murakami</a> (<span class="p-org org">Antenna House</span>)

<a href="mailto:paulnel@microsoft.com" class="p-name fn u-email email">Paul Nelson</a> (<span class="p-org org">Microsoft</span>)

<a href="mailto:michelsu@microsoft.com" class="p-name fn u-email email">Michel Suignard</a> (<span class="p-org org">Microsoft</span>)

Suggest an Edit for this Spec:   
[GitHub Editor](https://github.com/w3c/csswg-drafts/blob/master/css-writing-modes-3/Overview.bs)

Please check the [**errata**](https://www.w3.org/Style/2019/REC-css-writing-modes-3-20191210-errata.html) for any errors or issues reported since publication.

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2019 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [permissive document license](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document) rules apply.

------------------------------------------------------------------------

<span class="content">Abstract</span>
-------------------------------------

CSS Writing Modes Level 3 defines CSS support for various writing modes and their combinations, including left-to-right and right-to-left text ordering as well as horizontal and vertical orientations.

[CSS](https://www.w3.org/TR/CSS/) is a language for describing the rendering of structured documents (such as HTML and XML) on screen, on paper, etc.

<span class="content">Status of this document</span>
----------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This document was published by the [CSS Working Group](https://www.w3.org/Style/CSS/) as a Recommendation.

[GitHub Issues](https://github.com/w3c/csswg-drafts/issues) are preferred for discussion of this specification. When filing an issue, please put the text “css-writing-modes” in the title, preferably like this: “\[css-writing-modes\] *…summary of comment…*”. All issues and comments are [archived](https://lists.w3.org/Archives/Public/public-css-archive/), and there is also a [historical archive](https://lists.w3.org/Archives/Public/www-style/).

A [Disposition of Comments](https://drafts.csswg.org/css-writing-modes-3/issues-cr-2019) and an [Implementation Report](https://drafts.csswg.org/css-writing-modes-3/implementation-report-2019-08) are available.

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/32061/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2019/Process-20190301/" id="w3c_process_revision">1 March 2019 W3C Process Document</a>.

Table of Contents
-----------------

1.  [<span class="secno">1</span> <span class="content"> Introduction to Writing Modes</span>](#text-flow)
    1.  [<span class="secno">1.1</span> <span class="content"> Module Interactions</span>](#placement)
    2.  [<span class="secno">1.2</span> <span class="content"> Value Types and Terminology</span>](#values)
2.  [<span class="secno">2</span> <span class="content"> Inline Direction and Bidirectionality</span>](#text-direction)
    1.  [<span class="secno">2.1</span> <span class="content"> Specifying Directionality: the <span class="property">direction</span> property</span>](#direction)
    2.  [<span class="secno">2.2</span> <span class="content"> Embeddings and Overrides: the <span class="property">unicode-bidi</span> property</span>](#unicode-bidi)
    3.  [<span class="secno">2.3</span> <span class="content"> Example of Bidirectional Text</span>](#bidi-example)
    4.  [<span class="secno">2.4</span> <span class="content"> Applying the Bidirectional Reordering Algorithm</span>](#bidi-algo)
        1.  [<span class="secno">2.4.1</span> <span class="content"> Bidi Paragraph Embedding Levels</span>](#bidi-para-direction)
        2.  [<span class="secno">2.4.2</span> <span class="content"> CSS–Unicode Bidi Control Translation, Text Reordering</span>](#bidi-control-codes)
        3.  [<span class="secno">2.4.3</span> <span class="content"> Bidi Treatment of Atomic Inlines</span>](#bidi-atomic-inlines)
        4.  [<span class="secno">2.4.4</span> <span class="content"> Paragraph Breaks Within Embeddings and Isolates</span>](#bidi-embedding-breaks)
        5.  [<span class="secno">2.4.5</span> <span class="content"> Reordering-induced Box Fragmentation</span>](#bidi-box-model)
3.  [<span class="secno">3</span> <span class="content"> Vertical Writing Modes</span>](#vertical-modes)
    1.  [<span class="secno">3.1</span> <span class="content"> Introduction to Vertical Writing</span>](#vertical-intro)
    2.  [<span class="secno">3.2</span> <span class="content"> Block Flow Direction: the <span class="property">writing-mode</span> property</span>](#block-flow)
        1.  [<span class="secno">3.2.1</span> <span class="content"> Obsolete SVG1.1 <span class="property">writing-mode</span> Values</span>](#svg-writing-mode)
4.  [<span class="secno">4</span> <span class="content"> Inline-level Alignment</span>](#inline-alignment)
    1.  [<span class="secno">4.1</span> <span class="content"> Introduction to Baselines</span>](#intro-baselines)
    2.  [<span class="secno">4.2</span> <span class="content"> Text Baselines</span>](#text-baselines)
    3.  [<span class="secno">4.3</span> <span class="content"> Atomic Inline Baselines</span>](#replaced-baselines)
    4.  [<span class="secno">4.4</span> <span class="content"> Baseline Alignment</span>](#baseline-alignment)
5.  [<span class="secno">5</span> <span class="content"> Introduction to Vertical Text Layout</span>](#intro-text-layout)
    1.  [<span class="secno">5.1</span> <span class="content"> Orienting Text: the <span class="property">text-orientation</span> property</span>](#text-orientation)
        1.  [<span class="secno">5.1.1</span> <span class="content"> Vertical Typesetting and Font Features</span>](#vertical-font-features)
        2.  [<span class="secno">5.1.2</span> <span class="content"> Mixed Vertical Orientations</span>](#vertical-orientations)
        3.  [<span class="secno">5.1.3</span> <span class="content"> Obsolete: the SVG1.1 <span class="property">glyph-orientation-vertical</span> property</span>](#glyph-orientation)
6.  [<span class="secno">6</span> <span class="content"> Abstract Box Terminology</span>](#abstract-box)
    1.  [<span class="secno">6.1</span> <span class="content"> Abstract Dimensions</span>](#abstract-axes)
    2.  [<span class="secno">6.2</span> <span class="content"> Flow-relative Directions</span>](#logical-directions)
    3.  [<span class="secno">6.3</span> <span class="content"> Line-relative Directions</span>](#line-directions)
    4.  [<span class="secno">6.4</span> <span class="content"> Abstract-to-Physical Mappings</span>](#logical-to-physical)
7.  [<span class="secno">7</span> <span class="content"> Abstract Box Layout</span>](#abstract-layout)
    1.  [<span class="secno">7.1</span> <span class="content"> Principles of Layout in Vertical Writing Modes</span>](#vertical-layout)
    2.  [<span class="secno">7.2</span> <span class="content"> Dimensional Mapping</span>](#dimension-mapping)
    3.  [<span class="secno">7.3</span> <span class="content"> Orthogonal Flows</span>](#orthogonal-flows)
        1.  [<span class="secno">7.3.1</span> <span class="content"> Available Space of Orthogonal Flows</span>](#orthogonal-auto)
        2.  [<span class="secno">7.3.2</span> <span class="content"> Auto-sizing Orthogonal Flow Roots</span>](#orthogonal-layout)
        3.  [<span class="secno">7.3.3</span> <span class="content"> Fragmenting Orthogonal Flows</span>](#orthogonal-pagination)
    4.  [<span class="secno">7.4</span> <span class="content"> Flow-Relative Mappings</span>](#logical-direction-layout)
    5.  [<span class="secno">7.5</span> <span class="content"> Line-Relative Mappings</span>](#line-mappings)
    6.  [<span class="secno">7.6</span> <span class="content"> Purely Physical Mappings</span>](#physical-only)
8.  [<span class="secno">8</span> <span class="content"> The Principal Writing Mode</span>](#principal-flow)
    1.  [<span class="secno">8.1</span> <span class="content"> Propagation to the Initial Containing Block</span>](#icb)
    2.  [<span class="secno">8.2</span> <span class="content"> Page Flow: the page progression direction</span>](#page-direction)
9.  [<span class="secno">9</span> <span class="content"> Glyph Composition</span>](#text-combine)
    1.  [<span class="secno">9.1</span> <span class="content"> Horizontal-in-Vertical Composition: the <span class="property">text-combine-upright</span> property</span>](#text-combine-upright)
        1.  [<span class="secno">9.1.1</span> <span class="content"> Text Run Rules</span>](#text-combine-runs)
        2.  [<span class="secno">9.1.2</span> <span class="content"> Layout Rules</span>](#text-combine-layout)
        3.  [<span class="secno">9.1.3</span> <span class="content"> Compression Rules</span>](#text-combine-compression)
            1.  [<span class="secno">9.1.3.1</span> <span class="content"> Full-width Characters</span>](#text-combine-fullwidth)
10. [<span class="secno">10</span> <span class="content">Privacy and Security Considerations</span>](#priv-sec)
11. [<span class="secno"></span> <span class="content">Changes</span>](#changes)
    1.  [<span class="secno"></span> <span class="content"> Changes since the September 2019 CSS Writing Modes Module Level 3 Candidate Recommendation</span>](#changes-20190903)
    2.  [<span class="secno"></span> <span class="content"> Changes since the July 2019 CSS Writing Modes Module Level 3 Candidate Recommendation</span>](#changes-20190730)
    3.  [<span class="secno"></span> <span class="content"> Changes since the May 2018 CSS Writing Modes Module Level 3 Candidate Recommendation</span>](#changes-201805)
    4.  [<span class="secno"></span> <span class="content"> Changes since the December 2017 CSS Writing Modes Module Level 3 Candidate Recommendation</span>](#changes-201712)
    5.  [<span class="secno"></span> <span class="content"> Changes since the December 2015 CSS Writing Modes Module Level 3 Candidate Recommendation</span>](#changes-201512)
    6.  [<span class="secno"></span> <span class="content"> Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation</span>](#changes-201311)
12. [<span class="secno"></span> <span class="content"> Acknowledgements</span>](#acknowledgements)
13. [<span class="secno"></span> <span class="content">Appendix A: Vertical Scripts in Unicode</span>](#script-orientations)
14. [<span class="secno"></span> <span class="content"> Conformance</span>](#conformance)
    1.  [<span class="secno"></span> <span class="content"> Document conventions</span>](#document-conventions)
    2.  [<span class="secno"></span> <span class="content"> Conformance classes</span>](#conform-classes)
    3.  [<span class="secno"></span> <span class="content"> Requirements for Responsible Implementation of CSS</span>](#conform-responsible)
        1.  [<span class="secno"></span> <span class="content"> Partial Implementations</span>](#conform-partial)
        2.  [<span class="secno"></span> <span class="content"> Implementations of Unstable and Proprietary Features</span>](#conform-future-proofing)
        3.  [<span class="secno"></span> <span class="content"> Implementations of CR-level Features</span>](#conform-testing)
15. [<span class="secno"></span> <span class="content">Index</span>](#index)
    1.  [<span class="secno"></span> <span class="content">Terms defined by this specification</span>](#index-defined-here)
    2.  [<span class="secno"></span> <span class="content">Terms defined by reference</span>](#index-defined-elsewhere)
16. [<span class="secno"></span> <span class="content">References</span>](#references)
    1.  [<span class="secno"></span> <span class="content">Normative References</span>](#normative)
    2.  [<span class="secno"></span> <span class="content">Informative References</span>](#informative)
17. [<span class="secno"></span> <span class="content">Property Index</span>](#property-index)

<span class="secno">1. </span><span class="content"> Introduction to Writing Modes</span><a href="#text-flow" class="self-link"></a>
------------------------------------------------------------------------------------------------------------------------------------

CSS Writing Modes Level 3 defines CSS features to support for various international writing modes, such as left-to-right (e.g. Latin or Indic), right-to-left (e.g. Hebrew or Arabic), bidirectional (e.g. mixed Latin and Arabic) and vertical (e.g. Asian scripts).

A writing mode in CSS is determined by the <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode" class="property">writing-mode</a>, <a href="#propdef-direction" id="ref-for-propdef-direction" class="property">direction</a>, and <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation" class="property">text-orientation</a> properties. It is defined primarily in terms of its <a href="#inline-base-direction" id="ref-for-inline-base-direction">inline base direction</a> and <a href="#block-flow-direction" id="ref-for-block-flow-direction">block flow direction</a>:

[<img src="diagrams/text-flow-vectors-tb.png" alt="Latin-based writing mode" class="landscape" />](diagrams/text-flow-vectors-tb.svg)

Latin-based writing mode

[<img src="diagrams/text-flow-vectors-lr-reverse.png" alt="Mongolian-based writing mode" class="landscape" />](diagrams/text-flow-vectors-lr-reverse.svg)

Mongolian-based writing mode

[<img src="diagrams/text-flow-vectors-tb.png" alt="Han-based writing mode" class="landscape" />](diagrams/text-flow-vectors-tb.svg) [<img src="diagrams/text-flow-vectors-rl.png" alt="Han-based writing mode" class="landscape" />](diagrams/text-flow-vectors-rl.svg)

Han-based writing mode

The inline base direction is the primary direction in which content is ordered on a line and defines on which sides the “start” and “end” of a line are. The <a href="#propdef-direction" id="ref-for-propdef-direction①" class="property">direction</a> property specifies the inline base direction of a box and, together with the <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi" class="property">unicode-bidi</a> property and the inherent directionality of any text content, determines the ordering of inline-level content within a line.

The block flow direction is the direction in which block-level boxes stack and the direction in which line boxes stack within a block container. The <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode①" class="property">writing-mode</a> property determines the block flow direction.

The typographic mode determines if text should apply typographic conventions specific to vertical flow for <a href="#vertical-script" id="ref-for-vertical-script">vertical scripts</a>. This concept distinguishes vertical flow for <span id="ref-for-vertical-script①">vertical scripts</span> from rotated horizontal flow.

A horizontal writing mode is one with horizontal lines of text, i.e. a downward or upward block flow. A vertical writing mode is one with vertical lines of text, i.e. a leftward or rightward block flow.

These terms should not be confused with vertical block flow<a href="#vertical-block-flow" class="self-link"></a> (which is a downward or upward block flow) and horizontal block flow<a href="#horizontal-block-flow" class="self-link"></a> (which is leftward or rightward block flow). To avoid confusion, CSS specifications avoid this latter set of terms.

Writing systems typically have one or two native writing modes. Some examples are:

-   Latin-based systems are typically written using a left-to-right inline direction with a downward (top-to-bottom) block flow direction.
-   Arabic-based systems are typically written using a right-to-left inline direction with a downward (top-to-bottom) block flow direction.
-   Mongolian-based systems are typically written using a top-to-bottom inline direction with a rightward (left-to-right) block flow direction.
-   Han-based systems are commonly written using a left-to-right inline direction with a downward (top-to-bottom) block flow direction, **or** a top-to-bottom inline direction with a leftward (right-to-left) block flow direction. Many magazines and newspapers will mix these two writing modes on the same page.

The <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation①" class="property">text-orientation</a> component of the writing mode controls the glyph orientation.

See Unicode Technical Note \#22 [\[UTN22\]](#biblio-utn22) ([HTML version](http://fantasai.inkedblade.net/style/discuss/vertical-text/paper)) for a more in-depth introduction to writing modes and vertical text.

### <span class="secno">1.1. </span><span class="content"> Module Interactions</span><a href="#placement" class="self-link"></a>

This module replaces and extends the <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi①" class="property">unicode-bidi</a> and <a href="#propdef-direction" id="ref-for-propdef-direction②" class="property">direction</a> features defined in [\[CSS2\]](#biblio-css2) sections 8.6 and 9.10. The interaction of its features with other text operations in setting lines of text is described in [CSS Text 3 § Text Processing Order of Operations](https://www.w3.org/TR/css-text-3/#order).

The <a href="https://www.w3.org/TR/css-cascade-4/#computed-value" id="ref-for-computed-value">computed values</a> of the <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode②" class="property">writing-mode</a>, <a href="#propdef-direction" id="ref-for-propdef-direction③" class="property">direction</a>, and <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation②" class="property">text-orientation</a> properties (even on elements to which these properties themselves don’t apply [\[CSS-CASCADE-4\]](#biblio-css-cascade-4)) are broadly able to influence the computed values of other, unrelated properties through calculations such as the computation of <a href="https://www.w3.org/TR/css-values-4/#font-relative-length" id="ref-for-font-relative-length">font-relative lengths</a> or the cascade of [flow-relative properties](https://www.w3.org/TR/css-logical-1/) which purposefully depend on the computed <a href="#writing-mode" id="ref-for-writing-mode">writing mode</a> or on font metrics that can depend on the <span id="ref-for-writing-mode①">writing mode</span>.

### <span class="secno">1.2. </span><span class="content"> Value Types and Terminology</span><a href="#values" class="self-link"></a>

This specification follows the [CSS property definition conventions](https://www.w3.org/TR/CSS2/about.html#property-defs) from [\[CSS2\]](#biblio-css2). Value types not defined in this specification are defined in CSS Values & Units [\[CSS-VALUES-3\]](#biblio-css-values-3). Other CSS modules may expand the definitions of these value types.

In addition to the property-specific values listed in their definitions, all properties defined in this specification also accept the <a href="https://www.w3.org/TR/css-values-4/#css-wide-keywords" id="ref-for-css-wide-keywords">CSS-wide keywords</a> keywords as their property value. For readability they have not been repeated explicitly.

Other important terminology and concepts used in this specification are defined in [\[CSS2\]](#biblio-css2) and [\[CSS-TEXT-3\]](#biblio-css-text-3).

<span id="bidi"></span>

<span class="secno">2. </span><span class="content"> Inline Direction and Bidirectionality</span><a href="#text-direction" class="self-link"></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

While the characters in most scripts are written from left to right, certain scripts are written from right to left. In some documents, in particular those written with the Arabic or Hebrew script, and in some mixed-language contexts, text in a single (visually displayed) block may appear with mixed directionality. This phenomenon is called bidirectionality<a href="#bidirectionality" class="self-link"></a>, or "bidi" for short.

![An example of bidirectional text is a Latin name in an Arabic sentence. The sentence overall is typeset right-to-left, but the letters in the Latin word in the middle are typeset left-to-right.](diagrams/bidi.png)

Bidirectionality

The Unicode standard ([Unicode Standard Annex \#9](http://www.unicode.org/reports/tr9/)) defines a complex algorithm for determining the proper ordering of bidirectional text. The algorithm consists of an implicit part based on character properties, as well as explicit controls for embeddings and overrides. CSS relies on this algorithm to achieve proper bidirectional rendering.

Two CSS properties, <a href="#propdef-direction" id="ref-for-propdef-direction④" class="property">direction</a> and <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi②" class="property">unicode-bidi</a>, provide explicit embedding, isolation, and override controls in the CSS layer. Because the base directionality of a text depends on the structure and semantics of the document, the <span id="ref-for-propdef-direction⑤" class="property">direction</span> and <span id="ref-for-propdef-unicode-bidi③" class="property">unicode-bidi</span> properties should in most cases be used only to map bidi information in the markup to its corresponding CSS styles.

The HTML specifications ([\[HTML401\]](#biblio-html401), section 8.2, and [\[HTML\]](#biblio-html) [section 14.3.5](https://html.spec.whatwg.org/multipage//rendering.html#bidi-rendering)) define bidirectionality behavior for HTML elements.

**If a document language provides markup features to control bidi, authors and users should use those features instead** and not specify CSS rules to override them.

### <span class="secno">2.1. </span><span class="content"> Specifying Directionality: the <a href="#propdef-direction" id="ref-for-propdef-direction⑥" class="property">direction</a> property</span><a href="#direction" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>direction</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td>ltr <a href="https://www.w3.org/TR/css-values-4/#comb-one" id="ref-for-comb-one">|</a> rtl</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>ltr</td></tr><tr class="even"><td>Applies to:</td><td><a href="https://drafts.csswg.org/css-pseudo/#generated-content" title="Includes ::before and ::after pseudo-elements.">all elements</a></td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>yes</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>n/a</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>specified value</td></tr><tr class="even"><td>Canonical order:</td><td>n/a</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/web-animations/#animation-type">Animation type:</a></td><td>not animatable</td></tr></tbody></table>

Because HTML UAs can turn off CSS styling, **we recommend HTML authors to use the HTML `dir` attribute and &lt;bdo&gt; element** to ensure correct bidirectional layout in the absence of a style sheet. **Authors *should not* use <a href="#propdef-direction" id="ref-for-propdef-direction⑦" class="property">direction</a> in HTML documents.**

This property specifies the <a href="#inline-base-direction" id="ref-for-inline-base-direction①">inline base direction</a> or directionality of any bidi paragraph, embedding, isolate, or override established by the box. (See <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi④" class="property">unicode-bidi</a>.) In addition, it informs the ordering of [table](https://www.w3.org/TR/CSS2/tables.html) column layout, the direction of horizontal [overflow](https://www.w3.org/TR/CSS2/visufx.html#overflow), and the default alignment of text within a line, and other layout effects that depend on the box’s inline base direction.

Values for this property have the following meanings:

ltr   
This value sets <a href="#inline-base-direction" id="ref-for-inline-base-direction②">inline base direction</a> (bidi directionality) to <a href="#line-left" id="ref-for-line-left">line-left</a>-to-<a href="#line-right" id="ref-for-line-right">line-right</a>.

rtl   
This value sets <a href="#inline-base-direction" id="ref-for-inline-base-direction③">inline base direction</a> (bidi directionality) to <a href="#line-right" id="ref-for-line-right①">line-right</a>-to-<a href="#line-left" id="ref-for-line-left①">line-left</a>.

The <a href="#propdef-direction" id="ref-for-propdef-direction⑧" class="property">direction</a> property has no effect on bidi reordering when specified on inline boxes whose <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi⑤" class="property">unicode-bidi</a> value is <a href="#valdef-unicode-bidi-normal" id="ref-for-valdef-unicode-bidi-normal" class="css">normal</a>, because the box does not open an additional level of embedding with respect to the bidirectional algorithm.

The <a href="#propdef-direction" id="ref-for-propdef-direction⑨" class="property">direction</a> property, when specified for table column boxes, is not inherited by cells in the column since columns are not the ancestors of the cells in the document tree. Thus, CSS cannot easily capture the "dir" attribute inheritance rules described in [\[HTML401\]](#biblio-html401), section 11.3.2.1.

### <span class="secno">2.2. </span><span class="content"> Embeddings and Overrides: the <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi⑥" class="property">unicode-bidi</a> property</span><a href="#unicode-bidi" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>unicode-bidi</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td>normal <a href="https://www.w3.org/TR/css-values-4/#comb-one" id="ref-for-comb-one①">|</a> embed <span id="ref-for-comb-one②">|</span> isolate <span id="ref-for-comb-one③">|</span> bidi-override <span id="ref-for-comb-one④">|</span> isolate-override <span id="ref-for-comb-one⑤">|</span> plaintext</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>normal</td></tr><tr class="even"><td>Applies to:</td><td>all elements, but see prose</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>n/a</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>specified value</td></tr><tr class="even"><td>Canonical order:</td><td>per grammar</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/web-animations/#animation-type">Animation type:</a></td><td>not animatable</td></tr></tbody></table>

Because HTML UAs can turn off CSS styling, **we recommend HTML authors to use the HTML `dir` attribute, &lt;bdo&gt; element, and appropriate distinction of text-level vs. grouping-level HTML element types** to ensure correct bidirectional layout in the absence of a style sheet. **Authors *should not* use <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi⑦" class="property">unicode-bidi</a> in HTML documents.**

Normally (i.e. when <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi⑧" class="property">unicode-bidi</a> is <a href="#valdef-unicode-bidi-normal" id="ref-for-valdef-unicode-bidi-normal①" class="css">normal</a>) an inline box is transparent to the unicode bidi algorithm; content is ordered as if the box’s boundaries were not there. Other values of the <span id="ref-for-propdef-unicode-bidi⑨" class="property">unicode-bidi</span> property cause inline boxes to create scopes within the algorithm, and to override the intrinsic directionality of text.

The following informative table summarizes the box-internal and box-external effects of <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi①⓪" class="property">unicode-bidi</a>:

Effect of non-<a href="#valdef-unicode-bidi-normal" id="ref-for-valdef-unicode-bidi-normal②" class="css">normal</a> values of <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi①①" class="property">unicode-bidi</a> on inline boxes

Outside

strong

neutral

Inside

scoped

<a href="#valdef-unicode-bidi-embed" id="ref-for-valdef-unicode-bidi-embed" class="css">embed</a>

<a href="#valdef-unicode-bidi-isolate" id="ref-for-valdef-unicode-bidi-isolate" class="css">isolate</a>

override

<a href="#valdef-unicode-bidi-bidi-override" id="ref-for-valdef-unicode-bidi-bidi-override" class="css">bidi-override</a>

<a href="#valdef-unicode-bidi-isolate-override" id="ref-for-valdef-unicode-bidi-isolate-override" class="css">isolate-override</a>

plaintext

—

<a href="#valdef-unicode-bidi-plaintext" id="ref-for-valdef-unicode-bidi-plaintext" class="css">plaintext</a>

Values for this property have the following (normative) meanings:

normal   
The box does not open an additional level of embedding with respect to the bidirectional algorithm. For inline boxes, implicit reordering works across box boundaries.

embed   
If the box is inline, this value creates a directional embedding by opening an additional level of embedding with respect to the bidirectional algorithm. The direction of this embedding level is given by the <a href="#propdef-direction" id="ref-for-propdef-direction①⓪" class="property">direction</a> property. Inside the box, reordering is done implicitly.

This value has no effect on boxes that are not inline.

isolate   
On an inline box, this bidi-isolates its contents. This is similar to a directional embedding (and increases the embedding level accordingly) except that each sequence of inline-level boxes uninterrupted by any block boundary or <a href="#forced-paragraph-break" id="ref-for-forced-paragraph-break">forced paragraph break</a> is treated as an isolated sequence:

-   the content within the sequence is ordered as if inside an independent paragraph with the base directionality specified by the box’s <a href="#propdef-direction" id="ref-for-propdef-direction①①" class="property">direction</a> property.
-   for the purpose of bidi resolution in its containing bidi paragraph, the sequence is treated as if it were a single Object Replacement Character (U+FFFC).

In effect, neither is the content inside the box bidi-affected by the content surrounding the box, nor is the content surrounding the box bidi-affected by the content or specified directionality of the box. However, <span id="ref-for-forced-paragraph-break①">forced paragraph breaks</span> within the box still create a corresponding break in the containing paragraph.

This value has no effect on boxes that are not inline.

bidi-override   
This value puts the box’s immediate inline content in a directional override. For an inline, this means that the box acts like a <a href="#directional-embedding" id="ref-for-directional-embedding">directional embedding</a> in the bidirectional algorithm, except that reordering within it is strictly in sequence according to the <a href="#propdef-direction" id="ref-for-propdef-direction①②" class="property">direction</a> property; the implicit part of the bidirectional algorithm is ignored. For a block container, the override is applied to an anonymous inline box that surrounds all of its content.

isolate-override   
This combines the <a href="#bidi-isolate" id="ref-for-bidi-isolate">isolation</a> behavior of <a href="#valdef-unicode-bidi-isolate" id="ref-for-valdef-unicode-bidi-isolate①" class="css">isolate</a> with the <a href="#directional-override" id="ref-for-directional-override">directional override</a> behavior of <a href="#valdef-unicode-bidi-bidi-override" id="ref-for-valdef-unicode-bidi-bidi-override①" class="css">bidi-override</a>: to surrounding content, it is equivalent to <span id="ref-for-valdef-unicode-bidi-isolate②" class="css">isolate</span>, but within the box content is ordered as if <span id="ref-for-valdef-unicode-bidi-bidi-override②" class="css">bidi-override</span> were specified. It effectively nests a <span id="ref-for-directional-override①">directional override</span> inside an <a href="#isolated-sequence" id="ref-for-isolated-sequence">isolated sequence</a>.

plaintext   
This value behaves as <a href="#valdef-unicode-bidi-isolate" id="ref-for-valdef-unicode-bidi-isolate③" class="css">isolate</a> except that for the purposes of the Unicode bidirectional algorithm, the base directionality of each of the box’s <a href="#bidi-paragraph" id="ref-for-bidi-paragraph">bidi paragraphs</a> (if a block container) or <a href="#isolated-sequence" id="ref-for-isolated-sequence①">isolated sequences</a> (if an inline) is determined by following the heuristic in rules P2 and P3 of the Unicode bidirectional algorithm (rather than by using the <a href="#propdef-direction" id="ref-for-propdef-direction①③" class="property">direction</a> property of the box).

Following Unicode Bidirectional Algorithm clause HL3 [\[UAX9\]](#biblio-uax9), values other than <a href="#valdef-unicode-bidi-normal" id="ref-for-valdef-unicode-bidi-normal③" class="css">normal</a> effectively insert the corresponding Unicode bidi control codes into the text stream at the start and end of the inline element before passing the paragraph to the Unicode bidirectional algorithm for reordering. (See [§ 2.4.2 CSS–Unicode Bidi Control Translation, Text Reordering](#bidi-control-codes).)

Bidi control codes injected by <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi①②" class="property">unicode-bidi</a> at the start/end of <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-display" id="ref-for-propdef-display" class="css">display: inline</a> boxes

<a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi①③" class="property">unicode-bidi</a> value

<a href="#propdef-direction" id="ref-for-propdef-direction①④" class="property">direction</a> value

<a href="#valdef-direction-ltr" id="ref-for-valdef-direction-ltr" class="css">ltr</a>

<a href="#valdef-direction-rtl" id="ref-for-valdef-direction-rtl" class="css">rtl</a>

start

end

start

end

<a href="#valdef-unicode-bidi-normal" id="ref-for-valdef-unicode-bidi-normal④" class="css">normal</a>

—

—

—

—

<a href="#valdef-unicode-bidi-embed" id="ref-for-valdef-unicode-bidi-embed①" class="css">embed</a>

LRE (U+202A)

PDF (U+202C)

RLE (U+202B)

PDF (U+202C)

<a href="#valdef-unicode-bidi-isolate" id="ref-for-valdef-unicode-bidi-isolate④" class="css">isolate</a>

LRI (U+2066)

PDI (U+2069)

RLI (U+2067)

PDI (U+2069)

<a href="#valdef-unicode-bidi-bidi-override" id="ref-for-valdef-unicode-bidi-bidi-override③" class="css">bidi-override</a>\*

LRO (U+202D)

PDF (U+202C)

RLO (U+202E)

PDF (U+202C)

<a href="#valdef-unicode-bidi-isolate-override" id="ref-for-valdef-unicode-bidi-isolate-override①" class="css">isolate-override</a>\*

FSI,LRO (U+2068,U+202D)

PDF,PDI (U+202C,U+2069)

FSI,RLO (U+2068,U+202E)

PDF,PDI (U+202C,U+2069)

<a href="#valdef-unicode-bidi-plaintext" id="ref-for-valdef-unicode-bidi-plaintext①" class="css">plaintext</a>

FSI (U+2068)

PDI (U+2069)

FSI (U+2068)

PDI (U+2069)

<span class="small">\* The LRO/RLO+PDF pairs are also applied to the <a href="https://www.w3.org/TR/css-inline-3/#root-inline-box" id="ref-for-root-inline-box">root inline box</a> of a <a href="https://www.w3.org/TR/css-display-3/#block-container" id="ref-for-block-container">block container</a> if these values of <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi①④" class="property">unicode-bidi</a> were specified on the <span id="ref-for-block-container①">block container</span>.</span>

Because the <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi①⑤" class="property">unicode-bidi</a> property does not inherit, setting <a href="#valdef-unicode-bidi-bidi-override" id="ref-for-valdef-unicode-bidi-bidi-override④" class="css">bidi-override</a> or <a href="#valdef-unicode-bidi-plaintext" id="ref-for-valdef-unicode-bidi-plaintext②" class="css">plaintext</a> on a block box will not affect any descendant blocks. Therefore these values are best used on blocks and inlines that do not contain any block-level structures.

Note that <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi①⑥" class="property">unicode-bidi</a> does not affect the <a href="#propdef-direction" id="ref-for-propdef-direction①⑤" class="property">direction</a> property even in the case of <a href="#valdef-unicode-bidi-plaintext" id="ref-for-valdef-unicode-bidi-plaintext③" class="css">plaintext</a>, and thus does not affect <span id="ref-for-propdef-direction①⑥" class="property">direction</span>-dependent layout calculations.

Because the Unicode algorithm has a limit of 125 levels of embedding, care should be taken not to overuse <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi①⑦" class="property">unicode-bidi</a> values other than <a href="#valdef-unicode-bidi-normal" id="ref-for-valdef-unicode-bidi-normal⑤" class="css">normal</a>. In particular, a value of <a href="https://www.w3.org/TR/css-cascade-4/#valdef-all-inherit" id="ref-for-valdef-all-inherit" class="css">inherit</a> should be used with extreme caution in deeply nested inline markup. However, for elements that are, in general, intended to be displayed as blocks, a setting of <span id="ref-for-propdef-unicode-bidi①⑧" class="css">unicode-bidi: isolate</span> is preferred to keep the element together in case the <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-display" id="ref-for-propdef-display①" class="property">display</a> is changed to <a href="https://www.w3.org/TR/css-display-3/#valdef-display-inline" id="ref-for-valdef-display-inline" class="css">inline</a> (see example below).

### <span class="secno">2.3. </span><span class="content"> Example of Bidirectional Text</span><a href="#bidi-example" class="self-link"></a>

The following example shows an XML document with bidirectional text. It illustrates an important design principle: document language designers should take bidi into account both in the language proper (elements and attributes) and in any accompanying style sheets. The style sheets should be designed so that bidi rules are separate from other style rules, and such rules should not be overridden by other style sheets so that the document language’s bidi behavior is preserved.

<a href="#example-16648d44" class="self-link"></a>

In this example, lowercase letters stand for inherently left-to-right characters and uppercase letters represent inherently right-to-left characters. The text stream is shown below in logical backing store order.

    <section dir=rtl>
      <para>HEBREW1 HEBREW2 english3 HEBREW4 HEBREW5</para>
      <para>HEBREW6 <emphasis>HEBREW7</emphasis> HEBREW8</para>
    </section>
    <section dir=ltr>
      <para>english9 english10 english11 HEBREW12 HEBREW13</para>
      <para>english14 english15 english16</para>
      <para>english17 <quote dir=rtl>HEBREW18 english19 HEBREW20</quote></para>
    </section>

Since this is arbitrary XML, the style sheet is responsible for setting the writing direction. This is the style sheet:

    /* Rules for bidi */
    [dir=rtl] {direction: rtl; unicode-bidi: isolate; }
    [dir=ltr] {direction: ltr; unicode-bidi: isolate; }

    /* Rules for presentation */
    section, para  {display: block;}
    emphasis       {font-weight: bold;}
    quote          {font-style: italic;}

If the line length is long, the formatting of this text might look like this:

                   5WERBEH 4WERBEH english3 2WERBEH 1WERBEH

                                    8WERBEH 7WERBEH 6WERBEH

    english9 english10 english11 13WERBEH 12WERBEH

    english14 english15 english16

    english17 20WERBEH english19 18WERBEH

The first `<section>` element is a block with a right-to-left base direction, the second `<section>` element is a block with a left-to-right base direction. The `<para>`s are blocks that inherit the base direction from their parents. Thus, the first two `<para>`s are read starting at the top right, the final three are read starting at the top left.

The `<emphasis>` element is inline-level, and since its value for <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi①⑨" class="property">unicode-bidi</a> is <a href="#valdef-unicode-bidi-normal" id="ref-for-valdef-unicode-bidi-normal⑥" class="css">normal</a> (the initial value), it has no effect on the ordering of the text.

The `<quote>` element, on the other hand, creates an <a href="#isolated-sequence" id="ref-for-isolated-sequence②">isolated sequence</a> with the given internal directionality. Note that this causes HEBREW18 to be to the right of english19.

If lines have to be broken, the same text might format like this:

           2WERBEH 1WERBEH
      -EH 4WERBEH english3
                     5WERB

       -EH 7WERBEH 6WERBEH
                     8WERB

    english9 english10 en-
    glish11 12WERBEH
    13WERBEH

    english14 english15
    english16

    english17 18WERBEH
    20WERBEH english19

Notice that because HEBREW18 must be read before english19, it is on the line above english19. Just breaking the long line from the earlier formatting would not have worked.

Note also that the first syllable from english19 might have fit on the previous line, but hyphenation of left-to-right words in a right-to-left context, and vice versa, is usually suppressed to avoid having to display a hyphen in the middle of a line.

### <span class="secno">2.4. </span><span class="content"> Applying the Bidirectional Reordering Algorithm</span><a href="#bidi-algo" class="self-link"></a>

User agents that support bidirectional text must apply the Unicode bidirectional algorithm to every sequence of inline-level boxes uninterrupted by any block boundary or “[bidi type B](http://www.unicode.org/reports/tr9/#Bidirectional_Character_Types)” forced paragraph break. This sequence forms the paragraph unit in the bidirectional algorithm.

#### <span class="secno">2.4.1. </span><span class="content"> Bidi Paragraph Embedding Levels</span><a href="#bidi-para-direction" class="self-link"></a>

In CSS, the paragraph embedding level must be set (following [UAX9 clause HL1](http://www.unicode.org/reports/tr9/#HL1)) according to the <a href="#propdef-direction" id="ref-for-propdef-direction①⑦" class="property">direction</a> property of the paragraph’s containing block rather than by the heuristic given in steps [P2](http://www.unicode.org/reports/tr9/#P2) and [P3](http://www.unicode.org/reports/tr9/#P2) of the Unicode algorithm.

There is, however, one exception: when the computed <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi②⓪" class="property">unicode-bidi</a> of the paragraph’s containing block is <a href="#valdef-unicode-bidi-plaintext" id="ref-for-valdef-unicode-bidi-plaintext④" class="css">plaintext</a>, the Unicode heuristics in P2 and P3 are used as described in [\[UAX9\]](#biblio-uax9), without the HL1 override.

#### <span class="secno">2.4.2. </span><span class="content"> CSS–Unicode Bidi Control Translation, Text Reordering</span><a href="#bidi-control-codes" class="self-link"></a>

The final order of characters within each <a href="#bidi-paragraph" id="ref-for-bidi-paragraph①">bidi paragraph</a> is the same as if the bidi control codes had been added as described for <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi②①" class="property">unicode-bidi</a> (above), markup had been stripped, and the resulting character sequence had been passed to an implementation of the Unicode bidirectional algorithm for plain text that produced the same line-breaks as the styled text.

Note that bidi control codes in the source text are still honored, and might not correspond to the document tree structure. This can split inlines or interfere with bidi start/end control pairing in interesting ways.

#### <span class="secno">2.4.3. </span><span class="content"> Bidi Treatment of Atomic Inlines</span><a href="#bidi-atomic-inlines" class="self-link"></a>

In this process, <a href="https://www.w3.org/TR/css-display-3/#replaced-element" id="ref-for-replaced-element">replaced elements</a> with <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-display" id="ref-for-propdef-display②" class="css">display: inline</a> are treated as neutral characters, unless their <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi②②" class="property">unicode-bidi</a> property is either <a href="#valdef-unicode-bidi-embed" id="ref-for-valdef-unicode-bidi-embed②" class="css">embed</a> or <a href="#valdef-unicode-bidi-bidi-override" id="ref-for-valdef-unicode-bidi-bidi-override⑤" class="css">bidi-override</a>, in which case they are treated as strong characters in the <a href="#propdef-direction" id="ref-for-propdef-direction①⑧" class="property">direction</a> specified for the element. (This is so that, in case the replaced element falls back to rendering inlined text content, its bidi effect on the surrounding text is consistent with its replaced rendering.)

All other atomic inline-level boxes are treated as neutral characters always.

#### <span class="secno">2.4.4. </span><span class="content"> Paragraph Breaks Within Embeddings and Isolates</span><a href="#bidi-embedding-breaks" class="self-link"></a>

If an inline box is broken around a <a href="#bidi-paragraph" id="ref-for-bidi-paragraph②">bidi paragraph</a> boundary (e.g. if split by a block or <a href="#forced-paragraph-break" id="ref-for-forced-paragraph-break②">forced paragraph break</a>), then the [HL3](http://www.unicode.org/reports/tr9/#HL3) bidi control codes assigned to the end of the box are also added before the interruption and the codes assigned to the start of the box are also added after it. (In other words, any embedding levels, isolates, or overrides started by the box are closed at the paragraph break and reopened on the other side of it.)

<a href="#example-334883cc" class="self-link"></a>

For example, where &lt;BR/&gt; is a <a href="#forced-paragraph-break" id="ref-for-forced-paragraph-break③">forced paragraph break</a> the bidi ordering is identical between

    <para>...<i1><i2>...<BR/>...</i2></i1>...</para>

and

    <para>...<i1><i2>...</i2></i1><BR/><i1><i2>...</i2></i1>...</para>

for all values of <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi②③" class="property">unicode-bidi</a> on inline elements &lt;i1&gt; and &lt;i2&gt;.

Note that this behavior is applied by CSS for CSS-declared bidi controls applied to the box tree; it does not apply to Unicode’s bidi formatting controls, which are defined to terminate their effect at the end of the bidi paragraph.

#### <span class="secno">2.4.5. </span><span class="content"> Reordering-induced Box Fragmentation</span><a href="#bidi-box-model" class="self-link"></a>

Since bidi reordering can split apart and reorder text that is logically contiguous, bidirectional text can cause an <a href="https://www.w3.org/TR/css-display-3/#inline-box" id="ref-for-inline-box">inline box</a> containing such text to be split and its fragments reordered within a line.

For each line box, UAs must take the fragments of each inline box and assign the margins, borders, and padding in visual order (not logical order). The <a href="#start" id="ref-for-start">start</a>-most fragment on the first line box in which the box appears has the <span id="ref-for-start①">start</span> edge’s margin, border, and padding; and the end-most fragment on the last line box in which the box appears has the <a href="#end" id="ref-for-end">end</a> edge’s margin, border, and padding. For example, in the <a href="#valdef-writing-mode-horizontal-tb" id="ref-for-valdef-writing-mode-horizontal-tb" class="css">horizontal-tb</a> writing mode:

-   When the parent’s <a href="#propdef-direction" id="ref-for-propdef-direction①⑨" class="property">direction</a> property is <a href="#valdef-direction-ltr" id="ref-for-valdef-direction-ltr①" class="css">ltr</a>, the left-most box fragment on the first line box in which the box appears has the left margin, left border and left padding, and the right-most box fragment on the last line box in which the box appears has the right padding, right border and right margin.
-   When the parent’s <a href="#propdef-direction" id="ref-for-propdef-direction②⓪" class="property">direction</a> property is <a href="#valdef-direction-rtl" id="ref-for-valdef-direction-rtl①" class="css">rtl</a>, the right-most fragment of the first line box in which the box appears has the right padding, right border and right margin, and the left-most fragment of the last line box in which the box appears has the left margin, left border and left padding.

Analogous rules hold for vertical writing modes.

The <a href="https://www.w3.org/TR/css-break-4/#propdef-box-decoration-break" id="ref-for-propdef-box-decoration-break" class="property">box-decoration-break</a> property can override this behavior to draw box decorations on both sides of each fragment. [\[CSS3-BREAK\]](#biblio-css3-break)

<span class="secno">3. </span><span class="content"> Vertical Writing Modes</span><a href="#vertical-modes" class="self-link"></a>
----------------------------------------------------------------------------------------------------------------------------------

In addition to extensions to CSS2.1’s support for bidirectional text, this module introduces the rules and properties needed to support vertical text layout in CSS.

### <span class="secno">3.1. </span><span class="content"> Introduction to Vertical Writing</span><a href="#vertical-intro" class="self-link"></a>

*This subsection is non-normative.*

Unlike languages that use the Latin script which are primarily laid out horizontally, Asian languages such as Chinese and Japanese can be laid out vertically. The Japanese example below shows the same text laid out horizontally and vertically. In the horizontal case, text is read from left to right, top to bottom. For the vertical case, the text is read top to bottom, right to left. Indentation from the left edge in the left-to-right horizontal case translates to indentation from the top edge in the top-to-bottom vertical case.

![A comparison of horizontal and vertical Japanese shows that although the lines rotate, the characters remain upright. Some glyphs, however change: a period mark shifts from the bottom left of its glyph box to the top right. Running headers, however, may remain laid out horizontally across the top of the page.](images/vert-horiz-comparison.png)

Comparison of vertical and horizontal Japanese: iBunko application (iOS)

For Chinese and Japanese lines are ordered either right to left or top to bottom, while for Mongolian and Manchu lines are ordered left to right.

The change from horizontal to vertical writing can affect not just the layout, but also the typesetting. For example, the position of a punctuation mark within its spacing box can change from the horizontal to the vertical case, and in some cases alternate glyphs are used.

Vertical text that includes Latin script text or text from other scripts normally displayed horizontally can display that text in a number of ways. For example, Latin words can be rotated sideways, or each letter can be oriented upright:

![A dictionary definition for ヴィルス might write the English word 'virus' rotated 90° clockwise, but stack the letters of the initialisms 'RNA' and 'DNA' upright.](images/vert-latin-layouts.png)

Examples of Latin in vertical Japanese: Daijirin Viewer 1.4 (iOS)

In some special cases such as two-digit numbers in dates, text is fit compactly into a single vertical character box:

![An excerpt from MacFan shows several possible vertical layouts for numbers: the two-digit month and day are written as horizontal-in-vertical blocks; the years are written with each character upright; except in the English phrase “for Mac 2011”, where the date is rotated to match the rotated Latin.](images/vert-number-layouts.png)

Mac Fan, December 2010, p.49

Layouts often involve a mixture of vertical and horizontal elements:

![Magazines often mix horizontal and vertical layout; for example, using one orientation for the main article text and a different one for sidebar or illustrative content.](images/vert-horiz-combination.png)

Mixture of vertical and horizontal elements

Vertical text layouts also need to handle bidirectional text layout; clockwise-rotated Arabic, for example, is laid out bottom-to-top.

### <span class="secno">3.2. </span><span class="content"> Block Flow Direction: the <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode③" class="property">writing-mode</a> property</span><a href="#block-flow" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>writing-mode</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td>horizontal-tb <a href="https://www.w3.org/TR/css-values-4/#comb-one" id="ref-for-comb-one⑥">|</a> vertical-rl <span id="ref-for-comb-one⑦">|</span> vertical-lr</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>horizontal-tb</td></tr><tr class="even"><td>Applies to:</td><td>All elements except table row groups, table column groups, table rows, table columns, ruby base container, ruby annotation container</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>yes</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>n/a</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>specified value</td></tr><tr class="even"><td>Canonical order:</td><td>n/a</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/web-animations/#animation-type">Animation type:</a></td><td>not animatable</td></tr></tbody></table>

This property specifies whether lines of text are laid out horizontally or vertically and the direction in which blocks progress. Possible values:

horizontal-tb   
Top-to-bottom <a href="#block-flow-direction" id="ref-for-block-flow-direction①">block flow direction</a>. Both the <a href="#writing-mode" id="ref-for-writing-mode②">writing mode</a> and the <a href="#typographic-mode" id="ref-for-typographic-mode">typographic mode</a> are horizontal.

vertical-rl   
Right-to-left <a href="#block-flow-direction" id="ref-for-block-flow-direction②">block flow direction</a>. Both the <a href="#writing-mode" id="ref-for-writing-mode③">writing mode</a> and the <a href="#typographic-mode" id="ref-for-typographic-mode①">typographic mode</a> are vertical.

vertical-lr   
Left-to-right <a href="#block-flow-direction" id="ref-for-block-flow-direction③">block flow direction</a>. Both the <a href="#writing-mode" id="ref-for-writing-mode④">writing mode</a> and the <a href="#typographic-mode" id="ref-for-typographic-mode②">typographic mode</a> are vertical.

The <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode④" class="property">writing-mode</a> property specifies the <a href="#block-flow-direction" id="ref-for-block-flow-direction④">block flow direction</a>, which determines the ordering direction of block-level boxes in a block formatting context; the ordering direction of line boxes in a block container that contains inlines; the ordering direction of rows in a table; etc. By virtue of determining the stacking direction of line boxes, the <span id="ref-for-propdef-writing-mode⑤" class="property">writing-mode</span> property also determines whether the line boxes' orientation (and thus the <a href="#writing-mode" id="ref-for-writing-mode⑤">writing mode</a>) is horizontal or vertical. The <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation③" class="property">text-orientation</a> property then determines how text is laid out within the line box.

The content of <a href="https://www.w3.org/TR/css-display-3/#replaced-element" id="ref-for-replaced-element①">replaced elements</a> do not rotate due to the writing mode: images and external content such as from `<iframe>`s, for example, remain upright, and the <a href="https://www.w3.org/TR/css3-images/#default-object-size" id="ref-for-default-object-size">default object size</a> of 300px×150px does not re-orient. However embedded replaced content involving text (such as MathML content or form elements) should match the replaced element’s writing mode and line orientation if the UA supports such a vertical writing mode for the replaced content.

<a href="#example-26ec58a4" class="self-link"></a>

In the following example, two block elements (1 and 3) separated by an image (2) are presented in various flow writing modes.

Here is a diagram of horizontal writing mode (`writing-mode: horizontal-tb`):

<img src="images/horizontal.png" alt="Diagram of horizontal layout: blocks 1, 2, and 3 are stacked top-to-bottom" width="219" height="300" />

Here is a diagram for the right-to-left vertical writing mode commonly used in East Asia (`writing-mode: vertical-rl`):

<img src="images/vertical-rl.png" alt="Diagram of a right-to-left vertical layout: blocks 1, 2, and 3 are arranged side by side from right to left" width="297" height="191" />

And finally, here is a diagram for the left-to-right vertical writing mode used for Manchu and Mongolian (`writing-mode: vertical-lr`):

<img src="images/vertical-lr.png" alt="Diagram of left-to-right vertical layout: blocks 1, 2, and 3 are arranged side by side from left to right" width="300" height="191" />

<a href="#example-fb72ee40" class="self-link"></a>

In the following example, some form controls are rendered inside a block with <a href="#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl" class="css">vertical-rl</a> writing mode. The form controls are rendered to match the writing mode.

    <style>
      form { writing-mode: vertical-rl; }
    </style>
    ...
    <form>
    <p><label>姓名　<input value="艾俐俐"></label>
    <p><label>语言　<select><option>English
                           <option>français
                           <option>فارسی
                           <option>中文
                           <option>日本語</select></label>
    </form>

![Screenshot of vertical layout: the input element is laid lengthwise from top to bottom and its contents rendered in a vertical typographic mode, matching the labels outside it. The drop-down selection control after it slides out to the side (towards the after edge of the block) rather than downward as it would in horizontal writing modes.](images/vertical-form.png)

If a box has a different <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode⑥" class="property">writing-mode</a> value than its parent box (i.e. nearest ancestor without <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-display" id="ref-for-propdef-display③" class="css">display: contents</a>):

-   If the box would otherwise become an <a href="https://www.w3.org/TR/css-display-3/#in-flow" id="ref-for-in-flow">in-flow</a> box with a computed <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-display" id="ref-for-propdef-display④" class="property">display</a> of <a href="https://www.w3.org/TR/css-display-3/#valdef-display-inline" id="ref-for-valdef-display-inline①" class="css">inline</a>, its <span id="ref-for-propdef-display⑤" class="property">display</span> computes instead to <a href="https://www.w3.org/TR/css-display-3/#valdef-display-inline-block" id="ref-for-valdef-display-inline-block" class="css">inline-block</a>.
-   If the box is a <a href="https://www.w3.org/TR/css-display-3/#block-container" id="ref-for-block-container②">block container</a>, then it establishes an <a href="https://www.w3.org/TR/css-display-3/#independent-formatting-context" id="ref-for-independent-formatting-context">independent</a> <a href="https://www.w3.org/TR/css-display-3/#block-formatting-context" id="ref-for-block-formatting-context">block formatting context</a>.
-   More generally, if its specified <a href="https://www.w3.org/TR/css-display-3/#inner-display-type" id="ref-for-inner-display-type">inner display type</a> is <a href="https://www.w3.org/TR/css-display-3/#valdef-display-flow" id="ref-for-valdef-display-flow" class="css">flow</a>, then its computed <span id="ref-for-inner-display-type①">inner display type</span> becomes <a href="https://www.w3.org/TR/css-display-3/#valdef-display-flow-root" id="ref-for-valdef-display-flow-root" class="css">flow-root</a>. [\[CSS-DISPLAY-3\]](#biblio-css-display-3)

<a href="#embedded-svg-inheritance" class="self-link"></a>

As all other inherited CSS properties do, the <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode⑦" class="property">writing-mode</a> property inherits to SVG elements inlined (rather than linked) into the source document. This could cause unintentional side effects when, for example, an SVG image designed only for horizontal flow was embedded into a vertical flow document.

Authors can prevent this from happening by adding the following rule:

<a href="#example-5db07892" class="self-link"></a>

    svg { writing-mode: initial; }

#### <span class="secno">3.2.1. </span><span class="content"> Obsolete SVG1.1 <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode⑧" class="property">writing-mode</a> Values</span><a href="#svg-writing-mode" class="self-link"></a>

SVG1.1 [\[SVG11\]](#biblio-svg11) defines some additional values: <span class="css">lr</span>, <span class="css">lr-tb</span>, <span class="css">rl</span>, <span class="css">rl-tb</span>, <span class="css">tb</span>, and <span class="css">tb-rl</span>.

These values are *obsolete* in any context except SVG1 documents and are therefore *optional* for non-SVG UAs.

##### <span class="secno">3.2.1.1. </span><span class="content"> Supporting SVG1.1 <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode⑨" class="property">writing-mode</a> values in CSS syntax</span><a href="#svg-writing-mode-css" class="self-link"></a>

UAs that wish to support these values in the context of CSS must compute them as follows:

Mapping of Obsolete SVG1.1 <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode①⓪" class="property">writing-mode</a> values to modern CSS

Specified

Computed

<span class="css">lr</span>

<a href="#valdef-writing-mode-horizontal-tb" id="ref-for-valdef-writing-mode-horizontal-tb①" class="css">horizontal-tb</a>

<span class="css">lr-tb</span>

<span class="css">rl</span>

<span class="css">rl-tb</span>

<span class="css">tb</span>

<a href="#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl①" class="css">vertical-rl</a>

<span class="css">tb-rl</span>

The SVG1.1 values were also present in an older of the CSS <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode①①" class="property">writing-mode</a> specification, which is obsoleted by this specification. The additional <span class="css">tb-lr</span> value of that revision is replaced by <a href="#valdef-writing-mode-vertical-lr" id="ref-for-valdef-writing-mode-vertical-lr" class="css">vertical-lr</a>.

##### <span class="secno">3.2.1.2. </span><span class="content"> Supporting SVG1.1 <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode①②" class="property">writing-mode</a> values in presentational attributes</span><a href="#svg-writing-mode-markup" class="self-link"></a>

In order to support legacy content with presentational attributes, and to allow authors to create documents that support older clients, SVG UAs must add the following style sheet rules to their default UA stylesheet:

    @namespace svg "http://www.w3.org/2000/svg";
    svg|*[writing-mode=lr], svg|*[writing-mode=lr-tb],
    svg|*[writing-mode=rl], svg|*[writing-mode=rl-tb] {
      writing-mode: horizontal-tb; }
    svg|*[writing-mode=tb], svg|*[writing-mode=tb-rl] {
      writing-mode: vertical-rl; }

Authors who wish to create forwards and backwards-compatible SVG content in CSS syntax can use the CSS forwards-compatible parsing rules to do so, e.g.

    svg|text { writing-mode: tb; writing-mode: vertical-rl; }

<span class="secno">4. </span><span class="content"> Inline-level Alignment</span><a href="#inline-alignment" class="self-link"></a>
------------------------------------------------------------------------------------------------------------------------------------

When different kinds of inline-level content are placed together on a line, the baselines of the content and the settings of the <a href="https://www.w3.org/TR/css-inline-3/#propdef-vertical-align" id="ref-for-propdef-vertical-align" class="property">vertical-align</a> property control how they are aligned in the transverse direction of the line box. This section discusses what baselines are, how to find them, and how they are used together with the <span id="ref-for-propdef-vertical-align①" class="property">vertical-align</span> property to determine the alignment of inline-level content.

### <span class="secno">4.1. </span><span class="content"> Introduction to Baselines</span><a href="#intro-baselines" class="self-link"></a>

*This section is non-normative.*

A baseline<a href="#baseline" class="self-link"></a> is a line along the <a href="#inline-axis" id="ref-for-inline-axis">inline axis</a> of a line box along which individual glyphs of text are aligned. Baselines guide the design of glyphs in a font (for example, the bottom of most alphabetic glyphs typically align with the alphabetic baseline), and they guide the alignment of glyphs from different fonts or font sizes when typesetting.

<img src="images/alphabetic-baseline-in-two-font-sizes.svg" alt="Picture of alphabetic text in two font sizes with the baseline and em-boxes" width="480" />

Alphabetic text in two font sizes with the baseline and em-boxes

Different writing systems prefer different baseline tables.

![Latin prefers the alphabetic baseline, on top of which most letters rest, though some have descenders that dangle below it. Indic scripts are sometimes typeset with a hanging baseline, since their glyph shapes appear to be hanging from a horizontal line. Han-based systems, whose glyphs are designed to fill a square, tend to align on their bottoms.](images/script-preferred-baselines.gif)

Preferred baselines in various writing systems

A well-constructed font contains a baseline table<a href="#baseline-table" class="self-link"></a>, which indicates the position of one or more baselines within the font’s design coordinate space. (The design coordinate space is scaled with the font size.)

![](images/baselines.gif)

In a well-designed mixed-script font, the glyphs are positioned in the coordinate space to harmonize with one another when typeset together. The baseline table is then constructed to match the shape of the glyphs, each baseline positioned to match the glyphs from its preferred scripts.

The baseline table is a property of the font, and the positions of the various baselines apply to all glyphs in the font.

Different baseline tables can be provided for alignment in horizontal and vertical text. UAs should use the vertical tables in vertical <a href="#typographic-mode" id="ref-for-typographic-mode③">typographic modes</a> and the horizontal tables otherwise.

### <span class="secno">4.2. </span><span class="content"> Text Baselines</span><a href="#text-baselines" class="self-link"></a>

In this specification, only the following baselines are considered:

alphabetic   
The alphabetic baseline, which typically aligns with the bottom of uppercase Latin glyphs.

central   
The central baseline, which typically crosses the center of the em box. If the font is missing this baseline, it is assumed to be halfway between the ascender (<a href="#over" id="ref-for-over">over</a>) and descender (<a href="#under" id="ref-for-under">under</a>) edges of the em box.

In vertical <a href="#typographic-mode" id="ref-for-typographic-mode④">typographic mode</a>, the <a href="#central-baseline" id="ref-for-central-baseline">central baseline</a> is used as the dominant baseline when <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation④" class="property">text-orientation</a> is <a href="#valdef-text-orientation-mixed" id="ref-for-valdef-text-orientation-mixed" class="css">mixed</a> or <a href="#valdef-text-orientation-upright" id="ref-for-valdef-text-orientation-upright" class="css">upright</a>. Otherwise the <a href="#alphabetic-baseline" id="ref-for-alphabetic-baseline">alphabetic baseline</a> is used.

A future CSS module will deal with baselines in more detail and allow the choice of other dominant baselines and alignment options.

### <span class="secno">4.3. </span><span class="content"> Atomic Inline Baselines</span><a href="#replaced-baselines" class="self-link"></a>

If an [atomic inline](https://www.w3.org/TR/CSS2/visuren.html#inline-boxes) (such as an inline-block, inline-table, or replaced inline element) does not have a baseline, then the UA synthesizes a baseline table thus:

alphabetic   
The alphabetic baseline is assumed to be at the <a href="#under" id="ref-for-under①">under</a> margin edge.

central   
The central baseline is assumed to be halfway between the <a href="#under" id="ref-for-under②">under</a> and <a href="#over" id="ref-for-over①">over</a> margin edges of the box.

The <a href="https://www.w3.org/TR/css-inline-3/#propdef-vertical-align" id="ref-for-propdef-vertical-align②" class="property">vertical-align</a> property in [\[CSS2\]](#biblio-css2) defines the baseline of inline-table and inline-block boxes with some exceptions.

### <span class="secno">4.4. </span><span class="content"> Baseline Alignment</span><a href="#baseline-alignment" class="self-link"></a>

The dominant baseline<a href="#dominant-baseline" class="self-link"></a> (which [can change](#text-baselines) based on the <a href="#typographic-mode" id="ref-for-typographic-mode⑤">typographic mode</a>) is used in CSS for alignment in two cases:

-   **Aligning glyphs from different fonts within the same inline box.** The glyphs are aligned by matching up the positions of the dominant baseline in their corresponding fonts.
-   **Aligning a child inline-level box within its parent.** For the <a href="https://www.w3.org/TR/css-inline-3/#propdef-vertical-align" id="ref-for-propdef-vertical-align③" class="property">vertical-align</a> value of <span class="css">baseline</span>, child is aligned to the parent by matching the parent’s dominant baseline to the same baseline in the child. (E.g. if the parent’s dominant baseline is alphabetic, then the child’s alphabetic baseline is matched to the parent’s alphabetic baseline, even if the child’s dominant baseline is something else.) For values of <span class="css">sub</span>, <span class="css">super</span>, <a href="https://www.w3.org/TR/css3-values/#length-value" id="ref-for-length-value" class="css">&lt;length&gt;</a>, and <a href="https://www.w3.org/TR/css3-values/#percentage-value" id="ref-for-percentage-value" class="css">&lt;percentage&gt;</a>, the baselines are aligned as for <span class="css">baseline</span>, but the child is shifted according to the offset given by its <span id="ref-for-propdef-vertical-align④" class="property">vertical-align</span> value.
    <a href="#example-edb77cae" class="self-link"></a>
    Given following sample markup:

        <p><span class="outer">Ap <span class="inner">ji</span></span></p>

    And the following style rule:

        span.inner { font-size: .75em; }

    The baseline tables of the parent (`.outer`) and the child (`.inner`) will not match up due to the font size difference. Since the dominant baseline is the alphabetic baseline, the child box is aligned to its parent by matching up their alphabetic baselines.

    ![](images/baseline-align-sizes.gif)

    <a href="#example-3b107e11" class="self-link"></a>
    If we assign <a href="https://www.w3.org/TR/css-inline-3/#propdef-vertical-align" id="ref-for-propdef-vertical-align⑤" class="css">vertical-align: super</a> to the `.inner` element from the example above, the same rules are used to align the `.inner` child to its parent; the only difference is in addition to the baseline alignment, the child is shifted to the superscript position.

        span.inner { vertical-align: super; font-size: .75em; }

    ![In this example, the resulting alignment is equivalent to shifting the parent baseline table upwards by the superscript offset, and then aligning the child’s alphabetic baseline to the shifted position of the parent’s alphabetic baseline.](images/baseline-align-super.gif)

<span class="secno">5. </span><span class="content"> Introduction to Vertical Text Layout</span><a href="#intro-text-layout" class="self-link"></a>
---------------------------------------------------------------------------------------------------------------------------------------------------

Each writing system has one or more native orientations. Modern scripts can therefore be classified into three orientational categories:

horizontal-only   
Scripts that have horizontal, but not vertical, native orientation. Includes: Latin, Arabic, Hebrew, Devanagari

vertical-only   
Scripts that have vertical, but not horizontal, native orientation. Includes: Mongolian, Phags Pa

bi-orientational   
Scripts that have both vertical and horizontal native orientation. Includes: Han, Hangul, Japanese Kana

A vertical script is one that has a native vertical orientation: i.e. one that is either <a href="#vertical-only" id="ref-for-vertical-only">vertical-only</a> or that is <a href="#bi-orientational" id="ref-for-bi-orientational">bi-orientational</a>. A horizontal script is one that has a native horizontal orientation: i.e. one that is either <a href="#horizontal-only" id="ref-for-horizontal-only">horizontal-only</a> or that is <span id="ref-for-bi-orientational①">bi-orientational</span>. (See [Appendix A](#script-orientations) for a categorization of scripts by native orientation.)

![A Venn diagram of these distinctions would show two circles: one labelled 'vertical', the other 'horizontal'. The overlapped region would represent the bi-orientational scripts, while horizontal-only and vertical-only scripts would occupy their respective circles' exclusive regions.](diagrams/script-orientations.png)

In modern typographic systems, all glyphs are assigned a horizontal orientation, which is used when laying out text horizontally. To lay out vertical text, the UA needs to transform the text from its horizontal orientation. This transformation is the bi-orientational transform, and there are two types:

rotate   
Rotate the glyph from horizontal to vertical [<img src="diagrams/glyph-right.png" alt="Rotate the glyph from horizontal to vertical" class="figure" />](diagrams/glyph-right.svg)

translate   
Translate the glyph from horizontal to vertical [<img src="diagrams/glyph-upright.png" alt="Translate the glyph from horizontal to vertical" class="figure" />](diagrams/glyph-upright.svg)

Scripts with a native vertical orientation have an intrinsic <a href="#bi-orientational-transform" id="ref-for-bi-orientational-transform">bi-orientational transform</a>, which orients them correctly in vertical text: most CJK (Chinese/Japanese/Korean) characters translate, that is, they are always upright. Characters from other scripts, such as Mongolian, rotate.

Scripts without a native vertical orientation can be either rotated (set sideways) or translated (set upright): the transform used is a stylistic preference depending on the text’s usage, rather than a matter of correctness. The <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation⑤" class="property">text-orientation</a> property’s <a href="#valdef-text-orientation-mixed" id="ref-for-valdef-text-orientation-mixed①" class="css">mixed</a> and <a href="#valdef-text-orientation-upright" id="ref-for-valdef-text-orientation-upright①" class="css">upright</a> values are provided to specify rotation vs. translation of <a href="#horizontal-only" id="ref-for-horizontal-only①">horizontal-only</a> text.

### <span class="secno">5.1. </span><span class="content"> Orienting Text: the <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation⑥" class="property">text-orientation</a> property</span><a href="#text-orientation" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>text-orientation</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td>mixed <a href="https://www.w3.org/TR/css-values-4/#comb-one" id="ref-for-comb-one⑧">|</a> upright <span id="ref-for-comb-one⑨">|</span> sideways</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>mixed</td></tr><tr class="even"><td>Applies to:</td><td>all elements except table row groups, rows, column groups, and columns</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>yes</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>n/a</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>specified value</td></tr><tr class="even"><td>Canonical order:</td><td>n/a</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/web-animations/#animation-type">Animation type:</a></td><td>not animatable</td></tr></tbody></table>

This property specifies the orientation of text within a line. Current values only have an effect in vertical <a href="#typographic-mode" id="ref-for-typographic-mode⑥">typographic modes</a>: the property has no effect on boxes in horizontal <span id="ref-for-typographic-mode⑦">typographic modes</span>.

Values have the following meanings:

mixed   
In vertical writing modes, <a href="https://www.w3.org/TR/css-text-3/#typographic-character-unit" id="ref-for-typographic-character-unit">typographic character units</a> from horizontal-only scripts are [typeset sideways](#typeset-sideways), i.e. 90° clockwise from their standard orientation in horizontal text. <span id="ref-for-typographic-character-unit①">Typographic character units</span> from vertical scripts are typeset with their intrinsic orientation. See [Vertical Orientations](#vertical-orientations) for further details.

This value is typical for layout of dominantly vertical-script text.

upright   
In vertical writing modes, <a href="https://www.w3.org/TR/css-text-3/#typographic-character-unit" id="ref-for-typographic-character-unit②">typographic character units</a> from horizontal-only scripts are [typeset upright](#typeset-upright), i.e. in their standard horizontal orientation. <span id="ref-for-typographic-character-unit③">Typographic character units</span> from vertical scripts are typeset with their intrinsic orientation and shaped normally. See [Vertical Orientations](#vertical-orientations) for further details.

This value causes the <a href="https://www.w3.org/TR/css-cascade-4/#used-value" id="ref-for-used-value">used value</a> of <a href="#propdef-direction" id="ref-for-propdef-direction②①" class="property">direction</a> to be <a href="#valdef-direction-ltr" id="ref-for-valdef-direction-ltr②" class="css">ltr</a>, and for the purposes of bidi reordering, causes all characters to be treated as strong LTR.

Note: The <a href="https://www.w3.org/TR/css-cascade-4/#used-value" id="ref-for-used-value①">used value</a>, rather than the <a href="https://www.w3.org/TR/css-cascade-4/#computed-value" id="ref-for-computed-value①">computed value</a>, of <a href="#propdef-direction" id="ref-for-propdef-direction②②" class="property">direction</a> is influenced so that <a href="#valdef-direction-rtl" id="ref-for-valdef-direction-rtl②" class="css">rtl</a> can inherit properly into any descendants (such as the contents of a <a href="#horizontal-writing-mode" id="ref-for-horizontal-writing-mode">horizontal</a> inline-block) where this directional override does not apply.

sideways   
In vertical writing modes, this causes all text to be [typeset sideways](#typeset-sideways), as if in a horizontal layout, but rotated 90° clockwise.

<table><tbody><tr class="odd"><td><img src="images/text-orientation-vr.png" alt="text-orientation: mixed" width="64" height="160" /></td><td><img src="images/text-orientation-up.png" alt="text-orientation: upright" width="64" height="160" /></td><td><img src="images/text-orientation-sr.png" alt="text-orientation: sideways" width="64" height="160" /></td></tr><tr class="even"><td><a href="#valdef-text-orientation-mixed" id="ref-for-valdef-text-orientation-mixed②" class="css">mixed</a></td><td><a href="#valdef-text-orientation-upright" id="ref-for-valdef-text-orientation-upright②" class="css">upright</a></td><td><a href="#valdef-text-orientation-sideways" id="ref-for-valdef-text-orientation-sideways" class="css">sideways</a></td></tr></tbody></table>

<a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation⑦" class="property">text-orientation</a> values (<a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode①③" class="property">writing-mode</a> is <a href="#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl②" class="css">vertical-rl</a>)

Changing the value of this property may affect inline-level alignment. Refer to [Text Baselines](#text-baselines) for more details.

UAs may accept sideways-right as a value that computes to <a href="#valdef-text-orientation-sideways" id="ref-for-valdef-text-orientation-sideways①" class="css">sideways</a> if needed for backward compatibility reasons.

As of writing, major implementations do not support the automatic LTR treatment of RTL characters for <a href="#valdef-text-orientation-upright" id="ref-for-valdef-text-orientation-upright③" class="css">upright</a> typesetting. In such cases, authors may need to explicitly specify <a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi②④" class="property">unicode-bidi</a> and <a href="#propdef-direction" id="ref-for-propdef-direction②③" class="property">direction</a> as in the following example:

    .vertical-upright-hebrew {
        writing-mode: vertical-rl;
        text-orientation: upright;
        unicode-bidi: bidi-override;
        direction: ltr;
    }

#### <span class="secno">5.1.1. </span><span class="content"> Vertical Typesetting and Font Features</span><a href="#vertical-font-features" class="self-link"></a>

When typesetting text in <a href="#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl③" class="css">vertical-rl</a> and <a href="#valdef-writing-mode-vertical-lr" id="ref-for-valdef-writing-mode-vertical-lr①" class="css">vertical-lr</a> modes, text is typeset either “upright” or “sideways” as defined below:

<a href="#typeset-upright" class="self-link"></a>upright typesetting   
<a href="https://www.w3.org/TR/css-text-3/#typographic-character-unit" id="ref-for-typographic-character-unit④">Typographic character units</a> are individually typeset upright in vertical lines with vertical font metrics. The UA must synthesize vertical font metrics for fonts that lack them. (This specification does not define heuristics for synthesizing such metrics.) Additionally, font features (such as alternate glyphs and other transformation) intended for use in vertical typesetting must be used. (E.g. the OpenType <span class="css">vert</span> feature must be enabled.) Furthermore, characters from horizontal cursive scripts (such as Arabic) are shaped in their isolated forms when typeset upright.

Note that even when typeset “upright”, some glyphs should appear rotated. For example, dashes and enclosing punctuation should be oriented relative to the <a href="#inline-axis" id="ref-for-inline-axis①">inline axis</a>. In OpenType, this is typically handled by glyph substitution, although not all fonts have alternate glyphs for all relevant codepoints. (East Asian fonts usually provide alternates for East Asian codepoints, but Western fonts typically lack any vertical typesetting features and East Asian fonts typically lack vertical substitutions for Western codepoints.) Unicode published draft data on which characters should appear sideways as the SVO property in [this data file](http://www.unicode.org/reports/tr50/tr50-6.Orientation.txt); however, this property has been abandoned for the current revision of [\[UAX50\]](#biblio-uax50).

<a href="https://www.w3.org/TR/css-text-3/#typographic-character-unit" id="ref-for-typographic-character-unit⑤">Typographic character units</a> which are classified as `Tr` or `Tu` in [\[UAX50\]](#biblio-uax50) are expected to have alternate glyphs or positioning for typesetting upright in vertical text. In the case of `Tr` <a href="https://www.w3.org/TR/css-text-3/#character" id="ref-for-character">characters</a>, if such vertical alternate glyphs are missing from the font, the UA *may wish to* [\[RFC6919\]](#biblio-rfc6919) (but is not expected to) synthesize the missing glyphs by [typesetting them sideways](#typeset-sideways) etc.

<a href="#typeset-sideways" class="self-link"></a>sideways typesetting   
<a href="https://www.w3.org/TR/css-text-3/#typographic-character-unit" id="ref-for-typographic-character-unit⑥">Typographic character units</a> typeset as a run rotated 90° clockwise from their upright orientation, using horizontal metrics and composition, and vertical typesetting features are not used. However, if the font has features meant to be enabled for sideways text that is typeset in vertical lines (e.g. to adjust brush stroke angles or alignment), those features are used. (An example of such a feature would be the proposed [`vrtr` OpenType font feature](http://blogs.adobe.com/CCJKType/2013/08/tale-of-three-features.html).)

#### <span class="secno">5.1.2. </span><span class="content"> Mixed Vertical Orientations</span><a href="#vertical-orientations" class="self-link"></a>

[\[UAX50\]](#biblio-uax50) defines the `Vertical_Orientation` property for the default glyph orientation of mixed-orientation vertical text. When <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation⑧" class="property">text-orientation</a> is <a href="#valdef-text-orientation-mixed" id="ref-for-valdef-text-orientation-mixed③" class="css">mixed</a>, the UA must determine the orientation of each <a href="https://www.w3.org/TR/css-text-3/#typographic-character-unit" id="ref-for-typographic-character-unit⑦">typographic character unit</a> by its `Vertical_Orientation` property: [typeseting it upright](#typeset-upright) if its orientation property is `U`, `Tu`, or `Tr`; or [typesetting it sideways](#typeset-sideways) (90° clockwise from horizontal) if its orientation property is `R`.

Note that UAX50 does not handle scripts that rotate -90° in vertical contexts, so they will not be typeset correctly with <a href="#valdef-text-orientation-mixed" id="ref-for-valdef-text-orientation-mixed④" class="css">mixed</a> orientation. The <a href="https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-sideways-lr" id="ref-for-valdef-writing-mode-sideways-lr" class="css">sideways-lr</a> value in [Level 4](https://www.w3.org/TR/css-writing-modes-4/), however, can correctly display such scripts.

The OpenType <span class="css">vrt2</span> feature, which is intended for mixed-orientation typesetting, is not used by CSS. It delegates the responsibility for orienting glyphs to the font designer. CSS instead dictates the orientation through [\[UAX50\]](#biblio-uax50) and orients glyphs by typesetting them sideways or upright as appropriate.

#### <span class="secno">5.1.3. </span><span class="content"> Obsolete: the SVG1.1 <a href="#propdef-glyph-orientation-vertical" id="ref-for-propdef-glyph-orientation-vertical" class="property">glyph-orientation-vertical</a> property</span><a href="#glyph-orientation" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>glyph-orientation-vertical</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td>auto <a href="https://www.w3.org/TR/css-values-4/#comb-one" id="ref-for-comb-one①⓪">|</a> 0deg <span id="ref-for-comb-one①①">|</span> 90deg <span id="ref-for-comb-one①②">|</span> 0 <span id="ref-for-comb-one①③">|</span> 90</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>n/a</td></tr><tr class="even"><td>Applies to:</td><td>n/a</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>n/a</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>n/a</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>n/a</td></tr><tr class="even"><td>Canonical order:</td><td>n/a</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/web-animations/#animation-type">Animatable:</a></td><td>n/a</td></tr></tbody></table>

Some SVG user agents will need to process documents containing the obsolete SVG <a href="#propdef-glyph-orientation-vertical" id="ref-for-propdef-glyph-orientation-vertical①" class="property">glyph-orientation-vertical</a> property, which was defined to accept an <span class="css">auto</span> keyword as well as <a href="https://www.w3.org/TR/css3-values/#angle-value" id="ref-for-angle-value" class="production css" title="Expands to: turn | rad | grad | deg">&lt;angle&gt;</a> and <a href="https://www.w3.org/TR/css3-values/#integer-value" id="ref-for-integer-value" class="production css">&lt;integer&gt;</a> values representing multiples of 90°. While supporting this property is *optional*, UAs that do so must alias <span id="ref-for-propdef-glyph-orientation-vertical②" class="property">glyph-orientation-vertical</span> as a shorthand of <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation⑨" class="property">text-orientation</a> as follows:

<table><thead><tr class="header"><th>Shorthand <a href="#propdef-glyph-orientation-vertical" id="ref-for-propdef-glyph-orientation-vertical③" class="property">glyph-orientation-vertical</a> value</th><th>Longhand <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation①⓪" class="property">text-orientation</a> value</th></tr></thead><tbody><tr class="odd"><td><span class="css">auto</span></td><td><a href="#valdef-text-orientation-mixed" id="ref-for-valdef-text-orientation-mixed⑤" class="css">mixed</a></td></tr><tr class="even"><td><span class="css">0deg</span></td><td><a href="#valdef-text-orientation-upright" id="ref-for-valdef-text-orientation-upright④" class="css">upright</a></td></tr><tr class="odd"><td><span class="css">0</span></td><td><a href="#valdef-text-orientation-upright" id="ref-for-valdef-text-orientation-upright⑤" class="css">upright</a></td></tr><tr class="even"><td><span class="css">90deg</span></td><td><a href="#valdef-text-orientation-sideways" id="ref-for-valdef-text-orientation-sideways②" class="css">sideways</a></td></tr><tr class="odd"><td><span class="css">90</span></td><td><a href="#valdef-text-orientation-sideways" id="ref-for-valdef-text-orientation-sideways③" class="css">sideways</a></td></tr></tbody></table>

UAs must ignore and treat as invalid any other values for the <a href="#propdef-glyph-orientation-vertical" id="ref-for-propdef-glyph-orientation-vertical④" class="property">glyph-orientation-vertical</a> property; and treat as invalid the <span class="property">glyph-orientation-horizontal</span> property in its entirety.

Note: The <span class="css">180deg</span> and <span class="css">270deg</span> values, the radian and gradian values, and the <span class="property">glyph-orientation-horizontal</span> property are not mapped because they have no known use cases nor significant amounts of dependent content, and are therefore not part of CSS, and have been likewise dropped from SVG.

<span class="secno">6. </span><span class="content"> Abstract Box Terminology</span><a href="#abstract-box" class="self-link"></a>
----------------------------------------------------------------------------------------------------------------------------------

CSS2.1 [\[CSS2\]](#biblio-css2) defines the box layout model of CSS in detail, but only for the <a href="#valdef-writing-mode-horizontal-tb" id="ref-for-valdef-writing-mode-horizontal-tb②" class="css">horizontal-tb</a> writing mode. Layout is analogous in writing modes other than <span id="ref-for-valdef-writing-mode-horizontal-tb③" class="css">horizontal-tb</span>; however directional and dimensional terms in CSS2.1 must be abstracted and remapped appropriately.

This section defines abstract directional and dimensional terms and their mappings in order to define box layout for other writing modes, and to provide terminology for future specs to define their layout concepts abstractly. (The next section explains how to apply them to CSS2.1 layout calculations and how to handle [orthogonal flows](#orthogonal-flows).) Although they derive from the behavior of text, these abstract mappings exist even for boxes that do not contain any line boxes: they are calculated directly from the values of the <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode①④" class="property">writing-mode</a> and <a href="#propdef-direction" id="ref-for-propdef-direction②④" class="property">direction</a> properties.

There are three sets of directional terms in CSS:

physical<a href="#physical" class="self-link"></a>   
Interpreted relative to the page, independent of writing mode. The physical directions<a href="#physical-direction" class="self-link"></a> are left<a href="#physical-left" class="self-link"></a>, right<a href="#physical-right" class="self-link"></a>, top<a href="#physical-top" class="self-link"></a>, and bottom<a href="#physical-bottom" class="self-link"></a>.

[flow-relative](#logical-directions)<a href="#flow-relative" class="self-link"></a>   
Interpreted relative to the flow of content. The flow-relative directions are <a href="#start" id="ref-for-start②">start</a> and <a href="#end" id="ref-for-end①">end</a>, or <a href="#block-start" id="ref-for-block-start">block-start</a>, <a href="#block-end" id="ref-for-block-end">block-end</a>, <a href="#inline-start" id="ref-for-inline-start">inline-start</a>, and <a href="#inline-end" id="ref-for-inline-end">inline-end</a> if the dimension is also ambiguous.

[line-relative](#line-directions)<a href="#line-relative" class="self-link"></a>   
Interpreted relative to the orientation of the line box. The line-relative directions are <a href="#line-left" id="ref-for-line-left②">line-left</a>, <a href="#line-right" id="ref-for-line-right②">line-right</a>, <a href="#line-over" id="ref-for-line-over">line-over</a>, and <a href="#line-under" id="ref-for-line-under">line-under</a>.

The physical dimensions<a href="#physical-dimensions" class="self-link"></a> are width<a href="#width" class="self-link"></a> and height<a href="#height" class="self-link"></a>, which correspond to measurements along the x-axis (horizontal dimension) and y-axis (vertical dimension), respectively. [Abstract dimensions](#abstract-axes) are identical in both flow-relative and line-relative terms, so there is only one set of these terms.

Note: [\[CSS3-FLEXBOX\]](#biblio-css3-flexbox) also defines [flex-relative terms](https://www.w3.org/TR/css3-flexbox/#box-model), which are used in describing flex layout.

### <span class="secno">6.1. </span><span class="content"> Abstract Dimensions</span><a href="#abstract-axes" class="self-link"></a>

The abstract dimensions<a href="#abstract-dimensions" class="self-link"></a> are defined below:

block dimension<a href="#block-dimension" class="self-link"></a>   
The dimension perpendicular to the flow of text within a line, i.e. the <a href="#vertical-dimension" id="ref-for-vertical-dimension">vertical dimension</a> in horizontal writing modes, and the <a href="#horizontal-dimension" id="ref-for-horizontal-dimension">horizontal dimension</a> in vertical writing modes.

inline dimension<a href="#inline-dimension" class="self-link"></a>   
The dimension parallel to the flow of text within a line, i.e. the <a href="#horizontal-dimension" id="ref-for-horizontal-dimension①">horizontal dimension</a> in horizontal writing modes, and the <a href="#vertical-dimension" id="ref-for-vertical-dimension①">vertical dimension</a> in vertical writing modes.

block axis   
The axis in the block dimension, i.e. the <a href="#y-axis" id="ref-for-y-axis">vertical axis</a> in horizontal writing modes and the <a href="#x-axis" id="ref-for-x-axis">horizontal axis</a> in vertical writing modes.

inline axis   
The axis in the inline dimension, i.e. the <a href="#x-axis" id="ref-for-x-axis①">horizontal axis</a> in horizontal writing modes and the <a href="#y-axis" id="ref-for-y-axis①">vertical axis</a> in vertical writing modes.

block size  
<a href="#extent" class="self-link"></a>logical height<a href="#logical-height" class="self-link"></a>   
A measurement in the block dimension: refers to the physical height (vertical dimension) in horizontal writing modes, and to the physical width (horizontal dimension) in vertical writing modes.

inline size  
<a href="#measure" class="self-link"></a>logical width<a href="#logical-width" class="self-link"></a>   
A measurement in the inline dimension: refers to the physical width (horizontal dimension) in horizontal writing modes, and to the physical height (vertical dimension) in vertical writing modes.

### <span class="secno">6.2. </span><span class="content"> Flow-relative Directions</span><a href="#logical-directions" class="self-link"></a>

The flow-relative directions, <a href="#block-start" id="ref-for-block-start①">block-start</a>, <a href="#block-end" id="ref-for-block-end①">block-end</a>, <a href="#inline-start" id="ref-for-inline-start①">inline-start</a>, and <a href="#inline-end" id="ref-for-inline-end①">inline-end</a>, are defined relative to the flow of content on the page. In an LTR <a href="#valdef-writing-mode-horizontal-tb" id="ref-for-valdef-writing-mode-horizontal-tb④" class="css">horizontal-tb</a> writing mode, they correspond to the top, bottom, left, and right directions, respectively. They are defined as follows:

block-start   
The side that comes earlier in the <a href="#block-flow-direction" id="ref-for-block-flow-direction⑤">block flow direction</a>, as determined by the <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode①⑤" class="property">writing-mode</a> property: the physical top in <a href="#valdef-writing-mode-horizontal-tb" id="ref-for-valdef-writing-mode-horizontal-tb⑤" class="css">horizontal-tb</a> mode, the right in <a href="#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl④" class="css">vertical-rl</a>, and the left in <a href="#valdef-writing-mode-vertical-lr" id="ref-for-valdef-writing-mode-vertical-lr②" class="css">vertical-lr</a>.

block-end   
The side opposite <a href="#block-start" id="ref-for-block-start②">block-start</a>.

inline-start   
The side from which text of the inline base direction would start. For boxes with a used <a href="#propdef-direction" id="ref-for-propdef-direction②⑤" class="property">direction</a> value of <a href="#valdef-direction-ltr" id="ref-for-valdef-direction-ltr③" class="css">ltr</a>, this means the <a href="#line-left" id="ref-for-line-left③">line-left</a> side. For boxes with a used <span id="ref-for-propdef-direction②⑥" class="property">direction</span> value of <a href="#valdef-direction-rtl" id="ref-for-valdef-direction-rtl③" class="css">rtl</a>, this means the <a href="#line-right" id="ref-for-line-right③">line-right</a> side.

inline-end   
The side opposite <a href="#start" id="ref-for-start③">start</a>.

Where contextually unambiguous or encompassing both meanings, the terms start and end are used in place of <a href="#block-start" id="ref-for-block-start③">block-start</a>/<a href="#inline-start" id="ref-for-inline-start②">inline-start</a> and <a href="#block-end" id="ref-for-block-end②">block-end</a>/<a href="#inline-end" id="ref-for-inline-end②">inline-end</a>, respectively.

Note that while determining the <a href="#block-start" id="ref-for-block-start④">block-start</a> and <a href="#block-end" id="ref-for-block-end③">block-end</a> sides of a box depends only on the <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode①⑥" class="property">writing-mode</a> property, determining the <a href="#inline-start" id="ref-for-inline-start③">inline-start</a> and <a href="#inline-end" id="ref-for-inline-end③">inline-end</a> sides of a box depends not only on the <span id="ref-for-propdef-writing-mode①⑦" class="property">writing-mode</span> property but also the <a href="#propdef-direction" id="ref-for-propdef-direction②⑦" class="property">direction</a> property.

<a href="#example-bf84250f" class="self-link"></a>

![Physical/logical terms as applicable to typical English text layout](diagrams/sizing-ltr-tb.svg)

<a href="#example-40873f56" class="self-link"></a>

![Physical/logical terms as applicable to typical Chinese text layout](diagrams/sizing-ttb-rl.svg)

### <span class="secno">6.3. </span><span class="content"> Line-relative Directions</span><a href="#line-directions" class="self-link"></a>

The line orientation determines which side of a line box is the logical “top” (ascender side). It is given by the <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode①⑧" class="property">writing-mode</a> property. Usually the line-relative “top” corresponds to the <a href="#block-start" id="ref-for-block-start⑤">block-start</a> side, but this is not always the case: in Mongolian typesetting (and thus by default in <a href="#valdef-writing-mode-vertical-lr" id="ref-for-valdef-writing-mode-vertical-lr③" class="css">vertical-lr</a> writing modes), the line-relative “top” corresponds to the <a href="#block-end" id="ref-for-block-end④">block-end</a> side. Hence the need for distinct terminology.

![Mongolian mixed with English](images/mongolian-lr.jpg)

A primarily Mongolian document, such as the one above, is written in vertical lines stacking left to right, but lays its Latin text with the tops of the glyphs towards the right. This makes the text run in the same inline direction as Mongolian (top-to-bottom) and face the same direction it does in other East Asian layouts (which have vertical lines stacking right to left), but the glyphs' tops are facing the bottom of the line stack rather than the top, which in an English paragraph would be upside-down. (See this [Diagram of Mongolian Text Layout](diagrams/text-flow-vectors-lr-reverse.svg).)

In addition to a line-relative “top” and “bottom” to map things like 'vertical-align: top', CSS also needs to refer to a line-relative “left” and “right” in order to map things like <a href="https://www.w3.org/TR/css-text-3/#propdef-text-align" id="ref-for-propdef-text-align" class="css">text-align: left</a>. Thus there are four line-relative directions, which are defined relative to the <a href="#line-orientation" id="ref-for-line-orientation">line orientation</a> as follows:

over or line-over   
Nominally the side that corresponds to the ascender side or “top” side of a line box. (The side overlines are typically drawn on.)

under or line-under   
Opposite of <a href="#over" id="ref-for-over②">over</a>: the line-relative “bottom” or descender side. (The side underlines are typically drawn on.)

line-left   
The line-relative "left" side of a line box, which is nominally the side from which LTR text would start.

line-right   
The line-relative "right" side of a line box, which is nominally the side from which RTL text would start. (Opposite of <a href="#line-left" id="ref-for-line-left④">line-left</a>.)

See the [table below](#logical-to-physical) for the exact mappings between physical and line-relative directions.

[<img src="diagrams/line-orient-up.png" alt="Line orientation compass" class="landscape" />](diagrams/line-orient-up.svg)

Line orientation in <a href="#valdef-writing-mode-horizontal-tb" id="ref-for-valdef-writing-mode-horizontal-tb⑥" class="css">horizontal-tb</a>

[<img src="diagrams/line-orient-right.png" alt="Typical orientation in vertical" class="portrait" />](diagrams/line-orient-right.svg)

Line orientation in <a href="#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl⑤" class="css">vertical-rl</a> and <a href="#valdef-writing-mode-vertical-lr" id="ref-for-valdef-writing-mode-vertical-lr④" class="css">vertical-lr</a>

<a href="#vertical-metrics" class="self-link"></a>

<img src="images/vertical-upright-baseline.svg" alt="Baseline of an upright glyph is drawn vertically from the top center" width="80" />

Vertical baseline of an upright glyph

When <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation①①" class="css">text-orientation: upright</a>, the baseline is still vertical, and the vertical baseline in the font is used, or the vertical baseline is synthesized if the font does not provide.

Since the baseline is vertical, the definitions for <a href="#valdef-text-orientation-mixed" id="ref-for-valdef-text-orientation-mixed⑥" class="css">mixed</a> or <a href="#valdef-text-orientation-sideways" id="ref-for-valdef-text-orientation-sideways④" class="css">sideways</a> above still apply; i.e., <a href="#line-over" id="ref-for-line-over①">line-over</a> is on right, and <a href="#line-under" id="ref-for-line-under①">line-under</a> is on left.

This is in line with font systems such as OpenType which defines the ascender on right and the descender on left in their vertical metrics.

### <span class="secno">6.4. </span><span class="content"> Abstract-to-Physical Mappings</span><a href="#logical-to-physical" class="self-link"></a>

The following table summarizes the abstract-to-physical mappings (based on the *used* <a href="#propdef-direction" id="ref-for-propdef-direction②⑧" class="property">direction</a> and <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode①⑨" class="property">writing-mode</a>):

Abstract-Physical Mapping

<a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode②⓪" class="property">writing-mode</a>

<a href="#valdef-writing-mode-horizontal-tb" id="ref-for-valdef-writing-mode-horizontal-tb⑦" class="css">horizontal-tb</a>

<a href="#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl⑥" class="css">vertical-rl</a>

<a href="#valdef-writing-mode-vertical-lr" id="ref-for-valdef-writing-mode-vertical-lr⑤" class="css">vertical-lr</a>

<a href="#propdef-direction" id="ref-for-propdef-direction②⑨" class="property">direction</a>

<a href="#valdef-direction-ltr" id="ref-for-valdef-direction-ltr④" class="css">ltr</a>

<a href="#valdef-direction-rtl" id="ref-for-valdef-direction-rtl④" class="css">rtl</a>

<a href="#valdef-direction-ltr" id="ref-for-valdef-direction-ltr⑤" class="css">ltr</a>

<a href="#valdef-direction-rtl" id="ref-for-valdef-direction-rtl⑤" class="css">rtl</a>

<a href="#valdef-direction-ltr" id="ref-for-valdef-direction-ltr⑥" class="css">ltr</a>

<a href="#valdef-direction-rtl" id="ref-for-valdef-direction-rtl⑥" class="css">rtl</a>

block-size

height

width

inline-size

width

height

block-start

top

right

left

block-end

bottom

left

right

inline-start

left

right

top

bottom

top

bottom

inline-end

right

left

bottom

top

bottom

top

over

top

right

under

bottom

left

line-left

left

top

line-right

right

bottom

Note: The <a href="https://www.w3.org/TR/css-cascade-4/#used-value" id="ref-for-used-value②">used</a> <a href="#propdef-direction" id="ref-for-propdef-direction③⓪" class="property">direction</a> depends on the computed <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode②①" class="property">writing-mode</a> and <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation①②" class="property">text-orientation</a>: in <a href="#vertical-writing-mode" id="ref-for-vertical-writing-mode">vertical writing modes</a>, a <span id="ref-for-propdef-text-orientation①③" class="property">text-orientation</span> value of <a href="#valdef-text-orientation-upright" id="ref-for-valdef-text-orientation-upright⑥" class="css">upright</a> forces the used <span id="ref-for-propdef-direction③①" class="property">direction</span> to <a href="#valdef-direction-ltr" id="ref-for-valdef-direction-ltr⑦" class="css">ltr</a>.

<span class="secno">7. </span><span class="content"> Abstract Box Layout</span><a href="#abstract-layout" class="self-link"></a>
--------------------------------------------------------------------------------------------------------------------------------

### <span class="secno">7.1. </span><span class="content"> Principles of Layout in Vertical Writing Modes</span><a href="#vertical-layout" class="self-link"></a>

CSS box layout in vertical writing modes is analogous to layout in the horizontal writing modes, following the principles outlined below:

Layout calculation rules (such as those in CSS2.1, Section 10.3) that apply to the horizontal dimension in horizontal writing modes instead apply to the vertical dimension in vertical writing modes. Likewise, layout calculation rules (such as those in CSS2.1, Section 10.6) that apply to the vertical dimension in horizontal writing modes instead apply to the horizontal dimension in vertical writing modes. Thus:

-   Layout rules that refer to the width use the height instead, and vice versa.

-   Layout rules that refer to the <span class="property">\*-left</span> and <span class="property">\*-right</span> box properties (border, margin, padding, positioning offsets) use <span class="property">\*-top</span> and <span class="property">\*-bottom</span> instead, and vice versa, mapping the horizontal writing-mode rules of CSS2.1 into vertical writing-mode rules using the <a href="#flow-relative-direction" id="ref-for-flow-relative-direction">flow-relative directions</a>. The side of the box these properties apply to doesn’t change: only which values are inputs to which layout calculations changes. The <a href="https://www.w3.org/TR/css-box-3/#propdef-margin-left" id="ref-for-propdef-margin-left" class="property">margin-left</a> property still affects the lefthand margin, for example; however in a <a href="#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl⑦" class="css">vertical-rl</a> writing mode it takes part in margin collapsing in place of <a href="https://www.w3.org/TR/css-box-3/#propdef-margin-bottom" id="ref-for-propdef-margin-bottom" class="property">margin-bottom</a>.

-   Layout rules that depend on the <a href="#propdef-direction" id="ref-for-propdef-direction③②" class="property">direction</a> property to choose between left and right (e.g. overflow, overconstraint resolution, the initial value for <a href="https://www.w3.org/TR/css-text-3/#propdef-text-align" id="ref-for-propdef-text-align①" class="property">text-align</a>, table column ordering) are abstracted to the <a href="#start" id="ref-for-start④">start</a> and <a href="#end" id="ref-for-end②">end</a> sides and applied appropriately.

<a href="#example-63009bd2" class="self-link"></a>

For example, in vertical writing modes, table rows are vertical and table columns are horizontal. In a <a href="#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl⑧" class="css">vertical-rl</a> <a href="#valdef-text-orientation-mixed" id="ref-for-valdef-text-orientation-mixed⑦" class="css">mixed</a> <a href="#valdef-direction-rtl" id="ref-for-valdef-direction-rtl⑦" class="css">rtl</a> table, the first column would be on the bottom (the <a href="#inline-start" id="ref-for-inline-start④">inline-start</a> side), and the first row on the right (the <a href="#block-start" id="ref-for-block-start⑥">block-start</a> side). The table’s <a href="https://www.w3.org/TR/css-box-3/#propdef-margin-right" id="ref-for-propdef-margin-right" class="property">margin-right</a> and <a href="https://www.w3.org/TR/css-box-3/#propdef-margin-left" id="ref-for-propdef-margin-left①" class="property">margin-left</a> would collapse with margins before (on the right) and after (on the left) the table, respectively, and if the table had <span class="css">auto</span> values for <a href="https://www.w3.org/TR/css-box-3/#propdef-margin-top" id="ref-for-propdef-margin-top" class="property">margin-top</a> and <a href="https://www.w3.org/TR/css-box-3/#propdef-margin-bottom" id="ref-for-propdef-margin-bottom①" class="property">margin-bottom</a> it would be centered vertically within its block flow.

[![Diagram of a vertical-rl mixed rtl table in a vertical block formatting context, showing the ordering of rows, cells, and columns as described above.](diagrams/vertical-table.png)](diagrams/vertical-table.svg)

Table in <a href="#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl⑨" class="css">vertical-rl</a> RTL writing mode

For features such as text alignment, floating, and list marker positioning, that primarily reference the left or right sides of the line box or its longitudinal parallels and therefore have no top or bottom equivalent, the <a href="#line-left" id="ref-for-line-left⑤">line-left</a> and <a href="#line-right" id="ref-for-line-right④">line-right</a> sides are used as the reference for the left and right sides respectively.

Likewise for features such as underlining, overlining, and baseline alignment (the unfortunately-named <a href="https://www.w3.org/TR/css-inline-3/#propdef-vertical-align" id="ref-for-propdef-vertical-align⑥" class="property">vertical-align</a>), that primarily reference the top or bottom sides of the linebox or its transversal parallels and therefore have no left or right equivalent, the <a href="#line-over" id="ref-for-line-over②">line-over</a> and <a href="#line-under" id="ref-for-line-under②">line-under</a> sides are used as the reference for the top and bottom sides respectively.

The details of these mappings are provided below.

### <span class="secno">7.2. </span><span class="content"> Dimensional Mapping</span><a href="#dimension-mapping" class="self-link"></a>

Certain properties behave logically as follows:

-   The first and second values of the <a href="https://www.w3.org/TR/CSS21/tables.html#propdef-border-spacing" id="ref-for-propdef-border-spacing" class="property">border-spacing</a> property represent spacing between columns and rows respectively, not necessarily the horizontal and vertical spacing respectively. [\[CSS2\]](#biblio-css2)
-   The <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-line-height" id="ref-for-propdef-line-height" class="property">line-height</a> property always refers to the logical height. [\[CSS2\]](#biblio-css2)

The height properties (<a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-height" id="ref-for-propdef-height" class="property">height</a>, <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-min-height" id="ref-for-propdef-min-height" class="property">min-height</a>, and <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-max-height" id="ref-for-propdef-max-height" class="property">max-height</a>) refer to the physical height, and the width properties (<a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width" class="property">width</a>, <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-min-width" id="ref-for-propdef-min-width" class="property">min-width</a>, and <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-max-width" id="ref-for-propdef-max-width" class="property">max-width</a>) refer to the physical width. However, the rules used to calculate box dimensions and positions are logical.

For example, the calculation rules in [CSS2.1 Section 10.3](https://www.w3.org/TR/CSS2/visudet.html#Computing_widths_and_margins) are used for the inline dimension measurements: they apply to the <a href="#inline-size" id="ref-for-inline-size">inline size</a> (which could be either the physical width or physical height) and to the <a href="#inline-start" id="ref-for-inline-start⑤">inline-start</a> and <a href="#inline-end" id="ref-for-inline-end④">inline-end</a> margins, padding, and border. Likewise the calculation rules in [CSS2.1 Section 10.6](https://www.w3.org/TR/CSS2/visudet.html#Computing_heights_and_margins) are used in the block dimension: they apply to the <a href="#block-size" id="ref-for-block-size">block size</a> and to the <a href="#block-start" id="ref-for-block-start⑦">block-start</a> and <a href="#block-end" id="ref-for-block-end⑤">block-end</a> margins, padding, and border. [\[CSS2\]](#biblio-css2)

As a corollary, percentages on the margin and padding properties, which are always calculated with respect to the containing block width in CSS2.1, are calculated with respect to the *<a href="#inline-size" id="ref-for-inline-size①">inline size</a>* of the containing block in CSS3.

### <span class="secno">7.3. </span><span class="content"> Orthogonal Flows</span><a href="#orthogonal-flows" class="self-link"></a>

We appreciate feedback in general, but we are particularly interested in feedback on this particularly complicated section.

When a box has a different <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode②②" class="property">writing-mode</a> from its containing block two cases are possible:

-   The two writing modes are parallel to each other. (For example, <a href="#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl①⓪" class="css">vertical-rl</a> and <a href="#valdef-writing-mode-vertical-lr" id="ref-for-valdef-writing-mode-vertical-lr⑥" class="css">vertical-lr</a>).
-   The two writing modes are perpendicular to each other. (For example, <a href="#valdef-writing-mode-horizontal-tb" id="ref-for-valdef-writing-mode-horizontal-tb⑧" class="css">horizontal-tb</a> and <a href="#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl①①" class="css">vertical-rl</a>).

When a box has a writing mode that is perpendicular to its containing block it is said to be in, or establish, an orthogonal flow.

To handle this case, CSS layout calculations are divided into two phases: sizing a box, and positioning the box within its flow.

-   In the sizing phase—calculating the width and height of the box—the dimensions of the box and the containing block are mapped to the <a href="#inline-size" id="ref-for-inline-size②">inline size</a> and <a href="#block-size" id="ref-for-block-size①">block size</a> and calculations are performed accordingly using the writing mode of the box establishing the <a href="#establish-an-orthogonal-flow" id="ref-for-establish-an-orthogonal-flow">orthogonal flow</a>.
-   In the positioning phase—calculating the positioning offsets, margins, borders, and padding—the dimensions of the box and its containing block are mapped to the <a href="#inline-size" id="ref-for-inline-size③">inline size</a> and <a href="#block-size" id="ref-for-block-size②">block size</a> and calculations are performed according to the writing mode of the *containing block* of the box establishing the <a href="#establish-an-orthogonal-flow" id="ref-for-establish-an-orthogonal-flow①">orthogonal flow</a>.

Since <span class="css">auto</span> margins are resolved consistent with the containing block’s writing mode, a box establishing an <a href="#establish-an-orthogonal-flow" id="ref-for-establish-an-orthogonal-flow②">orthogonal flow</a> can, once sized, be aligned or centered within its containing block just like other block-level boxes by using auto margins.

<a href="#example-d9cb469c" class="self-link"></a>

<img src="images/orthogonal.svg" alt="Diagram of a vertical flow box appearing in between two horizontal flow boxes." width="180" />

An example of orthogonal flow

For example, if a vertical block is placed inside a horizontal block, then when calculating the physical height (which is the <a href="#inline-size" id="ref-for-inline-size④">inline size</a>) of the child block the physical height of the parent block is used as the child’s containing block <span id="ref-for-inline-size⑤">inline size</span>, even though the physical height is the <a href="#block-size" id="ref-for-block-size③">block size</a>, not the <span id="ref-for-inline-size⑥">inline size</span>, of the parent block.

On the other hand, because the containing block is in a horizontal writing mode, the vertical margins on the child participate in margin-collapsing, even though they are in the <a href="#inline-axis" id="ref-for-inline-axis②">inline-axis</a> of the child, and horizontal auto margins will expand to fill the containing block, even though they are in the <a href="#block-axis" id="ref-for-block-axis">block-axis</a> of the child.

<a href="#orthogonal-shrink-to-fit" class="self-link"></a> Note that this section requires that when a child box auto-sized in its block axis establishes an orthogonal flow, the used block size of the child is calculated to fit its content; and this resulting content-based size is used as input to the <a href="#inline-axis" id="ref-for-inline-axis③">inline-axis</a> <a href="https://www.w3.org/TR/css-sizing-3/#min-content" id="ref-for-min-content">min-content size</a> and <a href="https://www.w3.org/TR/css-sizing-3/#max-content" id="ref-for-max-content">max-content size</a> of the parent.

This means that when applying shrink-to-fit formula to a box such as an inline-block, float, or table-cell, if its child establishes an orthogonal flow, the calculation dependency must be changed so that the sizing phase of the child runs first and its used <a href="#block-size" id="ref-for-block-size④">block size</a> becomes an input to the <a href="#inline-size" id="ref-for-inline-size⑦">inline-size</a> shrink-to-fit formula of the parent.

#### <span class="secno">7.3.1. </span><span class="content"> Available Space of Orthogonal Flows</span><a href="#orthogonal-auto" class="self-link"></a>

It is common in CSS for a containing block to have a definite <a href="#inline-size" id="ref-for-inline-size⑧">inline size</a>, but not a definite <a href="#block-size" id="ref-for-block-size⑤">block size</a>. This typically happens in CSS2.1 when a containing block has an <a href="https://www.w3.org/TR/css-sizing-3/#valdef-width-auto" id="ref-for-valdef-width-auto" class="css">auto</a> height, for example: its width is given by the calculations in [10.3.3](https://www.w3.org/TR/CSS2/visudet.html#blockwidth), but its <span id="ref-for-block-size⑥">block size</span> depends on its contents. In such cases the <a href="https://www.w3.org/TR/css-sizing-3/#available" id="ref-for-available">available inline space</a> is defined as the <span id="ref-for-inline-size⑨">inline size</span> of the containing block; but the <span id="ref-for-available①">available block space</span>, which would otherwise be the <span id="ref-for-block-size⑦">block size</span> of the containing block, is infinite.

Putting a box in an <a href="#establish-an-orthogonal-flow" id="ref-for-establish-an-orthogonal-flow③">orthogonal flow</a> can result in the opposite: for the box’s <a href="https://www.w3.org/TR/css-sizing-3/#available" id="ref-for-available②">available block space</a> to be definite, but its <span id="ref-for-available③">available inline space</span> to be indefinite. In such cases a percentage of the containing block’s <a href="#inline-size" id="ref-for-inline-size①⓪">inline size</a> cannot be defined, and <a href="#inline-axis" id="ref-for-inline-axis④">inline axis</a> computations cannot be resolved. In these cases, an additional <a href="https://www.w3.org/TR/css-sizing-3/#fallback" id="ref-for-fallback">fallback size</a> is used in place of the <span id="ref-for-available④">available inline space</span> for calculations that require a definite <span id="ref-for-available⑤">available inline space</span>: this size is the smallest of

-   the size represented by the containing block’s inner <a href="https://www.w3.org/TR/css-sizing-3/#max-width" id="ref-for-max-width">max size</a> (if that is fixed) floored by its inner <a href="https://www.w3.org/TR/css-sizing-3/#min-width" id="ref-for-min-width">min size</a> (if that is fixed)
-   the nearest ancestor <a href="https://www.w3.org/TR/css-overflow-3/#scrollport" id="ref-for-scrollport">scrollport</a>’s inner size if that is fixed, else / capped by its inner <a href="https://www.w3.org/TR/css-sizing-3/#max-width" id="ref-for-max-width①">max size</a> if that is fixed, floored by its inner <a href="https://www.w3.org/TR/css-sizing-3/#min-width" id="ref-for-min-width①">min size</a> if that is fixed
-   the initial containing block’s size

See [\[css-sizing-3\]](#biblio-css-sizing-3) for further details on CSS sizing terminology and concepts.

#### <span class="secno">7.3.2. </span><span class="content"> Auto-sizing Orthogonal Flow Roots</span><a href="#orthogonal-layout" class="self-link"></a>

The <a href="#inline-axis" id="ref-for-inline-axis⑤">inline-axis</a> <a href="https://www.w3.org/TR/css-sizing-3/#automatic-size" id="ref-for-automatic-size">automatic size</a> of a <a href="https://www.w3.org/TR/css-display-3/#block-level" id="ref-for-block-level">block-level</a> or <a href="https://www.w3.org/TR/css-display-3/#block-container" id="ref-for-block-container③">block container</a> <a href="#establish-an-orthogonal-flow" id="ref-for-establish-an-orthogonal-flow④">orthogonal flow</a> (i.e. the size used when its <a href="https://www.w3.org/TR/css-sizing-3/#preferred-size-properties" id="ref-for-preferred-size-properties">preferred size property</a> is <a href="https://www.w3.org/TR/css-sizing-3/#valdef-width-auto" id="ref-for-valdef-width-auto①" class="css">auto</a>) is calculating as its <a href="https://www.w3.org/TR/css-sizing-3/#fit-content-size" id="ref-for-fit-content-size">fit-content size</a>, i.e. `min(max-content inline size, max(min-content inline size, stretch-fit inline size)`, where the <a href="https://www.w3.org/TR/css-sizing-3/#available" id="ref-for-available⑥">available space</a> used to calculate the <a href="https://www.w3.org/TR/css-sizing-3/#stretch-fit-inline-size" id="ref-for-stretch-fit-inline-size①">stretch-fit inline size</a> is either the size of the <a href="https://www.w3.org/TR/css-display-3/#containing-block" id="ref-for-containing-block">containing block</a> if that is <a href="https://www.w3.org/TR/css-sizing-3/#definite" id="ref-for-definite">definite</a>, or else the <a href="https://www.w3.org/TR/css-sizing-3/#fallback" id="ref-for-fallback①">fallback size</a> as defined [above](#orthogonal-auto).

The <a href="https://www.w3.org/TR/css-sizing-3/#automatic-size" id="ref-for-automatic-size①">automatic sizing</a> of orthogonal <a href="https://www.w3.org/TR/css3-multicol/#multi-column-container" id="ref-for-multi-column-container">multi-column containers</a> (in both axes) and of other <a href="https://www.w3.org/TR/css-display-3/#display-type" id="ref-for-display-type">display types</a> not mentioned above is not defined in this specification.

Note: See also [CSS Writing Modes Level 4](https://www.w3.org/TR/css-writing-modes-4/#auto-multicol).

#### <span class="secno">7.3.3. </span><span class="content"> Fragmenting Orthogonal Flows</span><a href="#orthogonal-pagination" class="self-link"></a>

*This section is informative.*

With regards to fragmentation, the rules in CSS2.1 still hold in vertical writing modes and orthogonal flows: break opportunities do not occur inside line boxes, only between them. UAs that support [\[CSS3COL\]](#biblio-css3col) may break in the (potentially zero-width) gap between columns, however.

Note that if content spills outside the pagination stream established by the root element, the UA is not required to print such content. Authors wishing to mix writing modes with long streams of text are thus encouraged to use CSS columns to keep all content flowing in the document’s pagination direction.

In other words, if your document would require two scrollbars on the screen it probably won’t all print. Fix your layout, e.g. by using [columns](https://www.w3.org/TR/css3-multicol/) so that it all scrolls (and therefore paginates) in one direction if you want to make sure it’ll all print. T-shaped documents tend not to print well.

### <span class="secno">7.4. </span><span class="content"> Flow-Relative Mappings</span><a href="#logical-direction-layout" class="self-link"></a>

Flow-relative directions are calculated with respect to the writing mode of the *containing block* of the box and used to abstract layout rules related to the box properties (margins, borders, padding) and any properties related to positioning the box within its containing block (<a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-float" id="ref-for-propdef-float" class="property">float</a>, <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-clear" id="ref-for-propdef-clear" class="property">clear</a>, <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-top" id="ref-for-propdef-top" class="property">top</a>, <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-bottom" id="ref-for-propdef-bottom" class="property">bottom</a>, <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-left" id="ref-for-propdef-left" class="property">left</a>, <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-right" id="ref-for-propdef-right" class="property">right</a>, <a href="https://www.w3.org/TR/CSS21/tables.html#propdef-caption-side" id="ref-for-propdef-caption-side" class="property">caption-side</a>). For inline-level boxes, the writing mode of the *parent box* is used instead. (The left/right/top/bottom-named properties and values themselves are still mapped physically; with a special exception made for <span id="ref-for-propdef-caption-side①" class="property">caption-side</span>, whose <span class="css">top</span>/<span class="css">top-outside</span> and <span class="css">bottom</span>/<span class="css">bottom-outside</span> values are associated to the <a href="#block-start" id="ref-for-block-start⑧">block-start</a> and <a href="#block-end" id="ref-for-block-end⑥">block-end</a> sides of the table, respectively.)

For example, the margin that is dropped when a box’s inline dimension is [over-constrained](https://www.w3.org/TR/CSS2/visudet.html#blockwidth) is the end margin as determined by the writing mode of the containing block.

The [margin collapsing rules](https://www.w3.org/TR/CSS2/box.html#collapsing-margins) apply exactly with the *<a href="#block-start" id="ref-for-block-start⑨">block-start</a> margin* substituted for the top margin and the *<a href="#block-end" id="ref-for-block-end⑦">block-end</a> margin* substituted for the bottom margin. Similarly the <a href="#block-start" id="ref-for-block-start①⓪">block-start</a> padding and border are substituted for the top padding and border, and the <a href="#block-end" id="ref-for-block-end⑧">block-end</a> padding and border substituted for the bottom padding and border. Note this means only <span id="ref-for-block-start①①">block-start</span> and <span id="ref-for-block-end⑨">block-end</span> margins ever collapse.

Flow-relative directions are calculated with respect to the writing mode of the box and used to abstract layout related to the box’s contents:

-   The initial value of the <a href="https://www.w3.org/TR/css-text-3/#propdef-text-align" id="ref-for-propdef-text-align②" class="property">text-align</a> property aligns to the <a href="#start" id="ref-for-start⑤">start</a> edge of the line box.
-   The <a href="https://www.w3.org/TR/css-text-3/#propdef-text-indent" id="ref-for-propdef-text-indent" class="property">text-indent</a> property indents from the <a href="#start" id="ref-for-start⑥">start</a> edge of the line box.
-   For tables, the ordering of columns begins on the <a href="#inline-start" id="ref-for-inline-start⑥">inline-start</a> side of the table, and the ordering of rows begins on the <a href="#block-start" id="ref-for-block-start①②">block-start</a> side of the table.

### <span class="secno">7.5. </span><span class="content"> Line-Relative Mappings</span><a href="#line-mappings" class="self-link"></a>

The <a href="#line-relative-direction" id="ref-for-line-relative-direction">line-relative directions</a> are <a href="#over" id="ref-for-over③">over</a>, <a href="#under" id="ref-for-under③">under</a>, <a href="#line-left" id="ref-for-line-left⑥">line-left</a>, and <a href="#line-right" id="ref-for-line-right⑤">line-right</a>. In an LTR <a href="#valdef-writing-mode-horizontal-tb" id="ref-for-valdef-writing-mode-horizontal-tb⑨" class="css">horizontal-tb</a> writing mode, they correspond to the top, bottom, left, and right directions, respectively.

The <a href="#line-right" id="ref-for-line-right⑥">line-right</a> and <a href="#line-left" id="ref-for-line-left⑦">line-left</a> directions are calculated with respect to the writing mode of the box and used to interpret the <span class="css">left</span> and <span class="css">right</span> values of the following properties:

-   the <a href="https://www.w3.org/TR/css-text-3/#propdef-text-align" id="ref-for-propdef-text-align③" class="property">text-align</a> property [\[CSS2\]](#biblio-css2)

The <a href="#line-right" id="ref-for-line-right⑦">line-right</a> and <a href="#line-left" id="ref-for-line-left⑧">line-left</a> directions are calculated with respect to the writing mode of the *containing block* of the box and used to interpret the <span class="css">left</span> and <span class="css">right</span> values of the following properties:

-   the <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-float" id="ref-for-propdef-float①" class="property">float</a> property [\[CSS2\]](#biblio-css2)
-   the <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-clear" id="ref-for-propdef-clear①" class="property">clear</a> property [\[CSS2\]](#biblio-css2)
-   the <a href="https://www.w3.org/TR/CSS21/tables.html#propdef-caption-side" id="ref-for-propdef-caption-side②" class="property">caption-side</a> property [\[CSS2\]](#biblio-css2)

The <a href="#over" id="ref-for-over④">over</a> and <a href="#under" id="ref-for-under④">under</a> directions are calculated with respect to the writing mode of the box and used to define the interpretation of the "top" (over) and "bottom" (under) sides of the line box as follows:

-   For the <a href="https://www.w3.org/TR/css-inline-3/#propdef-vertical-align" id="ref-for-propdef-vertical-align⑦" class="property">vertical-align</a> property, the "top" of the line box is its <a href="#over" id="ref-for-over⑤">over</a> edge; the "bottom" of the line box is its under edge. Positive length and percentage values shift the baseline towards the <a href="#line-over" id="ref-for-line-over③">line-over</a> edge. [\[CSS2\]](#biblio-css2)
-   For the <a href="https://www.w3.org/TR/css-text-decor-3/#propdef-text-decoration" id="ref-for-propdef-text-decoration" class="property">text-decoration</a> property, the underline is drawn on the <a href="#under" id="ref-for-under⑤">under</a> side of the text; the overline is drawn on the <a href="#over" id="ref-for-over⑥">over</a> side of the text. [\[CSS2\]](#biblio-css2) <span class="note">Note that the CSS Text Decoration Module defines this in more detail and provides additional controls for controlling the position of underlines and overlines. [\[CSS3-TEXT-DECOR\]](#biblio-css3-text-decor)</span>

### <span class="secno">7.6. </span><span class="content"> Purely Physical Mappings</span><a href="#physical-only" class="self-link"></a>

The following values are purely physical in their definitions and do not respond to changes in writing mode:

-   the <a href="https://www.w3.org/TR/css-masking-1/#funcdef-rect" id="ref-for-funcdef-rect" class="css">rect()</a> notation of the <a href="https://www.w3.org/TR/CSS21/visufx.html#propdef-clip" id="ref-for-propdef-clip" class="property">clip</a> property [\[CSS2\]](#biblio-css2)
-   the background properties [\[CSS2\]](#biblio-css2) [\[CSS3BG\]](#biblio-css3bg)
-   the border-image properties [\[CSS3BG\]](#biblio-css3bg)
-   the offsets of the <a href="https://www.w3.org/TR/css3-background/#propdef-box-shadow" id="ref-for-propdef-box-shadow" class="property">box-shadow</a> and <a href="https://www.w3.org/TR/css-text-decor-3/#propdef-text-shadow" id="ref-for-propdef-text-shadow" class="property">text-shadow</a> properties

<span class="secno">8. </span><span class="content"> The Principal Writing Mode</span><a href="#principal-flow" class="self-link"></a>
--------------------------------------------------------------------------------------------------------------------------------------

The principal writing mode of the document is determined by the <a href="https://www.w3.org/TR/css-cascade-4/#used-value" id="ref-for-used-value③">used</a> <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode②③" class="property">writing-mode</a>, <a href="#propdef-direction" id="ref-for-propdef-direction③③" class="property">direction</a>, and <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation①④" class="property">text-orientation</a> values of the root element. This writing mode is used, for example, to determine the direction of scrolling and the default <a href="https://www.w3.org/TR/css3-page/#page-progression" id="ref-for-page-progression">page progression</a> direction.

As a special case for handling HTML documents, if the root element has a `body` child element [\[HTML\]](#biblio-html), the <a href="https://www.w3.org/TR/css-cascade-4/#used-value" id="ref-for-used-value④">used value</a> of the of <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode②④" class="property">writing-mode</a> and <a href="#propdef-direction" id="ref-for-propdef-direction③④" class="property">direction</a> properties on root element are taken from the <a href="https://www.w3.org/TR/css-cascade-4/#computed-value" id="ref-for-computed-value②">computed</a> <span id="ref-for-propdef-writing-mode②⑤" class="property">writing-mode</span> and <span id="ref-for-propdef-direction③⑤" class="property">direction</span> of the first such child element instead of from the root element’s own values. The UA *may* also propagate the value of <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation①⑤" class="property">text-orientation</a> in this manner. Note that this does not affect the computed values of <span id="ref-for-propdef-writing-mode②⑥" class="property">writing-mode</span>, <span id="ref-for-propdef-direction③⑥" class="property">direction</span>, or <span id="ref-for-propdef-text-orientation①⑥" class="property">text-orientation</span> of the root element itself.

Note: Propagation is done on used values rather than computed values to avoid disrupting other aspects of style computation, such as <a href="https://www.w3.org/TR/css-cascade-4/#inheritance" id="ref-for-inheritance">inheritance</a>, [logical property mapping logic](https://www.w3.org/TR/css-logical-1/#box), or [length value computation](https://www.w3.org/TR/css-values-4/#lengths).

### <span class="secno">8.1. </span><span class="content"> Propagation to the Initial Containing Block</span><a href="#icb" class="self-link"></a>

The <a href="#principal-writing-mode" id="ref-for-principal-writing-mode">principal writing mode</a> is propagated to the <a href="https://www.w3.org/TR/css-display-3/#initial-containing-block" id="ref-for-initial-containing-block">initial containing block</a> and to the viewport, thereby affecting the layout of the root element and the scrolling direction of the viewport.

### <span class="secno">8.2. </span><span class="content"> Page Flow: the page progression direction</span><a href="#page-direction" class="self-link"></a>

In paged media CSS classifies all pages as either left or right pages. The <a href="https://www.w3.org/TR/css3-page/#page-progression" id="ref-for-page-progression①">page progression</a> direction (see [\[CSS3PAGE\]](#biblio-css3page)), which determines whether the left or right page in a spread is first in the flow and whether the first page is by default a left or right page, depends on the <a href="#principal-writing-mode" id="ref-for-principal-writing-mode①">principal writing mode</a> as follows:

<table><thead><tr class="header"><th><a href="#principal-writing-mode" id="ref-for-principal-writing-mode②">principal writing mode</a></th><th><a href="https://www.w3.org/TR/css3-page/#page-progression" id="ref-for-page-progression②">page progression</a></th></tr></thead><tbody><tr class="odd"><td><a href="#valdef-writing-mode-horizontal-tb" id="ref-for-valdef-writing-mode-horizontal-tb①⓪" class="css">horizontal-tb</a> and <a href="#valdef-direction-ltr" id="ref-for-valdef-direction-ltr⑧" class="css">ltr</a></td><td>left-to-right</td></tr><tr class="even"><td><a href="#valdef-writing-mode-horizontal-tb" id="ref-for-valdef-writing-mode-horizontal-tb①①" class="css">horizontal-tb</a> and <a href="#valdef-direction-rtl" id="ref-for-valdef-direction-rtl⑧" class="css">rtl</a></td><td>right-to-left</td></tr><tr class="odd"><td><a href="#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl①②" class="css">vertical-rl</a></td><td>right-to-left</td></tr><tr class="even"><td><a href="#valdef-writing-mode-vertical-lr" id="ref-for-valdef-writing-mode-vertical-lr⑦" class="css">vertical-lr</a></td><td>left-to-right</td></tr></tbody></table>

Note: Unless otherwise overridden, the first page of a document begins on the second half of a spread, e.g. on the right page in a left-to-right page progression.

<span class="secno">9. </span><span class="content"> Glyph Composition</span><a href="#text-combine" class="self-link"></a>
---------------------------------------------------------------------------------------------------------------------------

<span id="text-combine-horizontal"></span>

### <span class="secno">9.1. </span><span class="content"> Horizontal-in-Vertical Composition: the <a href="#propdef-text-combine-upright" id="ref-for-propdef-text-combine-upright" class="property">text-combine-upright</a> property</span><a href="#text-combine-upright" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>text-combine-upright</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#value-defs">Value:</a></td><td>none <a href="https://www.w3.org/TR/css-values-4/#comb-one" id="ref-for-comb-one①④">|</a> all</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#initial-values">Initial:</a></td><td>none</td></tr><tr class="even"><td>Applies to:</td><td>non-replaced inline elements</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#inherited-property">Inherited:</a></td><td>yes</td></tr><tr class="even"><td><a href="https://drafts.csswg.org/css-values/#percentages">Percentages:</a></td><td>n/a</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/css-cascade/#computed">Computed value:</a></td><td>specified keyword</td></tr><tr class="even"><td>Canonical order:</td><td>n/a</td></tr><tr class="odd"><td><a href="https://drafts.csswg.org/web-animations/#animation-type">Animation type:</a></td><td>not animatable</td></tr></tbody></table>

This property specifies the combination of multiple <a href="https://www.w3.org/TR/css-text-3/#typographic-character-unit" id="ref-for-typographic-character-unit⑧">typographic character units</a> into the space of a single <span id="ref-for-typographic-character-unit⑨">typographic character unit</span>. If the combined text is wider than 1em, the UA must fit the contents within 1em, see below. The resulting composition is treated as a single upright glyph for the purposes of layout and decoration. This property only has an effect in vertical writing modes. Values have the following meanings:

none   
No special processing.

all<a href="#valdef-text-combine-upright-all" class="self-link"></a>   
Attempt to typeset horizontally all consecutive <a href="https://www.w3.org/TR/css-text-3/#typographic-character-unit" id="ref-for-typographic-character-unit①⓪">typographic character units</a> within the box such that they take up the space of a single <span id="ref-for-typographic-character-unit①①">typographic character unit</span> within the vertical line box.

<a href="#example-8f7f7a77" class="self-link"></a>

In East Asian documents, the <span class="css">text-combine-upright</span> effect is often used to display Latin-based strings such as components of a date or letters of an initialism, always in a horizontal writing mode regardless of the writing mode of the line:

![Diagram of tate-chu-yoko, showing the two digits of a date set halfwidth side-by-side in a vertical column of text](images/tate-chu-yoko.png)

Example of horizontal-in-vertical *tate-chu-yoko*

The figure is the result of the rules

    date span { text-combine-upright: all; }

and the following markup:

    <date>平成<span>20</span>年4月<span>16</span>日に</date>

In Japanese, this effect is known as *tate-chu-yoko*.

Future levels of CSS Writing Modes will introduce values to automatically detect commonly-affected sequences. For example, [CSS Writing Modes Level 4](https://www.w3.org/TR/css-writing-modes-4/) introduces the <span class="css">digits</span> value to combine sequences of digits.

#### <span class="secno">9.1.1. </span><span class="content"> Text Run Rules</span><a href="#text-combine-runs" class="self-link"></a>

To avoid complexity in the rendering and layout, <a href="#propdef-text-combine-upright" id="ref-for-propdef-text-combine-upright①" class="property">text-combine-upright</a> can only combine plain text: consecutive <a href="https://www.w3.org/TR/css-text-3/#typographic-character-unit" id="ref-for-typographic-character-unit①②">typographic character units</a> that are not interrupted by a box boundary.

However, because the property inherits, the UA should ensure that the contents of the box effecting the combination are not part of an otherwise-combinable sequence that happens to begin or end outside the box; if so, then the text is laid out normally, as if <a href="#propdef-text-combine-upright" id="ref-for-propdef-text-combine-upright②" class="property">text-combine-upright</a> were <a href="#valdef-text-combine-upright-none" id="ref-for-valdef-text-combine-upright-none" class="css">none</a>.

<a href="#example-16eb3bf1" class="self-link"></a>

For example, given the rule

    tcy { text-combine-upright: all; }

if the following markup were given:

    <tcy>12<span>34</span></tcy>

no text would combine.

#### <span class="secno">9.1.2. </span><span class="content"> Layout Rules</span><a href="#text-combine-layout" class="self-link"></a>

When combining text as for <a href="#propdef-text-combine-upright" id="ref-for-propdef-text-combine-upright③" class="css">text-combine-upright: all</a>, the glyphs of the combined text are <a href="#bidi-isolate" id="ref-for-bidi-isolate①">bidi-isolated</a> and composed horizontally (ignoring <a href="https://www.w3.org/TR/css-text-3/#propdef-letter-spacing" id="ref-for-propdef-letter-spacing" class="property">letter-spacing</a> and any forced line breaks, but using the specified font settings), similar to the contents of an <a href="https://www.w3.org/TR/css-display-3/#valdef-display-inline-block" id="ref-for-valdef-display-inline-block①" class="css">inline-block</a> box with a <a href="#horizontal-writing-mode" id="ref-for-horizontal-writing-mode①">horizontal writing mode</a> and a <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-line-height" id="ref-for-propdef-line-height①" class="property">line-height</a> of <span class="css">1em</span>. Processing of <a href="https://www.w3.org/TR/css-text-3/#white-space" id="ref-for-white-space">document white space</a> included in the combined text is not defined in this level. The effective size of the composition is assumed to be 1em square; anything outside the square is not measured for layout purposes. The UA should center the glyphs horizontally and vertically within the measured 1em square.

The baseline of the resulting composition must be chosen such that the square is centered between the text-over and text-under baselines of its parent inline box prior to any baseline alignment shift (<a href="https://www.w3.org/TR/css-inline-3/#propdef-vertical-align" id="ref-for-propdef-vertical-align⑧" class="property">vertical-align</a>). For bidi reordering, the composition is treated the same as a <a href="https://www.w3.org/TR/css-text-3/#typographic-character-unit" id="ref-for-typographic-character-unit①③">typographic character unit</a> with <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation①⑦" class="css">text-orientation: upright</a>. For line breaking before and after the composition, it is treated as a regular inline with its actual contents. For other text layout purposes, e.g. emphasis marks, text-decoration, spacing, etc. the resulting composition is treated as a single glyph representing the Object Replacement Character U+FFFC.

#### <span class="secno">9.1.3. </span><span class="content"> Compression Rules</span><a href="#text-combine-compression" class="self-link"></a>

The UA must ensure that the combined advance width of the composition fits within 1em by compressing the combined text if necessary. (This does not necessarily mean that the glyphs will fit within 1em, as some glyphs are designed to draw outside their geometric boundaries.) OpenType implementations *must* use width-specific variants (OpenType features `hwid`/`twid`/`qwid`; other glyph-width features such as `fwid` or `pwid` are not included) to compress text in cases where those variants are available for all <a href="https://www.w3.org/TR/css-text-3/#typographic-character-unit" id="ref-for-typographic-character-unit①④">typographic character units</a> in the composition. Otherwise, the UA may use any means to compress the text, including substituting half-width, third-width, and/or quarter-width glyphs provided by the font, using other font features designed to compress text horizontally, scaling the text geometrically, or any combination thereof.

<a href="#example-da304b32" class="self-link"></a>

For example, a simple OpenType-based implementation might compress the text as follows:

1.  Enable 1/n-width glyphs for combined text of n <a href="https://www.w3.org/TR/css-text-3/#typographic-character-unit" id="ref-for-typographic-character-unit①⑤">typographic character units</a> (i.e. use OpenType `hwid` for 2 <span id="ref-for-typographic-character-unit①⑥">typographic character units</span>, `twid` for 3 <span id="ref-for-typographic-character-unit①⑦">typographic character units</span>, etc.) if the number of <span id="ref-for-typographic-character-unit①⑧">typographic character units</span> &gt; 1. Note that the number of <span id="ref-for-typographic-character-unit①⑨">typographic character units</span> ≠ number of Unicode codepoints!
2.  If the result is wider than 1em, horizontally scale the result to 1em.

A different implementation that utilizes OpenType layout features might compose the text first with normal glyphs to see if that fits, then substitute in half-width or third-width forms as available and necessary, possibly adjusting its approach or combining it with scaling operations depending on the available glyph substitutions.

In some fonts, the ideographic glyphs are given a compressed design such that they are 1em wide but shorter than 1em tall. To accommodate such fonts, the UA may vertically scale the composition to match the advance height of 水 U+6C34 as rendered according to the specified font settings. In such a case the resulting composition assumes the advance height of 水 U+6C34 rather than 1em.

##### <span class="secno">9.1.3.1. </span><span class="content"> Full-width Characters</span><a href="#text-combine-fullwidth" class="self-link"></a>

In order to preserve typographic color when compressing the text to 1em, when the combined text consists of more than one <a href="https://www.w3.org/TR/css-text-3/#typographic-character-unit" id="ref-for-typographic-character-unit②⓪">typographic character unit</a>, then any full-width <span id="ref-for-typographic-character-unit②①">typographic character units</span> should first be converted to their non-full-width equivalents by reversing the algorithm defined for <a href="https://www.w3.org/TR/css-text-3/#propdef-text-transform" id="ref-for-propdef-text-transform" class="css">text-transform: full-width</a> in [\[CSS-TEXT-3\]](#biblio-css-text-3) before applying other compression techniques.

Properties that affect glyph selection, such as the <a href="https://www.w3.org/TR/css-fonts-3/#propdef-font-variant" id="ref-for-propdef-font-variant" class="css">font-variant</a> and <a href="https://www.w3.org/TR/css-fonts-4/#propdef-font-feature-settings" id="ref-for-propdef-font-feature-settings" class="css">font-feature-settings</a> properties defined in [\[CSS3-FONTS\]](#biblio-css3-fonts), can potentially affect the selection of variants for characters included in combined text runs. Authors are advised to use these properties with care when <a href="#propdef-text-combine-upright" id="ref-for-propdef-text-combine-upright④" class="property">text-combine-upright</a> is also used.

<span class="secno">10. </span><span class="content">Privacy and Security Considerations</span><a href="#priv-sec" class="self-link"></a>
-----------------------------------------------------------------------------------------------------------------------------------------

This specification introduces no new privacy leaks, or security considerations beyond "implement it correctly".

<span class="content">Changes</span><a href="#changes" class="self-link"></a>
-----------------------------------------------------------------------------

### <span class="content"> Changes since the [September 2019 CSS Writing Modes Module Level 3 Candidate Recommendation](https://www.w3.org/TR/2019/CR-css-writing-modes-3-20190903)</span><a href="#changes-20190903" class="self-link"></a>

No substantive change; minor editorial fixes (see issue [4293](https://github.com/w3c/csswg-drafts/issues/4293), [4272](https://github.com/w3c/csswg-drafts/issues/4272), and [4273](https://github.com/w3c/csswg-drafts/issues/4273)).

### <span class="content"> Changes since the [July 2019 CSS Writing Modes Module Level 3 Candidate Recommendation](https://www.w3.org/TR/2019/CR-css-writing-modes-3-20190730/)</span><a href="#changes-20190730" class="self-link"></a>

-   Added back accidentally-dropped rules for sizing <a href="#establish-an-orthogonal-flow" id="ref-for-establish-an-orthogonal-flow⑤">orthogonal flows</a>. Updated wording to use current [\[css-sizing-3\]](#biblio-css-sizing-3) terminology. ([Issue 4220](https://github.com/w3c/csswg-drafts/issues/4220))

### <span class="content"> Changes since the [May 2018 CSS Writing Modes Module Level 3 Candidate Recommendation](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)</span><a href="#changes-201805" class="self-link"></a>

-   Clarified that propagation of the principal writing mode from the body element to the initial containing block and viewport does affect the used value on root element as well, but not its computed value. Also, optionally allow propagating <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation①⑧" class="property">text-orientation</a> as well. ([Issue 3066](https://github.com/w3c/csswg-drafts/issues/3066))
-   Make the processing of white space in a <a href="#propdef-text-combine-upright" id="ref-for-propdef-text-combine-upright⑤" class="property">text-combine-upright</a> combined text sequence explicitely undefined in this level ([Issue 4139](https://github.com/w3c/csswg-drafts/issues/4139))

    > When combining text as for <a href="#propdef-text-combine-upright" id="ref-for-propdef-text-combine-upright⑥" class="css">text-combine-upright: all</a>, the glyphs of the combined text are <a href="#bidi-isolate" id="ref-for-bidi-isolate②">bidi-isolated</a> and composed horizontally (ignoring <a href="https://www.w3.org/TR/css-text-3/#propdef-letter-spacing" id="ref-for-propdef-letter-spacing①" class="property">letter-spacing</a> and any forced line breaks, but using the specified font settings), similar to the contents of an <a href="https://www.w3.org/TR/css-display-3/#valdef-display-inline-block" id="ref-for-valdef-display-inline-block②" class="css">inline-block</a> box with a <a href="#horizontal-writing-mode" id="ref-for-horizontal-writing-mode②">horizontal writing mode</a> and a <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-line-height" id="ref-for-propdef-line-height②" class="property">line-height</a> of <span class="css">1em</span>. <span class="underline">Processing of <a href="https://www.w3.org/TR/css-text-3/#white-space" id="ref-for-white-space①">document white space</a> included in the combined text is not defined in this level.</span>

### <span class="content"> Changes since the [December 2017 CSS Writing Modes Module Level 3 Candidate Recommendation](https://www.w3.org/TR/2017/CR-css-writing-modes-3-20171207/)</span><a href="#changes-201712" class="self-link"></a>

-   Fixed the fallback “available space” for orthogonal flows to handle <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-max-height" id="ref-for-propdef-max-height①" class="property">max-height</a> (and <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-min-height" id="ref-for-propdef-min-height①" class="property">min-height</a>) which it forgot to consider. ([Issue 2239](https://github.com/w3c/csswg-drafts/issues/2239))

### <span class="content"> Changes since the [December 2015 CSS Writing Modes Module Level 3 Candidate Recommendation](https://www.w3.org/TR/2015/CR-css-writing-modes-3-20151215/)</span><a href="#changes-201512" class="self-link"></a>

-   Deferred the <a href="https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-sideways-lr" id="ref-for-valdef-writing-mode-sideways-lr①" class="css">sideways-lr</a> and <a href="https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-sideways-rl" id="ref-for-valdef-writing-mode-sideways-rl" class="css">sideways-rl</a> values of <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode②⑦" class="property">writing-mode</a> to Level 4.
-   Deferred the <span class="css">digits</span> value of <a href="#propdef-text-combine-upright" id="ref-for-propdef-text-combine-upright⑦" class="property">text-combine-upright</a> to Level 4.
-   Deferred the automatic multi-column behavior of orthogonal flows to Level 4.
-   Changed the fallback “available space” for orthogonal flows to use the nearest fixed-size <a href="https://www.w3.org/TR/css-overflow-3/#scrollport" id="ref-for-scrollport①">scrollport</a> where available. ([Issue 1391](https://github.com/w3c/csswg-drafts/issues/1391))
-   Added Privacy and Security Considerations section.
-   Miscellaneous editorial clarifications.

A [Disposition of Comments](https://drafts.csswg.org/css-writing-modes-3/issues-cr-2015) is available.

### <span class="content"> Changes since the [March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](https://www.w3.org/TR/2014/CR-css-writing-modes-3-20140320/)</span><a href="#changes-201311" class="self-link"></a>

-   Fixed orthogonal flows auto-sizing rules to better handle shrink-wrapping.
-   Removed <span class="css">sideways-left</span> and <a href="#valdef-text-orientation-sideways-right" id="ref-for-valdef-text-orientation-sideways-right" class="css">sideways-right</a> value of <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation①⑨" class="property">text-orientation</a>, redefined <a href="#valdef-text-orientation-sideways" id="ref-for-valdef-text-orientation-sideways⑤" class="css">sideways</a> to behave as <span id="ref-for-valdef-text-orientation-sideways-right①" class="css">sideways-right</span>, and added <a href="https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-sideways-lr" id="ref-for-valdef-writing-mode-sideways-lr②" class="css">sideways-lr</a> and <a href="https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-sideways-rl" id="ref-for-valdef-writing-mode-sideways-rl①" class="css">sideways-rl</a> values to <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode②⑧" class="property">writing-mode</a> for usage with non-vertical writing systems. (See [discussion](https://www.w3.org/mid/55982414.1080905@inkedblade.net).)
-   Removed <span class="css">use-glyph-orientation</span> value of <a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation②⓪" class="property">text-orientation</a> and defined <a href="#propdef-glyph-orientation-vertical" id="ref-for-propdef-glyph-orientation-vertical⑤" class="property">glyph-orientation-vertical</a> as an alias of <span id="ref-for-propdef-text-orientation②①" class="property">text-orientation</span> consistent with how CSS aliases are handled (see <a href="https://www.w3.org/TR/CSS21/page.html#propdef-page-break-inside" id="ref-for-propdef-page-break-inside" class="property">page-break-inside</a> for an example).
-   Added handling of degrees as integers in <a href="#propdef-glyph-orientation-vertical" id="ref-for-propdef-glyph-orientation-vertical⑥" class="property">glyph-orientation-vertical</a>, as required for SVG backwards-compatiblity.
-   Removed statements about <a href="https://www.w3.org/TR/css-display-3/#valdef-display-run-in" id="ref-for-valdef-display-run-in" class="css">run-in</a> boxes, since this value was removed from CSS2.1 and has a substantially different model in CSS Display Level 3. Replaced with a generalized statement about all display types, using new [\[CSS-DISPLAY-3\]](#biblio-css-display-3) terminology.
-   Changed to <a href="#principal-writing-mode" id="ref-for-principal-writing-mode③">propagate the computed values</a> of the <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode②⑨" class="property">writing-mode</a> and the <a href="#propdef-direction" id="ref-for-propdef-direction③⑦" class="property">direction</a> property from body child element to the initial containing block.
-   Changed the <a href="https://www.w3.org/TR/CSS21/tables.html#propdef-caption-side" id="ref-for-propdef-caption-side③" class="property">caption-side</a> property to [flow-relative mappings](#logical-direction-layout).
-   Specified that SVG <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode③⓪" class="property">writing-mode</a> values compute through to new equivalents.
-   Specified that <a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode③①" class="property">writing-mode</a> does not apply to <a href="https://drafts.csswg.org/css-ruby-1/#ruby-base-container-box" id="ref-for-ruby-base-container-box">ruby base containers</a> and <a href="https://drafts.csswg.org/css-ruby-1/#ruby-annotation-container-box" id="ref-for-ruby-annotation-container-box">ruby annotation containers</a>
-   Made several editorial improvements and marked some features [at risk](#status).

<span class="content"> Acknowledgements</span><a href="#acknowledgements" class="self-link"></a>
------------------------------------------------------------------------------------------------

L. David Baron, Brian Birtles, James Clark, John Daggett, Nami Fujii, Daisaku Hataoka, Martin Heijdra, Laurentiu Iancu, Richard Ishida, Jonathan Kew, Yasuo Kida, Tatsuo Kobayashi, Toshi Kobayashi, Ken Lunde, Shunsuke Matsuki, Nat McCully, Eric Muller, Paul Nelson, Kenzou Onozawa, Chris Pratley, Xidorn Quan, Florian Rivoal, Dwayne Robinson, Simon Sapin, Marcin Sawicki, Dirk Schulze, Hajime Shiozawa, Alan Stearns, Michel Suignard, Takao Suzuki, Gérard Talbot, Masataka Yakura, Taro Yamamoto, Steve Zilles

<span class="content">Appendix A: Vertical Scripts in Unicode</span><a href="#script-orientations" class="self-link"></a>
-------------------------------------------------------------------------------------------------------------------------

*This section is informative.*

This appendix lists the <a href="#vertical-only" id="ref-for-vertical-only①">vertical-only</a> and <a href="#bi-orientational" id="ref-for-bi-orientational②">bi-orientational</a> scripts in Unicode 6.0 [\[UNICODE\]](#biblio-unicode) and their transformation from horizontal to vertical orientation. Any script not listed explicitly is assumed to be <a href="#horizontal-only" id="ref-for-horizontal-only②">horizontal-only</a>. The script classification of Unicode characters is given by [\[UAX24\]](#biblio-uax24).

Vertical Scripts in Unicode

Code

Name

Transform (Clockwise)

Vertical Intrinsic Direction

Bopo

Bopomofo

0°

ttb

Egyp

Egyptian Hieroglyphs

0°

ttb

Hira

Hiragana

0°

ttb

Kana

Katakana

0°

ttb

Hani

Han

0°

ttb

Hang

Hangul

0°

ttb

Merc

Meroitic Cursive

0°

ttb

Mero

Meroitic Hieroglyphs

0°

ttb

Mong

Mongolian

90°

ttb

Ogam

Ogham

-90°

btt

Orkh

Old Turkic

-90°

ttb

Phag

Phags Pa

90°

ttb

Yiii

Yi

0°

ttb

**Exceptions:** For the purposes of this specification, all fullwidth (F) and wide (W) characters are treated as belonging to a vertical script, and halfwidth characters (H) are treated as belonging to a <a href="#horizontal-script" id="ref-for-horizontal-script">horizontal script</a>. [\[UAX11\]](#biblio-uax11)

Note that for <a href="#vertical-only" id="ref-for-vertical-only②">vertical-only</a> characters (such as Mongolian and Phags Pa letters), the glyphs in the Unicode code charts are shown in their vertical orientation. In horizontal text, they are typeset in a 90° counter-clockwise rotation from this orientation.

Due to limitations in the current featureset of Unicode Technical Report 50 and CSS Writing Modes, vertical <a href="#valdef-text-orientation-mixed" id="ref-for-valdef-text-orientation-mixed⑧" class="css">mixed</a> typesetting cannot automatically handle either Ogham or Old Turkic. For these scripts, <a href="https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-sideways-lr" id="ref-for-valdef-writing-mode-sideways-lr③" class="css">sideways-lr</a> (in [CSS Writing Modes Level 4](https://www.w3.org/TR/css-writing-modes-4/)) can be used to typeset passages.

<span class="content"> Conformance</span><a href="#conformance" class="self-link"></a>
--------------------------------------------------------------------------------------

### <span class="content"> Document conventions</span><a href="#document-conventions" class="self-link"></a>

Conformance requirements are expressed with a combination of descriptive assertions and RFC 2119 terminology. The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in the normative parts of this document are to be interpreted as described in RFC 2119. However, for readability, these words do not appear in all uppercase letters in this specification.

All of the text of this specification is normative except sections explicitly marked as non-normative, examples, and notes. [\[RFC2119\]](#biblio-rfc2119)

Examples in this specification are introduced with the words “for example” or are set apart from the normative text with `class="example"`, like this:

<a href="#example-ae2b6bc0" class="self-link"></a>

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

-   [abstract dimensions](#abstract-dimensions), in §6.1
-   [all](#valdef-text-combine-upright-all), in §9.1
-   [alphabetic baseline](#alphabetic-baseline), in §4.2
-   [baseline](#baseline), in §4.1
-   [baseline table](#baseline-table), in §4.1
-   [bidi-isolate](#bidi-isolate), in §2.2
-   [bidi-isolated](#bidi-isolate), in §2.2
-   [bidi isolation](#bidi-isolate), in §2.2
-   [bidi-override](#valdef-unicode-bidi-bidi-override), in §2.2
-   [bidi paragraph](#bidi-paragraph), in §2.4
-   [bidirectionality](#bidirectionality), in §2
-   [bi-orientational](#bi-orientational), in §5
-   [bi-orientational transform](#bi-orientational-transform), in §5
-   [block-axis](#block-axis), in §6.1
-   [block axis](#block-axis), in §6.1
-   [block dimension](#block-dimension), in §6.1
-   [block-end](#block-end), in §6.2
-   [block end](#block-end), in §6.2
-   [block flow direction](#block-flow-direction), in §1
-   [block size](#block-size), in §6.1
-   [block-size](#block-size), in §6.1
-   [block start](#block-start), in §6.2
-   [block-start](#block-start), in §6.2
-   [bottom](#physical-bottom), in §6
-   [central baseline](#central-baseline), in §4.2
-   [direction](#propdef-direction), in §2.1
-   [directional embedding](#directional-embedding), in §2.2
-   [directional override](#directional-override), in §2.2
-   [dominant baseline](#dominant-baseline), in §4.4
-   [embed](#valdef-unicode-bidi-embed), in §2.2
-   [end](#end), in §6.2
-   [establish an orthogonal flow](#establish-an-orthogonal-flow), in §7.3
-   [flow-relative](#flow-relative), in §6
-   [flow-relative direction](#flow-relative-direction), in §6.2
-   [forced paragraph break](#forced-paragraph-break), in §2.4
-   [glyph-orientation-vertical](#propdef-glyph-orientation-vertical), in §5.1.3
-   [height](#height), in §6
-   [horizontal axis](#x-axis), in §6
-   [horizontal block flow](#horizontal-block-flow), in §1
-   [horizontal dimension](#horizontal-dimension), in §6
-   [horizontal-only](#horizontal-only), in §5
-   [horizontal script](#horizontal-script), in §5
-   [horizontal-tb](#valdef-writing-mode-horizontal-tb), in §3.2
-   [horizontal writing mode](#horizontal-writing-mode), in §1
-   [inline axis](#inline-axis), in §6.1
-   [inline-axis](#inline-axis), in §6.1
-   [inline base direction](#inline-base-direction), in §1
-   [inline dimension](#inline-dimension), in §6.1
-   [inline end](#inline-end), in §6.2
-   [inline-end](#inline-end), in §6.2
-   [inline size](#inline-size), in §6.1
-   [inline-size](#inline-size), in §6.1
-   [inline start](#inline-start), in §6.2
-   [inline-start](#inline-start), in §6.2
-   [isolate](#valdef-unicode-bidi-isolate), in §2.2
-   [isolated sequence](#isolated-sequence), in §2.2
-   [isolate-override](#valdef-unicode-bidi-isolate-override), in §2.2
-   [isolation](#bidi-isolate), in §2.2
-   [left](#physical-left), in §6
-   [line-left](#line-left), in §6.3
-   [line orientation](#line-orientation), in §6.3
-   [line-over](#line-over), in §6.3
-   [line-relative](#line-relative), in §6
-   [line-relative direction](#line-relative-direction), in §6.3
-   [line-right](#line-right), in §6.3
-   [line-under](#line-under), in §6.3
-   [logical height](#logical-height), in §6.1
-   [logical width](#logical-width), in §6.1
-   [ltr](#valdef-direction-ltr), in §2.1
-   [mixed](#valdef-text-orientation-mixed), in §5.1
-   [none](#valdef-text-combine-upright-none), in §9.1
-   [normal](#valdef-unicode-bidi-normal), in §2.2
-   [orthogonal](#establish-an-orthogonal-flow), in §7.3
-   [orthogonal flow](#establish-an-orthogonal-flow), in §7.3
-   [over](#over), in §6.3
-   [physical](#physical), in §6
-   [physical bottom](#physical-bottom), in §6
-   [physical dimensions](#physical-dimensions), in §6
-   [physical direction](#physical-direction), in §6
-   [physical left](#physical-left), in §6
-   [physical right](#physical-right), in §6
-   [physical top](#physical-top), in §6
-   [plaintext](#valdef-unicode-bidi-plaintext), in §2.2
-   [principal writing mode](#principal-writing-mode), in §8
-   [right](#physical-right), in §6
-   [rtl](#valdef-direction-rtl), in §2.1
-   [sideways](#valdef-text-orientation-sideways), in §5.1
-   [sideways-right](#valdef-text-orientation-sideways-right), in §5.1
-   [start](#start), in §6.2
-   [text-combine-upright](#propdef-text-combine-upright), in §9.1
-   [text-orientation](#propdef-text-orientation), in §5.1
-   [top](#physical-top), in §6
-   [typographic mode](#typographic-mode), in §1
-   [under](#under), in §6.3
-   [unicode-bidi](#propdef-unicode-bidi), in §2.2
-   [upright](#valdef-text-orientation-upright), in §5.1
-   [vertical axis](#y-axis), in §6
-   [vertical block flow](#vertical-block-flow), in §1
-   [vertical dimension](#vertical-dimension), in §6
-   [vertical-lr](#valdef-writing-mode-vertical-lr), in §3.2
-   [vertical-only](#vertical-only), in §5
-   [vertical-rl](#valdef-writing-mode-vertical-rl), in §3.2
-   [vertical script](#vertical-script), in §5
-   [vertical writing mode](#vertical-writing-mode), in §1
-   [width](#width), in §6
-   [writing mode](#writing-mode), in §1
-   [writing-mode](#propdef-writing-mode), in §3.2
-   [x-axis](#x-axis), in §6
-   [y-axis](#y-axis), in §6

<https://www.w3.org/TR/css-box-3/#propdef-margin-bottom>**Referenced in:**

-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-propdef-margin-bottom) [(2)](#ref-for-propdef-margin-bottom①)

<https://www.w3.org/TR/css-box-3/#propdef-margin-left>**Referenced in:**

-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-propdef-margin-left) [(2)](#ref-for-propdef-margin-left①)

<https://www.w3.org/TR/css-box-3/#propdef-margin-right>**Referenced in:**

-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-propdef-margin-right)

<https://www.w3.org/TR/css-box-3/#propdef-margin-top>**Referenced in:**

-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-propdef-margin-top)

<https://www.w3.org/TR/css-break-4/#propdef-box-decoration-break>**Referenced in:**

-   [2.4.5. Reordering-induced Box Fragmentation](#ref-for-propdef-box-decoration-break)

<https://www.w3.org/TR/css-cascade-4/#computed-value>**Referenced in:**

-   [1.1. Module Interactions](#ref-for-computed-value)
-   [5.1. Orienting Text: the text-orientation property](#ref-for-computed-value①)
-   [8. The Principal Writing Mode](#ref-for-computed-value②)

<https://www.w3.org/TR/css-cascade-4/#valdef-all-inherit>**Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-valdef-all-inherit)

<https://www.w3.org/TR/css-cascade-4/#inheritance>**Referenced in:**

-   [8. The Principal Writing Mode](#ref-for-inheritance)

<https://www.w3.org/TR/css-cascade-4/#used-value>**Referenced in:**

-   [5.1. Orienting Text: the text-orientation property](#ref-for-used-value) [(2)](#ref-for-used-value①)
-   [6.4. Abstract-to-Physical Mappings](#ref-for-used-value②)
-   [8. The Principal Writing Mode](#ref-for-used-value③) [(2)](#ref-for-used-value④)

<https://www.w3.org/TR/css-display-3/#block-container>**Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-block-container) [(2)](#ref-for-block-container①)
-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-block-container②)
-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-block-container③)

<https://www.w3.org/TR/css-display-3/#block-formatting-context>**Referenced in:**

-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-block-formatting-context)

<https://www.w3.org/TR/css-display-3/#block-level>**Referenced in:**

-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-block-level)

<https://www.w3.org/TR/css-display-3/#containing-block>**Referenced in:**

-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-containing-block)

<https://www.w3.org/TR/css-display-3/#display-type>**Referenced in:**

-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-display-type)

<https://www.w3.org/TR/css-display-3/#valdef-display-flow>**Referenced in:**

-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-valdef-display-flow)

<https://www.w3.org/TR/css-display-3/#valdef-display-flow-root>**Referenced in:**

-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-valdef-display-flow-root)

<https://www.w3.org/TR/css-display-3/#in-flow>**Referenced in:**

-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-in-flow)

<https://www.w3.org/TR/css-display-3/#independent-formatting-context>**Referenced in:**

-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-independent-formatting-context)

<https://www.w3.org/TR/css-display-3/#initial-containing-block>**Referenced in:**

-   [8.1. Propagation to the Initial Containing Block](#ref-for-initial-containing-block)

<https://www.w3.org/TR/css-display-3/#valdef-display-inline>**Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-valdef-display-inline)
-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-valdef-display-inline①)

<https://www.w3.org/TR/css-display-3/#inline-box>**Referenced in:**

-   [2.4.5. Reordering-induced Box Fragmentation](#ref-for-inline-box)

<https://www.w3.org/TR/css-display-3/#valdef-display-inline-block>**Referenced in:**

-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-valdef-display-inline-block)
-   [9.1.2. Layout Rules](#ref-for-valdef-display-inline-block①)
-   [Changes since the May 2018 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-valdef-display-inline-block②)

<https://www.w3.org/TR/css-display-3/#inner-display-type>**Referenced in:**

-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-inner-display-type) [(2)](#ref-for-inner-display-type①)

<https://www.w3.org/TR/css-display-3/#replaced-element>**Referenced in:**

-   [2.4.3. Bidi Treatment of Atomic Inlines](#ref-for-replaced-element)
-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-replaced-element①)

<https://www.w3.org/TR/css-display-3/#valdef-display-run-in>**Referenced in:**

-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-valdef-display-run-in)

<https://www.w3.org/TR/css-fonts-4/#propdef-font-feature-settings>**Referenced in:**

-   [9.1.3.1. Full-width Characters](#ref-for-propdef-font-feature-settings)

<https://www.w3.org/TR/css3-images/#default-object-size>**Referenced in:**

-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-default-object-size)

<https://www.w3.org/TR/css-inline-3/#root-inline-box>**Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-root-inline-box)

<https://www.w3.org/TR/css-inline-3/#propdef-vertical-align>**Referenced in:**

-   [4. Inline-level Alignment](#ref-for-propdef-vertical-align) [(2)](#ref-for-propdef-vertical-align①)
-   [4.3. Atomic Inline Baselines](#ref-for-propdef-vertical-align②)
-   [4.4. Baseline Alignment](#ref-for-propdef-vertical-align③) [(2)](#ref-for-propdef-vertical-align④) [(3)](#ref-for-propdef-vertical-align⑤)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-propdef-vertical-align⑥)
-   [7.5. Line-Relative Mappings](#ref-for-propdef-vertical-align⑦)
-   [9.1.2. Layout Rules](#ref-for-propdef-vertical-align⑧)

<https://www.w3.org/TR/css-masking-1/#funcdef-rect>**Referenced in:**

-   [7.6. Purely Physical Mappings](#ref-for-funcdef-rect)

<https://www.w3.org/TR/css-overflow-3/#scrollport>**Referenced in:**

-   [7.3.1. Available Space of Orthogonal Flows](#ref-for-scrollport)
-   [Changes since the December 2015 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-scrollport①)

<https://drafts.csswg.org/css-ruby-1/#ruby-annotation-container-box>**Referenced in:**

-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-ruby-annotation-container-box)

<https://drafts.csswg.org/css-ruby-1/#ruby-base-container-box>**Referenced in:**

-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-ruby-base-container-box)

<https://www.w3.org/TR/css-sizing-3/#valdef-width-auto>**Referenced in:**

-   [7.3.1. Available Space of Orthogonal Flows](#ref-for-valdef-width-auto)
-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-valdef-width-auto①)

<https://www.w3.org/TR/css-sizing-3/#automatic-size>**Referenced in:**

-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-automatic-size) [(2)](#ref-for-automatic-size①)

<https://www.w3.org/TR/css-sizing-3/#available>**Referenced in:**

-   [7.3.1. Available Space of Orthogonal Flows](#ref-for-available) [(2)](#ref-for-available①) [(3)](#ref-for-available②) [(4)](#ref-for-available③) [(5)](#ref-for-available④) [(6)](#ref-for-available⑤)
-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-available⑥)

<https://www.w3.org/TR/css-sizing-3/#available>**Referenced in:**

-   [7.3.1. Available Space of Orthogonal Flows](#ref-for-available) [(2)](#ref-for-available①) [(3)](#ref-for-available②) [(4)](#ref-for-available③) [(5)](#ref-for-available④) [(6)](#ref-for-available⑤)
-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-available⑥)

<https://www.w3.org/TR/css-sizing-3/#available>**Referenced in:**

-   [7.3.1. Available Space of Orthogonal Flows](#ref-for-available) [(2)](#ref-for-available①) [(3)](#ref-for-available②) [(4)](#ref-for-available③) [(5)](#ref-for-available④) [(6)](#ref-for-available⑤)
-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-available⑥)

<https://www.w3.org/TR/css-sizing-3/#definite>**Referenced in:**

-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-definite)

<https://www.w3.org/TR/css-sizing-3/#fallback>**Referenced in:**

-   [7.3.1. Available Space of Orthogonal Flows](#ref-for-fallback)
-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-fallback①)

<https://www.w3.org/TR/css-sizing-3/#fit-content-size>**Referenced in:**

-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-fit-content-size)

<https://www.w3.org/TR/css-sizing-3/#max-width>**Referenced in:**

-   [7.3.1. Available Space of Orthogonal Flows](#ref-for-max-width) [(2)](#ref-for-max-width①)

<https://www.w3.org/TR/css-sizing-3/#max-content-inline-size>**Referenced in:**

-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-max-content-inline-size)

<https://www.w3.org/TR/css-sizing-3/#max-content>**Referenced in:**

-   [7.3. Orthogonal Flows](#ref-for-max-content)

<https://www.w3.org/TR/css-sizing-3/#min-width>**Referenced in:**

-   [7.3.1. Available Space of Orthogonal Flows](#ref-for-min-width) [(2)](#ref-for-min-width①)

<https://www.w3.org/TR/css-sizing-3/#min-content-inline-size>**Referenced in:**

-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-min-content-inline-size)

<https://www.w3.org/TR/css-sizing-3/#min-content>**Referenced in:**

-   [7.3. Orthogonal Flows](#ref-for-min-content)

<https://www.w3.org/TR/css-sizing-3/#preferred-size-properties>**Referenced in:**

-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-preferred-size-properties)

<https://www.w3.org/TR/css-sizing-3/#stretch-fit-inline-size>**Referenced in:**

-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-stretch-fit-inline-size) [(2)](#ref-for-stretch-fit-inline-size①)

<https://www.w3.org/TR/css-text-3/#character>**Referenced in:**

-   [5.1.1. Vertical Typesetting and Font Features](#ref-for-character)

<https://www.w3.org/TR/css-text-3/#white-space>**Referenced in:**

-   [9.1.2. Layout Rules](#ref-for-white-space)
-   [Changes since the May 2018 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-white-space①)

<https://www.w3.org/TR/css-text-3/#propdef-letter-spacing>**Referenced in:**

-   [9.1.2. Layout Rules](#ref-for-propdef-letter-spacing)
-   [Changes since the May 2018 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-letter-spacing①)

<https://www.w3.org/TR/css-text-3/#propdef-text-align>**Referenced in:**

-   [6.3. Line-relative Directions](#ref-for-propdef-text-align)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-propdef-text-align①)
-   [7.4. Flow-Relative Mappings](#ref-for-propdef-text-align②)
-   [7.5. Line-Relative Mappings](#ref-for-propdef-text-align③)

<https://www.w3.org/TR/css-text-3/#propdef-text-indent>**Referenced in:**

-   [7.4. Flow-Relative Mappings](#ref-for-propdef-text-indent)

<https://www.w3.org/TR/css-text-3/#propdef-text-transform>**Referenced in:**

-   [9.1.3.1. Full-width Characters](#ref-for-propdef-text-transform)

<https://www.w3.org/TR/css-text-3/#typographic-character-unit>**Referenced in:**

-   [5.1. Orienting Text: the text-orientation property](#ref-for-typographic-character-unit) [(2)](#ref-for-typographic-character-unit①) [(3)](#ref-for-typographic-character-unit②) [(4)](#ref-for-typographic-character-unit③)
-   [5.1.1. Vertical Typesetting and Font Features](#ref-for-typographic-character-unit④) [(2)](#ref-for-typographic-character-unit⑤) [(3)](#ref-for-typographic-character-unit⑥)
-   [5.1.2. Mixed Vertical Orientations](#ref-for-typographic-character-unit⑦)
-   [9.1. Horizontal-in-Vertical Composition: the text-combine-upright property](#ref-for-typographic-character-unit⑧) [(2)](#ref-for-typographic-character-unit⑨) [(3)](#ref-for-typographic-character-unit①⓪) [(4)](#ref-for-typographic-character-unit①①)
-   [9.1.1. Text Run Rules](#ref-for-typographic-character-unit①②)
-   [9.1.2. Layout Rules](#ref-for-typographic-character-unit①③)
-   [9.1.3. Compression Rules](#ref-for-typographic-character-unit①④) [(2)](#ref-for-typographic-character-unit①⑤) [(3)](#ref-for-typographic-character-unit①⑥) [(4)](#ref-for-typographic-character-unit①⑦) [(5)](#ref-for-typographic-character-unit①⑧) [(6)](#ref-for-typographic-character-unit①⑨)
-   [9.1.3.1. Full-width Characters](#ref-for-typographic-character-unit②⓪) [(2)](#ref-for-typographic-character-unit②①)

<https://www.w3.org/TR/css3-values/#angle-value>**Referenced in:**

-   [5.1.3. Obsolete: the SVG1.1 glyph-orientation-vertical property](#ref-for-angle-value)

<https://www.w3.org/TR/css3-values/#integer-value>**Referenced in:**

-   [5.1.3. Obsolete: the SVG1.1 glyph-orientation-vertical property](#ref-for-integer-value)

<https://www.w3.org/TR/css3-values/#length-value>**Referenced in:**

-   [4.4. Baseline Alignment](#ref-for-length-value)

<https://www.w3.org/TR/css3-values/#percentage-value>**Referenced in:**

-   [4.4. Baseline Alignment](#ref-for-percentage-value)

<https://www.w3.org/TR/css-values-4/#css-wide-keywords>**Referenced in:**

-   [1.2. Value Types and Terminology](#ref-for-css-wide-keywords)

<https://www.w3.org/TR/css-values-4/#font-relative-length>**Referenced in:**

-   [1.1. Module Interactions](#ref-for-font-relative-length)

<https://www.w3.org/TR/css-values-4/#comb-one>**Referenced in:**

-   [2.1. Specifying Directionality: the direction property](#ref-for-comb-one)
-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-comb-one①) [(2)](#ref-for-comb-one②) [(3)](#ref-for-comb-one③) [(4)](#ref-for-comb-one④) [(5)](#ref-for-comb-one⑤)
-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-comb-one⑥) [(2)](#ref-for-comb-one⑦)
-   [5.1. Orienting Text: the text-orientation property](#ref-for-comb-one⑧) [(2)](#ref-for-comb-one⑨)
-   [5.1.3. Obsolete: the SVG1.1 glyph-orientation-vertical property](#ref-for-comb-one①⓪) [(2)](#ref-for-comb-one①①) [(3)](#ref-for-comb-one①②) [(4)](#ref-for-comb-one①③)
-   [9.1. Horizontal-in-Vertical Composition: the text-combine-upright property](#ref-for-comb-one①④)

<https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-sideways-lr>**Referenced in:**

-   [5.1.2. Mixed Vertical Orientations](#ref-for-valdef-writing-mode-sideways-lr)
-   [Changes since the December 2015 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-valdef-writing-mode-sideways-lr①)
-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-valdef-writing-mode-sideways-lr②)
-   [Appendix A: Vertical Scripts in Unicode](#ref-for-valdef-writing-mode-sideways-lr③)

<https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-sideways-rl>**Referenced in:**

-   [Changes since the December 2015 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-valdef-writing-mode-sideways-rl)
-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-valdef-writing-mode-sideways-rl①)

<https://www.w3.org/TR/CSS21/tables.html#propdef-border-spacing>**Referenced in:**

-   [7.2. Dimensional Mapping](#ref-for-propdef-border-spacing)

<https://www.w3.org/TR/CSS21/visuren.html#propdef-bottom>**Referenced in:**

-   [7.4. Flow-Relative Mappings](#ref-for-propdef-bottom)

<https://www.w3.org/TR/CSS21/tables.html#propdef-caption-side>**Referenced in:**

-   [7.4. Flow-Relative Mappings](#ref-for-propdef-caption-side) [(2)](#ref-for-propdef-caption-side①)
-   [7.5. Line-Relative Mappings](#ref-for-propdef-caption-side②)
-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-caption-side③)

<https://www.w3.org/TR/CSS21/visuren.html#propdef-clear>**Referenced in:**

-   [7.4. Flow-Relative Mappings](#ref-for-propdef-clear)
-   [7.5. Line-Relative Mappings](#ref-for-propdef-clear①)

<https://www.w3.org/TR/CSS21/visufx.html#propdef-clip>**Referenced in:**

-   [7.6. Purely Physical Mappings](#ref-for-propdef-clip)

<https://www.w3.org/TR/CSS21/visuren.html#propdef-display>**Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-propdef-display) [(2)](#ref-for-propdef-display①)
-   [2.4.3. Bidi Treatment of Atomic Inlines](#ref-for-propdef-display②)
-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-propdef-display③) [(2)](#ref-for-propdef-display④) [(3)](#ref-for-propdef-display⑤)

<https://www.w3.org/TR/CSS21/visuren.html#propdef-float>**Referenced in:**

-   [7.4. Flow-Relative Mappings](#ref-for-propdef-float)
-   [7.5. Line-Relative Mappings](#ref-for-propdef-float①)

<https://www.w3.org/TR/CSS21/visudet.html#propdef-height>**Referenced in:**

-   [7.2. Dimensional Mapping](#ref-for-propdef-height)

<https://www.w3.org/TR/CSS21/visuren.html#propdef-left>**Referenced in:**

-   [7.4. Flow-Relative Mappings](#ref-for-propdef-left)

<https://www.w3.org/TR/CSS21/visudet.html#propdef-line-height>**Referenced in:**

-   [7.2. Dimensional Mapping](#ref-for-propdef-line-height)
-   [9.1.2. Layout Rules](#ref-for-propdef-line-height①)
-   [Changes since the May 2018 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-line-height②)

<https://www.w3.org/TR/CSS21/visudet.html#propdef-max-height>**Referenced in:**

-   [7.2. Dimensional Mapping](#ref-for-propdef-max-height)
-   [Changes since the December 2017 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-max-height①)

<https://www.w3.org/TR/CSS21/visudet.html#propdef-max-width>**Referenced in:**

-   [7.2. Dimensional Mapping](#ref-for-propdef-max-width)

<https://www.w3.org/TR/CSS21/visudet.html#propdef-min-height>**Referenced in:**

-   [7.2. Dimensional Mapping](#ref-for-propdef-min-height)
-   [Changes since the December 2017 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-min-height①)

<https://www.w3.org/TR/CSS21/visudet.html#propdef-min-width>**Referenced in:**

-   [7.2. Dimensional Mapping](#ref-for-propdef-min-width)

<https://www.w3.org/TR/CSS21/page.html#propdef-page-break-inside>**Referenced in:**

-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-page-break-inside)

<https://www.w3.org/TR/CSS21/visuren.html#propdef-right>**Referenced in:**

-   [7.4. Flow-Relative Mappings](#ref-for-propdef-right)

<https://www.w3.org/TR/CSS21/visuren.html#propdef-top>**Referenced in:**

-   [7.4. Flow-Relative Mappings](#ref-for-propdef-top)

<https://www.w3.org/TR/CSS21/visudet.html#propdef-width>**Referenced in:**

-   [7.2. Dimensional Mapping](#ref-for-propdef-width)

<https://www.w3.org/TR/css-fonts-3/#propdef-font-variant>**Referenced in:**

-   [9.1.3.1. Full-width Characters](#ref-for-propdef-font-variant)

<https://www.w3.org/TR/css-text-decor-3/#propdef-text-decoration>**Referenced in:**

-   [7.5. Line-Relative Mappings](#ref-for-propdef-text-decoration)

<https://www.w3.org/TR/css-text-decor-3/#propdef-text-shadow>**Referenced in:**

-   [7.6. Purely Physical Mappings](#ref-for-propdef-text-shadow)

<https://www.w3.org/TR/css3-background/#propdef-box-shadow>**Referenced in:**

-   [7.6. Purely Physical Mappings](#ref-for-propdef-box-shadow)

<https://www.w3.org/TR/css3-multicol/#multi-column-container>**Referenced in:**

-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-multi-column-container)

<https://www.w3.org/TR/css3-page/#page-progression>**Referenced in:**

-   [8. The Principal Writing Mode](#ref-for-page-progression)
-   [8.2. Page Flow: the page progression direction](#ref-for-page-progression①) [(2)](#ref-for-page-progression②)

<https://html.spec.whatwg.org/multipage/sections.html#the-body-element>**Referenced in:**

-   [8. The Principal Writing Mode](#ref-for-the-body-element)

### <span class="content">Terms defined by reference</span><a href="#index-defined-elsewhere" class="self-link"></a>

-   \[css-box-3\] defines the following terms:
    -   <span id="term-for-propdef-margin-bottom" class="dfn-paneled" style="color:initial">margin-bottom</span>
    -   <span id="term-for-propdef-margin-left" class="dfn-paneled" style="color:initial">margin-left</span>
    -   <span id="term-for-propdef-margin-right" class="dfn-paneled" style="color:initial">margin-right</span>
    -   <span id="term-for-propdef-margin-top" class="dfn-paneled" style="color:initial">margin-top</span>
-   \[css-break-4\] defines the following terms:
    -   <span id="term-for-propdef-box-decoration-break" class="dfn-paneled" style="color:initial">box-decoration-break</span>
-   \[CSS-CASCADE-4\] defines the following terms:
    -   <span id="term-for-computed-value" class="dfn-paneled" style="color:initial">computed value</span>
    -   <span id="term-for-valdef-all-inherit" class="dfn-paneled" style="color:initial">inherit</span>
    -   <span id="term-for-inheritance" class="dfn-paneled" style="color:initial">inheritance</span>
    -   <span id="term-for-used-value" class="dfn-paneled" style="color:initial">used value</span>
-   \[CSS-DISPLAY-3\] defines the following terms:
    -   <span id="term-for-block-container" class="dfn-paneled" style="color:initial">block container</span>
    -   <span id="term-for-block-formatting-context" class="dfn-paneled" style="color:initial">block formatting context</span>
    -   <span id="term-for-block-level" class="dfn-paneled" style="color:initial">block-level</span>
    -   <span id="term-for-containing-block" class="dfn-paneled" style="color:initial">containing block</span>
    -   <span id="term-for-display-type" class="dfn-paneled" style="color:initial">display type</span>
    -   <span id="term-for-valdef-display-flow" class="dfn-paneled" style="color:initial">flow</span>
    -   <span id="term-for-valdef-display-flow-root" class="dfn-paneled" style="color:initial">flow-root</span>
    -   <span id="term-for-in-flow" class="dfn-paneled" style="color:initial">in-flow</span>
    -   <span id="term-for-independent-formatting-context" class="dfn-paneled" style="color:initial">independent formatting context</span>
    -   <span id="term-for-initial-containing-block" class="dfn-paneled" style="color:initial">initial containing block</span>
    -   <span id="term-for-valdef-display-inline" class="dfn-paneled" style="color:initial">inline</span>
    -   <span id="term-for-inline-box" class="dfn-paneled" style="color:initial">inline box</span>
    -   <span id="term-for-valdef-display-inline-block" class="dfn-paneled" style="color:initial">inline-block</span>
    -   <span id="term-for-inner-display-type" class="dfn-paneled" style="color:initial">inner display type</span>
    -   <span id="term-for-replaced-element" class="dfn-paneled" style="color:initial">replaced element</span>
    -   <span id="term-for-valdef-display-run-in" class="dfn-paneled" style="color:initial">run-in</span>
-   \[css-fonts-4\] defines the following terms:
    -   <span id="term-for-propdef-font-feature-settings" class="dfn-paneled" style="color:initial">font-feature-settings</span>
-   \[css-images-3\] defines the following terms:
    -   <span id="term-for-default-object-size" class="dfn-paneled" style="color:initial">default object size</span>
-   \[css-inline-3\] defines the following terms:
    -   <span id="term-for-root-inline-box" class="dfn-paneled" style="color:initial">root inline box</span>
    -   <span id="term-for-propdef-vertical-align" class="dfn-paneled" style="color:initial">vertical-align</span>
-   \[css-masking-1\] defines the following terms:
    -   <span id="term-for-funcdef-rect" class="dfn-paneled" style="color:initial">rect()</span>
-   \[css-overflow-3\] defines the following terms:
    -   <span id="term-for-scrollport" class="dfn-paneled" style="color:initial">scrollport</span>
-   \[css-ruby-1\] defines the following terms:
    -   <span id="term-for-ruby-annotation-container-box" class="dfn-paneled" style="color:initial">ruby annotation container</span>
    -   <span id="term-for-ruby-base-container-box" class="dfn-paneled" style="color:initial">ruby base container</span>
-   \[css-sizing-3\] defines the following terms:
    -   <span id="term-for-valdef-width-auto" class="dfn-paneled" style="color:initial">auto</span>
    -   <span id="term-for-automatic-size" class="dfn-paneled" style="color:initial">automatic size</span>
    -   <span id="term-for-available" class="dfn-paneled" style="color:initial">available block space</span>
    -   <span id="term-for-available①" class="dfn-paneled" style="color:initial">available inline space</span>
    -   <span id="term-for-available②" class="dfn-paneled" style="color:initial">available space</span>
    -   <span id="term-for-definite" class="dfn-paneled" style="color:initial">definite</span>
    -   <span id="term-for-fallback" class="dfn-paneled" style="color:initial">fallback size</span>
    -   <span id="term-for-fit-content-size" class="dfn-paneled" style="color:initial">fit-content size</span>
    -   <span id="term-for-max-width" class="dfn-paneled" style="color:initial">max size</span>
    -   <span id="term-for-max-content-inline-size" class="dfn-paneled" style="color:initial">max-content inline size</span>
    -   <span id="term-for-max-content" class="dfn-paneled" style="color:initial">max-content size</span>
    -   <span id="term-for-min-width" class="dfn-paneled" style="color:initial">min size</span>
    -   <span id="term-for-min-content-inline-size" class="dfn-paneled" style="color:initial">min-content inline size</span>
    -   <span id="term-for-min-content" class="dfn-paneled" style="color:initial">min-content size</span>
    -   <span id="term-for-preferred-size-properties" class="dfn-paneled" style="color:initial">preferred size property</span>
    -   <span id="term-for-stretch-fit-inline-size" class="dfn-paneled" style="color:initial">stretch-fit inline size</span>
-   \[CSS-TEXT-3\] defines the following terms:
    -   <span id="term-for-character" class="dfn-paneled" style="color:initial">character</span>
    -   <span id="term-for-white-space" class="dfn-paneled" style="color:initial">document white space</span>
    -   <span id="term-for-propdef-letter-spacing" class="dfn-paneled" style="color:initial">letter-spacing</span>
    -   <span id="term-for-propdef-text-align" class="dfn-paneled" style="color:initial">text-align</span>
    -   <span id="term-for-propdef-text-indent" class="dfn-paneled" style="color:initial">text-indent</span>
    -   <span id="term-for-propdef-text-transform" class="dfn-paneled" style="color:initial">text-transform</span>
    -   <span id="term-for-typographic-character-unit" class="dfn-paneled" style="color:initial">typographic character unit</span>
-   \[CSS-VALUES-3\] defines the following terms:
    -   <span id="term-for-angle-value" class="dfn-paneled" style="color:initial">&lt;angle&gt;</span>
    -   <span id="term-for-integer-value" class="dfn-paneled" style="color:initial">&lt;integer&gt;</span>
    -   <span id="term-for-length-value" class="dfn-paneled" style="color:initial">&lt;length&gt;</span>
    -   <span id="term-for-percentage-value" class="dfn-paneled" style="color:initial">&lt;percentage&gt;</span>
-   \[css-values-4\] defines the following terms:
    -   <span id="term-for-css-wide-keywords" class="dfn-paneled" style="color:initial">css-wide keywords</span>
    -   <span id="term-for-font-relative-length" class="dfn-paneled" style="color:initial">font-relative lengths</span>
    -   <span id="term-for-comb-one" class="dfn-paneled" style="color:initial">|</span>
-   \[css-writing-modes-4\] defines the following terms:
    -   <span id="term-for-valdef-writing-mode-sideways-lr" class="dfn-paneled" style="color:initial">sideways-lr</span>
    -   <span id="term-for-valdef-writing-mode-sideways-rl" class="dfn-paneled" style="color:initial">sideways-rl</span>
-   \[CSS2\] defines the following terms:
    -   <span id="term-for-propdef-border-spacing" class="dfn-paneled" style="color:initial">border-spacing</span>
    -   <span id="term-for-propdef-bottom" class="dfn-paneled" style="color:initial">bottom</span>
    -   <span id="term-for-propdef-caption-side" class="dfn-paneled" style="color:initial">caption-side</span>
    -   <span id="term-for-propdef-clear" class="dfn-paneled" style="color:initial">clear</span>
    -   <span id="term-for-propdef-clip" class="dfn-paneled" style="color:initial">clip</span>
    -   <span id="term-for-propdef-display" class="dfn-paneled" style="color:initial">display</span>
    -   <span id="term-for-propdef-float" class="dfn-paneled" style="color:initial">float</span>
    -   <span id="term-for-propdef-height" class="dfn-paneled" style="color:initial">height</span>
    -   <span id="term-for-propdef-left" class="dfn-paneled" style="color:initial">left</span>
    -   <span id="term-for-propdef-line-height" class="dfn-paneled" style="color:initial">line-height</span>
    -   <span id="term-for-propdef-max-height" class="dfn-paneled" style="color:initial">max-height</span>
    -   <span id="term-for-propdef-max-width" class="dfn-paneled" style="color:initial">max-width</span>
    -   <span id="term-for-propdef-min-height" class="dfn-paneled" style="color:initial">min-height</span>
    -   <span id="term-for-propdef-min-width" class="dfn-paneled" style="color:initial">min-width</span>
    -   <span id="term-for-propdef-page-break-inside" class="dfn-paneled" style="color:initial">page-break-inside</span>
    -   <span id="term-for-propdef-right" class="dfn-paneled" style="color:initial">right</span>
    -   <span id="term-for-propdef-top" class="dfn-paneled" style="color:initial">top</span>
    -   <span id="term-for-propdef-width" class="dfn-paneled" style="color:initial">width</span>
-   \[CSS3-FONTS\] defines the following terms:
    -   <span id="term-for-propdef-font-variant" class="dfn-paneled" style="color:initial">font-variant</span>
-   \[CSS3-TEXT-DECOR\] defines the following terms:
    -   <span id="term-for-propdef-text-decoration" class="dfn-paneled" style="color:initial">text-decoration</span>
    -   <span id="term-for-propdef-text-shadow" class="dfn-paneled" style="color:initial">text-shadow</span>
-   \[CSS3BG\] defines the following terms:
    -   <span id="term-for-propdef-box-shadow" class="dfn-paneled" style="color:initial">box-shadow</span>
-   \[CSS3COL\] defines the following terms:
    -   <span id="term-for-multi-column-container" class="dfn-paneled" style="color:initial">multi-column container</span>
-   \[CSS3PAGE\] defines the following terms:
    -   <span id="term-for-page-progression" class="dfn-paneled" style="color:initial">page progression</span>
-   \[HTML\] defines the following terms:
    -   <span id="term-for-the-body-element" class="dfn-paneled" style="color:initial">body</span>

<span class="content">References</span><a href="#references" class="self-link"></a>
-----------------------------------------------------------------------------------

### <span class="content">Normative References</span><a href="#normative" class="self-link"></a>

\[CSS-BOX-3\]   
Elika Etemad. [CSS Box Model Module Level 3](https://www.w3.org/TR/css-box-3/). 18 December 2018. WD. URL: <https://www.w3.org/TR/css-box-3/>

\[CSS-CASCADE-4\]   
Elika Etemad; Tab Atkins Jr.. [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/css-cascade-4/). 28 August 2018. CR. URL: <https://www.w3.org/TR/css-cascade-4/>

\[CSS-DISPLAY-3\]   
Tab Atkins Jr.; Elika Etemad. [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/). 11 July 2019. CR. URL: <https://www.w3.org/TR/css-display-3/>

\[CSS-IMAGES-3\]   
Tab Atkins Jr.; Elika Etemad; Lea Verou. [CSS Images Module Level 3](https://www.w3.org/TR/css-images-3/). 10 October 2019. CR. URL: <https://www.w3.org/TR/css-images-3/>

\[CSS-INLINE-3\]   
Dave Cramer; Elika Etemad; Steve Zilles. [CSS Inline Layout Module Level 3](https://www.w3.org/TR/css-inline-3/). 8 August 2018. WD. URL: <https://www.w3.org/TR/css-inline-3/>

\[CSS-MASKING-1\]   
Dirk Schulze; Brian Birtles; Tab Atkins Jr.. [CSS Masking Module Level 1](https://www.w3.org/TR/css-masking-1/). 26 August 2014. CR. URL: <https://www.w3.org/TR/css-masking-1/>

\[CSS-OVERFLOW-3\]   
David Baron; Elika Etemad; Florian Rivoal. [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/). 31 July 2018. WD. URL: <https://www.w3.org/TR/css-overflow-3/>

\[CSS-RUBY-1\]   
Elika Etemad; Koji Ishii. [CSS Ruby Layout Module Level 1](https://www.w3.org/TR/css-ruby-1/). 5 August 2014. WD. URL: <https://www.w3.org/TR/css-ruby-1/>

\[CSS-SIZING-3\]   
Tab Atkins Jr.; Elika Etemad. [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/css-sizing-3/). 22 May 2019. WD. URL: <https://www.w3.org/TR/css-sizing-3/>

\[CSS-TEXT-3\]   
Elika Etemad; Koji Ishii; Florian Rivoal. [CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/). 13 November 2019. WD. URL: <https://www.w3.org/TR/css-text-3/>

\[CSS-VALUES-3\]   
Tab Atkins Jr.; Elika Etemad. [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/). 6 June 2019. CR. URL: <https://www.w3.org/TR/css-values-3/>

\[CSS-VALUES-4\]   
Tab Atkins Jr.; Elika Etemad. [CSS Values and Units Module Level 4](https://www.w3.org/TR/css-values-4/). 31 January 2019. WD. URL: <https://www.w3.org/TR/css-values-4/>

\[CSS-WRITING-MODES-4\]   
Elika Etemad; Koji Ishii. [CSS Writing Modes Level 4](https://www.w3.org/TR/css-writing-modes-4/). 30 July 2019. CR. URL: <https://www.w3.org/TR/css-writing-modes-4/>

\[CSS2\]   
Bert Bos; et al. [Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification](https://www.w3.org/TR/CSS2/). 7 June 2011. REC. URL: <https://www.w3.org/TR/CSS2/>

\[CSS3-BREAK\]   
Rossen Atanassov; Elika Etemad. [CSS Fragmentation Module Level 3](https://www.w3.org/TR/css-break-3/). 4 December 2018. CR. URL: <https://www.w3.org/TR/css-break-3/>

\[CSS3-TEXT-DECOR\]   
Elika Etemad; Koji Ishii. [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3/). 13 August 2019. CR. URL: <https://www.w3.org/TR/css-text-decor-3/>

\[CSS3BG\]   
Bert Bos; Elika Etemad; Brad Kemper. [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/css-backgrounds-3/). 17 October 2017. CR. URL: <https://www.w3.org/TR/css-backgrounds-3/>

\[CSS3COL\]   
Håkon Wium Lie; Florian Rivoal; Rachel Andrew. [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/css-multicol-1/). 15 October 2019. WD. URL: <https://www.w3.org/TR/css-multicol-1/>

\[CSS3PAGE\]   
Elika Etemad; Simon Sapin. [CSS Paged Media Module Level 3](https://www.w3.org/TR/css-page-3/). 18 October 2018. WD. URL: <https://www.w3.org/TR/css-page-3/>

\[HTML\]   
Anne van Kesteren; et al. [HTML Standard](https://html.spec.whatwg.org/multipage/). Living Standard. URL: <https://html.spec.whatwg.org/multipage/>

\[RFC2119\]   
S. Bradner. [Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

\[RFC6919\]   
R. Barnes; S. Kent; E. Rescorla. [Further Key Words for Use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc6919). 1 April 2013. Experimental. URL: <https://tools.ietf.org/html/rfc6919>

\[SVG11\]   
Erik Dahlström; et al. [Scalable Vector Graphics (SVG) 1.1 (Second Edition)](https://www.w3.org/TR/SVG11/). 16 August 2011. REC. URL: <https://www.w3.org/TR/SVG11/>

\[UAX11\]   
Ken Lunde 小林劍󠄁. [East Asian Width](https://www.unicode.org/reports/tr11/tr11-36.html). 25 January 2019. Unicode Standard Annex \#11. URL: <https://www.unicode.org/reports/tr11/tr11-36.html>

\[UAX24\]   
Ken Whistler. [Unicode Script Property](https://www.unicode.org/reports/tr24/tr24-29.html). 6 February 2019. Unicode Standard Annex \#24. URL: <https://www.unicode.org/reports/tr24/tr24-29.html>

\[UAX50\]   
Koji Ishii 石井宏治; Ken Lunde 小林劍󠄁. [Unicode Vertical Text Layout](https://www.unicode.org/reports/tr50/tr50-22.html). 4 February 2019. Unicode Standard Annex \#50. URL: <https://www.unicode.org/reports/tr50/tr50-22.html>

\[UAX9\]   
Mark Davis; Aharon Lanin; Andrew Glass. [Unicode Bidirectional Algorithm](https://www.unicode.org/reports/tr9/tr9-41.html). 4 February 2019. Unicode Standard Annex \#9. URL: <https://www.unicode.org/reports/tr9/tr9-41.html>

\[UNICODE\]   
[The Unicode Standard](https://www.unicode.org/versions/latest/). URL: <https://www.unicode.org/versions/latest/>

### <span class="content">Informative References</span><a href="#informative" class="self-link"></a>

\[CSS-BREAK-4\]   
Rossen Atanassov; Elika Etemad. [CSS Fragmentation Module Level 4](https://www.w3.org/TR/css-break-4/). 18 December 2018. WD. URL: <https://www.w3.org/TR/css-break-4/>

\[CSS-FONTS-4\]   
John Daggett; Myles Maxfield; Chris Lilley. [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/). 13 November 2019. WD. URL: <https://www.w3.org/TR/css-fonts-4/>

\[CSS3-FLEXBOX\]   
Tab Atkins Jr.; et al. [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/). 19 November 2018. CR. URL: <https://www.w3.org/TR/css-flexbox-1/>

\[CSS3-FONTS\]   
John Daggett; Myles Maxfield; Chris Lilley. [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3/). 20 September 2018. REC. URL: <https://www.w3.org/TR/css-fonts-3/>

\[HTML401\]   
Dave Raggett; Arnaud Le Hors; Ian Jacobs. [HTML 4.01 Specification](https://www.w3.org/TR/html401/). 27 March 2018. REC. URL: <https://www.w3.org/TR/html401/>

\[UTN22\]   
Elika J. Etemad. [Robust Vertical Text Layout](https://unicode.org/notes/tn22/). 25 April 2005. Unicode Technical Note \#22. URL: <https://unicode.org/notes/tn22/>

<span class="content">Property Index</span><a href="#property-index" class="self-link"></a>
-------------------------------------------------------------------------------------------

<table><thead><tr class="header"><th>Name</th><th>Value</th><th>Initial</th><th>Applies to</th><th>Inh.</th><th>%ages</th><th>Ani­mat­able</th><th>Anim­ation type</th><th>Canonical order</th><th>Com­puted value</th></tr></thead><tbody><tr class="odd"><td><a href="#propdef-direction" id="ref-for-propdef-direction③⑧" class="css">direction</a></td><td>ltr | rtl</td><td>ltr</td><td>all elements</td><td>yes</td><td>n/a</td><td></td><td>not animatable</td><td>n/a</td><td>specified value</td></tr><tr class="even"><td><a href="#propdef-glyph-orientation-vertical" id="ref-for-propdef-glyph-orientation-vertical⑦" class="css">glyph-orientation-vertical</a></td><td>auto | 0deg | 90deg | 0 | 90</td><td>n/a</td><td>n/a</td><td>n/a</td><td>n/a</td><td>n/a</td><td></td><td>n/a</td><td>n/a</td></tr><tr class="odd"><td><a href="#propdef-text-combine-upright" id="ref-for-propdef-text-combine-upright⑧" class="css">text-combine-upright</a></td><td>none | all</td><td>none</td><td>non-replaced inline elements</td><td>yes</td><td>n/a</td><td></td><td>not animatable</td><td>n/a</td><td>specified keyword</td></tr><tr class="even"><td><a href="#propdef-text-orientation" id="ref-for-propdef-text-orientation②②" class="css">text-orientation</a></td><td>mixed | upright | sideways</td><td>mixed</td><td>all elements except table row groups, rows, column groups, and columns</td><td>yes</td><td>n/a</td><td></td><td>not animatable</td><td>n/a</td><td>specified value</td></tr><tr class="odd"><td><a href="#propdef-unicode-bidi" id="ref-for-propdef-unicode-bidi②⑤" class="css">unicode-bidi</a></td><td>normal | embed | isolate | bidi-override | isolate-override | plaintext</td><td>normal</td><td>all elements, but see prose</td><td>no</td><td>n/a</td><td></td><td>not animatable</td><td>per grammar</td><td>specified value</td></tr><tr class="even"><td><a href="#propdef-writing-mode" id="ref-for-propdef-writing-mode③②" class="css">writing-mode</a></td><td>horizontal-tb | vertical-rl | vertical-lr</td><td>horizontal-tb</td><td>All elements except table row groups, table column groups, table rows, table columns, ruby base container, ruby annotation container</td><td>yes</td><td>n/a</td><td></td><td>not animatable</td><td>n/a</td><td>specified value</td></tr></tbody></table>

**[\#writing-mode](#writing-mode)Referenced in:**

-   [1.1. Module Interactions](#ref-for-writing-mode) [(2)](#ref-for-writing-mode①)
-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-writing-mode②) [(2)](#ref-for-writing-mode③) [(3)](#ref-for-writing-mode④) [(4)](#ref-for-writing-mode⑤)

**[\#inline-base-direction](#inline-base-direction)Referenced in:**

-   [1. Introduction to Writing Modes](#ref-for-inline-base-direction)
-   [2.1. Specifying Directionality: the direction property](#ref-for-inline-base-direction①) [(2)](#ref-for-inline-base-direction②) [(3)](#ref-for-inline-base-direction③)

**[\#block-flow-direction](#block-flow-direction)Referenced in:**

-   [1. Introduction to Writing Modes](#ref-for-block-flow-direction)
-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-block-flow-direction①) [(2)](#ref-for-block-flow-direction②) [(3)](#ref-for-block-flow-direction③) [(4)](#ref-for-block-flow-direction④)
-   [6.2. Flow-relative Directions](#ref-for-block-flow-direction⑤)

**[\#typographic-mode](#typographic-mode)Referenced in:**

-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-typographic-mode) [(2)](#ref-for-typographic-mode①) [(3)](#ref-for-typographic-mode②)
-   [4.1. Introduction to Baselines](#ref-for-typographic-mode③)
-   [4.2. Text Baselines](#ref-for-typographic-mode④)
-   [4.4. Baseline Alignment](#ref-for-typographic-mode⑤)
-   [5.1. Orienting Text: the text-orientation property](#ref-for-typographic-mode⑥) [(2)](#ref-for-typographic-mode⑦)

**[\#horizontal-writing-mode](#horizontal-writing-mode)Referenced in:**

-   [5.1. Orienting Text: the text-orientation property](#ref-for-horizontal-writing-mode)
-   [9.1.2. Layout Rules](#ref-for-horizontal-writing-mode①)
-   [Changes since the May 2018 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-horizontal-writing-mode②)

**[\#vertical-writing-mode](#vertical-writing-mode)Referenced in:**

-   [6.4. Abstract-to-Physical Mappings](#ref-for-vertical-writing-mode)

**[\#propdef-direction](#propdef-direction)Referenced in:**

-   [1. Introduction to Writing Modes](#ref-for-propdef-direction) [(2)](#ref-for-propdef-direction①)
-   [1.1. Module Interactions](#ref-for-propdef-direction②) [(2)](#ref-for-propdef-direction③)
-   [2. Inline Direction and Bidirectionality](#ref-for-propdef-direction④) [(2)](#ref-for-propdef-direction⑤)
-   [2.1. Specifying Directionality: the direction property](#ref-for-propdef-direction⑥) [(2)](#ref-for-propdef-direction⑦) [(3)](#ref-for-propdef-direction⑧) [(4)](#ref-for-propdef-direction⑨)
-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-propdef-direction①⓪) [(2)](#ref-for-propdef-direction①①) [(3)](#ref-for-propdef-direction①②) [(4)](#ref-for-propdef-direction①③) [(5)](#ref-for-propdef-direction①④) [(6)](#ref-for-propdef-direction①⑤) [(7)](#ref-for-propdef-direction①⑥)
-   [2.4.1. Bidi Paragraph Embedding Levels](#ref-for-propdef-direction①⑦)
-   [2.4.3. Bidi Treatment of Atomic Inlines](#ref-for-propdef-direction①⑧)
-   [2.4.5. Reordering-induced Box Fragmentation](#ref-for-propdef-direction①⑨) [(2)](#ref-for-propdef-direction②⓪)
-   [5.1. Orienting Text: the text-orientation property](#ref-for-propdef-direction②①) [(2)](#ref-for-propdef-direction②②) [(3)](#ref-for-propdef-direction②③)
-   [6. Abstract Box Terminology](#ref-for-propdef-direction②④)
-   [6.2. Flow-relative Directions](#ref-for-propdef-direction②⑤) [(2)](#ref-for-propdef-direction②⑥) [(3)](#ref-for-propdef-direction②⑦)
-   [6.4. Abstract-to-Physical Mappings](#ref-for-propdef-direction②⑧) [(2)](#ref-for-propdef-direction②⑨) [(3)](#ref-for-propdef-direction③⓪) [(4)](#ref-for-propdef-direction③①)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-propdef-direction③②)
-   [8. The Principal Writing Mode](#ref-for-propdef-direction③③) [(2)](#ref-for-propdef-direction③④) [(3)](#ref-for-propdef-direction③⑤) [(4)](#ref-for-propdef-direction③⑥)
-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-direction③⑦)

**[\#valdef-direction-ltr](#valdef-direction-ltr)Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-valdef-direction-ltr)
-   [2.4.5. Reordering-induced Box Fragmentation](#ref-for-valdef-direction-ltr①)
-   [5.1. Orienting Text: the text-orientation property](#ref-for-valdef-direction-ltr②)
-   [6.2. Flow-relative Directions](#ref-for-valdef-direction-ltr③)
-   [6.4. Abstract-to-Physical Mappings](#ref-for-valdef-direction-ltr④) [(2)](#ref-for-valdef-direction-ltr⑤) [(3)](#ref-for-valdef-direction-ltr⑥) [(4)](#ref-for-valdef-direction-ltr⑦)
-   [8.2. Page Flow: the page progression direction](#ref-for-valdef-direction-ltr⑧)

**[\#valdef-direction-rtl](#valdef-direction-rtl)Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-valdef-direction-rtl)
-   [2.4.5. Reordering-induced Box Fragmentation](#ref-for-valdef-direction-rtl①)
-   [5.1. Orienting Text: the text-orientation property](#ref-for-valdef-direction-rtl②)
-   [6.2. Flow-relative Directions](#ref-for-valdef-direction-rtl③)
-   [6.4. Abstract-to-Physical Mappings](#ref-for-valdef-direction-rtl④) [(2)](#ref-for-valdef-direction-rtl⑤) [(3)](#ref-for-valdef-direction-rtl⑥)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-valdef-direction-rtl⑦)
-   [8.2. Page Flow: the page progression direction](#ref-for-valdef-direction-rtl⑧)

**[\#propdef-unicode-bidi](#propdef-unicode-bidi)Referenced in:**

-   [1. Introduction to Writing Modes](#ref-for-propdef-unicode-bidi)
-   [1.1. Module Interactions](#ref-for-propdef-unicode-bidi①)
-   [2. Inline Direction and Bidirectionality](#ref-for-propdef-unicode-bidi②) [(2)](#ref-for-propdef-unicode-bidi③)
-   [2.1. Specifying Directionality: the direction property](#ref-for-propdef-unicode-bidi④) [(2)](#ref-for-propdef-unicode-bidi⑤)
-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-propdef-unicode-bidi⑥) [(2)](#ref-for-propdef-unicode-bidi⑦) [(3)](#ref-for-propdef-unicode-bidi⑧) [(4)](#ref-for-propdef-unicode-bidi⑨) [(5)](#ref-for-propdef-unicode-bidi①⓪) [(6)](#ref-for-propdef-unicode-bidi①①) [(7)](#ref-for-propdef-unicode-bidi①②) [(8)](#ref-for-propdef-unicode-bidi①③) [(9)](#ref-for-propdef-unicode-bidi①④) [(10)](#ref-for-propdef-unicode-bidi①⑤) [(11)](#ref-for-propdef-unicode-bidi①⑥) [(12)](#ref-for-propdef-unicode-bidi①⑦) [(13)](#ref-for-propdef-unicode-bidi①⑧)
-   [2.3. Example of Bidirectional Text](#ref-for-propdef-unicode-bidi①⑨)
-   [2.4.1. Bidi Paragraph Embedding Levels](#ref-for-propdef-unicode-bidi②⓪)
-   [2.4.2. CSS–Unicode Bidi Control Translation, Text Reordering](#ref-for-propdef-unicode-bidi②①)
-   [2.4.3. Bidi Treatment of Atomic Inlines](#ref-for-propdef-unicode-bidi②②)
-   [2.4.4. Paragraph Breaks Within Embeddings and Isolates](#ref-for-propdef-unicode-bidi②③)
-   [5.1. Orienting Text: the text-orientation property](#ref-for-propdef-unicode-bidi②④)

**[\#valdef-unicode-bidi-normal](#valdef-unicode-bidi-normal)Referenced in:**

-   [2.1. Specifying Directionality: the direction property](#ref-for-valdef-unicode-bidi-normal)
-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-valdef-unicode-bidi-normal①) [(2)](#ref-for-valdef-unicode-bidi-normal②) [(3)](#ref-for-valdef-unicode-bidi-normal③) [(4)](#ref-for-valdef-unicode-bidi-normal④) [(5)](#ref-for-valdef-unicode-bidi-normal⑤)
-   [2.3. Example of Bidirectional Text](#ref-for-valdef-unicode-bidi-normal⑥)

**[\#valdef-unicode-bidi-embed](#valdef-unicode-bidi-embed)Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-valdef-unicode-bidi-embed) [(2)](#ref-for-valdef-unicode-bidi-embed①)
-   [2.4.3. Bidi Treatment of Atomic Inlines](#ref-for-valdef-unicode-bidi-embed②)

**[\#directional-embedding](#directional-embedding)Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-directional-embedding)

**[\#valdef-unicode-bidi-isolate](#valdef-unicode-bidi-isolate)Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-valdef-unicode-bidi-isolate) [(2)](#ref-for-valdef-unicode-bidi-isolate①) [(3)](#ref-for-valdef-unicode-bidi-isolate②) [(4)](#ref-for-valdef-unicode-bidi-isolate③) [(5)](#ref-for-valdef-unicode-bidi-isolate④)

**[\#bidi-isolate](#bidi-isolate)Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-bidi-isolate)
-   [9.1.2. Layout Rules](#ref-for-bidi-isolate①)
-   [Changes since the May 2018 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-bidi-isolate②)

**[\#isolated-sequence](#isolated-sequence)Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-isolated-sequence) [(2)](#ref-for-isolated-sequence①)
-   [2.3. Example of Bidirectional Text](#ref-for-isolated-sequence②)

**[\#valdef-unicode-bidi-bidi-override](#valdef-unicode-bidi-bidi-override)Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-valdef-unicode-bidi-bidi-override) [(2)](#ref-for-valdef-unicode-bidi-bidi-override①) [(3)](#ref-for-valdef-unicode-bidi-bidi-override②) [(4)](#ref-for-valdef-unicode-bidi-bidi-override③) [(5)](#ref-for-valdef-unicode-bidi-bidi-override④)
-   [2.4.3. Bidi Treatment of Atomic Inlines](#ref-for-valdef-unicode-bidi-bidi-override⑤)

**[\#directional-override](#directional-override)Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-directional-override) [(2)](#ref-for-directional-override①)

**[\#valdef-unicode-bidi-isolate-override](#valdef-unicode-bidi-isolate-override)Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-valdef-unicode-bidi-isolate-override) [(2)](#ref-for-valdef-unicode-bidi-isolate-override①)

**[\#valdef-unicode-bidi-plaintext](#valdef-unicode-bidi-plaintext)Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-valdef-unicode-bidi-plaintext) [(2)](#ref-for-valdef-unicode-bidi-plaintext①) [(3)](#ref-for-valdef-unicode-bidi-plaintext②) [(4)](#ref-for-valdef-unicode-bidi-plaintext③)
-   [2.4.1. Bidi Paragraph Embedding Levels](#ref-for-valdef-unicode-bidi-plaintext④)

**[\#forced-paragraph-break](#forced-paragraph-break)Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-forced-paragraph-break) [(2)](#ref-for-forced-paragraph-break①)
-   [2.4.4. Paragraph Breaks Within Embeddings and Isolates](#ref-for-forced-paragraph-break②) [(2)](#ref-for-forced-paragraph-break③)

**[\#bidi-paragraph](#bidi-paragraph)Referenced in:**

-   [2.2. Embeddings and Overrides: the unicode-bidi property](#ref-for-bidi-paragraph)
-   [2.4.2. CSS–Unicode Bidi Control Translation, Text Reordering](#ref-for-bidi-paragraph①)
-   [2.4.4. Paragraph Breaks Within Embeddings and Isolates](#ref-for-bidi-paragraph②)

**[\#propdef-writing-mode](#propdef-writing-mode)Referenced in:**

-   [1. Introduction to Writing Modes](#ref-for-propdef-writing-mode) [(2)](#ref-for-propdef-writing-mode①)
-   [1.1. Module Interactions](#ref-for-propdef-writing-mode②)
-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-propdef-writing-mode③) [(2)](#ref-for-propdef-writing-mode④) [(3)](#ref-for-propdef-writing-mode⑤) [(4)](#ref-for-propdef-writing-mode⑥) [(5)](#ref-for-propdef-writing-mode⑦)
-   [3.2.1. Obsolete SVG1.1 writing-mode Values](#ref-for-propdef-writing-mode⑧)
-   [3.2.1.1. Supporting SVG1.1 writing-mode values in CSS syntax](#ref-for-propdef-writing-mode⑨) [(2)](#ref-for-propdef-writing-mode①⓪) [(3)](#ref-for-propdef-writing-mode①①)
-   [3.2.1.2. Supporting SVG1.1 writing-mode values in presentational attributes](#ref-for-propdef-writing-mode①②)
-   [5.1. Orienting Text: the text-orientation property](#ref-for-propdef-writing-mode①③)
-   [6. Abstract Box Terminology](#ref-for-propdef-writing-mode①④)
-   [6.2. Flow-relative Directions](#ref-for-propdef-writing-mode①⑤) [(2)](#ref-for-propdef-writing-mode①⑥) [(3)](#ref-for-propdef-writing-mode①⑦)
-   [6.3. Line-relative Directions](#ref-for-propdef-writing-mode①⑧)
-   [6.4. Abstract-to-Physical Mappings](#ref-for-propdef-writing-mode①⑨) [(2)](#ref-for-propdef-writing-mode②⓪) [(3)](#ref-for-propdef-writing-mode②①)
-   [7.3. Orthogonal Flows](#ref-for-propdef-writing-mode②②)
-   [8. The Principal Writing Mode](#ref-for-propdef-writing-mode②③) [(2)](#ref-for-propdef-writing-mode②④) [(3)](#ref-for-propdef-writing-mode②⑤) [(4)](#ref-for-propdef-writing-mode②⑥)
-   [Changes since the December 2015 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-writing-mode②⑦)
-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-writing-mode②⑧) [(2)](#ref-for-propdef-writing-mode②⑨) [(3)](#ref-for-propdef-writing-mode③⓪) [(4)](#ref-for-propdef-writing-mode③①)

**[\#valdef-writing-mode-horizontal-tb](#valdef-writing-mode-horizontal-tb)Referenced in:**

-   [2.4.5. Reordering-induced Box Fragmentation](#ref-for-valdef-writing-mode-horizontal-tb)
-   [3.2.1.1. Supporting SVG1.1 writing-mode values in CSS syntax](#ref-for-valdef-writing-mode-horizontal-tb①)
-   [6. Abstract Box Terminology](#ref-for-valdef-writing-mode-horizontal-tb②) [(2)](#ref-for-valdef-writing-mode-horizontal-tb③)
-   [6.2. Flow-relative Directions](#ref-for-valdef-writing-mode-horizontal-tb④) [(2)](#ref-for-valdef-writing-mode-horizontal-tb⑤)
-   [6.3. Line-relative Directions](#ref-for-valdef-writing-mode-horizontal-tb⑥)
-   [6.4. Abstract-to-Physical Mappings](#ref-for-valdef-writing-mode-horizontal-tb⑦)
-   [7.3. Orthogonal Flows](#ref-for-valdef-writing-mode-horizontal-tb⑧)
-   [7.5. Line-Relative Mappings](#ref-for-valdef-writing-mode-horizontal-tb⑨)
-   [8.2. Page Flow: the page progression direction](#ref-for-valdef-writing-mode-horizontal-tb①⓪) [(2)](#ref-for-valdef-writing-mode-horizontal-tb①①)

**[\#valdef-writing-mode-vertical-rl](#valdef-writing-mode-vertical-rl)Referenced in:**

-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-valdef-writing-mode-vertical-rl)
-   [3.2.1.1. Supporting SVG1.1 writing-mode values in CSS syntax](#ref-for-valdef-writing-mode-vertical-rl①)
-   [5.1. Orienting Text: the text-orientation property](#ref-for-valdef-writing-mode-vertical-rl②)
-   [5.1.1. Vertical Typesetting and Font Features](#ref-for-valdef-writing-mode-vertical-rl③)
-   [6.2. Flow-relative Directions](#ref-for-valdef-writing-mode-vertical-rl④)
-   [6.3. Line-relative Directions](#ref-for-valdef-writing-mode-vertical-rl⑤)
-   [6.4. Abstract-to-Physical Mappings](#ref-for-valdef-writing-mode-vertical-rl⑥)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-valdef-writing-mode-vertical-rl⑦) [(2)](#ref-for-valdef-writing-mode-vertical-rl⑧) [(3)](#ref-for-valdef-writing-mode-vertical-rl⑨)
-   [7.3. Orthogonal Flows](#ref-for-valdef-writing-mode-vertical-rl①⓪) [(2)](#ref-for-valdef-writing-mode-vertical-rl①①)
-   [8.2. Page Flow: the page progression direction](#ref-for-valdef-writing-mode-vertical-rl①②)

**[\#valdef-writing-mode-vertical-lr](#valdef-writing-mode-vertical-lr)Referenced in:**

-   [3.2.1.1. Supporting SVG1.1 writing-mode values in CSS syntax](#ref-for-valdef-writing-mode-vertical-lr)
-   [5.1.1. Vertical Typesetting and Font Features](#ref-for-valdef-writing-mode-vertical-lr①)
-   [6.2. Flow-relative Directions](#ref-for-valdef-writing-mode-vertical-lr②)
-   [6.3. Line-relative Directions](#ref-for-valdef-writing-mode-vertical-lr③) [(2)](#ref-for-valdef-writing-mode-vertical-lr④)
-   [6.4. Abstract-to-Physical Mappings](#ref-for-valdef-writing-mode-vertical-lr⑤)
-   [7.3. Orthogonal Flows](#ref-for-valdef-writing-mode-vertical-lr⑥)
-   [8.2. Page Flow: the page progression direction](#ref-for-valdef-writing-mode-vertical-lr⑦)

**[\#alphabetic-baseline](#alphabetic-baseline)Referenced in:**

-   [4.2. Text Baselines](#ref-for-alphabetic-baseline)

**[\#central-baseline](#central-baseline)Referenced in:**

-   [4.2. Text Baselines](#ref-for-central-baseline)

**[\#horizontal-only](#horizontal-only)Referenced in:**

-   [5. Introduction to Vertical Text Layout](#ref-for-horizontal-only) [(2)](#ref-for-horizontal-only①)
-   [Appendix A: Vertical Scripts in Unicode](#ref-for-horizontal-only②)

**[\#vertical-only](#vertical-only)Referenced in:**

-   [5. Introduction to Vertical Text Layout](#ref-for-vertical-only)
-   [Appendix A: Vertical Scripts in Unicode](#ref-for-vertical-only①) [(2)](#ref-for-vertical-only②)

**[\#bi-orientational](#bi-orientational)Referenced in:**

-   [5. Introduction to Vertical Text Layout](#ref-for-bi-orientational) [(2)](#ref-for-bi-orientational①)
-   [Appendix A: Vertical Scripts in Unicode](#ref-for-bi-orientational②)

**[\#vertical-script](#vertical-script)Referenced in:**

-   [1. Introduction to Writing Modes](#ref-for-vertical-script) [(2)](#ref-for-vertical-script①)

**[\#horizontal-script](#horizontal-script)Referenced in:**

-   [Appendix A: Vertical Scripts in Unicode](#ref-for-horizontal-script)

**[\#bi-orientational-transform](#bi-orientational-transform)Referenced in:**

-   [5. Introduction to Vertical Text Layout](#ref-for-bi-orientational-transform)

**[\#propdef-text-orientation](#propdef-text-orientation)Referenced in:**

-   [1. Introduction to Writing Modes](#ref-for-propdef-text-orientation) [(2)](#ref-for-propdef-text-orientation①)
-   [1.1. Module Interactions](#ref-for-propdef-text-orientation②)
-   [3.2. Block Flow Direction: the writing-mode property](#ref-for-propdef-text-orientation③)
-   [4.2. Text Baselines](#ref-for-propdef-text-orientation④)
-   [5. Introduction to Vertical Text Layout](#ref-for-propdef-text-orientation⑤)
-   [5.1. Orienting Text: the text-orientation property](#ref-for-propdef-text-orientation⑥) [(2)](#ref-for-propdef-text-orientation⑦)
-   [5.1.2. Mixed Vertical Orientations](#ref-for-propdef-text-orientation⑧)
-   [5.1.3. Obsolete: the SVG1.1 glyph-orientation-vertical property](#ref-for-propdef-text-orientation⑨) [(2)](#ref-for-propdef-text-orientation①⓪)
-   [6.3. Line-relative Directions](#ref-for-propdef-text-orientation①①)
-   [6.4. Abstract-to-Physical Mappings](#ref-for-propdef-text-orientation①②) [(2)](#ref-for-propdef-text-orientation①③)
-   [8. The Principal Writing Mode](#ref-for-propdef-text-orientation①④) [(2)](#ref-for-propdef-text-orientation①⑤) [(3)](#ref-for-propdef-text-orientation①⑥)
-   [9.1.2. Layout Rules](#ref-for-propdef-text-orientation①⑦)
-   [Changes since the May 2018 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-text-orientation①⑧)
-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-text-orientation①⑨) [(2)](#ref-for-propdef-text-orientation②⓪) [(3)](#ref-for-propdef-text-orientation②①)

**[\#valdef-text-orientation-mixed](#valdef-text-orientation-mixed)Referenced in:**

-   [4.2. Text Baselines](#ref-for-valdef-text-orientation-mixed)
-   [5. Introduction to Vertical Text Layout](#ref-for-valdef-text-orientation-mixed①)
-   [5.1. Orienting Text: the text-orientation property](#ref-for-valdef-text-orientation-mixed②)
-   [5.1.2. Mixed Vertical Orientations](#ref-for-valdef-text-orientation-mixed③) [(2)](#ref-for-valdef-text-orientation-mixed④)
-   [5.1.3. Obsolete: the SVG1.1 glyph-orientation-vertical property](#ref-for-valdef-text-orientation-mixed⑤)
-   [6.3. Line-relative Directions](#ref-for-valdef-text-orientation-mixed⑥)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-valdef-text-orientation-mixed⑦)
-   [Appendix A: Vertical Scripts in Unicode](#ref-for-valdef-text-orientation-mixed⑧)

**[\#valdef-text-orientation-upright](#valdef-text-orientation-upright)Referenced in:**

-   [4.2. Text Baselines](#ref-for-valdef-text-orientation-upright)
-   [5. Introduction to Vertical Text Layout](#ref-for-valdef-text-orientation-upright①)
-   [5.1. Orienting Text: the text-orientation property](#ref-for-valdef-text-orientation-upright②) [(2)](#ref-for-valdef-text-orientation-upright③)
-   [5.1.3. Obsolete: the SVG1.1 glyph-orientation-vertical property](#ref-for-valdef-text-orientation-upright④) [(2)](#ref-for-valdef-text-orientation-upright⑤)
-   [6.4. Abstract-to-Physical Mappings](#ref-for-valdef-text-orientation-upright⑥)

**[\#valdef-text-orientation-sideways](#valdef-text-orientation-sideways)Referenced in:**

-   [5.1. Orienting Text: the text-orientation property](#ref-for-valdef-text-orientation-sideways) [(2)](#ref-for-valdef-text-orientation-sideways①)
-   [5.1.3. Obsolete: the SVG1.1 glyph-orientation-vertical property](#ref-for-valdef-text-orientation-sideways②) [(2)](#ref-for-valdef-text-orientation-sideways③)
-   [6.3. Line-relative Directions](#ref-for-valdef-text-orientation-sideways④)
-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-valdef-text-orientation-sideways⑤)

**[\#valdef-text-orientation-sideways-right](#valdef-text-orientation-sideways-right)Referenced in:**

-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-valdef-text-orientation-sideways-right) [(2)](#ref-for-valdef-text-orientation-sideways-right①)

**[\#propdef-glyph-orientation-vertical](#propdef-glyph-orientation-vertical)Referenced in:**

-   [5.1.3. Obsolete: the SVG1.1 glyph-orientation-vertical property](#ref-for-propdef-glyph-orientation-vertical) [(2)](#ref-for-propdef-glyph-orientation-vertical①) [(3)](#ref-for-propdef-glyph-orientation-vertical②) [(4)](#ref-for-propdef-glyph-orientation-vertical③) [(5)](#ref-for-propdef-glyph-orientation-vertical④)
-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-glyph-orientation-vertical⑤) [(2)](#ref-for-propdef-glyph-orientation-vertical⑥)

**[\#x-axis](#x-axis)Referenced in:**

-   [6.1. Abstract Dimensions](#ref-for-x-axis) [(2)](#ref-for-x-axis①)

**[\#horizontal-dimension](#horizontal-dimension)Referenced in:**

-   [6.1. Abstract Dimensions](#ref-for-horizontal-dimension) [(2)](#ref-for-horizontal-dimension①)

**[\#y-axis](#y-axis)Referenced in:**

-   [6.1. Abstract Dimensions](#ref-for-y-axis) [(2)](#ref-for-y-axis①)

**[\#vertical-dimension](#vertical-dimension)Referenced in:**

-   [6.1. Abstract Dimensions](#ref-for-vertical-dimension) [(2)](#ref-for-vertical-dimension①)

**[\#block-axis](#block-axis)Referenced in:**

-   [7.3. Orthogonal Flows](#ref-for-block-axis)

**[\#inline-axis](#inline-axis)Referenced in:**

-   [4.1. Introduction to Baselines](#ref-for-inline-axis)
-   [5.1.1. Vertical Typesetting and Font Features](#ref-for-inline-axis①)
-   [7.3. Orthogonal Flows](#ref-for-inline-axis②) [(2)](#ref-for-inline-axis③)
-   [7.3.1. Available Space of Orthogonal Flows](#ref-for-inline-axis④)
-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-inline-axis⑤)

**[\#block-size](#block-size)Referenced in:**

-   [7.2. Dimensional Mapping](#ref-for-block-size)
-   [7.3. Orthogonal Flows](#ref-for-block-size①) [(2)](#ref-for-block-size②) [(3)](#ref-for-block-size③) [(4)](#ref-for-block-size④)
-   [7.3.1. Available Space of Orthogonal Flows](#ref-for-block-size⑤) [(2)](#ref-for-block-size⑥) [(3)](#ref-for-block-size⑦)

**[\#inline-size](#inline-size)Referenced in:**

-   [7.2. Dimensional Mapping](#ref-for-inline-size) [(2)](#ref-for-inline-size①)
-   [7.3. Orthogonal Flows](#ref-for-inline-size②) [(2)](#ref-for-inline-size③) [(3)](#ref-for-inline-size④) [(4)](#ref-for-inline-size⑤) [(5)](#ref-for-inline-size⑥) [(6)](#ref-for-inline-size⑦)
-   [7.3.1. Available Space of Orthogonal Flows](#ref-for-inline-size⑧) [(2)](#ref-for-inline-size⑨) [(3)](#ref-for-inline-size①⓪)

**[\#flow-relative-direction](#flow-relative-direction)Referenced in:**

-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-flow-relative-direction)

**[\#block-start](#block-start)Referenced in:**

-   [6. Abstract Box Terminology](#ref-for-block-start)
-   [6.2. Flow-relative Directions](#ref-for-block-start①) [(2)](#ref-for-block-start②) [(3)](#ref-for-block-start③) [(4)](#ref-for-block-start④)
-   [6.3. Line-relative Directions](#ref-for-block-start⑤)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-block-start⑥)
-   [7.2. Dimensional Mapping](#ref-for-block-start⑦)
-   [7.4. Flow-Relative Mappings](#ref-for-block-start⑧) [(2)](#ref-for-block-start⑨) [(3)](#ref-for-block-start①⓪) [(4)](#ref-for-block-start①①) [(5)](#ref-for-block-start①②)

**[\#block-end](#block-end)Referenced in:**

-   [6. Abstract Box Terminology](#ref-for-block-end)
-   [6.2. Flow-relative Directions](#ref-for-block-end①) [(2)](#ref-for-block-end②) [(3)](#ref-for-block-end③)
-   [6.3. Line-relative Directions](#ref-for-block-end④)
-   [7.2. Dimensional Mapping](#ref-for-block-end⑤)
-   [7.4. Flow-Relative Mappings](#ref-for-block-end⑥) [(2)](#ref-for-block-end⑦) [(3)](#ref-for-block-end⑧) [(4)](#ref-for-block-end⑨)

**[\#inline-start](#inline-start)Referenced in:**

-   [6. Abstract Box Terminology](#ref-for-inline-start)
-   [6.2. Flow-relative Directions](#ref-for-inline-start①) [(2)](#ref-for-inline-start②) [(3)](#ref-for-inline-start③)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-inline-start④)
-   [7.2. Dimensional Mapping](#ref-for-inline-start⑤)
-   [7.4. Flow-Relative Mappings](#ref-for-inline-start⑥)

**[\#inline-end](#inline-end)Referenced in:**

-   [6. Abstract Box Terminology](#ref-for-inline-end)
-   [6.2. Flow-relative Directions](#ref-for-inline-end①) [(2)](#ref-for-inline-end②) [(3)](#ref-for-inline-end③)
-   [7.2. Dimensional Mapping](#ref-for-inline-end④)

**[\#start](#start)Referenced in:**

-   [2.4.5. Reordering-induced Box Fragmentation](#ref-for-start) [(2)](#ref-for-start①)
-   [6. Abstract Box Terminology](#ref-for-start②)
-   [6.2. Flow-relative Directions](#ref-for-start③)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-start④)
-   [7.4. Flow-Relative Mappings](#ref-for-start⑤) [(2)](#ref-for-start⑥)

**[\#end](#end)Referenced in:**

-   [2.4.5. Reordering-induced Box Fragmentation](#ref-for-end)
-   [6. Abstract Box Terminology](#ref-for-end①)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-end②)

**[\#line-orientation](#line-orientation)Referenced in:**

-   [6.3. Line-relative Directions](#ref-for-line-orientation)

**[\#line-relative-direction](#line-relative-direction)Referenced in:**

-   [7.5. Line-Relative Mappings](#ref-for-line-relative-direction)

**[\#over](#over)Referenced in:**

-   [4.2. Text Baselines](#ref-for-over)
-   [4.3. Atomic Inline Baselines](#ref-for-over①)
-   [6.3. Line-relative Directions](#ref-for-over②)
-   [7.5. Line-Relative Mappings](#ref-for-over③) [(2)](#ref-for-over④) [(3)](#ref-for-over⑤) [(4)](#ref-for-over⑥)

**[\#line-over](#line-over)Referenced in:**

-   [6. Abstract Box Terminology](#ref-for-line-over)
-   [6.3. Line-relative Directions](#ref-for-line-over①)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-line-over②)
-   [7.5. Line-Relative Mappings](#ref-for-line-over③)

**[\#under](#under)Referenced in:**

-   [4.2. Text Baselines](#ref-for-under)
-   [4.3. Atomic Inline Baselines](#ref-for-under①) [(2)](#ref-for-under②)
-   [7.5. Line-Relative Mappings](#ref-for-under③) [(2)](#ref-for-under④) [(3)](#ref-for-under⑤)

**[\#line-under](#line-under)Referenced in:**

-   [6. Abstract Box Terminology](#ref-for-line-under)
-   [6.3. Line-relative Directions](#ref-for-line-under①)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-line-under②)

**[\#line-left](#line-left)Referenced in:**

-   [2.1. Specifying Directionality: the direction property](#ref-for-line-left) [(2)](#ref-for-line-left①)
-   [6. Abstract Box Terminology](#ref-for-line-left②)
-   [6.2. Flow-relative Directions](#ref-for-line-left③)
-   [6.3. Line-relative Directions](#ref-for-line-left④)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-line-left⑤)
-   [7.5. Line-Relative Mappings](#ref-for-line-left⑥) [(2)](#ref-for-line-left⑦) [(3)](#ref-for-line-left⑧)

**[\#line-right](#line-right)Referenced in:**

-   [2.1. Specifying Directionality: the direction property](#ref-for-line-right) [(2)](#ref-for-line-right①)
-   [6. Abstract Box Terminology](#ref-for-line-right②)
-   [6.2. Flow-relative Directions](#ref-for-line-right③)
-   [7.1. Principles of Layout in Vertical Writing Modes](#ref-for-line-right④)
-   [7.5. Line-Relative Mappings](#ref-for-line-right⑤) [(2)](#ref-for-line-right⑥) [(3)](#ref-for-line-right⑦)

**[\#establish-an-orthogonal-flow](#establish-an-orthogonal-flow)Referenced in:**

-   [7.3. Orthogonal Flows](#ref-for-establish-an-orthogonal-flow) [(2)](#ref-for-establish-an-orthogonal-flow①) [(3)](#ref-for-establish-an-orthogonal-flow②)
-   [7.3.1. Available Space of Orthogonal Flows](#ref-for-establish-an-orthogonal-flow③)
-   [7.3.2. Auto-sizing Orthogonal Flow Roots](#ref-for-establish-an-orthogonal-flow④)
-   [Changes since the July 2019 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-establish-an-orthogonal-flow⑤)

**[\#principal-writing-mode](#principal-writing-mode)Referenced in:**

-   [8.1. Propagation to the Initial Containing Block](#ref-for-principal-writing-mode)
-   [8.2. Page Flow: the page progression direction](#ref-for-principal-writing-mode①) [(2)](#ref-for-principal-writing-mode②)
-   [Changes since the March 2014 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-principal-writing-mode)

**[\#propdef-text-combine-upright](#propdef-text-combine-upright)Referenced in:**

-   [9.1. Horizontal-in-Vertical Composition: the text-combine-upright property](#ref-for-propdef-text-combine-upright)
-   [9.1.1. Text Run Rules](#ref-for-propdef-text-combine-upright①) [(2)](#ref-for-propdef-text-combine-upright②)
-   [9.1.2. Layout Rules](#ref-for-propdef-text-combine-upright③)
-   [9.1.3.1. Full-width Characters](#ref-for-propdef-text-combine-upright④)
-   [Changes since the May 2018 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-text-combine-upright⑤) [(2)](#ref-for-propdef-text-combine-upright⑥)
-   [Changes since the December 2015 CSS Writing Modes Module Level 3 Candidate Recommendation](#ref-for-propdef-text-combine-upright⑦)

**[\#valdef-text-combine-upright-none](#valdef-text-combine-upright-none)Referenced in:**

-   [9.1.1. Text Run Rules](#ref-for-valdef-text-combine-upright-none)
