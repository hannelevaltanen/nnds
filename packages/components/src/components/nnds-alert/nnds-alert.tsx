import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'nnds-alert',
  styleUrl: 'nnds-alert.scss',
  shadow: true,
})
export class NndsAlert {
  /**
   * What type of button is this?
   */
  @Prop() variant?: "info" | "danger" | "success" = "info";

   /**
    * How large should the button be?
    */
  @Prop() size?: "small" | "medium" | "large" = "medium";

  render() {
    const { size, variant, } = this;

    return (
      <div 
        class={[
          "nnds-alert",
          size && `nnds-alert--${size}`,
          variant && `nnds-alert--${variant}`,
        ].join(" ")}>
        <span class="nnds-alert__text">
          <slot></slot>
        </span>
      </div>
    );
  }

}
