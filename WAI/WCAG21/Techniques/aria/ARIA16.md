-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA15](ARIA15)
-   [Next Technique: ARIA17](ARIA17)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using aria-labelledby to provide a name for user interface controls
===================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to:

-   [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Sufficient)
-   [Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) (Sufficient)
-   [Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) (Sufficient when used with an unwritten technique)
-   [Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) (Sufficient when used with [G10: Creating components using a technology that supports the accessibility notification of changes](../general/G10))

Description
-----------

The purpose of this technique is to provide names for user interface controls that can be read by assistive technology. WAI-ARIA provides a way to associate text with a section, drawing, form element, picture, and so on, using the `aria-labelledby` property. This techniques uses the `aria-labelledby` attribute to associate a user interface control, such as a form field, with text on the page that labels it.

Like `aria-describedby`, `aria-labelledby` can accept multiple ids to point to other elements of the page using a space separated list. This capability makes `aria-labelledby` especially useful in situations where sighted users use information from the surrounding context to identify a control. [ARIA9: Using aria-labelledby to concatenate a label from several text nodes](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9) contains more examples of situations where names are created from several other text elements on the page.

While the function of aria-labelledby appears similar to the native HTML label element, there are some differences:

-   `aria-labelledby` can reference more than one text element; `label` can only reference one.
-   `aria-labelledby` can be used for a variety of elements while the `label` element can only be used on form elements.
-   Clicking on a `label` focuses the associated form field. This does not occur with `aria-labelledby`. If this behaviour is required then use `label` or implement this functionality using scripting.

Note that as of December 2013, `label` has better support than `aria-labelledby`, especially in older browsers and assistive technologies.

Examples
--------

### Example 1: Labelling a simple text field

The following is an example of `aria-labelledby` used on a simple text field to provide a label in a situation where there is no text available for a dedicated label but there is other text on the page that can be used to accurately label the control.

    <input name="searchtxt" type="text" aria-labelledby="searchbtn">
    <input name="searchbtn" id="searchbtn" type="submit" value="Search">

### Example 2: Labelling a slider

Below is an example of `aria-labelledby` used to provide a label for a slider control. In this case the label text is selected from within a longer adjacent text string. Please note that this example is simplified to show only the labeling relationship; authors implementing custom controls also need to ensure that controls meet other success criteria.

    <p>Please select the <span id="mysldr-lbl">number of days for your trip</span></p>
    <div id="mysldr" role="slider" aria-labelledby="mysldr-lbl"></div>

### Example 3: A label from multiple sources

The following example of `aria-labelledby` with multiple references uses the `label` element. For additional detail on concatenating multiple sources of information into a label with `aria-labelledby`, please view the technique [ARIA9: Using aria-labelledby to concatenate a label from several text nodes](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9).

    <label id="l1" for="f3">Notify me</label>
    <select name="amt" id="f3" aria-labelledby="l1 f3 l2">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <span id="l2" tabindex="-1">days in advance</span>

Note: The use of the `label` element is included for a number of reasons. If the user clicks on the text of the `label` element, the corresponding form field will receive focus, which makes the clicking target larger for people with dexterity problems. Also the `label` element will always be exposed via the accessibility API. A `span` could have been used (but if so, it should receive a tabindex="-1" so that it will be exposed via the accessibility API in all versions of Internet Explorer). However, a `span` would lose the advantage of the larger clickable region.

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/)
-   [HTML to Platform Accessibility APIs Implementation Guide: Accessible Name and Description Calculation](https://www.w3.org/TR/html-aapi/#accessible-name-and-description-calculation)

Related Techniques
------------------

-   [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10)
-   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6)
-   [ARIA9: Using aria-labelledby to concatenate a label from several text nodes](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9)
-   [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA7)
-   [ARIA13: Using aria-labelledby to name regions and landmarks](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA13)
-   [G92: Providing long description for non-text content that serves the same purpose and presents the same information](https://www.w3.org/WAI/WCAG21/Techniques/general/G92)
-   [H45: Using longdesc](https://www.w3.org/WAI/WCAG21/Techniques/html/H45)

Tests
-----

### Procedure

For each user interface control element where an `aria-labelledby` attribute is present:

1.  Check that the value of the `aria-labelledby` attribute is the `id` of an element or a space separated list of `id`s on the web page.
2.  Check that the text of the referenced element or elements accurately labels the user interface control.

### Expected Results

-   \#1 and \#2 are true.
