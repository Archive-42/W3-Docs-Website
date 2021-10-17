-   [Contents](. "Table of Contents")
-   [GL: Distinguishable](distinguishable)
-   [Previous SC: Audio Control](audio-control)
-   [Next SC: Resize text](resize-text)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.4.3: Contrast (Minimum)
=========================================================

> Success Criterion [1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG21/#contrast-minimum) (Level AA): The visual presentation of [text](#dfn-text) and [images of text](#dfn-image-of-text) has a [contrast ratio](#dfn-contrast-ratio) of at least 4.5:1, except for the following:
>
> Large Text  
> [Large-scale](#dfn-large-scale) text and images of large-scale text have a contrast ratio of at least 3:1;
>
> Incidental  
> Text or images of text that are part of an inactive [user interface component](#dfn-user-interface-component), that are [pure decoration](#dfn-pure-decoration), that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
>
> Logotypes  
> Text that is part of a logo or brand name has no contrast requirement.

Intent
------

The intent of this Success Criterion is to provide enough contrast between text and its background so that it can be read by people with moderately low vision (who do not use contrast-enhancing assistive technology). For people without color deficiencies, hue and saturation have minimal or no effect on legibility as assessed by reading performance (Knoblauch et al., 1991). Color deficiencies can affect luminance contrast somewhat. Therefore, in the recommendation, the contrast is calculated in such a way that color is not a key factor so that people who have a color vision deficit will also have adequate contrast between the text and the background.

Text that is decorative and conveys no information is excluded. For example, if random words are used to create a background and the words could be rearranged or substituted without changing meaning, then it would be decorative and would not need to meet this criterion.

Text that is larger and has wider character strokes is easier to read at lower contrast. The contrast requirement for larger text is therefore lower. This allows authors to use a wider range of color choices for large text, which is helpful for design of pages, particularly titles. 18 point text or 14 point bold text is judged to be large enough to require a lower contrast ratio. (See The American Printing House for the Blind Guidelines for Large Printing and The Library of Congress Guidelines for Large Print under [Resources](#resources)). "18 point" and "bold" can both have different meanings in different fonts but, except for very thin or unusual fonts, they should be sufficient. Since there are so many different fonts, the general measures are used and a note regarding fancy or thin fonts is included.

Note

When evaluating this success criterion, the font size in points should be obtained from the user agent or calculated on font metrics in the way that user agents do. Point sizes are based on the CSS pt size as defined in [CSS3 Values](https://www.w3.org/TR/css-values-3/#reference-pixel). The ratio between sizes in points and CSS pixels is 1pt = 1.333px, therefore 14pt and 18pt are equivalent to approximately 18.5px and 24px.

Because different image editing applications default to different pixel densities (e.g. 72 PPI or 96 PPI), specifying point sizes for fonts from within an image editing application can be unreliable when it comes to presenting text at a specific size. When creating images of large-scale text, authors should ensure that the text in the resulting image is roughly equivalent to 1.2 and 1.5 em or to 120% or 150% of the default size for body text. For example, for a 72 PPI image, an author would need to use approximately 19 pt and 24 pt font sizes in order to successfully present images of large-scale text to a user.

The previously-mentioned contrast requirements for text also apply to images of text (text that has been rendered into pixels and then stored in an image format) as stated in Success Criterion 1.4.3.

This requirement applies to situations in which images of text were intended to be understood as text. Incidental text, such as in photographs that happen to include a street sign, are not included. Nor is text that for some reason is designed to be invisible to all viewers. Stylized text, such as in corporate logos, should be treated in terms of its function on the page, which may or may not warrant including the content in the text alternative. Corporate visual guidelines beyond logo and logotype are not included in the exception.

In this provision there is an exception that reads "that are part of a picture that contains significant other visual content,". This exception is intended to separate pictures that have text in them from images of text that are done to replace text in order to get a particular look.

Note

Images of text do not scale as well as text because they tend to pixelate. It is also harder to change foreground and background contrast and color combinations for images of text, which is necessary for some users. Therefore, we suggest using text wherever possible, and when not, consider supplying an image of higher resolution.

The minimum contrast success criterion (1.4.3) applies to text in the page, including placeholder text and text that is shown when a pointer is hovering over an object or when an object has keyboard focus. If any of these are used in a page, the text needs to provide sufficient contrast.

Although this Success Criterion only applies to text, similar issues occur for content presented in charts, graphs, diagrams, and other non-text-based information. Content presented in this manner should also have good contrast to ensure that more users can access the information.

See also [1.4.6: Contrast (Enhanced)](contrast-enhanced).

### Rationale for the Ratios Chosen

Text that is larger and has wider character strokes is easier to read at lower contrast. The contrast requirement for larger text is therefore lower. This allows authors to use a wider range of color choices for large text, which is helpful for design of pages, particularly titles. 18 point text or 14 point bold text is judged to be large enough to require a lower contrast ratio. (See The American Printing House for the Blind Guidelines for Large Printing and The Library of Congress Guidelines for Large Print under [Resources](#resources)). "18 point" and "bold" can both have different meanings in different fonts but, except for very thin or unusual fonts, they should be sufficient. Since there are so many different fonts, the general measures are used and a note regarding fancy or thin fonts is included.

Note

When evaluating this success criterion, the font size in points should be obtained from the user agent or calculated on font metrics in the way that user agents do. Point sizes are based on the CSS pt size as defined in [CSS3 Values](). The ratio between sizes in points and CSS pixels is 1pt = 1.333px, therefore 14pt and 18pt are equivalent to approximately 18.5px and 24px.

Because different image editing applications default to different pixel densities (e.g. 72 PPI or 96 PPI), specifying point sizes for fonts from within an image editing application can be unreliable when it comes to presenting text at a specific size. When creating images of large-scale text, authors should ensure that the text in the resulting image is roughly equivalent to 1.2 and 1.5 em or to 120% or 150% of the default size for body text as rendered by the browser.

Hues are perceived differently by users with color vision deficiencies (both congenital and acquired) resulting in different colors and relative luminance contrasts than for normally sighted users. Because of this, effective contrast and readability are different for this population. However, color deficiencies are so diverse that prescribing effective general use color pairs (for contrast) based on quantitative data is not feasible. Requiring good luminance contrast accommodates this by requiring contrast that is independent of color perception. Fortunately, most of the luminance contribution is from the mid and long wave receptors which largely overlap in their spectral responses. The result is that effective luminance contrast can generally be computed without regard to specific color deficiency, except for the use of predominantly long wavelength colors against darker colors (generally appearing black) for those who have protanopia. (We provide an advisory technique on avoiding red on black for that reason). For more information see \[\[ARDITI-KNOBLAUCH-1994\]\] \[\[ARDITI-KNOBLAUCH-1996\]\] \[\[ARDITI\]\].

Note

Some people with cognitive disabilities require color combinations or hues that have low contrast, and therefore we allow and encourage authors to provide mechanisms to adjust the foreground and background colors of the content. Some of the combinations that could be chosen may have contrast levels that will be lower than those found in the Success Criteria. This is not a violation of this Success Criteria provided there is a mechanism that will return to the default values set out in the Success Criteria.

A contrast ratio of 3:1 is the minimum level recommended by \[\[ISO-9241-3\]\] and \[\[ANSI-HFES-100-1988\]\] for standard text and vision. The 4.5:1 ratio is used in this provision to account for the loss in contrast that results from moderately low visual acuity, congenital or acquired color deficiencies, or the loss of contrast sensitivity that typically accompanies aging.

The rationale is based on a) adoption of the 3:1 contrast ratio for minimum acceptable contrast for normal observers, in the ANSI standard, and b) the empirical finding that in the population, visual acuity of 20/40 is associated with a contrast sensitivity loss of roughly 1.5 \[\[ARDITI-FAYE\]\]. A user with 20/40 would thus require a contrast ratio of 3 \* 1.5 = 4.5 to 1. Following analogous empirical findings and the same logic, the user with 20/80 visual acuity would require contrast of about 7:1.

The contrast ratio of 4.5:1 was chosen for level AA because it compensated for the loss in contrast sensitivity usually experienced by users with vision loss equivalent to approximately 20/40 vision. (20/40 calculates to approximately 4.5:1.) 20/40 is commonly reported as typical visual acuity of elders at roughly age 80. \[\[GITTINGS-FOZARD\]\]

The contrast ratio of 7:1 was chosen for level AAA because it compensated for the loss in contrast sensitivity usually experienced by users with vision loss equivalent to approximately 20/80 vision. People with more than this degree of vision loss usually use assistive technologies to access their content (and the assistive technologies usually have contrast enhancing, as well as magnification capability built into them). The 7:1 level therefore generally provides compensation for the loss in contrast sensitivity experienced by users with low vision who do not use assistive technology and provides contrast enhancement for color deficiency as well.

Note

Calculations in \[\[ISO-9241-3\]\] and \[\[ANSI-HFES-100-1988\]\] are for body text. A relaxed contrast ratio is provided for text that is much larger.

### Notes on formula

Conversion from nonlinear to linear RGB values is based on IEC/4WD 61966-2-1 \[\[IEC-4WD\]\] and on "A Standard Default Color Space for the Internet - sRGB" \[\[sRGB\]\].

The formula (L1/L2) for contrast is based on \[\[ISO-9241-3\]\] and \[\[ANSI-HFES-100-1988\]\] standards.

The ANSI/HFS 100-1988 standard calls for the contribution from ambient light to be included in the calculation of L1 and L2. The .05 value used is based on Typical Viewing Flare from \[\[IEC-4WD\]\] and the \[\[sRGB\]\] paper by M. Stokes et al.

This Success Criterion and its definitions use the terms "contrast ratio" and "relative luminance" rather than "luminance" to reflect the fact that Web content does not emit light itself. The contrast ratio gives a measure of the relative luminance that would result when displayed. (Because it is a ratio, it is dimensionless.)

Note

Refer to [related resources](#resources) for a list of tools that utilize the contrast ratio to analyze the contrast of Web content.

See also [2.4.3: Focus Visible](focus-visible) for techniques for indicating keyboard focus.

It is sometimes helpful for authors to not specify colors for certain sections of a page in order to help users who need to view content with specific color combinations to view the content in their preferred color scheme. Refer to [1.4.3: Images of Text](images-of-text) for more information.

Benefits
--------

-   People with low vision often have difficulty reading text that does not contrast with its background. This can be exacerbated if the person has a color vision deficiency that lowers the contrast even further. Providing a minimum luminance contrast ratio between the text and its background can make the text more readable even if the person does not see the full range of colors. It also works for the rare individuals who see no color.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Contrast Analyser – Application](https://www.paciellogroup.com/resources/contrastanalyser/)
-   [Contrast Ratio Analyser - online service](http://juicystudio.com/services/luminositycontrastratio.php)
-   [Colour Contrast Analyser - Firefox Extension](http://juicystudio.com/article/colour-contrast-analyser-firefox-extension.php)
-   [Colour Contrast Check](http://snook.ca/technical/colour_contrast/colour.html)
-   [Contrast Ratio Calculator](http://www.msfw.com/accessibility/tools/contrastratiocalculator.aspx)
-   [Color Contrast Samples](http://trace.wisc.edu/contrast-ratio-examples/)
-   [Atypical colour response](https://www.w3.org/Graphics/atypical-color-response)
-   [Colors On the Web Color Contrast Analyzer](http://www.colorsontheweb.com/colorcontrast.asp)
-   [Tool to convert images based on color loss so that contrast is restored as luminance contrast when there was only color contrast (that was lost due to color deficiency)](http://www.vischeck.com/daltonize/runDaltonize.php)
-   [List of color contrast tools](http://www.456bereastreet.com/archive/200709/10_colour_contrast_checking_tools_to_improve_the_accessibility_of_your_design/)
-   [The American Printing House for the Blind Guidelines for Large Printing](https://www.aph.org/research/design-guidelines/)
-   [National Library Service for the Blind and Physically Handicapped (NLS), The Library of Congress Guidelines for Large Print](https://www.loc.gov/nlsold/reference/guides/largeprint.html)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### Situation A: text is less than 18 point if not bold and less than 14 point if bold

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G18" class="general">G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G148" class="general">G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G174" class="general">G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL13" class="silverlight">SL13: Providing A Style Switcher To Switch To High Contrast</a>

#### Situation B: text is at least 18 point if not bold and at least 14 point if bold

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G145" class="general">G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G148" class="general">G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G174" class="general">G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL13" class="silverlight">SL13: Providing A Style Switcher To Switch To High Contrast</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G156" class="general">G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F24" class="failure">F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F83" class="failure">F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)</a>

Key Terms
---------

assistive technology

hardware and/or software that acts as a [user agent](#dfn-user-agent), or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

Note

functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

Note

Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

Note

The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

Assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;
-   screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;
-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;
-   speech recognition software, which may be used by people who have some physical disabilities;
-   alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);
-   alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

contrast ratio

(L1 + 0.05) / (L2 + 0.05), where

-   L1 is the [relative luminance](#dfn-relative-luminance) of the lighter of the colors, and
-   L2 is the [relative luminance](#dfn-relative-luminance) of the darker of the colors.

Note

Contrast ratios can range from 1 to 21 (commonly written 1:1 to 21:1).

Note

Because authors do not have control over user settings as to how text is rendered (for example font smoothing or anti-aliasing), the contrast ratio for text can be evaluated with anti-aliasing turned off.

Note

For the purpose of Success Criteria 1.4.3 and 1.4.6, contrast is measured with respect to the specified background over which the text is rendered in normal usage. If no background color is specified, then white is assumed.

Note

Background color is the specified color of content over which the text is to be rendered in normal usage. It is a failure if no background color is specified when the text color is specified, because the user's default background color is unknown and cannot be evaluated for sufficient contrast. For the same reason, it is a failure if no text color is specified when a background color is specified.

Note

When there is a border around the letter, the border can add contrast and would be used in calculating the contrast between the letter and its background. A narrow border around the letter would be used as the letter. A wide border around the letter that fills in the inner details of the letters acts as a halo and would be considered background.

Note

WCAG conformance should be evaluated for color pairs specified in the content that an author would expect to appear adjacent in typical presentation. Authors need not consider unusual presentations, such as color changes made by the user agent, except where caused by authors' code.

human language

language that is spoken, written or signed (through visual or tactile means) to communicate with humans

Note

See also [sign language](#dfn-sign-language).

image of text

text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect

Note

This does not include [text](#dfn-text) that is part of a picture that contains significant other visual content.

A person's name on a nametag in a photograph.

large scale

with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts

Note

Fonts with extraordinarily thin strokes or unusual features and characteristics that reduce the familiarity of their letter forms are harder to read, especially at lower contrast levels.

Note

Font size is the size when the content is delivered. It does not include resizing that may be done by a user.

Note

The actual size of the character that a user sees is dependent both on the author-defined size and the user's display or user-agent settings. For many mainstream body text fonts, 14 and 18 point is roughly equivalent to 1.2 and 1.5 em or to 120% or 150% of the default size for body text (assuming that the body font is 100%), but authors would need to check this for the particular fonts in use. When fonts are defined in relative units, the actual point size is calculated by the user agent for display. The point size should be obtained from the user agent, or calculated based on font metrics as the user agent does, when evaluating this success criterion. Users who have low vision would be responsible for choosing appropriate settings.

Note

When using text without specifying the font size, the smallest font size used on major browsers for unspecified text would be a reasonable size to assume for the font. If a level 1 heading is rendered in 14pt bold or higher on major browsers, then it would be reasonable to assume it is large text. Relative scaling can be calculated from the default sizes in a similar fashion.

Note

The 18 and 14 point sizes for roman texts are taken from the minimum size for large print (14pt) and the larger standard font size (18pt). For other fonts such as CJK languages, the "equivalent" sizes would be the minimum large print size used for those languages and the next larger standard large print size.

programmatically determined

determined by software from author-supplied data provided in a way that different [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology), can extract and present this information to users in different modalities

Note

Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

Note

Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

pure decoration

serving only an aesthetic purpose, providing no information, and having no functionality

Note

Text is only purely decorative if the words can be rearranged or substituted without changing their purpose.

The cover page of a dictionary has random words in very light text in the background.

relative luminance

the relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white

Note

For the sRGB colorspace, the relative luminance of a color is defined as L = 0.2126 \* **R** + 0.7152 \* **G** + 0.0722 \* **B** where **R**, **G** and **B** are defined as:

-   if RsRGB &lt;= 0.03928 then **R** = RsRGB/12.92 else **R** = ((RsRGB+0.055)/1.055) ^ 2.4
-   if GsRGB &lt;= 0.03928 then **G** = GsRGB/12.92 else **G** = ((GsRGB+0.055)/1.055) ^ 2.4
-   if BsRGB &lt;= 0.03928 then **B** = BsRGB/12.92 else **B** = ((BsRGB+0.055)/1.055) ^ 2.4

and RsRGB, GsRGB, and BsRGB are defined as:

-   RsRGB = R8bit/255
-   GsRGB = G8bit/255
-   BsRGB = B8bit/255

The "^" character is the exponentiation operator. (Formula taken from \[\[sRGB\]\] and \[\[IEC-4WD\]\]).

Note

Almost all systems used today to view Web content assume sRGB encoding. Unless it is known that another color space will be used to process and display the content, authors should evaluate using sRGB colorspace. If using other color spaces, see [Understanding Success Criterion 1.4.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast).

Note

If dithering occurs after delivery, then the source color value is used. For colors that are dithered at the source, the average values of the colors that are dithered should be used (average R, average G, and average B).

Note

Tools are available that automatically do the calculations when testing contrast and flash.

Note

A [MathML version of the relative luminance definition](relative-luminance.xml) is available.

sign language

a language using combinations of movements of the hands and arms, facial expressions, or body positions to convey meaning

text

sequence of characters that can be [programmatically determined](#dfn-programmatically-determined), where the sequence is expressing something in [human language](#dfn-human-language)

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.

user interface component

a part of the content that is perceived by users as a single control for a distinct function

Note

Multiple user interface components may be implemented as a single programmatic element. Components here is not tied to programming techniques, but rather to what the user perceives as separate controls.

Note

User interface components include form elements and links as well as components generated by scripts.

Note

What is meant by "component" or "user interface component" here is also sometimes called "user interface element".

An applet has a "control" that can be used to move through content by line or page or random access. Since each of these would need to have a name and be settable independently, they would each be a "user interface component."
