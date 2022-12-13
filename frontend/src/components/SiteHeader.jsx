import { useState } from "react";
import { Row } from "./Row";
import { Column } from "./Column";
import { SignUp } from "./SignUp";
import { ViewCart } from "./ViewCart";
import { useNavigate } from "react-router-dom";
import { LogIn } from "./LogIn";

export const SiteHeader = () => {
  const navigate = useNavigate();
  return (
    <Column>
      <Row justifyContent="space-between">
        <Column>
          <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Ecommerce App
          </h1>
        </Column>
        <Row>
          <ViewCart />
          <SignUp />
          <LogIn />
        </Row>
      </Row>
    </Column>
  );
};
