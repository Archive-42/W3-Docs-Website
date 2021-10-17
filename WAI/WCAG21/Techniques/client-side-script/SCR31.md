-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR30](SCR30)
-   [Next Technique: SCR32](SCR32)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using script to change the background color or border of the element with focus
===============================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

HTML and XHTML, CSS, Script

This technique relates to [Success Criterion 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible) (Sufficient).

Description
-----------

This purpose of this technique is to allow the author to use JavaScript to apply CSS, in order to make the focus indicator more visible than it would ordinarily be. When an element receives focus, the background color or border is changed to make it visually distinct. When the element loses focus, it returns to its normal styling. This technique can be used on any HTML user agent that supports Script and CSS, regardless of whether it supports the :focus pseudoclass.

Examples
--------

### Example 1

In this example, when the link receives focus, its background turns yellow. When it loses focus, the yellow is removed. Note that if the link had a background color to begin with, you would use that color rather than "" in the script.

    ...
    <script>
     function toggleFocus(el)
     {
      el.style.backgroundColor =  el.style.backgroundColor=="yellow" ? "inherit" : "yellow";
     }
    </script>

    ...

    <a href="example.html" onfocus="toggleFocus(this)" onblur="toggleFocus(this)">focus me</a>
    ...

Related Techniques
------------------

-   [C15: Using CSS to change the presentation of a user interface component when it receives focus](https://www.w3.org/WAI/WCAG21/Techniques/css/C15)

Tests
-----

### Procedure

1.  Tab to each element in the page
2.  Check that the focus indicator is visible

### Expected Results

-   Step \#2 is true
