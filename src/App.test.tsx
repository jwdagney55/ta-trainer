import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  })

  it("has the Control Panel when the application loads", () => {
    const element = screen.getByText("Control Panel");

    expect(element).toBeInTheDocument();
  })

  it("does not show the Answer when we first load", () => {
    const element = screen.queryByTestId("answer-label");

    expect(element).not.toBeInTheDocument();
  });

  it("does show the Answer when we click the reveal button", async () => {
    const button = screen.getByTestId("reveal-answer-button");
    button.click();
    const element = await screen.findByTestId("answer-label");
    expect(element).toBeInTheDocument();
  })

  /*

  it("has the Add New Card Button", () => {
    const element = screen.getByText("Add New Card");

    expect(element).toBeInTheDocument();
  })

  */

  it("shows the modal on button add card click", async () => {
  const button = screen.getByText("Add new card");

  button.click();
  const header = await screen.getByText("Add New Card");
  expect(header).toBeInTheDocument();

  })

  it("has the prompt section in the modal", async () =>{
    const button = screen.getByText("Add new card");

    button.click();
    let newPrompt:string = "testing adding a prompt";
    let newSugges:string = "testing adding a suggestion";
    let promptArea = await screen.getByTestId("prompt");
    promptArea.innerHTML = newPrompt;
    let suggesArea = await screen.getByText("Suggested Answer");
    suggesArea.innerText = newSugges;
    const saver = await screen.getByText("Close");
    expect(saver).toBeInTheDocument();
  })
})
