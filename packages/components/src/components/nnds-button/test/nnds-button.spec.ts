import { newSpecPage } from '@stencil/core/testing';
import { NndsButton } from '../nnds-button';

describe('nnds-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NndsButton],
      html: `<nnds-button></nnds-button>`,
    });
    expect(page.root).toEqualHtml(`
      <nnds-button>
        <mock:shadow-root>
          <button class="nnds-button nnds-button--medium nnds-button--primary" type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </nnds-button>
    `);
  });
});
