-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Next Technique: ARIA2](ARIA2)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using the aria-describedby property to provide a descriptive label for user interface controls
==============================================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to:

-   [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Advisory)
-   [Success Criterion 3.3.2: Labels or Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions) (Sufficient when used with [G131: Providing descriptive labels](../general/G131))

Description
-----------

The purpose of this technique is to demonstrate how to use the WAI-ARIA [aria-describedby](https://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby) property to provide programmatically determined, descriptive information about a user interface element. The `aria-describedby` property may be used to attach descriptive information to one or more elements through the use of an id reference list. The id reference list contains one or more unique element ids.

Refer to [Supporting ARIA in XHTML and HTML 4.01](https://www.w3.org/TR/wai-aria-primer/#ariahtml) for information on how to provide WAI-ARIA States and Properties with XHTML and HTML. WAI-ARIA States and Properties is compatible with other languages as well; refer to documentation in those languages.

Note

The `aria-describedby` property is not designed to reference descriptions on an external resource — since it is an ID, it must reference an element in the same DOM document.

Examples
--------

### Example 1: Using aria-describedby property to describe a Close button's action

A button that functions as a 'close' button on a dialog is described elsewhere in the document. The `aria-describedby` property is used to associate the description with the button.

    <button aria-label="Close" aria-describedby="descriptionClose"
        onclick="myDialog.close()">X</button>

    ...

    <div id="descriptionClose">Closing this window will discard any information entered and
    return you back to the main page</div>

Working example: [Example 1](../../working-examples/aria-describedby-close/)

### Example 2: Using aria-describedby to associate instructions with form fields

Sample form field using `aria-describedby` to associate instructions with form fields while there is a form label.

    <form>
    <label for="fname">First name</label>
    <input name="" type="text" id="fname" aria-describedby="int2">
    <p id="int2">A bit of instructions for this field linked with aria-describedby. </p>
    </form>

### Example 3: Using aria-describedby property to provide more detailed information about the button

    <p><span id="fontDesc">Select the font faces and sizes to be used on this page</span>
     <button id="fontB" onclick="doAction('Fonts');" aria-describedby="fontDesc">Fonts</button>
    </p>
    <p><span id="colorDesc">Select the colors to be used on this page</span>
     <button id="colorB" onclick="doAction('Colors');" aria-describedby="colorDesc">Colors</button>
    </p>
    <p><span id="customDesc">Customize the layout and styles used on this page</span>
     <button id="customB" onclick="doAction('Customize');" aria-describedby="customDesc">Customize</button>
    </p>

### Example 4: Using aria-describedby to associate tooltips with form fields

The following code snippet shows how to use `aria-describedby` and the onfocus="tooltipShow() function to display the tooltip when focus is placed on an element.

    <html lang="en-us">
    <head>
       <title>inline: Tooltip Example 1</title>
       <link rel="stylesheet" href="css/tooltip1_inline.css" type="text/css">
       <script type="text/javascript" src="js/tooltip1_inline.js"></script>
       <script type="text/javascript" src="../js/widgets_inline.js"></script>
       <script type="text/javascript" src="../js/globals.js"></script>
       <link rel="icon" href="http://www.cites.uiuc.edu/favicon.ico" type="image/x-icon">
       <link rel="shortcut icon" href="http://www.cites.uiuc.edu/favicon.ico" type="image/x-icon">
    </head>
       ...

    <body onload="initApp()">

    <div id="container">

    <h1>Tooltip Example 1</h1>
    <h2>Create Account</h2>
    <div class="text">
    <label for="first">First Name:</label>

    <input type="text" id="first" name="first" size="20"
          onmouseover="tooltipShow(event, this, 'tp1');"
          onfocus="tooltipShow(event, this, 'tp1');"
          aria-describedby="tp1"
          aria-required="false"/>

    <div id="tp1" role="tooltip" aria-hidden="true">Your first name is optional. </div>
    </div>

### Example 5: XHTML

This example is coded in XHTML with a MIME type of application/xhtml+xml. This MIME type is not supported in all user agents. The aria-describedby property is added directly into the XHTML markup, and no additional scripting is needed.

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+ARIA 1.0//EN"
    "https://www.w3.org/WAI/ARIA/schemata/xhtml-aria-1.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
    <head>
    <meta http-equiv="content-type" content="application/xhtml+xml; charset=utf-8" />
    <title>Demonstration of aria-describedby property</title>
    <style type="text/css">
    div.form p { clear:left; margin: 0.3em 0;}
    .left {
      float:left;
      width:400px;
    }
    .right {
      width:100px;
      text-align:right;
    }
    </style>
    </head>
    <body>
    <p>The buttons on this page use the Accessible Rich Internet Applications aria-describedby property
    to provide more detailed information about the button action</p>
    <div class="form">
    <p><span class="left" id="fontDesc" >Select the font faces and sizes to be used on this page</span>
    <span class="right"><button id="fontB" onclick="doAction('Fonts');" aria-describedby="fontDesc">
    Fonts </button></span></p>
    <p><span class="left" id="colorDesc" >Select the colors to be used on this page</span>
    <span class="right"><button id="colorB" onclick="doAction('Colors');" aria-describedby="colorDesc">
    Colors </button></span></p>
    <p><span class="left" id="customDesc" >Customize the layout and styles used on this page</span>
    <span class="right"><button id="customB" onclick="doAction('Customize');" aria-describedby="customDesc">
    Customize </button></span></p>
    </div>
    </body>
    </html>

### Example 6: HTML

This example uses scripting to add an aria-describedby property to buttons on a page. The example creates a buttonIds array variable to hold the ids of the elements that contain description text. The setDescribedBy() function is called from the onload event of the window object.

The setDescribedBy() function loops through all of the button elements and calls setAttribute() on each button element to set the aria-describedby property. Each button's aria-describedby property is set to the id of the element containing its descriptive text.

Using a user agent and/or assistive technology which supports WAI-ARIA, the description will be provided when the user interface controls receive focus.

    <html lang="en-us">
    <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Demonstration of aria-describedby property</title>
    <style type="text/css">
    div.form p { clear:left; margin: 0.3em 0;}
    .left {
      float:left;
      width:400px;
    }
    .right {
      width:100px;
      text-align:right;
    }
    </style>
    <script type="text/javascript">
    //<![CDATA[

    // array entries for each button on the page that associates the button id
    // with the id of the element containing the text which describes the button
    var buttonIds = new Array();
    buttonIds["fontB"]= "fontDesc";
    buttonIds["colorB"] = "colorDesc";
    buttonIds["customB"] = "customDesc";

    // function that is run after the page has loaded to set the aria-describedBy
    // property on each of the elements referenced by the array of id values
    function setDescribedBy(){
      if (buttonIds){
        var buttons = document.getElementsByTagName("button");
        if (buttons){
          var buttonId;
          for(var i=0; i<buttons.length; i++){
            buttonId = buttons[i].id;
            if (buttonId && buttonIds[buttonId]){
              buttons[i].setAttribute("aria-describedby", buttonIds[buttonId]);
            }
          }
        }
      }
    }

    // simulated action function - currently just displays an alert
    function doAction(theAction){
      alert("Perform the " + theAction + " action");
    }

    window.onload=setDescribedBy;

    //]]>
    </script>
    </head>
    <body>
    <p>The buttons on this page use the Accessible Rich Internet Applications
    aria-describedby property to provide more detailed information
    about the button action.
    </p>
    <div class="form">
    <p><span class="left" id="fontDesc" >Select the font faces and sizes to be used on this page</span>
      <span class="right"><button id="fontB" onclick="doAction('Fonts');"> Fonts </button></span>
    </p>
    <p><span class="left" id="colorDesc" >Select the colors to be used on this page</span>
      <span class="right"><button id="colorB" onclick="doAction('Colors');"> Colors </button></span>
    </p>
    <p><span class="left" id="customDesc" >Customize the layout and styles used on this page</span>
      <span class="right"><button id="customB" onclick="doAction('Customize');"> Customize </button></span>
    </p>
    </div>
    </body>

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)
-   [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/)
-   [HTML to Platform Accessibility APIs Implementation Guide: Accessible Name and Description Calculation](https://www.w3.org/TR/html-aapi/#accessible-name-and-description-calculation)
-   [Using the aria-describedby attribute (MDN)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute)
-   [Using WAI-ARIA in HTML](https://www.w3.org/TR/aria-in-html/)

Related Techniques
------------------

-   [ARIA2: Identifying a required field with the aria-required property](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA2)
-   [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA7)

Tests
-----

### Procedure

1.  Check that there is a user interface control having an `aria-describedby` attribute that references one or more elements via unique id.
2.  Check that the referenced element or elements provide additional information about the user interface control.

### Expected Results

-   Checks \#1 and \#2 are true.
