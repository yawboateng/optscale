import React from "react";
import { createRoot } from "react-dom/client";
import TestProvider from "tests/TestProvider";
import MlEditModelForm from "./MlEditModelForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <TestProvider>
      <MlEditModelForm model={{}} employees={[]} onSubmit={jest.fn} onCancel={jest.fn} />
    </TestProvider>
  );
  root.unmount();
});
