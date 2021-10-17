-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA1](ARIA1)
-   [Next Technique: ARIA4](ARIA4)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Tests](#tests)

Identifying a required field with the aria-required property
============================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to:

-   [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Advisory)
-   [Success Criterion 3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion) (Sufficient)

Description
-----------

The objective of this technique is to provide programmatic indication that a form field (which shown through presentation to be required) is mandatory for successful submission of a form.

The fact that the element is required is often visually presented (via a text or non-text symbol, or text indicating input is required or color / styling) but this is not programmatically determinable as part of the field's name.

The WAI-ARIA `aria-required` property indicates that user input is required before submission. The `aria-required` property can have values of `true` or `false`. For example, if a user must fill in an address field, then `aria-required` is set to `true`.

Note

Note: Use of aria-required="true" might be beneficial even when an asterisk or other text symbol is programmatically associated with the field as it may reinforce its `required` property for some assistive technology users.

The fact that the element is required is often visually presented (such as a sign or symbol after the control). Using the `aria-required` property in addition to the visual presentation makes it much easier for user agents to pass on this important information to the user in a user agent-specific manner. Refer to [Supporting ARIA in XHTML and HTML 4.01](https://www.w3.org/TR/wai-aria-primer/#ariahtml) for information on how to provide WAI-ARIA States and Properties with XHTML and HTML. WAI-ARIA States and Properties is compatible with other languages as well; refer to documentation in those languages.

Examples
--------

### Example 1

The `required` property is indicated by an asterisk placed next to the label element:

    <form action="#" method="post"  id="login1" onsubmit="return errorCheck1()">
      <p>Note: [*]denotes mandatory field</p>
      <p>
        <label for="usrname">Login name: </label>
        <input type="text" name="usrname" id="usrname" aria-required="true"/>[*]
      </p>
      <p>
        <label for="pwd">Password</label>
        <input type="password" name="pwd" id="pwd" size="12" aria-required="true" />[*]
      </p>
      <p>
        <input type="submit" value="Login" id="next_btn" name="next_btn"/>
      </p>

    </form>       

### Example 2

The `required` property is indicated by the word "required" placed next to the `label` element:

    <form action="#" method="post" id="step1" onsubmit="return errorCheck2()">
      <p>
        <label for="fname">First name: </label>
        <input type="text" id="fname" aria-required="true" />
        [required]
      </p>
      <p>
        <label for="mname">Middle name: </label>
        <input type="text" id="mname" />
      </p>
      <p>
        <label for="lname">Last name: </label>
        <input type="text" id="lname" aria-required="true" />
        [required]
      </p>
      <p>
        <label for="email">Email address: </label>
        <input type="text" id="email" aria-required="true" />
        [required]
      </p>
      <p>
        <label for="zip_post">Zip / Postal code: </label>
        <input type="text" id="zip_post" size="6" aria-required="true" />
        [required]
      </p>
      <p>
        <input type="submit" value="Next Step" id="step_btn" name="step_btn" />
      </p>
    </form> 

### Example 3

Required fields are indicated by a red border around the fields and a star icon rendered via CSS using content:before. This example also uses custom radio buttons with role=radio but the script to make the span actually work like radio buttons is not included in this example. The CSS properties are available below the form.

    <form action="#" method="post" id="alerts1">
      <label for="acctnum" data-required="true">Account Number</label>
      <input size="12" type="text" id="acctnum"
          aria-required="true" name="acctnum" />

     <p id="radio_label" data-required="true">Please send an alert when balance exceeds $3,000.</p>

     <ul  id="rg" role="radiogroup" aria-required="true" aria-labelledby="radio_label">
        <li id="rb1" role="radio">Yes</li>
        <li id="rb2" role="radio">No</li>
     </ul>
    </form>
     

Related CSS style definition for this example:

    [aria-required=true] {
      border: red thin solid;
    }
    [data-required=true]:after {
      content: url('/iconStar.gif');
    }
     

### Example 4: A required text input field in XHTML

The following example shows an XHTML document using the `aria-required` property to indicate that a form field must be submitted. The mandatory nature of the field is also indicated in the label as a fallback for user agents that do not support WAI-ARIA.

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1
        For Accessible Adaptable Applications//EN"
      "https://www.w3.org/WAI/ARIA/schemata/xhtml-aria-1.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml"
              xml:lang="en">
      <head>
        <title>Required Input</title>
      </head>
      <body>
        <h1>Required Input</h1>
        <p>The following form input field must be completed by the user
        before the form can be submitted.</p>
        <form action="http://example.com/submit">
          <p>
            <label for="test">Test (required)</label>
            <input name="ariaexample" id="example" aria-required="true" aria-label="Test"/>
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </body>
    </html>
            

### Example 5: Adding `aria-required` property via script

This example uses scripting to add the `aria-required` property to a form element. The required property is assigned using the setAttribute() API.

The array variable, requiredIds, is created with the ids of the elements which need to be marked as required. The setRequired() function is called from the onload event of the `window` object.

The setRequired() function loops through all of the ids provided, retrieves the element and assigns the `aria-required` property of true using the setAttribute() function.

When this page is accessed using Firefox 3.0 or later and a screen reader that supports WAI-ARIA, the screen reader will speak "required" when reading the label for the input fields.

    <head>
     <script type="text/javascript">
     //<![CDATA[

     // array or ids on the required fields on this page
     var requiredIds = new Array( "firstName", "lastName");

     // function that is run after the page has loaded to set the aria-required property on each of the
     //elements in requiredIds array of id values
     function setRequired(){
        if (requiredIds){
            var field;
            for (var i = 0; i< requiredIds.length; i++){
                field = document.getElementById(requiredIds[i]);
                field.setAttribute("aria-required", "true");
            }
        }
     }
     window.onload=setRequired;
    //]]>
     </script>
     </head>
     <body>
     <p>Please enter the following data.  Required fields have been programmatically identified
     as required and  marked with an asterisk (*) following the field label.</p>
     <form action="submit.php">
     <p>
     <label for="firstName">First Name *: </label><input type="text" name="firstName"
        id="firstName" value="" />
     <label for="lastName">Last Name *: </label><input type="text" name="lastName"
        id="lastName"  value="" />
     </p>
     </form>
     </body>

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)
-   [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/)
-   [Aria-required=true: WCAG 2 Compliance versus Best Practice](http://www.deque.com/blog/aria-requiredtrue-wcag-2-compliance-practice/)

Tests
-----

### Procedure

For each control which is shown via presentation to be required.

1.  Check whether the `aria-required` attribute is present:
2.  Check whether the value of the `aria-required` attribute is the correct required state of the user interface component.

### Expected Results

-   Checks \#1 and \#2 are true
