-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA19](ARIA19)
-   [Next Technique: ARIA21](ARIA21)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using the region role to identify a region of the page
======================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications](https://www.w3.org/TR/wai-aria/).

This technique relates to [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Sufficient).

Description
-----------

This technique demonstrates how to assign a generic `region` role to a section of a page so that user agents and assistive technologies may be able to programmatically identify it. The `region` role demarcates a segment of the page that contains content of significance so that it is more readily discoverable and navigable. The generic region should be used when the section cannot be marked up using a standard document landmark role (see [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11)).

It is important to name regions, because they are generic grouping elements and users will need some way to tell which region they are in. Regions can be named using `aria-labelledby`, `aria-label`, or another technique. Doing so helps to better expose content and information relationships on the page. The role of `region` should be used prudently, because if overused they can make the page overly verbose for screen reader users.

Examples
--------

### Example 1: Region on a news website

A section on the home page of a news website that contains a poll that changes every week is marked up with role="region". The h3 text above the form is referenced as the region's name using `aria-labelledby`.

    <div role="region" aria-labelledby="pollhead">
    <h3 id="pollhead">This week's Poll</h3>
    <form method="post" action="#">
      <fieldset>
        <legend>Do you believe the tax code needs to be overhauled?</legend>
        <input type="radio" id="r1" name="poll" />
        <label for="r1">No, it's fine the way it is</label>
        <input type="radio" id="r2" name="poll" />
        <label for="r2">Yes, the wealthy need to pay more</label>
        <input type="radio" id="r3" name="poll" />
        <label for="r3">Yes, we need to close corporate loopholes</label>
        <input type="radio" id="r4" name="poll" />
        <label for="r4">Changes should be made across the board</label>
      </fieldset>
    </form>
    <a href="results.php">See Poll Results</a>
    </div>            
                

### Example 2: Identifying a region on a banking site

A user can expand links on a bank website after logging in to see details of term deposit accounts. The details are within a span marked up with `region` role. The heading for the region has role=heading and is included in the `aria-labelledby` that names the region.

    <ol>
        <li><a id="l1" href="#" aria-expanded="false" title="Show details" aria-controls="block1" >John Henry's Account</a><img src="images/panel_expand.gif" alt="" />
             <div id="block1" class="nowHidden" tabindex="-1" aria-labelledby="l1 cd1" role="region"><span id="cd1" role="heading" aria-level="3">Certificate of  Deposit:</span>
             <table>
                 <tr><th scope="row">Account:</th> <td>25163522</td></tr>
                 <tr><th scope="row">Start date:</th> <td>February 1, 2014</td></tr>
                 <tr><th scope="row">Maturity date:</th><td>February 1, 2016</td></tr>
                 <tr><th scope="row">Deposit Amount:</th> <td>$ 3,000.00</td></tr>
                 <tr><th scope="row">Maturity Amount:</th> <td>$ 3,072.43</td></tr>
             </table>
             </div>
         </li>
     </ol>
                

### Example 3: Identifying a portlet with a generic region

This example shows how a generic `region` landmark might be added to a weather portlet. There is no existing text on the page that can be referenced as the label, so it is labelled with `aria-label`.

    <div role="region" aria-label="weather portlet"> 
        ...
    </div>            

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [The Roles Model (role=region)](https://www.w3.org/TR/wai-aria/#region)

Related Techniques
------------------

-   [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11)
-   [ARIA12: Using role=heading to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA12)
-   [ARIA13: Using aria-labelledby to name regions and landmarks](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA13)

Tests
-----

### Procedure

For each section marked up with role="region":

1.  Examine the content and ensure that it is important enough to have an independent landmark
2.  Ensure that a standard landmark role is not appropriate for this content
3.  Check that the region has a programmatically determined name

### Expected Results

-   Checks \#1-3 are true.
