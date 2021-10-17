-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA21](ARIA21)
-   [Next Technique: ARIA23](ARIA23)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Tests](#tests)

Using role=status to present status messages
============================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Content using [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to:

-   [Success Criterion 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages) (Sufficient using a more specific technique)
-   [Success Criterion 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages) (Sufficient, together with [G193: Providing help by an assistant in the Web page](../general/G193))

Description
-----------

This technique uses the `status` role from the ARIA specification to notify Assistive Technologies (AT) when content has been updated with information about the user's or application's status. This is done by adding `role="status"` to the element that contains the [status message](https://www.w3.org/TR/WCAG21/#dfn-status-messages). The aria live region role of `status` has an implicit `aria-live` value of `polite`, which allows a user to be notified via AT (such as a screen reader) when status messages are added. The role of `status` also has a default `aria-atomic` value of `true`, so that updates to the container marked with a role of `status` will result in the AT presenting the entire contents of the container to the user, including any author-defined labels (or additional nested elements). Such additional context can be critical where the status message text alone will not provide an equivalent to the visual experience. The content of the aria-live container is automatically read by the AT, without the AT having to focus on the place where the text is displayed. See [WAI-ARIA 1.1 status (role)](https://www.w3.org/TR/wai-aria-1.1/#status) for more details.

Examples
--------

### Example 1: Including a search results message

After a user presses a Search button, the page content is updated to include the results of the search, which are displayed in a section below the Search button. The change to content also includes the message "5 results returned" near the top of this new content. This text is given an appropriate role for a status message. A screen reader will announce "Five results returned".


        <div role="status">5 results returned.</div>

                        

[Working example: role=status on search results](../../working-examples/aria-role-status-searchresults/)

### Example 2: Updating the shopping cart status

After a user presses an Add to Shopping Cart button, content near the Shopping Cart icon updates to read "1 items". The container for this text (in this case a `<p>`) is marked with the role of `status`. Because it adds visual context, the shopping cart image -- with succinct and accurate ALT text -- is also placed in the container. Due to the default `aria-atomic` value, a screen reader will announce "Shopping cart, six items".


        <p role="status" >
            <img src="shopping-cart.png" alt="Shopping Cart">
            <br>
            <span id="cart">0</span> items
        </p>

[Working example: role=status on a shopping cart](../../working-examples/aria-role-status-shoppingcart/)

Tests
-----

### Procedure

For each [status message](https://www.w3.org/TR/WCAG21/#dfn-status-messages):

1.  Check that the container destined to hold the status message has a `role` attribute with a value of `status` *before* the status message occurs.
2.  Check that when the status message is triggered, it is inside the container.
3.  Check that elements or attributes that provide information equivalent to the visual experience for the status message (such as a shopping cart image with proper ALT text) also reside in the container.

### Expected Results

-   \#1, \#2 and \#3 are true.
