import { newSpecPage } from '@stencil/core/testing';
import { NndsButton } from '../Nnds-button';

describe('nnds-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NndsButton],
      html: `<nnds-button></nnds-button>`,
    });
    expect(page.root).toEqualHtml(`
      <nnds-button>
        <button class="nnds-button nnds-button--medium nnds-button--primary" type="button"></button>
      </nnds-button>
    `);
  });
});
