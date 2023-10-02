import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Verbos",
    path: "/",
    icon: <FaIcons.FaLeanpub />,
    cName: "nav-text",
  },
  {
    title: "Substantivos",
    path: "/substantivos",
    icon: <FaIcons.FaMountain />,
    cName: "nav-text",
  },
  {
    title: "Animais",
    path: "/animais",
    icon: <FaIcons.FaPaw />,
    cName: "nav-text",
  },
  {
    title: "Cores",
    path: "/cores",
    icon: <FaIcons.FaPalette />,
    cName: "nav-text",
  },
  {
    title: "Opção 5",
    path: "/opcao5",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Opção 6",
    path: "/opcao6",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
