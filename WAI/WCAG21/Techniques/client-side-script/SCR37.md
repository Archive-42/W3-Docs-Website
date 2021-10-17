-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR36](SCR36)
-   [Next Technique: SCR38](SCR38)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Creating Custom Dialogs in a Device Independent Way
===================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

HTML and XHTML used with script.

This technique relates to [Success Criterion 2.4.3: Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) (Sufficient when used with an unwritten technique).

Description
-----------

Site designers often want to create dialogs that do not use the pop-up windows supplied by the browser. This is typically accomplished by enclosing the dialog contents in a `div` and placing the `div` above the page content using z-order and absolute positioning in CSS.

To be accessible, these dialogs must follow a few simple rules.

1.  Trigger the script that launches the dialog from the onclick event of a link or button.
2.  Place the dialog `div` into the Document Object Model (DOM) immediately after the element that triggered it. The triggering element will maintain focus, and inserting the dialog content after that element will make the content inside the dialog next in the screen-reader reading order and next in the tab order. The dialog can still be absolutely positioned to be elsewhere on the page visually. This can be done either by creating the dialog in the HTML and hiding it with CSS, as in the example below, or by inserting it immediately after the triggering element with script.
3.  Ensure that the HTML inside the dialog div meets the same accessibility standard as other content.

It is also nice, but not always necessary, to make the launching link toggle the dialog open and closed, and to close the dialog when the keyboard focus leaves it.

Examples
--------

### Example 1: An options button that opens a dialog

The HTML for this example includes a triggering Element, in this case a button, and a div that acts as the frame for the dialog.

The triggering element is a button and the script is triggered from the onclick event. This sends the appropriate events to the operating system so that assistive technology is aware of the change in the DOM.

In this example, the Submit and Reset buttons inside the dialog simply hide the `div`.

    ...
    <button onclick="TogglePopup(event,true)"
        name="pop0001">Options</button>

    <div class="popover" id="pop0001">
      <h3>Edit Sort Information</h3>
      <form action="default.htm" onsubmit="this.parentNode.style.display='none'; return false;" onreset="this.parentNode.style.display='none'; return false;">
        <fieldset>
          <legend>Sort Order</legend> 
          <input type="radio" name="order" id="order_alpha" /><label for="order_alpha">Alphabetical</label>
          <input type="radio" name="order" id="order_default" checked="true" /><label for="order_default">Default</label>
        </fieldset>
    <div class="buttons">
      <input type="submit" value="OK" />
      <input type="reset" value="Cancel" />
    </div>
    </form>

    </div>
    ...

The `div`, heading and `form` elements are styled with CSS to look like a dialog.

    ...
    a { color:blue; }
    a.clickPopup img { border:none; width:0; }

    div.popover { position:absolute; display:none; border:1px outset; background-color:beige; font-size:80%; background-color:#eeeeee; color:black; }
    div.popover h3 { margin:0; padding:0.1em 0.5em; background-color:navy; color:white; }
    #pop0001 { width:20em; }
    #pop0001 form { margin:0; padding:0.5em; }
    #pop0001 fieldset { margin-bottom:0.3em; padding-bottom:0.5em; }
    #pop0001 input, #pop0001 label { vertical-align:middle; }
    #pop0001 div.buttons { text-align:right; }
    #pop0001 div.buttons input { width:6em; }
    ...

The script toggles the display of the popup `div`, showing it and hiding it.

    ...
    function TogglePopup(evt,show)
    {
        HarmonizeEvent(evt);
        var src = evt.target;
        if ("click" == evt.type)
        {
            evt.returnValue = false;
        }
        var popID = src.getAttribute("name");
        if (popID)
        {
            var popup = document.getElementById(popID);
            if (popup)
            {
                if (true == show)
                {
                    popup.style.display = "block";
                }
                else if (false == show)
                {
                    popup.style.display = "none";
                }
                else
                {
                    popup.style.display = "block" == popup.style.display ? "none" : "block";
                }
                if ("block" == popup.style.display)
                {
                    //window.alert(document.documentElement.scrollHeight);
                    popup.style.top = ((document.documentElement.offsetHeight - popup.offsetHeight) / 2 ) + 'px';
                    popup.style.left = ((document.documentElement.offsetWidth - popup.offsetWidth) / 2) + 'px';
                }
            }
        }
    }

    function SubmitForm(elem)
    { 
        elem.parentNode.style.display='none'; 
        return false;
    }

    function ResetForm(elem)
    { 
        elem.parentNode.style.display='none'; 
        return false;
    }
    ...

A working example, [an options button that opens a dialog](../../working-examples/script-options-button-dialog/), is available.

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   Microsoft Developer Network Whitepaper: [Writing Accessible Web Applications](http://download.microsoft.com/download/0/f/5/0f5e941c-c495-401a-9031-eab8315da35e/writing_accessible_web_applications.doc) by Cynthia C. Shelly and George Young. (Microsoft Word Format)
-   [Microsoft Active Accessibility 2.0 SDK](https://msdn.microsoft.com/en-us/library/ms695716.aspx). Includes Inspect32.exe and other MSAA tools.
-   [Instructions for the Inspect tool](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318521(v=vs.85).aspx)
-   [Using the Inspect tool to find name Name, Role and Value for Javascript](http://www.eramp.com/david/name-role-value-using-inspect.htm)
-   [Microsoft Internet Explorer Developer Toolbar.](http://www.microsoft.com/en-us/download/details.aspx?id=18359). Allows examination of script-generated DOM in Microsoft Internet Explorer
-   [Firebug](http://getfirebug.com/). Allows examination of script-generated DOM in Firefox.

Related Techniques
------------------

-   [SCR26: Inserting dynamic content into the Document Object Model immediately following its trigger element](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR26)
-   [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G59)

Tests
-----

### Procedure

1.  Find all areas of the page that trigger dialogs that are not pop-up windows.
2.  Check that the dialogs can be opened by tabbing to the area and hitting enter.
3.  Check that, once opened, the dialog is next in the tab order.
4.  Check that the dialogs are triggered from the click event of a button or a link.
5.  Using a tool that allows you to inspect the DOM generated by script, check that the dialog is next in the DOM.

### Expected Results

-   Checks \#2, \#3, \#4 and \#5 are true.
