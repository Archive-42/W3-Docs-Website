-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SL8](SL8)
-   [Next Technique: SL10](SL10)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Handling Key Events to Enable Keyboard Functionality in Silverlight
===================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

-   Microsoft Silverlight, versions 3 and greater
-   Silverlight managed programming model and Silverlight XAML

Note

Microsoft has stopped updating and distributing Silverlight, and authors are encouraged to use HTML for accessible web content.

This technique relates to [Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) (Sufficient when used with [G90: Providing keyboard-triggered event handlers](../general/G90)).

Description
-----------

The objective of this technique is to handle key events in a Silverlight application and enable application-specific keyboard functionality in a Silverlight application. The keyboard functionality might relate to a particular element of the Silverlight application user interface, or might be a handler for global key events within the application, such as an application-wide access key.

In Silverlight, application authors handle user input by attaching event handlers for input events. The input events are implemented on a class that is a base element in the Silverlight class hierarchy, such that all Silverlight UI elements can be the source of an input event if the user interacts with them. Typically, the event handler names are specified in XAML, although it is also possible to wire events in code. The implementation of the handlers for the Silverlight managed code programming model is always done in C\# or Visual Basic code.

The most commonly used input events are the following:

-   KeyUp, KeyDown - these are the key events. Which key is pressed is determined by event parameters passed to the handler.
-   MouseEnter, MouseOver, MouseLeave
-   MouseLeftButtonDown, MouseLeftButtonUp, MouseRightButtonDown, MouseRightButtonUp

Other forms of input that Silverlight supports include touch devices (with mouse promotion for cases where the application runs on devices that do not have touch input modes) and a related inking mode. For any UI interaction that uses mouse input or these other input modes, Silverlight application authors can write a parallel key event handler to provide users the keyboard equivalent.

Also, the Silverlight event system and control model combine to enable behavior whereby a mouse event and a keyboard event can be treated as the same event and can be handled by a common event handler. Using this technique, Silverlight authors can facilitate keyboard functionality in custom controls or as override behavior to existing Silverlight-supplied controls, and provide equivalence for mouse events or events that are specific to other input devices. Silverlight authors can also use controls that already have a keyboard equivalence as a built-in behavior.

The parallel key event handler case, and the built-in behavior case, are each shown in one of the examples.

