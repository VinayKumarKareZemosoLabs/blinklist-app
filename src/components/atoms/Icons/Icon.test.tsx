import { render , screen } from "@testing-library/react";
import Icons from "./Icons";

test("Check for Icon", async()=>{
    render(<Icons source={"../../../images/add.svg"}></Icons>);
    const MuiElement = screen.getByRole(/img/i);
    expect(MuiElement).toBeInTheDocument();
})