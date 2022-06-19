import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import { ButtonComponent } from './button';
import { store } from '../../../redux/store';

describe("Products container screen", () => {
    let container: HTMLElement, getByText: any;
    let handleClick = 0;

    beforeEach(() => {
        ({ container, getByText } = render(
            <Provider store={store}>
                <div id='ButtonComponent'>
                    <ButtonComponent type='primary' text='button text' onClick={() => ++handleClick} />
                </div>
            </Provider>
        ))

    });

    it("should have Button with text 'button text'", () => {
        const button = getByText(/button text/i);
        expect(button).toBeInTheDocument();
    });

    it("should have Button with text 'button text'", () => {
        const button = getByText(/button text/i);
        expect(button).toHaveClass('button-container__primary');
    });

    it("should fire click event onClick", () => {
        const button = getByText(/button text/i);
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        expect(handleClick).toEqual(1);
    });

})