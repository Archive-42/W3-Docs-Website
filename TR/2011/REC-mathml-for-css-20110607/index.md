[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

<span id="title"></span>A MathML for CSS Profile
================================================

<span id="w3c-doctype"></span>W3C Recommendation 07 June 2011
-------------------------------------------------------------

This version:  
<http://www.w3.org/TR/2011/REC-mathml-for-css-20110607/>

Latest version:  
<http://www.w3.org/TR/mathml-for-css/>

Previous version:  
<http://www.w3.org/TR/2010/PR-mathml-for-css-20100810/>

Editors:  
Bert Bos, W3C

David Carlisle, NAG

George Chavchanidze, Opera Software

Patrick D. F. Ion, Mathematical Reviews, American Mathematical Society

Bruce R. Miller, National Institute of Standards and Technology

Please refer to the [**errata**](http://www.w3.org/Math/Documents/mathmlcss-errata.html) for this document, which may include some normative corrections.

See also [**translations**](http://www.w3.org/2005/11/Translations/Query?titleMatch=mathml-for-css).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 1998-2011 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span id="abstract"></span>Abstract
-----------------------------------

This document describes a profile of MathML 3.0 that admits formatting with Cascading Style Sheets.

<span id="status"></span>Status of this Document
------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

This document is a W3C Recommendation produced by the [W3C Math Working Group](http://www.w3.org/Math/) as part of W3C [Math Activity](http://www.w3.org/Math/Activity). The goals of the W3C Math Working Group are discussed in the [W3C Math WG Charter](http://www.w3.org/Math/Documents/Charter2006.html). The authors of this document are W3C Math Working Group members.

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

This is is a mature document that has been widely reviewed and has been shown to be implementable. W3C encourages everybody to implement this specification. Comments may be sent to the ([archived](http://lists.w3.org/Archives/Public/www-math/)) public mailing list <www-math@w3.org>.

The previous version of this document was a [Proposed Recomendation](http://www.w3.org/TR/2010/PR-mathml-for-css-20100810/). The only differences between that draft and this are the updated status section, and some updated references.

This Recommendation specifies a profile of the W3C Recommendation, MathML 3.0 [\[mathml\]](#mathml), and is intended to accord with current CSS [\[css\]](#css).

During the Candidate Recommendation phase, the Working Group tested the MathML for CSS Profile using at least two independent CSS implementations. The Profile contains a suitable CSS stylesheet within the specification itself. The results of testing, [MathML for CSS Profile Test Results](http://www.w3.org/Math/testsuite/results/testcss.html), have been made public. The testing used parts of the comprehensive [MathML Test Suite](http://www.w3.org/Math/testsuite/). This is also publicly available. Further details may be found in the [MathML3 Implementation Report](http://www.w3.org/Math/Documents/mml3-implementation-report.html)

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/). W3C maintains a [public list of any patent disclosures](http://www.w3.org/2004/01/pp-impl/35549/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

Public discussion of MathML and issues of support through the W3C for mathematics on the Web takes place on [the public mailing list of the Math Working Group](mailto:www-math@w3.org) ([list archives](http://lists.w3.org/Archives/Public/www-math/)). To subscribe send an email to <www-math-request@w3.org> with the word `subscribe` in the subject line.

<span id="contents"></span>Table of Contents
--------------------------------------------

1 [Introduction](#intro)  
    1.1 [Differences in formatting models](#d2e165)  
2 [Math Elements](#d2e210)  
    2.1 [Root element](#d2e213)  
    2.2 [Token elements and layout schemata](#d2e258)  
    2.3 [Required Arguments](#reqarg)  
    2.4 [Common attributes](#commatt)  
3 [Token Elements](#tokel)  
    3.1 [Identifier &lt;mi&gt;](#mi)  
    3.2 [Number &lt;mn&gt;](#mn)  
    3.3 [Operator &lt;mo&gt;](#mo)  
    3.4 [Text &lt;mtext&gt;](#mtext)  
    3.5 [Space &lt;mspace&gt;](#mspace)  
    3.6 [String Literal &lt;ms&gt;](#ms)  
4 [General Layout Schemata](#genlayout)  
    4.1 [Horizontally Group Sub-Expressions &lt;mrow&gt;](#mrow)  
    4.2 [Fractions &lt;mfrac&gt;](#mfrac)  
    4.3 [Radicals &lt;msqrt&gt;, &lt;mroot&gt;](#mroot)  
    4.4 [Error Message &lt;merror&gt;](#merror)  
    4.5 [Making Sub-Expressions Invisible &lt;mphantom&gt;](#mphantom)  
    4.6 [Expression Inside Pair of Fences &lt;mfenced&gt;](#mfenced)  
    4.7 [Enclose Expression Inside Notation &lt;menclose&gt;](#menclose)  
5 [Script and Limit Schemata](#scrlim)  
    5.1 [Subscript &lt;msub&gt;](#msub)  
    5.2 [Superscript &lt;msup&gt;](#msup)  
    5.3 [Subscript-superscript Pair &lt;msubsup&gt;](#msubsup)  
    5.4 [Underscript &lt;munder&gt;](#munder)  
    5.5 [Overscript &lt;mover&gt;](#mover)  
    5.6 [Underscript-overscript Pair &lt;munderover&gt;](#munderover)  
    5.7 [Prescripts &lt;mmultiscripts&gt;](#mmultiscripts)  
6 [Tables and Matrices](#tabmat)  
    6.1 [Table or Matrix &lt;mtable&gt;](#mtable)  
    6.2 [Row in a Table or Matrix &lt;mtr&gt;](#mtr)  
    6.3 [Entry in a Table or Matrix &lt;mtd&gt;](#mtd)  
7 [Elementary Math](#d2e1905)  
    7.1 [2D addition, subtraction and multiplication &lt;mstack&gt;](#mstack)  
    7.2 [Horizontal rows &lt;mrow&gt;](#msrow)  
    7.3 [Long division &lt;mlongdiv&gt;](#mlongdiv)  
8 [Annotations](#d2e2097)  
    8.1 [Bind Action to a Sub-Expression &lt;maction&gt;](#maction)  
    8.2 [Add semantic mapping &lt;semantics&gt;](#semantics)  
9 [Extensibility and Conformance](#d2e2164)  
    9.1 [Extensibility](#d2e2167)  
    9.2 [Conformance](#d2e2174)  
10 [Differences between MathML presentational markup and present profile](#d2e2181)  
11 [Document Type Definition](#d2e2474)  
12 [Default CSS style sheet](#d2e2482)  
13 [References](#references)  

------------------------------------------------------------------------

<span id="intro"></span>1 Introduction
--------------------------------------

The current profile is intended to be subset of MathML 3.0 [\[mathml\]](#mathml) that could be used to capture structure of mathematical formulae in the way suitable for further CSS formatting. This profile is expected to facilitate adoption of MathML in web browsers and CSS formatters, allowing them to reuse existing CSS [\[css\]](#css) visual formatting model, enhanced with a few mathematics-oriented extensions, for rendering of the layout schemata of presentational MathML. Development of the CSS profile is assumed to be coordinated with ongoing work on CSS. As specified in this document a restricted part of MathML3 properly used should render well with currently implemented CSS up to CSS 2.1. Some descriptions are offered of what might be done better were a limited set of new properties to be added to CSS3 modules.

It may be useful to note, in connection with the need for this profile, that the CSS2 specification [\[css2\]](#css2) was developed and refined at about the same time as the first MathML specification [\[mathml1\]](#mathml1). Now new versions of both MathML and CSS are being created. This profile is thus part of the ongoing effort to realize the synergy that W3C Recommendations offer to the Web.

### <span id="d2e165"></span>1.1 Differences in formatting models

The Math Working Group has identified the following issues, which are considered to be the main obstacles delaying fully consistent MathML/CSS integration.

-   Insufficient control over vertical alignment of complex inline expressions such as inline tables with multiple rows.

-   Lack of a mechanism to control stretching of glyphs, or any equivalent functionality, that could be used for sizing of mathematical delimiters and stretchy operators.

-   Limited scope in the use of selectors and generation of content, which makes it difficult to apply complex formatting to basic structural markup.

-   The order of children in presentational elements such as `mover`, `munderover`, `mmultiscripts` and `mroot` does not match their in-flow positions; this makes formatting of such elements more difficult.

-   Handling of operators, delimiters and accents governed by an operator dictionary (that is by element content rather than attribute values) rather than by explicit markup makes matching of such operators using CSS selectors impossible.

-   Usage of some presentational elements such as `mpadded`, `mspace`, `mstyle` might conflict with corresponding CSS formatting properties.

<span id="d2e210"></span>2 Math Elements
----------------------------------------

### <span id="d2e213"></span>2.1 Root element

MathML specifies a single top-level or root `math` element, which encapsulates each instance of MathML markup within a document. All other MathML markup must be contained in a `math` element, which must always be the outermost element of a MathML expression and can contain an arbitrary number of children. The `math` element carries the `display` attribute that specifies whether the enclosed MathML expression should be rendered in a display style or an in-line style. Allowed values are "block" and "inline" (default). It also accepts `altimg` and `alttext` attributes that provide fall-back for User Applications (UAs) that do not support MathML layout schemata. The values of `altimg` and `alttext` attributes are URI and CDATA respectively. All MathML elements should be in the MathML namespace `http://www.w3.org/1998/Math/MathML` [\[rec-xmlns\]](#rec-xmlns). This can be ensured by adding a default namespace declaration to `math` elements, or by using namespace prefixes bound to the MathML namespace.

### <span id="d2e258"></span>2.2 Token elements and layout schemata

MathML elements included in the current profile can be divided into two classes. *Token elements* represent individual symbols, names, numbers, labels, etc. In general, tokens can have only character data as content. *Layout schemata* build expressions out of parts, and can only have elements as content except for whitespace, which they ignore. There are also a few empty elements used only in conjunction with specific layout schemata.

All individual "symbols" in a mathematical expression should be represented by MathML token elements. The primary MathML token element types are identifiers (e.g. variables or function names), numbers, and operators (including fences, such as parentheses, and separators, such as commas). There are also token elements for representing text or whitespace that has more aesthetic than mathematical significance, and for representing "string literals" for compatibility with computer algebra systems. Note that although a token element represents a single meaningful "symbol" (name, number, label, mathematical symbol, etc.), such symbols may be comprised of more than one character. For example `sin` and `24` are represented by the single tokens `<mi>sin</mi>` and `<mn>24</mn>` respectively.

Token elements included in the current profile are summarized in the table below.

<table><tbody><tr class="odd"><td><code>mi</code></td><td>identifier</td></tr><tr class="even"><td><code>mn</code></td><td>number</td></tr><tr class="odd"><td><code>mo</code></td><td>operator, fence or separator</td></tr><tr class="even"><td><code>mtext</code></td><td>text</td></tr><tr class="odd"><td><code>mspace</code></td><td>space</td></tr><tr class="even"><td><code>ms</code></td><td>string literal</td></tr></tbody></table>

In traditional mathematical notation, expressions are recursively constructed out of smaller expressions, and ultimately out of single symbols, with the parts grouped and positioned using one of a small set of notational structures, which can be thought of as "expression constructors". In MathML, expressions are constructed in the same way, with the layout schemata playing the role of the expression constructors. The layout schemata specify the way in which sub-expressions are built into larger expressions. The terminology derives from the fact that each layout schema corresponds to a different way of "laying out" its sub-expressions to form a larger expression in traditional mathematical typesetting.

Basic expression constructions included in the current profile are listed in the table below.

<table><tbody><tr class="odd"><td><code>mrow</code></td><td>groups any number of sub-expressions horizontally</td></tr><tr class="even"><td><code>mfrac</code></td><td>forms a fraction from two sub-expressions</td></tr><tr class="odd"><td><code>msqrt</code></td><td>forms a square root (radical without an index)</td></tr><tr class="even"><td><code>mroot</code></td><td>forms a radical with specified index</td></tr><tr class="odd"><td><code>merror</code></td><td>encloses a syntax error message from a preprocessor</td></tr><tr class="even"><td><code>mphantom</code></td><td>makes content invisible but preserve its size</td></tr><tr class="odd"><td><code>mfenced</code></td><td>surrounds content with a pair of fences</td></tr><tr class="even"><td><code>menclose</code></td><td>encloses content with a stretching symbol</td></tr><tr class="odd"><td><code>msub</code></td><td>attaches a subscript to a base</td></tr><tr class="even"><td><code>msup</code></td><td>attaches a superscript to a base</td></tr><tr class="odd"><td><code>msubsup</code></td><td>attaches a subscript-superscript pair to a base</td></tr><tr class="even"><td><code>munder</code></td><td>attaches an underscript to a base</td></tr><tr class="odd"><td><code>mover</code></td><td>attaches an overscript to a base</td></tr><tr class="even"><td><code>munderover</code></td><td>attaches an underscript-overscript pair to a base</td></tr><tr class="odd"><td><code>mmultiscripts</code></td><td>attaches prescripts to a base</td></tr><tr class="even"><td><code>mtable</code></td><td>marks a table or matrix</td></tr><tr class="odd"><td><code>mtr</code></td><td>marks a row in a table or matrix</td></tr><tr class="even"><td><code>mtd</code></td><td>marks a one entry in a table or matrix</td></tr><tr class="odd"><td><code>mstack</code></td><td>used for elementary math notations such as 2D addition, subtraction and multiplication</td></tr><tr class="even"><td><code>mlongdiv</code></td><td>used for elementary math notations for long division</td></tr><tr class="odd"><td><code>msline</code></td><td>marks horizontal line in elementary math layouts</td></tr><tr class="even"><td><code>msrow</code></td><td>marks row in elementary math layouts</td></tr><tr class="odd"><td><code>maction</code></td><td>binds actions to a sub-expression</td></tr></tbody></table>

### <span id="reqarg"></span>2.3 Required Arguments

Some layout schemata require a specific number of arguments, for example `mfrac` is supposed to have two child elements representing numerator and denominator. In the current profile, layout schemata with fixed number of required arguments accept only elements `mrow`, `maction`, `merror`, `mphantom` and tokens `mi`, `mn`, `mo`, `ms`, `mtext` as child elements. This restrictions is imposed to ensure that each part of layout schemata has its own containing block and is uniquely represented in the document object model. For example nested fractions where the numerator or denominator are themselves fractions

    <mfrac>
        <mfrac>
            <mi>a</mi>
            <mi>b</mi>
        </mfrac>
        <mfrac>
            <mi>c</mi>
            <mi>d</mi>
        </mfrac>
    </mfrac>

are not allowed in the MathML for CSS profile, although they are allowed in MathML 3.0. It is easy to meet the profile requirements by wrapping nested fractions in `mrow` elements:

    <mfrac>
        <mrow>
            <mfrac>
                <mi>a</mi>
                <mi>b</mi>
            </mfrac>
        </mrow>
        <mrow>
            <mfrac>
                <mi>c</mi>
                <mi>d</mi>
            </mfrac>
        </mrow>
    </mfrac>

The number of arguments required by a particular layout schemata element is specified in the table below. Note that in the current profile, the content model of `mfenced` and `maction` is stricter compared to what is allowed by MathML 3.0 specification.

<table><thead><tr class="header"><th>Element</th><th>Required argument count</th><th>Argument roles</th></tr></thead><tbody><tr class="odd"><td><code>mfrac</code></td><td>2</td><td><em>numerator</em> <em>denominator</em></td></tr><tr class="even"><td><code>mroot</code></td><td>2</td><td><em>base</em> <em>index</em></td></tr><tr class="odd"><td><code>mfenced</code></td><td>1</td><td><em>base</em></td></tr><tr class="even"><td><code>msub</code></td><td>2</td><td><em>base</em> <em>subscript</em></td></tr><tr class="odd"><td><code>msup</code></td><td>2</td><td><em>base</em> <em>superscript</em></td></tr><tr class="even"><td><code>msubsup</code></td><td>3</td><td><em>base</em> <em>subscript</em> <em>superscript</em></td></tr><tr class="odd"><td><code>munder</code></td><td>2</td><td><em>base</em> <em>underscript</em></td></tr><tr class="even"><td><code>mover</code></td><td>2</td><td><em>base</em> <em>overscript</em></td></tr><tr class="odd"><td><code>munderover</code></td><td>3</td><td><em>base</em> <em>underscript</em> <em>overscript</em></td></tr><tr class="even"><td><code>mmultiscripts</code></td><td>4</td><td><em>base</em> <code>mprescripts</code> <em>presubscript</em> <em>presuperscript</em></td></tr><tr class="odd"><td><code>mtable</code></td><td>1+</td><td>one or more <code>mtr</code> elements</td></tr><tr class="even"><td><code>mtr</code></td><td>1+</td><td>one or more <code>mtd</code> elements</td></tr><tr class="odd"><td><code>mstack</code></td><td>4+</td><td>one or more <code>mn</code> tokens followed by <code>msrow</code> element, <code>msline</code> and groups consisting of one or more <code>mn</code> tokens followed by optional <code>msline</code></td></tr><tr class="even"><td><code>mlongdiv</code></td><td>3+</td><td><em>result of the division</em> followed by <em>divisor</em> and groups consisting of one or more <code>mn</code> tokens followed by optional <code>msline</code></td></tr><tr class="odd"><td><code>msrow</code></td><td>2</td><td><code>mo</code> token element followed by <code>mn</code> token</td></tr><tr class="even"><td><code>maction</code></td><td>2</td><td><em>base</em> <em>tooltip</em></td></tr></tbody></table>

The elements `mrow`, `msqrt`, `merror`, `mphantom`, `menclose`, `mtd` and `math` admit any number of arguments and accept any layout schemata or token elements from current profile as children.

### <span id="commatt"></span>2.4 Common attributes

The attributes `id`, `class` and `style` can be used on any element included in the current profile: `id` provides a mechanism for annotating elements with unique identifiers, `class` assigns one or more class names to an element and `style` specifies style information for the current element. The attribute `mathvariant` is allowed on nonempty token elements, attribute is included in the profile for interoperability reasons to ensure that font changes are transparent for CSS unaware UAs.

The following table lists common attributes, their values and the elements on which they can be used.

<table><thead><tr class="header"><th>Name</th><th>values</th><th>default</th><th>valid on</th></tr></thead><tbody><tr class="odd"><td><code>id</code></td><td>ID</td><td></td><td>all elements</td></tr><tr class="even"><td><code>class</code></td><td>NMTOKENS</td><td></td><td>all elements</td></tr><tr class="odd"><td><code>style</code></td><td>CDATA</td><td></td><td>all elements</td></tr><tr class="even"><td><code>mathvariant</code></td><td>normal  | bold | italic | bold‑italic | sans-serif | bold‑sans‑serif | sans‑serif‑italic | sans‑serif‑bold‑italic | monospace</td><td>normal</td><td><code>mn</code>, <code>mo</code>, <code>ms</code>, <code>mtext</code></td></tr><tr class="odd"><td><code>mathvariant</code></td><td>normal  | bold | italic | bold‑italic | sans-serif | bold‑sans‑serif | sans‑serif‑italic | sans‑serif‑bold‑italic | monospace</td><td>italic</td><td><code>mi</code></td></tr></tbody></table>

<span id="tokel"></span>3 Token Elements
----------------------------------------

Token elements in presentation markup are, broadly speaking, intended to represent the smallest units of mathematical notation which carry meaning. Tokens are roughly analogous to words in text. However, because of the precise, symbolic nature of mathematical notation, the various categories and properties of token elements figure prominently in MathML markup. By contrast, in textual data, individual words rarely need to be marked up or styled specially.

Frequently tokens consist of a single character denoting a mathematical symbol. Other cases, e.g., function names, involve multi-character tokens. Further, because traditional mathematical notation makes extensive use of symbols distinguished by their typographical properties, care must be taken to ensure that styling mechanisms respect typographical properties which carry meaning. Consequently, characters, tokens, and typographical properties of symbols are closely related to one another in MathML.

### <span id="mi"></span>3.1 Identifier &lt;mi&gt;

An `mi` element represents a mathematical identifier; its rendering consists of the text content displayed in a typeface corresponding to the `mathvariant` attribute. Since the typeface used can distinguish similar identifiers, it often serves an important semantic function.

In MathML 3.0, the default value of `mathvariant` depends on the content of the element, it is "italic" for single character content (e.g., `<mi>x</mi>`) and "normal" otherwise (e.g., `<mi>sin</mi>`). Such behavior does not fit well in the scope of CSS, therefore in current profile "italic" is the default value regardless of the element content and mathematical identifiers for which a non-italic typeface is desired (e.g., multi-character identifiers), must explicitly specify the `mathvariant` attribute.

### <span id="mn"></span>3.2 Number &lt;mn&gt;

An `mn` element represents a "numeric literal" or other data that should be rendered as a numeric literal. Generally speaking, a numeric literal is a sequence of digits, perhaps including a decimal point, representing an unsigned integer or real number.

A typical graphical renderer would render an `mn` element as the characters of its content, with no extra spacing around them (except spacing from neighboring elements such as `mo`).

### <span id="mo"></span>3.3 Operator &lt;mo&gt;

An `mo` element represents an operator or anything that should be rendered as an operator. In MathML the list of things that should "render as an operator" is widely inclusive. Besides ordinary operators with infix, prefix, or postfix forms, fence characters such as braces, parentheses, and separators such as comma and semicolon are included. In the current profile the `mo` element is not expected to produce vertically stretchable delimiters; instead the `mfenced` element should be used for vertically stretchy delimiters such as stretchy brackets, braces, parentheses and vertical bars.

Note also that this profile does not rely on an operator dictionary, but instead it is recommended to mark fences, separators and large operators explicitly using `fence`, `separator` and `largeop` attributes. In addition, prefix, infix and postfix operators may be distinguished using the `form` attribute. In the present profile, the default value of this attribute is "prefix" if the `mo` element is the first child of a parent element that has many children, and "postfix" if `mo` element is the last child of a parent with multiple children; the value is "infix" in all other cases. Those `mo` tokens that represent fences such as brackets, braces, parens and vertical bars should be marked using the `fence` attribute, separators such as comma and semicolon should be marked using the `separator` attribute, while large operators such as sums, products and integrals may be labeled using the `largeop` attribute. UAs may rely on these attribute to infer default spacing around operators.

In the present profile stretchy operators are defined by the `stretchar` attribute's specifying a stretchy character to replaces the content of an `mo` element. The specified character is supposed to stretch to fill the available space (height of line box in case of vertically stretchy delimiters and the available width in case of horizontally stretchy delimiters). UAs that do not recognize a character specified by an `stretchar` attribute as stretchy should ignore the attribute and display the content of the `mo` element instead.

<table><thead><tr class="header"><th>Name</th><th>values</th><th>default</th></tr></thead><tbody><tr class="odd"><td><code>form</code></td><td>prefix | infix | postfix</td><td>depends on position of <code>mo</code> element, see exact rules above</td></tr><tr class="even"><td><code>fence</code></td><td>true | false</td><td>false</td></tr><tr class="odd"><td><code>separator</code></td><td>true | false</td><td>false</td></tr><tr class="even"><td><code>largeop</code></td><td>true | false</td><td>false</td></tr><tr class="odd"><td><code>stretchar</code></td><td>character</td><td>none</td></tr></tbody></table>

### <span id="mtext"></span>3.4 Text &lt;mtext&gt;

An `mtext` element is intended to denote commentary text.

### <span id="mspace"></span>3.5 Space &lt;mspace&gt;

An `mspace` empty element represents a blank space of any desired size, as set by its attributes. It can also be used to make linebreaking suggestions to a visual renderer.

<table><thead><tr class="header"><th>Name</th><th>values</th><th>default</th></tr></thead><tbody><tr class="odd"><td>width</td><td>verythinmathspace | thinmathspace | mediummathspace | thickmathspace | verythickmathspace</td><td>0</td></tr><tr class="even"><td>linebreak</td><td>auto | newline | goodbreak</td><td>auto</td></tr></tbody></table>

The `width` attribute defines the width of the space produced by an `mspace` element. The default value is zero. Named values are described in table below.

<table><thead><tr class="header"><th>Named space</th><th>value (em)</th></tr></thead><tbody><tr class="odd"><td>verythinmathspace</td><td>1/9</td></tr><tr class="even"><td>thinmathspace</td><td>1/6</td></tr><tr class="odd"><td>mediummathspace</td><td>2/9</td></tr><tr class="even"><td>thickmathspace</td><td>5/12</td></tr><tr class="odd"><td>verythickmathspace</td><td>1/3</td></tr></tbody></table>

The `linebreak` attribute is used to give a linebreaking hint to a visual renderer. Attribute values are defined in table below.

<table><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>auto</td><td>default linebreaking algorithm (implementation dependent)</td></tr><tr class="even"><td>newline</td><td>start a new line</td></tr><tr class="odd"><td>goodbreak</td><td>if a linebreak is needed on the line, here is a good spot</td></tr></tbody></table>

In the case when both the `width` attribute and the `linebreak` attribute are set, the `linebreak` attribute is ignored.

### <span id="ms"></span>3.6 String Literal &lt;ms&gt;

The `ms` element is used to represent "string literals" in expressions meant to be interpreted by computer algebra systems or other systems containing "programming languages". By default, string literals are displayed surrounded by double quotes.

In visual renderers, the content of an `ms` element is typically rendered with no extra spacing added around the string, and quote characters at the beginning and the end of the string. By default, the left and right quote characters are both the standard double quote character ". However, these characters can be changed with the `lquote` and `rquote` attributes defined below.

<table><thead><tr class="header"><th>Name</th><th>values</th><th>default</th></tr></thead><tbody><tr class="odd"><td>lquote</td><td>string</td><td>"</td></tr><tr class="even"><td>rquote</td><td>string</td><td>"</td></tr></tbody></table>

<span id="genlayout"></span>4 General Layout Schemata
-----------------------------------------------------

Besides tokens there are several families of MathML presentation elements. One family of elements deals with various "scripting" notations, such as subscript and superscript. Another family is concerned with matrices and tables. The remainder of the elements, discussed in this section, describe other basic notations such as fractions and radicals, or deal with general functions such as action binding and error handling.

### <span id="mrow"></span>4.1 Horizontally Group Sub-Expressions &lt;mrow&gt;

An `mrow` element is used to group together any number of sub-expressions, usually consisting of one or more `mo` elements acting as "operators" on one or more other expressions that are their "operands".

### <span id="mfrac"></span>4.2 Fractions &lt;mfrac&gt;

The `mfrac` element is used for fractions. It can also be used to mark up the presentation of fraction-like objects such as binomial coefficients and Legendre symbols. The syntax for `mfrac` is:

    <mfrac> numerator denominator </mfrac>

In addition to common attributes, `mfrac` has additional attributes that could be used to control horizontal alignment of numerator and denominator and thickness of fraction bar.

<table><thead><tr class="header"><th>Name</th><th>values</th><th>default</th></tr></thead><tbody><tr class="odd"><td>linethickness</td><td>0 | 1 | 2 | medium | thick</td><td>1</td></tr><tr class="even"><td>numalign</td><td>left | center | right</td><td>center</td></tr><tr class="odd"><td>denomalign</td><td>left | center | right</td><td>center</td></tr></tbody></table>

The `linethickness` attribute indicates the thickness of the horizontal "fraction bar", or "rule", typically used to render fractions. Value "0" indicates that no bar should be rendered, value "1" (the same as "medium") refers to default width of fraction bar and "2" ("thick") produces bold fraction bar.

The `numalign` and `denomalign` attributes control the horizontal alignment of the numerator and denominator, respectively. Typically, numerators and denominators are centered.

### <span id="mroot"></span>4.3 Radicals &lt;msqrt&gt;, &lt;mroot&gt;

These elements construct radicals. The `msqrt` element is used for square roots, while the `mroot` element is used to draw radicals with indices, e.g., a cube root. The syntax for these elements is:

    <msqrt> base </msqrt>
    <mroot> base index </mroot>

The `mroot` element requires exactly 2 arguments. However, `msqrt` accepts any number of arguments.

### <span id="merror"></span>4.4 Error Message &lt;merror&gt;

The `merror` element displays its contents as an "error message". The contents can be any expression or expression sequence.

### <span id="mphantom"></span>4.5 Making Sub-Expressions Invisible &lt;mphantom&gt;

The `mphantom` element renders its content as invisible, but with the same size and other dimensions, including baseline position, that its contents would have if they were rendered normally; `mphantom` can be used to align parts of an expression by invisibly duplicating sub-expressions.

### <span id="mfenced"></span>4.6 Expression Inside Pair of Fences &lt;mfenced&gt;

The `mfenced` element provides a convenient way of expressing common constructs involving fences (i.e., braces, brackets, and parentheses). The size of the fences depends on the size of the expression enclosed by the fence element. Opening and closing fences are specified using the `open` and `close` attributes defined below. This profile does not allow an `mfenced` element to have multiple children; authors are encouraged to group multiple children into one `mrow` element if this can be done.

<table><thead><tr class="header"><th>Name</th><th>values</th><th>default</th></tr></thead><tbody><tr class="odd"><td>open</td><td>CDATA</td><td>(</td></tr><tr class="even"><td>close</td><td>CDATA</td><td>)</td></tr></tbody></table>

### <span id="menclose"></span>4.7 Enclose Expression Inside Notation &lt;menclose&gt;

The `menclose` element renders its content inside the enclosing notation specified by its `notation` attribute, `menclose` accepts any number of arguments.

The values allowed for `notation` are open-ended. Conforming renderers may ignore any value they do not handle, although renderers are supposed to recognize at least the values listed below.

<table><thead><tr class="header"><th>Name</th><th>values</th></tr></thead><tbody><tr class="odd"><td>notation</td><td>box | left | right | top | bottom | horizontalstrike</td></tr></tbody></table>

The value "box" can be used to enclose content of the element in a frame. The values "left", "right", "top" and "bottom" should result in lines drawn on the corresponding sides of the contents, "horizontalstrike" should result in strikeout lines being superimposed over the content of the `menclose`.

<span id="scrlim"></span>5 Script and Limit Schemata
----------------------------------------------------

The elements described in this section position one or more scripts around a base. In addition to subscript and superscript elements, MathML has overscript and underscript elements that place scripts above and below the base.

Because presentation elements should be used to describe the abstract notational structure of expressions, it is important that the base expression in all "scripting" elements (i.e., the first argument expression) should be the entire expression that is being scripted, not just, as has been common, the rightmost character.

### <span id="msub"></span>5.1 Subscript &lt;msub&gt;

The syntax for the `msub` element is:

     <msub> base subscript </msub>

The element is used to attach a subscript to a base.

### <span id="msup"></span>5.2 Superscript &lt;msup&gt;

The syntax for the `msup` element is:

    <msup> base superscript </msup>

The element is used to attach a superscript to a base.

### <span id="msubsup"></span>5.3 Subscript-superscript Pair &lt;msubsup&gt;

The `msubsup` element is used to attach both a subscript and a superscript to a base expression.

The syntax for the `msubsup` element is:

    <msubsup> base subscript superscript </msubsup>

### <span id="munder"></span>5.4 Underscript &lt;munder&gt;

The syntax for the `munder` element is:

    <munder> base underscript </munder>

The element is used to attach an underscript below a base.

### <span id="mover"></span>5.5 Overscript &lt;mover&gt;

The syntax for the `mover` element is:

    <mover> base overscript </mover>

The element is used to attach an overscript over a base.

### <span id="munderover"></span>5.6 Underscript-overscript Pair &lt;munderover&gt;

The syntax for the `munderover` element is:

     <munderover> base underscript overscript</munderover>

The element is used to attach both an underscript and an overscript to a base.

### <span id="mmultiscripts"></span>5.7 Prescripts &lt;mmultiscripts&gt;

In the current profile the syntax for the `mmultiscripts` element is:

    <mmultiscripts> base <mprescripts/> presubscript presuperscript</mmultiscripts>

This element allows adding pairs of prescripts to one base expression. Missing scripts can be represented by the empty element `none`.

The argument sequence consists of the base followed by an empty element `mprescripts` and a pair of, vertically aligned, a presubscript and a presuperscript.

<span id="tabmat"></span>6 Tables and Matrices
----------------------------------------------

Matrices, arrays and other table-like mathematical notation are marked up using `mtable`, `mtr`, and `mtd` elements. These elements are similar to the `table`, `tr` and `td` elements of XHTML.

### <span id="mtable"></span>6.1 Table or Matrix &lt;mtable&gt;

A matrix or table is specified using the `mtable` element.

The following attributes may be used to specify alignment and to add frames and rules to the table.

<table><thead><tr class="header"><th>Name</th><th>values</th><th>default</th></tr></thead><tbody><tr class="odd"><td>rowalign</td><td>top | bottom | center | baseline</td><td>baseline</td></tr><tr class="even"><td>columnalign</td><td>left | center | right</td><td>center</td></tr><tr class="odd"><td>rowlines</td><td>none | solid | dashed</td><td>none</td></tr><tr class="even"><td>columnlines</td><td>none | solid | dashed</td><td>none</td></tr><tr class="odd"><td>frame</td><td>none | solid | dashed</td><td>none</td></tr></tbody></table>

Note that the default value for each of `rowlines`, `columnlines` and `frame` is the literal string none, meaning that the default is to render no lines, rather than that there is no default.

The `rowalign` attribute specifies how the entries in each row should be aligned. For example, "top" means that the tops of each entry in each row should be aligned with the tops of the other entries in that row. The `columnalign` attribute specifies how the entries in each column should be aligned.

### <span id="mtr"></span>6.2 Row in a Table or Matrix &lt;mtr&gt;

An `mtr` element represents one row in a table or matrix. An `mtr` element is only allowed as a direct sub-expression of an `mtable` element, and specifies that its contents should form one row of the table. Each argument of `mtr` is placed in a different column of the table, starting at the leftmost column.

The following attributes may be used to specify alignment

<table><thead><tr class="header"><th>Name</th><th>values</th><th>default</th></tr></thead><tbody><tr class="odd"><td>rowalign</td><td>top | bottom | center | baseline</td><td>inherited</td></tr><tr class="even"><td>columnalign</td><td>left | center | right</td><td>inherited</td></tr></tbody></table>

The `rowalign` and `columnalign` attributes allow a specific row to override the alignment specified by the same attributes in the surrounding `mtable` element.

### <span id="mtd"></span>6.3 Entry in a Table or Matrix &lt;mtd&gt;

An `mtd` element represents one entry, or cell, in a table or matrix. An `mtd` element is only allowed as a direct sub-expression of an `mtr`.

The following attributes may be used to specify alignment

<table><thead><tr class="header"><th>Name</th><th>values</th><th>default</th></tr></thead><tbody><tr class="odd"><td>rowalign</td><td>top | bottom | center | baseline</td><td>inherited</td></tr><tr class="even"><td>columnalign</td><td>left | center | right</td><td>inherited</td></tr></tbody></table>

The `rowalign` and `columnalign` attributes allow a specific matrix element to override the alignment specified by a surrounding `mtable` or `mtr` element.

<span id="d2e1905"></span>7 Elementary Math
-------------------------------------------

### <span id="mstack"></span>7.1 2D addition, subtraction and multiplication &lt;mstack&gt;

Table like structures in elementary math notations such as 2D addition, subtraction and multiplication can be produced using `mstack` layout schemata. Vertical alignment of `mstack` is specified by `align` attribute. In current profile horizontal alignment of numbers within `mstack` simply defaults to *right*, as current CSS implementations are unlikely to handle more sophisticated alignment mechanisms for `mstack` layout schemata.

<table><thead><tr class="header"><th>Name</th><th>values</th><th>default</th></tr></thead><tbody><tr class="odd"><td>align</td><td>top | bottom | center | baseline</td><td>baseline</td></tr><tr class="even"><td>stackalign</td><td>right</td><td>attribute is required</td></tr></tbody></table>

Element contains one or more `mn` tokens followed by `msrow` element, `msline` and groups consisting of one or more `mn` tokens followed by optional `msline`.

The syntax for the `mstack` element is:

&lt;mstack stackalign="right"&gt; (one or more `mn` tokens) (`msrow` element) &lt;msline/&gt; (one or more `mn` tokens followed by optional `msline`)+ &lt;/mstack&gt;

### <span id="msrow"></span>7.2 Horizontal rows &lt;mrow&gt;

In the present profile `msrow` element is used to add operator before last operand in elementary math notations such as 2D addition, subtraction and multiplication.

Element contains `mo` token followed by `mn` token

The syntax for the `msrow` element is:

&lt;msrow&gt;&lt;mo&gt;operator&lt;/mo&gt;&lt;mn&gt;operand&lt;/mn&gt;&lt;/msrow&gt;

### <span id="mlongdiv"></span>7.3 Long division &lt;mlongdiv&gt;

Elementary math notations for long division can be produced using `mlongdiv` layout schemata. Vertical alignment of `mlongdiv` is specified by `align` attribute. In current profile horizontal alignment of numbers within `mlongdiv` simply defaults to *left*, as current CSS implementations are unlikely to handle more sophisticated alignment mechanisms for `mlongdiv` layout schemata.

<table><thead><tr class="header"><th>Name</th><th>values</th><th>default</th></tr></thead><tbody><tr class="odd"><td>align</td><td>top | bottom | center | baseline</td><td>baseline</td></tr><tr class="even"><td>stackalign</td><td>left</td><td>attribute is required</td></tr></tbody></table>

Element contains `mn` token representing *result of the division* followed by `mn` token representing *divisor* and groups consisting of one or more `mn` tokens followed by optional `msline` element.

The syntax for the `mlongdiv` element is:

&lt;mlongdiv stackalign="left"&gt; (result of the division) (divisor) (one or more `mn` tokens followed by optional `msline`)+ &lt;/mlongdiv&gt;

<span id="d2e2097"></span>8 Annotations
---------------------------------------

### <span id="maction"></span>8.1 Bind Action to a Sub-Expression &lt;maction&gt;

To provide a mechanism for binding actions to expressions, MathML provides the `maction` element. The action type is specified by the `actiontype` attribute. Current profile defines only "tooltip" actiontype.

<table><thead><tr class="header"><th>Name</th><th>values</th><th>default</th></tr></thead><tbody><tr class="odd"><td>actiontype</td><td>tooltip</td><td>(required attribute, no default value)</td></tr></tbody></table>

&lt;maction actiontype="tooltip"&gt; base tooltip &lt;/maction&gt;

When a mouse cursor is placed over an expression UAs that support this action type should display the content of the second child in a "tooltip" box.

### <span id="semantics"></span>8.2 Add semantic mapping &lt;semantics&gt;

The current profile deals with layout schemata that reflect the visual structure of mathematical formulae. To attach extra semantic information that describes the content of formulae or provide an alternative encoding of a mathematical expression one can use the Content MathML `semantics` element. In current profile content model of `semantics` element is limited to presentational MathML followed by `annotation` and/or `annotation-xml` elements.

<span id="d2e2164"></span>9 Extensibility and Conformance
---------------------------------------------------------

### <span id="d2e2167"></span>9.1 Extensibility

Since the current profile is designed to be suitable for use in an XML/CSS environment, it is relatively easy to extend it by adding new elements or attributes [\[rec-xml\]](#rec-xml) to a DTD and specifying the default formatting in a style sheet. However any new elements should be placed in their own namespace and any new attributes added to existing MathML elements should have a namespace prefix; authors and implementers are strongly encouraged to use standard markup whenever possible. Similarly, maintainers of documents employing MathML extension mechanisms are encouraged to monitor relevant standards activity and to update documents to use more standardized markup as it becomes available.

### <span id="d2e2174"></span>9.2 Conformance

Documents that conform to this MathML for CSS profile should be conformant MathML 3.0 documents and should use only those MathML elements and attributes included in the current profile. The content of layout schemata with a fixed number of arguments should match the content model specified in the list of required arguments and the profile's DTD.

UAs that conform to the MathML for CSS profile should support all MathML elements and attributes included in profile. When a conformant UA encounters an element that it does not recognize it may ignore that element, but should process its content. UAs that support the standard DOM are encouraged to expose such elements through generic DOM Element interface. UAs that support style sheets are encouraged to apply formatting specified in style sheets to such elements.

<span id="d2e2181"></span>10 Differences between MathML presentational markup and present profile
-------------------------------------------------------------------------------------------------

The MathML for CSS profile differs from full MathML presentational markup in a number of ways. The present section is intended to highlight the main differences.

-   The profile drops several formatting oriented elements and attributes, including `mstyle` (an element explicitly formatting oriented and which duplicates some CSS functionality is a CSS-incompatible way), `mpadded` (also now duplicating CSS functionality is CSS incompatible way), `mglyph` (might be included in future versions of profile), `mlabeledtr` (which does not fit in the CSS table model), `malign`, `maligngroup`, `malignmark`, `malignscope`, `msgroup`, `mscarry` and `mscarries` elements. The list of dropped presentational attributes includes `accent`, `accentunder`, `align`, `alignmentscope`, `columnspacing`, `columnspan`, `columnwidth`, `depth`, `displaystyle`, `equalcolumns`, `equalrows`, `fontfamily`, `fontsize`, `fontstyle`, `fontweight`, `framespacing`, `groupalign`, `height`, `indentalign`, `indentalignfirst`, `indentalignlast`, `indentshift`, `indentshiftfirst`, `indentshiftlast`, `indenttarget`, `longdivstyle`, `lspace`, `mathbackground`, `mathcolor`, `mathsize`, `maxsize`, `minlabelspacing`, `minsize`, `mode`, `movablelimits`, `rowspacing`, `rowspan`, `rspace`, `side`, `subscriptshift`, `superscriptshift`, `symmetric`, `width (on mtable)`. Also list of supported named spaces is limited.

-   The changes affect the handling of an `mi` token element. In this MathML for CSS profile, the default value of the `mathvariant` attribute is "italic", regardless of the content of the element. For interoperability reasons, authors should specify the value of this attribute explicitly if an `mi` token contains more then one character.

-   The MathML for CSS profile does not rely on an operator dictionary because CSS selectors can not differentiate between `mo` tokens based on their content. Therefore authors are encouraged to use more explicit markup when applicable: for example, stretchy vertical delimiters are better marked using the `mfenced` construction, and stretchy over or under bars and strikes are better marked using the `menclose` element. In addition, there are `form`, `fence`, `separator`, `largeop`, `stretchar` attributes that can be used to specify the class of an operator.

-   In the MathML for CSS profile the `mfenced` schema is simplified. In particular, the `separators` attribute of an `mfenced` element is dropped, as there is no way to handle the `separator` attribute in the present CSS framework. For interoperability reasons, since the attribute does not have an empty default value, the content model was restricted to allow only one child element.

-   Multiscripts schemata is included in the profile but number of scripts is limited to at most two prescripts. It is difficult to handle mmultiscripts construction as the order of child elements inside a `mmultiscripts` element does not match their in-flow order.

-   The table model is simplified: the `mlabeledtr` element is dropped as it does not fit in the CSS table model, and many attributes have been removed.

-   The 2D elementary math layouts `mstack` and `mlongdiv` are significantly simplified. Horizontal alignment options are limited and `mscarries` construction is dropped.

-   Layout schemata with fixed number of required arguments accept only elements `mrow`, `maction`, `merror`, `mphantom` and tokens `mi`, `mn`, `mo`, `ms`, `mtext` as child elements. This restrictions is imposed to ensure that each part of layout schemata has its own containing block and is uniquely represented in document object model.

<span id="d2e2474"></span>11 Document Type Definition
-----------------------------------------------------

    <!ENTITY % common "class NMTOKENS #IMPLIED id ID #IMPLIED style CDATA #IMPLIED">
    <!ENTITY % math "(maction | menclose | merror | mfenced | mfrac | mi | mlongdiv | mmultiscripts | mn | mo | 
            mover | mphantom | mroot | mrow | ms | mspace | msqrt | mstack | msub | msubsup | msup |
            mtable | mtext | munder | munderover | semantics)+">
    <!ENTITY % mrow "(mi | mn | mo | mphantom | maction | merror | mrow | ms | mtext)">
    <!ATTLIST maction actiontype (tooltip) #REQUIRED %common;>
    <!ELEMENT maction (%mrow;,%mrow;)>
    <!ATTLIST math display (block | inline) #IMPLIED xmlns CDATA #REQUIRED
            alttext CDATA #IMPLIED altimage CDATA #IMPLIED %common;>
    <!ELEMENT math %math;>
    <!ATTLIST menclose notation (bottom | box | left | right | top | horizontalstrike) #REQUIRED %common;>
    <!ELEMENT menclose %math;>
    <!ATTLIST merror %common;>
    <!ELEMENT merror %math;>
    <!ATTLIST mfenced open CDATA #IMPLIED close CDATA #IMPLIED %common;>
    <!ELEMENT mfenced %mrow;>
    <!ATTLIST mfrac linethickness (0 | 1 | 2 | medium | thick) #IMPLIED 
            numalign (center | left | right) #IMPLIED denalign (center | left | right) #IMPLIED %common;>
    <!ELEMENT mfrac (%mrow;,%mrow;)>
    <!ATTLIST mi mathvariant (normal | bold | italic | bold-italic | sans-serif | bold-sans-serif | 
            sans-serif-italic | sans-serif-bold-italic | monospace) #IMPLIED %common;>
    <!ELEMENT mi (#PCDATA)>
    <!ATTLIST mmultiscripts %common;>
    <!ELEMENT mmultiscripts (%mrow;,mprescripts,((none,%mrow;)|(%mrow;,(none|%mrow;))))>
    <!ATTLIST mn mathvariant (normal | bold | italic | bold-italic | sans-serif | bold-sans-serif | 
            sans-serif-italic | sans-serif-bold-italic | monospace) #IMPLIED %common;>
    <!ELEMENT mn (#PCDATA)>
    <!ATTLIST mo largeop (true | false) #IMPLIED separator (true | false) #IMPLIED fence (true | false) #IMPLIED
            form (prefix | infix | postfix) #IMPLIED stretchar CDATA #IMPLIED
            mathvariant (normal | bold | italic | bold-italic | sans-serif | 
            bold-sans-serif | sans-serif-italic | sans-serif-bold-italic | monospace) #IMPLIED %common;>
    <!ELEMENT mo (#PCDATA)>
    <!ATTLIST mover %common;>
    <!ELEMENT mover (%mrow;,%mrow;)>
    <!ATTLIST mphantom %common;>
    <!ELEMENT mphantom %math;>
    <!ATTLIST mprescripts %common;>
    <!ELEMENT mprescripts EMPTY>
    <!ATTLIST mroot %common;>
    <!ELEMENT mroot (%mrow;,%mrow;)>
    <!ATTLIST mrow %common;>
    <!ELEMENT mrow %math;>
    <!ELEMENT ms (#PCDATA)>
    <!ATTLIST ms lquote CDATA #IMPLIED rquote CDATA #IMPLIED %common;>
    <!ATTLIST msqrt %common;>
    <!ELEMENT msqrt %math;>
    <!ATTLIST msub %common;>
    <!ELEMENT msub (%mrow;,%mrow;)>
    <!ATTLIST msubsup %common;>
    <!ELEMENT msubsup (%mrow;,%mrow;,%mrow;)>
    <!ATTLIST msup %common;>
    <!ELEMENT msup (%mrow;,%mrow;)>
    <!ATTLIST mtable 
        rowalign (top | bottom | center | baseline) #IMPLIED
        columnalign (left | center | right) #IMPLIED
        rowlines (none | solid | dashed) #IMPLIED
        columnlines (none | solid | dashed) #IMPLIED
        frame (none | solid | dashed) #IMPLIED %common;>
    <!ELEMENT mtable (mtr+)>
    <!ATTLIST mtd 
        rowalign (top | bottom | center | baseline) #IMPLIED
        columnalign (left | center | right) #IMPLIED %common;>
    <!ELEMENT mtd %math;>
    <!ATTLIST mtext mathvariant (normal | bold | italic | bold-italic | sans-serif | bold-sans-serif | 
            sans-serif-italic | sans-serif-bold-italic | monospace) #IMPLIED %common;>
    <!ELEMENT mtext (#PCDATA)>
    <!ATTLIST mtr 
        rowalign (top | bottom | center | baseline) #IMPLIED 
        columnalign (left | center | right) #IMPLIED %common;>
    <!ELEMENT mtr (mtd+)>
    <!ATTLIST munder %common;>
    <!ELEMENT munder (%mrow;,%mrow;)>
    <!ATTLIST munderover %common;>
    <!ELEMENT munderover (%mrow;,%mrow;,%mrow;)>
    <!ATTLIST mspace width (verythinmathspace | thinmathspace | mediummathspace | thickmathspace | verythickmathspace) #IMPLIED 
            linebreak (auto | newline | goodbreak) #IMPLIED %common;>
    <!ELEMENT mstack (mn+, msrow, msline, (mn+, msline?)+)>
    <!ATTLIST mstack align (top | bottom | center | baseline) #IMPLIED stackalign (right) #REQUIRED %common;>
    <!ELEMENT mlongdiv (mn, mn, (mn+, msline?)+)>
    <!ATTLIST mlongdiv align (top | bottom | center | baseline) #IMPLIED stackalign (left) #REQUIRED %common;>
    <!ATTLIST msrow %common;>
    <!ELEMENT msrow (mo, mn)>
    <!ELEMENT msline EMPTY>
    <!ELEMENT mspace EMPTY>
    <!ATTLIST none %common;>
    <!ELEMENT none EMPTY>
    <!ELEMENT semantics (%math;,(annotation|annotation-xml)*)>
    <!ATTLIST annotation definitionURL CDATA #IMPLIED encoding CDATA #REQUIRED>
    <!ELEMENT annotation (#PCDATA)>
    <!ATTLIST annotation-xml definitionURL CDATA #IMPLIED encoding CDATA #REQUIRED>
    <!ELEMENT annotation-xml ANY>

<span id="d2e2482"></span>12 Default CSS style sheet
----------------------------------------------------

(this section is non normative)

This profile admits a default CSS style sheet that could be used to render MathML in CSS aware UAs. In the long term perspective it would be appropriate to extend CSS3 with a few math specific properties, until then one can use style sheet enclosed below for formatting of MathML defined in the current profile.

    @namespace "http://www.w3.org/1998/Math/MathML";
    math
        {line-height:1.3em;
        text-indent:0;}
    math[display="block"]
        {display:block;
        text-align:center;
        page-break-inside:avoid;}
    mfrac
        {display:inline-table;
        white-space:nowrap;
        border-collapse:collapse;
        text-align:center;
        vertical-align:0.9em;
        margin:0 2px;
        font-size:1em;}
    mfrac > *
        {line-height:1.3em;
        font-size:0.9em;}
    mfrac > *:first-child
        {display:inline-table;
        vertical-align:text-bottom;}
    mfrac > * + *
        {border-top:solid thin;
        display:table-row;}
    mfrac[linethickness="0"] > * + *
        {border-top:none;}
    mfrac[linethickness="2"] > * + *, mfrac[linethickness="thick"] > * + *
        {border-top:solid medium;}
    mfrac[numalign="left"] > *:first-child, mfrac[denalign="left"] > * + *
        {text-align:left;}
    mfrac[numalign="right"] > *:first-child, mfrac[denalign="right"] > * + *
        {text-align:right;}
    msub, msup, msubsup, mmultiscripts
        {display:inline-table;
        line-height:0.4em;}
    msubsup, msup, mmultiscripts
        {margin-top:0.4ex;
        table-baseline:2;}
    msubsup, msub, mmultiscripts
        {margin-bottom:0.4ex;}
    msubsup, msup
        {direction:rtl;}
    msub > *
        {display:table-row;}
    none
        {content:"\A0";}
    msubsup > *, msup > *
        {display:table-row;
        direction:ltr;
        text-align:left;}
    mmultiscripts > *
        {display:none;}
    mmultiscripts > *:first-child, mmultiscripts > mprescripts + *
        {display:table-row;}
    mmultiscripts > mprescripts + * + *
        {display:table-header-group;}
    msub > *:first-child:after, msub > * + *:before, 
    msubsup > *:first-child:before, msup > *:first-child:before,
    mmultiscripts > *:first-child:before
        {display:table-cell;
        content:"\A0";}
    msubsup > * + * + *, msup > * + *
        {display:table-header-group;}
    msub > * + *, msup > * + *, msubsup > * + *, munder > * + *, mover > * + *, munderover > * + *,
    mmultiscripts > * + *
        {font-size:0.7em;}
    munder, munderover, mover
        {display:inline-table;
        margin:1px;
        text-align:center;}
    munder > *, munderover > *, mover > *
        {display:table-row;}
    mover > * + *, munderover > * + * + *
        {display:table-header-group;}
    mover, munderover
        {table-baseline:2;}
    msqrt
        {display:inline-block;
        margin:1px 0 1px 22px;
        border-top:solid 1px;
        border-left:groove 2px;
        padding:2px 5px 0 0;}
    msqrt:before
        {display:inline-block;
        vertical-align:bottom;
        content:'';
        width:22px;
        height:14px;
        background-repeat:no-repeat;
        margin:0 3px 0 -22px;}
    msqrt:before, mroot > * + *:after
        {background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAOCAYAAAArMezNAAAArklEQVR42mNgIAzkgJiRgYpAGIgnAfFvIF4JxKyUGsgOxKVA/ASI5wCxHRBvA+K9QMxHrqGRQLweiDOBmBdJnAWI5wPxeSAWJ8VAPSBOAWJTAuo6gPguEKsQY6gQEPOQ4Ih8IH4JxCYMNABhQPwOiN1pYbgzEL8C4hhaGG4AxM+BuJgWhisB8W0g7qOF4SJAfBqIl1EjI6EDbiDeAcQ7SUxlRAGQa5cA8RkGGoFeACG1GGdqegJfAAAAAElFTkSuQmCC");}
    mroot
        {display:inline-table;
        direction:rtl;}
    mroot > *
        {display:table-cell;
        direction:ltr;
        text-align:left;}
    mroot > *:first-child
        {border-top:solid 1px;
        border-left:groove 2px;
        padding:2px 5px 0 3px;}
    mroot > * + *
        {vertical-align:bottom;
        text-align:right;
        font-size:0.7em;
        line-height:1em;}
    mroot > * + *:after
        {display:block;
        content:"";
        width:22px;
        height:14px;
        margin-right:-1px;
        margin-left:auto;}
    mfenced
        {display:inline-table;
        border-collapse:separate;
        border-spacing:0.2ex 0;
        white-space:nowrap;
        margin:1px;}
    mfenced > *:first-child
        {display:table-row;}
    mfenced > * + *
        {display:none;}
    mfenced > *:before, mfenced > *:after
        {display:table-cell;
        content:"\A0";
        background-repeat:no-repeat;
        background-size:100% 100%;}
    mfenced > *:before
        {background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAABQCAYAAAAZQFV3AAABtElEQVR42s2ZK0hEURCGr8UiPhYVRJAFoxssFtsafDXRKLogNpNNDDazTSxiMYhoMdtWsAibtKhssCj4ALWIoM4s58Awdb7gD3+45eO8z5z/FgWnfnEfAWoTz4tHCJhCdsQDBGxKXBd3EbBl8a14kIBtiF+pMdsS/4pnCNic+Ed8SMAq4g/xM7HWetIEaFdrROtOEuySgE0kmHqB2FKNBLtP3yGtmtatRWGd4scEexF3RIHrpnV7xGRcG+BsFDZuYO/i9ihw3wCPicn4NMDFKHDJwNS9UeCBgTWJ2W0a4GkUVnbd3YwCaw44TY6fOnyQ3hjYE3FUfRngVRQ45Lp7FgVWHXA3Clyhl8y2A4ZvtyMHnIwCzx1wLAq8cMDRKLDhgMNR4J0DlqPABwcsRYFvDtgdBX47YPHvgHiX8UnBlw2+sPGthx8O+PGFH7D4FVAt4EsKv0bxi16FliIqvFjCyzm84FShJbEfR6Rox58V+MNHhT7NVPjjUYU+b1X4AxyPCFRoiKHCYxYVGgRloVGVCg/TVGjcl4UGklloZJqFhrpZaOychQbjWWh0b7co9nPBqvX74w/Kju1j59IjnwAAAABJRU5ErkJggg==");}
    mfenced > *:after
        {background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAABQCAYAAAAZQFV3AAABl0lEQVR42s3ZPyhFYRjH8ddiEa5cJaVbd2SwWGwM/m1yR3FKNpNNBpvZJossBonFbKMs6k4s6A4Wyp/CIoXfqXd4etbnOzj1Wz+97znv3+eklFJV6UvwM6TMK20k2q9sZxx7upRzZYpEB5RbZYl+p6/KOonOKL/KJokeKD/KHAWWY/RZ+VCGKbTIXS8/VIVCLzN6TIGNDJaZIMBySt5nsElN0VXTyhUC7FBeMviodBLormnlGgHOGvCaANuVd4OOEeiRAfcIcMGAn8TH6TVgmUWilS0D7hPgiQFbBLjhul2LgtMOLKJg1YHIe3wy4A0BXhnwKwFL2qnr9mAU3HHgOD10lqNg4cCtKDjpwMMoOOrAsyg44sCLKFh3YDMK1hx4FwV7HPgQBbsd+EbMZwt+/zsQ7zL+UfBhgw9sfOrhiwO+fOELLL4F4JsUvo3iGz16FMEPS/hxDj9w4kdi9NCOXyvwiw96NcMvj/j1Fr2A4yUCtIiBl1nwQhBaqkKLaXi5Dy1IoiVTtKiLlp3Rwjhaukd/LqC/P/4AwHbtY0GeJ20AAAAASUVORK5CYII=");}
    mfenced[open="["] > *:before
        {border-style:solid;
        border-width:1px 0 1px 1px;
        background-image:none;}
    mfenced[close="]"] > *:after
        {border-style:solid;
        border-width:1px 1px 1px 0;
        background-image:none;}
    mfenced[open="\2016"] > *:before
        {border-style:double;
        border-width:0 0 0 3px;
        background-image:none;}
    mfenced[close="\2016"] > *:after
        {border-style:double;
        border-width:0 3px 0 0;
        background-image:none;}
    mfenced[open="\27e6"] > *:before
        {border-style:double;
        border-width:2px 0 2px 3px;
        background-image:none;}
    mfenced[close="\27e7"] > *:after
        {border-style:double;
        border-width:2px 3px 2px 0;
        background-image:none;}
    mfenced[open="|"] > *:before
        {border-style:solid;
        border-width:0 0 0 1px;
        background-image:none;}
    mfenced[close="|"] > *:after
        {border-style:solid;
        border-width:0 1px 0 0;
        background-image:none;}
    mfenced[open="\230a"] > *:before
        {border-style:solid;
        border-width:0 0 1px 1px;
        background-image:none;}
    mfenced[close="\230b"] > *:after
        {border-style:solid;
        border-width:0 1px 1px 0;
        background-image:none;}
    mfenced[open="\2308"] > *:before
        {border-style:solid;
        border-width:1px 0 0 1px;
        background-image:none;}
    mfenced[close="\2309"] > *:after
        {border-style:solid;
        border-width:1px 1px 0 0;
        background-image:none;}
    mfenced[open="{"] > *:before
        {content:"\A0\A0";
        background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAABQCAYAAAAZQFV3AAABuklEQVR42rWZuy9EURCHj0c8Qta7pRMh0WgUqBQqG4leNGRL2VZpO6GiIYobHf+DhIiSf8AjFBIkmwiNRNZvsmdjtM53J/naL+fec+7MnLkhpMeoWBZDoi1F1C12REW0pK6qQ1yIY+AJQ5M4ES+inxCWRU2UCFmXeBWfokAIN+PqMkJmG1GNwnlCWIyyL9FJCI+i8IqQNcfNMOE2IZyNMmOJPHvGGCHMouw7NQE04iYKHwlZazwqJjwjhJPu/R0SwkUn3CKEa05YJhOCsUoI95ywSAhPnXCGEF464QQhvHbCEUJ4SwvvnXCQED47YQ8hrNLCdydEUlfNkRwFJ3sjhONOeE4IF5zwgBD61LVBCPfDb3GaSpUNiI8o3CVWV4myu1Bv45J3176QBzGdKlsRT6FeP9r/I7DPqU8MizmxLnpTVoQL8UfOfVNyOTa5HGz808slOeDpC0+weAkIAS5SFngZxQs93orgzRLezuENJ94S4007fq3ALz741Qy/POLXW/wCboGOCCzwIQY+ZsEHQfioygIdpoWQw7gPH0j6RJFRQnyo689kiRLig/HGBmGj+0agPxd8/Pn98QMoXcSZw6bNQwAAAABJRU5ErkJggg==");}
    mfenced[close="}"] > *:after
        {content:"\A0\A0";
        background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAABQCAYAAAAZQFV3AAABoklEQVR42sWZvUpDQRBGxx+iosS/2GoXJIKNjYVapbAyCPbBRrEMaS1NJ1ppo1gEO30HQZGU+gIxooWgQkC0ESR+iwOZBzjghdMe9t7dnZ39rplZRkyJDZE38OkTNXEgRkjxubgRg5RwQryKC9FDSXdER1QpYVZ8iTcxTEnrPspdSlh0YZuaoCHx7dISNcqGC88o4b4L0+T0EsJ1FyaWCeFsECJrMhWOHxfWqe/45MJ7SnjlwrSE+gnhafiO84RwLwjXCGE1CLcI4WYQIoWiFIRHhHApCC8J4VwQ3hLCmSC8o4VNQpgLwhYhHA3CF1rYJoSZIPygKk4ngDzvQZglhNdBWCCEJ0G4SggrBpewBeseVsfUxBy68FNMEsLU1j24tEaNclE8+o4pUNIB+ztnnkXZwGdMbIsVMS3GfZv+vxB9ZXRS8GWDLmx86+HFAS9feIHFjwD0kMKPUfygx1sRvFnC2zm84cRbYrxpx68V+MUHv5rhl0f8eotfwNGIAA8x8JgFD4LwqAoN0/C4Dw8k0cgUD3XR2BkPxrHoHvu5gP7++AUnfMSZodLInwAAAABJRU5ErkJggg==");}
    mfenced[open="\27e8"] > *:before, mfenced[open="\2329"] > *:before
        {background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAABZCAYAAAA+TwS/AAAB50lEQVR42s2ZPyiFURiHj7+Lrkhks0goEqtFWSilW8oqg5GULExWk5K6g26ZrFI3i24Go8kkkWQwSPkTA673lzOcvu7kfZSnfuvTe77vnO+c834hsORgX+gjZR2WIVI4T8oaLGukcNYyTgoPLfWUbNiyR1ZXtOQpWbvl0dJECfVmDyhZneXWMkcJZywfljZKeGIpUzKt2YplkRLuRmEXIdMze7OcUdWtxurWqalyE4UDhDAfZZfUcMtRuEnIBqNMGSWEhSi7t9R4Za2W1ygsENWtJMOd9MpqLddR9mRp9Aqnk+r2ieEeJ8JZr6zf8hVl75Zmr3Anqa7klbVYXhLhgle4nMg+LZ0emVbCVSI89VY3lcgqcWK7OMoIuz2y3mSqKOfe6rYz1W14ZJq4zxnhiEe4lJHdeKfKRUa45RFOZGTKmEdYysgews+2+St6MlNFKXqq26oy3GmP8K6KsPVfVYg/Q/wt/8k8xFcKvpb/5GuDfw8F/sUW6J4i8F0P35cFenIQ+NlGoKcvgZ8PBXqCFfgZG78FhADfUwR+kwoBvusJ/DYqygG8Lwv8Ro/3HATaFRF430agnSWB974E2p0TeP8Q73AKtAcr8C6xKAawjy3wTrtA/wUI/G8F/j9FzNNC/J+U6KOFuW87Lt0vtp6NAwAAAABJRU5ErkJggg==");}
    mfenced[close="\27e9"] > *:after, mfenced[close="\232A"] > *:after
        {background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAABZCAYAAAA+TwS/AAAByElEQVR42s2ZPSjFURiH/z4XkZvIZpFQJFaLslDqdkvdVQYjqZuFyWq6JXUH3TJZpW4WyWA0mSS6yWCQ8hGDr9+pdzid7vY+g1PP+vSe//89H+97sizLOjN4jNDCCdFHS5dp4aZoI4WzokgKW8UxPe0DMUkKC6JKCjvEs+glpUf2x7GxJO5FCyXsEV9ikYzyTJyTwlXxa2scGQMm3CejvBQf9k2RsWVRblDCMRPWyRS6MWmBEu6Y8IwSTpswME4Im8SjCStUlBUTvoscIZyPpl0ihO3ixYR3opmQHkZR5glhMRKeEsIu8WnCHzFKSGtRlHuEcCUSvolur7BffEfSdSLKi0h4ayvJNUqRMLDgFQ4mwhNi2leRMKTQsFe4nUS56xVOJcJXS3zXqCfSNa+wnAivvSk0kwgDcx5hOFafEmHNO+1qIgwpNOQR5htMu+wR5hoIH/5VhOg3xP8ynof4SkHXMr7b4PshumPjZwp+6qHnMn5zwO826O0Lvx/iN1j0jo1XAXidglZSeK2HV6N4vYxW9HjPAe+KoH0bvLOE975CmmDdObx/iHc40R4s3iXG+9hopx1/C8BfK/D3FPTFB3+Twl/N0He9P0bV3S+iamc2AAAAAElFTkSuQmCC");}
    mfenced[open=""] > *:before, mfenced[close=""] > *:after
        {content:normal;}
    mover > * + mo[fence="true"], munder > * + mo[fence="true"]
        {content:"\A0";
        line-height:1ex;
        background-size:100% 100%;
        background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAUCAYAAAAa2LrXAAABxElEQVR42u2YsUsCURzHnxlncmJlttYWkeDi4pBNDU6J0C4tRmPc2phb2KSL0iBt9T8EhTjWP2CFDoInCFKLINe3+gaH1ekdZ6S8L3yWd+/d7/v7+t5xpxD/WwqRcqhlIuVQa0TKoXaIlANlwCHJyDjsaQs0wRJpckxqhFZADnSBZhrXOJbjHCkoyF2VBFlQBC/AAM/AZ5rr45jBOUWuSfIewWkNYR5EwR4bOgEFcA2q4B7UwRNocRf1GMRvPIL4D7XivGa1tscaLdas00OVngr0mKXnKHv4E82BBI9TBTyA/oiG7DAA50C18KByzsDFun32UmFvCfbqihZAClwA3UXT73TALSiBYxCz4SvGNSXeo+OyN509p5iBbanc6l2L3dIAN6AMTvnrHbDoNoiAdRIGi2SSn2aKqU7YVD9CTyl61Oi5zB4aFru6yyzUcQx4eHN9aIvXwBlIg00xm9+nCntLs9fa0CNKZzYeq+N6xcmvfCbsAv8MhjWu/MygwkwMZvTtWAfAHWiDIzHFrwUTVJDZtJlVwHwxDy5BSOY0UiFmlf8a2BCfb/hS9pRjdmIfeGUetuVldmJVZuFYH9nJv8ydS3kDn8bEmYaXZFsAAAAASUVORK5CYII=");}
    munder > * + mo[fence="true"]
        {background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAUCAYAAAAa2LrXAAABzElEQVR42u2Xv0tCURzFrxlPRbEyW2uLSHBxccimBqdEaJcWozFcG3MLm3RRGqSt/oegEEf7B6zQQVBBkFoEsfPsCA8zX+9m0Y974LNc773f7znvPrlPCCE0oSSrYXYrKgdpDbPbA3aVhWXZmZ1YB2mVh2Wlmd1QGXABfCoXU/mYVcY46AG3oAkOgVfl9EZeZtNkVp7xCU5wCQbgGRTBDnD949BczKDITAbMyPneAhtIgRYn6/RAGZyCONgQf/Pqo9FbnF7L9D7KocVsbB/ZzA2OQcewgZE+qIFrUAAn3HwfxMAWCIA14gcLRPviEEZ1/Ib6AfYUY48p9lyghxo9TfLaYRZumYacLHo+dipnQRvcgDw4AiELfYW4Js892jPurUXPsWmvq1XNgQifnv6fcDd2xD+LfgLOTJ60m3P6M6zbo5civUXo9Vs0D4JgFyR51LPgCpRABVTBA2jwdeiaGLoH4Qm1wvxt2touazRYs8oeSuwpyx6T7DlID79S+rVgE0RpKAeeGMQjcBjmOjg24Jwc10S5h7p2Ucvi9Ybf4es0Uopjac5RMpF+qupgkdQ5pmRBCXBAEioOOW0TJUmtEiVJLRElSWnih393vwCZOsSZn592GQAAAABJRU5ErkJggg==");}
    menclose
        {display:inline-table;
        border-collapse:separate;
        border-spacing:0.4ex 0;}
    menclose[notation="top"]
        {border-top:solid thin;}
    menclose[notation="bottom"]
        {border-bottom:solid thin;}
    menclose[notation="right"]
        {border-right:solid thin;}
    menclose[notation="left"]
        {border-left:solid thin;}
    menclose[notation="box"]
        {border:solid thin;}
    menclose[notation="horizontalstrike"]
        {text-decoration:line-through;}
    mtable
        {display:inline-table;
        line-height:1.5em;
        text-align:center;
        vertical-align:middle;}
    mtr
        {display:table-row;}
    mtd
        {display:table-cell;
        padding:0 0.5ex;}
    mtable[columnalign="left"], mtr[columnalign="left"], mtd[columnalign="left"]
        {text-align:left;}
    mtable[columnalign="right"], mtr[columnalign="right"], mtd[columnalign="right"]
        {text-align:right;}
    mtable[rowalign="top"] mtd, mtable mtr[rowalign="top"] mtd, 
    math mtable mtr mtd[rowalign="top"]
        {vertical-align:top}
    mtable[rowalign="bottom"] mtd, mtable mtr[rowalign="bottom"] mtd, 
    math mtable mtr mtd[rowalign="bottom"]
        {vertical-align:bottom}
    mtable[rowalign="center"] mtd, mtable mtr[rowalign="center"] mtd, 
    math mtable mtr mtd[rowalign="center"]
        {vertical-align:middle}
    mtable[frame="solid"]
        {border:solid thin;}
    mtable[frame="dashed"]
        {border:dashed thin;}
    mtable[rowlines="solid"], mtable[rowlines="dashed"], 
    mtable[columnlines="solid"], mtable[columnlines="dashed"]
        {border-collapse:collapse;}
    mtable[rowlines="solid"] > mtr + mtr
        {border-top:solid thin;}
    mtable[rowlines="dashed"] > mtr + mtr
        {border-top:dashed thin;}
    mtable[columnlines="solid"] > mtr > mtd + mtd
        {border-left:solid thin;}
    mtable[columnlines="dashed"] > mtr > mtd + mtd
        {border-left:dashed thin;}
    mspace[linebreak="goodbreak"]:before
        {content:"\200B";
        white-space:normal;}
    mspace[linebreak="newline"]:before, mspace[linebreak="indentingnewline"]:before 
        {content:"\000A";
        white-space:pre;}
    mspace[width]:before
        {content:normal;}
    mspace[width="verythinmathspace"]
        {padding:0 0.05em;}
    mspace[width="thinmathspace"]
        {padding:0 0.08em;}
    mspace[width="mediummathspace"]
        {padding:0 0.11em;}
    mspace[width="thickmathspace"]
        {padding:0 0.14em;}
    mspace[width="verythickmathspace"]
        {padding:0 0.17em;}
    mo[largeop="true"]
        {font-size:1.3em;
        vertical-align:-0.1ex;}
    mo[form="infix"], * + mo
        {padding:0 0.3ex;}
    mo[form="prefix"]
        {padding:0 0 0 0.5ex;}
    mo[form="postfix"]
        {padding:0 0.5ex 0 0;}
    mo[fence="true"], mo[separator="true"]
        {padding:0;}
    mi[mathvariant="bold"], mi[mathvariant="bold-italic"], mi[mathvariant="bold-sans-serif"], 
    mi[mathvariant="sans-serif-bold-italic"],mn[mathvariant="bold"], mn[mathvariant="bold-italic"], 
    mn[mathvariant="bold-sans-serif"], mn[mathvariant="sans-serif-bold-italic"],mo[mathvariant="bold"], 
    mo[mathvariant="bold-italic"], mo[mathvariant="bold-sans-serif"], mo[mathvariant="sans-serif-bold-italic"],
    ms[mathvariant="bold"], ms[mathvariant="bold-italic"], ms[mathvariant="bold-sans-serif"], 
    ms[mathvariant="sans-serif-bold-italic"],mtext[mathvariant="bold"], mtext[mathvariant="bold-italic"], 
    mtext[mathvariant="bold-sans-serif"], mtext[mathvariant="sans-serif-bold-italic"]
        {font-weight:bold;
        font-style:normal;}
    mi[mathvariant="monospace"], mn[mathvariant="monospace"],mo[mathvariant="monospace"], 
    ms[mathvariant="monospace"],mtext[mathvariant="monospace"]
        {font-family:monospace;
        font-style:normal;}
    mi[mathvariant="sans-serif"], mi[mathvariant="bold-sans-serif"], mi[mathvariant="bold-sans-serif"], 
    mi[mathvariant="sans-serif-italic"], mi[mathvariant="sans-serif-bold-italic"],mn[mathvariant="bold-sans-serif"],
    mn[mathvariant="sans-serif"], mn[mathvariant="bold-sans-serif"], mn[mathvariant="sans-serif-italic"],
    mn[mathvariant="sans-serif-bold-italic"], mo[mathvariant="sans-serif"], mo[mathvariant="bold-sans-serif"], 
    mo[mathvariant="bold-sans-serif"], mo[mathvariant="sans-serif-italic"], mo[mathvariant="sans-serif-bold-italic"], 
    ms[mathvariant="sans-serif"], ms[mathvariant="bold-sans-serif"], ms[mathvariant="bold-sans-serif"], 
    ms[mathvariant="sans-serif-italic"], ms[mathvariant="sans-serif-bold-italic"], mtext[mathvariant="sans-serif"], 
    mtext[mathvariant="bold-sans-serif"], mtext[mathvariant="bold-sans-serif"], mtext[mathvariant="sans-serif-italic"], 
    mtext[mathvariant="sans-serif-bold-italic"]
        {font-family:sans-serif;
        font-style:normal;}
    mi, mi[mathvariant="italic"], mi[mathvariant="bold-italic"],mi[mathvariant="sans-serif-italic"], 
    mi[mathvariant="sans-serif-bold-italic"],mn[mathvariant="italic"], mn[mathvariant="bold-italic"],
    mn[mathvariant="sans-serif-italic"], mn[mathvariant="sans-serif-bold-italic"],mo[mathvariant="italic"], 
    mo[mathvariant="bold-italic"],mo[mathvariant="sans-serif-italic"], mo[mathvariant="sans-serif-bold-italic"],
    ms[mathvariant="italic"], ms[mathvariant="bold-italic"],ms[mathvariant="sans-serif-italic"], 
    ms[mathvariant="sans-serif-bold-italic"],mtext[mathvariant="italic"], mtext[mathvariant="bold-italic"],
    mtext[mathvariant="sans-serif-italic"], mtext[mathvariant="sans-serif-bold-italic"]
        {font-style:italic;}
    mi[mathvariant="normal"], mn[mathvariant="normal"], mo[mathvariant="normal"], 
    ms[mathvariant="normal"], mtext[mathvariant="normal"]
        {font-style:normal;}
    ms:before, ms:after 
        {content:"\0022"}
    ms[lquote]:before 
        {content:attr(lquote)}
    ms[rquote]:after 
        {content:attr(rquote)}
    mphantom 
        {visibility:hidden}
    merror
        {outline:solid thin red}
    merror:before
        {content:"Error: "}
    mrow
        {white-space:nowrap;}
    math[display='block']
        {display:block;
        margin:1em 0 1em 3em;}
    mstack, mlongdiv
        {display:inline-table;
        font-family:monospace;}
    mstack
        {text-align:right;
        border-collapse:collapse;}
    mstack[align='top'], mlongdiv[align='top']
        {vertical-align:top;}
    mstack[align='bottom'], mlongdiv[align='bottom'] 
        {vertical-align:bottom;}
    mstack[align='center'], mlongdiv[align='center']
        {vertical-align:middle;}
    msline
        {display:block;
        border-bottom:solid thin;}
    mstack > *, mlongdiv > mn:first-child
        {display:table-row;}
    mlongdiv > *:first-child + *
        {display:table-cell;}
    mlongdiv > *:first-child + * + *
        {border-top:solid thin;}
    mlongdiv > *:first-child:before
        {display:table-cell;
        content:'\a0';}
    mlongdiv > *:first-child + *:after
        {content:')';}
    mlongdiv > *
        {display:block;}
    mscarry
        {display:none;}
    maction > * + *
        {display:none;}
    maction[actiontype="tooltip"]:focus > * + *,
    maction[actiontype="tooltip"]:hover > * + *
        {position:fixed;
        display:block;
        top:0;
        left:0;
        background-color:InfoBackground;
        color:InfoText;
        padding:0.5ex;
        border:solid 1px;}
    annotation, annotation-xml
        {display:none;}


<span id="references"></span>13 References
------------------------------------------

<span id="css"></span>css  
[Cascading Style Sheets, level 2 revision 1](http://www.w3.org/TR/CSS21/), Bert Bos, Tantek Çelik, Ian Hickson, Håkon Wium Lie. W3C Recommendation 7 June 2011.

<span id="css2"></span>css2  
[Cascading Style Sheets, level 2 CSS2 Specification](http://www.w3.org/TR/1998/REC-CSS2-19980512/), Bert Bos, Håkon Wium Lie, Chris Lilley, Ian Jacobs. May 1998.

<span id="rec-xml"></span>rec-xml  
[Extensible Markup Language (XML) 1.0 (Fifth Edition)](http://www.w3.org/TR/REC-xml/), Tim Bray, Jean Paoli, C. M. Sperberg-McQueen, Eve Maler, and François Yergeau (editors). W3C Recommendation 26 November 2008.

<span id="rec-xmlns"></span>rec-xmlns  
[Namespaces in XML 1.0 (Third Edition)](http://www.w3.org/TR/REC-xml-names/), Tim Bray, Dave Hollander, Andrew Layman, Richard Tobin, Henry S. Thompson. W3C Recommendation 8 December 2009.

<span id="mathml"></span>mathml  
[Mathematical Markup Language (MathML) Version 3.0](http://www.w3.org/TR/MathML3/), David Carlisle, Patrick Ion, Robert Miner. W3C Recommendation, 21 October 2010.

<span id="mathml1"></span>mathml1  
[Mathematical Markup Language (MathML) 1.0 Specification](http://www.w3.org/TR/1998/REC-MathML-19980407/), Patrick Ion, Robert Miner. April 1998.

<span id="roadmap"></span>roadmap  
[Math Working Group Roadmap 2007/8](http://www.w3.org/Math/Roadmap/), Patrick Ion, Robert Miner. March 2007, document subject to update. \[See especially [2.2.1](http://www.w3.org/Math/Roadmap/overview.html#mathmlcss)\]
