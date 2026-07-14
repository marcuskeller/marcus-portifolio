import { TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';
import { ActiveSectionService } from '../../shared/utils/active-section.service';

describe('Navbar', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ imports: [Navbar] });
  });

  it('marks a link as active only when it matches the current section', () => {
    const fixture = TestBed.createComponent(Navbar);
    const activeSection = TestBed.inject(ActiveSectionService);

    activeSection.activeId.set('projetos');
    fixture.detectChanges();

    expect(fixture.componentInstance.isActive('#projetos')).toBe(true);
    expect(fixture.componentInstance.isActive('#sobre')).toBe(false);
  });

  it('toggles and closes the mobile menu', () => {
    const fixture = TestBed.createComponent(Navbar);

    expect(fixture.componentInstance['isMenuOpen']()).toBe(false);

    fixture.componentInstance.toggleMenu();
    expect(fixture.componentInstance['isMenuOpen']()).toBe(true);

    fixture.componentInstance.closeMenu();
    expect(fixture.componentInstance['isMenuOpen']()).toBe(false);
  });
});
