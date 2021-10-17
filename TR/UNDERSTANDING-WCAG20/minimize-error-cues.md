[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.3.1 \[Error Identification\]](minimize-error-identified.html "Understanding SC  3.3.1 [Error Identification]")
-   [**Next:** SC 3.3.3 \[Error Suggestion\]](minimize-error-suggestions.html "Understanding SC  3.3.3 [Error Suggestion]")

On this page:

-   [Intent](#minimize-error-cues-intent-head)
-   [Examples](#minimize-error-cues-examples-head)
-   [Related Resources](#minimize-error-cues-resources-head)
-   [Techniques & Failures](#minimize-error-cues-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="minimize-error-cues"></span> **Labels or Instructions**<span class="screenreader">:</span> Understanding SC 3.3.2
===========================================================================================================================

> **[3.3.2](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error-cues) Labels or Instructions:** <a href="#labeldef" class="termref">Labels</a> or instructions are provided when content requires user input. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this success criterion is to have content authors place instructions or labels that identify the controls in a form so that users know what input data is expected. Instructions or labels may also specify data formats for fields especially if they are out of the customary formats or if there are specific rules for correct input. Content authors may also choose to make such instructions available to users only when the individual control has focus especially when instructions are long and verbose.

The intent of this Success Criterion is not to clutter the page with unnecessary information but to provide important cues and instructions that will benefit people with disabilities. Too much information or instruction can be just as much of a hindrance as too little. The goal is to make certain that enough information is provided for the user to accomplish the task without undue confusion or navigation.

*Note:* When labels are provided for input objects, the input object's relationship to the label (or to redundant text serving as the label) must be programmatically determinable or available in text per *[Understanding Success Criterion 1.3.1 Info and Relationships](content-structure-separation-programmatic.html)*.

### Specific Benefits of Success Criterion 3.3.2:

-   When label elements are associated with input elements the label is spoken by screen readers when the field receives focus and users with impaired motor control are helped by a larger clickable area for the control, since clicking on the label or the control will activate the control.

-   Field labels located in close proximity to the associated field assist users of screen magnifiers because the field and label are more likely to visible within the magnified area of the page.

-   Providing examples of expected data formats help users with cognitive, language and learning disabilities to enter information correctly.

-   Clearly identifying required fields prevents a keyboard only user from submitting an incomplete form and having to navigate the redisplayed form to find the uncompleted field and provide the missing information.

Examples of Success Criterion 3.3.2
-----------------------------------

-   A field which requires the user to enter the two character abbreviation for a US state has a link next to it which will popup an alphabetized list of state names and the correct abbreviation.

-   A field for entering a date contains initial text which indicates the correct format for the date.

-   A field for entering a given name is clearly labeled with "Given Name" and the field for family name is labeled "Family Name" to avoid confusion over which name is requested.

-   A U.S. phone number separates the area code, exchange, and number into three fields. Parentheses surround the area code field, and a dash separates the exchange and number fields. While the punctuation provides visual clues to those familiar with the U.S. telephone number format, the punctuation is not sufficient to label the fields. The single "Phone number" label also cannot label all three fields. To address this, the three fields are grouped in a `fieldset` with the `legend` "Phone number". Visual labels for the fields (beyond the punctuation) cannot be provided in the design, so invisible labels are provided with the "title" attribute to each of the three fields. The value of this attribute for the three fields are, respectively, "Area Code", "Exchange", and "Number".

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 3.3.2 - Labels or Instructions
----------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G131" class="tech-ref">G131: Providing descriptive labels</a> **AND** one of the following:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA1" class="tech-ref">ARIA1: Using the aria-describedby property to provide a descriptive label for user interface controls</a> (ARIA)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA9" class="tech-ref">ARIA9: Using aria-labelledby to concatenate a label from several text nodes</a> (ARIA)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA17" class="tech-ref">ARIA17: Using grouping roles to identify related form controls</a> (ARIA)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G89" class="tech-ref">G89: Providing expected data format and example</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G184" class="tech-ref">G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G162" class="tech-ref">G162: Positioning labels to maximize predictability of relationships</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G83" class="tech-ref">G83: Providing text descriptions to identify required fields that were not completed</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H90" class="tech-ref">H90: Indicating required form controls using label or legend</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH10" class="tech-ref">FLASH10: Indicating required form controls in Flash</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF5" class="tech-ref">PDF5: Indicating required form controls in PDF forms</a> (PDF)

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H44" class="tech-ref">H44: Using label elements to associate text labels with form controls</a> (HTML)

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH32" class="tech-ref">FLASH32: Using auto labeling to associate text labels with form controls</a> (Flash)

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH29" class="tech-ref">FLASH29: Setting the label property for form components</a> (Flash)

5.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH25" class="tech-ref">FLASH25: Labeling a form control by setting its accessible name</a> (Flash)

6.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF10" class="tech-ref">PDF10: Providing labels for interactive form controls in PDF documents</a> (PDF)

7.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL26" class="tech-ref">SL26: Using LabeledBy to Associate Labels and Targets in Silverlight</a> (Silverlight)

8.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H71" class="tech-ref">H71: Providing a description for groups of form controls using fieldset and legend elements</a> (HTML)

9.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH8" class="tech-ref">FLASH8: Adding a group name to the accessible name of a form control</a> (Flash)

10. <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H65" class="tech-ref">H65: Using the title attribute to identify form controls when the label element cannot be used</a> (HTML)

11. <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL8" class="tech-ref">SL8: Displaying HelpText in Silverlight User Interfaces</a> (Silverlight)

12. <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G167" class="tech-ref">G167: Using an adjacent button to label the purpose of a field</a>

*Note:* The techniques at the end of the above list should be considered "last resort" and only used when the other techniques cannot be applied to the page. The earlier techniques are preferred because they increase accessibility to a wider user group.

### Additional Techniques (Advisory) for 3.3.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G13" class="tech-ref">G13: Describing what will happen before a change to a form control that causes a change of context to occur is made</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL19" class="tech-ref">SL19: Providing User Instructions With AutomationProperties.HelpText in Silverlight</a> (Silverlight)

-   Providing linear form design and grouping similar items (future link)

### Common Failures for SC 3.3.2

The following are common mistakes that are considered failures of Success Criterion 3.3.2 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F82" class="tech-ref">F82: Failure of Success Criterion 3.3.2 by visually formatting a set of phone number fields but not including a text label</a>

Key Terms
---------

 <span id="labeldef"></span> label  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#textdef" class="termref">text</a> or other component with a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#text-altdef" class="termref">text alternative</a> that is presented to a user to identify a component within Web <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contentdef" class="termref">content</a>

*Note 1:* A label is presented to all users whereas the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#namedef" class="termref">name</a> may be hidden and only exposed by assistive technology. In many (but not all) cases the name and the label are the same.

*Note 2:* The term label is not limited to the label element in HTML.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.3.1 \[Error Identification\]](minimize-error-identified.html "Understanding SC  3.3.1 [Error Identification]")
-   [**Next:** SC 3.3.3 \[Error Suggestion\]](minimize-error-suggestions.html "Understanding SC  3.3.3 [Error Suggestion]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
