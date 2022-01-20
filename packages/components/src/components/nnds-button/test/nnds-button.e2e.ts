import { newE2EPage } from '@stencil/core/testing';

describe('nnds-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nnds-button></nnds-button>');

    const element = await page.find('nnds-button');
    expect(element).toHaveClass('hydrated');
  });
});
