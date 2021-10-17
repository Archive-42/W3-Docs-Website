-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA8](ARIA8)
-   [Next Technique: ARIA10](ARIA10)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using aria-labelledby to concatenate a label from several text nodes
====================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to:

-   [Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) (Sufficient)
-   [Success Criterion 3.3.2: Labels or Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions) (Sufficient when used with [G131: Providing descriptive labels](../general/G131))

Description
-----------

The `aria-labelledby` property can be used to label all visual objects. Applied to inputs, the `aria-labelledby` property can be used to label native inputs as well as non-native elements, such as custom text inputs constructed with div contenteditable="true".

One particular use of `aria-labelledby` is for text inputs in situations where a meaningful label should consist of more than one label string.

Authors assign unique `id`s to the label strings to be concatenated as the label for the `input` element. The value of the `aria-labelledby` attribute is then a space-separated list of all `id`s in the order in which the label strings referenced should be read by screen readers. Supporting user agents will concatenate the label strings referenced and read them as one continuous label of the input.

The concatenation of label strings can be useful for different reasons. In example 1, an input is nested within the context of a full sentence. The desired screen reader output is "Extend time-out to \[ 20 \] minutes - edit with autocomplete, selected 20". Since the `id` of the text input is included in the string of `id`s referenced by aria-labelledby, the value of the input is included in the concatenated label at the right position.

Another application of `aria-labelledby` is when there is no space to provide a visible label next to the input, or when using native labels would create unnecessary redundancy. Here, the use `aria-labelledby` makes it possible to associate visible elements on the page as label for such inputs. This is demonstrated in example 2 where table column and row headings are concatenated into labels for the text input elements inside the table.

Note

