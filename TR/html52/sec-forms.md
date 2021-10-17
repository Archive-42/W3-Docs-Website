HTML Standard

<a href="https://whatwg.org/" class="logo"><img src="https://resources.whatwg.org/logo.svg" alt="WHATWG" width="100" height="100" /></a>

HTML
====

Living Standard — Last Updated <span class="pubdate">15 October 2021</span>
---------------------------------------------------------------------------

[← 4.9 Tabular data](tables.html) — [Table of Contents](./) — [4.10.5 The input element →](input.html)

1.  1.  [<span class="secno">4.10</span> Forms](forms.html#forms)
        1.  [<span class="secno">4.10.1</span> Introduction](forms.html#introduction-4)
            1.  [<span class="secno">4.10.1.1</span> Writing a form's user interface](forms.html#writing-a-form's-user-interface)
            2.  [<span class="secno">4.10.1.2</span> Implementing the server-side processing for a form](forms.html#implementing-the-server-side-processing-for-a-form)
            3.  [<span class="secno">4.10.1.3</span> Configuring a form to communicate with a server](forms.html#configuring-a-form-to-communicate-with-a-server)
            4.  [<span class="secno">4.10.1.4</span> Client-side form validation](forms.html#client-side-form-validation)
            5.  [<span class="secno">4.10.1.5</span> Enabling client-side automatic filling of form controls](forms.html#enabling-client-side-automatic-filling-of-form-controls)
            6.  [<span class="secno">4.10.1.6</span> Improving the user experience on mobile devices](forms.html#improving-the-user-experience-on-mobile-devices)
            7.  [<span class="secno">4.10.1.7</span> The difference between the field type, the autofill field name, and the input modality](forms.html#the-difference-between-the-field-type,-the-autofill-field-name,-and-the-input-modality)
            8.  [<span class="secno">4.10.1.8</span> Date, time, and number formats](forms.html#input-author-notes)
        2.  [<span class="secno">4.10.2</span> Categories](forms.html#categories)
        3.  [<span class="secno">4.10.3</span> The `form` element](forms.html#the-form-element)
        4.  [<span class="secno">4.10.4</span> The `label` element](forms.html#the-label-element)

### <span class="secno">4.10</span> Forms<a href="#forms" class="self-link"></a>

**✔**MDN

[Element\#Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Forms "This page lists all the HTML elements, which are created using tags.")

Support in all current engines.

<span class="firefox yes">Firefox4+</span><span class="safari yes">Safari4+</span><span class="chrome yes">Chrome61+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera52+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)16+</span><span class="ie yes">Internet Explorer10+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android5+</span><span class="safari_ios yes">Safari iOS3.2+</span><span class="chrome_android yes">Chrome Android61+</span><span class="webview_android yes">WebView Android61+</span><span class="samsunginternet_android yes">Samsung Internet8.0+</span><span class="opera_android yes">Opera Android47+</span>

#### <span class="secno">4.10.1</span> Introduction<a href="#introduction-4" class="self-link"></a>

*This section is non-normative.*

A form is a component of a web page that has form controls, such as text, buttons, checkboxes, range, or color picker controls. A user can interact with such a form, providing data that can then be sent to the server for further processing (e.g. returning the results of a search or calculation). No client-side scripting is needed in many cases, though an API is available so that scripts can augment the user experience or use forms for purposes other than submitting data to a server.

Writing a form consists of several steps, which can be performed in any order: writing the user interface, implementing the server-side processing, and configuring the user interface to communicate with the server.

##### <span class="secno">4.10.1.1</span> Writing a form's user interface<a href="#writing-a-form&#39;s-user-interface" class="self-link"></a>

*This section is non-normative.*

For the purposes of this brief introduction, we will create a pizza ordering form.

Any form starts with a `form` element, inside which are placed the controls. Most controls are represented by the `input` element, which by default provides a text control. To label a control, the `label` element is used; the label text and the control itself go inside the `label` element. Each part of a form is considered a <a href="dom.html#paragraph" id="writing-a-form&#39;s-user-interface:paragraph">paragraph</a>, and is typically separated from other parts using `p` elements. Putting this together, here is how one might ask for the customer's name:

    <form>
     <p><label>Customer name: <input></label></p>
    </form>

To let the user select the size of the pizza, we can use a set of radio buttons. Radio buttons also use the `input` element, this time with a `type` attribute with the value `radio`. To make the radio buttons work as a group, they are given a common name using the `name` attribute. To group a batch of controls together, such as, in this case, the radio buttons, one can use the `fieldset` element. The title of such a group of controls is given by the first element in the `fieldset`, which has to be a `legend` element.

    <form>
     <p><label>Customer name: <input></label></p>
     <fieldset>
      <legend> Pizza Size </legend>
      <p><label> <input type=radio name=size> Small </label></p>
      <p><label> <input type=radio name=size> Medium </label></p>
      <p><label> <input type=radio name=size> Large </label></p>
     </fieldset>
    </form>

Changes from the previous step are highlighted.

To pick toppings, we can use checkboxes. These use the `input` element with a `type` attribute with the value `checkbox`:

    <form>
     <p><label>Customer name: <input></label></p>
     <fieldset>
      <legend> Pizza Size </legend>
      <p><label> <input type=radio name=size> Small </label></p>
      <p><label> <input type=radio name=size> Medium </label></p>
      <p><label> <input type=radio name=size> Large </label></p>
     </fieldset>
     <fieldset>
      <legend> Pizza Toppings </legend>
      <p><label> <input type=checkbox> Bacon </label></p>
      <p><label> <input type=checkbox> Extra Cheese </label></p>
      <p><label> <input type=checkbox> Onion </label></p>
      <p><label> <input type=checkbox> Mushroom </label></p>
     </fieldset>
    </form>

The pizzeria for which this form is being written is always making mistakes, so it needs a way to contact the customer. For this purpose, we can use form controls specifically for telephone numbers (`input` elements with their `type` attribute set to `tel`) and email addresses (`input` elements with their `type` attribute set to `email`):

    <form>
     <p><label>Customer name: <input></label></p>
     <p><label>Telephone: <input type=tel></label></p>
     <p><label>Email address: <input type=email></label></p>
     <fieldset>
      <legend> Pizza Size </legend>
      <p><label> <input type=radio name=size> Small </label></p>
      <p><label> <input type=radio name=size> Medium </label></p>
      <p><label> <input type=radio name=size> Large </label></p>
     </fieldset>
     <fieldset>
      <legend> Pizza Toppings </legend>
      <p><label> <input type=checkbox> Bacon </label></p>
      <p><label> <input type=checkbox> Extra Cheese </label></p>
      <p><label> <input type=checkbox> Onion </label></p>
      <p><label> <input type=checkbox> Mushroom </label></p>
     </fieldset>
    </form>

We can use an `input` element with its `type` attribute set to `time` to ask for a delivery time. Many of these form controls have attributes to control exactly what values can be specified; in this case, three attributes of particular interest are `min`, `max`, and `step`. These set the minimum time, the maximum time, and the interval between allowed values (in seconds). This pizzeria only delivers between 11am and 9pm, and doesn't promise anything better than 15 minute increments, which we can mark up as follows:

    <form>
     <p><label>Customer name: <input></label></p>
     <p><label>Telephone: <input type=tel></label></p>
     <p><label>Email address: <input type=email></label></p>
     <fieldset>
      <legend> Pizza Size </legend>
      <p><label> <input type=radio name=size> Small </label></p>
      <p><label> <input type=radio name=size> Medium </label></p>
      <p><label> <input type=radio name=size> Large </label></p>
     </fieldset>
     <fieldset>
      <legend> Pizza Toppings </legend>
      <p><label> <input type=checkbox> Bacon </label></p>
      <p><label> <input type=checkbox> Extra Cheese </label></p>
      <p><label> <input type=checkbox> Onion </label></p>
      <p><label> <input type=checkbox> Mushroom </label></p>
     </fieldset>
     <p><label>Preferred delivery time: <input type=time min="11:00" max="21:00" step="900"></label></p>
    </form>

The `textarea` element can be used to provide a multiline text control. In this instance, we are going to use it to provide a space for the customer to give delivery instructions:

    <form>
     <p><label>Customer name: <input></label></p>
     <p><label>Telephone: <input type=tel></label></p>
     <p><label>Email address: <input type=email></label></p>
     <fieldset>
      <legend> Pizza Size </legend>
      <p><label> <input type=radio name=size> Small </label></p>
      <p><label> <input type=radio name=size> Medium </label></p>
      <p><label> <input type=radio name=size> Large </label></p>
     </fieldset>
     <fieldset>
      <legend> Pizza Toppings </legend>
      <p><label> <input type=checkbox> Bacon </label></p>
      <p><label> <input type=checkbox> Extra Cheese </label></p>
      <p><label> <input type=checkbox> Onion </label></p>
      <p><label> <input type=checkbox> Mushroom </label></p>
     </fieldset>
     <p><label>Preferred delivery time: <input type=time min="11:00" max="21:00" step="900"></label></p>
     <p><label>Delivery instructions: <textarea></textarea></label></p>
    </form>

Finally, to make the form submittable we use the `button` element:

    <form>
     <p><label>Customer name: <input></label></p>
     <p><label>Telephone: <input type=tel></label></p>
     <p><label>Email address: <input type=email></label></p>
     <fieldset>
      <legend> Pizza Size </legend>
      <p><label> <input type=radio name=size> Small </label></p>
      <p><label> <input type=radio name=size> Medium </label></p>
      <p><label> <input type=radio name=size> Large </label></p>
     </fieldset>
     <fieldset>
      <legend> Pizza Toppings </legend>
      <p><label> <input type=checkbox> Bacon </label></p>
      <p><label> <input type=checkbox> Extra Cheese </label></p>
      <p><label> <input type=checkbox> Onion </label></p>
      <p><label> <input type=checkbox> Mushroom </label></p>
     </fieldset>
     <p><label>Preferred delivery time: <input type=time min="11:00" max="21:00" step="900"></label></p>
     <p><label>Delivery instructions: <textarea></textarea></label></p>
     <p><button>Submit order</button></p>
    </form>

##### <span class="secno">4.10.1.2</span> Implementing the server-side processing for a form<a href="#implementing-the-server-side-processing-for-a-form" class="self-link"></a>

*This section is non-normative.*

The exact details for writing a server-side processor are out of scope for this specification. For the purposes of this introduction, we will assume that the script at `https://pizza.example.com/order.cgi` is configured to accept submissions using the `application/x-www-form-urlencoded` format, expecting the following parameters sent in an HTTP POST body:

`custname`  
Customer's name

`custtel`  
Customer's telephone number

`custemail`  
Customer's email address

`size`  
The pizza size, either `small`, `medium`, or `large`

`topping`  
A topping, specified once for each selected topping, with the allowed values being `bacon`, `cheese`, `onion`, and `mushroom`

`delivery`  
The requested delivery time

`comments`  
The delivery instructions

##### <span class="secno">4.10.1.3</span> Configuring a form to communicate with a server<a href="#configuring-a-form-to-communicate-with-a-server" class="self-link"></a>

*This section is non-normative.*

Form submissions are exposed to servers in a variety of ways, most commonly as HTTP GET or POST requests. To specify the exact method used, the `method` attribute is specified on the `form` element. This doesn't specify how the form data is encoded, though; to specify that, you use the `enctype` attribute. You also have to specify the <a href="https://url.spec.whatwg.org/#concept-url" id="configuring-a-form-to-communicate-with-a-server:url">URL</a> of the service that will handle the submitted data, using the `action` attribute.

For each form control you want submitted, you then have to give a name that will be used to refer to the data in the submission. We already specified the name for the group of radio buttons; the same attribute (`name`) also specifies the submission name. Radio buttons can be distinguished from each other in the submission by giving them different values, using the `value` attribute.

Multiple controls can have the same name; for example, here we give all the checkboxes the same name, and the server distinguishes which checkbox was checked by seeing which values are submitted with that name — like the radio buttons, they are also given unique values with the `value` attribute.

Given the settings in the previous section, this all becomes:

    <form method="post"
          enctype="application/x-www-form-urlencoded"
          action="https://pizza.example.com/order.cgi">
     <p><label>Customer name: <input name="custname"></label></p>
     <p><label>Telephone: <input type=tel name="custtel"></label></p>
     <p><label>Email address: <input type=email name="custemail"></label></p>
     <fieldset>
      <legend> Pizza Size </legend>
      <p><label> <input type=radio name=size value="small"> Small </label></p>
      <p><label> <input type=radio name=size value="medium"> Medium </label></p>
      <p><label> <input type=radio name=size value="large"> Large </label></p>
     </fieldset>
     <fieldset>
      <legend> Pizza Toppings </legend>
      <p><label> <input type=checkbox name="topping" value="bacon"> Bacon </label></p>
      <p><label> <input type=checkbox name="topping" value="cheese"> Extra Cheese </label></p>
      <p><label> <input type=checkbox name="topping" value="onion"> Onion </label></p>
      <p><label> <input type=checkbox name="topping" value="mushroom"> Mushroom </label></p>
     </fieldset>
     <p><label>Preferred delivery time: <input type=time min="11:00" max="21:00" step="900" name="delivery"></label></p>
     <p><label>Delivery instructions: <textarea name="comments"></textarea></label></p>
     <p><button>Submit order</button></p>
    </form>

There is no particular significance to the way some of the attributes have their values quoted and others don't. The HTML syntax allows a variety of equally valid ways to specify attributes, as discussed <a href="syntax.html#syntax-attributes" id="configuring-a-form-to-communicate-with-a-server:syntax-attributes">in the syntax section</a>.

For example, if the customer entered "Denise Lawrence" as their name, "555-321-8642" as their telephone number, did not specify an email address, asked for a medium-sized pizza, selected the Extra Cheese and Mushroom toppings, entered a delivery time of 7pm, and left the delivery instructions text control blank, the user agent would submit the following to the online web service:

    custname=Denise+Lawrence&custtel=555-321-8642&custemail=&size=medium&topping=cheese&topping=mushroom&delivery=19%3A00&comments=

##### <span class="secno">4.10.1.4</span> Client-side form validation<a href="#client-side-form-validation" class="self-link"></a>

**✔**MDN

[Form\_validation](https://developer.mozilla.org/en-US/docs/Web/Forms/Form_validation "Client-side form validation sometimes requires JavaScript if you want to customize styling and error messages, but it always requires you to think carefully about the user. Always remember to help your users correct the data they provide. To that end, be sure to:")

Support in all current engines.

<span class="firefox yes">Firefox4+</span><span class="safari yes">Safari5+</span><span class="chrome yes">Chrome4+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera≤12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer10+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS4+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android≤37+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android≤12.1+</span>

*This section is non-normative.*

Forms can be annotated in such a way that the user agent will check the user's input before the form is submitted. The server still has to verify the input is valid (since hostile users can easily bypass the form validation), but it allows the user to avoid the wait incurred by having the server be the sole checker of the user's input.

The simplest annotation is the `required` attribute, which can be specified on `input` elements to indicate that the form is not to be submitted until a value is given. By adding this attribute to the customer name, pizza size, and delivery time fields, we allow the user agent to notify the user when the user submits the form without filling in those fields:

    <form method="post"
          enctype="application/x-www-form-urlencoded"
          action="https://pizza.example.com/order.cgi">
     <p><label>Customer name: <input name="custname" required></label></p>
     <p><label>Telephone: <input type=tel name="custtel"></label></p>
     <p><label>Email address: <input type=email name="custemail"></label></p>
     <fieldset>
      <legend> Pizza Size </legend>
      <p><label> <input type=radio name=size required value="small"> Small </label></p>
      <p><label> <input type=radio name=size required value="medium"> Medium </label></p>
      <p><label> <input type=radio name=size required value="large"> Large </label></p>
     </fieldset>
     <fieldset>
      <legend> Pizza Toppings </legend>
      <p><label> <input type=checkbox name="topping" value="bacon"> Bacon </label></p>
      <p><label> <input type=checkbox name="topping" value="cheese"> Extra Cheese </label></p>
      <p><label> <input type=checkbox name="topping" value="onion"> Onion </label></p>
      <p><label> <input type=checkbox name="topping" value="mushroom"> Mushroom </label></p>
     </fieldset>
     <p><label>Preferred delivery time: <input type=time min="11:00" max="21:00" step="900" name="delivery" required></label></p>
     <p><label>Delivery instructions: <textarea name="comments"></textarea></label></p>
     <p><button>Submit order</button></p>
    </form>

It is also possible to limit the length of the input, using the `maxlength` attribute. By adding this to the `textarea` element, we can limit users to 1000 characters, preventing them from writing huge essays to the busy delivery drivers instead of staying focused and to the point:

    <form method="post"
          enctype="application/x-www-form-urlencoded"
          action="https://pizza.example.com/order.cgi">
     <p><label>Customer name: <input name="custname" required></label></p>
     <p><label>Telephone: <input type=tel name="custtel"></label></p>
     <p><label>Email address: <input type=email name="custemail"></label></p>
     <fieldset>
      <legend> Pizza Size </legend>
      <p><label> <input type=radio name=size required value="small"> Small </label></p>
      <p><label> <input type=radio name=size required value="medium"> Medium </label></p>
      <p><label> <input type=radio name=size required value="large"> Large </label></p>
     </fieldset>
     <fieldset>
      <legend> Pizza Toppings </legend>
      <p><label> <input type=checkbox name="topping" value="bacon"> Bacon </label></p>
      <p><label> <input type=checkbox name="topping" value="cheese"> Extra Cheese </label></p>
      <p><label> <input type=checkbox name="topping" value="onion"> Onion </label></p>
      <p><label> <input type=checkbox name="topping" value="mushroom"> Mushroom </label></p>
     </fieldset>
     <p><label>Preferred delivery time: <input type=time min="11:00" max="21:00" step="900" name="delivery" required></label></p>
     <p><label>Delivery instructions: <textarea name="comments" maxlength=1000></textarea></label></p>
     <p><button>Submit order</button></p>
    </form>

When a form is submitted, `invalid` events are fired at each form control that is invalid. This can be useful for displaying a summary of the problems with the form, since typically the browser itself will only report one problem at a time.

##### <span class="secno">4.10.1.5</span> Enabling client-side automatic filling of form controls<a href="#enabling-client-side-automatic-filling-of-form-controls" class="self-link"></a>

*This section is non-normative.*

Some browsers attempt to aid the user by automatically filling form controls rather than having the user reenter their information each time. For example, a field asking for the user's telephone number can be automatically filled with the user's phone number.

To help the user agent with this, the `autocomplete` attribute can be used to describe the field's purpose. In the case of this form, we have three fields that can be usefully annotated in this way: the information about who the pizza is to be delivered to. Adding this information looks like this:

    <form method="post"
          enctype="application/x-www-form-urlencoded"
          action="https://pizza.example.com/order.cgi">
     <p><label>Customer name: <input name="custname" required autocomplete="shipping name"></label></p>
     <p><label>Telephone: <input type=tel name="custtel" autocomplete="shipping tel"></label></p>
     <p><label>Email address: <input type=email name="custemail" autocomplete="shipping email"></label></p>
     <fieldset>
      <legend> Pizza Size </legend>
      <p><label> <input type=radio name=size required value="small"> Small </label></p>
      <p><label> <input type=radio name=size required value="medium"> Medium </label></p>
      <p><label> <input type=radio name=size required value="large"> Large </label></p>
     </fieldset>
     <fieldset>
      <legend> Pizza Toppings </legend>
      <p><label> <input type=checkbox name="topping" value="bacon"> Bacon </label></p>
      <p><label> <input type=checkbox name="topping" value="cheese"> Extra Cheese </label></p>
      <p><label> <input type=checkbox name="topping" value="onion"> Onion </label></p>
      <p><label> <input type=checkbox name="topping" value="mushroom"> Mushroom </label></p>
     </fieldset>
     <p><label>Preferred delivery time: <input type=time min="11:00" max="21:00" step="900" name="delivery" required></label></p>
     <p><label>Delivery instructions: <textarea name="comments" maxlength=1000></textarea></label></p>
     <p><button>Submit order</button></p>
    </form>

##### <span class="secno">4.10.1.6</span> Improving the user experience on mobile devices<a href="#improving-the-user-experience-on-mobile-devices" class="self-link"></a>

*This section is non-normative.*

Some devices, in particular those with virtual keyboards can provide the user with multiple input modalities. For example, when typing in a credit card number the user may wish to only see keys for digits 0-9, while when typing in their name they may wish to see a form field that by default capitalizes each word.

Using the `inputmode` attribute we can select appropriate input modalities:

    <form method="post"
          enctype="application/x-www-form-urlencoded"
          action="https://pizza.example.com/order.cgi">
     <p><label>Customer name: <input name="custname" required autocomplete="shipping name"></label></p>
     <p><label>Telephone: <input type=tel name="custtel" autocomplete="shipping tel"></label></p>
     <p><label>Buzzer code: <input name="custbuzz" inputmode="numeric"></label></p>
     <p><label>Email address: <input type=email name="custemail" autocomplete="shipping email"></label></p>
     <fieldset>
      <legend> Pizza Size </legend>
      <p><label> <input type=radio name=size required value="small"> Small </label></p>
      <p><label> <input type=radio name=size required value="medium"> Medium </label></p>
      <p><label> <input type=radio name=size required value="large"> Large </label></p>
     </fieldset>
     <fieldset>
      <legend> Pizza Toppings </legend>
      <p><label> <input type=checkbox name="topping" value="bacon"> Bacon </label></p>
      <p><label> <input type=checkbox name="topping" value="cheese"> Extra Cheese </label></p>
      <p><label> <input type=checkbox name="topping" value="onion"> Onion </label></p>
      <p><label> <input type=checkbox name="topping" value="mushroom"> Mushroom </label></p>
     </fieldset>
     <p><label>Preferred delivery time: <input type=time min="11:00" max="21:00" step="900" name="delivery" required></label></p>
     <p><label>Delivery instructions: <textarea name="comments" maxlength=1000></textarea></label></p>
     <p><button>Submit order</button></p>
    </form>

##### <span class="secno">4.10.1.7</span> The difference between the field type, the autofill field name, and the input modality<a href="#the-difference-between-the-field-type,-the-autofill-field-name,-and-the-input-modality" class="self-link"></a>

*This section is non-normative.*

The `type`, `autocomplete`, and `inputmode` attributes can seem confusingly similar. For instance, in all three cases, the string "`email`" is a valid value. This section attempts to illustrate the difference between the three attributes and provides advice suggesting how to use them.

The `type` attribute on `input` elements decides what kind of control the user agent will use to expose the field. Choosing between different values of this attribute is the same choice as choosing whether to use an `input` element, a `textarea` element, a `select` element, etc.

The `autocomplete` attribute, in contrast, describes what the value that the user will enter actually represents. Choosing between different values of this attribute is the same choice as choosing what the label for the element will be.

First, consider telephone numbers. If a page is asking for a telephone number from the user, the right form control to use is `<input type=tel>`. However, which `autocomplete` value to use depends on which phone number the page is asking for, whether they expect a telephone number in the international format or just the local format, and so forth.

For example, a page that forms part of a checkout process on an e-commerce site for a customer buying a gift to be shipped to a friend might need both the buyer's telephone number (in case of payment issues) and the friend's telephone number (in case of delivery issues). If the site expects international phone numbers (with the country code prefix), this could thus look like this:

    <p><label>Your phone number: <input type=tel name=custtel autocomplete="billing tel"></label>
    <p><label>Recipient's phone number: <input type=tel name=shiptel autocomplete="shipping tel"></label>
    <p>Please enter complete phone numbers including the country code prefix, as in "+1 555 123 4567".

But if the site only supports British customers and recipients, it might instead look like this (notice the use of `tel-national` rather than `tel`):

    <p><label>Your phone number: <input type=tel name=custtel autocomplete="billing tel-national"></label>
    <p><label>Recipient's phone number: <input type=tel name=shiptel autocomplete="shipping tel-national"></label>
    <p>Please enter complete UK phone numbers, as in "(01632) 960 123".

Now, consider a person's preferred languages. The right `autocomplete` value is `language`. However, there could be a number of different form controls used for the purpose: a text control (`<input type=text>`), a drop-down list (`<select>`), radio buttons (`<input   type=radio>`), etc. It only depends on what kind of interface is desired.

Finally, consider names. If a page just wants one name from the user, then the relevant control is `<input type=text>`. If the page is asking for the user's full name, then the relevant `autocomplete` value is `name`.

    <p><label>Japanese name: <input name="j" type="text" autocomplete="section-jp name"></label>
    <label>Romanized name: <input name="e" type="text" autocomplete="section-en name"></label>

In this example, the "`section-*`" keywords in the `autocomplete` attributes' values tell the user agent that the two fields expect *different* names. Without them, the user agent could automatically fill the second field with the value given in the first field when the user gave a value to the first field.

The "`-jp`" and "`-en`" parts of the keywords are opaque to the user agent; the user agent cannot guess, from those, that the two names are expected to be in Japanese and English respectively.

Separate from the choices regarding `type` and `autocomplete`, the `inputmode` attribute decides what kind of input modality (e.g., virtual keyboard) to use, when the control is a text control.

Consider credit card numbers. The appropriate input type is *not* `<input type=number>`, [as explained below](input.html#when-number-is-not-appropriate); it is instead `<input type=text>`. To encourage the user agent to use a numeric input modality anyway (e.g., a virtual keyboard displaying only digits), the page would use

    <p><label>Credit card number:
                    <input name="cc" type="text" inputmode="numeric" pattern="[0-9]{8,19}" autocomplete="cc-number">
    </label></p>

##### <span class="secno">4.10.1.8</span> Date, time, and number formats<a href="#input-author-notes" class="self-link"></a>

*This section is non-normative.*

In this pizza delivery example, the times are specified in the format "HH:MM": two digits for the hour, in 24-hour format, and two digits for the time. (Seconds could also be specified, though they are not necessary in this example.)

In some locales, however, times are often expressed differently when presented to users. For example, in the United States, it is still common to use the 12-hour clock with an am/pm indicator, as in "2pm". In France, it is common to separate the hours from the minutes using an "h" character, as in "14h00".

Similar issues exist with dates, with the added complication that even the order of the components is not always consistent — for example, in Cyprus the first of February 2003 would typically be written "1/2/03", while that same date in Japan would typically be written as "2003年02月01日" — and even with numbers, where locales differ, for example, in what punctuation is used as the decimal separator and the thousands separator.

It is therefore important to distinguish the time, date, and number formats used in HTML and in form submissions, which are always the formats defined in this specification (and based on the well-established ISO 8601 standard for computer-readable date and time formats), from the time, date, and number formats presented to the user by the browser and accepted as input from the user by the browser.

The format used "on the wire", i.e., in HTML markup and in form submissions, is intended to be computer-readable and consistent irrespective of the user's locale. Dates, for instance, are always written in the format "YYYY-MM-DD", as in "2003-02-01". While some users might see this format, others might see it as "01.02.2003" or "February 1, 2003".

The time, date, or number given by the page in the wire format is then translated to the user's preferred presentation (based on user preferences or on the locale of the page itself), before being displayed to the user. Similarly, after the user inputs a time, date, or number using their preferred format, the user agent converts it back to the wire format before putting it in the DOM or submitting it.

This allows scripts in pages and on servers to process times, dates, and numbers in a consistent manner without needing to support dozens of different formats, while still supporting the users' needs.

See also the [implementation notes](input.html#input-impl-notes) regarding localization of form controls.

#### <span class="secno">4.10.2</span> Categories<a href="#categories" class="self-link"></a>

Mostly for historical reasons, elements in this section fall into several overlapping (but subtly different) categories in addition to the usual ones like <a href="dom.html#flow-content-2" id="categories:flow-content-2">flow content</a>, <a href="dom.html#phrasing-content-2" id="categories:phrasing-content-2">phrasing content</a>, and <a href="dom.html#interactive-content-2" id="categories:interactive-content-2">interactive content</a>.

A number of the elements are form-associated elements, which means they can have a <a href="form-control-infrastructure.html#form-owner" id="categories:form-owner">form owner</a>.

-   `button`
-   `fieldset`
-   `input`
-   `object`
-   `output`
-   `select`
-   `textarea`
-   `img`
-   <a href="custom-elements.html#form-associated-custom-element" id="categories:form-associated-custom-element">form-associated custom elements</a>

The <a href="#form-associated-element" id="categories:form-associated-element">form-associated elements</a> fall into several subcategories:

Listed elements  
Denotes elements that are listed in the `form.elements` and `fieldset.elements` APIs. These elements also have a `form` content attribute, and a matching `form` IDL attribute, that allow authors to specify an explicit <a href="form-control-infrastructure.html#form-owner" id="categories:form-owner-2">form owner</a>.

-   `button`
-   `fieldset`
-   `input`
-   `object`
-   `output`
-   `select`
-   `textarea`
-   <a href="custom-elements.html#form-associated-custom-element" id="categories:form-associated-custom-element-2">form-associated custom elements</a>

Submittable elements  
Denotes elements that can be used for <a href="form-control-infrastructure.html#constructing-the-form-data-set" id="categories:constructing-the-form-data-set">constructing the entry list</a> when a `form` element is <a href="form-control-infrastructure.html#concept-form-submit" id="categories:concept-form-submit">submitted</a>.

-   `button`
-   `input`
-   `select`
-   `textarea`
-   <a href="custom-elements.html#form-associated-custom-element" id="categories:form-associated-custom-element-3">form-associated custom elements</a>

Some <a href="#category-submit" id="categories:category-submit">submittable elements</a> can be, depending on their attributes, buttons. The prose below defines when an element is a button. Some buttons are specifically submit buttons.

Resettable elements  
Denotes elements that can be affected when a `form` element is <a href="form-control-infrastructure.html#concept-form-reset" id="categories:concept-form-reset">reset</a>.

-   `input`
-   `output`
-   `select`
-   `textarea`
-   <a href="custom-elements.html#form-associated-custom-element" id="categories:form-associated-custom-element-4">form-associated custom elements</a>

Autocapitalize-inheriting elements  
Denotes elements that inherit the `autocapitalize` attribute from their <a href="form-control-infrastructure.html#form-owner" id="categories:form-owner-3">form owner</a>.

-   `button`
-   `fieldset`
-   `input`
-   `output`
-   `select`
-   `textarea`

Some elements, not all of them <a href="#form-associated-element" id="categories:form-associated-element-2">form-associated</a>, are categorized as labelable elements. These are elements that can be associated with a `label` element.

-   `button`
-   `input` (if the `type` attribute is *not* in the <a href="input.html#hidden-state-(type=hidden)" id="categories:hidden-state-(type=hidden)">Hidden</a> state)
-   `meter`
-   `output`
-   `progress`
-   `select`
-   `textarea`
-   <a href="custom-elements.html#form-associated-custom-element" id="categories:form-associated-custom-element-5">form-associated custom elements</a>

#### <span class="secno">4.10.3</span> The `form` element<a href="#the-form-element" class="self-link"></a>

**✔**MDN

[Element/form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The <form> HTML element represents a document section containing interactive controls for submitting information.")

Support in all current engines.

<span class="firefox yes">FirefoxYes</span><span class="safari yes">SafariYes</span><span class="chrome yes">ChromeYes</span>

------------------------------------------------------------------------

<span class="opera yes">OperaYes</span><span class="edge_blink yes">EdgeYes</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet ExplorerYes</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox AndroidYes</span><span class="safari_ios yes">Safari iOSYes</span><span class="chrome_android yes">Chrome AndroidYes</span><span class="webview_android yes">WebView AndroidYes</span><span class="samsunginternet_android yes">Samsung InternetYes</span><span class="opera_android yes">Opera AndroidYes</span>

**✔**MDN

[HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement "The HTMLFormElement interface represents a <form> element in the DOM. It allows access to—and, in some cases, modification of—aspects of the form, as well as access to its component elements.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera8+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android10.1+</span>

<a href="dom.html#concept-element-categories" id="the-form-element:concept-element-categories">Categories</a>:  
<a href="dom.html#flow-content-2" id="the-form-element:flow-content-2">Flow content</a>.

<a href="dom.html#palpable-content-2" id="the-form-element:palpable-content-2">Palpable content</a>.

<a href="dom.html#concept-element-contexts" id="the-form-element:concept-element-contexts">Contexts in which this element can be used</a>:  
Where <a href="dom.html#flow-content-2" id="the-form-element:flow-content-2-2">flow content</a> is expected.

<a href="dom.html#concept-element-content-model" id="the-form-element:concept-element-content-model">Content model</a>:  
<a href="dom.html#flow-content-2" id="the-form-element:flow-content-2-3">Flow content</a>, but with no `form` element descendants.

<a href="dom.html#concept-element-tag-omission" id="the-form-element:concept-element-tag-omission">Tag omission in text/html</a>:  
Neither tag is omissible.

<a href="dom.html#concept-element-attributes" id="the-form-element:concept-element-attributes">Content attributes</a>:  
<a href="dom.html#global-attributes" id="the-form-element:global-attributes">Global attributes</a>

`accept-charset` — Character encodings to use for <a href="form-control-infrastructure.html#form-submission-2" id="the-form-element:form-submission-2">form submission</a>

`action` — <a href="https://url.spec.whatwg.org/#concept-url" id="the-form-element:url">URL</a> to use for <a href="form-control-infrastructure.html#form-submission-2" id="the-form-element:form-submission-2-2">form submission</a>

`autocomplete` — Default setting for autofill feature for controls in the form

`enctype` — Entry list encoding type to use for <a href="form-control-infrastructure.html#form-submission-2" id="the-form-element:form-submission-2-3">form submission</a>

`method` — Variant to use for <a href="form-control-infrastructure.html#form-submission-2" id="the-form-element:form-submission-2-4">form submission</a>

`name` — Name of form to use in the `document.forms` API

`novalidate` — Bypass form control validation for <a href="form-control-infrastructure.html#form-submission-2" id="the-form-element:form-submission-2-5">form submission</a>

`target` — <a href="browsers.html#browsing-context" id="the-form-element:browsing-context">Browsing context</a> for <a href="form-control-infrastructure.html#form-submission-2" id="the-form-element:form-submission-2-6">form submission</a>

`rel`

<a href="dom.html#concept-element-accessibility-considerations" id="the-form-element:concept-element-accessibility-considerations">Accessibility considerations</a>:  
[For authors](https://w3c.github.io/html-aria/#el-form).

[For implementers](https://w3c.github.io/html-aam/#el-form).

<a href="dom.html#concept-element-dom" id="the-form-element:concept-element-dom">DOM interface</a>:  
    [Exposed=Window,
     LegacyOverrideBuiltIns,
     LegacyUnenumerableNamedProperties]
    interface HTMLFormElement : HTMLElement {
      [HTMLConstructor] constructor();

      [CEReactions] attribute DOMString acceptCharset;
      [CEReactions] attribute USVString action;
      [CEReactions] attribute DOMString autocomplete;
      [CEReactions] attribute DOMString enctype;
      [CEReactions] attribute DOMString encoding;
      [CEReactions] attribute DOMString method;
      [CEReactions] attribute DOMString name;
      [CEReactions] attribute boolean noValidate;
      [CEReactions] attribute DOMString target;
      [CEReactions] attribute DOMString rel;
      [SameObject, PutForwards=value] readonly attribute DOMTokenList relList;

      [SameObject] readonly attribute HTMLFormControlsCollection elements;
      readonly attribute unsigned long length;
      getter Element (unsigned long index);
      getter (RadioNodeList or Element) (DOMString name);

      undefined submit();
      undefined requestSubmit(optional HTMLElement? submitter = null);
      [CEReactions] undefined reset();
      boolean checkValidity();
      boolean reportValidity();
    };

The `form` element <a href="dom.html#represents" id="the-form-element:represents">represents</a> a <a href="links.html#hyperlink" id="the-form-element:hyperlink">hyperlink</a> that can be manipulated through a collection of <a href="#form-associated-element" id="the-form-element:form-associated-element">form-associated elements</a>, some of which can represent editable values that can be submitted to a server for processing.

The `accept-charset` attribute gives the character encodings that are to be used for the submission. If specified, the value must be an <a href="https://infra.spec.whatwg.org/#ascii-case-insensitive" id="the-form-element:ascii-case-insensitive">ASCII case-insensitive</a> match for "`UTF-8`". [\[ENCODING\]](references.html#refsENCODING)

The `name` attribute represents the `form`'s name within the `forms` collection. The value must not be the empty string, and the value must be unique amongst the `form` elements in the `forms` collection that it is in, if any.

The `autocomplete` attribute is an <a href="common-microsyntaxes.html#enumerated-attribute" id="the-form-element:enumerated-attribute">enumerated attribute</a>. The attribute has two states. The `on` keyword maps to the on state, and the `off` keyword maps to the off state. The attribute may also be omitted. The *[missing value default](common-microsyntaxes.html#missing-value-default)* and the *[invalid value default](common-microsyntaxes.html#invalid-value-default)* are the <a href="#attr-form-autocomplete-on-state" id="the-form-element:attr-form-autocomplete-on-state">on</a> state. The <a href="#attr-form-autocomplete-off-state" id="the-form-element:attr-form-autocomplete-off-state">off</a> state indicates that by default, form controls in the form will have their <a href="form-control-infrastructure.html#autofill-field-name" id="the-form-element:autofill-field-name">autofill field name</a> set to "`off`"; the <a href="#attr-form-autocomplete-on-state" id="the-form-element:attr-form-autocomplete-on-state-2">on</a> state indicates that by default, form controls in the form will have their <a href="form-control-infrastructure.html#autofill-field-name" id="the-form-element:autofill-field-name-2">autofill field name</a> set to "`on`".

The `action`, `enctype`, `method`, `novalidate`, and `target` attributes are <a href="form-control-infrastructure.html#attributes-for-form-submission" id="the-form-element:attributes-for-form-submission">attributes for form submission</a>.

The `rel` attribute on `form` elements controls what kinds of links the elements create. The attribute's value must be a <a href="common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens" id="the-form-element:unordered-set-of-unique-space-separated-tokens">unordered set of unique space-separated tokens</a>. The [allowed keywords and their meanings](links.html#linkTypes) are defined in an earlier section.

`rel`'s <a href="https://dom.spec.whatwg.org/#concept-supported-tokens" id="the-form-element:concept-supported-tokens">supported tokens</a> are the keywords defined in [HTML link types](links.html#linkTypes) which are allowed on `form` elements, impact the processing model, and are supported by the user agent. The possible <a href="https://dom.spec.whatwg.org/#concept-supported-tokens" id="the-form-element:concept-supported-tokens-2">supported tokens</a> are `noreferrer`, `noopener`, and `opener`. `rel`'s <a href="https://dom.spec.whatwg.org/#concept-supported-tokens" id="the-form-element:concept-supported-tokens-3">supported tokens</a> must only include the tokens from this list that the user agent implements the processing model for.

`form.elements`

**✔**MDN

[HTMLFormElement/elements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements "The HTMLFormElement property elements returns an HTMLFormControlsCollection listing all the form controls contained in the <form> element.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera8+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android10.1+</span>

Returns an `HTMLFormControlsCollection` of the form controls in the form (excluding image buttons for historical reasons).

`form.length`

**✔**MDN

[HTMLFormElement/length](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/length "The HTMLFormElement.length read-only property returns the number of controls in the <form> element.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

Returns the number of form controls in the form (excluding image buttons for historical reasons).

`form[index]`

Returns the indexth element in the form (excluding image buttons for historical reasons).

`form[name]`

Returns the form control (or, if there are several, a `RadioNodeList` of the form controls) in the form with the given <a href="https://dom.spec.whatwg.org/#concept-id" id="the-form-element:concept-id">ID</a> or `name` (excluding image buttons for historical reasons); or, if there are none, returns the `img` element with the given ID.

Once an element has been referenced using a particular name, that name will continue being available as a way to reference that element in this method, even if the element's actual <a href="https://dom.spec.whatwg.org/#concept-id" id="the-form-element:concept-id-2">ID</a> or `name` changes, for as long as the element remains in the <a href="https://dom.spec.whatwg.org/#concept-tree" id="the-form-element:tree">tree</a>.

If there are multiple matching items, then a `RadioNodeList` object containing all those elements is returned.

`form.submit()`

**✔**MDN

[HTMLFormElement/submit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit "The HTMLFormElement.submit() method submits a given <form>.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

Submits the form, bypassing <a href="form-control-infrastructure.html#interactively-validate-the-constraints" id="the-form-element:interactively-validate-the-constraints">interactive constraint validation</a> and without firing a `submit` event.

`form.requestSubmit([ submitter ])`

MDN

[HTMLFormElement/requestSubmit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/requestSubmit "The HTMLFormElement method requestSubmit() requests that the form be submitted using a specific submit button.")

<span class="firefox yes">Firefox75+</span><span class="safari no">SafariNo</span><span class="chrome yes">Chrome76+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera63+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge no">Edge (Legacy)No</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android79+</span><span class="safari_ios no">Safari iOSNo</span><span class="chrome_android yes">Chrome Android76+</span><span class="webview_android yes">WebView Android76+</span><span class="samsunginternet_android yes">Samsung Internet12.0+</span><span class="opera_android yes">Opera Android54+</span>

Requests to submit the form. Unlike `submit()`, this method includes <a href="form-control-infrastructure.html#interactively-validate-the-constraints" id="the-form-element:interactively-validate-the-constraints-2">interactive constraint validation</a> and firing a `submit` event, either of which can cancel submission.

The submitter argument can be used to point to a specific <a href="#concept-submit-button" id="the-form-element:concept-submit-button">submit button</a>, whose `formaction`, `formenctype`, `formmethod`, `formnovalidate`, and `formtarget` attributes can impact submission. Additionally, the submitter will be included when <a href="form-control-infrastructure.html#constructing-the-form-data-set" id="the-form-element:constructing-the-form-data-set">constructing the entry list</a> for submission; normally, buttons are excluded.

`form.reset()`

**✔**MDN

[HTMLFormElement/reset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset "The HTMLFormElement.reset() method restores a form element's default values. This method does the same thing as clicking the form's reset button.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera8+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android10.1+</span>

Resets the form.

`form.checkValidity()`

Returns true if the form's controls are all valid; otherwise, returns false.

`form.reportValidity()`

Returns true if the form's controls are all valid; otherwise, returns false and informs the user.

The `autocomplete` IDL attribute must <a href="common-dom-interfaces.html#reflect" id="the-form-element:reflect">reflect</a> the content attribute of the same name, <a href="common-dom-interfaces.html#limited-to-only-known-values" id="the-form-element:limited-to-only-known-values">limited to only known values</a>.

**✔**MDN

[HTMLFormElement/name](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/name "The HTMLFormElement.name property represents the name of the current <form> element as a string.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

The `name` and `rel` IDL attributes must <a href="common-dom-interfaces.html#reflect" id="the-form-element:reflect-2">reflect</a> the content attribute of the same name.

**✔**MDN

[HTMLFormElement/acceptCharset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/acceptCharset "The HTMLFormElement.acceptCharset property represents a list of the supported character encodings for the given <form> element. This list can be comma-separated or space-separated.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

The `acceptCharset` IDL attribute must <a href="common-dom-interfaces.html#reflect" id="the-form-element:reflect-3">reflect</a> the `accept-charset` content attribute.

The `relList` IDL attribute must <a href="common-dom-interfaces.html#reflect" id="the-form-element:reflect-4">reflect</a> the `rel` content attribute.

------------------------------------------------------------------------

The `elements` IDL attribute must return an `HTMLFormControlsCollection` rooted at the `form` element's <a href="https://dom.spec.whatwg.org/#concept-tree-root" id="the-form-element:root">root</a>, whose filter matches <a href="#category-listed" id="the-form-element:category-listed">listed elements</a> whose <a href="form-control-infrastructure.html#form-owner" id="the-form-element:form-owner">form owner</a> is the `form` element, with the exception of `input` elements whose `type` attribute is in the <a href="input.html#image-button-state-(type=image)" id="the-form-element:image-button-state-(type=image)">Image Button</a> state, which must, for historical reasons, be excluded from this particular collection.

The `length` IDL attribute must return the number of nodes <a href="https://dom.spec.whatwg.org/#represented-by-the-collection" id="the-form-element:represented-by-the-collection">represented</a> by the `elements` collection.

The <a href="https://webidl.spec.whatwg.org/#dfn-supported-property-indices" id="the-form-element:supported-property-indices">supported property indices</a> at any instant are the indices supported by the object returned by the `elements` attribute at that instant.

To <a href="https://webidl.spec.whatwg.org/#dfn-determine-the-value-of-an-indexed-property" id="the-form-element:determine-the-value-of-an-indexed-property">determine the value of an indexed property</a> for a `form` element, the user agent must return the value returned by the `item` method on the `elements` collection, when invoked with the given index as its argument.

------------------------------------------------------------------------

Each `form` element has a mapping of names to elements called the past names map. It is used to persist names of controls even when they change names.

The <a href="https://webidl.spec.whatwg.org/#dfn-supported-property-names" id="the-form-element:supported-property-names">supported property names</a> consist of the names obtained from the following algorithm, in the order obtained from this algorithm:

1.  Let sourced names be an initially empty ordered list of tuples consisting of a string, an element, a source, where the source is either *id*, *name*, or *past*, and, if the source is *past*, an age.
2.  For each <a href="#category-listed" id="the-form-element:category-listed-2">listed element</a> candidate whose <a href="form-control-infrastructure.html#form-owner" id="the-form-element:form-owner-2">form owner</a> is the `form` element, with the exception of any `input` elements whose `type` attribute is in the <a href="input.html#image-button-state-(type=image)" id="the-form-element:image-button-state-(type=image)-2">Image Button</a> state:

    1.  If candidate has an `id` attribute, add an entry to sourced names with that `id` attribute's value as the string, candidate as the element, and *id* as the source.
    2.  If candidate has a `name` attribute, add an entry to sourced names with that `name` attribute's value as the string, candidate as the element, and *name* as the source.

3.  For each `img` element candidate whose <a href="form-control-infrastructure.html#form-owner" id="the-form-element:form-owner-3">form owner</a> is the `form` element:

    1.  If candidate has an `id` attribute, add an entry to sourced names with that `id` attribute's value as the string, candidate as the element, and *id* as the source.
    2.  If candidate has a `name` attribute, add an entry to sourced names with that `name` attribute's value as the string, candidate as the element, and *name* as the source.

4.  For each entry past entry in the <a href="#past-names-map" id="the-form-element:past-names-map">past names map</a> add an entry to sourced names with the past entry's name as the string, past entry's element as the element, *past* as the source, and the length of time past entry has been in the <a href="#past-names-map" id="the-form-element:past-names-map-2">past names map</a> as the age.

5.  Sort sourced names by <a href="https://dom.spec.whatwg.org/#concept-tree-order" id="the-form-element:tree-order">tree order</a> of the element entry of each tuple, sorting entries with the same element by putting entries whose source is *id* first, then entries whose source is *name*, and finally entries whose source is *past*, and sorting entries with the same element and source by their age, oldest first.
6.  Remove any entries in sourced names that have the empty string as their name.
7.  Remove any entries in sourced names that have the same name as an earlier entry in the map.
8.  Return the list of names from sourced names, maintaining their relative order.

To <a href="https://webidl.spec.whatwg.org/#dfn-determine-the-value-of-a-named-property" id="the-form-element:determine-the-value-of-a-named-property">determine the value of a named property</a> name for a `form` element, the user agent must run the following steps:

1.  Let candidates be a <a href="infrastructure.html#live" id="the-form-element:live">live</a> `RadioNodeList` object containing all the <a href="#category-listed" id="the-form-element:category-listed-3">listed elements</a>, whose <a href="form-control-infrastructure.html#form-owner" id="the-form-element:form-owner-4">form owner</a> is the `form` element, that have either an `id` attribute or a `name` attribute equal to name, with the exception of `input` elements whose `type` attribute is in the <a href="input.html#image-button-state-(type=image)" id="the-form-element:image-button-state-(type=image)-3">Image Button</a> state, in <a href="https://dom.spec.whatwg.org/#concept-tree-order" id="the-form-element:tree-order-2">tree order</a>.
2.  If candidates is empty, let candidates be a <a href="infrastructure.html#live" id="the-form-element:live-2">live</a> `RadioNodeList` object containing all the `img` elements, whose <a href="form-control-infrastructure.html#form-owner" id="the-form-element:form-owner-5">form owner</a> is the `form` element, that have either an `id` attribute or a `name` attribute equal to name, in <a href="https://dom.spec.whatwg.org/#concept-tree-order" id="the-form-element:tree-order-3">tree order</a>.
3.  If candidates is empty, name is the name of one of the entries in the `form` element's <a href="#past-names-map" id="the-form-element:past-names-map-3">past names map</a>: return the object associated with name in that map.
4.  If candidates contains more than one node, return candidates.
5.  Otherwise, candidates contains exactly one node. Add a mapping from name to the node in candidates in the `form` element's <a href="#past-names-map" id="the-form-element:past-names-map-4">past names map</a>, replacing the previous entry with the same name, if any.
6.  Return the node in candidates.

If an element listed in a `form` element's <a href="#past-names-map" id="the-form-element:past-names-map-5">past names map</a> changes <a href="form-control-infrastructure.html#form-owner" id="the-form-element:form-owner-6">form owner</a>, then its entries must be removed from that map.

------------------------------------------------------------------------

The `submit()` method, when invoked, must <a href="form-control-infrastructure.html#concept-form-submit" id="the-form-element:concept-form-submit">submit</a> the `form` element from the `form` element itself, with the submitted from `submit()` method flag set.

The `requestSubmit(submitter)` method, when invoked, must run the following steps:

1.  If submitter is not null, then:

    1.  If submitter is not a <a href="#concept-submit-button" id="the-form-element:concept-submit-button-2">submit button</a>, then throw a `TypeError`.
    2.  If submitter's <a href="form-control-infrastructure.html#form-owner" id="the-form-element:form-owner-7">form owner</a> is not this `form` element, then throw a <a href="https://webidl.spec.whatwg.org/#notfounderror" id="the-form-element:notfounderror">"<code>NotFoundError</code>"</a> `DOMException`.

2.  Otherwise, set submitter to this `form` element.
3.  <a href="form-control-infrastructure.html#concept-form-submit" id="the-form-element:concept-form-submit-2">Submit</a> this `form` element, from submitter.

The `reset()` method, when invoked, must run the following steps:

1.  If the `form` element is marked as *[locked for reset](#locked-for-reset)*, then return.
2.  Mark the `form` element as locked for reset.
3.  <a href="form-control-infrastructure.html#concept-form-reset" id="the-form-element:concept-form-reset">Reset</a> the `form` element.
4.  Unmark the `form` element as *[locked for reset](#locked-for-reset)*.

If the `checkValidity()` method is invoked, the user agent must <a href="form-control-infrastructure.html#statically-validate-the-constraints" id="the-form-element:statically-validate-the-constraints">statically validate the constraints</a> of the `form` element, and return true if the constraint validation return a *positive* result, and false if it returned a *negative* result.

If the `reportValidity()` method is invoked, the user agent must <a href="form-control-infrastructure.html#interactively-validate-the-constraints" id="the-form-element:interactively-validate-the-constraints-3">interactively validate the constraints</a> of the `form` element, and return true if the constraint validation return a *positive* result, and false if it returned a *negative* result.

This example shows two search forms:

    <form action="https://www.google.com/search" method="get">
     <label>Google: <input type="search" name="q"></label> <input type="submit" value="Search...">
    </form>
    <form action="https://www.bing.com/search" method="get">
     <label>Bing: <input type="search" name="q"></label> <input type="submit" value="Search...">
    </form>

#### <span class="secno">4.10.4</span> The `label` element<a href="#the-label-element" class="self-link"></a>

**✔**MDN

[Element/label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label "The <label> HTML element represents a caption for an item in a user interface.")

Support in all current engines.

<span class="firefox yes">FirefoxYes</span><span class="safari yes">SafariYes</span><span class="chrome yes">ChromeYes</span>

------------------------------------------------------------------------

<span class="opera yes">OperaYes</span><span class="edge_blink yes">EdgeYes</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet ExplorerYes</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox AndroidYes</span><span class="safari_ios yes">Safari iOSYes</span><span class="chrome_android yes">Chrome AndroidYes</span><span class="webview_android yes">WebView AndroidYes</span><span class="samsunginternet_android yes">Samsung InternetYes</span><span class="opera_android yes">Opera AndroidYes</span>

**✔**MDN

[HTMLLabelElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement "The HTMLLabelElement interface gives access to properties specific to <label> elements. It inherits methods and properties from the base HTMLElement interface.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

<a href="dom.html#concept-element-categories" id="the-label-element:concept-element-categories">Categories</a>:  
<a href="dom.html#flow-content-2" id="the-label-element:flow-content-2">Flow content</a>.

<a href="dom.html#phrasing-content-2" id="the-label-element:phrasing-content-2">Phrasing content</a>.

<a href="dom.html#interactive-content-2" id="the-label-element:interactive-content-2">Interactive content</a>.

<a href="dom.html#palpable-content-2" id="the-label-element:palpable-content-2">Palpable content</a>.

<a href="dom.html#concept-element-contexts" id="the-label-element:concept-element-contexts">Contexts in which this element can be used</a>:  
Where <a href="dom.html#phrasing-content-2" id="the-label-element:phrasing-content-2-2">phrasing content</a> is expected.

<a href="dom.html#concept-element-content-model" id="the-label-element:concept-element-content-model">Content model</a>:  
<a href="dom.html#phrasing-content-2" id="the-label-element:phrasing-content-2-3">Phrasing content</a>, but with no descendant <a href="#category-label" id="the-label-element:category-label">labelable elements</a> unless it is the element's <a href="#labeled-control" id="the-label-element:labeled-control">labeled control</a>, and no descendant `label` elements.

<a href="dom.html#concept-element-tag-omission" id="the-label-element:concept-element-tag-omission">Tag omission in text/html</a>:  
Neither tag is omissible.

<a href="dom.html#concept-element-attributes" id="the-label-element:concept-element-attributes">Content attributes</a>:  
<a href="dom.html#global-attributes" id="the-label-element:global-attributes">Global attributes</a>

`for` — Associate the label with form control

<a href="dom.html#concept-element-accessibility-considerations" id="the-label-element:concept-element-accessibility-considerations">Accessibility considerations</a>:  
[For authors](https://w3c.github.io/html-aria/#el-label).

[For implementers](https://w3c.github.io/html-aam/#el-label).

<a href="dom.html#concept-element-dom" id="the-label-element:concept-element-dom">DOM interface</a>:  
    [Exposed=Window]
    interface HTMLLabelElement : HTMLElement {
      [HTMLConstructor] constructor();

      readonly attribute HTMLFormElement? form;
      [CEReactions] attribute DOMString htmlFor;
      readonly attribute HTMLElement? control;
    };

The `label` element <a href="dom.html#represents" id="the-label-element:represents">represents</a> a caption in a user interface. The caption can be associated with a specific form control, known as the `label` element's labeled control, either using the `for` attribute, or by putting the form control inside the `label` element itself.

Except where otherwise specified by the following rules, a `label` element has no <a href="#labeled-control" id="the-label-element:labeled-control-2">labeled control</a>.

The `for` attribute may be specified to indicate a form control with which the caption is to be associated. If the attribute is specified, the attribute's value must be the <a href="https://dom.spec.whatwg.org/#concept-id" id="the-label-element:concept-id">ID</a> of a <a href="#category-label" id="the-label-element:category-label-2">labelable element</a> in the same <a href="https://dom.spec.whatwg.org/#concept-tree" id="the-label-element:tree">tree</a> as the `label` element. If the attribute is specified and there is an element in the <a href="https://dom.spec.whatwg.org/#concept-tree" id="the-label-element:tree-2">tree</a> whose <a href="https://dom.spec.whatwg.org/#concept-id" id="the-label-element:concept-id-2">ID</a> is equal to the value of the `for` attribute, and the first such element in <a href="https://dom.spec.whatwg.org/#concept-tree-order" id="the-label-element:tree-order">tree order</a> is a <a href="#category-label" id="the-label-element:category-label-3">labelable element</a>, then that element is the `label` element's <a href="#labeled-control" id="the-label-element:labeled-control-3">labeled control</a>.

If the `for` attribute is not specified, but the `label` element has a <a href="#category-label" id="the-label-element:category-label-4">labelable element</a> descendant, then the first such descendant in <a href="https://dom.spec.whatwg.org/#concept-tree-order" id="the-label-element:tree-order-2">tree order</a> is the `label` element's <a href="#labeled-control" id="the-label-element:labeled-control-4">labeled control</a>.

The `label` element's exact default presentation and behavior, in particular what its <a href="https://dom.spec.whatwg.org/#eventtarget-activation-behavior" id="the-label-element:activation-behaviour">activation behavior</a> might be, if anything, should match the platform's label behavior. The <a href="https://dom.spec.whatwg.org/#eventtarget-activation-behavior" id="the-label-element:activation-behaviour-2">activation behavior</a> of a `label` element for events targeted at <a href="dom.html#interactive-content-2" id="the-label-element:interactive-content-2-2">interactive content</a> descendants of a `label` element, and any descendants of those <a href="dom.html#interactive-content-2" id="the-label-element:interactive-content-2-3">interactive content</a> descendants, must be to do nothing.

<a href="custom-elements.html#form-associated-custom-element" id="the-label-element:form-associated-custom-element">Form-associated custom elements</a> are <a href="#category-label" id="the-label-element:category-label-5">labelable elements</a>, so for user agents where the `label` element's <a href="https://dom.spec.whatwg.org/#eventtarget-activation-behavior" id="the-label-element:activation-behaviour-3">activation behavior</a> impacts the <a href="#labeled-control" id="the-label-element:labeled-control-5">labeled control</a>, both built-in and custom elements will be impacted.

For example, on platforms where clicking a label activates the form control, clicking the `label` in the following snippet could trigger the user agent to <a href="webappapis.html#fire-a-click-event" id="the-label-element:fire-a-click-event">fire a <code>click</code> event</a> at the `input` element, as if the element itself had been triggered by the user:

    <label><input type=checkbox name=lost> Lost</label>

Similarly, assuming `my-checkbox` was declared as a <a href="custom-elements.html#form-associated-custom-element" id="the-label-element:form-associated-custom-element-2">form-associated custom element</a> (like in [this example](custom-elements.html#custom-elements-face-example)), then the code

    <label><my-checkbox name=lost></my-checkbox> Lost</label>

would have the same behavior, <a href="webappapis.html#fire-a-click-event" id="the-label-element:fire-a-click-event-2">firing a <code>click</code> event</a> at the `my-checkbox` element.

On other platforms, the behavior in both cases might be just to focus the control, or to do nothing.

The following example shows three form controls each with a label, two of which have small text showing the right format for users to use.

    <p><label>Full name: <input name=fn> <small>Format: First Last</small></label></p>
    <p><label>Age: <input name=age type=number min=0></label></p>
    <p><label>Post code: <input name=pc> <small>Format: AB12 3CD</small></label></p>

`label.control`

**✔**MDN

[HTMLLabelElement/control](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/control "The read-only HTMLLabelElement.control property returns a reference to the control (in the form of an object of type HTMLElement or one of its derivatives) with which the <label> element is associated, or null if the label isn't associated with a control.")

Support in all current engines.

<span class="firefox yes">Firefox4+</span><span class="safari yes">Safari5.1+</span><span class="chrome yes">Chrome6+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)18</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS5+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android37+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

Returns the form control that is associated with this element.

`label.form`

**✔**MDN

[HTMLLabelElement/form](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/form "The read-only HTMLLabelElement.form property returns an HTMLFormElement object which represents the form of which the label's associated control is a part, or null if there is either no associated control, or if that control isn't in a form.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer6+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

Returns the <a href="form-control-infrastructure.html#form-owner" id="the-label-element:form-owner">form owner</a> of the form control that is associated with this element.

Returns null if there isn't one.

**✔**MDN

[HTMLLabelElement/htmlFor](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor "The HTMLLabelElement.htmlFor property reflects the value of the for content property. That means that this script-accessible property is used to set and read the value of the content property for, which is the ID of the label's associated control element.")

Support in all current engines.

<span class="firefox yes">Firefox1+</span><span class="safari yes">Safari3+</span><span class="chrome yes">Chrome1+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)12+</span><span class="ie yes">Internet Explorer5.5+</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android4+</span><span class="safari_ios yes">Safari iOS1+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android1+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

The `htmlFor` IDL attribute must <a href="common-dom-interfaces.html#reflect" id="the-label-element:reflect">reflect</a> the `for` content attribute.

The `control` IDL attribute must return the `label` element's <a href="#labeled-control" id="the-label-element:labeled-control-6">labeled control</a>, if any, or null if there isn't one.

The `form` IDL attribute must run the following steps:

1.  If the `label` element has no <a href="#labeled-control" id="the-label-element:labeled-control-7">labeled control</a>, then return null.
2.  If the `label` element's <a href="#labeled-control" id="the-label-element:labeled-control-8">labeled control</a> is not a <a href="#form-associated-element" id="the-label-element:form-associated-element">form-associated element</a>, then return null.
3.  Return the `label` element's <a href="#labeled-control" id="the-label-element:labeled-control-9">labeled control</a>'s <a href="form-control-infrastructure.html#form-owner" id="the-label-element:form-owner-2">form owner</a> (which can still be null).

The `form` IDL attribute on the `label` element is different from the `form` IDL attribute on <a href="#category-listed" id="the-label-element:category-listed">listed</a> <a href="#form-associated-element" id="the-label-element:form-associated-element-2">form-associated elements</a>, and the `label` element does not have a `form` content attribute.

------------------------------------------------------------------------

`control.labels`

**✔**MDN

[HTMLButtonElement/labels](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement/labels "The HTMLButtonElement.labels read-only property returns a NodeList of the <label> elements associated with the <button> element.")

Support in all current engines.

<span class="firefox yes">Firefox56+</span><span class="safari yes">Safari5.1+</span><span class="chrome yes">Chrome6+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)18</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android56+</span><span class="safari_ios yes">Safari iOS5+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android37+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

[HTMLInputElement/labels](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels "The HTMLInputElement.labels read-only property returns a NodeList of the <label> elements associated with the <input> element, if the element is not hidden. If the element has the type hidden, the property returns null.")

Support in all current engines.

<span class="firefox yes">Firefox56+</span><span class="safari yes">Safari5+</span><span class="chrome yes">Chrome6+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)18</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android56+</span><span class="safari_ios yes">Safari iOS4.2+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android37+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

[HTMLMeterElement/labels](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement/labels "The HTMLMeterElement.labels read-only property returns a NodeList of the <label> elements associated with the <meter> element.")

Support in all current engines.

<span class="firefox yes">Firefox56+</span><span class="safari yes">Safari6+</span><span class="chrome yes">Chrome6+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)18</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android56+</span><span class="safari_ios yes">Safari iOS6+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android37+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

[HTMLOutputElement/labels](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement/labels "The HTMLOutputElement.labels read-only property returns a NodeList of the <label> elements associated with the <output> element.")

Support in all current engines.

<span class="firefox yes">Firefox56+</span><span class="safari yes">Safari5.1+</span><span class="chrome yes">Chrome9+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)18</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android56+</span><span class="safari_ios yes">Safari iOS5+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android37+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

[HTMLProgressElement/labels](https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement/labels "The HTMLProgressElement.labels read-only property returns a NodeList of the <label> elements associated with the <progress> element.")

Support in all current engines.

<span class="firefox yes">Firefox56+</span><span class="safari yes">Safari6+</span><span class="chrome yes">Chrome6+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)18</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android56+</span><span class="safari_ios yes">Safari iOS6+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android37+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

[HTMLSelectElement/labels](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/labels "The HTMLSelectElement.labels read-only property returns a NodeList of the <label> elements associated with the <select> element.")

Support in all current engines.

<span class="firefox yes">Firefox56+</span><span class="safari yes">Safari5.1+</span><span class="chrome yes">Chrome6+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)18</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android56+</span><span class="safari_ios yes">Safari iOS5+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android37+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

[HTMLTextAreaElement/labels](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement/labels "The HTMLTextAreaElement.labels read-only property returns a NodeList of the <label> elements associated with the <textarea> element.")

Support in all current engines.

<span class="firefox yes">Firefox56+</span><span class="safari yes">Safari5.1+</span><span class="chrome yes">Chrome6+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera12.1+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge yes">Edge (Legacy)18</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android yes">Firefox Android56+</span><span class="safari_ios yes">Safari iOS5+</span><span class="chrome_android yes">Chrome Android18+</span><span class="webview_android yes">WebView Android37+</span><span class="samsunginternet_android yes">Samsung Internet1.0+</span><span class="opera_android yes">Opera Android12.1+</span>

Returns a `NodeList` of all the `label` elements that the form control is associated with.

<a href="#category-label" id="the-label-element:category-label-6">Labelable elements</a> and all `input` elements have a <a href="infrastructure.html#live" id="the-label-element:live">live</a> `NodeList` object associated with them that represents the list of `label` elements, in <a href="https://dom.spec.whatwg.org/#concept-tree-order" id="the-label-element:tree-order-3">tree order</a>, whose <a href="#labeled-control" id="the-label-element:labeled-control-10">labeled control</a> is the element in question. The `labels` IDL attribute of <a href="#category-label" id="the-label-element:category-label-7">labelable elements</a> that are not <a href="custom-elements.html#form-associated-custom-element" id="the-label-element:form-associated-custom-element-3">form-associated custom elements</a>, and the `labels` IDL attribute of `input` elements, on getting, must return that `NodeList` object, and that same value must always be returned, unless this element is an `input` element whose `type` attribute is in the <a href="input.html#hidden-state-(type=hidden)" id="the-label-element:hidden-state-(type=hidden)">Hidden</a> state, in which case it must instead return null.

**⚠**MDN

[ElementInternals/labels](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/labels "The labels read-only property of the ElementInternals interface returns the labels associated with the element.")

Support in one engine only.

<span class="firefox no">FirefoxNo</span><span class="safari no">SafariNo</span><span class="chrome yes">Chrome77+</span>

------------------------------------------------------------------------

<span class="opera yes">Opera64+</span><span class="edge_blink yes">Edge79+</span>

------------------------------------------------------------------------

<span class="edge no">Edge (Legacy)No</span><span class="ie no">Internet ExplorerNo</span>

------------------------------------------------------------------------

<span class="firefox_android no">Firefox AndroidNo</span><span class="safari_ios no">Safari iOSNo</span><span class="chrome_android yes">Chrome Android77+</span><span class="webview_android yes">WebView Android77+</span><span class="samsunginternet_android yes">Samsung Internet12.0+</span><span class="opera_android yes">Opera Android55+</span>

<a href="custom-elements.html#form-associated-custom-element" id="the-label-element:form-associated-custom-element-4">Form-associated custom elements</a> don't have a `labels` IDL attribute. Instead, their `ElementInternals` object has a `labels` IDL attribute. On getting, it must throw a <a href="https://webidl.spec.whatwg.org/#notsupportederror" id="the-label-element:notsupportederror">"<code>NotSupportedError</code>"</a> `DOMException` if the <a href="custom-elements.html#internals-target" id="the-label-element:internals-target">target element</a> is not a <a href="custom-elements.html#form-associated-custom-element" id="the-label-element:form-associated-custom-element-5">form-associated custom element</a>. Otherwise, it must return that `NodeList` object, and that same value must always be returned.

This (non-conforming) example shows what happens to the `NodeList` and what `labels` returns when an `input` element has its `type` attribute changed.

    <!doctype html>
    <p><label><input></label></p>
    <script>
     const input = document.querySelector('input');
     const labels = input.labels;
     console.assert(labels.length === 1);

     input.type = 'hidden';
     console.assert(labels.length === 0); // the input is no longer the label's labeled control
     console.assert(input.labels === null);

     input.type = 'checkbox';
     console.assert(labels.length === 1); // the input is once again the label's labeled control
     console.assert(input.labels === labels); // same value as returned originally
    </script>

[← 4.9 Tabular data](tables.html) — [Table of Contents](./) — [4.10.5 The input element →](input.html)
