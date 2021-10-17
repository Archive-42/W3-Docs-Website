-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR1](SCR1)
-   [Next Technique: SCR14](SCR14)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Tests](#tests)

Using redundant keyboard and mouse event handlers
=================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

HTML and XHTML with scripting support.

This technique relates to [Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) (Sufficient when used with [G90: Providing keyboard-triggered event handlers](../general/G90)).

Description
-----------

The objective of this technique is to demonstrate using device independent events to change a decorative image in response to a mouse or focus event. Use the onmouseover and onmouseout events to change a decorative image when the mouse moves on top of or away from an element on the page. Also, use the onfocus and onblur events to change the image when the element receives and loses focus.

The example below has a decorative image in front of an anchor element. When the user mouses over the anchor tag, the decorative image in front of the anchor is changed. When the mouse moves off of the anchor, the image is changed back to its original version. The same image change effect occurs when the user gives keyboard focus to the anchor element. When focus is received the image changes, when focus is lost the image is changed back. This is accomplished by attaching onmouseover, onmouseout, onfocus and onblur event handlers to the anchor element. The event handler is a JavaScript function called updateImage(), which changes the src attribute of the image. The updateImage() is called in response to the onmouseover, onmouseout, onfocus, and onblur events.

Each image is given a unique id. This unique id is passed to updateImage() along with a boolean value indicating which image is to be used: updateImage(imgId, isOver);. The boolean value of true is passed when the mouse is over the anchor element or it has focus. A false value is passed when the mouse moves off of the anchor element or it loses focus. The updateImage() function uses the image id to load the image and then changes the src attribue based on the boolean value. Note that since the image is for decorative purposes, it has a null alt attribute.

Note

It is best to use images that are similar in size and to specify the height and width attributes on the image element. This will prevent any changes to the layout of the page when the image is updated. This example uses images which are identical in size.

Examples
--------

### Example 1

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  "https://www.w3.org/TR/html4/loose.dtd">
     <html lang="en">
     <head>
     <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
     <title>Changing Image Source in a Device Independent Manner</title>
     <script type="text/javascript">
     /* This function will change the image src of an image element.
      * param imgId - the id of the image object to change
      * param isOver - true when mouse is over or object has focus,
      *                false when mouse move out or focus is lost
     */
     function updateImage(imgId, isOver) {
       var theImage = document.getElementById(imgId);
       if (theImage != null) { //could use a try/catch block for user agents supporting at least JavaScript 1.4
                               // These browsers support try/catch - NetScape 6, IE 5, Mozilla, Firefox
          if (isOver) {
            theImage.setAttribute("src","yellowplus.gif");
          }
          else {
            theImage.setAttribute("src","greyplus.gif");
          }
       }
     }
     </script>
     </head>
     <body>
     <p>Mouse over or tab to the links below and see the image change.</p>
     <a href="https://www.w3.org/wai" onmouseover="updateImage('wai', true);" onfocus="updateImage('wai', true);"
       onmouseout="updateImage('wai',false);" onblur="updateImage('wai',false);">
     <img src="greyplus.gif" border="0" alt="" id="wai">
       W3C Web Accessibility Initiative</a> &
     <a href="https://www.w3.org/International/" onmouseover="updateImage('i18n', true);" 
       onfocus="updateImage('i18n',true);" onmouseout="updateImage('i18n',false);"
       onblur="updateImage('i18n',false);">
       <img src="greyplus.gif" border="0" alt="" id="i18n">
       W3C Internationalization</a>
     </body>
     </html>

Tests
-----

### Procedure

Load the Web page and test the events using a mouse and via the keyboard.

1.  Check that the "standard" image is displayed as expected when the Web page is loaded.
2.  Using the Mouse

    1.  Move the mouse over the element containing the event handlers (in this example it is an anchor element). Check that the image changes to the expected image.
    2.  Move the mouse off of the element. Check that the image changes back to the "standard" image.

3.  Using the Keyboard

    1.  Use the keyboard to set focus to the element containing the event handlers. Check that the image changes to the expected image.
    2.  Use the keyboard to remove focus from the element (generally by moving focus to another element). Check that the image changes to the "standard" image.

4.  Verify that the layout of other elements on the page is not affected when the image is changed.

### Expected Results

-   All of the steps for the above checks are true.
