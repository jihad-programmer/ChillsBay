import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  menuItem,
} from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { ChevronDownIcon, UserIcon } from "@heroicons/react/24/outline";

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MenuItems = [
    "Eat & Drink",
    " Club",
    "Things to Do",
    "Shopping",
    "Account",
    "Contact",
  ];
  return (
    <>
      <section>
        {/* Mobile Responsive */}
        <Navbar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          maxWidth="2xl"
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle
              aria-level={isMenuOpen ? "Close Menu" : "Open Menu"}
            ></NavbarMenuToggle>
          </NavbarContent>

          <NavbarContent className="sm:hidden pr-3">
            <NavbarBrand>
              <img className="w-44" src="./Logo.png" alt="" />
            </NavbarBrand>
          </NavbarContent>

          {/* Desktop Device */}
          <NavbarContent className="hidden sm:flex gap-4 w-full justify-center">
            <NavbarBrand>
              <img className="w-44" src="./Logo.png" alt="" />
            </NavbarBrand>

            <NavbarItem>
              <Link className="text-black">Eat & Drink</Link>
            </NavbarItem>

            <NavbarItem>
              <Link className="foreground">
                Club <sup className="bg-blue-600 text-[8px] px-2">+Hot</sup>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="none">
                    Things to Do{" "}
                    <ChevronDownIcon className="text-blue-500 w-4 h-4"></ChevronDownIcon>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Things">
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>

            <NavbarItem>
              <Link className="foreground">
                <img src="../Shopping.png" alt="" />
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="none">
                    <UserIcon className="text-gray-500 w-4 h-4"></UserIcon>
                    Account
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile">
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>

            <NavbarItem>
              <Button color="primary">Contact Now</Button>
            </NavbarItem>
          </NavbarContent>

          {/* MOBILE RESPONSIVE  */}
          <div className="lg:hidden">
            <NavbarContent className="w-full" justify="end">
              <NavbarItem className="hidden lg:flex"> </NavbarItem>

              <NavbarItem>
                <img src="../Shopping.png" alt="" />
              </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-[#F5FAFF]">
              {MenuItems.map((item, index) => (
                <NavbarMenuItem key={index}>
                  <Link className="w-full text-black capitalize ">{item}</Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </div>
        </Navbar>
      </section>
    </>
  );
}

export default MyNavbar;
