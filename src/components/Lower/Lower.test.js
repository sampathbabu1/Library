import {fireEvent, render,screen} from "@testing-library/react";
import Lower from "./Lower";
test('My Library Test',()=>{
    render(<Lower />);
    expect(screen.getByText(/No Currently Reading books/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText('Finished'),{button:0});
    expect(screen.getByText(/No Finished Books/i)).toBeInTheDocument();
});