-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA23](ARIA23)
-   [Next Technique: SCR1](../client-side-script/SCR1)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Tests](#tests)

Semantically identifying a font icon with `role="img"`
======================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Content using [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Sufficient).

Description
-----------

The objective of this technique is to show how to semantically identify an element that uses a font file for icons. When a user overrides font-family these icons typically disappear unless there is a means to identify them. The point is to provide a technique to differentiate icon fonts from general font (text) usage.

Some low vision users need user stylesheets, scripts, or extensions to override the fonts on a page to perceive text content. However, they need to be able to perceive icon fonts that are meaningful, such as a star signifying a favorite, or an email icon in a link.

The key is for the author to semantically markup icon fonts with `role="img"`. Then the user's font replacement selector can hook into that semantic and exclude `role="img"`. This results in those icon fonts being shown.

The first step is used for adding a font face with icons via the CSS file.

                
    /* specify font-family name for icons */
    @font-face { font-family: 'IconFontRoleImg';/ }

    /* default class for fonts-face with icons */
    .icon,
    [class^="icon-"],
    [class*=" icon-"] { font-family: 'IconFontRoleImg' !important; }

    /* specific class for icon */
    .icon-star-bg:before { content: "\e982"; }
                
             

The second step adds classes, the role="img" attribute for semantics and an accessible name.

                            
    <!-- Icon via class names, role="img" and a text alternative -->
    <p>
       <span class="icon icon-star-bg" role="img" aria-label="Favorite"></span>
    </p>
                
             

The third step uses the ":not selector" in combination with the "\[attribute\] selector" to only replace font faces for regular text.

                
    /* Replaces font faces but excludes all elements with attribute role=""img" */
    *:not([role="img"]) { font-family: Verdana, sans-serif !important; }
             
          

Examples
--------

### Example 1: Star Icon Font used as an indicator (not interactive)

In this example a star icon is used to indicate a favorite. It is not interactive and does not disappear if the user overrides the font family via CSS.

#### Author CSS

                   
    /* default class for fonts-face with icons */
    .icon { font-family: 'IconFontRoleImg' !important; }

    /* specific class for icon */
    .icon-star-bg:before { content: "\e982"; }
                   
                

#### HTML

##### **- Instead of... -**

                   
    <p>
       <span class="icon icon-star-bg"></span>
    </p>
                   
                

##### **- Do... -**

                   
    <p>
       <span class="icon icon-star-bg" role="img" aria-label="Favorite"></span>
    </p>
                   
                

#### User CSS

                   
    *:not([role="img"]) { font-family: Verdana, sans-serif !important; }
                   
                

#### Working example:

[Star Icon Font used as an indicator (not interactive)](../../working-examples/aria-icon-font-img-role/#example1)

### Example 2: Two colored / stacked star Icon Font used as an indicator

In this example a two colored star icon is created by stacking two fonts with different colors on top of each other. This way it's possible to mimic only half the star is filled. It is not interactive and does not disappear if the user overrides the font family via CSS.

#### Author CSS

                   
    /* default class for fonts-face with icons */
    .icon { font-family: 'IconFontRoleImg' !important; }

    /* specific classes for icons */
    .icon-star-bg:before    {content: "\e982"; }
    .icon-star-half:before  {content: "\e983"; }
                   
                

#### HTML

##### **- Instead of... -**

                   
    <span class="icon-stacked">
       <span class="icon icon-star-bg grey"></span>
       <span class="icon icon-star-half yellow"></span>
    </span>
                   
                

##### **- Do... -**

                   
    <span class="icon-stacked" role="img" aria-label="Favorite star half filled">
       <span class="icon icon-star-bg grey" role="img" aria-hidden="true"></span>
       <span class="icon icon-star-half yellow" role="img" aria-hidden="true"></span>
    </span>
                   
                

#### User CSS

                   
    *:not([role="img"]) { font-family: Verdana, sans-serif !important; }
                   
                

#### Working example:

[Two colored / stacked star Icon Font used as an indicator](../../working-examples/aria-icon-font-img-role/#example2)

### Example 3: Email Icon Font in a link WITHOUT visible text

In this example an email icon is in a link with no visible text. It does not disappear if a user overrides font family. The icon font is identified by assistive technology as a "link image" and the name "Email" (keyboard or mouse).

#### Author CSS

                   
    /* default class for fonts-face with icons */
    .icon { font-family: 'IconFontRoleImg' !important; }

    /* specific class for icon */
    .icon-email:before { content: "\e93e"; }
                   
                

#### HTML

##### **- Instead of... -**

                   
    <a href="email.html">
       <span class="icon icon-email"></span>
    </a>
                   
                

##### **- Do... -**

                   
    <a href="email.html">
       <span class="icon icon-email" role="img" aria-label="Email"></span>
    </a>
                   
                

#### User CSS

                   
    *:not([role="img"]) { font-family: Verdana, sans-serif !important; }
                   
                

#### Working example:

[Email Icon Font in a link WITHOUT visible text](../../working-examples/aria-icon-font-img-role/#example3)

### Example 4: Multiple Icon Fonts as part of another sematic element WITH visible text

This example already has a visible text label in the link to be used as an accessible name, the mail and chevron font icons must stay visible when the font family is changed. This can be done by ensuring the icons are contained in their own element and the attribute `aria-hidden="true"` is used so the font icons will be ignored by assistive technologies.

#### Author CSS

                   
    /* default class for fonts-face with icons */
    .icon { font-family: 'IconFontRoleImg' !important; }

    /* specific class for icon */
    - See style declarations in HTML examples -

                   
                

#### HTML

##### **- Instead of... -**

                   
    <style>
    .icon-double-link:before   { content: "\e93e"; }
    .icon-double-link:after    { content: "\e993"; }
    </style>

    <a href="email.html" class="icon-double-link">
       Email
    </a>
                   
                

##### **- Do... -**

                   
    <style>
    .icon-email:before   { content: "\e93e"; }
    .icon-chevron:before {  content: "\e993";  }

    .icon-double-link .icon-chevron  { float: right; margin-left: 1.5rem; }
    </style>

    <a href="email.html" class="icon-double-link">
       <span class="icon icon-email" role="img" aria-hidden="true"></span>
       <span class="icon icon-chevron" role="img" aria-hidden="true"></span>
       Email
    </a>
                   
                

#### User CSS

                   
    *:not([role="img"]) { font-family: Verdana, sans-serif !important; }
                   
                

#### Working example:

[Multiple Icon Fonts as part of another sematic element WITH visible text](../../working-examples/aria-icon-font-img-role/#example4)

Tests
-----

### Procedure

For each font icon check that:

1.  The element providing the font icon has `role="img"`.

### Expected Results

-   \#1 is true.
