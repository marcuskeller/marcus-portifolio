import { buildLocaleSwitchUrl } from './settings-menu';

describe('buildLocaleSwitchUrl', () => {
  it('swaps the locale prefix, keeping the rest of the path', () => {
    const url = buildLocaleSwitchUrl('pt', 'en', {
      pathname: '/pt/',
      search: '',
      hash: '',
    });

    expect(url).toBe('/en/');
  });

  it('preserves the hash when switching locale', () => {
    const url = buildLocaleSwitchUrl('pt', 'en', {
      pathname: '/pt/',
      search: '',
      hash: '#projetos',
    });

    expect(url).toBe('/en/#projetos');
  });

  it('preserves query params when switching locale', () => {
    const url = buildLocaleSwitchUrl('en', 'pt', {
      pathname: '/en/',
      search: '?ref=linkedin',
      hash: '',
    });

    expect(url).toBe('/pt/?ref=linkedin');
  });

  it('falls back to prefixing when the path has no known locale prefix', () => {
    const url = buildLocaleSwitchUrl('pt', 'en', {
      pathname: '/',
      search: '',
      hash: '',
    });

    expect(url).toBe('/en/');
  });

  it('does not stack prefixes when the path already has the target locale prefix', () => {
    // Happens under `ng serve` (single-locale dev server): navigating to the
    // other locale's URL just re-serves the same bundle at that new path,
    // so `currentLocale` (baked into the running bundle) no longer matches
    // what's actually in the URL.
    const url = buildLocaleSwitchUrl('pt', 'en', {
      pathname: '/en/',
      search: '',
      hash: '',
    });

    expect(url).toBe('/en/');
  });

  it('never stacks even after repeated calls', () => {
    let path = '/pt/';
    for (let i = 0; i < 5; i++) {
      path = buildLocaleSwitchUrl('pt', 'en', { pathname: path, search: '', hash: '' });
    }

    expect(path).toBe('/en/');
  });
});