The [ARIA accessible name and description calculation](https://www.w3.org/TR/html-aapi/#accessible-name-and-description-calculation) specifies that the string specified in `aria-labelledby` should replace rather than add to the content of the element that carries the property. So adding the `aria-labelledby` property to a native label should replace the text content inside that label unless the label itself is referenced as part of the sequence of `id`s in `aria-labelledby`.

Examples
--------

### Example 1: A time-out input field with concatenated label

A text input allows users to extend the default time before a time-out occurs.

The string "Extend time-out to" is contained in a native `label` element and is associated with the input with the input by id="timeout-duration" . This label is associated with this input using the for/id association only on user agents that don't support ARIA. On user agents that support ARIA, the for/id association is ignored and the label for the input is provided only by `aria-labelledby`, per the [accessible name and description calculation](https://www.w3.org/TR/html-aapi/#accessible-name-and-description-calculation) in the HTML to Platform Accessibility APIs Implementation Guide.

The `aria-labelledby` attribute on the text input references three elements: (1) the `span` containing the native label, (2) the text input containing the default text '20' (recall that this input is not labelled with the for/id associated label text), and (3) the string 'minutes' contained in a `span`. These elements should be concatenated to provide the full label for the text input

Note

The use of tabindex="-1" on the `span` element is not meant to support focusing by scripts - here, it merely serves to ensure that some browsers (IE9, IE10) will include the `span` element in the accessibility tree, thus making it available for reference by `aria-labelledby`. For more details see [Accessible HTML Elements](https://msdn.microsoft.com/en-us/library/ie/gg701963%28v=vs.85%29.aspx#Accessible_HTML_Elements)

    <form>
    <p><span id="timeout-label" tabindex="-1"><label for="timeout-duration">Extend time-out to</label></span>
    <input type="text" size="3" id="timeout-duration" value="20" 
        aria-labelledby="timeout-label timeout-duration timeout-unit">
    <span id="timeout-unit" tabindex="-1"> minutes</span></p>
    </form>

Working example, [Time-out input field with concatenated label](../../working-examples/aria-labelledby-time-out-input-concatenated-label/), adapted from Easy ARIA tip \#2: aria-labelledby and aria-describedby, an example put together by Marco Zehe.

### Example 2: A simple data table with text inputs

A simple data table containing text inputs. The input labels are concatenated through `aria-labelledby` referencing the respective column and row headers.

    <table>
        <tr>
            <td></td>
            <th id="tpayer">Taxpayer</th>
            <th id="sp">Spouse</th>
        </tr>

        <tr>
            <th id="gross">W2 Gross</th>
            <td><input type="text" size="20" aria-labelledby="tpayer gross" /></td>
            <td><input type="text" size="20" aria-labelledby="sp gross" /></td>
        </tr>
        
        <tr>
            <th id="div">Dividends</th>
            <td><input type="text" size="20" aria-labelledby="tpayer div" /></td>
            <td><input type="text" size="20" aria-labelledby="sp div" /></td>
        </tr>
    </table>

Working example, [Using aria-labelledby for simple table with text inputs](../../working-examples/aria-labelledby-table-text-inputs/), based on an example by Jim Thatcher.

### Example 3: A conference workshop booking table

A conference workshop booking table with two parallel tracks allows users to select the workshop they want to attend. When tabbing through the checkbox inputs in the table, the track (1 or 2), the title, and the speaker of the workshop followed by the adjacent checkbox label "Attend" are provided as concatenated label for the checkboxes via `aria-labelledby`.

Some browser / screen reader combinations (e.g. Mozilla Firefox and NVDA) will in addition speak the relevant table cell headers.

    <h1>Dinosaur Conference workshops timetable Thursday, 14.  & Friday, 15. March 2013</h1>
    <table>
    <caption>Dinosaur Conference workshop booking table</caption>
    <tbody><tr>
        <td rowspan="2"></td>
        <th colspan="2" scope="colgroup">Thursday</th>
        <th colspan="2" scope="colgroup">Friday</th>
    </tr>

    <tr>
        <th scope="col" id="am1">9 to 12 AM</th>
        <th scope="col" id="pm1">2 to 5 PM</th>
        <th scope="col" id="am2">9 to 12 AM</th>
        <th scope="col" id="pm2">2 to 5 PM</th>
    </tr>

    <tr>
        <th id="track1" scope="row">track 1</th>
        <td>
            <h2 id="title-TM1">The Paleozoic era </h2>
            <p>2 places left</p>
            <p><input type="checkbox" id="TM1" aria-labelledby="title-TM1 track1 am1 TM1-att">
                    <label id="TM1-att" for="TM1">Attend</label></p>
        </td>
        
        <td>
            <h2 id="title-TA1">The Mesozoic era overview</h2>
            <p>2 places left</p>
            <p><input type="checkbox" id="TA1" aria-labelledby="title-TA1 track1 am2 TA1-att">
                    <label id="TA1-att" for="TA1">Attend</label></p>
        </td>
        
        <td>
            <h2 id="title-FM1">The Triassic period, rise of the dinosaurs</h2>
            <p>1 place left</p>
            <p><input type="checkbox" id="FM1" aria-labelledby="title-FM1 track1 pm1 FM1-att">
                    <label id="FM1-att" for="FM1">Attend</label></p>

        </td>
        
        <td>
            <h2 id="title-FA1">The Jurassic period</h2>
            <p>11 places left</p>
            <p><input type="checkbox" id="FA1" aria-labelledby="title-FA1 track1 pm2 FA1-att">
                    <label id="FA1-att" for="FA1">Attend</label></p>
        </td>
    </tr>


    <tr>
        <th id="track2" scope="row">track 2</th>
        <td>
            <h2 id="title-TM2">The Cretaceous period</h2>
            <p>18 places left</p>
            <p><input type="checkbox" id="TM2" aria-labelledby="title-TM2 track2 am1 TM2-att">
                    <label id="TM2-att" for="TM2">Attend</label></p>
        </td>
        
        <td>
            <h2 id="title-TA2">The end of the dinosaurs</h2>
            <p>2 places left</p>
            <p><input type="checkbox" id="TA2" aria-labelledby="title-TA2 track2 am2 TA2-att">
                    <label id="TA2-att" for="TA2">Attend</label></p>
        </td>
        
        <td>
            <h2 id="title-FM2">First discoveries of dinosaurs</h2>
            <p>2 places left</p>
            <p><input type="checkbox" id="FM2" aria-labelledby="title-FM2 track2 pm1 FM2-att">
                    <label id="FM2-att" for="FM2">Attend</label></p>
        </td>
        
        <td>
            <h2 id="title-FA2">Emerging scholarship</h2>
            <p>19 places left</p>
            <p><input type="checkbox" id="FA2" aria-labelledby="title-FA2 track2 pm2 FA2-att">
                    <label id="FA2-att" for="FA2">Attend</label></p>
        </td>
    </tr>
    </tbody>
    </table>

Working example: [Conference workshop booking timetable](../../working-examples/aria-labelledby-workshop-booking-timetable/).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [HTML to Platform Accessibility APIs Implementation Guide: Accessible Name and Description Calculation](https://www.w3.org/TR/html-aapi/#accessible-name-and-description-calculation)
-   [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/)
-   [Using WAI-ARIA in HTML](https://www.w3.org/TR/aria-in-html/): Section 2.7 aria-labelledby and aria-describedby

Related Techniques
------------------

-   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6)
-   [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

Tests
-----

### Procedure

For inputs that use `aria-labelledby`:

1.  Check that `id`s referenced in `aria-labelledby` are unique and match the `id`s of the text nodes that together provide the label
2.  Check that the concatenated content of elements referenced by `aria-labelledby` is descriptive for the purpose or function of the element labeled

### Expected Results

-   \#1 and \#2 are true.

    If this is a sufficient technique for a success criterion, failing this test procedure does not necessarily mean that the success criterion has not been satisfied in some other way, only that this technique has not been successfully implemented and can not be used to claim conformance.
