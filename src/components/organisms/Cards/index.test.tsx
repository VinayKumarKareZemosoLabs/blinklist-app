import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Cards from "."

it("Cards Test",async () => {
    render(<BrowserRouter> <Cards id={0} image={""} bookName={"Don't ask"} authorName={"Erica"} read={"13"} time={0}></Cards> </BrowserRouter>);
    const CardsElement = screen.getByAltText(/Book Image/i);
    expect(CardsElement).toBeInTheDocument();
})

it("Cards Test For BookDet",async () => {
    render(<BrowserRouter> <Cards id={0} image={""} bookName={"Don't ask"} authorName={"Erica"} read={"13"} time={0}></Cards> </BrowserRouter>);
    const CardsElement = screen.getByText(/Don't ask/i);
    fireEvent.click(CardsElement);
    const changedElement = screen.getByText(/Erica/i); 
    expect(changedElement).toBeInTheDocument();
})



it("Cards Test For Finished Progress0",async () => {
    render(<BrowserRouter> <Cards id={0} image={""} bookName={"Don't ask"} authorName={"Erica"} read={"13"} time={0} librarybu={true} progressValues={0}></Cards> </BrowserRouter>);
    const CardsElement = screen.getByRole("button");
    expect(CardsElement).toBeInTheDocument();
})





it("Cards Test For Finished true",async () => {
    render(<BrowserRouter> <Cards id={0} image={""} bookName={"Don't ask"} authorName={"Erica"} read={"13"} time={0} finished={true} progressValues={31} progress={true}></Cards> </BrowserRouter>);
    const CardsElement = screen.getByRole("button");
    expect(CardsElement).toBeInTheDocument();
})

it("Cards Test For ReadAgain true",async () => {
    render(<BrowserRouter> <Cards id={0} image={""} bookName={"Don't ask"} authorName={"Erica"} read={"13"} time={0} readAgain={true} progressValues={100} progress={true}></Cards> </BrowserRouter>);
    const CardsElement = screen.getByRole("button");
    expect(CardsElement).toBeInTheDocument();
})