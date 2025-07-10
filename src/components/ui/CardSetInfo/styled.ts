import styled from "@emotion/styled";

// full path to prevent loading circular dependency error
import { Button } from "src/components/ui/Button";
import { TextField } from "src/components/ui/TextField";

export const CardSetInfoStyled = styled.div`
  background-color: #d0e1f5;
  border: 1px solid #3782da;
  padding: 20px;
  max-width: 350px;
  border-radius: 4px;
`;

export const InfoTitleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoNameStyled = styled.h4`
  font-weight: 500;
  font-size: 24px;
`;

export const InfoIDStyled = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  color: darkgrey;
  margin-left: 10px;
  cursor: pointer;
`;

export const InfoFormStyled = styled.form`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const InfoUpdateButtonStyled = styled(Button)`
  font-size: 14px;
  padding: 5px 10px;
  width: 25%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
`;

export const InfoTextFieldStyled = styled(TextField)`
  width: 75%;
`;

export const InfoDeleteButtonStyled = styled(Button)`
  width: 100%;
  margin-top: 14px;
  background-color: #b73636;
  border-color: #7a1111;
`;

export const InfoQuantityStyled = styled.p`
  margin-top: 14px;

  & span {
    font-weight: 600;
  }
`;
