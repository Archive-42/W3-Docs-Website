-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR18](SCR18)
-   [Next Technique: SCR20](SCR20)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Tests](#tests)

Using an onchange event on a select element without causing a change of context
===============================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

HTML and XHTML with support for scripting. This technique uses the try/catch construct of JavaScript 1.4.

This technique relates to:

-   [Success Criterion 3.2.2: On Input](https://www.w3.org/WAI/WCAG21/Understanding/on-input) (Sufficient)
-   [Success Criterion 3.2.5: Change on Request](https://www.w3.org/WAI/WCAG21/Understanding/change-on-request) (Sufficient)

Description
-----------

The objective of this technique is to demonstrate how to correctly use an onchange event with a select element to update other elements on the Web page. This technique will not cause a change of context. When there are one or more select elements on the Web page, an onchange event on one, can update the options in another select element on the Web page. All of the data required by the select elements is included within the Web page.

It is important to note that the select item which is modified is after the trigger select element in the reading order of the Web page. This ensures that assistive technologies will pick up the change and users will encounter the new data when the modified element receives focus. This technique relies on JavaScript support in the user agent.

Examples
--------

### Example 1

This example contains two select elements. When an item is selected in the first select, the choices in the other select are updated appropriately. The first select element contains a list of continents. The second select element will contain a partial list of countries located in the selected continent. There is an onchange event associated with the continent select. When the continent selection changes, the items in the country select are modified using JavaScript via the Document Object Model (DOM). All of the data required, the list of countries and continents, is included within the Web page.

Overview of the code below

-   countryLists array variable which contains the list of countries for each continent in the trigger select element.
-   countryChange() function which is called by the onchange event of the continent select element.
-   The XHTML code to create the select elements in the body of the Web page.

<!-- -->

    <?xml version="1.0" encoding="UTF-8"?> 
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
      "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"> 
      <head> 
        <meta http-equiv="content-type" content="text/xhtml; charset=utf-8" /> 
        <title>Dynamic Select Statements</title> 
    <script type="text/javascript">
     //<![CDATA[ 
     // array of possible countries in the same order as they appear in the country selection list 
     var countryLists = new Array(4) 
     countryLists["empty"] = ["Select a Country"]; 
     countryLists["North America"] = ["Canada", "United States", "Mexico"]; 
     countryLists["South America"] = ["Brazil", "Argentina", "Chile", "Ecuador"]; 
     countryLists["Asia"] = ["Russia", "China", "Japan"]; 
     countryLists["Europe"]= ["Britain", "France", "Spain", "Germany"]; 
     /* CountryChange() is called from the onchange event of a select element. 
     * param selectObj - the select object which fired the on change event. 
     */ 
     function countryChange(selectObj) { 
     // get the index of the selected option 
     var idx = selectObj.selectedIndex; 
     // get the value of the selected option 
     var which = selectObj.options[idx].value; 
     // use the selected option value to retrieve the list of items from the countryLists array 
     cList = countryLists[which]; 
     // get the country select element via its known id 
     var cSelect = document.getElementById("country"); 
     // remove the current options from the country select 
     var len=cSelect.options.length; 
     while (cSelect.options.length > 0) { 
     cSelect.remove(0); 
     } 
     var newOption; 
     // create new options 
     for (var i=0; i<cList.length; i++) { 
     newOption = document.createElement("option"); 
     newOption.value = cList[i];  // assumes option string and value are the same 
     newOption.text=cList[i]; 
     // add the new option 
     try { 
     cSelect.add(newOption);  // this will fail in DOM browsers but is needed for IE 
     } 
     catch (e) { 
     cSelect.appendChild(newOption); 
     } 
     } 
     } 
    //]]>
    </script>
    </head>
    <body>
      <noscript>This page requires JavaScript be available and enabled to function properly</noscript>
      <h1>Dynamic Select Statements</h1>
      <label for="continent">Select Continent</label>
      <select id="continent" onchange="countryChange(this);">
        <option value="empty">Select a Continent</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>
      <br/>
      <label for="country">Select a country</label>
      <select id="country">
        <option value="0">Select a country</option>
      </select>
    </body>
     </html>

Here is a working example: [Dynamic Select](../../working-examples/script-dynamic-select/)

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Accessible Forms using WCAG 2.0](http://usability.com.au/2008/09/accessible-forms-using-wcag-2-0/)
-   [Change of context definition](https://www.w3.org/TR/WCAG21/#dfn-change-of-context)

Tests
-----

### Procedure

1.  Navigate to the trigger select element (in this example, the one to select continents) and change the value of the select.
2.  Navigate to the select element that is updated by the trigger (in this example, the one to select countries).
3.  Check that the matching option values are displayed in the other select element.
4.  Navigate to the trigger select element, navigate through the options but do not change the value.
5.  Check that the matching option values are still displayed in the associated element.

It is recommended that the select elements are tested with an assistive technology to verify that the changes to the associated element are recognized.

### Expected Results

-   Step \#3 and \#5 are true.
