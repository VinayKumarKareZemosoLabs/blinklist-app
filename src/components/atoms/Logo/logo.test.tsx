import { render , screen } from "@testing-library/react";
import Logo from "./logo";

test("Check for Logo", async()=>{
    render(<Logo source={"../../../images/add.svg"}></Logo>);
    const MuiElement = screen.getByRole(/img/i);
    expect(MuiElement).toBeInTheDocument();
})