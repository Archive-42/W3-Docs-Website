[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Forms</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>User Notifications</span></span> </span>

User Notifications
==================

Provide feedback to users about the results of their form submission, whether successful or not. This includes in-line feedback at or near the form controls and overall feedback that is typically provided after form submission.

Notifications have to be concise and clear. In particular, error messages should be easy to understand and should provide simple instructions on how they can be resolved. Success messages are also important to confirm task completion.

Overall feedback
----------------

When a form is submitted, it is important that the user is notified whether the submission was successful or if errors occurred. Several of the following techniques can be combined.

### Using the main heading

A common way to provide feedback is by using the main heading of the web page, usually, the most prominently displayed `<h1>` or `<h2>` element. This technique is particularly useful when forms are processed by the server, but can also be useful for client-side scripting.

Code snippet: Error

    <h1>3 Errors – Billing Address</h1>

Code snippet: Success

    <h1>Thank you for submitting your order.</h1>

**Note:** The primary purpose of the main heading is still to identify the web page that the user is currently on. When the user is sent back to the same web page because of an error, then a simple indication using the word “error” and possibly the number of errors is helpful.

### Using the page title

The `<title>` element of the web page can be useful to indicate successes and errors. In particular, screen reader users will receive this feedback immediately when the web page is loaded. This can be helpful when the main heading is located deeper within the content, for example, after the navigation menus.

Code snippet: Error

    <title>3 Errors – Billing Address</title>

Code snippet: Success

    <title>Thank you for submitting your order.</title>

### Using dialogs

A dialog is a common way to inform users of changes. It can be used if other means of informing the user prove to be easily missed. Dialogs are more obtrusive and distracting, which may be the desired effect.

JavaScript provides a very basic alert dialog box that provides proper keyboard navigation and respects the user’s default settings, including font size, colors, and language. A custom dialog implementation has to match that functionality.

The basic example below shows a pop-up that is displayed when the user activates the “save” button. A message is displayed in the dialog box, and the web page is disabled until the user selects “OK”.

Example:

Save

Code snippet: HTML

    <button type="button" id="alertconfirm">Save</button>

Code snippet: JavaScript

    document.getElementById('alertconfirm')
        .addEventListener('click', function() {
            /* [… code saving data …] */
            alert('Thanks for submitting the form!');
        });

### Listing errors

When errors occur, it is helpful to list them at the top of the page, before the form. The list should have a distinctive heading so that it is easy to identify. Each error listed should:

-   Reference the label of the corresponding form control, to help the user recognize the control;
-   Provide a concise description of the error in a way that is easy to understand by everyone;
-   Provide an indication of how to correct mistakes, and remind users of any format requirements;
-   Include an in-page link to the corresponding form control to make access easier for the users.

Sometimes, for example, when using AJAX techniques, the browser is not loading a new page but shows changes, such as form errors, dynamically on the page. The list of errors should be inserted into a prominent container on the top to inform the user in such a case. In addition to the advice above, this container should have the `role` attribute set to `alert` to make assistive technology users aware of this change.

Example:

#### There are 2 errors in this form

-   [The First name field is empty, it is a required field and must be filled in.](#firstname)
-   [The Date field is in the wrong format, it should be similar to 17/09/2013 (use a / to separate day, month, and year).](#birthdate)

Code snippet:

    <div role="alert">
      <h4>There are 2 errors in this form</h4>
      <ul>
        <li>
            <a href="#firstname" id="firstname_error">
                The First name field is empty; it is a required field and must be filled in.
            </a>
        </li>
        <li>
            <a href="#birthdate" id="birthdate_error">
                The Date field is in the wrong format; it should be similar to 17/09/2013 (use a / to separate day, month, and year).
            </a>
        </li>
      </ul>
    </div>

Also, form fields can be associated with the corresponding error message using aria-describedby.

Code snippet:

    <label for="firstname">First Name:</label>
    <input type="text" id="firstname" aria-describedby="firstname_error">

In-line feedback
----------------

In addition to overall feedback, more specific feedback at or near the form controls can better help users to use your form. This includes feedback to indicate correctly entered input as well as errors in the input.

Typically a combination of messages and visual cues are used to provide in-line feedback. For example, valid input can be indicated by a checkmark (✓) and green border, while errors can be indicated by an error icon (like a red ✗ or an exclamation mark) and red border. Error messages should also provide guidance on how to correct mistakes. The concepts for such error messages are essentially the same as for providing [instructions](../instructions/).

### After submit

The example below shows a form with two input fields. The first input field, “username”, is used to register a username. The second input field, “expiry date”, is used to provide a date for when the registration expires.

When the form is submitted, the entries are checked, and feedback is provided to the user. Appropriate success and error messages are displayed for each input field to help the user complete the form.

If the submitted data contains errors, it is convenient to set the focus to the first `<input>` element that contains an error.

Example:

**OK:** Username: <span id="userDesc2">✓</span>

**Error:** Expiry date: <span id="expDesc2">Use the format MM/YYYY.</span>

Submit

Code snippet: HTML

    <div class="success">
        <label for="username">
            <strong>OK:</strong> Username:
        </label>
        <input type="text" name="username"
            id="username" value="spaceteddy13"
            aria-describedby="userDesc">
        <span id="userDesc">✓</span>
    </div>
    <div class="error">
        <label for="expire">
            <strong>Error:</strong>
            Expiry date:
        </label>
        <input type="text" name="expire"
            id="expire" value="03.2015"
            aria-describedby="expDesc">
            <span id="expDesc">Use the format MM/YYYY.</span>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>

Code snippet: CSS

    .error   { color: #900; }
    .success { color: #007a00; }
    .error   input { border: 3px solid #900; }
    .success input { border: 3px solid #007a00; }

### During typing

Instant feedback during typing can be extremely helpful. For example, checking the availability of a username in the previous example required the user to resubmit the form – possibly multiple times. Providing feedback while users are typing allows them to experiment more easily until they find a suitable username. However, client-side scripting is required for such functionality, and not all situations may be appropriate for such feedback.

#### Binary messages

In the following example, the availability of a username is checked instantly while the user is typing text in the input field. Corresponding success and error messages are displayed without the user needing to submit the form.

Example:

Username: <span id="username_feedback" aria-live="polite"></span>

Code snippet: HTML

    <div>
        <label for="username">Username:</label>
        <input type="text" name="username" id="username">
        <span id="username_feedback" aria-live="polite"></span>
    </div>

Code snippet: JavaScript

    document.getElementById('username').addEventListener('keyup', function(){
        function setError(el, msg) {
            el.parentNode.querySelector('strong').innerHTML = "Error:";
            el.parentNode.className='error';
            el.parentNode.querySelector('span').innerHTML = msg;
        }
        function setSuccess(el) {
            el.parentNode.querySelector('strong').innerHTML = "OK:";
            el.parentNode.className='success';
            el.parentNode.querySelector('span').innerHTML = "&check;";
        }
        var val = this.value;
        if (val !== "") {
            if (taken_usernames.indexOf(val.trim())+1) {
                setError(this, '&cross; Sorry, this username is taken.');
            } else {
                setSuccess(this, '&check; You can use this username.');
            }
        } else {
            document.getElementById('username_feedback').innerHTML = '';
            document.getElementById('username_feedback')
                .parentNode.className = '';
            document.querySelector('[for="username"] strong').innerHTML = '';
        }
    });

**Note:** The displayed message in this example is coded using a `<span>` element that has an `aria-live` attribute with the value `polite`. The contents of this so called “live region” are conveyed to screen readers and other assistive technology. The value “polite” de-emphasizes the importance of the message and does not cause screen readers to interrupt their current tasks to read aloud this message. Thus the message is only read once when the user stops typing rather than on every keystroke that the user makes.

#### Scaled feedback

The example below illustrates a range of possible types of feedback in addition to success and error messages. In the example, the strength of the password is checked as it is typed by the user. The feedback indicates a scale of how strong the password is. The feedback is indicated using several cues, including color coding, a barometer, and label “Weak”, “Okay”, and “Strong”, as well as the time that would be needed to crack the password.

No data is sent using the following example input field. The password is shown in plain text for demonstration purposes.

Example:

Password: <span id="passwordmeter"></span> <span id="passwordmessage" aria-live="polite"></span>

[See commented example code in full.](../examples/password/)

### On focus change

In some cases, it does not make sense to check input as it is being typed by the user because it would display error messages most of the time. This is often the case when data needs to be entered in a particular format, such as a date.

In the example below, the user is expected to provide an expiry date. The input is checked when the user leaves the form field, for example, by using the tab key to move the focus to the next field or by clicking on another field.

Example:

Expiry date: <span id="expDesc3" aria-live="assertive"></span>

Submit

Code snippet:

    <div>
        <label for="expire"><strong></strong> Expiry date:</label>
        <input type="text" name="expire" id="expire" value="03.2015" aria-describedby="expDesc3">
        <span id="expDesc3" aria-live="assertive"></span>
    </div>

**Note:** The displayed message in this example is coded using a `<span>` element that has an `aria-live` attribute with the value `assertive`. The contents of this so called “live region” is conveyed to screen readers and other assistive technology. The value “assertive” emphasizes the importance of the message and causes screen readers to interrupt their current tasks to read aloud this message. Thus the message is read aloud before the next element that received the focus is announced to the user.

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [3.3.1 Error Identifications:](https://www.w3.org/WAI/WCAG21/quickref/#error-identification) If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text. (Level A)

-   [3.3.3 Error Suggestion:](https://www.w3.org/WAI/WCAG21/quickref/#error-suggestion) If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content. (Level AA)

**Techniques:**

-   [ARIA18: Using aria-alertdialog to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA18)
-   [ARIA19: Using ARIA role=alert or Live Regions to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19)
-   [ARIA21: Using Aria-Invalid to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21)
-   [G83: Providing text descriptions to identify required fields that were not completed](https://www.w3.org/WAI/WCAG21/Techniques/general/G83)
-   [G85: Providing a text description when user input falls outside the required format or values](https://www.w3.org/WAI/WCAG21/Techniques/general/G85)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Validating Input</span></span>](../validation/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Multi-page Forms</span></span>](../multi-page/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/forms/notifications.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Forms Tutorial
--------------

-   [<span class="count"></span><span class="txt">Forms Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Labeling Controls</span>](../labels/)
-   [<span class="count"></span><span class="txt">Grouping Controls</span>](../grouping/)
-   [<span class="count"></span><span class="txt">Form Instructions</span>](../instructions/)
-   [<span class="count"></span><span class="txt">Validating Input</span>](../validation/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>User Notifications</span></span>
-   [<span class="count"></span><span class="txt">Multi-page Forms</span>](../multi-page/)
-   [<span class="count"></span><span class="txt">Custom Controls</span>](../custom-controls/)

All Tutorials
-------------

-   [<span class="count"></span><span class="txt">Page Structure</span>](../../page-structure/)
-   [<span class="count"></span><span class="txt">Menus</span>](../../menus/)
-   [<span class="count"></span><span class="txt">Images</span>](../../images/)
-   [<span class="count"></span><span class="txt">Tables</span>](../../tables/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Forms</span></span>
-   [<span class="count"></span><span class="txt">Carousels</span>](../../carousels/)

Document Information
--------------------

**Feedback: We welcome ideas for improvements, bug reports, and comments** via [GitHub](https://github.com/w3c/wai-tutorials) or e-mail to <wai-eo-editors@w3.org> (a publicly archived list) or <wai@w3.org> (a WAI staff-only list).

-   **Status:** Updated 27 July 2019 (first published September 2014)
-   Editors:
    -   [Eric Eggert](https://www.w3.org/People/yatil/)
    -   [Shadi Abou-Zahra](https://www.w3.org/People/shadi/)

    Contributors:
    -   The Web Content Accessibility Guidelines Working Group ([WCAG WG](https://www.w3.org/WAI/GL/))
    -   the Education and Outreach Working Group ([EOWG](https://www.w3.org/WAI/EO/))

-   Developed with support from the [WAI-ACT project](https://www.w3.org/WAI/ACT/), co-funded by the **European Commission IST Programme**.
-   \[[<span class="count"></span><span class="txt">Attributions</span>](../../attributions/)\] \[[<span class="count"></span><span class="txt">Changelog</span>](../../changelog/)\]

\[[WAI Site Map](https://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)\] \[[Search](https://www.w3.org/WAI/search.php)\] \[[Contacting WAI](https://www.w3.org/WAI/contacts)\]

Copyright © 2019 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
