-   [Contents](. "Table of Contents")
-   [GL: Distinguishable](distinguishable)
-   [Previous SC: Reflow](reflow)
-   [Next SC: Text Spacing](text-spacing)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.4.11: Non-text Contrast
=========================================================

> Success Criterion [1.4.11 Non-text Contrast](https://www.w3.org/TR/WCAG21/#non-text-contrast) (Level AA): The visual [presentation](#dfn-presentation) of the following have a [contrast ratio](#dfn-contrast-ratio) of at least 3:1 against adjacent color(s):
>
> User Interface Components  
> Visual information required to identify [user interface components](#dfn-user-interface-component) and [states](#dfn-state), except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;
>
> Graphical Objects  
> Parts of graphics required to understand the content, except when a particular presentation of graphics is [essential](#dfn-essential) to the information being conveyed.

Intent
------

The intent of this Success Criterion is to ensure that active user interface components (i.e., controls) and meaningful graphics are distinguishable by people with moderately low vision. The requirements and rationale are similar to those for large text in [1.4.3 Contrast (Minimum)](contrast-minimum).

Low contrast controls are more difficult to perceive, and may be completely missed by people with a visual impairment. Similarly, if a graphic is needed to understand the content or functionality of the webpage then it should be perceivable by people with low vision or other impairments without the need for contrast-enhancing assistive technology.

### Active User Interface Components

For active controls any visual information provided that is necessary for a user to identify that a control is present and how to operate it must have a minimum 3:1 contrast ratio with the adjacent colors. Also, any visual information necessary to indicate state, such as whether a component is selected or focused must also ensure that the information used to identify the control in that state has a minimum 3:1 contrast ratio.

This Success Criterion does not require that changes in color that differentiate between states of an individual component meet the 3:1 contrast ratio when they do not appear next to each other. For example, there is not a new requirement that visited links contrast with the default color, or that mouse hover indicators contrast with the default state. However, the component must not lose contrast with the adjacent colors, and non-text indicators such as the check in a checkbox, or an arrow graphic indicating a menu is selected or open must have sufficient contrast to the adjacent colors.

### Boundaries

This success criteria does not require that controls have a visual boundary indicating the hit area, but if the visual indicator of the control is the only way to identify the control, then that indicator must have sufficient contrast. If text (or an icon) within a button or placeholder text inside a text input is visible and there is no visual indication of the hit area then the Success Criterion is passed. If a button with text also has a colored border, since the border does not provide the only indication there is no contrast requirement beyond the text contrast ([1.4.3 Contrast (Minimum)](contrast-minimum)). Note that for people with cognitive disabilities it is recommended to delineate the boundary of controls to aid in the recognition of controls and therefore the completion of activities.

![Figure 1 A button (active control) without a visual boundary, and the same button with a focus indicator that is a defined visual boundary of grey (\#949494) adjacent to white.](img/minimal-button.png)

### Adjacent colors

For user interface components 'adjacent colors' means the colors adjacent to the component. For example, if an input has a white internal background, dark border, and white external background the 'adjacent color' to the component would be the white external background.

![Figure 2 A standard text input with a grey border (\#767676) and white adjacent color outside the component](img/text-input-default.png)

If components use several colors, any color which does not interfere with identifying the component can be ignored for the purpose of measuring contrast ratio. For example, a 3D drop-shadow on an input, or a dark border line between contrasting backgrounds is considered to be subsumed into the color closest in brightness (perceived luminance).

The following example shows an input that has a light background on the inside and a dark background around it. The input also has a dark grey border which is considered to be subsumed into the dark background. The border does not interfere with identifying the component, so the contrast ratio is taken between the white background and dark blue background.

![Figure 3 The contrast of the input background (white) and color adjacent to the control (dark blue \#003366) is sufficient. There is also a border (silver) on the component that is not required to contrast with either.](img/text-input-background-border.png)

For visual information required to identify a state, such as the check in a checkbox or the thumb of a slider, that part might be within the component so the adjacent color might be another part of the component.

![Figure 4 A customized checkbox with light grey check (\#E5E5E5), which has a contrast ratio of 5.6:1 with the purple box (\#6221EA).](img/checkbox-purple.png)

It is possible to use a flat design where the status indicator fills the component and does not contrast with the component, but does contrast with the colors adjacent to the component.

![Figure 5 The first radio button shows the default state with a grey (\#949494) circle. The second and third show the radio button selected and filled with a color that contasts with the color adjacent to the component. The last example shows the state indicator contrasting with the component colors.](img/radio-custom.png)

### Relationship with Use of Color and Focus Visible

The [Use of Color](use-of-color) success criterion addresses changing **only the color** (hue) of an object or text without otherwise altering the object's form. The principle is that contrast ratio (the difference in brightness) can be used to distinguish text or graphics. For example, [G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them](https://www.w3.org/WAI/WCAG21/Techniques/general/G183) is a technique to use a contrast ratio of 3:1 with surrounding text to distinguish links and controls. In that case the Working Group regards a link color that meets the 3:1 contrast ratio relative to the non-linked text color as satisfying the Success Criteria [1.4.1 Use of color](use-of-color) since it is relying on contrast ratio as well as color (hue) to convey that the text is a link.

Non-text information within controls that uses a change of hue alone to convey the value or state of an input, such as a 1-5 star indicator with a black outline for each star filled with either yellow (full) or white (empty) is likely to fail the Use of color criteria rather than this one.

<figure><img src="img/star-examples-pass.png" alt="Figure 6 Two examples which pass this success criteria, using either a solid fill to indicate a checked-state that has contrast, or a thicker border as well as yellow fill." width="300" /><figcaption>Figure 6 Two examples which pass this success criteria, using either a solid fill to indicate a checked-state that has contrast, or a thicker border as well as yellow fill.</figcaption></figure><figure><img src="img/star-examples-fail.png" alt="Figure 7 Two examples which fail a success criteria, the first fails the Use of color criteria due to relying on yellow and white hues. The second example fails the Non-text contrast criteria due to the yellow (#fff000) to white contrast ratio of 1.2:1." width="300" /><figcaption>Figure 7 Two examples which fail a success criteria, the first fails the Use of color criteria due to relying on yellow and white hues. The second example fails the Non-text contrast criteria due to the yellow (#fff000) to white contrast ratio of 1.2:1.</figcaption></figure>Using a change of contrast for focus and other states is a technique to differentiate the states. This is the basis for <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G195" class="general">G195: Using an author-supplied, highly visible focus indicator</a>, and more techniques are being added.

In combination with [2.4.7 Focus Visible](https://www.w3.org/TR/WCAG21/#focus-visible), the visual focus indicator for a component *must* have sufficient contrast against the adjacent background when the component is focused, except where the appearance of the component is determined by the user agent and not modified by the author.

Note that this Success Criterion does not directly compare the focused and unfocused states of a control - if the focus state relies on a change of color (e.g., changing *only* the background color of a button), this Success Criterion does not define any requirement for the difference in contrast between the two states.

#### Active User Interface Component Examples

For designing focus indicators, selection indicators and user interface components that need to be perceived clearly, the following are examples that have sufficient contrast.

<table><caption> Active User Interface Component Examples </caption><thead><tr class="header"><th>Type</th><th>Description</th><th>Examples</th></tr></thead><tbody><tr class="odd"><td>Link Text</td><td>Default link text is in the scope of <a href="contrast-minimum">1.4.3 Contrast (Minimum)</a>, and the underline is sufficient to indicate the link.</td><td><img src="img/link-text-default.png" alt="A browser-default styled link, blue with an underline." /></td></tr><tr class="even"><td>Default focus style</td><td>Links are required to have a focus indicator by <a href="focus-visible.html">2.4.7 Focus Visible</a>. Where the focus style of the user-agent is not adjusted on interactive controls (such as links, form fields or buttons), the default focus style is sufficient.</td><td><img src="img/link-text-focus.png" alt="A browser-default styled link, with a black dotted outline around the link." /></td></tr><tr class="odd"><td>Buttons</td><td>A button which has a distinguishing indicator such as position, text style, or context does not need a <em>contrasting</em> visual indicator to show that it is a button, although some users are likely to identify a button with an outline that meets contrast requirements more easily.</td><td><img src="img/button-background.png" alt="Button with a faint blue background." width="100" /></td></tr><tr class="even"><td>Text input (minimal)</td><td>Where a text-input has a visual indicator to show it is an input, such as a bottom border (#767676), that indicator must meet 3:1 contrast ratio.</td><td><img src="img/text-input-minimal.png" alt="A label with a text input shown by a bottom border and faint grey background." /></td></tr><tr class="odd"><td>Text input</td><td>Where a text-input has an indicator such as a complete border (#76766), that indicator it must meet 3:1 contrast ratio.</td><td><img src="img/text-input-default.png" alt="A label with a text input shown by a complete border." /></td></tr><tr class="even"><td>Text input focus style</td><td>A focus indicator is required. While in this case the additional gray (#CCC) outline has an insufficient contrast of 1.6:1 against the white (#FFF) background, the cursor/caret which is displayed when the input receives focus <em>does</em> provide a sufficiently strong visual indication.</td><td><img src="img/text-input-focus.png" alt="A label with a text input with a faint gray outline and a visible cursor/caret." /></td></tr><tr class="odd"><td>Text input using background color</td><td>Text inputs that have no border and are differentiated only by a background color must have a 3:1 contrast ratio to the adjacent background (#043464).</td><td><img src="img/text-input-background.png" alt="A label with a text input shown by a dark blue page background, and white box." /></td></tr><tr class="even"><td>Toggle button</td><td>The toggle button's internal background (#070CD5) has a good contrast with the external white background. Also, the round toggle within (#7AC2FF) contrasts with the internal background.</td><td><img src="img/toggle.png" alt="Dark blue oval toggle button with light blue internal indicator." width="150" /></td></tr><tr class="odd"><td>Dropdown indicator</td><td>The down-arrow is required to understand that there is drop-down functionality, it has a contrast of 4.7:1 for the white icon on dark gray (#6E747B).</td><td><img src="img/dropdown.png" alt="Button with the word Menu, and a down-arrow icon next to it." width="150" /></td></tr><tr class="even"><td>Dropdown indicator</td><td>The down-arrow is required to understand that there is drop-down functionality, it has a contrast of 21:1 for the black icon on white.</td><td><img src="img/dropdown2.png" alt="Text with the word Menu, and a down-arrow icon next to it." width="150" /></td></tr><tr class="odd"><td>Checkbox - empty</td><td>A black border on a white background indicates the checkbox.</td><td><img src="img/checkbox-example1.png" alt="Black square border with a text label." width="150" /></td></tr><tr class="even"><td>Checkbox - checked</td><td>A black border on a white background indicates the checkbox, the black tick shape indicates the state of checked.</td><td><img src="img/checkbox-example2.png" alt="Black square border with a tick inside, and a text label." width="150" /></td></tr><tr class="odd"><td>Checkbox - Fail</td><td>The grey border color of the checkbox (#9D9D9D) has a contrast ratio of 2.7:1 with the white background, which is not sufficient for the visual information required to identify the checkbox.</td><td><img src="img/checkbox-example3.png" alt="Grey box on a white background with a black tick in the middle." width="150" /></td></tr><tr class="even"><td>Checkbox - Subtle hover style</td><td>A black border on a white background indicates the checkbox, when the mouse pointer activates the subtle hover state adds a grey background (#DEDEDE). The black border has a 15:1 contrast ratio with the grey background.</td><td><img src="img/checkbox-example4.png" alt="Blackbox on a circular grey background next to a text label." width="150" /></td></tr><tr class="odd"><td>Checkbox - Subtle focus style - fail</td><td>A focus indicator is required. If the focus indicator is styled by the author, it must meet the 3:1 contrast ratio with adjacent colors. In this case, the gray (#AAA) indicator has an insufficient ratio of 2.3:1 with the white (#FFF) adjacent background.</td><td><img src="img/checkbox-example5.png" alt="Unchecked checkbox with a thick gray additional outline as focus indication." /></td></tr></tbody></table>

#### Inactive User Interface Components

User Interface Components that are not available for user interaction (e.g., a disabled control in HTML) are not required to meet contrast requirements in WCAG 2.1. An inactive user interface component is visible but not currently operable. An example would be a submit button at the bottom of a form that is visible but cannot be activated until all the required fields in the form are completed.

<figure><img src="img/inactive-button.png" alt="Figure 8 An inactive button using default browser styles" width="120" /><figcaption>Figure 8 An inactive button using default browser styles</figcaption></figure>Inactive components, such as disabled controls in HTML, are not available for user interaction. The decision to exempt inactive controls from the contrast requirements was based on a number of considerations. Although it would be benefitial to some people to discern inactive controls, a one-size-fits-all solution has been very difficult to establish. A method of varying the presentation of disabled controls, such as adding an icon for disabled controls, based on user preferences is anticipated as an advancement in the future.

### Graphical Objects

The term "graphical object" applies to stand-alone icons such as a print icon (with no text), and the important parts of a more complex diagram such as each line in a graph. For simple graphics such as single-color icons the entire image is a graphical object. Images made up of multiple lines, colors and shapes will be made of multiple graphical objects, some of which are required for understanding.

Not every graphical object needs to contrast with its surroundings - only those that are required for a user to understand what the graphic is conveying. [Gestalt principles](https://en.wikipedia.org/wiki/Gestalt_psychology#Pr.C3.A4gnanz) such as the "law of continuity" can be used to ignore minor overlaps with other graphical objects or colors.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Image</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><img src="img/contrast-phone.png" alt="An orange circle with a white telephone icon in the middle." width="40" /></td><td><p>The phone icon is a simple shape within the orange (#E3660E)circle. The meaning can be understood from that icon alone, the background behind the circle is irrelevant. The orange background and the white icon have a contrast ration greater than 3:1, which passes.</p><p>The graphical object is the white phone icon.</p></td></tr><tr class="even"><td><img src="img/contrast-magnet.png" alt="A red magnet with grey tips and a black outline." /></td><td><p>A magnet can be understood by the "U" shape with lighter colored tips. Therefore to understand this graphic you should be able to discern the overall shape (against the background) and the lighter colored tips (against the rest of the U shape and the background).</p><p>The graphical objects are the "U" shape (by outline or by the solid red color #D0021B), and each tip of the magnet.</p></td></tr><tr class="odd"><td><img src="img/contrast-currency-down.png" alt="A yellow arrow pointing down with a pound sign (currency) in the middle." /></td><td><p>The symbol to show a currency (the £) going down can be understood with recognition of the shape (down arrow) and the currency symbol (pound icon with the shape which is part of the graphic). To understand this graphic you need to discern the arrow shape against the white background, and the pound icon against the yellow background (#F5A623).</p><p>The graphical objects are the shape and the currency symbol.</p></td></tr><tr class="even"><td><a href="img/simple-line-graph.png"><img src="img/simple-line-graph.png" alt="A line chart of votes across a region, with 4 lines of different colors tracking over time." width="200" /></a></td><td><p>In order to understand the graph you need to discern the lines and shapes for each condition. To perceive the values of each line along the chart you need to discern the grey lines marking the graduated 100 value increments.</p><p>The graphical objects are the lines in the graph, including the background lines for the values, and the colored lines with shapes.</p><p>The lines should have 3:1 contrast against their background, but as there is little overlap with other lines they do not need to contrast with each other or the graduated lines. (See the testing principles below.)</p></td></tr><tr class="odd"><td><a href="img/graphics-contrast_pie-chart_pass.png"><img src="img/graphics-contrast_pie-chart_pass.png" alt="A pie chart with small gaps between each slice showing the white background, and a dark outline around light colored slices." width="200" /></a></td><td><p>To understand the pie chart you have to discern each slice of the pie chart from the others.</p><p>The graphical objects are the slices of the pie (chart).</p><p>Note: If the values of the pie chart slices were also presented in a conforming manner (see the Pie Charts example for details), the slices would not be required for understanding.</p></td></tr></tbody></table>

Taking the magnet image above as an example, the process for establishing the graphical object(s) is to:

-   Assess what part of each image is needed to understand what it represents.  
    The magnet's "U" shape can be conveyed by the outline or by the red background (either is acceptable). The white tips are also important (otherwise it would be a horseshoe), which needs to contrast with the red background.
-   Assume that the user could only see those aspects. Do they contrast with the adjacent colors?  
    The outline of the magnet contrasts with the surrounding text (black/white), and the red and white between the tips also has sufficient contrast.

Due to the strong contrast of the red and white, it would also be possible to only put the outline around the white tips of the magnet and it would still conform.

#### Required for Understanding

The term "required for understanding" is used in the Success Criterion as many graphics do not need to meet the contrast requirements. If a person needs to perceive a graphic, or part of a graphic (a graphical object) in order to understand the content it should have sufficient contrast. However, that is not a requirement when:

-   A graphic with text embedded or overlayed conveys the same information, such as labels *and* values on a chart.

    Note

    Text within a graphic must meet [1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG21/#contrast-minimum).

-   The graphic is for aesthetic purposes that does not require the user to see or understand it to understand the content or use the functionality.
-   The information is available in another form, such as in a table that follows the graph, which becomes visible when a "Long Description" button is pressed.
-   The graphic is part of a logo or brand name (which is considered "essential" to its presentation).

#### Gradients

Gradients can reduce the apparent contrast between areas, and make it more difficult to test. The general principles is to identify the graphical object(s) required for understanding, and take the central color of that area. If you remove the adjacent color which does not have sufficient contrast, can you still identify and understand the graphical object?

<figure><img src="img/contrast-gradient.png" alt="Figure 9 Removing the background which does not have sufficient contrast highlights that the graphical object (the &quot;i&quot;) is not then understandable." width="300" /><figcaption>Figure 9 Removing the background which does not have sufficient contrast highlights that the graphical object (the "i") is not then understandable.</figcaption></figure>

#### Dynamic Examples

Some graphics may have interactions that either vary the contrast, or display the information as text when you mouseover/tap/focus each graphical object. In order for someone to discern the graphics exist at all, there must be contrasting colors or text in order to find the graphics. Within that area, information available by a conforming method (e.g., focusable elements) can be used to make that information available dynamically as text, or dynamically increase the contrast.

<figure><img src="img/dynamic-pie-chart.png" alt="Figure 10 A dynamic chart where the current &#39;slice&#39; is hovered or focused, which activates the associated text display of the values and highlights the series" width="350" /><figcaption>Figure 10 A dynamic chart where the current 'slice' is hovered or focused, which activates the associated text display of the values and highlights the series</figcaption></figure>

#### Infographics

Infographics can mean any graphic conveying data, such as a chart or diagram. On the web it is often used to indicate a large graphic with lots of statements, pictures, charts or other ways of conveying data. In the context of graphics contrast, each item within such an infographic should be treated as a set of graphical objects, regardless of whether it is in one file or separate files.

Infographics often fail to meet several WCAG level AA criteria including:

-   [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
-   [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)
-   [1.4.3 (Text) Contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
-   [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html)

An infographic can use text which meets the other criteria to minimise the number of graphical objects required for understanding. For example, using text with sufficient contrast to provide the values in a chart. A long description would also be sufficient because then the infograph is not relied upon for understanding.

#### Essential Exception

Graphical objects do not have to meet the contrast requirements when "a particular presentation of graphics is essential to the information being conveyed". The Essential exception is intended to apply when there is no way of presenting the graphic with sufficient contrast without undermining the meaning. For example:

-   **Logotypes and flags**: The brand logo of an organization or product is the representation of that organization and therefore exempt. Flags may not be identifiable if the colors are changed to have sufficient contrast.
-   **Sensory**: There is no requirement to change pictures of real life scenes such as photos of people or scenery.
-   **Representing other things**: If you cannot represent the graphic in any other way, it is essential. Examples include:
    -   Screenshots to demonstrate how a website appeared.
    -   Diagrams of medical information that use the colors found in biology ([example medical schematic from Wikipedia](https://commons.wikimedia.org/wiki/File:Schematic_diagram_of_the_human_eye_it.svg)).
    -   color gradients that represent a measurement, such as heat maps ([example heatmap from Wikipedia](https://commons.wikimedia.org/wiki/File:Eyetracking_heat_map_Wikipedia.jpg)).

#### Testing Principles

A summary of the high-level process for finding and assessing non-text graphics on a web page:

-   Identify each user-interface component (link, button, form control) on the page and:
    -   Identify the visual (non-text) indicators of the component that are required to identify that a control exists, and indicate the current state. In the default (on page load) state, test the contrast ratio against the adjacent colors.
    -   Test those contrast indicators in each state.
-   Identify each graphic on the page that includes information required for understanding the content (i.e. excluding graphics which have visible text for the same information, or are decorative) and:
    -   Check the contrast of the graphical object against its adjacent colors;
    -   If there are multiple colors and/or a gradient, choose the least contrasting area to test;
    -   If it passes, move to the next graphical object;
    -   If the least-contrasting area is less than 3:1, assume that area is invisible, is the graphical object still understandable?
    -   If there is enough of the graphical object to understand, it passes, else fail.

The techniques below each have testing criteria, and the related criteria for [Focus visible (2.4.7)](focus-visible), [Use of color (1.4.1)](use-of-color), and [Contrast minimum](contrast-minimum) also have techniques.

Benefits
--------

People with low vision often have difficulty perceiving graphics that have insufficient contrast. This can be exacerbated if the person has a color vision deficiency that lowers the contrast even further. Providing a [relative luminance](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef) (lightness difference) of 3:1 or greater can make these items more distinguishable when the person does not see a full range of colors.

Examples
--------

-   Status icons on an application's dashboard (without associated text) have a 3:1 minimum contrast ratio.
-   A text input has a dark border around the white editable area.
-   A graph uses a light background and ensures that the colors for each line have a 3:1 contrast ratio against the background.

### Pie Charts

Pie charts make a good case study for the graphical objects part of this success criteria, the following pie charts are intended to convey the proportion of market share each browser has. Please Note: The actual figures are made up, these are not actual market shares.

![Figure 11 ¶ **Fail:** The pie chart has labels for each slice (so passes 1.4.1 Use of Color), but in order to understand the proportions of the slices you must discern the edges of the slices (the graphical objects conveying essential information), and the contrast between the slices is not 3:1 or greater.](img/graphics-contrast_pie-chart_fail.png)

![Figure 12 ¶ **Not applicable:** The pie chart has visible labels *and* values that convey equivalent information to the graphical objects (the pie slices).](img/graphics-contrast_pie-chart_na.png)

![Figure 13 ¶ **Pass:** The pie chart has visible labels, and sufficient contrast around and between the slices of the pie chart (the graphical objects). A darker border has been added around the yellow slice in order to achieve the contrast level.](img/graphics-contrast_pie-chart_pass.png)

### Infographics

![Figure 14 ¶ **Fail:** Discerning the circles is required to understand the size of network and discerning the icons in each circle is required to identify which network it shows.](img/infographic-fail.png)

The graphical objects are the circles (measured against the background) and the icons in each circle (measured against the circle's background).

![Figure 15 ¶ **Pass:** The circles have contrasting borders and the icons are a contrasting dark color against the light circle backgrounds.](img/infographic-pass.png)

There are many possible solutions to ensuring contrast, the example shows the use of borders. Other techniques are to use darker colors for the circle backgrounds, or to add text labels & values for each item.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Accessibility Requirements for People with Low Vision](http://w3c.github.io/low-vision-a11y-tf/requirements.html).
-   [Smith Kettlewell Eye Research Institute](https://lists.w3.org/Archives/Public/public-low-vision-a11y-tf/2017May/0007.html) - "If the text is better understood with the graphics, they should be equally visible as the text".
-   [Gordon Legge](https://lists.w3.org/Archives/Public/public-low-vision-a11y-tf/2017Jun/0054.html) - "Contrast requirements for form controls should be equivalent to contrast requirements for text".

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

##### Situation A: Color is used to identify user interface components or used to identify user interface component states

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G195" class="general">G195: Using an author-supplied, highly visible focus indicator</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G174" class="general">G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast</a>

#### Situation B: Color is required to understand graphical content

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G207" class="general">G207: Ensuring that a contrast ratio of 3:1 is provided for icons</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G209" class="general">G209: Provide sufficient contrast at the boundaries between adjoining colors</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F78" class="general">F78: Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator</a>

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

content

information and sensory experience to be communicated to the user by means of a [user agent](#dfn-user-agent), including code or markup that defines the content's [structure](#dfn-structure), [presentation](#dfn-presentation), and interactions

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

essential

if removed, would fundamentally change the information or functionality of the content, **and** information and functionality cannot be achieved in another way that would conform

presentation

rendering of the [content](#dfn-content) in a form to be perceived by users

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

state

dynamic property expressing characteristics of a user interface component that may change in response to user action or automated processes

States do not affect the nature of the component, but represent data associated with the component or user interaction possibilities. Examples include focus, hover, select, press, check, visited/unvisited, and expand/collapse.

structure

1.  The way the parts of a [Web page](#dfn-web-page) are organized in relation to each other; and
2.  The way a collection of [Web pages](#dfn-web-page) is organized

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

web page

a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a [user agent](#dfn-user-agent)

Note

Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

Note

For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

A Web resource including all embedded images and media.

A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

A customizable portal site, where users can choose content to display from a set of different content modules.

When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.
