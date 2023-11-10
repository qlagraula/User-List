import users from "@assets/users-2.svg";
import chevronDown from "@assets/chevron-down.svg";
import cross from "@assets/cross.svg";
import eraser from "@assets/eraser.svg";
import check from "@assets/check.svg";
import searchX from "@assets/search-x.svg";

import { Portal, Select, SelectClearTrigger } from "@ark-ui/react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { useState } from "react";

import { css } from "@styled-system/css";
import { button } from "@styled-system/recipes";
import SearchBar from "./SearchBar";

type Item = {
  label: string;
  value: string;
};
type DropdownProps = {
  items: Item[];
  selectedItems: string[];
  onChange: (selectedItems: string[]) => void;
};

function Dropdown({ items, selectedItems, onChange }: DropdownProps) {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Select.Root
      items={filteredItems}
      multiple
      value={selectedItems}
      onValueChange={(e) => onChange(e.value)}
    >
      <Select.Control>
        <DropdownButton selectedItems={selectedItems} />
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <DropdownBody
            items={items}
            selectedItems={selectedItems}
            search={search}
            onSearchChange={setSearch}
            filteredItems={filteredItems}
            onChange={onChange}
          />
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}

type DropdownButtonProps = {
  selectedItems: string[];
};

function DropdownButton({ selectedItems }: DropdownButtonProps) {
  return (
    <div className={button({ cursor: "default" })}>
      <Select.Trigger
        className={css({
          display: "flex",
          gap: "2",
          alignItems: "center",
          cursor: "pointer",
        })}
      >
        <img src={users} alt="users" />
        Teams
        <img
          src={chevronDown}
          alt="chevron down"
          className={css({ paddingTop: "0.5" })}
        />
      </Select.Trigger>
      {selectedItems.length > 0 && (
        <div
          className={css({
            borderRightWidth: 1,
            height: "dropdownSeperator",
            borderColor: "borders.primary",
          })}
        />
      )}
      <Select.ClearTrigger
        className={css({
          display: selectedItems.length > 0 ? "flex" : undefined,
          alignItems: "center",
          gap: "1",
          borderWidth: 1,
          borderColor: "secondary",
          backgroundColor: "lightSecondary",
          borderRadius: "sm",
          paddingX: "1",
          cursor: "pointer",
          lineHeight: "tight",
        })}
      >
        {selectedItems.length} selected
        <img src={cross} alt="cross" className={css({ paddingTop: "0.5" })} />
      </Select.ClearTrigger>
    </div>
  );
}

type DropdownBodyProps = {
  selectedItems: string[];
  items: Item[];
  filteredItems: Item[];
  search: string;
  onSearchChange: (search: string) => void;
  onChange: (selectedItems: string[]) => void;
};
function DropdownBody({
  selectedItems,
  items,
  filteredItems,
  search,
  onSearchChange,
  onChange,
}: DropdownBodyProps) {
  return (
    <Select.Content
      className={css({
        backgroundColor: "surface.secondary",
        borderWidth: 1,
        borderRadius: "md",
        borderColor: "borders.primary",
        boxShadow: "main",
      })}
    >
      <Select.ItemGroup id="list">
        <Select.ItemGroupLabel htmlFor="list">
          <SearchBar
            value={search}
            onChange={onSearchChange}
            visual="dropdown"
          />
        </Select.ItemGroupLabel>
        <SelectAll
          items={items}
          selectedItems={selectedItems}
          search={search}
          onChange={onChange}
        />
        {filteredItems.length > 0 ? (
          <Item selectedItems={selectedItems} filteredItems={filteredItems} />
        ) : (
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "24",
              color: "text.primary",
              fontSize: "sm",
            })}
          >
            <img src={searchX} alt="search x" />
            No results found
          </div>
        )}
      </Select.ItemGroup>
    </Select.Content>
  );
}

type SelectAllProps = {
  selectedItems: string[];
  items: Item[];
  search: string;
  onChange: (selectedItems: string[]) => void;
};

function SelectAll({ items, selectedItems, search, onChange }: SelectAllProps) {
  return (
    items.length > 0 &&
    search.length === 0 && (
      <Select.ItemGroupLabel
        htmlFor="list"
        className={css({
          borderBottomWidth: 1,
          borderColor: "borders.primary",
        })}
      >
        <div
          className={css({
            display: "flex",
            padding: "2",
            gap: "2",
            fontSize: "xs",
            cursor: "pointer",
            alignItems: "center",
            backgroundColor:
              items.length === selectedItems.length
                ? "lightSecondary"
                : undefined,
          })}
          onClick={() => {
            if (selectedItems.length === items.length) return onChange([]);
            onChange(items.map((item) => item.value));
          }}
        >
          <Checkbox.Root
            checked={items.length === selectedItems.length}
            className={css({
              width: "dropdownSeperator",
              height: "dropdownSeperator",
              borderWidth: items.length === selectedItems.length ? 0 : 1,
              borderColor: "borders.primary",
              borderRadius: "xs",
            })}
          >
            <Checkbox.Indicator>
              <img
                src={check}
                alt="check"
                className={css({
                  backgroundColor: "secondary",
                  width: "full",
                  height: "full",
                  borderRadius: "xs",
                })}
              />
            </Checkbox.Indicator>
          </Checkbox.Root>
          All ({items.length})
        </div>
      </Select.ItemGroupLabel>
    )
  );
}

type ItemProps = {
  selectedItems: string[];
  filteredItems: Item[];
};

function Item({ selectedItems, filteredItems }: ItemProps) {
  return (
    <>
      {filteredItems.map((item) => {
        const checked = selectedItems.includes(item.value);
        return (
          <Select.Item
            key={item.value}
            item={item}
            className={css({
              display: "flex",
              padding: "2",
              gap: "2",
              fontSize: "xs",
              cursor: "pointer",
              alignItems: "center",
              backgroundColor: checked ? "lightSecondary" : undefined,
            })}
          >
            <Checkbox.Root
              checked={checked}
              className={css({
                width: "dropdownSeperator",
                height: "dropdownSeperator",
                borderWidth: checked ? 0 : 1,
                borderColor: "borders.primary",
                borderRadius: "xs",
              })}
            >
              <Checkbox.Indicator>
                <img
                  src={check}
                  alt="check"
                  className={css({
                    backgroundColor: "secondary",
                    width: "full",
                    height: "full",
                    borderRadius: "xs",
                  })}
                />
              </Checkbox.Indicator>
            </Checkbox.Root>

            {item.label}
          </Select.Item>
        );
      })}
      {selectedItems.length > 0 && (
        <Select.ItemGroupLabel
          htmlFor="list"
          className={css({
            padding: "2",
            borderTopWidth: 1,
            borderColor: "borders.primary",
          })}
        >
          <SelectClearTrigger className={button({ size: "fluid" })}>
            <img src={eraser} alt="eraser" />
            Clear filters
          </SelectClearTrigger>
        </Select.ItemGroupLabel>
      )}
    </>
  );
}

export default Dropdown;
