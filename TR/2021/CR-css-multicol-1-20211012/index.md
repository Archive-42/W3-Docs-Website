<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

CSS Multi-column Layout Module Level 1
======================================

<span class="content">W3C Candidate Recommendation Snapshot, 12 October 2021</span>
-----------------------------------------------------------------------------------

This version:   
<a href="https://www.w3.org/TR/2021/CR-css-multicol-1-20211012/" class="u-url">https://www.w3.org/TR/2021/CR-css-multicol-1-20211012/</a>

Latest published version:   
<https://www.w3.org/TR/css-multicol-1/>

Editor's Draft:   
<https://drafts.csswg.org/css-multicol/>

Previous Versions:   
<https://www.w3.org/TR/2021/WD-css-multicol-1-20210212/>

<https://www.w3.org/TR/2019/WD-css-multicol-1-20191015/>

<https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/>

<https://www.w3.org/TR/2017/WD-css-multicol-1-20171005/>

<https://www.w3.org/TR/2011/CR-css3-multicol-20110412/>

<https://www.w3.org/TR/2009/CR-css3-multicol-20091217/>

<https://www.w3.org/TR/2009/WD-css3-multicol-20090630/>

<https://www.w3.org/TR/2007/WD-css3-multicol-20070606/>

<https://www.w3.org/TR/2005/WD-css3-multicol-20051215/>

<https://www.w3.org/TR/2001/WD-css3-multicol-20010118/>

<https://www.w3.org/1999/06/WD-css3-multicol-19990623>

Implementation Report:   
<https://test.csswg.org/harness/results/css-multicol-1_dev/grouped/>

Test Suite:   
<http://test.csswg.org/suites/css-multicol-1_dev/nightly-unstable/>

