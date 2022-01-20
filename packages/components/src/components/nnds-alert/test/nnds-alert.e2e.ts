import { newE2EPage } from '@stencil/core/testing';

describe('nnds-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nnds-alert></nnds-alert>');

    const element = await page.find('nnds-alert');
    expect(element).toHaveClass('hydrated');
  });
});
