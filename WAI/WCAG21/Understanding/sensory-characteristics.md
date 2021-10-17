-   [Contents](. "Table of Contents")
-   [GL: Adaptable](adaptable)
-   [Previous SC: Meaningful Sequence](meaningful-sequence)
-   [Next SC: Orientation](orientation)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)

Understanding Success Criterion 1.3.3: Sensory Characteristics
==============================================================

> Success Criterion [1.3.3 Sensory Characteristics](https://www.w3.org/TR/WCAG21/#sensory-characteristics) (Level A): Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound.
>
> For requirements related to color, refer to [Guideline 1.4](https://www.w3.org/TR/WCAG21/#distinguishable).

Intent
------

The intent of this Success Criterion is to ensure that all users can access instructions for using the content, even when they cannot perceive shape or size or use information about spatial location or orientation. Some content relies on knowledge of the shape or position of objects that are not available from the structure of the content (for example, "round button" or "button to the right"). Some users with disabilities are not able to perceive shape or position due to the nature of the assistive technologies they use. This Success Criterion requires that additional information be provided to clarify anything that is dependent on this kind of information.

Providing information using shape and/or location, however, is an effective method for many users including those with cognitive limitations. This provision should not discourage those types of cues as long as the information is also provided in other ways.

In some languages, it is commonly understood that "above" refers to the content previous to that point in the content and "below" refers to the content after that point. In such languages, if the content being referenced is in the appropriate place in the reading order and the references are unambiguous, statements such as "choose one of the links below" or "all of the above" would conform to this Success Criterion.

WCAG was designed to apply only to controls that were displayed on a web page. The intent was to avoid describing controls solely via references to visual or auditory cues. When applying this to instructions for operating physical hardware controls (e.g. a web kiosk with dedicated content), tactile cues on the hardware might be described (e.g. the arrow shaped key, the round key on the right side). This success criterion is not intended to prevent the use of tactile cues in instructions.

Benefits
--------

-   People who are blind and people who have low vision may not be able to understand information if it is conveyed by shape and/or location. Providing additional information other than shape and/or location will allow them to understand the information conveyed by shape and/or alone.

Examples
--------

-   **Example 1: A schedule of competitive events uses color and shape to distinguish the time of each event**

    A table presents a list of times across the top row and a list of events in the first vertical column. The cell corresponding to the time of a particular event has a specific background color and diamond shaped glyph so it can be identified by color and shape.

-   **Example 2: An on-line multi-page survey**

    An on-line multi-page survey uses a link implemented as a green arrow icon placed in the lower right hand corner of the content to move from one survey page to the next. The arrow is clearly labeled with "Next" and the instructions state, "To move to the next section of the survey, select the green arrow icon labeled 'Next' in the lower right corner below the last survey question." This example uses both positioning, color and labeling to help identify the icon.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G96" class="general">G96: Providing textual identification of items that otherwise rely only on sensory information to be understood</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F14" class="failure">F14: Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F26" class="failure">F26: Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information</a>
