import { render , screen } from "@testing-library/react"
import FooterNav from "."

test("Footer Navigation Test", async()=>{
    render(<FooterNav listHead={"Head"} listingItems={["Content1","Content2","Content3"]}/>)
    const ListElemenet = screen.getByRole("list");
    expect(ListElemenet).toBeInTheDocument();
})