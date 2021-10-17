-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR22](SCR22)
-   [Next Technique: SCR26](SCR26)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using progressive enhancement to open new windows on user request
=================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

HTML 4.01 and XHTML 1.0

This technique relates to [Success Criterion 3.2.5: Change on Request](https://www.w3.org/WAI/WCAG21/Understanding/change-on-request) (Sufficient when used with an unwritten technique).

Description
-----------

The objective of this technique is to avoid confusion that may be caused by the appearance of new windows that were not requested by the user. Suddenly opening new windows can disorient or be missed completely by some users. If the document type does not allow the target attribute (it does not exist in HTML 4.01 Strict or XHTML 1.0 Strict) or if the developer prefers not to use it, new windows can be opened with ECMAScript. The example below demonstrates how to open new windows with script: it adds an event handler to a link (a element) and warns the user that the content will open in a new window.

Examples
--------

### Example 1

Markup:

The script is included in the head of the document, and the link has an id that can be used as a hook by the script.

    <script type="text/javascript" src="popup.js"></script>
    …
    <a href="help.html" id="newwin">Show Help</a>

Script:

     
    // Use traditional event model whilst support for event registration
    // amongst browsers is poor.
    window.onload = addHandlers;

    function addHandlers()
    {
      var objAnchor = document.getElementById('newwin');

      if (objAnchor)
      {
        objAnchor.firstChild.data = objAnchor.firstChild.data + ' (opens in a new window)';
        objAnchor.onclick = function(event){return launchWindow(this, event);}
        // UAAG requires that user agents handle events in a device-independent manner
        // but only some browsers do this, so add keyboard event to be sure
        objAnchor.onkeypress = function(event){return launchWindow(this, event);}
      }
    }

    function launchWindow(objAnchor, objEvent)
    {
      var iKeyCode, bSuccess=false;

      // If the event is from a keyboard, we only want to open the
      // new window if the user requested the link (return or space)
      if (objEvent && objEvent.type == 'keypress')
      {
        if (objEvent.keyCode)
          iKeyCode = objEvent.keyCode;
        else if (objEvent.which)
          iKeyCode = objEvent.which;

        // If not carriage return or space, return true so that the user agent
        // continues to process the action
        if (iKeyCode != 13 && iKeyCode != 32)
          return true;
      }

      bSuccess = window.open(objAnchor.href);

      // If the window did not open, allow the browser to continue the default
      // action of opening in the same window
      if (!bSuccess)
        return true;

      // The window was opened, so stop the browser processing further
      return false;
    }

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Wikipedia: Progressive Enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement)

Related Techniques
------------------

-   [H83: Using the target attribute to open a new window on user request and indicating this in link text](https://www.w3.org/WAI/WCAG21/Techniques/html/H83)

Tests
-----

### Procedure

1.  Activate each link in the document to check if it opens a new window.
2.  For each link that opens a new window, check that it uses script to accomplish each of the following:

    1.  indicates that the link will open in a new window,
    2.  uses device-independent event handlers, and
    3.  allows the browser to open the content in the same window if a new window was not opened.

### Expected Results

-   \#2 is true.
