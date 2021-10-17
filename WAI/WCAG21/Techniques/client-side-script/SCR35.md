-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR34](SCR34)
-   [Next Technique: SCR36](SCR36)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Making actions keyboard accessible by using the onclick event of anchors and buttons
====================================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Script used with HTML or XHTML.

This technique relates to [Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) (Sufficient when used with [G90: Providing keyboard-triggered event handlers](../general/G90)).

Description
-----------

The objective of this technique is to demonstrate how to invoke a scripting function in a way that is keyboard accessible by attaching it to a keyboard-accessible control. In order to ensure that scripted actions can be invoked from the keyboard, they are associated with "natively actionable" HTML elements (links and buttons). The onclick event of these elements is device independent. While "onclick" sounds like it is tied to the mouse, the onclick event is actually mapped to the default action of a link or button. The default action occurs when the user clicks the element with a mouse, but it also occurs when the user focuses the element and hits enter or space, and when the element is triggered via the accessibility API.

This technique relies on client-side scripting. However, it is beneficial to provide a backup implementation or explanation for environments in which scripting is not available. When using anchor elements to invoke a JavaScript action, a backup implementation or explanation is provided via the `href` attribute. When using buttons, it is provided via a form post.

Examples
--------

### Example 1

Link that runs a script and has no fallback for non-scripted browsers. This approach should only be used when script is relied upon as an Accessibility Supported Technology.

Even though we do not want to navigate from this link, we must use the href attribute on the `a` element in order to make this a true link and get the proper eventing. In this case, we're using "\#" as the link target, but you could use anything. This link will never be navigated.

The "return false;" at the end of the doStuff() event handling function tells the browser not to navigate to the URI. Without it, the page would refresh after the script ran.

    <script> 
    function doStuff()
     {
      //do stuff
        return false;
      }
    </script>
    <a href="#" onclick="return doStuff();">do stuff</a>

### Example 2

Link that runs script, but navigates to another page when script is not available. This approach can be used to create sites that don't rely on script, if and only if the navigation target provides the same functionality as the script. This example is identical to the example 1, except that its href is now set to a real page, dostuff.htm. Dostuff.htm must provide the same functionality as the script.The "return false;" at the end of the doStuff() event handling function tells the browser not to navigate to the URI. Without it, the browser would navigate to dostuff.htm after the script ran.

    <script> 
    function doStuff() 
     {  
      //do stuff  
      return false; 
     }
    </script>
    <a href="dostuff.htm" onclick="return doStuff();">do stuff</a>

A working example of this code is available. Refer to [Creating Action Links using JavaScript](../../working-examples/script-action-links/).

### Example 3

Button that runs a script and falls back to a form post for users without script. This approach can be used by sites that do not rely on script, if and only if the form post provides the same functionality as the script. The onsubmit="return false;" prevents the form from submitting.

    <script>
      function doStuff()
     {
         //do stuff
     }
    </script>
    <form action="doStuff.aspx" onsubmit="return false;">
     <input type="submit" value="Do Stuff" onclick="doStuff();" />
    </form>

A working example of this code is available. Refer to [Creating Action Buttons using JavaScript](../../working-examples/script-action-buttons/).

### Example 4

Button that runs a script, implemented with input type="image". Note that an alt attribute must be added to the `input` to provide a text equivalent for the image. This approach should only be used when script is relied upon.

    <script>
      function doStuff()
      {
         //do stuff
       return false;
      }
    </script>
    <input  type="image"  src="stuff.gif"  alt="Do stuff"  onclick="return doStuff();" />

### Example 5

Button that runs a script, implemented with input type="submit", input type="reset" or input type="button". This approach should only be used when script is relied upon.

    <input type="submit" onclick="return doStuff();" value=”Do Stuff” />

### Example 6

Button that runs a script, implemented with `button`…`/button`. This is valuable when you want more control over the look of your button. In this particular example, the button contains both an icon and some text. This approach should only be used when script is relied upon.

    <button onclick="return doStuff();">
     <img src="stuff.gif" alt="stuff icon">
     Do Stuff
    </button>

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [HTML 4.01 Scripts](https://www.w3.org/TR/REC-html40/interact/scripts.html)
-   [HTML 4.01 Forms](https://www.w3.org/TR/REC-html40/interact/forms.html)
-   [HTML 4.01 Links](https://www.w3.org/TR/REC-html40/struct/links.html)
-   [Document Object Model (DOM) Technical Reports](https://www.w3.org/DOM/DOMTR)

Related Techniques
------------------

-   [G90: Providing keyboard-triggered event handlers](https://www.w3.org/WAI/WCAG21/Techniques/general/G90)
-   [G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes](https://www.w3.org/WAI/WCAG21/Techniques/general/G108)
-   [H91: Using HTML form controls and links](https://www.w3.org/WAI/WCAG21/Techniques/html/H91)
-   [SCR20: Using both keyboard and other device-specific functions](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR20)
-   [SCR24: Using progressive enhancement to open new windows on user request](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR24)
-   [F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links](https://www.w3.org/WAI/WCAG21/Techniques/failures/F42)
-   [F59: Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML without providing a role for the control](https://www.w3.org/WAI/WCAG21/Techniques/failures/F59)

Tests
-----

### Procedure

For all script actions associated with `a`, `button`, or `input` elements:

1.  In a user agent that supports Scripting

    -   Click on the control with the mouse.
    -   Check that the scripting action executes properly.
    -   If the control is an anchor element, check that the URI in the `href` attribute of the anchor element is not invoked.
    -   Check that it is possible to navigate to and give focus to the control via the keyboard.
    -   Set keyboard focus to the control.
    -   Check that pressing ENTER invokes the scripting action.
    -   If the control is an anchor element, check that the URI in the `href` attribute of the anchor element is not invoked.

2.  In a user agent that does not support Scripting

    -   Click on the control with the mouse.
    -   If the control is an anchor element, check that the URI in the `href` attribute of the anchor element is invoked.
    -   Check that it is possible to navigate to and give focus to the control via the keyboard.
    -   Set keyboard focus to the control.
    -   If the control is an anchor element, check that pressing ENTER invokes the URI of the anchor element's `href` attribute.

### Expected Results

-   All of the above checks are true.
