-   [Contents](. "Table of Contents")
-   [GL: Navigable](navigable)
-   [Previous SC: Headings and Labels](headings-and-labels)
-   [Next SC: Location](location)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)

Understanding Success Criterion 2.4.7: Focus Visible
====================================================

> Success Criterion [2.4.7 Focus Visible](https://www.w3.org/TR/WCAG21/#focus-visible) (Level AA): Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

Intent
------

The purpose of this success criterion is to help a person know which element has the keyboard focus.

It must be possible for a person to know which element among multiple elements has the keyboard focus. If there is only one keyboard actionable control on the screen, the success criterion would be met because the visual design presents only one keyboard actionable item.

“Mode of operation” accounts for user-agents which may not always show a focus indicator, or only show the focus indicator when the keyboard is used. User agents may optimise when the focus indicator is shown, such as only showing it when a keyboard is used. Authors are responsible for providing at least one mode of operation where the focus is visible. In most cases there is only one mode of operation so this success criterion applies. The focus indicator must not be time limited, when the keyboard focus is shown it must remain.

Note that a keyboard focus indicator can take different forms. One common way is a caret within the text field to indicate that the text field has the keyboard focus. Another is a visual change to a button to indicate that that button has the keyboard focus.

Benefits
--------

-   This Success Criterion helps anyone who relies on the keyboard to operate the page, by letting them visually determine the component on which keyboard operations will interact at any point in time.
-   People with attention limitations, short term memory limitations, or limitations in executive processes benefit by being able to discover where the focus is located.

Examples
--------

-   When text fields receive focus, a vertical bar is displayed in the field, indicating that the user can insert text, OR all of the text is highlighted, indicating that the user can type over the text.
-   When a user interface control receives focus, a visible border is displayed around it.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Styling form controls with CSS, revisited](http://www.456bereastreet.com/archive/200701/styling_form_controls_with_css_revisited/)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G149" class="general">G149: Using user interface components that are highlighted by the user agent when they receive focus</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C15" class="css">C15: Using CSS to change the presentation of a user interface component when it receives focus</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G165" class="general">G165: Using the default focus indicator for the platform so that high visibility default focus indicators will carry over</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G195" class="general">G195: Using an author-supplied, highly visible focus indicator</a>
5.  [C40: Creating a two-color focus indicator to ensure sufficient contrast with all components](https://www.w3.org/WAI/WCAG21/Techniques/css/C40)
6.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR31" class="script">SCR31: Using script to change the background color or border of the element with focus</a>
7.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL2" class="silverlight">SL2: Changing The Visual Focus Indicator in Silverlight</a>
8.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL7" class="silverlight">SL7: Designing a Focused Visual State for Custom Silverlight Controls</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F55" class="failure">F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F78" class="failure">F78: Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator</a>
