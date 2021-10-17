-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA4](ARIA4)
-   [Next Technique: ARIA6](ARIA6)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using WAI-ARIA state and property attributes to expose the state of a user interface component
==============================================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to [Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) (Sufficient when used with [G10: Creating components using a technology that supports the accessibility notification of changes](../general/G10)).

Description
-----------

The objective of this technique is to use [WAI-ARIA state and property attributes](https://www.w3.org/TR/wai-aria/#states_and_properties) to expose the state, properties and values of a user interface component so that they can be read and set by assistive technology, and so that assistive technology is notified of changes to these values. The WAI-ARIA specification provides a normative description of each attribute, and the role of the user interface elements that they support. When rich internet applications define new user interface widgets, exposing the state and property attributes enables users to understand the widget and how to interact with it.

Examples
--------

### Example 1: A toggle button

A widget with role `button` acts as a toggle button when it implements the attribute `aria-pressed`. When `aria-pressed` is true, the button is in a "pressed" state. When `aria-pressed` is false, it is not pressed. If the attribute is not present, the button is a simple command button.

The following snippet from The Open Ajax Accessibility Examples, Example 38, shows WAI-ARIA mark-up for a toggle button that selects bold text:

      <li id="bold1"  
        class="toggleButton"
        role="button"
        tabindex="0"
        aria-pressed="false"
        aria-labelledby="bold_label"
        aria-controls="text1">
        <img src="http://www.oaa-accessibility.org/media/examples/images/button-bold.png" alt="bold text" align="middle">
    </li>

The `li` element has a role of "button" and an "aria-pressed" attribute. The following excerpt from the Javascript for this example updates the value of the "aria-pressed" attribute:

                       
                                 /**
       * togglePressed() toggles the aria-pressed atribute between true or false
       *
       * @param ( id object) button to be operated on
       *
       * @return N/A
       */
      function togglePressed(id) {
      
        // reverse the aria-pressed state
        if ($(id).attr('aria-pressed') == 'true') {
          $(id).attr('aria-pressed', 'false');
        }
        else {
          $(id).attr('aria-pressed', 'true');
        }
      }
                                

This button is available as part of the [working example of Example 38 - Toolbar using inline images for visual state](http://www.oaa-accessibility.org/examplep/toolbar1/), on the OpenAjax Alliance site.

### Example 2: A slider

A widget with role `slider` lets a user select a value from within a given range. The slider represents the current value and the range of possible values via the size of the slider and the position of the handle. These properties of the slider are represented by the attributes `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`.

The following snippet from The Open Ajax Accessibility Examples, Example 32, shows WAI-ARIA mark-up for a slider created in Javascript. Note that the javascript sets the attributes aria-valuemin, aria-valuemax, and aria-valuenow:

       var handle = '<img id="' + id + '" class="' + (this.vert == true ? 'v':'h') +'sliderHandle" ' +
        'src="http://www.oaa-accessibility.org/media/examples/images/slider_' + (this.vert == true ? 'v':'h') + '.png" ' + 'role="slider" ' +
        'aria-valuemin="' + this.min +
        '" aria-valuemax="' + this.max +
        '" aria-valuenow="' + (val == undefined ? this.min : val) +
               '" aria-labelledby="' + label +
               '" aria-controls="' + controls + '" tabindex="0"></img>';

The following excerpt from the Javascript for this example updates the value of the "aria-valuenow" attribute when the value of the slider handle is changed:

     slider.prototype.positionHandle = function($handle, val) {
        ...
       // Set the aria-valuenow position of the handle
      $handle.attr('aria-valuenow', val);
       ...
      }

This slider is available as part of the [working example of Example 32 - Slider](http://oaa-accessibility.org/example/32/), on the OpenAjax Alliance site.

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Accessible Rich Internet Applications (WAI-ARIA), Roles](https://www.w3.org/TR/wai-aria/#usage_intro)
-   [Accessible Rich Internet Applications (WAI-ARIA), The Roles Model](https://www.w3.org/TR/wai-aria/#roles)
-   [Accessible Rich Internet Applications (WAI-ARIA), Supported States and Properties](https://www.w3.org/TR/wai-aria/#states_and_properties)
-   [HTML to Platform Accessibility APIs Implementation Guide: HTML Element to Accessibility API Role Mapping Matrix](https://www.w3.org/TR/html-aapi/#html-element-to-accessibility-api-role-mapping-matrix)
-   [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/)
-   [Using WAI-ARIA in HTML](https://www.w3.org/TR/aria-in-html/)

Related Techniques
------------------

-   [ARIA4: Using a WAI-ARIA role to expose the role of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4)
-   [H91: Using HTML form controls and links](https://www.w3.org/WAI/WCAG21/Techniques/html/H91)

Tests
-----

### Procedure

[The WAI-ARIA specification, Section 5.3, Categorization of Roles](https://www.w3.org/TR/wai-aria/#roles_categorization) defines the required and inherited states and properties for each role.

For a user interface component using the WAI-ARIA role attribute:

1.  Check that the required states and properties for the role are present.
2.  Check that no WAI-ARIA states or properties that are neither required, supported, nor inherited are present.
3.  Check that the state and property values are updated to reflect the current state when the user interface component changes state.

### Expected Results

-   \#1, \#2, and \#3 are true.
