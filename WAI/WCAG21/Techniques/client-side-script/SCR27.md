-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR26](SCR26)
-   [Next Technique: SCR28](SCR28)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Tests](#tests)

Reordering page sections using the Document Object Model
========================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

HTML and XHTML, script

This technique relates to [Success Criterion 2.4.3: Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) (Sufficient when used with an unwritten technique).

Description
-----------

The objective of this technique is to provide a mechanism for re-ordering component which is both highly usable and accessible. The two most common mechanisms for reordering are to send users to a set-up page where they can number components, or to allow them to drag and drop components to the desired location. The drag and drop method is much more usable, as it allows the user to arrange the items in place, one at a time, and get a feeling for the results. Unfortunately, drag and drop relies on the use of a mouse. This technique allows users to interact with a menu on the components to reorder them in place in a device independent way. It can be used in place of, or in conjunction with drag and drop reordering functionality.

The menu is a list of links using the device-independent onclick event to trigger scripts which re-order the content. The content is re-ordered in the Document Object Model (DOM), not just visually, so that it is in the correct order for all devices.

Examples
--------

### Example 1

This example does up and down reordering. This approach can also be used for two-dimensional reordering by adding left and right options.

The components in this example are list items in an unordered list. Unordered lists are a very good semantic model for sets of similar items, like these components. The menu approach can also be used for other types of groupings.

The modules are list items, and each module, in addition to content in div elements, contains a menu represented as a nested list.

    <ul id="swapper">
        <li id="black">
            <div class="module">
                <div class="module_header">
                    <!-- menu link -->
                    <a href="#" onclick="ToggleMenu(event);">menu</a>
                    <!-- menu -->
                    <ul class="menu">
                        <li><a href="#" onclick="OnMenuClick(event)" 
                            onkeypress="OnMenuKeypress(event);">up</a></li>
                        <li><a href="#" onclick="OnMenuClick(event)" 
                            onkeypress="OnMenuKeypress(event);">down</a></li>
                    </ul>
                </div>
                <div class="module_body">
                    Text in the black module
                </div>
            </div>
        </li>
        ...
    </ul>

Since we've covered the showing and hiding of menus in the simple tree samples, we'll focus here just on the code that swaps the modules. Once we harmonize the events and cancel the default link action, we go to work. First, we set a bunch of local variables for the elements with which we'll be working: the menu, the module to be reordered, the menuLink. Then, after checking the reorder direction, we try to grab the node to swap. If we find one, we then call swapNode() to swap our two modules, and PositionElement() to move the absolutely-positioned menu along with the module, and then set focus back on the menu item which launched the whole thing.

    function MoveNode(evt,dir)
    {
        HarmonizeEvent(evt);
        evt.preventDefault();

        var src = evt.target;
        var menu = src.parentNode.parentNode;
        var module = menu.parentNode.parentNode.parentNode;
        var menuLink = module.getElementsByTagName("a")[0];
        var swap = null;
        
        switch(dir)
        {
            case 'up':
            {
                swap = module.previousSibling;
                while (swap && swap.nodeType != 1)
                {
                    swap = swap.previousSibling;
                }
                break;
            }
            case 'down':
            {
                swap = module.nextSibling;
                while (swap && swap.nodeType != 1)
                {
                    swap = swap.nextSibling;
                }
                break;
            }
        }
        if (swap && swap.tagName == node.tagName)
        {
            module.swapNode(swap);
            PositionElement(menu,menuLink,false,true);
        }
        src.focus();
    }

The CSS for the node swap is not much different than that of our previous tree samples, with some size and color adjustment for the modules and the small menu.

    ul#swapper { margin:0px; padding:0px; list-item-style:none; }
    ul#swapper li { padding:0; margin:1em; list-style:none; height:5em; width:15em; 
        border:1px solid black; }
    ul#swapper li a { color:white; text-decoration:none; font-size:90%; }

    ul#swapper li div.module_header { text-align:right; padding:0 0.2em; }
    ul#swapper li div.module_body { padding:0.2em; }

    ul#swapper ul.menu { padding:0; margin:0; list-style:none; background-color:#eeeeee; 
        height:auto; position:absolute; text-align:left; border:1px solid gray; display:none; }
    ul#swapper ul.menu li { height:auto; border:none; margin:0; text-align:left; 
        font-weight:normal; width:5em; }
    ul#swapper ul.menu li a { text-decoration:none; color:black; padding:0 0.1em; 
        display:block; width:100%; }

Tests
-----

### Procedure

1.  Find all components in the Web Unit which can be reordered via drag and drop.
2.  Check that there is also a mechanism to reorder them using menus build of lists of links.
3.  Check that the menus are contained within the reorderable items in the DOM.
4.  Check that scripts for reordering are triggered only from the onclick event of links.
5.  Check that items are reordered in the DOM, not only visually.

### Expected Results

-   \#2 through \#5 are true.
