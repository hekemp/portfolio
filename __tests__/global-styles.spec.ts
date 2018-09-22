import { injectGlobal } from 'styled-components'

jest.mock('styled-components')

test('styles are injected', () => {
  // tslint:disable-next-line:no-implicit-dependencies
  require('@/global-styles')
  expect(injectGlobal).toHaveBeenCalledTimes(1)
})
