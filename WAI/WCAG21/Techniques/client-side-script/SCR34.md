-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR33](SCR33)
-   [Next Technique: SCR35](SCR35)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Calculating size and position in a way that scales with text size
=================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Client-side scripting.

This technique relates to:

-   [Success Criterion 1.4.4: Resize text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text) (Sufficient when used with an unwritten technique)
-   [Success Criterion 1.4.8: Visual Presentation](https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation) (Sufficient when used with [G146: Using liquid layout](../general/G146))
-   [Success Criterion 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow) (Sufficient)

Description
-----------

The objective of this technique is to calculate the size and position of elements in a way that will scale appropriately as the text size is scaled.

There are four properties in JavaScript that help determine the size and position of elements:

-   offsetHeight (the height of the element in pixels)
-   offsetWidth (the width of the element in pixels)
-   offsetLeft (the distance of the element from the left of its parent (offsetParent) in pixels)
-   offsetTop (the distance of the element from the top of its parent (offsetParent) in pixels)

Calculating the height and width using offsetHeight and offsetWidth is straightforward, but when calculating an object's left and top position as absolute values, we need to consider the parent element. The calculatePosition function below iterates through all of an element's parent nodes to give a final value. The function takes two parameters; objElement (the name of the element in question), and the offset property (offsetLeft or offsetTop):

Examples
--------

### Example 1

The Javascript function:

    function calculatePosition(objElement, strOffset)
    {
        var iOffset = 0;

        if (objElement.offsetParent)
        {
            do 
            {
                iOffset += objElement[strOffset];
                objElement = objElement.offsetParent;
            } while (objElement);
        }

        return iOffset;
    }

The following example illustrates using the function above by aligning an object beneath a reference object, the same distance from the left:

    // Get a reference object
    var objReference = document.getElementById('refobject');
    // Get the object to be aligned
    var objAlign = document.getElementById('lineup');

    objAlign.style.position = 'absolute';
    objAlign.style.left = calculatePosition(objReference, 'offsetLeft') + 'px';
    objAlign.style.top = calculatePosition(objReference, 'offsetTop') + objReference.offsetHeight + 'px'; 

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [MSDN: Fix the Box Instead of Thinking Outside It](https://msdn.microsoft.com/en-us/library/bb250395(VS.85).aspx#cssenhancements_topic3)

Related Techniques
------------------

-   [C12: Using percent for font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C12)
-   [C14: Using em units for font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C14)
-   [C17: Scaling form elements which contain text](https://www.w3.org/WAI/WCAG21/Techniques/css/C17)
-   [C20: Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized](https://www.w3.org/WAI/WCAG21/Techniques/css/C20)
-   [C24: Using percentage values in CSS for container sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C24)
-   [G206: Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text](https://www.w3.org/WAI/WCAG21/Techniques/general/G206)

Tests
-----

### Procedure

1.  Open a page that is designed to adjust container sizes as text size changes.
2.  Increase the text size up to 200% using the browser's text size adjustment (not the zoom feature).
3.  Examine the text to ensure the text container size is adjusted to accommodate the size of the text.
4.  Ensure that no text is "clipped" or has disappeared as a result of the increase in text size.

### Expected Results

-   Checks \#3 and \#4 are true.
