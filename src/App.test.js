import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { render as testRender } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";
import LaunchCard from "./components/card";

test("renders website heading, making sure DOM is mounted", () => {
  const { getByText } = testRender(<App />);
  const linkElement = getByText(/SpaceX Launch Programs/i);
  expect(linkElement).toBeInTheDocument();
});

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders launch card with data", async () => {
  const fakeLaunchData = {
    flight_number: "1",
    mission_name: "test name",
    mission_id: ["123"],
    launch_success: true,
    launch_date_local: new Date().toISOString(),
    rocket: {
      first_stage: {
        cores: [{ land_success: false }],
      },
    },
    links: {
      mission_patch_small: "https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png",
    },
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeLaunchData),
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<LaunchCard event={fakeLaunchData} />, container);
  });

  expect(container.querySelector("[data-testid='name']").textContent).toBe(
    `${fakeLaunchData.mission_name} #${fakeLaunchData.flight_number}`
  );
  expect(container.querySelector("[data-testid='year']").textContent).toBe(
    String(new Date(fakeLaunchData.launch_date_local).getFullYear())
  );
  expect(container.querySelector("[data-testid='logo']").src).toBe(
    String(fakeLaunchData.links.mission_patch_small)
  );
  global.fetch.mockRestore();
});
