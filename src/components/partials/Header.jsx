import React from "react";
import { Menubar } from "primereact/menubar";

function Header() {
  const items = [
    { label: "Acasa" },
    {
      label: "Meniu",
    },
    { label: "Despre noi" },
    { label: "Rezervari" },
    { label: "Contact" },
  ];

  const start = (
    <div className="flex items-center px-2">
      <h2>Horeka Restaurants</h2>
    </div>
  );

  const end = (
    <div>
      <i className="pi pi-heart mr-3" style={{ fontSize: "1.5rem" }}></i>
      <i
        className="pi pi-shopping-cart mr-3 relative"
        style={{ fontSize: "1.5rem" }}
      ></i>
      <i className="pi pi-user mr-3" style={{ fontSize: "1.5rem" }}></i>
    </div>
  );

  return (
    <header>
      <div className="flex justify-between  p-2 bg-gray-100 ">
        <div>
          <span className="mr-4 text-sm">
            <i className="pi pi-phone" /> +40 123 123 123
          </span>
          <span text-xs>
            <i className="pi pi-envelope " /> contact@email.com
          </span>
        </div>
        <div>
          <span>
            <i className="pi pi-truck" /> Livrare gratuită la comenzi peste 100
            LEI
          </span>
        </div>
      </div>

      <Menubar
        model={items}
        start={start}
        end={end}
        pt={{
          root: "rounded-none",
          menu: "mx-auto",
          end: "mx-0",
          start: "mx-0",
          menuitem: "bg-gray-100",
        }}
      />
    </header>
  );
}

export default Header;