All input events report a specific source that is communicated to handler code as an event parameter, so that the application author can identify which element in their Silverlight UI was being interacted with, and the application can perform an action that is relevant to that user input. In the case of mouse events, the event source is the element that the mouse pointer is over at the time. In the case of key events, the event source is the element that has focus. The element that has focus is visually indicated so that the user knows which element they are interacting with (see [](#SL2)). Assistive technologies often have parallel conventions whereby the user is made aware of which element is visually focused and is the current input scope presented by the assistive technology,

### Silverlight core control built-in keyboard functionality

The following is a list of the Silverlight-supplied controls that have some level of key equivalence as a built-in behavior. In these cases, it is not necessary to add a specific Key event handler; you can handle the event and/or rely on the built-in key handling as listed.

-   `Button` (SPACE and ENTER) - raises Click event.
-   Other `ButtonBase` classes eg `RepeatButton`, `HyperlinkButton` (SPACE and ENTER) - raises Click event.
-   `TextBox` (ENTER, unless in a mode where the `TextBox` accepts multiple lines) - moves focus to next control, treated like a TAB
-   `ListBox` (various keys) - see [OnKeyDown Method](https://msdn.microsoft.com/en-us/library/system.windows.controls.listbox.onkeydown%28VS.95%29.aspx).
-   `ComboBox` (arrow keys ) - traverse list choices as control UI if popup area displayed.
-   `RichTextBox` (various keys ) - enable edit mode operations; see [RichTextBox Overview](https://msdn.microsoft.com/en-us/library/ee681613%28VS.95%29.aspx).
-   `Slider` (arrow keys ) - increment/decrement values.

### Browser hosts and keyboard events

Silverlight is hosted as a plug-in inside a browser host. The Silverlight run-time only receives the input events that the browser host forwards to hosted plug-ins through a browser-specific program access layer. Occasionally the browser host receives input that the browser host itself handles in some way, and does not forward the keyboard event. An example is that a Silverlight application hosted by an Internet Explorer browser host on Windows operating system cannot detect a press of the ALT key, because Internet Explorer processes this input and performs the action of bringing keyboard focus to the Internet Explorer menu bar. Silverlight authors might need to be aware of browser-specific input handling models and not rely on key events for keys that are essentially reserved for use by a browser host. For more information, see [Keyboard Support](https://msdn.microsoft.com/en-us/library/cc189015(VS.95).aspx).

### Other event models

This technique specifically discusses event handling for the Silverlight managed programming model. However, Silverlight also supports parallel models for event handling, either through a Silverlight run-time feature or due to Silverlight's role as a plug-in within a script-capable browser host. For example, events from the HTML DOM can be handled by JavaScript at HTML scope for the overall Silverlight plug-in; this uses the browser host as script processor and the Silverlight run-time is not directly involved. Or, HTML DOM events can be handled through an HTML bridge that calls into Silverlight application code. These event models can potentially be used to provide keyboard equivalence, but it is generally more convenient to use the managed code model as described in this technique. For more information on other event models in Silverlight, see [Events Overview for Silverlight](https://msdn.microsoft.com/en-us/library/cc189018(VS.95).aspx).

Examples
--------

Two examples are given. The first example is for the scenario of a Silverlight application author that is simply incorporating an existing control into their application design, and is taking advantage of mouse-keyboard equivalence that is already defined by certain Silverlight core controls. The second example is from the perspective of a control author, or at least that of a Silverlight application author that intends to encapsulate behavior in a custom Silverlight control and use it in their own application. For this second example, the control will handle the general Silverlight input event KeyUp, in order to check for input from key(s) that are designated to have a specific input meaning for that control.

### Example 1: Built-in keyboard equivalence for core Silverlight controls

This example pertains to cases where the control that handles key events is focusable (through the tab sequence, etc.) and where an existing Silverlight control behavior provides the keyboard equivalence In this example, a Silverlight UI includes a `Button` element. For sighted users, or users that generally use the mouse to interact with UI, a typical way to interact with the button is to position the mouse pointer over the element, and click the left mouse button. However, the `Button` also supports a built-in key handling behavior, whereby either the SPACE or ENTER keys are treated as an equivalent action to clicking the button with a mouse. The requirement for this interaction is that the `Button` must have keyboard focus at the point in time that SPACE or ENTER are pressed. The `Button` might gain focus because the user pressed the TAB key to move through the tab sequence, or some equivalent action enabled by assistive technology. In terms of the programming experience, the Silverlight application author does not have to separately handle KeyDown for this case. Within the `Button` control built-in code, the special case of SPACE or ENTER keys pressed while a `Button` has focus invokes the button’s Click event. Then the Silverlight application author can simply handle Click without differentiating whether the input action was a mouse click or a keyboard equivalent. The following is the entire XAML UI.

    <UserControl x:Class="BuiltInKeyEquivalence.MainPage"
       xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
       xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    >
       <Grid x:Name="LayoutRoot" Background="White" Loaded="LayoutRoot_Loaded">
           <Button Name="button1"
       AutomationProperties.Name="Equivalence test"
       Height="20" Width="150"
       Click="button1_Click">Click me, or press SPACE!</Button>
       </Grid>
    </UserControl>

The following is the C\# logic.

       private void button1_Click(object sender, RoutedEventArgs e)
       {
           MessageBox.Show("You clicked a button ... or maybe you hit the space bar ... or ENTER ... it's all the same to me.");
       }
       private void LayoutRoot_Loaded(object sender, RoutedEventArgs e)
       {
           System.Windows.Browser.HtmlPage.Plugin.Focus();
        }

This example is shown in operation in the [working example of built-in keyboard equivalents](../../working-examples/silverlight-built-in-key-equivalence/).

### Example 2: Keyboard events for a custom control, keyboard equivalence

In this example, a new Silverlight custom control named SimpleNumericUpDown uses a control template that includes two buttons. To provide keyboard equivalence for the buttons, an event handler is defined by the control class code. The event handler invokes the action in response to certain accelerator keys, where these actions are equivalent to clicking the button composition parts of the control with a mouse. The following is the default XAML template.

    <ControlTemplate TargetType="local:SimpleNumericUpDown">
      <Border Background="{TemplateBinding Background}"
              BorderBrush="{TemplateBinding BorderBrush}"
              BorderThickness="{TemplateBinding BorderThickness}" Name="controlFrame">
          <Grid>
              <Grid.ColumnDefinitions>
                  <ColumnDefinition Width="*"/>
                  <ColumnDefinition Width="30"/>
              </Grid.ColumnDefinitions>
              <TextBox x:Name="valueBox" Text="{Binding NumericValue, RelativeSource={RelativeSource TemplatedParent}}"/>
              <StackPanel Grid.Column="1">
                  <Button Name="minusButton">-</Button>
                  <Button Name="plusButton">+</Button>
              </StackPanel>
          </Grid>
      </Border>
    </ControlTemplate>

The following C\# code shows the event handlers. Also, the code includes the event-wiring technique that is used whenever a Silverlight control author implements a templateable control. This technique enables the separation of UI appearance (which can be overridden) from the input event-handling behavior (which is implemented by the control author).

       public class SimpleNumericUpDown : Control
       {
           public SimpleNumericUpDown()
           {
               this.DefaultStyleKey = typeof(SimpleNumericUpDown);
           }
           
           public override void OnApplyTemplate()
           {
               base.OnApplyTemplate();
               Button plusButton = GetTemplateChild("plusButton") as Button;
               Button minusButton = GetTemplateChild("minusButton") as Button;
               Border controlFrame = GetTemplateChild("controlFrame") as Border;
               plusButton.Click += new RoutedEventHandler(Increment);
               minusButton.Click += new RoutedEventHandler(Decrement);
               controlFrame.KeyUp += new KeyEventHandler(Handle_Accelerators);
           }
           private void Increment(object sender, RoutedEventArgs e)
           {
               this.NumericValue += 1;
           }
           private void Decrement(object sender, RoutedEventArgs e)
           {
               this.NumericValue -= 1;
           }
           private void Handle_Accelerators(object sender, KeyEventArgs e)
           {
               switch (e.Key)
               {
                   case (Key.Left):
                       this.NumericValue -= 1; 
                       e.Handled=true;
                       break;
                   case (Key.Right):
                       this.NumericValue += 1; 
                       e.Handled=true;
                       break;
                   default: break;
               }
           }
           public Int32 NumericValue //definition omitted in this example
       }

This example is shown in operation in the [working example of custom keyboard events](/WAI/WCAG20/Techniques/working-examples/SL6/SimpleNumericUpDownTestPage.html).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [KeyUp](https://msdn.microsoft.com/en-us/library/system.windows.uielement.keyup%28VS.95%29.aspx)
-   [Keyboard Support](https://msdn.microsoft.com/en-us/library/cc189015(VS.95).aspx)
-   [Focus Overview](https://msdn.microsoft.com/en-us/library/cc903954(VS.95).aspx)
-   [Creating a New Control by Creating a ControlTemplate](https://msdn.microsoft.com/en-us/library/cc278064(VS.95).aspx)
-   [Events Overview for Silverlight](https://msdn.microsoft.com/en-us/library/cc189018(VS.95).aspx)

Related Techniques
------------------

-   [G90: Providing keyboard-triggered event handlers](https://www.w3.org/WAI/WCAG21/Techniques/general/G90)

Tests
-----

### Procedure

1.  Using a browser that supports Silverlight, open an HTML page that references a Silverlight application through an object tag.
2.  Press TAB key to move keyboard focus to various element parts of the user interface.
3.  Verify that any user interface actions that exist for a given element part each have a keyboard equivalent.

### Expected Results

\#3 is true.
