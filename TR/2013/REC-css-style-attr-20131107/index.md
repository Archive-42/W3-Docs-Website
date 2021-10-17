[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

CSS Style Attributes
====================

W3C Recommendation <span class="dt-updated"><span class="value-title" title="20131107">07 November 2013</span></span>
---------------------------------------------------------------------------------------------------------------------

This version:   
<a href="http://www.w3.org/TR/2013/REC-css-style-attr-20131107/" class="u-url">http://www.w3.org/TR/2013/REC-css-style-attr-20131107/</a>

Latest version:   
<http://www.w3.org/TR/css-style-attr>

Editor's draft:   
<http://dev.w3.org/csswg/css-style-attr/> ([change log](https://dvcs.w3.org/hg/csswg/log/tip/css-style-attr/Overview.src.html))

Previous version:   
<a href="http://www.w3.org/TR/2013/PR-css-style-attr-20131003/" class="u-url">http://www.w3.org/TR/2013/PR-css-style-attr-20131003/</a>

Feedback:   
[www-style@w3.org](mailto:www-style@w3.org?subject=%5Bcss-style-attr%5D%20feedback) with subject line “\[css-style-attr\] … message topic …” ([archives](http://lists.w3.org/Archives/Public/www-style/))

Editors:   
<a href="http://tantek.com/" class="p-name fn u-url url">Tantek Çelik</a> (<a href="https://mozilla.org/" class="p-org org h-org">Mozilla</a>, and formerly at [Microsoft Corporation](http://microsoft.com/)) &lt;<a href="mailto:tantek@cs.stanford.edu" class="u-email email">tantek@cs.stanford.edu</a>&gt;

<a href="http://fantasai.inkedblade.net/contact" class="p-name fn n u-url url"><span class="p-given-name given-name">Elika</span> J. <span class="p-family-name family-name">Etemad</span></a> (<a href="https://mozilla.org/" class="p-org org h-org">Mozilla</a>)

Previous Editors:   
<a href="http://www.w3.org/People/Bos/" class="fn url">Bert Bos</a> (<a href="http://www.w3.org/" class="org">W3C</a>), &lt;<a href="mailto:bert@w3.org" class="email">bert@w3.org</a>&gt;

<span class="fn">Marc Attinasi</span> (<span class="org">AOL/Netscape</span>), &lt;<a href="mailto:attinasi@netscape.com" class="email">attinasi@netscape.com</a>&gt;

Test suite:   
<http://test.csswg.org/suites/css-style-attr/nightly-unstable/>

Please refer to the [**errata**](http://www.w3.org/Style/2013/REC-css-style-attr-20131107-errata.html) for this document, which may include some normative corrections.

See also [**translations**](http://www.w3.org/2003/03/Translations/byTechnology?technology=css-style-attr).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2013 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

Abstract
--------

<span class="p-summary"> Markup languages such as HTML [\[HTML401\]](#HTML401) and SVG [\[SVG11\]](#SVG11) provide a style attribute on most elements, to hold inline style information that applies to those elements. This draft describes the syntax and interpretation of the CSS fragment that can be used in such style attributes. </span>

Status of this document
-----------------------

This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

Please see the Working Group's [implementation report](http://test.csswg.org/suites/css-style-attr/nightly-unstable/report/results.html). One test is not passed, although this is due to bugs in browser implementation of xml:base and attribute (non)ordering, not the style attribute itself. The equivalent test for HTML (including the xml serialisation of HTML5) is passed by multiple implementations.

No changes to this document have been made since the previous version.

The ([archived](http://lists.w3.org/Archives/Public/www-style/)) public mailing list [www-style@w3.org](mailto:www-style@w3.org?Subject=%5Bcss-style-attr%5D%20PUT%20SUBJECT%20HERE) (see [instructions](http://www.w3.org/Mail/Request)) is preferred for discussion of this specification. When sending e-mail, please put the text “css-style-attr” in the subject, preferably like this: “\[css-style-attr\] *…summary of comment…*”

This document was produced by the [CSS Working Group](http://www.w3.org/Style/CSS/members) (part of the [Style Activity](http://www.w3.org/Style/)).

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/). W3C maintains a [public list of any patent disclosures](http://www.w3.org/2004/01/pp-impl/32061/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

Table of Contents
-----------------

-   [<span class="secno">1. </span>Introduction](#intro)
-   [<span class="secno">2. </span>Conformance](#conformance)
-   [<span class="secno">3. </span>Syntax and Parsing](#syntax)
-   [<span class="secno">4. </span>Cascading and Interpretation](#interpret)
-   [<span class="secno">5. </span>Acknowledgments](#ack)
-   [<span class="secno">6. </span>References](#references)
    -   [Normative references](#normative-references)
    -   [Informative references](#informative-references)

<span class="secno">1. </span>Introduction
------------------------------------------

Some document formats have a style attribute to permit the author to directly apply style information to specific elements in documents. If a document format defines a style attribute (whether named ‘`style`’ or something else) and the attribute accepts CSS as its value, then this specification defines that <span id="style-attribute0">style attribute</span>’s syntax and interpretation.

The following example shows the use of the `style` attribute in HTML [\[HTML401\]](#HTML401):

    <p style="color: #090; line-height: 1.2">...</p>

<span class="secno">2. </span>Conformance
-----------------------------------------

A document or implementation cannot conform to CSS Style Attributes alone, but can claim conformance to CSS Style Attributes if it satisfies the conformance requirements in this specification when implementing CSS together with style attribute handling as defined in a document language that has one or more CSS style attributes.

Conformance to CSS Style Attributes is defined for two classes:

document   
A document represented in a document language that defines a style attribute for one or more of its elements.

interpreter   
Someone or something that interprets the semantics of a document and its associated style information. (Most CSS [user agents](http://www.w3.org/TR/CSS21/conform.html#user-agent) fall under this category.)

The conformance requirements are expressed with a combination of descriptive assertions and RFC 2119 terminology. The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in the normative parts of this document are to be interpreted as described in RFC 2119. However, for readability, these words do not appear in all uppercase letters in this specification. All of the text of this specification is normative except sections explicitly marked as non-normative, examples, and notes. [\[RFC2119\]](#RFC2119)

Examples in this specification are introduced with the words "for example" or are set apart from the normative text with `class="example"`, like this:

This is an example of an informative example.

Informative notes begin with the word "Note" and are set apart from the normative text with `class="note"`, like this:

Note, this is an informative note.

<span class="secno">3. </span>Syntax and Parsing
------------------------------------------------

The value of the style attribute must match the syntax of the contents of a CSS [declaration block](http://www.w3.org/TR/CSS21/syndata.html#rule-sets) (excluding the delimiting braces), whose formal grammar is given below in the terms and conventions of the [CSS core grammar](http://www.w3.org/TR/CSS21/syndata.html#syntax):


    declaration-list

      : S* declaration? [ ';' S* declaration? ]*

      ;

Note that following the CSS2.1 convention, comment tokens are not shown in the rule above.

The interpreter must parse the style attribute's value using the same forward-compatible parsing rules that apply to parsing declaration block contents in a normal CSS style sheet. See [chapter 4 of the CSS2.1 specification](http://www.w3.org/TR/CSS21/syndata.html) for details. [\[CSS21\]](#CSS21)

Note that because there is no open brace delimiting the declaration list in the CSS style attribute syntax, a close brace (`}`) in the style attribute's value does not terminate the style data: it is merely an invalid token.

<span class="secno">4. </span>Cascading and Interpretation
----------------------------------------------------------

The declarations in a style attribute apply to the element to which the attribute belongs. In the cascade, these declarations are considered to have author origin and a specificity higher than any selector. CSS2.1 [defines](http://www.w3.org/TR/CSS21/cascade.html#specificity) how style sheets and style attributes are cascaded together. [\[CSS21\]](#CSS21) Relative URLs in the style data must be resolved relative to the style attribute's element (or to the document if per-element resolution is not defined) when the attribute's value is parsed.

Aside from the differences in cascading, the declarations in a style attribute must be interpreted exactly as if they were given in a CSS style rule that applies to the element.

The CSS Working Group strongly recommends that document languages do not allow multiple CSS style attributes on a single element. If a document language allows multiple CSS style attributes, each must be parsed independently and treated as a separate style rule, the ordering of which should be defined by the document language, else is undefined.

<span class="secno">5. </span>Acknowledgments
---------------------------------------------

Thanks to feedback from <span class="vcard"><span class="fn">Daniel Glazman</span></span>, <span class="vcard"><span class="fn">Ian Hickson</span></span>, <span class="vcard"><span class="fn n"><span class="given-name">Eric</span> A. <span class="family-name">Meyer</span></span></span>, <span class="vcard"><span class="fn">Björn Höhrmann</span></span>.

<span class="secno">6. </span>References
----------------------------------------

### Normative references

\[CSS21\]

Bert Bos; et al. [Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification.](http://www.w3.org/TR/2011/REC-CSS2-20110607) 7 June 2011. W3C Recommendation. URL: <http://www.w3.org/TR/2011/REC-CSS2-20110607>

\[RFC2119\]

S. Bradner. [Key words for use in RFCs to Indicate Requirement Levels.](http://www.ietf.org/rfc/rfc2119.txt) Internet RFC 2119. URL: <http://www.ietf.org/rfc/rfc2119.txt>

### Informative references

\[HTML401\]

Dave Raggett; Arnaud Le Hors; Ian Jacobs. [HTML 4.01 Specification.](http://www.w3.org/TR/1999/REC-html401-19991224) 24 December 1999. W3C Recommendation. URL: <http://www.w3.org/TR/1999/REC-html401-19991224>

\[SVG11\]

Erik Dahlström; et al. [Scalable Vector Graphics (SVG) 1.1 (Second Edition).](http://www.w3.org/TR/2011/REC-SVG11-20110816/) 16 August 2011. W3C Recommendation. URL: <http://www.w3.org/TR/2011/REC-SVG11-20110816/>
