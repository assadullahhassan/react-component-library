import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";

import { Badge } from "../src";

describe("Badge", () => {
  it("renders children", () => {
    render(
      <Badge>
        Active
      </Badge>
    );

    expect(
      screen.getByText("Active")
    ).toBeInTheDocument();
  });

  it("applies the variant class", () => {
    render(
      <Badge variant="success">
        Success
      </Badge>
    );

    const badge = screen
      .getByText("Success")
      .closest(".badge");

    expect(badge).toHaveClass(
      "badge--success"
    );
  });

  it("applies the size class", () => {
    render(
      <Badge size="lg">
        Large
      </Badge>
    );

    const badge = screen
      .getByText("Large")
      .closest(".badge");

    expect(badge).toHaveClass(
      "badge--lg"
    );
  });

  it("renders a dot", () => {
    const { container } = render(
      <Badge dot>
        Online
      </Badge>
    );

    expect(
      container.querySelector(".badge__dot")
    ).toBeInTheDocument();
  });

  it("forwards HTML attributes", () => {
    render(
      <Badge
        data-testid="badge"
        aria-label="Status"
      >
        Online
      </Badge>
    );

    const badge =
      screen.getByTestId("badge");

    expect(badge).toHaveAttribute(
      "aria-label",
      "Status"
    );
  });
});