import { render , screen } from "@testing-library/react";
import CoverImages from "./coverimage";

test("Check for Cover Image", async()=>{
    render(<CoverImages source={"../../../images/add.svg"}></CoverImages>);
    const MuiElement = screen.getByRole(/img/i);
    expect(MuiElement).toBeInTheDocument();
})