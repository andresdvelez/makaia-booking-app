import React from "react";
import { TextSC, TitleSC } from "../../components/Banner/style";
import { ContainerSC, ContentSC, IconsSC, MainContainerSC } from "./style";

// Icons
import { FaCcAmex, FaCcPaypal, FaPiggyBank } from "react-icons/fa";
import { RiMastercardFill, RiVisaFill } from "react-icons/ri";
import { SiWalmart } from "react-icons/si";

function PaySection() {
  const iconStyle = { color: "4CB4DF", fontSize: "1.8rem" };

  return (
    <MainContainerSC>
      <TitleSC>Pago seguro</TitleSC>
      <ContainerSC>
        <ContentSC>
          <TextSC>
            Tarjeta de crédito, tarjeta de debito y pago electronico
          </TextSC>
          <IconsSC>
            <FaCcAmex style={iconStyle} />
            <FaCcPaypal style={iconStyle} />
            <FaPiggyBank style={iconStyle} />
            <RiMastercardFill style={iconStyle} />
            <RiVisaFill style={iconStyle} />
          </IconsSC>
        </ContentSC>
        <ContentSC>
          <TextSC>
            Efectivo en cualquiera de las sucursales participantes
          </TextSC>
          <IconsSC>
            <SiWalmart style={iconStyle} />
          </IconsSC>
        </ContentSC>
      </ContainerSC>
    </MainContainerSC>
  );
}

export default PaySection;
