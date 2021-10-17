-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA7](ARIA7)
-   [Next Technique: ARIA9](ARIA9)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using aria-label for link purpose
=================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to:

-   [Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context) (Sufficient when used with an unwritten technique)
-   [Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only) (Sufficient)

Description
-----------

The objective of this technique is to describe the purpose of a link using the `aria-label` attribute. The `aria-label` attribute provides a way to place a descriptive text label on an object, such as a link, when there are no elements visible on the page that describe the object. If descriptive elements are visible on the page, the `aria-labelledby` attribute should be used instead of `aria-label`. Providing a descriptive text label lets a user distinguish the link from links in the Web page that lead to other destinations and helps the user determine whether to follow the link. In some assistive technologies the `aria-label` value will show in the list of links instead of the actual link text.

Per the [Accessible Name and Description Computation](https://www.w3.org/TR/accname/) and the [HTML to Platform Accessibility APIs Implementation Guide](https://www.w3.org/TR/html-aapi/#accessible-name-and-description-calculation), the `aria-label` text will override the text supplied within the link. As such the text supplied will be used instead of the link text by AT. Due to this it is recommended to start the text used in `aria-label` with the text used within the link. This will allow consistent communication between users.

Examples
--------

### Example 1: Describing the purpose of a link in HTML using aria-label.

In some situations, designers may choose to lessen the visual appearance of links on a page by using shorter, repeated link text such as "read more". These situations provide a good use case for aria-label in that the simpler, non-descriptive "read more" text on the page can be replaced with a more descriptive label of the link. The words 'read more' are repeated in the aria-label (which replaces the original anchor text of "\[Read more...\]") to allow consistent communication between users.

     <h4>Neighborhood News</h4>
     <p>Seminole tax hike:  Seminole city managers are proposing a 75% increase in 
     property taxes for the coming fiscal year.
     <a href="taxhike.html" aria-label="Read more about Seminole tax hike">[Read more...]</a>
     </p> 

     <p>Baby Mayor:  Seminole voters elect the city's youngest mayor ever by voting in 3 year
     old Willy "Dusty" Williams in yesterday's mayoral election.
     <a href="babymayor.html" aria-label="Read more about Seminole's new baby mayor">[Read more...]</a>
     </p>

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [HTML to Platform Accessibility APIs Implementation Guide: Accessible Name and Description Calculation](https://www.w3.org/TR/html-aapi/#accessible-name-and-description-calculation)
-   [Accessible Name and Description Computation](https://www.w3.org/TR/accname/)

Related Techniques
------------------

-   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6)
-   [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14)
-   [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA7)
-   [G91: Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG21/Techniques/general/G91)
-   [H30: Providing link text that describes the purpose of a link for anchor elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H30)

Tests
-----

### Procedure

For link elements that use `aria-label`:

1.  Check that the value of the `aria-label` attribute properly describes the purpose of the link element.

### Expected Results

-   \#1 is true.
