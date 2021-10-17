<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

CSS Values and Units Module Level 3
===================================

<span class="content">W3C Candidate Recommendation, 6 June 2019</span>
----------------------------------------------------------------------

This version:   
<a href="https://www.w3.org/TR/2019/CR-css-values-3-20190606/" class="u-url">https://www.w3.org/TR/2019/CR-css-values-3-20190606/</a>

Latest published version:   
<https://www.w3.org/TR/css-values-3/>

Editor's Draft:   
<https://drafts.csswg.org/css-values-3/>

Previous Versions:   
<https://www.w3.org/TR/2019/CR-css-values-3-20190131/>

<https://www.w3.org/TR/2018/CR-css-values-3-20180814/>

<https://www.w3.org/TR/2016/CR-css-values-3-20160929/>

<https://www.w3.org/TR/2015/CR-css-values-3-20150611/>

<https://www.w3.org/TR/2013/CR-css3-values-20130730/>

<https://www.w3.org/TR/2013/CR-css3-values-20130404/>

<https://www.w3.org/TR/2012/CR-css3-values-20120828/>

<https://www.w3.org/TR/2012/WD-css3-values-20120308/>

<https://www.w3.org/TR/2011/WD-css3-values-20110906/>

<https://www.w3.org/TR/2006/WD-css3-values-20060919>

<https://www.w3.org/TR/2005/WD-css3-values-20050726>

<https://www.w3.org/TR/2001/WD-css3-values-20010713/>

Test Suite:   
<http://test.csswg.org/suites/css-values-3_dev/nightly-unstable/>

Editors:   
<a href="http://xanthir.com/contact/" class="p-name fn u-url url">Tab Atkins</a> (<span class="p-org org">Google</span>)

<a href="http://fantasai.inkedblade.net/contact" class="p-name fn u-url url">fantasai</a>

Former Editor:   
<a href="mailto:howcome@opera.com" class="p-name fn u-email email">Håkon Wium Lie</a> (<span class="p-org org">Opera Software</span>)

