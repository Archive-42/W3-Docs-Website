-   [Contents](. "Table of Contents")
-   [GL: Distinguishable](distinguishable)
-   [Previous SC: Identify Purpose](identify-purpose)
-   [Next SC: Audio Control](audio-control)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)

Understanding Success Criterion 1.4.1: Use of Color
===================================================

> Success Criterion [1.4.1 Use of Color](https://www.w3.org/TR/WCAG21/#use-of-color) (Level A): Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.
>
> This success criterion addresses color perception specifically. Other forms of perception are covered in [Guideline 1.3](https://www.w3.org/TR/WCAG21/#adaptable) including programmatic access to color and other visual presentation coding.

Intent
------

The intent of this Success Criterion is to ensure that all users can access information that is conveyed by color differences, that is, by the use of color where each color has a meaning assigned to it. If the information is conveyed through color differences in an image (or other non-text format), the color may not be seen by users with color deficiencies. In this case, providing the information conveyed with color through another visual means ensures users who cannot see color can still perceive the information.

Color is an important asset in design of Web content, enhancing its aesthetic appeal, its usability, and its accessibility. However, some users have difficulty perceiving color. People with partial sight often experience limited color vision, and many older users do not see color well. In addition, people using text-only, limited-color or monochrome displays and browsers will be unable to access information that is presented only in color.

Examples of information conveyed by color differences: “required fields are red", “error is shown in red", and “Mary's sales are in red, Tom's are in blue". Examples of indications of an action include: using color to indicate that a link will open in a new window or that a database entry has been updated successfully. An example of prompting a response would be: using highlighting on form fields to indicate that a required field had been left blank.

Note

This should not in any way discourage the use of color on a page, or even color coding if it is redundant with other visual indication.

Benefits
--------

-   Users with partial sight often experience limited color vision.
-   Some older users may not be able to see color well.
-   Users who have color-blindness benefit when information conveyed by color is available in other visual ways.
-   People using text-only, limited color, or monochrome displays may be unable to access color-dependent information.
-   Users who have problems distinguishing between colors can look or listen for text cues.
-   People using Braille displays or other tactile interfaces can detect text cues by touch.

Examples
--------

-   **A form that uses color and text to indicate required fields**

    A form contains both required and optional fields. Instructions at the top of the form explain that required fields are labeled with red text and also with an icon whose text alternative says, "Required." Both the red text and the icon are programmatically associated with the appropriate form fields so that assistive technology users can determine the required fields.

-   **An examination.**

    Students view an SVG image of a chemical compound and identify the chemical elements present based on the colors and numbers used in the diagram. The text alternatives associated with each element name the color of the element and indicate the element's position in the diagram. Students who cannot perceive color have the same information about the compound as their classmates. (This technique also satisfies <a href="non-text-content" class="guideline">Guideline 1.1</a> Level A.)

-   **Disabled Form elements.**

    Form elements which are disabled via markup or scripting, are greyed out and made inactive by the user agent. When in the disabled state these elements do not receive focus. Assistive technologies can programmatically determine the state of disabled elements and will provide this information to the user as the elements are encountered on the page. The change in color and loss of focus provides redundant, visual information about the state of the control.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Vischeck](http://www.vischeck.com/)
-   [AWARE Color Laboratory](http://colorlab.wickline.org/colorblind/colorlab/)
-   [Wikipedia: Color Blindness](https://en.wikipedia.org/wiki/Color_blindness)
-   [Microsoft: Can Color-Blind Users See Your Site?](https://msdn.microsoft.com/en-us/library/bb263953.aspx)
-   [Causes of Color: How do people inherit colorblindness? How often?: Genetics](http://www.webexhibits.org/causesofcolor/2C.html)
-   [How to make figures and presentations that are friendly to Colorblind people](http://jfly.iam.u-tokyo.ac.jp/color/)
-   [The Color Tutor application](http://www.tomjewett.com/colors/tutor.html)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### Situation A: If the color of particular words, backgrounds, or other content is used to indicate information:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G14" class="general">G14: Ensuring that information conveyed by color differences is also available in text</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G205" class="general">G205: Including a text cue for colored form control labels</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G182" class="general">G182: Ensuring that additional visual cues are available when text color differences are used to convey information</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G183" class="general">G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them</a>

#### Situation B: If color is used within an image to convey information:

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G111" class="general">G111: Using color and pattern</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G14" class="general">G14: Ensuring that information conveyed by color differences is also available in text</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C15" class="css">C15: Using CSS to change the presentation of a user interface component when it receives focus</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F13" class="failure">F13: Failure of Success Criterion 1.1.1 and 1.4.1 due to having a text alternative that does not include information that is conveyed by color differences in the image</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F73" class="failure">F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F81" class="failure">F81: Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only</a>
