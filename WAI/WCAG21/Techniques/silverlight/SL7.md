-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SL6](SL6)
-   [Next Technique: SL8](SL8)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Designing a Focused Visual State for Custom Silverlight Controls
================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

-   Microsoft Silverlight, versions 3 and greater
-   Silverlight managed programming model and Silverlight XAML

Note

Microsoft has stopped updating and distributing Silverlight, and authors are encouraged to use HTML for accessible web content.

This technique relates to [Success Criterion 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible) (Sufficient).

Description
-----------

The objective of this technique is to build custom visual states for custom controls that include visible focus indicators in the templates and parts.

The default Silverlight core controls all indicate some type of visible focus indication, through their default templates. For more information on how Silverlight controls will generally supply a default visual focus indicator, see [Focus Overview on MSDN](https://msdn.microsoft.com/en-us/library/cc903954(VS.95).aspx).

Silverlight control skinning is enabled through a deliberate separation of visible user interface design and control logic in the Silverlight control model. Control authors expect that application authors might reskin their control. But control authors should provide an initial default set of states, templates, etc. so that application authors have a good baseline of functionality to compare with their customization. Defining visible focus states for all control parts is an example of such baseline functionality. In order to make the visual focus state customizable, the visual state should be associated with a name. Ideally that name should have a human-readable meaning that hints at its purpose, but the real reason for the name is that it connects the XAML-defined template (which control consumers can change) with the control logic defined by the control author (which control consumers cannot change). Also, the visual names and groups in the XAML should be attributed on the control class, to assist design tools. The best resource for general information about Silverlight control customization is [Silverlight documentation on MSDN](https://msdn.microsoft.com/en-us/library/cc278064%28v=VS.95%29.aspx).

### Component Parts

Some controls are created by assembling various component parts that are already defined as controls either by the Silverlight run time libraries or by third parties. That scenario is not really what this technique is about, because in that case the focus behavior is already defined by the component's template, and the control author can re-use that behavior as-is or reskin it but still through the same named state definition. This technique specifically addresses how to define a control where the interactive surface has mouse and keyboard handling defined at a lower level for the control as a whole. The actual focus region is defined by the control author in that case, and the focus indicator is also defined to match the behavior visually and functionally.

### Design for Focus Indicators

The general design principles for visual focus indicators are that the indicators should apply a visual change to the focus region's exterior margin. A common pattern is to deliberately define the visuals for the control with a pre-existing blank margin for its layout slot; that way when the focus indicator is applied, the focus indicator can fill that margin.

The actual graphic for the visual focus indicator is typically a border or shaped frame of a solid color brush with at least 1 pixel line thickness. The color used for the border stands out visually from the underlying control background or other elements of the control. The contrast between brush for visual focus and the remainder of control should be a contrast difference that is visible to users who do not distinguish the hue of colors, but can distinguish the lightness/value. In many cases the border is rectangular, to go along with the control's layout slot. However, if the control's basic shape is a non-rectangular shape, sometimes the focus indicator is designed to make a border around that shape. An example of a default Silverlight control that is round and applies an exterior round border as a focus indicator is a [RadioButton](https://msdn.microsoft.com/en-us/library/system.windows.controls.radiobutton%28VS.95%29.aspx).

Most focus indicator designs change only the border and do not change the main area of the control. One reason for this is that changes to the main control are typically reserved for other interactive states that also have a visual indicator. Specifically, controls need a visual state that indicates that the mouse is over the control (this is termed either MouseOver or Hover state). Controls that support activation also have a visual state that provides feedback for activation. For example, the default Silverlight `RepeatButton` changes its `Background` gradient on the button field to be darker blue value when the mouse is over the button, and changes to an even darker value blue when the button is activated (either by clicking the mouse or by pressing SPACE or ENTER with keyboard focus on the `RepeatButton`). To see this behavior in a live sample, see [RepeatButton sample on MSDN](http://samples.msdn.microsoft.com/Silverlight/SampleBrowser/index.htm#/?sref=System.Windows.Controls.RepeatButtonEx).

### Logic for Focus Indicators

Typical logic is that the border to indicate focus is present in the default template design, but with an initial value of Visibility=Collapsed. Then, a visual state for focus is defined with a name that properly indicates its purpose as text (example: "Focused"). In addition, a state is needed that undoes whatever changes were applied for focus, once focus moves to another element (for example, "Unfocused"). For example, if the "Focused" state sets the value Visibility=Visible on some element, the "Unfocused" state sets that value to Collapsed again. Silverlight's visual state system also provides a way to group related states with a factoring name (for example, "FocusStates"). For more information on state names and state groups in Silverlight visual states, as well as learning how these states define a control contract that any control consumers should follow if they reskin that control, see [Customizing the Appearance of an Existing Control by Using a ControlTemplate on MSDN](https://msdn.microsoft.com/en-us/library/cc189093(VS.95).aspx).

The visual state system is designed to support visual transitions to states, and for that reason the visual state system is closely coupled with the Silverlight animation system. By animating the transition, the visual appearance changes over a time interval. Typically, if transitions are used, the time interval is short, one second or less. In the case of focus indicators, it is typical to not use transitions and to instead make a discrete change; otherwise, the state change might be interpreted by users as a lag in interface response from their system.

The states themselves are designed in XAML, but are loaded and unloaded through logic that the control author defines as part of their control code. The control author does this by handling the appropriate events that occur while the event scope applies to their control. For example, to apply the "Focused" state, the control author handles the [GotFocus event](https://msdn.microsoft.com/en-us/library/system.windows.uielement.gotfocus%28VS.95%29.aspx). Rather than handle the event directly, the more common pattern is to override a virtual method that acts as a prewired event handler, [OnGotFocus](https://msdn.microsoft.com/en-us/library/system.windows.controls.control.ongotfocus%28v=VS.95%29.aspx). The centralized logic for visual state changes is the method [GoToState](https://msdn.microsoft.com/en-us/library/dd991369%28v=vs.110%29.aspx), with one of the parameters to pass representing the XAML name of the correct state to load from the XAML templates. Examples for all of the APIs discussed here are available in the MSDN topic [Creating a New Control by Creating a ControlTemplate](https://msdn.microsoft.com/en-us/library/cc278064(VS.95).aspx).

### Focus in Silverlight

Focus in Silverlight is equivalent to the larger user interface and application concept of keyboard focus. The element that has focus is the element within the Silverlight object tree and programming model that has first chance to process the Silverlight key events. As a more tangible example that is user-centric, if a `TextBox` has keyboard focus, then when the user presses keys on the keyboard, the characters associated with the user's pressed keys (or possibly input that is enabled by an assistive technology that can substitute for key strokes) will appear in the `TextBox`. A user interface element in Silverlight can obtain keyboard focus in one of three ways:

1.  The user uses the Silverlight tab sequence to traverse into the Silverlight content and to focus a specific control.
2.  The Silverlight application's logic calls the Focus() method programmatically to force focus to a control.
3.  The user performs some other action, for example uses the mouse to click on a control. That control's specific logic handles the Silverlight input event and uses that event as stimulus to call Focus() on that control. The difference between this case and the above case is that the behavior is typically built-in to that control's runtime behavior, and does not require each application author to call Focus() in application code.

Examples
--------

### Example 1: Visible focus indicator as a style and state

The following is the XAML that defines the basic (normal) control template. This control is simple: it has a yellow circle graphic, which overlays a red circle edge when the control is focused. The circle edge is defined by the "FocusVisual" element in the composition, and is initially Visibility=Collapsed (the expected visual state prior to being focused).

    <ResourceDictionary
       xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
       xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
       xmlns:local="clr-namespace:FocusVisualCustomControl"
    >
       <Style TargetType="local:SampleControl">
           <Setter Property="Template">
               <Setter.Value>
                   <ControlTemplate TargetType="local:SampleControl">
                       <Grid x:Name="ControlRoot">
                           <Ellipse x:Name="CoinGraphic"
                             Fill="Orange"
                             Width="{TemplateBinding Width}"
                             Height="{TemplateBinding Height}"
                           />
                           <Ellipse x:Name="FocusVisual"
                             Visibility="Collapsed"
                             Stroke="Red"
                             StrokeThickness="1"
                             Width="{TemplateBinding FrameworkElement.Width}"
                             Height="{TemplateBinding FrameworkElement.Height}"
                           />
                       </Grid>
                   </ControlTemplate>
               </Setter.Value>
           </Setter>
       </Style>
    </ResourceDictionary>

The following is the specific visual state portion. Note how the visual state includes an `ObjectAnimation` with discrete keyframes for hard transition between Visible and Collapsed, targeting the element "FocusVisual" in the composition shown in the previous XAML.

                           <VisualStateManager.VisualStateGroups>
                               <VisualStateGroup x:Name="FocusStates">
                                   <VisualState x:Name="Unfocused"/>
                                   <VisualState x:Name="Focused">
                                       <Storyboard>
                                           <ObjectAnimationUsingKeyFrames
                                             Storyboard.TargetName="FocusVisual" 
                                             Storyboard.TargetProperty="Visibility" Duration="0">
                                               <DiscreteObjectKeyFrame KeyTime="0">
                                                   <DiscreteObjectKeyFrame.Value>
                                                       <Visibility>Visible</Visibility>
                                                   </DiscreteObjectKeyFrame.Value>
                                               </DiscreteObjectKeyFrame>
                                           </ObjectAnimationUsingKeyFrames>
                                       </Storyboard>
                                   </VisualState>
                               </VisualStateGroup>
                           </VisualStateManager.VisualStateGroups>
                           

The following is control logic in the control class that responds to the focus-related events and switches visual states in response. In this particular example, "Unfocused" is a state without a definition. Switching to the definitionless state has the effect of reverting to the default state, which in the case of this design is intentional. Alternatively, authors could make specific template changes that revert any animation that applied to the focused state.

           protected override void OnGotFocus(RoutedEventArgs e)
           {
               base.OnGotFocus(e);
               VisualStateManager.GoToState(this, "Focused", false);
           }
           protected override void OnLostFocus(RoutedEventArgs e)
           {
               base.OnLostFocus(e);
               VisualStateManager.GoToState(this, "Unfocused", false);
           }

This example is shown in operation in the [working example of Visual Focus Indicator](../../working-examples/silverlight-focus-visual-custom-control/).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Customizing the Appearance of an Existing Control by Using a ControlTemplate](https://msdn.microsoft.com/en-us/library/cc189093(VS.95).aspx)
-   [Focus Overview](https://msdn.microsoft.com/en-us/library/cc903954(VS.95).aspx)

Related Techniques
------------------

-   [SCR31: Using script to change the background color or border of the element with focus](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR31)

Tests
-----

### Procedure

1.  Using a browser that supports Silverlight, open an HTML page that references a Silverlight application through an object tag.
2.  Using a keyboard, tab to the element where focus characteristics are being examined.
3.  Check that the background, border, or other noticable visual indicator of the element changes color.
4.  Check that the changes in color for the background, border, or other noticable visual indicator are removed when the element loses focus.

### Expected Results

\#3 and \#4 are true.
