[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.5 \[Images of Text\]](visual-audio-contrast-text-presentation.html "Understanding SC  1.4.5 [Images of Text]")
-   [**Next:** SC 1.4.7 \[Low or No Background Audio\]](visual-audio-contrast-noaudio.html "Understanding SC  1.4.7 [Low or No Background Audio]")

On this page:

-   [Intent](#visual-audio-contrast7-intent-head)
-   [Examples](#visual-audio-contrast7-examples-head)
-   [Related Resources](#visual-audio-contrast7-resources-head)
-   [Techniques & Failures](#visual-audio-contrast7-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="visual-audio-contrast7"></span> **Contrast (Enhanced)**<span class="screenreader">:</span> Understanding SC 1.4.6
===========================================================================================================================

> **[1.4.6](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast7) Contrast (Enhanced):** The visual presentation of <a href="#textdef" class="termref">text</a> and <a href="#images-of-textdef" class="termref">images of text</a> has a <a href="#contrast-ratiodef" class="termref">contrast ratio</a> of at least 7:1, except for the following: (Level AAA)
>
> -   **Large Text:** <a href="#larger-scaledef" class="termref">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 4.5:1;
>
> -   **Incidental:** Text or images of text that are part of an inactive <a href="#user-interface-componentdef" class="termref">user interface component</a>, that are <a href="#puredecdef" class="termref">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
>
> -   **Logotypes:** Text that is part of a logo or brand name has no minimum contrast requirement.
>
Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to provide enough contrast between text and its background so that it can be read by people with moderately low vision (who do not use contrast-enhancing assistive technology). For people without color deficiencies, hue and saturation have minimal or no effect on legibility as assessed by reading performance (Knoblauch et al., 1991). Color deficiencies can affect luminance contrast somewhat. Therefore, in the recommendation, the contrast is calculated in such a way that color is not a key factor so that people who have a color vision deficit will also have adequate contrast between the text and the background.

Text that is decorative and conveys no information is excluded. For example, if random words are used to create a background and the words could be rearranged or substituted without changing meaning, then it would be decorative and would not need to meet this criterion.

Text that is larger and has wider character strokes is easier to read at lower contrast. The contrast requirement for larger text is therefore lower. This allows authors to use a wider range of color choices for large text, which is helpful for design of pages, particularly titles. 18 point text or 14 point bold text is judged to be large enough to require a lower contrast ratio. (See The American Printing House for the Blind Guidelines for Large Printing and The Library of Congress Guidelines for Large Print under [Resources](#visual-audio-contrast7-resources-head)). "18 point" and "bold" can both have different meanings in different fonts but, except for very thin or unusual fonts, they should be sufficient. Since there are so many different fonts, the general measures are used and a note regarding fancy or thin fonts is included.

*Note 1:* The point size should be obtained from the user agent, or calculated based on font metrics as the user agent does when evaluating this success criterion. Point sizes are based on the CSS pt size as defined in [CSS3 Values](). The ratio between sizes in points and CSS pixels is 1pt = 1.333px, therefore 14pt and 18pt are equivalent to approximately 18.5px and 24px.

*Note 2:* When fonts have anti-aliasing applied to make them look smoother, they can lose darkness or lightness. Thus, the actual contrast can be reduced. Thicker stem widths will reduce this effect (thin fonts could have the full stem lightened rather than just the ends). Using larger fonts and testing for legibility in user agents with font smoothing turned on is recommended.

*Note 3:* Because different image editing applications default to different pixel densities (ex. 72 PPI or 96 PPI), specifying point sizes for fonts from within an image editing application can be unreliable when it comes to presenting text at a specific size. When creating images of large-scale text, authors should ensure that the text in the resulting image is roughly equivalent to 1.2 and 1.5 em or to 120% or 150% of the default size for body text as rendered by the browser.

The previously-mentioned contrast requirements for text also apply to images of text (text that has been rendered into pixels and then stored in an image format) as stated in Success Criterion 1.4.5

This requirement applies to situations in which images of text were intended to be understood as text. Incidental text, such as in photographs that happen to include a street sign, are not included. Nor is text that for some reason is designed to be invisible to all users. Stylized text, such as in corporate logos, should be treated in terms of its function on the page, which may or may not warrant including the content in the text alternative. Corporate visual guidelines beyond logo and logotype are not included in the exception.

In this provision there is an exception that reads "that are part of a picture that contains significant other visual content,". This exception is intended to separate pictures that have text in them from images of text that are done to replace text in order to get a particular look.

Although this Success Criterion only applies to text, similar issues occur for content presented in charts, graphs, diagrams, and other non-text-based information. Content presented in this manner should also have good contrast to ensure that more users can access the information.

### Rationale for the Ratios Chosen

A contrast ratio of 3:1 is the minimum level recommended by [\[ISO-9241-3\]](appendixE.html#ISO-9241-3) and [\[ANSI-HFES-100-1988\]](appendixE.html#ANSI-HFES-100-1988) for standard text and vision. The 4.5:1 ratio is used in Success Criterion 1.4.3 to account for the loss in contrast that results from moderately low visual acuity, congenital or acquired color deficiencies, or the loss of contrast sensitivity that typically accompanies aging.

The rationale is based on a) adoption of the 3:1 contrast ratio for minimum acceptable contrast for normal observers, in the ANSI standard, and b) the empirical finding that in the population, visual acuity of 20/40 is associated with a contrast sensitivity loss of roughly 1.5 [\[ARDITI-FAYE\]](appendixE.html#ARDITI-FAYE). A user with 20/40 would thus require a contrast ratio of 3 \* 1.5 = 4.5 to 1. Following analogous empirical findings and the same logic, the user with 20/80 visual acuity would require contrast of about 7:1.

Hues are perceived differently by users with color vision deficiencies (both congenital and acquired) resulting in different colors and relative luminance contrasts than for normally sighted users. Because of this, effective contrast and readability are different for this population. However, color deficiencies are so diverse that prescribing effective general use color pairs (for contrast) based on quantitative data is not feasible. Requiring good luminance contrast accommodates this by requiring contrast that is independent of color perception. Fortunately, most of the luminance contribution is from the mid and long wave receptors which largely overlap in their spectral responses. The result is that effective luminance contrast can generally be computed without regard to specific color deficiency, except for the use of predominantly long wavelength colors against darker colors (generally appearing black) for those who have protanopia. (We provide an advisory technique on avoiding red on black for that reason). For more information see [\[ARDITI-KNOBLAUCH\]](appendixE.html#ARDITI-KNOBLAUCH-1994) [\[ARDITI-KNOBLAUCH-1996\]](appendixE.html#ARDITI-KNOBLAUCH-1996) [\[ARDITI\]](appendixE.html#ARDITI).

The contrast ratio of 4.5:1 was chosen for level AA because it compensated for the loss in contrast sensitivity usually experienced by users with vision loss equivalent to approximately 20/40 vision. (20/40 calculates to approximately 4.5:1.) 20/40 is commonly reported as typical visual acuity of elders at roughly age 80. [\[GITTINGS-FOZARD\]](appendixE.html#GITTINGS-FOZARD)

The contrast ratio of 7:1 was chosen for level AAA because it compensated for the loss in contrast sensitivity usually experienced by users with vision loss equivalent to approximately 20/80 vision. People with more than this degree of vision loss usually use assistive technologies to access their content (and the assistive technologies usually have contrast enhancing, as well as magnification capability built into them). The 7:1 level therefore generally provides compensation for the loss in contrast sensitivity experienced by users with low vision who do not use assistive technology and provides contrast enhancement for color deficiency as well.

*Note:* Calculations in [\[ISO-9241-3\]](appendixE.html#ISO-9241-3) and [\[ANSI-HFES-100-1988\]](appendixE.html#ANSI-HFES-100-1988) are for body text. A relaxed contrast ratio is provided for text that is much larger.

### Notes on formula

Conversion from nonlinear to linear RGB values is based on IEC/4WD 61966-2-1 [\[IEC-4WD\]](appendixE.html#IEC-4WD) and on "A Standard Default Color Space for the Internet - sRGB" [\[sRGB\]](appendixE.html#sRGB).

The formula (L1/L2) for contrast is based on [\[ISO-9241-3\]](appendixE.html#ISO-9241-3) and [\[ANSI-HFES-100-1988\]](appendixE.html#ANSI-HFES-100-1988) standards.

The ANSI/HFS 100-1988 standard calls for the contribution from ambient light to be included in the calculation of L1 and L2. The .05 value used is based on Typical Viewing Flare from [\[IEC-4WD\]](appendixE.html#IEC-4WD) and the [\[sRGB\]](appendixE.html#sRGB) paper by M. Stokes et al.

This Success Criterion and its definitions use the terms "contrast ratio" and "relative luminance" rather than "luminance" to reflect the fact that Web content does not emit light itself. The contrast ratio gives a measure of the relative luminance that would result when displayed. (Because it is a ratio, it is dimensionless.)

*Note 1:* Refer to [related resources](#visual-audio-contrast7-resources-head) for a list of tools that utilize the contrast ratio to analyze the contrast of Web content.

*Note 2:* See also *[Understanding Success Criterion 2.4.7 Focus Visible](navigation-mechanisms-focus-visible.html)* for techniques for indicating keyboard focus.

### Specific Benefits of Success Criterion 1.4.6:

-   People with low vision often have difficulty reading text that does not contrast with its background. This can be exacerbated if the person has a color vision deficiency that lowers the contrast even further. Providing a minimum luminance contrast ratio between the text and its background can make the text more readable even if the person does not see the full range of colors. It also works for the rare individuals who see no color.

Examples of Success Criterion 1.4.6
-----------------------------------

(none currently documented)

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Contrast Analyser – Application](https://www.paciellogroup.com/resources/contrastanalyser/)

-   [Contrast Ratio Analyser - online service](http://juicystudio.com/services/luminositycontrastratio.php)

-   [Colour Contrast Analyser - Firefox Extension](http://juicystudio.com/article/colour-contrast-analyser-firefox-extension.php)

-   [Colour Contrast Check](http://snook.ca/technical/colour_contrast/colour.html)

-   [Contrast Ratio Calculator](http://www.msfw.com/accessibility/tools/contrastratiocalculator.aspx)

-   [Color Contrast Samples](http://trace.wisc.edu/contrast-ratio-examples/)

-   [Atypical colour response](http://www.w3.org/Graphics/atypical-color-response)

-   [Colors On the Web Color Contrast Analyzer](http://www.colorsontheweb.com/colorcontrast.asp)

-   [6 Surprising Bad Practices That Hurt Dyslexic Users](http://uxmovement.com/content/6-surprising-bad-practices-that-hurt-dyslexic-users/)

-   [Design for Dyslexics](http://accessites.org/site/2006/11/designing-for-dyslexics-part-3-of-3)

-   [Typefaces for Dyslexia](http://www.iansyst.co.uk/articles/article/articles/2012/10/18/fonts-for-dyslexia)

-   [Web Design for Dyslexia](http://www.dyslexia.com/library/webdesign.htm)

Techniques and Failures for Success Criterion 1.4.6 - Contrast (Enhanced)
-------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="visual-audio-contrast7-situation-28-head"></span> Situation A: text is less than 18 point if not bold and less than 14 point if bold

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G17" class="tech-ref">G17: Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G148" class="tech-ref">G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults</a>

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G174" class="tech-ref">G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast</a>

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL13" class="tech-ref">SL13: Providing A Style Switcher To Switch To High Contrast</a> (Silverlight)

#### <span id="visual-audio-contrast7-situation-29-head"></span> Situation B: text is as least 18 point if not bold and at least 14 point if bold

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G18" class="tech-ref">G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G148" class="tech-ref">G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults</a>

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G174" class="tech-ref">G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast</a>

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL13" class="tech-ref">SL13: Providing A Style Switcher To Switch To High Contrast</a> (Silverlight)

### Additional Techniques (Advisory) for 1.4.6

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G156" class="tech-ref">G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text</a>

-   Using a higher contrast value for text that is over a patterned background (future link)

-   Using Unicode text and style sheets instead of images of text (future link)

-   Using a higher contrast values for lines in diagrams (future link)

-   Using greater contrast level for red-black text/background combinations

-   Using colors that are composed predominantly of mid spectral components for the light and spectral extremes (blue and red wavelengths) for the dark

-   Using a light pastel background rather than a white background behind black text to create sufficient but not extreme contrast (future link)

-   Making icons using simple line drawings that meet the contrast provisions for text (future link)

-   Providing sufficient contrast ratio in graphs and charts (future link)

-   Using a 3:1 contrast ratio or higher as the default presentation (future link)

-   Providing sufficient color contrast for empty text fields (future link)

### Common Failures for SC 1.4.6

The following are common mistakes that are considered failures of Success Criterion 1.4.6 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F24" class="tech-ref">F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F83" class="tech-ref">F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)</a>

Key Terms
---------

 <span id="contrast-ratiodef"></span> contrast ratio  
(L1 + 0.05) / (L2 + 0.05), where

-   L1 is the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef" class="termref">relative luminance</a> of the lighter of the colors, and

-   L2 is the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef" class="termref">relative luminance</a> of the darker of the colors.

*Note 1:* Contrast ratios can range from 1 to 21 (commonly written 1:1 to 21:1).

*Note 2:* Because authors do not have control over user settings as to how text is rendered (for example font smoothing or anti-aliasing), the contrast ratio for text can be evaluated with anti-aliasing turned off.

*Note 3:* For the purpose of Success Criteria 1.4.3 and 1.4.6, contrast is measured with respect to the specified background over which the text is rendered in normal usage. If no background color is specified, then white is assumed.

*Note 4:* Background color is the specified color of content over which the text is to be rendered in normal usage. It is a failure if no background color is specified when the text color is specified, because the user's default background color is unknown and cannot be evaluated for sufficient contrast. For the same reason, it is a failure if no text color is specified when a background color is specified.

*Note 5:* When there is a border around the letter, the border can add contrast and would be used in calculating the contrast between the letter and its background. A narrow border around the letter would be used as the letter. A wide border around the letter that fills in the inner details of the letters acts as a halo and would be considered background.

*Note 6:* WCAG conformance should be evaluated for color pairs specified in the content that an author would expect to appear adjacent in typical presentation. Authors need not consider unusual presentations, such as color changes made by the user agent, except where caused by authors' code.

 <span id="images-of-textdef"></span> image of text  
text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect

*Note:* This does not include <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#textdef" class="termref">text</a> that is part of a picture that contains significant other visual content.

*Example:* A person's name on a nametag in a photograph.

 <span id="larger-scaledef"></span> large scale (text)  
with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts

*Note 1:* Fonts with extraordinarily thin strokes or unusual features and characteristics that reduce the familiarity of their letter forms are harder to read, especially at lower contrast levels.

*Note 2:* Font size is the size when the content is delivered. It does not include resizing that may be done by a user.

*Note 3:* The actual size of the character that a user sees is dependent both on the author-defined size and the user's display or user-agent settings. For many mainstream body text fonts, 14 and 18 point is roughly equivalent to 1.2 and 1.5 em or to 120% or 150% of the default size for body text (assuming that the body font is 100%), but authors would need to check this for the particular fonts in use. When fonts are defined in relative units, the actual point size is calculated by the user agent for display. The point size should be obtained from the user agent, or calculated based on font metrics as the user agent does, when evaluating this success criterion. Users who have low vision would be responsible for choosing appropriate settings.

*Note 4:* When using text without specifying the font size, the smallest font size used on major browsers for unspecified text would be a reasonable size to assume for the font. If a level 1 heading is rendered in 14pt bold or higher on major browsers, then it would be reasonable to assume it is large text. Relative scaling can be calculated from the default sizes in a similar fashion.

*Note 5:* The 18 and 14 point sizes for roman texts are taken from the minimum size for large print (14pt) and the larger standard font size (18pt). For other fonts such as CJK languages, the "equivalent" sizes would be the minimum large print size used for those languages and the next larger standard large print size.

 <span id="puredecdef"></span> pure decoration  
serving only an aesthetic purpose, providing no information, and having no functionality

*Note:* Text is only purely decorative if the words can be rearranged or substituted without changing their purpose.

*Example:* The cover page of a dictionary has random words in very light text in the background.

 <span id="textdef"></span> text  
sequence of characters that can be <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#programmaticallydetermineddef" class="termref">programmatically determined</a>, where the sequence is expressing something in <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#human-langdef" class="termref">human language</a>

 <span id="user-interface-componentdef"></span> user interface component  
a part of the content that is perceived by users as a single control for a distinct function

*Note 1:* Multiple user interface components may be implemented as a single programmatic element. Components here is not tied to programming techniques, but rather to what the user perceives as separate controls.

*Note 2:* User interface components include form elements and links as well as components generated by scripts.

*Example:* An applet has a "control" that can be used to move through content by line or page or random access. Since each of these would need to have a name and be settable independently, they would each be a "user interface component."

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.5 \[Images of Text\]](visual-audio-contrast-text-presentation.html "Understanding SC  1.4.5 [Images of Text]")
-   [**Next:** SC 1.4.7 \[Low or No Background Audio\]](visual-audio-contrast-noaudio.html "Understanding SC  1.4.7 [Low or No Background Audio]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast7.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
