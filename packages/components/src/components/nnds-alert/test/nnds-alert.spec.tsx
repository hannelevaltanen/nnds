import { newSpecPage } from '@stencil/core/testing';
import { NndsAlert } from '../nnds-alert';

describe('nnds-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NndsAlert],
      html: `<nnds-alert></nnds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <nnds-alert>
        <mock:shadow-root>
          <div class="nnds-alert nnds-alert--info nnds-alert--medium">
            <span class="nnds-alert__text">
              <slot></slot>
            </span>
          </div>
        </mock:shadow-root>
      </nnds-alert>
    `);
  });
});
