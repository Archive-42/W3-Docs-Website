[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

Extensible Stylesheet Language (XSL) Version 1.0
================================================

W3C Recommendation 15 October 2001
----------------------------------

This version:  
<http://www.w3.org/TR/2001/REC-xsl-20011015/>  
( [PDF by RenderX](http://www.w3.org/TR/2001/REC-xsl-20011015/xslspecRX.pdf), [XML file](http://www.w3.org/TR/2001/REC-xsl-20011015/xslspec.xml), [HTML (one large file)](http://www.w3.org/TR/2001/REC-xsl-20011015/xslspec.html), [ZIP file](http://www.w3.org/TR/2001/REC-xsl-20011015/xs011015.zip) )

Latest version:  
<http://www.w3.org/TR/xsl/>  

Previous version:  
<http://www.w3.org/TR/2001/PR-xsl-20010828/>  

Authors and Contributors:  
Sharon Adler (IBM) [&lt;sca@us.ibm.com&gt;](mailto:sca@us.ibm.com)  
Anders Berglund (IBM) [&lt;alrb@us.ibm.com&gt;](mailto:alrb@us.ibm.com)  
Jeff Caruso (Pageflex) [&lt;jcaruso@pageflexinc.com&gt;](mailto:jcaruso@pageflexinc.com)  
Stephen Deach (Adobe) [&lt;sdeach@adobe.com&gt;](mailto:sdeach@adobe.com)  
Tony Graham (Sun) [&lt;Tony.Graham@ireland.sun.com&gt;](mailto:Tony.Graham@ireland.sun.com)  
Paul Grosso (Arbortext) [&lt;paul@arbortext.com&gt;](mailto:paul@arbortext.com)  
Eduardo Gutentag (Sun) [&lt;eduardo.gutentag@eng.sun.com&gt;](mailto:eduardo.gutentag@eng.sun.com)  
Alex Milowski [&lt;alex@milowski.com&gt;](mailto:alex@milowski.com)  
Scott Parnell (Xerox) [&lt;Scott.Parnell@usa.xerox.com&gt;](mailto:Scott.Parnell@usa.xerox.com)  
Jeremy Richman [&lt;JeremyRichman@compuserve.com&gt;](mailto:JeremyRichman@compuserve.com)  
Steve Zilles (Adobe) [&lt;szilles@adobe.com&gt;](mailto:szilles@adobe.com)  

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice-20000612#Copyright) ©2001 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.lcs.mit.edu/), [INRIA](http://www.inria.fr/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice-20000612#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice-20000612#W3C_Trademarks), [document use](http://www.w3.org/Consortium/Legal/copyright-documents-19990405) and [software licensing](http://www.w3.org/Consortium/Legal/copyright-software-19980720) rules apply.

------------------------------------------------------------------------

<span id="abstract">Abstract</span>
-----------------------------------

This specification defines the features and syntax for the Extensible Stylesheet Language (XSL), a language for expressing stylesheets. It consists of two parts:

1.  a language for transforming XML documents, and

2.  an XML vocabulary for specifying formatting semantics.

An XSL stylesheet specifies the presentation of a class of XML documents by describing how an instance of the class is transformed into an XML document that uses the formatting vocabulary.

<span id="status">Status of this document</span>
------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. The latest status of this series of documents is maintained at the W3C.*

This document has been reviewed by W3C Members and other interested parties and has been endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited as a normative reference from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

This document has been produced as part of the [W3C Style Activity](http://www.w3.org/Style/) by the [XSL Working Group](http://www.w3.org/Style/XSL/Group/) ([members only](http://cgi.w3.org/MemberAccess/AccessRequest)).

General public discussion of XSL takes place on the [XSL-List](http://www.mulberrytech.com/xsl/xsl-list/index.html) mailing list.

Please report errors in this document to <xsl-editors@w3.org>. [Archives](http://lists.w3.org/Archives/Public/xsl-editors/) of the comments are available. The list of known errors in this specification is available at <http://www.w3.org/2001/10/REC-XSL-20011015-errata>. Some text in the property definitions has been copied from the CSS2 Recommendation and the list of errors in this specification is available at <http://www.w3.org/Style/css2-updates/REC-CSS2-19980512-errata.html>.

A list of current W3C Recommendations and other technical documents can be found at <http://www.w3.org/TR/>.

<span id="contents">Table of contents</span>
--------------------------------------------

1 [Introduction and Overview](slice1.html#section-N629-Introduction-and-Overview)  
    1.1 [Processing a Stylesheet](slice1.html#section-N639-Processing-a-Stylesheet)  
        1.1.1 [Tree Transformations](slice1.html#section-N697-Tree-Transformations)  
        1.1.2 [Formatting](slice1.html#section-N742-Formatting)  
    1.2 [Benefits of XSL](slice1.html#section-N879-Benefits-of-XSL)  
        1.2.1 [Paging and Scrolling](slice1.html#section-N897-Paging-and-Scrolling)  
        1.2.2 [Selectors and Tree Construction](slice1.html#section-N962-Selectors-and-Tree-Construction)  
        1.2.3 [An Extended Page Layout Model](slice1.html#section-N971-An-Extended-Page-Layout-Model)  
        1.2.4 [A Comprehensive Area Model](slice1.html#section-N988-A-Comprehensive-Area-Model)  
        1.2.5 [Internationalization and Writing-Modes](slice1.html#section-N1002-Internationalization-and-Writing-Modes)  
        1.2.6 [Linking](slice1.html#section-N1044-Linking)  
2 [XSL Transformation](slice2.html#section-N1077-XSL-Transformation)  
    2.1 [Tree Construction](slice2.html#section-N1083-Tree-Construction)  
    2.2 [XSL Namespace](slice2.html#xsl-namespace)  
3 [Introduction to Formatting](slice3.html#fo-jc-intro)  
    3.1 [Conceptual Procedure](slice3.html#section-N1253-Conceptual-Procedure)  
4 [Area Model](slice4.html#area_model)  
    4.1 [Introduction](slice4.html#area-intro)  
    4.2 [Rectangular Areas](slice4.html#area-rect)  
        4.2.1 [Area Types](slice4.html#section-N1520-Area-Types)  
        4.2.2 [Common Traits](slice4.html#area-common)  
        4.2.3 [Geometric Definitions](slice4.html#area-geo)  
        4.2.4 [Tree Ordering](slice4.html#area-treeorder)  
        4.2.5 [Stacking Constraints](slice4.html#area-stackcon)  
        4.2.6 [Font Baseline Tables](slice4.html#area-font)  
    4.3 [Spaces and Conditionality](slice4.html#spacecond)  
        4.3.1 [Space-resolution Rules](slice4.html#area-space)  
        4.3.2 [Overconstrained space-specifiers](slice4.html#bpd-slack)  
    4.4 [Block-areas](slice4.html#area-block)  
        4.4.1 [Stacked Block-areas](slice4.html#area-stackblock)  
        4.4.2 [Intrusion Adjustments](slice4.html#intrusadjust)  
    4.5 [Line-areas](slice4.html#area-line)  
    4.6 [Inline-areas](slice4.html#area-inline)  
        4.6.1 [Stacked Inline-areas](slice4.html#area-stackinline)  
        4.6.2 [Glyph-areas](slice4.html#area-glyph)  
    4.7 [Ordering Constraints](slice4.html#area-order)  
        4.7.1 [General Ordering Constraints](slice4.html#area-genorder)  
        4.7.2 [Line-building](slice4.html#area-linebuild)  
        4.7.3 [Inline-building](slice4.html#area-inlinebuild)  
    4.8 [Keeps and Breaks](slice4.html#keepbreak)  
    4.9 [Rendering Model](slice4.html#rendmodel)  
        4.9.1 [Geometry](slice4.html#rend-geo)  
        4.9.2 [Viewport Geometry](slice4.html#rend-view)  
        4.9.3 [Visibility](slice4.html#rend-vis)  
        4.9.4 [Border, Padding, and Background](slice4.html#rend-border)  
        4.9.5 [Intrinsic Marks](slice4.html#rend-intrinsic)  
        4.9.6 [Layering and Conflict of Marks](slice4.html#rend-layer)  
    4.10 [Sample Area Tree](slice4.html#area-tree-sample)  
5 [Property Refinement / Resolution](slice5.html#refinement)  
    5.1 [Specified, Computed, and Actual Values, and Inheritance](slice5.html#speccomact)  
        5.1.1 [Specified Values](slice5.html#section-N5693-Specified-Values)  
        5.1.2 [Computed Values](slice5.html#section-N5717-Computed-Values)  
        5.1.3 [Actual Values](slice5.html#section-N5740-Actual-Values)  
        5.1.4 [Inheritance](slice5.html#inheritance)  
    5.2 [Shorthand Expansion](slice5.html#shortexpan)  
    5.3 [Computing the Values of Corresponding Properties](slice5.html#compcorr)  
        5.3.1 [Border and Padding Properties](slice5.html#refine-border-padding)  
        5.3.2 [Margin, Space, and Indent Properties](slice5.html#section-N5987-Margin,-Space,-and-Indent-Properties)  
        5.3.3 [Height, and Width Properties](slice5.html#section-N6057-Height,-and-Width-Properties)  
        5.3.4 [Overconstrained Geometry](slice5.html#overcons_geom)  
    5.4 [Simple Property to Trait Mapping](slice5.html#section-N6342-Simple-Property-to-Trait-Mapping)  
        5.4.1 [Background-position-horizontal and background-position-vertical Properties](slice5.html#section-N6369-Background-position-horizontal-and-background-position-vertical-Properties)  
        5.4.2 [Column-number Property](slice5.html#section-N6377-Column-number-Property)  
        5.4.3 [Text-align Property](slice5.html#section-N6385-Text-align-Property)  
        5.4.4 [Text-align-last Property](slice5.html#section-N6393-Text-align-last-Property)  
        5.4.5 [z-index Property](slice5.html#section-N6401-z-index-Property)  
    5.5 [Complex Property to Trait Mapping](slice5.html#section-N6410-Complex-Property-to-Trait-Mapping)  
        5.5.1 [Word spacing and Letter spacing Properties](slice5.html#section-N6419-Word-spacing-and-Letter-spacing-Properties)  
        5.5.2 [Reference-orientation Property](slice5.html#refine-reference-orientation)  
        5.5.3 [Writing-mode and Direction Properties](slice5.html#refine-writing-mode)  
        5.5.4 [Absolute-position Property](slice5.html#refine-absolute-pos)  
        5.5.5 [Relative-position Property](slice5.html#refine-relative-pos)  
        5.5.6 [Text-decoration Property](slice5.html#refine-text-decoration)  
        5.5.7 [Font Properties](slice5.html#fontprops)  
    5.6 [Non-property Based Trait Generation](slice5.html#section-N6691-Non-property-Based-Trait-Generation)  
    5.7 [Property Based Transformations](slice5.html#section-N6702-Property-Based-Transformations)  
        5.7.1 [Text-transform Property](slice5.html#section-N6706-Text-transform-Property)  
    5.8 [Unicode BIDI Processing](slice5.html#section-N6720-Unicode-BIDI-Processing)  
    5.9 [Expressions](slice5.html#section-N6961-Expressions)  
        5.9.1 [Property Context](slice5.html#section-N6968-Property-Context)  
        5.9.2 [Evaluation Order](slice5.html#section-N7024-Evaluation-Order)  
        5.9.3 [Basics](slice5.html#section-N7034-Basics)  
        5.9.4 [Function Calls](slice5.html#section-N7097-Function-Calls)  
        5.9.5 [Numerics](slice5.html#numbers)  
        5.9.6 [Absolute Numerics](slice5.html#section-N7517-Absolute-Numerics)  
        5.9.7 [Relative Numerics](slice5.html#section-N7546-Relative-Numerics)  
        5.9.8 [Strings](slice5.html#section-N7599-Strings)  
        5.9.9 [Colors](slice5.html#section-N7618-Colors)  
        5.9.10 [Keywords](slice5.html#section-N7652-Keywords)  
        5.9.11 [Lexical Structure](slice5.html#section-N7676-Lexical-Structure)  
        5.9.12 [Expression Value Conversions](slice5.html#expr.value.conv)  
        5.9.13 [Definitions of Units of Measure](slice5.html#section-N8185-Definitions-of-Units-of-Measure)  
    5.10 [Core Function Library](slice5.html#section-N8434-Core-Function-Library)  
        5.10.1 [Number Functions](slice5.html#section-N8438-Number-Functions)  
        5.10.2 [Color Functions](slice5.html#expr-color-functions)  
        5.10.3 [Font Functions](slice5.html#section-N8601-Font-Functions)  
        5.10.4 [Property Value Functions](slice5.html#section-N8624-Property-Value-Functions)  
    5.11 [Property Datatypes](slice5.html#section-N8794-Property-Datatypes)  
6 [Formatting Objects](slice6.html#fo-section)  
    6.1 [Introduction to Formatting Objects](slice6.html#section-N9204-Introduction-to-Formatting-Objects)  
        6.1.1 [Definitions Common to Many Formatting Objects](slice6.html#define-returned-by)  
    6.2 [Formatting Object Content](slice6.html#section-N9447-Formatting-Object-Content)  
    6.3 [Formatting Objects Summary](slice6.html#section-N9494-Formatting-Objects-Summary)  
    6.4 [Declarations and Pagination and Layout Formatting Objects](slice6.html#section-N10029-Declarations-and-Pagination-and-Layout-Formatting-Objects)  
        6.4.1 [Introduction](slice6.html#pag-intro)  
        6.4.2 [fo:root](slice6.html#fo_root)  
        6.4.3 [fo:declarations](slice6.html#fo_declarations)  
        6.4.4 [fo:color-profile](slice6.html#fo_color-profile)  
        6.4.5 [fo:page-sequence](slice6.html#fo_page-sequence)  
        6.4.6 [fo:layout-master-set](slice6.html#fo_layout-master-set)  
        6.4.7 [fo:page-sequence-master](slice6.html#fo_page-sequence-master)  
        6.4.8 [fo:single-page-master-reference](slice6.html#fo_single-page-master-reference)  
        6.4.9 [fo:repeatable-page-master-reference](slice6.html#fo_repeatable-page-master-reference)  
        6.4.10 [fo:repeatable-page-master-alternatives](slice6.html#fo_repeatable-page-master-alternatives)  
        6.4.11 [fo:conditional-page-master-reference](slice6.html#fo_conditional-page-master-reference)  
        6.4.12 [fo:simple-page-master](slice6.html#fo_simple-page-master)  
        6.4.13 [fo:region-body](slice6.html#fo_region-body)  
        6.4.14 [fo:region-before](slice6.html#fo_region-before)  
        6.4.15 [fo:region-after](slice6.html#fo_region-after)  
        6.4.16 [fo:region-start](slice6.html#fo_region-start)  
        6.4.17 [fo:region-end](slice6.html#fo_region-end)  
        6.4.18 [fo:flow](slice6.html#fo_flow)  
        6.4.19 [fo:static-content](slice6.html#fo_static-content)  
        6.4.20 [fo:title](slice6.html#fo_title)  
    6.5 [Block-level Formatting Objects](slice6.html#section-N12764-Block-level-Formatting-Objects)  
        6.5.1 [Introduction](slice6.html#section-N12769-Introduction)  
        6.5.2 [fo:block](slice6.html#fo_block)  
        6.5.3 [fo:block-container](slice6.html#fo_block-container)  
    6.6 [Inline-level Formatting Objects](slice6.html#section-N13277-Inline-level-Formatting-Objects)  
        6.6.1 [Introduction](slice6.html#section-N13282-Introduction)  
        6.6.2 [fo:bidi-override](slice6.html#fo_bidi-override)  
        6.6.3 [fo:character](slice6.html#fo_character)  
        6.6.4 [fo:initial-property-set](slice6.html#fo_initial-property-set)  
        6.6.5 [fo:external-graphic](slice6.html#fo_external-graphic)  
        6.6.6 [fo:instream-foreign-object](slice6.html#fo_instream-foreign-object)  
        6.6.7 [fo:inline](slice6.html#fo_inline)  
        6.6.8 [fo:inline-container](slice6.html#fo_inline-container)  
        6.6.9 [fo:leader](slice6.html#fo_leader)  
        6.6.10 [fo:page-number](slice6.html#fo_page-number)  
        6.6.11 [fo:page-number-citation](slice6.html#fo_page-number-citation)  
    6.7 [Formatting Objects for Tables](slice6.html#section-N15442-Formatting-Objects-for-Tables)  
        6.7.1 [Introduction](slice6.html#section-N15447-Introduction)  
        6.7.2 [fo:table-and-caption](slice6.html#fo_table-and-caption)  
        6.7.3 [fo:table](slice6.html#fo_table)  
        6.7.4 [fo:table-column](slice6.html#fo_table-column)  
        6.7.5 [fo:table-caption](slice6.html#fo_table-caption)  
        6.7.6 [fo:table-header](slice6.html#fo_table-header)  
        6.7.7 [fo:table-footer](slice6.html#fo_table-footer)  
        6.7.8 [fo:table-body](slice6.html#fo_table-body)  
        6.7.9 [fo:table-row](slice6.html#fo_table-row)  
        6.7.10 [fo:table-cell](slice6.html#fo_table-cell)  
    6.8 [Formatting Objects for Lists](slice6.html#section-N17076-Formatting-Objects-for-Lists)  
        6.8.1 [Introduction](slice6.html#section-N17081-Introduction)  
        6.8.2 [fo:list-block](slice6.html#fo_list-block)  
        6.8.3 [fo:list-item](slice6.html#fo_list-item)  
        6.8.4 [fo:list-item-body](slice6.html#fo_list-item-body)  
        6.8.5 [fo:list-item-label](slice6.html#fo_list-item-label)  
    6.9 [Dynamic Effects: Link and Multi Formatting Objects](slice6.html#section-N17805-Dynamic-Effects:-Link-and-Multi-Formatting-Objects)  
        6.9.1 [Introduction](slice6.html#section-N17812-Introduction)  
        6.9.2 [fo:basic-link](slice6.html#fo_basic-link)  
        6.9.3 [fo:multi-switch](slice6.html#fo_multi-switch)  
        6.9.4 [fo:multi-case](slice6.html#fo_multi-case)  
        6.9.5 [fo:multi-toggle](slice6.html#fo_multi-toggle)  
        6.9.6 [fo:multi-properties](slice6.html#fo_multi-properties)  
        6.9.7 [fo:multi-property-set](slice6.html#fo_multi-property-set)  
    6.10 [Out-of-Line Formatting Objects](slice6.html#section-N18509-Out-of-Line-Formatting-Objects)  
        6.10.1 [Introduction](slice6.html#section-N18514-Introduction)  
        6.10.2 [fo:float](slice6.html#fo_float)  
        6.10.3 [fo:footnote](slice6.html#fo_footnote)  
        6.10.4 [fo:footnote-body](slice6.html#fo_footnote-body)  
    6.11 [Other Formatting Objects](slice6.html#section-N19019-Other-Formatting-Objects)  
        6.11.1 [Introduction](slice6.html#section-N19024-Introduction)  
        6.11.2 [fo:wrapper](slice6.html#fo_wrapper)  
        6.11.3 [fo:marker](slice6.html#fo_marker)  
        6.11.4 [fo:retrieve-marker](slice6.html#fo_retrieve-marker)  
7 [Formatting Properties](slice7.html#pr-section)  
    7.1 [Description of Property Groups](slice7.html#section-N19349-Description-of-Property-Groups)  
    7.2 [XSL Areas and the CSS Box Model](slice7.html#cssbox)  
    7.3 [Reference Rectangle for Percentage Computations](slice7.html#percrule)  
    7.4 [Common Accessibility Properties](slice7.html#common-accessibility-properties)  
        7.4.1 [source-document](slice7.html#source-document)  
        7.4.2 [role](slice7.html#role)  
    7.5 [Common Absolute Position Properties](slice7.html#common-absolute-position-properties)  
        7.5.1 [absolute-position](slice7.html#absolute-position)  
        7.5.2 [top](slice7.html#top)  
        7.5.3 [right](slice7.html#right)  
        7.5.4 [bottom](slice7.html#bottom)  
        7.5.5 [left](slice7.html#left)  
    7.6 [Common Aural Properties](slice7.html#common-aural-properties)  
        7.6.1 [azimuth](slice7.html#azimuth)  
        7.6.2 [cue-after](slice7.html#cue-after)  
        7.6.3 [cue-before](slice7.html#cue-before)  
        7.6.4 [elevation](slice7.html#elevation)  
        7.6.5 [pause-after](slice7.html#pause-after)  
        7.6.6 [pause-before](slice7.html#pause-before)  
        7.6.7 [pitch](slice7.html#pitch)  
        7.6.8 [pitch-range](slice7.html#pitch-range)  
        7.6.9 [play-during](slice7.html#play-during)  
        7.6.10 [richness](slice7.html#richness)  
        7.6.11 [speak](slice7.html#speak)  
        7.6.12 [speak-header](slice7.html#speak-header)  
        7.6.13 [speak-numeral](slice7.html#speak-numeral)  
        7.6.14 [speak-punctuation](slice7.html#speak-punctuation)  
        7.6.15 [speech-rate](slice7.html#speech-rate)  
        7.6.16 [stress](slice7.html#stress)  
        7.6.17 [voice-family](slice7.html#voice-family)  
        7.6.18 [volume](slice7.html#volume)  
    7.7 [Common Border, Padding, and Background Properties](slice7.html#common-border-padding-and-background-properties)  
        7.7.1 [background-attachment](slice7.html#background-attachment)  
        7.7.2 [background-color](slice7.html#background-color)  
        7.7.3 [background-image](slice7.html#background-image)  
        7.7.4 [background-repeat](slice7.html#background-repeat)  
        7.7.5 [background-position-horizontal](slice7.html#background-position-horizontal)  
        7.7.6 [background-position-vertical](slice7.html#background-position-vertical)  
        7.7.7 [border-before-color](slice7.html#border-before-color)  
        7.7.8 [border-before-style](slice7.html#border-before-style)  
        7.7.9 [border-before-width](slice7.html#border-before-width)  
        7.7.10 [border-after-color](slice7.html#border-after-color)  
        7.7.11 [border-after-style](slice7.html#border-after-style)  
        7.7.12 [border-after-width](slice7.html#border-after-width)  
        7.7.13 [border-start-color](slice7.html#border-start-color)  
        7.7.14 [border-start-style](slice7.html#border-start-style)  
        7.7.15 [border-start-width](slice7.html#border-start-width)  
        7.7.16 [border-end-color](slice7.html#border-end-color)  
        7.7.17 [border-end-style](slice7.html#border-end-style)  
        7.7.18 [border-end-width](slice7.html#border-end-width)  
        7.7.19 [border-top-color](slice7.html#border-top-color)  
        7.7.20 [border-top-style](slice7.html#border-top-style)  
        7.7.21 [border-top-width](slice7.html#border-top-width)  
        7.7.22 [border-bottom-color](slice7.html#border-bottom-color)  
        7.7.23 [border-bottom-style](slice7.html#border-bottom-style)  
        7.7.24 [border-bottom-width](slice7.html#border-bottom-width)  
        7.7.25 [border-left-color](slice7.html#border-left-color)  
        7.7.26 [border-left-style](slice7.html#border-left-style)  
        7.7.27 [border-left-width](slice7.html#border-left-width)  
        7.7.28 [border-right-color](slice7.html#border-right-color)  
        7.7.29 [border-right-style](slice7.html#border-right-style)  
        7.7.30 [border-right-width](slice7.html#border-right-width)  
        7.7.31 [padding-before](slice7.html#padding-before)  
        7.7.32 [padding-after](slice7.html#padding-after)  
        7.7.33 [padding-start](slice7.html#padding-start)  
        7.7.34 [padding-end](slice7.html#padding-end)  
        7.7.35 [padding-top](slice7.html#padding-top)  
        7.7.36 [padding-bottom](slice7.html#padding-bottom)  
        7.7.37 [padding-left](slice7.html#padding-left)  
        7.7.38 [padding-right](slice7.html#padding-right)  
    7.8 [Common Font Properties](slice7.html#common-font-properties)  
        7.8.1 [Fonts and Font Data](slice7.html#font-model)  
        7.8.2 [font-family](slice7.html#font-family)  
        7.8.3 [font-selection-strategy](slice7.html#font-selection-strategy)  
        7.8.4 [font-size](slice7.html#font-size)  
        7.8.5 [font-stretch](slice7.html#font-stretch)  
        7.8.6 [font-size-adjust](slice7.html#font-size-adjust)  
        7.8.7 [font-style](slice7.html#font-style)  
        7.8.8 [font-variant](slice7.html#font-variant)  
        7.8.9 [font-weight](slice7.html#font-weight)  
    7.9 [Common Hyphenation Properties](slice7.html#common-hyphenation-properties)  
        7.9.1 [country](slice7.html#country)  
        7.9.2 [language](slice7.html#language)  
        7.9.3 [script](slice7.html#script)  
        7.9.4 [hyphenate](slice7.html#hyphenate)  
        7.9.5 [hyphenation-character](slice7.html#hyphenation-character)  
        7.9.6 [hyphenation-push-character-count](slice7.html#hyphenation-push-character-count)  
        7.9.7 [hyphenation-remain-character-count](slice7.html#hyphenation-remain-character-count)  
    7.10 [Common Margin Properties-Block](slice7.html#common-margin-properties-block)  
        7.10.1 [margin-top](slice7.html#margin-top)  
        7.10.2 [margin-bottom](slice7.html#margin-bottom)  
        7.10.3 [margin-left](slice7.html#margin-left)  
        7.10.4 [margin-right](slice7.html#margin-right)  
        7.10.5 [space-before](slice7.html#space-before)  
        7.10.6 [space-after](slice7.html#space-after)  
        7.10.7 [start-indent](slice7.html#start-indent)  
        7.10.8 [end-indent](slice7.html#end-indent)  
    7.11 [Common Margin Properties-Inline](slice7.html#common-margin-properties-inline)  
        7.11.1 [space-end](slice7.html#space-end)  
        7.11.2 [space-start](slice7.html#space-start)  
    7.12 [Common Relative Position Properties](slice7.html#common-relative-position-properties)  
        7.12.1 [relative-position](slice7.html#relative-position)  
    7.13 [Area Alignment Properties](slice7.html#area-alignment)  
        7.13.1 [alignment-adjust](slice7.html#alignment-adjust)  
        7.13.2 [alignment-baseline](slice7.html#alignment-baseline)  
        7.13.3 [baseline-shift](slice7.html#baseline-shift)  
        7.13.4 [display-align](slice7.html#display-align)  
        7.13.5 [dominant-baseline](slice7.html#dominant-baseline)  
        7.13.6 [relative-align](slice7.html#relative-align)  
    7.14 [Area Dimension Properties](slice7.html#section-N36094-Area-Dimension-Properties)  
        7.14.1 [block-progression-dimension](slice7.html#block-progression-dimension)  
        7.14.2 [content-height](slice7.html#content-height)  
        7.14.3 [content-width](slice7.html#content-width)  
        7.14.4 [height](slice7.html#height)  
        7.14.5 [inline-progression-dimension](slice7.html#inline-progression-dimension)  
        7.14.6 [max-height](slice7.html#max-height)  
        7.14.7 [max-width](slice7.html#max-width)  
        7.14.8 [min-height](slice7.html#min-height)  
        7.14.9 [min-width](slice7.html#min-width)  
        7.14.10 [scaling](slice7.html#scaling)  
        7.14.11 [scaling-method](slice7.html#scaling-method)  
        7.14.12 [width](slice7.html#width)  
    7.15 [Block and Line-related Properties](slice7.html#section-N38191-Block-and-Line-related-Properties)  
        7.15.1 [hyphenation-keep](slice7.html#hyphenation-keep)  
        7.15.2 [hyphenation-ladder-count](slice7.html#hyphenation-ladder-count)  
        7.15.3 [last-line-end-indent](slice7.html#last-line-end-indent)  
        7.15.4 [line-height](slice7.html#line-height)  
        7.15.5 [line-height-shift-adjustment](slice7.html#line-height-shift-adjustment)  
        7.15.6 [line-stacking-strategy](slice7.html#line-stacking-strategy)  
        7.15.7 [linefeed-treatment](slice7.html#linefeed-treatment)  
        7.15.8 [white-space-treatment](slice7.html#white-space-treatment)  
        7.15.9 [text-align](slice7.html#text-align)  
        7.15.10 [text-align-last](slice7.html#text-align-last)  
        7.15.11 [text-indent](slice7.html#text-indent)  
        7.15.12 [white-space-collapse](slice7.html#white-space-collapse)  
        7.15.13 [wrap-option](slice7.html#wrap-option)  
    7.16 [Character Properties](slice7.html#section-N40545-Character-Properties)  
        7.16.1 [character](slice7.html#character)  
        7.16.2 [letter-spacing](slice7.html#letter-spacing)  
        7.16.3 [suppress-at-line-break](slice7.html#suppress-at-line-break)  
        7.16.4 [text-decoration](slice7.html#text-decoration)  
        7.16.5 [text-shadow](slice7.html#text-shadow)  
        7.16.6 [text-transform](slice7.html#text-transform)  
        7.16.7 [treat-as-word-space](slice7.html#treat-as-word-space)  
        7.16.8 [word-spacing](slice7.html#word-spacing)  
    7.17 [Color-related Properties](slice7.html#section-N42081-Color-related-Properties)  
        7.17.1 [color](slice7.html#color)  
        7.17.2 [color-profile-name](slice7.html#color-profile-name)  
        7.17.3 [rendering-intent](slice7.html#rendering-intent)  
    7.18 [Float-related Properties](slice7.html#section-N42546-Float-related-Properties)  
        7.18.1 [clear](slice7.html#clear)  
        7.18.2 [float](slice7.html#float)  
        7.18.3 [intrusion-displace](slice7.html#intrusion-displace)  
    7.19 [Keeps and Breaks Properties](slice7.html#section-N43268-Keeps-and-Breaks-Properties)  
        7.19.1 [break-after](slice7.html#break-after)  
        7.19.2 [break-before](slice7.html#break-before)  
        7.19.3 [keep-together](slice7.html#keep-together)  
        7.19.4 [keep-with-next](slice7.html#keep-with-next)  
        7.19.5 [keep-with-previous](slice7.html#keep-with-previous)  
        7.19.6 [orphans](slice7.html#orphans)  
        7.19.7 [widows](slice7.html#widows)  
    7.20 [Layout-related Properties](slice7.html#section-N44408-Layout-related-Properties)  
        7.20.1 [clip](slice7.html#clip)  
        7.20.2 [overflow](slice7.html#overflow)  
        7.20.3 [reference-orientation](slice7.html#reference-orientation)  
        7.20.4 [span](slice7.html#span)  
    7.21 [Leader and Rule Properties](slice7.html#section-N45132-Leader-and-Rule-Properties)  
        7.21.1 [leader-alignment](slice7.html#leader-alignment)  
        7.21.2 [leader-pattern](slice7.html#leader-pattern)  
        7.21.3 [leader-pattern-width](slice7.html#leader-pattern-width)  
        7.21.4 [leader-length](slice7.html#leader-length)  
        7.21.5 [rule-style](slice7.html#rule-style)  
        7.21.6 [rule-thickness](slice7.html#rule-thickness)  
    7.22 [Properties for Dynamic Effects Formatting Objects](slice7.html#section-N46115-Properties-for-Dynamic-Effects-Formatting-Objects)  
        7.22.1 [active-state](slice7.html#active-state)  
        7.22.2 [auto-restore](slice7.html#auto-restore)  
        7.22.3 [case-name](slice7.html#case-name)  
        7.22.4 [case-title](slice7.html#case-title)  
        7.22.5 [destination-placement-offset](slice7.html#destination-placement-offset)  
        7.22.6 [external-destination](slice7.html#external-destination)  
        7.22.7 [indicate-destination](slice7.html#indicate-destination)  
        7.22.8 [internal-destination](slice7.html#internal-destination)  
        7.22.9 [show-destination](slice7.html#show-destination)  
        7.22.10 [starting-state](slice7.html#starting-state)  
        7.22.11 [switch-to](slice7.html#switch-to)  
        7.22.12 [target-presentation-context](slice7.html#target-presentation-context)  
        7.22.13 [target-processing-context](slice7.html#target-processing-context)  
        7.22.14 [target-stylesheet](slice7.html#target-stylesheet)  
    7.23 [Properties for Markers](slice7.html#section-N48193-Properties-for-Markers)  
        7.23.1 [marker-class-name](slice7.html#marker-class-name)  
        7.23.2 [retrieve-class-name](slice7.html#retrieve-class-name)  
        7.23.3 [retrieve-position](slice7.html#retrieve-position)  
        7.23.4 [retrieve-boundary](slice7.html#retrieve-boundary)  
    7.24 [Properties for Number to String Conversion](slice7.html#section-N48804-Properties-for-Number-to-String-Conversion)  
        7.24.1 [format](slice7.html#format)  
        7.24.2 [grouping-separator](slice7.html#grouping-separator)  
        7.24.3 [grouping-size](slice7.html#grouping-size)  
        7.24.4 [letter-value](slice7.html#letter-value)  
    7.25 [Pagination and Layout Properties](slice7.html#section-N49321-Pagination-and-Layout-Properties)  
        7.25.1 [blank-or-not-blank](slice7.html#blank-or-not-blank)  
        7.25.2 [column-count](slice7.html#column-count)  
        7.25.3 [column-gap](slice7.html#column-gap)  
        7.25.4 [extent](slice7.html#extent)  
        7.25.5 [flow-name](slice7.html#flow-name)  
        7.25.6 [force-page-count](slice7.html#force-page-count)  
        7.25.7 [initial-page-number](slice7.html#initial-page-number)  
        7.25.8 [master-name](slice7.html#master-name)  
        7.25.9 [master-reference](slice7.html#master-reference)  
        7.25.10 [maximum-repeats](slice7.html#maximum-repeats)  
        7.25.11 [media-usage](slice7.html#media-usage)  
        7.25.12 [odd-or-even](slice7.html#odd-or-even)  
        7.25.13 [page-height](slice7.html#page-height)  
        7.25.14 [page-position](slice7.html#page-position)  
        7.25.15 [page-width](slice7.html#page-width)  
        7.25.16 [precedence](slice7.html#precedence)  
        7.25.17 [region-name](slice7.html#region-name)  
    7.26 [Table Properties](slice7.html#section-N52000-Table-Properties)  
        7.26.1 [border-after-precedence](slice7.html#border-after-precedence)  
        7.26.2 [border-before-precedence](slice7.html#border-before-precedence)  
        7.26.3 [border-collapse](slice7.html#border-collapse)  
        7.26.4 [border-end-precedence](slice7.html#border-end-precedence)  
        7.26.5 [border-separation](slice7.html#border-separation)  
        7.26.6 [border-start-precedence](slice7.html#border-start-precedence)  
        7.26.7 [caption-side](slice7.html#caption-side)  
        7.26.8 [column-number](slice7.html#column-number)  
        7.26.9 [column-width](slice7.html#column-width)  
        7.26.10 [empty-cells](slice7.html#empty-cells)  
        7.26.11 [ends-row](slice7.html#ends-row)  
        7.26.12 [number-columns-repeated](slice7.html#number-columns-repeated)  
        7.26.13 [number-columns-spanned](slice7.html#number-columns-spanned)  
        7.26.14 [number-rows-spanned](slice7.html#number-rows-spanned)  
        7.26.15 [starts-row](slice7.html#starts-row)  
        7.26.16 [table-layout](slice7.html#table-layout)  
        7.26.17 [table-omit-footer-at-break](slice7.html#table-omit-footer-at-break)  
        7.26.18 [table-omit-header-at-break](slice7.html#table-omit-header-at-break)  
    7.27 [Writing-mode-related Properties](slice7.html#writing-mode-related)  
        7.27.1 [direction](slice7.html#direction)  
        7.27.2 [glyph-orientation-horizontal](slice7.html#glyph-orientation-horizontal)  
        7.27.3 [glyph-orientation-vertical](slice7.html#glyph-orientation-vertical)  
        7.27.4 [text-altitude](slice7.html#text-altitude)  
        7.27.5 [text-depth](slice7.html#text-depth)  
        7.27.6 [unicode-bidi](slice7.html#unicode-bidi)  
        7.27.7 [writing-mode](slice7.html#writing-mode)  
    7.28 [Miscellaneous Properties](slice7.html#section-N56509-Miscellaneous-Properties)  
        7.28.1 [content-type](slice7.html#content-type)  
        7.28.2 [id](slice7.html#id)  
        7.28.3 [provisional-label-separation](slice7.html#provisional-label-separation)  
        7.28.4 [provisional-distance-between-starts](slice7.html#provisional-distance-between-starts)  
        7.28.5 [ref-id](slice7.html#ref-id)  
        7.28.6 [score-spaces](slice7.html#score-spaces)  
        7.28.7 [src](slice7.html#src)  
        7.28.8 [visibility](slice7.html#visibility)  
        7.28.9 [z-index](slice7.html#z-index)  
    7.29 [Shorthand Properties](slice7.html#section-N57854-Shorthand-Properties)  
        7.29.1 [background](slice7.html#background)  
        7.29.2 [background-position](slice7.html#background-position)  
        7.29.3 [border](slice7.html#border)  
        7.29.4 [border-bottom](slice7.html#border-bottom)  
        7.29.5 [border-color](slice7.html#border-color)  
        7.29.6 [border-left](slice7.html#border-left)  
        7.29.7 [border-right](slice7.html#border-right)  
        7.29.8 [border-style](slice7.html#border-style)  
        7.29.9 [border-spacing](slice7.html#border-spacing)  
        7.29.10 [border-top](slice7.html#border-top)  
        7.29.11 [border-width](slice7.html#border-width)  
        7.29.12 [cue](slice7.html#cue)  
        7.29.13 [font](slice7.html#font)  
        7.29.14 [margin](slice7.html#margin)  
        7.29.15 [padding](slice7.html#padding)  
        7.29.16 [page-break-after](slice7.html#page-break-after)  
        7.29.17 [page-break-before](slice7.html#page-break-before)  
        7.29.18 [page-break-inside](slice7.html#page-break-inside)  
        7.29.19 [pause](slice7.html#pause)  
        7.29.20 [position](slice7.html#position)  
        7.29.21 [size](slice7.html#size)  
        7.29.22 [vertical-align](slice7.html#vertical-align)  
        7.29.23 [white-space](slice7.html#white-space)  
        7.29.24 [xml:lang](slice7.html#xml:lang)  
8 [Conformance](slice8.html#conform)  

### Appendices

A [Internationalization](sliceA.html#section-N62576-Internationalization)  
    A.1 [Additional writing-mode values](sliceA.html#writing-mode-add)  
B [Formatting Object Summary](sliceB.html#FO-summary)  
    B.1 [Declaration and Pagination and Layout Formatting Objects](sliceB.html#section-N62923-Declaration-and-Pagination-and-Layout-Formatting-Objects)  
    B.2 [Block Formatting Objects](sliceB.html#section-N63533-Block-Formatting-Objects)  
    B.3 [Inline Formatting Objects](sliceB.html#section-N63649-Inline-Formatting-Objects)  
    B.4 [Table Formatting Objects](sliceB.html#section-N63998-Table-Formatting-Objects)  
    B.5 [List Formatting Objects](sliceB.html#section-N64345-List-Formatting-Objects)  
    B.6 [Link and Multi Formatting Objects](sliceB.html#ConfMulti)  
    B.7 [Out-of-line Formatting Objects](sliceB.html#section-N64772-Out-of-line-Formatting-Objects)  
    B.8 [Other Formatting Objects](sliceB.html#section-N64929-Other-Formatting-Objects)  
C [Property Summary](sliceC.html#property-index)  
    C.1 [Explanation of Trait Mapping Values](sliceC.html#trmval)  
    C.2 [Property Table: Part I](sliceC.html#prtab1)  
    C.3 [Property Table: Part II](sliceC.html#prtab2)  
D [References](sliceD.html#section-N85472-References)  
    D.1 [Normative References](sliceD.html#section-N85477-Normative-References)  
    D.2 [Other References](sliceD.html#section-N85770-Other-References)  
E [Property Index](sliceE.html#section-N85866-Property-Index)  
F [Changes since the Proposed Recommendation](sliceF.html#changes) (Non-Normative)  
G [Acknowledgements](sliceG.html#section-N87175-Acknowledgements) (Non-Normative)  

------------------------------------------------------------------------