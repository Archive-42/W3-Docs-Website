[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
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

> **[3.3.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#minimize-error-cues) Labels or Instructions:** <a href="#labeldef" class="termref">Labels</a> or instructions are provided when content requires user input. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to help users avoid making mistakes when their input is required. To help avoid mistakes it is good user interface design to provide simple instructions and cues for entering information. Some users with disabilities may be more likely to make mistakes than users without disabilities or recovery from mistakes may be more difficult, making mistake avoidance an important strategy for users with disabilities. People with disabilities rely on well documented forms and procedures to interact with a page. Blind users need to know exactly what information should be entered into form fields and what the available choices are. Simple instructions visually connected to form controls can assist users with cognitive disabilities or those accessing a page using a screen magnifier.

The intent of this Success Criterion is not to clutter the page with unnecessary information but to provide important cues and instructions that will benefit people with disabilities. Too much information or instruction can be just as much of a hindrance as too little. The goal is to make certain that enough information is provided for the user to accomplish the task without undue confusion or navigation.

### Specific Benefits of Success Criterion 3.3.2:

-   Label elements associated with input elements insure that information about the input field is spoken by screen readers when the field receives focus.

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

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G131: Providing descriptive labels](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G131) **AND** one of the following:

    -   [G89: Providing expected data format and example](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G89)

    -   [G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G184)

    -   [G162: Positioning labels to maximize predictability of relationships](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G162)

    -   [G83: Providing text descriptions to identify required fields that were not completed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G83)

2.  [H44: Using label elements to associate text labels with form controls](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H44) (HTML)

3.  [H71: Providing a description for groups of form controls using fieldset and legend elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H71) (HTML)

4.  [H65: Using the title attribute to identify form controls when the label element cannot be used](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H65) (HTML)

5.  [G167: Using an adjacent button to label the purpose of a field](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G167)

Note: The techniques at the end of the above list should be considered "last resort" and only used when the other techniques cannot be applied to the page. The earlier techniques are preferred because they increase accessibility to a wider user group.

### Additional Techniques (Advisory) for 3.3.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   [G13: Describing what will happen before a change to a form control that causes a change of context to occur is made](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G13)

-   [ARIA1: Using Accessible Rich Internet Application describedby property to provide a descriptive, programmatically determined label](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA1) (ARIA)

-   [ARIA4: Using Accessible Rich Internet Applications to programmatically identify form fields as required](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/ARIA4) (ARIA)

-   Providing linear form design and grouping similar items (future link)

### Common Failures for SC 3.3.2

The following are common mistakes that are considered failures of Success Criterion 3.3.2 by the WCAG Working Group.

-   [F82: Failure of Success Criterion 3.3.2 by visually formatting a set of phone number fields but not including a text label](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F82)

Key Terms
---------

 <span id="labeldef"></span> label  
<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#textdef" class="termref">text</a> or other component with a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#text-altdef" class="termref">text alternative</a> that is presented to a user to identify a component within Web <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#contentdef" class="termref">content</a>

Note 1: A label is presented to all users whereas the <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#namedef" class="termref">name</a> may be hidden and only exposed by assistive technology. In many (but not all) cases the name and the label are the same.

Note 2: The term label is not limited to the label element in HTML.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.3.1 \[Error Identification\]](minimize-error-identified.html "Understanding SC  3.3.1 [Error Identification]")
-   [**Next:** SC 3.3.3 \[Error Suggestion\]](minimize-error-suggestions.html "Understanding SC  3.3.3 [Error Suggestion]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
