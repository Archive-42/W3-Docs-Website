-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR20](SCR20)
-   [Next Technique: SCR22](SCR22)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Tests](#tests)

Using functions of the Document Object Model (DOM) to add content to a page
===========================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

ECMAScript used inside HTML and XHTML

This technique relates to [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Sufficient when used with an unwritten technique).

Description
-----------

The objective of this technique is to demonstrate how to use functions of the Document Object Model (DOM) to add content to a page instead of using document.write or object.innerHTML. The document.write() method does not work with XHTML when served with the correct MIME type (application/xhtml+xml), and the innerHTML property is not part of the DOM specification and thus should be avoided. If the DOM functions are used to add the content, user agents can access the DOM to retrieve the content. The createElement() function can be used to create elements within the DOM. The createTextNode() is used to create text associated with elements. The appendChild(), removeChild(), insertBefore() and replaceChild() functions are used to add and remove elements and nodes. Other DOM functions are used to assign attributes to the created elements.

Note

When adding focusable elements into the document, do not add tabindex attributes to explicitly set the tab order as this can cause problems when adding focusable elements into the middle of a document. Let the default tab order be assigned to the new element by not explicitly setting a tabindex attribute.

Examples
--------

### Example 1

This example demonstrates use of client-side scripting to validate a form. If errors are found appropriate error messages are displayed. The example uses the DOM functions to add error notification consisting of a title, a short paragraph explaining that an error has occurred, and a list of errors in an ordered list. The content of the title is written as a link so that it can be used to draw the user's attention to the error using the focus method. Each item in the list is also written as a link that places the focus onto the form field in error when the link is followed.

For simplicity, the example just validates two text fields, but can easily be extended to become a generic form handler. Client-side validation should not be the sole means of validation , and should be backed up with server-side validation. The benefit of client-side validation is that you can provide immediate feedback to the user to save them waiting for the errors to come back from the server, and it helps reduce unnecessary traffic to the server.

Here is the script that adds the event handlers to the form. If scripting is enabled, the validateNumbers() function will be called to perform client-side validation before the form is submitted to the server. If scripting is not enabled, the form will be immediately submitted to the server, so validation should also be implemented on the server.

    window.onload = initialise;
    function initialise()
    {
      // Ensure we're working with a relatively standards compliant user agent
      if (!document.getElementById || !document.createElement || !document.createTextNode)
        return;

      // Add an event handler for the number form
      var objForm = document.getElementById('numberform');
      objForm.onsubmit= function(){return validateNumbers(this);};
    }

Here is the validation function. Note the use of the createElement(), createTextNode(), and appendChild() DOM functions to create the error message elements.

    function validateNumbers(objForm)
    {
      // Test whether fields are valid
      var bFirst = isNumber(document.getElementById('num1').value);
      var bSecond = isNumber(document.getElementById('num2').value);
      // If not valid, display errors
      if (!bFirst || !bSecond)
      {
        var objExisting = document.getElementById('validationerrors');
        var objNew = document.createElement('div');
        var objTitle = document.createElement('h2');
        var objParagraph = document.createElement('p');
        var objList = document.createElement('ol');
        var objAnchor = document.createElement('a');
        var strID = 'firsterror';
        var strError;
        // The heading element will contain a link so that screen readers
        // can use it to place focus - the destination for the link is 
        // the first error contained in a list
        objAnchor.appendChild(document.createTextNode('Errors in Submission'));
        objAnchor.setAttribute('href', '#firsterror');
        objTitle.appendChild(objAnchor);
        objParagraph.appendChild(document.createTextNode('Please review the following'));
        objNew.setAttribute('id', 'validationerrors');
        objNew.appendChild(objTitle);
        objNew.appendChild(objParagraph);
        // Add each error found to the list of errors
        if (!bFirst)
        {
          strError = 'Please provide a numeric value for the first number';
          objList.appendChild(addError(strError, '#num1', objForm, strID));
          strID = '';
        }
        if (!bSecond)
        {
          strError = 'Please provide a numeric value for the second number';
          objList.appendChild(addError(strError, '#num2', objForm, strID));
          strID = '';
        }
        // Add the list to the error information
        objNew.appendChild(objList);
        // If there were existing errors, replace them with the new lot,
        // otherwise add the new errors to the start of the form
        if (objExisting)
          objExisting.parentNode.replaceChild(objNew, objExisting);
        else
        {
          var objPosition = objForm.firstChild;
          objForm.insertBefore(objNew, objPosition);
        }
        // Place focus on the anchor in the heading to alert
        // screen readers that the submission is in error
        objAnchor.focus();
        // Do not submit the form
        objForm.submitAllowed = false;
        return false;
      }
      return true;
    }

    // Function to validate a number
    function isNumber(strValue)
    {
      return (!isNaN(strValue) && strValue.replace(/^\s+|\s+$/, '') !== '');
    } 

Below are the helper functions to create the error message and to set focus to the associated form field.

    // Function to create a list item containing a link describing the error
    // that points to the appropriate form field
    function addError(strError, strFragment, objForm, strID)
    {
      var objAnchor = document.createElement('a');
      var objListItem = document.createElement('li');
      objAnchor.appendChild(document.createTextNode(strError));
      objAnchor.setAttribute('href', strFragment);
      objAnchor.onclick = function(event){return focusFormField(this, event, objForm);};
      objAnchor.onkeypress = function(event){return focusFormField(this, event, objForm);};
      // If strID has a value, this is the first error in the list
      if (strID.length > 0)
        objAnchor.setAttribute('id', strID);
      objListItem.appendChild(objAnchor);
      return objListItem;
    }

    // Function to place focus to the form field in error
    function focusFormField(objAnchor, objEvent, objForm)
    {
      // Allow keyboard navigation over links
      if (objEvent && objEvent.type == 'keypress')
        if (objEvent.keyCode != 13 && objEvent.keyCode != 32)
          return true;
      // set focus to the form control
      var strFormField = objAnchor.href.match(/[^#]\w*$/);
      objForm[strFormField].focus();
      return false;
    }

Here is the HTML for the example form.

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "https://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>ECMAScript Form Validation</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <script type="text/javascript" src="validate.js"></script>
    </head>
    <body>
    <h1>Form Validation</h1>
    <form id="numberform" method="post" action="form.php">
    <fieldset>
    <legend>Numeric Fields</legend>
    <p>
    <label for="num1">Enter first number</label>
    <input type="text" size="20" name="num1" id="num1">
    </p>
    <p>
    <label for="num2">Enter second number</label>
    <input type="text" size="20" name="num2" id="num2">
    </p>
    </fieldset>
    <p>
    <input type="submit" name="submit" value="Submit Form">
    </p>
    </form>
    </body>
    </html>

This example is limited to client-side scripting, and should be backed up with server-side validation. The example is limited to the creation of error messages when client-side scripting is available.

Here is a link to a working example: [Form Validation](../../working-examples/script-form-validation/)

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   HTML 4.01 [The Document Object Model, More methods](http://www.webreference.com/js/column44/index.html) from Webreference.com
-   [Accessible Forms using WCAG 2.0](http://usability.com.au/2008/09/accessible-forms-using-wcag-2-0/)

Tests
-----

### Procedure

For pages that dynamically create new content:

1.  Examine the source code and check that the new content is not created using document.write(), innerHTML, outerHTML, innerText or outerText.

### Expected Results

-   Check \#1 is true.
