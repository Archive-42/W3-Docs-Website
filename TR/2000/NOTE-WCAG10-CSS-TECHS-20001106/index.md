\[[contents](#toc)\]  

------------------------------------------------------------------------

[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/ "Go to W3C Home Page")

CSS Techniques for Web Content Accessibility Guidelines 1.0
===========================================================

W3C Note 6 November 2000
------------------------

This version:  
<http://www.w3.org/TR/2000/NOTE-WCAG10-CSS-TECHS-20001106/>

([plain text](css-techniques.txt), [PostScript](css-techniques.ps), [PDF](css-techniques.pdf), [gzip tar file of HTML](css-techniques.tgz), [zip archive of HTML](css-techniques.zip))

Latest version:  
<http://www.w3.org/TR/WCAG10-CSS-TECHS/>

Previous version:  
<http://www.w3.org/TR/2000/NOTE-WCAG10-CSS-TECHS-20000920/>

Editors:  
Wendy Chisholm, [W3C](http://www.w3.org/);  
Gregg Vanderheiden, [Trace R & D Center](http://www.tracecenter.org/), University of Wisconsin -- Madison;  
Ian Jacobs, [W3C](http://www.w3.org/)

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) ©1999 - 2000 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.lcs.mit.edu/), [INRIA](http://www.inria.fr/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks), [document use](http://www.w3.org/Consortium/Legal/copyright-documents-19990405) and [software licensing](http://www.w3.org/Consortium/Legal/copyright-software-19980720) rules apply.

------------------------------------------------------------------------

<span id="Abstract">Abstract</span>
-----------------------------------

This document describes techniques for authoring accessible Cascading Style Sheets (CSS). Cascading Style Sheets are defined by the W3C Recommendations "CSS Level 1" [\[CSS1\]](#ref-CSS1 "Link to reference CSS1") and "CSS Level 2" [\[CSS2\]](#ref-CSS2 "Link to reference CSS2"). This document is intended to help authors of Web content who wish to claim conformance to "Web Content Accessibility Guidelines 1.0" ([\[WCAG10\]](#ref-WCAG10 "Link to reference WCAG10")). While the techniques in this document should help people author CSS that conforms to "Web Content Accessibility Guidelines 1.0", these techniques are neither guarantees of conformance nor the only way an author might produce conforming content.

This document is part of a series of documents about techniques for authoring accessible Web content. For information about the other documents in the series, please refer to "Techniques for Web Content Accessibility Guidelines 1.0" [\[WCAG10-TECHS\]](#ref-WCAG10-TECHS "Link to reference WCAG10-TECHS").

**Note:** This document contains a number of examples that illustrate accessible solutions in CSS but also deprecated examples that illustrate what content developers should not do. The deprecated examples are highlighted and readers should approach them with caution -- they are meant for illustrative purposes only.

<span id="Status">Status of this document</span>
------------------------------------------------

This version has been published to correct some broken links in the previous version.

The 6 November 2000 version of this document is a Note in a series of Notes produced and endorsed by the [Web Content Accessibility Guidelines Working Group](http://www.w3.org/WAI/GL/) (WCAG WG). This Note has not been reviewed or endorsed by W3C Members. The series of documents supersedes the single document [5 May 1999 W3C Note Techniques for Web Content Accessibility Guidelines 1.0](http://www.w3.org/TR/1999/WAI-WEBCONTENT-TECHS-19990505/). The topics from the earlier document have been separated into technology-specific documents that may evolve independently. Smaller technology-specific documents allow authors to focus on a particular technology.

While the "Web Content Accessibility Guidelines 1.0" Recommendation [\[WCAG10\]](#ref-WCAG10 "Link to reference WCAG10") is a stable document, this series of companion documents is expected to evolve as technologies change and content developers discover more effective techniques for designing accessible Web content.

The [history of changes to the series of documents](http://www.w3.org/WAI/GL/wai-gl-techniques-changes.html) as well as the [list of open and closed issues](http://www.w3.org/WAI/GL/wai-gl-tech-issues.html) are available. Readers are encouraged to comment on the document and propose resolutions to current issues. Please send detailed comments on this document to the Working Group at <w3c-wai-gl@w3.org>; [public archives](http://lists.w3.org/Archives/Public/w3c-wai-gl/) are available.

The English version of this specification is the only normative version. [Translations of this document](http://www.w3.org/WAI/GL/WAI-WEBCONTENT-TRANSLATIONS) may be available.

The list of known errors in this document is available at ["Errata in Web Content Accessibility Guidelines](http://www.w3.org/WAI/GL/WAI-WEBCONTENT-ERRATA)." Please report errors in this document to <wai-wcag-editor@w3.org>.

The [Web Accessibility Initiative (WAI)](http://www.w3.org/WAI/) of the World Wide Web Consortium (W3C) makes available a variety of resources on Web accessibility. WAI Accessibility Guidelines are produced as part of the [WAI Technical Activity](http://www.w3.org/WAI/Technical/Activity). The goals of the Web Content Accessibility Guidelines Working Group are described in [the charter](http://www.w3.org/WAI/GL/new-charter-2000.html).

A list of [current W3C Recommendations and other technical documents](http://www.w3.org/TR/) is available.

<span id="toc">Table of Contents</span>
---------------------------------------

-   <a href="#Abstract" id="toc-Abstract" class="tocxref">Abstract</a>
-   <a href="#Status" id="toc-Status" class="tocxref">Status of this document</a>
-   <a href="#consistency" id="toc-consistency" class="tocxref">1 Decrease maintenance and increase consistency</a>
-   <a href="#user-override" id="toc-user-override" class="tocxref">2 User override of styles</a>
-   <a href="#units" id="toc-units" class="tocxref">3 Units of measure</a>
-   <a href="#Generated" id="toc-Generated" class="tocxref">4 Generated content</a>
-   <a href="#style-fonts" id="toc-style-fonts" class="tocxref">5 Fonts</a>
-   <a href="#style-text" id="toc-style-text" class="tocxref">6 Text style effects</a>
-   <a href="#text-not-images" id="toc-text-not-images" class="tocxref">7 Text instead of images</a>
-   <a href="#style-text-formatting" id="toc-style-text-formatting" class="tocxref">8 Text formatting and position</a>
-   <a href="#style-colors" id="toc-style-colors" class="tocxref">9 Colors</a>
    -   <a href="#style-color-contrast" id="toc-style-color-contrast" class="tocxref">9.1 Color Contrast</a>
    -   <a href="#style-info-not-in-color-alone" id="toc-style-info-not-in-color-alone" class="tocxref">9.2 Ensuring information is not in color alone</a>
-   <a href="#lists" id="toc-lists" class="tocxref">10 Providing contextual clues in HTML lists</a>
-   <a href="#style-alignment" id="toc-style-alignment" class="tocxref">11 Layout, positioning, layering, and alignment</a>
    -   <a href="#spacer" id="toc-spacer" class="tocxref">11.1 If you must use images as spacers</a>
-   <a href="#style-rules" id="toc-style-rules" class="tocxref">12 Rules and borders</a>
-   <a href="#style-transform-gracefully" id="toc-style-transform-gracefully" class="tocxref">13 Using style sheet positioning and markup to transform gracefully</a>
-   <a href="#style-movement" id="toc-style-movement" class="tocxref">14 Creating movement with style sheets and scripts</a>
-   <a href="#acss" id="toc-acss" class="tocxref">15 Aural Cascading Style Sheets</a>
-   <a href="#Alt" id="toc-Alt" class="tocxref">16 Access to alternative representations of content</a>
-   <a href="#Media" id="toc-Media" class="tocxref">17 Media types</a>
-   <a href="#References" id="toc-References" class="tocxref">18 References</a>
-   <a href="#Resources" id="toc-Resources" class="tocxref">19 Resources</a>
    -   <a href="#OtherGuidelines" id="toc-OtherGuidelines" class="tocxref">19.1 Other guidelines</a>
    -   <a href="#AccessResources" id="toc-AccessResources" class="tocxref">19.2 Accessibility resources</a>
-   <a href="#Acknowledgments" id="toc-Acknowledgments" class="tocxref">20 Acknowledgments</a>

------------------------------------------------------------------------

1 <span id="consistency">Decrease maintenance and increase consistency</span>
-----------------------------------------------------------------------------

Checkpoints in this section: <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-consistent-style" class="noxref">14.3</a> Create a style of presentation that is consistent across pages. \[Priority 3\] .

-   Use a minimal number of style sheets for your site
-   Use linked style sheets rather than embedded styles, and avoid inline style sheets.
-   If you have more than one, use the same "class" name for the same concept in all of the style sheets.

2 <span id="user-override">User override of styles</span>
---------------------------------------------------------

Checkpoint in this section: <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-avoid-deprecated" class="noxref">11.2</a> Avoid deprecated features of W3C technologies. \[Priority 2\] .

In order to ensure that users can control styles, CSS2 changes the semantics of the "!important" operator defined in CSS1. In CSS1, authors always had final say over styles. In CSS2, if a user's style sheet contains "!important", it takes precedence over any applicable rule in an author's style sheet. This is an important feature to users who require or must avoid certain color combinations or contrasts, users who require large fonts, etc. For instance, the following rule specifies a large font size for paragraph text and would override an author rule of equal weight:

**Example.**

     
    P { font-size: 24pt ! important }

The CSS2 'inherit' value - available for every property - leads to compact "!important" style rules that govern most or all of a document. For instance, the following style rules force all backgrounds to white and all foreground colors to black:

**Example.**

      
    /*   Sets the text color to black   
    and the background color to   
    white for the document body.  */

    BODY {     
      color: black ! important ;      
      background: white ! important  
    }

     /*   Causes the values of 'color' and 'background'  
    to be inherited by all other elements,   
    strengthened by !important. Note that this   
    may be overridden by other, more specific,   
    user styles.  */

    * {   
      color: inherit ! important ;   
      background: inherit ! important  
    }

CSS2 also includes these user control features:

-   System colors (for 'color', 'background-color', 'border-color', and 'outline-color') and system fonts (for 'font') mean that users may apply their system color and font preferences to Web documents.
-   Dynamic outlines (the 'outline' property) allow users (e.g., with low vision) to create outlines around content that don't affect layout but do provide highlight information.

For example, to draw a thick black line around an element when it has the focus, and a thick red line when it is active, the following rules can be used:

**Example.**

      
    :focus  { outline: thick solid black }  
    :active { outline: thick solid red }

3 <span id="units">Units of measure</span>
------------------------------------------

Checkpoints in this section: <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-relative-units" class="noxref">3.4</a> Use relative rather than absolute units in markup language attribute values and style sheet property values. \[Priority 2\] .

Techniques:

-   Use the "em" unit to set font sizes.
-   Use relative length units and percentages. CSS allows you to use relative units even in absolute positioning. Thus, you may position an image to be offset by "3em" from the top of its containing element. This is a fixed distance, but is relative to the current font size, so it scales nicely.
-   Only use absolute length units when the physical characteristics of the output medium are known, such as bitmap images.

**Example.**

Use em to set font sizes, as in:

       H1 { font-size: 2em }

rather than:

       H1 { font-size: 12pt }

End example.

**Example.**

Use relative length units and percentages.

       BODY { margin-left: 15%; margin-right: 10%}

End example.

**Example.**

Only use absolute length units when the physical characteristics of the output medium are known.

       .businesscard { font-size: 8pt }

End example.

4 <span id="Generated">Generated content</span>
-----------------------------------------------

Checkpoints in this section:

-   <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-use-markup" class="noxref">3.1</a> When an appropriate markup language exists, use markup rather than images to convey information. \[Priority 2\] ,
-   <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-order-style-sheets" class="noxref">6.1</a> Organize documents so they may be read without style sheets. For example, when an HTML document is rendered without associated style sheets, it must still be possible to read the document. \[Priority 1\]

Techniques:

-   Provide a text equivalent for any important image or text generated by style sheets (e.g., via the 'background-image', 'list-style', or 'content' properties).
-   Ensure that important content appears in the document object. Text generated by style sheets is not part of the document source and will not be available to assistive technologies that access content through the Document Object Model Level 1 (\[\[DOM1\]).

CSS2 includes several mechanisms that allow content to be generated from style sheets:

-   the :before and :after pseudo-elements and the 'content' property. When used together, these allow authors to insert markers (e.g., counters and constant strings such as "End Example" in the examples below) before or after and element's content.
-   the 'cue', 'cue-before', and 'cue-after' properties. This properties allow users to play a sound before or after an element's content.
-   List styles, which may be numbers, glyphs, or images (usually associated with the LI element in HTML). CSS2 adds international list styles to the styles defined in CSS1. See the 'list-style-type' and 'content' properties.

Generated content can serve as markers to help users navigate a document and stay oriented when they can't access visual clues such as proportional scrollbars, frames with tables of contents, etc.

For instance, the following user style sheet would cause the words "End Example" to be generated after each example marked up with a special class value in the document:

**Example.**

     
    DIV.example:after {     
      content: End Example  
    }

Users could also, for example, number paragraphs so that they could locate their current reading position in a document:

**Example.**

     
    P:before {     
      content: counter(paragraph) ". " ;
        counter-increment: paragraph  
    }

5 <span id="style-fonts">Fonts</span>
-------------------------------------

Checkpoints in this section: <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-avoid-deprecated" class="noxref">11.2</a> Avoid deprecated features of W3C technologies. \[Priority 2\] .

Techniques:

-   Always specify a fallback generic font.
-   Instead of using deprecated presentation elements and attributes, use the many CSS properties to control font characteristics: 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', and 'font-weight'.
-   Use the following CSS2 properties to control font information

    -   'font', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', and 'font-weight'

    instead of the following deprecated font elements and attributes in HTML:

    -   FONT, BASEFONT, "face", and "size".

-   If you must use HTML elements to control font information, use BIG and SMALL, which are not deprecated.

**Example.**

Always specify a fallback generic font:

       BODY { font-family: "Gill Sans", sans-serif }

End example.

**Example.**

    <STYLE type="text/css">
       P.important { font-weight: bold }
       P.less-important { font-weight: lighter; font-size: smaller }
       H2.subsection { font-family: Helvetica, sans-serif }
    </STYLE>

End example.

6 <span id="style-text">Text style effects</span>
-------------------------------------------------

Checkpoints in this section: <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-avoid-blinking" class="noxref">7.2</a> Until user agents allow users to control blinking, avoid causing content to blink (i.e., change presentation at a regular rate, such as turning on and off). \[Priority 2\] .

The following CSS2 properties can be used to style text:

-   Case: 'text-transform' (for uppercase, lowercase, and capitalization).
-   Shadow effects: 'text-shadow'
-   Underlines, overlinks, blinking: 'text-decoration'. **Note.** If blinking content (e.g., a headline that appears and disappears at regular intervals) is used, provide a mechanism for stopping the blinking. In CSS, 'text-decoration: blink' will cause content to blink and will allow users to stop the effect by turning off style sheets or overriding the rule in a user style sheet. Do not use the BLINK and MARQUEE elements. These elements are not part of any W3C specification for HTML (i.e., they are non-standard elements).

7 <span id="text-not-images">Text instead of images</span>
----------------------------------------------------------

Checkpoints in this section: <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-style-sheets" class="noxref">3.3</a> Use style sheets to control layout and presentation. \[Priority 2\] .

Content developers should use style sheets to style text rather than representing text in images. Using text instead of images means that the information will be available to a greater number of users (with speech synthesizers, braille displays, graphical displays, etc.). Using style sheets will also allow users to override author styles and change colors or fonts sizes more easily.

If it is necessary to use a <span id="bitmap-text">bitmap to create a text effect</span> (special font, transformation, shadows, etc.) the bitmap must be accessible (see the sections on [text equivalents](http://www.w3.org/TR/WCAG10-TECHS/#def-text-equivalent) and [alternative pages](http://www.w3.org/TR/WCAG10-TECHS/#alt-page-note)).

**Example.**

In this example, the inserted image shows the large red characters "Example", and is captured by the value of the "alt" attribute.

    <P>This is an 
       <IMG src="BigRedExample.gif" alt="example"> 
       of what we mean.
    </P>

End example.

8 <span id="style-text-formatting">Text formatting and position</span>
----------------------------------------------------------------------

Checkpoints in this section: <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-style-sheets" class="noxref">3.3</a> Use style sheets to control layout and presentation. \[Priority 2\] .

The following CSS2 properties can be used to control the formatting and position of text:

-   Indentation: 'text-indent'. Do not use the BLOCKQUOTE or any other structural element to indent text.
-   Letter/word spacing: 'letter-spacing', 'word-spacing'. For example instead of writing "H E L L O" (which users generally recognize as the word "hello" but would hear as individual letters), authors may create the same visual effect with the 'word-spacing' property applied to "HELLO". Text without spaces will be transformed more effectively to speech.
-   White space: 'white-space'. This property controls the white space processing of an element's content.
-   Text direction: 'direction', 'unicode-bidi'.
-   The :first-letter and :first-line pseudo-elements allow authors to refer to the first letter or line of a paragraph of text.

The following example shows how to use style sheets to create a drop-cap effect.

**Example.**

    <HEAD>
    <TITLE>Drop caps</TITLE>
    <STYLE type="text/css">
          .dropcap { font-size : 120%; font-family : Helvetica } 
    </STYLE>
    </HEAD>
    <BODY>
    <P><SPAN class="dropcap">O</SPAN>nce upon a time...
    </BODY>

**Note.** As of the writing of this document, the CSS pseudo-element ':first-letter', which allows content developers to refer to the first letter of a chunk of text, is not widely supported.

9 <span id="style-colors">Colors</span>
---------------------------------------

### 9.1 <span id="style-color-contrast">Color Contrast</span>

Checkpoints in this section:

-   <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-color-contrast" class="noxref">2.2</a> Ensure that foreground and background color combinations provide sufficient contrast when viewed by someone having color deficits or when viewed on a black and white screen. \[Priority 2 for images, Priority 3 for text\].

Techniques:

-   Use numbers, not names, for colors.

**Example.**

Use numbers, not names, for colors:

       H1 {color: #808000}
       H1 {color: rgb(50%,50%,0%)}

End example.

**Deprecated example.**

     H1 {color: red}

End example.

Use these CSS properties to specify colors:

-   'color', for foreground text color.
-   'background-color', for background colors.
-   'border-color', 'outline-color' for border colors.
-   For link colors, refer to the :link, :visited, and :active pseudo-classes.

Ensure that foreground and background colors contrast well. If specifying a foreground color, always specify a background color as well (and vice versa).

### 9.2 <span id="style-info-not-in-color-alone">Ensuring information is not in color alone</span>

Checkpoints in this section:

-   <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-color-convey" class="noxref">2.1</a> Ensure that all information conveyed with color is also available without color, for example from context or markup. \[Priority 1\]

Ensure that information is not conveyed through color alone. For example, when asking for input from users, do not write "Please select an item from those listed in green." Instead, ensure that information is available through other style effects (e.g., a font effect) and through context (e.g,. comprehensive text links).

For instance, in this document, examples are styled by default (through style sheets) as follows:

-   They are surrounded by a border.
-   They use a different background color.
-   They begin with the word "Example" or "Deprecated Example".
-   They also end with the phrase "End example", but that phrase is hidden by default with 'display: none'. For user agents that don't support style sheets or when style sheets are turned off, this text helps delineate the end of an example for readers who may not be able to see the border around the example.

<span class="quicktest">Quicktest!</span> To test whether your document still works without colors, examine it with a monochrome monitor or browser colors turned off. Also, try setting up a color scheme in your browser that only uses black, white, and the four browser-safe greys and see how your page holds up.

<span class="quicktest">Quicktest!</span> To test whether color contrast is sufficient to be read by people with color deficiencies or by those with low resolution monitors, print pages on a black and white printer (with backgrounds and colors appearing in grayscale). Also try taking the printout and copying it for two or three generations to see how it degrades. This will show you where you need to add redundant cues (example: hyperlinks are usually underlined on Web pages), or whether the cues are too small or indistinct to hold up well.

For more information about colors and contrasts, refer to [\[LIGHTHOUSE\]](#ref-LIGHTHOUSE "Link to reference LIGHTHOUSE").

10 <span id="lists">Providing contextual clues in HTML lists</span>
-------------------------------------------------------------------

Checkpoints in this section:

-   <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-list-structure" class="noxref">3.6</a> Mark up lists and list items properly. \[Priority 2\]
-   <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-use-metadata" class="noxref">13.2</a> Provide metadata to add semantic information to pages and sites. \[Priority 2\]

Content developers are encouraged to use UL for unordered lists and OL for ordered lists (i.e., use markup appropriately) combined with CSS to provide contextual clues.

The following CSS2 style sheet shows how to provide compound numbers for nested lists created with either UL or OL elements. Items are numbered as "1", "1.1", "1.1.1", etc.

**Example.**

    <STYLE type="text/css">
        UL, OL { counter-reset: item }
        LI { display: block }
        LI:before { content: counters(item, "."); counter-increment: item }
    </STYLE>

End example.

Until either CSS2 is widely supported by user agents or user agents allow users to control rendering of lists through other means, authors should consider providing contextual clues in nested lists. The following CSS1 mechanism shows how to hide the end of a list when style sheets are turned on, and to reveal it when style sheets are turned off, when user style sheets override the hiding mechanism, or when style sheets aren't supported.

**Example.**

      <STYLE type="text/css">
          .endoflist { display: none }
      </STYLE>
      <UL>
         <LI>Paper:
            <UL>
               <LI>Envelopes
               <LI>Notepaper
               <LI>Letterhead
               <LI>Poster paper 
               <span class="endoflist">(End of Paper)</span>
            </UL>
         <LI>Pens:
            <UL>
               <LI>Blue writing pens
               <LI>whiteboard pens 
               <span class="endoflist">(End of Pens)</span>
            </UL>
         <LI>Fasteners:
            <UL>
               <LI>paper clips
               <LI>staples
               <LI>Big lengths of rope. 
               <span class="endoflist">(End of Fasteners)</span>
            </UL> 
         <span class="endoflist">(End of Office Supplies)</span>
      </UL>

End example.

Note: This example does not help the case of wrapping list items. With some more effort, the author could put similar markup at the end of each list item.

11 <span id="style-alignment">Layout, positioning, layering, and alignment</span>
---------------------------------------------------------------------------------

Checkpoints in this section:

-   <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-style-sheets" class="noxref">3.3</a> Use style sheets to control layout and presentation. \[Priority 2\]
-   <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-avoid-table-for-layout" class="noxref">5.3</a> Do not use tables for layout unless the table makes sense when linearized. Otherwise, if the table does not make sense, provide an alternative equivalent (which may be a linearized version). \[Priority 2\] .

Layout, positioning, layering, and alignment should be done through style sheets (notably by using CSS floats and absolute positioning):

-   'text-indent', 'text-align', 'word-spacing', 'font-stretch'. Each of these properties allows users to control spacing without adding additional spaces. Use 'text-align: center' instead of the deprecated CENTER element.
-   'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'. With these properties, authors can create space on four sides of an element's content instead of adding non-breaking spaces (&nbsp;).
-   'float', 'position', 'top', 'right', 'bottom', 'left'. With these properties, the user can control the visual position of almost any element in a manner independent of where the element appears in the document. Authors should always design documents that make sense without style sheets (i.e., the document should be written in a "logical" order) and then apply style sheets to achieve visual effects. The positioning properties may be used to create margin notes (which may be automatically numbered), side bars, frame-like effects, simple headers and footers, and more.
-   The 'empty-cells' property allows users to leave table cells empty and still give them proper borders on the screen or on paper. A data cell that is meant to be empty should not be filled with white space or a non-breaking space just to achieve a visual effect.

### 11.1 <span id="spacer">If you must use images as spacers</span>

<span id="spacer-images">Provide text equivalents for all images, including invisible or transparent images.</span>

If content developers cannot use style sheets and must use invisible or transparent images (e.g., with IMG) to lay out images on the page, they should specify `alt=""` for them.

**Deprecated example.**

Authors should **not** use spaces for the value of "alt" to prevent the words from running together when the image is not loaded:

       my poem requires a big space<IMG src="10pttab.gif" alt="&nbsp;&nbsp;&nbsp;">here

In this next example, an image is used to force a graphic to appear in a certain position:

       <IMG src="spacer.gif" alt="spacer">
       <IMG src="colorfulwheel.gif" alt="The wheel of fortune">

End example.

12 <span id="style-rules">Rules and borders</span>
--------------------------------------------------

Checkpoints in this section: <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-order-style-sheets" class="noxref">6.1</a> Organize documents so they may be read without style sheets. For example, when an HTML document is rendered without associated style sheets, it must still be possible to read the document. \[Priority 1\] .

Rules and borders may convey the notion of "separation" to visually enabled users but that meaning cannot be inferred out of a visual context.

Use these CSS properties to specify border styles:

-   'border', 'border-width', 'border-style', 'border-color'.
-   'border-spacing' and 'border-collapse' for tables.
-   'outline, 'outline-color', 'outline-style', and 'outline-width' for dynamic outlines.

Authors should use style sheets to create rules and borders.

**Example.**

In this example, the H1 element will have a top border that is 2px thick, red, and separated from the content by 1em:

       <HEAD>
       <TITLE>Redline with style sheets</TITLE>
       <STYLE type="text/css">
            H1 { padding-top: 1em; border-top: 2px red }
       </STYLE>
       </HEAD>
       <BODY>
       <H1>Chapter 8 - Auditory and Tactile Displays</H1>
       </BODY>

End example.

If a rule (e.g., the HR element) is used to indicate structure, be sure to indicate the structure in a non-visual way as well. (e.g., by using structural markup).

**Example.**

In this example, the DIV element is used to create a navigation bar, which includes a horizontal separator.

       <DIV class="navigation-bar">
          <HR>
          <A rel="Next" href="next.html">[Next page]</A>
          <A rel="Previous" href="previous.html">[Prevous page]</A>
          <A rel="First" href="first.html">[First page]</A>
       </DIV>

End example.

13 <span id="style-transform-gracefully">Using style sheet positioning and markup to transform gracefully</span>
----------------------------------------------------------------------------------------------------------------

Checkpoints in this section:

-   <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-order-style-sheets" class="noxref">6.1</a> Organize documents so they may be read without style sheets. For example, when an HTML document is rendered without associated style sheets, it must still be possible to read the document. \[Priority 1\] ,

Using the positioning properties of CSS2, content may be displayed at any position on the user's viewport. The order in which items appear on a screen may be different than the order they are found in the source document. The following example demonstrates a few principles:

1.  the text appears visually in the browser in a different order than in the markup.
2.  CSS positioning may be used to create tabular effects. A TABLE element could have been used to create the same effect.

Note that a class is defined for each object that is being positioned. The use of "id" could be substituted for "class" in these examples. "Class" was used because in the live example, the objects are replicated and thus not unique.

**Deprecated example.**

    <head><style type="text/css">
      .menu1 { position: absolute; top: 3em; left: 0em; 
               margin: 0px; font-family: sans-serif; 
               font-size: 120%; color: red; background-color: white }  
      .menu2 { position: absolute; top: 3em; left: 10em; 
               margin: 0px; font-family: sans-serif; 
               font-size: 120%; color: red; background-color: white }
      .item1 { position: absolute; top: 7em; left: 0em; margin: 0px }
      .item2 { position: absolute; top: 8em; left: 0em; margin: 0px }
      .item3 { position: absolute; top: 9em; left: 0em; margin: 0px }
      .item4 { position: absolute; top: 7em; left: 14em; margin: 0px }
      .item5 { position: absolute; top: 8em; left: 14em; margin: 0px }
      #box { position: absolute; top: 5em; left: 5em } 
    </style></head>
    <body>
    <div class="box">
      <span class="menu1">Products</span> 
      <span class="menu2">Locations</span> 
      <span class="item1">Telephones</span> 
      <span class="item2">Computers</span> 
      <span class="item3">Portable MP3 Players</span> 
      <span class="item5">Wisconsin</span> 
      <span class="item4">Idaho</span>
    </div>
    </body>

End example.

When style sheets are applied, the text appears in two columns. Elements of class "menu1" (Products) and "menu2" (Locations) appear as column headings. "Telephones, Computers, and Portable MP3 Players" are listed under Products and "Wisconsin" and "Idaho" are listed under Locations as shown in this screen shot:

![Screen shot of the example code as it appears when style sheets applied](cssimages/style-sheet-tg1.gif)

When style sheets are not applied, all of the text appears in one line of words, "Products Locations Telephones Computers Portable MP3 Players Wisconsin Idaho". They appear in the order in which they are written in the source. Therefore, what appear as column headings when style sheets are applied are the first phrases since they were defined first in the source. The following screen shot illustrates this:

![Screen shot of the example code as it appears without style sheets](cssimages/style-sheet-tg2.gif)

The following example shows that the same visual appearance may be created in a browser that support style sheets as well as creating a more meaningful presentation when style sheets are not applied. Structural markup (definition lists) have been applied to the content. Note that the margins have been set to 0 since in HTML browsers, definition lists are displayed with a margin set on the DD element.

**Example.**

    <head><style type="text/css">
      .menu1 { position: absolute; top: 3em; left: 0em; 
               margin: 0px; font-family: sans-serif; 
               font-size: 120%; color: red; background-color: white }  
      .menu2 { position: absolute; top: 3em; left: 10em; 
               margin: 0px; font-family: sans-serif; 
               font-size: 120%; color: red; background-color: white }
      .item1 { position: absolute; top: 7em; left: 0em; margin: 0px }
      .item2 { position: absolute; top: 8em; left: 0em; margin: 0px }
      .item3 { position: absolute; top: 9em; left: 0em; margin: 0px }
      .item4 { position: absolute; top: 7em; left: 14em; margin: 0px }
      .item5 { position: absolute; top: 8em; left: 14em; margin: 0px }
      #box { position: absolute; top: 5em; left: 5em } 
    </style></head>
    <body>
    <div class="box">
    <dl>
      <dt class="menu1">Products</dt>
        <dd class="item1">Telephones</dd>
        <dd class="item2">Computers</dd>
        <dd class="item3">Portable MP3 Players</dd>
      <dt class="menu2">Locations</dt>
       <dd class="item4">Idaho</span>
       <dd class="item5">Wisconsin</span>
      </dt>
    </dl>
    </div>
    </body>

End example.

<span id="ss-tg3-desc">When style sheets</span> are applied, it looks as it did before. However, now when the style sheets are not applied, the text appears in a definition list rather than a string of words. What appear as column headings when style sheets are applied, appear as defined terms when style sheets are not applied as demonstrated in the following screen shot.

![Example code as it appears when style sheets not applied but transform gracefully](cssimages/style-sheet-tg3.gif)

Note. Experience the difference between these examples for yourself: [test file for style sheets that transform gracefully](cssimages/style-tg.html).

14 <span id="style-movement">Creating movement with style sheets and scripts</span>
-----------------------------------------------------------------------------------

Checkpoints in this section: <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-avoid-movement" class="noxref">7.3</a> Until user agents allow users to freeze moving content, avoid movement in pages. \[Priority 2\]

-   hide/show content,
-   change presentation (movement and colors)

15 <span id="acss">Aural Cascading Style Sheets</span>
------------------------------------------------------

Checkpoints in this section: <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-content-preferences" class="noxref">11.3</a> Provide information so that users may receive documents according to their preferences (e.g., language, content type, etc.) \[Priority 3\] .

CSS2's aural properties provide information to non-sighted users and voice-browser users much in the same way fonts provide visual information. The following example show how various sound qualities (including 'voice-family', which is something like an audio font) can let a user know that spoken content is a heading:

**Example.**

     
    H1 {     
      voice-family: paul;     
      stress: 20;     
      richness: 90;     
      cue-before: url("ping.au")     
    }

The following properties are part of CSS2's aural cascading style sheets.

-   'volume' controls the volume of spoken text.
-   'speak' controls whether content will be spoken and, if so, whether it will be spelled or spoken as words.
-   'pause', 'pause-before', and 'pause-after' control pauses before and after content is spoken. This allows users to separate content for better comprehension.
-   'cue', 'cue-before', and 'cue-after' specify a sound to be played before and after content, which can be valuable for orientation (much like a visual icon).
-   'play-during' controls background sounds while an element is rendered (much like a background image).
-   'azimuth' and 'elevation' provide dimension to sound, which allows users to distinguish voices, for example.
-   'speech-rate', 'voice-family', 'pitch', 'pitch-range', 'stress', and 'richness' control the quality of spoken content. By varying these properties for different elements, users can fine-tune how content is presented aurally.
-   'speak-punctuation' and 'speak-numeral' control how numbers and punctuation are spoken, which has an effect on the quality of the experience of aural browsing.

Furthermore, the 'speak-header' property describes how table header information is to be spoken before a table cell.

16 <span id="Alt">Access to alternative representations of content</span>
-------------------------------------------------------------------------

Checkpoints in this section: <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-content-preferences" class="noxref">11.3</a> Provide information so that users may receive documents according to their preferences (e.g., language, content type, etc.) \[Priority 3\] .

CSS2 lets users access alternative representations of content that is specified in attribute values when the following are used together:

-   attribute selectors.
-   the attr() function and the 'content' property'
-   the :before and :after pseudo-elements

In the following example, the value of the "alt" attribute for the IMG element is rendered after the image (visually, aurally, etc.):

**Example.**

     IMG:after { 
        content: attr(alt) 
     }

Note that the value of the attribute is displayed even though the image may not be (e.g., the user has turned off images through the user interface).

17 <span id="Media">Media types</span>
--------------------------------------

Checkpoints in this section: <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-content-preferences" class="noxref">11.3</a> Provide information so that users may receive documents according to their preferences (e.g., language, content type, etc.) \[Priority 3\] .

The CSS2 "media types" (used with @media rules) allow authors and users to design style sheets that will cause documents to render more appropriately on certain target devices. These style sheets can tailor content for presentation on braille devices, speech synthesizers, or TTY devices. Using "@media" rules can also reduce download times by allowing user agents to ignore inapplicable rules.

------------------------------------------------------------------------

18 <span id="References">References</span>
------------------------------------------

For the latest version of any W3C specification please consult the list of [W3C Technical Reports](http://www.w3.org/TR/) at http://www.w3.org/TR.

<span id="ref-CSS1">**\[CSS1\]**</span>  
["CSS, level 1 Recommendation"](http://www.w3.org/TR/1999/REC-CSS1-19990111), B. Bos, H. Wium Lie, eds., 17 December 1996, revised 11 January 1999. This CSS1 Recommendation is http://www.w3.org/TR/1999/REC-CSS1-19990111. The [latest version of CSS1](http://www.w3.org/TR/REC-CSS1) is available at http://www.w3.org/TR/REC-CSS1.

<span id="ref-CSS2">**\[CSS2\]**</span>  
["CSS, level 2 Recommendation"](http://www.w3.org/TR/1998/REC-CSS2-19980512/), B. Bos, H. Wium Lie, C. Lilley, and I. Jacobs, eds., 12 May 1998. This CSS2 Recommendation is http://www.w3.org/TR/1998/REC-CSS2-19980512/. The [latest version of CSS2](http://www.w3.org/TR/REC-CSS2/) is available at http://www.w3.org/TR/REC-CSS2.

<span id="ref-WCAG10">**\[WCAG10\]**</span>  
["Web Content Accessibility Guidelines 1.0"](http://www.w3.org/TR/1999/WAI-WEBCONTENT-19990505/), W. Chisholm, G. Vanderheiden, and I. Jacobs, eds., 5 May 1999. This WCAG 1.0 Recommendation is http://www.w3.org/TR/1999/WAI-WEBCONTENT-19990505/.

 <span id="ref-WCAG10-TECHS">**\[WCAG10-TECHS\]**</span>  
["Techniques for Web Content Accessibility Guidelines 1.0"](http://www.w3.org/TR/WCAG10-TECHS/), W. Chisholm, G. Vanderheiden, I. Jacobs, eds. This document explains how to implement the checkpoints defined in "Web Content Accessibility Guidelines 1.0". The latest draft of the techniques is available at http://www.w3.org/TR/WCAG10-TECHS/.

19 <span id="Resources">Resources</span>
----------------------------------------

**Note:** *W3C does not guarantee the stability of any of the following references outside of its control. These references are included for convenience. References to products are not endorsements of those products.*

### 19.1 <span id="OtherGuidelines">Other guidelines</span>

<span id="ref-UWSAG">**\[UWSAG\]**</span>  
["The Unified Web Site Accessibility Guidelines"](http://trace.wisc.edu/redirects/htmlgide/version8.htm), G. Vanderheiden, W. Chisholm, eds. The Unified Web Site Guidelines were compiled by the [Trace R & D Center](http://www.tracecenter.org/) at the University of Wisconsin under funding from the National Institute on Disability and Rehabilitation Research (NIDRR),  U.S. Dept. of Education.

### 19.2 <span id="AccessResources">Accessibility resources</span>

<span id="ref-LIGHTHOUSE">**\[LIGHTHOUSE\]**</span>  
[The Lighthouse](http://www.lighthouse.org/) provides information about accessible colors and contrasts.

20 <span id="Acknowledgments">Acknowledgments</span>
----------------------------------------------------

Web Content Guidelines Working Group Co-Chairs:  
[Jason White](mailto:jasonw@ariel.ucs.unimelb.edu.au), University of Melbourne

[Gregg Vanderheiden](mailto:gv@tracecenter.org), Trace Research and Development

W3C Team contact:  
[Wendy Chisholm](mailto:wendy@w3.org)

We wish to thank the following people who have contributed their time and valuable comments to shaping these guidelines:  
Harvey Bingham, Kevin Carey, Chetz Colwell, Neal Ewers, Geoff Freed, Al Gilman, Larry Goldberg, Jon Gunderson, Eric Hansen, Phill Jenkins, Leonard Kasday, George Kerscher, Marja-Riitta Koivunen, Josh Krieger, Chuck Letourneau, Scott Luebking, William Loughborough, Murray Maloney, Charles McCathieNevile, MegaZone (Livingston Enterprises), Masafumi Nakane, Mark Novak, Charles Oppermann, Mike Paciello, David Pawson, Michael Pieper, Greg Rosmaita, Liam Quinn, Dave Raggett, T.V. Raman, Robert Savellis, Jutta Treviranus, Steve Tyler, and Jaap van Lelieveld

[<img src="http://www.w3.org/WAI/wcag1AAA" alt="Level Triple-A conformance icon, W3C-WAI Web Content Accessibility Guidelines 1.0" class="conform" width="88" height="32" />](http://www.w3.org/WAI/WCAG1AAA-Conformance "Explanation of Level Triple-A Conformance")

------------------------------------------------------------------------

\[[contents](#toc)\]  