Issue Tracking:   
[CSSWG Issues Repository](https://github.com/w3c/csswg-drafts/labels/css-multicol-1)

[Disposition of Comments](https://drafts.csswg.org/css-multicol-1/issues)

Editors:   
<a href="https://florian.rivoal.net" class="p-name fn u-url url">Florian Rivoal</a> (<span class="p-org org">On behalf of Bloomberg</span>)

<a href="mailto:rachelandrew@google.com" class="p-name fn u-email email">Rachel Andrew</a> (<span class="p-org org">Google</span>)

Former Editor:   
<a href="mailto:howcome@opera.com" class="p-name fn u-email email">Håkon Wium Lie</a> (<span class="p-org org">Opera Software</span>)

Suggest an Edit for this Spec:   
[GitHub Editor](https://github.com/w3c/csswg-drafts/blob/master/css-multicol-1/Overview.bs)

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2021 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [permissive document license](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document) rules apply.

------------------------------------------------------------------------

<span class="content">Abstract</span>
-------------------------------------

This specification describes multi-column layouts in CSS, a style sheet language for the web. Using functionality described in the specification, content can be flowed into multiple columns with a gap and a rule between them.

[CSS](https://www.w3.org/TR/CSS/) is a language for describing the rendering of structured documents (such as HTML and XML) on screen, on paper, etc.

<span class="content">Status of this document</span>
----------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index at https://www.w3.org/TR/.](https://www.w3.org/TR/)*

This document was published by the [CSS Working Group](https://www.w3.org/Style/CSS/) as a **Candidate Recommendation Snapshot**. Publication as a Candidate Recommendation does not imply endorsement by the W3C Membership. A Candidate Recommendation Snapshot has received [wide review](https://www.w3.org/2020/Process-20200915/#dfn-wide-review) and is intended to gather implementation experience. This document is intended to become a W3C Recommendation; it will remain a Candidate Recommendation at least until 12 December 2021 to gather additional feedback.

Please send feedback by [filing issues in GitHub](https://github.com/w3c/csswg-drafts/issues) (preferred), including the spec code “css-multicol” in the title, like this: “\[css-multicol\] *…summary of comment…*”. All issues and comments are [archived](https://lists.w3.org/Archives/Public/public-css-archive/). Alternately, feedback can be sent to the ([archived](https://lists.w3.org/Archives/Public/www-style/)) public mailing list [www-style@w3.org](mailto:www-style@w3.org?Subject=%5Bcss-multicol%5D%20PUT%20SUBJECT%20HERE).

This document is governed by the <a href="https://www.w3.org/2020/Process-20200915/" id="w3c_process_revision">15 September 2020 W3C Process Document</a>.

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy-20200915/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/groups/wg/css/ipr) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy-20200915/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy-20200915/#sec-Disclosure).

Table of Contents
-----------------

1.  [<span class="secno">1</span> <span class="content"> Introduction</span>](#introduction)
    1.  [<span class="secno">1.1</span> <span class="content"> Value Definitions</span>](#values)
2.  [<span class="secno">2</span> <span class="content"> The Multi-Column Model</span>](#the-multi-column-model)
3.  [<span class="secno">3</span> <span class="content"> The Number and Width of Columns</span>](#the-number-and-width-of-columns)
    1.  [<span class="secno">3.1</span> <span class="content">The Inline Size of Columns: the <span class="property">column-width</span> property</span>](#cw)
    2.  [<span class="secno">3.2</span> <span class="content">The Number of Columns: the <span class="property">column-count</span> property</span>](#cc)
    3.  [<span class="secno">3.3</span> <span class="content">The <span class="property">column-width</span> and <span class="property">column-count</span> Shorthand: The <span class="property">columns</span> Property</span>](#columns)
    4.  [<span class="secno">3.4</span> <span class="content">The Pseudo-algorithm</span>](#pseudo-algorithm)
    5.  [<span class="secno">3.5</span> <span class="content"> Stacking Context</span>](#stacking-context)
4.  [<span class="secno">4</span> <span class="content">Column Gaps and Rules</span>](#column-gaps-and-rules)
    1.  [<span class="secno">4.1</span> <span class="content">Gutters Between Columns: the <span class="property">column-gap</span> property</span>](#cg)
    2.  [<span class="secno">4.2</span> <span class="content">The Color of Column Rules: the <span class="property">column-rule-color</span> property</span>](#crc)
    3.  [<span class="secno">4.3</span> <span class="content">The Style Of Column Rules: the <span class="property">column-rule-style</span> property</span>](#crs)
    4.  [<span class="secno">4.4</span> <span class="content">The Width Of Column Rules: the <span class="property">column-rule-width</span> property</span>](#crw)
    5.  [<span class="secno">4.5</span> <span class="content">Column Rule Shorthand: the <span class="property">column-rule</span> property</span>](#cr)
5.  [<span class="secno">5</span> <span class="content"> Column Breaks</span>](#column-breaks)
    1.  [<span class="secno">5.1</span> <span class="content">Controlling Fragmentation: the <span class="property">break-before</span>, <span class="property">break-after</span>, <span class="property">break-inside</span> properties</span>](#break-before-break-after-break-inside)
6.  [<span class="secno">6</span> <span class="content"> Spanning Columns</span>](#spanning-columns)
    1.  [<span class="secno">6.1</span> <span class="content">Spanning An Element Across Columns: the <span class="property">column-span</span> property</span>](#column-span)
7.  [<span class="secno">7</span> <span class="content"> Filling Columns</span>](#filling-columns)
    1.  [<span class="secno">7.1</span> <span class="content">Column Balancing: the <span class="property">column-fill</span> property</span>](#cf)
8.  [<span class="secno">8</span> <span class="content"> Overflow</span>](#overflow)
    1.  [<span class="secno">8.1</span> <span class="content"> Overflow Inside Multicol Containers</span>](#overflow-inside-multicol-elements)
    2.  [<span class="secno">8.2</span> <span class="content"> Pagination and Overflow Outside Multicol Containers</span>](#pagination-and-overflow-outside-multicol)
9.  [<span class="secno"></span> <span class="content">Appendix B. Changes</span>](#changes)
    1.  [<span class="secno"></span> <span class="content">Changes from the Working Draft (WD) of 12 February 2021</span>](#changes-from-20210212)
    2.  [<span class="secno"></span> <span class="content">Changes from the Working Draft (WD) of 15 October 2019</span>](#changes-from-20191015)
    3.  [<span class="secno"></span> <span class="content">Changes from the Working Draft (WD) of 28 May 2018</span>](#changes-from-20180528)
    4.  [<span class="secno"></span> <span class="content">Changes from the Working Draft (WD) of 5 October 2017</span>](#changes-from-20171005)
    5.  [<span class="secno"></span> <span class="content">Changes from the Candidate Recommendation (CR) of 12 April 2011.</span>](#changes-from-20110412)
10. [<span class="secno"></span> <span class="content">Privacy Considerations</span>](#privacy)
11. [<span class="secno"></span> <span class="content">Security Considerations</span>](#security)
12. [<span class="secno"></span> <span class="content">Accessibility Considerations</span>](#a11y)
13. [<span class="secno"></span> <span class="content"> Acknowledgments</span>](#acknowledgments)
14. [<span class="secno"></span> <span class="content"> Conformance</span>](#w3c-conformance)
    1.  [<span class="secno"></span> <span class="content"> Document conventions</span>](#w3c-conventions)
    2.  [<span class="secno"></span> <span class="content"> Conformance classes</span>](#w3c-conformance-classes)
    3.  [<span class="secno"></span> <span class="content"> Partial implementations</span>](#w3c-partial)
        1.  [<span class="secno"></span> <span class="content"> Implementations of Unstable and Proprietary Features</span>](#w3c-conform-future-proofing)
    4.  [<span class="secno"></span> <span class="content"> Non-experimental implementations</span>](#w3c-testing)
    5.  [<span class="secno"></span> <span class="content"> CR exit criteria</span>](#w3c-cr-exit-criteria)
15. [<span class="secno"></span> <span class="content">Index</span>](#index)
    1.  [<span class="secno"></span> <span class="content">Terms defined by this specification</span>](#index-defined-here)
    2.  [<span class="secno"></span> <span class="content">Terms defined by reference</span>](#index-defined-elsewhere)
16. [<span class="secno"></span> <span class="content">References</span>](#references)
    1.  [<span class="secno"></span> <span class="content">Normative References</span>](#normative)
    2.  [<span class="secno"></span> <span class="content">Informative References</span>](#informative)
17. [<span class="secno"></span> <span class="content">Property Index</span>](#property-index)

<span class="secno">1. </span><span class="content"> Introduction</span><a href="#introduction" class="self-link"></a>
----------------------------------------------------------------------------------------------------------------------

(This section is not normative.)

This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.

Other layout methods in CSS, when applied to a parent element, change the display properties of the direct children. For example if a three column grid layout is created, the direct children of the <a href="https://www.w3.org/TR/css-grid-2/#grid-container" id="ref-for-grid-container">grid container</a> become <a href="https://www.w3.org/TR/css-grid-2/#grid-item" id="ref-for-grid-item">grid items</a> and are placed into the column tracks, one element per cell with additional rows created as needed.

The child elements of a <a href="#multi-column-container" id="ref-for-multi-column-container">multi-column container</a> however continue in normal flow, that flow is arranged into a number of columns. These columns have a flexible inline size, and therefore respond to available space by changing the size or number of columns displayed.

Multi-column layouts are easy to describe in CSS. Here is a simple example:

<a href="#example-90f03bde" class="self-link"></a>

    body { column-width: 12em }

In this example, the `body` element is set to have columns at least <span class="css">12em</span> wide. The exact number of columns will depend on the available space.

The number of columns can also be set explicitly in the style sheet:

<a href="#example-7e147b89" class="self-link"></a>

    body { column-count: 2 }

In this case, the number of columns is fixed and the column widths will vary depending on the available width.

The shorthand <a href="#propdef-columns" id="ref-for-propdef-columns" class="property">columns</a> property can be used to set either, or both, properties in one declaration.

<a href="#example-6c6d6717" class="self-link"></a> In these examples, the number of columns, the width of columns, and both the number and width are set, respectively:

    body { columns: 2 }
    body { columns: 12em }
    body { columns: 2 12em }

Another group of properties introduced in this module describe gaps and rules between columns.

<a href="#example-21b75f3b" class="self-link"></a>

    body {
      column-gap: 1em;
      column-rule: thin solid black;
    }

The first declaration in the example above sets the gap between two adjacent columns to be 1em. Column gaps are similar to padding areas. In the middle of the gap there will be a rule which is described by the <a href="#propdef-column-rule" id="ref-for-propdef-column-rule" class="property">column-rule</a> property.

The values of the <a href="#propdef-column-rule" id="ref-for-propdef-column-rule①" class="property">column-rule</a> property are similar to those of the CSS <a href="https://www.w3.org/TR/css-backgrounds-3/#propdef-border" id="ref-for-propdef-border" class="property">border</a> properties. Like <span id="ref-for-propdef-border①" class="property">border</span>, <span id="ref-for-propdef-column-rule②" class="property">column-rule</span> is a shorthand property.

<a href="#example-968144c8" class="self-link"></a> In this example, the shorthand <a href="#propdef-column-rule" id="ref-for-propdef-column-rule③" class="property">column-rule</a> declaration from the above example has been expanded:

    body {
      column-gap: 1em;
      column-rule-width: thin;
      column-rule-style: solid;
      column-rule-color: black;
    }

The <a href="#propdef-column-fill" id="ref-for-propdef-column-fill" class="property">column-fill</a> and <a href="#propdef-column-span" id="ref-for-propdef-column-span" class="property">column-span</a> properties give style sheets a wider range of visual expressions in multi-column layouts.

<a href="#example-8550a53a" class="self-link"></a> In this example, columns are set to be balanced, i.e., to have approximately the same length. Also, `h2` elements are set to span across all columns.

    div { column-fill: balance }
    h2 { column-span: all }

This specification introduces ten new properties, all of which are used in the examples above.

If all column properties have their initial value, the layout of an element will be identical to a multi-column layout with only one column.

<a href="#example-47371199" class="self-link"></a> <a href="#column-gap" id="ref-for-column-gap">Column gaps</a> (diagonal hatching) and <a href="#column-rule" id="ref-for-column-rule">column rules</a> are shown in this sample rendition of a multi-column container with padding (cross hatching). The hatched areas are present for illustrational purposes only. In actual implementations these areas will be determined by the background, the second image shows a rendering of a <a href="#multi-column-container" id="ref-for-multi-column-container①">multi-column container</a> with column-rules.

![A multi-column layout with the non-visible column-span and padding inside the multicol container highlighted.](images/initial-example.svg)

![The same layout as in the first image, as it would be displayed by an implementation.](images/initial-example-b.svg)

### <span class="secno">1.1. </span><span class="content"> Value Definitions</span><a href="#values" class="self-link"></a>

This specification follows the [CSS property definition conventions](https://www.w3.org/TR/CSS2/about.html#property-defs) from [\[CSS21\]](#biblio-css21) using the [value definition syntax](https://www.w3.org/TR/css-values-3/#value-defs) from [\[CSS-VALUES-3\]](#biblio-css-values-3). Value types not defined in this specification are defined in CSS Values & Units \[CSS-VALUES-3\]. Combination with other CSS modules may expand the definitions of these value types.

In addition to the property-specific values listed in their definitions, all properties defined in this specification also accept the <a href="https://www.w3.org/TR/css-values-4/#css-wide-keywords" id="ref-for-css-wide-keywords">CSS-wide keywords</a> as their property value. For readability they have not been repeated explicitly.

<span class="secno">2. </span><span class="content"> The Multi-Column Model</span><a href="#the-multi-column-model" class="self-link"></a>
------------------------------------------------------------------------------------------------------------------------------------------

An element whose <a href="#propdef-column-width" id="ref-for-propdef-column-width" class="property">column-width</a> or <a href="#propdef-column-count" id="ref-for-propdef-column-count" class="property">column-count</a> property is not <a href="#valdef-column-width-auto" id="ref-for-valdef-column-width-auto" class="css">auto</a> establishes a multi-column container<span id="multi-column-element"></span> (or *multicol container* for short), and therefore acts as a container for <a href="#multi-column-layout" id="ref-for-multi-column-layout">multi-column layout</a>.

In the traditional CSS box model, the content of an element is flowed into the content box of the corresponding element. Multi-column layout introduces a <a href="https://www.w3.org/TR/css-break-4/#fragmentation-context" id="ref-for-fragmentation-context">fragmentation context</a> formed of <a href="https://www.w3.org/TR/css-display-3/#anonymous" id="ref-for-anonymous">anonymous</a> <a href="https://www.w3.org/TR/css-break-4/#fragmentation-container" id="ref-for-fragmentation-container">fragmentation containers</a> called column boxes (or *columns* for short). These <a href="#column-box" id="ref-for-column-box">column boxes</a> establish an independent <a href="https://www.w3.org/TR/css-display-3/#block-formatting-context" id="ref-for-block-formatting-context">block formatting context</a> into which the multi-column container’s content flows, and form the <a href="https://www.w3.org/TR/css-display-3/#containing-block" id="ref-for-containing-block">containing block</a> for its non-positioned children.

<a href="#example-5cbb5b6f" class="self-link"></a> In this example, the width of the image is set with these rules:

    img {
      display: block;
      width: 100%;
    }

Given that the column box creates a new <a href="https://www.w3.org/TR/css-display-3/#block-formatting-context" id="ref-for-block-formatting-context①">block formatting context</a>, the <a href="https://www.w3.org/TR/css-sizing-3/#propdef-width" id="ref-for-propdef-width" class="property">width</a> is calculated relative to the column box. Therefore the image will not overflow the column box:

![The image is constrained by the column box that it is displayed in.](images/image-inside-column.svg)

<a href="#example-88e557c8" class="self-link"></a> Given that the column box creates a new <a href="https://www.w3.org/TR/css-display-3/#block-formatting-context" id="ref-for-block-formatting-context②">block formatting context</a>, a top margin set on the first child element of a multicol container will not collapse with the margins of the multicol container.

![The margin above the first paragraph has not collapsed, leaving a <span class="css">1em</span> margin above the first line in the multicol container.](images/margins-do-not-collapse.svg)

Floats that appear inside multi-column layouts are positioned with regard to the <a href="#column-box" id="ref-for-column-box①">column box</a> where the float appears.

<a href="#example-3dc32251" class="self-link"></a> In this example, this CSS fragment describes the presentation of the image:

    img {
      display: block;
      float: right;
    }

In the HTML, the image appears after the sentence ending, "the leg of a chicken".

![The image is floated inside the column box it appears in.](images/image-floated-in-column.svg)

Content overflowing a <a href="#column-box" id="ref-for-column-box②">column box</a> in the <a href="https://www.w3.org/TR/css-writing-modes-4/#block-axis" id="ref-for-block-axis">block axis</a> <a href="https://www.w3.org/TR/css-break-4/#fragment" id="ref-for-fragment">fragments</a> and continues in the next <span id="ref-for-column-box③">column box</span>.

Note: Column boxes, which are <a href="https://www.w3.org/TR/css-display-3/#anonymous" id="ref-for-anonymous①">anonymous boxes</a>, do not become the <a href="https://www.w3.org/TR/css-display-3/#containing-block" id="ref-for-containing-block①">containing block</a> for <a href="https://www.w3.org/TR/css-position-3/#absolute-position" id="ref-for-absolute-position">absolutely positioned boxes</a>. The <a href="https://www.w3.org/TR/css-position-3/#propdef-position" id="ref-for-propdef-position" class="property">position</a> property, which establishes a containing block for such boxes, applies to the <a href="#multi-column-container" id="ref-for-multi-column-container②">multicol container</a>, it being the <a href="https://www.w3.org/TR/css-display-3/#principal-box" id="ref-for-principal-box">principal box</a>.

<a href="#example-aaa86638" class="self-link"></a> In this example, the <a href="#multi-column-container" id="ref-for-multi-column-container③">multi-column container</a> has <a href="https://www.w3.org/TR/css-position-3/#propdef-position" id="ref-for-propdef-position①" class="css">position: relative</a> thus becoming the containing block. The image is a direct child of the <span id="ref-for-multi-column-container④">multi-column container</span> and has <span id="ref-for-propdef-position②" class="css">position: absolute</span>. It takes positioning from the <span id="ref-for-multi-column-container⑤">multi-column container</span> and not from the <a href="#column-box" id="ref-for-column-box④">column box</a>.

    .container {
      position: relative;
      column-count: 3;
    }
    img {
      position: absolute;
      top: 20px;
      left: 40px;
    }

![The figure demonstrates that the absolutely positioned image is positioned by reference to the multicol container and not the column box.](images/column-not-containing-block.svg)

Out-of-flow descendants of a <a href="#multi-column-container" id="ref-for-multi-column-container⑥">multi-column container</a> do affect column balancing, and the block-size of the <span id="ref-for-multi-column-container⑦">multi-column container</span>.

The column boxes are ordered in the <a href="https://www.w3.org/TR/css-writing-modes-4/#inline-base-direction" id="ref-for-inline-base-direction">inline base direction</a> of the multicol container and arranged into multicol lines. The column width<a href="#column-width" class="self-link"></a> is the length of the column box in the inline direction. The column height<a href="#column-height" class="self-link"></a> is the length of the column box in the block direction. All column boxes in a line have the same column width, and all column boxes in a line have the same column height.

Note: In text set using a vertical writing mode, the block direction runs horizontally. In a vertical writing mode columns are laid out horizontally, and the direction of the flow of blocks may be right to left, or left to right. The column-width property therefore refers to the inline size of the column, and not the physical horizontal width.

<a href="#example-1ed00d6a" class="self-link"></a>

![A diagram showing the different ways columns may be arranged due to writing mode.  
From left to right: horizontal-tb, vertical-rl, vertical-lr.](images/writing-modes.svg)

Within each <a href="#multi-column-line" id="ref-for-multi-column-line">multicol line</a> in the multi-column container, adjacent column boxes are separated by a column gap, which may contain a column rule. All column gaps in the same multi-column container are equal. All column rules in the same multi-column container are also equal, if they appear; column rules only appear between columns that both have content.

In the simplest case a multicol container will contain only one line of columns, and the height of each column will be equivalent to the used height of the multi-column container’s content box. However, <a href="https://www.w3.org/TR/css-break-4/#fragmentation" id="ref-for-fragmentation">fragmentation</a> or <a href="#spanner" id="ref-for-spanner">spanners</a> can split the content of the <a href="#multi-column-container" id="ref-for-multi-column-container⑧">multi-column container</a> into multiple <a href="#multi-column-line" id="ref-for-multi-column-line①">multicol lines</a>.

If the multi-column container is paginated, the height of each column is constrained by the page and the content continues in a new line of column boxes on the next page; a column box never splits across pages.

The same effect occurs when a *spanning element* divides the multi-column container: the columns before the spanning element are balanced and shortened to fit their content. Content after the spanning element then flows into a new, subsequent line of column boxes.

<a href="#example-c2c3431f" class="self-link"></a>

![A demonstration of how the spanning element divides the multicol container.](images/simple-span-example.svg)

A <a href="#multi-column-container" id="ref-for-multi-column-container⑨">multi-column container</a> therefore is a regular <a href="https://www.w3.org/TR/css-display-3/#block-container" id="ref-for-block-container">block container</a> that establishes a new <a href="https://www.w3.org/TR/css-display-3/#independent-formatting-context" id="ref-for-independent-formatting-context">independent formatting context</a> whose contents consist of a series of <a href="#multi-column-line" id="ref-for-multi-column-line②">multicol lines</a> and multicol spanners. Each <span id="ref-for-multi-column-line③">multi-column line</span> acts as a <a href="https://www.w3.org/TR/css-display-3/#block-level-box" id="ref-for-block-level-box">block-level box</a> that establishes a multi-column formatting context for its <a href="#column-box" id="ref-for-column-box⑤">column boxes</a>; and each <a href="#spanner" id="ref-for-spanner①">spanner</a> acts as a <span id="ref-for-block-level-box①">block-level box</span> that establishes an <span id="ref-for-independent-formatting-context①">independent formatting context</span> with its type depending on its <a href="https://www.w3.org/TR/css-display-3/#propdef-display" id="ref-for-propdef-display" class="property">display</a> value as usual.

Nested multi-column containers are allowed, but there may be implementation-specific limits.

Note: It is not possible to set properties/values on column boxes. For example, the background of a certain column box cannot be set and a column box has no concept of padding, margin or borders. Future specifications may add additional functionality. For example, columns of different widths and different backgrounds may be supported.

Note: Multicol containers with column heights larger than the viewport may pose accessibility issues. See [Accessibility Considerations](#a11y) for more details.

<span class="secno">3. </span><span class="content"> The Number and Width of Columns</span><a href="#the-number-and-width-of-columns" class="self-link"></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------

Finding the number and width of columns is fundamental when laying out multi-column content. These properties are used to set the number and width of columns:

-   <a href="#propdef-column-count" id="ref-for-propdef-column-count①" class="property">column-count</a>
-   <a href="#propdef-column-width" id="ref-for-propdef-column-width①" class="property">column-width</a>

A third property, <a href="#propdef-columns" id="ref-for-propdef-columns①" class="property">columns</a>, is a shorthand property which sets both <a href="#propdef-column-width" id="ref-for-propdef-column-width②" class="property">column-width</a> and <a href="#propdef-column-count" id="ref-for-propdef-column-count②" class="property">column-count</a>.

Other factors, such as explicit column breaks, content, and height constraints, may influence the actual number and width of columns.

### <span class="secno">3.1. </span><span class="content">The Inline Size of Columns: the <a href="#propdef-column-width" id="ref-for-propdef-column-width③" class="property">column-width</a> property</span><a href="#cw" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>column-width</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#value-defs">Value:</a></td><td>auto <a href="https://www.w3.org/TR/css-values-4/#comb-one" id="ref-for-comb-one">|</a> <a href="https://www.w3.org/TR/css-values-4/#length-value" id="ref-for-length-value" class="production css" title="Expands to: advance measure | cap | ch | cm | dvb | dvh | dvi | dvmax | dvmin | dvw | em | ex | ic | in | lh | lvb | lvh | lvi | lvmax | lvmin | lvw | mm | pc | pt | px | q | rem | rlh | svb | svh | svi | svmax | svmin | svw | vb | vh | vi | vmax | vmin | vw">&lt;length [0,∞]&gt;</a></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#initial-values">Initial:</a></td><td>auto</td></tr><tr class="even"><td>Applies to:</td><td><a href="https://www.w3.org/TR/css-display-3/#block-container" id="ref-for-block-container①">block containers</a> except <a href="https://www.w3.org/TR/css-tables-3/#table-wrapper-box" id="ref-for-table-wrapper-box">table wrapper boxes</a></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#computed">Computed value:</a></td><td>the keyword <a href="#valdef-column-width-auto" id="ref-for-valdef-column-width-auto①" class="css">auto</a> or an absolute length</td></tr><tr class="even"><td>Canonical order:</td><td>per grammar</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/web-animations/#animation-type">Animation type:</a></td><td>by computed value type</td></tr></tbody></table>

This property describes the width of columns in multicol containers.

auto   
means that the column width will be determined by other properties (e.g., <a href="#propdef-column-count" id="ref-for-propdef-column-count③" class="property">column-count</a>, if it has a non-auto value).

<a href="https://www.w3.org/TR/css-values-4/#length-value" id="ref-for-length-value①" class="production css" title="Expands to: advance measure | cap | ch | cm | dvb | dvh | dvi | dvmax | dvmin | dvw | em | ex | ic | in | lh | lvb | lvh | lvi | lvmax | lvmin | lvw | mm | pc | pt | px | q | rem | rlh | svb | svh | svi | svmax | svmin | svw | vb | vh | vi | vmax | vmin | vw">&lt;length [0,∞]&gt;</a><a href="#valdef-column-width-length-0" class="self-link"></a>   
describes the optimal column width. The actual column width may be wider (to fill the available space), or narrower (only if the available space is smaller than the specified column width). Negative values are not allowed. Used values will be clamped to a minimum of <span class="css">1px</span>.

<a href="#example-f5259b18" class="self-link"></a> For example, consider this style sheet:

    div {
      width: 100px;
      column-width: 45px;
      column-gap: 0;
      column-rule: none;
    }

There is room for two <span class="css">45px</span> wide columns inside the <span class="css">100px</span> wide element. In order to fill the available space the actual column width will be increased to <span class="css">50px</span>.

<a href="#example-ea5c2499" class="self-link"></a> Also, consider this style sheet:

    div {
      width: 40px;
      column-width: 45px;
      column-gap: 0;
      column-rule: none;
    }

The available space is smaller than the specified column width and the actual column width will therefore be decreased.

To ensure that <a href="#propdef-column-width" id="ref-for-propdef-column-width④" class="property">column-width</a> can be used with vertical text, column width means the length of the line boxes inside the columns.

Note: The reason for making <a href="#propdef-column-width" id="ref-for-propdef-column-width⑤" class="property">column-width</a> somewhat flexible is to achieve scalable designs that can fit many screen sizes. To set an exact column width, the column gap and the width of the multicol container (assuming horizontal text) must also be specified.

### <span class="secno">3.2. </span><span class="content">The Number of Columns: the <a href="#propdef-column-count" id="ref-for-propdef-column-count④" class="property">column-count</a> property</span><a href="#cc" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>column-count</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#value-defs">Value:</a></td><td>auto <a href="https://www.w3.org/TR/css-values-4/#comb-one" id="ref-for-comb-one①">|</a> <a href="https://www.w3.org/TR/css-values-4/#integer-value" id="ref-for-integer-value" class="production css">&lt;integer [1,∞]&gt;</a></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#initial-values">Initial:</a></td><td>auto</td></tr><tr class="even"><td>Applies to:</td><td><a href="https://www.w3.org/TR/css-display-3/#block-container" id="ref-for-block-container②">block containers</a> except <a href="https://www.w3.org/TR/css-tables-3/#table-wrapper-box" id="ref-for-table-wrapper-box①">table wrapper boxes</a></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#computed">Computed value:</a></td><td>specified value</td></tr><tr class="even"><td>Canonical order:</td><td>per grammar</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/web-animations/#animation-type">Animatable:</a></td><td>by computed value</td></tr></tbody></table>

This property describes the number of columns of a <a href="#multi-column-container" id="ref-for-multi-column-container①⓪">multicol container</a>.

auto<a href="#valdef-column-count-auto" class="self-link"></a>   
means that the number of columns will be determined by other properties (e.g., <a href="#propdef-column-width" id="ref-for-propdef-column-width⑥" class="property">column-width</a>, if it has a non-auto value).

<a href="https://www.w3.org/TR/css-values-4/#integer-value" id="ref-for-integer-value①" class="production css">&lt;integer [1,∞]&gt;</a><a href="#valdef-column-count-integer-1" class="self-link"></a>   
describes the optimal number of columns into which the content of the element will be flowed. Values must be greater than 0. If both <a href="#propdef-column-width" id="ref-for-propdef-column-width⑦" class="property">column-width</a> and <a href="#propdef-column-count" id="ref-for-propdef-column-count⑤" class="property">column-count</a> have non-auto values, the integer value describes the maximum number of columns.

<a href="#example-6acd2708" class="self-link"></a> Example:

    body { column-count: 3 }

### <span class="secno">3.3. </span><span class="content">The <a href="#propdef-column-width" id="ref-for-propdef-column-width⑧" class="property">column-width</a> and <a href="#propdef-column-count" id="ref-for-propdef-column-count⑥" class="property">column-count</a> Shorthand: The <a href="#propdef-columns" id="ref-for-propdef-columns②" class="property">columns</a> Property</span><a href="#columns" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>columns</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#value-defs">Value:</a></td><td><a href="#propdef-column-width" id="ref-for-propdef-column-width⑨" class="production">&lt;'column-width'&gt;</a> <a href="https://www.w3.org/TR/css-values-4/#comb-any" id="ref-for-comb-any">||</a> <a href="#propdef-column-count" id="ref-for-propdef-column-count⑦" class="production">&lt;'column-count'&gt;</a></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#initial-values">Initial:</a></td><td>see individual properties</td></tr><tr class="even"><td>Applies to:</td><td>see individual properties</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#inherited-property">Inherited:</a></td><td>see individual properties</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#percentages">Percentages:</a></td><td>see individual properties</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#computed">Computed value:</a></td><td>see individual properties</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/web-animations/#animation-type">Animation type:</a></td><td>see individual properties</td></tr><tr class="odd"><td>Canonical order:</td><td>per grammar</td></tr></tbody></table>

This is a shorthand property for setting <a href="#propdef-column-width" id="ref-for-propdef-column-width①⓪" class="property">column-width</a> and <a href="#propdef-column-count" id="ref-for-propdef-column-count⑧" class="property">column-count</a>. Omitted values are set to their initial values.

<a href="#example-628937c1" class="self-link"></a> Here are some valid declarations using the <a href="#propdef-columns" id="ref-for-propdef-columns③" class="property">columns</a> property:

    columns: 12em;      /* column-width: 12em; column-count: auto */
    columns: auto 12em; /* column-width: 12em; column-count: auto */
    columns: 2;         /* column-width: auto; column-count: 2 */
    columns: 2 auto;    /* column-width: auto; column-count: 2 */
    columns: auto;      /* column-width: auto; column-count: auto */
    columns: auto auto; /* column-width: auto; column-count: auto */

### <span class="secno">3.4. </span><span class="content">The Pseudo-algorithm</span><a href="#pseudo-algorithm" class="self-link"></a>

The pseudo-algorithm below determines the used values for <a href="#propdef-column-count" id="ref-for-propdef-column-count⑨" class="property">column-count</a> (N) and <a href="#propdef-column-width" id="ref-for-propdef-column-width①①" class="property">column-width</a> (W). There is one other variable in the pseudo-algorithm: U is the used width of the multi-column container.

Note: The used width U of the multi-column container can depend on the element’s contents, in which case it also depends on the computed values of the <a href="#propdef-column-count" id="ref-for-propdef-column-count①⓪" class="property">column-count</a> and <a href="#propdef-column-width" id="ref-for-propdef-column-width①②" class="property">column-width</a> properties. This specification does not define how U is calculated. Another module (probably the Basic Box Model [\[CSS3BOX\]](#biblio-css3box) or the Intrinsic & Extrinsic Sizing Module [\[CSS3-SIZING\]](#biblio-css3-sizing)) is expected to define this.

The `floor(X)` function returns the largest integer Y ≤ X.

    (01)  if ((column-width = auto) and (column-count = auto)) then
    (02)      exit; /* not a multicol container */
    (03)  if column-width = auto then
    (04)      N := column-count
    (05)  else if column-count = auto then
    (06)      N := max(1,
    (07)        floor((U + column-gap)/(column-width + column-gap)))
    (08)  else
    (09)      N := min(column-count, max(1,
    (10)        floor((U + column-gap)/(column-width + column-gap))))

And:

    (11)  W := max(0, ((U + column-gap)/N - column-gap))

For the purpose of finding the number of auto-repeated columns, the UA must floor the column size to a UA-specified value to avoid division by zero. It is suggested that this floor be 1px or less.

In fragmented contexts such as in <a href="https://www.w3.org/TR/mediaqueries-5/#paged-media" id="ref-for-paged-media">paged media</a>, user agents may perform this calculation on a per-fragment basis.

The used value for <a href="#propdef-column-count" id="ref-for-propdef-column-count①①" class="property">column-count</a> is calculated without regard for explicit column breaks or constrained column heights, while the actual value takes these into consideration.

<a href="#example-855fb04e" class="self-link"></a> In this example, the actual column-count is higher than the used column-count due to explicit column breaks:

    div {
      width: 40em;
      columns: 20em;
      column-gap: 0;
    }

    p {
      break-after: column;
    }

    <div>
      <p>one
      <p>two
      <p>three
    </div>

![The computed column-count is auto, the used column-count is 2 and the actual column-count is 3.](images/column-count-higher-than-used-count.svg)

<a href="#example-69e715d6" class="self-link"></a> The actual column-count may be lower than the used column-count. Consider this example:

    div {
      width: 80em;
      height: 10em;
      columns: 20em;
      column-gap: 0;
      column-fill: auto;
    }

    <div>foo</div>

The computed column-count is auto, the used column-count is 4, and the actual column-count is 1.

### <span class="secno">3.5. </span><span class="content"> Stacking Context</span><a href="#stacking-context" class="self-link"></a>

All column boxes in a multi-column container are in the same stacking context and the drawing order of their contents is as specified in CSS 2.1. Column boxes do not establish new stacking contexts.

<span class="secno">4. </span><span class="content">Column Gaps and Rules</span><a href="#column-gaps-and-rules" class="self-link"></a>
---------------------------------------------------------------------------------------------------------------------------------------

Column gaps and rules are placed between columns in the same <a href="#multi-column-container" id="ref-for-multi-column-container①①">multicol container</a>. The length of the column gaps and column rules is equal to the column height. Column gaps take up space. That is, column gaps will push apart content in adjacent columns (within the same <span id="ref-for-multi-column-container①②">multicol container</span>).

A <a href="#column-rule" id="ref-for-column-rule①">column rule</a> is drawn in the middle of the <a href="#column-gap" id="ref-for-column-gap①">column gap</a> with the endpoints at opposing content edges of the <a href="#multi-column-container" id="ref-for-multi-column-container①③">multicol container</a>. Column rules do not take up space. That is, the presence or thickness of a <span id="ref-for-column-rule②">column rule</span> will not alter the placement of anything else. If a <span id="ref-for-column-rule③">column rule</span> is wider than its gap, the adjacent column boxes will overlap the rule, and the rule may possibly extend outside the box of the <span id="ref-for-multi-column-container①④">multicol container</span>. Column rules are painted just above the border of the <span id="ref-for-multi-column-container①⑤">multicol container</span>. For scrollable multicol containers, note that while the border and background of the <span id="ref-for-multi-column-container①⑥">multicol container</span> obviously aren’t scrolled, the rules need to scroll along with the columns. Column rules are only drawn between two columns that both have content.

### <span class="secno">4.1. </span><span class="content">Gutters Between Columns: the <a href="https://www.w3.org/TR/css-align-3/#propdef-column-gap" id="ref-for-propdef-column-gap" class="property">column-gap</a> property</span><a href="#cg" class="self-link"></a>

The <a href="https://www.w3.org/TR/css-align-3/#propdef-column-gap" id="ref-for-propdef-column-gap①" class="property">column-gap</a> property is defined in [\[CSS3-ALIGN\]](#biblio-css3-align).

In a <a href="#multi-column-formatting-context" id="ref-for-multi-column-formatting-context">multi-column formatting context</a> the used value of <a href="https://www.w3.org/TR/css-align-3/#valdef-row-gap-normal" id="ref-for-valdef-row-gap-normal" class="css">normal</a> for the <a href="https://www.w3.org/TR/css-align-3/#propdef-column-gap" id="ref-for-propdef-column-gap②" class="property">column-gap</a> property is <span class="css">1em</span>. This ensures columns are readable when the initial values are used. If there is a column rule between columns, it will appear in the middle of the gap.

### <span class="secno">4.2. </span><span class="content">The Color of Column Rules: the <a href="#propdef-column-rule-color" id="ref-for-propdef-column-rule-color" class="property">column-rule-color</a> property</span><a href="#crc" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>column-rule-color</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#value-defs">Value:</a></td><td><a href="https://www.w3.org/TR/css-color-4/#typedef-color" id="ref-for-typedef-color" class="production css" title="Expands to: aliceblue | antiquewhite | aqua | aquamarine | azure | beige | bisque | black | blanchedalmond | blue | blueviolet | brown | burlywood | cadetblue | chartreuse | chocolate | coral | cornflowerblue | cornsilk | crimson | currentcolor | cyan | darkblue | darkcyan | darkgoldenrod | darkgray | darkgreen | darkgrey | darkkhaki | darkmagenta | darkolivegreen | darkorange | darkorchid | darkred | darksalmon | darkseagreen | darkslateblue | darkslategray | darkslategrey | darkturquoise | darkviolet | deeppink | deepskyblue | dimgray | dimgrey | dodgerblue | firebrick | floralwhite | forestgreen | fuchsia | gainsboro | ghostwhite | gold | goldenrod | gray | green | greenyellow | grey | honeydew | hotpink | indianred | indigo | ivory | khaki | lavender | lavenderblush | lawngreen | lemonchiffon | lightblue | lightcoral | lightcyan | lightgoldenrodyellow | lightgray | lightgreen | lightgrey | lightpink | lightsalmon | lightseagreen | lightskyblue | lightslategray | lightslategrey | lightsteelblue | lightyellow | lime | limegreen | linen | magenta | maroon | mediumaquamarine | mediumblue | mediumorchid | mediumpurple | mediumseagreen | mediumslateblue | mediumspringgreen | mediumturquoise | mediumvioletred | midnightblue | mintcream | mistyrose | moccasin | navajowhite | navy | none | oldlace | olive | olivedrab | orange | orangered | orchid | palegoldenrod | palegreen | paleturquoise | palevioletred | papayawhip | peachpuff | peru | pink | plum | powderblue | purple | rebeccapurple | red | rosybrown | royalblue | saddlebrown | salmon | sandybrown | seagreen | seashell | sienna | silver | skyblue | slateblue | slategray | slategrey | snow | springgreen | steelblue | tan | teal | thistle | tomato | transparent | turquoise | violet | wheat | white | whitesmoke | yellow | yellowgreen">&lt;color&gt;</a></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#initial-values">Initial:</a></td><td>currentcolor</td></tr><tr class="even"><td>Applies to:</td><td>multicol containers</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#computed">Computed value:</a></td><td>computed color</td></tr><tr class="even"><td>Canonical order:</td><td>per grammar</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/web-animations/#animation-type">Animation type:</a></td><td>by computed value type</td></tr></tbody></table>

<a href="https://www.w3.org/TR/css-color-4/#typedef-color" id="ref-for-typedef-color①" class="production css" title="Expands to: aliceblue | antiquewhite | aqua | aquamarine | azure | beige | bisque | black | blanchedalmond | blue | blueviolet | brown | burlywood | cadetblue | chartreuse | chocolate | coral | cornflowerblue | cornsilk | crimson | currentcolor | cyan | darkblue | darkcyan | darkgoldenrod | darkgray | darkgreen | darkgrey | darkkhaki | darkmagenta | darkolivegreen | darkorange | darkorchid | darkred | darksalmon | darkseagreen | darkslateblue | darkslategray | darkslategrey | darkturquoise | darkviolet | deeppink | deepskyblue | dimgray | dimgrey | dodgerblue | firebrick | floralwhite | forestgreen | fuchsia | gainsboro | ghostwhite | gold | goldenrod | gray | green | greenyellow | grey | honeydew | hotpink | indianred | indigo | ivory | khaki | lavender | lavenderblush | lawngreen | lemonchiffon | lightblue | lightcoral | lightcyan | lightgoldenrodyellow | lightgray | lightgreen | lightgrey | lightpink | lightsalmon | lightseagreen | lightskyblue | lightslategray | lightslategrey | lightsteelblue | lightyellow | lime | limegreen | linen | magenta | maroon | mediumaquamarine | mediumblue | mediumorchid | mediumpurple | mediumseagreen | mediumslateblue | mediumspringgreen | mediumturquoise | mediumvioletred | midnightblue | mintcream | mistyrose | moccasin | navajowhite | navy | none | oldlace | olive | olivedrab | orange | orangered | orchid | palegoldenrod | palegreen | paleturquoise | palevioletred | papayawhip | peachpuff | peru | pink | plum | powderblue | purple | rebeccapurple | red | rosybrown | royalblue | saddlebrown | salmon | sandybrown | seagreen | seashell | sienna | silver | skyblue | slateblue | slategray | slategrey | snow | springgreen | steelblue | tan | teal | thistle | tomato | transparent | turquoise | violet | wheat | white | whitesmoke | yellow | yellowgreen">&lt;color&gt;</a><a href="#valdef-column-rule-color-color" class="self-link"></a>   
Specifies the color of the <a href="#column-rule" id="ref-for-column-rule④">column rule</a>.

### <span class="secno">4.3. </span><span class="content">The Style Of Column Rules: the <a href="#propdef-column-rule-style" id="ref-for-propdef-column-rule-style" class="property">column-rule-style</a> property</span><a href="#crs" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>column-rule-style</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#value-defs">Value:</a></td><td><a href="https://www.w3.org/TR/css-backgrounds-3/#typedef-line-style" id="ref-for-typedef-line-style" class="production css" title="Expands to: dashed | dotted | double | groove | hidden | inset | none | outset | ridge | solid">&lt;line-style&gt;</a></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#initial-values">Initial:</a></td><td>none</td></tr><tr class="even"><td>Applies to:</td><td>multicol containers</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#computed">Computed value:</a></td><td>specified keyword</td></tr><tr class="even"><td>Canonical order:</td><td>per grammar</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/web-animations/#animation-type">Animation type:</a></td><td>discrete</td></tr></tbody></table>

The <a href="#propdef-column-rule-style" id="ref-for-propdef-column-rule-style①" class="property">column-rule-style</a> property sets the style of the rule between columns of an element. The <a href="https://www.w3.org/TR/css-backgrounds-3/#typedef-line-style" id="ref-for-typedef-line-style①" class="production css" title="Expands to: dashed | dotted | double | groove | hidden | inset | none | outset | ridge | solid">&lt;line-style&gt;</a> values are interpreted as in the [collapsing border model](https://www.w3.org/TR/CSS2/tables.html#collapsing-borders).

The <a href="https://www.w3.org/TR/css-backgrounds-3/#valdef-line-style-none" id="ref-for-valdef-line-style-none" class="css">none</a> value forces the computed value of <a href="#propdef-column-rule-width" id="ref-for-propdef-column-rule-width" class="property">column-rule-width</a> to be <span class="css">0</span>.

### <span class="secno">4.4. </span><span class="content">The Width Of Column Rules: the <a href="#propdef-column-rule-width" id="ref-for-propdef-column-rule-width①" class="property">column-rule-width</a> property</span><a href="#crw" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>column-rule-width</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#value-defs">Value:</a></td><td><a href="https://www.w3.org/TR/css-backgrounds-3/#typedef-line-width" id="ref-for-typedef-line-width" class="production css" title="Expands to: medium | thick | thin">&lt;line-width&gt;</a></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#initial-values">Initial:</a></td><td>medium</td></tr><tr class="even"><td>Applies to:</td><td>multicol containers</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#computed">Computed value:</a></td><td>absolute length; <span class="css">0</span> if the column rule style is <a href="https://www.w3.org/TR/css-backgrounds-3/#valdef-line-style-none" id="ref-for-valdef-line-style-none①" class="css">none</a> or <a href="https://www.w3.org/TR/css-backgrounds-3/#valdef-line-style-hidden" id="ref-for-valdef-line-style-hidden" class="css">hidden</a></td></tr><tr class="even"><td>Canonical order:</td><td>per grammar</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/web-animations/#animation-type">Animation type:</a></td><td>by computed value type</td></tr></tbody></table>

This property sets the width of the rule between columns. Negative values are not allowed.

### <span class="secno">4.5. </span><span class="content">Column Rule Shorthand: the <a href="#propdef-column-rule" id="ref-for-propdef-column-rule④" class="property">column-rule</a> property</span><a href="#cr" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>column-rule</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#value-defs">Value:</a></td><td><a href="#propdef-column-rule-width" id="ref-for-propdef-column-rule-width②" class="production">&lt;'column-rule-width'&gt;</a> <a href="https://www.w3.org/TR/css-values-4/#comb-any" id="ref-for-comb-any①">||</a> <a href="#propdef-column-rule-style" id="ref-for-propdef-column-rule-style②" class="production">&lt;'column-rule-style'&gt;</a> <span id="ref-for-comb-any②">||</span> <a href="#propdef-column-rule-color" id="ref-for-propdef-column-rule-color①" class="production">&lt;'column-rule-color'&gt;</a></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#initial-values">Initial:</a></td><td>see individual properties</td></tr><tr class="even"><td>Applies to:</td><td>see individual properties</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#inherited-property">Inherited:</a></td><td>see individual properties</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#percentages">Percentages:</a></td><td>see individual properties</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#computed">Computed value:</a></td><td>see individual properties</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/web-animations/#animation-type">Animation type:</a></td><td>see individual properties</td></tr><tr class="odd"><td>Canonical order:</td><td>per grammar</td></tr></tbody></table>

This property is a shorthand for setting <a href="#propdef-column-rule-width" id="ref-for-propdef-column-rule-width③" class="property">column-rule-width</a>, <a href="#propdef-column-rule-style" id="ref-for-propdef-column-rule-style③" class="property">column-rule-style</a>, and <a href="#propdef-column-rule-color" id="ref-for-propdef-column-rule-color②" class="property">column-rule-color</a> at the same place in the style sheet. Omitted values are set to their initial values.

<a href="#example-2ebcf127" class="self-link"></a> In this example, the <a href="#column-rule" id="ref-for-column-rule⑤">column rule</a> and the <a href="#column-gap" id="ref-for-column-gap②">column gap</a> have the same width. Therefore, they will occupy exactly the same space.

    body {
      column-gap: 35px;
      column-rule-width: 35px;
      column-rule-style: solid;
      column-rule-color: black;
    }

![The column rule and column gap occupy the same space.](images/rule-same-width-as-gap.svg)

<span class="secno">5. </span><span class="content"> Column Breaks</span><a href="#column-breaks" class="self-link"></a>
------------------------------------------------------------------------------------------------------------------------

When content is laid out in multiple columns, the user agent must determine where column breaks are placed. The problem of breaking content into columns is similar to breaking content into pages, which is described in CSS 2.1, section 13.3.3 [\[CSS21\]](#biblio-css21).

Three new properties are introduced to allow column breaks to be described in the same properties as page breaks: <a href="https://www.w3.org/TR/css-break-3/#propdef-break-before" id="ref-for-propdef-break-before" class="property">break-before</a>, <a href="https://www.w3.org/TR/css-break-3/#propdef-break-after" id="ref-for-propdef-break-after" class="property">break-after</a>, and <a href="https://www.w3.org/TR/css-break-3/#propdef-break-inside" id="ref-for-propdef-break-inside" class="property">break-inside</a>.

### <span class="secno">5.1. </span><span class="content">Controlling Fragmentation: the <a href="https://www.w3.org/TR/css-break-3/#propdef-break-before" id="ref-for-propdef-break-before①" class="property">break-before</a>, <a href="https://www.w3.org/TR/css-break-3/#propdef-break-after" id="ref-for-propdef-break-after①" class="property">break-after</a>, <a href="https://www.w3.org/TR/css-break-3/#propdef-break-inside" id="ref-for-propdef-break-inside①" class="property">break-inside</a> properties</span><a href="#break-before-break-after-break-inside" class="self-link"></a>

<a href="https://www.w3.org/TR/css-break-3/#propdef-break-before" id="ref-for-propdef-break-before②" class="property">break-before</a>, <a href="https://www.w3.org/TR/css-break-3/#propdef-break-after" id="ref-for-propdef-break-after②" class="property">break-after</a>, and <a href="https://www.w3.org/TR/css-break-3/#propdef-break-inside" id="ref-for-propdef-break-inside②" class="property">break-inside</a> are defined in [\[CSS3-BREAK\]](#biblio-css3-break).

<span class="secno">6. </span><span class="content"> Spanning Columns</span><a href="#spanning-columns" class="self-link"></a>
------------------------------------------------------------------------------------------------------------------------------

The <a href="#propdef-column-span" id="ref-for-propdef-column-span①" class="property">column-span</a> property makes it possible for an element to span across several columns.

### <span class="secno">6.1. </span><span class="content">Spanning An Element Across Columns: the <a href="#propdef-column-span" id="ref-for-propdef-column-span②" class="property">column-span</a> property</span><a href="#column-span" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>column-span</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#value-defs">Value:</a></td><td>none <a href="https://www.w3.org/TR/css-values-4/#comb-one" id="ref-for-comb-one②">|</a> all</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#initial-values">Initial:</a></td><td>none</td></tr><tr class="even"><td>Applies to:</td><td>in-flow block-level elements</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#computed">Computed value:</a></td><td>specified keyword</td></tr><tr class="even"><td>Canonical order:</td><td>per grammar</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/web-animations/#animation-type">Animation type:</a></td><td>discrete</td></tr></tbody></table>

This property describes how many columns an element spans across. Values are:

none   
The element does not span multiple columns.

all   
The element forces a column break and is taken <a href="https://www.w3.org/TR/css-display-3/#out-of-flow" id="ref-for-out-of-flow">out of flow</a> to span across all columns of the nearest multicol ancestor in the same <a href="https://www.w3.org/TR/css-display-3/#block-formatting-context" id="ref-for-block-formatting-context③">block formatting context</a>. Content in the normal flow that appears before the element is automatically balanced across all columns in the immediately preceding <a href="#multi-column-line" id="ref-for-multi-column-line④">multi-column line</a> before the element appears, and any subsequent content flows into a new <span id="ref-for-multi-column-line⑤">multi-column line</span> after the element. The element establishes an <a href="https://www.w3.org/TR/css-display-3/#independent-formatting-context" id="ref-for-independent-formatting-context②">independent formatting context</a>.

Note: Whether the element establishes a new <a href="https://www.w3.org/TR/css-display-3/#formatting-context" id="ref-for-formatting-context">formatting context</a> does not depend on whether the element is a descendant of a multicol or not. When <a href="#propdef-column-span" id="ref-for-propdef-column-span③" class="property">column-span</a> is <a href="#valdef-column-span-all" id="ref-for-valdef-column-span-all" class="css">all</a>, it always does. This helps with robustness of designs to later revisions that remove the multicol, or when media queries turn the multicol off in some situations.

An element that spans more than one column is called a spanning element<a href="#spanning-element" class="self-link"></a> and the box it creates is called a spanner.

The <a href="https://www.w3.org/TR/css-display-3/#containing-block" id="ref-for-containing-block②">containing block</a> of the <a href="#spanner" id="ref-for-spanner②">spanner</a> is the <a href="#multi-column-container" id="ref-for-multi-column-container①⑦">multicol container</a> itself. Consequently, in cases where the spanner itself does not establish a <span id="ref-for-containing-block③">containing block</span> for <a href="https://www.w3.org/TR/css-position-3/#absolute-position" id="ref-for-absolute-position①">absolutely positioned boxes</a> inside the spanner, their <a href="https://www.w3.org/TR/css-display-3/#containing-block-chain" id="ref-for-containing-block-chain">containing block chain</a> skips directly to the <span id="ref-for-multi-column-container①⑧">multicol container</span> (skipping any ancestors between the <span id="ref-for-spanner③">spanner</span> and the <span id="ref-for-multi-column-container①⑨">multicol container</span>).

Although the spanner is taken <a href="https://www.w3.org/TR/css-display-3/#out-of-flow" id="ref-for-out-of-flow①">out-of-flow</a>, this does not affect the [painting order](https://www.w3.org/TR/CSS2/zindex.html) [\[CSS21\]](#biblio-css21) of the spanning element.

<a href="#example-b640c5a3" class="self-link"></a> In this example, an `h2` element has been added to the sample document after the sixth sentence (i.e., after the words "the leg of a"). This styling applies:

    h2 { column-span: all; background: silver }

By setting <a href="#propdef-column-span" id="ref-for-propdef-column-span④" class="property">column-span</a> to <a href="#valdef-column-span-all" id="ref-for-valdef-column-span-all①" class="css">all</a>, all content that appears before the `h2` element is shown above the `h2` element.

![The h2 element is set to column-span: all](images/h2-spanner.svg)

Note that because the spanner splits the <a href="#multi-column-line" id="ref-for-multi-column-line⑥">multi-column line</a>, it also interrupts any <a href="#column-rule" id="ref-for-column-rule⑥">column rules</a> (which are only drawn between <a href="#column-box" id="ref-for-column-box⑥">columns</a> in a <span id="ref-for-multi-column-line⑦">multi-column line</span>).

A spanning element may be lower than the first level of descendants as long as they are part of the same <a href="https://www.w3.org/TR/css-display-3/#formatting-context" id="ref-for-formatting-context①">formatting context</a>. If the fragment before the spanner is empty, nothing special happens; the top margin/border/padding is above the spanning element, as an empty <a href="https://www.w3.org/TR/css-break-4/#fragment" id="ref-for-fragment①">fragment</a>.

<a href="#example-fa0001d6" class="self-link"></a> In this example the <a href="#multi-column-container" id="ref-for-multi-column-container②⓪">multicol container</a> is the `article` element. Inside this parent is a paragraph and then a section element. The section contains an `h2` heading set to <a href="#valdef-column-span-all" id="ref-for-valdef-column-span-all②" class="css">all</a> this spans all three columns while the containing section remains inside the column boxes.

The `h2` is the first child of the section. This means that the margin, border (shown in red in the diagram) and padding on this section appear before the spanning `h2` as an empty fragment.

    <article>
      <p>...</p>
      <section>
        <h2>An h2 element</h2>
        <p>...</p>
      </section>
    </article>

    section {
      border: 2px solid red;
      margin-top: 65px;
      padding-top: 20px;
    }

    h2 {
      column-span: all;
      background: silver
    }

![The `h2` element is set to <a href="#propdef-column-span" id="ref-for-propdef-column-span⑤" class="css">column-span: all</a>, the section has a red border and top padding and margin](images/nested-spanner.svg)

A spanning element takes up more space than the element would take up otherwise. When space is limited, it may be impossible to find room for the spanning element. In these cases, user agents may treat the element as if <a href="#valdef-column-span-none" id="ref-for-valdef-column-span-none" class="css">none</a> had been specified on this property.

<a href="#example-2980e0d6" class="self-link"></a> In this example, the `h2` element appears later in the content, and the height of the multicol container is constrained. Therefore, the `h2` element appears in the overflow and there is not room to make the element spanning. As a result, the element appears as if <a href="#propdef-column-span" id="ref-for-propdef-column-span⑥" class="css">column-span: none</a> was specified.

![The h2 element is in an overflow column and appears as if column-span none is specified](images/h2-in-the-overflow-no-span.svg)

<a href="#example-e49da6ca" class="self-link"></a> This example is similar to the previous example, except that the H2 element appears naturally in the last column. Still, there is not enough room to make the element spanning.

![The h2 element is in the final column and appears as if column-span none is specified](images/h2-in-the-last-column-no-span.svg)

<a href="#example-8f69cecc" class="self-link"></a> In fragmented contexts spanning elements are honored in all fragments. In this example, we are in <a href="https://www.w3.org/TR/mediaqueries-5/#paged-media" id="ref-for-paged-media①">paged media</a>, and the first three paragraphs have column breaks after them. A spanning `H2` element appears after the fourth paragraph.

![This would appear on the first page](images/spanner-page-break1.svg)

![This would appear on the second page](images/spanner-page-break2.svg)

Spanners are block-level boxes therefore the margins of two adjacent spanners will collapse with each other. The margins of two spanners separated only by an absolutely positioned item will collapse with each other, as absolutely positioned items do not create column boxes. As column boxes establish a new <a href="https://www.w3.org/TR/css-display-3/#block-formatting-context" id="ref-for-block-formatting-context④">block formatting context</a>, margins on elements inside a column box will not collapse with the margin of a spanner.

<a href="#example-f82c16c7" class="self-link"></a> Spanners establish new <a href="https://www.w3.org/TR/css-display-3/#formatting-context" id="ref-for-formatting-context②">formatting contexts</a>, but their margins can be changed by their surroundings. In this example, two spanners naturally end up at the top of a page. The top margin of the first spanner is truncated due to adjoining an unforced break. The margins between the two spanners collapse with each other. However, the bottom margin of the second spanner does not collapse with the top margin of the subsequent element.

    h2 {
      margin: 16px 0;
      column-span: all;
      background: silver
    }
    p { margin-top: 16px }

![Margins collapse between two spanning elements, but not the bottom margin of a spanner and top margin of next element.](images/two-spanners-margin-no-collapse.svg)

<span class="secno">7. </span><span class="content"> Filling Columns</span><a href="#filling-columns" class="self-link"></a>
----------------------------------------------------------------------------------------------------------------------------

There are two strategies for filling columns: columns can either be balanced, or not. If columns are balanced, user agents should try to minimize variations in column height, while honoring forced breaks, <a href="https://www.w3.org/TR/css-break-4/#propdef-widows" id="ref-for-propdef-widows" class="property">widows</a> and <a href="https://www.w3.org/TR/css-break-3/#propdef-orphans" id="ref-for-propdef-orphans" class="property">orphans</a>, and other properties that may affect column heights. If columns are not balanced, they are filled sequentially; some columns may end up partially filled, or with no content at all.

### <span class="secno">7.1. </span><span class="content">Column Balancing: the <a href="#propdef-column-fill" id="ref-for-propdef-column-fill①" class="property">column-fill</a> property</span><a href="#cf" class="self-link"></a>

<table><tbody><tr class="odd"><td>Name:</td><td>column-fill</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#value-defs">Value:</a></td><td>auto <a href="https://www.w3.org/TR/css-values-4/#comb-one" id="ref-for-comb-one③">|</a> balance <span id="ref-for-comb-one④">|</span> balance-all</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#initial-values">Initial:</a></td><td>balance</td></tr><tr class="even"><td>Applies to:</td><td>multicol containers</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#inherited-property">Inherited:</a></td><td>no</td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-values/#percentages">Percentages:</a></td><td>N/A</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-cascade/#computed">Computed value:</a></td><td>specified keyword</td></tr><tr class="even"><td>Canonical order:</td><td>per grammar</td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/web-animations/#animation-type">Animation type:</a></td><td>discrete</td></tr></tbody></table>

This property specifies whether content in a <a href="#multi-column-line" id="ref-for-multi-column-line⑧">multi-column line</a> that does *not* immediately precede a <a href="#spanner" id="ref-for-spanner④">spanner</a> is balanced across columns or not. The values are:

balance<a href="#valdef-column-fill-balance" class="self-link"></a>   
Balance content equally between columns, as far as possible. In fragmented contexts, only the last fragment is balanced.

balance-all<a href="#valdef-column-fill-balance-all" class="self-link"></a>   
Balance content equally between columns, as far as possible. In fragmented contexts, all fragments are balanced.

auto<a href="#valdef-column-fill-auto" class="self-link"></a>   
fill columns sequentially

In continuous contexts, this property does not have any effect when there are overflow columns.

<a href="#example-0143ee45" class="self-link"></a> In this example, an article only has one short paragraph which fits on three lines. The three lines are displayed in three different columns due to column balancing.

    article {
      width: 60em;
      height: auto;
      columns: 4;
      column-fill: balance;
    }

![Three lines displayed in three columns due to column balancing.](images/column-balancing-one-paragraph.svg)

<a href="#example-8e97de73" class="self-link"></a> In this example, column balancing is turned off, and the article has a height:

    article {
      width: 60em;
      height: 4em;
      columns: 4;
      column-fill: auto;
    }

As a result, the first column is filled with all content:

![No balancing so the whole text is shown in one paragraph.](images/no-column-balancing-one-paragraph.svg)

<a href="#example-0c7abc2c" class="self-link"></a> In this example, an article has two paragraphs: first a long one, then a shorter one. This code is applied:

    article {
      width: 60em;
      height: auto;
      columns: 4;
      column-fill: balance;
    }

    p {
      break-after: column;
    }

The shortest column height possible contains five lines of text. After the column height has been established, columns are filled sequentially. As a result, the third column is as high as the first two columns, while the last column ends up being significantly shorter.

![Once column height is established, columns are filled sequentially.](images/column-balancing-with-column-break.svg)

<a href="#example-3b949a54" class="self-link"></a>

    article {
      width: 60em;
      height: auto;
      columns: 4;
      column-fill: balance;
    }

In this example, an article starts with an unbreakable figure which sets the column height. Subsequent content is filled sequentially into the remaining columns:

![Column height is established by the figure.](images/column-balancing-with-figure.svg)

<span class="secno">8. </span><span class="content"> Overflow</span><a href="#overflow" class="self-link"></a>
--------------------------------------------------------------------------------------------------------------

### <span class="secno">8.1. </span><span class="content"> Overflow Inside Multicol Containers</span><a href="#overflow-inside-multicol-elements" class="self-link"></a>

Except for cases where this would cause a column break, content that extends outside column boxes visibly overflows and is not clipped to the <a href="#column-box" id="ref-for-column-box⑦">column box</a>.

Note: See [§ 5 Column Breaks](#column-breaks) for column breaks and [§ 8.2 Pagination and Overflow Outside Multicol Containers](#pagination-and-overflow-outside-multicol) for whether it is clipped to the multi-column container’s content box.

<a href="#example-276e0e20" class="self-link"></a> In this example, the image is wider than the column:

![Content visibly overflows and is not clipped to the column box.](images/image-overflow-not-clipped.svg)

### <span class="secno">8.2. </span><span class="content"> Pagination and Overflow Outside Multicol Containers</span><a href="#pagination-and-overflow-outside-multicol" class="self-link"></a>

Content and column rules that extend outside column boxes at the edges of the multi-column container are clipped according to the <a href="https://www.w3.org/TR/css-overflow-3/#propdef-overflow" id="ref-for-propdef-overflow" class="property">overflow</a> property.

A multicol container can have more columns than it has room for due to:

-   a declaration that constrains the column height (e.g., using <a href="https://www.w3.org/TR/css-sizing-3/#propdef-height" id="ref-for-propdef-height" class="property">height</a> or <a href="https://www.w3.org/TR/CSS2/visudet.html#propdef-max-height" id="ref-for-propdef-max-height" class="property">max-height</a>). In this case, additional column boxes are created in the inline direction
-   the size of the page. In this case, additional column boxes are moved to the next page(s).
-   explicit column breaks. In this case, additional column boxes are created in the inline direction for continuous contexts and additional column boxes are moved to the next fragment(s) for fragmented media.
-   

Columns that appear outside the multicol container in continuous contexts are called overflow columns<a href="#overflow-columns" class="self-link"></a>. Overflow columns can affect the height of the multicol container.

<a href="#example-a5e26f6e" class="self-link"></a> In this example, the height of the multi-column container has been constrained to a maximum height. Also, the style sheet specifies that overflowing content should be visible:

    div {
      max-height: 5em;
      overflow: visible;
    }

As a result, the number of columns is increased.

![An overflow column is created in the inline direction.](images/height-constraint-overflow-inline.svg)

<a href="#example-6e5c350e" class="self-link"></a>

In continuous contexts overflow columns can affect the height of the multicol container. In this example a column appears in the overflow which has four lines of text. The multicol container is made tall enough to accommodate this column.

![The final column is an overflow column yet is taller than the others. The container is tall enough for this column.](images/overflow-column-effects-height.svg)

<a href="#example-a048a782" class="self-link"></a> In fragmented contexts, the overflow content goes into columns in subsequent fragments. Given the same content as in example 31 and a page box that only has room for five lines of formatted text, this would appear on the first page:

![The first three paragraphs appear on page one.](images/pagination-overflow-page1.svg)

Assuming column balancing, this would appear on the second page:

![The overflow column is moved onto page two.](images/pagination-overflow-page2.svg)

<a href="#example-da1d960a" class="self-link"></a> In this example, explicit column breaks are generated after paragraphs:

    p {
      break-after: column;
    }

As a result, the number of columns increases and the extra columns are added in the inline direction:

![An overflow column is created in the inline direction.](images/height-constraint-column-break-overflow-inline.svg)

<a href="#example-02cf1ca4" class="self-link"></a> In <a href="https://www.w3.org/TR/mediaqueries-5/#paged-media" id="ref-for-paged-media②">paged media</a>, extra columns are shown on the next page. Given the same code as the previous example, the last paragraph appears on the second page. This would appear on the first page:

![The first three paragraphs appear on page one.](images/pagination-column-break-overflow-page1.svg)

This would appear on the second page:

![The overflow column is moved onto page two.](images/pagination-column-break-overflow-page2.svg)

Due to column balancing, the last paragraph is split across three columns.

<span class="content">Appendix B. Changes</span><a href="#changes" class="self-link"></a>
-----------------------------------------------------------------------------------------

This appendix is *informative*.

### <span class="content">Changes from the [Working Draft (WD) of 12 February 2021](https://www.w3.org/TR/2021/WD-css-multicol-1-20210212/)</span><a href="#changes-from-20210212" class="self-link"></a>

-   Added the text "Out-of-flow descendants of a multi-column container do affect column balancing, and the block-size of the multi-column container." [Resolved 12 May 2021](https://github.com/w3c/csswg-drafts/issues/6279#issuecomment-839912199)
-   Added the text, "The margins of two spanners separated only by an absolutely positioned item will collapse with each other, as absolutely positioned items do not create column boxes." [Resolved 12 May 2021](https://github.com/w3c/csswg-drafts/issues/6265#issuecomment-839909999)
-   Adds an accessibility considerations section. [Request from APA after review.](https://github.com/w3c/csswg-drafts/issues/6283)
-   Adds a note and example to make clear the manner in which columns are laid out in vertical writing modes. [Request from i18n WG after review.](https://github.com/w3c/csswg-drafts/issues/6301)

### <span class="content">Changes from the [Working Draft (WD) of 15 October 2019](https://www.w3.org/TR/2019/WD-css-multicol-1-20191015/)</span><a href="#changes-from-20191015" class="self-link"></a>

-   Added the text "The spanner becomes the containing block for absolutely positioned boxes inside the spanner where the spanning element establishes a containing block, otherwise the containing block chain goes to the multicol container.". [Resolved 23 Oct 2020](https://github.com/w3c/csswg-drafts/issues/5612#issuecomment-715369246)
-   Adding the text "This property specifies whether content in a multi-column line that does *not* immediately precede a spanner is balanced across columns or not." [Resolved 29 April 2020](https://github.com/w3c/csswg-drafts/issues/4689#issuecomment-621281467)

### <span class="content">Changes from the [Working Draft (WD) of 28 May 2018](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/)</span><a href="#changes-from-20180528" class="self-link"></a>

-   Removed the non-normative text "However, as described below, setting both the width and number of columns rarely makes sense." Editorial 16 Sep 2019, [issue 4291](https://github.com/w3c/csswg-drafts/issues/4291).
-   Added the paragraph, "Spanners are block-level boxes therefore the margins of two adjacent spanners will collapse with each other. As column boxes establish a new <a href="https://www.w3.org/TR/css-display-3/#block-formatting-context" id="ref-for-block-formatting-context⑤">block formatting context</a>, margins on elements inside a column box will not collapse with the margin of a spanner." [Resolved 22 Oct 2018](https://github.com/w3c/csswg-drafts/issues/2203#issuecomment-431783027), see also the resolution for [issue 2582](https://github.com/w3c/csswg-drafts/issues/2582#issuecomment-402619872).
-   Clarified the spec to explain that a spanning element is taken out-of-flow, leaving a forced break. Added the paragraph, "A spanning element is taken out-of-flow, leaving a forced break. This does not affect the painting order of the spanning element." [Resolved 28 Feb 2019](https://github.com/w3c/csswg-drafts/issues/1072#issuecomment-468087733).
-   Moved the definition of the <a href="https://www.w3.org/TR/css-align-3/#propdef-column-gap" id="ref-for-propdef-column-gap③" class="property">column-gap</a> property to [\[CSS3-ALIGN\]](#biblio-css3-align) and added a paragraph detailing the specifics of <span id="ref-for-propdef-column-gap④" class="property">column-gap</span> in multicol:  
    "In a multi-column formatting context the used value of normal for the column-gap property is 1em. This ensures columns are readable when the initial values are used. If there is a column rule between columns, it will appear in the middle of the gap." [Resolved 4 June 2019.](https://github.com/w3c/csswg-drafts/issues/3641)
-   Reworded the section [The multi-column model](#the-multi-column-model), based on input from Morten Stenshorne in [issue 2203](https://github.com/w3c/csswg-drafts/issues/2203#issuecomment-431695940).
-   Removed the at-risk marker from the length-percentage value for <a href="https://www.w3.org/TR/css-align-3/#propdef-column-gap" id="ref-for-propdef-column-gap⑤" class="property">column-gap</a>. [Resolved 4 June 2019.](https://github.com/w3c/csswg-drafts/issues/3988)
-   Updated the introduction to remove mention of the benefits of multicol over using tables for layout and instead refer to the unique characteristics of multicol. Editorial change referenced in [issue 3654](https://github.com/w3c/csswg-drafts/issues/3654).
-   Changed the sentence added in the pseudo-algorithm section after the 7 Jan 2016 resolution, to refer to *columns* and not *tracks* as tracks are not defined in this specification. Resolved [13 March 2019](https://github.com/w3c/csswg-drafts/issues/3649#issuecomment-472505520).
-   Changes and clarifications to the SVG images used in the specification.
-   Changed syntax to use bracketed range notation to reflect the prose restrictions on negative/non-zero values.

### <span class="content">Changes from the [Working Draft (WD) of 5 October 2017](https://www.w3.org/TR/2017/WD-css-multicol-1-20171005/)</span><a href="#changes-from-20171005" class="self-link"></a>

-   Changed references to paged media to refer to fragmented contexts. Resolved [12 Apr 2018](https://github.com/w3c/csswg-drafts/issues/1746#issuecomment-380731574).
-   Changed a line regarding the `column-fill` property:  
    “In continuous media, this property does not have any effect in overflow columns.”  
    To:  
    “In continuous media, this property does not have any effect when there are overflow columns.” [Resolved: 12 Apr 2018](https://github.com/w3c/csswg-drafts/issues/2549)
-   Add a line of text plus an example to show that overflow columns can affect the multicol container height. [Resolved: 12 Apr 2018](https://github.com/w3c/csswg-drafts/issues/1745)
-   Replaced the HTML mock-up examples with SVG versions, as the examples were unclear. [Issue 1087](https://github.com/w3c/csswg-drafts/issues/1087).
-   Changed the value of normal for column-gap to be 1em, rather than a UA-specified length with a suggestion of 1em. [Resolved: 4 Apr 2018](https://github.com/w3c/csswg-drafts/issues/2145#issuecomment-378781507)
-   Clarified that negative values are not allowed for column-width, and that while 0 may be specified, used values will be clamped to a minimum of 1px. [Resolved: 14 Mar 2018](https://github.com/w3c/csswg-drafts/issues/1741#issuecomment-373091628)
-   Clarified that where there is a spanning element content is automatically balanced across all columns in the immediately preceding column row before the element appears. [Resolved: 9 Nov 2017](https://github.com/w3c/csswg-drafts/issues/1075)
-   Added clarification plus an additional example that spanning elements may be lower the first level of descendants, and that in the case of margins, borders and padding on the element containing the spanning, this would be drawn above the spanner. [Resolved: 8 Nov 2017](https://github.com/w3c/csswg-drafts/issues/1072#issuecomment-342668025)
-   Changed the sentence “Column rules are painted in the inline content layer, but below all inline content inside the multicol element.” to “Column rules are painted just above the border of the multicol element. For scrollable multicol elements, note that while the border and background of the multicol element obviously aren’t scrolled, the rules need to scroll along with the columns.” [Resolved: 7 Nov 2017](https://github.com/w3c/csswg-drafts/issues/1739#issuecomment-342659978)
-   Under section The Multi-column Model, removed two sentences “That is, column boxes behave like block-level, table cell, and inline-block boxes as per CSS 2.1, section 10.1, item 2 CSS21. However, column boxes do not establish block container boxes for elements with <a href="https://www.w3.org/TR/css-position-3/#propdef-position" id="ref-for-propdef-position③" class="css">position: fixed or position: absolute</a>.”. These were replaced with a clarification about the principal box and a new example showing how abspos elements refer to the multicol container. [Resolved: 7 Nov 2017](https://github.com/w3c/csswg-drafts/issues/1738#issuecomment-342661881)
-   Removed the sentence "To indicate where column breaks should (or should not) appear, new keyword values are introduced." and following example (Example 7 in the WD published [5 Oct 2017](https://www.w3.org/TR/2017/WD-css-multicol-1-20171005/)) as the multicol specification no longer introduces these properties. [Editorial](https://github.com/w3c/csswg-drafts/issues/1966)
-   Changed how we reference the element we have applied multicol to from multi-column or multicol “element” to multi-column or multicol “container”. [Resolved: 22 November 2017](https://github.com/w3c/csswg-drafts/issues/1965)
-   Removed the example which stated "If a tall image is moved to a column on the next page to find room for it, its natural column may be left empty. If so, the column is still considered to have content for the purpose of deciding if the column rule should be drawn." [Resolved: 7 September 2017](https://github.com/w3c/csswg-drafts/issues/1740)

### <span class="content">Changes from the [Candidate Recommendation (CR) of 12 April 2011](https://www.w3.org/TR/2011/CR-css3-multicol-20110412/).</span><a href="#changes-from-20110412" class="self-link"></a>

-   Added July 2016 resolution to change the track size floor to a required UA-specified value, consistent with the CSS Grid spec. [Resolved: 7 Jan 2016](https://lists.w3.org/Archives/Public/www-style/2016Jan/0031.html)
-   Remove the restriction about overflow columns only being in continuous media in the statement that <a href="#propdef-column-fill" id="ref-for-propdef-column-fill②" class="property">column-fill</a> has no effect on overflow columns. [Resolved: September 2013](https://lists.w3.org/Archives/Public/www-style/2013Sep/0471.html).
-   Added keyword balance-all and examples to demonstrate how this should work. [Resolved: September 2013](https://lists.w3.org/Archives/Public/www-style/2013Sep/0471.html).
-   The pseudo-algorithm has been revised on a number of occasions. [Latest change Feb 2013](https://lists.w3.org/Archives/Public/www-style/2013Feb/0471.html).
-   Clarified that properties <a href="#propdef-columns" id="ref-for-propdef-columns④" class="property">columns</a>, <a href="#propdef-column-width" id="ref-for-propdef-column-width①③" class="property">column-width</a>, <a href="#propdef-column-count" id="ref-for-propdef-column-count①②" class="property">column-count</a> "apply to block containers". [Ref: Feb 2013](https://lists.w3.org/Archives/Public/www-style/2013Feb/0536.html).
-   Breaking properties have been moved from this specification to the [CSS Fragmentation Module](https://www.w3.org/TR/css-break-3/).
-   Change to <a href="#propdef-column-fill" id="ref-for-propdef-column-fill③" class="property">column-fill</a> wording to clarify that <span id="ref-for-propdef-column-fill④" class="property">column-fill</span> is honored before page breaks. [Ref: Jan 2012](https://lists.w3.org/Archives/Public/www-style/2012Jan/0393.html).
-   Amended example and text to clarify what happens with margin collapsing and spanning elements. [Ref: Oct 2013](https://lists.w3.org/Archives/Public/www-style/2013Oct/0247.html).
-   Clarification that <a href="#propdef-column-rule-width" id="ref-for-propdef-column-rule-width④" class="property">column-rule-width</a> does not alter the size or placement of columns. [Ref: Sep 2013](https://lists.w3.org/Archives/Public/www-style/2013Sep/0550.html).
-   Added that each column spanning element establishes a separate BFC margins between them collapse. [Ref: Dec 2011](https://lists.w3.org/Archives/Public/www-style/2011Dec/0262.html).
-   Column rules are painted in the inline content layer, but below all inline content inside the multicol. [Ref: Feb 2013](https://lists.w3.org/Archives/Public/www-style/2013Feb/0363.html).
-   Clarify that <a href="#propdef-column-span" id="ref-for-propdef-column-span⑦" class="property">column-span</a> causes the element to establish a formatting context even if it is not in a multicol.
-   Column spanners do not always establish a *block* formatting context.
-   Allow <a href="https://www.w3.org/TR/css-align-3/#propdef-column-gap" id="ref-for-propdef-column-gap⑥" class="property">column-gap</a> to accept <a href="https://www.w3.org/TR/css-values-4/#typedef-length-percentage" id="ref-for-typedef-length-percentage" class="production css">&lt;length-percentage&gt;</a> instead of just <a href="https://www.w3.org/TR/css-values-4/#length-value" id="ref-for-length-value②" class="production css" title="Expands to: advance measure | cap | ch | cm | dvb | dvh | dvi | dvmax | dvmin | dvw | em | ex | ic | in | lh | lvb | lvh | lvi | lvmax | lvmin | lvw | mm | pc | pt | px | q | rem | rlh | svb | svh | svi | svmax | svmin | svw | vb | vh | vi | vmax | vmin | vw">&lt;length&gt;</a>
-   <a href="#propdef-column-width" id="ref-for-propdef-column-width①④" class="property">column-width</a> and <a href="#propdef-column-count" id="ref-for-propdef-column-count①③" class="property">column-count</a> applies to <a href="https://www.w3.org/TR/css-display-3/#block-container" id="ref-for-block-container③">block containers</a> except <a href="https://www.w3.org/TR/css-tables-3/#table-wrapper-box" id="ref-for-table-wrapper-box②">table wrapper boxes</a>.
-   Content that overflows columns is not clipped.

<span class="content">Privacy Considerations</span><a href="#privacy" class="self-link"></a>
--------------------------------------------------------------------------------------------

Multicol introduces no new privacy leaks.

<span class="content">Security Considerations</span><a href="#security" class="self-link"></a>
----------------------------------------------------------------------------------------------

Multicol introduces no new security considerations.

<span class="content">Accessibility Considerations</span><a href="#a11y" class="self-link"></a>
-----------------------------------------------------------------------------------------------

Setting container height and line length can pose challenges for people with visual or cognitive disabilities. See [WCAG Success Criterion 1.4.10 Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) and [WCAG 1.4.8 Visual Presentation](https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation) to understand user needs.

<span class="content"> Acknowledgments</span><a href="#acknowledgments" class="self-link"></a>
----------------------------------------------------------------------------------------------

This document is based on several older proposals and comments on older proposals. Contributors include:

Alex Mogilevsky, Andy Clarke, Anton Prowse, Bert Bos, Björn Höhrmann, Cédric Savarese, Chris Lilley, Chris Wilson, Daniel Glazman and Dave Raggett, David Hyatt, David Singer, David Woolley, Elika Etemad, Giovanni Campagna, Ian Hickson. Joost de Valk, Kevin Lawver, L. David Baron, Markus Mielke, Melinda Grant, Michael Day, Morten Stenshorne, Øyvind Stenhaug, Peter Linss, Peter-Paul Koch, Robert O’Callahan, Robert Stevahn, Sergey Genkin, Shelby Moore, Steve Zilles, Sylvain Galineau, Tantek Çelik, Till Halbach

<span class="content"> Conformance</span><a href="#w3c-conformance" class="self-link"></a>
------------------------------------------------------------------------------------------

### <span class="content"> Document conventions</span><a href="#w3c-conventions" class="self-link"></a>

Conformance requirements are expressed with a combination of descriptive assertions and RFC 2119 terminology. The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in the normative parts of this document are to be interpreted as described in RFC 2119. However, for readability, these words do not appear in all uppercase letters in this specification.

All of the text of this specification is normative except sections explicitly marked as non-normative, examples, and notes. [\[RFC2119\]](#biblio-rfc2119)

Examples in this specification are introduced with the words “for example” or are set apart from the normative text with `class="example"`, like this:

<a href="#w3c-example" class="self-link"></a>

This is an example of an informative example.

Informative notes begin with the word “Note” and are set apart from the normative text with `class="note"`, like this:

Note, this is an informative note.

Advisements are normative sections styled to evoke special attention and are set apart from other normative text with `<strong class="advisement">`, like this: **UAs MUST provide an accessible alternative.**

### <span class="content"> Conformance classes</span><a href="#w3c-conformance-classes" class="self-link"></a>

Conformance to this specification is defined for three conformance classes:

style sheet   
A [CSS style sheet](https://www.w3.org/TR/CSS21/conform.html#style-sheet).

renderer   
A [UA](https://www.w3.org/TR/CSS21/conform.html#user-agent) that interprets the semantics of a style sheet and renders documents that use them.

authoring tool   
A [UA](https://www.w3.org/TR/CSS21/conform.html#user-agent) that writes a style sheet.

A style sheet is conformant to this specification if all of its statements that use syntax defined in this module are valid according to the generic CSS grammar and the individual grammars of each feature defined in this module.

A renderer is conformant to this specification if, in addition to interpreting the style sheet as defined by the appropriate specifications, it supports all the features defined by this specification by parsing them correctly and rendering the document accordingly. However, the inability of a UA to correctly render a document due to limitations of the device does not make the UA non-conformant. (For example, a UA is not required to render color on a monochrome monitor.)

An authoring tool is conformant to this specification if it writes style sheets that are syntactically correct according to the generic CSS grammar and the individual grammars of each feature in this module, and meet all other conformance requirements of style sheets as described in this module.

### <span class="content"> Partial implementations</span><a href="#w3c-partial" class="self-link"></a>

So that authors can exploit the forward-compatible parsing rules to assign fallback values, CSS renderers **must** treat as invalid (and [ignore as appropriate](https://www.w3.org/TR/CSS21/conform.html#ignore)) any at-rules, properties, property values, keywords, and other syntactic constructs for which they have no usable level of support. In particular, user agents **must not** selectively ignore unsupported component values and honor supported values in a single multi-value property declaration: if any value is considered invalid (as unsupported values must be), CSS requires that the entire declaration be ignored.

#### <span class="content"> Implementations of Unstable and Proprietary Features</span><a href="#w3c-conform-future-proofing" class="self-link"></a>

To avoid clashes with future stable CSS features, the CSSWG recommends [following best practices](https://www.w3.org/TR/CSS/#future-proofing) for the implementation of [unstable](https://www.w3.org/TR/CSS/#unstable) features and [proprietary extensions](https://www.w3.org/TR/CSS/#proprietary-extension) to CSS.

### <span class="content"> Non-experimental implementations</span><a href="#w3c-testing" class="self-link"></a>

Once a specification reaches the Candidate Recommendation stage, non-experimental implementations are possible, and implementors should release an unprefixed implementation of any CR-level feature they can demonstrate to be correctly implemented according to spec.

To establish and maintain the interoperability of CSS across implementations, the CSS Working Group requests that non-experimental CSS renderers submit an implementation report (and, if necessary, the testcases used for that implementation report) to the W3C before releasing an unprefixed implementation of any CSS features. Testcases submitted to W3C are subject to review and correction by the CSS Working Group.

Further information on submitting testcases and implementation reports can be found from on the CSS Working Group’s website at <https://www.w3.org/Style/CSS/Test/>. Questions should be directed to the [public-css-testsuite@w3.org](https://lists.w3.org/Archives/Public/public-css-testsuite/) mailing list.

### <span class="content"> CR exit criteria</span><a href="#w3c-cr-exit-criteria" class="self-link"></a>

For this specification to be advanced to Proposed Recommendation, there must be at least two independent, interoperable implementations of each feature. Each feature may be implemented by a different set of products, there is no requirement that all features be implemented by a single product. For the purposes of this criterion, we define the following terms:

independent   
each implementation must be developed by a different party and cannot share, reuse, or derive from code used by another qualifying implementation. Sections of code that have no bearing on the implementation of this specification are exempt from this requirement.

interoperable   
passing the respective test case(s) in the official CSS test suite, or, if the implementation is not a Web browser, an equivalent test. Every relevant test in the test suite should have an equivalent test created if such a user agent (UA) is to be used to claim interoperability. In addition if such a UA is to be used to claim interoperability, then there must one or more additional UAs which can also pass those equivalent tests in the same way for the purpose of interoperability. The equivalent tests must be made publicly available for the purposes of peer review.

implementation   
a user agent which:

1.  implements the specification.
2.  is available to the general public. The implementation may be a shipping product or other publicly available version (i.e., beta version, preview release, or "nightly build"). Non-shipping product releases must have implemented the feature(s) for a period of at least one month in order to demonstrate stability.
3.  is not experimental (i.e., a version specifically designed to pass the test suite and is not intended for normal usage going forward).

The specification will remain Candidate Recommendation for at least six months.

<span class="content">Index</span><a href="#index" class="self-link"></a>
-------------------------------------------------------------------------

### <span class="content">Terms defined by this specification</span><a href="#index-defined-here" class="self-link"></a>

-   [all](#valdef-column-span-all), in § 6.1
-   auto
    -   [value for column-count](#valdef-column-count-auto), in § 3.2
    -   [value for column-fill](#valdef-column-fill-auto), in § 7.1
    -   [value for column-width](#valdef-column-width-auto), in § 3.1
-   [balance](#valdef-column-fill-balance), in § 7.1
-   [balance-all](#valdef-column-fill-balance-all), in § 7.1
-   [&lt;color&gt;](#valdef-column-rule-color-color), in § 4.2
-   [column](#column-box), in § 2
-   [column box](#column-box), in § 2
-   [column-count](#propdef-column-count), in § 3.2
-   [column-fill](#propdef-column-fill), in § 7.1
-   [column gap](#column-gap), in § 2
-   [column height](#column-height), in § 2
-   [column rule](#column-rule), in § 2
-   [column-rule](#propdef-column-rule), in § 4.5
-   [column-rule-color](#propdef-column-rule-color), in § 4.2
-   [column-rule-style](#propdef-column-rule-style), in § 4.3
-   [column-rule-width](#propdef-column-rule-width), in § 4.4
-   [columns](#propdef-columns), in § 3.3
-   [column-span](#propdef-column-span), in § 6.1
-   [column width](#column-width), in § 2
-   [column-width](#propdef-column-width), in § 3.1
-   [&lt;integer \[1,∞\]&gt;](#valdef-column-count-integer-1), in § 3.2
-   [&lt;length \[0,∞\]&gt;](#valdef-column-width-length-0), in § 3.1
-   [multicol container](#multi-column-container), in § 2
-   [multi-col line](#multi-column-line), in § 2
-   [multicol line](#multi-column-line), in § 2
-   [multi-column container](#multi-column-container), in § 2
-   [multi-column formatting context](#multi-column-formatting-context), in § 2
-   [multi-column layout](#multi-column-layout), in § 1
-   [multi-column line](#multi-column-line), in § 2
-   [none](#valdef-column-span-none), in § 6.1
-   [overflow columns](#overflow-columns), in § 8.2
-   [spanner](#spanner), in § 6.1
-   [spanning element](#spanning-element), in § 6.1

<https://www.w3.org/TR/css-backgrounds-3/#typedef-line-style>**Referenced in:**

-   [4.3. The Style Of Column Rules: the column-rule-style property](#ref-for-typedef-line-style) [(2)](#ref-for-typedef-line-style①)

<https://www.w3.org/TR/css-backgrounds-3/#typedef-line-width>**Referenced in:**

-   [4.4. The Width Of Column Rules: the column-rule-width property](#ref-for-typedef-line-width)

<https://www.w3.org/TR/css-backgrounds-3/#propdef-border>**Referenced in:**

-   [1. Introduction](#ref-for-propdef-border) [(2)](#ref-for-propdef-border①)

<https://www.w3.org/TR/css-backgrounds-3/#valdef-line-style-hidden>**Referenced in:**

-   [4.4. The Width Of Column Rules: the column-rule-width property](#ref-for-valdef-line-style-hidden)

<https://www.w3.org/TR/css-backgrounds-3/#valdef-line-style-none>**Referenced in:**

-   [4.3. The Style Of Column Rules: the column-rule-style property](#ref-for-valdef-line-style-none)
-   [4.4. The Width Of Column Rules: the column-rule-width property](#ref-for-valdef-line-style-none①)

<https://www.w3.org/TR/css-break-4/#fragment>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-fragment)
-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-fragment①)

<https://www.w3.org/TR/css-break-4/#fragmentation>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-fragmentation)

<https://www.w3.org/TR/css-break-4/#fragmentation-container>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-fragmentation-container)

<https://www.w3.org/TR/css-break-4/#fragmentation-context>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-fragmentation-context)

<https://www.w3.org/TR/css-break-4/#propdef-widows>**Referenced in:**

-   [7. Filling Columns](#ref-for-propdef-widows)

<https://www.w3.org/TR/css-color-4/#typedef-color>**Referenced in:**

-   [4.2. The Color of Column Rules: the column-rule-color property](#ref-for-typedef-color) [(2)](#ref-for-typedef-color①)

<https://www.w3.org/TR/css-display-3/#anonymous>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-anonymous) [(2)](#ref-for-anonymous①)

<https://www.w3.org/TR/css-display-3/#block-container>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-block-container)
-   [3.1. The Inline Size of Columns: the column-width property](#ref-for-block-container①)
-   [3.2. The Number of Columns: the column-count property](#ref-for-block-container②)
-   [Changes from the Candidate Recommendation (CR) of 12 April 2011.](#ref-for-block-container③)

<https://www.w3.org/TR/css-display-3/#block-formatting-context>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-block-formatting-context) [(2)](#ref-for-block-formatting-context①) [(3)](#ref-for-block-formatting-context②)
-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-block-formatting-context③) [(2)](#ref-for-block-formatting-context④)
-   [Changes from the Working Draft (WD) of 28 May 2018](#ref-for-block-formatting-context⑤)

<https://www.w3.org/TR/css-display-3/#block-level-box>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-block-level-box) [(2)](#ref-for-block-level-box①)

<https://www.w3.org/TR/css-display-3/#containing-block>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-containing-block) [(2)](#ref-for-containing-block①)
-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-containing-block②) [(2)](#ref-for-containing-block③)

<https://www.w3.org/TR/css-display-3/#containing-block-chain>**Referenced in:**

-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-containing-block-chain)

<https://www.w3.org/TR/css-display-3/#propdef-display>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-propdef-display)

<https://www.w3.org/TR/css-display-3/#formatting-context>**Referenced in:**

-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-formatting-context) [(2)](#ref-for-formatting-context①) [(3)](#ref-for-formatting-context②)

<https://www.w3.org/TR/css-display-3/#independent-formatting-context>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-independent-formatting-context) [(2)](#ref-for-independent-formatting-context①)
-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-independent-formatting-context②)

<https://www.w3.org/TR/css-display-3/#out-of-flow>**Referenced in:**

-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-out-of-flow) [(2)](#ref-for-out-of-flow①)

<https://www.w3.org/TR/css-display-3/#out-of-flow>**Referenced in:**

-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-out-of-flow) [(2)](#ref-for-out-of-flow①)

<https://www.w3.org/TR/css-display-3/#principal-box>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-principal-box)

<https://www.w3.org/TR/css-grid-2/#grid-container>**Referenced in:**

-   [1. Introduction](#ref-for-grid-container)

<https://www.w3.org/TR/css-grid-2/#grid-item>**Referenced in:**

-   [1. Introduction](#ref-for-grid-item)

<https://www.w3.org/TR/css-overflow-3/#propdef-overflow>**Referenced in:**

-   [8.2. Pagination and Overflow Outside Multicol Containers](#ref-for-propdef-overflow)

<https://www.w3.org/TR/css-position-3/#absolute-position>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-absolute-position)
-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-absolute-position①)

<https://www.w3.org/TR/css-position-3/#propdef-position>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-propdef-position) [(2)](#ref-for-propdef-position①) [(3)](#ref-for-propdef-position②)
-   [Changes from the Working Draft (WD) of 5 October 2017](#ref-for-propdef-position③)

<https://www.w3.org/TR/css-tables-3/#table-wrapper-box>**Referenced in:**

-   [3.1. The Inline Size of Columns: the column-width property](#ref-for-table-wrapper-box)
-   [3.2. The Number of Columns: the column-count property](#ref-for-table-wrapper-box①)
-   [Changes from the Candidate Recommendation (CR) of 12 April 2011.](#ref-for-table-wrapper-box②)

<https://www.w3.org/TR/css-values-4/#integer-value>**Referenced in:**

-   [3.2. The Number of Columns: the column-count property](#ref-for-integer-value) [(2)](#ref-for-integer-value①)

<https://www.w3.org/TR/css-values-4/#typedef-length-percentage>**Referenced in:**

-   [Changes from the Candidate Recommendation (CR) of 12 April 2011.](#ref-for-typedef-length-percentage)

<https://www.w3.org/TR/css-values-4/#length-value>**Referenced in:**

-   [3.1. The Inline Size of Columns: the column-width property](#ref-for-length-value) [(2)](#ref-for-length-value①)
-   [Changes from the Candidate Recommendation (CR) of 12 April 2011.](#ref-for-length-value②)

<https://www.w3.org/TR/css-values-4/#css-wide-keywords>**Referenced in:**

-   [1.1. Value Definitions](#ref-for-css-wide-keywords)

<https://www.w3.org/TR/css-values-4/#comb-one>**Referenced in:**

-   [3.1. The Inline Size of Columns: the column-width property](#ref-for-comb-one)
-   [3.2. The Number of Columns: the column-count property](#ref-for-comb-one①)
-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-comb-one②)
-   [7.1. Column Balancing: the column-fill property](#ref-for-comb-one③) [(2)](#ref-for-comb-one④)

<https://www.w3.org/TR/css-values-4/#comb-any>**Referenced in:**

-   [3.3. The column-width and column-count Shorthand: The columns Property](#ref-for-comb-any)
-   [4.5. Column Rule Shorthand: the column-rule property](#ref-for-comb-any①) [(2)](#ref-for-comb-any②)

<https://www.w3.org/TR/css-writing-modes-4/#block-axis>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-block-axis)

<https://www.w3.org/TR/css-writing-modes-4/#inline-base-direction>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-inline-base-direction)

<https://www.w3.org/TR/CSS2/visudet.html#propdef-max-height>**Referenced in:**

-   [8.2. Pagination and Overflow Outside Multicol Containers](#ref-for-propdef-max-height)

<https://www.w3.org/TR/css-align-3/#propdef-column-gap>**Referenced in:**

-   [4.1. Gutters Between Columns: the column-gap property](#ref-for-propdef-column-gap) [(2)](#ref-for-propdef-column-gap①) [(3)](#ref-for-propdef-column-gap②)
-   [Changes from the Working Draft (WD) of 28 May 2018](#ref-for-propdef-column-gap③) [(2)](#ref-for-propdef-column-gap④) [(3)](#ref-for-propdef-column-gap⑤)
-   [Changes from the Candidate Recommendation (CR) of 12 April 2011.](#ref-for-propdef-column-gap⑥)

<https://www.w3.org/TR/css-align-3/#valdef-row-gap-normal>**Referenced in:**

-   [4.1. Gutters Between Columns: the column-gap property](#ref-for-valdef-row-gap-normal)

<https://www.w3.org/TR/css-break-3/#propdef-break-after>**Referenced in:**

-   [5. Column Breaks](#ref-for-propdef-break-after)
-   [5.1. Controlling Fragmentation: the break-before, break-after, break-inside properties](#ref-for-propdef-break-after①) [(2)](#ref-for-propdef-break-after②)

<https://www.w3.org/TR/css-break-3/#propdef-break-before>**Referenced in:**

-   [5. Column Breaks](#ref-for-propdef-break-before)
-   [5.1. Controlling Fragmentation: the break-before, break-after, break-inside properties](#ref-for-propdef-break-before①) [(2)](#ref-for-propdef-break-before②)

<https://www.w3.org/TR/css-break-3/#propdef-break-inside>**Referenced in:**

-   [5. Column Breaks](#ref-for-propdef-break-inside)
-   [5.1. Controlling Fragmentation: the break-before, break-after, break-inside properties](#ref-for-propdef-break-inside①) [(2)](#ref-for-propdef-break-inside②)

<https://www.w3.org/TR/css-break-3/#propdef-orphans>**Referenced in:**

-   [7. Filling Columns](#ref-for-propdef-orphans)

<https://www.w3.org/TR/css-sizing-3/#propdef-height>**Referenced in:**

-   [8.2. Pagination and Overflow Outside Multicol Containers](#ref-for-propdef-height)

<https://www.w3.org/TR/css-sizing-3/#propdef-width>**Referenced in:**

-   [2. The Multi-Column Model](#ref-for-propdef-width)

<https://www.w3.org/TR/mediaqueries-5/#paged-media>**Referenced in:**

-   [3.4. The Pseudo-algorithm](#ref-for-paged-media)
-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-paged-media①)
-   [8.2. Pagination and Overflow Outside Multicol Containers](#ref-for-paged-media②)

### <span class="content">Terms defined by reference</span><a href="#index-defined-elsewhere" class="self-link"></a>

-   \[css-backgrounds-3\] defines the following terms:
    -   <span id="term-for-typedef-line-style" class="dfn-paneled">&lt;line-style&gt;</span>
    -   <span id="term-for-typedef-line-width" class="dfn-paneled">&lt;line-width&gt;</span>
    -   <span id="term-for-propdef-border" class="dfn-paneled">border</span>
    -   <span id="term-for-valdef-line-style-hidden" class="dfn-paneled">hidden</span>
    -   <span id="term-for-valdef-line-style-none" class="dfn-paneled">none</span>
-   \[css-break-4\] defines the following terms:
    -   <span id="term-for-fragment" class="dfn-paneled">fragment</span>
    -   <span id="term-for-fragmentation" class="dfn-paneled">fragmentation</span>
    -   <span id="term-for-fragmentation-container" class="dfn-paneled">fragmentation container</span>
    -   <span id="term-for-fragmentation-context" class="dfn-paneled">fragmentation context</span>
    -   <span id="term-for-propdef-widows" class="dfn-paneled">widows</span>
-   \[css-color-4\] defines the following terms:
    -   <span id="term-for-typedef-color" class="dfn-paneled">&lt;color&gt;</span>
-   \[css-display-3\] defines the following terms:
    -   <span id="term-for-anonymous" class="dfn-paneled">anonymous box</span>
    -   <span id="term-for-block-container" class="dfn-paneled">block container</span>
    -   <span id="term-for-block-formatting-context" class="dfn-paneled">block formatting context</span>
    -   <span id="term-for-block-level-box" class="dfn-paneled">block-level box</span>
    -   <span id="term-for-containing-block" class="dfn-paneled">containing block</span>
    -   <span id="term-for-containing-block-chain" class="dfn-paneled">containing block chain</span>
    -   <span id="term-for-propdef-display" class="dfn-paneled">display</span>
    -   <span id="term-for-formatting-context" class="dfn-paneled">formatting context</span>
    -   <span id="term-for-independent-formatting-context" class="dfn-paneled">independent formatting context</span>
    -   <span id="term-for-out-of-flow" class="dfn-paneled">out of flow</span>
    -   <span id="term-for-out-of-flow①" class="dfn-paneled">out-of-flow</span>
    -   <span id="term-for-principal-box" class="dfn-paneled">principal box</span>
-   \[css-grid-2\] defines the following terms:
    -   <span id="term-for-grid-container" class="dfn-paneled">grid container</span>
    -   <span id="term-for-grid-item" class="dfn-paneled">grid item</span>
-   \[css-overflow-3\] defines the following terms:
    -   <span id="term-for-propdef-overflow" class="dfn-paneled">overflow</span>
-   \[css-position-3\] defines the following terms:
    -   <span id="term-for-absolute-position" class="dfn-paneled">absolutely positioned box</span>
    -   <span id="term-for-propdef-position" class="dfn-paneled">position</span>
-   \[css-tables-3\] defines the following terms:
    -   <span id="term-for-table-wrapper-box" class="dfn-paneled">table wrapper box</span>
-   \[css-values-4\] defines the following terms:
    -   <span id="term-for-integer-value" class="dfn-paneled">&lt;integer&gt;</span>
    -   <span id="term-for-typedef-length-percentage" class="dfn-paneled">&lt;length-percentage&gt;</span>
    -   <span id="term-for-length-value" class="dfn-paneled">&lt;length&gt;</span>
    -   <span id="term-for-css-wide-keywords" class="dfn-paneled">css-wide keywords</span>
    -   <span id="term-for-comb-one" class="dfn-paneled">|</span>
    -   <span id="term-for-comb-any" class="dfn-paneled">||</span>
-   \[css-writing-modes-4\] defines the following terms:
    -   <span id="term-for-block-axis" class="dfn-paneled">block axis</span>
    -   <span id="term-for-inline-base-direction" class="dfn-paneled">inline base direction</span>
-   \[CSS21\] defines the following terms:
    -   <span id="term-for-propdef-max-height" class="dfn-paneled">max-height</span>
-   \[CSS3-ALIGN\] defines the following terms:
    -   <span id="term-for-propdef-column-gap" class="dfn-paneled">column-gap</span>
    -   <span id="term-for-valdef-row-gap-normal" class="dfn-paneled">normal</span>
-   \[CSS3-BREAK\] defines the following terms:
    -   <span id="term-for-propdef-break-after" class="dfn-paneled">break-after</span>
    -   <span id="term-for-propdef-break-before" class="dfn-paneled">break-before</span>
    -   <span id="term-for-propdef-break-inside" class="dfn-paneled">break-inside</span>
    -   <span id="term-for-propdef-orphans" class="dfn-paneled">orphans</span>
-   \[CSS3-SIZING\] defines the following terms:
    -   <span id="term-for-propdef-height" class="dfn-paneled">height</span>
    -   <span id="term-for-propdef-width" class="dfn-paneled">width</span>
-   \[mediaqueries-5\] defines the following terms:
    -   <span id="term-for-paged-media" class="dfn-paneled">paged media</span>

<span class="content">References</span><a href="#references" class="self-link"></a>
-----------------------------------------------------------------------------------

### <span class="content">Normative References</span><a href="#normative" class="self-link"></a>

\[CSS-BACKGROUNDS-3\]   
Bert Bos; Elika Etemad; Brad Kemper. [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/css-backgrounds-3/). 26 July 2021. CR. URL: <https://www.w3.org/TR/css-backgrounds-3/>

\[CSS-BREAK-4\]   
Rossen Atanassov; Elika Etemad. [CSS Fragmentation Module Level 4](https://www.w3.org/TR/css-break-4/). 18 December 2018. WD. URL: <https://www.w3.org/TR/css-break-4/>

\[CSS-COLOR-4\]   
Tab Atkins Jr.; Chris Lilley. [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/). 1 June 2021. WD. URL: <https://www.w3.org/TR/css-color-4/>

\[CSS-DISPLAY-3\]   
Tab Atkins Jr.; Elika Etemad. [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/). 3 September 2021. CR. URL: <https://www.w3.org/TR/css-display-3/>

\[CSS-GRID-2\]   
Tab Atkins Jr.; Elika Etemad; Rossen Atanassov. [CSS Grid Layout Module Level 2](https://www.w3.org/TR/css-grid-2/). 18 December 2020. CR. URL: <https://www.w3.org/TR/css-grid-2/>

\[CSS-OVERFLOW-3\]   
David Baron; Elika Etemad; Florian Rivoal. [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/). 3 June 2020. WD. URL: <https://www.w3.org/TR/css-overflow-3/>

\[CSS-POSITION-3\]   
Elika Etemad; et al. [CSS Positioned Layout Module Level 3](https://www.w3.org/TR/css-position-3/). 19 May 2020. WD. URL: <https://www.w3.org/TR/css-position-3/>

\[CSS-TABLES-3\]   
François Remy; Greg Whitworth; David Baron. [CSS Table Module Level 3](https://www.w3.org/TR/css-tables-3/). 27 July 2019. WD. URL: <https://www.w3.org/TR/css-tables-3/>

\[CSS-VALUES-3\]   
Tab Atkins Jr.; Elika Etemad. [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/). 6 June 2019. CR. URL: <https://www.w3.org/TR/css-values-3/>

\[CSS-VALUES-4\]   
Tab Atkins Jr.; Elika Etemad. [CSS Values and Units Module Level 4](https://www.w3.org/TR/css-values-4/). 30 September 2021. WD. URL: <https://www.w3.org/TR/css-values-4/>

\[CSS-WRITING-MODES-4\]   
Elika Etemad; Koji Ishii. [CSS Writing Modes Level 4](https://www.w3.org/TR/css-writing-modes-4/). 30 July 2019. CR. URL: <https://www.w3.org/TR/css-writing-modes-4/>

\[CSS21\]   
Bert Bos; et al. [Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification](https://www.w3.org/TR/CSS21/). 7 June 2011. REC. URL: <https://www.w3.org/TR/CSS21/>

\[CSS3-ALIGN\]   
Elika Etemad; Tab Atkins Jr.. [CSS Box Alignment Module Level 3](https://www.w3.org/TR/css-align-3/). 21 April 2020. WD. URL: <https://www.w3.org/TR/css-align-3/>

\[CSS3-BREAK\]   
Rossen Atanassov; Elika Etemad. [CSS Fragmentation Module Level 3](https://www.w3.org/TR/css-break-3/). 4 December 2018. CR. URL: <https://www.w3.org/TR/css-break-3/>

\[CSS3-SIZING\]   
Tab Atkins Jr.; Elika Etemad. [CSS Box Sizing Module Level 3](https://www.w3.org/TR/css-sizing-3/). 17 March 2021. WD. URL: <https://www.w3.org/TR/css-sizing-3/>

\[MEDIAQUERIES-5\]   
Dean Jackson; Florian Rivoal; Tab Atkins Jr.. [Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/). 31 July 2020. WD. URL: <https://www.w3.org/TR/mediaqueries-5/>

\[RFC2119\]   
S. Bradner. [Key words for use in RFCs to Indicate Requirement Levels](https://datatracker.ietf.org/doc/html/rfc2119). March 1997. Best Current Practice. URL: <https://datatracker.ietf.org/doc/html/rfc2119>

### <span class="content">Informative References</span><a href="#informative" class="self-link"></a>

\[CSS3BOX\]   
Elika Etemad. [CSS Box Model Module Level 3](https://www.w3.org/TR/css-box-3/). 22 December 2020. CR. URL: <https://www.w3.org/TR/css-box-3/>

<span class="content">Property Index</span><a href="#property-index" class="self-link"></a>
-------------------------------------------------------------------------------------------

<table><thead><tr class="header"><th>Name</th><th>Value</th><th>Initial</th><th>Applies to</th><th>Inh.</th><th>%ages</th><th>Ani­mat­able</th><th>Anim­ation type</th><th>Canonical order</th><th>Com­puted value</th></tr></thead><tbody><tr class="odd"><td><a href="#propdef-column-count" id="ref-for-propdef-column-count①④" class="css">column-count</a></td><td>auto | &lt;integer [1,∞]&gt;</td><td>auto</td><td>block containers except table wrapper boxes</td><td>no</td><td>N/A</td><td>by computed value</td><td></td><td>per grammar</td><td>specified value</td></tr><tr class="even"><td><a href="#propdef-column-fill" id="ref-for-propdef-column-fill⑤" class="css">column-fill</a></td><td>auto | balance | balance-all</td><td>balance</td><td>multicol containers</td><td>no</td><td>N/A</td><td></td><td>discrete</td><td>per grammar</td><td>specified keyword</td></tr><tr class="odd"><td><a href="#propdef-column-rule" id="ref-for-propdef-column-rule⑤" class="css">column-rule</a></td><td>&lt;'column-rule-width'&gt; || &lt;'column-rule-style'&gt; || &lt;'column-rule-color'&gt;</td><td>see individual properties</td><td>see individual properties</td><td>see individual properties</td><td>see individual properties</td><td></td><td>see individual properties</td><td>per grammar</td><td>see individual properties</td></tr><tr class="even"><td><a href="#propdef-column-rule-color" id="ref-for-propdef-column-rule-color③" class="css">column-rule-color</a></td><td>&lt;color&gt;</td><td>currentcolor</td><td>multicol containers</td><td>no</td><td>N/A</td><td></td><td>by computed value type</td><td>per grammar</td><td>computed color</td></tr><tr class="odd"><td><a href="#propdef-column-rule-style" id="ref-for-propdef-column-rule-style④" class="css">column-rule-style</a></td><td>&lt;line-style&gt;</td><td>none</td><td>multicol containers</td><td>no</td><td>N/A</td><td></td><td>discrete</td><td>per grammar</td><td>specified keyword</td></tr><tr class="even"><td><a href="#propdef-column-rule-width" id="ref-for-propdef-column-rule-width⑤" class="css">column-rule-width</a></td><td>&lt;line-width&gt;</td><td>medium</td><td>multicol containers</td><td>no</td><td>N/A</td><td></td><td>by computed value type</td><td>per grammar</td><td>absolute length; 0 if the column rule style is none or hidden</td></tr><tr class="odd"><td><a href="#propdef-column-span" id="ref-for-propdef-column-span⑧" class="css">column-span</a></td><td>none | all</td><td>none</td><td>in-flow block-level elements</td><td>no</td><td>N/A</td><td></td><td>discrete</td><td>per grammar</td><td>specified keyword</td></tr><tr class="even"><td><a href="#propdef-column-width" id="ref-for-propdef-column-width①⑤" class="css">column-width</a></td><td>auto | &lt;length [0,∞]&gt;</td><td>auto</td><td>block containers except table wrapper boxes</td><td>no</td><td>N/A</td><td></td><td>by computed value type</td><td>per grammar</td><td>the keyword auto or an absolute length</td></tr><tr class="odd"><td><a href="#propdef-columns" id="ref-for-propdef-columns⑤" class="css">columns</a></td><td>&lt;'column-width'&gt; || &lt;'column-count'&gt;</td><td>see individual properties</td><td>see individual properties</td><td>see individual properties</td><td>see individual properties</td><td></td><td>see individual properties</td><td>per grammar</td><td>see individual properties</td></tr></tbody></table>

**[\#multi-column-layout](#multi-column-layout)Referenced in:**

-   [2. The Multi-Column Model](#ref-for-multi-column-layout)

**[\#multi-column-container](#multi-column-container)Referenced in:**

-   [1. Introduction](#ref-for-multi-column-container) [(2)](#ref-for-multi-column-container①)
-   [2. The Multi-Column Model](#ref-for-multi-column-container②) [(2)](#ref-for-multi-column-container③) [(3)](#ref-for-multi-column-container④) [(4)](#ref-for-multi-column-container⑤) [(5)](#ref-for-multi-column-container⑥) [(6)](#ref-for-multi-column-container⑦) [(7)](#ref-for-multi-column-container⑧) [(8)](#ref-for-multi-column-container⑨)
-   [3.2. The Number of Columns: the column-count property](#ref-for-multi-column-container①⓪)
-   [4. Column Gaps and Rules](#ref-for-multi-column-container①①) [(2)](#ref-for-multi-column-container①②) [(3)](#ref-for-multi-column-container①③) [(4)](#ref-for-multi-column-container①④) [(5)](#ref-for-multi-column-container①⑤) [(6)](#ref-for-multi-column-container①⑥)
-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-multi-column-container①⑦) [(2)](#ref-for-multi-column-container①⑧) [(3)](#ref-for-multi-column-container①⑨) [(4)](#ref-for-multi-column-container②⓪)

**[\#column-box](#column-box)Referenced in:**

-   [2. The Multi-Column Model](#ref-for-column-box) [(2)](#ref-for-column-box①) [(3)](#ref-for-column-box②) [(4)](#ref-for-column-box③) [(5)](#ref-for-column-box④) [(6)](#ref-for-column-box⑤)
-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-column-box⑥)
-   [8.1. Overflow Inside Multicol Containers](#ref-for-column-box⑦)

**[\#multi-column-line](#multi-column-line)Referenced in:**

-   [2. The Multi-Column Model](#ref-for-multi-column-line) [(2)](#ref-for-multi-column-line①) [(3)](#ref-for-multi-column-line②) [(4)](#ref-for-multi-column-line③)
-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-multi-column-line④) [(2)](#ref-for-multi-column-line⑤) [(3)](#ref-for-multi-column-line⑥) [(4)](#ref-for-multi-column-line⑦)
-   [7.1. Column Balancing: the column-fill property](#ref-for-multi-column-line⑧)

**[\#column-gap](#column-gap)Referenced in:**

-   [1. Introduction](#ref-for-column-gap)
-   [4. Column Gaps and Rules](#ref-for-column-gap①)
-   [4.5. Column Rule Shorthand: the column-rule property](#ref-for-column-gap②)

**[\#column-rule](#column-rule)Referenced in:**

-   [1. Introduction](#ref-for-column-rule)
-   [4. Column Gaps and Rules](#ref-for-column-rule①) [(2)](#ref-for-column-rule②) [(3)](#ref-for-column-rule③)
-   [4.2. The Color of Column Rules: the column-rule-color property](#ref-for-column-rule④)
-   [4.5. Column Rule Shorthand: the column-rule property](#ref-for-column-rule⑤)
-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-column-rule⑥)

**[\#multi-column-formatting-context](#multi-column-formatting-context)Referenced in:**

-   [4.1. Gutters Between Columns: the column-gap property](#ref-for-multi-column-formatting-context)

**[\#propdef-column-width](#propdef-column-width)Referenced in:**

-   [2. The Multi-Column Model](#ref-for-propdef-column-width)
-   [3. The Number and Width of Columns](#ref-for-propdef-column-width①) [(2)](#ref-for-propdef-column-width②)
-   [3.1. The Inline Size of Columns: the column-width property](#ref-for-propdef-column-width③) [(2)](#ref-for-propdef-column-width④) [(3)](#ref-for-propdef-column-width⑤)
-   [3.2. The Number of Columns: the column-count property](#ref-for-propdef-column-width⑥) [(2)](#ref-for-propdef-column-width⑦)
-   [3.3. The column-width and column-count Shorthand: The columns Property](#ref-for-propdef-column-width⑧) [(2)](#ref-for-propdef-column-width⑨) [(3)](#ref-for-propdef-column-width①⓪)
-   [3.4. The Pseudo-algorithm](#ref-for-propdef-column-width①①) [(2)](#ref-for-propdef-column-width①②)
-   [Changes from the Candidate Recommendation (CR) of 12 April 2011.](#ref-for-propdef-column-width①③) [(2)](#ref-for-propdef-column-width①④)

**[\#valdef-column-width-auto](#valdef-column-width-auto)Referenced in:**

-   [2. The Multi-Column Model](#ref-for-valdef-column-width-auto)
-   [3.1. The Inline Size of Columns: the column-width property](#ref-for-valdef-column-width-auto①)

**[\#propdef-column-count](#propdef-column-count)Referenced in:**

-   [2. The Multi-Column Model](#ref-for-propdef-column-count)
-   [3. The Number and Width of Columns](#ref-for-propdef-column-count①) [(2)](#ref-for-propdef-column-count②)
-   [3.1. The Inline Size of Columns: the column-width property](#ref-for-propdef-column-count③)
-   [3.2. The Number of Columns: the column-count property](#ref-for-propdef-column-count④) [(2)](#ref-for-propdef-column-count⑤)
-   [3.3. The column-width and column-count Shorthand: The columns Property](#ref-for-propdef-column-count⑥) [(2)](#ref-for-propdef-column-count⑦) [(3)](#ref-for-propdef-column-count⑧)
-   [3.4. The Pseudo-algorithm](#ref-for-propdef-column-count⑨) [(2)](#ref-for-propdef-column-count①⓪) [(3)](#ref-for-propdef-column-count①①)
-   [Changes from the Candidate Recommendation (CR) of 12 April 2011.](#ref-for-propdef-column-count①②) [(2)](#ref-for-propdef-column-count①③)

**[\#propdef-columns](#propdef-columns)Referenced in:**

-   [1. Introduction](#ref-for-propdef-columns)
-   [3. The Number and Width of Columns](#ref-for-propdef-columns①)
-   [3.3. The column-width and column-count Shorthand: The columns Property](#ref-for-propdef-columns②) [(2)](#ref-for-propdef-columns③)
-   [Changes from the Candidate Recommendation (CR) of 12 April 2011.](#ref-for-propdef-columns④)

**[\#propdef-column-rule-color](#propdef-column-rule-color)Referenced in:**

-   [4.2. The Color of Column Rules: the column-rule-color property](#ref-for-propdef-column-rule-color)
-   [4.5. Column Rule Shorthand: the column-rule property](#ref-for-propdef-column-rule-color①) [(2)](#ref-for-propdef-column-rule-color②)

**[\#propdef-column-rule-style](#propdef-column-rule-style)Referenced in:**

-   [4.3. The Style Of Column Rules: the column-rule-style property](#ref-for-propdef-column-rule-style) [(2)](#ref-for-propdef-column-rule-style①)
-   [4.5. Column Rule Shorthand: the column-rule property](#ref-for-propdef-column-rule-style②) [(2)](#ref-for-propdef-column-rule-style③)

**[\#propdef-column-rule-width](#propdef-column-rule-width)Referenced in:**

-   [4.3. The Style Of Column Rules: the column-rule-style property](#ref-for-propdef-column-rule-width)
-   [4.4. The Width Of Column Rules: the column-rule-width property](#ref-for-propdef-column-rule-width①)
-   [4.5. Column Rule Shorthand: the column-rule property](#ref-for-propdef-column-rule-width②) [(2)](#ref-for-propdef-column-rule-width③)
-   [Changes from the Candidate Recommendation (CR) of 12 April 2011.](#ref-for-propdef-column-rule-width④)

**[\#propdef-column-rule](#propdef-column-rule)Referenced in:**

-   [1. Introduction](#ref-for-propdef-column-rule) [(2)](#ref-for-propdef-column-rule①) [(3)](#ref-for-propdef-column-rule②) [(4)](#ref-for-propdef-column-rule③)
-   [4.5. Column Rule Shorthand: the column-rule property](#ref-for-propdef-column-rule④)

**[\#propdef-column-span](#propdef-column-span)Referenced in:**

-   [1. Introduction](#ref-for-propdef-column-span)
-   [6. Spanning Columns](#ref-for-propdef-column-span①)
-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-propdef-column-span②) [(2)](#ref-for-propdef-column-span③) [(3)](#ref-for-propdef-column-span④) [(4)](#ref-for-propdef-column-span⑤) [(5)](#ref-for-propdef-column-span⑥)
-   [Changes from the Candidate Recommendation (CR) of 12 April 2011.](#ref-for-propdef-column-span⑦)

**[\#valdef-column-span-none](#valdef-column-span-none)Referenced in:**

-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-valdef-column-span-none)

**[\#valdef-column-span-all](#valdef-column-span-all)Referenced in:**

-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-valdef-column-span-all) [(2)](#ref-for-valdef-column-span-all①) [(3)](#ref-for-valdef-column-span-all②)

**[\#spanner](#spanner)Referenced in:**

-   [2. The Multi-Column Model](#ref-for-spanner) [(2)](#ref-for-spanner①)
-   [6.1. Spanning An Element Across Columns: the column-span property](#ref-for-spanner②) [(2)](#ref-for-spanner③)
-   [7.1. Column Balancing: the column-fill property](#ref-for-spanner④)

**[\#propdef-column-fill](#propdef-column-fill)Referenced in:**

-   [1. Introduction](#ref-for-propdef-column-fill)
-   [7.1. Column Balancing: the column-fill property](#ref-for-propdef-column-fill①)
-   [Changes from the Candidate Recommendation (CR) of 12 April 2011.](#ref-for-propdef-column-fill②) [(2)](#ref-for-propdef-column-fill③) [(3)](#ref-for-propdef-column-fill④)

[↑](#title)