Suggest an Edit for this Spec:   
[GitHub Editor](https://github.com/w3c/csswg-drafts/blob/master/css-values-3/Overview.bs)

Issue Tracking:   
[GitHub Issues](https://github.com/w3c/csswg-drafts/labels/css-values-3)

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2019 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [permissive document license](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document) rules apply.

------------------------------------------------------------------------

<span class="content">Abstract</span>
-------------------------------------

This CSS module describes the common values and units that CSS properties accept and the syntax used for describing them in CSS property definitions.

[CSS](https://www.w3.org/TR/CSS/) is a language for describing the rendering of structured documents (such as HTML and XML) on screen, on paper, etc.

<span class="content">Status of this document</span>
----------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index at https://www.w3.org/TR/.](https://www.w3.org/TR/)*

This document was produced by the [CSS Working Group](https://www.w3.org/Style/CSS/members) as a Candidate Recommendation. This document is intended to become a W3C Recommendation. This document will remain a Candidate Recommendation at least until 6 August 2019 in order to ensure the opportunity for wide review.

[GitHub Issues](https://github.com/w3c/csswg-drafts/issues) are preferred for discussion of this specification. When filing an issue, please put the text “css-values” in the title, preferably like this: “\[css-values\] *…summary of comment…*”. All issues and comments are [archived](https://lists.w3.org/Archives/Public/public-css-archive/), and there is also a [historical archive](https://lists.w3.org/Archives/Public/www-style/).

A [preliminary implementation report](https://test.csswg.org/harness/results/css-values-3_dev/grouped/) is available.

Publication as a Candidate Recommendation does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/32061/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2019/Process-20190301/" id="w3c_process_revision">1 March 2019 W3C Process Document</a>.

For changes since the last draft, see the [Changes](#changes) section.

The following features are at-risk, and may be dropped during the CR period:

-   <a href="#funcdef-attr" id="ref-for-funcdef-attr" class="css">attr()</a>

“At-risk” is a W3C Process term-of-art, and does not necessarily imply that the feature is in danger of being dropped or delayed. It means that the WG believes the feature may have difficulty being interoperably implemented in a timely manner, and marking it as such allows the WG to drop the feature if necessary when transitioning to the Proposed Rec stage, without having to publish a new Candidate Rec without the feature first.

Table of Contents
-----------------

1.  [<span class="secno">1</span> <span class="content"> Introduction</span>](#intro)
    1.  [<span class="secno">1.1</span> <span class="content"> Module Interactions</span>](#placement)
2.  [<span class="secno">2</span> <span class="content"> Value Definition Syntax</span>](#value-defs)
    1.  [<span class="secno">2.1</span> <span class="content"> Component Value Types</span>](#component-types)
    2.  [<span class="secno">2.2</span> <span class="content"> Component Value Combinators</span>](#component-combinators)
    3.  [<span class="secno">2.3</span> <span class="content"> Component Value Multipliers</span>](#component-multipliers)
    4.  [<span class="secno">2.4</span> <span class="content"> Combinator and Multiplier Patterns</span>](#combinator-multiplier-patterns)
    5.  [<span class="secno">2.5</span> <span class="content"> Component Values and White Space</span>](#component-whitespace)
    6.  [<span class="secno">2.6</span> <span class="content"> Property Value Examples</span>](#value-examples)
3.  [<span class="secno">3</span> <span class="content"> Textual Data Types</span>](#textual-values)
    1.  [<span class="secno">3.1</span> <span class="content"> Pre-defined Keywords</span>](#keywords)
        1.  [<span class="secno">3.1.1</span> <span class="content"> CSS-wide keywords: <span class="css">initial</span>, <span class="css">inherit</span> and <span class="css">unset</span></span>](#common-keywords)
    2.  [<span class="secno">3.2</span> <span class="content"> Author-defined Identifiers: the <span class="production">&lt;custom-ident&gt;</span> type</span>](#custom-idents)
    3.  [<span class="secno">3.3</span> <span class="content"> Quoted Strings: the <span class="production">&lt;string&gt;</span> type</span>](#strings)
    4.  [<span class="secno">3.4</span> <span class="content"> Resource Locators: the <span class="production">&lt;url&gt;</span> type</span>](#urls)
        1.  [<span class="secno">3.4.1</span> <span class="content"> Relative URLs</span>](#relative-urls)
            1.  [<span class="secno">3.4.1.1</span> <span class="content"> Fragment URLs</span>](#local-urls)
        2.  [<span class="secno">3.4.2</span> <span class="content"> Empty URLs</span>](#url-empty)
        3.  [<span class="secno">3.4.3</span> <span class="content"> URL Modifiers</span>](#url-modifiers)
4.  [<span class="secno">4</span> <span class="content"> Numeric Data Types</span>](#numeric-types)
    1.  [<span class="secno">4.1</span> <span class="content"> Range Restrictions and Range Definition Notation</span>](#numeric-ranges)
    2.  [<span class="secno">4.2</span> <span class="content"> Integers: the <span class="production">&lt;integer&gt;</span> type</span>](#integers)
    3.  [<span class="secno">4.3</span> <span class="content"> Real Numbers: the <span class="production">&lt;number&gt;</span> type</span>](#numbers)
    4.  [<span class="secno">4.4</span> <span class="content"> Numbers with Units: dimension values</span>](#dimensions)
        1.  [<span class="secno">4.4.1</span> <span class="content"> Compatible Units</span>](#compat)
    5.  [<span class="secno">4.5</span> <span class="content"> Percentages: the <span class="production">&lt;percentage&gt;</span> type</span>](#percentages)
    6.  [<span class="secno">4.6</span> <span class="content"> Mixing Percentages and Dimensions</span>](#mixed-percentages)
5.  [<span class="secno">5</span> <span class="content"> Distance Units: the <span class="production" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</span> type</span>](#lengths)
    1.  [<span class="secno">5.1</span> <span class="content"> Relative Lengths</span>](#relative-lengths)
        1.  [<span class="secno">5.1.1</span> <span class="content"> Font-relative Lengths: the <span class="css">em</span>, <span class="css">ex</span>, <span class="css">ch</span>, <span class="css">rem</span> units</span>](#font-relative-lengths)
        2.  [<span class="secno">5.1.2</span> <span class="content"> Viewport-percentage Lengths: the <span class="css">vw</span>, <span class="css">vh</span>, <span class="css">vmin</span>, <span class="css">vmax</span> units</span>](#viewport-relative-lengths)
    2.  [<span class="secno">5.2</span> <span class="content"> Absolute Lengths: the <span class="css">cm</span>, <span class="css">mm</span>, <span class="css">Q</span>, <span class="css">in</span>, <span class="css">pt</span>, <span class="css">pc</span>, <span class="css">px</span> units</span>](#absolute-lengths)
6.  [<span class="secno">6</span> <span class="content"> Other Quantities</span>](#other-units)
    1.  [<span class="secno">6.1</span> <span class="content"> Angle Units: the <span class="production" title="Expands to: turn | rad | grad | deg">&lt;angle&gt;</span> type and <span class="css">deg</span>, <span class="css">grad</span>, <span class="css">rad</span>, <span class="css">turn</span> units</span>](#angles)
    2.  [<span class="secno">6.2</span> <span class="content"> Duration Units: the <span class="production" title="Expands to: s | ms">&lt;time&gt;</span> type and <span class="css">s</span>, <span class="css">ms</span> units</span>](#time)
    3.  [<span class="secno">6.3</span> <span class="content"> Frequency Units: the <span class="production" title="Expands to: hz | khz">&lt;frequency&gt;</span> type and <span class="css">Hz</span>, <span class="css">kHz</span> units</span>](#frequency)
    4.  [<span class="secno">6.4</span> <span class="content"> Resolution Units: the <span class="production" title="Expands to: dppx | dpcm | dpi">&lt;resolution&gt;</span> type and <span class="css">dpi</span>, <span class="css">dpcm</span>, <span class="css">dppx</span> units</span>](#resolution)
7.  [<span class="secno">7</span> <span class="content"> Data Types Defined Elsewhere</span>](#defined-elsewhere)
    1.  [<span class="secno">7.1</span> <span class="content"> Colors: the <span class="production" title="Expands to: indigo | gold | firebrick | indianred | yellow | darkolivegreen | darkseagreen | slategrey | darkslategrey | mediumvioletred | mediumorchid | transparent | chartreuse | mediumslateblue | black | springgreen | crimson | lightsalmon | brown | turquoise | olivedrab | cyan | silver | skyblue | gray | darkturquoise | goldenrod | darkgreen | darkviolet | darkgray | lightpink | teal | darkmagenta | lightgoldenrodyellow | lavender | yellowgreen | thistle | violet | navy | dimgrey | orchid | blue | ghostwhite | honeydew | cornflowerblue | darkblue | darkkhaki | mediumpurple | cornsilk | red | bisque | slategray | darkcyan | khaki | wheat | deepskyblue | rebeccapurple | darkred | steelblue | aliceblue | lightslategrey | gainsboro | mediumturquoise | floralwhite | coral | purple | lightgrey | lightcyan | darksalmon | beige | azure | lightsteelblue | oldlace | greenyellow | royalblue | lightseagreen | mistyrose | sienna | lightcoral | orangered | navajowhite | lime | palegreen | burlywood | seashell | mediumspringgreen | fuchsia | papayawhip | blanchedalmond | peru | aquamarine | white | darkslategray | tomato | ivory | dodgerblue | currentcolor | lemonchiffon | chocolate | orange | forestgreen | darkgrey | olive | mintcream | antiquewhite | darkorange | cadetblue | moccasin | limegreen | saddlebrown | grey | darkslateblue | lightskyblue | deeppink | plum | aqua | darkgoldenrod | maroon | sandybrown | magenta | tan | rosybrown | pink | lightblue | palevioletred | mediumseagreen | slateblue | dimgray | powderblue | seagreen | snow | mediumblue | midnightblue | paleturquoise | palegoldenrod | whitesmoke | darkorchid | salmon | lightslategray | lawngreen | lightgreen | lightgray | hotpink | lightyellow | lavenderblush | linen | mediumaquamarine | green | blueviolet | peachpuff">&lt;color&gt;</span> type</span>](#colors)
    2.  [<span class="secno">7.2</span> <span class="content"> Images: the <span class="production">&lt;image&gt;</span> type</span>](#images)
    3.  [<span class="secno">7.3</span> <span class="content"> 2D Positioning: the <span class="production">&lt;position&gt;</span> type</span>](#position)
8.  [<span class="secno">8</span> <span class="content"> Functional Notations</span>](#functional-notations)
    1.  [<span class="secno">8.1</span> <span class="content"> Mathematical Expressions: <span class="css">calc()</span></span>](#calc-notation)
        1.  [<span class="secno">8.1.1</span> <span class="content"> Syntax</span>](#calc-syntax)
        2.  [<span class="secno">8.1.2</span> <span class="content"> Type Checking</span>](#calc-type-checking)
        3.  [<span class="secno">8.1.3</span> <span class="content"> Computed Value</span>](#calc-computed-value)
        4.  [<span class="secno">8.1.4</span> <span class="content"> Range Checking</span>](#calc-range)
        5.  [<span class="secno">8.1.5</span> <span class="content"> Serialization</span>](#calc-serialize)
    2.  [<span class="secno">8.2</span> <span class="content"> Attribute References: <span class="css">attr()</span></span>](#attr-notation)
9.  [<span class="secno">9</span> <span class="content"> Appendix A: IANA Considerations</span>](#iana)
    1.  [<span class="secno">9.1</span> <span class="content"> Registration for the `about:invalid` URL scheme</span>](#about-invalid)
10. [<span class="secno"></span> <span class="content"> Acknowledgments</span>](#acknowledgments)
11. [<span class="secno"></span> <span class="content"> Changes</span>](#changes)
12. [<span class="secno"></span> <span class="content"> Security and Privacy Considerations</span>](#sec-pri)
13. [<span class="secno"></span> <span class="content"> Conformance</span>](#conformance)
    1.  [<span class="secno"></span> <span class="content"> Document conventions</span>](#document-conventions)
    2.  [<span class="secno"></span> <span class="content"> Conformance classes</span>](#conform-classes)
    3.  [<span class="secno"></span> <span class="content"> Requirements for Responsible Implementation of CSS</span>](#conform-responsible)
        1.  [<span class="secno"></span> <span class="content"> Partial Implementations</span>](#conform-partial)
        2.  [<span class="secno"></span> <span class="content"> Implementations of Unstable and Proprietary Features</span>](#conform-future-proofing)
        3.  [<span class="secno"></span> <span class="content"> Implementations of CR-level Features</span>](#conform-testing)
    4.  [<span class="secno"></span> <span class="content"> CR exit criteria</span>](#cr-exit-criteria)
14. [<span class="secno"></span> <span class="content">Index</span>](#index)
    1.  [<span class="secno"></span> <span class="content">Terms defined by this specification</span>](#index-defined-here)
    2.  [<span class="secno"></span> <span class="content">Terms defined by reference</span>](#index-defined-elsewhere)
15. [<span class="secno"></span> <span class="content">References</span>](#references)
    1.  [<span class="secno"></span> <span class="content">Normative References</span>](#normative)
    2.  [<span class="secno"></span> <span class="content">Informative References</span>](#informative)

<span class="secno">1. </span><span class="content"> Introduction</span><a href="#intro" class="self-link"></a>
---------------------------------------------------------------------------------------------------------------

The value definition field of each CSS property can contain keywords, data types (which appear between <span class="css">&lt;</span> and <a href="https://www.w3.org/TR/selectors4/#selectordef-child" id="ref-for-selectordef-child" class="css">&gt;</a>), and information on how they can be combined. Generic data types (<a href="#length-value" id="ref-for-length-value" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a> being the most widely used) that can be used by many properties are described in this specification, while more specific data types (e.g., <span class="production css">&lt;spacing-limit&gt;</span>) are described in the corresponding modules.

### <span class="secno">1.1. </span><span class="content"> Module Interactions</span><a href="#placement" class="self-link"></a>

This module replaces and extends the data type definitions in [\[CSS21\]](#biblio-css21) sections [1.4.2.1](https://www.w3.org/TR/CSS21/about.html#value-defs), [4.3](https://www.w3.org/TR/CSS21/syndata.html#values), and [A.2](https://www.w3.org/TR/CSS21/aural.html#aural-intro).

<span class="secno">2. </span><span class="content"> Value Definition Syntax</span><a href="#value-defs" class="self-link"></a>
-------------------------------------------------------------------------------------------------------------------------------

The value definition syntax described here is used to define the set of valid values for CSS properties (and the valid syntax of many other parts of CSS). A value so described can have one or more components.

### <span class="secno">2.1. </span><span class="content"> Component Value Types</span><a href="#component-types" class="self-link"></a>

Component value types are designated in several ways:

1.  [keyword](#keywords) values (such as <span class="css">auto</span>, <a href="https://www.w3.org/TR/css-counter-styles-3/#disc" id="ref-for-disc" class="css">disc</a>, etc.), which appear literally, without quotes (e.g. `auto`)
2.  basic data types, which appear between <span class="css">&lt;</span> and <a href="https://www.w3.org/TR/selectors4/#selectordef-child" id="ref-for-selectordef-child①" class="css">&gt;</a> (e.g., <a href="#length-value" id="ref-for-length-value①" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a>, <a href="#percentage-value" id="ref-for-percentage-value" class="production css">&lt;percentage&gt;</a>, etc.). For <a href="#numeric-data-types" id="ref-for-numeric-data-types">numeric data types</a>, this type notation can annotate any range restrictions using the [bracketed range notation](#numeric-ranges) described below.
3.  types that have the same range of values as a property bearing the same name (e.g., <a href="https://www.w3.org/TR/css3-background/#propdef-border-width" id="ref-for-propdef-border-width" class="production">&lt;'border-width'&gt;</a>, <a href="https://www.w3.org/TR/css3-background/#propdef-background-attachment" id="ref-for-propdef-background-attachment" class="production">&lt;'background-attachment'&gt;</a>, etc.). In this case, the type name is the property name (complete with quotes) between the brackets. Such a type does *not* include [CSS-wide keywords](#common-keywords) such as <a href="https://www.w3.org/TR/css-cascade-4/#valdef-all-inherit" id="ref-for-valdef-all-inherit" class="css">inherit</a>, and also does not include any top-level <a href="#mult-comma" id="ref-for-mult-comma">comma-separated-list multiplier</a> (i.e. if property <span class="css">pairing</span> is defined as <span class="css">\[ <a href="#identifier-value" id="ref-for-identifier-value" class="production css">&lt;custom-ident&gt;</a> <a href="#integer-value" id="ref-for-integer-value" class="production css">&lt;integer&gt;</a>? \]\#</span>, then <span class="production">&lt;'pairing'&gt;</span> is equivalent to <span class="css">\[ <a href="#identifier-value" id="ref-for-identifier-value①" class="production css">&lt;custom-ident&gt;</a> <a href="#integer-value" id="ref-for-integer-value①" class="production css">&lt;integer&gt;</a>? \]</span>, not <span class="css"><a href="#identifier-value" id="ref-for-identifier-value②" class="production css">&lt;custom-ident&gt;</a> <a href="#integer-value" id="ref-for-integer-value②" class="production css">&lt;integer&gt;</a> \]\#</span>).
4.  non-terminals that do not share the same name as a property. In this case, the non-terminal name appears between <span class="css">&lt;</span> and <a href="https://www.w3.org/TR/selectors4/#selectordef-child" id="ref-for-selectordef-child②" class="css">&gt;</a>, as in <span class="production css">&lt;spacing-limit&gt;</span>. Notice the distinction between <a href="https://www.w3.org/TR/CSS21/box.html#value-def-border-width" id="ref-for-value-def-border-width" class="production css">&lt;border-width&gt;</a> and <a href="https://www.w3.org/TR/css3-background/#propdef-border-width" id="ref-for-propdef-border-width①" class="production">&lt;'border-width'&gt;</a>: the latter is defined as the value of the <span id="ref-for-propdef-border-width②" class="property">border-width</span> property, the former requires an explicit expansion elsewhere. The definition of a non-terminal is typically located near its first appearance in the specification.

Some property value definitions also include the slash (/), the comma (,), and/or parentheses as literals. These represent their corresponding tokens. Other non-keyword literal characters that may appear in a component value, such as “+”, must be written enclosed in single quotes.

**Commas specified in the grammar are implicitly omissible** in some circumstances, when used to separate optional terms in the grammar. Within a top-level list in a property or other CSS value, or a function’s argument list, a comma specified in the grammar must be omitted if:

-   all items preceding the comma have been omitted
-   all items following the comma have been omitted
-   multiple commas would be adjacent (ignoring [white space](https://www.w3.org/TR/css-syntax/#whitespace)/comments), due to the items between the commas being omitted.

<a href="#example-c02dd41d" class="self-link"></a> For example, if a function can accept three arguments in order, but all of them are optional, the grammar can be written like:

    example( first? , second? , third? )

Given this grammar, writing <span class="css">example(first, second, third)</span> is valid, as is <span class="css">example(first, second)</span> or <span class="css">example(first, third)</span> or <span class="css">example(second)</span>. However, <span class="css">example(first, , third)</span> is invalid, as one of those commas are no longer separating two options; similarly, <span class="css">example(,second)</span> and <span class="css">example(first,)</span> are invalid. <span class="css">example(first second)</span> is also invalid, as commas are still required to actually separate the options.

If commas were not implicitly omittable, the grammar would have to be much more complicated to properly express the ways that the arguments can be omitted, greatly obscuring the simplicity of the feature.

All CSS properties also accept the [CSS-wide keyword values](#common-keywords) as the sole component of their property value. For readability these are not listed explicitly in the property value syntax definitions. For example, the full value definition of <a href="https://www.w3.org/TR/css3-background/#propdef-border-color" id="ref-for-propdef-border-color" class="property">border-color</a> is `<color>{1,4} | inherit | initial | unset` (even though it is listed as `<color>{1,4}`).

Note: This implies that, in general, combining these keywords with other component values in the same declaration results in an invalid declaration. For example, <a href="https://www.w3.org/TR/css3-background/#propdef-background" id="ref-for-propdef-background" class="css">background: url(corner.png) no-repeat, inherit;</a> is invalid.

### <span class="secno">2.2. </span><span class="content"> Component Value Combinators</span><a href="#component-combinators" class="self-link"></a>

Component values can be arranged into property values as follows:

-   Juxtaposing components means that all of them must occur, in the given order.
-   A double ampersand (&&) separates two or more components, all of which must occur, in any order.
-   A double bar (||) separates two or more options: one or more of them must occur, in any order.
-   A bar (|) separates two or more alternatives: exactly one of them must occur.
-   Brackets (\[ \]) are for grouping.

Juxtaposition is stronger than the double ampersand, the double ampersand is stronger than the double bar, and the double bar is stronger than the bar. Thus, the following lines are equivalent:

      a b   |   c ||   d &&   e f
    [ a b ] | [ c || [ d && [ e f ]]]

For reorderable combinators (||, &&), ordering of the grammar does not matter: components in the same grouping may be interleaved in any order. Thus, the following lines are equivalent:

    a || b || c
    b || a || c

### <span class="secno">2.3. </span><span class="content"> Component Value Multipliers</span><a href="#component-multipliers" class="self-link"></a>

Every type, keyword, or bracketed group may be followed by one of the following modifiers:

-   An asterisk (\*) indicates that the preceding type, word, or group occurs zero or more times.
-   A plus (+<a href="#mult-one-plus" class="self-link"></a>) indicates that the preceding type, word, or group occurs one or more times.
-   A question mark (?) indicates that the preceding type, word, or group is optional (occurs zero or one times).
-   A single number in curly braces ({A}<a href="#mult-num" class="self-link"></a>) indicates that the preceding type, word, or group occurs A times.
-   A comma-separated pair of numbers in curly braces ({A,B}<a href="#mult-num-range" class="self-link"></a>) indicates that the preceding type, word, or group occurs at least A and at most B times. The B may be omitted ({A,}) to indicate that there must be at least A repetitions, with no upper bound on the number of repetitions.
-   A hash mark (\#) indicates that the preceding type, word, or group occurs one or more times, separated by comma tokens (which may optionally be surrounded by [white space](https://www.w3.org/TR/css-syntax/#whitespace) and/or comments). It may optionally be followed by the curly brace forms, above, to indicate precisely how many times the repetition occurs, like <span class="css">&lt;length&gt;\#{1,4}</span>.
-   An exclamation point (!<a href="#mult-req" class="self-link"></a>) after a group indicates that the group is required and must produce at least one value; even if the grammar of the items within the group would otherwise allow the entire contents to be omitted, at least one component value must not be omitted.

For repeated component values (indicated by <a href="https://www.w3.org/TR/css3-selectors/#x" id="ref-for-x" class="css">*</a>, <a href="https://www.w3.org/TR/selectors4/#selectordef-adjacent" id="ref-for-selectordef-adjacent" class="css">+</a>, or <span class="css">\#</span>), UAs must support at least 20 repetitions of the component. If a property value contains more than the supported number of repetitions, the declaration must be ignored as if it were invalid.

### <span class="secno">2.4. </span><span class="content"> Combinator and Multiplier Patterns</span><a href="#combinator-multiplier-patterns" class="self-link"></a>

There are a small set of common ways to combine multiple independent <a href="https://drafts.csswg.org/css-syntax-3/#component-value" id="ref-for-component-value">component values</a> in particular numbers and orders. In particular, it’s common to want to express that, from a set of component value, the author must select zero or more, one or more, or all of them, and in either the order specified in the grammar or in any order.

All of these can be easily expressed using simple patterns of [combinators](#component-combinators) and [multipliers](#component-multipliers):

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th></th><th>in order</th><th>any order</th></tr></thead><tbody><tr class="odd"><td>zero or more</td><td><pre><code>A? B? C?</code></pre></td><td><pre><code> A? || B? || C?</code></pre></td></tr><tr class="even"><td>one or more</td><td><pre><code> [ A? B? C? ]!</code></pre></td><td><pre><code>A || B || C</code></pre></td></tr><tr class="odd"><td>all</td><td><pre><code>A B C </code></pre></td><td><pre><code>A &amp;&amp; B &amp;&amp; C</code></pre></td></tr></tbody></table>

Note that all of the "any order" possibilities are expressed using combinators, while the "in order" possibilities are all variants on juxtaposition.

### <span class="secno">2.5. </span><span class="content"> Component Values and White Space</span><a href="#component-whitespace" class="self-link"></a>

Unless otherwise specified, [white space](https://www.w3.org/TR/css-syntax/#whitespace) and/or comments may appear before, after, and/or between components combined using the above [combinators](#component-combinators) and [multipliers](#component-multipliers).

Note: In many cases, spaces will in fact be *required* between components in order to distinguish them from each other. For example, the value <span class="css">1em2em</span> would be parsed as a single <a href="https://www.w3.org/TR/css-syntax-3/#typedef-dimension-token" id="ref-for-typedef-dimension-token" class="production css">&lt;dimension-token&gt;</a> with the number <span class="css">1</span> and the identifier <span class="css">em2em</span>, which is an invalid unit. In this case, a space would be required before the <span class="css">2</span> to get this parsed as the two lengths <span class="css">1em</span> and <span class="css">2em</span>.

### <span class="secno">2.6. </span><span class="content"> Property Value Examples</span><a href="#value-examples" class="self-link"></a>

Below are some examples of properties with their corresponding value definition fields

<a href="#example-0263a08c" class="self-link"></a>

<table><thead><tr class="header"><th>Property</th><th>Value definition field</th><th>Example value</th></tr></thead><tbody><tr class="odd"><td><a href="https://www.w3.org/TR/css3-break/#propdef-orphans" id="ref-for-propdef-orphans" class="property">orphans</a></td><td>&lt;integer&gt;</td><td><span class="css">3</span></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-text-3/#propdef-text-align" id="ref-for-propdef-text-align" class="property">text-align</a></td><td>left | right | center | justify</td><td><a href="https://www.w3.org/TR/css-text-3/#valdef-text-align-center" id="ref-for-valdef-text-align-center" class="css">center</a></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-box-3/#propdef-padding-top" id="ref-for-propdef-padding-top" class="property">padding-top</a></td><td>&lt;length&gt; | &lt;percentage&gt;</td><td><span class="css">5%</span></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css3-ui/#propdef-outline-color" id="ref-for-propdef-outline-color" class="property">outline-color</a></td><td>&lt;color&gt; | invert</td><td><span class="css">#fefefe</span></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css-text-decor-3/#propdef-text-decoration" id="ref-for-propdef-text-decoration" class="property">text-decoration</a></td><td>none | underline || overline || line-through || blink</td><td><span class="css">overline underline</span></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-fonts-3/#propdef-font-family" id="ref-for-propdef-font-family" class="css">font-family</a></td><td>[ &lt;family-name&gt; | &lt;generic-family&gt; ]#</td><td><span class="css">"Gill Sans", Futura, sans-serif</span></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/css3-background/#propdef-border-width" id="ref-for-propdef-border-width③" class="property">border-width</a></td><td>[ &lt;length&gt; | thick | medium | thin ]{1,4}</td><td><span class="css">2px medium 4px</span></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/css-text-decor-3/#propdef-text-shadow" id="ref-for-propdef-text-shadow" class="property">text-shadow</a></td><td>[ inset? &amp;&amp; [ &lt;length&gt;{2,4} &amp;&amp; &lt;color&gt;? ] ]# | none</td><td><span class="css">3px 3px rgba(50%, 50%, 50%, 50%), lemonchiffon 0 0 4px inset</span></td></tr></tbody></table>

<span class="secno">3. </span><span class="content"> Textual Data Types</span><a href="#textual-values" class="self-link"></a>
------------------------------------------------------------------------------------------------------------------------------

The textual data types<a href="#textual-data-types" class="self-link"></a> include various keywords and identifiers as well as strings (<a href="#string-value" id="ref-for-string-value" class="production css">&lt;string&gt;</a>) and URLs (<a href="#url-value" id="ref-for-url-value" class="production css">&lt;url&gt;</a>).

CSS identifiers, generically denoted by &lt;ident&gt;, consist of a sequence of characters conforming to the <a href="https://www.w3.org/TR/css-syntax-3/#typedef-ident-token" id="ref-for-typedef-ident-token" class="production css">&lt;ident-token&gt;</a> grammar. [\[CSS3SYN\]](#biblio-css3syn) Identifiers cannot be quoted; otherwise they would be interpreted as strings.

### <span class="secno">3.1. </span><span class="content"> Pre-defined Keywords</span><a href="#keywords" class="self-link"></a>

In the value definition fields, keywords with a pre-defined meaning appear literally. Keywords are <a href="#css-identifier" id="ref-for-css-identifier">CSS identifiers</a> and are interpreted <a href="https://infra.spec.whatwg.org/#ascii-case-insensitive" id="ref-for-ascii-case-insensitive">ASCII case-insensitively</a> (i.e., \[a-z\] and \[A-Z\] are equivalent).

<a href="#example-9d0ae504" class="self-link"></a> For example, here is the value definition for the <a href="https://www.w3.org/TR/CSS21/tables.html#propdef-border-collapse" id="ref-for-propdef-border-collapse" class="property">border-collapse</a> property:

    Value: collapse | separate

And here is an example of its use:

    table { border-collapse: separate }

#### <span class="secno">3.1.1. </span><span class="content"> CSS-wide keywords: <a href="https://www.w3.org/TR/css-cascade-4/#valdef-all-initial" id="ref-for-valdef-all-initial" class="css">initial</a>, <a href="https://www.w3.org/TR/css-cascade-4/#valdef-all-inherit" id="ref-for-valdef-all-inherit①" class="css">inherit</a> and <a href="https://www.w3.org/TR/css-cascade-4/#valdef-all-unset" id="ref-for-valdef-all-unset" class="css">unset</a></span><a href="#common-keywords" class="self-link"></a>

As defined [above](#component-types), all properties accept the CSS-wide keywords, which represent value computations common to all CSS properties.

The <a href="https://www.w3.org/TR/css-cascade-4/#valdef-all-initial" id="ref-for-valdef-all-initial①" class="css">initial</a> keyword represents the value specified as the property’s initial value. The <a href="https://www.w3.org/TR/css-cascade-4/#valdef-all-inherit" id="ref-for-valdef-all-inherit②" class="css">inherit</a> keyword represents the computed value of the property on the element’s parent. The <a href="https://www.w3.org/TR/css-cascade-4/#valdef-all-unset" id="ref-for-valdef-all-unset①" class="css">unset</a> keyword acts as either <span id="ref-for-valdef-all-inherit③" class="css">inherit</span> or <span id="ref-for-valdef-all-initial②" class="css">initial</span>, depending on whether the property is inherited or not. All of these keywords are normatively defined in the Cascade module. [\[CSS3CASCADE\]](#biblio-css3cascade)

Other CSS specifications can define additional CSS-wide keywords.

### <span class="secno">3.2. </span><span class="content"> Author-defined Identifiers: the <a href="#identifier-value" id="ref-for-identifier-value③" class="production css">&lt;custom-ident&gt;</a> type</span><a href="#custom-idents" class="self-link"></a>

Some properties accept arbitrary author-defined identifiers as a component value. This generic data type is denoted by &lt;custom-ident&gt;, and represents any valid CSS <a href="#css-identifier" id="ref-for-css-identifier①">identifier</a> that would not be misinterpreted as a pre-defined keyword in that property’s value definition. Such identifiers are fully case-sensitive, even in the ASCII range (e.g. <span class="css">example</span> and <span class="css">EXAMPLE</span> are two different, unrelated user-defined identifiers).

The <a href="#css-wide-keywords" id="ref-for-css-wide-keywords">CSS-wide keywords</a> are not valid <a href="#identifier-value" id="ref-for-identifier-value④" class="production css">&lt;custom-ident&gt;</a>s. The <a href="https://www.w3.org/TR/css3-ui/#valdef-cursor-default" id="ref-for-valdef-cursor-default" class="css">default</a> keyword is reserved and is also not a valid <span id="ref-for-identifier-value⑤" class="production">&lt;custom-ident&gt;</span>. Specifications using <span id="ref-for-identifier-value⑥" class="production">&lt;custom-ident&gt;</span> must specify clearly what other keywords are excluded from <span id="ref-for-identifier-value⑦" class="production">&lt;custom-ident&gt;</span>, if any—for example by saying that any pre-defined keywords in that property’s value definition are excluded. Excluded keywords are excluded in all <a href="https://infra.spec.whatwg.org/#ascii-case-insensitive" id="ref-for-ascii-case-insensitive①">ASCII case permutations</a>.

When parsing positionally-ambiguous keywords in a property value, a <a href="#identifier-value" id="ref-for-identifier-value⑧" class="production css">&lt;custom-ident&gt;</a> production can only claim the keyword if no other unfulfilled production can claim it.

<a href="#example-950e3618" class="self-link"></a> For example, the shorthand declaration <a href="https://www.w3.org/TR/css3-animations/#propdef-animation" id="ref-for-propdef-animation" class="css">animation: ease-in ease-out</a> is equivalent to the longhand declarations <a href="https://www.w3.org/TR/css3-animations/#propdef-animation-timing-function" id="ref-for-propdef-animation-timing-function" class="css">animation-timing-function: ease-in; animation-name: ease-out;</a>. <a href="https://www.w3.org/TR/css-easing-1/#valdef-cubic-bezier-easing-function-ease-in" id="ref-for-valdef-cubic-bezier-easing-function-ease-in" class="css">ease-in</a> is claimed by the <a href="https://www.w3.org/TR/css-easing-1/#typedef-easing-function" id="ref-for-typedef-easing-function" class="production css">&lt;easing-function&gt;</a> production belonging to <span id="ref-for-propdef-animation-timing-function①" class="property">animation-timing-function</span>, leaving <a href="https://www.w3.org/TR/css-easing-1/#valdef-cubic-bezier-easing-function-ease-out" id="ref-for-valdef-cubic-bezier-easing-function-ease-out" class="css">ease-out</a> to be claimed by the <a href="#identifier-value" id="ref-for-identifier-value⑨" class="production css">&lt;custom-ident&gt;</a> production belonging to <a href="https://www.w3.org/TR/css3-animations/#propdef-animation-name" id="ref-for-propdef-animation-name" class="property">animation-name</a>.

Note: When designing grammars with <a href="#identifier-value" id="ref-for-identifier-value①⓪" class="production css">&lt;custom-ident&gt;</a>, the <span id="ref-for-identifier-value①①" class="production">&lt;custom-ident&gt;</span> should always be "positionally unambiguous", so that it’s impossible to conflict with any keyword values in the property.

### <span class="secno">3.3. </span><span class="content"> Quoted Strings: the <a href="#string-value" id="ref-for-string-value①" class="production css">&lt;string&gt;</a> type</span><a href="#strings" class="self-link"></a>

Strings<a href="#string" class="self-link"></a> are denoted by &lt;string&gt; and consist of a sequence of characters delimited by double quotes or single quotes. They correspond to the <a href="https://www.w3.org/TR/css-syntax-3/#typedef-string-token" id="ref-for-typedef-string-token" class="production css">&lt;string-token&gt;</a> production in the [CSS Syntax Module](https://www.w3.org/TR/css-syntax/) [\[CSS3SYN\]](#biblio-css3syn).

<a href="#example-9204e1e4" class="self-link"></a> Double quotes cannot occur inside double quotes, unless [escaped](https://www.w3.org/TR/CSS21/syndata.html#escaped-characters) (as `"\""` or as `"\22"`). Analogously for single quotes (`'\''` or `'\27'`).

    content: "this is a 'string'.";
    content: "this is a \"string\".";
    content: 'this is a "string".';
    content: 'this is a \'string\'.'

It is possible to break strings over several lines, for aesthetic or other reasons, but in such a case the newline itself has to be escaped with a backslash (\\). The newline is subsequently removed from the string. For instance, the following two selectors are exactly the same:

<a href="#example-4f7429ed" class="self-link"></a>

Example(s):

    a[title="a not s\
    o very long title"] {/*...*/}
    a[title="a not so very long title"] {/*...*/}

Since a string cannot directly represent a newline, to include a newline in a string, use the escape "\\A". (Hexadecimal A is the line feed character in Unicode (U+000A), but represents the generic notion of "newline" in CSS.)

### <span class="secno">3.4. </span><span class="content"> Resource Locators: the <a href="#url-value" id="ref-for-url-value①" class="production css">&lt;url&gt;</a> type</span><a href="#urls" class="self-link"></a>

The url() <a href="#functional-notation" id="ref-for-functional-notation">functional notation</a>, denoted by <a href="#url-value" id="ref-for-url-value②" class="production css">&lt;url&gt;</a>, represents a URL<a href="#url" class="self-link"></a>, which is a pointer to a resource. The typical syntax of a <span id="ref-for-url-value③" class="production">&lt;url&gt;</span> is:

    <url> = url( <string> <url-modifier>* )

<a href="#example-5917b301" class="self-link"></a> Below is an example of a URL being used as a background image:

    body { background: url("http://www.example.com/pinkish.gif") }

A <a href="#url-value" id="ref-for-url-value④" class="production css">&lt;url&gt;</a> may alternately be written without quotation marks around the URL itself, in which case it is <a href="https://www.w3.org/TR/css-syntax-3/#consume-a-url-token0" id="ref-for-consume-a-url-token0">specially-parsed</a> as a <a href="https://www.w3.org/TR/css-syntax-3/#typedef-url-token" id="ref-for-typedef-url-token" class="production css">&lt;url-token&gt;</a> [\[CSS3SYN\]](#biblio-css3syn).

<a href="#example-2e04cf61" class="self-link"></a> For example, the following declarations are identical:

    background: url("http://www.example.com/pinkish.gif");
    background: url(http://www.example.com/pinkish.gif);

Note: This unquoted syntax is cannot accept a <a href="#typedef-url-modifier" id="ref-for-typedef-url-modifier①" class="production css">&lt;url-modifier&gt;</a> argument and has extra escaping requirements: parentheses, [whitespace](https://www.w3.org/TR/css-syntax/#whitespace) characters, single quotes (') and double quotes (") appearing in a URL must be escaped with a backslash, e.g. <span class="css">url(open\\(parens)</span>, <span class="css">url(close\\)parens)</span>. (In quoted <a href="#string-value" id="ref-for-string-value③" class="production css">&lt;string&gt;</a> <a href="#funcdef-url" id="ref-for-funcdef-url" class="css">url()</a>s, only newlines and the character used to quote the string need to be escaped.) Depending on the type of URL, it might also be possible to write these characters as URL-escapes (e.g. <span class="css">url(open%28parens)</span> or <span class="css">url(close%29parens)</span>) as described in [\[URL\]](#biblio-url).

Some CSS contexts (such as <a href="https://www.w3.org/TR/css-cascade-4/#at-ruledef-import" id="ref-for-at-ruledef-import" class="css">@import</a>) also allow a <a href="#url-value" id="ref-for-url-value⑤" class="production css">&lt;url&gt;</a> to be represented by a bare <a href="#string-value" id="ref-for-string-value④" class="production css">&lt;string&gt;</a>, without the <a href="#funcdef-url" id="ref-for-funcdef-url①" class="css">url()</a> wrapper. In such cases the string behaves identically to a <span id="ref-for-funcdef-url②" class="css">url()</span> function containing that string.

<a href="#example-d264fc07" class="self-link"></a> For example, the following statements are identical:

    @import url("base-theme.css");
    @import "base-theme.css";

#### <span class="secno">3.4.1. </span><span class="content"> Relative URLs</span><a href="#relative-urls" class="self-link"></a>

In order to create modular style sheets that are not dependent on the absolute location of a resource, authors should use relative URLs. Relative URLs (as defined in [\[URL\]](#biblio-url)) are resolved to full URLs using a base URL. RFC 3986, section 3, defines the normative algorithm for this process. For CSS style sheets, the base URL is that of the style sheet itself, not that of the styled source document. Style sheets embedded within a document have the base URL associated with their container.

When a <a href="#url-value" id="ref-for-url-value⑥" class="production css">&lt;url&gt;</a> appears in the computed value of a property, it is resolved to an absolute URL, as described in the preceding paragraph. The computed value of a URL that the UA cannot resolve to an absolute URL is the specified value.

<a href="#example-b514611a" class="self-link"></a> For example, suppose the following rule:

    body { background: url("tile.png") }

is located in a style sheet designated by the URL:

    http://www.example.org/style/basic.css

The background of the source document’s `<body>` will be tiled with whatever image is described by the resource designated by the URL:

    http://www.example.org/style/tile.png

The same image will be used regardless of the URL of the source document containing the `<body>`.

##### <span class="secno">3.4.1.1. </span><span class="content"> Fragment URLs</span><a href="#local-urls" class="self-link"></a>

To work around some common eccentriticites in browser URL handling, CSS has special behavior for fragment-only urls.

If a <a href="#funcdef-url" id="ref-for-funcdef-url③" class="css">url()</a>’s value starts with a U+0023 NUMBER SIGN (`#`) character, parse it as per normal for URLs, but additionally set the local url flag of the <span id="ref-for-funcdef-url④" class="css">url()</span>.

When matching a <a href="#funcdef-url" id="ref-for-funcdef-url⑤" class="css">url()</a> with the <a href="#url-local-url-flag" id="ref-for-url-local-url-flag">local url flag</a> set, ignore everything but the URL’s fragment, and resolve that fragment against the current document that relative URLs are resolved against. This reference must always be treated as same-document (rather than cross-document).

When [serializing](https://www.w3.org/TR/cssom-1/#serializing-css-values) a <a href="#funcdef-url" id="ref-for-funcdef-url⑥" class="css">url()</a> with the <a href="#url-local-url-flag" id="ref-for-url-local-url-flag①">local url flag</a> set, it must serialize as just the fragment.

What “browser eccentricities”?

Theoretically, browsers should re-resolve any relative URLs, including fragment-only URLs, whenever the document’s base URL changes (such as through mutation of the `base` element, or calling `pushState()`). In many cases they don’t, however, and so without special handling, fragment-only URLs will suddenly become cross-document references (pointing at the previous base URL) and break in many of the places they’re used.

Since fragment-only URLs express a clear semantic of wanting to refer to the current document regardless of what its current URL is, this hack preserves the expected behavior at least in these cases.

#### <span class="secno">3.4.2. </span><span class="content"> Empty URLs</span><a href="#url-empty" class="self-link"></a>

If the value of the <a href="#funcdef-url" id="ref-for-funcdef-url⑦" class="css">url()</a> is the empty string (like <span class="css">url("")</span> or <span id="ref-for-funcdef-url⑧" class="css">url()</span>), the url must resolve to an invalid resource (similar to what the url <span class="css">about:invalid</span> does).

Note: This matches the behavior of empty urls for embedded resources elsewhere in the web platform, and avoids excess traffic re-requesting the stylesheet or host document due to editting mistakes leaving the <a href="#funcdef-url" id="ref-for-funcdef-url⑨" class="css">url()</a> value empty, which are almost certain to be invalid resources for whatever the <span id="ref-for-funcdef-url①⓪" class="css">url()</span> shows up in. Linking on the web platform *does* allow empty urls, so if/when CSS gains some functionality to control hyperlinks, this restriction can be relaxed in those contexts.

#### <span class="secno">3.4.3. </span><span class="content"> URL Modifiers</span><a href="#url-modifiers" class="self-link"></a>

The <a href="#funcdef-url" id="ref-for-funcdef-url①①" class="css">url()</a> function supports specifying additional &lt;url-modifier&gt;s, which change the meaning or the interpretation of the URL somehow. A <a href="#typedef-url-modifier" id="ref-for-typedef-url-modifier②" class="production css">&lt;url-modifier&gt;</a> is either an <a href="#typedef-ident" id="ref-for-typedef-ident" class="production css">&lt;ident&gt;</a> or a <a href="#functional-notation" id="ref-for-functional-notation①">functional notation</a>.

This specification does not define any <a href="#typedef-url-modifier" id="ref-for-typedef-url-modifier③" class="production css">&lt;url-modifier&gt;</a>s, but other specs may do so.

Note: A <a href="#url-value" id="ref-for-url-value⑦" class="production css">&lt;url&gt;</a> that is either unquoted or not wrapped in <a href="#funcdef-url" id="ref-for-funcdef-url①②" class="css">url()</a> notation cannot accept any <a href="#typedef-url-modifier" id="ref-for-typedef-url-modifier④" class="production css">&lt;url-modifier&gt;</a>s.

<span class="secno">4. </span><span class="content"> Numeric Data Types</span><a href="#numeric-types" class="self-link"></a>
-----------------------------------------------------------------------------------------------------------------------------

The numeric data types include <a href="#integer-value" id="ref-for-integer-value③" class="production css">&lt;integer&gt;</a>, <a href="#number-value" id="ref-for-number-value" class="production css">&lt;number&gt;</a>, <a href="#percentage-value" id="ref-for-percentage-value①" class="production css">&lt;percentage&gt;</a>, and various <a href="#dimension" id="ref-for-dimension">dimensions</a> including <a href="#length-value" id="ref-for-length-value②" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a>, <a href="#angle-value" id="ref-for-angle-value" class="production css" title="Expands to: turn | rad | grad | deg">&lt;angle&gt;</a>, <a href="#time-value" id="ref-for-time-value" class="production css" title="Expands to: s | ms">&lt;time&gt;</a>, <a href="#frequency-value" id="ref-for-frequency-value" class="production css" title="Expands to: hz | khz">&lt;frequency&gt;</a>, and <a href="#resolution-value" id="ref-for-resolution-value" class="production css" title="Expands to: dppx | dpcm | dpi">&lt;resolution&gt;</a>.

Note: While general-purpose <a href="#dimension" id="ref-for-dimension①">dimensions</a> are defined here, some other modules define additional data types (e.g. [\[css-grid-1\]](#biblio-css-grid-1) introduces <a href="https://www.w3.org/TR/css-grid-1/#valdef-flex-fr" id="ref-for-valdef-flex-fr" class="css">fr</a> units) whose usage is more localized.

### <span class="secno">4.1. </span><span class="content"> Range Restrictions and Range Definition Notation</span><a href="#numeric-ranges" class="self-link"></a>

Properties can restrict numeric values to some range. If the value is outside the allowed range, then unless otherwise specified, the declaration is invalid and must be [ignored](https://www.w3.org/TR/CSS21/conform.html#ignore). Range restrictions can be annotated in the numeric type notation using CSS bracketed range notation—`[min,max]`—within the angle brackets, after the identifying keyword, indicating a closed range between (and including) min and max. For example, <a href="#integer-value" id="ref-for-integer-value④" class="production css">&lt;integer [0, 10]&gt;</a> indicates an integer between <span class="css">0</span> and <span class="css">10</span>, inclusive.

Note: CSS values generally do not allow open ranges; thus only square-bracket notation is used.

CSS theoretically supports infinite precision and infinite ranges for all value types; however in reality implementations have finite capacity. UAs should support reasonably useful ranges and precisions. Range extremes that are ideally unlimited are indicated using ∞ or −∞ as appropriate.

If no range is indicated, either by using the <a href="#css-bracketed-range-notation" id="ref-for-css-bracketed-range-notation">bracketed range notation</a> or in the property description, then `[−∞,∞]` is assumed.

Note: At the time of writing, the <a href="#css-bracketed-range-notation" id="ref-for-css-bracketed-range-notation①">bracketed range notation</a> is new; thus in most CSS specifications any range limitations are described only in prose. (For example, “Negative values are not allowed” or “Negative values are invalid” indicate a `[0,∞]` range.) This does not make them any less binding.

### <span class="secno">4.2. </span><span class="content"> Integers: the <a href="#integer-value" id="ref-for-integer-value⑤" class="production css">&lt;integer&gt;</a> type</span><a href="#integers" class="self-link"></a>

Integer values are denoted by &lt;integer&gt;.

When written literally, an integer is one or more decimal digits <span class="css">0</span> through <span class="css">9</span> and corresponds to a subset of the <a href="https://www.w3.org/TR/css-syntax-3/#typedef-number-token" id="ref-for-typedef-number-token" class="production css">&lt;number-token&gt;</a> production in the CSS Syntax Module [\[CSS3SYN\]](#biblio-css3syn). The first digit of an integer may be immediately preceded by <span class="css">-</span> or <span class="css">+</span> to indicate the integer’s sign.

### <span class="secno">4.3. </span><span class="content"> Real Numbers: the <a href="#number-value" id="ref-for-number-value①" class="production css">&lt;number&gt;</a> type</span><a href="#numbers" class="self-link"></a>

Number values are denoted by &lt;number&gt;, and represent real numbers, possibly with a fractional component.

When written literally, a number is either an <a href="#integer" id="ref-for-integer">integer</a>, or zero or more decimal digits followed by a dot (.) followed by one or more decimal digits and optionally an exponent composed of "e" or "E" and an integer. It corresponds to the <a href="https://www.w3.org/TR/css-syntax-3/#typedef-number-token" id="ref-for-typedef-number-token①" class="production css">&lt;number-token&gt;</a> production in the [CSS Syntax Module](https://www.w3.org/TR/css-syntax/) [\[CSS3SYN\]](#biblio-css3syn). As with integers, the first character of a number may be immediately preceded by <span class="css">-</span> or <a href="https://www.w3.org/TR/selectors4/#selectordef-adjacent" id="ref-for-selectordef-adjacent①" class="css">+</a> to indicate the number’s sign.

### <span class="secno">4.4. </span><span class="content"> Numbers with Units: <a href="#dimension" id="ref-for-dimension②">dimension</a> values</span><a href="#dimensions" class="self-link"></a>

The general term dimension refers to a number with a unit attached to it; and is denoted by &lt;dimension&gt;.

When written literally, a <a href="#dimension" id="ref-for-dimension③">dimension</a> is a <a href="#number" id="ref-for-number">number</a> immediately followed by a unit identifier, which is an <a href="#css-identifier" id="ref-for-css-identifier②">identifier</a>. It corresponds to the <a href="https://www.w3.org/TR/css-syntax-3/#typedef-dimension-token" id="ref-for-typedef-dimension-token①" class="production css">&lt;dimension-token&gt;</a> production in the [CSS Syntax Module](https://www.w3.org/TR/css-syntax/) [\[CSS3SYN\]](#biblio-css3syn). Like keywords, unit identifiers are <a href="https://infra.spec.whatwg.org/#ascii-case-insensitive" id="ref-for-ascii-case-insensitive②">ASCII case-insensitive</a>.

CSS uses <a href="#typedef-dimension" id="ref-for-typedef-dimension" class="production css">&lt;dimension&gt;</a>s to specify distances (<a href="#length-value" id="ref-for-length-value③" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a>), durations (<a href="#time-value" id="ref-for-time-value①" class="production css" title="Expands to: s | ms">&lt;time&gt;</a>), frequencies (<a href="#frequency-value" id="ref-for-frequency-value①" class="production css" title="Expands to: hz | khz">&lt;frequency&gt;</a>), resolutions (<a href="#resolution-value" id="ref-for-resolution-value①" class="production css" title="Expands to: dppx | dpcm | dpi">&lt;resolution&gt;</a>), and other quantities.

#### <span class="secno">4.4.1. </span><span class="content"> Compatible Units</span><a href="#compat" class="self-link"></a>

When [serializing](https://www.w3.org/TR/cssom-1/#serializing-css-values) <a href="https://www.w3.org/TR/css-cascade-4/#computed-value" id="ref-for-computed-value">computed values</a> [\[CSSOM\]](#biblio-cssom), compatible units (those related by a static multiplicative factor, like the 96:1 factor between <a href="#px" id="ref-for-px" class="css">px</a> and <a href="#in" id="ref-for-in" class="css">in</a>, or the the computed <a href="https://www.w3.org/TR/css-fonts-3/#propdef-font-size" id="ref-for-propdef-font-size" class="property">font-size</a> factor between <a href="#em" id="ref-for-em" class="css">em</a> and <span id="ref-for-px①" class="css">px</span>) are converted into a single canonical unit. Each group of compatible units defines which among them is the <a href="#canonical-unit" id="ref-for-canonical-unit">canonical unit</a> that will be used for serialization.

When serializing [resolved values](https://www.w3.org/TR/cssom-1/#resolved-values) that are <a href="https://www.w3.org/TR/css-cascade-4/#used-value" id="ref-for-used-value">used values</a>, all value types (percentages, numbers, keywords, etc.) that represent lengths are considered <a href="#compatible-units" id="ref-for-compatible-units">compatible</a> with lengths. Likewise any future API that returns <span id="ref-for-used-value①">used values</span> must consider any values represent distances/durations/frequencies/etc. as <span id="ref-for-compatible-units①">compatible</span> with the relevant class of <a href="#dimension" id="ref-for-dimension④">dimensions</a>, and canonicalize accordingly.

### <span class="secno">4.5. </span><span class="content"> Percentages: the <a href="#percentage-value" id="ref-for-percentage-value②" class="production css">&lt;percentage&gt;</a> type</span><a href="#percentages" class="self-link"></a>

Percentage values are denoted by &lt;percentage&gt;, and indicates a value that is some fraction of another reference value.

When written literally, a percentage<a href="#percentage" class="self-link"></a> consists of a <a href="#number" id="ref-for-number①">number</a> immediately followed by a percent sign <a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value" id="ref-for-valdef-type-or-value" class="css">%</a>. It corresponds to the <a href="https://www.w3.org/TR/css-syntax-3/#typedef-percentage-token" id="ref-for-typedef-percentage-token" class="production css">&lt;percentage-token&gt;</a> production in the [CSS Syntax Module](https://www.w3.org/TR/css-syntax/) [\[CSS3SYN\]](#biblio-css3syn).

Percentage values are always relative to another quantity, for example a length. Each property that allows percentages also defines the quantity to which the percentage refers. This quantity can be a value of another property for the same element, the value of a property for an ancestor element, a measurement of the formatting context (e.g., the width of a <a href="https://www.w3.org/TR/css-display-3/#containing-block" id="ref-for-containing-block">containing block</a>), or something else.

### <span class="secno">4.6. </span><span class="content"> Mixing Percentages and Dimensions</span><a href="#mixed-percentages" class="self-link"></a>

In cases where a <a href="#percentage-value" id="ref-for-percentage-value③" class="production css">&lt;percentage&gt;</a> can represent the same quantity as a <a href="#dimension" id="ref-for-dimension⑤">dimension</a> or <a href="#number" id="ref-for-number②">number</a> in the same <a href="https://drafts.csswg.org/css-syntax-3/#component-value" id="ref-for-component-value①">component value</a> position, and can therefore be combined with them in a <a href="#funcdef-calc" id="ref-for-funcdef-calc" class="css">calc()</a> expression, the following convenience notations may be used in the property grammar:

&lt;length-percentage&gt;   
Equivalent to `[ <length> | <percentage> ]`, where the <a href="#percentage-value" id="ref-for-percentage-value⑤" class="production css">&lt;percentage&gt;</a> will resolve to a <a href="#length-value" id="ref-for-length-value⑤" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a>.

&lt;frequency-percentage&gt;<a href="#typedef-frequency-percentage" class="self-link"></a>   
Equivalent to `[ <frequency> | <percentage> ]`, where the <a href="#percentage-value" id="ref-for-percentage-value⑦" class="production css">&lt;percentage&gt;</a> will resolve to a <a href="#frequency-value" id="ref-for-frequency-value③" class="production css" title="Expands to: hz | khz">&lt;frequency&gt;</a>.

&lt;angle-percentage&gt;<a href="#typedef-angle-percentage" class="self-link"></a>   
Equivalent to `[ <angle> | <percentage> ]`, where the <a href="#percentage-value" id="ref-for-percentage-value⑨" class="production css">&lt;percentage&gt;</a> will resolve to an <a href="#angle-value" id="ref-for-angle-value②" class="production css" title="Expands to: turn | rad | grad | deg">&lt;angle&gt;</a>.

&lt;time-percentage&gt;<a href="#typedef-time-percentage" class="self-link"></a>   
Equivalent to `[ <time> | <percentage> ]`, where the <a href="#percentage-value" id="ref-for-percentage-value①①" class="production css">&lt;percentage&gt;</a> will resolve to a <a href="#time-value" id="ref-for-time-value③" class="production css" title="Expands to: s | ms">&lt;time&gt;</a>.

&lt;number-percentage&gt;<a href="#typedef-number-percentage" class="self-link"></a>   
Equivalent to `[ <number> | <percentage> ]`, where the <a href="#percentage-value" id="ref-for-percentage-value①③" class="production css">&lt;percentage&gt;</a> will resolve to a <a href="#number-value" id="ref-for-number-value③" class="production css">&lt;number&gt;</a>.

<a href="#example-ac6b1005" class="self-link"></a> For example, the <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width" class="property">width</a> property can accept a <a href="#length-value" id="ref-for-length-value⑥" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a> or a <a href="#percentage-value" id="ref-for-percentage-value①④" class="production css">&lt;percentage&gt;</a>, both representing a measure of distance. This means that <span id="ref-for-propdef-width①" class="css">width: calc(500px + 50%);</span> is allowed—both values are converted to absolute lengths and added. If the containing block is <span class="css">1000px</span> wide, then <span id="ref-for-propdef-width②" class="css">width: 50%;</span> is equivalent to <span id="ref-for-propdef-width③" class="css">width: 500px</span>, and <span id="ref-for-propdef-width④" class="css">width: calc(50% + 500px)</span> thus ends up equivalent to <span id="ref-for-propdef-width⑤" class="css">width: calc(500px + 500px)</span> or <span id="ref-for-propdef-width⑥" class="css">width: 1000px</span>.

On the other hand, the second and third arguments of the <a href="https://www.w3.org/TR/css-color-4/#funcdef-hsl" id="ref-for-funcdef-hsl" class="css">hsl()</a> function can only be expressed as <a href="#percentage-value" id="ref-for-percentage-value①⑤" class="production css">&lt;percentage&gt;</a>s. Although <a href="#funcdef-calc" id="ref-for-funcdef-calc①" class="css">calc()</a> productions are allowed in their place, they can only combine percentages with themselves, as in <span class="css">calc(10% + 20%)</span>.

Note: Specifications should never alternate <a href="#percentage-value" id="ref-for-percentage-value①⑥" class="production css">&lt;percentage&gt;</a> in place of a dimension in a grammar unless they are <a href="#compatible-units" id="ref-for-compatible-units②">compatible</a>.

<span class="secno">5. </span><span class="content"> Distance Units: the <a href="#length-value" id="ref-for-length-value⑦" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a> type</span><a href="#lengths" class="self-link"></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Lengths refer to distance measurements and are denoted by &lt;length&gt; in the property definitions. A length is a <a href="#dimension" id="ref-for-dimension⑥">dimension</a>.

For zero lengths the unit identifier is optional (i.e. can be syntactically represented as the <a href="#number-value" id="ref-for-number-value④" class="production css">&lt;number&gt;</a> <span class="css">0</span>). However, if a <span class="css">0</span> could be parsed as either a <span id="ref-for-number-value⑤" class="production">&lt;number&gt;</span> or a <a href="#length-value" id="ref-for-length-value⑧" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a> in a property (such as <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-line-height" id="ref-for-propdef-line-height" class="property">line-height</a>), it must parse as a <span id="ref-for-number-value⑥" class="production">&lt;number&gt;</span>.

Properties may restrict the length value to some range. If the value is outside the allowed range, the declaration is invalid and must be [ignored](https://www.w3.org/TR/CSS21/conform.html#ignore).

While some properties allow negative length values, this may complicate the formatting and there may be implementation-specific limits. If a negative length value is allowed but cannot be supported, it must be converted to the nearest value that can be supported.

In cases where the <a href="https://www.w3.org/TR/css-cascade-4/#used-value" id="ref-for-used-value②">used</a> length cannot be supported, user agents must approximate it in the <a href="https://www.w3.org/TR/css-cascade-4/#actual-value" id="ref-for-actual-value">actual</a> value.

There are two types of length units: <a href="#relative-length" id="ref-for-relative-length">relative</a> and <a href="#absolute-length" id="ref-for-absolute-length">absolute</a>.

### <span class="secno">5.1. </span><span class="content"> Relative Lengths</span><a href="#relative-lengths" class="self-link"></a>

Relative length units specify a length relative to another length. Style sheets that use relative units can more easily scale from one output environment to another.

The relative units are:

<table><caption>Informative Summary of Relative Units</caption><thead><tr class="header"><th>unit</th><th>relative to</th></tr></thead><tbody><tr class="odd"><td><a href="#em" id="ref-for-em①" class="css">em</a></td><td>font size of the element</td></tr><tr class="even"><td><a href="#ex" id="ref-for-ex" class="css">ex</a></td><td>x-height of the element’s font</td></tr><tr class="odd"><td><a href="#ch" id="ref-for-ch" class="css">ch</a></td><td>width of the "0" (ZERO, U+0030) glyph in the element’s font</td></tr><tr class="even"><td><a href="#rem" id="ref-for-rem" class="css">rem</a></td><td>font size of the root element</td></tr><tr class="odd"><td><a href="#vw" id="ref-for-vw" class="css">vw</a></td><td>1% of viewport’s width</td></tr><tr class="even"><td><a href="#vh" id="ref-for-vh" class="css">vh</a></td><td>1% of viewport’s height</td></tr><tr class="odd"><td><a href="#vmin" id="ref-for-vmin" class="css">vmin</a></td><td>1% of viewport’s smaller dimension</td></tr><tr class="even"><td><a href="#vmax" id="ref-for-vmax" class="css">vmax</a></td><td>1% of viewport’s larger dimension</td></tr></tbody></table>

Child elements do not inherit the relative values as specified for their parent; they inherit the <a href="https://www.w3.org/TR/css-cascade-4/#computed-value" id="ref-for-computed-value①">computed values</a>.

#### <span class="secno">5.1.1. </span><span class="content"> Font-relative Lengths: the <a href="#em" id="ref-for-em②" class="css">em</a>, <a href="#ex" id="ref-for-ex①" class="css">ex</a>, <a href="#ch" id="ref-for-ch①" class="css">ch</a>, <a href="#rem" id="ref-for-rem①" class="css">rem</a> units</span><a href="#font-relative-lengths" class="self-link"></a>

The font-relative lengths refer to the font metrics of the element on which they are used—or, in the case of <a href="#rem" id="ref-for-rem②" class="css">rem</a>, the metrics of the root element).

em unit   
Equal to the computed value of the <a href="https://www.w3.org/TR/css-fonts-3/#propdef-font-size" id="ref-for-propdef-font-size①" class="property">font-size</a> property of the element on which it is used.

<a href="#example-83bc8a19" class="self-link"></a> The rule:
    h1 { line-height: 1.2em }

means that the line height of `h1` elements will be 20% greater than the font size of `h1` element. On the other hand:

    h1 { font-size: 1.2em }

means that the font size of `h1` elements will be 20% greater than the computed font size inherited by `h1` elements.

ex unit   
Equal to the used x-height of the [first available font](https://www.w3.org/TR/css3-fonts/#first-available-font) [\[CSS3-FONTS\]](#biblio-css3-fonts). The x-height is so called because it is often equal to the height of the lowercase "x". However, an <a href="#ex" id="ref-for-ex②" class="css">ex</a> is defined even for fonts that do not contain an "x". The x-height of a font can be found in different ways. Some fonts contain reliable metrics for the x-height. If reliable font metrics are not available, UAs may determine the x-height from the height of a lowercase glyph. One possible heuristic is to look at how far the glyph for the lowercase "o" extends below the baseline, and subtract that value from the top of its bounding box. In the cases where it is impossible or impractical to determine the x-height, a value of 0.5em must be assumed.

ch unit   
Equal to the used <a href="#length-advance-measure" id="ref-for-length-advance-measure">advance measure</a> of the "0" (ZERO, U+0030) glyph found in the font used to render it. (The advance measure of a glyph is its advance width or height, whichever is in the inline axis of the element.)

Note: The advance measure of a glyph depends on writing-mode and text-orientation as well as font settings, text-transform, and any other properties that affect glyph selection or orientation.

In the cases where it is impossible or impractical to determine the measure of the “0” glyph, it must be assumed to be 0.5em wide by 1em tall. Thus, the <a href="#ch" id="ref-for-ch②" class="css">ch</a> unit falls back to <span class="css">0.5em</span> in the general case, and to <span class="css">1em</span> when it would be typeset upright (i.e. <a href="https://www.w3.org/TR/css-writing-modes-4/#propdef-writing-mode" id="ref-for-propdef-writing-mode" class="property">writing-mode</a> is <a href="https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-vertical-rl" id="ref-for-valdef-writing-mode-vertical-rl" class="css">vertical-rl</a> or <a href="https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-vertical-lr" id="ref-for-valdef-writing-mode-vertical-lr" class="css">vertical-lr</a> and <a href="https://www.w3.org/TR/css-writing-modes-4/#propdef-text-orientation" id="ref-for-propdef-text-orientation" class="property">text-orientation</a> is <a href="https://www.w3.org/TR/css-writing-modes-4/#valdef-text-orientation-upright" id="ref-for-valdef-text-orientation-upright" class="css">upright</a>).

rem unit   
Equal to the computed value of <a href="https://www.w3.org/TR/css-fonts-3/#propdef-font-size" id="ref-for-propdef-font-size②" class="property">font-size</a> on the root element.

If used in the <a href="https://www.w3.org/TR/css-fonts-3/#propdef-font-size" id="ref-for-propdef-font-size③" class="property">font-size</a> property of the root element, or in a document with no root element, <span class="css">1rem</span> is equal to the initial value of the <span id="ref-for-propdef-font-size④" class="property">font-size</span> property.

When used in the value of the <a href="https://www.w3.org/TR/css-fonts-3/#propdef-font-size" id="ref-for-propdef-font-size⑤" class="property">font-size</a> property on the element they refer to, these units refer to the computed font metrics of the parent element (or the computed font metrics corresponding to the initial values of the <a href="https://www.w3.org/TR/css-fonts-3/#propdef-font" id="ref-for-propdef-font" class="property">font</a> property, if the element has no parent). When used outside the context of an element (such as in <a href="https://www.w3.org/TR/mediaqueries-4/#media-query" id="ref-for-media-query">media queries</a>), these units refer to the computed font metrics corresponding to the initial values of the <span id="ref-for-propdef-font①" class="property">font</span> property.

#### <span class="secno">5.1.2. </span><span class="content"> Viewport-percentage Lengths: the <a href="#vw" id="ref-for-vw①" class="css">vw</a>, <a href="#vh" id="ref-for-vh①" class="css">vh</a>, <a href="#vmin" id="ref-for-vmin①" class="css">vmin</a>, <a href="#vmax" id="ref-for-vmax①" class="css">vmax</a> units</span><a href="#viewport-relative-lengths" class="self-link"></a>

The viewport-percentage lengths<a href="#viewport-percentage-lengths" class="self-link"></a> are relative to the size of the [initial containing block](https://www.w3.org/TR/CSS21/visudet.html#containing-block-details). When the height or width of the initial containing block is changed, they are scaled accordingly. However, any scrollbars are assumed not to exist.

For paged media, the exact definition of the viewport-percentage lengths is deferred to [\[CSS3PAGE\]](#biblio-css3page).

vw unit   
Equal to 1% of the width of the initial containing block.

<a href="#example-6068ee5d" class="self-link"></a> In the example below, if the width of the viewport is 200mm, the font size of `h1` elements will be 16mm (i.e. (8×200mm)/100).
    h1 { font-size: 8vw }

vh unit   
Equal to 1% of the height of the initial containing block.

vmin unit   
Equal to the smaller of <a href="#vw" id="ref-for-vw②" class="css">vw</a> or <a href="#vh" id="ref-for-vh②" class="css">vh</a>.

vmax unit   
Equal to the larger of <a href="#vw" id="ref-for-vw③" class="css">vw</a> or <a href="#vh" id="ref-for-vh③" class="css">vh</a>.

### <span class="secno">5.2. </span><span class="content"> Absolute Lengths: the <a href="#cm" id="ref-for-cm" class="css">cm</a>, <a href="#mm" id="ref-for-mm" class="css">mm</a>, <a href="#Q" id="ref-for-Q" class="css">Q</a>, <a href="#in" id="ref-for-in①" class="css">in</a>, <a href="#pt" id="ref-for-pt" class="css">pt</a>, <a href="#pc" id="ref-for-pc" class="css">pc</a>, <a href="#px" id="ref-for-px②" class="css">px</a> units</span><a href="#absolute-lengths" class="self-link"></a>

The absolute length units are fixed in relation to each other and <a href="#anchor-unit" id="ref-for-anchor-unit">anchored</a> to some physical measurement. They are mainly useful when the output environment is known. The absolute units consist of the physical units (<a href="#in" id="ref-for-in②" class="css">in</a>, <a href="#cm" id="ref-for-cm①" class="css">cm</a>, <a href="#mm" id="ref-for-mm①" class="css">mm</a>, <a href="#pt" id="ref-for-pt①" class="css">pt</a>, <a href="#pc" id="ref-for-pc①" class="css">pc</a>, <a href="#Q" id="ref-for-Q①" class="css">Q</a>) and the visual angle unit<a href="#visual-angle-unit" class="self-link"></a> (<a href="#px" id="ref-for-px③" class="css">px</a>):

<table><thead><tr class="header"><th>unit</th><th>name</th><th>equivalence</th></tr></thead><tbody><tr class="odd"><td>cm</td><td>centimeters</td><td>1cm = 96px/2.54</td></tr><tr class="even"><td>mm</td><td>millimeters</td><td>1mm = 1/10th of 1cm</td></tr><tr class="odd"><td>Q</td><td>quarter-millimeters</td><td>1Q = 1/40th of 1cm</td></tr><tr class="even"><td>in</td><td>inches</td><td>1in = 2.54cm = 96px</td></tr><tr class="odd"><td>pc</td><td>picas</td><td>1pc = 1/6th of 1in</td></tr><tr class="even"><td>pt</td><td>points</td><td>1pt = 1/72th of 1in</td></tr><tr class="odd"><td>px</td><td>pixels</td><td>1px = 1/96th of 1in</td></tr></tbody></table>

<a href="#example-afc1f57e" class="self-link"></a>

    h1 { margin: 0.5in }      /* inches  */
    h2 { line-height: 3cm }   /* centimeters */
    h3 { word-spacing: 4mm }  /* millimeters */
    h3 { letter-spacing: 1Q } /* quarter-millimeters */
    h4 { font-size: 12pt }    /* points */
    h4 { font-size: 1pc }     /* picas */
    p  { font-size: 12px }    /* px */

All of the absolute length units are <a href="#compatible-units" id="ref-for-compatible-units③">compatible</a>, and <a href="#px" id="ref-for-px④" class="css">px</a> is their <a href="#canonical-unit" id="ref-for-canonical-unit①">canonical unit</a>.

For a CSS device, these dimensions are anchored either

1.  by relating the <a href="#physical-units" id="ref-for-physical-units">physical units</a> to their physical measurements, or
2.  by relating the <a href="#px" id="ref-for-px⑤" class="css">pixel unit</a> to the <a href="#reference-pixel" id="ref-for-reference-pixel">reference pixel</a>.

For print media at typical viewing distances, the anchor unit should be one of the standard physical units (inches, centimeters, etc). For screen media (including high-resolution devices), low-resolution devices, and devices with unusual viewing distances, it is recommended instead that the anchor unit be the pixel unit. For such devices it is recommended that the pixel unit refer to the whole number of device pixels that best approximates the reference pixel.

Note: If the anchor unit is the pixel unit, the physical units might not match their physical measurements. Alternatively if the anchor unit is a physical unit, the pixel unit might not map to a whole number of device pixels.

Note: This definition of the pixel unit and the physical units differs from previous versions of CSS. In particular, in previous versions of CSS the pixel unit and the physical units were not related by a fixed ratio: the physical units were always tied to their physical measurements while the pixel unit would vary to most closely match the reference pixel. (This change was made because too much existing content relies on the assumption of 96dpi, and breaking that assumption broke the content.)

Note: Values are case-insensitive and serialize as lower case, for example 1Q serializes as 1q.

The reference pixel is the visual angle of one pixel on a device with a pixel density of 96dpi and a distance from the reader of an arm’s length. For a nominal arm’s length of 28 inches, the visual angle is therefore about 0.0213 degrees. For reading at arm’s length, 1px thus corresponds to about 0.26 mm (1/96 inch).

The image below illustrates the effect of viewing distance on the size of a reference pixel: a reading distance of 71 cm (28 inches) results in a reference pixel of 0.26 mm, while a reading distance of 3.5 m (12 feet) results in a reference pixel of 1.3 mm.

![Showing that pixels must become larger if the viewing distance increases](images/pixel1.png)

This second image illustrates the effect of a device’s resolution on the pixel unit: an area of 1px by 1px is covered by a single dot in a low-resolution device (e.g. a typical computer display), while the same area is covered by 16 dots in a higher resolution device (such as a printer).

![Showing that more device pixels (dots) are needed to cover a 1px by 1px area on a high-resolution device than on a lower-resolution one (of the same approximate viewing distance)](images/pixel2.png)

<span class="secno">6. </span><span class="content"> Other Quantities</span><a href="#other-units" class="self-link"></a>
-------------------------------------------------------------------------------------------------------------------------

### <span class="secno">6.1. </span><span class="content"> Angle Units: the <a href="#angle-value" id="ref-for-angle-value③" class="production css" title="Expands to: turn | rad | grad | deg">&lt;angle&gt;</a> type and <a href="#deg" id="ref-for-deg" class="css">deg</a>, <a href="#grad" id="ref-for-grad" class="css">grad</a>, <a href="#rad" id="ref-for-rad" class="css">rad</a>, <a href="#turn" id="ref-for-turn" class="css">turn</a> units</span><a href="#angles" class="self-link"></a>

Angle values are <a href="#typedef-dimension" id="ref-for-typedef-dimension①" class="production css">&lt;dimension&gt;</a>s denoted by &lt;angle&gt;. The angle unit identifiers are:

deg   
Degrees. There are 360 degrees in a full circle.

grad   
Gradians, also known as "gons" or "grades". There are 400 gradians in a full circle.

rad   
Radians. There are 2π radians in a full circle.

turn   
Turns. There is 1 turn in a full circle.

For example, a right angle is <span class="css">90deg</span> or <span class="css">100grad</span> or <span class="css">0.25turn</span> or approximately <span class="css">1.57rad</span>.

All <a href="#angle-value" id="ref-for-angle-value④" class="production css" title="Expands to: turn | rad | grad | deg">&lt;angle&gt;</a> units are <a href="#compatible-units" id="ref-for-compatible-units④">compatible</a>, and <a href="#deg" id="ref-for-deg①" class="css">deg</a> is their <a href="#canonical-unit" id="ref-for-canonical-unit②">canonical unit</a>.

By convention, when an angle denotes a direction in CSS, it is typically interpreted as a bearing angle<a href="#bearing-angle" class="self-link"></a>, where 0deg is "up" or "north" on the screen, and larger angles are more clockwise (so 90deg is "right" or "east").

For example, in the <a href="https://drafts.csswg.org/css-images-3/#funcdef-linear-gradient" id="ref-for-funcdef-linear-gradient" class="css">linear-gradient()</a> function, the <a href="#angle-value" id="ref-for-angle-value⑤" class="production css" title="Expands to: turn | rad | grad | deg">&lt;angle&gt;</a> that determines the direction of the gradient is interpreted as a bearing angle.

Note: For legacy reasons, some uses of <a href="#angle-value" id="ref-for-angle-value⑥" class="production css" title="Expands to: turn | rad | grad | deg">&lt;angle&gt;</a> allow a bare <span class="css">0</span> to mean <span class="css">0deg</span>. This is not true in general, however, and will not occur in future uses of the <span id="ref-for-angle-value⑦" class="production" title="Expands to: turn | rad | grad | deg">&lt;angle&gt;</span> type.

### <span class="secno">6.2. </span><span class="content"> Duration Units: the <a href="#time-value" id="ref-for-time-value④" class="production css" title="Expands to: s | ms">&lt;time&gt;</a> type and <a href="#s" id="ref-for-s" class="css">s</a>, <a href="#ms" id="ref-for-ms" class="css">ms</a> units</span><a href="#time" class="self-link"></a>

Time values are <a href="#dimension" id="ref-for-dimension⑦">dimensions</a> denoted by &lt;time&gt;. The time unit identifiers are:

s   
Seconds.

ms   
Milliseconds. There are 1000 milliseconds in a second.

All <a href="#time-value" id="ref-for-time-value⑤" class="production css" title="Expands to: s | ms">&lt;time&gt;</a> units are <a href="#compatible-units" id="ref-for-compatible-units⑤">compatible</a>, and <a href="#s" id="ref-for-s①" class="css">s</a> is their <a href="#canonical-unit" id="ref-for-canonical-unit③">canonical unit</a>.

Properties may restrict the time value to some range. If the value is outside the allowed range, the declaration is invalid and must be [ignored](https://www.w3.org/TR/CSS21/conform.html#ignore).

### <span class="secno">6.3. </span><span class="content"> Frequency Units: the <a href="#frequency-value" id="ref-for-frequency-value④" class="production css" title="Expands to: hz | khz">&lt;frequency&gt;</a> type and <a href="#Hz" id="ref-for-Hz" class="css">Hz</a>, <a href="#kHz" id="ref-for-kHz" class="css">kHz</a> units</span><a href="#frequency" class="self-link"></a>

Frequency values are <a href="#dimension" id="ref-for-dimension⑧">dimensions</a> denoted by &lt;frequency&gt;. The frequency unit identifiers are:

Hz   
Hertz. It represents the number of occurrences per second.

kHz   
KiloHertz. A kiloHertz is 1000 Hertz.

For example, when representing sound pitches, 200Hz (or 200hz) is a bass sound, and 6kHz (or 6khz) is a treble sound.

All <a href="#frequency-value" id="ref-for-frequency-value⑤" class="production css" title="Expands to: hz | khz">&lt;frequency&gt;</a> units are <a href="#compatible-units" id="ref-for-compatible-units⑥">compatible</a>, and <a href="#Hz" id="ref-for-Hz①" class="css">hz</a> is their <a href="#canonical-unit" id="ref-for-canonical-unit④">canonical unit</a>.

Note: Values are case-insensitive and serialize as lower case, for example 1Hz serializes as 1hz.

### <span class="secno">6.4. </span><span class="content"> Resolution Units: the <a href="#resolution-value" id="ref-for-resolution-value②" class="production css" title="Expands to: dppx | dpcm | dpi">&lt;resolution&gt;</a> type and <a href="#dpi" id="ref-for-dpi" class="css">dpi</a>, <a href="#dpcm" id="ref-for-dpcm" class="css">dpcm</a>, <a href="#dppx" id="ref-for-dppx" class="css">dppx</a> units</span><a href="#resolution" class="self-link"></a>

Resolution units are <a href="#dimension" id="ref-for-dimension⑨">dimensions</a> denoted by &lt;resolution&gt;. The resolution unit identifiers are:

dpi   
Dots per inch.

dpcm   
Dots per centimeter.

dppx   
Dots per <a href="#px" id="ref-for-px⑥" class="css">px</a> unit.

The <a href="#resolution-value" id="ref-for-resolution-value③" class="production css" title="Expands to: dppx | dpcm | dpi">&lt;resolution&gt;</a> unit represents the size of a single "dot" in a graphical representation by indicating how many of these dots fit in a CSS <a href="#in" id="ref-for-in③" class="css">in</a>, <a href="#cm" id="ref-for-cm②" class="css">cm</a>, or <a href="#px" id="ref-for-px⑦" class="css">px</a>. For uses, see e.g. the <span class="css">resolution</span> media query in [\[MEDIAQ\]](#biblio-mediaq) or the <a href="https://www.w3.org/TR/css4-images/#propdef-image-resolution" id="ref-for-propdef-image-resolution" class="property">image-resolution</a> property defined in [\[CSS3-IMAGES\]](#biblio-css3-images).

All <a href="#resolution-value" id="ref-for-resolution-value④" class="production css" title="Expands to: dppx | dpcm | dpi">&lt;resolution&gt;</a> units are <a href="#compatible-units" id="ref-for-compatible-units⑦">compatible</a>, and <a href="#dppx" id="ref-for-dppx①" class="css">dppx</a> is their <a href="#canonical-unit" id="ref-for-canonical-unit⑤">canonical unit</a>.

Note that due to the 1:96 fixed ratio of CSS <a href="#in" id="ref-for-in④" class="css">in</a> to CSS <a href="#px" id="ref-for-px⑧" class="css">px</a>, <span class="css">1dppx</span> is equivalent to <span class="css">96dpi</span>. This corresponds to the default resolution of images displayed in CSS: see <a href="https://www.w3.org/TR/css4-images/#propdef-image-resolution" id="ref-for-propdef-image-resolution①" class="property">image-resolution</a>.

<a href="#example-33e77fee" class="self-link"></a> The following @media rule uses Media Queries [\[MEDIAQ\]](#biblio-mediaq) to assign some special style rules to devices that use two or more device pixels per CSS <a href="#px" id="ref-for-px⑨" class="css">px</a> unit:

    @media (min-resolution: 2dppx) { ... }

<span class="secno">7. </span><span class="content"> Data Types Defined Elsewhere</span><a href="#defined-elsewhere" class="self-link"></a>
-------------------------------------------------------------------------------------------------------------------------------------------

Some data types are defined in their own modules. This example talks about some of the most common ones used across several specifications.

### <span class="secno">7.1. </span><span class="content"> Colors: the <a href="https://www.w3.org/TR/css3-color/#valuea-def-color" id="ref-for-valuea-def-color" class="production css" title="Expands to: indigo | gold | firebrick | indianred | yellow | darkolivegreen | darkseagreen | slategrey | darkslategrey | mediumvioletred | mediumorchid | transparent | chartreuse | mediumslateblue | black | springgreen | crimson | lightsalmon | brown | turquoise | olivedrab | cyan | silver | skyblue | gray | darkturquoise | goldenrod | darkgreen | darkviolet | darkgray | lightpink | teal | darkmagenta | lightgoldenrodyellow | lavender | yellowgreen | thistle | violet | navy | dimgrey | orchid | blue | ghostwhite | honeydew | cornflowerblue | darkblue | darkkhaki | mediumpurple | cornsilk | red | bisque | slategray | darkcyan | khaki | wheat | deepskyblue | rebeccapurple | darkred | steelblue | aliceblue | lightslategrey | gainsboro | mediumturquoise | floralwhite | coral | purple | lightgrey | lightcyan | darksalmon | beige | azure | lightsteelblue | oldlace | greenyellow | royalblue | lightseagreen | mistyrose | sienna | lightcoral | orangered | navajowhite | lime | palegreen | burlywood | seashell | mediumspringgreen | fuchsia | papayawhip | blanchedalmond | peru | aquamarine | white | darkslategray | tomato | ivory | dodgerblue | currentcolor | lemonchiffon | chocolate | orange | forestgreen | darkgrey | olive | mintcream | antiquewhite | darkorange | cadetblue | moccasin | limegreen | saddlebrown | grey | darkslateblue | lightskyblue | deeppink | plum | aqua | darkgoldenrod | maroon | sandybrown | magenta | tan | rosybrown | pink | lightblue | palevioletred | mediumseagreen | slateblue | dimgray | powderblue | seagreen | snow | mediumblue | midnightblue | paleturquoise | palegoldenrod | whitesmoke | darkorchid | salmon | lightslategray | lawngreen | lightgreen | lightgray | hotpink | lightyellow | lavenderblush | linen | mediumaquamarine | green | blueviolet | peachpuff">&lt;color&gt;</a> type</span><a href="#colors" class="self-link"></a>

The <a href="https://www.w3.org/TR/css3-color/#valuea-def-color" id="ref-for-valuea-def-color①" class="production css" title="Expands to: indigo | gold | firebrick | indianred | yellow | darkolivegreen | darkseagreen | slategrey | darkslategrey | mediumvioletred | mediumorchid | transparent | chartreuse | mediumslateblue | black | springgreen | crimson | lightsalmon | brown | turquoise | olivedrab | cyan | silver | skyblue | gray | darkturquoise | goldenrod | darkgreen | darkviolet | darkgray | lightpink | teal | darkmagenta | lightgoldenrodyellow | lavender | yellowgreen | thistle | violet | navy | dimgrey | orchid | blue | ghostwhite | honeydew | cornflowerblue | darkblue | darkkhaki | mediumpurple | cornsilk | red | bisque | slategray | darkcyan | khaki | wheat | deepskyblue | rebeccapurple | darkred | steelblue | aliceblue | lightslategrey | gainsboro | mediumturquoise | floralwhite | coral | purple | lightgrey | lightcyan | darksalmon | beige | azure | lightsteelblue | oldlace | greenyellow | royalblue | lightseagreen | mistyrose | sienna | lightcoral | orangered | navajowhite | lime | palegreen | burlywood | seashell | mediumspringgreen | fuchsia | papayawhip | blanchedalmond | peru | aquamarine | white | darkslategray | tomato | ivory | dodgerblue | currentcolor | lemonchiffon | chocolate | orange | forestgreen | darkgrey | olive | mintcream | antiquewhite | darkorange | cadetblue | moccasin | limegreen | saddlebrown | grey | darkslateblue | lightskyblue | deeppink | plum | aqua | darkgoldenrod | maroon | sandybrown | magenta | tan | rosybrown | pink | lightblue | palevioletred | mediumseagreen | slateblue | dimgray | powderblue | seagreen | snow | mediumblue | midnightblue | paleturquoise | palegoldenrod | whitesmoke | darkorchid | salmon | lightslategray | lawngreen | lightgreen | lightgray | hotpink | lightyellow | lavenderblush | linen | mediumaquamarine | green | blueviolet | peachpuff">&lt;color&gt;</a> data type is defined in [\[CSS3COLOR\]](#biblio-css3color). UAs that support CSS Color Level 3 or its successor must interpret <span id="ref-for-valuea-def-color②" class="production" title="Expands to: indigo | gold | firebrick | indianred | yellow | darkolivegreen | darkseagreen | slategrey | darkslategrey | mediumvioletred | mediumorchid | transparent | chartreuse | mediumslateblue | black | springgreen | crimson | lightsalmon | brown | turquoise | olivedrab | cyan | silver | skyblue | gray | darkturquoise | goldenrod | darkgreen | darkviolet | darkgray | lightpink | teal | darkmagenta | lightgoldenrodyellow | lavender | yellowgreen | thistle | violet | navy | dimgrey | orchid | blue | ghostwhite | honeydew | cornflowerblue | darkblue | darkkhaki | mediumpurple | cornsilk | red | bisque | slategray | darkcyan | khaki | wheat | deepskyblue | rebeccapurple | darkred | steelblue | aliceblue | lightslategrey | gainsboro | mediumturquoise | floralwhite | coral | purple | lightgrey | lightcyan | darksalmon | beige | azure | lightsteelblue | oldlace | greenyellow | royalblue | lightseagreen | mistyrose | sienna | lightcoral | orangered | navajowhite | lime | palegreen | burlywood | seashell | mediumspringgreen | fuchsia | papayawhip | blanchedalmond | peru | aquamarine | white | darkslategray | tomato | ivory | dodgerblue | currentcolor | lemonchiffon | chocolate | orange | forestgreen | darkgrey | olive | mintcream | antiquewhite | darkorange | cadetblue | moccasin | limegreen | saddlebrown | grey | darkslateblue | lightskyblue | deeppink | plum | aqua | darkgoldenrod | maroon | sandybrown | magenta | tan | rosybrown | pink | lightblue | palevioletred | mediumseagreen | slateblue | dimgray | powderblue | seagreen | snow | mediumblue | midnightblue | paleturquoise | palegoldenrod | whitesmoke | darkorchid | salmon | lightslategray | lawngreen | lightgreen | lightgray | hotpink | lightyellow | lavenderblush | linen | mediumaquamarine | green | blueviolet | peachpuff">&lt;color&gt;</span> as defined therein.

### <span class="secno">7.2. </span><span class="content"> Images: the <a href="https://www.w3.org/TR/css3-images/#image-type" id="ref-for-image-type" class="production css">&lt;image&gt;</a> type</span><a href="#images" class="self-link"></a>

The <a href="https://www.w3.org/TR/css3-images/#image-type" id="ref-for-image-type①" class="production css">&lt;image&gt;</a> data type is defined in [\[CSS3-IMAGES\]](#biblio-css3-images). UAs that support CSS Image Values Level 3 or its successor must interpret <span id="ref-for-image-type②" class="production">&lt;image&gt;</span> as defined therein. UAs that do not yet support CSS Images Level 3 must interpret <span id="ref-for-image-type③" class="production">&lt;image&gt;</span> as <a href="#url-value" id="ref-for-url-value⑧" class="production css">&lt;url&gt;</a>.

### <span class="secno">7.3. </span><span class="content"> 2D Positioning: the <a href="#typedef-position" id="ref-for-typedef-position" class="production css">&lt;position&gt;</a> type</span><a href="#position" class="self-link"></a>

The <a href="#typedef-position" id="ref-for-typedef-position①" class="production css">&lt;position&gt;</a> value specifies the position of a object area (e.g. background image) inside a positioning area (e.g. background positioning area). It is interpreted as specified for <a href="https://www.w3.org/TR/css3-background/#propdef-background-position" id="ref-for-propdef-background-position" class="property">background-position</a>. [\[CSS3-BACKGROUND\]](#biblio-css3-background)

    <position> = [
      [ left | center | right ] || [ top | center | bottom ]
    |
      [ left | center | right | <length-percentage> ]
      [ top | center | bottom | <length-percentage> ]?
    |
      [ [ left | right ] <length-percentage> ] &&
      [ [ top | bottom ] <length-percentage> ]
    ]

Note: The <a href="https://www.w3.org/TR/css3-background/#propdef-background-position" id="ref-for-propdef-background-position①" class="property">background-position</a> property also accepts a three-value syntax. This has been disallowed generically because it creates parsing ambiguities when combined with other length or percentage components in a property value.

The canonical order when serializing is the horizontal component followed by the vertical component.

When specified in a grammar alongside other keywords, <a href="#length-value" id="ref-for-length-value⑨" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a>s, or <a href="#percentage-value" id="ref-for-percentage-value①⑦" class="production css">&lt;percentage&gt;</a>s, <a href="#typedef-position" id="ref-for-typedef-position③" class="production css">&lt;position&gt;</a> is *greedily* parsed; it consumes as many components as possible.

<a href="#example-aa45b932" class="self-link"></a> For example, <a href="https://www.w3.org/TR/css-transforms-1/#propdef-transform-origin" id="ref-for-propdef-transform-origin" class="property">transform-origin</a> defines a 3D position as (effectively) ''<a href="#typedef-position" id="ref-for-typedef-position④" class="production css">&lt;position&gt;</a> <a href="#length-value" id="ref-for-length-value①⓪" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a>?''. A value such as <span class="css">left 50px</span> will be parsed as a 2-value <span id="ref-for-typedef-position⑤" class="production">&lt;position&gt;</span>, with an omitted z-component; on the other hand, a value such as <span class="css">top 50px</span> will be parsed as a single-value <span id="ref-for-typedef-position⑥" class="production">&lt;position&gt;</span> followed by a <span id="ref-for-length-value①①" class="production" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</span>.

<span class="secno">8. </span><span class="content"> Functional Notations</span><a href="#functional-notations" class="self-link"></a>
--------------------------------------------------------------------------------------------------------------------------------------

A functional notation is a type of component value that can represent more complex types or invoke special processing. The syntax starts with the name of the function immediately followed by a left parenthesis (i.e. a <a href="https://www.w3.org/TR/css-syntax-3/#typedef-function-token" id="ref-for-typedef-function-token" class="production css">&lt;function-token&gt;</a>) followed by the argument(s) to the notation followed by a right parenthesis. [White space](https://www.w3.org/TR/css-syntax/#whitespace) is allowed, but optional, immediately inside the parentheses. Functions can take multiple arguments, which are formatted similarly to a CSS property value.

Some legacy <a href="#functional-notation" id="ref-for-functional-notation②">functional notations</a>, such as <a href="https://www.w3.org/TR/css-color-4/#funcdef-rgba" id="ref-for-funcdef-rgba" class="css">rgba()</a>, use commas unnecessarily, but generally commas are only used to separate items in a list, or pieces of a grammar that would be ambiguous otherwise. If a comma is used to separate arguments, [white space](https://www.w3.org/TR/css-syntax/#whitespace) is optional before and after the comma.

<a href="#example-3fbb1c9d" class="self-link"></a>

    background: url(http://www.example.org/image);
    color: rgb(100, 200, 50 );
    content: counter(list-item) ". ";
    width: calc(50% - 2em);

### <span class="secno">8.1. </span><span class="content"> Mathematical Expressions: <a href="#funcdef-calc" id="ref-for-funcdef-calc②" class="css">calc()</a></span><a href="#calc-notation" class="self-link"></a>

The calc() function allows mathematical expressions with addition (<a href="https://www.w3.org/TR/selectors4/#selectordef-adjacent" id="ref-for-selectordef-adjacent②" class="css">+</a>), subtraction (<span class="css">-</span>), multiplication (<a href="https://www.w3.org/TR/css3-selectors/#x" id="ref-for-x①" class="css">*</a>), and division (<span class="css">/</span>) to be used as component values. The <a href="#funcdef-calc" id="ref-for-funcdef-calc③" class="css">calc()</a> expression represents the result of the mathematical calculation it contains, using standard operator precedence rules. It can be used wherever <a href="#length-value" id="ref-for-length-value①②" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a>, <a href="#frequency-value" id="ref-for-frequency-value⑥" class="production css" title="Expands to: hz | khz">&lt;frequency&gt;</a>, <a href="#angle-value" id="ref-for-angle-value⑧" class="production css" title="Expands to: turn | rad | grad | deg">&lt;angle&gt;</a>, <a href="#time-value" id="ref-for-time-value⑥" class="production css" title="Expands to: s | ms">&lt;time&gt;</a>, <a href="#percentage-value" id="ref-for-percentage-value①⑧" class="production css">&lt;percentage&gt;</a>, <a href="#number-value" id="ref-for-number-value⑦" class="production css">&lt;number&gt;</a>, or <a href="#integer-value" id="ref-for-integer-value⑥" class="production css">&lt;integer&gt;</a> values are allowed. Components of a <span id="ref-for-funcdef-calc④" class="css">calc()</span> expression can be literal values or <a href="#funcdef-attr" id="ref-for-funcdef-attr①" class="css">attr()</a> or <span id="ref-for-funcdef-calc⑤" class="css">calc()</span> expressions.

<a href="#example-ec5d11f6" class="self-link"></a>

    section {
      float: left;
      margin: 1em; border: solid 1px;
      width: calc(100%/3 - 2*1em - 2*1px);
    }

<a href="#example-e56942d8" class="self-link"></a>

    p {
      margin: calc(1rem - 2px) calc(1rem - 1px);
    }

<a href="#example-8f3f3fe7" class="self-link"></a> The following sets the <a href="https://www.w3.org/TR/css-fonts-3/#propdef-font-size" id="ref-for-propdef-font-size⑥" class="property">font-size</a> so that exactly 40em fits within the viewport, ensuring that roughly the same amount of text always fills the screen no matter the screen size.

    :root {
      font-size: calc(100vw / 40);
    }

If the rest of the design is specified using the <a href="#rem" id="ref-for-rem③" class="css">rem</a> unit, the entire layout will scale to match the viewport width.

<a href="#example-816e5203" class="self-link"></a> The following example stacks two background images, with the first perfectly centered and the second offset 20px to the bottom and to the left of the first.

    .foo {
      background: url(top.png), url(bottom.png);
      background-repeat: no-repeat;
      background-position: 50% 50%, calc(50% + 20px) calc(50% + 20px);
    }

<a href="#example-cac7a502" class="self-link"></a> This example shows how to place color-stops on a gradient an equal distance from either end.

    .foo {
      background-image: linear-gradient(to right, silver,
                                                  white 50px,
                                                  white calc(100% - 50px),
                                                  silver);
    }

#### <span class="secno">8.1.1. </span><span class="content"> Syntax</span><a href="#calc-syntax" class="self-link"></a>

The syntax of a <a href="#funcdef-calc" id="ref-for-funcdef-calc⑥" class="css">calc()</a> function is:

    <calc()> = calc( <calc-sum> )
    <calc-sum> = <calc-product> [ [ '+' | '-' ] <calc-product> ]*
    <calc-product> = <calc-value> [ '*' <calc-value> | '/' <calc-number-value> ]*
    <calc-value> = <number> | <dimension> | <percentage> | ( <calc-sum> )
    <calc-number-sum> = <calc-number-product> [ [ '+' | '-' ] <calc-number-product> ]*
    <calc-number-product> = <calc-number-value> [ '*' <calc-number-value> | '/' <calc-number-value> ]*
    <calc-number-value> = <number> | ( <calc-number-sum> )

In addition, [white space](https://www.w3.org/TR/css-syntax/#whitespace) is required on both sides of the <a href="https://www.w3.org/TR/selectors4/#selectordef-adjacent" id="ref-for-selectordef-adjacent③" class="css">+</a> and <span class="css">-</span> operators. (The <a href="https://www.w3.org/TR/css3-selectors/#x" id="ref-for-x②" class="css">*</a> and <span class="css">/</span> operaters can be used without white space around them.)

UAs must support <a href="#funcdef-calc" id="ref-for-funcdef-calc⑧" class="css">calc()</a> expressions of at least 20 terms, where each `NUMBER`, `DIMENSION`, or `PERCENTAGE` is a term. If a <span id="ref-for-funcdef-calc⑨" class="css">calc()</span> expression contains more than the supported number of terms, it must be treated as if it were invalid.

#### <span class="secno">8.1.2. </span><span class="content"> Type Checking</span><a href="#calc-type-checking" class="self-link"></a>

A math expression has a resolved type, which is one of <a href="#length-value" id="ref-for-length-value①③" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a>, <a href="#frequency-value" id="ref-for-frequency-value⑦" class="production css" title="Expands to: hz | khz">&lt;frequency&gt;</a>, <a href="#angle-value" id="ref-for-angle-value⑨" class="production css" title="Expands to: turn | rad | grad | deg">&lt;angle&gt;</a>, <a href="#time-value" id="ref-for-time-value⑦" class="production css" title="Expands to: s | ms">&lt;time&gt;</a>, <a href="#percentage-value" id="ref-for-percentage-value②⓪" class="production css">&lt;percentage&gt;</a>, <a href="#number-value" id="ref-for-number-value①⓪" class="production css">&lt;number&gt;</a>, or <a href="#integer-value" id="ref-for-integer-value⑦" class="production css">&lt;integer&gt;</a>. The <a href="#resolved-type" id="ref-for-resolved-type">resolved type</a> must be valid for where the expression is placed; otherwise, the expression is invalid. The <span id="ref-for-resolved-type①">resolved type</span> of the expression is determined by the types of the values it contains. <a href="https://www.w3.org/TR/css-syntax-3/#typedef-number-token" id="ref-for-typedef-number-token②" class="production css">&lt;number-token&gt;</a>s are of type <span id="ref-for-number-value①①" class="production">&lt;number&gt;</span> or <span id="ref-for-integer-value⑧" class="production">&lt;integer&gt;</span>. A <a href="https://www.w3.org/TR/css-syntax-3/#typedef-dimension-token" id="ref-for-typedef-dimension-token②" class="production css">&lt;dimension-token&gt;</a>’s type is given by its unit (<a href="#cm" id="ref-for-cm③" class="css">cm</a> is <span id="ref-for-length-value①④" class="production" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</span>, <a href="#deg" id="ref-for-deg②" class="css">deg</a> is <span id="ref-for-angle-value①⓪" class="production" title="Expands to: turn | rad | grad | deg">&lt;angle&gt;</span>, etc.). An <a href="#funcdef-attr" id="ref-for-funcdef-attr②" class="css">attr()</a> expression’s type is given by its <a href="#typedef-type-or-unit" id="ref-for-typedef-type-or-unit" class="production css">&lt;type-or-unit&gt;</a> argument.

Note: Because <a href="https://www.w3.org/TR/css-syntax-3/#typedef-number-token" id="ref-for-typedef-number-token③" class="production css">&lt;number-token&gt;</a>s are always interpreted as <a href="#number-value" id="ref-for-number-value①②" class="production css">&lt;number&gt;</a>s or <a href="#integer-value" id="ref-for-integer-value⑨" class="production css">&lt;integer&gt;</a>s, "unitless 0" <a href="#length-value" id="ref-for-length-value①⑤" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a>s aren’t supported in <a href="#funcdef-calc" id="ref-for-funcdef-calc①⓪" class="css">calc()</a>. That is, <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width⑦" class="css">width: calc(0 + 5px);</a> is invalid, even though both <span id="ref-for-propdef-width⑧" class="css">width: 0;</span> and <span id="ref-for-propdef-width⑨" class="css">width: 5px;</span> are valid.

If percentages are accepted in the context in which the expression is placed, and they are defined to be relative to another type besides <a href="#number-value" id="ref-for-number-value①③" class="production css">&lt;number&gt;</a>, a <a href="https://www.w3.org/TR/css-syntax-3/#typedef-percentage-token" id="ref-for-typedef-percentage-token①" class="production css">&lt;percentage-token&gt;</a> is treated as that type. For example, in the <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width①⓪" class="property">width</a> property, percentages have the <a href="#length-value" id="ref-for-length-value①⑥" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a> type. A percentage only has the <a href="#percentage-value" id="ref-for-percentage-value②①" class="production css">&lt;percentage&gt;</a> type if in that context <span id="ref-for-percentage-value②②" class="production">&lt;percentage&gt;</span> values are not used-value compatible with any other type. If percentages are not normally allowed in place of the <a href="#funcdef-calc" id="ref-for-funcdef-calc①①" class="css">calc()</a>, then a <span id="ref-for-funcdef-calc①②" class="css">calc()</span> expression containing percentages is invalid in that context.

Note: Note that <a href="#percentage-value" id="ref-for-percentage-value②③" class="production css">&lt;percentage&gt;</a>s relative to <a href="#number-value" id="ref-for-number-value①④" class="production css">&lt;number&gt;</a>s, such as in <a href="https://www.w3.org/TR/css-color-4/#propdef-opacity" id="ref-for-propdef-opacity" class="property">opacity</a>, are not allowed in <a href="#funcdef-calc" id="ref-for-funcdef-calc①③" class="css">calc()</a>. Allowing this would cause significant problems with "unit algebra" (allowing multiplication/division of <a href="#typedef-dimension" id="ref-for-typedef-dimension③" class="production css">&lt;dimension&gt;</a>s), and in every case so far, doesn’t provide any new functionality. (For example, <span id="ref-for-propdef-opacity①" class="css">opacity: 25%</span> is identical to <span id="ref-for-propdef-opacity②" class="css">opacity: .25</span>; it’s just a trivial syntax transform.)

Note: Altho there are a few properties in which a bare <a href="#number-value" id="ref-for-number-value①⑤" class="production css">&lt;number&gt;</a> becomes a <a href="#length-value" id="ref-for-length-value①⑦" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a> at used-value time (specifically, <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-line-height" id="ref-for-propdef-line-height①" class="property">line-height</a> and <a href="https://www.w3.org/TR/css-text-3/#propdef-tab-size" id="ref-for-propdef-tab-size" class="property">tab-size</a>), <span id="ref-for-number-value①⑥" class="production">&lt;number&gt;</span>s never become "length-like" in <a href="#funcdef-calc" id="ref-for-funcdef-calc①④" class="css">calc()</a>. They always stay as <span id="ref-for-number-value①⑦" class="production">&lt;number&gt;</span>s.

Operators form sub-expressions, which gain types based on their arguments. To make expressions simpler, operators have restrictions on the types they accept. At each operator, the types of the left and right argument are checked for these restrictions. If compatible, the type resolves as described below (the following ignores precedence rules on the operators for simplicity):

-   At <a href="https://www.w3.org/TR/selectors4/#selectordef-adjacent" id="ref-for-selectordef-adjacent④" class="css">+</a> or <span class="css">-</span>, check that both sides have the same type, or that one side is a <a href="#number-value" id="ref-for-number-value①⑧" class="production css">&lt;number&gt;</a> and the other is an <a href="#integer-value" id="ref-for-integer-value①⓪" class="production css">&lt;integer&gt;</a>. If both sides are the same type, resolve to that type. If one side is a <span id="ref-for-number-value①⑨" class="production">&lt;number&gt;</span> and the other is an <span id="ref-for-integer-value①①" class="production">&lt;integer&gt;</span>, resolve to <span id="ref-for-number-value②⓪" class="production">&lt;number&gt;</span>.
-   At <a href="https://www.w3.org/TR/css3-selectors/#x" id="ref-for-x③" class="css">*</a>, check that at least one side is <a href="#number-value" id="ref-for-number-value②①" class="production css">&lt;number&gt;</a>. If both sides are <a href="#integer-value" id="ref-for-integer-value①②" class="production css">&lt;integer&gt;</a>, resolve to <span id="ref-for-integer-value①③" class="production">&lt;integer&gt;</span>. Otherwise, resolve to the type of the other side.
-   At <span class="css">/</span>, check that the right side is <a href="#number-value" id="ref-for-number-value②②" class="production css">&lt;number&gt;</a>. If the left side is <a href="#integer-value" id="ref-for-integer-value①④" class="production css">&lt;integer&gt;</a>, resolve to <span id="ref-for-number-value②③" class="production">&lt;number&gt;</span>. Otherwise, resolve to the type of the left side.

If an operator does not pass the above checks, the expression is invalid. Also, division by zero is invalid. This includes both dividing by the literal number zero, as well as any numeric expression that evaluates to zero (as purely-numeric expressions can be evaluated without any additional information at parse time).

Note: Algebraic simplifications do not affect the validity of the <a href="#funcdef-calc" id="ref-for-funcdef-calc①⑤" class="css">calc()</a> expression or its resolved type. For example, <span class="css">calc(5px - 5px + 10s)</span> and <span class="css">calc(0 \* 5px + 10s)</span> are both invalid due to the attempt to add a length and a time.

#### <span class="secno">8.1.3. </span><span class="content"> Computed Value</span><a href="#calc-computed-value" class="self-link"></a>

The computed value of a <a href="#funcdef-calc" id="ref-for-funcdef-calc①⑥" class="css">calc()</a> expression is the expression with all components computed.

Where percentages are not resolved at computed-value time, they are not resolved in <a href="#funcdef-calc" id="ref-for-funcdef-calc①⑦" class="css">calc()</a> expressions, e.g. <span class="css">calc(100% - 100% + 1em)</span> resolves to <span class="css">calc(1em + 0%)</span>, not to <span class="css">1em</span>. If there are special rules for computing percentages in a value (e.g. [the <span class="css">height</span> property](https://www.w3.org/TR/CSS21/visudet.html#the-height-property)), they apply whenever a <span id="ref-for-funcdef-calc①⑧" class="css">calc()</span> expression contains percentages.

<a href="#example-023dad93" class="self-link"></a> For example, whereas <a href="https://www.w3.org/TR/css-fonts-3/#propdef-font-size" id="ref-for-propdef-font-size⑦" class="property">font-size</a> computes percentage values at <a href="https://www.w3.org/TR/css-cascade-4/#computed-value" id="ref-for-computed-value②">computed value</a> time so that <a href="#font-relative-length" id="ref-for-font-relative-length">font-relative length</a> units can be computed, <a href="https://www.w3.org/TR/css3-background/#propdef-background-position" id="ref-for-propdef-background-position②" class="property">background-position</a> has layout-dependent behavior for percentage values, and thus does not resolve percentages until used-value time.

Due to this, <a href="https://www.w3.org/TR/css3-background/#propdef-background-position" id="ref-for-propdef-background-position③" class="property">background-position</a> computation preserves the percentage in a <a href="#funcdef-calc" id="ref-for-funcdef-calc①⑨" class="css">calc()</a> whereas <a href="https://www.w3.org/TR/css-fonts-3/#propdef-font-size" id="ref-for-propdef-font-size⑧" class="property">font-size</a> will compute such expressions directly into a length.

Given the complexities of width and height calculations on table cells and table elements, math expressions involving percentages for widths and heights on table columns, table column groups, table rows, table row groups, and table cells in both auto and fixed layout tables MAY be treated as if <a href="https://www.w3.org/TR/css-sizing-3/#valdef-width-auto" id="ref-for-valdef-width-auto" class="css">auto</a> had been specified.

#### <span class="secno">8.1.4. </span><span class="content"> Range Checking</span><a href="#calc-range" class="self-link"></a>

Parse-time range-checking of values is not performed within <a href="#funcdef-calc" id="ref-for-funcdef-calc②⓪" class="css">calc()</a>, and therefore out-of-range values do not cause the declaration to become invalid. However, the value resulting from an expression must be clamped to the range allowed in the target context. Clamping is performed on <a href="https://www.w3.org/TR/css-cascade-4/#computed-value" id="ref-for-computed-value③">computed values</a> to the extent possible, and also on <a href="https://www.w3.org/TR/css-cascade-4/#used-value" id="ref-for-used-value③">used values</a> if computation was unable to sufficiently simplify the expression to allow range-checking. (Clamping is not performed on <a href="https://www.w3.org/TR/css-cascade-4/#specified-value" id="ref-for-specified-value">specified values</a>.)

Note: This requires all contexts accepting <a href="#funcdef-calc" id="ref-for-funcdef-calc②①" class="css">calc()</a> to define their allowable values as a closed (not open) interval.

<a href="#example-ec14dee2" class="self-link"></a> Since widths smaller than 0px are not allowed, these three declarations are equivalent:

    width: calc(5px - 10px);
    width: calc(-5px);
    width: 0px;

Note however that <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width①①" class="css">width: -5px</a> is not equivalent to <span id="ref-for-propdef-width①②" class="css">width: calc(-5px)</span>! Out-of-range values *outside* <a href="#funcdef-calc" id="ref-for-funcdef-calc②②" class="css">calc()</a> are syntactically invalid, and cause the entire declaration to be dropped.

#### <span class="secno">8.1.5. </span><span class="content"> Serialization</span><a href="#calc-serialize" class="self-link"></a>

The serialization of <a href="#funcdef-calc" id="ref-for-funcdef-calc②③" class="css">calc()</a> values is undefined in this level.

### <span class="secno">8.2. </span><span class="content"> Attribute References: <a href="#funcdef-attr" id="ref-for-funcdef-attr③" class="css">attr()</a></span><a href="#attr-notation" class="self-link"></a>

The attr() function is allowed as a component value in properties applied to an element or pseudo-element. It returns the value of an attribute on the element. If used on a pseudo-element, it returns the value of the attribute on the pseudo-element’s originating element.

The computed value of the <a href="#funcdef-attr" id="ref-for-funcdef-attr④" class="css">attr()</a> expression is the value of the attribute with the specified name on the element, according to the rules given below.

Note: In CSS2.1 [\[CSS21\]](#biblio-css21), the <a href="#funcdef-attr" id="ref-for-funcdef-attr⑤" class="css">attr()</a> expression always returns a string. In CSS3, the <span id="ref-for-funcdef-attr⑥" class="css">attr()</span> expression can return many different types. The <span id="ref-for-funcdef-attr⑦" class="css">attr()</span> expression cannot return everything, for example it cannot do counters, named strings, quotes, or keyword values such as <span class="css">auto</span>, <span class="css">nowrap</span>, or <span class="css">baseline</span>. This is intentional, as the intent of the <span id="ref-for-funcdef-attr⑧" class="css">attr()</span> expression is not to make it possible to describe a presentational language’s formatting using CSS, but to enable CSS to take semantic data into account.

The new syntax for the <a href="#funcdef-attr" id="ref-for-funcdef-attr⑨" class="css">attr()</a> expression is:

    attr( <attr-name> <type-or-unit>? [ , <attr-fallback> ]? )

where &lt;attr-name&gt; is a [CSS qualified name](https://drafts.csswg.org/css3-namespace/#css-qnames) (the qname production in [\[CSS3NAMESPACE\]](#biblio-css3namespace)) that represents an attribute name. (In the absence of namespacing, this will just be a CSS identifier.) As with [attribute selectors](https://www.w3.org/TR/selectors/#attribute-selectors), the case-sensitivity of <a href="#typedef-attr-name" id="ref-for-typedef-attr-name①" class="production css">&lt;attr-name&gt;</a> depends on the document language.

The optional &lt;type-or-unit&gt; argument is a keyword drawn from the list below that tells the UA how to interpret the attribute value, and defines a type for the attr() expression. If omitted, <a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value-string" id="ref-for-valdef-type-or-value-string" class="css">string</a> is implied.

The optional &lt;attr-fallback&gt; argument represents a fallback value, which is used if the named attribute is missing, or its value cannot be parsed into the given type or is invalid/out-of-range for the property. If it’s absent, the default value for the given <a href="#typedef-type-or-unit" id="ref-for-typedef-type-or-unit②" class="production css">&lt;type-or-unit&gt;</a> (from the list below) is implied.

The attr() expression is only valid if:

-   the attr() expression’s type is valid where the attr() expression is placed,
-   the namespace prefix of the attribute name, if any, is defined,
-   the <a href="#typedef-attr-fallback" id="ref-for-typedef-attr-fallback①" class="production css">&lt;attr-fallback&gt;</a> is valid where the attr() expression is placed,
-   the <a href="#typedef-attr-fallback" id="ref-for-typedef-attr-fallback②" class="production css">&lt;attr-fallback&gt;</a> does not contain another attr() expression,
-   and, if the attr() expression is not the sole component value of a property, the <a href="#typedef-attr-fallback" id="ref-for-typedef-attr-fallback③" class="production css">&lt;attr-fallback&gt;</a> matches the attr()’s type

Note that the default value need not be of the type given, if the attr() expression is the entire property value. For instance, if the type required of the attribute by the author is <a href="#px" id="ref-for-px①⓪" class="css">px</a>, the default could still be <span class="css">auto</span>, like in <a href="https://www.w3.org/TR/CSS21/visudet.html#propdef-width" id="ref-for-propdef-width①③" class="css">width: attr(size px, auto);</a>.

If the attr() is used alongside other values to form the full property value, however, then the default value must match the attr()'s type. For example, <a href="https://www.w3.org/TR/css3-background/#propdef-box-shadow" id="ref-for-propdef-box-shadow" class="css">box-shadow: attr(size px, inset) 5px 10px blue;</a> is invalid, even though it would create a valid declaration if you substituted the attr() expression with either a <a href="#px" id="ref-for-px①①" class="css">px</a> length *or* the <a href="https://www.w3.org/TR/css3-background/#shadow-inset" id="ref-for-shadow-inset" class="css">inset</a> keyword.

If the specified attribute exists on the element, the value of the attribute must be parsed as required by the <a href="#typedef-type-or-unit" id="ref-for-typedef-type-or-unit③" class="production css">&lt;type-or-unit&gt;</a> argument (as defined in the list below). Unless the type is <a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value-string" id="ref-for-valdef-type-or-value-string①" class="css">string</a>, it must first be stripped of leading and trailing [white space](https://www.w3.org/TR/css-syntax/#whitespace). The resulting value is the attr() expression’s value. If the value did not parse as required, the attr() expression’s value is its fallback value.

The <a href="#typedef-type-or-unit" id="ref-for-typedef-type-or-unit④" class="production css">&lt;type-or-unit&gt;</a> keywords are:

<a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value-string" id="ref-for-valdef-type-or-value-string②" class="css">string</a>   
The attribute value is taken as the contents of a CSS <a href="#string-value" id="ref-for-string-value⑤" class="production css">&lt;string&gt;</a>. The default is the empty string.

Note: This does not reparse the attribute value with the CSS parser. So, for example, an attribute whose value is "\\51" will produce a string containing those three characters, not a string containing "Q" (the character that the escape would evaluate to).

<span class="css">color</span>   
The attribute value must parse as a <a href="https://www.w3.org/TR/css-syntax-3/#typedef-hash-token" id="ref-for-typedef-hash-token" class="production css">&lt;hash-token&gt;</a> or <a href="https://www.w3.org/TR/css-syntax-3/#typedef-ident-token" id="ref-for-typedef-ident-token①" class="production css">&lt;ident-token&gt;</a>, and be successfully interpreted as a <a href="https://www.w3.org/TR/css3-color/#valuea-def-color" id="ref-for-valuea-def-color③" class="production css" title="Expands to: indigo | gold | firebrick | indianred | yellow | darkolivegreen | darkseagreen | slategrey | darkslategrey | mediumvioletred | mediumorchid | transparent | chartreuse | mediumslateblue | black | springgreen | crimson | lightsalmon | brown | turquoise | olivedrab | cyan | silver | skyblue | gray | darkturquoise | goldenrod | darkgreen | darkviolet | darkgray | lightpink | teal | darkmagenta | lightgoldenrodyellow | lavender | yellowgreen | thistle | violet | navy | dimgrey | orchid | blue | ghostwhite | honeydew | cornflowerblue | darkblue | darkkhaki | mediumpurple | cornsilk | red | bisque | slategray | darkcyan | khaki | wheat | deepskyblue | rebeccapurple | darkred | steelblue | aliceblue | lightslategrey | gainsboro | mediumturquoise | floralwhite | coral | purple | lightgrey | lightcyan | darksalmon | beige | azure | lightsteelblue | oldlace | greenyellow | royalblue | lightseagreen | mistyrose | sienna | lightcoral | orangered | navajowhite | lime | palegreen | burlywood | seashell | mediumspringgreen | fuchsia | papayawhip | blanchedalmond | peru | aquamarine | white | darkslategray | tomato | ivory | dodgerblue | currentcolor | lemonchiffon | chocolate | orange | forestgreen | darkgrey | olive | mintcream | antiquewhite | darkorange | cadetblue | moccasin | limegreen | saddlebrown | grey | darkslateblue | lightskyblue | deeppink | plum | aqua | darkgoldenrod | maroon | sandybrown | magenta | tan | rosybrown | pink | lightblue | palevioletred | mediumseagreen | slateblue | dimgray | powderblue | seagreen | snow | mediumblue | midnightblue | paleturquoise | palegoldenrod | whitesmoke | darkorchid | salmon | lightslategray | lawngreen | lightgreen | lightgray | hotpink | lightyellow | lavenderblush | linen | mediumaquamarine | green | blueviolet | peachpuff">&lt;color&gt;</a>. The default is <a href="https://www.w3.org/TR/css-color-4/#valdef-color-currentcolor" id="ref-for-valdef-color-currentcolor" class="css">currentcolor</a>.

<a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value-url" id="ref-for-valdef-type-or-value-url" class="css">url</a>   
The attribute value is taken as the contents of a CSS <a href="#string-value" id="ref-for-string-value⑥" class="production css">&lt;string&gt;</a>. It is interpreted as a quoted string within the <a href="#funcdef-url" id="ref-for-funcdef-url①③" class="css">url()</a> notation. The default is <span class="css">about:invalid</span>, which is a URL defined ([in Appendix A](#about-invalid)) to point to a non-existent document with a generic error condition. Relative URLs must be made absolute according to the rules of the document language as applied to URLs originating from the element; they are not relative to the style sheet.

<a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value-integer" id="ref-for-valdef-type-or-value-integer" class="css">integer</a>   
The attribute value must parse as a <a href="https://www.w3.org/TR/css-syntax-3/#typedef-number-token" id="ref-for-typedef-number-token④" class="production css">&lt;number-token&gt;</a>, and be successfully interpreted as an <a href="#integer-value" id="ref-for-integer-value①⑤" class="production css">&lt;integer&gt;</a>. The default is <span class="css">0</span>, or else the property’s minimum value if <span class="css">0</span> is not valid for the property. The default must also be used if the property in question only accepts integers within a certain range and the attribute is out of range.

<a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value-number" id="ref-for-valdef-type-or-value-number" class="css">number</a>   
The attribute value must parse as a <a href="https://www.w3.org/TR/css-syntax-3/#typedef-number-token" id="ref-for-typedef-number-token⑤" class="production css">&lt;number-token&gt;</a>, and is interpreted as an <a href="#number-value" id="ref-for-number-value②④" class="production css">&lt;number&gt;</a>. The default is <span class="css">0</span>, or else the property’s minimum value if <span class="css">0</span> is not valid for the property. The default must also be used if the property in question only accepts integers within a certain range and the attribute is out of range.

<a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value-length" id="ref-for-valdef-type-or-value-length" class="css">length</a>  
<a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value-angle" id="ref-for-valdef-type-or-value-angle" class="css">angle</a>  
<a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value-time" id="ref-for-valdef-type-or-value-time" class="css">time</a>  
<a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value-frequency" id="ref-for-valdef-type-or-value-frequency" class="css">frequency</a>   
The attribute value must parse as a <a href="https://www.w3.org/TR/css-syntax-3/#typedef-dimension-token" id="ref-for-typedef-dimension-token③" class="production css">&lt;dimension-token&gt;</a>, and be successfully interpreted as the specified type. The default is <span class="css">0</span> in the relevant units, or else the property’s minimum value if <span class="css">0</span> in the relevant units is not valid for the property. The default must also be used if the property in question only accepts values within a certain range (e.g. positive lengths or angles from 0 to 90deg) and the attribute is out of range (e.g. a negative length or 180deg). If the unit is a relative length, it must be computed to an absolute length.

<a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value" id="ref-for-valdef-type-or-value①" class="css">%</a>  
A keyword matching one of the <a href="#length-value" id="ref-for-length-value①⑧" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a>, <a href="#angle-value" id="ref-for-angle-value①①" class="production css" title="Expands to: turn | rad | grad | deg">&lt;angle&gt;</a>, <a href="#time-value" id="ref-for-time-value⑧" class="production css" title="Expands to: s | ms">&lt;time&gt;</a>, or <a href="#frequency-value" id="ref-for-frequency-value⑧" class="production css" title="Expands to: hz | khz">&lt;frequency&gt;</a> units   
The attribute value must parse as a <a href="https://www.w3.org/TR/css-syntax-3/#typedef-number-token" id="ref-for-typedef-number-token⑥" class="production css">&lt;number-token&gt;</a>, and is interpreted as a <a href="#dimension" id="ref-for-dimension①⓪">dimension</a> with the specified unit. The default is <span class="css">0</span> in the relevant units, or else the property’s minimum value if <span class="css">0</span> in the relevant units is not valid for the property. The default must also be used if the property in question only accepts values within a certain range (e.g. positive lengths or angles from 0 to 90deg) and the attribute is out of range (e.g. a negative length or 180deg). If the unit is a relative length, it must be computed to an absolute length.

<a href="#example-6ce916fb" class="self-link"></a> This example shows the use of attr() to visually illustrate data in an XML file:

    <stock>
      <wood length="12"/>
      <wood length="5"/>
      <metal length="19"/>
      <wood length="4"/>
    </stock>

    stock::before {
      display: block;
      content: "To scale, the lengths of materials in stock are:";
    }
    stock > * {
      display: block;
      width: attr(length em); /* default 0 */
      height: 1em;
      border: solid thin;
      margin: 0.5em;
    }
    wood {
      background: orange url(wood.png);
    }
    metal {
      background: silver url(metal.png);
    }

<a href="#example-38451edc" class="self-link"></a> All of the following examples are invalid and would cause a parse-time error, and thus cause the relevant declaration—in this case all of them—to be ignored:

    content: attr(title color); /* 'content' doesn’t accept colors */

    content: attr(end-of-quote string, inherit) close-quote;
    /* the 'inherit' value is not allowed there, since the result would be
    'inherit close-quote', which is invalid. */

    margin: attr(vertical length) attr(horizontal deg);
    /* deg units are not valid at that point */

    color: attr(color); /* 'color' doesn’t accept strings */

Note: The <a href="#funcdef-attr" id="ref-for-funcdef-attr①⓪" class="css">attr()</a> expression cannot currently fall back onto another attribute. Future versions of CSS may extend <span id="ref-for-funcdef-attr①①" class="css">attr()</span> in this direction.

<span class="secno">9. </span><span class="content"> Appendix A: IANA Considerations</span><a href="#iana" class="self-link"></a>
---------------------------------------------------------------------------------------------------------------------------------

### <span class="secno">9.1. </span><span class="content"> Registration for the `about:invalid` URL scheme</span><a href="#about-invalid" class="self-link"></a>

This sections defines and registers the `about:invalid` URL, in accordance with the registration procedure defined in [\[RFC6694\]](#biblio-rfc6694).

The official record of this registration can be found at <http://www.iana.org/assignments/about-uri-tokens/about-uri-tokens.xhtml>.

<table><tbody><tr class="odd"><td>Registered Token</td><td><code>invalid</code></td></tr><tr class="even"><td>Intended Usage</td><td>The <code>about:invalid</code> URL references a non-existent document with a generic error condition. It can be used when a URL is necessary, but the default value shouldn’t be resolveable as any type of document.</td></tr><tr class="odd"><td>Contact/Change controller</td><td>CSS WG &lt;<a href="mailto:www-style@w3.org">www-style@w3.org</a>&gt; (on behalf of W3C)</td></tr><tr class="even"><td>Specification</td><td><a href="https://www.w3.org/TR/css3-values/">CSS Values and Units Module Level 3</a></td></tr></tbody></table>

<span class="content"> Acknowledgments</span><a href="#acknowledgments" class="self-link"></a>
----------------------------------------------------------------------------------------------

Comments and suggestions from Giovanni Campagna, Christoph Päper, Keith Rarick, Alex Mogilevsky, Ian Hickson, David Baron, Edward Welbourne, Boris Zbarsky, Björn Höhrmann and Michael Day improved this module.

<span class="content"> Changes</span><a href="#changes" class="self-link"></a>
------------------------------------------------------------------------------

Changes since the [31 January 2019 Candidate Recommendation](https://www.w3.org/TR/2019/CR-css-values-3-20190131/) are:

-   Added the new <a href="#css-bracketed-range-notation" id="ref-for-css-bracketed-range-notation②">bracketed range notation</a> to the CSS <a href="#css-value-definition-syntax" id="ref-for-css-value-definition-syntax">value definition syntax</a>. This has no normative implications on implementations, just allows more routine annotation of ranges in future CSS specifications. [Issue 355](https://github.com/w3c/csswg-drafts/issues/355))

Changes since the [14 August 2018 Candidate Recommendation](https://www.w3.org/TR/2018/CR-css-values-3-20180814/) are:

-   Defined <span class="production">&lt;'property'&gt;</span> syntax to refer to the property without any top-level \#-multiplier, to make the notation usable with common list-valued property patterns. ([Issue 3146](https://github.com/w3c/csswg-drafts/issues/3146))
-   Clarified that numeric values outside the allowed range are not ignored if a more specific spec defines other handling. ([Issue 3270](https://github.com/w3c/csswg-drafts/issues/3270))

    > Properties may restrict numeric values to some range. If the value is outside the allowed range, <span class="underline">unless otherwise specified,</span> the declaration is invalid and must be [ignored](https://www.w3.org/TR/CSS21/conform.html#ignore).

-   Fixed some <a href="https://www.w3.org/TR/css3-background/#propdef-background-position" id="ref-for-propdef-background-position④" class="property">background-position</a> examples to be less confusing. ([Issue 3482](https://github.com/w3c/csswg-drafts/issues/3482#issuecomment-453257033))

A [Disposition of Comments](http://drafts.csswg.org/css-values-3/issues-cr-2018) is available.

Changes since the [29 September 2016 Candidate Recommendation](https://www.w3.org/TR/2016/CR-css-values-3-20160929/) are:

-   Removed [consideration of scrollbars](#change-2012-vwh-scrollbars) in computing viewport units due to lack of implementations. ([Issue 15](https://drafts.csswg.org/css-values-3/issues-cr-2016#issue-15))
-   Inlined the <a href="#typedef-position" id="ref-for-typedef-position⑦" class="production css">&lt;position&gt;</a> definition and dropped the three-value syntaxes to allow for unambiguous combination in complex grammars. This effectively removes that syntax from <a href="https://www.w3.org/TR/css3-images/#object-position" id="ref-for-object-position" class="property">object-position</a>, but allows <span id="ref-for-typedef-position⑧" class="production">&lt;position&gt;</span> to be re-used e.g. in [\[CSS-TRANSFORMS-1\]](#biblio-css-transforms-1) for 3D positions. (See [discussion](https://lists.w3.org/Archives/Public/www-style/2017Feb/0052.html).)
-   Reverted previous change to allow zero angles to drop their unit; this will instead be special-cased where needed for backwards-compatibility. (See [discussion](https://lists.w3.org/Archives/Public/www-style/2017Apr/0027.html))
-   Defined that range checking, and any resulting clamping, of <a href="#funcdef-calc" id="ref-for-funcdef-calc②④" class="css">calc()</a> values is performed both at computed time and at used time. ([Issue \#434](https://github.com/w3c/csswg-drafts/issues/434))
-   Fixed grammar error that disallowed numeric expressions as denominators in <a href="#funcdef-calc" id="ref-for-funcdef-calc②⑤" class="css">calc()</a>. ([Issue 12](https://drafts.csswg.org/css-values-3/issues-cr-2016#issue-12))
-   Defined handling of font-relative units outside the context of an element. ([Issue 9](https://drafts.csswg.org/css-values-3/issues-cr-2016#issue-9))
-   Defined that <span class="css">0</span> parses as <a href="#number-value" id="ref-for-number-value②⑤" class="production css">&lt;number&gt;</a> if it’s ambiguous whether it’s a <span id="ref-for-number-value②⑥" class="production">&lt;number&gt;</span> or a <a href="#length-value" id="ref-for-length-value①⑨" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a>. ([Issue 489](https://github.com/w3c/csswg-drafts/issues/489))
-   Defined empty <a href="#funcdef-url" id="ref-for-funcdef-url①④" class="css">url()</a>s to refer to an invalid URL, rather than resolving to the URL of the style sheet. ([Issue 2211](https://github.com/w3c/csswg-drafts/issues/2211))
-   Removed (unused) ability for percentages to be treated as a <a href="#number-value" id="ref-for-number-value②⑦" class="production css">&lt;number&gt;</a> type in <a href="#funcdef-calc" id="ref-for-funcdef-calc②⑥" class="css">calc()</a>. ([Issue 1463](https://github.com/w3c/csswg-drafts/issues/1463))
-   Clarified that high-resolution screens should anchor on device pixels, not physical units. ([Issue 8](https://drafts.csswg.org/css-values-3/issues-cr-2016#issue-8))
-   Clarified definition of <a href="#funcdef-url" id="ref-for-funcdef-url①⑤" class="css">url()</a> to normatively say that it accepts unquoted syntax.
-   Defined that fragment-only <a href="#funcdef-url" id="ref-for-funcdef-url①⑥" class="css">url()</a> are specially handled to always be page-local links, regardless of base-url shenanigans. (See [§3.4.1.1 Fragment URLs](#local-urls).)
-   Defined attr() parsing in terms of the Syntax spec, not CSS2.1 grammar. (See [§8.2 Attribute References: attr()](#attr-notation).)

A [Disposition of Comments](https://drafts.csswg.org/css-values-3/issues-cr-2016) is available.

Changes since the [11 June 2015 Candidate Recomendation](https://www.w3.org/TR/2015/CR-css-values-3-20150611/) are:

-   Dropped <a href="https://www.w3.org/TR/css-values-4/#funcdef-toggle" id="ref-for-funcdef-toggle" class="css">toggle()</a> for lack of implementations.
-   Allow zero angles to be represented as <span class="css">0</span>. (Change due to Web-compatibility constraints in transform and gradient syntaxes.)
-   Defined [special handling](#local-urls) for fragment URLs.
-   Defined an empty <a href="#url-value" id="ref-for-url-value⑨" class="production css">&lt;url&gt;</a> resolves to an invalid resource.
-   Defined <a href="#compatible-units" id="ref-for-compatible-units⑧">compatible units</a> and <a href="#canonical-unit" id="ref-for-canonical-unit⑥">canonical units</a> for serialization.
-   Defined case-sensitivity of <a href="#funcdef-url" id="ref-for-funcdef-url①⑦" class="css">url()</a> attribute argument to match attribute selectors.
-   Added definition of <a href="#typedef-ident" id="ref-for-typedef-ident①" class="production css">&lt;ident&gt;</a> notation to definition of <a href="#css-identifier" id="ref-for-css-identifier③">identifiers</a>.
-   Added <a href="#typedef-length-percentage" id="ref-for-typedef-length-percentage④" class="production css">&lt;length-percentage&gt;</a> as a shorthand for <a href="#length-value" id="ref-for-length-value②⓪" class="production css" title="Expands to: em | advance measure | vh | ch | vw | pt | cm | mm | rem | q | pc | ex | in | vmax | pixel unit | vmin">&lt;length&gt;</a> | <a href="#percentage-value" id="ref-for-percentage-value②④" class="production css">&lt;percentage&gt;</a>, along with equivalent productions for angles, numbers, times, and frequencies.
-   Allowed <a href="#percentage-value" id="ref-for-percentage-value②⑤" class="production css">&lt;percentage&gt;</a>s inside <a href="#funcdef-calc" id="ref-for-funcdef-calc②⑦" class="css">calc()</a> to resolve as their own type, if they occur in some (as yet theoretical) context where they are not compatible with any other type.
-   Various clarifications and editorial improvements.

Changes since the [30 July 2013 Candidate Recommendation](https://www.w3.org/TR/2013/CR-css3-values-20130730/) are:

-   Specified that, in the absence of font information, <span class="css">1ch</span> equal <span class="css">.5em</span>.
-   Added <a href="#Q" id="ref-for-Q②" class="css">Q</a> unit.
-   Relaxed unnecessary restrictions on <a href="#identifier-value" id="ref-for-identifier-value①②" class="production css">&lt;custom-ident&gt;</a>. Require specs referencing it to be clear about excluded keywords, because the new rule isn’t as simple.
-   Clarified relative URL resolution for embedded style sheets.
-   Clarified {A} variant of {A,B} notation.
-   Added notation for restricting the length of comma-separated lists specified with the <span class="css">\#</span> notation.
-   Clarified handling of <a href="https://www.w3.org/TR/css-values-4/#funcdef-toggle" id="ref-for-funcdef-toggle①" class="css">toggle()</a> when used in shorthand declarations.
-   Clarified that stringing together reorderable combinations allows interleaving.
-   Changed syntax references from the 2.1 grammar to the Syntax spec.

A [Disposition of Comments](https://drafts.csswg.org/css-values-3/issues-cr-2013) is available.

Changes since the [28 August 2012 Candidate Recommendation](https://www.w3.org/TR/2012/CR-css3-values-20120828/) are:

-   Corrected `wqname` in the <a href="#funcdef-attr" id="ref-for-funcdef-attr①②" class="css">attr()</a> syntax to `qname`
-   Made undefined namespace prefixes in <a href="#funcdef-attr" id="ref-for-funcdef-attr①③" class="css">attr()</a> invalidate the function.
-   <span id="change-2012-vwh-scrollbars"><a href="#change-2012-vwh-scrollbars" class="self-link"></a> Per [WG resolution](https://lists.w3.org/Archives/Public/www-style/2013Jan/0616.html), made [viewport-percentage units](#viewport-relative-lengths) respect scrollbars on the viewport unless <a href="https://www.w3.org/TR/css-overflow-3/#propdef-overflow" id="ref-for-propdef-overflow" class="property">overflow</a> is <a href="https://www.w3.org/TR/css-overflow-3/#valdef-overflow-auto" id="ref-for-valdef-overflow-auto" class="css">auto</a> (in which case they ignore the presence of scrollbars).</span>
-   Deferred exact definition of [viewport-percentage units](#viewport-relative-lengths) in paged media to [CSS Paged Media](https://www.w3.org/TR/css3-page/).
-   Added back the <a href="#identifier-value" id="ref-for-identifier-value①③" class="production css">&lt;custom-ident&gt;</a> term as a convenience notation, so that other specs can refer to it.

Changes since the [4 April 2013 Candidate Recommendation](https://www.w3.org/TR/2013/CR-css3-values-20130404/) are:

-   Noted that the list of <a href="#css-wide-keywords" id="ref-for-css-wide-keywords①">CSS-wide keywords</a> may be expanded by other specs.
-   Clarified definition of <a href="#ex" id="ref-for-ex③" class="css">ex</a> to refer to the “first available font”.
-   Specified that <a href="#funcdef-attr" id="ref-for-funcdef-attr①④" class="css">attr()</a> with <a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value-string" id="ref-for-valdef-type-or-value-string③" class="css">string</a> or <a href="https://www.w3.org/TR/css-values-4/#valdef-type-or-value-url" id="ref-for-valdef-type-or-value-url①" class="css">url</a> types doesn’t reparse the attribute contents, just takes the value literally as the value of a <a href="#string-value" id="ref-for-string-value⑦" class="production css">&lt;string&gt;</a>.

<span class="content"> Security and Privacy Considerations</span><a href="#sec-pri" class="self-link"></a>
----------------------------------------------------------------------------------------------------------

This specification mostly just defines units that are common to CSS specifications, and which present no security concerns.

Note: Does URL handling have a security concern? Probably.

This specification defines units that expose the user’s screen size and default font size, but both are trivially observable from JS, so they do not constitutate a new privacy risk.

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

### <span class="content"> CR exit criteria</span><a href="#cr-exit-criteria" class="self-link"></a>

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

-   [||](#comb-any), in §2.2
-   [,](#comb-comma), in §2.1
-   [|](#comb-one), in §2.2
-   [\#](#mult-comma), in §2.3
-   [+](#mult-one-plus), in §2.3
-   [?](#mult-opt), in §2.3
-   [&&](#comb-all), in §2.2
-   [\*](#mult-zero-plus), in §2.3
-   [!](#mult-req), in §2.3
-   [{A}](#mult-num), in §2.3
-   [{A,B}](#mult-num-range), in §2.3
-   [absolute length](#absolute-length), in §5.2
-   [advance measure](#length-advance-measure), in §5.1.1
-   [anchor](#anchor-unit), in §5.2
-   [anchor unit](#anchor-unit), in §5.2
-   [&lt;angle&gt;](#angle-value), in §6.1
-   [&lt;angle-percentage&gt;](#typedef-angle-percentage), in §4.6
-   [attr()](#funcdef-attr), in §8.2
-   [&lt;attr-fallback&gt;](#typedef-attr-fallback), in §8.2
-   [&lt;attr-name&gt;](#typedef-attr-name), in §8.2
-   [bearing angle](#bearing-angle), in §6.1
-   [bracketed range notation](#css-bracketed-range-notation), in §4.1
-   [calc()](#funcdef-calc), in §8.1
-   [&lt;calc-number-product&gt;](#typedef-calc-number-product), in §8.1.1
-   [&lt;calc-number-sum&gt;](#typedef-calc-number-sum), in §8.1.1
-   [&lt;calc-number-value&gt;](#typedef-calc-number-value), in §8.1.1
-   [&lt;calc-product&gt;](#typedef-calc-product), in §8.1.1
-   [&lt;calc-sum&gt;](#typedef-calc-sum), in §8.1.1
-   [&lt;calc-value&gt;](#typedef-calc-value), in §8.1.1
-   [canonical](#canonical-unit), in §4.4.1
-   [canonical unit](#canonical-unit), in §4.4.1
-   [ch](#ch), in §5.1.1
-   [cm](#cm), in §5.2
-   [compatible](#compatible-units), in §4.4.1
-   [compatible units](#compatible-units), in §4.4.1
-   [CSS bracketed range notation](#css-bracketed-range-notation), in §4.1
-   [CSS ident](#css-identifier), in §3
-   [CSS identifier](#css-identifier), in §3
-   [CSS-wide keywords](#css-wide-keywords), in §3.1.1
-   [&lt;custom-ident&gt;](#identifier-value), in §3.2
-   [deg](#deg), in §6.1
-   [&lt;dimension&gt;](#typedef-dimension), in §4.4
-   [dimension](#dimension), in §4.4
-   [dpcm](#dpcm), in §6.4
-   [dpi](#dpi), in §6.4
-   [dppx](#dppx), in §6.4
-   [em](#em), in §5.1.1
-   [ex](#ex), in §5.1.1
-   [font-relative lengths](#font-relative-length), in §5.1.1
-   [&lt;frequency&gt;](#frequency-value), in §6.3
-   [&lt;frequency-percentage&gt;](#typedef-frequency-percentage), in §4.6
-   [functional notation](#functional-notation), in §8
-   [grad](#grad), in §6.1
-   [Hz](#Hz), in §6.3
-   [&lt;ident&gt;](#typedef-ident), in §3
-   [ident](#css-identifier), in §3
-   [identifier](#css-identifier), in §3
-   [in](#in), in §5.2
-   [&lt;integer&gt;](#integer-value), in §4.2
-   [integer](#integer), in §4.2
-   [kHz](#kHz), in §6.3
-   [&lt;length&gt;](#length-value), in §5
-   [&lt;length-percentage&gt;](#typedef-length-percentage), in §4.6
-   [local url flag](#url-local-url-flag), in §3.4.1.1
-   [mm](#mm), in §5.2
-   [ms](#ms), in §6.2
-   [&lt;number&gt;](#number-value), in §4.3
-   [number](#number), in §4.3
-   [&lt;number-percentage&gt;](#typedef-number-percentage), in §4.6
-   [numeric data types](#numeric-data-types), in §4
-   [pc](#pc), in §5.2
-   [&lt;percentage&gt;](#percentage-value), in §4.5
-   [percentage](#percentage), in §4.5
-   [physical units](#physical-units), in §5.2
-   [pixel unit](#px), in §5.2
-   [&lt;position&gt;](#typedef-position), in §7.3
-   [pt](#pt), in §5.2
-   [px](#px), in §5.2
-   [Q](#Q), in §5.2
-   [rad](#rad), in §6.1
-   [reference pixel](#reference-pixel), in §5.2
-   [relative length](#relative-length), in §5.1
-   [rem](#rem), in §5.1.1
-   [&lt;resolution&gt;](#resolution-value), in §6.4
-   [resolved type](#resolved-type), in §8.1.2
-   [s](#s), in §6.2
-   [string](#string), in §3.3
-   [&lt;string&gt;](#string-value), in §3.3
-   [textual data types](#textual-data-types), in §3
-   [&lt;time&gt;](#time-value), in §6.2
-   [&lt;time-percentage&gt;](#typedef-time-percentage), in §4.6
-   [turn](#turn), in §6.1
-   [&lt;type-or-unit&gt;](#typedef-type-or-unit), in §8.2
-   [url()](#funcdef-url), in §3.4
-   [URL](#url), in §3.4
-   [&lt;url&gt;](#url-value), in §3.4
-   [&lt;url-modifier&gt;](#typedef-url-modifier), in §3.4.3
-   [value definition syntax](#css-value-definition-syntax), in §2
-   [vh](#vh), in §5.1.2
-   [viewport-percentage lengths](#viewport-percentage-lengths), in §5.1.2
-   [visual angle unit](#visual-angle-unit), in §5.2
-   [vmax](#vmax), in §5.1.2
-   [vmin](#vmin), in §5.1.2
-   [vw](#vw), in §5.1.2

<https://www.w3.org/TR/css3-animations/#propdef-animation>**Referenced in:**

-   [3.2. Author-defined Identifiers: the &lt;custom-ident&gt; type](#ref-for-propdef-animation)

<https://www.w3.org/TR/css3-animations/#propdef-animation-name>**Referenced in:**

-   [3.2. Author-defined Identifiers: the &lt;custom-ident&gt; type](#ref-for-propdef-animation-name)

<https://www.w3.org/TR/css3-animations/#propdef-animation-timing-function>**Referenced in:**

-   [3.2. Author-defined Identifiers: the &lt;custom-ident&gt; type](#ref-for-propdef-animation-timing-function) [(2)](#ref-for-propdef-animation-timing-function①)

<https://www.w3.org/TR/css-box-3/#propdef-padding-top>**Referenced in:**

-   [2.6. Property Value Examples](#ref-for-propdef-padding-top)

<https://www.w3.org/TR/css3-break/#propdef-orphans>**Referenced in:**

-   [2.6. Property Value Examples](#ref-for-propdef-orphans)

<https://www.w3.org/TR/css-cascade-4/#at-ruledef-import>**Referenced in:**

-   [3.4. Resource Locators: the &lt;url&gt; type](#ref-for-at-ruledef-import)

<https://www.w3.org/TR/css-cascade-4/#actual-value>**Referenced in:**

-   [5. Distance Units: the &lt;length&gt; type](#ref-for-actual-value)

<https://www.w3.org/TR/css-cascade-4/#computed-value>**Referenced in:**

-   [4.4.1. Compatible Units](#ref-for-computed-value)
-   [5.1. Relative Lengths](#ref-for-computed-value①)
-   [8.1.3. Computed Value](#ref-for-computed-value②)
-   [8.1.4. Range Checking](#ref-for-computed-value③)

<https://www.w3.org/TR/css-cascade-4/#valdef-all-inherit>**Referenced in:**

-   [2.1. Component Value Types](#ref-for-valdef-all-inherit)
-   [3.1.1. CSS-wide keywords: initial, inherit and unset](#ref-for-valdef-all-inherit①) [(2)](#ref-for-valdef-all-inherit②) [(3)](#ref-for-valdef-all-inherit③)

<https://www.w3.org/TR/css-cascade-4/#valdef-all-initial>**Referenced in:**

-   [3.1.1. CSS-wide keywords: initial, inherit and unset](#ref-for-valdef-all-initial) [(2)](#ref-for-valdef-all-initial①) [(3)](#ref-for-valdef-all-initial②)

<https://www.w3.org/TR/css-cascade-4/#specified-value>**Referenced in:**

-   [8.1.4. Range Checking](#ref-for-specified-value)

<https://www.w3.org/TR/css-cascade-4/#valdef-all-unset>**Referenced in:**

-   [3.1.1. CSS-wide keywords: initial, inherit and unset](#ref-for-valdef-all-unset) [(2)](#ref-for-valdef-all-unset①)

<https://www.w3.org/TR/css-cascade-4/#used-value>**Referenced in:**

-   [4.4.1. Compatible Units](#ref-for-used-value) [(2)](#ref-for-used-value①)
-   [5. Distance Units: the &lt;length&gt; type](#ref-for-used-value②)
-   [8.1.4. Range Checking](#ref-for-used-value③)

<https://www.w3.org/TR/css-color-4/#valdef-color-currentcolor>**Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-valdef-color-currentcolor)

<https://www.w3.org/TR/css-color-4/#funcdef-hsl>**Referenced in:**

-   [4.6. Mixing Percentages and Dimensions](#ref-for-funcdef-hsl)

<https://www.w3.org/TR/css-color-4/#propdef-opacity>**Referenced in:**

-   [8.1.2. Type Checking](#ref-for-propdef-opacity) [(2)](#ref-for-propdef-opacity①) [(3)](#ref-for-propdef-opacity②)

<https://www.w3.org/TR/css-color-4/#funcdef-rgba>**Referenced in:**

-   [8. Functional Notations](#ref-for-funcdef-rgba)

<https://www.w3.org/TR/css-counter-styles-3/#disc>**Referenced in:**

-   [2.1. Component Value Types](#ref-for-disc)

<https://www.w3.org/TR/css-display-3/#containing-block>**Referenced in:**

-   [4.5. Percentages: the &lt;percentage&gt; type](#ref-for-containing-block)

<https://www.w3.org/TR/css-easing-1/#typedef-easing-function>**Referenced in:**

-   [3.2. Author-defined Identifiers: the &lt;custom-ident&gt; type](#ref-for-typedef-easing-function)

<https://www.w3.org/TR/css-easing-1/#valdef-cubic-bezier-easing-function-ease-in>**Referenced in:**

-   [3.2. Author-defined Identifiers: the &lt;custom-ident&gt; type](#ref-for-valdef-cubic-bezier-easing-function-ease-in)

<https://www.w3.org/TR/css-easing-1/#valdef-cubic-bezier-easing-function-ease-out>**Referenced in:**

-   [3.2. Author-defined Identifiers: the &lt;custom-ident&gt; type](#ref-for-valdef-cubic-bezier-easing-function-ease-out)

<https://www.w3.org/TR/css-grid-1/#valdef-flex-fr>**Referenced in:**

-   [4. Numeric Data Types](#ref-for-valdef-flex-fr)

<https://www.w3.org/TR/css4-images/#propdef-image-resolution>**Referenced in:**

-   [6.4. Resolution Units: the &lt;resolution&gt; type and dpi, dpcm, dppx units](#ref-for-propdef-image-resolution) [(2)](#ref-for-propdef-image-resolution①)

<https://www.w3.org/TR/css-overflow-3/#valdef-overflow-auto>**Referenced in:**

-   [Changes](#ref-for-valdef-overflow-auto)

<https://www.w3.org/TR/css-overflow-3/#propdef-overflow>**Referenced in:**

-   [Changes](#ref-for-propdef-overflow)

<https://www.w3.org/TR/css-sizing-3/#valdef-width-auto>**Referenced in:**

-   [8.1.3. Computed Value](#ref-for-valdef-width-auto)

<https://www.w3.org/TR/css-text-3/#valdef-text-align-center>**Referenced in:**

-   [2.6. Property Value Examples](#ref-for-valdef-text-align-center)

<https://www.w3.org/TR/css-text-3/#propdef-tab-size>**Referenced in:**

-   [8.1.2. Type Checking](#ref-for-propdef-tab-size)

<https://www.w3.org/TR/css-text-3/#propdef-text-align>**Referenced in:**

-   [2.6. Property Value Examples](#ref-for-propdef-text-align)

<https://www.w3.org/TR/css-text-decor-3/#propdef-text-decoration>**Referenced in:**

-   [2.6. Property Value Examples](#ref-for-propdef-text-decoration)

<https://www.w3.org/TR/css-text-decor-3/#propdef-text-shadow>**Referenced in:**

-   [2.6. Property Value Examples](#ref-for-propdef-text-shadow)

<https://www.w3.org/TR/css-transforms-1/#propdef-transform-origin>**Referenced in:**

-   [7.3. 2D Positioning: the &lt;position&gt; type](#ref-for-propdef-transform-origin)

<https://www.w3.org/TR/css3-ui/#valdef-cursor-default>**Referenced in:**

-   [3.2. Author-defined Identifiers: the &lt;custom-ident&gt; type](#ref-for-valdef-cursor-default)

<https://www.w3.org/TR/css3-ui/#propdef-outline-color>**Referenced in:**

-   [2.6. Property Value Examples](#ref-for-propdef-outline-color)

<https://www.w3.org/TR/css-values-4/#valdef-type-or-value>**Referenced in:**

-   [4.5. Percentages: the &lt;percentage&gt; type](#ref-for-valdef-type-or-value)
-   [8.2. Attribute References: attr()](#ref-for-valdef-type-or-value①)

<https://www.w3.org/TR/css-values-4/#valdef-type-or-value-angle>**Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-valdef-type-or-value-angle)

<https://www.w3.org/TR/css-values-4/#valdef-type-or-value-frequency>**Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-valdef-type-or-value-frequency)

<https://www.w3.org/TR/css-values-4/#valdef-type-or-value-integer>**Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-valdef-type-or-value-integer)

<https://www.w3.org/TR/css-values-4/#valdef-type-or-value-length>**Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-valdef-type-or-value-length)

<https://www.w3.org/TR/css-values-4/#valdef-type-or-value-number>**Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-valdef-type-or-value-number)

<https://www.w3.org/TR/css-values-4/#valdef-type-or-value-string>**Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-valdef-type-or-value-string) [(2)](#ref-for-valdef-type-or-value-string①) [(3)](#ref-for-valdef-type-or-value-string②)
-   [Changes](#ref-for-valdef-type-or-value-string③)

<https://www.w3.org/TR/css-values-4/#valdef-type-or-value-time>**Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-valdef-type-or-value-time)

<https://www.w3.org/TR/css-values-4/#funcdef-toggle>**Referenced in:**

-   [Changes](#ref-for-funcdef-toggle) [(2)](#ref-for-funcdef-toggle①)

<https://www.w3.org/TR/css-values-4/#valdef-type-or-value-url>**Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-valdef-type-or-value-url)
-   [Changes](#ref-for-valdef-type-or-value-url①)

<https://www.w3.org/TR/css-writing-modes-4/#propdef-text-orientation>**Referenced in:**

-   [5.1.1. Font-relative Lengths: the em, ex, ch, rem units](#ref-for-propdef-text-orientation)

<https://www.w3.org/TR/css-writing-modes-4/#valdef-text-orientation-upright>**Referenced in:**

-   [5.1.1. Font-relative Lengths: the em, ex, ch, rem units](#ref-for-valdef-text-orientation-upright)

<https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-vertical-lr>**Referenced in:**

-   [5.1.1. Font-relative Lengths: the em, ex, ch, rem units](#ref-for-valdef-writing-mode-vertical-lr)

<https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-vertical-rl>**Referenced in:**

-   [5.1.1. Font-relative Lengths: the em, ex, ch, rem units](#ref-for-valdef-writing-mode-vertical-rl)

<https://www.w3.org/TR/css-writing-modes-4/#propdef-writing-mode>**Referenced in:**

-   [5.1.1. Font-relative Lengths: the em, ex, ch, rem units](#ref-for-propdef-writing-mode)

<https://www.w3.org/TR/CSS21/box.html#value-def-border-width>**Referenced in:**

-   [2.1. Component Value Types](#ref-for-value-def-border-width)

<https://www.w3.org/TR/CSS21/tables.html#propdef-border-collapse>**Referenced in:**

-   [3.1. Pre-defined Keywords](#ref-for-propdef-border-collapse)

<https://www.w3.org/TR/CSS21/visudet.html#propdef-line-height>**Referenced in:**

-   [5. Distance Units: the &lt;length&gt; type](#ref-for-propdef-line-height)
-   [8.1.2. Type Checking](#ref-for-propdef-line-height①)

<https://www.w3.org/TR/CSS21/visudet.html#propdef-width>**Referenced in:**

-   [4.6. Mixing Percentages and Dimensions](#ref-for-propdef-width) [(2)](#ref-for-propdef-width①) [(3)](#ref-for-propdef-width②) [(4)](#ref-for-propdef-width③) [(5)](#ref-for-propdef-width④) [(6)](#ref-for-propdef-width⑤) [(7)](#ref-for-propdef-width⑥)
-   [8.1.2. Type Checking](#ref-for-propdef-width⑦) [(2)](#ref-for-propdef-width⑧) [(3)](#ref-for-propdef-width⑨) [(4)](#ref-for-propdef-width①⓪)
-   [8.1.4. Range Checking](#ref-for-propdef-width①①) [(2)](#ref-for-propdef-width①②)
-   [8.2. Attribute References: attr()](#ref-for-propdef-width①③)

<https://www.w3.org/TR/css3-background/#propdef-background>**Referenced in:**

-   [2.1. Component Value Types](#ref-for-propdef-background)

<https://www.w3.org/TR/css3-background/#propdef-background-attachment>**Referenced in:**

-   [2.1. Component Value Types](#ref-for-propdef-background-attachment)

<https://www.w3.org/TR/css3-background/#propdef-background-position>**Referenced in:**

-   [7.3. 2D Positioning: the &lt;position&gt; type](#ref-for-propdef-background-position) [(2)](#ref-for-propdef-background-position①)
-   [8.1.3. Computed Value](#ref-for-propdef-background-position②) [(2)](#ref-for-propdef-background-position③)
-   [Changes](#ref-for-propdef-background-position④)

<https://www.w3.org/TR/css3-background/#propdef-border-color>**Referenced in:**

-   [2.1. Component Value Types](#ref-for-propdef-border-color)

<https://www.w3.org/TR/css3-background/#propdef-border-width>**Referenced in:**

-   [2.1. Component Value Types](#ref-for-propdef-border-width) [(2)](#ref-for-propdef-border-width①) [(3)](#ref-for-propdef-border-width②)
-   [2.6. Property Value Examples](#ref-for-propdef-border-width③)

<https://www.w3.org/TR/css3-background/#propdef-box-shadow>**Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-propdef-box-shadow)

<https://www.w3.org/TR/css3-background/#shadow-inset>**Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-shadow-inset)

<https://www.w3.org/TR/css-fonts-3/#propdef-font>**Referenced in:**

-   [5.1.1. Font-relative Lengths: the em, ex, ch, rem units](#ref-for-propdef-font) [(2)](#ref-for-propdef-font①)

<https://www.w3.org/TR/css-fonts-3/#propdef-font-family>**Referenced in:**

-   [2.6. Property Value Examples](#ref-for-propdef-font-family)

<https://www.w3.org/TR/css-fonts-3/#propdef-font-size>**Referenced in:**

-   [4.4.1. Compatible Units](#ref-for-propdef-font-size)
-   [5.1.1. Font-relative Lengths: the em, ex, ch, rem units](#ref-for-propdef-font-size①) [(2)](#ref-for-propdef-font-size②) [(3)](#ref-for-propdef-font-size③) [(4)](#ref-for-propdef-font-size④) [(5)](#ref-for-propdef-font-size⑤)
-   [8.1. Mathematical Expressions: calc()](#ref-for-propdef-font-size⑥)
-   [8.1.3. Computed Value](#ref-for-propdef-font-size⑦) [(2)](#ref-for-propdef-font-size⑧)

<https://www.w3.org/TR/css3-images/#image-type>**Referenced in:**

-   [7.2. Images: the &lt;image&gt; type](#ref-for-image-type) [(2)](#ref-for-image-type①) [(3)](#ref-for-image-type②) [(4)](#ref-for-image-type③)

<https://drafts.csswg.org/css-images-3/#funcdef-linear-gradient>**Referenced in:**

-   [6.1. Angle Units: the &lt;angle&gt; type and deg, grad, rad, turn units](#ref-for-funcdef-linear-gradient)

<https://www.w3.org/TR/css3-images/#object-position>**Referenced in:**

-   [Changes](#ref-for-object-position)

<https://www.w3.org/TR/css3-color/#valuea-def-color>**Referenced in:**

-   [7.1. Colors: the &lt;color&gt; type](#ref-for-valuea-def-color) [(2)](#ref-for-valuea-def-color①) [(3)](#ref-for-valuea-def-color②)
-   [8.2. Attribute References: attr()](#ref-for-valuea-def-color③)

<https://www.w3.org/TR/css-syntax-3/#typedef-dimension-token>**Referenced in:**

-   [2.5. Component Values and White Space](#ref-for-typedef-dimension-token)
-   [4.4. Numbers with Units: dimension values](#ref-for-typedef-dimension-token①)
-   [8.1.2. Type Checking](#ref-for-typedef-dimension-token②)
-   [8.2. Attribute References: attr()](#ref-for-typedef-dimension-token③)

<https://www.w3.org/TR/css-syntax-3/#typedef-function-token>**Referenced in:**

-   [8. Functional Notations](#ref-for-typedef-function-token)

<https://www.w3.org/TR/css-syntax-3/#typedef-hash-token>**Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-typedef-hash-token)

<https://www.w3.org/TR/css-syntax-3/#typedef-ident-token>**Referenced in:**

-   [3. Textual Data Types](#ref-for-typedef-ident-token)
-   [8.2. Attribute References: attr()](#ref-for-typedef-ident-token①)

<https://www.w3.org/TR/css-syntax-3/#typedef-number-token>**Referenced in:**

-   [4.2. Integers: the &lt;integer&gt; type](#ref-for-typedef-number-token)
-   [4.3. Real Numbers: the &lt;number&gt; type](#ref-for-typedef-number-token①)
-   [8.1.2. Type Checking](#ref-for-typedef-number-token②) [(2)](#ref-for-typedef-number-token③)
-   [8.2. Attribute References: attr()](#ref-for-typedef-number-token④) [(2)](#ref-for-typedef-number-token⑤) [(3)](#ref-for-typedef-number-token⑥)

<https://www.w3.org/TR/css-syntax-3/#typedef-percentage-token>**Referenced in:**

-   [4.5. Percentages: the &lt;percentage&gt; type](#ref-for-typedef-percentage-token)
-   [8.1.2. Type Checking](#ref-for-typedef-percentage-token①)

<https://www.w3.org/TR/css-syntax-3/#typedef-string-token>**Referenced in:**

-   [3.3. Quoted Strings: the &lt;string&gt; type](#ref-for-typedef-string-token)

<https://www.w3.org/TR/css-syntax-3/#typedef-url-token>**Referenced in:**

-   [3.4. Resource Locators: the &lt;url&gt; type](#ref-for-typedef-url-token)

<https://drafts.csswg.org/css-syntax-3/#component-value>**Referenced in:**

-   [2.4. Combinator and Multiplier Patterns](#ref-for-component-value)
-   [4.6. Mixing Percentages and Dimensions](#ref-for-component-value①)

<https://www.w3.org/TR/css-syntax-3/#consume-a-url-token0>**Referenced in:**

-   [3.4. Resource Locators: the &lt;url&gt; type](#ref-for-consume-a-url-token0)

<https://html.spec.whatwg.org/multipage/semantics.html#the-base-element>**Referenced in:**

-   [3.4.1.1. Fragment URLs](#ref-for-the-base-element)

<https://html.spec.whatwg.org/multipage/history.html#dom-history-pushstate>**Referenced in:**

-   [3.4.1.1. Fragment URLs](#ref-for-dom-history-pushstate)

<https://infra.spec.whatwg.org/#ascii-case-insensitive>**Referenced in:**

-   [3.1. Pre-defined Keywords](#ref-for-ascii-case-insensitive)
-   [3.2. Author-defined Identifiers: the &lt;custom-ident&gt; type](#ref-for-ascii-case-insensitive①)
-   [4.4. Numbers with Units: dimension values](#ref-for-ascii-case-insensitive②)

<https://www.w3.org/TR/mediaqueries-4/#media-query>**Referenced in:**

-   [5.1.1. Font-relative Lengths: the em, ex, ch, rem units](#ref-for-media-query)

<https://www.w3.org/TR/css3-selectors/#x>**Referenced in:**

-   [2.3. Component Value Multipliers](#ref-for-x)
-   [8.1. Mathematical Expressions: calc()](#ref-for-x①)
-   [8.1.1. Syntax](#ref-for-x②)
-   [8.1.2. Type Checking](#ref-for-x③)

<https://www.w3.org/TR/selectors4/#selectordef-adjacent>**Referenced in:**

-   [2.3. Component Value Multipliers](#ref-for-selectordef-adjacent)
-   [4.3. Real Numbers: the &lt;number&gt; type](#ref-for-selectordef-adjacent①)
-   [8.1. Mathematical Expressions: calc()](#ref-for-selectordef-adjacent②)
-   [8.1.1. Syntax](#ref-for-selectordef-adjacent③)
-   [8.1.2. Type Checking](#ref-for-selectordef-adjacent④)

<https://www.w3.org/TR/selectors4/#selectordef-child>**Referenced in:**

-   [1. Introduction](#ref-for-selectordef-child)
-   [2.1. Component Value Types](#ref-for-selectordef-child①) [(2)](#ref-for-selectordef-child②)

### <span class="content">Terms defined by reference</span><a href="#index-defined-elsewhere" class="self-link"></a>

-   \[css-animations-1\] defines the following terms:
    -   <span id="term-for-propdef-animation" class="dfn-paneled" style="color:initial">animation</span>
    -   <span id="term-for-propdef-animation-name" class="dfn-paneled" style="color:initial">animation-name</span>
    -   <span id="term-for-propdef-animation-timing-function" class="dfn-paneled" style="color:initial">animation-timing-function</span>
-   \[css-box-3\] defines the following terms:
    -   <span id="term-for-propdef-padding-top" class="dfn-paneled" style="color:initial">padding-top</span>
-   \[css-break-3\] defines the following terms:
    -   <span id="term-for-propdef-orphans" class="dfn-paneled" style="color:initial">orphans</span>
-   \[css-cascade-4\] defines the following terms:
    -   <span id="term-for-at-ruledef-import" class="dfn-paneled" style="color:initial">@import</span>
    -   <span id="term-for-actual-value" class="dfn-paneled" style="color:initial">actual value</span>
    -   <span id="term-for-computed-value" class="dfn-paneled" style="color:initial">computed value</span>
    -   <span id="term-for-valdef-all-inherit" class="dfn-paneled" style="color:initial">inherit</span>
    -   <span id="term-for-valdef-all-initial" class="dfn-paneled" style="color:initial">initial</span>
    -   <span id="term-for-specified-value" class="dfn-paneled" style="color:initial">specified value</span>
    -   <span id="term-for-valdef-all-unset" class="dfn-paneled" style="color:initial">unset</span>
    -   <span id="term-for-used-value" class="dfn-paneled" style="color:initial">used value</span>
-   \[css-color-4\] defines the following terms:
    -   <span id="term-for-valdef-color-currentcolor" class="dfn-paneled" style="color:initial">currentcolor</span>
    -   <span id="term-for-funcdef-hsl" class="dfn-paneled" style="color:initial">hsl()</span>
    -   <span id="term-for-propdef-opacity" class="dfn-paneled" style="color:initial">opacity</span>
    -   <span id="term-for-funcdef-rgba" class="dfn-paneled" style="color:initial">rgba()</span>
-   \[css-counter-styles-3\] defines the following terms:
    -   <span id="term-for-disc" class="dfn-paneled" style="color:initial">disc</span>
-   \[css-display-3\] defines the following terms:
    -   <span id="term-for-containing-block" class="dfn-paneled" style="color:initial">containing block</span>
-   \[css-easing-1\] defines the following terms:
    -   <span id="term-for-typedef-easing-function" class="dfn-paneled" style="color:initial">&lt;easing-function&gt;</span>
    -   <span id="term-for-valdef-cubic-bezier-easing-function-ease-in" class="dfn-paneled" style="color:initial">ease-in</span>
    -   <span id="term-for-valdef-cubic-bezier-easing-function-ease-out" class="dfn-paneled" style="color:initial">ease-out</span>
-   \[css-grid-1\] defines the following terms:
    -   <span id="term-for-valdef-flex-fr" class="dfn-paneled" style="color:initial">fr</span>
-   \[css-images-4\] defines the following terms:
    -   <span id="term-for-propdef-image-resolution" class="dfn-paneled" style="color:initial">image-resolution</span>
-   \[css-overflow-3\] defines the following terms:
    -   <span id="term-for-valdef-overflow-auto" class="dfn-paneled" style="color:initial">auto</span>
    -   <span id="term-for-propdef-overflow" class="dfn-paneled" style="color:initial">overflow</span>
-   \[css-sizing-3\] defines the following terms:
    -   <span id="term-for-valdef-width-auto" class="dfn-paneled" style="color:initial">auto</span>
-   \[css-text-3\] defines the following terms:
    -   <span id="term-for-valdef-text-align-center" class="dfn-paneled" style="color:initial">center</span>
    -   <span id="term-for-propdef-tab-size" class="dfn-paneled" style="color:initial">tab-size</span>
    -   <span id="term-for-propdef-text-align" class="dfn-paneled" style="color:initial">text-align</span>
-   \[css-text-decor-3\] defines the following terms:
    -   <span id="term-for-propdef-text-decoration" class="dfn-paneled" style="color:initial">text-decoration</span>
    -   <span id="term-for-propdef-text-shadow" class="dfn-paneled" style="color:initial">text-shadow</span>
-   \[CSS-TRANSFORMS-1\] defines the following terms:
    -   <span id="term-for-propdef-transform-origin" class="dfn-paneled" style="color:initial">transform-origin</span>
-   \[css-ui-3\] defines the following terms:
    -   <span id="term-for-valdef-cursor-default" class="dfn-paneled" style="color:initial">default</span>
    -   <span id="term-for-propdef-outline-color" class="dfn-paneled" style="color:initial">outline-color</span>
-   \[css-values-4\] defines the following terms:
    -   <span id="term-for-valdef-type-or-value" class="dfn-paneled" style="color:initial">%</span>
    -   <span id="term-for-valdef-type-or-value-angle" class="dfn-paneled" style="color:initial">angle</span>
    -   <span id="term-for-valdef-type-or-value-frequency" class="dfn-paneled" style="color:initial">frequency</span>
    -   <span id="term-for-valdef-type-or-value-integer" class="dfn-paneled" style="color:initial">integer</span>
    -   <span id="term-for-valdef-type-or-value-length" class="dfn-paneled" style="color:initial">length</span>
    -   <span id="term-for-valdef-type-or-value-number" class="dfn-paneled" style="color:initial">number</span>
    -   <span id="term-for-valdef-type-or-value-string" class="dfn-paneled" style="color:initial">string</span>
    -   <span id="term-for-valdef-type-or-value-time" class="dfn-paneled" style="color:initial">time</span>
    -   <span id="term-for-funcdef-toggle" class="dfn-paneled" style="color:initial">toggle()</span>
    -   <span id="term-for-valdef-type-or-value-url" class="dfn-paneled" style="color:initial">url</span>
-   \[css-writing-modes-4\] defines the following terms:
    -   <span id="term-for-propdef-text-orientation" class="dfn-paneled" style="color:initial">text-orientation</span>
    -   <span id="term-for-valdef-text-orientation-upright" class="dfn-paneled" style="color:initial">upright</span>
    -   <span id="term-for-valdef-writing-mode-vertical-lr" class="dfn-paneled" style="color:initial">vertical-lr</span>
    -   <span id="term-for-valdef-writing-mode-vertical-rl" class="dfn-paneled" style="color:initial">vertical-rl</span>
    -   <span id="term-for-propdef-writing-mode" class="dfn-paneled" style="color:initial">writing-mode</span>
-   \[CSS21\] defines the following terms:
    -   <span id="term-for-value-def-border-width" class="dfn-paneled" style="color:initial">&lt;border-width&gt;</span>
    -   <span id="term-for-propdef-border-collapse" class="dfn-paneled" style="color:initial">border-collapse</span>
    -   <span id="term-for-propdef-line-height" class="dfn-paneled" style="color:initial">line-height</span>
    -   <span id="term-for-propdef-width" class="dfn-paneled" style="color:initial">width</span>
-   \[CSS3-BACKGROUND\] defines the following terms:
    -   <span id="term-for-propdef-background" class="dfn-paneled" style="color:initial">background</span>
    -   <span id="term-for-propdef-background-attachment" class="dfn-paneled" style="color:initial">background-attachment</span>
    -   <span id="term-for-propdef-background-position" class="dfn-paneled" style="color:initial">background-position</span>
    -   <span id="term-for-propdef-border-color" class="dfn-paneled" style="color:initial">border-color</span>
    -   <span id="term-for-propdef-border-width" class="dfn-paneled" style="color:initial">border-width</span>
    -   <span id="term-for-propdef-box-shadow" class="dfn-paneled" style="color:initial">box-shadow</span>
    -   <span id="term-for-shadow-inset" class="dfn-paneled" style="color:initial">inset</span>
-   \[CSS3-FONTS\] defines the following terms:
    -   <span id="term-for-propdef-font" class="dfn-paneled" style="color:initial">font</span>
    -   <span id="term-for-propdef-font-family" class="dfn-paneled" style="color:initial">font-family</span>
    -   <span id="term-for-propdef-font-size" class="dfn-paneled" style="color:initial">font-size</span>
-   \[CSS3-IMAGES\] defines the following terms:
    -   <span id="term-for-image-type" class="dfn-paneled" style="color:initial">&lt;image&gt;</span>
    -   <span id="term-for-funcdef-linear-gradient" class="dfn-paneled" style="color:initial">linear-gradient()</span>
    -   <span id="term-for-object-position" class="dfn-paneled" style="color:initial">object-position</span>
-   \[CSS3COLOR\] defines the following terms:
    -   <span id="term-for-valuea-def-color" class="dfn-paneled" style="color:initial">&lt;color&gt;</span>
-   \[CSS3SYN\] defines the following terms:
    -   <span id="term-for-typedef-dimension-token" class="dfn-paneled" style="color:initial">&lt;dimension-token&gt;</span>
    -   <span id="term-for-typedef-function-token" class="dfn-paneled" style="color:initial">&lt;function-token&gt;</span>
    -   <span id="term-for-typedef-hash-token" class="dfn-paneled" style="color:initial">&lt;hash-token&gt;</span>
    -   <span id="term-for-typedef-ident-token" class="dfn-paneled" style="color:initial">&lt;ident-token&gt;</span>
    -   <span id="term-for-typedef-number-token" class="dfn-paneled" style="color:initial">&lt;number-token&gt;</span>
    -   <span id="term-for-typedef-percentage-token" class="dfn-paneled" style="color:initial">&lt;percentage-token&gt;</span>
    -   <span id="term-for-typedef-string-token" class="dfn-paneled" style="color:initial">&lt;string-token&gt;</span>
    -   <span id="term-for-typedef-url-token" class="dfn-paneled" style="color:initial">&lt;url-token&gt;</span>
    -   <span id="term-for-component-value" class="dfn-paneled" style="color:initial">component value</span>
    -   <span id="term-for-consume-a-url-token0" class="dfn-paneled" style="color:initial">consume a url token</span>
-   \[HTML\] defines the following terms:
    -   <span id="term-for-the-base-element" class="dfn-paneled" style="color:initial">base</span>
    -   <span id="term-for-dom-history-pushstate" class="dfn-paneled" style="color:initial">pushState(data, title)</span>
-   \[INFRA\] defines the following terms:
    -   <span id="term-for-ascii-case-insensitive" class="dfn-paneled" style="color:initial">ascii case-insensitive</span>
-   \[MEDIAQ\] defines the following terms:
    -   <span id="term-for-media-query" class="dfn-paneled" style="color:initial">media query</span>
-   \[selectors-3\] defines the following terms:
    -   <span id="term-for-x" class="dfn-paneled" style="color:initial">\*</span>
-   \[selectors-4\] defines the following terms:
    -   <span id="term-for-selectordef-adjacent" class="dfn-paneled" style="color:initial">+</span>
    -   <span id="term-for-selectordef-child" class="dfn-paneled" style="color:initial">&gt;</span>

<span class="content">References</span><a href="#references" class="self-link"></a>
-----------------------------------------------------------------------------------

### <span class="content">Normative References</span><a href="#normative" class="self-link"></a>

\[CSS-CASCADE-4\]   
Elika Etemad; Tab Atkins Jr.. [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/css-cascade-4/). 28 August 2018. CR. URL: <https://www.w3.org/TR/css-cascade-4/>

\[CSS-COLOR-4\]   
Tab Atkins Jr.; Chris Lilley. [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/). 5 March 2019. WD. URL: <https://www.w3.org/TR/css-color-4/>

\[CSS-COUNTER-STYLES-3\]   
Tab Atkins Jr.. [CSS Counter Styles Level 3](https://www.w3.org/TR/css-counter-styles-3/). 14 December 2017. CR. URL: <https://www.w3.org/TR/css-counter-styles-3/>

\[CSS-DISPLAY-3\]   
Tab Atkins Jr.; Elika Etemad. [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/). 28 August 2018. CR. URL: <https://www.w3.org/TR/css-display-3/>

\[CSS-IMAGES-4\]   
Tab Atkins Jr.; Elika Etemad; Lea Verou. [CSS Image Values and Replaced Content Module Level 4](https://www.w3.org/TR/css-images-4/). 13 April 2017. WD. URL: <https://www.w3.org/TR/css-images-4/>

\[CSS-OVERFLOW-3\]   
David Baron; Elika Etemad; Florian Rivoal. [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/). 31 July 2018. WD. URL: <https://www.w3.org/TR/css-overflow-3/>

\[CSS-SIZING-3\]   
Tab Atkins Jr.; Elika Etemad. [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/css-sizing-3/). 22 May 2019. WD. URL: <https://www.w3.org/TR/css-sizing-3/>

\[CSS-UI-3\]   
Tantek Çelik; Florian Rivoal. [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/css-ui-3/). 21 June 2018. REC. URL: <https://www.w3.org/TR/css-ui-3/>

\[CSS-VALUES-4\]   
Tab Atkins Jr.; Elika Etemad. [CSS Values and Units Module Level 4](https://www.w3.org/TR/css-values-4/). 31 January 2019. WD. URL: <https://www.w3.org/TR/css-values-4/>

\[CSS-WRITING-MODES-4\]   
Elika Etemad; Koji Ishii. [CSS Writing Modes Level 4](https://www.w3.org/TR/css-writing-modes-4/). 24 May 2018. CR. URL: <https://www.w3.org/TR/css-writing-modes-4/>

\[CSS21\]   
Bert Bos; et al. [Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification](https://www.w3.org/TR/CSS2/). 7 June 2011. REC. URL: <https://www.w3.org/TR/CSS2/>

\[CSS3-BACKGROUND\]   
Bert Bos; Elika Etemad; Brad Kemper. [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/css-backgrounds-3/). 17 October 2017. CR. URL: <https://www.w3.org/TR/css-backgrounds-3/>

\[CSS3-FONTS\]   
John Daggett; Myles Maxfield; Chris Lilley. [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3/). 20 September 2018. REC. URL: <https://www.w3.org/TR/css-fonts-3/>

\[CSS3-IMAGES\]   
Elika Etemad; Tab Atkins Jr.. [CSS Image Values and Replaced Content Module Level 3](https://www.w3.org/TR/css3-images/). 17 April 2012. CR. URL: <https://www.w3.org/TR/css3-images/>

\[CSS3CASCADE\]   
Elika Etemad; Tab Atkins Jr.. [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/css-cascade-3/). 28 August 2018. CR. URL: <https://www.w3.org/TR/css-cascade-3/>

\[CSS3COLOR\]   
Tantek Çelik; Chris Lilley; David Baron. [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/). 19 June 2018. REC. URL: <https://www.w3.org/TR/css-color-3/>

\[CSS3NAMESPACE\]   
Elika Etemad. [CSS Namespaces Module Level 3](https://www.w3.org/TR/css-namespaces-3/). 20 March 2014. REC. URL: <https://www.w3.org/TR/css-namespaces-3/>

\[CSS3PAGE\]   
Elika Etemad; Simon Sapin. [CSS Paged Media Module Level 3](https://www.w3.org/TR/css-page-3/). 18 October 2018. WD. URL: <https://www.w3.org/TR/css-page-3/>

\[CSS3SYN\]   
Tab Atkins Jr.; Simon Sapin. [CSS Syntax Module Level 3](https://www.w3.org/TR/css-syntax-3/). 20 February 2014. CR. URL: <https://www.w3.org/TR/css-syntax-3/>

\[CSSOM\]   
Simon Pieters; Glenn Adams. [CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1/). 17 March 2016. WD. URL: <https://www.w3.org/TR/cssom-1/>

\[INFRA\]   
Anne van Kesteren; Domenic Denicola. [Infra Standard](https://infra.spec.whatwg.org/). Living Standard. URL: <https://infra.spec.whatwg.org/>

\[MEDIAQ\]   
Florian Rivoal; Tab Atkins Jr.. [Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/). 5 September 2017. CR. URL: <https://www.w3.org/TR/mediaqueries-4/>

\[RFC2119\]   
S. Bradner. [Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

\[SELECTORS-3\]   
Tantek Çelik; et al. [Selectors Level 3](https://www.w3.org/TR/selectors-3/). 6 November 2018. REC. URL: <https://www.w3.org/TR/selectors-3/>

\[SELECTORS-4\]   
Elika Etemad; Tab Atkins Jr.. [Selectors Level 4](https://www.w3.org/TR/selectors-4/). 21 November 2018. WD. URL: <https://www.w3.org/TR/selectors-4/>

\[URL\]   
Anne van Kesteren. [URL Standard](https://url.spec.whatwg.org/). Living Standard. URL: <https://url.spec.whatwg.org/>

### <span class="content">Informative References</span><a href="#informative" class="self-link"></a>

\[CSS-ANIMATIONS-1\]   
Dean Jackson; et al. [CSS Animations Level 1](https://www.w3.org/TR/css-animations-1/). 11 October 2018. WD. URL: <https://www.w3.org/TR/css-animations-1/>

\[CSS-BOX-3\]   
Elika Etemad. [CSS Box Model Module Level 3](https://www.w3.org/TR/css-box-3/). 18 December 2018. WD. URL: <https://www.w3.org/TR/css-box-3/>

\[CSS-BREAK-3\]   
Rossen Atanassov; Elika Etemad. [CSS Fragmentation Module Level 3](https://www.w3.org/TR/css-break-3/). 4 December 2018. CR. URL: <https://www.w3.org/TR/css-break-3/>

\[CSS-EASING-1\]   
Brian Birtles; Dean Jackson; Matt Rakow. [CSS Easing Functions Level 1](https://www.w3.org/TR/css-easing-1/). 30 April 2019. CR. URL: <https://www.w3.org/TR/css-easing-1/>

\[CSS-GRID-1\]   
Tab Atkins Jr.; Elika Etemad; Rossen Atanassov. [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/). 14 December 2017. CR. URL: <https://www.w3.org/TR/css-grid-1/>

\[CSS-TEXT-3\]   
Elika Etemad; Koji Ishii; Florian Rivoal. [CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/). 12 December 2018. WD. URL: <https://www.w3.org/TR/css-text-3/>

\[CSS-TEXT-DECOR-3\]   
Elika Etemad; Koji Ishii. [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3/). 3 July 2018. CR. URL: <https://www.w3.org/TR/css-text-decor-3/>

\[CSS-TRANSFORMS-1\]   
Simon Fraser; et al. [CSS Transforms Module Level 1](https://www.w3.org/TR/css-transforms-1/). 14 February 2019. CR. URL: <https://www.w3.org/TR/css-transforms-1/>

\[HTML\]   
Anne van Kesteren; et al. [HTML Standard](https://html.spec.whatwg.org/multipage/). Living Standard. URL: <https://html.spec.whatwg.org/multipage/>

\[RFC6694\]   
S. Moonesamy, Ed.. [The "about" URI Scheme](https://tools.ietf.org/html/rfc6694). August 2012. Informational. URL: <https://tools.ietf.org/html/rfc6694>

**[\#css-value-definition-syntax](#css-value-definition-syntax)Referenced in:**

-   [Changes](#ref-for-css-value-definition-syntax)

**[\#comb-comma](#comb-comma)Referenced in:**

-   [2.1. Component Value Types](#ref-for-comb-comma) [(2)](#ref-for-comb-comma①)

**[\#comb-all](#comb-all)Referenced in:**

-   [7.3. 2D Positioning: the &lt;position&gt; type](#ref-for-comb-all)

**[\#comb-any](#comb-any)Referenced in:**

-   [7.3. 2D Positioning: the &lt;position&gt; type](#ref-for-comb-any)

**[\#comb-one](#comb-one)Referenced in:**

-   [4.6. Mixing Percentages and Dimensions](#ref-for-comb-one) [(2)](#ref-for-comb-one①) [(3)](#ref-for-comb-one②) [(4)](#ref-for-comb-one③) [(5)](#ref-for-comb-one④)
-   [7.3. 2D Positioning: the &lt;position&gt; type](#ref-for-comb-one⑤) [(2)](#ref-for-comb-one⑥) [(3)](#ref-for-comb-one⑦) [(4)](#ref-for-comb-one⑧) [(5)](#ref-for-comb-one⑨) [(6)](#ref-for-comb-one①⓪) [(7)](#ref-for-comb-one①①) [(8)](#ref-for-comb-one①②) [(9)](#ref-for-comb-one①③) [(10)](#ref-for-comb-one①④) [(11)](#ref-for-comb-one①⑤) [(12)](#ref-for-comb-one①⑥) [(13)](#ref-for-comb-one①⑦) [(14)](#ref-for-comb-one①⑧)
-   [8.1.1. Syntax](#ref-for-comb-one①⑨) [(2)](#ref-for-comb-one②⓪) [(3)](#ref-for-comb-one②①) [(4)](#ref-for-comb-one②②) [(5)](#ref-for-comb-one②③) [(6)](#ref-for-comb-one②④) [(7)](#ref-for-comb-one②⑤) [(8)](#ref-for-comb-one②⑥)

**[\#mult-zero-plus](#mult-zero-plus)Referenced in:**

-   [3.4. Resource Locators: the &lt;url&gt; type](#ref-for-mult-zero-plus)
-   [8.1.1. Syntax](#ref-for-mult-zero-plus①) [(2)](#ref-for-mult-zero-plus②) [(3)](#ref-for-mult-zero-plus③) [(4)](#ref-for-mult-zero-plus④)

**[\#mult-opt](#mult-opt)Referenced in:**

-   [2.1. Component Value Types](#ref-for-mult-opt) [(2)](#ref-for-mult-opt①) [(3)](#ref-for-mult-opt②)
-   [7.3. 2D Positioning: the &lt;position&gt; type](#ref-for-mult-opt③)

**[\#mult-comma](#mult-comma)Referenced in:**

-   [2.1. Component Value Types](#ref-for-mult-comma)

**[\#css-identifier](#css-identifier)Referenced in:**

-   [3.1. Pre-defined Keywords](#ref-for-css-identifier)
-   [3.2. Author-defined Identifiers: the &lt;custom-ident&gt; type](#ref-for-css-identifier①)
-   [4.4. Numbers with Units: dimension values](#ref-for-css-identifier②)
-   [Changes](#ref-for-css-identifier③)

**[\#typedef-ident](#typedef-ident)Referenced in:**

-   [3.4.3. URL Modifiers](#ref-for-typedef-ident)
-   [Changes](#ref-for-typedef-ident①)

**[\#css-wide-keywords](#css-wide-keywords)Referenced in:**

-   [3.2. Author-defined Identifiers: the &lt;custom-ident&gt; type](#ref-for-css-wide-keywords)
-   [Changes](#ref-for-css-wide-keywords①)

**[\#identifier-value](#identifier-value)Referenced in:**

-   [2.1. Component Value Types](#ref-for-identifier-value) [(2)](#ref-for-identifier-value①) [(3)](#ref-for-identifier-value②)
-   [3.2. Author-defined Identifiers: the &lt;custom-ident&gt; type](#ref-for-identifier-value③) [(2)](#ref-for-identifier-value④) [(3)](#ref-for-identifier-value⑤) [(4)](#ref-for-identifier-value⑥) [(5)](#ref-for-identifier-value⑦) [(6)](#ref-for-identifier-value⑧) [(7)](#ref-for-identifier-value⑨) [(8)](#ref-for-identifier-value①⓪) [(9)](#ref-for-identifier-value①①)
-   [Changes](#ref-for-identifier-value①②) [(2)](#ref-for-identifier-value①③)

**[\#string-value](#string-value)Referenced in:**

-   [3. Textual Data Types](#ref-for-string-value)
-   [3.3. Quoted Strings: the &lt;string&gt; type](#ref-for-string-value①)
-   [3.4. Resource Locators: the &lt;url&gt; type](#ref-for-string-value②) [(2)](#ref-for-string-value③) [(3)](#ref-for-string-value④)
-   [8.2. Attribute References: attr()](#ref-for-string-value⑤) [(2)](#ref-for-string-value⑥)
-   [Changes](#ref-for-string-value⑦)

**[\#funcdef-url](#funcdef-url)Referenced in:**

-   [3.4. Resource Locators: the &lt;url&gt; type](#ref-for-funcdef-url) [(2)](#ref-for-funcdef-url①) [(3)](#ref-for-funcdef-url②)
-   [3.4.1.1. Fragment URLs](#ref-for-funcdef-url③) [(2)](#ref-for-funcdef-url④) [(3)](#ref-for-funcdef-url⑤) [(4)](#ref-for-funcdef-url⑥)
-   [3.4.2. Empty URLs](#ref-for-funcdef-url⑦) [(2)](#ref-for-funcdef-url⑧) [(3)](#ref-for-funcdef-url⑨) [(4)](#ref-for-funcdef-url①⓪)
-   [3.4.3. URL Modifiers](#ref-for-funcdef-url①①) [(2)](#ref-for-funcdef-url①②)
-   [8.2. Attribute References: attr()](#ref-for-funcdef-url①③)
-   [Changes](#ref-for-funcdef-url①④) [(2)](#ref-for-funcdef-url①⑤) [(3)](#ref-for-funcdef-url①⑥) [(4)](#ref-for-funcdef-url①⑦)

**[\#url-value](#url-value)Referenced in:**

-   [3. Textual Data Types](#ref-for-url-value)
-   [3.4. Resource Locators: the &lt;url&gt; type](#ref-for-url-value①) [(2)](#ref-for-url-value②) [(3)](#ref-for-url-value③) [(4)](#ref-for-url-value④) [(5)](#ref-for-url-value⑤)
-   [3.4.1. Relative URLs](#ref-for-url-value⑥)
-   [3.4.3. URL Modifiers](#ref-for-url-value⑦)
-   [7.2. Images: the &lt;image&gt; type](#ref-for-url-value⑧)
-   [Changes](#ref-for-url-value⑨)

**[\#url-local-url-flag](#url-local-url-flag)Referenced in:**

-   [3.4.1.1. Fragment URLs](#ref-for-url-local-url-flag) [(2)](#ref-for-url-local-url-flag①)

**[\#typedef-url-modifier](#typedef-url-modifier)Referenced in:**

-   [3.4. Resource Locators: the &lt;url&gt; type](#ref-for-typedef-url-modifier) [(2)](#ref-for-typedef-url-modifier①)
-   [3.4.3. URL Modifiers](#ref-for-typedef-url-modifier②) [(2)](#ref-for-typedef-url-modifier③) [(3)](#ref-for-typedef-url-modifier④)

**[\#numeric-data-types](#numeric-data-types)Referenced in:**

-   [2.1. Component Value Types](#ref-for-numeric-data-types)

**[\#css-bracketed-range-notation](#css-bracketed-range-notation)Referenced in:**

-   [4.1. Range Restrictions and Range Definition Notation](#ref-for-css-bracketed-range-notation) [(2)](#ref-for-css-bracketed-range-notation①)
-   [Changes](#ref-for-css-bracketed-range-notation②)

**[\#integer-value](#integer-value)Referenced in:**

-   [2.1. Component Value Types](#ref-for-integer-value) [(2)](#ref-for-integer-value①) [(3)](#ref-for-integer-value②)
-   [4. Numeric Data Types](#ref-for-integer-value③)
-   [4.1. Range Restrictions and Range Definition Notation](#ref-for-integer-value④)
-   [4.2. Integers: the &lt;integer&gt; type](#ref-for-integer-value⑤)
-   [8.1. Mathematical Expressions: calc()](#ref-for-integer-value⑥)
-   [8.1.2. Type Checking](#ref-for-integer-value⑦) [(2)](#ref-for-integer-value⑧) [(3)](#ref-for-integer-value⑨) [(4)](#ref-for-integer-value①⓪) [(5)](#ref-for-integer-value①①) [(6)](#ref-for-integer-value①②) [(7)](#ref-for-integer-value①③) [(8)](#ref-for-integer-value①④)
-   [8.2. Attribute References: attr()](#ref-for-integer-value①⑤)

**[\#integer](#integer)Referenced in:**

-   [4.3. Real Numbers: the &lt;number&gt; type](#ref-for-integer)

**[\#number-value](#number-value)Referenced in:**

-   [4. Numeric Data Types](#ref-for-number-value)
-   [4.3. Real Numbers: the &lt;number&gt; type](#ref-for-number-value①)
-   [4.6. Mixing Percentages and Dimensions](#ref-for-number-value②) [(2)](#ref-for-number-value③)
-   [5. Distance Units: the &lt;length&gt; type](#ref-for-number-value④) [(2)](#ref-for-number-value⑤) [(3)](#ref-for-number-value⑥)
-   [8.1. Mathematical Expressions: calc()](#ref-for-number-value⑦)
-   [8.1.1. Syntax](#ref-for-number-value⑧) [(2)](#ref-for-number-value⑨)
-   [8.1.2. Type Checking](#ref-for-number-value①⓪) [(2)](#ref-for-number-value①①) [(3)](#ref-for-number-value①②) [(4)](#ref-for-number-value①③) [(5)](#ref-for-number-value①④) [(6)](#ref-for-number-value①⑤) [(7)](#ref-for-number-value①⑥) [(8)](#ref-for-number-value①⑦) [(9)](#ref-for-number-value①⑧) [(10)](#ref-for-number-value①⑨) [(11)](#ref-for-number-value②⓪) [(12)](#ref-for-number-value②①) [(13)](#ref-for-number-value②②) [(14)](#ref-for-number-value②③)
-   [8.2. Attribute References: attr()](#ref-for-number-value②④)
-   [Changes](#ref-for-number-value②⑤) [(2)](#ref-for-number-value②⑥) [(3)](#ref-for-number-value②⑦)

**[\#number](#number)Referenced in:**

-   [4.4. Numbers with Units: dimension values](#ref-for-number)
-   [4.5. Percentages: the &lt;percentage&gt; type](#ref-for-number①)
-   [4.6. Mixing Percentages and Dimensions](#ref-for-number②)

**[\#dimension](#dimension)Referenced in:**

-   [4. Numeric Data Types](#ref-for-dimension) [(2)](#ref-for-dimension①)
-   [4.4. Numbers with Units: dimension values](#ref-for-dimension②) [(2)](#ref-for-dimension③)
-   [4.4.1. Compatible Units](#ref-for-dimension④)
-   [4.6. Mixing Percentages and Dimensions](#ref-for-dimension⑤)
-   [5. Distance Units: the &lt;length&gt; type](#ref-for-dimension⑥)
-   [6.2. Duration Units: the &lt;time&gt; type and s, ms units](#ref-for-dimension⑦)
-   [6.3. Frequency Units: the &lt;frequency&gt; type and Hz, kHz units](#ref-for-dimension⑧)
-   [6.4. Resolution Units: the &lt;resolution&gt; type and dpi, dpcm, dppx units](#ref-for-dimension⑨)
-   [8.2. Attribute References: attr()](#ref-for-dimension①⓪)

**[\#typedef-dimension](#typedef-dimension)Referenced in:**

-   [4.4. Numbers with Units: dimension values](#ref-for-typedef-dimension)
-   [6.1. Angle Units: the &lt;angle&gt; type and deg, grad, rad, turn units](#ref-for-typedef-dimension①)
-   [8.1.1. Syntax](#ref-for-typedef-dimension②)
-   [8.1.2. Type Checking](#ref-for-typedef-dimension③)

**[\#compatible-units](#compatible-units)Referenced in:**

-   [4.4.1. Compatible Units](#ref-for-compatible-units) [(2)](#ref-for-compatible-units①)
-   [4.6. Mixing Percentages and Dimensions](#ref-for-compatible-units②)
-   [5.2. Absolute Lengths: the cm, mm, Q, in, pt, pc, px units](#ref-for-compatible-units③)
-   [6.1. Angle Units: the &lt;angle&gt; type and deg, grad, rad, turn units](#ref-for-compatible-units④)
-   [6.2. Duration Units: the &lt;time&gt; type and s, ms units](#ref-for-compatible-units⑤)
-   [6.3. Frequency Units: the &lt;frequency&gt; type and Hz, kHz units](#ref-for-compatible-units⑥)
-   [6.4. Resolution Units: the &lt;resolution&gt; type and dpi, dpcm, dppx units](#ref-for-compatible-units⑦)
-   [Changes](#ref-for-compatible-units⑧)

**[\#canonical-unit](#canonical-unit)Referenced in:**

-   [4.4.1. Compatible Units](#ref-for-canonical-unit)
-   [5.2. Absolute Lengths: the cm, mm, Q, in, pt, pc, px units](#ref-for-canonical-unit①)
-   [6.1. Angle Units: the &lt;angle&gt; type and deg, grad, rad, turn units](#ref-for-canonical-unit②)
-   [6.2. Duration Units: the &lt;time&gt; type and s, ms units](#ref-for-canonical-unit③)
-   [6.3. Frequency Units: the &lt;frequency&gt; type and Hz, kHz units](#ref-for-canonical-unit④)
-   [6.4. Resolution Units: the &lt;resolution&gt; type and dpi, dpcm, dppx units](#ref-for-canonical-unit⑤)
-   [Changes](#ref-for-canonical-unit⑥)

**[\#percentage-value](#percentage-value)Referenced in:**

-   [2.1. Component Value Types](#ref-for-percentage-value)
-   [4. Numeric Data Types](#ref-for-percentage-value①)
-   [4.5. Percentages: the &lt;percentage&gt; type](#ref-for-percentage-value②)
-   [4.6. Mixing Percentages and Dimensions](#ref-for-percentage-value③) [(2)](#ref-for-percentage-value④) [(3)](#ref-for-percentage-value⑤) [(4)](#ref-for-percentage-value⑥) [(5)](#ref-for-percentage-value⑦) [(6)](#ref-for-percentage-value⑧) [(7)](#ref-for-percentage-value⑨) [(8)](#ref-for-percentage-value①⓪) [(9)](#ref-for-percentage-value①①) [(10)](#ref-for-percentage-value①②) [(11)](#ref-for-percentage-value①③) [(12)](#ref-for-percentage-value①④) [(13)](#ref-for-percentage-value①⑤) [(14)](#ref-for-percentage-value①⑥)
-   [7.3. 2D Positioning: the &lt;position&gt; type](#ref-for-percentage-value①⑦)
-   [8.1. Mathematical Expressions: calc()](#ref-for-percentage-value①⑧)
-   [8.1.1. Syntax](#ref-for-percentage-value①⑨)
-   [8.1.2. Type Checking](#ref-for-percentage-value②⓪) [(2)](#ref-for-percentage-value②①) [(3)](#ref-for-percentage-value②②) [(4)](#ref-for-percentage-value②③)
-   [Changes](#ref-for-percentage-value②④) [(2)](#ref-for-percentage-value②⑤)

**[\#typedef-length-percentage](#typedef-length-percentage)Referenced in:**

-   [7.3. 2D Positioning: the &lt;position&gt; type](#ref-for-typedef-length-percentage) [(2)](#ref-for-typedef-length-percentage①) [(3)](#ref-for-typedef-length-percentage②) [(4)](#ref-for-typedef-length-percentage③)
-   [Changes](#ref-for-typedef-length-percentage④)

**[\#length-value](#length-value)Referenced in:**

-   [1. Introduction](#ref-for-length-value)
-   [2.1. Component Value Types](#ref-for-length-value①)
-   [4. Numeric Data Types](#ref-for-length-value②)
-   [4.4. Numbers with Units: dimension values](#ref-for-length-value③)
-   [4.6. Mixing Percentages and Dimensions](#ref-for-length-value④) [(2)](#ref-for-length-value⑤) [(3)](#ref-for-length-value⑥)
-   [5. Distance Units: the &lt;length&gt; type](#ref-for-length-value⑦) [(2)](#ref-for-length-value⑧)
-   [7.3. 2D Positioning: the &lt;position&gt; type](#ref-for-length-value⑨) [(2)](#ref-for-length-value①⓪) [(3)](#ref-for-length-value①①)
-   [8.1. Mathematical Expressions: calc()](#ref-for-length-value①②)
-   [8.1.2. Type Checking](#ref-for-length-value①③) [(2)](#ref-for-length-value①④) [(3)](#ref-for-length-value①⑤) [(4)](#ref-for-length-value①⑥) [(5)](#ref-for-length-value①⑦)
-   [8.2. Attribute References: attr()](#ref-for-length-value①⑧)
-   [Changes](#ref-for-length-value①⑨) [(2)](#ref-for-length-value②⓪)

**[\#relative-length](#relative-length)Referenced in:**

-   [5. Distance Units: the &lt;length&gt; type](#ref-for-relative-length)

**[\#font-relative-length](#font-relative-length)Referenced in:**

-   [8.1.3. Computed Value](#ref-for-font-relative-length)

**[\#em](#em)Referenced in:**

-   [4.4.1. Compatible Units](#ref-for-em)
-   [5.1. Relative Lengths](#ref-for-em①)
-   [5.1.1. Font-relative Lengths: the em, ex, ch, rem units](#ref-for-em②)

**[\#ex](#ex)Referenced in:**

-   [5.1. Relative Lengths](#ref-for-ex)
-   [5.1.1. Font-relative Lengths: the em, ex, ch, rem units](#ref-for-ex①) [(2)](#ref-for-ex②)
-   [Changes](#ref-for-ex③)

**[\#ch](#ch)Referenced in:**

-   [5.1. Relative Lengths](#ref-for-ch)
-   [5.1.1. Font-relative Lengths: the em, ex, ch, rem units](#ref-for-ch①) [(2)](#ref-for-ch②)

**[\#length-advance-measure](#length-advance-measure)Referenced in:**

-   [5.1.1. Font-relative Lengths: the em, ex, ch, rem units](#ref-for-length-advance-measure)

**[\#rem](#rem)Referenced in:**

-   [5.1. Relative Lengths](#ref-for-rem)
-   [5.1.1. Font-relative Lengths: the em, ex, ch, rem units](#ref-for-rem①) [(2)](#ref-for-rem②)
-   [8.1. Mathematical Expressions: calc()](#ref-for-rem③)

**[\#vw](#vw)Referenced in:**

-   [5.1. Relative Lengths](#ref-for-vw)
-   [5.1.2. Viewport-percentage Lengths: the vw, vh, vmin, vmax units](#ref-for-vw①) [(2)](#ref-for-vw②) [(3)](#ref-for-vw③)

**[\#vh](#vh)Referenced in:**

-   [5.1. Relative Lengths](#ref-for-vh)
-   [5.1.2. Viewport-percentage Lengths: the vw, vh, vmin, vmax units](#ref-for-vh①) [(2)](#ref-for-vh②) [(3)](#ref-for-vh③)

**[\#vmin](#vmin)Referenced in:**

-   [5.1. Relative Lengths](#ref-for-vmin)
-   [5.1.2. Viewport-percentage Lengths: the vw, vh, vmin, vmax units](#ref-for-vmin①)

**[\#vmax](#vmax)Referenced in:**

-   [5.1. Relative Lengths](#ref-for-vmax)
-   [5.1.2. Viewport-percentage Lengths: the vw, vh, vmin, vmax units](#ref-for-vmax①)

**[\#absolute-length](#absolute-length)Referenced in:**

-   [5. Distance Units: the &lt;length&gt; type](#ref-for-absolute-length)

**[\#physical-units](#physical-units)Referenced in:**

-   [5.2. Absolute Lengths: the cm, mm, Q, in, pt, pc, px units](#ref-for-physical-units)

**[\#cm](#cm)Referenced in:**

-   [5.2. Absolute Lengths: the cm, mm, Q, in, pt, pc, px units](#ref-for-cm) [(2)](#ref-for-cm①)
-   [6.4. Resolution Units: the &lt;resolution&gt; type and dpi, dpcm, dppx units](#ref-for-cm②)
-   [8.1.2. Type Checking](#ref-for-cm③)

**[\#mm](#mm)Referenced in:**

-   [5.2. Absolute Lengths: the cm, mm, Q, in, pt, pc, px units](#ref-for-mm) [(2)](#ref-for-mm①)

**[\#Q](#Q)Referenced in:**

-   [5.2. Absolute Lengths: the cm, mm, Q, in, pt, pc, px units](#ref-for-Q) [(2)](#ref-for-Q①)
-   [Changes](#ref-for-Q②)

**[\#in](#in)Referenced in:**

-   [4.4.1. Compatible Units](#ref-for-in)
-   [5.2. Absolute Lengths: the cm, mm, Q, in, pt, pc, px units](#ref-for-in①) [(2)](#ref-for-in②)
-   [6.4. Resolution Units: the &lt;resolution&gt; type and dpi, dpcm, dppx units](#ref-for-in③) [(2)](#ref-for-in④)

**[\#pc](#pc)Referenced in:**

-   [5.2. Absolute Lengths: the cm, mm, Q, in, pt, pc, px units](#ref-for-pc) [(2)](#ref-for-pc①)

**[\#pt](#pt)Referenced in:**

-   [5.2. Absolute Lengths: the cm, mm, Q, in, pt, pc, px units](#ref-for-pt) [(2)](#ref-for-pt①)

**[\#px](#px)Referenced in:**

-   [4.4.1. Compatible Units](#ref-for-px) [(2)](#ref-for-px①)
-   [5.2. Absolute Lengths: the cm, mm, Q, in, pt, pc, px units](#ref-for-px②) [(2)](#ref-for-px③) [(3)](#ref-for-px④) [(4)](#ref-for-px⑤)
-   [6.4. Resolution Units: the &lt;resolution&gt; type and dpi, dpcm, dppx units](#ref-for-px⑥) [(2)](#ref-for-px⑦) [(3)](#ref-for-px⑧) [(4)](#ref-for-px⑨)
-   [8.2. Attribute References: attr()](#ref-for-px①⓪) [(2)](#ref-for-px①①)

**[\#anchor-unit](#anchor-unit)Referenced in:**

-   [5.2. Absolute Lengths: the cm, mm, Q, in, pt, pc, px units](#ref-for-anchor-unit)

**[\#reference-pixel](#reference-pixel)Referenced in:**

-   [5.2. Absolute Lengths: the cm, mm, Q, in, pt, pc, px units](#ref-for-reference-pixel)

**[\#angle-value](#angle-value)Referenced in:**

-   [4. Numeric Data Types](#ref-for-angle-value)
-   [4.6. Mixing Percentages and Dimensions](#ref-for-angle-value①) [(2)](#ref-for-angle-value②)
-   [6.1. Angle Units: the &lt;angle&gt; type and deg, grad, rad, turn units](#ref-for-angle-value③) [(2)](#ref-for-angle-value④) [(3)](#ref-for-angle-value⑤) [(4)](#ref-for-angle-value⑥) [(5)](#ref-for-angle-value⑦)
-   [8.1. Mathematical Expressions: calc()](#ref-for-angle-value⑧)
-   [8.1.2. Type Checking](#ref-for-angle-value⑨) [(2)](#ref-for-angle-value①⓪)
-   [8.2. Attribute References: attr()](#ref-for-angle-value①①)

**[\#deg](#deg)Referenced in:**

-   [6.1. Angle Units: the &lt;angle&gt; type and deg, grad, rad, turn units](#ref-for-deg) [(2)](#ref-for-deg①)
-   [8.1.2. Type Checking](#ref-for-deg②)

**[\#grad](#grad)Referenced in:**

-   [6.1. Angle Units: the &lt;angle&gt; type and deg, grad, rad, turn units](#ref-for-grad)

**[\#rad](#rad)Referenced in:**

-   [6.1. Angle Units: the &lt;angle&gt; type and deg, grad, rad, turn units](#ref-for-rad)

**[\#turn](#turn)Referenced in:**

-   [6.1. Angle Units: the &lt;angle&gt; type and deg, grad, rad, turn units](#ref-for-turn)

**[\#time-value](#time-value)Referenced in:**

-   [4. Numeric Data Types](#ref-for-time-value)
-   [4.4. Numbers with Units: dimension values](#ref-for-time-value①)
-   [4.6. Mixing Percentages and Dimensions](#ref-for-time-value②) [(2)](#ref-for-time-value③)
-   [6.2. Duration Units: the &lt;time&gt; type and s, ms units](#ref-for-time-value④) [(2)](#ref-for-time-value⑤)
-   [8.1. Mathematical Expressions: calc()](#ref-for-time-value⑥)
-   [8.1.2. Type Checking](#ref-for-time-value⑦)
-   [8.2. Attribute References: attr()](#ref-for-time-value⑧)

**[\#s](#s)Referenced in:**

-   [6.2. Duration Units: the &lt;time&gt; type and s, ms units](#ref-for-s) [(2)](#ref-for-s①)

**[\#ms](#ms)Referenced in:**

-   [6.2. Duration Units: the &lt;time&gt; type and s, ms units](#ref-for-ms)

**[\#frequency-value](#frequency-value)Referenced in:**

-   [4. Numeric Data Types](#ref-for-frequency-value)
-   [4.4. Numbers with Units: dimension values](#ref-for-frequency-value①)
-   [4.6. Mixing Percentages and Dimensions](#ref-for-frequency-value②) [(2)](#ref-for-frequency-value③)
-   [6.3. Frequency Units: the &lt;frequency&gt; type and Hz, kHz units](#ref-for-frequency-value④) [(2)](#ref-for-frequency-value⑤)
-   [8.1. Mathematical Expressions: calc()](#ref-for-frequency-value⑥)
-   [8.1.2. Type Checking](#ref-for-frequency-value⑦)
-   [8.2. Attribute References: attr()](#ref-for-frequency-value⑧)

**[\#Hz](#Hz)Referenced in:**

-   [6.3. Frequency Units: the &lt;frequency&gt; type and Hz, kHz units](#ref-for-Hz) [(2)](#ref-for-Hz①)

**[\#kHz](#kHz)Referenced in:**

-   [6.3. Frequency Units: the &lt;frequency&gt; type and Hz, kHz units](#ref-for-kHz)

**[\#resolution-value](#resolution-value)Referenced in:**

-   [4. Numeric Data Types](#ref-for-resolution-value)
-   [4.4. Numbers with Units: dimension values](#ref-for-resolution-value①)
-   [6.4. Resolution Units: the &lt;resolution&gt; type and dpi, dpcm, dppx units](#ref-for-resolution-value②) [(2)](#ref-for-resolution-value③) [(3)](#ref-for-resolution-value④)

**[\#dpi](#dpi)Referenced in:**

-   [6.4. Resolution Units: the &lt;resolution&gt; type and dpi, dpcm, dppx units](#ref-for-dpi)

**[\#dpcm](#dpcm)Referenced in:**

-   [6.4. Resolution Units: the &lt;resolution&gt; type and dpi, dpcm, dppx units](#ref-for-dpcm)

**[\#dppx](#dppx)Referenced in:**

-   [6.4. Resolution Units: the &lt;resolution&gt; type and dpi, dpcm, dppx units](#ref-for-dppx) [(2)](#ref-for-dppx①)

**[\#typedef-position](#typedef-position)Referenced in:**

-   [7.3. 2D Positioning: the &lt;position&gt; type](#ref-for-typedef-position) [(2)](#ref-for-typedef-position①) [(3)](#ref-for-typedef-position②) [(4)](#ref-for-typedef-position③) [(5)](#ref-for-typedef-position④) [(6)](#ref-for-typedef-position⑤) [(7)](#ref-for-typedef-position⑥)
-   [Changes](#ref-for-typedef-position⑦) [(2)](#ref-for-typedef-position⑧)

**[\#functional-notation](#functional-notation)Referenced in:**

-   [3.4. Resource Locators: the &lt;url&gt; type](#ref-for-functional-notation)
-   [3.4.3. URL Modifiers](#ref-for-functional-notation①)
-   [8. Functional Notations](#ref-for-functional-notation②)

**[\#funcdef-calc](#funcdef-calc)Referenced in:**

-   [4.6. Mixing Percentages and Dimensions](#ref-for-funcdef-calc) [(2)](#ref-for-funcdef-calc①)
-   [8.1. Mathematical Expressions: calc()](#ref-for-funcdef-calc②) [(2)](#ref-for-funcdef-calc③) [(3)](#ref-for-funcdef-calc④) [(4)](#ref-for-funcdef-calc⑤)
-   [8.1.1. Syntax](#ref-for-funcdef-calc⑥) [(2)](#ref-for-funcdef-calc⑦) [(3)](#ref-for-funcdef-calc⑧) [(4)](#ref-for-funcdef-calc⑨)
-   [8.1.2. Type Checking](#ref-for-funcdef-calc①⓪) [(2)](#ref-for-funcdef-calc①①) [(3)](#ref-for-funcdef-calc①②) [(4)](#ref-for-funcdef-calc①③) [(5)](#ref-for-funcdef-calc①④) [(6)](#ref-for-funcdef-calc①⑤)
-   [8.1.3. Computed Value](#ref-for-funcdef-calc①⑥) [(2)](#ref-for-funcdef-calc①⑦) [(3)](#ref-for-funcdef-calc①⑧) [(4)](#ref-for-funcdef-calc①⑨)
-   [8.1.4. Range Checking](#ref-for-funcdef-calc②⓪) [(2)](#ref-for-funcdef-calc②①) [(3)](#ref-for-funcdef-calc②②)
-   [8.1.5. Serialization](#ref-for-funcdef-calc②③)
-   [Changes](#ref-for-funcdef-calc②④) [(2)](#ref-for-funcdef-calc②⑤) [(3)](#ref-for-funcdef-calc②⑥) [(4)](#ref-for-funcdef-calc②⑦)

**[\#typedef-calc-sum](#typedef-calc-sum)Referenced in:**

-   [8.1.1. Syntax](#ref-for-typedef-calc-sum) [(2)](#ref-for-typedef-calc-sum①)

**[\#typedef-calc-product](#typedef-calc-product)Referenced in:**

-   [8.1.1. Syntax](#ref-for-typedef-calc-product) [(2)](#ref-for-typedef-calc-product①)

**[\#typedef-calc-value](#typedef-calc-value)Referenced in:**

-   [8.1.1. Syntax](#ref-for-typedef-calc-value) [(2)](#ref-for-typedef-calc-value①)

**[\#typedef-calc-number-sum](#typedef-calc-number-sum)Referenced in:**

-   [8.1.1. Syntax](#ref-for-typedef-calc-number-sum)

**[\#typedef-calc-number-product](#typedef-calc-number-product)Referenced in:**

-   [8.1.1. Syntax](#ref-for-typedef-calc-number-product) [(2)](#ref-for-typedef-calc-number-product①)

**[\#typedef-calc-number-value](#typedef-calc-number-value)Referenced in:**

-   [8.1.1. Syntax](#ref-for-typedef-calc-number-value) [(2)](#ref-for-typedef-calc-number-value①) [(3)](#ref-for-typedef-calc-number-value②) [(4)](#ref-for-typedef-calc-number-value③)

**[\#resolved-type](#resolved-type)Referenced in:**

-   [8.1.2. Type Checking](#ref-for-resolved-type) [(2)](#ref-for-resolved-type①)

**[\#funcdef-attr](#funcdef-attr)Referenced in:**

-   [8.1. Mathematical Expressions: calc()](#ref-for-funcdef-attr①)
-   [8.1.2. Type Checking](#ref-for-funcdef-attr②)
-   [8.2. Attribute References: attr()](#ref-for-funcdef-attr③) [(2)](#ref-for-funcdef-attr④) [(3)](#ref-for-funcdef-attr⑤) [(4)](#ref-for-funcdef-attr⑥) [(5)](#ref-for-funcdef-attr⑦) [(6)](#ref-for-funcdef-attr⑧) [(7)](#ref-for-funcdef-attr⑨) [(8)](#ref-for-funcdef-attr①⓪) [(9)](#ref-for-funcdef-attr①①)
-   [Changes](#ref-for-funcdef-attr①②) [(2)](#ref-for-funcdef-attr①③) [(3)](#ref-for-funcdef-attr①④)

**[\#typedef-attr-name](#typedef-attr-name)Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-typedef-attr-name) [(2)](#ref-for-typedef-attr-name①)

**[\#typedef-type-or-unit](#typedef-type-or-unit)Referenced in:**

-   [8.1.2. Type Checking](#ref-for-typedef-type-or-unit)
-   [8.2. Attribute References: attr()](#ref-for-typedef-type-or-unit①) [(2)](#ref-for-typedef-type-or-unit②) [(3)](#ref-for-typedef-type-or-unit③) [(4)](#ref-for-typedef-type-or-unit④)

**[\#typedef-attr-fallback](#typedef-attr-fallback)Referenced in:**

-   [8.2. Attribute References: attr()](#ref-for-typedef-attr-fallback) [(2)](#ref-for-typedef-attr-fallback①) [(3)](#ref-for-typedef-attr-fallback②) [(4)](#ref-for-typedef-attr-fallback③)

[↑](#toc)
